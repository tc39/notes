# 114th TC39 Meeting

Day Two—2026-05-20

**Attendees:**

| Name                | Abbreviation | Organization   |
|---------------------|--------------|----------------|
| Samina Husain       | SHN          | Ecma           |
| Waldemar Horwat     | WH           | Invited Expert |
| Dmitry Makhnev      | DJM          | JetBrains      |
| Luna Pfeiffer       | LPR          | Yavashark      |
| Yusuke Suzuki       | YSZ          | Apple          |
| Keith Miller        | KM           | Apple          |
| Linus Groh          | LGH          | Bloomberg      |
| Gustavo Tonietto    | GTO          | Mozilla        |
| Andreu Botella      | ABO          | Igalia         |
| Mathieu Hofman      | MAH          | Agoric         |
| Daniel Minor        | DLM          | Mozilla        |
| Zbyszek Tenerowicz  | ZTZ          | Consensys      |
| Nicolò Ribaudo      | NRO          | Igalia         |
| Christian Ulbrich   | CHU          | Zalari         |
| Tom Kopp            | TKP          | Zalari         |
| Eemeli Aro          | EAO          | Mozilla        |
| Olivier Flückiger   | OFR          | Google         |
| Shane F Carr        | SFC          | Google         |
| Guy Bedford         | GB           | Cloudflare     |
| Chris de Almeida    | CDA          | IBM            |
| Ron Buckton         | RBN          | F5             |
| Istvan Sebestyen    | IS           | Ecma           |
| Richard Gibson      | RGN          | Agoric         |
| Oliver Medhurst     | OMT          | IE (Porffor)   |
| Philip Chimento     | PFC          | Igalia         |
| Bradford Smith      | BSH          | Google         |
| Caio Lima           | CLA          | Igalia         |
| Clément Pit-Claudel | CPC          | EPFL           |
| Chengzhong Wu       | CZW          | Bloomberg      |
| Gus Caplan          | GCL          | Deno Land Inc  |
| Jordan Harband      | JHD          | Socket, Inc    |
| John Hax            | JHX          | Invited Expert |
| Jesse Alama         | JMN          | Igalia         |
| Justin Ridgewell    | JRL          | Google         |
| Jacob Smith         | JSH          | OpenJS         |
| Luca Casonato       | LCA          | Invited Expert |
| Matthew Gaudet      | MAG          | Mozilla        |
| Michael Ficarra     | MF           | F5             |
| Mark S. Miller      | MM           | Agoric         |
| Ujjwal Sharma       | USA          | Igalia         |

## Opening & Welcome

## Iterator Chunking for Stage 3

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-chunking)

MF: I don't have slides for iterator chunking. I just am presenting two different things. So this is the I mean, for stage 3, again, we mostly consider this pro forma. So these are the tests for iterator chunking. They have been reviewed by KG for a while now. They are not merged to test262. But they've been open for like a month and a half. They also include this change to make the error type consistent with the other ways that errors are handled in the iterator prototype methods. So you can see here, we would previously just throw a RangeError for all kinds of invalid inputs. And this throws a type error for when things are not the right type. And a RangeError for when things are out of range but the correct type. This aligns with zip and zipKeyed. And it aligns with includes. So that is included in the test262 tests as a separate commit here. So I think that iterator chunking is prepared for stage three given that it has these tests and these tests have been reviewed by a delegate. So can I have stage three for chunking? Including this number 30 pull request.

DLM: I am first on the queue. So we support stage three. We've had an implementation for a while. And we're looking forward to being able to ship it. And next up is NRO.

NRO: Hey, is there anything that's blocking merging or just that the maintainers need to do one more pass there?

MF: You mean the test262 PR? Yeah. We just—sometimes there's a delay on getting test262 reviews.

DLM: Okay. Next up, we have plus one from LCA.

NRO: Yeah. Just please browsers make sure to absolutely not ship before tests are merged because we already had some incidents in the past where things went to stage three with a pull request approved but not merged. And then there were bugs in implementations.

MF: Do implementers not have a way to use the tests from a pull request?

NRO: They need to do it manually.

MF: But it's like one-time effort, right?

DLM: Yeah. No, we have a nice way of being able to do that. And I've done that with some of the other iterator proposals. So yes. Yeah. Absolutely. We'll update the tests as part of shipping this and making sure everything passes.

MF: I think this would be great general feedback then to implementers. If there is a big test suite for the thing, please try to run it before shipping.

DLM: Okay. That's it for the queue so far. We've had a bit of support already for stage three. Is anyone opposed to stage three?

DLM: Great. So yes. I didn't hear any opposition in the room. So congratulations. I believe you have stage three.

### Speaker's Summary of Key Points

* iterator chunking has tests
* they've been reviewed by a delegate
* this is sufficient for stage 3

### Conclusion

* consensus for stage 3

## Iterator Includes for Stage 3

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-includes)

MF: Okay. Iterator includes. So we're in a very similar boat with iterator includes as we were with iterator chunking. We have these tests. They've been open for a little over a month. They have a review from KG. A lot of good feedback that has been incorporated now. And we also have a pull request that is reflecting the consensus from yesterday that we use numbers for counters instead of mathematical values for counters. So this pull request reflects that. It won't affect what is tested because none of these extremely high counters are tested in test262. And I don't think we know of a good way to do that.

MF: So I'm asking for stage three for this proposal with this pull request included, with the justification that these are sufficient and complete tests.

DLM: Okay. Let's go to the queue. First up, we have LCA with plus one.

DLM: I will jump to the queue just to say that we also support this.

DLM: Anyone else like to voice support for iterator includes? We also have a plus one from JHD.

SFC: Just from a 10-second look at the PR, what happens if you have an infinite iterator and then it maxes out the number? Which would take a while. But it could happen.

MF: I guess the question is not well-formed. The includes has a second parameter, which is a float. And the only problematic case would be if you pass a float that is larger than max safe integer plus—if it's at least max safe integer plus two. Because we would count down to zero before we start checking whether values are the same value. We'd never get to Number.MAX_SAFE_INTEGER counting down to it from Number.MAX_SAFE_INTEGER + 2. So it's not like we would saturate anything. We would just never change the counter and it would never start changing.

DLM: And next up on the queue, we have ZTZ with a plus one. And that's it for the queue. Does anyone object to stage three for this proposal?

DLM: Okay. Looks good. Congratulations. You have stage three.

MF: All right. Thank you.

### Speaker's Summary of Key Points

* iterator includes has tests
* they've been reviewed by a delegate
* this is sufficient for stage 3

### Conclusion

* consensus for stage 3

