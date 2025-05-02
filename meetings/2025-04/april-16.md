# 107th TC39 Meeting

Day Three—16 April 2025

## Attendees

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Waldemar Horwat        | WH           | Invited Expert     |
| Nicolò Ribaudo         | NRO          | Igalia             |
| Michael Saboff         | MLS          | Apple              |
| Samina Husain          | SHN          | Ecma International |
| Eemeli Aro             | EAO          | Mozilla            |
| Jesse Alama            | JMN          | Igalia             |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Richard Gibson         | RGN          | Agoric             |
| Philip Chimento        | PFC          | Igalia             |
| Daniel Minor           | DLM          | Mozilla            |
| J. S. Choi             | JSC          | Invited Expert     |
| Bradford C. Smith      | BSH          | Google             |
| Ben Lickly             | BLY          | Google             |
| Ashley Claymore        | ACE          | Bloomberg          |
| Istvan Sebestyen       | IS           | Ecma International |
| Ron Buckton            | RBN          | Microsoft          |
| Chris de Almeida       | CDA          | IBM                |
| Jonathan Kuperman      | JKP          | Bloomberg          |
| Aki Rose Braun         | AKI          | Ecma International |
| Shane Carr             | SFC          | Google             |
| Zbigneiw Tenerowicz    | ZBV          | Consensys          |
| Gus Caplan             | GCL          | Deno Land Inc      |
| Mikhail Barash         | MBH          | Univ. of Bergen    |
| Ruben Bridgewater      |              | Invited Expert     |
| Daniel Ehrenberg       | DE           | Bloomberg          |
| Michael Ficarra        | MF           | F5                 |
| Ulises Gascon          | UGN          | Open JS            |
| Kevin Gibbons          | KG           | F5                 |
| Shu-yu Guo             | SYG          | Google             |
| Jordan Harband         | JHD          | HeroDevs           |
| John Hax               | JHX          | Invited Expert     |
| Stephen Hicks          |              | Google             |
| Peter Hoddie           | PHE          | Moddable Inc       |
| Mathieu Hofman         | MAH          | Agoric             |
| Tom Kopp               | TKP          | Zalari GmbH        |
| Kris Kowal             | KKL          | Agoric             |
| Veniamin Krol          |              | JetBrains          |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |
| Erik Marks             | REK          | Consensys          |
| Keith Miller           | KM           | Apple              |
| Mark S. Miller         | MM           | Agoric             |
| Chip Morningstar       | CM           | Consensys          |
| Justin Ridgewell       | JRL          | Google             |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Ujjwal Sharma          | USA          | Igalia             |
| Henri Sivonen          | HJS          | Mozilla            |
| James Snell            | JSL          | Cloudflare         |
| Jan-Niklas Wortmann    |              | JetBrains          |
| Chengzhong Wu          | CZW          | Bloomberg          |

## Intl Era Month Code Stage 2 Update

Presenter: Shane Carr (SFC)

