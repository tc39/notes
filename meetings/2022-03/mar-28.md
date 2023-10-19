# 28 March, 2022 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Luca Casonato        | LCA            | Deno Land Inc      |
| Josh Blaney          | JPB            | Apple              |
| Ashley Claymore      | ACE            | Bloomberg          |
| Rob Palmer           | RPR            | Bloomberg          |
| Robin Ricard         | RRD            | Bloomberg          |
| Michael Saboff       | MLS            | Apple              |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Ujjwal Sharma        | USA            | Igalia S.L.        |
| Romulo Cintra        | RCA            | Igalia S.L.        |
| Leo Balter           | LEO            | Salesforce         |
| Jordan Harband       | JHD            | Coinbase           |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Brian Kim            | BRK            | ApolloGraphQL      |
| Eemeli Aro           | EAO            | Mozilla            |
| Istvan Sebestyen     | IS             | Ecma International |
| Rick Waldron         | RW             | Salesforce         |
| Jack Works           | JWK            | Sujitech           |

## TC39 And Copyright Update from Special GA

Presenter: Yulia Startsev (YSV)

- [slides](https://docs.google.com/presentation/d/1UB2ZY30zGoHrjGC9RQZttcP_7oOnepUps8lBGn3AKpw)

YSV: Hi everybody. If you don't know me already. My name is Yulia Startsev from Mozilla and I'm going to update you on the copyright discussion that we've been having with ECMA. So, last week we had a special GA (General Assembly), to discuss the potential adoption of an alternative license for ECMA. Specs in particular, the difference that the alternative license brings is it is permissive license which allows derivative works. Its the main difference. What we covered in this meeting was we looked at text concerns that went through legal. We went through a review of the copyright license from legal counsel. The FAQ was updated and passed through our IP our committee to make sure that we had the right wording there and we reviewed a letter from ISO regarding the permissive license and how it will impact JTC1 approval process.

YSV: So that's what we discussed and at the end of this meeting, we voted on allowing the alternative license, and this alternative license because it is coming from TC39 and it was proposed by Mozilla specifically for TC39, we were explicitly talking about ECMA262 as a potential adopter of this license.

YSV: So what is this license? This document is available as an Ecma document. So, if you haven't had access to the ECMA documents, please get in touch with Isabel or talk to me, and I'll send you the updated license document. Here it is. What is the license? It's called the alternative copyright notice and copyright license. I'll just read it very quickly: [reads license] That is full license.

YSV: All right, in addition we made some changes to the FAQ, the one that I considered to be more most significant to was regarding the main objectives of the ECMA copyright policy. Here's how it changed. [Showing Slide # ] So the original modifications that Mozilla proposed are in blue and they have been updated with the red text after a review by the IPR policy committee. In particular the last sentence is important, ergonomic a also choose to publish standards under alternative copyright license and copyright notice and license, which is what we're discussing here. Where for example, Example, doing so would facilitate alignment with the policies, governing a related third-party standards.

YSV: Okay, so the last thing discussed were the ISO comments. So there is a project at ISO called ISO smart. It's under development which will test different ways of making their standards available. So this will allow for different ways for them to be used, including derivative works. This currently doesn't exist. It's an upcoming project. For now ISO cannot make use of the alternative ergonomic copyright notice, instead what will happen is ECMA may publish its documents with its copyright license, which may be the alternative license and I so will you continue to use their current copyright notice. But this is of course may change in future when ISO smart is finished and becomes available. There's a precedent for this kind of setup which we've seen with W3C submissions. So this shouldn't be an issue having two different documents.

YSV: Finally, the process for adopting the alternative license. Let's say that we as a committee decide that, yes, we are going ahead with ECMA262 becoming available under the alternative license. The process looks like this: for alternative policy. The TC asks for permission just before the GA final vote on the standard. And I understood from the EcmaSecGen - Now. I was also sick at the time when we had this meeting, so other people who are in the room right now may be able to correct me if I'm wrong - I understand that this is done by adding an extra line, when submitting the standard saying that we intend to use the alternative license and updating the spec in kind. For any other standards that we may produce or may be produced by other standards bodies. Such as ones that may be produced in the future or that are currently ongoing. The IPR committee must meet and discuss whether or not it is safe to move to the alternative license for that specific standard, so there is more of a process than what will happen for ECMA262.

YSV: The outcome of the vote is that this alternative license has been adopted by ECMA. We may choose to use this license for the next version of the ECMA 262 specs and may we also may, in the future, request additional specs to use this license?

YSV: That is all I have and I want to open this up for discussion and any corrections in case I got any of that information. Well.

BT: All right. We got five minutes for discussion, please use the queue.

IS: All right. I have a very quick one. So I have also talked to EcmaSecGen and he told me basically the same thing with the exception that he has asked that from the TC39 management in the half yearly report, which goes to the to the, to the Execom meeting, which is going to meet, I think next week on the 5th of April and so on. And we have submitted the half yearly report to that. But in this half yearly report it was not yet included that we would like to apply this new policy for ECMA 262. So I have asked him. Okay, so how to do it? And then we said we should make an update of that submission to the Execom. So the update of the TC39 management report, which takes us. I don't know, five minutes or so. And then we are basically set. So this is what EcmaSecGen told me.

BT: Thank you IS. The queue is empty. typing gets a chance to get it in.

IS: So I have one last comment if nobody has anything else.

IS: Okay. so, regarding the, ISO. So what I also understood from the GA document that I saw has sent to the ECMA general assembly and and Yulia said it correctly. That was also my understanding that for the time being they cannot use the alternative copyright licenses, but - and this is an important point from the practical point of view in tc39. We have only one standard from TC39 which is fast tracked to ISO. And that's the ECMA 414, if I remember correctly. Basically the framework standard and this framework standard is not changing. It is stable like a stone and all the rest, you know, where we are interested in applying this new alternative copyright policy. So this is the ECMA262 it is not fast-tracked to ISO it is just we are having it via normative referencing and I have not looked at the possibility of the normative referencing. So I think that for the time being we are definitely fine even if they don't if they don't do anything. So we are fine I think. So we don't have any fast track which goes into ISO – which they would not accept or whatever because of the copyright license reasons. So this is my second comment to this.

BT: Thank you IS. Michael has a queue item, but it doesn't seem like discussion I think we'll end this agenda item by asking for any objections to adopting this. Michael, you have anything additional to add there?

MLS: I just want to make sure that we from the committee's on record changing to the alternative copyright notice.

BT: Will get through that. We'll get to that after discussion.

WH: Do we want to adopt the alternative copyright policy for anything besides ECMA262?

MM: I certainly do, but I figured we can just do it for 262 first and then we have a precedent.

YSV: It makes sense since we've only got a week to do as MM suggested but SYG has a response.

SYG: No need to speak. [on tcq: At least 402 as well?]

BT: Yulia or someone why why we wouldn't do 402 at this time as well. At least get consensus for at whether it's practical or not.

YSV: So the reason why is that any I believe any spec aside from Ecma 262 will need to go through the IPR committee because that's - like we were very explicit about saying like we intend to use this for the ecmascript specification, but we didn't mention other specs. So the IPR Committee has not reviewed other specs for adopting it. So this would kick off like an entire process with that. That's not a problem. It will just take more time and may complicate the process.

BT: Okay, so we'll discuss 402 at a later meeting, you're saying.

YSV: Maybe I'm being overly cautious, but that's my feeling. I would suggest that we pen it in for next meeting and discuss if we wanted. Well, I actually honestly sounds like 402 everyone's pretty much on board with doing 402 as well.

MM: And 404.

BT: Yeah, so are there objections if we consensus today on the entire Suite? 262, 402 and 404.

WH: What about test262?

YSV: I believe test 262 is software and therefore it's covered by the BSD license.

IS:. Test262, it is not an official ECMA product. It only links to the Ecma product TR-104 (a technical report) but not even a Normative Reference is there. It is just a link. So it is a TC39 product, but it is not really an official ECMA “deliverable”. So, I don't think that we need it in our list. It has a very strange status.

BT: We're already over time box here. So let's get to the meat here, which is, are there any objections to adopting this alternative copyright policy for ECMA 262, 402, or 404? With the latter possibly transitioning to this new copyright policy later depending on practicalities. Feel free to enter the queue, if you have blocking concerns? [silence]

BT: All right, I hear no objections. I think we can say TC39 would like to adopt this alternative copyright across our suite of specifications. And with that, I'll suggest that SYG and WH followup in the TC39 delegates channel, those questions.

WH: The IPR committee comment is kind of important. I don't recall any mention at the General Assembly last week of these things having to be approved by the IPR committee.

YSV: So I was sick at the time. So maybe I'm misremembering but that was in the response from the IPR committee. I think IS has a comment.

IS: Yes, you know, so I also didn't find it - as WH has pointed out. I have not found in the documentation. Any hint to that link, and by the way, I was also not present at the general assembly meeting.

WH: I specifically asked this question at last week’s General Assembly, and the answer I got was that when an ECMA TC wants to publish a standard with the alternative copyright policy, the procedure shall be that it will request the alternative copyright policy along with the text of the standard when it submits the standard to the General Assembly for a vote.

MLS: Yeah, that's my recollection as well. Same as Waldemar. Only the GA needs to approve it.

YSV: I think I recall that it was in the lawyer's letter to ECMA where they also said that (correction, it was in the IPR committee’s recommendation -- but this recollection is correct), because this was such a maybe I'll take a look at the documents and I'll send it around to get a sanity check on that. But I don't think this is a major blocking - if it's easier, great, but even this requirement isn’t so high.

BT: Yes, I'm interpreting this as a non-blocking issue here. So I think we just need to clarify the, the actual requirements here we can we can work with them whenever they are. And by the way, I think Yulia is available for questions here if you have additional concerns. The TC39 delegates channel would be a great place to bring those up.

### Conclusion/Resolution

- TC39 votes by unanimous consent to adopt the alternative copyright license for 262, 402, and 404.

## Secretary’s report

Presenter: Istvan Sebestyen (IS)

- [slides](https://github.com/tc39/agendas/blob/main/2022/tc39-2022-12.pdf)

IS: I think some of the points we have already discussed in this meeting i.e. the copyright parts, so I will be jumping over those slides. So again, I just show you the list of the relevant TC39 and ECMA GA documents that you normally do not see over the GitHub, so that will be a very quick one. And then there are two issues, one of them we have already dealt with the alternative copyright license. And the other one is just a recap for ES2022 approval related items. I will be very, very quick on that because that will be also part of this meeting anyway, so it is just to make it complete and then status of TC39 meeting participation that just one slide, and the TC39 standards download statistics. There is also not really anything new. I just point to those slides and that's it. So, actually, I hope - you know - that I can be very, very quick on the whole presentation.

So this slide is the list of the new formal Ecma TC39 documentation. Some of them, of course, you already know. One document, which we already discussed five minutes ago is also listed there.

IS: So this slides here document is ES2022 approval process. So, this document is the report of the chair group to the Ecma Execome Committee next week. By the way, my understanding is that with this new decision of approving the alternative copyright policy and license that TC39 would also like to apply the procedure with this alternative copyright. Therefore - I was told by the Ecma SG - we have to update that chair group document. This is what we have to do.

The next 2 slides contain the list of to TC39 relevant GA documents - I have again taken out from all GA documents. If people are interested in some of those documents, then please go to your GA representatives, as only he has access to those.

So, for instance, here, this contains the alternative copyright policy document. So this is what also came from, Mozilla, as a proposal, etc. And this document is the so called “voting intention” to the GA meeting which he had last week, etc.

Next slide: Just a repetition from the last meeting. Why are the lists interesting for TC39 members. Because many technical members in TC39 just see the TC39 GitHub documents, but not these additional documents.

Next slide: The alternative copyright policy is coming. The interesting thing is this was not mentioned by YSV that is that you can already find it on the Ecma website. So the link is here you see written with red letter.

IS: Okay, the next slide is the meeting participation. So this is just a continuation of the slide I always present. As you can see, we have a very steady meeting participation. In the January 2022 remote meeting we had 66 participants and 29 companies, so this is quite good number. I guess at this meeting it will be good too. Well done.

IS: Regarding the download of TC39 standards this is the summary for all TC39 standards covering the first three months of this year. So as you can see, from the download point of view that which ECMA TC39 standards have been downloaded, and how many times. It is the typical figure that we always see so practically I do not have to go into that. There is nothing special. The next is here. The more details regarding access and download of the different ECMA-262 versions for the first three months in the behavior. There is no change in the pattern from the last presentations. So I am not going into the details. The next slide is the same thing for the ECMA-402. And this is also for the different editions. It is also not interesting that it has changed or something like that. So it is basically just for the statistics.

IS: Next, the TC39 plenary schedule, this is a repetition that you see many times. So here we have just at the beginning of this meeting postponed the first face-to-face meeting. So here, you can still see that we have planned it for the year..

IS: Next, the GA venues. So the next one GA is the June 22nd meeting. So this is important because that's the date when the Ecma ES 2022 will be approved. And then next meeting after that, will be the December meeting.

IS: Here, next special GA it was done on 23rd of March. We have spoken about it. I.e. when the alternative text copyright policy was added to the copyright policy.

IS: Next. Now this is just a repetition just to remember what steps we have to take, basically at this meeting and also up to the approval at the GA of the ES2022. So basically the approval as I said, it would be on the 22nd of June. Before that we need also publish internally, the specifications itself, at least two months before approval, as usual. Therefore the last deadline for that, would be the 22nd of April, 2022, but I hope - you know - that we will be doing this much earlier. What I saw with pleasure over the weekend that we have already the draft specification uploaded to the GitHub. So both for the ECMA-262 and the ECMA-402 editors have uploaded their versions over the weekend, which will probably be the final drafts of the ES2022 suite. So thanks very much to the editors. It is always a great stuff and the editors are great too. And so so we have that and I'm rather positive, you know that we're gonna be able to keep these deadlines.

IS: There is another deadline that we need for this exercise in harmony with the royalty free patent policy - that we are exercising here in TC39. The so called “opt-out” period has to start also at least 2 months before the final approval. So again, this would be the latest for the starting the opt-out. It would be the 22nd of April. I hope we can start this earlier, actually, an email by Ecma was sent out maybe one or two weeks ago already, reminding TC39 people that we should not forget about starting this opt-out period for the royalty free patent policy to be in line with the with the procedures of the royalty free patent policy. The reason for that is if somebody finds a technical item in the new specification (that we are including into the new parts), and if somebody finds an own patent in it, they don't want to give away royalty-free, you know, then you have to speak up up as part of the “opt-out” to find an alternate RF solution. This was so-far never the case. Fortunately, so for I don't know, 15 years or so, so I hope that this practice remains as it is now.

IS: and last but not least, just would like to remind everybody that once when we have approved, the TC39 ES2022, specification here, in TC39. And as I understood it, it would be done basically during this meeting if my understanding is correct. Then, after this point, when we have decided, ok, now, this is the final ES2022 version, then from the substance point of view no substantive changes to the specification are possible up until approval. But obviously there are still several editorial changes, mistakes, misspelling, better formulations, etc that we are including this both until they get approved and even published shortly after approval. So I think these are the points, you know that we have to take it into account. There is nothing new in that. Fortunately the Ecma approval policy is still as it was last year. So this is just a repetition of what we have been doing over the years.

IS: And I think this was the end.

BT: Maybe SFC has a question.

SFC: Hello IS. I know the last several times you presented the download data for ECMA-402, I noticed that downloads for the first version were much much higher than for any other version, and it looks like that's still the case. And I asked at that time whether you had any more information about referrers or any other way to sort of profile where those links are coming from, so that we could maybe figure out how to update them. Do you have any update possibly gathering more information on that?

IS: I have immediately asked out IT people but I have not received any reply unfortunately. So it is a little bit embarrassing. But what shall I say, tell you, you know, we are trying to solve this for, I don't know for five years and we are in the same situation, but I did my best. No answer .I asked the IT people etc, but no answer. I can try it again, I don't mind. All right.

(IS note: The next day after the presentation Isabelle Walch from the Ecma Secretariat and myself “dived” into the Google Analytics data of the Ecma Standards Download. What we were able to see, that the standards download figures for all ECMA-262 and ECMA-402 (the PDF versions) Editions seems to be ok. However, on the older 2015 and soon after Versions on the ECMA-262 and ECMA-402 access figures (basically the html format of the standard) we have very significant access numbers from undefined sources from various different countries (we have the list of those countries), that seem not to be “ES folks”. Unfortunately, in Google Analytics we can see the counties, even the towns were it was accessed, but that is all. Therefore starting from next meeting we will leave out the figures for those early ES Editions.)

BT: Thank you.

IS: There is one more slide, You know, when you do we have these two Execom meetings. Yeah, and the next one is where we have to submit the update of the chairs report. This would be next week, 5/6 of April. And then we have the 5th and 6th of October, the Execom meeting after, and oh, yeah ….

….there is one last point, you know, which we have to think about it very, very quickly. We have now, again, a possibility of asking for an Ecma recognition award, if we submit, I don't know, in my opinion, two candidates, I think maybe, you know, we have a quite good chance to get something for the, for the, for the ECMA recognition award to be approved at the June meeting. So e.g. we have a good candidate for an TC39 expert, who has done an outstanding job in the last half a year or is phasing out of from ECMA TC39 and done an excellent job in the in the new version the ES2022.etc… I mean, we have in my opinion, a good chance, if we submit two candidates that one or two of them may come through…..

### Conclusion/Resolution

- List

- of
- things

## ECMA262 Status Updates

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/1h3SiBX5fGeu9RDKo88j8MSEsTe4DHtbgybhW02n5mGk/)

SYG: Okay, so, big thing up first for the 262 editors is that we have cut ES2022. The candidate up on that issue in the reflector. I believe for 262 and 402. So please take a look and approve so we can start the opt-out period.

SYG: To give a quick overview. We landed a lot of big features in ES2022 this year. Top level await, all the new class elements stuff, public & private Fields, the private field in object syntax, regular expression match indices, error cause, the at method for relative indexing and object dot hasOwn. So, great job everybody.

SYG: All right, since January, we also made a very big editorial change, which Michael will talk about soon. That is the completion value reform and that does affect proposal authors as well as other occasional writers of 262 style specs on how to deal with completion values. Otherwise, we have some small editorial changes such as making consistent the language around checking for absence or presence of fields in records, we have opted to use a simple “has” instead of the longer phrase “absent” or “is present”. and we introduced an iterator record type instead of just using ad, hoc records for the iterator records. So if you are dealing with iterator records, that use the the new we introduced and with that.

SYG: So take it over. Sorry. I'll give it over to MF to talk about the return value conventions for the completion value reform that we did.

MF: Yeah, so this was a really big feature for us. I think our first commit was in September, so I think we worked on this for a while, but for you as readers or as proposal authors, it shouldn't be too much for you to have to worry about. I think everything you need to know is on this slide. So I'll go through it. So you might be familiar with a convention in the past, where it was implicit that all AOs return completion records, even if they could not return abruptly. So infallible calls of AOs used exclamation point, even if every invocation was infallible. So that is no longer the case. Now, AOs will only return completion records when they can possibly complete abruptly.

MM: What is an AO?

MF: An abstract operation, these are like spec functions. Like `ToBoolean` is an AO. So AOs that cannot return abruptly no longer return completion records. They actually return the value that they return. There's no implicitness there. That means that you shouldn't use an exclamation point when calling those AOs and they shouldn't have ReturnIfAbrupt or question mark or throw in any of their steps. Next thing is for AOs that don't really produce anything, they’re just used for their effects. These are procedure like AOs. They should note that by using this spec enum `~unused~` as the return type or if they can return abruptly, but otherwise have no meaningful return value, you use completion records containing `~unused~`. And at every call site to these procedure-like AOs you should use “perform” to invoke these.

MF: One thing to note about our design philosophy here is that whenever a completion record as a value is held, it should be obvious from within that algorithm that you are holding a completion record, so there should be no way for a completion record to enter an algorithm from some opaque source, like a call to another AO where you have to look at its return type to understand whether you're holding a completion record or not, or a field access. There should be no way to enter that algorithm without it being obvious from the algorithm that you're looking at. So when it's the case that you are trying to create an alias to a completion record, we annotate that with this `Completion` AO, which asserts that its argument is a Completion Record but is otherwise just the identity function and returns what it's given. So this is used as this annotation.

MF: And we do have a one minor convenience that we've added, because we noticed some repetitiveness to the guidelines we had and that is that when an AO is declared to return a completion record we don't need to wrap every return site with `NormalCompletion`. We have this concept that is outlined more in the notational conventions called, “clearly marked”. And in those cases, if the value is not clearly marked as a completion record, it is implicitly wrapped in a normal completion. So a function that has like 15 exits with like true or false doesn't need to say NormalCompletion(true); the idea is that each of these return sites can just return true or false. So, make sure you annotate all of the return types, using the new structured headers we've added in the last year or so, which all AOs should have in 262. And ecmarkup, which builds ECMA 262 should have a tons of lint rules now, that should catch basically any of these kinds of errors.

SYG: All right. Thank you, MF. Again, ecmarkup should help you with most of these, hopefully as an author.

SYG: All right. That's it for the editorial stuff. The normal changes that got in since January is, a bug fix for out of range NaNs in the Date set methods and we merge the match indices proposal, which has stage 4.

SYG: Some meta changes to the artifact of 262, there is a biblio file that ecmarkup generates that basically lets other people, other specs and notably proposal draft specs to link to the abstract operations and other stuff that's defined in 262. And this biblio file is published on npm at every push. So an up to date biblio file is now published to npm.. Which means that proposal authors can depend on And when you generate your proposal spec drafts, you can load the biblio file with the --load-biblio flag, which takes either in npm package or a local a path to to the to a local biblio.

SYG: and per usual, here are the other stuff that we plan to work on upcoming, but I think the good news is that with completion reform done. These are smaller bites. And that's it for the 262 editors. Thank you very much, any questions or discussion on the queue?

BT: The queue is empty.

SYG: All right. Thanks.

## ECMA402 Updates

Presenter: Ujjwal Sharma (USA)

USA: Let's get started with the really quick version of the Ecma 402 status update. Hello. Welcome. And, as always. We have a bunch of important, editorial stuff, that happened, not something that you should get too deep into, but we have the most important change here, which is that we have linearized reading, essentially making 402 optimized for reading and implementing. So I know this looks really tiny, but the idea is that while in all editions until now we had the abstract operations of for each constructor at the beginning grouped together. Then the rest of the text down below. Now, we have spread out. So to say, the abstract operations can be interleaved so that you could read those in order of and see where they're called and stuff.

USA: Apart from that, also pushed a lot of new features within this year. So you might remember INTL segmenter, or time name option in My name's we do with all of these new features and editorial goodies in the 2022 cut is out. You can follow these links to the GitHub release which would give you all the changes and all of the authors who put in effort into this edition. Thank you.

USA: Are we asking for explicit approval?

BT: We made do so in a bit.

USA: I think there's no objections.

USA: Okay, then then that's all from me. Thank you.

## ECMA404 Update

Presenter: Chip Morningstar (CM)

CM: Same as it ever was.

BT: All right. Thank you. Chip. Thank you for respecting our one minute time box for this item.

## Test262 Status Update

Presenter: Sarah Groff Hennigh-Palermo (SHO)

SHO: It's Sarah. It's actually just a very short update for everybody, which is that we are in the midst of working on processes for governance of tests 262, including defining sort of how to participate in maintenance and how to submit and discuss rfc's. So, that's an ongoing project. To inform maybe next meeting we'll have some cute slides with links to all that we've accomplished. But right now it's sort of in progress. If you have specific questions, there's a test 262 maintainers channel on Matrix, or you can also always DM me. I'm happy to chat with folks. That's it.

## CoC committee

Presenter: Brian Terlson (BT)

All right. Thank you.

BT: There are no updates from the code of conduct committee.

BT: We would very much like additional folks to help out, however. It's not like there is a lot work coming in every week. When there is work, it can be time consuming for short periods. But with more people, we distribute that. If that's something that you're interested in, definitely reach out to us on Matrix. Or you could use the email address or post on reflector many ways to get a hold of us.

JHD: On that note. There's actually three folks that have volunteered on the Reflector and typically we've had plenary or the committee approved members joining the code of conduct to me committee. So MPC, HHM, and CDA have all volunteered and I would say that if you have any concerns, please privately, let anyone on the code of conduct committee know, and if not then by the end of the plenary, I hope we can consider them all as members of the CoC committee.

BT: Yes. Thank you for that JHD.

BT Okay, that concludes updates from the code of conduct committee.

## Remove tables of Unicode property values and aliases

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/ecma262/pull/2649)

