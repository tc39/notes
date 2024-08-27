# 13 September, 2022 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Michael Saboff       | MLS            | Apple              |
| Daniel Ehrenberg     | DE             | Bloomberg          |
| Frank Yungfong Tang  | FYT            | Google             |
| Jack Works           | JWK            | Sujitech           |
| Caridy Patiño        | CP             | Salesforce         |
| Ashley Claymore      | ACE            | Bloomberg          |
| Nicolò Ribaudo       | NRO            | Igalia             |
| Istvan Sebestyen     | IS             | Ecma               |
| Philip Chimento      | PFC            | Igalia             |
| Kevin Gibbons        | KG             | F5                 |
| Daniel Minor         | DLM            | Mozilla            |
| Justin Ridgewell     | JRL            | Vercel             |

## Opening, welcome and roll call

Presenter: Brian Terlson (BT)

## Find volunteers for note taking

Thank you, volunteers.

## Adoption of the agenda

No objections.

## Approval of the minutes from last meeting

No objections.

## Next meeting

BT: Next meeting is from the 29th of November to the 1st of December. This is a hybrid in-person and remote meeting. There is an in-person option, it will be held in A Coruña, Spain. Looks like a very beautiful place. Thanks to everyone who helped to figure out if we could do this and helped organize this meeting. I think Ujjwal has been doing a lot of this work.

## Secretariat Report

Presenter: Istvan Sebestyen (IS)

- [slides](https://github.com/tc39/agendas/blob/main/2022/tc39-2022-039.pdf)

IS: [presents slides]

- List of new relevant TC39 and GA documents on the Ecma File Server
- New ECMA TC39 members Indeed and Vercel welcome, all administrative work has been done. They can participate in Ecma work already now
- TC39 Meetings attendance overview and update
- Download stats showing ECMA-262 the most popular download (38% of all downloads). Other TC39 standards also popular.
- Shared upcoming meeting dates for TC-39, GA and ExeCom.

In terms of the Secretariat Report not much has happened since the July 2022 TC39 meeting. So, everything is “business as usual”.

## ECMA-262 Status update

Presenter: Kevin Gibbons (KG)

KG: This is a pretty simple update. We've made a few editorial changes. The one you are most likely to run across is that we made the core Evaluation operation work more like the rest of the specification. So now instead of saying "Let X be the result of evaluating Y," we say "Let X be Evaluation of Y" just so that evaluation works the same way that every other operation in the specification works. It is still the case that the definition for that operation is spread out throughout the specification. We have no plans to change that. So the rules for evaluating a switch statement, or whatever, come after the part of the spec that defines the switch statement. But the prose for invoking the operation is now consistent with everything else so you don't have to learn a special form to know what that means.

KG: And then a few miscellaneous consistency things. We've made the prose for the preambles of intrinsic functions more consistent. Michael had a PR that clarified how number::toString and bigint::toString work for non-decimal radices. It's basically saying in prose what was previously left as a "you should be able to figure out what this is". And then PR 2874 is another one of those consistency things where we now say "X is a string" instead of saying "type(X)is String", just because it reads better and means exactly the same thing. And then a bunch of smaller consistency tweaks.

KG: And then normative PRs that have landed, these are all things that have consensus. We finally landed hash-bang comments which has been ready to go for a long time and just needed someone to present for stage 4, which happened recently. A few things from the last meeting, a host hook for allowing specifically HTML to reject private fields on the window exotic object. And then a minor tweak to how regex works, where they look up the flags property instead of doing a separate look up for every individual flag; only relevant for subclassing regexes which you should not be doing. We now normatively reference the latest version of Unicode and say that the tables of property values this particular thing from Unicode, instead of listing them out; because Unicode has made a stability guarantee. Finally, PR 1556 has been there for a long time. It's a tweak to typed arrays. That was a web reality fix that we sort of lost track of but have had consensus for a while. PR 2812 presented at the last meeting just a minor. Like this was the wrong thing in the spec fixed it. PR 2550, another one those old PRs that we finally came back to, clarifying what happens with -0 in Date.parse. The point is, lots of tiny things. Nothing really significant.

KG: A few meta changes. These actually haven't landed yet but they're about to. The build tool, ecmarkup, now lints for undefined or unused variables if you are passing the `--lint-spec` flag. This is relevant if you are submitting a PR or if you are using ecmarkup in your own project. It knows about most of the forms by which one might introduce a variable, but there is an escape hatch for telling it, this particular line introduces a variable even though it's kind of a unique form whatever. There's docs on the ecmarkup repo. Also, we decided that instead of writing, “&ldquo;” everywhere, we would just use actual Unicode code points, instead of HTML entities. The formatter will handle this for you. If you just run the formatter, which in 262 is `npm run format`, it will convert HTML entities into code points. Again mostly relevant. If you are maintaining a proposal or submitting a PR, not something you should need to remember, except to run the formatter.

KG: And then a minor administrative thing. The IPR check is now enabled in github actions. Thank you to JHD for making that all work and debugging GH actions, which is always a good time. As a reminder, please send the IPR form if you haven't. I know we have a few specific names of delegates who contributed previously hard-coded.

KG: And then the same list of upcoming work. Not going to read this again. Michael is still in the process of integrating the esmeta type checker that the KAIST research group presented, which is very exciting. And then just generally consistency and clarity stuff.

KG: And then this last thing is a PSA, which is that there is a tool called SearchFox, which is basically a rendered git blame view of the entire specification in your browser that has very useful features like a link to show the latest version without a given change and that sort of thing. It is extremely handy. It is linked from the readme of the ecma262 repository here in this little highlighted bit of text. No one ever reads the readme, so no one knows this exists, so I am calling it out here. If you need to do a blame on the specification, I recommend using this pre-rendered thing instead of using the very slow git blame. That's it.

## ECMA-402 status update

Presenter: Ujjwal Sharma (USA)

USA: And we'll move on to Ecma 402. No, do you see my slides? Yep. All right. Hello &, welcome, everyone. I will try to keep this rather short. First of all, I would like to welcome you to the final meeting of the Hebrew year 5780 to and Ethiopian year 2014. It's been fairly calm these last days ever since the last meeting there has been fairly small engagement activity on 402. Except this one normative PR 708 introduces, microsecond and nanosecond to the IsSanctionedSingleUnitIdentifier, that's quite a mouthful table. This PR was sent in by Frank proposed by Andre, but the meat of it is that it adds to the list of units that are supported by number format for unit formatting and the list currently supports to two milliseconds, which is all right? Given that it was written in a Date-aware world and not so much, a Temporal-aware world but now it adds microsecond and nanoseconds. Why is this necessary? Merely useful is because it helps us DRY DurationFormat. So I would explain that a bit further in the DurationFormat topic that I have. But essentially, we're adding support for two units for unit formatting, which would complete the feature set. So, at the very least that would help. This PR has TG2 consensus and it was approved in the recent meeting. So, I'd like to ask for consensus for this PR (#708).

BT: Anyone have concerns about this PR? Or trouble accessing the pr?

SYG:I have a quick question and I have no concerns about the PR whatsoever, but this is something that CM has repeatedly raised in the past. Like I don't really have the expertise or much care about these PRs. Can we do something about fast-tracking? Like I guess this is already the fast track but still -

BT: You're on the fast track, SYG.

SYG: Are there other folks who are already not in TG2 who are in TG1 who Who have technical opinions about these PRs. Like, if there isn't maybe we can make the fast track even faster?

USA: for what it's worth, according to my understanding everybody who's interested in internationalization is participating in TG2. But yeah, the process dictates that we need TG1 consensus.

MM: Responding to SYG, the non-obvious bottleneck in making that move that CM has continually raised is getting invariants written down. Once enough invariants are written down such that without taking things to plenary, we have a good chance of invariant violations being caught by people working on the specialized proposal then we can start thinking about doing less examination in plenary, but until we do that, the guardian of the invariants remains the the rest of the audience in plenary. So I'm sorry that's not advancing but we do want to move forward in writing the invariants down.

SYG: (via queue) Fair Point, I'd welcome getting those written down.

DLM: (via queue) explicit support for this change

BT: If there are no concerns then I think we have this PR approved and you can go ahead and draw. That's right.

DE: I want to jump in. The reason that we instituted the rule that normative changes need be discussed in. Plenary wasn't wasn't only for invariants. It was also for implementations to make sure that implementations were always in the loop when making these changes. I think it does make sense to delegate to subgroups that do adequately include implementations, but That change would have to be explicit.

BT: Alright, thank you.

USA: so, before I finish, one more thing that I wanted to highlight is sort of the result of our last meeting. If you might remember, we had a discussion regarding NumberFormat V3 in our previous meeting. And there is a conclusion for that. So, thank you KG and others who were involved in the TG side for this, but essentially, there is a new PR for number format V3, that apply the special casing for Strings, only for true and false. So if you miss the context previously useGrouping used to use booleans, and we switched to string parameters for better control and special cased every truthy string. Now this is no longer the case and only "true" and "false" as strings are a special case. This PR also has TG2 consensus so, this would be a pull request from a stage-3 proposal that has essentially already been approved if I understand correctly from this group. But yeah, it wouldn't hurt to have another confirmation.

BT: Queue is empty. So I think there is no concerns at this PR

USA: From what I read, I think MF and support Okay, great.

FYT: I support.

USA: Thank you. All right, then. That is it. thank you.

## Ecma-404 status update

Presenter: Brian Terlson (BT)

BT: Chip is not here, so I get to share the shocking news: there are no updates.

MM: Yes.

JHD: Chip would probably also prefer to say no comments.

## test262 Status Update

Presenter: Jordan Harband (JHD)

JHD: Nothing much to report. The specific thing that we added was a `test/staging` directory. The intention of this directory is to get tests that are correct and runnable running across implementations as soon as possible. But without having to massage them to conform to the test 262, structure and frontmatter and style and so forth and eventually they should all be polished and merged into the main test 262 suite. So to be clear, the intention is for implementations to run all the tests that are in test/staging to ensure interoperability as early as possible. My paraphrase is that -I was reading mostly Shu's comment there - my paraphrase it that it's as well. That tests that an implementation would otherwise keep in their own code base can now land in test 262 and prevent the need for another implementation to have to redevelop their own internal tests. So please run these tests.

JHD: The other notable item is that implementation maintainers have the ability to merge changes in here without test262 maintainer explicit approval, so it's even faster to get those changes upstreamed. So please let us know if there's there's any concerns. Thanks.

BT: thank you for the update, Jordan. Looks like no one is in the queue so we'll assume that there are no further comments on that item.

## Updates from the Code of Conduct committee

JHD: There are no updates.

## Intl.DurationFormat Stage 3 Update

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)
- [slides](https://notes.ryzokuken.dev/p/-5KQ3hFvM)

USA: Welcome again to another presentation. Again I'll be as quick as I can, and focus on the newest most important bits because we had a stage 3 update not so long ago but there has been some interesting updates that would be useful.

USA: So, jumping in just a little background, if you don't know what duration format is all about, it is about formatting duration bags. So you can have an object like this: { years: 1, months: 2, days: 3} and then you can format that into say Japanese with the long style or Any other locale for that matter. This would also be useful for Temporal Duration objects when they arrived in each environment. But not only useful for Temporal duration objects.

USA: Okay, moving on. There have been a few bug fixes since the last meeting. So, the first one is that now we pass zero as the fallback for fractional digits. Previously, the default value if you didn't provide any fractional digits was undefined. This was clearly a spec oversight because this can this cause non-ideal outputs for certain cases. This was first found out while implementing; thank you Frank for pointing this out.

USA: Another thing that's fairly recent is that the - you might remember that "digital" base style,for background the proposal contains four base Styles, which are long, short, narrow, and digital, where digital is a special case which deals with digital-clock-like styles. So it's sort of difficult to figure out what's the best defaults for that, especially since it's only well defined for a subset of the units. So the first PR here, it changes changes the digital default for non-digital. Units. This would be year months weeks and days from narrow to short. and the reason for that is because narrow has narrow, even though being smaller than short in many, if not all cases, has the possibility of being ambiguous. So for example, here in English, you might see months being represented as M even though months being M can be somewhat ambiguous. So now the default if not provided would be "short". So by default this output would no longer produced, instead you get that [on slides].

USA: Another change was change the default display option from `auto` to `always`, for hours/minutes/seconds So the issue that was raised with this was that the previous defaults allow for ambiguous output like this one, you can get 04:05 and then it's hard to say if this is or four hours and four hours and 5 minutes or four minutes and five seconds. Now all three units are shown always by default. So you'll have clear zeros to see what you're missing and of course you can change these to still get the previous output, but that would have be explicit.

USA: Apart from that, there was one improvement which I sort of hinted towards in the status update. So going deeper into that. essentially, duration format was trying to format a bunch of numbers, trying to pluralize everything based on that and then ListFormat them together. Now Frank pointed out that we could just directly use the NumberFormat unit formatting. So that removes the need for pluralizing internally all the units and avoids repetition here because NumberFormat already formats, for a number of units, not limited just to duration units. This however, depends on the Ecma 402 PR that was just approved. So that is great that was approved, otherwise it wouldn't have support for microseconds and nanoseconds, which would make this impossible. Anyway thanks Frank. So yeah, this, removes internal slots from the object and makes it cleaner but there is no observable-from-the-outside change.

USA: Anyway, previous bug fixes are normative. So I would like to ask for consensus.

BT: Let's see. The key here presently a. Give it a go. couple seconds here. Just to see if anybody is frantically typing.

SFC: [from queue] Support these changes.

DLM: [from queue] Also support these changes.

BT: Sounds like consensus to me.

USA: Thank you.

### Conclusion/Decision

Consensus for presented normative changes:

- Changing the fallback for fractionalDigits from undefined to 0.
- Changing the defaults for the digital style.

## Temporal update

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2022-09/)

