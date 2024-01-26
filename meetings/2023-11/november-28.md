# 28th Nov 2023 99th TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Samina Husain          | SHN          | Ecma International|
| Istvan Sebestyen       | IS           | Ecma International|
| Ashley Claymore        | ACE          | Bloomberg         |
| Waldemar Horwat        | WH           | Google            |
| Linus Groh             | LGH          | Invited Expert    |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Ben Allen              | BAN          | Igalia            |
| Rezvan Mahdavi Hezaveh | RMH          | Google            |
| Ujjwal Sharma          | USA          | Igalia            |
| Chris de Almeida       | CDA          | IBM               |
| Daniel Minor           | DLM          | Mozilla           |
| Tom Kopp               | TKP          | Zalari GmbH       |
| Romulo Cintra          | RCA          | Igalia            |
| Kris Kowal             | KKL          | Agoric            |
| Mark S. Miller         | MM           | Agoric            |
| Kevin Gibbons          | KG           | F5                |
| Philip Chimento        | PFC          | Igalia            |
| Jesse Alama            | JMN          | Igalia            |
| Frank Yung-Fong Tang   | FYT          | Google            |
| J. S. Choi             | JSC          | Invited Expert    |
| Christian Ulbrich      | CHU          | Zalari GmbH       |
| Devin Rousso           | DRO          | Invited Expert    |
| Eemeli Aro             | EAO          | Mozilla           |
| Sean Burke             | SBE          | Mozilla           |
| Anthony Bullard        | ABU          | ServiceNow        |
| Ron Buckton            | RBN          | Microsoft         |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Ethan Arrowood         | EAD          | Vercel            |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |

## TCQ Reloaded

Presenter: Christian Ulbrich (CHU)