MF: So this will be quick. So at a previous meeting – I think it was two meetings ago – I had talked about the Ecma262 editor maintenance burden of Unicode releases. When a Unicode release happens, we have to update these tables - we have 4 unicode Related tables used for regex stuff in the spec. And one of the options I listed was that we actually go to the Unicode Consortium with a proposal that they keep their names stable. And then we wouldn't need to keep two of those tables around. We could eliminate them from the spec. So I did write that proposal. You can see here. And it was accepted by the Unicode Consortium. So as of just a few days ago, they've actually updated the stability policy. I think MWS has a link to it here. But anyway, these values are now stable. So we don't need to keep these tables in spec, in my opinion. And I believe the opinion of the rest of the editor group. So, I am looking for consensus to remove those two tables. The two tables are the tables outlining the property value aliases that are allowed. That's all I have.

SFC: I just had one question, which is, should we wait for the official release of this version of the Unicode standard? I need to check exactly what the timetable is for that.

MF: This Alias stability is actually backdated. So the aliases have been stable for a while. So this applies retroactively to Unicode 5.1 and beyond.

SFC: Okay, cool.

MF: Thank you for the question, though.

BT: All right, seems like that's all the discussion.

MF: Okay, I'll take that as consensus. Thank you.

### Conclusion/Resolution

- Consensus to remove those tables

## Remove callerRealm from HostEnsureCanCompileStrings

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/2670)

KG: Okay, so context for this. Starting at the beginning, there is in web browsers this thing called CSP, content security policy, which is used to control what things run on the page. One of the parts of CSP allows you to disable the use of eval and eval-like constructs. This is of course a host call out because the ecma 262 spec doesn't know whether or not eval should be allowed. So there's this integration point called HostEnsureCanCompileStrings. It allows a host to determine whether or not eval is usable.Oone of the parameters for that we added back when we added this integration was caller realm. The point of this was that if you have this odd scenario where you have an iframe that the parent page is invoking the eval from the iframe then there was supposed to be a rule about which of the two CSP policy is controlling. So you needed both the realm of the eval function itself and the realm of the thing doing the invocation. But in fact, no browser ever implemented that and the CSP spec and the HTML spec are ripping out that part of their logic so that it matches what browsers actually do. Which means the primary intended consumer of hostEnsureCanCompileStrings doesn't need this parameter anymore, and I'm not aware of any other consumer which would need this parameter. It's kind of a weird case. So the proposal is to remove it so that hosts can no longer depend on the caller realm for making this determination, just the callee realm. And that's it. I'd like to ask for consensus for removing this. I should say this request came from the HTML spec, they're trying to clean things up.