PFC: (Slide 1) This is another presentation that is similar to the ones that you've seen in the past few plenaries with a couple of bug fixes for the Temporal proposal, that are normative and therefore need consensus. Most of the bug fixes are as usual fairly minor edge cases that got discovered during implementation, so I'll try to be quick about those. But as we were speaking about earlier, this is the forum where we make them known to implementers. So I will mention each one of them quickly. Also, just general news about the proposal.

PFC: (Slide 2) The current course is continuing to adjust the proposal based on feedback that we get from implementations and bug reports. The fixes have continued to be pretty minor. An exception to that is some concerns that we heard recently from JavaScriptCore about how mathematical values in Temporal.Duration are treated. Now, this is something that we've adjusted several times and reached probably something approximating a least bad solution, so this is to acknowledge that we're going to take these concerns into account and take a look if there isn't a solution that is even less bad than we have.

PFC: I'm also going to share some good news from the IETF. (Slide 3) To recap things that have happened in previous plenaries: we have currently said that Temporal should not ship in browsers without a flag until we have our time zone and calendar annotation syntax on a standards track in some sort of standards venue. I can share that there was recently a big step towards that. The standards venue we chose was the IETF. We're trying to make an RFC, which we want to be published, defining this syntax. In the IETF meeting in late July the working group reached a consensus on what needed to be published. And so we expect that this will become a published RFC pretty soon. There are just administrative blockers at this point. The IETF liaison needs to get a positive signal from the ISO liaison to make sure that there aren't things being developed in opposite directions before the IETF wants to publish it. Standards organizations, we all know how they work. We’ll alert the plenary when this happens because if I recall correctly, the trigger to being able to ship Temporal in a browser without a flag would be that there is actually a published RFC draft, which is not going to happen until these administrative blockers are cleared.

PFC: The annotation syntax is tentatively named IXDTF, which stands for Internet eXtended Date-Time Format. And as you'll see in the next section, there's a normative change bringing the conclusions of that IETF working group to the Temporal proposal.

PFC: (Slide 4) So these are the adjustments that we'd like make and ask for consensus on. (Slide 5) As I just mentioned, the conclusions of the IETF working group, bringing the IXDTF format to Temporal. When the draft gets published our calendar annotation and the time zone annotation are going to be official standards. The standard also allows unknown annotations, which you should accept and ignore. The standard also introduces an exclamation point character, which is a 'critical' flag indicating that an annotation must be respected. Those are the two changes that happened above and beyond the syntax that we originally proposed. (Slide 6) The way that's reflected in Temporal is that it will ignore unknown annotations unless they are marked critical. If we are parsing a string that contains a critical annotation that's unknown, we will throw an exception and say the string cannot be parsed. As for the time zone and calendar annotations, if those are marked with the critical flag, that will have no effect because for Temporal's purposes they were already treated as critical. For example if you put this date here "2022-09-13[u-ca=hebrew]" with an annotation specifying that it should use the Hebrew calendar, that would already never get you a date in the Gregorian calendar. So that's what I mean by these annotations were already treated as critical. But the flag might have a meaning to other consumers of ISO strings with IXDTF annotations. (Slide 7) And so for interoperability, we're going to add new options values to some of the Temporal types' toString functions, which will explicitly say to print the flag. So those are the normative changes that we'd like to add as a result of the output of the IETF working group. I'd also like to thank Ujjwal (USA) for participating in the working group and bringing this to a good resolution.

PFC: (Slide 8) All right, so while we're talking about the format of strings, we've made several other tweaks to the ISO 8601 grammar.

BT: One second, I think Jordan has a clarifying question.

JHD: On the previous slide so you half answered it. You have this toString option so that I can choose to add the critical flag. My question was on the one slide before this, if I parsed it from a string with a critical flag, is that bit - that there was a critical flag - present anywhere?

PFC: No, that's not preserved in the data model of Temporal objects. We're treating that purely as a property of the string.

JHD: So if the flag has meaning to other consumers, why wouldn't that be something we want to preserve? Like, I would expect to be able to round trip a string back and forth between a Temporal object and I can if I maintain the state myself but unless I parse the string myself I wouldn't have any way of knowing there was a critical flag in it to know to call toString() with those switches.

PFC: Yeah, that's a good point.

JHD: Is there a strong reason to just not to add an accessor and store a bit and an internal slot even if nothing cares about it?

BT: This is straying from clarifying question territory.

JHD: I can put that on the queue. That's fair.

PFC: That might also give me some time to look it up in the notes. I know we discussed it but I'm blanking on what exactly the discussion was.

PFC: I'll go back to the ISO 8601 grammar. There is a removal of some ambiguity in the grammar between a string of eight digits, which is a valid calendar name. Unfortunately it is also a valid year-month-day syntax. So this ambiguity could have been resolved either way but we picked this way. And then the other PR makes time zone and calendar names case insensitive as they currently already are in Ecma-402. So that's for consistency with Ecma-402.

PFC: (Slide 9) And then fixing a bug where a `Z` UTC designator was accidentally allowed in a PlainDate string when it was passed as part of a relativeTo option, which it shouldn't shouldn't have been.

PFC: There was another pull request specifying whether annotations could be added after shortened month day and year month syntax, but we found out that we're actually not done discussing that. So that might appear in a future plenary for consensus.

PFC: (Slide 10) The next change is some tweaks to the order of observable operations that you could observe if you're using proxy traps, we've made three methods consistent where two of them did things in one order and one of them did things in another order. This is probably not going to affect anybody's code unless they really want it to.

PFC: (Slide 11) Another PR from Andre from SpiderMonkey. This is some more validations of user code functions that are called in calendar calculations. This just adds some more checks for results that are inconsistent across calls if we're adding two dates under a certain circumstance, which I won't get into right now, but you can read the PR if you're really interested.

PFC: (Slide 12) This one is another thing that affects the observable operations, but it's probably not going to affect anybody's code. We're skipping an unnecessary observable HasProperty operation when that is possible.

PFC: (Slide 13) And then finally a bug fix where the bug in the spec text has been there for a long time, but it was latent. After adopting the new rounding modes from NumberFormat V3, which we did in July, the bug was exposed. So that's fixed now. It brings the spec text in line with what the intention was.

PFC: (Slide 14) So that's the end of the PRs. So if we've got any other questions… I will also take a look at the notes from the champions meeting where we discussed the critical flag to see if I can answer JHD's question.

BT: So, if you want to pause on JHD's question for now we could move that to the end.

PFC: Yeah, can we do that? Because that'll give me a minute to look it up in the notes of the last champion meeting.

FYT: So my question is, you mentioned the IETF's spec that will accept unknown annotations, so does that mean our parser has to change to read through those things and just ignore it?

PFC: Yeah, that does mean the parser has to change. You'll find the details of what needs to change in the grammar in that PR.

BT: Okay, next is Dan.

DE: It's great to hear that you've resolved - that you have this common plan with IETF and I guess this, the result shows with this better, I mean, more extensible model, it shows that it was worth it to have this conversation with them and build consensus, and that you have that consensus now. As far as getting this proposal to a point where it's shippable do we anticipate any further changes? Is it really a question of just waiting for this formality? Do we have any other bugs that are open?

PFC: Yeah, there are some. There are several small ones which are sort of on the queue, we need to get around to fixing them. There are are four large ones that I know of that are slowly moving along. So one is an issue from implementers about having - the fact that most methods need to check whether the calendar that's carried by a Temporal object is built in and unmodified or not. In a discussion with Frank from V8 and Yusuke from JavaScriptCore, we had discussed trying to make built-in calendars into frozen intrinsic objects, so that's still under discussion. It's not clear whether we are going to do that or whether we need to do that, but it's slowly moving forward. There's an issue from V8 that's asking us to remove the calendar slot from PlaneTime, we need to investigate if we could do that in a way that would still make it possible to introduce times with calendars in the future while still remaining web compatible. There's an issue where we need to get better integration of Temporal.TimeZone and Temporal.Calendar objects with Ecma-402. That was asked for by TG2. So that's that's open and that's a sizable task. And then there's the concerns about the mathematical values in Temporal duration that I mentioned the beginning of the presentation. So those are the four open issues that I consider substantial.

BT: Just a time check. There's three minutes left.

