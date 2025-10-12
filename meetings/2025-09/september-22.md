# 110th TC39 Meeting

Day One—22 September 2025

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Chris de Almeida   | CDA          | IBM                |
| Samina Husain      | SHN          | Ecma               |
| Keith Miller       | KM           | Apple              |
| Ben Allen          | BAN          | Igalia             |
| Nicolò Ribaudo     | NRO          | Igalia             |
| Daniel Minor       | DLM          | Mozilla            |
| Dmitry Makhnev     | DJM          | JetBrains          |
| Eemeli Aro         | EAO          | Mozilla            |
| Ron Buckton        | RBN          | F5                 |
| Jesse Alama        | JMN          | Igalia             |
| Andreu Botella     | ABO          | Igalia             |
| Waldemar Horwat    | WH           | Invited Expert     |
| Zbyszek Tenerowicz | ZTZ          | Consensys          |
| Michael Saboff     | MLS          | Invited Expert     |
| Richard Gibson     | RGN          | Agoric             |
| Bradford C. Smith  | BSH          | Google             |
| Philip Chimento    | PFC          | Igalia             |
| Chip Morningstar   | CM           | Consensys          |
| Mikhail Barash     | MBH          | Univ. of Bergen    |
| Duncan MacGregor   | DMM          | ServiceNow         |
| Mathieu Hofman     | MAH          | Agoric             |
| James Snell        | JSL          | Cloudflare         |
| Istvan Sebestyen   | IS           | Ecma               |
| Erik Marks         | REK          | Consensys          |
| Aki Braun          | AKI          | Ecma International |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Jordan Harband     | JHD          | HeroDevs           |
| Justin Ridgewell   | JRL          | Google             |
| Kevin Gibbons      | KG           | F5                 |
| Michael Ficarra    | MF           | F5                 |
| Mark S. Miller     | MM           | Agoric             |
| Olivier Flückiger  | OFR          | Google             |
| Ryan Cavanaugh     | RCH          | Microsoft          |
| Rob Palmer         | RPR          | Bloomberg          |
| Shane Carr         | SFC          | Google             |
| Stephen Hicks      | SHS          | Google             |
| Ujjwal Sharma      | USA          | Igalia             |

## Opening & Welcome

Presenter: Chris de Almeida (CDA)

CDA: Welcome to the 110 meeting of the TC39. This is the September plenary. Remote only. And meet your facilitation group. That is going to be RPR, USA and CDA as chairs, JRL, and two of our favorite Daniels as facilitators. Make sure you have signed in, presumably, if you are in the meeting, you have completed this form. And that’s how you got the link.

Also, it would be great if in the notes doc, you could add your name to the name of the attendees at the top. Reminder that TC39 follows its code of conduct available on the website. But the TLDR to to be excellent to each other. Please and thank you Schedule is as follows: we are on central time for this meeting. Meetings beginning at 10 with a break at noon for lunch. For one hour, you then resume for two additional hours.

Communication tools, most people are aware. New folks may not be. We use TCB. The link will be in the reflector issue nor this meeting Github. This is how the agenda view looks. And the navigation is at the top. You will have an agenda link and then the queue link next to it. Which then will reveal something like this. Note the buttons there for, if you want to discuss a new topic, if you have a reply to discuss the current topic. If you have a clarifying question. Or in the case of something that requires immediate attention, point of order. Please use these correctly and do not jump the queue. It would be greatly appreciated. There wills be—if you are the current person speaking, there’s a button that says, I am done speaking. Counterintuitively, please do not click on this button. It can—it will cause or can cause race general between chairs that are able to advance the queue. If you click that when we also click the advanced queue button on our end, that will result in somebody’s topic completely disappearing.

We use matrix for chat while the meeting is ongoing. Most of this will be happening in the delegates channel. And then, for offtopic banter in the Temporal dead zone channel. And as always, there’s the TC39 space in the matrix which has all the other channels, but those get little to no activity during the meeting.

Reminder about the IP policy. Please familiar yourself with the contributing MD in the 262 repo, if you are not familiar. Notes. So a detailed transcript of the meeting is being prepared. And will be eventually posted on Github. You may edit this at any time during the meeting, in Google docs for accuracy, including deleting comments which you don’t wish to appear. You may request correctionsI am or deletions after the fact by the editing. The gooing the doc in the first two after the TC39 meeting or subsequently, making a PR in the notes repository or contacting TC39 chairs. Our next meeting is coming up in November. This is no Tokyo. Hostedly Bloomberg.

I see we have a nice picture there of the scramble as well as presumably taking by delegate Michael Ficarra at the cafe. It’s looking like it’s the biggest Asia meeting so far, the highest attendance. Please do join us, if you are on the fence about going.

We would love to have you in person. Otherwise we will see you virtually. Just a nope, the Sunday before the meeting there is a recent—there is an opportunity to be on panel for that, which also gives you free attendance, which is otherwise not free.

And yeah. That brings us to the end of the slide deck where we will go through our normal housekeeping The approval of the approval minutes of the last meeting. Those have been reviewed and first of all cleaned up, thank you, Aki. That has been reviewed and merged into Github. Presuming, we are approving the minutes from the previous meeting. We have a second for any objections? And that brings us to adoption of the current agenda. Which we have presumption of adoption, as long as nobody is speaking in opposition.

All right. Seeing nothing, hearing nothing, the agenda is adopted. I will stop sharing now.

And now, for everybody’s favorite—before I ask, is our transcriptionist with us? I don’t have the notes up.

I see many words on the notes. Great.

All right. My favorite part of the meeting: calling for note-takers. We are looking for two. TC39 heroes, who are willing to help with the notes for this session. We will lavish you with praise, both privately and publicly, unless you do not want praise lavished upon you publicly.

Once we have two volunteers, we can go on and begin the meeting.

JMN: I can help with the first block, but not for the final presentation about the amount.

CDA Okay. Thank you, Jesse. Please do, if we fail to notice, please remind us when you are coming off of duty so we can find someone to help out in your stead. Can we get one more person to help Jesse on the notes?

## Secretary's Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2025/tc39-2025-038.pdf)

SHN: Thank you, CDA, for the excellent start. And great to hear about the next plenary in Japan, it will be a great turnout.

I will go through the usual secretary’s report. I would like to give a bit of an update, of course on topics relevant to TC39. But, of course also with what is happening in the GA, and other TC’s that are also of interest to the TC39 committee. I will talk about the collaboration and update on invited experts.

SHN: Just to bring to everybody’s attention, TC54, SBOM, have been working diligently and they will be proposing three standards for approval at the upcoming GA. I wanted to bring that to everybody’s attention. They will be available shortly for the review process. There will be the second edition of CycloneDX, the first editions of the Common Lifecycle Enumeration Specification (CLE) and Package-URL Specification (PURL). There are a number of organizations and participants that are overlapping in TC39 and TC54. So I thought it’s good to bring to your attention, if there is an interest to participate in TC54. Thank you to those who have participated. It was a lot of work. And they have all done very well.

SHN: A new TC. This was a proposal that came from Microsoft for standardization of high-level shading language, HLSL. It was taken away for a bit, they needed more time to prepare. So it is now moving forward. It will be proposed to the executive committee at ECMA at the October meeting as a new TC. I think it will be TC58. The scope and the program of work, the individuals involved currently from Microsoft and the supporting members that want to be also involved, and not only Microsoft, but Google and Sony are showing interest. We want the representatives of the other organizations to commit to being involved, this is very good for ECMA. It’s a new TC. And I think it will bring new work. Also to bring to your attention, if you or your organization want to participate, please reach out to me, to show interest to participate in the new TC.

SHN: JSON Schema. This is an ongoing discussion. The interest was a discussion that was in the JSON community. To bring in the JSON Schema work into ECMA. Similarly, with KLD. But the focus has been on the JSON Schema community. There’s a lot of work in conversation with the committee to discuss their interest to come to ECMA There has been an outreach to all contributors, 60 + have been involved in the JSON Schema to agree on ECMA IPRs that is a requirement for us to move forward. We have received many positive interests. We also have had a very good conversation with the IETF folks to align and ensure that they are also aligned and not seeing any reason for disagreement to bring it to ECMA. Would not force the committee to move into ECMA unless the entire community is in agreement. This work is ongoing. If your organization is involved in JSON Schema, it would be great if you reach out to me, any comments or questions or on the Slack channel, and thank you JMN and AKI for support on this topic.

SHN: Collaborations. I brought up the interest of W3C and the interest for collaboration and engagement with ECMA. I understand that internationalization working group TG2 will engage more formally with W3C and if SFC is on the call, you may comment, but I understand this is moving forward. That’s excellent. We thought that would be the lowest hanging fruit and opportunity to have strong collaboration with the work ongoing with TC39 and the work going on within the working group at W3C.

SHN: We had also discussed some time back having a liaison with IETF. That’s between the TC39 and IETF committees. There had been somebody in the who no longer is active, and it was left on the back burner, thank you very much RGN volunteered to do this. RGN is active in both, and RGN has been introduced to IETF. So his name should be updated on the website shortly and RGN would be the point of contact to be able to share information between the TC and IETF. To ensure that we are well informed of each other’s work. There’s open communication. And that when there is something that needs more attention, that it is done.

SHN: And RGN, if you are on the call, you are free to make comments when I stop my presentation.

RGN: I am on the call. I don’t have any substantial updates as well. I will be sorting out the relationship between now and the next meeting

SHN: Thank you. That’s great, RGN. I appreciate that and the idea would be that on the plenary calls we have in the event there is something to share, we can do that so everybody will be aware of the work. And 2026FOSDEM is planned the last days of January or the first days of February. There is an intention for ECMA to support and have an event, it is a conversation with TC54 that we do something in partnership, and perhaps sponsor a day session or host something. I don’t know how that would look. I do understand that TC39 members and TC39 topics are very active. Perhaps there’s an opportunity for multiple TCs, not only 54 and TC39, maybe TC55 or others, to also participate. I would love to work this out and if there’s an opportunity to have a day track that is represented with ECMA, I would love to do that. So this is in the works. If you are involved with that or going to attend, reach out to me or AKI and we will make sure that we are involving you as we progress on this potential activity.

SHN: Invited experts: I put a list of invited experts. What I would like to have feedback is on the first list, which is in a darker shade of grey. Those are members of invited experts that are noted in the ECMA database and have signed the ECMA invited expert form. I do not know if they are on Github. So if they are not, we should. We should ensure they are active and that we are aligned there. The names all marked in the ECMA orange, we are aligned, all of which you noted on the ECMA db and also Github. If you do not see your name there, and you believe you should be there, please reach out to me or AKI and of course the chairs. The last column, which is in the black text, are names of individuals who are on Github as ECMA invited experts. But I do not have any record of them signing an ECMA invited expert form. And I would very much like that we can make sure that we are aligned there. If the individuals are still active, and you want to continue to be active, that’s fine. But it would be very much needed if they fill out the invited expert form.

SHN: Thank you for helping me with this list. Aki put it together based on Github, this is also through the efforts we have with the ECMA secretariat. If there are any names on this list missing and you are an invited expert, no matter what shade I put it in, please reach out to myself and AKI and we will make sure we have done it accurately.

SHN: The annex has the standard documents that we have. The code of conduct which identifies how we should work. The invited expert rules and procedures. The list of the relevant documents that have been published that could be of interest, on the GA document perspective and ECMA 39 perspective, you may ask the chairs to provide them, if you don’t have access to the repositories and some of the dates for the next meetings. I am going to quickly go through the slides, which are on the dates. The others you can read at your time.

SHN: Regarding the dates, I was following the conversation on matrix, and it was noted at one point that maybe 5 meetings could be appropriate with 2 remote. It’s up to you, as the committee, to agree. I noted it here. If you would like to do that and fits your requirements, and the needs of the committee, that’s fine. Just let us know how you want to proceed there.

SHN: I have not yet seen the dates with 2026. So I am looking forward to seeing the dates, locations of the next ones so we can also add that to the calendar and also block our schedules.

SHN: And these are the dates that are scheduled for the GA and ExeCom, for the coming—we do it up until the next year. The dates relevant for your standards that you would bring to the GA, typically in June for approval, so you will see the date in April in 2026 for ECMA262 and ECMA402 for approvals.

SHN: The next ExeCom coming up in October. I look forward to the TC chairs to provide the TC chair report and also if you have any other key items you want to bring up, please ensure that your chair report has it. And it will be definitely addressed at the meeting.

SHN: And you will have noted on all the slides I have had the ECMA TC39 logo, which you appropriately use on Github. And you use the colors of ECMA. We have proposed to other TCs that are joining or that are starting and want to do similar types of logos, to use the format that has been standardized by TC39 and so we are using that as a reference. Thank you, AKI for putting it together. It’s important and I think relevant that all TCs using Github use the repository and meeting space to have some branding to ECMA. Thank you. That’s the end of my slides and I will shop sharing and I will be hopeful for any questions.

CDA: Thank you,SHN. I already sent Aki a note. The chairs will help out with the invited expert clarifications and whatever we need to do there.

SHN: Thank you.

CDA: NRO has mentioned that the slides link is not working.

NRO: I don’t have for the list of names, but the one in the agenda doesn’t link on the slides

AKI: It is uploaded to Github.

NRO: Thank you, Aki

CDA: Any other questions or comments Nothing on the queue. Samina, you started to say something before—

SHN: I wanted to ask Aki if she had further comments to the slides or inputs that were discussed today.

AKI: I don’t have any further comments on the slides. Generally speaking, when it comes to the invited expert piece, I have lists of people and when they signed things and so if you are on the list and we don’t have any evidence of you signed the RFTG form, get in touch with us or we will probably come chase you down

CDA: Thanks, AKI. I have a name, but I will not mention them here

AKI: Thank you, Chris. Any other points?

CDA: I don’t think so