MM: I have some questions. I need to understand before I can approve or disapprove. Yeah, but first of all, I just want to register that the browser is not the only host that's Other uses of multi compartment ecmascript, multi hosted in your multi-tenant Ecmascript mutually suspicious tenants as also are also interested in this for various purposes. The question is right now, the spec is written in a way that I always find confusing because it's using its parameterizing essentially the same spec. next to, to be used both for direct and indirect eval, but direct and indirect eval from a language, point of view are very, very different concepts and constructs indirect. Eval is a function call that essentially is invoking an ecmascript interpreter and direct eval is a special form and the crucial thing from a scoping point. You is that being a special form, direct eval runs in the scope of the code that it appears in whereas indirect eval being a function, call the scope, that, that it was called from has no effect at all, On the invoke code now with regard to caller realm and callee realm, what I would expect. It is that for indirect eval having insensitivity to caller realm is exactly what you want for a lexically scoped language. should, in general, be insensitive to things that come from the caller because that would be dynamic scoping. But for direct eval, the caller, the thing that's called that if I understand correctly for directive, L the thing that is referred. to, as the caller realm is actually the scope of the code in which the directive eval appears. So, is that correct? First of all?

JWK: You can get the eval from another realm and use it as the name eval and it's can still be a direct eval (Correction: This is wrong!! Eval from another realm cannot be used as a direct eval even if it named as “eval”). So I think it's relevant here.

MM: Yes good it is definitely relevant and it was that JWK just touched on exactly the issue that's concerning me, which is if the eval that the eval identifier evaluates to. is an eval from a different realm, but because it's a genuine eval. if the Nation is made. This is a direct eval, then it's still a special form in the code that the direct eval appears in. It. Still gets the scope from that code. It should get the realm from that code. The only significance of the value of the eval identifier, for a direct eval. Is that it enabled the eval special form to be today as a directive, eval once it is being interpreted as a direct eval, the behavior of the, the eval, the eval value that the eval identifier evaluated through has no should have no further influence.

KG: Yes, I believe. Well, okay. Let me Trace through this before I say for sure, but just to start, if you get eval out of a different realm and then in invoke it - like you name it eval and then you invoke it - that is not a direct eval, because it has to be the eval from the current realm to count.

MM: Okay. Okay. In that case, the question is for a direct eval can the callee realm, and the caller realm ever differ?

KG: For a direct eval, no, because to be a direct eval … [pulls up spec text]

KG: All right. Okay, so here is the direct eval logic and it is in particular conditioned on SameValue with this `%eval%` thing which refers to specifically the eval from the current realm record. So to have a direct eval, the eval that you are invoking must be the one from the current realm.

MM: And by current just to make sure I think we're OK here, but just to make sure by current realm, it's the realm of the code in which the eval identifier appear that's not not the realm of the associated with the scope from the eval identifier. Was up.

KG: That's correct. It is the scope in which the source text, the literal "eval" text appears.

MM: It's okay. So in that case, I have no objection. However, I have no objection to the normative content of what you want to do. I would appreciate a new non-normative, note clarifying that in the direct eval case of the realm that's referred to, the callee realm in The spec is must be identical to the The realm of the executing code. Check.

KG: I'm happy to have that note.

BT: Thank you. Okay, we have lay on the queue. That will be our time box. We are, we are asked how much now. So, Leo, Please quick. Go ahead.

LEO: Just wanted to confirm. I did my homework for the shadow realm side as have code. That is pretty much closer to this and we also have calls to this abstract operation, it seems okay, with a note that I will just some for investigation if we can also like apply similar changes to our equivalent to performEval. As of removing the caller realm

KG: Great.

BT: Okay, sounds like no objections to removing this. Okay.

### Conclusion/Resolution

callerRealm parameter to be removed Note to be added pointing out that caller realm is the same as the callee realm in the case of a direct eval

## Can we try to remove gross use of @@species in the TypedArray constructor

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/ecma262/issues/2677)

SYG: Okay, so no slides. Basically, this is something that we found when implementing resizableable array buffers, which kind of got us to relook at a bunch of existing array, buffer, stuff and found things that were super weird. This is one of those things, wonder if we can remove it basically, when you create a new type of direct, one of the overloads of the typed array Constructor is that you can pass in an array like or another typed array. If you pass in another typed array. There's this abstract operation that's called called initialize typed array from typed array, that tries to initialize the newly allocated typed array with the typeed array that you passed in. When this happens. A species look up is done on symbol dot species to get the species Constructor for the source array, the typed array that you passed in. Except this species lookup is only done to get the Prototype. You never actually call the species constructor. This seems really weird. So, you get a species prototype. You hook up the Prototype, but you never actually call the subclasses Constructor.

SYG: So concretely, here is a test case that shows this behavior. So I subclass array buffer into something called GrossBuffer. And this thing is basically passed through, it has this getter that lets you know that if you in fact actually have a GrossBuffer, and the Constructor, you can construct it for exactly one time and after that it will just throw. This is to kind of showcase that it's never actually called. And then you have this species thing to actually trigger the species path. so what currently happens in the spec is that, say I create a new buffer and then I create this new typed array that is backed by this gross buffer. And then I create a new array and I passed into the new array. This gross array to the typed array I just made. So what actually happens is that this new array, this mystery TA gets the exact same prototype as the subclass by species. but it never actually called the sub class Constructor because otherwise this snippet would have thrown because of this code here. so when you create a new typed array via this path, you get species prototype, but you never actually called the species Constructor.

SYG: The unfortunate thing is that we have pretty good interop for this Behavior. JSC, spider monkey, V8, and XS. All agree that this is in fact what is implemented and shipped. But it is just super weird. Like what is the point of calling species thing to look up the Prototype? But never actually ensure that we get the species by calling the Constructor. And I should I should note here that this path. Only happens if the backing buffer is not a shared buffer, if it is a shared array buffer, because, you know, this is shared across Realms, this species dance doesn't happen. You always create a shared array buffer, not the subclass that you passed in. This only happens for non shared array buffers.

SYG: So, my proposal here before opening up for discussion, is that we just stop looking up the species constructor here. This will be a normative change. I will be extremely skeptical that people depend on this in the wild, but who knows. Still I would like to try this. The proposed changes that in this line here, this would start printing false. You would always get the built-in array buffers prototype instead of this species prototype. That's it for the proposed change. Any questions on the queue.

YSV: I just wanted to express strong support for this change.

MM: [from queue] Also supports and wants to kill all species he can.

KG: Also wanted to call out the comments that I left at the bottom of this thread, which is that did search for people using this and the only things that I could find - And I mean, the only things, I looked through hundreds of uses of `extends ArrayBuffer` - and it is tests of engines and it is browser exploits, and there is nothing else.

YSV: Maybe we can find a way to do engine tests differently because this came up before that species is useful for testing engines. That's something we can discuss later.

KG: The tests are testing this behavior, because it's the specified Behavior.

YSV: Okay, I see -- I thought it was another Test262 case, as Test262 is relying on species to test various tricky behavior, which is one of the blockers for general removal, but that's another story.

BT: That seems like an interesting thing to discuss.

JWK: Support.

SYG: All right. I think the queue is empty. Thank you very much for the support. I'm glad to hear that species continues to be universally reviled by this committee. I'll take that as consensus.

BT: Yep. Sounds like we can try to remove it in the typed array Constructor.

SYG: Yes, this is very surgical removal. Not broad removal of species.

### Conclusion/Resolution

- This specific use of Symbol.species will be removed, and a normal AB unconditionally created without getting a custom prototype

## Ecma262 spec RF out-out announcement

Presenter: Jordan Harband (JHD)

JHD: Yeah, it's so it was mentioned in the editor slides, but we want to be explicitly, call it out, the release candidate for ES2022 has been cut. It's posted on the spec repo and also in the reflector. And so that officially makes today, the start of the opt-out period, moving towards GA approval in June. So if you have concerns, you have what is it? 60 days to make them. Someone can confirm the limit but the window for me, but there you are.

BT: And we are, we are starting for 402 right?

JHD: Yes, confirmed. Someone from the 402 team can speak to it if they like, but I believe they've also posted similarly that the ES22 version of 402 is also cut so, that would start the opt-out period for as well.

USA: Yeah, it's the same reflector link.

BT: All right. Thank you, JHD, for that announcement. Yes, everyone, please. Take a look at that document with your (?).

IS: If I'm questioned the same also for the publication within the Ecma. So we can publish these two documents as a Ecma document, right?

JHD: They're both release candidates, not official until the June GA meeting approves them, but as release candidates, sure.

IS: Yeah, that's okay thank you.

JHD: One more quick thing is, if you have any concerns with the PDF generation of either one, please approve the budget request we made a year or two ago because that's the only way that we'll be able to make further improvements.

IS: Okay. So regarding the 402, I have already contacted, Isabelle, was the who did last year for the 402 that we would have a similar exercise. Also also this year. So, least 402 part it would be taken care of the 262 part with the 917 pages of I don't know how many exactly this is my more complex and more challenging here, but you are right.

JHD: Thanks.

BT: All right. Thank you, JHD and IS.

## Handle broken promises in AsyncGenerator.prototype.return

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/issues/2683)

KG: Okay, so hopefully 90% of this presentation will be giving you context enough to understand it. The fix itself is very simple, but like there's a lot of context.

KG: So alright, first thing is just a fun fact, you can make a promise which throws when you try to await it. The way that you do this is by giving it a constructor getter which throws, which we look up for reasons when awaiting promises. It needs to be an actual promise for this to happen. Not a thenable. So if you try to await this broken thing, you get a synchronous exception. So that's fun fact one.

KG: Fun fact two is that there is this `return` method on generators and async generators. The function of this is to inject a return completion at the current yield. This is mostly used for cleaning up a generator. So this is used if you break out of a loop that is iterating over the generator, it allows the generator to trigger any of its `finally` steps. However, for async generators in particular, the async generator can be blocked on an await rather than a yield, so if you call `.return`, you might not be in a position to inject the completion right away. So, async generators, unlike normal generators, have a queue where they store the completions that they have been passed by `next` or by `return`.

KG: A second fact about async generators is that if you return, like a normal syntactic return or this `.return` method, in an async generator, the return value is unwrapped - meaning to say that if it is a promise, the promise is awaited before the return actually happens. And because async generators are asynchronous this doesn't introduce any problems. You can delay as long as you like.

KG: So you may see where these two things go together, which is that if you call .return on an async generator while the async generator is paused on some other await, it goes into the async generator’s queue without getting unwrapped, and then the unwrapping happens at some point in the future when the async generator is eventually unblocked. And at that point, you are no longer synchronously executing any other code, you've resumed because like a promise has finished and you re entered the event queue. So there's this exception that can happen from awaiting the promise. A synchronous exception which is gonna happen, it's not like the promise which resolves to a rejection. and right now the synchronous exception doesn't go anywhere. There is an assertion in the spec, for this particular case, which says basically this operation doesn't throw. But it does throw. So there is a failed assertion in these the spec text right now. And in fact, if you use Gus’s engine262, which is a fairly faithful implementation of the spec, it will actually trigger that failed assertion. The behavior in browsers varies a little bit. In SpiderMonkey and V8 it throws if you call .return while the generator is not blocked, but if the generator is blocked, the exception just disappears into the void. The promise never settles - the promise that the call to return gives you never settles and like doesn't trigger any error handlers. In SpiderMonkey, the exception triggers the top level `onerror` Handler. So my proposed behavior to fix this failed assertion is to do something that none of the implementations do, but which I think is the only reasonable behavior, which is to catch the exception and use it to reject the Promise that the `return` gives you, because that's the only place that you could reasonably put this rejection.

KG: I have spec text implementing this. It's a very simple change. It’s just instead of unwrapping the promise and propagating the exception to a place where there's an assert that the exception doesn't happen. You catch the potential rejection and use it to reject the promise. That's it. That's my proposed change. I don't have tests for this, but I will write tests if we get consensus.

BT: The queue is presently empty. I see many folks are reading, last time, I'm typing in questions right now. So we'll give it a couple seconds.

BT: All right, I guess there is no concern with handling broken promises.

KG: Okay, I will take that as consensus for this change. Thank you very much.

### Conclusion/Resolution

- Process with change

