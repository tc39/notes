# June 02, 2020 Meeting Notes

-----

**In-person attendees:** (none)

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Yulia Startsev       | YSV            | Mozilla            |
| Aki Rose Braun       | AKI            | PayPal             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Jack Works           | JWK            | Sujitech           |
| Marja Hölttä         | MHA            | Google             |
| Mathias Bynens       | MB             | Google             |
| Michael Saboff       | MLS            | Apple              |
| Keith Miller         | KM             | Apple              |
| Rob Palmer           | RPR            | Bloomberg          |
| Robin Ricard         | RRD            | Bloomberg          |
| Rick Button          | RBU            | Bloomberg          |
| Jason Williams       | JWS            | Bloomberg          |
| Waldemar Horwat      | WH             | Google             |
| Kristen Hewell Garrett | KHG            | LinkedIn           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Bradford C. Smith    | BSH            | Google             |
| Shane F. Carr        | SFC            | Google             |
| Ukyo Pu              | PSY            | Alibaba            |
| Istvan Sebestyen     | IS             | Ecma International |
| Brian Terlson        | BT             | Microsoft          |
| Michael Ficarra      | MF             | F5 Networks        |
| Shu-yu Guo           | SYG            | Google             |
| Sven Sauleau         | SSA            | Babel              |
| Chengzhong Wu        | CZW            | Alibaba            |
| Philip Chimento      | PFC            | Igalia             |
| Ross Kirsling        | RKG            | Sony               |
| Chip Morningstar     | CM             | Agoric             |
| Kris Kowal           | KKL            | Agoric             |
| Ujjwal Sharma        | USA            | Igalia             |
| Rick Waldron         | RW             | Bocoup             |
| Mark Cohen           | MPC            | PayPal             |
| Justin Ridgewell     | JRL            | Google             |
| Mary Marchini        | MAR            | Netflix            |
| Frank Yung-Fong Tang | FYT            | Google             |
| Ilias Tsangaris      | IT             | Evernote           |
| Felienne Hermans     | FHS            | University of Leiden |
| Tab Atkins           | TAB            | Google             |
| Mattijs Hoitink      | MHK            | Apple              |
| Dan Clark            | DDC            | Microsoft          |
| Bradley Farias       | BFS            | GoDaddy            |
| Devin Rousso         | DRO            | Apple              |
| Leo Balter           | LEO            | Salesforce         |
| Younies Mahmoud      | YMD            | Google             |
| Robert Pamely        | RPY            | Bloomberg          |
| Jordan Harband       | JHD            | Invited Expert     |
| Daniel Rosenwasser   | DRR            | Microsoft          |
| Caio Lima            | CLA            | Igalia             |
| Daniel Ehrenberg     | DE             | Igalia             |
| Ron Buckton          | RBN            | Microsoft          |

## Hallway track update

YSV: Online towns did not really work, there was another alternative, shane are you in the call? We can try that alternative or Mozilla Hubs today

SFC: A couple alternatives are posted on the GitHub issue on the Reflector.

AKI: My corporate VPN blocks online.town.

MPC: The alternative was spatial.chat.

YSV: I'll get a link set up for that before lunch.

## String.prototype.replaceAll for Stage 4

Presenter: Mathias Bynens (MB)