SFC: Hi. I am not on the queue, but I heard my name checked earlier in your presentation. Thanks for that, Samina. A little update on the W3C relationship with TG2. At the last TC39 plenary, we reviewed a new policy that we had come up with for including W3C i18n reviews in TC39 proposals to do with ECMA402. I believe we talked about that at this plenary. We certainly talked about it at the TG2 meeting. So we’ve started that process, we don’t have any TG2-specific proposals up for advancement at this meeting, but we are definitely starting that process. APP has been great to work with and helped us draft that text as well as AKI and others. So I appreciate that. And this relationship is still, you know, developing. But I am definitely quite excited to see these pieces come together and I think we should do this more regularly, even outside of just ECMA402. I know we already have examples of sort of ad hoc reviews that we have requested of TC39 proposals and I think we should in general make it a regular thing we should do. We are both standards bodies that impact the web platform and we should do, not less, to coordinate ourselves.

SHN: Thank you for adding that. Any update you would like to share on the relationship we can add to the secretariat support. Thank you, it’s great work. And yes, we should continue.

CDA: Great. Thank you, Shane. Thank you, Samina.

### Speaker's Summary of Key Points

The secretary’s report updated TC39 on TC items and GA matters: TC54 (SBOM) was noted to bring three standards to the next GA (CycloneDX 2nd ed., CLE 1st ed., PURL 1st ed.); a new HLSL standardization effort is moving forward as a proposed TC5x (originated by Microsoft, with interest from other members); and the JSON Schema community is being consulted about potentially moving work to Ecma, with alignment discussions underway with IETF and outreach to 60+ contributors on IPR, progress contingent on broad community agreement.

Collaboration updates included formalizing W3C horizontal reviews, and appointing RGN as the TC39–IETF liaison. Ecma may support a multi-TC presence at FOSDEM 2026. The committee is reviewing invited-expert records between the Ecma database and GitHub.

Meeting schedule dates were covered and pending are 2026 TC39 dates.

Action: chairs to submit October ExeCom reports.

## ECMA262 Status Updates

Presenter: Kevin Gibbons (KG)

