# 104th TC39 Meeting |  9th October 2024

-----

**Attendees:**

| Name              | Abbreviation | Organization    |
|-------------------|--------------|-----------------|
| Ashley Claymore   | ACE          | Bloomberg       |
| Andreu Botella    | ABO          | Igalia          |
| Linus Groh        | LGH          | Bloomberg       |
| Chris de Almeida  | CDA          | IBM             |
| Dmitry Makhnev    | DJM          | JetBrains       |
| Marja Hölttä      | MHA          | Google          |
| Waldemar Horwat   | WH           | Invited Expert  |
| Jordan Harband    | JHD          | HeroDevs        |
| Devin Rousso      | DRO          | Invited Expert  |
| Daniel Minor      | DLM          | Mozilla         |
| Yusuke Suzuki     | YSZ          | Apple           |
| Mikhail Barash    | MBH          | Univ. of Bergen |
| Keith Miller      | KM           | Apple           |
| Michael Saboff    | MLS          | Apple           |
| Justin Ridgewell  | JRL          | Google          |
| Andrew Paprocki   | API          | Bloomberg       |
| Yulia Startsev    | YSV          | Mozilla         |
| Bradford Smith    | BSH          | Google          |
| Ron Buckton       | RBN          | Microsoft       |
| Nicolò Ribaudo    | NRO          | Igalia          |
| Jonathan Kuperman | JK           | Bloomberg       |
| Jesse Alama       | JMN          | Igalia          |
| Istvan Sebestyen  | IS           | Ecma            |
| Chip Morningstar  | CM           | Consensys       |
| Richard Gibson    | RGN          | Agoric          |
| Ujjwal Sharma     | USA          | Igalia          |
| Ross Kirsling     | RKG          | Sony            |
| Oliver Medhurst   | OMT          | IE (Porffor)    |
| Philip Chimento   | PFC          | Igalia          |
| Eli Grey          | EG           | Invited Expert  |
| Jack Works        | JWK          | Sujitech        |
| Daniel Ehrenberg  | DE           | Bloomberg       |

## `Intl.DurationFormat` do not include grouping separators in numeric-like styles

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)
- (no slides)
- [PR](https://github.com/tc39/proposal-intl-duration-format/pull/198)

BAN: All right. Hello, everyone. So I’ve got a couple of things to present. One is a fairly small normative change/educate bugfix for DurationFormat. The other is somewhat more substantial and requires discussion, though possibly not a huge amount of discussion because previously, for currency formatting, or currently for currency formatting, we use ISO4217 data is normative. There are good reasons that I will discuss that we shouldn’t make ISO 4217 normative for the thing we are using to are, which is the number of minor units when formatting a currency. But that one is a little bit more substantial.

BAN: So this is the DurationFormat one. As I said, it’s fairly small. So one of the sort of quirks with DurationFormat is that we kind of have two fundamentally different ways of rendering durations and sort of most of the most recent or educated fixes have related to the digital style. So the digital style is used to format durations in sort of as displayed on a digital clock. But we realized, I think, it was Frank who realized this, so DurationFormat allows sort of like very large numbers for number of minutes, and number of seconds, when displaying in the digital clock format. It doesn’t convert seconds up to hours and then—or could be up to minutes and minutes up to hours. We realized that if you have got a very long—very large number for seconds, the seconds unit, the minutes unit or the hours unit, it would insert grouping separators. So you know, in the locale EN, it’s putting the comma characters between Septembers of three. Which is ugly. It breaks the digital [ metaphor dramatically. So the PR is very small. It’s in several different places when formatting, digit hours, seconds minutes. So when setting the options for the NumberFormat we use, when saying the option, we currently use grouping to false. So that it would render—it renders just as the, you know, without these grouping separators here.

BAN: I will flip over to the PR to see what’s changed. If today not changing in GitHub let me number off in three grouping separators, what is rendering hours, minutes and seconds in the digital clock format.

BAN: So I guess without any further preamble, it might be useful to ask for consensus on the PR.

USA: There’s nobody in the queue yet.

BAN: I figured this one would be somewhat uncontroversial. We are hoping that this is the last normative change that we will have to make with DurationFormat before Stage 4. We have two implementations now, I believe, correctly, and we are extending some tests through to reflect recent normative changes.

USA: Okay. Would anybody like to register explicitly with support? I don’t hear anything on that either.

YSV: I will just jump on the queue because yesterday, I had said—hadn’t had a chance to see the normative changes, just because of a no recite. I gave conditional consent there. Everyone has gotten back to me and it’s totally fine. I am the only person who missed it

BAN: No. And the thing I said yesterday about, like, it's a very good thing to be, like, salt—to do the process properly, I mean it. It brings professionalism in the meeting is fantastic, even if it results in me being in an awkward position. Okay.

USA: Also, on the queue, we have Ross with support. So let’s move on to the—oh, before that, Ben would you like to summarize or have any conclude remarks?

BAN: Yes.

### Conclusion

We have consensus for the normative change removing grouping separators when using the digital format in DurationFormat.

## Normative: Allow use of non-ISO 4217 data in CurrencyDigits AO

Presenter: Ben Allen (BAN)

- [PR](https://github.com/tc39/ecma402/pull/922)
- [slides](https://docs.google.com/presentation/d/1ryT6rRTxfb8j4BJl9OX92LGkuNiZBwJiRj7pN0vUXTI/edit?usp=sharing)

BAN: Okay. So as I said, this one’s fairly—this one’s more substantial. It’s actually kind of the result of a long journey. I believe, like, almost a year ago, it started as a proposal to make CLDR’s data normative in certain cases when formatting currencies.

BAN: And it resulted in overtime being down until we realized that actually we should make either—neither ISO 4216 nor CLDR currency normative.

BAN: Now I will actually go through the slide show, again let me know if it’s not sharing. So this comes up when we are formatting currency, like I said. Different currencies have different number—different numbers of minor digits, after the decimal point. If you are formatting USD, you will want to use two units after the decimal point to represent pennies. If you are JPY, there are no minor units, no fractions of Yen that are typically displayed when formatting numbers. So you shouldn’t include decimal in those. Currently, the spec text for this aspect of rendering currency makes ISO 4217’s data normative for determining the number of digits to use.

BAN: Before I go any further, I do want to note that making this change reflects web reality even though ISO 4217 is normative. Different I want takesses, some use CLDR and have good reasons to use it.

BAN: Okay. Basically, I will go through sort of like references to several conversations both at the CLDR level at this, and on the PR, on why it’s a good idea to make ISO 4217 non-normative.

BAN: So CLDR’s data on the number of digits differ for many currencies from the ISO data. And about essentially, as we will see again further in the presentations, essentially, the ISO data is kind of pedantic. It says you should format currencies with far more minor digits that are actually used in common use or in any use whatsoever.

BAN: So this was DE weighing on this one. He notes that ISO is going for more legalistic definitions and CLDR is doing what is more linguistically relevant. Like what you would encounter if you were actually like typical encounters when talking about that currency.

BAN: And note that, V8 is using CLDR’s data currently. SpiderMonkey has been using the ISO 4217 data which is technically normative. But that’s what we’re considering changing.

BAN: So I love Norbert Lindenberg’s description on the ISO 4117. This is indeed legalistic and sometimes detached from reality. He reached out to ask about the Indonesian Rupiah. Having 2 DecimalDigits. 50 is half a US cent]. And basically, the minor unit is sometimes used in accounting and sometimes used in financial transactions. And so ISO 4217 has decided to have those 2 digits after the decimal point. Or after the decimal separator because there’s one context in which that might be used sometimes.

BAN: Something that we have verified is that this data is in fact supposed to be different. Thanks to SFC for reaching out to CLDR to verify essentially their data, they look at the ISO 4217 data when determining the number of decimal or minor units digits they specify. But they update that based on facts on the ground. And yes. There’s a general consensus that ISO 4217 values are pedantic and somewhat disconnected from reality.

BAN: Which is best? On a PR related to this matter, the one suggesting making CLDR normative, it’s noted that essentially varies based on the specific application which data source is a better choice. And through some applications neither is the better choice. Right now, the spec is specifying one data source, that data source is useful forever for some applications and not really the correct one for others and web reality is that different applications use different data sources.

BAN: Okay. So here is the wording of the key part of the PR. Currently if the ISO 4217 currency and funds code list contains coerce occurrence coerce as alphabetic code, return to the minor unit value corresponding to the currency from the list. Otherwise return to 2. The new wording uses a topic what data used to determine how many decimal digits it uses. The new wording we workshopped a fair element was to return a non-negative integer indicating the number of fractionalDigits used in formatting the quantities of the currency corresponding to the currency. If there’s no available information on the number of digits used, return 2.

BAN: So the wording presumption, you may or may not have data on how much minor units are used, and if you do, we encourage you to use it, without specifying any particular data source.

BAN: That’s it. Yeah. I would love to answer any questions. This is one that’s been a fairly long time coming. And the realization that we shouldn’t privilege either data source is what TD2 is converged on. This does have TG2 approval for whatever that is worth.

USA: All right. On the queue we have Shane.

SFC: I wanted to note that we asked CLDR about this, this behavior is actually the behavior that is intended here. And just yesterday, they merged a change to the spec, which yeah. As you noted here, quote this—the value of this field is based on the minor university value of 4217, because it may deviate from ISO 4217 where there is compelling evidence for different customary practice. So that’s the new text that—its specification, which means, this is accurate on your end, to make such a change.

BAN: We have got confirmation that they are not supposed to be tracking the same data source. Not supposed to be the same values.

DE: I am very happy with this change. Thanks for following through on this. I wanted to ask, if there are use cases for different—for both data sources for different applications, should we make an option that lets people opt into the more formal one?

BAN: So this—the reason why I sort of hesitate with that is that the—the more formal one, there are use cases for neither the formal or the facts on the ground one. So it’s a matter of, like, opting into one or the other of them or some things.

DE: Sorry. I didn’t understand the answer. What was the reason for not exposing an option to get into the formal one if you want, and only just letting the implementation decide?

SFC: The more formal version does things like use 6 decimal places for the Iranian currency, which is one of the examples for why this doesn’t work. Because, like, not since the 1970s has anyone used 6 decimal places for that currency. But that number hasn’t changed because it—but CLDR has kept its data up to date with how the currencies are used on the ground. So it’s not like this is formal versus informal. It’s like this is, you know, one spec versus another spec where the CLDR is what focuses on what people use.

BAN: In some cases, the ISO 4217 data can be considered not more formal but suited for financial uses, using minor digits, if there’s the faintest hint that some financial institutions accounting practices might use that many digits.

BAN: But the sense is that in some cases it’s more formal. It’s more something you use in a financial institution. And in some cases, it’s just wrong. Like it’s not that it’s the formal version. It’s more digits that anyone uses.

DE: Okay. So there might be use cases sometimes. But it isn’t good enough to be a good thing for—to have an automatic option for. Okay.

USA: On the queue we have Waldemar next?

WH: You say there are some uses for financial purposes that use more digits than CLDR. That’s true. But there are common uses that use more digits than even ISO 4217. ISO 4217 lists two decimal digits for USD, right?

BAN: Right. Right. Correct. It doesn’t specify using mils.

WH: But every day I see USD prices with three decimal digits at gas stations.

USA: Yeah. Which I see is a reason to leave it entirely implementation-dependent.

DE: I don’t think gas stations are reason to leave it implementation-dependent. Where this is a default precision. You can always format currency amounts in any precision you want. But all implementations should have two digits for US dollar formatting.

BAN: Yeah.

USA: All right. Then we have Shane next. With a reply.

SFC: Yeah. So there are different—I mean, the gas station example, is one. But then there’s also, like, you know, CLDR specifies another set of rounding for your cash transactions, for example, which is different in certain locales that only use nickels, for example, for cash transactions. But they would allow granular for more electronic ones. There are several different contexts here in which these digits could be used. And, like, the purpose of this—of this value in ECMA402 and CLDR is to be the default formatting for currency, for that specific currency. But you know, we are definitely not in the business of converting currencies and not in the business of, you know, like, trying to pretend like we know every use case for currency, because it’s quite a—we don’t want to be in—that’s not what we are here for.

BAN: That’s very useful and I want to add beyond just the CLDR data on what currency should be rounded to. Nickel and dime rounding in some locales. Beyond that, CLDR for some currencies specify a different number of digits for cash uses versus financial uses.

BAN: So by making the data source implementation defined, that has gives implementations the freedom to decide whether to use the cash digits data from CLDR or the typically more digits financial data.

USA: Small point of order. We are past time. 4 minutes past time. We do have just one other item on the queue. So Daniel Minor, if you would be quick.

DLM: I will just be just a follow-up on DE and SFC points. If it’s providing a better default, they have options in the applications using different data sources or adding more precision if there’s such—in Indonesia. As a group, we should make things more—more things left to implementation, but to agree on something.

USA: That was it for the queue. Yeah?

BAN: Yeah. And a response there is, there is no clear best for all implementations.

DLM: To quickly reply, Chrome has picked one source and SpiderMonkey and Safari have picked another source and that doesn’t sound like it’s great. We’ve had web compatibility problems. But it’s nice to pick one rather than leaving it to the implementers

SFC: I have a reply to that. Throughout the spec we refer to CLDR we recommend that limitations use the CLDR, but it’s never a requirement. We could potentially add other boxes. Like no, it’s recommended that implementations use CLDR for this. That’s the best we could do. But that to be an editorial change at that point. You know, the main thing that we are trying to do is watch web reality, and browsers are using CLDR data which is not the ISO 4217 data. This makes the spec reality. We want to tweak it, we can still do that.

BAN: We are going to be removing several tests.

USA: Unfortunately, we are well over time. So we—well, okay. The queue—the rest of the queue disappeared. Would you like to quickly ask for consensus?

BAN: I would love to quickly love to ask for consensus.

DE: I would like to follow up with that later. It depends on locale data. Anyway, I don’t want to block consensus on this but follow-up work could be good.

USA: Would anybody like to withhold consensus for something that we discussed today or could that be discussed later?

USA: I don’t see anything on the queue. Or elsewhere. We have Shane with support. A clarification that TG2 approved this too. So all right. Real quick. Ben, would you like to summarize?

BAN: So it appears that this is achieved consensus, but we should do follow up work possibly with adding editorial changes and adding recommendations from one data source to another.

USA: Thank you. Let’s move to the next agenda item.

BAN: Thank you so much

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- List
- of
- things

## Temporal progress update

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2024-10/)

PFC: All right. Good morning, evening, afternoon, everyone.

PFC: This is a very short update on Temporal, the proposal that is a modern replacement for the Date object in JavaScript. I am Philip Chimento. You’ve probably seen me present on this topic many times before. I am a delegate from Igalia, and I am doing this work in partnership with Bloomberg.

PFC: All right. Our progress update is that Temporal continues to be close to done. We have finished all the editorial changes that anyone requested. Of course, if implementations still point out typos or minor mistakes, we will fix those. But otherwise, it's ready to go editorially. We will continue to analyze the code coverage and contribute more Test262 tests to facilitate implementations. But please, if you are working on an implementation, go ahead with this. When it’s ready, ship it unflagged.

PFC: The condition that was previously in place saying we could not ship implementations unflagged, that condition has been lifted. It’s okay to ship your implementation unflagged if it’s ready. If something is preventing you, let us know as soon as possible. If we need to make changes, we want to do that as soon as possible.

PFC: We have a meeting biweekly at 8 a.m. Pacific time on Thursdays that you are welcome to join—now we are not making changes anymore, that meeting is primarily focussed on answering implementers' questions. And some people join regularly to chat about progress. You’re welcome to do so too.

PFC: Last week, I did a measurement on all of the in progress implementations measuring what percentage of the Test262 tests for Temporal that pass. And these are the results. Up at the top are SpiderMonkey and GraalJS, with LibJS and V8 somewhat behind.

PFC: If there’s anything we can do to help these numbers increase, please let us know. I note these are not equivalent to "percent done." The percent of Test262 passing is a very rough measure. So please don’t think that they are this percentage of done.

PFC: All right. I would like to open the floor to questions. And also, ask a question of my own. If you have existing plans for a timeline for shipping Temporal in your JavaScript implementation, would you like to share that?

USA: All right. We have Kevin on the queue first.

KG: Yes. I want to commend all of the editorial work the Temporal people, and especially you, personally, have been doing. I’ve been following the repo and there’s a lot of very good changes. It's a very, very large proposal to do that amount of work on with consistency and clarity. So great job.

PFC: Thank you very much.

DLM: First of all, congratulations. And second of all, we are planning to turn Temporal on soon. We were held up a little bit by issues around dates from the far past or future. It looks like there’s been good progress in those issues on the Temporal side, but also some work required as well. When that is cleared up, we should be ready to turn it on in our nightly builds.

PFC: That’s fantastic news. Great to hear.

USA: And that was it for the queue.

### Speaker's Summary of Key Points

The proposal is as close to frozen as anything can be in Stage 3. Implementations should complete work on the proposal and ship it, and let the champions know ASAP if anything is blocking or complicating that. You are welcome to join the champions meetings. Firefox is close to shipping Temporal in Nightly builds, after some work is done in ICU4X.

## Make toSorted methods stable

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/3424)

KG: So this is a 5 minutes web reality "oops, we made a mistake" normative PR. You may recall that some years back, there was a normative change to make Array.prototype.sort and TypedArray.prototype.sort stable. After the introduction of Array.prototype.toSorted, I assumed and I think everyone else assumed, the stability requirement was intended to apply to those methods as well. However, because of the way that the stability requirement was specified, which is just a sentence in the introductory paragraph of Array.prototype.sort and Typedarray.prototype.sort, we accidentally did not apply that requirement, the requirement for stable sorting to the toSorted methods. In addition, there is a bit of other spec text which says that the sort implementation is implementation defined basically if toString return different values. That again, because of some awkward wording here, was only applied to Array.prototype.sort and not Array.prototype.toSorted.

KG: It is my belief these are oversites. This PR takes the sentence out of the introduction of Array.prototype.sort and instead, specifies informal language in the abstract operation, all 4 of the sorting methods make use of. So that the stability requirement is spelled out in a commonplace and formally. It takes the requirement about being implementation defined in certain circumstances applied toSorted as well as sort.

KG: I don’t believe this actually changes for any implementation. As far as I am aware, everyone thought this was what was happening already. So I would like to get consensus for this change.

KG: Hearing no objections, does anyone want to explicitly support? We started asking for that.

USA: Sorry. I was muted. On the queue, there was explicit support from DLM as well as MF. Shu, would you like to add some words to your comment? I believe not. So Shu registered support for the record.

### Conclusion

Consensus on the PR: toSorted methods will use a stable sort, matching Array.prototype.sort.

## `Math.sumPrecise` for stage 3 & last chance to suggest other names

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-math-sum)

KG: Yes. Okay. A substantial item this time. `Math.sumPrecise` is a proposal to add a method for summing a list of numbers, in addition summing that list more precisely than you would do by the sort of naive just "add from left to right" summation. Floating point numbers, you can be more precise without giving performance. Hopefully within an order of magnitude of the performance you get from adding the numbers. Probably a lot—hopefully, not that much slower than naive summation and you get, you know, the fully created sum to within the limits of what floating point numbers are able to represent. The proposal has been at Stage 2.7 for a while. So I have since the last time it was presented in written tests. The tests are relatively trivial except that I have a bunch of test cases that I found by writing a few different implementations and pressing them against each other. These are all things that were actual bugs and actual implementations by me, not like other people. And otherwise, it’s just the sort of standard boiler plate tests.

KG: The requirement for Stage 3 is only the addition of tests. So I believe it qualifies for Stage 3. I want to call out that the change to the name sumPrecise as opposed to sumExact happened late in the Stage 2.7 advancement process. And no one is in love with this name. But we have said that we don’t want it use the name `Math.sum` because that suggests to readers it’s the naive sum which people might have different expectations about performance characteristics. So you want a name that suggests that something else is going on here. Given that, no one has had a better suggestion than Math.sumPrecise. So I wanted to raise the issue of the name again, in case anyone has in the intervening months decided in fact there’s another name, or if not, this is a "speak now or forever hold your peace" moment. So I guess we should go to the queue first.

KG: DLM has support for Stage 3 with no opinion on name. Support for stage 3 from WH. Philip supports presumably the current name.

USA: There’s also support from Ross and YSV for Stage 3.