## Stable Formatting for Stage 2

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-stable-formatting)
* [slides](https://docs.google.com/presentation/d/1Vnt2-ejFMpk3NstM2DS0TtSRIoDqm9jqE4siiuMe4qE/edit)

EAO: Hi. So first of all, there's an hour reserved for this. I have no idea if we're going to need all of it. I'm quite willing to go into the details of this, but we'll see how much interest there is to get that deep. Overall, I'm asking for stage two for this proposal. To recap, what we have at the moment is the situation where the Intl object defined by ECMA-402 provides a whole bunch of capabilities that are a part of the web platform, effectively. And because web developers see a tool and they use a tool, even if the tool is not meant for whatever purpose that they find for it, we do have cases where people are misusing Intl operations to get the behavior out of JavaScript that they want.

EAO: And this is challenging for localization because fundamentally, currently, pretty much all of the behavior that you get out of Intl is liable to change at any given time. Because it's relying on ICU and CLDR implementations and data coming from the Unicode consortium. And otherwise, is meant to provide human-friendly output. And human-friendly, the definitions thereof tend to change with time. The second aspect that is important here is that all of Intl is effectively defined to be a black box, what you get out of it. It becomes sometimes a little bit hard to test because you cannot really expect always to \[technical interruption] EAO: As I was saying, testing Intl is a little bit challenging because we cannot define expected outputs and rely on those expected outputs always being the same. But they end up changing. Some of the ways in which this ends up showing up, for example, is that you can look online and this is, of course, partly fixed by Temporal already. But if you look for how do you get an ISO 8601 formatted date out of JavaScript, one of the common ways of doing this is to format your date in Swedish. Because it happens to currently use the year dash month dash day syntax. Another way of using Intl datetime format to get the same output, at least at the moment, is to use the en-u-ca-iso861 locale extension tag that sets the calendar to be ISO 8601. We have as TG2 requested of the CLDR-TC to keep this behavior as it currently is, as the CLDR-TC has considered that maybe they want to change exactly what you get for “iso8601” calendar formatting.

EAO: And there's other places as well where for example, number format has capabilities that it would be useful and human-friendly to be able to get the SI abbreviations for units, for instance. So the example here is showing how with `notation: "compact"`, we currently get from Intl.NumberFormat, we almost get what we want. For American English, where it's a K for 1,000 and an M for one million. But it's a B rather than a G for 10 to the 9th. And then a T for 10 to the 12th. Kind of compact formatting. So there's challenges here. This has been presented twice at TG1. And at the last discussion of this, a little bit over a year ago, we ended up with a direction that I got from the committee to go. In a direction to define stable behavior nominally, at least for now, with the using the zxx locale for pretty much all of the APIs that Intl provides. And what has happened in the interim is that I've ended up writing the spec text for this. And for the most part, what was presented previously still holds as entirely valid. So for to briefly summarize these, that are the same as before.

EAO: For `Intl.DateTimeFormat` the idea would be to match the output of Temporal always using 24-hour formatting. And avoiding month names in particular. So the output does not really have a language dependency. The lack of a language dependency is reflected also in the zxx identifier for this. zxx is a current identifier. It means “no linguistic content”. Because this is not meant to be output that is directly. That is, it should be human-readable, but it should be consumable also by machines if that is required. For `Intl.DisplayNames`, the idea was and still continues to be to use pre-existing fallback behavior for what do you get when you ask for locales information. For `Intl.ListFormat`, the idea is to use a comma and a space or just a space as the separator of the items. For `Intl.NumberFormat`, there's a bunch of things. That are a part of this. I can go into detail on these if there is a request for that. That's partly why we have an hour reserved for this. But I trust that somebody is going to tell me that they want to hear more details on these before I spend all of your time on them.

EAO: For `Intl.PluralRules`, this selects the plural category of what you ask of it. And for the stable behavior here is to always select the “other” category. And for `Intl.RelativeTimeFormat`, the idea is to format the output as ISO 8601-2 duration strings. I'll show an example of what this means a little later. And then for `Aarray.prototype.toLocaleString`, is to just use the comma as the separator, which is the same thing as the `Array.prototype.toString` does. And again, I'm not going to go into more detail on these unless somebody asks me to, which then I can. Because they are as previously presented, and in my review of the notes and my own recollection, I do not remember these having been raised as particular issues since then. In the TG2 discussions immediately previous to this meeting, SFC in particular raised some thoughts about changing what happens with `Intl.RelativeTimeFormat` to match more like what is going to be presented for `Intl.DurationFormat` in a moment. But I think that specifically should be possible to consider within stage two.

EAO: So the first bigger change to the proposal is to align with what I took out of the last meeting last discussion of this, which is that previously it was proposed that in addition to adding this behavior specifically for the zxx locale because “zxx” is really obscure and hard to remember, that we define specific behavior for what you get when you ask for null as the value of a locale, which is currently producing an error. And my hope was that null would signify the same sort of thing that we want here. But the issue was specifically raised that null and undefined would then have very different behaviors. And this is not necessarily the best thing. So the proposal now is for us to use the zxx locale but to define a constant `Intl.STABLE` that would just have the string value zxx. So that you could use it as shown on the slide here: `new Intl.NumberFormat(Intl.STABLE)` or to use it in all the places where you use a locale. So that it would be more discoverable. And it would also be more readable rather than having what is effectively a magic constant in a string to have `Intl.STABLE`, which is hopefully a little bit less magical about what it is doing.

EAO: And then the next slightly bigger change also following from the discussion last time on this and discussions in TG2 is that rather than defining zxx behavior for all the things, we leave out specifically zxx behavior from the `Intl.Collator` and `Intl.Segmenter` and the toLocaleLowercase and toLocaleUppercase string methods. Because the behavior that is reasonable to define for these is not necessarily stable. And so what I'm proposing here for stage 2 does not include any behavior for zxx for them. Instead, there's a separate proposal that'll continue right after this presentation on what to do about these four specific cases. Now the changes compared to what was presented previously. `Intl.DurationFormat` was previously suggested that what it should be outputting is also ISO 8601-2 duration strings. These are strings that start with a capital letter P and then have a very terse indicator of a duration. These look entirely unlike what you currently get out of `Intl.DurationFormat`, but these are the thing that has been defined for how do you define a duration as a string. So that it's machine parsable. And this is still what I'm proposing here to use for `Intl.RelativeTimeFormat`. But the challenge is that prior to starting the spec work on this, I did not really realize that the way we have defined `Intl.DurationFormat` is effectively in terms of `Intl.NumberFormat` and `Intl.ListFormat`. So DurationFormat calls `Intl.NumberFormat` with unit formatting for each of the pieces of what it's doing, and then the pieces are put together using `Intl.ListFormat`. And so the proposal here is to have DurationFormat effectively rely on the stable behavior for `Intl.NumberFormat` and Intl list format rather than having this completely custom way of doing it. Because again, one of the reasons why we want to do this is to get to support testing and if we want to get ISO 8601-2 duration strings out of DurationFormat, we would need to define a completely separate method of doing so. And it would probably end up calling into Temporal, which does currently provide ISO 8601-2 string output. \[Technical difficulties] EAO: Okay. So DurationFormat is now proposed to be defined using `Intl.NumberFormat` and `Intl.ListFormat`. And the stable behavior is thereof. And they're specifically because DurationFormat for time values defines a way to use numeric times. The colon would be used as a separator there. The next difference for APIs that were previously presented just so `Intl.locale` previously just said TBD. And in the implementation now, it turns out that there is effectively already existing default or fallback behaviors that are reasonable for almost everything. Specifically except that for calendars, I believe that the most appropriate thing for us to return is an array containing the value “iso8601” in particular because we that is intended to be the format used by `Intl.DateFormat`. But also because we do in one or two places in the ECMA-402 specification require specifically for “iso8601” to be a supported calendar. It's kind of vague whether we require “gregory” the Gregorian calendar to also be supported. Except that there's one or two places where that's maybe implicit. This is new content here. So specifically for `Intl.NumberFormat`, it was previously mentioned that we would need to introduce short unit identifiers for all of the supported units. And the list thereof was previously not put together. It is part of this proposal and it'll cover the next few slides here. And highlighted in yellow there are a few items that I thought would be valuable to highlight. So as proposed previously, when determining a short unit identifier for matching the longer identifier names that we have there, the primary reference is the international system of units, which the units on the left there are coming directly from there including the abbreviations shown there. But then the SI system is specifically the spec. I guess it's a spec. Defines some units that are accepted for use with the SI system. And then also defines abbreviations for these. So a few of these namely Celsius, degree, and microsecond feature characters that are not in ASCII. So that's the degree Symbol and the micro Symbol for microsecond. And then which is why they're highlighted. Then the liter and the milliliter are highlighted because there is an optionality here of using a lowercase L or a capital L and effectively an uppercase L is used here for human readers to make it more identifiable from the because the lowercase L is of course you can mix it together with the letter i or the number 1.

EAO: Next up, because we have an existing pattern of using ISO 8601 for date time formatting, the abbreviations for month, week, and year are coming from there. And then further than that, there's some of these that are we getting from ISO 80000. Fahrenheit degrees F again using a non-ASCII character there. And ISO 80000 part 13 is the best definition I could find for defining the abbreviation of bit as “bit” and for byte as the capital “B” and because we have the explicit list of kilo, mega, giga, tera, and peta prefixes, they are also included. Those prefixes are the ones coming from the SI system.

EAO: Then it gets hard because what's mostly left here are the US and British customary units. For which it turns out to be really hard to find an authoritative source that says that “ft”, for example, is the abbreviation for foot. One source that I ended up finding that seemed like it would be appropriate for us to rely on is EN 12435. Which is expressions of results of measurements in health sciences. Which provides most a reference for most of these except for stones. So the list on the right is our remaining problematic stuff because stones got left out of a British weights and measures act in I don't know when and so it's not included anywhere. But when you start looking, “st” is the abbreviation used for stone and it goes well with the remaining units there. For fluid ounces and for gallons, without any context, “fl oz” and “gal” are relatively common. But the thing we need to be aware of is that the units that we have are the American ones even though the identifier name does not specify that. This doesn't show up if you do formatting in JavaScript usually with just `Intl.NumberFormats` with “en” as the locale because “en” expands to “en-us”. And Americans don't think of other people's units. But if you do formatting with the “en-gb” British English locale you effectively actually get “US fl oz” and “US gal”. Then we have “mile-scandinavian”. Which is for all of you just as a reminder because of course you know it, this is equivalent to 10 kilometers. Which is a length unit used commonly still in Sweden. And only in Sweden. There's some historical usage of it elsewhere, in Finland. and in the other Nordic countries. But I cannot find any reasonable abbreviation for it. So the word here “mil” is what it used in Sweden. It is short enough to work as an abbreviation and it fits the pattern that we are establishing here otherwise, of relying on the locale of the place that is actually using the unit. So the US and British customary units have the abbreviations coming from the English language. And so it is only appropriate for “mile-scandinavian” to rely on the Swedish “mil” for the short unit. If we do want an abbreviation for this the only reasonable abbreviation for “mile-scandinavian” that I was able to find is “pk”, which is the Finnish shortening for “peninkulma”. That is the Finnish name for “mile-scandinavian” which has not been really used since the 1800s. And previous to that it was a little bit fuzzy whether it was considered to be exactly 10 kilometers. It was more the Swedish mile which was around 10 kilometers and then historically it was the Finnish peninkulma which was around 6 kilometers. So if we want to go for an abbreviation here, we can use “pk”, but then nobody's going to make any sense of this. The CLDR specifically uses “smi” as the abbreviation for this. I cannot find any other reference except the CLDR data for why “smi” would be acceptable as a shortening here. But it's a possibility for us to use that as well. I recommend “mil”, which makes the most sense. The only challenge here is that mile is “mi” and so it's a little bit close to that. But these sorts of close cousins we're going to get no matter what we go with.

EAO: But yeah. The spec for all this is available in the repository. At the moment the only to-do that it lists is including the datetime format formats and styles data specifically. But the description of what this is supposed to be like is in the README. The only open question really is what happens with if you ask for a `Intl.Collator` or a `Intl.Segmenter` as zxx as the locale because these APIs would not directly support zxx. And this I hope for us to discuss in the context of the next presentation after this one which is hopefully providing a solution there. And after that I'd be happy to ask for stage two but it looks like I have a queue so let's go to the queue instead.

MAH: Hello. Yeah. So my question is about the actual behavior when calling these APIs that don't have any specified behavior for zxx so the segmenter for example like what do they do? Do they throw? Do they fall back to something else?

EAO: They currently fall back to the system locale. So the default locale for what you're using if the locales that you're asking for none of them are supported then you end up with a default locale. So for me for example it would be an attempt first at getting the “en-fi” locale and then selecting the en locale for that in my experience of the web.

MAH: Right. So effectively we do end up with a non-stable behavior in that case.

EAO: At the moment, yes, for all of these things.

MAH: Has there been any consideration into for example throwing so that you don't end up with a non-stable behavior?

EAO: Yeah. Second paragraph here is me asking that question. Sorry. But again I'm hoping to discuss this more in depth in the next presentation which provides a provides more context I think for this.

JHD: On your first or second slide you had an X on 1B. Why wouldn't you want B for a billion? Because the assign abbreviation for giga is capital letter G.

EAO: Okay. But if people are doing formatting for humans at least in the US why would you care about SI units?

JHD: Because Americans aren't really aware of those. And this is the problem.

EAO: Okay. Because mostly you're getting almost the right thing formatting with EN-US at the moment. I see. For non-US use cases meaning. Because in the US this is what you'd want. This is what you get when you're formatting “en-us”. But if you want to get SI formatting you can presume very very easily that EN-US provides you with that except that there's this problem for instance here.

JHD: Got it. Okay.

EAO: This is exactly the shape of the problem that we're trying to solve in this.

SFC: Just to note on this particular topic there's a longstanding bug where if you use notation compact and unit bytes you end up getting a string that has a KB kilobytes and an MB megabytes and then people are like but it shows me BB for gigabytes and that's wrong. So just to note that there isn't an outstanding existing issue for that. ABO?

ABO: Yeah. So there is a proposal also by Mozilla to have something like English like American English spelling and so on with standard measures which would be mostly SI. And I'm wondering what the relationship is with this proposal.

EAO: None.

ABO: None? They seem like there seems to be some overlap.

EAO: There's some overlap. Yes. In that both of these are relying on some of the same sources for what is appropriate. But the use cases here are entirely different. So what we're trying to do with this proposal is specifically provide behavior that is stable that is not going to change. Whereas the idea with the en-zz locale would be to continue to aim to be providing content that is good for humans to consume not for machines to consume.

CPC: I understand the rationale for PR #23 in terms of simplifying the spec. But it seems like in terms of machine readability and this being something people might use for serialization it seems that this is going to be a footgun. Right? You have something that is not very machine friendly. Right? Two hours 30 minutes versus the PT2H30M. So I was wondering yeah. I'm just not sure about this part. There is a balance that we need to find. Between the kind of different potential use cases here.

EAO: One reason specifically why in PR #23 we're proposing not using the duration strings is that the output then would look much more like the output you get for the localized content of `Intl.DurationFormat`. So that when you for example doing a UI rendering or other use of it you would get the sort of behavior with the output that you would get otherwise. Also specifically we already now through Temporal do have a capability in the language for outputting duration strings. So if your need specifically is to get an ISO 8601-2 duration you can get that through Temporal. We don't currently provide that in any way through any of the Intl APIs. So we don't have a real need to continue to do so. But we also don't have a need to provide a new functionality because ECMA-262 already provides that.

CPC: Okay. That makes sense to me. I guess I expected this place would be one of the places where there'd be a difference between the en-zz and this. But I understand the rationale.

JRL: You already expect it. So we have US gallon and US fluid ounces. Then we have “mile-scandinavian” and it's just “mil”. Why is this not Swedish mil or something similar for really obscure units that no one ever cares about?

EAO: Because there is only a singular understanding of what a mile-scandinavian is at the moment, if we ignore the historical 16, 17, and 1800s understandings thereof, whereas for fluid ounces and gallons we do currently have multiple active uses. An American fluid ounce and an American gallon are different from the Imperial British fluid ounces and gallons.

LCA: I'm not entirely convinced by your arguments particularly in light of the topic that WH has later which is that mil is also used as milli-inch which I did not know existed. But after looking it up does seem to be actively used although it's often referred to as a thou.

EAO?: So I think there is definitely the argument to be made that this should be “SE mi” or “SE mil”. I could be persuaded for “SE mil” but “SE mi” feels like an Americanism that should not be imposed here. This also feels like a detail that it would be entirely appropriate for us to consider further during stage two of this proposal.

CPC: Nothing more than what I wrote on the same topic that there were multiple understandings of fluid ounce. There's multiple understandings of the word mil.

SFC: The NIST handbook is also a good source. It contains most of the American Imperial units. Including fluid ounce and gallon. And I also found that Oxford English Dictionary covers stone. I'm still trying to find you a source for “mile-scandinavian” but that should cover all the rest of them.

EAO: Do you know whether the NIST handbook 44 would provide a different value for any of these?

SFC: It doesn't have the US in the fluid ounce and the gallon.

EAO: Those are also covered by EN12435. In the same way. But again the difference comes clear because the fluid ounce and the gallon that we currently do support are specifically the American or as you put it the American Imperial ones. But yeah.

???: Mil is commonly used in the US this handbook 44.

GCL: is just wanted to note that its intended to be informative for NIST people working at NIST. It's explicitly said that it's not a normative document.

SFC: So CLDR uses NIST handbook 44 in order to populate its root abbreviations.

WH: “mil” is a very commonly used unit in the US. It means one one-thousandth of an inch. It's used in all kinds of industrial applications and to measure things like the thickness of paper. So having it to mean either one one-thousandth of an inch or 10 kilometers might be quite confusing.

WH: And my other question is you had the Greek letter µ to mean micro. Which unicode character is that? There are two unicode characters that look like that.

EAO: I am entirely open to discussing this detail or changing this to actively avoid that character during stage two. The letter “u” would be an alternative that could be considered here.

WH: I would not want “u”. “µ” (U+00B5) or “μ” (U+03BC) is the right spelling of it. It's just that there is a micro unicode character created specifically for the micro prefix (U+00B5) in the Unicode Latin-1 page and there's also the Greek lower case letter mu. Both are the same symbol that just happens to have two different unicode characters for the same symbol.

EAO: It sounds like you're recommending a specific one and we should probably follow that recommendation.

WH: I'm not recommending a specific one.

JHD: Yeah. On every Mac since the beginning of Macs option-M produces µ.

EAO: I assume that's the Greek letter and not the specialized form. But no. It's a special form.

WH: It's the Latin-1 µ.

JHD: Whatever the one that you can just produce on a regular Mac keyboard seems like the better choice to me. Because like on Windows there's all the numeric codes. But on a Mac it's like\[…] CPC: I think only one of these is not legacy and discouraged by unicode itself. So the Greek small letter mu is the one that's encouraged to use for all uses. I think the other one is basically deprecated.

SFC: It looks like CLDR uses Greek smaller mu in its units file.

RGN: I would not consider whatever is produced on a Mac by a common key chord to be a sound basis for the decision.

JHD: I mean that's fine. It's just if it's something we expect people to type then I think likelihood of that they can type it on their keyboard is in fact something to consider.

RGN: But that certainly is not the deciding factor. I would say that this is not for people to type. This is for people, if anything, to write code to consume. But I suspect that the Mac key binding might be specifically related to the Greek alphabet rather than to use as a measurement prefix, which would invalidate it even further. However, I think that this question actually can be researched and answered. And we should just log an issue for it.

WH: The Mac key bindings are only for π and µ. There are no other Greek letters unless you have a Greek keyboard locale installed.

EAO: Okay. So it sounds like we ought to be filing an issue about resolving specifically the microsecond and the miles-scandinavian short unit identifiers. But overall I've not heard other concerns here. And it does look like the queue is currently empty. So with these detail-y things being I think appropriate for consideration later. I do believe that it might be appropriate for me to ask for stage 2 for this.

JRL: Would anyone like to explicitly support stage two?

SFC: I support stage 2. But I also have a lot of issues open on the repo. And I'm opening more right now too as well. But they're all small issues that we can resolve during stage two. The main sort of larger issue is still the confirmation about zxx being safe for us to use in this context. And I didn't end up having time to follow up on my own in the last week. To verify that with CLDR. So I would like to have that be verified. And I think that using `Intl.STABLE` or `Intl.Something` to return a string that is the string that we choose. And having zxx like that shape of solution I think is the right shape of solution. But both the string that is returned as well as the name of the identifier that's used to return that string. I think are things that I consider to be like bike sheds that we need to resolve. But the shape seems right to me. So from my perspective I think stage two is appropriate. But if anyone thinks that those are things we need to resolve before stage two this would be the time to raise those questions.

JRL: Okay. So explicit support from SFC. With RGN is saying I support stage two. anyone else? Okay. And does anyone object to stage two? Hearing nothing I think. Oh, SFC. Don't object please.

SFC: No. I'm not objecting. I just wanted to raise to the room because it might be relevant here. About the use cases. We did spend quite a bit of time in the TG2 meeting talking about the different possible ways that this can be used. And like I think that it's a proposal that's trying to solve a lot of different issues. I don't know if you have a slide for that. But maybe you can if there's a slide for that in this presentation that slide for use cases. I think you had one yeah motivation that one. I think this is probably the original motivation of the stable formatting proposal. But it's also not really the motivation anymore because we've added Temporal now. That solves the original reason we had this proposal. And we're introducing Amount so that we don't have to worry about the parsing stuff with unit conversion. So I think that this motivation is still valid but not as strong.

SFC: I think that there are some use cases that got brought up in the TG2 meeting as well as in other discussions I've had since then about for example testing. Maybe benchmarking. And having deterministic reproducible results. Between implementations. Like those are all use cases and those use cases are all somewhat covered by this proposal. But also like there are other proposal shapes that could also possibly cover those use cases. So for example pseudo local is something I would love to see. And I think that pseudo local is a thing that could take a similar shape as this proposal. If we were to add that in the future. And you already have another proposal coming up after this one about getting CLDR root behavior. For various Intl APIs. So I did just want to note that I think I like the shape of this proposal. But I'm not really sure if this is the motivation for it anymore. I think the motivation of the proposal has shifted. And I think it would be good for us to acknowledge that it has shifted. And that although the proposal's current shape could serve those use cases there are other shapes that could better serve those use cases as well. Which just kind of a nebulous comment. To say that like I like this but also like I don't know if it's the best solution for the problems that we have right now.

EAO: So given that you supported this for stage two. But you commenting like this when asked about objecting to this for stage two.

SFC: That was just because the queue system is like I wanted to put in a like when I pushed the new topic button it was like JRL please don't say object because that's not what I'm putting the comment on for. That's a timing issue.

EAO: Got it. Okay. Okay.

JRL: So back to stage two advancement. We had two explicit supports. One from SFC which is why I thought it was funny that you commented while I was saying are there any objections. Sorry. That was confusion. We had two explicit supports. Are there any objectors to stage two? And with silence I think we have you at stage two.

EAO: Thank you. Excellent. And my next question is of course can I have some reviewers for stage 2.7?

SFC: So the topic that I wanted to say was like after this one which is like I think that we should update the motivation. I don't know process-wise. Like the motivation for the proposal was stage one I think is no longer a motivated proposal. But I think that this proposal is motivated by other reasons. I don't know what the process is for updating the motivation.

EAO: I think you're allowed to file a PR for the proposal changing its readme which is representing its motivation.

SFC: Like process wise we as a group have to agree on the updated motivation.

EAO: If we have a PR then I think that seems like an appropriate thing to be raised at a TC39 plenary and discussed specifically. If necessary.

JRL: Okay. RGN saying he's willing to review. Can we get a second reviewer for stage two? Perfect, DLM.

### Speaker's Summary of Key Points

* Stable formatting via the zxx locale provides a better alternative for Intl abuses, and for Intl testing.
* For a few APIs (specifically `Intl.Collator` and Intl.Segmenter) we have not identified reasonable stable behaviour, and so they are left out of this proposal.

### Conclusion

* The proposal was approved for Stage 2.
* Some concerns were raised regarding the `microsecond` and `mile-scandinavian` short unit identifiers, which will be addressed later.
* Additional open issues will be discussed during Stage 2.

## Default Behaviours for some Intl APIs for Stage 1

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/eemeli/proposal-intl-default-behaviours)
* [slides](https://docs.google.com/presentation/d/1xPQ6WDDYf2MYCLPxFlaRBKARPWhaZ7fVCPFA8e6xRaY/edit?slide=id.p#slide=id.p)

EAO: This is the specific stuff that got left out of Stable Formatting. And that would be what do we do about the APIs for which no stable behavior is proposed. The motivation for this work is that this behavior exists. And it is useful. And it should be made available to users. I found specifically one very appropriate issue on the 402 repo stating that “I expected to be able to specify the und locale tag with `Intl.Collator`, in order to access the so-called root collation and obtain a reasonably language-agnostic sort order (or the closest thing available).” Which is pretty much exactly the kind of motivation we have for making the root collation available for this. The other big part of what was left out for zxx is the segmenter. And in the spec for `Intl.Segmenter` we do include this note where it says that boundary determination is implementation dependent but general default algorithms are specified in Unicode standard Annex 29. It is recommended that implementations use locale sensitive tailorings such as those provided by the common locale data repository. So specifically effectively this is directing implementers to you should be using the default algorithm defined in Unicode Annex 29 but then apply tailorings for the specific locale that is requested.

EAO: But the challenge here is that we do not currently provide a way that you can always get the default untailored behavior even though effectively we are directing implementations to support it. So here the proposed solution is that we explicitly add “und” as an identifier for it is short for undetermined. And it is commonly used as a way of identifying the root locale. As a supported locale for the `Intl.Collator` and the `Intl.Segmenter` and then there's a couple of specific cases where providing it would be helpful. And specifically the ask is for again as with zxx that we don't actually define a new API for getting the behavior. But we use the existing API of `Intl.Collator` and `Intl.Segmenter` to create these instances. And we use “und” as the known and well-known identifier for the root locale to get at the behavior that is a default locale independent behavior.

EAO: It would be possible for us to use to some extent a four letter string like “root” or something like a well-known Symbol, as a way of getting this behavior. But the challenge here is that at least for collation, emoji collation is something we would like to explicitly be able to support. We currently do support it in most in browser implementations at least. And for that we would like to be able to support the locale subtag UCO emoji. And this effectively requires locale parsing and processing and that becomes significantly easier if we don't add a special case for something that does not match the existing structure for what a locale identifier looks like. And so clearly we have an audio technician who's moving. Okay. And then specifically also part of the proposal here is to answer I think the first question I got with the previous presentation which is what happens if you ask for the zxx locale with the `Intl.Collator` and `Intl.Segmenter` for instance. And the proposal would be that in these cases zxx falls back to “und” as the locale that you get. So if you ask for zxx behavior in a place where you don't with these two proposals get stable behavior you would get default behavior which would be like mostly stable but not you can't promise that it is always going to be stable. Because that would be closest to what we believe the user would actually want out of this. So specifically for the `Intl.Collator` the recommendation would be that we end up with the CLD or root collation as being used. And then for the `Intl.Segmenter` for the grapheme that's the default granularity we would use the UAX 29 segmentation.

EAO: Without tailorings and for the word and sentence segmentation it would comply with UAX 29 and 14 potentially with tailorings as long as those tailorings are the same between all locales. And then the two other places where we have the sort of default but not stable behavior are the string prototype two locale lowercase and uppercase. Where the proposal would be that with the “und”locale you would end up doing the same thing we do for string prototype two lowercase and two uppercase. Which are already now defined to use the Unicode default case conversion algorithm. The one specific change with respect to ECMA-402 would be… there's nominally a relaxation of allowing an implementation of using an implementation derived algorithm for the “und” locale for any locale sorry. That covers this weird edge case that I don't think anyone is I have not checked but I trust that nobody's actually doing because the two lowercase and two uppercase is already defined to do exactly this thing. So with “und” we would require to do the same thing as two lowercase and two uppercase.

EAO: And then the ask here is that is this okay for stage 1? There is no spec text for this. This is a spinoff from the previous proposal. Is this okay for us to consider specifically the motivation here? That we should be looking for defining and expressing default well-defined and locale independent behavior for the specifically the `Intl.Collator` and `Intl.Segmenter` APIs which is what I'm here for. I'm happy to get to the queue and the only one there currently is SFC.

SFC: Yeah. I think the motivation is good here for sure. I think that the actual mechanism we need to discuss a little bit more in TG2. I had made an observation like maybe a year and a half ago at a TG2 meeting that currently the way you get the default locale is to use undefined. And as it happens to be string “und” also gets you the default locale in the same way as keyword undefined. And I think that this is a invariant that I would be surprised if it's web compatible to change this. And it also seems like an intuitive way to if you are in a system that is using strings for locales which we acknowledge in the previous proposal is a thing that we want to support because we wanted to use the zxx instead of keyword null. So in TG2 we made the explicit acknowledgment that being able to run these APIs with string locales is a use case we want to push to support. Given that what does a string locale to get default locale basically the equivalent of keyword undefined string “und” seems to be the most sensible choice. So in order to get the locale independent root behavior we might want to consider other strings. I don't have a string to propose right now. But I just wanted to raise that. I like the motivation but I think we need to explore other options. For what the string locale should be.

EAO: Noting of course that it's very much a JavaScript Intl peculiarity that “und” can be considered to have a meaning of “default locale” rather than the root locale.

SFC: Yeah. It's had that behavior for 14 years.

EAO: Seeing nothing else on the queue I think I'm just going to ask for stage one then.

JRL: Okay. Can we get explicit support for stage 1? MAH plus one and a message ZTZ plus one and a message anyone else? Okay. Any objectors to stage one? All right. Hearing nothing stage one. Congratulations.

### Speaker's Summary of Key Points

* Default, well-defined, locale-independent behaviour exists for the APIs for which no stable (zxx) behaviour is proposed (`Intl.Collator` and Intl.Segmenter). These should be made available to users.
* The initial proposal is to add support for the “und” root locale for these APIs

### Conclusion

* The proposal was approved for Stage 1.

## Intl Sequence Units for Stage 1 or 2

Presenter: Shane F. Carr (SFC)

* [proposal](https://tc39.es/proposal-intl-sequence-units/)
* [slides](https://tc39.es/proposal-intl-sequence-units/slides/stage_1_or_2.html)

SFC: Here we are. Intl Sequence Units. You're getting all your Intl proposals this morning. So we've got Intl sequence units so let's go ahead and get started here. So backgrounds. Measurement systems frequently employ multiple units. So if you ask someone how tall they are they might say that they're five feet eleven inches, if you're in the US. If you're in Switzerland they might say they're one meter eighty centimeters. If you ask someone how heavy a baby is they might say something like this. That's a fairly light baby but you get the idea. And there's other ways that you can combine these units. In many ways being able to speak a sequence of units is a way of being able to communicate more clearly a decimal point. Because you could also say two point or I guess one point eight meters but one meter eighty centimeters at least in some locales is a more clear way of communicating that. So being able to use a larger unit and one or more smaller units is a way to in natural language communicate with more precision of specific measurement of something. So these are just some examples of that.

SFC: So the problem is currently that developers manually need to compose multiple `Intl.NumberFormat` outputs. And I think I have an example here. About what that means. So if you wanted to for example take the foot and inch example and glue it together you could write code that looks like this. You could have an Intl number format. You create one for unit foot. You create another one for unit inch. You create a list format with style unit type unit and then you glue it together like this. And you end up getting the string that you want. Although this is linguistically correct it is not ergonomic and is prone to user error. It requires multiple formatters manual management. You have to make sure to do sign handling for negative numbers and there's a lot of foot guns here. You have to just look at the correct list style that you have to remember to specify type unit in your list style. So this is currently behavior that we have in the web platform. However it has those foot guns issues that I just listed. And another motivation is that in a future amount type it's desirable to be able to be able to pass that in and glue it in with a single format function as opposed to it having to if it were to support sequence units having to have its own code path. So being able to have for example an Intl unit protocol that supports sequence units as well as standard units is also motivation. Like you shouldn't have to be like if unit is a sequence unit do this. Else do that. We want to have just one place where you can pass any unit whether it's a sequence unit or a regular unit. And be able to have that formatting behavior.

SFC: I also want to point out that as EAO pointed out on his previous presentation duration format also does this where like you can get most of the duration format behavior by just gluing pieces together from number and list formatting. And we decided that duration formatting was an interesting enough space that and error prone enough space that we wanted to make an actual formatter for durations. And that's what we did there. So that's the problem space. So I would like to get comments about the problem space and the motivation and ask for stage one.

DLM: First up on the queue is NRO.

NRO: In the workaround you showed when you said that a possible mistake is the unit order. That's the change across locales like is it possible that an order that works for English doesn't work for some other language?

SFC: The big endian order is used in all locales that we know of. But you have to like you have to put it in the correct order in your code. If you put it in the correct order in your code it's not linguistically incorrect.

NRO: I support stage one.

DLM: EAO with the message plus one for stage one. So that's two voices of explicit support for stage one. Anyone else want to make a comment or any objections?

WH: So what happens if the person-height is six foot even. Does it display “6 ft 0 in” or does it display “6 ft”? How do you choose?

SFC: So I've not yet proposed a solution to the problem. At this point I'm only proposing the problem. So the problem is that in order to get this behavior developers would need to manually compose this. In what you can currently do if you wanted to hide the zero inches like you could manually write an if statement in your workaround code to hide that if that is desirable for your use case. And I'm saying that like having a built-in solution to handle this exact type of issue is something that is motivated to be part of Intl number format directly instead of having the developer have to think about these edge cases. And write all their if statements and such.

WH: I'm curious if you'll pick one of the solutions and implement only that one or if you'll give developers a choice of them—what's your feeling on that?

SFC: I would expect that the shape of a solution if we decide this is a motivated problem would probably give users an option in a similar way as the hide trailing zeros on integers is an option that we have in Intl number format. This is a good question though. I don't know if it's I'm not going to jump ahead to the stage two section of the presentation yet. But it is definitely something that should be considered. My initial reaction is it should be an option.

WH: Okay.

CPC: It was just to clarifying question based on the fact that your example said five feet eleven inches but when WH said it he said five foot eleven inches. Will that be configurable?

SFC: There's a certain canonical linguistic solution from CLDR and we'll just use that. The linguistic solution from CLDR is to pluralize both units individually and then glue them together with the unit pattern. And if CLDR just if CLDR decides that having the person height having the greater units be singular in this context is more linguistically correct then we will adopt that behavior.

LCA: I think this is well motivated for stage one. It's a problem that I personally have run into frequently. I'm sure others have too. So I'm happy that you're looking into this.

DLM: Okay. Well we've heard explicit support for stage one. Are there any objections? Okay. Congratulations. You have stage one.

SFC: Thank you.

SFC: All right. So now let's go ahead and explore the problem space a little bit more. So this is on the agenda for stage one or stage two. I do have some slides here about a proposed solution. So we can extend `Intl.NumberFormat` to support these sequence units. So if you have a unit that has the and infix this is how you can specify a unit into a thing like `Intl.NumberFormat` to specify the formatting. So if your unit is “foot-and-inch” then you will get the five feet eleven inches output. If you pass those into the format function the format function takes a JavaScript object with the subunits and the values for those specific subunits. So there's a lot of back and forth that went that we spent quite a bit of time over the last few years and especially the last few months in TG2 to come up with this exact slide that you see in front of you. We talked about the different ways you could specify the unit as well as the different ways you can pass it into the format function. And what you see in front of you is currently what TG2 is happy with. This particular shape.

SFC: I can go through a little bit more of the details of this shape. First the -and- infix comes from CLDR. That specific unit identifier syntax is specified in the UTS number 35 standard. It also specifies how to use the list data in order to compose those. So this proposal implements the UTS 35 specification. We also are in active discussion with CLDR there's a few more edge cases that we discovered in the TG2 process for making this proposal. That we've proposed to upstream into CLDR and they are they were welcome additions when we discussed these with CLDR. So they're considering to adopt some of the design choices that we made in TG2. So that's the prior art. There's some more details that we looked through. Negative numbers we decided to basically adopt the `Intl.DurationFormat` behavior. Which is that one the units need to have the same sign. The subunits need to have the same sign. So the second example on this screen is that if the subunits have mixed signs and that is an error. They must have the same sign being formatting of mixed sign mixed units is not something that we wish to support. And in addition when you do actually end up formatting it we only put the sign on the unit of largest magnitude. This also follows the Intl duration format behavior and is behavior that CLDR has already accepted and is going to upstream into their specification. So that's negative numbers.

SFC: I also want to compare a little bit more with duration format because we have duration format time units are currently out of scope for this proposal. Some and here are some other key differences. One thing that is featured in duration format is the digital style. In `Intl.NumberFormat` sequence units that's not there's not currently an option for digital style unless it happens to be the case that the short abbreviation for a unit is a digital type style like for example degrees might use the little degree sign. And in certain locales the narrow form of foot and inch uses the primes Symbols for those. But there's not an explicit digital style that you can guarantee across locales like there is in time formatting. Another difference with duration format is the semantics about how we read fields. So in `Intl.DurationFormat` no matter what your formatting settings we always read all seven of the time units. Year month day hour minute second I guess there's more than seven. I forgot how many there are. Ten. We always read all of them. All the time. And if they're non-zero we display them. And this is different than the `Intl.NumberFormat` behavior. In the Intl number format behavior we look at the unit identifier string. We pick out the subunits that are in the unit identifier string. We read those fields. We ignore all other fields. And we require the fields that are in the Intl number format string to be present. In the option pack that you're past to the format function. So this is a there's the field reading behavior is a pretty big difference between these two proposals. Almost every other aspect is the same but this is a difference. We discussed this in TG2 and DG2 seemed okay with this behavior difference.

SFC: So here's some more edge cases. So if you have a foot and inch formatter if you don't give both units it's an error. If you give extra fields they're just ignored. Another edge case we considered is that the intermediate units need to be integers. And the reason here is because if you specify rounding options on your Intl number format those rounding options need to apply somewhere but we only want to apply them to the smallest unit and not to the intermediate ones. This is also behavior that CLDR is okay with. Having intermediate units be required to be integers. We discussed this in the CLDR meeting. Earlier this week and this is behavior that they're okay adopting as well. And if you have an invalid unit sequence an invalid combination I talk about meter and foot actually on the next slide. But if you have an explicitly invalid unit sequence that will also be an error. Okay so now let's talk about this. This is something that came out of the TG2 discussion that we just had at our last TG2 meeting. And this particular slide came out of that discussion. In order to when we add units into Intl we had a fairly big discussion in the March meeting about how every individual unit needs to be individually motivated. So this principle should also apply to sequence units. So we although we could although we could allow any arbitrary combination of sequence units in order to give ourselves the most flexibility as well as align with the idea of motivation we decided to focus on only those combinations that are motivated and also are definitely clearly a valid combination. So there's currently six sanctioned sequence unit groups. And this is in the this is in the spec this is in the proposal text. For units that you're allowed to combine. And when you combine them they must be in order. So you can have your heart's content of mile/yard/foot/inch. Glue together in mixed units. They have to be in that order. You can have as many or a few of them as you want. The second one is kilometer/meter/centimeter/millimeter. You can glue those together to your heart's content. Again they have to be in order. Stone/pound/ounce is another group that's well defined. Kilogram/gram is another one. Gallon/fluid-ounce. And then finally liter/milliliter. Those are the six sanctioned sequence unit groups. And open question is whether we should support unit groups that are in the same category but are not integer multiples like meter and inch. CLDR discussed this and decided not to forbid them. We could decide to take the more conservative behavior of forbidding them until there's a clear use case for having meter and inch type of formatting. Or we could go with the more flexible approach that CLDR has taken which is unless it's explicitly wrong CLDR tends to allow the thing to happen. So that's an open question that I think can be discussed during stage 2.

SFC: An alternative design that I want to highlight is that we could consider having a scalar input. So for example when you pass a number to the Intl number format function all the examples I've shown so far you pass an object that has fields. Another design which is the design that I had originally advocated for is to use a scalar. So you pass a number and then the number gets split out and converted into the individual fields in the sequence unit. So for example if you wanted to format six feet and three inches you would pass in the number six. To five perhaps. TG2 discussed this and decided not to pursue it for a few reasons which are listed here. One is that it's ambiguous which unit is being indexed and there wasn't a very clear there wasn't a very clear at least to the TG2 delegates mental model for which one what the unit is measured in. So if you have 6.5 or 6.25 is that 6.25 feet or is it 6.25 inches? It's not necessarily clear. And there's not an intuitive mental model for that. This is for the research we could do if we decided to go on if we decided to go with scalars. We could do that additional research. How am I doing on time? Attendance left.

SFC: Okay. Cool. Another is incomplete conversion data. We decided that we wanted to be able to support the units even if in the future we were to generalize Intl to be able to format units that we don't have conversion data for we still want to be able to support mixed units for those. And then a third is when you have the unit conversion and the formatting we can avoid the precision rounding errors inside of Intl and basically put those outside of Intl. When we can. So we don't have to deal with those problems in this specific proposal. All right. Here we have about 10 minutes left to drain the queue. If we have a queue and then I'll ask for stage two.

JHD: To your question about the foot and inch which what is 6.5? I would assume that it's always in the largest unit. And it's fine if everyone else has different opinions but I'm confused why you wouldn't why you'd expect anything different. Is there an intuition that could explain that?

SFC: I mean it's a question that for example I think one intuition could be you measure a person to the nearest inch and then you maybe someone is 75 inches of height and then but since 75 inches of height I have no idea how actual tall that is then you would split off the you would take an integer multiple of 12 and split that off into feet. So that would be one possible intuition for why you would want to measure it in inches. Because for very small units it's measured in inches one inch two inch three inch and then when you get to 12 13 14 15 you want to keep measuring it in inches.

JHD: Yeah. I mean for just foot or just inch I mean it's straightforward. 75 inch and six foot or whatever. But or 6.25 foot. But the I guess I'm just if you said I am six and a half foot and inches who's going to expect your anything but six six? I don't know. Anyway this is a subjective intuition thing. We don't have to keep discussing it. I just.

SFC: I don't disagree with you. And it's a thing that we could do a user study if we were to explore the avenue. Of using a scalar input. However since the proposal is not using a scalar input it's not a problem that we have to actually do that research on. But if this committee wants us to pursue using a scalar input there are some advantages which I didn't list on the slide. One advantage is that it guarantees for example normalized well-formed inputs. So for example in the current proposal it's basically not possible there's not a lot we can do to prevent you from formatting one foot and 15 inches. If we were to have a scalar input we could do more to enforce the normalization. Another advantage is that we don't have to worry about reading fields of things. Reading fields especially with the Intl unit protocol proposal now you're going to have nested of nested objects when you're passing to your formatter it also means that there's a little bit more complexity in the amount proposal because the amount proposal needs to be able to support being able to have multiple individual inputs that are supported in the amount instead of just having a single number field. So I didn't list those. But there are advantages of having the scalar which is the reason I originally supported the scalar. But TG2 seems convinced that using an object was a better approach. So I ended up coming over to that way of thinking. But if this committee thinks we should go back and reconsider scalar then that's exactly the right question to be raised here.

EAO: Another place where it would become easy for a developer to presume that the if a scalar input was accepted that it would be based on the smallest unit would be for example fraction digit formatting. Because it is entirely valid with `Intl.NumberFormat` to define minimum maximum fraction digits. And in this shape of a proposal we end up with fraction digits only being on the smallest value. And therefore all of the other units for feet and yards and miles and so on those end up using integer formatting. And so formatting 6.25 with fraction digits one would be easy to presume that the fraction digits ends up being applied to the 6.25 rather than the inch part thereof. So by not deciding whether a scalar represents is based on the largest or the smallest unit but instead being explicit about it it reduces a lot of the ambiguity around both the users and the readers of code for what is happening here.

JHD: So I mean I guess I'm not sure what the fraction digits thing is. If you had 6.25 feet and you formatted that with fractions it would be six and a fourth feet even though that's weird and no one would do it.

EAO: What I meant is that if we allowed for 6.25 to be a valid value to be formatted with the unit of foot and inch then does ambiguity that.

JHD: Why would that be 6.25 inches? If the unit's called foot and inch and someone says 6.25 I'm not going to assume it's this long. I'm going to assume it's-.

SFC: So if someone tried to format 70 foot and inch 75 and 75 as their input then I think the intuition there is that that's measured in inches. If they pass in 6.25 the intuition is measured in feet.

JHD: I don't see why that would be that intuition. Absent any context obviously. If I'm using the unit foot and inch that's I think that is a distinct thing if I'm actually doing 75 inches I would do 75 inches and then try to convert it to foot and inch.

SFC: Yeah. I acknowledge your point and I think that it's a moot point if we decide to go with the object input. So I think I'd rather go through the queue. We can take this discussion offline. If we decide to go with scalar it is a discussion that we need to have.

WH: If we decide to go with scalar input, we should pass in the smallest units otherwise we'll get constant fights with roundoff errors. If you have meters and millimeters then you'll be constantly fighting with floating point roundoff if you provide the input in meters. If you provide it in millimeters then it's just integer arithmetic which works much better.

NRO: Yeah. With the proposal version with the options bag how would you behave when the non-smallest unit has a non-integer number? If it was 6.25. Oh thank you. Okay. And then can we then allow both things? If in the example here I was only to say foot 5.5 and then do not specify inch then get it balanced out and it's unambiguous here whether 5.5 is foot or inches because I'm labeling it through the property. It is quite nice to have the language to the thematic split so that you don't have to do it myself. Mostly because if I have these numbers stored somewhere I'm probably going to have it stored as a single number not already pre-split into pieces.

SFC: Yeah. This is a problem that should be solved when we have a proposal such as the amount proposal that includes unit conversion. Being able to normalize the unit in that step of the formatting I think is the right thing to do. That's a very similar strategy to what we took with duration format. With duration format we had a lengthy discussion about should the duration auto balance or should it just take what the user gives it. And we decided that on the Intl side it should just take what the user gives and then we have the Temporal duration object that has all the fancy ways to do balancing. And with. If you want to do the balancing you use a proposal such as a potential future amount to do the balancing and then pass the amount in and you just get it formatted.

NRO: Okay. That makes sense. Thank you.

DLM: We only have about a minute left although we can go slightly longer but I don't want to eat into RGN’s continuation.

WH: I think you already answered my previous question, which is: 5 foot 13 inches will format as “5 ft 13 in”, right?

SFC: That's right.

WH: And what about degrees, minutes, and seconds?

SFC: It depends on the locale. It's not guaranteed to be a numeric format but if a locale has these Symbols then that would be an output. I'll also point out that Intl does not currently have arc minutes and arc seconds. Windows get added. We could behave here that you could surface if a locale specifies that that's the behavior that they want.

WH: I don't understand the answer that it depends on the locale. Are you saying that if you try to format degrees, minutes, and seconds, on some locales it will do something and on other locales it will do what? Throw an exception?

SFC: It might have the word arc minute or it might have its own abbreviation for arc minute.

WH: Okay. But on every locale you will be able to format degrees, minutes, and seconds and get some readable string right?

SFC: Yes.

EAO: Should point out here the specifically the minute and second units that we have support for in Intl at the moment are duration minutes and duration seconds. We explicitly do not have arc minute and arc second as supported units in Intl. Those could be introduced but that is clearly not a part of this proposal.

BSH: I'm just curious to know how will you know when you have defined this for enough locales and enough sequences within each of those locales to decide that you have the spec ready to move to stage three?

SFC: So there's currently 45 units in Intl and if you look back to the March presentation that I gave we're considering adding a few energy related units to that. So any unit now of the 45 units we have now the ones that are shown on this slide is the entire comprehensive set of the sequence units that would be allowed. And then when additional units get added like for example when we add watt and kilowatt I would presume that those would then become a sanctioned sequence unit group. So.

BSH: So you don't expect the sanctioned group to be different based on locale? So even if you're in I don't know a Russian locale you can still do things as stones, pounds, and ounces?

SFC: Yes. The sanctioned sequence unit groups is not locale specific.

BSH?: Okay. All right. Thanks.

DLM: So we only have about a minute left. Do you want to try it for stage 2 SFC?

SFC: Yeah. I'll go ahead and ask for stage two. With the design of using an object as the input not a scalar if anyone thinks we should be using a scalar in doing the automatic normalization that is currently out of scope and not what I'm asking for for stage two. What I'm asking for for stage two is this slide. This behavior. And if anyone thinks we should have a different design this is the opportunity to raise it. Otherwise I would like to ask for stage 2 on this design.

DLM: Okay. You already have a plus one from EAO for stage 2. So anyone else would like to voice their support? We have a plus one from JHD: “A scalar can be added later. End of message”. So that's 2 voices of explicit support. Really quickly if anyone wants to object this is your opportunity. Otherwise we should move on.

DLM: Okay. Congratulations. You have stage 2.

SFC: Thank you.

DLM: Oh. Yes. We should get reviewers and I'm going to ask RGN to get ready with his continuation.

SFC: Yeah. I didn't have a slide for I didn't have a slide for that. There is one slide after stage two. I asked my I asked for my jet ski(?) to give itself credit for at least part of what you saw. I don't want to get into too much of that but it wrote itself a credit slide. So I guess I should show that.

DLM: Okay. EAO volunteered. We have one more volunteer to be a stage 22 reviewer. Okay.

SFC: So who are the reviewers?

DLM: I have EAO and just in the instance of time I'll volunteer as well so we can move on.

SFC: Thank you.

### Speaker's Summary of Key Points

* Zero Values & Pluralization: WH asked if zero values (e.g., "6 ft 0 in") would be displayed or hidden, and if developers get a choice. A follow-up issue will be filed.
* Scalar vs. Object Input: There was significant debate over the input shape. JHD questioned the intuition of scalar inputs (e.g., whether 6.5 represents 6.5 feet or 6.5 inches). EAO advocated for object input, pointing out that using a scalar creates ambiguity when applying options like fractionDigits. WH noted that if scalar were ever used, it must be the smallest unit to avoid floating-point math errors.
* Scope of Supported Units: WH asked about degrees, minutes, and seconds. EAO and you clarified that arc minutes and seconds are not currently supported in Intl and remain out of scope. BSH asked whether "sanctioned sequence unit groups" are universal across all locales, not locale-dependent.

### Conclusion

* Consensus for Stage 1.
* Consensus for Stage 2 with the object-based design. As JHD noted in support, scalar inputs can always be re-evaluated or added later if needed.
* EAO and DLM volunteered as Stage 2.7 reviewers.

## SetFunctionName refinement

Presenter: Richard Gibson (RGN)

* [PR](https://github.com/tc39/ecma262/pull/3855)

RGN: Yesterday we discussed a little bit of a refinement on what we should or could do with `Function.prototype.toString` and the `[[InternalName]]` slot that it looks at. The pull request that was under discussion yesterday was prohibiting the function-by-function free choice of whether or not to prefix the get or set for accessor functions. And that one went a little bit too far for this meeting. So this PR is a replacement. I still want to do the other one, but I also want to get things moving right now. It's switched from normative to editorial, and in fact I'm not even sure this needs consensus. But since it came up in the context of the plenary we'll discuss it and then let you go off to lunch. So the general approach to it is that in place of the current spec on the left here where there's a note about the following step being made independently each time whether or not to prefix `[[InitialName]]` of an accessor, over on the right now there's a normative optional step for updating the slot, first unconditionally and then normative-optionally exercise the legacy step of an implementation-defined choice of whether to use the unprefixed name or the prefixed name. Along with a note down here after the algorithm indicating that the choice of whether or not to include a prefix is implementation-defined and should be uniform, but that including it in some built-in functions but not others is discouraged legacy behavior. So we end up with this kind of double approach where the outermost normative optional, the one that unconditionally sets `[[InitialName]]`, is a consistent free choice. We have implementations that go one way or that go the other, no judgment associated with it. But then the step that sometimes sets it and sometimes doesn't is additionally marked as legacy. This summarizes the entirety of what I had to present so I'm ready for the queue if any.

JHD: I made a comment or I think it's posted. You have the word “should apply”. I think it should be “must apply”. In other words the whole benefit is tightening it and that's only the case if it's mandated/normative. So I think we should absolutely land this with the word must instead of should there and then I also just like you would like to pursue the tighter one in the future.

RGN: So to clarify the word that I just highlighted you would want to change to “must”?

JHD: Yes. In other words allowing an implementation to make the choice but no longer allowing them to do what the removed note says which is make the choice each time the AO is called.

RGN: Well that would be what we discussed yesterday. That would be normative and couldn't apply just in the note anyway because notes are never normative. So this clarifies the existing state of affairs. This editorial change makes it clear that we're discouraging the free choice but that it is web reality.

JHD: Okay. So that's fine in that case you're right it's editorial. I think that what we should just mandate it though.

RGN: By discussing it in future meetings that the normative change didn't pass yesterday and was added to the agenda late anyway.

JHD: Okay. Understood.

RGN: So I do want to improve the state of affairs normatively, but this is better clarifying it editorially.

MF: I think RGN just covered what I was going to say.

NRO: So I support this change. I do believe it is normative. It should be considered normative to actively discourage something and not just within editorial discretion. But yeah. I also don't particularly love the way you wrote it but we can iterate on that while keeping the same meaning.

DLM: Okay. Does anyone else want a voice support or raise an objection for this normative change or editorial change I guess?

RGN: Okay. Does anyone want to object to this being handed off to editor discretion?

RGN: Excellent. That's all I got.

### Speaker's Summary of Key Points

* There is still appetite to pursue the normative https://github.com/tc39/ecma262/pull/3855 , which will be brought back in a future meeting.

### Conclusion

The editor group has discretion for https://github.com/tc39/ecma262/pull/3874 .

## Amount for Stage 2

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-amount)
* [slides](https://docs.google.com/presentation/d/1Wq4uT0-lx8A_rfoSQ9uy5cnH1WHZXVjRmfYuugqkjQo/edit?slide=id.p#slide=id.p)

EAO: Hello, this is Amount for stage two, again. I think Jesse might be on the line or joining us, but I'll be mostly presenting this given that I'm here and he's in Japan. So in case you've managed to forget, amount continues to be a proposal introducing a container sort of a thing for a numeric value which is proposed to be a number, a big int or a numeric string. That can be combined with a unit identifier. And the capability is that we ended up discussing wanting to introduce last time and now included is that we are including unit conversion as a functionality proposed here for stage two in this proposal. So overall, the since the last time this was presented, a number of changes, improvements have been made to the spec.

EAO: I'm going to go over some of those in more detail, but overall, the list is on this slide. So the math we're using for `convertTo()` is now more precise. And the `convertTo()` options are now the same as the options for used in the constructor, specifically for fraction digits and significant digits. Previously, in convert to, we had minimum and maximum versions of these like number format has. Further than this, we've also made it so that numeric string representations of numbers are numeric values. Always use a scientific notation when they are being expressed. And then the value for which we have an accessor when that value is not finite. Then we've made it so that that value is always a number, so meaning it's infinity, negative infinity, or NaN. And then we've also made some changes to the two-string value in this proposal.

EAO: So overall, the API we are proposing for stage two looks like this effectively. So you can construct an Amount, for example, A, we're constructing a new Amount with a number value and giving it a unit of kilogram. And we do have a capability here of converting that Amount to a unit to a compatible unit in this case, for example, pounds this, of course, constructs a new Amount instance. Amount instances themselves are immutable. And they provide the value and unit accessors. So as currently proposed when conversion happens if a precision is specified, then we end up using string representation for that. But if conversion is asked for and no fraction digits or significant digits are asked, the result of the conversion, the value is always a number value. And then, of course, we do have the localized output that we're providing with via two locale string. So note there, by the way, the detail of what it means in combination that we are asking for a conversion with fraction digits one.

EAO: But then also expressing the value as an exponential string. So the numerical, mathematical value that we're trying to represent there as the value of B is “94.5”, but for clarity, we are always using the exponential notation, which means we end up with this asking for fraction digits one, but then if you look at the value, you get “9.45e+1” as the thing you get out of that. But still, the localized value and if you cast the B dot value into a number, you'll get “94.5”. Overall, the public API of this is as presented here. Not really much has changed here.

EAO: There's one or two details here specifically about the unit undefined value there that I'll discuss in a moment. The conversion options support a locale because we are supporting or proposing to support localized conversions. So that you can convert for example, a unit starting in kilograms to be whatever unit is appropriate for a different locale and a usage. Specifically there, the option we have is locale, which we allow a string or a string array but it turns out that the CLDR data we have bases the localized conversions only around the region that we end up decoding from the locale and for all conversions that are supported, there is a 001 region that is supported. 001 is the UN M49 code for the Earth. And this means that for all of the locales we currently support, for the regions thereof, they end up having a fallback of 001. And this means that for Amount convert to locale we will never even look at any not first well-defined locale because the first one is always going to provide a match for the data.

EAO: But then going into some detail about some of the changes we've made, specifically, for instance, the conversion math was previously presented to be determined by extracting number values from the CLDR units XML specification. And then applying those in operations in JavaScript. And this ends up doing a multiplication and a possible addition and a possible subtraction and followed by possibly a division all in number space. And this obviously can introduce some challenges. So the current spec text requires some Amount of real mathematical value operations to be so the in the new line, the second part of that, better to look at the `sourceFactor` over the `targetFactor`. That's a real number mathematical value divided by a mathematical value, which is what we then use for the multiplication. This is to allow for conversions for example, between feet and inches to much, much more securely end up with integer values where we should end up with integer values. But if you do the really sort of dumb way of not optimizing anything, this means that an implementation would need to store currently something like I think 2,100 individual number values if you don't want to do runtime math on mathematical values. Which is a little bit more than what we had suggested previously.

EAO: And I'll cover a little bit later, there's further work here that could well be done and we hope can be done within stage two for this proposal. Another change we've made or a set of changes, really, is indeed the change to use exponential notation. For the numeric string values, so that we can always be certain or much more certain about the implied precision of the values we are representing. Whether they have trailing zeros or not and whether 42.000 is exactly 42000 or 4.2 thousand. And the serialization output of two string we've changed it so this so that the square brackets kind of go around the whole of it. And you have the value and then a space and then a unit indicator. And here do note that this change means that we need to have a sum representation of a no unit indicator. The `~` is what we currently have in the spec as the sort of least worst choice here. But entirely willing to iterate further on the serialization changes here. This is somewhat related also to the changes that we are going to need to add to Amount for the sequence unit support that was just previously presented. Again, here hopefully we'll be able to iterate on this within stage two.

EAO: And we do have other matters the following is I think not quite an exhaustive list but an attempt to presenting some of the major issues we are aware of that we hope to continue discussing during stage two. One is indeed what do we do how do we represent the absence of a unit? And here we need to keep in mind how we interact in particular with the Intl unit protocol proposal. And how that proposal in number format will be looking for a an acceptable input value for Intl number format to format so that we don't introduce webbing compatibilities. And it turns out that it's much more convenient for that purpose for the empty value of unit to be null rather than undefined. So that we can check for the object being formatted in Intl number format always having something in the unit field. Rather than checking whether a field is set because if we went with undefined, we would end up with a situation where `unit: undefined` would behave differently than unit not being defined in an object. And then the serialization changes we discussed introduce a possibility like using the character tilde to represent no unit. And if we are outputting `~` for no unit, we should probably support `~` also as a value that you can get as give us input to an Amount constructor and end up with a unit of null as the normalization result there. Which is connected to the discussion that we need to introduce some rules for exactly what is an acceptable unit identifier. And so the existing space of identifiers that we are aware of needing to support are for example, `“foot-and-inch”`. And even I think one E6 with number the digit string values there are included as units that are expressed in the units CLDR. So existing patterns like identify a name that we have in JavaScript is not necessarily enough. And then there's the consideration that we do want to keep in mind the serialization form. That we do want to support for Amount and it becomes much, much easier if whatever we're going to use a special characters in the serialization like spaces or close brackets or commas end up not being allowed in the unit identifier. So we don't end up with needing to introduce any escaping there. So and then there's the consideration do we want to be very strict or very loose in what we allow here?

EAO: Then of course, as alluded to here, we'll need to make Amount aligned with the sequence unit considerations and add support for those. As a as effectively a numeric representation of a numeric value. That we support. So here the example is that we do need to introduce support for something like an object with `“foot-and-inch”` fields. As an amount value effectively. Which then would behave as presented here whether the two string value would concatenate the comma and a space probably or something else if we come up with a better thing. And overall make the math work. The this will require us to also consider edge cases like what exactly do we do if you try and construct an Amount with `{ foot: 5, inch: 13 }`? Do we consider that an error or do we kind of overflow it to six feet and one inch? Or what do we do? Or do we allow for this to be customized as I recall Temporal allowing a similar overflow to be determined. And there's probably one or two other issues we'll come up with for this. But overall the intent is that whatever you're thinking that you want to do with sequence unit operations in number format, we probably don't actually want to do it in `Number.format()`. But we probably do want to do them in `Amount`. So that the results of all of these conversions and normalizations and whatnot are available in 262 rather than 402. So we reduce the space of what needs to be covered effectively by something like the stable formatting proposal and avoid creating a situation where web developers abuse APIs that we are providing for localization for non-localization purposes. And yeah, the math we have currently is not perfect.

EAO: Waldemar has pointed out I think three or four different places where in particular rounding happens a little bit not exactly. So what the simplest way of seeing this is indeed when we convert to five from five grams to tons right now with the math we have you end up with not exactly `0.000005` but `0.0000049999999999999996`. And there are a couple of other cases in particular around unit conversion. Where we may end up getting just on the wrong side of a rounding boundary and end up with a slightly surprising result. So our intent is to improve this. And our hope and wish is that we are allowed to do this within stage two. And not be required to solve everything for this API already. At this time effectively.

EAO: We do want to keep in mind that we don't want to make Amount sort of implicitly or accidentally introduce a requirement on implementations to do runtime mathematical value multiplication and division operations. So that we reduce the complexity that we are imposing on implementations or limited. There's a danger here of depending on how we define Amount of introducing for example a rational type that needs to be implicitly supported by an implementation. And we don't want to do that. The intent is that we manage to find a way that is the best possible way for doing conversions between units using number types and end up defining that. And so as I believe we have a queue I'm not going to ask for stage two yet but I'd really like to be able to ask for stage two later today.

EAO: JSH? Who says Tildy generally means approximately so I think that is not good for missing. And that undefined would be better in their experience. We are open to iterating on this one. My first proposal for this one had the empty set Symbol. So that's a zero with a slash across it. But it was identified as there's like three or seven of them in Unicode. And that's a little bit confusing. Happy to iterate on this. Also noting that at least in one context in YAML Tildy is a an alias for the null value. So there is pre-existing use of `~` in this sort of usage. LCA?

LCA: Sorry, I didn't manage to finish writing my thing here. I think we could also just use the string “null”.

EAO: One challenge with using a nice ASCII word for this is that amount does not actually limit you in what are acceptable unit identifiers that it supports. You are allowed to construct an Amount with some string that is then used. But then we don't support conversion on all Amount units. And using “null” or the string “undefined” would mean that we introduce special behavior for some specific strings and that would probably be best not done.

LCA: I see. That is unfortunate.

EAO: WH?

WH: Okay, I have a couple items on the queue. I think this is a significant improvement since the last meeting. I’m much happier with this.

WH: I'm glad that the sequence proposal is advancing. The main issue I raised at the last meeting was that, given that you plan to provide the functionality for this to select a proper unit such as a person-height in a given locale, if you ask for somebody's height you'd want it to produce “6ft 5in” instead of “77in” for the US locale. As long as this proposal is not released to the web before the sequence proposal gets there, that should solve that problem. At the last meeting the issue was that, if we release this without the sequence proposal as an option for things like heights or person weights then we'll have a period of time during which this would give incorrect answers from an internationalization point of view. We would then have to fix that in a later revision of a spec controlled by some flag and I don't want to get into that situation. So as long as the proposals are coordinated with each other I hope that that problem won't happen.

EAO: I share your sentiments.

WH: Okay, the second one is a bit of a bigger can of worms. It has to do with this doing implicit coercions between Strings and Numbers. I have really mixed feelings about that. If this were using entirely just Numbers then the arithmetic would work as Number arithmetic works. We have a handle on that. But because this is doing implicit coercions from decimal Strings to Numbers and back, that creates a bit more confusion. A part of it can be solved by doing more precise arithmetic but a part of it cannot.

WH: The last two examples I gave in [issue number 108](https://github.com/tc39/proposal-amount/issues/108#issuecomment-4493857079) I think that should illustrate the problem. The first example is 825 grams converted to kilograms with fractionDigits = 2 and rounding halfEven. Note that this lets you provide a bunch of different rounding modes and all the values here are Strings—no Numbers anywhere. So as a user I'd expect this to work on Strings. The correct answer is 0.82 but this gives 0.83 which is not rounding half to even. That can be fixed via doing a bit more precise arithmetic and I have some suggestions how to do that.

WH: The last case is more insidious. The outcome of the last case is you multiply 3*3 in a String and get 8 instead of 9. This cannot be fixed by doing Number arithmetic no matter how precise you do it. This is inherent in the conversion of Strings to Numbers and back. In general we've been trying to avoid implicit coercions in the language for a while now. If you're working with Numbers you should pass in Numbers and you should make the conversion step from a String to a Number explicit. This hides them as implicit steps and that is causing problems such as, in this case, 3*3 resulting in 8 instead of 9.

EAO: This is something that I would say that we ought to be iterating on in stage 2. One specific change that we could do, that would not solve all the problems but would I think avoid many of them. Would be removing the ability to define the rounding mode. And to do that for example this one is using the truncation rounding mode. I'm sure that there are cases where we would still remain with the rounding ending up as being incorrect. But by just that change but this is the specifics of this and how we handle these conversions I think we want to improve things here. We wish to do so effectively during stage 2. RGA has also identified that there are indeed a number of cases in the spec text as we currently have , where we are doing more conversions between types than we need to. And we should absolutely avoid those as much as possible.

WH: Yes. If we restricted this to just doing unit conversions on Numbers then in the future we could add exact conversions on Strings and that would work fine. Because we're doing implicit coercions here from Strings to Numbers and back, that ties our hands for the future and we will not be able to produce correct results later on Strings.

EAO: Do you consider this question to be something that needs to be resolved before we get to stage 2 or within stage 2?

WH: Let's get resolved within stage 2. I'm happy with this proposal for stage 2. I'm just raising these issues because I think these are not mere details. These are important in how we structure the API and I'd like to hear from others on this.

WH: Also the last point about avoiding rational arithmetic or arbitrary precision arithmetic: that's really a non-issue. All the units in that CLDR file are just ratios of two integers. To convert you divide two such fractions. This is just taking the ratio of two rational numbers which you can do just by cross-multiplying. It doesn't need arbitrary precision rational arithmetic to do that.

EAO: If it turns out that we end up hearing from implementers that there is no issue in defining for example all of the conversion math to be in terms of mathematical values, that is likely something that we would want to do in order to avoid all of the issues that we can.

WH: I can write that code in a few minutes. So I would be very surprised if there were an issue with that.

EAO: BSH?

BSH: Yes. I really appreciate that you're trying to design this with the intent that people can add their own units or whatever as may be needed later. But considering that it seems a little I'm wondering why you would want convert two to be built into basically part of the Amount class because when clearly there are many different subtleties to doing a conversion as you've just been discussing this mathematical subtleties and then there's also well which units are supported. As a developer who was trying to use an Amount I would then have to know well what kind of conversions can I just do with convert two and what things am I going to have to somehow write my own code around. Did you consider like having just saying well that's just not going to be part of the amount class because we can't cover all cases. And the idea is that you would have a standard idea of a converter object that takes an amount and a and an indicator of like what units do you want to convert it to. And then as a developer I would then say oh I just need to know how to get the right kind of converter. But I don't have to worry about like what does convert two handle and what does it not.

EAO: The feedback we got from committee earlier on this proposal has been that in order to be sufficiently well motivated it has much greater value if the conversion is provided as is. As a part of the stage two proposal that we have here.

BSH: I'm not saying it wouldn't be part of the proposal. I'm suggesting that the API that you would provide in the proposal would be that you'd have a standard converter object that handles a known set of things. And then the way you would extend it later would be people would say oh well I need a converter that does something different. And you would follow the same pattern as the one that's part of this proposal. I wasn't talking about separating it the converting from the proposal. I was saying that don't do it as built into the Amount object since it can't possibly cover all of the things. You end up with a weird situation where in some cases you can use convert two method but in other cases you can't use the convert two method. I feel like that's more confusing. That was my and I don't know if that's a stage advanced to stage two issue or if it's okay to wait and say yeah you advanced to stage two but you might still split that off. Maybe that's fine. I don't know.

EAO: I would believe that this considerations are specifically how we do the conversion is something we could consider in stage 2. As we are currently proposing it it is indeed with this `convertTo()` method. The sense I have is that what you are proposing could as well be represented in user space by someone extending the Amount class and overriding its `convertTo` method providing support for additional units there for instance.

BSH: All right. Well that sounds like it's something that can be decided later. So I just I think I've made the point that I was trying to make. Thanks.

EAO: Thank you. Wait. Queue is confusing. I think JMN you're wanting to speak on something. Is that the case?

JMN: Yeah. I think I added my comment a bit too late. I just wanted to mention to follow up with, while the last comment that the spec text that we have currently for the `convertTo()` and how the math works out is the result of some discussions we had in the champions group. Over the last several weeks. We think it's an improvement over what we had previously. I think we can agree on that. And we're open to polishing that. There are a couple of ideas we have. One of them is even something that I think you're hinting at with you mentioned that you could whip up some some spec texts. I think that might not be necessary. We do have something that would probably address these concerns. But I think the main point just to emphasize what EAO's saying and what I think you're also saying is this is something that we can probably tackle and stage 2. And also you don't have to necessarily like reinvent the wheel. We do have some some stuff. It's not there at the moment but it's a kind of like dead comment but it exists as an idea that we can resurrect.

USA: Okay. That was the entire queue.

EAO: Unless there are further questions, I would like to ask for stage two.

USA: WH is on the queue as plus two. WH, would you like to speak to that?

WH: I looked at this very carefully. I fully support stage 2.

USA: Who else would like to either explicitly support or express any concerns regarding this proposal? RGN would you like to speak to your support?

RGN: I support stage 2.

USA: Great. So that is two. Statements of explicit support since we have time we can wait a bit. See if there's any other comments. But.

EAO: I see a physical thumbs up from JSH..

USA: Great. That's that's great for the record. Thank you, JSH. Yeah. I think you have stage two. So congratulations and let us without any further ado set up or ask for let's say volunteers to review this. Moving forwards for stage 2.7 or yeah we do that at this point.

USA: Right? Cool. So who would like to review, oh great you have a slide. Thank you. Who would like to review this proposal? Moving forwards. Who's excited about Amount? WH is on the queue volunteering himself. Thank you, WH. JHD is also on the queue saying he'll review. So I think both WH and JHD are great reviewers. They can both be sort of on the record and then in the meantime you can reach out to either the champions or the TC10 and chairs to also be a part of the reviewers. Later on. Otherwise you can just review the proposal and be on the issue board. Is there any more you'd like to say to conclude Amy? Or JMN?

EAO: No. I think we're good.

USA: Great. Would you still like to summarize a little bit for the notes or if you'd rather do that?

EAO: I'll write that up into the notes.

USA: Okay. Good. Thank you. Thanks everyone. For this small discussion as well. It's faster than we had originally planned for this. So let's move on to the next agenda item then. Export all from for stage one. By NRO. NRO are you in there and prepared?

NRO: We're just second to get the slides.

While we're waiting maybe we can get a round of applause for the stage two and amount because this was a long long time coming. Thank you.

### Speaker's Summary of Key Points

* Amount is proposed as a container for a numeric value (Number, BigInt, or numeric String) combined with an optional unit, that can be converted to another unit.
* The spec text is relatively complete, but some open issues remain for consideration in Stage 2.

### Conclusion

* The proposal was approved for Stage 2, with WH and JHD as reviewers.
* Specifically the accuracy of conversion math may need to be improved during Stage 2.

## export all from for Stage 1

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/guybedford/proposal-export-star-default)
* [slides](https://docs.google.com/presentation/d/1IKj6GdnvI25gbqq_GUH-LQZOyfp0W1NFWc0hD4LU4CU)

NRO: Nice. So hello. This is sorry. This is a new proposal going for stage one. Well kind of new. We'll we'll see later about that. And I'm tentatively calling it `export * from foo`. Compared to my other modus proposal this is meant to be a very tiny one. Some context. Today we have this syntax with with modules `export * from` and then you put a specifier. Which means re-export all of the exports that in this case foo.js has except for the one named default. It doesn't matter which syntax you use to export the default one from inside `foo`. It will just be excluded.

NRO: `export * from` is used for a bunch of things. The two main use cases are aggregation of multiple modules. You might for example have a folder that has a bunch of modules. All of those modules have some exports and then you provide an index of JS files to just re-export everything from all of those modules. You could manually write all the names of the things that are re-exported from those modules. But frequently people just use `export * from`. And the second use case is Proxy modules which is to create a module that behaves as if it was a different module. Sometimes it adds some extra exports to it. Something I've seen very commonly is maybe in a library you re-export everything that the internal endpoint provides and maybe you also add a version export. So this is an example from a real code base of what I mean by aggregation of modules. This is well this is going to be a real code base. We just re-export all everything related to our AST factories from a single file. And the Proxy module use case is actually one that's used on the web itself. Not just at build time.

NRO: There are some CDNs that serve somewhat pre-bundled ESM files. And they work with the NPM registry where packages have versions. There may be multiple ways to refer to the same version of the same package through some web ranges or through tags. Like named labels. So for example they might want Lodash at latest to actually refer to Lodash in this case 4.3.5. Due to how HTTP directs work with ESM on the web you cannot actually use HTTP directs to do this. So to make the first URL result to the second. Because the browser will then consider them as two separate modules and it can cause problems with modules being evaluated twice by accident. So then you get different identity for the objects and it doesn't really work well with cycles. So what they do is that these Lodash at latest module would just re-export everything from the actual correct version of the package. And this was an example of the model implementation I mentioned earlier.

NRO: There is a problem mostly for the Proxy module use case. Including module augmentation and the CDN usage. Which is it is impossible to write some generic Proxy module to just re-export everything. You need to perform some level of static analysis on the module that you are re-exporting things from to know if it has or not a `default export`. Because the example here on the left where we just do `export * from` and nothing else. Will not work if index.js has a `default export`. If we like not throw any error it will just well the export will be missing. So we try adding export default other than `export *`. Like we can see on the right. And then this only works if there is actually a `default export`. If there is no `default export` in index.js this will throw a syntax error. So we need to like parse *index.js* to know which of the two forms of Proxy files we need to use. So what I'm asking for stage 1 is to explore a way of making it possible to write a generic module that re-exports everything from another module. I do have a proposed solution here on the slides. I actually will go through the proposed solution before going through the queue. Actually let's first go through the queue to see what people think about stage one.

NRO: MF says he supports stage 1. That he would prefer to modify existing `export * from`. LCA has exactly the same message as MF. And then ZTZ has a new topic. Do you want to go through it now or after I continue going through the slides?

ZTZ: I’ll wait.

NRO: Okay.

NRO: So yeah possible solutions. Well this is what MF just hinted at. My preferred solution would be to change the behavior of `export * from` to always just re-export everything. So basically make it like always work for this Proxy module use case. This is like by far my preferred solution. There are other possible solutions. Some that I know was discussed in the past. At least I thought with GB and he told me that in previous planners in how we conversations people brought this up. Which is to have some new syntax like maybe export start start from. That would do the same as export start from but also re-export the default. I don't know if personally I would find new syntax to be I don't personally know if this problem space justifies adding new syntax.

NRO: Some more details, and frequent questions, is what happen if I already have a module that does `export * from` and has an explicit if I have like an aggregation file where multiple modules do `export * from` and they all have a `default export`. So we now have some sort of conflict because we are re-exporting default from multiple places. Well export start from already has an answer to that. Which is if multiple modules re-export export something with the same name. It's basically just ignored. It's not then re-exported by `export * from`. So `default` would just behave the same way. If you have an aggregator module which a bunch of re-exports multiple of those have a `default export` a `default` would just not be re-exported by `export *`. And like for named exports developer can just explicitly export `default` from one of those modules to choose which one they want.

NRO: About web compatibility of changing this. This is something that's been shipping now for 10 years. So it is reasonable to have some concerns there. When it comes to importing a default from one of these Proxy modules that maybe were not yet exporting a default because they were just using `export * from` and now they suddenly start exporting a `default`. This should be fine because we're just turning a syntax error which is the syntax error of importing something that doesn't exist into a non-error. The a little bit more tricky case even is when we do a namespace import of this Proxy module. Because before our namespace would not have a `default` property. While if we change the behavior of `export * from` it would suddenly re-export default from the module that it's proxying and so we would get this `default` property of the namespace.

NRO: Generally on Indian PM ecosystem it has been fine to add exports to libraries. So this probably would be fine. But it's the one I considered a potential risk. Some history here. As I mentioned this is not fully a new proposal. It was actually presented in November 2016. That was like very soon after the TSM first shipped in browsers and way earlier than TSM shipped in Node.js. Where Guy actually Guy and **Kyrie?** presented this exact proposal. If you looked at the proposal linked in the agenda I'm actually just linking to that 10 years old repository. At the time the proposal was blocked. Because the expectation was that developers would expect `default` to just not be re-exported by something that also re-exports other named exports. There were a couple other objections I was reading through the notes. I couldn't fully understand the motivation. It was mostly well the `default` should be explicit. Like people maybe do not want to `export` the to re-export the `default`. So we shouldn't force them to re-export `default` through something meant to re-export everything else.

NRO: It's been 10 years now and we actually have concrete experience with developers using ESM for real. And with using actual ESM semantics and not just the equivalent of *CommonJS*. Developers learned already that default now appears on namespace imports. Together with all the other named exports of a module. So it's now more clear that unlike common JS default lives in the same namespace as all the other names. And they already had to learn that if they want to re-export the `default` from some module they need to use exactly the same syntax that they would use for re-exporting a specific named export. So again it's kind of just a special name in the same namespace.

NRO: And this is because there was actually a proposal for doing `export default from foo`. It was actually `export identifier from foo` and `default` was also allowed. Which would get the default exports of foo and re-export it with the name put between export and from. It's been at stage 1 since 2015. So as a committee I believe it is fine to reconsider past blocks. It is fine if as you gain more experience we change our mind. So as part of this proposal I would then like to explore specifically going ahead with changing the behavior of export start from. Now let me look at the queue. ZTZ you were in the queue?

ZTZ: Okay. This is this is not what I see but okay. So yeah I'm also supporting changing this and I would like to volunteer to explore what the consequences would be for interoperability with *CommonJS* in situations where that happens. Across different existing runtimes and situations. And as a side note as far as I remember it is already implemented the way you're proposing in *endo*.

NRO: Okay. Thank you. Yeah it will be useful for somebody to look at the common JS case. JSH? You have oh well you have a question about default collision. The proposal is that it fills silently. It depends. The proposal is that it behaves the same way as there is a collision for named re-exports. This behavior is that if you have like two modules that export foo and then you do `export * from` both that's fine. It's just silently fails. But then if you try to `import foo` from these module that has the two `export * from`’s it doesn't know which foo to go get. So it will fail. There is because it's ambiguous through which of the two paths you need to go. There is one exception which is if we have some sort of like diamond shaped module graph where these two foos from the two paths actually are the same variable. Then it works because yes it is ambiguous which path you get but both paths have the same result. And this would still be the same. Even for default.

JSH: So you are merely tying it to whatever the other behavior is and the other behavior is that.

NRO: Yes exactly.

JSH: Cool.

NRO: And one extra thing when there is this ambiguity you can always resolve the ambiguity by having an explicit `export` of that name or in this case with your `default` from the module that you want to win. Okay. ZB already went. We have then CLA?

CLA: Yeah just a small comment. Like when I started doing stuff on models and like having star meaning oh but default and all in different places is very confusing. So a very supportive of this exploration of trying to make export stuff from actually also include `default` as well.

NRO: Okay. Looking at the queu it is repeating +one. Okay. I have one other thing for which I got myself on the queue which is it sounds like we agree that it would be nice to make it easier to do this Proxy files. The “export defer” proposal right now works in the opposite direction. Which is that if you want to make a Proxy file you need to know which of the exports are deferred and which not. Because you need to like `export * from` would force loading all like `export * from foo` would force load all the deferred re-exports of foo. And to make a Proxy file you would need to look into foo check which exports are deferred and which ones are not. And then split them into re-export statements in the Proxy file. So given what I'm hearing now I plan to then go change the “export defer” proposal to make `export * from like` respect and like propagate up whether one of the re-exports is deferred or not. So that just having export start from foo actually works in all cases to make this type of Proxy file.

DLM: Okay. Well that's the end of the queue and we've already heard lots of support for stage 1. I see some people have shown up again. So we have JSH do you want to speak again or are you good? You good? Okay. Last one for stage one.

NRO: Okay. Wait I want to put again myself.

DLM: Sure.

NRO: It's a bit weird. Sometimes I put myself on the queue here because I want to do something that was not like part of the presentation. That is there was also some discussion about instead of doing this doing the export default from proposal. That I mentioned here. But making it so that if foo does not have a `default export` then doing `export default from foo` actually does nothing. Instead of being an error. I don't know if the person who's suggesting that wants to maybe say something. I would like to not do that. I know that some delegates in the committee care about as eager as possible validation of exports of of modules. So I would like to not do that for that reason. Also so that when I see a re-export in a module unless it's like `export * from` then I immediately know whether the module is exporting something or not while that other possible behavior for export default from would would like lose this property.

JHD: I'm on the queue for this one if that's.

DLM: Hi LCA. Seen with a reply first though.

LCA: Yeah I agree with that sentiment. I think I would be pretty strongly against making export default from foo just silently. Not error if default didn't exist in foo.

DLM: MAH?

MAH: I believe I would the one bringing that up just an alternative in case it was needed. But I strongly prefer changing the semantics of `export *` just I was trying to suggest options in case that was not acceptable. Here.

NRO: Okay. Thank you. JHD?

JHD: Yeah. Ex the export default from without a validation error I think would be a very bad thing. So I do not think that that proposal resolves the motivation you're coming here with. But I think we should do both. I think we should have that export default from that errors and we should make the export star just be a I don't care what it's what it's exporting just give me it all. Because that seems like what people want and if you want the validation you name things and if you don't you just do star.

NRO: Yeah I do not disagree. I don't want to like merge the proposals but yeah.

JHD: Yeah I don't I don't think they need to be merged either. I just you know if if the committee has an appetite for export default from I I'd be happy to step up and champion it.

NRO: We have then a new topic from JHX.

JHX: Sorry. I want to say I'm I'm I'm a little worried about the the change. Because I happen to read the notes in in 2016 and I don't remember the full the contexts. But I remember that the talk about the default export is very special. I don't know whether after 10 years the context has changed. So, so I suggest we support to revisit this problem. But I hope we are careful about that. Because this was already rejected before.

NRO: Yeah. I believe at the time we were much more influenced by CommonJS than we are now. Right now today developers like even if maybe they end up shipping in some cases CommonJS they like just always they in many cases just author ESM. While at the time we had this like clear split between `module.exports` and `exports.` something. And there were two incompatible things. And so we had like this default is equivalent to `module.exports` and foo is equivalent to `exports.foo`. And I believe the mental model of developers now changed since that. And yes I agree we should not do things lightly like lightly. But again it's fine if we change our opinion as a committee over time.

DLM: JHD?

JHD: Yeah. So default is still special and and I think it always will be. I think the way I've often explained it is the default export is what a module is. And a named export is something a module has. And most modules should be something. The what NRO was referencing as well is that the interop between CJS and ESM has caused a lot of problems over the years. TypeScript's module system was broken until they added synthetic imports and ES module interop. There's a ton of people who accidentally converted from export like having their CJS package export a single value to having it export an object with a `default` property. And that's like an unexpected breaking change. So there's there's been a lot of transitional turbulence here. And also TypeScript has a special syntax for export equals. To provide typings for a CJS module. But yeah so I think that it is special and that doesn't mean that it's exempt from the likely desired intention of `export * from` whatever. Which is, I just want to re-export everything. I mean I think that it's there is I guess an open question if you `export * from` two different modules like currently if they have conflicting names I think it just the last one wins. Or does it error?

NRO: Neither wins. So then if you try to import one it error if you try to import like a name that's exported from 2 places it errors.

JHD: Okay. Cool. So then the same thing would happen if you `import *` or `export *` to *defaults*. Is that you just wouldn't be able to import the default from that module. That seems perfectly reasonable, consistent and safe as well. So I don't see any issue there. And and as far as the CJS ESM thing there's still quite a significant people that that publish CJS and and even author CJS. And I but I I that I think that that sorry yeah CJS that author and publish CJS excuse me like I do a lot of things that are just me. But that's not one of them. And I still think that the that this change helps that interoperability story and as opposed to hindering it. So I would like to see it go forward.

DLM: JRL?

JRL: Yeah. Completely agree. The CJS ESM was terrible. But people have learned to avoid the default export for other reasons. Like it doesn't refactor correctly. Or there's another one I can't remember. I had this at a second ago. There's another refactoring hazard where it just doesn't work correctly. So people just use named exports for everything. The somebody that I like is just the fact that export all does not is also special for default. Creates a more like jagged edges that people have to avoid. And more reason for people to avoid default entirely. So if we fix this one case maybe people will continue to use default a little bit more.

DLM: LCA?

LCA: Yeah. And I don't want to imply that you were saying this JHX. But I think we should not hold ourselves to decisions that we've made based on like unclear argumentation that like none of us are able to ascertain from 10 years ago. I think like it is perfectly reasonable for us to reconsider decisions that we've made in the past. Like well obviously only towards the disagreeing to do things. Particularly if we like do not have any reasonable argumentation why we did that at the time. Or we can ascertain why it was done as such at the time. Yeah.

DLM: JHX?

JHX: Yeah. So it seems I lose the message. Okay. What I want to say is I and if we don't if we still use the current `export *` syntax, and just change the semantic. This this might be a breaking change. It it will change the semantic of the current modules. For example if some module `exports *` and the if the dependency it have the default export. And in current semantic it will not export defaults. And and the suddenly you get you actually the your module will have the default exports. And there are many cases. For example if two modules they have a default exports currently it's it's because it will have conflict. Your module will not have the default exports. There might be many cases. I can't remember. Actually I several years ago I wrote an article about that. I can't remember. I tried to figure out the different cases. But yeah I only remember the consequences. The consequence is that if we change that it will introduce some breaking change. That's it.

NRO: Yeah. I agree. This is not a zero risk operation. I would quantify the risk similar as adding an extra property to existing objects. Which tends to be low. But we might indeed discover that we cannot do it.

DLM: LCA?

LCA: I don't know whether maybe I misunderstood what you said. But I thought that you just said that due to the addition of this it's possible for a default export to be removed from an existing module. I do not think that is the case. I don't think like there's any case where this adds or this removes the default export that was previously there. If you have a module that both does an explicit default export and a `export *` we export the explicit default export will win. Without erroring. Like it does right now. So I don't think anything breaks there.

NRO: We have 40 seconds left. ZTZ the answer to your question is no. And I'd answer it earlier to either JSH or JHD. But it's because if it only introduces errors not when you do two exports. But then when you try to import default from the module it has the two exports. And that would already be an error. Because that module already does not have a default export. So.

JHD: So yeah. Just specifically the only user visible consequences then like of implicitly making this change. Would be that something that's currently an error wouldn't be. Which is always fine. And that on the module namespace object or if you do `import * as` or if you do dynamic import there would be an extra property. That seems personally like a really low web compat risk to me.

NRO: Yeah. So we're at time. It seemed like we had consensus for stage 1. Just confirm.

DLM: Yeah. Let's just do I've heard lots of support for stage 1. Maybe we should just ask if there's any objections. Quickly. Okay. I think you're good. Congratulations on stage 1.

### Speaker's Summary of Key Points

The speaker did not provide a summary.

### Conclusion

The speaker did not provide a conclusion.

## Module Scope Ceiling

Presenter: Zbigniew Tenerowicz (ZTZ)

* [proposal](https://github.com/endojs/proposal-module-global)
* [slides](https://github.com/endojs/proposal-module-global/tree/main/slides)

USA: Let's move on then to module global status update. ZTZ are you there? Yeah. I see you.

ZTZ: Yes. I'll make sure this is visible. Okay. So I'm back with a proposal. But it's a completely different proposal now. So previously we got to stage one with just the problem statement. A way to evaluate a module and its dependencies in the context of a new global scope within the same realm. Now I would like to go through an update for how I hope to make that feasible. And the motivating cases did not change. But how much they're motivating might have changed. So I'm just pointing out that the severity of supply-chain security has increased *a little* since I last brought this up. And I also got support from 1Password. Which is in the context of the *LavaMoat* project. But specifically the interesting part from that statement is that Our current implementation is using the `with` *statements*. Which introduces some compatibility and performance issues. And this particular proposal would help alleviate some of the compatibility and performance issues..

ZTZ: Going back to the problem statement. The problem statement seems achievable with a change that's a very surgical change in the spec. And that would be severing the tie between module environment record and the global environment record. Which exists only in the outer env of the module environment record. And according to the spec which I will try to go through, it is the only way in which a module source when executed would ever reach a variable in the global scope. And this addresses the main feedback that was the problem of the earlier new Global proposal. We would no longer be creating new Globals whatsoever. This is only a matter of making sure a lexical lookup of a name inside of an ESM style module does not reach the Global scope by default. And so I want to introduce a term *Scope Ceiling*. Credit goes to CM for inventing the term *ceiling*. We were using the word *Terminator* before. But that's not a reference I would like to keep using. So inside `InitializeEnvironment` (which I could bring up for more visibility) we have a step where originally we would look up the Realm on the module and then proceed to take the `globalEnv` of that Realm. And put it up in the module’s `[[Environment]]` field. So if we look in more detail, module is the `Source Text Module Record` type. And `NewObjectEnvironment` would be called on the `ScopeCeiling` to create an entity that's very similar to the existing `Realm.[[GlobalEnv]]`. And that would be assigned to the `env` that goes into `module.[[Environment]]`. And in this case the Global becomes unreachable.

ZTZ: For visual thinkers like myself I have a visualization of that. Environment record, which is a curious construct that puts together an object environment record and a declarative environment record. Out of which we would only need `ObjectEnvironmentRecord` to emulate it well enough for our purposes. So the module environment record might as well point to a `ScopeCeiling` with the `[[OuterEnv]]` set to `null`. And that seems to suffice, according to what's written in the spec, to disconnect a module from lexical lookup of a global. And I will now proceed to discuss how the `ScopeCeiling` ends up where it ends up and also what the lookup is. So first of all, at this stage, I don't have a final decision on where `ScopeCeiling` would be coming from. It could go directly onto the module record. It could be a more indirect lookup through maybe even Compartment if we decide to merge this into the compartment proposal. I will address that later. We initially considered associating `ScopeCeiling` with `ModuleSource`. I want to explicitly say this is not the case—I understand this would not be a good idea because `ModuleSource` is meant to be transferable and have all of these properties that make it not a good candidate to stick module reference from a specific Realm onto it. And while assigning the `ScopeCeiling` to the module environment record (which happens around the linking time), the lookup that we care about happens in the context of execution. I went through more detail than I should probably in these slides, so I will skip over this, but I'm leaving it in slides for anyone to reference as a guide to what I managed to surface from the spec. My point here is that the `ModuleEnvironment`, which points at the `ScopeCeiling`, becomes the LexicalEnvironment when we do execution and so the whole process of lookup, which I will now skip through, ends with `GetIdentifierReference` reading `outer` which is the module environment’s `[[outerEnv]]`—which reaches the `ScopeCeiling` and since `ScopeCeiling.[[outerEnv]]` is `null`, it cannot progress further for the lexical lookup it was performing. And that change would result in an option to run a module in a context that does not have the means to reach Globals lexically.

ZTZ: And as before, I want to explicitly say this is not on its own a security mechanism. We would like to use it for integrity in the future along with other parts of the Compartment. I am not here today to discuss these aspects of the proposal, although it is motivated by reaching those integrity guarantees in the future. I see the motivation for this particular proposal potentially being separate in DSLs, which I will discuss in a moment. And in case anyone feels like bringing this up, yes, `Object` and `Object.prototype` and `Function()` and `Function() constructor` are still available and coming from the same Realm in the module. That is simply running without the means to do lexical lookup of the globals.

ZTZ: And now two open questions. First open question that I managed to discuss yesterday a little bit with specific people is whether `NewModuleEnvironment` is a spec fiction or not. A preliminary check in Firefox code base seems to say that it is implemented that way. Same consultation around V8 revealed I did not identify the right part of the implementation for that, but we are looking into this and there is a chance that the lookup itself is implemented in a way that the chain of outerEnv is not the only means of looking things up. So this is something to look into further. And I would like to request help figuring out whether the outerEnv is sufficient to control the lexical lookup from representatives of the browsers before I will go to stage 2. And I will try to get in touch with you individually.

ZTZ: The other open question about `ScopeCeiling` is something that I did not figure out yet for this update on the proposal. Which is whether it should be introduced by the `Compartment` or not. `ScopeCeiling` needs a way to be associated with the module and we currently don't have an obvious way to do that. One way would be that the “Overall Compartment” proposal or a subset of that would be where the association happens. I'm also exploring ways to keep this proposal small and separate for the sake of putting it in the language earlier and having better implementations of the `Compartment` shim in near future. Also, this would be useful for DSLs and at this point, I might spend two more minutes explaining that.

ZTZ: So I think everyone is familiar with how multiple test runners enjoy exposing global functions like `describe()` , `it()` or any *behavioral style* of test definitions as just global namespace functions. And these and then they go through a lot of effort often to make them not appear in the lexical scope of the code. That makes up the application that is being tested. This would be a useful tool to prevent that leakage without a lot of effort if we expose it. And so I'm thinking about maybe putting the `ScopeCeiling` in the options bag for the second argument to dynamic import. This is an idea that I'm also looking for feedback on. And the alternative to that would be creating an entity that puts module source and `ScopeCeiling` together and could be fed into an import, but I personally don't like that idea and would prefer to, in that case, stick to merging the proposal back with compartment. With that, I'm ready to switch to the queue.

USA: First on the queue, we have JRL.

JRL: Okay. So I think we discussed this a little bit yesterday. I'm concerned about the way this is going to integrate with HTML spec because they do really weird things with our global environment records. And that's how they store important things like the settings object. And the settings object is the thing that carries all of the security guarantees that they have. Which is like the importer's URL and when you import with another specifier, this is how they do the resolution mechanism and everything else. It's also the thing that needs to get propagated so that `Function()` scopes work correctly. There's a whole bunch of weird things they do. If we change the way the environment record is constructed, I don't know if there if we change the way our environment record is constructed, I don't know how that interacts with their environment settings record. And that's just my concern. If it works with HTML, then great.

ZTZ: Yes. Thank you for that input. And I will do my best to research it. What currently keeps me hopeful is that there are two paths leading to global environment in this graph. One is from module environment record, which is specifically used as `OuterEnv` for lexical lookup. And it doesn't seem to play any other role in the spec pretty much. And then there's another path from module record itself through Realm, which seems to be where this would be reachable as well.

JRL: You're considering this from the TC39 side, but this is defined in the HTML spec, not in ours.

ZTZ: Yes. I'm just hoping that this is how it's going to end up mapping to reality, and as I said, the main open question for me is figuring out which parts are spec fiction and which are actually matching the implementation. Because while I'm very happy with how surgical this change would be to the spec, I'm not so sure yet that this would be a surgical change to implementations. And it's my quest for the next few months.

JRL: Yeah. I understand. So the links that we have in this graph here are these are all the TC39 side. The.

ZTZ: Yes. This graph represents what I learned from reading the spec. And this is the only way I could produce a mental model for myself.

JRL: Yeah. My concern is that there are links that are also on the HTML side that are going to be different than these links. And there might be a short circuit that causes us to now have two environment records.

ZTZ: Yes. I will have a much more complex graph next time.

JRL: Yes. Thank you.

USA: There's a reply by NRO.

NRO: Yes. So the HTML spec goes through the realm rather than going through the lexical scope. So the HTML spec looks like what's the realm that's being currently executed and guessed all the global stuff from there.

ZTZ: Which seems to map well to what I hoped it would be. But I'm not going to celebrate yet.

USA: Next question. JRL, You're back on the queue?

JRL: Yeah. Can you talk more about use cases?

ZTZ: Yeah. I don't have visual material for the use cases, but maybe I can pull up the proposal itself. Give me a second.

ZTZ: So the motivating use cases that we went through before start with domain-specific languages. So tools like *Mocha*, *Jest*, et cetera, and this is a use case that requires only the change I'm proposing now. The other use cases that are motivating this require other additions. So I'll focus more on this one. And this means that a DSL for any purpose, but in this case, testing is a good example, would be introduced in a specific module. So the test runner would import the module that contains tests and give it an environment that's not a limited global, which you potentially associate me and some of my colleagues with. But an extended global that has additional functionalities available on it. And then everything that is imported from that test file does not have access to these by virtue of not seeing the `ScopeCeiling`. And so this goes both ways.

ZTZ: And the benefit of that is avoiding what a few test runners currently do, which is putting some of the test some of the application that is being tested in Node `vm` *module*, for example, which constitutes a separate *Realm*, which introduces identity discontinuity. And in turn, forces them to hack a lot of globals inside of that Realm to be replaced synchronously by the Globals from the outer Realm so that assertions actually work. And this is very annoying. So this proposal would help provide a native solution for a situation like that. And then other motivating use cases include the principle of least authority for which we would need to add further parts of the compartment proposal that would make it possible for imports in a module to be resolved in a way where the `ScopeCeiling` association would be preserved for the subsequently imported modules. And that makes it feasible for isolating or encapsulating unreliable code as well. And by unreliable code, I mean outputs from LLMs specifically, as a use case, yes. And some minor ones that I am not really able to comment on right now because I don't remember the details. All right. I hope that answered the question.

USA: We have a reply by JRL.

JRL: Yeah. I'm going to keep going and monopolizing. I'm sorry. So your first case here was test access. Having the test file have access to a describe or an it method or a before reach or things like that, which are common in a bunch of test files. Why can't we just have the test suites themselves import and have locally scoped variables like normally could participating things?

ZTZ: Yeah. I would like that too. This is not what ended up being designed.

JHD: I can answer that question. Although the test framework I maintain doesn't do any nonsense with globals, I can understand the desire, which is that you don't want in general, and at the risk of stating opinions as fact, one doesn't want to write to alter your implementation code solely for testing purposes. You want to write your code the way it should be written, whatever that means. And then you test its API surface. And so if your code is referencing `Array` or `Map` or something, you don't want to have to alter that code change the way you're writing your code so that you can better test it. And forcing everyone to import built-ins would do that.

JRL: That's not what I'm asking. What I'm asking here is the test file themselves, not the source code under test. The test file we want to inject a describe function into those test files. Those test files honestly should just be importing describe from Mocha.

JHD: Yeah. That's just a BDD legacy in cargo-culted into everything from Mocha.

JRL: But that's the use case we're solving here. So we want to inject just for test files. I think the legacy here is the thing that should change instead of inventing a new scope that allows us to support those.

ZTZ: I can definitely agree with the sentiment. The reality is people are using it that way. And there's a lot of harm from creating separate realms in testing and manipulating their Globals. And it's also a very heavy mechanism. So regardless of whether we wanted to work one way or the other, whether we want the `ScopeCeiling` to be used on the tests or on the test subject, it is a good replacement for parts of the implementations of test runners that rely heavily on Node VM module and if the scoping of the names of functions from the DSL is not convincing.

ZTZ: Then an even stronger example of something that should never have happened is modifying globals available to the test subject code to the application running within tests where timeouts and other features are being replaced by custom implementations by the test runner to be able to drive the tests in the way it wants to. And I think there are some examples of this going way too far just because of the complexities involved in it being a separate realm.

JRL: I agree. I certainly don't like the VM module or the things that the VM module has to do in order to pretend it's a real environment.

JRL: But you're going to come back to me (being next on the queue with another topic). It's this time talking about security. That was your second example here. I don't understand the security use case this is going to solve for the *1Password* case in particular. I don't understand the security thing that this is going to solve.

ZTZ: OK. So if we're being strict about it, this is integrity, not security that we want to provide. But it increases the safety of using dependencies. So the overall idea is that because this is a building block of a `Compartment`, the general use case for having `Compartments` in the language is that it provides means to run certain code with enough isolation where it will not be able to affect how other code runs elsewhere in the program. Which is preventing a bunch of situations that we tend to call supply chain attacks. So the specific case that motivates me to come here and represent this specific proposal is I'm working on *LavaMoat*, which is providing tooling to let you decide through a static policy which of your dependencies are going to have access to which globals. And if a dependency is not supposed to have access to `process.env` and `fetch`, and then combine them in ways you wouldn't want, it's going to seem like they're undefined in the scope of that dependency while other dependencies that are supposed to be using it will see them. And that's partially thanks to the mechanism of scope termination, which we currently achieve by passing a Proxy to a with statement and would like to avoid it in the future.

JRL: OK. I don't want to take up all the time because there are more things on the queue. But I think that's going to be broken by the fact that you want this to work for test files.

ZTZ: Yeah. I think we're going very far into a very specific example. But this is something I'm happy to do later on.

USA: Please note that I just realized that there's three minutes to go. But yeah, let's get to the queue. Quickly, if we can, OFR, you're next.

OFR: Yeah. Just one thing. This not an endorsement, but I think it's getting closer to a primitive that is not like too cross-cutting and easier to think about what it implies. The question I have a bit is since you mentioned also different use cases and for some of the use cases, I think it will be useful to impose this from the outside when you load a module. And I think this is what you had in mind roughly. But for other use cases, it will also it might also be useful for a module to choose what its context is. So yeah, I don't know. That was kind of missing from the presentation how you how this will be set up. But how do you actually put it in the graph there? And I think yeah, I think there are different trade-offs there. And we're thinking about. And maybe worth already thinking about now.

ZTZ: So currently, the idea is it would only be available from the outside and my initial thought was that if someone wants to implement a module and use the `ScopeCeiling` to give it scope literally, is to have a module that imports that module that we want to be in a specific scope I don't see a good reason to have this available on the inside where it's up to you to define a functional scope and put any variables you want in there. But I'm happy to continue with this conversation until we find specific examples that I can decide if I want this to support or not.

USA: There's MAH next. We're already on time. MAH who said “here's about use cases for self-context”. Next, we have OFR and JRL who have both been on the queue earlier. ZTZ, what do you feel about this discussion so far? Do you think we can go over these quickly or?

ZTZ: I can answer JRL—the globalThis between two modules with different ceilings. So globalThis would be a field on the scope ceiling and they would be separate. And they would be separate because specifically of how it's realized. So the scope ceiling to the user of JavaScript would be a plain object that we then take all of the fields from and graft onto a ObjecEnvironment, which is exactly what the global environment record is also leveraging for having lexical variable declarations end up mapped to the globalThis. So we would be able to reuse the same mechanism and at least spec seems to indicate that this is what new object environment was designed to do.

JRL: So the globalThis between two different modules is now different. The window object is also going to be changed by this. The window Proxy.

ZTZ: The `window` reference would not be available at all unless you create your own reference in there. And it will necessitate something that I already do in my code base which is wrapping every function from the `WindowProxy` in a way that, for example, `fetch()` would be called with the actual window reference, not the fake window reference. Because otherwise, it throws an error in the browser. And this is a trade-off that people wanting to use it for isolation and encapsulation would have to work around. And have already done so. This is not only in LavaMoatimplementation.

ZTZ: And I guess we don't have time for the next question. Is this `with` scope in disguise? It's very close to `with` scope, but not exactly. So the `with` scope is not using the `OuterEnv` situation that we have in the spec. And now I need to check whether this is an advantage in real implementations or happens to be the exact same thing as the with statement. I'm hoping this is significantly simpler than a with statement with a Proxy. And much less of a burden for performance.

OFR: I mean, if I can add to that, like the reason why I put the question there, so since we're talking about implementation burden for doing this, I think like how to exactly wire up is like the least of the problems. Like the question really is what is that scope ceiling thing? Is it like a static thing that essentially behaves like a lexical scope that is essentially immutable once you put it there? Or is it an object that you can mutate after you put it there? And that's going to decide much of like that's basically the main question. Is this going to behave like a like a lexical scope? Or is this going to behave like an object?

ZTZ: The object environment at least the way it's being used by the Global environment is what provides the ability to define a new variable in the lexical scope. That ends up being visible on the global this reference. And this is something I would like to preserve in there. Although I don't have any more specifics than what I just said. So if this is ambiguous, I just don't know more than that. At this time.

MAH: So I think it's effectively a little simpler than with because you don't have the you don't have to fall through mechanism. It's also only at the top. So you have nothing above it. But yes, it most likely would have similar semantics to with where you can mutate the scope add new elements the same way you can add something to global this and it shows up in the global scope.

ZTZ: One last comment about this. I believe global environment record could be a good inspiration for us if we want to make it more performant that declarative environment record part which is the immutable part would be things that are given from above. And then object environment record usage would be only for mapping the local lexical variables to it. But we would have to look at the implementations and see if that makes sense first. I'm speculating wildly here.

OFR: And the other thing would be can you like it might be worth looking into basically not having this object. Like basically is it enough for your use case if the `TopCeiling` is a namespace period?

ZTZ: For the sake of emulations of different environments, as in running tests with a DOM API, but in Node.js for the sake of testing front-end code without spinning up a browser, and many other use cases related to what we're doing with integrity and isolation, I believe it would be necessary to have `globalThis` behave as expected where you can define something in the lexical scope and make it show up instantly on the `globalThis` as well. So I would like to find a way to make that happen. And I think we're past time. So I yield.

USA: There is some time to finish this off if you think we can discuss this further. But yeah.

ZTZ: Looks like we ran out of queue anyway.

USA: OK. Yeah. That's great. Cool. Would you like to conclude with some words or just quickly summarize?

ZTZ: Yes. I will edit the summary later. But to start it off, I would like to say that we would like to give an update that the way to achieve the problem statement solution for proposal module global is to detach a `ModuleEnvironmentRecord` from `GlobalEnvironmentRecord` by replacing `OuterEnv` with what we would like to call `ScopeCeiling`.

USA: Great. Thank you so much. Let us move on. Well, let's see actually if we have time before the break. We don't. So I guess we can move the breakout. So that or do we prefer a longer break?

JRL: Five minute topic in a 10 minute topic. We might be able to slot in.

USA: Yes. Let's try the 10 minute topic actually. It should join is that what you meant? Is that not frozen?

JRL: Yeah. Exactly. No, I don't believe it's frozen. And Michael agreed earlier. Yeah. Michael says yes.

USA: Great. Let's try that then. Thank you.

### Speaker's Summary of Key Points

* Status update: We intend to address the problem statement of the proposal by severing the connection from `ModuleEnvironmentRecord` to `GlobalEnvironmentRecord` by replacing `OuterEnv` with what we would like to call `ScopeCeiling`.
* Open question: is the `OuterEnv` use in the spec a spec fiction?
* Open question: How would we expose `ScopeCeiling` to be used?
* Conversation included revisiting motivating use-cases and a mention that the updated version may be more palatable to implementers

### Conclusion

* None, just an update

## Iterator Join

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-join)
* [slides](https://docs.google.com/presentation/d/1KW2u1CeciwdoZjOnL5jb1pJxJUcgNjPeXsj5oVoaMxo)

MF: OK. Yeah. I'm presenting this for KG. KG was not able to be here with us. But you'll see that it looks a lot like some of the presentations you saw earlier today. `Iterator.prototype.join` is going for stage 3, meaning we need to convince ourselves that there is sufficient testing.

MF: KG opened this pull request in December. I have reviewed it. Like a month and a half ago. And approved it. And I think it's good. So I think it is sufficiently tested. We don't have feedback yet from test262 maintainers. PFC marked it as needing a review a couple of weeks ago. Maybe he was planning on getting to it. But it hasn't been merged yet. I still feel that this is sufficient testing experience. Which is what we're trying to do with stage three. To identify any last minute changes that need to be made to the proposals. Which we didn't with this. So I would like stage three for Iterator.prototype.join.

USA: Great. That was quick. We have DLM on the queue. With support, would you like to speak to that then?

DLM: Oh, I'll just say that we support stage 3 and we have an initial implementation that was tested against the test and the pull requests. We don't have any concerns.

USA: Awesome.

MF: I had forgotten to mention that KG also wrote a polyfill implementation that was tested and ran against these tests. And passed all those tests.

USA: Cool. Next in the queue we have LCA who says plus one in a message. Then there's JHD next.

JHD: Oh, yeah. So plus one and also like I also built a polyfill with my like spec abstract operation library. Passes all the tests. Et cetera. So I'm very confident.

USA: Awesome next. We have OFR also with support. Only support so far. I guess we've only spent a minute on this. So I don't know. Great. You have consensus.

MF: All right. On KG’s behalf, thank you.

USA: Yay. And yeah. Great that we can work together like this. I guess we are in the same problem now. But it's a good problem to have. Right? So what's the five minute item now?

### Speaker's Summary of Key Points

* iterator includes has tests
* they've been reviewed by a delegate
* this is sufficient for stage 3

### Conclusion

* consensus for stage 3

## RegExp Buffer Boundaries Continuation

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQBpJAD8CJutTpZ3x70Mr8C6AQ6Z26p2_nowaDED0_XQfRY?e=FLSMPe)

USA: Between the new TCQ, the in-person meeting and us being proactive and really liking how we're managing this.

RBN: One thing I realized while writing up the spec changes for `\Z` was that I had made a mistake in one of the slides and I wanted to make a note of that to make sure there's consensus with the correct semantics. When I presented this on day one, I said that `\Z` is equivalent to a CRLF or a line feed. However, this is not what was proposed in stage 1 and was only a simplification. What was actually proposed for stage one at the time was to use the same matching behavior that the `\\R` escape proposal uses, which matches LineTerminatorSequence. This differs slightly from matching `$` in multiline mode which does not match CRLF, though it does match CR. There's precedent for this within all regex engines. There is an issue about this. [Issue number 20](https://github.com/tc39/proposal-regexp-buffer-boundaries/issues/20).

NRO: Just question. Given that this is like some sort of like an anchor. Like almost a sorry. Clarifying question. Is this consuming the things that it's matching? Or is it just like a look ahead?

RBN: This is also a zero width assertion. It's looking for the position before all of these things happen, so the difference between these two modes is that when looking for `$` in multiline mode, it only needs to see CR. It doesn't care if LF is there. This is actually saying it needs to check that immediately following the line terminator sequence that there is the end of a buffer.

RBN: This does align with Java and .NET which match CRLF by default. Perl, PCRE, and PCRE2 also support CRLF, but it requires configuration. Ruby doesn't support CRLF, but instead relies on operating system based line terminator normalization. Python only supports line feed. The slide showed CRLF and LF matching, the clarification here is that it's also matching <CR>, <LS> and <PS> because those are also things that we consider to be a line terminator when matching `$` in multiline mode.

USA: JRL you're next.

JRL: If `$` would have caught this, why do we need to explicitly say `\\r\\n` in this case?

RBN: `$` would not catch this. `$` in multiline mode is only looking for the end of a line. This is looking for the end of the buffer but allowing a preceding line terminator sequence. That's what the `\Z` check does. The `\z` (slash-lowercase-z) escape just matches the end of the buffer. `\Z` (slash-uppercase-z) matches the end of the buffer with an optional preceding line terminator sequence.

JRL: Got it. Okay.

USA: Real quick. Could you go through the rest of the queue? So NRO, you're first.

NRO: Yes. Sorry. Just to be super explicit because I'm a bit confused. So the correction here I'm making is about something you presented but not about something. It's actually in the proposal.

RBN: When I presented the slide yesterday, it did not include all of the cases for `\Z`. These are all the cases for `\Z` that were presented for Stage 1. I wanted to make sure to clarify the actual semantics.

NRO: Okay. Thank you.

USA: Next we have CPC.

CPC: Yeah. Sorry. Quick thing. But I think the the group inside the equivalence should be non-capturing.

RBN: Yeah. It would be non-capturing. This was somewhat rushed to fit this in because I just noticed this a few minutes ago and wanted to cover.

CPC: Beautiful. Thank you.

USA: So that was the queue. And also we're at time. RBN is there. Anything to add?

RBN: Yeah. I see two ways to move forward. One is to ask for consensus for this specific change to be sure that everyone is aware of all the cases that were covered. The other is to withdraw `\Z` and repropose it as its own separate proposal so that the `\A` and `\z` escapes can continue to advance. So I'll start by seeking consensus on the corrected definition of `\Z`.

USA: On the queue we have JRL who says keep it “+1”. And then MF who says “fine with it either route, but slightly prefer separation”. That's it. On the queue. Without any more I think that's that; just support so far. So please add yourself to the queue if you have any opinions. Great. Oh. There's a reply. CPC could you just speak to that? Yeah. Plus one, actually. So yeah. Congratulations, RBN. You have consensus.

RBN: I'll also mention I do have the updated spec text for this specific semantics and updated tests that I'm ready to push up if I can find folks willing to do review. So I'll be so we can potentially bring this back tomorrow for stage three advancement since we have all the pieces if reviewers are able to review. Thank you.

USA: Great. All right. With that, we're on time for our little break. I believe we'll reconvene after 14 minutes. All right. Enjoy your break, everyone. See you in 15 minutes approximately.

So 20 minutes. So meeting back at 20.

### Speaker's Summary of Key Points

* Correction: `\\Z` matches `(?=(?:\\r\\n|\\n|\\r|\\u2028|\\u2029)?(?-m:$))` (LineTerminatorSequence before end of buffer).

### Conclusion

* Consensus on `\\Z` matches `(?=(?:\\r\\n|\\n|\\r|\\u2028|\\u2029)?(?-m:$))`

## AsyncContext (Stage 2) web integration status update

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-async-context/)
* [slides](https://docs.google.com/presentation/d/1Q3wGg0YbYXio6lO3fzbo2gKJFiTb1t4Z1W4313CHZ3I)

NRO: Hello, everybody. It's been a while since I last gave an update about AsyncContext. We have no changes to present about the TC39 side of things, but this proposal evolved into something that's 75% web platform integration, and there has been some progress there in the past six months, one year. So I'm just here now to share where the web integration is at right now.

NRO: (Slide 2) Recap, given that it's been a while and given that we have many new delegates that might have not heard about AsyncContext before: it's a proposal that adds some APIs to implicitly propagate values through async code flows.

NRO: So in this example here, we have our `AsyncContext.Variable`. We have these two async functions, `doSomething` and `doSomethingElse`. They both have an await in them. We call these two functions in parallel. For `doSomething`, we call it after setting the variable to `”foo”`. And for `doSomethingElse`, we call it after setting the `myVar` to `”bar”`. And then, even though these two sets are happening synchronously and both functions pause on the await; when they resume, they will both read the correct value of the `AsyncContext.Variable` that was there when the async function was first called.

NRO: (Slide 3) Use cases. One of them is front-end frameworks. A lot of front-end frameworks need to be able to associate which UI component some code that is running belongs to. And this gets difficult when there is async code in the way. This example here is from the Svelte docs. Svelte actually has a compiler that will transform code a little bit. So where you see that it's just reading the variable `color` or reading the variable `size`, pretend it actually is like calling a function. And what Svelte needs to do is, it needs to track which UI component is active when you call this function, so that through some internal ways it has, it knows that the return value of that function will change. It knows which UI components it needs to re-render. And this is trivial for the synchronous case when reading the color because it can just set a global variable before running the code of the UI component, marking this as the current one, and then read it from inside the `color` call. But then that stops working inside the `setTimeout` because at that point we lose the synchronous context of where we are. And so AsyncContext is trying to solve this.

NRO: (Slide 4) Another use case is tracing, where to better understand how your code is working, what is taking time for what, and how the various parts of your application interact together, you need to be able to trace through async JavaScript code. And so with AsyncContext, you can carry around what is the current span without having to manually pass it around everywhere. Since that's a pretty intrusive change that you would need to do to your app, automatic propagation for tracing is not super common on the web. Because well, it's impossible to automatically do it, you need to do everything manually. It is quite common on the server side when using JavaScript because server-side runtimes already have mechanisms to do that.

NRO: (Slide 5) As I mentioned when I started, a lot of the complexity here is with web APIs. What's absolutely necessary to support is `await`, because `await` is syntax so it's not easy to polyfill at runtime. Even if the proposal only propagates through `await`, it would technically be possible to polyfill this implicit propagation somehow by wrapping every single async APIs that we have in the language or on the web. But for this to actually be usable for real outside of demos, we need browsers to do the propagations themselves.

NRO: (Slide 6) So for all of the async APIs we have on the web—and I didn't realize how many async APIs we have before actually started looking at this; I knew there were a lot, but it's like a different order of magnitude of a lot. So for all of them, we need to define how they interact with AsyncContext. We also need to define some guidelines for future spec authors to know how their future async APIs will need to interact with AsyncContext. We cannot assume that everybody's an expert about how AsyncContext should work. And also, we should figure out how we should define some intuition that developers can get to be able to reasonably guess how AsyncContext interacts with the various async APIs without having to read the docs one by one.

NRO: (Slide 7) Since the beginning, we've had to face some tension between what developers ask for and what is too complex. Complexity here can be both for people learning the language, but it's especially complex to implement these things in the browser and in the specs. Where we've been asked, "Oh, please propagate as much as possible," but then to avoid complexity, actually, it's “please just propagate where it's absolutely necessary”. And so we've been moving left and right on this line, trying to find the right balance. And we believe now we are in a good spot.

NRO: (Slides 8, 9) For many async APIs, it was simple to say what happens. It was very intuitive. Events have been the API interface that's been more complex, the one we've been talking about for maybe two years at this point. Because it's a single API that's used for many different things. Many unrelated APIs all emit events to communicate with their callers. Events can be used both synchronously and asynchronously. And AsyncContext is something specific for async APIs. Events are used both for request-response type of APIs for a lot of the async APIs designed before Promises were a thing—you would have some sort of event signaling that the thing was done and maybe that there was a result—but also for more notifications where it's not clear that some action causes something else—it's just something that happens and I'm telling you that the thing happened. There are hundreds of events and they all can be triggered in multiple ways. And so we get the possible products of these two things is huge.

NRO: (Slide 10) We've been talking a lot about these things. We ended up changing our approach. We discussed this with WHATWG, where the proposal is now stage one. And we have now the direction that we're following in defining how all these things work. We changed our focus from “how should EventTarget work” to “how do the various event dispatching APIs work”. In the past we had a discussion of whether for events, the right context is the one when you registered an event listener or when you do some API call that eventually causes the event to be fired. We used to call them “registration context” and “dispatch context”. We used to consider both. We are now not considering the registration context anymore. We're going only with dispatch context to have only one thing to focus on. But we're only propagating this dispatch context—so the context coming from an API call that eventually causes an event to fire—for a limited set of APIs, with some clear criteria to be able to tell which APIs will propagate and which ones will not. And to make this proposal implementable, rather than just propagating the AsyncContext across internal async browser steps (which might be somewhat problematic because, I don't know, you might be crossing a process boundary), we make sure that there are JavaScript objects that you can store the context on, so that then when you need to fire an event, you can just read the context from that object that you have.

NRO: (Slide 11): So we have a set of five, I believe, principles that we agreed on. The first one is that EventTarget by itself is a synchronous API, and that EventTarget itself does not interact with AsyncContext. So if an API synchronously uses an EventTarget, it's fully transparent. The AsyncContext that's active in the event listener will happen to be the same one that was active when the event was dispatched, just because there is no asynchronicity going on. And it's instead the responsibility of whoever calls `dispatchEvent` or either the JavaScript API or the internal web spec mechanisms to dispatch an event, to first set up the proper context. (Just a little note: this is true as a concept. Editorially, there is some AsyncContext logic baked in the EventTarget itself. But the observable behavior would match what's described in this slide.)

NRO (slide 12): A second principle we have is that event listeners triggered by external causes, meaning causes outside of the JavaScript process, run in the empty context. So if I click on a button and there is an event listener for that, the event has been triggered *not* by JavaScript code. So there is an empty context, that is a context in which all variables are set to their default value. Or also, when working across different agents: so if I post a message to a worker, that worker will fire a `message` event; that `message` event is not being caused by anything inside of that worker. So it will run in the empty context.

NRO (Slide 13): A third principle we have for now. We saw some cases where we do not propagate, we do not do anything special for AsyncContext. Now let's start looking at what actually propagates. So the third principle we have is that event listeners that are asynchronously triggered on a given target object, like X, due to an action performed on that same object, do propagate the context. So in this little example here, we have an `XMLHttpRequest` object. We perform an action on that object, we call `.send()` on it. It will fire an event on that same object, like `load` or `error`. And so this does propagate the context. Or another example, we have a DOM element. We request that element to be shown in fullscreen. It will fire a `fullscreenchange` event on the same element. So again, this does propagate the context. There is a possible exception here for global singletons, like `window` or `document`—that is, if I call a function that's on the global object and it fires an event on the global object, maybe actually that does not propagate. Because even if it's like a specific object, it's actually just a specific object used for a whole bunch of things.

NRO (Slide 14): The fourth principle we have, again for when to propagate, is that if you have an action that creates some object, and this action asynchronously causes an event to be fired on that object, it will propagate. An example is with the IndexedDB API. We have an `open` method that creates a—I guess it's called an open request object. It will fire on this object a `success` or `error` event. So here we have an object, with an event fired due to the action that created the object, so this will propagate the event. Actions could be a constructor, a method call like in this case, it could be a setter. So yeah. And an example of an action here could be—we need to figure out exactly the word in there—that if I use `innerHTML` to create a new image object and that image object will eventually fire a `load` or `error` event on the image object itself, that will propagate the context from when `innerHTML` was called because that's what creates the image DOM object.

NRO (slide 15): And anything that's not in those other categories, we'll run in the empty context. So for example, if we add a class to an element, that the class goes through some CSS rules, it causes some animation to happen. And then the animation is maybe on not either on the same element, but it's a different object because it's not on the `classList` object, or it's on some other random element that's affected directly through CSS. And then it causes an `animationend` event. That will not propagate. Or maybe we have two `MessagePort`s in the same thread. We send a message from one to the other. That will not propagate because we are performing an action on one object and getting the event on a different object. This last one is actually a little bit annoying because currently at least React—I don't know about other frameworks—use this MessagePort pattern to polyfill the Node.js `setImmediate` function, where you actually would want propagation. But we're working with those libraries to make sure they can properly work with AsyncContext. Or maybe we will figure out an exception to this principle for that to work.

NRO (Slide 16): Oh yeah, as I mentioned before, the DOM is obviously a place where there are a lot of events going on. And it is very useful to propagate the context for events related to loading external resources. So we have normally the `load` and `error` events. Sometimes there are more. And it's like, well, if you set `.src` on a `<script>` element, that's like, well, we're calling a setter on an object that causes an action and then fires the `load` event on that same object. Or the `.innerHTML` example I was giving before. We still need to figure out exactly how to deal with things like “Oh, I have a DOM tree. I insert this DOM tree somewhere. And the DOM tree somewhere, by the fact of it being inserted, it causes something to load in that DOM tree and then it fires an event in an element in that tree.” It doesn't clearly follow from our principles. This is something important to cover. So we'll need to adapt a little bit the principles to make sure that this is in scope.

NRO (slide 17): And yeah, this has been discussed with WHATWG at the end of last year. And we went to stage one based on this approach.

ABO: That would be stage 1 in the WHATWG process.

NRO: And part of what was agreed with WHATWG is that to go to stage two, we need to actually show concretely how these principles apply. So the work that ABO has been doing has been on taking these principles and applying them to web specs.

ABO (slide 18): Yeah. And we've been working on a set of pull requests to the web specs. For the web integration, these are the ones that are currently open. There's at least one, maybe multiple, remaining to be open, with a lot of the changes needed for events in the HTML spec. So here we have, well, here we have two PRs which are cyclical. We will probably refactor them or something. It's not too clear what is the best way to have them reviewed and merged. But it's like, we have WebIDL pull requests to let spec editors add an extended attribute (which is part of the WebIDL syntax) to propagate the AsyncContext when you have a method or something like IndexedDB `.open`. And then the main changes on HTML, another pull request for some specific changes to events, which is mostly just adding a WebIDL extended attribute to handle some things. And there are interactions with error events. And then there are the next PRs, that are for events.

ABO (slide 19): And yeah, we are planning to complete the spec work for basically the WHATWG specs. For WHATWG specs first, we will be documenting the AsyncContext behavior across the various event-based APIs in those specs, and there's some integration spec text to write for some of the tricky web APIs, such as things like IndexedDB. And then we will try to move to stage 2 in the WHATWG process. And after that, we will work on the rest of APIs across W3C specs. We're using WHATWG because there are a lot of important specs there. And it's a good thing to test all of that first in the events in those specs. And set up the groundwork.

ABO: Yeah. Let's see if we have questions. RGN?

CDA: I think we're just noting we have less than one minute left in the time box.

RGN: All right. You started off on an early slide with an example that was probably the best I've ever seen in terms of communicating what AsyncContext is about and how it works. And then you got to the middle slides about when context propagates and when it doesn't, what the edge cases are. And I feel like that’s lacking clarity, which is going to make things really difficult. I don't know that you can actually communicate to developers how to understand the nuts and bolts of how this works. And I think it's really important to be able to do that. Where it stands now, it's falling so short of the initial promise of that first example. And I'd really like to see it refined in such a way that you can have an analogous single slide that says “here's how you know what the context is at any point in execution”. In the same way that, for example, lexical scoping is really easy to explain.

NRO: Yeah. I agree. With the problem of making this easy to document and explain and learn, I think the place where we will end up being is that we'll have a few categories like Promise-based APIs and callback-type APIs and event-based APIs. And there will be one rule that you need to apply for each of these categories.

ABO: Well, the event ones, so far what we have are those five different cases where we have different behavior. Maybe some of those could be combined, but it's very hard for me to figure out a way to make this simpler on the developer while not being too complicated on the implementation side. And it's once again that slide with the balance between developer needs and simplicity.

RGN: Yeah. Just to weigh in on that, the feedback that I would give is that awkward behavior that can be clearly explained is probably better than less awkward behavior which is confusing and has troublesome edge cases.

NRO: Yeah. Again, I agree. And this is also why for many cases, we're just saying, well, yeah, when the same would be useful to propagate there, but just the rule is like all of these things do not propagate. And that's at least easy to explain. I'm taking your feedback as “it's still too complex”. We need to work on that.

RGN: I think so. Yeah.

NRO: Okay. Thank you.

CDA: All right. I've expanded the time box in case because we did have some available time in this session. So if folks have more feedback or questions, please don't hesitate.

NRO: And also, if anybody has a lot of experience with some specific web APIs, we would love to talk to you because ABO and I just don't have expertise on every single async API that there is. For example, ABO and I are working on events related to DOM media elements like `<video>` and `<audio>`. And that's a whole bunch of complexity. So if you want to talk with them about this, please then go ahead.

ABO: Yeah. And media elements are very complex in the sense that you have events which can have multiple causes. And when your video stops buffering and now starts playing, is it because of when you loaded the media element, is it when you click play? What if you click play and then call the `.play` method? Maybe multiple times? Yeah.

NRO: Okay. Well, thank you, everybody. Again, if you have any feedback, you know where to find us.

CDA: Great. Thank you.

### Speaker's Summary of Key Points

* To make the AsyncContext proposal usable, web APIs need to propagate the context. We need to define a web integration proposal that will work for future APIs and that developers can build an intuition around.
* Events are a single API shape used for hundreds of things in the web platform, and they should behave consistently. We drop the previous concept of a registration context, and define five relatively simple rules for when to propagate the dispatch context versus the empty context.
* We have a set of PRs to the WHATWG specs open to add the web integration, and we are working towards advancing to stage 2 in the WHATWG process.

### Conclusion

* We got feedback that the rules for when the context gets propagated in events should be kept simple. It should be comparable to e.g. lexical scoping.
* We should prefer awkward behavior that can be clearly explained over less awkward behavior with troublesome edge cases.
* We’re looking for feedback from people with experience with specific web APIs, since some are complex and we’re not experts on every single one.

## Source Phase Imports, Request for Consensus for Normative Change: Ambiguous re-export handling for Source Phase Imports

Presenter: Guy Bedford (GB)

* [proposal](https://github.com/tc39/proposal-source-phase-imports)
* [issue](https://github.com/tc39/proposal-source-phase-imports/issues/75)
* [pull request](https://github.com/tc39/proposal-source-phase-imports/pull/76)
* [pull request](https://github.com/tc39/ecma262/pull/3775)
* [slides](https://docs.google.com/presentation/d/1h7tHdRqdkR0s_x6TOiSlOIH-wA17cN7Hz0BLjeuLhqc)

GB (Slide 1): Okay. So I might well go under the time box on these items. We'll see how it goes. But this is a relatively brief one. This is the normative adjustment to source-based imports. It's a relatively minor edge case. And it lines up to what we've been doing throughout the other re-export ambiguity cases in the spec work on modules. And these are the validations that we have for re-exports in the module system when you have multiple exports R statements. So last year, Nicolo was going through a lot of these cases. Ensuring consistency between the sort of indirect re-export form where you import a binding and then directly export it and the explicit re-export form. And these forms were getting different deduplication logic in export star ambiguity errors. And this is, for the most part, an edge case that affects a very small minority of developers who would hit these kinds of cases.

GB(slide 2): But at the end of the day, there were ambiguities here which Nicolo helped resolve in that process. This is from the initial issue that he posted. Where we had a namespace difference in the ambiguity handling for namespaces. So on the left-hand side, if you have left and right, both exporting the same namespace object, you've got a join exporting star from both modules. You can import the namespace through the entry point at the top. And you're not going to get an error because it knows they're the same export. And on the other hand, in the indirect form where right.js is importing the namespace and then immediately exporting it again, it wasn't deduplicating. And as a result, you'd get an error. Whereas you wouldn't get an error on the left-hand side.

GB (slide 3): And as he was going through this logic, he also found a similar case for source phase imports. So for source phase imports, you can import a module binding. We don't have re-exports for source phase imports. But you can import that binding. And export that binding. And you get an effective re-export. And so he did find a bug in the source phase import spec when investigating this that was actually separate to the namespaces bug. Where it would this unification logic wasn't being handled by the source phase import spec. And so it would rewrite it as if it was a normal re-export. But that would have resulted in an invalid export entry record that would actually drop the source phase imports knowledge because it wasn't aware of source phase imports. And that was clearly a spec bug.

GB (Slide 4): So both of these bugs were fixed. In EMCA-262, Kevin added a PR to fix the issue with namespaces. And we added a PR to fix the issues with source phase imports. And then later on, we also added a refactoring to EMCA-262 to generalize the way these pods were handled. And to avoid this issue from reoccurring in future. Basically, to generalize the sense of these sort of system Symbols on modules exports that can be resolved and how they get handled. So that they are all generally handled in re-exports.

GB (Slide 5): Both of these were non-normative bug fixes. And fairly straightforward bugs. In EMCA-262 and source phase imports, the refactoring itself was a non-normative ECMA262 change. But the source phase imports bug fix combined with the EMCA-262 refactoring is, in fact, a normative change for source phase imports. And that's why I wanted to bring it up here today.

GB (Slide 6): And so the gist of it is if you have, again, this joint case where you've got two source phase imports being re-exported, and then the question is, are we going to throw a support this import here where even though it comes from two different sources, is known to be the same object? And again, this is a wild edge case. It doesn't matter for 99.9% of developers. I think the question is more about what our implement is happy with.

GB (Slide 7): And so the normative change is, well, if we don't want the normative change, we can add an exception for source phase imports. Alternatively, if we just leave everything as is, we get the normative change. And so effectively, all of these special bindings on modules like source phase imports deferred namespaces, namespaces, any other kind of objects that get associated with resolution files, through the resolve export function, are treated equally. And so that unification seems beneficial. But if we don't want to do that, we don't have to either. And so the question for the committee is, are we okay with making this normative change for source phase imports? And are implements okay with that change? Or are there any consequences?

CDA: JHD.

JHD: So can you go back to that slide where you were showing the various files? I came in a little late, so I may have missed this. But what happens here if you delete the source keyword? For example.

GB: (switches to slide "The Edge Case") So it depends what source mode resolves to in that case.

JHD: Or assuming mod.js has something there. I mean, I'm not sure why it would matter. But both of those would then import and oh, I guess, sorry. If left and right are replaced with `export source mod as bar from mod.js`. How about that? Without any import source. But that is an entry point.

GB: Yeah. It depends what it resolves to. Because the only objects that get the ambiguous handling in the resolve export function are the objects that are known to the module system. And so the canonical case is the namespace object itself. So if source mod was a module namespace object, that would be the case. But that is the only object that has the special handling in.

JHD: Okay. So if left and right then were import star as source mod in both.

GB: Yeah, exactly. Or mod.js indirectly imported in namespace.

JHD: So then what would happen in entry point right now? In that case.

GB: Under the namespace model, it would be supported.

NRO: Sorry. Did I think you're confused? Can I interject?

GB: Go ahead.

NRO: Thank you for the answer. If you delete source from these two things, you do not get an error. Because this source mode things I assume mod.js has a variable that's exported as default. So these two from both, if we delete source from left and right, both paths end up resolving to the same variable inside mode. And so there is no error.

JHD: Regardless of what the value is.

NRO: Regardless of what the value is. What the oh, sorry. The duplication is based on bindings. So if we have two separate variables with the same value, we get an error. If we have two paths that arrive actually in the same place to the same variable, like in this case, derived to the same source.

JHD: The same binding.

NRO: The same binding. It is not an error.

JHD: Okay. That sounds to me like pretty strong precedent that this should just work. Because it's going to the same binding. Eventually. Thank you.

CDA: Thanks. Chengzhong.

CZW: Oh. I was trying to say that the source mode here with the import source is not actually a binding. Because it cannot be changed. But yeah, I'm just trying to find that.

?: I mean, neither can a const binding. But that's still a binding.

CDA: Luca.

LCA: Yeah. Actually, they just said the same thing. I was going to say.

CDA: Okay. Nicolo, I see you getting on the queue again. Do you want to talk about that one first? Or you're.

NRO: Sorry. I wanted to put a reply and put a new topic.

CDA: Yeah. No worries.

NRO: Okay. I think the fundamental question is this the same binding? Normally, when we have imports, an import statement never declares a new binding. They just point to some other binding somewhere else. So when we have a named import, it's pointing to the variable somewhere else. When we have a namespace import, it's pointing to there is like a slot in the module record saying, "This is the binding that contains my thing." For source, the reason that maybe it was a little bit ambiguous in the spec is because we were getting the source unlike the module namespace that actually has a binding defined as lot that we use as a binding. It was like in some cases returning to a host hook. And so it was like less clear to see it was the same. Given that import declarations never introduce a binding so far, I would intuitively expect import source to work the same, where it's not creating that local binding source mode. It's just pointing to the module source. The binding contains the module source. And so it would not throw I

CDA: Luca?

LCA: Sorry. Broken mic. I would argue, though, that given the fact that the namespace object is on the module record, and thus is considered the same binding because even though it's not a binding the traditional sense, we do have the requirement on the host hook that returns the source mod that it always does return the same value. So you could argue that given the same input, it always returns the same output. It's basically functionally equivalent to a slot on the I don't recall what the thing is that we pass into the host hook. But on the thing that we pass into the host hook, so I think it follows from that logic that we should consider this a binding in the same way. And that should mean that it does the same thing that we do with the module namespace. Object.

CDA: Oh, OFR.

OFR: I haven't thought about this much since the slides were added so late. But it does look like a binding to me. So a binding is a syntactic thing. I see two times a variable name on the slide. So these are two bindings to me. I don't know.

CDA: NRO.

NRO: Yeah. If there wasn't a source keyword, if it was just import source mode from mod.js. So you would still say two times source mode. But it's like a normal default import. Would you still see two bindings?

OFR: Yeah. I see what you mean. But in that case, I would see source mode in the mod.js file and just grab it from there. And in this case, I don't. So I'm I can basically nothing prevent I can say import source la la la from mod.js. And that would work as well. So it's nothing that I actually get from mod.js. It's a local decision how I name it.

???: No?

LCA: Thank you. So I think the argument that I was trying to make a second ago is that it actually is a property of the module. Because of the requirements that we have on the host hook that returns this, that it must be the same value that is returned for the same module. So the same way that the namespace object is always the same namespace object, regardless of what module we import it from, even though it is not an object that is declared within the module itself, but sort of associated to it, I would argue that even though there is two bindings in the sense of two variables are being defined here, they refer to the same thing in the same way that a default import or a namespace import refers to the same thing.

CDA: OFR

OFR: So I guess it's a bit like an alias binding then. It's like something like import A as B. In that sense. Which, yeah, now I don't know what that means. But.

GB: Sorry. Just pulled up the spec here. And we do actually have a slot these days for module source. On the abstract module record. So yeah. And under that framing, it does sit right next to the namespace. As another binding on the module record that is providing that source.

OFR: But maybe then we should not be allowed to choose a name just for it. It could just be called source.

LCA: But you can call it whatever you want for default imports.

OFR: Okay. Fair.

CDA: MAH

MAH: We're arguing about the regular import. But I feel this really feels more like the import star as namespace case, where you get to name it however you want. And it is the same namespace object.

OFR: Maybe it should be called "as name"?

LCA: (indecipherable)

CDA: Well, Luca looks like that's like a reply. I moved it up.

LCA: That's not a reply. It's a plus one for the in order of change.

CDA: All right. We'll go to NRO's topic.

NRO: Yeah. Plus one for this change. Does one to I just want to note that it is slightly different from the motivation there was for changing it for import star. For import star, we had two different forms for re-exporting it. And one was trying, one was not trying. Depending on whether you did one or two steps. So the change there was actually just the goal there was to unify these two forms. While here, there is no two form. I don't remember why we don't support export source from. But here, there is no two forms to unify. So it is good to be consistent with all other types of imports. But it's like less strong internal consistency.

LCA: Yeah. Plus one from you also. I think from what we just saw, because this is an internal slot the same way that the namespace object is, I think it should behave the same way. I think what Guy said also is correct to impact us. This makes no difference to anyone because nobody's ever going to run into this.

GB: Yeah. I think at the end of the day, it should be almost down to implement is what they're comfortable with. We can specify what makes sense here. But it would be great to have some implemented feedback as well. So yeah. With that, have we gone through the queue? We have.

CDA: Oh, that's it for the queue. We're a little over. But we do have a few minutes still available in the session if folks had any final thoughts or comments. But yeah, nothing's in the queue so far. You have support for the change. If there's any other voices of support or any objections, please speak up now.

DLM: So it's always unclear if people would like to be called on or for us to wait until you finish entering something in, especially in cases like these where there's not something somebody wants to speak. And since I typed EOM so easily.

CDA: No worries. You have support from Daniel Minor. Final opportunity to comment. All right. I believe you have consensus for the normative change. Great.

GB: Thank you very much. I very much appreciate having no follow-ups further. So let's work, which is always nice.

### Speaker's Summary of Key Points

We will make the normative change that allows source phase imports to participate in ambiguous re-export deduplication so that it does not throw if multiple star re-export statements resolve a source phase imports binding, consistent with namespaces and potentially other system bindings on module records. And because of the nature of it, it doesn't require an explicit specification change, but will naturally be the behavior under the current rebase.

### Conclusion

The speaker did not provide a conclusion.

## ESM Phase Imports normative PRs

Presenter: Guy Bedford (GB)

* [proposal](https://github.com/tc39/proposal-esm-phase-imports)
* [slides](https://docs.google.com/presentation/d/1RHIYufBtt6LuAIqsbaOpkr2gZckC7NROzm_Zl9yTFYY/edit)
* [pull request](https://github.com/tc39/proposal-esm-phase-imports/pull/58)
* [pull request](https://github.com/tc39/proposal-esm-phase-imports/pull/61)

GB (slide "March Meeting Points"): So this is a follow-on from last meeting. In the main meeting, I presented on the as-of-phase imports proposal. And during that presentation covered two normative PRs. For the as-of-phase imports proposal, that I was looking for consensus on. This is just to bring those back from last meeting. So just to go through what was discussed. In the last meeting, I gave an overview of the as-of-phase imports proposal. And how it fits into the current harmony layering semantics. We went through in detail how module source transfer and import keying works. And then based on that context, went through these normative PRs in detail. At the time, we mostly had consensus for these changes. The point was raised during the meeting, though, that since the PRs had been posted after the two-week deadline, it would be appropriate to have them approved at a subsequent meeting for review time. And so that's what I'm doing now. Is representing these two PRs. The first is the change of how we define the identity of module sources. For JS modules, instead of using their source text equality, which was how we originally defined when we were seeking to build equivalence of modules across different agents, we're using the actual object identity of the module source. And the other change is now that we have a way to do this with well-defined semantics, support cross-round source imports. So that if you take a module source in one realm, move it across into an iframe or any other way to create a realm, and you import that module source, it can still exist as a unique identity in that other scope.

GB (slide "Normative Changes"): So just to go through these briefly. And I wanted to keep this short not to be a whole nother half-hour-long description of as-of-phase imports from first principles as I'm sure you're all have heard enough times. But the to go through very briefly. Just the direct semantics being changed here.

GB (slide "Duplicate module declaration equality"): If you have a JS module source, and you post a message to a worker, you're going to get module source objects that have different object identity. But we then were able to still maintain their equality of instance identity because we felt that was an important property at the time. The motivation being that in some sense, it's nice if you can form an equivalence relation of modules between workers and things like that.

GB (next slide with same title): The justification and so this led to source text equality. And the justification being being able to support things like identity relations across workers. It's turned out that this has some really weird semantics and perhaps it's fairly obvious if you look at the concept.

GB (slide "Normative: Module Source Identity"): But the when you use module source equality, if you consider module declarations under module source equality, basically, they would if you construct artificially constructed two module declarations with the same source text, they would obviously unify as the same instance. And this gets really strange when you think about things like whitespace affecting equality or comments affecting equality and things like that. So in general, it's a terrible idea. We never should have done it.

GB (slide "Normative: Duplicate module declaration equality"): And this change is to say that we're no longer going to have source text equality. We're going to use the actual instance identity of the source phase object itself. So in the worker here, source mod one and source mod two, have object identity. And that object identity is used in the source instance identity keying.

GB (skips over the next few slides): And then there's various implications. And there's models, artworks, but that's basically the gist of it.

GB (slide "Normative: Cross-Realm Imports"): The other PR is cross-round imports. If you import a source go into an iframe and import it, right now, we throw this is was an artificial restriction added while we wanted to ensure that we could maintain well-defined semantics for this. We also tend to think of iframes as module loading contexts that could be more fine-grained module loading contexts with compartments in the future.

GB (next several slides with same titles): And it's kind of a very explicit opt-out that was added just out of caution. And so this pull request is just removing that very explicit opt-out now that we have well-defined identity model. We know how to do identity across realm. We're aligned on the object identity and then it all works out. Semantically, as you would kind of expect.

GB (slide “seeking consensus for Normative changes #58 & #61”)so I can go into more detail if people have questions. I did not want to do a full repeat presentation here today. I'm happy to go back over the slides and go into more involved keying semantics. So maybe we can just stop there for a moment for discussion. On both topics. And then I can individually bring up the topics further for consensus.

CDA: Let's go to Q. JHD.

JHD: So with this change, is there a way to take two module source objects that have distinct object identities and determine that they're the same? Like the same source text or whatever.

GB: No.

JHD: Is that desirable or intentional or just a consequence of removing this unrelated thing?

GB: Yeah. So since we define that the source for a given module in the module registry is always the same object, or practical use cases, when you import the source, you're going to get the same source and so you're going to always get the same identity. When you do that source, it's important. If you pass it to structured clone or you round-trip it over a post message, you're generating new identity. In many ways, this is a feature in the sense that if you want to dynamically import a source, and you want to create a new source that you can get a new instance out of, it naturally allows multi-instancing workflows, basically. And it also provides a great pinning for the identity of the source between compartments. Because if you consider multiple compartments, and a single source identity based on its object identity, we don't have to try and consider what it means to equate sources between compartments anymore. The object identity is that identity for the source. And it's object identity can inform a unique instance identity in every compartment. So the original justification for source text equality was if we wanted to be able to draw an equivalence across agents so that if you're given a specific object that was evaluated in an evaluation context and you wanted to know does that module that it was evaluated in exist in another agent and draw equivalence relations between modules across agents, that does now get harder to do. And is instead done by your convention as opposed to a formal relation. But that was always a hypothetical feature that was never embraced by the structured proposal or embraced by any specification discussion.

JHD: Okay. So I think I understood most of that. I think that I see why you would want to get a distinct identity in some of those cases. But I also see why you might not want to. I might want to round-trip it through a structured clone and get the same object identity back. If there's no way to compare the two distinct ones, then there's no way for me to simulate in either direction, I suppose, like in other words, if I could extract based on some matrix question, let's imagine there was a module source `.toString()`. And I use that as the key in my cache or whatever. Or if there was a I don't think there is, but if there was a way to extract the location of the module, right? It has a URL or a specifier or something. Then I could choose whether I wanted to provide distinct identities or reuse a pre-existing one. Regardless of what the common or default behavior was. But it doesn't sound like there's any way for me to do that regardless of what the default.

GB: There's basically one other identity model, which would be possible here, which would be a hash. Or just a large random UUID. And as far as I'm aware, there is no precedent in ECMA262 for a UUID construct. Please correct me if I'm wrong.

JHD: I mean, yeah, there was a UUID proposal for cryptographic purposes that ended up landing in Web Crypto instead. So there isn't anything in the language but I think.

GB: (indecipherable)

JHD: And more specifically, you're talking about just hashing. There isn't a precedent for that either.

GB: Yeah. But more specifically, a UUID that's used to define formal identity I don't think we have any probabilistic identity models in spec contracts spec constructs today.

JHD: Right. I mean, many some built-in types are not comparable. And many of them are. Even functions, you can compare by source text, although obviously, there's many problems with that approach. If two module source objects or module namespace objects even represent the same module, I expect that there would I would expect there would be some way for me to answer that question. I don't need to necessarily get the contents of the module. I don't need to necessarily get some hash or UUID. The mechanism is question mark. I'm just saying if I get two arbitrary objects of the same type, I generally want to be able to say, does this represent the same thing?

GB: Right. But there's no concept of that that exists across serialization. Right? In the language. There's no concept of serializing an object. Maybe short of registered Symbols or something, I haven't verified their structured cloning behavior, but.

JHD: Well, there is for objects. I mean, if you did something more slightly fancier than `JSON.stringify`, right? Because that's only a subset. You can serialize an object and deserialize it and then do a deep equal kind of comparison. And the object you can choose to respect or ignore the object identity.

GB: I guess the point is that the source text identity is not a good model for identity. Because it is sensitive to you can basically forge a module. That and the forgery is very brittle. But it depends on things like comments and white space behaviors. Maybe unlike structural identity for objects. Where it's a bit more of a well-defined concept of a formal structure of an object. This is just source text. And so if you can artificially construct a source and then forge an identity in many ways, source facing forwards are a capability. Or the ability to import things. And so objects as capabilities, I think, is also the stronger model here, and does better identity model. I think unforgeability is also a feature.

JHD: Okay. Then I mean, I'll just yield to the queue. But after this one comment, which is, okay, how do I know if two capabilities are the same capability conceptually?

GB: They're objects equal. Yeah.

JHD: Okay.

CDA: Matthew.

MAH: Just backtracking really quick. It took clarify when importing your evaluating both the module twice, right? If you know if you end up with different namespace that means you're evaluating the module twice there. There is no longer any links between those module source.

?: Correct.

MAH: Okay.

CDA: Nicolas.

NRO: Yeah. So okay, I have kind of two really topics mixed into one. One is that this indeed breaks run tripping across workers, which is what JHD was talking about. And I agree that is unfortunate. It means that if you run trip a module and you get it back, it behaves it's you cannot distinguish it from if it was a separate module with the same that happened to have the same source text. Which, by the way, the example is like, well, we can just compare if there was a way to compare the strings of it. It wouldn't again, that case also behave the same as with a separate module with the same source text. I think it's not worth trade-off though to the benefits of it. Keeping the identity and making sure we have a single key in the HTML level import map in module map that caches module evaluation. Module resolution. Causes so many race conditions because if a worker already imported module foo and then receives module foo it needs to decide whether a future import of foo is like the one is received and the one it didn't. And there wasn't we couldn't find a good behavior there other than first wins. And if we need to give up “round trip ability” to solve that, I personally think it's fine given that there are so many language values that after sending it to a worker and back, you cannot detect if it tells actually the same or just one that looks like it's the same.

JHD: All right. So the question is, are you saying that there is a way right now, even before or after, to determine that two module source objects look the same even if you can't determine that they are for sure?

NRO: So before this normative change is proposed, if I have a module in worker A and I dynamically import it, for example, so I get its namespace, then I send this module to worker B and then B sends it back. I import the same thing. It would dedupe. And so it would deduplicate it.

JHD: Yeah, the same object.

NRO: Give me the same namespace. So then I can compare namespaces and tell, oh, yes, this is actually the same module, not just another module that has the same source. If you want, I can probably go more in details in the race conditions that that causes.

JHD: No, I guess what I'm asking is, I understand that the object identity reveal is now going to be gone with this change. I'm asking, is there still a way to say these two module source objects have the same source text?

NRO: No, there isn't. There isn't. Maybe there could be one eventually. I'm not sure if it's actually good to then expose the difference to the case where we have two separate modules on disk with the same contents.

GB: Yeah. You could imagine some scenarios in which you don't want code snipping and also invariance sources should in theory be invariant to their own TypeScript type stripping or minification. It's to some degree as well from a it gets into the function two string kind of stuff as well.

CDA: All right. We have a couple of minutes left. MAH?

MAH: Yeah. So my question is, if we go back to the use case of shared structs wanting to basically base off the identity of the shared struct on the module itself, how would we do this with this kind of change where we don't where it seems we don't really have any link remaining between modules in different workers?

GB: All right. So in the web assembly world, when you create threads, you generally need to set everything up from the start. So you would get your shared memory and initialize that shared memory into every single module as it's being instantiated. And that initial process is the one that creates the identity. Because it knows it set everything up itself. I think the same thing could potentially apply here to some extent, maybe. That initialization time processes could draw equivalence potentially as opposed to trying to treat it as some implicit property. But maybe I'm wrong there.

MAH: I thought so too, but I've been shut down and that it was not ergonomic for developers. So this is something I'll I mean, if shared structs reanimates at some point, I think Ron is probably going to be interested in clarifying again why this is not possible.

GB: Yeah. I mean, this was something that was justified for shared structs. But not once was there any interest from folks on the struct side for this. And so it's very difficult for a specification to create a semantics that are hypothetical and another specification without any buy-in from that other specification. And we did present it a couple of times. I know NRO joined the meetings on structs and shared these ideas. But there was no uptake of them there.

CDA: All right. So we only have one minute left in the time box. Which I actually extended by a few minutes already. NRO, can you be brief?

NRO: Yeah. If we still want to solve the shared structures case, the duplication use case with this, it might still be possible. Just be very ugly. We would need to each module would internally have a shared struct type identity. And then when we clone the module that internal object not actually exposed, that is a shared struct. Would be the one providing the marker to say, oh, these two things are actually the same. I'm happy to bring that to matrix though because it gets very complex.

GB: I think that the only other identity model that we could really consider here if there was a justification for it would be a some kind of UUID model where modules are associated internally with a unique set of bytes. And then that can be unfortunate, basically. And then we can have an identity but without there being any precedent in the spec for that kind of an identity model. And without there being a driving motivation it's a very difficult thing to specify. If that motivation were to rear its head again, I would be open to reconsidering the identity model. I just don't think we can make identity models based on hypothetical constraints. They must be real constraints.

CDA: All right. We are past time. We do not have time for Ron's new topic.

(RBN's topic was: "New Topic: Shared Structs Identity")

GB: Okay. In that case, I'll move straight to the request for consensus for the normative changes. The first change being defining module source object identity instead of source text identity. This is PR #58 only as in both spec. So I'd like to ask for consensus on that change.

CDA Okay. RBN

RBN: I will admit that I had not looked close enough at this to realize that there would that there were implications for the shared structs proposal. And I need to get a better understanding of what those implications are before I would acknowledge or approve consensus.

GB: Okay. If this is new information, I'm happy to bring this back at a subsequent meeting. And we can reconsider it then.

RBN: Yeah. I'd like to have a chance to talk more. And I know we have to kind of rekindle the shared structs meetings. So I'm hoping to still hoping to do that very soon. Just schedule has not been kind to me lately.

GB: Sure. Okay.

RBN: I'm also happy to discuss offline.

GB: Yeah. I think the main difficulty from a presentation perspective is that it takes quite a bit of context to have the discussion. And yeah, ideally, if we can have the discussion outside of the meeting and be ready for the consensus. And the other risk from a consensus point of view is if new folks bring up new issues each time. Is there a way we could do a conditional consensus on an out-of-meeting discussion?

CDA: I think what we should do at this point because we are now a couple of minutes past time is do a continuation and see what you might be able to do asynchronously between now and then. We have a little bit of time. Later let me see. Not today. Tomorrow. We have about 40 minutes in the last session tomorrow that are available. So we can schedule a continuation then.

GB: Okay. I would be happy to arrange a continuation and maybe myself and Ron can aim to have some of these discussions until then. And then you can progress onto the next item on the agenda

## Thenable Curtailment status update

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1SW8xSjuWqrdix_MOE3O-ZJcR-_XgO4z2ajhJInz0IwE/view)

MAG (slide 2): Hello. Just let me share and rearrange my screen briefly. Yep. Okay. Hopefully, I'll see my slides. Yes. Okay. I'm going to assume that's a yes. All right. So just back for an update. I had been hoping to come for stage 2.7 today. But work intervened. And I didn't get a chance to actually finish it all. So instead, this is an update. And I request for a little bit of feedback. So a reminder as to what we're talking about. We have objects with a then property or thenables. They get treated specially in Promises. And in the web platform, this has caused repeated security issues. Particularly since when you look up the then property, you go all the way up to object prototype, which means that you can just define then on `object.prototype`. I have telemetry on this. No one does this. Except I have lots of security bugs where people do this. Anyhow. Last time we spoke, I said there were more security bugs. Since last time we spoke, there have been even more security bugs. This is an ongoing problem. And so I'm hoping that to continue pushing on this to address a platform security problem.

MAG (slide 3): All right. So where have we landed from previous discussions? So we've landed on the idea of a new abstract operation for resolving Promises without triggering user code. The idea being that you will delay the user or the user code execution to a microtask if it can happen. Or could happen so it will check, for example, if it's a Proxy. Naming is hard. So I have written a spec text that is using a name. Unfortunately, subject to bike shedding. I don't love the name I have. So I'm open to people saying, "Please just use a simpler name." We'll get there. The other thing we got to on previous discussion was there is some interest in actually potentially exposing this capability to users. However, I don't know that we got real consensus about this.

MAG (slide 5): So let's talk about some open questions for this proposal. Should we actually expose this to users? Previous version of these slides said, "Let's ask for consensus." But it's not really the right place to ask for consensus. So what I think I'm actually asking for here is more of a temp check. And I just realized I closed TCQ. But the options really here are should we actually expose this to users? And I see three basic versions here, which is yes. And in fact, I, a delegate, would block if we don't expose this to users because if we're doing this for engines like we have to be able to let users do this. Another option is probably. But maybe we are okay with it just going through as the abstract operation. And then we can later expose that as for users. And I wouldn't block this. We could do it as a different proposal. There is also the position you could take, which is “no Users shouldn't have access to this because…reasons”. And so I kind of had thought we had basically landed on option two, the probably we should do it. But I realized that I didn't I don't think it was concrete. And so I want to get a more concrete feeling because I do have a version of this. But if the actual feeling in the room is no, we shouldn't do this, I don't want to spend a ton of energy being like, "Oh, but should it look like this? Or should it look like that?"

CDA: Okay. So you want to do a TCQ temp check?

MAG: I think so. Is that a thing that we can do these days?

CDA: That's the thing we can do. I just want to make sure that I ask before we do that. Okay. So for everyone online and in the room, well, actually, I'm not sure if new TCQ if this is true. But previously on TCQ, you had to have TCQ open at the time the poll was started in order to be able to see the interface and respond to it. So if you don't, please open it now. Again, I don't know if that's an explicit requirement. But hey, if you want to vote, you've got to vote's not the right word there. But if you want to give your feedback, then you need to have TCQ open anyway. So please do that. And I will do the poll now. Okay. So should we expose this to users? Let's do.

SFC: I'm sorry. It says, "Should we expose this?" Can we say if we're going to be voting, we should clarify what is “this”.

MAG: The capability to resolve a Promise without running user code in the current tick delaying to another tick.

MM: I'm not seeing a poll in TCQ, right?

???: Still, I have to answer your question.

CDA: I'm still working on it.

MM: Okay. Let us know when we should see it.

CDA: Hold, please.

???: I meant to give the chair a forewarning. And I didn't do that. I'm sorry.

CDA: No, it's fine. I wouldn't have saved any time. I did see that you were going in this direction. Okay. Poll should be visible now.

MAG: Sorry. I really appreciate the choice of emojis.

CDA: I'm going to give it I don't know. 30 more seconds, tops. Maybe less. Still seeing some answers trickling in. Maybe give it a little more. It seems we may have reached critical mass here at 3:12 and 6. So I'm going to stop the poll.

MAG: Okay.

CDA: So you had 12 probably, 6 nos, and 3 yeses.

MAG (slide 5) So based on that, I will well, I mean, based on that, what I think I would like to do is I will split that out as a separate proposal which I may it's a little lower priority for me. But I will take that as a different thing to do later. Which is fine. It kind of obviates the rest of this slide deck. So you guys can go for dinner sooner. But I will go through the rest of it. And if anybody has feedback, I would ask just ahead of time before I split this out, is there anybody who just flat-out plans on blocking because they're like, "I really don't think this should ever be exposed to users"?

CDA: So we do have JRL and JHD on the queue.

???: Yeah.

CDA: I know that those existed prior to the poll going on there. Justin, did you want to say some words?

JRL: I mean, no. I won't block anything that happens. And I think the more relevant question is, will it block this proposal, which is honestly super necessary for security? That's current vulnerabilities. I think we should do whatever is necessary to get this proposal that is necessary for browsers' internal code now as quickly as possible.

JHD: I'm fine with that. Despite saying yes, what I sort of was thinking in my head was I think it would be blocking I think it would be just terrible if we didn't eventually provide users with this capability. I am perfectly content to advance it without exposing it to users. If it seems like we're going to be eventually able to expose it to users. And so I would love to hear or have somebody file an issue offline reasons why we would not want to expose it to users. I suppose this could have been more options of whether it should block or not is one question. And then should we expose it or not ever is another question. So yeah, I think if anyone has a reason why they shouldn't ever expose it, I would love to hear those but I am content for all the security reasons we talked about to move forward without it for now.

MAG: Okay. Yeah. I also would echo that. Anybody who wants to provide feedback, reasons why I'll go through the next slide. Oh, actually, sorry. Do you want to keep this thing now?

CDA: KM is on the queue.

KM: I'll be to defer this to later if you want. But you mentioned that nobody does object `prototype.then` equals something. Is this something where reasonably we should make object `prototype.then` an exotic object that just rejects the then property every time you try to put it on? And never allows then? Type situation? Or is that something we've thought about? Or is this?

MAG: Yeah. It did come up. MF brought this up when we were there was the spec CVE last year, year before last. Time has no meaning anymore. Michael's on the queue saying, "Yes, of course, we should do this." And I do think that we should in the sense that I have telemetry that basically shows I literal zero websites ever do this. And yet I have a folder full of exploit code that is doing exactly this. And it's like, "There's an argument to be made that basically if somebody defines object `prototype.then`, you should just crash the content process because someone's doing something wrong." So yes, we should do this. I was hesitant to do this partially because I just didn't want to make `Object.prototype` an exotic object. But the it does not it is not a fulsome defense in the sense that yes, object prototype should not have then properties. But then what about array prototype? Or what about there are many different prototypes that this kind of problem gets solved. The nice thing about the deferred I gave it a terrible name. It's not there. Anyhow, it's safe Promise. We're going to call it safe Promise for now just for ease of discussion even though I'm safe the problem is let's safe. The nice thing about safe Promise result is that it covers the whole gamut. It is a stronger protection. But I do kind of think we should just make `Object.prototype.then` exotic because if you do this, you're everything is broken and wrong and horrible. And you should not do this. So yeah. But I think that's a different project. That's a different proposal. I do think we should do it. But a different proposal.

KM: Perhaps that could be part of should we expose this to users. A different proposal. A different flavor of that. It doesn't necessarily have to be this one. It doesn't have to be in conflict with this one. Right? Because I think they both could work. And it sounds like, yes, we should have the stronger one for the sake of all of our users of web browsers. But also, we could do the thing that makes it so that XSS is slightly harder next on the queue is Michael who's adamant.

MF: Yeah. Yeah. We should definitely do this. Belt and suspenders. Last time I presented this, I presented four options that all attacked this problem from a different way. And all were intercompatible. We could have chosen up to four of them. We decided to do zero of them. We should revisit that. And now with new motivation, maybe we will choose to do some of them. I would be happy to revive that if people want. I would do all four of them again. Belt and suspenders and then another belt and another suspenders. So yeah, please talk to me and we can do that.

MAG: Yeah. MF could drop a link into the delegates channel with a link to the discussion, I believe, where he lays out the four.

CDA: JHD?

JHD: If the issue is security vulnerability reports, you could also just ignore the whole class of security reports by just saying, "Untrusted code isn't part of our threat model." Bye. So browsers. This is real vulnerabilities. This is these are not.

MAG: Okay.

???: It's actually something exploitable. Not just. Oh, very much.

???: Exploitable. Not just a proof of concept.

???: Okay.

???: Okay.

MAG: Oh, yeah. It's just like this is one of the core—thenables is a core primitive that is used in a not the entire class, but a moderately sizable class of a security exploits. And it just is very convenient for an attacker to be like, "Well, where do I put this to make sure it runs? `Object.prototype.then`. Cool." So yeah, that's why that's there.

CDA: JRL.

JRL: So as (?) said, blocking on `object.prototype.then` is not sufficient because one of the cases that we studied was animation and `animation.prototype.then` would have still had a security vulnerability. We can't just block everything from ever getting a thenable. There is a different way to solve this that solves everything. And that's my preferred way, including user code, so that users don't need to actually opt into this at all. It will break Svelte, but Svelte is a compiler and it can be very easily fixed. They actually think they're self-inflicted problem. Then they can fix right now. And then when we make this change in the future, if we make this change in the future, they won't break. So it completely it's not web compatible, but it's not web compatible in a way that actually improves security. And I think we should do.

MAG: The thing you're proposing, by the way, is just essentially making this deferred safe Promise result be the Promise resolve steps, right?

JRL: Exactly.

MAH: I'd love that

MAG: Okay.

CDA: Sorry?

MAG: No, sorry. Continue.

CDA: MM is on the queue with: "don't break the web" does not imply "don't break attackers" ;)

MAG (slides 6 and 7): Very good stuff. Okay. I'm just going to go through the last of the slides real quick. They're semi-not relevant because they are kind of about the exposing this to user code. But if people have opinions, this is a very quick way to just drop an opinion quickly. And then we're done. Current best idea for exposing this to users is basically make the resolving function that you get when you create a new Promise take a new argument and there's a little question mark of does it take a real argument, a.k.a. do you increase function count or function length or null? And the answer can be no. And then if you pass this if you call resolve with a value, you could then call resolve with a value comma true. Now, it doesn't have to be Boolean. You could also equally say `Symbol.safeResolve`. There is a design space here. But this would kind of be the way that you would express this. I am trying to get to the safe resolve capability. And if we were to do a Boolean, I'd have a little bit of experimental evidence that there are cases where you could conceivably accidentally get into the safe resolve case. It is unlikely, but it really it is theoretically a behavior change. The cases that I've seen where this actually is most impactful is where people end up getting the resolve function and then doing a spread call into it. And so it's just like whatever arguments are there. And so there's can be more than one. And what if it happens to be a Boolean? Which is why I opened this issue, which was basically if we were to add a Boolean, should we coerce? How much do we care about the potential for accidentally calling in? And I think that's the end of my slides oh, I have some plans. But does anybody have any real opinions here? I see LCA just went on the queue, so I would just talk about that briefly. And then I'll just talk about my plans quickly.

LCA: Yeah. I'm moderately worried about particularly with coercion just because I feel like it's there's so many cases where people use resolve right now. It's very hard to identify all of them that may break. And we know that if we a lot of things coerce to true, right? So I would definitely say not to coerce. And ideally, if we do that, then we have some specific marker like you proposed the well-known Symbol. Alternatively, we could also go with something where it is a separate function. One option is to pass it in as the third argument to new Promise. The new Promise callback. Or pass it in as a property on the resolve function itself. A second function. I think maybe both. Stupid mic. One moment. Okay. Sorry. Different mic. The yeah, I don't think this is particularly great because it'll probably yeah, a bunch of allocations, right? We have to create a bunch of functions. But there may be a way to work around that with the `resolve.safe` if the .safe is always the same safe and just resolves based on the identity of the resolve function that it is called on. I don't know.

MAG: It's kind of an open design space in the more that you say these things, the more I'm convinced that this should be a separate proposal so we can hash some of this stuff out. But I appreciate the feedback that either not loving the coercion and I also I like the idea that there's more options here. I hadn't come up with the idea of the `resolve.safe`. And so that's a nice one.

CDA: All right. That's it for the queue.

MAG (slide 9): All right. So quick update on my plans here. I appreciate the people feel that we should be moving on this. So I'm working on spec text with huge help from Justin Ridgewell. I had our first draft. He really helped me nail down sort of making sure that we were specifying exactly what was the intent. It's in not terrible shape right now. I need to reread it. There's a couple of things that I'm not 100% sure on. I part of the reason I haven't it was not quite in the shape that I was ready to go for stage 2.7. I'm hoping that by the next meeting, I will have it ship shape for 2.7. And then I will go and get the reviewers JHD and Justin are the reviewers. So hopefully, that'll be smooth sailing on that front. And then we can go for 2.7 next time. I also have a prototype that is not landed yet, but will hopefully land in the next actually, no, I'm going on vacation next week. So next month. So hopefully, we'll land next month. And the idea will be once that lands, if you're running Firefox nightly, you'll be able to flip a pref and it will use safe resolve for all WebIDL. And it will expose potentially the second argument version of Promise resolve the my plan being that I'm just going to use this as my daily driver and see if anything breaks. I hope not. I've started discussion on the WebIDL spec. There are no one's opposed yet, but just I'm kind of getting my ducks in a row here. And then I'm probably going to find people at WebEngine's Hackfest in June and start being like, "Come on. I'll do this." So that's it for me. I think. Yep, that's my last slide. So thank you very much, everybody. Thanks for the feedback. And I hope to see you in the next meeting.

### Speaker's Summary of Key Points

* Interest in committee feelings about user-exposure for ‘SafeResolve’. Did temp check, and most people weighted in at “probably”.
* Makes more sense to do as separate proposal as will need a bit of design work.
* Discussed a bit the options for user exposure; Luca expressed a bit of concern about second-argument exposure and proposed either third-resolver-function or a property on the resolve function as alternative designs.

### Conclusion

* Matthew is going to keep working on spec text to get in shape for 2.7 come next meeting.
* Will split user-exposure into a different proposal in order to expedite this one, and allow some design
* Open invitation for those who do not wish this to be exposed to users to share reasoning on the proposal repository.