* [slides](https://docs.google.com/presentation/d/17dyg4ssXsYUtoEl4PkmeM5dDQ8v0rvV6sUV_BmXgXX4/edit?usp=sharing)

KG: Not much in the way of an update. But we will go through it. Normative changes. The `Math.sumPrecise` landed. Base64 has almost landed, it might land during the course of this meeting. It is completely ready and I believe it has been reviewed. I just need a sign off from the other editors. But everyone has looked at it. And then the last one is a bugfix for an issue that was introduced a while back, when we were refactoring how `Function.prototype.toString` worked. We accidentally broke an invariant for `[[SourceText]]` for classes that didn’t match any implementations. This is an old bugfix that we finally landed. I do want to call out there’s a number of other consensus normative changes that the editors are in the process of reviewing and land as soon as we can. We apologize for delays.

KG: A couple of editorial changes. The first one is a big one. A bunch of Annex B stuff, in keeping with the committee’s direction, is inlined into the specification. This doesn’t have any normative implications. If you are reading the specification and reading an algorithm that has behavior specified under Annex B, previously what happened is that there is a note which would say, this has different behavior, go to Annex B to find it. I believe there was always a note, but I am not 100%. Now, you read an algorithm and it says, "if your host is a web browser or otherwise implements this normative optional behavior" and then has the specification of the behavior inline. I think this as a consumer of the specification it is much, much nicer. But again no normative implications. Thank you very much to jmdyck for contributing to this change.

KG: And then, last thing is that in SetFunctionName, there is an optional prefix for getters or setters of get or set respectively. The optionality was not clear to the readers. We added note to address it, following the discussion from the previous meeting

KG: Mostly the usual list of upcoming work. But the change to Annex B which has been listed for the last couple of years is now removed because we have landed that PR. Otherwise, still working on roughly the same things, but we have no new work planned here. That’s all I got. Thanks very much.

## ECMA402 Status Updates

Presenter: Ben Allen (BAN)

* [slides](https://notes.igalia.com/p/sept-tc39-tg1-editor-update#/)

BAN: All right. So let’s see. Probably the most meaningful thing in this is the thing that Shane mentioned earlier, but I will go through the slides in order. Okay. So we have got a couple of normative changes. We are largely correcting for oversights, I am on the schedule to discuss this right after this, so I will just flip through this slide.

BAN: Editorial changes, probably the most important is the meta one that Shane talked about that will be requesting reviews from W3C, i18n. It’s important we got that in there. And minor editorial changes, implementor, `Intl.NumberFormat`, it’s been there for a while.

BAN: And I believe that APP pointed this out previously, we had given a rough estimate of the number of languages and natural human languages in the dialects of around 6,000. Really, it only makes sense to give a lower bound for that sort of thing.

BAN: So we have updated to say, okay. Well, there’s in—there are 7,000 language subtags. And CLDR only important a small subset of languages and variations. The world of human language is kind of too language for us to represent, no matter how hard we try and that’s it for the 402 update.

USA: Thank you, Ben.

## ECMA404 Status Updates

Presenter: Chip Morningstar (CM)

CM: Everything is fine. Nothing to see here. Move on.

CDA: Excellent. No surprises. We like that.

CM: Yes, that’s what we like.

## Test262 Status Updates

Presenter: Richard Gibson (RG)

RGN: I am here. And I wish I could be as efficient as Chip in this update, but I don’t quite manage that. Recently, we landed the changes for non-extensible applies to private. And in review, our tests for immutable ArrayBuffer and joint iteration, as always, help from everyone in this call is very much appreciated.

CDA: Great. Thank you, Richard.

## TG3: Security

Presenter: Chris de Almeida (CDA)

CDA: Yeah. TG3. Continues to meet weekly to discuss security impacts of proposals. As well as the odd not security-related topic, if we don’t have other agenda. Please join us, those are Wednesdays at 12 p.m. central time. Central US time.

## TG4: Source Maps

Presenter: Nicolo Ribaudo (NRO)

* [slides](https://docs.google.com/presentation/d/1WdEy4ZcMHpQ7eAzfGMun3VtUziFadYvrJYxWRh5Uafw/edit?usp=sharing)

NRO: Okay. So very quick, there are a couple discussions in the project, editorial, one for some of our algorithms, we have a lot of, like, noise content ratio due to checking on the conditions. For our perspective—what happens in our case, it’s relevant for ECMA, the programs are generated. It’s much more common to have a correct SourceMap file than a correct JavaScript file. So we are thinking of some betters ways to reduce the noise. It says, if this expectation fails just return with something. We have to figure it out, the default free for that. The exceptions are, it’s—all the statements then another third change in progress is that in various places, there are some when it comes to the grammar, there are some productions that are optional. But whether a production is optional or not depends on values of previous items in the grammar. For example, in this case here, name and kind are present or not, depending on what are the fluings. We are exploring if it's possible to somehow more clearly express this in the grammar itself.

NRO: Marking things optional is difficult because in our spec, everything is a need to get under the hood. We have some progress on the scopes proposal. We now have some perspective text available. There have been some changes, some minor changes since last time that define better how some implementations can experiment with, for example, adding more language-specific things to discuss information. And slightly change the grammar for files that don’t have a scopes list.

NRO: And that’s it. Again, if you have—interested in joining us, we have one TG4 meeting every month. It’s one hour long. And every month we have the meeting specifically for the scopes proposal. So during the calendar, please free to join.

## TG5: Experiments in Programming Language Standardization

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/16qX8ml3o-OEepZfmqVsJ7IlygMKULwP5vWSUxZbKAMI/edit?usp=sharing)

MBH: We had a successful recent TG5. It was a talk about matching algorithms for (..?) regular expressions, a linear algorithm. We had more than 20 participants. This was the most well attend TG5 call. And we also had several renowned researchers join us for that call.

MBH: As unusual, we have meetings once every month. The last Wednesday of each month. But, for example, for this month, it coincides with the plenary, so it’s cancelled for September. Then together with in-person hybrid plenary, in Tokyo, on the 17th of November, Monday, so between Japan and today’s plenary we will have a TG5 workshop. We are now working on the program for that I soon will be posted—I will soon post in Reflector a call for presentations for those who want to give a presentation there.

That’s it. Thank you.

CDA: Thank you, MBH. Yeah. I was at that meeting, that had the high attendance. That was a great one. These tend to be great meetings. If you have not been to a TG5 meeting, I encourage you to go to one. They are fascinating.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

CDA: Next up is the CoC committee. We don’t have any reports, nothing new to deal with. I am reminded of the PR that KG had for the sort of related to CoC, large language language models in authoring comments. Did we merge that PR, KG? I think we did. So that’s still—this is how we work repro.

KG: It is not merged.

CDA: I did hit it with an approval. Okay. I guess, last call for comments on that. I don’t think there’s any blocking concerns. There’s still some discussions, some back and forth, but that is—pull request #164 in how we work repo. If you have any thoughts or comments, but otherwise that will probably merge quite soon.

KG: And just I guess since we’re talking about it—as presented, there was not an explicit carve out for proofreading or similar. I have now added an explicit carve out. "You may use LLM for proofreading as long as this doesn’t allow for any new content." We could be wordier but I don't think it's necessary. I think that was the only serious concern addressed at the last meeting.

CDA: Yeah. That’s what I recall as well. Thank you, KG.

## Convention: strings-as-enums are kebab-case

Presenter: Kevin Gibbons (KG)

* [PR](https://github.com/tc39/how-we-work/pull/165)

KG: So this is a PR to the normative conventions document, which as a reminder we have now. It exists to document normative conventions that we as a committee have agreed upon. Some are things that were changes to what we have done historically, some document things that we implicitly agree on, where it’s good to have them written down for the future.

KG: This is one which I have expected to be uncontroversial, but this is my bad because I was only looking at 262 and not 402.

KG: But before I get into that, the precise thing I am proposing is this text on screen here. If you are using a string as an enum value, then the casing for that string should be kebab, i.e. lower case with dashes in place for spaces.

KG: The one place currently in the specification in the 262 specification that uses this kind of string where this comes up is at `Atomics.wait`, which uses a kebab case. I also followed this convention with the base64 proposal which is in the process of landing.

KG: So these two things use kebab case. The iterator chunking proposal has also this kind of string used as an argument, and it’s been updated to use kebab case following this convention.

KG: I should also mention that there is a [web platform design principle](https://w3ctag.github.io/design-principles/#casing-rules), which says the same thing: if you are using an enumeration value, it should be lower case and dash-delimited, which is to say, kebab case.

KG: So why do we have a larger timebox for this? It turns out we discussed this in 2019. In the context of 402. And at the time, the decision in 402 was to use camelCase or basically the identifier case.

KG: So 402 has a documented convention of using camelCase for these string values. There’s—as far as I am aware, a couple of places in 402, where this does come up. At least only a couple that I found.

KG: Some of these are also going to make their way into Temporal, because Temporal is reusing in particular the roundingMode, which can be something like halfCeil or trunc or whatever. So 402, already has some non-camelCase strings as enumeration values. So within the JavaScript language, as a whole, we’re already inconsistent. There’s a couple in 262 that are kebab case. A couple that camel case in 402. I should mention the reasoning for the convention in 402 is that a number of enumeration values are reusable as identifiers. Which is to say, there are places which use them as identifiers. "timeZoneName", I believe, is an example. This is an enum value but is also a key in an object that is passed to some of the APIs in 402.

KG: So since we are in the process of introducing new string enum values, I think it would be behoove us to decide what we are going to do. In some sense we already did with the convention in 2019. But since we have already violated that convention in proposals that have landed since then—which, my bad—I think it’s worth revisiting. In particular, I want to make the case that since there is no world where we are consistent, given inconsistencies already exist, I prefer to try to be maximally consistent going forward. And the web platform is not going to change because the web platform has dozens of these values, things that web developers run into. If you are using the cross-origin mode and fetch, you pass the "no-cors" or—I forget the credentials ones is, but "same-origin" or something like that.

KG: And so the web platform is pretty firmly committed to kebab case, and it is something that frontend JavaScript developers run into. Fetch has also made it into a number of non-web platform JavaScript runtimes. So I think the best option is to say, we are going to match the web platform going forward, except in cases where there’s a strong reason not to in some particular case, for example, if you are just reusing an existing enumeration value from 402 which is already in camelCase, it’s fine to continue to have that enum be a consistent, internally consistent casing.

KG: But otherwise, we say there’s, like, a finite list of legacy exceptions that isn’t consistent with the web platform, but any new APIs will be consistent.

KG: Yeah. That’s my case. I would like to have this convention documented or updated. That’s what I got.

SFC: I just wanted to also note that you stated that there’s examples of camel case and kebab case. There’s one more or more examples of space separated to add to the list.

KG: Also the web platform is not 100% consistent, despite having in documents guidelines. There’s a couple of dozen kebab, but one snake case, an underscore and one other weird one I am forgetting now.

NRO: Regardless of which direction we go with, if we have some APIs that do not match with what we decide, it’s great to have a number of PR update into the APIs to accept both. Especially given what we decide, we don’t have many places now, accepting items so we probably just let developers forget that. The other ways of letting them that these enumeration strings exist

KG: I’m fine with that. Usually I prefer to have only one way or the other. But I don’t have a strong reason or preference or to. If people want that, I don’t have any problem with that.

PFC: I guess another option is to always accept both, but yes, if you generally prefer only one way of doing things, then I am sure you will like that option even less.

KG: Yeah. I think if there’s not a particular reason to accept both, I would prefer to only have one, just so it’s one fewer decision the developers have to make.

SFC: As KG already noted, in 402, we adopted the camelCase convention. We have fairly thorough documentation for why we went in that direction, which I encourage interested parties to review. I am not going to reiterate everything in there, but the main thing I want to sort of pull out is that the camelCase allows to use these as string enumerations but also as identifiers. This was something that was important in the 402 case because there’s at least one case where we have the string values and enumeration that can be used as properties of a property bag. And that was one of the reasons why we sort of went in this direction. And then, given that we already have that example, we felt it was more important to be self-consistent within ECMA402, to use that naming convention. We felt that was a more important type of consistency to follow than consistency with the W3C style guide. I think 262 could make the same decision that we made. Or it is—could make a different one. I think that, you know, being consistent in this way is, you know, in my opinion, would be—it would be better to be consistent with what 402 is doing. But I also understand that the web—W3C consistency is probably of greater importance in the 262 case, so that’s also a valid position for this committee to take.

SFC: The other thing I wanted to say was that, we could also do a—like a more nuanced position where basically a case by case bases in the enumeration in question is one that we feel is likely to be used as an identifier, then we favour the camelCase version of it. Again that’s much a case by case decision. And I would give a cautionary note that, it might not always be obvious when looking at an enumeration that the enumeration values would be used as property, properties of options bags, as in the 402 case. If you feel fairly certain they are unlikely to be used in that case, following the W3C convention seems like a reasonable convention for that committee to take, although doing the more conservative 402 style camel case is also a valid position to take. That’s all.

CDA: SFC, that covered your topic on preferring camelCase. Did you want to talk about that more?

SFC: Oh, um, yeah. That was my—I’m sorry. Was I on the queue for another item? Yeah. Sorry. I was also on the queue for the previous item about accepting both. I’m sorry.

SFC: So the comment about accepting both, in duration, in `Temporal.Duration` is a long discussion, should the fields be called minute or minutes, singular or plural. Hour or hours. Plural. We decided when you read the fields, it’s plural, when constructing we accept either, and so it’s—and we’ve considered doing some more things in other areas where there’s ambiguity about what the input values should be. There’s two valid frames of reference. I think that it could be applied here. I also don’t necessarily think we should default to doing that all the time. But I think that it’s a valid thing to do. I wanted to point out some examples of precedent for that.

CDA: PFC?

PFC: I just wanted to mention that accepting singular and plural units in `Temporal.Duration` was not just for the fun of it it. There’s also a good reason to accept both. I don’t want to derail the discussion, but I can point you to where you can go back and read if, if you are interested.

EAO: ECMA402 is mostly internally consistent with using camelCase. With adoption of this style guidance, change what we ought to be doing for upcoming and new Intl formatters or new options we had add to existing Intl APIs, would be an expectation that these follow camelCase like rest of 402, or would new things even in 402 start becoming in kebab case?

KG: I don’t exactly have a preference. My inclination, values which are used for existing APIs should match the convention in those APIs, but if you have a new enumeration value only used in some new API, then it would be better to be consistent with the rest of the platform. The distinction between what specification something is in is not generally something users are aware of. There’s not usually a clean boundary between what is different because it’s specified in 402. That said, Intl, in general it’s mostly namedspace'd so it's segregated. Perhaps there’s a stronger argument for Intl consistency in that way. But I am okay with either outcome.

KG: It looks like the queue is empty. Does anyone want to express an opinion on this topic? Please. Come on. There’s 40 of you in this meeting. We’re painting a bikeshed. Someone has got to have an opinion.

MF: I appreciate that you can use the camelCase names as IdentifierNames. That can be more convenient. But aside from actual Identifiers, you can just quote them. So I am not super compelled by that. I think we should jump on the kebab train.

KM: I think we also sort of have a preference for kebabs. Accepting both is reasonable to Me. Especially with something that we have a legacy—I shouldn’t say legacy. We have APIs that out put, you know, camelCase and want to plug that into some new API or Something and takes the kebab case normally. You want to make sure doesn’t take Conversion and back to the other one. Accepting both is pretty reasonable to me. I would Be happy with case insensitivity even. I don’t know. I don’t care that much. Too much Work. Depends on how much you care about processing these in terms of performance. Accepting both is simple enough and probably makes things easier for a lot of people. On The output side, I think we would prefer kebab case with consistency with the rest of the Web platform as a whole. Obviously I understand that certain environments don’t operate Within the same boundaries of web platform, but most people writing JavaScript assume it as One thing and think of it as one think and not separate specification

EAO: In Intl or ECMA402 we should keep with camelCase, as that’s the prevailing convention there, and it forms a somewhat cohesive whole. New formatters and new options for existing formatters should continue to use camelCase. Some things using camelCase and others using kebab case would be confusing to users.

ZTZ: As someone who is vaguely aware that web is standardized in more than one place, I would prefer camelCase, but more importantly, it seems like we no longer have transcriptions or at least we had a gap in transcriptions. Most of what EAO said is not preserved. I think we’re back. That is it. Thank you.

MM: In general, I do like there’s only one way to do it. And in general, when I’ve made two ways to do it is always because of trying to make a transition where we’re trying to move to the new world and deprecate the old world without breaking anything. With 262 the notion of deprecated doesn’t exist and shouldn’t exist. But these normative conventions, what is normative mean in normative convention?

KG: Editorial conventions are about how we write the specification, but where those decisions don’t affect users. Normative conventions are conventions about how we design the language where those decisions do affect users.

MM: Okay. Does this become a section of 262 or just a separate document?

KG: It’s a separate document.

MM: Okay. So as I think as a separate document, this might be a fine place to deprecate the thing we’re trying to move away from if we’re accepting two things. And I do have a question about kebab case. Do you anticipate there to be context like amount where the hyphen separation is used as basically a lightweight parsing? Basically split on dash? Because any time that the processing of the enum might involve some kind of segmentation me, I wouldn’t want to split on the upper case or came/Case thing. I don’t know how common they are. We have seen that with Amount. And so I think that those are the tensions is that kebab case can be split reliably assuming—sorry, kebab case can be split reliably if we also say as part of the normative convention that the thing that comes between the dashers is the identifier. Is that the intention?

KG: It is not necessarily—like I can imagine reasonable enum values where one of the words in the enum is a number, for example.

MM: Okay. Alphanumeric?

KG: That seems like quite likely, yes. I don’t think it’s something that I want to commit to, because generally speaking enum values are not something that are parsed. They’re sort of atomic units, that’s kind of what it means to be an enum value to me. But certainly I would be surprised if we actually have something that isn't alphanumeric.

MM: Okay. The cases where we split and we have identifiers, screen values that look like this that are split on dash, we do have those in either the spec or proposals? I think we talked about that for the Amount of interpretation of the kind of Amount it is. I don’t remember the terminology. Would you consider those to be within what these normative conventions about or would you just consider those to be a completely separate thing to have conventions about even though they’re exactly the same?

KG: I would personally consider those to be sort of on the outer edges of this, so my inclination would be to say this doesn’t precisely cover them. But it’s still a good guideline to follow for those cases unless there’s a reason not to. But strictly speaking I would not consider those things to be covered by this. Basically to be an enum value, it has to be a finite list.

MM: Okay. So I think I’m mildly in favor of what you propose with the accept both replaces where we currently have camelCase. And with this document stating that the camelCase values for the enum are deprecated and that we’re moving to kebab case. So I think that’s also sort of what I’m hearing is the common sentiment here, so I agree with that.

KG: Okay. I don’t want to propose the normative change to Intl and Temporal as part of this because that’s a fairly large amount of work in terms of outdating tests and implementations and everything. I’m also personally less convinced of the necessity of it. Would you be okay with just having this as a document as it stands and then like people can make a follow-up to update other existing uses?

MM: Yeah. I did not mean to suggest that part of the proposal itself would need to update all of those other particular things.

KG: Okay.

MM: Just stating the position in this so that the incremental process can be made towards the recommendations seems perfectly fine. so EAO stated a preference for not changing Intl.

MM: Okay. What would you the rational for not changing it?

EAO: Not changing Intl or not changing anything?

MM: Not changing Intl.

KG: As far as I’m aware, Intl is the only thing that would change. Well, no, that’s not true. Temporal uses one of the enums defined in Intl.

MM: There is a nice dividing line that Intl falls on one side and Temporal falls on the other side. Temporal is part of the main language and is not optional. Intl is a separate spec and JavaScript considers it to be optional for an engine to provide it. Nevertheless we still have the question why not have—as long as we accept both during the very lengthy transition, why not accept both all over Intl as well as Temporal? EAO, let’s take that as a question for you.

EAO: Because there’s a lot of it, there’s a lot of existing usage. While the benefits of using kebab case in new APIs are clear, we have a corpus of APIs and interfaces that uses the existing style. Willy-nilly changing all of that to be different I think needs better reasoning than just there’s some other APIs somewhere in the neighbourhood that kind of match this other style as well.

MM: So by your rational, what about Temporal?

EAO: I have no opinions about Temporal.

KG: The thing with Temporal is that the—

CDA: Sorry. I will just interject real quick. We have two minutes left for this topic.

KG: We might not finish right now. That’s okay. So the thing with Temporal is that there is—as far as I’m aware, there’s one place this comes up in Temporal. And that is there’s a rounding mode parameter to some of the APIs. Rounding mode is a concept that is in Intl. The values for rounding mode are the same as they are in Intl. So Temporal is using the values which are spelled precisely the same as they are in Intl for this thing. And I think that’s good. I think it would be weird if there’s one API which requires you to write "halfCeil" in cameCase and one API that requires you to write "half-ceil" in kebab case. Assuming we’re not having update Intl to accept new values my personal opinion is that Temporal should match Intl and only accept camelCase. That would be unfortunate but I think the point of these guidelines is not to be hard and fast rules. When there’s a specific reason to deviate. The fact this is in Intl is a reason we should deviate.

MM: With full TypeScript vs erasable TypeScript, there are enums that can’t be kebab case, right?

KG: I think so.

MM: That’s a serious cost.

RCH: That's not actually true.

KG: Oh, sorry!

CDA: We are at time. I did capture the—I saw some people removed some things from the queue but I did capture the queue before that. Kevin, do you want to continue this—we have some time especially on day 3 if we don’t finish up any more time—if we don’t free up any more time before then, we have time on day 3 to continue.

KG: Yes, I would like to continue. I want to say the thing that I will be proposing when we talk about this later is that we say this will be the convention for 262 going forward but Intl will continue to operate under its existing convention and will not update to accept multiple values. That decision is up to TG2 but I think that’s the most straight-forward option. So if people don’t like that, bring your opinions when we talk about this later.

### Speaker's Summary of Key Points

* Ecma 402 uses camelCase for enums; the web platform and two 262 APIs use kebab-case. KG argues for having new 262 APIs use kebab-case going forward. Some people suggest allowing APIs (possibly only existing camelCase APIs) to accept both.

### Conclusion

* No conclusion at this time

## Normative: Add `[[CompactDisplay]]` slot to `Intl.PluralRules`

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/ecma402/pull/1019)
* [slides](https://notes.igalia.com/p/tg1-normative-PR-1019-sept-2025.md#/)

BAN: So this is one that is a normative change but is a normative change that has essentially no effect on any current implementation. In some languages, it’s possible for the rules for forming plurals to differ based on the notation when using the compact form. There are two compact forms. There’s the short compact form that is "1K" for 1,000 and the long compact form, the "one thousand" spelled out for 1,000. In some languages, the appropriate role for pluralization can change whether using the short form of the notation or the longer spelled out form of the notation. The reason why I say this makes no change to current implementations is CLDR doesn’t currently have the plural forms in short compact than in long compact form and no observable change for any implementation using CLDR. The PR what it does is adds a `[[CompactDisplay]]` slot to indicate whether or not the short or long form is being used in Intl plural rules. As such point as the data is added to CLDR is make use of it as a result of the PR. I will just say this one and the next one might be fairly fast. But there’s some late-breaking changes related to amount that I anticipate using a lot of the time freed up here. But any questions on the support for future CLDR data on differing plural rules for short versus long compact notation.

EAO: Would you have an example available of a language to depend on this? I’ve not been able to find any in all of the discussions around this. I don’t feel strongly about this either way, though.

BAN: Let me see here. I believe there’s one in Spanish. I want to defer to one of my colleagues who speaks Spanish.

EAO: I would be happy to have that added as a comment on the appropriate issue or PR just so it’s somewhere visible about why we’re doing this.

BAN: Fantastic. So let’s see, is it appropriate to ask for consensus on this support future CLDR on rurals with short and long compact form? Then I will ask for consensus about that. I am asking for consensus.

CDA: Okay. Do we have support for this normative change?

KM: I know that some platforms, I don’t know if it’s supposed to mention names, I always forget whether you’re supposed to mention, some platforms and maybe the one or maybe not the one that we ship have custom CLDR rules. Is this something that would impact people who have—I know very little about this. This is sort of not really necessarily my expertise. I’m curious if you know if this is the kind of thing that would be potentially impactful to those or—

BAN: I don’t believe so. Someone else who’s deeper in the CLDR process, correct me if I’m wrong, but that would require an engine to have an implementation that already treats—that already uses different short versus long compact form and has differing plural rules for it, correct?

KM: Are you asking me or somebody else? I don’t know the answer to that.

BAN: I’ll have to punt to someone who is more deeply involved in CLDR on that.

KM: I don’t have a problem with this if it doesn’t impact us. If it does, then like I have a harder time answering. I would have to get back to you. If that’s fine with everybody else, I don’t have a problem. I can give it to you to Ping to people and possibly get back to people by the end of the meeting. Not today but the end of the session.

BAN: Would that be a conditional +1?

KM: Sounds conditional +1.

CDA: So we have on the queue, JSL saying no objections, we do need explicit support. We don’t do lazy consensus in TC39 and we need explicit support and no objections. I note that we have no objection from JSL and we have support from EAO thanks to NRO's example. Do we have any other voices of support for this change? Normally we like to have at least two voices of support. Though admittedly this does not seem particularly controversial to me. All right. I will support this as well. Not seeing any objections. So I believe you have consensus for this change.

BAN: Fantastic. All right. And next up is the other one, the other normative change for 402.

### Speaker's Summary of Key Points

This PR allows implementations to take into account potential differences between the short compact form ("5K") and long form ("5 thousand") when determining the correct plural form to use.

### Conclusion

* Consensus for the proposed change.

## Normative: Make `Intl.PluralRules` ResolvePlural and associated AOs take Intl mathematical values rather than Numbers

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/ecma402/pull/1026)
* [slides](https://notes.igalia.com/p/tg1-normative-PR-1026-sept-2025.md#/)

BAN: This is another plural rules. Currently we cannot accept plural rules for BigInt. This is largely the result of an oversight. Let me go to the actual PR. The sort of key part here is back several years ago, Intl NumberFormat, I believe this is before V3 even was updated to allow it to format BigInts. The key thing is somewhere previously it called the 262 AO to number that throws on the BigInt, I have this here, Intl NumberFormat was updated to call first the 262 PR too numeric that didn’t throw BigInt and I believe later in V3 the concept of mathematical value was introduced. That update was never made to plural rules. So currently plural rules throws when it is confronted with a BigInt. There’s sort of no particular reason to do it. That was an oversight and should be able to take everything that Intl NumberFormat takes in this context. So this is the current behavior. If you give it a BigInt, it throws. The new behavior is if you give it a BigInt, it correctly selects the plural rule. And this has approval from TG2.

BAN: So I am asking for consensus on making this change to allow plural rules to select the proper plural rules for BigInt instead of throwing.

MM: I have a question. I think it’s just a terminology question so it doesn’t have any impact of normative meaning of this change. As I understand what you mean by Intl mathematical value, I have to admit I haven’t paid enough attention to Intl to have come across it before. My understanding is what that category is a mathematical value plus the Infinities, NaN and minus zero; is that correct?

BAN: That is correct.

MM: On the amount proposal, the current amount proposal is being presented by you at this meeting uses the term numerical value which I think they define to be exactly the same thing. Can we avoid using two different terms for the same concept?

BAN: So the reason for that—right now, this is one of the things we will need to discuss—is in the future, since amount isn’t a 402 proposal, it might be necessary or wise to hoist the concept of Intl mathematical value out of 402 into 262, at which point it would be renamed since it would no longer be purely a Intl concept.

MM: What about going the other way around? Because calling something an adjective mathematical value with NaN especially seems very bizarre to me. Numeric value as a concession to representation issues, numeric seems much more about—to include representation naturally rather than just referring to what mathematical values in the world of mathematics denote?

MM: And since it never appears outside of the spec, there’s no observability to the terminology here, would there be any objection to do a global search and replace on 402 to change it to the numeric value?

BAN: Let’s see. I don’t anticipate those objections. But I think the reason why I don’t anticipate those is I have been working enough on amount to think that this concept belongs in 262. I would be in support of changing the name of 402 preparatory and moving it to 262 and indicate this is in fact not a purely internationalization-related thing that we have invented here.

MM: Okay. I pass.

WH: “Mathematical value” in a name implies actual mathematical values such as real numbers. There are uncountably infinitely many possible real numbers, so an implementation can’t actually represent arbitrary ones. Numbers restricted to some finite set of floating point values such as Numbers or Decimals or whatever should be called something else.

MM: Okay. That’s interesting. I was looking at the fact that it’s a super set. You were looking at it that it’s not a subset. Interesting. I don’t have a—I’m on the fence. I don’t have an opinion to state.

WH: We do have the concept of extended real numbers which includes infinities.

MM: NaN and minus zero?

WH: That specifically includes infinities but it’s natural to define one that also includes NaNs and minus zero.

MM: You’re in favor of adjective mathematical value?

WH: If what we’re talking about includes arbitrary mathematical numbers, then yes.

MM: And then BAN, I want to check with you, the intention in 402 is that it does include arbitrary real number?

BAN: Yes. It is a mathematical value plus all of the things that numbers can be that is a mathematical value for capital and number.

MM: Okay.

CDA: All right. That’s it for the queue discussion topic any way. EAO is on the queue on supporting the normative change.

BAN: That is all I have to say other than it seems we have in fact in consensus.

CDA: We have support from EOA at least. Any other voices of support for the normative change? Do we have any objections? Dissenting opinions? All right. You have consensus for this change.

BAN: Wonderful.

### Speaker's Summary of Key Points

Normative: Updates the following `Intl.PluralRules` AOs to take Intl mathematical values rather than Numbers:

* `ResolvePlural`
* `ResolvePluralRange`

This allows `Intl.PluralRules.select` and `Intl.PluralRules.selectRange` to take BigInts as arguments.

### Conclusion

* Consensus for the proposed change.

## Amount for Stage 2

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-amount)
* [slides](https://docs.google.com/presentation/d/1cDQBcMzSAht9jZiuaMKAEIDlPmlSmjeBJ-sw23AySWI/edit?slide=id.g37deebb6a10_2_54#slide=id.g37deebb6a10_2_54)

BAN: All right. So you’ll notice the strike-through. There’s been fairly late braking changes and a lot of discussion since Friday evening. We were going to ask for Stage 2 for Amount. Given the contention we’re not expecting to ask for Stage 2 for Amount at this point for this plenary. And instead this has become a Stage 1 update. I suppose it was on the schedule for something to be considered for Stage 2 if it seems like all the contention has died down that I’m not anticipating, I would gladly ask for Stage 2. Without further ado, there we go.

BAN: so the thing that I will talk about here first are resolutions that we have made to question/concerns from July. People pointed us in a lot of very useful directions and we have incorporated the feedback and suggestions that we heard there. Then we have some open questions. There’s three that were on the slides before Friday and then there’s a couple other things that were added since the discussion on Friday. And then stage advancement question mark, but like I said, not necessarily anticipating—depending on how the conversation goes, I’m not necessarily anticipating asking for Stage 2 for amount today.

BAN: Okay. So first a quick recap of the changes that we have made since Stage 1. The big one is we are no longer considering functionality involving arithmetic. This is not something to add units to units. We are not doing mathematical in this. The numeric champion call on the addition amount should be a number with unit and precision and previously we had decided it should node a newspaperrable value. In response to the concerns from July, we are changing to domain covering all the input types number and BigInt and numeric string. That’s the stuff that we have discussed about adding all of the values that are possible for Intl mathematical values: infinities and NaN and negative zero. So as described in July, it was an immutable mathematical value optionally tagged with unit and precision. Now it is anima lloydminster value and discussion of 402 and numerical value that is the same. This is the proposed API and changed since we last spoke. Here is how we changed the concerns of July. The TLDR is handling the infinity and NaN and negative zero. There’s discussion on when we shall round. That discussion everyone considered the discussion at the last plenary indicated that everyone considered it appropriate to round on the way in and not on the way out. We also had some discussion in July of whether we should treat currency as something special rather than just another type of unit and again the discussion pretty clearly landed on like currency should be another type of unit and we should not have special handling for currency.

BAN: As we said, again, previously finite mathematical value and then we realized we want to be able to cover everything in the domain of number as well as mathematical value. So infinities, NaN, and negative zero. So to avoid having unpleasant surprises, amount should have a domain that covers its input types meaning that we need to have numeric equivalent, something equivalent to Intl mathematical value even though this isn’t an Intl proposal. I provided links. And they are clear and people came to consensus that we should handle everything that Number can handle. We have a PR up for adding support for this. So as I’ve been saying, we now support Number’s holding name. The other open question was when we should round? We are absolutely confident that the correct behavior is to round on the way in. So when we construct an amount or in a call to with I making a new amount with with, rounding can occur. Both of them have a roundingMode option that defaults to halfEven. The only rounding that like toString and toLocaleString may round when there are large number of decimal double digits and this does not round with options and we are not doing math once something is in here. We round on the way in and on the way out we do not. So if we can continue amount with the option for fractions, it’s a lower number of fraction digits in this case zero, what can get stored is in this case if we provide it with 1.2, what gets stored is 1. The way is with with the new amount with four fraction digits and the 0.2 and the stuff that got rounded off is lost, so it will be a new amount with four fractional digits throwing 1. Again, the other item discussion in July is "currency" special, like in Intl? Previously it had a Intl NumberFormat currency option. When we discussed it no explicit support for having currency as the option of Intl NumberFormat and covering the currency case. And currency identifiers are considered for unit.

BAN: That’s the resolution to stuff from July. We have new open questions.

BAN: One is: What are the limits which is a very big discussion that’s sort of related not identical to the limits discussion that SFC will be having on the last day.

BAN: Smaller one, now that things can be NaN and negative zero, we have potential additional predicates isFinit, isNaN, and isZero. I believe one of these is already in there. I believe isFinite is in there. The other thing that came up is parsing units with numbers with units in the constructor. There’s another one we will get through after stepping through these three. So there is significant ongoing discussion in 402 especially on the limits for amount values and whether they should be spec defined or implementation-defined and if they’re spec-defined, what should they be? I don’t think I will step through the discussions. I believe most of what we will talk about, like I said, will be a little down stream of SFC's discussion but we also have to consider limits related to BigInts here. It’s not exactly the same. So we can return to that one. Potential additional predicates, as I said, we have these additional values that Amounts can hold and we want to be able to test for them—Infinity and NaN and zero.

BAN: And this one is, again, one that came up. So should our constructor be able to parse numbers with units? We have new notation here. Is `new Amount("137[kg]")` something that we want to support or amount in the value 137 with the unit “kg”?

BAN: This is the late breaking one. I think if Jesse is around, I might punt to Jesse on discussing this. This is something that’s come up in TG3 a great deal.

JMN: Yes, this is something that’s come up with TG3 a number of times in recent weeks. This (?), it was noticed that we have a change to to Intl mathematical value. This is thinking about the 402 aspect what’s going on in Amount. And perhaps it was noticed that the way that we wrote the spec text there, we query some internal slots basically kind of brand checking to make sure that what we’re dealing with is an Amount. But then it became a topic of discussion in TG3 because what is going on here is that we’re converting an Amount to an Intl mathematical value outside of the usual places where we use these internal slots namely we construct, for example, an Intl NumberFormat, then we call the format function on that. And then that function will end up calling the toLocaleString on amount that is querying the slots as spec text written. There was discussion about whether that is problematic and I think we have agreed it is problematic especially for thinking about membranes and membrane transparency and proxies. And so the challenge was to settle on some kind of strategy for not querying internal slots there. There is an issue there. There’s a couple of proposals for how to get around this. We don’t think this is an insurmountable problem and something that came up in review. Thanks to those who participated in TG3 for that. Is that the last slide?

BAN: I believe it may be the last slide. Let me go back to sharing. I don’t have the queue loaded up.

WH: Can you pull up [issue 54](https://github.com/tc39/proposal-amount/issues/54), please? To give a bit of a background for the flurry of activity that’s been happening over the last day, I reviewed the spec as it was linked in the agenda for the meeting. I found out yesterday that that linked spec was the wrong version. So the version I reviewed is a stale version. The actual version was only posted yesterday.

WH: I like the changes that are being done. A lot of the changes fix some of the issues. What I haven’t seen in the presentation is how we propose to resolve the issues with significant digits. There is a good approach for *fractionDigits* which the—I guess the latest changes which are being reviewed will compute *fractionDigits* although they still do it wrong for zeroes. For *significantDigits*, there’s the issue that the concept means different things in different contexts and is not really sound. So I’ve been suggesting that we not expose *significantDigits* as a getter.

WH: Furthermore even providing *significantDigits* in constructor options has problems in the design as it is now. Just to give an example, if you construct an `Amount` with the string "0.00" and no options (or `{significantDigits: undefined}`), then you get the correct *fractionDigits* of 2, which means that the output will be "0.00". If you provide "0.00" with `{significantDigits: 3}`, then you get *fractionDigits* of zero, which means that the output will be "0". And there are a lot of issues like that in the spec which will need to be fixed for which I’m not sure we’re all on the same page as to what direction to take.

WH: The thing I’m proposing is to not expose *significantDigits* getters and we will need to really think about what to do when somebody gives *significantDigits* as a rounding option because it’s not obvious what should happen. The examples in the table here on [issue 54](https://github.com/tc39/proposal-amount/issues/54) show the current behavior is still the broken one. The proposed changes fix some of them, but others remain broken. For example, an input of -0.00 with *fractionDigits* set to 1 turns -0.00 into "-0" with zero fraction digits on the output. So I support the changes that we’re making, but we still have a bit of work to do.

WH: And I’d like to hear if others have comments on the significant digits dilemma. The main issue of using significant digits is that it degenerates when the value is zero. Parts of the spec, in fact many parts of the spec, will just blow up and crash. The spec as it currently stands, even with the fixes, crashes when one provides zeroes. The behavior that I’m suggesting is the corrected behavior below, if you scroll down on [issue 54](https://github.com/tc39/proposal-amount/issues/54): If we only store *fractionDigits* in the Amount state, then things can work. The mathematical definition of *significantDigits* is one plus the difference in decimal position between the most significant digit and the decimal position of the quantum that is *fractionDigits*. That doesn’t work when the value is zero.

BAN: I believe I want to defer to NRO on this one.

NRO: So I also replied on the issue. For the case of zero, for context the problem of significant digits with zero is that there is no integer for which that format that WH said works. That is in multiple times and in the section needs are the same. I still think the significant digits concept is useful and maybe you could pick a value for zero, let’s say when the value is zero, we say zero significant digits like NaN and infinity or we could pick negative infinity that is what in quotes would make the formula work. But if we prefer to remove it, it’s probably fine especially given that we can compute significant digits from fraction digits.

WH: Either 0, 1, or -∞ would be okay. My concern is that it’s an attractive nuisance for users to rely on *significantDigits* to specify the precision. That doesn’t work when the value is zero. And unless people test for zeroes specifically, they’ll produce code that mostly works but fails on zeroes. Now, I’m not suggesting that we get rid of *significantDigits*, I just want to discourage its use. And if you are advocating for a *significantDigits* getter, then the question to answer is, is *significantDigits* of "0.00" the same as *significantDigits* of ".00"?

NRO: I don’t have an answer to that right now.

JMN: I just wanted to mention that I really appreciate this feedback. I’ve been looking through some of the comments today and you perhaps have seen some of the discussion I’m sure. I think what was going on with the understandings of what fraction digits could mean and what significant digits were meaning. I appreciate the clarity that comes here. I think we have settled on a notion of fraction digit. I have a PR ready to go that should take care of those issues. I really went through each one and took a look, although it’s possible that zero might still be a problem. I think it would be a pretty straight forward issue to just drop significant digits if we were really to make that decision. I like the idea of discouraging its use. I agree this does involve some subtle issues that programmers might stumble into unintentionally and unknowingly. But, again, I would also like to preserve the kind of equivalency that you refer to and NRO refers to and SFC may also have in mind. I think it’s important to keep that invariant in place. I think we can do that fairly quickly.

SFC: My queue item is just that, yeah, I would like, if we can, to retain that invariant. I think there’s a way to work it out, but we need to spend more time working with WH on the spec to make sure we do it correctly.

WH: I like the PR, but you’ll need to fix the rendering function to handle negative fraction digits. Currently it breaks.

EAO: That sounds good. Just noting that I’m mostly aligned with SFC that we do have existing behavior in Intl NumberFormat for what significant digits means and how they work. And I think they are very useful when given explicitly in a constructive for the amount to be able to say that the value has this many significant digits. But computing significant digits I agree is bad or potentially bad and we should not be doing that. I do think we should be allowing for an Amount to be storing significant digits if that is explicitly given.

NRO: Question on the topic. Are WH and EAO supporting that we keep the significantDigits in the constructor and we convert significantDigits to fractionDigits and expose only fractionDigits?

WH: Yes, that’s what I’m proposing: allow passing *significantDigits* into the constructor but not expose it on `Amount` values.

EAO: My preference would be to keep the significant digits accessible because there is value in being able to tell that the significant digits is something less than the number of integer digits in a value.

WH: The issue there is that the computed *significantDigits* can differ from the provided *significantDigits*, and that may generate confusion. There may be ways to work it out. It’s not obvious to me.

EAO: That’s why I was saying we should not compute significant digits, we should only accept significant digits when explicitly given or otherwise have undefined for them.

WH: Okay. But what should happen to fraction digits when you provide *significantDigits*?

EAO: Effectivity the same thing as `Intl.NumberFormat`. If you give significant digits, then we prioritize significant digits. But we do still report fraction digits and the fraction digits we end up reporting is the number of fraction digits a number that is zero or a positive integer.

WH: Let me see if I can come up with an example. If you pass in "0.00" with *significantDigits* of 2, what should the resulting *significantDigits* and *fractionDigits* be?

EAO: So that was 0.03?

WH: "0.00" with *significantDigits* in the constructor set to 2.

EAO: That would be following the example I posted on the channel, that would be 0.00 that we calculated as so that has two significant digits and one fraction digit.

WH: So it would render as "0.0"?

EAO: No, "0.00".

WH: So where did you get the—

EAO: Because that is what we do currently with `Intl.NumberFormat` when you ask it for both minimum and maximum significant digits confined to some value. Because we have the existing behavior in the language. I strongly think we should be following the existing precedent.

WH: So providing significant Digits in the constructor doesn’t affect fraction digits at all?

EAO: No, it does.

WH: How? What does it do to *fractionDigits*?

EAO: So, for example, if you’re constructing given a value "0.03" and give significant digits two. So the value we end up constructing is "0.0" effectively where the fraction digit count is one and the significant digit is two and the value is "0.0".

WH: That just seems really off. "0.03" to two significant digits should be "0.030". That’s what significant digits mean.

EAO: That’s not what it means in `Intl.NumberFormat` at the moment.

WH: That seems broken.

EAO: But it is internally consistent.

WH: I don’t think that’s consistent. But it’s clear to me that we have wildly different interpretations of what significant digits mean, so we should figure out what those mean.

CDA: I’ve stepped away while Dan was chairing. I see the queue, but I’m not sure where we are at. Are we still on SFC topic or going to SFC?

KG: The queue was advanced. I haven’t had my topic yet. But also we’re still on the previous topic which I believe NRO has a response to the previous topic based on the queue.

CDA: That is no longer appearing. We are actually at time. I think technically we had a couple of minutes to go, you know, due to other topics. But given that the queue is where it is and it sounds like we need a continuation and I see BAN nodding, it sounds like probably we should just capture the queue here where it is and get a continuation scheduled to continue.

BAN: I was thinking probably 30 minutes and ideally not for today and working with folks offline.

CDA: Thank you. I mean I know there was at least one constraint on this item, but we’ll do the best we can and even though we might not be able to meet that given all the other constraints and all that. We will definitely have time. I will do that. I have captured the queue. Let me just double check that I did just so I don’t want to be caught up. I do have it. And thanks everyone. That brings us to the lunch break. We’ll see everyone back here at the top of the hour. Thank you.

### Speaker's Summary of Key Points

(see final continuation)

### Conclusion

* Continuation

## Iterator Chunking for Stage 2.7

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-chunking)
* [slides](https://docs.google.com/presentation/d/12QAd-b2rPY5OC82ZwPCcDfGgzSfeSwdbcEoctUqQGss)

MF: Thank you. Iterator chunking again. Looking for Stage 2.7 today. I have a bit of a reminder. As we last saw this proposal, it was three methods that we add to `Iterator.prototype`. Chunks and two windowing-style methods sliding and windows, which only differed by how they treat iterators that yield fewer items than the window size. But all of these are similar. You can see the yellow section on the slide is the difference between them. And we were at that state because of the use cases that we considered and wanted to make sure that we covered. Slightly before the last meeting, we got two different pieces of feedback. One is the piece of feedback from KG that was suggesting that maybe we just combine the two windowing ones into a single method where the small difference in behavior is differentiated by the option attached to the method. The other piece of feedback we got from NRO that says if we did keep them separate, the names really weren’t very good and we had to do something. We decided at that meeting to go with KG’s suggestion.

MF: So the proposal as of agenda deadline looked like this. We have left `Iterator.prototype.chunks` unchanged and we have combined the sliding and windows methods into one where there is now an optional second parameter called `undersized` here that takes two partial string enum values "only full" and "allow partial". Only full means only yield full-sized windows. Allow partial means possibly yield undersized windows, allowing them to be partial windows. The only constraint we were working with is we didn’t want to use the word truncate in the options because the feedback from last time is that truncation could be understood to apply to the stream, you know, the iterator or it could be understood to apply to the window itself. We avoided the names. This is what we went with. That is what the proposal looked like as of agenda deadline.

MF: It was pointed out last week to me that we actually did have precedent for the kebab case naming that I wasn’t aware of. I picked arbitrarily space separators. I made a last minute change to switch to kebab case. If you were here before lunch today, you would have participated in the discussion talking about possibly setting precedent here and actually defining normative conventions for continuing to do it. But I wasn’t aware of it, so I didn’t make this change until last minute. Hopefully we can decide to go forward with this kebab case naming for these strings. And if that’s not an issue that that was made kind of last minute, I would like to go to Stage 2.7.

MF: I have my summary here. I don’t think I need to read it out. And I’m open for the queue.

RPR: Any questions for MF? Or comments? NRO.

NRO: Thank you for the proposal. I can support this advance.

RPR: We also have support from DLM and a question from SHS, was it discussed to default to throwing on undersized if not specified?

MF: We have discussed at multiple plenary meetings and there’s an issue for it. My main opinion there, I think KG was slightly supportive of having a throw ability which this design does not rule out if we wanted to do that in the future. But I think that it’s an anti-pattern to throw on, you know, a particular kind of input here for the iterator helpers. So I don’t support it. As of what I know right now, I wouldn’t support it as a future extension. But the future extension is possible given our API.

KG: Not changing the default, which is what the question was.

MF: The default. Yeah, the default is currently `only-full` and that was chosen based on the use cases that were most common.

KG: I do still personally slightly lean towards throwing, but I’m fine with the current behavior. I also wanted to say that I’m happy with this choice of names since there was discussion about that last time.

SHS: I’m also fine with that. I wanted to bring it up to see if it was discussed.

RPR: Thank you Steve. All right. That is the last item on the queue at the moment. So we have heard only support. And a little bit of clarification. Should we go the formal ask for 2.7?

MF: Yes. I would like to ask for Stage 2.7 for iterator chunking as presented here including the kebab case name that was changed after the agenda deadline.

WH: I support this.

RPR: JRL has come in with a question.

JRL: (trying to speak while clearly under water)

JRL: Completely in support of kebab case. I agree with KG that the default should be the partial full because it matches with the chunking case instead. If we have to support both types with an enum, it seems that the argument from last time is wanted the tuple type in TypeScript, the type with known constant length. The type has four elements, for example, but now we’re switching based on the enum so it seems like either way we will have to support both cases in TypeScript. If we have to support both cases, I would rather the one that matches with the chunking behavior which is give you all the values all the time.

KG: Sorry. To be clear, I’m not supporting switching to "allow-partial". I would be supportive of throwing if it is undersized and neither option is specified. I think that "only-full" is the better default if we're picking one. I see the analogy to chunking but if you actually go through the use cases that we think this API is for—and maybe MF can speak to this more—but I was convinced that most of the use cases actually don’t want any output in the case that it can’t provide a full-size window. So it's different from chunking just based on the use cases.

JRL: Then I hate throwing the most. I don’t want to support that one.

RPR: All right. So I think we’re back to the formal request for 2.7 as MF stated before. We heard support from WH. Are there any objections to Stage 2.7? All right. I’m not hearing any objections. We have had multiple people stating support. So congratulations, MF, you have Stage 2.7.

### Speaker's Summary of Key Points

* as discussed last plenary, combined windows/sliding into a single method
  * adds an "undersized" parameter to the windows method
  * value can be omitted, "only-full", or "allow-partial"
  * defaults to "only-full"
  * keeps the door open for a future options bag if more options are desired
* didn't request re-review from Stage 2 assigned reviewers
  * change is small and the merged PR was discussed in plenary
* made a last-minute change to follow de facto kebab-case convention
* requested Stage 2.7

### Conclusion

* proposal advanced to Stage 2.7, including the last-minute change to kebab casing

## `Array.prototype.pushAll` for Stage 1

Presenter: Daniel Rosenwassser (DRR)

* [proposal](https://github.com/DanielRosenwasser/proposal-array-push-all/)
* [slides](https://danielrosenwasser.github.io/tc39-slides-2025-09-array-push-all)

DRR: I work over at Microsoft at the TypeScript team. I’m here to talk about a method that I would like to add to append elements to the end of arrays in batches from iterators and other arrays for Stage 1. So I kind of started off with the concrete name because this is maybe where I would like to envision things going. But I think there’s some flexibility there. But let’s try to go through the actual proposal. So today if you want to take an array of items and append all of their values to the end of another array, in one shot, the most sort of idiomatic way to do it in JavaScript is use spread arguments on the push method. So here you have some new elements, you have array arr and arr dot push dot dot dot new elements and that unpacks the elements and new elements and pushes it into array. The problem with this is that every single time we do this, every time you do a spread argument, this places each item from the iterator or array that you have or whatever on to the stack and so as an example here, let’s say that you have this repeat helper generator and takes a value and a count. We want to repeat some string 200,000 times and then we just say let’s spread all those and push them into the array, what will happen is that you end up with the RangeError that is really specifically a stack overflow, right? What is happening is that every single time that you do this, you will basically exceed the stack limits. I mean, in theory there’s the time that could have a very, very large stack and doesn’t hit this. But of course its implementation defined. And people hit this very, very often. So you have 200,000 elements, each of the elements gets pushed on to the call stack as the individual slots and you basically don’t have enough size to model that, right? So the work around is that if you ever need to do this, you go back to what people did before spreads existed, right? I mean, this is the for of loop. That didn’t exist before. You get the idea. You can push each to the individual elements or use dot for each and push those. Depending if you have flexibility on and model as an expression or willing to split this into multiple statements, you can pick one or the other.

DRR: But there are a couple of problems with that, right? As you might have noted, this is a little bit more verbose. There is difference between `…` or multiple lines or single line. It also probably leaves perf on the table. Any of the approaches today, right, either is probably not optimized at the low optimization tiers or it has the risk of a stack overflow and probably isn’t optimized anyway. What I mean is every single time that you push, you might push over and over again and then you hit the capacity of the backing array for that array and then that thing has to be re-allocated and resized and re-allocated and over and over again and you have to do it over and over again and you end up with the quadratic behavior that ideally if people had the helper function to solve this, they would prefer that, right? That would be more optimizable at the baseline.

DRR: People have the helper function to avoid this. This is not like a hypothetical problem. This happened on basically every team that I have worked at some point in time, right? Either you start off with not really thinking about the edge cases or you get a big array from somewhere across on the other side of the wire and then you try pushing all of those at once and then you have the stack overflow thing. So basically you hit this in production. You can’t predict when you hit this extreme case. It’s not even obvious there’s a problem with this in the first place until you hit it in production, right? If you knew there was another function to do this, you would go towards that function. But instead, you have found out there’s this sort of idiomatic way and unless someone warranted you or put a lint rule in place, you will end up writing this and causing an issue later on. So proposal is I should say I’m trying to be more abstract about this and maybe I was a little bit rust on saying I wanted a specific prototype method. The way I would envision this and hope it being is method like push all or push from or something like that that exists on the array prototype. There’s some subtleties in the function. But more or less would look something like this. Take iterable and array and go through all the elements and push them down to the end of the array, the back array. With push all, right, this becomes very natural. It is just a method. It’s auto completable, right? So it has save run time behavior. You don’t risk the stack overflow problem or mitigated it significantly less. It’s more discoverable. So in editor you hit dot on the right side of array and immediately get push and push all are right next to each other.

DRR: It’s more optimizable or more easily optimizable. Every engine can optimize every single pattern in the universe. They wouldn’t have to if you had a good method that did the ideal behavior in the first place. And then it’s allegation just less boilerplate, right? You don’t have to write the helper function or for loop. It’s just there. Every other language in the—I mean, here is how popular languages this and top ten and Python has the pen for individual and extend and Java add and add all and C range and concat we have the new array. C++ has push back for the individual element and then doesn’t really have special case adding to the end. It instead says give me the iterator position of the end and then the it ray Tory start and end of the new elements from another collection. This is nice in other ways. I would like to also just make it easy to push a lot of elements to the end of the array and then go optimize is this because it can more easily figure out the pattern and whatnot and statically optimizable and also has lots of interesting characteristics about how it models its call stack even if it can’t do that, right? I’m open to other names and thinking about this a little bit differently. I think a prototype method would be the best thing. I should say this is the discussion point. I forgot to add the slide in. I would like to open the floor to discussion right now.

RPR: All right. You have plenty of queue. We’ll start with JHD.

JHD: Yeah, so I’m very, very skeptical that large arrays at all are common. There are certainly people whose do mains tend—they tend to run into it a lot. And I can imagine that with the TypeScript compiler you run into it a lot. What you mentioned for example sending things over the wire, if you’re sending 200,000 items over the wire without pagination, your performance problems are not in the push method, they’re elsewhere. You’re already going to have to—in order to eek out the best performance possible you have to shard the data in which case you won’t run into this problem. I don’t think large arrays are common enough that I think this is worth looking into personally. Go ahead and you can respond before I say my second part.

DRR: I’m just surprised, because this happened on several teams and all had to tell newer engineers watch out for this. The most recent occurrence that prompted me to finally open the proposal, yes, it happened on VS code and on the types of compiler and many sort of—maybe it doesn’t happen in most front end websites but definitely happens in a lot of JavaScript code. Wouldn’t it be nice to avoid the problem in the first place, right?

JHD: Sure. But I’ve been telling everybody about the problem for a decade but not because of the size of the arrays that is never the issue but the iterator protocol is always slow and people reach for it because it’s so ergonomic and easy to do. So I understand there’s issues and it’s unfortunate when you have to tell people here is the best practices, you can’t do what the language lets you do. That’s just programming.

DRR: Yeah, I mean, it sounds like you raise another good point why it might be worth looking into. I personally considered both of those valid reasons for why this could be a helpful part to add.

JHD: I will concede I’m sure there are specific domains where it is maybe very common, right? If you’re working with lots of parsing and you have to parse potentially large files which covers TypeScript babble, et cetera, and doing data number crunching stuff and front end web code and back end web server node code is not my experience that it’s common. The second part was there was some issue that was mentioned about what about the other array mutating methods that you want to do this with variable argos with splice and I forget the other one. I think splice is terrible and API is bad and shouldn’t try to replicate it further and I wasn’t happy about toSpliced, not worth fighting. I think if I’m not convinced about motivation for push, I’m not sure why it would be worth adding the other ones. And then I guess the other thing before I yield the floor is I am also skeptical that—I know there’s lots of issues with concat namely is concat spreadable? But I would rather see a solution that produces a new array instead of adding another mutating method to arrays whether it’s static or prototype. I don’t think we should add any more of those ever. It’s not a good programming practice we should be encouraging.

DRR: The array has to be made at some point. If you have local mutation, I mean, I want to get through the queue.

ZTZ: It’s not about it being common but not having the idiomatic way explode—rarely.

JRL: To give another point of view, I find this extremely common. JHD mentioned he rarely hits this and any time I’m doing parsing work or any time I’m doing—I just wrote a HTML depth first traversal and don’t want to create a new array and I hit this all the time in node code and client code. I would love to have an idiomatic way to do it.

MF: I will preface this with I have seen it a lot and run into this a lot personally. I understand it’s a problem. This is kind of sneaking my later topic into this one, but it aligns with what JHD is saying. I think that any time I have seen this problem that there’s already this problem to begin with. You’re already doing the improper thing by working with very, very large arrays and should be doing something with iterators or generators or just not realizing these huge arrays to begin with. And it’s kind of a good thing that you get an error here because it prompts you to say wait, am I doing something really dumb? In all cases, yeah, you are. And you should do something smarter that will have tractable performance. You don’t want to work with the huge arrays and doing the huge operations because you’re just—even if you can get it working, as in not throwing and giving you a correct result, it will be just impossibly slow and useless from that standpoint. I don’t object to this research area. I’m not that skeptical of it. But I do want to see us actually like justify those use cases as these are actually problems that will be solved because after they get past the throwing error, they have reasonable performance that they can actually do something with it.

RPR: We have got about six minutes on the queue and about seven people to get to. Kevin.

KG: Response to MF: Two things. One, the claim that if you are doing this you are doing something wrong is just false. 20,000 items is not an unreasonable number of items. Computers can deal with 20,000 items without being slow, or 50,000 or whatever the practical limit is. But that is not an unreasonable amount of data to be working with. It’s not inherently slow. Doing it a different way than arrays even at that scale is almost always going to be slower because arrays are quite fast and keeping the data linear instead of lazy is often faster. And then second thing is that often what is happening here is that most of the time it’s not actually going to be that large. So what you want to do is write code that is reasonable and performant and maintainable for the common case and have it work in the uncommon case. But if we don’t have this, then you can’t do that. Because it will explode in the uncommon case and to either have to write all of your code as if it is going to be in the uncommon case or you have to have a branch based on some arbitrary constant where you have two copies of the code, one of which does something in a more awkward way just to deal with the uncommon case. And neither of those is good. You want to just be able to write idiomatic thing that works in the common case and doesn’t explode in the uncommon case.

KG: OK, next topic. I am strongly in favor of this API existing. Everyone needs it. Contrary to JHD’s claim this doesn’t come up in practice, it does come up in practice in my experience. That said, we really need explicit buy in from browsers before adding things to array prototype. All of the browsers.

DRR: Yeah. I’m also seeking to have discussions with browsers here and beyond as well. I didn’t have the time to do outreach, I will be honest with you, for every vendor prior to this meeting. But I wanted to get things going and have the discussion here.

RPR: KM from Apple.

KM: Maybe one comment is your example of stack overflow works just fine in JSC but I don’t think if that’s because we have optimized it in some way. But overall I think I’m neutral on it. There’s going to be probably horrendous problems because it’s Array prototype. Most things in the most optimizing using tiers will still end up being slow with concat and do the optimization of concat and replace the new object with the old object and allocate the new thing. You have to grow the array by a lot you have to allocate the back end storage. It’s a wash. Concat is super fine tuned to basically be the mem copy and so the—I mean, I’m kind of neutral on the proposal I guess overall. But I guess I’m curious is the intention here largely about iterables? Concat name in iterable or just a large collection of data?

DRR: Large collection of data. I mean, really the more practical thing is you’re taking arrays and concatting and appending all of the values of those arrays over and over or at some point which means like you know you would want to optimize based on the object here is actually an array. I don’t need to go through the iterator protocol in those cases. In fact, I would be open to specifying specifically like that to avoid some of the edge cases that other run times have done too. Python being one of them. So it’s interesting that you mentioned some of that stuff. It’s being discussed in the delegate’s chat that it’s questionable whether or not you want that differing behavior or rely on the differing behavior or want to say engines all need to have some sort of optimization. A clarifying question, though. And I guess the question is this taking array like or iterable?

DRR: It can take—I’m open to specify that. I think it can special case array alike and also work on iterable. That was my intent on that.

JHD: Any prototype methods that take array like or take an iterable I guess is the—because I’m pretty sure that the only place that we take the iterator around arrays is `array.from` and everything which that handles array likes as well. And everything else only takes array likes. Would your use case be satisfied by array like?

DRR: I think that would be surprising for people but fine. I mean, one of the names was push from and maybe that was a little bit inspired by `array.from` too. But, yeah.

RPR: Just a quick time check. We are at time. But we could go for an extension if people are happy with that. We could do up to six minutes. Please go ahead.

MF: People have touched on this a little bit before. So this proposal didn’t have any fundamental new capabilities, you can do this yourself. This is strictly a question of ergonomics right? We have heard in the past from implementers that with varying levels of severity they have no interest in adding new `Array.prototype` methods anymore. If that is the case, we don’t have to answer this pre-Stage 1 but during Stage 1 we should figure out if that is a possibility. If it’s the case that we can’t add this to `Array.prototype`, is there an alternative that is really solving the ergonomics issue better than the current state of the art, which is not terribly unergonomic in my opinion?

DRR: I think it would be nice if it would just be another method on arrays. Also nice if it was just as discoverable as the push method too. So I think that that’s a key reason that I would really want this to be a prototype method. I’m not against going for another location, but I think I would like to have that driven by feedback from browsers and web compact. And I would like to alleviate that work as possible and open to feedback on that and rethinking things.

WH: I’m trying to figure out if this is a muting version of `concat` or something materially different. Could you make it be like a mutating version of `concat` where you can supply any number of arguments and just concat everything in place rather than creating a new array?

DRR: I think that that is certainly possible. You know, I’m open to this thing taking multiple collections as its arguments, so not just one necessarily. That way would model something like concat. The key thing with concat that I think is a little bit strange is concatenating iterables and concatenating individual elements has a behavior that I think is sometimes a little bit unpredictable and sometimes a little bit harder to model whereas I think if we just say—I kind of go back to the stop casting things presentation a while back, I would like things to just be more consistent and predictable that you have the idea that, oh, I need to push this and that in this very consistent way and predict how this was going to operate. And that way you don’t have like an issue with pushing strings, you have to push an array of strings if you really end up needing that behavior. That’s kind of where I’m thinking for that. We could use concat as the naming. I think that would be a little bit surprising if we’re trying to avoid the behaviors of concat. So I understand why that is—I understand why the current state of the world makes it a little bit undesirable but I think we can still create a new good API here as well.

WH: Would we have a good solution for flattening a bunch of things and appending them all to the end of an array?

RPR: I think so with our flat method that we have as well. Maybe we can discuss that in more detail. I don’t want to push on the time box.

WH: What should this do if you push an array onto itself?

DRR: Yes, that’s a very good question. I don’t think that’s something we should block on in Stage 1. But the behavior that some other runtimes say is undefined, I wouldn’t want to do that. If you have an array push onto itself, this is why I wanted to special case array likes because—or just arrays so that you don’t end up consistently running through all the new elements of the array and run through the current length and capture that and then append those new elements. That was what I was thinking there. I’m open to feedback and iterating on that, no pun intended, after Stage 1 if I can get consensus on that.

RPR: Steven hicks makes a good point that Stage 1 doesn’t require us to work out every detail. All right. We have a couple of minutes left. EAO.

EAO: Be kind of echoing just exactly that previous imparting that. As I understand it, the question being presented here or the problem that we think ought to be assessing Stage 1 is doing .push(…[array]) in some cases this is not good. Rather than like jumping from there to figuring out that we should have an adopt push all or push from or any other specific solution, I would really want under this quite a work to be done to figure out could we not just optimize the implementations where this is a problem and make dot push dot dot dot array just work? Because that is I think existing syntax that has from a syntax point of view quite nice semantics and ergonomics and we should not need to add a new method call for this or functionality. We should make the thing we already have to just work. Just to clarify again not a SpiderMonkey position here. This is just me. I don’t even know what SpiderMonkey really does with this code.

DRR: Yeah, this is a really good question. Everybody on my team asks me the same thing, and I think the—I’m open to discussing it, right? I think the key thing there is it just more implementation defined behavior and does it only apply to arrays? If it is only applicable to arrays, that’s more of a tax on engines to actually look out for that specific pattern and think about is this really an array and having to worry about if you have a consistent type there that is truly an array. And then also what happens if you add a layer of interaction? I have a function that eventually does the spreading but itself also—sorry. A function that does the pushing but eventually itself takes spreading. And that’s not desirable either, right? That can also be stacked or flowed. That sort of thing. It’s a little bit brittle. It’s a little bit fingerprintable, right? You can use that as a way of knowing what browser I’m in, but arguably you can tell it from the stack size in some cases too. But, yeah, I think that that is something I’m willing to hear about from more implementers.

RPR: Given the time, because we’re already quite over, I’m seeing a reasonable amount of support and also from what we are hearing as well, if folk—if this is not blocking feedback, I’d suggest that we could go to a call for Stage 1.

DRR: Can I have Stage 1? Do we have any objections?

WH: I support Stage 1.

RPR: Thank you WH. We have support on the queue from Mark. Go ahead Kevin.

KG: We try to go with Stage 1 with the problem statement not the shape of the API and I would like to problem statement for this to be extensive enough to include splice and unshift even if we ultimately decide we don’t want to do these things. It’s basically the same problem.

DRR: Okay. The problem statement is JavaScript should have a function to batch append and insert elements from arrays and iterables that is hardened against stack overflows and also optimizable?

JHD: "Should have a function" isn’t a problem. So it’s the problem statement that I’m hearing from you is: appending large arrays on to an existing array will throw at an arbitrary array size, like, I don’t know that’s not the exact phrasing I would use. That’s the problem. The function is one way to solve that. It’s not the only way probably. But like that’s what works and we would be exploring. That’s basically my queue item. I’m totally on board with supporting the actual problem, but I remain very skeptical about the current proposed solution which would block Stage 2 but not Stage 1.

WH: The problem as I see it is that people have to do research to figure out whether they can use the `push(…a)` form. Even if it works on implementations they try, it might not work on some other implementation that their users use. It’s turning something that ought to be simple into a research problem. We should make it simple again.

KG: I support that problem statement.

RPR: So the refinement of the problem statement is that it would not require research.

RPR: All right. So again I think I’m only hearing support. Lots of it. So I think Daniel, I would ask can you write down the problem statement for the notes. But I think that it’s safe to say that we have Stage 1.

JHD: As soon as I have that problem statement, that will be like the name of the proposal that I put in the proposal repo. So just Ping me privately or whatever when you have to

### Speaker's Summary of Key Points

* Issues around stack overflows and iteration protocol speed are motivating enough.
* Specific API may generalize beyond only appending at the end. Problem statement should try to stay general.
* Seeking feedback from implementers on whether current idiomatic patterns can consistently be optimized.

### Conclusion

* Problem statement: It should be straightforward and safe to bulk-add multiple elements to an existing array.
* Achieved Stage 1

## Normative: change PromiseResolve species check

Presenter: Mathieu Hofman (MAH)

* [proposal](https://github.com/tc39/ecma262/pull/3689)
* [slides](https://mhofman.github.io/proposal-native-promise-adoption/slides/2025-09-pr-3689/)

MAH: So the first topic I would like to discuss is a normative PR for changing how promise resolve works when it encounters a native promise. It is a very simple change, it’s a very short change but it has potentially wide consequences. The first thing is what are we trying to solve? The problem is that await relies on the PromiseResolve operation and await does something that even in the face of a `Promise.prototype.then` pollution user code actually isn’t affected by how basically async/await works. So if the case of an async function result being awaited, any `Promise.prototype.then` pollution will not be actually able to interfere with how the internally generated promises work during the awaiting. This was something introduced in a PR a few years ago. This was originally for optimization for how the number of ticks of await took and has the great benefits of making await work more as you expect even in the face of malicious code here. This is all fine and true until you have a second pollution of the constructor property on the Promise prototype, at which point basically the PromiseResolve logic bails out and decides, no, I don’t have promise that I expect, and I will be rewrapping—recreating the promise and then trigger the `then` behavior that is polluted.

MAH: Back to the motivation, it is in fact still possible for user code to muck around with how async/await works even though users actually don’t end up handling any promises. And this actually came up in a real issue that was filed against Node.js a couple weeks ago. What happens is that Node.js implements operations for some web specs as JavaScript. In this case as async code and because of this sensitivity to pollution, it is arguably not following the spec, because if you look at the observable effects of prototype pollution in native implementations, pollution does not affect the internal operations of how these spec algorithms work. In this case, it was the crypto spec.

MAH: So what is happening exactly? Currently the PromiseResolve operation that is used by await and a few other operations in the spec does a brand check for the value, and if it is a promise, it will look up the `constructor` property on the resolution value and compare it with the expected `Constructor` that the caller wants. In the case of await and all the other operations in the spec that are not directly driven by an API call from the user (`Promise.resolve`), the constructor here will be the intrinsic `%Promise%`. `PromiseResolve` actually was extracted originally from the `Promise.resolve` implementation. And that function, that static method is described as a function that either returns a new promise resolved with the argument or the argument itself in case the promise has been produced by the `Constructor`. So it is really meant as an `instanceOf`, if it is a promise that I created and I will use it directly because I know how to do it. But this is a check that ends up using the `.constructor` instead of doing what `instanceOf`is doing. Besides interfering with promise adoption it allows to observe any time that native promises are handled anywhere if you override the promise prototype constructor with a getter.

MAH: What I’m proposing here based on an idea from KG is to replace this check with a prototype check. So really what we’re saying here is we’re changing from trusting the value to tell us about its constructor, to asking the constructor to identify its instances. So because the value is a native promise, asking for its prototype is not observable. In all the spec cases that we care about, the `Constructor` to check against is `%Promise%`. So asking for its `.prototype`, the prototype used by the instances, is also unobservable and the whole check is completely unobservable for native promises, and the await goes back to the case of not being tempered with anymore by prototype pollution of the Promise prototype. This is a check that is actually more similar to instanceof. It’s just a little more strict than the instanceof check because it doesn’t do the prototype walk. We’re asking the constructor for the exact instance that it created.

MAH: So there’s a few questions. What does it mean for web compatibility? Well, first, all the non-native promises or thenables are not affected. Any promises created by another constructor are not affected. It doesn’t change the behavior of PromiseResolve or await in any way that is meaningful. Where it is different, and where I would expect it is observable, is if anyone has added an own `constructor`property to the native promise. Or if someone has modified the `constructor` property on the promise prototype. I cannot imagine a legitimate use case for these things but we should definitely measure them in the wild because this is a pretty overarching change. The other direction is a value that was previously passed through will now get wrapped by a new promise and will not be recognized as a value that was just passed through. The only thing I can think of is a derived promise, native promise with a prototype that is not `Promise.prototype` that is modified such that its prototype has a `.constructor` pointing towards the `Promise` constructor. I believe that’s extremely unlikely to encounter and safe because we will wrap this in the new promise and the resolution behavior will remain correct.

MAH: So, yeah, that is what I’m asking. I can show the actual change. I mean, I showed it earlier in pseudo-code in the slide. But the actual change is pretty simple. It is changing from a `.constructor` look up on the value to do a `[[GetPrototypeOf]]` of the value to be the equivalent check but that check is unobservable in the case of await.

Let me get to the queue.

RPR: The queue is very empty.

MAH: The queue is empty. I’m surprised.

KM: I don’t know if anybody actually does this and maybe there’s some better way to do it, but I could kind of imagine some kind of like weird pre-emptive multi-threading library framework horribleness where someone tries to intercept the constructor to intercept your promise accesses and then suspend you weirdly or something.

MAH: Someone can go in and interfere with the internal promise handling that happens on the async/await. If someone does that, they should be shot because that means you’re basically rewrapping every promise you encounter at every operation.

KM: That’s horrible for performance. I can just imagine, I mean, it’s like your thing runs 5,000 times faster, does it matter if you run it cooperatively or pre-emptively, or making everything so slow, are you saving anything? I can imagine people trying this. I don’t know whether people do it, do you know what I mean? That’s probably the biggest **“use case”**. I’d probably put the quotes there, should be in bold!

MAH: I am not putting it past that someone is doing this. That’s why I’m asking for a big part of this will be instrumenting existing engines to see if this is web compatible. The check to add is pretty straight forward. It’s just like I’m not expecting to have an approval right away without data. I think we really need data on this. What I’m asking really is, are in principle people open to making this change and are engine implementers willing to instrument the engines to see if this would be compatible?

KM: I guess I will say I don’t have a problem with the change. Safari doesn’t have the technology to do that instrumentation, so we can’t probably do that for you unfortunately but…

MAH: I would love to hear from the other browser implementers to know if they are interested in this kind of change.

RPR: At the moment, none of the other browsers are on the queue.

NRO: Do we need to collect data? The presented change… it seems so minimal, it’s likely impossible to affect the website and we should just ship the changes. In the past we shipped things that were similarly small and so we were confident it would work without collecting data.

MAH: I know people do a lot of horrible things with promises. So that’s why I was thinking we should probably collect data. Yeah. I think Daniel is saying the same.

DLM: Yes. So we discussed this a bit internally. And yeah, in general, some people think we should have some data before we move ahead with accepting the normative change. I guess we are—we can definitely do this, but yes, V8 is willing to do the instrumentation, that would be great.

OFR: Yeah. Sorry. Something with my name not be transferred from Github. I don’t know. Anyway, yeah. We are kind of neutral on this one in that sense, but we can, like,—if it moves forward and we want to collect this data, we can help with that.

MAH: Great. At this point, I would like to ask for—how does that work for normative PRs?

RPR: We say, this is approval in principle. Which would then lead to the data collection.

MAH: All right. So I would like to ask for approval in principle for this change.

RPR: Any support? + 1 from KM, JRL, JSL, ZTZ.

MAH: Great. Any objections?

RPR: I will say that you have no objections. So congratulations! You have approval in principle. And, thanks to OFR for—

MAH: Thanks, everyone. And looking forward to checking in with the engine implementers, I will be in touch to figure out how we can get that in, since it’s approved in principle. All right. Well, I guess I am next topic, so I’ll move on to the follow-up topic, which is very, very similar.

### Speaker's Summary of Key Points

A pollution of the `Promise.prototype.constructor` can be used to force the operations like `await` to drop from promise internal state adoption to assimilation through `.then`. Whether a promise is adopted is determined by a check in `PromiseResolve`. The PR changes the check from a `.constructor` lookup to a `[[GetPrototypeOf]]` based one, which is equivalent in its nature, but not observable in common cases. Since there is a small risk of web compatibility, we want to measure how often this change would impact existing deployments.

### Conclusion

Approval in principle, pending measurements by engines that this change is web compatible.

## Native Promise Adoption for stage 1

Presenter: Mathieu Hofman (MAH)

* [proposal](https://github.com/mhofman/proposal-native-promise-adoption)
* [slides](https://mhofman.github.io/proposal-native-promise-adoption/slides/2025-09-stage-1/)

MAH: This is talking about promise adoption for Stage 1. This was actually originally part of the same PR we just discussed. But there were more concerns with this part of the change, and it was suggested to spin it out in a separate change that would actually go through the proposal process. So here it is. Sorry if you didn’t see this on the agenda originally, but all the content was in the original PR. Hopefully nothing is new.

MAH: Motivation. Same thing. We want to prevent promise prototype pollution from having surprising effects on async code. So I already talked about, like, what does a promise prototype pollution looks like.

MAH: We have already seen how a promise prototype pollution can attempt to interfere with or observe the outcome of a promise’s resolution. So let’s imagine some library code. You have some library code written using async await. This is kind of derived again from the use case I mentioned earlier, Node.js writing a Web crypto implementation in userland JavaScript. And what happens is that if you simply await, the operation is unobservable, notwithstanding the constructor discussion we just had, which we can assume the constructor pollution is fixed.

MAH: So when you do a simple await of a promise, like the result of an async function call, promise prototype pollution is not capable of interfering with that.

MAH: However, if you have a little bit more complex code where an async function returns a promise like from another async call, in that case, surprisingly, that promise prototype pollution will be able to interfere and grab the results.

MAH: Even more surprisingly is that if you add an await before the return, instead of directly returning the promise, now you are back on to the original case, where promise prototype pollution will not be able to interfere. You have the surprising case where a return in an async function, the result value ends up being observable through promise prototype pollution if it’s a promise.

MAH: So what is going on? Well, really that code when you translate it to what the equivalent promise code looks like—it roughly translates as this, it’s not exactly this, but for practical purposes it translates as this. So where are the resolve functions coming from? They are coming from the resolving functions that are created in the spec against a promise. They mostly do resolve once checking, and then go through the actual resolve logic. Here `ResolvePromise` is actually part of the resolve functions implementation, there is no operation of that name in the spec, it’s just extracted for readability. At the end of the day, it looks at the type of the resolution value and depending on the type, it rejects, fulfills the promise, or potentially extracts a future settlement of the resolution value if it’s a thenable to become the resolution of the promise. So in the case of our `add` example, it is a simple non-object value resolution. The promise is just fulfilled with that value—great.

MAH: However, in the case of `inc` here, we are resolving with a promise. And because it is thenable, what we are going to do is grab the then from the native promise, and call it later to get the settlement value and to resolve with that settlement value. We are creating new resolvers and recursively using the same resolution logic. This is why promise prototype pollution is able to interfere.

MAH: If you are using the extra await, the promise prototype pollution does not interfere because the async await code translates to an internal then operation that is being used before we actually call the resolve function. So if we look again at our resolve logic here, we end up never going through the `.then` side of the promise resolution because we internally call the then equivalent operation that didn’t trigger any promise prototype pollution.

MAH: What can we do to avoid this pollution from interfering with this very normal async await code? Well, one initial idea is we could maybe automatically await in return of async functions. But we can’t because that changes the semantics of the code: basically, if you had a `try` / `catch` / `finally` around there, now it would trigger where it wouldn’t before. This is the behavior in AsyncGeneratorFunctions and that’s surprising for those. We can’t do that here. Another option, we could do a narrow solution, which is special case when the result value in an async function is a native promise, and internally adopt them without going through a `Promise.prototype.then`. It’s possible, but it’s a weird pin hole through the result value handling that we would have to put.

MAH: What I am hoping we can do is solve this in the resolve functions for all promise resolutions. That actually would bring consistent promise behaviors throughout, either in async function or code using promise constructors and resolvers. And this is actually what the Promises/A+ spec actually intended.

MAH: If we look at the Promises/A+ spec, and we go look at the promise resolution procedure, it actually gives us a step. If X is a promise, adopt its state. So really, that was intended so that an implementation can recognize its own instances and use implementation-specific means to adopt their state without going through the public `.then` mechanism.

MAH: So what would this look like? What is the change here? It’s straightforward. It’s like, when we encounter an object resolution value, we actually check whether that value is a native promise, and whether the prototype matches the promise prototype—based on what we just agreed on in the change of the check to PromiseResolve. And in that case, we would use an internal then, the same internal then logic that is used by await instead of using the `.then` on the value.

MAH: What that means here is that when resolving with a promise, like as the result value in this `inc` case, we would never actually trigger any `.then` of a native promise. And this would become unobservable again by promise prototype pollution. So you can start writing async/await code without having to think, oh, this is a return value, that’s a promise, so I should await it.

MAH: All right. So is this compatible? This is the reason I had to spin this out in a separate proposal. First and foremost, again, it does not affect resolution of non-native promises thenables. It does not change the number of ticks. This is left over to another proposal. But it would make faster promise adoption proposal much easier because then it can just focus on the number of ticks, instead of dealing with whether the change is observable or not.

MAH: It really only affects code that attempts to hijack the native promise behavior. Again, this is only observable if the `.then` of the promise instance is different from the original promise `.then`, which only happens if you have defined an own `.then` or modified the promise prototype.

MAH: So malicious code. But also possibly, async tracking libraries. The thing that, as we have just discussed, this only affects non awaited values. These libraries are already incapable of tracking adoption of promises when the await syntax is used.

MAH: So what really happens in the case of zone.js, it was brought up, zone.js relies on transpiling all async code to promise code in order to one, avoid the await syntax and make it use basically the promise that they want. And because it relies on transpiling, the narrow solution that only changes how we handle the result value of an async function would be safe because that would also be transpiled.

MAH: So zone.js replaces the global Promise with its own ZoneAwarePromise. Transpiled code or any manual promise code ends up using their promise implementation, which is not a derived native promise, but as a thenable. They do, however, also replace the native `Promise.prototype.then`. And the reason they do that is to assimilate native promises into zone aware promises, whenever a native promise might be encountered. Native promises might be encouraged in some other APIs, in the spec that might be returning native promises. But also, host APIs that would be returning native promises.

MAH: Really, it's there to cover whenever you are doing a `.then` on one of these native promises. It is not expecting to be able to track whenever native promise is resolved with another native promise. Because really, you are not really expected to—in almost all cases, you are not expected to be able to encounter the native promises in the first place.

MAH: The 262 spec itself never uses the resolver functions to resolve a promise with another promise. Actually, it internally never uses the chained promise result whenever it uses promise capabilities, except for `%Promise.prototype.then%`, which is user driven and which is the one overridden prototype pollution. My hunch is that zone.js would be compatible with the change, but it’s again a thing to measure. If zone.js is an example, I suspect there might be other libraries or code that attempts to track promises adoption. And because of the limitations in being able to track these, I am hopeful that this would be a compatible change. But we should check.

MAH: Yeah. That is it. I would like to ask delegates to go for Stage 1, exploring making promise adoption more consistent for the return value of async functions, but hopefully throughout how promise resolution works when native promises are used. And really, what I am asking again is, whether web browser implementers are willing to add some instrumentation to verify that this kind of change is web compatible.

RPR: Justin has a comment on zone.js.

JRL: I support this as a necessary proposal in order for us to get faster promise adoption. This is the exact charge that I have to implement in that proposal. Separating this out into your proposal saves me a lot of work. But it makes the proposal scoped. You are working with synchronous changes and faster adoption would be dealing with the asynchronous number of ticks changes.

JRL: So that greatly simplifies everything, I think. The main point of my topic, I tried to break zone.JS with this implementation, by monkey patching things. After several hours, I wasn’t able to break zone.JS. The initial problem that we had identified was that we thought that if one promise adopts another promise, we would escape the the currently wrapped zone. The thing that is good about this, zone.JS has the expectation that you have to use `promise.then`. Or if you are using await, that will use `promise.then` because they are using the transpilation. Because `promise.prototype.then` is monkey patched, and that is zone aware, even if you escape zone JS for a promise, it'll eventually call the monkey patched `promise.then`, and then you'll recapture the correct zone. Even if you could get access to the primordial promise constructor and then method, which is impossible in zone.JS without hacking the library, you will eventually call `promise.prototype.then` which is the monkey-patch Zone.JS aware. And that will return you to the current active zone. It’s impossible to escape. I'm personally convinced there is no web breakage, when it comes to zone.JS. There may be another library that does monkey-patching, but they will be okay for the same reason zone.JS is okay. I am ecstatic that it works as well. And I fully support going forward with this proposal.

MAH: Thank you. Yeah. I spent a lot of time looking at the zone JS code too and looking at the spec and understanding why this was fine.

RPR: JSL has a big + 1. Stage 1.

SHS: I was just saying that AsyncContext, `promise.then`, we are fine for the same reason Justin was saying.

RPR: Thank you. And then we have got + 1 from JHD, DM.

MAH: Fantastic. Any objections to this going to Stage 1? Does anybody want to spend time on this?

RPR: I think there are no objections. Did you say the next step is you are looking for browser interest in collecting data?

MAH: Yeah. I think similarly to the previous topic, we need to have instrumentation. There is—it’s fairly straightforward to add instrumentation again on this because effectively we are going through the same resolution motions and we are already getting the `.then`, we just need to check if it is the same as the intrinsic `Promise.prototype.then`. If that’s the case, adopting a promise would not change anything. But if it’s not the same, this change would no longer trigger that `.then`. It’s possible to count this.

MAH: I would expect that it would be great to measure this at the same time as the PromiseResolve change.They’re related changes and they wouldn’t be the same counters, but I would expect to add instrumentation to browsers at the same time.

RPR: Which is what MM was going to say. And we have got a message back from Olivier.

MM: I’m sorry, yes. MAH, covered everything I was going to say, so I am done.

RPR: Apparently, Mozilla might have counters already.

MAH: This is an excellent response from browsers here.

MAH: Awesome. Well, thank you very much, then. I am happy to have Stage 1.

RPR Stage advancement, we have a round of applause. Yeah.

### Speaker's Summary of Key Points

`Promise.prototype.then` pollution can interfere with native promise adoption when the resolution value is another native promise. One common example is in an async function returning the result of the call to another async function. We’d like to internally adopt the state of native promises to remove this interference point. This is a pre-requisite for follow-up proposals related to promise adoption. There are potential concerns this change might not be web compatible, and MAH will work with browser implementers to add instrumentation.

### Conclusion

Native Promise Adoption advances to Stage 1

## Native Promise Predicate for stage 1 or 2

Presenter: Mathieu Hofman (MAH)

* [proposal](https://github.com/mhofman/proposal-native-promise-predicate)
* [slides](https://mhofman.github.io/proposal-native-promise-predicate/slides/2025-09-stage-1/)

MAH: I will move on to my last topic, which is also in the same theme. Very much related to the other two topics we just saw. As we have seen, the spec is able to recognize some of its own promise instances. And go into an effectively a fast path, not using the `.then` of these promises when doing an `await`, but instead doing an internal adoption. For `Promise.resolve` it also passes through the value in those cases.

MAH: What you have with the thenable is the opposite. If thenable, the `.then` of the thenable is always called because it is not a native promise. And that also means if you try to call `Promise.resolve` on that, you get a new promise instance. And that will be different than the thenable. It also internally calls `thenable.then`.

MAH: So the problem here is that while `Promise.resolve` looks like something that would be able to help us detect whether a certain value is a native promise or not, it has side effects. Effectively, it is impossible to build a side effect free predicate that would be able to tell us if a value is a native promise.

MAH: What I am looking for here is a predicate that would be doing the brand checking that `PromiseResolve` does internally. We have precedent for that in `Error.isError`, a pure brand check, I suppose for error instances that have some stack information associated. `Array.isArray` is a brand check that pierces proxies. I am not suggesting to pierce proxies for promises. It’s there to detect values that have different behavior when it’s used with some other API, such as `JSON.serialize`.

MAH: So what I am looking for is really a predicate that allows me to detect whether a value will be specially handled through `await`. The main question is, what does the brand check look like? Is it a new static method on the Promise constructor, what is its name? Maybe some less ergonomic brand check, as long as it doesn’t have side effects and is a clean brand check, I don’t care. I want a brand check.

MAH: Whenever we talk about brand checks there’s a question about membrane transparency. This case is like `Error.isError`. It’s also fine because we already have a brand check but with a side effects: it’s already possible to detect whether a value is a native promise or not. It doesn’t change anything for membrane transparency for those. And in reality, membranes really want to actually pass promises by copy, like for errors. Create a new promise on the yellow side, resolved with the promise on the blue side. And to effectively do that, themselves, they need a predicate to know whether a value should be recreated like that, as a new promise without having side effects.

MAH: Yeah. So that’s it. Can I have Stage 1? Can I have Stage 1 for basically bringing a brand checking predicate for native promises.

KG: I support, despite generally disliking predicates. I think the motivation for this specific predicate is strong.

MAH: Thank you.

JHD: I mean, to no one’s surprise, I am on board. The name should be `isPromise`. I think perhaps ten years ago, the term promise was generic. But at this point, most of a decade of await and AsyncFunctions, like forcing—killing promise subclasses and forcing every promise libraries promises to become native ones, I don’t think the qualifier is helpful.

MAH: I agree. Technically, the naming is a Stage 2 concern, I believe.

MAH: Yeah. So I see a few more voices of support. Justin. DM. Dmitri. And REK. I see a concern from CZW

CZW Yeah. I am just concerned about that—the name `Promise.isPromise` would encourage people to check a value against if it’s a promise, rather than checking if it’s really a thenable because in most cases, in userland, you only need to check if the value is thenable from `.then`, rather than `Promise.isPromise`. I am just concerned the name would encourage people to abuse it.

MAH: Yeah. Well, I would argue that userland should not check—most user-land, except for libraries implementing a promise, should not check whether a value is thenable or not. That is my opinion. I am sure that people are tempted to figure out whether to do something asynchronously or not asynchronously. But, yes. Some code will see this and might be tempted to use these predicates to decide that they want to do some operations synchronously instead of asynchronously. In that case, using this predicate is a mistake for when then encounter a thenable that is not a native promise. That is probably the main reason to make this check non-ergonomic, or use a name other than `Promise.isPromise`. But I have honestly zero idea on what that would look like in that case.

MAH: I am hopeful that this is something documentation, like MDN would helpfully steer users away from using this predicate for that purpose. I don’t know. I am open to suggestions on that one.

KG: Yeah. I mean, regardless of whether they should be checking is-thenable, they will use this to check. That’s what they will do and we cannot stop them from doing that. Which inclines me to name it isNativePromise to discourage this.

PFC: Yeah. I want to + 1 that. I actually think the longer name, it makes it less likely to be used improperly when it pops up in somebody’s IDE.

MAH: CM + 1.

RPR: And then ZTZ says give them `isThenable`

MAH: I would like to answer that. `isThenable` is actually a wrong thing to do, even more. Because if you look at the promises spec, you start having a TOCTOU problem with thenable. Technically, you can have then as a getter that will return you two different values, if you basically hit then twice. This is the reason why implementations following the Promises/A+ spec, you have to get the `.then` property once, and never touch it a second time. Once you get it and you verify it’s a function, then you call it with the thenable as receiver.

MAH: So `isThenable` people actually shouldn’t be doing that. That’s what I am against it

RPR: The queue is empty. We have heard a lot of support.

MAH: Great. So I believe I have Stage 1?

RPR: Let’s do a last check. Any objections to Stage 1? Okay. No objections. So congratulations. You have Stage 1

MAH: Yeah. I was wondering if I could ask for Stage 2 because I believe the problem space here is pretty narrow. Really, what we want is a predicate. How its name is really the main question. The spec text is pretty straightforward. So is there any objection to—any support for Stage 2, given that this is a pretty straightforward proposal? I can show what the spec text looks like.

RPR: So just to be clear here, we are going to Stage 2, but we are not pinning down the API name at this point?

MAH: Correct. And I believe it is in scope of Stage 2 to tweak API names as well. It is really the shape that I am proposing, some predicate on the promise constructor with a name TBD. The only step of the predicate is to perform the internal `IsPromise` operation.

JHD: When a name is not a global or a prototype method and thus the web compatibility risk is smaller, we have a precedent to consider the name within Stage 2.

JHD: And like, not changing it afterwards.

RPR: And so, yeah, + 1. 1 for Stage 2 and happy to be a reviewer Dmitri + 1 Do we have objections for Stage 2? JSL has support. Also happy to be a reviewer.

MAH: Awesome. Perfect. Thank you very much. So for reviewers, I heard Jordan, and James. Perfect. How many reviewers do I need? Sorry. I don’t remember

RPR: I think the minimum is two. But we could always benefit from three.

RPR: Thank you, JRL as reviewer. Congrats. You have Stage 2.

RPR: We went through quite a lot of slots.

MAH: Yeah. I am glad this went through like that. Thank you so much for everybody and happy to yield back some time

### Speaker's Summary of Key Points

Native promises are recognized by some operations like `await` and their state adopted internally. It is not currently possible to detect in user code whether a value is a native promise without side effects. This proposal brings a clean predicate to brand check native promises. There are some concerns of misusage for such a predicate, which may be mitigated by choosing another name than `isPromise` for it.

### Conclusion

Stage 2, name bikeshed before next stage. JHD, JSL, JRL as reviewers.

## Non-extensible Applies to Private for stage 3

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-nonextensible-applies-to-private)
* [slides](https://github.com/tc39/proposal-nonextensible-applies-to-private/blob/main/no-stamping-talks/non-extensible-applies-to-private-for-s3.pdf)

MM: So this is non-extensible applies to private. I would like to ask for advancement to Stage 3. We were currently at 2.7. And last meeting, during the Stage 2.7 update, we established a general sense in the room, not a commitment, that the only thing that remains to go to Stage 3 was Test262 tests.

MM: Okay. Recap: this is the entirety of the proposal that—these two operations in the spec are the only means by which private fields are added to objects. And the idea here is that in both of these cases, if the object that the private field would be added to is not extensible, then we instead throw a TypeError exception. That’s the entirety of the proposal. Okay. This is a recap of what the stats looked like last time.

MM: This is what the stats look like now. We—everybody who expressed—whose looked into this and expressed an opinion, in particular OFR from Google, says the numbers are insignificantly smaller, not a concern. And OFR, please correct me if I am misquoting or or getting the sense wrong.

MM: Okay. So this is a recap of frankly—I am not exactly sure—what this is illustrating. But higher is worse and the numbers here, again, not shown, sorry, are considered by OFR at Google, to be acceptably small enough. And what is happening in the meantime, basically within the same range.

MM: Okay. There was a long conversation mostly on—in the issue about babel downlevelling, and finally, the proposal from NRO—not proposal, because it’s not a stack issue, but NRO actually implemented this downlevelling in babel. Is that correct, NRO?

RPR: I believe he may have had to step out. He stopped note-taking and not on the call speak

MM: in any case, whether he’s implemented this or not, his plan is to implement this in babel. I will let the issue so speak for what the algorithm is that turns this into that. But this completely sidesteps the problem.

MM: So as I said, the sense, not a commitment, is that only Test262 approvals were needed for Stage 3. So this is what is happened just recently, which is—I want to thank, in particular, RGN and OFR, for help getting this to this state. And PFC, for giving the spec feedback, and the spec feedback was substantial, it had some real points to it, and this is my explanation of what I did in response. And in response to that, Philip took a look and said, approve these changes.

MM: So any questions, and at this point, I will stop recording. And shut down the slide show. And then let’s do the questions. And then I will be able to also see the queue.

OFR: Yeah. Just for the graph that you showed, that was correctly quoted. The numbers are super small. It’s relative, and the numbers are so small that it doesn’t show the number on the—on the axis.

MM: That’s why there is no numbering on the axis. That’s great.

MM: So do I have any support for Stage 3?

RPR: + 1 from OFR and DLM.

WH: I support Stage 3.

RPR Thank you, Waldemar.

MM: Great. Any objections? There are no objections.

RPR: So congratulations, you have Stage 3.

MM: Thank you.

RPR: All right. Great. Would you like to either write or dictate a summary and conclusion?

MM Okay. I will dictate.

### Speaker's Summary of Key Points

MM: The remaining questions is, first of all, since time has passed is do the stats look any worse and are the stats still acceptable? And the stats are collected by Google and OFR from Google agreed that the stats are still well within the acceptable range, no negative consequences of what we have seen as time has progressed. The other issue was, the few problems that we did see, most of them seemed to be caused by the existing babel downlevelling. We had a long discussion issue thread, NRO proposed an algorithm of which I showed an example output that we all seemed happy with and NRO either has or is planning to implement in babel. And then the final issue was adequate 262 tests. I want to thank OFR getting started on those, I want to thank PFC, giving us good feedback of what needed to be tested and thanks to RGN, for helping me write the tests in response to PFC’s feedback. And those tests were proved for Test262.

### Conclusion

And with support and no objections, we are now at Stage 3.