- [proposal](https://github.com/tc39/proposal-intl-era-monthcode)
- [slides](https://docs.google.com/presentation/d/1wvJoRFa8nRjlYSHuVLpxx-wCfwt4H9NIw2fsGJ72gxs/edit#slide=id.p)

SFC: I’m going to be going through the Stage 2 update on Intl error month code. First I’ll start with a little bit of a reminder. What is this proposal? The goal of this proposal is to make—is to make operations in Temporal be interoperable across calendars and eras. For example, there’s a lot of things on this slide here that are not specifically covered in the Temporal specification, and yet are things that we think developers should expect to be interoperable. So, for example, if you specify the year 10 in the era BH in the calendar “islamic”, that should correspond to the year 10BH in the Islamic calendar that you wanted. Although, using calendar “islamic” here is a little bit misleading as you’ll see later in the presentation. But we believe that in type of operation is something that should be able to be made interoperable. So in other words, every conformant implementation of Temporal should have the behavior listed on this side, and it should work.

SFC: There’s been a lot of changes since last time this has come up. So just a little bit of a preface here is FYT, my colleague, did a lot of work on this proposal a couple of years ago and then sort of took a break from working on it and Temporal in general. And more recently, you know, I’ve sort of taken up the mantle of this proposal, so I’ll be sharing the updates today. So one of the biggest changes was in era codes.

SFC: So previously we had had a—we had been using a scheme for era codes that favored—that had certain properties. It favored a general framework that would apply to all the different calendar systems without having to dive into the details of any individual calendar, but also had the property of all era codes being globally unique. Basically what we did was we took the BCB47 era ID for the alleged (?) and used it as the error code, and then for calendars that had reverse errors like the BC era in Gregorian, we talked on dash inverse at the end (of the name). That’s what we had previously done.

SFC: However, we got feedback from a lot of different delegates that this scheme was confusing and one of the feedback that I think resonated with me was one that since these are also the names of the calendars, using them as the names of eras as a categorical error, having to repeat the same word twice and read the same word twice when you’re reading and your code and getting things in the debug output doesn’t really tell you what an era is, and using the names—using the actual names of the eras is more useful there.

SFC: So we’ve now adopted something on the right, in the new column here, which uses the names of the eras as the identifiers, so in order to generate these, basically the rule was if there is a commonly known English/Latin acronym for the era, use that, so that in script, rather, and if not, use a transliteration for it. So many of these calendars have well-understood Latin scripts acronyms, and the ones that don’t such as the Indian and Republic of China (ROC) calendar, we use the transliteration, so you can see that there.

SFC: One thing I want to point out is that the codes are no longer globally unique with these scheme. For example, the eras named "am" means three different things depending on what calendar you’re in. In Coptic, it means [INAUDIBLE] and in Ethiopian it’s amete-alem, and in Hebrew, it’s an Ormondi and at least one source suggests that "am" can also mean minguo in ROC. So, you know, we definitely lose that property by adopting this new scheme.

SFC: Next slide, era of arithmetical year, this was a concept we have in Temporal. It means that when you create a date with the year, but without an era, what era do we use as the index for the year? And we had previously not clearly defined this. The main thing here is that for Chinese and Dengue, we’re now using the layered ISO year as the medical (?) year, so it means you can write code such as what’s shown on the bottom. This is what the Temporal polyfill is already doing, even though it wasn’t written in the spec anywhere, and this is what the polyfill was doing, and I asked users on the ground and this seems to be straightforward to people. Basically using the western year that has the greatest overlap with the lunar year. So as an example here, the Chinese year 2024 starts, you know, in some time early in 2024 and ends early in 2025. It means if you write code such as this, I wanted to highlight this because you end up getting, you know, month 12, day 8 ends up being in ISO year 2025 even though it’s in Chinese year 2024, but this seems to work the way expect it to work. I wanted to highlight that here.

SFC: Next slide. Hijri calendars, we did a lot of research on hijri calendars. And most Islamic countries it turns out rely on physical observations of the moon. We can’t accurately predict what Tate t date for the hijri calendar will be for any region. There’s an interesting calendar about Ide this year, which is a celebration for the year of Ramadan, and half of the countries observed it at the crescent moon on the 29th and half of them observed on the 30th, and it meant that half of the people in the world ended their fast a day earlier than the other half. And this kind of thing is not a kind of thing that we’re currently able to represent in a software because it requires, like, basically realtime live data. So the simulated Hijri calendar is at best an approximation and not something that can be used for displaying a date, an actual reliable date, because of that problem.

SFC: So I’ll point out that, for example, some operating systems such as Windows actually solve in problem by allowing users to go and set a number in their operating system to, like, adjust. I guess every new moon, like, you’ll go in there and set is it plus one or minus one or zero, like, your adjustment, and that’s a proposal we could possibly entertain for ECMA 402. We’re not currently doing that, but, you know, this is a direction we could possibly explore. But the problem of simulated Hijri calendars not really working is still there.

SFC: Another problem with these simulated calendars is round-trip-ability. So a Hijri calendar are subject to change over time. They might month round-trip, so for example, if you were to create a date in year 3000 and you try to recover it later, that may or may not actually be recovered because the Hijri calendar simulations are subject to change in order the better match ground truth, even he it’s really hard to match ground truth.

SFC: Here is a draft solution. Here is a draft, we discussed it briefly TG2 and we’re not 100% aligned on it, and I want to show you the direction we’re thinking of. And there’s links so you can comment on this. The sort of direction we’re thinking about is focusing on the three Hijri variants that have some sort of meaning that have truth. And there's the official Hijri of Saudi Arabia. And they publish the almanac even into the future. They use astronomical calculations to compute their almanac. So then we basically ship the results of their calculations. And that works for several hundred years, a range of several hundred years. There’s two others which are based on a well-known ironic(?) cycle algorithm, tbla and civil. Which is called tabular Type II epoch and those are ones we can ship. In certain regions these calendars are sort of used as reference points when can’t do the observation, and then you might use these. So I want to show on the next slide an example of what this might look like in code.

SFC: So currently the calendar named Islamic is the Islamic simulation-based calendar, but then this proposal is that the calendar Islamic will then resolve Intl dateTimeFormat into the calendar such as umalqura. For example, if you’re in Saudi Arabia, it might resolve to umm-al-qura. As are reminder, this—the type of thing is already done by Intl dateTimeFormat. Intl dateTimeFormat already has behavior of mapping calendars when calendars are not supported. If I put in a calendar here like here where that is not supported, in en-US locale I’ll get the default calendar Gregory. There’s nothing new here in terms of algorithm. Everything here is already conformant with the spec, which I just want to call that out, because that’s very important. And on the Temporal side, Temporal is strict. It will support only the calendars that you give it, that it will support. It won’t do the fallback.

SFC: And the constraint that we’ll have is anything a Intl Tate time format resolves by calendar will be resolved by Temporal. That’s the constraint, so you can continue to use your code that loads the locale calendar and passes it to Temporal, that code should continue to work. We’ll continue make sure that that constraint is upheld.

SFC: Let me keep going through the slides. I want to highlight that spec text is still in progress. Like, a lot of these things are written out in issues, but not yet reflected in the spec text. If you go check the spec text, it’s still the version that was there two years ago. Hopefully this will be resolved. Yeah, relationship with CLDR. We made the recommendations to CLDR. What happened before Is that we asked CLDR, can you come up with error codes, and CLDR came up with error codes and they’re the ones we ended up not liking in Temporal, and in order to not repeat that mistake, this time we as with the, like, champions of this proposal and in TG2 came up with these recommendations codes and we sent it to CLDR to adopt.

SFC: And so far it looks like they’re likely to adopt most or all of our recommendations. And this will be a better outcome.

SFC: I also what to highlight that this is not specific to date code. And this issue of #2869. So there’s a problem here about what go do you with distant dates. Say you’re 25,000 in the Chinese calendar. That’s very far away. We cannot accurately predict the ground truth that far into the future. And, you know, in general, like, dates more than a few hundred years away are not that widely used. Like, you know, like, I don’t know, something—let’s just say 99% of dates that represented in computers are probably within a span of 100 years, right? And then it goes down and, like, there’s a long tail there. So these are very rarely encountered dates. It’s already somewhat unusual to encounter, you know, dates in these—in, like, the Chinese calendar, but then it’s even more rare to encounter them more than a few hundred years away. This is definitely an edge case.

SFC: This leads to two different camps we had in TG2. One camp says "this is an edge case, and it doesn’t matter what are we do in the edge case, so let’s go ahead and fall back to an approximation". The other camp is "this is an edge case, and we should inform the developer this is an edge case by throwing an exception". The exact same facts lead to do two different interpretations. The philosophy the Temporal champions of are generally employed is no data-driven exceptions, and given that developers are not likely to thoroughly test locales in their application, we apply best effort behavior. Intl, you pass whatever locale you want and it will give you some result. And that result, you know, could improve as more data gets added, as more locales get adds, and it will give you some result. We call that best effort behavior. So this code here, like I’ve written here in, code that I think should always work. Where you take your locale calendar and then you give it some Sate, which could come from an external source and you’re able to get a Temporal date in that calendar. Like that, code should not just break randomly. And in an implementation dependent way.

SFC: So my preferred approach, which is currently the approach posted in the issue, and I haven’t seen a, you know, really a viable alternative to this. If you have one, post it in the issue, is that we fall back to the approximation for Int (?) dates and do the best effort behavior, and we can have a follow on proposal for users who care about this. We go ahead and expose information about is this a safe date, safe is a word that we can debate, and, like, basically is this date backed by an almanac or a reliable form, and the answer for Gregorian will be true for the whole range and Hijri will be however lock the almanac is going and so forth. And this could also be reflected in the Intl formatting and such. That’s the end of my presentation. Happy to answer questions. And, yeah—

USA: Let’s go to queue. First on the queue we have Steve nix.

SHS: Is there an option for requesting Hijri adjustments from the OS?

SFC: Yeah, we don’t currently have the Hijri adjustments, you but that could be definitely something we could explore. We should make an issue about that. So thanks for bringing that up.

DLM: Thank you. First I wanted to say I just wanted to thank SFC as the members of TG2 for taking the time to investigate the Hijri calendar and the astronomic simulations, that was something that in some ways arose from our implementation of Temporal. I just wanted to talk a little bit more about that, just bring color to what Shane said. So we were— we’re definitely concerned about the Islamic calendar, which is an astronomical simulation of moon rise. The implementations in ICFRX do not agree. It’s a simulation, not an observation, and there’s currently no way of specifying the observation point, and IC for C and IC for X, the last time I checked, were using separate observation points and I don’t believe the ICU4C is specified, and there’s been at least some reports from users that were generating not just inaccurate dates, but also impossible dates, for example, months with the wrong number of dates. So I agree with everything that SFC said, and I wanted to make sure that others in the committee were aware that the simulations are definitely problematic and at least we’re exploring the possibility of not shipping them, which also aligns with what SFC presented, but we have very little evidence that these are being used on the web, and that’s by examining corpus on websites and I’m planning on adding telemetry to see how much use we see.

USA: Next is you again, DLM.

DLM: Yeah, separate point, I just add on to what SFC was presented about out-of-range states. Using the example of the Chinese calendar where things are, you know, maybe 25,000 years in the future or something, which sounds like a lot, but as he also alluded to, for Hijri, if here using a tabular data source, we might only have a few hundred years in the past and a limited window in the future or no window in the future for which the dates will be accurate.

USA: And that was it for the queue. Would you like to make any concluding remarks, Shane?

SFC: Sure.

SFC: Since I’ve taken over this, we probably should have maybe another Stage 2.7 reviewer. Seems like Dan Minor has been quite involved with this kind of thing, so he might be a good choice.

DLM: I’d be willing to do that, and I can also ask if Henry would like to have a look at it since he’s also been quite involved. But I can volunteer, and perhaps Henry will take it over.

SFC: Thank you.

EAO: I’m happy to continue.

USA: For the notes, that was Eemeli, and that was it, I guess, right, Shane?

SFC: That’s all I have for this topic.

### Speaker's Summary of Key Points

SFC: I gave an update on Intl error month code, focusing of the changes in terms of error codes, years, simulated Hijri calendars, and out of range dates. The exact details have yet to be actually written down in spec text, but I anticipate that that will happen soon. I hope to come back to commit’ for this proposal going to Stage 2.7 in an upcoming meeting this year. We currently have, I believe, the stage 2.7 reviewers from the last time we presented this were me and Eemeli.

### Conclusion

An update was given.

## Compare Strings by Codepoint for stage 1 or 2

Presenter: Mathieu Hofman (MAH)

- [proposal](https://github.com/tc39/proposal-compare-strings-by-codepoint)
- [slides](https://docs.google.com/presentation/d/1eTuB1jjgb2_xG_zMNmkhleJx1F0QviMEwkkBUL9ezPQ/)
- [pdf slides](https://raw.githubusercontent.com/tc39/proposal-compare-strings-by-codepoint/19c5470bfb02acb4988708f5979d12720fa4c4c7/compare-codepoint-talks/compare-by-codepoint.pdf)

MAH: I am here to talk about string comparisons. So first, a little reminder, what exactly are strings? In the ideal Unicode says they’re a sequence of values, which have code points between U+0000 and U+01FFFF minus a range that is used for UTF-16 surrogates. In JavaScript, we represent strings as a sequence of 16 bits code units. That is the UTF-16 encoding of those unicode codepoints, while allowing lone surrogates, so we can have technically malformed Unicode strings in JavaScript. Any Unicode values outside of the basic multilingual plane are encoded as a surrogate pair, as two code units. For humans, what strings are is just a sequence of graphemes. It’s what they can visually recognize as characters, and that can actually be a series of multiple Unicode codepoints. A classic example is emojis which are usually a combination of Unicode values. Here is a bit of an example of how a string that appears to humans decomposes in graphemes and code points. The letters that I used in the word “emoji” here are not all in the Latin range, but that are lookalike letters, some of them in full width, some of them in the mathematical range, and then I put an actual emoji, which decomposes in multiple code points.

MAH: In JavaScript, what the composition actually looks like, if you look for the code units, you can see that the codepoints that were in the higher range actually decompose into multiple code units. All right, so code units are unfortunately a concept that, for historical reasons, show up in a bunch of places throughout the language. Whenever you try to access a string through an index property, you are actually talking about the code unit position in the string, and that means all String APIs that talk about offset or length is related to the code units implementation of the string. When you are trying to match or test a string with a RegExp, similarly by default, it matches by Unicode code units unless you’re using specific Unicode RegExp flags.

MAH: When you’re comparing strings, array sorts or just the regular less-than or greater-than operators, you are also comparing the string based on its code unit representation in JavaScript. But these days, there are alternatives that allow you to actually work with a string’s code points. When you take a string and you iterate over it, you end up iterating over the string as a series of code points. You can ask what a code point at a certain code unit position is. While the input offset is in code units, what you get out is the full codepoint without breaking the value up. To be able to match or test a sequence of code units in a string, you can use the “u” or “v” flags for RegExp, and now you have recovered the ability to match the string by Unicode code point. For comparing strings, though, it’s less clear what you can do if you want to compare a string by using its code points. There are some comparators in the language that are codepoint aware, but let’s look a little built closer into exactly what these comparators are.

MAH: There’s two of them, there’s localeCompare on the string prototype and also the new Collator compare in Intl. Effectively, these are the same, as far as I understand, maybe someone can correct me, but as far as I understand, they behave the same. They both are locale dependent. So because they’re locale-dependent, any changes in how Unicode says the locale should be treating some characters that can change over time. And the other thing that since they’re locale-dependent, it varies on the environment in which JavaScript runs and what the locale implementation is. This is a variation of not being stable, like, it depends on what the current implementation is, and that can also change. There’s actually a proposal about having a locale that’s stable that is in Stage 1, but that wouldn’t quite help because there’s also another issue with locale comparators: they’re meant for humans. What that means is that they do some special processing for some characters.

MAH: So there is a series of characters that are defined by Unicode to be confusable to a human, that means they basically look the same. As I mentioned earlier, I used the word emoji, but I used characters from different ranges that, for a human in some conditions, often look the same, but actually are not the same Unicode value, and the locale comparators group those together: so they will not compare the same, but they will be next to each other in the comparison. It also collapses characters in the same equivalence class. So in Unicode, there’s often different ways of representing the exact same character.

MAH: I’ll give a couple examples now. These are the results that you get from using the locale comparators with some of these values. Here I used a full-width Latin letter, whose code point is in the basic multilingual plane but above the surrogate range. I also used the mathematical character, which is not in the basic multilingual plane, and then I used just a Latin-1 character. If you sort them through the built-in comparison for string, you end up getting something that is not in the Unicode order because the surrogates for the mathematical character ends up being implemented as two code units and ends up sorting before the full width letter. If you sort them by locale comparators, you end up, as I said, because the locale comparators do group confusable characters, you end up sorting it by what humans would consider the sort order, which is ABC, in this case.

MAH: And finally, here is an example of characters in the same equivalence class. This is E with an accent. If you compare these two Unicode characters, even though they are represented differently, they end up comparing the same.

MAH: So what this proposal is about is the request for a portable comparator. Why do we need a comparator that compares by code points? Well, we need it for data-processing, really. As I mentioned, the locale comparators are code point aware, but they’re meant for humans, and have sorting rules for them. We need something that is meant for computer systems. And mostly, for compatibility with other systems. There are many languages these days that represent strings as a series of UTF-8 code units. Some examples are Swift, Go, Rust, there’s probably a bunch of others.

MAH: In particular, to us, SQLite uses it for string representation by default. And the property of UTF-8 is that when you end up doing a byte comparison of the UTF8 code units that is in the same order as the Unicode code point, so all these languages and systems end up sorting strings by their Unicode code points. So what I’m proposing here is something like `String.codePointCompare` , a comparator that compares by code point values. The exact name can be decided, but the outcome that I want is that when we’re applying it to the example values I had previously, the sort order would end up being CBA, which no other comparator currently gives me.

MAH: Why do we need this? This is an example for our use case—in the proposal repo, I have also linked to some Discourse discussions about some requests that are similar to ours. But in our case, we implement custom collections. So these collections have a well-defined sort order: each type comes before another in that sort order, but within the type, we use the intrinsic order for that type. For numbers it is obvious how they sort. For string we want to use a well defined string order. And then for types that we cannot compare, like object references, we either use insertion order for object references or we don’t allow other incomparable values in these collections in the first place. It’s not very relevant, like the rules of our collection, but basically what we need to understand is that systems have collections that don’t use insertion order that use a well-defined sort order and strings need to have a well defined order in that case.

MAH: What is interesting to know about our collections is that they can have different backing stores. To users, they have the same interface, they work the same, and some are backed by the JavaScript in ephemeral memory when the program restarts they’re gone, while others are durable and backed by a SQLite DB under the hood. And this is where a compatibility question comes up. We need the compatibility between iteration of these two implementations. And that is it for my presentation. Any questions? I see a lot on TCQ.

KG: Yeah, I’m in favor of this. I’m also in favor of having more easy comparators in general. Like, don’t we also have a way of comparing numbers in the language, for example. And if I can find time, I will try to pursue something along those lines in the near future, and I think that that might end up affecting the design of proposal. Probably not, but if we are going to add a bunch of comparison operators, I think it would make sense for them to be as coherent as possible. I don’t think this is a blocking concern. Certainly not at this stage. It might be something that we would like to think through before Stage 2.7, though. Anyway, I support this going forward.

MAH: Thank you.

SFC: Yeah, so you sort of talked a little bit in your presentation about, you know, the use cases involving SQLite, et cetera. I guess I wanted to—I was wondering if you could elaborate a little bit more on, like, what the—like, what are the advantages you see in terms of having this implemented in the standard library as opposed to in userland, you have your shim on slide 13 which is, like, you know, 10 or 12 lines, it’s not that hard to write in userland. Are your concerns about, like, this being, like—a built-in being more efficient? Are you worried about this code here being, like, tricky to use correctly, or are you more concerned about, like, this is a very widely needed use case that is, you know, motivated because everyone should be needing it?

MAH: A little bit different parts of this. So let’s actually start with the last one. I believe most people don’t realize that they’re doing the wrong comparison on string and they’re using UTF-16 code units when they should be doing some other comparison, depending on what the intended sort use case they are looking for. In general, the regular sort comparison is not what they would want. The other part is performance. Yes, you can implement this in userland. However, not all engines implement strings the same way under the hood. Sometimes it’s more efficient to iterate over multiple strings like this using iterators, sometimes it actually is more efficient to use an index and use the codePointAt. This one is tailored to the engine that we use the most, but that doesn’t mean this is going to be the most efficient throughout. And no matter what, a native implementation is of course going to be more efficient than the userland one.

SFC: Yeah, I have a—just two replies to those. The first one was that, so you said that UTF-16 sort order is—I forgot the exact adjective you used, I think unexpected or wrong, I forget the exact adjective you used, but it’s a well-defined sort order, and it’s the most efficient sort order that’s going to be possible in—you know, from UTF16 strings. And it’s perfectly fine, if you need the property of strings being sorted, for example, if you’re using sort of like a b-tree map that requires the property of a total order of strings, code order is fine, UTF16 order is fine. Right? So then this gets a little bit into my—well, actually, no, this is this comment. I guess it gets a little bit into my comments that I’m coming up with later, but I guess I’m, you know, a little bit confused by your assertion that UTF16 order is wrong. Like, because it is fine as a total ordering, and if you want a human ordering, that’s what Intl collator is for. And UTF8 order is no more correct than UTF16 order, because they’re both total orderings of strings.

MAH: It’s okay if the only systems your program is interacting with are systems with a similar encoding. Any time you have to deal with another system and need to process your data in the same way, the UTF16 encoding is most likely not going to be appropriate.

SFC: Okay. Yeah, I’ll save more, because I have another topic about this later. The other thing about—so my next comment was, yeah, if performance is a concern here, if we could, you know—I think it would be obviously helpful to see benchmarks. If a proposal is—if this proposal is being motivated by performance, it would be nice to, you know, maybe have, like, a WebAssembly implementation versus, like, this shim and then see if one is significantly faster than the other or some other way to, like, give, like, a ballpark for what the performance is going to be somehow. But, yeah—

MAH: I’m not sure how—I mean, besides having this implemented in the engine that we use I don’t see how I can get performance numbers, because WebAssembly, there’s a bunch of other overhead that would come into play. WebAssembly doesn’t have a string representation, so it’s a can of worms. I’m not sure how I can get performance numbers for a proposal for Stage 1, besides doing the implementation in an engine.

SYG: Just a clarifying question. I think folks in the Matrix helped me clear this up, but I want to check with MAH. By portability. What do you mean by portability? I thought you meant some code doesn’t work exactly the same across systems. Do you mean that, or do you want the semantics to be easily understood without surprise by JS programmers working across both JS and, say, SQLite?

MAH: The second part. As I mentioned, we have collections that are implemented by—that have two backing implementations. One is a heap representation using JS maps. And another one is by SQLLite. And when we’re—so when we’re iterating over that collection, because the collection has well defined sort order, we end up iterating over according to the encoding system in the backing implementation. So in JS we use Maps, but we sort the keys, which ends up using the native sort order if we’re not careful. We actually had some issues where we forgot and ended up using the native sort order in the heap implementation, and that would iterate over keys in one order—if you use the three letters from the example, it would come out as CAB. If we used our SQLite implementation and relied on the SQLite implementation order, we would end up with what I actually expect, which is CBA.

SYG: And the point, with your custom backing store collection is that is stored by SQLite, at some point SQLite is sorting and gives you the sorted order?

MAH: Correct. When you get the results in SQLite from a query, we’re asking SQLite to sort by keys, and it automatically sorts the keys according to its string representation.

SYG: Okay, that clarifies for me, thanks.

USA: Reminder that we have around five minutes to go, and then a few items on the queue, so let’s be brief and quick. Next we have—oh, I assume MAH, that you want to proceed with the queue. But you can ask for Stage 1 at any point or sort of prioritize the queue as you see fit.

MAH: Yeah, let’s go over a few more items.

ABO: Yeah, so I think this is needed because it’s not just that the regular comparison gives a different result. It’s that most developers are not aware of the details of encoding and would not expect JavaScript to give a different result than Python or SQLite or Ruby or so on. And, like, even I, who I’m familiar with encodings, UTF-8 versus UTF-16 and surrogates and so on, I was implementing the, like, sorting of strings in Nova—I don’t know if you remember, Aapo Alasuutari had a talk on the Helsinki plenary last year, and I was implementing string comparison on that engine, and we have strings as UTF-8—or, well, WTF-8, extending UTF-8 to have lone surrogates—and I didn’t realize that the regular comparison would not match JS. And if I didn’t realize that, when I’m comfortable with encodings, definitely the average developer would not be expected to realize it.

ABO: We not only need to add this, but we need to let developers know that they should not use regular comparison when they’re interfacing with other systems, unless they know that the other systems are using UTF-16 code units—which is JavaScript, Java, I think C#, and not much more. Well, everything else pretty much uses the equivalent of comparing with UTF-8 or code points.

MAH: Yeah, I mean, it’s the same for us. Like, we know about Unicode, and we forgot about the comparison when we were sorting. So I take your point that this is going to require some developer outreach.

MLS: I think your shim answered my question. And that is do you plan that code point compare would sort multicode point emojis, for example, and I think the shim does that.

MAH: I mean, it sorts them by their individual code points.

MLS: Right. But if you have two emojis and they differ in the third code point, it’s going to sort them based upon that comparison of the third code point?

MAH: Yeah, correct.

SFC: Yeah, this is a little bit from my previous question, but if you’re interoperating with someone like SQLite and someone a uses UTF8, presumably you have UTF-8 strings in memory, like an ArrayBuffer and using a text encoder. If you have already have the UTF-8 strings you should be sorting on the UTF8 strings, not the JavaScript strings. I was just wondering if you could address, like—

MAH: We actually don’t—so what happens is that the UTF8 strings are stored in SQLite, but when we read them out, they basically come out as—as JavaScript strings. Mostly through JSON parsing. So I’m not going to go very deep in details, but yes, at some point, we have it binary form, but I’m not even sure in our system we actually ever end up seeing an ArrayBuffer of those.

SFC: Okay.

MAH: I think the only place where it shows up is in bindings of the SQLite library.

USA: We are almost at time. There’s two more items on the queue. But MAH, you might want to—

MAH: I will ask Stage 1 here first. Do I have some support for Stage 1?

WH: I support Stage 1. This should have been done long ago. It fixes a bug that dates back to the beginnings of Unicode.

MAH: Thank you.

USA: Also—thanks, KG. Also on the queue, we have—

USA: We have MF with support, JHB supports Stage 1, and CDA also says support Stage 1. Let’s maybe give a couple more seconds for any more comments. Also on the chat, MLS with more supporting comments. Congratulations, you have Stage 1. Would you—

MAH: Let’s go maybe to—WH, do you have anything else to say?

WH: The only other comment I had was that this really has nothing to do with UTF-8 since UCS-4 also sorts in the same way as UTF-8.

MAH: Just UTF-8 was the most common case, yeah.

WH: This happened because surrogates were added late to UTF-16 when Unicode folks realized that they’d need more than 64K characters. They couldn’t use the encodings at the end of the 16-bit range, which were already used for other things. This causes the irregularity when you compare surrogate pairs with characters between U+E000 and U+FFFF.

MAH: That’s exactly the problem. That’s a problematic range, exactly.

MAH: MF, I would love to hear your question, if we have time.

MF: Yeah, I can do it quick, sure.

MF: So, yeah, I generally support the proposal. But in your examples, you showed the kind of assumption that there would be a single function that compares your strings, and I think there might be some more general thing underlying here that we could do. I would like to see during the Stage 1 process that you explore solutions that maybe are a bit more general, where we take just two arbitrary iterables and make it more ergonomic for the string use case have a string iterator that yields numeric code points rather than the single code point strings that the string iterator does. I think we could have a generic solution that's still sufficiently ergonomic. We could probably do both, but I would like to see that explored to see how good it would be, if that’s a possible solution on its own.

MAH: I think KG expressed something similar in the past. My main concern with that approach is because it’s relying on iterators, I am not sure how well engines might be able to optimize for it. Here at the very least, the engine can recognize the sort function being passed to sorts and doesn’t technically have to invoke it. Iterators are notoriously hard to optimize.

WH: I don’t understand MF’s comment. I don’t know the generalization of —

USA: Unfortunately, they are on time, though. We would have to bring this back to a continuation

MAH: Michael, can you file an issue in maybe—that will help Waldemar understand the request?

MF: Yeah. Will do. (opened [#6](https://github.com/tc39/proposal-compare-strings-by-codepoint/issues/6))

MAH: Thank you.

USA: And thank you MAH.

### Speaker's Summary of Key Points

I presented a proposal for stage 1 to explore string comparison by their unicode codepoint. The motivation is compatibility with other languages and systems that use that sort order. There were some clarifying questions regarding when different string comparators should be used, and a request to explore the intersection with iterator based comparators. Some delegates highlighted that the default sort order can be surprising for any developer not familiar with JavaScript string encoding, and a need to document this better.

### Conclusion

Stage 1

## Update to Consensus policy

Presenter: Michael Saboff (MLS)

- [slides](https://github.com/msaboff/tc39/blob/master/TC39%20Consensus%20Apr%202025.pdf)

MLS: This is a continuation from our conversation that we had in Seattle. And I asked for an hour, I don’t think this is going to take an hour. But we will see. This is caused conversation in the past. I think from Seattle there’s general agreement there is a problem we need to deal with single dissenters. It’s rare, but there’s been some issues in the past. There’s also, I took away from Seattle, there’s no desire for like a major process change. That we—our social norms seem to be enough to guide us for 9X% where X is a pretty big number. 98%. And it also, I took at here’s no need to have two objectors. I originally proposed 5% at Seattle and people thought that was too onerous and have to figure out what is 5% so on and so forth.

MLS: There was some sensitivity having dissenters from the same ECMA member or possibly different members with a financial arrangement between them. So, for example, in part of Apple, if the two dissenters were both Apple, Apple delegate, that doesn’t seem right. I agree that’s something we should figure out how to do.

MLS: And last, I think MM brought this up, and others, any system we come up with can be gamed. So any changes we make are not going to change that. Maybe make it more difficult to game it, but it’s my hope that members, the TC39 members are acting in good faith. And generally, I believe that that is the case. So this is the kind of take-away, I took from Seattle.

MLS: So the goals for TC39 decision-making is, in my mind, an orderly, deliberate, open and welcoming and inclusive process. That those in attendance delegates in attendance, and by the experts, they can discuss and evolve JavaScript for the whole ecosystem. You know, not just developers or implementers, but everybody, including end-users. And it should be based on social norms than flexibility in the system. We agree that general consensus where we had a proposal that went to Stage 1 and there was general agreement among people, let’s investigate codePointCompare.

MLS: So I am going to propose a minor change. Withholding consensus and the check marks we already do, maybe need to remind us, but delegates clearly explain the reasons, including possibly acceptable changes to a propose, so that they would support it. I am going to skip the second line and come back to that. We do want the reasons for withholding consent to be recorded in the minutes to be helpful for not only the champions, but also other people to remember, go back and remember why something didn’t move forward. And that withholding delegates are willing to discuss with champions possible path forward. The last two things are being done.

MLS: What I would like to propose and I think that MM came up with is that we don’t have to necessarily have a second delegate withhold consensus. They could also basically voice support. And I am going to—if two delegates withhold consensus. If somebody makes a motion and somebody seconds it, I think that’s what we are discussing in the case of somebody that voices support for somebody else that is withholding consensus.

MLS: And so we basically have two people and we don’t want them to be from the same ECMA member. Again, this could be gamed. Because members could agree. People from different member could agree to withhold consensus. But again, it’s looking for this to be done in good faith.

MLS: And so that’s one thing I would like to discuss if we have a second delegate, or I second that or I support that, they don’t have to necessarily—they may not think that they would withhold consensus, but they understand the reasons why a dissenter does withhold consensus.

MLS: And the last point is, can an invited expert withhold consensus. I think they could be a supporter, second it, but the reason I am bringing this up is because you look at ECMA bylaws, and only members are allowed to vote, for example, probably at the May meeting, we will vote on—I think we already voted on ECMA 2025 sending it to the executive committee and the GA, but only members can vote on that.

MLS: So this is what I am proposing. So it’s two things: one, that we have a second dissenter, second person withholding consensus. Or a person that supports the sole dissenter, and they—neither these can be from the same member company or having an obvious financial relationship between themselves. And then I would like to discuss where invited experts fit into this policy.

MLS: So that is it. I don’t have the queue available because of how I am sharing the screen. But I will leave this slide up. So… That was 9 minutes. Let’s see how long we discuss this.

DE: Well, I think it—this is good to have a way to overcome certain vetoes, and good to acknowledge the state of our decision-making procedure. One thing that Rob and the chair suggested last meeting was around having—you could call it cooling off period. Anyone can block, including invited expert, maybe, a proposal during one meeting. Say, it’s not going to advance this meeting. And then we cool off. We—the objector or objectors clearly state their reason. And then at a follow on topic, very subsequent meeting, we can have an agenda item which is, you know, considering moving past the or overriding the objection. And so then we can make a presentation which is the person who decides they want to specifically invoke this procedure, makes a presentation, explain the objection. Explain why they think it shouldn’t be a blocker. And then we see if there are multiple people objecting to it. So this procedure could be invoked no matter how many people, if it was one or multiple, who gave the specific observation. And then the committee given sufficient time to think things over, could make a collective decision on whether to move past it. I think this—this thing about taking time to overcome objections is more important than some of the details about the threshold, whether it’s two people or more people, whether it includes invited experts. I think the most important thing is that we’re very conscious and resolute when we make these decisions.

MLS: DE, if you want to bring that forward, that’s fine. I haven’t thought about that and worked through that. I generally agree that something like that would be useful. But I think that’s for another time.

DE: I could make another presentation about, this where I propose this. I was—

MLS: That’s what I am saying

DE: I do think we should adopt this—these two things together, though.

MLS: Okay.

DE: Because if we just do the kind of weakening without this other safe guard it could leave us in tricky situations. I do want to understand better why you think that this is kind after separate something from what you have proposing.

MLS: Because I haven’t thought about it. I would like to—

DE: Okay. Sounds good

SHN: I just want to make a comment, it’s not necessarily a question. It’s come up on the MLS’s slide and it is the question of invited experts as you are all aware invited expert is based on ECMA rules. They don’t vote. I understand in TC39 when you do temperature checks it’s different than voting. I think here in this particular discussion, perhaps we need to think about the invited experts and whether they can hold—withhold consensus. Ideally, I don’t think that would be a way to go forward, but I leave it there for discussion.

CDA: So just on this point, I am not on the queue, but it’s sort of been long-standing practice that invited—— in the spirit of committee, blocking concerns from invited experts are respected as are blocking concerns from people who are delegates for ESM members that are not able to vote. So I don’t think it would be practical to go down or fruitful to go down the slippery slope of determining whose voices are more important than others.

SYG: Could you point me to some examples for invite—I am not exactly sure when have invited experts actually block.

MLS: We could.

CDA: Long-standing historical precedent comment…

DLM: We’re opposed to the financial relationship qualification. We have a financial relationship with Google, as does Apple. And our current process requires basically implementations between V8, SpiderMonkey and JavaScriptCore. So if we move ahead with not being able to do anything based upon function relationships, a proposal could have advanced to Stage 3 and then 2 to 3 implementations. So don’t think this is right

MLS: DLM, I wasn’t thinking about the financial relationship that you have with Google and apple has with Google until the—I was thinking of the contract financial arrangements. But yeah, you bring up a GAD point.

CDA: All right. NRO?

NRO: Yeah. I agree with not having a blanket on blocks from companies with financial relationships exactly for the reason DLM just said. But simply good to have some wording about that. There are, like, cases, but I work for Igalia and they are paid to work on this. And like it just should be disallowed for some other company in the committee to like try hiring as just Google proposal with them. And like, all of this needs to be somewhat based on good faith. Because, like, we cannot enforce this. But at least having some guidelines, some wording on this saying, like, it would be good.

SFC: Yeah. Regarding the financial relationship thing, DLM already brought up, you know, the three browser implementer problem. But the other thing is basically, very many of the organizations here, you know, have financial relationships with, you know, companies like Igalia and so forth. But Igalia is also quite a big company with a lot of different, you know, delegates working on a bunch of different proposals and it doesn’t necessarily, you know, make sense that, like, you know, if one delegate working on one proposal, you know, like, backs you know a delegate from a different proposal that should be disallowed. Like, it’s almost a thing, if they’re in very—a very tight relationship, but again that’s—which I think is sort the spirit. They are in a tight relationship. But that’s just very, very difficult to define. Yeah. That’s all.

CDA: Thank you. There’s Michael Ficarra with a + 1 to NRO’s comment. Let’s go about further on the queue to DLM again

DLM: I wanted to point out that the current process allows for blocking solely on something being late—added late to the agenda. And I think that’s important to maintain. I don’t think we should need a second—a person to second that, if people legitimately haven’t had a chance to review something because it was added late to the agenda. That should continue to be a sufficient condition to withhold consensus.

DE: Yeah. DLM, I think—I didn’t think about that. Including that here. But agree that if you are not in a ten-day window that’s more of a process thing that’s not based upon we don’t like this or want this change, kind of thing. I support that.

DE: Yeah. If we do say that multiple meetion to overcome a block, then I think this followed naturally and that’s a benefit for the fundamental reason why Dan is raising this, because everyone should have a lot of time to review things and think them over

CDA: For the record, for some reason, your mic went really quiet that time. Anyway… Waldemar is next.

WH: I am a bit uncomfortable with creating second-class citizens out of invited experts. Can invited experts still review proposals?

MLS: I don’t have a problem reviewing proposals. I think the issue is more of keeping with—with ECMA’s bylaws and policies. And you can think of the case, again, I—in my mind, gaming the system, where invited expert comes from one meeting to go block a certain proposal. Not that that is going to happen. But it could.

WH: A lot of things _could_ happen. But I think we’re focussing too much on the identity of whoever is supporting or opposing rather than the rationale. I think the rationale is more important. I don’t see that much of a difference between invited experts and academics, other than official standing within ECMA. TC39 has explicitly not done formal voting other than the annual votes to push out a new version of a standard —

MLS: Well, actually, TC39 does more voting than probably all the other TCs because a dissenter is a negative vote. It’s a veto. So we vote far more often than the other TCs. All the other TCs work by consensus and don’t take votes except when they are advancing a new version of a standard. So we do it quite often. Not every meeting does we have a dissenting vote on a proposal moving forward, but that’s a vote. So I want us to recognize that.

WH: I disagree with this characterization of everything as a formal vote. I am also uncomfortable with not being able to support proposals. Or are you saying invited experts can support, but cannot oppose?

MLS: I am saying that invited experts should not be a lone dissenter but certainly they could give support

WH: That seems wrong.

SYG: I’ve been somewhat uncomfortable throughout the entire—not this discussion, but throughout, like, every TC39 the whole working history, I’ve been involved in TC39, I have never really quite understood to what extent we are to uphold the ECMA bylaws because we seem to operate in opposition to a bunch of the bylaws. I understand we have a lot of sway and I understand we have been operating with our own way for a long time. And—but like we are still a body within ECMA. And we have kind of a legal and IP umbrella through ECMA. So I am not—I don’t even understand what is the flexibility that we are afforded here? Like, it seems to me for the invited expert question, the ECMA bylaws are pretty clear. So if we’re—if this is actually under discussion as SHN suggests, as she herself said, I would like to hear better from ECMA administration what they see as the flexibility that the TC39 has to be opposed—to operate in a way that isn’t according to the bylaws.

SHN: SYG, thank you. A fair question. You know, this discussion is raising a point or multiple points on how TC39 works versus I would say all the other technical committees. Voting is typically something that we do more at general assembly, which it’s only the ordinary members. Within TCs as MLS said, it’s done by consensus. Mind you, other TCs are much smaller and are much—in a much frequency having to find this point of consensus because of the—when they—the finalizing the standards. This is different for TC39. I am always trying to be pragmatic and ensure that the work that every technical committee does is bringing value. I do think as we think more and more about this topic of consensus is bringing up—it’s becoming tricky. I also understand WH’s comment. You don’t want two-class citizens. SYG, I don’t have a clear answer and I appreciate I may have the chance to give a much clearer answer at the next plenary in person. And I may go and think more deeper about this in a broader way of TC39. And I’m sorry for that. I know it’s beyond the agenda today. But some points brought up today, have touched some very important points of our rules.

MLS: So let me see if I—like I say, I can’t see the queue because I am displaying full screen. Let me see if what I say now is acceptable: that we need a second, either delegate to withhold, or to second as it were or support a sole dissenter; and that that can’t be from the same ECMA member company. Is that—is this taking that—those statements together, that an acceptable change to our policy?

WH: Who are you asking?

MLS: I am asking the committee —

CDA: I just wanted to respond on that particular aspect and some of those other aspects, and ECMA rules, or what invited experts can and cannot do. I think the details like that are important. And especially relevant if there’s going to be such a significant process change. But I think that we’re putting the cart before the horse a little bit there because I don’t think that those particular details are going to move the needle on whether this committee wants to resolve the higher level process change to begin with. So with that, I would like to keep moving through the queue.

DE: So briefly, we have been operating at—you could call it a superposition of multiple different possible policies. Different chairs in the chair group, even, have different opinions whether invited experts can block. And when invited experts do block, then it’s ambiguous whether the block is real and the—it’s getting blocked or whether maybe the person who blocks is just voluntarily—the proposal champion is making different proposal back because they got strong feedback. I’ve been telling some of the people in the chair group privately for a while, this should be made more unambiguous, but it’s politically fraught as we are seeing now. I think overall, ECMA does—TC39 does follow ECMA rules. And I don’t see any mismatches. ECMA has the only—ECMA has a voting procedure that TCs can use, but most TCs don’t use it and we are similar. If there’s some other mismatch with the rules we should definitely get it changed in the rules. We have already gotten several changes made in the ECMA rules to accommodate TC39. It’s straightforward to accommodate ECMA changes, it’s a simple majority of the general assembly. And you know, as president of that general assembly, I am happy to help you get a new rule change through our process.

JHD: Yeah. I mean, so separate from the ambiguity, I think it’s important that invited experts and delegates are afforded equal rights. But ecma exists to serve committees. If its bylaws are not serving the committee, then they must be changed. And we should pursue that if it turns out there is a conflict, which it doesn’t seem like there is. But I wanted to state that. We aren’t here for ECMA - ECMA is here for us, and all the other committees.

DLM: I wanted to second what CDA said. We can go down a deep rabbit hole talking about invited experts and it’s important we go back and talk about the overall proposed change to the process.

MM: So first of all, let me just make it unambiguous that I object to this overall thing. But I am very glad to see that what is being asked for has been whittled down substantially from the thing that I objected to much more strongly. In particular, the fact that the supporter does not need to be objecting, leads to support our something, I wanted to clarify, and MLS when you raised that, recited me as the suggestor, I am going to clarify the suggestion on that which is that the—MLS started his proposal, maybe it’s in the previous slide, simply saying there’s general agreement that there’s a problem with the lone objector. What there’s not general agreement on is that there’s any cure for that, that is worse than the disease. A sole objector, together with the assumption that members are working in good faith, I don’t think is a problem. The danger is that there is a sole objector that everyone else suspects is not objecting in good faith. And, therefore, the thing that I was suggesting was that the supporter, if you will, is not so much supporting that the proposal should not proceed; is not seconding, I think those are both misleadings ways to put that, even if procedurally are correct. The way to put it is that someone else on the committee—and it’s fine to say not a community member, if we go forward with this suggestion—agrees that the objector is objecting in good faith. And as long as the objector is objecting in good faith, I think that deals with the only legitimate issue with the sole objector. And I would certainly object to anything stronger than that.

MM: And like I said, I think that the main reason I think this whole direction is counterproductive is that under the current rules, we all get to work on the problem. And when there’s a sole objector in good faith, they’re normally objecting to the particular solution to the problem. They are usually not objecting to the idea of some underlying motivating problem being solved somehow. And I have seen this over and over again—which I think TC39 is brilliant at—is, let’s see if we can find some other way to solve the problem that overcomes the reason why the objector is objecting. And then we move forward. Any attempt to weaken that distracts from technical work and focus activity instead on political work. Can I get somebody else to support my objection? And that’s just counterproductive. I so object to these whole thing

MLS: MM, I think both you and I have been suggest to people that have—that have objected in bad faith.

MM: Yeah

MLS: And we have seen it.

MM: I agree. Let me respond immediately to that.

MM: Every case where I have been blocked in bad faith—that I believe is in bad faith; obviously, there’s no objective test—has been by a browser-maker. And I see SYG has an item later on the queue about the implicit veto that browser-makers have anyway. If there’s no way to overcome that, there’s no way to have overcome the bad faith objections that I’ve been subject to.

MLS: So the voices of support a sole withholder, I would like somebody to, if they are not willing to object themselves, to assert or to offer to the committee that they believe that the objection is in good faith. And about I do agree with you, that we want a collaborative process as we evolve the language. And you’re right, good faith is a subjective thing in most cases. Although, I think, there are been cases in the past where it’s pretty clear by a majority present that it was a bad faith.

MM: Since I did mention I think I’ve been blocked in bad faith by browser makers, it’s not someone on the committee at this moment. I am not saying that to anybody here now.

SFC: Yeah. So I largely agree with the perspective that MM is bringing here. And I just wanted to ask like, it seems like the real problem is, you know, a delegate acting in bad faith, by some definition of bad faith. And it seems to me like that’s a problem more for the code of conduct committee than anything else. Like, if there’s a delegate acting in bad faith, then, you know, we kind of have a process for handling that.

MM: I did not bring the particular case to the code of conduct committee, and would not because I can’t imagine that would have been productive.

MLS: Yeah. I agree with MM there. I believe that there’s been cases where I thought that there’s code of conduct violations, but I didn’t think it was worth reporting. We have seen in the past where—and it hasn’t been, I would say, in the last several years—but we have seen in the past where withholding consensus has caused somebody to stop attending. Whether they were the champion of something, or even if they were just a bystander. And I think we also obviously have people—we talked about this in Seattle—we have people who have more initiative to speak up, and there’s others that are more reticent. And we have to take into account if we want all voices to be involved in the technical discussion in the committee.

SFC: Yeah. I mean, all I am saying there is that it feels like, you know, if the problem is really acting the bad faith, then maybe we should look more into that—I agree with what MM said, that’s a direction we should look more into. Handing it from that angle.

MLS: And I agree with MM. I don’t want the cure to be worse than the problem.

PFC: I would like to register my explicit disagreement with the assertion that the status quo doesn’t admit any politics. Either way you slice it, the process is a political process, whether you have sole dissenters or not. If you have sole dissenters, there’s an intense amount of politics around things like, which ECMA member is that dissenter from? How much soft power do they have in the committee? I agree with the goal of building a process that minimizes the politics and maximizes the technical discussions we can have. I just disagree that the status quo is that process.

SYG: So MLS, I want to entertain this hypothetical to the extent that you would like: I wanted to talk about—if we all do agree that de factos kind of do exist by the browsers—let’s not bring individual technical stuff into it. Let’s just, for this hypothetical, say, that we somehow get a top-down direction for some other reason completely out of my control. Like this product blah, blah, therefore, we cannot agree to some particular proposal. It doesn’t have anything to do with the technical merits at all. It’s just like force some other constraints, it’s not shippable for us or something like that. And for this hypothetical, this is a problem only I have. Apple doesn’t have it, Mozilla doesn’t have it, other implementations don’t have it. In that world there is 0 technical reason in this hypothetical for any other implementor to support the veto. It’s not technical. It’s from top down. Given that, if we can’t have that veto, we are still going to go into a world where the feature might be non-interoperable, because for external constraints I can’t ship the feature. How do we address that failure mode?

MLS: So I think if you’re going to act in good faith, I think you would let the committee know that that is the issue. That you can’t share—

SYG: [inaudible]

MLS: Without revealing any internal information, but can say that we can’t ship this with whatever justification you can provide, then the committee knows that. And the committee can respond to that. Yeah. Various implementers of various technologies, they have what they see their market as, and they do or do not agree to certain changes in standards. But communication is the most important thing here: “that is why we are not supporting this, and this is what we would support”.

SYG: Typically, I think hypotheticals like I brought up will be exceedingly rare, and I am supportive of this change. But there are some, you know, some new edge cases that may arise that take up process discussion that you want to point out. That’s all.

MLS: Okay.

WH: I am concerned that we’re focussing too much on folks objecting to things in bad faith and we’re throwing the baby out with the bath water. There are a lot of scenarios which arise much more frequently. Those include proposals which simply haven’t met the entrance criteria for the stage they are going for, or bugs which have been identified in proposals, which should be fixed before advancing. And this change would not be helpful in those situations. I think the reasons for not advancing at a particular meeting are more important than how many delegates state those reasons.

MLS: WH, wouldn’t you say that, for example, if there’s a bug found or, you know, don’t have enough reviews done, that that would be easy to get a second person to agree to block? And it’s clear, the reasons for withholding consensus would be stated and recorded. And those could be easily overcome in that case. Also, with a bug, if the bug is addressed in the spec or algorithm or whatever, if there’s a bug, other people could see that there’s a bug, if it’s pointed out, they would support withholding consensus, and that bug would be either addressed. Or if it’s a fatal flaw, I think that would be able to be shown to the champions.

WH: That has not been my experience. Typically what happens is, somebody identifies a bug. And the other delegates are not really familiar with it. They need to think about it. There is no time left in the timebox to explain the bug. No, you would not get support from other delegates for that. This change is counterproductive in such situations. And it’s also unnecessary, since in that situation nobody is trying to actually block something from getting into the standard. It’s just not ready at that meeting.

MLS: I wouldn’t say that’s true. I think things have been blocked with a desire never to bring them in the standard.

WH: You misunderstood me. I am talking about the more common situations in which the discussion identifies a problem, and nobody has had time to work on fixing the problem yet.

MLS: But again, I think that is something that should be able to be—the others in the room can be made aware of that, and it’s not a huge amount of convincing them to also support blocking. And that blocking would be considered temporary.

WH: This asks people to block based on things they don’t understand. I am very uncomfortable with that.

CDA: All right. Thanks, WH. That’s it for the queue.

MLS: So I sense that we’re not willing to move with even part of this, which is we would have somebody who would support a sole withholder?

MM: That’s correct. I am not willing to—I think that we’re fixing a non-problem, and even a step in this direction is worse than the disease.

MLS: Okay.

CDA: Thank you. If you would like, MLS, I mean, you could formally ask for consensus for your proposed change. But if I am a betting man, it doesn’t sound like it’s—

MLS: I don’t think I need to ask that question, because I think I already know the answer.

CDA: Okay.

MLS: MM and WH’s last two comments were sufficient to convince me of that. But I think that other comments that were made during this discussion show this is a problem that does need to be addressed.

SYG: To MM, we heard a direct disagreement to your understanding of the status quo. I wonder if you have any thoughts on how your interpretation of how political the work required is in TC39, your view is at least not universally shared.

MM: Okay. Any time you get human beings together under any circumstances at all, there are some politics. I don’t disagree that in the status quo there’s some politics. But I also agree with the point made at the same time, that we shouldn’t do anything to amplify the politics, at the expense of technical points. And any step in the direction that MLS is proposing amplifies politics and diminishes good faith, technical involvement.

SYG: Can you explain the thought process that makes you think that? Compared to the current way, which as I agree with more of what PFC had said, one way where the single veto, or at least the threat of single veto, has turned extremely political is it focuses all the engagement on either heading off an anticipating kind of no repeat folks who would like to block, or reactively dealing with it after the fact. It concentrates a lot of procedural and political power into the hands of those folks. And that’s where I see a lot of political work—if you are not involved in a particular proposal—it changes from proposal to proposal is what I am saying. It’s not a constant thing that is always happening in committee at large. So I think it’s very disproportionate, and some people get exposed to it a lot worse than others. Especially those who need to have some involvement in every single proposal. So I would like to understand it in comparison with that. How does MLS’s proposal make it worse?

MM: Okay. So, first of all, with regard to those issues, I am glad this slide is on the screen. MLS’s check mark, the status quo, are really essential to making the current process as reasonable as possible, which is that the objector has to support technical engagement, has to make their reasons clear; and has to engage with the delegates to see if there’s a way forward with the purpose of the proposal that meets the objector’s objections. I think all of that is great, and I think we have been doing that. And beyond that, I frankly did not understand the question.

MLS: So MM, let me add that I think we do that almost all the time. There are times when we don’t do that. And that gets to the political side.

MM: Okay. When you say we should do the things that are political—

MLS: Yes.

MM: It’s in our—how we work of the the check mark things. Explicit.

MLS: I had I would have to look, but yeah, I think it’s the general ethos of the committee

MM: How do we write down the check marks of how we work that is not more damaging than the status quo?

SYG: I mean, I think the plus sign here is that the proposal to make it better. Right?

MLS: Yeah.

MM: I don’t understand why you think that would make it better

SYG: Because I read this as—

MM: What is the problem with the status quo, if you explain the problem with the status quo such that the plus sign thing would address that problem without introducing worse problems?

MLS: Because one person could have a non-technical, political reason that they want to block something. It’s happened in the past, we have seen it; and there’s no technical resolution that will allow something to move forward.

MM: Okay.

MLS: If you have a second person added to that, whether they support it or also withhold consensus for maybe the same or different reason, and they articulate it, you reduce the likelihood it’s done for non-technical reasons in my mind, especially if they are from different member companies

SYG: The way I phrase it is, if it’s a good technical reason to object, you should be at least able to convince one other person on the technical objection. If it is not a technical objection, then you have a lower likelihood of being able to convince someone else to also see your point of view, because it’s not actually a technical objection.

MLS: This is what I have been saying for over a year

MM: Let me come back to a point that certainly always prominent in my head when we discussed this. I did not understand MLS’s answer to SYG’s earlier question, which is about the unilateral browser veto as reality on the ground. Since a browser-maker can unilaterally block, because the committee would do a disservice to everyone to proceed forward in putting something in the standard that a browser maker announced they are not going to implement. So I did not understand—that to me is a primary issue here. Any attempt to weaken the ability for anybody other than that browser to block, without weakening the ability of the browser to block, which is impossible, simply disempowers the community compared to the browser makers.

SYG: You are missing the converse of this. Browsers don’t only have a de facto veto, but a de facto antiveto. We can unilaterally ship things as well.

MM: Yeah. That’s happened. And I don’t—

SYG: There is no weakening here

MM: That’s happened. That's the reality that I agree that there’s—I mean, in general, one of the things that I think is right about the whole TC39 phenomenon in general, most standards groups, we have no enforcement power. If we move forward in a way that is at odds with what prominent JavaScript engine implementers agree with each other to implement or not implement, we make ourselves irrelevant. So yes, the browser-makers do have the unilateral ability to implement something anyway. And we have seen that kind of thing happen, in fact. I don’t understand what the implication of that is. I haven’t played that out.

SYG: Your argument was that MLS’s proposed change here would weaken every other non-browser delegate’s withholding power. As I understood your argument, because browsers have this unilateral single veto power, de facto, then in the process, we should also enshrine and give every other non-browser delegate the same power, to have single veto. Is that a fair characterization of your argument, first of all?

MM: Yes. I think I see where you are going. So let me get that. This goes back to—let me play some more of the implications of disempowering the committee and what it means for the committee not to have any enforcement power.

CDA: MM, sorry to interrupt, we just have a couple of minutes left before the break. Please continue.

MM: So is there other things on the queue? I can’t see.

CDA: No.

MM: Okay. So the browsers got together at one point because of disagreements with W3C to form WHATWG. And in so doing, made it clear that they are going to proceed forward with agreement among the browser vendors, leaving the non-vendor voices that were in W3C, rather than on WHATWG, powerless. And that was publicly visible, as it should have been. If the power that TC39 as a standards process has, comes from the fact that the engine-makers and the community are both on it, and therefore the browsers who can certainly go off and do another WHATWG, or in fact go to WHATWG to decide among themselves, is to just make it public, that they are making a decision just among the browsers, leaving the community out of it. And that should be costly. That should be costly in the public visibility, that the browser-makers have decided to do that.

SYG: Sorry. And that is an argument for not accepting MLS’s proposed change here? I think I am missing a few steps

MLS: I’m not sure how MM’s comments are tied together.

SYG: Yeah.

DE: So TC39 works well today because we collectively do this technical development in alignment within the committee. If we stopped doing things, then, you know, things would be done in other places. But we can preserve our position and our ability to contribute to the web platform by continuing to operate effectively and making good designs and coordinate them.

### Speaker's Summary of Key Points & Conclusion

- Some delegates were in favor of these changes or something similar.
- It is thought by some on the committee that going forward with this process change would be worse than the status quo
- It makes sense to continue discussing our consensus process at future plenaries.

## Stage 1 update for decimal & measure: Amounts

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://notes.igalia.com/p/tc39-2025-04-decimal-intl-integration#/)

JMN: Okay. Good afternoon, good morning, good evening, . We are talking about the decimal proposal. There is a measure proposal in here. This is going to come up in the presentation, the decimal and measure proposals are kind of being at least in part developed side by side at the moment. My colleague, BAN is on sick leave and about working on the measure proposal for some time. You remember it come be up in November in plenary. He’s with us in spirit today as he has been helping with decimal and progress on the measure proposal

JMN: The status quo is that we have settled on a lot of the semantics in the API for decimal. That’s not new. We have settled on that for quite some time now. In the meantime, the internationalization side of thing is a work in progress. What I am here to tell you about today is some of the progress we have made there.

JMN: We think we have settled on a solution to many of the problems there. This presentation is a bit awkward because I am going to deliberately not name a class that I propose to add to decimal. You see, I am calling it `Decimal.Something`. It’s a bit tongue-in-cheek. But I hope you understand my intention.

JMN: The point is that the name is important. And we don’t quite know what name we should use yet. The name is TBD. Maybe things like `Decimal.Amount` or `Decimal.WithPrecision` would be good. The name is a bit up in the air. We’re welcome any suggestions that you might have, but I hope we can avoid too much bikeshedding about that. If I say “amount”, that’s usually what I mean. But in fact, that’s not really the official name here. Think of `Decimal.Something` or placeholder.

JMN: And this idea of a `Decimal.Something` or `Decimal.Amount` is a small class that really rounds out internationalization. This class can unblock us with some issues there.

JMN: And looking forward — or looking sideways, depending how you think about it — if this class is accepted, then this is something that the measure proposal might also use. It’s something that the measure proposal might add fields to, to store things like a unit or currency indicator.

JMN: Just to recap what the issue is with decimal: so for decimal, I think the story is clear. We are interested in numbers. And when we say "numbers", in that context, we settled on the notion of a point on the number line or mathematical value. And that has a number of use cases, we have settled on IEEE Decimal128 for that. That’s all kind of old. But for the internationalization story, when we think of decimal, there’s a bit more to the story there. We need to have a kind of a concept of a number that somehow knows its own precision. So think of it as something like a number plus a precision or a sequence of digits of a certain form, if you like.

JMN: You might say, well, what is going on? Why can’t we use, like, JS numbers for this? That’s kind of no big deal. Right? The problem is that using numbers currently with Intl is error prone, especially with NumberFormat and PluralRules and the mixture of the two, the for example type, if we do this, with decimal, shouldn’t be created that has the same problems. And these needs for internationalization exist in parallel to the needs that exact decimal values, that is, mathematical values essentially, currently meet. So we have a kind of version of Decimal128. We call that Decimal. We think we understand the use cases and the needs there. But for internationalization we need a bit more. And that’s what we are here to tell you about.

[slide 4]

JMN: The idea has been bouncing around for quite some time in various forms in the last plenary we talked about the overlap between the Decimal and Measure proposals. And in fact, as somewhat radical suggestion we even put on the table the idea of merging the proposals. Thinking that, well, their use cases and the needs overlap, to some extent. Maybe that overlap is large enough to warrant, you know, thinking of this as one proposal. But the consensus was that they should remain separate. The use cases are too different. They might overlap, but there’s a non-overlap here that’s big. So we keep them separate. So one ever the proposals or one of the suggestions that we had there for talking about these—the intersection between measure and decimal was to have something like 3 classes. Something like decimal, which we already had. Some kind of number with precision. And measure. But that didn’t get much traction either. And so coming out of the last plenary, we were struck. We had the internationalization use cases, but we kind of didn’t have a path forward.

[slide 5]

JMN: But what I am about to tell you about today is something I think might be way forward or thinking about. And the idea here is to try to take more seriously the idea of measure and decimal are just separate proposals. And the thinking here is that if we want to talk about units or currency codes, that naturally suggests a number of issues that can be separated from just talking about the underlying number. So decimal the proposal is all about numbers, with or without precision. So this discussion of units, although related, feels like a kind of foreign object added to the discussion. It’s maybe interesting to think about, but it’s not really about just numbers by themselves. Which already have their own package of problems and issues.

JMN: So the thinking is that what we have in mind here with this `Decimal.Something` or Amount, is that the measure proposal could, then, take that ball and roll with it. So rather than introducing a new class, what we have in mind is that the `Decimal.Something` could—we could expand that with the measure proposal.

[slide 6]

JMN: The API for this thing is very small. It’s very thin. It’s deliberately kept quite minimal. We conduct the data using convenience functions on `Decimal.prototype` . Maybe we should allow constructors—construction using new too. Maybe there should be a static Temporal style `.from` method. That’s a bit open for discussion. Interesting questions to think about there. There’s an accessor for an underlying decimal and the precision, of course. Just a toString. Critically for us is that there’s no arithmetic here. The thinking is that we already have arithmetic sitting in decimal. It would be a bit awkward to reproduce that somehow in `Decimal.Something` . And besides we have discussed many times that this issue of propagating the precision of numbers using arithmetic is a bit odd in IEEE754. And we know there are other ways to do it, so we just skip it then, and say there’s no arithmetic on these things. The main thing is that we have some kind of integration with NumberFormat and PluralRules. And again, just like decimal, our `Decimal.Something` would be immutable.

[slide 7]

JMN: So again, so I have talked about how we have just a bit after tongue-in-cheek placeholder names here. These are also place holders, but the thinking; if I have a decimal, then I can try to create one of these `Decimal.Somethings` using some kind of method that attributes or just imputes some kind of precision to the thing. So, for instance, if I have `new Decimal("42.56")`, and I say, let’s consider that number as a number with two significant digits. So then we essentially are talking about 42 there. Or I can say, take the same number and consider with 5 fractional digits. Let’s say I know out of band that whatever number I have, has some kind of precision of 5 fractionalDigits. I impute that number. I talk about 42.56000. The names here are awkward, I admit. They’re place holders. Just to get your creative juices flowing.

[slide 8]

JMN: Again, so we think that we have a bit of—made a bit of progress with the internationalization side of things. There’s been some discussion in the champions call, that happens every couple of weeks. You should see it in the TC39 calendar. Also a channel for this, if you would like to join the discussion. The current thinking is that PluralRules shouldn’t handle bare Decimal values. And there was also a discussion about whether NumberFormat should continue to handle bare Decimal, which it did in earlier iterations of this proposal. But we also thought about possibly banning bare decimals from NumberFormat.

DLM: I’m sorry. JMN. There’s two clarifying questions in the queue.

CDA: They aren’t meant to be asked immediately, but WH, did you… ?

WH: Yes. On the previous slide—yeah that one—you said that the first example produces 42. Shouldn’t that be 43?

JMN That one would produce 43, because there would be rounding. We look at the 5 to do the rounding and use round to help you. Sorry about that.

WH: Okay.

JMN: Does that clarify?

WH: Yeah. So this then raises the issue of rounding modes and how to specify them. But that’s a different ball of wax.

MM: Okay. I have a question. So there’s two different methods here. The meaning of each of the methods is clear. But in terms of the representation of precision, with object that the methods produce, are you thinking of two different kinds of representation of precision or do both of these somehow produce the same kind of representation for precision?

JMN: Very good question. So the thinking at the moment is that there’s just one notion of representation. In the current discussions that, we are working with significant digits. That’s the one and only underlying notion. Then if you want to use fractional digits there’s a calculation to convert that. Does that answer your question

MM: Yes, it does. Thank you.

JMN: So we were talking about how this thing, this amount, this `Decimal.Something` fits into the internationalization picture. And the thinking is that wherever we used to have Decimals sitting in Intl, namely in PluralRules and NumberFormat, they should be banned. Maybe it’s a bit of a discussion, whether some parameters should also be mandatory. In general the thinking is, banning but handling these with `Decimal.Something`s instead. So the idea is that for PluralRules, NumberFormat, `Decimal.Something` is going to be the thing that contains the information that is likely needed in the internationalization use cases.

[slide 9]

JMN: We also have a bit after story here about how this would fit in with the measure proposal. I said this was going to be about decimal, but that’s like 95% true. The discussion would be incomplete if we didn’t say something about measure. And the current thinking is the measure proposal can be slotted in later. With some kind of unit or currency attached to an amount. So let’s look at a bit of code. If we have some decimal, 5.613. We can attribute some kind of unit to that. And then we can, perhaps, convert that to a amount, and then attribute to a unit later. You can see looking carefully at the number there, before kilograms, there’s a slight difference there. Again, we’re still bikeshedding a lot about the names. And the exact API shape. But we think that something like this should be possible.

JMN: So what we are thinking here, this is—an assumption there that decimal happens before measure. Or like at the same time. But measure doesn’t actually need decimal. But so if decimal doesn’t happen, we can still work on measure.

[slide 10]

JMN: That’s it. This is just a short update about our current thinking. So for those of you who are worried about our suggestion of merging the measure and decimal proposal, we’re not doing that. They remain separate. There’s some spec text available, if you would like to take a bit of look. And in our view, if this `Decimal.Something` or amount is something that looks good to committee or seems reasonable, then I think we are in a pretty good position to ask for Stage 2 for decimal at the next plenary. And that’s it. I am very interested to hear what you have to say. I will take a look at the queue.

WH: I am a bit confused about some of the points raised here. You said that there wasn’t much interest in having 3 classes, but what I see here is 3 classes. The only thing that changed is that the name of one of the classes has moved to be on the Decimal object, rather than being an independent class.

JMN: Yeah. I understand the concern. I think the current thinking is to lean towards having the two classes, the idea being that—

WH: Which two classes?

JMN: The Decimal and then the `Decimal.Amount` . The idea is that we would add some kind of unit and possibly other methods later in the measure proposal. Or we can also think again about three-class solution. That naturally arises in this case, as well: in other words, I am prompting us to rethink that also.

WH: Okay. I have some observations here. Precision is not necessarily specific to Decimal. You could have Numbers or other types with precision also, so having Amount use Decimal might be foreclosing options here which we don’t necessarily want to foreclose.

WH: You also mentioned that some of the internationalization methods might throw if passed a Decimal instead of an Amount. How do those methods behave when passed a Number—do they also throw if you pass Numbers?

JMN: Numbers are fine if you pass them in.

WH: So they would accept Numbers but not Decimals?

JMN: Yeah. You are right. I mean, there is a bit of ambiguity there. We could accept the Decimals. But the thinking is that this might open up the door to some kind of errors and footguns that number currently allows. So I mean, yes, it’s allowed to use numbers. But the thinking is, this is a chance to perhaps fix some issues or prevent some problems that would come up. But if we can see a clear need for allowing Decimals, that’s also fine. It’s just something we are leaning towards right now

WH: It’s not clear to me that providing bare Numbers or bare Decimal is always a bug. I can think of many cases where it just makes sense. There are cases where you might want to specify precision, and other cases where you don’t.

WH: The other concern I have goes back to having the three classes, which is that, once you add precision and units, it’s more ergonomic to have the operations of setting units and setting precision commute with each other. By separating the classes, you make these non-commutative. You must set precision before you set the units, rather than the other way around. Things become awkward

JMN: Yeah. That’s an interesting consideration. I am not sure I have a solution off the top of my head, except things like allowing some kind of, like, options bag as an argument where both can be specified. But yeah, you are absolutely right. We should perhaps think about that.

WH: Okay.

NRO: Yeah. So when WH was asking about Numbers, and asking if it’s weird that Numbers work with intl and bare Decimals do not, the passing Numbers to the various single classes, they can cause problems because you need to make sure to pass the same precision options to various separate Intl classes and that’s—it’s just very easy to miss that if the precision doesn’t come with number. And also, it’s—depending on your locale, what locale you are testing with, is it making a mistake because it might map in one locale and not in another. Or might be common in one locale and not the other. This is a long-standing issue with `Intl.NumberFormat` and PluralRules. Which is why we need—in the numerics calls we thinking of just a number type of number, let’s make it difficult to make a mistake. Maybe there could be way to say, oh, here. I actually am sure I am passing a decimal and I do not care about precision and like we should direct people towards doing the safe thing. Which is the opposite of numbers right now.

WH: Can I reply to that?

NRO: Yes

WH: I am not sure I believe the claim providing a precision is safer. I can think of plenty of instances where you don’t know anything about the Number or Decimal you are providing, and adding a precision can make things worse. It can change the value of it. It’s unclear what happens if you escape into exponential notation.

NRO: Yeah. You are right. I think we should still make it explicit that you don’t want to find the decision rather than making it the easy thing to do.

WH: Yeah. I want there to be a simple way of _not_ specifying a precision, if that is something that makes sense for that application.

JMN: If I may reply briefly to that. We still have things like toString and toPrecision and stuff like that. So it is possible to have a decimal and you just kind of format it without any acknowledge of the digits. I guess the question is: does Intl also want to be totally open to decimals? And I guess that’s still something we need to resolve.

NRO: I think I was the only one pushing for three classes. Just because it felt like a better solution to me, I guess. It would have been convinced multiple times that it’s absolutely fine to have two classes. And this discussion keeps coming back. But nobody said and support of three separate classes.

SFC: My comment is that the two-class solution allows the phases to be commutative as WH mentioned. It also—a decimal without the precision amount is like—has the precision being the number of significant digits and the decimal. If you specify the unit on a decimal without specifying precision, you’re inheriting the precision of the decimal. Of the bare decimal. So I do think that’s a well-defined operation.

EAO: I am echoing some of what SFC just said. But maybe from a different angle, and the way I see it, I understand one of the main reasons for Decimal to be representing better values that numbers that we are getting from external sources. And those values are, then, more exact with decimal and therefore have a precision that we don’t need to define. These values really ought to be formattable without needing to be specially wrapped and determined what the precision is.

JMN: May I reply to that quickly? I guess—are you also going with WH's suggestion? The idea that Intl should accept bare decimals? Do I understand you correctly?

EAO: Yes. I disagree with the reasons for not supporting bare Decimal in `Intl.NumberFormat` and `Intl.PluralRules` .

SFC: Yeah. I think that—we should have that—I mean, this is a discussion we should have in TG2, once we get to that point. But I think that, you know, there’s definitely valid arguments to be made that bare decimals are formattable finite values by themselves. Intl operator could—that’s a discussion we should have. Whether that’s a natural place to draw the line.

MM: Okay. So I think what I am about to say overlaps with a lot of what has already been said. I won’t respond on the rationale. The position I find attractive is the two-class with there being a Decimal class and a measure class, for the sake of both immutability and commutability, both the precision portion of a measure and the units portion of measure are each optional. And therefore, you know, they could both be optional. I don’t want to take it the same as the underlying number, but the key thing; there’s nothing about any of this machinery that should be specific to decimal. Decimal is just a number without precision. And then the thing that adds precision for display purposes to a number should simply apply to all numbers, including floating point numbers and BigInt. One part of my rationale is that from our point of view, being a participant in the blockchain crypto ecosystem, we would certainly want to represent `numbers.withUnits` , where the units could be cryptocurrency, but we would never use decimal because even at a 128 bit mantissa, we would not want to take a chance on the loss of precision. You would do what is already the convention in crypto, which is you just take the smallest quantum for any currency, it could be incredibly small like the Satoshi, and then we just use BigInts and having BigInts plus display information plus units for what currency is the only thing that we would use for that use case.

JMN: I see that NRO has a response to this.

NRO: Yeah. So when this first came up, like, maybe 6 or 8 months ago, it was like I didn’t discuss every single number type. Like, there was a—it was a, like, 2 dot significant digits and we give something similar for that. The feedback was that it was just like a lot of stuff. And I think we can—like, this presentation showing the constructor, would potentially leave the door open for something like `BigInt.Something`, if that’s,like, motivated.

MM: I think—I think they mentioned any of the specific to decimal is just not motivated. I would object to leaving the extension to other number types on the table, while something specific to decimal proceeds forward.

NRO: Okay. I think there is value in having, like, the class to be charged stronger type, like you have the object that contains, like, a decimal with something. So you don’t have to look into the object to then figure out what type it is. Like, I can think about how to use this with TypeScript.

MM: TypeScript has parameterized types

CDA: SFC?

NRO: Yeah. So I have [inaudible] remove it, because it’s what Shane said. I was going to say the second point and reply to this.

SFC: Yeah. We looked at the polymorphic approach a while ago. The decimal backed amount approach, I asked, you know, FYT and others about the implementation difficulty of this. Having a single amount class that we know what the backing amount is, it means that that class has properties. That is available, that polymorphic amount wouldn’t be able to have. So when I say polymorphic amount, I mean an amount that has a numeric field that can be many different types. It means that basically, every interaction with that type needs to then have branching code. Just because it has to have different behavior based on the underlying numeric type, it likely will use more memory because you have discriminants and such. Another advantage of a decimal backed amount is that the precision is free to represent because Decimal128 already represents the number of signature digits. It doesn’t require adding any slots which is another nice advantage. Yeah. I guess that’s what I commented.

EAO: Replying and asking maybe a clarifying question for MM here: is that given that your interest and needs are for working with numbers that have higher precision than what decimal can provide, that you’re maybe natively working with BigInts, and then but I would like to format these and presumably when formatting these, you will you would like not be formatting an integer but a number with a fraction presumably. If I understand the case you are register there, do I understand, effectively you are saying, that you would need to be able to represent the number, for instance, as a numeric string or you would need a dividing scaling factor to be applicable somewhere in order for this thing to work for your purposes?

MM: So the answer is, yes. And I will agree that that weakens my case, that one notion of measure will cover my use case. The point that I was making, though, is that the combination of units together with an underlying number, there’s certainly nothing about that that is specific to decimal. And also, the general notion of precision combined with some underlying number, is also a notion that is not specific to decimal, even if our particular use case for BigInts takes us in a bit of a different direction. Certainly for numbers the notion of a way to associate precision for purposes of display makes perfect sense. And with regard to the representational economy, I think that’s exactly the kind of implementation detail that programming language implementations generally strive to hide from users, and what should be exposed to users, especially for the language at the level of JavaScript, rather than the level of C, you could have a measure class, that internally took advantage behind the scenes in a given implementation if it shows to do that of a more economical representation when the underlying number was decimal. But I don’t see any reason to make that visible to the user. And certainly, some implementations would choose not to do that, and I think they should be welcome not to do that.

MM: One more point on this. Which is, the ton that you are doing, which is using the precision that is inside the decimal—the non-normalized Decimal128 representation, you are using that in a semantics violating pun because the actual IEEE semantics of that implicit precision is number of trailing zeros, not number of trailing digits or number of significant digits. By using it for display purposes for number of significant digits, or number of trailing digits, you are making use of a representation whose documented purpose is something else.

CDA: REK on the queue: "plus 1 to the BigInt and precision in the context of cryptocurrency"

DE: Yeah. I am not sure about the cryptocurrency use case. Isn’t that one with fractionalDigits. That corresponds with the—does anyone have use cases for other kinds? I could picture this number precision use case, but I want to question that this is independent from decimal. Precision is base-10 precision of—especially of fractions. It does go in this positive direction as well. I would want to dispute the comment that Mark made about this being an invalid pun of the IEEE data model. We convert to the quanta at that in the IEEE and that’s a reasonable representation. Precision is a base-10-basic consent and the whole point of the proposal is to encourage you to move away from representing numbers that are logically containing these base-10 fractional parts and user precision units. In a sense it is analogous, if you are using number for that, you are going to be broken.

MM: I’m sorry. I don’t understand that comment at all. People use binary floating point with rounded decimal displays to different numbers of significance all the time. That is a use of floating point numbers that we should, in general, try to discourage and if you are going to display a number in decimal—with decimal digits at all, you shouldn’t be using floating point. That seems like two greater—

DE: To a large extent, yeah. Logically what you should be doing is kind of two phases. One, round to an appropriate decimal and display the decimal. It’s okay that we have all this tradition of those operations being elite and grouped. But I think the whole point of the decimal proposal is to focus on giving accuracy and reliability to the common case. Isn’t the result of sine or something or other.

MM: For the IEEE definition all about trailing zeros, I understand that. That argument. But for very good reasons that’s not what we’re doing here. We are interpreting its numbers, significant digits and you draw significant digits then you are talking about—you’re seeing an approximation anyway. I don’t see why a decimal display approximation of a floating point number is less sound than a decimal display approximation of a decimal number.

DE: So maybe WH can clarify more about the IEEE alignment. I don’t think it represents a number of trailing zeroes in IEEE either. I think significant digits, there’s—it’s interchangeable with respect to particular decimal with IEEE, you know, quanta concepts. We could allow this, but I just—it doesn’t seem motivated given the main use case was this crypto thing, which is not what the proposal means. And—

MM: Sorry. I withdraw the crypto, as anything but illustrative and agree with the ways it doesn’t fit with what I was saying. I certainly don’t withdraw floating point numbers. There’s existing software that does this with float be point numbers and I can consider that software to be correct. I do not want to retroactively declare that software to be incorrect.

DE: We have APIs for dealing with that, NumberFormat takes various precision parameters. And you can format numbers this way. We are just—even though something is logically sound and has a well-defined meaning, when adding something to the standard library, we are making a judgment call. This thing is especially pertinent. And I think we’re allowed to make judgment calls that don’t correspond exactly to, like, is this a logically meaningful thing or not

MM: You are certainly allowed to make such judgment calls. I am free to arrive at the opposite call on that call.

DE: That's fair. Just to sum it up. The main use case I heard from you, when you are doing something you might today do with NumberFormat, providing the and giving a double, then having is that in one unit is a logically meaningful thing. And that’s that.

MM: Yeah. And to flip it around: to the extent that we’re willing to live with NumberFormat providing the display precision, why not use the NumberFormat to provide the display precision for decimal values as well?

DE: Well, that’s—yeah. SFC has made that argument as well, that often this is logically wrapped up in the human legible like human interpreting meaningful decimals in a way that—

MM: Okay. So once what is being displayed is an approximation of at underlying number, then I don’t see the distinction between the case being made for doing it with decimal versus floating point numbers.

DE: Okay. I’ve been—I will leave it at that. I think I made the argument

WH: There are a few things that I think are incorrect or we have been neglecting. There was the claim made that we could optimize the `Amount` class to use the IEEE quantum precision. That doesn’t really work because the precision varies depending on the amount of the number you have. So if we want simple semantics for what the precision value could be, then we must store the precision separately. Trying to fit it into an IEEE quantum is just premature optimization, which wouldn’t work anyway.

WH: The other crucial thing that we’ve not even discussed here is where rounding takes place and how that rounding works. Rounding modes are important for a number of applications. I don’t understand in this proposal how that would be specified, and that makes a huge difference in what representations we can use in the `Amount` class.

DE: Yeah. Could you work through an example of where this doesn’t line up. I am just trying to understand the terms of the IEEE logic. Why can't we use this quanta for the precision. It’s too complicated to figure out which would apply

WH: For example, denormals.

DE: Do you think you could talk through an example just so I could picture it better?

WH: So for semantics I am imagining for precision, you can set the number of digits after the decimal point independently of the value you have. This is not true for IEEE quanta. We only have 10 minutes left. I don’t want to digress into explaining examples of that.

CDA: Right. We have less than 10 minutes left and several items in the queue.

EAO: I agree with WH that I don’t think that packaging in the precision into the IEEE754 representation. Separately, what I would like to note, the current `Intl.NumberFormat` supports formatting a string representation of a number with fractional digits with limits on the precision that go well beyond that of Decimal. So, for example, for the use case that MM was representing earlier, where there is a value with a precision greater than the precision allowed for by Decimal, that ought to still be formattable with a precision. This is currently supported by explicitly setting the precision in the NumberFormat constructor, but this would not be supported by the `Decimal.Something` or the `Decimal.Amount` that is proposed here, if that value that is based on Decimal rather than, for example, a string representation of a number.

NRO: Yeah. It was said, like, IEEE talks about trailing zeros. We talk about digits not being an approximation. I disagree with that. You can convert between one and two. Like one or the other. You can look up Wikipedia, it actually talks all over the place about significant digits and trailing zeros. Because, like, they’re just interchangeable. Once you like deal with the data.

NRO: And then I have a question. If you start with a floating point Number and say, this is actually to interpret it as if it was a base-10 number, with this amount of precision, is there any of those float64 numbers that cannot be represented as a Decimal number together with some precision?

WH: The answer is yes.

NRO: Okay. Thank you.

SFC: Yeah. I was just—mostly echo what NRO said, which is that the—the quantum representation to cohort representation for precision is equivalent to pairing a normalized decimal with a number of significant digits between one and 34. If this is not a true statement, we can just discuss on Github some counterexamples. But as far as my understanding of how this works, like this is a true statement. Maybe there’s edge cases involving subnormals. But for most numbers, these two representations are equivalent to one another.

SFC: I am also next on the queue again. I can also take this off-line to discuss with MM and WH. But the—

MM: I see the question, "are MM and WH motivated by the other use cases not mentioned". I can just give you a quick answer, is that although the cryptocurrency case was a thing that senseized this to me and I have withdrawn it as more than that, the this—this is not motivated—my objection are not motivated by anything that still has anything to do with Agoric or anything I want to do with this, it’s that the non-orthoganality of what is proposed compared to the blatant orthogonality of the underlying concepts just offended me as a language designer and a lot of my feedback in general as me trying to uphold the quality of the language, whether it has anything to do with a particular use case I want to engage in or not.

SFC: Yeah. I will just respond a little bit there, MM, which is that for—in terms of a decimal-specific abstraction here, for example, Decimal128 itself and most other programming languages that use Decimal128 are able to represent the number with precision with the quanta in a decimal representation. And it seems like there’s value in having a type in the language that is able to interoperate with the other platforms and systems that use Decimal128. And `decimal.amount` is the natural place to put that. A polymorphic amount is not a natural place to put that interoperability type. Because that’s very much, a very specific decimal functionality.

WH: I would like to understand why we keep bringing up the IEEE754 representation of 'quantum'. I don’t see how it’s connected to anything we are doing here. A use case that doesn’t work is specifying precision of, let’s say, 15 digits after the decimal point and having that work for any number as the number—so I just don’t understand the motivation for trying to force this into the IEEE quantum model. As far as internationalization is concerned, it’s the number of digits you want to display after the decimal point. That could be arbitrary. That could be 40. It would be 15.

NRO: Like, you could want to represent any precision, like, saying I have a number with 1000 significant digits. But in practice when it comes to show numbers to users, you don’t deal with that. Like, a number that’s, like—has more than 34 digits of precision, you are going to find some other way to explain that concept to the user, like, for example, splitting it into multiple subunits, like, you have based on hours and seconds and so on. But then a single very long number. And so like putting a limit on how much this precision could represent in practice, like, when it comes to Intl and showing the thing to users is not—is not a real limiting factor

WH: It is. Like, even two decimal digits, reliably emitting two digits after the decimal point doesn’t work if a number is large enough. So far I have heard plenty of discussion about, you know, how we could work around the limitations of IEEE quantum, but I haven’t heard any reason why we should be using it in the first place, rather than storing the precision as a number that is independent of the value that’s being stored. I have yet to hear any motivation other than trying to save a byte or two.

NRO: We don’t really have a use case. Like, this is personal or like not discussed in the—if you had anything to represent the list, the decision, and represent the list IEEE Decimal128 number, then we personally be fine with me. We heard the restriction makes sense for them because it makes it easier.

SFC: I didn’t mean to have the discussion to go in the way of quanta. I brought that up as a way that implementations could choose to represent this in a more efficient way.

WH: Yeah. I still don’t have a good answer to how you would print a bunch of numbers each with two decimal digits after the decimal point and have them line up.

CDA: Okay. Thanks, everyone. We are past time.

### Speaker's Summary of Key Points

- We presented a new class that solves problems with Intl and decimal
- We suggested using this new class instead of bare decimals in Intl

### Conclusion

- There was some concern about the commutativity of the application of a unit and a precision
- We discussed problems about the representation, in Decimal128, of very large/precise numbers such as those arising in cryptocurrency.
- There were some concerns about our proposed “banning” of bare decimal values in Intl

## Guidelines for Locale-Sensitive Testing in Test262

Presenter: Philip Chimento (PFC)

- [slides](https://ptomato.name/talks/tc39-2025-04/#8)

PFC: Hi, again, everybody. This is a topic that I gave in an informal presentation on TG2 a few months ago. And I thought it would be helpful to bring it here as well and get feedback. This is not a normative thing for the specification. It’s just a discussion of what kinds of tests are helpful to have for parts of the language that are locale dependent. So ILD is an abbreviation, it stands for things that are implementation and locale defined. This is ILD behavior in JavaScript.

[slide 9]

PFC: Here's an example. You use the toLocaleString method of Date and you pass some arguments to it. And you get back an answer that says, "in the afternoon". That is obviously dependent on language and culture. The spec text says about this,

> Let _fv_ be a String value representing the day period of _tm_ in the form given by _f_; the String value depends upon the implementation and the effective locale of _dateTimeFormat_.

PFC: So taken in the most literal way, the specification says that any string can come out of this code. Like even a series of 1,024 `X` characters concatenated together, or something like that. That will be legal, but we don’t want that. So, you know implementations make their own places and they largely agree on what should come out of here but that functionality is often expressed in third party libraries such as ICU4C and IC4X.

[slide 10]

PFC: I would argue that it is good for users of the web, when the ILD behaviour is stable and websites don’t break and suddenly produce different results. But I would also argue that it is good for the web when ILD behaviour is updated to reflect current cultural practices so that websites are localized in a way that users find comfortable. As an example of that the locale-dependent formats in data repositories like CLDR are often wrong because somebody in the past made an arbitrary guess as to how a locale represents the date and number and they guessed wrong, and somebody who actually has more knowledge of that complains and submits a change and the behaviour is updated.

PFC: So I think ILD behaviour being stable and ILD behaviour being unstable is both good, and obviously diametric opposites. So that brings me to the more practical consideration of what do we do when we are testing this behaviour in test262?

[slide 11]

PFC: Obviously, if we stuck to this spec text and only tested literally what the spec text says, we could not make any assumptions about the behaviour because arbitrary strings can come out. That seems like it is certainly not very helpful for implementations and not good for users of the web. We do want test coverage of these APIs, and we do have existing test coverage of these APIs in test262. We will talk about what do we want out of that test coverage and what is helpful and should it be a goal to cover every locale and option for every API? My opinion is no. And I think if you do that, after a certain point, you reach diminishing returns and you are not testing the JavaScript implementation with the ILD test anymore—you're just testing the underlying data source.

[slide 12]

PFC: We do have tests in test262 for this sort of behaviour, and there are two strategies that are often used that I consider not ideal. One is called 'golden output' and the other one I will call 'mini-implementation'. Golden output is kind of testing jargon and means comparing the output of the method under test against known-good output. I think this is undesirable in test262, because what is the golden output? It varies between implementations. Each major browser has their own human interface guidelines where they amend some data in these data sources in CLDR and ICU. Golden output will also vary over time as they update the data in the data sources. All of these variations are permitted by the specification. We don’t want to ban variation, but make sure that the variations are limited to things that make sense to vary. And then finally, if you build in golden output that means that the test can only reasonably be run by an implementation using a particular version of CLDR. If you are using another version or another data source altogether, forget it.

[slide 14]

PFC: The other strategy that is often used I will call 'mini-implementation', and you can see this in some of the files in the harness directory of test262. It is basically writing a polyfill for part of the spec in the test code, and then comparing what that polyfill outputs to what the implementation outputs for the method under test. I think this is undesirable in test262, because it makes it difficult to understand what is being tested and it is unclear when the test fails, is that a problem with the implementation or is it a problem with the polyfill?

[slide 15]

PFC: That was a bunch of slides on what not to do. What should we do instead actually? Here are some ideas that I have collected or thought of.

[slide 16]

PFC: One option would be to use stable substrings. So this is not quite golden output but you identify a part of the output that is reasonably expected to be stable across versions of the third party libraries and data sources and across implementations even taking into account their own human interface guidelines. An example here on this slide, you want to test the date-time formatting with `dateStyle: 'full'`. Instead of asserting that the result is equal to some string that you have predetermined, you assert that the result contains the month name written out in full in English. So this more robust than comparing it against golden output, but it does share some of the disadvantages of golden output. It may be more stable across implementations and time but it is not entirely so.

[slide 17]

PFC: There is comparative testing. This is a principle where you can say that each setting for each input option must produce a distinct output and this could be good for getting coverage of all the code paths in implementations and making sure that each line is exercised, which in some cases is a goal. There is an example here on this slide. You know you can format a date with the weekday either narrow, short, or long. And you can reasonably say that the narrow week day should not be equal to the short week day which should not be equal to the long week day. But that assumption does not hold in all cases. The second stanza in the code sample is doing the same thing for the day parameter where the options are numeric and 2-digit and if you have a day that is greater than nine, the numeric day will be the same as the 2-digit day because there's no zero-padding necessary. So that approach would fail, and you need to do it judiciously.

[slide 18]

PFC: And there is metamorphic testing which RGN pointed out to me, where you find invariant properties of output that must hold across multiple inputs. And this is nice because there is no need to actually specify what those properties are exactly; you just have to specify that they hold. That sounds easy but it is not easy in all cases. So here's an example in this code sample on this slide. You format a date with just the day. You format the long month name. And then you format with dateStyle full. The property is that the full dateStyle should include the day which is not zero padded, and include the long month name. And I think that is a reasonable assumption if you want to test full dateStyle without hardcoding golden output. But again, it does not hold in all cases, or sometimes finding these relationships can be difficult.

[slide 19]

PFC: So, that is an overview of the things that I look at when I am looking at ILD tests in test 262 and I would love to hear further thoughts. There is an issue here that you can click through to and continue the discussion on as well. I'm especially interested to know that what kinds of guidelines are helpful for implementations here? I am assuming the most helpful is that each implementation tests that output is exactly what they expect. That is probably not feasible for test262 because we permit variation between implementations in certain cases. So what would be the next best thing, and I would be particularly interested in hearing that. So I will open up the floor to questions?

SYG: I did not understand the 'mini-implementation' and how can you test the polyfill with the actual method?

PFC: I can put link to an example of this in test262 in matrix.

https://github.com/tc39/test262/blob/61fcd7bd565e01f795e55080ed9af70b71adb27e/harness/testIntl.js#L2517

SYG: I can read the link, no need to explain

PFC: Okay.

EAO: Your presentation reminded of testing that I think we ought to be doing in particular for `Intl.DateTime` . Two or three years ago one of the spaces in en-US date formatting changed from a simple space to a thin space, and this was being used by sites that were presuming that they could format the date as using the 'en-us' locale and rely on that format being supported by the built-in datetime parser. I think it would be appropriate for test262 to test for the changes that would impact users who are using internationalization for non-internationalization purposes. Other examples include the ways that are currently used for formatting dates using year-month-day representation by formatting dates in Swedish, or with the calendar: ‘iso8601’ option. If these things change due to CLDR data and ICU implementation changes that theoretically ought to be fine because this is internationalization, but in practice things will break and test262 should be pointing to that stuff breaking.

SYG: I don’t know about this Swedish thing but I do agree that the 'en-us' thing given its reach and its basically the default chances that people already depend in it on the web. So probably should be treated as stable if is there no intersection among the implementation currently, of course that is a good signal that maybe it is ability is not as needed or things for which there is intersection among different browsers and yeah it would be good to get an early warning that something changes en-us. And I am talking about actual golden in this case that would be anything that would give us a guarantee that something is stable and your possible alternative in stable sunscreen compared to testing and all of that stuff, I am not exactly sure yet how I would think about what kind of guarantees they would give me as an implementor and I see a test break, and it is a stable substring. It might tell me that means there is less likelihood that the parsers will break but I have no idea how people will write that specific output and I guess comparative testing and—that is all to say the most important thing to me as an implementor is stability for 'en-us' for sure.

SFC: So sort of reply to what SYG was saying and I think basically the gist of this particular line of thinking is that if there is an assumption that developers are making about invariants that the standard library has, that it is you know is not assumptions that are not intended to be made, right? That is sort of our definition of abusing INTL libraries and if we can detect those—not the word detect yet but if we can identify what those are, then like I think there is a reasonable argument to be made that those could go into test 262 because you know that would be be basically an early warning signal, however I don’t know if necessarily test262 is the right for that purpose because it is trying to test conformance to a specification and will it break the break and maybe test 262 can be that thing but I want to be clear this is a different use case than trying to test implementation conform to this spec. And regarding the 'en-us' thing, and I think there is an argument to like—I know that is a proxy to the thing to the real problem which is you know code that abuses individual APIs and you know we have evidence that there is a popular stack overflow question about the Swedish thing which is maybe one reason I thought about that and I don’t necessarily believe that every anticipate will accept an en-us locale that needs to live up to the same standards for the one that we found, and based on the question how do you do timezone conversion in JavaScript and you can use en-us day time format and date the code and then you have that assumption built in everywhere. And I think that, you know, proactively testing en-us in test 262 is not the best solution there could be a shortcut because if we believe that en-us will carry a different value and like this is not the long-term goal we should be testing which it we should be identify what the use cases are and you know the other thing we could probably test. Sorry that is was a bit of a circular argument.

SYG: I will say something stronger than that but for like my argument is really about risk management. It is not about doing the right thing for locale at all. That is an orthogonal problem that is done by other people but we keep getting burned, 'keep' is perhaps too strong a word, but especially after the en-us date format changed and how many things that broke. The working already shifted to how do we derisk this for future data changes? And whether something is a good thing technically to develop for a locale, is going to be weighed against what is the risk of this breaking again, and right now, not breaking is very much the highest priority. So, I would—that is the lens I will be looking at this from and you can make all the arguments you want about how you don’t want to compromise the long-term vision of data but should we update the data and take in the new changes that you think are great and the lens this is going to be judged from often is what the risk of accepting the update and will it break stuff.

SFC: You have a valid point about de-risking. I'm saying "test all en-US with goldens" is not a great solution.

SFC: moving on from the like developer assumption stuff into spec assumptions. Right, regarding the part about what you called metamorphic testing. Like a lot of things that are like encoded in the spec are safe to test. DurationFormat says that it is composed of number formats and list formats. That is a safe thing to test. Beyond that, testing whether datetime string contains date string as a substring maybe can work sometimes but it is not necessarily a spec assumption. It worked from time to time.

SFC: What are we actually testing? We should be testing that a thing conforms to the specification and that maybe we should write in the specification the spirit of Intl function that it conveys to the users in the computable way. That is what we are trying to test and maybe we should sort of shape our assumptions around there around that. You know, like, for example, like can we ask the LLM, here’s the output of DateTimeFormat—if the LLM can round-trip it back, and that conveys the goal. I don’t think necessarily there is very much supportive of LLM in the testing pipeline but like that is the spirit of what the API will do.

SFC: And my last comment, comparison against ICU. It is little bit like the polyfill thing that you had earlier on. The mini implementation—you could just fire up ICU4X or whatever and use that as reference implementation; you still have golden problem but the scope gets smaller, right?

PFC: Okay, thanks. I see that maybe I should have requested a larger timebox but I have to go now. And I would invite everybody to continue giving their thoughts in test262 issue #3786 and thanks for the discussion.

### Speaker's Summary of Key Points

- With the specification permitting almost any results of ILD (implementation- and locale-defined) behaviour, test262 has to strike a balance between stability and adaptability, as locale data sources such as CLDR are often updated.
- When writing tests for ILD behaviour, testing against golden output or a 'mini-implementation' is not recommended.
- We discussed several other strategies that live somewhere around the middle of that balance: stable substrings, comparative testing, and metamorphic testing.
- The en-US locale, and to a lesser extent sv-SE, may need to meet higher stability requirements than other locales due to the prevalence of popular copypaste code that expects certain output from those locales.
- After CLDR replaced ASCII spaces with thin spaces, implementations became more acutely aware of compatibility risk.

### Conclusion

- Please feel free to continue the discussion on [tc39/test262#3786](https://github.com/tc39/test262/issues/3786).

## `export defer` extracted from `import defer`: stage 2 update or for stage 1

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/nicolo-ribaudo/proposal-deferred-reexports)
- [slides](https://docs.google.com/presentation/d/1ats5CbsgalobhnfFIR2b1QAdaLRe4yVI55meo_ARqdU)

NRO: Hello, yes. So this proposal was presented this part of import defer a while ago and while exploring more and on the surface they look similar, and to there was much more complex to import defer and it lasts more and I propose one year ago to—we discussed des sided to keep it but I propose to leave export defer behind because the important part was ready like all of the different questions was ready to go to Stage 2.7 and it was left behind.

[slide 4]

NRO: So I will define what barrel files are. When it comes to barrel files with out components and libraries like lodash and components that you can use to build spec components together and it is exponent for them to just have a single entry parts that the export and the reason being a much nicer export for users for single library from all of functions and like obviously they do not by code and they have export from the declaration. And that’s actually problematic because like it is not get for export users and if you find the semantics that will cause unnecessary code for execution. And it is like you are loading the whole library and you are just using two or three functions. And unfortunately, like people use this a lot because the developer advantages are so great.

[slide 8]

NRO: So obviously we just don’t always load a lot of files from the browser and there is some current users and there is [INDISCERNIBLE]. This was similar things for other libraries. It is less use now because there is other solution which is a bit better that is tree shaking the list and bundlers try to analyze the code and when imports to use and they tried to detect which code does not have the effects so we know which export or import from statements can actually be removed. And they had different ways of doing so. For example, weback [] and side effects and so check the code and but all of these are very difficult because JSON die nappics and you cannot determine if there is effects or not, and this was done a lot during the first designs of rollup and parcel and so figuring out what that means for module and the answer was no it is just not possible.

[slide 10]

NRO: When it comes to node.js and when using common JS, so there is required things and you basically export an object with a bunch of getters, and this does not work with ESM.

[slide 12]

NRO: So the proposal is about—actually to understand what it is about let’s look at a quick example many so we have here prediction that loads button and some components library and the components library working with a bunch of components from a bunch of different files. And like I mentioned before, this like if you just rate what this is our file on the left component library and it does not actually meet them so one would say yes we have solution for this problem but that is a different problem because the goals was to keep the necessary work for things that do you right now but that does not work in this case, because like at some point, you still execute like those sub— when you didn't need to load them in the first place.

[slide 15]

NRO: This is not when we need to executes a thinking but whether or not we execute and whether or not we need to lead the thing or not. So we would mark this export as the third and defer means in the export position this module is only good if in it is part of this binding that is exported here. So this is specifically telling the JS file and if defer is not important you can just skip JS export.

[slide 16]

NRO: So it is like the same as this slide but I guess this is exactly how to work with the commonJS.

[slide 17]

NRO: So, export defer is like different from import defer which is what you want model—so you have the model available and preloaded and executed so you can make synchronously executed. And like this actually let’s us—it is also like trying to defer much so in

[slide 18]

NRO: this example given before and loading button and all of these other modules area much and so executed and they are not significantly and like you just read the read files from the harddisk. So the goal here to import startup performance by reducing unnecessarily initialization work. And there is different loading semantic, and so we are not going to check—it is good to show [INDISCERNIBLE].

[slide 19]

NRO: export defer you will use it in start, and because like export differ ever defer from hello, we do not know if is file is imported and we don’t know if coming from file or not and we need to do it unconditional and we need to have it exported.

[slide 22]

NRO: So why from the language, and just one first advantage of having provides guaranteed tree taking that every one can rely on and if a module is marked—output of the model is explicitly telling us we can ignore the side effects effect if they are observable. And some cases this is less because like maybe some are able to do like is not granular and two things can work together and this can provide a baseline and this works when using ESM natively and you can get one step closer and using the browser implementation but just—and this is useful when you combine with import and like for example specifically evaluation of proper access. So instead of the just loading and prefer when possible keeps execution.

[slide 23]

NRO: So, I'm in a bit of a weird situation. As `import defer` got to stage 2.7, and present these other time, so I don’t know if today I should be presenting this as update like conformation and if to discuss this Stage. But I would like I guess being preamps but if there is a preference problem here and so this is proposal for Stage 1 and proposal that is just a request of protocol and the branch of proposal. And there is like almost complete syntax and there is a couple to do and there is bugs but it is almost complete. We can go to the queue but I have a couple of more slides but I can go faster.

[slide 25]

NRO: How does this integrate with `import defer`? You could have different keyword from import and export side, and this is from a different proposal, and this screen is not effected by this proposal but have a mod.js that inserts start from mod JS and so in this case everything is going to be loaded and both the foo and the bar will be loaded and execution of mod.js and the dep-bar is for start up and we executed—wait, this slide is wrong. We execute—we execute the dep-foo and the dep-bar.

[slide 26]

NRO: Instead we have import and we have a clear list of names, and export defer, like in this case here on your screen, here there is no defer execution and during the proposal we do not have deferred execution by access, however, we know from mod.js we’re only importing foo and we keep executing that bar. When it comes to `import *` and `export defer`, what you get the next case of object and various names can be individually like isolated for execution from keyword and in this case it would be a dep-foo but the bar and together in this case except that we avoid execution and avoid executing mod.js because that is executed in the dep-foo and know that in this case and in the case where you have import without defer, potentially both foo and bar will be executed later and we need to executed async in both of them.

[slide 31]

NRO: And there is a proposal—this is during Stage 2 and I am mentioning this if you have opinions about this. And now let’s go to the queue.

JHD: So, um, this is not better and it is not currently capable in any implementation I have seen of removing as much code as just importing directly from the files you need instead from a barrel file. So, it should still be—we should be telling people and encouraging people not to use barrel files but this proposal is great because it makes tree shaking do less of a bad job and maybe we can see it will do a good job with this change but skeptical but I would like to see this advance and underscore for the group and notes that tree shaking is currently and always a sub par solution.

NRO: I talked to maintainers. I plan to just keep interacting tool maintainers with them individually to make it as good as possible for tree shaking.

JHD: Thank you.

WH: On the “import * & export defer” slide you mentioned that, even though `dep-bar` is not imported, its async dependencies are?

NRO: Yes. like in this case.

WH: How common is the situation in the ecosystem that, even though you avoid getting `dep-bar`, you get the nest of its dependencies which are executed anyway?

NRO: Um the reason here is that so this is async is for proposal and if you refer execution and you go to dependencies and reason being that you cannot defer asynchronous module to synchronous execute that synchronous for access. And in this case, we like if we are just doing this `import *` and later asynchronous will go through bar, and only way to make that work is by executing the async dependencies.

WH: If `dep-bar` synchronously imports some stuff, that does not get evaluated, right?

NRO: If it is async, it does access that. If it is synchronous it does not get adopted.

SYG: Um, so like do we know why the tree shaking does such a poor job with the—do I care about side effects or not? Is that extent much it or is there other issues as well?

JHD: Yeah I think that tuple will make it harder but I think it is any import can be side effecting. So if there is binding there is no side effecting but that is not a safe assumption for bundlers but for linting rules. I would assume that it is really difficult to do the safe analysis or whatever the appropriate terminology is to figure out which code you with delete and what code you can’t before determining if you can delete the actual import of the file.

SYG: Um, how are that—you just said how it is hard or difficult to delete, how is that solved by this?

JHD: In my view at least, it is that you don’t need to even traverse the deferred subdependency graph unless the object is triggered or passed to a function or whatever which you know on some level it is statically determinable. And not perfectly but sufficiently.

SYG: So from the—I have annotation that I don’t care about any of the side effect of the tuple it comes from and is that equivalent to import defer inside of tools would use that for tree shaking?

JHD: It is possible - I don’t use treeshaking tools myself but it might be right that it would not help that use case, but even if it definitely didn’t, I would enjoy it as a syntactic marker of that property. But yes I don’t have the answer to that.

NRO: So the syntactic marker like if I do for example, in JS, and this proposal does not have it if actually used or not but I can [INDISCERNIBLE]. But it knows for sure and for the keyword it does not need to check the site of bar to try to figure out if it has syntax or not. It can just blindly remove it.

SYG: But what I mean is that the problem—is a fair characterization of problem is that the reason tree shaking does so poorly is that it requires correct like out of band explicit annotation like in this case dep-bar does not have anything I care about but saying in export defer I signal my attempt from dep-bar does it come down to that?

NRO: Yes when it comes to some tools and other tools, it actually tends to perform in some cases vector that it will try to do side effects or not without relying on the annotation.

SYG: So not relying on—I think I under but segue in my next question which is I think the problem you present for improving performance sympathetic to but it comes down to that the current way that the ecosystem is work around it insufficient due to basically lack of good annotations of this because this solution for at least the tree shaking problem comes down to that we will let programmers annotate. Right? Like you will still have to annotate it except but by expert defer by some other tool-specific thing. Have you thought about trend of instead of bundling into referral one time behaviour of signaling that the exporter does not care about the side effects of the top level of the module there they are exporting or importing in this case and reexporting and since we have import attribute after the top of my head one possible way to signal that annotation is you know I don’t care about `side effects:true` or something like that have thought about that?

NRO: So one alternative I considered was just to have it like dedicated line in bar that side effects don’t matter. You can see here that suggest there is no production of this export keyword. And I guess that exactly not semantics but carrying on this proposal and we like this okay, let’s mark this to keyword and turn onto it. Because like it effects semantics in a way that you would not be able to otherwise represent in JavaScript and proposal you can just have the import file fix imported file will export the object while this is giving semantics that you could not normally explain.

SYG: Okay, um, my general concern here is that kind of feature matrix for what ESM and the qual features can you do and now adding TLA and defer and export size with different phases and the feature matrix for ESM is getting very complicated and I think that is in general a thing that I want to simplify, and so, I think there is a problem in as I said beginning sympathetic to the problem that you presented, and I think it is important to solve and perhaps export defer is the best way to solve it but I think in any isolation a lot of the things when you look at in isolation, that they are motivated, but like the ESM story is not something I think is in a good place narrative wise and with WASM to be cog any constant of that.

NRO: I understand and using this in this case complexity but change—

SYG: There would be no extra transitive referral behaviour and it does not resolve in that Simplification.

ACE: Sorry, tree shaking aspect, it is doing two things and you are saying one you can skip load this at all if I am not referring to the binding but then also the other things,if I am doing import * then it is saying like you can easily evaluate these things so it is not purely a replacement of the package.json […] the marker but making the evaluation lazy.

ACE: I do agree that this is just adding more things to ESM. I think the real shame here is my opinion and we should have just— this should have been the semantics of export binding from the start. And I don’t ideally we can do a break in change and this is what like when you are really exporting something it is like an alias thing and this optimization should have been the default.

NRO: And I would say that that is problem that is happening we should just recommend it to export—because we don’t need to use export from that is relying on the set of export module. Which like if you do, you shouldnt. So I see MM saying happy to go to Stage 2, end of message. And then I see Jack saying support for advancement, no need to speak. And Dmitri saying support switch, end of message.

NRO: So confirm Stage 2, and consensus for this? Does anybody prefer to go through like start from 0?

SYG: Clarify Stage 2 this is separate proposal from import defer?

NRO: Yes.

CDA: You have explicit support for Stage 2 from MM, DLM. Does anybody not support this for Stage 2?

CDA: There is nothing and nothing in the queue and that will bring us to the end of the meeting or end of the day. Thank you Nicolo. And thank you everyone and thank you to our notetakers and we will see everyone tomorrow.

### Speaker's Summary of Key Points

- `export defer` has been presented before when it was combined with the `import defer` proposal. It aims at reducing the overhead caused by 'barrel files' that re-export values from many other modules.
- `import defer` was advanced to Stage 2.7 without `export defer`, due to the additional complexity with handling re-exports
- An explanation on how `export defer` differs and composes with `import defer`.
- One significant difference is that `export defer` allows for module loading (network requests) to be skipped, whereas `import defer` only defers execution.

### Conclusion

- Reaffirmed that `export defer` is at stage two, continuing from when it was when `import defer` was split off to proceed on its own
