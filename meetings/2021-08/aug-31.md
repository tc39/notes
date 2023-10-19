# 31 August, 2021 Meeting Notes

-----

**In-person attendees:** None

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Rob Palmer           | RPR            | Bloomberg          |
| Waldemar Horwat      | WH             | Google             |
| Jack Works           | JWK            | Sujitech           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Ashley Claymore      | ACE            | Bloomberg          |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Chris de Almeida     | CDA            | IBM                |
| Cam Tenny            | CJT            | Igalia S.L.        |
| Ioanna Dimitriou     | IOA            | Igalia S.L.        |
| Chengzhong Wu        | CZW            | Alibaba            |
| Mathias Bynens       | MB             | Google             |
| Josh Blaney          | JPB            | Apple              |
| Dave Poole           | DMP            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Yulia Startsev       | YSV            | Mozilla            |
| Caroline Cullen      | CCU            | Mozilla            |
| J. S. Choi           | JSC            | Indiana University |

## Opening

AKI: Good morning, everyone. Welcome to New York, New York. It’s a hell of a town. I think that’s where we are. Right? That’s where we are. In case you haven’t met me before, I’m Aki, I am co-chair along with Brian Terlson and Rob Palmer. We will be facilitating your day today.

AKI: I’m just going to assume that everyone has signed the form because you’re here. If you have not, please do so. We use that information because it’s required by the Bylaws. It’s not optional. I ask that you all please take a moment to read the code of conduct. It’s available on the website, TC39.es.

AKI: We expect you to behave in a manner that aligns with the code of conduct. So it’s probably a good idea to familiarize yourself with it.

AKI: Our communication tools are: TCQ, which you can find a link to in the reflector or on the schedule. If you are unfamiliar with how TCQ works, please send myself or one of the other co-chairs a message and we’ll talk you through it. We also have a chat on Matrix, which is the thing that is going to replace IRC. Apparently, I mean, finally, there’s a chance that something is going to replace IRC for the first time in 20 years.

AKI: You can find our [Matrix] Space which—think like Discord server, Slack team. It’s TC39. We have a bunch of channels. Obviously, there is a TC39 general channel. There is also a delegates channel. It is logged. It is public, but only registered delegates can speak. We also have Temporal Dead Zone, our backchannel. Feel free to join that and and sass your sass; do not have any technical conversation there because it is not formally part of the technical committee.

AKI: We have a hallway track because we haven’t seen each other’s faces in forever and it gives us a chance to chat. You can find it in Mozilla Hubs; if your computer is struggling with rendering, try setting it to 800 by 600. That really does make a difference.

AKI: Alright, next on to our IP policy, intellectual-property rights. The very-short version is: In order to participate in TC39, you have to represent an Ecma member as their delegate, or you have to be an invited expert, invited by the secretary-general, or you have to—Nope, that’s it. Just those. And if you’re an invited expert, you need to make sure you sign the RFTG agreement, the royalty-free task-group agreement. The basic concept just means you’re licensing the rights to your IP over to Ecma, so that ECMA can publish the standard at the end of the first quarter.

AKI: Our next meeting will be in London. It’ll be four days. It’s in October, You can find information about it on the Reflector.

AKI: Let’s get moving on to the boring housekeeping stuff. Motion to approve last meeting’s minutes—everyone’s seen the notes, right? Great. I’m going to take that as yes. Already had a chance to see the current agenda goodness? I hope so. All right, motion to adopt the current agenda. Great.

## 262 Editor's Report

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1Hu_fPWqQtKuXGvvifGM_v7nEfqDiwR9h1nRTCS9chE4/edit)

KG: (presents slides)

AKI: Any questions? Queue is empty.

## 402 Editor's Report

Presenter: USA

USA: No update.

## 404 Editor's Report

Presenter: Chip Morningstar (CM)

CM: No update.

## Mark `with` as legacy

Presenter: Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/2441)

JHD: We’ve discussed in committee about when we want to mark things as “legacy”, which is different from “normative optional”. Annex B has two connotations: normative optional and legacy. We’re now splitting these apart into two separate labels and pulling things out of Annex B, so we need consensus to mark things as either one. So, we’re trying to mark the `with` statement as legacy. Given that we no longer allow it in module code, or class bodies, this seems in line with the committee’s preference. So, is there anyone who has an issue with marking `with` as legacy?

SYG. I don’t have an issue with marketing `with` as legacy. But what you were saying about legacy being either/or with normative optional? But it’s not either/or, right?

JHD: Correct. They’re not mutually exclusive. Something can be legacy, normative optional, both, or neither.

SYG: Cool. And in this case, what you are proposing is “legacy”. Not normative optional. Just legacy.

JHD: Right. It is still normatively required.

SYG: I guess my question is, I think `with` is terrible and it certainly warrants legacy. There’s but it’s one of those things that is already prohibited in strict mode and is only allowed in sloppy mode and that has been—like that set of things you could argue are all legacy but are we just going to do this piecemeal? like that’s fine with me.

JHD: I mean, this was a specific pull request for this one piece. So that’s why it’s being brought up there in that way. It seems reasonable to me that all the things that we think are bad and should be removed, but which we can’t remove, should be marked as legacy - but it also seems like a broad thing to ask for a sweeping consensus on. If the committee is comfortable with that, we could grant that to and then we would have pre-achieved the consensus for the other things that are only allowed in sloppy mode.

SYG: I think it’s kind of hard to carve out something like…`with` is obviously a standalone feature that you can mark as legacy, but some of the other stuff like throwing reference errors is likely to be difficult to actually mark some of those things. It’s like seeing, sure [?]. But yeah, I think I'm doing a piece of mail spine. Anyway, support `with` legacy.

LEO: Just a quick suggestion for legacy. It’s not up to my decision but the editors maybe [should] create [an] anchor for legacy.

JHD: That should already exist. The word legacy is a link in the column next to every legacy section, as is normative optional. If they’re not, that’s a rendering bug and we can address that separately.

AKI: Sounds like we have consensus.

### Conclusion/Resolution

- Consensus

