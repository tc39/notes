# 111th TC39 Meeting

Day Three—20 November 2025

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Dmitry Makhnev     | DJM          | JetBrains          |
| Jesse Alama        | JMN          | Igalia             |
| Waldemar Horwat    | WH           | Invited Expert     |
| Ashley Claymore    | ACE          | Bloomberg          |
| Eemeli Aro         | EAO          | Mozilla            |
| Ron Buckton        | RBN          | F5                 |
| Devin Rousso       | DRO          | Invited Expert     |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Samina Husain      | SHN          | Ecma               |
| Joshua Goldberg    | JKG          | Invited Expert     |
| Ross Kirsling      | RKG          | Sony               |
| Richard Gibson     | RGN          | Agoric             |
| Lea Verou          | LVU          | OpenJS             |
| Christian Ulbrich  | CHU          | Zalari             |
| Jonathan Kuperman  | JKP          | Bloomberg          |
| Shane F Carr       | SFC          | Google             |
| Daniel Minor       | DLM          | Mozilla            |
| Matthew Gaudet     | MAG          | Mozilla            |
| Keith Miller       | KM           | Apple              |
| Yusuke Suzuki      | YSZ          | Apple              |
| Istvan Sebestyen   | IS           | Ecma               |
| James Snell        | JSL          | Cloudflare         |
| Andreu Botella     | ABO          | Igalia             |
| Aki Braun          | AKI          | Ecma International |
| Ben Allen          | BAN          | Igalia             |
| Chris de Almeida   | CDA          | IBM                |
| Chip Morningstar   | CM           | Consensys          |
| Chengzhong Wu      | CZW          | Bloomberg          |
| Gus Caplan         | GCL          | Deno               |
| Jake Archibald     | JAD          | Mozilla            |
| Jordan Harband     | JHD          | Socket             |
| Justin Ridgewell   | JRL          | Google             |
| Kevin Gibbons      | KG           | F5                 |
| Mathieu Hofman     | MAH          | Agoric             |
| Michael Ficarra    | MF           | F5                 |
| Mark S. Miller     | MM           | Agoric             |
| Nicolò Ribaudo     | NRO          | Igalia             |
| Olivier Flückiger  | OFR          | Google             |
| Ruben Bridgewater  | RBR          | Invited Expert     |
| Rob Palmer         | RPR          | Bloomberg          |
| Stephen Hicks      | SHS          | Google             |

