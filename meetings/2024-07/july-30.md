# 103rd TC39 Meeting | 30th July 2024

**Attendees:**

| Name                 | Abbreviation | Organization    |
|----------------------|--------------|-----------------|
| Daniel Minor         | DLM          | Mozilla         |
| Eemeli Aro           | EAO          | Mozilla         |
| Michael Saboff       | MLS          | Apple           |
| Waldemar Horwat      | WH           | Invited Expert  |
| Chris de Almeida     | CDA          | IBM             |
| Jesse Alama          | JMN          | Igalia          |
| Jordan Harband       | JHD          | HeroDevs        |
| Ben Allen            | BAN          | Igalia          |
| Frank Yung-Fong Tang | YFT          | Google          |
| Linus Groh           | LGH          | Bloomberg       |
| Philip Chimento      | PFC          | Igalia          |
| Chengzhong Wu        | CZW          | Bloomberg       |
| Dan Gohman           | DGN          | Invited Expert  |
| Nicolo Ribaudo       | NRO          | Igalia          |
| Samina Husain        | SHN          | Ecma            |
| Jason Williams       | JWS          | Bloomberg       |
| Justin Ridgewell     | JRL          | Google          |
| Ashley Claymore      | ACE          | Bloomberg       |
| Keith Miller         | KM           | Apple           |
| Istvan Sebestyen     | IS           | Ecma            |
| Dmitry Makhnev       | DJM          | JetBrains       |
| Chip Morningstar     | CM           | Consensys       |
| Mikhail Barash       | MBH          | Univ. of Bergen |

## Normative: fully define Math.sqrt

Presenter: Michael Ficarra (MF), Dan Gohman (DGN)

