# 15 May, 2023 Meeting Notes

-----

**Remote attendees:**

| Name                | Abbreviation | Organization      |
| ------------------- | ------------ | ----------------- |
| Jordan Harband      | JHD          | Invited Expert    |
| Sergey Rubanov      | SRV          | Invited Expert    |
| Lea Verou           | LVU          | OpenJS Foundation |
| Ben Allen           | BEN          | Igalia            |
| Duncan MacGregor    | DMM          | ServiceNow        |
| Peter Klecha        | PKA          | Bloomberg LP      |
| Philip Chimento     | PFC          | Igalia, S.L       |
| Nicolò Ribaudo      | NRO          | Igalia, S.L       |
| Ujjwal Sharma       | USA          | Igalia, S.L       |
| Kevin Gibbons       | KG           | F5                |
| Chris de Almeida    | CDA          | IBM               |
| Justin Ridgewell    | JRL          | Vercel            |
| Ben Newman          | BN           | Apollo            |
| Chip Morningstar    | CM           | Agoric            |
| Daniel Ehrenberg    | DE           | Bloomberg         |
| Daniel Minor        | DLM          | Mozilla           |
| Eemeli Aro          | EAO          | Mozilla           |
| Waldemar Horwat     | WH           | Google            |
| Zibi Braniecki      | ZB           | Invited Expert    |
| Michael Saboff      | MLS          | Apple             |
| Jesse Alama         | JMN          | Igalia, S.L       |
| Romulo Cintra       | RCA          | Igalia, S.L       |
| Istvan Sebestyen    | IS           | Ecma              |
| Willian Martins     | WMS          | Netflix           |
| Lenz Weber-Tronic   | LWT          | Apollo            |
| Ron Buckton         | RBN          | Microsoft         |

## Introduction

USA: Hello, and welcome, everyone, to the 96th meeting of TC39. It is my absolute pleasure to welcome you all to this one. We have a lot of stuff to cover, so without further ado -- okay, I need to keep letting people in. Please be introduced to your chair group. There is me, Rob and Chris up top, and a special thanks to Brian, Yulia and Justin for helping us facilitate. So we look forward to making this meeting more productive.

USA: Next up is something very important, our IPR policy. Please remember that this -- everything that we do is according to our IPR policy. Most of you here would be ECMA member delegates. There’s also invited experts.Make sure irrespective of your status that you have signed the RFTG form. And there is details about it in the ECMA-262 repository. So please check this out. I’m not a lawyer, but make sure that you’re on the right side of Things. All right. So notes. We have the transcriptions right now. But we need somebody to help out. So it would be really nice right about now to have some volunteers. Would somebody like to help?

CDA: Well, just a reminder on the last item that we’ve been asking folks to -- at the end of presentations to do a quick summary in the notes. That’s been very helpful. And it’s kind of on all us to remember to do that. Sometimes we forget. So please speak up, you know, use point of order if we haven’t addressed it and make sure we’re doing the end of presentation summaries.

DE: I also want to note that these notes are not intended to contain personal information, and they’re available to be edited now or later in the Google Docs, so everyone in the committee has access to those. If you feel like a comment of yours has been inaccurately described or want to rephrase it to make it more clear, you’re really encouraged to do so. And further, any information deleted, you can do so yourself or you can ask the chairs or the secretary to do so. So there will be a written notice of this posted as well. There already has been a notice posted, so you can just refer to that.

USA: Moving on, let us go through our housekeeping. So, okay, the approval of last meeting’s minute and adoption of the current agenda. Let’s spend a few seconds to see if anybody has any objections. Please speak up if you have any objections with the last meeting’s minutes, which should have been published, as well as the current agenda for this meeting.

USA: Okay. Then the current agenda is adopted, and we move on with Istvan’s report.

## TC39 Secretary’s update

Presenter: Istvan Sebestyen (IS)