## Array Grouping Status Update

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-array-grouping)
- [slides](https://github.com/tc39/proposal-array-grouping/issues/37)

JRL: All right, so we went to stage 3 with the array grouping last meeting. Since then, it has been shipped, and then unshipped in Safari, Chrome, and Firefox. We have noticed a web compatibility issue around these sugar.js Library, particularly everything up until version 1.4. This is the latest numbers that we pulled from HTTP, archive. And there are approximately 1,300 websites that use sugar.js and a couple in the top ten thousand websites in the world. several dozen or so in the top 100,000. And then beginning to the hundreds from Top Millions. This is just the list of things that we were able to query out. The top website and second top website are not affected, they're using version 1.4, which is fixed, but then we have all of these 100,000 rank websites where we're not able to determine if they're affected here. We're not able to determine either because they're using them in a minifier or they're stripping out the comment that we're looking for or there's just no comment because sugar.js isn't consistent about the version comment they use in their scripts. So some number of websites are affected including some that are relatively popular. I am looking for guidance on what the committee wants me to do with this point. Given there's potentially like six hundred domains of varying importance. Do we want to continue trying to reach out to individual websites? To get them update because that seems like, if it took months for us to fix one with `array.at` I think it might take several months to years to get all of these websites to do it. If they're, there are so many websites that are using it. The only other option that I can see is we do the web compat thing again. Rename, our proposed method, the one that I like the most out of the options that's been presented is groupedBy, past tense of group. So, instead of array.groupBy you would have array.groupedBy and groupedByToMap as are two methods that we're going to introduce with this proposal. That's all I have for discussion. If there's anything on the Queue, I don't have the queue open so I can't present it.

SYG: Sure. My feeling is - so first, thanks for doing the research here for overseeing, the affected version in the sites that use them. Yeah, my feeling is we probably need to do change the name of this point instead of doing more Outreach. That's all.

YSV: I wanted to echo what Shu was saying. We actually reached out and had one website change their implementation and it took about two weeks. So, for 1000 up for 1,300 sites. This is going to be quite a lot one. I do think that we're looking at rename this. One comment about, renaming it to groupedBy to first. It's difficult to say, secondly. It's so close to groupBy and most people are familiar with groupBy that people miss typing it is quite likely. So maybe, alternatively, we can think about a couple of other names or we can drop the by, because grouped, by to map doesn't actually add anything in terms of meaning to the method name, we could just do grouped to map and groupToObjects if necessary.

JRL: Okay. Does anyone have any preference of between the two? We're naming two groupedBy or renaming to groupedToMap and groupedToObjects.

KG: I do not like the `to object` part. Personally, I would just do groupToMap and group perhaps.

JHD: I had the same comments, thank you. I think that the vastly more common case is going to be grouping to an object, and `groupedByToObject` is a mouthful for the thing everyone's going be doing.

JRL: Okay, so I think Kevin suggestion here is groupedBy and groupedToMap. Is that correct?

KG: Sorry. I'm fine with either groupedBy and groupedByToMap, or as the other pair, group and groupToMap. Those are both fine with me.

YSV: I have concerns about grouped by to about the grouped by pairs because the added Edie I believe will be quite error-prone and error-prone and difficult to remember for anyone who's familiar with another language? I think we should have something distinct enough that it's that people will remember that. It's spelled differently.

JRL: Okay, so the suggestion is array.group in a rate of grouped to map.

YS:V I would say if one of them is group and not grouped. So past tense. Basically, they should follow the same format. So if it's group then it's it's a groupToMap, if it's grouped, then it's a grouped and to grouped to map just to make sure that everything's consistent. I don't know if. Yeah, I don't know if we want to follow the Array methods copy array methods syntax where using the past tense is to give you a new array. Maybe we can use that logic. It doesn't matter. As long as it's consistent.

BT: Okay, here we are just to clarify, are we attempting to get consensus on a new name here. Or are you just collecting information for an eventual proposal?

JRL: Either would be good for me. I mean, if we have consensus on a name that means I don't have to do the work later. But we can just get consensus on the back that we want to rename and not continue to try to use the same name and then I can propose and go for stage 3 at the next meeting.

BT: Yeah, it's just seems like there's a lot of bikeshedding on what the actual name should be. So I would propose that we focus on the question of should we rename, which It sounds like there's a lot of support for and so if anyone has any concerns about renaming. We should definitely bring those up right now and then it's just make sure folks know where to go to jump into this naming discussion and we can get a proposal there.

JRL: OK. This issue is number of 37: <https://github.com/tc39/proposal-array-grouping/issues/37> If you just comment there we can do that. I think every all the implementations are already following this this issue or someone representing implementation has already commented. So, I'm assuming they're following.

YSV: We might want to update this, just so that the public is aware that we're going to change the name. Okay. So now what we're calling it so we can just say name change incoming or something like this.

JRL: Okay. Yeah. I think that's all the time I need. official asking consensus on doing a rename. We're not sure what name at the moment.

BT: All right, are there any concerns with what picking any name here? Sounds like no one has a strong desire to break a bunch of websites. Well, alright, I think let's bikeshed the name and then I guess next meeting. Come back with a proposal.

BT: All right. Sounds good.

JRL: Thank you.

### Conclusion/Resolution

- change name, name tbd and presented at future meeting

## Pattern matching for Stage 2

Presenter: Tab Atkins Jr. (TAB)

- [proposal](https://github.com/tc39/proposal-pattern-matching)
- [slides](https://docs.google.com/presentation/d/1sJoXU1ysK6eZn04pjnQ-1z6EetsVf9VfHeU0Ht8hiFQ/edit )

TAB: All right, so if people don't remember from a previous meeting, we talked about pattern matching, the pattern matching construct that will be discussing today is an attempt to replace and improve on every possible aspect of switch, while avoiding all of its foot guns and giving similar functionality to what other pattern matching constructs give in other languages which have to proven to be very useful. Before I go on, I want to thank my fellow champions, their contributions have been invaluable in making this a reality. I also of course need to give thanks to Kat Marchan on who produced the preceding version of this proposal before we took it over.

TAB: The pattern matching is done via a match construct and see on the screen here. It starts with the keyword match, followed by a parenthesized expression, giving the matchable and then a curly brace block for ambiguity removal. There is a new line terminator production here between all three of these bits. They all have to appear together inside of the parenthesis, the curly brace to block there are zero, or more match clauses. Each one consists of a matcher, a colon and then an arbitrary expression, giving the value of that match clause which will be returned as the value of the match expression, if that match clause matches. I apologize in advance for saying the word match too many times. It's going to get worse before it gets better. The matcher on the left side of the colon can come in a few forms. It can contain a `when` which contains a parenthesized pattern, which we will get into in a moment, and it can contain an `if` which can is just like the normal if block, block, any arbitrary expression, it tests booleaness. It can contain both: if so, they have to be `when` first then `if` or it can just be the keyword `default` which always matches and must be the final clause if its present/ if the overall semantics here, are we go through the match clauses one by one checking each measure against the matchable the first one that succeeds, we return. The expression on the right hand side of the colon, as the result of the match expression, the match construct, if we fall off the end of the list without having matched anything, it is an error; We raise an error to allow for exhaustiveness to be used if you don't want exhaustiveness you supply, default match clause at the end. So the only part of this that's fundamentally new here are the pattern constructs. So we're going to go through the types of patterns that are allowed here.

TAB: So to start with the simplest are the Primitive patterns these count as any of the actual primitive values. Numbers strings, etc. a number of near primitive values. Always a surprise to me that like plus 1 and minus 1 are not technically primitives. They are unary plus and minus applied to a primitive number and some of the few of the keywords that are effectively primitives in other's minds, NaN, Infinity `undefined`. We also allow untagged template literals. Tagged template literals are handled in a later case as a more general extension point. But untagged literals, they're just strings but fancy, so we allow them to work. I'll go over exactly what bindings are visible inside the interpolation part of a template literal later, but we don't change the meaning of this in any way really, that `bar` there in the untagged template literal is just a `bar` variable.

TAB: All of these cases match if they are same value with the matchable, essentially triple equals, very strict. The only exception that we have right now is a zero with no sign in front of it, is matched using SameValueZero. So, both positive and negative zeros will match that pattern. If you supply a +0 or -0 explicitly. Then we do SameValue against the appropriate one, but this lets you most of the time not care. What sign your zero is which we believe is what authors actually want the vast majority of the time. This is a small wrinkle, but we believe an intuitive one. We're open to other options, we can go over them at the end. if people have objections to this.

TAB: The next simplest pattern are identifier patterns, any identifier that's not captured by one of the primitive patterns counts as this identifier pattern always succeeds. They match any matchable and then they create a binding of the given name to the matchable value that they are matched against one small bit of complication. Here is, if your matcher is just a win with an identifier pattern. This is effectively an always match. To a default. And so similar to default, it must be the final match Clause because it's identical to default except it lets you give a name to the matchable in case that was provided a an expression rather than a variable even to do anything with the match inside the body.

TAB: Next up are regex literals. These are pretty common among similar matching constructs in other languages because doing complex things on string values is common. We simply stringify the matchable and match it against the regex using the standard exact sort of a semantics if the regex matches the pattern is considered to have matched. If it doesn't, it's not. We have two wrinkles here. First, if the result object from the regex match can be further pattern matched, you can extract pieces from it using `with` chaining. I'll get into that in a little bit. You can see it here in the second clause in the match example, at the bottom of the screen. Secondly, any named capture groups, automatically established bindings visible to the rest of the match clause. In this case, the suffix group, which is everything after the who creates an automatic suffix, binding, bound to the string bar, in this case? This does produce a new way in the language to create bindings, but it doesn't violate our restriction on bindings being statically knowable all of these because it's only regex literals. The binding names are fully statically analyzable.

TAB: Now we get to the more interesting ones, The first type complex pattern is the array pattern. This acts extremely similar to array destructuring: you supply zero or more patterns inside of the matchable that we extract iterable from it. We pull items off of the iterator and match them against the corresponding patterns in the array pattern. So, the ones I've given here in the initial bit. The empty array only matches against empty arrays with things with no items in it. The second one verifies that the first item in the array is a string matching “foo” and then further that the second item is another array and you subtract the value from it. The third example with holes, holes automatch. So this just checks that the item of the array has at least three items in it and binds the third one, to the value `third`, by using an identifier pattern.

TAB: Similar to Array patterns in many other pattern matching constructs, array patterns are strict about length checking. So if you supply an empty array such as that first example, it does verify the array, the matchable is an empty array has no items in it. This is a break from destructuring, but it is well motivated by a common examples. It's very common to take a matchable value and do different things dispatching on whether empty has one item or has two or more items like that. This is also just very common behavior for pattern matching constructs across, other languages. You can relax this however by ending the array, with a. `...` that just removes the length check and just verifies that it has at least as many items as needed to pass the patterns or a `...`, which similar to destructuring exhaust. The rest of the iterator, puts all the values. So obtained into an array and binds it the identifier. Fire. So provided we have caching semantics for the iterator and the items inside the iterator to ensure that you can use array patterns across multiple match Clauses without unpredictable Behavior, especially when you're using generators as a measurable, I won't go into the details right now and less people request it in queue at the end, but you can check the readme for details. We go into explicit detail about what is cached, how, the timing and such

TAB: Next up, our object patterns. Again, this is extremely similar to destructuring with object patterns. You can supply keys by themselves, keys whose values are patterns, or computed keys, whose values are patterns, the object pattern matches. If the matchable has all of the requests keys and the values match the nested pattern, this uses get look up, they don't have to be own keys that can be anywhere on the Prototype and a lone key similar to structuring is equivalent to specifying that ident as the pattern as well. So it makes an identifier pattern, auto matches and binds the value. The final item can be `...`. I didn't just like into structuring which collects all the unmentioned enumerable own keys, and binds it into the given identifier. And again, we have some caching rules so that if you use the same object pattern across multiple caching across multiple match clauses you only see one `get` observably occur for each key so you can have expensive non deterministic property excesses still work correctly across several much Clauses. Again details are in the readme. I'm happy to go into details of someone once at the end.

TAB: Next up are combinator's, there's a lot of cases where you want to combine two or more patterns with `and` or `or` semantics on the same value. Right now. We propose that we are using the `and` and `or` keywords in this example, adapted from the python pattern matching up, the matchable command is taken to be from some. Text Adventure, if they're Phi, is that the first item is the string, go and the second item, it first matches it against a dir identifier pattern, which Auto matches and just binds the value to `dir`. And then also checks the matchable the second item that it is one of those four strings in es or W. If that happens to fail, go to the second item, very similar deal, it checks. The first item is the string take and the second one, it binds it to the identifier. And verifies that it matches a particular regex. These `and`s and `or`s, have standard short circuiting, semantics, if something fails to match in an and string we stop execution there and you do not observably see any of the following patterns. Patterns do and and the first one that matches, short circuits and you don't see an execution of any following patterns binding behavior across these multiple `and`s or multiple, `or`s is defined in the readme right now. We are using `and` and `or` as the naming for this. We think it looks fine, and we have some other keyword-based operators in the pattern syntax. But if that becomes an issue, someone does not like we're open to other possibilities in particular single Ampersand and single bar.

TAB: Finally, we come to the extension point interpolation patterns similar to template literals, where the dollar curly brace breaks out of the string context and lets you do arbitrary expressions. In patterns `${`, you break out of the pattern context and do arbitrary expressions. So whatever's inside of the curly braces, some arbitrary expression, we evaluate it. The result is then checked for a simple dot matcher property. If so, it's using custom matcher protocol, which I'll get to in a moment. Otherwise, we just check that the value so obtained is SameValue with the matchable similar to a primitive pattern. I'll get to the with chaining a little bit, but you can further match the value after its passed through the custom matcher protocol using with show that off an example.

TAB: So simple example of non-custom matcher using variables to check against. In this case. This is some parser where Line Feed and carriage return are stored in appropriately named variables instead of having to memorize hex codes and then the first Clause of the matcher, we check a character if it is equal to the value of l, f or the value of c are without the interpolation pattern there. If it was just LF or see are written inside the winds parentheses, these would be Your patterns, and they would find their automatically succeed in bind to the LF, which is not what we want instead. Because they're inside the interpolation patterns. We evaluate the variables and then check the value so obtained against the matcher. If that fails we continue on.

TAB: Now, the custom matcher protocol is a little bit more interesting. In this example. I'm showing off a result class similar to the results class from rust or many other functional languages, where it represents the return value of an operation that might fail. If you look at the bottom, the actual match construct, we invoke Result.Some in the interpolation pattern, that just produces the Result.Some class, which does happen to have a `Symbol.matcher` property on the class as a static method. So once we've obtained results, we invoke the `Symbol.matcher` method, passing it, the return value of the find thing function that we called there, it then has to return a result object which has one or two keys matches key, which should be a bool telling you whether or not it should be considered to have matched and then optionally a value key containing the value for further destructuring. In this case, the ‘Some’ class simply verifies that it's of type some and then pulls the value out of the some class and returns it as the value of the match. The none does similarly, but there is no value to pull. So it doesn't provide one when you look at their use in the actual match, construct them. The first clause will check that the matchable return value of findThing() is `Result.Some`, and if it is pulls the value of the some and matches it against the with `num` part number is just an identifier pattern. It’s treated like an identifier pattern, anywhere else the pattern constructs it auto matches and creates a binding in this case to let you increment whatever value was pulled out. If that doesn't work, we go down to a `Result.none`, and return 0. If that passes and notice, also, this must be exhaustive, because there's no default provided. So if it fails to be a sum or a nun, you'll get a nice runtime error. Let you know, you screwed something up. Custom matchers don't have to be static on classes, though. They can also be constructed dynamically. Any method can return an object with a symbol that matcher property in this case. You want to be able to match strings in an ASCII case-insensitive manner, whereas normally, if you just provide a string literal, it checks exactly characters. So here, you pass the string. You want ignore ASCII case it lower cases, it and returns. An object with a symbol that matcher property that verifies the matchable when lowercased is also equivalent and provides the canonicalized value. If necessary, we don't use that in this example, but see the to match clauses at the bottom are checking to see if it is any case variation of the string color or any case variation of the string background color, presumably. They're doing some work with CSS properties. We intend that all the ECMAScript constructors will expose built-in custom matchers that do a brand check, similar to `Array.isArray`, so you can use them in the illustrated fashion to do simple type checking.

TAB: We also as part of a later stage, three or four future level of this proposal will also propose adding this to WebIDL so that all WebIDL interfaces is across the web can be used similarly (overridden if necessary), but otherwise they'll all have a default custom matcher, that just does a type check for you. We expect that usual and we'll do the same thing. Probably is an instance of semantics like I showed in the custom matcher example, earlier with result.some because it feels like in our estimation, it feels like a pretty natural and well-suited way to handle all these things. These measures will also return the value as their match result. So if necessary, you can continue to pattern match on it using `with` chaining. As was established previously just to reiterate `with` chaining is available on interpolation patterns and on reg, reg, ex, literal patterns, whatever the results the custom match protocol was or the result of the regex match was gets passed to the pattern provided after the `with`,, if it matches the whole thing matches, if it fails, the whole thing, and more bindings might be established.

TAB: Finally, we have precedence. We've got a couple of keywords that can potentially occur at the same level and upon review here. We've decided there is no obvious precedence relationship between these three and so we have declined to provide any precedence relationship. If these keywords appear at the same level, it is a syntax error. And instead, the author must parenthesize to make it clear. This example, here invokes the string, custom matcher and passes the results to a wall to something, you're not sure. It's either. The second result where parenthesizes string with Foo or checks, the original value against bar, or it's the second one. Are it passes the value? Through the string, custom matcher. And then check the result is a fool or a bar. The author must specify to make it clear in (?).

TAB: Finally come to bindings. I promised to explain a little bit more about that. The short answer is that whenever a pattern establishes, a binding, its visible for the rest of that match, clause, including subsequent parts of the same pattern. So, in this example, we begin with binding of the value, 1 to the name, a outside of the match construct. We then do a match against an array. Containing two, three and four. The first match Clause the first item in it just has an identifier matcher, it auto succeeds, and binds, the measurable value. In this case, ‘2’ to the name, ‘a’ this overrides Shadows rather the outside binding, which you can see immediately in the next pattern provided, which is an interpolation pattern just computes a plus 1. In this case the a that is visible to this pattern is the preceding pattern’s a, so it will get the value 2. It'll add one to it to produce 3 and then this is a simple interpolation pattern. So We just check does 3 equal the matcher, which is the matchable, which is three: success. We continue on, finally, the third value in the pattern is another ident, which again Auto succeeds and creates a fresh binding of a to the matchable, which is 4. So now, there are three stacked bindings, an a equals one from outside and a equals 2, from the first one and enables for from the third one. So when you get to the, if and it's doing an expression using a, it sees the most recent ‘a’ which has the value for and that succeeds, the whole Clause then would succeed. If we hadn't sabotaged it and it would log for as its value here because they have sabotaged it will instead move to the second clause which again checks if a is equal to 4, this will fail because bindings only last for the duration of a match clause. So as far as this Clause is concerned, there's only one binding its to the value one coming from outside. And so this fails to match and similarly all bindings. Expire outside of the match Clause. So the final console.log will just see a equals one.

TAB: So this was a bit of a whirlwind tour. I'm sure there are questions, haven't checked the queue yet, But the proposal as it stands is feature complete. We have a very detailed explainer in as the readme in the proposal. There are future Avenues, to explore some them explored in the readme, but as it stands, We Believe The Proposal is ready to go absent. Any major objections from committee stakeholders, so I'll open the floor to questions. Check.

MM: Hi. On the template literals. I'm surprised that the what occurs in the substitution position is a identifier name to be bound, rather than generalizing that to a pattern.

TAB: And it's not Is the opposite. It's just an arbitrary expression. Exactly, like a template literal would be anywhere else in the language.

MM: it's an expression, I missed that.

TAB: Yeah. Sorry. I said I would explain it and then I kind of forgot about it when I got to the point talking about bindings. Yeah inside of a template literal, interpolations are just treated like normal template literals that they see the Bindings. That anyone else would see, as I explained in the final slide, and they're just interpolated and produces a string.

And in that string is checked the same way as any literal string.

MM: I see and you also mentioned that you were going to mention tag. Template literals is extension points.

TAB: They are just handled with the interpolation syntax. You can, if you need to invoke a tag template, for whatever reason do something related to pattern matching wrap it in curly braces, like you would any other arbitrary expression. They don't have any special meaning as a pattern construct.

MM: I see. So the the template literals we've got are derived from the Quasi literal expressions from the e-language. and in the e-language, those were designed in the context of the language. They had both expressions and patterns. JavaScript at the time, of course, did not have patterns. So we just ended up with the template literal Expressions. The template literal patterns, also had a tag variant, and had a pattern matching variant form of substitution holes. So I am not saying that this needs to go into this proposal, but I would like the form of templates that go into this proposal to carefully not preclude extension, in that direction. And there's, there's one issue there, which I can take up with you offline.

MM: The binding rule that you that was near the end of your presentation. Where ‘a’ was rebound within the same pattern to a different value because there were two occurrences of ‘a’ as a pattern - I think that's bad. I think that's way too accident product. I think that if the same binding occurrence occurs twice, there's only two reasonable choices that I see one is that it's an error because your binding the same identifier again in the same scope where scope intuitively to the user is corresponds to the curly, brace delimited, kinds of things. And in this case, and your case, having a branch of the match be considered a scope is fine, but having there be finer scopes with shadowing. Is just too surprising from the intuitions people that the language already teaches. The other possibility that if the same binding identifier appears twice, then second one must be same value to the first one and you've already made that unnecessary with your very, very clever use of the substitution syntax outside of a template literal for a expression rather than a nested expression rather than a nested pattern. So since you've made the agreement form unnecessary as an interpretation a double binding, I would suggest it should just be an error.

TAB: our only objection to that. I will say that there's definitely has been discussed as an option. The reason we have it with a current one - and it doesn't necessarily have to be that way, we can discuss changing it. Is we think it is reasonable. Or and, and or Clauses to be written in such a way that they sometimes establish the same bindings. And it would be unfortunate if those Became an error because it would require authors to write around that case. It's something that is otherwise pretty clear intuitively. I won't be able to construct an example off the top of my head, but I can show you one later the sort of thing that we are slightly concerned with. I would just be a little awkward for authors.

MM: Okay, I would like to see to see those examples. We can take that up offline. Yeah, it seems to me that it should be the case that even with `and`s and `or`s, the static rule can be exactly one, actual matching on a success path to an overall match.

TAB: That might be the case. I think my issue was with `or`s we’d only we'd take bindings from only one of the `or` Clauses, but we need to create bindings for all the unmatched or so that you have statically analyzable bindings and I didn't want one of them to preclude the rest, but if it's if we can special case that such that we only care for this purpose about the successful `or` match, not being duplicated with anything else, then that might acceptable. Yeah. Well, I would love to have that as an issue. We can discuss that offline.

MM: Okay, and with regard to the - since you're going for stage advancement. I'll just voice my reaction right now, which is this was a lot to absorb. I know it's been posted and I probably should have spent more time on it before the meeting everything I understood in what you presented, other than the nits we’re going to take offline. I like a lot and I have no problem with a going to stage two. I just at this time to agree to stage two, There were too many too many things that I failed to absorb during

TAB: No, that Waldemar is the talk. going to object as well. So we probably will not be actually receiving stage to stuff here. So shouldn't have to worry too much about that. that.

MM: Okay. Thanks.

TAB: Oh, also one final bit. You said, you wanted to make sure we didn't preclude tagged Template literals from doing something fancier in the future. The current grammar does preclude that: it disallows tag template literals from occurring in pattern space and thus in the future we could potentially do something fancier with tags template literals without changing behavior on authors.

MM: Oh interesting. Okay.

KG: This was just in response to Mark's point about reusing bindings. I agree with TAB that it is important that bindings are able to be reused across `or` alternatives. I don't think `and` make sense. I actually have a proposal to allow reusing capturing group names across alternatives in regular expressions, which is almost exactly the same case. But yeah I think we can make it work so that is the only way you are allowed to reuse bindings.

MM: KG, the semantics here thinking of which I don't understand. Is it a shadowing semantics where these where along one success one success path. The evil can be bound. The variable name can be bound to one one value and then a shadowing. Occurrence of the same name is bound to another of our value on the, on the success path. No, yeah.

KG: The point is that only one of the arms of the `or` matches and that was the one that binds.

TAB: Okay, and it's it's convenient to be able to have multiple Match, multiple branches of the or provide the same bindings, even though you might be abstract pulling them out in different ways. Otherwise you have predict which binding is successful in the value part, and that's very annoying.

MM: No. No, that's right. That’s statically analyzable because statically know, the or I would say that every the key thing is: that for every variable name there should only be one binding on the success path and that means every branch of an aura can bind the same name. It's the shadowing that I object to.

KG: Yeah, I don't think shadowing is likely to be necessary for the cases I have in mind. So I think we are in agreement on that least.

WH: So what if you have an OR nested inside an AND which binds the same thing? If one of the branches of the OR binds but not the other, there's no way to statically analyze to see if the other AND clause shadows it or not.

TAB: There is, there's no OR and AND at the same level. Either the AND is above, in which case, it'll definitely be part of the success. Or it's below in which case it'll be one of the branch paths and you can analyze those branch paths together the union inning or whatever.

WH: I don't think you understood. I'm not talking about precedence. The scenario is that at the top level we have an AND, each of whose branches is an OR which might bind `a` or might not. You can’t statically tell whether that would rebind the `a` or not.

TAB: I believe the intended semantics here that we were going that word. going to be discussing the issue where we hammer out the details, is that you Union all of the bindings from an `or` and count those as all part of the success path that Mark was talking about.

MM: I would actually be stricter than that and say, every variable must be bound, exactly once on the success path.

KG: That gets weird since different arms of the `or` might look completely different.

TAB: Well, just to be clear. Um, it's definitely my intention that if an ‘or’ Branch doesn't use a particular variable that another branch of that same or does that does create a binding to undefined but you don't have to explicitly named it because that gets really awkward potentially.

MM: I see. I don't know how I feel about that.

TAB: All right. Well, we can discuss the details of that in the issue.

WH: There's a link of the draft specs of the screen on the slide. Can you follow that link?

TAB: Yep, the current draft spec text is very empty. Our draft spec text at the moment is in the readme proposal which is fairly detailed, but it is not in es spec-ese.

WH: What’s on the screen is very different from what is being proposed. I see no ‘if’ clauses. I see no default clause, no combinator's, no interpolation, no identifiers. All the major parts are missing.

JHD: No, that's right. It’s initial spec text, which is what the process requires when seeking stage 2.

WH: I’m sorry, the spec text is missing, and this is a different proposal from what was described in the presentation.

JHD: The spec text has largely not been updated since the previous iteration of this proposal, that is true, but it still constitutes initial spec text. It is very much not representing everything that we're proposing, but we don't need complete spec text until we're seeking stage 3, which is when absolutely it would need to match exactly what we're proposing.

WH: Let's go through this. Let's see what this looks like.

TAB: It looks like nothing.

WH: If this is stage 2 spec text, this is such an abuse of process. It's a huge proposal with almost no spec text.

JWK: Yeah, I have made a draft PR for the syntax, but it only contains syntax. We need to do more work to contain and include the RS and EE. So that's it.

TAB: Okay, good.

PFC: [point of order] I don't think it's a good use of committee time to lead us all through a demonstration of clicking on the spec text.

JHD: The rest of my reply is, I think that if we want a more explicit, higher bar for stage 2 than the three words “initial spec text”, then I would encourage anyone to a make a pull request to the process document to codify that.

WH: It is codified. Please re-read the process document.

JHD: It says “entrance criteria for stage 2” is “initial spec text”, the purpose of stage 2 is to precisely describe the syntax and semantics using formal spec language. We don't need to do that until stage 2 because that's the purpose of stage 2.

WH: What's in the initial spec text? Stage 2 requires initial spec text whose quality is “Draft: all major semantics, syntax and API are covered, but TODOs, placeholders and editorial issues are expected”. The problem I'm having is that I reviewed the spec text and I cannot review this proposal for stage 2 until the spec text actually appears.

BT: That objection is noted. Thank you. You have the next topic.

WH: Moving on to technical issues. There are grammar issues with this, like what does the initializer do? I don't see the semantics for it. I gave an example of some of the issues this causes such as determining the end of the initializer. Another issue is a comma expression inside the `match`.

TAB: So for certain bits of this, this isn't quite the right grammar, like, you know, in parenthesis parenthesis in some places, but I think I can forgive that part. We don't have initializers in the grammar right now.

WH: You do in the spec text.

TAB: Okay, ignore all of that. The current spec text is not matching the proposal. Is there anything from what I presented today that is still unclear from what's written here?

WH: What happens if you match on a comma expression `match (3,4,5)`?

TAB: I mean, that's an arbitrary expression. They can be comma separated. So, the result of that, which guess would be the value 5 as the matchable.

WH: There are parsing issues with that.

JHD: That’s a stage 2 concern, and if we need to write more spec text or more accurate specs, that's fine. But when these types of things have come up, before it with stage, proposal seeking stage 2, what we consistently discussed is parsing problems are a stage 2 concern, not a “seeking stage 2” concern. As long as it's not going to completely tank the entire proposal, of course.

WH: Are you saying you don't want any feedback?

TAB: He was saying that those are appropriate for a particular stage, which he is asserting is not this particular stage we are seeking right now.

WH: I disagree with JHD’s definition of stage 2 again.

BT: I don't think it's important that we get into the process right now. So that's good feedback. The Champions. I believe they understand this and will We're happy to work with you all tomorrow on addressing these concerns.

WH: Yeah, I'd like something that I’d be able to review.

TAB: Yeah, at the moment. The answer is the readme is, well detailed. It doesn't have grammar defined for it right now, but we're having a thing written for it, But behaviourally, the readme is the current state of spec.

JHX: My first question is about the syntax, the `${`. It seems a little bit wordy. I feel that something like match a string, it may be a common case and I hope it could have a much simpler syntax.

TAB: So depending on what exactly you are wanting to do, if all you're wanting to do, is check that the value is a string and the value already exists a variable binding visible to the thing. It is remarkably concise when parentheses dollar curly string, then close the parentheses if you're wanting to get the value out as well, because the matchable was produced by an arbitrary expression. You need to name it. It is a little bit wordier, but as far as we can tell, there's, there's no way to allow arbitrary user defined names at a like, higher point in the proposal without causing significant ambiguity issues. That interfere with the rest of the proposal entirely. So I understand the concern with a bit of ambiguity there, when you're doing simple things with the interpolation. and one thing something smaller, like some of what other pattern languages can do, but the other pattern languages generally are significantly more restricted in their use cases, They do. And thus can laser focus their grammar at those and being as small as possible. And we just can't do that if we want arbitrary extensibility here, which I believe we do want. That said ideas for clear grammars that can shorten these common cases are welcome. but we don't want to complicate the grammar unnecessarily. So feel free to raise issues in the repository if you have ideas for that.

JHX: Okay. Yeah, I understand that. I just I just want to say maybe we need some more explanation about how to balance different use cases and something like that.

JHX: Okay. The next question about, could you could you go back to the slide of bindings? My question is, is first I'm not sure what it is. that a let binding or constant binding or Or, maybe it could be are single let binding.

TAB: So first off. Versus less constant versus let. We don't care very much. I don't think it's a vital part to go. Either way. I would expect a let binding because that seems to be the better thing to do in general, but I could go either way if committee members feel strongly one way or the other, we can do whichever I believe multiple bindings versus one: well, first off, this will run into possible changes with marks objection from earlier, but if we keep these semantic here in the this slide. Exactly. Then they would be multiple bindings. The so that if there was a console.log() in the interpolation, in the center of the array, instead of an a plus 1, it would still log the value 2 Instead of the later value of 4 that, the third pattern ends up establishing. Does that answer your question?

JHX: Okay, I see. But if it's a multiple binding I would prefer `const`.

TAB: I guess we can discuss that as part of the issue that Mark is going to raise about single versus multiple bindings as well.

JHX: Thank you.

MM: [signals he prefers const bindings]

SHO: Hey everybody, so this is come up in sort of pre-plenary discussions as well. And so I wanted to bring it up here, which is that this proposal is very big and we are doing a lot of things in one proposal and I'm sort of wondering if there would be an advantage here to ship an MVP first and then some extensions, so that we can be sure we don't sort of paint ourselves into unforeseeable Corners. I hear a lot when we talk. About what we want to do. Cases are were like, oh, we shouldn't have done that thing before but now we have to live with it. We should have done that thing before we now have to live with it. I'm wondering if this is a case where maybe we can save ourselves from future regret by breaking the proposal up into smaller pieces and see those Advance which would sort of let us identify problematic corners or behaviors. that we don't expect by looking at this way.

TAB: Well, I 100% agree with you in general. Yes, this is we want to take this in as small chunk as possible. And that's why we have a lot of potential future extensions that we are not including the proposal right now because I haven’t listed them out because they're a lot more questionable and not as necessary for any core thing that said I believe that more or less what's in there right now is a minimal feature set, if we cut anything out of it It would be either feel extremely weird or would constrain future evolution in particular. The Primitive, ident, array, and object matchers, I think are all of a set. There's only one reasonable behavior for all those. Any way to match up with how they work in any other similar pattern matching proposal and if you’re missing any of them, it feels weird. And for custom matchers, you absolutely need the value to match against variables. The construct becomes almost unusable if you can't put variables in, at least for the simple version interpolation, and if we Have custom matching it may well, I suppose theoretically we could cleave off the custom matcher entirely right now. It would be slightly unfortunate and I want to make sure that we don't like to lose it because like regexes are similarly heavily magical and if they can be done in pattern matching the arbitrary things should be able to be done. And like the example. I showed of constructing custom matches on the fly. I think this is extremely valuable, But in theory there is a cliff point there. We could do because the symbol keyed method at least would allow us to still distinguish in the future, you know, if we didn't ship it in the first part, do you have any suggestions for any more finer cleaving?

SHO: I mean, so honestly if it were up to me, I would probably I would remove regex from The first pass through and I would probably, I mean, we're already seeing in the discussions at some of the bindings in the more complex object matching are complicated. I would probably dial things very far back to essentially, a sort of - and this is other people are going to disagree. I know, and that's a good discussion. I would probably do the most simple ident matching and then honestly ship the custom matcher because giving people the powerful ability to sort of break out and go wild with what they want to match where that sort of. pained, within a function, to me, seems actually a more limited design space than all of the sort of special cases that are the different kinds of matchers.

TAB: Oh, well, okay. I really disagree with that just because the ability to Nest patterns, especially in the array and object case is very awkward to try and do in value space. You do need a dedicated syntax to make it reasonably read. Trying to act like you try to work through how to express the equivalent of an array matcher as custom stuff. It is god-awful. So leaving that out and relying on custom metrics for. Now, when I know that we're just going to put them back in like virtually immediately would be really unpleasant. But also like a real object matcher aside from the one bit about length checking are identical in behavior and overall semantics to destructuring. And so I do think there's very many questions there that would like confuse authors or that we would decide differently. We don't want to diverge heavily from destructuring because pattern matching does nearly the same thing as with a little bit extra of matching semantics in addition, 2D structure and semantics and so I just don't see any way that we would do anything significantly different there. I could arrive where

SHO: I worry that “nearly the same” is not the same thing as “the same” and it's in those sort of Deviations where I think surprising Behavior could possibly lie, but I also want to be sensitive to the amount of time that's left. So my suggestion is, I think it would be worth discussing other ways that this could be cleaved, because it seems very big, and I have some concerns about that, but also ready to stop being the person who's responding to you about this. So everyone else at least in replies. Come this far as primitive.

TAB: And also, please raise an issue. more than happy to discuss things offline.

JHD: The approach of shipping a minimum thing and then kind of adding things on later reminds me of the way that the pre-ES6 committee tried to ship `class` - I think it was described as “max/min” - and I feel like that has been a very rocky road. It has left a lot of holes, it's created a ton of burden on the ecosystem in terms of documentation and transpiling and linting and education because we have to teach all these workarounds and then finally something new comes and now you have to overcome all of that previous teaching you've done, which is even harder than teaching in the first place to teach people, to use the new patterns. I think that it would be far better to wait and ship it all at once, than to try and kind of chip away at it. It's fine to have extension points, of course, I'm not arguing against that, but I agree with TAB. I think that most of the stuff is pretty critical, and I think that we could probably get into some weird scenarios if we ship the custom matching protocol, before all the other stuff is in there, and we can explore that more in Github issues.

Thank you. One thing to keep in mind to have is that we have a little over five minutes and there's a long queue. The next, we have Yulia.

YSV: I'll try to be quick. I understand the concern around classroom. Certainly paid a hefty price for the max Min approach of classes, but I think that example doesn't necessarily mean that we should pack proposals with everything that they need. This isn't the first proposal to run into this issue. We had this with class Fields also where we tried splitting it up, bringing it back together. I believe we've had it in a number of proposals, and they end up being sort of combined into these really massive projects that are very difficult to comprehend in a single meeting. And we're actually seeing that right now. People have not fully understood what this proposal is and it's been my concern. I've brought it up in the champion group meetings. My concern has been that. There is a lot here. So I think that and additionally, there's the final piece which is for implementers. First of all, the comprehension of the spec and then also the implementation. When we have smaller pieces to work with, it's easier to understand. But at the same time, the splitting things up, means that it's more difficult to do a holistic analysis. So I feel like we're actually missing a building block here, which is a concept of an epic that allows us to talk about these bigger ideas both together and separately. Because I think there are many things here that could be split up. Like match and when and default, I think those are the core fundamental pieces and Could go really simple with those and then talk about the other core components, categorize them and have them separated so that we can analyze them separately and then have a mechanism by which we can consider them cohesively. But I do think it's a really big ask to have something of this scale be considered all together all at once without any kind of categorization of that sort. We're missing that piece.

RRD: agreement with this.

USA: So, There's feedback from the committee to focus on the core use cases.

TAB: Please people bring up these issues in in issues in the proposal, but I will also say that A certain degree of size in order to be consistent with what many other pattern matching constructs, and other might still be expected here. I think an extremely minimal proposal that doesn't do things that people expect it should be able to do from for example Python and its recent pattern. Matching proposal would be more confusing than not but let's continue discussing that over in the issues.

YSV: I just want to make sure it's clear that I'm not saying that this should be completely minimized. I'm saying We are missing as a committee a way of discussing larger ideas. Yeah, and I think that's what a lot of people are running up against as a wall in order to fully understand what's being proposed here.

JHX: yeah, I think I talked about this before, that I don’t like naked if. there are two reasons, firstly, it, Nick, if never match anything, it it doesn't use the the value, which and It's, It's, it seems encourages some - I can't say it's a bad coding style, but I feel it makes the logic a little bit confusing. And the other issue is - `if` in the match is actually have somewhat old difference with the the normal if. If it's actually more like the Arc of because in the healthier for you, the only one if will be execute. So I just feel I understand. Sometimes you may need need that but I really doubt whether we should put in the MVP version.

TAB: Okay, in the interest of time. Thank you for the feedback and And please bring it up sup a issue on the proposal happy to discuss it there.

USA: You still have a number of items in the queue? Do you want to conclude this or discuss more?

TAB: Unless anybody has something they think is killer. I think we should probably conclude and possibly if we time at the end of the meeting, pick up the rest of the queue. Otherwise anybody who has open concerns, please raise them issues on the proposal. We'd be happy to discuss them there.

JHX: Okay, I have the last last the one.

TAB: That’s the one I was afraid of because it's going to be a discussion. And I would much rather handle that either at a later time in this proposal later time in this meeting or purely in the issue. We definitely cannot discuss that in the one minute we have left.

USA: Yes. Thank you TAB. Yeah, so regarding stage advancement, there are concerns about the spec text and there are a few other concerns. I suppose the Champions have the list of things to talk about.

### Conclusion/Resolution

- Not advancing at this time

## Decorators for Stage 3

Presenter: Chris Garret (KHG)

- [proposal](https://github.com/tc39/proposal-decorators)
- [slides](https://slides.com/pzuraq/decorators-for-stage-3-2022-03)

KHG: So my name is Chris, and I'm here to present decorators for stage 3. This presentation is mostly just going to be a recap because the proposal has not changed significantly since the previous plenaries, when we have discussed dated brought up updates and what not. So, yeah, we'll just dig right into it.

KHG: So, first off, what is a decorator? Decorators are functions and they have four main capabilities that they can do when applied to a class or class elements. They can replace the element with one. That is a like-kind. like-kind. They can initialization for the elements specifically whenever the instance of the class is initialized and then they can add metadata, which could be read externally from the class and they provide access to the value, which is particularly important for private elements. So first up replacement so decorators, receive the original value. that is being decorated and they can replace You that has the same shape. So methods can be replaced with new methods and The Decorator receives the method or Fields. The value that is to replace is the initial value of the field. Not the initializer function itself. That was primarily for performance concerns, I believe. and then you just generally can't change the shape of the value that is being decorated. So this is something that previous proposals could do you could change a method into a field, a field into a getter and on and so forth In this proposal, it really is just you are replacing like with like so that's the first capability.

KHG: Second capability is initialization. So method decorators and class decorators can call addinitializer to add a function which will run when the class instance or the class itself is first created. So for static methods, and for the class itself, this will run Immediately after class definition or during class definition and right around that time and yeah, for Fields decorators because they already basically run code during the initialization step. There's no ability to add an additional initializer. the idea being that you can run, whatever initialization code you need at that time, one important thing to note about Method initializers here is that they run before class fields are assigned. So they run all at once at the beginning, right after super right before class fields are assigned. And this partially for performance reasons, so we don't have to like constantly be tracking where methods are and like when they need to be initialized relative to fields. It's, but it's also for consistency reasons. This way fields and field initializers can't see an initialized and an uninitialized version of a method. The method initializers, all finish, whatever they're doing possibly in this example, for instance, binding, the, the method before, you know the field, any of the fields can run. So user code in general, won't be exposed to that.

KHG: So next up is metadata. So, metadata has a variety of use cases. One of the most common use cases is for dependency injection. So figuring out, which value should be injected on a particular field, or in a particular, like, in the Constructor or something like that. Metadata is defined using `setMetadata`, which is passed in on the decorators context object. And it is keyed on a symbol. So you have to create a symbol, which you set metadata to and then metadata ends up on the `Symbol.metadata` property on the class itself. And it's accessible via like your symbol key and it's split up between own metadata, which is the classes of metadata public metadata, and private metadata, and there's actually a mistake. See that prototype symbol, that metadata the first line right there that.own. That should actually be just see, symbol that metadata. So static metadata goes on the class itself and instance, quote unquote metadata, like methods that are non static and whatnot and Fields goes on the Prototype. Metadata is inherited. So you can very easily read the metadata for a particular class and also see what its parents metadata is through that. Like it uses prototypical inheritance itself. So just mirrors the class exactly for public metadata for private metadata. There is no for, you know, a private field to shadow a parent field. So private metadata. Is just kept in an array. So yeah. And lastly access. So as I mentioned before, decorators provide That's to whatever the value is and this is particularly important for private fields private methods. So for instance, if you wanted to create a dependency injection decorator, which in was able to inject a value onto a field, you would need some way to set that Fields. So that's what this access object provides. And it basically just provides a get function and a set function, that can be used to get or set the value. You have to call the function with the target the class itself. This is pretty standard for decorators in general, like, having to use `call` or `apply`. So yeah, this is a pi. Should generally be pretty intuitive to decorator author. Yeah, and you can only get values that are generally gettable. So like Fields, gutters methods and set values that are settable like fields and Setters. You can't set a method because generally, that's not something you do and for private methods it's actually not possible.

KHG: So yeah, that's The last bit, here is the `accessor` keyboard, which is included in this proposal. It is somewhat orthogonal functionality, but it is very important for another very common decorator use case, which is to create reactive values. So what accessor allows us to do, is it installs a getter and Setter for a private field, Essentially that can be used or On a field rather, which is then backed by private storage and that getter and Setter can be used to be decorated to intercept whenever a value is accessed, and whenever a value is updated, so that you can track value and generally react to updates on that value. Yeah, that's pretty much it. So update since the last meeting. So initialise on accessor decorators, return values has renamed to `init`, the idea here. was that initial has an initializer can are both common kind of words used here and they could get quite confusing. In fact, we made a typo when we were implementing the Babel transform for this. So this was a bug. Popped up for us and `init` is just simpler, shorter, easier to remember. So we thought we would make that change. We've also included the `access` object for public elements. Previously. It was only for private elements, but for consistency sake, we added it for public elements. The idea was that you could just use the name of the public element to access it, but adding this just makes it easier for people to have more consistent decorator, handling code, and whatnot. `constructor` on metadata has been renamed to `own`. so previously it was named ‘constructor’. It was just the class itself, The metadata for the class itself, but that's somewhat confusing. Because you know, there are properties named ‘constructor’ in relation to classes already. And also, it seems like it wouldn't be forward compatible. Like if we ever wanted to add metadata, you know, and decorators for plain functions. for instance, that could get confusing, and we'd have to have another, you know, field on the metadata objects, ‘own’ kind of makes sense. It's like the value that is being decorated here. So, yeah, and then the spec has been fully written. It is fully updated. It has been reviewed by a number of members. so far and yeah, there's been some some good feedback. And yeah, it's pretty much everything. I'm asking for advancement to stage 3. any comments.

MM: Well, hi, the. Could you go back to the slide where you the identifier all caps exposed? So what is - oh, I'm sorry, I missed it. It's right there on line one. So, all of this really devolves to my second question, which is what is the API of the context object? Was there any time where he's holed up together?

KHG: I did not add that on my slide. Sorry, It's been in the proposal for quite a long time now, and I didn't know how much I should include in terms of the updates. You can show it in the context object. Is right here.

MM: Okay, and is there and the context object that's passed to a given decorator? Is that specific to the thing that decorator, that, you know that occurrence of that decorator is decorating, and does the context object only have the power to manipulate the thing being decorated. There's no ability to use the context object to like add data to something else. Yes, so, the context object is recreated currently in the spec, per decorator. I kind of went back and forth on whether or not it should be like reusable or whatnot, but I've opted on the side of the making it new each time so let, you know, there wasn't a chance of leakage and these methods that are passed in, for instance, also are all like they'll throw an error if you to call them outside of the context of that decorator outside of the roadside like immediately after there's actually bug, I need to fix in the spec because if it if it throws an error currently, it doesn't directly handle that. But the intention is that if you attempt to call them outside of the usage of this, it will throw an error.

MM: Okay, so it's disabled when you're out the outside of the dynamic scope and presumably when you're inside, right? Okay. So if you're inside, you can use the console that all make sense once Once the think, once the thing being decorated has been decorated, there shouldn't be any more usability of the context object. The reason for the arbitrary symbol on the metadata is that you're associating the metadata with the pair of the symbol and the thing being that Ready?

KHG: Yes, so metadata is looked up quite often. Usually by particular decorator libraries. And the shape of the metadata objects allows people to that. We've designed allows decorators to look up that value very quickly, easily if they know that symbol we kind of went back and forth on this. There is an alternative idea of a very simple metadata format, which wouldn't even have a symbol. It would just add a value onto an array. The, the downside there would be that, you know, every decorator would have to then re-implement that look up to find its values and cache them and so on and so forth. it's kind of a trade-off there and we were we We ended up going with the one. We felt would be more performance in real-life usage because you know, the previous reasons this proposal did not Advance where specifically around performance. So we wanted to make it as performant as possible.

MM: Okay, thanks. I think that's it for my questions.

next up, we have three topics with the same general idea. So first up, we have Jack works with the metadata API change.

JWK: Hello. So I see because of the feedback from the V8 team, the decorator proposal has a new PR to make a big change on the metadata API, and I don't think that new API looks good to me. So, please consider more about that's part. Thanks. And if you are really going to simplify the metadata API, please at least preserve the symbol-keyed parts, I have already commented in that pull request.

KHG: Yeah, my my feedback in the pull request. I think remains the same. We The feedback we got was so far, has been that the metadata API is fairly complex and really, the idea of that change is to it as simple as possible and the symbol, the splitting things out by the symbol and assigning metadata to a symbol doesn't really seem to it. Kind of just is somewhere in the middle arbitrarily without really a good reason for it, Like, either performance or, you know

JWK: There was a performance issue in the new PR, if you want to get your own metadata, you need to iterate the whole list to find out which one is your metadata. If you use symbol-keyed, you don't have that concern. You just make property access.

KHG: The issue is we don't have enough context really understand where the trade-off between performance and simplicity makes the most sense at the moment. We went all the way performance and the feedback so far has been that that might be too complicated. If if that is the case and I do want to hear what The v8 team has to say about that because a not sure that they would prefer the simpler proposal. Maybe they would. But I think it would be really helpful to get somebody to get some guidance there, where it makes sense to make that trade off.

SYG: Right, so it's been touched on. We reviewed this proposal with language folks in V8 and yes, some of the feedback you have already said which is that it's kind of complicated. There are I think the general feeling is not just that it's complex that it's as I understand, it is not the most technical feedback, but it's it feels like not the kind of thing we should be shipping in an engine or in a language, like the code needed to support the metadata use case. Feels Like a JS library, and we're still kind of not clear and not super sold on the motivation that as you saying your reply on the GitHub issue that this is a crucial use case. Like it's still not clear to me. Why that? Like, even it were a crucial use case? What are we losing by making it the domain of decorator libraries to solve is like is it? Oh, aight Nation. The issue of having me. He's interacting

KHG: So when you say making it the domain of decorator, libraries, what do you mean by that?

SYG: I mean, not having any metadata at all. This also touches on yulia's matter, they know metadata API in The Decorator proposal at all. In that it's not like an extra hook. Step right now, right? It's like you like, you call this decorator. And then you have the ability to call this add metadata function to stash that metadata, Somewhere to be reflected into this is object.

KHG: So okay, then that might where they lack of understanding is coming from without this API. It is not possible to do metadata with without some API. It is not possible to add. metadata at all, because of all the other constraints that have been placed on decorators. The way that metadata was accomplished previously was that the class itself was passed into the decorator, but that was given as an explicit condition of we cannot do that because that allows decorators to change the shape the class. So without that there is just no way for us to be able to associate any kind of information from the decorator that can then be read externally at all, especially for things like class Fields. So we need some way to pass that information along in order to support very basic, use cases, dependency injection. Without some metadata, API dependency injection is simply impossible, and dependency injection one of the most common use cases for decorators. It is has millions of weekly downloads collectively across just just one Greater library for dependency injection. Has 500,000 weekly downloads and you know, if we include like angular, if we include other libraries that are doing this, it is, it is very, very common use case. So we just need something. And you know, this was this was the more complicated approach we could go with a much simpler approach sure, but we need some way to side channel that information. I see I want to talk. I

SYG: have two responses to that one. Thank you for the explanation again that without like, you need something to key off of and because we've explicitly kind of gotten the thing to key off of without some kind of support here to implicitly carry along the key without exposing it directly. That's you need something. So, yes, a simpler approach might work here. I haven't had the time to review the proposed simpler approach yet. So can't really respond to that as for the. And I also want to respond to the dependency injection thing. I'm not sure there's Universal agreement that that's a good thing to enable first of all, in the language and to the Angular thing in particular. I'm not sure how strongly I would take that as evidence that we need this in the language, even if we were to were to have standardized decorators. It's my understanding that angular is not going to be adopting this. If that is the main use case for dependency injection, or at least the main part of the argument for why? It's, it's such a crucial use case. I personally wouldn't put too much weight on that.

KHG: But yeah, if mean there are there are many other use cases as well. I just thought it was the most compelling, glad given like I said, there are many Frameworks that have adopted it and it has many millions. Downloads per week if we want to get into like entire Frameworks. The angular is a good example because they don't just dependency injection via metadata. They do everything the event in that it like literally every angular decorator, just uses metadata. It's basically annotation oriented. So it's like reactivity and many other things also use metadata. But yeah, I happy that you go into more detail of the specific like use cases for sure. And and I do think like we could like I said, ship something simpler here or potentially break this out into another proposal. Although if we were do that, I would really, we would need to discuss like how we, I think YSV’s previous points. in the last presentation kind of comes up that these are two very highly related things and they would need especially if we wanted to prevent the ecosystem like from, you know, fragmenting a bit. We would need some way to make sure that those landed relatively close to each other or Advanced relatively close together.

SYG: Yeah. Before I cede the time to Yulia, I think there is a different. like, I don't want to take it as a given that because a very popular framework does something. We have already met the bar for language inclusion, like that might not have been exactly what you were arguing for, but it sounded kind of like that and for metadata in particular because angular does everything vehement metadata. I'm anything about whether I'm not sure that it is. we should do metadata as part of.

KHG: Yeah, I don't. Yeah. I don't want to over rotate on angular. I mean, there's also there's a lot of Frameworks that use decorators right now, and I think that's really what I mean. There is just decorators is a unique in a unique spot as proposal. It is probably one of the most adopted pre-staged 2 syntactic features - for a variety of reasons, historically. Hopefully, we never have a proposal quite like it again.

SYG: but you may about fragmentation. Is it the case today? That there is there exists fragmentation already do to, for example, the decorators, the typescript of chipped.

KHG: I would say the fragmentation is very minimal because most libraries that use decorators either, use TypeScript’s implementation, or they use Babel’s implementation, which is quite similar to typescript implementation in capabilities and actual like semantics. This is a so in this current form of the whip, without with the metadata intact in the current form. It is so very different, very different right from from, yeah.

SYG: Okay, absolutely. And so so we're buying into fragmentation no matter what, but hopefully what we'll just have like a before standard decorator and after Santa decorated instead of more fragmentation. What's your point,

KHG: right. And and more. So like I guess we're what ideally we would just make a decision on whether something like metadata for instance is going to be included or not And that would allow these libraries to either. you know, adopt the new expect that doesn't support their use cases anymore, but they'll just have to figure out some way around it or, you know, continue on I guess using the previous leadership iterations. where where, I think it could be really - is if we ended up, you know, moving decorators without metadata for instance stage 4 and metadata was still in stage 1, Let's say and ended up waffling around. There for quite some time. We could see a lot of libraries that are in this kind of in between a rock and a hard place, right? Like, they want to adopt the language. They want to be spec compliant. But at the same time like metadata is coming. So do they be spec compliant, but then adopt a stage one feature or do they just hold out and hope that you know, it gets through the process. Like I think it would be ideal if this could be done progressively. And, and I guess the way I would approach this is I would probably as the champion who's primarily working on this. would probably create the separate proposals and try to advance all of them to the same stage as decorators as it is right now. And then, you know, move each one to get to stage three before proposing for stage four and so on. So they would all always be within one stage of each other. I think that would be a pretty reasonable, you know, way to approach that problem and to prevent further fragmentation and confusion in the ecosystem.

SYG: Okay. Thank you. I have said my piece.

YSV: Hi. Unfortunately, I'm going to be going in a similar direction to Shu and just to say that from our perspective, this decorators proposal looks great with the exception of metadata. We would like to see that broken out and get a better understanding of what we really want to achieve. And there are several comments that we have that are really only related to metadata and don't affect the rest of the proposal. So it would be a shame to, for example, block this proposal on this, when could simply, you know, split it out into a separate proposal and have that discussion on that separate proposal. In particular, We have concerns about metadata around private stuff and that's a discussion that we would like to have more in-depth, but I Do think that if we split this in this has a really strong chance of moving forward, so that would be my recommendation.

KHG: All right. just do you think Yulia the methodology I proposed where we would split it in then focus on getting metadata up to Stage 2, or before advancing, the rest of the proposal to stage three. Do you think that would a reasonable way to approach it?

YSV: So you're saying like block and decorators from moving to stage three right now, and wait until metadata for it, right? Yes. Yeah, that would have the same impact as us blocking right now. Whereas, alternatively, this moves forward, then we can see implementation happen in stage, 3 and metadata can catch up, or we can see where metadata ends up. and then we can block decorators from moving to stage 4, at the stage 3. But there will be something done in engines and will have certain feedback from that.

KHG: Okay, I guess this is. I'm new dish to the process for like advancement would we be able to it and it's like would we have to wait another meeting here? If we were to split out part of it before advancing the rest of the proposal to stage 3,

YSV: We have a concept called conditional advancement which based on feedback in the committee. If everything else is fine, that still needs to be established because we haven't gotten to the point where you ask for consensus. Conditional advancement is modulo a certain change in The Proposal it gains that advancement once that change has been made.

KHG: Okay, that’s good to know. Can I also make a quick ask for both Mozilla and V8 then to have some more active engagement in the metadata proposal. We especially, you know, previously we were the decorators proposal. It's all over the place. We were exploring many. Different directions. I could understand not wanting to invest heavily at that point, but it would be nice if In the coming months, we had, you know, some buddy from both teams, join us to be able to help us understand their concerns. And also, to be able to kind of just sync and kind of figure out these problems quickly that it's been a, the feedback loop right now is very long. We would prefer to be able to do make it a bit shorter.

YSV: before I answer you, Mark disagrees with me.

MM: Okay, I agree with you on. I disagree with you on one point which all state took. I think I agree with you on everything. Other than that point, the thing about that, that was discussed about holding this one back from stage 3 until metadata makes it to stage 2. You said that would be as bad as just walking this and I do not agree. I think that, you know, if the champion wants to hold these things so that there. This one stripped back so that the rest of it is aligned in terms of being able to move forward in a coordinated way. think that's fine and it's still improved over Simply Having this thing all together in such large bag that you have to evaluate it all at once. And the other thing about implementers getting experience with it. As far as browser implementers ago, their engine implementers stage 3 clears engine implementers, if I understand correctly, to ship it without a flag. Whereas certainly engine implementers are free to implement things in stage 2 with the flag, or at least just implemented internally to get experience with it. Once it ships without a flag you start to get lock-in very badly.

YSV: Thank you for bringing that up. That is a good point. My thinking was - I know that this proposal is very long awaited and very long worked very really, a lot of effort went into it. So I didn't want to make it the point where because of our concerns on metadata that decorators is going to be like I didn't want to make an effective block. I wanted to give the option of like, no, you can go to stage three and we will implement it if you go to stage 3 while we figure out the details around metadata. Yeah, so that's what I was trying to say, but I totally understand your point. And I agree with that. You're welcome to wait. Like you can certainly wait.

SYG: Now that MM has said - I mostly agree. I was assuming, YSV did not explicitly say this, but I was assuming the Engine stag. 3 thing usually does come with other contingencies, like some agreement that. Yeah, we're not going ship until we get agreement to the part that we split out. the fact that we don't have this explicitly reflected in just stage three straps, two points to some process granularity improvements there, but the hazard MM points out is definitely correct, but the hazard that you only a point out is correct the Stations getting experience with implementing the stage three feature. While it is true that we can try to implement things in Stage 2, many times proposals change frequently enough in large enough Delta's, that nobody actually does that. So stage 3 is still the signal where we start to implement and we get experience. and in the case of decorators in particular, I think it would benefit the engine implementers from getting experience here in that the proposal was redesigned and we are deeply appreciative of the redesign to meet various engine constraints that we set out around performance. And while on paper, it looks like those constraints are now met by the redesign, it is still kind of hard for us to say, with, with any definiteness on until we actually try and Implement which we will do once it is stage 3, so aside from the metadata question, the other stuff that we redesigned? Does it meet the invariants that we wanted to preserve in the engines. We think it does. We would like to get extra assurance.

YSV: Yeah, so this is definitely for the champion to decide like if the champion chooses not to advance. I do want to bring up one example from the past, which was the finalization registry and weak references where we split out, `cleanupSome` and that move directly into stage two as sort of a in that case. It was it was a different goal, but we directly split that out and advanced finalization groups so that we can see finalization groups and groups and how they function in. In the wild before making the decision about whether or not cleanupSome should be attached. So that was a different situation And that was another way to do it, where we fully Advanced something, but there is space for ‘cleanupSome’ to be a, to be integrated later. It may be different situation here. I just want to let you know what your options are. I do think it would be wise to advance this soon because this is a large proposal and it is going to take some time to staff it and for the different browsers to go ahead and implement it. and that may also help inform us about how metadata might work. In particular, like, our concerns are at how this is going to work around private. What if we eventually reify private values, what does that look like for a metadata? So, how do how to decorators get involved with these other fields? Anyway, this is going to be a really large change on classes. So that's where my concerns are coming from as an implementer, but this is your decision.

KHG: Yeah, absolutely. That is good. Good feedback. I guess one another question. I have there that is if we were to split out the metadata could that proposal be advanced or just start in a different stage then stage zero and if so, what would be necessary in order to do that, I guess.

SYG: I think what YSV was concretely proposing was splitting directly to Stage 2, given we have precedent for that, given that accept this proposal, which is in, its entirety in stage 2. So you split out that part of this proposal, and it would remain stage 2. Okay, that basically solves my concerns in terms of like I said, just keeping them relatively close to one another stage 2 is still a signal to the community that this is a relatively likely feature. Again, given discussion given us all, you know, hashing it out and everybody making sure that they're comfortable with it. That it's definitely being seriously explored not just going to be left on the cutting room floor so to speak. So I think that that would be acceptable from my perspective.

YSV: To answer the question that you raised earlier. I can you get more involvement from the browsers? I can't volunteer too much but two of our Engineers are looking at this proposal and are familiar with it. That's where these comments are from. One thing that we are struggling with is a concrete motivation for metadata. Now, it is fine to have this at stage 2 and I understand that there is motivation, for example, dependency injection. but there we will have a couple of questions on that. we can do is probably do an incubator call, and make sure that the browser implementers are present for that.

KHG: Yeah, that would be, that would be great.

SYG: Incubator call sounds good to me.

YSV: When we plan that, I'll make sure that my colleagues are also available to discuss it.

JHX: I just realized that we have already had a Babel implementation since February. Well as well the the README is not updated. Yeah, my real concern is that I feel. It might not have enough feedback from developers. I really like the current proposal but I feel it would be better we could allow the developers do more testing in their production toolcchains, like babel, and I think this is a very important and actually, as the standardization plan in the ring Yeah, it is sad. It will propose was staged 2 know sooner than six months after prototyping. So I like this proposal. I just feel make maybe we need some time for developers to do more testing.

KHG: Thank you. Totally. The readme - sorry. I kind of inherited this proposal. That section the readme has been updated. I think for quite some time so that I think it's just a little bit out of date. yeah. In terms of what we said we would commit to in terms of getting actual feedback. I think this kind of runs into the problem I talked about previously, about decorators being a unique proposal in a unique space. Basically every framework and author that I have talked to has absolutely no intention of testing this out with their communities, until it moves to stage 3 and supports all the functionality that they need in order to move to stage 3. Yeah, so we are kind of, you know, a chicken and egg problem. Like we can't really get feedback from developers who are already like we can't get it from the frameworks and like we have gotten it from Individual developers. We have gotten it from people who tested out the babel transforms themselves. Possibly new Frameworks that are willing to try cutting edge, but I just think this proposal has bitten too many people too many times for them to really invest significantly before it moves to stage 3. So I would love to get more feedback myself, I agree, but I'm not sure that we will be able to.

JHX: yeah. Yes I know. We all are they didn't many if on the collect more input, but recently I discuss the current has current proposal with some developers and found that they still don't know it's happening updating Updating and haven't tried new version and tested. Actually, did I think decorators are very important and many libraries use it, right?

KHG: Yes, like we have, we had many of those libraries that use them on regular calls. We've talked. They have had direct input into this proposal and we have you know, asked if people would use it. I have asked many people, if they would use it and they said that they're not going to like actually use it other than, like, testing it out and small test cases until it is more stable. It's like the same reason typescript is not going to implement it until it is stage3. The reply by Leo who also pleased agrees with that.

LEO: Yeah, just want to support Chris here because I think I know the Creator's has been like for so many years. Tariq Ali has been the longest one in stage 2. I know it's been like in different formats, but I'll do like it collected feedback throughout history. So, this is like their resolution through so many feedback from blog posts, from community feedback, from developers, from frameworks. And even this proposal this format is not super new and it's been like it was presented to see TC39 before coming to this. Plenary like in the previous plenary session. Like this is the shape in this is getting too and we have the intention to move these to stage 3, so I think everyone had like a reasonable time to do their homework. How looking at this? We have the KHG held decorators weekly meetings. Even like when we have, like barely, no one going to these meetings no one. But Chris was available like as an office hours for people to come out and come in and like, say give feedback, we had feedback from Frameworks. I think there is a different bar with that. We might be setting here that like, I'm not sure what the parapet. For the Creator's, there is different from others. This has been like a even if we have changes in everything. We've pragmatic and that's good. I think we have an excellent job here and asking for more feedback. Like by the time this proposal is taken by all the burden. I think we need to step back. I think asking for more feedback. I don't think it's time for it. We can do that in like a different stage or I don't think this should be a blocker by itself.

USA: Okay. Thank you. LEO, then I suppose KHG. Would you like to ask for advancement?

KHG: Yeah, I think I would like to ask for a conditional advancement with splitting metadata out into a separate stage 2 proposal.

USA: Okay, so we have decorators sans the metadata API for stage 3 and then a metadata split, out proposal, for stage 2. Does anybody have any objections?

SYG: I have a clarifying. Question first. I heard that was a PR. I haven't had a chance to look at it yet. Does that PR constitute what you mean by splitting It out?

KHG: No, that PR just proposes a simpler metadata format that would maybe address some of the complexity concerns.

SYG: Okay. So the contingent advancement here is I have a good idea of what I think it means to split it out. But of course, without the actual thing, so I agree with the so I support the contingent advancement. We should get an actual PR up that we can review to see what exactly the splitting Out means I guess. Yeah, it is.

KHG: I can summarize it for you real quick. But I will also do that. It be to get rid of these two functions right here, getMetadata and setMetadata, and it would get rid of `Symbol.metadata` and anything related to `Symbol.metadata`. So, like go down to the metadata section here. [pointing to sections in explainer]

USA: By the way, there's also JHD volunteering to help you out with that.

KHG: Oh, thank you. That's good to know. But yeah, so this entire section would just be removed spec wise, I that actually is a good question. Should I update the spec to have that be a separate proposal. I can do that if necessary.

SYG: Yeah, I was careful to not set a specific deadline. I have a good idea what that means, what you have explained makes good sense to me. And from what I understand of the current spec draft, removal of the metadata stuff that seems it can be done in a fairly clean fashion. It's not too intertwined, with all parts of the spec. Basically. I would say - so, again, after your explanation, I remain supportive and I would like to see it within on the order of like, weeks or something. Don't have to do it by the end of plenary.

KHG: I think I could do it by the end of this week, if not the end of next week for sure. I can commit to that.

YSV: I just wanted to say, I also support this, I understand what this will mean. And, you know, you can just duplicate this proposal directory and create the metadata and just make it a diff off of decorators in order to dip off of the main spec. So you can just have the changes from that, you're going to remove, that would be totally acceptable. acceptable.

KHG: All right.

USA: Great, then. I don't see anything on the Queue. So I think you have consensus. All right. Thank you, everybody. Congratulations. Congratulations.

Misc: Congratulations!

### Conclusion/Resolution

- To Stage 3 on the condition that metadata is moved to a new stage 2 proposal