## Intl Era Monthcode for Stage 3

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-intl-era-monthcode/)
* [slides](https://notes.igalia.com/p/Lne8U2E5K#/)

BAN: Fantastic. Cool. I just want to start by saying that we had originally planned to ask for Stage 3 at in meeting as a result of the need for a couple of normative changes, we’re going to hold off until January. I anticipate this might not take anywhere near the requested timebox, since we won’t be asking for Stage 3. But without further ado, I’m going to share my screen.

BAN: All right, so, yeah, the first thing the notice is we have crossed often the request for Stage 3. I’m going to give you an update on where we’re at. We are in fact perilously close the Stage 3, but as I said, we’ve got a couple of late break normative changes that made us decide we should hold off until the next meeting for that. But the premise behind Intl era month code is Temporal supports a number of non-iso-8601 calendars, and previously the calendars has been defined out of EMCAScript, so in practice, in ECMAScript it's a lot of implementation defined behavior in practice. It’s at the level of IGR or—or/IC4X. But Temporal adds a lot of calendar arithmetic capability, so adding and subtracting dates and so forth. And all don’t want to specify the arithmetic for every calendar, just because it can get complicated, especially in the case of calendars, like the Chinese calendar that use lunar solar months or the Japanese regular calendars or there’s orthodox calendars that have intercalendar months, so 12 months that are 30 days and then five days that are in their own 13th month. So we don’t want to explicitly specify the arithmetic for every calendar this is handled in practice at another level. We don’t want guard rails around implementation behavior in order to avoid divergence, and this shows up in, for example, the way the leap months work in Hebrew calendar differs from how they work in other calendars with eight months, so den quay or the Chinese calendar. Long story short, there’s a leap month that isn’t inserted in the Hebrew calendar every year called Adar 1. This—in years with leap months, there’s two months named Adar, and the first one is considered leap month, not the second one. Which means that if you’re doing calendar arithmetic based on those months, you’ll land somewhere differently from how other calendars involve leap months. So we want to implementation divergence for calendar specific details, and again, we don’t want to specify the arithmetic for every calendar since that’s typically makes sense to have that implementation defined at the EMCAScript level.

BAN: Okay, so as I was saying, our goal is to not oversea spes fie behavior for matters on which ECMAScript is not the correct authority, and within that constraint, minimize opportunities for implementation divergence, and our additions to ECMA404, we have explicit description of the calendars which we support, which removes potential ambiguities. There’s a lot of ambiguities related to sort of historically contingent effects, for example, the calendar that is labeled Islamic, just there’s a lot of different Islamic calendars that we support. The one that’s—it’s been labeled just plain Islamic was—didn’t actually reflect the reality of any particular Islamic calendar, so we’re excluding that one. We’ve got our list of valid error codes and aliases as standardized in CLDR, so this specific Japanese eras we’re supporting, the names of eras in the orthodox Coptic calendars and so forth. Valid ranges of era years for each calendar. One thing that I believe came up last meet that we added last—meeting or the meeting before is an expanded range of selection of reference years. Basically any year in any calendar because of how Temporal represents dates, it has to have some date in ISO 8601 that it refers to. So this is fairly simple in ISO 8601, and Gregorian calendars, so you can’t just use 1970, for example, you can’t use the Unix epoch as the reference years because, well, there was no February 29th in that year. So in the Gregorian-like calendars, well, we can just use 1972 as the reference year because every day that appeared in those calendars exists in 1972 because there was a leap day there. Well, for example, in the Chinese calendars, there are a number of different leap months that can occur. And those leap months could have a leap day inside them. And some of the possible leap months and leap days within leap months are incredibly rare. So winter months, to find the last time that those months occurred, you have to go back to in some cases the 1400s. Well, okay, the reason why we ended up expanding the range for selection of reference years to 2035 is that there is a leap month that—in Chinese calendar that will be coming up in 2035 that hasn’t come up in several hundred years. We’re considering the sort of valid range for the calendars is going to go back to 1900, just because it’s difficult to pin down exactly how to represent—there’s disagreements on—there’s disagreements about how those calendars worked before the year 1900. So the way we resolved the problem of, okay, there’s this leap month that hasn’t occurred for about 50 0 years but will occur in 2023 is we expanded the range of selection for reference years to 2035. That way we can actually represent those months, the days within those months correctly. Also, we’ve—the last bullet point here, we’ve got the list of the epoch years per calendar in Temporal `PlainDate.prototype.year`. We also have specifics on which calendars supports week numbers, which was left in implementation to find, in terms of week numbers, everything that’s not ISO-8601 doesn’t use week numbers.

BAN: We’ve also added constraining behavior when adding years in lunar solar adds, an algorithm for determining the difference between two dates, which can get complicated when you’re considering years with leap months and leap days within those leap months and we have special handling of the CLDR historical calendar IDs with an implementation defined algorithm. Okay, so the reason why we’re not asking for Stage 3 this time is we have two small normative changes that I’ll be asking for consensus on that are fairly late breaking. One of them is so the next CLDR is going to be removing several era aliases and there are two error aliases in the Ethiopian calendar `incar` and `mundi`, those we'll be removing to match CLDR’s behavior [PR](https://github.com/tc39/proposal-intl-era-monthcode/pull/72). And likewise, we’ll remove several error aliases for the republic of China calendar, and this is syncing is what CLDR is doing. The second one, and actually I’ve got them loaded up. The change is pretty straightforward. We have a table of what the sort of alias are, and we’re simply removing the aliases that aren’t going to be in CLDR anymore.

BAN: And this is a bigger [PR](https://github.com/tc39/proposal-intl-era-monthcode/pull/89). Previously, we had a spurious check for out of range error years. These actually have always been permitted and they’re necessary for the Japanese imperial calendar. So if the behavior is such that if you specify an out of range year, it will—I believe, I will look at the spec in a second, but roll over to the previous one. Correct me if I’m wrong on that, people. So, yeah, we had a spurious check for out of range. It turns out we actually have to—that concept doesn’t make sense in this particular context. And this shows up for handling the imperial regnal calendar.

BAN: Okay, just to say our only remaining last step from September was the creation of test262 for this proposal. It’s actually pretty nice because we’ve extended—there’s a lot of, how do I put it? We’ve taken essentially the majority of tests or all of the tests that previously existed for the ISO8601 calendar and for all the calendars which those tests make sense, we’ve added them for those calendars. Yeah, in the last month or so, we’ve done a whole ton of test and I just want two thank PFC and JMN from Igalia for putting in a ton of work on that. Okay, thank you. But, so, the thing I’d like to ask for is consensus on these two normative changes. One while we mad to introduce a spurious check for out of range, and two, we’re aligning ourselves with CLDR, we’re removing era aliases that don’t currently exist.

DLM: Before you ask for consensus, there’s a small queue. Shane?

SFC: Yeah, hi, thanks, Ben, and thanks for all the work you’ve done doing on this, especially in test262. There’s a number of open issues that are in the Stage 3 milestone that I wanted to get your thoughts on to see if you think that these are also going to be in scope for work that we’re going to do before we get to Stage 3. The first is a new issue—these are not in any particular order, but the first is a new issue that just got raised a couple of days ago based on the comprehensive testing, [issue 96](https://github.com/tc39/proposal-intl-era-monthcode/issues/96), the title is spec issue in NonISODateSurpasses. I invented this issue and it appears to be related to PR69, which this committee approved PR69 under the understanding it was an editorial change, and it turns out this was a case that where the behavior changed slightly across PR69, meaning that the resulting behavior that’s currently in the specification is not the behavior that this committee approved for Stage 2.7. Meaning that it should be presented to committee as a normative change if you want to proceed with that behavior. It seems to suggest based on your presentation on slide, I think it was slide 6, you specifically said addition ECMA402 when adding years in lunar solar calendars, which is the topic of issue number 96. Does this imply that you intend to propose that the behavior that is currently in the repository, which is not the Stage 2.7 behavior, is the behavior that we want to approve for Stage 3, or is this something that you think that we should bring back to committee again, and basically what’s your plan on moving forward with that issue?

BAN: That’s a good question. I have been out sick for the last two days, so I haven’t been participating in the discussion on this. Yeah, if PFC were here, I would defer to him on this.

SFC: That’s fine. I think I’ll move on to the next queue item. [Issue 57](https://github.com/tc39/proposal-intl-era-monthcode/issues/57), yeah, so this is another issue that my colleague Manish opened a little while ago, which is basically doing the same thing to challenge the resolve fields as we did the calendar date add and calendar date, and make the prose into algorithmic specification steps. And I haven’t seen any recent activity on this issue. Do you believe that this issue is, like—is this in your plan to address before we get to Stage 3, or do you feel that this is a change that you’d rather be addressing later? And I know probably your response the that, BAN, is what do you think, SFC? But I wanted to get your, like—I wanted to get a sense of what you see as the, like, person who has been spending the most time on this proposal. Is this on your radar?

BAN: It is. Let me think. My understanding is, and this understanding might be wrong, is that this would ultimately be an editorial change. Is that correct?

SFC: Well, it’s an editorial change except that given the experience we had with PR69, it’s probably best to have it hammered out, because, like, it’s an editorial change but it’s a difficult editorial change that could raise other issues.

BAN: Yeah, this is a difficult one.

SFC: So I just wanted to throw that out there. If you need more time to think about, that that’s fine. I can go to the next agenda item. This one’s a little more specific and concrete. [Issue 29](https://github.com/tc39/proposal-intl-era-monthcode/issues/29), which is the Hijri calendars one, we reached a kind of complex consensus in TG2 about how to deal with the Hijri calendars and I think an be a more lease found issues where it also—it interacts not only with Temporal and Intl datetime format, but also Intl display names, and it’s a fairly intricate change. I think the change ally is going to end up being maybe not actually that many lines of spec text, but it’s intricate change in the sense that it touches many different components, and this is definitely something where I want to make sure engines agree and are conformant. I wonder, what’s the progress on issue 29? I think, like, on this slide, slide 6, you have a bullet point that says special handling for CLDR Hijri calendar IDs. Does that mean this issue is resolved? And what are your plans on making sure the issue is fully resolved and closing the issue?

BAN: All right, this is the new fallback logic for this.

SFC: I didn't mean to put you on the spot for these. I’m sorry. My intent was more just to clarify, like, are—do we feel that we’re at a state where issues like—or issue number 29 is resolved, or is there still work to do on issue 29?

BAN: I believe it’s resolved. I have to admit, I haven’t looked at it in at least a month.

SFC: All right. I think just for Stage 3 readiness, which it sounds like we’re keeping that for January for other reasons, but I think since we are buying ourselves some time, it would be good that when we come back for Stage 3, then we have this issue—like, we have it resolved to make sure that all the ducks are in a line to make sure that this is done.

SFC: I have another one. [Issue 60](https://github.com/tc39/proposal-intl-era-monthcode/issues/60), which is to provide guidance, so you also had this in your presentation. Slide, which one was this? I think it was on slide 4. I think you mentioned on slide 4, expanded range for selection of reference years. So the expanded range of selection for reference years covers, like, all of the major leap months in the Chinese calendar, but there’s still a few exceptions, and Manish noted those in this issue, this issue was number 60, issue 60. There’s still a few examples of Chinese calendar dates that are not covered by the reference year algorithm. And then there’s four choices on how to proceed here. And it’s not clear that we have—the currently what’s in the specifications basically option 1, which is implementation defined, so if the user requests a—if the user requests a month day that is not covered by the reference year algorithm, then it’s implementation defined behavior about what happens with that. This is something where I’m interested in the feedback from other committee members who implemented Temporal or are working on implementing Temporal, whether or not we’re okay with that being implementation defined or whether we want to consider hardening the specification around that? If you’re not prepared to answer that question now, that’s fine, but I think this is feedback we should definitely get and land before we get to Stage 3.

BAN: I was working on the assumption on that one that it would remain implementation defined. But, yes, I’ll reach out to other committee members related to that, and if anyone would like to jump in, that would be great.

SFC: Cool, cool. There’s a couple other issues that amber opens, which are also I believe worth looking at. I think one of them looks like a spec bug. [Issue 87](https://github.com/tc39/proposal-intl-era-monthcode/issues/87) looks like a spec bug. [Issue 90](https://github.com/tc39/proposal-intl-era-monthcode/issues/90) is almost duplicate of the aforementioned issue about rewriting calendar resolve fields. I think it would be resolved if we did the calendar resolve fields refactoring. [Issue 91](https://github.com/tc39/proposal-intl-era-monthcode/issues/91) is very closely related to the Islamic calendar, to the Hijri calendar fallback algorithm. [Issue 92](https://github.com/tc39/proposal-intl-era-monthcode/issues/92) looks like an editorial issue. There’s one more editorial issue in [93](https://github.com/tc39/proposal-intl-era-monthcode/issues/93). [Issue 94](https://github.com/tc39/proposal-intl-era-monthcode/issues/94) is an interesting one, which is actually a question that we should also get feedback from implementers on. Issue 94 is the question of whether or not implementations are per it mitted to ship calendars that are not in the list of available calendars. Current three specification appears to allow that. And I think that we should be more clear on that, and use the language, for example, that is found on the numbering systems table in ECMA402 in order to make sure that the available calendars are extensible, unless the committee feels that we actually don’t want to allow that. Because this could open up cases where, for example, some browser, like tries to implement Islamic RGSA and others don’t and that creates an incompatibility, so maybe we don’t want that list to be extended. I believe that’s the last issue that is still open. I wanted to sort of highlight those, and it would be good to get our ducks in a line for Stage 3. Some of the issues are old and some of them are very, very new. It’s not really any—it’s fine, it’s just, you know, especially since we’re buying ourselves time, I think actually the fact that you put this on the agenda for Stage 3 actually made people open these issues because they looked at it more closely and found these issues, so I think given that we’re buying some time, I would like to make sure that these issues are resolved.

BAN: I can give some feedback on the GitHub issues themselves since we do have the extra time. My understanding was that, and this is going just based on tests we’ve done recently. My understanding is issue 91, that what display names accepts depends on locale data. It essentially could be left implementation defined. So display names is in fact, like, allowed to return them. With regard to, which ones have I been looking at recently? Oh, yeah, with regards to whether or not additional calendars can be supported, that’s another one. Just in general that should be implementation defined, and that’s my understand, and I will be discussing with other committee members on that one.

DLM: Sorry, guys, just maybe we should move to the normative changes, and your consensus for those, since there’s a possibility we’ll run out of time. And I think this conversation, while valuable, is mostly between the two of you, so it might be best to take it to TG2.

SFC: I was just about to say that same thing. I made my comment longer than I normally would in plenary because we have a big timebox, but I agree TG2 is a better venue for these in the weeds questions.

DLM: Ben, would you like to ask for consensus for the normative changes? Maybe you should bring them back up to remind us. It’s been a while since we've seen them.

BAN: Let me reshare my screen. Okay. So the first normative change (72) is simply to align with CLDR. The era at least is that we previously allowed for, and CLDR is no longer going to be including, and we’re going to remove from the relevant tables those aliases for ARS. And again, this is simply to align with CLDR.

BAN: And the second is required to make the—well, it’s particularly required to make the Japanese imperial calendar work correctly. We’d had checks for whether or not in era year is out of range. That—it’s not necessary and does not make sense, especially in the context of the Japanese imperial regnal calendar.

DLM: You have support on the queue from SFC and CDA. Shane, did you want to speak?

SFC: Yeah, I support both of these changes. I can give a little more context if anyone has questions, but that’s not really necessary, I suppose. I support them.

DLM: Yeah, I also support these normative changes.

### Speaker's Summary of Key Points

* Consensus reached on two normative changes
  * Align with CLDR on era alias
  * Remove inappropriate out-of-bounds checks for eras that had previously broken the Japanese Imperial calendar

### Conclusion

* Review open issues and return to next plenary

## Amount Stage 1 update

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-amount)
* [slides](https://notes.igalia.com/p/tc39-november-2025-amount)

BAN: Okay, so this is our Stage 1 update for amount. There’s been a significant amount of conversation about Amount specifically on our numerics channel. And in the numerics meetings I’ll refer to that later on in this presentation. But so for reminder for people who haven’t been thinking about amount for a few months, so our idea more an amount is—was going to be a mathematical value tagged with an optional end unit precision. So, yeah, and intentionally with a very, very small API. So not something working with arithmetic. Simply you can tag an amount with a different unit and you can update the precision.

BAN: (Slide 3) So since last time, amount has been a very frequent topic of conversation. in the biweekly TC39 JS numerics call, if you like thinking about numbers in JavaScript, these combine. And in breakout session on Monday, I was out sick unfortunately and wasn’t able to attend that, so I’ll defer to colleagues on details here. But in the breakout session Monday, there was—we spent a lot of time talking about how amount is both an Intl thing as well as not an Intl thing. It’s kind of a numeric thing, but it opportunity have arithmetic, so what’s up with that?

BAN: (Slide 4) Okay, so historic—the sort of history of this is one year ago, actually, in Tokyo, amount, which was then named Measure, got to Stage 1. And at that time, Amount, then named Measure, supported unit conversion. So the idea was this was something that was initially split off of this smart units proposal. Since it was an press observation of the proposal when the smart units proposal related to localizing measurements based on the specific rules for each locale for localizing that type of measurement. So what does that mean? It means that there’s some measurements that in some locales most notably, but not exclusively, locales that use a mixture of the imperial system and the metric system. There’s some locales where if you’re measuring certain types of things, you’ll use a different measurement system. And the sort of most straightforward one is in a lot of the commonwealth countries, Canada is sort of like the leading example for this because Canada kind of has the most complex mixture of measurement systems. If you’re, for example, measuring the height of a person, you’re not going to do that in centimeters or meters, even though in those locales, typically you do those measurements using the metric system. If you’re measuring the height of a person, you’re going to give it in feet and inches. So smart unit proposal was to improve—the idea was to improve localization by accounting for that, being able to tag something as a person’s height and then say, ah, okay, if we’re in Canada, we want to format this as feet and inches. Okay, doing that requires—would require a lot of arithmetic. And we realized, hey, a lot of the stuff that’s necessary to implement this involves things that kind of transcend internationalization, that transcend 402 and could be very useful in the context of 262. Long story short, at that time, amount—I’m going to start saying, at that time, amount definitely supported unit conversion. So doing arithmetic with our numbers. Okay. In response to feedback, we ended up, and this is when it was renamed from Amount to Measure, and the result of response to feedback, we paired the proposal way down and renamed it and focused on handling digit strings and precision and breaking off units and not—specifically not including anything arithmetic on numbers. And we’re building on EAO’s trailing zero proposal too with regards to precision.

BAN: (Slide 5) Okay, so relatedly, there’s moment ebb tunnel around the `<amount>` HTML proposal. This is—including last week at TPAC, in which unit conversion is a crucial part. There’s this thing going on at the level of at HTML that sort of reflects the state of the original proposal. And we’re kind of thinking of returning to our route, and maybe we should do some unit conversion.

BAN: (Slide 6) So what would we like to be able to do? We would like to convert an amount with a unit to another amount, give it a new unit. This raises a lot of questions that we talked about a fair amount literally a year ago in literally the same place. What units make sense to incorporate? Obviously we don’t want to depend on unstable data. So initial focus could be on the SI units, so meter, gram, and so forth. And then adding some additional units, for example, those relevant for CSS. I’ll skip over that.

BAN: (Slide 7) And this, again, returns to the original motivation for if smart units proposal. You can also include other standardized conversions, so meters to feet or meters to feet and inches in the context of person heights. This could be included following CLDR, which has fairly extensive data on units and unit conversion. And it follows an IST, which in turn follows the international bureau of weights and measures. I love anything that involves thinking through, like, four different layers of standards organizations. So there’s a lot of prior art on this. I started working on this in the context of internationalization where the CLDR units, like, seem like the appropriate thing. But, again, amount is something that is useful outside just the context of internationalization.

BAN: (Slide 6) And I want to flip back a slide for a second. Units are relevant for CSS. Like, definitely something I want to consider.

BAN: (Slide 8) So here's our proposed data model. As in the verse of the amount proposal that we last discussed several months ago, I believe at the last plenary, we decided to have amount store mathematical values, like, honest just mathematical values or as the result of a lot of discussion, mathematical values plus everything that can be represented using a JavaScript number. So we have this concept of an Intl mathematical value, the names, since this is going to be in a context of internationalization, Intl mathematical value is not ideal, so that would have to change, which would be a mathematical value plus not-a-number plus the infinities plus negative zero. So we have a Temporal style static constructor that takes numbers, BigInts and decimal digit strings. We’d have toString/toLocaleString for rendering the thing, dot with to update an amount with a new unit in precision and convert to, which is new since we’re reconstraining the idea of unit conversions, which would convert an amount to another amount with the same unit. And this would be implemented using the Intl unit protocol, which I believe is currently at Stage 0.

BAN: (Slide 9) So we believe that the sketch of Amount is in scope for 262. This isn’t just about presenting numbers in different locales. It’s something that is useful outside of the cop text of internationalization, and if we had it in the context of internationalization only, people would end up wanting to use it for non-internationalization related purposes, so question for the committee is in a worthwhile direction we want to go in? And would people be on board with this vision of amount?

BAN: (Slide 10) So now I’m going to open up to discussion. This is something that there’s been a lot of discussion sort of back channel discussion and in the numerics meeting about. And I’m anticipating a very large number of questions.

DLM: Okay, thank you. First up would be EAO.

EAO: Hi. So quite a lot part of the reason why we are here this week asking the question of whether it would make more sense for amount to include unit conversion already at this stage is the conversation that went—that happened at TPAC last week when I and Tantek co-chaired [a breakout session there](https://www.w3.org/events/meetings/126c9a01-9cbb-47d2-a5c9-7cc17dde0b58/) on the HTML amount proposal, which is in relatively early stages, but it did end up getting quite a bit of support as a thing, that I would dare say it has a decent likelihood of actually ending up in HTML as a thing. And so the HTML amount, there’s many details of that to be considered, effect leave it would be an element to would allow you at the very least to annotate a value as, hey, this is an amount, this is the numeric value that this is representing and these are the units that this is representing. And then provide at least for the possibility of flu some user interaction like clicking or long clicking or tapping on the amount for the host—the browser to provide a pop-up with converted values of that amount into other units that the user might be more comfortable or familiar with. And effectively, this is setting up the situation where we feel like there’s a significant source of interest in baking in the capability of doing unit conversion into the web platform in one way or another. And then the sense is that if the HTML spec effectively allows for unit conversion to happen, it would be really, really useful for the JavaScript amount to be able to support unit conversion as well to prevent developers from doing the thing that web developers seem to always do when the opportunity is there, of using a feature that is not meant—the HTML amount to do, to provide unit conversion, to do unit conversion in the way that we would like the JavaScript amount to be able to provide the unit conversion facilities. And effectively, we’re asking thus far, we’ve been presenting an amount that does not do unit conversion, but now that we can identify that there is an upcoming interest in unit conversion in the platform, should we not add that in as soon as possible rather than possibly later? And then, I mean, of course, we’ve not really prepared all of the details about what is exactly in scope for that unit conversion. Is it a subset just between the units that we currently support in Intl unit formatting or is it some other set of units that we are dealing with? These are valid questions, and the meta question is as you said first, do we include unit conversion at all first or do we first add an amount that does not do unit conversion, that makes sense just by itself and expand on it later or do we do it as a single bigger change to start with?

DLM: Next up we have WH.

WH: This presentation surprised me. I wish you’d put a link to the slide show on the agenda before today. I had looked at the documents linked from the agenda, but the presentation went in a different direction.

WH: I have mixed feelings about this. Right now I can’t tell what it is that’s being proposed. Unit conversions and unit display are very different things. Lumping them both into this class seems to be a recipe for a lot of confusion and a lot of problems. I’d like to see more clarity about which units are being proposed, how you intend to do the conversion, how you specify the precision of things.

WH: I can’t tell any of that from the presentation. To give an example, let’s say you have 1 1/16 inches, and you convert that to metric. What should the answer be? If you’re writing a unit conversion library—and people will use it as such if you provide it—then the correct answer is 2.69875 centimeters. If you’re using this for display, then that’s probably a bit too much precision. I can’t tell whether this is intended to be something used for unit conversion or whether this is intended to be used only for display, in which case what do you do when people use it for unit conversion anyway? Also I can’t tell if you intend to actually support the SI units or just do a half-hearted attempt like what CLDR does, omitting important metric units such as joules. Can you provide more clarity on all of these questions?

BAN: Yeah. One question that’s sort of—that I sort of want to address here is just sort of how these should be stored internally. So there’s been a lot of different discussion about how should this be stored internally, like, in the implementation side. Should this be stored internally as like a decimal string as the solution, or binary coded decimal as just numbers. So ultimately, like, we’re currently in the exploration phase for this, so it’s Stage 1, so that’s something we’re sort of—something we’re coming in here to get answers to. Yes, it is intended for unit conversion. If it were simply the old Intl smart units proposal, that’s about display. This is something that we think is useful outside of just the context of 402, specifically for unit conversion. And, yeah, with the question of, like, okay, so what units are we going to support, are we going to do just what CLDR supports? The answer is probably no. We want to include more than CLDR. But, again, we’re sort of at the exploration phase, and that’s something we’re looking for answers to rather than proposing a specific solution.

WH: If I understand your answer correctly, then, yes, you intend to provide this as precise unit conversion, and without having to do the Intl-like things?

BAN: Right.

WH: So you do intend to provide functionality such as, for example, you have watts and you want horsepower or you have meters and you want light years, and it will give you the precise answer?

BAN: But, again, with the question of, like, what specific units are supported remaining open.

WH: So the other question about scope is that this—if I understand your answer correctly, this would include the major metric units of length, volume, …

BAN: Yes, yes.

WH: … energy, force, power, temperature?

BAN: Yes. I mean, absolutely including the SI units. That is sort of the bread and butter for this.

WH: Yeah, yes, because CLDR is very half-hearted about it, so they select—they include only a few.

BAN: Yeah.

WH: Okay.

BAN: Simply CLDR is not the plan.

WH: Okay. So this answers the question. My response to that is that’s a good direction which I’d like to see explored. I don’t think putting everything into an amount with a precision makes sense. I think that mathematical unit conversion should be something that could be used independently of specifying internationalized amounts and precisions, so this seems like it would be two interconnected classes of proposals.

BAN: That’s good feedback. Thank you for that.

DLM: Next up we have Shane.

SFC: I thought EAO was on the queue before me, but I think maybe we had the same sort of topic. I do think this question is something we should pursue further. I think that from my perspective, the goal of the unit conversion in amount should very, very, very closely align with the goal of unit conversion in HTML. And the goal, which is oriented towards units designed for human display, for human readable units intended for display, and I think that those are healthy constraints that we should use when designing the exact semantics. And this is still a Stage 1 proposal and the exact semantics are probably things we’ll spend a bit of time offline figuring out exactly how to word them and phrase them in the spec.

DLM: Okay. A reminder that we have under nine minutes left. Next is EAO.

EAO: I think I’m in alignment with SFC and just wanted to express it maybe a little bit differently. We do not have a clear understanding. We have not asked for a clear mapping of what it is exactly that what units might be included in a unit conversion amount because we’ve not needed to ask this question before because we’ve left it out of scope so far. But specifically, I would like to underline any what we’re looking—what we’re seeing is that we’re going into a situation where we may have unit conversion to some extent being supported in the web platform, and, therefore, the capabilities of that unit conversion are setting up an effective minimum bar of what we ought to provide in JavaScript to provide a better API so that the HTML API would not get abused. Whether the powers of the JavaScript API go beyond the units we currently have through CLDR and go to much greater precision and other factors are concerns we ought to consider if we are of the opinion that this is a direction we ought to go to with this initial proposal.

DLM: Next up, KG.

KG: You were asking for feedback about general direction, and if you think this is more worth doing than the previous iteration of the proposal. And as one of the people who is most skeptical about the need for a first class Amount type in the language, under the previous presentation, I do think that adding unit conversion facilities to amount would be enough reason for it to exist as a first class type, yes. Obviously don’t put unit conversion on it just so that you have an excuse to add the type to the language, but if unit conversion is something that we collectively think is worth doing, worth providing anyway, then this is a fine way to go about providing it.

DLM: CHU?

CHU: Yeah, so I give the proposal a look and I can only add from a developer’s perspective that it looks good to me. I see many use cases for that, and I can also only second that what Eemeli said, that considering the relation to the HTML API, this will happen if—so it will get abused by developers, so I think it’s worthwhile to have this going forward. And I mean, at this stage, we can explore other questions of course.

OFR: Thanks for the presentation and also for kind of opening up the discussion again. I think that’s a good outcome. Yeah, I want to just add that it would be good to also come maybe back with a bit of a road map and with thoughts of what will come next, what you intend to build on top of it, if there are such things, and how it, like, interacts with other proposals that we might have in flight. I don’t know, I’m thinking about decimal as one thing or, yeah—so I think it would be good to know a bit more, like, the bigger picture, and especially also now because the shape of the proposal is changing, yeah, to basically understand what you have in mind, what, like, the bigger problem space that you’re working on. If there is such a thing. Yeah.

BAN: I mean, it genuinely is tightly related to a lot of different proposals. For example, like, okay, the question of, like, how are we storing things? Well, like, building on top of Decimal is absolutely one of the options. And with regards to the proposal building off of Amount that I’ve been involved with is smart units. You know, it’s the thing that amount came out, and, yeah, yeah, I just want to say in general, it’s really really great to hear this feedback. The sort of long arc of amount over the course of the last year has been starting with a fairly large proposal and winnowing it down, and then it seems like we’re heading back up to the sweet spot, the stuff that we should cover, especially because we have the new motivation of the HTML amount, so, yeah, I just want to say in general, this has been really wonderful feed back on the whole.

DLM: We have a point of order. We have aren’t three minutes left. OFR?

OFR: Yeah, I think splitting proposals is like great, but what is important is that then, like, the delegates are very—like, the other delegates are well aware of what is it a part of, and so—so it’s not that we’re, like, talking about tiny things, but actually don’t know—forget what the bigger picture was in the first place, so I think that is just important.

EAO: One way, OFR, to answer that question, we don’t have a single road map. We have multiple individuals with multiple source obvious interest. And personally for me, the road map, become on top of an amount with unit conversion is relatively shortage and in the JavaScript space, the only really, I think, necessary next step that I see from there is the consideration of whether to add support for usage and so this is specifically considering whether to support and how to support unit conversion that takes into account the locale information. So, for example, knowing that you have a height in meters and you’re—you know, you have a mass in kilograms, and you are formatting it to British audience and you want to—and you’re expressing something about baking, you use one type of unit, or if you’re referring to the weight of a person, you use another set of units. And this information, whether this is supported and represented, I think should happen, maybe even as a part of the amount that does unit conversion, but that’s, like, it for my road map. But there are other people involved in this obviously interested in decimal and other concerns that have further road maps, so it’s not necessarily about providing you with a road map. Maybe we ought to provide you—no, like actually a road map, this is my path, BAN's path, and this is SFC's path, and they’re hopefully all in alignment.

DLM: You have the next topic as well.

EAO: So, yeah, specifically going back to the question that we asked here, just noting that we’ve not really heard anyone say that they might have a preference for first having an amount that is a simple amount that does not do any unit conversion, but rather we’ve had a couple of voices in support of even now initially baking in. Okay, KG?

KG: Yeah. I mean, I’ve said this in previous meeting, but I don’t think it makes sense to have a first class amount type that is just a unit carrier, because consumers of those values should be consuming those values through the public named methods anyway, and at that point, there’s no advantage to having something in the language. And we’ll be able to transparently upgrade those things in the future if the consumers go first, as long as the first class type uses the same property names as the consumers we’re expecting, then nothing changes. Yeah, I just—we shouldn’t add a thing that is just a bag of properties. There’s no reason for that to exist.

DLM: Okay. And with that, we are at time.

### Speaker's Summary of Key Points

* Significant plenary support for returning to a model for Amount proposal that supports arithmetic and unit conversion
* Need to consider what units are included

### Conclusion

* Research appropriate units to include
* Develop roadmap for Amount in relation to associated proposals

## Intl Energy Units for Stage 1

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/johanrd/proposal-intl-energy-units)
* No slides presented

NRO: So Intl designed this proposal about adding energy units to NumberFormat. Going for Stage 1. Apologies I don’t have slides, but the read-me is, like, very comprehensive. A bit of context, `Intl.NumberFormat` supports, like, specifying units since some years ago, and, like, it will do local comment formatting of the unit. It uses CLDR data, but it does not use all of the units that CLDR has because there are many, and they would raise, like, increasing the browser size unnecessarily if people are not going to use them. So originally we just included some subset of those units. There are some issues that just users like web developers report to do asking for more units when they have specific use cases. And this proposal is coming from—so from developers asking for it. Specifically, when it comes to energy units like what is kilo and kilowatt, they’re very common, for example, when dealing with electric cars or when dealing with batteries or solar panels or even just electricity bills. And many of these things have, like, web UIs. This proposal is explicitly—this proposal is, like, energy units, but the idea is to add specifically watt, kilowatt, and kilowatt hour. There are—because it’s the three that CLDR provides to us, and that are most common for these specific use cases that have been mentioned. There are other potential units explored. Like, but during Stage 2 we will—when going to Stage 2 we will define whether we want to do just these three. And again, the reason for like focussing on the units for the use case is because we don’t want to add a bunch of extra units. Because they come with the specific version, which is again a lot of data. So yeah. I would like to go to Stage 1. I am presenting on behalf of BAN, but BAN is the champion. Does anybody have comments?

SFC: Yeah. Thanks for the presentation. We discussed this at length in the TG2 call. I will just give a couple of the take aways from there. One of the questions was, there is—there is ten different issues where like gotten feedback from developers that units should be in there that are not currently there and a question I asked TG2 was, like, should we pursue a proposal that adds multiple units including from different classes of units or should we focus on adding like one or very small number of units at a time? And the—the temperature of the room in TG2 was that we should focus on adding small batches of units at a time. So given that, I think this proposal is a very good scope. There is a question in this README file about whether other units of energy should be included. And yeah, this list here. So there is—yeah. There’s a different use cases for different—for different units. The author of this README file proposed specifically the three that you saw up above. As the three to be included. And I think that the reasoning is quite sound. So but I wanted to open this as an opportunity for Mendel \[unintelligible] to provide additional feedback. Any of the three units proposed for conclusion are too niche tore included or any of these other units down here are—are useful enough that we should include them along with this batch of energy units. WH has an answer to that

DLM: WH?

WH: Yeah. This presentation is why I am really worried about the Amounts proposal direction. On this list I see that you are not even considering any SI units for energy. Kilowatt-hour is not an SI unit. A joule is. And so I see that supporting joules as energy units is not a priority.

NRO: Kilowatts are commonly used for user interfaces

WH: So are joules. I see those quite a bit.

NRO: Given this proposal to Stage 1, I think, like, we consider feedback, but we are not setting down on which units are included right now. We will—want to have Stage 2.

WH: My concern is about the problem area scope here: whether the goal is to support a consistent set of units or to dribble units into the spec, a few at a time. And I am not happy with the problem area scope of dribbling units a few at a time.

CDA: Reply by BAN.

BAN: Yeah. It looks like SFC and I got on the queue at the exact same time. It’s response to a very like specific user request. I believe that the person who wrote this explainer works for a company that does energy use forecasting, something like that. And they have like a very, very specific use for these specific units. This might be useful context for that.

NRO: To clarify, it’s not just one user requesting this. This is one of the most (upvoted?) issues in the 402 repository. SFC?

SFC: Yeah. My next two issues are kind of related. I will jump to the second one. Just do reiterate the question, I asked the question of TG2, do we want to pursue a holistic proposal that thinks about all the cases we want to support with units in `Intl.NumberFormat`. Now we have additional data and had this for five years now. This is a good time when we could take a step back. And take a holistic view of how we do units inle NumberFormat. I asked of this TG2. And I was the only person if the room who held that opinion. The rest of the people in the room held the opinion, proposals are different by use cases, different by users. And if there is a—a user with a specific use case, that we feel is, you know, broadly applicable to users of the we can platform, then we should pursue that proposal. And that is the nature of the proposal that is in front of committee now. It is to solve a specific user’s use case. Specific user, I mean specific class of users. Not for one user. That’s this not what we here for. A class of users we feel is compelling as a general purpose proposal in the web platform. So we feel that this—there’s a enough users where kilowatts, kilowatt hours and watts solve the use cases? Now, like I think we could come with another proposal later, perhaps. I think for example, under lower priority it says scientific applications separate domain. It could be the case. Come back with a proposal later, maybe as another dependency of the amount proposal to make sure that all SI-based units are included. Right. Intl for example format we feel this is important for some reason. And that could be a separate proposal to pursue. And I think that that’s the direction that TG2 preferred. If this committee prefers us to have a holistic proposal this is an excellent time to provide that feedback am absent of that we will continue on the path of having narrow proposals that solve specific problems one at a time.

WH: I just find it disturbing that SI units are considered low priority here and, per the slide, that scientific applications are not use cases of interest this is willing to entertain.

NRO: Sorry it’s not that we're ignoring scientific applications. Focussing on the proposal on one specific use case which is like consumer facing like battery energy related applications. Different proposal—the question here is, do we want—should we have a single proposal for everything or proposals focused on different things? There is a different proposal that whose goal is to simplify formatting of unit for sin scientific applications speaker

SFC: Low priority, is because this proposal that is seeking Stage 1 is speaking to resolve use cases involving energy unit formatting for these use cases that are listed here. Energy consumption, electric vehicles. And joules are low priority for that use case. But it could be that we as committee believe that having all SI units in order to better support scientific cases are motivated, and like that would be a separate proposal. I want to add context that the heading low priority does not mean we this is low priority. It means they are not a priority for this specific use case which the one we asking for Stage 1 to pursue, explore.

WH: Yeah. In this case, I don’t think that having a use case of units for a specific application such as electrical vehicles is a good problem area for Stage 1 proposal. Units in general would be a good problem area for a Stage 1 proposal.

SFC: That’s excellent feedback. As exactly the type of feedback we should be getting at this point in time.

MF: I just disagree with WH here. I think that it’s perfectly fine to focus on a narrow area that affects a lot of people. This proposal affects a large group of users. And we can always do follow ons. If we do a larger unit proposal, that just ends up having—risking one small part of it holding back all the other parts. This is much more likely to just flow nicely through the process like this.

DLM: On the queue we have a + 1 to MF’s point from EAO. And next up is ACE.

ACE: So this maybe is a dumb question. So are these CLDR values already something that is physically inside browsers because they have CLDR data? And if this expanded, that would be moving into territories you are browsers put this new data sources? I am not familiar enough with this domain.

DLM: EAO?

EAO: The key blocker we like not to do the work of getting all the data about how, for example, kilowatt hours or any other unit are localized in all the places, locales that we need to support. CLDR does that work. And that effectively limits had what we—

ACE: Of the units. Those three are CLDR. But then we are saying, this might just be the first set and then we might grow no non-CLDR data. Like, how problematic would that growth area be? So it’s likely may always only be 3

EAO: If we find use cases and support, the easiest thing to do is to get the CLDR to add those unitses in and then we get support for them because they have to processes of annually and repeatedly pulling people from basically around the globe or how do you spell this thing?

ACE: Thanks. Okay. Yeah. I guess another way of looking at this proposal is that pulling the the CLDR units and it’s not a generic units thing. If we think that’s the only way to progress forward in reality. Thank you

SFC: Yeah. Just to answer—I think to answer EAO’s—sorry. ACE’s question. We need to add localizations for the units and that’s the cost of the proposal. The proposal is not free because I don’t think any engines currently ship the data for this. Except maybe Safari because Safari doesn’t ship the data. It just uses it from the operating system. It might already be on Safari. But at least for Firefox and Chrome that ship their own data, they would now have to start shipping translations for these. Each individual unit is not a lot of data. Probably less than a kilobyte for each unit across all locales, it’s not a lot of data. It starts to add up when you add a lot of units all at the same time. If you add a particular individual unit it’s small enough that it won’t set off any flags. Like, when you try to ship it and increase binary size. That’s one more reason why smaller proposals are easier to get through committee because the payload size they contribute to the browser engines is small enough that it doesn’t trigger any like additional like reviews or processes.

WH: Okay. Given the dependency on CLDR, I now agree with limiting this to units which are in the CLDR. On the other hand, this goes back to the question I asked during the previous presentation, will unit conversions be dependent on CLDR support? And I hope the answer to that question remains no.

DLM: That’s it for the queue I guess. Would you like to ask for Stage 1 NRO?

NRO: Yeah. After this discussion, WH you are okay with the proposal proceeding to Stage 1?

WH: I was never not okay with the proposal. I was supportive of it. I just disagreed with the scope.

NRO: Sorry. I am confused. The scope, Stage 1.

WH: I was disagreeing with the proposed limited scope of the proposal of just the three units. I was never against adding the units themselves.

NRO: If the problem statement is extending Intl with like energy and power units for user facing applications, which right now this is a list of three unit, exact list of units will be narrowed down for Stage 2. We have consensus going to Stage 1 with this?

WH: I support it. I always did.

NRO: Any other comments in support

DLM: I support this for Stage 1. And EAO does as well. SFC. MF has strong support.

DLM: Anyone disagree with Stage 1? Okay. Congratulations.

### Speaker's Summary of Key Points

* The proposal introduces energy units used for formatting of EVs/batteries UIs to Intl.NumberFormat
* There was discussion about whether we should include just W, kW, kWh, or also other units such as J.

### Conclusion

* The proposal advanced to Stage 1
* The list of units will be settled for stage 2

## `Object.getNonIndexStringProperties` for Stage 1 or 2

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/array-get-non-index-string-properties)
* No slides presented

RBR: First of all, I will actually not ask for an advancement. If the committee would not encourage me to do so. I want to give that as a—prenote on it. So like this is more of an update of it. I did further look into this. The major discussion when I proposed this last time was around the use case, and this is actually very difficult to pinpoint concrete sources of where this is used because it is not something to Google for. Like, for example, with the other proposals about objects like key links we just had, you know, that’s something I can search code for with a pattern. But this is not something that is possible like that. And where I do have use cases for validation. For testing. So any users that are using errors for example, or like they are wanting this in some parts of the code. That’s my personal perspective and I've seen that. It’s difficult to pinpoint sources. This is something I am going to invest a lot of time in and before I want to present this the next time.

RBR: What else is there? An update. We discussed it being on—placed on an array. Instead of an object. And I did change this from array to object to align with an array-like-object input and TypedArrays. I removed the options back from the original proposal which is for enumerable and limited to enumerable ones as that is definitely—if it is used, that would be the common case as such from the two.

RBR: What else was there in my notes. Yeah. My next steps are actually that I want to make a survey about usages and ask the committee if the survey would showcase that users are indeed interested in that. If that is a way for focussing with this proposal.

DLM: There’s no one on the queue at the moment. Now we have MF.

MF: It’s a very open and kind of leading question there. We have had mixed value from doing surveys—or looking at others who are doing surveys—within this committee. The methodology is very important and usually the methodology is not rigorous. When people run the surveys, the selection of the audience is also usually very poor and biased. I wouldn’t put much weight in a survey personally. That’s not going to really help convince me of much related to this proposal. I would be much more convinced by, you know, paving cow paths.

RBR: What’s that? I don’t know that word.

MF: It’s a term I guess we use here a lot. We—we see where people are already going. So like a cow path. A path where cows walk, we pave it so it’s nicer. We see existing usage and make it nice because that’s strong evidence that that is what people want to do. We give language support for those things

RBR: When it comes to that, there’s actually a very difficult part because it’s a little bit after the chicken-egg problem. The current usage is very, very, very likely going to be much lower than if that API—if the API would exist members would probably use it because, especially for validation, it’s so expensive to do this at the moment. When you have a TypedArray or an Array. That people will often opt out of doing it no matter what they actually do care about. But it’s just like—a cost they cannot pay. So like by saying we need to see this in the wild is like—we won’t because it is currently too expensive to do this.

MF: I am not saying they need to literally write a polyfill for something you are using and doing that. They have to have the exact need for it already there. And we are providing that bridge.

RBR: Okay. And that’s something I can work with. I understand, for example, speaking with, for example, as a said use analysis in the testing and validation area. When I speak with the maintainers of the libraries, getting their feedback about them being interested in having a—functionality, they would use it afterwards, is that what you anticipate?

MF: Yes. That’s the kind of thing I am talking about. Like, people who have existing code that can point you to the place where they say they would use that thing instead of what they do currently.

ACE: So continuing and also in agreement with MF, surveys are hard to get right. Particularly, if you ask the survey do you think you might use this? People will generally yes, because it’s an easy answer. Something like, this wouldn’t be like it’s not asking them please rewrite your entire library around this concept. It’s a utility. People’s gut reaction is probably. If you showed me a survey, everyone we asked say I didn’t, probably. I wouldn’t be convinced. I would be very unsurprised. The only thing that surprised me was if people said no because generally people don’t say no, it's a more socially expensive answer. Because you have to justify no. What I would like to see is, yes, and why exactly here is in our library where I would rewrite it. This is what it would look like. I would want—that’s a lot more work unfortunately, work is what a committee has to do, even for such a small proposal. I’ve had similar proposals very small and 99% of the time was researching and trying to do static analysis, trying to hand read libraries set up Zoom calls with people. I know it’s a lot of work for you, but personally, I really appreciate going to a yes-no question.

RBR: Yes. Thank you.

CHU: The way I see now, so there—for me a clear, clear need for this. I can relate that if you like what you did in the other proposal, we have this problem and this benefits the ecosystem. But I have a feeling like just adding something that might be useful, I am not sure about. And then I agree that you cannot do this in a survey to say, would you think this is useful? Of course people might think—always might think they are useful. But the thing is, yeah. So there must be some justification to that. I would like it if there were more concrete cases where correctness is important.

RBR: Mm-hmm. It is currently used for logging, for example. When you log, this will definitely happen. And there is a utility in a V8 internal message to do exactly this. I also like it’s also implemented in assert. Where it’s also used to do validation. And I know a lot of code like—like from the private code where validation looks for extra properties to not be accepted on Array or TypedArray. This would allow us to do, that’s pretty much the common use case

CHU: I am pretty convinced that you need, you have a need for it and seen cases. But I think we need—we need more than that. I don’t know. Like, with—`Promise.withResolvers`, that is something that had plentiful examples. We need this for logging or I don’t know. At least for me.

RBR: Like when it is generically needed for logging, I am not—when you say need, it’s also confusing. It is already implemented in node. Using internal methods. It’s not really about node needing it. Or me needing it because it is already there. No matter what, it’s about allowing generic logging libraries to do this at the moment we are not printing this information, and for example, especially when you have a drop in replacement for `util.inspect`, pretty much `console.log` in a browser, you will not do this because it is too expensive to calculate this. But you have an interest in showing it.

DLM: Would you go back to the queue. KG?

KG: Yeah. I guess I am mostly seconding what ACE said, which is it’s not enough to know would people use it. That doesn’t tell us much. We have to know what they would use it for and then in addition, we have to be convinced that the things these people would use it for are worth supporting, worth adding features to the language for. And the use cases that I have heard so far have not been convincing to me. In particular, logging and assert use cases are very far from convincing to me. The assert use case is almost purely something that you will be doing in node or other server runtimes. It’s a pretty unusual thing to do on the web. And I don't think we should be adding things to JavaScript that are not useful on the web, at minimum. The logging, why are you logging these objects that have these additional properties? I don’t think that is a case that is like—the only reason to care about that case is because you think that people are going to be giving you these objects. And you should just not care if you are given these objects in the first place. So those cases are not convincing to me. The kind of data convincing to me, you find a bunch of people who have a use case where they use this and that use case is something that would be worth adding to the web, which is a pretty high bar.

JHD: So I am in the queue. I don’t agree that these aren’t things you do on the web. Nothing you do in node, error logging happens on the web. There are multiple very profitable businesses, some in this room, that operate that way. Being able to know that the thing you are giving, the array you are given is possibly a RegExp or a template object or a communication channel are important things to figure out. So it’s very much not a node only concern. And as I mentioned with Temporal objects and match objects, the language produces arrays for which this API would not give you an empty list. And it’s—you know obviously for the cases it’s highly unlikely it would be prohibitively performant to `Object.key` on the array in the first place. But the category of objects that this API is for, is something the language has. And as far as trying to get code to not hand you this stuff in the first place, that’s what this lets you do. Without this, you can’t throw an error and instruct those callers not to give you these objects.

DLM: In the queue, a + 1 from CHU. That’s to Calvin’s point. And then KB again.

KG: It’s not about categories of objects. It’s about code patterns. I think you should not be writing code where \[inaudible]

JHD: You’re cutting out a little bit. But I hear what you are saying. That is certainly a coding pattern and it’s okay that an individual doesn’t like that pattern. But—

JHD: Sorry. You cut out a bit. We missed most of your comments.

KG: Sorry. I don’t think you should write code that cares if it’s handed an Array versus a RegExp match object. If you expect an array, operate on the argument as an array, don’t try to check if it is a RegExp match object. I can’t imagine cases where that would matter. We shouldn’t be encouraging people to do the sort of validation where it will throw in that case.

JHD: Okay. So my reply to that is, opinions on coding styles are valid to have, but you know, there’s lots of proposals in this committee that I think you shouldn’t be writing code to need them. But that’s not a valid reason to stop those people from doing that.

KG: That’s a perfectly valid reason to stop those people from doing that. That’s what we are for, as a committee.

JHD: Okay. Fair. I would say there’s nuance in it. And the simple describing the thing that you have like describing on object for logging purpose is a valid use case regardless you think the—for example, I believe that nobody should ever write sparse arrays and that anything that produces an `Array.from` another should densify it and sparse arrays are bad, et cetera. Sparse arrays exist and code on the web and off the web needs to be able to differentiate at times between sparse and dense arrays. So

KG: I am not convinced of that claim.

JHD: I am saying negative 0, for example, exists. And the—it’s total legit to say nobody should ever produce a negative 0 or want to. But it’s a thing that exists. And it’s a thing that therefore needs to be identifiable. It is currently. We don’t need a proposal to identify negative 0. We have `Object.is` now. But the—one’s distaste for a category of object is not—does not preclude the need to identify that category of object.

KG: Sorry. Yeah. That’s why my title for this queue item is not about the category of objects. This for me is not about whether you should use these objects, it's about whether you need to write code which identifies these objects.

JHD: What I am telling you is, there is a need for every kind of thing in the language to identify it it

KG: I am not convinced of this claim.

DLM: At this point we go to the queue

MAH: We do have a use case where this may be helpful. More specifically, if we find that there are properties on a TypedArray, we might want to provide a diagnostics, but what these properties are, we can find there are properties on TypedArrayses, on accounts, which I mentioned yesterday. I am—this is a really narrow use case really. But that is—we have a library that does that today. And that does provide the diagnostics of the properties that are found. And we would use this most likely to provide that diagnostic. But that was the question regarding the use cases

RBR: Yeah. I would like to come back to KG as well. About what was discussed because the user should do something or should not do something, well, we do have to face the reality that they do. And that’s something we cannot just ignore. Now, am I happy about everything that is possible with the language? Absolutely not. But do I have to acknowledge that it exists and have to work with what I have? Absolutely yes. So taking that into account, as a—like validation, I need to do the work. Do I want to? No. Of course not. Yeah. But I will do it because I want to be correct. Do I want to log this? Well, no. By default, it’s extra work to do this, and I still do it, even if it’s only a few keys and I have that extra method. It’s extra CPU cycles for something I expect not to exist in the first place. I am totally with you about that it should not happen. But like even the language itself provides objects or arrays that behave differently. Now, saying that this shouldn’t exist is confusing for me, therefore.

KG: I don’t mean to say that these things shouldn’t exist. I mean to say that consumers which are expecting an array, should operate on their arguments as an array and should not care if there are additional properties.

RBR: We don’t know what this is used for. Like, that’s something I cannot tell. You know? Like…

JHD: Logging is a use case where you are not expecting an array. You are expecting anything. You need to describe it.

KG: Yes. I recognize that if this function exists then people who are writing logging utilities specifically, would want to log the additional properties. I don’t have a problem with people making that choice if this feature existed in the language. I am not convinced that making it easier to log certain unusual objects is in itself sufficient reason to add something to the language. I grant that use case. I am not convinced that use case is by itself enough to add something to the language.

RBR: So actually, it’s also even preventing accidental keys, for example. That’s also for the validation aspect. Like when you create objects people are using dynamic key creation. In this case you want to validate what you have. To prevent any of that, you need to do it. In this case, anything that is the validation part, you have to also check for these extra keys.

KG: I have definitely validated that things were like arrays of the shape that I expected and not also validated whether they were sparse or had those extra keys. Just saying you need it to do in validation is clearly false in general. There are many times you validate things where you don’t care about this. Perhaps there are many cases where you do validation where you do care about this, I can be convinced that there are sufficiently many such cases to add this to the language. But you've got to present them to me.

MAH: I just did. Our use case is a validation that some object is an array or TypedArray. And we do not want to allow extra properties. We have our library. It is used.

DLM: Okay. We have a point of order. 5 minutes left and we should go back to the queue. WH has been waiting a while to make his point

WH: I fully support MAH's position here.

DLM: And ACE?

ACE: Just a clarifying question. In the—this is a Stage 2 thing. It references like is array index like it’s a spec operation. But I can’t see anything in the spec of its array index. There is an issue you are saying, should we have that? Like, my understanding of integer index keys depends. For TypedArray, 2 to the 53 for arrays and objects it’s 2 to the 32—1. So just exactly what we think integer index here is

RBR: Yeah. So that is definitely something to consider. And because we need to handle this. In this case, should normally just behave as if it’s an array, you expect it to be of the range of the array as index. So everything on top is an extra separate key. And for a TypedArray, it’s full length, whatever it is.

ACE: You would look up the length property to decide whether or not it’s—

RBR: No. On the array, lengths could be very big. But effectively, it’s outside of the allowed range from the spec. So as far as I know. I didn’t check that for a while. But like on a TypedArray, you just cannot do that. That’s what I meant

ACE: A TypedArray can have a larger integer index. Maybe it can’t because of allocating that.

RBR: Yes. It’s up to the size of the maximum size

ACE: It would detect that it's a typed array and switch its behavior?

RBR: Yes. Correct.

ACE: I think it's an important part of the API, how it’s detecting if it’s just a fixed algorithm that works the same for every object. Like proxy. Versus whether or not it’s switching behavior. So yeah, thank you for clarifying.

MAH: This is all Stage 2 concerns anyway. But one option is to rely on the array semantics which I think is this strict definition of what is numerical index property. That just means you have one potential extra property you might find on the TypedArray and the code has to deal with it. Just options. I don’t have have a horse in this race.

DLM: We have limited time available. RBR asking for stage advancement today?

RBR: I don't think that makes sense at all, so no.

DLM: The queue is currently empty.

RBR: Asking committee—is anyone convinced I should ask today?

ACE: I think you have enough to ask for Stage 1. I appreciate the conserveism. Not rushing proposals, but I would encourage you to ask. Sorry if that gets you shut down, but I think you should ask.

DLM: CDA agrees. Do you want to speak, CDA? CDA agrees. People would like you to ask

DLM: + 1 from WH

JHD: Just have on the notes that KG’s concerns would block do Stage 2

DLM: + 1 from JSL. Mathieu. Stage 1 from Chris and + 1 DJM.

CDA: Hold on. Does anyone object to Stage 1?

KG: I am not going to object although I am unconvinced of the motivation. To advance to Stage 2, you have to make a good case for the motivation. MAH mentioned the use case they have. Perhaps writing out why that use case is something that you think is common enough to warrant this feature—writing exactly what the use case is, because I don’t understand the context, writing that out and making the case for why this is something you expect to come up enough to warrant a feature in the language would help. Generally, have motivation that isn’t just like "people want to do logging". Make the case for why it’s worth adding to the language in terms of, what is MAH’s use case, what are the logging and validation cases that make this common enough.

RBR: I mean, there were a few people who brought up next to me personally, and have already mentioned about where they are using it or want to use it for.

KG: The people on the committee are extremely unusual. Saying that there are two people in the committee who would do something doesn’t actually indicate much more than that there are two people in the entire world who would do something. That’s not enough reason in itself. Often, the things that we are doing are pretty common, so write them out and explain why you think this is a thing that normal people are doing and I am very willing to be convinced by that. But merely saying people on the committee have a use case is not in itself sufficient.

DLM: Congratulations, you have Stage 1.

### Conclusion

* `Object.getNonIndexStringProperties` advances to Stage 1

## Decorators Status Update Request

Presenter: Jonathan Kuperman (JKP)

* [proposal](https://github.com/tc39/proposal-decorators)
* no slides

CDA: Next up everyone’s favorite topic. JKP will lead us in decorators.

JKP: Yeah. I don’t have a lot personally. I was really interested in the topics so JSH had put an agenda item for yesterday we didn’t get to. Asking the committee for an update on decorators it’s been a while since we unofficial update. I know I saw some mentions in chat conversations. I don’t have much of a plan, but I would have to hear if anybody has any updates or insights on the proposal. What is going on with it or what is best for us to do going forward.

CDA: Would anyone like to volunteer any insights about the status of decorators? NRO?

NRO: Yeah. Just very not statistically relevant information, it never happened for the proposal. People like mentioned on social media, asking me, what is going on with decorators. It happened twice, but never happened to me with another proposal.

CDA: CHU also would like an update on decorators.

OFR: Okay. Yeah. It’s not really a big update. So what I can say from the V8 side is that I am currently looking at the patches that were submitted by LFP from Microsoft. And he has made some changes and fixes and we’re still in discussions. These patches are a very straightforward implementation of the proposal. And it looks like they might not give us a performance we need. So what is likely going to happen is I will evaluate the feasibility of an actual efficient implementation later, and so for V8 it would be important to have a version that is, yeah, at least significantly faster than the polyfills. Yeah. Other than that, I think it’s still quite open. What you can expect from the V8 side is that we will come back with updates. Progress updates and an estimate of the complexity once we know—if I know more. And I will also come back if we encounter blocking concerns in the implementation.

OFR: Then the second thing maybe that was the chatter that was mentioned. I had a very interesting discussion with JHD yesterday about decorators. And what he actually mentioned is that they didn’t go through Stage 2.7, which I was not aware of. Because that didn’t exist at that point. And that actually made me look at Test262 coverage. And it turns out we have almost no tests and the tests are in open pull request. That was unexpected. The pull request was from last year. And I also ran the PR tests through babel and some of them failed. And yeah. So there’s a bunch of things I guess that need to happen. I guess that’s all that I have

CDA: I am curious what you were going to say, are you looking for help?

OFR: Help for what

CDA: Anything.

OFR: I might come back with yeah.

CDA: Thank you. I appreciate the update. There is a reply from NRO.

NRO: Yes. For the test, somebody needs to deeply learn the proposal to compare with the implementation to figure out if the tests are wrong or not. Then let’s just do something somebody needs to do and check the tests have been written, running them through babel as a way to validate them. So somebody would also need to check that there isn’t some babel back carried over to the tests where it doesn’t match the spec. And I am sure the author of the tests did a good job, but somebody needs to review it.

CZW: Yeah. I think the proposal list refers to an issue that marks that there are several tests done. But I think the Test262 actual coverage is quite low. There are a few test cases for decorators in Test262, but I think the—given the proposal size, I think the test coverage is pretty not satisfactory.

CDA: There is a reply from MAH.

MAH: I hate to do this, to this proposal, but does that mean we need to put the proposal in the 2.7 stage because it is lacking tests?

NRO: Yeah. I have opinions about this. In the past, I also asked around to test 2.7. The reason given was that from just privacy conversations with people, Stage 3, we—when Stage 2.7, we said not look back at proposals, we sent it back a signal—we know stating Stage 2.7, it’s no test. The proposal is moving backwards. Maybe we should do it. At least browsers should be aware that the tests are not merged. In writing implementation, relying on Test262, they are running 15 tests. They shouldn’t assume the limitation is correct. But yeah if we decide—first of all, not to do. We should be very careful about external messaging.

CDA: Yeah. I agree with NRO's comments. We only have a few minutes. I would like to get everybody on the queue to be able to speak. So folks could be brief… OFR?

OFR: Yeah. Just a quick addition, I did not actually look at what these tests are doing. I just ran them. Yeah.

JKP: Yeah. I think NRO covered a lot ever—I guess I have the same external fear, especially because this made it to 3 before. It’s not like we—yeah. Not that we skipped a step although we clearly did. The point though is very important that we—it seems—I was not aware of this. We need to focus on the Test262 coverage. I absolutely agree with that. I am a little bit scared just because of Nick—I heard a lot of people asking about the status of us. I am worried about the external implications if we demote the stage. I am not sure

KM: A summary of the position of, like, the JSC team at Apple is—the consensus is that—our status hadn’t changed. We probably would not implement this until both of the other browsers implement it. So that yeah. Just a recap of that, I guess. Yeah.

DLM: Yeah. First off, I think it’s great that you are reviewing the pull requests and the implementation. This has been at Stage 3 for a long time. It isn’t proceeding and we can’t really move it to a lower stage without implementation feedback. We have a partial implementation, but that isn't a priority for us, and like KM said, we probably will not do that unless both V8 and JSC ship the implementations.

CDA: There’s a reply from—question from JKP.

JKP: Sorry to jump on. Are you both saying that you won’t go until the other one goes? Is that what just happened?

DLM: I believe so, yes

JKP: Thank you.

JHD: I was just saying, I had no idea of the status for the decorators. We will definitely be taking a look at the PR at least at the next meeting. And if someone wants to send—so anybody who is interested in seeing decorators move along should definitely add tests. Either make another PR or post links on PR or something and we will take a look at that. The other thing that I didn’t think to put on the acute, we two browsers stalemate each other, is it possible either of JSC or SpiderMonkey to ship a flag implementation sooner so that we can like get both Safari and Firefox to have a flagged implementation and then you could agree doting to unflag it. Is that something—that a possible resolution to the stalemate?

DLM: I guess I will answer that. We are not prioritizing finishing the implementation work. So…

JHD: If somebody else did the work, would you merge it or not?

DLM: We have to—it would depend

JHD: It theory

CDA: All right. We have a minute and a half left. MF

MF: I would like to discourage future plenary agenda items of this sort: "hey, what is the update on this thing?". Not only because I don’t think it’s the best use of committee time, but also because I think that that is actually not the most effective way to get your answer. I think in private conversations with interested parties you might get a more informative answer than you get here in plenary where any comments could be seen as a public commitment from that company. Let’s not do that anymore.

CDA: I don’t totally disagree with your comment there, but I actually thought this—we had some good information come out of this today. But I think your point is fair.

ACE: Yeah. I agree with you in general. But I do think—this is an exceptional case. Like, we shouldn’t do big proposals like Temporal again. But Temporal was exceptional in more ways than one. Something in Stage 3 for so long, this was the exact right thing to do, I think it’s really—I again have had lots of people ask me what is happening with decorators and things. The community should see on record like yes. I email people, I am pleased this is on a public record

CDA: I was going to say before in terms of the public statement aspect: the folks that spoke today can remove those comments from the notes if they don’t want them to be public. I would hope they are able to remain. We are now cutting into lunch. I will read KM’s comments as low priority for us too. I don’t know what to say, I want a public answer. On this proposal, it was leading to negative speculation today in my opinion. There is a celebratory emoji. We are back at the top of the hour.

### Speaker's Summary of Key Points

* Discussion on Decorators took place. People are still excited to use them, browsers are still unwilling to be the first to ship them.

### Conclusion

* No major decisions were made.

## Class composition: Past, present, and future

Presenter: Lea Verou (LVU)

* [slides](https://webplatform.design/projects/class-composition/talk/)
* [explainer](https://github.com/webplatformco/project-class-composition)

LVU: Okay. So these are in the agenda as separate issues, first the class composition open discussion, and then the class spread syntax and class fields introspection proposals, but these slides are for all three, as class spread syntax and fields introspection came out of this exploration. I don’t think they solve everything, the hope is that they might be an easy step forwards. The way I’ve structured it is first the problem statement, use cases that I’m trying to solve, then looking at what other languages are doing to handle class composition beyond single inheritance, what are the userland patterns, looking at some existing Stage 1+ proposals, where they are—how do they relate. Then a few considerations, design principles about the design space, and then the two proposals I mentioned. I imagine most people here are already familiar with the literature around multiple inheritance on a high level and its use cases. I did notice that these main categories that I’m going to talk more about in a bit. The only one that is not explained later is transparent composition, being able to pull code from multiple sources without it having be reflected in a way that can be introspected from the outside. Sometimes that’s not desirable.

LVU: So class modularity is often there’s a case where you have huge classes with huge APIs and you want to modularize that for the same reason you want to modularize anything else. And this is a real example from the Prism code base where for V2 where we modularized its methods. It’s syntax highlighting library. We wanted to move the methods to separate modules to manage the code better, but that means we have to import them and write glue code for all of them. There is more egregious example that was shared with me yesterday, and I linked to it here, where this Babel class is basically pulled together from multiple modules and then has to write a ton of glue code. And they have their own helpers that fudge with the prototype as well. There’s a lot of good stuff in there. Then as I mentioned earlier, in Color.js we want to offer two flavors of the API. There’s an object oriented version where you create and manipulate Color objects. It has nicer DX, but it’s not efficient for a lot of the things that people want to do with it. Some color handling use cases are performance sensitive, e.g. manipulating thousands or millions of colors, so we also have a procedural, tree-shakable API, where people can just directly import functions and pass object literals around instead of Color instances. To do this, we not only need to handle both within each function, but also write a bunch of glue code as well to add them to the class.

LVU: Then, there’s also the fundamental sort of more philosophical issue of identity versus traits and behaviors. It could be argued that these are fundamentally different and you should be able to handle them differently. There’s the philosophical argument that inheritance should be around identity, and traits should not pollute the inheritance chain. That is not a view shared by everyone, but it is a popular view. For example, in the web platform right now, we have the `EventTarget` class. And it could be argued that you never describe the identity of something as "this thing can produce events, and listen to events". That’s a capability. It’s not an identity. Which is evident when you look at its direct subclasses, which have pretty much nothing in common. And it creates the very real problem that if you have a class that’s already inheriting from something else, you cannot also make it an EventTarget. We keep stumbling on this in the web platform as well if we want to make something an EventTarget post org and it’s not inheriting from something that’s an event target.

LVU: Very brief overview around composition, syntaxes around languages. Oh, and I just remembered, one thing I wanted to mention, I did not around a slide for, so I mentioned transparent composition, and I’ve had discussion where people are like, but the inheritance chain, who cares about it, who reads it, who actually does anything with it. In the web platform, there’s the `HTMLMediaElement` class, and then there’s the `HTMLAudioElement` and `HTMLVideoElement` classes that inherent from it. Totally fine. You could, a that a media element is an identity. Perfectly fine use of inheritance. But here is the thing, you have `HTMLImageElement` that directly inherits from `HTMLElement`. And you often have animated images that you want to be able to have playback control for. So one of the ideas discussed at some point at WHATWG was, what if we could make `HTMLImageElement` inherent from `HTMLMediaElement`, and then we get all this nice API for controlling playback, which would also be nicely consistent with the other two elements. But we can’t do that because at this point, authors might be depending on the inheritance chain of `HTMLImageElement`! In many cases, that would be an acceptable breaking change, but for something of that scale, you just can’t.

LVU: So I took a brief view of how different languages deal with this problem. I will not claim that I have deep knowledge of all of them. Basically, there’s very few that do full on multiple inheritance, notably Python, C++ and Eiffel. Eiffel is kind of unusual but it has some interesting patterns, which is why I included it. Most others separate inheritance and have a separate mechanism for importing behavior from multiple things. So interfaces started by providing a contract that classes had to implement.

CDA: Real quick, LVU, sorry to interrupt you. I’m only asking this because your presentation, I believe, is extensive. Would you prefer to get through the entire presentation before taking questions or would you want to take them during/when they’re timely? It’s completely up to you.

LVU: I guess it depends on what they’re about, because if they’re about something I’m about to say, then, hmm.

CDA: No pressure.

LVU: Sure, let’s do that. Let’s…

JHD: Yeah, you said—you talked about really big classes, and you mentioned the one in Babel, and it feels like an anti-pattern to me and we shouldn’t be trying to encourage it. That it would be better to, like—you know, if you have so many classes—so many methods in your class that you need to spread them across multiple files, then I guess my code review response to that would be maybe you should have multiple classes or multiple functions or whatever. Obviously you can do whatever you want, but I don’t know if I like the idea of encouraging that pattern.

CDA: There’s a reply from JAD.

JAD: Yeah, just that, I mean, I agree. But also there are cases where it happens and it seems okay. Like, if, for example, the window class in the browser is a class because you can have multiple instances of them across iframes and that’s at the root class of a platform, and, you know, we keep adding to it.

?: Sure.

JHD: Yeah. I mean, it’s clear that it happens, but that’s not, like, as we’ve heard even again—against my own proposal in this meeting, just because something happens doesn’t mean it we should support it in the language or encourage it in the language.

CDA: MF?

MF: Yeah, I also think this is a weird motivation. Like, people write huge classes, sure. But other languages with classes don’t have a way to take those methods out from the class declaration themselves and they just put it there, and they live with it and it’s fine. If you have a huge class, you have a huge file. Why does it make it any better to try to extract those? I don’t get it.

CDA: NRO.

NRO: For why we do it in Babel, it just makes it easier to find stuff. You look at list of files and know exactly where’s the file for methods that deal with comparing things, so you know that those methods are all going to be there, and it’s just less to figure out where they are.

CDA: RBN.

RBN: Just want to make note that there are languages that do have ways of handling in type of behavior with classes. Even though we look at some interface in C# and Java which allows you to have default implementations, V sharp has for even since 1.0, partial classes which allow you to break all large class implementation across multiple files. They still can interact and deal with private state and the like. But the main reason for this is primarily to break down big chunks of functionality that are related to make it easier to review, easier to manage for something that is a—still a single unit, if you were to again look at something like the window class and in DOM or any of the other large classes, document in DOM, that every now and then, you do end up needing to have something that is big that has functionality that’s brought all together so you don’t kind of having hundreds of little functions all over the place that aren’t related that are hard to rationalize. So having a kind of single cohesive way helps and also being able to break that up into ways that’s easier to maintain is also helpful.

CDA: WH.

WH: One of the coolest ways I’ve seen of dealing with this is in Swift which has type extensions, which I haven’t seen a lot of in other languages. This lets you add methods and protocol compliance functionality to an existing class from outside the class definition. It’s not just textual inclusion—it’s properly modularized. It’s a very neat way of solving that problem.

CDA: CHU? Oh, I’m sorry, CHU says shouldn’t we let LVU continue her presentation instead of nerding about lengthy classes. I plus one this. Please continue, LVU.

LVU: No, this was really useful! I missed partial classes in C#, and they would have been incredibly relevant. I was hoping that something like this might come out of this discussion as well. Because the landscape is so vast that it’s very easy to miss things.

LVU: So interfaces are usually a separate chain with different precedence rules. Methods are framed as default implementations, which has some implications around precedence that I’m going to talk about later. Then you have mix ins, which can have very different semantics depending on the language. In some languages, they’re basically macros, in others they affect the inheritance chain. It seems to be kind of a catchall for partial behavior. And traits seem to be kind of a more structured way to add in partial behavior. Rust is interesting here because you can do it post-hoc, afterwards, and this is actually the only way to do inheritance in Rust, which seems very strange to me. And then there is Haskell typeclasses, which seem to be kind of their own thing. I do not feel qualified to discuss them, but I wanted to mention them because I’m sure there are many people here who are. And should we—is there a queue or should…? Yes. Okay. Oh, yeah, and it was—I seen the queue that Rust can extend other Rust traits. That’s important—that’s an important design difference as well. In some cases, these can have their own inheritance chain, in other cases, they can’t do that.

LVU: So in the previous examples, I was trying to keep them minimal because there were many different languages that I don’t imagine any of us is familiar with all of them. Going forwards, I’m going to use this example, which hopefully is a little bit more pragmatic. And basically in an equilateral class and inheriting from triangle and using methods from regular polygon. So the very prominent pattern today, especially in the web components world is subclass factories. You have a function that returns a class that takes the super class as a parameter. That does have a lot of advantages. It’s basically piggybacking on all the existing mechanisms of single inheritance, super works, can have private members. However, it does affect the inheritance chain, which doesn’t feel appropriate for some use cases, like where you’re importing this tiny trait, this, tiny mix-in that just adds this little thing and now your inheritance chain is different than it used to be. The inheritance chain becomes completely meaningless because it doesn’t represent anything anymore. It breaks `instanceof` because every time this is called, you get a new class. And you also need to deduplicate mixins because your mixins might also be including mixins and you don’t want to apply them twice in most cases. So usually you add a Symbol on each mixin to help you figure out what has been included, which is very hacky. And also the mixin class needs to be aware, you need to design your mix-in class in that way. You can’t just design a regular class and then have others use it as a mixin. Which I’m sure some people would argue is an advantage. But it does have some downsides as well. For example, I’m sure many of you are familiar with Lit Element. Even though in web components, mixins done through subclass factories is the standard way to do mix-ins, `LitElement` *itself* is not implemented as a mixin, but is just a class. Recently, we were discussing how could we do declarative custom elements in the web platform, and one of the ideas that was floated is what if the syntax was generating a custom element class that authors can then extend and do things to it, because you cannot do everything declaratively. The idea is simple things would be easy and declarative, and people can layer JS on top of it. And a counterargument was, but then they cannot use Lit Element. If you could use Lit Element as a mixin and it didn’t have to be designed with that in mind, that would not be a problem.

LVU: The delegation pattern is really common as well where you basically create an object of another class and you use it internally. Sometimes the object is aware of your host class, other times it isn’t. Sometimes you have this dual linking, other times you don’t. There’s a lot to like. It has a completely separate state. It has its own inheritance chain. You can have multiple of them. You can even have the same one twice, which is rare, but it does happen. Because it’s a separate object, it also avoids conflicts. The mixin class does not need to be aware that it’s a mixin class, you can just use any class. The big, big downside is you have to write glue code yourself. There are no conveniences for it. The entire API surface needs to be done manually, you don’t have API surface added by this. It lives on a separate object. And the delegation pattern is actually the only way where you can add behaviors to web components in the web platform. Through this `ElementInternals` object, you attach this `ElementInternals` object to your element and it provides all these things that you then have to write your own API methods. And this highlights a big problem with this glue code. It’s not just that it’s tedious. Because you could argue that, yeah, you run it—you write it once, you’re done. It is also that it’s not future proof. When the web platform adds a new method for form controls, the web author cannot benefit from it until they go back and add it manually to their new components. Prototype mutations are very common pattern. Everybody does it slightly differently. Lots of userland libraries around this. Very flexible, completely transparent if you want it to be transparent. You don’t have to leave any trail behind. Can’t have private members because you’re basically going around classes and you can’t have `instanceof` checks kind of by design. And then mutations directly on instances, which I think is how TraitsJS used to work. Which is very inefficient, but affords maximum flexibility. And there’s a bunch of proposals trying to solve this. This is not the first time this has been discussed, by far. First class protocols is one that is often cited around, like, solving all the problems. Basically, you define this protocol, and then you—as long as you’re defining a certain Symbol that depends on it, actually, is the person who did first class protocols here? I should not be talking about his proposal.

CDA: The TraitsJS guy is also on the call. Just so you know.

LVU: Okay. Well, maybe—okay, well, let me know if I say anything that’s incorrect! And then all the methods from the protocol are imported behind that Symbol. Like, get area will not be imported as a get area method. It will be imported as a regular polygon get area Symbol. The huge advantage of this is that you avoid conflicts. Also, a big advantage is that it can be applied to classes that already exist. Some people think that this is a disadvantage. I’ve been in discussions where monkey patching is very much looked down on. Like, there are kind of two camps here. I think they’re valid use cases where you literally cannot control the class reference. So personally, I consider it an advantage. It avoids conflicts. What I don’t like personally is that it duplicates author intent, like, my understanding is, and please correct me if that’s not the case, so you need to specify a certain Symbol, like, in this case, for example, sides, but, like, I think you need to actually specify one of the Symbols from the protocol in your class before you call implement, right?

MF: So a protocol defines required fields and provided fields. So if you a have all of the required fields, you implement the protocol via either the syntax or via the imperative API, and it gives you all of the provided fields by installing.

(MF/LVU): Yeah, what I’m not sure about is can you not have required New Zealand ???.

LVU: Yes. Well, that doesn’t apply then. I thought you always had to have required fields.

MF: None is a special case of some.

LVU: Then I guess the only issue is with first class protocols is glue code. Because they’re so defensive in terms avoiding conflicts and you have to write all the same API surface yourself, even if you just want to use the exact same names, which is by far the common case.

JHD: That’s not entirely accurate. The protocol can provide all the implementations. Like, the only—the only time you have to write code is when the protocol is, like, in this case, get—I don’t think you need `getArea`. You can delete the area of equilateral triangle and it would just work. And similarly, you don’t need `protocol.implement`. You can use the syntax and declaratively do it like extends the triangle implements regular polygon, something to that effect.

LVU: How does it avoid conflicts if it just imports the actual methods.

JHD: The Symbol parts don’t avoid is conflicts. Because—or is the method name then the Symbol?

MF: The method name would be the Symbol name provided by the protocol.

JHD: You’re right. You do need that one string method for the string thing. That’s true.

LVU: Yeah, that was my understanding, that basically you import the methods as Symbols and then you have to write the API surface to connect them.

JHD: There’s been an ask from me, and I hope—I think not just me, that there be a way to have string methods defined in protocols, which would then remove the need for that.

LVU: Yeah, but because protocols are designed to make the Symbol use case easier, the string use case would be kind of like the outlier and would have—

JHD: Yeah, the rationale for the ask is I want to describe existing protocols too, and two stringable is a protocol, thenable is a protocol.

LVU: Absolutely. All of the protocols already in use would actually need string methods.

JHD: Iterable, for example, doesn’t. But so, yeah, if you assume that that change is eventually made, then eventually a protocol would be able to define it such that you would need nothing except implements regular polygon to get everything you want.

LVU: Oh.

JHD: Which feels very ergonomic to me.

LVU: It depends, because there’s—there has also been criticism around ergonomics.

JHD: I never heard any ergonomics complaints about this proposal, other than from people who would prefer mixins which is another proposal that’s conflicting. I’d love to hear about what those ergonomics criticisms are.

LVU: I can look them up again.

CDA: Just a quick, I am rather enjoying this, but just quick time check. We’re about almost 30 minutes into the timebox.

LVU: Yes, I’m almost done. Keep in mind the slot is for all of the proposals as well. And then there’s Maximally Minimal Mixins. Which is also Stage 1. It’s basically trying to make the existing subclass factories idea declarative to solve some of its problems, and it has a lot of the pros and cons of subclass factories as well. And then—and the thing that often comes up in these discussions is decorators, even though they’re not directly related to multiple inheritance. I mean, something like this looks wonderful, right? So I can see the appeal. But my understanding is that given how the current decorators proposal works, you can implement this with one of these two patterns, either you can return a class, a new class that extends the class that is passed in, which is kind of a little bit like subclass factories, just with a nicer API to the outside world, or you could actually muck with its prototype, which is also similar to existing patterns. So in some ways, they let you make the existing patterns nicer, but it’s still essentially these two patterns.

LVU: And this is a nice, natural break for the queue, I think, because the next part is about the design space considerations and principles.

CDA: You mentioned Rust traits before, but SFC, did you want to talk about that?

SFC: Yeah, you already stated this, but, yeah, Rust traits can extend other—you asked, like, how do you do class composition in Rust? You can extend traits and also have default impls, so like a trait can have a bunch of functions that are implemented. So, like, the trait system is the whole inheritance system in Rust. It’s just a little different. That’s all.

LVU: So there’s no, like, explicit—

SFC: There’s several people here who write a lot of Rust code, and I’m one of them.

GCL: Rust does not have inheritance. It uses a different thing called composition. Traits can require that when they are implemented on something, that thing also has to implement another trait. And through that, that that trait also, say you have, what is the word? A reference to something through that trait, instead of through a concrete type, it will also allow you to use all of the methods that it has specified. But they do not themselves form a high hierarchy in the way you might expect with classical inheritance.

CDA: MM, I know you have end of message there on the queue, but can I ask you to talk about that.

MM: Sure. So we’ve got this Symbol called has instance, and if an object implements a method whose name is that Symbol, then when you do a—let’s say you do an X instance of Y, and Y has or inherits such a method, then instead of just walking the prototype chain of Y to see if you match the dot prototype of X, is that right? Am I getting this right? Yeah, I think so. Instead, it first checks if there is a has—you know, has instance Symbol named method, and if so, it invokes that method with X being bound to this, and I’m sorry, with Y being bound to this, and with X as the argument. So the only reason I mention all of this is that the reason that was introduced into the language is we recognized that you might want an instance of that’s more intuitive and reflects the semantics of your program rather than just directly reflecting how you implemented the abstractions. So that was the hook for escaping exposing implementation choices that don’t reflect the overall semantics. And the subclass factory, you could extend the subclass factory pattern or you could provide a subclass factory abstraction mechanism that bundles in the use of instance of to, so to speak, repair the behavior of instance of when used with classes that were made with subclass factories. Is that—yeah, subclass factories, yes. And whether that’s a good idea or not, I can argue both ways. But the topic’s there, so the lack of instance of is less strong a point against subclass factories. That’s all.

CDA: LVU?

LVU: I wanted to reply that at least when comes to subclass factories as a userland pattern, you can argue that, yes, you can work it out with this limitation with `hasInstance`, and yes, I should have mentioned that. But you should not need to write code for basic things to work—they should work by default.

MM: I agree, having to write `hasInstance` every time you write a subclass factory is certainly inconvenient and hazard prone, and that’s why I also mentioned you could have a subclass factory abstraction mechanism, basically a subclass factory factory, and then of course, that leads to a different spiral of complexity. So I’m just tossing it out there. It’s not a—you know, it’s not a killer argument for anything. It just—it’s just saying that the subclass factory direction does not necessarily suffer from breaking instance of.

LVU: And I’m assuming the actual declarative version would just have this baked in?

MM: I’m not—I did not know that we had a declarative proposal for mixins. Mixins based on subclass factories. I did not know that. I’ll need to take a look on that. While I’ve got you, just a quick history note, which is before EMCAScript 6, which introduced classes, before that, we had a prototype inheritance that was used both to emulate classes and also to do prototype oriented programming, which died. And we also had objects as closures. You’d have exactly the instance performance pent. And I wrote the first few class proposals for ECMA 6, the first of which was intended provide both syntactic sugar for objects as closures and give the engine enough weight, enough guarantees to be able to implement it as efficiently as classes. And then traits grew out an extension of that that was still assuming engine support to make it efficient. So, yes, the objects disclosure pattern and the TraitsJS library are all unfeasibly inefficient unless the language supports them. At which point they can be as efficient as classes.

CDA: That’s it for the queue.

LVU: All right. So some thoughts and other observations around the design space here. First, it seems that most use cases require both API surface and logic, so it’s important to have abstractions that do actually allow you to add API surface without having to write It all manually. Second, not everybody’s comfortable, not every use case is okay with the—with the pollution of the inheritance chain, so there should be a way to avoid that. We definitely don’t want to have to mutate instances, so it needs to be efficient. And it needs to support encapsulation. This could have been a nice-to-have, but there are cases where we might want the browser to be able to provide certain mixins, partials, whatever you want to call them, to be used in author classes and the author classes should not be able to use them without having access to the implementation details of the browser classes. In terms of nice to haves, it would be nice if you can introspect whether a certain class is using a certain mixin,`instanceof` would be nice. We already have the priority of constituencies that says authors over implementors over spec editors over theoretical purity. I was happy to hear that TC39 also adopts the same priority of constituencies. I would argue that can actually generalize this to basically consumers over producers. The same arguments apply. And if you think of it that way, I would argue that essentially the host class—the author of the host class is a consumer of mixins, so in terms of designing an API, the ergonomics on that side should matter more than the ergonomics for the mixin author, and then you have the rest of the priority of constituencies unchanged. I would also propose that, as a design principle, avoid having the inclusion syntax in the class body rather than the prelude if the order is not actually significant. There are some programming languages where you can include the mixin anywhere in the class body and it’s just hoisted. But most hoisting causes author confusion. There are valid reasons for it in some cases. e.g. import declarations are also hoisted and I think that’s great. But I don't think this is one of them. And there’s no reason to do it: if the syntax has specific timing, just include it in the prelude. PHP traits, for example, do this properly. You include them in the class, and the order is actually significant.

LVU: In these discussions, the diamond problem comes up a lot. Like, if you look at this diagram, what happens when you call `getArea` if `getArea` is defined in both triangle and regular polygon? What happens if it’s defined in `Shape` and, well, in `RegularPolygon`? There’s all these questions. A lot of the time when people talk about the diamond problem, they’re not actually talking about the diamond problem and they’re talking about conflict resolution, method resolution order, that sort of thing, which you don’t actually need a diamond to stumble on that problem even if you just had triangle and regular polygon without shape, you would still have this question. It might be easier to answer, but these issues still arise.

LVU: In JavaScript, because we don’t have stateful subinstances, like, for example, C++, the diamond problem is a little bit more contained. We don’t have it to the same degree, because you can’t argue that what properties will this shape subinstance have and that sort of thing. Because we don’t actually have that. But we do still have the issue of avoiding duplicate method calls, like, we don’t want the `Shape` constructor to be called twice, for example. And then, again—and then there’s resolution precedence, conflict resolution with anything that adds API surface. In single inheritance, it’s very easy, predictable known semantics, and subclass overrides superclass. With multiple inheritance, it’s not so easy because what does `super` mean? There are multiple strategies and not all of them are mutually exclusive. Most languages employ multiple of them. As I mentioned earlier for and `super` refers to the parent and then have different chains for the partials, whether you call them interfaces, traits, mixins and I’m going to say partial to encompass all of them, and then `super` still does the predictable thing. You have linearization algorithms, I think C3, which was started by Python (I think?). Basically you take the graph of parents and you have an algorithm that orders them, and then you resolve conflicts based on that order. In most of them, the order that you specify the mixins in is significant. And there’s often to some degree or within a limited scope, a last one wins policy as well in addition to other factors like scoping and proximity. Many languages, error for certain or all conflicts, for example Java which I’ll discuss in more detail shortly. In some cases, you can also rename the conflicting dependency when you import it. And you could conceivably automatically compose as a default conflict resolution behavior. I have not seen any languages that do that, but I have seen userland libraries that do, I think even TraitsJS did this? The return values when you have multiple functions with the same name, the return value was the first non-undefined return value. If it wasn’t TraitsJS it was some other userland library. Could imagine a mechanism like that where there’s a default disambiguation that composes all of them rather than one overriding the others. Especially since in some use case, you intentionally want to have multiple functions with the same name because you’re basically adding side effects to lifecycle hooks, web components do this a lot. Web components have certain methods that are life cycle hooks and called at certain points, like connectedCallback, for example.

CDA: Sorry, we have a couple of questions.

LVU: Yes.

CDA: On the queue. NRO.

NRO: Can you explain what is a stateful subinstance. I never heard that term, and other delegates also didn’t.

LVU: So it’s—with the caveat that it has been a long time since I wrote any C++ so this and I don’t remember it at all, I came across this while doing research for this, but my understanding is that basically in C++, when you create an instance of a class that has a parent, then you’re essentially creating like a full-on instance of the parent as well with its fields that can have different values, like everything, and it’s just sort of contained in your instance, and then you can do this virtual inheritance thing, which basically says, like, if multiple classes are importing this class, then it resolves it in a certain way that actually I don’t fully remember. But basically, like, in JavaScript, we don’t have this completely full subinstance that you have in that language. Does that answer the question?

NRO: Really sorry, do you mean like in—you can have, like, a field full, but then a subinstance as a different—sees a different field.

LVU: And super.foo could be different. Yes, that’s my understanding. Again, feel free to correct me if that’s not the case.

CDA: MM says, I don’t remember traits JS having that.

LVU: Okay. It must be another library.

MM: I know it’s a message, and I’m going to jump in, because I also can contribute to the previous thing. The—you know, we can understand each class and an inheritance chain as contributing to three namespaces. There’s the things to be put on the prototype, well, actually four namespaces if you count for statics on the class, but I don’t want to worry about that right now. Things put on the prototype, public fields, ie, fields named with strings or Symbols, and then private fields. Which for—for which you have to—they have to stay strictly encapsulated, you have to be within the lexical scope to see them. So JavaScript does have subinstances in that—in the sense that you’re talking about even with single inheritance, because every class in the inheritance chain contributes to each of those namespaces. And the—you know, with the prototypes, you can get overriding with the public properties you can get overriding. But with the private fields, you can’t get any conflicts because visibility the based on lexical scope.

CDA: Just a quick time check. We have ten minutes left in the hour.

LVU: Okay. I’m going to go through this super fast. I singled out these two languages here. Java does multiple inheritance via interfaces, which follows the pattern of "single inheritance chain plus this separate thing". Which has a side effect, because interface implementations are framed as a default implementation, anything in the inheritance chain has precedence over everything in interfaces. Which I don’t personally think is a good idea. Like, something that is immediately provided by the interface you import could have lower precedence than a super class eight classes above you. If a conflict comes up between different interfaces, it forces the author to disambiguate otherwise it’s an error, and as a result, super references only the parent and you have a different version of super, which is `interface.super`, to reference the interface. To do the same thing for interface. Obviously the same syntax wouldn’t work but I do think some kind of mechanism for doing this sort of thing would be very useful.

LVU: Eiffel allows you to rename certain specific members as you import the traits. So by default, as you import the class, everything is imported with the specified name. But you can actually rename it. And the really nice thing is all its internal references are also rewritten. Everything still works. You don’t get errors or broken references when the class’ internal methods are calling that method. I suspect that’s not doable in JS, but I just wanted to flag it because it’s such an interesting design. I suspect some of the most hairy issues might be around should post-hoc composition be desirable, should that be a requirement, should that be something we avoid on purpose? Like someone mentioned, being able to extend the class after it’s being defined, many languages support a way to do that. Even if they don’t support it by default, they support some way to do it, like Python `__bases__`. And another issue, should the mixin class need to opt-in and be defined different than regular classes so it has to be defined that way? Or should it just be a regular class you import? Then what happens with private members? Should you be able to import private members in any way? What happens with naming conflicts? Is it explicit, do authors have to disambiguate every time no? Do we just do a reasonable thing and authors can override it if it doesn’t work for them, which would be my preference, a good conflict resolution algorithm that does the right thing in like, 90% of cases and for the cases where it doesn’t work, authors can manually disambiguate. I don’t like forcing the manual effort in advance because it might not be what they need but they'd still have to spend that effort 100% of the time.

LVU: Also you, you don’t always know what methods a class you’re importing might contain. And you might upgrade your NPM package and suddenly you have errors that you didn’t know you wouldn’t have before. And opponent are like, well, the errors are make you notice and otherwise you might miss it and then function composition, again, should we run all the functions and pick all the return—what return is through something reasonable or implicit, we page precedence about which function wins, and if authors want composition, they can dot themselves. So perhaps I wonder if one way to make progress is thats seems that there are two different categories of use cases. There's the loosely coupled use cases where both the mix-in and the host class are defined by different people. Sometimes there’s even three groups, the host class author, the mix in author, and the person adding the mix in to the class, which might all be completely different. For example, I may want to import a browser provided mixin and add it to lit element, even though I haven’t written lit element. Things like that.

LVU: But there’s also the tightly coupled use cases where you are maintaining all parts involved, and you’re just doing it for modularization, for code reuse, and in these cases, you usually can get away without sophisticated conflict management and post hoc application becomes less important because you can go to your class definition and modify it. It does seem that these have different characteristics. So maybe—and it does seem that a lot of the debates are around loosely coupled use cases, even whether they should be possible at all for some of them. Whether going where as the tightly coupled use cases don’t seem to bring up a lot of controversy. So I wonder if a path forwards might be to add certain high level primitives to make the tightly coupled use cases easier and explore what low level primitives would make the user-land helpers easier for the loosely coupled use case, make them less painful, and later—and we can later come up with a higher level API. And that’s how the class spread syntax came by. It’s designed for the tightly coupled use cases, and the fields introspection one is to make the loosely coupled use cases easier. But also if both of them go forwards, fields introspection can explain part of the spread syntax rather than having it be magic. That was it for the first part.

CDA: All right on the queue we had JHD. No new forms of hoisting ever, please. And then we have WH.

WH: Linearization goes way back. In Common Lisp, the CLOS had linearization, which combined with multiple dispatch made for some really interesting behaviors. It makes me reluctant to do anything which deals with linearization any more. It mostly worked.

CDA: ACE?

ACE: It’s only somewhat related in that the reason maybe why someone is trying to compose multiple classes in the first a place, if they’re doing that just because they want something to have a certain method, then the other proposals in that space are like the pipeline and the bind operator. So then that just—getting that on the record, I think they are on the, like, outer orbit of this space as well.

CDA: Nothing else on the queue. Oh, MF?

MF: Okay, so I do like your framing—the way you differentiated that there really are two kinds of problem spaces with the tightly coupled and loosely coupled use case. I do agree with that. On the tightly coupled use cases, I’m not—I don’t find them terribly convincing. Like, they don’t feel like they’re in as much of a need for us to take action. The—you know, subclass factories didn’t seem like such a bad approach, like, the downsides to them don’t seem so bad. Also for what I mentioned before of, like, just trying to take a class declaration and split it into multiple parts that you own just because you find it nicer to be in files, like, yeah, I guess that’s like something you can aesthetically prefer, but it’s not like there’s some strong need here. I’m not—I don’t find it super compelling. On the loosely coupled use cases side, though, that as you mentioned, is a much harder space. And I am looking forward to seeing the rest of your presentation, which you say is going to be talking about that more. But in that space, we need to absolutely reject any solutions that have the conflicts problem that you’re talk about. You know, you mentioned conflicts and said how you would prefer there to be like a conflict resolution strategy built in that works most of the time. I think that’s way down-playing the seriousness of those conflicts. Having a library upgrade and having it work is actuality the scary part, not having it not work, right? Because having it work means it did some kind of conflict resolution and picked one for you and you don’t know what that is. You didn’t make that decision yourself. I don’t want to go any further with this comment. I’ve not seen the rest, but I just wanted to, like, put that as that’s how I’m feeling at this moment.

CDA: Okay. LVU?

LVU: It was actually a new topic not a reply. I wanted to say, there are basically two ways to go about this problem. It seems extremely heavyweight to add a separate property resolution mechanism, usually the discussion becomes around how can we have nicer sugar that desugars into the existing primitives. There is always that option as well, though. I suspect it would be a nonstarter, but it does come up sometimes.

CDA: All right. I know there’s still a couple of topics on the queue. It would be great if we can get to this them but we’re now into the next hour. We should probably move on to your proposal topics.

LVU: Which is again me. So, class spread syntax. And that came out of that exploration, it’s not intended to solve everything, but I was thinking are there any low hanging fruits here? Any easy quick wins? As much of something can be a quick win in standards…

### Speaker's Summary of Key Points

* There is generally a lot of interest in these problems, even if there isn't consensus on the specifics
* Some skepticism around whether new solutions are necessary
* First class protocols might be able to solve these problems with a few tweaks

### Conclusion

Let's keep working on this.

## Class spread syntax for Stage 1

Presenter: Lea Verou (LVU)

* [Proposal](https://github.com/LeaVerou/proposal-class-spread)
* [Slides](https://webplatform.design/projects/class-composition/talk/#class-spread-syntax)

LVU: The core idea is for other types of structured objects, such as arrays, iterables, objects, we already have a version of the spread syntax and it doesn’t work identically across them. There is presence precedence for that. In object you can spread undefined and arrays you can’t do that or empty array and things like that. There are differences. So I was thinking if we do end up adding multiple primitives for class partials, what would a low level partial look like? What would that basically makes it easier to just low level pull in methods without affecting the inheritance chain, without even having observable effects. And the spread syntax is something that we already have in other parts of the language, so it comes with certain semantics already attached to it. So hopefully—the hope is that that manages expectations from authors. And I’m thinking for the use cases—for it to work for its use cases you basically need to copy by descriptor, not by value. That is a departure from how object spread works. But as I mentioned already like there’s already differences between the existing spread syntaxes that we have. And the hope is that because spread syntax is low level in other objects like when you’re spreading two objects, we don’t do any particular sophisticated conflict duplication. If you have duplicate keys, the last one overrides the previous ones. I hope that manages expectations around that. And the idea is because it’s order sensitive, authors can always override things by adding things after it. So the core idea is that basically any—you can take any class and spread it into an any other class with the syntax. It would be order sensitive. So if you want to override certain threads from the mixin class, you add them after. And the class that you’re spreading does not have to know it’s being spread.

LVU: But also a lot of—many use cases benefit from spreading actual objects, that are not classes. You should not have to define a class wrapper around them. For example, the use cases around modularizing a class definition into separate files. So ideally you should also be able to spread objects. And you should be able to spread both static and instance members from the same objects—from the same objects. So the current proposal involves like you can use a prototype property to specify what the instance methods are, which kind of makes it a little lower level, little closer to the userland helpers around this. Use cases, we’ve already seen most of them but it does also enable dynamically API surface because the object doesn’t have to be fixed. You can be generating it right there in the class definition. So the class modularity use case that I presented earlier becomes as short as this. And it means that adding a new method does not have to be added in multiple places. It can just be imported and spread and you can have a file or something and just spread them all. And then the procedural case where you have functions that you want to be usable as functions or methods, that also becomes a lot simpler. You can use it to dynamically generate the API surface for other patterns like when you’re using the delegation pattern including element internals and the form associated case that we saw earlier or even when writing glue code for first class protocols assuming we don’t have the string thing. Like, you can actually use it together with other patterns to generate the glue code. It will not be as nicely typed in that case probably. But that’s okay. Not everything is. We have many other things in the language that aren't.

LVU: In some cases, you might even want to dynamically generate API surface to make repetitive code more DRY like Babel was doing. The same Babel file has this code that adds certain methods to the prototype that they’re just dynamically generating because there’s a bunch of them. And yes it can also serve for very rudimentary mix-ins. It is not great for mixins. But it does mean that simple things are easy, it does not pollute the inheritance chain and is completely transparent. If you don’t want to expose that the mixin is there to the outside world to the consumers of your class, you can. Even `super`, works just in a different way than it works with subclass factories. I think that is actually a very useful way as well. So in subclass factories, super refers to the class with all the mix-ins before your mix-in already applied which means you don’t quite know what you’re getting. Super could be anything depending on how many other mix-ins are also applied and you just have to be okay with that whereas when you sign methods through assignment as well, super still works, but it points to the superclass of the original class. But in many cases, that will also be a superclass—that will also be apparent in ancestor class of the host class as well. Like, in web components, for example, you could write your mix-ins to extend `HTMLElement` that every web component extends as well and apply to the web component, `super` will work and it will just point to the HTMLElement which is kind of more predictable. But it also means you don’t get private members. Private members would just break. You don’t get the dynamic super that some people might like about subclass factories. You don’t get introspection. Once it’s spread it’s gone. There’s no way to distinguish. You can’t do post-hoc application and conflict resolution is not pretty. Like, there are no abstractions to deal with it. This is not meant to be the begin all and end all of class composition. This is for specific use cases. It plugs a gap and meant to be the low level feature and doesn’t have bells and whistles but I think it serves a useful purpose for these use cases. It doesn’t have the inheritance chain pollution of subclass factories and it does add API surface. One design decision that I struggled with a bit in the first version of this proposal, I was branching based on whether `Object.prototype` was there. If you had something that was spreading the object. If not, it was spreading the object. And importing a bunch of methods and spreading to the class but less predictable and kind of weird and kind of magic. And I think just having to specify a dummy object literal with the prototype property is probably clearer and more predictable. And there’s also the other question where if you’re spreading the class that defines fields and your class also defines fields, then if you do completely naive low level everything overrides everything semantics, then the field—then the class field also override your field. That seems that is almost never desirable. I can’t think of any use cases where you actually want this. So maybe there might be value in not having completely naive ordering semantics. Maybe fields would be different and they would always override. I don’t know.

LVU: So that was it about class spread. Is it a good problem space to work on, I guess?

CDA: All right. Lots of items in the queue. WH.

WH: I think we lost sight of what APIs are used for, which is abstraction. An abstraction is a contract between the class or abstraction author and its users about which lets the author of the abstraction change the internals or things inside the abstraction without breaking users. Abstractions are key to the language. Adding features to the language which break abstraction can be very damaging. Here I see this proposal break abstraction of all existing classes in a number of different ways. If you have an existing class and you want to add a private field to it, you can usually just do it without breaking users. But if any of your users happen to use class spreding on your class then you’ll break them. So now there’s an internal refactoring that class authors could do before this is added to the language that they can’t do after this is added to the language even if they never use it. Another thing that you might often want to do as a class author is to add an extra method. Now, I’m not talking about things like `Array.prototype` that are heavily monkey-patched—I’m talking about just regular classes. Usually it’s a transparent operation and nothing bad happens if a class adds a new method. But if this is added to the language, then that becomes a significant risk of being a breaking operation for every class, because somebody could be using it in a spread. So I see this as negatively affecting abstraction for code which doesn’t use this feature. And I understand what this is trying to do, but I think there are safer ways of doing it. This one seems particularly dangerous.

LVU: I wanted to reply that it seems to me that that ship sailed. It doesn’t expose any class implementation details that are not already exposed with one exception that is public fields that I will argue in the next proposal I think there is a way to expose them any way independently of class spread. Aside from that, you can already have helpers that modify the prototype and do all these things.

WH: I think that missed the point of what I just said. The queue is long so I don’t want to dwell on it; let’s continue.

ACE: The thing is the fact that we’re encouraging people to spread other classes, the class never said "I’m spreadable". I think it’s like—it’s designed to be spreadable and should declare it’s spreadable or otherwise people will raise an issue, I tried to spread the class into mine and didn’t work. You just say I never intended the class to be spreadable in the first place.

MAH: So I think my concerns are very much related. There’s a lot of things classes can do. They have a constructor behavior, they can declare public or private fields, all those things, and I do not understand what the semantics of those class features would be when you start spreading a class. So my feedback here is really for the specific class spreading approach, you’re bringing forward, I don’t see how it can work really in the general sense of using a class as the source of the thing that you spread.

LVU: Should I—yeah, this is my bad. This is actually mentioned in the explainer and I just realized I forgot to put it in the slides. The idea is the constructor would not be spread. That is why you need to be able to port the fields separately. But the constructor itself would be basically ignored. Otherwise, in most cases, you would end up with very weird results. Private fields would not—like, private fields you would basically the actual fields would not be ported. If you have methods that refer to them, you would basically get the same result as you get today when you try to assign a method from a class' prototype to another class and it’s referencing a private field: you just get an error. Like, if you want to use class spread, don’t do that. You kind of have a similar issue with proxies today. If you proxy a class with private fields you also have problems. It’s not ideal. I don’t see any other way forward. If we say that private fields are all supported, that would never fly. And I don’t think it’s possible to port them and have them resolve to a different thing. Just making them not work just seems to be the reasonable thing. What else was there? Oh, and the idea is that this is low level enough that superclass methods are not ported. You can spread the superclass separately if you want them to be ported. But it seems that making that explicit would prevent surprises. But that’s an open design decision. Like, I don’t know if that’s the right way.

MAH: Right. So I mean, I will restate my concern here is that a class doesn’t seem to be the right source for this. This is what Ashley and WH I think just mentioned. Classes have a lot of other things that they—what they implement is not compatible with being the source of a spread. It sound ss like the only part of a class that is acceptable is basically a method, basically the behavior that is completely stateless. or that is using the state of the thing that is being spread into which seems like application which is another proposal that was mentioned in the related realm here.

CDA: I moved NRO topic up because I think it’s appropriate because we only have just over ten minutes left for this topic.

NRO: I think the discussion like what happens to the field or to the superclass is all great discussions to maybe have. It’s a little bit too much detail for Stage 1. The Stage 1 should pretty much open to different shapes of the solution.

MAH: Can I ask classification on what exactly is the problem statement for Stage 1?

JHD: Queue item if I can go to it.

CDA: JHD.

JHD: Thank you. It seems like you’ve listed some of the problems that this is attempting to solve. One of them is mixins. I actively diswant that solve. Mixins are bad, I don’t want them. Don’t want affordance for them in the language, they shouldn’t do that. As far as the other cases like polymorphism and stuff I thought we don’t like that as an ecosystem generally and it causes performance issues when they are polymorphic like engines and there was decades of that and makes the TypeScript types or the real or conceptual type definitions more confusing of things. Beyond the things I just mentioned that I’m not interested in solving, I wouldn’t want that to be part of the Stage 1 proposal, what are the other things that you think to you this is solving? What is the problem statement beyond mixins and polymorphism to Stage 1?

LVU: Add to the queue or just reply?

CDA: Just reply.

LVU: Okay. It’s basically the use cases of the problems that I listed here, I think if you agree that some of them might be worth solving but not all of them, then that seems to me it’s still within Stage 1. But I mean, I don’t know. Like, if you think that objects being spreadable, for example, would be okay for modularity but maybe we shouldn’t be spreading classes for some of the concerns that were mentioned, like, maybe future evolution of the proposal would only include objects. If the class part is too controversial. So basically class modularity, polymorphism you mentioned the issues with polymorphism with the signatures and that doesn’t apply to the kind of polymorphism I was referring to with two versions of the API and sharing logic and that you can do in the efficient way and you can do it makes the functions polymorphic and there are way to make the functions polymorphic and the procedural version of the API are performance sensitive we don’t do the polymorphism in the functions and import the functions and then wrap them for the objects-oriented version that doesn’t have as much performance issues, performance considerations to keep the procedural one very fast.

JHD: And I wanted to—you mentioned object spread. The presented motivation for the feature and the use of it in like JSX before that was not for mixing functions together, it was for merging data. So obviously because functions can be data, there are properties on objects and spread functions, that’s not what it is for. It is for mixing info together. And so the existence of object spreading doesn’t I think justify the existence of spreading like class static and prototype functions from one to another. I think that needs its own justification.

LVU: Regardless of what object spreading was designed for, it is very widely used for spreading functions which as you also point out can be data. And another use case is also the whole thing around dynamically generating API surface, which presumably like the delegation pattern is in very wide use both from browser native APIs and platform native APIs and author APIs and it makes—it comes with all these advantages except the issue that you have to manually write all the code and helps make that more palatable and if you use the delegation to make it easier without mix-ins, maybe you don’t have to use mix-ins for all of these things.

CDA: We have just a few minutes. I will ask everyone on the queue to please be brief. MM?

MM: Can you return to the code example of using spread with the triangle example. This one. So in this one—regular polygon. If I have an instance of an equal lateral triangle instance of regular polygon and understand the semantics of the class spread you’re proposing the answer will be false, correct?

LVU: Yes. Can I answer to that?

CDA: Yes.

LVU: Yes. Like I said, yes. So ideally the polygon case you want multiple inheritance. Perhaps it’s not a good case to demonstrate that. I think the Prism example is better.

MM: Could you should that example?

LVU: Which was around class modularity. But basically in the polygon example, polygon is spread as a mixin. Ideally agree it should not be a mixin. It is the identity of the object. Since we don’t have multiple inheritance, it can be used for that as well. Otherwise, you can’t have—like, since we don’t have multiple inheritance, there’s no primitive in the language that will do this.

MM: Can you go back to the pros and cons for subclass factory.

LVU: Yes.

CDA: We have less than five minutes now.

MM: I will just make my—so no instance of checks. That’s with regard to the mixed in class and the object spread has the same problem. This is not an advantage of object spread over—

?: Yes.

?: Okay, good. That was the point I wanted to make. Thank you.

?: Thanks.

LVU: There are use cases where you want it to be transparent where you don’t want to expose where a certain part of the API is coming from, and I should have put that here as well.

CDA: Okay. EAO?

EAO: So looking at this, what I’m struggling to understand if you go to the prism example, this one, yes, the capability of doing the thing on the right is already in the language in that if you leave the body of the prism class completely empty and add a new line `Object.assign` for `prism.prototype` and second argument methods would that be doing the thing you’re looking to do?

LVU: No. You want to copy by descriptor. You could argue made we need the version of `Object.Assign` (`Object extend()`?) that does copy the descriptors. There is that. Even if that, then you have the class definition to places which doesn’t have good ergonomics. If you do it completely imperatively, the hope is—if you look at the first example, I don’t have to repeat the functions. I have to repeat the signatures. If you look at the source code there’s JSDOC and to get types you have to duplicate that part as well. My hope is that if class spread syntax becomes a thing, languages like TypeScript might also be able to read that and produce proper typing without having to do all the song and dance.

CDA: I know there’s still a number of items on the queue. We don’t have time. If you’re wanting to call for consensus to advance, you should do that now.

MM: I’m sorry. I still need clarification on what the problem statement is which is the thing that we’re approving for Stage 1.

LVU: Improve the ergonomics of code sharing across multiple classes.

MM: So a possible answer, just want to make sure I’m understanding the problem statement, a possible answer of the investigation might be people should use subclass factory; is that correct.

LVU: Improve ergonomics of class sharing that doesn’t pollute the inheritance chain.

MM: Giving the discussion of instance right now, I don’t understand what you’re saying about polluting the inheritance chain. Seems like the subclass factory is properly putting taxonomy into the inheritance chain that makes it more expressive.

LVU: Yes. You’re right. It was a bad example. If in the polygon example, yes, absolutely. If you could have instance of regular polygon work, that would actually be a good thing. But in the prism example and just using it for modularity you don’t want to have the separate e.g. PrismMethods class showing up in the inheritance chain to let you modularize the methods. It's an implementation detail. And inheritance chain is part of the public API and not a field and method, but it is exposed. You don’t always want to expose it. In subclass factories, the problem is that you do still expose that inheritance chain but meaningless because you’re getting the override every time unless it has `hasInstance` in all of that.

MM: Right. Okay. So just in terms of asking for Stage 1, I will just give you my reaction. The first point of what you said you want to investigate before I challenged it where it would include taking a look at existing patterns with the possibility of saying, well, just use, you know, this pattern if you have this problem as a possible answer to the investigation, I would approve that for Stage 1. I don’t feel strongly that any of these mechanisms that you have shown are an improvement over what you can write in user code today. On those grounds if the problem statement necessarily involves things like class spread, then I just find it implausible, not necessarily saying I’m blocking, but if it was the more general problem statement, I would certainly support Stage 1.

LVU: I don’t think it needs to involve class spread as long as it satisfies those two requirements. I think those two requirements are essential to the problem statement. Otherwise, we already have ways to solve the problem.

MM: Well, we already have ways is exactly the point that I’m making. I want you to proceed with the investigation with the possible answer being that the ways we have already got dominate the ways the possible additions to the language.

CDA: All right, we are a couple minutes past time now. MM, I mean, I guess, this is also a question for the entire committee, do we have a good understanding of the problem statement that we would be asking to advance?

???: No.

JHD: Well, Lea said earlier and I will paraphrase to get it right exploring ways to make it easier to, you know, share code across classes with some other caveats, is that essentially right?

LVU: Yes

JHD: So assuming that’s the problem statement, personally I’m okay with that going for Stage 1. But it wouldn’t—I would not ever want anything remote mix-in to be the solution. But I have no idea what a solution would be because the way I share code across classes is either inheritance or separate functions that I import and call and that’s okay.

CDA: MAH?

MAH: I’m just trying to—general question. Are there any Stage 1 proposals with a similar problem statement already and whether that can be combined or do we need a new proposal here? And more question for the committee, do we feel there are existing proposals where this is overlapping already.

JHD: I think the existing mix-in proposal whose champion not returned with it is not part of TC39 anymore could certainly—we could certainly withdraw that in exchange for this one since Lea is going to continue exploring it. That would be fine.

CDA: I’m noting on the queue all of the things people are saying. And given the time and that we’re now nearly five minutes past time, I think—I mean, LVU the next topic is yours. Up to you whether it can be fruitful to continue this topic to see if we can come up with a succinct problem statement and ask to advance that or punt for now and move to your next proposal?

LVU: I quite like what JHD suggested because ultimately what I want to do is not specifically the class spread syntax. I want to solve the main problem around mix-ins. But it seems that there should be something more concrete. So there is something more concrete there. But honestly I just think the main premise is that I don’t think the existing mechanisms in the language are sufficient because they have different pros and cons and they might be perfectly sufficient for some use cases, but not others. So I think there’s still a gap. And I just—the main thing is that I think there should be a new language feature or more to fill that gap. I don’t know what that looks like. It may look like spread. I don’t think—it definitely wouldn’t be plugged completely by spread even if spread goes forward. I’m not married to spread. The main thing is I want the problems to be solved. The main thing is I do see that—I think there are problems there. So I guess if you think that there are no problems and the existing using length methods and the existing languages are perfectly sufficient, let’s not. But if you do think they’re not sufficient and just don’t like class spread, I personally would be totally happy to explore other solutions. I just don’t think that existing methods are enough.

CDA: All right. I don’t know if this would be sufficient to—you know, I note WH’s comment and understand the problem statement and again LVU we’re eating into your next proposal topic time. I think, you know, we can put pen to paper on what JHD paraphrased or whatever and flash that up and ask to advance based on that and, again, I don’t know if that’s enough to assuage the concerns here, but let’s at least give it a whirl.

JHD: I put it on the queue so everyone can see the phrasing would be. I see Ashley’s clarifying question in general—

ACE: Can I ask my clarifying question? Lea mentioned not tied to the spread syntax the name for the proposal is class spread syntax, if we’re also deciding what the problem name is, I would rather we also—if we do get Stage 1 and the problem space is not—is wider than spread syntax, it shouldn’t be called class syntax.

JHD: Generally refine the problem statement as part of the Stage 1 transition the proposal is also renamed to match.

LVU: Yes. I think we would do that here.

CDA: Okay. So calling for consensus to advance to Stage 1 based on the following problem statement that is exploring ways to improve sharing code across classes.

MM: Okay. Exploring, with that as the problem statement, I support Stage 1.

CDA: Okay. MM supports. Do we have any other voices of support? MAH is +1. But would like all related proposals to get a group call together. Okay, I think that’s a good idea. Support from JHD. Let’s mark mix-ins as withdrawn as well. Do we have any objections to Stage 1?

CM: Yes.

CDA: We do.

CM: I find the articulation that JHD has tried to come up with which is I think well intentioned sufficiently vague that I’m just nervous, because the stuff that has been presented feels like here is a whole panoply of power tools for amplifying chaos. I’m unconvinced we will not go further down the road until I see a more articulate vision of what direction this proposal is trying to go. And I think the framing that JHD presented I think is something I could get behind, but I’m not convinced this is going in that direction based on the presentation I just saw.

CDA: Okay.

WH: I second that.

CDA: All right. So this proposal in the current shape of it does not advance to Stage 1. We will be moving to the next topic.

### Speaker's Summary of Key Points

* There is a need to clarify the problem statement
* Mixed views on whether class modularity is a problem worth solving. Some delegates feel large classes are unavoidable and modularity helps manage them, others feel that large classes are an antipattern and/or that existing language features are sufficient
* Some concerns around whether exposing private fields through class spreading violates abstraction

### Conclusion

Class spread syntax remains at Stage 0.

## Class field introspection for Stage 1

Presenter: Lea Verou (LVU)

* [Proposal](https://github.com/LeaVerou/proposal-class-field-introspection)
* [Slides](https://webplatform.design/projects/class-composition/talk/#class-field-introspection)

LVU: So the next topic is class field introspection which is somewhat related but it’s independent. The core idea is that public fields are a part of the class API surface. In other languages, there’s not even the distinction that we have around methods and accessors go on the prototype but public fields are handled in the instance and feels like a bit of an implementation detail. Yes, it does have observable side effects, but it’s kind of nonsensical to hang data properties on the prototype so that is what we have. And public static fields can already be introspected by just looking at the properties of the constructor, but there is no way to introspect instance fields, and you could argue that you could just create an instance but creating an instance is not side effect free. So it can be argued that since fields are basically incorporated into the constructor, they’re just as much an internal detail as the constructor’s actual logic. However, in practice, the decision between using a field or an accessor is somewhat incidental. Like, do you need to run code when something is being read or said? Then you use an accessor possibly paired with another—usually paired with another property to store the actual value. Otherwise, if you don’t need any of that, you use a field. But today the accessor version of this can be introspected by just looking at the prototype, but the field version of this cannot be. And also it means if you start with the field version and then you switch to an accessor or vice versa, then your class goes from I can introspect these fields to—I can’t now anymore. Also there are even cases where people are defining or assigning functions to fields for certain good reasons like maybe they want to dynamically assign a different implementation based on some factor, it happens. It’s not great, it’s not performant but it does happen. One can be introspected and the other cannot.

LVU: But why would you want to do that? For one, there’s a lot of userland helpers that do what class spread is doing by attaching things on the prototype, and they can import accessors and methods but can’t look at fields and they can’t port over fields. Also all sort of debugging tools. A lot of meta programming use cases need to be able to know what the shape of the class is, and right now there is no good way to expose the complete shape of the class. And based on incidental things, parts of the class shape are hidden today. So this is kind of a strawman just to get the conversation going of what something like that could look like. Basically you could have a Symbol method that possibly returns a frozen array of objects with non-writable, non-configurable properties and argue maybe it should be instead a function that you call in returns in array because then you don’t have to freeze it. I think that there might be—like, down the line, there might be cases where we want to make some of them—some of these mutable to some degree. Like, maybe we want to allow adding new ones later. Maybe we want to allow changing something. Like, I’m not proposing that we want to do this now. But I can sort of see it happening. And if we end up having a method that just returns an array, then we would have to add like a you bunch of methods for every possible mutation. The other concern is this might be too much detail at this point but I was having conversation with the V8 implementer the other day and I realized initializers should be lazily evaluated, you shouldn’t have to produce all the functions from the get-go for every possible class, like, that would be slow. And if you read the data structure, you might not need all of them. Like, you could have an accessor there that just computes the value, creates the function when it’s actually called. And I think even if initializer can’t possibly be exposed for performance reasons, I think even just knowing the names that exist can be useful for some use cases. Although it does cut down the set quite a lot. You can’t import—you can’t add behavior to classes without knowing like what you’re initializing to. But at least for things like dev tools and you can generate UI around this. And you could argue that—I can see arguments about exposing private fields. You can argue they can be obtained already. But it seems much easier to just not expose private fields. And I don’t see any use cases for wanting to know except perhaps dev tools. Okay. That was short. So the problem statement is figuring out a way to expose more details about the public fields in the class. What the details are is TBD and how to expose them is TDB and this is just a strawman but basically the core idea is public fields are API and API should be introspectable.

JHD: Public fields are not actually the API and they are sugar for what will be the API potentially. You can have a public field callfoo and constructor can delete this.foo and that’s not in any way part of the API. And in particular they’re just sugar for like `Object.defineProperty` I guess, but otherwise it would be this dot foo equals in the constructor. Don’t introspect what it does in the class. Outside of source text, the context of a function and class syntax is sugar for making a function and a prototype. So you have an object and you have—you have two objects basically to introspect. If you know there’s no side effects you can substantiate it and learn more about it. You can’t learn what the function is going to do before you call it in the programmatic way and refactor things and potentially expand the API. I’m sort of if I can understand the desire to have an idea of what an instance’s shape will be without constructing one but the fields aren’t the shape.

NRO: So I disagree with JHD here. I think we should encourage the class shape to be defined statically and better for engines and people reading the code and so I think it’s fine if moving forward we design APIs that say this is the class shape even if you cannot change the object that is not the public contract that the user—the developer using and reading your code will see.

JHD: I think that can be reasonable for the names of the fields maybe but not their values for sure.

LVU: So what is the API method to declare a data property that doesn’t need to run any code and is exposed to consumers of the class?

JHD: `Object.defineProperty()` in the constructor and this comma and the name of the data property and then a descriptor whose value is the thing you want.

LVU: That’s completely imperative. We could never introspect that.

JHD: Correct.

LVU: What is the declarative way?

JHD: There isn’t.

JHD: I’m open to exploring that personally. But fields are not the shape of the instance. Whether they should be or not is the separate discussion. But fields are just sugar. Whether you write them in the constructor or imperatively in the class body is up to you and doesn’t change the API of your object.

RPR: Is there actually a disagreement here? I think you might be saying the same things.

MAH: So in my opinion, public properties like that are a part of the API of the object. However, if we’re going to do this, I want to find a solution that is—that basically allows any way of declaring those fields, of those fields appearing on your object to support any of those. I don’t want something where if you refactor from the constructor install fields to class declared fields for that to be different. So we need to find the solution that basically if you want to do a declaration of the API as a field, however the field is, whether it’s accessor or whether field and installed by the structure or the class structure, it all needs to—it’s still a part of the API.

RPR: Ron?

RBN: Just wanted to say that public fields are introspectable and field decorators and decorator proposals so we already have one way that we—it will hopefully eventually get to that does have a way of looking at information about the field declaration. We just don’t have that reified in some way to be reachable outside of the class. And I do think that’s unfortunate that we don’t have any type of introspection even if nonmutable form of introspection for fields. But public fields give you the ability to attach meta data and the like so there is kind of a way to get to them at some point but requires explicit opt-in by annotating fields with decorators to make that useful.

LVU: I added myself to the queue to say if you add the decorator to the field, you already know the field exists, and you cannot into spec field in the class decorator the last time I checked unless that changed.

RBN: My point is we are already with the field decorator field giving you the way to look at the field declaration that we already give to everything else. So we have kind of this half way of getting some of the information that’s there so we—it’s not that we can’t do this, it’s just that we have chosen not to so far.

LVU: With decorators get access to meta data around private fields as well that you probably don’t want to expose to the outside world but in terms of the API shape, I think that makes sense.

RPR: Halfway through the time box. Still quite a few to get through. Consider if the questions are Stage 1 relevant. Matthew?

MAH: Yeah. I fully object to private fields or initializers being exposed to this. This is not part of the API of the object. Nobody outside—this is an implementer detail and nobody outside of the object should be able to glean that information unless made explicitly available by the class implementation.

RPR: Just to clarify, are you objecting only to private field initializers or all of them?

MAH: Objecting to private fields and field initializers.

RPR: Just the private field initializers or all field initializers?

MAH: All field initializers.

RPR: Okay. Matthew?

MAG: Thank you for clarifying. That’s a problem this meeting. Why do you want the initializer function to be clear? I don’t understand it. As an engine implementer I would certainly block on exposing them because they’re synthetically generating functions and I freak out at the idea of just being like, hey, you can stamp this weird synthetic function on to anything. But like I want to understand why you want them.

LVU: For use cases around porting things from one class to the other basically use cases similar to class spread you need the initializers as well because otherwise you have no way to port the fields over either. Use cases like dev tools that you don’t need the initializers and for cases where you do—for class decorators, I suppose you could get away without having the initializers as well. So it’s mainly for like the case of porting fields from one class to the other. So as I said, I think there is less value without the initializers but there is some. Like, I don’t think it’s a complete killer if we can’t do initializers. The problem space at this point is should we expose something about public fields? Are public fields part of the API and should we expose something, some of their details? It is not about the specifics. The specifics are just there for discussion. Yeah.

RPR: Okay. Back to Matthew H.

MAH: All right. So I think I need a clarification on the use cases here. I do not actually understand why it’s—why do we need to know which public fields are available and it does feel like some of the use case seem to be about some kind of interaction about shape that is expected. In which case is there any way for the class to have a protocol based interaction or something where they can explicitly say this is the field you’re supposed to you’re if you’re not already expecting a sufficient shape? So I suppose clarification on the problem—on the why automatic discoverable is necessary?

LVU: Should I—

RPR: If you would like to reply, please.

LVU: Oh, okay. It’s basically for the same reason that we expose all other parts of the class API for the same reason that all these metaprogramming use cases need access to these things. Like, the argument is that we can already do this if you just happen to define your fields in a different way and it should be—it should not matter how you defined them. But basically the use cases that were already mentioned were around sharing code. From one class to another. Anything around displaying a class API details or wrapping them, doing something with them, you might want to have the explainer actually has a lot more use cases, so let me try to find that part. (CHANGE WRITER)

LVU: Right, if you have a userland helper, for example, where you want to generate accessors to implement the delegation pattern, basically what I showed in class spread, but without the spread. Like, you can still do this with an actual function that—where you pass the class. But if you can’t introspect the actual fields of the class that you’re delegating to, then you can’t wrap them in class that you’re defining the accessors. Hmm?

JRL: Can you make it larger please?

?: The font.

LVU: Oh, yes, yes. So, like, the element internals use case that I showed earlier, like if you can’t see that labels form and validity are there, then you also—you can’t wrap them. Although, I mean in, that case, those would actually be accessors. But just translate this point to an actual user class.

RPR: Mark Miller.

MM: So I want to return to the issue of abstraction and keeping a very strong distinction between the provider of the abstraction and the consumers of the abstraction. And ideally, implementation details remain only visible to the provider and are hidden—and are hidable from the consumer. Decorators enable introspection in a lot or—for a lot of this information, but it’s from inside the provider. Ie, you have to have—you know, you have to opt in by syntax as the definition of the class to give the decorator access to the classes’ internals. The protocol, explicit protocol that Mathiu broughten, up, lets you provide an explicit API for if you want to call it ex-trospection, and your accessor case interesting because the mechanism you’re proposing is one that enables code outside the class for a class that has not opted into this thing at all, suddenly code outside the class can see more about the class, which very much breaks the normal programming understanding, programmer understanding of what is a transparent refactor. Whereas, the accessor looking at the field from within the same class hierarchy, or actually from within the same class is actually introspection, which as a problem is fine, but the mechanism being used exposes those implementation details. That’s it.

LVU: Do classes opt into having their prototype exposed?

MM: The prototype is a very good point. They do not, and your criticism in the previous presentation of the exposure of the prototype chain itself being the leaking of mechanism that was stated by the programmer purely as part of the means of providing the abstraction, the fact that prototype chain is visible, does violate that principle. And it’s unfortunate. But I don’t—to the extent possible, I don’t want to add more violations to that.

RPR: Okay, we’re coming up on time. I think probably the next two queue topics are essential to getting there, so Lea says I think the core point is whether you consider public fields API or not. Ruben?

RBR: So I have a different view about myself when I proposed my first proposal here. And in this case, it’s make the problem statement as clear as possible. Like, a lot of the wording that was used is, for example, it can be useful for some things or you might want to and, like, without providing the very complete things. When you use you might want to, you did show something after a while, you know? Like, even though I didn’t follow it completely in that moment, but, like, I’m still struggling to really understand that aspect. Like, what is—what you want to achieve? Actually, when it comes to introspection that I can think about, I do know two ways of seeing that, and one is actually to call string on the class, where I see all these fields. So it is exposed to such. I know everything. I can parse this, and I have the information that you want. On the other hand, I also have a debugger protocol, for example, in V8, where I can also see even prior fields, and I can do that at run time. I can initialize all that. So I’m not sure what we gain, anything in addition from what we have, I don’t understand.

LVU: Can I answer?

RPR: Yes.

LVU: So that was actually mentioned. It was part of the motivation around, like, you could argue exposing private fields as Weller because they’re already visible. The initializers are already visible. It’s just really hard. Because you don’t want to have to include a parser.

RBR: I believe it is intended to be hard. You know, I believe that’s a positive thing and not a negative thing.

LVU: I guess that boils down to whether you consider public fields API or not, whether you consider that they should be visible or not. I don’t understand—like, why do we even have private fields if public fields are also an implementation detail? Why do we have private methods in the prototype never should have been exposed? It seems to me that we already have hiding mechanisms for these. I’m not arguing exposing the list of private fields, even though I wouldn’t object to it either. I don’t think you should ever have to parse JavaScript code. Like, I think, you might disagree, that every time authors have to manually parse `function.toString()` output, that indicates a gap in the language.

RPR: Okay, given the time, Lea, would you like to give the shortest statement of the problem domain? I think that might help before we ask for stage 1.

LVU: Should we have a—the problem statement as in, like, what we’re trying to do in—for example, should we have a way to expose metadata not—what metadata those would be is TBD. Should we have a way to expose some metadata about public fields, about class public fields?

RPR: Okay.

LVU: Yeah.

RPR: All right. So we’re going to pause with the queue for now because of time. And so we’re now asking for Stage 1.

MAH: I suppose it’s a clarifying question. Do we want to expose that metadata implicitly or explicitly? Do you want to specify some automatic behavior of doing that or do you want to specify a synchronization point on how classes can opt in into doing this?

LVU: I think the whole point is for classes to not have to opt into it, otherwise there’s already existing mechanisms that they can expose data to the outside world, so I think the utility would be far diminished if they had to opt in, because it cannot be relied on to be available in all cases.

MAH: Okay.

RPR: Yeah. All right. So we have support for Stage 1 from Chris. Do we have any other support? I’m not seeing anything in the room or on the queue. Okay, I think, Mark, you have objections?

MM: Yeah, so the objections come down to two things. One is that decorators already satisfy the problem as stated. And they do it from inside the provider code, not from outside a class that is not opted in. And with regard to doing it from the outside, the refactoring hazard is real, which is right now, there’s a tremendous amount of code that dates from before we had declarative public fields that just creates the fields by assignment in the constructor. And over time, people refactor that code to use a public field declaration instead, which is a good thing that should be smooth and should not affect the public API of the class so that it’s—there’s no hazard in doing the refactoring. So I think any kind of automatic introspection should be only from the inside, not from the outside.

RPR: Okay, and Stephen points out that Lea has clarified the problem domain is only from outside. All right, Gus.

MM: So as something from the outside, I object because of the refactoring hazard.

GCL: Yeah, I agree with everything Mark said. I also want to add that I think there is definitely a—at least one problem space I’m hearing here that could definitely be explored more, is sort of how do we let code stably document itself in a way that is, you know, accessible to other code. Like, it seems like that is a thing that people are talking about and that people want, and it seems like something that is worth potentially exploring. I think it’s also pretty clear that that is not exactly what is being explored in this proposal, so for that reason, I would also block Stage 1 on the current problem statement as stated.

RPR: All right. And JSL is also blocking—or also objecting on the basis of the problem statement. and agreeing with the other objectors.

MAH: I want to be clear, I would be in support of exploring a way of documenting as well explicitly.

RPR: Okay. All right. I think that wraps things up for now. So thank you, Lea, for the afternoon session on classes. We’re going to a break now. This will be for ten minutes and resuming at 20 past 3.

### Speaker's Summary of Key Points

* There's a fair bit of support for a mechanism that allows classes to explicitly define their public fields declaratively,
* No consensus around whether regular public fields are part of the class's public API
* There are objections towards exposing field initializers publicly, even for public fields

### Conclusion

Public fields introspection remains at Stage 0.

## Continuation: Declarations in Conditionals for Stage 2

Presenter: Devin Rousso (DRO)

DRO: Okay, so rather than continue on the queue, which was humungoginormous, I have been chatting with a number of people about a potential, maybe not middle ground solution, but an alternate idea that in some way kicks the can down the road, but that’s maybe the pessimistic way of looking at it. In my mind, it leaves open the opportunity for this decision to be made when there’s a more compelling reason to do so. To be clear, not that the reasons that exist today aren’t compelling, but they are very contentious and it seems like there’s more than one opinion compared to some feature that strongly says that it needs to be one way or the other. What I mean by that is, for example, when this was first proposed in 2019, the using syntax didn’t exist, and I think that that is a pretty strong argument as to why it should be in the if to keep the lifetime small, and realize that’s not something everybody shares. I’m thinking in the maybe next year or two or further than that, something comes along that really needs it to be in one way or the other, as opposed to the reasons and rationales we have today. So what if instead we made it where you put and into an if, you end of sort of poisoning at parse time that variable in the else? So at parse, you get a syntax error. This way it’s neither exposed or not exposed in the else, unless you were to declare your own variables in of the else, either through another if or just through some other declaration of it. The reference here in this case is due to TDZ. The idea being if you’re trying to use the data from the if, you’re not allowed to do that. It throws a syntax error so it hopefully prevents developers from actually trying to do that one way or the other and leaves the door open for us to make this decision in the future. Again, I think there’s a lot of value in the if. My understanding from most of what I’ve seen it seems like everybody agrees that exposing the feature in the if is very valuable and nice to have for a myriad of reasons, and the else is the contentious bit and harder to come down on one way or another. And perhaps this is a way to get the if without the else. If that makes sense. To be clear, I’m not looking for stage advancement. I understand there’s more work that needs to be done on the spec. That’s my bad. I’m trying to see if there’s a path forward here that doesn’t involve trying to convince one side or the other. Is there anybody that has any strong thoughts about this one way or the other?

CDA: JHD?

JHD: Yeah, why a parse error instead of just making it a TDZ variable in the else?

DRO: Certainly we could make it a reference error as well. I was just thinking it being a parse error helps you notice that you’ve done the wrong thing quicker, as opposed to having to wait for it. Maybe someone accidentally did this in some code that doesn’t run very often as such they won’t see the fact that they’ve done this bad thing until they happen to test that code path. With parse you know at the very beginning that this is a problem.

JHD: Makes sense.

CDA: GCL?

GCL: I was—yes, this sounds okay. I just wanted to say in, like full transparency that in the future, if we ever—like, I don’t see myself ever agreeing to weaken this, so it would effectively still just be the same as not having it at all, which is—yeah.

DRO: That’s fair. I don’t know how to respond to that really other than that’s fair. I think one of the things that I kind of like about this as well is that there’s probably going to be lots of opinions that people will have on ESLint or prettier or whatever you should or shouldn’t use the else in the same way there’s rules about not doing variable shadowing. I imagine there’s people, who even if we did it expose it in the else, you shouldn’t do this as a matter of course for maybe some reason, and I bet you there’s people that would have no problem with that. So I do think that this tries to again leave the door open as much as possible. If in fact that is your stance, I suppose we can tackle that in the future.

RPR: Ashley?

ACE: Yeah, I quite like this being just an immediate syntax error. That sounds like TDZ’s, she’s presented before on the performance implications of TDZ. This seems perfect for a syntax error, considering even a bunch of room, let’s call ourselves experts and pat ourselves on the back, the fact that between us we can have different gut reactions and instincts and the other languages we’re exposition to, I think Mark calls it the principle of least surprise, maybe I’m misquoting someone else, this seems like the least surprising thing and immediately, there’s no ambiguity, yeah, I just think—and taking a hard stance on this rather than letting the community decide is just going to end up with a, like, I don’t know which community I’m currently in when I read in GitHub repo, am I in the community that likes this, have community that is tolling to ban this and I might be surprised.

RPR: Waldemar.

WH: How would this interact with `var`?

DRO: In what sense?

WH: If the declaration is a `var`?

DRO: As in the data variable, is in the if var data?

RPR: Yeah.

WH: Yeah. There’s a couple things going on. So if instead of `let data` you had `var data`, and the other thing about what happens if—let’s tackle this one first.

DRO: So, yeah, I was not expecting there to be var in this proposal, so it was just let const and using, so you could not do if var. That was—that’s how I presented this from the get-go. Sorry, from when it was in 2019.

RPR: Gus? oh, Jake.

JAD: Oh, sorry. The question is do—WH, when you’re saying what about var, do you mean var within the conditional or var within the else body?

WH: Possibly both. I’m just pondering various cases. I haven’t seen this before, so I’m trying various cases to see if this works or not. I haven’t convinced myself one way or the other yet.

DRO: As far as in the else, my thinking was that even in the case of something like shadowing, so, for example, the bottom left example, you would still get the syntax error, because, for example, if we decided that hypothetically in the future, the variable is only exposed in the if, then you would get one behavior, whereas if in if future, it’s exposed in the else, you get a different behavior. Even if you have a variable in the outer scope, the fact that you’re opting into this production means that it is effectively poisoned even if you have a variable on the outside that’s shadowed.

WH: Yes, that’s the correct way of doing it.

DRO: As far as in the bottom right example, where instead of let data is var data equals enter, that’s a great question. I hadn’t really thought about that. But I would imagine that that would be fine. I would think that that maybe is okay, but I’d have to think about that.

RPR: Okay, Gus, I think it’s been clarified that var is not in this proposal.

GCL: I was going to say if similar very was in this proposal, I would be okay with it being visible in the else, but not LetOrConst, just to expand on my position.

RPR: Ten minutes clarifying. Markm clarifies he uses the principle of least surprise a lot, but did not come up with it. Justin.

JRL: I don’t think we need to do anything. This seems like case for linting. It’s already very popular to shadow the ESLint rule. If you have two datas and you’re function with and one of them shadows, you’re going to get surprise, so don’t do that. This is a very simple we don’t need to do anything.

RPR: Steven?

SHS: I just wanted to point to some other language precedent where food is good in the binding and else and \[inaudible] and took a condition and using the variable and do something different.

RPR: Ashley?

ACE: Like Justin, this isn’t shadowing, this is where does the scope start and end. It’s—

JRL: Absolutely shadowing. You’re shadowing the outer data in the—sorry. It’s absolutely shadowing. You’re shadowing the outer data in the else condition or the if condition. If you don’t—

ACE: It’s not—you’re shadowing regardless. The conversation is what is the extent of the shadow.

RPR: I think that there might be confusion here. Justin, you’re saying that the bottom right one should not be a syntax error?

JRL: Bottom right?

RPR: The bottom right example. The one with the—oh, sorry.

JRL: Bottom left information yes, correct. Bottom left should not be a syntax error. It should refer to the outer data. The only reason this is confusing is because you shadowed it in your if statement. That is already a very frequent linter rule that says don’t have two datas in your function scope.

DRO: The reason why that needs to be a syntax error is because we are not making a decision at this point as to whether the if statement is exposed in the else or not. So, again, there’s two parts to this proposal. There’s the one bit which is we’re allowing you to create let data inside of an if statement and there’s the second part which is contentious bit I’m sort of trying to sidestep to decide for the future, which is whether or not that identifier, that variable is available in the else as well. If it is, then this—the shadowing doesn’t apply. Because you would get the value if, if it opportunity expose in the else, then you would get the shadowing. So because we’re not making a decision at this point, my hope about whether or not is the exposed in the else, have a question and a possible difference in behavior with regards to shadowing, so it has to be a syntax error to avoid that.

JRL: I understand. The case here only crops up if you do shadowing and shadowing is already something that is discouraged.

ACE: This is shadowing regardless in this proposal is shadowing. It’s creating like a scope a wasn’t—it’s like moving the scope to a place that wasn’t there before.

JRL: Shadowing because you have two let datas within your function body. If you don’t have two let datas, will you never run into this case.

JHD: That’s not what the linter rule checks. Every ESLinter rule allows the bottom example because it’s normal JavaScript, except for the declaration part.

JRL: No. That is not the way that ESLint is implemented.

RPR: I think we’re going quite deep on this. Maybe we could come up to the next topic. Which is Kevin.

KG: Sorry. This is mostly meant as a response to the go item. Which what happened to that?

RPR: Oh, apology, we skipped Steven. Would someone—

SHS: No, I just—I made my point. I said that go exposes the else and then we moved on to go back to the previous question.

KG: Yeah, I’ve put this example in the issue tracker and in Matrix a couple of times, but to reiterate, Rust has changed its behavior for when things are dropped in a way that makes dropping happen before the else, and I think that that is an interaction in is relevant to us for `using` declarations, and I think `using` declarations are one of the main reasons to want this proposal at all. And the other behavior, Rust’s old behavior before they changed it, repeatedly caused bugs in practice. I think that’s the strongest possible evidence that you could get that semantics is undesirable.

RPR: Andreu?

ABO: Yeah, so I was wondering, like, the fact that you—like, in this case, you would throw a SyntaxError if the variable is referenced from the `else`, it doesn’t mean that the variable binding is not accessible. You could have a closure that is created in the condition and that gets passed to something, and that could be used in the else. Like, I’m just pointing that out as something that could happen and that wouldn’t be prevented by the syntax error.

RPR: Waldemar?

WH: If you have a `using` inside the `if` header, how long does it live?

KG: So that’s the thing that I was just talking about, which I have an extremely strong opinion about, which is that it lives to the end of the if, and if the `if` is not taken, it is disposed before the else. Rust used to have it dispose after the `else`, and that caused a lot of bugs. So has to be disposed before the `else` in the case that you are taking the `else`. Otherwise it lives to the end of the `if` block.

WH: So it seems like it dictates the answer to the question of what the scope of it is.

KG: That’s my opinion, yes.

WH: It can never be in the scope of the `else`.

KG: That is the point I was trying to make, yeah.

RPR: And LVU says, I’m fine with exposing it in the else. I’m not—I’m fine with not exposing it and using the other one, but doing neither seems very weird. Ron?

RBN: So this is—this binding visible is with else is something we discussed in the pattern matching proposal as well with relation to the is infix operator that everybody is discussion in relation to this on day one. The issue is that not having it—not having is binding visible to the else is a huge refactoring hazard if your if condition needs to become negate if for any reason, you have to completely rewrite the entire body of code the move the declaration out of the because it makes it no longer valid in the else. So it’s a complete barrier to refactoring, which makes it a problem, and I would much rather, as much as there’s potentially some value, here I’d much Rath ban using in a declaration conditional if that’s the problem than have else—have the binding not be visible to else because it’s more of a stumbling block for every user than just those using statements.

RPR: Nicolo.

NRO: Yeah, like, you need the refactor in the case, but you need the just move the variable declaration, and maybe if you’re using using, you need to block around it. Yes, you need to change the code and you’re refactoring anyway, and it’s not something difficult to do, move the variable.

RPR: Kevin?

KG: I was just going to say the same thing Nicolo did. And to Ron’s point of maybe you should ban `using`. I think this proposal is mainly motivated by interaction with `using`. There’s not that much value for declarations other than `using`. And the interaction with `using` is extremely valuable. The things it lets you write are very annoying to write otherwise. I wouldn’t want this proposal to go forward without `using` because it’s the point of the proposal.

RPR: Last 30 seconds. Back to Waldemar.

WH: I have experience with languages which do it both ways and haven’t found the refactoring hazards to be a problem in the languages which exclude the `else` clause from the scope.

RPR: All right.

RBN: Speaking of other languages, I’ll mention that the C# also allows visibility in the else, and only time it restricts it is through static analysis of types. It doesn’t restrict it sin am thetically, so you can negate your condition and the—if you have a condition or pattern matching that initializes the variable, that’s visible in the if and you negate the condition, it becomes no longer visible in the if and only in else and that’s due to static type analysis, not due to what it would actually be doing at run time if that were a dynamic language.

RPR: Right. Thank you. So we’re at time. I’ll just read out the last simple messages.

MM: says agree with Justin that the lower left else refers to the outer data. And SHS says another crazy idea, ban the else in this case. Laughter in the room. Thank you. Thank you, DRO.

### Speaker's Summary of Key Points

* An attempt to avoid answering the question of whether the variables should be exposed in the else.

### Conclusion

* With the added support for the new using keyword, we have to answer this question now in order to know when to dispose.

Next up we have another continuation, this will be the last item of the meeting for the remaining 20 minutes. And that is a continuation of the composites comparator choice with Ashley.

## Continuation: Composites comparator choice

Presenter: Ashley Claymore (ACE)

ACE: Great. So yesterday I mentioned I was excited by a three word alliteration, so you can just imagine my joy right now. I think everyone had a really good time last night. Hopefully that tint mange out everything I said yesterday, because we do not have time to cover it again. The—what I’d like to do is get some actual temperature checks, but non-binding, I have not presented, like, enough to—for people to be like, yes, 100% this is the right answer. So please answer when we get to the temperature checks. I’m purely saying biased on your gut feeling, and very much any interpretation of it is of the results will be these results could wildly change as more information comes to light. It’s a very, very weak temperature check. Why am I doing a temperature check? Working on a proposal is—takes a lot of time and energy. And it’s really useful to know how the kind of likelihood of that energy has in a return, so it’s really useful to get a sense of the committee’s feelings for things to know how much more energy to keep investing into things. So it’s really, really appreciated.

ACE: So I’d kind of like to work in and out. Like, part of me wants to ask just the general, like, hey, how does everyone feel about composites? Side note, last night, we realized that sometimes I say "COMposites" and sometimes I say "comPOSites". And then we also realized what I could start saying is "composITES" so I might throw that into the mix if I want to spice things up.

CDA: Do you want to do the temperature check now?

ACE: So what I’d like to do is actually a temperature check on a narrow question, and then start going wider.

CDA: Okay, before get to that, everyone must have TCQ up before we kick off the temperature check, because if you join after, will you not see the interface. So please, if you do not have TCQ open, do so now. You have 30 seconds.

ACE: So the—I’ll come back to this. So the question I’d like to ask is, so based on what I’ve kind of shown yesterday and our discussions, if the proposal ended up going with interning, so, you know, this is a thought experiment, you’re not saying yes, we should do interning, it’s if we found ourselves in the situation where we were doing interning of objects, would your preference be to throw when you’re putting a leaky composite into, like, a WeakSet, WeakMap, weak ref? So this—to be clear, not all composites have this, it’s just particular composites when they don’t contain things that are themselves valid.

CDA: Okay, the temp check is up. We will give it, I don’t know, 30 seconds.

WH: Explain polarity?

ACE: Positive is: yes, my preference is to throw. Unconvinced is: I would rather not throw.

CDA: Do you care if people select more than one option?

ACE: I’d ideally like not to.

CDA: Please only choose one. You can select all of them if you want to. That’s been enough time.

ACE: Yeah, great.

CDA: You’ve got 17 strong positive, two positive, three indifferent, and one unconvinced.

**If we intern, should we throw on leaky weakmap insertion?**

![Temperature Check | Strong Positive ❤️: 17, Positive 👍:2, Following 👀: 4, Confused ❓: 0, Indifferent 🤷: 3, Unconvinced 😕: 1][temp-check-1]

ACE: Okay, Thanks. If someone could snapshot that in the notes, and you said it out loud.

CDA: That’s why I said it out loud. RPR has a screen shot.

ACE: So great, I think that matches what I was hearing yesterday. Which, yeah, Pleasantly surprised me. I thought it would be a bit more mixed. But I appreciate this. None of this is binding. So, yeah, zooming out a little, so there is like a wider conversation that I—I know RBN and others started raising it, and I shamefully kind of shot it down because I didn’t want the design space to block too much yet, but I do want that conversation to happen at some point. But if we again imagine that we are doing composites as I’ve presented them in my April talk and my yesterday talk, where they aren’t introducing new Symbol protocols, they are these, like, hard coded in the language equality things so that they can be 100% reliable, no, like, user code interaction, so I presented two possible menus. There’s design space within the two, but out of those two, are you leaning towards interning? So strong positive would be yes, I’m leaning towards interning, I want this cost of construction time at the benefit of it’s just, like, stricter equality every else else in the language. There’s no, like, API-base equality that we pick and choose where it lands. Unconvinced is no with what you’ve shown so far, and again, I don’t think I’ve shown more than enough to actually make a decision here.

MAH: raised an issue yesterday that I was only showing interning of an object with three properties. Let’s see what happens when you add a lot more properties. So just based on what you’ve seen so far.

GCL: Interning is positive,

ACE: yeah. Are you positive about exploring interning.

CDA: I’m going to give it—

CDA: It’s not really a question. Ten seconds. All right. So you’ve got ten strong positive, four positive, four confused, four indifferent, two unconvinced. Let’s go to the queue. WH?

WH: To understand this I had to make some assumptions. I’d like to check to make sure that my assumptions are correct. How would this interact with WeakMaps if we’re not doing interning? I would assume composites would still not be allowed within WeakMaps, right?

ACE: So they can be. So if the way you can do it is, like, if the thing you have interpreted, because it’s a shallow intern, so if one of the values inside the composite is something with a lifetime like an object.

WH: I’m not talking about that case. I’m talking about the case where you just have primitives inside the composite.

ACE: Based on the prior temperature check, there was strong support for throwing.

WH: That’s not what I’m asking. I’m not asking about the interning case. I’m specifically asking about the non-interning case. What happens when you stick a composite into a WeakMap, or is that not allowed?

ACE: What I presented yesterday is that is non-interning case, they have—they act just like any other regular object. Each object has its own identity and its own lifetime, so the—like, I think the thing you would do is they just behave like regular objects in a WeakMap, but then—but if that—

WH: Okay, but that seems weird because now a WeakMap would have a different notion of equality than a regular map?

ACE: No, I agree. That’s my, like, gut feeling, but it’s within that design space. As I said, this is very hand wavy because the two options here are not like option A or option B. They’re design space A and design space B, which I appreciate makes the question hard to answer, which is why maybe just saying I’m unconvinced either way, because there’s not enough information is probably the best answer.

WH: This is why I picked four out of the six options on the second poll.

ACE: Yeah.

WH: I don’t yet know what the thinking is on these questions.

ACE: I think you answered that’s the right number to pick, then, for that case, because that’s telling me you need more information.

WH: Yes.

CDA: JHD?

JHD: So I do want to point out my discomfort over throwing only exists because I don’t have can be weakly held predicate in the language, and the arguments against it were well, if the value—if it changes value over time, it can cause web come pat risks and for some reason, try catching new WeakSet, or whatever, which does is exact same something just unergonomically wasn’t a concern. So I don’t know if, likes, the person who objected most strongly to it is now at different company, and I don’t know if that objection continues. But with such a predicate, I don’t really care as much if the—how—like, about the complexity of the definition of what things can be weakly held, because I don’t care. I just throw that predicate at it when I care.

ACE: Yeah. So when we did Symbols as WeakMap keys, the conversation was one of the reasons we ended up picking the design was because yourself, Jordan, was convinced because there is a predicate—there is a non-throwing way of detecting registered Symbols, you say Symbol key for, and if that returns undefined, then it’s not a registered Symbol. It’s not like a one shot. You first have to go does it have type of Symbol and then ask that. And you could also imagine a design where composites has a similar-like composite or is—

JHD: Sure.

ACE: So is that in the space of, yes there, might not be a one shot predicate, but there is—

JHD: I don’t think so, because I think the issue is for me is how difficult is it to explain or to write that helper? And every time we add that’s two things we now have to add, is an object or is a Symbol that’s not registered. Adding a third thing, I don’t like that.

ACE: And the simplest thing is to try and catch.

JHD: Right. But that’s—I would like a predicate that does that so, like, I don’t actually have to write try catch.

ACE: Yeah, not for me to say if we can have that API.

CDA: We have about five minutes left. NRO.

NRO: Just backwards concern about the predicate, I do not believe—I believe at this point in language, basically we have cabbage collectible and that can be put in WeakMaps, and Symbols, and I don’t think we’d ever change the answer for existing things if we adjusted for new things it would decide if it’s new or false, and maybe if objection that there was a time does not apply anymore.

JHD: And maybe so. And the value to me of having the predicate is also that we could change it, and if we did in the future, code would be using the predicate and not homegrown logic, so it wouldn’t break anyone. But I agree with you that we’re probably not going to change the answer for Symbols, and not for any currently existing objects, only for new things we introduce.

CDA: MM says, I without draw my vote this round. That’s i t for the queue.

ACE: Just one last thing, so yeah, as I’ve kept caveating through this, I want to present more information to the committee, so I said MAG asked to say—do a benchmark where I’m looking at more properties, I raised an issue on the proposal requesting that.

WH: mentioned wanting more information. To WH, if you could—if you have time, if you could raise an issue of exactly the things you’d like me to present and explore, and to everyone, if there’s things you want me to research and come back to committee with, please put an issue on the thing rather than me trying to guess what you’d be interested in, because again, I really want to maximize the value of the time I spend on this proposal. It’s much appreciated.

**Do we lean towards interning?**

![Temperature Check | Strong Positive ❤️: 10, Positive 👍: 4, Following 👀: 1, Confused ❓: 4, Indifferent 🤷: 2, Unconvinced 😕: 2][temp-check-2]

*Mark withdraws his vote; Waldemar had picked both positive and negative*

MAH: For the record, MM's vote earlier was to—was negative. He withdrew the negative. So I think instead of two, we have one.

WH: Well, the other one was me, and I voted both positive and negative because I wasn’t sure which interpretation of how WeakMaps would interact with composite keys if we were to go with the noninterning proposal was the intended one. That’s the question I asked earlier.

CDA: Are there no more temp checks? Is that the last temp check?

ACE: yeah. I decided I didn’t want to go too full on. This has been very helpful.

CDA: I thought there would be one more. That’s sad. There’s nothing else on the queue. Does that bring the topic to conclusion, then, ACE?

ACE: Yes, thank you very much.

### Speaker's Summary of Key Points

* We did two temperature checks.
* One on "should interned composites that would leak not be valid WeakMap keys?"
* One of "should composites be interned?"

### Conclusion

* Throwing for invalid Composite WeakMap keys got the most support.
* Interning composites got the most support.
* Next steps are to continue researching and return to plenary with more information

## Meeting closing

CDA: All right. Thus ends this edition of TC39 plenary. We did 20 hours of content in 16 hours of meeting time. I think that’s a record. That’s very efficient. And I think we had a lot of stage advancements as well. I don’t have the exact count, but… Yes. Please, could all the speakers do your duty, making Aki and Ecma proud by writing the summary and conclusion in the notes. It’s very important and appreciated by the community as well. People always want to know the status of proposals. Sorry? You’ve got 12 to write.

???: I’m sorry, there’s 12 proposals.

CDA: Yeah, at least 12 proposals advanced in this meeting, which is amazing. And I—yes, before we leave, because at the end of this, you are welcome to stay in the room for, you know, another hour until 5 or so on. But before we leave, we’d like to get a team photograph. I suggest on the stage. So I think we should do that, like, pretty much next. Yes. Thank you to our transcriptionist and transcriptionists who have also assisted us for this meeting. And the notetakers, do we have the list of the notetakers?

???: Yes. And they shall be named and famed.

RPR: ABO, ACE, CHU, CZW, JKP, JHD, JRL, JSL, KG, MAH. MF, RBR, and SFC.

[temp-check-1]: data:image/png;base64,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
[temp-check-2]: data:image/png;base64,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