JHD: It certainly is not the only criterion, but I think it would be strange if we decided it was ready to be shipped in a meeting that it still contained normative changes to the proposal. So I'm hopeful that there will be a meeting where we have none and then we can discuss shipping it.

DE: That's just not how our process works. We don't have a waiting period. We could adopt one that's a possible change in process.

JHD: No, I'm not saying a waiting period. Our process also doesn't have implementations agree not to ship. So we're kind of in gray area here regardless. I'm saying that if they're still normative changes that haven't landed yet that no one can have implemented. It seems a little premature to endorse implementation shipping it unflagged.

BT: I don't think we need to have a process debate right now. The point is well taken that JHD would like there to be some discussion. So I think that's fine, let's leave it there.

SYG: Yes, I wanted to read more about the Number vs mathematical value concerns from JSC. Is there an issue? I tried to look at the first page of issues, but I didn't see anything that jumped out as being the one.

PFC: The issue number is 2195.

PFC: JHD, I've got the bit from the notes about the question of whether to persist the critical flag in the data model. So what we discussed in the champions' meeting a couple weeks ago was that we didn't think incorporating that into the data model and changing the way the Temporal objects work should be a stage 3 question, especially since like there is literally nobody else that consumes this flag now, so it could be a follow-up proposal if there later come to be applications out in the world, that do consume that flag.

JHD: But the toString behavior you have there, I think that if that was available, then you would want toString to include the exclamation point when it was parsed as critical, and not by default. And so you would probably have a different API in toString to override whether the critical flag was present or absent. And so shipping what you currently have on the slide with that toString API, wouldn't that prevent it being a follow-on proposal?

PFC: Not necessarily.

JHD: I'm not sure if it can be shipped in a way where it could be added later. Given that if someone might start depending on parsing a string with an exclamation point and outputting no exclamation point, you would no longer be able to make that output no exclamation point by default.

PFC: Well, you would, because the option would still be there and it still produce an exclamation point. I mean, the purpose of the critical flag is for somebody who has date or a date-time and is serializing it for somebody else to consume. You can express an intention for the consumer. So the way I think about it, once you've parsed the string, you've consumed that intention from the person who gave you the string, and you've decided what to do with it. Then if you produce another string for somebody else to consume, you don't need to preserve the intention of whoever gave you the string, right?

JHD: Why not?

PFC: When you produce a string for somebody else to consume, you want to express your own intention about what they should do with the annotation.

JHD: Right, but if that information is lost, then I can no longer express an intention to pass the original intention along.

PFC: I think passing the original intention along is probably not going to be a use case. It's going to be like the intention goes from sender to receiver and not through an intermediary. If you need to preserve the intention as an intermediary, then you should just pass along the original string.

BT: Can I suggest that Jordan file an issue on this topic and then we can take the discussion offline?

JHD/PFC: Sure.

PFC: I guess I'm not positive about whether the existence of this issue prevents moving ahead with the changes in that PR as they are.

BT: Well, let's ask for consensus and see.

FYT: Sorry, I kept trying to talk about Jordan's topic, but it never - can I talk about JHD's topic? I oppose what JHD described because that will mean that Temporal would have to keep the exclamation mark information in the Temporal object, as well as other ignorable bracket points, or whatever exactly JHD has proposed. If the Temporal object has to keep all those things, I think this is a waste of memory for implementations and I don't think we should keep two bits to store that critical flag as well as other object strings that nobody else was using.

BT Okay, thank you. JHD, please file an issue.

DE: [from queue] Explicitly supports landing the Temporal changes as proposed.

BT: JHD does your feedback block?

JHD: Yes, I'd like to hold off on landing at least the stuff around the critical flag until this issues discussed. We don't need to discuss it in plenary necessarily but I'd like it talked out first.

PFC: Okay, is there any objections to consensus on the remaining PRs?

BT: I see no objections that are so I think that's consensus to all the normative changes minus the critical flag, which will be discussed on GitHub.

PFC: Thank you.

### Conclusion/Decision

- Consensus on
  - <https://github.com/tc39/proposal-temporal/pull/2394>
  - <https://github.com/tc39/proposal-temporal/pull/2395>
  - <https://github.com/tc39/proposal-temporal/pull/2377>
  - <https://github.com/tc39/proposal-temporal/pull/2387>
  - <https://github.com/tc39/proposal-temporal/pull/2392>
  - <https://github.com/tc39/proposal-temporal/pull/2400>
- No consensus yet on <https://github.com/tc39/proposal-temporal/pull/2397>

## String.dedent

Presenter: Firstname Lastname (FLE)

