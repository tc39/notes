# 12 July, 2023 Meeting Notes

-----

**Remote and in person attendees:**

| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Jesse Alama            | JMN          | Igalia            |
| Bradford C. Smith      | BSH          | Google            |
| Frank Yung-Fong Tang   | FYT          | Google            |
| Waldemar Horwat        | WH           | Google            |
| Michael Saboff         | MLS          | Apple             |
| Samina Husain          | SHN          | ECMA              |
| Istvan Sebestyen       | IS           | ECMA              |
| Ashley Claymore        | ACE          | Bloomberg         |
| Jonathan Kuperman      | JKP          | Bloomberg         |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Rob Palmer             | RPR          | Bloomberg         |
| Daniel Minor           | DLM          | Mozilla           |
| Martin Alvarez         | MAE          | Huawei            |
| Kevin Gibbons          | KG           | F5                |
| Ben Allen              | BAN          | Igalia            |
| Chip Morningstar       | CM           | Agoric            |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Ujjwal Sharma          | USA          | Igalia            |
| Philip Chimento        | PFC          | Igalia            |
| Martin Alvarez-Espinar | MAE          | Huawei            |
| Luca Casonato          | LCA          | Deno              |
| Peter Klecha           | PKA          | Bloomberg         |
| Michael Ficarra        | MF           | F5                |
| Linus Groh             | LGH          | Invited Expert    |
| Tom Kopp               | TKP          | Zalari            |
| Shane Carr             | SFC          | Google            |
| Eemeli Aro             | EAO          | Mozilla           |
| Christian Ulbrich      | CHU          | Zalari            |
| Sergey Rubanov         | SRV          | Invited Expert    |
| Chris de Almeida       | CDA          | IBM               |
| Peter Klecha           | PKA          | Bloomberg         |
| Ron Buckton            | RBN          | Microsoft         |
| Guy Bedford            | GB           | OpenJS Foundation |
| Justin Grant           | JGT          | Invited Expert    |
| Mikhail Barash         | MBH          | Univ. of Bergen   |

## Conversation on note summaries

MLS: So specifically, I want to talk about summaries. This was discussed at the beginning of the meeting yesterday.
.TXT we traditionally take near verbatim trips. We have done this, before we had transcription, we did this manually. But it provides all the details of the discussion. And each of us has the opportunity to go back and to make changes to those. I often do that to make sure that when I say um, ah or whatever, clarify or if I wanted to say it differently, that’s what I do. A summary is a little bit different. Most of the rest of the TC’s, include summaries for each of the topics discussed. It is just to start with, what was discussed. So discussing this proposal for Stage 3… And in that, slides are presented, whatever. And the link to the slides would be good. But the summary, it needs to include the salient points, the things where there was in depth discussion back and forth, and if during those salient points of the discussions, one method or one approach was chosen over another. That should be noted. And there should be a conclusion. What was the discussion reached during the discussion: “We agreed to move this to Stage 3. I will take the groupBy, pending review in this case, and that includes the next extension.” So any next steps should be include there as well. It doesn’t have to say who said what. It’s better if it doesn’t. But what was discussed, what – where was there tension, how was that resolved and what was the end result. Any questions on what w – coming up with a summary?

DE: How long do you think the summary should be?

MLS: It depends, maybe a few paragraphs at most. For really involved topics of disagreement or some discussion back and forth on several unrelated things, they would reach, you know, have some statements. It shouldn’t be as short, as know: “this was discussed, we agree to go to Stage 3.” You know, what issues were discussed or important for somebody to consider when they review that summary.

DE: Are there some topics that not need summaries?

MLS: Prior to this meeting, we reviewed the summaries in the minutes, and we agree that they were correct. You’re down to one sentence. Everything should have a single sentence, even a ECMA-404, 404 stable, no changes since the last meeting. Done. So thanks.

MLS: Any other questions? Yeah?

ACE: I love summaries. They are great. The thing that is hard is that there’s tension between captioning live and holding each other to account, but then people might think that this holds up the meeting versus putting the onus onto volunteers after the meeting chasing people up, which takes a lot of time, trying to message people, “have you done this yet?” And . . . it would be good to decide which one we are going to do and try to stick to it. If we are going to do it in the meeting and or not have agreement on this. Right now, there’s a tension and I don’t know how to solve it

MLS: Daniel have called, have we captured that. And I think that’s a good time to do it. If we do it later, I think we are not going to remember what was discussed or we miss a point or to and we don’t want too that obviously. If it takes us 30 seconds or a minute to write it down and we have, you know, our note takers, which are assistants, and if at that time, the presenter and people that made comments go into the notes and write down what needs to be put there for a summary, and then we say, okay. We are done. We can move on to the next topic, yes, we can add one or two minutes to each topic. But it’s not onerous. It’s far better than we get off the call, remote only, but now we have to track people down. What did you mean? Did we capture? It’s unwieldily at that point.

DE: Should the summary include the key points of the presentation? Or only the key points of the scent discussion?

SHN: Yes. First, thank you for doing this. I mean, it’s not easy. You’re all doing a lot of work ask asking yet to do something else. Maybe one thought is, you know what you are going to present before you come here. And you may already have a little frame of some bullets of what you are going to present and fill in the results of the conversation, and cut and paste it in. So it may save a bit of time. To make it more effective during the meeting. Could I project something on the screen, please, if you don’t mind. Yesterday, I reviewed all of the notes. It was excellent at reading. 100 pages. The minutes are always good. The summaries, the ones there, are always good. I have put it there. I haven’t put names. We haven’t got summaries for some. Some of the summaries are short, as Michael said, one-liners about the document and it points to the slide. Perhaps that . . . there are other discussions that have taken place, and I am going to scroll down. Okay. Nothing for the Code of Conduct and the public calendar. Maybe a few words to add there. Perhaps for some of the other discussions, there were detailed discussion and maybe we can write a few bullets. Here were the key points discussed and it would be helpful the for summarizing the objective of what you’re discussing. List of points and the conclusion and next steps, similar to what Michael was saying. If you want to do it in bullet form, it’s okay. It doesn’t have to be paragraphs. It would be very helpful so that is my input and example. I did have a chance to go through notes. Some need more work.

MLS: For normative things, there where pull requests, it was discussed, and we approved it.

DE: So sorry. To understand, should the summary include parts of the presentation? You were talking about writing a summary of the presentation beforehand and copying and pasting it in. I think that’s a good idea. But also, we have heard people say specifically, that the summary should not include the presentation because that would be redundant

SHN: I don’t mean – not the entire presentation, but if you present on a subject, you may already write the subject to be discussed, the key points to review, and then they will be a discussion. You know what it’s going to be. I have a frame to start and easier to do. Choose a method that is most convenient.

DE: That sounds good to me. It should include, a summary of the presentation, a short one and the discussion . . .

MLS: Not the whole presentation, but important things discussed.

DE: For the people who presented on things that don’t have summaries, would you up for going to the notes of yesterday and writing those summaries?

SHN: I just, again – you need to decide whether you want to do it today, during the meeting, or do it off-line and we will review it tomorrow. I leave that to you, based on your agenda and the discussions. And what would make most essential so we don’t lose track of what is going on.

DE: Yeah. Currently summary writing is done maybe half the summaries are done by the same couple of people who are filling it in later, rather than the champions. The idea is to move it to the people who presented to write the summary.

RPR: Yes. I think that’s always been the intent, is for the champions of the people who have normally verbally dictated a summary and it’s not definition of the task to be done, but it’s the incitement and encouragement of those people to, then, fill it out afterwards and that’s something that we’ve struggled to achieve in the past.

SFC: On the surface this sounds great. But, this sort of synthesis of discussion down to like 3 bullet points is going to lose details. And I fear that it favors the loudest voice in the room. So like, it’s good as a supplement to the full transcript. It makes sense if like the proposal champion writes, here is the main take away. That’s fine. But it should be a supplement and not a replacement.

RPR: And EAO?

EAO: Is it a shared responsibility or a dedicated person in each discussion that summarizes this way?

SHN: Many of the other TC meetings in Ecma are much smaller than the group that we have here and the discussions may not be as lengthy. And there is one person that does write it.

MLS: There’s typically a secretary.

SHN: A secretary. They are there in the meeting writing and doing it together with the team. Imagine that the other standards groups are maybe 5 or 10 people. Much easier to manage.

EAO: Are the secretaries provided by Ecma –

SHN: Either me or my colleague.

EAO: Okay.

DE: Totally agree with SFC: We need transcripts in addition to the summaries. We should not consider 50 or 100 words to be a hard limit. That was an example. In particular – it’s important to capture this thing about favoring the loudest people in the room, if there’s subtleties to capture, that’s fine to include it, even if it makes it exceed 100 words.

RPR: So it sounds like SHN, you have your list of people being requested to handle that. And then I guess for the rest of this meeting, we can try to spend 2 or 3 minutes projecting up the notes at the end to write the summary live, we have done that in the last couple of meetings and it seemed to have worked quite well. All right.

MF: Along the same line as SFC, I feel that trying to summarize the presentation content instead of the discussion is just going to lose nuance. Many people will come to rely on only the point that is in the summary, not the actual full discussion, and I just don’t see much value there. I think that capturing the discussion summary is fine. But I really would prefer not to try to like summarize presentation content. Also, I think that for many of the meta topics, like the editor update and all of the things at the beginning of the agenda, non-proposal and non-discussion items, I think that they pretty much stand on their own in that I don’t really see the value for this. Somebody said yesterday, why have a summary of a summary? The entire content is the summary. That’s how I am feeling about this. It’s not a thing that I won’t go along with, but not a thing I prefer.

DE: Thanks for raising this, MF. You had raised it yesterday. It’s important to come to a shared conclusion on this as a committee, whether or not we agree to use summaries for these cases. I think these sorts of topics make sense to write a 2 or 3 or 4-bullet point summary on. They are summarized that describe things that happen. So I don’t understand the point you’re making.

MF: If I look back to just the summary written yesterday, for like the 262 update, it was like the committee approved or is happy about the editor update. It’s something that didn’t need to be said and was applying a judgment to the update. And there’s no need for us to come to any judgment on it. Content was consumed, the end.

DE: Yes, the summary I wrote for your presentation was not good. It’s great if we could write a better one together.

MLS: In reply, I look in the transcriptions to find something and sometimes we discuss things on one day and come back another day. Summaries make it very helpful for me to find where we talked about that. So I find the summary and I go look in the transcription. That’s just me.

RPR: And it sounds like SHN is doing the detail of each point. That would be something that if SHN and yourself could talk about, to see if a summary is appropriate. Thank you. All right. Good stuff. Thank you for raising this. This will help improve quality of notes.

### Summary and conclusion

The discussion summary and conclusions needs to include the salient points, agreements reached and next steps. The summary should not be as short as: “this was discussed, we agree to go to Stage 3.” It should highlight the most essential items so not to lose track of what is ongoing. The summary should indicate the issues discussed and important points and provide clear indication of what to consider when anyone reviews the summary in future.

## Stage 3 update of Intl Locale Info API

Presenter: Frank Yung-Gong Tang (FYT)