- [slides](https://cloud.zalari.de/s/xkr7PLobd2w8pbT)

CHU: Good morning, everyone. Some might not have met me in person. Yeah, so we are a German software development company that I own, and finally we put our stuff to good use and reloaded TCQ. I might be a little bit nervous because this is my first TCQ presentation. So please bear with me. So last time, the good parts of TCQ. We all know and love this. So TCQ, it does its thing. So we are using it for organizing the meetings, and it is a well-proven, tailor-made solution, but there are some bad parts as well, so what are the bad parts? Well, first and foremost, the development has stalled. So there are a lot of open PRs which have never been merged. It has, of course, also its own fair share of bugs and there seem to be performance issues. I am not sure where they are coming from, but we might find out later. In a way, I don’t know where it runs. But I have the feeling, underneath Brian’s desk, well, certainly in the past meetings, there were problems with TCQ, it goes down sometimes, so we needed to reach out to somebody from Microsoft, I don’t know, to call or whatever, to get up it and running again. So at least, there’s a group of people that are actually able to restart it. The group is pretty small. And it has no logo. So let’s talk about TCQ reloaded. So what did we do? Well, first and foremost, we made a logo. Well, actually DALL-E made the logo. (showing totally broken logo, having no resemblance whatsoever to TCQ) Either I'm not a good AI prompter or singularity has not happened yet, so we did not do the logo. But the idea was not to reinvent everything new, but to build on the basis of TCQ. Basically, to take it as what it is – we are using it and it does its thing, but currently, it’s very hard to maintain it.

CHU: So we set out to get it to run locally. And to have the basis for developing it further. So we externalized all of the – all of the hard-coded stuff. And we finally got it to run locally. The development is open. We are now able to run TCQ locally with an externally provided CosmosDB from Azure. The way we have it currently running, we did not really touch anything apart from the externalized things, we didn’t change so much. So it also supports the current auth flow from GitHub. For the sake of testing we had to become chairs. So no offense meant and that’s how it looks.

CHU: And next up will be my colleague Tom (TKP), who will just show you the current state. Tom, if you could, please, give us a small demo, you are happy to take over.

TKP: So I have this thing running locally. I am already logged in as a chair on the left side, and have a private window on the right side. Typical things like we discussed on Monday: the agenda, the queue. Everything is like there. I didn’t change anything there. And I can also log in with a GitHub account. Like all the other things, the IDs don’t change. So let’s just take it. And so we also joined as a normal user. And the queue should also have been updated. So this just runs on a – let’s say, private CosmosDB, DocumentDB does not exist anymore. Yeah, everything is persisted there as a simple JSON document. So yeah. Further development should be easy, I guess. And even migrating away from distributed edge database might be possible

CHU: Thanks for the presentation. So I will take over, again. So what are the next steps? Next step is a staging environment. We want to have a publicly deployed environment, that whenever we change the code that gets publicly deployed. Another step is that we want to decouple it from actually needed services. So it’s not any more bound to certain kind of – so to say, the cosmo DB stuff. And then we want to modernize the stack because the current stack is hand-crafted; the frontend is bases on VueJS. So the obvious thing is to migrate to nuxt.js. Then we want to set up a CI-backed staging environment. As I said, that is deployed publicly. The other stuff will be modeled in issues in the [repo](https://github.com/zalari/tcq/) and I will do this within the next days. So what is the outlook for TCQ? So my idea is, once we have a modernized staging environment, the idea is to take this to a test for the next meeting. So for the next meeting we can test and use the TCQ from the staging environment, if there are problems, we could always switch over to the normal TCQ. After the next meeting, if the staged one proved to work sufficiently, we could collect and actually implement future improvements, that are already there in the old repository.

CHU: So coming to the end of my presentation, certain questions? So one thing is, right now the repo organization, but we can move this to the TC39 organization. And yeah, my idea would simply be that we continue developing it simply on GitHub. But there might be other ideas for collaboration. Probably just modeling it with issues and then talking about the issues and like redoing the PR and stuff like that. And, of course, I am open for general feedback.

KG: I have no questions. But I am very excited that you have done this work. Looking forward to using this and having a TCQ that is maintained and we can all contribute to.

MF: Yeah. I am also looking forward to being able to fix some of the many issues I've opened on TCQ. I am happy to contribute and I want to say the most important part is to make sure you have documented the development process so that I can run on my local machine and do that without whatever experience was needed to figure out the previous TCQ.

RPR: I am very pleased by this. In general we have suffered problems in the past when TCQ has been mostly been unreliable, in some cases, it’s been permanently down and that’s helpful. Other times it has been flickering. And it seems to be up and it seems to be down. So yeah. Just in general, broadening the ability for people to maintain it, test it, all of that sounds good. I am sure there is in fact feature requests that people will have. Certainly, my personal one is that sometimes two people click at the same time, because it’s a multiplayer app, so two people can conflict, and if we could have an undo button, that would solve a lot

USA: Rob, I just did that

RPR: You just added a feature request for that

USA: I accidentally clicked on so you’re not in the queue at the moment.

RPR: So yeah, thank you for doing this work.

CDA: This is really great. When you first mentioned rewriting it, it was – I think it was in the TDZ channel and I thought you were joking. I was really surprised to see this. I think it’s great. Excited about this. Obviously, there’s a lot that can be improved upon. So that’s great. My next topic was – I don’t have feelings on when to move the repo to the TC39 org, if you want to do it, but whenever you want to do it now, later, it shouldn’t make too much difference, I don’t think.

CHU: Yeah. Perfect. So I think for the time being we will stay in the organization. But everyone is invited to contribute. Everyone is invited to join and have a look at it.

CHU: And yeah MF, I hope TKP already provided the documentation to get it to run locally. That was at least a requirement.

TKP: I hope that it’s sufficient.

USA: And that seems to be it for the TCQ. Thank you Christian and Tom for all your work.

CHU: Yeah. Thank you very much. As I have said, I will add the link to the presentation and you can just join the repo and, yeah, also reach out to us, by matrix or preferably on the repo because this is the way we coordinate. So thank you very much.

## Stage 3 update of Intl Locale Info API

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-locale-info)
- [slides](2023 Nov Intl LocaleInfo API Stage 3 Update)

Stage 3 for locale API. I can also see Frank. Frank, are you ready? Perfect.

FYT: I apologize, I was sick yesterday and I also I don’t think I put up the slides link on time. So apologize for that. So you can find the link from the repo. This was not added to agenda. It was linked to the proposal page and it has a link to the presentation.

FYT: So today I am going to talk about an issue for Stage 3 proposal Intl locale info. We have discussed this in July and September. And but I have to come back because I think the solution we discussed in September, after we merged it, caused some problem that we didn’t consider. And there’s information whenever we make the decision in July or September, I missed that, I didn’t disclose that part, which we need to think about the issue more deeply So again, Intl locale inform has been in stage 3 for a while. Back to the what is the main purpose of the proposal, to exposes locale information such as weekday and the cycle used in locale. And we have been discussing this for a while. Having advanced to Stage 3 in April 2021. One of the issues we had to discuss in recent months, in July, is the firstDayOfWeek keyword. We have come back and forth a couple times, and you can see the slides there about our discussion.

FYT: But I will give you a background to this. So in Intl locale, we have a getter function called getWeekInfo. And one of the fields is the value which supposed to be numeric from 1 to 7 with respect to the value the locale IDU-FW. This is the resolution information about for a particular locale, in that locale, that is considered a first day. For example, easy thing to understand, in US, the firstDayOfWeek is Sunday. In Europe, usually that’s Monday. Well, the complication come in that in the UTF35, when you define a locale, it’s a keyword FW. The FW is currently defined here as 7 values. Sunday to Saturday. Right? But also, the FW value could be anything from 3 to 8 alphanumeric, syntactically. That is limited to this 7 values. The problem is that with other similar thing for if we have value, but the value is not defined, we usually consider that in the level. We return the value as-is. So kind of garbage in, garbage out. In the parsing level of API. For whatever resolve, we resolve to the correct one, if we don’t throw.

FYT: So what happened in July, we allowed to return the value in the firstDayOfWeek, which remember, that is not the resolved value. That is the parsed value. Garbage in, garbage out. If you put any string, return any string. But in September, I think because DE considered that we should return the value in whether we are ECMA 402 to usually return, right, with 262, the value between 1 to 7 present weekday, so there’s some back and forth discussion. We say, okay. Well, maybe we should return the firstDayOfWeek, that value we should canonicalize 1 to 7, or undefined if the string didn’t define it. There’s another issue. And the issue is what will happen if someone put in something that is a syntactically legal value, but not defined as of that 7 value. For example, let’s say one day in the future, we are going to support more than 7 days a week. Right? For example, French revolution calendar or French republic calendar has 10 days in a week. We don’t currently have a plan to support it. It’s hypothetically possible to add additional values for that. Right? Currently, we can – if we have locale, "fr-u-fw-octidi" that is a valid locale ID. We don’t need to support a calendar, but we should be able to constructor and pass through. With whatever we define in the September, the questions that we construct the thing, what will be value return? Should we throw or should we change the default value for French, or should we do something else? What should be the return value if we canonicalize everything to 1 to 7. That is not a good answer. We have to consider whether we should throw or what. With the September resolution that becomes very strange result. Because our firstDayOfWeek returns 1 to 7 or undefined, if people didn’t define there. So it becomes a problem and never represents anything syntactically illegal. So the interesting issue, I think, at that time, the considerations is that, well, people calling that should get it return value useful to passing into intl API. Whatever got resolved could be used for that purpose, already happening in another place. Which is whenever it construct that locale, the first day, actually always return 1 to 7. Right? And that is whether the other TC member asking for. That particular value, it present, in some other place. In this particular place, the firstDayOfWeek where it paralyzed to other information about parsing the locale ID, so for example, if you have a calendar for other things, French republic, if you don’t support the French republic, a return back to valueOf French republic. In a garbage in, garbage out. So it can be used as a transporting layer of passing-through information maybe passing through some future work that might be able to handle at that, but not now. We don’t want to canonicalize that.

FYT: After a lot of discussion and I sent an email to DE and discussed in TG2, we think we like to backtrack to something slightly different than what we proposed in July. What does that mean? We are going to take the first day of a week value, anything that fits 3 to 8 alphanumerical. In addition, in the value is numeric or if the value are screened out from 0 to 7, we map it to Sunday, Monday to Sunday. Right? So the first map that number, take the number, so turn out the input value or more loose of that, and then if that thing got mapped or whatever got put in there, it didn’t fit, the type that are following the unicode 35 definition, then we throw. Right? That is whatever other API – similar API, do to fit into the syntactic model. If that is not defined, or return the string that is whatever people put it in to the FW keyword. Or the firstDayOfWeek option bag value. Notice, the get week info first day or still remain only return 1 to 7 and that actually was whatever I remember asking the purpose of that. So that is our proposed fix that we have to fix that.

FYT: So here are the PR that people can take a look at it. I apologize that came out pretty late. We discussed this kind of idea in TG2 in our meeting. Unfortunately, that time the PR was not ready yet. So TG2 member doesn’t have a chance to look through it. But I think we agree that’s the right way to do, to solve both issue. But a PR need a lot more careful look for that. I send an email to DE and I think DE understand our consideration and understand our really true level of API. One level is to merging the string and option bag. Another layer is really the resolve value. He understand that resolve value still return the numeric form which is I think people ask for that. So he have some comment on that in PR 79. He can take a look at that Probably PR 79 or the issue linked to that. My request is to to have consensus for PR 79 to the committee.

DE: As FYT said, I am in favor of landing this PR, but for a somewhat different reason: when I previously suggested normalizing to day numbers, I hadn’t fully considered how Intl.Locale is shipping APIs and other options, already handled in sort of literal parsing way. For example, hourCycle is treated similarly–an invalid value is still accessible directly via Intl.Locale.prototype getters. So just for consistency with that, this all makes sense and you can use locale info if you want to get a higher-level understanding,or the result options. So this seems good to land to me. I want to ask FYT, are there other issues in this or do we have everything in the proposal to be closed and resolved at this point?

FYT: You mean Intl locale info itself?

DE: Yeah. The Stage 3 proposal.

FYT: We have another issue that I am still working on. Sorry. I haven’t – I couldn’t put it here. One of the issue is how to resolve the order of the firstDayOfWeek. Consider other keywords. For example, region or subdivision. The reason is that we were – we were waiting for UTS35 to define and resolve the algorithm, we want to defer to that and they just put it out last month, recently. And I need to add additional change to clearly define the order that was there. That is – there’s several like, 2 or 3 other small issues. Intl locale info from my point of view is not ready for the 2024 version.

DE: Okay. It sounds like of the one issue that you went into, you have a solution in mind. Do you have a solution to the or issues in mind or decisions to make yet?

FYT: Not yet.

DE: In this case, we might want to consider retracting to Stage 2 at the next meeting, if you don’t have solutions to those problems at that point. I don’t think we should have proposals that are at Stage 3 for a longer period of time where we still have open questions that we’re not on the path to resolving really quickly.

FYT: Okay. That’s fair. That’s pretty fair asking.

DE: This is kind of a change from how we were operating a couple years ago, but it’s kind of the new trend we have been following.

FYT: I totally understand. I feel it’s dragging too long. I agree with that

DE: If it’s a couple of questions, maybe it’s possible to come back next meeting with solutions to them. If you could propose solutions, I don’t think there’s a need to retract.

FYT: Yeah.

USA: All right. Next up is Waldemar

WH: Just curious, does intl have a notion of a week length?

FYT: So far, no. Because – so far we haven’t touched anything beyond 7 days.

WH: Okay. There are a few calendars that have other week lengths. The decimal calendar the French played with is one case. Another example is the Roman 8-day week.

FYT: I don’t think that – the unicode consortium has worked on that part yet.

WH: Okay.

SFC: I wanted to second fully using the staging process. I think it’s very important to be more clear on, like, I think there’s nothing wrong and there should be no shame or anything in taking a Stage 3 proposal back to Stage 2 when we still have, you know, work to do on it. And I think we should do that more often. And I think this is almost a good example of one that is a fairly clear cut case where it can come back next meeting and ask for Stage 3 again with the new proposed changes. I think that as a group, we should be doing this more often than we currently do. And there’s no shame or everything in bringing in a proposal from Stage 3 back to Stage 2. It reflects and makes it more clear what the current status of the proposal is.

PFC: We could theoretically support weeks that are not 7 days. That would be also possible with Temporal. But there are currently no calendars in CLDR that have weeks that are not 7 days. So it’s unclear what the correct answer would be in this case for the first day of the week. I personally think that whether the first day of the week is Monday or Sunday, that’s a question that is related to the 7-day week with, you know, or with this particular 7-day week. I think if there was a – you know, a calendar that had a week that wasn’t 7 days, it would be implemented, the number of the days in the week as well. But it’s probably not relevant to the question that this parameter tries to solve, which is "given the 7-day week, which most of the world shares, is Sunday or Monday the first day?"

SFC: Yeah. The number of days per week is something that is, I think, much more in scope of the Temporal proposal because that’s where, you know, we sort of measure week lengths and support arithmetic and things on the week lengths. In terms of this particular proposal, this is just returning CLDR data. And it does not have any concept of a week length. The only way – the only place I see a concept that could possibly be considered a week length is this conversion from numbers to strings. But again that’s based on the ISO mapping. We’re not inventing anything here. So, the concept of the week length is not part of this proposal. In fact, now we are supporting arbitrary strings in the FW key word, if CLDR does in the future add support for an 8th or 9th day of the week, that will be easy to add in with this framework. So yeah.

FYT: Yeah. I mean, currently, the modern days calendar we don’t see this issue. The issue; DE actually summarized it well, that it – we need this to be a string form to align with pre existing API. The alignment is the stronger motivation and this is kind of an example that deal with historical calendar that I don’t think most people have saw interest in support. Theoretically, there’s a lot of historical calendar may have this issue, but I think in a very short – short future, I don’t see people will work on that. We shouldn’t create this API in a way that prevent future expansion. Right? So that’s really the motivation. We want to align, not to block. The worst part is if we stay with the current way, it just – we don’t have a good answer, what will happen, if people put that in there.

USA: I have a reply. And I am not quite sure about this one. So FYT or SFC you can correct me on this, but my understanding is the Tibetan lunar calendar used in certain places in the world does have the possibility of weeks longer than 7 days. And there has been an ongoing Google Summer of Code project for unicode adding that calendar. So it’s certainly something that could be on the horizon soon.

FYT: That’s beyond my knowledge. Sorry.

SFC: Just one other quick note is that we don’t always need to call these "weeks". We could call them "calendar-week" or something similar to that. So . . . just noting.

DLM: I would like to briefly express my support for what Dan Ehernberg and Shane mentioned. I think with this proposal, this has been blocked for a year. In this case, it is probably appropriate to look at returning to Stage 2 to work through the open issues and then return to Stage 3. And I would like to – what SFC said, it’s not a failure or anything like that. It’s important that the stage of a proposal reflects its reality, especially when it comes to implementation.

CDA: I just wanted to piggyback off that as well. And ask SFC, if this is – I realize my question is kind of phrased like a false dichotomy, which is not my intent, but: is this more that we should be regressing proposals to Stage 2 more often or a symptom that we are advancing proposals to Stage 3 prematurely? I am just trying to get a sense of what your thought is on that and if so, would what MF is proposing as far as process change, does that move the needle on this as well at all?

SFC: Yeah. My response here, this is largely a question of just, you know, more information. After we proposed to Stage 3, like we got more eyes on the proposal, which – and like as a result, we had some – a number of issues opened that brought into questions some of the decision made when we went to Stage 3. This is the story that happened – that happens a lot, especially with Intl proposals. So would MF's stage process with this? Well, it might help potentially get more eyes on the proposals, if we have the new stage, where we have to make sure that we have tests and other things written for it. Possibly. I don’t know for sure if it will solve all the problems. We will have to see. Maybe it will help. Maybe it won’t. But yeah, that’s the reason, is just because after the proposal got to Stage 3, people – there are a lot more people who, you know, gave very important and useful feedback that you didn’t give it before on Stage 2 and I wish they would give it before Stage 2. But, it’s not bad to get feedback on proposals, and if feedback comes at Stage 3 we need to deal with it. So yeah. That’s all.

USA: That’s all for the queue. FYT is there anything you would like to ask?

FYT: Yeah, for consensus for this PR.

USA: I think we heard a few comments supporting this. Let’s give a minute or so for people to comment.

CDA on TCQ: +1

DE: I explicitly support merging the PR, and I believe that any consideration of a downgrade to Stage 2 is considered only at the next meeting. And only with advance notice. Not this meeting.

FYT: Sorry. I don’t understand the last part of the your comment.

USA: I can paraphrase. Downgrading should only be considered next meeting. We shouldn’t be considering downgrading this meeting, which is aligned with the process that we have.

USA: So we have consensus. Congrats, Frank. And that’s it for this topic.

### Speaker's Summary of Key Points

- FYT explained how the previous idea of making Intl.Locale.prototype.firstDayOfWeek be normalized to a value 1-7 is not consistent with the rest of the Intl.Locale getters work. Therefore, he proposed that the getter would instead return the corresponding substring of the literal locale instead; the new locale info API can be used to access the high-level 1-7 value.
- There continue to be other open issues for locale info, in particular integration of some recent UTS 35 changes around defining an algorithm for determining regions/subregions, as well as 2-3 other small issues. Multiple delegates encouraged FYT to consider a downgrade at the next meeting if these problems aren’t solved promptly (e.g., by next meeting), and FYT agreed.

### Conclusion

- Consensus reach to merge [PR 79](https://github.com/tc39/proposal-intl-locale-info/pull/79) to align other Intl.Locale API
- The proposal remains at Stage 3 for now, but may be downgraded to Stage 2 if outstanding issues aren’t fixed promptly.

## Temporal normative PR #2718 & general update

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal/pull/2718)
- [slides](http://ptomato.name/talks/tc39-2023-11)

PFC: This is a update on Temporal, which is a proposal currently at Stage 3. We have one small normative change to request consensus on, and otherwise this is a progress update.

PFC: I am Philip Chimento, I work at Igalia and this work is done in partnership with Bloomberg.

PFC: You haven’t heard from me in a while. The last time I gave a presentation on Temporal was in July. At that time, we achieved consensus on a number of changes to the way that calculations are done with durations, which was intended to address the concerns from engines about being able to do the calculations using floating points or integers of a certain bit width. These changes are on the way to being merged into the spec. ABL had some comments from the perspective of implementing it, which we are working to incorporate. These should be ready to merge fairly soon and they have coverage in Test262.

PFC: As I said before we have one normative change to propose today, which stems from usage experience in the JavaScript developer community. If you want to know the status of everything, you can follow [issue 2628 in the proposal-temporal repo](https://github.com/tc39/proposal-temporal/issues/2628), if you want the detailed information. If you don’t want the detailed information, the proposal champions will give a loud signal when this checklist is complete and then we consider that the implementation would be shippable.

PFC: I measured about a month ago, how conformant the in-progress implementations were to the Test262 tests that we have. I made a little list of percentages here. There are 5 implementations. SpiderMonkey and V8 are nearing full compliance, and the others are somewhat incomplete. I should know because I worked on part of the JSC one. There’s some things still missing. This graph is how many of the total Temporal test262 tests pass. It should not be interpreted as 92% finished or 31% finished because that’s not what it measures. It measures what percentage of the tests pass. I think it’s useful nonetheless to look at.

PFC: Also, an update on the standardization of the string format in the IETF. This is complete. It’s been accepted for publication. And so this is no longer a blocker for shipping Temporal unflagged.

PFC: All right. On to the normative change that we wanted to present. This is a pretty simple one. It changes two lines in the spec. If you took a look at the PR, during your preparations for this meeting, it’s about converting PlainMonthDay to PlainDate. A PlainMonthDay is an object with a month and a day. If you want to convert to a date, you need to supply a year. The example here is, you know when your birthday is. You want to know what day of the week your birthday is in 2030. So you take a PlainMonthDay with the birthday. (This is my birthday.) You convert that to a PlainDate in the year 2030 and then you query that for the day of the week. So unfortunately, if your birthday is February 29, this will throw an exception. This is a reasonable behavior, in some cases. You might want that, but you also might not want it. One of the design principles we had when designed the API of Temporal is no data-driven exceptions. If the shape of the data is correct, then it should produce a result. This behavior violates that principle. The way we adhere to the principle is by returning February 28th of the year 2030 because 2030 is not a leap year and doesn’t have a February 29th. I said that throwing would be a reasonable expectation in some cases. And you can still get that; you just have to be more verbose. So that’s the change we would like to make. That’s all. Are there any questions on this?

JHD: Yeah. So it’s totally fine that a design principle is “no data-driven exceptions by default”. However, I feel like I would want to, for my uses, always get data-driven exceptions. So is there a reason I can’t just use toPlainDate and pass in an option like `overflow: reject` or whatever it is and get that directly? As opposed to having to come up with a complex workaround?

PFC: Yes. Personally, I think it would be a good addition to the API, to have an option parameter like that so you could select the behavior you wanted. We didn’t want to add that at this point– we didn’t want to have this change be an entirely new parameter for an API. We felt like Stage 3 was not the time for that. But there’s a repo that tracks possible additions to the API for a follow-up proposal, and adding this parameter is tracked there. It’s something that I think would make a good follow-up proposal.

JHD: So you are saying that as a potential follow-up proposal, it’s possible to add some sort of option every place where data-driven exceptions are avoided in order to get them? (As a general principle; I don’t know what specifics it implies)

PFC: It sounds about right. I don’t think we are tracking that with an issue to add it everywhere. In most places it does already exist. In this case it does not because it's a shorthand API.

JHD: Awesome. Thank you.

WH: I am trying to understand the claim of “no data-driven exceptions”. So does this mean you could have a February 30th? What would that map to?

PFC: February 30 is never valid. So yeah. In this case, you would not be able to create PlainMonthDay object with February 30th.

WH: But you can create one with February 29th, right?

PFC: That’s right. Because in the ISO calendar, February 29th is a day that occurs in a year. You know, once every four years it occurs, so . . . The idea was PlainMonthDay—

WH: I am trying to figure out how that’s distinguished from a plain date of February 29th, 2030.

PFC: The date of February 29th, 2030, doesn’t exist. You can see PlainMonthDay as a square that could possibly be on your desk calendar for a certain year.

WH: That’s not what I am asking. What happens if you create the PlainMonthDay of February 30th?

PFC: That’s not possible, the constructor or the from method will just throw because that date doesn’t exist in the calendar.

WH: Okay. What happens when you create a plain date of February 29th, 2030?

PFC: That will also throw because that date doesn’t exist in the calendar.

WH: Okay. Then I am confused about what “no data-driven exceptions” means.

PFC: Right. Well, it has to do with the option that JHD was talking about. So if you –

JHD: I think what WH is asking is, if I can get an exception based on which day and month I pass in, such as February 30th or March 75th that is a data-driven exception because some data throws and some doesn’t. How is that compatible with the principle of no data-driven exceptions?

PFC: I see what you are asking. March 75th in like, this is data of the wrong shape. Right?

SFC: Can I respond to that. So my mental model is that once you’re inside the Temporal type system, we apply the principle. When you’re entering the Temporal type system – that’s the layer where we already, for a very long time, have enforced validity of things. And once you’re inside the Temporal type system we do not, that’s what is happening here. So like, you know, when – you can’t create a date that doesn’t exist, you know, because you’re going from basically untyped data into typed data, into the Temporal type system through the constructor. That’s where we have already, for a very long time, done the validity checking. This is only once you’re inside the type system. And that’s the difference between the code example on the top and/or – that’s the example, I guess, between – the line that we are fixing is shown at the top, toPlainDate. Yeah. So like . . . it’s not a constructor. That’s the difference. (addendum: constructors support validity checking but the default behavior for options bags is to constrain.)

PFC: Yeah. I realized I misspoke. If you try to create a plain date of February 29th, 2030, what it does depends on the overflow parameter you can see on the bottom line of code. If you pass `overflow: "reject"`, you are saying I am fine with data-driven exceptions, I would like this to throw. The default is actually that you get a plain date of February 28th, 2030. I misspoke earlier. The reason why March 75th is not a data-driven exception is because that’s the wrong shape of data. That’s not data you would have in a list of months and days. The idea is, if you are processing a whole list of data that is valid in one domain, like the month-day domain, you don’t want to sometimes have a list that processes fine and sometimes have a list that throws halfway through. That’s the principle. If you have March 75 in the list, the data is faulty. That’s how we think about that difference.

WH: If you have February 29, 2030, then your data is faulty too.

PFC: Right.

WH: So why do you need `overflow: "reject"` there?

PFC: ToPlainDate date a shortcut for creating those properties. So you can basically choose the property you want with plain date.from.

WH: Yeah, your explanation left me much more confused than when I started. So it’s hard for me to support this until I understand —

PFC: Okay, I’m sorry about that. Is there another point that I can try to clarify?

KG: So I have maybe a related question. Maybe the same question that WH has. so the makes sense to me why a plain month day of February 29th should be accepted by default. Is -- I guess the question is what’s the -- hmm. All right. Let me back up. I think phrasing this as
"no data driven exceptions" is a confusing way to phrase this principle because clearly some data causes exceptions. And I think that if you could elucidate this principle in a way that doesn’t sound like no data can cause exceptions, that might be an easy way to understand what is guiding all of the design decisions. It seems like it is probably coherent. But I think that the phrasing this as "no data driven exceptions" is confusing, because of the data driven exceptions.
. PFC: Okay, yeah, I understand that feedback. Let me try to phrase this in another way. Let’s forget the 'no data driven exceptions' and just say you have a list of people with their birthday, and it could be December 15th or it could be February 29th. People who are born on February 29th are not very common, so fair chance if you have a list of 50 random people with a list of their birthdays, you won’t have somebody born on February 29th. So you write code to find the day of the week of everybody’s birthday in 2030, and you write it in such a way that you write it in such a way that February 29th would throw, but you don’t know that because nobody thinks about February 29th usually. And if February 29th is not in your list of people’s birthdays, then you won’t notice. So you’ll have this code with this potentially throwing bug that lies dormant until you add somebody to your list that was born on February 29th, and suddenly your data processing stops working. And this was actually the motivation of the person from the developer community who reported this issue to us, who said, 'look, you have this example in your documentation of finding the day of the week that somebody was born on, but it doesn’t work for certain dates.' Which is the motivation for changing this. I apologize for the confusing line about the design principle, but does that explanation make more sense?

KG: That explanation does make more sense, and I think the part that I am confused about now is not precisely about this PR. It’s about the design principles in general, and a way to put this is you’ve said that February 30th, unconditionally rejects, like a plain month day of February 30th unconditionally rejects, and my question is what distinguishing a plain month day of February 30th from a plain date of February 29th, 2030? Both of those seem wrong in exactly the same way, and I don’t understand why they’re handled differently, or perhaps they’re not handled differently and I’ve just misunderstood.

PFC: I said earlier that I had confused the issue by misspeaking about the `from()` method, so let me give a rundown of all the ways that you can create a PlainMonthDay. You can create it by passing a string to the `from()` method, like in this example here. You can create it by passing a property bag to the `from()` method. Or you can create it using the constructor. The constructors are the low-level ways to do things. We expect people using the API generally to not use the constructor directly unless they are doing something in particular that they need it for. The constructor only takes dates from the ISO 8601 calendar, so if you pass to the PlainMonthDay constructor, a month of February and a day of 30, that will unconditionally reject. If you use the `from()` method, you can pass a string like in this example here. If you pass
`"02-30"`, that’s an invalid ISO string, so the parser should reject it. We can’t really do anything about that unless we want to accept some ISO strings which are invalid, which I don’t think is a good precedent to set. You can pass a property bag to `from()`, like `Temporal.PlainMonthDay.from({ monthCode: "M02", day: 30 })`, then you can pass the same overflow option that you see in the bottom line here: `reject` or `constrain`. So you can select which behavior you want. The default is to constrain, which would move the date back to the nearest valid date. You could also choose to pass `reject` there, which says I do want an exception.

KG: Okay, so let me see if I understand. If you are using `.from()` with either PlainDate or PlainMonthDay and you pass a property bag, the default is to not throw an exception and you can specify an exception for invalid values by using overflow reject both for from and for plain month day. If --

PFC: That’s right.

KG: On the other hand you are passing a string, then the string 02-30-2030 or whatever the relevant string is, 2030-02-30, I guess, if you’re passing that string the to PlainDate.from, it will not reject because that’s a valid iso string, even though it represents a date that is not real, whereas if you pass the string 02-29 to PlainMonthDay.from, that will throw because it doesn’t match the grammar, is that accurate?

PFC: No. Well, the first part of what you said is is accurate. The bit about the string is not. For a month-day, `02-29` is a valid string.

KG: Sorry, it should have been 02-30. you pass the string "02-30" to plain month day, it will throw.

PFC: Right. ISO 8601 says that is an invalid month-day string because the ISO calendar never has 30 days in February. If you pass a string to `PlainDate.from()`, like `2030-02-29`, ISO 8601 also disallows that as a valid string because that date doesn’t exist in the ISO calendar.

KG: So they are consistent in that if you pass an invalid date or if you pass February 30th -- if you pass an invalid date to PlainDate as a string or an invalid date as a string to PlainMonthDay, in both cases they throw, and in both cases you can instead pass a property bag and specify the behavior with the overflow reject, is that accurate?

PFC: That’s accurate.

KG: That sounds good to me. Thank you for clarifying.

NRO: I just got my answer. SFC said that errors are only when entering the Temporal system, and I am asking if the second line in the second code block here is entering the Temporal type system and not from the discussion right now, I think my answer is that this is considered to be within that system already?

SFC: Yeah I should clarify that, string parsing versus a structured options bag are sort of different. I think Philip said it much better than I said it.

WH: When does Temporal.PlainDate.from throw if you don’t specify any options to it?

PFC: Let me look that up. Okay, if you don’t specify any options it depends on the parameter that you pass. It could be a string or a property bag or another Temporal object.

WH: So let’s say you have `{ year 2030, month: 2, day: 29 }`, would that throw or not if you don’t specify options?

PFC: If you don’t specify any options, that would not throw. It would give you February 28th.

KG: If you specify it as an options bag, but not if you specify it as a string, right?

PFC: Right. Because ISO 8601 makes that an invalid string, which is not in our power to do anything about.

WH: Okay, so what about `{ year 2030, month: 2, day: 30 }`?

PFC: So if you specify that as a string, it would also --

WH: Not as a string. As an options bag.

PFC: If you specify it as an options bag, you would get February 28th, if you don’t specify the option of overflow reject.

WH: Okay, so you can get February 32nd?

PFC: I mean, you can specify, like, day infinity -- no, you can’t do that. You can specify, like, `day: Number.MAX_SAFE_INTEGER` with the default option and then get February 28th.

WH: Okay, if you have a negative day, what do you get?

PFC: Negative numbers are not allowed. It has to be a positive integer.

WH: Okay, so zero is not allowed either?

PFC: Right.

WH: Okay — what would help me is just a few slides explaining what the rules are, because right now I’m asking about some cases I can think of, and the more cases I ask, the weirder this seems, so I don’t — without understanding the principles, it’s hard for me to say whether this is a worthwhile change or not.

CDA: Well, we are out of time. So are you -- sorry, are you seeking consensus to land this PR?

PFC: Well, it sounds like we don’t have that. I don’t know, I’m happy to prepare an overview of how Temporal objects are created? Would that be an appropriate thing to do for the next plenary? What’s your suggestion?

CDA: We do have a little bit of time available in the meeting if you wanted to do a continuation, if you felt like that would be valuable at all. We could take that offline, but at this point, we are past time, so do you want to -- I’ll capture the queue as it stands right now. Do you want to dictate key points and/or summary or would you rather do that asynchronously?

PFC: I had some in the slides here. But I guess if we delete the last sentence, this can still be the summary. I will paste it into the notes.

### Speaker's Summary of Key Points

The blocker on IETF standardization of the string format has been resolved. The champions will give a signal when outstanding changes have been merged, and at that point implementations will be encouraged to continue their work and ship unflagged when ready.

## Intl.DurationFormat stage 3 update and normative PRs

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/tc39/proposal-intl-duration-format/)
- [slides](https://docs.google.com/presentation/d/1_e1qU8toLiXCR3IB-JEqXMnsV_iYpt9z)

BAN: All right, so we have a number of new normative PRs for duration format. Some that have been sort of long coming. Before I get to them, first the silly thing is to call back to Frank’ preparation, you probably can’t see it, but behind me is there is a French republican calendar, so I want to wish everybody a happy 8 free mere. So now let me present.

BAN: Okay, so before I get to the normative PRs, I just want to say we do have a fairly large editorial refactor coming in. Some of these problems especially the ones fixed by the last two PRs on this list, are ones that were sort of -- we -- they -- the errors slipped by us because it was a fairly tangled spec. So anyway, so that’s coming down the pike. I believe I’ve got six normative PRs, they sort of go from relatively small to relatively less small. But so the first one, we have a -- an option "fractionalDigits" that’s meant to determine how many digits are displayed after the decimal separator when using certain styles. We had previously in the resolve options, then outputting that even if the fractional digits were undefined, and we have a PR here that -- for consistency with the other Intl objects doesn’t display that in the resolved options if it is undefined. And this, like all of the PRs I’ll be discussing, are approved by TG2. So, again, to -- for consistency with I believe all the other Intl objects except for maybe number format, we don’t output anything in resolve options if it is undefined.

BAN: The next one is, this is one we likely should have presented at the last plenary. But -- oh, pardon, this is the one. Okay, so this one is consistency with all other Intl objects. This is the one consistency with all Intl objects other than number format. So, yeah, previously number system had been in the wrong place, if I go to the PR (172), let me see. Yeah. So previously, it had been outputting at the bottom of the list of resolved options. And now for consistency with other Intl objects, it’s going to be after locale. And this was based on implementer feedback, both Frank and Anba.

BAN: In this one (PR 173), we want this duration format to work correctly with Temporal.duration objects. Those objects have limits on the maximum values that the different components can have, if I recall correctly, everything down to, let me look to my notes actually to make sure I’ve got these numbers correctly. Yeah, the absolute value of weeks, months and years in Temporal.duration is capped at 2 to the 32nd, and the absolute value of subweek fields when expressed in seconds is capped at 2 to the 53rd. We have TD2 approval for this. The actual PR that’s going to be merged thanks to Anba for finding problems with how those limits were calculated in Temporal.duration, the actual PR that’s going to be merged is going to be matching the new version of Temporal.duration or Temporal.duration, and, yeah, so approved. We are going to be making some changes to it to keep it aligned with Temporal.

BAN: (PR 176) We’re getting relatively larger here. Okay, so previously, and actually, this is an error, this could be for all durations, not for negative durations. Previously when we’re dealing with negative durations, we had been outputting the minus sign indicating that it’s a negative duration on every single component. Which simply put, looks weird. And after consulting with CLDR people, we have decided to follow their guidance and for a negative duration, so a negative amount of time, only include the negative sign before the first unit. We can do this because we don’t allow mixed durations in duration format, so we don’t allow, like, negative one minute, positive -- negative one hour, positive one minute, positive one second. That will throw. So if anything is negative, if any of the units are negative, all of them must be. So this is non-ambiguous, the new version, and again, we are following C LDR’s guidance on that one. And like many of these, it was first discovered by Anba. This should apply to all styles.

BAN: (PR 178) Okay, this one specifically pertains to the numeric style. The numeric style is used back here using the -- it’s used by the overall digital style. It’s used to represent things as on a digital clock. It’s also used to indicate that a subsecond value should be appended to the value before it. So if I go to the examples, thank you again to Anba for these examples, here is how things are formatted if we’re not using the numeric style. So you notice that if we don’t use -- if we don’t use set or milliseconds to display always, they will not be displayed if the value is going to be zero. So in this case, if we didn’t have milliseconds display always here on the third line, pardon me, here on the fourth example, if we didn’t have that millisecond display always in there, it would display as just one second. So this is how it works for non-numeric styles. For numeric styles, so, again, displaying subsecond components, subsecond units as a fraction after the decimal separator on the next largest unit, we get some output that is just confusing to users. The thing to focus on here is the fourth example. In the previous version, in the one for non-numeric style, setting milliseconds display to always ensures that the milliseconds will always display even if it’s, you know, zero. Here if someone says, oh, well, I want to format this without that MS there, I want to format it as just the wrong number, so I’m going to use the numeric style, and I want to make sure that that will show up regardless of whether it’s zero, well, it turns out that this milliseconds display option is ignored if the style is numeric. So currently, it’s set up such that if the previous style is numeric, you know, indicating that while this -- the milliseconds are going to be appended after the decimal separator of seconds. If the previous style is numeric, requesting `millisecondDisplay: always`, just kind of doesn’t make sense. Because it will be displayed, it will be displayed as a fractional component of the one before it. So saying, we’re always going to display it, well, it is always going to be displayed. It’s just going to be displayed there a different way. It’s going to be displayed as that fractional component. Currently, I believe I may have already said this, currently if the previous style is numeric, specifying always for one of these subsecond units, that will throw. What this PR does is, because this is confusing behavior, it’s confusing behavior, like, this will not throw, but you’ll notice that the milliseconds aren’t displayed as a fractional component is in fact in the current version of the spec ignored. What this PR does is if we have this situation, if you’re specifying, if you’re using a numeric style and you’re dealing with a subsecond unit, it should always throw. If you’re specifying numeric style and you specify that it should always display and it’s a subsecond unit, it should always throw. This sort of always doesn’t make sense. Currently it throws if the previous style is numeric. E if the previous style 12 numeric, it doesn’t make much sense to do this. Currently this value is ignored and what our PR will do for this last line here, well, in this case this one would throw for same reason that it throws when the previous style is numeric. So essentially this PR -- this one is kind of fun because it -- all it does is remove one layer of -- a level of indentation. Previously we would do the check for display always and numeric styles conflicting only if the previous style was numeric, now we’re going to be doing that check always.

BAN: Okay, and this is the final one, I believe (PR 180). And as with the previous one, this pertains to the numeric style. The numeric style when we’re dealing with hours, minutes and seconds is sort of like most often used to display as on a digital clock. But in the current version of the spec, if we have hours, minutes and seconds specified, and the minutes are zero, instead of displaying as with the new version, this is what the new PR displays, instead of displaying as one would expect, it instead displays as a comma separated list of values. So in this case, because there’s hours, minutes or zero and seconds are one, the current version of the spec says a h, we have two hours and one second, so I’m going to display that as the raw number 2 and then the raw number The -- if you have a -- one of the larger units specified. If you have hours specified, then minutes and seconds display as two digits as on a clock. So here this is output that’s sort of both confusing and ugly. So what we have done is if you have -- and, again, this only pertains right now to the minutes. If you have a quantity of zero minutes between an hour and a second that gets displayed, in this case, they get displayed because they have non-zero values, they could also get displayed if they’re set to always display. So if you have hours and seconds displayed and minutes are zero, even if this isn’t set to be always displayed - so typically, so we have sort of two options for display, either always, which always displays, and auto, which generally displays if we’re dealing with a non-zero value. So now in this case, where minutes -- zero minutes are sandwiched between hours and second that get displayed instead of this sort of confusing output, we instead display it as on a digital clock. So we’ll force these minutes to get displayed even if we’re dealing with zero minutes.

BAN: And so thanks. So this is, as I said, six PRs that we’ve been sort of long overdue. So, yeah, so I suppose I’m asking for consensus on these six PRs. So -- well, first questions.

DLM: Yeah, I just want to say we support these normative PRs.

BAN: Fantastic. All right. So requesting consensus.

CDA: Is there any more explicit support for these pull requests? Are there any objections? Sounds like you have it.

BAN: All right, fantastic. Thank you.

### Speaker's Summary of Key Points

Many small PRs for `Intl.DurationFormat`
Change `resolvedOptions` order to align with rest of Intl Don’t output `“fractionalDigits”` when `undefined`
Limits on `Duration` values as in `Temporal.Duration`
For negative durations, only display negative sign on largest value (per CLDR guidance) Always throw when invalid `“always”` style used in numeric-like styles for subsecond units Avoid surprising/nonsensical output by always displaying `minutes` value when both `hour` and `second` are displayed

### Conclusion

- TG1 consensus on all PRs

## Math.sum

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/bakkot/proposal-math-sum)
- no slides presented

KG: Okay. Great. Hi, everyone, I don’t have slides for this because I’m only going for Stage 1. But I do have a repo. And a spec, and on. So the proposal, the thesis, is that this should be a more convenient and ideally higher precision way to sum multiple values in JavaScript. I’m sure everyone who has used Python has used `sum`. It’s incredibly useful. Right now if you have a list of values and you want to sum it, you have to write a reducer. It is in fact one of the very few cases that you have to write a reducer, which is sort of a big hammer; it’s a shame to have to pull out a hammer that large for something so simple. And I would like us to do better. To have a more convenient way of summing a list of values. The other thing, of course, is that as I am sure we are all aware, floating point math is imprecise and, as we might not be aware, you can in fact do better when summing a list of floating point numbers than the naive just add from left to right. And by better, I mean you can get an answer which is closer to the true mathematical sum of the values represented because floating point errors can accumulate and you can have an algorithm that account for some of the error accumulation. I’m not, at this time, certainly not for Stage 1, proposing any particular algorithm, although I do have one in mind. I will probably write down that algorithm and say engines should just use this rather than leaving it up to engines. I got feedback to that effect, but that doesn’t need to be decided at Stage 1. And probably this would be a method. I have a few design questions I would like feedback on if this does go to Stage 1, but first I would like to ask if we have consensus for solving the problem of summing multiple values in a more convenient and more precise way?

WH: What is it that you are proposing to do here?

KG: For Stage 1, I’m proposing to explore the problem of summing multiple values in JavaScript in a more convenient and precise way. For Stage 2, I will propose a particular function, math.sum, and a particular algorithm that accomplishes that. It will take a list of values to be consistent with math.max. Again, that will happen at Stage 2, not Stage 1.

WH: The more convenient way doesn’t really make much sense to me, since you can do the `reduce`
fairly easily. So the key thing is the more precise, and you gave an example in the proposal. Now, consider that example. You’ve set length to 10 to show that `reduce` produces `0.9999999999999999`, whereas, `Math.sum` would presumably produce `1` given the algorithms you’re exploring. But consider what happens when you change the example to use length 7 instead of 10. In this case, naive `reduce` will give you `0.7` while `Math.sum` will give you `0.7000000000000001`.

KG: So, yes, perhaps I should phrase this as on average more precise rather than more precise in every case.

WH: That also is subjective thing since it depends on whether you mean `.1` exactly or whether you mean the actual double value that’s closest to `.1`. The answers differ depending on which one you mean.

KG: Yes, since this function will work with Numbers, I think we are constrained to more precise in terms of floating point arithmetic.

WH: Okay, yes, in this case, the examples like what you gave will go either way, depending on which definition you mean, and that wasn’t clear.

KG: Yes, what I mean is specifically floating point arithmetic.

WH: Okay. So in that case, one of the questions is how would something like this be specified? That’s really the one big thing in this proposal, do we want to add something to the language for which we have no good way to test it?

KG: Yes. And that question will certainly need to be resolved by Stage 2. But my original plan was to leave it up to implementations in the same way that all the -- most of the transcendental functions are left up to implementations. I know I heard feedback from V8 that while they see some wisdom in that approach, in practice, they think it will be better to write down a precise algorithm because they have found that people come to rely on those precise details across engines. So I think in practice, we whether need to choose a particular algorithm, and I’m certainly not proposing a particular algorithm for consensus right now, although I do have one in mind, which is linked from the proposal. Or I guess not linked, but, yes, Neumaier's algorithm, which is like compensated summation, except you do it in the opposite order if the the summand is smaller than the error or something like that.

WH: Okay. I would strongly object to picking a particular algorithm here. I think the right solution is to specify what the output should be exactly.

KG: Right, for every possible list of inputs?

WH: Yes. A plausible specification would be the mathematical sum of the inputs rounded to the nearest double, breaking times to even, which is what double rounding does.

KG: I am not aware of a way of doing that which requires less than logarithmic overhead. Although, maybe you are.

WH: I posted a link in the TCQ to do that. http://www-2.cs.cmu.edu/afs/cs/project/quake/public/papers/robust-arithmetic.ps

KG: I’ll check it out, although --

WH: The one issue, it appears, with any of these things is that you might get intermediate overflow to infinity. That’s another can of worms.

KG: Yes, well, I mean, if you specify a particular algorithm, that’s -- then you just do.

WH: Yeah, but unless the algorithm gives exact answers, I would not support this if the intent is to specify particular algorithm.

KG: Okay. Well, I am happy to explore the feasibility of giving -- of requiring it to be precise, although, can you say more about why?

WH: If you specify something like Neumaier’s algorithm, it will give wrong answers in some cases.

KG: Yes.

WH: And then implementations cannot improve on it if it turns out, and it’s likely that it will turn out, that there exists a better and faster algorithm which gives more precise answers than the one you specified.

KG: Yes, that’s --

WH: So if what you specify is the exact answer, then you don’t have that problem.

KG: Yes, you just have the problem of it being slower. But the --

WH: And so this is what I want to -- this is what I’m curious about, if you’re proposing this for Stage 1, is that -- is there concern about speed of this or concern about precision?

KG: What I would like to do is explore having something that is more precise. However, as with all things, there’s always a tradeoff between various concerns that one might have. I don’t think it would be worth adding something if it is infeasibly slow. So it’s not that I want something that is faster than the reduce. It is that I want something that is more precise and reasonably efficient, where reasonably is not a well-defined term.

WH: Okay, there exists algorithms which are reasonably efficient.

KG: Okay.

WH: Where reasonably is not a well-defined term.

KG: I am happy to specify it to be precise, if that turns out to be practical. I’d like to explore that during Stage 1.

CDA: All right. We do still have some time. We’re technically past time, but we also sort of shortchanged this agenda item because it was thought we could get it done in less than the original allotted time. I just had a question in the queue. Aren’t we getting into things that are really post Stage 1 here to begin with?

WH: I don’t think so, since the entire meat of this proposal is precision.

KG: In any case, we -- I think Waldemar and I understand each other. So I think we should keep going through the queue.

MM: I mean, precision is a nice value, but the more important constraint from my perspective is determinism, is that all browsers that, you know -- all engines that conform to the spec necessarily give exactly the same answer, that is the case with reduce right now, if some can be both more precise and -- but still have the output of sum be exactly in agreement across all conforming engines, that’s great. If it’s a best efforts kind of thing where the spec allows engines to improve the precision over time, bringing them not into exact agreement, that would be terrible, from my perspective, and I would think we would be better off with the proposal than having a best efforts proposal. If there’s a feasible algorithm that we can all agree on and if the algorithm produce the result that obeys some nice mathematical invariant like the invariant that Waldemar stated, then we can have a normative assert in the spec that the algorithm produces a result that obeys the invariant, and then both the invariant and the algorithm become equivalent, you know, equivalent normatively in the spec. And I think that’s a fine place to land if there’s a feasible algorithm we can agree on that produces the result that obeys an invariant. If not, I think we’re better off without the proposal. That’s it.

JHD: Yeah, so this seems similar to the feedback here. Basically, if we specify it with the exact answer, then what will happen is that users will end up relying on whatever algorithm they choose right now and never be able to change it in the future anyway. This was the similar feedback I was given when I was trying to suggest that it would be acceptable for a predicate to, like -- we were talking about if we ship the symbol predicates and later made -- or it was -- I forget the exact detail, but something about shipping a predicate for which an existing code value would suddenly change from true to false or false to true, and my argument was that that was fine, because the condition changes because it answers a question and that answer to the question changes and, therefore, it’s correct that the predicate value -- or return value changes. But V8’s feedback specifically was that will break people and we will not do that. So I think that it’s idealistic thinking to think that we can ever -- that we can improve algorithms over time in JavaScript. I think experience has shown us that whatever algorithm people happen to choose, that’s the one we have to use forever no matter what, so we might as well go with determinism now is my perspective.

KG: I’m happy to say that given this -- this will have to be specified fully deterministically.

DLM: SpiderMonkey team discussed this internally and we’re in favor of from this proposal for stage one, and general concern has been raised about inconsistent behavior between implementations and leading to future web compatibility problem was also a concern for us. And that’s something to be explored in a later stage and doesn’t have to be decided right now.

CDA: And you have similar from JHD and MM supporting Stage 1 with explicit deterministic algorithm. That’s it for the queue.

KG: To be clear, this may or may not end up with writing down an algorithm. Maybe instead we just say that it has to be the mathematically precise answer with round ties to even, as Waldemar suggested. And I’m -- we’ll look into whether that’s feasible. And then there may not be an algorithm, because it may be just "get the right answer".

MM: I think that’s worse than specifying an algorithm and using a normative assert to constrain that the algorithm must be consistent with the invariant.

KG: In any case, it’s an editorial concern for the future.

CDA: You have another message of support on the queue from DRO. Love this proposal. And that’s it on the queue.

KG: Okay, well, I would like to ask for Stage 1 for a convenient and more precise `Math.sum` implementation, having taken the feedback for it to be acceptable, it must be fully deterministic and from WH, that WH considers this to only be worth doing if in fact it is precisely the right answer more than merely more precise. With that, I’d like to ask for consensus for Stage 1.

CDA: Okay. EAO is on the queue supporting Stage 1. I think you already got some other explicit support earlier. You’ve got JSC supports Stage 1.

KG: Okay, thanks very much. Do we have anything for the remaining 7 minutes or can I ask a couple of follow-up questions?

CDA: Yeah go, ahead and use the time, because I think we don’t -- our smallest next items are like -- need 15 minutes. So please go ahead.

KG: All right. So the main thing that I want to ask the committee’s feedback for: Math.max already exists and is var-args and this is kind of annoying because if you want to take the maximum of a potentially very long list, you can’t with Math.max. If you try to spread 70,000 items to the stack, every engine will throw a `RangError`. Of course, that’s not what the spec says because the spec has no notion of memory limits, but in practice, you just can’t use Math.max to take maximums of very long lists. So I might make a separate proposal propose a maxFrom or something similar that takes an iterable as its first argument so that you can actually take the maximum of long lists. And I would do the same for sum, of course, in whatever order they landed. Does anyone think this is not a direction worth pursuing? Or does anyone think that in fact `Math.sum` should take an iterable and be inconsistent with `Math.max`? Unfortunately I think the consistency is worth it.

KKL: I have run into this problem in the past, and I am in support of establishing a precedent for whatever from methods for receiving an array of elements instead of splicing them onto the stack. Specifically, I have in the past been burned by attempting to splice 10,000 elements into an array.

KG: Cool. Okay.

EAO: Yeah, I was wondering, could we just make it work with Math.max? If it gets one argument and it’s an array, is there actual code somewhere that would actually break from this?

KG: I guarantee yes, because in particular if you pass an array containing exactly one number, what to you think happens? It stringifies it and the stringification of an array is just the contents of the array joined with a comma if you have exactly one number, then you get that element and then it -- that turns that into a number, math.max turns that into a number, so if you do a math.max of the array containing 12, you get 12. And I guarantee someone is depending on that.

EAO: But I mean, that behavior would not change?

KG: Sure, that particular behavior would not change. If you take Math.max of the empty array, you get zero. And that behavior would change to negative infinity.

EAO: Sure, unless we explicitly defined that to be zero.

KG: You can’t, that’s the wrong answer.

EAO: It would have been nice to not need to have another method for it.

KG: Yeah, unfortunately, I guarantee people are depending on the horrible coercion behavior. Okay, well, those are the things I wanted your feedback on. Thanks, all, and I look forward to reading this PDF from WH. Some other context from this, Python has a sum function and also has a precise sum function, fsum. In version 3.12, they changed the regular sum function to be more precise, in particular to use Neumaier's algorithm. Because they found that it was only a little slower. Their fsum, I believe, I’m pretty sure, is log overhead. Log in the length of the list. But maybe I’m wrong. So if anyone has other PDFs for precise floating point summation, please send them my way.

WH: The algorithm which I linked here is if the numbers have reasonably similar magnitudes, then it behaves very well. If the numbers are wildly different magnitudes, like you’re adding -- you’re adding, let’s say, some -- a few integers as well as 10<sup>200</sup>, then you accumulate intermediate results which span kind of both sets of bits in the representation. In practice, it works quite well.

KG: Okay.

WH: The other mistake in the proposal is that if you have a `Math.sum` of no numbers, the result should be the identity for addition, which is `-0`.

KG: Yes, I already fixed that. I just always forget about negative zero because I hate it.

CDA: All right, we are right about at time.

KG: Okay, thanks. I believe I have consensus. I’ll go update the notes with the summary.

CDA: Okay, thank you. All right, thanks, everyone. Thanks especially to the note takers. We will see you all back here in an hour and 55 seconds.

### Speaker's Summary of Key Points

It would be nice to have a more convenient and more precise way to do summation WH thinks it is not worth doing if it is only sometimes more precise, rather than as precise as possible Many people think it's important that the result be fully specified Some support for a follow-on with Math.sumFrom/maxFrom to sum iterables instead of needing to spread them to the stack

### Conclusion

Stage 1 KG to read more about Shewchuk's algorithm for precise floating point summation
.
[Lunch]

## Iterator helpers web compat continuation

Presenter: Michael Ficarra (MF)

- [issue](https://github.com/tc39/proposal-iterator-helpers/issues/286)

MF: So I am presenting this along with SYG, though SYG is not here, but we have talked about our options before the meeting.This topic is about the web incompatibility discovered with regenerator-runtime and a popular product from a company named Transcend. They sell a product that, when used in conjunction with generator runtime, causes a problem only when the Iterator global is present. When Chrome tried shipping iterator helpers, it was discovered on many larger websites that this incompatibility existed. We discussed last time some of our options. We decided to try outreach. We worked with this company to try to deploy fixes and update their customers. But their delivery method is such that each customer individually has to be upgraded and in a latest sample that was given to the V8 team, some of the websites still have not been upgraded. So this was going to be a conversation about whether, after the outreach was complete, whether we think it’s worth shipping again or taking the backup approach. Because of the unfortunate failure of that outreach, we are instead asking just for merging the PR that was considered the backup approach. To remind you, that PR creates two of these what we are calling funky or weird accessors: one on the constructor property of Iterator.prototype and the other on the Symbol.toStringTag property of Iterator.prototype. And there are setters instead of data properties. The getter returns things we want in the property and the setter does weird setting behavior to not be affected by the override mistake.

MF: So hopefully this will be a shorter item than what we expected just because we are taking this unfortunate step. I am also hoping that if we want to follow up in the future, at some point, when maybe more outreach is done or the web has evolved, this does allow us at some point in the future to change these accessors to data properties. I don’t have a huge urge to go about that, but maybe sometime in the future we would and this doesn’t prevent that from happening. So that’s the request. I would like to request consensus on merging this PR which is a change to the Stage 3 proposal iterator helpers. Is there a queue item?

JHD: Yeah. I think that rather than shipping something strange, that we may not be able to change later, we should omit these two properties temporarily. And that way, we can still add them later, if we want, but like then we don’t have something weird potentially in the language forever.

MF: We had discussed that option last time, and discovered that that wasn’t an option for us. I don’t remember –

JHD: That’s not my recollection. I would love to hear more about that.

JHD: My recollection was just that the PR was the approach that was being recommended by the champions and that there hadn’t been much consideration of omitting it. And I thought when he last discussed it, that a number of folks were comfortable with that idea. If there’s a concrete reason, that would be great to know the the risk of being able to change it from like the likelihood to change from an accessor to a data property later I think is a lot – I think that’s a riskier world than the risk of not being – you know, not being able to add the properties that are absent later.

MF: Yes. If we were going to consider that, I am going to have to think about it and possibly go back to the notes from the last meeting. I believe it was NRO who suggested that at the last meeting, originally. So if anybody remembers, feel free to jump in. I wouldn’t feel comfortable making that decision, without having to go back and look at that again.

JHD: Yeah. So if it’s not clear, I would – do not like the idea of merging that PR. Unless there’s a concrete reason that omitting them can’t work, I would prefer not to have consensus for that.

MM: So I am next on the queue. I do think there’s – let me offer a concrete reason why omitting them won’t have the beneficial effect that you’re hoping for. In general, when we omit something to enable us to add it later, the behavior of having omitted it is that the code that depends on it would break because of the absence of the thing that was omitted. In this case, omitting ‘constructor’ means that you are seeing the inherited constructor, omitting ‘toStringTag’, if you’re in the inheriting from something with a ‘toStringTag’, nevertheless the ‘toStringTag’ is really there to effect the behavior of ‘toString’. And toString has a fall back behavior. So in both cases, somebody could, you know, code that – you know, code that depends on the behavior under omission is not getting an error and would see a change of behavior when you go from omission to providing them, and the change in behavior is more viable than the change in behavior from accessor to data. So I agree with the skepticism, having introducing them as accessor, we might not be ever to introduce them as data, but I think it’s less violent. Having omitted them, we are even less lakely to add them later

JHD: I agree for any change, one could break code with that change. But I have written code that would break and when things change between data properties and accessors, SES, by making that change breaks my code in a number of places. I think that likelihood is quite high compared to the likelihood of someone depending on the exact value of ‘toString’ for that one. When people use dot constructor, it’s instanceof it and that’s – I think that that code is less likely in terms of – like, I don’t think anybody is going to be writing that code in general as a practitioner for any of these three cases. And I think that in the kind of transitive dependency case, there’s an obscure thing, there’s likely they will depend on the kind of property it is and use constructor or depend on the exact output of toStringTag.

JHD: If all of the things are considered risks and we are not all convinced one is less risky than the other, then the correct thing is to wait longer.

MM: I think you’re making a plausible cause specifically with regard to toStringTag and constructor. I am skeptical, but it is an empirical question to try to bring evidence on. But I am certainly skeptical that omission is the easier, earlier state to not break when we add data properties later. I am done.

CDA: Nothing else in the queue.

MF: Okay. If nobody else is discovering why we might not want to omit the properties, I think I might prefer to yield the rest of my time so that I can hopefully take a look at the notes and think about it for a little bit before I bring up this topic for consensus later in the meeting, if that’s okay.

DE: Let’s come back to this as an overflow topic. I think that’s a good idea.

MF: Let’s get to it. It is important to achieve consensus at this meeting, whichever direction we choose. Chrome is trying to ship again and this would be the only thing holding them up.

MM: With regard to JHD and my contrary points – is there any way to gain evidence in support of either hypothesis?

DE: So we’re talking about whether instanceof will work, for example? If we see somebody doing instanceof on other iterators, would that be relevant evidence? [Note: This comment was confused and wrong. Instanceof does not reference .constructor.]

MM: That would be relevant evidence.

DE: I agree with what MF is saying, that we should come to a conclusion. This is a very small point. It makes sense to take time to get things right, and a couple of meetings is a good amount of time.

KG: I think leaving out ‘constructor’ is pretty risky. I would be much happier including the getter. I think it’s likely that if we leave it out, we wouldn’t be able to add it back in. It’s unlikely that if we make it a getter, we wouldn’t later be able to make it a data property. And in addition, the outcome of leaving it as a getter is much more palatable than leaving it absent. So I much prefer to make it a getter.

MF: Okay. Personally, I would probably agree with KG there. But I will yield my time on this topic and hopefully we can bring it back at the end of the meeting.

CDA: Yeah. I mean, all the time you’re freeing up now is time available, providing we can move things up, which I am sure we. The next one will be easy. I think you are up next, as well, with joint iteration. Stage 1 update.

MF: Okay.

RBN: I was talking about this in the matrix and there’s a lot of discussion about not having a `.constructor` breaking `instanceof`, but `instanceof` doesn’t care – It does not look at the thing on the left for a `.constructor`. It doesn’t care about the `constructor` property at all.

KG: To be clear, my expectation that people will come to rely on constructor is not based on instanceof. I am expecting people to write like `X.constructor === Iterator` or whatever.

### Speaker's Summary of Key Points

### Conclusion

- Continued on day 4

## Joint iteration stage 1 update

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-joint-iteration)
- [slides](https://docs.google.com/presentation/d/1sgqXgWBsDF0S43wVuFgIyOC8Y3AMFt1qxBIFbzEq9Vg)

MF: Okay, so joint iteration. I presented it last time for Stage 1. Was it last meeting? Yeah. Last meeting for Stage 1. And it reached Stage 1. For this proposal, I presented a survey of the languages who have a joint iteration construct in them, and libraries providing the same facility within JavaScript. And I also considered all of the different use cases that were served by joint iteration. And this is the API shape that I have come up with and I want to run this by committee before starting to do spec text and everything and getting it fully ready for Stage 2.

MF: So I want to explain what I have come up with. It is one static method called zip. Two parameters: the latter is an options bag. The former can take two shapes: I am calling them positional and named. The positional shape is when the first parameter is an iterable of iterators or iterables. That yields tuples whose size is the number of iterables yielded by the input iterable. The second shape it can take is an object, whose values are all iterators or iterables and the names are, well, any names you like. And then what is yielded as the result here is an object who has the same names as the input object, where each value is the next yielded value from each of the iterators. So this is kind of like what we do with Promise.all, and what we want to do with the named variant of Promise.all, both in the same API. As far as the options bag, it supports the other kinds of use cases that we saw existing in the ecosystem, the libraries and other languages. Without any options the default is to stop iterating when the first iterator has finished. But you can give the longest option to continue until the final iterator has finished. This uses filler values from the fillers option. So depending on the shape of your first parameter, your fillers are either iterator or iterable of fillers or it’s a record whose names correspond to those same names used in the first parameter. And the third option is strict, which unlike shortest and longest actually ensures all of them finish at the same time. If they don’t, one finishes before another one, it throws. And you can’t use this together with the longest option.

MF: So that covers all the use cases that I found, when doing that survey. These are some examples of what it looks like. You see on the left here, this the positional one. An array is the iterable. And we have three iterables there. This iterator or iterable produces three iterator or iterables. And you can see that the first thing yielded contains the first things yielded from each of the input iterators. You can see the second one and the third one This is giving no options; if one were shorter, it would have finished whenever the first one finished. On the right, the named one, where it’s a record where each of the yields corresponds to one yield in each of the output values.

MF: By the way, I didn't mention but in the proposal repo I have a full implementation of this proposal with tests. It's not incredibly pedantic about everything, like, making sure to use the captured built-ins and stuff. But it should give you all the answers to any questions you might have about the behavior of this proposal. Things that we could discuss that I have questions about: are these covered use cases okay? Have I missed use cases? Am I covering use cases that don’t matter? The things I am considering are, I want to support whenever you have zero or more iterators or iterables, so that’s covered.

MF: I wanted to support positional and named ones because really, just like we see with Promise.all, when you have more than a few positional ones, it’s unwieldy, and the names are nice. I will use that pretty much all the time when it’s not just two iterables or iterators. The longest option is useful. The shortest is the default in everything we saw. The strict option I'm kind of so-so on. I think it existed in only like one or two libraries and the only language that had it was Python. I am okay either including or omitting that. But assuming we do have all of those, what should the options bag look like? Right now I have two Booleans for the longest option and the strict option, which gives us 4 states, but one is invalid. That’s not the greatest thing. We could have a three-state enum, like a string, but technically all string inputs makes many more invalid states. I'm not sure. So I would like to hear from you on that as well. All of these inputs I have been saying iterator-or-iterable because that’s the same kind of input that the Iterator.from function takes. I think that’s the right thing to do here. But there is a design possibility for what we do for strings. Right now, I took the iterate-strings approach. If you intermingle strings, it will iterate the strings rather than throwing. It’s not like `flatMap` which throws on strings because it assumes those are errors. We can go either way on that. I think that it's more like Iterator.from, where we have chosen the iterate-strings approach. And parameter evaluation order, I don’t want to get into the details of this right now in the overview, but I think that – so this is the first time we are doing an options bag. And I think there could be some strange evaluation order. You could see it if you look through the polyfill I have on the proposal repo, that like depending – things – effects are wherever. When we pull the fillers property off the options object and enumerate those values, like all of that it might make sense to do it before we ever get the iterator out of any of these iterables. I think that probably nobody had any kind of expectations about the order. There might be some loose expectations, but not like a very strict expectation of ordering. I think it doesn’t matter. But if you have opinions on that, I would like to hear that as well. We could pretty much choose anything. I just chose what was most convenient when implementing that and that probably aligns with what is most convenient with engine implementers. But we can see – I'll also probably figure that out as I write the spec text. If you have opinions, I would like to hear them.

MF: This slide has the links if you want to check them out. I have the proposal itself, the polyfill, and the tests which are not super thorough. Obviously, there will be more thorough tests of ordering and stuff in test262.

JHD: Yeah. So maybe I missed it, but the positional approach makes sense to me. The named ones seems confusing. That something that there’s like concrete use cases for a JavaScript or is that something you collected from other languages, some other languages that have this?

MF: This one is inspired by the proposal for the Promise.all named variant. The reason why we want to do that is because when you pass like multiple promises to Promise.all, and then you get out of it a big array and destructure that, it’s tricky to line up the destructuring with the inputs and like really easy to get that wrong. The named variant allows you to give it a name on the input and output and those line up. Where you put it in the list doesn’t matter. I think that that same kind of convenience is desirable here.

JHD: Okay. So to make sure I am getting it, the promise.all, that one seems straightforward to me because you’re like – you’re getting individual items – put individuals in and about putting them out. But in this case, you’re saying that like your .map call back. The argument signature, destructure it by name and – and I see this example, but I mean like the – that doesn’t tell me where it’s useful. Am I understanding this right, if I stuck a .map on the end, the call back into .map, destructs ABC and out in each iteration and that’s the convenience?

MF: Exactly. Yes. Yes.

KG: Yeah. Just like - names are super convenient. Why do we have objects instead of just arrays? Because it’s nice to have names for things.

ACE: Yeah. I enjoyed that you have referenced the await dictionary proposal, assuming we get AsyncIterator.zip, you don’t need await dictionary if you’re super confident with these APIs because you could do AsyncIterator.zip and then iterators of the promises with the names and then like to array at zero. I still think await dictionary would be nice. It’s a nice synergy between them. I would definitely use this named approach for when there’s definitely more than two of them.

MF: Yeah. I see what you’re saying. That is kind of neat. But also, you do want this kind of discoverability aspect. And even if you can do it like that, it might still be valuable to add the conveniently discoverable version of it for people. But that’s a conversation to have during that proposal's time.

CDA: Nothing on the queue.

MF; Okay. I will give it another minute or so for people to think about their discussion topics on screen. And if I don’t receive if I other feedback, I will just go with what my initial design was.

ACE: My assumption when I first saw this proposal was that fillers was a single value. So the undefined or I want it to be null. I am wondering if having been able to name each filler – I am trying to think how obvious I would want a different filler based on each thing. I can see why you need it because you can’t just concat the iterators because you don’t know which one is going to be the shortest. Yeah, I am not – I want want to use each use cases for each something

MF: You could do it with a single filler and that’s how some languages have done it. This was inspired by languages with strict type systems where if you have an iterator of A and iterator B and you want to zip them, you need to produce an iterator of tuples of As and Bs. And if you give a filler that’s like a single thing and there’s no common supertype of A and B, you couldn’t produce a tuple of A and B. They make you give a filler for As and Bs, depending which is shorter or longer, it uses the appropriate filler and they just don’t have the option. I chose to go along with that because I know a lot of people want to use this in typescript and are going to want those types to check out nicely. But we don’t have to. We could do a single filler. I prefer – not just I prefer, I think that typescript users will prefer having the fillers match up. We could also probably figure out a way to do either where you have a filler per input iterable or you have a single filler that’s like a convenience mechanism for that. I am not sure if that would be worth it or not.

ACE: Yeah. If you put like a proxy there. If you want to do a catch all thing, you would use – you didn’t want it actually statically list all of them or do like on object.keys and then map it. Yeah. I can imagine myself wanting an option to just say, use this one value. And I am happy that typed script will union that value across all of them.

KG: Well, if you want the value to be undefined, you just pass like an empty object and then –

ACE: If I don’t want it to be. I guess you’re right. I probably always want to be undefined in that case.

MF: Yeah. And that’s what it will do as of what I have presented here.

KG: Right. You omit the fillers property and you get undefined. I have a hard time imagining you want a particular value that is the same for all of them, and it needs to not be undefined. The cases where I am more precise than undefined, it’s because there's a sensible default. But it feels rare that you have the same sensible default for each of the items in the zip.

CDA: Nothing on the queue.

### Speaker's Summary of Key Points

MF: Thank you for the feedback. I expect to write this up a little bit more. I don’t think there was any feedback requiring changes. I will go through the notes to make sure. I will write this up in the spec text and present for Stage 2 in the next meeting. Thank you.

### Conclusion

- MF presented a preview of the `Iterator.zip` API that will be proposed for Stage 2 in a future meeting

## Iterator sequencing

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1wMUfikXIIz7woLN-5MbYbW8an40c8ZPrN1ehzWVf4zw)

MF: Iterator sequencing. This is also a proposal I presented for Stage 1 and reached Stage 1 at the last meeting, Tokyo. As a reminder, the goals of this proposal are these five that I have identified. We want to conveniently compose two iterators, that’s the most important one. We also would like to conveniently compose 0 or more iterators. Or if we have an infinite sequence of iterators, compose those as well. It would be nice to have a convenient way to interleave other values among the iterators. And we want there to be something really intuitive to reach for with a discoverable pattern, not something really kind of esoteric. With that in mind, I have made this table here. I have gone back and forth on this a lot in the last two months. I will explain this.

MF: The approaches that I presented in the Stage 1 presentation are the first three listed here. The first one is a combination of Iterator.of and Iterator.prototype.flat. We discussed that. The second one is an Iterator.prototype.append which would take one or more iterators and append them to this value. And the third one was a variadic Iterator.from. Iterator.from supports exactly one argument. And this would extend that to support zero or more arguments. And each of those iterators is, you know, composed with the others.

MF: One other possible player in this space that I had not presented at the last presentation is `Iterator.concat`, which makes an iterator or iterable of these iterators. So I considered all of these different possible solutions, and the goals we were trying to accomplish and no one solution fully accomplishes the goals that we wanted. But I think that the combination of variadic `Iterator.from` and `Iterator.prototype.flat` does. And at the moment, that is what I think I would prefer. So the mental model here would be that when you have some small number of iterators to iterables that can fit in a parameter list, you just pass them to iterator.from or if you have them in a small list, it can be spread to `Iterator.from`. If you have either an infinite iterator or any other iterable or iterator that contains these sub iterators, you can use `Iterator.prototype.flat`. That splits it into two. That’s kind of my realization – after having thought about this a lot, is that what I was thinking was one problem is instead two closely-related problems. And I think that these two together handle all of the situations well. I am not going to go through the whole – what each covers, but you can see on the table. That’s what I am thinking at the moment.

MF: And is that – is that good? I guess another thing to consider is, we don’t have to stop at the minimal solution that solves all of the problems or meets the goals. If somebody was a fan of Iterator.prototype.append because they think it's going to be used in chaining a lot, and they want to have that ergonomics in chaining, we could have that as well. Or like I think iterator.concat is a super discoverable name. And we could have that as well. But if we want to go with the minimum solution, I think it’s these two additions. Also, remember that iterator.prototype.flat is just flatMap with the identity function. Again this is an ergonomics thing. If we didn’t want to add any more than we had to, we could just continue requiring that users use flatMap with the identity function, but I think that’s pretty unergonomic and actually probably more confusing, especially more novice users and flat with parens after is easier to get their head around rather than flatMap. Yeah. That’s all I want to present. How do we feel about that? If we feel good, similar to the last proposal, I would like to start writing up spec text and present it for Stage 2 at the next meeting. I also – I didn’t put it on the slides – but I have an implementation of these things, Iterator.from, iterator.prototype.flat, and Iterator.concat in the proposal repo. You can check out the implementation for any small details that you might want answered.

MF:With that, I would like to go to the queue.

JHD: Yeah. I am trying to understand. Right now if I do `Iterator.from` and pass one thing into it, I get an iterator of whatever that thing yields directly. If I pass two things, what do I get in an iterator of

MF: An iterator of everything that the first thing yields followed by everything the second thing yields.

JHD: Okay. That would be – I must be thinking of zip still. Okay. It’s literally just like one after the other

MF: Yeah. That’s the goal with the proposal, get one after the other. That’s what we are trying to do here.

JHD: Then I like this direction then. Thank you.

KG: Variadic from seems fine. Flat is tricky. I think that we are going to have a hard time agreeing on semantics for flat because I suspect that you, Michael, want it to throw if one of the things yielded is not an iterator or iterable. And I suspect that JHD wants it not to do that. And I doubt we would be reconcile them, but I may be wrong.

MF: I think there’s no other option for flat than for it to behave like flatMap with the identity function. If it behaves any differently than that, I would be very surprised.

KG: Well, yes. But I still think that some people might not want that behavior. Which would mean there’s no route to have flat, is what I am saying. There may not be a route to have flat.

MF: Another thing I realized thinking about this, Iterator.concat is basically just flat. So we could get rid of flat and have concat instead. It’s just a static version of flat

JHD: I think Kevin’s prediction of my opinions may be right, but we can discuss this off-line. Concat might be tricky. People may not like to bring along its semantics, but the name might encourage bringing it along, but I am happy to work with you off-line so at least Kevin’s predicted concerns can be addressed and this advanced.

CM: I was thinking it was doing one thing and now I’m thinking it’s doing something else. Is it strictly concatenating the output of the various iterators or is it actually flattening them? In other words, if one of the iterators itself returns an iterator, does that iterator itself get iterated or is that simply an element of what gets returned?

MF: It’s just one. It’s just one flattening.

CM: One level of flattening only?

MF: Yes.

CM: Very good. Thank you.

MF: By the way, you can take a look at the implementation in the repo to see that

CDA: ACE?

ACE: Basically, unless you get a lot of push back, I would like you to include append as the convenience of chaining. You know, if other people really want to keep it minimal, that’s fine. If you can include it, that would be lovely.

MF: I am happy to – I would like to hear other opinions on that. Either in favour or against. I don’t care which. But I would like to hear one other person say something about it.

CDA: Nothing on the queue.

### Speaker's Summary of Key Points

MF: It sounds like variadic from was popular. The other portion, which is optional, of adding flat seems like it will probably work. I will have to work that out with JHD off-line to make sure that it is the kind of thing that he would want it to be. Failing that, we could try to replace that with concat or try to drop it. But any of those routes forward seem to be acceptable for this proposal. Additionally, if we hear any other feedback about append, that could sway whether that gets included in this proposal as well. Without hearing any other feedback, I will probably just not do it and we can add it as a follow up, if more people get behind that.

### Conclusion

- MF plans to come back at a future meeting proposing
- The proposal stays at Stage 1

## Allow users to specify rounding based on cash denominations in common use

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/tc39/ecma402/pull/839)
- [slides](https://notes.igalia.com/p/nxMdcUtbb#/)

BAN: So hello, again, everyone. So for this one, I am presenting a PR that we decided to leave out of the editor’s round up for 402 because it’s sort of a change that TG2 considered as larger as the PR should be. So it’s either a large PR or a small proposal. And getting feedback from this group and specifically feedback – not exclusively, but feedback from implementers would be nice. Let me share my slides.

BAN: Okay. So this concerns how currency values are rounded in Intl format. If I go forward here. Okay. So currently, the normative reference for how currency is rounded or how many digits there should be after the decimal separator when dealing with currencies, we are taking data from ISO 4217. It’s the norm active reference for the currency codes but data on how many digits after the separator should be used. And this data is treated as normative by the spec. But in many cases, the values that ISO 4217 sometimes differ dramatically from the values that are in actual use. The Afghan Afghani is listed as using 2 digit after the decimal. But no subdivision has been issued and a number of other currencies. A number of other currencies for which ISO 4217 specifies a greater position used in any other reasonable use – the currency.

BAN: Also, though, CLDR provides – supplies data on the number of digits used after the decimal separator when dealing with specific currencies. This data at least now appears to better reflect on the ground reality than the ISO for 4217 data does. I have seen the ISO data described as legalistic and pedantic.

BAN: So this might be out of date. This issue was originally raised back in 2018, something like that. At least as of then, implementation varied on what their data source was for the precision to which currency should be presented. So V8 uses or used CLDR data SpiderMonkey use the ISO 4216 data and we spotted this back in the day, 2018, this was spotted because one – like V8 was failing tests. Okay. So yeah. The ISO 4217 is legalistic and sometimes attached from reality. Norbert Lindenberg said, for example, that although the smallest denomination issued for the Indonesian rupiah is 15 rupiah, which is about a half a cent USD, which is about half a cent USD, the ISO 4217 says 2 units after the separator should be used. And actually, I can’t remember who, contacted them and said, this minor unit is sometimes used in banking transactions and accounting. So it is actually the value to use, even though no one exchanging cash will use those qualities

BAN: So this is a point where the CLDR data appears to be just better than the ISO 4217 data. Because it supplies two sets of values for each currency. So it’s got an attribute digits which is the greatest number of digits, like accounting or financial uses. Also, a cash digits attribute, which has – fixed to the smallest denomination that is currently used. In this case, with the Indonesiarupia, the smallest is 50. And so CLDR data, it might not actually be complete on this, but it should have as a cash digit attribute zero. I think it does have zero. Okay. So one thing ISO does not distinguish between rounding for cash and rounding for financial uses. Also, ISO 4217 doesn’t provide these two separate values for financial or cash transactions Additionally, changed has a cash rounding attribute. Which this is unfortunately incomplete. The smallest denomination for most currency is one unit. One Yen or penny or what have you. A lot of places and this list is expanding by the year, have stopped making their smallest unit. So, for example, the smallest denomination issued in Canada is a nickel. So if we were rounding a cash value in Canada, we want to round to the nearest nickel rather than the nearest penny. It’s not clear cut. If I recall like – you can often in a noncash, nonfinancial transaction, online shopping, values can be rounded to the penny, even though there are no physical pennies. Changed data, another improve. , Another way that is on the ground is more useful when dealing with cash than the ISO 4217 data is it has this cash rounding attribute. So it’s not possible to say, actually, there’s no pennies in this currency. Round to the nearest nickel. Just the ISO 4217 data, which you can do with this changed data. So yeah. In many cases, you can see these values are preferable. They are often preferable for online shopping, cash digits is very obvious preferable. Rounding, if the data were more complete, would be preferable, and also taking into account that online [tr*k] transactions, you’re not limited to the currency values. But that seems like a benefit

BAN: Okay. Changed is not a normative, it is recommended, it is recommended in several parts of the spec, but not a required reference. Unlike ISO 4217 which because of the currency codes is normative. So this may or may not go through the entire timebox. I am expecting it not but so we have considered a lot of options. The three sort of like options that are most obviously apparent are, one, the first thing is making changed a normative reference. To say that actually the changed data, it’s complete and have the ability to separate between financial uses, involving small fractions of a currency that you never see in common use and the standard transactions that you would see your day-to-day Also, and I will come back to option 2, as that’s our preferred one. Not make it normative for currency for rounding. So and then the others, it’s not assumed this is useful to meet the status quo. Option 2 is the TG2 preferred solution. The reasons not to make it normative are it’s not currently normative. But more significant reasons are the data are not complete. And especially not complete for the cash rounding attribute. CashPrecision is good. It’s not perfect. But it’s good. Cash rounding is incomplete. But it’s good, where it’s complete. Making CLDR, you can use more accurate data if it’s available. If CLDR is wrong on, it’s normative to prefer that data.

BAN: So in the interest of making this possible, we have a PR up, which provides the following new options for Intl NumberFormat and these names, one of the reasons why I wanted to break this out into its own separate timebox is that we’re bikeshedding these names. And feedback from the whole group on what names seem most intuitive and what values for the names are most intuitive, seems like a good idea. In the current version we have a new option currencyPrecision. This new option indicates if available, we want to use the – we recommend the currency precision data from CLDR. And if available, we – to use cash rounding rather than – cash rounding based on the smallest denomination rather than some other form – rounding to another value. So currencyPrecision turns on both cash rounding and cash digits. We considered other names. Currency cash, cashPrecision. We want to format it as cash rather than the financial uses. Currency digits. We also considered – so currencyPrecision, the available values that were considered cash for cash rounding, financial for other uses, which might be more precise; and to default to financial. To avoid breaking things. We also considered the value accounting for currencyPrecision, which given that like we have – like accounting uses are specifically cited as reasons why the greater precision might be used, it seems like a good idea, but we also used the value accounting for currency sign. And that does something orthogonal to currency position or basically accounting just says that if you have got a negative value, you shouldn’t format it with a negative sign, but in parenthesis as in common in accounting. So one could very easily want this, but not this. And if we use the same value for them, it might get confusing.

BAN: So one, we are asking questions about what names to use. If these names seem all right? Or if people have ideas other than these that seem like they might be more intuitive. I am guessing keeping financial as a default for currencyPrecision is a good idea. If people think having the default be cash wouldn’t break that many things, that would be lovely. But so . . . yeah. So, one, names. We want to get feedback whether the names we have chosen are good, or better names. And two, this is very large for a PR. Not in terms of like lines of code, but in terms of the change that it makes. If people feel that this is actually too big for a PR, and should be a proposal, we wanted to get that feedback from people, as soon as possible. So . . . I think that’s time to go to questions.

CDA: Nothing on the queue at this point.

BAN: All right. And unless something – someone jumps in on the queue, just get consensus on the PR.

EAO: Apologies for not having looked into this more deeply before. You were describing something I would highlight: for example, in Finland, we use the Euro as currency. When dealing with cash, everything is rounded to the nearest 5 cents. So the one of two cent Euro coins were never really in distribution in Finland. When payments are made not in cash, but by card or online, these legally have to be counted to the actual penny. So JavaScript defaulting to cash rounding in some situations could be surprising or even worse. I would be happy to look more into what the data for this looks likes, but I have some slight concerns that there are cases like this, that might prove problematic.

BAN: Yes. That’s very good to hear. That is a concrete reason why having financial being the default is absolutely the right idea. Anyone else in the queue?

DLM: Yeah. I was going to – I am in the same situation in Canada. A cash transaction, it’s rounded to the nickel. Otherwise, it’s to the penny.

BAN: This is making me think that perhaps the right thing to do here is to have separate options for cash digits and cash rounding. Since it might be fairly common for people to want to use the number of digits after the separator after the currency as commonly used. But not use – not round to the smallest unit. So round to the penny instead of the nickel in Canada, for example.

EAO: From what I can see, it looks like the CLDR data is indexed by currency. Specifically, for the Euro this means that the CLDR is not going to have all of the data available, given that different countries using Euro have different habits about how cash rounding, in particular, happens.

BAN: Yes.

DLM: Yeah. I’m sorry. The same situation. I haven’t had much time to look at this in detail before the meeting. I feel maybe this should actually be a smaller proposal rather than asking for consensus for the PR at this point, just to give people more time to think about this and examine it and I am going to take the lack of activity on the queue as an indication that maybe other people have more time to think about it.

BAN: That is also something I expected to hear. Would it be fair to say that like the . . . the feel, if not the consensus of the group, that should be a smallish proposal instead of one PR?

DLM: I am not going to block it. But I am not really hearing strong support for it either.

CDA: Right. And we do ask that there’s at least some support. And nobody has spoken up for consensus, unfortunately.

BAN: I am going to be provisionally planning on bringing this back as a proposal at the next plenary, rather than asking for consensus right now.

### Speaker's Summary of Key Points

- ECMA-402 specifies that a certain IANA data set is used to set default rounding for currencies, which is well-defined by central banks and appropriate for certain financial purposes.
- CLDR defines a more pragmatic
- This proposal adds an option to Intl.NumberFormat to switch between the IANA and CLDR modes, called `currencyPrecision: ”cash”` (recommended CLDR, but may be tailored) vs `”financial”` (IANA).
- Reception was generally positive, but some delegates did not take the time to review it well yet, and no one explicitly supported it for consensus.

### Conclusion

- BAN will bring this proposal back at a future meeting for consensus as a PR, so delegates have more time to review.

## Withdrawing Operator Overloading

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-operator-overloading)
- [slides](https://docs.google.com/presentation/d/1mT2VmZlC3YmhDsqdxrCxQ5GpLFHFntsb3XCM762eDvg/edit#slide=id.p)

DE: Operator overloading: I introduced it a while ago to do something for decimal and other datatypes, this could be sort of vectors or matrices or data with units. Different sorts of data that that makes sense to – where it makes sense to have a notion of them using numerical-style operators. It is really for mathematical things.

DE: Some use cases:

- CSS object model: you could have `1px + 3em` and it looks like CSS `calc`. Data with units like that could really avoid bugs.
- Explaining Decimal: I think it’s important to have Decimal built-in, but it would be nicer if it were built using more generally available mechanisms. It’s kind of a design smell, if we need to appeal to something being a special magical built in thing that’s not part of a built-in mechanism.
- Python has widespread use in the data-science space, and that had something to do with this ergonomic of its use. Maybe operator overloading relates to that.

DE: There was a concern raised about operator overloading in particular, which is that operators are one of the few things in JavaScript which have locally reliable behavior. Whenever `+`, `*`, or `===` appears in current JavaScript code, you know what that will do. It’s not like a method call. You know, it may call some methods, like `valueOf()` to convert to a number, but the expressiveness of these is limited–no method is called with both arguments together.

DE: So a goal of the operator overloading proposal that I proposed was to avoid this injection of operator semantics into code that wasn’t locally expecting it. So I came up with this syntax. `with operator from Decimal`. This statement enables operator overloading to work on decimals within the following lexical extent–so, when decimal operator overloading is not expected, you get the built-in semantics. Operator overloading is supported on `*`, `+` and `==`, but not `===`, to preserve the integrity of `===`.

DE: But there were several problems with this idea. There’s unclear cost-benefit trade off. In particular, the cost is really high for operator overloading. And the benefit might not be high enough. The people have been skeptical about BigInt to have sufficient value to pay for its cost. And there are many pieces of code to be updated at various compiler tiers to make this work. With this particular lexical mechanism, there are extra problems, like that lexical mechanism adds extra overheads, the syntax was confusing. People kind of had this idea that syntax had to be applied at the module level. That might be flexible. But additional overhead to do this checking, to make sure you opted in.

DE: The reason that I want to withdraw this is, first, we heard repeatedly, especially loudly from V8, but also from some other engines, that operators won’t happen [they would block consensus], according to them. Everybody can change their mind, but that’s the current status. I would rather that this be an explicit conclusion that the committee reaches. At least a conclusion for now. We can revisit this but at least this is our plan for now: “We are not doing operators.” Rather than leaving things hanging and leaving everyone to have their own interpretation of what is going on. Someone could introduce operator overloading later, but it shouldn’t be considered on the table now. And this conclusion important for us to move forward, both on Decimal and on Records and Tuples. In both cases, I personally was really hopeful that we could get the syntax, which I think is nicer. But given the cost, and definitely given the difficulty of the implementation, the tradeoff just isn’t quite there [for these proposals to include operator overloading]. So I want to withdraw this proposal. And I want to ask for consensus on this.

DLM: SpiderMonkey is in favor of withdrawing this proposal. I can definitely see the argument from the syntax side. It would make working with decimal nicer. I could see also Temporal for like dealing with time ranges and that thing would be nice to have for that, it’s a general-purpose mechanism. But with the implementation concerns that we encountered and the lessons learned on both implementing BigInt and the working progress on records and tuples, I think we support operator overloading at this time and in favour of it being withdrawn.

CDA: I am next in the queue. + 1 for support. And I agree if somebody wants to resurrect it or something similar, they can bring that to committee.

CDA: MM reluctantly supports and RMH + 1 on behalf of Google

DE: I would be interested to hear more from MM. In making this proposal, I was really trying to follow through on a particular promise I made in ensuring BigInt that I would follow up with a general operator overloading proposal. That was my intention–it took me longer than I intended. And the sort of hope with BigInt was that it would set a trend to do operator overloading going forward. At the time, MM was very interested in this future story. What are your thoughts now?

MM: That’s why I say reluctantly. I thought this was brilliantly principled. It solved problems I did not know how to solve until you suggested it. And I think it provides a principle basis for not just operator overloading, but other things we have talked about when we want to avoid global things in a principled manner. I will bring up again in the registry (?) and become a topic of conversation. I think JavaScript would be much more – much – much better language if we could do numeric operator overloading of vectors and matrices and complex and rationale and all those user-defined datatypes. But I understand the reality, and my concern, which you did successfully address in the wording you used, is that this not go on the record as any kind of irreversible decision. That it’s quite explicitly the case that if the implementer objections go away or if other constraints come on, the committee is free to change its mind later. When that as part of the record, I am okay even making it an explicit consensus decision to withdrawal.

DE: Thanks for that, MM. The other side of the coin, I mean, you noted this, but I want to emphasize, the explicitness of reaching consensus as a committee on withdrawal. This isn’t just a case of “well, no one is picking it up right now.” It’s a case of: the committee has thought about this collectively and agreed to put this aside.

MM: Yeah. I am okay with that, with the remaining language that you stated being explicit.

DE: Okay. Great. I want to mention as far as what MM might have been alluding to for where this lexical scoping, this with operators from statement. The idea of this statement is, within the lexical extent, that comes after it, then you’re allowed to do operator overloading when the operants are decimals. So if you use + on something, that’s not a number or a string, or like an object, but it’s something that has operators overloaded on it, but not the operators from statement preceding, it will throw an exception. Another case where we could apply such logic, I don’t know if we want to, but a case we could use is in user-defined primitives. The conversion operation from a primitive to an object could be opted in to lexically with a similar construct. Overall, the veto – the downsides raised by engines on operator overloading were also on overloading. I don’t expect to see that. Primitives and operators, in particular how can you get from primitive to an operator table without having a global registry that was this kind of mystery, or sort of like self-contradictory thing. And that’s what this statement is about. MM, is that an accurate depiction?

MM: Yeah, that’s accurate. There are other proposals that have been discussed that are thinking about making use of global registries of some kind, that if global, I will object to them. And I think that we should all keep the sense of what you invented here, in mind, as a way to deal with some of those problems. So I think it’s still a very useful invention to keep in mind. And that’s in addition to the – my general, you know, sad reluctance to let go of operator overloading specifically, as an addition to the usability of the language.

DE: Okay. I do want to emphasize that there is a particular cost to adding such a mechanism. It’s difficult to avoid the cost of the lexical scope, which is referenced all over the place. Only higher compiler tiers could prove that it doesn’t need to be queried for each operator usage. So that’s unfortunate. And I don’t know if that makes this invention totally impractical.

DE: SYG, did you have any further comments on this?

CDA: SYG is not here.

DE: Was there somebody else that went in the queue but didn’t have comments to make?

CDA: Yeah, the other end of message . . . RMH from Google.

RMH: No. I don’t have anything to discuss. No.

DE: Okay. JHD, you have made the point that without operating overloading, that it may imply that certain other proposals are not justified. What do you think about withdrawing operator overloading, and how that relates with what we do going forward?

JHD: I mean, I think the conclusion you referenced, I still hold. Withdrawal is appropriate because it matches the reality that it won’t happen unless multiple implementers change their position. I think that the conversation on the affected proposals, I don’t think, block this change. It’s the same conversation, whether this further operator overloading withdrawing or not, it just having it withdrawn clarifies the discussion, since there’s no more confusion that that might be a thing we can do. So I agree to withdraw it. You’re right to bring this item in. And I think that further conversations on the proposals that might have otherwise used it will still need to happen

DE: Do you have any thoughts on the comments on DLM, it would have been anyways for things like Temporal? That applies for comparisons for equality or less than as well as adding and subtracting durations.

JHD: There’s dozens of things that operator overloading would be glorious for, especially with some form of the scope version that this proposal had pivoted to. And I think that we’re going to end up with a worse language than we could have because we can’t have operator overloading. But the engine implementers said we can’t, so we can’t have a better language in that regard. That’s not tractable – that’s where we are.

JSC: I am fine with withdrawing this proposal. I wanted to make a comment as one of the champions of the BigInt Math proposal, which is about adding functionality for several functions that are in the `Math` object and extending that for BigInts. One of the design problems it’s facing is whether to overload existing `Math` functions versus adding new functions to the `BigInt` object. I was slightly in favor of overloading the `Math` functions; part of its reasoning was in the same extending spirit of the operator overloading proposal. And I know that we already have overloaded operators for BigInt. But this presentation and the sentiments from the engine implementers that it shows are making me lean towards pushing the BigInt Math functions proposal to `BigInt`, rather than overloading `Math` functions. I wanted to comment on this because of a knock-on effect that this withdrawal has. But I don’t object to the withdrawal itself.

DE: Okay. I agree with putting such operations as properties on `BigInt` [and not Math], but for different reasons. The design goal around BigInt was that, in general, when working with BigInts versus Numbers, you should remain aware which ones you’re using. Otherwise, you will quickly run into an error. In general, code should not try to be generic between BigInt and Numbers. Overloading a function is unrelated to overloading operators. Operators have high implementation cost, and there is low implementation cost to overloading functions. The reason we overloaded operators for BigInt was because it was seen as very essential to decent ergonomics, which is not as necessary for functions. For now we are deciding that those operator ergonomics aren’t worth it–that’s a separate thing. Even just for BigInt, where operators are overloaded, developers are supposed to be keeping track of what they’re doing, and not mixing things up, unless it’s the operator case.

JSC: Sounds good, thanks.

WH: For `Math`, you have an issue of what happens when there are no arguments to some of the `Math` functions, like for `Math.sum()`, which we discussed earlier, where the result would be different depending on whether you want double `sum` or BigInt `sum`.

DE: Okay. Great. We are all in agreement on not overloading `Math` for BigInts.

SFC: Yeah. You are asking for feedback from SYG, the consensus, I wanted to know that I double-checked and this was not on the agenda – so this was not discussed in the like Google – like, sync. So I don’t like – SYG is not here and I guess, therefore, I am just saying that, like, I don’t think like . . . Google has a position right now because this was not discussed before the meeting.

DE: I apologize for not putting this on the agenda before the deadline. I had thought that the overflow topics were added automatically and I was mistaken. So the thing is, Google probably formed a position before the Japan meeting, because it was on the agenda there. Do you have any prior notes from that?

SFC: I can look.

DE: Okay. I am fine to delay the withdrawal. But honestly, this is very heavily motivated by Google’s feedback, in particular V8’s. Anyway, if you haven’t formed an opinion on this and anyone wants me to delay this until you have more of a chance before the agenda deadline, I am fine to delay that.

CDA: We have support for withdrawal. I want to be really clear for the record. SFC, are you saying that you would block on the basis of the late addition at this point?

SFC: Let’s see. It looks like from September, it didn’t bubble up all the way.

SFC: I mean, I don’t feel comfortable speaking one way or another from like Google or Chrome’s position on this topic. I am just saying, if DE’s purpose is to get like someone like SYG to say, say, yes, I agree with it, we are not in a position.

DE: SYG said it yesterday. I don’t need that message from SYG right now. It’s more, I want to hear from advocates of operator overloading.

DE: Is anybody else in the queue?

CDA: No. Nothing on the queue.

DE: Okay. So do we have consensus on this?

CDA: I am looking at SFC again. I think we had support, but . . .

SFC: From my position, I am currently neutral. I don’t think this impacts a lot of Intl proposals. From my position, it’s Intl, I have no position on this.

DE: Okay.

DE: RMH put yourself on the queue as supporting the withdrawal as supporting Chrome?

RMH: Yeah. I did that – I remember talking with you about it. I think I am supportive of withdrawal, but now SFC’s comment makes me suspicious. I don’t know.

DE: Okay. Well, let’s consider this withdrawn. And if people raise extra doubts at the next meeting, then that’s okay. We can bring it back.

CDA: Can we say, then, we are asking for consensus for withdrawal on the condition of just confirming with SYG upon his return? Would that satisfy?

DE: It’s quite absurd to confirm with SYG, because he loudly advocated for this, yesterday. If SYG is a blocker, that shouldn’t be a condition. But if you want that to be the written conclusion, then sure.

CDA: Yeah. It’s not so much what I want, but I feel like there’s a lack of clarity here on the potential blocking or not blocking and we are not getting an affirmative confirmation or denial from the Google representatives

DE: Let’s confirm with this SYG, but we will be able to do this before the notes are published. [NB: SYG later confirmed]

CDA: You had many messages of support for the withdrawal earlier. Yes from JHD. And + 1 from DLM. Is anybody opposed to this? Going once . . . going twice . . . operator overloading is withdrawn. Thank you.

### Speaker's Summary of Key Points

- Operator overloading was proposed to solve many problems with JS, including enabling different numeric types, unit-bearing calculations including CSS units, more ergonomic vector/matrix processing, and generalizing BigInt/Decimal.
- Several JavaScript engine maintainers held that operator overloading does not have the right cost/benefit tradeoff to be worth it to implement. It would be very hard to implement efficiently, especially with the scoping/safety features.
- Given the positions in committee on operator overloading, DE proposed withdrawing operator overloading, which may clear the way for proposals such as Decimal, where “whether to overload operators” is a pertinent design discussion.

### Conclusion

- TC39 reached consensus to withdraw the operator overloading proposal, pending SYG’s confirmation, which was given after the meeting.
- The withdrawal is due to the high cost to implementations and high complexity of the operator overloading proposal, or any other possible proposal in this space.
- Operator overloading may be re-introduced to TC39 in the future (especially if implementers' perception of the cost/benefit tradeoff changes), but the committee currently does not expect to spend time investigating operator overloading.

## Withdrawing custom numeric suffixes

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-extended-numeric-literals)
- [slides](https://docs.google.com/presentation/d/1me-RkloXmBJhDJKG3rl_q0CYW2KO_QFnvIPmIRmQhsw/edit#slide=id.g27efdfda19b_0_0)

DE: So custom numeric literal suffixes. The motivation is for similar-use cases for operator overload being for CSS, for decimals, defined in JavaScript. For encouraging the use of strong types in general. And even to explain BigInt, or explain decimal had operator overloading, so for example, there was once syntax that I wrote and I was going crazy with key word. There were ideas how to squeeze this in, but the idea is basically that we would have something that sort of like string tag templates which then would get this frozen thing. And be able to pull out the string that came before the suffix, but also the preparsed number, if that made it faster.

DE: So the motivation for withdrawing, you know, this presentation presumes that operator yore loading p;reviously got consensus, which it just did. So what was raised in September, in Tokyo, was that developers expect that suffixes imply operator overloading. If you see a decimal with like a decimal suffix, and then you have to use methods on it, and plus doesn’t work or equals doesn’t work, that could be confusing. So the direct result is that custom numeric literals violate developer expectations. Do we have consensus on this? I think this was raised first in July and then the decimal proposal was updated towards this in September.

DE: Just a quick note: numeric literal suffixes are not expected to have a high implementation cost. There is the question of how to deal with this funny scoping. But that’s more of a design issue. And from an implementation perspective, I think it will be simple no matter which way we do it. We can go to the queue.

DLM: Yeah. I agree with your argument. I support withdrawing this. I don’t think it makes much sense if we don’t have overloading.

CDA: All right. And we have got + 1 end of message from MM. And we have PFC on the queue.

PFC: I support withdrawing this if we are not going to pursue it. But I am a bit skeptical of the claim that developers expect that suffixes imply operator overloading. I was wondering if you could say a bit more about that.

DE: Honestly, I was surprised about this claim as well. I was hoping that this proposal would work. I think just the ideas that you see something, you can expect that you use it with other parts of number syntax and multiple people seemed to share that thought.

DE: Well I was hoping it would be used for operating overloading so the connection isn’t quite as surprising itself.

USA: All right. PFC sent a + 1. JHD on the queue for + 1 for withdrawal. That’s it. That’s the queue.

DE: Okay. Do we have consensus on this withdrawal, then?

USA: We only heard positive comments regarding the withdrawals. So yeah. I would say we have consensus on withdrawal.

DE: Okay. Thank you.

### Summary

- Custom numerical suffixes were proposed to enable more numeric-like data types to be usable with better ergonomics.
- But, operator overloading was withdrawn, and use cases of custom numerical suffixes tend to also involve operator overloading.
- Several committee members explicitly supported withdrawal.

### Conclusion

- The custom numerical suffixes proposal is withdrawn, due to the widespread (but not unanimous) developer expectation that values produced with numerical suffixes would work with operator overloading, and the withdrawal of the operator overloading proposal.

## Decimal overflow

USA: Thanks for ending super early. We have 10 minutes. And not necessarily anything that would fit in these 10 minutes. So what do you all say we take this large amount of time for ourselves and end early?

DE: Was there anything overflow from previous topics that we could go into? Like decimal overflow?

USA: There is definitely overflow from previous topics, but – it’s all 15 minutes, at least, and I am not convinced that – well, I didn’t check if people are prepared, but I could ask. Well, is Jesse around?

JMN: I am around. What’s the suggestion?

USA: Could you be prepared for overflow, to continue with decimal? With only 10 minutes?

JMN: I think so. The idea was to capture, we had captured the queue at the end of the presentation yesterday. And then there were two items there. So I guess it may depend a little bit on whether those are here.

USA: That is true. Let me quickly go and find the queue from the notes.

JMN: I believe it was CM is one of the – had an item there. And Shu.

USA: Oh, but then SYG is not going to be around.

DE: CM is in call. After Chip goes, it would be great to discuss any implications for decimal from the withdrawal of those two topics. You know, JHD made a comment about that just now and great to go into that in more detail. Chip, do you want to elaborate on your point?

CM: I am trying to swap back into my head what the point was . . .

JMN: I think I can help you there. The idea, if I remember correctly, you were giving a + 1 to the question of why decimal should be in the language rather than the library. Does that sound right?

CM: No. We were expressing skepticism about the argument that having it be a user space library was unrealistic. We think having it be a user land library would be fine. That was about the depth of the remark I had. It just happened to be when we cut off the queue.

JMN: Right. I guess that aligns with what others were saying. Namely, we take it as a challenge for Decimal to formulate some kind of argument for why being in the language is worth it. Worth the cost. One suggestion that I might have, and doing a little bit of freestyling here, would be that JHD has mentioned this, numbers are a very primitive datatype for a language to support. So unlike some other datatypes that one might consider, it makes sense to think of numbers as something in the language. Especially given the kinds of errors and use cases we see with the numbers that are built in already. So that would be one argument that one might consider that.

CM: Yeah. I mean, I think that the benefit of the standard being a point of common understanding for developers is a valid argument. I just don’t think it has enough weight to overcome the cost of the added complexity and extra complication to the language. I could also see an argument about performance – if the implementation is in cahoots with the engine, it can run faster, although I don’t think that the anticipated applications for decimal are in that space of things where performance is a primary consideration. I am not an expert in the application space, but I could imagine such an argument.

DE: CM, I definitely see how adding anything to the standard library has costs. What sorts of considerations should we take into account when doing this cost-benefit comparison?

CM: I think it’s just literally what you said there, a cost-benefit comparison. And obviously, both the cost and the benefits are really difficult if not impossible to quantify. So I think it’s going to come down to making an argument, and having that argument be persuasive. And at this point, a lot of us are unconvinced that the benefit outweighs the cost. If you want to continue – for example, I consider the fact that we dropped operator overloading and dropped numeric types syntax in the last two discussions we had, may, in fact, detract from the potential of having decimal language in the first place. So it’s all of a piece and I understand all of the issues with IEEE floating point. Those are all real. But we are at this point juggling a very large and complex language standard, and we are in the death of a thousand cuts stage with small incremental improvements. We just have to be pretty ruthless in terms of our demands for things being significant improvements. I am not actually personally taking a strong position for or against decimal in this. It’s just that I think we are becoming increasingly sensitive to the overall complexity issues.

DE: Okay. Yeah. We all care about complexity and this has been a constant concern of the committee, as long as I have been involved.

CM: Yeah.

DE: And I share this concern. Still, we have been adding things to the standard library. SYG raised the idea of thinking about JavaScript as a product and bringing in more end-to-end product conversations. This is something that JMN and I will work on for the next meeting. Another thing that JHD raised, developing learnings from the library ecosystem. We have experience from the library ecosystem, we can talk to the maintainer for the dominant set of libraries for decimal [again]. That’s something we can come back with next meeting, while proposing Decimal for Stage 2, answering these concerns

CM: Framing from an overall product perspective seems like a very compelling way to structure the argument – note this is my personal take on this; it does not reflect a position on the part of Agoric. But I think the case could be stronger if it’s framed in that holistic mode.

DE: JHD, did I capture correctly what you meant about learning from libraries?

JHD: Yeah. I mean, I think it’s that – so there’s a missing piece, what you said combined with what Jesse was remembering. Numeric things, math, is conceptually primitive. It means that I think that there would need to be a really, really compelling argument for why it would belong in the language rather than just being a userland library for a time. And those types of arguments usually revolve around performance, having a coordination point, or that it’s easy to screwup and so we can solve it for them, and that’s just 3 possibilities. I am sure there are dozens more. The more compelling reasons we have, the more people’s correct complexity fear is overridden and the more value there is in the language. I am continuing to be open to being shown those compelling things. But at the moment, it doesn’t seem like, to me, Decimal meets that criteria without the ergonomics boost from syntactic overloading, is the way to phrase it. It’s possible. I am not saying it will never get there, but I can’t see it right now. I can’t give a concrete, “if you check these boxes, I will be happy with Stage 2”, but that’s the thing I would hope to see and expect other delegates to be convinced by as well.

CDA: We are at time. I know you might have gotten short changed on the continuation Jesse. There is more time if you would want a continuation

JMN: No. This is a good discussion. Thanks for squeezing me in

CDA: Do you want to dictate any key points for the notes?

### Speaker's Summary of Key Points

We discussed some – a general set of objections or further questions that remain for decimal. Possibly hinting a future Stage 2. If those objections could be satisfactory addressed:

- JHD asked about an analysis of the dominant ecosystem libraries for Decimal, and what we can learn from them. It would be great if the proposal fixed issues that users and maintainers of these libraries encounter today.
- CM noted that adding anything to the standard library has cost, and asked about the cost/benefit analysis for this proposal. The proponents should explain why Decimal should be built into JavaScript, as opposed to being a user-level library.