* [proposal](https://github.com/tc39/proposal-string-replace-all)
* [slides](https://docs.google.com/presentation/d/143RkssdqvENZIKCpZVGaHYC5JaIm4mJIdHdTor58IMQ/edit)

MB: (presents slides)

MB: This is ready for Stage 4, with tests, upstream spec PR, shipping in browsers. There are comments on the PR, but I hope we can get consensus (or rejection!) for Stage 4 pending editor signoff. I do intend to address all comments before merging. There are two PRs, for the `matchAll` change and this, and the `matchAll` PR was already merged a while ago.

MB: Does anyone have any objections moving this to Stage 4?

AKI: Sounds like consensus to me

### Conclusion

Consensus for Stage 4!

## `AggregateError` `errors` update

Presenters: Mathias Bynens (MB)

* [proposal](https://github.com/tc39/proposal-promise-any)
* [slides](https://docs.google.com/presentation/d/1juwk662pDATPCPqPxlE8M9rBGeA9zAp0_sJBoxu3eMc/edit)

MB: (presents slides)

MB: The first patch involves the `errors` property on AggregateError instances. In the original proposal this was a non-enumerable own data property, matching the `message` property. Jordan objected to this (issue #38), and at some point `errors` was changed to be a prototype accessor reading from an internal slot. However, since this was last discussed in plenary, there's been significant additional feedback from various implementers and delegates, suggesting that own data property is the simpler and safer way to go. Jordan has withdrawn his objection to an own data property and has prepared a PR restoring the behavior. Mozilla's reluctant to ship this feature without TC39 approving a direction. Benefits of this approach: 1) Addresses implementer feedback. 2) Consistency with `error.message`, which is a non-enumerable own property. 3) Safety: Mark Miller pointed out that there is no precedent for an exotic internal slot holding objects, and that it is dangerous. See [Mark's comment on the "exotic internal slot" membrane hazard](https://github.com/tc39/proposal-promise-any/issues/38#issuecomment-606963685). Discuss this now or at the end?

DE: I'd like to understand this hazard more; we've been using internal slots with prototype getters for a lot, in ES6, so this sounds like a new convention.

MB: The hazard is specific to exotic internal slots holding _objects_ (non-primitives). MM, can you elaborate on this?

JHD: I have the next queue item, I can elaborate.

DE: What do you mean by exotic?

JHD: In ES6, a lot of things were moved to property accessors. Previously, they were all primitives. We weren’t confronted with the question of objects via prototype accessors. In general the convention is primitive props are usually prototype accessors of internal slots. However, Errors remain largely inconsistent in terms of the message property and things of that nature. My original objection to the own-data property was in the realm of, I would like this new Error type to be more consistent with the rest of the language. Part of the reason I changed my mind on it was I was convinced that it would be weirder for some of the errors to be consistent and the rest inconsistent. In other words, we should stick with the way errors work for a new Error type, which by and large is own-properties, like message, and errors on AggregateError. The hazard MM is talking about is about mutable shared data such as an object that can be shared data. Few issues about membranes and side channels. Way to avoid while remaining on proto is: mutable thing must be frozen, or it must be an accessor that always returns a new “fresh” object. So that when you mutate it, the next person who gets it out of the instance gets a clone of the original value, and not your mutation. So with those the spec prior to this pr would be that it would return the fresh obj every time but there was impl concerns on perf on that.

DE: That's an interesting assertion, that we should go like that. I'm okay adopting this based on conventions specific to errors. But an accessor with an object is like a private field with an object. They could put a proxy around the getter/ the whole object, I’d like to understand that better. For example, this comes up in Intl.Segmenter and Temporal, where these getters return non-primitives that aren't frozen. I don’t want to hold this back but I want to talk about the general constraint before concluding on it.

JRL: The realm and membrane proposals are capable of fixing this ability to get an object from the other side of the membrane. The issue here is that it's expensive. `AggregateError.prototype.errors`' getter is ambiently available in all realms. So if I have a proxy wrapped `AggregateError`, I'm able to `getter.call(aggregateErrorProxy)`, and this will fail because the proxy does not contain the slot. So I have to patch the getter so that I can detect that `this` is a membrane proxy instance, and perform the operation on the other side of the membrane. This hasn't been an issue before, since we've only had primitives in slots, whereas an object must be wrapped by a membrane implementation. So it's possible to fix, it's just expensive. Using a data property here simplifies the issue, since we no longer need to worry about an ambiently available getter being used to (fail) get a slot from the proxy.

DE: These are interesting ideas for directions, ideas for implications: Intl.Segmenter and Temporal are not ambiently available in the same way. So I don’t know how this applies to them. There are just a lot of requirements being brought in.

JRL: You can membrane wrap them, it is just expensive. You have to patch all global getters.

DE: I think that if MM isn’t here, then I need to join the SES call to learn about that requirement. I've been keeping track of the various different requests for SES that have been made, but this seems like a new one that is very cross-cutting.

MB: MM is on the call but he is either not hearing this or muted, maybe we can follow up offline. There is lots of background in the GitHub issue as well.

YSV: I'm wondering if we have a conclusion?

DE: I don’t think we have consensus on this general request that we design everything with this particular constraint about "exotic internal slots". I’m fine with making this particular thing an own property.

YSV: ok to say that promise.any is ok but not cross-cutting concern?

DE: For me, yes.

YSV: Any objections to that?

(silence)

MB: In that case we can merge #64, and move onto the next topic.

### Conclusion

* Consensus on PR 64.
* Need to resolve the SES concern on PR 59; no consensus on this general constraint.

## `AggregateError` constructor update

Presenter: Shu-yu Guo [Google] (SYG)

* [Proposal](https://github.com/tc39/proposal-promise-any)
* [Slides](https://docs.google.com/presentation/d/1juwk662pDATPCPqPxlE8M9rBGeA9zAp0_sJBoxu3eMc/edit)

SYG: (presents slides)

JHD: an argument of which consistency we want. Optional arguments should go last, that’s important. Some classes should call the super and process their arg.

I was under the impression, seperate from my own intuition, that WebIDL processes the arguments in order. I remember that coming up in our IDL discussion. Something like all of our methods were necessary doing, in order to make idl possible we would have to audit all of them. Maybe I got the wrong message from that plenary discussion.

So, my personal preference is that we prioritize what's observable to callers and not the implementation code that one might write to do it, but there are implementation concerns in general, but today it sounds like a priority of consistency question.

SYG: I think for users, my intuition is that keeping with the mental model that by the time the super constructor runs, it would have done its logic normally, it would have set the message. It is easier for the user to understand the current state. We might skip this logic in constructor ….???

SYG: I agree that it's edge casey.

JHD: right

SYD: actually more confusing to the user, but it’s not gonna hurt more than anything to have a few extra lines here

WH: I agree with Shu. The preference to process arguments in the same order (as they appear) is a very weak preference that applies if there are no other considerations. Here we have a much stronger consideration to initialize `message` first because that’s what the superclass does.

KM: agree with SYG and WH, probably too late to change the order of args in the constructor

i'm not opposed to that but we'd have to change documentation for this, which is more problematic than changing the order.

KKL: What’s the rationale for the order of AggregateError arguments (errors, message) over (message, errors)?

SYG: I can give some background on the order. There is a long GitHub discussion thread ([1](https://github.com/tc39/proposal-promise-any/issues/14), [2](https://github.com/tc39/proposal-promise-any/issues/44#issuecomment-538501352)) where I argued for this argument order. The reason you use an AggregateError is that it aggregates errors .It is not that it just carries a message, it carries a group of errors. It is more useful to errors to come first then, if it is intended to be first, then.

KG main reason for pushing - aggregate err obj should not treat error prop as optional same for message but there are other prop as opt. Optional should come always after required arguments. I also want to mention that there are some types on the web platform that take an optional argument first, and a non-optional argument second. But those have already been shipped.

KKL: counter arg already recorded, super class constructor should be a … I do agree …??? Would make sense for messages to be required in spirit.

DE: About WebIDL, we are not currently following WebIDL conventions, I don’t feel like I have enough interest in the complexity it would entail that I am not currently pursuing it. So I don't think WebIDL should be considered a reason for adopting any particular conventions currently in JS.

SYG: queue empty, asking for consensus for slide about #59, should be trivial to implement

(Silence)

### Conclusion

* New semantics for AggregateError constructor received consensus

## Temporal Update

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://pipobscure.github.io/slides/temporal-2020-06/)

PFC: (presents slides)

WH: What should throw?

PFC: The .valueOf() method on the Temporal types. [slide 12] So if we have two calendar dates, if you take a look at the bottom line of code here, `if (date1 >= date2)`. The way this will work out, date1 and date2 are objects, in order to execute the comparison operator, they will be converted to primitives via the .valueOf() method. I believe that the algorithm tries Symbol.toPrimitive and then valueOf. If valueOf() throws, then the comparison shown here is not possible. If the valueOf() method were to return some value, then we could conceivably make this comparison approximately work. Does that answer the question?

WH: Yes.

JRL: The other option was to return a BigInt. Is there an overflow risk here? It sounds like your listed options are to throw or return a BigInt, but you can just return an integer. Like Date.now is tiny in comparison to 2^53. So I don’t see an overflow risk happening for thousands of years.

PFC: That is with a millisecond precision, but in Temporal we have nanosecond precision. So we have an extra factor of 10^6.

JRL: Okay, so how soon would an overflow actually occur?

PFC: I don't know off the top of my head but we do use a bigint value in the internal slot of Temporal.Absolute. I'm not 100% sure, but I think overflow already does occur if you cover the range that the existing JavaScript Date covers, but with nanosecond precision.

WH: Overflow would occur almost immediately with nanoseconds. A double has 53 bits of precision. Nanoseconds take 30 bits, leaving only 23 bits.

JRL: I just calculated it and nanoseconds will overflow doubles in 104 days. BigInt seems appropriate.

PFC: (continues to present slides, starting at “Default Calendar”, slide 16)

KKL: We reviewed Temporal at the SES meeting last week. Date is a powerful method in the global scope that SES has to replace in order to make less powerful. The Temporal namespace that SES has would also need to be replaced if it carried similarly powerful methods. Do the Temporal.Calendar and Temporal.TimeZone namespaces carry the power of telling you the current calendar or timezone?

PFC: They don’t. Anything that could tell you about the current time or environment is on an object called Temporal.now. For example, to get the current date you call Temporal.now.date(). We believe that environment lockdown should be possible by replacing the Temporal.now object. It goes for time zones too. We don’t currently have anything that gives you the locale’s preferred calendar, but if we did, it would be on Temporal.now.

KKL: Thank you, this answer is very satisfying.

JHD: Temporal is large, and the preference of the champions is often to merge PRs quickly and then continue iterating from there, which at least for me personally makes it really hard to keep up with all the changes. In order for there to be sufficient time to review, I would like to request that whenever you are ready to ask for stage 3, please give a significant period of time for us to review and announce it.

KG: And announce that you’re doing so.

PFC: That's a good point.

JHD: For a normal proposal I’d say at least two months for review, but this is a very large proposal. We will need multiple meetings of time with it static in order to do a proper review.

PFC: That is good to know. What we intended to do between this week and stage 3, after incorporating feedback from users, was freeze the API and release a second version of the polyfill. So ideally by that time we’d have all of our provisional decisions revisited and addressed.

JHD: Hopefully that is the way it plays out. Sometimes issues are discovered by usage, some by review. And the kind that needs review to discover them, we need review to happen first in order to discover them.

PFC: That’s understandable.

JHD: This freeze is needed by editors as well as spec reviewers (circa 4-7 people).

PFC: My intuition is that the farthest reaching changes will be prompted by usage. So when you say multiple meetings you mean multiple TC39 meetings?

JHD: I’m trying to set expectations - I can only speak for myself and my review time. But I’m trying to set your and the champions group’s expectations that 2 months with other TC39 work and day job work, I don’t know that it’s enough time to properly review that proposal. It’s a lot of globals, machinery to review. This isn't one of those things that 1 editor can sign off on for the rest of them.

PFC: Thanks.

YSV: Want to boost what JHD was saying, it’s a big proposal from the implementer side, things keep changing, we’re dreading it a little bit. It will probably take us a full cycle between a meetings, maybe more time. We will likely have questions as well. Having a heads up will be very much appreciated.

PFC: That is good to hear, what I am hearing is that everyone wants a very loud and clear heads up when the API stops changing.

RGN: Following up on the SES comment, I wanted to point out that current Temporal.now is not the only environmental access. When you resolve, for instance, a timezone itself, that is reaching out and getting the current TZ data which can change from one time to the next. and if we want virtualizability all of the lookups need to be funneled through something that is under user control, and if we want the further SES concern of compartmentalizability, as I just learned this week, the lookup must be separate from the constructor - the thing that makes its calls must not be children of the things that do computation. So it’s currently violated by having the `from` method as a property on the constructor. It’s possible to virtualize but not to compartmentalize.

PFC: That sounds like something that we need to address.

RGN: Well, address or decide not to address. I just wanted to raise it because I discovered it myself in the last few days.

DE: We had some extensive discussions about the time zone database and whether it violates SES guarantees. I thought our resolution was that if everything [namely, construction of a timezone from an IANA identifier like "America/New_York"] goes through Temporal.TimeZone.from [which can be monkey-patched], then that would be okay. Do you have a writeup of your concerns, and should we go to the SES group about this? I’m also skeptical that the time zone database concern is the same concern as the current time. The time zone database is also available through Intl.

RGN: And SES removes Intl. So if the goal is to have SES keep Temporal, then it imposes further constraints than I even realized. It is absolutely possible to virtualize right now, so it could be the decision of Temporal is that virtualizability is where the line is drawn. But SES has a deeper constraint. So I want to make everyone aware of that as a big decision rather than a potential regret later.

PFC: This seems like something we should talk about in an issue tracker thread.

DE: I think it was interesting that PFC raised to the committee this question of the default calendar, and the initial decision to release the polyfill defaulting to the Gregorian calendar. Do people have thoughts about that?

TAB: As discussed in the delegates chat, I believe the Gregorian calendar is the right default here. You’re still interacting with the Gregorian calendar regardless of your locale. It is so strongly weighted that all usage will be Gregorian that we should keep that as the default.

SFC: I would like more feedback from TAB and the committee on that. The options that I listed in the discussion thread, linked here in the slides, cover a very wide spectrum, from making the calendar always explicit, to only requiring it in a calendar-dependent operation. For example, adding a month is a calendar-dependent operation, but adding a day is not. Converting timezones is not a calendar dependent operation, etc. And for the small number of operations that are calendar-dependent, there are a number of options for what we could do in those specific cases but not have it be required by the rest of the API. What is your general feeling to have this as two levels, calendar dependent and calendar independent?

TAB: I think the Martian day has something to say to you about adding days not being a calendar-dependent operation.

SFC: We had a discussion about Martian days in the thread. Our conclusion for Martian days is that we are basing this on known human calendars, which are overwhelmingly based on the solar day. There are a number of researchers who use a solar day as the basic unit. If there’s a need from the application side to support a Martian day or another type of day, then that could be something handled by a subclass. But we should concern ourselves here with calendars used on Earth. If interested in that you can read up on GitHub.

WH: There are people working on Martian days, such as the people running the rovers on Mars. But they switched back to Earth days after a while. Even the concept of a second on Mars is controversial because of general relativity.

USA: I just wanted to point out that alternate timekeeping systems were discussed by the champions group. We didn't plan to allow users to build that sort of functionality yet, It takes a decent amount of work for a vanishingly small percentage of cases but we are designing the API in such a way that it can be supported in the future, so we can support alternate time-keeping systems.

WH: Also we would get it wrong if we tried to do it.

TAB: The point is made that adding days is not calendar-dependent, but I’m not certain that that’s true. Is it true that the calendar, specifically when DST starts or ends, is independent of things that happen when you add or subtract a day?

PFC: It is time-zone-dependent but not calendar-dependent, we treat those as separate things.

TAB: OK.

SFC: So specifically, adding a solar day in one calendar is the same as adding a solar day in another calendar.

TAB: Okay, so it’s always like +/- 24 hours, so adding a day cannot change the hour?

SFC: The way that the spec is written is that adding a civil day is equivalent to incrementing the day counter by 1, which may or may not be 24 hours.

DE: Temporal is about having datetimes in different logical manipulation spaces. So it’s not like moment.js, where you have one type that represents a date and time with a timezone. With Temporal, if you’re presenting a DateTime and you add a day, then you’re just adding a day. If you do DST calculations it will happen when you switch to a timezone [with the .inTimeZone method].

JHD: Is the concept that DST changes are not calendar-dependent because they only deal with the date and the day, whereas timezones deal with the clock?

PFC: Like USA said, we’re designing the spec in a way that allows us to revisit calendar-dependent time in the future if it is needed. The model of TimeZone is that the offset can change at a particular absolute time, independent of the calendar.

JHD: I’m just trying to understand because it seems like the concepts of timezones and times are intimately connected with our calendar concepts. I understand from an engineering standpoint why it’s nice to split them, but I’m confused by it.

PFC: I would be happy to go into that somewhere else. We are almost out of time and it looks like SFC has another remark.

SFC: I’ve spent a great deal of time, as have other champions, on developing options for the Calendar system, specifically for the default calendar. It would be great to have more reviews on that and comparing and contrasting all the different options. We do feel we understand what all the different pros and cons are, but we need more voices on what’s best for end developers both from an ergonomic point of view and from an i18n correctness point of view. So any time committee members have to look at the documentation would be much appreciated.

## Introducing: Unicode support

Presenter: Michael Ficarra (MF)

* [discussion](https://github.com/tc39/ecma262/pull/1896#issuecomment-628271681)
* [slides](https://docs.google.com/presentation/d/1lRTBNs9J8D2__d5a45JqDO2gWMEhjGye8bHIXvtjFnM)

MF: (presents slides)

MF: attempting normative PR process (no stages)

SFC: This subject also comes up in the 402 spec, where there’s various pieces of 402 spec that are dependent on Unicode releases as well as CLDR releases. So looking for a general approach for updating these identifiers, which could be consistent with how 262 updates Unicode properties. If we do have them in the spec then how do we go about updating them?

MB: Thanks for presenting, MF. I’d like to split up your proposal into smaller parts that we can discuss separately because I think some parts are non-controversial. I like the idea of coming up with some prose that describes how we arrive at this list of properties that we support.
Where we disagree is that I don’t think we should be making this new prose the normative definition. I do think it would be a smaller step to land that as a non-normative description to help guide the editors or whoever works with the spec. But making it normative seems like we'd be giving up too much control, because we’d be essentially giving the upstream unicode standard a blanket license to add any properties they want, and then we are committing now and forever to support that, and I don't feel comfortable doing that. Especially because there could be a property in the future that we might want to NOT support.

[My initial proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes) actually included the full list of binary properties, so then we’d be able to easily say that we’d support everything at least in this category, but then there was feedback from delegates saying that we probably shouldn't support certain properties. We ended up removing a bunch of properties from the proposal, which in hindsight was the right call. So this is not a hypothetical scenario, this might occur again in the future. I think we should leave the door open for us to say “we aren’t going to support this property in ECMAScript”.

Even though generally we want to support most properties added upstream, I just don’t feel comfortable giving upstream standards a blanket license to influence the language in such a massive way.

The result of that PR (from a couple of years ago) is whenever the spec refers to a property...
That always resolves to the latest available unicode data - that’s what that PR does. So it doesn’t just affect property escapes, it also affects identifier grammar. So for any program we support, if you write a JS program with a regular expression in it, then per spec it always refers to the latest available Unicode data.

So I think we should see this as two separate things: 1) the Unicode data, there is agreement that we want to reference the latest data. 2) A separate problem is which properties that ecmascript refers to, so I don’t think adding a wildcard to the spec for anything that might be added in the future is a good idea.

WH: I agree with MB for the same reasons that he gave.

JHD: I want to avoid human errors here. And if MB took an extended vacation, it’s possible that we’d have a much longer window where the unicode properties had been added upstream but we still wouldn’t support them. It seems like if we are committing to automatically pulling in Unicode's changes, then that's what we should do. If there's a concern about something coming in that we don’t want, that means we should manually update all Unicode things including saying that we stick to a certain version. I certainly would prefer a world where we always point to the latest, but that’s not what we have. I hear that you’re trying to separate unicode data from other pieces but it might not be separable. I have a mild intuition that if I can use certain properties or certain regex escapes, that the whole language will be consistent about that.

SFC: We had a similar discussion about this sort of hybrid approach a couple weeks ago. So for example in 402 we had a list of required numbering systems, and we're probably going to have to go a similar direction with calendar systems. Since browsers usually ship full ICU data, they might support numbering systems beyond those that are in that whitelist. In 402 we have this pattern all over the place, of having implementation-dependent behaviour, where we say "okay, here’s the required rules" set, but then you can also have extensions if you like, which is sort of a compromise. On the one hand it’s nice to have an explicit whitelist so that there’s more consistency across the browser space and you don’t have Chrome having one supported set and Safari having a different supported set. So we want to avoid that but on the other hand we want to have more rapid updates and be spec compliant. It’s sort of this tug of war between these 2 priorities. But that is the approach we currently take in 402 is that hybrid one.

MF: brilliant approach, I think it solves each of the constraints I've listed. It allows implementations to have consistent Unicode versions as long as Unicode doesn't remove properties in the future, which I believe they've committed not to do. I’d like to change the proposal to be that:
Normatively defining an exclusion list and bringing in all properties that unicode has - continuing to have these data tables in the spec but treating them as a minimum set of support and allowing engines to provide their implementation-dependent extensions according to what unicode has. Does that make sense?

MF: So then what we’re committing to is not that we’re maintaining a consistent observable unicode version, it’s allowing an implementer to have a consistent observable unicode version. MB, is that okay with you?

MB: the idea of having some set of prop supported by implementers but having a set of other properties added automatically, This was already discussed during standardization of property escapes, and was explicitly decided against for interoperability reasons. This potentially means that as a user you would have to wrap each usage of a regex with a property escape in a feature test that effectively does a try/catch and a function call or eval call, because you don’t know what environment your code ends up running in. So I’m strongly in favor of sticking with a precise and unambiguous list that we define explicitly.

MF: MB, how is it different from using any property when there's a minimum level of support in the spec, vs. an exact level of support? Or are you only referring to properties not listed in the tables?

MB: Right, it depends on how this prose is written, I guess, but if you allow implementations to support additional properties, depending on how additional properties are defined and if there are any gotchas to that, an engine might start shipping support for a “non-standard” property, and then people might write code that relies on that, and then we can’t remove it for web compat reasons and have to standardize it… We would lose the control we currently have. It just seems like a risk we don’t need to take.

MF: I was only proposing allowing properties defined by the latest standard but not yet included in the table.

MB: Right, we're talking about the same thing.

MF: The difference is in eventual inclusion of those properties.

MB: We don’t currently guarantee eventual inclusion, and I don’t think we want to given what I said earlier.

DE: This comes back to the other thing MB was saying before, where we don’t include - for the key-value properties, we don’t include all of them. So we may have a property that comes along in a future unicode release that we don’t want to support. If we allow this to be expanded by different implementations then we would be cutting ourselves off from that path. We'd be assuming that everything that gets into the Unicode standard will eventually be making it in.

MB: Exactly.

TAB: I’m not clear in this discussion how any talk of vendor extension and authors having to wrap everything in a try/catch is different from having to deal with both old and new browsers adding new properties. It seems to be the same deal, right?

MB: Well minus the exception that DE just outlined and that I talked about earlier. Because the spec is written in such a way that vendors can add new properties without the list in the spec being updated, then we could see a vendor ship a new property, but then we have a TC39 meeting and decide that we don’t actually want to support that property, but there’s already a shipping implementation, now it's a web compatibility problem to add this property to the denial list in the spec. We are giving away a lot of power we have already used in the past while property escapes were being standardized. I think we want to make the call what makes it into the spec and what doesn’t. Hypothetically if the unicode standard adds 9000 properties we’ll want to review that list and figure out which of those we want to support, and which of those we don’t want to support.

TAB: That argument is fine with me, but I thought the argument that authors need to worry about it is invalid, because that's already true today.

MB: It’s true to a lesser extent. At least today there’s a single source of truth in the ECMAScript spec.

MF: I’m sympathetic to the web compatibility argument. I don’t think I see a way to meet the constraints listed and still address that web compatibility issue.

MB: What do you think about the idea of doing what you were planning on doing, but non-normative? That specifies how we generally do this, but still gives us the final call. We'd keep the lists that we have now and those would continue to be the normative definition. What do you think about that?

MF: I would be fine with that. Thank you. Think we’re done with this topic.

## Decorators update

Presenter: Kristen Hewell Garrett (KHG)

* [proposal](https://github.com/tc39/proposal-decorators)
* [slides](https://slides.com/pzuraq/decorators-status-update-2020-06)

KHG: (presents slides)

KHG: Decorators Design Space Analysis - https://docs.google.com/document/d/1DSuLlEbAjBImDutX_rhjnA6821EUyj9rANzDVJS3QV0 Decorator Use Case Analysis - https://docs.google.com/spreadsheets/d/1QP0hfXkkkAXTktGrI7qrt-RUqKp2KtsVKuPo4yuoZZI/edit?ouid=115900510010132195082&usp=sheets_home&ths=true

RPR: Empty queue, which is weird for decorators.

AKI: I am stunned that the queue is empty.

SYG: Thanks for taking implementer feedback to this level of seriousness.

## Function Implementation Hiding for stage 3

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-function-implementation-hiding)
* [slides](https://docs.google.com/presentation/d/1zCACnOkueOZHruXv2UzUvKIUA6L7w7W6S2N4bdzwwkM)
* [spec text](https://github.com/tc39/ecma262/pull/1739)

MF: (presents slides)

MF: asking for stage 3 on the function source hiding side of separation

BFS: Do we have any clarity on the constraints of the toggle? Does it need to be done at runtime dynamically? Or is it something that could be done, say, with a different build artifact for dev vs prod?

MF: Understanding is they want to use tools that track errors that happen in the context of a single webpage. And they want to be able to give those tools permission, somehow, to access the full call stack, even if it includes functions marked as sensitive. I do understand that that is a thing that happens today, on the web, and I respect that use case.

MAR: Are you referring to another nodejs build or typescript?

MF: Can you restate the question?

MAR: if the build artifact is a different js engine like v8 or sm???

BFS: It could just be a build of a JavaScript file. It would essentially just be the same file as with sensitive or hide-source, with those directives stripped out.

MAR: I think that works well for browsers, but nodejs applications, at least those I have contact with, they do not build javascript files, so those applications would have to introduce a build flow, which is quite the overhead for them. I’m one of the people asking for a toggle, but I’m thinking it could be a flag, it could be a host API or something, a privileged API which came up before, or something.

BFS: My understanding is js file presumably static because there was that spec rewrite mentioned in the slides about avoiding using the execution context. So if it is a runtime API that you can toggle, rather than static, it seems like we would encounter the same problems.

MF: I believe there’s a concern that because the directives at the time were envisioned as completely static information, it would not make sense for the runtime to track that. If the feature changed to be a runtime feature, then it would certainly be fine to use runtime facilities to spec it.

SYG: So MF, do you want to talk about sensitive stuff right now, or since it’s split would you like to table those discussion items?

MF: asking for addressing use cases for sensitive later since it stays stage 2. I'm happy to talk about sensitive right now if it pertains to a decision we make on advancing hide-source to stage 3.

SYG: Okay, then I withdraw the topic, I don’t think it’s relevant right now.

JHD: the reason I asked about non simple parameter testing is twofold:
I agree with you that if that were the only reason then it would make sense to evaluate that during stage 3, based on implementer feedback. I'm convinced by your argument that it's relatively trivial to track.
It seems like a mental model thing, if I'm looking at the directive, and there's a function above it in the code that the directive affects, then that's confusing to me.
And so to me it seems like especially since we already have that working for use strict, then it doesn’t affect functions written above it - like functions outside the function’s context.

MF: 'use strict' does apply to the parameter list above it, though, by forbidding duplicate parameters.

JHD: It still affects functions in the parameter list. ??? That’s kind of my thought process.

MF: I think we should probably get implementation feedback and include that in the decision making. That’s a fair point.

JHD: And there’s no risk of web compatibility concerns where someone in stage 3 might ship it?

MF: We could ask for confirmation between implementing and shipping.

JHD: Ok, cool.

YSV: We reviewed it again this month and the feedback was much more negative this time. Basically the opinion is that there isn’t enough of a justification for this proposal by itself. We’re talking about introducing potentially just one directive, and that hide implementation by itself is better than sensitive, ???. In our opinion, both of them not being done would be better But now we’re getting into smaller and smaller use cases and the implication of moving forward with this proposal is to add a new directive which is something we said we wouldn’t do, and I think there should be a high bar for introducing a new directive.
I looked at the issue from React where this was raised as a use case, and that use case can be achieved much better through developer tools. Black-boxing is much easier from developer tools than it is from the engine. So we are not convinced that this proposal is worth the precedent of adding a new directive.

DRO: I’d second all that, from Safari Web Inspector.

MF: I would urge people with that opinion to attend library meeting, I attended the last one and there was a lot of support for both directives there, with sensitive being toggle-able for their use cases. So that might be a good place where you could get additional feedback from the community.

YSV: really sorry to say this as you actually did split the proposal after my suggestion,
I would be interested in hearing the community feedback because I think maybe we can solve their problem in a better way. The other observation I had was that we are adding a few things to address problems between teams working together, whether it's library authors or members of the same company, accessing code that they shouldn't be able to. And maybe, like we’re going to have private fields and private methods in the language, but we don't seem to have a concrete story about what concerns these groups of people have and we’re not addressing it in a holistic way. We should approach the problem head on and define how much time we should dedicate to develop the language to address the problem head on.

JRL: YSV, you mentioned there was a React use case, could you add that to the notes please?

YSV: I’ll find it, yeah.

YSV: Again I just want to say, MF, you did fantastic work here and I really respect it, and I’m really sorry to bring this kind of news.

MF: I respect the feedback

YSV: I would be happy to join the library call and discuss the concerns that people have, and possibly bring it back later.

JHD: Yulia are you with safari saying that with both it is worth it and just this one is not worth it?

YSV: No, both is worse. Just hide implementation is better from our perspective, but we’re not sure it’s the right solution for this case, we’re not sure if a directive is the best way to do it. I know we’ve had the discussion over directives in the past but we’re not sure that there’s much value to adding this to the language.

SYG: Since devtools was brought up, I have a question pertinent to the current proposal for stage 3, not to the other one:
Remind me, is the intention of hide source that it be respected uniformly by everything that layers with Ecma262 in the host environment? Like dev tools should respect that?

MF: Not at all. The opposite: that only observations from within the executing program are affected.

SYG: Right. So I don’t actually know what the exact use case for react is. If it was black-boxing in a dev tools context, this has no bearing on their use case anyways.

MF: Yeah.

SYG: if that is the case perhaps, I don’t know how that would affect mozilla’s opinion here,
If one of the primary use cases they thought this would solve is not applicable, I don’t know. I wanted to clarify that though. On the topic of layering, is the current proposal proposing for both hide-source and sensitive that they are dealt with by external APIs on a case-by-case basis? Or if we’re not requiring them to be uniformly respected by other sources beside JS execution itself, is it the case that the ??? would look at the presence of these directives? Would it be up to them or up to us?

MF: The directives themselves - as I understand it, this is entirely a spec question - would not need to be inspected when ???

SYG: Sorry, this is not a spec question. I’m asking as a policy question, do we expect to dictate that other APIs should be respecting these internal fields of functions?

MF: I see. there is not currently a mandate to respect the hide source internal slot. Enforcement is simply done as a check in Function.prototype.toString. But in the error section, there is a more broad enforcing statement which says “any APIs such as Error.prototype.stack must obey this field”. So I guess we could probably add something like that for the hide source directive, and say that also any API exposing the source text internal slot must respect the status of the hide source internal slot.

BFS: There is precedent in nodejs of muting down our stacktraces when outputting to colored output. I think even if we are talking about dev tools showing these things, there is still some utility that can be provided such as coloring and stuff like that, that we’ve seen a good amount of success with in terms of reducing noise when people are debugging programs in node. So I wouldn't say that devtools ignore these, it's just that they specialize them somehow.

MF: We mentioned in readme that devtools could default by hiding but would let you show them. It kind of acts as an opt-in to black-boxing directive in that way.

YSV: Cursory note: Mozilla is blocking this but, for anyone who isn’t familiar, the proposal is not rejected, as TC39 doesn’t have a model for rejecting. As such, I am open to discussing, and I will go to the library calls and listen to the library authors as requested. And maybe we will come out of this with a better solution, maybe with the same solution.

MF: Takeaway is - I don’t have much for conclusion on my side. The feedback was kind of a backstepping from stage 2 where we were committing to a direction for the problem. So I will await feedback from Mozilla and Apple as to what they would like to do, otherwise I will feel kind of stalled. I will attend the library call and hear feedback there too.

YSV: One note is that we feel much more strongly about “sensitive” - we have large problems with “sensitive”. And you should explore different avenues for that

MF: I’m really compelled for the security aspect

YSV: On that topic I have to respond - we consider the security use case to be void in that case. We do not think that “sensitive” would work in the security use case.

SYG: I similarly reject the security framing.
It might be a correctness problem, it might be an API abuse problem, but I wouldn’t use the particular word “security”.

MLS: From JSC, I do not think that the security use case is valid.

LEO: Talking about the notes: I think for us to make it a following pattern for decision that tc39 makes,
And not as YSV tried to say - it’s not blocking the actual proposal. Rather than creating a new pattern on how we distinguish thing here, we should be more clear in the notes that we are blocking the stage advancement, and not the proposal. Is that okay to say, YSV and MLS?

YSV: Sorry I think I wasn’t clear. We don’t reject as a rule, we block. We can just say that it’s blocked from advancement. I know how much work this took, and I’m sorry for the surprise.

LEO: Yep, I understand, I just want to remove the ambiguity.

### Conclusion/Resolution

* “hide source” Blocked from advancement for stage 3
* “sensitive” raised concerns from implementers

## Intl.NumberFormat V3 for stage 2

Presenter: Shane F. Carr (SFC)

* [proposal](https://github.com/tc39/proposal-intl-numberformat-v3)
* [slides](https://docs.google.com/presentation/d/1uxw0Dd_lNW3zNgpKKsrnwCj2H7tVdlXkS8QJjVeW21k)

SFC: (presenting slides)

LEO: I don’t have any specific questions. Appreciate the work and the thoughts into it. And yes my team just fixed a thing that is being solved in a very nice way here that I discussed with SFC the other day. So it does have a +1 from the editor.

WH: You mentioned you take strings as input and you can format strings. What can be in them?

SFC: So right now the strings are passed into the number constructor in 262.

WH: Yes, and what are you proposing? What kinds of things are you proposing to allow in those strings?

SFC: The proposal is to allow the same syntax as Number constructor except no truncation to double space. For example the Number constructor already supports E-style scientific notation syntax - we don’t propose to change that. So that’s the scope of the proposal here, we're not inventing a new syntax. No, we accept same as Number constructor. Only difference is we don't cast it to a double.

WH: Ok, so it’s arbitrary precision?

SFC: Yeah, I guess you could say that.

WH: Thank you.

RPR: The queue is empty.

SFC: Ok, so I’d like to ask for two things: first I’d like to ask for stage 2 consensus.
Second I’d like to ask for stage 3 reviewers. The review is not going to happen until later in the summer but it would be good to have those people written down once the time comes up.

DE: I’ll be a reviewer.

SFC: Thanks, DE.

AKI: Can we get another stage 3 reviewer?

DE: it’s a really fun to review proposal, I really recommend it

SFC:I’d like to nominate WH for reviewing at least the part about decimal strings since he has expressed interest in that subject area.

WH: Okay, I’ve been drafted to review the decimal aspect and the rounding modes.

AKI: Is there anybody who’s never reviewed a proposal for stage 3, but wants to, but since they haven’t aren’t speaking up?

WH: Please send me a reminder.

SFC: I will

YSV: I would love to do another shadowing of someone reviewing a stage 3 proposal, if someone would be willing to have me shadow them.

DE: I’m happy to work with YSV on that, but I don’t know if this makes it two reviewers yet.

YSV: It does not.

AKI: WH will you only review a small part of it?

WH: I signed up to review number handling, rounding modes, decimal, etc.

AKI: Okay, so can I get one more?

SFC: If we have WH as a half reviewer and YSV as a half reviewer, maybe that’s enough?

DE: I have some idea for other people to recruit offline and if I can’t I will bring that up in next meeting

LEO: It’s definitely something where we can get reviewers from TG2, because not everyone from there is in this meeting.

SFC: Ok sounds good, I will reach out later in the summer when ready for stage 3 review. So for now there’s no work for those reviewers.

RPR: So for the notes, this has achieved stage 2. Congratulations, SFC.

### Conclusion/Resolution

* Stage 2
* Stage 3 reviewers:
  * DE working with USA
  * YSV; will shadow JSW (via IRC)
  * WH, only for the decimal portion
  * SRV (via IRC)

## Intl.DurationFormat for Stage 2

Presenter: Younies Mahmoud (YMD)

* [proposal](https://github.com/tc39/proposal-intl-duration-format)
* [slides](https://docs.google.com/presentation/d/1QmrhwsYwlsfe8FJqgGarCIAySWxeZzDqCrVN3-DWiGk)

YMD: (presents slides)

JHD: the slide that showed the dotted example looks like there are 3 digits in the space but there should be only two, since there will never be more than two digits in those positions.

USA: I think that's a typo.

JHD: Yeah I would expect no spaces around the colon at all.

SFC: It’s likely that this is determined by locale data.

JHD: But in English locales, it’s likely the format would always be what I just described?

YMD: Ok.

JHD: Ok, that answers my question.

DE: looking at localedata the other day, no locales have spaces around the numbers in dotted format. It’s either colons or dots.

RKG: You had called out that certain fields in the API were still being discussed, but I wanted to ask about hiding zeros for leading or trailing or both or none, and it seems like if you’re going to cover all possibilities, why not have two booleans? Has that been discussed?

YMD: So the idea is that many people

People hide all of them or none, yes?

RKG: I mean specifically, hideLeading and hideTrailing.

YMD: So you mean instead of one parameter that takes all of these values, you mean for each one, one parameter?

RKG: Yeah.

So as we discussed this is more readable. Hiding zero or all or none or leading, but…

USA: RKG, it’s an open design question. We haven’t figured out what the best option is there. We appreciate your inputs. We’re still figuring this out.

RKG: I can move the question to an issue tracker then.

USA: That would be amazing.

RBN: I was asking - I’m not familiar with CLDR, but can the dotted format handle years months weeks? My familiarity is with .NET TimeSpan which can handle at most days. If the format doesn’t support the fields you pass to it, are you going to throw an error?

YMD: That’s a good question.

RBN: I can file an issue.

RBN: I was also curious, this is also more about my unfamiliarity with CLDR, but you specified a list of units for wide, short, and narrow, are those specified in CLDR?

YMD: wide short and narrow is specified in cldr. The time itself is…but not for duration.

RBN: Ok.

DE: My question was about hours seconds and minutes in the CLDR.
I don’t know if there’s more data. I was wondering if it should throw an exception in that case. Not when formatting but when constructing a formatter. There are a lot of cases that throw exceptions. I think within the Ecma-402 group, we’re getting more and more comfortable with that as it applied to different cases, but I see SFC has another relevant comment. I think this is in the scope of what we can discuss in stage 2, where we have a first draft specification, we can work out these details in stage 2.

SFC: My comment is I agree, and specific locale data questions are usually when that proposal is in stage 2. I’ll just say what ICU does is fall back to the short format when the numeric format is not available. But maybe that’s not the behavior we want, maybe we want to be stricter and throw an exception if we don’t have that pattern, but I think that’s a great thing to discuss. Perhaps YMD or USA can open an issue.

SFC: [Here is a link](https://github.com/tc39/proposal-intl-duration-format/issues/2) to the issue where we were discussing leading and trailing zeroes option. It's a question we need to answer. We need to answer: one observation I have is that leading and trailing zeros already a subset that largest and smallest units can do. So that was also sort of a question we need to hammer out more. But the current proposal at stage 2 has the bare minimum and we can optimize the options more as we move forward.

RKG: If that subsumes that whole thing my question is kinda moot I guess.

RPR: The queue is empty.

YMD: So we are asking for stage 2.

RPR: No objections to stage 2?

### Conclusion/Resolution

* Stage 2
* Stage 3 Reviewers:
  * MF (via IRC)
  * RBN

## Symbols as WeakMap keys for Stage 1

Presenter: Daniel Ehrenberg (DE)

* [proposal](https://github.com/rricard/proposal-symbols-as-weakmap-keys)
* [slides](https://docs.google.com/presentation/d/1g5F3PiIVJosKQPZrwMKGzqBcELd1wShU-NnFby7jFXQ)

DE: (presents slides)

WH: I don’t understand this part about membranes? What is the difference between Box and wrapping an object?

DE: Sorry, I should’ve made this into more slides to explain better. This would be the first time that you have a primitive wrapping an object. So I wanted to think about it as if it’s like the Realm's Box.prototype.deref method owns the mapping - it’s not like boxes have objects in them, I wanted to think about it like deref owns the mapping from the boxes to the object like a high level contain.

The problem is that because Box prototype is ambiently accessible from the realm [if you have a box primitive value], you can get the deref method from anywhere in the realm. We could deny this [by deleting Box.prototype.deref, for example], but it means that if you don't prohibit/deny its use, if you have two different membrane-separated compartments in the same realm, and if you pass a box from one to the other it could deref the box

Because we want to support multiple membrane-separated things in the same realm, and because on the membrane boundary we wouldn't want to traverse all the records and tuples downwards, that wouldn't be acceptable.

WH: I’m still confused, I still don’t see how it is different from a class with a private field and a getter that returns the value of the private field?

DE: Well if it’s a class then you could put a membrane around it. The problem is that we can’t membrane-wrap a record, because if we put a proxy around a record then it wouldn’t have the correct equality semantics.

WH: Thank you. That answers the question.

DE: (continues at boxmaker slide)

WH: What do you mean by “registered symbols”?

DE: People have been throwing around multiple definitions for registered symbols. One is that Symbol.for doesn't return undefined. [Another also includes built-in symbols like Symbol.iterator.] Our proposal is that all symbols could be WeakMap keys, even if some symbols exist forever, it is fine. If you put one of those as WeakMap key that is what you’re signing up for [that the value stays alive]. It’s different from putting a string as a WeakMap key because strings are just values. So I want to propose for stage 1 that we discuss symbols as WeakMap keys and/or other boxing approaches. I’m willing to entertain other solutions within this staged proposal but this is the current thought.
Asking for stage 1. Thoughts?

AKI: There are many thoughts

KG: Since this came up before in ecma262 issue tracker and I was weakly opposed to it. Now, I am in favor of it given the motivation of using symbols in records as DE presented. However, I'm still weakly opposed to it without that motivation, so I'd prefer that this proposal not advance past that one [Records and Tuples].

DE: Noted.

RRD: I just wanted to ask, past which proposal? You mean Record & Tuple, right?

KG: Yes.

BFS: I’d like to allow this to advance past Record & Tuple - we had this problem at my work not too long ago and we got past it by having an empty object with an empty prototype, and I would prefer if we had a different approach to pass things such as opaque values to pass this. This would make it a lot simpler.

KKL: To clarify, the example with a membrane is totally valid - the issue with a Box.prototype.deref is relevant to not having a shared side-table that would lift up a primitivevalue to some global mutable state. I have word from MM that he does not consider the distinction between registered and unregistered symbols to be a blocker to advance this proposal.

DE: That’s good, I’m glad to hear that that’s not a blocker. I don’t like to think of boxed-prototype deref as something that promotes primitives to object, it’s more like that contains a mapping. So the mapping is not part of the primitive. But I can still understand if this ambiently available map is unacceptable.

JHD: On the slide where you have the table and say “why not”, I think it’s sort of a “must”, that if any of the Weak things accept or reject a value, then all the other Weak things should do the same. So if they are allowed as WeakMap keys, they must be allowed as WeakSet members and WeakRef targets. And registered vs unregistered Symbols, they would also have to be treated the same. Like however we treat registered and unregistered symbols has to be the same everywhere.Which dovetails into my next item which is about treating registered and unregistered the same everywhere. Even if Record and Tuple does not advance any further,
There was a long thread on ecma262 on this a year ago where a bunch of folks wanted it but the main reasons that issue got closed were because MM insisted that registered symbols not be included, and I insisted that registered and unregistered symbols be treated the same. And that presented an intractable block. So if there’s no longer an obstacle to treating registered and unregistered symbols the same in that regard, then that could support moving this forward without tying it to Records and Tuples.

DE: Thanks for your comments. To be clear, the proposal here is yes for all 3: all symbols would be keys for all structures. I do not know whether I agree with this use of MUST. About the previous discussion, there is motivation, independent of Records and Tuples, for Symbols as weakmap keys. This one about records and tuples is super relevant to me now, but that doesn’t exclude that there’s other important motivations.

AKI: Tension resolved?

(silence)

DE: Anyone on the queue?

AKI: No.

DE: Do people think it makes sense to pursue stage process and go to stage 1? Is this too conservative? Should I be going with a PR if everyone is so positive?

BFS: Didn’t we have a request in the comments here to not move it past Record & Tuple?

DE: Right. I think it would make sense for us to do both the things where people say don’t move it past, and move it past, where the plan would be to advance both this and records & tuples. So I think we could hopefully advance both for the next meeting. Do we have consensus for Stage 1?

AKI: Sounds like consensus to me. I’m going to call it consensus—congrats on stage 1!

### Conclusion/Resolution

* Stage 1!

## Arbitrary Module Namespace Names

Presenter: Bradley Farias (BFS)

* [slides](https://docs.google.com/presentation/d/1kYG69h_-x4qULJ9vw24agdt6hhJbpeOFFLC-6t55jVM)

BFS: (presents slides)

SYG: what transitional reasons?

BFS: So common JS currently as consumed by transpiled ESM allows you to have arbitrary property names in exports because they are compiling to objects and objects allow you to have non-identifier names. So when they import in particular a commonjs module namespace object things, IDK what to call it, you can see these non-identifier names on the module namespace object. As a correlation if you want to wrap stuff to be compatible with these tools you need do that sometimes.

WH: Are you proposing allowing just string literals or also something else there?

BFS: I’m unclear if we ever want to allow invalid strings. At stage one I’m just going for string literals.

WASM enforces UTF-8 on the export name.

WH: OK, thank you.

RBU: Just +1ing this proposal - I literally ran into this issue last night, where I was emitting WASM that I couldn’t import into JS because I was emitting a language that has a more expressive identifier syntax than JS does. So just +1, this is great.

BFS: Just so we have time to go through the stage process in order to have other language support. I didn’t ask for that on the agenda but I’ll ask for that at the next meeting.

KG: Was this advanced to stage 1?

AKI: No he didn’t ask for it, but he plans to do it at the next meeting. See you tomorrow & stay safe (not too safe)!
