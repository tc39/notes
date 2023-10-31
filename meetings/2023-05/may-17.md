# 17 May, 2023 Meeting Notes

-----

**Remote attendees:**

| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Jordan Harband       | JHD          | Invited Expert    |
| Sergey Rubanov       | SRV          | Invited Expert    |
| Lea Verou            | LVU          | OpenJS Foundation |
| Ben Allen            | BEN          | Igalia            |
| Duncan MacGregor     | DMM          | ServiceNow        |
| Peter Klecha         | PKA          | Bloomberg LP      |
| Philip Chimento      | PFC          | Igalia, S.L       |
| Nicolò Ribaudo       | NRO          | Igalia, S.L       |
| Ujjwal Sharma        | USA          | Igalia, S.L       |
| Kevin Gibbons        | KG           | F5                |
| Chris de Almeida     | CDA          | IBM               |
| Justin Ridgewell     | JRL          | Vercel            |
| Ben Newman           | BN           | Apollo            |
| Chip Morningstar     | CM           | Agoric            |
| Daniel Ehrenberg     | DE           | Bloomberg         |
| Daniel Minor         | DLM          | Mozilla           |
| Eemeli Aro           | EAO          | Mozilla           |
| Waldemar Horwat      | WH           | Google            |
| Zibi Braniecki       | ZB           | Invited Expert    |
| Michael Saboff       | MLS          | Apple             |
| Jesse Alama          | JMN          | Igalia            |
| Mathias Bynens       | MB           | Google            |
| Istvan Sebestyen     | IS           | Ecma              |
| Willian Martins      | WMS          | Netflix           |
| Lenz Weber-Tronic    | LWT          | Apollo            |
| Frank Yung-Fong Tang | FYT          | Google            |
| Ron Buckton          | RBN          | Microsoft         |

## ES2023 plenary vote

Presenter: Rob Palmer (RPR)