- [Slides](https://github.com/tc39/agendas/blob/main/2023/tc39-2023-025.pdf)

IS: Okay, actually, it will be two parts. So the first part, it will be 15 minutes, and you should stop me if I go over the 15 minute. And the second part is that Samina, the new secretary-general of ECMA, will speak to you a couple of minutes and introduce herself and how we are planning to continue, et cetera.

IS: Okay, good. So from now on, the 15 minutes count, so this is the usual type of report, and I can already tell you that I have too many slides, so therefore, I will be really running through the slides, but at least half of the slides are already -- which I have already brought to you in the last meeting, but the action item to which it is connected, it is still going on, so that’s the reason for those who are new, that it is going to be repeated just for reading, but in the presentation, I will be running through.

IS: So what happened lately, the few points, or we had the last meeting in March, and then it is the usual type of structure that I already give. So list of the relevant on ECMA documents, I will not read them out. And then we will have one -- we have one new TC39 member, so I will stop a little bit, then on the status of the short summaries of the meeting contributions, I will have a slide, but basically the problem as it was already said, it is solved now. So from the March meeting, I have received everything. It has been incorporated into the meeting minutes, notes, et cetera.

IS: So now I am here at the list for TC39 documents, so as you know, we have here this double life, so one on GitHub and one on the TC39 internal servers, the one we are operating by the Ecma Secretariat, and this is more the link between the rest of ECMA and TC39. We show here to the rest of ECMA where TC39 is at the moment in his work. Since the March meeting we have a lot of new documents because we have passed many stages in the preparation the ES2023.

IS: Okay, so, yeah, so this is very good. So here we are now on the list of documents for TC39 on the ECMA file server. And I think this is the end of the documents for TC39, what we have now. So we are at the moment at document 25, and I’ll continue. The second slide -- the next slide, it will be -- yeah, the list of the ECMA GA documents. This document, in contrast to the previous one that you can access on the ECMA server as a TC39 participant, because that’s automatically registered by your registration, you can not automatically access. But your GA representative can, whom you can directly contact if you are interested in those. And some of the GA documents are, of course, overlapping with the TC39 documents, and you can have access to these documents via TC39.

IS: We are now approaching the general assembly meeting, so now the number of these documents is increasing.Okay, so then I also explain what I already said, why are these two lists interesting. You can read it, but I repeat it every time, so this is nothing new to you. Next slide: Now, this is important, because since March we have one new TC39 member application, and actually, they have submitted all the relevant, necessary documentation, as application, to ECMA, then filled out the RFTG form, et cetera. The company is a small company from San Francisco, so small software development company, and the name is Oramasearch, and I looked at their web page. The web page is not showing much yet. It’s a brand new company founded this year. So they are most welcome to TC39 and to ECMA from the Secretariat point of view.

IS: Next slide. Okay, so as I mentioned, the status of short summaries to the meeting contributions. So this now works, so thank you very much that everybody in the March meeting, behaved absolutely correctly. Next slide: Status of the ES2023 approval. Internally in TC39 we have an agreement that we go ahead with the current two specifications as they are and published them in the opt out version and in the ECMA -- final draft version. But what we have to do is we have also to show it externally and externally means here to the general assembly, to the other ECMA TCs, et cetera. That’s the reason why we have on our Agenda the formal ES2023 approval in this meeting. It has been already very nicely introduced on the GitHub, so we are going to have this approval in two days, so I’m not going to spend here any more time on this point, because it will come up also in detail two days later. So please go now to the next one.

IS: Next slide. I have explained in the past what is the philosophy in ECMA regarding publication of ECMA standards and so I’m not going here to repeat it in length: Ecma standards are edited in OOXML and published in PDF. But for TC39, who are publishing more than half of all Ecma standards the situation is a little bit different from the overall ECMA policy. For ECMA-262 and ECMA-402 we edit and publish in an interactive HTML version (we are doing that over the GitHub), but we also need in ECMA, for the ECMA publication, the PDF version. But the PDF version is like a book. Now for these two ECMA TC39 standards, and especially for ECMA-262, which is very long, we have since 2016 a little bit of quality problems with the PDF format. Finaly last year we found a solution for that Allen Wirfs-Brock - the previous editor of ECMA-262 offered to produce “nice” PDF formats for ECMA-262 and ECMA 402. This year we are a little bit late, but we convinced Allen the do the same thing again. He fortunately has accepted and has already started to do it for ECMA-402. It was already successful, but obviously he can’t start the real work, only after the html - with the last minute editing - will be approved by the GA. So, practically in July after the GA. The good news is at least for 2023, we have a solution. The bad news is that for 2024 and beyond we don’t have a solution yet, but, again, the good news is that we have one year to solve the problem.

IS: Next slide. Here I have taken out always the yearly current statistics for the ECMA-262. Not for the previous versions. In 2012 we started with the HTML format, so this was only a trial, and then 2015 and 2016, it was a peak, so that was when we have introduced html, and then it went -- it went a little bit down and now for the yearly -- for the latest yearly output, we have here around 100,000 -- 122,000. Last year we had, for the HTML access, about 100,000, which is still quite a lot. We still have the peaks for the edition 5.1, 6 and 7 editions too, --about which I reported many times. We don’t know where they come from. But now this is obviously not counted here because here I am always taking the last year only -- only the actual year’s access.

IS: Next slide. Is actually the same thing, a little bit try to compare the two things (access and downloads). Also one is “apples”, the other is “oranges”. You can see the latest download for the ECMA 262. You can see it is pretty stable over the years. And what you see below, you know, these figures, with the -- with the yellow background, this is compared in percentage to the all ECMA downloads. So you can see that only this one standard, this ECMA-262 is very important to ECMA as a whole and that’s why we’re trying to solve this “nice” PDF problem. There’s a huge user community out there that is really demanding that.

IS: Next slide. So this is the usual type of statistic that I always give to you: figures since the beginning of the year. And you can see all the TC39 standards, added together, it is always, since the beginning of the statistic, over 50% of the total Ecma standards, so at the moment, it is 54% of all the download TC39 standards. The second one is interesting, is the ECMA-404, JSON data format, which is booming. It is almost now half of the downloads of the ECMAScript language standard, ECMA-262.

IS: Next slide. Meeting participation. From the March meeting, it is still a very stabil meeting participation, so the statistics are in total 65 (for the mixed Seattle meeting), local 20, remote 45, and local ⅓, remote 2/3 and exactly 25 companies, which is the usual average. Next slide: Now, this is the last one, which is really important. The status of the two standards, which is up for periodic review in ISO. So the first one, the JSON one, I have good news, is already through, and the second one, the ECMA-414, the ECMAScrip Suite, it has just started.

IS: Next slide. Here the good news, which I have copied out, so it was -- it has ended with 10 positive votes in March the 6th, for the JSON one. So JSON is confirmed for the next five years. Next slide: And here is the other one where you have to speed up and talk to your SC22 national body people, if you happen to know them. So it opened this -- the reconfirmation process in mid-April, and it will close the second of September. So if you have any possibilities to influence your national body in the voting, then please do it. It is rather important for ECMA that this goes through for the next five years. Next slide: As usual here the GA and ExeCom venues and dates. Just copy and paste from other documents and that’s the end of the presentation. Sorry that it took me longer.

## Secretary General introduction

Presenter: Samina Hussain (SHN)

SHN: Hello to everybody. Very short introduction from my side; I have not prepared slides. Thank you IS for your slides and preparations. I joined Ecma in April of this year. I will be the Secretary General-Elect until July 1st. Patrick Luti will continue in his role and I will take over from him at that point in time. I will be working together with IS regarding TC39, it is not the only TC where I’m involved, but I know this is a very important TC. Together with IS, he will support me and I will support him as we go through this year and manage the needs of the committee. I know there are a number of open action items, so we’ll look at that. At this meeting I am just an observer. I’m here to learn and listen. Some of you I’ve met personally and some I’ve met online and I look forward to meeting many of you in Bergen. I will attend and I hope that Istvan will attend, and together there we’ll handle that meeting and address many issues. I’m absolutely open for your questions, concerns, and input. My email address is available to everybody. And with that, I would give it back to the meeting and let you continue. I know there’s quite a lot to discuss today. If at any time you have questions, please don’t hesitate to ask. That was my very short introduction. I’m based in Geneva with the secretariat. Do you have any questions?

USA: There is nothing on the queue yet. Let’s give it a minute. NRO says "Welcome Samina!", and I’d like to echo that really amazing to see you, Samina, welcome on behalf of the entire committee.

SHN: Thank you. I’m looking forward to the role and working together for a smooth running TC. I will do that together with IS. I’ll need a serious handover. So I hope I can have your patience for that in the next few months.

USA: Thank you very much, and we appreciate it.

SHN: Thank you.

USA: All right. Since there is nothing else in the queue, I suppose we can move on to the next item, which is 262 status updates..

## ECMA-262 Status Updates

Presenter: Kevin Gibbons (KG)

KG: Okay, this will be an extremely brief update. There were no editorial changes and no normative changes. We have the same list of upcoming and planned work. Also, the spec was cut last meeting. There will be a formal vote later and not as part of this presentation. That’s it. Thanks.

KG: We did do a bunch of small editorial tweaks. It’s not like we just stopped working for last two months. It’s just that not much was particularly worth calling to the attention of the delegates.

### Conclusion

- No newsworthy changes

## ECMA-402 Status Updates

Presenter: Ujjwal Sharma (USA)

- [spec](https://github.com/tc39/ecma402)
- [PR](https://github.com/tc39/ecma402/pull/768)

USA: All right. Hello. And welcome again. Well, okay, real quick, status update. We have one PR that needs consensus, so or #768 on ECMA-402, I can open it up real quick for you. It is a reorder of the resolved options in number format. So we have reordered the resolved option to move up `roundingPriority` in order to move it closer to all the other rounding related operations. This for a little bit of context, this is a rounding related option that was recently added as part of NumberFormat V3, however, because it was added at the end, alongside all the new options, it felt a bit odd to have all the rounding related options all over the place, so RGN made this PR to reorder this in order to have all the rounding related options neatly grouped next to each other, and this has TG2 consensus, so I would like to hear any thoughts folks might have regarding this. I’ll post a link to these slides on the agendas and, you can check out the discussion we had on this in TG2.

USA: Quickly talking about the editorial updates we made, we did a couple of refactors. Some of them are pretty substantial. I’m not sure if you are familiar with most of this work going on, but I’m sure that if you have been following both the specs, you’d find some of them really interesting. For example, ECMA-402 had this thing where we had camelCase field names, which is not a thing in ECMA-262. It is frowned upon, and we are working on replacing that with pascal case, which is is the sort of convention, and we are changing some phrasing here and there to make it more consistent. We added notes regarding the presences to CLDR as well as UTS 35, and we add more material notes about the CAL behavior and we updated the properties of Intl locale, and all these tiny editorial changes that sort of improved the reading experience of the spec. And that’s it. Well, first of all, I would like to specifically ask for consensus regarding this.

CDA: We are expecting at least some proactive voices of support for consensus. At least for proposals we do. It would be nice to have here. We have a plus one on TCQ from DLM for the normative change.

### Conclusion

- The presented normative PR #768 got consensus with explicit support from DLM.

## ECMA-404 Status Updates

Presenter: Chip Morningstar (CM)

- [spec](https://www.ecma-international.org/publications/standards/Ecma-404.htm)

CM: JSON is like a rock. Decades of interoperability continue.

### Conclusion

- No newsworthy changes (as usual)

## Test262 Status Updates

Presenter: Philip Chimento (PFC)

- [repo](https://github.com/tc39/test262)

PFC: We went over a short status update in our maintainers meeting last week and don’t have a lot to report. One thing that’s happened since last time is test coverage for the `Array.fromAsync` proposal has landed, and others are in the works.

## Updates from the CoC Committee

Presenter: Jordan Harband (JHD)

JHD: So the only thing to report is one item that’s been on our docket for a while, but unfortunately, there’s been a dearth of available CoC group members to discuss it, so I have nothing to report on that just yet, but I would like to invite anyone who is interested in participating in code of conduct committee to indicate your interest. You can feel free to reach out privately or file an issue on the reflector, because the more people we have, the more efficiently we can address items. Thank you.

DE: Question, do -- how many people are active in the conduct committee these days? Like, regularly attending meetings?

JHD: There have only been two people regularly attending meetings, myself and CDA, for a little while. The time slot conflicts with one person, and we haven’t been able to reschedule yet. And another two people at least have had a lot on their plate and been generally unavailable. I haven’t gone and audited the entire list, but that’s what I have in my head about it.

## TC39 Public Calendar

Presenter: Chris de Almeida (CDA)

- [reflector issue](https://github.com/tc39/Reflector/issues/290)

CDA: Okay. So, yeah, we had a request come in, I guess, this is all the way from back in 2021, about the TC39 calendar. So I think hopefully everybody knows that there is an existing TC39 calendar on which all of our various meetings should be -- would -- I would hope would appear. The issue is that that calendar is a private calendar. It’s not meant to be public. It contains, you know, perhaps for various meetings, you know, direct links to meetings, maybe direct links to documents that are not necessarily for public consumption, as well as containing, you know, individuals' email addresses, which some folks may be okay with and others may want to keep very private.

CDA: So the chairs had agreed that there’s utility in having a public calendar, but at the same time trying to see how exactly we would go about it. The original thinking was that we would create this new public calendar and any of the meetings on the existing -- the existing private TC39 calendar that were meant to be public would just simply move from that private calendar to the public calendar and then, you know, us, you know, folks as delegates would subscribe to both calendars. But I think we’ve come up with a better solution here, which is that we will keep the existing private calendar and nothing would move off of that. That would still be the -- the source -- the one source of truth for all the meetings, and then for anything that should be public, you know, the TC39 plenary meeting, for example, is not in open invite meeting, but it is a public meeting that’s fine to be on the public calendar. So for anything that would belong on the public calendar, we would add the public calendar as an attendee, and then those meetings would appear on the public calendar. The benefit to doing it this way is that everybody can still continue to do business as usual, delegates and IEs don’t have to subscribe to an additional calendar to see everything. But there are a couple of issues, relatively minor, but they need to be made very clear, and I think that we can approach, for each individual meeting, decide based on those participants what they want to do. And those things are just, again, that the descriptions of the meetings are public. So anything that you would not want to have for public consumption, whether that be links to notes or anything like that would want to be removed from the description. But the bigger issue is probably the fact that the guest list setting for meetings will determine the visibility of the guests and, therefore, their email addresses. Some people are not comfortable with having their email addresses being exposed on a public calendar. And so for those, I think that, you know, again, it can be up to the meeting participants of what they want to do. They can either say "okay, we’re just going to hide the guest list", or we could say we’ll still have the guest list public, but maybe remove the individuals who don’t want their email addresses to be public. In any case, we don’t have to do a one-size-fits-all for every single meeting, and we can just leave that up to the meeting participants themselves to decide what they want to do.

CDA: I see those down sides are listed down here. Some people find the, you know, being able to see who is attending the meeting to be incredibly useful. And that’s fine. But, again, we have to be respectful for those who do not want their email addresses to be exposed. The tradeoffs -- the benefits outweigh the down sides in being able to have just one source of truth for all of the meetings and not have some meetings on this calendar and some meetings on this other calendar and we have to subscribe to both of them to get the entire view of everything that’s going on. So, yeah, just wanted to mention this here. On the one hand, bring awareness that this is happening, as well as just get any feedback on thoughts and concerns, if any.

SYG: So I support not changing how we use the existing calendar. Remind me again what the goal is for having a public calendar, in addition to the existing one?

CDA: The goal for having a public calendar is for people that participate in the other meetings that folks that are not delegates or invited experts or ECMA staff would be able to be in tune to what is going on. Particularly the outreach group meetings. I think for ECMA-402, this is requested by one of the editors. I think the editors’ meeting, is that -- I don’t know if that’s open -- you know, open invitation or anything, but that was one that was mentioned to be appearing on the public calendar.

CDA: MF, do you have any additional context for the motivation for the public calendar?

MF: Just that some of the meetings that we have are open invite. Not necessarily everybody can participate, but they can at least observe, and we wanted to make that available. There was at least one occasion when we had somebody who did not have access to the public calendar wanting to observe. That’s initially what motivated opening this issue to discuss.

SYG: I don’t really have any concerns. That all seems to be to me to be more addressable as a per-meeting thing. Like, you can add folks you want to each meeting. But to have a consolidated public calendar for TC39, I mean, I’m still not entirely convinced that that needs to be there. But if there’s no existing change to how we use the existing calendar, I don’t really have any concerns.

CDA: Yeah, the changes to how we use and existing calendar are the ones I mentioned, and that’s anything that was meant to go on the public calendar. The folks involved in those meetings need to decide, first of all, whether the description contains anything that shouldn’t be on the public calendar, and then the issue with regard to the guest list being public or not. Is there any other thoughts, comments, concerns, anybody in the queue?

USA: Yes. Next up we have Dan Minor.

DLM: Yes, I want to say this seems like a good compromise to me and I’m in favor of this and I’m hoping this will increase visibility of our actions and maybe, therefore, also increase diversity and participation by more people. I mean, we do have the outreach meetings, but I’m not sure how discoverable those are at the moment, and probably other meetings as well that other people want to observe or even if they don’t observe directly, just have awareness that they are occurring. I think this is a positive change.

MF: So the public calendar will help with discoverability of other meetings with people who know about the public calendar, but are we doing anything to promote or make the public calendar more discoverable or put it up on our website or as the topic of the matrix room? Do we have any plans like that?

CDA: That’s a good question. I definitely think we should, and I think that that’s germane to a lot of other organizations for open source and standards organizations that have very public calendars. I would expect -- you know, we don’t have to make those decisions now, but yeah, I would expect we would have a link to it on the website, have a link to it, you know, somewhere prominently displayed on the how we work repo. Yeah, I see no reason why we wouldn’t want to do those things. Yeah, putting it in the matrix topic also is a great idea

DE: I support this effort. Discoverability has been a challenge with our calendar. It’s hard to make something private and discoverable. It’s kind of easier once things are public. Node.js has had a public calendar for years and it doesn’t seem to cause problems.

CDA: This comes up in inclusion group as well and anything that promotes contributions from folks, especially where access to meetings is not predicated on needing to be a TC39 delegate is a great thing. So thanks everyone.

### Conclusion

- Proceed as outlined in the GH issue
- CDA will probably create a GH issue for every meeting and tag the organizers/participants to determine how they want to proceed wrt meeting description and attendee list policy
- as discussed, will add links to the calendar in appropriate places

## Needs consensus: #3052 limit ArrayBuffer size to 2^53 bytes

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/ecma262/pull/3052)
- [slides](https://docs.google.com/presentation/d/1WR9xgfauXkswMK5Td4NHU8GEpJtdfV_yyA-_gviL7p)

MF: This is a proposal to limit array buffer size to 2\*\*53 and issue by DE opened up and the issue is that we need to create these array buffers that have indexes that cannot be accessed. So it is a size bigger that be 2\*\*53 and because is integers are not contiguous, and that the you are not able to access those higher indexes, so we marked this as an issue and it sat for a very long time.

MF: A background for why this occurs via CanonicalNumericIndexString. And so they have the same two strings, you cannot use a numeric string either as a work around because everything has to go through Number, and if it is not a canonical string representation of a number, it's not treated as an index. And within CreateDataBlock, we already allowed these operations to fail with range errors above this size. It is already the case that implementations can and do for sizes greater than 2\*\*53. So no risk of breakage. We have a new community member who sent this first patch, and it adds a line before the line we were just looking at which sets an upper-bound of 2\*\*53 - 1 on the size. And that is the entire pull request. Any questions about it?

SYG: In support we should just do this but how do you actually create one right now? In user code because the constructor itself guards.

MF: I have to look at it again, it is not through the array buffer constructor.

SYG: Out of curiosity but it is not important but it is important.

USA: There is DLM with support on the queue for now.

MF: We have right here in the first message, it says in most places we guard for it but in other places such as TypedArray constructor called on iterables, we count up without bounds.

DE: Sorry, yeah, this is theoretical. It’s quite theoretical, the situation where you would count up to 2**53, but it is clearer to have this checked. Thanks.

USA : Perfect, there is overwhelming support, I believe. Yeah, is that it? Michael?

MF: Yup thank you. No more requests.

### Summary of Key Points

- There exists a theoretical edge case where an ArrayBuffer is created that is so large that not all bytes it contains can be accessed.

### Conclusion/Decision

- Consensus on the proposed normative change to land <https://github.com/tc39/ecma262/pull/3052>

## `Array.fromAsync` #41: avoid double construction of this value

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-array-from-async)
- [issue](https://github.com/tc39/proposal-array-from-async/pull/41)
- [slides](https://docs.google.com/presentation/d/1mww3D5CO1uebUYiK7l8O5GLjUR98NJYgeHGxQEgnrNA)

MF: Okay, so, `Array.fromAsync`. To be clear, I am not the champion of `Array.fromAsync`. And I noticed a problem here in my editorial review, and which was also noticed by two other people independently. So I submitted a fix for it but had difficulty contacting the champion, and I did not want to wait until next meeting when I could contact the champion and get it merged, because the implementations are coming and asking for the editorial review. So I wanted to make sure this got done. I have since been able to contact JSC, who should be now available in the call. JSC can you confirm?

JSC: I apologize for any who tried to get in contact with an issue in the proposal. So I apologize for the silence. I do intend to be available for helping. If you really want to reach me, it would be easier to reach me on element and try to get help too. But I am here.

MF: No need for apologies, we all get busy, that is fine. So this is a spec fix but there is highlights. And the issue we will talk about today is the Construct operations on 3.e.i. and 3.k.iv.1. And it happens possibly twice: there is a path that hits both. You see that all paths hit the case 3.e.1 but then we have the j and k cases where in the j case, it does not hit that second Construct but in the k case it does hit that second Construct. And this is odd. That means depending on what kind of object you pass, you might have two calls to the constructor. Remember we are not always calling Array if it is a subclass of Array. And so the second Construct is primed with the length. And we can do that in the array-like object case but not in the Iterable case. We don’t want to call the constructor twice but only once.

MF: I said this was independently discovered three times. So it seems like everybody agrees this does look like a bug and we don’t intentionally want to invoke the constructor twice. The solution here is to take the upper section and move it under the j step, so that in either branch we would be doing a Construct. And not unconditionally earlier. And that is all of my slides. So any questions? Or any opinion?

JSC: While there is not in the queue I wanted to thank you for putting together this slideshow in my absence and putting together this PR too and it looks great to me. And thank you again for doing that work while I was gone.

USA: We have explicit support from PFC.

DE: If this makes sense, I will review it briefly, thanks. This is a good example of when we do have a proposal of stage 3, in some sense, the committee as a whole has some responsibility and I think it is great MF that you put something on the agenda and though you are not the champions of, and so champions are not so active on this and I think that is good for others to get involved in these cases.

CDA: There is also a +1 from JHD.

USA: And that is it. So I think you have a lot of support. Would you like to conclude?

MF: No I think that is all, thank you everyone.

USA: I guess we can spend a couple of minutes summarizing. How do we do this, and pull up the notes and do it collaboratively or?

DE: Yes for context, sorry to jump in because I proposed this and in the past, we did not really get some of these written unless we did it collectively. I think this is really important because the summary and the conclusions are the results of our work. If we can present the notes for a second and then the champion or the presenter or anybody else who wants to write a summary, that would be valuable. So both the summary and the conclusion.

CDA: I think we were glossing over the earlier ones because it was more administrative items earlier on but now we are getting to normative changes and proposals. And I think, we need to flash it up on the screen and sort of collaboratively summarize and write the conclusions.

DE: Let’s go back to the previous topic. And I think administrative topics are good to the extent it was a good idea to have that topic because it did it in the first place.

### Summary of Key Points

- Implementers found this edge case where the constructor is called twice, and we discussed improvement of making that happen only once.

### Conclusion/Decision

- The committee agreed to consensus on PR #41 to fix the double construction issue

## Well-Formed Unicode Strings for Stage 4

Presenter: Micheal Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-is-usv-string)
- [slides](https://docs.google.com/presentation/d/1_y2n2wK2NIDtUeHZZcb3mxEezRMJ7m_7QBQO50NhxbA/edit#slide=id.p)
- [PR](https://github.com/tc39/ecma262/pull/3039)

MF: This is the entire text for the well-formed strings proposal. The proposal adds isWellFormed and toWellFormed. We did not iterate on this too much since this was uncontroversial through its whole life.

MF: As far as implementation status we have two shipping, Safari and Chrome since March, Firefox has recently implemented this proposal, and we have polyfills in core-js and also these methods are polyfilled individually.

MF: We have tests from JHD, he wrote tests a while back and they were merged a while back. And we have a PR for 262 that has been approved by the other editors. So in summary, we have I believe met all criteria for stage 4. And that is all for stage 4.

KG: I support this for stage 4.

USA: Thank you KG, and we have DLM and CDA supporting stage 4. So it looks like you have quite a bit of support. So there is no opposing comments? Not so far. All right, I believe you have consensus. Congratulations, MF for stage 4. We have champagne I believe.

MF: Thank you.

### Conclusion/Decision

- Consensus for stage 4 for Well-Formed Unicode Strings

## Atomics.waitAsync for Stage 4

Presenter: Shu-yu Go (SYG)

- [proposal](https://github.com/tc39/proposal-atomics-wait-async)
- [PR](https://github.com/tc39/ecma262/pull/3049)

SYG: Let me zoom in a bit. So, this is async news of atomics.waitAsync. And this is for blocking the thread, and this is originally motivated because you cannot block the main thread on the environment browser, and that is policy. And so if you want to interact with worker threads that use `Atomics.notify` notify and only option is to use async version, and this is quite old, and we have not presented this for a while, and Chrome got stage two or three years ago and the thread in’ 87 and some time in November of 2020. And then it stopped for a while, and so Safari shipped in 16.4. So this PR is the spec text PR against the main line spec text. And it has gotten fair bunch of reviews at this point and it rating and it is good to go. And there is an HTML component to this because it needs a bunch of post interaction to in queue task to resolve promises across threads or as we call them agents and there are 60 tests. So with that, I would like to and for stage 4 for `Atomics.waitAsync`.

USA: Okay, DE says plus one for stage 4. We got his support. Anybody else? JHD also supports. And SYG we have enough support there.

USA: And you have consensus, congratulations as well, and thank you for – I think this is the first comments in your PR is good in your summary as well.

### Conclusion/Decision

- Consensus for Stage 4 on Atomics.waitAsync

## Base64 for Uint8Array for Stage 2

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-arraybuffer-base64)
- [slides](https://docs.google.com/presentation/d/1es04vDFcRKSYdj9gsNm2pjgIysHZkBa0k6Ds3kle5to/)
- [spec](https://tc39.es/proposal-arraybuffer-base64/spec/)

KG: Hello, I am coming back with base64 again after about a year. There have been a number of tweaks from last time, and I am asking for stage 2 this time.

KG: So you will note the proposal still says "arrayBuffer base64" but the title slide says Uint8Array. We'll get to that. As a reminder the basic thesis statement of this proposal is to have some way to convert binary data to and from base64 strings. This is a common problem, I am sure most of you have encountered it, and also I enjoyed this tweet from the language security team lead where one the hardest parts of porting a cryptographic tool to JavaScript is the need to base64 a Uint8Array.

KG: So the basic API is not quite what it was in the previous presentation, but similar. There is a new pair of methods on Uint8Array instances that give you strings and there is a pair of static methods that take strings and give you UInt8Arrays. And UInt8Array is more convenient than ArrayBuffer because this is a view over an array buffer, so it gives you a straightforward way to just encode a portion of a buffer rather than the entire buffer, and does not lose any expressive power because given a buffer you can wrap it in an Uint8Array.

KG: There's two major changes on this slide since last time, and first is that it is on Uint8Array, and I added toHex and fromHex. I think these are worth adding. And I don’t think there is any other string encoding methods worth adding. I did a review of other options – there are a lot of other bases, but none of them are common from what I can tell, it's just hex and base64 that get actually used.

KG: The other major change since last time is that now there is a streaming API. We were hung up on this last time because streaming API is a more complicated problem than the basic one shot API. And so I talked to PHE last time (and thank you for working with me on this) and we came up with something that I hope will be amenable to everyone and does not increase the complexity of language. The idea is, instead of keeping state in class instances or anything like that, or introducing proper streams into the language which would be a much bigger task, we have these "partial" methods that will give you a pair of things that will give you everything that can fit without padding, and you pass that part into to a subsequent call. And there needs to be a Boolean which specifies whether additional data is expected, and if not you will not have anything left over because it will provide the padding for you, and/or interpret the padding, depending on which direction you are going. And in this way, you can do multiple calls for different chunks, and then a finalization call, and not have to work with the entire data all at once. This is a bit gross but I think keeps the complexity to a minimum for a relatively niche use case without being too complicated for that use case. We have a playground that demonstrates how these would actually be used and it's not too bad. And you can check that out there. That is the biggest change since the last presentation

KG:. All of the base64 methods also take an alphabet parameter. You have the standard base64 and then base64URL that changes two characters. And that option will be identified by this alphabet option that takes either the string `base64` or `base64url`, and no other strings. Similarly, we might add options for padding and whitespace; right now they are not in this version of the proposal, and I keep going back and forth on whether I think they should be. And there will be an open question later that we can talk about padding and whitespace.

KG: So this next slide is just what I said earlier, that this is on `Uint8Array` instead of `ArrayBuffer`, and it is only on `Uint8Array`.

KG: And then, open questions. First, how is padding handled? And I personally, I like things to be canonical, so I am pretty inclined to say that only the canonical base64 encoding is allowed, with padding enforced and no whitespace. But since last presentation, I have been convinced that no one enforces padding to that level, and especially nothing on the web platform will enforce padding to that level except maybe CSP, and probably the correct default is to do what everyone else does and not enforce padding on decoding. But it will still be generated when you are generating strings, by default. I don’t know if you should have an option when generating strings. There is at least one person that has a use case not generating padding but it is not like it is hard to strip off the equal signs at the end if necessary. So I am not sure if that is worth having an option. Maybe options are not expensive and we should just add them. I welcome opinions here. There is a similar question about whitespace, is white space stripped or not when decoding a string. And I can go either way on this. Currently, my plan is to error on encountering white space. But if someone feels strongly, let me know.

KG: And then, so should we include other alphabets, and should we support mixed decoding where you allow the union of base 64 and base 64 URL characters in your input to the decoder? Node.js for example does this, as do a couple of web platform APIs. I am inclined to say that we don't support mixed, since I don’t believe this ever comes up. But you know maybe it is more convenient to allow it. Again if someone feels strongly, please raise it in an issue or on the queue.

KG: What else… in this there is no async version. In userland implementations it's generally sync, and it is not as useful to have an async version, and this should not be no less usable. With very large data you break up the work into a stream anyway, which was mentioned as API form.

KG: I think that is everything. I have a polyfill implementation, and there is a playground with examples and if you would like to get more of a feel of using the API, check that out. Yeah, and then I am sure we have things on the queue. So let’s get to that.

JRL: Can you go back to the slides where you are showing the basic API? Yeah that exact one. So toBase64 and toHex, I am unsure that return value here are strings. In the Node.js buffer API, the API that does the conversion to base64 and hex, is literally called toString. It is self-evident what happens in node but not self-evident here, so is it returning a string or a buffer of some kind?

KG: It is a string. I did not mention it, I thought it was self-evident because base64 is a string encoding of binary data. But yes it is a string.

SYG: Apologize if this has been discussed on the tracker and is there a BYOB? Is there bring-your-own-buffer? Do the `from` methods always create their own buffer? Can I give them a buffer to write into, or do I then have to stitch them together at the end?

KG: Right now they create a new buffer. I am open to adding more stuff that to assign into an existing buffer. I have never wanted that personally. For the streaming API, you have to stitch them together at the end, assuming that is the thing you want, but if you are streaming to the network you can send each chunk as it comes in.

SYG: I think for one shot, I agree and I don’t see much of a use case of BYOB but for multishot, that – none of these are stage 2 concerns, and I support Stage 2.

KG: Yeah, I would love to hear ideas for the API design for the BYOB, because I don’t really know how to make that usable.

SYG: Fair enough, I have not looked too deeply in.

DLM: So the SpiderMonkey team discussed this last week and we agree this is a good addition to the language. And I think stage 2 is the correct place for this and we support it. Thanks.

CM: At Agoric we got together last week to talk about stuff, and we all like this.

USA: And DE has explicit support, and that is the end of the queue.

KG: I do want to come back and talk about options but I want to explicitly and support for stage 2. I am asking for stage 2.

USA: You have stage 2.

KG: Thanks so much. And then so the main things to be worked out are assigning to an existing buffer, and this question of handling of padding and the white space, and the mixed decoding. And these are surely subjective. We can have different defaults and options or not options and if anyone has opinions or arguments or decisions you don't agree with, please bring them up now because I have been waffling on all of them, and there are arguments for both sides. The current plan is not to enforce padding and not have an option to enforce padding and not allow white space and not allow mixed decoding. Just to fill out this matrix here. So if anyone wants including those options, please, please bring it up on the issue tracker and I will be coming back for stage 3 once I have worked those details out.

KG: There is nothing else on the queue, so that is all I had.

### Speaker's Summary of Key Points

- Proposal reached stage 2 with support from a variety of people. Details to be worked out include assigning into an existing buffer especially for the streaming API, handling of padding, handling of whitespace, and the question of whether to allow mixed alphabet decoding.

### Conclusion

- The proposal achieved consensus for stage 2

## Symbol Predicates

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-symbol-predicates)
- [issue](https://github.com/tc39/proposal-symbol-predicates/issues/9)

JHD: I need to confirm stage 3 reviewers because I did not do that when we got stage 2. Anyone want to do a review for it? :crickets: Don’t all jump at once.

DLM: I can help review.

NRO: I can help too.

JHD: Thank you! The other item on the agenda is to confirm the semantics - there is an open question and an issue (MF, chime in if needed). MF’s mental model is that the question it is asking is “is this Symbol well-known?”, and if given a non-Symbol, it would throw. My mental model is that it is asking “is this a well-known Symbol?”, and since it is a predicate, it will return false or true for every input, and never throws. Then there is the last item on the issue that if in fact my mental model holds, Michael suggests we rename it to `Symbol.isWellKnownSymbol`. I want to get people’s thoughts on that, and my personal preference is to keep it as-is, named `Symbol.isWellKnown`. Any thoughts on the queue?

KG: Yes, I definitely would like this API to throw if not given a symbol. And I cannot imagine ever passing something that is not a symbol many and of course, if you do expect to have non-symbol data, it is trivial to also check for that. And I think upwards of 99% of the time that a non-symbol value ends up passed to this API, it will be a bug. And it should throw for the benefits of the people who have that bug. I know that historically, we have been loose about the types that we accept. And I am increasingly dogmatic about trying to avoid doing it in the future. We guarded against something similar in iterator take/drop, and I regard this as being a similar thing. I think that trying to be permissive is not actually helpful.

JHD: I agree with you in principle, but predicates in the language, the web, and userland universally do not throw. isNaN is an example.

KG: What isNaN currently does is insane.

JHD: Sure, but we corrected that with `Number.isNaN`. It does the expected thing and never throws for any reason. I agree with you that we should be more rigorous with the types we accept in our APIs, but I think predicates are a special case for that.

KG: If we are making a predicate, I think if the question the predicate is asking is “is this a well-known Symbol?”, then I agree, but if it is asking “is this Symbol well-known?”, then the question only applies to Symbols and it should throw on non-Symbol inputs.

JHD : I think that the question it is asking is “is this a well-known Symbol?” full stop, and if you think the name should be changed, that is fine.

KG: Yeah sure. I am okay with a name change.

JRL: I agree with JHD and that predicates do not throw, and if they do throw people will have to catch it. And in TypeScript there is a difference between a predicate that tests something is of a particular type, and an assertion that will throw if it does not. This does not feel like an assertion to me.

PFC: I don't want to open a discussion about this in the current item because it's off topic, but I would like to make a suggestion to KG about what you just said about departing from historical designs and being more strict in the values that we accept in new APIs. I would like to consider that could be a design principle that the committee might endorse in a future meeting. Because I think having that articulated explicitly would help proposal authors, if that is in fact a direction that we are going in general, to do the right thing rather than having them copy what historically has been done and rely on delegates opening tickets to say that we do this differently now.

KG: I've been considering coming back to the committee with a presentation on that topic, and I do think it is something we should talk about.

USA: Next we have Shu?

SYG: I will switch the topic, so JHD, feel free to take this offline. But while we are talking about in plan, we reviewed this internally, and we are convinced of the utility of the `isRegisteredSymbol`, because of symbols in WeakMaps, but we are no longer convinced on the utility of `Symbol.isWellKnown`. And the new piece of argument that I found convincing internally, it makes polyfilling really annoying because it is basically a new coordination point for every library in the future that might or every proposal that might add a new well-known symbol, and polyfill symbol that library needs to override Symbol.isWellKnown, and why is that point of that? And add new coordination point?

JHD: Polyfillability has been explicitly rejected as a design constraint for proposals in the past, and I say that as a polyfill author. The second thing is that polyfilling well-known symbols are impossible to do faithfully because they are cross-realm. If you have any caveats, additional ones don’t make it worse.

SYG: Your argument is saying if something is not polyfillable and that is not enough to really change the design of the proposal, which I agree with. But I am saying I don’t understand the core motivation utility of it, and given that I don’t understand –

JHD: "Is this a symbol that is cross-realm?"

SYG: What is that used for?

JHD: Any cross realm communication like anything like iframes or modules, things like that, where you want to determine is this a value that will be the same one, that I have to preserve its identity across realms vs one that…

SYG: What is that used for? Can you give me a concrete example?

JHD: These are all the same arguments as for true Realms, that ended up not convincing the committee, and we went with ShadowRealms and so I suspect it is not too convincing. The easy concrete use case is for debugging and communicating if this is a well-known symbol. There are systems that pass objects across realms and need to know what kind of values these are. In general, when we have a value with a characteristic, there should be a way in the language to detect when those characteristics apply.

SYG: I would love to see a concrete use case here because we did not really come up with. And I would like to reopen the questions are like whether or not we should just have the isWellKnown one stage 3 come time?

JHD: I have a package already for this check. I do use it and only in tests, but potentially in future polyfills, and having that predicate will make polyfilling easier. I am happy to discuss that further within stage 2, where all questions remain open.

USA: Next up we have MAH who volunteers for stage 2 review and next up we have JSC.

JSC: I want to express my opinion to the method name and if it is a predicate, it should start with is and so there discussion about decorate methods and it was about some other stuff that starts with is but they were not predicates and it was decided to keep it clear between is and methods that did not start with is. It goes the other way. And that is just something that I point to as the sort of precedent that we have going. And there are some examples from DD and such in the platform in regard to that.

JHD: Decorators was about property names and not functions, and I hope it is uncontroversial that predicate functions should always start with “is” or “has”, or something similar.

### Speaker's Summary of Key Points

- we will continue to keep the current semantics and continue to have the word Symbol at the end
- will file an issue to address the concerns about isWellKnownSymbol

### Conclusion

- Spec reviewers: DLM, NRO, MAH

## Module Harmony: interaction semantics of the different proposals

Presenter: Nicolò Ribaudo (NRO)

- [presentation](https://docs.google.com/presentation/d/1mZrAHHimtM_z_8fM9L3DUXFz5bjlJPxx8VrwsC68hmk)

NRO: So, hello everyone. This presentation, is not about a specific proposal, but about what Module Harmony is and semantics interaction. This slide shows scope of this discussion: every topic which effects proposal and every topic that does have an effect on multuple proposals is still in the scope. Okay, so, I suggest this scope of discussion if you have like an in-depth discussion regarding some aspect of proposal, please consider discussing that in discussions specific to that proposal.

NRO: So, what the proposals are covered by these slides? All of them. All of the proposals that we are working on: import attributes, module expressions, module declaration and local imports, the module source imports. And then, all the proposals that under the umbrella of compartments.

NRO: And we have presented multiple times about how all of the proposals depend on each other but in the past few months we have further refined the dependency graph. And with the proposal dependencies but we try to have the color lines of value of proposal and there are dependencies between the concepts and many proposal do not have dependencies, and the yellow and blue lines have dependency and the two.

NRO: So, okay, so now let’s introduce this topic: how do the various proposals interact. And the forward for each interaction we care about and the first give a quick summary of what the proposals are and to show after how they interact. And for the first interaction, that is how module source imports interact with defer import evaluation, and we alreadt looked at the concept of phases at the previous meeting so I will go quick. And so module source imports (and module instance imports) is a way to import a module without loading its dependencies, and so it will give a different representation of the module, an object. And so the it is then possible to load all of the dependencies and so you go about these concept attached to the modules. These two modules is a part of enter reflection. And so the important part of defer imports is that it links the module, but execution happens when the module exports are read. And as presenting at this time the interaction between these two would be explanation of how these things fit together. And that is module loading process can be done in these five steps. And so fetch/compile the module and attach its context, and then you link them later. And the imported reflection are like two phases of this process.

NRO: Then we have interacting between module expressions and module loader hooks. And so what module expression is allowing declaring modules inline inside other modules, and this module will give us something that can be later imported. And loader hook module and applying some custom loading behavior, and so currently the loader hook intercepts the imports, and otherwise define how the modules are linked. And we have module declarations which is same thing module expression, and all of these will result in the same object. So all of these proposals we are developing separately, they share this common module class. You can see on the slide. Because all of these proposals will give us a module that will give us context attached. And this means that the custom linking in the module loader hook proposal is a hook that should return some instance of the module class can be used with these other proposal, and so you can return module using import module reflection or you can use module expression or with other custom hooks behavior. And this is important because it allows partial virtualization of the module graph, and if you only have module hook proposal, the hook will have to return with the module class, and so this is declaring some like module loader behavior and we don’t need to virtualize every single module on the graph, at any time we can return the module expression whose imports are delegated back to the host.

NRO: And similarly, we can use source phasing import (in particular, module source imports without context) to load a module at the host level. We can refer to the host for these module, and so you have like the CSP behavior and you can attach some custom hooks behavior to this module.

NRO: Then, we have the interaction between module declarations and the module instance phase import. And module declaration is declaring modules similar to module expression, but they can be statically imported from. Things that we can see "this binding is a module declaration", and you can have import them from other modules and import form the module declaration, and this all statically analyzable. And module instance allows creating the module extent but they do have some very particular syntax because that is part of module declaration. And so this we can reuse the same import from a module in syntax, and in this example here we have some module instance import and the import module and later import client from this module. So this will continue the import process that did not finish, continuing the process because we only interacted with the module. And so in this case in this particular environment (such as Deno), we use this for dependencies management without a package manager. So there is some work around centralizing all the imports. And exporting everything that might be necessary; and this has problems because you are suddenly sharing a single namespace between all the library and you need to bring into the exports and all the dependencies are loaded also when actually using just a few of them. These combination of these proposal and in which dependency you need, you don’t have all the dependencies and loading them even if you have centralized in a single place.

NRO: The next interaction that is important for our proposal is how module declarations and expressions interact with the import attributes proposal. And this module can be later imported. Import attributes is parameters to hosts loader and how they are related and so the host, specifically HTML, will change the header to server to communicate which contact is accepted and we then check the content provided matches the expected content. When, we consider these two proposals together, we see module declaration, and so you cannot pass import attributes to the module expressions and for example, here, one is adjusted module and you cannot modify this. You might wants to extract the source of module object you have in the module equation and not execute until it is needed. So this is another example of why we decided to split the import parts of this proposal from the various phase modifier.

NRO: Then we have interaction between module loader hooks and import attributes. And module loader hooks give a way to intercept all imports of a module, and resolve them with custom logic and so then attributes can affect how the module is loaded and evaluated and the import attributes is from the host. So if you have import with two different attributes, does not matter which order you define them, and the result must be the same. So the way you can integrate attributes and module loader hooks is to have a `supportedAttributes` array and that is equivalent to the hosts hook to define which attributes it provided. And the hook cannot change its behavior based on the import attributes, and the import hook is called once the specifier has attributes pair because it is hook will define the host. So if you have for example, a module with this four imports, and another hook that does not support the type attribute, the import hook will call three times, and once for the second import which is attribute and one for the third import because it is specifier for the hook. And if we try to use this custom hook with some attributes that is not supported, we will get an error.

NRO: Then, how the module hooks interact with the import phase modifiers. And so this the modify of how not effect what the host asks the host cannot change how it is modified. And when we try to integrate these two proposals, the import hook doesn’t receive the import phase. And the import hook is called once per specifier and makes sure that all the phases import for the file represent match what the host has. So, we have a source phase import and the hook will return and if we have module import hook, that will return a module, and if we have a deferred import the module hook will log dependency and then we will not evaluate the module.

NRO: And this was all for the main interaction points. I am happy to go in details with you. There are many proposals to work out, and trying to advance them. However, we have to consider how all of them interact. So we have to define some goals regarding how to handle dependencies and interaction points between different proposals. And our principles is that every proposal must be able to move ahead independently from the other proposals unless there is obvious dependency, and all proposals must be self-motivated and because some of these interaction is not fix and multiple proposals together can solve the problem or cases and all of this proposal must have, if any proposal gets stuck or does not receive consensus, the other parts can stand without it – so that when we never have a language in a state where something is a little bit off waiting for proposal, it still makes sense. And lastly, we are trying to minimize dependencies on each other, to allow the proposals to advance.

NRO: And so this is again the graph of all the modules that depend on each other, and there are many parts. So we have working part which is source and this is in module loader hooks, and then we will introduce the module source and it is language. And that will happen with the module object and instance which is made by different virtual, and module hook, and the module instance phase. Then there are proposals that while there are interactions that we need to take care of and have not really shared that concept totally dependency with other proposal. This is all. One of the goals with this presentation was to clarify how it all interacts and because in past meetings it was questioned how all of this fits together. So I hope I clarified some of those and I will go to the queue to discuss any further concepts or questions if there are any.

JRL: So you have an example showing importing a module expression. I am curious, how this interacts with the “import hook” hook, what is the specifier that you receive in the hook method? What is specifier that the import hook message receives when you have import hook or declaration.

NRO: I have an example in the slides for that but however, the import hook is just in the host and the module will not have a separate hook, so you have importing a module expression declaration and the module will be present and the hook will not be called.

JRL: Can you show the five phases?

NRO: Yes.

JRL: Um so essentially, import hook is between “fetch/compile” and “attach context”, and modules are already at the attached context?

NRO: So, so this slide, the hook is the first three phases that is currently hand by the host and with the single module. And the first two hook is complete inside the 262, and the 262 will continue linking the dependency.

JRL: Module expression and declaration are at the attached state and they are already attached to the context and waiting for linking?

NRO: Yes.

JRL: Thank you.

GB: Can you mention if you have any specific constraints on the proposal graph As it were where we can record somewhere. And I know we have this picture. The hard constraints are those the circle boxes?

NRO: Circle boxes is current proposals, and the module declaration and module expression happens here if the right of this slide. And just module feature has dependency with imports that show – however this is not a problem because they are currently grouped in a single group also and in happens after module expression, and then we have another hard dependency where module source static analysis which is known as the layer one of the compartment proposal with the changes in the proposal. That has a dependency on something that exposes the module source object. Either the source phase import proposal that defines some import of the source of module or the module hook proposal other than defining how to hook into a process defining what a source is. And there is another hard dependency between some other sources which is called compartments layer two, I believe. Needs to happen after the previous compartments layer because it introduces a way to cast a module with custom behavior when loaded into the import hook. Those are the three hard dependencies that we have that are proposals and all of the import phase modifier and modular hooks known as compartments layer zero. These can advance without any other proposal, as long as we make sure that the picture is coherent at any ten step.

GB: It would be good to track those over time and this is a nice reflection of the overall picture, so thank you for clarifying.

NRO: I am to open for suggestions if anyone wants to have suggestions and if we copy this in the proposal or to have some separate document that we can reference to.

CDA: Dan is next in the queue.

DE: So, going back to details of the dependencies and how this information is communicated? There was a lot of talk in the community about the number of module proposals and what they are doing, and Nicolo has explained a unified story for this and how they fit together and create new features by composing. This would be a different presentation – which would take about hour to half an hour – to say how does this relate to AMD and CJS and how to relate to the vision of modules in the first place, and this would be good to see here in the future. I am wondering do people still feel skepticism and the different vision of these things. And if there are doubts and what sort of documentation or explanations might clarify this? Maybe it is not clarified in the documentation. Some things just remain unconvincing, either way or too complicated.

SYG: I have a response here to Dan. I guess I should have a clarifying question. So, I think this has shed some light, this presentation has shed some light on the organization and dependencies but one of goals, well two that the individual proposal despite their overlaps and dependencies should be individually motivated and ought to be able to advance individually. And if for an individual proposal then committee is unconvinced for whatever reason for a particular proposal that does have interaction, what are the module folks thinking, what happens then? If one thing has dependencies and the others do not advance?

NRO: Like if even this proposal will not go ahead, and like the result is probably some still missing some language but remaining parts will still solve some existing problems that we have. For example, if the module of the hooks proposal will not move forward, the source phasing proposal is a common concepts with module hooks and shares different interaction points will still give us a way to learn concept of the module. Standard module or the objects for success. And still going to the – to use the various concepts of the policy and the host. For example with the module loader hooks giving a way to reduce module objects with the ability and module expression will still result in the same object and we still in this case was to give code that does not capture anything and support the code and can like using the host development capacities that can be transferred to different text. So again, even if we don’t fulfill the whole picture, the proposal will advance and complete the problems they are trying to solve. And we have tried to show this by focusing on the use cases of the proposals when we give a presentation for this specific proposal.

SYG: Thanks. That makes sense to me but I think what, first I am being transparent here and you raised the hooks things and that is what I have concerns with, but this picture that is on the screen right now because of the dependency arrows move one-way, naturally the things that depend on everything else are the ones that can be excised and rests of the proposal still lands but this also suggests that there is a bunch of things that everything – not everything but many things depend on. So like the things that have overlap here in your picture, and concept of a module source, and concepts of the module instance that are non-negotiable for these proposals and get consensus on those things. And I really underpin the rest of the picture and that be can be a dependency check.

NRO: The reason of these depends on the module and this concept looks differently. The module we tried to keep this dependency as small as possible. For example, module expressions would introduce a module object that you cannot construct. And so module hooks will give meaning and this way to create custom objects using the constructor and you share the class to have some value result of the expression.

SYG: That is fine but my concrete request for the module folks is that come time when we get to stage 3 for one of these proposals that has a shared concept, that it be made abundantly clear that this thing is a thing that is going to be shared with other proposals possibly down the line and try to think out any gotchas that there might be for the shared concepts that are not individual proposals but implemented as one proposal but explicitly designed to be reused and used by subsequent proposals.

NRO: Thank you for the feedback.

LCA: I wanted to mention even those dependencies here can still be broken down further. For example, if there is a concern about module hooks there is still a hook case of substantiated module hook, and even with the module constructor does not have import hook and the source phase, the for example – yeah okay. So that is one and part two, I think these concepts that have a lot of overlap, are relatively more likely to be agreeable on by community because there is more many more motivating use case and so if any of these motivated use case and convincing the committee, and by proxy concepts and the dependency here is not so much that like necessarily we need to module import hooks to have module expression but the concept that having module hook –

SYG: Please don’t over index on me being–. One question is that implicit thing that people did immediately to understand that I have concerns with some of the later proposals like module hooks but I have a concern which I think is directly addressable and is being addressed by module folks as implementor and if I am implementing one proposal and we are used to implementing proposal in isolation. And so since ES5 we have been implementing things in isolation because the interactions here, there is so many, I would like it to be as likely as possible that we don’t implement something that requires complete rearchitecting later because of some shared pieces and the shared pieces at a conceptual level, semantics level is not how people would like to architect it in the future.

LCA: Yeah, that makes sense. And so we will have a presentation later on specifically source phase imports which we try to do this theory. And this is spec for phase points and we can discussion it more there later and the way we set up post hooks already taken into account how much the later hooks would interact with the system. So like we while we are designing the specification, we are not doing the complete specification but still taking into account all other proposals.

KKL: Yeah, regarding the organization of the Module Harmony, my intention and that we have among t champions and so this will have a proposal index, and commentary across proposals called Module Harmony epic repository that isn’t a proposal but is a space for this kind of explanation, and so my intention is to follow these layers that pertain to harmony, and break them up into individual proposals using the names that Nicolo has used in this presentation going forward and we do not need to wonder so much about correspondence to compartment layer numbers going forward.

GB: It is clear from this picture, and how these module imports are in the linking modules and the phases are in general you know the sort of we cover these things and starts out in defining phases and this is a good step to start to pick apart these spaces and when it comes to design spaces of module sort and instances and we are still continuing in a later approach there and instead of starting from the fundamental of the module sources and even at that level, you know as you will see in our proposal shortly, starting from the smallest set of design decisions and we are not making assumptions that can come back to cause issues later. And the linking and the hook decisions very much effect the instance objects, I think a lot more than the source objects as well which exist at that earlier phase. So as the phase progresses, the level of the interaction of the module the progress because you are dealing with the entire pipeline and to try to explain beyond this picture there is more layers, and we do feel that we are starting from the least set of design decisions or the most general design decisions, if that makes sense?

DLM: I want to start by saying thank you for putting this presentation together. And certainly, I know we have had a few similar presentations but each time, I think this picture is clearer and clearer for me. And I did want to comments that when we had our review meeting last week with the spidermonkey team there were some concerns about the complexity and I will echo SYG’s point it is great that we have this complexity and breaking it up to small proposal but when it comes to implementation, it is possible to consider things as a whole again and that will leave the implementers a fairly complicated set of interactions. And yes so we definitely like to avoid like what SYG mentioned and trying to work on this piece. Thank you.

NRO: So right now different proposals do like they better explain than others. And I know module expressions tend – so like maximum point of like for us with proposal and we need to document this properly. And not like people are aware of what they are doing and just because they are presenting.

DE: Yeah, so it is in the chat also we heard people express concern about this kind of complexity, and so this has to do with the connection between different layers of implementations and I wonder if maybe some sort of layered implementation guide document could help. I am wondering if there is any more guidance from the browsers about what kinds of hooks/features/interactions risk causing rewrites, which could guide what we highlight. DLM and SYG?

SYG: I don’t know if there is anything other than what you have said that can improve – like you are aware of the issue. You are aware of concern. And you are trying to do it is best to document everything so that it becomes less of an issue but this is kind of fundamental I think just to have how TC39 works, and if these things were developed on the web side of things, the same set of people who are designing and implementing and doing this in real-time, and the experiment and interaction is one sets of people. But the way TC39 works is designing and implementing in different phases and this is a fundamental problem. And we have worked around that a bit but working around by proposing very isolated self-contained things. And that works well. But when we want to design a fairly complex set of features, it is just a thing that you know this is the first time we have done something of this scale since ES5. And I don’t know, I think we just have to try it. I don’t know if how you can really make it better, and one might think that the answer might be that we try to get the same set of people to do more of those things. And maybe people in the Module Harmony group are going to implement stuff but I don’t think that will work that well either. There is so much ramp up needed in all browser bases and I don’t know how successful that would be, but I think that would be a big exercise.

MLS : I concur with SYG. There is some existing module work that has been done that we’ll need to integrate with this proposal. I think it would be discovering as we implement and there is probably going to need to be some coordination among implementers for a proposal this size as we implement. And as we work through things and that would include getting the champions involved along with the implementers to work through changes that need to be made. Hopefully these will be minor but they could be larger given the scope of this proposal. So I expect this will be a bit of discovery and time together. Our tie-ins with the rest of the browser, which obviously is different across the different browsers, needs to be considered. If this was just a proposal for JavaScript engines, that would be one thing, but you need to tie in with the rest of the browser.

DE: Thanks.

NRO: Thank you, yes we have to see how this is not just inside JavaScript engine because this proposal is required in the HTML spec, and so this we would like to ask about how this is being across multiple layers. Thanks for bringing that up again.

CDA: Okay we have little under ten minutes left but nobody in the queue right now. And now we have GB.

GB: I will bring this up and we got a bit more time. And previously, we have talked about the assets proposal as part of some of this stuff, and it does not seem it has been discussed much in this Presentation. Nicolo do you still see it as something that can progress or do you feel that it can exists outside of the majority of the work that we are doing here that is sort of more fit in the future as an addition? There is the question also we have resource loading in the module system as a use case, and that should be prioritized but as I said, that is something I would be interested in.

NRO: Yes like I included this reference in the slides but I did not mention it because asset reference still make sense as one of the various phases but with all of proposals, it is not obvious if they are still needed or not, and one is not working as preference or champion the proposal that has been lying there for many years. So it is like interaction with the proposals specifically I think it would be interesting to analyze how it interacts within the hook. That interaction has not been internalized.

GB: Maybe we can pick that up in the module at some point. Make sure that we are tracking that in whatever form it sits at on the graph.

### Speaker's Summary of Key Points

- We’ve gone through all the keys parts of the proposal and how they fit together.
- There has been discussion about how to make it clear, how the different processes interact so that this can be taken into account while implementing the proposals. Because we this is a very big features and we currently develop them in many small businesses and it is rare to have this many proposals interacting with each other.
- The champions of these proposals need to make sure to document all of these interactions somewhere.

### Conclusion

Module harmony champions will set up a “module harmony epic” repository to continue developing documentation about cross-cutting module proposal concerns.

## Source Phase Imports for Stage 3

Presenter: Luca Casonato (LCA) & Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-import-reflection/pull/36)
- [slides](https://docs.google.com/presentation/d/1lpJBCe6cgBa5MBtD_Bhfyh92EXcJS72LbStnaoQ4cxo/edit)

CDA: Next one will be source phase import for stage 3.

LCA: Just setting up. Is my presentations visible? Okay. Okay, hi everyone. I am Luca and I have GB with me and we will present the source phase imports of stage 2 for advancement to stage, 3. So module loading can be thought of as happening in approximately five stage and resolve, fetch, compile, attach evaluation context, link, and eval stage. Today we will talk about current state import. Which is execute all of these stage and `import foo from “specifier”` this is through all five stage which is fully will evaluated module. So this is fetch and compile stage, what we do here is take the will result’s specifier from the result phase and fetch it from the network or disk or elsewhere and compile it. So on the web, this uses network web and the CSP is enforced and it is completely stateless and the there is no evaluation context and this can be shared across threads, it can be shared across realms, across module graphs, there is nothing specific to a given like realm at this.

LCA: What we are proposing is to add a way to import specifically this source phase, and intercept the module – in this example we can importing the source of web assembly module which is WebAssembly.Module, and this is statically analyzable syntax, and this is difficult to analyze. This is useful because it allows you to fetch enforce and the source can carry with it this CSP information required for evaluation later.

LCA: So syntax. In previous presentations, we had considered whether the loading phase can be part of import attributes. Especially attributes can now affect loading and we have concluded this is not suitable and putting the phase in the attribute is not suitable. And one reason is that loading phase can some asset reference and this can only have default binding and deferred-eval imports only support `* as ns` binding and so imports at Istanbul modify module loading but think don’t they have early exit. So yeah, so these are fully composable – you can have a module – you can import something as earlier phase as like the source phase, and so the specific phase syntax is `import <phase> <binding> from <specifier>` and then import attributes (“with” attributes) at the end. And the phase is in front of the bindings because the phase enforce what syntax bindings are and avoids color grammar and there is a dynamic form of this is which is the import – dynamic import as usual with the phase specified as a stream in the option bag. This phase syntax, there is little note at the bottom of the slide which says phase syntax by convention, not specification, so we are trying to come up with a unified syntax that can be shared across all proposals and we don’t have a bunch of different behaviors that don’t interact with each other.

GB: Okay, so, to pick up again and again this is a recap mostly from the last presentation. What we are proposing initially from the import sources is to support web assembly source import, and what is quite nice about this implementation path is that it allows us to solve for the web assembly use case without having to fully workout at this point what we are reflecting for JavaScript modules. So it allows us to cover a simple version of the source imports that we can potentially extend to JavaScript in the future, and now we have web assembly – next slide. Is basically it what follows a bunch of interesting assembly in the web case, and like in the previous slide we can avoid that complex syntax that you need that is commonly understand and it is difficult for the preloader in the browser to understand what is being loaded. And by utilizing the static syntax in the module system, we can share the same security policy and host resolution policy, and get all the benefits of that and we get unified syntax that can use both in browser and server-side runtimes so it provides some API and when you run web assembly this is most common path because fact that there is most often very specific imports that need to be provided for the modules to make them execute. So it is needed above and beyond the interesting integration.

GB: So, you get these benefits: static analyzability, and ergonomics and the sharing benefits. So the use case for web assembly we initially looked at if we could specify something similar for JavaScript, and the overall that design space looks like it can be figured out but in particular when it comes to JavaScript sources, one would need things like bindings and extensions and instances for it to be a useful feature and benefit to be able to have web assembly imports is that we have this WebAssembly.object, and so it helps us figure out okay, what is the shared base between these things that we can implement and specify so that we can share this concept of a phase and then use the learnings from those experiences to then do the extension JS. And the Wasm will help us out with this. And yeah, so, the – LCA do you want to take this slide?

LCA: Sure. So what about the JS module source representation, and so Nicolo covered the module hook repo and this is what the module loader hooks proposal would like like and this proposal does not include this objects, so the module object constructor or the module source if you understanding this is not yet useful and you can refer to the previous presentation on the discussion for the interactions semantics between this proposal and the module hooks and this will get eventually introduced through other proposal that has the concrete case for this representation.

LCA: Let’s get in feedback from the last presentation? One of the feedback that we got is that language features should use language objects. This means that the syntax production the import source production should bind, the binding should refer to a language value rather than a host object value. And the reason for this is to support for example, reflectability of what kind of object something and to be able to support features such as a shared binding object or a shared binding method between all sources that would reflect what kind of bindings a source has. So solve this, reprocessing to do abstract module source intrinsic and this is not exposed on globalThis, and this is a shared prototype of all module source objects and this should – one could use this implement module source reflection could add `bindings` method, and this is compare the compartments layers line proposal. And now this only has toStringTag. And the proposal requires that all module source objects to be returned by the import source phase imports to inherit from this class.

LCA: Let’s go over the proposal semantics. And the main semantics is that source phase imports exposed the modules source objects. And so simple use case that would be web assembly module. And so module source objects and if it is added later in the proposal. And the host hook that the host load hook that returns modules and one resulted per prefer plus specifier tuple, regardless of phase. And modules that do not expose source relates dissertation, throw when attempted to be load via source phase import and if you do a JS.through. Finally all module source objects will be inherited from the same module source class. The return value here, the bound value of the phase import is not module base object. If you do import source first, and as mod from wasm, this behaves similar to a default export. And you have data import where there is no default property where there import directly returns the phase. Or the module source object. And as such, all of the below import productions are invalid. On the subjects of semantics load order, in this example there is 8 modules in total, ABCD and that will import EFH. And the load order is unchanged and this is top to bottom in every module. And the difference being that source imports do not load dependencies and the order of this async load and – valuation order. And evaluation ordering is totally identical because source imports are not evaluated and if you look at this example you can mentally ignore the source and the source imports is same, and so for example, E e evaluated first, and – EAHDFB. And C and D are never evaluated because they are only ever imported via source phase.

GB: Are you finished with evaluation? Just to update the web assembly, and define this module intrinsic and update this to have it in the prototype and the first question with that is, is that gonna be web compatible. And for the most part it seems it should that be we have not identified any particular web compatibility concerns with the module prototype. And nothing has come up in those discussions and we are confident that we should be able to make this change. And only possible thing that could be observable would be actually be checking that the prototype of a instance of `WebAssembly.Module` is an object, and so, there would be very minimal observable changes that the level. And it seems something that we should be able to achieve relatively easily once we have the specification.

LCA: To clarify the web assembly module instance has a prototype that is not object but Object is its prototype.

GB: In the host hooks, we have basically, it is still using the same structure, and Nicolo did excellent work on factoring around that and for access to module source, we have module record and having a get module source method on it. And that has been able to add a promodule type level to provide the object that should have this abstract module source in its prototype chain. So you can provide the module source or you can throw in an error that would be a link-time error that the module is not available. And initially for JavaScript you will could have a link-time error and or use the new spec machinery for it. Next slide? So, yeah, so as an integration, we will use this for the machinery.

JHD: First I want to say thank you for adapting to all the feedback you have gotten so far, and I am in general very happy with this proposal - this is the only thing I have left. I’ve brought this up in the past, it still feels weird to me that if you type import source identifier, whatever, and then there is no word “phase” there depending on when you use dynamic import, you have to magically know that’s called the phase, and that is the key that you use in the option? And there is a sort of somewhat relevant of the question next in the queue but it would feel correct to me to have the options key, the word “phase” in this case, to be present in the static import form, like the word “phase” should be there. It does not need to be the word “phase”, but whatever term should be there, the same way as “with” is in both places.

GB: I think you know it is kind of this difference of having you know position and named arguments, and you know in general, there is a theoretical sense and that those are interchangeable and the fact this is a primarily syntactic mechanism that is easily to type and so that you enjoy using it, in turn you get two benefits out of it. If we focus too much on the theoretical, you know, completeness or we forget at the end of the day it is ergonomic improvement of two benefits, it would be a shame to make this syntax messier than it needs to be.

JHD: That is fair, I think it is a combination of these and you used the word “positional” that made it pop into my head, and say the word name source appears before the binding and specifier but that is not the order of dynamic imports. I do not want the added tax to type in “import phase source” every time just so there is consistency. So to be clear this is not something that I think should block stage 3 but it would be really nice if there was some way to reduce the inconsistency before folks started shipping. I don’t know what that can be.

GB: I think KKL was going to investigate that. And there were certain if you understandings that was about the phase bag.

KKL: We have waffled on this point and we do not hold feelings strongly one-way or another. And there are advantages and disadvantages, regardless. If we did – one of the syntax that we have explored and gone back and forth on specifically is a dynamic import like import.phaseName. And Matthew discovered that would break confinement as of today. And Mark has expressed a mild preference but not a strong one but specifically given that p we get a better – with the phase introduced as an option in the options bag of dynamic imports, we get the improved position that SES remains confined. But we can accommodate either direction. There’s like mark up stance for – this allows us to statically observe whether a module does any import.source – which might be a boundaries that we can have a confinement rule around, which source.import would have no side effect. And to emphasize our position is that we do not have a position.

RBN: I have not had a chance to speak. And my point is a little bit broader than I think what JHD was referring to. We were having a discussion internally with my team and some folks from the edge team about this future. And one of the things that came up from one of my team members is that there is a couple of issues that I have with the import syntax or that they had with the import syntax at the top level. In that it really does feel like you are trying to shoehorn in the import phase by mandating certain things like you have to import * if it is thing and use default import to get asset. And making it feel import is not exactly – or top level import syntax is not the right place for those things and being one position. Another position being that having phase in with feels like trying to feel before via the object you are trying to pass in which feels odd, and the point that is confusing and we have a question about whether or not the import metaproperty call like syntax would be considered – i been searching through the insert tracker and there is some potential advantages to that method call syntax that might be a better position. One is that i resolution that you get with the asset references design, does not really depend on module loading. So there is not really dynamic operation that needs to necessarily occur, it is just URL resolution for the most part, and if that is the case, then does it makes sense to return a promise that wraps the result in a dynamic import that is just doing a URL resolution? Versus having a mechanism to do URL resolution that is not dynamic? Does not return a promise. And if import call does not return a promise and that goes down the Zalgo path this is something that sometimes is async and returns a promise and sometimes it does not. Something like a import metaproperty call-like syntax is easier to enforce and it is new syntax so you are exposing new capability and you want to block, then tooling today will not support because it is new syntax. It is the – it will give us a place to differentiate what the value is and not get into the Zalgo is async and is it not – and custom tailored to the call, and so it might have more insert that is specific to a call and you have this complexity of potentially in the a future going with well if you are trying to do a resolve hook, then this specific attribute does not make sense or this specific extension does not make sense but now we got this open design that will allow us to put these things in here or during static semantics checks, and align in with the phases that you provided. And encompassing all of this and the fact that of what you are wanting to do with the import phase imperative operation and get the module source for a later work, and it does not feel like top level syntax will give benefit of this and we thought that the import metaproperty call is the best approach.

GB: To clarify, you say that is also for the static case and not just the dynamic case. How would the metaproperty solve the problems that static source imports solve which we have been describing for the the last few weeks?

RBN: That was the question I had, so an import resolve call or even import source at the top level that isn’t a condition is still statically analyzable and still be a part of the module graph, does not depends on you actually saying that I will write a top level import declaration but a call – except for possibly an exception you would normally have purchased, if you don’t –

GB: The problem with dynamic code if you don’t know whether it will run or not, you cannot treat it as part of static build optimization. That is just parts of import system and we know that the top level execution of this module will require this JavaScript module source or web assembly module source to be in a compared form and furthermore not be evaluated, and from a security perspective that is a difficult property to import. Something similar to what you are describing is resource imports which we do describe in the same phase module where you can retain a handle on the resource through import system. And we did explore it just that primitive and we went through a period in our early decision exploration and if it is resource primitive was enough to capture all the requirements that we needed and what we determined if even with a resource primitive you still have the CSP problem because you don’t know how the resource will be used. And you have you still have some kind of static analyzability problem because now the resource is being used in dynamic code. So I think that direct relation between the module system which is how users interacts and how they gain access to resources and the usage of those resources, that is absolutely fundamental. And for modules in particular, that is how users get access to modules. So it is quite surprising to hear you say that you not how you get access to the module.

RBN: I don’t think I had a fully understanding of the specifics around why the top level imports were a useful piece to this. And I think I do now, and I appreciate that. I still have a concern about the very somewhat complex mix of what is it a default import or when it is a namespace import and can it make space to have a named import but that does not feel that fits either or import binding and all of these weird requirements around what you can actually do with syntax, feel strange to have all of this disparity that makes it feel not like a great fit. So I think there – of all of the import phase modifiers and most of them seem to use defaults imports but I think still one is listed as using a namespace import and I don’t know why we need that disparity if you cannot of a import.

LCA: There is a couple of reasons for this. And so for the first specifically destructuring is not possible because engines have told us they are not willing or able to support like binding getters, I guess they call them. Where the whole point of defer is that once you access a property of this namespace, does the module get evaluated, right? So destructuring does not make sense. What makes sense is *name space. This does not make sense to do default unless the defer would somehow be – unless the default value would be the name space, but then it would make it difficult to take an existing import which would be like import* as name space and defer to namespace because then you replace the star with defer and why doesn’t the defer use the same syntax that the regular import syntax does and the idea is to make it easy to go from one syntax to another and one module phase to another module phase specifically for defer. And for the asset and first phase, there is no destructuring because there is no module name phase destructured, and there is no star as namespace because there is no name for subject. So only default – there is only one bonding to be bounds which is default binding.

RBN: I appreciate that information and when I was discussing with my team, a lot of people on the team was somewhat negative on the idea of import phase keyword following import. That is what type script having a type keyword following import. And one of the reasons is that had the idea of these import attributes been a thing prior to us looking for a way to say you want to import a type from a module, we might have said maybe import attribute makes sense instead. In which case, we were under the impression that was not idea to go down that route or the source attributes to go down that without or to go with – someone on my team said all of arguments of why it sudden not be with but the argument of why it should be with. It does not argue the case in that case.

GB: My experience with the type keyword, has that generally been well received with the ecosystem?

RBN: Yes. Again we have not considered another option at the time. And we thinking that design was influenced by flow design which was using import design as well.

LCA: The probably the reason why the two primary reasons we want the loading phase to be separate from the options bag or from the import attribute bag because it does influence the valid syntax, and influencing the valid syntax at the start of the declaration, and the other thing is that this phase must not be passed to the host to inform loading. This is critical of how this works and all phases operate on the same module instincts and module source and instance. And this does not make sense for us to pass this phase to the host loader as an option. And if we do –

RBN: These arguments seemed to make sense when insertions were insertions. P those attributes can have an effect on what you can import. So they do affect syntax. So I don’t know if I feel that is a strong argument for the keyword following the import verses in binding. And I know I have taken up a lot of time and I will step back.

GB: Points of order of Shu, and the syntax is import.phase opening brace specifier option bag closing brace.

SYG: As a dynamic import.

GB: That is first thing that one was proposing and the second thing is that moving like removing the phase from the import declaration syntax and moving up to the import attributes bag.

SYG: For dynamic or static?

LCA: For static. And that is why I brought this up because of these concerns we had topics talking about inserts metadynamic things being the only things.

SYG: I am still confused. You are first thing I heard was that you perhaps can get – we can have a dynamic only form of proposal that does not have anything to do with static imports at all. Is that on the table? Because that seems like a different proposal?

RBN: I feel the discussion around having static imports make sense although, one of the reasons why we were considering dynamic only because we did not feel that the keyword did not make sense on the declaration. Maybe some attribute or again we would leverage that same level of attributes because imports –

SYG: You said static import is used because it made sense. So you are not proposing as an altstive that we remove the static form? Not that we remove static but consider the alternative cases against here which that it makes more sense as an attribute than a keyword.

SYG: So given you are not proposing not to remove the static so we are talking about for the dynamic there is syntax and for the the static to be moved to the attribute’s bag.

RBN: Those are two independent discussions. If this is part of with option bag we would most likely not need the import metamethods though it would have a concern about how that would work p and go to implications for that.

CDA: Clarifying question? DE?

DE: Sounds like one was saying import attributes contains syntax?

RBN: When I was trying to state import attributes can potentially effect what kind of syntax you can use in the import binding. Whether that is a named binding, default attribute, namespace binding that is not correct to state that import attributes can’t affect what syntax you can use in the import clause.

DE: From my understanding, the attributes that allows for subset and JavaScript.

LCA: One other maybe theoretical – actually, let’s go on to the queue.

CDA: Okay NRO?

NRO: Well he is proposing not to remove the syntax but for the population – removing syntax that does not make sense because you have the wait and so the defer does not make sense with the dynamic syntax –

RBN: I would admit, I need to take another look at the import proposal because I have certain things that I have concerns about because what happens to the deferred module if there is an await. I have concerns about basically saying that you don’t need to awaited it later because that does not sounds like that is feasible, and again I don’t have full context there.

LCA : Quickly to clarify the wait works the namespace bail out on the top level await. But let’s move on.

NRO: This is mostly for the stance of supporting binding that can have – it is not really stays like – it does not have any meaning with our syntaxes.

KKL: Since I am next any way, it is not just performance, there is also a security invariant that accessing a local scope that is in the language that can cause code interpolated and only access on the property can do that. But going on to my point and I wanted to reinforce what Luca mentioned that it is important that the the phase of the import not be within the with bag, attributes bag because it should not be incorporated in the memo key where with all other property in the with bag should be incorporated in the memo key to guarantee that a diamond dependency arrives at the same instance. That is to say it is not possible to move the phase somewhere else. But again our mild preference is for the syntax as is.

DE: It is okay to have something that is in an import attribute that does not go in the memo key. This is analogous to resolving paths. Anyway, the phase modifier guarantees that it isn’t part of the memo key, which is one argument for not using import attributes. I have one more argument of why a static syntax for these import phases is useful: If we have module phase imports as well as module declarations, there is more expressiveness in the system with phase modifiers: these could us to later like do static import of that module and binding to this statically available namespace. So that would be different.

CDA: Okay we have Nicolo again?

NRO: Real quick I want to mention that the syntax – that is more like a reference and referencing a nonexisting spot or variable and changing the syntax. That is it. Now we have WH.

WH: I have a concern about the syntax `import source from …`: does this import source into the binding name “from”, or does it import the binding name “source” from something? It can be either. At the moment you can resolve this depending on what the … is, but this can prevent future extensions to the syntax of import statements.

GB: Currently the import source that you have written would unambiguously import the source of a module.

WH: No it wouldn’t. It depends on what comes later in the `…`.

GB: If you got the keyword from, then – from can .

WH: `from` can be an identifier. It’s not a reserved word.

GB: So `source from from`.

WH: You can’t disambiguate these things until you get to the end of the import statement.

GB: I think the intention would be for it to be default import because at least in our proposal, the identifier is not optional. So the source has to be – keyword `source` has to be followed by the source you are binding.

???: I think the confusion if the dot, dot, dot is a string. And so if it is a source, it is a default source, and source binding at the default port. And from as the binding.

WH: My point is as we extend the syntax of import statements’ from clauses, that can cause ambiguity.

LCA : Do you have concrete examples that could cause this in.

WH: For example, if we extend the syntax to allow `from` clauses that allow other kinds of module sources.

DE : What would be your suggestion for avoiding ambiguity here?

WH: It’s currently not ambiguous but this can blow up in our face later.

DE: What can we do to prevent the needed look ahead? I think we should prohibit as a binding for import source declaration. And then I am wondering from Waldemar which possible extension for the syntax that we can consider in the future that will lead that small fix insufficient?

WH: Let’s say someone forgets the identifier, writes `import source from`, and thinks it is a source import but it silently is not.

DE: I am not sure. But I think that is a thing that syntax highlighting should help you figure it out.

DE: There is a lot of errors that people can make, and you can just write import and the name of module and expect that to be available locally but it won’t be. And so I am not sure if you import source from is registered with the syntax described. Not really sure what else we should be considering.

GB: To add more context, we have identified these effective five phases and to be honest, I don’t feel like type is out of place in this position. So from sort of a phasing perspective, but we don’t expect to expand, you know we can think of the import having a left-hand side and resistance and the left-hand side being the phase and the properties you are importing and the right-hand side being – as far as the left-hand side is concerned, is expectation is not to extends syntax all new grammars and we have considered this set of phases and so I understand the * – we are not discussing this proposal today. We are discussing phase key words and it is not going to be a whole new kind of expression syntax on the left-hand side. So if there are things we can help the ambiguity or it is syntax errors, we are considering doing that but I don’t think we have a real ambiguity right now. And unless, I am missing something.

KKL: I had a prepared question, and I am wondering if you have prepared content to answer the question of whether there is – if you have an argument for introducing a new hidden intrinsic that is not accessible for property –

LCA: So the sort of issue is around SES’s concern that all intrinsic is reachable through global, and so all intrinsic is defined without any host objects and like with a very controlled loader module loader. Where the module loader is aware of the constraints. And so module source, and these are intrinsics and currently only reachable through web assembly, and both intrinsic are not reachable through GlobalThis in picture ECMA-262. And only way that the a host – yeah, so there is no pure ECMA-262 production without involvement from the host and the host loader must always, and so if you do something I don’t know something that produces something dot module and host is involved creating that and the host can prevents this from happening.

MM : Let me respond. That is not adequate for our safety concern that the host is required. And the thing that is adequate for us from our safety concern from a very, very delicate on the edge of the cliff, is the fact that the new syntax that makes this accessible is syntax that can only appear in module and cannot appear in an evaluable string. And syntax in the value of a string. That makes this introduction safe with us but this should not be taken as a precedent. This delicate line is much more delicate than anything you should treat as precedent. And the precedent going forward should be no new language intrinsic even if the host has to be involved in creating it. And the language intrinsic not reachable by named evaluation from global this until you have `getIntrinsics` proposal that will make this entire problem go away. And once we have getIntrinsics we will get rid of taboo. The default answer should be no.

LCA: The other thing here is abstract source, and prototype with the introduction of the module type approach. Any introduction of the Ecma-262 and these would be reachable.

???: So this is exactly the time it becomes reachable from a syntax that is potentially dynamically evaluated with the global source is precisely the moment it goes away.

CDA: We have less than five minutes left. And we will have advance to stage 3, and as we keep that in mind as I look at the queue down here. Are we on to guy’s brief follow up on the import phase?

GB: I wanted to make sure we properly completed that discussion. I want to bring up some points and p so as KKL mentioned it is something that came up a few times. So you know in particular, it is dynamic import.phase expression that will return a promise, and so as far as I can tell, while it seems to offer static benefit, there does not seem to be tangible benefits that would give us additional usage in tooling because dynamic imports by nature requires expression analysis anyway for the specifier. If the phase is a string, it is as much static analysis with a dynamic phase anyway as a dynamic specifier. So, it does not feel like a huge benefit to me. But if you have arguments for it or reasons for it that you think is compelling, I would be interested in hearing that.

LCA: I want to clarify, and I don’t particularly care either way and I think both of these are reasonable. And if someone feels strongly about one or the other, this may convince me and Guy to change this.

GB: To be clear, you know it is not – KKL mentioned the argument before that and having dynamic and code is around designed around dynamic analysis, and so for us to follow the same pattern and seems a natural process when it is not something that is a static case to begin with. But yeah, we certainly interested to hear thoughts on it.

RBN: Yeah I wanted to point out or respond to GB, your explanation of the benefits of the static import syntax makes sense to me. And again, I have a weak preference, I mentioned this in the chat as well, against the keyword as following the import but it is not enough I think to dissuade that direction. I still have a fairly strong preference for import.phase for a dynamic mechanism only because it is much more flexible for us and less of a hazard for potential future proposals that need to do similar things and trying to juggle the phase and attributes what is allowed where, type concerns. And I also I am not very much in favor of turning dynamic import into RPC like thing, and it is an attribute that you have to specify and instead of being imperative call. And I talked about moving the phase to the with attributes. But I generally prefer the import.phase approach because it puts less confusion on what import call does for user and type systems and future proposals.

LCA: Because of time, is there anybody who explicitly has preference against import.phase?

JHD: I mean my only strong preference is that static and dynamic have as much symmetry as possible, so I would not be comfortable with less symmetry than the current spec. So we can eg do a `import.phase` that is for dynamic *and* static but would not want a different form between the two.

RBN: I would argue that import.phase as dynamic and import.phase as a static is symmetrical.

GB: I mean we can make the change if that is something that people would like to see. At the end of the day, we want to advance this proposal at this point, and it has been a long journey to get here. And we put a lot of work into it and we would really appreciate to progress the proposal.

LCA: Yeah, um, I guess the question is that are people happy with the semantics here? I think the syntax is something – I don’t know how people feel about this, but we could consider seeing this goes to stage 3 conditional on syntax import.phase. And I would be fine with this and if we can move this ahead to stage 3, conditional of it being changed to import.phase. And does anybody strongly object this, we can come back next time?

SYG: I am not okay with stage 3, if you want to record there is strong consensus for sa man text and open remaining is syntax. But for I do not wanted to keep alluding stage 3 to have it conditional on syntax which means we don’t know what to implement. But I recognize it is important to maintain momentum and that everything is done except this remaining syntax question, and so we have made up stage in the past like 2.5. It is okay to record the consensus but I am not okay making stage 3 that it has not been historically. We should have another stage that is implement.

GB: I do not want to discourage people’s feedback. And if you create a system where you incentive the champion to overrule our feedback, that is not a good system. If we got stage 3, and had a hard stance not top open to change syntax, and we are trying to take on both syntax the feedback that was given and we should not be penalized not to go to stage 3 and that seems a bit unfair.

SYG: What is the goal? Like is your goal is to get this shipped? If your goal is to get shipped, this is not ready to be shipped. If your goal is to keep the momentum going, and `import.<phase>`, and the proposal –

DE: We are just talking passing each other, and switching to `import.<phase>`, and there is two things, we have consensus and we want the feedback of the syntax, and then we would make decisions and second, conditional means it is not stage 3, and moving to stage 3 once the changes have been made and landed. So I don’t see how it would amount to weakening of stage 3 but this is fine to say this is too complicated for conditionality. To GB’s point, I don’t think champions can consider it an option to be incentivized to ignore the feedback. Everyone has to listen to feedback even though that could take a little bit longer.

GB: One quick call for conditional? Otherwise we will pick it up next time?

DE: Shu, does that make sense or do you still have concerns?

SYG: I understand what conditional advancements means in the past, and that has basically meant let’s get started implement it and wait for this one thing to settle and then it is basically done. The next step is to bring more implementation feedback.

MM: It is well after the meeting is adjourned other people including everyone from work has a critical meeting that we are late for and I think making a decision after the official adjournment time will cut out everything that has to leave for other meeting and we can still decide this question during this TC39 meeting but not today.

CDA : Okay, capture the queue. We were able to get to a couple of items squeezed into the other half of the meeting today. So it is possible – there was a lot of schedule constraints for folks but it is possible to revisit this on one of the other days this week. And we will look at what the constraints are and work with you folks to – after we get this scheduled to resume. Does that sound okay? All right thanks everybody.

### Speaker's Summary of Key Points

- A proposal to conditionally advance to Stage 3 was not accepted, due to widely held discomfort in committee (in the #tc39-delegates chat) with using conditional advancement for such a broad and not-well-defined set of possible changes.
- Agreement on semantics and static import syntax, with the exception of the possibly confusing `import source from from …`
  - DE proposes to ban `import source from from …` (banning from binding for source phase imports). Champions are in favor.
- Discussion on `import.<phase>(...)` static syntax instead of `import(..., { phase: “...” })`
  - RBN is strongly in favor of `import.<phase>(...)`
  - DE prefers lower complexity of options bag, but is still happy with `import.<phase>(...)`
  - GB and LCA have no strong preference either way.

### Conclusion

- Import source phase remains at Stage 2