- [PR](https://github.com/tc39/ecma262/pull/3345)
- no slides

MF: Yes. All right, I am copresenting this with DGN, so DGN at any point feel free to stop me and add context. I will defer to you to add anything else you want at the end. So, we are trying to actually define what `Math.sqrt` produces. Currently it produces an implementation-approximated value approximating the square root. And as context this is part of a broader effort to try to discover what the actual web requirements are for the values that are today implementation-approximated. We are aware that there are some requirements on both the accuracy and certain invariants for these implementation-approximated values which are used in math functions. And this is just the first step in that direction. So, maybe someday in the future we will be proposing additional properties that must hold or additional bounds that the value must be within, but today we are just taking what should be the easiest step, which is for Math.sqrt. We should be able to fully define it. WebAssembly already has f64.sqrt which a lot of JavaScript implementations also support. And wasm square root is fully defined as well. So it should not be a burden. And I have also run tests on SpiderMonkey, JSC, V8, XS, LibJS, and Chakra

MF: These are linked from the agenda if you want to follow along but both of these I recommend that you read these if you are more interested in the more general problem. And then 3345 is the PR and I ran tests and we can run more but I was satisfied by 10 million nonrandom negative doubles, which are the acceptable inputs for Math.sqrt, through the engines I had available to me. We see that all of those engines match on all of those 10 million inputs. I can confirm a larger set if somebody is skeptical, but this gives me good enough evidence that all of the engines do produce the same result, which is the exact result.

MF: And it makes sense that a lot of those implementations need to have the wasm instruction and they have the exact result. And I don’t think it is a burdensome requirement, at least in modern day architectures. DGN is an expert in that, and he should be able to elaborate if anybody is curious. And the change looks like this. We just remove square root from the list of functions that do not give precise results. And instead of saying implementation-approximated Number value representing the square root, we just say it is the square root converted to a Number. So as far as specs change, I think that is all I wanted to present. DGN did you want to add anything?

DGN: No, I think you covered it all.

USA: All right we can go to the queue if you would like? First in the queue we have Waldemar.

WH: I think this is a great change. Back when we first defined square root in ECMAScript it was not clear if there exists an efficient algorithm to compute the exact rounded value but now we know that such algorithms do exist, not only for square root but for trig and exponential functions as well. We now know — the numerics people now know how to compute the exact results rounded to the nearest double for a lot of these.

MF: I welcome your participation in furthering issue 3347.

USA: Next we have Dan Minor.

DLM: So we definitely support this change, and my only question is about the history and Waldemar has covered that quite well, so this is great, thank you.

USA: Next is SYG?

SYG: I support and thank you for doing the leg work, since this the already state of the world for web engines today, and it looks good to me.

USA: That is it, I from the queue, we will need support. Would you like to ask for consensus on the pR?

MF: I would like to ask for consensus on the PR 3345? Given there is nothing in the queue.

WH: I support consensus, of course.

USA: Thank you WH.

DE: I support it.

USA: Thanks MF, great congratulations to MF and DGN.

MF: Thank you, that was very easy.

### Conclusion

- Consensus on PR #3345

## Intl.Locale Update in Stage 3

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](​​​​https://github.com/tc39/proposal-intl-locale-info)
- [slides](https://docs.google.com/presentation/d/1wWDYg5BF1wNNAdC6YbBKvRtKS1acyvIP0eLkWCH2c7M)

FYT: So hi everyone I am FYT and working for Google and today I will give you an update and hopefully we could wrap the thing up pretty soon. Um, so basically, I give you an update recently happen on this location, and then try to seek a consensus for a small PR hopefully that is last one we need to touch for this proposal.

FYT: So basically the `Intl.Locale` API and working with the ECMA4 too and try to exposed week data. And we can start day, weekday and hour cycle and such in the locale, and so having advance Stage one in accept 2020 and Stage 2 in January 21 and april 21 and I have and Safari has implemented and we found some change and problems particularly with go to a—after Stage 3 unfortunately that we change some property to function. And there is a way we can try to expose because we have to deal with first day of week issue and we are adding additional properties to the locale and we have been back and forth a couple of times. And there is some issue dealing with how do we treat a locale, and first day and we resolved thing internally. And we are changing back and forth from represent that thing as a string or a number and back toString because if we get out of that there is locale consistency there, and all things that are readdressed and we talked before and what we try to address right now is basically a couple of things.

FYT: One thing is that there was a hanging thing about whether how does the calendar and fw keyword in the locale impact the first day of week resolution. And that was not able to drag because we are pending UTS 35 external spec to clear it out. And unfortunately that was clear out, and the last release of CLDR in October 23rd and so we missed kind of our last time we can be able to address that. But eventually, we actually pick up whatever they have and try to basic block one of the issues and good thing about after that November meeting last time, so that external dependency got addresses. The other thing is that they are thanks for people’s helping that we were calling for community support of polyfill and that is now added to improve that thing and I think the implementation so far is an issue and we are looking into it and there is improvement of the test262 tests and I think that made this API a bit more mature because we have more test coverage and also polyfill right now and Safari is shipping and chromium is updating to and synchronized. And one thing we need to address I think during the complete polyfill last time we changed it in PR 79 we missed something in the spec, so whenever the first day of week prototyped return correctly, and when we tried to get that information into the get week info, first day, which supposedly was the final result one and that should return the number and we forgot to do the conversion, so really it returns a string, and it should not happen that way and it was not intended but the spec tests we did not do that, and also, this is therefore this is a normative PR and we need to fix that. And the other thing is that kind of arguable and whether it is normative pR but I think it is because I think Anba from Mozilla has design to change spec test to make explicit about and precise about how to deal with ISO 8601 calendar. And the spec test was having because that value is we would describe it as a locale-dependent value so it could be interpreted as depending on that thing for locale but he expressed the desire to make it more explicit processing and say well whenever this happens, it should happen that way.

FYT: So we agree—I think we talked about that too and we change the spec test for special hash joining and for other locale, and the on the calendar we are clear about how does that happen, so we basically say Wal 8601 (?) make sure it always return that way. Which is aligned with ISO 8601 and we put that in the PR79 and this will make it more precise and explicit in an implicit vague description to a very explicit line by line way to describe that. So this is the one thing that we like to seek for the consensus from this group.

FYT: The other thing is that there are additional issue file to approach but we believe that these things should be deferred, and probably considered for the future extension because there are some other complications and one of the issues that people and is whether we can get a possible currency code back from locale, we think this is out of scope. We think because when we go to safety we tackle this part and this is a bit more complicated than other issue about currency code. So I think we think there too late, and we can delay that and maybe later on adding that. And so now the Chromium V8 M99 is (?) conversion and so the spec is not the—I think Safari, and so it is shipping and Mozilla is pending and I think that additional that we have polyfill, and Chromium I tried to synchronize whatever last time we talk about November about a getter function thing in 129 (?) and we are working on that and we will probably have that soon.

FYT: So here is my request to committee is to have consensus about PR83 and I am happy to discuss in TG2, and I think people are supporting and forget who is supporting that and I think there is notes in the PR about explicit support with their and committee discussion but I think we need to bring up TC39. So any questions.

USA: So first in the queue is DLM.

DLM: Yeah I checked just now there is still an open issue with PR8 3 which it looks like some additional clean up to the spec test after Anba’s patches are (?). So I think we are supportive of the change as long as that review comments is addressed. And so yeah, see. So that is it right the following where it says two weeks ago. So maybe you need to move a line there, I am not sure. And so this point of view our approval of this is conditional on Anba’s review comments being addressed.

USA: That was the whole queue, FYT.

USA: DLM has another thing to add.

DLM: Yes update on the Firefox status, and yes we do have initial notation that Anba has been working on and has not been updated but given that he is still spending time to finish this off, and if for some reason he is not able to, I think another member of team will pick it up and so we will say something we intend to eventually.

USA: Thank you. And that is the queue again, FYT would you like to fully request for consensus?.

FYT: Yes, please.

USA: We will give it a minute for any expressions of explicit support or any dissent. There is nothing on the queue still, and you have consensus. Congratulations, FYT.

FYT: Thank you.

### Conclusion

Intl.Locale Update has consensus and advances to Stage 3

## unordered async iterator helpers for Stage 1

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/michaelficarra/proposal-unordered-async-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1EDhoV4Vyh1Pte-W2qWvvCeLwhQ61dMFT55GNg0VeDLM)

MF: So let me bring you back to this little diagram that I showed you yesterday. Yesterday we talked about the concurrency control proposal, which was a follow-on to async iterator helpers that allowed us to drive them concurrently, not just support concurrency. Additionally with the async iterator helpers we began exploring how we can provide more optimal use of the concurrency available to us and that included the opportunity to drop the ordering constraint from some of the helpers so that they could operate more efficiently. By "dropping the ordering constraint", I mean the results are not necessarily yielded in the same order that they were yielded in the input iterator. So we decided, though, that that would expand the scope of async iterator helpers too much by remaining in that proposal and decided to split that out. So this is that proposal. I wonder what we’re going to split out from this proposal once we—it’s probably something. So you might recall that KG previously presented this series of diagrams in the async iterator helpers proposal when talking about the ordering constraint and I am simply copying them here to show you that sometimes when things are not the next thing that’s being yielded they hold up these concurrency slots even though they’re ready to go, whereas if we drop the ordering constraint, they can be yielded in any order, and we can use up as many slots as we have as efficiently as possible.

MF: So that’s the motivation of having unordered helpers. I also think that oftentimes you’re using async iterators in a way that ordering does not matter to you. You just want certain work to be done and for you to have those results and even if you do care about the order, sometimes you want to do that work in a way that is unordered and later reapply the order. If you zip with the natural numbers, you can kind of reorder things asynchronously later after the work has been done more efficiently.

MF: So this is what the proposal looks like. For the AsyncIterator helpers proposal, we have a method that is added to `Iterator.prototype` called toAsync that gives you an iterator that inherits from `AsyncIterator.prototype` and has all the same helpers.

MF: What this is proposing is we do something similar and add a method to `AsyncIterator.prototype`, and I called it unordered, and that gives you an iterator that inherits from `UnorderedAsyncIterator.prototype` with all of the MVP helper methods. The difference is the unordered async iterator helper methods are able to operate more efficiently because they don’t guarantee order or at least some of them are able to operate more efficiently.

MF: So what does that look like? Well, in the user code that you write, you can simply add unordered at some point, you know, the earlier the better, and drop that ordering constraint and then everything after that is able to be done more efficiently. So I guess the important part is that it is—and I’m kind of skipping ahead of myself here — it is not easy to accidentally mix unordered iterator helpers with ordered iterator helpers. We have explored with the async iterator helpers proposal possibly just having two variants of each method like `map` and `mapUnordered`, but that would allow you to create these chains of method calls where you are mixing unordered and ordered helpers and as soon as you add back the ordering constraint, you lose all of that efficiency from upstream. So this design allows us to achieve that goal.

MF: So like the last proposal, I will clearly outline what Stage 1 means. What I’m asking for today. What we are looking to do is find a way to provide more performant async iterator helpers when it’s okay to drop the ordering constraint, which I believe to be a very common case. So the way that we achieved that in this, again, overworked proposal today is the addition of an unordered method to `AsyncIterator.prototype` and the whole `UnorderedAsyncIterator` prototype and all of the methods on it. We want that to be easy and convenient to use because yet again, I expect it to be common to want this. And we don’t want you to accidentally re-apply the ordering constraint. We want the way you do this to make it hard to mess up. I also wanted to note that this will depend on the concurrency control proposal for the iterator consuming methods because this provides no benefit if there’s no concurrency, right? Dropping the ordering constraint with a concurrency of one is the same thing. So I would like to ask for Stage 1. I think I also have some post-Stage 1 design questions, just a couple, if we do achieve Stage 1.

USA: Okay. Let’s see the queue. First we have DLM.

DLM: Sure. First of all, what you want to investigate makes sense to me and so did the concurrency control topic yesterday. It feels like very logical kind of follow on from the initial work. The only thing that I would like to say is it feels like we’re getting pretty far down the rabbit hole and Chrome has been shipping iterators for a while and I’m hoping to get this week and I’m wondering if we’re going far down the direction without getting feedback and seeing how the initial stages of this have been used. But no problems. This makes sense for Stage 1 to be investigated.

MF: Yeah, I have personal experience at least with using the iterator helpers. And actually not even realizing it, they’re just—I expected them to be there. But I do understand we don’t really have too much community feedback. But at least when we talk about maturity, I would say that the async iterator helpers proposal is close to 2.7, so I feel like we’re building on a fairly solid foundation. I don’t personally feel that we’re looking too far down the road here. But you are right that it is possible that the things that this depends on are still kind of open to change.

USA: All right. Next on the queue, we have SYG.

SYG: So I agree with DLM there and going down the rabbit hole thing. I would like to see using validation. That would be great. User meaning web developer at large for me. For asyncIterator helpers the demand from web developers was kind of overwhelming clear. Everybody as you were saying kind of expected them to be there. For async that is less clear to me. For unordered async that is even less clear to me. And TC39 kind of operates in this method where we design everything up front and we ship it. And normal software development process, I would have expect some kind of incubation process here to get a better signal of developer demand. Since that’s not how TC39 works, I also have to same concerns as DLM.

USA: Next on the queue, we have MM.

MM: First of all let me just also say support Stage 1 completely. I’d also like to respond a bit to SYG and DLM, which is that given the support for iterator helpers, it would be very surprising to not have at least that much support for AsyncIterator helpers. That doesn’t speak to this proposal. But it speaks to AsyncIterator helpers I think does not need that much empirical validation from the argument. And any case, the question that I have with instanceof behavior. In particular, does AsyncIterator prototype inherit from unordered AsyncIterator prototype or vice versa or just distinct prototypes?

MF: The answer is, no, there’s no inheritance relationship. I had investigated that. I’ve talked about that with KG, maybe a dozen times. And it doesn’t seem like there’s much benefit. I would love to hear if you have use cases for –

MM: The main one is just a least-surprise issue, which is if people ask of an unordered asyncIterator instance, are you an instanceof an AsyncIterator, it seems a little bit strange from the substitutability principle for it to say no. But that’s it. The instance is the only reason why I find the further inheritance tempting.

KG: I have the opposite opinion about what LISCOV said here. And the normal AsyncIterator is opposite constraint and map over it and iterate over the results concurrently you get things in order and unordered ones don’t. You could perhaps have it the other direction, or you consider performance LISCOV principle.

MM: You are correct. The principle would have the inheritance go the other way. And that also—that does make sense to me. And as you explained it, it makes more sense to me than the one I started with.

USA: That’s it. We have also +1 from CDA and +1 for Stage 1 from luca as well. So only really positive statements so far. Let’s see if somebody else is going to add—okay, KKL same +1. +1 from WH. So you have Stage 1. Congratulations.

MF: We didn’t ask for official consensus.

USA: That’s true. Do you want to do that now?

MF: I would, but before that, I would like to just make the acknowledgment that I appreciate both DLM and SYG voicing their concerns that we’re possibly looking a little too far down the road and I want to try to alleviate that by saying I would not to try to advance this to even Stage 2 until we both have a Stage 3 async iterator helpers and more experience with async iterator helpers, and hopefully that will make them more comfortable.

MF: Yes, I would like to ask for Stage 1 now.

USA: Wait. We already hard a lot of support so far. Let’s give it a minute or so to see if anybody has any more to add. Nothing on the queue yet. You have consensus. Congratulations on Stage 1.

MF: Thank you. As I mentioned, I have a couple more things if anybody wants to give feedback, I would be happy to hear. Again, this proposal, just like the concurrency control, is more worked because they are split from further along proposals. This question is further along. This would be the name of `toAsync` and name of `unordered` don’t really match even though they’re doing kind of the same thing of giving this new prototype. Should they match a little more closely? Should async iterator helpers be updated to say `.async()` or change the name `toUnordered()`? I don’t know.

MF: Something I haven’t listed on this slide but I did want to add and I forgot to add was if you look here, `AsyncIterator.prototype` doesn’t currently have a `.toAsync` either. The only thing they share is MVP methods. Should `AsyncIterator.prototype` have `toAsync` and also `unordered`? It basically would be so you can call them whether or not you know you have an async iterator or unordered async iterator. Would that be helpful? I don’t know.

MF: And then the third point: should we require the concurrency parameter for these? The concurrency parameter In the concurrency control proposal is optional. But with these unordered helpers, concurrency of one is bad. You don’t want to do that. Should we require them? Should they be different from async iterator helpers in that way? I would like to use the rest of my time to hear any feedback on those questions if anybody has them.

MM: So on the coercion methods, independent of what they’re called, I do like the idea that when you introduce a coercion, that the thing itself coerces to itself, IE, the target of the coercion honoured the same coercion operation as the identity function.

MF: That’s my intuition as well. I was leaning slightly towards that. That would be possibly then asking KG in the async iterator helpers proposal to add `toAsync` to `AsyncIterator.prototype` but we could also do that later. It’s not the end of the world.

USA: That was all for the queue. No, next we have WH.

WH: If you’re proposing to change API of the methods, then a question I have is why do you need a separate object instead of having both ordered and unordered versions of the methods on the AsyncIterator prototype object? I think I can guess the answer.

MF: I covered that a little bit earlier. It was to solve this last constraint here that it should not be easy to accidentally mix with ordered helpers. So we went with this design. You know, we considered having ordered and unordered variants of async iterator helpers, that’s how we originally were incorporating it in that proposal. But with this split, I have gone with this design so that it is virtually impossible to accidentally mix ordered and unordered helpers.

WH: I assume you can have ordered helpers and switch to unordered mode and then run unordered helpers?

MF: If you switch to unordered mode the only way of calling ordered helpers is Function.prototype.call on the ordered iterator helper. You could also, if we don’t require a concurrency parameter, use a concurrency parameter of one to turn them into ordered helpers. At that point you’re intentionally shooting yourself in the foot, and I’m okay with that.

WH: No. What I meant is, before the call to `unordered`, you could run some helpers and then call `unordered`.

MF: That’s true. You definitely can. And I think that’s fine. You may have a dependency on ordering in this first helper.

WH: Okay, thank you.

USA: That’s the rest of the queue.

MF: Thank you for the feedback everyone.

USA: And thank you, MF. Would you like to take a minute to dictate key points and a summary?

### Speaker's Summary of Key Points

MF: Yes, I would. So unordered async iterator helpers has been split out of async iterator helpers and async iterator helpers will no longer be considered in that problem space. Unordered async iterator helpers has reached Stage 1. There’s concern that we may be designing too far ahead, so the champion, myself, has committed to not trying to advance unordered async iterator helpers to Stage 2 until async iterator helpers has further advanced and we have more experience with async iterator helpers in the field.

MM: I would like to interject. One additional point about the coercion operations, which is if you have the iterator and you want an unordered AsyncIterator helper, you should not have to do two coercions to get there.

MF: Interesting. I’m open to that. That’s definitely a Stage 2 concern. But I’m open to adding that.

USA: Okay, great. So that’s that for this item. We’re going to squeeze one more in. So JHD, are you prepared for—let me check is error.

## Error.isError for Stage 2.7

Presenter: Jordan Harband (JHD)

- no proposal
- no slides

JHD: Yeah. If you scroll down,CDA, you’ll see that I do have a bunch of unchecked items in the Stage 2.7 section. So I do not believe it’s ready to ask for 2.7 today unfortunately. Hopefully my spec reviewers can take a look at it sooner than later. But either way, I wanted to talk about the PR 11 on the repo and get consensus on the proxy based behavior on `error.isError`. So in issue 8 a number of things brought up about why it would be bad idea for another thing that Pierces proxies. KG has the comment about the perspective of creator of proxies is primitives and functions and proxies and arrays and that adds a fifth item to the list. Additionally there’s a comment that MF made in a different issue which is that this would make object prototype 2 string conflict with `Error.isError` because it does not proxy pierce and `Error.isError` would and you would be able to determine with the combination that an error—something is a proxy of an error even though `Error.isError` attempted to mask that. I find all of the arguments to be very strong and so I put up question 1 that removes proxy piercing and reduces the spec text down to a much more minimal set that is effectively is it an object with an error data internal slot?

JHD: I was hoping to ask for consensus that we would remove the proxy piercing. At which point the only thing remaining would be spec review and next meeting is ask for 2.7 and HTML has been put up and not received any review. You can find the index.HTML file. I believe conceptually the HTML integration PR means everyone’s constraints that there is no—it is expected and encouraged that platform exceptions are considered an error and are not differentiated from language exceptions by this method. So DOM exception would return true from the predicate for example. The exact editorial means by which that’s achieved in HTML is of course consider altered by the normative concept I believe would be the same regardless. I just basically wanted to—I will go to the queue. My intention is to work through this issue and then hopefully there would be no other reason not to advance it to 2.7 pending spec review next meeting.

NRO: You’re presenting tomorrow another second method. Is that also not doing proxy piercing?

JHD: Correct. I believe that proposal—I’ve only recently signed on to champion it. But I believe that proposal has never attempted to do proxy piercing. It wasn’t built to do that. So the question didn’t come up. But yes I would say that based on this same discussion, I would expect no proxy piercing but it might be different because array dot is array is proxy pierced and I think that is something that can be discussed tomorrow.

NRO: Thank you. I think it would be good to keep the two proposals aligned.

JHD: Agreed.

NRO: I prefer the nonpiercing behavior and happy with the proposal and I will defer my question to tomorrow. Last time I checked it was not doing proxy piercing.

JHD: Right.

MM: So I agree this should not do proxy piercing. I am fine with this proposal going forward. But it’s worth noting explicitly the other irregularity that this proposal engages in and especially worth noting so it doesn’t become a precedent. First of all, the reason why I like it not proxy piercings also to avoid a precedent. We don’t want to expand the things. And the other irregularity by proxy piercing is this test internal property on a non-this argument. In general the hazard there is to make practical membrane transparency harder or to make it less transparent. And in this special case, the reason why I find this to be plausible is that given this proposal, practical membranes going forward will probably reflect an error on one side by recreating an error on the other side. And this trades off one form of transparency to another. Somebody adds a property to the new error, that property is not seen on the old error because the error itself is not a proxy. As someone who has written many membranes, I think that’s a fine loss of transparency practically. But I would caution against people reading into this a precedent for more tests of internal properties on non-this arguments. Since is template object—template array did come up as a question, I want to say I think that’s a very different question, it has very different complexities and become increasingly uncomfortable with it for reasons that do not reflect on Error.isError.

JHD: Thank you MM. I will make sure that the summary of this item includes that does not exist a precedent in either direction for checking internal slots on arguments on static methods.

MM: Thank you.

ACE: My queue item says, I think following on +1 to not proxy piercing and also nice—it’s kind of a shame if you proxy pierce there’s a chance it will throw an exception that feels like everything you don’t want to happen inside of a catch handler where this is likely to be used. And then also as one of the spec reviewers, if emerges the spec looks good to me.

JHD: Yeah, I mean, it is definitely weird to have a predicate that can throw. So I prefer it for that reason as well.

SYG: Add some pedantic coloring to platform errors returning true for isError, in my mind the litmus test is not that platform errors should always return true for Error.isError. If the host makes an error that has error dot prototype on the host error prototype chain and the stock chase of the magic capability that native JS errors have then it should be true for `Error.isError` and built like JS error that DOM exception does except from the spec point of view doesn’t have the error data internal slot. That’s like a spec detail basically. If it acts like a built-in JS error, it should return true for Error.isError. If the host wants to expose platform errors that don’t have those capabilities they should not return true for Error.isError.

JHD: I completely agree with your take on it. I can’t think of a better term than platform exceptions because I don’t think anyone has chosen to create native errors that aren’t like host errors that aren’t—that don’t meet the criteria you mentioned. I agree with all of the nuance you discussed. I think ACE already talked about the throwing.

### Conclusion

- PR removing proxy piercing will be merged
- This proposal does not constitute a precedent for checking or not checking internal slots on arguments (not the receiver) of static methods
- will return at the next plenary to ask for 2.7

JHD: Okay. So since I don’t see anything else on the queue, I will merge the PR that removes proxy piercing. So here is my summary. I will merge the PR that removes proxy piercing. This proposal does not constitute a precedent for checking or not checking internal slots on arguments of static methods and I’m going to come back at the following—at the next plenary meeting and request stage 2.7.

MM: For specifically non-this arguments.

JHD: The receiver arguments as opposed to the receiver.

MM: Right.

JHD: I will tweak the notes to make sure that is clearly expressed. Thanks everyone.

USA: Thank you JHD.

## Temporal update & bug fixes

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](http://ptomato.name/talks/tc39-2024-07/)

CDA: Temporal. Do the champions of the proposal that I just named have a consensus on how we’re going to pronounce that?

JHD: That’s bait, CDA.

CDA: What?

JHD: That’s bait. Trying to start a fight with someone.

CDA: I heard champions call it both. Retract. Withdrawn.

PFC: I don’t think there is a current consensus.

PFC: I wonder if we can get consensus to delay my presentation while we watch Chris’ cat. This is fascinating. Everybody except me can do both.

PFC: (Slide 1) For anyone who hasn’t met me yet, my name is Philip Chimento, one of the proposal champions of TEM-poral or Tem-POR-al. I won’t say how it’s pronounced. I work for Igalia and I’m doing this work sponsored by Bloomberg. Thank you.

PFC: (Slide 2) I’m here to give a progress update and request some normative changes to the proposal. The progress update, very similar to last time. Temporal is in our opinion close to being done. The focus of the champions group right now is making sure that all of the implementations that are currently being worked on are successful. We’re doing this by fixing corner case bugs and making editorial changes to improve clarity and simplicity of the text. Now, you remember that in the previous plenary meeting in June, we landed a large change to remove outright a lot of APIs due to concerns about the complexity of the proposal and the binary size of JavaScript engines that implement it. Going forward, we will be assuming that this large change that we made in June has resolved these concerns. Please speak up as soon as possible if that’s not the case.

PFC: (Slide 3) So we see no reason to delay. Please by all means go ahead with your implementations, ship them unflagged. There’s no restriction on shipping them flagged anymore since the ISO 8601 string annotations have been included in a published standard. If there is something preventing you from shipping Temporal, please let us know as soon as possible, and we will do our best to try to resolve it. Don’t wait. If there’s going to be a need to make changes, we want to make them as early as possible so that other implementations have plenty of notice. We are still having a regular Temporal champions meeting. But the focus is now squarely on “how can we help implementers?” rather than “what do we need to change?” And it has been for some time. If you are implementing the proposal, please feel free to join in the champions meeting. It’s biweekly Thursday at 8:00 Pacific time or if that time doesn’t work for you, we will happily meet another time that does, if you have questions.

PFC: (Slide 4) Here is a graph that I made earlier this month showing the current test conformance of implementations that have a partially complete Temporal implementation. SpiderMonkey passes 96% of the tests. V8 and LibJS three quarters. JavaScriptCore 40%, and Boa is at 23% and they have either landed since the time that I wrote this slide or are still about to land a change that would get them to 32%. So things are looking good.

PFC: (Slide 5) We have a small follow up from last month’s meeting. If you remember, we had an item proposing to make all valueOf methods of Temporal objects the same function object in order to reduce the number of built-in objects. And the same for toJSON methods. Last month in the plenary, Mozilla asked for more time to investigate it before agreeing to it, so we agreed to come back to it later. I have since heard that Mozilla investigated the feasibility of this and their position is that we should only do it if we still get the feedback that Temporal is too large to ship after all the other changes. Now, since I mentioned earlier that we are assuming that the concern has been resolved for now, we are proposing not to pursue this collapsing of valueOf and toJSON methods at this period of time. If anybody wants to do this because of size concerns, please let us know as soon as possible.

PFC: (Slide 6) Another follow up, I added this slide yesterday. Yesterday in the plenary meeting, we had a discussion in the context of the item about truncation before or after range checking. Some people in the discussion suggested to apply the “Stop Coercing Things” convention to Temporal. We originally didn’t go back and apply this convention because we had consensus at the time it was adopted not to apply it to Stage 3 proposals. It sounds like some folks were nonetheless calling for this. We talked about it in the champions group. We would caution against making nonessential changes in Stage 3 like this. But if the plenary happens to have overwhelming support for doing this, let’s get agreement on it now. But because of the short notice, that agreement is not going to be in the form of a PR that we can look at and decide whether to adopt. We do not want this to delay the proposal any further. So we also don’t want to bring the PR back to the next meeting.

PFC: (Slide 7) I looked through the proposal and wrote down all of the APIs where we could potentially stop coercing things. There’s a list of them on this slide. Not all of these seem like they should change. So, yeah, I would ask if there are people who feel strongly about Temporal changing these APIs to stop coercing things, then in that case I would like to get consensus on changing it in principle and having the champions group go through and decide which of these it makes sense to change. So, for example, toLocaleString seems like a candidate for not changing because toLocaleString in ECMA-402 creates an instanceof `Intl.DateTimeFormat` that is an API that already existed and therefore cannot stop coercing things. That’s one example of something we shouldn’t change, there could be others. So my request would be if you feel strongly that we should go back and do this, that we give a sort of blanket approval for the champions to investigate which ones of these make sense and then change them.

PFC: (Slide 8) All right. I’ll get on to the bug fixes that I’m going to ask for consensus on.

SYG: Did I just miss? Was it my connection or did everything go silent for a minute?

CDA: It was your connection.

PFC: What part did you miss? I can go back and repeat that.

CDA: I had a point of order about seeing the list of APIs but now it’s—sounds like your sound cut out as well. Are you okay now SYG?

SYG: I think I’m back now. Sorry.

CDA: I’ll post the link to the slides as well, just in case.

PFC Yeah, it’s on Slide 7. Should I move on with the bug fixes? Do we need to go back and redo some things?

SYG: Please continue.

CDA: Great.

PFC: (Slide 9) All right. Turns out the time zone database has a corner case, you know, over a hundred years ago Toronto switched to daylight saving time at 11:30 p.m., they skipped the hour between 11:30 and half past midnight. So that means the day of March 31st, 1919 started at half past midnight and the algorithm for calculating the start of day didn’t take this into account because it is the only such case in the history of the TimeZone database where this happens, that a day did not start on a whole hour boundary.

PFC: (Slide 10) So, yes, we would like to fix the algorithm to take this into account. This affects a couple of methods: Temporal.ZonedDateTime.prototype.startOfDay, .hoursInDay, .round, .withPlainTime, Temporal.PlainDate.prototype.toZonedDateTime, and parsing a date-only string with a time zone annotation. I would like to thank Andrew Gallant (BurntSushi) for discovering this edge case.

PFC: (Slide 11) Here is a short code sample of what would change. So the result of hours in day on that particular day would be 23 and a half instead of 23. And then asking for the start of day, asking to change the time to start of day or parse a date-only string with a time zone annotation, or convert the date to a ZonedDateTime without the accompanying PlainTime, all of those would previously give 1:00 a.m. on March 31st and now give half past midnight on March 31st, which is the correct answer for these.

PFC: (Slide 12) The other adjustment we would like to make, there’s a certain rounding operation where you can round a duration. Durations can have calendar units and round to a number of calendar units and specify a rounding increment. So, for example, this operation here rounding a 9-month duration to the next highest ceiling increment of 8 months, relative to January 1st on a leap year, is going to give 16 months. This is all fine. This is an anticipated and intended use case of the duration round method.

PFC: (Slide 13) It’s complicated if you try to do that while simultaneously balancing to a larger calendar unit. This is unclear what the programmer should expect. So if you add `largestUnit: ‘years’` to the options, you could interpret this as rounding to 16 months and then balancing to the largest unit of years and then the result would be one year, four months. You could also say the result of this operation is going to have a months component that is divisible by 8 and therefore one year and zero months is the next highest result within the constrained set of results from this function. So this is an edge case, this particular combination of options with smallestUnit being a calendar unit and largestUnit being a different larger calendar unit.

PFC: (Slide 14) We believe that we actually just never considered this case. It didn’t come up in real world use. It was found as a result of an implementer looking for corner cases. If we wanted to decide on the behavior for this, ideally we would want to research in which situations actual users were using this operation in the real world. It would complicate the rounding algorithm for unclear benefit. Given we’re at Stage 3 and we already had a push for simplifying things, we prefer just to not support this case, where you give that particular combination of options, and keep things simple. So concretely, the proposal is to throw a RangeError if you give the following combination in the options of Temporal.Duration.prototype.round: a roundingIncrement greater than one, and a smallestUnit of years, months, weeks, or days, and a largestUnit not equal to smallesUnit. So this edge case was discovered by Andrew Gallant again and Adam Shaw who is implementing a Temporal polyfill.

PFC: Any questions so far? Looks like there’s some things on the queue.

DLM: So I prefer to not see any more Temporal API changes at this point and pretty clear when we discussed and they would be design principles with new proposals and in particular with temporal at Stage 3, as pointed out in development for seven years as an implementer I would like to not see more API changes if we could avoid them and in particular my understanding of stage 3 is that proposed changes would come by implementation feedback. I don’t believe that’s the case here. And since I’m next on the queue, I support the bug fixes that you’re proposing.

PFC: Thanks. That certainly works for me. The existing consensus is to not go back and apply “Stop coercing Things” to Stage 3 proposals. This would be just sticking to that. MF?

MF: So, yeah, this is not going to be like a requirement or anything. But I do think that for the—on the coercing point, if we could with very little effort go through all of the existing 262 APIs and know which ones would be web compatible to remove coercions from today, you know, just magically somehow, we could do it. But we know that that’s a lot of work. So we’re not pursuing that effort. But for things like this where we know today that it’s very likely that we can remove the coercions, I would think that it’s worth that amount of effort to make that change, but of course, implementations may have different opinions about that. That’s what my opinion is. I would ask that we just try to make that change. I think it’s fairly minor. It should be considered as minor as the Canadian start of year change. Why not just do it?

PFC: Okay. I recognize that opinion as well.

CDA: There’s a reply from SYG.

SYG: I want to see if DLM can give more colour to why is against it? Is it like the principle of changes to Stage 3 things? Is it something in practice with the SpiderMonkey implementation?

DLM: It’s just the principle. ABL has been doing a huge amount of work to get this ready. If we were to do it, it would be a small change. But it’s a small change on the steady series of small or larger series over the course of years. But it’s not an implementation concern. It’s more a principal concern.

SYG: Thanks

DE: I apologize for muddying the waters a bit by voicing support for removing coercion in Temporal in the Matrix chat. When the coercion topic came up, this is one of my original concerns that we not apply it to Stage 3 proposals. If it were possible to do this very cheaply, I think it would be nice. But I guess the—I would really want to conclude today on in principle whether we’re making this change. If we don’t conclude today we’re making this change, we’re not doing it for Temporal because as PFC said, it’s already shippable. The work that PFC did that went into the removal was kind of more significant than initially expected. I think he could tell it was going to be a lot of work. But there are just a lot of places where coercion happens. It wouldn’t be realistic.

PFC: In particular, I think it would invalidate a lot of the Test262 tests that we have. I mean, it might reduce their number which would be nice. But it would be a non-trivial amount of work.

CDA: That’s it for the queue.

PFC: First I would like to call for a consensus on the two normative PRs that fix the bugs. Is there any objection to this? Or any other explicit support? We already have explicit support from DLM, thank you. Can we conclude this has consensus?

CDA: I support this as well. Do we have any objections? Hearing nothing, nothing on the queue, you have consensus.

PFC: All right. Then as for the stop coercing things item, it doesn’t sound like there’s strong universal agreement to go back and do this. So can we say there is consensus on leaving things as there are?

DE: I’m on the queue, yes, I support reaffirming consensus on doing coercion in temporal. Are there other opinions?

CDA: Yes. That makes sense to me. But I’m a little bit—you just took it off the queue. But it seemed to contradict what you mentioned on the queue about no coercion.

DE: Oops. I meant no coercion related to –

PFC: How about let’s say no change? Can we have consensus on no change?

DE: Consensus on no change. In theory, we don’t need consensus. Because the topic was raised, it’s great to be reaffirming that so there’s no confusion.

CDA: That’s a great point. I am supportive of that. I will +1 that. And remind that the “Stop Coercing Things” was to indicate that for a general guideline and that’s something that’s the baseline rather than impossible to have an exception to it and it makes sense if it ever makes sense. not seeing anything on the queue, any objections to that? All right.

PFC: Thanks everyone.

CDA: No changes.

PFC: I typed up a proposed summary for the notes which is listed here. I will paste this in the notes and add a sentence about the reaffirming the consensus to not have any changes with respect to coercion. And that’s it from me. Thanks. Just inside the time box, I think.

CDA: That’s great. My only request would be if you could please update the notes right away.

PFC: Of course.

CDA: Some promise they will do it and then they do not.

PFC: I will do that right now.

### Speaker's Summary of Key Points

- Temporal is nearly done, and the focus is on helping implementations get to completion. Implementations should complete work on the proposal and ship it, and let the champions know ASAP if anything is blocking or complicating that. Follow the checklist in #2628 for updates or feel free to join the champions meetings.
- Collapsing valueOf and toJSON into identical function objects will not be pursued at this time.
- There are several places in the Temporal API where coercion of input arguments takes place, at least some of which are for good reasons.
- There are two bug fixes to consider.

### Conclusion

- Consensus was reached on two normative changes: one to fix a TZDB corner case in calculating the start-of-day of March 31, 1919, in Ontario, Canada, and another to disallow a particular ambiguous combination of options in Temporal.Duration.prototype.round().
- The existing consensus not to go back and apply the Stop Coercing Things principles to this Stage 3 proposal was reaffirmed.

## Joint Iteration naming discussion issue 27

Presenter: Ashley Claymore (ACE), Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-joint-iteration)
- [issue](https://github.com/tc39/proposal-joint-iteration/issues/27)

ACE: I will give MF the floor to begin with.

CDA: Again?

MF: Sorry. Yeah, I just wanted to quickly preface this discussion. ACE reached out to me about this topic just after reaching Stage 2.7 and I am fully in support of still making a change here. Our Stage 2.7 typical rule is that we don’t ask for any kind of frivolous changes not required of things we discover during implementation, but because he reached out, I purposely put off doing any testing work so it would be no burden to me. So I don’t want that to be in the back of anybody’s mind that we shouldn’t be making a change here to the name if that is what we desire.

ACE: Thanks MF. I will share my screen. It should work. I’m sure I’ve given Webex permission in the past. If at least one person could confirm, I’ll assume everyone can see.

CDA: We are looking at spec text.

ACE: Thanks. Great. So a reminder on another aspect of iterators is this proposal from MF `iterator.zip` or joint iteration. And the proposal has two methods, iterator zip where let’s say you give it an array that dribbles even though you path in an iterable but I think a lot of people think about this, they imagine passing in an array and there’s also an alternative second sibling method that is currently called `Iterator.zipToObjects`. And this is the one I’m talking about today. For context for people weren’t at the last plenary, the original naming was `Iterator.zipToArray`, `Iterator.zip`, and then `iterator.zipObjects`. And then at the last plenary decided to drop to array and go iterator zip for the iterable because that’s how most things are in the ecosystem already call this method in low dash and underscore and rounder and all of those great utilities. So that’s why we kind of have this `zipToObject` name to distinguish competitor `zipToArray`. What I was thinking about in the last plenary was maybe `zipTObject` made sense when we had `zipToArray`, but now we don’t have zip to array. Is this really the best name? Maybe we just want to double-check we’re all happy with this. I think we could maybe do better. Worse case scenario, we say this is fine, and we proceed with the current naming.

ACE: So what made me think about this was there’s another proposal which full disclosure I am one of the champions for, which is proposal await dictionary which has kind of a similar flavour to this proposal. So we already have promise all in the language today and you can pass in an iterable but it’s just easier to think about arrays. Pass in an array of promises and then you get back a promise containing an array with the results which has the same shape as the zip, you know, you pass in an array of iterators and then you get back an iterator of arrays. And I’m sure the category theorists amongst us will say, oh, this is like a bifunctor monad, I’m sure a name of the pattern and they follow the exact same shape from the typed level. And `iterator.zipToObject` is also follows the same shape as this other proposal promise await dictionary that is solved effectively the same problem. It gets a little bit unwieldy when you’re passing in things based on the order, you know, works for two things, maybe three things, but beyond three things it really starts to become less human readable to keep in your mind what is the full fifth, sixth thing you’re passing in when you’re then reading it back out. So zipToObject is here to help say don’t worry about the order of things, just give things a name so you pass in an object where the keys kind of name the iterators. So you can then reuse the names in the result. And the promise await dictionary proposal is the same thing but the promise all. Promise all gets a bit unwieldy and when you’re passing in a few promises, it’s fine. When you start to see people `promise.All`ing ten things and then array destructing the same things out, you start to lose confidence until the order is correct.

ACE: So due to the similarities, I can imagine if we moved forward with `iterator.toZipObject` that it would set a loose precedent that this pattern would be a name we would want to use in the other places where the pattern works. But when I thought about `promise.allToObject`, it just didn’t feel right. And some of the reasons I don’t think it feels right that we’re not really going to object. It’s not like when you have toString we are taking something and turning it into the string. The value we are getting back is an iterator, we’re not getting back an object. We’re getting back an iterator. In another sense we’re not going to an object, because the input argument itself actually must be an object. So really we’re kind of—nothing is becoming an object. What we’re doing is like turning an object inside out instead of having an object of iterators, we end up with an iterator of object. So it feels like the thing that’s really important here—oh, the other thing is that arrays are objects. And for people when I’m teaching people JavaScript sometimes I think it can be confusing trying to say array or object. But then people say aren’t arrays objects? So again I think maybe object isn’t the word we want to focus on here. So some suggestions I put down was that zip name, zip dictionary, zip from object. But actually I think the best one is KG’s suggestion which was zipKeyed. I think actually that’s much better than any of my suggestions, especially because key is already part of the javaScript vocabulary. We have object dot keys and `reflect.keys` and named and dictionary are maybe things that people talk about colloquially but we don’t use those words in the specification yet. Whereas zipKeyed I think fits in with the language we already have. And that is what I have. So I will open up the queue. And curious what people think we should stick with the current name or if they have suggestions for alternatives or if they want to +1 any of these? The current preference is the zipKeyed. I think Kevin has the best idea so far.

MM: First of all, I very much like the idea of designing the operations and names on iterator for this purpose to be aligned with the corresponding operations and names for promise. There was a suggestion that I made a while back for `promise.all` which maybe it failed for reasons I don’t remember, but what I do remember is that a lot of people found it attractive and I think it would be attractive for this as well, which is to do—if the argument is neither an array nor an iterable, I suppose that means if the argument since arrays are iterables, if the argument is not an iterable, then you use the from object or this other keyed semantics. So you do one or the other depending on whether the argument is iterable or if you prefer, depending on the explicity if the argument is an array or iterable. But I prefer that. If that one is clear enough, which I think it is in practice, then I prefer that rather than adding a bunch of extra methods for this other dimension of variation.

ACE: I remember you suggesting that I think it was back when we were in A Coruña in Spain. We talked about that. At first, I really liked the idea of doing it as an overload. But then I think—maybe a week afterward or something, I made a typo in the project where I forgot the `promise.all` takes one argument of the iterable rather than being far and I did `promise.all` for multiple arguments. If it was TypeScript it would have caught that. In JavaScript we don’t throw if you throw too many arguments to promise all and we just try to iterate the first thing and then it threw because the first thing wasn’t iterable. However, if we change the semantics to have an overload, then that typo sudden Ily becomes worse because it instead of throwing, it now tries to destructure the first thing. Now I’m fallen in disfavor of that even though I do like the idea of the overload. I think for it to work, we need to have to also validate people aren’t trying to pass more than one argument and that feels like something we don’t do today.

MM: I think that’s an interesting case to raise. I certainly am sympathetic to not masking programmer bugs, not introducing changes that would mask programmer bugs. I’m not sure if it was on this topic, but I think it was where I actually suggested that in the other overload case, if there’s more than one argument, you throw exactly to catch the likely cases where this would be a bug. And I think that if that’s the only down side to doing it with an overload rather than multiplying the number of methods. We already have on promise, we have four methods on this category. And if we cannot multiply, that would be attractive. And then of course that applies as well if we end up with more than one variant of zip or if we end up with a more than one variant of async zip et cetera, if we can avoid multiplying methods where the universal uniform overload would do, I would find that attractive.

KG: So we did discuss this specific topic. I just went and dug it out in the notes. Mark I know you’re not in the matrix. But it was the February 6th of this year is when we talked about the specific topic and got consensus on the current design of splitting out the methods after some discussion a number of people were really strongly in support of having separate methods for a variety of reasons including the fact that the shape of the output being different depending on the type of the input can be really confusing. So I prefer we just stick with the design that we previously had consensus on and only reopening the naming question. Also on the specific topic of multiplying the methods, it’s not as bad as you might think for a promise, because only all and all settled return arrays. You wouldn’t need to have like race or—you wouldn’t need to do this for race or any because those only return one value.

MM: That’s a good point.

MF: So I do want to apologize for not properly considering the cross-cutting concerns when choosing the name here. Originally having this named in the first place was inspired by your proposal. So we wouldn’t even be here without you. So I just wanted to say that as far as my preferences go on naming, I think that introducing the word dictionary might not be the best idea, it’s just a completely new concept. We've never used that term within the language. I know that it’s somewhat popular outside the language in the ecosystem. But I think we should probably stay away from that. So my preference would be named or keyed, those are both fine.

WH: I just wanted to express a preference for `zipKeyed`.

ACE: I think that looks like the queue. MF, are you happy with—do you want to ask if we can consensus for changing to zipKeyed?

MF: Sure, yeah. Can we rename zipToObject to zipKeyed for joint iteration?

MM: I want to explicitly note that if we do this, we should likely follow the parallelism suggested by this presentation for promise.all. Not that we need to vote on that. But we should keep in mind that’s probably what we’re going to do if we do it here. And on those grounds. I have no objection.

MF: I agree.

MM: Okay. You have some support. Chris Cole says I like `iterator.zip` and iterator.zipKeyed. CM says +1 to zipkeyed.

CDA: Any objections?

CDA: You have another +1 for zipkeyed from JWS. Now that I’m reading it there’s no end of message there. Did you want to speak?

JWS: No. That was it.

CDA: Okay. And still have not heard or seen any objections. All right. Sounds like we have consensus for zipkeyed.

ACE: Thanks everyone.

CDA: ACE, would you like to or could you please dictate a summary to the notes.

### Speaker's Summary of Key Points

- We discussed the context for the proposal’s initial naming of "zipToObject"
- ACE presented some reasons why this may not be the optimal name
- We also discussed that the naming here should be reflected back into the 'promise-await-dictionary' proposal

### Conclusion

- `Iterator.zipToObject` has been renamed to `Iterator.zipKeyed`. The proposal remains at stage 2.7.

## Scrub of Stage 2 Proposals

Presenter: Peter Klecha (PKA)

- no proposal
- no slides

CDA: All right, thank you. Moving right along. I think I forgot to update TCQ after updating the schedule. We have PKA, are you there? Scrub of Stage 2 proposals?

PKA: Yes, I’m sure.

CDA: Let me fix. What’s your GitHub user name again?

PKA: Pklecha, I need to quit and reopen. I will be back in one second.

CDA: Okay. TCQ is now fixed. Are you there PKA? You’re on mute.

PKA: Yes, sorry. Turn it again to share. You can see my screen?

CDA: Yes.

PKA: So hi, I’m Peter from Bloomberg and here today to do a review of our Stage 2 proposals and i’m just going to apologize in advance if you hear my daughter at any point. The goal here is just to update the committee on the status of all of our Stage 2 proposals in particular we want to identify proposals that are stalled and maybe could benefit from new champions on additional champions proposals that have fallen unused and could be potentially removed from the active proposal list and to identify cases where proposals might be blocked. So what I’m looking for here in general is just for proposal authors and champions who are present to just give as brief as possible an update on the status, no pressure whatsoever, one line this proposal remains active and I’m working on it is totally acceptable. We just want to identify those other cases where the champion—where there’s blockers or stalls that the larger community may not be aware of. So this is a list of proposals that we have heard from recently which is to say in the past 12 months. So nothing more needs to be said about these proposals. The committee is up to date on them. And here we have the list of proposals that we have not heard from recently. I’m going to go through each of these one by one. As well as these three proposals I’m just noting I’m not aware that there are champions active in the committee. There are spatial. And begin with TimeZone Canocicalisation and I don’t know if JGT or rG is available to give a brief update on the proposal.

RG: I’m here for this one. I believe it’s definitely not inactive. I believe it already got merged into temporal, but I don’t remember for sure.

CDA: I’m on the queue. I’m pretty sure we talked about this more recently than May 2023.

PKA: Sorry. I should also add that I got the dates here from the proposals repo and apologize if any information is inaccurate either in terms of the dates or the list of champions.

CDA: I wonder if the last time we talked about it, it might have been as part of something else and then didn’t get updated. I mean, proposal repo is really good but if it’s mistaken, it’s not the first time that it did not get updated for something. PFC is on the queue. Go ahead pFC.

PFC: I believe this already went to Stage 3.

DE Try to track down the meeting where that happened and I will update the proposals list.

PFC: I’m looking through the old agendas right now.

PKA: Okay. Let’s go on to the next topic.

CDA: It’s very much active, so I think we can –

PKA: Great.

PKA: Glad to get that updated. Next we have symbol predicates and I believe both the champions are here. Can anybody make a comment?

CDA: This is from JHD?

JHD: Yeah, it’s still—it’s both still active and also blocked. I have to—there are two predicates and one of them is not obstructed and the other one I need to come up with a more compelling case for to convince V8 in particular although there may be other engines that have concerns, so yeah.

PKA: Great, thanks for the update. Next we have module declarations.

NRO: This is like not recently because we have a lot of modules proposals going on. So we’re just like waiting for the one that had to stabilize before continuing with this one and m module expressions.

DE: I think the plan is we will pick this up again, right?

NRO: Yes.

DE: Some interesting feedback from the committee would be if people feel like the way that we were previously going of using this kind of lexical name space but statically was acceptable. So if you have opinions about that, either shout them out now or come to some of the modules calls that we have on the TC39 calendar. I would like to go the way that was previously proposed where we—which NRO has fully written out a good specification for where it’s modules are lexically scoped variables but they’re available kind of at static semantics time the way that, you know, your let declarations are checked for duplicates.

NRO: And if anybody wants to join the module summary meeting, please in advance. We can make sure that all interested people are available in the meeting.

DE: Want to point out that the ES module source solves a lot of issues for this because these module declarations will be that type of object.

PKA: Okay, great. I think that also qualifies as the update for module expressions, correct me if I’m wrong NRO?

NRO: Yes.

PKA: Great. So moving on, we have JSON.parseImmutable.

ACE: So `JSON.parselmmutable` is like a sibling proposal to records and tuples and can only move forwards as quickly as that one can. And we did present—I’m not sure exactly when, but within the last six months or so on the records and tuples idea space. DE, feel free to add to that.

DE: No, that sounds good. Additional input into the record and tuple idea space would be really welcome. I think we have a certain set of people who are involved and the rest of the committee we were hoping the last presentation would drive involvement and so that will really help. So I think that’s all for this topic.

PKA: Great, thanks. Next we have string.dedent. Are either of the champions able to make a brief comment on the status of the proposal?

JRL: [garbled] So you meant this sort of TC39? Can you hear me?

PKA: The audio is bad.

PKA: We can come back `toString.dedent` when Justin is able to fix the audio issue and go to destructive private fields that is also JRL so I would move on to RegExp buffer boundaries and RBN said he wouldn’t be here and this proposal is an active proposal on the backlog. Next we have the pipeline operator proposal. This would have been nice to hear from RBN about. I don’t know if anyone else feels competent to give an update on this proposal?

NRO: I can just say that whenever I talk with the people at conference this is a proposal that they and the most about. And so as a committee we should probably figure something out.

DE: Yeah I share NRO’s impression and that this is widely requested. So I think the in the previous discussion, there was you know there were ALTtive and hack version or the f-sharp version and the current one is the hack version, so it would be interesting to hear from people in committee if anyone disagrees with that vision? I would encourage people to voice opinions now briefly, if they have them. Or if feel like the pipeline operator is not worth it and add a JavaScript that would be good to have input and there is somebody from Bloomberg who expressed interest in getting involved here, and a lot of presenters here in TC39 that are wanting to get involved here. Bloomberg not igalia, sorry.

MM: I am not sure in is the feedback you are looking for but I am in favor of this proposal and this proposal as proposed not the f-sharp one.

DE: Yes that was the feedback I was looking for.

CDA: DLM?

DLM: This predates my involvement with the TC39 stuff but I know there is a general negative feeling about the pipeline operator. But because of there is conversations before my time and not quite sure about the reason or any specific part of proposal.

CDA: All right. SYG?

SYG: I am going to in detail now, but the pipeline operator is recognized the demand and to find the language and find a way without doing it supporting it in the engines, itself.

DE: Can we go into a future meeting SYG?

SYG: Yes planning on it.

DE: Great.

CDA: Okay, nothing else? Okay sorry, EAO?

EAO: This is mostly just an aesthetic view, and I believe this pipeline syntax to be very noisy and i don’t like it. But this is just an aesthetic opinion, and I don’t know if we count on that very highly.

MM: We count them highly.

AKI: What is the difference between aesthetic and development ergonomics sometimes?

CDA: None of the Champions are here, so shall we move on?

PKA: Yes I will just note it would be nice to hear from the Champions on a status update on this at some point, whenever possible. Um, sorry next we have map.prototype.emplace and this is EPR and this person is not at the committee anymore but if anybody who knows about this, proposal or has any interest in contributing to it, speak now?

JHD: Yeah I don’t have the bands width to Champion now but I think we should move forward but my understanding of the difficulty is that there is a like there is a few different semantics, and it is not yet clear how those can be cleanly represented in the API that is palatable to the broader committee. But yes if someone would like to Champion it, that would be amazing if at some point in the future, my plate might be clearer and I can Champion it but I would like to see it stay where it is for now.

SYG: So a question, is this up cert.

JHD: Yes it is. But renamed.

DE: The names are kind of silly but I think this is a widely requested feature. There is a project i think in the planning stage with the University of Bergen students getting involves here, so it would be very useful to have any committee feedback on this organized for them so they can take up the proposal.. Any opinions or any cross reference to any opinions would be helpful?

[There was confusion on whether the University of Bergen students would champion this proposal; DLM later clarified that he would work with them on championing it.]

PKA: So dynamic import host adjustment, and so the Champion is KOT, not known to be active in the committee, if if anybody knows about this proposal, please share?

NRO: This proposal has been transformed to a request and has had some concerns for a while. I think i might be—yes I was mistaken. I sample working with host types for a while but there is no updates on this proposal and not has been brought up with them.

DE: Okay the author of this is, you know, in contact with a number of people in TC39 who are working on Trusted Types. Can we give someone the action to get in touch and see what everyone wants to do with this?

NRO: I will attend to that.

DE: Thank you for much Nicolo.

PKA: Okay collection normalization? Anyone has status on this proposal or have any interest on taking it out?

DE: ACE actually brought up this design space in his Records and Tuples presentation. It is linked but it can be done separately.

JHD: This is one that as I recall was almost ready to go to Stage 3, the primary objection—there has opinion a compromise reached that the primary objecter was content with but the Champion was altered(?) with the compromise and so this is one I am much more likely to take on sooner assuming that is an accurate state of affairs.

DE: JHD, What was the compromise?

JHD: So, my understanding of the—my recollection is that the prime mare objection was the desire to treat a map and set agnostically so I can have a design function and does not care if it is a map or a set. If I remember the correct proposal and the compromise was that if you provide—that you can provide one of the two—I will have to refresh my memory but something that would allow for that use case, but in the majority case, it would also allow for—it would allow for both mental models that is a set has only values or a set has only keys as well that I want to be agnostic of map versus set and I can dig up more content in the future. But essentially that was the compromise as I recall.

DE: Okay, great. Do you want to see if anyone wants to be a coChampion on you on this?

JHD: I will come back on the next plenary after I have done some research because I need to be confident about how much work is involved and how much room I have on my plate before even Championing it. But I will leave it through until then at least.

DE: Okay sounds good.

PKA: Okay thanks I will circle back to JRL?

JRL: About `String.dedent`: It was championed by PayPal, who is is no longer a member. There are no current blockers, I just have not written the test 262 test to get this 2.7.

DE: You don't need test 262 tests for stage 2.7, you need that for stage 3. So let’s propose that for 2.7.

JRL: I can do that for next meeting.

DE: Do we have volunteers to help with the test?

JRL: Sure. I have a test, I just don’t want to learn test262. I have a private—I have a library that implements string dedent. It is a complicated case because you cannot see the light space and you need to write these at fixture tests for these to make any sense, and if you try to write them directly in JavaScript in some fashion, they are terrible.

DE: Oh I see. So what if you put that in the test 262 staging directory? For now? I don’t know if that is enough to get to Stage 3, but it would definitely or Stage 4 but it would help somebody else write the tests if you don’t have time to do so.

JRL: Okay.

CDA: Can we return brief to up upsert/emplace because MBH clarified in the delicates chat this is a group of students from the University of Bergen would be implementing it in several engines but a group of students implementing in engines a TC39 Champion does not make, so, it would still be great if we can someone to—

JHD: I would caution trying to built implementation of things that are not at Stage 2.7 because that the change significantly.

DE: The group is aware of this and many are coming to TC39 as well. And is because you have corrections? Or?

DLM: Sorry, I wanted to say that I would be one of mentors for this and the implementation in SpiderMonkey

AKI: MBH said that this is going to be a learning exercise for students and trying to bring them 2.7, and DLM, who was just speaking said they will be the mentor for SpiderMonkey for that implementation as part of process of student’s learning on how to put something into an engine? Is that clear?

DLM: Good from my point.

CDA: Okay that is great and I am happy to hear that is happening. And so not necessarily spend a bunch of time on this. But we would still be great to have a Champion for this proposal.

DE: Yes it was—okay go ahead. Because it was already clarified that you know this group of people is going to be working on bringing it to committee.

PKA: So our final item is destructuring private fields.

JRL: I am no longer working on this although DE has a proposal that would assume it entirely.

DE: I have a proposal for how we could handle private name declarations, and this proposal would make it clear that the current destructuring private fields proposal is OK. It makes it clear that the syntax space used in destructuring private fields won't clash with something else. This would then free up the destructure private fields syntax to what JRL proposed before. I would like to come back and present that sketch of this alternative feature. I don’t know if I will have energy to champion the proposal myself, but if folks are convinced about the direction, then we can proceed with what JRL was proposing before. Do you have thoughts on this?

PKA: Um, no that sounds good. That becomes—we just need a Champion to resume as we move forward. But that is a great update. Um, I think unless there is another comments, I think that concludes the review. Thank you everyone.

DE: Can I and is there any advice people have for future scrubs? Or direction? Or get in touch with PKA.

CDA: Um, PKA, do you want to dictate a summary for the notes?

PKA: I think I will just enter it into the notes just which proposals have which updates and I don’t think we heard that many proposals are immediately need of being scrapped but we heard a variety of different updates for proposal summaries and some energy from without order to continue. Others are proceeding just fine. And I will write something more detail and more legible in the notes myself.

## Normative: Add text about locale installation in browser implementations as fingerprinting vector

Presenter: Ben Allen (BAN)

- [PR](https://github.com/tc39/ecma402/pull/780)
- [slides](https://notes.igalia.com/p/fingerprinting-slides#/)

BAN: Okay let me share my screen. So this concerns a PR that is a work in-progress for quite some time though it is very little little text because it is touches on the something that is a differ contentious issue and touching on the fingerprinting which arises in interNational work. And this can be sensitive. So, the relevant PR, I think it is up on the agenda, is 780 and it adds what is in a wondering note because it is a normative change. Saying that specifically browser implementations can’t reveal certain information. Related to low conceptualize data and response to an issue 588 called "ships entire payload", and I will give context and history behind this, and so jumping back to 2021 or 2022 oh yeah 2021. Okay one second.

BAN: So, this issue originally came up with the `Intl.Enumeration` proposal and when it came up, it was for respond to request to give all the locale on a system, and this can be a fingerprint risk because you can identify fingerprint because if it changes, you can identify specific users based on the locale of the install. And noted to avoid expanding the fingerprint purpose and browser cannot allow locale or related data to change as result as actions taken by the user or if they do allow this, information about the installed 0 locale and so forth cannot be exposed in a discoverable way. And I think I said this is something that readily became not a problem in `Intl.Enumeration` and the key thing here is while the problem with `Intl.Enumeration` and that the locale and that would identify some one. This is referred to as passive fingerprint and that is to identify someone without looking out of the order and so it was changed so the request is one by one and this is active fingerprint and you can still identify someone but because you are making all of these suspicious request people can see it and can tell that you are tracking someone. Did there is an internal Mozilla privacy and there is no differences between two users and using the brower version on the same platform irrelevant of their browser behavior patterns. So there is nothing you can do related to the locale or related locale data currencies and so using the same browser on the same user on the same platform.

BAN: I believe I say this in the slides but for context of why is this important. If some unhigh thetacalcally and I will say this in the slides later and this is something that is not possible in the current browser implementation but if one would install a locale or data related to locale and it could not track you personally but to track whether or not if you are installing a not commonly used locale and you might be a number of potentially oppressed cultural or ethnic minorities and so this can be sensitive data. So this was the internal Mozilla privacy review and this is taken into account for the integration proposal but this is a problem that will affect more things. And as I mentioned, this is something that currently no web browser currently does and the web browsers has locale data and with that said, node.js has aloud you to do this for some time, a number of years because the problem of fingerprinting does not relate in that context. You know you are not revealing information potentially to a server. But, it would be very nice to be able to install new locales and be able to install new locale data and some cases more than nice. And if you look at the discussion on that issue, and on the poll request, there it is—I want to say it is the most active conversation I have seen on any issue or any pull request but I am sure people who has been around longer and has seen it longer. But for minority script users for example, Steven pointed this out, the default breaking for Thai script will cause problems, and you can install data, and you can make pages comprehensible, and respecting how you use the language but also, if servers are able to say to check and see oh, do you have this installed? Do you have this particular different breaking for thai scripting, they know you are a member of that minority group. So this is a privacy concern, and in a sense this can be a security concern. And going through the context of this before I get to what is ultimately like four lines of text.

BAN: Um, another awkwardness is well this is something that only makes sense in the context of web browsers. So, is it even a concern for ECMAScript and the wording from the Mozilla statement is that you shouldn’t, if I recall correctly, no information should be experienced beyond the information beyond the region string and there is no concept of an user agent string in ECMAScript. Um, so the question arose on this where else do we handle it? It is yeah, so it could be an HTML problem or something like that. So, the unsatisfactory solution is the one sort of just taking the mozilla statement most straightforward saying okay, we actually can’t do this. Like Node.js can do this and browsers cannot do this and it is a privacy risk and security risk. It is something that the the w3c privacy interest group said this is a bad idea. With that being said with the comments from steven there is good international localization reasons to be able to do this in the future. Like I said, no browser allows you to do this now. But there is interest in allowing to do this in the future and it can improve localization but with a fairly severe privacy risk.

BAN: Um, so, proposed solution that sort of evolved out of that long conversation on the public request and underlying issue, was well, okay, what if it is admissible to store new locale and now locale data but not permissible to reveal what what non-standards locales are installed on the system. So this comments from Google, arose out of a conversation with @Manishearth and proposed a issue the server asked if you have a specific locale installed, and it is—Okay, so if we are given server asks you due this low conceptualize or have this locale data installed and you say no, you can install it and that server, that origin knows that you got it installed. The problem is if another server asks hey, do you have this installed? And you say yes actually I got this installed, we are good. And that indicates that have accessed another server that has requested that you install it. Which there by identifies that oh you are someone who likely—you are 134 one who has installed this. So likely you are in a group which is relevant, and then you can identify it as a member of this group and sensitive information that can actually be dangerous. So the proposal is okay, you never actually reveal that you have something installed. Instead, if they say oh we want to use this and if you have not gotten installed on a different server that was not installed in the first place, and they say do you have this installed, you don’t say yes. If you have not, you download Intl. And if you have not we proposed a method to say okay we will pretend that we have downloaded this. And as a note, there was something I was going to lookup but I didn’t. And the reason to do this the ECMAScript is because of the locale proposal and it can meet through javaScript so that is our problem in a way. Okay so, I will flip over to the actual text. This is then if you follow, if you look at the conversation this has been very extensively workshopped.

BAN: So this is the change with all of that contextual historical preamble of going back to 2021 and this is the change. I will allow people to read that for a second. I will not read it out loud. I will go back to the slides now and one wording that came up, okay, so this is a specially more web browser implementation, and so maybe it should be applied to something like—this is to web browser implementation. Or sort of like abnormality tract wording and it makes no difference in practice right now. It should be restricted to systems where fingerprinting is concerned such as web browser and that is one small wording question.

CDA: There is a point of order from Dan asking to bring that up.

BAN: This is sort of like a sketch of a prototype API and so everything related to exactly how browsers will reframe from exposing a bit given a low conceptualize installed, and all of that normative and all of that is reflective okay whatever the best method of doing this is. And so it is a normative thing. The normative thing is to say okay you can’t reveal this. And the method of avoiding revealing this is left to the implementation.

DE: Are we talking about `navigator.locale` or the default local that is in Intl.?

BAN: Locale info

DE: What API in locale info is that exposed in?

BAN: That is a good question because I have not looked closely.

DE: I don’t think it tells you your locale but just information about a locale.

BAN: Okay so not pertinent to locale on your system but just information on a locale.

DE: I guess it depends on what is installed.

BAN: Exactly.

DE: Can you bring up the API that lists out the installed locales so we can see it?

BAN: That is a good question, give me one second for that.

DE: I think these are about query parts of a locale and the place where this discussion came up for me previously was in a `navigator.locale` feature which will give you a list of locales that are in like together with preferences. So, um, is that what you were thinking of with this? Or?

BAN: My research was focusing on Intl.Enumeration.

DE: Oh okay enumeration. In this proposal?

BEN: That is a fine question.

NRO: It is its own on proposal.

SFC: Um, yeah this came up originally with the fluent iteration which this is not of locales but a lot of the other entities that exists such as currencies, and calendar steps and measurable p unit and things like that but we don’t—I think closest that we have to supportive locales is that the supportive locale of on function and that will give a list and force you out of that and in principle and you can have supportedLocaleOf with all possible locale and what support of that locales of that function will call.

DE: Right, so I am confused by this presentation because I thought all browsers adopted the strategy of having a fix set of locales that are there. That is invariant across what you—so you want it upped.

BAN: That is current behavior, and what we like it do is that browser can have dynamic locale and locale data so long As it does not reveal servers that has been installed. And something for the future.

DE: All the API’s async, what is API are you suggesting would allow this?

BAN: I am not suggesting an API and simply noting if you allow this and if you allow dynamic demonstration of locale data, you do not locate by whatever means.

DE: Okay thanks for the context.

BAN: It is literally this text. Saying okay, don’t do it, don’t reveal it, it is already installed with like dedictating any method of how it is not already installed or any method of not revealing that it is not already installed.

MM: I got a clarified question, and several times you used the phrase is privacy concern and it is a security concern. And I don’t know if what you meant by that is that there is some additional security concern beyond just privacy?

BAN: Um, part security not being in the sense of compromising but in the security in compromising your personal safety and this is across a channel that can reveal information about you.

MM: So there is an isolation of communication concern here in addition to the privacy concern or is the concern specifically because the privacy issue?

BAN: The concern is the privacy issue.

MM: Okay that is fine and certainly consider privacy to be a security. Just wanted to clarify that. Let me suggest that you take this discussion to TG3 would be interested in and this is the kind of thing that TG3 is here to discuss. And it is only other thing is that as you brought up, if I understand you are suggesting that the language you show for browsers be normative, correct?

BAN: Yes it has to be normative. Or well one—it could be that this part is normative and this part which is some versions of it separate paragraph this could be a node. So definitely normative and this is the clarification.

MM: Okay I will try to leave a comments on the second part of that. But with regard to the generalization to platforms that concerned about fingerprinting, perhaps that generalization could also be attached to this normative text as a nonnormative note because there to be normative with regard to a not well-defined category is a little bit weird.

BAN: Cool. And also thank you for that bringing it up to TG3, that would be very useful.

MLS: So on Mark’s comments and I support the margin error fingerprinting is an issue on one browser and I think that is more forward looking and we will have to go back and change it later but that will make it more muddy as to what systems that is. And I guess that would be up to the implementation to choose to do that but I favor that over the web browser.

JRL: Okay, so I understand the suggestion, but I don’t understand how it can ever be implemented in practice. If you have a locale that is installed on your system, there must be some observable output of that locale that you can use to detect if it is installed. And if it is not installed in the system, then you could detect that it is not installed because that output has changed. If you are doing silently install in the background and there is a timing attack because it is obviously this locale was not installed.

BAN: Yes, and let me see if I can find this suggestion. Okay, um, so, with that, essentially, it is—if I remember it correctly, give me a second. It basically involves user promise, so if it has been installed it waits for a second, and then responds as if it were downloading or as if it were installing the locale.

JRL: But this is extending on network conditions, and you can wait for an arbitrary amount of time and you have no idea of how long the user would take it to install, you can wait for random amount of time, maybe. But I cannot see this working this a situation where we know that submilli second per timer allow you to detect state. And this multisecond long installation process does not allow you to detect state.

BAN: So, here is the comments that might be useful. So yes, there is definitely like side channel methods of telling whether or not it has been installed. And there is sort of like best practice with fingerprinting and that is not to make it not possible, especially in the internalization context where you are revealing information about yourself. And the best practice is to make it relatively harder. And to make it such that if someone is doing it, or if someone is requesting information that is useful for personal fingerprinting that is detectable, so it's not passive but it is active fingerprinting. So yes there is going to be methods—this closes off the easiest methods to determine whether or not you have the locale installed. It is not necessarily demanding like—how do you put it? Um, the concern is imposed to reduce the fingerprinting risk. So the wording—so enumerable items is not necessarily like there is tricky ways of timing in text to make it enumerable and so it is mitigation and something we don’t want to just give up that information in a JavaScript.

SFC: I want to emphasize that this solution is not relevant to this back text that we are trying to achieve consensus for today, and it is just illustrative of the type—of a type of solution that might be conform answer with it but the status quo write now that is browser can conform to the first sentence which is about the basically the fingerprint of all enumerable items and this being equivalent attributes of the user agents string but this is us writing it down and this is something we discussed at length the enumeration proposal, and the committee proposal was contingent on us taking efforts to write down this invariant that is currently a variety. That is the final goal of this change is to write down that invariants. But we would like to event move the direction of supporting dynamic locale or something like that and this is where sort of starting from the second sentence after "furthermore,", that section of the text is focused on well, you knee we would like to eventually move in the direction of support global and here is some guidelines of when this happens and the teens of constraints that such a mechanism would need to abide by. So that is all that we are really asking for here. Like I think that you know when actually have a concrete proposal, we will definitely come back to TC39 and discuss the in’s and out’s of that proposal and I want to emphasize the specific thing that is proposed not something that we are asking for consensus on today.

BAN: The API is not something we are talking about. And I want to note that in one of the earlier versions of this, I might have mentioned this but in the earlier versions that what I highlighted there was considered normative and all of the stuff below, all the explanations for reasons for wanting this, was a note. So normative and potentially normative.

JRL: I will comment that on the causal solution and you can imagine how you perceive this, and can you do the download and throw the download away if you really wanted to be private.

BAN: That is not like an ideal situation because it is introduced for specific people who have these locales but that is a possible solution.

JRL: I can imagine—like pretend there is different companies and a hypothetical food company had a primitive node, they might do like download in that node where you really the server will be as secret as possible or safest as possible.

BAN: One of the things I think that came up on the discussion is the lock down node, that would be considered a different browser or a different platform. So yeah.

SYG: This seems to me but I don’t make the privacy decisions for something normaltive in a web platform in Chrome, I would need to bring this particular verbiage back to Chrome privacy. I appreciate the flexibility that you try to build into a lab browser and to have dynamic downloads, and I want to make sure that our privacy team thinks this is kosher before we merge it into 402.

KML: There was a plus one on that SA inferiority side and one possibility is to allow, for supporting but call out browsers as one that mandates but not permitted to. And like any implementation in a privacy setting including the browsers or something like that.

BAN: The privacy to conscious wording, that is very nice. Just to respond to earlier point, I am thinking about the discussions we had related and like just download it, and I believe that might be in the context of some like languages and reaction and with a large amount of data.

KML: So I was saying that as mandatory thing as an option in terms of time thing and who really has the authority to mandate it.

BAN: And any mandate of a method of locale related data is outside of our scope.

SYG: Has it been discussed of pro’s and con’s of leaving it completely to the host? I have not read the entire thread, but like HTML spec itself as imbedded JavaScript have some sentences here and there about reducing fingerprinting vectors or avoiding producing new ones why do this at this layer whether that who ever just imbeds JS?

BAN: It is because we can potentially the ones that are doing that and because there are related to ongoing proposals. There’s stuff that just we are the only ones that can do it.

SYG: I don’t think I understand, I think you need to go into more detail.

BAN: So, to support locales of JavaScript could end up specifically JavaScript could end revealing what nonstandard locale and locale and I don’t think that can be handled anywhere but here.

NRO: I have the same question earlier and I checked and for define implementation defined placed with available locale which is what this request is about. Where at least a data these are not defined anywhere in HTML, there is not hook that HTML defines what they are and so these—this is entirely saying not well-defined within 402 but defining it the best and at least mention that this at least exists.

KML: I guess I think what he is trying to say and I think instead of put thing text in here and the host effectively injects of the requirements of the host. It is an abstract host, –

SYG: There would be something of like the host may do more stuff here like forbid certain things from happening, instead of us workshopping the language exactly today or, or workshopping the language at all, I suppose and let the host do something. Like we would insert a patch point, basically that says, hey here is a point where the host might do something special, including trying to not reveal more information. Am I not really advocating for that because I am not doing the work and I am asking if there has been discussion of that approach? Because that will let you side step all of this, right?

BAN: There is not as far as I know any discussion of that approach. Not entire what the HTML said.

SYG: If the immediate folks who—the immediate stakeholders who care about is the browsers and pushes on to WC3 and s0 figure out the language there, and for the node to figure out the language et cetera.

SFC: I was just going to say that I think some of the feedback that you and Keith shared is useful and I don’t think—I mean this is a very long thread and a very long discussion as you can see, but I don’t know if there is particular approaches necessarily released. About the host or something along those lines. Despite the very long conversation on this request. So, in efforts of you know, like come out of this agenda item with like you know a productive next steps I was wondering if there is a way to like if we can established like who is a list of stakeholders we should engaging with who might have concerns about this. And who might have ideas about what are better ways to approach this problem, and you know, ideally related problems. Like, who are the people we should invite to incubate our calls for instance so we can fold here because I hear people say throwing around things and WC3 and these people and those people. And you know, it would be very nice if we can actually like established here is the people we need to talk to. You know, and yeah, so we can actually take action on this.

BAN: Yeah, it is toward the end, and I can bring it to the interadditional group and to the browsers if necessary.

SYG: My read of situation is that Mozilla brought up fingerprinting concern, and then you are trying to engineer some language that leaves enough flexibility to do future things, but also satisfy their concern. That means the people who want a solution is Mozilla, and if they want to interrupt, they want Safari and Chrome to agree, so this is something with who has not been involved has not been involved and the immediate stakeholders are the browser privacy team and all you really need is to build something into 402 that they can then debate offline and then put whatever they agree on. Like it seems like you are taking on more responsibility than you need, is that a fair characterization?

BAN: Oh, um, possibly. I mean I personally enjoy working on fingerprinting related issues. But yes, um, when you say put something in 402 that you with work with are you saying add something like this and actually add it to the spec?

SYG: I mean along the previous line of "here is a point where a particular implementation of a 402 and javaScript can insert additional constraints". Because I mean if you are asking for consensus on the substantive text of like what you have on the screen right now, I think it is clear to me that we don’t have the right stakeholders in this room to—yeah.

BAN: Yeah, I agree that is definitely premature.

SFC: We are just about out of time, and I will add one more other comments which I have not heard from Dan Minor, and anybody from Mozilla in discussion this is directly in response to those comments that they raised and I did want to ask one like is this basically in the like solve our problem but two, do we really need this text? Because like the status quo is that there is no problem with fingerprinting and it is only that like there could be in the future. So like, do we really need this spec text at all? Because if we can close the issue, that would be a resolution to this topic. That we have been sort of working on for a couple of years now.

BAN: Yeah, I think the two determinants things are one, Mozilla’s feedback, and two how much pressure there or how much immediate pressing there is to actually allow for locales.

DLM: Let me check with YSV about that and she was in the original discussion. I guess I should end there, and personally given that no browsers allow dynamic changes in the locale and not something we have to worry about rights now, and maybe in the future we will see more circuit availability like that and I would like to double check to see what she would originally had her concern. The spec that is written right now, it seems fine to us that we discussed, but she thinks of the privacy should be involved one last time.

CDA: We are at time. Ben can you please dictate summary for the notes and conclude.

BAN: I was going to say it is great that we can open up a conversation and get this work done in 30 minutes because it is opening pandemic Dora’s box. And thank you for your feedback and your assistance.

### Speaker's Summary of Key Points

We need to reach out to relevant stakeholders including privacy keys on this language, and on the necessity of this language in the first place. Whether or not this is necessary. Whether this normative text is necessary rather.