- [slides](https://docs.google.com/presentation/d/1mJS1ZHnUr66nq9P4HZUrGzaujVS1nI_Rmpf7SoPIiso/)
- [proposal](https://github.com/tc39/proposal-intl-locale-info)

FYT: Thank you. Hi, everybody. Thank you for coming for today’s presentation. Sorry I cannot be there in Norway. I am going to talk about an update about the stage 3 proposal locale info app and this is not for any other stage of this, but give you a update about what API currently is and there’s I think one of the normative PR consensus to agree upon this. The motivation for this proposal is that we try to expose locale information, such as week data. And our cycle and on and so forth using the locale. The history of this proposal is that we have advanced to Stage 1 in 2020, in September, and in January 2021 to Stage 3, in April 2021, and have come here and it gave some of the update.

FYT: A couple things changed after the Stage 3, one in December 2021, we have changed the order in the list. And also, I think more importantly, that we figured out that we have to change the getter to a function because a lot of those functionality or expose API as a returning object. And we decided to change to a function instead of getter after Stage 3, which is unfortunate that happened in the Stage 3 period of time. Not only that, we figured out that the – those functions should have a get prefix. So one new issue that I want to bring your attention that actually is related to some effort with the Ecma 402 other part, which is we try to look at across to see well, is there anything that should – in the locale extension, impacting the functionality and we figured out one thing that actually should be considered is that Intl.Locale currently, we do not take the fw value key words, the fw keyword and type was defined in UTC #35 to override where provide a presence for the first day of the week. In all other preexisting Ecma API, that have no impact to any functionality. In this proposal, because we return a week data, it should be able to impact the return value of the week – the week data. Whenever you say there is `fw`, on Tuesday, the first day of the week, it should be Tuesday. Or Sunday. Or Monday. So that is the background. And the thing is defined in the UTS #35 in the consultation. And actually, it was originally introduced into UTS #35 in the revision 41 in 2015. Which is about eight years ago.

FYT: So in order to reflect that, it means that we have this PR. What is it that it means? It means for Intl locale, we need to add an `fw` to the RelevantExtensionKeys internal slot. Currently, have some other key for that like `tz` – not `tz`. `ca` for calendar, et cetera. But `fw` was not there. It needed to be added. Internals will have to have a first day of week to remember that. In other Ecma APIs we always, whenever we add that, we also allow that value to be read from option bag. That means we should also read the first day of week from the option bag which have the value could be “mon”, “tue”, “wed”, “thu”, “fri”, “sat”, and “sun”. Those are in the our choice. Those synchronized with the Unicode locale extension. It’s defined in UTS #35. It has to be the same. But also, because we supply this information, we should also be able to – by the way, that option will be default to `undefined`. People don’t define that, they will be undefined. We have to add a getter to first day of week to return the value, if the locale extension was provided or the option back have that Valerie of after all the thing adds, get week info, the first week – sorry, I think the first day, I type it wrong here. It should be the get week info first day, the valued will be based on the internal slot first day of the week. So this is a required change in the PR for [PR #70](https://github.com/tc39/proposal-intl-locale-info/pull/70). Thank you, Andres from Mozilla to raise this issue. We have this PR that have been discussed in the TG2 about that.

FYT: There are also other thing discussed related to this, and in TG2. But later on, we will decide, well, we shouldn’t made that [chismt] the issue is is that because now we are adding `fw` to this, so there are currently have 3 different way in ECMA262 42 to represent the idea of day of week. In the Date API, the Mondays represented by 1. And the Sundays represented by 0. In Temporal, the number 1 represents Monday still. But Sunday is 7. But also, as I just mentioned to you, Intl.Locale, W string you have to take the 3-letter words for that. So it becomes 3 different representations. So what we have discussed, in the TG2 is that, well, in the get week info, the first day, and the weekend, the information, should that change 1 to 7 to the 3-letter form. And through discussion, we should keep this and not changing it. So it will be better to operate with the Temporal date of week proposal. That is discussed and TG2 other people think that shouldn’t be the move. It’s not in this PR that have been discussed. There are several remaining issues and I am going to tell you that this detail today because this hasn’t been fully discussed doing TG2. But next time I will bring it here. One is how well the CA, the calendar extension impacting the `getWeekInfo` currently the language in the proposal is very vague. It just says it will be considered. Right? But there are issues, I think, about the order, whether the CA will have more important order than an other extension called `rg`. Et cetera. And I have to send, ask CLDR and Peter and Mark from Google about that. I am waiting for their reply. Instead of writing our own spec, we can maybe just follow their specification, if there is something, maybe we need to repeat it or refer to that. But I think we need to have a conversation with them. The other issue have been discussed, haven’t been, but will be currently the get TimeZone, if the region tags basically return – I think we return nothing, but there are discussions for Andres from Mozilla to apply to max that. The other consideration is the getTimeZone, the naming for that could have some forward-capability issue. And if anyone have interest about these three topics, please join the discussion issue and/or a TG2 call. And we tried to have some at least some common understanding before bringing to the plenary next time.

FYT: The main focus is really requesting from committee to have consensus of [PR #70](https://github.com/tc39/proposal-intl-locale-info/pull/70), which is adding the `fw` or the first day of week, the scope of – this list of five thing. So here. Sorry. The thing, this should be first day. I’m sorry. I have a typo here. So that’s my request. And also, like to tell you that I hope that Firefox can have a commitment to ship the thing, and also my goal is that I am hope to go targeting to Stage 4 in November. But this is just basically what we asking. Any questions?

RPR: There is one item in the queue from EAO.

EAO: Hi. FYT. Sorry, I missed the last TG2 meeting where this was discussed. I am confused whether or to the proposal is to add a “mon”/”tue” string identifier for weekdays as a new thing to JavaScript outside of the `fw` subtag or is this proposal continuing to support our current practice of using numbers for weekdays?

FYT: So the thing, the answer is this . . . right. First of all, if you have locale identifier, you have less say `en-u-fw`. It has to have the 3-letter code.

EAO: That’s clear and fine.

FYT: The second thing, because of that, option, we read option – you can have option to have first day of week and the value have to match that. So you can have – passing object, the object first day of week, then a string. Of the 7 value. Right? And because that, then whenever you have a get and to read that information, a getter for the Intl locale, first day of week it has to return whatever you passed in. The principle in ECMA-402 is whatever you put in the option should be the same thing you return from the getter. Right? So basically, that 3-thing would be in the three-letter code. But we are not going to change is the get info, the return get info. That stayed with 1 to 7.

EAO: Can you clarify?

FYT: But the value of that, well, could be changing from – instead of 1, it could be 2. Tuesday. The first day should be 2, instead of – it won’t – will not be “tue”, but it will not be 1, which means Monday. If you have fw-tue,, that means or if you have the first day of week, “tue”, then the get info first day will be 2, not 1. Because override it.

EAO: Could you clarify why do we need the string “first day of week” option?

FYT: Right. So the reason is that in UTS #35, it has that defined as in the locale. Right? So in the locale specification, there’s a way to transfer that. So there are regions where their culture may have some way to say, the first day of the week is Friday because, for example, in some Muslim or Jewish country, maybe the city government or some business, their locale is their starter first day of week not in Monday or Sunday.

EAO: I don’t think . . . can I clarify my question; because I understand that this definition does exist. And for parsing the `u-fw` subtag, I understand why we need to support the string identifiers. What I do not understand is why when we parse this and represent it as an option value we cannot continue to use the integer representation of these weekdays that we are already using in different places. Why do those need to be strings rather than the numbers 1 through 7?

FYT: So you’re saying, in the option bag, first day of week, why it cannot be 1 to 7. Is that your question?

EAO: Yes

FYT: The reason, that value should match – to match with the Unicode extension. That’s currently how we do it. For all other options. Unless we want to break the precedence. For every other thing, we have locale, for example, `hc`, instead of return – using `12`, for the option bag, we use `'H12’`. Right? So there are also synchronized. The option bag is just yet another way to passing that information

EAO: I think what is happening here is that we are breaking precedent either in one way or a different way.

FYT: What precedent are you talking about?

EAO: Declaring days of week. Currently we have existing numbers that we are using, and numbers that we include in Temporal, and here we are doing something different.

SFC: So there’s two things going on here: so one is there is the Unicode locale extension, which is defined by UTS #35 to have the set of strings, which are not novel to the ECMAScript standard. It’s the case that when everywhere else in Int.Locale where we consume the extension key words we reflect the strings in UTS #35. So by using the integers in this case, we are breaking precedent in the sense at that the strings that come from the unicode are no longer the values in the getters and setters.

SFC: However, this is also the first case where there is an unicode extension keyword that is already sort of has a definition in the rest of the ECMAScript 262 and 402 specification. Right? So, for example, with hour cycle, those sort of originated in the unicode key words and then we sort of took those strings and those strings are used where they need to be used in ECMAScript. In this case, Temporal and JavaScript date, like, have already defined the integers values. There’s one other case that is sort of like could be considered something we could look at and that’s time zones, where currently we don’t support the `tz` extension on unicode locales. But if we were to do that, those would also have a different syntax because the TimeZone identifier is coming are not the ones at that are in like Temporal TimeZone. We don’t currently do this. But if we were to do this, then this is also a suggestion where this discussion could be had.

SFC: So we discussed this in TG2 at length last week or two weeks ago and we decided that, like, we wanted – that this is the type of discussion we should escalate to TG1. We came in the initial recommendation that, like, the getters and setters that are specific to the unicode locale extension, should volume the unicode locale extension and not specific to those should use ECMAScript standard to the 1 to 7 numbers.

SFC: But you know, yeah. This is something that would be good to get feedback on from more people than the two of us over here in the corner.

DE: Having not thought about this for very long, I like the idea of using numbers because of its correspondence with Temporal. And I think it will be important to, for example, accept the Unicode names as inputs in the options bag.

DE: But if we’re in resolvedOptions(), I think – or in, you know, LocaleInfo, I think it makes sense for these to be numbers.

FYT: DE, that’s not the question. The question is whether we use that when the constructor reads the option bag.

DE: Oh, if we are talking about the constructor reading from the options bag, we want to just accept both. I thought we were also talking about getting it from LocaleInfo. If we are reading it, it’s clear we should accept both.

FYT: So should we also read – support zero for Sunday?

DE: Why not? I don’t know. There’s no ambiguity that would create.

EAO: Are we considering locale subtags like `u-fw` as only an input that we parse things out of, or is this something we are considering need to also be able to output?

USA:I think both of them because you can construct a locale using the constructor, and then serialize it to parse it around.

FYT: Right

USA: It would be string.

FYT: Right. So the issue is that this get – what the get first day week getter will return? Right? That’s the output.

USA: I think – I understand DE’s concern line, for something like IDML?, all about locale data, it’s kind of unfortunate that we use these strings that have the sort of English names of the read day . . . because something needs to interface with other systems that also implement this, the same way, I think this discussion of, you know, if we should replace the strings with numbers, should ideally happen in unicode because everything else would still stick to what is specified in unicode. Also, things like if Sunday or Monday should be 0. Like, there’s no clear answer to that. Right? Because it might assume something different based on your context.

RPR: We only have 6 minutes remaining on this topic, Frank. Carry on with the queue. It’s SFC..

SFC: Yeah. I wanted to clarify, if FYT you can go to – yeah, this is the right slide. So on – you know, there is input and I couldn’t tell put. So, like, on input, so the only place where these strings are returned on output is the Intl locale.prototype.first day of week getter, which is the fourth bullet point on this slide. So the first day of week getter. That’s the only place where the strings are proposed to be returned from this API and that’s because they correspond to – this is a getter for exactly the unicode extension keyword. This is not the week info. The line this bullet point 5 is the week info and that will return the integer values. As proposed, that’s my understanding of what is being proposed here. So . . . I want to clarify that, like, I don’t think anyone is proposing that we use the strings in the part of the API that we expect use the interface with Temporal. Like that’s definitely something that that we value, that we discussed at the TG2 call. But the question was like the get – is specifically extremely narrow. It’s been a very narrow question and that is, for the individual getter and setter on Intl.Locale locale subtext do we use the numbers or the strings? So it’s a very narrow question. And FYT is proposing we keep 1 to 7 for all the stuff there. This is the new getter and setter for API 47

EAO: I am not going to block any of this. I am just really quite uncomfortable with a third definition of weekdays. We should be able to avoid this. It’s unfortunate if we can’t.

FYT: The third definition is avoidable. Because the locale is already defined by UTS #35. It’s not something we can avoid.

RPR: We had a +1 for EAO take.

DE: The goal of our APIs in Intl should be to expose Unicode algorithms in a way that makes sense from a JavaScript perspective. If JavaScript defines weekdays as 1 through 7 in Temporal, that’s the thing we should use for output and accepted as input, in addition to the Unicode values, which I agree is necessary to interface with.

RPR: All right. FYT, I have 2 minutes remaining.

FYT: So I want to ask for consensus with that or do you think we should wait for more discussion? Anyone want to block this PR?

DE: Let’s have more discussion. If you’re not going for Stage 4 or anything today, there’s still things that need to be discussed, let’s continue this in TG2.

SFC: I want to say that we already spent time discussing this in TG2 and we wanted to go to committee to get a recommendation, if the committee to give recommendation. I don’t think we will get any further if we keep discussing this. It sounds on, based on the 3 people speaking, 2 people weren’t in the TG call, DE and EAO on the two corners we should use the numbers. Let’s use the number for all the output and accept the strings as input. And then move on.

RPR: Thumbs up in the room from MLS.

DE: I would be happy with that, but we don’t have a PR to agree consensus on.

RPR: The question is to FYT, are you in principle happy with that conclusion?

FYT: I do think I need to think about that. I do think there may be consequence that could cause problems. I mean, this first time I heard people suggest that. I don’t feel comfortable to agree upon that.

RPR: And USA has a slight concern.

USA: Yeah. I just wanted to note on the topic of using the numbers for output, that might harm interoperability since I suppose the output would be used for that as well. So yeah. We should discuss this further and also with people from unicode.

DE: So was this idea not raised in the TG2 call?

FYT: It was not.

DE: Okay, So I would like the next step, be a further discussion, even as it would be great if we just conclude here.

FYT: So we can – so my understanding, we cannot reach conclusion for that one and bring the consideration for using number as output from the – and input also to the option bag in TG2. Is that okay?

RPR: That sounds good. Okay.

RPR: Okay. Thank you.

FYT: Thank you.

RPR: To one of the note takers project the notes, so we have captured the summary. Frank, if you would like to project the notes . . .

FYT: I don’t know how to do that. Let me see

### Summary and conclusion

Consensus was not reached for the proposal Intl Locale Info API, [PR#70](https://github.com/tc39/proposal-intl-locale-info/pull/70). This item needs to be addressed TG2 for discussion, if taking/using the number 1 to 7 as the input, the option bag, and also as a return value for the first day of week.

Summary: The key arguments is that: Temporal already have defined 1 to 7, away from the dates, so we should not have a third way to do the weekday representation.

Currently in Stage 3, already for a while, including the current issue there are three more issues and will be discussed, Issue 30, issue 71. Issue 73, in the coming TG2 and hopefully reach Stage 4 by November. Noting both Chrome and Safari have shipped this version, but not Mozilla.

## Stage 3 update for Intl.DurationFormat

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-intl-duration-format/)
- [slides](https://cloud.igalia.com/s/gsytCTdNg9o2WNg)

USA: All right. Hello, everyone, again. I would be giving quick update and won’t take a lot of your time and present two normative PRs we have come up with. If any of you remember, I mentioned during the last meeting while presenting normative PRs that it’s going to be the last round of normative PRs. If any of you are going to call me out on that, I can explain.

### [PR#150](https://github.com/tc39/proposal-intl-duration-format/pull/150) Normative: Revert to previous behaviour by setting fallback value for fractionalDigits to *undefined*

USA: The first one is actually reverting the PR that we got consensus on last time. So the problem is that while trying to get the whole fractional digits to work, we – and discussing further in TG2, we realized problem with going with a specific default like we were is still that having fractionalDigits as a set value would lead to the resolved options, resolving to something that would not be ideal.

USA: So actually, it is a better solution to keep the value undefined. Now, it’s – it’s a new something. Like we have never, like, resolved something to undefined. We usually always have some default. But in this case, we have strong reasons to believe that keeping the resolved value of fractionaDigits undefined is good because the undefined behavior would mean that unless you set a set number of fractional digits, what you will see is exactly the size of duration. It would not clip the value in any way, which is the preferred default behavior, but was hard to achieve. So this is essentially reverting back to the old behavior. And realizing exactly how to deal with it. So there’s an example.

### [PR#158](https://github.com/tc39/proposal-intl-duration-format/pull/158) normative: align ToIntegerIfIntegral with Temporal

USA: And the next one is corresponding to a normative change that happened in Temporal during the last meeting. So there’s a funny – the like the name is called ToIntegerIfIntegral. It takes a number and if it said integer, it makes – it’s fun. But it’s one of the abstract operations that are from Temporal that used for processing durations because, of course, durations need to be integral within the subunits and this was changed during the last meeting in Temporal. But we need to backport the change. We need a rubber stamp on that. These are the two changes: DurationFormat is looking in good shape. I believe we are very close to calling it a day. But I would like to hear your thoughts abouts these two changes. Let’s see if we can get consensus.

### Queue

SFC: Yeah. You said that the duration – is in good shape. I wanted to clarify what the status is of the 15 open issues that are still in the repository. There are five new ones opened by Andre Bargull about a month ago and I wanted to know, are any result in normative changes, are all editorial or part of v2 – it’s good to be more clear on what the status is of all the issues.

USA: I can actually – yeah. Open the tracker right now. ABL has been helpful with the feedback and the two – one of – at least one of the two changes today, where in direct response to issues that they raised.

So, yeah. Most issues, however, are about improving either editorially certain things, or yeah. Like, sort of big implications like, if Temporal duration imposes certain limits would that have an impact? So, yes, like, there is a few issues that are open. But I do not believe that, you know, any of them would trigger something very existential. For example, like, the duration limits, I am not sure if we can act on this right now. But yeah. I do acknowledge that there’s a couple of issues open, so I could actually go down and close all the issues that don’t really have an effect on the future definition of the proposal.

SFC: I would be clear on, like, you know, like I think issues are fit in 3 categories: these are normative changes to discuss and one these editorial changes to do on in conjunction with stage 4 and are feature requests that are out of scope. It’s clear to delineate which issues are in which category, and if there are part of the discussion, we should escalate those in the TG2.

USA: There are labels but I could triage so that’s it clearer, what’s the case. There’s three issues that are tagged normative: two of them are being presented right now. And another is a duplicate. So I do believe at the moment, that this hopefully going to be the last round of normative changes. But yeah. I could clean up the rest of the issues to make sure it’s the case

SFC: It’s good to make sure all the issues are labeled and triaged because yeah. It appears like some of the issues are labeled and triaged and others are not. It’s good to make sure we have covered all the bases and there’s nothing we are missing.

DE: Yeah. I like SFC’s idea. And maybe we should think about doing this sort of review of issues for Stage 3 proposals in general. USA, you mentioned something specific which is that you couldn’t decide yet what to do about potential limits on durations that Temporal might have. In this meeting, we are going to hear the Temporal’s proposed conclusions on that. Right?

PFC: Yes.

So could you – Do you have a proposal prepared for if the committee accepts the proposed duration limits? What the implications would be for duration format?

USA: I could put a PR for either case. I suppose. But yeah, I had been meaning to do that after this meeting.

DE: Great. That’s one further anticipated change. Once you do the triage of the issues, it’s good to get back to us with the anticipated changes. And yeah. This is exactly the kind of thing that would come out of the thing that SFC is asking to. It would be a good thing to include in Stage 3 presentations.

USA: Right. Thank you.

PFC: My understanding is that DurationFormat doesn’t do any arithmetic on the quantities. I don’t expect there will be much change needed as a result of the limits on the Temporal quantities, if any at all.

USA: I agree. It’s just like a sort of specific issue that was opened to sort of discuss the implications of whatever ends up being the final change. But certainly, it doesn’t have to be a big sort of change if how duration format works.

DE: I am really confused. Is there a normative PR or not?

USA: It’s unclear. Like it’s only a discussion. It’s only an open issue to discuss the implications of that change.

DE: Okay, You haven’t worked it out yet. Okay. That’s fine. Good to understand that.

USA: It’s just to like track if the duration format changes like what’s the conclusion and then to make sure that we discuss this within the context of duration format, but it doesn’t need to have a . . . all right. That’s the queue. I suppose. Thanks for your feedback.

USA: Does anybody object to the changes I proposed today?

RPR: There are no objections. Visible in TCQ or in the room. So I think you have consensus.

USA: Perfect. Thank you.

RPR: All right. So ACE notes that we are missing a link to the slides in the agenda.

### Summary

- Two normative changes ([PR#150](https://github.com/tc39/proposal-intl-duration-format/pull/150), [PR#158](https://github.com/tc39/proposal-intl-duration-format/pull/158)) achieved consensus
  - #150: Revert previously approved normative change to how fractionalDigits works in DF.
  - #158: Backport a change to the ToIntegerIfIntegral proposal in Temporal.
- Still need to spent time reasoning about
- Open issues need to be triaged and labeled

### Conclusion

The two normative changes that were presented achieved consensus and we need to spend some more time talking about the implications of the conclusion that we reached regarding the limits that end up being imposed on Temporal duration.

## Base64

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-arraybuffer-base64)
- [slides](https://docs.google.com/presentation/d/1ng6v9I6-jJSUPB-YNxjnHYFDzaL136lb7FpTKRxHhNM/)

KG: So this is just an update on the Base64 proposal. The name of it still says ArrayBuffer, but it’s not ArrayBuffers anymore. The proposal is currently at Stage 2. At the last meeting, there was some feedback and asked for it to support, in particular, writing to an existing ArrayBuffer. And we have been talking about how to do that on the issue. And we have a rough shape on how to do that and some open questions. So I want to get the committee’s feedback on all of that and hopefully confirm that we are happy with the design as it is here. And then I can come back for Stage 3 later, after writing up the spec text. Right now, there’s no spec text for this because I didn’t want to do all of the work to specify something without first getting the committee’s approval for the design.

KG: Recap of the proposal: there are first these one-shot methods, where there's a static method on Uint8Array and gives you a string by Base64. There’s a prototype method that gives you a Base64 encoded string. And there's hex versions too. Nothing has changed.

KG: In addition, there will be these streaming methods which require managing a little bit of extra state. So they’re not annoying to use. But not very complicated to use. Where the idea is that you pass in these extra parts into subsequent calls to the streaming methods. And then do this repeated until you are done. And this gives you chunks of, in of case of Base64, chunks from your strings. And in the case of it gives you Base64 encoded string chunks. Uint8arrays. Right now there’s no hex versions - or in the version of the proposal I presented at the previous meeting, there’s not hex versions of these because there is no obvious reason to. Base64 is much more complicated than hex because with Base64 you have these – this like thing where you get 3 bytes of input correspond to 4 encoded characters and so you can have state where you have one byte and you need to seek 2 more before you can emit the Base64. It doesn’t come up with hex because the correspondence between input bytes and output characters is more direct.

KG: There’s no changes to the one-shot methods at this time. And 99% of users will end up using that. But we need to work out the more powerful versions. So concretely, if you are using fromPartialBase64 in the version of the proposal, I presented previously, this is what it would actually look like in your code. Iterate over your chunks of input, and call from partial basic 64 repeatedly. You would have to pass this true argument on every initial call, and then more false on the last one to generate padding.

KG: With the updated design, the way that we are managing state has changed. So that instead of keeping characters, so a substring of the input, instead we keep this pair that keeps track of individual bits from the input. This is nicer because it allows you to output more bytes and keep less stuff in the state.

KG: You can always completely consume all of the input as long as your input is correctly padded or is the final chunk and there’s no bits coming in and subsequent chunks. So you don’t need a final call to say, oh, there’s no more input because you will have always consumed all of the input that is possible to call.

KG: And this does mean that you don’t get enforcement of correct padding automatically. But it’s trivial to check if you want to. I should mention most Base64 decoders don’t actually check that the padding is correct. So it’s up to the user to do that themselves, if they want to, with this design, which is the final one here.

KG: And then there’s no change to the `toPartialBase64`. You still need to pass this parameter with `toPartialBase64` no matter what design we go with as long as we can’t individual chunks to be correctly padded, which is like a property to preserve. On the final chunk, if you had finalizer,, only two bytes of input, you need to pass `more: false` so that it knows to generate padding characters. Rather than keeping extra state assuming that you will call it again.

KG: The main change since last time is support for writing into an existing buffer. I am going to show you one thing that that could look like. There will be some open questions later. So don’t get too hung up on the details but the broad strokes are here. So basically, and I realize this is a lot of code to be throwing at you. The idea is you have this partial Base64 into method this takes an output and input parameter, and rather than – as previously giving you the result, as one of the things that it gives you back, it gives you read and written, which counts of characters and input rather than bytes . . . obviously, and it is up to you to call substring and subarray on the input and output respectfully, and consume the output buffer once it’s full, and then you have consumed all the input, it’s up to you get a sub array of the output array for a number of bytes that it ends up containing.

KG: None of this is very difficult. This is like the complete code that you would use in real life, except not with `console.log()`. You would do whatever it is you’re doing with each chunk as it comes in. This is broadly the design I am asking for the commitee’s feedback on. The read and written and the general shape of it One question that there’s debate about is offset parameters. Basically, I mentioned the user needed to substring and subarray themselves, a possible design would instead be to take an input offset and output offset from that address the part of the buffer that user updates, to not create these additional views [TypedArrays] of input and output themselves, which may be important. I know we are had feedback from Jarred Sumner who is working with JavaScriptCore and Bun, saying that subarray is expensive because it involves making a copy of the backing buffer the first time you do it because most buffers don’t have more than one view [so they can be allocated inline, whereas ArrayBuffers with multiple TypedArrays pointing to them need to be allocated out of line]. So there’s a slow path for making a second view. So by having explicit offset parameters, we allow not creating these views. On the other hand, it’s probably not that bad. And it makes the API more complicated. Conversely, it’s not like you are forced to use the input and output offset parameters, and the code that I have on the previous slide would work exactly the same even in a world which they existed, you could not simply pass them. I would like to get the committee’s feedback on that.

KG: The pros and cons, as I mentioned, my preference is to not have these parameters. Keep the API simpler. Take the performance of creating subarrays. It’s probably not a big deal and if it is we can expand the API later.

KG: Next question is whether to have a separate method. So as I presented earlier, it has this additional method with an additional parameter. But of course we could instead have an extra argument to the options bag that would specify where to write the data. I think the writing to existing buffer case is pretty different. There’s also precedent on the web platform with separate and code versus code on text encoder. So I think it makes sense to have a separate method rather than just an additional options bag parameter. It does mean there’s more methods. So there’s also a question of do we want to have support for doing this for hex? I mentioned, there’s not in the previous version of the proposal, there was no reason to have streaming support for text, if you’re writing into an existing buffer, you do need streaming support for text. Maybe it’s useful? The main down side is additional methods. I guess, we should do this for hex, just for consistency-sake. It’s not like it’s that much extra work to specify or implement. And it probably is useful in some cases. And then last thing is just the names for these things. So `fromPartialBase64` is a gross name. Is `fromChunkedBase64` better? We need an actual name before Stage 3. The “chunk” names are what I am considering the both candidate, but maybe there’s some more reasonable thing here. So if we make all of these changes, this is what would be the proposal. We would have simple versions, the one-shot versions and then we would have from chunk and to chunked methods. And from chunked into methods. Of course there’s no `toChunkedInto` methods because we don’t have a string buffer type in JavaScript. I should note that I am not showing the full API here because of the Base64 methods take an additional alphabet parameter in the options bag whether to use the [SEB] safe variant of that or not Yeah. Let’s go to the queue. That was all I had.

RPR: Waldemar is on the queue.

WH: What is the type of `extra`? One of the slides shows `toPartialBase64` called on a chunk to produce an `extra` and then `toPartialBase64` called again on the `extra`. On the previous slide `extra` was a pair of things. Are the types of `extra` here different?

KG: Yes. The types of `extra` are different. In `toPartialBase64` case, it’s an Uint8Array because it’s bytes of input. And so you can do this final call. The – this kind had has to fall out of Base64 being a prototype method in that you need some way of evoking the prototype method with the last piece of input. But that’s not relevant to fromPartialBase64. Because it’s a static method. And also, because you don’t have a last piece of input. You just read all of the bytes. Yes, the types are different. The user doesn’t care because they just are round tripping this back and forth.

WH: Yeah. I just find this to be just a bit of a point of confusion. I wonder if we should call these different names. But I am not sure. To understand how this is supposed to work, I have a related question: If you call `toPartialBase64` on the last chunk with `more` set to false and provide an `extra`, then what happens?

KG: What are you calling it on?

WH: Let’s say you have 5 chunks and on the last chunk, you pass `more: false`.

KG: So that works fine. But if you don’t know how many chunks you have up front –

WH: Yeah. It’s more of a clarifying question. If you say `more: false`, then what will you get output as the `extra`?

KG: In general, if you say `more: false`, extra will be either undefined or an empty typed array. I haven’t actually . . . I forgot which of those two it was. I think an empty typed array.

WH: In this thing, the `extra` is just unprocessed data — it has not been emitted because you’re not at an exact multiple of 3?

KG: Yeah. Exactly.

ACE: So yeah. I love this proposal. The offset parameters sound like a good idea. And they don’t sound – I do like the idea of keeping proposals simple and breaking them up where it makes sense. This subjectively, from my opinion, this doesn’t seem like a large enough change that it would – move this out of a simple, minimal API into something much bigger. I still consider this in keeping with a simple API, and especially as Jarred said, the workaround to this is potentially expensive in at least one popular engine so would seem unfortunate that there could be a period of time where people would have to do a slower path, and if there’s a small follow along and if it sounds like it would happen potentially quickly after this. Meaning that period of time would be small, this makes me less convincing of a follow along, instead of doing it as part of the original proposal. I wouldn’t block this or anything, but that’s my gut feeling when hearing the presentation

MF: I wanted to confirm that it would be safe to do as a follow on for the offsets?

KG: Certainly it would be yes.

MF: My preference is that, without performance data, I would prefer to leave them out and add them later.

KG: Ask for the committee, if I leave them out, and implementations go to implement, say we are concerned about this implementation because expected pattern, we could come back at Stage 3 and add them as taking implementation feedback? Would anyone be update with that change happening at Stage 3, if it’s a result of implementation feedback, I should say?

ACE: My gut feeling is it’s nice when things change in Stage 2 rather than Stage 3 as a general theme. So . . . yeah. So that would be my preference. If we think we have clear semantics, I don’t see why we would risk a change during Stage 3, if we can very clearly avoid it. Gut instincts here. I haven’t thought deeply about it.

RPR: DE has a reply

DE: Yeah. I generally agree with what ACE is saying. It would be okay for this proposal to go ahead as is, but the goal of making this “bring your own buffer version” was to be easier to copy in the first place. And I am pretty confident it’s possible to construct a benchmark, whether it’s performance concern in applications is difficult to really assess. But what we could assess is how many engine implement the pattern of using inline ArrayBuffers. I believe V8 does this only for ArrayBuffers at that are pretty small. And in which ways, it’s cheap to copy. So I think to do a quick survey of – in which cases this is done in JSC, and how this works out in some other engines to understand whether this really breaks zero copy.

KG: I guess I don’t really see the value in looking at other engines here. Like, if it is going to be expensive in JavaScriptCore that seems sufficient and I don’t care whether or not it’s expensive in SpiderMonkey at that point.

DE: I would – I think it would be good to check whether JSC has the limit in length for inline ArrayBuffers as V8 does. Maybe MLS knows this offhand.

MLS: I would have to look into it.

DE: But I don’t think we can take every claim this has performance overhead completely literally. And it – yeah.

KG: Okay. I guess I would request from the JavaScriptCore team feedback on this, then. I know that’s hard to ask. But I guess – well, I am inclined to do the thing that I said earlier, which is to not include these parameters initially. If implementations come back to me at the request for Stage 3 or during the implementation of Stage 3, this is in fact going to expensive, not just speculatively, then we can add them back

DE: I am happy with that course of action. I encourage everyone to do that before Stage 3. Not just JSC. If it’s noticed after, we can figure it out also.

CM: So given that the streaming API seems to have at least moderate amount of hair and there seems more discussion involved in getting it to converge, whereas the non-streaming API has immediate value and seems straightforward and noncontroversial, I am wondering if the two could be broken into separate proposals so the non-streaming version could go forward on a fast-track, while all the details that needed to settle for the streaming API work their way through the standards process. I don’t know how many iterations of plenary it takes to get this to converge. The non-streaming is good to go right now.

KG: So the streaming API only exists in the first place because it was an explicit request from the committee. The first one didn’t have it because I don’t care about it.

CM: It seems to us (Agoric) that 95% of the actual use cases are for the non-streaming API – I don’t know that for sure, but that’s our intuition.

KG:Yeah. This was added at explicit request from the committee as like – Peter from Moddable I think it was, maybe other people as well, wanted me to do this as part of the proposal. Wanted to do the streaming API as part of the proposal. So seeing it was added to this proposal, at the request of the committee in the first place, I am not inclined to split it up, I might personally like to, but we already are this way because of committee request, so . .

KG: I am hopeful, like it sounds like the decisions I presented are not super controversial which means the design is finished and need to write the specification text

EAO: Briefly, we talked about this ahead of time and kind of came to the same conclusion as CM just mentioned. We find the motivation for the streaming part of the proposal to be weak and separating these, for instance, into two proposals would help ensure that the motivation for the streaming part would also be better presented. And also, allow us to possibly evaluate first implementing the non-streaming parts of the API and seeing if that actually does answer the issues that this is trying to solve in the first place sufficiently.

WH: I am not in favor of streaming the process of adding a feature to the language. This is all one feature, we should figure out what its API is. I don’t care whether we do streaming or not, but if we do streaming, we should not split it into a separate proposal.

DLM: It sounds like the champion is skeptical about the value of the streaming version and we were a little bit skeptical in our internal discussion as well. So I am wondering if, perhaps, the people who are in favor of a streaming version would also want to present it as a separate follow-up proposal rather than in this proposal. Thanks.

KG: Is PHE in the room, by any chance?

(plenary): No.

KG: All right. Well, I don’t know what to do in this case. It was a request from him. I guess I will reach out to him outside of the meeting. And ask if he’s okay with splitting it out. I do agree with WH. Like, they need to be designed coherently. And consistently with each other. With that said, it sounds like we have a design with offset and we are happy with the streaming version. Such that, it could immediately advance to Stage 3 as a separate proposal with no further changes, if people were in favor of doing so, in terms of like motivation. So that while the design does need to be worked out, together, we could say the design has been worked out and we are choosing to only advance part of it at this time and later bring on the second part of the motivation is there. I would be okay with that split. But WH, does that sound reasonable, given that the design is effectively done?

WH: I am a bit dubious because there is a risk that, whenever we do the homework on the streaming API, we will find that we regret how we did the nonstreaming API.

KG: That is understandable.

WH: I am not in favor of doing proposals via streaming.

KG: That’s understandable. Okay. Well, I will try to continue to do the work on the streaming API, then. And, perhaps, when I next present it, we can – I can present it in two forms and say: here is either the more paired down or the more complete version. And we are agreeing that the more complete version is what we will do, if we do it. So we consider the homework to have been done at that point. And maybe that can satisfy everyone.

WH: Yeah. I am ok with not having a streaming API at all. All it would take is, if you’re encoding or decoding, make sure you supply multiples of 3 or 4 respectively. Apparently the people who requested streaming are not in the room which makes it hard to decide what to do.

KG: Yeah.

LCA: Yeah. I agree with CM and Mozilla’s point about the usefulness of the streaming API. I think streaming can be useful, but in many cases uses cannot use it directly, they either an iterator or maybe on the web a readable stream that they want to decode or encode. And using the API will not make their life any easier. Implementing API on top of the non-streaming one by just doing the like only pass multiple of 2 thing, this is implemented in the transform stream on the web. It could be pretty easily implemented with a generator too. Yeah.

KG: I don’t feel like I care all that much about the streaming API. But I feel the need to defend it here. It is useful for streaming cases on the web. Like I have this example here. Where this is how you use the streaming API with the transform stream and it is much simpler than trying to do it yourself. Like it’s definitely doable without the streaming API. You would just need to get pretty into the weeds of the details of Base64 and keeping track of the 3 characters input, 4 characters output distinction and making your views. You need to do concatenation which is annoying with ArrayBuffers, or with Uint8Arrays. If the first chunk is 8 bytes, then your set – you will have 2 bytes left over and put those to the next call. Which is just like an annoying thing to do. You have to make a copy of your entire subsequent chunk is you can prepenned those two bytes. And that is exactly what the streaming API is for. And it plays nicely with transform streams. I do think it’s useful. If we think that streaming is useful ever, anyway.

LCA: Most users the complexity of implementing this transform stream is going to be, especially making sure that the implement is fleshed out correctly, it’s the same level of complexity as going through and implementing the manual version of this. Ultimately, people are going to copy this from stack overflow or import it through npm library. I think this is going to be very rare, I think.

KG: Even if you are just copying it from stack overflow or whatever, you run into the problem where you copy every chunk. There’s no way to do the mod 3 additional bytes to subsequent chunks. Like . . . there’s overhead to do it, not just complexity.

LCA: Sure. Yeah. I think this could – like, there is – let me get back to you on this, on matrix.

DE: We have clear steps to follow up with Moddable, and perhaps Chrome, to understand what the use cases are. Moddable must not be thinking about HTML streams

KG: Obviously, Moddable tends to work in constrained environments and environments where you don’t want to copy all the full data in memory. Certainly the streaming API is useful in any case where you don’t want to create a full copy of all the data in memory.

TKP: Yeah. As people were asking about – the streaming API, just last week, I had to implement something like this transform stream to compress large JSON data into a URL appendable string (query string). I put them into messaging services because of the length of restrictions. And implementing this transform stream myself was kind of annoying and actually, I had to learn more about base64 encoding in detail than I ever wanted to. So yeah. I think the streaming API for Base64 is kind of useful. And not a waste of time. And to have an offset is also quite nice because you actually know where you are. So you don’t need to have a shifting window on top of your data. So if we have the streaming API, I would prefer the offset.

WH: Having listened to the conversation we just had, I’ve been swayed and am now on the side that streaming is useful to avoid extra copying.

KG: Okay. Next steps. That’s good feedback from both of you. Yeah. I agree that the main benefits for the streaming API which . . . not having to learn all of of the details of Base64 and avoid copies. I would like that clearer in the next presentation regardless of which direction we end up going with. And then I see that was everything in the queue.

LCA: Yeah. I want to talk about this copy thing one more time. I think there is a path where you can implement this on top of the simple API, the non-streaming API that avoids doing a copy for the entire buffer every time, the most amount of data that you have to copy is 3 bytes. In a fixed allocated data array, where you put this extra bytes and if you get a new chunk you add one byte from the new chunk into the extra. And then you put that . . . and I don’t think implementation of this is super complicated. I can post one on matrix in a couple of minutes, if anyone is interested.

KG: The thing that is complicated about that, right, that you could take this extra parameter that I have here, and move it into the one-shot API, but getting that parameter, the value for that parameter is gross . . . it’s certainly doable. But it’s not trivial. Especially if you don’t already have a bunch of familiarity with the precise details of 64.

LCA: Maybe we can continue discussing this on a issue.

KG: I should say there is . . . an existing GitHub issue with 100 comments on this exact topic. So maybe just post on the existing one.

LCA: Sure. Okay.

RPR: And EAO with the final topic

EAO: What TKP represented as a user story, it sounds like a really decent motivation for having a streaming API. And getting more representations of something like this in the proposal would make it much easier for us to support it as a whole. If not, splitting in two.

KG: Okay. Thanks. I will do that.

### Summary

A method for writing to an existing buffer as part of the streaming API, was presented, which had a couple of open questions including whether to have offset parameters. The committee was split on having offset parameters, but expressed no disagreement with my positions on the other open questions namely: the decision to have separate methods for writing to an existing buffer the naming question, proposal to use `toChunked`. Committee is not universally convinced to do streaming as part of this proposal. There is no agreement on the use of the offset parameters.

### Conclusions

No universal agreement, whether the streaming API should be part of the proposal

Have more discussions and then present a proposal with spec text for both the streaming and one-shot versions, so the committee can make a decision on the streaming versions. Anticipate Stage 3 for one-shot or streaming version. Await implementation feedback on if the offset parameters are necessary for performance

## Explicit Resource Management (continuation)

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management/)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tko8bDqLrnYiAJRBw-Q?e=qImaQa)

RBN: Yesterday, there was an open question about a concern brought up by someone. There's a way to amend this proposal to enforce `using` in certain cases. To avoid leaky dispose. The possibility of leaking disposables. I have made a couple minor amendments to the slides based on prior commentary, such as not saying that clean up is a must or a should, but a may. Also, amended the slide to indicate that a other option which might be a preferred option if the recommendation would be to report a warning or notify the developer of the leak rather than implicitly close. And as part of the discussion I mentioned I believe yesterday Python context managers are a basis for some of that discussion. There’s an additional slide in a different color to show it was not part of the original subslides I had in yesterday. Just describes what that approach looks like, where to implement it in case we wanted to talk about. We can go to the queue which I believe the chairs have restored from yesterday.

LCA: Yeah. I wanted to comment on your note from yesterday about the base cleanup. I think we should not recommend this. This is in most cases a footgun. We've seen this … over the years we are seeing in Deno. For concrete example, the fetch API, the response body of a fetch API when you make a fetch call it’s cleaned up on GC, unless the user consumes the body. And we see very frequently in real applications that users will perform a fetch, look at just the headers, will not read the response body. And then start like consuming very large amount of memory, because they are not closing this response body. And need, are letting GC dealing with and it’s slow. And people will run out, using HTTP1 because the response body keeps the handle open, until the entire body has been read. Yeah. It’s generally a bad time. Like, GC based cleanup, I don’t think we should be recommending. Reporting a warning, seems more reasonable.

PFC: Okay. Yeah. I agree with that. I would prefer not to recommend GC cleanup. I mentioned some things yesterday about embedding JS into context where the final GC when the embedding is torn down, it’s problematic to have dispose call backs occurring. I won’t go into the detail again, but it’s in the notes from yesterday.

RBN: I do want to point out that the reason that the – there is an issue and PR in the repository to introduce a recommendation which again already has some feedback that is not – it’s not a recommendation that we want to pursue in that issue. The reason it was brought up was one of the initial concerns in [issue 159](https://github.com/tc39/proposal-explicit-resource-management/issues/159), was the problem with things like file descriptors and JS which are represented as a number value don’t show up in like a heap snapshot or dump as being related to a file handle. So they are hard to find when you are trying to diagnose issues with memory. That’s one of the reasons having some way to hold on to that handle and know it’s actually open was even being considered as part of the recommendation.

DE: As an error-handling backstop, I think I agree that using a FinalizationRegistry to clean up stranded resources is probably good, even as we also want to *discourage anyone from depending on it. So, times when the FinalizationRegistry triggers should probably also print warning messages. Generally, I am happy that you brought up this concept of giving recommendations. I think we as a committee have more room to add recommendations. These can even be normative. Many other specifications include “should” text, even for developers, not just implementations. So this could be in our specification document. We can also communicate these in MDN documentation. For this particular case of the FinalizationRegistry API, we put some very prominent warnings to scare people away from using the API at all. I don’t think we gave detailed recommendation of this practice for using it. So I think we should make more of a habit of doing this, even if I disagree with the polarity of the recommendation here.

RBN: And I will state this proposal does have a slight recommendation in the text already. Which is not unlike some of the text that we have more recommendations on how to properly implement an iterator, if you were hand-rolling iterator. In those cases it will say user should do – implementer should do this or person implementing this protocol sudden do this but it’s not enforced by the runtime. So things like saying, dispose should return nothing. You can return whatever you want, but we should essentially not care what you return and ignore it, which is one of the things we discussed yesterday, so they are good recommendations for best practices for how to do these things, but we can’t actually enforce that so we don’t.

DE: Good work. Let’s keep doing this.

SFC: Yeah. I will just say that I think the FinalizationRegistry solution is fine because – I think there’s definitely use cases that I have noted previously where the disposable interface can be available for cases where the developer knows that the object will be short-lived. There could be cases where a disposable tends to be longer lived. In which case it’s convenient to use the finalization registry to handle its lifetime. And like it’s fairly easy to write a wrapper thing. For example, it uses – puts it in before returning to the user. So I think it’s a perfectly valid design to suggest that author’s of libraries that make use of the disposable intercase also have the finalization registry. They feel it’s a valid use case for the primitive that they are releasing.

RBN: This isn’t necessarily something we have to document in the specification. It could be just Q&A on StackOverflow. If I wanted to do this, how do I do it correctly?

PFC: I think when I put this on the queue yesterday, that triggered a big of discussion for the chat, whether we could enforce through the language that you have to assign a disposable to a `using` variable. And maybe that’s not feasible, to do it through the language instead of through tooling. But what I would like to avoid is that we get into the situation where the path of least resistance is to leak resources. It’s a well-known problem with languages like C. In JS it's also possible to leak resources for example by having a closure hold on to them, but it’s not the obvious thing to do. I wonder if you have thoughts on doing this in the language. Is it worth having as a check for the `[Symbol.dispose]` method, if you assign a disposable to a non-using variable?

RBN: I actually be opposed to that for a number of reasons. One, the performance cost for constant on its own. The other is that there are many, many use cases for disposables that live beyond a using block. That’s why disposable stacks exists. In most cases, in the he can ecosystem disposed today, a like concept, go to VS code because they have heavy – this is disposable and build up entire object graphs of disposable things through composition that have a long lifetime with the idea. When I deactivate an extension, that’s all the resources associated with that extension will be disposed. So the demanding that a dispose associated with using in the language would actually be counterintuitive to what dispose is supposed to. It’s supposed to allow you to lexically scope to the lifetime of a resource to a block. But the point of dispose is that it indicates that this object will obey a lifetime that is established – associated with something else. So disposable stack has a long-lived lifetime of multiple resources and that has short-lived lifetimes. They are two parts that are tied together, but using again does not demand dispose and dispose does not – dispose does not demand using

PFC: I understand what you are saying. I don’t want to do that. Of course, if you didn’t have disposables and you had an open and closed method on some object, and you would leak a resource if you didn’t call close, there’s a possibility of forgetting to call close. I think that `using` makes it slightly easier to forget that because it’s possible to think, "this object is a disposable. So it disposes automatically." It’s not as serious as I was thinking yesterday. But I was uncomfortable that the path of least resistance is the wrong one.

RBN: Languages can be helpful to enforce. That goes to the second slide here which was the discussion of something along the lines of Python’s context managers. And this came up in issue 159 which is linked at the bottom of this slide. The idea of being that if you had a mechanism to indicate that you have to – the user declaration would call this method to get the actual resource, such that if you are writing a whole – new API and want to enforce that somebody is using, you would use this symbol.enter to give them what they interact with. And it doesn’t force them – force the user to use using, but it leads them towards it. If they didn’t want to, they have to call the symbol.enter method themselves, which was – is the suggestion from 159. But the problem with that is, if it was something that was mandated as part of the using protocol, existing APIs already have a close method, it would have to essentially implement an enter method that just returned this; that’s what Python does. But in the same vein, the abstract base class that you use for context managers, the abstract context manager defines as the default implementation. Therefore, we could feasibly say that symbol. . . . this is just has a dispose. And if you want to option into stricter semantics for using, then you would add symbol.enter to your class and that allows the caller to either use using to get the value or option out of the semantics by calling enter themselves.

PFC: Okay. I heard some negative comments about this yesterday, but I am very positive about this.

RBN: There is a second part to this too, which is if we wanted to go the full Python context manager route which is something I wanted to avoid, the extra slide I added here. This is a full context manager in Python when you enter the context you get the resource. But the way you clean up the resource by calling the exit method on the context itself, not on the resource. Exit has the extra power that added too much complexity for the lightweight use case, which is the exit method in Python can receive the exception that if one existed, that caused the disposable to occur, and they can either replace that exception or swallow the exception by returning true, allowing a context manager to act like a try catch. That’s a lot of complexity for developers to do the wrong thing when doing the more simple one, I wanted dispose something, clean up, which is why I stayed away from the Python enter/exit approach. You could have lightweight disposable, that symbol dispose, and about heavy wear weight that have a symbol exit and using would be use exercise if it exists, use exit, if it exists. If exist doesn’t exist, I will use dispose with the semantics of this exit example here . . . and the run time or the code in here, essentially emulates most of the work the dispose resources do to aggregate exceptions as it processes multiple disposable objects when exiting a block.

LCA: The point I wanted to bring up is, also on this enforceability. In Deno our test runner does not leak a file resource for any other native resource. And I think through tools like this, test sanitizers and tools that allow you to track the amount of open resources at a time, within a given process, can help a lot here. Especially if those things are integrated with DevTools. Showing you the list of all objects that have a disposed symbol that have not had it called, this would be useful to sort of find run away resources. So maybe part of the solution is Dev tooling and not the language itself

MSF: Yeah. I support looking into enter/async enter as part of the proposal. Similar to, not exactly, but similar to what Python has

RBN: I wanted to speak to that and I am over time, is that if the . . . I don’t really have an appetite for implementing full context managers, and if the committee is in agreement that full context managers might be a little bit overpowered or overcomplicated for ECMAScript, then I don’t know we need asyncEnter which part of the context manager design where you have an asyncEnter and asyncExit and they to be paired and always asynchronous. The simpler approach is that you just have an enter method that says, you have it use – you should use, using or call into this to do anything else, then I don’t think async enter is necessary. And the reason I say that, it has an impact on some of the API design for async disposable stack, an additional wait at an await using statement that I think would complicate things. If we were going to try to consider doing this, do we need this, it’s a matter of how far down the rabbit hole are we going with this capability? If it’s something that is simple as it’s just an enter symbol that is optional, then that doesn’t necessarily mean – that is something again, potentially to pursue as a follow on. Because it wouldn’t affect any existing semantics within the proposal today, that exists today. But if we are interested in something bigger that might mandate possibly a demotion to Stage 2, to consider the implications of something like async enter on zero the async side of the proposal.

MSF: Okay. But it sounds like you’re – we can discuss enter, async enter.

RPR: Thank you. So we are through all the queue now.

### Summary

No specific direction is concluded. There may be interest in investigating in async enter or in even the full context manager protocol. Not sure what impact this has on the stage of the proposal based on feedback. No recommendation can be provided at this time.

### Conclusion

Proposal is currently at Stage 3. There are a number of options to consider. It is still not clear the final direction to take.

Two issues to consider:

- Issue 1. The recommendation to use the garbage collector to clean up resources, which the committee is opposed.
- Issue 2. Use enter, which there were mixed opinions.

This will be further investigated, and will bring a formal direction at the next meeting.

## Temporal Stage 3 update and normative PRs

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](http://ptomato.name/talks/tc39-2023-07/)

PFC: (Slide 1) Welcome back from lunch, whatever timezone you’re in. This is the Temporal presentation. My name is Philip Chimento. I work for Igalia and in partnership with Bloomberg. (Slide 2) I am here to give a progress update and present some normative requests. We have discussed in the previous two plenaries in March and May about an integer arithmetic change which I am happy to finally be able to present the concrete resolution for. I'll also present two changes that arose with changes with implementers. I am also happy to report that this means all the discussions we aware of are settled. So bugs can always be found but these are the last changes on our radar. And then, of course, the implementation is continuing. We know of implementations in JavaScriptCore, LibJS, SpiderMonkey and V8 in various stages of completion.

PFC: (Slide 3) First, I wanted to give an update on the progress at IETF. The document is currently in last-call in the IETF. When I wrote this slide, there had been suggestions from the area directors and one complaint, which seems like it was able to be handled with a bit of discussion. So all in all this seems still like it’s on a path towards being published soon. But when it is, I cannot exactly say. The IETF process has been surprising to me at every twist and turn. I think depending on how comfortable implementers are at this point, we should go ahead and treat it as settled. That is my recommendation, but it depends on the level of comfort that implementations have with the context of the IETF document.

PFC: (Slide 4) I will briefly present the normative changes that we would like to make. And then answer questions. Maybe if there are pressing questions on each one individually, we can take them after the slides but otherwise, let’s leave the questions for the end.

PFC: (Slide 5) The long-promised integer math. To recap, the issue with integer math in durations was that we were doing arithmetic in the domain of mathematical values, and when you actually go to implement this, sometimes you would have needed to use unbounded integer arithmetic in order to implement it properly as described in the specification. So this is something that for a long time we figured was okay. But eventually, we became convinced that this is actually not good, so we wanted to eliminate it from the proposal, and the best way to do that is to place upper bounds on the individual values in a `Temporal.Duration`, other than the implicit bound of `Number.MAX_VALUE`. So the solution that we have come up that I am presenting now is that we don’t change the storage of `Temporal.Duration`. In memory, it’s still one f64-represented integer for each unit. That means, for example, you can still have two distinct durations of 90 minutes and 1 hour, 30 minutes, unless you explicitly convert one to the other. But when we perform calculations with time units, when we convert them into a normalized form in nanoseconds which must fit into a 96-bit integer, the value of the seconds part of the normalized quantity is less than or equal to the max safe integer and the nanoseconds part is not allowed to overflow 1 second.

PFC: So if you implemented this, you can do it as one 96-bit integer if your compiler has it. Standard C++ doesn’t have a 96-bit type, so you would have to have a 64 and a 32-bit integer to implement. You could store the seconds part in a 64-bit integer and the nanoseconds part in a 32-bit integer. If you were writing an implementation in JavaScript you could store the seconds part as a float64 and nanoseconds part as float64. There are various options depending on the environment how you would implement arithmetic on this quality. Then at the end of the calculation, we convert back to the storage form which is one float64-representable integer for each unit.

PFC: By time units, I mean days, hours, minutes, seconds, milliseconds, microseconds and nanoseconds. The footnote is "why are days considered a time unit?" That’s because we allow calculations with durations without a calendar, and we assume that days are 24 hours in that case. There are actually 2 ways to do it. If you make it relative to a ZonedDateTime, a day may not be 24 hours. In that case, it’s handled differently. In 24-hour days, days are time units. Weeks, months, and years, you cannot convert without looking at a calendar. (Slide 6) For the calendar units of years, months and weeks, we place an upper bound on those where the absolute value must be less than the maximum 32-bit unsigned integer. This is in order to be able to use a different algorithm for calculations with calendar units that doesn’t involve calculations in a loop, which was a concern raised by I think the SpiderMonkey team, during review of the Temporal patches.

PFC: So since these are signed quantities, why not maxint32? It’s common to all the units. You can store in a separate bit and use an unsigned 32 for the quantity. So if you like, you can also store these units as unsigned 32-bit integers instead of float64s and save a couple of bytes.

PFC: This range is well above what you need in order to perform calculations relative to a date. Because 2**32 - 1 years is long past the representable range of dates that we allow, which is about a quarter of a million years in either direction from 1970.

PFC: (Slide 7) In March, we had some discussion about whether to express this in the specification as just regular operations on mathematical values and note they are fit in 96 bits, or also explicitly spelling out the steps you have to do if you are going to implement this in, say, 64 + 32-bits. In the normative PR that I'm presenting today, we have chosen the former, because there are several ways to implement it. There was some disagreement last time we talked about this on what was better. So if, if the committee or the editors decides to explicitly spell out the steps on how to use this 64 + 32-bits it’s an editorial change. We don’t have to use plenary time for that if we prefer to express it differently in the spec.

PFC: All in all this had a fairly small effect on the actual code that would be written in the wild using Temporal. It has only a few observable effects, mostly around durations where one component is too large and no longer allowed, but doesn’t change much the behavior of the APIs at all. I have a code sample here showing the top half is durations that are no longer allowed. So you can’t have `Number.MAX_VALUE` seconds anymore. You can have `Number.MAX_SAFE_INTEGER` seconds but no milliseconds on top of that. The bottom half shows examples of the kinds of durations that are the maximum now accepted. So, for example, you can have max u32 weeks, month and weeks and a number of days, hours, second, millisecond, nanoseconds that works out to MAX_SAFE_INTEGER.999999999. And then the bottom line is basically the same duration but different units and negative, so like `-Number.MAX_SAFE_INTEGER` and `-999999999` nanoseconds.

PFC: (Slide 8) The second change is to limit the precision of offset TimeZones. To recap the background here, TimeZones can be either named or they can be UTC offset. The named time zones, they are taken from the time zone database, we will hear about that in JGT's Canonicalization of TimeZone presentation after this. But this is not about those time zones. This is about time zones that are constructed from a UTC offset that is fixed, does not change, no daylight saving rules. So an example of one of these TimeZone . . . "+01:00". A fixed offset of UTC+1. Previously, in the proposal, we allowed you to create the time zones with UTC offsets up to nanoseconds precision. For example, this string here with `.00000001`, we overlooked that the IETF string format does not allow this precision of offset strings. We figured it’s better to limit the precision now and relax the constraint now than to go back and try to make another change to the IETF document. This is not named time zones. There are time zones in the IANA database that have an offset that is not whole minutes and those continue to work as they did. It’s offset time zones, like this little code sample here, which are affected. You are not allowed to put a number of seconds in the UTC offset.

PFC: (Slide 9) The third normative change and this is probably relating very closely to the presentation that we will hear from KG about "stop coercing things". Some of the test cases that ABL wrote for the Firefox implementation of Temporal uncovered this concern, that led to to make a change in the way we coerce strings to dates. So the story is that some numbers are, if you convert them exactly to a string they are valid ISO strings. Here is a number that converts to yesterday’s date if you use `toString` on it. Some numbers look like they might, but they don’t convert to valid ISO strings. For example, here is one that starts with a zero. It's an 8-digit octal literal, in base 10 it’s a 7-digit number. So not an ISO string. This is an evil trap to fall into. So the change we are proposing is not to use `toString()` on this sort of input. But require that if you pass a primitive, it’s a string. And that also changes the semantics of what error we throw there. If you pass the non-string primitive, it’s a TypeError rather than a RangeError, from when it was converted to a string that was not allowed.

PFC: (Slide 10) Here are some code samples of that. This top one is the silliest one. It used to be able to create a calendar from the number 10. And that would end up as the ISO8601 calendar, because 10 was parsed as a time string for 10 o’clock. And without an explicit calendar annotation, it has the ISO calendar. It was silly that this was allowed in the first place. You used to be able to create a TimeZone from -10 because it would be a fixed offset TimeZone of UTC-10 hours. Here is the date I shared before. Then the bottom one shows an example of the change in the error that we are throwing. It used to be if you created a date from boolean value `true`, it converts to the string `"true"`. A `RangeError` because "true" is a string outside of the set of strings that are accepted. And it’s a `TypeError` now because it’s not a string.

PFC: (Slide 11) I will take questions on any of these now.

DLM: First of all, thank you for your continued work on this. We support all of the normative changes. I wanted to say, we fully understand why you are limiting to minutes for offset time zones, but in our internal review, it was pointed out the iCalendar format supports seconds, so we might want to expand to seconds in the future.

PFC: Okay. Thanks for bringing that to my attention. I didn’t know that about the iCalendar format. So you’re okay with limiting it right now and expanding it later?

DLM: Yes. I understand your reasons for limiting it for now.

SYG: Normative changes look good to me. I didn’t understand the bit about the string literal confusion. How does limiting coercions help prevent that confusion. You can still pass a number that looks like a string, but it isn’t.

PFC: No, if you pass any number at all, we will now throw a `TypeError`.

SYG: Numbers were never accepted. I understand. I see.

PFC: This `"05000101"` is fine as a string because it was a valid ISO string.

SYG: It’s not the new thing that accepts numbers or strings. Just no coercion, but it only accepts strings.

PFC: That’s right. Yeah.

WH: I have a question about the slide about the TimeZone resolution. It stated that the named time zones can be sub-minutes precision, giving `Africa/Monrovia` as an example. But `Africa/Monrovia` has a UTC offset of zero.

PFC: It does currently. But in the 1970s it had an offset of -0:44:30.

USA: Nothing super serious, but I wanted to add a little bit of context for the exclusion of . . . this was included draft informed by Temporal, because the original grammar was basically taken out of the Temporal spec. However, it did come up during IETF review and people strongly suggested that sub-minute offsets were not a good thing for us to support moving forward, and that unit was a good idea to restrict ourselves to minute precision when dealing with offsets. So that is the reason why we excluded it.

MLS: I wanted to clarify. In slide 10, if the first 3 were strings instead of numbers, they would be accepted?

PFC: That’s right.

CDA: Nobody else in the queue at the moment.

PFC: Okay. Then I would like to move on to request consensus on these three changes.

CDA: All right. We have some support in the queue from CDA, from DLM, from SYG: supports consensus on normative changes. We also have a +1 from LGH.

DE: I support all the changes. I want to take a minute to dig in more to the feedback from Mozilla. The champion group took time debating the different alternatives, including supporting second or subsecond offsets. It’s not like technology to support second or subsecond offset is developing over time–we should just make this decision now or in a future meeting coming soon. I don’t see why it should be a follow on proposal.

PFC: So I think like there’s nothing on our side stopping us from keeping it the way it was with nanosecond precision. Except for the string format. Maybe it’d be contrary to the spirit of trying to get our string format standardized, and then immediately add an extension to it that’s not in the standard.

DE: Yeah. One thing I wanted note to Mozilla is that Temporal still does allow TimeZones to have sub-minute offsets. This is about the built-in Temporal.TimeZone class that when parsing from a string only allows a minute granularity. So maybe custom time zones is enough to enable the iCalendar case.

DLM: I would respond to that. That was feedback from Sean Burke. He works on the Thunderbird project on calendars, I can’t speak to details of how important this was to them. So I think I can’t really resolve this question at this meeting. I would need more feedback from them about this.

PFC: I think that it is correct you could use custom TimeZone to provide a fixed offset that was not aligned to a minute boundary.

DLM: Just to follow up. I will ask him to get in touch. And he certainly had no concerns about supporting the normative changes, but I wanted to bring it to the committee’s attention.

DE: Okay. Yeah. Thanks for raising this. So I support consensus on these three things provided that we follow up soon.

JGT: Yeah. A custom TimeZone can have any offset down to nanoseconds, so for anybody that runs into this limitation, there is a pretty straightforward way to work around it.

CDA: All right. Seeing nothing else in the queue, so I believe we have consensus on the normative changes.

PFC: I have written a summary and can copy it in myself and following up with the offset time Zone.

DE: I think this is a really big milestone. We do not anticipate any further normative changes, and from the IETF perspective, we don’t think that it changes in the IETF side are to be waited on further. This is a huge milestone, and modulo the one thing to follow up on [second granularity timezones], which I suspect we will quickly find it doesn’t need any change, Temporal can be considered kind of "done-ish". I don’t think implementations need to wait on any additional changes, or at least implementations shouldn’t anticipate any additional changes at this point. Hopefully this will be demonstrated in the next meeting when we'll come back with no changes and if PFC agrees, I think we should capture this as part of the conclusion.

PFC: I can add that as well.

### Summary

- Consensus on making normative changes to:
  - Remove arbitrary-precision integer math and calculations in loops (PR [#2612](https://github.com/tc39/proposal-temporal/pull/2612))
  - Limit offset time zones to minutes precision (PR [#2607](https://github.com/tc39/proposal-temporal/pull/2607))
  - Require ISO strings and offset strings to be Strings (PR [#2574](https://github.com/tc39/proposal-temporal/pull/2574))

It agreed to follow up with Sean Burke from the Thunderbird team about use cases for sub-minute-precision UTC offset time zones. (https://github.com/tc39/proposal-temporal/issues/2631)

### Conclusion

All known discussions are now settled. At this point, we do not expect that implementations need to anticipate any other normative changes to Temporal, and we do not expect that the remainder of the IETF process will necessitate any changes. Barring bugs found by implementations, we can consider the normative work on the proposal to be done.

## Time Zone Canonicalization for Stage 3

Presenter: Justin Grant (JGT)

- [proposal](https://github.com/tc39/proposal-canonical-tz​​)
- [slides](​​https://docs.google.com/presentation/d/1MVBKAB8U16ynSHmO6Mkt26hT5U-28OjyG9-L-GFdikE/edit#slide=id.g22181d24971_0_41)
- [spec](https://tc39.es/proposal-canonical-tz/)

JGT: Firstly, again I want to – this is an obscure topic and I am grateful the committee is willing to spend time on this and thanks for having me. And it’s 4:30 in the morning for me. I am a little slower than I would normally be. So I want to apologize for that in advance. But hopefully I can keep the energy up. So today, we are talking about TimeZone canonicalization and hopefully getting to Stage 3.

JGT: So first, we will talk about today is just a recap of the proposal. It hasn’t changed very much since Staged 1. But I will go through what is going on during Stage 2, and try it recap the spec text changes to keep it fresh in everybody’s mind, and ask for Stage 3.

JGT: Reminder about the scope of the proposal and what we are doing, it’s based on the IANA, TimeZone, for ECMAScript and for everybody else in computing. There’s a database called CLDR, a database of metadata that is used for localization purposes including TimeZone data. CLDR takes updates from the IANA database and includes them in their own data. There is another API called ICU which ECMAScript engines call into. This proposal is based on time don’t know identifiers like Europe/Paris, Pacific/Auckland. Two kinds. Primary identifier zeros which is the main – the main identifier for TimeZone. It’s called a zone in the TZDB and also nonprimary identifies. So a good example is Asia/Kolkata for Asia/Calcutta is link that points to nonprimary identifier that points to Asia/Calcutta. Not all time zones have nonprimary identifiers but some do and that’s one of the focusses of this proposal. Now, in terms of manipulated TimeZone identifiers there’s two variations on this. One is case nomralization. So the TimeZone did a is a sense sensitive Dai base. If you give it America/Los_Angeles. Big L, A. That's an important implementation. I don't want to store the string that the user provides and so for us storage efficiently it’s important to do case normalization. This is about canonicalization. So what this is, is like in 2022, Europe/Kiev was renamed Europe/Kyiv. And so figuring out how we handle those kinds of cases where there are multiple identifiers corresponding to a particular time zone is the focus.

JGT: So reminder this user complaint slide, you seen it a few times. The current stat state is not great from the perspective of developers. So the common theme is why are you – the people for sensible reasons, prefer to name their countries and cities the names they want. And not the names some colonizers from hundreds of years ago decided to call it. So this is actually just a pretty small sampling of what you can find on Google for people complaining how how this works. How this proposal will reduce in the future these kinds of complaints. So to summarize the problems that exist today: one is there is divergence between implementations. If I pass this line of code into firefox I will get Asia/Kolkata. If I pass it into Chrome or Safari or Node, I get Asia/Calcutta back. And so it’s because the latter uses CLDV and the former uses IANA which IDs are canonical. ECMAScript will change the values that programmers give it. So if you pass in Europe/Kyiv or Europe/Kiev, you might get one or the other back, depending on what implementation and at what time you’re making the calls. That’s confusing and/annoying when you have automated tests that you don’t want your snapshot data to change. So it’s frustrating. I mentioned before that developers are reasonably update that their cities are not called what they think they should be called. The final thing is that because there are multiple identifiers for the same TimeZone, you can’t use `===` to compare them. You need to have some code between to do an accurate comparison. These are all bad. But they will get worse. Because Temporal makes these problems worse because, the Temporal.ZonedDateTime class when you serialize into a string it shows you the ID. In the browser console, debuggers convert to JSON. When you store in a database. Logs. So we have already seen and today it’s like a JavaScript detract to get the identifier today’s. You have to dig in keep and call levels down. Whereas, with Temporal it’s going to be right there in people’s face. We will see a lot more of dates and time of the essence that we – before Temporal gets wide adoption, it’s great to the proposal out there so that we can vent the compilation of the problems we saw in the last side.

JGT: So here is what we did during Stage 2. We landed the two editorial PRs, refactoring how TimeZone identifier are dealt with, both in ECMA262 and in the Temporal spec. These are now landed. Thanks a lot – so much to especially to the 262 editors for spending so much time with me to ensure that went through. We finished tests. Tests aren’t required for stage 3, . We had a lot of discussion in the repo, you know, probably we have 20 or 30 issues in there. And we had 2, TG2 reviews. The summary of the TG2 reviews, we are not going to expand beyond stage 1 and 2. There were ideas on how to expand the scope. But we weren’t really able to get consensus on any of the things that were actionable and some are not actionable yet. And so the plan; we will specifically have the proposal as is. And then other future-related changes would be normative PRs in ECMA402. Because it’s time sensitive, we want to get the changes out before Temporal is widely adopted. There’s no normative spec changes. To run through it quick here.

JGT: So as reminder, this is the same proposed solution slide that we presented last time. I will run through and give you a status update of the pieces and where API changes that reduce the impact of canonicalization. And so changes to how canonicalization works in the IANA. The first piece is to stop canonicalizing user input. If I do Asia/Calcutta, and get it back. If I do Asia/Kolkata, and get it back. And that one change is actually probably the biggest thing we can do to reduce the level of user complaints because, you know, we’re not changing people’s data anymore. The next is to expose a new public API to compare two different TimeZone identifiers to see if they represent the same TimeZone. And so for both of these API changes, the spec is complete. The tests are fully – the full surface of the API. Passing. Reviewed. And the spec text hasn’t changed except for minor editorial tweaks since Stage 2.

JGT: So the next piece of it is to provide guidelines for implementers of how they should teal with future changes to the TimeZone database. Especially in the – when we have future renames, because they tend to be the most destabilizing. Like Kiev to Kyiv. There’s a recommendation into a note, similar to the note we had in Stage 2, we wordsmithed it a little bit. But there is one piece of this – we sort of had hoped we also be able to include, spec text how you should align cross-engine set of canonical IDs. We are not there yet. Reason is that, engines generally rely on CLDR and ICU to handle the interaction with the TimeZone database. CLDR has agreed to expose IANA canonicalizal values out to the world. They are moving – they are moving slow. And so we are not on the time frame we need this proposal to go, I don’t think we will get that support from CLDR and ICU in time. We are going to continue to encourage folks to support this and continue discussing it but wait for for any spec changes with that to really wait until that support is available. Thankfully because we’re making the API changes it reduces the impact of this – of these kind of things. Even though we are not engines will act the same, the scope of which they will act differently is going to be a lot smaller with this proposal API changes.

JGT: So with that, we are going to – if this proposal reaches stage 3, I will port a bunch of issues out of repo here in ECMA402 because they will become 402 issues going forward. It does not mean that we will to the forget about them. We will continue to pursue them, but not put them in the scope of the proposal to get this out.

JGT: So here is a reminder of the spec text, 5 places currently in the Temporal spec and in the current ECMA402 spec where canonicalization of TimeZone identifiers. In these places, we will replace the canonicalization with the original case normalized ID that the user provided. Here is the Temporal TimeZone constructor, the internal version. Here for the zone date time type, when it’s storing its TimeZone slot. Here is the.toLocaleString. And the Intl date time far not. Each move from the storing the canonicalization value to the case normalized value at that not canonical analog but what the user provided.

JGT: So because we took canonicalization out, we need to add it back when we compare 2 time zones together. The triple equals case. Internally, we avoid that today because everything is canonicalized. Once we stop canonicalization we need to compare for quality. There’s editorial tweaks to match and other editorial changes on the Temporal side, but this is the same as you have seen before.

JGT: Finally, the last API change is to expose this new public API that takes this abstract operation that is used internally and exposes it outside to users so they can compare and replace their now buggy use of triple equals are more viable alternative.

JGT: And the final spec change is a note for implementers to explain what they should do when we get a future renaming change like we saw last year with Europe/Kyiv. As a note, these renames are really rare. They average less than once a year. There was one in 2022. There was – I think 3 in the last 8 years before that. This is not something that happens all the time. But when it happens, Android had the good idea which is, they added the new name as a nonprimary identifier. So they left Europe/Kiev as is. The reason why that his helpful, if you switch over, let’s say, the TimeZone data database change is now and you start sending out Europe/Kyiv to everybody. Your communication partner on the other side might not be updated yet. And that’s what happened in 2022. And so by this approach, you actually wait, in this case, Android waits for 2 years. That’s a reasonable amount of time. During Stage 3 we will get feedback from implementers of whether that’s at right am of time. After that, you swap them. Then Kyiv becomes the primary identifier and Kiev becomes the nonprimary one. And that way, you will have much less chance that your communication partners will say, what is Kyiv? I have never heard of that. This is a recommendation. This is not something we are going to require because I think there’s interesting cases like in some cases the operating system is using the same values as ECMAScript does. But this is sort of the general recommendation.

JGT: So status for Stage 3 is that the spec is done, tests are done, polyfill is available. Thumbs up from 3 of the editors. There’s one more editor there and I am hoping that they will be able to review the 20 lines plus a few paragraphs. I think we have met the criteria for Stage 3 I hope. Let’s open the queue for questions.

DE: So I am a big + 1 to this proposal. The managed change at both the Temporal and Intl levels and the scoping, just moving on without primary identifiers being totally settled. And doing what is possible. So yeah. + 1 to Stage 3.

DLM: SpiderMonkey team supports this for Stage 3. Great work on this

SYG: I want to ask a question about the note. So the waiting period thing, is that at the ICU level? Like how Android implements it, do you know how Android implemented the waiting period?

JGT: They have a – because Android ships infrequently, they scheduled the change for the next major release, which happened to be two years after the change was made. So I think this is one of those things we will work out in Stage 3. DLM and Anba and I have started to have that conversation but I think this is sort of one of those, got a figure it out during Stage 3 because implementers will tell us the right way to do things. Does that work for you?

SYG: I am somewhat skeptical of having non-normative notes about recommendations of release cadence if it comes down to that. Yeah. We will see how it shapes out, I guess. A lot of this might – the decision-making might not be part of the engine itself, but the broader thing that the engine is part of. And I am in the sure how much force having in 262, can have versus like the browser level or delay or something like. I am happy to see how it shakes out

JGT: Makes sense. Just as a note about the 262 versus 402 split. This is something that the editor of 262 editors and I and Richard spent time talking with, and the tentative split we have now is anything dealing with the IANA database lives in 402, because it interacts with ICU and that’s the main source. Whereas the core, you know, dealing with TimeZone identifiers and primary versus nonprimary lives in 262. So you can think it as like 262 is the base that defines the concepts and 402 is the place where the rubber meets the road in deals with the IANA TimeZone database.

PFC: Yeah. I want to say, I was one of the Stage 3 reviewers for this and I support for Stage 3, and also, I want to take a moment to congratulate JGT on the great work. This all started from a small discrepancy between engines that we noticed early on with Temporal, with how Intl.DateFormat works. I was convinced, this is just a browser bug. And slowly over a year, JGT convinced me it was not and it needed addressing and I think yeah. This is an example of really good work. Thanks.

JGT: Had I known how much work it would be a year ago, I am not sure I would have done it. But I am glad it’s done.

LGH: I support for Stage 3. Since you mentioned you want to get this out ahead of Temporal, I am curious how it works in practical terms since it has a dependency on Temporal itself.

JGT: There is those questions in the slide. I definitely didn’t mean to imply it should be ahead of Temporal. But rather, before Temporal is widely adopted. I would like to make sure it’s out. I would to defer that question. Let’s see if it’s right . . . ed we can talk about now since we have the queue open. That’s the biggest question I have of what is the right way to stage this relative to Temporal. What I don’t think we should do, make sense to try to push this proposal out ahead of Temporal because so much it is stacked on top of Temporal. We might change DateTimeFormat in the meantime, but that doesn’t make sense. So the main question I would have, in feedback for the committee, assuming we get to Stage 3, what is the right way to do it? One way is to wait until Temporal gets to Stage 4. And then do it. Or we could say, implementers, hey, you have one thing to worry about. And you should assume that this lands on top of Temporal. You just just build them as one thing. I like Option 2. I don’t have a strong feeling how to do that whether we should literally merge this proposal spec text into the Temporal text, or put notes in the Temporal spec says "this has been superseded by this other proposal. Go look here." That’s kind of somewhere in Option 2 would be how I would like to do it. If you have a suggestion or proposal, I would love to hear it.

LGH: Merging back into Temporal would make sense.

SYG: I have thoughts on the shipping topic.

DE: I vote Option 2. As LGH said, option 2 sounds nice. I previously advocated for separation of these proposals because I didn’t understand the space as well. And now either merging, or implementing and shipping at the same time seems like a good way to go.

PFC: I think what I would like to see we take the parts that apply to Intl.DateTimeFormat without Temporal and merge those into the 402 spec when this reaches Stage 4. This is a discrepancy and that existed even before Temporal. And then the rest we can just merge into the Temporal specification.

JGT: And just as a question, do you think we should do that like – assuming this proposal reaches Stage 3, what are your thoughts on that? Do it tomorrow, or wait for Stage 4?

PFC: That’s a good point. I don’t know how the committee feels about combining the proposal. If both are Stage 3, we could put parts at Stage 3 and then still have a separate PR for Stage 4, for the parts that apply only to DateTimeFormat. That would be my first intuition. I don’t know if that’s too complicated or what?

JGT: One potential complexity is that the Temporal spec also makes changes to DateTimeFormat so there’s a little bit of merge weirdness there. Do you have any thoughts, would it make sense to bring the proposal into DateTimeFormat and Temporal eventually layers on top of that or should we just make the changes in the Temporal spec that Temporal is making to DateTimeFormat and it goes into one piece? What do you think?

PFC: That seems reasonable, but it might turn out to be too complicated. The motivation for this is that I think it would be good to address the browser discrepancy independently of Temporal. As you noted in the beginning of the presentation people are upset that their city is called by the wrong name when they see it in DateTimeFormat. That’s the motivation. If it's too complex, I would also be fine with Option 2. Either one of them.

JGT: That makes sense. Why don’t with do: take that as a open issue and discussion – I don’t want to take the committee’s time for that and essentially figure out what is the right – we are in agreement at least what I have heard to far and if you want to object, to merge this proposal into the current Stage 3 memberrize spec and leave as an open issue how to deal with DateTimeFormat and discuss in TG2 and sew what would work best for implementers. Does that work for you?

DE: I think that’s a fine conclusion.

SYG: This addressed my concern. I will say my concern: if this remains separate from Temporal, and there are two separate spec text and two proposal repos at Stage 3, this is not something to ship ahead of Temporal because then we will have shipped this without having the equality operator to compare. I want to confirm my understanding of the agreement. If so, merging this spec text into the Temporal spec text addressing my concern. If there’s no two separate spec text and no way to decently for someone who was not here at the meeting who understands to ship independently, I support Stage 3. If there is a risk, then I would rather that doesn’t appear as3

JGT: I definitely agree what SYG said. It’s the simplest – having thought through some of the option zeros, let’s merge the proposal specs text into Temporal and not try to do anything before Temporal ends. There’s a bunch of moving parts. We can take that off-line and figure out the right way to do. I am inclined to agree with you that that is the right way to do.

SYG: The mechanisms of how to do it, we can take that off-line. I do not want to take the bigger decision to merge into Temporal off-line because that decides whether I support Stage 3. Or like a 2.99 or something where it’s like, yes, everything is done. But we are in the actually signal shipping independently because it doesn’t be.

JGT: This should not be independent of Temporal. Does that address your concern?

SYG: I was explicit consensus around the point of merging it into the Temporal spec.

DE: This is a point where PFC made the opposite arm. If an implementation decides that they will take will long time, it’s valid to ship the Intl part of it sooner. But it would be valid for them to ship Temporal together with this. What’s not valid as to ship Temporal without this thing. So I think –

SYG: No. I am saying it’s not valid to ship it without – okay. Yeah.

DE: That would be great option for V8 to adopt the V8 looking for what it should do.

JGT: But I think SYG’s point, which makes a lot of sense is, if you stop canonicalizing users have no way to compare to TimeZone values. Because there is no equality operator. SYG convinced me we should not ship this in date time for mat because it takes away functionality and that’s bad.

DE: I see. I am happy with that condition conclusion. And I think if we get consensus on 2A, that would make it fully solid.

PFC: +1

SFC: Yeah. I support the proposal, but I also hope that we can reach consensus on the rest of the issues because they should be in the proposal. I understand that it's important to get the proposal through. So yeah.

JGT: Can I ask for consensus of Stage 3 and Option 2A?

CDA: Do we have explicit support from anyone for stage 3 for Option 2 A

SYG: +1 from me. Stage 3 with option 2A.

CDA: All right. You have some support in the queue from KG, from EAO and CDA. Any other support? Any objections? We have one more +1 from USA.

SYG: I have got a suggestion for Justin. Option 2 A, to minimize the risk of someone not in the room and actually implementing and shipping it, could have the rendered spec text redirect to – even if makes sense to read independently, have it redirect to the Temporal section instead?

JGT: Yes. I have to figure out the right way to do that. A meta question, does this proposal exist anymore or now just part of Temporal? Will we every to get to Stage 4 independently?

JHD: The way I had interpret it, I am asking – saying in the context how the proposals table is updated, is that we can probably move it to the inactive proposals list with a note saying that it was merged into Temporal at Stage 3, and never put in the Staged 3 list and this proposal would no longer to do for those not in the room until after the PR is opened to do the merging. As far as the redirects and stuff SYG is asking for, I am happy to help you brainstorm mechanics for that.

JGT: That would be great. Does that sound like a good plan or are there other things that people would want to see? We are running out of time.

SFC: Only a sliver of this proposal is Temporal; it has long been a standalone proposal for 402. It solves problems on its own merit. I'd be in favor of keeping the proposals separate.

DE: The reason is the missing equals method. Right now they are canonicalized, you can compare with `===` and you will have this missing capability without Temporal. It’s an ugly intermediate state that we shouldn’t expose to developers.

JGT: I might try to get like 10 minutes tomorrow because it sounds like there is some – there’s still some open issues here around the – we will follow up off-line, it might be worth getting a few minutes tomorrow.

CDA: Yeah. Justin would you like to dictate a summary for the notes

### Summary

- Presentation:
  - Problems to solve:
    - Implementation divergence
    - ECMAScript unexpectedly changes programmer input, e.g. Europe/Kyiv ⇨ Europe/Kiev
    - Developers are upset by obsolete names, e.g. Calcutta, Kiev, Saigon
    - `===` is unreliable for comparing IDs across engines, platforms, or time
    - Temporal intensifies these problems by making IDs more discoverable
      - e.g. Temporal.ZonedDateTime shows ID in console, debugger, logs, JSON, etc.
  - During Stage 2:
    - Landed editorial PRs: tc39/ecma262#3035, tc39/proposal-temporal#2573
    - Finished Test262 tests (and built polyfill to run them)
    - Implementer discussions in GH issues
    - 2x TG2 reviews, with outcome of not expanding spec changes beyond Stage 2 text, because further changes didn't have TG2 consensus and/or were dependent on CLDR/ICU changes that aren't ready.
  - Status of planned work
    - API changes: spec complete, tests complete
    - TZDB identifier guidelines for implementers
      - Handling future changes (esp. renames): spec note complete, no tests needed
      - Help implementers converge on a cross-engine set of canonical IDs: not complete, waiting on CLDR (won't ship in time for this proposal). Will follow up in ECMA-402 separate from this proposal.  We'll move open issues to 402 repo.
  - Spec changes:
    - Stop canonicalizing in 5 places in the spec
    - Add canonicalization to TimeZoneEquals
    - Add new Temporal.TimeZone.p.equals method
    - Add a note that recommends a 2-year waiting period before a renamed ID becomes primary (idea borrowed from Android)
  - Stage 3 status
    - Spec, tests, polyfill: all complete
    - Stage 3 reviewers: approved
    - 3 ECMA-262 reviewers (SYG, KG, MF): approved

### Conclusion

- Proposal reaches Stage 3 🚀🚀🚀
- We'll merge this proposal as a normative PR into Temporal Stage 3 spec so that implementers only have one thing they need to implement. JGT will author this PR ASAP.
- Implementations should NOT implement this proposal's changes to Intl.DateTimeFormat until Temporal.TimeZone.p.equals() is implemented, because without equals() there's no way to know if two time zones are equivalent. (Also because it'd likely break all Temporal polyfills.)
- We'll change this proposal's repo and rendered spec text to avoid confusion with Temporal. What specific changes those should be will be worked out with JHB, SFC, Temporal champions, and maybe others.
- We tentatively agreed that this proposal will be subsumed into Temporal, but SFC had concerns around that. JGT will follow up with him to understand those concerns. We may get extra time tomorrow to work things out further.
- We'll continue working with TG2, CLDR, and ICU on further changes to align implementations' canonicalization behavior. We'll port issues from the proposal repo to the 402 repo, and will propose normative changes to ECMA-402 as they are unblocked.

## Source Phase Imports for Stage 3

Presenter: Guy Bedford and Luca Cassonato (GB) & (LCA)

- [proposal](https://github.com/tc39/proposal-source-phase-imports)
- [slides](https://docs.google.com/presentation/d/11vSrS7-112rb2zJxpBpKnSj4XUyOy-6w54neQSStJ-4/)

GB: Presenting again source phase imports. Hopefully for Stage 3. We have had the Stage 3 review PR up for some time. And we can just give a quick recap of where this proposal has come from, how it’s developed and the current decisions and some of the recent decisions that were made in the last meeting and discussions that are followed up from that.

GB: So to summarize the syntax, this is the syntax for the proposal. It’s both a static syntax and a dynamic syntax for importing modules in their source phase. And in particular, this is a new reflection of the loading pipeline in different phases of the module loading process, where getting access to the earlier phase unlocks new capabilities both for JavaScript and other languages that integrate with JavaScript. The motivation for the proposal initially comes from WebAssembly where there is an explicit distinction in WebAssembly between the source and the instance that you have WebAssembly.module .and webassembly.instance and the next a link and executed instance. And because of that distinction, we want to be able to get a hold of a WebAssembly.Module object through the module system and this cuts out a bunch of existing boilerplate code that exists today. And that causes a lot of friction in various WebAssembly workflows, bundlers, and code that can work across different JavaScript environments. This is the standard way in which one needs to do WebAssembly today. This the key part of the instantiation process. How to resolve the WebAssembly binary and this is a step that exists parallel to the normal JS module system. You have to fetch the binary, pipe it in and then separately do that and in this case, ESbuild has to be instantiated with a particular specifier for the run time. And the WebAssembly has an integration on its own and not all for dynamic WebAssembly instantiation.

GB: So the benefits we get for WebAssembly are fixing this portability issue that we currently have in the WebAssembly ecosystem where you do the separate steps and bundlers don’t understand it easily. Getting access to WebAssembly.module and statically analyzing that is difficult. Users might get to wrong and not do it right. With the WASM integration, you want to multiple sending models between workers and various virtualization or specific cases. And so it fills a gap in that use case while solving the linking for WebAssembly and sort of providing a bunch of ergonomic benefits should significantly improve the portability of the workflows.

GB: We get static error semantics, improve and security argument as well. That because – this is the syntax that ES build to update using the new import source phase syntax you get the WebAssembly through the JavaScript module system and can then directly instantiate with the existing WebAssembly instantiation where the ESB object is a WebAssembly.module and there is even potential security benefits that could apply either in browsers or in service side run times where because the code is no longer arbitrary WASM bytes being compiled, we have access to this through the module system, so the same types of security policies and reachability policies can also be employed to the WebAssembly code that’s executed. So it’s another level at which you can obtain a reference to source code that you can then dynamically link and opens up the virtualization policy

GB: To explain the history of the path of where this proposal came from and how it got to this position. Initially, we are looking to solve this WebAssembly use case and earlier, import assertions were not supporting unique semantics. We were involving following this to treat this as inability to get a new behaviour in the module where you get the WebAssembly by object. As we walk down that road and started having the various discussions around it, we realized there’s a lot of benefits in seeing how this can unify with JS virtualization and some the work with module expressions at the time where there are similar concepts. Access to something to . . . and virtualization of modules. So WebAssembly is another module type virtualized through the JavaScript module system and out of that we had various discussions around the different modules proposals and we went off the deep end in terms of building this modules epic and the way the things interrelate on these virtualizations. And then import attribute ends up supporting changing semantics. But having gone through this journey, it was clear that these are actually – there is a clear representation of the module as going through these different phases that we can expose.

GB: And so this became the phases simplification, we were able to see these a part of a separate proposal of different phases in which you can import a model, and this being a particular phase of loading it’s new Tim active in the module system and that’s the process. I will pass it over it leucoto go into more details on the phasing

LCA: To recap the phases here. You can take a model in approximately 5 stages. The 5 you see on the screen. But generally, this is how it works. You start with resolve phase that makes a specify . . . and resolves these module requests or on the web URL resolution. And that may take [inaudible] maps. Fetch and compile this module. Through the network. From the disk or from elsewhere. On the web, network to fetch CPS (?) right here. This is also the part of the phasing that we are hooking into with source imports, exposing the result of this phase to user. The next phase is attaching evaluation context. This is when a module getting an identity, it gets linked to a specific realm, import metaobject, those things. Next, we go through the list of imports that the module also. Possibly load the modules and link them together. This is also a phase working on posting through the defer proposal that Nicolo presented yesterday And then finally, we evaluate and this is the phase that we currently always try to get when importing we are – we do all of the behaviors.

LCA: Th semantics of this proposal are that source phase imports are exposed the module’s source object. This is a representation of the module source. This is [spo*is]d (?) via new module.GetModuleSource abstract method. The host load hook returns exactly one result per riverrer + (?) specify attributes. This is unchanged. Models that do not expose a source representation yet, will get back to this a minute, throw when they are loaded via a source phase import. All module source objects, the values provided from source phase imports inherent this the same be able to identify them. This abstract module source class is not exposed on the global scope. It is the all module source inherent from this class. In the future we might extend it to add common methods, for example, binding, this is part of the modules epic that we’re working towards in the modules call. We only have a toString tag implementation. An internal slot check like TypedArrays do. This allows for checking and the spec requires all module source objects from the class. The class is not constructible or callable. Users cannot create their own module source objects. Host objects can infer from abstract module source and host objects like webassembly module that inherent from can be constructed. But TA constructible right now.

GB: The discussion as a new proposal came out of previous meeting, and the – in order to support this WebAssembly, we need to update the WebAssembly prototype and constructor for WebAssembly module to have this new inheritance chain. There is web observability to this change, because we are changing the inheritance there is precedent for the changes and we haven’t identified any use cases in which there would be exact type checks that would be invalidated in existing WebAssembly code. So we were able to work on the WebAssembly integration and integrate a PR into the proposal. And so there are a few PRs and so the update was also presented to the webassembly CG committee meeting on the 20th of June. And there were some really interesting questions that were asked about the proposals. But there was generally positive feedback and no major implementation concerns were raised. So that’s the current status. We were able to investigate the specifications changes and follow up on them in terms of how this can be integrated with the current WebAssembly as an integration proposal.

GB: So this now puts us in a position in which the WebAssembly integration proposal should be ready for shipping. And the Champions recommend that these features can now be shipped together. So we can now ship both the ability to import WebAssembly in the JavaScript module system with normal imports, as well as these new source phase imports. By shipping both of these features combined we should cater to all of the use case that is are necessary to support WebAssembly on the web. If implementers do not want implement the full integration at first, source phase imports also provide a simpler initial implementation potentially. Because there is less heavy lifting involved in tying the module systems together. So we created a note that is a possibility. That we certainly recommend that both are implemented, if possible.

GB: And obviously, we should consider what this representation is going to be for JavaScript. So at the moment, according to the spec, if you load JavaScript in the source phase it will provide an error. And obviously the intention is to follow-up and provide a source phase virtualization for JavaScript and that’s the next crucial part of the efforts we are working on . . . module declarations, compartments. And so we are committing to moving forward with that work. And when we ship this source phase, there is a kind of a sense that we are opening the door to starting to ship from these various proposals and that we should be able to follow up with the others.

GB: Now, there is some risk with that because it’s a step – it’s a big step we are taking. But it’s a great opportunity for us to be able to start shipping these proposals, which we have been working on for I think coming on two years at the moment. And we have identified a huge amount of cross-cutting concerns and gone through the design discussions from the start. So that we have alignment between the proposals that we believe can come up with some really powerful primitives for JavaScript that should significantly improve virtualization cases.

LCA: We discussed the proposal already. First up is the dynamic import syntax. In the meeting with he discussed whether to use the `import.source` syntax or regular with options bag. We agreed during the meeting it use the `import.source` syntax. And the proposal updated to use this. Next up the export source at that timeic (?) syntax. The topic of this came up in the last meeting. Import source, shorthand and exporting the I am – identifier. As identified by Ron, we believe there may be actual potentially use for reexporting. By allowing defining a module composed of multiple sources which is a single file with module expressions and proposals in the future. We will not pursuet this in the current proposal because the export default from form for regular evaluation imports does not exist. So we would like to see this explored within the context of the export default proposal. Finally, a follow-up on aligning the import source static and dynamic syntax. We discussed whether to align the static syntax with a space, the dynamic with a dot. There is currently no precedent for declarations containing dots. Additionally, the export source causes a space for the export syntax has to use a dot in this case. And didn't introduce a second declaration containing dots. And also introduced export dot something as a new syntax. Because of the points we decided against this change and we are sticking with import space source and I don’t think there was major controversy in the last meeting. Everybody seemed okay with that.

LCA: On Stage 3 reviews. Stage 3 reviewer reviews are complete. From NRO, DE, and KKL. Thank you for those. And editor reviews are mostly done, some editorial fixes and a rebase onto import attributes. So thank you to SYG, KG and MF for those.

LCA: One question came up, whether this phase that we are exposing should be called the source phase. We refer to this as the module source phase with source as the key word. There’s a question of whether users will think source means parsed or unparse source or parsed source. Right now the representation is parsed compiled source. Do you want to speak to this?

GB: So I suppose the concern is that source typically refers to the source code. And the concept of a source phase is a new concept we are introducing. And whether that will be confused with the concept of source code. When it comes to the JS representation, the source phase can very much be thought of as a representation of the source code. And so far as source code can be considered optimizeible, perhaps the distinction for parsing isn’t as clear to end-users as it is to V8 enginers. So we may also for the JS source be exposing things like looking up the imports and exports and even having a getter to the source text. It very much would be that kind of representation. We did initially explore the module term for this. But the issue we have with the module term there is conflation on that term between WASM ecosystem in JavaScript. Module means the compiled module in the source phase. And so it’s – we probably don’t want to use that term and we haven’t heard any proposals for a better term. So that’s pretty much where we land on that at the moment. But we can certainly hear from SYG shortly.

SYG: Yes, specifically the concern was that source sounds like what you actually already mean by asset, or at least in the future when we have asset. That’s what it means, it’s just like uninterpreted, just get the text kind of thing. When we bikeshedded the name internally, the two names that had some traction were “handle”, which I think is not good because that’s just like “handle” means anything, and “instantiable”, which I think has some promise. Specifically source, in this case, is about the thing that you can instantiate into a module, whereas assets are probably never going to be things that are instantiable. So if you import An instantiable, I guess the problem be the name is it doesn’t sound like a phase, it sounds like a thing, but it seems to reflect the intuition better, in our opinion.

LCA: I have a couple comments on this. First on the asset, that source sounds like an asset. I think this also depends a bit on how you define an asset, which I think right now is not completely clear, asset could mean a blob of bytes or proposals for asset references are floated around, especially the beginning of this proposal, we were considering asset references as one of the directions to take this. So, yeah, I see the confusion, but I don’t think saying that it sounds like what assets actually are is correct either, because we don’t really know what assets are. I agree with “handle”. Handle could mean anything. Handle could also mean an asset reference. It does not even mean it has to be fetched. It could be “handle’ to the module request. “Instantiable” seems more reasonable. I agree on your point that it not really sounding like a phase, but rather like a thing. It also brings up the question what is the JavaScript representation, it is a module instantiable. Right now the proposed name is module source, which I think makes sense and would fit with the source keyword here, so I think that’s something else to take into account.

SYG: Thanks for your response. I think the -- I think the instantiable name need not be the name of the concrete constructor of the module JS source. I think it makes perfect sense as, like, where it tops out, like, an abstract instantiable module sounds like a perfectly good super class module. But we’re not bikeshedding that yet. But it seems that -- that threads in needle for me for the source confusion at least. This is not a blocking point, but if there’s no violent reaction against instantiable, we prefer that over source.

LCA: I’d like to hear what other folks have to say. Maybe this is just because I’ve been working on this for a while. I personally prefer source, but it’s not a super strong opinion.

DE: More people had agreed with ‘source’ in the Matrix chat by the way.

KG: Yeah, I just instinctively strongly dislike instantiable. It’s harder to say, it’s harder to spell, it’s harder to tell what it means. It’s not a word that you will ever have used before in your entire life. I agree source is a little confused, but instantiable seems worse to me.

LCA: Okay, let me rephrase that question. Is there anybody that strongly dislikes the source name? Is there anybody that’s on -- that -- sorry, go ahead.

SYG: Like, other than me, you mean?

LCA: Yeah, other than you.

NRO: I feel like the general reaction on Matrix has been that, like, some people don’t really much like source, but, like, it’s the best name of all the names that have been proposed.

MLS: I’m not so fond of names having source, but I don’t like instantiable.

CDA: Just a reminder to please use the queue for responding. DE is next.

DE: I’m plus one for keeping the source name for the same logic NRO used. Should we do a temperature check here? The goal would be to capture potentially distributed discomfort with
“source”

LCA: Okay. Sounds like some folks want a temperature check. So do you have time to set that up? Do you need time to set up the temperature check?

CDA: I do not. We can go ahead and do it. Let’s just be very clear on this -- what the statement is for the temperature check.

DE: So before we do the temperature check, let’s go through the replies and we’ll give a statement of what the temperature check is before it starts.

CDA: I’m not sure we have replies on the topic. Nicolo, was your reply?

NR: That was reply for the next topic.

CDA: So we don’t have anything on the queue for replies. Is there any --

DE: I see. So I want to propose for the temperature check, like, do you feel good about using the name “source” -- the goal of the temperature check is to capture potentially distributed but not quite, you know, vetoing discomfort with the “source” term. If there is this very widespread discomfort, we should reconsider to another term. But if everybody’s sort of okay with it or strongly okay with it, then we should -- or most people are, then I think we should move forward with it. So if you put up the emojis again.

SFC: The word source in the syntax.

DE: Yes, so ‘strong positive’ if the name “source” seems awesome to you. ‘Unconvinceed’ if it seems pretty strange to you, ‘confused’ if you’re confused by it. Does that make sense?

CDA: All right, maybe give it till, I don’t know, the 39 minute mark, which is another 30 seconds or so. We have only a little over 20 responses so far. And we have quite a few more than that in the room and participating, I think. I’d like to see some more responses, if possible. All right, we’re going to screenshot the temperature check.

> 10 strong positive, 4 positive, 2 following, 5 confused, 2 indifferent, 0 unconvinced

DE: So a lot of people answered confused. Including people who haven’t spoken yet in this discussion. Could people maybe elaborate on your thoughts there.

CM: Do you want to do the queue or just speak up?

LCA: Just speak up.

CM: Yeah, I mean, confused is literally what it is. I’m kind of indifferent in the sense of, well, it’s okay, I guess, but I prefer a different term. But if you can’t come up with anything better, go for it.

DE: Chris, you also put that you’re confused. What do you think?

CDA: I don’t know if I have strong thoughts on this. I don’t know if confused is the right word. I just -- it’s more of a -- it’s just the overloading of the term, I think, is what I struggle with. That’s it.

DE: Okay, and Hax, do you have any thoughts here?

Hax: I think I have similar feelings. Previously when I introduced this proposal to others, people always ask if that just give you a string, but I think it’s not -- it’s not a blocker, so if we can’t find a better name, I think people will learn to love the term, yeah.

DE: Okay, so overall from the confused voters, what do you recommend we do next on this proposal? Thanks for giving your recommendation, Hax. And, yeah, feel free to yell out.

CM: What I say, if you’re inspired, if somebody comes up with a great suggestion, and keep your eyes out -...My -- my sense is keep your eyes open for a better term actively. If you can’t come up with one, so it goes.

DE: Thank you. Do you have thoughts on what the next steps should be?

MLS: Well, slide 9 says it’s the best compiled stage of when we’re doing this, so this is I don’t think is right one. But “compile”?

SYG: But it’s like not maybe compiled. Sorry, I should get on the queue, but I have a concrete suggestion for next steps.

DE: You’re confused about our also.

SYG: I think let’s open an issue for inspired suggestions, set a hard deadline that’s reasonable and, like, T plus, I don’t know, six days, five days something like that from the end of this plenary. And if there’s nothing that is, like -- that not everyone can live with, especially the champions, we keep “source”. And consider that, like, the consider that as a condition of Stage 3.

LCA: Yeah, that seems very reasonable. We can do that.

CDA: Okay. We have a little under 10 minutes left. If it’s all right, we can proceed with some other topics in the queue. Does that seem okay?

LCA: Yeah.

CDA: All right. We had EAO.

EAO: How can we test this without a concrete JavaScript module?

NRO: Import attributes have a similar problem with testing them is difficult because there are this layer between 262 and, like, whatever wraps 262, and, like, specifically for import attributes, the only way to test the specific behavior is to we require whatever tool you used to test262 -- like, 262-valid protectable to see how we acquire the global dollar (!?) to fix to variable. And I think the only way to fix this proposal would be to require this run or the provide, like, a stub module source we can use in some test.

EAO: I’m happy to accept an assertion that this is testable without a concrete JS ModuleSource.

LCA: Yeah, that it’s testable if we add some assertions to test262 that the host must follow certain protocols. Okay. The queue is empty. So we’d like to ask for Stage 3. And this is conditional on opening an issue for naming suggestions and I guess we’ll set the deadline to next Friday. That would be one week after the next meeting -- or after the end of the meeting. Sorry, guys, that should be rephrased to conditional Stage 3 pending that we open an issue that is collecting feedback until next Friday for naming suggestions and unless we find a better name in that issue by next Friday, we will proceed with the current “source” name.

CDA: Nicolo?

NRO: Yes, so, like, if in this week we find a better name and the keyword changes, is there, like, Stage 3 problematic or is it only problematic if the proposal remains as it is?

LCA: Yeah, I don’t really know what the answer is? I would expect –I expect we want to ratify this at the next meeting if we have a new name.

SYG: A conditional Stage 3 is that once the condition is met, we’re not -- sorry, let me rephrase the condition I propose. That the condition I propose is that basically this will unconditionally reach Stage 3 after a week. There might be a change -- like, it’s not Stage 3 until at least a week, and in that week, a new name could arise and it changes. But whatever it changes to, that becomes the Stage 3 proposal after the issue closes. Because we have a default. It’s not that we don’t have a name. We have a default name, which is “source.” Which nobody is objecting to, including myself. Even though I’m unhappy with it. It’s not -- I guess that’s not quite like a condition -- that the condition is just like a -- like an extra period of time.

DE: Yeah, so I’m next on the queue. I think what you’re saying makes sense, so maybe it was my initial intuition, but honestly, if we come up with a different name, we should probably run it by the whole committee for review before settling on it, because we may find -- people may have opinions or we may find problems with it that are not people who are among the thread respondents. On the other hand, if we keep the same name, I think we can go to Stage 3 without returning to plenary. Overall, we’ve been discussing cases where conditionality might not make sense. There’s been a couple times recently where things were proposed for a conditional stage advancement where we rejected that as a committee because the conditions were kind of too complicated. I think this one passes the kind of test for being simple and scoped enough that it makes sense.

CDA: Okay, we have a clarifying question from Jordan.

JHD: Yeah, I just was like you. You mentioned that through this process, y’all have come up with the idea of phases. So what are the phases? Like, presumably it’s like a list of words of which “source” is one of them. Thank you if there’s a slide that I missed. So you’re calling source as the fetch compile?

LCA: Yes, exactly. Source is the fetch compile phase. I can go through them again. This one is the asset import. This one is the source phase import. This one is the instance import. This is the thing that would be returned from a module expression or module declaration. The link phase is defer. And eval phase has no name.

JHD: Okay. Thank you. It would be great to link this slide or quote it in the issue as well.

LCA: Sure.

CDA: Yeah. Yeah, I agree. I’m next in the queue and I think it’s the same as SFC’s item, which I moved up in the queue, which is agreeing with DE that it strikes me as odd that we would conditional approve the name change when we don’t know the name. I think that’s something that needs to be brought back to committee. But I think it’s fair to treat the proposal as Stage 3 still sort of conditionally. SFC, did you want to add anything to that?

SFC: Not really, except I think it’s a process.

CDA: Okay.

SFC: It’s more like I think I like the word “source,” but if there were another word, I think it would be good to, you know, review that. Like, if someone comes up with the word “compiled” as the other proposal, I think we should discuss that term.

CDA: Okay. SYG is in the queue, did you want to speak on -- next Friday sounding good?

SYG: No, that was just a quick response to them.

CDA: All right, so consensus for the conditional Stage 3? I think you had some words of support already, and then we’ve got CM plus one for Stage 3 from Agoric. I am also supporting Stage 3. JWK supports for Stage 3 with or without renaming. Anybody else want to chime in on support or objection before we move on? EAO, plus 1 for Stage 3. And NRO, plus 1 for Stage 3 as well. All right, we have Stage 3 for source phase imports pending the discussion on the naming.

LCA: Thank you.

### Summary

The significant follow ups from last meeting:

- Dynamic import syntax has switched to `import.source()`
- `export source default from` will not be tackled as part of this proposal, to be investigated in `export default from` proposal.
- The static `import source` syntax will not be aligned with the dynamic `import.source` syntax.

There is discussion about the name of the phase keyword (currently source). SYG brought up that some folks were confused by the source keyword, expecting it to return unparsed, uncompiled source code.

To resolve this, we have opened an issue https://github.com/tc39/proposal-source-phase-imports/issues/53 to bikeshed alternative names. This issue is open until Friday, 23-07-2023. If no better keyword is found until then, we stick with `source`. Otherwise we’ll come back to the next meeting with the new name.

Stage 3 has been reached conditionally on the above name bikeshed concluding.

### Conclusion

Stage 3 has been reached conditionally on the above name bikeshed concluding.

## Set methods: deferring callability check / handling negative sizes

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-set-methods)
- no slides presented
  - https://github.com/tc39/proposal-set-methods/issues/98
  - https://github.com/tc39/proposal-set-methods/issues/84

KG: Okay. So I have a couple of small PRs for set methods, which is at Stage 3, so these are just extremely minor tweaks. The first one is this callability check for the next method, so you may recall at the last meeting, there was a tweak to the iterator helpers proposal, also at Stage 3, to remove this eager callability check for the next method that you looked up on the result of calling simple.iterator. The idea was that you are just sort of assuming that the thing that it gives you is well formed and you will get an error if you ever actually go the call the next method. But not if, like, you don’t actually end up consuming the iterator. The idea is we’re not trying to be super eager about validating everything up front.

KG: So in iterator helpers we removed this callability check on `next` on the assumption that it would just fail when you actually tried to call it, and that was okay. There is a similar eager callability check on a next method in the set methods proposal, which I filed here. It’s not quite identical because we are getting it out of the keys method rather than the symbol.iterator method. But it is quite similar. So SYG points out that for consistency, we should probably remove this callability check. So the first thing I would like to ask for is consensus on removing this line. So with nothing on the queue, I’m hearing no objections, I see I have explicit support from SYG, I will take that as consensus.

KG: The second thing is that there are other callability checks, in particular, for the `has` and `keys` methods that you look up on a set. And MF suggested perhaps we should drop these callability checks. I am not inclined to do so because I think these are a useful way to get errors that you kind of want to get if you pass something of the wrong type as an argument to `Set.prototype.union` or whatever. Without these checks, if you pass something which happens to have a numeric size property, it will pass, and when the algorithm will run on it and maybe will you get an error and maybe you won’t. In particular, if you’re like doing an intersection where the receiver is the empty set, you actually won’t get an error. I think that’s a bad experience, so I’m inclined to keep these callability checks, seeing as they are on string keyed properties of an arbitrary object instead of something that’s specifically supposed to vend an iterator. So unless someone feels very strongly that we should drop these callability checks as well, I will keep them. But I did want to raise the issue. I see SYG is on the queue.

SYG: Yeah, let’s keep those. I think there’s -- I think there’s less of a -- like, from the merits argument to remove the other ones, other than consistency with what we decided, and, yeah, there’s no reason to really remove these.

KG: Okay. JHD?

JHD: Yeah, same thing. I think we should be, in general, checking and eagerly throwing anything as early as possible wherever we can, except for the places where we must not for consistency or where it doesn’t make sense, so I think we should keep these.

KG: Sounds good. Okay, I will keep those. So that’s my first of the two normative issues with set methods. I guess I’ll just go ahead and move on to the other one.

KG: So this one was raised actually a while ago, and I just completely failed to address it, so I’m bringing it back now. I’d like to highlight this line for you, which in the -- as you may recall, when you pass an object as an argument to `Set.prototype.union` or whatever, we look up the size, has, keys properties on it, and as just discussed for as has and key, we enter they are callable and for size, we enter not nan, and then ToInteger it, but we had an assert -- or not an assert, but a type description that said that the size was a non-negative integer. The algorithm didn’t actually enforce that, so the spec was incoherent on this point for the treatment of negative integers passed as the size property of an argument to these methods. So there’s the question of how should we handle negative integers. There’s basically two options. We can clamp it to zero or we can throw a range error. I originally figured we should clamp it to for consistency, but since then I have thought about whether we would be well served as coercing things in general, as we will discuss later in the meeting, I think we are basically not. If you pass something with a negative size property, that’s just incoherent, and I think an error is more useful. So I am hoping that the committee is amenable to inserting a check after this line -- I guess after this line 6 here that says if the in size is negative, throw a range error exception. And then this description of the type would become correct.

SYG: You said the clamping would be consistent. What is it consistent with?

KG: You know, for some reason, I thought it was consistent with something, but now I no longer think that. The array constructor throws if you pass it a negative value. `Array.prototype.at`,
`slice`, et cetera, treat negative values as indexing from the end. Yeah, I don’t think that’s strong consistency argument here for --

SYG: Yeah, I think indexes are categorically different than sizes. Yeah, cool.

RGN: Yeah, so rejecting negative numbers while maintaining two integer or infinity is going to result in, I think, the weird case where a negative fraction is accepted.

KG: In this one there definitely is a consistency argument. All of the methods in the language that take integer arguments, with two exceptions (three with temporal, but two prior to temporal) round rather than throwing if you give them non-integral values. So if you do `Array.prototype.at(1.5)`, then it’s actually 1. That is also something that I will discuss in the coercing talk later in the meeting. But you’re right, that’s kind of weird, rounding in general -- or truncating in general, extremely weird. I would be open to throwing if it is non-integral, having this be one of the very few places in the language that does that. I think we probably should do that for new methods going forward.

RGN: Okay, I think I also would support that, but mostly I was just looking for clarification here that the current intent is to keep the truncation of two integer or infinity even with the introduction of rejecting negative values.

KG: Yes, that’s right. That was the intention, and I’m not asking for anything different right now. Depending on how the conversation later in the meeting goes, I may come back and suggest tweaks to this and other Stage 3 proposals where we can get away with it.

RGN: Great. Thanks.

KG: Okay, so concretely, inserting a range error for negative values between steps 6 and 7 here in my proposal. Sounds like people are in favor, unless anyone is opposed, I will take that as consensus. Great. I will get those PRs landed. Thanks very much.

### Summary

The committee was in favor of removing the callability check for the `next` method for consistency with the rest of the language, but keeping the callability checks for `has` and `keys` methods since there is less of a consistency argument and it is a better user experience.

The committee was also in favor of throwing a range error for negative sizes with some discussion of the treatment of fractional arguments to integer-taking methods to happen as part of the later presentation on coercion in general.

## Decimal: Open-ended discussion

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://docs.google.com/presentation/d/19MaO7On6knlweYZUei-d5VyqANzkKeR8QmC13KATvgs/)

JMN: Yeah, so thanks for coming, everyone. My name is JMN, I work at Igalia doing some of this work about decimals in partnership with Bloomberg. This talk will be open ended discussion, but it has elements of a stage 1 update, Decimal is a stage 1 proposal, but early.

JMN: I had initially intended to present this back in May, but then I got sick. The context is Decimal has been at Stage 1 for a while. The last update was March 2023. We had a great discussion, but then the queue was full, no time. I wanted to continue the discussion in May but then I got sick, so here we are again. Let’s get your math engines fired up.

JMN: So the outstanding discussion items I tried to remember as best I could from the queue from March, with a little bit of loaded prompting here, one of the questions is should we do decimals at all? What should this feature look like, and there are other topics like why not rational numbers or other representations of rational numbers? And then there was also a question in March of whether the problem might be too specialized and whether this should just be a library.

JMN: Just to give you a brief sketch of my thinking before we get into some of these things. I’ll flesh out some of these points later if you haven’t heard about this stuff.

JMN: Just to lay the groundwork here, so decimal is not some kind of frozen thing. There is a proposal or a plan forward about this stuff. The data model that I had in mind, that I’d like to discuss here with you all today, is decimal 128, so this is a standard for decimal floating point arithmetic using 128 bits. The idea is to use normalized values. So in this world, 1.2 and 1.20 are exactly the same thing. Not distinct values. In official IEEE 754, those are actually distinct, though they compare equal, but here they would be equal. The proposal is to add some new syntax there. You see that little `m` suffix, the idea would be that that’s a new decimal 128 value. There would be a new decimal class with some static methods for calculations. All the confusing parts of floating points just die. They go away. So plus and minus infinity don’t exist in this understanding, NaN doesn’t exist. There’s no negative zero -- well, it’s kind of a consequence of our commitment to normalization. There’s no mixing with the methods in the `Math` class, so just throw whenever you’re given decimal128 in arguments. There’s no operator overloading. Only basic arithmetic is supported and there’s just one rounding mode. So the idea here is to try to keep things simple to try to keep things fast, I think all of us can agree that we want to keep our JS engines fast. And the idea here is to also satisfy the needs of developers and those who want decimal numbers, so there’s a lot of use cases being addressed here. All these things are of course, up for discussion. It’s also part of the point of this discussion here today.

JMN: Just some kind of sample code about how this would go. So I assume that some of you have been out to restaurants here. And you look at your receipt, doesn’t have to be here of course. Know when you buy items, they typically have some kind of tax on them so you have a list of items that you buy. There’s a count, you know, say you got two of this and five of that or whatever. And there’s some kind of tax applied. If you want to do some calculation here to calculate a bill, you can see that there’s some decimals scattered throughout here. You see there’s that `1m` there when we add some kind of tax, which the find down at the bottom. That’s what it would look like. That’s just a very simple example. You can talk about all sorts of examples.

JMN: This for instance, another great way that decimals would help us would be with some kind of relational database or non-relational database. You imagine plugging into Postgres and specify that decimal columns, something that SQL has had for ages and which are, of course, real, exact decimals get down correctly. You would do your query and you get some kind of JS decimal values back.

JMN: There’s a playground that has been developed for some of this stuff. It’s somewhat behind the most up-to-date thinking that I am talking about here today. But nonetheless, I think it’s okay to mention that this thing exists. You can run this and have some fun with it. There may be some bugs there, please report them on GitHub. I’ll take a look.

JMN: There’s a new npm package out there. I had some fun trying to do decimal128 in userland JavaScript. Decimal128 is available there. So that actually reflects the most up-to-date thinking about decimal128 and how it might look and that small. That’s just a module, not a polyfill, so the syntax that I talked about a couple slides ago is not present there. That’s for playing around with what decimal128 would look like in JS.

JMN: So now we tried to get to some of the motivating factors here. The primary domain are business and finance. I think that should be a bit of a no-brainer. Think about all of the things that you deal with on a day to day basis where you yourself have to read and write numbers. A lot of that has to do with money, right? Data exchange, so this is about JS engines sitting between two systems, say a relational database and the browser or between two other systems. And then another class of use cases come from science, engineering, mathematics. The difficulty is that with binary floats, the kind of flows that we know and love or not in JavaScript, can be incorrect in ways that really matter in these contexts.

JMN: So in business and finance, you can get sued if you get a calculation wrong. For instance, I live in Germany and German banks can sometimes get sued if you get something wrong, even by one cent in, say, some kind of official bank printout or bank statement. Data exchange, of course we all want to get that correct. In science, engineering and math, the same thing, right? The status quo is that decimal numbers need to be handled with strings. If you want to do exact computations with decimal numbers, you have to treat them as a string. And you have to do some kind of digit by digit arithmetic on these things.

JMN: Or you either don’t know or don’t care, and you work with binary floats and data loss just happens. or things are just wrong, and you don’t know why. There are various userland libraries out there with varying APIs. But you know what, this is just me pounding the table. Let’s skip that and try to look at some data.

JMN: Igalia has been running a survey to solicit JS developers to get their views about decimal numbers and floating point numbers. You can fill it out too, so if you go to the slides, can link is down and the thing is not closed, you can fill it out. We have received 73 responses so far and I want to give you an appreciation of some of these answers. So here is a question that we asked, are there any places in your code where you’re afraid of a rounding error? I talked about normalization earlier, so let’s take an unnormalized version here. You see lots of yeses. This is maybe not so good because of course the purpose of this survey is to get the opinions of people who care about these kinds of things, so of course they’re going to say yes. But to be more serious here, everywhere we deal with money, which is all over the place, yes, there are many. Every time we show a price or discount to the user, which is constantly. I saw a “no” in the survey data, which is surprising, but also quite uncommon, as you might have guessed.

JMN: What kinds of applications in your organization are teal dealing with numbers? Here we have people doing point of sale, purchasing, calculating shipping weights, e-commerce, you can see that there’s a kind of domain that’s developing here. Back-office processing and reporting. One person said we work a lot with currencies of products and invoices, et cetera, and sometimes notice rounding errors. “I work in a digital transformation lab for investment services, so pretty much all of our applications are working with these kinds of numbers.” Data visualization. Someone said that they have some kind of numerical input with the step up, step down interface. Numerical projections of actuarial projections and calculations. Exchange, precision and structural calculation it’s a bit of a mixed thing, but okay. I like this one, “we are building a bank”. I thought that was an incredible use case.

JMN: So how do you process decimals? Some interesting stuff here. We have to show up to two des malls in the applications and we might calculate up to more on the server, present a rounded value, and then in the front end, have to add and round again. That sounds uncomfortable. In our systems, we calculate pricing, some kind of metered usage for providers of these cloud services, we have to input the cost in micro cents, so that’s very fine grind. When we display to user, we I did display in a form they’re familiar with and calculate in JS and display it. We transfer the amount entry and display, so it sounds like some kind of banking or money thing, VAT, that’s European value added tax computation. Sums of selected transactions, kind of like this sample code I gave you earlier. Here is another one, to avoid round trips on the server, we recalculate many money values on the client on JS to preview what the value will be on saving them as well as immediately validating some values. User type in items weights and ounces, fractional line item quantities, item costs and prices. So you can see there’s a nice mix of front end and back end applications here.

JMN: So what kinds of calculations do you do? Getting it wrong is fines and refunds to clients, so that’s something we’re incredibly cautious about. It’s nice to be able to show something fast in the browser. So here one, it’s almost always summation, and it’s on the client and the server. We use a decimal library on the client and its error prone. That sounds bad. Here is someone who says addition and subtraction, both client and the server side and the testimony data. So far pretty good, but we have to provide work arounds when we encounter the usual JS decimal representation. Pitfalls? Arithmetic calculations are very common. This done on both the client and the server. This trick-or-treatly comes up in calculating arbitrary percentage of a money value. So we work in manufacturing and almost all of those come up in some fashion or another calculating distances, money, we’ve got do it all we’ve got to do it using decimals.

JMN: So that’s actually just a tiny snippet of this data. It’s really fantastic. There’s a ton of juicy quotes that I omitted, but I hope you start to get the point just from that sample. You can see that many developers need decimals for accuracy, and most of the cases involve money. They also need to be fast. They generally need to be fast to support some kind of live user feedback. And we can see that need goes beyond merely displaying decimal numbers, so it’s not just enough to treat these as a string and present the string. More over, in the data which we just suggest that pretty much everyone would be satisfied with basic arithmetic. There’s a minority that wants exponential function, log or ?, but that’s a small minority.

JMN: So the use cases are finance and business data exchange and science engineering. Let’s just dig into those a little bit more. So money. So handing money exactly is the clearest motivation. Binary flows just won’t do in many cases. What are some calculations that come up in finance? Well, things like adding together two items. That’s addition, that’s simple. Removing an item from a total is another one where you need exactness, that’s subtraction. Multiplying a cost by tax rate. We saw that before. Multiplication. How about getting an average? Well, that’s addition and division. Dividing an interval into equal or -- is equal to possible parts. That’s kind of remainder operation. Currency conversion. That’s also multiplication and division.

JMN: Data exchange. This is one where JS engines, whether front end or back end, say a browser consuming JSON input or some kind of nodes server are surrounded by systems that natively support decimals like relational databases or other systems written in languages that natively support decimals. There’s a need in that use case for consuming these of course. Possibly doing some light computations or (inaudible) and then passing them on or just displaying the results.

JMN: There’s a whole class of use cases here, science, engineering and mathematics, so working with dimensions, so things like, you know, fees, cubic meters and so on and converting between them. So here you might need exponential log or ITm, possibly trigonometric functionsish maybe not but this comes up a little bit infrequently, as I mentioned earlier.

JMN: There’s a number of interesting questions about how to represent these things. So even if you buy the idea that decimal numbers are something that you may want, there are a number of different representations, concrete representations that could be chosen to represent them. And one of the discussion points that we had back in March is a what about rational numbers? And the thinking there is I think quite understandable, in the mathematical sense, rations are of course strictly more expressive than decimals in the did since that every decimal, as we normally understand it, is a rational number, obviously, right? It’s some integer over the power of 10, right? And then -- so all use cases for decimals, again, following this kind of math mall Cal thinking, could be handled by rations, and even more, there are some use case involving, say, images and video where one has to work with rational numbers. Think of the aspect ratios in television, prince. And then here is one, so if we work with exact decimal numbers, then we have this kind of classical, it’s almost a meme among number nerds. 0.1 plus 0.2 is equal 0.3. But if you do things like 1 divided by 3 and multiply that by 3, I guess that’s not going to be 1, and the decimal 128 universe. Why would that be okay? Why don’t you use rational numbers, right?

JMN: There are some good reasons not to use rations. If I could mention this very last point, I think that’s actually the most important. Up with is their just a separate data type. They could be an added JavaScript independently of the decimal numbers, and some languages indeed have both. But then to add even more to this argument, one issue is that normalization is an issue. Normalization means trying to find out the greatest common deviser and repeatedly doing that until you have some kind of normal form rational number. There might be some kind of good normalization strategies out there, but I feel like we’re starting to go down a rabbit hole when we explore that kind of issue. Rendering a rational number, you know, like 1 over 3 as a decimal string involves -- or it may involve quite a lot of computation. This is the thing that we all learned in probably elementary school, you know, be long division, to generate the digits of some kind of quotient while we have to really just do it digit by digit. Probably the worst thing here, in my view, is that it’s calculations -- as calculations get more complex, the numerators and denominators get bigger and bigger very, very quickly, exponentially quickly. And to convince yourself of that, just write down what it is to say A over B plus C over D, uh-oh, you’re starting to multiply numerators and denominators, and you do that again, now you multiplied the multiresult of the multiplication. If you have a computation that involves three steps, now these things are getting huge. And if you have some kind of normalization where you reduce everything to a minimal form, then you’re generating the big numbers only to shrink them down again. So it’s not a very light weight things. Especially when in front of us there’s a very simple alternative and some kind of decimal number, right? And as I mentioned, rations are just a separate data type. So although I, as a math guy, I’m very attracted to the idea that rational numbers are just of course some kind of super set of decimals, you pay a price for that expressiveness. Next slide, please. So, again, just to repeat this from earlier, we’re currently leaning toward, again, it’s not a final decision, but leaning toward decimal 128. Just a bit more details about that. Decimal 128 is a standard, I didn’t make what up. It’s IEE 754 since 2008. Rereflects a rot of research or various representations of decimal numbers. Here as the name suggests, values take up 128 bits. There might be some optimizations possible in some cases, but just naively.

JMN: You can think 128 bits is my default approach there. What can you represent there? You can represent up to 34 significant digits, and the exponent or the power of 10 here, the kind of way you shift the decimal point left or right can vary by about 6,000. And just to convince yourself of whether 34 is needed or whether that’s enough, just ask yourself how many times you have yourself used a number that uses even something close to that many decimal places. I mean, we can talk about LL and S bank account, but even that uses, what, nine decimal places, nine significant digits, so we’re talking about 34 here. We can represent all sort of things using 34 significant digits. I challenge anyone to find me a real use case where they have 20 significant digits. We’re talking about human readable and human writable numbers here, so that many digits is probably going to be hard to find. The nice thing about the decimal 128 approach is that it’s fast. Memory requirements are easy to reason about even in the face of complex calculations. That’s maybe one of the down sides of more liberal approaches like some kind of big decimal approach where you have essentially unlimited precision. The difficulty there is that analogous to rational numbers, the number of digits you need grows quickly. That’s relatively straightforward to implement, especially considering that we have only a limited repertoire of functions in mind here, addition, subtraction, so on. Libraries exist. There’s one by Bloomberg, another one by IBM. And depending on your setting, your compiler, your C compiler might support this out of the box. There’s work on trying to add this to C and C++ standards. Decimal 128 is not a silver bullet. There will be some weirdness. So, yes, in this setting, 0.1 plus 0.2 really is exactly 0.3, but unfortunately, 1 divided by 3 times 3 isn’t 1. It’s just 34 nines. And, well, this is one of the things where you have to say this is some progress. This gives us what we probably want in many cases, but it’s not a silver bullet. If you really need that to be exactly one, then you would need something like rational numbers. By the way, other decimal representations also suffer from this problem. Other things like big decimal or some kind of fixed number of digits or fixed number of decimal point digits are also going to suffer from this problem. Somehow inherent in working with decimal numbers here. Next slide, please. There is another issue that has come up since the March discussion, which I would love to get some input about, which is rounding. There are a few different ways to round numbers out there. What’s interesting is some languages pick one. It’s usually this kind of bankers rounding or rounding ties up to nearest even number. C#, WebAssembly. Actually, the methods in JS number class also do this. And then that’s it, there’s no options to specify a rounding mode. There’s just this one thing available to you. Whereas other languages support multiple rounding modes. You can say things like round to tie to even or round up or round down. These kinds of things. And this is just an open question here. What kind of rounding options should we support? And if we support multiple options, should there be a default, and if so, what should that be called? Next slide. So that’s about it. So that was a kind of stage 1 update about what I’ve been up to since March. Recap itlation of some of the main points about the decimal project, the motivations for it. The use cases. But there are some interesting questions, and I guess we do have some time. That’s why we’re here today. I hope there are some of you out in the audience who are interested in this stuff. The question is do we really want to do some kind of decimal built-in type. And you are okay with this sketch that I made here of having a new decimal class with some static methods for calculation.

WH: I’m confused about whether this is using IEEE decimal128 or not. You say you’re using decimal128, but at the same time, the results are different from what decimal128 would produce because you took out minus zero, infinities and NaN. So this seems incompatible with the way that math has been standardized. I don’t understand why we’d want to diverge and sign up for a huge amount of work to develop our own math standard library rather than using existing ones.

JMN: Right, yeah. That’s a good point. I guess this is not literally an implementation of decimal 128, but some kind of simplified version of it. The idea was that the plus and minus infinity and the not a number could be done. We could export them after all JavaScript itself has these things. I think one issue that I found is that many developers find this confusing to work with comparing the minus infinity to other numbers, and always having to worry about the possibility that the results might not be a number. So this is, I guess, a chance to clean up some of that that are included in the first place, just to say that this probably doesn’t match the needs of many of the use cases that we deal with.

WH: Yeah, this would be an enormous mistake. This is not cleaning up. This is introducing our own alternate standard for decimal which is different from what IEEE specified. Furthermore, if we did this, there’d be no way back, because basic arithmetic operations would produce different results from what IEEE decimal does. So the result would be slower, incompatible, and would prevent the use of other IEEE functions such as power or exponentials.

JMN: Yeah, that’s right. Yeah, I mean, we are, I guess, open to the possibility of including those things. A things like plus and minus infinity and not a number. That could be done. That could be added to what we’re doing here. If I think about the case of data exchange, I wonder, though, if passing along not a number helps or if people really care. If I’m a consumer of data coming from a JS engine, and I get, you know, not a number from some kind of calculation, you know, what do I do?

WH: You most likely got it because you divided zero by zero.

JMN: Right.

WH: Or you took the square root of -1. We should not be inventing our own math library. We should be using one of the existing ones. This is my first point.

WH: My second point is that you seem to have coercions in there. I took a look at some of the code on the slides and the coercions are really weird, with coercions going between Decimals and Numbers, but not all Numbers. The example code uses Numbers for item counts and wouldn’t work without those coercions. I’m surprised to see no mention of that in the presentation.

JMN: You mean that the code prefers not to do coercions?

WH: No, the code relies on coercions.

DE: I can jump in as a co-champion here. I think this was simply an error on the slide about using -- forgetting the use the M suffix for some cases. I think the code on the slide should throw an error, just like it would for biggens, so I agree with WH’s point.

DE: So just to address the previous point, this is decimal 128. I mean, you are -- IEEE arithmetic famously has all these different modes. When some of these modes are about throwing exceptions when you would reach infinities or NaN. Maybe negative zero is something to consider. But I completely agree that this is -- this has caused problems in the past that I don’t want to introduce here. I disagree with the notion of adding operations like square root or log to decimal. I think we should be explicitly saying that these are, like, anti-goals, and I’m quite confused about why they should be considered goals. So, yeah, you have also asked for normalization.

WH: I have not asked for normalization. Who asked for normalization?

DE: I believe you did, and everybody else agreed.

WH: I did not.

DE: So you want decimals to have trailing zeros?

WH: I do not want significant trailing zeroes. But that doesn’t require normalization of decimal values — IEEE cohort members are indistinguishable if we don’t include any operations that can distinguish them, which this proposal doesn’t.

JMN: Would it help perhaps to choose a different name, then? Something like inspired by decimal 128? I mean, we don’t claim to be literally decimal 128.

DE: Sorry, I don’t think that would address the point. The point is --

WH: No, the problem is that we’re inventing a new standard when there’s a perfectly adequate existing one. We should not be in the business of inventing math standards.

DE: The intention is to not invent a new standard. I think we --

WH: Okay. And my third point is that this has object identity. Which means that for every decimal calculation, you can ask the question of is the thing that your function produces a new decimal number or is it reusing an existing decimal number? Like, if you take the max of two decimal values, do you get a new decimal number or do you get an existing decimal number? This will be a giant foot gun. I guess people may rely on decimal values being `===` in some contexts.

DE: I can answer that. All operations would produce new decimal numbers, max in particular. I think we can think about it, this proposal doesn’t -- I don’t think it includes a max operation. The claim that it’s a foot gun, I’m somewhat sympathetic to that. You know, the previous version of this proposal did include operator both for arithmetic operations as well as for comparison operations. This version does not. And that’s largely based on feedback from potential implementers who have told us that they don’t want to do operator overloading again. They don’t want to repeat -- some of them don’t want to repeat what happened with BigInt, of having a bigint operating overloading. So this proposal is trying to be conservative and minimal in omitting those. But I think this is something that we’re open to reconsider.

WH: And, yet, you have a new syntax for literals, which is —

DE: For literals, that’s -- it’s just a lot lighter weight to add a new syntax, and I have the -- the extensible numerics literals, which we could pick up again. This doesn’t cause the operational overloading issues --

WH: It makes it very attractive to ask if a decimal is === to a literal.

DE: Users may try and compare array literals as that works in other languages.

DE: We could also compare with what was raised with IEEE. I’m ultimately -- ultimately, I’m not disagreeing with you. I see that there are significant ergonomic benefits to supporting operator overloading.

WH: Anyway, I have major reservations about some of these decisions here. Let’s go on down the queue.

MLS: This proposal is a non-starter for me if this isn’t using a standard format, (e.g. IEEE 754 Decimal128).

SFC: Yeah, I’ve raised multiple past meetings that trailing zeros are very important for internationalization perspective, so I just wanted to raise that again.

DE: Okay. I just want to mention, when talking about the context of decimals, in a presentation that API and I gave a few years ago, we outlined how almost all other programming languages and database systems include some notion of decimal, and I think part of what we can notice from that experience is that programmers don’t actually complain about the details of decimal semantics. IEEE is not supported in many systems. And I don’t think we should be inventing our own decimal semantics. My takeaway is that we have a lot of flexibility as to the choices that we can make because there’s just a lack of anybody complaining about the inconsistency here, somehow. And strong support in the ecosystem demonstrates that it’s a widely shared need when this isn’t the easiest thing to add to a system. Oh, my next topic, rationale against rationals. The other thing about this is that rationals relate to -- sorry, decimals relate to, as wuss mentioned, formatting. It only makes sense to do the operation of printout in decimal form, if it’s the range of things is restricted to decimals. But further, decimals have this operation of rounding, which comes up all the time in financial applications. It’s just an inherent operation that you do when formatting and calculating that comes up frequently, and just doesn’t quite make logical sense on rationals. So that’s why I think they’re distinct data types. Even if we left aside the efficiency of time and space that rationals have more overhead for.

EAO: So given that this is not considering operator overloading, I’m really struggling to see why does this need to get baked into the language rather than just being a really good library for the users who need this sort of functionality? The motivation that I’ve -- that’s been presented here previously, at least to me, doesn’t really tell the story of why does it need to be in the language rather than just being a library?

JMN: Yeah, you’re right. I think overall, this certainly could be, and of course it exists as a library, or even multiple libraries out there that do these kinds of things. Certainly speed is a big factor there. In the survey data, we saw some, you know, people saying that they need to have some computations in the browser, so this needs to be very fast. For data exchange, you might imagine that this needs to be quite fast, especially if we’re talking about, you know, financial applications.

DE: I disagree that performance is a main concern here. I think the bigger concern is, as was mentioned previously: interchange. We want to have a standard way to pass around decimal values both between different components within JavaScript, as well as between programs that are on different servers. This is why Bloomberg is working on this proposal. Because we use decimal all over the place to represent money quantities. It does risk having bugs if these end up being converted to JavaScript numbers, you know, it’s important to convert things to strings instead, so, you know, that’s the best practice that usually happens, but it’s just -- it’s just pretty difficult to hold everything to that. And it leads to a risky situation, risking bugs. So this is why it makes sense to have it built into the platform, because this -- because it can be used for interchange and because both across libraries and across systems, and because the existence of it can reduce bugs further. Something like temporal, you could article that temporal should also just be a library, but we’ve decided, I think for these same kinds of reasons, that it makes sense for it to be built in, because it’s widely used, of course we already had a built-in data type, but if we didn’t, we should have been adding one anyway. It makes sense for us as a committee to add things to solve shared problems. I think survey results show that this is such a shared problem.

MLS: Talking about data exchange, we’re probably not going to extend JSON to support this. So we have to come up with some other customized way to exchange data?

DE: Well, the JSON source access proposal was built partly to solve this. You know, it solves it just as well or powerly for BigInt, it it was designed for in decimal. But we can unfortunately not change JSON. JSON has a lot of things it’s lacking. Many RPC systems use either abstractions over JSON, which could be extended to support this or buffer protocols that can be extended. In Bloomberg, we have an RPC system which does have a decimal type in its schema, and I think our decimal system is not exceptional. It’s not irrelevant even if JSON is immutable.

DLM: I’m wondering why not use strings for interchange. I see your argument about how people cannot use them reliably. But I don’t see how adding a new decimal type guarantees that people will use it reliably. I think with the point Michael Saboff just made, if we use strings for interchange, it can then also be used in JSON.

DE: That’s in fact what people should do for JSON,.

JMN: I think there was also some discussion about doing calculations. I think what you’re doing is discussing the simplest case, where we take some kind of input and just pass it on as a string. If we take some input and then we have to do some calculations with it, then potentially we might be shooting ourselves in the foot if we get something wrong there.

DE: Yeah, the thing is when you have a string in JavaScript that represents a numeric quantity, it’s extremely tempting to just convert it to a number. You can pass it to all these different APIs, such as plus, that take numbers -- or not plus, but minus, that take numbers and put strings in there instead, and it will, you know, work, kind of, but it will give you rounding errors. That’s why it’s extremely dangerous to not have a separate data type, so, you know, you may use strings when putting it in JSON, but in memory, ideally you should wrap it with something else so you avoid this class of bugs.

SYG: Yeah, I agree with MLS’s point about about JSON. I think in practice, adding new data types in the name of interchange in the hopes that the -- that we will migrate to using those just really has not borne out precisely because of JSON, such a large number of applications are JSON transformers. And I think what we see in practice over and again is that developers will do things that make it easier and simpler to work with JSON and JSON app, which means, for example, keep using objects instead of Maps and Sets. Keep using numbers instead of BigInts. I think that is just what happens in practice. And JSON being eternal is what it is. And I think the interchange hope is really quite misplaced.

DE: I mean, you use things in RPC systems in Google that are not based on JSON that you have open source protocol buffers. I mean, although some applications won’t update, others can. Given that we’ve been adding other things to the standard library that are not represented in JSON, I’m really confused by this argument.

SYG: What are you confused by?

DE: Like, why did we add temporal when temporal doesn’t have a representation in JSON?

SYG: Because temporal is independently useful without being used for peer interchange.

DE: So we went through examples based from the survey data where people expressed that there was utility from this. Like, locally.

SYG: Perhaps they hoped that it would be used for interchange. I’ll take the other side of the bet that it won’t be.

CHU: Well, coming back to the original question, why does it need to be taken to the language, well, coming from a user perspective, I can only (inaudible) for the service. And it’s not only financial applications. We need for such simple things -- so we need it for subletting the slider, and I agree it’s not a performance, but it’s about the balances, and it’s about that right now we have to resort to third party libraries, and we have to, like, evaluate them. And if this is something that is built into the language, there’s a great benefit. It takes away this burden of selecting something and, yeah, as we discussed, there’s input.

DE: So do you find use cases in the front end or only in the back end or both?

CHU: We had a very simple use case in the front end, so I think it’s not only something that is Bloomberg is interested about, but it’s every data, as has been mentioned, this is needed. So we had a use case that we needed to scale from it, so we just -- we have a simple yard component, some slider. We can put a scale to it. And then you just pass it and you need to, like -- if you -- basically (inaudible). So that was our use case, and I can totally relate to the things mentioned.

DLM: I guess I’m next i just wanted to say that I was very surprised in the survey results that so many people were doing financial calculations on the client side. But in finance it is, but it just doesn’t seem like it’s that great an idea to me. And I’m not sure if it’s something that we really should be encouraging.

DE: That’s a legitimate point. I think different -- I’ve heard different things from different people on this. Some like to send all their calculations to the back end to do, for more kind of security, because even a preview could be interpreted as something significant. But we’ve also heard that it’s been a lot on the front end. I think that the front end case that you just mentioned was pretty legitimate.

CHU: It’s not about, like, doing calculations on a project or activity. It’s very common that you do something, you know, like to send the (inaudible). And don’t get decimal wrong. Those huge, big financial calculations, as I said, it’s about a slider. This has nothing to do with slider, like, selecting our own, like, the -- some kind of size of machinery. It’s not about financial calculations.

DE: RBN, you made an interesting point in the chat. Do you want to speak up here.

RBN: The -- I was -- in a way, I kind of echoed Bradford’s statement in the chat as well, that this statement before that don’t do financial calculations on the front end in the c client, do it in the back, and the front end could be no JS and the front end could be electron.

JMN: That’s something we’ve also consistently seen in the survey data. We’ve seen multiple cases of front end and back end use, so I think it’s hard to draw a line here. The use cases go both ways.

CDA: We have Dan Minor next in the queue, but we have only a couple minutes left for this item. We’re not going to be able to get through all the items in the queue. SYG?

SYG: Which item was this? Oh, yes. The main one. Okay, I’m leaning towards not doing this in the language, but I want to emphasize the word “leaning.” I find Waldemar’s correctness foot-gun thing argument fairly convincing in, that if we’re not doing operator overloading and V8 remains of the position that we would not like to have a decimal as a primitive. And given that constraint, the literal syntax poses significant correctness foot gun for the reasons that WH has brought up. I think I’m -- we don’t really have any -- like, we would not block a non-primitive built-in type probably without the literal syntax. The utility of that is diminished, but if the users who would -- the developers who say there is demand for this and would use there can live with that, then I think that is a reasonable path forward. But if instead the preferred path forward is to go back to a primitive or to keep this correctness foot gun in, then my feeling is leaning towards not doing this in the language and continuing to use user libraries.

DE: Could you elaborate on your position on primitives, and also could we hear from other implementers how they feel about adding a primitive type.

CDA: So just real quick point of order. We are out of time. We do have time for a continuation tomorrow in the morning, ideally, but I think we might have some time in the afternoon as well. But we are out of time for this item. We need to move on.

JMN: Could someone capture the queue.

CDA: I’m doing that right now.

JMN: Thank you.

SYG: If we want to do this tomorrow in the morning, by the way, I won’t be here in the morning.

CDA: We can discuss the continuation asynchronously.

### Summary

Key Points:

- A detailed sketch of a path forward for Decimal was offered
- The speaker solicited feedback on the data model (Decimal128), rounding modes, and generally, whether we want to do Decimal at all, and if so, in what form.

### Conclusion

- The issue of normalization vs. non-normalized Decimal128 was raised. It appears that we do not have consensus on this issue.
- The issue of fidelity to official IEEE 754 Decimal128 was raised
- We discussed whether the modest proposal made here is good enough for JS developers

## Meta-review of Stage 3 proposals

Presenter: Peter Klecha (PKA)

- [slides](https://docs.google.com/presentation/d/17LEF7f7vU53cOawMphJwOnG59R_Au5bnJhIdLYn30cM)

PKA: Yeah, so hello, everybody. What DE and I would like to do today is to just briefly refresh the committee on the status of our Stage 3 proposals en masse, with a particular eye toward identifying any possible bottlenecks or stalls in various proposals or even possibly just identifying new ways forward. Concretely, we would like to eventually do this every so often, every maybe three or six meetings, where we identify next steps for proposals, possibly including encouraging renewed effort in writing tests, renewed effort in implementation work, identifying issues to fix in the proposal, maybe even adding new champions. I think we saw that to great effect with the grouping proposal. And maybe even in some cases revisiting proposal stage. But to be very clear, you know, we don’t -- we’re not here to present anything in particular about these proposals. The point here is to prompt the committee to discuss things and to prompt champions to bring any issues that may exist to light.

PKA: So we’ve heard from most of our Stage 3 proposals pretty priestly. Six of them were presented at this meeting. I should say six of the proposals that started a meeting at Stage 3 were presented and another five have been presented in the past calendar year, so there’s really no need to say anything more about these. Although, I whether just note I marked some with an asterisk that at least according to the GitHub readme are in need of tests. And I want to highlight this as an opportunity for anybody who may be especially new to the committee, looking for an opportunity to participate, this is a good chance to help get something across the finish line. So anybody who is in that situation, reach out to the champions of these proposals.

### JSON Modules

PKA: On that, I’ll move on to the five proposals that we haven’t heard from in this past calendar year. The first is JSON modules. Among whose champions is DE. This proposal has tests, has been worked on implementation. It was last presented in January of 2021, so I now want to ask DE if he’d like to share anything about -- briefly about this proposal.

DE: Yeah. Even though we haven’t brought it to plenary recently, I think JSON modules are moving along well. The big thing blocking them, shipping and conditional browsers beyond chromium was the ongoing discussion about import assertions or import attributes now. Now that this is settled, I would encourage everyone to implement and ship this proposal. We have some tests, I’m not sure, maybe some of them need to be updated for the import attributes change. Both in -- I think in test 262 as well as web platform tests. So please let me know if you have any concerns, but other than that, I think it’s doing well at Stage 3.

PKA: Are there any thoughts or questions or comments, not to relitigate any details of the proposal, but thoughts or questions or comments about the proposal status for Dan from the committee?

DLM: I was just going to say this is still on our road map for SpiderMonkey. It was something that a contributor, I’ve been working on, and I’ll continue with and we’re trying to pick it up Ourselves. We can add more information on the status.

NRO: Yeah, for JSON modules, there is still one unsolved point, which is about how, like, SP and the fetch headers for fetching the models, like, like, they were the whole reason why we were discussing processions and, this is being sought now in HTML, but it’s not finished yet.

DE: Right. Thank you so much for that correction. This will be one of the first times that the web platform is fetching JSON directly. So I don’t think there’s, like, an established JSON destination type for fetch. Yeah.

### Legacy Regex Features

PKA: If there’s nothing else, we’ll move on to the next proposal. Legacy regex features in JavaScript, champions are MM and CPE. This proposal does have tests, but not sure about the implementation status. It hasn’t been presented for quite some time. I’m not sure if either MM or CPE are with us. If they are, I’d like to prompt them to --

CM: They are not.

PKA: Okay, so, DE, I know you’ve been most recently in touch with Mark. Do you -- are you able to summarize his recent?

DE: I was in touch with MM? MM was in favor of us discussing this at committee.

DE: So what Mark told us was that at this point, the SES itself service to the kind of security issues that led to them specifically proposing some of the details about the way that these legacy regex features intersect with SES. However, regardless of whether we stick with those details or not, I think this is a really worthwhile proposal because it describes the semantics of a corner of JavaScript that has to ship in implementation for them to be web compatible and the different gentleman have script engines have slightly different implementations of. I think this is excellent work from CPE, and I hope it can be picked up and that we can arrive at fully interoperable implementations without these differences somehow.

MLS: I’m not sure that this is as important for web compatibility since all the engines have slightly different semantics and implement some or the other global values. And there’s been no movement since -- for six years. There doesn't seem to be a big clamor for this. All browser implementations are probably 80% compatible, but the venn diagram for all implementations is probably closer to 50 or 60%.

DE: While that’s true, and I think it’s more like 98 to 99% than 50 or 60%, this committee has previously worked on standardizing lots of things down to the last detail. And so have other standards bodies in the web platform. And I think that’s inherently valuable even if the cases are not currently causing everyone to have huge issues.

MLS: I believe that they will -- many of these could hurt the performance of various engines because of what they actually do.

DE: In that case, it would be good to understand the performance requirements more, and how the the current proposal does hurt performance so that we can iterate on it. At least towards a perspective of matching between engines. I think mismatches between engines in cases like this tend to be kind of random and not actually based on differing performance requirements from different engines.

MLS: Well, I’m not too interested in this proposal. Let’s put it that way.

DE: That’s fair.

MLS: Because of the implications that it has, especially in the higher tiers of our engine.

DE: Could you elaborate.

MLS: Most of these proposal is adding values on the global RegExp object, usually as related to what happened with the last match. So we do matching, in line matching at our highest tiers. We would now have to populate those values while we’re doing that kind of matching.

DE: I’m confused. You already support this API? You just have minor differences we support some of them. There’s some things that this contains that you don’t support?

MLS: Yes. Every implementation has parts of this proposal that they support. We cover many parts of this proposal, but we don’t cover everything. And it’s worked to add them and they could affect our performance. Because now we’re populating things. Currently none of our customer care about this proposal

DE: I see. This was an issue that I wasn’t aware of. I thought the only change here was the sort of roam properties. So I think --

MLS: The proposal is basically adding properties to the global RegExp.

DE: We all agree that the API is bad. But it’s -- so it’s -- I think this leads to a very concrete, good thing that we could do next of pruning the ones that are not supported in all the browsers and seeing if they can with unshipped from the browsers that do ship them. That’s concrete thing we can do in this space, right?

DLM: A follow on to what MLS said, it’s something that we discussed every time we do internal reviews of Stage 3 proposes for implementation, but it always kind of floats down to the bottom just because while we acknowledge there are incompatibles between the engine, they’ve been there for a long time so it never seems like it’s a very pressing thing for us to implement.

DE: Is there a comment from any other implementations? So we could withdraw this proposal. We could say, look, we just don’t care about interoperability here. This is just a weird legacy thing that we’re not going to fix, unlike the other things that we’ve worked on fixing that are weird legacy. But we should probably do that rather than leave it as a Stage 3 proposal, which everybody does not plan on implementing.

DLM: That sounds like something to discuss in the future. Maybe since shoe very not here, we can’t have that discussion.

DE: What do you think about this proposal, SYG?

SYG: I do not think of this proposal. I don’t really know anything about it.

DE: Should we withdraw it in this case?

DE: Okay. Does anybody want to work on this proposal going forward?

CM: I think it would probably be worth getting in touch with CPE. Mark’s connection to this is sort of tertiary. He is basically sponsoring CPE to do this work. I think touching back with the champion might be a good place to start.

DE: Great. I’m not sure if I have CPE’s email address. Do you think you could start that thread?

CM: Yeah, I could ping MM.

DE: Great. Thank you.

### RegExp Modifiers

PKA: Great. Thank you, everybody, for that discussion. Our next proposal to discuss is regex modifiers, the champion is RBN. According to read-me, there are not tests and I’m not sure about implementation status. This was presented a year ago. Is there anything you would like to say about this proposal.

RBN: This is in my backlog currently. I switch to focus to getting `using` in place.

PKA: Great. Thank you. Does anybody have any thoughts or questions for RBN about this proposal?

DE: Question for RBN. Would you be interested in working with more collaborators from committee on this, if you’ve had limited time to work on it?

RBN: Possibly. There’s not really much that needs to be done for it. It’s just the small amount because it’s not terribly complex from a featured implementation perspective. It’s just more a matter of how much time I have had. So if there are folks that are interested in assisting, I would be more than happy to accept some additional contributions.

DE: That’s great. What do implementers think about this proposal? You are working on it? Do you think it’s not worth it or anything?

MLS: We looked into it. I’ve looked at what we need to do in our engine, and it’s possible, but it’s not a high priority given the other things that we have.

DE: All right. Is that -- was that a thumbs up from DLM? No. It was not. Do you have anything to report from Mozilla?

DLM: I just looked it up, and, yeah, we haven’t been tracking this closely at all. I have no updates.

SYG: For V8, it’s on the queue. I agree MLS that it is also not high priority. I don’t have a regex expertise, so I can’t speak to the work involved here or if it’s possible or not possible. It’s on the queue for the regex folks to take a look.

DE: Okay. I think somehow this demonstrates a mismatch in priorities between, you know, subsets of the committee and the -- what the committee had consensus on as a whole, because we agreed to Stage 3 for this, which kind of expresses that we all feel this is motivated. I think we should keep an eye on whether folks still think it’s motivated. Given the prioritization.

SYG: So I want to -- can I respond to that? I think historically, when things reach Stage 3, there is an agreement that it is motivated, but that does not say anything about the relative prioritization for each specific engine’s backlog. Like, that -- I think given June 2022 and July 2023, that’s not terribly long. Like, you are suggesting that this year and one month suggests that the implementers are signaling that we’re not going to do it? Because that’s not the sense I have at all. It’s just that it’s on the backlog.

DE: Probably I’m over indexing from the unexpected hostility towards the previous proposal. And just overreacting. So, yeah, no, I agree that that’s not a huge signal.

SYG: Like, we could say -- like, we could start saying something about relative prioritization, but, yeah, they a different discussion that we ought to have. Like, we just don’t have that norm right now. Things hit Stage 3 and then it’s up to each implementation to prioritize the things that implement ships, in which order.

DE: Yeah, I think that would be useful to share different organizations thoughts on the priority things. But I agree, that’s not the discussion right now.

PFC: I wanted to point out that there are partial tests for this. But they are not merged into test262 main yet because they need some work on the test generation code. So that would be a good place for somebody to get involved in they’re interested in fixing a bug and making that test PR mergable. I think the test PR covers the new syntax, but not the behavior yet.

SYG: And I just want to say the fact that regular expression proposals are generally slower is just because there’s, like, a number -- like a single digit number of people with JS regular expression engine expertise in the world. So I think it’s just usually a staffing question, not really even a relative prioritization question, or rather the relative prioritization question is just determined by staffing rather than, like an actual formed opinion on how important we think something is.

DE: Good. That’s a relief. So this proposal can continue moving on. And if anybody has time to contribute, if anybody is interested in contributing to test 262 tests on the behavior of regex modifiers, that will be very much welcome.

### Duplicate named capture groups

PKA: Okay. Thanks, everybody, for that productive discussion. Our next proposal is duplicate name capture groups, the champion is Kevin Gibbons. There are tests and there is implementation work. This was last presented also about a year ago. KG, would you like to share my brief update about this proposal.

MF: KG went to bed but left me with a message. He is in California. He said that the tests have been available for like a year and he is waiting on implementations, so his message to implementers is please, please, please implement this.

DE: Yes, and thank you to probably MLS for implementing and shipping this. Is that accurate?

MLS: Yeah. And we’ll ship it probably in the next several months. It’s available to STP now, it’s available in seeds, so I’m -- I’m just fixing a bug today.

DE: Oh, great. So this all seems on track.

MLS: I’d like to see some of the other engines.

DLM: I’m working on implementation right now.

MLS: I guess two of the four experts are in the room.

### Shadow Realm

PKA: That’s great to hear. And, yeah, any other thoughts or questions about this one? Seems like a -- we’re moving along. Great. The final proposal is ShadowRealm with many champions. There are -- there’s some work on tests, there’s some work towards implementation. This was last presented in December. Is there a champion present for this proposal who would like to share an update?

CM: Yeah, but I don’t think any -- I know MM is not here. We haven’t heard from (inaudible) for a while. (inaudible).

CM: MM and I spoke about this prior to my coming here. His understanding is that we’re -- at this point we’re waiting on some web integration work. I’m not sure what that means. But that’s what he said.

DE: Yeah, I can give an update on the web integration work, but I’ll -- we can get a comment from DLM as well, since Mozilla provided really helpful feedback here. So the web integration work has been -- we’ve been blocking on that for I think more than a year now. The champions were previously working with Igalia on it, that contract ended. And no one has picked it up since then. So there were multiple issues. One was that it was unclear which APIs were intended to be exposed on the web. There was kind of a lack of full logic for that. And then more recently, Mozilla raised some sort of uncertainty about whether we had fully added the set of APIs, and definitely we -- what we omit is tests. We only test the existence in IBL of things in ShadowRealms, the existence of the properties, but we need to also test the functionality. Because in practice, although in the specification there’s one point that says, oh, yeah, every place you look for the global object, just look for this other thing. That’s easier said than done and has to be replicated in different ways across the code base. We’ll need both the tests and the audit of the specification to move forward. I think Leo said in his communication with us they’re going to look into it in sales force, so I think we should revisit this in the September meeting. Whether that is to have an update on the progress or consider a demotion to Stage 2 if the project remains unstaffed.

DLM: That was a great summary of our concerns. Thank you. And the only thing I’d add is that we consider implementation blocked until these concerns are resolved.

DE: Yeah, and I would note that the three browsers do have implementations of the core ShadowRealm logic, which is not, you know, a trivial thing. So it would be -- it would be quite unfortunate if we could not work out this last bit.

SYG: Yeah, just that V8 has discussed the same concerns with SpiderMonkey, and the SES folks and agree with SpiderMonkey’s concerns and we also consider ourselves blocked until the steps are done.

DE: So is anybody interested in getting involved here? I would be happy to sort of mentor them or anything. Okay, I guess we’ll leave it up to the sales force people, or if anybody wants to volunteer offline, you are completely welcome to. Just get in touch with me or the champions.

PKA: Thanks, everybody. I hope this was useful. I think some productive things were said and learned. I don’t know if there’s I know questions comments or -- at a meta level about this presentation, about repeating it, about potentially doing a similar thing for Stage 2 proposals, of which there are many more. So obviously not all online committee time necessarily, but doing a similar kind of review in hopes of prompting forward or backward progress on those. Open to any questions or comments.

DLM: I just wanted to say thank you for doing this. I thought it was very helpful and it was nice to be able to discuss this with the other implementers at the same time. So I think it’s particularly helpful for Stage 3 proposals, but it could be interesting for Stage 2 as well.

PFC: I want to mention that some of the tests that -- or some of the proposals that do have 262 tests like JSON.parse source access and resizable array buffers and temporal to a certain extent, they all have tests in the staging folder of test262. So another way for more people to get involved would be to help with the effort of porting those to the main tree of test262 since that is a requirement for Stage 4.

DE: I want to raise something that was raised on the chat, that we do is have a lot of proposals in Stage 2 and 1 that haven’t been discussed in a long time and maybe just kind of unowned, and I hope that discussions like there, whether in plenary or not, can be a good way for us to decide on what to do with them next. I’m really interested in any feedback that you have offline also about how to approach this problem.

CDA: Okay. There’s nothing else in the queue. We are right at time. So thank you, everyone. Correct me if I’m wrong, I don’t think we need a summary for this item?

DE: I think we need a summary. We have five different things we discussed and came to conclusions for each of them.

PKA: I’m happy to write that offline.

### Summary

Six (6) Stage 3 proposals were presented during this meeting:

- Temporal
- Resizable/growable Array buffers
- Set methods
- Sync iterator helpers
- Import attributes
- (Async) Explicit resource management

Two (2) proposals went to Stage during the meeting:

- Array grouping
- Promise.withResolvers

Five (5) Stage 3 proposals have been presented this calendar year:

- Array.fromAsync
- Float16 on TypedArrays
- Decorators
- Decorator Metadata
- JSON.parse source text access

Five other Stage (3) proposals were discussed in greater detail:

- JSON Modules: This proposal is active, and awaits some work on HTML integration
- Legacy RegExp Features in JavaScript: Implementors have lost interest in implementing this proposal, and possibly the champion group as well. CM was asked to reach out to champions' group.
- RegExp modifiers: This proposal is active and on the champions' backlog, as well as the backlog of implementors.
- Duplicate Named Capture groups: This is awaiting implementation. It will ship soon in Safari and is implementation work is now ongoing at Mozilla.
- Shadow Realm: Implementors are blocked on HTML integration. Champions were not available to share their updates on that work.