- [proposal](https://github.com/tc39/proposal-string-dedent)
- [slides](https://docs.google.com/presentation/d/1uSUYGTOhPUzxcp8ZzTNFGF64lFMfnriEJRGQtoCXzRc/edit?usp=sharing)

JRL: On my slides, a mid dot is going to represent a space because it's impossible to talk about this topic without actually visibly seeing a space.

JRL: String.dedent allows you to input code in your source code and have it output without indentation. So, in this case, I'm console logging a string that's going to strip the leading spaces from each of the lines, according to the common indentation rule. Essentially, it allows you to have pretty source code and pretty output at the same time.

JRL: Common indentation is the maximum leading white space that appears on every line that has content. So in this case, the common indentation is six space characters because there are six space characters on the line that says first, there are seven on the line that says second. And then there are six on the line that says third. So, whenever you see a non-whitespace character, the common indentation stops and everything before that is considered. Common indentation is not affected by empty lines. It's not affected by whitespace only line. It's only lines that contain content or an expression interpolation.

JRL: We have an interesting case when we talk about escapes. If you're not aware, tagged template literals are actually two string arrays. There is a raw array and then there's a cooked array. The raw array is the literal source text that you put in between your template tags. The cooked array is the same thing except all of the escape sequences are cooked into their real value. So, in this case, I'm defining two template tag functions. One is called `cooked` and it console logs the cooked array, the other one is called `raw` and it outputs the raw array. And I'm using the exact same source text, and passing that to the cooked tag and the raw tag. And if you look at the bottom half of the slide, the cooked tag cooks that `\x20` hex escape into a character. That line turns into 4 space characters. The raw array does not cook that hex escape. So it's two space characters, followed by the `\x20` escape, followed by another space character. So we have two different behaviors, one for cooked, which cooks escapes into a space character and one for raw, which leaves the escape sequence as is.

JRL: What do we want to happen when we have a escape character in common indentation? That's the whole point of this PR. Currently when you have an escape sequence that is a whitespace character and it appears in the common indentation, we remove that from the dedented cooked array. So in this case, the output won't have any spaces. What’s happened is we've cooked the `\x20` into a space character and then we've stripped all the leading space characters from that line. Whereas with the `raw`, we would only strip the first 6 space characters. And we would still have an `\x20` escape sequence followed by another space character. So the raw just removes the 6 space characters. The `cooked` cooks the `\x20` into a space and then removes all of those space characters. This seems a little bit weird. It is supposed to operate on the literal Source text that you wrote in your file. It's not doing that here. It's operating on a cooked value, not the source text anymore. What this PR proposes is that we stop the common indentation when we run into the escape sequence, even if that escape is for whitespace characters. I'm going to flip back and forth, so hopefully you can see all that's changing here is the cooked output. All it's changing is that once we see the escape sequence we stop the common indentation at that backslash character. So now, the cooked output is exactly the text that is only the literal space characters in source text. The `\x20` is not remove as indentation, but it is still cooked in the output to read, so we have a real space character in the output where the `\x20` was. Now, instead of getting no space characters, we get two space characters because we cooked the \x20 into space and then there's another space character.

JRL: This actually has another effect right now in the current spec text, if you have a escaped newline. In this case, there's a `\n` followed by two space characters before `bar`. The current behavior cooks that new line into a literal new line character, and then performs dedenting on that cooked sequence of lines. So in this case, the dedent only sees two common indentations because that `space space bar` is treated as an actual line that it needs to be dedented. If we look at the raw text, it doesn't treat that as a new line. And so we do remove all of the leading indication that we expect from the raw text. The proposed change here if we were to accept this PR, all that changes is the cooked string. The raw string still stays the same. Now, the cooked string does not cook the new line before performing the dedenting, we do dedenting first and _then_ we cook the new lines and whatever other escape characters are there. Hopefully, I've described this long enough for everyone to understand it. Are there any discussion points to go over?

MM: I want to understand how this is - how your algorithm works. Obviously you have to look at the raw text. Are you also looking at the cooked text and assuming you understand how they correspond or are you processing only the raw text?

JRL: So in the current implementation we're looking at both the cooked strings and the raw strings separately. In the proposed PR, we are dedenting the raw string into a dedented raw array and then we're cooking that into the cooked array.

MM: To make sure I understand you're not looking at the original cooked. Think that’s all.

JRL: Correct. The input’s cooked array is unused. We only look at the raw array, perform dedenting on the raw array, and then we cook that into the cooked array.

MM: I want to say excellent, everything that has been discussed. Something I expected to be controversial or worth arguing about in it every single case, throughout this whole process, I think you've made the right decision.

JRL: Thank you.

WH: Is there a chance for the cooking algorithm to get out of sync with what templates are using? What's the approach to make sure that they stay in sync forever?

JRL: The way I've currently implemented this is I'm just using the actual grammar as a parser. So I'm using `ParseText`, which is how we do a couple of other things like `eval` and number parsing. I'm interpreting the string as `TemplateCharacters` grammar and then taking the output to perform cooking. KGN has raised that this actually prevents you from having a dollar sign, if you were to manually create your array and pass it to dedent. I don't think it's much of a problem but it is something we could fix if we wanted to list out specifically every single escape sequence. So, the answer to your question is that currently there's no possibility for it to get out of date because we're using the same thing that parses a regular template tag in order to do this.

WH: I'm trying to think of whether dedenting might create surprising behavior during cooking. I can't think of any cases at the moment. Things to look for might be something which is not an escape sequence becoming an escape sequence because of dedenting. I can't think of any such cases at the moment.

JRL: I don't think that can happen. I can prove it out afterwards so we're not taking everyone's everyone's time.

WH: Okay, sounds good.

BT: So with that, the queue is empty.

JRL: I'm asking for consensus to merge, pending what we decide we want to do with the actual implementation. Do we want to continue to use ParseText or do we want to manually list out every possible escape sequence?

BT: MM has given his explicit support.

KG: I will submit a PR using ParseText but fixing the dollar curly brace issue.

BT: Any other comments? Otherwise, I think we have consensus on merging this PR.

JRL: Excellent, thank you.

### Conclusion/Decision

- KG to submit PR fixing the `${` issue, consensus on PR otherwise
- PR: <https://github.com/tc39/proposal-string-dedent/pull/67>

## ShadowRealm Update

Presenter: Caridy Patiño (CP)

- [proposal](https://github.com/tc39/proposal-shadowrealm)
- [slides](???)

CP: Quick update on ShadowRealms. For those that are not familiar with ShadowRealms, we have been working on this for many, many years, I think since ES6 - one of the features that we cut out was called Realm at the time. We recently changed the name to ShadowRealms. It is basically a way, a new way, to evaluate code in the runtime having its own global object, global scope and so on. There's a lightweight simple way to evaluate code in a separate context that sometimes you want to do something like that, today, you have to use iframes on browsers and you have to use VM on node and so on, which are not very lightweight, especially the iframe case, and it has a lot of baggage associated with it. So we have been working on this for quite some time.

CP: In terms of SalesForce we have the use cases for all [??]. Some most of the champion, of course, of course, at the time. the use case for us is the integrity protection that we offer by providing a global object for different vendors that are running code in the same app and with such mechanisms, they can do whatever they want with the global objects that are assigned to them. They can have their own polyfills loaded into it, they can have modifications and global variables, and loading libraries and doing what kind of things people are doing on the web these days, they can do it in their own little thing. And that provides some flexibility for them to not collide with the rest of the app and the rest of the code that is running in. That's the use case that we have. But there are many things that you can do with with the shadowRealms, you can have a plug-in system, or you have some sort of library that doesn't go well with the app itself, you can just offload it. Same kind of things that you can with iFrames today just a lot more heavier, more complicated sometimes, so I believe that this feature is a gap that we can fill with it and that kind of a recap on it.

CP: The API is very straightforward. It's just a brand new global constructor called ShadowRealm. Doesn't have any options when constructing it. Once you create it, you get two methods import volume and evaluate input value. Value allow you to Evaluate or get an evaluate initialize a module inside the realm and getting access to one of the exported value from that module by specifying the binding name that you want. And `evaluate` is equivalent to eval. It expects a source text and it will evaluate that code inside the realm. And the novelty on this is basically what we call the callable boundary. One of the primary features of the Shadow Realm is that it does not mix the object graph of the realm itself with the incubator realm. What that means is that you cannot get an object reference from inside the ShadowRealm and vice versa. You would not be able to get a reference from the incubator into the ShadowRealm. And the reason for that has been that we considered this after talking to implementers and such we consider that this is problematic or a footgun, it opens the door for identity discontinuity between the different type of options that you can have and it creates a lot more problem that is solved. So, for that reason, the callable boundary is in place to prevent any object reference to be leaked into another realm.

CP: So, at the moment we have multiple companies and people involved in the efforts of getting the shadow realm in browsers and engines in general. Igalia has been working with SalesForce to implement some of these. to complete the spec that are needed especially the integration with HTML. But in general, like, the multiple groups that have been working on in terms of the implementation of WebKit. It's implemented in Safari 16. These that's what we learned today in Chrome is under a flag, and in FF it is also under a flag.

CP: There are a few things that we have been working on for the last couple of months or so, since the last plenary or the plenary before. There are specific details about errors that we have been working on and the integration with HTML that we also have been working on. mostly Igalia folks helping on this. Specifically when it comes to defining. what are the things that the hosts will be able to install in a brand-new Shadow realm global object and that part of the integration that is still in progress. The rest of the integration I believe is complete in terms of the how the mechanics of how it works works, the mechanics of how it connects to the actual window and allows access to certain information about the window that is needed for the realm to function especially when it comes to the module graph and so on. So those things that I believe they are in good shape, just one needs to be available for a new Global.

LEO: Just as a detail for the HTML integration, work there is in progress and it's about finish. I think we had a small summary of the remaining parts and it's just like a few small parts. With completion for that I already got signal from Domenic today in person that we might have like a final review and I believe we can have a HTML integration done before the next TC39 Plenary. This is my estimate.

CP: Excellent. Thank you. So the details are the current PR open is the one that is normative related to the propagation of errors. It came to our attention from Google, from SYG, where they encounter certain situations where it was challenging or difficult to understand what was going on because of the callable boundary restrictions, if the error occur with think the shadow realm instance, the error reported was simply a type error without details and that makes it difficult for the developer to find out that whether that's an error during evaluation of modules or linkage of modules, that no details are all. That makes it difficult to solve. They encountered that during the writing test for the, the new feature. And so we have been looking into how to solve this problem at the moment, or at least during the last discussion in plenary we decide that we could solve these by allowing certain information to cross a callable boundary and to be a specific to be copied, and some details of the of the error can be copied. At the moment we're only copying the message of the error. So that's what we are right now with the pull request, we're copying the error. We are asking for feedback. This is challenging because we have different types of errors, depending of the type of errors you might or might not have a message, the message might be a string value or could be anything defined by the user. So it becomes a little challenging in terms of what kind of information we want to copy and how that copy will happen. In the case of AggregateError, for example, there's not much in terms of the message. You just, have an aggregation of errors, and in this case, you're going to get a TypeError without a message. So you'll be guessing what's going on there. And similarly, there are other informations on the error, like the name and sometimes the the stack information about the error that are useful in some degrees for developers to find out what's going on. We believe in the champion group, we have concluded that most of the information that you see in error is fine to be shared in both in both directions, whether that's finding (?) from or from the realm itself calling into an (?) bound function through a wrapped function. Those seems to be okay to share some information. And so they the current implementation that we have in the pull request, does not distinguish between the direction the of the call. So it could be in either direction, could be when you call in for value or evaluate. well, so basically, that three places in the spec where we control the error and propagate the error by creating a brand new TypeError with the associated realm that will receive that TypeError. we're copying the message at moment, so that's what we are right now.

LEO: For the error details, we are not asking for consensus here at this meeting, but we will bring it to the next plenary as review is still in progress. This is the way that we tend to to ship it, but the PR has ongoing discussions today and this is just a clarification, we are not asking for consensus. right now is like there are things to be addressed but this is the way we tend to ship it. For the other case is just so the release of Safari 16, the got me out of surprise, it was not expected, I just want is when reaffirm when we moved Shadow Realms to stage three was that like it was pending the HTML integration and it was agreed that we wouldn't have like a final version of Shadow Realms before the HTML integration. Just to make clear, I believe the HTML integration is no relationship to the release of Safari 16 today, we are still working and we still have the compromise to get it complete because our goal is to have ShadowRealms correct and complete and learning in all browsers correctly as design. And there is there's one core spec that we are working right now, and there is the HTML integration, which we believe we tackled all the parts and we have identified the small details on the remaining parts. So w're going to continue our work with Igalia as well to continue the implementation, and we're going to have this implementation webkit we intended to have it complete. And that's how we want to report when we come back to request eventually request for stage four. Just wanted to make this clear that we're not going to slack on it because of this current release.

CP: Yeah, thanks. But if any of you have any comments, any suggestions, any feedback on the current release please open issues or comment.

BT: SYG is on the queue.

SYG: LEO touched on it a little bit, there was some confusion for myself and others earlier today when the Safari 16 release notes came out. I want some confirmation one way or the other from the Apple folks. The contact I had tried to rope in on Twitter is no longer at Apple. So I wanted to make sure what is shipping in Safari 16, because my understanding so far is that the HTML stuff is not shipping in Safari 16. But if that is the case, it would be preferable if Shadow Realms were not half shipped in Safari. So I want someone from Apple to chime in and confirm what is actually shipping.

MS: I'd have to look into that and get back to you. I can do that by tomorrow.

SYG: That’ll be perfect. Thank you.

LEO: SYG, is there anything about these errors - one of the goals for the errors is also addressing some of your concerns that you had about these errors in. Do you think this work that we presented today, would be sufficient to resolve the concerns?

SYG: I confess I haven't looked closely at the PR in a while. Based on your slides today, it seems acceptable to me. The bar is really quite low for myself personally, it's just like any extra help during the debugging sessions to kind of propagate how to debug the problem further. Preserving the actual error types is not not at all important. as long as some information is propagated like something failed to import, file not found, that kind of thing that would suffice for me.

LEO: Thank you.

DE: so, there's a current debate about how concrete to make the semantics about errors. On one hand, I guess I've been arguing that the specification should be pretty concrete and other people argue that it should be more implementation defined. I think we need to draw a conclusion and land a patch here before this is shippable. This is a question I guess partly directed at SYG. How concrete the direction should be or how much we should leave for implementation-defined. Given message and stacks are already implementation defined.

SYG: So DE, what are the things, we're talking about here, the message stack, and the kind of are instance, what else?

DE: For each of those should the message be based on an explicit formula to give you the message, for example, or should that be just implementation-defined and then you can figure out what to what to propagate through.

SYG: I see. So this is on the -

DE: or for the stack, should it say, you know, maybe don't show too much but it's fine or should it be more more explicit about what can or can't be shown?

MAH: I'm happy to clarify what DE is bringing up here because I am the one proposing alternatives. Everywhere in the spec when there is a TypeError or something thrown, by the spec. The message is not defined by the spec, it's always implementation defined. What I'm suggesting is that we allow engines to unobservably copy or look up the name and message of an error and included it in the content of the message that they implement with this new TypeError. But that we don't prescribe in the spec that is it is an exact copy, it leaves an opportunity for engines to format the message with information it wants to include, information such as name, which may be relevant. And so on the only restriction we would put is that no other information besides name and message would be able to go through the callable boundary, And that's looking these up. Would have to be unobservable to the program.

SYG: I see. So, strictly speaking, I'm not sure right now what the difference is between saying in the spec for the error message that it must be exactly copied or it might not be exactly copied. Because of the callable boundary, how would you know the error message differed?

DE: You'd be able to observe the Get inside of the realm.

SYG: Yes, I see.

MAH: And also a program that executes on both side of the callable boundary a would be able to see - I mean, it's whether it can expect that the message is exactly the same as it was on the other side or whether the implementation is free to do whatever it wants.

SYG: I see. I think I would prefer - I think my inclination right now is that not observable getting the Get is probably fine. The error messages that are about debugging are really the system where they are like the host originated error messages, not really about the user code originated error messages. I would imagine that given like if you're trying to debug through the callable boundary user code, there are other ways to surface. What went wrong inside. the shadow realm, whereas if it's you know, from deep in the bowels of modules subsystem it's difficult to really figure out what is going wrong. So going by, you know, the bar I said earlier, which is helping really debug, not to exfiltrate information or anything like that. Unobservably seems fine. I'm hesitant to promise that right now because there might be implementation complications about this. Can you always unobservably dig into a message and see what kind of message it is and what the error message should be? maybe is fine for Blink, but not for Firefox, maybe it's fine for Firefox but not for Safar. Like it's unclear me right now that it's always possible to do so.

MAH: Yeah, I would expect engines to be able to be conservative if they're not sure, and basically not copy a message if…

DE: So to clarify, the semantics that MAH is suggesting are very concrete. First, you check whether there's an ErrorData internal slot and then if there is, you know it's not a Proxy and then you can do it. GetOwnProperty of the message peroperty. and then if that's a value then you can check if that's a string or do to string and use that. So something that could be made to always work. So we could have the message be well defined but also make sure to not observably check. So there are two independent questions. whether the message should be well defined and whether we should do an observable Get. I think we can draw a conclusion to this question in a future SES call and come back to the committee. But this is the current debate. And I think it's not wise to ship this proposal until we draw a conclusion here. And then a separate independent question is, how concrete should we be on the lack of stacks and how deep should the lack of stacks? Should we give debugging information about like which files things came in the kinds of things that engine dependent status tracking does, should we be more opaque about it in their different opinions about this as well? So we discussed this previously in an SES call, I thought we came to a shared conclusion, apparently we had different opinions still and so I think we need to come to conclusion on this.

SYG: Procedurally. Is there anything we can say in 262 about stacks beyond a non normative note? This guidance to me images.

DE: Procedurally standards all the time make "should" statements about like you know, if you do this then it should be done in the in this way, the fact that guess we haven't done that here, but I don't see why we couldn't.

SYG: because it's not well-defined right now it seems to be open to a fairly wide interpretation.

DE: So, I think there's a range of things we could say.

LEO: The discussion I've been seen about stack. Is that rather than saying, if we should completely block the copy of stack or not blocking it.

MAH: I'd like to clarify the stack problem is not related to an error crossing the callable boundary, but it's about since stacks are usually observable at construction. So merely creating an error and looking at the stack property can reveal information about the stack frames of functions outside of your own realm. So I want to clarify this is not about errors going though the callable boundary, and copying a sec property from when Iran object into another. It's about what can You observe If the engine implements stack traces,

LEO: Think again the CPI. This should be natural. I am sorry. This should this should be controlled by the membrane system that is being used on top, but sorry, true. You think that's nice but getting at

DE: That's not what MAH was getting at.

SYG: I think LEO's answer didn't describe what Matthew was getting at because it doesn't, that's not a case where it crosses the boundary.

MAH: Yeah, it doesn't cross the boundary. So if you're just creating an error and looking at the stack, then you require modifications of the are prototype or however, Stacks however, Stacks are attached. she's very complex in every realm to make sure that just Bank inspecting. the stack property of an error, You're not exposing information about the stack frames of other Realms. My suggestion is that engines would have to censor stack frames from other Realms and if the library that uses the shadow realm API wants to recompose stack frames to provide a stack trace that crosses the callable boundary, they're in a position with their membrane to do so.

SYG: I guess my intuition here is opposite callable boundary exists as security presented in the slides to prevent the foot gun problem of so easily, intermingling object, graphs. Not it does not exist to censor or to providing a secrecy guarantee. And to require a censorship - which I still don't understand how we would specify that normatively - but to provide censorship, that guarantee is not something that seems to me to be in line with what the callable boundary is for.

DE: I think the ordering should be, we jointly figure out what should happen in engines and then we figure out whether some of it should make it into the specification or a note or something. And we haven't done that first step yet. There's just disagreement in several areas. So this is the biggest open issue right now. There's discussion about the HTML integration, but I agree with Leo that that should be resolved really soon.

LEO: Yeah, I think everything can be resolved and I think we can have resolutions for both (?) details for request which is the last normative from the spec and made a part of HTML integration. I think those can be discussed and we can come back to the next TC39 plenary with a proposed resolution for both. I just want to signal in the next TC39 plenary that we might be ready for like actual implementation in shipping. That's why my hope that's we're going to work towards.

RPR: All right, I thanks LEO. Is that a conclusion? We are pretty much at times,

LEO: but yeah, sure, I appreciate the time and the patience. Thank you.

DE: So, can we record that we recommend that until these issues are resolved that this not be shipped in browsers. I mean I think this just restating something we've already said.

RPR: Yes, I derive that from Leo's conclusions that currently it is non-shippable and LEO hopes to reach that at the next meeting.

### Conclusion/Decision

- ShadowRealms should not be shipped until resolutions to HTML and the error issues are resolved

## Record and Tuple update

Presenter: Robin Ricard (RRD)

- [proposal](https://github.com/tc39/proposal-record-tuple)
- [slides](https://docs.google.com/presentation/d/1R-vIEjohygNLljwevROUZF_7b7RmCY7MRsXCp_Wdvz8/edit)

RRD: So last time see my promise to go to Stage three this meeting and yet we're still updating the main reason for that. We ask that. Is that for feedback last time, we got some feedback speed work on it. And also we also think that this probably will be less attended meeting so we don't want to push for stage 3 proposal now. And so that said, our last update from Kitchen, really good feedback. So thank you all. That gave feedback from this committee or even outside because now we have some career things that we are working on. okay?

RRD: So the agenda is very similar to the last update. We're going to do a reminder of what the proposal is, and we're going to discuss the different stage three review items that got, and it's going to be relatively short. So, we are going to talk about things that are outside of TC39, but I think we want to provide an update on which is the interaction with TypeScript and interaction with webidl and so then we'll have some time to discuss any other notes or remarks to you might happen.

RRD: So as reminder record in Tuple, is this hash prefix syntax that takes a hash character and then makes records and tuples. They are deeply immutable data structures that also happen to be Primitives. That means that if you typeof on a record, it's going to return "record" and typeof a tuple gives "tuple". And since they are deeply immutable. You have to take them by copy. that means that you can you date a key of a record or you cannot push anything into tuple. But that being said, you can use spread operation to forge new tuples and records. And we actually are going to share some array.prototype methods into Tuple.prototype. At least all of those that do not mutate the array. So we actually also work on tuples. So to that end, three meetings ago we actually had a change-array-by-copy go to stage three which adds some array.prototype, methods that are extremely useful. When working against immutable arrays and tuples as well.

RRD: So one thing that's also very important to us as a champion group is that we wanted to records and tuples to have value quality instead of identity equality. So this means that when you're using any kind of equality in the language, they are going to return that they are equal. If they contain the same internal values. So if it was the same sequence of values, then and so if two tuples are the same sequence of value inside, they will say they are equal. and so that means that you can also use them as Map keys. And you can also talk with them in a set or in Array.p.includes. and so to that end, likewise records have the same behaviors. That means that if you have the same pair of key and values, that means that on both side of the equality, it means that they're going to be equal. There is a lexicographic key ordering. So that means that even if you insert the keys in different order, both sides of the equality operation. Those two records will still be equal if they happen to have the same keys corresponding to the same values, no matter what order they have, been inserted into. Then we have the fact that yes, you cannot use symbol keys for that reason because we couldn't find a way to get lexicographic order for Symbols that wouldn't expose some internal information about the Symbol itself.

RRD: So finally, because all of this, mostly because of the deep immutability property, records and tuples cannot contain objects and functions inside them. But there is an escape hatch, which is the use of symbols as weakmap keys to do referencing. So you would use a WeakMap and you would match a Symbol with an object in that WeakMap. And yeah, that lets you still have a regular structure. That Only will be able to reference something else.

RRD: Next up is the API surface that we changed since the first time. Thanks to your feedback. So we have the record and tuple functions that are able to build up a record from an object or from a sequence of values. We removed record.isRecord and tuple.isTuple and ACE will come back to this in a bit to be clear, yes, there are kind of duplicates of what typeof is doing.

RRD: And then we have record.fromEntries and tuple.(?) to build it of the record. prototype is no. And there is a to cook prototype. And, as I said before, it's a subset of the array prototype, of methods that work with tuples as well. Mainly all of the non mutating In place methods of the array prototype for existing to the tuple Prototype. And also, after last time's discussion, we remove JSON.parseImmutable from the scope of this proposal. and we moved it into its own stage 2 proposal so that we can progress this independently of R&T.

ACE: So WH raised a good point about this API, which is why it's been removed. So when record.isRecord existed, it wasn't just an API wrapper around doing typeof; it had some extra semantics to it. So if you pass in a record primitive, then it's similar to do. Type of its checking. Yes, that was directly primitive. return true. However it also would do a brand check or objects to see if they had the record internal record, data slot. So if you have a record primitive and then managed to get the object wrapper version of it, then that was also returning, returning, true. And a concern was raised but we kind of agree with that. You end up with this kind of weird thing where you'd have this API that would say true, you have a record but the value that is saying, it is a record won't behave like a record because it's an object. so we agreed with that and said yeah, okay, we won't have this isRecord API. I'm only talking about isRecord here and not is Tuple, because the reason these APIs were added was to provide a way of bran checking for that internal slot on the object wrapper versions. If you have the Primitives, the recommended way to check if they are record or tuple is to use typeof. So these APIs were really there for checking the object wrappers. For Tuple you don't actually need a dedicated API because you can do a thing similar to other Primitives where you can abuse the value of M, because double as a prototype, it means you can do Tuple.prototype.valueOf, call it passing in a value and do a try catch and it will throw if the receiver doesn't have the internal slot. So records, not having a prototype and not having any methods, and they didn't have any static methods that check the internal slot, there is no way to detect it, at least not unobservably. So we were looking at other ways that you could still have this check. So we did consider having record. Do is record wrapper. That would be checking true or false does. As an object of the internals lat. We didn't like this because it kind of takes this kind of edge, Casey check. And makes it very prominent in the API. So this would be like a very prominent in MDM docs, and in IDE also complete. We really don't didn't feel. It would be great to expose the word wrapper and kind of this predicate so prominently. As you think it might start suggesting to people learning the language that this is something they should be using, this is think they should be checking. Whereas we think that, you know, it's going to be quite rare that people are dealing with these object wrappers and that's kind of more of an advance library, use case. And to be clear we haven't been presented with kind of solid use case of why someone would need to check for this brand. I think it's more of a consistency perspective. So we also looked at is this still a way we could have this check and hide it, similar to how you can hide things in the top will Prototype. So that currently isn't a record, Doc Keys API that you know, know, has discussed right now. We're saying if you want the keys of a record you can just use object.keys. Because that works with primitive values already, you do object of keys on a string. If you want to say object up keys, will work on a record but if there was a record dot Keys API, you could make that brand check, so that the only valid and you can pass it as an argument, would be a either, a record primitive, or a record wrapper object. We also didn't like this, especially including it in the kind of core MVP proposal, because really the only reason would be adding this API would be to add that brand check. And we did that API, we actually think it'd be better DX if it didn't brand check and because perhaps record.key, is this like object of keys except you always get back a tuple of strings rather than symbols rather than an array and it could be perfectly valid for someone to pass object to record.Keys. Even if it's not a record wrapper. So we've kind of come to the point where we can't see a way right now of adding a check for the record internal slot. And we also don't have any kind of been presented with a compelling enough use case that we think it's a crucial part of the core proposal, perhaps it's something that can be explored separately.

ACE:So we've got some really great stage 3 feedback, so just want to really call out thanks to Jordan and Ross for the feedback they posted. We think we've addressed most of it. I think there's a few kind of editorial things that are still to do. Bradford also has offered review, thanks to Bradford. We are also still in discussion with implementers, there's feedback coming to us from implementers. We're still discussing with them.

ACE: One of the core bits of the feedback we've got that we'd like to discuss today is about stringification.so, go to the next love it. So so this was brought up both by Jordan and by Ross, Jordan has been talking just about this for a long time. In the current spec we've got a PR open as we merged and in the current kind of spec string application of Records had kind of two semantics. If you did an explicit passing a record to the string constructor just as a function call, you would get back. Just you'd always get back the static string,"[object Record]", with no information about the contents of the record. It's not a very useful string. And because it's not very useful any implicit conversion to string we thought that's almost certainly a bug that the user has accidentally found themselves in a situation where they're coercing a record to a string. So it was throwing this was kind of the feedback we got was that it didn't seem very friendly that, you know, maybe if someone's just trying to log a record that they should if they just quickly trying to log something, trying to debug something or throwing, it seems like doesn't give very good developer experience. Also one kind of nice property about records and tuples is that because they're deeply immutable and they're primitives, they're very very safe to turn into Strings. We know that there's no cycles, we know that you're never gonna hit user code. It's all just completely, internal, AOs. So, It's actually very nice things to be able to turn into Strings in that regard. So, we've kind of leaned into that feedback and now there's a PR open where the stringifcation of a record or tuple is defined. A key things about that is that it doesn't try to be pretty in any way. So it adds like a little bit of spacing; it doesn't add new lines or indentation. As I said it can never throw, it's It's completely infallible long as there's enough memory on your system to produce the string you're asking for, you know, that it will it will succeed. So this also means that it doesn't doesn't throw in the places that JSON.stringify would. So it preserves symbols and undefined - not that JSON.stringify throws on undefined, but it will lose undefined because it's not a valid JSON value. And because we're preserving all of these things which aren't that JSON. We wanted the output to be clearly, not JSON. So also, we always include the hash prefix to make it clear that we're not trying to output a JSON string which is JSON ish in some regards but very much not JSON in in all regards to this. We hope that make tries to make it clear that this is purely about greeting a string representation for Developers for debugging for logging. Not trying to invent a new serialization format. One other aspect of this is that previously and in the current spec without this PR merged. tuple.prototype toString matches array prototype toString in that calls join. Whereas we thought that this would actually - it makes some sense to diverge here. Otherwise you'd end up with, if you to string of a record then you come in Spreckels don't have a method but if you end up calling the internal ToString for a record and you get this kind nice String. But then if you do the same for a couple and you get just the joy in which could throw that in seem good. So we thought actually for this one method couple wouldn't kind of match array and would diverge from a rape and we think the kind of potential refactoring hazard of someone moving from arrays to tuples and the tostring behavior changing. We think overall that's worth it for to have this consistent ToString Behavior.

ACE: lastly, one thing we did Preserve in this PR is the implicit string conversion due to calling ToPropertyKey. We're still throwing. So if someone tries to use a record or a tuple as a key in an object without explicitly converting it to a string first, then that still throws. We think that gives a nice balance of trying to catch bugs, but still preserving kind of ergonomics. And potentially maybe in some odd future, that's leaves the door open for, if this was actually supported in the future. So, if we don't hear any objections in plenary today, then our intention is to merge this PR.

WH: What is the divergence between `Array.prototype.toString` and `Tuple.prototype.toString`? The two things I see if this example is representative is that the prefix is “#[“ and there's a space after the comma. What are the differences?

ACE: So because array.prototype string just calls join, it means you don't get any brackets at all and so I call elements of the tuples and any nesting of tuples. It's completely lost. so you get a deeply nested tuple with finally, reaching a string, all of that nesting disappears. The other - to me, one of the biggest differences is also the fact that previously, it would say - so symbol is passed to string that throws a TypeError. Whereas now, a tuple with a symbol in it calling to string would have thrown whereas now it doesn't.

WH: Okay, thank you.

JWK: Why does BigInt not have an `n`, and the symbol does not have double quoted quotes?

ACE: Yeah. So for all of those values we are not introducing any more Behavior than what the tostring operation already performs. So that's why big and loses it, and, and symbol doesn't have the quotes because is what they are. the strings returned by the existing tostring know, if you pass those values to the string constructor as a call, they are the strings you get back. So we're effectively not trying to add new creativity to the string application of existing primitives, we're just deferring to the existing stringification.

JWK: Thanks.

JHD: I just I support the toString changes. I've given a lot of feedback in it. I think it's a huge Improvement and Makes the right choices to avoid footguns.

JHD: And then, I also have my next topic about the brand checking stuff. The reason that or one of the reasons that it's particularly important is for debugging or like describing a value. So, I have this package on npm called object.inspect and also node has an API util.inspect and also almost every test framework has a kind of inspection mechanism to describe a value in an attempt that so that the user has as much information as possible about what the thing is so they can figure out where it came from. This also is important at runtime like, you know, active production website so can log information to, you know, Sentry or datadog, or something. Similar some kind of runtime error aggregator so that you can review the logs later. This is code that of course has to care about edge cases that most developers should never have to suffer from. But one of the things that it does in particular as well as node's own API, which this is modeled after it illustrates when something is a boxed primitive versus a regular primitive, meaning like an object wrapper if you keep scrolling. And I'm sure we can get to the options at some point that show, that will be down below all the type of values, but the exact code isn't particularly important. It's more just that it denotes if you give the number three versus, if you give object parens three you see those printed different lengths. So you know that why they're different? and that is important. It's yeah. So there needs to be a way for both records and tuples to differentiate if it's possible to make a boxed record or a boxed Tuple that there needs to be a way to distinguish between the two of them, and also to distinguish a boxed record from a similar object, and so on.

ACE: I'm going to guess that it is possible. It's just not possible to do in a completely unobservable way that people can forge any of the existing checks so it just depends on how robust. But then I guess the same old rates is that for many. II agree with what you're saying but I there is Is it similar to things like error? Like error has an internal slot and we can't detect it. No record great. But similar to that and maybe we want to solve it the in that

JHD: I brought this issue up before ES6 was finalized. And the to string tag was left in ES6 along with the promise that every future thing that was added would have a way to brand check and error was simply omitted like we overlooked it if we had known. That error didn't have a brand check it to string tag may have been pulled from ES6 and that would have remained the brand. Check that was many many years ago so who knows how it would have played out, but Error should not be a model for anything else. It the like the lone hold out.

ACE: I guess what we're trying to point out. Is that there is an existing is inconsistency here and whether (?) explained earlier is that there is a possibility to build up on top of record and tuple and fix those inconsistencies in a more consistent way, I would say, if that makes any sense.

JHD: Yeah, be clear. I have no prescription about how a brand check is done. how these to deter robustly determining, whether something is primitive or a boxed version of that primitive, whatever people are comfortable with is fine. They're just - I feel very strongly that there must be a way to robustly determine this that canno be forged.

ACE:Okay, that's it. Well, I'm imagining is if if this was solved separately, we might end with a more elegant solution, rather than forcing something into this proposal. For example, hypothetically, if the pattern matching proposal advanced and as part of exploring pattern matching we might have a consistent protocol for checking slots. That would kind of that would then solve this in perhaps Perhaps more are quite elegant way than if we just force record for effort into this. So that's why we're saying, maybe it's okay in our opinion, if this proposal went forwards without the check, but we're not saying there should not be a check. It's just we can't see a way of adding a check on this proposal on its own. Like it should be explored. More holistically in a way that fits in with the rest of the language. Because right now, they're kind of isn't, it doesn't seem to be anywhere for it to fit in the current kind of API that we have because the API is so small to keep a proposal. so small.

JHD: I understand that but I do not think that there can be a window where it shifts without this robust detection mechanism because there are lots of code out there that has to support old. You know, not the latest version of an engine, a browser or node. And to just say that till we get around to shipping, that nobody can check these things, I don't think that's viable.

RRD: Can I ask you a question Jordan? It feels like you're stating invariant here which we're unsure that we agree that the use case you presented corroborates with.

JHD: Right, I have, and that's it. That's what Mark was mentioning about writing down and variance. We have hundreds of invariants that are not written down And the committee has not necessarily provide a consensus for them and pending that, that effort, it falls to delegates to maintain those invariants. And this is an invariant I'm going to maintain and I hope to get I hope that there will be consensus for it, but nonetheless, I do not wish to see anything advance that breaks this invariant. I find it a very - as SYG mentioned in chat, maybe it's not an invariant, if it's not intentional, but there are a lot of properties that have not yet been broken and I want I wish to retain those properties from broken or prevent them from being broken.

RRD: I guess to a greater extent is maybe we should do a temperature. Check the chairs don't find about this because this is kind of important. We can get to the queue first while we're on the topic. Yeah, let go to the queue and then if you can prepare a temperature check about how people feel about the this invariance and how strongly the community things that you should or should not (?)

KG: Yeah, this is sort of a way to avoid this proposal. How important is it to have these wrappers? As I understand it, there's like two places this comes up. There is, if you pass a record to the object constructor, you expect to get an object out, and there is, if you invoke i.e. dot call a sloppy mode function with one these things as the receiver, then you would get a wrapper as the `this` value inside of the sloppy function. And for the first case, you could in principle just make a copy of the thing, just like an object or an array. And for the second case, it's only observable that you have this wrapper in a sloppy mode function, and you just shouldn't have a sloppy mode function, so I, least would be okay with just saying that you don't get a wrapper and now, the this value for sloppy mode functions is even more confused because there is an inconsistency about whether primitives are boxed, but it's only observable if you are writing sloppy mode functions which you shouldn't be any way. So I don't care about this particular inconsistency. And if we did those two things, there would no longer be wrappers and we could just not care. And I like that anyway because these wrapper objects are a part of this proposal which is not actually necessary for anything as far as I can tell. So if it is possible to eliminate these, I would be happy.

ACE: And that. plus seeing code use the object as if as a function call to check. If something is an object, doesn't make me feel great about it. potentially throwing but especially if the reason we're throwing is because we can't wear and check the wrapper.

KG: What's throwing? I didn't suggest throwing.

ACE: If you right now, if you pass any primitive to the object Constructor as a call, you get back an object. Yes.

KG: My proposal was that if you pass a record to the object Constructor, then you would get just like an object that has the keys that the record has and the values for those keys, not that it ever throws.

ACE: That's a pojo rather than the actual internal record wrapper object.

KG: So yes, exactly. So it's it just wouldn't have the internal slots. And again we're only - there isn't a way to brand check these because you can't actually get hold of, you can't reference one of these objects in the first place. So there would be zero use cases for this brand check because the branded object doesn't exist.

ACE: Yes. although again, the motivation is also just like it would be nice to have fewer things in this proposal and the wrapper object. Sorry thing in this proposal, which feels mostly unnecessary, and if we could get rid of them, I would be happy even ignoring this issue of G checking. But it does also have the happy benefit that it avoids the problem of bran checking them.

RRD: Yeah.. It's an interesting thing to explore. It definitely changes. Yeah, I don't have an opinion on it yet. I see pros and cons.

ACE: Yeah, so I think make queue topic is about assuming that Kevin meant to throw so just to make sure I'm understanding Kevin.

JHD: It sounds like you're saying that when you win anything would normally perhaps produce a boxed record or box Tuple U instead just get a plane object or plain array that that if you pass, those things into the appropriate record or tupled function, will spit out the Primitive again. Something like that.

KG: So there's two cases where you get boxing. There's the object constructor and there is the receiver for sloppy mode functions.

JHD: Correct.

KG: I am proposing that the object constructor gives you a POJO, and the receiver for sloppy mode functions simply is not boxed, and there's just an inconsistency, but it's only observable in sloppy mode so I don't really care about it

JHD: Okay. yeah, that's definitely worth exploring that. That seems like it might remove the need to. I mean if there are no but, you know, wrapper objects. There's need to bring check them and then type of covers the Primitive.

WH: What's a POJO?

JHD: Plain old JavaScript object.

WH: What does that mean in this case? What’s in that object?

KG: Concretely it means that it would be an object that has exactly the same keys and values as the record, but is an ordinary object. So it doesn't have any of these special behaviors and I guess inherits from object prototype instead of record prototype or tuple prototype. Or if you gave it a tuple, the proposal would be that you would get an array out that has its prototype as Array.prototype.

RRD okay, so I think this is actually very useful, and this is probably something that you want to explore as the champion group. I guess we can end this. There is no more cure right now. I saw earlier, In the chats that hacks had some things that you might want to put in the queue, but I don't know if anyone will be able to -

JHD: I can summarize it here. The question as I understood it was, can you pass a record or Tuple into the reflect methods as a Target given that you can't make a proxy of them? And it seems to be an interesting point that the reflect methods are supposed to be one-to-one with proxy, but there might be DX concerns if they do not accept records and tuples and that seems like something worth it.That was my understanding of the discussion

RRD: So we actually I wonder if someone in the championed group could expand on this.

ACE: so, I guess poor the PR where we Nicholas here where we kind of looked across all the APIs in the language to see, should this be updated to accept records and tuples, if it didn't just happen, implicitly. If it did any, any kind of object checks inside it. The reflect API was intentionally left out because because it is kind of seen as I don't want to say low level, but I can't think of a better thing, but it is seen as more of a low-level API, that kind of a directly reflects the kind of metaobject protocol and the fact that it currently asserts that the argument that's being passed in as the receiver is of type object. We think that makes sense to retain because record and tuple aren't objects and certainly subjective kind of where to draw the line in a, where these things should kind of, people should just be able to access them and use them in existing places rather than convert them to objects. Where we feel like, it's good that you're reminded that these things aren't objects, and we decided that reflect is one of those places where if someone wants to pass it in then yeah, they would have to pass it into the object constructor first to say explicitly, I'm operating on the object version of this. Not a primitive version. So yeah, there wasn't a fairly technical reason apart from ensuring that the reflect methods are still effectively just exposed versions of the internal methods for these without adding extra logic around them is the internal object get, for example, will assert that. The value is an object, so reflect still having that same assertion seemed appropriate.

RRD: Okay. Yeah, I guess this was in answer to JHX's concern as relayed through Jordan, giving them to us. I don't know JHX if the answer is satisfying to you if that's the case you can maybe signal that to us in the delegates chat.

RRD: We wanted move on to eventually doing maybe one or even a couple of temperature checks if that's possible. okay, I need I need a signal from the champion group, right now. Let's start pulling about the brand or business first. and if in mostly, if the delegates here have strong opinions about the invariants presented by Jordan.

BT: I'm not sure that that's clear enough instruction for the okay.

RRD: Yes I would need some help from a co-champions, if that's that's possible establishing this

ACE: So, do we want to temperature check the brand checking specifically saying. Is not having a brand, check something that the proposal shouldn't Advance on?

WH: What does “brand check” mean here?

ACE: Something having an internal slot. So that's only observable internally to the spec as a way of changing kind of the behaviors, you get when passed other internal things such as to string. So concretely for this from an outside perspective, the record object. just looks like a plain object, but internally, there's an extra hidden, filled record data, which is used to kind of branch and change Behavior. Okay?

WH: That needs to be more specific. Does the brand check duplicate `Object.prototype.toString`, which will tell you if it's either a record or tuple or a wrapper of one of those?

ACE: yes how we get is that the difference is its unobservable so you can hook object prototype to string by installing symbol to string tag. So there are ways of inspecting, some think, and checking if is a record based on a record wrapper object based on how it behaves. But all of those things could be forged in some way if you add the right symbols to your thing, whereas the brand check would be infallible. There'd be no way. Someone could construct a value that was passed that check if it wasn't actually officially record wrapper object created. From the engine from coercing. a record primitive into an object.

WH: Still not clear to me whether you want to distinguish records from record wrappers?

RRD: Yes, that's that's what we were discussing earlier with Jordan, actually. So we are, So do I use case for debugging presented, which is a partial use case. If we had some concrete code that can help us to understand better, the issue but Jordan has stated, there is an invariant that we need some kind of rubber stand four flexible. Check that something is a record wrapper or not. And so our question and the temperature that we would like to have is two other people in this committee feel strongly about this invariant or not.

DE: Specifically the invariant that you should be able to definitively unfortunately, check whether a given object isn't given wrapper or has it given internals lat so we use a framing for temperature Champion to framing which says we really strongly agree or are unconvinced. So when I proposed it strongly agree is, you know, there was there is a rationale presented here that we don't have a brand check and so strong. Green would be. Yeah, that's fine. Or and then unconvinced would be I think something needs to change long lines with Jordan is saying. So could we do such a temperature check, it's still ambiguous.

RRD: Okay, let's let's do the opposite Then let's I don't think the opposite is less ambiguous. okay, then I'll let you know.
DE: well, the mark could you looking at all the other object prototype to shrink things.

WH: How do you do a branch check for an `Arguments` object? Or a `Date`?

DE: so I don't worry, he you feel like, it sounds like you're unconvinced Jordan's arguments.

WH: DE, no, that’s not what I am saying. At the moment I’m trying to understand the context.

JHD: Oh no. I mean, I can answer those questions and that would helpful. Arguments object has no internal slot. So your best hope is to use object prototype to string call and hope that nothing is trying to forge. Date has an internal slot so you can do date.prototype, dot value of.call and it will throw unless it's a real date. All of the built-ins except error that are objects have some way something that brand checks. Most of them are a prototype method or accessor that will throw if the slot is missing on the receiver, Which was Alan's suggested work around in 2014, when I brought this up or initially. And so, I have predicate packages on npm for all of these things that wrap you know, abstract around that try catch that all have many millions of downloads. And the only one I can't do is reliably is an arguments object and you know an Error. And that's because there's nothing on either of those. two things that has a need to check the receiver. They don't have special behavior. Sloppy mode arguments has special behavior, but nobody wanted to I don't even I don't want to touch that.

WH: Okay, now I understand the context of what you're doing.

BT: So we are at time on this agenda item. Can I propose that the champion group work to make some very clear temperature, check questions and then we can come back.

RRD: We have a temperature right now and we would like to also request an extension if that's possible because we haven't finished the slides yet though. This is very important to figure out. So we want to finish with the temperature check and then move on with the rest of the presentation if possible. To first, get an extension for Two minutes.

BT: Sure thing, thank you.

RRD: So temperature. check that we actually have, Is that strongly agree? Would be good. Would be a go ahead. The Proposal is fine without even without the possibility to have that sorry even without the possibility to have this check or and if indeed, we need to have a solution for that check, which is either providing brand shaking in the proposal or that is actually removing wrappers and some way. And to be clear, we're going to also explore removing wrappers as well. whatever you choose.

RRD:
agree: fine to go ahead without brand check unconvinced: something is needed to address brand check

Here

BT: You have the results since yes.

RRD: Yes, let’s try to get a screenshot of the results.

RBU: I have them.

**RESULTS OF TEMPERATURE CHECK:**

- Agree: 13
- Indifferent: 2
- Unconvinced: 1

RRD: Thank you. Okay, so we wanted to go through the TypeScript integration as well. So we did a proposition for the TypeScript team, It's still up to the same (?) you too. Yeah, See what they want to do with record and tuple. But the way we have been playing with the idea of integrating into the type system is too. Take the type data structures. Sorry types, using Record and notice the small R and Tuple, and you do a union the type that you want that thing to be so you have to follow a matching, a record can go into record and readonly type. But this object, we don't fit into it, and we would be adding another layer which is additional scripts in tax, that would let us use the ??? syntax to define the type so, this is very basic syntax, but it has consequences because we also want to have existing types match to records and tuples. So, specifically here you have a few interface and we want I mean that's something that ruler like to do is to have matching happen on. so if I'm passing a record to that function, that function should be able to accept my record as it can today accept objects. But there is a catch that: function could be changing the object internally. So if instead of an object we have a record who would a type error today TypeScript is not strict on the way it applies read only. So that means that it would typecheck okay. But it would have a runtime error. So eventually we would be interested in seeing if it should be possible to have another compare option which is street cred only. That being said, this is up to the TypeScript team to decide this. and there is another problem that was brought up by Daniel Rossenwaser from. In this example, this function takes a union of type that is opts that has two keys volumen and is also Union of number and string. So opts, in this model would accept to receive records, right? but if it is a record, the type of opts becomes record and it's not an object anymore. So that means that you couldn't go into the first Branch. It could go into the second Branch, that only accepts numbers and strings. This is a problem. That means that we need to take a decision on the control flow analysis. Do we error? Because then the else branch is could also receive records or do we let it through and assume that record is, he's kind of going to be going into the first branch even if it's not going to a ???time. So erroring here entitled to could be a breaking change because that means that as soon as we introduce records into detached replay system, then this type check could start failing, but this, we do it really does the runtime error and otherwise it could choose to not fail here and there is a precedent for that which is if opts is a function today, it would go also in the second Branch but let's TS is not checking for checking for that right now. So I will leave it to Ashley again.

ACE: Yeah, so we were really pleased that Daniel raised this to us because it actually hadn't occurred to us, exactly. That kind of narrowing behavior and realized we could be in a situation where our own proposal - at Bloomberg we use TypeScript a lot of thats that's that's no secret and didn't realize we might be in a situation where our proposal may then actually be ending up leading to change in typescripts. That would cause lots of breaking changes in our own code. And wouldn’t that be funny. So what we did was just try and get a sense of how big an impact this could have right now just on our own code base. So we created a patched version of TypeScript with this particular change implemented and run that across seven hundred of our internal TypeScript projects. So that's about 3 million lines of code to like you know a decent amount of TypeScript code and it only came back with 12 errors in the code, and the code there errors are in is exactly the type of thing that Daniel raised. Where there's an if else branch and the else branch is implicitly. Something typeof, doesn't equal object and they're assuming it's a string or a number. So all of those places, there's only 12 errors in each of those places would be very simple fixes. It just like a small change to the code and no then work. So that, you know, that we found that quite promising considering other TypeScript upgrades we've done recently have had a lot more errors and places to fi. That it doesn't prove anything about what should happen, but it suggests that potentially there's breaking changes aren't as big as it initially first sounded. But yeah, we were hoping other people will also do similar tests on their code bases because maybe it just it just so happens that the Bloomberg code base. We checked doesn't follow this pattern very much so this is still ongoing but the initial results were positive which we were happy about.

RRD: I guess we have a question from Waldemar.

WH: Yeah, I guess I'm missing some of the context here, but why would a record or tuple be accepted by _Opts_ in the example?

RRD: So, yeah, that's that's yeah, that's a choice that we made in the way we chose to model this in TypeScript. We could make another choice and maybe with the discussion with TypeScript team, will get to another conclusion here. But our main, so our main goal here is to have iif something looks like something that could be accepted by the function. So this example is actually quite interesting. Is that I have this interface. Yes. Surely is saying that something could be mutable for example, but it's not actually very important in an interface that it is mutable. It's just I want to be able to pass records into existing functions. Because most of the time, they will be compatible. That being said, this is not necessarily correct all of the time. So this is not correct when we're talking about the read-only strictness issue and it's not correct when talking about the narrowing behavior. And so we are trying to untangle that. And so as I was saying the narrowing Behavior fortunately is less common that we expected.

WH: There are more basic questions I have about this; one is, can you define an interface which requires something to be a tuple or a record?

ACE: So I guess to be clear right now. We can't do anything. This is all speculation.. So these are our imaginings of how these things could be modeled in TypeScript. Many different variants are possible to if If that wasn't clear, just want to make that very clear that this is all early design space. That's ultimately out of our hands and in the TS team's hands because

WH: I think you're setting yourself up for a world of hurt if you try to conflate records, tuples, and objects. A fundamental difference between them is that you can store other objects as fields of objects while you cannot store objects as fields of records and tuples, and that will be quite painful.

RBU: That is true that there is a problem. but at the same time that's not true for all typed objects in the language TypeScript, right? right? Like, that of object types can certainly be strict to conform to exactly to the record type. But I think also, this need to fit this into the world of TypeScript comes from the proposals, one of the proposals core goals that is making represent two bowls explicitly. Usable in places where objects can also be used even outside of TypeScript, just ignoring TypeScript entirely. That concept is a certainly, a core tenet of the proposal and so that it's not so much that we're trying to fit it TypeScript in and of itself in so far, as we want TypeScript to model, the way we actually want people to use records and tuples, which is everywhere that you wouldn't be able to pass an object which is for example. Like if your function takes an object bag that it doesn't mutate, then it should be able to pass it there. You know? Things like that. So I just to invert the direction Where We Care about here, but yet, but then does simplify it by saying that of this is up in the transcript weekend day. Sorry, go ahead will Mark.

WH: Yeah, I understand the desire. I'm not familiar enough with the state of TypeScript constant type declarations to be able to comment much on it.

RRD:I think, I think the main takeaway here, if I can try to the main thing is that for trying to steal be aligned with some trade-offs that TypeScript already made so, so, for example, here, could also pass a frozen object . was to take record it, wouldn't mind? Passing in Frozen objects, that function, and it would still fail at runtime. So we're we are aware that it's going to cause some problems, but also TypeScript early on also chose to keep compatibility and and let the TypeScript runtime fail because it was just better for adoption in existing JavaScript projects. So again, this is an ongoing discussion. none of those decisions are taken, maybe we'll go more strict and maybe we'll fence the structures more in the future, but right now, we're exploring that solution And so, your point is noted.

WH: Yeah, I think it's great to explore these issues. I don't see either of these issues of being a showstopper. Because I can come up with other examples, such as what you mentioned, neither is new to TypeScript.

RRD: That being said, yeah, we're trying to be coherent here. And so, likewise the web ideal integration that we've been working on is very short and very minimal. And so is in the same idea, is that if you're able to pass an object to a function described in web idea, you should be also able to pass a record and likewise you should be able to do the same thing. If you expect an object, you should be able to pass the record in the way we did that. So far is to only change the ecmascript integration section of web idea and have record and tuples, be converted to bags and sequences in what they key off. So it's very simple to change and is allowing to those goals as well.

WH: Is this applied recursively? There are APIs which take objects which have other objects as fields, which have other objects as fields. And thus can you flatten those all into records of records of records and submit them to some WebIDL API?

RRD: I have to check, but I believe so and make sure to check certainly forever

RBU: I'd I'd yell competent type programmer could do in touch with yes.

RRD: And that's it. Like, with were finally with the presentation and thank you, everyone and thank you for the feedback so far. If you have more feedback, two minutes left bucks, bucks, otherwise can always discuss through discuss through other channels.

DE: Okay, sorry to drop together the typescripts discussion. We were discussing this in the chat. I think the takeaway was unclear for some people and I think part of the takeaway there is that the compatibility impacts and that, that was reasonably raised by ten script based on the results, seems like it's not that incompatible, it seems acceptable and that was It was important to raise the other thing about strictness being handled by separate flag rather than being something that would always be turned for records and temples because it's kind of the same between records and doubles and frozen, or read-only objects. The, those were both interesting results. results, I thought. Question from Justin: "what does incompatible mean?" Well, TypeScript updates have - there's often some changes where something that previously type checked fails. but this is often kind of good. Records would make some things previously passed type checks fail based on this particular interface issue. But I think the assessment here shows that the the cost is not too high. At least that's my understanding. If we have time, maybe, we don't, I to ask, I wanted to come back to an issue that Jordan race before about record, prototypes, with record being null versus not know, it was another kind of invariant that we should be able to add interfaces to records based on monkey, patching them or monkey patching their prototype. I know it's late, but Would people be up for doing another kind of quick discussion of that and temperature, check on that topic. I think this would help draw a conclusion on it.

JHD: I mean, mean, I still haven't. Written up any sort of concrete explanation for that. So I'm not sure uninformed a temperature check would be.

DE: well, I mean you've had some time to do so okay but no one needs this proposal isn't seeking advancement in this meeting. So there's no rush and temperature checks aren't conclusions there, just like getting sense

RRD: To be clear to goal of those updates is to make sure that we're not going to be stuck at when asking for stage 3. Jordan. So we would like to you solve those issues review before we go to stage 3. Yeah. yeah, I just don't think a temperature check is going to change the outcome of those discussions. But feel free, if you think it would helpful to give it,

DE: I mean, do you have a timeline on when you'll be able to that description? No.

JHD: I've been spending my time trying to find a job so I have not had time to write that up.

RRD: So we still have the intent to go to stage 3 at the next meeting Jordan. So that's what our timeline is looking like.

JHD: understood.

DE: Yeah, we can drop this for now. Okay. Thanks. Okay. So is that the conclusion of this agenda item? Yes, thanks Brian. Yeah with I think we've got everything we need and we've got kind of next actions to follow up after plenary. All right. Thank you.

### Conclusion/Decision

No advancement

## Well-formed Unicode strings

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-is-usv-string)
- [slides](https://docs.google.com/presentation/d/1sLnW8ARsJ66szQl_WglqV69m49CcKzOhGJ3vQA5Gv_I)

MF: This is a stage 1 proposal. I've changed its name to reflect the abstract goal better. The proposal is to add an `isWellFormed` method to String.prototype. This would basically be equivalent to what you see on your screen where it runs a regex testing for lone surrogates in the target string, but sometimes this will be more efficient.

MF: A reminder for the motivation for this proposal. There are many points of motivation. One is interfacing with web APIs that use the USVString web IDL type. So most web APIs use the DOMstring type, which is JavaScript strings. But some things, especially wasm APIs, use USVstrings. So where that's needed, this will be useful for doing a validity test. Also, for languages that compile the JavaScript, if they want a zero overhead ffi to JavaScript strings, and they have well-formed Unicode requirements for their strings, they currently have more overhead in their FFI than they want. I guess it wouldn't be getting a zero overhead FFI but they currently have to have at least linear time. There's also many data formats that expect well-formed unicode, any kind of encoding you use or data transmission formats. A point I've mentioned a couple times now is that engines can implement this more efficiently than the end users can with that regex. A lot of engines track if their strings' contents are solely latin-1. They store them more efficiently. They can also explicitly do work to keep flags to make this operation more efficient, if they want to. And of course, a big one is just that this is clearer and easier to remember than writing this regex. People will understand what it means more readily. So I think it's fairly well motivated.

MF: Optionally, we would also like this proposal to include a `toWellFormed` method, which is, instead of just telling you whether a string is well-formed (i.e. has no surrogates), this replaces all surrogates with the dedicated Unicode replacement character U+FFFD. And of course, it has the same benefits: more readable and more memorable than this regex. And the code point for this is this dedicated replacement character. So the motivation is pretty much the same as for isWellFormed. There's just one caveat, which is the only potential argument I see against this: if we accept having isWellFormed, you can write a similarly performant toWellFormed. So the performance motivation is lost conditionally on adding isWellFormed because you can implement it in terms of isWellFormed. But I think it's still pretty strongly motivated though because it's still hard to get this right - I don't want to remember this regex, how to do it, what code point to replace it with. So I think it should be included. But that part is conditional. I have a PR here which has been reviewed.

MF: I'm looking to go to stage two either with or without that PR depending on committee feedback. The part that is unconditional is isWellFormed. But that's the core of the proposal and with that I would like to see if there's any feedback or if we can advance to stage 2.

SYG: I didn't quite understand the bit about engines having latin-1. It is true that all the engines have a different representation for seven-bit strings. What was the point about that?

MF: If a string is one of those seven-bit strings, it cannot include the lone surrogates, so you can in constant time return the answer instead of walking the whole string.

SYG: Okay, otherwise I support. Seems good everybody has a copy of this function across the entire stack like in JS, in C++, like there's a copy of this function in so many places.

MF: Do you support with or without toWellFormed? Do you have an opinion on that?

SYG: I do not care. Seems fine to me either way.

GC: Hello. Hi, guys. Just understand what proposed semantics are here. Is \p{Surrogate} just matching unpaired surrogates?

MF: Yes, that's unpaired surrogates. So either a leading surrogate without a trail, or a trailing surrogate without a lead, or out-of-order surrogates, though that’s just the same thing.

GC: Thank you.

JHD: Strong support with both.

MF: Okay, if I hear nobody against having toWellFormed, I would prefer to include it with the proposal as I've received positive feedback for it on the issue tracker.

RPR: This is supposed to get stage 2 including toWellFormed. And we've got plus 1 from USA and JHX.

WH: For `toWellFormed`, is there any discussion about what you should replace the surrogate with?

MF: So there was one person who had proposed accepting a parameter to choose which replacement character to use, with the default being U+FFFD as in here. But I've chosen not to have that parameter. That was the only discussion we've had about what character. If there is one chosen, it should be this one. Is that sufficient for you?

WH: Yeah, that's fine. This is probably not a concern, I'm just thinking of — is there anything in the language which splits strings at fixed positions which can take a well formed string and cut it into pieces with neither of which is well-formed? That would not stop his proposal, it's still useful.

WH: I love how short this proposal is. The actual spec text is three lines.

MF: Well, once we merge that pull request for toWellFormed, it has a couple more lines, but it's still pretty short.

RPR: I'm hearing only positive signs here. So last call for any objections or questions? [silence] Okay, there's consensus. So congratulations you have stage 2.

MF: Thank you. Can I have reviewers assigned?

JHD: I'll review.

RGN: I will as well.

JRL: I can review too.

MF: That's plenty of Reviewers. If anybody else would like to sign up, feel free to comment on or create an issue. Thanks everyone.

### Conclusion/Decision

- Stage 2 with both methods included
- reviewers: JHD, RGN, JRL