KG: Okay. Well, I will take that as consensus for Stage 3 with the name. One note for the implementers. I have done research on various algorithms for full precision summation. Waldemar pointed me to this paper from 1998 or—I forgot when this paper was. But of course you can use whatever algorithm you like, as long as it gives the right answer. And there’s been a number of innovations since then for faster ways of getting the same answer. In particular, I link in this "deterministic sum" thread to an algorithm called xsum that claims to be quite fast. And I believe it’s BSD licensed [actually it's MIT]. So just something to look into, rather than trying to do this yourself. That’s all I got. Thanks for your time.

### Speaker's Summary of Key Points

- `Math.sumPrecise` has tests written. [tests](https://github.com/tc39/test262/pull/4049)
- No one has suggested a better name, so this is what we're going with.
- Implementers are invited to look at this issue (https://github.com/tc39/proposal-math-sum/issues/1#issuecomment-2041259013) for an MIT-licensed library which implements a fast full-precision sum.

### Conclusion

Proposal has Stage 3.

## `Map.emplace` stage 2 update

Presenter: Daniel Minor (DLM)

- [proposal](https://github.com/tc39/proposal-upsert)
- [slides](https://docs.google.com/presentation/d/1l95mluNq5GqJCj-4o1BqihlufnKuRF2rualJxfOvGu4/)

DLM: Yes. `Map.Emplace` Stage 2 update. As motivation for this proposal. I think it’s this common case where you have a map and you want to do something, but you are not sure if it’s already present so you can skip doing the dance of checking has. If it’s there, pushing—in this example, it’s an array. Whatever. Using get or set. This is something we can do better on.

DLM: History of proposal. So the current design is from 4 years ago. Currently, Stage 2. The champion was interested in passing in two callback functions. One in the case where an insert is necessary. So this is the missing value. And a second that is used if the value is present. This allows us to recalculate that value.

DLM: In the design, these are optional. The method would throw if it should have been there and was not. So if you did need to insert a missing value and there’s no insert method, it throws in that case. History of the proposal. So this predates my involvement committee. So I did a bit of digging into the notes. But from my understanding, this was last presented in July 2020. There seems to have been consistent feedback from the committee to split the proposal into two methods. From what I can tell, the champion had a strong preference for retaining the one method. And it seems like not much has happened since then.

DLM: I became involved in this last plenary meeting. We did a scrub and this came up as something was in need of a champion. And at the same time, we had a group of students at the university of bergen looking for a proposal to work with as part of an implementation class. I’ve been working with them in terms of looking at an implementation inside SpiderMonkey and V8 and trying to develop the proposal a little bit.

DLM: I have only recently tried to get in touch with the previous champion. So I would like to give them more time to get back in touch with me. That was an oversight on my part and I should have done it earlier in the process.

DLM: Moving onto more widely talked about the design space. Although it seems like a simple problem, it raised a lot of options here, which became evident to me as I discussed this internally with each people on the SpiderMonkey team. I like to look at some precedent from other languages. Particularly, Python and Java.

DLM: So in Python, we have setdefault. This returns the value if it’s present in the dictionary. Otherwise it inserts a default value. Which argument functions and then returns that. So this is kind of useful in the case where the default value is an insertion time.

DLM: There’s also defaultdict which subclass built in dictionary type. In this case, a constructor which takes a callable, used to create a default value when the value is not present in the dictionary. This is more useful if the installment value is known at construction time.

DLM: Based on comments in the issue, this proposal as well as conversations internally, it seems that people for the most part use one or the other, but not both. In my case, I use setdefault. But other people in SpiderMonkey only use defaultdict. So in that case, even though they are complementary, most people choose one or the other.

DLM: I was interested in looking at some precedent from Java. We have computeIfAbsent. Use a callback to compute the default value. We have computeIf[?]. This is a precedent that the previous champion was working from.

DLM: So new hope? This is more my opinion, but I think the Pythonesque is useful. It simplifies a common pattern. It helps improve readability and other options that are optimizable down to a single map look up inside engines. We see a performance win. And point out that we don’t have to call it emplace. If you look at it the right way, it is like C++. But that’s not obvious.

DLM: I am not convinced this is the best name either, I forget it having done this presentation. Up until now, I opt to Google for that name as well

DLM: What about some of the other options? DefaultMap? This one can turn into a rabbit hole. Probably want a DefaultWeakMap. And other types of maps to consider adding. And I think it opens the door to a Java-like explosion of subtypes of containers. There is some risk of reuse of the default value. Like in Python, I think that’s mostly avoidable. If we are careful with callback functions. But still a concern.

DLM: Some other things that came up. So what happens when you call has and a key is not present. When you call get, a default is inserted. And then also the fact with a default map, the construction site defining default far away code, and map is a source of potential confusion.

DLM: What about changing Map.get? Another suggestion is coming up. So changing the get call to take a second optional value, default value for missing key. I think that’s a big change semantically. It could reduce readability of code. SpiderMonkey adds a new method rather than using the existing one. In the case where we don’t want to insert a default value, we can handle missing values using nullish coalescing.

DLM: And that leaves the update use case. I think it’s interesting, but I don’t think it’s as interesting as this set default use case. I think it’s something that we postpone to a proposal with sufficient interest.

DLM: So although this was presented as an update, I would like to get feedback from the committee. So sort of a three-part question. One is if there’s any objections to me taking this over as champion. I reached outto the previous champion, so I would like to give them more time to respond, but I would like to hear if there’s any concerns from the committee. I am curious if we think that the set default use case is sufficiently motivated at Stage 2. Or if we should consider moving this back to Stage 1 or if I should bring a Stage 0 proposal in the future about plenary.

DLM: Okay. I guess with that, we can go to the queue.

USA: On the queue, we first have a clarifying question by Waldemar.

WH: Can you define what *setdefault* actually does?

DLM: Sure. Let me—in my mind, what I have is like the example from Python. So it’s going to check the map. If the value corresponding to the key is present, it’s going to return that. Otherwise, the second argument, which is default value, would be inserted into the map. And then that value will be returned.

WH: Okay, so *setdefault* takes two arguments: a key and a default value? It does not take any callbacks?

DLM: Yes. And that’s actually—you have feedback on that point, I would be quite happy to hear it.

WH: I just wanted to understand what you were proposing.

DLM: Sure. Okay. Thank you.

USA: Next on the queue, we have Ashley.

ACE: Sorry. Just repeat the feedback I gave in person just on the record. We discussed this in Bloomberg. And are very happy with this change for the API and happy to see this proposal keep progressing. We see this pattern appear just all over, lots of projects at Bloomberg and everybody is repeating the same helper and repeating it in another language is fantastic. Very supported.

DLM: Thank you.

USA: next on the queue is Justin

JRL: For update, I don’t care about the update use case and the original proposal. I do like we are looking at the default use case just so we can have a default value in the map. That aligns with almost all of my usage of map and WeakMap. But the inability to to pass a callback to set default means if you have any map that has an expensive computation, you can't use a setdefault value, which is every template function that I write. You can no longer use this emplace. You have to go back to the normal use case. Check has. Return if it exists or put it in there and return the default value. With a callback, you can perform both inexpensive computation, or do expensive computation (all of my template tags). Thank you.

DLM: Okay. Thank you. Thank you for your feedback.

USA: Next on the queue we have JHD.

JHD: Yeah. I like the new direction, but I also think the default should be a thunk/callback in case it’s expensive to compute. Other than that, I am happy about that.

DLM: Okay. Thank you.

USA: next on the queue there is Oliver.

OMT: Yeah. I want to say, I agree, this is nice to have something in the language.

DLM: Okay. Thank you.

USA: Next, we’ve got Ross.

RKG: Yeah. Just supporting the new direction. If you like, we can surely come up with a better name than emplace, but I am not too worried about that. I don’t need to spend time doing that.

KG: Yeah. First, thanks for bringing this back. Second, I want to toss out the name getOrInit, or maybe getOrInsert. Set default is a terrible name. Second I want to disagree with all of the people wanting a callback here. I think that having a function that takes a callback - Java calls this computeIfAbsent - is potentially quite useful. However, I think that the case that I most commonly run into is when the default value is the number 0 or empty array. And in common usage, for those cases, people are going to write the callback in line. And paying the cost of creating that callback instead of just passing 0 is wildly inefficient. I don’t think the efficiency argument takes the case for one or the other. There’s room for having both under different names. But if we are to only have one, I would prefer to not have the callback taking one.

DLM: Yeah. That’s a good point. Thank you. Yeah. There is room for two.

SYG: Quick feedback on the name. I think emplace is particularly bad. I think two people understand emplace. I don’t think it means C + + sense here either. Nothing else other than don’t call it emplace. I strongly agree with Kevin. If I choose a single method, I prefer not to take a callback, but I believe there is room for both.

DLM: Okay. Thank you.

USA: Next we have Ron Buckton.

RBG: Spec on my side, I also support this. The name by shed, I would not go into all the different options for names, but if we have issues on the issue tracker, we can discuss that. That is acceptable. I want to say that I also believe that having a callback is important. The majority of use cases I use this, there is an expensive computation. And the cheap computation, maybe there’s some cost associated with setting up a callback to return something that has a predefined value. Those with—usually can be off-line to a function. You can reuse the function for the call bag. There are ways of doing—doing the cheap thing with a callback. I am not—I am more interested in if we only can have a single version of this—a single function for this or single method for this, it would be the callback method mechanism.

DLM: Great. Thank you.

USA: Then next we have Ashley. No. First, Devon, + 1. Excited for this. There’s a better name. For example, ensure. Then we have Ashley on the queue.

ACE: Just another + 1 to Kevin when looking at this at Bloomberg, the default the most common thing is the value is the cheap thing and having to wrap that in a callback would not be so good. Consider this use case. But if we have the error, I prefer that .… a second method. And there is just the simple one where you don’t have to pass the callback.

DLM: Okay. Thank you.

USA: That was the entire queue.

DLM: Thank you, everyone. I guess I can dictate a quick summary. There’s good support for two varieties of “setdefault”, one using a value and the other using a callback. And I will definitely plan to open an issue about finding a better name for this.

DLM: Given the support here, I plan to take over as champion, but I will give the previous champion a week or so to get back, in case they have any concern about this. And that’s it for me. Thank you, everyone for your time.

### Summary/Conclusion

- A new design was presented, focusing on the use case of inserting a default value into a Map during a get.
- Based upon feedback, two methods will be added, one using a default value directly, and the other taking a callback that can be used to determine the default value.
- DLM has taken over as champion of the proposal.
- An issue will be opened to bikeshed better names for the new methods.

## Extractors for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-extractors)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkr0Z2sm9bVmO_agqpA?e=7TdVup)

RBN: So this is for extractors, the hope is to see if we can get to stage 2 today. So the motivations for extractors are that there’s currently no mechanism for evaluating user defined logic during the structuring. The pattern matching proposal produces did ability to do this with custom matchers as part of nested pattern matching. And as part of that proposal or in tandem with that proposal, the extractors proposal provides a convenient syntax that allows us to use the same mechanism in pattern matching and destructuring to maintain the parallel syntax.

RBN: So this proposal’s goals were to investigate a novel syntax, executor user-defined code, which allows a number of things, including in line data validation, transformation and normalization during destructuring. Primarily this leverages Scala’s extractor objects and prior art, in prior presentations I’ve shown there are a number of different languages that also have similar capabilities. And, again, this is very much based on the custom matchers anymore of the pattern matching proposal and has parody in the structuring. It also provide a basis for potential future proposes around enough and ADTs which I hope to brick an updated presentation for enums in the future. Some example of what extractors look like, so if first with example is an extract that takes an input and parses it into its outputs. The idea is here you might have constructed something from these inputs from A, B and C that originally that allows you to pull this back out. Another example is option types where you can have a value that has a some and a none type. In the case, it would verify that input fine is a sum type and would then extract its value into the variable. And it could also be used for doing nested destructuring. The thing that gets pulled into or extracted into an ISO date can be further destructed to pull out the year, month and day, in this case, this is regular expression. I have another slide on this. And again, nested within destructuring, so you request have an object that has a location property and pulls the point out. And not only is this useful within variables, but within parameter declarations.

RBN: So a brief history on the proposal. In September 2022, this was proposed for adoption at Stage 1 that included array extractors, which are essentially what you see here. Where this looks like a call, but this is actually more of array destruct here. As well as object extractors, which used a curly bracket syntax. And at the time, we were still only seeking advancement for extractors in binding and assignment patterns. The version of this that comes with pattern matching is of course tied into the pattern matching proposal. At that time, the to proposal was adopted at Stage 1. Throughout 2023, we had a number of discussions with the pattern matching champions from various discussions here, and the issue tracker. We agreed to incorporate array extractors into the design and drop object extractors that had some complexities with the syntax space that we didn’t want to potentially eat up too much syntax with identifier curly brace within something like a destructuring assignment pattern that could have otherwise been interpreted as some type of new syntax that required identifier curly.

RBN: So in February 2024, we provide an update on the proposal. And now it’s the official drop for extractors. I mentioned some additional consideration needed regarding array destructuring and due to the iterator pattern performance. And in April 2024, we proposed this for Stage 2, but this was blocked on primarily on an ASI concern. So briefly I’ll discuss some of the semantics here and some of the changes we—a few changes we’ve made to address the last concern that was brought up.

RBN: So extractors in the case of binding patterns and assignment patterns consist of two parts an extractor member expression on the left side, which consists of an identifier or a set of dotted names, these are the same types of types—and also very similar to what we used for decorator expression. To the right of extractor member expression is what is a entrepreneur this sized list of variable patterns or variable—further binding patterns that are pulled from each of the elements of the resulting iterable or array that is returned from the match result. When these are used in binding assignment patterns, the extractor purports array destructuring on a match result. And the extractor here is denoted by parentheses rather than square brackets despite using the array destructuring mechanisms, primary reasons for to avoid confusion with element in the case of the pattern and you could look at an assignment expression, which would be inconsistent and conflict with existing syntax. Also avoids confusion with computed property names. It has some similarity to call expression, which has useful visual similar to when it comes to the construction side, which you can see in the example in the bottom of the slide. And it allows us to mirror kind of construction application. In the case of a failed match, when doing a failed extract, this will throw a spec defined error when a match fails. In the pattern matching proposal, a failed match results in attempting to choose a different option if you have multiple patterns to match against.

RBN: How matching works with extractors is defined by the pattern matching proposals custom matcher capability. Basically, that has a simple custom matcher method is—so an extractor itself is the object, and if it has a `Symbol.customMatcher` method, it will be invoked with three arguments. The first argument is the subject that is being matched against, so in the example below, the subject would be the—whatever the crust—the subject would be the string that is shown on the right. It will also include a hint. This hint is primarily to distinguish what the expected return type is for the—for assignment and binding patterns. The only value that will ever be passed in is list, which means that the expected return type is a list or iterator to be further destructured. In the pattern matching case, it can be a boolean, which is used for very simple tests. In which case the result is passed via a boolean and to help you know you can avoid any type of expensive construction that needs to be further destructured. Again, for the extractor case in binding assignment patterns this will always be list. And the last argument is a receiver. The receiver is a essentially the object that the pattern matching was called on. It’s—or the extractor expression was called on, so if you had `foo.bar` open receiver, it would be the food receiver since that would get lost due to the invoke indication of symbol.customMatcher, this will be the result of the expression rather than this—or the left-hand side that it might have looked like.

RBN: So some updates occurred the last time this was presented for advancement. We have a PR that addresses a glam at the Cal issue in the cover grammar for cover can call extractor arguments. The extractors reuse part of the binding and assignment pattern case. Eyes the binding pattern syntax which allows for implication. However, the arguments cover—using arguments as a cover grammar, arguments does not allow illusion for invocation, so we addressed this, which says basically that illusion will be allowed extractors and not allowed for extractors in normal invocations. The other change we made, this was the original concern from Waldemar from the previous meeting, there was an ASI concern. I’ll kind of get into that here. So the original concern was that in the case of a binding pattern, extractor in the binding pattern, your expectation would be let X open receiver A equals B would perform the extractor. If there’s a new line after the X, then this is a valid simple assignment even though there’s a entrepreneur that sized expression on the left. And this is a conflict. So the—so no address this and headache sure that we don’t conflict the with existing valid JavaScript, we need to introduce a no line—new line terminator assertion to the grammar. But this results in an inconsistency to make sure we have discussed in plenary. So that inconsistency is that in the case of a call expression, which is the exam on the far right, a call is always a call whether there’s a new line or not. In the case of extractors, for consistency with both binding and assignment patterns, it is not an extractor if there’s a new line many between. In general, since there’s a major semantic difference between call and extract, we—both the champions and for the champion for this proposal and for pattern matching generally concur that the difference in semantics is enough that the minor difference between what is considered a call and what is considered extractor is considered acceptable. I would like to get some feedback from the committee on this. Res with looked at an open receiver of a new call is rare and generally forbidden by linters as the default behavior for various rules. There’s also a discrepancy in—just in arguments in general in that call a new expression are similar, but they—the new allows augmenting to be commutely alighted, so we are not completely consistent within languages or expectations around what an argument list looks likes. Again, I think that a reason why this discrepancy should be viable.

RBN: And then the last—this is also—we presented on this at the last meeting, which was that the current proposal uses array destructuring, except array destructuring is actually iterator protocol which is not very efficient. As no implementation currently optimizes array destructuring, and we’re still hoping to address this post-Stage 2 or during Stage 2 as we are looking into currently putting together some benchmarks to do some analysis that we can try to determine if there is an option for implementations to optimize cases like very simple array destructuring, which is commonly used in many places like in use states, so, fen, this requires bench marks, further analysis. We are in the process of putting that together now. And, again, I’m hoping this is Stage 2 concern, I’m hoping to continue with iterator as the protocol now with the goal of finding ways forward to—seeing if it’s possible for implementations to improve that support. If we determine that it’s not a available option moving forward, then we are likely to go with using an array as object to structure mechanism, which just requires the result be an array and the destructuring actually occurs via indexed elements, so actually look at length and zero, 1, 2, 3 within the array rather than performing iterations since that would be more efficient.

RBN: Finally, I have the slides for some examples. This is example of something like a point class where you might want to have the X and Y value be read only. And you can extract those values. Also do system brand matching within the custom matcher. So this does brand testing, extracts the values in a way you can actually receive them and could be used both in the destructuring and pattern matching case. In this case, this is something akin to an algebraic data type where you have a Rust style enum where you have a number of options you might want to consider for what you’re actually construct examining then when performing a destructuring you can verify if I’m taking into something that has a line which is two arguments that has the same properties, so align has p1 and p2, when you try to extract that into a rectangle which is expecting a different thing, that you get a different result or that you don’t blindly succeed. Instead this would throw because this is the wrong type. And examples here with pattern matching showing branches on each of these individual cases using custom matching. And, again, some examples through—of qualified names. So message.write, option.sum, just a momentary.point and nested patterns. And this is kind of briefly—this example is kind of briefly shown on the beginning slides without the context, but the pattern matching proposal is intending to add a custom matcher to RegExp instances. Which would allow you to use them in patterns, so you could have, ISO date parsing via regular expressions, and do building extraction of these into the component parts, and potentially even nest them to break out these things within a normal destructuring—nested destructuring or use pattern matching to break these down.

RBN: So with that, I will go to anything that might be on the queue.

WH: Going back to the slide about the ASI issue, can you say what happens in the not-an-extractor cases?

RBN: So in the let declaration or in the first example where it says not an extractor, this would be parsed as a let X variable declaration and a simple assignment. In the second example, this would be considered not an extractor, would would fall back to the default of behave of X entrepreneur is a closed expression which would throw at run time because you cannot call at a run expression and the the right example would be a call expression, because that is how it’s parsed today.

WH: Okay.

DE: This is a great proposal. It’s a very clear design. There are still some things left for Stage 2 discussion, but I think those are the normal kind of details to discuss during Stage 2. This proposal fixes the biggest concern that I had for pattern matching besides the too much complexity, which was being able to use these constructs in different kind of left-hand side situations. Custom matchers been found to be important in lots of different programming languages and it would be great to have them in JavaScript.

YSV: I’ll reiterate a concern that was brought up in the last meeting when this was presented, which is we are unsure what the performance impacts of this will be. Since then, we’ve also discussed more specially, and what we found is we fall in line of being weakly negative towards this proposal. In terms of whether or not the power that it brings to the language is maybe not too much. That’s a fear that we have. That this will bring too much power to what you can do on the left-hand side of an assignment. We are not currently blocking Stage 2, but we wanted to register our concern.

RBN: I appreciate that, thank you.

MM: Yeah, I am strongly supportive of extractors. I think you’ve done a great job here. I appreciate that you made it work with the pattern matching proposal. I think we need something like the pattern matching proposal, but on—but way simpler than the existing one, so I’m not supporting the current matching proposal, but the things that you have done to live with the pattern matching proposal, I believe, are the right things to do to live with an acceptably simpler pattern, so I’m supportive.

RBN: I would like to say we have been working on some updates to the pattern matching proposal that I’m not sure if that’s on the agenda for this meeting, but I know the plan is to at least discuss it again for potentially Stage 2 at the next meeting. We have simplified a number of things. Hopefully we can come to some agreements on what that needs to be at an upcoming meeting.

MM: Okay, thanks for the heads-up on that. I am interested. So in particular, I think the existence of extractors means that much other complexity can be removed from pattern matching because they can be subsumed by using patterns and extractors.

RBN: Thank you.

SYG: I think this is a prime candidate for a JS sugar feature. This—I won’t block Stage 2 here because the presentation yesterday, you know, I explicitly—I have not proposed any of the actual detailed workings on the JSSugar proposal, but I think—as the champion, you should—I should be explicit that I currently don’t think this meets the bar to be implemented natively in engines. That said, I definitely see the utility and the demand on the developer side for folks who want to do this kind of thing. And you have a run time component that may make sense like a new well-known symbol. Part of the, like coordination point. But this—and pattern matching certainly, but both strike they as prime candidates for a desugared feature.

RBN: So I’ll mildly disagree on this. Mostly because the destructuring—sorry, the JS Sugar for this inside of destructuring requires reassuring all of destructuring. Everything at every level, because you cannot run—you can’t really run user code inside of destructuring. Its very complex to do so. It’s for the assignment expression case, you can kind of work around it by wrapping something with a thing that has a get set value in doing things inside of that, but that introduces weird scoping semantics, and what TypeScript would have to do for this is, again, fully desugar all of destructuring at all levels to be able to inject this anywhere within destructuring, so I’m not—even though we are going to have to do this, it’s not something that I would—not something that I would expect would be very efficient within something like JS sugar. I know that performance is likely to be negligible and introduce a bunch of temporary locals that could leak. So I have some concerns about something like this being a purely desugared feature. Also, there is discussion about what the runtime behavior would be around things like the array destructuring performance, and if we were able to get, say, engines to investigate iterator—array iterator destructuring performance improvements, we might not be able to actually benefit from that if this is fully desugared, especially if we have to do the nesting to make he’s things work. I have some concerns because I think it’s much more efficient to do these things within the runtime.

JWK: I strongly support this. And if JS sugar is a thing in the future, we still need to discuss all these semantics, otherwise tools cannot implement them.

SYG: Right, I’m not saying we shouldn’t discuss this. I’m saying to Ron that I don’t think this meets the bar for native implementation. That’s, you know, not to kill discuss and not kill the feature. We ought to still discuss this.

DE: I’m grateful that Mozilla and V8 are not blocking Stage 2. In particular, I think because we just now started the discussion about native implementation and that the issues with that in general, it seems reasonable to not block Stage 2 for proposals. But we definitely need to figure out the relationship to JSSugar by Stage 2.7, because this affects a lot of these semantic points as Ron explained.

RBN: And as I said, as far as the desugaring for this, even if this were in JSSugar, even if this is, I am part of the TypeScript team, I’ve been thinking long and hard for this and the pattern matching proposal, we’ll have to do these types of implementations and it’s a matter of what level and to what extent could we in the desugar emulate the semantics exactly that we would propose, and it’s very difficult to emulate those semantics exactly. Not impossible, but TypeScript tends to take shortcuts to avoid really messy outputs because it can affect the ability to debug at times. So, yeah, we are considering this.

KM: I guess this is kind of carrying off the same point that Shu and Yulia were raising. I guess similar kinds of concerns about the implementation side of this. I definitely see if use case here obviously if languages that have, you know, pattern matches, like, in camel and has kel, I definitely appreciated it, I just worry that the complexity is very difficult. And, yeah, agree—I could imagine some idiom that works with this. I mean, I think the nested one would be difficult. I think I—yeah, I just want to reiterate the shared concern about implementation, like, the value add to implementation complexity on—within engines themselves.

RBN: Yeah, so the—again, the reason why this is proposed is because let xy equals point.extract is not sufficient for the cases that we are trying to cover. One of the main motivating use case is to allow the ability to perform some validation and extracting in context in the middle of destructuring. In places where you can’t do let xy, where you might want to have a more efficient mechanism of extracting, so the example here with option some of message move pulling at the X and Y properties, this would be, like four or five statements, and very complicated. But you could also then do this in the parameter of a function to perform, again, data validation, data transformation, custom extraction, things that you can’t do with destructuring today, and the makes things somewhat more complicated, and again it was one of the main motivating cases for this.

KM: You could do something like option.sum.extract and then as a parameter, pass message.move. And then that means that inside of there, I want to extract the message move as like a subextraction point.

RBN: Which introduces errors—zero functions and doesn’t introduce the values at the local scope, so you have to declare the variables outside of it and extract them. It’s not a very—it’s not a very efficient Mechanism.

KM: Yeah, yeah, I mean, I agree there’s definitely down sides. I think the—if this proposal still—it feels like at first glance it’s trying to hide the same downsides inside of the engine. And that does not mean those downsides—those difficulties go away. They just have to be handled by somebody else, which, you know, is, I guess, the point of the JS0 discussion.

JHD: Yeah, so I just wanted to add, like, I’ve—I have in the past had similar thoughts about extractors as in, like, I don’t really know if, like, I didn’t know if I valued the use cases enough to, you know, put in the language. The thing that convinced me personally, which is not to be clear, is not the motivation for Ron or the proposal, is that as side effect of this proposal, I would be able to just this in the function parameter, so all of the runtime type checks I’m always doing for the top ten lines of my functions, I would be able to very nicely cleanly put in evaluation extractor functions and reference directly inside the function signature and that will be hugely useful for me and allow me to very cleanly and in a reusable way share my validations in a way that will also be able to have probably a more helpful stack trace, although, that’s not a guarantee. You know, again, that’s not why Ron wants this proposal and, you know, what the proposal is aiming to solve, but that’s a side benefit I would see if this proposal advanced as is.

USA: Thank you. Next we have—okay, next on the queue we have Linus.

LGH: So that seems fine to me for solving the issue with the let declaration, but one of the other examples you had was labeled assignment extractor, and I believe that is currently already valid syntax. It’s one of those weird edge cases where it throws a ReferenceError at the point of assignment. And if I recall correctly, engines tried to change that to a syntax error but came to the conclusion that that is not web compatible. So I wonder what you think about that.

RBN: I’m not familiar with the concern about web compatibility. But this was discussed when this went up originally for Stage 1, is that the reason that a sign-up pattern extractors are part of this proposal that there is no case where an assignment to call actually works today. It will always throw. It does throw at runtime. You could theoretically put a try catch around it as the way to test whether extractors are a thing. But beyond, that you can’t actually leverage that behavior in a way that doesn’t result in an exception.

LGH: Okay, think it would be a breaking change, but it turns out to be web compatible, that seems fine.

RBN?: Yes.

KG: Generally speaking, taking something that always throws an error and making it not throw an error, while that is technically a breaking change, it almost always works out in practice. Because very few people are intentionally throwing an error and then, like, depending on that error continues to happen. And in fact, in existing code, it almost certainly would, because, like, whatever it was that they would have written would turn out not to have been an extractor because extractors didn’t exist when they wrote that code, so it should be fine.

YSZ: Yes, I have some, reassuring thought with Keith and Shu, so basically, like, this feature implemented in the run digit, in the other run digit, it’s pretty much a runtime bar edition like on Similar Ra, and we can implement this kind of feature if it has a type processing, like a TypeScript, and if we implemented this in engines and we needed to do the runtime call in other things, and I feel like it is kind of like the same sentiment to TDZ, and I’m in the saying that I drag the opposite, but I’d like to see that this thing is, like, evaluated with the soul after JSSsugar and we did the discussions.

RBN: So I’ll say a couple things. One, there is some benefit to TypeScript in that TypeScript could leverage the syntax to give you early compiler errors if you tried to do the wrong thing. We do that today for many things. But if your suggestion is that TypeScript would use this type information to rewrite the destructuring, we would not do that. TypeScript has for many years had a policy of no typed emit. We have a very few small cases we do early on in our initial design, but we do not do type driven emit and we refuse to add new feature that are purely type driven. If TypeScript could do there because it could use the type information and remove all this, that’s not something we would do.

ACE: Just echoing what Ron said. At Bloomberg, we’re also a bit nervous. We’re very happy that TypeScript’s current line is ignoring the legacy parts of type driven emit, which are really, really old versions of TypeScript. Very happy with that, because we freely update TypeScript quite regularly, and we can do that because it has no runtime semantics. So we can update, you know, a million lines of TypeScript to a new version of TypeScript and we know that’s not going to impact any financial calculations. If someone adding a different return type to something could now change the runtime behavior, that means we’re going to have to be much more cautious with how we upgrade TypeScript, which may end up in being on older versions of TypeScript. It’s unclear how that would work in our world. And I can’t speak on behalf of Google, but I know they have a similar thing where they have a large monorepo and try to have the same thing across. I can see any kind of large code base having that. Plus one to line of reasoning.

SYG: I’m not sure I want to—I want to better understand the type driven emit thing. What I heard is one, it’s a policy and the actual concrete reason I hear from ACE is that you don’t want—it sounded like the failure case is that someone added a type, and it still compiled to something. Like, it didn’t error out during the translation from TypeScript to JavaScript except now the output JavaScript has different behaviors. Is that the failure case do, I understand correctly?

ACE: Could you say it again.

SYG: Is the failure case that someone add—your example is someone added a new return type and now there’s different runtime behavior. My question is why didn’t adding the new return type cause the TypeScript entire project to fail to compile because you changed the type?

ACE: So you can change the return type and the previous return type was equally correct. You’ve now moved to a different type but it’s now correct. You could have something that was very specific, like this returned 1 or 2, now it returns number, so it compiled before, and it compiles again. You can also not change anything, like, updating TypeScript, they change their inference, and it now just infers a slightly different type. And both types are correct, neither produce an error. But it’s a different type now. You’re right, that sometimes you change a type, and it causes an error. And that person now has to—so in our world, if we did if we update TypeScript and they now infer a different type, that may now produce lots of errors. We then go through and try and fix those errors, and we’re just trying to—these errors are purely static things that we can detect statically and fix them.

SYG: Right. Can someone help me understand, then, how would—if we are to—in the hypothetical, if we were to use type-driven emit for extractors here, what is a concrete example where it would break in the way that you are afraid of?

DRR: There’s a couple things to note. One is that I mean, I think DE put in on the queue already, that this is—we don’t really have a sound type system, and so, you know, your mileage may vary in terms of, like what actually happens at runtime versus not. Between what the—between what the deficiencies and runtime deficiencies actually does. But on of the, that you have to consider the fact that there are other compilers that are independent of TypeScript’s type checking, right? So the type system that—the principle of type eraser is partially to open the door up to other implementations of the compiler, right, and those compilers all do purely syntactically driven operations maybe with a little little semantics around simple scopes, and binding information and simple information, things like that. So for the last few years, it’s not—it’s actually been something stronger than even note-type driven emit. It’s no cross file emit. Basically if you have to resolve across the file to make a determination of something, that’s no go, because many other compilers have limitations around that, too, for example, Babel basically parses every JS file its own compilation unit and doesn’t really resolve across to make any determination about what to do. So it goes a little bit stronger. It’s not just about—I mean, part of it that we have an unsound type system. Part of it is you can also get your JavaScript emit even if type checking fails. But it’s also the fact that other tools can process TypeScript without having any type information. And so basically, it’s not a block for there’s a type error. Your JS compiler, bundler, whatever, can still work on it.

DE: KM was asking, doesn’t it change the semantics of your program if the type changes? And I think DRR answered clearly no, it doesn’t change the semantics.

DRR?: Yeah, that’s correct.

DE: You know, TypeScript has the thing called overloads, but those are really more like union types of functions. So there isn’t anything that happens at runtime based on the types. And it will be a huge change to design to do that.

RBN: And, again, we have a few cases that are type direct emit that we don’t want to continue to repeat. Some continue enums are very valuable, but those change the runtime semantics when you change them, and we have a couple small other cases that we don’t want to repeat those because it introduces a complexity that is a problem downstream. So it’s, again, not something we want to support in the future.

USA: Next on the queue we have Shu.

SYG: So use case point, as I understood, was that—so I understand that TypeScript’s type system is not sound. But I thought what use case was saying if you could prove it, then you can do it efficiently, otherwise it’s a fallback, like VM is working comment automatically. You are saying that is also not possible. It’s also just as a policy choice or whatever that there are no, like, sound subsets of the program that you currently analyze and can do a different thing with, like, a different observably equivalent output?

RBN: So we have discussed doing this, and we’ve considered this in the past. We’ve had discussions with outside teams about potential for compiler plugs in that could do, like, constant folding and other optimizations, but we don’t do any of those currently. That’s not a feature of the compiler. We generally just to not do any kind of runtime optimization. We do our best to emulate spec semantics. There are places where one of our—I wouldn’t say it’s a policy, but more of a rule of thumb is we try to generate, where possible, output that is easy to read so if you are debugging these things without source maps, if you are stepping through code, that you can more easily read that code. We have a few cases that don’t, namely generator down levels. That’s just impossible to do cleanly. Destructuring down levelling is a mess because it generates significant number of temporary variables. But we generally fry do this. And in some case, we leverage the fact that we can give you type checking and say, hey, this is going to be a compiler error, so we don’t—so we won’t necessarily do some of the runtime checks in our down levelling because we hopefully warned you ahead of time that this is a problem. But for the most part, we don’t really do other types of optimizations, and we often can’t even get spec semion the ticks because of things like down levelling async await, we’ll end up with more turns that what you can actually get in the smoke Semin antics because we are outside of the engine. So there are limitation what we can actually do with our down leveling.

SYG: So I would encourage this as an avenue of exploration, given the change in risk appetite from the engines that we talked about yesterday.

DRR: I think, you know, just to get to—I don’t know, it’s totally possible for us to speculatively to fast pass, slow pass, like what you’re describing. The thing is that it typically sits more towards the end of the build pipeline than us. It’s typically bundler or closure compiler. The closest example I can think of that does anything like this is a tool like esbuild that says I have the entire program, like, the actual source code available to me, all at once, and I am going to choose to do inlining and things like that. And, you know, it’s something that we’ve pushed back on, we have avoided doing ourselves. We don’t even bundle ours at all. Like, the TypeScript compiler I mean. And so it’s something that we’ve avoid for a very long time. And it’s kind of—I think other replies are going to get to this, but it’s generally not been the thing that we’ve harkened back to wanting to do more of, like, type directed emit, cross file emit, things like that. It’s a much simpler compilation model or checking mod it at least.

RBN: One other thing I’d like to around and I put the slide up to show, if ex-for example, we wanted to just use, let’s say, the interest was in just using what we could statically know without type information to potentially generate something or to potentially translate the output, the problem here is that the purpose of custom matching is to have user defined code, that user defined code could do anything in that function body. If maybe the function that you are—the object that you’re referencing has a custom matcher, then it’s defined in that body—in the same file and we could statically analyze the contents of that method to determine what it does and somehow inline that into output, assuming that we can verify that that static custom—`Symbol.customMatcher` hasn’t changed at runtime because someone else has patched that object, you’re talking about extremely complicated down level emit that is going to ship with your code. It’s going to be part of your bundle. You’re going to have to pay for that on every single case, versus a maybe less performance emit and it increase code size and you get faster downloads and—you’re starting faster, your application starts faster because you’re maybe aware that I’m going to pay the cost for running the custom matchers if I use them in my code, but if I am code pass that don’t use them and I have all of this complexity that has to be added to the JavaScript to prove the customization out, that’s something you have to pay for every single download and every single user even if it’s not touched. And that’s not very efficient. I’m more likely to say the slower code path is best for sugaring because we’re not going to introduce this without a significant amount of Overhead.

DE: Yeah, I totally agree with RBN’s point, and I think it’s great that the engines have brought this JSSugar topic to the agenda so now we can have more discussions about what is possible. It seems like both on what is practical to do in transpilers and the nature of type checking where different people on the committee had different ideas. And I think that proposal as well as pattern matching will be a good place to work that out. On the question of sound type systems where SYG was encouraging the thing that RBN was talking about with more optimized emits with fast and slow paths as well as type systems actually proving things, I think we’ve seen in the market where there have been lots of attempts at type systems and optimized emits for JavaScript that the unsound approaches, the approaches that, you know, take certain assumptions, that aren’t always true when taking types, those have won in the marketplace. Not just for TypeScript, but for other type checking systems like flow has a sound mode, I believe, but that’s not always used. Someone can correct me if I’m wrong. And with other transpilers like closure compiler for optimization, it has this optimized mode, but it requires a lot of attention and care by the people using it, and that’s kind of a barrier to entry. So I think the separation of not doing type directed emits makes sense given the all this context of it’s hard to retrofit a type system to an existing programming language, and over and over again with TypeScript, we found that you can get better types—you can get more useful help by doing some of these more advanced tricks that are just exploiting the logic of the type system and don’t necessarily have runtime representations.

YSV: I just want to reply to the comment that was just immediately before, that when—by shipping this in implementations you don’t have to pay for download of the code. So this also depends on how you’re using extractors. And one of the to herbal the use case for extractors is making sure that what’s being passed to a variable or a function is the thing that you expect. So effectively, kind of like runtime type checks. And if it’s being used in that way, in is where the performance concern comes in, the cost of doing this ahead of time is cheaper than doing it during runtime. Because even if the download, like, I imagine if you do this statically, then the download will be about the same size as before. You’ll just get compile time errors. Even if there is something additional in the download in terms of checks, it will still be cached and reloading your application won’t cost more. Basically, it’s cached, so the cost of download is less than landing this directly in engines depending on what you’re doing with it. So I think it depends, and might be a balance—there might not be a performance improvement, because the benefit of a smaller bundle is offset by the type of code people start writing.

RBN: So I’ll say a couple things. One is that if you’re looking at something like TypeScript, this doesn’t really—this wouldn’t be the best way to do, like, static type analysis, because we can do static type analysis without runtime, any runtime code. So if you wanted to say that the argument is string, then—and had a matcher that tested for that, in TypeScript it’s cheaper just to declare the argument as a string. At JavaScript at runtime, if you want to actually do some type of runtime validation of that nature or checking the contents of the stripping as part of validation, that’s something that if you didn’t want to use TypeScript, you could here to take a look at this as runtime to do this type of validation, and that’s not something that could necessarily—especially for things that can’t really be statically, for things that have multiple steps. So the other thing, too, is that talking about download caches is that really depends on your usage metric for an application in a lot of websites are things that you go to and use very infrequently, you go to a search engine and you go to a site that you load up and it depends on what percentage of time is spent on the home page versus deep within the application, depends on whether or not your bundle size matters. And download caches is kind of a complicated and tricky subject because it really depends on your usage metrics. I just—I do know that bundle size is important to many customers. And having really complicated, large emit for down leveling has been an issue, so it’s generally why we—one of the reasons we try to avoid it.

USA: All right. Before we move on with the rest of the queue, I would remind you that we have around eight minutes left, and beyond that we’d eat lunch. First on the queue, we have a clarifying question by Justin.

JRL: So the last couple of minutes of conversation have been specifically about TypeScript optimization passes, whether or not it can do anything with the type analysis it already has. I think these are good topics to have, but not on the current discussion topic we have. This is supposed to be about extractors. If any of the questions are explicitly about extractors performance and not TypeScript optimizations, then let’s keep those. But if they’re not, can we move on to another topic.

SYG: So I think—it seems like a lot of the lines of argument here is that, and I’m willing to take this perfectly at face value from the TypeScript folks, that this is for architectural reasons for state of the world reasons, that it is difficult or undesirable to do this TypeScript. And I guess you think that would imply, then, that the engines are a better place to do this. But if the conclusion here is that something like extractors—sorry, not something like, if extractors cannot be done efficiently with all our giants for bundle size, runtime per form answer, even with static analysis, another conclusion to draw is it’s a bad fit for language given our constraints. Use case points still resonates that the languages that enjoy something like pattern matching and more sophisticated destructuring are all static languages with pretty sophisticated type systems where the—where the pattern matching end up mostly being a zero cost thing at compile time. And, yeah, it’s really nice. If you had that starting point, but we don’t have that starting point and we would like to get to a place that everyone can live with, but I want to remind that if the argument is that there’s just no realistic way to make it fast even with sophisticated static analysis tools, the conclusion is probably not that, oh, okay, then we should just do it in engines. I think I want to reiterate the complexity is moved, not removed point.

RBN: So this in general—the expectation is that when you’re executing a function—or using an extractor you’re using yourself code, and it’s as slow as executing a function would ever be. If the interest is in can we make this faster through static analysis, that’s not something TypeScript could do. It is here for something that engines can do. Engines have more knowledge at runtime about the runtime semantics if well, for example, had a—had a very simple extractor on, say, the number constructor, that all it did was say, yeah, that number and then returns the number. You could here toette lake—an engine could here to ethically had the desire to optimized say, I’m looking at number, I know this the global number, I know this is what it does because no one tinkered with it so I’m going do that thing. For TypeScript, it requires a lot of complex code that has to be put in the output to be put in the bundle. For us that, static analysis could be done, it could be done to make things faster and increases bundle size, which is negative. Runtimes could here do this. And I’ve had hopes and even discuss—or tried—I believe I started some initial discussions with you about the possibility that in the future, if something like ADT enums were to exist that allude to you create data types that had very simple data structures, you had a known set of possible inputs and outputs that could be supported by pattern matching we might be able to gain efficiencies in the runtime because the runtime could know all these things and make benefits. Maybe that wouldn’t be something that on day one. Like in Mings, it’s going to be a feature that performance would improve as need arises and start adding optimizations to it. In the worst case, it wouldn’t be like if we didn’t have this feature and you had to do everything one line at a time. The expectation is this is not going to be slower, other than reassuring is slower than the native equipment.

USA: We have only three more minutes left for this and the queue continues to grow. I would suggest now to leave time for consensus as well as the conclusion. So what about we limit rest of the discussion towards stuff that pertains to stage advancement, and the controversy queue could be captured and we could get back to that.

RBN?: Correct me if I’m wrong, JHD, it shouldn’t be slower than current code.

JHD: The thing I just wanted to say is that the,will—like, in terms of market pressure is and performance and browsers and stuff, it’s not an arbitrary number. The target to beat is “what are people going to do in the absence of the feature”. As long as it’s not slower than that, it should be “fast enough”.

USA: All right, then. RBN, how would you like to proceed?

RBN: Ashley, is your comment a quick one or longer one? If it’s a longer one, perhaps we can open an issue on the issue tracker.

ACE: Very quick. It’s just the conversation versus transpiled versus runtime performance, would engines be interested in, like, implementation being done in a branch just to collect empirical evidence, so rather than guessing which one would be faster?

YSV: One of my concerns is simply around the power of the proposal. And we might not be I believe to anticipate how people start to write their code. People might start writing applications in a way that makes them slower in order to have a certain mental model, whereas restricting this power might allow them to write applications in a different way. Like I said, we’re weakly negative and not blocking Stage 2.

RBN: All right. So I’d like to go, if I can, to a discussion on potential advancement. I do think that going into the Stage 2 might be potentially a good signal that we need to start digging into some of these more advanced and complex concerns. So if that—at this point, I think, Daniel, you have a topic on the queue. So in --

MM: I just have a strong plus one for stage 2. All of the issues that we’re discussing here, I think we’re all agreed they can be investigated during Stage 2. Nobody’s expressed that these issues block Stage 2. So I’m strongly supportive of this. And I think that, you know, even if there’s a significant performance cost, if there’s a significant improvement in the degree to which people can write readable, reliable code because of the power of the syntax, to make things more readable and understandable, I certainly would proceed to use it even if there is a significant performance cost, and I think it adds more value than it subtracts for most users to.

RBN: I know we are out of time, so at this point I’ll ask for consensus on advancement, and I will happily put a summary in notes when everyone else goes to lunch.

DE: Yeah, I support Stage 2 for this proposal. And it will be important to investigate these issues that browsers raised during Stage 2.

USA: Also on the queue, we have support for Stage 2 by JHD, Chip, as well as Chris. Yeah. Seems like we have consensus for Stage 2. Congratulations, and before we move on to the summary, let’s ask for reviewers for Stage 2.

RBN: Yes, I very much need that.

USA: Any volunteers? Well, I suppose you mean Stage 3 reviewers?

RBN: Yeah, reviewers for the Stage 3 reviewers that I’ll need during Stage 2.

USA: Yeah. Any in-person volunteers? JHD has raised a hand. JRL also has a hand up.

USA: Thank you both. And anybody else, feel free to reach out to Ron. If you’d like to volunteer async, and, Ron, would you like to quickly summarize or conclude.

RBN: Yeah. I’m happy to do offline. I think there’s a lot I have to go through to summarize because of the discussion about static analysis, so I’ll probably do that offline.

YSV: Concern about performance impacts and power brings to language

SYG: Potential candidate for JSSugar

RBN: TypeScript already considering complexity of desugaring as it requires desugaring all surrounding destructuring, strongly hoping engines native implementations could be significantly more efficient.

ACE: Type-directed emit would be a major issue for Bloomberg.

YSV: asked if TypeScript can use static analysis/type information to do this at compile time. RBN/DRR: As a policy, TypeScript will not perform type-directed emit. Any static analysis would need to be baked into the desugaring, which is prohibitively expensive for bundle size. At worst, this should be no slower than normal function invocation, not accounting for any general desugaring overhead you might expect downleveling destructuring to ES5. RBN/DE/MM: Further questions on performance can be addressed in Stage 2 Proposed for Stage 2

### Speaker's Summary of Key Points

- Addressed missing Elision in cover grammar
- Introduced NLT between ExtractorMemberExpression and ExtractorBindingPattern/ExtractorAssignmentPattern
- Continuing with Iterator destructuring while we investigate runtime performance w/option to switch to array-object destructuring (i.e., destructuring based on index)

### Conclusion

Stage 2. Reviewers for Stage 3: Jordan Harband, Justin Ridgewell

## Decimal: Stage 1 Update

Presenter: Jesse Alama (JMN), Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-decimal/)
- [slides](https://notes.igalia.com/p/tc39-decimal-october-2024/)

JMN: Well, welcome back from lunch, everyone. This is JMN presenting an update about the decimal proposal. I’m presenting this with NRO, he has helped quite a bit with the slides. I’m working on this for quite some time now with Bloomberg. Let’s take a quick look. Let’s just dive in. I know that many of you have probably heard this many times, but I won’t make aunderstands. Maybe there are some newcomers here. The point of the decimal proposal is to represent exact decimal numbers for purpose of eliminating or at least significantly reducing the rounding errors that are frequently seen when handling our friend’s binary floats with typical human numeric data, which is generally expressed in base 10. I certainly don’t compute my bills in binary. I use base 10, and that’s not the only place I use base base 10. In this world, we have something like 1.3 that really is 1.3. It’s not an approximation thereof. And in this world, if we do this classic example of 0.1, 0.2, we really get 0.3, so these are going to be the same quantity in the decimal world. They’re not—0.1, 0.2, 0.3 are not approximately represented, but they’re exactly represented. That’s what’s going on with this proposal.

JMN: I presented this a number of times, and it has a long history in TC39. And so I’m riding on the shoulders of giants here. So I just want to shout out and thank many of the people who have been involved. Since the last time I did an update, there has been a lot of progress here. I presented this in TG3 a number of times, so I was fortunate to discuss a lot of this with MM, KKL and a number of other people listed here and the emissions are unintentional. We do have a guest speaker today. Based on some feedback that we had at the last presentation and even the one before that as well, there seems to be a decimal famously just filling up the queue. It gets heated because everyone loves this topic. And last time we had some discussion coming from JHD. I thought that we would let JHD take it away now for a little bit, because I think some of the insights that he has here are really quite essential for further discussion.

JHD: Yeah, thanks, Jesse. I wasn’t able to prepare any materials so I will just talk. I had some conversations since the last plenary with JMN and DE in particular about Decimal. And I was made aware that my position on Decimal as a feature was probably not being made clear. This could have been a vision talk if I had made slides - the sort of vision I have for decimals in JavaScript is one day we can actually just type numbers that make sense in our programs and do math with them and it makes sense, and do all the mathy things and all of the 0.1 plus 0.2 things that everyone laughs at aren’t applicable anymore. That was my hope during the BigInt proposal, but that was sadly not its purpose, so it was not designed to be smoothly interoperable with Number. My personal belief is that that’s why it doesn’t have the adoption we were hoping to see from it, but nonetheless, that’s what I want out of Decimal or any similar numbering system, is to get to that point. In other words, I think that the problems that the Decimal proposal is trying to solve are very, very critically important and very, very broadly needed. Almost everyone does stuff with numbers, and the capital N Number is just not sufficient for almost anybody to avoid bugs and to do the things they expect, people constantly have to work around all these issues. So I am in full support of solving this problem.

JHD: The reason for my objections has been that I don’t think that we can have this vision I want unless we end up with something that is a numeric primitive that can be smoothly and ergonomically used, and that is interoperable with the existing numeric primitives. I’m worried that we will find ourselves in a place where we have Decimal as an API and can’t ever get it as a primitive, and it’s not ergonomic enough to achieve the world I want as only an API.

JHD: Some of the recent changes that I think JMN is about to discuss definitely remove some of the known obstacles to eventually having decimal primitives, which is good. That is wonderful, and I’m very pleased with the changes that have been made, that we’ll hear about shortly. I think I’ve expressed myself sufficiently about this specific proposal in previous plenaries, but I wanted to clarify that I think that if solved properly, this is a proposal that will be broadly useful and ease a lot of developer pain and allow for more correct programs. And to me, “properly” includes primitives.

JMN: Thank you very much JHD, I appreciate that you took the time to schedule that. So the purpose of my presentation today, again, I’m not asking for stage advancement, but I’m an update, so part of the purpose of the presentation was to allow some of these more controversial points to get fully aired, and I thank JHD for taking the time to do that. But the other is to also present the didn’t of diff, where we are compared to last time in previous updates. So the data model for decimals for us, and the API that we have in mind, this is largely unchanged, although, I’ll give you an interesting diff in just a moment.

JMN: We’re proposing to use an already well established standard that we’re already using, IEEE 754 binary floats, but there’s a part of it called decimal 128 which is about decimal arithmetic that I propose to incorporate into JS, at least a part of it. The idea behind decimal 128 is to have representation of decimal numbers taking up 128 bits, hence the name. So it’s a fixed bit width representation for numbers. And that’s nice because it provides a safe backdrop, you might say. So that one can reason about how much space numbers take up and how big they are. So this is in contrast with other alternatives like, quote, unquote, big decimal or some kind of arbitrary precision world where a decimal number might take up a lot of space and doing arithmetic on these things could potentially take up quite a lot of space and time.

JMN: The idea behind decimal 128, and a nice advantage that it has, is we can just do arithmetic without having to, excuse me, reduce precision. One doesn’t have to worry about the possibility that an operation is going to somehow overflow or we don’t understand what the result might be, because we know that we’re working always with 128 bits, there’s a certain number of significant digits that are always available, and there’s an exponent range that’s available, so we can just do our operations and we know that we’re still within this decimal 128 universe. And the proposal, IEEE 754 specifies quite a lot of operations that could be done on these values. But what we are initially proposing is just basic arithmetic, so addition, subtraction, multiplication, division and a couple other thing, but that’s basically it, so the biggest delta that I’m trying to present, you know, today is the result of a number of discussions with many stakeholders in the whole decimal world, and the—its interactions with other parts of the JS universe. And it’s about those trailing zeros. The—just to sum it up, very quickly, the—one of the main issues is that in the IEEE 754 standard, the understanding of decimal numbers there means that one can have trailing zeros. So in this world, the IEEE world, things like 1.2 and 1.20 are actually distinct values. Also in that world, they compare as mathematically equal, but they are distinct, they are observably distinct. And it took a while, initially when we got started with this, we weren’t really thinking about those trailing zeros. We picked this up from an earlier discussion where this issue of trailing zeros had largely been settled, we thought. But after increasing rounds of feedback, largely coming from the Intl side, we thought that adding trailing zeros and supporting them actually made a lot of sense, and so we spent some time developing the proposal to support those trailing zeros. But one of the main takeaways for me anyway, at the last plenary, things that were—something that was a bit foggy to me but was made clear, is that supporting those trailing zeros in JS, beginning between 1.20 and 1.2 as decimal values actually rules out the possibility of a decimal would ever be a new primitive type, so, again, we’re not proposing that decimals be a primitive type. If you want me to say that many times, I certainly can, but that is not what we’re proposing. I’m imagining a hypothetical future in which we were to add decimals. This is something akin to what JHD was sketching. And in that world, we would have to make decisions about these numbers with trailing zeros, and they’re very unpleasant. So the thinking was, okay, we could support trailing zeros, but that leaves us in a sad state where decimals are just this API object, and we’re not going to been looking forward to a future that JHD sketched. So that wasn’t very nice. There are some nice advantages to having the trailing zeros. But there are some disadvantages too, and this is one of them.

JMN: One of the issues with the trailing zeros is that or even just generally, you might say, talk about what’s called precision or quantum of a number. That’s the official IEEE word for what I’m talking about here. Is that one has to specify how this information gets propagated. So in my examples, I just say 1.20, but let’s make that more complex. And IEE does specify how precision needs to get propagated. So let’s take an example. Just to illustrate that. Let’s say we have something that’s $40 and there’s a sale tax that gets applied, which is 6.75%. You can use your calculator and see that that will cost you $42.70. Okay, that’s what you see on your receipt. But let’s imagine that we take a peek at the calculation internally in the decimal 128 official—official decimal 128 world, well, the press precision of a sum, so imagine we do the calculation as 40 plus and then we do a product 40 times the sales tax here, with addition, the rules say that we need to take the minimum of the two precisions, so we take the minimum of precision of 40.00 and the precision of that product. The precision of 40.00 is going to be -2. The idea being I have a number here with two trailing zeros. And then so it’s kind of like 10 to the power of -2 is the way you can think about that. Then you look at the precision of the product, and that ends up being the precision plus the sum of the two precisions, so again I have my -2, but then I have to look at 0.0675, that has a precision of -4. Oh, there’s a mistake in this calculation, I’m looking at the minimum of -2, and -2 plus -4 actually should be -6, right? Sorry, not -4, forgive the failure there. So actually, the result has quite a lot of trailing zeros in it.

JMN: But, hey, we’re just calculating a bill. We know what the end user should see. It’s going to be 2, right? That’s the thinking. So we do this calculation, we preserve all these—this information, we follow the rules, we get a weird result with a huge number of trailing zeros. But in the end, we probably are going to throw away some of that information. And as you can see here, these rules, you can sit down and try to reason through them and try to justify them. A lot of these things are coming from, say, the accounting world, which has some rules about handling these trailing zeros. This is an insight I got from Mark, thank you. And the challenge here is that there’s no really good theory for these things. I mean, there’s something there. I mean, they are rules to be followed. But if this example puzzles you, then even more complicated examples will be even more puzzling. And you see this is a very simple example. Right? Things get very odd very quickly with this preservation of precision.

JMN: So in discussion, we had this realization about these trailing zeros. Once we’re confronted with the fact this even for simple examples we might have numbers that have lots of trailing zeros that we actually can’t account for, that we don’t want anyway, we realize that the main intention behind supporting these trailing zeros is to make sure that at the end of the calculation, generally, we want to somehow specify how many digits after the decimal point are needed. But in that case, then we may not even need those trailing zeros. We can just impute those extra zeros based on some kind of outthat’s coming from the outside or input that’s coming from the outside. For instance, here, let’s do a calculation that’s complicated as you would like. ABC here. And then we say, well, whatever that result is, maybe actually it’s an integer and has zero trailing zeros or maybe it has exactly two or maybe has more than two, whatever, just give me that thing with two extra digits there after the decimal point. So we could follow the rules, but in the end, we probably have to specify things anyway. The idea that a decimal number in the official IEEE sense is going to somehow thread its way through calculations and in the end, we always get exactly where we want is very, very unlikely, almost impossible, really. Okay, but then we had to go back to the drawing board, and the question for us was could we really drop the tracking of these trailing zeros while satisfy all the use cases? That’s a basic self-check, right? And we handle things like human produce and human consumed numeric quantities like money. That’s one of the very first things that we’re trying to handle here, and I think that’s quite right.

JMN: So imagine that we’re doing some kind of calculator computation, and we get a result, say, from a cash machine that says, well, you have 42.7—you have to pay that. Well, we know that that’s fine. That’s the quantity to be paid. And, okay, we have to impute some kind of extra digit there to get that extra precision, that’s 7 cents 0 cents, not .7 dollars, right? So that still works for us. We’re interested in data exchange in the decimal proposal. That’s also a main driver for us. And we still think that removing these trailing zeros, removing support for a precision is still fine. Although, I will note one thing here, that a loss of trailing zeros could potentially be problematic in some cases. But I’m not sure if that’s really that fatal because that’s already a problem for the numbers that we know and love, the binary floats. And third or tertiary use case for us, just to be a bit sloppy, more precise floats. Something that offers a bit more precision, more digits than we get out of the box with our binary floats, and that’s still true.

JMN: So just to give you an instance of what life would be like without those trailing zeros, if we say that the answer is 42, well, 4 2.0 is going to be equals and what we’re proposing today in this universe to the answer, and if we do some erythema take, we say 42.75 and subtract 0.75. It’s not going to be 42.0 which it would be if you follow the rules of IEE, or even if it is, it’s still equal to the answer. That’s what life would be like without those trailing zeros.

JWK: You mentioned without trailing zeros, 42.0 equals 42, does it not equal to when we have trailing zeros?

JMN: Right, so you’re imagining the kind of—like a previous version of this proposal, where we did support the trailing zeros. So actually, that would still be true, because we would follow the IEEE standard, but there would be other ways to distinguish, say, things like the precision. Imagine that’s a property of the object, then we could distinguish that. There is an interesting word that comes out of the IEEE 754 world, which is this notion of what’s called cohort. And mathematically you can think of a cohort as a set of decimal 128 values that are mathematically equal, but distinct in that world. So there’s 1.2 and 1.20, so with one trailing zero, two and three and so on. And these are all in the same cohort. The proposal, the main diff that I’m presenting here today is that we do not distinguish between cohort members. Maybe they exist internally in the engine. Depending on, say, like the C library that you plug in for decimal 128, but those should not be distinguishable.

JMN: We think that simplifies the mental model. Here we can think of decimal numbers essentially as points on the number line or quantities. Which is probably just speaking to what JHD suggested, I think that’s compatible or the same as what JHD was suggesting. It’s a kind of number, right? We believe that this is also less implementation complexity. I can tell you thinking about the polyfill, it’s going to be not the nicest place to do this comparison, but in the polyfill, it was simplified by removing support for the trailing zeroes and we think this is future proof for a hypothetical future, in which we have decimal primitives.

JMN: The second main given diff that I want to present has to do with motivating cases for the trailing zeros. At this point, you might say, JMN, what about the original reason for supporting those trailing zeros? And I think we found an answer to that. Which is essentially farmed out into a new proposal, so based on discussions with SFC presented also in the 402 meeting, and also the incubated, you might say in the TG3 call, my colleague Nick and I and BAN also are working on a kind of numeric values with precision proposal. This is a work in progress name. I don’t want to get distracted too much by bikeshedding about this. But the idea is to have some kind of new primordial object that would represent numeric quantity, points on a number line, with some kind of precision attached to it on the side. So not part of the number. So this can be useful for display purposes. Think of 1.2 meters and 1.20 meters. In some contexts, those are distinct things. They convey different information.

JMN: An example that has motivated us in thinking about these things comes from SFC, is to think about the difference between saying one star versus 1.0 stars, notice that 1.0 stars is plural. Despite being mathematically the number one, right? And then when interacting with external numeric systems that could preserve this information or want this information, then this numeric value with precision thing could provide that external information to support round tripping, which is something that I hinted at a couple slides ago. It’s something that might get lost when we always just kill the trailing zeros. And some contexts, that might not matter, but in some contexts, it does.

JMN: Here is just a total hypothetical. This is very fresh for us. But we’re thinking about some kind of fractional digits method, name is CBD. I realize it’s quite bulky. But let’s just take a look at that. Imagine we had some kind of number that has a width fraction digits and we have a with fractional digits on decimals too. We could look at valueOf(), we could get some kind of underlying number object and get the fractional digits. Notice that in this decimal with precision we have some kind of type error because decimal primitives don’t exist yet. The numeric object could be the decimal thing. And so on. And we can format these things as well, so it has some kind of integration with Intl. That’s not, I would say, the main thing I want to dig into in this presentation. My main option. Is to essentially announce the existence of this thing as a Stage 0 proposal. And by the way, this discussion will be continued by BAN later on. You might have seen something about measures in the agenda. So the decimal proposal is this numeric values with precision proposal is overlapping with that one, and it’s a bit TBD. Maybe these are the same proposal and maybe they’ll get fused together, essentially. Work in progress. Watch this space. But in any case, the whole point of what I’m trying to say is that this idea for trailing zeros has kind of been off loaded and addressed.

JMN: So I’m just trying to wrap up here. There have been some concerns about decimal that I’ve heard over the almost years now that I’ve been working on this. We believe that we have addressed these. So when I first got started on this stuff, taking over some—from some earlier colleagues and who have done some work on this, initially the idea was from day one, that decimal would be a new primitive type, but we got feedback that this is a bit heavy. We’ve taken that to heart and for quite some time now we’ve downgraded the proposal you might say, so that is now a standard library object. We have removed our support for quantum or precision, if you want to think about it differently, this trailing zeros issue. But that clears way for operator overloading in the future, which is again not part of the current proposal and shall simplify things a lot. I think it’s offering a mental model that many developers probably expect from decimal numbers. Again, this is speaking to JHD’s point. And then with this numeric value with precision thing, we think that we’re also satisfying some of the use cases for trailing zeros coming from the Intl side, and possibly other use case as well.

JMN: So just to wrap up, this can basically go in the notes as the conclusion. So we’ve almost gone full circle, although not quite. We’ve simplified the data model for decimal by removing the support for quantum precision. Intl integration is largely off loaded. Stay tuned there, you’ll hear more about this in this plenary. The spec text is available. Some issues were identified just very recently by WH. I’ll work on that. Polyfill is available, so from where—from where we’re sitting today, we think that we’re essentially ready to ask for Stage 2, but we’re not asking for that today.

JMN: We just wanted to leave some room for discussion. JHD already kicked off some of the discussion about any concerns there. But that’s where we are. So we think we’re kind of epsilon away from Stage 2 at this point. And that’s all I had. I’m ready to take a look at the queue.

SFC: Great, yeah. Thanks for the presentation, JMN. I had another item that disappeared, so I’ll cover that one here too. But I guess my main—I guess my first comment here is I feel like we’re getting ahead of ourselves by trying to figure out, like, the constraints of a primitive type and operator overloading and that type of thing, like, in a world that is at some point in the future, and we should focus on we have now, right? We should focus on building a really good, you know, object that does decimal 128, right, and sort of decouple these things, and the number with precision proposal, like, sort of is a step in that direction, but, like, I think we should really be thinking a lot about, you know, sort of focusing on that now, and leaving open the door for a completely standalone decimal proposal in the future from—by not forcing those invariants, because the things that, you know, MM and JHD and others have said that, like are requirements for primitive are absolutely not requirements for the object, and then it’s it sort of makes the object less capable when objects are, by definition, something that are more capable than primitives can be.

NRO: I think if you wanted to support the primitives in the future, we should. I mean, it’s a world in which we don’t have two different decimals. Where one is just, like, not just—like, the object wrapped around another. Because that is how other numbers in the language. And while today we don’t see a way to have primitives, I would still like to consider that possibility to be realistic one day, and having two different decimal types is just, like, not something that I wish for JavaScript to give us.

SFC: Yeah, I don’t mean to have all my topics right next to each other, but, yeah, I mean, I would like to see these proposals, like—it—I don’t want to be in a situation where we base—like, where like, you know, the champions of this proposal basically said, like, oh, we have this other possible approach for numerics with precision, you can go solve it this way, go, shoo, get out my way, I’m wanting to move—force my way forward with this decimal proposal in a way we know doesn’t satisfy your requirements. I don’t want to be in that situation. I want to be in a situation where we have—where we’re introducing into the language a, you know, well-rounded solution to how you represent decimal numbers, right? And, you know, that—where we really think about the big picture. Because if we—if we force through this weird decimal object thing that’s designed for a possible future primitive, like, you know, like, what does that mean for, you know—for the—the ability to represent precision and other—you know, its impacts on insill. That seems silly on its face. So, like, if we want to move into this direction of having two objects, I wanted to see those coupled. I don’t want to see at some some future stage proposal, I want to see that together in one slide, like, here is how you can do these things, so that’s my next topic.

SFC: And I have yet another topic. Sorry, I didn’t mean these all to be back to back. There were people in between me and they all left the queue, so I have my topics back to back. I apologize for that.

NRO: I can reply first before you move.

SFC: Sure, we have a reply. Okay, good.

NRO: So would you be okay—like, would but okay with having two separate proposals moved together? I believe that the concerns you’re trying to solve for decimal, while overlapping, they’re, like, we need to focus on different aspects for the two use case. So we’d be okay with two separate proposals that move step by step, like, side by side in the process instead of actually merging them.

SFC: I mean, that’s a procedural concern. I mean, if there are two separate proposals, it means the committee could agree put one to Stage 2 and the other one, this is a silly proposal, I don’t any think it belongs in the language. We’re not going to get it to Stage 2. That is why I would be concerned about that.

CDA: I had a reply on the queue, which is that is it fair to say that it’s truly being designed for a future primitive or is it just being designed to not make it impossible to introduce a future primitive? Because I think that’s an important distinction.

SFC: I say that’s a question for JMN, not for me.

JMN: Yes, that’s right. And I take SFC’s point that—as well that this might be a kind of awkward object. But I guess the issue is, then, I mean, yes, I guess narrowly speaking we trying to not make it impossible. But if there’s some other—other elements that we’re missing here, I think we’re happy to incorporate them.

NRO: Yeah, so the proposal is not designed to behave exactly as the object of a primitive. Like, it behaves exactly like the number object, for example, except it has the various prototype methods. In another potential world that was the idea was pushing back against earlier where we have some type of decimal object now, and we say that doesn’t actually preclude us from having a primitive, the future primitive, just a different way. Like, something unrelated. I believe that’s the worldview that you might consider to be just designed to not conflict with a primitive. While the one now, where we—the one I was, like, it’s designed to fit nicely with the decimal primitive.

SFC: So, yeah, my next topic, so, you know, I appreciate that, you know, JMN and NRO have been, you know, trying to assuage my concerns with this over numerics with precision. But I just want to emphasize here, and I haven’t, you know, in my discussions with NRO and JMN and other, I haven’t really heard these topics be addressed, that, like, this the not just an Intl concern about precision. This concept of being able to represent, you know, the numbers with variable levels of precision has many other use cases, and I’ll just list a few here. So one is, you know, when we look at, you know, precedent in other decimal libraries and other languages, it’s, you know, basically the standard that, like, every other decimal or big decimal library you find in another programming language support this concept, and it’s been that way for a very long time. And given that—given that precedent, it means that, you know, I think JMN sort of—I very much disagree with the slide about halfway through that said, like, the 1, 2, 3 with big green check boxes. That’s just patently false, because we cannot round values to these other platforms if we don’t support precision in the data model.

SFC: We just get—yeah. yeah, if you can go to that slide . It’s a slide with three little check box emojis on it. Yeah, this one here (https://notes.igalia.com/p/tc39-decimal-october-2024#/10). Okay, so on the second bullet point, like, might be problematic in some cases is just a—is just a way of saying, it does not actually work all the time. And if it does not actually work all the time, it does not round trip. It round trips or doesn’t. It’s black and white. It’s not a gray area. It does not round trip, that’s just objectively false. So that should not be a check mark. Right? So regarding the first one, human produced numeric quantities, like, you know, the Intl example that you showed shows that this is also patently false. This should not be a check box because it’s clearly false. And, yeah, we could—we don’t have to get into argument about that right now. But, like at least these first two bullet points, like, those are absolutely not check boxes. They should not be check boxes.

SFC: Okay, but going back to some of the other things. So IEEE decimal 128 has precision in it and it defines how precision works, right and we may not agree with how the IEEE standard does precision, how it propagates it, how it uses accounting roles, we may or may not agree with that be we request debate about whether that’s the right decision or not. But that’s the decision they made and that’s the press precedent we should follow. If we want to invent our own, like—by saying oh, we represent decimal 128 except we don’t do precision here and except we don’t do this or don’t do that, we’re not really following any standard, right? If we want to follow a standard for this, then, like, you know, maybe we should go and talk to IEEE and have them release a revision that says here a binary representation that doesn’t have precision because maybe that would be more efficient representation-wise. If you didn’t have to have trailing zeros in your data model you might be able to represent bigger values or something like that. But just as an example, like, by not following decimal 128, but saying we’re going to explicitly deviate from this and go into this other subset, that’s extremely restrictive and it’s not like decimal 128 is super, super widely available anyway on chips and stuff. So, you know, like, you know, what could make the justification that for floats, we need the deal with NaNs are all equal with each other, but with by we still restrict ourselves with floats. This a completely different type of questions because floats are widely available in hardware and there’s a lot of reasons we want to be able to have an implementation apply to them. That argument does not apply to decimal 128. And is last was that precision absolutely does have applications in scientific accounting. There’s been replans the thread with the repository and people saying, yes, I actually need precision. It’s not just—I mean, I keeping about this for the Intl perspective because that’s what I’m officially here for, but use cases outside of Intl are also very easy to come by, so this proposal does not serve those use cases either.

SFC: Now, all that said, I’m, you know, as I said previously, I’m very much in favor of, you know, having, you know, a holistic design, you know, that sort of, you know, if we want to decouple these two concepts, I’m not opposed to having that sort of holistic design. I want to see that holistic design. I’ve seen catches of stages in the proposal and that’s about it. So, yeah, I think that by making this—these changes, we’re sort of, you know, taking this proposal, this decimal 128 proposal sort of away from what it was originally proposed to do. It no longer is able to represent human produced numeric quantities and no longer able to participate in data exchange. It can still do more precise floats, exercise is great, but that’s the use case that was lowest on the list when I saw this. The numerics with precision proposal, if we see it as one big picture covers the use case if we see them together, and that’s why it’s important to keep the processes together.

CDA: All right, just noting we’ve got about 15 minutes left. There’s a reply from NRO.

NRO: Yeah. So actually I kept it in the queue moving and I want to reply different to SFC here. One about deviation from IEEE 754. The only deviation here is they’re exposing less info. For example, the equality within the spec already, it’s the number of trailing zeros, and the only thing we’re doing here is avoid exposing that precision to the user. The way operations work, the way numbers round, like, we don’t have infinite precision here. So addition to numbers will round, and that will also round exactly how it’s defined at IEEE spec. Regarding the slide with the three check marks, yes, you’re right, this should have been a somewhat yellowish check mark. There are many cases where you actually do that exchange and talk about money is and do not care about, like, with exact precision number, because very often you are, like, working with some fixed precision, you’re working with dollars, you have fixed precision of two decimal digits. But it is true if cases where you do care about precision as defined by, like, about a number of years, in this case, this proposal does not cover it.

NRO: Yeah, and that’s kind of like what we tried to get at with the first slide of the numeric values with precision idea. And that –

CDA: Sorry, YSV. YSV is requesting that we advance the queue rather than adding replies.

PFC: This topic is a reply, so if you’d like me to put it as a separate topic, I can. Otherwise, I’m going to reply to SFC. A 'number' and a 'number with precision' are two different data models that serve two different purposes. For some applications, you need a number, for some applications, you need a number with precision. It’s not the case that some object with the data model of a number is 'secretly' a number with precision, but missing the precision. That’s not how it works. There’s nothing inherently wrong with Decimal having the data model of a number and then having some other object to represent a number with precision. As for propagation of precision, that depends also very strongly on your application. Before I worked in software development, I worked in physics where I can think of, like, two different procedures for error propagation right off the bat. Which one you use depended on what you were using it for. I believe neither of them were the same as the one in the IEEE scheme that Jesse presented in the slides. So I think for me the most useful thing here would be to have something with the data model of a number which you can then add precision to, tailored to your own application.

WH: Quickly addressing a few of the prior points: This very much is IEEE 754 spec. It’s just that we don’t expose all of the IEEE methods, and we never did, not even for Numbers. IEEE has global mutable state in it — global flags and rounding modes. We never exposed those, and that’s fine; that’s a reasonable thing for a language to do.

WH: Now, I’ve done yet another extensive pass over the Decimal proposal and identified a few dozen issues. Some of them will require a bit of work, but none of them are controversial. But my main impression is that this is now *so much simpler* than the proposal was when it had support for quantums. The proposal is way shorter, it’s way simpler. Weeks or months of work and arguing about edge cases has just completely gone away. So I’m really happy with the simplification.

YSV: So I was the one who was adding stuff to the queue and then taking it off repeat lead because I wasn’t sure if I should say it or not. I was watching the slides and thinking, okay, I think they addressed this, okay, maybe not. We—the general standards community at Mozilla has been having some concerns about how much display logic Intl has been taking on. And potentially without enough coordination with other parts of the web platform. So when I saw that you had decoupled the display logic from the behavior, let’s call it that for now, of how decimal works, this was actually a positive in my perspective, and it allows JavaScript to, like, you know, the core of JavaScript to focus on making decimals available to really wide number of potential consumers. Now, Intl is currently limited to browsers, and we could also—well, not limited, but browsers are the main implementers Intl. It’s not necessarily available in other JavaScript runtimes. Having a relationship with that is better, all though, I would say that doing this work, we should be really coordinating more with standards bodies in W3C in order to make sure that we are taking into consideration the things that they’ve come across and the work that they’ve done making human readable and consumable data types available. Because there has been a lot of work in that space.

YSV: I would say I would be opposed to this prose building if it tried to land human produced and human consumable numeric quantities as part of JavaScript core. Rather than as something that is sort of delegated to a space in between, because JavaScript is just available in so many different places.

AKI: If you want help figure out how to make that communication happen. I can absolutely facilitate that.

MM: I’ll speak for KKL since he cannot unmute. The proposal rightly decouples value from display, allowing a wide variety of propagation systems rather than making one default king. And to expand on that, there’s—and this also expands on the comment earlier about use of numbers with precisions in physics. Is there many different notions of propagating precision or error bars, and the—which one to choose really depends on what you’re using it for. So I think that first of all, I would not like to see any one number with precision be put into this proposal. I think that’s really too much coupling. So many of us have stated good reasons to keep it separate, but I think in addition, the fact—there’s a mechanism and policy separation. By keeping it separate, we allow multiplicity of those things, and we allow user definition of those things. So I don’t—so other than allowing the possibility, I don’t see a reason to couple them.

SFC: Yeah, just to respond to YSV’s point and also some things other people have said. To be clear, I agree that I think that these are sort of, you know, two different concepts, like a numeric value on the number line versus, like, you know, an upgraded numeric with precision and other attributes on it, I agree throws are two different concepts, and those could be two separate objects in JavaScript. Like, that’s fine. I’m aligned on that, and I have been clear about that. You know, that’s my, like, you know, NRO’s, you know, Stage 0 proposal seems like, well, that’s maybe a reasonable direction to go in. It’s just, yeah, I mean, you know, I’m here because, you know, Intl is a 402 thing. It’s not a web WC3 thing. This is the body that standardizes these things. You know, to Temporal is, you know, a great example of, you know, we really engineered that to be the input type for, you know, Intl logic, and I think we’ve done a really good job with that. And the web platform currently lacks, you know, a number type, a numeric type that’s actually appropriate as an input for Intl, and we listed out the reasons on the thread. And, you know, this is the—like, this type, you know, has been, you know—we should have that type in the JavaScript language, and, you know, it’s not just a WC3 thing, although I do definitely do think we—although I think we should be having more collaboration, because it would be nice the, for example tie this with, you know, a number picker or thing or other things like that. It would be nice to tie the Temporal things with date inputs and things like that in WC3. So I do definitely think there should be more collaboration here, but I don’t think the argument of, oh, well, this should be a WC3 thing, therefore it shouldn’t be an ECMA thing really applies, because ECMA is Intl, Intl is ECMA.

YSV: I didn’t say it shouldn’t be an Intl thing. I said we should be collaborating with WC3 more, because there hasn’t been enough collaboration. Two proses you listed, for example, Temporal, didn’t have any communication with the author of the time element in HTML, where we really should have done, that because that person also has a lot of knowledge and experience, and in addition, making those two—two interoperable will mean that people who aren’t using JavaScript will be able to benefit from the things that happen in Temporal. The same thing applies here. Like, the fact that there is no appropriate number element doesn’t mean we shouldn’t potentially taking some of our learns collaborate with W3C and get that into HTML. In fact, that’s a reason we should be doing that type of collaboration. By moving that logic into the content layer, that means it’s available to place no that are not just necessarily JavaScript based.

CDA: Okay. That’s it for the queue.

JMN: Okay, great, thank you. This is fantastic feedback that we will try to incorporate into our next presentation. I think many of these points can be addressed. For instance, I think probably this—when I think about the slide here that’s up, and the idea that we’re talking about producing human consumable, numeric quantities, I wonder if this is the best way of putting. I think perhaps more pressure should be put on the idea of exactness, so that is really a property of numbers here, which is probably an umbrella or a cover of what we’re trying to produce there in the first point. In any case, that’s my job to take in input. Thank you very much. Happy to discuss this further in the hallway tract if you like. You can take the conclusion slide or I can do that and put that in the notes. No need to do that here. Oops, there’s a new topic.

SFC: Yeah, I just warranted to fully with what you just said Jesse. Stating the goals extremely clearly, which you have done in the readme, by the way. It’s super important here and sort of thinking about what proposal solves those use cases I think is super important. If it’s about exactness, great. Like, I think it’s extremely clear—I think it’s extremely important to be clear about that. And I think, you know, I’ve noted previously that something like numerics with precision has a very easy path to be able to represent exactness. If that’s really the goal. So, you know, like, I think, you know, we need to be—I think it’s really important to take a step back and sort of say, well, what are the goals here? We've been focusing—I feel like we’ve been focusing very narrowly on decimal128 as, like, the only way to solve this problem, but there’s other ways to solve the problems too. And we really need to be focused on what’s driving this and not just on this one solution we want it to move forward. Thank you.

### Speaker's Summary of Key Points

- Decimal remains at stage 1
- Support for IEEE 754 quantum/precision has been removed (mathematically equal IEEE 754 Decimal128 values will behave entirely the same way, though with different object identities)
- The Decimal champions propose a spinoff proposal for “numeric value with precision” that can address different ways of encoding precision
- The decimal champion group believes it is close to asking for stage 2

### Conclusion

- Feedback was expressed that it is unclear whether the current design, with canonicalized decimals, meets the stated needs of the proposal.
- The champion group will iterate on the current design and clarify the relationship between it and the newly proposed [measure](https://github.com/tc39-transfer/proposal-measure) proposal.

## ArrayBuffer construction step order

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/ecma262/issues/3388)
- (no slides)

RGN: So it turns out that ArrayBuffer construction is surprisingly intricate in how it deals with two arguments and a bit of NewTarget constructor information. The algorithm walks through the ToIndex consumption of byteLength, ToIndex consumption of maxByteLength (when provided), and then goes through some construction steps before revisiting the byte length and the max byte length for final validation. So by my count, we end up with at least eight possibilities for abrupt completions that terminate the operation with a thrown error. ToIndex really obviously when the type doesn’t match or toString/valueOf/Symbol.toPrimitive throw for both byte length and max byte length, and for maxByteLength the options object may throw on Get. So this is early argument processing of the sort that I think we generally like, although when I went looking for the past conclusions in how-we-work, I couldn’t find them. I don’t remember exactly where that effort fell.

RGN: But proceeding on. In the AllocateArrayBuffer construction step, it checks that the maxByteLength if it exists must be greater than or equal to byteLength. So this is still early argument validation that throws if something doesn’t work out. Then we get into OrdinaryCreateFromConstructor which starts to deal with things like “can I Get a prototype property off the constructor? Is it a revoked proxy?”. Errors here can come up in the case of subclasses or Reflect.construct. Then assuming OrdinaryCreateFromConstructor succeeds, now we revisit byte length and max byte length to validate that there’s enough memory on the system and available to the process in order to support them. So if byteLength is too big to instantiate a Data Block, we get a RangeError way down here at the bottom of the algorithm. And then likewise for maxByteLength. So we’re processing the arguments up front, then jumping into some constructor-oriented steps, and then down at the bottom again processing arguments. This is how it is specified. I think it’s a little bit messy. But if we want to go with it, that’s fine. However, implementation reality is that we’re mostly *not* going with it. So I will switch now and look at actual behavior which is basically that only SpiderMonkey got it right at time of writing, since expanded to include GraalJS and Moddable XS.

RGN: Graal, XS, and SpiderMonkey get it right. JavaScriptCore and V8 at different points are reading maxByteLength when they should be throwing a RangeError about byteLength. Hermes is throwing the wrong kind of error from checking NewTarget before byteLength, and engine 262 and QuickJS are not reading maxByteLength when they ought to. So we have five different cohorts of behavior, of which only one matches the specification. One thing that I’ve worked on in order to produce this data is a push for better ability to cover it in Test262. I’ve been working in that group for quite a while in trying to sort out how we get through these sometimes complicated algorithms in order to validate that we are actually covering all of the normative requirements including step ordering. That will be coming at some point in the future. And this is kind of highlighting the need. But it’s also an opportunity in the case of the specific algorithm to revisit—are there any normative conventions that we can apply? Are we happy with this? Do we want to perform it a little bit differently? And just in general, is this a stepping stone to those kinds of conventions that we really want? So I will go back to the browser window again. And basically open it up to the queue for commentary. I’m okay if there’s not a firm conclusion on this. But I did want to draw attention to the specific example of a possibly general problem that we’re thinking about in Test262. I see that SYG is up first.

SYG: So I just got lost in the example that you showed with JSC and V8 from this numbered example. Which step do they deviate from?

RGN: All right. So this is unfortunately going to be hard to read and I apologize. But let me see what I can do. Actually maybe I can copy this into a web editor, that might be the way to go. All right. Bear with me for just a minute.

SYG: I think it will be more helpful for me to see the actual test. Like, I don’t know what is printing those things?

RGN: It is not as mature as it ought to be yet. So what I’ve done is create a test using collections of cases ordered by the errors they should cause. You know, what are the expected points of user code execution and then what is the expected result? So first, byte length iterates through a sequence of invalid values and then valid ones. Likewise for the requested max byte length and then as the test runs through the values it captures a log and the resulting error. This is the kind of pattern that I want to introduce into Test262. And the result is that as we’re iterating through those values, we end up seeing where implementations jump the gun. So in the case of V8, when we provide as byteLength a value with a `Symbol.toPrimitive` function that returns a number too big for an index and as options a maxByteLength getter that throws and as NewTarget an object for which getting prototype throws, we expect that we see a Get of the `Symbol.toPrimitive` from byteLength followed by a RangeError from that function returning a value that is too big to be considered an index. Per the spec algorithm, we shouldn’t get to any interaction with maxByteLength. But what we see in V8 is that after reading the `symbol.toPrimitive` function for byteLength, rather than immediately invoking it and validating its output, there’s a read of the maxByteLength property off the options object. Does that make sense?

SYG: I see. So this is showing that the range check in to index is not throwing as early as the spec says it should throw?

RGN: Correct.

SYG: Got it, thanks.

RGN: And then in JSC, the first failing case, when the byte length is a `symbol.toPrimitive` that returns negative infinity and the max byte length and new target are throwing, what we expect to see is actually exactly the same situation, the negative infinity return by `Symbol.toPrimitive` should result in a RangeError because it’s not a valid index, but instead we’re reading maxByteLength first. So they don’t fail at exactly the same place, but it is the same kind of failure. And this is something in the engine internals that we can investigate and I want to see this coverage in Test262. But having the discrepancy allows us to address the algorithm... I want to see argument processing up front and put 7 and 8 after 4 or potentially before 4 just to have a general pattern where we deal with arguments completely before moving downstream. But maybe this existing spec really is the way we want it to be. We do have three implementations that conform with it.

CDA: We are nearly at time. MLS, can you be brief? I see you’re unmuted but we cannot hear you. We still can’t hear you.

RGN: The topic is actually—I’m going to pre-emptively answer and then if we get MLS, so much the better.

RGN: JSC and V8 deviate in similar ways but not identical ways. I don’t remember which one comes first between these two test cases, the returning negative infinity versus returning too big. One gets it right and one does not. But then farther down the line, the other also gets it wrong. Similar but not identical.

CDA: All right. We are at time. I don’t know if you noticed in the queue OMT is asking for the JavaScript file. So maybe you can follow up with him.

RGN: I will be posting this as a Test262 PR with this case in mind.

### Speaker's Summary of Key Points

Implementations differ in the ordering of property access, type casting, and bounds checking for the ArrayBuffer construction algorithm, as reported by [ECMA 262 issue #3388](https://github.com/tc39/ecma262/issues/3388)—although some of them do accurately follow the spec. This divergence was not caught by Test262, due to general gaps in the patterns used to verify step ordering. The committee declined to change the specified behavior, and will instead push for implementations to conform with the existing algorithm.

### Conclusion

The semantics of the ArrayBuffer constructor remain as currently specified. Test262 maintainers will consider new patterns for increasing coverage of such cases.

## `Promise.try` for Stage 4

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-promise-try/issues/15)

JHD: All right. So as a reminder, this is `Promise.try` and takes the callback function and variable list of arguments that are optional. It just invokes the function and then if the function throws, it gives you a rejected promise. If the function returns something, then it promise-resolves that. This proposal has an approved spec PR, it is implemented in Cloudflare Workers and bun and node and Chrome and it is in Firefox behind a flag in version 132 but in 133 and 134 I believe will be unflagged. LibJS and Boa and Kiesel have it implemented and WebKit has it is behind a flag, and has removed the flag. Hopefully we can get Stage 4.

CDA: The queue is empty.

JHD: Anyone want to affirmatively support this?

CDA: Lots of plus ones with NRO and OMT and YSV is plus one.

JHD: I will take it.

CDA: LGH says biased after doing three of those impls but plus one. And RKG with a “whee” and MF with “meets the requirements”.

JHD: Thank you.

CDA: KM with the plus one. I support this as well. Do we have any more whoop or yeehaw or? We have WH plus one. KM. Tom as well with a plus one. All right. I mean, pretty close. But you got over the line.

### Conclusion

Congratulations on Stage 4.

## Explicit compile hints

Presenter: Marja Hölttä (MHA)

- [explainer](https://github.com/explainers-by-googlers/explicit-javascript-compile-hints-file-based)
- [slides](https://docs.google.com/presentation/d/1X1k-rzMlqLS3MC-pgogVJZqPTIfUyLIo7H4TOFhCStg/edit?usp=sharing)
- [spec draft](https://explainers-by-googlers.github.io/explicit-javascript-compile-hints-file-based/)

MHA: Hi everybody. I’m MHA from Google and will talk about compile hints and they are in the JS code and which functions would be eager and lazy. I will tell you in a minute what it means. This is part of the real world web performance work and one insight on the work is parse and compile times are a significant proportion of the cold page load time, when the JavaScript file is not in the cache. Not seeking to standardize this in TC39 as it doesn’t change JS semantics. But I wanted to inform you all, this is something we plan to do. So some background information about lazy and eager compilation.

MHA: The idea of lazy parsing / compilation is to do minimal work until the function is called. When we are compiling the script, we need to preparse to find the function end, and this is kind of nontrivial in JavaScript and we can’t count parens or anything like that. We need to parse the full syntax. And in V8 that is done on the background thread and interleaved with the network load. If the function is then called, then we need to do the work and parse the function and compile the function and we need to execute the function and all of that has to happen in the foreground thread because the foreground thread is waiting for the function to be called. At that point we can’t really do much else. And eager functions are the opposite where we do the work up front so when we are compiling the script, we actually parse and compile the function. Again in V8 this happens in the background thread interleaved with the network load and then when we call the function we only need to execute. That still has to be in the the thread; we don’t have background JSexecution. The default in all browsers is the functions are lazy. This is because websites ship a lot of code that is not needed at least not during the initial page load. It might need it later, iIf the user does a certain interaction, or it could be completely unneeded. So this is kind of the web reality. The browsers have to be lazy or otherwise the performers would be really bad and all browsers do that by default.

MHA: And it actually matters which function we peek for eager compilation. I did an experiment and loaded the Web page and recorded which of these lazy functions were actually called. Then I load the page again but this time I compile those functions eagerly and then I measure parse and compile times, foreground and background. I did this with 20 popular Web pages. There’s the link in the slides if you want to read more. And almost all, 17 out of 20 pages improved, the average improvement being 630 ms which is 74%. of the foreground parse and compile time. We add time in the background and but is propositional. We don't want to decrease foreground time by adding an unreasonable amount of background time, but this is not the case here. Two pages are so dynamic that compile hints don't help. They use patterns where the JavaScript they generate is somehow unique and the JavaScript filenames are unique. We just don’t recognize any functions during the second load. This doesn’t mean that compile hints wouldn’t work for those pages. This means this experiment set didn’t work. You might ask what is the remaining page? The remaining page is the page that doesn’t have that much JavaScript in it. It was a popular Web page so I included it.

MHA: We also did a prototype experiment with Google docs where they just select the core file for eager compilation, just the whole file. They report their user page load metrics improve around 5%. They have many different metrics and percentiles of the metrics. I wanted to add one number of the slide that is representative. And that’s like 5%. These are userland loading metrics. They are related to when the web page is sort of loaded enough or visibly enough and things like that. So the previous experiment was about selecting functions and this prototype is selecting the file, the whole file.

Another useful piece of background information is the PIFE heuristic. We have the immediately invoked function expression where we have a paren, the function body and the call. This function is immediately invoked. PIFE is a potentially invoked function. We have seen the parent before the function. And at that point we need to make the decision: do we eager parse this or lazy parse this? We don’t know whether it’s actually called. We saw PIFE potentially invoked. Chrome and Firefox treat PIFE as eager and eager parse or compile it. Safari doesn’t. And developers are sometimes using this heuristic for forcing eager compilation, there is precedence of doing this. This is not great. In particular we can’t add parens to methods. And it forces using function expressions rather than function declarations. If you want to not call the function but want to have it available, you need to do let A equals and then the function. This assignment typically has the run time cost and we need to do the assignment during run time. And really just a huge hack to use PIFE to force eager compilation. Still developers are doing that.

MHA: Question at this point why don’t we just cache better? The caching we mean caching the compiled JavaScript code. All engines do this. Some of the benefits of this project can be achieved with better caching but not all. In particular the cold loads when the script is loaded and we don’t have it in the cache we can’t do anything. A relevant amount of script loads are cold. Depending on how you measure, this is around 15%. Some Web pages update frequently. Some update once a day or more than once a day and that means the user gets the code version at least daily or more. Some use uncachable code patterns and generate the code on the server side. And also caching inline scripts is hard. So if you have your JavaScript embedded in the HTML page and something changes in the page, it’s hard to reason about whether the script changed and if the cache is still valid or not. It’s just difficult. It’s also difficult to find optimal time for creating the cache. We might cache really early and the cache would be smaller but not contain as much functions needed for potential user interactions. Or we might cache really late so that it’s more comprehensive and bigger and contains things that the user just did during that page load but doesn’t do during the next visit, so it might contain unnecessary things.

MHA: And one interesting thing we found working on this was that Google docs was telling us that many people load the doc in the background tab. And might be difficult just to write the cache in that case because the background tab loading might be a different code path. So if we have the background tab, Google docs load and try to generate the cache, it might not be representative if the user then loads it in the foreground the next time. And this is a really interesting insight because this is something that we would never have figured out based on benchmarks. Like, it would never occur to anybody to write the benchmark to exercise this scenario unless the web developers told us this is what happens in the real world.

MHA: So before this, we worked on minimizing the cost when we get the eager and lazy decision wrong. There’s the blog about it if you want to read more about how we did it. We also improved caching. In particular we create compile hints so we cache information about which functions were called and then use the information. But we couldn’t quite get the same benefit as we could with explicit compile hints approach. So at this point we think it would be useful to have a developer signal telling us which functions should be treated eagerly and which not.

MHA: And the plan is not set in stone, is it’s more like we want to do something along these lines, to do it with magic comments in the JavaScript file. First get started with the version that is marking the whole file for eager compilation because web developers tell us this is easy to get started with and might have a natural core file they should mark already for example. But in the future, I want to be able to add the hints per function basis. So here the plan to have something that encodes the position information for the eager functions. For example, add in some encoded format in the magic comments but the exact format is not planned basically at all at this point. We also considered alternatives to doing this information as the magic comments. So use eager, we could have used an eager directive at the top level or before a function. But the down side of this approach is the source code bloat is pretty big especially in the function version. For the network transfer would not be so bad because it’s basically compressed away. We still need to parse it and process it in the parser. That’s not really doable. We also considered transmitting this data in HTTP header or script tag and then the feedback about this approach was that this gets out of sync with the source code easier than if actually in the source code.

MHA: So we assumed this works so that the web developers use profile guided optimization to figure out which functions are needed. Select for eager compilation and then for file based compile hints might construct a core file and mark that for compilation. With per function compile hints, they can add the per-function data directly. So for the web platform, this is probably going to be a chromium only feature first and just want to keep it generic so that other browsers can adopt it later if they want to. We got good feedback and discussions with other browsers during TC39. We don’t have a plan to create a standard for it and it should be always allowed to ignore the compile hints. They are just hints and don’t enforce anything. It’s really hard to standardize anything like that because lazy and eager are just like implementation detail. It can’t really easily standardize that the browser has to do background compilation for example or compile in a certain way. Also removing compile hints from the web platform is compatible. At some point we don’t want this anymore, the browsers can stop following the hints and then web developers will stop using it.

MHA: Obvious risk is that the web developers are over using this just like the user sort of eager compilation directive to everything which is not a good idea. And at that point like the risk is the engines might need to start ignoring it if they can’t trust it. It’s an interesting question, should we prevent people from shooting themselves in the foot with this or not? Philosophically and practically? Another question is will there be optimal set of hints that apply to all browsers? Will the developers in the position to hint for certain set of functions for Chrome and Firefox? Might not be the case we want to be in. All apply to PIFE hack and we have precedence with Web page that wrap everything in parentheses. And arguably easier to do this than wrapping all the functions in parentheses. So this was just like just to inform you that we are planning to do this.

MHA: There is not super much time for discussion. There is some. We are ahead of time, I guess. But there is like you can reach me via email and link to explainer and we have the proposal in WICG also. We have time for comments here also. I can’t see the queue.

WH: I read the spec and I’m a bit worried that this just introduced yet another pass — per the spec you have to do a full pass to search for the magic comments before you start parsing anything. I assume it’s not what we want to do here, right?

MHA: Yeah, definitely not. It’s just like specked that way because it’s easier. But practically, it would be done like as we parse. Like, definitely the intention is not that if there is like a comment somewhere at the bottom of the file that the top would be eager. We can’t do that in V8 with streaming parse. We haven't received the bytes and the whole file from the network that we need to parse. We need to spec it in a way that those already suggested to spec it in the way that it has to be at the top of the file. But, yes, definitely the intention is not that it applies to the part above the comment.

WH: It currently sets state derived from the comment regardless of where the comment is in the file and then the state applies to parsing everything in the file. I’m glad that’s not the intention.

MHA: That’s not the intention. I guess my intention was to write it in so it has to be the first thing and then I just got it wrong.

MM: I think this is fast. You seem to strongly be implying and I want to verify explicitly that the intent is the hints cause zero observable difference?

MHA: Yes, exactly.

YSV: I’ll just bring up a conversation that Marja and I had yesterday that not everyone heard yet. When we looked at this, our thought was what would be better is to have facts stated rather than actions. So eager compilation might be more beneficial for Chrome for some functions than for a different browser whereas if we have facts and we can understand those, we can optimize differently depending on what we’re doing internally.

MHA: My reply to that was that it’s compatible. To express things as facts are not directions is fundamentally compatible with my idea and work together to make it so.

KM: I guess to the point of—I have to go back to the queue. Caught on first load instead of eager compilation. Another thing that I brought up which we already talked about is that—I want to relay to the rest of the committee right now allows slash slash at and slash slash pound. I think we should just pick one. Seems like slash slash pound was the agreed upon thing. I want to make sure that everyone is aware of.

MHA: Yeah, exactly. The intention is only to allow //# and //@ was left over from source map where this was copied from.

NRO: This is not strictly related to this, but I don’t know if you seen it the third proposal that is deferred execution of modules and I would expect that in this kind of lazy compilation and parsing would imply that? If I brought the fair module you do your pre-parse phase and then skip everything else? I guess even if it contains some comments about eagerly compelling some functions inside of it? I wonder if talking about how the proposal fits into this.

MHA: I don’t know that much about the deferred module proposal, but I think it’s a fair assumption that it will be—it will imply lazy compilation because lazy compilation is the default anyway.

YSV: I also agree. I had the same thought this might be interesting to see how it combines with import defer because import defer is also a hint to try to delay work if it’s not being used right away. You can undermined that attempt by in line immediately using the function in the main body of the script, but the idea is you won’t execute until that function is actually—you won’t execute the module until the function is actually called. It doesn’t work for classic scripts so it’s more limited than this.

MHA: Right. We need to think how these combine and put the eager directive inside of the module, what will happen? Is it allowed?

CDA: JKP noted that also deprecated //@ in hidden source maps.

NRO: Just for context about that, it was just historically supported in the first original implementation of source maps. But then was quickly removed like quickly to hash because the at didn’t work I think. And nobody in practice uses the at anymore. You might decide to consider not repeat user of at for magic comments.

CDA: Oliver is plus 1 starting conversation with magic comments.

RPR: So I’m a big fan of this proposal and exploring space. I think that there may have been an assumption on one of the first slides that because this doesn’t impact the precise run time functionality, therefore it was not in scope of TC39. I think we have a very broad scope when it comes to JavaScript and the related ecosystem and in particular with TG-4 and the source maps already defining some of this category of comments. I think this could be relevant within TC39 if that was of interest.

MHA: There is some precedence in like standardizing which are not mandatory to be followed in other standards.

CDA: There is plus one from PFC. Plus 1 on TC39 from KM. Do you want to elaborate on that?

KM: I don’t know. I feel like as a developer of a JS limitation and having it as part of, you know, whether it’s normative or not, part of the TC39 ecosystem is beneficial. That said, obviously since it’s not observable, there’s no requirement to do that. But I think it keeps everything consistent for people looking up and trying to understand the ecosystem and stuff. And I would hope also to collab on that since non observer I would hope that the bar for adding it as a nonnormative note is much lower and reduces the friction.

DE: I agree with others that this is in scope for TC39 if people want to propose standardizing it here. I wanted to ask, when should JavaScript programmers or tool developers write this hint? It’s not just the “go fast” button. Should tools use some sort of heuristic, to figure out when to apply it?

MHA: I didn’t quite hear the question. You were asking when they should write it or how should they write it?

DE: Yeah. Like how should you decide whether to use this hint? What advice are you giving to JavaScript developers?

MHA: Right. So with the PGO, I would assume that it’s something like you figure out relevant workload and maybe the relevant workload is loading the Web page or loading the Web page and doing common interaction with it and then figure out which part of the functions are called during the workload and basically just adding all of them is beneficial. Because those are the functions that are anyway going to be called. So they anyway need to be parsed and compiled. Better to do it eagerly. That is sort of my rough idea how to do this in the first step.

YSV: This is basically just what Marja said and go with facts instead this makes it obvious to do tooling and it reports facts –

MHA: Important point. We don’t expect developers to write things by hand. For the ease of the use and just to make the project easier to get started with, we have the thing to mark the core file with a per-file comment and go with the per function version and there the developers need to use tooling to go at the functions. Typically in the order of thousands of functions that should be annotated on the Web page. We don’t expect performance benefits if people hand annotate them, so they should be using PGO and tooling.

### Speaker's Summary of Key Points

MHA presented a planned Chromium feature where we enable web developers to attach directions about which functions should be eager-compiled by the JavaScript engine. The feature doesn't change JS semantics and is not observable. The presentation contained performance measurements to motivate the need for this feature.

Discussion: WHT pointed out a spec bug; the intention is not to add a preparse pass for finding the comment if it occurs anywhere in the file. YSV suggested formulating the information as "facts" instead of directions. KM pointed out allowing //@ (which is unintentional, only //# should be allowed). Various people expressed that this would be in scope for TC39. Various people expressed interest in the feature.

## `Atomics.pause` for stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-atomics-microwait)
- (no slides, just spec)

SYG: This is a very short in the theme of hints this is basically a method that checks if the input is on the fine or integer (?) but quickly go over the motivation and go over where the current spec draft is given the discussion we had last time about this hint parameter and how to control it for different kinds of spin weight loops.

SYG: The motivation for `Atomics.pause` is that it’s basically emscripten and could benefit anything that does a busy loop but there is a very big user of busy loops on the web today and that is emscripten. Because we made the choice to not have blocking weights on the main thread, in order for emscripten to implement pthreads and mutexes…

SYG: Emscripten is a tool chain that takes C++ and implements Wasm. The Wasm doesn’t do anything by itself like JS by itself and to have IO you have to hook it up to stuff. When you hook it up to the web platform emscripten has a standard library and basically implements pause stuff and pthread mutex and pthread condition variables and that kind of stuff and as part of that implementation, Mutex may block when waiting to be acquired and on the main thread we can’t put the main thread to sleep because that would be bad for UI check and instead what it does is it does a busy loop. Currently does this literally busy loop of a forever loop.

SYG: This forever loop is bad for performance on some architectures. I don’t know the details of many architectures. I believe Apple folks last time told me this doesn’t really matter that much on modern Apple chips. But it matters on X city (?) chips and the manual recommends if you need to do a busy loop while waiting for a value to change like, “is my lock acquired?”, you should hint the CPU that you you are in such a busy loop so that certain parts of the underlying CPU can be better unlocked basically to check that—if that bit has changed. It goes down to how the CPU is designed and reads memory and that kind of thing. So many languages expose the ability to hint the CPU that you are in a busy loop via some kind of intrinsic.

SYG: I’m proposing the same here for JavaScript in order to make the emscripten use case in particular more efficient and faster. Other folks have told me that they would also use this if it existed react for some reason, I don’t remember what, but I guess they also have a busy loop or something, game engines would benefit from this.

SYG: So this has no observable behavior other than checking its input parameter that I will get into soon. But the purpose of this method is that it hints the CPU that “hey, I’m in a busy loop”. Or otherwise has no observable behavior and always returns on the find. It ought to pause for an exceedingly short amount of time, like, not in the microseconds. A few cycles basically, a few CPU cycles. It is not really a blocking weight in a realistic Sense, so it can be called on the main thread. And it takes input parameter instead of nothing because spin loops often have a backoff algorithm built in. What kind of backoff algorithm you want to use depends on the use case. You might have exponential backoff in positive or negative direction. Meaning you might want to wait progressively longer and longer and start with the longest way and wait progressively shorter and shorter. In a language like C or C++ the way to do it is just emit more calls to the pause intrinsic. That is not a good idea for JavaScript because the amount of time is so short and the performance characteristic of calling this method in the interpreter is so different interest when in inlined in the JITs and we always—basically because the execution time of calling `Atomics.pause` is so variable depending on which execution tier you’re in, it doesn’t work as well to spec this method to take no parameters. Like, that works for C++ because basically a function call takes the same time. There are no multiple JIT tiers in C++, and in JS VMs we do. Instead of emitting multiple calls to pause depending on how you want the back off behavior to go per iteration of the loop

SYG: I’m proposing that we pass an optional parameter that says “what iteration of the spin loop I am in”? And the idea here is that by passing in an iteration number, then the engine can take advantage of whether you are in the optimizing tier JIT or interpreter to decide to use that number to emit the optimal number of pause instructions on the underlying CPU. So that’s why this parameter exists. To encode the various different kinds of back off that you might want to express, there’s this sentence here. So the idea is that when you pass in a loop number, that is not undefined, because it’s optional, if you pass something in, it determines how long it ought to wait. Of course, this can’t be unbounded. The idea is that the underlying implementation will cap it at something. Again, an exceedingly short amount of time. At most like tens or hundreds of cycles in the CPU. And the larger the number that you pass in, the longer time it waits. So if you want to do linear back off, you can start off with zero and then pass one, two, three, four, five, et cetera. And if you do exponentially you pass in exponentially growing loop numbers. You can also pass in negative numbers, meaning if you want to start with the longest time and you want decreasing amount of wait per loop, you start at zero and then you pass like negative one, negative two, et cetera to get smaller and smaller numbers. You can go either direction.

SYG: There’s one catch here which is that if you start say with one and go down to zero and negative one, there is no good relation between one and negative one. So you can’t really like cross signs to implement your backoff algorithm. Of course you can pass it, it doesn’t really do anything. But underlying the implementation is probably not going to do the back off algorithm that you think it does. So that’s basically the only catch. And, yeah, this is all the spec text. The only observable step is the first one which is the argument validation that throws if it is either undefined or an Int number. Or otherwise returns—it does the pause thing and returns undefined.

SYG: That’s it. I have tests in Test262. I think as JHD mentioned on the first day during the Test262 update. So with that, I would like to go to the queue before asking for Stage 3.

RPR: Queue is open for business, if anyone would like to go in it.

DE: Really glad that you’re bringing this proposal through TC39. You’ve iterated on the editorial aspects, and we all seem to agree on intent so this seems good to go.

SYG: Thank you.

RBN: I admit to having some interest in this due to its very useful for implementing spin waiting and lock free algorithms that come in handy with construct shared proposal and very interested to see it advance and I very much support Stage 3.

SYG: Seeing empty queue, I would like to formally ask for Stage 3.

RPR: We heard two messages of support. Question from KM.

KM: Sorry, yes, how does negative work? So the idea is that negative N would be the shortest possible time?

SYG: That negative like the smallest integer.

KM: Suppose my engine –

SYG: The shortest time.

KM: N is the upper bound on the wait time. Do you pass negative N?

SYG: Yes.

KM: Are you expecting that to be like the longest backoff or the shortest backoff?

SYG: The shortest backoff. It’s always larger the N, the longer the wait. But the expected use case is that—like, it’s harder to count—okay. How did we get here? How we got here was when we talk about the counting down case last time, I had naively felt like you first pass in the largest possible input and count down from there. That was deemed to be really silly. So this was reframed to let you start always counting at zero. If you want to get smaller, you go negative. If you want to go—if you want to wait shorter you go negative. If you want to wait longer, you go positive. You can always start at zero.

KM: If you start at zero that would be the expectation that I just want—is equivalent to undefined, then that’s not the shortest possible wait, that’s some middle wait?

SYG: Yes, that is a good point. It is like—so it’s a heuristic. So I think the very first, maybe the guidance is better you start counting at one or negative one. But my intention was not the very first wait is kind of hard for the engine to know which way you’re going next. The first wait is unhinted. And then afterwards, you will know the direction. If it can’t figure out a direction because you’re passing like bouncing numbers (?) or something, then that’s not going to really help either.

KM: I have to think about that. Maybe there’s something we can reasonably come up with there. I’m not overwhelmingly concerned about it. But I was just a little confused what the expectation was.

SYG: Let’s work on the—yeah, let’s talk offline.

RPR: All right. So we heard two messages of support. Is there any opposition to Stage 3? I’m not hearing any opposition. So congratulations, SYG, you have Stage 3.

### Conclusion

Stage 3

## Discard (void) Bindings update

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-discard-binding)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkr1WMJUD3IiTYZINVQ?e=fyNJaA)

RBN: So I intend to keep this brief. This is intended to be a short update based on some recent discussions within the champions group in relation to discard bindings and some investigation I’ve been doing into some of the options that we discussed prior and part of the Stage 2 advancement. Just give a brief discard is idea is non-named placeholder for a variable and allows you to elide unnecessary variable names in certain contents with using and await using declarations and function and method parameters and object and array destructuring patterns and extractor and pattern matching. It proposes use of void keyword for place of binding identifier and prior art is C and C++ and Python and Rust and underscore. They all serve in most cases similar use cases of being able to declare something that you don’t actually need the name for it. This proposal is currently at Stage 2. This is mostly motivated by the need for—the ability to have the side effects of a declaration without the actual binding tooling often warn or error on unused variables so if you’re using temporary variable names you often have to use comments to disable lint rules or underscore-prefixed names. There’s several existing single purpose solutions to this.

RBN: So array destructuring elision and bindingless-catch and this is single purpose for the syntaxes and there is no single use and problematic for declarations. In some cases we might try using empty object patterns. Those are insufficient because they throw if you pass null or defined on the right hand side which really wouldn’t work for using and in addition using itself doesn’t allow binding patterns and shrimp elission and not sufficient because using legal is syntax and you can’t have elission in object destructuring, or let/const. `let =` is legal in nonstrict mode.

RBN: The proposal again seeks to use the void keyword for a discard binding. So examples of this show in using void equals and binding patterns it would be void on the assignment or declaration side. In assignment patterns again, where you might in array destructuring potentially use elission and use this in the array destructing and parameters would allow to have the parameter name and unnamed pattern can be in extractors and pattern matching. We did have a discussion around the time we were proposing it and advancing to Stage 2 which was we could consider underscore or void and majority of other languages that have discards for pattern matching it use underscore. It has pros and cons. In many of the languages of underscore sometimes have to resort to work arounds and potentially hack-y and unreliable ways of making in work or had to have a new version of the language that deprecates under score that allowed to use as identifier that could be problematic. One way to do it if we wanted to have similar workarounds to use underscore would be to weaken the current restrictions on duplicated identifiers which is the approach that we discussed the last time that this was presented. So basically rather than just caring about underscore, instead it would be any identifier could potentially be redeclared but then in strict mode cases but then be illegal to actually reference. It would allow us to kind of mirror what we can do in non-strict mode with bindings or far declarations and repeat a binding.

RBN: But this isn’t without its own issues. Unfortunately duplicate identifiers or underscore any duplicate identifier would have issues that void itself was not. One you can’t use underscore in an assignment pattern safely and might be overriding something or declaring global or introducing error if this is strict code. This doesn’t exist. You would have to declare it. It can be leaky in the global script where you might have a declaration like a var declaration to use underscore as discard and then leaks into the global. So the main thing that we’re seeking to do is to definitively state this proposal despite the advantages. Similarly in the language and use underscore this proposal is seeking to advance or not to advance but seeking to continue to use void as the primary mechanism for discards and covers all cases declaration and assignment patterns and pattern matching cleanly. We could potentially also still pursue duplicate loosening the restriction on duplicate identifiers as the convenience mechanism but not the primary mechanism and if so, the open question is whether or not we should push this to the follow up proposal or continue it as a side feature of this proposal? More likely to say if we still want to have this, we should consider it as either a follow one proposal or even just a needed consensus PR rather than tacking it on to void discards. So that’s kind of where things stand right now with the proposal. I will go to the queue and we can discuss.

NRO: I was very strongly pushing for underscore. I still think it looks nicer from scratch we should use underscore. However, I’ve been convinced that the different—with constructing declarations and not in the expressions is variable, it risks for example trigger in the scope and didn’t notice it’s happening. And it’s just too easy to make errors if we make this thing behave differently in the declarations and expressions. So I don’t think underscore would look better. I just don’t think there is a reliable solution. I’m happy with the proposal and happy with void.

JRL: To be a counter to that, I continue to think that underscore is best choice and don’t like void. I don’t understand why void is better than the current status quo than unused variable because the unused variable names are just `_` or `_a` or `_b` and shorter and less wordy—less tokens in the program. The whole point for the discard binding is to be something that you can scan over and doesn’t distract from the actual intention of the program. The void keyword besides appearing like a full word that looks like an identifier in my program, and now takes up more space than the thing that is the status quo. I don’t think void is the correct choice for this. I understand there are cases where underscore behaves badly. But no one does an assignment destructor. Ok, some people in here do it. Not many people. They don’t understand to wrap it in parentheses to make it assignment destruction rather than a block scope with label on it. If we have global variables, no one is doing it anymore. I continue to think we should continue to pursue underscore as the correct solution for this?

RBN: Again, even if it’s not assignment pattern and simple assignments if you’re saying underscore or I have seen plenty of assignment pattern usage of array destructing and in those cases you could elission and you run into the corner case of the trailing element if you fail with the extra comma because trailing commas can be problematic. My biggest concern with underscore in the assignment pattern case becomes you’re going to see people write examples in block posts and things that might contain some of the syntax and just use underscore and if they say that is just the discard it is easy to use the context if you’re doing this in the assignment pattern case you need to have a free var underscore somewhere in the code that this gets written to and if you don’t do that at whatever scope that you’re in, whatever function block you’re in, that variable could leak and if you have other references to it in other places it could potentially be held on to because you created a closure scope and in the branch with the function closure have the thing and you’re holding to memory. It has the corner cases and side effects that make it fragile and one of the main reasons why I think it’s not really a viable solution.

MF: Happy with the proposal and the choice of void. I agree with everything RBN just said.

WH: I don’t want two solutions for this. So if we do `void`, we should not do `_` or permit multiple definitions of `_` in a scope.

CM: I’m happy with void. I think I understand the esthetic appeal of underscore. But I’m wondering if the gymnastics to make that work wouldn’t interfere with some existing practices of just using underscore as the name of a variable. Which some people do!

RBN: One of the reasons why—so this proposal if we had wanted to consider this alternative solution, it was not just underscore. It could literally be any identifier would be allowed to be duplicated and issue with underscore and using underscore and `import * as underscore` from the underscore package or from lodash or something like that you could use double underscore or underscore A and tempt and that would be fine. It would be every in the documentation would be the discard you would have the recommendation that underscore is to be using.

CM: That defeats the purpose of having a standard way to say this is the discard.

RBN: This is like many other things to shoehorn in underscore as discard with weird corner cases that don’t quite work the way you expect or don’t quite look the way you expect.

CZW: I was in favor of the underscore but given with the issues presented with the underscore that void can be a pragmatic choice to use as a discard binding.

SFC: Yeah, so I have two comments here. One is not the motivations, you know, this is the common theme when I ask—make a comment about proposals including decimal but also here with the discard bindings. I look at the slide that says motivation and the first bullet point says need for declaration side effects without the variable binding. So I’m trying to parse what the bullet point means. I want to skip to the second one here that is tooling often warns/errors on unused variables. This seems like something we can discuss here. So the motivation is that while the status quo is unused variables. And that causes elission to complain about unused variables. There could be other ways that we could like hint ESLINT this is discard binding. I will use rust as an example underscore with the name variable`_a`, then the default rust lint will not complain about the variable and assume you started with under score and that’s discard biding. That style is explicit and sometimes I like using the style in code because if I’m doing a discard binding sometimes I like to actually name this is the variable being discarded. I name the variable and then also put a prefix on it and underscore on the prefix variable name to show this is the variable that is being discarded here, right? So like there’s other ways to solve the second bullet point than just this proposal here. And then as far as the other three bullet points, are those motivations? Those are more like these other things don’t work very well. So that’s not really a motivation for the problem that we’re trying to solve. That’s more motivation why this solution is something to consider. What is the actual problem we’re trying to solve? To close, if there’s actually like a—so what I can imagine here is that if it is expensive for engines to like – if there’s a variable that is unused that, you know, during like a JIT time or whatever, engines can be like we’re not going to allocate space for this variable and make the program more efficient, like, that would be like motivation I think why we want a void binding. If such a case exists, I would love to hear about it and see it. And then I would say this is very well motivated proposal because it actually has concrete performance improvements on your program. If this is just a stylistic thing, it is not clear this proposal is not much better than the status quo. I agree with what Justin was saying earlier where it’s like I’m already doing discard bindings in the code. If the only problem I’m trying to solve is that ESLint is too noisy let’s solve that instead.

RBN: Let me back up. Historically when the resource management proposal was at Stage 1, when initially introduced and up until it reached Stage 3. It had a mechanism for allocating and tracking a resource without declaring a binding. And that ended up being removed and pulled off to the separate proposal because it specifically had cross cutting concerns with other places that need it. Pattern matching needs a discard mechanism. And it seems somewhat less motivated until pattern matching comes in a way because having a discard mechanism is profoundly necessary in the pattern matching. You need to be able to match on a property exists but I don’t care about its type. To do that without any discard mechanism is nearly – shouldn’t say impossible but requires you to do like a disjunction of two things that are the opposite of each other or requires you to again declare a variable that you don’t actually use that is more code that you have to write and requires the mental effort of thinking about how do I—what do I name this thing? And performance doesn’t need to be the only reason we consider adding things to the language. Developer experience is still very important. When we looked at bindingless-catch that was practically a shoe-in. People didn’t like naming catch variable e over and over again because they didn’t use in many cases and delay the catch. This is more than delay the catch. You have to write out characters, yes. It means you don’t have to name these things. I don’t want to have to litter my code with `const _a`, `_b`, and `_c` for various things just to allied the things I don’t need with multiple times with multiple declarations with the same scope that have these types of elisions. It is not really beneficial in those cases. For cases like array destructuring if you need to exhaust something and move past the end or skip an element that is easy to be tripped up by the trailing comma in array destructing that if you expect a live last element and A comma B comma the last comma is not progressing and ignored and easy to forget with the explicit marker for the discard is much more effective for elission. All the way back to the top there and say the need for declaration side effects without the variable binding using is the primary use case and using needed a way to use the resource that already exists in scope in many cases, so I’ve passed in a resource and now I need to take ownership of the thing and control it for the scope of the body. But I don’t need to give it a new name. I already have a name for it. I just need to enlist it in the current scope. To be able to do that is important and useful for things like the Mutex that is and the unlock token part of the shared struct proposal and often have a block where I need to lock the mutex within the certain scope. I don’t need to give the thing a name. It doesn’t need a name. I will never reference it. Underscore can be useful for this but once again you can run into the case if you also need to lock multiple things or create one lock to create a log in resource none of these things need names and now I’m having to give them names and having to differentiate between them and create the bindings and the effort the user doesn’t have to go to if they don’t need to. This is primarily meant to be or up until you get to the pattern-matching case, this is primarily meant to be the convenience in the DX improvement over having to constantly name things and then once you get to pattern matching it has much more value.

JRL: To respond to the part of pattern matching needs discard binding. Pattern matching doesn’t need discard binding but just to match the structure X and Y if you’re already doing everything. If you don’t need X, it’s an unused variable.

RBN: That is incorrect. Pattern matching regularly needs to be—this example at the end and match object with X void and Y void is currently the only way to check the structure. If you wanted to check that X exists but don’t care about the valueOf X because I’m checking the shape of the thing is incorrect and plan to pass it to somewhere else I need the way to test that the property exists without having to write a complex match pattern and the actual valueOf the thing doesn’t matter. Being able to test structure is paramount in the cases and you don’t want to dig further in you need a way to test it.

JRL: You are digging in further in to test the pattern structure. Rust has the way to do it to test the object and the thing inside of the object.

RBN: You can do that as well and rust can use underscore for this.

JRL: Correct.

RBN: This exists in Rust. It just uses underscore. We really can’t.

JRL: When you use underscore in Rust, it doesn’t mean you captured the object. The case that you outlined to capture the outer object and assert the structure of the inner object is that correct?

RBN: No. I’m saying in this branch I’m testing that the object has the properties X and Y and the only thing it is testing. It is not X colon number and saying must have number and must have X and be a number. It is testing X and Y and that’s all it is testing.

JRL: Can’t do `when { X: X, Y: Y }`.

RBN: What does that mean? If you said in the current proposal `x: x` means `x` must match something in the outer score and a reference in the identifier. If you were not going to use the thing, you have to say X colon let underscore or let X to declare a variable declaration that you not use.

JRL: Pattern matching proposal doesn’t allow from the object structure.

RBN: It does using let and the variable name and you’re once again back to I’m introducing a variable declaration I don’t need.

When we change when to let this will—change when to let and remove the voids this will work correctly to match the case.

RBN: You can’t change—the when key doesn’t change in the current proposal we’re making changes to it. You have to—so when you are matching something, the right-hand side of the match will set X colon something, that something is a reference to something in scope. It’s not a binding. You actually have to declare the binding and X colon let X to say matching X to some pattern and that pattern is a let binding that introducing a new variable and introducing a new variable in scope. This is a variable you don’t need. You’re just adding more variable declarations to your function body.

JRL: It is radically different than what Rust has done and causing some confusion for me.

RBN: Rust has advantage of having a type system and knowing whether something is a new declaration or a reference to something else.

JRL: I think we need to talk offline. I continue to think that we don’t need to introduce void to handle this case for pattern matching and there’s another way to do it and rust has shown there is a way to do this.

RBN: I think we need to talk offline and rust has issues with—there’s discrepancies between what rust can do and what JavaScript can do. But I would appreciate if you could potentially join one of the upcoming pattern matching calls and discuss that further on the pattern matching proposal side.

RPR: We have five minutes left on this. A few clarifying questions.

NRO: Just hard to follow the discussion about code with braces and colons and everything. If you could write in the queue the example how the pattern matching case would work without void.

RBN: I think this is something we can potentially follow up with offline. I’m not seeking advancement for anything right now. I’m mostly setting where the direction is kind of going based on feedback and investigations that we have been doing that—to continue with that. If we can continue that offline, I think that would be fine.

RPR: Good move.

JWK: Hello. I have posted some examples for what works in pattern matching if you want to do things like test a property but don’t care the actual value. You can see the matrix.

```javascript
when { x: let _ }: // unused _ when { let x }: // unused x when has 'x': // test 'x' in subject (a possibly extension)
```

SFC: Yeah, so if we do move forward with this proposal, I do think that like a more proposal with fewer edge cases IE the void keyword seems better. It’s just I’m not convinced by the motivation. If this is really necessary for pattern matching, then like you know that should be clear like this is part of pattern matching. When it comes to, you know, proposals and we definitely take this position a lot in TG2 which is that like a proposal needs to be motivated by itself like not because of some future proposal that’s coming along. This sometimes made it hard to make progress in TG2 but I think it’s ultimately the right call. Because if this is only useful for pattern matching, it should be just part of the pattern matching proposal, question mark?

RBN: It is not. This is part of the research management proposal. I pulled it out for two reasons: One to simplify the resource management proposal somewhat and it had cross cutting concerns with mat tern matching and other things to discard. Not narrowly focused to one case. It is a very small thin feature that is intent to broadly cross cut several different things.

SFC: So since we’re low on time, I’m sorry, but I can see the examples in pattern matching for why we actually need void here. It’s very hard to do the thing without void. But in terms of using void and things like that, just say `using _handler =` or something like that. You know, like it seems fine using void equals. Like, makes me have to look up what does using void equals mean. When I use reading underscore handler equals I know this is a handler going to be discarded at the end of the scope because I have seen that before. Using void equals is like what the heck is going on here? So I don’t necessarily think it’s necessarily an improvement. But again my point here is if it’s narrow, it seems harmless to have this. It’s just I’m not convinced of the motivation. If the rest of the delegates think so, that’s fine. I mean, I’m just –

RBN: I will say that having started writing code that makes fairly heavy use of the using declaration and I had more than one occasion with three or four things that I don’t need to name. It’s very inconvenient to write `using _a`, and then `using _1`, and `using _2`, or `_a`
and `_b`, and you have to look up in scope and what to use and use underscore B and I have a type checker I already used that. And I have to name it something else. This is developer experience improvement that is supposed to save you from having to do all of this work.

RPR: One minute remaining, Ron, could you summarize the points that we have heard?

### Speaker's Summary of Key Points

RBN: So the primary purpose of this was to provide an update and kind of set expectations for where things stand with the proposal. The main change here is that we are seeking to narrow in on primarily just using void. The underscore or duly cat identifier solution has a number of very rough edge cases that make it difficult to be able to use consistently. Other than the suggestions we have been having about, like, motivation versus just writing things with_this is a developer experience improvement, which it has additional cases where pattern matching is deployed

## AsyncContext updates

Presenter: Andreu Botella (ABO)

- [proposal](https://github.com/tc39/proposal-async-context/)
- [slides](https://docs.google.com/presentation/d/1DZXqdY-J4DBNCBfEmTNUbkhm2iSgRZj1ez3MM6dReKc/edit?usp=sharing)

ABO: Okay. So I will be giving some updates on the web integration of AsyncContext. That is specifically what these updates are about. The web integration is a requirement before Stage 2.7 because some of the delegates would block without it. So I will be giving an overview of the current status of things.

ABO: So the whole point of the proposal is to have some state that gets preserved across awaits, like a thread-local storage but for async-await. And the thing is, with things like setTimeout here, this is a very similar case where you would expect setTimeout to preserve the context from when setTimeout is called to the callback. So here, you expect `asyncVar.get()` to return 42.

ABO: But this is because in both browsers and runtimes, promises are not the only source of asynchronicity. And things like setTimeout need to be accounted for.

ABO: So the basic idea for the web integration is that most of the web APIs that take a callback will then run it later, at a point where no context is active—where the JavaScript stack is empty. So there is only one relevant context, the one that was active when the scheduling API gets called. If you are familiar with the proposal, you know that the contexts are strictly scoped. And so if there is no active JavaScript stack, if there’s nothing on the stack, the context is empty. So we’re not dismissing that, that empty context.

ABO: And for these APIs that take a callback, we store that context when the API that schedules it is called. And we restore it at the time of running the callback. And this is equivalent to wrapping the callback in `AsyncContext.Snapshot.wrap`. This can be implemented in WebIDL, which is part of how browsers implement web APIs and how they are defined in the specs. And this would work automatically, with no work needed at all for future spec additions and engine implementations. This is the case for `setTimeout`, `queueMicrotask`, `requestIdleCallback`, `schedule.postTask`, all those APIs.

ABO: Not all APIs like that, and there’s some more complexity. So observers are a common pattern in the web platform, things like `IntersectionObserver`, `MutationObserver`... These classes take a callback on the constructor, which will be called to notify of some observed change. You can register things to observe and so on.

ABO: The thing is, the callback might be invoked once for multiple observations—like, the observations can be queued and then the callback gets called once per event loop turn or whatever. This is different from FinalizationRegistry, where the callback is called once per observation. And so the context in which the callback is called cannot be the context of any of the observers.

ABO: This actually affected the behavior we proposed for FinalizationRegistry with AsyncContext. So that is an interaction that affects the 262 spec.

ABO: So here, the only reasonable option for the context in which to call the callback is to do it in the context in which the observer is constructed. But a use case for PerformanceObserver is that you might want the observation context. And those might be exposed as an `AsyncContext.Snapshot` object that is exposed in PerformanceEntry—in each of the observation entries.

ABO: And events are a more complicated case. There are one or two possible contexts for each event dispatch, or rather for every time an event listener gets called. There is the registration context, which is the context that is active when `addEventListener` is called. And there is always one because you need to call `addEventListener` or set `onClick` or something like that. So there’s always a registration context. And then depending on the event, there might or might not be a dispatch context, which is the context active when the JavaScript source that caused this event is called. This can be synchronous, like the `click()` method on HTML elements fires a click event synchronously. It can be asynchronous, like if an event gets fired after a request has completed or something. And it can be missing for things like user clicks or notifications from the browser/runtime, when there is no JavaScript source for the event.

ABO: For events that have a JavaScript source that is asynchronous, in the web platform currently there is no way to track that context automatically from the source to the final event. And there is no way to distinguish that from events that don’t have a JavaScript source. So that is not something that is built into the platform currently.

ABO: If we start tracking that context manually, it would mean changing a bunch of web specs and a bunch of browser implementations to track them manually. There is also another possibility, which is defining an automatic way to propagate the context through the spec-internal and browser-internal operations. Which is complicated. And if the context is tracked manually, adding new events in the future might not be trivial for web spec authors

ABO: So with this as the background, our initial proposal for events was that the context active when an event listener is called is the registration context. So the context that is active when `addEventListener` or `onClick` is called.

ABO: And then the dispatch context can also be important for some use cases. And it can be exposed as a property on the event object with an `AsyncContext.Snapshot` value, same as for observers.

ABO: Now, since it might need to be tracked manually, what we initially said is that this property will not be present in all event subclasses. It would only be present in some. It could be a nullable property, in others to allow an incremental rollout. And we would only initially expose this property for just a few events, like the `error` and `unhandledrejection` events.

ABO: Some web platform features need a similar kind of context propagation as AsyncContext. Like, incumbent realm tracking, soft navigation, `schedule.yield`. Some of these are long-standing web platform features, some are things that are being added recently or as we speak. And these could be implemented as browser-internal `AsyncContext.Variable`s.

ABO: It is not clear that the semantics for all of the features match the web integration that we’re proposing. For some of them, it’s possible that they match. For some there are differences, but it’s possible they could change to have this behavior. For others, it could be integrated with this behavior by hooking at a lower layer, still within the browser engine, not the JavaScript engine. But these are still things that need to be figured out.

ABO: And so what about the server-side? We have been talking about web integration, but this is because it was a requirement for Stage 2.7. But I think that considering Node.js and other server-side runtimes is important, and I think that the same general approach that we use for the web should also work for them. And it would be bad if server-side runtimes had completely different semantics. Especially with WinterCG and runtimes that support web platform APIs, having these different semantics depending on where the API is defined is not good. So if this is unworkable for the server-side, we want to know, and we should try to find a different way.

ABO: So current status. We have a PR for the web integration. There are some minor issues that I should have found time to fix, but I didn’t. But this is the main blocker for Stage 2.7 right now, as I said. The majority of the semantics are clear and uncontroversial. Except for events because they don’t seem to work for everyone. And we heard from some of the framework folks at Google, and it seems like different use cases seem to have different and conflicting requirements. So we need to figure out how to fix that.

ABO: So we will work through various alternatives, various ways that we can resolve this conflict. If this affects you, we want to hear from you and consider all relevant use cases. And we are also looking for feedback from browser engine implementers and web platform spec authors. This is not just JavaScript engine implementers, because all of this will not affect JavaScript engines.

ABO: So get involved, I guess. We have meetings every two weeks. Previous slide decks about AsyncContext didn’t mention you should ask us to add to the invite because I think it’s on the TC39—private. I don’t know. Just ask us. And we have a matrix channel.

SYG: So I guess mostly clarifying questions, but I don’t have all this paged in. Bear with me. About the events, specifically the two contexts, the registration context and the dispatch context, like what does it mean to have two? Like, are you just saying that you need to make a decision on which context the event listener runs? Or are you saying, like, there’s a way—proposing a way to thread both contexts so the event listener itself can choose which context?

ABO: In the PR as it is—like, the state of the world currently, it’s like this slide says that there are two possible contexts that could be used. Like there’s always a registration context. Some events would have a dispatch context, and our initial proposal was that the listener would always run in the registration context. And then for specific types of events, you would pass the dispatch context as a property of the event.

SYG: What is the value of that property? It’s like the value of the async variable?

ABO: No. It’s `AsyncContext.Snapshot` value.

SYG: I see. That’s what you mean with an AsyncContext. So the property would have an `AsyncContext.Snapshot` if it originated from, like, JS user code, otherwise it’s null.

ABO: Or if the event has an async source—like it originated from JS, but not synchronously.

SYG: I see.

ABO: In that case, we’re not initially going to propagate that. We might set it to null in most places, and possibly, incrementally, modify that for individual events over time.

SYG: So I am not really an expert on the DOM side of things. Like, I assume there are a lot of events. Is it okay to add a property on all events like this?

ABO: In the proposal that we had, the idea would be like just incrementally –

SYG: Not event subclasses. But event instances. During the time of an application of a page running, there’s a lot of events, I imagine. And we’re adding a property in every one of those with a possible snapshot? Like, I guess, you know, the snapshot will only be present if the page itself is using AsyncContext. I don’t know. Generic, seems like somehow high cost. I would like to understand it better, but I am not an expert, so we should get more engine people. Like, DOM-side engine people.

ABO: If the page itself does not use AsyncContext at all, then the way I imagine is that you would always store the registration context. But those would point to the same internal mapping, which would be an internal object in the engines. And whether you create a JavaScript object from that—there was a possibility that you would have that property be a getter actually and only create the JavaScript object if that is needed.

NRO: So, for context, I help with the proposal, this proposal is now mostly blocked on figuring out exactly how events should work. When we proposed the idea of running the callback in the context where the event listener was registered, we received feedback that in some cases it’s desirable to run the callback in the context where the event was dispatched, if there is any. Mostly from framework authors, but also because this is how, for example, task attribution works in Chrome or how the `console.createTask` API works in Chrome. However, we believe one of the reasons we went with the registration time context was because it is easier to implement. Because you just need to capture that without propagating the snapshot through async steps in engines.

NRO: So I know we cannot get an answer for this now, but it would be great if the browser people here could talk with their DOM colleagues to understand the feasibility of actually propagating the dispatch time snapshot for async events. For example, if I have an `XMLHttpRequest`, how feasible is it to propagate the context from when `.send()` is called to when the event listener is run? Because once we figure out what to do exactly with the events and once we have an answer people are happy with, then we can advance the proposal to 2.7.

DE: I want to emphasize what NRO was saying, that this proposal is done, except for the web integration. The thing is, there are other web APIs like `scheduler.yield` that are being developed and in some places even shipping, which are solving the same problem of how to do context propagation. Some of these don’t have completely formal specifications for how they propagate the context. And as part of this project, we want to define and formalize that. In my opinion, we should propagate context in the same way across AsyncContext as well as the context tracked by these other features. Otherwise, there’s the risk that events would have to propagate multiple different context variables, which could be expensive at runtime. I would be hesitant to ship things incrementally unless we’re comfortable with AsyncContext. This is a debate I hope occurs on the web side. And I would appreciate the help of people who work in browsers to think through this, this sort of existence of multiple things that need the same context propagated and what the semantics of that should be.

ABO: I want to mention that, well, I think I mentioned some of this before. For soft navigation tracking, this is something where it seems feasible that the semantics that are currently being used in the Chrome implementation could change to be aligned with the web integration semantics we are proposing. It’s not fully clear to the folks working on it whether that is possible, but they are willing to see, to try. `scheduler.yield` is a slightly more complicated case, but it would not require a completely different—like, having two separate mappings that need to be propagated in parallel. It just—it would have to be hooked in the browser engine’s implementation of the web integration.

DE: So I think it’s important that people consider these interactions, whether those hooks apply in all browsers before they get too far in shipping the web features. There might be a misunderstanding that the web is moving faster and is more dynamic, and that TC39 is slow. In this case, the slowness is not on TC39 holding back things, but rather building consensus with web stakeholders on the web semantics. That’s what I want people to come home with with this presentation: that browsers should work to solve this same (or closely related) problem.

ABO: Yeah. I am working on a document, like for the exact interactions between these web platform features and the exact semantics they need. I didn’t have it ready for today, but I will try to finish it and make it up soon so that anyone can take a look at it and check.

SYG: I have another question—just not about any of the particulars, but I want people familiar with AsyncContext to see if this characterization is a fair characterization. My understanding of the difficulty in pinning down the semantics with all these different contexts, that it’s come up with AsyncContext but not for soft navigation tracking and `scheduler.yield` is because soft navigation tracking and `scheduler.yield` are concrete, narrow APIs for like one particular concrete use case like scheduling priority and tracking soft navigation. And because they are narrow enough, they can just choose which context is the right one to propagate. Whereas, for AsyncContext, because it is programmatically controlled by user code, you have to consider all possible things, all possible contexts that might be reasonable to propagate, and it’s difficult to nail that down because you don’t know the intent of user code. Is that a fair characterization?

ABO: I think so, yeah. And I know that soft navigation has changed things and shipped things incrementally because the results are not exposed to the user. Except as a timing measurement that would be hard to influence as a developer.

SYG: Okay. Outside of implementation reasons, like complexity reasons in Blink and WebKit itself, why is it important in your opinion, to explain the propagation of soft navigation tracking and `scheduler.yield` via AsyncContext?

ABO: The main reason is that we don’t have different features at various different levels of the platform, including JavaScript, that basically do the same thing except with slightly different semantics. And for the implementation in Blink and V8 in particular, those features—well, not incumbent context, but soft navigation tracking and `scheduler.yield`, are currently using `ContinuationPreservedEmbedderData`, which we were hoping to replace with AsyncContext. It might end up that is—that at that replacing is fully doable, but I think it would—like, it would offer a lot more, I guess,

SYG: I am confused by the layering. CPED is not a spec. Is it?

ABO: No.

DE: The fundamental issue is that implementations don’t want to carry around multiple variables to understand which context is propagated. Right now you can root everything in one thing, one extra pointer that the JavaScript engine threads through. It would have additional cost to thread two different pointers through. This will affect all implementations, not just V8.

DE: A difference between `scheduler.yield` and soft navigation on one hand, and AsyncContext on the other hand, is that you can be sloppy with propagation of yield/soft navigation. And you will get approximate results that are okay enough, as long as you don’t care about consistent, reliable results across browsers. The main difference about AsyncContext is not quite that it is user programmable. But we have to nail down the precise semantics because there is so much more readily observable. If something doesn’t propagate the priority the same way by accident, you kind of recover okay.

SYG: I still see it as a thing of a user programmability, because you don’t know what—like if you propagate the wrong thing, you don’t know if it is acceptable enough. For `scheduler.yield`, you know because it’s not user-programmable that it is acceptable. For `AsyncContext.Variable`s, you can’t know, so you have to assume the conservative thing–

DE: If we want interop across browsers, then you also want the same sort of very strong well-defined semantics for `scheduler.yield`. Same thing as AsyncContext. If you don’t care if browsers have different propagation semantics for yield or different measurements for soft navigation, then you wouldn’t care about this as much. That’s the main difference. So if you just have a single browser, you know, experimenting and going ahead then it’s okay to be somewhat vague and unstable, but probably when multiple browsers want to coordinate and adopt semantics with reliable interoperability, that solution should work for AsyncContext as well.

CDA: We are past time. I would like to at least get to Mark’s comment before we finish.

MM: I really like your terminology of registration context and dispatch context. There are two conflicting interpretations of least surprise that pull you in opposite directions, and I very much appreciate the choice you made. Let’s make sure I understand the consistency of this. I want to use `Promise.then` and then a `Promise.all` with the `Promise.then` on the result of `Promise.all` as examples in the language, obviously outside the web. But a thing that is caused often has multiple causes.

MM: And your observation is, there is always exactly one registration context clause. And there are some arbitrary number of dispatch clauses. So, for example, if you do a `Promise.all` on a number of promises, and then you do `Promise.then` and a `Promise.then`, the two clauses are the registration, and the settling of the promise you’re observing. So `Promise.then` is a degenerate case of observing things, and triggering the `Promise.then` is a degenerate case of the logic of triggering an observer, notifying an observer.

MM: By choosing the registration context, you’re not saying it’s more important and the others are less important. You are choosing a rule such that you always have a predictable model that the programmer can plan around, or programmer can coordinate on so that even when it’s not the one the programmer actually wants, they still know what it is and they can expect that it won’t be the one they want. And then you’ve provided these separate snapshots where the programmer knows they want something else and they can get it.

MM: The issue—this goes to SYG’s question about the specific semantics of what is going on, it will differ from case to case about what the programmer wants. The real issue is not giving the programmer what they want in all cases implicitly. The issue is, if you provide one thing implicitly and other things explicitly, less conveniently, they have the one that’s implicitly provided be predictable. So the programmer can know when they need to turn and get the other one explicitly because that’s the one they really want.

MM: Does that all make sense? I am asking SYG as well. Okay.

ABO: Yeah. That was part of the motivation for this initial proposal. But what we saw is that like some of the feedback that we got is that sometimes the implicit context is important because if you are a third-party library, and the code in the listener is first-party code, the first-party code wouldn't know to propagate those values, wouldn't know to pass things around. And with this model, you would only be able to make available to the third party code the registration context. It seems like some use cases need that. We are investigating other solutions. And so we’re looking at this problem and seeing if there is a way to propagate both things implicitly in some way.

MM: You can’t propagate both things implicitly. In every case, there’s one thing to propagate because of the nature of the dynamic scoping you’re providing.

MM: Well, okay. Justin suggested we talk in the hallway. I agreed. All right.

### Speaker's Summary of Key Points

ABO: We have a proposal for web integration. There is some feedback that the proposal doesn’t cover all use cases and we will continue to look into it. And this is the only point that is missing before Stage 2.7.

## `Array.zip` for stage 1, or 2, or 2.7

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/ljharb/proposal-array-zip)
- no slides presented

JHD: All right. So we talked about `Iterator.zip` and `zipKeyed` in previous plenaries, and agreed to have it proceed only producing an iterator. So I should make a separate proposal for arrays if I want that,and that is this proposal.

JHD: It’s basically exactly the same as the iterator functions. But instead of running an iterator, it returns a collected array. This is the spec for joint iteration. These are the only steps that are different from the joint iteration. The same steps in both zip and zipKeyed. It just takes—I could have replaced the first 16 steps of this with an direct invocation of the originality `Iterator.zip` for example. And it just makes an array out of it.

JHD: This is spec text and could be different. It’s only 8 lines different from the existing Stage 2.7 spec text of joint iteration. And so I put Stage 1, 2 or 2.7 because I am comfortable with any of the advancements. But I wanted to see what the room’s thought were on solving the problem, which is Stage 1; on having the solution exactly match joint iteration which would be for Stage 2 because it has the spec text already; and I'm assuming it does need to match joint iteration, then I think it would be eligible for 2.7 because there’s no more design decisions.

MF: Yeah. So we talked about `Array.zip` when talking about joint iteration. We didn’t include it in the joint iteration proposal as we didn’t want its questionable motivation to comprise the joint iteration proposal. So we dropped it saying that, if we find good motivations, nothing wrong with having this, but we want to not add something for no reason.

MF: So the reason why I was suspicious of motivation is that we think all of the use cases of joint iteration are followed immediately by some other operation other than like toArray. And if we find that it is common for users of joint iteration to be immediately collecting into an array, this would be motivated. As you say, you would avoid the iteration protocol there. But so I think that—I would be fine with Stage 1 for this proposal in that we are investigating if there’s a need for something like this. And maybe it doesn’t look like `Array.zip` in the end. But until we get some usage data from joint iteration, meaning that it’s reached Stage 3, out there in the browsers and see the people are actually doing that, like doing Iterator.zip and toArray on it or something, it’s not convincing enough motivation for specifically this moving forward past Stage 1.

JHD: Okay. But I mean, so that makes sense. I am fine with it going to Stage 1 for today. I have a hard time conceiving any possible design changes it could make. Although, like what I am hearing you say is that either it deserves to be added to the language or not. If it deserves to, usage data from `Iterator.zip` should show that

MF: It would probably look like this. If people are doing Iterator.zip and toArray, that would be like a drop in requirement for that.

JHD: Yeah

MF: But it’s possible. Maybe we identify other similar patterns. Do something like that instead. That’s like—that’s a little bit too –

JHD: Right

MF: It is definitely still worth keeping in mind that we have a possibility for `Array.zip` if it becomes common and people can improve their code using it. But for now, I don’t think it warrants more than Stage 1.

YSV: This is +1 to MF's comment. This is something good to see as a library first, before we talk about getting it into the language. So I am fine with Stage 1. But I think we need more data to back up the motivation.

JHD: Well, then I am asking for Stage 1.

SYG: I have a question. So one of the statements on the proposal repo is that one can put an iterator into array, useful but not ergonomic. I personally agree with the non-ergonomic. Why is that less ergonomic than array.zip?

JHD: So for—if you have two iterables that you want to zip together, and then make an array, you have to use `Iterator.zip` to get the iterator and do `.toArray` on it and that’s fine. It’s not unergonomic in a blatant way; it’s not that bad. It’s having to do it in two steps, when a frequent use case will be both of those steps.

JHD: It doesn’t feel clean and elegant to me. I hear you - it’s a fair point, when we talk about ergonomic benefits, the win is often much larger than I think you will get from here.

SYG: It’s also like here is—here is a slightly different incantation for exactly the same thing. And I—I don’t know why we would have that. But like if we iterator.zip, the cost of adding this is also pretty small. So all in all, I am not against it. But I—I am just unconvinced on the ergonomic part of it. Dot to array is pretty short. It’s method-chaining. It meets the check marks of, like, ergonomic.programming. I personally think it’s really good.

JHD: That’s fair feedback. So yeah. I would like to ask for Stage 1.

RPR: Any objections? Thumbs up from CM. Any objections to Stage 1?

RPR: No? All right. You have Stage 1

JHD: Just to clarify, for—in order to meet the—some of the expressed bar for Stage 2, we need to see some usafe of the `Iterator.zip` functions to hopefully demonstrate one way or the other whether it’s common to immediately turn them into an array.

MF: No cheating by putting them in a bunch of your libraries.

JHD: Yeah. Obviously, my own usage wouldn’t count. And I hear SYG’s feedback that the ergonomic win is arguably non-existent.

JHD: Thank you.

RPR: Thank you, JHD.

### Conclusion

Stage 1

## Iterator chunking for Stage 2

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-chunking)
- [slides](https://docs.google.com/presentation/d/1V2pFMn0s6UIdrjbfaBlfdu9XE4v3u6qD2gBwLRycVr8)

MF: Okay. Iterator chunking. I will be looking for Stage 2. The problem we’re trying to solve with iterator chunking. We want to consume iterators in one of two ways. Either through overlapping subsequences of a given size or non-overlapping sequences of a given size. I will show you with the illustrations I have made. Let’s say you have an iterator of the digits 0 through 9. You have those numbers in order. Chunking, which is the common name for consuming non-overlapping subsequences, would produce an iterator—if you chunk by 3, produce an iterator of array 012, array 345, array 678, and then finally a singleton array for the final 9. If you were to do windowing, consuming overlapping subsequences, done by the size of 4, the array 0123 would be yielded, then the array 1234 would be yielded, and so on until 4567. Those are the two problems that we’re trying to solve.

MF: We discussed the basic shape of the solution during the Stage 1 advancement. But now we have landed on this. I have spec text, it looks like chunks methods, each taking a size parameter. I have highlighted the boxes, the places they differ, but they are otherwise the same. In fact, we pointed in Stage 1, how chunks could have been implemented in terms of windows if windows had a configurable step parameter. But we decided not to do that and just have two separate methods.

MF: So I am going to go over the design decisions and things we have considered through the process. We decided to have two methods, as in the Stage 1 presentation. As I said, you could have defined chunks in terms of windows. We don’t want to have a step parameter for windows, not because we don’t need to define chunks in terms of it, but windows with a step of not-1 is not a thing people really do. Also, if you end up doing that, if you have a step other than 1, you have to figure out how you like to truncate or pad the final windows. Things just end up getting weird and complicated. And it doesn’t seem worth it

MF: For chunking, we saw in the illustration that when I chunked by 3, I had that last chunk, size 1. We could have decided to only yield chunks that were fully populated. But it’s better to—and more common in the things we looked at, to yield an undersized chunk instead of trying to, like, pad. If you want to do something like that, since you know the chunk size that you are chunking by, you can check the chunk and treat the last one— not of the appropriate length, specially however you want. That seems like the most widely applicable choice here. The most flexible.

MF: We had considered having a default size for both chunks and windows of 2. Kind of arbitrary, there are some libraries we saw that do have a default size. I guess if there was a default size, 2 would be the choice. But it doesn’t seem worth it, if you want—you want to chunk by 2, it doesn’t help anything. And if you are not familiar with what the second parameter is, it makes it harder for a reader to know what is going on.

MF: We decided to forbid 0 as a chunk or window size. Not because it wouldn’t make sense to do. And a lot of things allow it. But a surprising consequence of chunking by zero, you can turn a finite iterator into an infinite iterator and that would surprise some people who expected that any iterator transform you do, on a finite iterator would still result in a finite iterator. It’s not a safe assumption, but at least in this case for chunking, it would be. We needed to forbid zero and all negative values and the maximum chunk size is cannot larger than the array so that gives an upper bound as well.

MF: In the Stage 1 presentation, we discussed whether we should have a sliding window that slides in and slides out past the ends. We would have to fill it with some padding element. This is less commonly used. I had given some use cases that do require it and found some code that does use it, but not only is it less common than sliding windows generally that don’t slide in and out, but you can also now, given we have iterator sequencing, you can recover this behavior very easily by just sequencing a couple of, you know, padding elements to the beginning and end of the iterator that you’re doing a sliding window on. So because you can recover it so easily, no need to provide that.

MF: And lastly, this is something we never considered, but an option. You could yield iterators instead of arrays. But these are generally small, fixed length things. You may as well use an array. That was always the right choice.

MF: So I think that’s everything I have. I would like to ask for Stage 2. And if there’s anything in the queue.

MF: I don’t see anything on the queue.

RPR: Any questions for MF? YSV

YSV: When reviewing this, we were somewhat unsure about the motivation and somehow widespread, the use case, it needs to be implemented as a built in method. Do you have—you have libraries or something you are referring to?

MF: Yeah. I didn’t include that information in this presentation because I had given all of that in the Stage 1 presentation. But in the repo, in the README, there should be at least all of the prior art we looked at in the Stage 1 presentation, I can pull it up and share it. I went through GitHub code search and looked at—tried to classify all the different kinds of use cases that there were. Let me pull it up

YSV: I remember pagination

MF: There’s carousels and –

YSV: One question we had is how much does this benefit from being built into engines as opposed as being shipped as a library?

MF: I am quantifying that.

MF: So there are libraries that do this. The benefit is going to be more in convenience than anything. I don’t think performance is going to be any different than the user land implementation. Yeah. You know, it will be handy to have around on iterators that people are using

YSV: So could we say that the benefit here is from the standardization coordination point and is that it’s centralized from us having it from a library and

MF: I wouldn’t call that a coordination point. It would mean the decision—the design decisions have been made, and people aren’t doing chunking with slightly different edge cases. It’s not needed as a coordination point like other things we have as a coordination point. It’s not performance. It’s just convenient. I don’t want to oversell it. I put up the—I have the use cases for chunking there. The use cases for windowing here.

YSV: Okay. It’s not an opposition to Stage 2. I want to think why we are moving things into implementations

MF: Hopefully I have made that clear.

RPR: SYG

SYG: In terms of how to quantity these things, for things that are convenient, I think one .… it’s true to figure out how better caching of standard libraries and, if you move something in the standard libraries, it has instant loading, unless you like lazy loading behind the screens does not make it true, but compared to network. So one thing you could do is look at how widespread are use of these that’s very difficult. I don’t know how you find that. But if you could find some number, widespread page takings libraries are things that are used. There could be arguments for improving loading performance. But yeah. Otherwise, like it’s hard on pure convenience to really decide—yeah.

MF: I would just say that, like for these iterator follow-on proposals, the ones I have taken up are the ones that are—I have seen most commonly in the ecosystem implementations. This is mostly through GitHub code search, because it’s very common to call these things both chunks and windows, it was easy to find lots and lots of occurrences of that and that’s how I did this classification that is on the screen.

RPR: ACE?

ACE: Happy to be one of the spec reviewers. I like this proposal.

RPR: JMN has volunteered as a reviewer.

MF: We are jumping the gun a little bit. But I would like to get Stage 2 first.

RPR: All right. So any objections to Stage 2? Congratulations,MF. You have Stage 2.

RPR: There’s also a + 1 from JHD, also happy to work with you.

MF: Thank you. Let’s make sure we document in the note that is Ashley, JHD, and Jesse have all volunteered –

RPR: Could you read a summary of the main point please

### Speaker's Summary of Key Points

Iterator chunking has two methods: chunks and windows taking a size parameter. It has advanced to Stage 2. Mozilla has expressed some uncertainty about—I wouldn’t say motivation. I will reach out to Mozilla between now and the presentation for Stage 2.7 to see if we have the right trade-off there.

### Conclusion

Stage 2 reviewers: ACE, JHD, JMN

## `Error.isError` for stage 2.7

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-is-error/issues/7)
- (no slides)

RPR: All right. We are doing well in terms of getting through the agenda. Next is JHD. If you are ready to present on `Error.isError`, Stage 2.7.

JHD: All right. So `Error.isError` is very simple. It contains a single AO with three lines. There was editorial feedback that perhaps the AO should be inlined and that’s fine. The stack proposal needs an AO, but that refactoring can also be done later. The spec text is straightforward: if it’s not an object, return false. If it has the internal slot, return true. Otherwise, return false.

JHD: So the proposal with Stage 2, we decided to remove any special behavior around proxies. Which I think relieves most people. There is an HTML integration pull request which has not been officially stamped, but directionally approved. In other words, two of the editors of HTML spec are happy with the PR, and so this adds the error data slot to DOMExceptions so that they are true subclasses of error. That is also a relatively small change. I added the slot here, and add a little note about it here. And then the spec reviewers and editors have all signed off. So I would like to ask for 2.7

MM: Yeah. So, first of all, I approve for 2.7. The reason I wanted to say something, this is violating a general rule that I’ve been very forceful about, enforcing. And I want to explain why I am approving it anyway, and what we should interpret this as being a precedent for and interpret this is his not being a precedent for.

MM: The rule that it violates is that it’s a built-in that looks at internal properties of a non-this argument. In a way that’s observably different than some object that might be in its place that tries to emulate it and because it doesn’t punch through proxies, it has the cost that we’re trying it avoid by imposing that, which is a simple proxy whose target is an array object that tries to emulate the array—sorry the error object, tries to emulate the error object, fails to emulate the error object with regard to this test.

MM: The reason that I am okay with this is that with regard to practical proxy transparency, having written—practical membrane transparency, the behavior that I would recommend on practical membranes for error objects is to reconstruct a genuine error object on the other side, which has a transparency cost, which is a mutable property on the newError object is not automatically reflected into the original. There’s a disconnection of side effects. The reason why this is okay is because in practice, people just don’t do that with error objects, so breaking that side effect connection. On the error object, communicating back to the origin by mutating the property is arguably enough within the practical membrane design world constraints.

JHD: Thank you, MM.

RPR: + 1 from Chris.

RPR: Any .… + 1 from Devon. + 1 from Chip. Do you want to speak? Chip has wanted this for years. All right.

### Conclusion

RPR: Just as to check, do we have any objections to Stage 2.7? Congratulations, JHD. You have Stage 2.7.

## Restricting subclassing of built-ins

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/tc39/proposal-rm-builtin-subclassing)
- [slides](https://docs.google.com/presentation/d/1J0xct8EHUC90P6QpggISxuAp_5L_qaDa3SZ9gQaB0kA/edit#slide=id.p)

RPR: Let’s see. Is Yulia prepared to talk next? The topic, I guess it’s the restricting can you be class and built in methods. Is that appropriate now? We have got 23 minutes left and yours is a 20-minute time slot.

DE: Yes. Why don’t you fill time with a joke.

RPR: My wife, actually, she generally tries to avoid my gravy, and she was going to make her own. But to her credit, she stuck with me through thick and thin. We need to create another win as a committee.

RPR: You know, a bear, even when it's wearing socks and shoes, still has bare feet.

YSV: Okay. I will go quickly with this. So you folks probably remember equate some time ago, we introduced the first proposal to remove functionality rather than add it. Going through the proposal, phases. And one of the requirements for moving forward with that, so the proposal was to restrict subclassing support in built in methods.

YSV: So Shu did an analysis. Here is the minimum support where you can simply extend an existing built-in and then, you know, you get back the type A when you make a new A. There is the next kind of subclassing, which when you use iterator—built in methods, they still return the subclass A. Then you can have this thing called symbol species, which allows you to override the type being returned from these—from these methods.

YSV: And then finally, the most complex version of this is subclass type IV. I forgot the details of this. But we can go over it in more detail. One comment here is that type 3 and 4 are actually linked. You can’t remove type 4 and have a meaningful impact without removing type 3. That’s an important thing to keep in mind.

YSV: Okay. So we were hoping in the best case, to take away support for type 2, 3 and 4 subclassing and only keep type 1. The hypothesis is here. We believe that this was both rare and—we had evidence of harm because we had a number of zero days and we also saw there was low uptake of this very powerful capability in the language.

YSV: Firefox went ahead and landed teletri-to validate whether the feel this was in the being used was actually true. And this presentation is a result of what we found out.

YSV: Our previous results show that the compatibility risk of unshipping species is real. Chrome counters estimated 2% of pages modify the constructor or species on an array RegExp and promise. Those are both undercount and overcount because it doesn’t count modifying.constructor. But it does count what is going on in shims. Which might not be a real use of those things.

YSV: Manual inspection pointed to the library core JS. Which unconditionally installs things as the species getter if it doesn’t detect species. I believe that’s how it worked. And out of 1,000 sampled sites, 400,000 all 26 traps and 26 traps from core JS.

YSV: Any questions?

YSV: No. Unfortunately, not. I do have the types, a breakout of the types. Okay. Here are our results of per built-in and per type. What the breakdown was of the teletri-report. We were surprised by how heavily it was used on array. And regular Reg and promise. It’s higher than we expected. That's really high.

YSV: Happily, it’s pretty share—it’s not non-existence on ArrayBuffers and shared array buffers and rare on TypedArrays. But you will also notice that this is for type 2 and type 3. So like in terms of the intervention we could do here, we can’t even remove the worst offender, the species that type 3.

.YSV: So it validates the previous results. And when we did a dive into what is actually going on from these results, we did see that it’s corresponding JS doing future detection. We did consider running a second teletri-to separate out corresponding JS from the teletri-. But this is going to be quite resource intensive risk and given how high the numbers are, more than 10% for most of these, and this is really millions of pages load per day, we are not sure this is only core JS. We think this is a real problem on websites.

YSV: And we can now unlike the previous version of the experiment, we that the paths that are are concretely paths that the ones that are hit. We say which built in are active and show that promise array and RegExp are surprisingly frequent. Whereas the other two I called out earlier, ArrayBuffers and TypedArrays are very infrequent.

YSV: So what do we do next?

YSV: We can abandon the work of trying to remove species. That’s one option. We can alternatively remove subclassing support from built-ins that are not impacted, array buffers and TypedArrays and shared array buffers. From our perspective, we think it is worthwhile. Shared array buffers are expense active. We don’t want to make that more sensitive than necessary. So we recommend removing from shared array buffers. We also suggest adopting a rationale for new built-ins that we don’t support built in subclassing beyond type 1 from now on.

YSV: Yeah. So more on the topic of doing careful design. On shipping it’s extremely hard. We have been trying and the results are not promising. And it’s very difficult to fix mistakes after the fact.

And it’s open to questions.

RPR: Shu?

SYG: Clarification the percentages are from all page loads? Okay.

RPR: JHD?

JHD: Yeah. I mean, it’s hard to—because I haven’t done those teasers apart from core-js, there’s no evidence to support an expectation in any direction. And I think that my personal instinct is you may be underestimating how many people have core JS on the site, it’s the default choice for babel since forever. When I suspected this was a problem, but I didn’t get the telemetry separated either, was when I was trying to make that change to `RegExp.match` (so that the match symbol wasn’t special). I am convinced completely that 100% of the triggers of that counter were from core-js. But nobody wanted to run the research and separate it out.

YSV: So we have currently removed our counters, but we have the code for the counters. If someone is willing to invest the time to tease out the results, I can see about getting them back in. We need someone to volunteer to do that analysis

JHD: When you say resource intensive - do you mean not having the counter collecting data, but rather doing the work to modify the counter code?

YSV: And then go through all of the instances to figure out what the actual percentage of what core-js really is.

JHD: Okay. Thank you.

RPR: Justin?

JRL: Another approach, can we—can we approach core-js to see if they'll remove the bad type things?

JRL: I understand some of the sites will not pick up new code. But some of the sites might be massive and they might update for core-JS or babel and get the new things and the next deploy won’t have the awful typed stuff

YSV: In fact, I believe if I remember correctly and I might not be remembering it correctly, what core JS is checking for the presence of species, if it doesn’t exist, it installs it. And we have no way in our teletri-code to distinguish what it’s doing with species. We know its species gets hit. Right? So it could be that we disable species. And we just revert back to type 1 as an experiment and see how much stuff breaks. But this is a horrible experiment to run on real users or get the list of websites and have a runner execute the site as a disabled version after the browser to see if everything still works. But even there, you know, it’s difficult to say that it’s working correctly. Because you have to be familiar with how the site works.

RPR: Shu?

SYG: I think this reply to Justin. That was covered by Yulia. Even if we—even if we update a core JS and got people to update to the core JS, we still have to run the telemetry again because the whole point is to—okay. For Yulia, I don’t follow the implications from—looked like core JS to now looks real because we got a lot of hits. What caused the additional now it looks real? Just because of the how large the numbers are

YSV: Yes. We are much more nervous about—like, for example, what could potentially be a next step, 2%, what Chrome counters had done, we might say. Okay. Let’s see what happens if we run a beta and turn species off. When it’s 15% of the web that is happening in a given deployment, that makes us nervous of doing such an experiment.

RPR: Nicolo?

NRO: Yeah. You said that core JS hits the path because it checks the species and polyfills it. So like given that I don’t understand why we’re concerned about core JS. The polygill triggers, so websites with old versions of it would still have that polyfill.

YSV: So the problem comes from the fact that we are not certain about how much this is actually core JS and because we’re talking about millions of page views, this is going to be a lot to check by hand. In order to validate that things are not going to break. It’s a massive amount of work we’re talking about.

RPR: Justin?

JRL: To put my guesses into this, the type 3 for promise here is how you polyfill async context. You turn all your async functions into promise functions. And then you patch promises in order to capture contexts. So I think this is actually being used by real websites. RegExp, to me, seems like core JS, I can’t verify that and without something else to say otherwise, that seems risky. Array, though, in particular, I have written array extensions and used species and have my own custom array stuff. That seems like something you are taught in computer science. I fully expect web developers to have done this and have running code. Whether or not that site matters, I don’t know. Maybe it’s not performance, especially for large sites, but that seems like something everybody web dev

SYG: What is taught in computer science

JRL: Extending an array class. In Java, you extend the array to do whatever you want. That seems like a basic case that is taught in a computer science class, how you extend something, array is the default thing to extend.

SYG: Why did you need to use species?

JRL: Sorry. Not using species for that. Using array and then expecting it to return the instanceof my thing.

SYG: Okay. I misunderstood.

JRL: Okay.

RPR: The queue is currently empty. Any more questions for Yulia?

SYG: I would like to thank Mozilla for doing the legwork here.

RPR: Would you like to continue, Yulia?

YSV: What do we think about the proposed way forward? That we disallow it on ArrayBuffers and TypedArrays. And maybe if you were interested we can take a look at the RegExp to see if that’s fake or real. I don’t know how much benefit we get from doing that in terms of complexity and engines, but we can certainly take a look. And then the second part of the recommendation is to adopt a rationale to no longer introduce subclassing beyond type 1 for new built-ins. For example, anything that we add to the language going forward. If there is agreement that this is a good direction, we can make a pull request, removing the subclassing capability from array buffers and shared array buffers and TypedArrays.

RPR: There is a lot of agreement. Mark?

MM: Yeah. I didn’t really need to speak. Yeah. Let’s remove what we can, which is ArrayBuffers, SharedArrayBuffers and TypedArrays, and fix the future to not make the mistake again.

RPR: Shu

SYG: I don’t need to speak. Same.

RPR: So + 1 to rationale, also willing to try for the array buffers. Jack Works? Supports. Justin supports. Ross supports. All right. We are at the end of your slides. Would you like to read out a summary?

### Summary

Mozilla gathered telemetry on real-world use of species. We were surprised that the number of pages using species could be as high as 26% for some of the builtins. Every case we investigated was CoreJS, but given that this is millions of sites, we are not confident that this is potentially web compatible to remove. Discussion focused on whether or not the use cases appeared real, conclusion was that they are for Array and Promise, probably not for RegExp, but we can move forward with the conservative step of removing it from TypedArray, Array Buffer, and Shared Array Buffer, as the usage was close to 0 for those builtins.

### Conclusion

- TC39 reached consensus on removing subclassing from typedArray, AB, and SAB.
- Possibly investigate regexp further.
- Add rationale for future built in subclasses not be included in the built-ins.