## Relative indexing .at() method for Stage 4

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-relative-indexing-method)
- [slides](https://docs.google.com/presentation/d/1A8oU6B-lN-dO2OKgIfvURb89yC-C5TGiOMW4KGd2Jaw/edit?usp=sharing)

SYG: This is for Stage 4 for the `at` method. Why is it not Stage 4? Because, previously, this Lego marketplace site named BrickLink was using array instances as hashmaps and using `at` as a key and it broke. When Firefox shipped, it broke. When Chrome initially shipped, we reached out to them, and they eventually fixed it…it seems like by rewriting their whole site, which I guess was planned anyway, so that’s that. Since then Chrome has shipped—and Firefox. I don’t know how to look up Safari’s release schedule for when features come out, but I think it’s in the pipeline. There are 262 tests. And there is a PR to the main spec as well that has been reviewed by the other two editors. I think it’s approved. But there was some small back and forth that should be fixed now. And that’s it, it, Stage 4?

AKI: Can you imagine being that developer at BrickLink? Like, imagine being that developer who had that delegate reach out to them being like, “Excuse me, could you maybe not?”

SYG: Both Google and Apple folks, and maybe some Mozilla folks as well.

AKI: All right. I think we have consensus. Queue is empty. Great, great. Thank you very much, congratulations. Thank you both.

### Conclusion/Resolution

- Consensus

## Accessible Object hasOwnProperty for Stage 4

Presenter: Jamie Kyle (JK)

- [proposal](https://github.com/tc39/proposal-accessible-object-hasownproperty)
- [slides](https://docs.google.com/presentation/d/177vM52Cd6Dij-ta6vmw4Wi1sCKrzbCKjavSBpbdz9fM/edit?usp=sharing)

JK: This is accessible `hasOwnProperty`. Super-fast explainer: `Object.create(null)` makes `hasOwnProperty` kind of unreliable. To use it reliably you have to manually call `Object.prototype.hasOwnProperty.call()` some object with a key, which is densely packed with concepts for beginners…just to check if a property is there. So `Object.hasOwn()`, it makes it simpler. The background there: a couple of libraries that have like, millions of downloads just dedicated to checking. We’re making `hasOwnProperty` more accessible.
The spec is very simple. It is basically the same as `hasOwnProperty` except with steps one and two flipped. Previously `hasOwnProperty` had them flipped for legacy reasons. But it only changes when there are errors thrown.

The ECMAScript PR is ready and improved by others. The tests have been merged into test262. Implementations: V8 has released `hasOwn` in v8 9.3. SpiderMonkey is planning, really set in Firefox 92 [?] to make it unflagged. In JavaScriptCore it was actually just merged this morning, but has been ready for a while. There are other implementations, such as Deno 1.13. In terms of community feedback, social media has given a lot of approval. It’s documented in MDN and I’ve seen thousands of [?] polyfills merged on GitHub with [?]. ESLint is already considering a rule for it; there’s already rules in the community for it. I’ve heard from companies that switched to `hasOwn` without issue and no issues have been raised in the public tracking issue or anything. So, all very smooth. Overall it seems like all the conditions for Stage 4 have been met. So, Stage 4?

AKI: Yeah, is this the fastest Stage 4 we’ve ever done, too?

JHD: Optional catch was pretty fast, but this is up there.

AKI: Yeah. All right. Well, the queue is empty. So if you’re asking for consensus, I think you got it.

JK: And thanks to everyone who has helped out along the way and implemented it and such. Thank you.

### Conclusion/Resolution

- Consensus

## Class static initialization blocks for Stage 4

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-class-static-block)

RBN: So, class static initialization blocks. We’ve been talking about this for a while. We currently have test262 tests written and merged. We have two implementations: one is in SpiderMonkey currently shipping behind a flag in Firefox 92 and intending to ship unflagged in Firefox 93. It’s also shipping in V8 checked as V8 94146 in the current public release for Chrome, and there is a signed off pull request for this feature in the ecma262 repo. Additionally, Babel has had this feature. It is planning to mark it as enabled by default as soon as we have a Stage 4 acceptance. So to go along with everybody who is quickly moving through, I would like to ask for consensus moving class static initialization blocks to Stage 4.

AKI: Cool, the queue is empty. So if that’s a request for consensus, I do believe you have it.

RBN: In that case, thank you very much.

### Conclusion/Resolution

- Consensus

## Change Array by Copy

Presenter: Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-change-array-by-copy)
- [slides](https://www.rricard.me/serve/tc39-aug2021-array-copy.pdf)

ACE: Hello, my name is Ashley Claymore; I’m a delegate from Bloomberg. I’m an avid reader of the notes, but a first-time attendee. So really excited to be here. So today we’re going to be going over the change-array-by-copy proposal and requesting Stage 2 for it if all goes smoothly.

ACE: [slide 2] So, the high-level summary of what the problem we’re trying to solve here is: can we take the non-mutating methods that were inspired by the record and tuple proposal, and see if they also work on arrays and `TypedArray`s? Because if they do, then all three of these different types of lists can all participate in a larger common interface than it looks like they currently would otherwise.

ACE: [slide 3] The initial idea for this proposal came from the methods that were already being added to the record and tuple proposal. They are kind of immutable versions, like with `Object.freeze`, but instead they’re deeply immutable. And then, if we look at some of those methods, some of those methods are almost identical to the ones you have on `Array`: Things like `map` and `filter`, they kind of work nicely because there’s no mutation involved. But then for the mutating methods like `sort`, they don’t so naturally work on tuples because `sort` mutates. So `Tuple` was adding variations of these mutating ones.

ACE: We then thought, what if you can imagine in the future if tuple goes ahead, people could then want to take those methods and go: Tuple has these nice non-mutating methods, could we perhaps also have those on `Array.prototype`? The problem with going in that direction is they may not work on `Array.prototype`, perhaps for a reason like web compatibility.

ACE: So it would be smoother if we actually look at which things work on `Array` first, and make sure they actually work there fully. And then port in the opposite direction because `Tuple` won’t have problems such as web compatibility. If this proposal goes forward and we come up with the names and semantics we like, then they will use the methods that the record and tuple proposal will adopt.

ACE: [slide 4] As a recap of the meeting for people that were there in April: When it was proposed by Robin, then the names of the methods all followed this past tense pattern. So it’s `sorted` and `popped`. There was some support for the ??? that the semantics were going for, that all the `Array.prototype` methods would always return an array without holes in it, regardless of [whether] the original receiver had holes.

ACE: There was concern raised about these names not being particularly clear about the performance. So `pop` is O(1), so it might be surprising to people that just changing to `popped` is suddenly a linear operation. We also talked about how this proposal has, like, ten new methods which is quite a large area of the web to check for compatibility. It’s a large surface area, but we did get consensus for Stage 1.

ACE: [slide 5] This is a bit of a meaty slide, so I’ll go through a little bit slowly. It’s my attempt at a Venn diagram. So we’ve got on the left a big oval of all the methods that are currently on `Array.prototype`. And then on the right, we’ve got a big oval with all the methods that are on `TypedArray`. And then in that top box, we’ve got the ones that mutate.

ACE: So again, if you’ve got an immutable array, like a tuple—the ones that are in the kind of bottom half don’t mutate. They naturally kind of work across, but they’re mutating ones. They don’t work.

ACE: [slide 6] So well. If you have an immutable array or list, if you take something like Immutable.js, what they do is they still have these methods except they change the semantics. So they still have `pop` and they call it `pop`—it doesn’t mutate the list. Because in Immutable.js, things are immutable. Instead of returning the item that was popped, they return a new list that has one less item from the top of the stack. So we didn’t want to do that, we don’t want to have methods with the same name, but a different signature or a very different behavior. Quite confusing to have `sort`, have a method called `sort` in the standard but one is always mutating and one is not.

ACE: So, what we’re thinking of doing is we take those going to mutating methods and then create mirrors of them for each. So each method would have a mirror that doesn’t mutate.

ACE: There’s a little bit of a kind of awkwardness here that we realized while putting this together that we never had a mirror for `TypedArray`’s set. So that’s kind of a question: whether we kind of focus more on the things that were on `Array` and were also coincidentally on `TypedArray`, where `set` is only on `TypedArray`. So I guess we haven’t really looked into whether that should be included in this yet.

ACE: We also have a `withAt` which again kind of has come over from the tuples proposal. It’s almost certainly not going to be that name. You want to go with that there is now. We’ve got at that Stage 4, which isn’t a mutating method. So when it kind of came from the top of the proposal, the `withAt` was more of a replacement for index assignment. So that one again is one that’s maybe we’ll drop or just completely change its name. It’s less clear where that one fits in.

ACE: [slide 7] Why are we trying to do this, more than just having a kind of nice symmetry? So we think it is actually useful having these methods from an ergonomic point of view. Take `sort` right now. You can do things like spread the array or call `slice` to get a copy and then sort though. The downside of that is that, as soon as you spread, you’re saying, “I’m spreading into an *array*”. So it doesn’t work if you want that to be generic with tuples or `TypedArray`s.

ACE: You also—for things like assignment, you kind of can’t [use it] in a kind of a chained way, like you can with the methods. So having these as methods, even though you can do them already, we think is nice, because you have kind of a method chaining syntax. So you can immediately say what you’re trying to do, [instead of?] breaking things up across multiple statements. And, again, you have this advantage of it being a generic method lookup.

ACE: [slide 8] So we’ve been talking about this proposal as part of the kind-of-regular records/tuples meetings, and some of the semantics that we started talking about [were] specific details of exactly how this would work for a more detailed spec perspective. One of those things we said is that we want all of these new methods to never produce holes in an array. `TypedArray`s don’t have holes. So it’s going to be less interesting there, it’s more for the methods on the `Array.prototype`. We’re saying that even if the receiver has holes, they won’t be carried across. And you won’t get a hole in the returned new array. So this means it’s not a complete drop-in replacement of `slice().sort()`. If you replace that with a kind of new `sorted` thing, you would actually have slightly different semantics.

ACE: [slide 9] The other detail that we’ve been talking about is whether these methods should look up `Symbol.species`. We decided that we had a lot of strong support for not looking at `species`. So you would always get just a kind of a built-in array or `TypedArray`, depending on which one you’re calling it on…regardless of if the receiver is trying to use `Symbol.species` to alter the actual constructor being used.

ACE: [slide 10] A lot of work is still required. So we definitely think this proposal is not done at all. And there’s just, you know, going to fly through beeping. It’s a lot of work still to do. I’m hoping to do that work while we’re in Stage 2. The kind of focus we have for our remaining work is whether we need to add ten new methods to be ready to prototype. That’s quite a lot. A lot of people say there’s already a lot of methods on the `Array.prototype`. Should we be adding ten more? Especially as some of them aren’t technically adding something you couldn’t already do if you’re already familiar enough with the methods. Just something like `popped` you can just do with `slice(0, -1)`.

ACE: The other thing we think might be harder is coming up with names: something that is going to be intuitive for what these methods are doing, and something that’s compatible with the web. We’ve got a GitHub issue thread, spitballing and bikeshedding as much as we can. Going over the options, an example of some of the ideas in that thread is using the prefix of `copy`, instead of a do-this-`with` prefix, and also potentially having like a `to` prefix. Similar to how `String.prototype` already has `toUppercase` or `toLowercase`, you [could] have `toSorted`.

ACE: With these things, as much as it seems like having not adding fewer methods, may be a good thing on the flip side. What we’re not sure about is whether it even is better to just be consistent, rather than only adding a few methods where we think it’s most valuable. So maybe we decide `sorted` and `reversed` are the most valuable, and only add versions for those. Whether that’s more confusing because there are people who have to learn which ones we’ve decided to have and move them on tuple…Similar to the naming with names that are the most intuitive.

ACE: [slide 11] We’ve got the usual links for people who want to read about it. So we’ve got spec written. We’ve got a polyfill we’ve been using to kind of help us write the spec. So, the polyfill is kind of designed to be as close to matching what the specs as possible. And a nice lot of GitHub issues to talk about.

ACE: [slide 12] Ready for queue.

WH: I’m curious what the semantics are. These do both an operation and a copy. Which comes first? Does the copy come first, or does the operation come first?

ACE: I guess neither comes first because it’s…So there isn’t actually a copy. So depending on the method, it will change exactly what’s happening. I guess the short answer is there isn’t a copy performed. Each method is separately defined in the spec to something like a `popped()` will create a new list and then it will iterate through transferring the items up until the end. So if you had a getter on the original receiver for that, the last item that’s being popped would never be called.

WH: What about `sort`?

ACE: You’re right. For `sort`, a copy is performed first, and then the copy is sorted.

WH: Okay.

JHX: I noticed that the `withAt` method seems not clear with the `at` method. It accepts two parameters. I mean it seems useful, but maybe we should change the name.

ACE: For the `at` method?

JHX: The `withAt` method.

ACE: Yeah. No, I agree with that one. So that was one that’s come across from the tuple proposal. That’s because with a tuple you can’t assign to an index: that method was added as a way of being able to effectively assign to an index. But instead you would actually create a new tuple with one index changed. That’s an odd one out. and I think maybe we shouldn’t have it there because it breaks this pattern of having, for any of these new methods, the mutator alternative, or maybe we should keep it and just change its name. So it’s very clear that it’s not a kind of mutating and non-mutating alternative to an existing data.

PFC: In `Temporal`, `with` copies and mutates, and `to` transforms the type, like `toString`. So there’s a possibility for correspondence here.

ACE: I think that’s why we’ve currently got the `with` and the `to` as possible prefixes because there’s already some convention for those already. Whereas prefixes like `copy`, that would be a kind of a brand new kind of idea of naming to explore. As you say, I think the naming of these will be hard to get right. See, mutate as convention for something like `to`, as you say to is most commonly used to change the type of something and it’s only, I think it’s only “toUppercase” and “toLowerCase” where it’s not being used to change the type though. Potentially “with” is better for them, maybe “with” is left more confusing for people because we’re not actually combining it with another type; we’re combining it with an operation. It’s good to call out that the `Temporal` does have this `with` idea already.

AKI: Okay. We are at the end of the queue.

CCU: Yeah, the SpiderMonkey team has discussed the justification for this proposal. We believe it’s easily polyfillable and we have concerns about adding more things to the `Array` object. So, where we’ve just had discussions about the justification for this proposal.

ACE: Just as on adding more things to `Array.prototype`…Is that from a technical point of view or for a more from an educational point of view? Just being a large prototype for humans to understand, or more is it a large prototype for an implementation and memory usage?

CCU: I believe it’s from a maintenance or memory perspective, as far as it just being a lot to add to the `Array.prototype`. So we have discussed it staying a polyfill as opposed to a full language feature at this point, because of our concerns about the additions to the Array object.

JHD: Just to be clear: to be a polyfill, it would have to be part of the language. It would just be a userland library otherwise. So is Mozilla suggesting that it remain in userland essentially and not be standardized?

CCU: That’s what we had discussed. Yes.

ACE: One potential downside remaining in userland is the one of the advantages we think of putting it on the prototype: that it means you can kind of reliably write code that will work across arrays, `TypedArray`, and tuples. You can do that in userland, though. It would mean we’re saying we’re kind of encouraging userland to mutate prototypes, which not everyone agrees with, but there’s nothing stopping people mutating a prototype, so they’re not frozen or anything.

BFS: I think we shouldn’t have that discussion right now.

ACE: Good point, BFS.

AKI: Shame and lectures are what’s stopping people from—never mind, sorry, BFS, go ahead.

BFS: So, I’m curious, just in light of this objection, if the same objection applies to `Tuple` having a prototype with these methods on it? Because they’d be very similar to these exact methods. And so if there’s an objection to adding them to `Array` and you already have to do implementations for `Tuple`, there’s going to be duplication of course, but is there an objection to having a large `Tuple` prototype as well?

CCU: I will get back to you in one moment.

BFS: Yes, so if you’re going to get back to me, just I’m particularly curious, because these are effectively a way to treat arrays as immutable, similarly to tuples. And so if there was objection to having these on arrays, it seems like there might also be objections to having them on tuples, which would be problematic since not having methods on `Tuple` seems weird. Okay, okay, that’s all.

RRD: Yes, well, we’re waiting. Maybe I can also ask a question. I’m in agreement with what BFS said. The main rationale as we explained for this proposal to be in line with `Tuple`. So if we were to remove surface from this proposal, we would remove surface from `Tuple` as well. Which again, in the discussion [???] is good or wrong?

RRD: My main question is, is it an objection to Stage 2? And if that’s the case, can we resolve that objection with a reduction of scope as proposed in earlier slides? Actually, can you go back to the slide where we proposed? [slide 10: “Research required before Stage 3”] So the first point here is essentially saying that we are considering removing most of those methods, actually, if we think that makes more sense. And we want to discuss that [option], to find a solution to that before spec [?].

CCU: I believe that, [a requirement] to satisfy our objections to Stage 2, would be the reduction in the amount of methods. [It] would be added.

RRD: So, to be clear, you would be okay with Stage 2 only if we commit to that.

CCU: Yes, reduction. Yeah.

RRD: Okay, understood.

ACE: I want to take one of the key bits of research. We want to learn more from people, learning the language perspective, whether having a consistency of all of the mutations [should mean] also having a prefix? Whether that shows kind of a large sign of making the language kind of more consumable to a beginner? So right now, not having done that research. We don’t know how important it is that we have that kind of consistent pattern as opposed to, just kind of cherry-picking, a few select methods. I don’t know, Robin, what your thoughts are.

RRD: I guess I would prefer to keep this question open. As you said, we want to research those things. We want to see what people think about those methods before committing to either one of them, but I do see both in the chat and in TCQ that we have strong opinions on Stage 2 here; maybe we should let them talk.

DE: Okay, so it sounded like the concerns based on the wording might have come from people who aren’t here to see the presentation. I wonder if we could talk with them directly, maybe offline somewhere, to make sure that we’re all on the same page about the motivation. Because I think it was explained in the presentation why this is being proposed to something built-in and not in a userland library. So, it seems like we’re kind of talking past each other, not to each other but in general.

DE: Even if we didn’t have these particular things, I do think it makes sense for us in TC39 to add things to the JavaScript standard library, that could have been written by any user-level Library. I think it’s pretty normal for languages to have standard libraries. We just advanced a couple other very easily polyfillable standard-library proposals to Stage 4.

DE: So I'd like to understand a bit more broadly, what Mozilla thinks about, like, which things shouldn’t be added because they’re polyfillable. I mean, the scope reduction seems like a good way forward, but the framing of the object seemed a lot more broad than that. So, I would, I think it would be reasonable to advance this to Stage 2 today, with the idea that it will be contingent on this co-production being, you know, worked out? But I’d like to understand better. What the total constraints are, that [?] you would like to see for the JavaScript language?

CCU: I apologize. I think the predominant objection would be the amount that was going to be added initially. And I think that the main objection that we had, the reduction would satisfy. So, I apologize for the wording. That was just something that came up from a previous discussion.

DE: Okay, so the polyfillability is not the issue; instead it is that there are too many methods, and we should have a reduced set.

CCU: Correct? Okay, great.

DE: So we all agree that this could be worked out during Stage 2, and Stage 3 would be contingent on satisfying the details of these concerns?

CCU: Exactly.

KG: I definitely don’t want to block if no one else shares this opinion, but it seems to me like the list of methods is major semantics and deciding those before Stage 2 seems appropriate. It seems kind of weird to say that we are advancing a proposal, but we don’t actually know what methods are even in it. That just seems like it would be a pre-Stage-2 concern for me. I don’t know if anyone else agrees though.

RRD: I mean, here we have the upper bound of the methods that we could have. All we’re going to do from now on is reduce the number of methods. So I yeah, I guess that's up to you to see if that’s okay or not.

WH: I agree with reducing the set of methods, not because of any concerns about the number of methods, but some of them are just kind of silly. I think expressing them using `slice` would actually reduce some artifacts, such as users chaining these methods without realizing there are better solutions using slice.

RRD: Yeah, so we are aware of that. That’s why we have the reduction of scope on the table. Just one limitation. I want to be very clear with information: that choice means that we’re going to reduce scope in `Tuple.prototype` methods. So this is something that for coherence, just needs to be kept in mind. Again. The champion group is okay with the alternatives here.

AKI: All right, we are at time. So if you’re going to ask for consensus do it now. Otherwise, we are going to move on.

ACE: And I’d love to ask for a consensus. It’s not clear to me whether we have it.

AKU: All right, do we have consensus for Stage 2 or are we going to block until this is worked at our Stage Station?

SYG: I kind of support Kevin. I don’t think we need to have an exact list that is binding but I would like a rough idea of what you want to remove. Is that something you think you can do today or tomorrow?

AKI: We won’t be able to come back to it. We have four hours too much content. So we’ll have to come back to this in October. Thank you very much. Ashley and Robin. And so, there we go. No, we did not [?] up.

KG: I said I do not block.

AKI: You do not block, but we don’t have consensus. We don’t have time to call for it. Again. We have to say that this day to our time boxes. So we’ll come back and discuss this again in October.

WH: This is weird. Nobody is objecting. A call for consensus *was* made and nobody objected. So why are you saying that?

AKI: We don’t have consensus because we didn’t even get through the queue. All right. I mean if, if we, if we have consensus, we have consensus. Wonderful.

### Conclusion/Resolution

- Consensus for Stage 2

## DurationFormat Update

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)
- [slides](https://ryzokuken.dev/slides/2021-08-df.html)

USA: [slide 1] This is a Stage-2 update for `DurationFormat`. [slide 2] We had a lot of iterations over the design, and for different reasons none of the designs we had so far were acceptable. There were a lot of edge cases and there were a lot of use cases that were needed to accommodate. Because this we kept iterating until we didn’t have to.

USA: We sat down recently and came up with a design that works now, which is what we’re going to propose. It addresses all the edge cases I was talking about and it is the added benefit of this design. It’s not something that was explicitly a requirement posted by anybody, but it was something that we wanted to make consistent with `DateTimeFormat` because it sits with `Temporal`. `Temporal` adding `DateTimeFormat` support [?], with `Temporal.Duration` having a similar API surface, would be amazing for developers working in the same space. We also ironed out the edge cases so that they’re all accounted for. And this design is approved by TC39-TG2.

USA: [slide 4] Let’s get to the new design. So, it works similarly to the old design for the common use cases. It is easy to specify a base style, being the style that would be applied pretty much consistently throughout the [?]. So if you just stick to a certain style, which I think is going to be one of the most common cases. It’s very easy to do this.

USA: All old styles are supported. So, of course, long, short, narrow, but also digital is supported. Digital, talking more about it [?] works actually better than previously works as you’d expect it out of the box. But yeah, as would also have expected the older design to, to have supported.

USA: Truncating a part of the input value is still not supported. So we decided it doesn’t make sense for a compound value. Maybe not a complement, but it’s a single-duration value [?]. We truncate some part of it. Just—the output is not the same as the input. With a tiny catch, which I’ll talk about in just a bit.

USA: [slide 4] The new things, new improved semantics for this design is that it allows unit-specific styles akin to `DateTimeFormat`. So if you are familiar with `Intl.dateTimeFormat`, you would know that in `dateTimeFormat` you can specify styles per field, right? Unfortunately that didn’t have base styles. So later on there was bigtime date style in time style, sort of did that. But yeah, so in `DateTimeFormat`, you can specify exactly the hours for example should be, and when it’s nothing else so you can be a bit more fine-grained.

USA: We have this unit-specific style in this new design. It also allows a per-unit display setting to always display certain units to always just place our [units?] so. In to say, hey this unit. It’s just playing [?] it, always irrespective of what the input defaults to.

USA: We have defaults that just work, and they, my opinion piece in so far. The people who could refute this proposal should believe that these defaults work much better.

USA: And we have better support for fractional values.

USA: [slide 5] Just to quickly go over some examples. If you have a new `Intl.DurationFormat`, and if you have a duration, or something else, like a string or an options bag that can be converted easily to a duration, you get the duration printed out. So here [presents slide 5]. Now, of course in most cases in digital, you would not want this range values to exist. But if you do have them and you haven’t filtered the input for these values it does try it’s best with the values that it does expect. Like, in this case minutes in seconds. I display it as you would normally expect them to be as `"numeric"` values separated by the `:`. And if you do, fractional digit 2, Here, you can see that it has better support for fractional digits where I had thirty four point five six, seven seconds because fractional digit is to it just outputs thirty four point five six, and this is what I meant when I said that truncating is not allowed but with a catch, which is that for `"numeric"` outputs, you may truncate the least significant digits to allow people to specify exactly how many fractional digits they have. We decided that it was an important use case to cover.

USA: [slide 6] To move on, let’s go over the semantics, some of the highlights of the semantics of this.

USA: [slide 7] So regarding styles, there’s a base style. “Base” here means that it is a style that is used in the absence of any unit-specific style. So if you have a universal style, of course in writing this base style, but we didn’t have a base style which in most cases you just have this. Yeah. This base style is the value. This is `"short"` by default.

USA: Styles can be customized per unit. So, for each unit, you can have a unit-specific style that is different from this base style. The default style for any unit is determined by the value. Basically, it’s not exactly that value. Because as I was saying, if you have style `"digital"` as the base style, `"digital"` is not a valid per-unit style, but digital can determine if the style of that unit would be `"numeric"` or `"narrow"` in case of larger units.

USA: [slide 8] So about the display you can now configure when to display a particular unit. All zero units are hidden by default. So, the default values of these display options is auto, which means that they’re hidden if 0; they’re not hidden if they’re non-zero because truncating is now allowed. When the style is explicitly specified there, they are always displayed by default [?]. So the default value of this display property changes from `auto` to `always`, if the corresponding style option is set. So this is what I meant when I mentioned that we have not “smart” but “somewhat smart” defaults. If you want to explicitly specify the style of a certain sequence, then we assume that you’d want these units to always be displayed. So obviously you can then manually specify a style if you don’t want this behavior, but in most common cases, we realized that this was going to be the case, so it was a good default value of [?].

USA: [slide 9] Talking about fractions. Consecutive units with the `"numeric"` styles can be displayed as a decimal by using `fractionalDigits`. So you can either display seconds and milliseconds and on as their own units, but also you may use them. You may display them in a `"numeric"` a `"numeric"` format and as an estimate using these fractional days. Optionals [?]. Truncation of the value is not allowed in any way, except for the truncation of the least significant bits via `fractionalDigits`. It’s the only from the lowest end that you may truncate using this option, and in no other way are you allowed to truncate.

USA: [slide 10] Are there open questions yet? Given the semantics that we have already had consensus on. There are only tiny minor open questions still. So, the first question is, “Should second be the smallest unit accepted?” This is something that we would love to have feedback on, but, you know, should you know anything below second…just not able to just be displayed as a standalone value? Should they always be displayed as a fraction of the second value? And the other question is, “Should we support fractional minutes and hours?” So far, fractions are separated from seconds and below. A question would be, should we support fractions for up to hours? Because you may have that.

USA: [slide 11] Regarding the progress and next steps. We had long sessions to come up with all these with this design and modified the design to accommodate all the edge cases. I pitched the design to TG2 and had more deliberations. Some of these, we make decisions around some of these semantics that I mentioned after this discussion in the spec, or rather the explainer has been updated with the new design. The explainer has already been added to the repository. This spec unfortunately is still a pull request, but you can check it out. What this means is that since the explainer is committed we have consensus on this behavior normatively. We might be modifying some things, maybe hopefully with a little more ado. Like you commit this back as well.

USA: The plan is to undergo spec normative and editorial review and advance to Stage 3 next meeting. So this is a heads up by saying that if things go right. The plan is to go for Stage 3 in October. Talking specifically about the Stage 3 review, the currently enlisted people for Stage 3 review is Michael Ron and Ross. Since this proposal got Stage 2 quite a while ago. It’s understandable if schedules are changing, priorities are changing, and I would love to hear from you if you know, you’re still willing to review. If you are, that’s awesome. Otherwise, I would love to ask as soon as I’m finished for additional reviewers. If anybody wants to help out, I would also be willing to help people [?] review because in general, it’s a great idea to have more people review for two specs. So I’m willing to help them out with that. Also Ecma-402 editors, so, maybe Richard Leo, would be able to help out with the editorial review. That would be great as well.

RBN: I’m still interested in reviewing.

USA: So, thank you. Michael also said that he’d be happy to review. So, that’s great. Thanks. Things are already evolving on the repository so you can feel free to check that out, but I will also attempt to reach out to you personally. If there’s anything I can do to help feel free to file issues or just pitch in during any of the existing discussions.

AKI: All right. Thanks everyone. Wow. In record time. I’m truly impressed. The queue is empty.

USA: Thanks.

SFC: I just wanted to express support for this proposal—and thanks, USA, for working through all these really thorny issues. I think we’ve resolved most of the thorny issues now—I’m afraid to say that until we actually reach Stage 3—but I hope that Stage 3 is on the near horizon now. If you have any more questions about this, please please engage with us on the GitHub; there’s still some open issues on the GitHub. They’re not like major ones, but there’s still a few things open. So, thanks Ujjwal for all of your work on this.

USA: Thank you, and thank you, everyone. All right. Thanks everyone.

### Conclusion/Resolution

- Was not seeking changes

## Realms Renaming Bikeshedding Thread

Presenter: Leo Balter (LEO)

- [GitHub issue](https://github.com/tc39/proposal-realms/issues/321#issuecomment-900523250)
- [slides](https://docs.google.com/presentation/d/1Rb6YISQFKNQIANpLctcuk-GGM5InNfcdA0zuUCgb-fE/edit#slide=id.p)

LEO: [slide 2] This is a report of the renaming for the Realm constructor. As you might have already known, the callable-boundary realm is following up on an official renaming bikeshedding thread that we’ve had, as a form of, like, understanding that the realm itself is a little bit different than was initially planned before the callable boundary, and it also has some slight conflict with things used in the web implementation world. The importance of resolving this is also to avoid holding up shipping. We understand this is now holding off implementation and one of the requirements when we had advancement was to have this proper bikeshed for this, to give some perspective to everyone.

LEO: [slide 3] Like I understand we had a bikeshed, but I want to give the suggestion here that I’m going to provide. Like a proposal for renaming. We, it’s like [?] bikeshedding. We have a lot of fun suggestions, a lot of fun having these discussions here and there, but we believe this rename is also possible and I tried to go through some strategies of rebranding. I believe we [?] some of the discovery, understanding the product, of course, as like, the Champions group and the brainstorm being part of this bikeshed that we’ve had. We did some refinement and testing of the name and how it works. And we end up with a selection.

LEO: [slide 4] Still, for me, this image [fume hood with glove box] represents the concept [?] better than any name, but we cannot follow this image. I think this is what I see as the callable boundary: this membrane system that gives access to objects inside this box and there is some sort of communication. There is this tactical feedback and it can be observed from both sides visually as well.

LEO: [slide 5] But yet we have one name candidate here, and I’m trying to make this shorter because I don’t want this discussion to be an extension of the bikeshed. But like, I’m proposing one name, representing the champion group here. We are proposing one name for this constructor. We hope we can discuss what should be the next steps. If we don’t have consensus for this name—I would like to avoid the discussion at this meeting here during the plenary to be [about] suggestions of new names. I believe we have plenty of discussions of different new names in that bikeshed.

LEO: [slide 6] So let’s go. I’ve tried to create a list of what I want for this new name. We don’t have a perfect new name, just to make it clear. But I want a name that is meaningful. So this name is not only serving [?]. It actually does bring some idea of what that is. It’s a serious name. This name also needs to be unique, that helps a lot and it’s one of my strongest arguments being a new nickname. Helps users that when they go through this constructor, they can easily search on the web and like, what is this? And they find documentation specific to that constructor. This is one of the things that reflects me. I want a name that is easy to say and easy to spell. I have English as a second language. So these are big advantages for me: if the name is easy to say and easy to spell. Like when I have a discussion and talking to other people from work or people from the work area, the work field. I prefer a name that I can actually say and be understood and that needs to be available.

LEO: [slide 7] Here’s the suggestion. The candidate for that I’m bringing here. Today is ShadowRealm and just to make it clear I gave this example here. Because the only thing there is being renamed. For this Stage 3, proposal is a Constructor. So instead of having a capital Realm, we have ShadowRealm and I believe it checks all the boxes here on the list. Maybe, some of them are a little bit subjective. Maybe, like people say, oh, it’s not that meaningful, but it is unique. “Easy” is a very complex word, but it’s relatively easy to say and spell, it is available in those. It brings some analogies to two things that we know from the web, such as Shadow DOM. It has no relationship with Shadow DOM, but “Shadow” prefixed on something already has a precedent. This is the name that I would like to propose. And do we have consensus?

JHD: I just wanted to bring up it seems like it sort of overlaps with Shadow DOM, and is there any concern that there will be some confusion as a result of that?

LEO: I think it gives the idea that you have your main realm in your application. But you have the other realm coming in from this ShadowRealm constructor, but I don’t think it actually will. I don’t think it’s hard to make a connection like how a new realm would bring something that is exactly a shadow. You know, it’s [?] like the Shadow DOM is something that is not exactly your main DOM. I think the same goes for ShadowRealm? I am expecting that.

JHD: I think that no matter how much time has passed between this feature shipping in browsers, since that feature ships in port, this feature shifts [?] in browsers. I think that more developers will have interacted with and heard of the term Shadow DOM than Shadow Realm, so I’m thinking of people who are familiar with Shadow DOM coming and trying to understand what ShadowRealms do and focusing on whether that it’s clear or not. I don’t have a super strong opinion that it isn’t. I just think it’s worth thinking about it in those terms.

LEO: I understand, and that’s something that was brought up. This name came after, like, discussions with before and discussion with the Champions group, with the SES group. And as I mentioned that there is no perfect name: every name has its own challenges. I think this name brought the least amount of challenges for what we’re proposing. But it’s still, as I mentioned, unique. If someone wants to understand what it is, it’s a name that can be simply copied and pasted on the web and searched: like what a ShadowRealm is about.

JHD: Thank you.

YSV: Do I understand correctly that this is our only option and there won’t be further discussion on this?

LEO: Um, I’m trying to. A conclusion for that bikeshed because all the names like I can tell like from my Discovery, like all the names that we found in that we discussed, we came in with problems. But as it is to see, don’t know? Nothing is pretty like, set in stone before it’s shipping. I want to say my sentiment is that we have a positive conclusion at this meeting. I would prefer not to change this name again. But of course if something very strong happens, the renaming would be necessary. That’s all right.

SYG: I would like to interject here. Sorry, I didn’t get on the queue, and the queue was empty. So I want to thank LEO and the Champions for shepherding the name bikeshading thread, which has grown very long, and it’s been there since July 14. Now it is the end of August, I think that is sufficient time for bikeshedding, and I would be and I would support getting a conclusion today and stopping the bikeshed.

LEO: And just one more clarification. We are excluding even names that are private personal preferences for specific champions of this. Cool. This is not my main personal preference. I think this is the most pragmatic suggestion. Like my personal preference gives more challenges in the other aspects that I mentioned in the list.

AKI: All right, isn’t that the definition of compromise? Nobody’s truly happy. Do we have consensus? Sounds like a yes to me. ShadowRealms it is.

### Conclusion/Resolution

- Consensus for the ShadowRealm name

## Pipeline operator for Stage 2

Presenter: Tab Atkins (TAB), J. S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-hack-pipes/)
- [slides](https://docs.google.com/presentation/d/1xTnIoh1ECLKAjEQ5YZ5hRw2MZzW67Q78exAR_q2EDgM/edit?usp=sharing)
- [previous 2021-07 incubator meeting](https://github.com/tc39/incubator-agendas/blob/master/notes/2021/06-17.md)

TAB: [slide 1] So there’s an update on the pipe operator. We’re going to where we last talked about this at the beginning of the year and as well get into it during the slides. We got to consensus on the important issues that were blocking things before. So we’ll run through this real quick.

TAB: [slide 2] So quick history of pipeline syntax. Lets you linearize nested expressions, giving benefits similar to method chaining—but applicable to all of your code, not just things specifically written to be methods. And this is very, very popular among authors. jQuery is still the most popular JS library in the entire world. And this exact syntax or the operator in some slight variant shows up in a ton of languages, particularly anything that’s functional-heavy ones.

TAB: [slide 3] Which one JavaScript language gets…There’s a whole bunch of slight variance and syntax. Ashley presented a little bit ago, we identified at least four variants that are all distinct, but do essentially the same thing. We were in the working group here, discussing between two of variance which have been called F# style and Hack style. We’ve reached tentative consensus in the champion group for Hack style as the way forward. And now that we have done so, we believe the proposal is actually ready to start moving forward.

TAB: The dev community is still pretty split around what they prefer, but there seems to be a pretty overwhelming consensus that people want a pipe of *some* kind. And for most people, it seems that the precise version that we go for isn’t as important as getting one of them out there at *all*. As I argued last time, if you remember from a couple of months ago all the pipeline variations are pretty close to each other. Any way you can do it in one, you can do in the other, with maybe a small bit of [difference in] syntax. It’s not very significant. So our hope is that this should work out for everybody.

TAB: [slide 4] As another reminder, the pipe operator in the State of JS 2020 survey was the number-four most-requested feature there, right behind static typing, better standard library, and the pattern-matching proposal, which I think we’re going to be talking about here as well. So this is clearly a pretty important thing for all of JavaScript.

TAB: [slide 5] So the explainer was written by JSC: link over here. There’s a ton of examples in the explainer. It’s very, very well written with stuff taken from real world code, not constructed examples, showing how they can be simplified and made more easy to read by using pipeline. He’s also put together a full draft spec text. It’s still under flux and will be going through precise details, but it looks pretty good for now. I’ll get into some of the problems. As we have with that in a little bit.

TAB: [slide 6] So I’m not going to go into a big thing for all this, but I want to add a couple of points real quick just to head off any potential basic questions, and I’m happy to hit anything more advanced in the queue afterwards. So the most basic issue is, is nesting really that big of a problem. Do we really need to linearize code; is this important enough to be justifying a new operator? Obviously I think the answer is yes. I’ve got a couple of examples here showing off why.

TAB: This is the first one. Obviously it is a constructed example of function chaining and function nesting, but it’s not an unrealistic constructed example. I just needed it to be short enough to show off enough structure. I find this very difficult to read, I cannot tell at a quick moment whether the method call what what the dot method calls been called on either count, parentheses to be able to tell that the foo function has not yet closed and that’s the method call must be on the result of the bar function. That’s hard to figure out. This sort of thing happens.

TAB: [slide 7] All the code where you could structure things carefully to make sure it is readable—while if you can pull it apart into a pipeline, everything becomes as far as I can tell. Immediately clear, you know: you’re going to start with an `x` value, pass it to `baz`, extract the first item from it, pass that over to `bar` and call `method` on it, and finally pass it to `foo`. Code flows, nice and linear. This was [common?] under jQuery methods, you could replace that pipe with a period `.` and you’d have exactly this code basically and people really liked that sort of code. It’s very readable for a reason.

TAB: Second. This is a realistic example of async. The Fetch API returns promises. And whenever you get any of the values from the response body, they also return promises because they might be a potentially large amount of text to decode. So, to actually get at something, the value of something at a particular URL, you’ve got to double stack your `await`s. Unfortunately, this involves some extra parenthesis and stacking up the beginning of expressions, because of the particular operators we chose in JavaScript. Rust has a slightly easier time of it, for example, because their `await` looks like an attribute access.

TAB: [slide 8] So it just chains more easily…and we can get similar benefits using pipeline, it lets us remove the extra stacking here. You can just deal with each of the operations one by one. With each single `await` where it needs to be. And of course, you can slice these operations up however you want, if you really wanted the `fetch` to show up first, because that’s an important thing. You want to dedicate some brain share [?] to right at the beginning. beginning, you can just pull that `await` off into its own pipeline chunk and deal with the `fetch` on its own.

TAB: [slide 9] Finally, a very common thing that happens all across JavaScript is dealing with static methods, dealing with constructors, anything that converts from one object to another involves heavy nesting. This code is taken from a realistic example. Somebody came to the what web chat room with an even longer string of code that was doing this with some more steps in the middle and was asking about adding `object.fromEntries` to the object prototype, because they were annoyed with how the nesting made it hard to read this expression and preferred a method. Chaining that lets them produce an object. At the end of this, we explain why that couldn’t happen. There’d be too many problems with adding new things to `Object.prototype`, But of course, these problems are solved if we can just use pipeline to linearize them again: get the `entries.map` over them, turn them back into an object. Nice, linear code flow. You don’t have to go back to the beginning, the expression, wrap the whole thing.

TAB: [slide 10] Now, a common rejoin, to talk about. This: why don’t you just use temporary variables? Those already exist and they let you give names to all these steps which seems like good self-documenting code and that’s partially, right? Not completely though for this example. This is a real chunk of code taken from the react code base. It’s also the exemplary code to use in the explainer. So you’ll see this a bunch if you’re reading that, and I don’t think it’s wrong to say this is extremely difficult code to read. There’s a lot of missing going on. There’s stuff happening on levels. It’s not clear what value is actually being given to this whole expression. Like what’s the input to everything? You’ve got to really dig in there and grok the code pretty fully before you can figure out anything of this.

TAB: [slide 11] Pipeline, as before, makes this all very simple and linear. You start with `envars`, pipe it to a `map`, and `join` it, string-format it, color it, and finally `log` it. Straightforward. Easy. At every step you see what’s going on. You don’t have to deal with arcane nesting and getting that all right. You don’t have to deal with a bunch of nested parentheses or nested curly braces or anything like that, simple and easy at each stage, which is very, very nice.

TAB: [slide 12] But why couldn’t we just use temporary variables? Well, let’s see if this is a reasonable way to split up the code, if you then translate this over temporary variables. You get code looking like this. I challenge anyone to say that this is actually readable and easily understandable code. There are a lot of problems with it. “Naming is hard” is the first problem, and as you can see for a lot of these there’s no reasonable name. They don’t represent a useful, semantic concept in your code. And so the names you choose are usually just restatements of the operation that just happened. Because of that, you have a lot of repetition and that means it’s harder to tell what your data flow is. Once again, I can’t tell from here. What values are being piped in? You can tell from the first line that you’re bringing in the `envars` variable, clearly, from outside the code. But it’s impossible for me to see, without reading carefully, if there’s any other inputs anywhere. [?] out there is in [?] invoked a second time in the `envarPairs` line, but that’s it. But the fact that that’s it is it is definitely not obvious.

TAB: [slide 13] Just in general, the places where you want to cleave your code, to give a nice linear code flow, are not necessarily the same as the places. You want to cleave your code in useful semantic concepts and trying to conflate the two leads to bad code. It’s longer, it’s more verbose and harder to read and write. It’s harder to understand. It’s just not very good there. And we see this, because this sort of code isn’t common. People don’t like writing this because it’s bad. It has a lot of bad problems with it. Now that doesn’t mean it’s not still useful to use temp vars judiciously, you shouldn’t be using pipelines all over the place. So it might very well make sense to mix the two together. For example, this code might be more readable for you. Just doing the text formatting first, constructing the text using a pipeline over the `envars` and then colorizing it and logging it as a separate operation—if that makes more semantic sense for your code, that’s perfectly reasonable to do, ain’t nothing wrong with it. Pipeline is compatible with any code organization depending on what makes the most sense in any context.

TAB: [slide 14] And, of course, every single thing I just said about pipeline applies to method chaining, which already exists. This is just linearizing your code, and people really love linearizing their code. They *don’t* love providing a bunch of temp vars. They *do* love having the implicit subject of code flow move from method to method without being named, because it makes the code easier to read and easier to understand. You can understand the data flow more easily in method chaining. So any objection to this implicit flow of a subject in pipelines has to reckon with why it’s not a problem in method chaining already. And also code organization rules that people use for method chaining—breaking their method chains up into two variables when they *do* name some useful semantic concept—apply just as well here.

TAB: [slide 15] So over to some actual spec issues here. The spec is currently written, as you might have seen, with some examples using the percent operator `%` as the placeholder. Now, this has fairly minimal parsing issues. Percent as a placeholder shows up in a couple other languages. I think it shows up in SQL and a few other spots, so it has some precedent, but mainly we have it there because it’s only used as the modulo operator, and that means it’s actually not too bad to write it as a variable spot. There’s a few issues. We have an issue open here. WH had some feedback about our attempt at parsing, but—please correct me if I’m misquoting, WH—he believes the issues that he has with our current approach are solvable and this should be reasonable to do. Earlier, we used the hash sign `#` which I believe looks nice. It’s my favorite for aesthetic reasons, but it clashes with tuples pretty severely and we didn’t want to step on toes over there. Previous attempt used a question mark `?`, but that’s already way overused in JS. If you actually look at realistic examples using ternary or using the question operator, it gets impossible to read let alone. It also stomps on partial application’s use of question mark as its placeholder. So again, we want to avoid causing any problems. So right now, we’re using percent `%`. If anyone has concerns with that or has ideas for a better operator, we are more than happy to hear about that. Don’t think that’ll cause any issues to change around.

TAB: [slide 16] And that’s where we’re at right now. So, now the champion group has rough consensus on Hack style. And we have a spec for it, along with a Babel—well, an implementation of it in Babel, I should say again courtesy of JSC. I believe that this would be ready for Stage 2, normal advancement and procedures. And I think that’d be really nice to signal to the community that after two or more years of arguing about syntax, we might finally be able to advance on this topic. So happy to take your questions now.

AKI: I’m just going to quickly open with: we have approximately 15 minutes left in the time box.

WH: I gave a few interesting examples on the queue: `x = 3%4; a |> %== y; b |> x+%== y; a |> (%, x => %) |> (y => %)`. Let’s start with the simplest. Currently the proposal makes the modulo operator a syntax error; I assume that’s just a bug

WH: Next, the proposal defines `%==` and `%===`. Those aren’t really necessary and cause problems in the example I gave.

JSC: I just got rid of that. You can refresh the spec to see the updated version.

WH: Okay. Yeah, I reviewed the spec when it was posted before the meeting rather than now.

WH: Next question I have is, and the spec contradicts itself on that, can you use `%` inside the bodies of nested functions?

```js
a |> (%, x => %) |> (y => %)
```

JSC: I believe it is. Okay. Yeah. Trying to minimize special rules—but whatever happens.

WH: Part of the spec says that’s allowed; part of the spec says that’s not allowed. What is the intended behavior?

JSC: I’ll deal with issues like that after the meeting, whenever you want: happy to hash out after the meeting. The *intent* is to allow them in functions. Although I wouldn’t say that might be good *style*.

TAB: The percent is just a variable binding that applies just within the context of the things. So you can lexically bind over and should be able to lexically bind over that in any way that you could a normal variable.

WH: Okay, so it’s not like `this` where you can’t use it inside nested functions? Thank you. All of these syntax problems are solvable and I see no real showstoppers here. `%` would work as far as the syntax is concerned.

TAB: Yeah, and I think that also then would address your second topic (`x = 3%4; a |> %== y; b |> x+%== y;`). Both of those your other one also appears to be about the `%==` operator attempt at parsing.

RW: So value piped into a—just to be clear, this is not a modulo operator. It’s the remainder operator; let’s use the right words—value piped into a remainder operation that ballad. I’m going over there because that’s where it is.

```js
a |> % % %
```

Sorry, is that valid? Sorry, I just wrote percent.

TAB: Yes. Yeah.

RW: Okay. Nobody here in this committee has any issues with this? I think that’s wild.

JSC: I wouldn’t say that’s *good* code but it’s allowed.

TAB: It’s a funky way of writing 0, but sure. Putting the same operator on both sides of the remainder operator is already like a weird thing that no one ever does. At least not intentionally. Putting a percent on one side of the remainder operator is reasonable. And you have to look at it to make sure—any placeholder we use would have potentially some issues. Because there’s only so many ASCII glyphs and we’re using most of them, but there shouldn’t be any parsing issues, and I don’t think it’s any less clear than our current heavy use of question mark now.

JSC: Or asterisk, for that matter.

RW: Yeah, I mean, for me, it for, for me, this was really like—I wanted to make sure that your answer was. “Yes, this would do what I think it does” and I didn’t want, like, basically: what I did not want to hear was, “No, that wouldn’t work,” because then we’d have a problem. Your answer being, “Yes, that would work exactly as you think it would,” as weird as it might be, it satisfies me.

JHD: There’ve been a number of other folks in Matrix discussing concerns, so, I wanted to make sure nobody else had any objections left to air before we get into this.

CZW: If I recall correctly, the previous conclusion of [advancing the Extensions proposal to Stage 1](https://github.com/tc39/notes/blob/master/meetings/2020-11/nov-19.md#extensions-for-stage-1) was that we have to figure out if the pipeline operator and Extensions are mutually exclusive to each other before Stage 2. So if there is any conclusion yet that we are preferring the pipeline operator over Extensions?

TAB: What exactly was the Extensions proposal again?

JSC: The [Extensions proposal](https://github.com/tc39/proposal-extensions) is JHX’s successor to the [old bind operator proposal](https://github.com/tc39/proposal-bind-operator). Okay, well, it’s not mutually exclusive on a syntax level. I presume it might just be on a subject matter level. And there’s an issue with the pipe operator and the bind operator from JHD back from years and years ago, [when the pipe operator reached Stage 1](https://github.com/tc39/notes/blob/master/meetings/2017-09/sept-26.md#11iia-pipeline-operator). It was written in the notes that it was on the condition that they would have a viable proposal for the bind operator. So that is JHD’s concern with that.

JHD: I can speak to this. As well as to the Extensions proposal. Before pipeline was a thing, there was the bind operator, which sort of had three use cases, and pipeline covers two of them. The third one that it doesn’t cover and shouldn’t cover, of course, is method extraction: so the ability to, for example, do `Array.prototype.slice` or something—or grab user `object.Foo` and then bind (without doing an API call to `function.prototype.bind`) it to a receiver or call it with an alternative receiver). Either way, there’s no syntax for that.

JHD: Essentially, my concern that I put in the notes when pipeline was getting Stage 1 was: I like pipeline. I want it to proceed, and I think it’s a better way to solve the use cases that solves than bind operator, but it leaves the bind operator completely dead and does not allow for any form of method extraction, and I think that that is an important thing to provide for. And so I wanted to see some sort of *viable* proposal not necessarily hit any arbitrary stage - but something that seems like it has a chance of moving forward before pipeline hit Stage 2, and put the final nail in the coffin for the bind operator. The Extensions proposal as last presented does not seem viable to me — and I’m certainly optimistic or hopeful that it could become that way, but at the moment. I don’t think that satisfies the concern that I still have.

JHD: Yeah, so it’s always awkward when one proposal’s advancement will kill another. It’s equally awkward when that potential death holds back the first proposal from advancing. So there’s not a great outcome here either way, but I do think that we have to have method extraction.

JSC: So, if I may, this whole thing started from when there was a resolution a few years ago that pipeline proceeding or advancing would kill any bind operator. Can we make a resolution? A conditional advancement, that pipeline could advance to Stage 2 under the the condition that there will be a bind operator or something like that? Like the opposite of what happened last time? So basically the question is, would it satisfy your concerns if we had a condition? If we did some sort of conditional advancement, like last time, except the opposite, advancing to Stage 2 on the condition that there would be that a bind operator would advance to Stage 2 later.

JHD: In good faith, I would want to say yes, but I’ve been burned by this exact thing before. The `Error.stack` proposal was supposed to advance with a certain set of semantics. And that was the reason I championed that: because `Error.isError` was rejected, and it was an alternative way to get a brand check on errors. So I decided to champion it and then suddenly that expectation was altered, and I could not advance it without changing the proposal, and I haven’t had the time to do that yet.

JHD: So, like there’s that, you know, and then similarly like with Realms at the last meeting and the `getIntrinsic` proposal, which I haven’t presented at this meeting yet. I’m still hopeful in good faith that it will advance, but, you know, like I’m kind of we’ll see, right? So it makes me nervous, because I have been burned by this before.

JSC: Okay, so basically your decision is going to continue to block because of the binding thing?

JHD: All right, I mean…Let me put it a different way. If everyone else is comfortable with Stage 2 and this form of the proposal, modulo bikesheds about the exact placeholder spelling - and I don’t believe there’s any other really open questions except that, correct? - there’s a couple of things on the queue, but they’re mostly this. Okay? Yeah, so if it’s just about the bind operator, method extraction stuff, or the spelling of the placeholder, and everyone else is comfortable with Stage 2 in that form…then I won’t block on it, assuming that I’m the only objector. But I would like, as I’ve done before, to ask the committee if anyone has any reason why they think a method extraction solution that is *syntactic* would not be viable. Would be really great to hear that now, because I would rather work through that, before advancing pipeline.

JSC: Okay, so basically JHD is asking, everyone: Do you see a reason why this would block any syntactic method-extraction proposal, because his blocking would be conditional on that. If not, well then, then.

JWK: I think we can have both proposals because it seems they are resolving different problems.

JHX: Yeah, as the champion of the Extensions proposal, it does not include method extraction. Only the [unable to transcribe] bind-operator proposal. And I think the scope of the Extensions proposal is much bigger than the pipeline operator. There are many use cases that can be covered by the pipeline operators. So in the previous meeting I already said that I think the pipeline operator can coexist with Extensions [unable to transcribe].

JSC: Basically, JHD, are your concerns assuaged enough? Or are you going to block it? I guess that’s the big thing, since we’re out of time.

JHD: Yeah, I guess I’d still like to give everyone else a chance to give an opinion on advancing pipeline: if it would advance modulo, you know, other than / separate from my comment. Then as I’ve said, I will not block on that, but if there’s any other reasons, then I’d prefer to block.

AKI: Do we have a consensus to advance?

DE: I support this proposal advancing.

YSV: I will speak to our doubts about the inclusion of this. We’ve been doing this for a long time. We still don’t think that this is really a wise addition, because of the long-running impact that this will have, and we don’t see that much benefit to the new syntax. However, similar to JHD, if there is strong support from the committee to move forward with this, we will accept that.

AKI: All right. Do we have consensus? I think no one’s willing to explicitly block. Is that accurate?

YSV: For myself, yes, we’re not willing to explicitly block, but we do have some strong reservations here.

AKI: Okay, we are officially at time and we do not have anything blocking consensus. So I believe that is consensus. Pipeline operator at Stage 2, with reservations.

TAB: Thank everyone. Yulia, more than happy to discuss this with you offline. Thanks, excellent.

### Conclusion/Resolution

- Consensus for Stage 2.
- The champions will follow up offline with people who have concerns

## Iterator Helpers

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)

YSV: [showing proposal explainer] Hello, everyone. Welcome to iterator helpers, which we haven’t heard from in about a year. What we’ve done is we’ve updated the README to cover all of the new methods. So if you’re unfamiliar with the methods, you should now be able to find everything with examples in the readme.

YSV: In addition, I will be addressing the last comments that have been brought up in the issues. One of them is to drop “index” characters and replace it with entries, which sounds like totally fine renaming and that looks okay. if there are no concerns against this, then I will go ahead and do that after this meeting if there. Or concerns, please. Let me know and I will discuss it with you.

YSV: There have been a couple of other discussions, for example, `slice` instead of `take` or `drop`. I am thinking rather not to go in this direction. So not replacing `take` and `drop` instead of `slice`, largely because we have the problem of accepting negative values into `slice`, and there’s no good way of doing with those right now. We can always introduce that later, right?

YSV: Okay, and [now for the main issue](https://github.com/tc39/proposal-iterator-helpers/issues/122), which I want to raise to the committee to get feedback on. Right now we pass the protocol to all of these new methods, and I would like to point out that these methods are things like `map`, `filter`, `reduce`, `take`, etc. And for a number of these, the protocol, which allows you to `.return`, allows you to `.throw`, etc. doesn’t actually make sense, because we are not expecting to have communicating generators in these contexts. And there’s a long discussion here about the rationale or purpose of passing the protocol that we had with conartist6 [Conrad Buck]…where gradually, Jason and myself, we became convinced that it may be better to drop passing the protocol and make this proposal more restricted…so that you cannot have the full power of iterators—sorry, of generators—when you are applying iterator helpers on them. So this issue is one that Jason is preparing a PR for, but I would like to call for feedback from the committee about this because this will be a substantial change and will require us changing our implementation. However, we do think that this is the right way to go. So I wanted to raise that to everybody, and that’s it. That’s it. That’s the update. Any questions; any comments?

SYG: [from queue] I hate generator `.return`—so sounds good to me.

YSV: Perfect. Okay, that’s really good feedback to have, because we think it’s actually going to be much better if we don’t have the generator `.return` but call it by default. And if we don’t pass the protocol, we think this proposal will be stronger. We can always reintroduce passing the protocol, or we can introduce specialized iterator helper methods that are intended to be communicative, which will allow for intentional coding that has like two generators communicating to one another. But that doesn’t really fit into the picture of what `map` is meant to do, what `reduce` is meant to do, etc. So that would be the goal in dropping this. Alright, so that was Shu’s way of saying “+1”, I think. Okay, cool.

SYG: I don’t want to give consensus for dropping because I haven’t seen actual details if that’s what you’re asking.

YSV: You can feel free to review the proposal. This is something that we can take our time on. I just want to make sure people are aware that this is something we’re considering and working on a pull request for.

SYG: Okay, great, but I want to confirm this part: By removing the extra expressivity of the protocol, you’re done with your exploration here. Is that? Making sure not excluding use cases that you had in mind.

YSV: So, at the moment, we don’t have any use cases in mind that would need this protocol. That’s why we’re suggesting we remove it—and then later on either reintroduce it for specific cases where they’re clearly needed—or to introduce a new set of methods that allow communicating generators to talk to each other in this way. But we would need to defend this with a use case rather than applying it by default.

SYG: A definite +1 for me. Thanks.

JHX: Yeah, I just want to confirm that it is that we’re not going to pass the argument to `next`?

YSV: I believe so.

JHX: This affects the double ended generator proposal.

YSV: We can discuss it; this definitely something that we can add on later, but removing this functionality would be more difficult than creating it from the get-go.

### Conclusion/Resolution

Update given

## Temporal

Presenter: Ujjwal Sharma (USA), Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2021-08/)

USA: And welcome to the Temporal Stage Outer Space 3 update. And I can’t promise to go as fast as YSV, but we can try. So, if you can move to the next slide.

USA: [slide 2] We are going to talk about progress on IETF string-format standardization. So if you missed it, we ended up developing a new serialization format of dates and timestamps while working on the Temporal proposal. So it’s something that we’re working with folks from IETF and ISO and CalConnect. All these organizations with these standard formats. So we’ll go into detail about that.

USA: And then there’s a bunch of minor normative changes that we’re going to talk about together. It’s mostly in two categories on one hand. There’s adjustments suggested by implementors, and then there are a number of spec bugs that were intended in some way but were incorrectly expressed.

USA: [slide 3] To give the progress report on that, I have been working closely with ITF, and we ended chartering a new working group for this. We call it [SEDATE](http://datatracker.ietf.org/wg/sedate).

USA: [slide 4] It stands for Serializing Extended Data About Time and Events. That’s SEDATE. We ended up having a productive discussion within this working group in IETF 111, which was a couple of months ago. And my draft, which was sort of a personal draft, my individual draft, so far has now been adopted. So now instead of it being “draft-ryzokuken-datetime-extended”, it’s now “draft-ietf-sedate-datetime-extended”. It’s sort of a major step forward, because this means that it’s now not a personal document; it’s formally adopted by the working group, and the working group has made a commitment to finishing it in publishing shortly within the working group. We have a schedule where we plan to make progress on this end and submit it for publication with the ISO [?] within this year. So that’s the timeline that we’re thinking of; we’ve been building consensus and setting up liaison agreements with the ISO team. These things can take time because standards bodies, but the idea is that, hopefully, we’ll set up some sort of agreement where, you know, people involved in the whole process including people in IETF and TC39 can get access to documents like ISO 8601—which I mean, if you don’t have theirs, it’s a bit difficult. I feel we [?] should be able to review this particular facet of the Temporal proposal. So I think that would be helpful for review if you want to.

USA: There are two changes that are requested to the syntax of the serialization as presented today. So we had previously this, the syntax where you could include, you know, the Z with the offset. And in the bracket you could have the bracketed form of [?] a time zone, and PFC is going to mention shortly the changes to this. There’s also the removal of sub-minute timezone offsets. They have not yet been integrated into this change to the format. Not yet been incorporated into the proposal. So it will be presented in October. Just to give a little context on this one. The idea is that the standard in IETF RFC [?], TC39 which [?] does not include support for sub-minute time offsets. So any explicit time offset can only have up to minutes. They cannot have fractional minutes, which is seconds in force. Temporal did include support for that, and we decided that the use cases are just not there to warrant us having long discussions about this within another working group, which we are not as familiar with. So, we’re dropping this one discussion.

USA: There might be a minor change in syntax about the calendar key. So we’ve already kicked off this discussion. SFC from the committee is also involved in this entire discussion—just to give a quick rundown. The question is if it is all about if the key for calendars would be renamed from `u-ca`, which is what we have right now incorporated in Temporal, to just `ca`. So, apart from that there’s no changes that I see on the horizon. There is agreement within the working group that, you know: these are sort of the concerns that people have, and this is why I’m very optimistic. I think this is something that we can quickly overcome to move forward, hopefully very soon, and everything is on schedule. So given my estimations after talking to different implementers, I think implementers again can be satisfied and be assured that this is going forward, it’s moving forward at the expected pace, and that it will be in an acceptable position moving forward.

PFC: [slide 5] This part of the presentation is going to be about the thirty or so normative pull requests that we have for the Temporal proposal. The reason we have so many it’s because it happily has been started to be implemented by engines. In such a large proposal, there are undoubtedly a number of bugs lurking, and implementers have found a bunch of them. So thanks especially to FYT who’s been finding these for V8, to RKG and Yusuke [Suzuki], who have been finding these while implementing it in JavaScriptCore, and Andre [Bargull] who’s been finding these while implementing it for SpiderMonkey. I mentioned in the beginning I'd divide these into 'adjustments', which are actual semantics changes (or otherwise functionality changes that we’re making because implementers recommended them)—and 'bugs', which are just mistakes in the spec text that or things that we overlooked that could not be resolved without a normative change. Since we are short on time, I will go quickly through the adjustments, but I will try to go even more quickly through the bugs. I’m hoping that everyone who had a potential discussion about one of these was able to take a look at the pull request beforehand. I put the slides on ten days ago and had all the pull requests linked from here. Hopefully we’re not going to have to spend a lot of time explaining what each pull request is for.

PFC: [slide 6] First one is a change to guard against garbage sent to the `Temporal.Calendar.prototype.fields()` method. It expects an iterable as an argument. And, previously, it was possible to make it go into an infinite loop by sending an infinite iterable. Now we are making this change to accept only certain values and limit them to these ten [slide 7] so that infinite `while` doesn’t cause an infinite loop. Here’s an example of what that looks like.

PFC: [slide 8] The next adjustment is to make adding a Duration to a PlainDate work the same as using the appropriate method on the Temporal.Calendar. There was a discrepancy with this, and we want to make them consistent. [slide 9] On this slide, there’s also an example of how that works. And what would change? Previously 24 hours was balanced to one day when adding it to a PlainDate and not when using the `dateAdd()` method on the Calendar. These are changed to be consistent now.

PFC: [slide 10] Next adjustment is changing the order of observable operations in the `Temporal.PlainMonthDay.prototype.toPlainDate()` method. The order of operations in order to be consistent with PlainYearMonth. Here again is a code sample of what changed.

PFC: [slide 11] The next adjustment that we’re making is the feedback from the IETF that USA mentioned. We are allowing strings with a UTC designator, the letter Z, plus a bracketed time zone. Previously disallowed this from the idea that if we throw on it now, then we can always decide to accept it later when there’s a clear definition of what it means. The discussion with the IETF provided a clear definition for what it means, so we’re changing it to be allowed now. Examples down at the bottom here of what it can be used for.

PFC: [slide 12, 13] Duration property bags were totally wrong. They were required to have all 10 properties. Obviously that’s a mistake. We don’t want that. [slide 14] Some string serialization bugs in Duration. You can see in the code sample what the mistakes were. [slide 15] We have a mistake in string-parsing functions. There were some valid strings that would not parse according to the grammar that we put in the spec text. [slide 16] We had an inconsistency in `Temporal.Duration.prototype.with()` that was just overlooked when we implemented a previous decision from the champions group. [slide 17] We have a change in the observable order of duration checks that was not intended. [slide 18] We had an observable property access in Duration that wasn’t intended. We should have used the internal slot here. [slide 19] There was an accidental duplicate call in a `Temporal.ZonedDateTime` call where we were observably calling methods potentially in user code to get the same information twice with different options. If you put an option in that is incorrect, then depending on which method you called, previously it would throw or not, and this one is changed so that it should not throw. [slides 20–21] ZonedDateTime and PlainDateTime are now consistent. [slide 22] There’s a wrong error in two places where it should have been a TypeError but instead it was a RangeError. [slide 23] We got some feedback about how infinities were incorrectly being handled in property bags and this failed an assertion in some cases. So, wouldn’t necessarily have been a normative change, but it was normative change in other cases. [slide 24] We had a mistake in the spec text where the wrong value was passed into an observable call. [slide 25] We had a mistake in the spec text—well actually in two instances. An object was passed twice into user code where the user code could mess it up the first time and sabotage the second call. Just before Stage 3, we audited the spec text for all instances where this can happen, but missed these two. [slide 26] This corrects that code example, for the other thing that you could do, that would break. [slide 27] We have tightened the return type of `temporal.Calendar.prototype.mergeFields()` as a response to implementer feedback. [slide 28] The modulo operation in the spec text is actually a different operation than the operation invoked by the `%` operator in JavaScript. So we have a pull request that defines a remainder operation when we want actually the operation that is invoked by the `%` operator. [slide 29] We have some options parameters that were not marked as optional. [slide 30] We have an incorrect assertion, but that requires a normative change to resolve so that the assertion is not hit. [slide 31] Same thing in another method. [slide 32] We had an algorithm that was nonsensical due to a missing variable [slide 33] and then we had three typos that were normative because there was a wrong word but the algorithm as written was not invalid. So unfortunately, it’s a normative change to correct these.

PFC: [slide 34] I ran through all of those, let’s have the discussion now. The outcome is hopefully that I can get consensus on all of the normative PRs presented in the previous slides. So if there are questions or concerns, let’s have the discussion now.

JHD: Yeah, all the changes seem good to me. But given that there’s been so many of them continually it seems like it might be nice if the implementers in the room continued their sort-of-tacit agreement to ship behind a flag yet until we’ve had some period of time where none of these changes are discovered. I don’t know how long that should be. Maybe just between meetings. But given that there’s been so many, I’m growing concerned about somebody shipping it, and then we discover another thirty of these things and then because of web compatibility, we wouldn’t be able to fix them.

USA: JHD you when you say another thirty of these, you mean bugs and not adjustments.

JHD: I’m primarily concerned about bugs: like could have been implemented but didn’t match the intention and thus may be prevented from fixing it to match the intention. There’s always, of course, the smaller thing about, like, actual design type changes, which still may occur. So I can, but just in general, give it—I’m just saying that this proposal has had a lot of spec turbulence since reaching Stage 3 and so I have like it seems like a good bet that there is going to be more, and it seems like it would be useful to sort of buy us all some time to wait for a quiet period, before locking in whatever semantics everyone’s implemented, if that makes sense.

PFC: I think this is a self-regulating thing. By that I mean, all of these changes have been surfaced by people implementing the proposal who point out, “Okay, you know, I could implement this but it seems wrong.”

JHD: I think I’m not suggesting anybody should stop trying to implement it. I’m only talking about shipping it unflagged. It’s clear that the implementation process was revealing these things.

USA: To answer that: that’s what I feel. Also want to say that the nature of these things…that by the time implementations finish, these bugs would just not be there anymore. That’s because of the nature of these bugs. They’re either just things that don’t make sense, don’t align, not aligned to what the committee agreed to or what the champions agreed to—or just things that are suggested by the implementers themselves for various reasons. And so once they are in a position to ship unflagged, they wouldn’t find any more bugs because there wouldn’t be any.

SFC: To reiterate what PFC and USA just said, I’ve been where I’ve been sort of serving a bit as a liaison between FYT, who’s implementing this proposal and has been doing tremendous amounts of work to implement this in V8. And as champions of Temporal we’re making sure that the bugs that are surfaced and that we fix are actually bugs and trying to figure out ways so that these changes are not major design changes at this point, because we’re at Stage 3. It’s a very big spec text; FYT has pointed out that it is bigger than all of ECMA 402. It’s maybe the biggest, certainly one of the biggest, proposals that we’ve ever had here. So there’s inevitably going to be a lot of these bugs, and I think that this process is very effective. And I think that once we have one or more stable implementations, I think that the rate of bugs is going to start going down a lot, and then we can ship. So in terms of logistics, I don’t anticipate that this will actually be shipped unflagged for the next several months at least, and probably not until early 2022 or something like that. So, from a practical point of view, I don’t think that this really affects anything.

CJT: More of the same to echo those points, just by the time an implementation is ready to consider shipping then, because it is complete, it would hopefully have uncovered the last of these bugs, which would have had to go through another plenary. And so, I don’t think there’s any risk that they would uncover more of these bugs. We’ll have to prepare PRs to get consensus and it wouldn’t be shipped unflagged before that. So, I think JHD, there’s some natural waiting. Anyway, I don’t think unflagging would happen before a plenary in which the final ones were approved and we could bring it up then. I don’t think there’s really any need to discuss it at this stage.

SYG: I just wouldn’t worry about it.

PFC: Okay. Thanks. So should I call for consensus on these normative changes to the proposal?

RPR: Are there any objections to the normative changes that come in? I Haven’t heard anything? No objection. You have consensus.

### Conclusion/Resolution

No objection to changes

## RegExp set notation + properties of strings

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-regexp-set-notation)
- [slides](https://docs.google.com/presentation/d/1foloLW13Elu0kslVsmD1hR_qZQBn8INcNpdWl0rlHrI/)

MB: This is just an update on current open issues and some recent changes issues that we’ve resolved, and we’re just going to walk through them. So I’m not gonna spend too much time reiterating things that haven’t changed. [slide 2] What was the main proposal about? It’s about RegExp set notation, operations, and [?] impacts on semantics [?] for those. [slide 3] We decided to do this behind a new flag, which we’re gonna call `v`: it would be the new `u` in a way. And it enables this new syntax for difference, subtraction, and nested character classes, and we can also enable the use of properties of strings. So using the familiar `\p{}` syntax, it would now also be able to use properties of strings as opposed to just the character classes, which goes very well together with the set operations. So, none of this means we choose the [unable to transcribe].

MB: [slide 4] So yeah, let’s talk a little bit about the expanded scope and some recent changes. Markus: Do you want to go over this summary before we dive into each of these?

MWS: Sure. Yeah, so when we merged the two proposals into one, the question that came up was, should we do more? And where would it end? And so we actually had a comparison done between the regular expression features in ECMAScript as well as what would happen after this proposal so far and comparing that with the Unicode regular expression standard. And the things that it recommends or requires and, thanks to Mark Davis and Richard Gibson, that created a nice spreadsheet with a point-by-point comparison.

MWS: We identified a few things and we think it makes sense, if the committee agrees, to expand the scope a little bit further to fix Unicode support issues and have that sort of be the overarching theme. In particular, there are some things that could be added later at any time like adding support for new Unicode properties and we are not proposing to put those into this proposal.

MWS: What we are suggesting and what we are asking for a thumbs up / thumbs down for here are things where ECMAScript is still behind on Unicode, regular expressions, and where fixing that gap requires a new flag because it’s incompatible. And, since we are talking about a new flag here, already for the set notation and the properties of strings, now would be a really good time to deal with those gaps that require a new flag. And, so, we are suggesting to expand the scope so that the total would be the set notation plus the strings, as well as aligning `\sdwb` with Unicode and fixing a couple of line boundary things.

MWS: There is one thing that also falls in this category, but we think that goes probably a little bit too far for now. So we are not suggesting to actually add the full default Unicode case-folding matching into the proposal at this time. So that, if that wanted to be implemented later, that would require a new flag.

MWS: [slide 5] okay, so `\s` looks like it wants to be the same as whitespace. Each property has 25 characters in it, but they each differ by one. And so 24 of the 25 characters are the same but `\s`, I think for historical reasons, contains what’s known as the Byte Order Mark (formerly the Zero Width No Break Space, which is not a space character at all). It’s the former (BOM) and its purpose really is mostly just byte-order mark, since its other original use was taken over by some other characters some twenty years ago. `\s` is missing a clear white-space control, which is the C1 control Next Line, that is of course a white space in Unicode and `\p{White_Space}` has it. So, there is this odd difference between these two properties, that should really be the same, and Unicode Regular Expressions recommend them to be the same. So we propose that, under the new flag, they are the same and so `\s` would be the same as `White_Space`.

MB: [slide 6] Then, this is something that MB has asked relatively early in that sort of got the ball rolling on, on this thing here. There are some other properties that are synced with what Unicode is recommending and they are mostly limited to ASCII characters. But I think, at this point, most people would expect that things like `\d` for digits would actually include all digits like Unicode recommends, and `\w` would be all the characters that can be used in words as word characters and letters [?]. And then `\b` would want to be aligned with `\w` as a transition between word and non-word characters. So this is an expansion beyond ASCII. And what we propose here is to have these follow the Unicode spec. Unicode also has a more sophisticated way of doing word boundaries and other boundaries and what is useful there is that the syntax that lends itself to that would be something like `\b{g}`, and some implementations have that. We’re not proposing that as part of this proposal, but it’s already a SyntaxError, which means it’s already reserved and could be added later. So, what we are proposing here is to expand our proposal and, under the new flag, make `\d`, `\w`, and `\b` match the Unicode Regular Expression standard.

MB: [slide 7] And then we have one more. Line boundaries. The Unicode Regular Expression standard suggests that there shouldn’t be a line boundary within CRLF. It’s one line boundary. But also there is this Next Line character and there should be a line boundary after that, just like after a Line Feed. If it’s accepted, this affects some operators that deal with long line boundaries. I think that’s the last one that we’re suggesting to add.

MB: [slide 8] Yeah, that’s right. We do have some slides for the other currently open issues, and we’re very open to hearing everyone’s feedback on that. If there’s no time in this meeting, then the link to the issue is always at the bottom of slides. We also host a weekly meeting about this proposal every Thursday. It’s on the TC39 calendar. And if people have opinions or are interested, you know, please join that meeting and speak up because it really helps us get everyone’s input.

MWS: Yeah, so if we have a little more time, I would like to see if we could get a thumbs up / thumbs down on that expansion of scope that we presented. I would also like to get a thumbs up / thumbs down or at least [?] people on the open issues, which are the next three or four slides.

MB: Yeah, so maybe let’s go through the presentation first and then we can kind of try and read the room.

MB: [slide 9] So, yeah, we’ve mentioned the new flag, and we also need a corresponding getter for that. So we need to figure out the names and the letter for the flag. And until now we’ve been thinking of using the letter V for the flag. It is a little bit more controversial in terms of what we should call the getter. I personally kind of like the name `unicodeSet` flag. That’s because it describes the set of functionalities that are enabled through this new flag, but the downside of using something like “UnicodeSet” is that there’s already an ICU class with that name, and the syntax of what we’re proposing does not match with that. So it might be confusing for people with backgrounds using ICU. It may not be confusing within the context of ECMAScript. Other proposals are in the issue. Yeah, one thought is `unicode2`, which is interesting. But yeah, if people feel strongly about this the bikeshed continues so please speak up. I’m hoping to resolve this sooner rather than later because we have been talking about this for a while now.

MB: [slide 10] Another issue that we’ve discussed in plenary before, as well, is: because we have these two kind-of-similar flags—the Unicode and the pre-existing Unicode flags—should they work together? Does one flag imply the other? And questions like that. So really, we realized there are three options here. We could make the `v` imply the `u` flag, so that if you combine the two flags on regular expression, it will be the same as if you just use the `v` flag. Another option would be to make the `v` by itself invalid, so that you must always use it in combination with also the `u` flag. Or the third option would be to make the combination of `u` and `v` invalid and force people to choose to either use the `u` flag or the new `v` flag but not both.

MB: We currently believe that, actually, option three (`uv` invalid) is the simplest one, because in that model, you treat each flag as a separate mode, really. There’s no kind of implication that one also enables the other. There’s no implication that the getter for some other flag suddenly gets enabled behind the scenes or starts returning true. They’re really just separate modes with separate syntax of [unable to transcribe] and separate functionality that [unable to transcribe] and semantics come with. And, so, yeah, for that reason, we would like to go with option three because the new `v` flag is syntactically and semantically different from the `u` flag and there’s examples of that. One of them is IgnoreCase, which is an issue for which we have a slide. All right. After this one, there’s also the differences like the `\b{g}` that we proposed earlier in this presentation. Also the escaping set of characters [?]: escaping is a little bit different within the `v`. So we feel that there’s enough differences to make sense that we actually treat them as separate modes and not imply any kind of overlap between the two. Because `v` is not just a superset of `u`. Okay, and then on the IgnoreCase issue: Markus, do you want to walk through them?

MWS: [slide 11] Sure, so we’ve looked at an open question in our proposed draft spec changes, on whether to do anything about IgnoreCase when we do complementing or building up a character class from nested classes and properties. And this is particularly interesting, because ECMAScript IgnoreCase matching has this strange feature of taking a character class that has the complement, this the circumflex, and it’s not actually computing the complement and then doing a case-insensitive match. It’s doing the case insensitive match first on the uncomplemented set, then negating the output based on the presence of the circumflex, which is somewhat strange behavior. Apparently, that’s the behavior that experienced regex people expect, but it’s strangely different. If you have the double negation of the complement of a property and a complement from the circumflex on the right side, compared with just the property on its own, which logically should behave the same day, they behave very differently in current regular Expressions.

MWS: So under the `u` flag or no flag at all, these two expressions that you would expect to be the same are very different. And that inspired us to come up with a solution that is in some ways also implemented in the ICU expression engine: to do a deep early-case closure, very early on, from when we build up the set—and computing the simple complement on the spot—for something like the example here, where we have the character class. For circumflex, we get the same result as before, but by doing it consistently for character classes and properties, we can make the `\p{Ll}` [lowercase] behave the same actually consistently, and then have a good consistent story throughout on what happens with nested classes. So we think that’s the right solution going forward. It does mean that behavior changes with the expression on the left side. But we think it’s a very good thing that it then finally behaves like the expression on the right side.

SFC: [slide 12] Yeah, sure. So this is another issue that was raised regarding the experience of practitioners, in RGN’s terminology, regarding the behavior of escape sequences, and how escaping rules are different in different areas of the regular expression, as seen in the top line here. In particular, `a*` is the same outside and inside parentheses, but outside a bracket means something different than `a*` in parentheses if it’s inside brackets. There are several ways to address this regarding different rules for escaping, and my proposed follow-up for this issue… Since the main premise of this whole issue is that this could cause unexpected behavior by practitioners writing regular expressions, and given that, that’s the main premise of this issue—I have proposed to do further research, and I’ve put this on the agenda for the TC39 research call next week on September 9th. So if you’re interested in this subject, please join that meeting and I’m hoping that we can put together some sort of survey, so we can get some actual data on this.

MB: [slide 13] Right [unable to transcribe]. And then there is one more issue that was filed by John Lenz, and he proposed avoiding setting global RegExp attributes. The rationale of this: Okay, we’re adding a new flag anyway, we might as well make it do this other thing that seems really useful. So this is for, like the properties on the global regex object that implicitly gets stuff. Whenever you use a regular expression, basically, and, yeah, I think all the other champions of this proposal really like the idea of not having to worry about these global states being modified. But at the same time, it does kind of feel orthogonal to the proposal for the `v` flag and what we’re trying to do with that. So, we’re presenting it here so that, hopefully, someone will pick this up and maybe pursue it as a separate proposal, maybe behind its own flag, or maybe there’s some other mechanism that we could use to opt into this behavior. But we don’t feel like this is part of the same proposal.

MB: And yeah, other than that, we have some settled issues that we’ve already covered before. So I’m not gonna go over those slides until maybe discussion happens after this. [slideshow paused at slide 14]

WH: I’m deeply scared about the changes you’ve made to this proposal since the last meeting, especially the changes to how negation works and the changes to the semantics of fundamental things like `\d`. I like the regularization of character classes, but I want to be able to use it without breaking `\d` or breaking how negation works and it sounds like you’re not going to give me a choice. The problem with things like `\d` is that they’re often used for machine parsing and such. Silently changing `\d` to allow other unicode decimals will introduce a lot of bugs. My preferred solution for that is, if for whatever reason you want something which matches all unicode decimal digits, use something other than `\d`—introduce new syntax, a new letter, or something like that. And similarly I don’t want subtle changes to how negation works, which break some really simple existing regular expressions. The proposal for complement is trying to alter the behavior of complicated regular expressions to work the way you want, but that breaks simple regular expressions. I gave some examples at past meetings.

MB: I don’t know what things we are actually breaking.

WH: I don’t want to dwell on this because we don’t have a lot of time. But this breaks very simple regular expressions.

MB: I don’t think we’re actually changing behavior of character classes with an initial circumflex.

WH: Anyway, I am certainly not in favor of merging the regularization of a square bracket syntax proposal, which I think is a very good one, with things which alter existing functionality like negation or `\d` in obscure ways.

KG: Yeah, I don’t want to use a strong of a term as break, but I agree with WH that changing the semantics of other stuff is kind of scary. Changing `\d` amounts to making a whole new mode instead of just changing semantics for some edge cases that you weren’t going to use, like `&&` or whatever. I see where you’re coming from with wanting this, but I share WH’s concern about changing the semantics of a bunch of stuff.

JRL: Also voicing support, I would not change these shorthands.

BFS: So, I’m in the opposite boat. I think changing shorthands is actually okay because we have an opt-in flag. But if these are considered problematic, particularly if people are copy-pasting regular expressions across different places…We were talking about how there’s a Unicode recommendation on how regular expressions work if our regular expressions don’t work the same as other places that are using the shorthand. One route we could do to resolve this—and I slightly prefer it—is if we just don’t support the problematic short hands. `\d` would be really ugly though, I think, if we don’t have that because I don’t know how realistic it would be for people to actually Implement that themselves. But I mean, if `\d` has different meanings, and that’s the problem with the Unicode recommendation and what JavaScript does—[we] could just not allow `/d` in this mode? Because it seems like there’s a conflict there.

WH: It seems like we would be breaking a lot more people by dropping `/d` instead of adding some other new syntax for those who do want to match Unicode decimal digits.

BFS: I don’t have strong opinions. I don’t actually think this is breakage due to requiring an opt-in flag and then allowing linting seems fine to me personally…That doesn’t seem to be a consensus amongst everybody.

WH: Those are not the only choices. We can leave `\d` alone and introduce a new thing which matches Unicode digits.

BFS: This kind of bleeds into the previous one as well. So, I do think the proposed shorthands, whatever their functionality is, do simplify some common workflows. So I do like those workflows being supported in an easier way. It seems like there’s disagreement on it, but I think if we make a stance about what’s considered “breaking”… When you generally copy/paste across different modes of regex, they’re not expected to work the same. If we could just get some clarity on if shorthands can never change across the modes, that would be helpful for this proposal. That’s it.

RBN: I don’t know if we’re going to actually have time during this meeting to get to the proposal that I put together around regular-expression feature parity, given the time constraints—but one of the things that I planned on presenting and proposing was inline flag modifiers that would allow you to exit a certain mode. So if we did want to go forward with `/d` in this mode meaning all digits, and you wanted to switch out of that mode and into regular `u` Unicode mode, then you could use inline modifiers to switch your mode settings if necessary.

MED: There are a couple of possibilities that the problem currently is that people expect `\w` to work with words, but it only works with ASCII words, and so people, you know…It’s fine if all you ever use is ASCII and that works just fine, but when you start to use Cyrillic [?] or whatever, because that’s the target that you’re working with, then you get bad breakages with when you leave these things as they were. So the suggestion is to modify them when you have this flag on so that they work properly. Now an alternative would be to have modifiers on each one of those so that I could have a `\d{u}` or something, `\w` and, you know, `\b{u}`, and so on. And that would at least provide the functionality; people would still have to learn that they have to use that syntax for it to work, right, but you really do need this syntax if you’re going to work with regular Expressions, if you’re not working with English.

MB: Can I quickly respond to that as well? So people have been using the example of `\d` but that’s really the simplest one out of these three here, because there is already a fairly straightforward workaround with `\p{gc=Decimal_Number}`. `\w` is actually a better example, because if you have to roll that by yourself, even with the current support for property escapes, it’s still a bunch of different Unicode properties to combine: `\p{Alpha}\p{gc=Mark}\p{digit}\p{gc=Connector_Punctuation}\p{Join_Control}`—it’s much less obvious, much less ergonomic. Perhaps we could add a Unicode-level property called something like `Word` that combines all these into a single property, so that people can do `\p{Word}` if they want the Unicode-aware `\w`. But then still we’d need a solution for `\b` that aligns with that.

MED: Well, I think the problem with that is that we agree about `\d` is that there is `\b` [?]. Although you’d certainly have to educate people, people really expect `\w` and `\b` to be aligned, and even if there’s a property, then \b is very cumbersome to hand-roll.

RPR: 14 minutes left on this topic and on this agenda item.

SYG: It sounds like maybe WH’s next topic will answer what I asked. I want to add some more detail on what WH thought as breakages…Since it is a separate mode as BFS has said, is it the same copy/paste concern that BFS raised?

WH: I think the presenters are assuming that there will no longer be any need or use for ASCII `\d`, always replacing it with the Unicode one. Having fixed dozens if not hundreds of bugs in other languages caused by this change, I think this is false. The issue I have is I want to be able to use the new mode for the nice new character-class syntax in general. But for doing things like parsing and validating inputs it is essential that `\d` still work using ASCII digits. The argument that this is a new mode doesn’t solve the problem of still needing the functionality of `\d` matching ASCII digits while being able to use the new syntax for set unions and intersections.

BFS: Since `\d` and `\w` are pretty small character classes. Are there any major complaints if we were to disable them, WH?

WH: Yes, that’s like throwing the baby out with the bath water.

BFS: I disagree. I think that if `\d` and `\w` are problematic on both sides—a misalignment—it seems like we shouldn’t necessarily move forward. Especially since `\d` and `\w` are so simple to write out yourself. It is, what, four more? No, three more characters to write to write out the char class.

WH: I just don’t think we should be breaking existing functionality.

BFS: Can you clarify what is breaking? This is a new mode.

WH: We have `\d`, `\w`, `\b`. People are used to it; people know what they do. The use case of using these things for parsing is not going away. There are many contexts in which you do want the ASCII versions, and removing that in a new mode is not okay. If you want the Unicode version, as I’ve said a number of times already, pick new letters for the Unicode-aware versions of them and then you will not have that conflict.

MED: What about if we had alternatives for the `\d` curly? `{u}` and so on, with that, would satisfy your need, correct? We leave the old ones alone. And then we modify, we have modified versions of the new ones.

WH: That seems fine.

MED: Maybe we can talk about the other issue that WH raised, which was IgnoreCase. Or something would be better off taken offline.

MWS: I think I think we need probably a meeting with WH and whoever else is interested, sort of separately.

WH: The case that breaks is `/[^x]/i`.

MWS: I don’t think what we are suggesting changes that behavior.

WH: Yes, it does.

MED: Yeah, I think there’s a misunderstanding here, because that’s not our—that’s not what’s part of this proposal. And perhaps the wording we’re using is not making that clear.

WH: I went through the proposed semantics and it breaks that one.

MB: I would like to remind people that we do have a weekly meeting for this every Thursday. It’s on the TC calendar. It’s open to everyone. So, like just feel free to and yeah, we’re happy to have these kinds of discussions with anyone who’s interested also on the GitHub issue tracker. We’d appreciate your comments and input there.

KG: Can you repeat what the change to `\s` is?

MWS: Yes, `\s` and `\p{White_Space}` differ, but they are the same in 24 characters. They differ in one each. And we are proposing to make `/s` be the same as `/p{White_Space}`. And that means `\p` would lose the Byte Order Mark, and it would gain the Next Line control.

MB: …And all of this, only in the new `v` mode.

WH: I am mostly neutral but slightly negative on having changes like this tied into syntax changes. I think people will turn on the set syntax so they can get unions and intersections, without realizing that they’re also opting into obscure changes like this. I just worry that this will become a bug farm.

BFS: I’m getting really uncomfortable with calling modes affecting all [?] silent changes. Like it’s really making me uncomfortable with—if we ever want to introduce a mode that changes what these things do. I’m slowly being swung in favor of just saying, we should definitely not support the shortcuts. And if any change is going to be in modes is going to be considered a silent change, that means that the mode effectively has no control over these, and we have to do everything explicitly. In which case, I am not sure we should do a mode for most of these things. And so, just like repeatedly hearing, “This is a silent change. This is going to cause bugs.”…You have to opt into this change, and so calling it a silent change is really scary to me, especially when that line is repeated. So I am, I’m just, I have become incredibly nervous in the past [?].

WH: If you had a mode whose main effect was changing only the behavior of `\d`, `\s`, etc., that would not be a silent change. But here you get those things riding along as a side effect of a much larger syntax change to a completely different part of regular expressions. The rationale for calling this a silent change is that the `v` mode reforms the syntax of how you do character classes. Having it also introduce other little and obscure side effects, such as how you do line breaks or what’s white space, is an unexpected change.

BFS: I appreciate the attempt to comfort me, but I think it has had the opposite effect.

### Conclusion/Resolution

- Status Update – comments received

## String is USV String

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/guybedford/proposal-is-usv-string)
- [slides](https://docs.google.com/presentation/d/1yox7jdDTP9hfFrgZ9TNNxeZ6iQeXP_wt_ObgwAYWPB0/edit#slide=id.p)

GB: Hi, everyone. This is gonna be a quick one. I don’t want to take up too much time. So hopefully be able to get through it relatively quickly. [slide 2] So the name is not a name [?]. The background is JS lone surrogate concerns. This is also not the time and place to dig into too much. [slide 3] But specifically recently, the WebAssembly CG held on their Interface Types proposal to lock down strings to valid USV ranges only, excluding the lone-surrogate ranges. And so that means that effectively, JS strings wouldn’t be valid strings in this kind of this type that WebAssembly is facing. And then more generally there are a whole bunch of user and spec interactions from WebIDL to WebAssembly that were [?] closed today, that need to do these kinds of checks when passing strings around. So it’s the interfacing of JS strings with stronger string invariance that don’t commit the surrogates and require that.

GB: [slide 4] So the motivation was, when we have these situations in user code and also other specifications, there might be some benefit in JS to have a very simple kind of canonical spec method to validate if a given JavaScript string is valid Unicode. There are relatively short regular expressions and things like that that we can use for this. But by having a short method, it avoids the need for the user to have to dig any deeper than just the basic top-level question or concern and then to kind of just dig a little bit more into the WebAssembly interaction side of things.

GB: [slide 5] There is also this kind of discussion around—how much they would be able to do memory sharing, between JS and WASM—and probably none at all. But in theory, there is kind of an argument that if you knew that a JS string is valid, then, in the specific nitty-gritty implementation of your ropes or whatever, you’re able to align on a data structure. Then, in theory, there could kind of be something possible there. But to be very clear, this kind of a discussion has absolutely nothing to do with the specification. All the specifications in addition could allow a slightly more, I mean, hopefully [?] a method could have [?] relative performance, and can be optimized, and allow a quick way to do these checks so that it wouldn’t cause too many lone [?] inspections on these boundaries…but the JS WASM has a sort of deep implementation. Interrupt questions are [?] very much kind of prescribing them.

GB: [slide 5] There’s a couple of specification questions. Would it be a static method on String, or would it be a prototype method? And what to call it? There are currently issues up on the repo. If anyone wants to contribute to some ideas. All suggestions are open and questions or feedback would be very welcome.

GB: [slide 6] Is it a simple no-brainer? Is it a terrible idea because there are other ways to do this stuff? Yeah. Let me know what there is you like or resistance [?] than to seek Stage 1.

DE: I’d like to hear if people need to check in their application code to distinguish whether there are these lone surrogates. This proposal seems interesting and potentially useful. I don’t think the WebAssembly Interface Type decision alone is enough justification because, as was noted, this can be checked anyway. But if this is something that developers somewhat commonly need then it seems like a good proposal.

GB: Just posted one instance in the chat of a [unable to transcribe] issue, dealing with exactly this topic. So why isn’t [unable to transcribe]? When you’re dealing with interfacing between WebAssembly and JS, they obviously need to do this check.

BFS: So I come across this every so often. I’m interacting with various things where I want to serialize Strings. Actually, in the nightmare world of JSON, you can actually have lone surrogates as well. Their [unable to transcribe] is basically in the same situation as JavaScript. You can slice strings’ lone surrogates [?] like that. I opened an issue against a heap dump in V8 because they were slicing things with lone surrogates in them. And that meant that I couldn’t parse them in various ways because I would get replacement characters. Various APIs and host environments, like TextEncoder, will automatically replace lone surrogates with replacement characters. So if you round trip through them, you can’t actually compare that something is the same, because it’s not the same. It’s been encoded in the round trip. So you actually need to kind of see if something is going to be lossy when you round trip it for these cases. So anytime you send something through UTF-8 and back, you really want to check if you’re going to have a lossy transform happen, and you need something like this to do it. So, UTF-8. There are plenty of things to do like writing to disk, commonly sending it over the network, commonly all of this—if you don’t have it and you get split on one of these lone surrogates, you get weird things happening. This happens all the time with streams. Streams are the worst for this because sometimes you get a network chunk in that split on a lone surrogate because of backpressure, and JavaScript has decided to use string.slice. For whatever reason, this shows up in Node.js. I don’t really have too many more off the top of my head. I could probably think of more. Yeah, that’s it.

DE: Yes, those use cases sound really relevant, and I’m glad to hear about [unable to transcribe] Stage 1 for this proposal.

MB: I like this proposal and am supportive of Stage 1. I already posted on the issue tracker, but I wanted to raise two small points here as well. One is that the name “isUSVString” does not seem like the most user-friendly name. I’m hoping we can find something better. Maybe “isWellFormed” or something like that. The second point is that if we’re going to do this, then it would be nice to also explore adding “toWellFormed” as part of the same proposal, since these two utilities go hand in hand.

BFS: We should be really careful here. You don’t want to accidentally compare a string that already has a replacement character with something that doesn’t yet have the replacement character and treat them as equal. Yeah, that it is lossy if they are combined as well.

MF: I guess my original topic here was what do consumers do with this, but I guess what I’m understanding is that, whenever you test for well-formedness, it’s so that you can then ensure that you have a well-formed string. Is there a reason to do the test and not do a replacement? You’re going to use some replacement character or what else are people doing with it after the test? And I guess I have to test the API at all.

BFS: I can answer that someone directly. We could bikeshed the API a bit. So you don’t always want to introduce a replacement character because replacement characters actually can be lossy too. So say I had two different emojis. I’ve got example sites with this in the wild: emojis often end up with lone surrogates. If you split them down the middle, one could be the fire emoji and another could be a heart emoji. And if I split them just right, and then I use replacement characters, they are now equivalent. So we don’t want to always use a replacement character. Sometimes we want to trim off the end. That in my reality is the more common case for safety reasons, but if you are forced to round trip through Unicode, you are going to be wanting to do something with replacement characters.

MF: Is that all? That’s a transform that’s just like a function of the lone surrogate. That’s there though. Is there anything about that?

BFS: So, the lone surrogate, the high surrogate, is often shared amongst these emojis. So there’s nothing to differentiate it. So it is generally just a transform of the high surrogate, and they can be equivalent. Even though the total emoji, if you were to get all the strings combined, would have a different low surrogate.

MF: I guess I’m not understanding. You slice the first half of those, get the [?] pair, and they have the same high surrogate. And you don’t want those to compare this thing. You don’t want those streams to compare the same. I’m not sure what that has to do with the replacement character.

BFS: Then those strings are the same high surrogate that point for that case. Yes, but if you have something that already has a replacement character generally, you don’t want to compare. It is with something with a high surrogate, at least in my experience, if you want to do some kind of more lengthy test. You could be waiting for more to see if there is a proper low surrogate. You could be trimming it. You could want to do the replacement character. The problem is there are multiple options depending on the workflow you’re currently doing.

MF: Okay, I see. Yeah, this is sufficient justification for me from you for us to have both of those methods in the Stage 1.

GB: To try and dig a little bit deeper into the validation use case, for the most part, if you’re working with an API that expects valid [?] Unicode while [?] providing invalid Unicode, that’s something you want to normally cache during the development phase of the application. So being able to hide errors for that, that you can turn into a user-level [unable to transcribe]. Are you taking an unstructured, string input? Actually would be desirable in many cases, because if you don’t have a valid Unicode to all [?] with your program. Some of this is really well-defined [unable to transcribe].

RPR: Thank you. So GB. You want to ask for Stage 1?

GB: I would like to ask for Stage 1. Yes.

RPR: Any objections to Stage 1? Congratulations, you have Stage 1. He does have a point here about that [unable to transcribe] should be captured. So, please do clarify that with him offline. On the cues [?]. Excellent. Thank you very much.

### Conclusion/Resolution

- Stage 1 achieved

## Array.fromAsync

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-array-from-async)
- [slides](https://docs.google.com/presentation/d/1sbnssKjUjt732EQYGWHljJ0pWhA7DTCg-lnLB7IOpck)

JSC: [slide 1] Hi everyone. My name is J. S. Choi. Joshua S. Choi. I’m a physician. I’m with Indiana University. I am a physician of medicine, but I also work in biomedical informatics. So I do a lot of data analytics, application design, and that’s why I’m here. We might go shorter depending on how many questions everyone has.

JSC: [slide 2] I’m assuming everyone is probably familiar with `Array.from`, the static method on `Array`. It’s used a lot; people use it to turn iterable things into arrays. This proposal is for a companion method for async iterables to arrays: `Array.fromAsync`.

JSC: [slide 3] I run into this a lot. It’s not like it's very difficult to do: flattening an async iterable into an array. You can just use a `for await` loop, but I actually do it quite a bit and quite a few libraries do it, too—for debugging: If you want to see what an async iterable looks like, you of course can’t print it out to the console. You have to flatten it into an array. So there’s that.

JSC: There’s testing: Asserting that an async iterable is equivalent to an array. People use it. I saw it when I was researching the explainer. I’ve seen it used in command-line-interface tools. The explainer is up on GitHub. It’s also linked in slides. It has several real-world examples. Some of them are from Adobe, some of them are from IPFS: where they had unit tests and are trying to assert that an async iterable contains these items—and, in order to do that, the most convenient way was to flatten it into an array and then compare it with another array.

JSC: There’s an NPM package published called it-all. It gets quite a few downloads weekly and it just does this one thing. It’s just a polyfill for this one thing. And there are also multiple Stack Overflow questions.

JSC: Even though it's not the most mission-critical thing, I think there is a clear cowpath here that would be really easy to pave over into the language itself. That’s what it looks like. You could use generators, readable streams, whatever.

JSC: [slide 4] So it would be basically the same as `Array.from`. Except that its first argument has to be an iterable or an async iterable, and it returns a promise that will resolve to an array. That’s about it.

JSC: [slide 5] I already wrote specification text for it. There might need to be tweaks. But it all fits on one slide, basically. There’s not much here. Basically, if the iterable or the async iterable throws a reject somewhere in there, then the promised rejects. Etc. It returns the promise immediately. It’s a generic factory method just like `Array.from`, so it can be attached to any other constructor.

JSC: [slide 6] I’m going for Stage 1. That of course means that not every single problem of the solution itself is solved, but that the committee acknowledges that it’s worth exploring. But there’s already a formal spec. This is a relatively simple single method. There’s some cross-cutting concerns. For instance, whether it would eventually be worth adding an `Object.fromEntriesAsync`. For instance, `Set` and `Map`: I understand there are people talking about whether to add `.from` or `.of` to those. There’s also tuples too. But those can all be deferred to the next Stages, and I don’t think there are any particular huge problems with those either. It all can be incremental.

JSC: There is a question of naming. DD brought up that `async` after `from` matches existing patterns more than `from` then `async`. There’s a couple methods in `Atomic` and the Web GPU API that already match `.fooAsync`.

JSC: There’s also the question whether this is redundant with the iterator-helpers proposal, which I’m very excited about too. It already has specified a `toArray` method. However, I think that this arguably—If we’re going to choose one, I think that it should be in the `Array` class in order to parallel what already exists, `Array.from`. And apparently duplication of functionality between the `Array` class methods and iterator helpers is fine, since `toArray` also is redundant with `Array.from` synchronously too. I don’t think that should block anything. I think that they can coexist, and, if we have to choose one, we should choose what parallels what already exists, which is an `Array` static method.

JSC: Seeing strong support for this from JHD: “Should have been a requirement.”

JHD: Yeah, I mean, it’s largely in the topic. But yeah, I feel like it’s been a huge pain to not have. Like, I use `Array.from` all the time, though `for of` exists, and it’s been a huge pain to not have an equivalent version of it for async iterators. As soon as I saw this proposal, my reaction was, “Why did we not insist that this be part of `for await` in the first place?” So I think it was great—like the spec text is already written. I’d like it even to be Stage 2, though that’s not being asked for.

JSC: Yeah, so I could ask for Stage 2 if nobody objects to one.

YSV: I would want more time to look at before Stage 2, because it’s not just an exploration at that point. Whether it should be in the language. And I have a few questions around that because we do have the redundancy with the iterator `toArray` method. And something we want to ask is how do we want to approach that in addition to objects and sets. I think there’s still some open questions there. So I would want to take this a little slower and make sure that we understand exactly what we want to get out of this. So Stage 1 will be fine, but I’m not sure yet about Stage 2.

JSC: No problem. I’ll ask for Stage 1 only.

RBN: One of the concerns that I have…I generally support this feature and and I agree with JHD’s interest, that we should have had some support like this, some of the complexities that we have in there. But one thing that I worry about is that, it would be very easy to start trying to create an array from a data source that might have to wait a long time for results. If you’re pulling from the web or if it might possibly be infinite and will just constantly allocate more memory in the background while other tasks are processing…and it does make me wonder if we need to bring back cancellation.

RBN: We now have AbortController and AbortSignal: both in pretty much every major browser. And also in Node. But no way to manage it from within the ECMAScript language itself. And we did have a discussion a couple years back on the possibility of introducing a symbol-based protocol for cancellation that could be adopted as part of AbortController and AbortSignal. I don’t want to block—and I saw this in the chat: I don’t want to gate this, but I am wondering if it’s something we might want to consider adding in the future. Because you can promise-race from async. It’ll still keep running in the background, even if you stop early.

JSC: Yes, thank you. Your point is well taken. This does make it easier to write bad code that might block a long time. But it’s already easy in the first place. I would say this is a convenience function more than anything.

JSC: It’s true: People need to be careful whenever they synchronously flatten any asynchronously iterable thing like streams or whatever into a flat data structure. But I think that it’s already easy to do that. There’s the argument on whether we should be *promoting* this or whatever…I think that this is important in a lot of use cases, like, I mentioned, testing and debugging and whatever. And I think those justify it. I think your point is well-taken about the dangers of flattening an async thing into a sync thing. I think that that probably shouldn’t block this, but, if it does, great. It does emphasize the importance of having a way to cancel things: perhaps in the future.

BT: My topic is sort of similar to that. So the Azure SDK uses async iterators in a lot of places: like pretty much anytime. There’s a list. It’s a nice async iterator, and the main thing pretty much the…The only thing about it that we hear is well, “That’s good, but I just need a way to get it into an array. Like, let me, please, god, just let me work with it as an array.” And so super strong support, from that perspective.

BT: Interesting to note that the reason why we don’t actually have a method—that will just give you the thing as an array—is that there are cases where, you know, sort of doing an `await` to get all [unable to transcribe] on a client for an Azure service would cost like potentially even *dollars*. Because you’re going to iterate over a massive collection, which is going to translate to multiple invocations of a REST API behind the iterator. And then potentially more, you know, [unable to transcribe] being expended, processing that query. So, you know, we sort of have taken the position that it’s too dangerous to have this just sort of hanging off of the client, like really easy for a user to get into. But you know, then again, this is something that people really want to do, and I think it’s a great, I guess, middle ground: where, you know, if you know it exists, you can go grab it and use it and, hopefully, you know what you’re doing and we won’t have to do anything with the [unable to transcribe]. So anyway, I just wanted to show you that.

SYG: No concerns with Stage 1, certainly. Could you please go back to the spec slide? I had missed what you had planned to do with @@species. If it’s updated, I cannot see. Maybe you can just directly speak to what you were planning with @@species. Does it async from it right now?

JSC: As I recall, `asyncFrom` doesn’t even mention @@species. It does not address species. I don’t remember `Array.from` even mentioning @@species either.

SYG: Oh, sorry. This is a static thing. Yeah. Okay. Yeah. It’s a transferable factory method, right? Okay. Yeah. I retract my question; never mind.

YSV: Yeah, so I’m just thinking a lot about this and one thing that I think works well in iterator helpers is we can effectively scope the number of async elements that are being taken. So this can allow people to say take five elements out of a certain stream and just operate on those, giving you a snapshot of what you’re working with. So that might actually address the size complaint—and it makes me actually lean towards iterator helpers here as being the right solution…but I think that this is just something we want to spend a bit more time with, and really understand what we want to get out of this API. How it should communicate to developers how it should be used. And maybe we can find some good common ground there later on. Because I feel like…One thing that I’m a little worried about with iterator helpers is people who are unfamiliar with working with iterators and generators. They might not be expecting all of the different kinds of behavior you can end up with. So just thinking aloud.

JSC: Yes. Thank you for raising those points. Please, feel free to open an issue on the repository, or I could do it and ping you, and we could talk more about its relationship to this proposal with iterator helpers and ramifications for teaching.

YSV: Yeah. Yeah, just something to think a little bit about. I mean, I’m hoping to take iterator helpers to Stage 3 in the next meeting. So probably we want to do that sooner rather than later. Maybe, what we’ll do is we take `toArray` and pause it. I don’t know, Michael [MF?], what your thoughts are there. But yeah, just down here down here for sure.

JSC: From my perspective, having both `toArray` and `array.fromAsync` isn’t a big deal, because `Array.from` already exists, but we can definitely hash this out more.

YSV: Yeah. I think I’m also leaning towards we should have both to be honest. Yeah.

MF [?]: Yeah, I agree. I don’t think it’s a problem to have both.

JSC: Yes. Asking for Stage 1.

RPR: Any objections to Stage 1? Any support for Stage 1? We like to ask for support. All right. Congratulations. You have Stage 1. Thank you very much, everyone.

### Conclusion/Resolution

- Stage 1 achieved

## continue labels should not pass through blocks

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/2482)

KG: All right, so someone pointed out recently that, the way the spec is written, if you have a labeled block whose sole statement is an iteration statement, and the body of the iteration statement contains a `continue` which has the same label as the label for the block, the spec says this is legal. And it has said that since ES2015. I don't think that was intentional; implementations don't actually do this, except ChakraCore does something weird. It is not a hundred percent clear to me what the actual semantics are. I think the semantics are that the `continue` completion propagates up to the top of the script where it causes the script to stop executing, but I'm genuinely not sure. So I would like to have consensus for making this syntax illegal. It's a normative change, because the current spec is in some sense coherent, but it is a change to match web reality.

YSV: It sounds good.

WH: I agree.

KG: That's my item. Okay, excellent.

RPR: Have consensus will change.

### Conclusion/Resolution

- Change is approved

## The Realm for the error when tail-calling a revoked Proxy

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/2495)
- [slides](https://docs.google.com/presentation/d/1txbE6t69AAufBlKsCF20Gzyq2pUDBxK2Az7XQwljZC0/edit#slide=id.g106f4536d9_0_109)

KG: [slides 2–3] Sorry about this. I did not want to take the committee's time on it. I have a different goal that I am trying to accomplish which requires this change and it is a normative change.

KG: This only affects implementations that have tail calls. If you don't care about tail calls, please just tune out the next two minutes. Go about your life. Please don't fight about tail calls or anything during this presentation.

KG: [slide 4] All right, so currently the spec says that if you tail call a revoked Proxy, you get a TypeError, and the TypeError is created in the realm of the function which invoked the function which contains the tail call. So, in this little first example, the TypeError is created in the realm of the function which invoked F. I would like to propose that instead it be created in the realm of F itself, as would happen if you didn't tail call or if you tail called literally anything other than a revoked Proxy, such as `null`.

KG: [slide 5] This doesn't match what JavaScriptCore does, but JavaScriptCore also doesn't match the current spec. So I don't think they are likely to care either way. I couldn't figure out how to tell for XS what Realms things are created in, and no other engine I tested implements tail calls, and so it is not relevant to anyone else.

KG: [slides 6–9] The last slide here is just, I don't want to consider any other possible changes here. This is the only change I'm interested in talking about. Please don't fight about tail calls. Yes, so again, concretely this proposal changes the Realm for the TypeError that is created in this particular case.

BFS: Just for some clarity, if you are faking a revoked Proxy, you couldn't give the right TypeError.

KG: You can't either way. It is impossible with a fake revoked Proxy, to create the TypeError, in either the realm of the caller of F or in the realm of F itself. That's just not data which is available to you.

BFS: So, the only way you can do that is if that's what JavaScriptCore does.

KG: That's right, but I don't want to have that change on the table.

BFS: I need a moment to think about this, sorry.

KG: Concretely, I want to exclude that because that would imply changes to other engines. Like that would be relevant even for engines which don't implement tail calls. I don't right now want to consider changes that would affect engines which don't implement tail calls.

BFS: Yeah, I think it's fine. I had to take a moment, sorry.

KG: All right, so I would like to ask for consensus for this change that is on the screen right now.

YSV: Do we have Apple on the call and some Moddable folks?

PHE: I'm here. XS only has one realm so that's why you couldn't figure it out because it's not there. Yeah, so no problem.

MLS: I think we’re fine with this.

KG: OK, so Moddable and Apple are ok with this.

RPR: I think we've had no objections and positive sentiment. So congratulations.

### Conclusion/Resolution

- Change is approved