- [context](https://github.com/tc39/Reflector/issues/472)

RPR: Hello, everyone. So this is a message from your chair group or a vote being called by your chair group, which is that as is the annual tradition, we release yearly versions of the spec. These go to Ecma for the formal Ecma level standardization. Before we get to that point, it is an Ecma requirement that the TC itself approves the spec to be put forward to the Ecma General Assembly. So in order to do that, we are here today to see if we can gain that approval. So I will point out that the 60-day opt-out period is still in progress, so it is possible for there to be changes if someone were to object there. But so, therefore, this vote is basically conditional based on the current contents, and assuming nothing more than editorial changes after that. The way that we will do this is much like all the votes that we do in TC39, which, you know, is not all that often. Which is that we’ll first find out if we need to vote, so I will ask basically does anyone object to us approving this by acclamation which means it is unanimous, and then the other thing I should point out is that because this is an Ecma vote, it is based on Ecma members, so that means usually the companies or the other different classes of entity that participate, except for the non-profits, which do not get a vote. But anyway, we’ll find out if we need to go through these individual members. Any more questions on this? This is ES2023, which includes both ECMA-262 spec and ECMA-402.

MLS: [on the queue] When did the 60 day opt out period begin?

RPR: That linked -- so it says April 3rd is when JHD posted the message saying the opt out began. I don’t know if the editors have anything more to say.

KG: The draft was finalized, I believe, at the previous meeting.

MF: There were no changes between the state of the draft during the previous meeting when we did our previous editor update and that April 3rd announcement.

JHD: Great. I think the intention was to start the opt-out period at the previous meeting when that was announced, but the candidate was not posted until April 3rd.

MLS: Yeah, I think we should improve the timing for next year. The ExeCom met on April 19th/20th and recommended ECMA-262 and ECMA-402 for the GA to approve at its June meeting. This occurred before today’s vote. It would be good, as we have done in prior years, to hold the opt-out period and committee vote before the April ExecCom meetings for approval at the June general assembly.

KG: Sorry. I think the thing that we have normally done is announced that we were going to cut in January, cut at the following meeting, which is what we did, so it was cut at the March meeting, and at that point the opt-out begins.

MLS: Yes.

KG: You are suggesting that we vote during that meeting as well?

MLS: Yeah, that would be great.

KG: Yeah.

RPR: Okay, so next year, we will do the -- this vote at the same time as the opt-out beginning, which is likely to be within March.

MF: So would that exclude any Stage 4 advancements in March? We typically accommodate proposals that are going for stage 4 in March.

DE: Going back further historically, January was sort of the deadline for Stage 4 proposals.

DE: That might be necessary to adopt if we want to provide a reasonable margin for this opt-out period and these series of votes. I don’t think this is very consequential because we generally refer people to the current draft specifications. Once something reaches Stage 4, it’s already good enough for many purposes.

JHD: I don’t have the queue available, I’m sorry, but I just want to clarify. Historically anything that achieves Stage 4 in January tended to be included in the next edition. However, if champions made it known to editors that they intended to seek stage 4 in March, accommodations were typically made, and so following that practice, we could in March say the current contents of the spec plus the proposal assuming it achieves Stage 4 at this meeting and that’s typically what we have done. We failed to do the vote this year because nobody remembered.

RPR: All right. Let’s return to the main point, then. Okay, I think that was a useful discussion and I think we will bring things forward next year. So for this year, I’ve summarized what this vote is. So the -- so the question now is, does anyone object to accepting ES2023 by acclamation? If there are no objections we will consider the vote to have passed. You are also allowed to put explicit support in the queue if you really want to. Okay, I think there are no -- Dan explicitly supports. Okay, Chris, do you agree we have approval?

RPR: I’m not hearing anything to the contrary here or in the chats anywhere or in the queue, so I believe, yes, we have approval for ECMAScript 2023.

Everyone: Woo! Okay, well done.

JHD: To be clear, we’re still pending ECMA’s approval in the June GA meeting.

RPR: Exactly. This is not approved by ECMA. This is just our level. This is TC level approval.

WH: Also, assuming nobody opts out…

RPR: Within the 60-day period, yes.

### Conclusion

TC39 has approved ES2023 (ECMA-262 + ECMA-402) by acclamation. Subject to no objections being raised during the 60-day opt-out, this will be proposed to the Ecma GA for formal approval in June 2023.

## Intl.ZonedDateTimeFormat for Stage 1

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/intl-zoneddatetimeformat)
- [slides](https://docs.google.com/presentation/d/1JhEFhB4wUkHfuNeJlCPUaxBv2oGJOKnaF2j8jfmhdi0)

FYT: Okay. So hi, my name is Frank Tang (FYT), I work at Google and V8 and internationalization 2 and I work on a couple internationalization proposal, implementation on V8 and also Temporal. So today I want to talk about a currently stage 0 proposal and I would like to advance to Stage 1, it’s called Intl.ZonedDateTimeFormat. So little bit of history. So what happened is that we have currently a Stage 3 proposal called Temporal. I think a lot of people familiar with that. So what happened is that before the Temporal come to the picture, we have for about 30 years an object called Date, right? And the date. And then well, in the ECMA 402 about -- I think about 10 years ago, maybe 8, we have an Intl.DateTimeFormat to format a date option. And whenever the Temporal went to Stage 3, what they did is the Temporal champion have a section, I think, chapter either 15 or 16, and modify the Intl.DateTimeFormat to accept the formatting not only the Date object, but also some, but not all Temporal objects, right? So be exclusive the PlainDateTime, PlainTime, PlainMonthDay and PlainYearMonth and instances of Temporal object or they modify the DateTimeFormat spec to accept that. Also with ZonedDateTime. Some other Temporal objects are not formatted by DateTimeFormat, and exclusively the calendar and time zone, and also there’s a separate duration object how the Intl.DurationFormat to format that, because daytime format cannot handle duration. And so we already have another Stage 3 proposal DateTimeFormat. So one thing change is in the last meeting of TC39, before that, we have a discussion, we realized that one thing that, first of all, whenever the, you know, Temporal to decide to split a date into different object in Temporal, make sure the API is tailored to a very clean cut, you know, don’t have a spaghetti issue object due to everything and making some very difficult. Somehow, this same principle was not preserved when they modified the DateTimeFormat.

FYT: So the got changed in a way that kind of a little bit -- a lot of things there, right? So it carry a lot of burden. But it’s already Stage 3, so we probably shouldn’t change it. But one thing cannot be addressed is that both DateTimeFormat, because the date itself does not carry a time zone, therefore, the DateTimeFormat itself, when it’s in the construction time actually is in a time zone. So in all the -- every single DateTimeFormat, objects only to format for a similar assigned time zone. But in Temporal, the ZoneDateTime also always attach with a particular time zone. Therefore, the kind of problem for using DateTimeFormat, it will have two possible conflicting time zone. It could be formatted. Therefore, in the last TC39 meeting, I think we already agree we have a consensus to take that out for formatting by DateTimeFormat. Now, that’s not something we want to talk about today. I try to tell you why we reached this stage, we need this proposal to fill the gap right now.

FYT: So we’re trying to propose here is create another object to format the ZoneDateTime, which currently I mean, last meeting we already decide not to put in DateTimeFormat. So in March 16 -- sorry, I forgot to put the year, Temporal change agrees that those formats should not be formatting ZoneDateTime object according to what it described and last TC39 also approved that, right? So after that, I create this stage 0 proposal, and in the ECMA 402, TG2, we have discuss and have a lot of discussion, there’s some questions and in general people agree there’s need to bring this proposal to advanced and to discuss in TC39, you know, whether we can reach consensus to move into Stage 1. So a little bit background, so the background, the limit currently stated is to propose a new Intl format to format ZonedDateTime format. I means as we already described, the date time (inaudible). So the -- so before we try to move into the thing, we have to consider is there other way we can do this. Why we really need these ones. Is there other better way to handle this. So one of the idea, questions, why we just have a toLocaleString() in Intl.ZonedDateTime, because in is already in the Temporal proposal, and have not -- we already reached agreement we’re not going to take it out, so all the ZonedDateTime property itself having to have a toLocaleString. But the reason is that we still need a formatter for this. The two locale streams are formatting a ZoneDateTime of one of the ZonedDateTime. But we still have the need to try to formatting a range of two Temporal.ZonedDateTime. For example, from 5:00 today, you know, in May 2018, to May 18, 3:00, right? So you may have two object. Those thing are handled in Intl data formatting tool, formatRange and formatRangeToParts. So you still need to have an object that can handle the range formatting. But also that some of the information still can be cached inside the formatting object to speed up some of the process. Right? But the thing we have to be careful, when we try to cache single thing in, we don’t want everything to be cached in the thing that even the user don’t need it, so we try to make sure the object is designed for a particular usage, and then all the information are cached there. Right? So the second design consideration, I think we already slightly touched this thing, is DateTimeFormat. Why we decide to take it out? It’s because the wate object of the original design to be formatted date time does not come time zone, more calendar, right? And so, therefore, the time zone calendar actually, one particular calendar what particular time zone are actually resolved in the construction of the object formatter itself. And then we have the problem in the ZonedDateTime always carry a time zone. So now you have two -- the formatter itself always carry a time zone, and you have the object always carrying a time zone, and if they’re in conflict, then we get into this very difficult situation. And we -- I think we already decide to take it out. So, therefore, we’re not going to kill this again, but try to give you a context why that happened, right? But really, reusing Intl DateTimeFormat for Temporal object, I think in general actually causing some purity of the design of the API. But in particular, for ZonedDateTime, it cause conflict, which much more severe than whether the DateTimeFormat itself is just too complicated, have too much information there.

FYT: So proposal API is this, I current he have a very, very rough spec, and don’t disturb know, this is to go to Stage 1 and just try to put down some of the method there. So the idea is that we will have a constructor, just like Intel data format, except Intl.DateTimeFormat will accept timeZone as -- in the option bag in the constructor. But in the ZonedDateTimeFormat, we’re going to throw arrow, range arrow if the time zone is presented in the option bag, so it will not -- I think our intention is not only -- not only accepting that, but we should probably check and throw error. Then also we should have all those Intl objects also have supporting locales and then we will have resolve options to return whatever got resolved, and we will have a format, formatToParts, one return of string, one return structure to represent the object of each part of the formatting result, and also formatRange, which take two ZonedDateTime, right? And the formatRangeToPart also takes two ZonedDateTime.

FYT: The other two thing is -- I think is optional, we try to -- I mean, that could be under discussion. We try to follow the design of the Temporal, which will have a time zone, and you give them the time zone and then it will return your Intel DateTimeFormat. Because remember, the Intl.DateTimeFormat already requires the time zone and the Intl.DateTimeFormat have almost, for the DateTimeFormat support except without the time zone so if you return the time zone, it can return it as a convenience method. We try to follow whatever the convenient method have in the Temporal, but this we can discuss if we need it or not. Similarly, we could have a toZonedDateTime format in DateTimeFormat object that will, as a factor method to construct DateTimeFormat by stripping out the time zone formation, right? So it’s kind of following the Temporal design.

FYT: So during our TG2 discussion in April, USA actually suggest to say, well, if you’re trying to did this for ZonedDateTime, should we consider also take out the DateTimeFormat object for formatting other Temporal objects. And I think USA, my understanding is volunteered to discuss that with the Temporal champions. This is currently not in our scope, but we’re willing to discuss that. I mean, today probably is a good time that people can express their opinion. That mean we will have adding Intl formatters for other Temporal objects, and the questions that whether those things should be flowed into this proposal or we should add another proposal, so other one proposal for the rest, but I feel the situation slightly differently is that currently I think the other Temporal objects, you know, is still supporting by DateTimeFormat even though I personally do think it’s not pretty with that way, because that forcing the DateTimeFormat have to carry a lot of information, which don’t need it to deal with date. And also made an API in an internal thing a little more complicated. So -- but that’s a discussion I think we should have. Basically, I think in the March meeting, we agreed to bring this to TC39 for Stage 1 advancement and also discuss about other Temporal objects, so just reminder, the criteria of a Stage 1 is we have a champion, I think we identify is me, and we have outlined the basic idea of the solution, and have some example of usage and high level API design. So I have this proposal put in here, and so the thing I think we should go in to discuss and before I discuss this topic, how about any questions.

DE I think it’s great to make sure that we have this functionality. I kind of object to the characterization that it was this oversight or accident to support multiple different Temporal types in DateTimeFormat. This was an explicit conversation, as we discussed in the Temporal champion group. I think we could call this a design decision for ZonedDateTime as well, but I’m also fine with making a separate constructor for this. Personally, I kind of prefer to not go back and make tons of additional Temporal constructors. I don’t really understand the motivation.It seems simpler for developers to stick with the current model, in my opinion. I’m also a little unclear on the use cases for those constructor methods to get the various formatters from each other, but I don’t have any strong objection to doing that. Thanks for pushing this forward.

USA: Yeah, I wanted to quickly respond to what Frank already mentioned, but also briefly what Daniel just talked about. I think either characterization is not perfect, perhaps, because the decision to use -- to sort of extend DateTimeFormat in order to also handle the new objects that Temporal adds actually predates a number of design decisions in Temporal, so things such as the existence of ZonedDateTime or even, you know, a few of the changes we made around calendars, so I think, you know, I wouldn’t call it a mistake, but at the same time, you know, things change from the design space a bit after that decision was taken as well. I do strongly agree that it makes, in practice, very weird building interfaces with Temporal objects to have a different formatter for -- as in this case, one of the objects and, you know, potentially others. So that’s what basically leads to the suggestion that perhaps, you know, given the strong rationale provided by Frank to separate out ZonedDateTime format, maybe it’s a decent idea to consider a different formatter altogether, but one that would handle all the Temporal objects together so, you know, it leads to less user confusion.

PFC: Thanks for presenting this. I agree that we need to have some sort of formatter object for ZonedDateTime. Based on my understanding that Stage 1 is the stage where we define the scope of the problem, which is that we don’t have a formatter object for Temporal ZonedDateTime, not necessarily settle on a solution as we go to Stage 1. I’d like to suggest that we widen the scope of the proposal to include other solutions that are not separate Intl constructors. Specifically, I’m not sure that the characterization of broad agreement about not formatting ZonedDateTime with DateTimeFormat was -- I’m not sure there is broad agreement about that. I think, for example, that having one Intl constructor that is responsible for that is convenient for users. I know that we don’t have in TC39 a formal priority of constituencies principle. But informally, for me, with the priority of constituencies that I base my decisions on, I think that convenience for users of the API is more important than purity of the API. That’s why I’d like to suggest that we widen the scope of the proposal to finding a solution for a formatter object for ZonedDateTime and not necessarily go to stage 1 with the solution already in mind that that would be an Intl constructor called Intl ZonedDateTimeFormat.

FYT: I think some people have this wrong impression that before the ZonedDateTime takeout, the Intl DateTimeFormat handle every Temporal object. That was never ever the case, so the -- our issue was never there because it never handled calendar formatting. It never formatting time zone, it never formatting duration, right? So there are somehow a wrong assumption about what DateTimeFormat used to be, right? Even whenever the Temporal past Stage 3 of the DateTimeFormat, it handle some seven of the object out of the 12, okay? It’s not one DateTimeFormat handle every Temporal object. It was never the case. So the questions, then, and currently if you look at here, currently even without this proposal, we already have two, DateTimeFormat and DurationFormat. And there are two other objects haven’t been able to be format by anything, right? So the so-called, well, if we have one Intl object handle one thing, it handle everything was better was not the case. It will not be the case, it never have a particular time have that case.

DE: [on the queue] +1 to PFC’s comments.

PFC: I can reply to that. My feeling about that is that calendar objects, time zone objects and duration objects are not date times. They are fundamentally something else. ZonedDateTime is fundamentally a date time, so it’s not inconsistent to have Intl DateTimeFormat all the date times and not other objects that don’t represent date times. We don’t have to get to the bottom of this issue here, but I would like to include in the scope of the proposal that we get to the bottom of this issue during Stage 1.

FYT: Phillip, could you clarify what’s your preference here. I’m at a loss. Could you repeat again.

PFC: From the beginning or just the last –

FYT: I mean, I just mean what you prefer the Stage 1. Including during with other object or not dealing with other object? I think let’s make it simple.

PFC: I think a possible solution that we consider in Stage 1 should be that Intl.DateTimeFormat formats ZonedDateTime.

FYT: Sorry, you’re saying you prefer a different method in date time format to format that, is that what you’re saying?

PFC: That’s not what I’m saying. I can go into details about what my preferred solution is, but I don’t think that this is the right time to discuss that.

FYT: Right. So could you repeat your -- the scope you prefer to address.

PFC: I would like the scope of the proposal to include other solutions than the Intl.ZonedDateTimeFormat that you proposed as the solution, and that can be using Intl.ZonedDateTime to format ZonedDateTime, or it could be something else that makes everybody even happier, but I don’t think we should fix on the Intl.ZonedDateTimeFormat in Stage 1. The problem is that there is no formatter object for Temporal.ZonedDateTime and it doesn't have to have that particular solution.

FYT: So you’re asking we should consider other alternative designs, that’s what you’re saying?

PFC: Right. So specifically, the slide where you had alternative design 2, that was rejected, I think we should not consider that as rejected, because I think there are many good reasons for it.

JGT: Sounds good. So first of all, I agree with PFC's idea of widening and making the scope of the proposal a little bit more generic as solving the problem of formatting ZonedDateTimes rather than fixing on a particular solution, I think that’s a good idea. My understanding is DateTimeFormat, right, the goal of it is to have a performance efficient way to format date time data ideally in an ergonomic way as well, but performance seems to be the main goal. There one thing I learned especially around building tests for Temporal is that the performance today of the existing DateTimeFormat constructor is really, really bad because of the performance return of the underlying ICU libraries that have to go load a bunch of localized text for various locales and store that stuff in memory. Both from the perspective of CPU time and RAM, it’s not great relative to other ECMAScript APIs. I’m certainly not pointing the finger at anyone in meeting as the reason for that. We’re using external APIs that are slow. I think it would be helpful to go through why the performance issues exist today in date time format and then to understand with the current Temporal Stage 3, right, are there performance implications of the current Temporal design that make things even worse, and I would just sort of like to understand that, and I might even suggest that we broaden the scope even further to say the goal of this proposal is to have efficient and ergonomic formatting for Temporal objects, period. And hopefully that solution matches the API surface that we already have in Temporal Stage 3, but if there’s something grievously wrong with the current Temporal Stage 3 performance, then I think it would be a great time to know that now, rather than later, and it does seem like this proposal and Frank and the rest of the TC2 folks closest to this would have a pretty good understanding of that. Anyway, I would suggest that we broaden the proposal even further to say, you know, do we have efficient and ergonomic formatters for all temporal objects. And actually, one more thing is the withTimeZone and two date time zone format, I think it’s a bad idea to teach users that the localization APIs are the places you go to manipulate different Temporal objects like to change time zones or do other things. I think it’s probably best to leave that on the Temporal side and say once you have a thing you like, you can go format it, rather than confuse users with two ways to do the same thing. That’s one of the problems we have now with the existing date time format object is, that there's two places to put a time zone, one and another, and I don’t think we want to multiply that problem. That’s it. Thank you.

FYT: I wonder why the Temporal objects have those methods, though. A lot of Temporal objects have those conversion methods there. Should those should be taken out?

JGT: That’s not the point. So the goal is to have one clear way for people who are working -- with time zone data to know what to do with it, right? And so the way we’ve designed the API is that you -- when you want to manipulate or calculate with -- with date and time data, you do that in Temporal. When you want to format date and time data, you do that over on the Intl side. Where the gets a little confusing is if you have things on the Intl side that are about transforming or changing or otherwise changing the data associated with temporal objects, I think having two ways to do the same thing is a little bit more confusing than having one way to do it. So that’s generally the idea, is that, you know, the data.

CDA: All right, so point of order. We are at time, technically past time, and already overflow on this block of time this morning. So we really need to move on. Do -- Frank, I’ll leave it up to you if you want to call for consensus as is right now or if you want to try to continue this discussion before calling for consensus for Stage 1.

FYT: I would like to request for consensus for Stage 1, because so far what I heard is no one have any objection with Stage 1, right? Just have different idea about what the scope could be refined in Stage 1.

DE: For the minutes, I think we should report the scope that we’re agreeing on. Does someone want to dictate the scope? Justin?

JGT: I mean, I would suggest the scope be efficient and ergonomic formatting of temporal objects.

DE: Temporal ZonedDateTime objects in.

FYT: DateTime object, please, because you cannot sacrifice date.

???: That sounds reasonable.

DE: That scope is broader than I expected. I thought with were solving formatting for just Temporal.ZonedDateTime objects. In particular, I would be opposed to reopening the question of how we format other Temporal objects. That proposal is at Stage 3 and has several implementations in progress. I think we have a good solution. I would like to restrict the scope to how do we format ZonedDateTime objects, enabling caching as well as the formatRange thing that Frank mentioned.

JGT: I know that SFC is not here today, but I’m sort of trying to channel SFC, and I know he has suggested that the scope be widened to think about Temporal objects a lot.

DE: Okay.

JGT: I don’t have an opinion either way.

DE: I’m not really ready to agree to Stage 1 on widening revisiting that right now. Maybe if Shane could be here for one of the subsequent days, then we could discuss that and leave this for an overflow topic.

??: Maybe we can turn this into an overflow and see if we can recruit Shane.

??: He cannot be here. How about we go with only the ZonedDateTime for Stage 1, and if someone else want to propose a different proposal for that, they can bring a Stage 0 proposal here later.

DE: Okay. That sounds good to me. But I would just like to register that I consider the Temporal API to be really pretty final, and it would be pretty difficult to convince me to make changes to things that we have right now, given how much good discussion we’ve had on it and how much work has gone into implementations, I think we shouldn’t consider all these different aspects of the design still up in the air.

JGT: I agree with Daniel there. The only exception would be if there’s something in the current design that is so bad for performance that it makes the existing performance of that thing much worse.

DE: Yeah, more broadly, if we discover something in the course of implementation, that’s an implementation artifact and performance is one of these, then that is great to revisit. But something like splitting out the constructors is purely a design disagreement, and we settled these design disagreements when we went to Stage 3, modulo bugs that we found in the course of implementation.

JGT: I think we’re in agreement there.

CDA: If I’m understanding correctly, it does not sound like we’re going to get consensus for Stage 1, is that accurate?

FYT: And I haven’t heard anyone object to that. Only the proposal to amend my proposal, and nobody agree with that the amendment, but nobody object my proposal.

PFC: I’m happy to give my support to Stage 1 with the scope that DE mentioned.

DE: Yeah, I support Stage 1 as well. Let’s work offline on writing -- collectively writing a scope in the notes, and, yeah, I think we can go ahead that way.

FYT: Sounds good.

CDA: Okay. So, Frank, you were calling for consensus for Stage 1 advancement?

FYT: Yes.

DE: Yeah. So we’re calling for consensus specifically on the scope that JGT and I articulated, not the broader scope that FYT named? Right?

FYT: No, no, I didn’t propose extended. Someone else did that. I made it very clear, this particular proposal is only for ZonedDateTime. Someone else suggest amendment for change it. I never agree with it. I just bring this here. So my proposal is only zone date time format.

CDA: Okay, great. So we’re calling for a consensus on a way to efficiently format zone date times?

FYT: Yes.

CDA: And I think we have consensus on Stage 1.

FYT: Okay.

CDA: We have explicit support for Stage 1 for that limited scope.

DE: Yes.

WH: I also support Stage 1 for the limited scope.

CDA: And WH. Okay, thank you. Any objections to Stage 1? Thank you. Congratulations, you have stage 1.

### Speaker's Summary of Key Points

- FYT believes that Intl.DateTimeFormat is not a good fit for formatting Temporal.ZonedDateTime objects, and that Temporal.ZonedDateTime.prototype.toLocaleString() is an insufficient solution.
- PFC and DE disagreed, suggesting that this might be done using a shared constructor.
- JGT identified performance (caching slow lookups from ICU) as the primary motivation for this proposal.
- SFC and USA suggested revisiting existing Temporal integration with Intl.DateTimeFormat.
- DE, JGT and PFC who like the current design of a shared constructor, for improved ergonomics.
- DE and JGT expect that changes to Temporal at this point should be driven by things which are strongly implementation-driven, e.g,. performance, and not revisiting decisions exclusively due to design differences.

### Conclusion

- Stage 1 for finding an efficient and ergonomic API for Intl formatting on Temporal.ZonedDateTime objects
- Explicitly open to other approaches which might not involve another constructor.
- Revisiting the way other Temporal types are constructed is explicitly out of scope.

## AsyncContext Stage 2 Updates

Presenter: Chengzhong Wu (CZW), Justin Ridgewell (JRL)

- [proposal](http://github.com/tc39/proposal-async-context/)
- [slides](https://docs.google.com/presentation/d/19P-06rk263L1xcPsjGAx6qld0b62iIHhwO0kpTa73Wo/edit?usp=sharing)

CZW: I’m Chengzhong from Alibaba, and I’m working with JRLl, co-champion on this proposal and this is Stage 2 updates. And first we will recap some real world use cases. And the first one is soft navigation heuristics. It can know when the first context can run software initiate. Right now it cannot really tell software navigation as they are distinct tasks, like the clicks on a link and the content gets fetched from the network typically. And dom gets changed. And second, finally, the end happens and the user sees a new page. With async context, it’s practically impossible for the user and application to tie all those different things together to get a coherent picture telling us that the software navigation has happened. And application monitoring libraries like OpenTelemetry, they can service the tracing in the async context and at a time, it can retrieve this when it determines what started this chain of actions, like if it is a user clicking or just a page load. It is hard -- it is a hard requirement for application monitoring libraries to not intrude existing APIs and library APIs for seamless monitoring.

CZW: So OpenTelemetry instruments user interaction, and we read APIs to create their tracing spans and the connects requests and the history changes. We can document element event, and this needs to be predicated across async task so that open energy can retrieve them and create a subspan in the subtasks, like, say in the second fetch call fetch code. And generally the span tree looks like in graph. It shows the relationships of the instrument async tasks and how long the task spans and when does it end. The problems for the user -- instrumenting user interaction is without building async context support, OpenTelemetry requires async syntax to be transformed to use the global Promise instead, so that the -- so that the async work flow can be instrumented with the global Promise, and the context can be propagated across async tasks. And currently OpenTelemetry adopts Zome.js to propagate the context. They don’t work well with async syntax, so transpilation to downgrade to an earlier version of ECMAScript is required. The OpenTelemetry tasks with long task is not able to associate the long task timing entry with the initiating tracing spans since the async context is not on a developed platform where the chasing span is served in the async context. It simply creates a root span without any initiator info for run task timing entry. Just to -- one user that you have a synchronous task in the web page. If the web platform allows attaching spans to the performance entries. It still needs to retrieve the current span to attach to the entries. That requires propagated -- to propagate the chasing span across async task, so eventually -- so ultimately, observe still needs the async context to serve the chasing spans to be -- to propagate the -- to propagate the spans across async task and associate it with the long task timing entry so that the long task timing entry can be -- can be observed with the initiating info.

CZW: And similarly, the resource timings has the similar problem. It cannot tell the initiated -- the -- cannot tell the initiator from the resource timing entries, and currently without resource timing initiator info, the telemetry just iterates the entry list to find the matching spans and associated that found entry with span to record the network event. And if the web platforms can attach in the chasing spans to the performance entries or if we cap just the async context, it will be very straightforward for OpenTelemetry to associate the network event with the fetch -- with the request expanse. Apart from the user monitoring, web platforms can also take advantage of the async context to propagate task attributions like execution priority or fetch priority or privacy protection meta data, et cetera. And that’s all of the -- of today’s use case recap. And next will be the normative changes we made in the past months. The first is that we are splitting the async context class the two class. One async snapshot and async local class. The normative change is still pending and being discussed in the PR number 55. The first async local class is the async context instance message renamed as asynclocal. And the asynclocal’s value is implicit through co-stacks like the previous async context instance. And the values are preserved across async boundaries. And notably, this change is still pending, and the name is still open to suggestions. Like, we have another suggestion as the I think variable.

CZW: Next is the async snapshot. The previous AsyncContext.wrap becomes an AsyncSnapshot class. AsyncSnapshot captures the account state of the async context, and can be reviewed for multiple callbacks, so it can be made automatically to extend the async snapshot to be like the recurring and run the query in the async snapshot multiple times.

CZW: Also, there are suggestions to group the AsyncLocal and AsyncContext classes in a common namespace. There are precedents in the language. Like Temporal, and Intl. Of the 3 changes are still pending in the PR55. If there is any preference, comment in the PR so we can continue the change. And second normative change is constructor extensions. We add the AsyncLocal constructor can accept option and about option bag. There are two properties. The first is the name. It is mostly for debugging in Dev-tools. We can display the name. We can display the group of storage data mapping with AsyncLocal name and any can help for to distinguish each AsyncLocal instances with this descriptive name. And the second is default values. It is returned when there is no – when the get operation not enclosed in a AsyncLocal operate wrong code. So that, it can be convenient for setting debug cross-scheme for the AsyncLocal instances.

CZW: Also, we set a biweekly meeting. Every other Tuesday 17 to 18UTC. So feel free to join the regular call, to – yes. That’s all the updates at this time.

MM: So first of all, I want to say, I like the renaming to AsyncVariable, or AsyncVar even better, because async is long. Best way conceptually to understand the way I have understood the proposal, each instance of async context represents a fluid variable, which is similar to a dynamic variable in languages with dynamic scoping, but better constructed in all of the way in which asink context is better structured. Thinking of it as a variable in a temporal scope is the right way to think about it, like the name emphasizes that. I like the addition of the name and the default value in the options bag name for debugging and the default value for value when you’re not in a Temporal scope. Can you return to the slide with the new class that replaced the with thing. I understand the with thing and I don’t understand the new something. AsyncSnapshot.

JRL: Are you talking about AsyncContext.wrap. Is that the slide you’re referencing?

MM: As I understood it, yes. The one that you’re on right now. AsyncSnapshot replaces the AsyncContext.wrap. I understood AsyncContext.wrap. I like it a lot. I don’t understand what this is or how it replaces that. It’s not – it doesn’t look like it’s returning a closure.

CZW: Previously, AsyncContext.wrap accept a returning and returns another function that takes the reference to the global async context state. And as a return function, then the return function is called – it’s captured global async context through states, restored as the current async context states. AsyncSnapshot is similar, but it has a method which also restores the capture – async captures the global async context state when it is constructed, and its method can restore the captured async globalizing context states. So it’s identical, except to doesn’t create a higher-order function to create – to capture the global async context state. Instead, it aids enclosed in a class and its method.

JRL: The suggestions we got during the meetings and feedback from other – from the group chats, is that the use of AsyncContext.wrap essentially requires users to understand higher-order functions in order to invoke several callbacks within your captured context. So in order to not require beginners to wrap multiple methods in the same context in order to capture the state, causing a lot of closure allocations, but if we make it so that async context snapshot can be passed a callback as its first parameter, and then it will restore the state before invoking the call back and then restore it to the previous state after invoking the call back, we eliminate the need for beginners to understand higher-order functions.

MM: So, Justin, I like the abstract sense. But I am not understanding the code that’s on the screen right now.

MM: Let make sure, first of all, make sure. AsyncSnapshot is the proposed thing that is part of the standard. DB query is an example of an use of it and subclassing it. The call to super is passing no parameters to AsyncSnapshot. So I don’t see in what way is DB query making use of whatever is special about AsyncSnapshot?

JRL: Okay. So this example comes from Node’s AsyncLocalStorage docs. This is a direct translation of that into AsyncContext. AsyncLocalStorage has a class called async resource that does the same functionality. AsyncSnapshot here is a class that takes no parameters in the constructor. It returns an instance that acts as an opaque wrapper around the global async context storage. On this class, there is a `run` method. And you can call that run method, and pass it a callback with args, which will restore the global state to the stored state.

MM: Okay. Good. Got it. Thank you. I will think about this. But initially, this seems plausible. Thank you.

DE: This example became harder to read because of subclassing AsyncSnapshot – to me, it makes more sense of having AsyncSnapshot, not being one. The primary motivation for the change was intelligibility. I thought it would be better to have a smaller surface area for this API, but very few people could understand what `.wrap()` meant. It took a lot of explaination. People got confused. And AsyncSnapshot, of the current state, you can restore it. Many people cited performance. People say, it’s slower if you allocate all the closures. I am not quite convinced of that. Modern JavaScript engines are quite fast for returning things like functions. Nevertheless, I think that is possible that performance could be better with this, when a snapshot is used multiple times.

MM: Does the inheritance add anything to this example? Is there any reason why DB query doesn’t encapsulate a snapshot rather than inheriting it?

DE: Coming from node where called AsyncResource, I think people thought about these things differently, where – it’s AsyncResource is like a thing that could be restored. Like an asynchronous thread of control that is restoring the state each time. So it’s just sort of an inverted understanding. They’re both conceptual models for this.

MM: Okay. There’s nothing about the proposal itself that biases towards inheritance use rather than composition use

DE: We can make sure that the docs use composition.

MM: Right. Thank you.

CZW: Yeah. It’s not required. Yeah.

SYG: Yeah. I am a bit confused about the very first example that you – example use case presented for soft navigation heuristics. I thought – so I am speaking as a nonexpert for both the current WICG proposal, and async context. Like, I thought the point of AsyncContext was to make – okay. Let me back up a bit in my mind. There’s a bunch of web API proposals right now, like soft navigation, task attribution, that are mechanically similar to async context. What async context gives you is user programmability, that user code use the same propagation mechanism that these other APIs are also proposing to do, like soft navigation, task attribution. My question; how does this example interact with the existing WICG soft navigation proposal? Why would I do it in userland, if it is already being developed. Like the use case already been developed as a separate API. Is this interacting with that API or is this like a userland implementation of what that proposal was also aiming to do?

CZW: I believe this example is linked to the subsequent examples like OpenTelemetry user cases, since OpenTelemetry also tracks soft navigations in userland and reports async tasks with tracing spans to – reports soft navigation timing in force. And the integration with the Web API is still being discussed and we didn’t come to a conclusion yet. This example is still focussed in the userland monitoring of soft navigations.

SYG: So let me back up. My question then is that, I don’t need to see exactly how it integrates. But I don’t quite understand what the – what – that there is alignment of the goal of how to integrate. Is there alignment on that? Like is the use case – because if the point is that we will do everything in userland, I am not sure that is acceptable, given that the other APIs are being developed.

DE: Nobody is arguing against making Web APIs for things. But there are different superpowers that different APIs have. Soft navigations has the superpower where it can detect when you’re done doing it a series of work. That’s great. We don’t have a way for doing that in AsyncContext. That’s a thing to look into. OpenTelemetry, it’s not just on the client, but also spans the server. So that’s something you can only accomplish with some extra logic in user space. Right now, there’s no native API for propagating –

SYG: Okay. Fair enough. I don’t understand the full nitty-gritty here of how the integration can be done. I will play out constraints: if the end state for a high-level use case like attributing tasks for soft navigations, if the end state is you do it in userland or with native API, who knows what is the best way and they are slightly different. That doesn’t seem very good to me. I would like the high-level use cases to – sorry.

JRL: A concrete example that can’t be solved – Dan has given one. Something that spans both client and server that is not something solved with the current proposal. There are more specific cases. For instance, use in a framework. Imagine you want to know exactly what component is causing this long task to happen. You have a gigantic tree in your framework. And there’s a particular component that is causing the slow down. That granularity cannot be captured in the web platform proposal because it’s not what it’s designed for. A framework implementation using our AsyncContext API of this kind of soft navigation or long task API could have specific knowledge of the thing that causes this to happen, the thing that initiates, takes forever, and more detailed information for the developer to act on. And they can only do that because we offer a low level primitive for them to build on top of. They can build their features with their framework in mind.

SYG: I get there’s different capabilities for different proposals. What is the overlap space? Are they competing? Complementary? That’s what I want to get a handle on

JRL: I think they are complementary

DE: I think for soft navigation, in particular, there’s an underlying primitive to consider exposing that will probably give more flexibility to these OpenTelemetry cases. That’s an area for potential research that we are actively trying to figure out inside of the AsyncContext Champion group. They are not competing at an implementation level. They have to coincide. I don’t at this we are going to be able to ask browsers to make multiple implementations for these two separate things. So that’s why –

???: What about the web developer level?

DE: At the web developer level? I think AsyncContext is mostly a framework thing. And I think framework things are conceptual analogous to things high-level APIs that browser will expose for performance timing. I think it makes sense for us to expose both flexible low-level APIs and high-level APIs that more fully solve the problem for you. This happens all over the place, including the performance world where we have these compound metrics as well as more detailed things.

SYG: Okay. I think we need to follow up off-line. It’s not clear to me in the end state, like when do I, as a web developer, how do he make the decision? Do I use the built in web API or do I use AsyncContext?

DE: So web developers should mostly be using higher-level mechanisms, whether certain web APIs or things that are built off of AsyncContext. This is sort of like asking when should web developers use FinalizationRegistry? The answer is usually not.

SYG: I mean, there’s no direct competition – there’s no alternative to FinalizationRegistry. If we want to look into, you have that. But if the choice is that I will use userland implementation of something that is high-level equivalent to a web API because the framework needs to do it in userland versus a web API, I want to explore why can’t the frameworks use the web API directly? I understand that the direct state of the proposal is they have different expressivity. But does that have to be the case?

JRL: Is this discussion better-suited to happening in WICG? This seems like the current proposal, the task attribution proposal is not generic enough and you’re suggesting to make it more generic so we can use it directly instead of using AsyncContext.

SYG: Perhaps. But it ties back to this which is, making the mechanism of propagating stuff along tasks is like the ultimate expressivity. You make it user-programmable. And the thing I am grappling with, if we make it user-programmable, how does the big picture make sense for other built-in API that expose the same mechanism in more limited ways? On one extreme, do we need it user-programmable at all? The other is, do we need the other APIs at all?

DE: My hope is that those high-level APIs would work exactly the same as if they had a built-in AsyncVariable. And so they would follow the same propagation logic. It would normally make sense for developers to use the high-level mechanism. Just like you use use a library rather than reimplement all the libraries

SYG: Yes.

DE: I don’t see where the contradiction comes from

SYG: I don’t know if it’s a contradiction. The tension is – it does one thing. It tries to attribute tasks versus something completely user-programmable like, the architecture for how to implement in the engines differ. If I want to optimize for the least amount of work, if most of the use cases boil down to something high level like what the WICG proposals are doing today. If we do, how does that best like mesh together?

DE: Okay. So this becomes really interesting. You’re talking about where it is more difficult to implement and I take it the difficulty comes from supporting multiple AsyncContext variables. Whereas if you have one variable, you don’t need to kind of split things up. So I think the next step for the Champion group is to articulate cases for what do we do with multiple variables at once: that’s where the difficulty comes from. Am I correct in understanding that

SYG: Some of it. Yeah. My intuition is perhaps a large part comes from the supporting multiple parts. It could extend beyond that. Like, the task attribution stuff is propagations a scalar thing. Like an ID or something. But this just an arbitrary graph off of the variable. I mean – yeah.

DE: I don’t really know what you mean by that. I thought for task attribution, stuff can happen when the task ends or things like that

JRL: Maybe Shu is saying, async context allows a mapping. They can be any number of values in the global mapping that is currently operating. Task attributions there’s only one. Always a single value, whatever that value is internally. And that’s all that could be propagated between the context, is that single vlaue .

DE: It sounded like that was half of it, but there was another part that I didn’t understand

SYG: I don’t have a fully formed. But okay. Let’s say for now that – let’s focus on the one versus many. But like I don’t want to overindex on that particular implementation challenge. As you’re suggesting, my top level question, if you boil down all the use cases, how far can you get with a more flexible fixed expressivity API versus something like AsyncLocal? And what is the missing gap? I can form a better opinion so what my opinion is on is this worth it?

JRL: The simplest answer is that a single value is not enough data to be stored. There needs to be more data. For server-side use cases, I need to attach arbitrary request context onto every single request that is handled by my server. For framework use cases, they need to attach things, like React attaches a cache state, hooks state. Angular needs to attach its component state. There is – having a single primitive value being stored in a context and preserving that, it would never be enough for us to actually solve all the use cases.

DE: For Bloomberg’s use cases, we also need multiple variables. In addition to OpenTelemetry, there is this application tracking we might have previously mentioned. Different variables change at different times. And we are also using Node. So all of the performance observability that comes to Node for different mechanisms with AsyncLocalStorage, but also useful to have all together in the same process potentially.

SYG: Okay. Final question: would either of you, Vercel or Bloomberg, use any of the web API, high-level web APIs?

JRL: For task attribution? Absolutely.

DE: Yeah, once Task Attribution is there, it’s probably going to be useful for us. But it won’t subsume our current use of PromiseHooks inside of Chrome to implement the equivalent of AsyncContext.

SYG: Got you. Okay. Thanks.

CDA: DE says several people on the last meeting expressed skepticism about the motivation. It looks you were trying to gauge temperature

DE: All right. We heard some people going to Stage 2 because they believed in the motivation and thought that’s what Stage 2 was for. Some other people said we don’t understand the motivation, but letting to go to Stage 2 on faith. With the second group of people, does this presentation kind of resolve your doubts? Or do you still have continuing concerns? Or holes to fill in?

MM: So I strongly support the proposal. Everything presented today looks great. I do want to note that there’s been other conversations about adding some kind of termination detection or notification that seems like GC finalization notification, but make confusing claims that are inconsistent. Everything today, I am very supportive of.

DE: Maybe Mark, you’re thinking about thread related to soft navigation <https://github.com/tc39/proposal-async-context/issues/52>. And people were making claims that GC would be an acceptable way to determine a termination signal. I strongly disagree. With soft navigation, there is a possibility to count the number of outstanding tasks, which is possible with task attribution and not possible today with AsyncContext. An extension of this could allow us to have a reference count for the number of outstanding things. And do some sort of action when it reaches zero. That could be completely coherent.

MM: So I know we have expressed this on the website. I do not understand that because of snapshot. Once you can snapshot, you have to garbage collect to know how many outstanding snapshots there are for a given scope.

DE: Yeah. This is true. And may affect the design of snapshot.

MM: Okay. I think we should get rid of the termination notification.

DE: Well, one thing to keep in mind is that, if JavaScript is embedded in an environment with task attribution and which is doing this termination notification accounting, I don’t know – we should consider how JavaScript will run in that case? Even we don’t have an explicit API for it.

MM: My current position is that we not expose a JavaScript API for that. But we can – we can continue in the thread where at the are discussing that. As I said, it wasn’t part of today’s presentation. Everything presented today I am supportive of

KG: Yeah. I was one of the people who was asking for more motivation and I do feel a bit better about it. This definitely did help. Part of the difficulty is that some of these examples are simple enough that I look at it and I just see how I would write it today. And that makes it hard to understand the motivation for the proposal. Because it’s trivial to rewrite these examples to work today just by passing stuff around, creating the closures where they have the ability they need. Like, I understand presumably, what you have in mind is things that are more complicated than this that are not trivial to rewrite and you have chosen examples that are easy to demonstrate. And I appreciate the need for that, but it makes it hard to be like, oh, this is clearly necessary, when like the code on the screen you can just see how you would rewrite things to capture the context. Like, not the context variable, but the context value

JRL: Can you show the OpenTelemetry slide, please. you could rewrite – if you control all the code you’re currently running, you could capture variables or capture a closure in the correct spot. When you’re adding user event listeners, using a frame work level API and you want to coordination to have at the frame work in order to do this, it has to pass a context to userland code, then propagate the code and give the context back to frame work. That kind of API is possible, but it requires a lot of developer coordination for basic features to happen. There are other use cases where closure allocation in extremely performant code are prohibitive. There are direct cases for ergonomic APIs provided by frame works – if you’re familiar with react hooks, which uses essentially a synchronous context. The difficulty is it depends on a synchronous context API for storing the hook state. And if you have an async component you have lost your current synchronous context and you can no longer use hooks. This one of the challenges that React is having in allowing components to be asynchronous. The key here is that it’s very difficult to coordinate between frame work and userland code without putting a lot of burden on user code.

KG: Right. And that’s what you said last time as well. And I believe you. It’s just like what I am hoping for is an example which makes that clear. And this example on the slides just has two comments that says "framework" on them. And so it is not clear to me where the division between user code and frame work here and how this is supposed to demonstrate the difficulty of threading stuff around. Because this does not to me demonstrate this.

JRL: Lines 4, 5, 6 are userland code. Your framework is how this code is registered. The click listener lines 2 and line 8 is a framework level API. It’s the actual thing that is registered and calling into userland code the 4, 5 and 6, whatever click actually happens. These are provided by two separate files and they need to coordinate together. If you made a change to lines – line 3 of the async function passed here you could have userland code propagate your context for you. But that has leaked a framework-level concern to the userland code.

KG: Okay. Well, anyway, yes. The point is I feel somewhat better. This is not quite as convincing as I hoped it would be. Just because it is still somewhat hard for me to understand the difficulty. But I definitely do have a better sense of it now. So thank you.

JRL: We at time now. We have biweekly meetings every Tuesday at noon eastern. We have the AsyncContext room in Matrix if you want to talk about use cases.

### Speaker's Summary of Key Points

- CZW explained various applications of AsyncContext
- Two API changes were made:
- Options bag to constructor, containing `name` (for debugging) and `defaultValue` (value returned when a value has not been explicitly set)
- In-progress work to split AsyncContext into 2 classes:
  - `AsyncLocal` (or `AsyncVariable`, naming is TBD) that is equivalent to old `AsyncContext`
  - `AsyncSnapshot`, which fulfills the need for `AsyncContext.wrap` but with a more class-based API (a `.run()` instance method)
- SYG expressed tension between the WICG soft navigation API and this API. If there is just one AsyncVariable needed (as would be the case if there’s no JS-exposed API), then the implementation is simpler. Implementation might also be simpler if the values mapped are identifiers, rather than GC’d references.
- JRL and DE expressed that multiple variables, as well as mapping to references, are requirements for their use cases in Vercel and Bloomberg.
- It would be helpful for JRL and DE to elaborate/document these use cases further, and for SYG to elaborate further on implementation difficulty.
- MM expressed support for this proposal but strong opposition for any JS-exposed API which exposed task termination (given that this would require GC for the current AsyncSnapshot API, or otherwise changing that API)
- KG became a little more satisfied by the motivation, which JRL explained as stemming from the division between framework and user code (though this remained not entirely clear).

### Conclusion

- AsyncContext remains at Stage 2 with some small updates.
- Development will continue; please join on GitHub, Matrix, biweekly meetings. You’re welcome to join!

## Intl.DurationFormat Stage 3 Update

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)
- [slides](https://notes.igalia.com/p/TWx5MikWg)

USA: Let’s start and I will tell you all about what is up with duration format. So just a quick refresher. Duration format is a Stage 3 proposal that adds another internationalizationation formatter. Specifically, targeting the need to format compound durations. As you might know this is a problem we have investigated for a long time. There’s already a formatter called RelativeTimeFormat. However it’s limited because it can only format a single unit of time. So there’s always been a need to format compound durations since that landed. And also, we are doing Temporal duration. FYT pointed this out, but yeah. The combined needs, of course, Temporal duration not being Stage 4 yet means that it doesn’t get handled Temporal duration objects, but it should eventually.

USA: Anyhow, there are ongoing or nearly finished implementations. So we have much implemented. And Ladybird LibJS and SpiderMonkey implementations are also close to done. Or on track, I believe. A quick refresher of the API itself. It’s nothing – you couldn’t predict. Like every other formatter we have a locale, in this case Galician, and a style among other options. So you can put in an object that represents that duration. And say, in this case, 1 hour 46 minutes, 46 seconds. And it would format that for you. That’s it. What are we doing? And what are we thinking about? So there’s two normative changes that I want to talk about

USA: The first one is to switch to an alternate design when doing fractional digit formatting. So this is based on implementor as well as user, I believe, feedback from SFC and ABL. So, yeah. ABL, I know at the very least has been particularly involved in implementing this. The original design or should I say the existing design of duration format has a single unit, single option to control this. It’s called fractional digits. And not setting this option, fractional digits set the minimum to zero and maximum to 9. That’s the design we went to Phase 3 with. This is fine because would not by default, not when you don’t specify an explicit fractional digit, it would flip any information, but it is a bit of an odd design because, you know, it’s not clear how this works. Right? Because, you know, you set fractional digits to something and maximum and minimum are set to that. That’s a bit odd and we discussed that. It also doesn’t give the programmer full control to set the maximum and minimum to different things if they want to. Given all this, this was discussed extensively in TG2 and the conclusion was to move to what is the tried and tested option, which is to include a pair of options. A minimumFractionalDigits, as well as maximumFractionalDigits. If you’re familiar with the design of number format that is exactly how number format approaches this as well. Instead of doing this magical behaviour, we would move to two explicit options that behaves the way the user expect them and it would actually change the way we call the underlying number format to simply set the values instead of doing the special behavior.

USA: Okay. So that’s one of them. I can go into more detail later. If there’s questions about that. But moving on to the next is to throw on invalid unit options. To be more specific, this was based on feedback from FYT, also implementing this. Basically, it was possible to set the display option, which a quick reminder can be either `”auto”`, the default, which is to hide if the value is zero; and `”always”`, which always shows the unit irrespective of the value. So this would be milliseconds, microseconds and nanoseconds. This is – this kind of works, but it’s a bit odd because it doesn’t really make a whole lot of sense. The display of the units is being controlled in this situation by the fractional digit that we just talked about. So you have the the absent to control how big it is, and you set to always and it’s glib by the fractional digits option, it could – it would lead to user confusion because the user might expect all the units to be displayed, even though they are not being displayed individually. But as a fraction, in this case. This also led to extensive discussion in TG2. And we decided that the best solution would be to rather throw a RangeError, when this slightly awkward combination of options is provided by the user. So these are the two changes that we have been considering. And alongside all of this, of course there’s been a bit of editorial goodness happening. One of the big ones is to break – I am not sure if you have read the duration format spec. But it has a huge table that talks about all the different units. So 9 – or is it 10? 10 of the units, and then all the combinations with the styles and the – and the different styles that are allowed for them as well as the combinations.

USA: So we broken up the huge table to make it look less like a brick wall and easier to read and clean it up to understand what is happening. And fix the handling of separators used for the separation of the different units for the digital style. So that’s all that is been going on in the recent past in duration format. To expand a little bit on what the plan is here, it’s to get consensus from plenary right now on the last normative fixes that we need to order to clean up the API. Clean up the text editorially as much as possible, make it easier to merge into the spec and to implement and read. Give some time for spec stability and for the spec to be, you know, reread again, make sure there’s nothing wrong with it. Also, working alongside with the implementations to make sure that they are close to done. And then after all of this, come back – sorry. I said next month. But I mean next meeting. Hopefully for Stage 4. So essentially, closing up the remaining tasks. I didn’t mention it in the slides, but the MDN and the tests for the proposal are also up to date. So yeah. Without further ado, do we have any discussion items regarding this or can we go for consensus on these things and eventually close duration format? I see nothing on the queue.

USA: Would somebody like to explicitly support all the changes

DLM: [on queue] supports the changes.

USA: Thank you, DLM for the support. As well as for all the work in TG2 to help make all of this happen.

CDA: I see PFC is also in the queue for support.

BSH: I am confused. This is in Stage 3. It’s already implemented. You’re making an API change, at least one here. And the throwing I am okay with. You’re changing like options names are. How can you be sure to get that in, implemented and like – and have enough experience in the field to go to Stage 4, at the very next meeting? That seems rather fast to me. Related, do you anticipate there being any problems with having to change this, while it’s already shipped?

USA: I do not believe so. Thank you, by the way, for raising this. Because we have already been working extensively with all the implementers within TG2. I believe all the implementers are on board, although I would let them speak more to that, if they would like to. They are already following these changes and it has been raised to them, so I do not think they are taken by surprise by these changes. The only real thing left to do for these changes to happen was to get the final stamp from plenary, which is why they are here last – rather than the other way around. But, yeah. I totally agree that if the changes have not been implemented in the existing implementation or ongoing implementations, it shouldn’t go to stage 4 yet. Assuming it does, there’s not much more to be traded on here.

### Speaker's Summary of Key Points

- We discussed the ongoing work and normative changes were presented.
- Discussion about implementation plan/strategy and suggestion to finalize implementations before going for Stage 4.

### Conclusion

Consensus for changes, with explicit support from DLM and PFC

## Temporal updates

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2023-05/)

PFC: (Slide 1) This is the Temporal update. I’m sure that those of who you attend these meetings have gotten used to the presence of this item on the agenda. My name is Phillip Chimento, I work at Igalia and this work was done in partnership with Bloomberg. Today we’ll be talking about an update on the progress and I’ll have at the end three normative changes which I’ll ask for consensus on.

PFC: (Slide 2) Since the last time, implementation of the proposal has continued. There was a large Firefox patch set under review written by ABL, and I actually heard through the grapevine just this morning that the review is finished, so I assume it’s back to implementing comments on the patches. But this implementation has been really helpful as the feedback that ABL gave us as part of his implementation work has helped to improve the proposal.

PFC: I mentioned in March we were working on one more change at the request of implementations, which is to eliminate the need for unbounded integer arithmetic in the proposal. I originally planned to present that as well in this meeting, but it needs more time, so I’ll be presenting it in Norway in July.

PFC: To reiterate what I said last time, we don’t expect any other big changes, except we had a few issues reported since March as feedback from implementations and from usage in the wild, and these issues have been quite minor.

PFC: (Slide 3) I’ll also give a progress update on our IETF standardization efforts. As a recap of this, we are trying to standardize the format of date/time strings with calendar and time zone annotations in an IETF RFC. This effort has been going on for a while, and it’s currently blocking Temporal from shipping because we agreed when the proposal went to Stage 3, that we wouldn’t ship it unflagged until the string format had been standardized. There was another meeting of the IETF in March. Actually, I think coinciding with the same time that we were meeting in Seattle. From that meeting proceeded one change that affects us, which I will be talking about in the second section of the presentation with normative changes. The steering group review is continuing.

PFC: (Slide 4) And then a short progress update on the integer arithmetic change that I mentioned. The solution framework that I had described in my presentation in March in Seattle remains largely the same. After working on it a bit and seeing what needs to change, there are a couple of changes necessary. We’re going to need to place an upper bound on the total of days through nanoseconds in a duration, instead of hours through nanoseconds, so days can no longer be unbounded. But it’s also looking increasingly likely that we need to put at least some upper bound on years, weeks and months as well, which is probably going to coincide with the maximum range of exact times that Temporal objects can handle. I hope to present this in detail in July and give plenty of time for people to look at it and make sure that it fits the constraints that implementations have. (Slide 5) That was the progress update part of the presentation. Are there any questions on this part before I move on to the normative changes?

PFC: (Slide 6) Normative changes: (Slide 7) We have one change for deduplication of field names. This was a request from ABL, who is doing the Firefox implementation, for an improvement that would allow the implementation to optimize the point where they deduplicated a list of names that is not supposed to have duplicates. Allowing them to do that after the list is sorted, which is easier, you only have to iterate through the list once. We originally had proposed a change that would remove these duplicates. JHD had some helpful feedback on this, so a couple of days ago, we updated the normative change to instead throw if a custom calendar tries to give you duplicate property names. So this is what is in this slide: the struck-out text is what it used to be, and what it is now after this discussion is in italics. JHD also suggested that we disallow the property names `constructor` and `__proto__`. Now, these would have been treated as data properties anyway, so I don’t think there was any possibility of calling code through prototype pollution, but this is, I think, just good practice. But the whole thing remains an unlikely edge case unless you intentionally craft a custom calendar that returns duplicate field names from its `fields()` method. You can see an example of such a custom calendar at the code sample at the bottom of this slide. The behavior in the current spec text was that it would read the `monthCode` property of this PlainYearMonth object three times. The new behavior is that this is disallowed by throwing a RangeError.

PFC: (Slide 8) Next up we have a bug that was reported by a polyfill author, who is writing a Temporal polyfill. So this is from usage in the wild. In cases where we have a duration where one of its components was rounded up to the next unit in the difference method of a type, this would be inconsistent with the rounding behavior that you’d get if you called the `.round` method on the Duration. And a similar bug existed in toString, because you can also round a duration when you’re serializing it to a string because you can give the desired subsecond precision that you want. So this is fixed to be consistent with what you’d get if you used the round method. In the code sample here, before the change, you would end up with a duration of one year and 12 months, which you probably didn’t want if you called this `until()` method and asked for the largest unit of years. This change would fix it to correctly be two years.

PFC: (Slide 9) The last one is the change that I mentioned that was precipitated by the IETF meeting, which is a change in the semantics of ISO strings with multiple calendar annotations. The IETF meeting issued this clarification that if you have more than one calendar annotation and one of them is marked “critical” then the receiving software should treat that as an invalid string. If you have more than one and none are marked critical, you should discard any ones after the first. That’s what we already did. While we were touching this, this also incorporates a suggestion from ABL allowing the implementation to also better optimize the parsing of these annotations because if you use the year/month and month/day notation to construct a PlainYearMonth or PlainMonthDay, we only allow the ISO calendar for that. And this consistently discards subsequent annotations even if they would have been disallowed for PlainMonthDay and PlainYearMonth in this case. So you can see here two lines of code sample, and the behavior that would have been allowed before and is now disallowed, and the behavior that would have been disallowed before and is now allowed. (Slide 10) That’s all that I wanted to present. We are 12 minutes into the 20 minute presentation, so that leaves 8 minutes for questions and clarifications. Are there any?

CDA: I’m curious, do we know why the status of the IETF review, why that’s sitting there for so long?

PFC: I don’t have a clear idea of that. I believe it seems somewhat natural because it’s out of the hands of the working group that was actually working on the RFC draft and on the plate of the steering group who are not directly involved with it, so I think it’s kind of natural that it’s moving with less urgency. But I don’t know exactly what the normal case is for the IETF. Somebody else might be able to answer that. I think that’s something that RGN would probably know, but he’s not here right now.

CDA: Yeah, from the steering group, the goal is to have it followed up within under 20 days. It’s about to be almost 60 days now.

USA: Yeah, I think initially on our part, we did sort of misunderstand the amount of actual bureaucracy that goes on inside IETF, so you might see that when you see the -- well, most of the changes that are happening in the draft now are changes that are being suggested as part of the review process, their review process. Right now, we have already gone through the AD review, which is, like, just the area director for our networks group, and at least once, and then, you know, there is also other reviews going on. So I think, you know, it’s taking a bit long because so many people are viewing it, and all of them are doing it kind of async, so everything is wrapped around, like, you know, all the reviews happening and then a final seal of approval that would come later.

JHD: [on queue] +1 for presented changes.

DLM: [on queue] Supports the normative changes.

DE: The changes all seem really good. I’m optimistic about the one remaining issue. I think the state seems consistent with the point I made earlier in the ZonedDateTimeFormat discussion, which is that this is a very stable API, especially given how much implementation work has gone into it. And from here, anything should be, you know, kind of bug fixes like the kinds of bug fixes that we saw here, rather than rethinking the API or, like, realizing that there’s some other way to do it. So great work.

PFC: Thanks. I agree with that characterization, for what it’s worth.

CDA: JHD is next in the queue with an end of message, but so his question is do we have commitment from the IETF to present any, if not all breaking changes in the future? JHD, I know it’s end of message, but can you elaborate a bit?

JHD: Sure. Is there any signaling of any kind that we’re going to ship this, it’s going to become impossible to change and they’re going to make some change that will cause us to be wrong forever? Like, is there any signaling from them that they will consider that or avoid that outcome in any way, and hopefully in every way?

USA: Yeah, JHD, like, there is no explicit, you know -- there absolutely no reason in the process left at all why they would do that. You know, the final draft that we’ve ended up with now is the result of numerous normative iterations that we did earlier on, but the most recent ones are mostly editorial and more around addressing things like their process or, like, formats for what should be included in the RFC rather than envisioning any normative changes. I think there is very clear messaging from their side that this is not going to break in itself.

PFC: But they have a last call, which is the signal where they commit to not making any more changes.

JHD: Explicitly mentioned TC39. They wouldn’t introduce breaking changes for the same reason we would not want to introduce them.

USA: And we have already gone through working group last call, so that is usually the avenue where some changes like that would happen. And now, like, the working group is not involved in this anymore. It is more the IETF administration and the steering group.

JHD: Awesome. That’s very encouraging. Thank you.

DE: My read of this IETF process at a high level, maybe this is misinformed, but I think the changes that they’ve been making, the changes that we heard here, is very kind of edge case related. It’s good for us to propagate these changes. But it’s unlikely to be breaking practical usage of the Temporal API. Overall, I don’t think, given how this is dragging out we should ask implementations not to ship this at this point due to the IETF state. It seems like the -- based on what USA was saying and everything like this, it seems like this is stable enough at the IETF level. IETF standards, people do ship them before IETF is done with them. This is just kind of normal, you know, running code and rough consensus and all that.

CDA: PFC and USA, do you have any thoughts on that comment?

USA: Personally, I would say that it’s fairly clear that there will not be any changes to the format itself, and this has been sort of the understanding of the editors and the chairs of that working group as well. But, yeah, that’s -- I can confirm that, but, yeah, I think it’s reasonable what Daniel was asking for, but are we willing to commit to that as a committee?

CDA: I mean, otherwise what is the milestone that we’re looking for, you know, the signal from the IETF that fulfills the contract of the agreement that was made?

JHD: Sorry, I didn’t use the queue. I just -- I think it’s reasonable that there be at least one plenary gap with no normative changes, though, before we submit it.

DE: I’m not disagreeing with that. I just think we should stop citing IETF as the reason.

JHD: That’s fine.

DE: You know, in this case, we’re pending a particular update about dealing with integer overflow, so I don’t think it would make sense to ship this proposal before that is resolved.

JHD: Yeah, just as a data point, I have not spent any time trying to implement a polyfill for this yet because it’s a big proposal and it’s too much of a moving target still, so I’m waiting for at least one plenary gap with no normative changes before I start to implement it. There are plenty of other people implementing it, which is great, so I’m not suggesting that my implementation is particularly critical, but that’s a signal that I’m looking for and there may be others looking at that.

### Speaker's Summary of Key Points

- The unbounded integer math issue doesn’t yet have a full resolution, but it may now involve limiting Temporal.Duration years/months/weeks fields to the same maximum values as Temporal.PlainDateTime and friends have, and include the days field in the 96-bit limit. Update expected in July.
- IETF review continues to be very slow, but we don’t anticipate significant syntax changes at this point. DE argues that implementations shouldn’t wait for IETF at this point, but a “last call” from IETF would be the most stable point.
- JHD (es-shim maintainer) and possibly other implementers are waiting for 1 plenary with no normative changes prior to polyfill work.

### Conclusion

Consensus on making normative changes to:

- improve handling of duplicate names returned from a custom calendar's fields method (PR #2570)
- fix a bug with rounding durations (PR #2571)
- adapt handling of multiple calendar annotations to match the IETF's recent decision (PR #2572)

## Time Zone Canonicalization for stage 2

Presenter: Justin Grant (JGT)

- [proposal](https://tc39.es/proposal-canonical-tz/)
- [slides](https://docs.google.com/presentation/d/111ycHJtLQ7mZkebv8rBfF6KKOSJfIeAXi2oNL_orOVs)

JGT: Yes. Excellent. So hi, I’m back. Thanks so much for taking the time to talk about this somewhat narrow and obscure topic of time zone identifier canonicalization. RGN is away this week and he couldn’t make it and I’m hopefully going to cover. What’s changed since last time, you remember we asked for Stage 1 in the last proposal, last plenary. Since then we’ve worked with TG2 and gone through the proposal with TG2, resolved some significant open issues in the proposal and written spec text. So today we’re going to go and summarize where we got to, sort of a short summary because we’ve already been through the longer summary last time. Walk through the spec changes. There’s actually only 15 lines of changes and a lot of them are pretty similar to each other and one editorial paragraph, so it’s short enough to go through here. And talk about next steps, and if everything goes well, then ask for Stage 2. There’s also some backup slides if you need. If there are performance questions, I have some slides about performance, and in case we need to refer back to some of the longer discussions we had back in March, I have those available too. So feel free to ask me to show those if needed.

JGT: So first a reminder about context and terminology here. There’s the IANA Time Zone Database, which is the standard format of zone for the industry. There’s CLDR, which is the source of time zone data for the ECMAScript and others. The time zone data in CLDR is based on the time zone database, but there is an editorial layer specifically for identifiers, for example, CLDR when a new identifier is introduced into the time zone database, CLDR uses that forever, even after that time zone identifier is deprecated. So good example would be Asia/Calcutta, that is still CLDR’s assumption of the canonical one even though it’s not been canonical in the database for quite some time. Identifier, something like Europe/Paris or Pacific/Auckland and there’s non-location-based examples of identifiers and the most common one of that of course is UTC. We have a terminology in the spec text that we’ve put together, a primary identifier, which corresponds to what’s called a zone in TZDB, which is the preferred spelling of a particular name. But you can also have aliases: in the TZDB those are called links, and we call those non-primary identifiers in the spec text like Asia/Calcutta. There are two sort of important terms that we didn’t talk about last time that are -- have come up a bunch, to suspected call them out here. One is case normalization. So the time zone database is case insensitive active database, so you could pass in all lower case or all upper case and it all means the same. But in the time zone database itself there is a normalized case variant, and so that matters, especially matters for performance reasons, because if ECMAScript had to store the exact case that the user put in, right, that would add a pretty big memory requirement for storage, whereas if the case can be normalized, then time zone identifiers essentially become indexes into a list of about 600ish identifiers. So that’s a 10 bit index, as opposed to, let’s say, a 15+byte string. That’s a big deal. That’s why case normalization matters. There’s a separate operation, which is canonicalization. Which is essentially following links and following aliases to the preferred value, the primary identifier. An example of that is in 2022, Europe/Kiev was deprecated in the time zone database, was turned into a link, a new identifier, Europe/Kyiv was added, and the link from Europe/Kiev points to Europe/Kyiv. As a reminder this proposal is only about canonicalization. Case normalization should be assumed to be happening everywhere that ECMAScript touches an identifier. And again, that’s important for performance reasons.

JGT: Okay, so as a reminder, the current state of time zone identifiers is not great, right? Especially not great for a few countries around the world. India, for example, now Ukraine after last year. Vietnam also where outdated identifiers are returned by V8 and by JavaScriptCore because of this CLDR behavior I mentioned before, where once an identifier goes in there, it never comes out. There are other problems that have been reported, for example, when new identifiers are introduced, like last your when Kyiv was brought in, that created an out of sync issue in the ecosystem, right, where some implementations had already been updated to have it, but let’s say you’re running an old version of Node, it didn’t know about Kyiv and that caused some problems. So the main takeaway here is this is a small subset of the problems that developers encounter today, and so we’re already sort of not in a good state and it’s very easy to find many more screen fulls of complaints like this. So just as a summary of what those problems are that were reflected on the last slide, one is that implementations diverge, so if I pass Asia/Calcutta into Firefox, I get Asia/Kolkata back. However, if I pass the same thing into Chrome or Safari, I get Asia/Calcutta back. There’s a relatively small number of identifiers like this. Depending on how you count, there’s 13 or 20, depending on what you want to use as your canonical version of the time zone database, but that’s the current state today. So ECMAScript today, another problem is that ECMAScript will unexpectedly change the input from programmers, right? So if I give Europe/Kyiv to an ECMAScript program, I might get Europe/Kiev back and that’s quite disturbing. Let’s say you have an automated test where you expect the input to match the output, then that breaks your test it can break it in an unexpected way, so that’s certainly frustrating for developers. I mentioned before about developers were upset, both for sort of personal reasons and just for, you know, being engineers and wanting things to be correct, knowing that we’re returning information that’s been obsolete in some cases for like 20 years is disturbing for a lot of developers. And finally, the === comparing based on string identifiers isn’t reliable. It isn’t reliable across implementations, it isn’t reliable across time. You really need to run some code that will take your identifier and compare its canonical value before you really can understand whether it represents the same time zone or not.

JGT: So this is all bad news, and the worse news is that Temporal is going to make these problems worse and make them worse because we’re going to expose identifiers to users in a lot of different ways, because the serialization of the Temporal time zone date time type includes the identifier. Anywhere you use this type, right, in the browser console, when you hang the mouse over in a debugger, when you put in logs, when you transform into JSON, it’s going to show up. And so I think clock is ticking, if we’re going to now ship Temporal implementations soon, a lot more developers, I would assume a least two orders of magnitude more developers are going to be exposed to time zone identifiers than privacy. Today it’s hard. You really have to dig to find it in ECMAScript today, so the clock is ticking for a solution or will end up that previous slide I just showed with a lot more unhappy developers. So this is something we -- I think we need to fix fairly soon.

JGT: So the proposed solutions are first to sort of in two areas. One is to improve the guidelines we have for implementers to know essentially which identifiers are the right ones, which are the scan on Cal ones, and specifically as a first step, just work with implementations to say, well, let’s agree regardless of whether they’re spec text or not, can we agree on a common set and common set of criteria for canonical identifiers. If we can get to that agreement then we can add spec guidelines that can enshrine that for the future so that – So, again, it’s the idea to help add guidelines that can when there’s a next example, where something like Kyiv and Kiev from last year happens we have a clear understanding of what developers should do so we don’t get out of sync more in future.

JGT: There’s a set of API changes are doing, that can reduce the changes of the impact of timezone database changes. One of the challenges and reasons why these changes are such a pain is because ECMAScript code changes its behavior changes a lot when the canonical values in the time zone database or in the embedding as version of the database change. So one way we can help with that is by simply reducing the impact of what happens when the time zone database changes. So it changes and not as many people care because it doesn’t really impact working code. And so one way to do that is the first piece here, which is to stop returning canonical IDs when a user provides non-canonical input, so if I give you Asia/Calcutta, then I should get Asia/Calcutta back. If I give Asia/Kolkata, I should get Asia/Kolkata back. If we do that one thing, that reduce the impact of the ecosystem quite a lot. The election next piece I mentioned before ===, string chairson is not enough for comparing time zone identifiers. There needs to be some code, if we stop canonicalizing on input we’ll need some other way for users to be able to determine whether two time zone identifiers represent the same time zone. This will be a new API represented to the time zone to supply. This is a summary of the solution. I’m going to stop here if people have any questions or concerns before I dig into the -- spec text.

WH: Are the identifiers always in ASCII?

JGT: Yes, limited to ASCII by spec.

WH: How many slashes can they have?

JGT: One. No, sorry, you can have multiple -- I think it’s not limited. There are cases where there are two slashes, so it’s like -- I think America/Indiana/Knox is an example of a particular county in Indiana.

WH: Yeah, Indiana has 11 time zones, so I think that’s why they did that.

KG: Yeah, so first, thank you for working with the editors on getting the spec text into a state that we’re happy with, especially a state that does not require the 262 editors to know a bunch of stuff about time zones. I know that this has been something of a process, but for everyone else, Justin came to an editor call meeting and we had a long meeting and got things to the state that everyone is happy with. So thank you for that. I did want to mention, you said part of this was you wanted to have a process for choosing which things are canonical and so on. And I am happy for us to have that as long as it is strictly technical, along the lines of just whatever is primary in TZDB is primary, and not political, because we absolutely are the wrong body to be making political decisions.

JGT: Absolutely. So specifically what that would mean is there are a set of build options, right, that La Loche dick TZDB is literally source code, it has a makefile and the output is a set of files that -- and there’s a variety of ways to build it. I think the w for us would be, if we can, come to a condition as soon as what build options are the right ones and, you know, maybe it’s not specifying the build options themselves and specifying what we want the outputs to be, which in turn would back into what the build options should be, but that’s one piece of it. The second is there are some legacy identifiers that are non-political. There are things like PST and EST that are there for sort of legacy reasons. That we should decide whether we want to accept those legacy identifiers or not. Today implementations vary, so Firefox use them, but Chrome and Safari don’t, so the kinds of things we would be deciding would be things like that. Absolutely not things like is Kyiv or Kiev the canonical spelling. We’re going to stay far away from that and make sure it’s some organization making those decisions. Either Unicode through CLDR or the time zone database itself. Does that work?

KG: Yeah. Thanks.

SYG: Quick question. Just mainly for my curiosity. Would converging on a web browser for some of these time zones then diverge with the underlying OS?

JGT: Yeah. That’s a really good question. And that’s actually some of the things that I’ve been digging into since the last plenary. And so the answer to that is a little complicated. So first in some operating systems, so Android, I think is a good example, the time zone – and ChromeOS would be actually a better one. The time zone database in the OS and the time zone database in browser are necessarily the same. And I believe iOS is the same way, if I remember what you so you cani said. And so, however, on Mac OS, where I’m presenting from, that’s not true, right? Where I can very much have a browser that has, or Node.js that has, its own copy of the time Don database that differs from what’s in the operating system. So the particular failure case where that’s a challenge is when the operator system -- like, if ECMAScript knows about IDs that the operating system doesn’t, that’s kind of -- I think that’s kind of okay. But the reverse is not so okay. Right? Where you can have an operating system ID that ECMA script doesn’t know about. Today what ICU does in that case is return a fake time zone identifier called Etc/Unknown that has the same values at UTC. I actually call that out as an open issue later on. We’re not going to address it today. But it is sort of an open issue of we need to specify what we want that behave to be. There’s not really a good solution there, other than encouraging implementations to update themselves frequently. But that is a problem. We may not be able to solve it, but we can at least specify what to do when it happens. Does that work?

SYG: Thanks for calling that out. That wasn’t a thing that was on my radar. But that sounds like a problem. So you’re on top of that. That sounds good. I was more wondering that, like, in the case of Chrome OS or in the case of iOS, these mobile OSs, if, like, due to software engineering reasons or whatever, the project is like, no, we don’t want you to diverge on the TZDB names, we made a decision to ship this version of TZDB built in this way, I guess what I’m saying is if we come to consensus in TC39, then it’s on to the Google and the Apple representatives to see if this is okay if it ends up requiring two different TZDBs on these OSs and if the answer comes back no, what are your thoughts on moving forward?

JGT: I don’t have an opinion about how to solve that problem. And it’s a hard problem. My instinct is is that divergence from the OS is probably not great. Especially in the case where the OS can have identifiers that ECMAScript doesn’t know about. I would probably prioritize how can we avoid that divergence if we can. But I just don’t know enough about the problem yet. I know this is a problem and I know we need to address it, but I can’t provide a solution yet.

SYG: Sorry, I wasn’t calling on you to provide a solution. I guess, yeah, that’s fair. What -- when is the time you would recommend that we try to track down the right stakeholders in Chrome OS and iOS and Android, and bring them a proposal? Because they’re not here in this room.

JGT: If this proposal gets to Stage 2, then maybe this afternoon. :-)

SYG: Okay.

JGT: But it’s certainly any time i feel like we’re of -- we’re at the point when we have spec text and we have clear what the open issues are, so I think that is it exactly right that the next steps from here is to start to coordinate with the various stakeholders to understand what to do.

SYG: If we get Stage 2 today, the first bullet point is not yet, like, sussed out. We don’t know what the convergence set is. Is we need figure that out before we bring to the stakeholders?

JGT: I would prefer to have the other stake holders in the room when we decide that. I don’t think this is an ECMAScript decision. I think this is an ecosystem decision what to do.

SYG: That sounds good. Then scope for this, it’s a fair bit larger than I expected. So let’s continue with the presentation.

JGT: My assumption is that the getting to Stage 2 essentially would say yes, it is important to help implementations converge. But not -- I think an open issue is exactly what if set will be, and the caveat there is the differences that we’re talking about other than the big one, which is do we update canonicalized values like Calcutta, that’s kind of the big sticking things that’s visible. There’s a bunch of other corner cases like, do we accept CEST, which is the legacy value for, you know, central European time, I don’t expect those to be really hard to resolve. I think the big one is the Calcutta issue.

JGT: I’m going to run through the spec text pretty quickly. There are five places in ECMAScript where userland code can input a time zone of identifier. and this proposal essentially says to change the behavior in each of these five places from getting the canonical value to storing in the internal slot the non-canonical value. Here is the Temporal time constructor and here is the internal version of the Temporal time constructor, here’s the zone date time zone ID slot, the AO that populates that. Here is the 402 version of zone date time locale strange and here is initialized date time format which is used in the date time format constructor. These are all essentially the same. The idea is don’t store the canonicalized value and store the case-normalized and non-canonicalized value that the user provided. This is the time zone equals method. If we remove canonicalization upstream, then we need to add it council stream in cases where it’s needed, and I’ve only been able to find one place in ECMAScript where I believe that downstream canonicalization is needed. Which is in when we compare two time zones together to see if they actually represent the same time zone or not. And this is this AO here. It’s possible there may be more places in ECMAScript, so during Stage 2, we would really do a deep dive and make sure there aren’t any more places where it’s absolutely needed. but this is one that’s come up so far. And the final API-related change would be to add a new API off the Temporal.TimeZone type to expose this time zone equals abstract operation we just finished here in a public API so that userland developers would be able to compare the differences. As you can see, this is fairly narrow.

JGT: There’s one more piece of prose, one more paragraph, and this idea actually comes from Android. Android did I think a really smart thing when Kyiv was introduced in 2022. Which is they did not add Europe/Kyiv as canonical. They added it as a non-primary identifier, an alias, so if somebody sent Europe/Kyiv to an Android device, it would know what it is, but they didn’t make it canonical so when android says what’s my current time zone and I’m in Ukraine, it still says Kiev. If it sends it to somebody else and they haven’t been updated yet doesn’t know about it. Android is going to wait two years, until 2024, the release of Android, before making Kyiv the canonical one. I think that seems like a really good idea and this is essentially a suggestion for implementers to did something like that. We could strengthen this text if we wanted to, but that’s the last piece. The waiting period when you have a name like Kiev to Kyiv so you have time for the ecosystem to catch up.

JGT: That’s essentially the sum of the spec text. Here is the set of next steps I expect to happen. This proposal is stacked on top of editorial PRs in 262 and in Temporal, and I want to land those editorial PRs. There’s a set of open issues. So this waiting period that we just talked about and how long it needs to be, there’s the case of what to do if the operating systems time zone identifiers unknown. Talked about helping implementers converge on this cross engine set. There’s actually an open issue in 402 already because there’s an existing public API that expose these differences and this is a good place to start. CLDR has some work going to be able to expose IANA’s canonical ID. If we chose to expose IANA we’ll have CLDR support for that. And continuing to work out what these build options need to be. Obviously the polyfill, I have a proof of concept polyfill, but it’s kind of sloppy and it needs to bring in the entire Temporal repo and that kind of sucks, so I want to improve that. Obviously test 262 tests and clean up the repo. So that’s what’s coming next. I’ll open the queue and ask for feedback. WH?

WH: I’m a bit confused. You mentioned removing canonicalization and adding it back on equality. And then you also mentioned waiting two years to change canonicals. Why wait if we don’t canonicalize?

JGT: So the big difference is there are still some places, so for instance, the -- in fact, I’ll go to the last slide. The API here, Intl.supportedValuesOfTimeZone [?], the primary use case of that API is to do a dropdown list of time zones for users in a UI to choose from. It would be really bad if there were multiple dropdown entries for Asia/Calcutta and especially because you localize it and you have two names that are the same. So there needs to be some place in ECMA script where we decide between aliases which ones to show. This is one example. Another one is if I ask what is the default time zone on Windows, right, Windows doesn’t use IANA natively. We need to choose which of the identifiers we come back for the time zone in India from Windows. So because in those cases we still need to canonicalize, there will be less impact than there was before, but there still will be some, and that’s why I think the Android thing makes sense.

DE: Just a big plus one to this whole area. I was previously skeptical of rolling back the amount of canonicalization by default, but given both the low quality of the data and the instability over time and the lack of agreement over the contents, this seems like a good idea. I do hope that we adopt the same change in Intl in how the time zones work for Intl.DateTimeFormat.prototype.resolvedOptions().timeZone. But I think we can work that out between Stage 2 and Stage 3. About the scope of what we would be promoting to Stage 2, I think we can say with confidence that this JavaScript change is ready for Stage 2. About the broader thing of bringing together time zone database maintainers from these various parties, I strongly support that effort, but it seems a lot earlier. We haven’t assembled these stakeholders, so I think we can express that we have this as a goal, but I think that project, both is not ready for Stage 2 and is a little bit out of scope for TC39 as a whole, because it’s kind of about unifying the operating system time zone databases.

JGT: In the interest of time, I think first of all, I agree with you. Second of all my idea is I don’t want to gatekeeping the API changes on anything else. Right? Because those are really the time critical things. And so if by the time we ask for Stage 3, we have got that consensus, I would include it. If not, I’ll drop it from the proposal and make a new one. I don’t want to hold up the important stuff. Does that work for you?

DE: Yeah, 100% agree. I’m happy to leave this broader effort in scope for Stage 2, but for Stage 3, we shouldn’t hold it up if we only have the JS-side changes and not the broad agreement on what to use for canonicalized time zones.

SYG: I wanted to follow up on the -- just to clarify, the important thing is the second bullet point in the previous slide.

JGT: That’s correct, yeah.

DLM: Thanks. I just wanted to say that the SpiderMonkey team is very in favor of this proposal and want to thank champions for great job you’ve done putting this together and doing the work on this and preparing very clear presentations. Definitely support this for Stage 2. So a little bit of skepticism about the duration of the waiting periods, but that’s not going to hold up anything. It’s something I’d like to talk about in the future because it does increase the amount of work we have to do when we’re doing updates.

JGT: Agree.

DLM: Thank you.

FYT: Yeah, I feel a little confused about looking at the whatever your spec put there, because are calling to an abstract operation. Neither in 262 nor in 402 nor in Temporal proposal. So I don’t know how -- I mean, it looks like you’re depending on something that is not there. So I just don’t understand what it is.

JGT: These are these two editorial PRs I mentioned. This proposal is stacked on top of these and we would love your feedback on these PRs. They’ve been in place for a little while and I think I also notified the 402 chat room about this quite some time ago. So I would love your feedback on these, if you want to take a look, the links are in the slides. And that’s where those things come from.

FYT: So here is a issue here, which I internal process, I’m very confused. So let’s say that -- let’s say this editorial PR get in, right? Is that get into 402 or 262?

JGT: Currently today, there are two editorial PRs, one of 262, which is the -- would be for implementations that don’t implement 402, and another editorial PR which is part of Temporal, most of which will be merged into 262 and some into 402. Given the interest of time, could we maybe time this offline and in the context of these two PRs we could review them? Would that work for you?

FYT: Sure. But the issue is that your change, if we look at the thing you touch, now then you’re not touching the current 262 nor 402. Right? You’re touching your Temporal proposal? So anything your proposal change, even they we check in the editorial PR is not -- after that is still not in 402 nor in 262, right?

JGT: That’s correct, they’re stacked on top of Temporal. There’s no expectation that this proposal would land in implementations until Temporal lands.

FYT: Okay. Thank you.

RPR: Okay, then -- so we’re at time, so just very quickly, CDA has said plus one, Stage 2. PFC said I support this for Stage 2. And so we’re asking -- so, JGT, you wish to formally ask for stage 2?

JGT: Are we ready for Stage 2? If yes, is there anybody that would want to review it for Stage 3?

RPR: We’ve already had support. Are there any objections? Daniel Ehrehnberg.

DE: Concretely, Justin and I were talking through what stage 2 and Stage 3 mean. In particular, we’re especially giving kind of this spec text Stage 2 and strongly endorsing this effort and trying to get this effort started of getting these time zone canonicalization databases aligned. Is this -- this is an accurate description of what we’re bringing to Stage 2? Pout.

JGT: Are you asking me or the group?

DE: Both.

JGT: Certainly what we tagged about before, to prioritize the API stages and by the time we ask for Stage 3, the other stuff is ready, we’ll include it. If not, we’ll put it somewhere else.

DE: Yeah, okay, let’s include that in the conclusion. Thanks.

JGT: Sounds good.

RPR: All right. So I don’t think we’ve had any objections. So congratulations, you have Stage 2.

PFC: I’d like to say I’d be happy to help review it, but I think it would also be good if there was a volunteer who hadn’t been dealing with time zone identifiers for the last three years and can bring a fresh perspective.

JGT: Thanks, everyone, for taking the time on this. I know it’s a little off the beaten path for most of our topics, but I’m grateful.

RPR: Sounds perfect. Thanks again.

### Speaker's Summary of Key Points

- We summarized the problems to solve:
  - Divergence between implementations
  - ECMAScript unexpectedly changes programmer input, e.g. Europe/Kyiv ⇨ Europe/Kiev
  - Developers are upset by obsolete names, e.g. Calcutta, Kiev, Saigon
  - === is unreliable for comparing IDs across engines, platforms, or time
  - Temporal intensifies these problems by making IDs more discoverable
    - e.g. Temporal.ZonedDateTime shows ID in console, debugger, logs, JSON, etc.
- Proposed Solutions
  - 1. Improve TZDB identifier guidelines for implementers
    - Help implementers converge on a cross-engine set of canonical IDs
    - Add spec guidelines for handing future changes (esp. renames)
  - 2. API changes that reduce observable impact of canonicalization changes
    - Stop returning canonical IDs when programs provide non-canonical inputs
    - Add Temporal.TimeZone.p.equals to compare IDs, replacing unreliable ===
- Spec text: 15 lines of algorithm changes + one editorial paragraph
  - Remove canonicalization of user inputs in 5 places in 262/402/Temporal
  - Add canonicalization to TimeZoneEquals
  - Add new Temporal.TimeZone.p.equals method
  - Idea from Android: recommended "waiting period" (e.g. 2 years) for future renames like 2022's Europe/Kiev => Europe/Kyiv, so renamed IDs are first added as non-canonical and changed to canonical after the waiting period. This minimizes the chance that ECMAScript sends an ID to another platform that the other platform doesn't recognize.
- Next steps
  - Land the editorial PRs that this proposal will stack onto: ecma262#3035, proposal-temporal#2573
  - Resolve open issues, for example:
    - After-rename waiting period duration
    - What to do if OS's ID is unknown to ECMAScript: Etc/Unknown? RangeError?
  - Help implementers converge on a cross-engine set of canonical IDs
    - Resolve ecma402#778: cross-engine differences in Intl.supportedValuesOf('timeZone')
    - Track & assist CLDR's work to expose IANA canonical IDs
    - Continue working with implementers & CLDR to define TZDB build guidelines
  - Finish polyfill (stack on Temporal), write Test262 tests, clean up repo
- We agreed that the API changes are most urgent. If spec text for other changes (agree on canonical values, waiting period for renames) are ready when the API changes are ready for Stage 3, then we'll include them in the proposal. If not, then we'll go ahead with just the API changes and work on the other stuff in parallel to ship later.
- We clarified that this proposal would not land until Temporal lands.
- We discussed concerns from SYG and others that aligning between OS and ECMAScript was thorny and important. These issues are not resolved yet but we're looking into the options to solve them.
- DLM brought up a concern with the waiting period because it adds process overhead for implementers because they have to make two changes. See <https://github.com/tc39/proposal-canonical-tz/issues/17>
- FYT had questions about the spec text shown, and I pointed him to the editorial PRs ecma262#3035, proposal-temporal#2573 that this proposal is stacked on top of, and encouraged feedback on those PRs with any concerns.

### Conclusion

- The proposal reaches Stage 2, including both the new API, the removed canonicalization of timezone IDs, and a strong endorsement of the new project to come to a common definition of canonical timezone names.
- Explicit support for Stage 2 from CDA, PFC, DE, DLM
- For future Stage 3: We should not block on the latter, more difficult project of standardizing timezone names; we can go to Stage 3 with just the new API and patched-out canonicalization, leaving the other part for later.
- Stage 3 reviewers: PFC, JHD, DLM

## Promise.withResolvers for Stage 2

Presenter: Peter Klecha (PKA)

- [proposal](https://github.com/peetklecha/proposal-promise-with-resolvers)
- [slides](https://docs.google.com/presentation/d/1CEh2xgW-KB0Tpz2GQtcJ8nDbWq99d3y8NCwYJw-laSI)

PKA: Hello. I am here to present Promise.withResolvers for Stage 2. So for anybody who wasn’t here last time the motivation for this proposal is this. We have a Promise constructor that works well for many use cases. You pass into it an executor function, which runs synchronously on construction and you use its resolve and reject parameters to determine when the promise will resolve or reject. But sometimes developers want to create a promise and get a handle on it before deciding how and when to call its resolvers. When this happens, they do this boilerplate at the top here where we scoop out the resolve and reject functions from the body of the arrow function, put them into the global scope, then proceed.

PKA: This is a wheel that gets reinvented all the time. Lots of examples in libraries and applications. It’s seen in utility and boiler plate is repeated in line all the time. The proposal here is a simple one: it says let’s add a static method on the Promise constructor called `withResolvers`. When invoked it gives back a plain object with three properties: promise, resolve and reject. Promise is a promise. And resolve and reject are the corresponding functions. It replaces these couple lines.

PKA: There are a couple of issues. Not a big design space, but there are a couple of issues. One concerns the subclassing and binding behavior. So the current spec says that as with other Promise static methods, if you call withResolvers, that will return an instance of the class that you called it on. So if we have a class called Vow, which is a special kind of Promise then the promise property of the returned object will be an instance of Vow. It’s not an endorsement of subclassing Promise, but it’s how all the other Promise methods work.

PKA: Related issue is that if you were to, for example, destructure `withResolvers` off the class, whether it’s a subclass or not, currently, if you call `withResolvers` it will throw. Like other Promise static methods, if the `this` isn’t an object, then you will get an error. In principle we could do something else like how Array methods fall back on the Array class when there is no receiver. You could have it fall back on the Promise class. Again, the spec goes with the way that other Promise statics work. In principle this is an issue that, you know, could go into a different direction during Stage 2, if you want.

PKA: Some more things coming up on the issues page of the repo; there have been some people pushing for a different API, which just returns a promise, which has the resolve and reject functions stapled on as methods. That’s how, for example, the Deno standard library implementation of this works.

PKA: Another issue is just bikeshedding the name. The current choice is `withResolvers`, admittedly it’s a bit verbose. There has been a stated preference by some people for either `defer` or `deferred` which has a historical status here. Several libraries have introduced this function under that name before. So some people have some familiarity with that. Some other options are out there. I haven’t been convinced by any of those arguments. So it’s still `withResolvers` right now, but this again is something to be continued to be bikeshedded during Stage 2.

PKA: We have a spec. There’s the spec. It’s very simple. We have a polyfill. Here is the polyfill. It’s again very simple. With all that said, I would like to ask the committee if there’s interest for this going to Stage 2? All right. Ready for any questions.

KKL: In general, at Agoric we are in favor of this proposal and most of the forms that you have discussed with the exception, we definitely object strongly to adding resolve and reject as properties of a Promise instance.

PKA: Yeah. Noted. I think that some other committee members have expressed that in the issue as well and I am happy to confirm that API.

USA: We have a reply by Shu

SYG: I agree with the no instance methods take.

CDA: [on queue] +1

KG: Yeah. I am also in favor of this. I want to mention the particular reason that I think this is a good thing to have, which is that the Promise constructor – well, two reasons. One is that sometimes you are separating things out just to pass them around, any time you are doing queuing or anything like that. But the other reason is that the promise constructor wraps everything in a try-catch. And that is only correct behavior if you are going to unconditionally return the promise from your function. In which case, sure, behave like an async function and only throw exceptions asynchronously. But If you are doing anything else, returning a promise and another value or sticking the promise somewhere else, or literally anything else, then exceptions getting wrapped up in the promise is the wrong behavior. And it would be nice to have a way to make a promise that allows us to not have that behavior. So I am definitely in favor of this.

PKA: Thank you for that. That’s a very good point.

MM: Yeah. As Chris mentioned, we support this proposal. We mention two additional reasons because the ones raised. If it’s extracted and invoked without a this binding or without a promise class or subclass at this binding, we support the TypeError. We do not support having it default. The other thing is, I was surprised to come to like the name. I want to share the observation with everyone. Because I initially hated a long name. It didn’t read like a verb, like most method names. And I was already familiar with defer. And then somebody pointed out that the phrase as a whole reads well, not the method name by it assessment. What you are getting back is a promise with resolvers. It’s describing the overall record. And that convinced me.

PKA: Yes, thank you for spelling that out. That was the motivation. `Array.from` has a similar vibe.

DLM: The SpiderMonkey team supports this for Stage 2 and it solves a very common problem and thank you for taking the time for putting this together.

RBN: I was to mention, I support this for Stage 2. And I understand MM’s comment about the naming seeming somewhat consistent, I would argue though that the consistent – the more consistent API this is similar to is `Proxy.revocable`, which makes me lean towards defer or deferred as a simpler name. Also, because you’re not only returning a thing that resolves a promise, but also a thing that rejects a promise. They have slightly different semantics. In one sense, one resolves the exception whereas the other one does recursive resolution. And the usual term is fulfillment or settlement. Either way, I still find defer to be simpler to type. And that’s kind of my preference. But again, I support Stage 2.

PKA: Yeah.

JHD: I want to clarify that technically the “proper names” for the arguments are resolve and reject because resolve can fulfill or reject. "resolve" encompasses both fulfillment and rejection. It doesn’t settle a promise because it would resolve it to the state of another promise potentially. But that settlement could end up – it results in pending, fulfilled, or rejected.

RBN: Yeah. I think that’s a fair description. Only I would clarify that reject doesn’t do other – any type of resolution. It still feels like resolvers is a strange term to use there.

PKA: It’s a tradeoff that sacrifices some maybe technical precision with – under 50 characters for the name.

DE: I initially kind of liked the idea of calling it Promise.defer, but it’s hard for me to justify that name without referring to the fact the name was already out there. RBN was describing an analogy with `Proxy.revocable`. But deferred, it’s hard to see how it would fit it into it. It’s not a promise with extra capabilities for something.

DE: Anyway, great job PKA. Great proposal. I support it going to Stage 2.

RBN: I should clarify my analogy here. I am not talking about the semantics or the behavior, but the API shape. `Proxy.revokable`, contains the proxy and – so it has the same type of usage pattern, even if the semantics are different.

PKA: Yeah. I think somewhere somebody’s – some code base has it called like `makePromiseKit` or something like that. And I – if we had some kind of precedent for calling these things kits, like if it was `proxy.revocableKit`, then that might be a nice name here. But unfortunately, that precedent doesn’t exist so I don’t know how to apply `Proxy.revocable` to this case. As I think Dan said, it’s not a special kind of promise. Identifying that way doesn’t distinguish it from the promise constructor.

### Speaker's Summary of Key Points

- Several committee members agreed that there shouldn’t be an instance method on Promises to resolve/reject them.
- Some inconclusive bikeshedding on the name; some support for the current `Promise.withResolvers` name.
- No concerns expressed for any of the semantic details.

### Conclusion

- Proposal achieves Stage 2
- Explicit support from DE, DLM, RBN, MM

## Continuation: Source Phase Imports for Stage 3

Presenter: Luca Casonato (LCA), Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-import-reflection/pull/36)
- [slides](https://docs.google.com/presentation/d/1lpJBCe6cgBa5MBtD_Bhfyh92EXcJS72LbStnaoQ4cxo/edit)

GB: We are following up on the feedback from the last session. We were originally to achieve Stage 3. We are happy to say that we are not going to seek the stage advancement this meeting. Unless there is, you know, an incredibly positive response today, but at least if we can go through the feedback, we can make sure we have completely worked through the details on the proposal so that hopefully will aren’t too many further surprises here.

GB: The first thing that was brought up at the beginning of the discussion was the question of the dynamic import JHD mentioned asymmetry from syntax. And RBN brought up, this stuff is difficult for a type system to support. And so we brought up the previously proposal that had been discussed that we all been fairly neutral on in the past and didn’t see new syntax and this is the idea of putting the phase into the – into the dynamic import statement itself. It becomes what we are calling a metamethod. It’s not a metaproperty. But it’s part of the import call form.

```js
import source src from “./mod.wasm”;
import.source(“./mod.wasm”)
```

GB: So just like dynamic import, you can’t assign this function. You can’t treat this function as a value. It’s a syntactical call. Because of the separation of phase, and attributes, it can also support the options bag for imported tributes. So this hopefully brings symmetry that we now have the dynamic and static forms aligning a little bit better. And it should maybe be easier for the typing systems. So we have put together this spec text for that and landed it already. And it works relatively well with all the various modules spec structures. Yeah. It’s the new syntax and you can think of other forms of import, you know. We might have import.other variations. Import.defer. Import.instance. Possibly import.assets. There might be other variations if we expose the other phases. It’s not clear if we will expose all the phases. But it’s a possibility. And so it seems like those things would make sense. But if anyone has any thoughts on T we are all ears as well.

GB: And then the second point was the syntax lookahead. If you have `import source from from`, you don’t know if you’re in a phase import or a normal import until you look ahead to see if there’s another from. So what we have done for now, is we have banned the keyword `from` as being a name of a source identifier. So that is now a new syntax error and we put together the spec text for that and landed that in the spec. Not everyone was positive about this change. I mean, there was no objections, but JHD brought up that it seems a bit restrictive. It's something we could relax in future. But we are trying to pick up on the feedback and make sure we are not creating any unnecessary lookaheads. So in the future, if we have module declarations, we are going to be able to, in theory, you could have this same thing with module declarations. That would be up to module declarations to determine if it wants to ban the `from` name as well. At least in the source form, it’s the banned initially. You could have from, from. And that’s from module declaration to figure out, if it wants to allow three forms to happen or not. But just to mention that those kind of interactions can be handled on their in due course and there’s no major issue down the road there. So that was it from the feedback mostly. I will get back to the queue. If anyone has any questions or discussions on these topics, we are interested to hear and make sure we work through the feedback properly.

RBN: [on the queue] agree on static. Still favor import.<phase> over import.

RBN: I understood the argument that they had around the static top level import syntax and that I was still in favor of the import and phase metamethod, approach they are describing here.

RPR: Okay. Does it make sense to go through the preexisting queue? That’s what Chris has just populated.

GB: I guess... I can’t see the queue right now. I can’t make a judgment on that. I think it would still be the same questions around – Lucca, do you want to check the queue and let me know what you think

DE: My previous two queue items have been resolved. I am happy with the current proposal.

JHD: Yes. I wanted to explain my reaction here. I will never write the code that this makes a syntax error and I don’t expect anyone to. So it’s fine, with air quotes. However, ES6 made a strong effort to, like, make a bunch of things not be reserved words and allowed as identifiers. And generally, when we have banned specific names since then, it’s been special things, like fields named constructor or argument – the word arguments and things like that, in classes. And from doesn’t have any special meaning, except in the static import status. And so I mean, it’s just – like maybe it’s just fine in this case and this is a one off. But like it just seemed odd to me that this would be the best – this is, in fact, the best solution for the grammar conflict. Perhaps, it is. But like, I had been – and it turns out I am not the only one – we were talking about rather than making it `import source`, it would be `import.source` – and based on that, mistake and impression, there wouldn’t be any grammar conflict. So yeah. Anyway, it – I guess, yeah. I am curious what folks’ thoughts are on putting the dot instead of a space there in the static syntax as well. Or whether this is a big deal to ban in this way and so on. I thought it was worth bringing up.

LCA: Yeah. Thanks for the comments there. I want to mention quick, it’s possible to use from as the binding name if you make one of the characters a Unicode escape sequence. `fr\u0061m`.

JHD: You can also use `import source { default as from } from “./foo.wasm”;` There are ways, but it’s awkward.

LCA: To clarify that, that is not something you can do. You cannot do curly brace default. No name space object for source phase imports.

JHD: Even when called default?

LCA: What do you mean?

JHD: I mean, if you import foo from a path, you can import curly braces. Default exports are represented as a named export called named default. Every module allows this pattern.

LCA: This is not a default export in this sense. It’s a different type of binding.

GB: There’s no namespace variable at the source space because the module haven’t been evaluated.

LCA: In the dynamic import form where you get returned the source directly. It’s not wrapped in an object with a default property.

JHD: I see.

LCA: And then the other point about the dot in the static syntax, I don’t think we have any other syntax right now that has dots in it like this, where it’s like declaration that has dots in it. Maybe, but I don’t know. I don’t really like it. I prefer this.

GB: Yeah. The dot would be a way around that ambiguity. But there’s no precedent for declarative dots in the language. That would be a new convention and again there’s like a – you don’t want to cause the confusion about what it’s doing.

JHD: `import.source` for dynamic import doesn’t have precedent. I believe.

???: Well, it does –

???: [inaudible] then we `import.meta`

???: Isn’t `super.foo` -

???: Right

???: It’s evoking the expression?

???: It’s different than `super.` – `import.source`, where it’s not evoking a expression, but a dynamic import? There’s actually – [inaudible]

???: Precedent – but that’s fine. About

SYG: There’s no precedent in a narrow way, but it looks like a function expression application. Even though it was technically not one. Where GB and Lucca are saying, `import.source from`, the declarative import thing, there’s no precedent in what does that look like. That’s an entirely new syntax

???: Something outside of an expression. So it’s particularly in a declaration. Yeah.

DE: Yeah. It was responding to JHD’s comment about whether we should use `import.source` in the ModuleListItem. I kind of like that idea. I think we should discuss it over the next couple of months. And not try to draw conclusion today about whether we want to adopt that or not. In general, if this is the only open question, that’s great.

RPR: Okay. Then should we go to Mark?

MM: Yeah. So the reason why we are wrestling with this is the one token look ahead constraint. First of all, just a question for people here who know: can the rest of JavaScript currently be parsed with one token look ahead?

SYG: No. Sorry for arrow function expression argument lists...

KG: Arrows are a weird case because there’s a cover grammar. There are a small number of places where there are two token look ahead restrictions. In particular, you can’t use `let [` as the binding in a for in loop. That sort of thing. But it’s one or two. Or cover grammars which are horrible.

WH: What is the context of your question, Mark?

MM: The context of the question is, if people who write JavaScript parsers already do two token look – you know, more than one token look ahead, then I don’t think that we should complexify the language to avoid a two token look ahead in this text.

WH: You’re assuming that we’re trying to avoid a 2-token lookahead, but we’re not. The grammar is parseable with 1-token lookahead without the `from` restriction.

MM: But I don’t think take that as a sensible motivation that is what was stated in the presentation.

LCA: So the 2-token look ahead which is something by this. We want to if we want to add other syntax on the left-hand side. Then that may not be possible, if we don’t do something like this.

MM: Okay. So good. So that motivation I do understand. So my position on this is that the from prohibition is just too weird. And that the dot for virtual properties is not a violation of the sense of the virtual property syntax, as I understand it. The syntax, by the way, on a historical note, comes from the E language and borrowed into JavaScript from E and I was part of that conversation. And essentially, the way to think about it is, it let’s us buy extending existing key words effectively add new words in the language and when they are mnemonically related to the key word extending. So with import followed by open parenthesis already being the normal dynamic import and import not followed by open parenthesis, always opening an import declaration, I think import.source open parenthesis, the dynamic case, and import.source not followed by open parenthesis, always being the static case, is fine. And I would say that it’s not just that it doesn’t violate the original historic negotiation of what the precedent was intended to be or the pseudoproperties were intended to be, I think it doesn’t violate people’s understanding of them. I don’t think people think of them as necessarily only expressions or anything – or not present in declarations. I don’t think it would ruin anybody’s understanding of JavaScript to see one in a declaration. It would just be a – a way to introduce what is effectively a new keyword into the language.

WH: To clarify, I did not ask for the `from` prohibition. I don’t think it solves anything. DE asked for it.

MM: Okay. If it doesn’t solve anything, then my preference for the pseudoproperty is even stronger. WH, does the pseudoproperty satisfy all your grammatical constraints and preferences. As a declaration. When it’s not followed by open parenthesis.

WH: I haven’t really thought about it much. It might work? I don’t know.

MM: Okay. I trust the off the top of your head grammar intuitions rather than my hours of study. So I am happy with that.

BSH: [on the queue] +1 to import source for both cases.

SYG: Reminder for GB and LCA, Stage 3, . . . thing to prototype change abstract module changes be proposed.

GB: Yeah, we will be making the updates, yeah. That will be the next step and to be able to move ahead with the inspiration for Wasm.

SYG: For what it’s worth, I chatted with the V8 Wasm folks, and we also – we agree that there doesn’t seem to be any reason anybody would be either inspecting the prototype chain or mucking with it currently. So it’s probably backwards compatible.

GB: Thanks for checking that. It sounds to me, then, like the major thing we need to, then, figure out for Stage advancement at this point is the grammar and making sure we have full agreement on the grammar question. It’s great to hear the arguments on that. I am open to options. I must say, like intuitively, I have always thought of static imports as being declarations and I have always thought of dots as being expressions and member expressions and things which are executed. But I guess one thing that would help for me on that discussion would be that I think I also misunderstood the motivation. I thought the problem was the parsing lookahead. The new situation here, and if it’s purely a problem about future syntax, and future syntax extensions, as I did say in the last meeting, we don’t expect extensions to this left-hand side. I think any extensions would be more right-hand side extensions because the phase concept is so well defined. So I expect this left-most position would remain the phase. And anything added in future would be on the right-hand side. But just to try and understand the arguments, I guess firstly why we have done this restriction? Secondly, what we gain by using a dot in the position and what syntax benefits there are. To narrow into the arguments would help us to pick this up for next meeting.

RBN: This came up as part of the discussion in the delegates chat as they were talking about the from binding and ways around that using syntax that is currently disallowed. Such as trying to import source curly default as from as a way around a look ahead. But it did get me to thinking... whether or not we have considered because I haven’t seen anything so far about the export forms. Because we generally, for most of the import forms we have a corresponding export form so you don’t have to import something and then re-export in the next line. Saying export mostly works. And we have been making changes over the years to make sure we are making that syntax more parallel. And since there doesn’t seem to be an export syntax here, is that being considered? That would inform some of the other syntax decisions that are made for the import side.

GB: That’s an interesting question. In theory, you know, if we did have this kind of syntax for module declarations in future, there could be benefit in an export form because you could have multiple exports defining a bundle. That’s a definition of a bundle. `export source name from` and then the file and then you could align them and that would be a definition after bundle somehow. We – I don’t know. Maybe NRO knows if it’s been discussed with module declarations. But that’s an interesting one

RBN: Part of the reason this comes up, many of the declaration – import declaration forms for the top level imports, for example, `import source` says, it has to be the default import. You can’t use a named import, namespace import, but if you were going to eventually have an export source something from, would we be importing the default or taking the default and reexporting it as the name oh, if you wanted to export it as something else, we could use something like `export source { default as` and consider allowing you to write import source

GB: I think even in that case, we could still have full expressivity because the name that you’re using in `import source` is the local binding name. Whereas, in an `export` statement, the name you’re using is the external export name. Because we are able to specify any name, an export name from would allow you to get all the flexibility because we are only dealing with a single binding. Just being able to shed that binding with an arbitrary name would be all you need. So it’s consistent with this being a different form in terms it not representing a name space. Or this being hypothetical if we wanted this for a bundling pattern with module declarations down the road. But it’s an interesting point.

MF: I wanted to support what GB was saying earlier. I also don’t think we need to be worried about the syntax to the left of the binding currently. It’s only used for the phase. And I also don’t think that we need to strive for any similarity with the dynamic form. It’s fine to have `import source` for the static form and `import.source` for the dynamic form. And no other convincing arguments were given.

GB: Could I just bring up the question one more time. Then. While we are on it in this meeting. Does anyone – it’s not like there were reservations about the from syntax error. Is in anyone who would – you know, absolutely feels that’s an important ambiguity to avoid at this stage

MF: Are you asking about the binding named from?

GB: Yes.

MF: I think that was a positive change. It’s a change that we could always back out later. I would like to hear from anybody else. Although, the Unicode escape sequence escape hatch, you can’t allow that.

RPR: All right. Does anyone have a reply direct to that?

MM: I will just jump in and say that I am really uncomfortable with the idea of banning a normal identifier from being used in this position. I think that that’s just irregularity in people’s understanding of variable names.

RPR: And DE has a reply.

DE: This is probably misunderstanding on my part, and I am happy with allowing `from`, especially if this comes with WH’s seal of approval that we don’t have ambiguity ahead with the syntax that is currently supported. I agree with others, we only want phase on the left side. If we need more stuff, I don’t think we will need because we already have import attributes, but if we did have something outside of that, it would be on the right side.

WH: At the moment, there’s no ambiguity. The case I was concerned about was if we were to introduce an identifier in the future between the `from` and the string. Then all kinds of stuff would break. But banning `from` now would not fix that problem.

LCA: Okay. I have one more thing. So talking about this export source, it makes sense. The question is here, if we did decide to go with the import.source, in the declaration, would the export.source or export space source. In favor of the export.source, do you have opinions on that

JHD: Yeah. They would have to be the same. We could do the space source or the dot source in all the static places. Wherever way we went.

LCA: Do you have a opinion on this, Mark?

MM: I am very happy with it, as long as we don’t make a bizarre prohibition for variable named `from`. I am happy with either syntax. I felt motivated to make the argument for the pseudoproperty as an alternative to a weird variable name exception. Without the exception I am fine either way. I am actually quite happy either way.

LCA: Okay. Thank you.

RPR: Michael?

MM: Yeah. I had to jump in the queue. Mark thinks we agreed on – I don’t see we have come to that same conclusion. MM,, I don’t think it’s weird to ban binding named `from` in this position. We already ban let and some other conditionally like `yield` or something. Yeah. Yield. And a few other bindings from the declarations. I think it’s strictly a positive here

MM: `let` and `yield` were listed as key words in strict mode starting in ES5. And I think they were already considered reserved before ES5. It’s only – they only come up as issue – well, let only comes up as an issue because it wasn’t reserved and not reserved in sloppy mode. And I don’t care about sloppy mode and I don’t think anybody should.

MLS: This is the other Michael. I had problems with banning this here. It’s a possibility for developers . . . they will get a weird syntax error and not going to know why. They have to look it up. And they have to look it up in the spec. It just seems kind of weird.

MF: MLS, which do you think is more common that will happen? That somebody accidentally uses from as a binding when they did not mean to or that someone wants to use from as a binding and gets told by the compiler that they can’t? I think that the accident case is going to be more common.

MLS: Sure. I agree with that. But that’s – there’s still the other case where we don’t want – we are effectively disallowing a certain variable. And it’s – it’s not intuitive.

GB: From what it’s worth, I don’t think there’s a complete form where from is misallocated. From a user perspective. It’s only if they repeat the key word from in the wrong position. Sorry, I guess I am trying to think of how someone would import the from binding by mistake or end up in a situation by mistake. For what it’s worth, you can already import from, from in the language. So I am not aware what the user concern here is.

WH: The concern is the third line on the slide. [titled “from” binding syntax error]

LCA: Can you clarify which line is the third line?

WH: The third import line.

GB: So this is valid today?

WH: Yeah.

GB: And when we introduced this new source syntax, it doesn’t change how that is currently interpreted. But it does mean that if someone does an `import source` and forgets their binding, they will not do a source import, but a normal identifier. Normal instance import, the default.

GB: Right. So there’s some kind of usage where you forget to put the identifier name in and now you’re in a different syntax. I don’t see how banning `import source from from` helps with that

WH: It doesn’t.

MLS: It doesn’t. But I am concerned about the first language. I think that somebody could actually write.

SYG: And you want somebody to be able to write that line, Michael?

MLS: This isn’t like the amusement park where you have to be this high to get on the ride. JavaScript developers come in a wide range of abilities. I just don’t think that we want to add this foot gun. I don’t think it’s good form. And I wouldn’t use it. But I just don’t want to add, you know, this weird case. Because again, it’s a pseudo-keyword when we do this.

DE: I am trying to capture this in the notes. What do you want to go with?

MLS: I am just adding my support for not banning from.

DE: For not banning from. Okay. You’re fine with the `import source`. You’re not expressing concern about that? Or are you expressing a preference for `import.source`

MLS: I am not expressing preference for either. I am . . . it seems weird that we create a pseudovariable for a statement, but I could probably be convinced of that. I think that’s less of a unknown than having this pseudokey word.

DE: To clarify, you’re okay with `source` acting as a keyword in import statements, but `from` being banned as a variable name is the thing that you don’t want; is that right?

MLS: I am – at this point, I am ambivalent here about `import.source` vs `import source`. I don’t want to add a pseudokeyword.

RPR: To be clear, Michael Saboff wants to permit the key word from in the identifier position within the import source, just like the top line of the reviewing name

MM: So I am going to make an additional point and this slide is perfect, the perfect slide can make the point: if we wanted to take the position that `from` inside an import declaration is a pseudo-keyword and is – and is prohibited from being an identifier – used as a variable name, then we would have to ban the – what appears on the second line of code in this slide. But it’s, of course, already too late. We can’t ban the second one. That means that we already allow from to be used as a variable name in import declarations given that the irregularity of banning `from` as a variable name in some import declarations and not each other is irregular that I would block on that. As long as we don’t do that, I am once again, very happy with the syntax either or without the dot.

MF: I think MM makes a good point there, that if somebody has already written `import from from` other specifier and adds source, they wouldn’t want to have to refactor the binding there as well. Given that, you know, none of the other arguments I felt were strong in either direction, I will come around on that point.

WH: [on queue] +1 for MM.

### Speaker's Summary of Key Points

- Many committee members including MLS expressed very strong opposition to ad-hoc banning particular variables such as `from` as bindings for import statements. Even though new syntactic forms in the past have banned particular variable names (e.g., generators and async functions), it might not be a good idea to apply that in more cases in the future.
- WH clarified that there is actually no excessive lookahead for permitting `from`. The misunderstanding came from DE, who also doesn’t have a problem with permitting `from` given WH’s seal of approval

### Conclusion

- The committee agreed with the `import.phase` “metamethod” for the dynamic form.
- The champions will revert the change that they made to ban the `from` identifier name in source phase imports.
- The champions will follow up on the discussion on whether the static import declaration should use `import.source` or `import source` and bring the results of that back to the committee next time.
- The proposal remains at Stage 2 and is likely to be proposed for Stage 3 at the next TC39 plenary.
