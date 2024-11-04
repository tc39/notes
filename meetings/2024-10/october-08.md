# 104th TC39 Meeting | 8th October 2024

-----

**Attendees:**

| Name              | Abbreviation | Organization    |
|-------------------|--------------|-----------------|
| Linus Groh        | LGH          | Bloomberg       |
| Oliver Medhurst   | OMT          | IE (Porffor)    |
| Waldemar Horwat   | WH           | Invited Expert  |
| Chengzhong Wu     | CZW          | Bloomberg       |
| Ron Buckton       | RBN          | Microsoft       |
| Daniel Minor      | DLM          | Mozilla         |
| Ashley Claymore   | ACE          | Bloomberg       |
| Andreu Botella    | ABO          | Igalia          |
| Ross Kirsling     | RKG          | Sony            |
| Devin Rousso      | DRO          | Invited Expert  |
| Ujjwal Sharma     | USA          | Igalia          |
| Dmitry Makhnev    | DJM          | JetBrains       |
| Bradford Smith    | BSH          | Google          |
| Chip Morningstar  | CM           | Consensys       |
| Daniel Ehrenberg  | DE           | Bloomberg       |
| Chris de Almeida  | CDA          | IBM             |
| Mikhail Barash    | MBH          | Univ. of Bergen |
| Nicolò Ribaudo    | NRO          | Igalia          |
| Philip Chimento   | PFC          | Igalia          |
| Mark Miller       | MM           | Agoric          |
| Tom Kopp          | TKP          | Zalari          |
| Ben Allen         | BAN          | Igalia          |
| Jordan Harband    | JHD          | HeroDevs        |
| Sergey Rubanov    | SRV          | Invited Expert  |
| Istvan Sebestyen  | IS           | Ecma            |
| Yulia Startsev    | YSV          | Mozilla         |
| Marja Hölttä      | MHA          | Google          |
| Yusuke Suzuki     | YSZ          | Apple           |
| Keith Miller      | KM           | Apple           |
| Michael Saboff    | MLS          | Apple           |
| Justin Ridgewell  | JRL          | Google          |
| Andrew Paprocki   | API          | Bloomberg       |
| Jesse Alama       | JMN          |                 |
| Jonathan Kuperman | JKP          | Bloomberg       |
| Shu-yu Guo        | SYG          | Google          |
| Yilong Li         | LYL          | Alibaba         |
| Jack Works        | JWK          | Sujitech        |

## Approval of previous minutes and adoption of current agenda

Presenter: Rob Palmer (RPR)

RPR: Can I check, do we have—check the consensus appraisal for the previous minutes? No objections.

RPR: The previous minutes are approved.

RPR: Okay. And then for our upcoming meeting. So we have the current agenda published. So do we have consensus to adopt the current agenda?

YSV: We have added extra time to this meeting. Is that right?

YSV: I have a concern about the agenda and how much we have in it. As well as, the fact that a few things were added quite close to the deadline, which resulted in us being unable to fully review everything. So we will have to hold back on consensus on a couple of items because we weren’t able to appropriately review. I would like to highlight this: so that maybe we can discuss how to do this in the future in terms of ahead of time, recognizing that a meeting is too full, rather than extending the time.

RPR: Okay. Thank you, YSV.

RPR: All right. So I believe that we are adopting the current agenda and we will have those conversations later.

RPR: So for now, let’s move ahead to the secretary’s report. Given today by Aki

## Secretary's Report

Presenter: Aki Braun (AKI)

- [slides](https://github.com/tc39/agendas/blob/main/2024/tc39-2024-042.pdf)

AKI: SHN had planned to be here, something came up that prevented her attendance and she’s heartbroken. She really likes attending these meetings. I am presenting the secretary's report, but only because SHN is unable to.

AKI: Quickly, we will go through new ECMA projects, exe-com what is coming up there and I will chat with you about TPAC. We have a few things to review of the annex slides to make sure we are aware of.

AKI: If anybody has heard anything about WinterCG or TC55, this is super exciting. The Web Interoperable Runtimes Community Group from W3C, Luca and Oliver and a handful of TG delegates along with some other people, discovered that they were not able to publish a standard as a community group. And trying to figure out the best way to move forward, the group decided that it made sense to move to ECMA. So we have a scope to describe the group will be standardizing and maintaining a minimum API for web servers to support APIs that allow JavaScript developers to write basically isomorphic JavaScript, write once, use in client, use on server. And there’s more to it than this. I think this is a very reductive description, but it’s a different type… They will be presenting to the ExeCom in a few weeks or SHN will be presenting the next ExeCom and we look forward to moving forward and publishing standards or technical reports.

AKI: We have a TC56 proposal. A high-level shading language. HLSL which is currently in a—in the perfect place for standardization is what it is. So we are looking at using the royalty free patent policy that ECMA developed to create this technical committee and publish both the standard and a standard library for HLSL and also do a lot of liaison with other bodies to make sure as adopted and distributed and used. I don’t know how close that is to being concrete. I think—it seems very promising.

AKI: All right. The ExeCom. This is in a couple of weeks. The 22 and 23 October in Geneva. The TC39 chairs will be preparing a report for the ExeCom that they go through every time. They are—there will be the confirmation of chairs and all of the different leadership throughout ECMA. And there will be elections for the ExeCom. So if you work for an ordinary member and you want to go for president or vice-president, consider doing that. ECMA needs leadership to understand the breadth that we do and a TC39 delegate is the perfect person for that. If you don’t work for an ordinary member, you can still participate in the ECMA ExeCom, there are 4 positions available. I strongly encourage everyone to throw their name in for the ExeCom. It’s good to see how ECMA works and that your dues money is invested responsibly.

AKI: A week before last I went to W3C TPAC 2024. Went on a massive charm offensive. Talked to a lot of different working groups about all sorts of things we can be collaborating on as standards bodies without competing or stepping on toes. There’s a lot of that—we have a Venn diagram for us to be make to talk to each other. The obvious one is the i18n working group and TG2. There’s not enough overlapping participants. Right now, we are seeing how we can get together and make sure that we are communicating and we are sorting plans together and not trying to standardize something that maybe gets in the way of the other group’s plans or understanding. That may look like joint meetings. It may look like some sort of regular communication. I am not sure. It is something that I am actively working on. If anybody has opinions on that, I would love to hear them. Beyond just the I18N working group and the TG2, there’s also other sorts of impacts we could be having on W3C. They want to hear about security, work with us, on security concerns. They want to hear from us on our opinions on sustainability, environmental sustainability. Think, preventing E waste and power consumption and sort of all sorts of stuff we have the able to influence, at our level. There’s a lot of people who are really curious and excited by TG5. Every time I mentioned it to somebody, they said tell me more. So I look forward to seeing what TG5 does and finding ways for us to get there successes and projects back to W3C and see if there’s collaboration we should be doing there

AKI: One last thing that I am going to save talking longer about for a future plenary is that W3C would like very, very much for us to consider horizontal reviews. That means, when they are publishing a standard that has any potential overlap with ECMA’s work, they want us to take a look at it and say, "that doesn't make sense" or "I have a concern here." They will reserve the right to say, "I am glad you said that, but that is something we can’t change". They would love the opportunity to review our standards before we publish them as well. And if they bring up a concern they have, we may wish to integrate their technical contributions (after signing the appropriate RFTG paperwork), or we may wish to say "thank you very much. We will be moving forward". Horizontal reviews would contain no obligations, contractual or otherwise. Basically, we don’t want or need to conflict with the web platform. We can discuss this further in a future plenary.

AKI: Some reminders: the invited expert policy is pretty clear, but I want to make sure that everyone knows what we want the process to look like in the future. It’s very important to us that we are able to invite experts when appropriate, and it is something we’re timeboxing. Timeboxing so we don’t forget and end up with an IE representing a company that should be a full member. So there’s no reason to think that we are actually going to change allowing invited experts in any sense. But it’s going to start being an annual thing, where at the end of the year, Samina will just chat with people and say, hey. Are you still active? Yeah? Is your company interested in being a member? No. All right. Having those conversations. It will be an annual review, but only in the sense of making sure that people are actually still engaged.

AKI: RPR touched on this, but a reminder of the code of conduct. I think really importantly, when we disagree, try to understand why. Code of conduct exists for when things go wrong. Right? I don’t doubt anybody’s desire to make sure that we have a professional and pleasant experience. Sometimes—sometimes disagreements happen. Let’s make sure we are not afraid to bring in the code of conduct committee to work things out.

AKI: There’s some updates to the list of ECMA documents that you all may share about. If there’s a GA document that you want to access, we should be able to get it for you. We are looking at finding ways to make access a little bit more smooth, a little bit more fluid.

AKI: TC39 specific documents that have been published recently, there’s the secretary report from the last meeting. Some contributor license agreement responses. We have minutes and slides from the last meeting and the venue and agenda from this meeting

AKI: In the GA documents, there are the results from the postal vote on clarifying bylaws and approving TC55. The initial vote was a no. The TC55 has updated their scope and updated the program of work, and I think that—I am pretty sure we have resolved any concerns that were there. There’s also highlights to—if you want to see how ECMA works with our standards bodies and especially beyond W3C, which a lot of you understand, you want to check that out, and the next GA is going to be in New York at Bloomberg.

AKI: I think that’s probably all I want to chat with you. RPR already covered the next slide, which is the next TC39 meeting. And the slide after, the upcoming GA, which is in New York in December and the upcoming ExeCom meeting in Geneva. Any questions for ECMA?

### Speaker's Summary of Key Points

1. New ECMA Projects:

- A collaboration with the W3C Web Interoperable Runtimes Community Group WinterCG is underway.
- Proposal for a TC56 to establish standards for a high-level shading language (HLSL) has been initiated

1. Upcoming ExeCom Meeting:

- Scheduled for 22-23 October in Geneva

1. Collaboration with W3C:

- Ongoing efforts to build cooperative relationships with various W3C working groups.
- Consider "horizontal reviews" where ECMA and W3C review each other's standards to prevent conflicts and promote sustainability in technology.

1. Invited Experts Policy:

- Annual review to confirm engagement and membership interest of invited experts.

1. Code of Conduct and Documentation:

- A reminder of the code of conduct, particularly the importance of constructive disagreement.
- Emphasis on documenting summaries and conclusions for agenda items to facilitate future reference and accurate minute-keeping.

1. Upcoming Events Dates Reviewed

## 262 Editor’s Update

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/1HUMRtYebcfUI6wAIyVokeYxCRz6CEgJkkt2jvNPoRLA)

SYG: We merged the fully-defined `Math.sqrt` which reached consensus at the previous meeting, to make it not implementation approximated anymore, but to fully define it. We had two normative fixes merged. One was the spec security bug in async generator. #535 in the reflector, it was private, to fix a bug in the TLA machine, that fixes a hang. That’s also merged.

SYG: The only editorial changes is we removed the notion of a language value type as a first class thing. You should not talk about language value types and pass them around. If you need to do things with them, we did a look over the document, and most of the operation that is done to type is to compare two things that have the same type. There’s an AO for it called SameType, use that. Do not use the phrase "the type of". Instead, directly say, "is an X" or "is not an X".

SYG: And we removed the AO that reflects the type because the type is no longer reflected. We just directly use the type. For spec authors, if you need to update any of your spec drafts, please do so.

SYG: We integrated spell checks into the PR process and I will turn it over to MF to talk more about this.

MF: Yes, so you may notice, if you submit a pull request to the spec, that there’s now a GitHub action that runs spell checking on the pull request. And it will look like this. In line in the diff view, it has detected a spelling error. I want to go over how this works to help you understand and resolve it.

MF: So the way this works is that the action checks out the previous commit, and looks at all of the words that are used in the document. And by words, I mean it also splits apart things that are in camel case into its own word. That’s basically its dictionary. That together with the standard Oxford English dictionary.

MF: It uses that as its dictionary to check against your change. So if you are using a new word that has never been used before, or has identified a problem that maybe is, like, an abbreviation that has not been used before, it’s a hint to how that word is used elsewhere in the document. It doesn’t mean it’s wrong, but you should take a second look at it to see if maybe there’s a convention we use or a different spelling.

MF: I think that’s all you need to know.

SYG: Okay. This is upcoming work that we carry over from slide deck to slide deck. No additions here.

SYG: And that’s it. Thanks.

### Summary/Conclusion

In addition to ongoing editorial and infrastructure work, the editors have landed the following normative changes:

- [#3354](https://github.com/tc39/ecma262/pull/3354): fully define Math.sqrt
- [Reflector#535](https://github.com/tc39/Reflector/issues/535): guard against reentrancy in AsyncGenerator.prototype.return
- Landed as https://github.com/tc39/ecma262/commit/4cb5a6980e20be76c648f113c4cc762342172df3
- [#3357](https://github.com/tc39/ecma262/pull/3357): Fix TLA hang (obvious spec bug)

## 402 Editor’s Update

Presenter: Ben Allen (BAN)

- [slides](https://docs.google.com/presentation/d/1Fx6ikx0rAb3XMos4fjA8QJ-8QD2yjQJOW3YDCGXu91k)

BAN: So some—we have a number of editorial fixes. These are the closest to interesting. No, actually interesting.

BAN: We have been doing work to update the style guide and stuff to better adhere to the style guide. So there’s a lot of behavior in 402 that is implementation and locale-dependent. And so previously, the phase “implementation defined and locale-dependent” was defined in several different places. It’s mostly we use the "ILD" initialization which was defined in several places. Also implementation and locale system-dependent behavior that was also the ILND was also defined in several places. We are now defining it in one place and linking it, which improves readability a great deal.

BAN: This is a small one. Most of the Intl objects had a slot named relevant extension keys and `Intl.locale` which is not an Intl service constructor, which until recently had a slot named relevant extension keys that behaved differently from all the other Intl objects. ABL has written a PR which renamed that slot to locale extension keys. Because it kept catching people out, including me, so I am really glad about this one.

BAN: This is a smaller one. So previously, 262 had standardized on using HTML character entities for goodly number of symbols. So Laguo and M dashes and forth, 262 it used those. A couple of years ago 262 used the unicode characters. We updated 402 to that standard. We have a number of PR coming down the pike. In the interest of time, I will go through them quickly.

BAN: We have a spec bug, whereas specified, RelativeTimeFormat, and DatetimeFormat ignored the numberingSystem used. If you used this, even if you did, it's the Latin character 2.

BAN: There’s a spec bug, we fixed that, no engine is affected. Some work with the style guide preferring—normative PR is related to that. And a couple related to how currency is formatted. The sort of interesting one is one that got more time to discuss about what our source for data on the minor units should be. Spec currently says ISO-4217. Engines vary. Some use that, and some use CLDR. The two data sources are used for different things. We have a PR. We will use web reality as a source for how many digits after this for implementing currency. That is all. Thank you.

### Speaker's Summary of Key Points

- Several spec bugs fixed,
- Updates to style guide and editorial changes to adhere to style guide
- Editorial changes to match norms established by 262. PR to make ISO-4217 a recommended rather than normative data source.

## 404 Editor's Update

Presenter: Chip Morningstar (CM)

CM: JSON, represent.

RPR: Thank you, CM. The first two-word status update.

## Test262 Status Update

Presenter: Jordan Harband (JHD)

JDH: So all of the resizable ArrayBuffer tests are imported out of the staging directory in the main test corpus. We are working on reviewing more than 400 tests for explicit resource management. And `Atomics.pause` has test coverage.

JHD: So that’s the only specific thing I had to say. In general, please help write tests and review them.

RPR: Thank you, JHD.

## TG3 Report

Presenter: Chris de Almeida (CDA)

CDA: TG3 is meeting about security things. Please join us. We don’t have anything to request consensus for. There's another thing on the plenary that SYG will be talking about.

RPR: Thank you, CDA.

## TG4 Report

Presenter: Jonathan Kuperman (JKP)

- [slides](https://docs.google.com/presentation/d/147UbvCUAoW07vkQjYKJrf8SqqmCnmicvVBwEu__lOu4/)

JKP: But so last time I presented, I talked quite a bit about big plans we had for the future, new features like the scopes proposals. This talk is not about that. This is the goal we had for 2024. We’re not shaking things up or adding any big features but to add a foundation for the layers. We took the living Google document for source maps and started really going through and networking with a lot of the source map generators and consumers and having meetings and reading through code and figuring out what we can and can’t say. What I am getting at here is, this goal for 2024 and the thing we’re asking approval for is not new or breaking changes. It is like a lot of specification text documenting the current reality of source maps. Another goal we had outside of the specification itself was robust test coverage and validation. We will talk about it. We have made progress on automated tests running against all of the devtools and source map validator against source man generators. The big thing with the test, we have the TG4 test suite, on the map tests. We broke everything out in the testable things and created a test case for each one of those things

JKP: This automated suite is integrated in Firefox and runs part of the CI. We have a branch into Chrome which is running, waiting on legal approval for this. But this has been already integrated we have got local patches in the repo, which make all devtools have the test passing or a few expected failures

JKP: We have been using this as part of our—like part of—requirement for all new features. We work on the scopes feature before we present that to plenary, we will have full test coverage, mirroringing what we do in TG1

JKP: So, yeah. For the milestones, we have gone through working with the devtools to make sure they implement 100% of the feature. An example is we have had help from a number of folks getting WebKit to support the ignore list. This was the first TG4 feature, it used to be the—used x_google_ignoreList and we moved it over. That’s really gone well. We had a stable point where we just wrote everything down. Tried to get everybody all on the same page.

JKP: So the final specification, we have this link here. This is the snapshot we are asking for approval on. This snapshot will point to the living draft, which is the main branch of the—I don’t know if I am saying that right. It will have a recommendation at the top of it that—for people looking to implement a source map to check out the living specification. We will update throughout the year. The ignore list, we marked it as deprecated, but not removed it. And suggested it be removed to the new ignore list.

JKP: We have one PR pending—I will skip the second one. A lot of editorial improvements, being more clear in our descriptions and write specifications-style algorithms for how to do things. One example is that we have specified how to decode source map and how to extract the source mapping URL.

JKP: With the mappings and annotations, that one has not yet merged. It’s pending a final review right now. Part of this request would be assuming reviews go through, we would like to include it. This is the 122 PR that I have linked here, yeah. So what happens after the approval? To get approval, notify the beginning of the 60-day opt-out period. Members have a chance to review the contributions and opt out, if they decide to do so. It’s under a different license and licensing the original work done by Google and Mozilla over into ECMA’s modified BSD. If we get both of those, we ask the Ecma GA for the final approval, and then if we got that, publish the edition so it might be 2025 instead of 2024, depending on how that works. And also working with AKI to take our generated bikeshed files and turn them into the PDF generation for the spec.

JKP: Looking forward, a bunch of great work on the scopes proposal. It’s in a good state. Looking for final implementor approval and get the specification text written. It should merge with Chrome and hopefully Firefox devtools implementations on plenary. We want the TG4 test suite to be, legal approval from Chrome and the upstream implementation for WebKit and adding more support and other featuresThat is kind of my update. Seeking approval on the linked thing above, which does not add any large new features, but is a lot of text documenting the current state of text maps.

RPR: Okay. There are any questions for JKP?

MM: So I am unclear about what the—what the normative impact of the approval is that you are asking for. Does that mean that the—first of all, I like the sequence you are going through. It’s a very nice process. I was unprepared to make a normative approval decision on this, at this meeting. Certainly have not reviewed it. Are you asking for an approval that the process you have outlined moves forward, as you have stated it, or is there content such as the written down codification of existing practice that you are seeking to make normative?

JKP: I am not 100% sure I understand and maybe if NRO is on the call could respond. The thing that we are seeking today would be to start the 60-day opt-out period. Saying we have cut this branch. This branch is what we, like, you know, to be approved by the GA. I think my struggle to answer is being new to the TC39 process. But my understanding we need to present something at some point that would get consensus approved from TG1, which starts off this process saying we have this artifact to become the official specification, and to start this legal process of 60-day opt out and and that goes out, taking T we are looking to start this—start this process.

MM: So specifically, the approval is not asking that any technical content to be approved to become normative today? It’s that the process you have outlined is a good process to go forward, which I am very happy.

NRO: Okay. So the list has had normative changes. The last primitive change was many months ago. And the rest of work we have been doing is just clarifying previously unclear parts of the spec. This is similar to the approval we usually seek around—for ECMA262, we needed to say this is done. Let’s now, as a committee, take to ECMA GA for publishing. So we need now to understand saying TC39 is happy with this document being published as a spec.

RPR: So to be clear here, Mark, John is proposing the proposal, but this is also TC39’s confirmation point that this specification is ready to proceed.

MM: I am not ready to approve that the specification itself is ready to proceed. I was not aware that there was going to be a normative approval request on this asked for, at this meeting.

DE: MM, this has been mentioned at several past meetings, asking for this normative approval. We have been working towards this goal for, like, 6 months this year. Still member organizations will vote on whether to adopt this standard at the Ecma GA [General Assembly] meeting. This is not the final adoption of it. But it is TC39 recommending it. If we don’t meet this goal, then we are delayed by 6 months. I wonder if you have suggestions for how we could have explained this more clearly?

MM: You said that you did state this previously, so I’m—I apologize for having missed that. That’s my fault. The—it doesn’t—so let me just clarify. It does not need to be approved today to make that goal, it just needs to be approved at this meeting. So you could give they --

DE: That’s right.

MM: A couple of days to look it over, and then voice an opinion on Thursday, is that correct?

DE: Yeah, that sounds great.

MM: Okay.

NRO: Yes. Specifically the last day we have to send the notice to the GA to a six-day period I think Thursday evening, because the GA will be on December 11th and we want to do it two months in advance.

MM: Okay, okay, thank you. I’ll have something to say on Thursday, thank you.

RPR: Thank you. So one other clarification is that this is all about tooling and things that does not happen at run time.

MM: There are interesting security issues that have been pointed out about source maps. I want to look it over with regard to some of those, and in particular, the ours source—I mean, it’s been a very long time since I looked at the technical contents of source maps, so what I’m about to say might no longer even make sense. But the last I looked at it, it could include URLs to fetch more source maps, and where there are those URLs, somebody could be operating a debugger that was expected to deference to URL from its location from behind a firewall runtime, and local debugger behind a firewall is forced to—is caused to fetch from. Now, you know, with many other things that fall into that, it’s an HTTP get, not a post, but still, i’d like to just take a look at the whole thing organically with regard to various security issues.

NRO: That specific thing has been removed. So you probably don’t have to worry about that.

MM: Okay, good. That was actually my main worry. Okay, great. Okay. So without that to worry about, I’m much more confident I’ll have good news on Thursday, but I’d still like to wait until Thursday.

CM: So I think I also missed some stuff here. And this is more of a question about process, I don’t have any particular concerns or objections about these specific standards efforts. But it’s just interestingly different from the way the TG2 process works, where essentially all of the internationalization stuff ends up getting run in excruciating detail through the plenary, and I don’t think we’ve seen much, if any, of the detail of the source maps stuff running through plenary. I don’t have any objection to the way you’ve done it, I actually prefer it. But I’m curious why the process is different and if this different process is acceptable to everyone where the people are actually interested in the source map stuff just engage directly with the TG4 process, why the same logic is not applied equally to TG2?

NRO: We discussed this when TG4 was created and the reason for deferred process and it’s not something you can do within code. It’s just something that is implemented in, like, in develop tools that live in JavaScript execution, and there was—the committee was happy with giving more freedom for this reason to the TG4, also because most delegates were not as, I’d say, interested in source map as what TG2 does, so this has the result of not taking too much committee time.

CDP: Yeah, I just wanted to mention, these are all fair comments, but they did specifically bring this to committee and get consensus for this method of working.

CM: Yeah, I’m not sure how I missed that. As I say, I don’t have any objection, it’s more of a, wow, couldn’t we do that for internationalization too?

DE: For internationalization [ECMA-402/TC39 TG2], we discussed this as well at previous meetings when this was on the agenda and we decided that, because it has this normative content for JavaScript itself, and it’s often good to get the reviews in plenary. So for TG2, we seek consensus for all stage advancement and normative changes in plenary.

DE: I wanted to ask Jon, do we need to block on recommending this to the GA for standardization until the tests are relicensed? I mean, not all Ecma standards have conformance tests.

JKP: Sorry, can you say that again? Do we need to block on GA until?

DE: Until the tests are relicensed? I mean, making sure we have the tests before standardization is good, but it’s not, as far as I know, a general requirement.

NRO: License problems is not about the test, it’s about the spec itself.

DE: I see. Yeah, sorry.

NRO: Because it’s the comments and we are trying to re-license it to BSD, which Ecma uses. I—given that there is the 60-day time period in which company cans say we are not okay with content being contributed by us, I don’t think we need to block on that, but I’m not super sure on how these rules work.

DE: I think Ecma’s BSD license is usually used just for software, and not for the spec text. So let’s be intentional about this. Yeah, I’m hopeful that it’s, as you say, because the contributing organizations are all present, then it should be okay with respect to the spec text.

JKP: Yeah, I think that was why I was confused. It’s not the testing, it’s the spec text. As to not take up the whole committee’s time, we can follow up. It seems okay and while we’re here, I’m happy to speak with people from Google and Mozilla and make sure we’re doing the right thing here.

KG: (from TCQ) suggestion for the future: bold/otherwise call out normative TG updates on the agenda

RPR: That seems easy to address. And that’s the end of the queue. Just given that we’re still in this time slot, do we want to call for consensus modular Mark’s check the next time? We may be able to address this without even coming back.

JKP: Yeah, that would be great for me. At least either way to know where we stand on it, what’s left to do. That sounds great.

RPR: So this ask for continuing is subject to the PR that still needs to be merged. And is also conditional on Mark’s consent later this week.

JKP: Yeah, that sounds great. So, yeah, I guess in light of that, I would like to ask for consensus on this modulo, PR and Mark being able to approve it during this two-day plenary.

RPR: You have positive support from Chris. And no objections. So, yeah, congratulations, you have conditional consensus. Thanks.

### Speaker's Summary of Key Points

- JKP presented the work done over the course of 2024 for source maps including enumerating all of the changes and improvements made to the specification.
- JKP asked for consensus approval and received feedback that committee members like MM would like a little bit of extra time to look through the specification.
- Going forward, TG4 will explicitly call out every normative change they make to the specification during their regular plenary status updates
- At the end, JKP asked for conditional approval modulo the one pending PR, giving us a chance to work with MM on an editorial fix and then will come back at the end of plenary and ask for official consensus then.

### Conclusion

- Consensus on changes and improvements to the spec, pending one [outstanding PR](https://github.com/tc39/source-map/pull/122) and MM's approval.
- In the continuation we received MM’s approval, added an [editorial note](https://github.com/tc39/source-map/pull/137) to the [specification](https://github.com/tc39/source-map/tree/2024).
- TC39 will refer the source map specification to the Ecma GA for standardization, beginning the 60-day opt-out period

## TG5 Report

Presenter: Yulia Startsev (YSV)

- [slides](https://docs.google.com/presentation/d/156wJbnrIEt-hbkhh0paVAIjrG9L7oe_R9z211yS0bIA/edit?usp=sharing)

YSV: Okay, so TG5 is our TG dedicated to experimentation. So we have regular meetings every month, and well, we’re trying at every TC39 plenary, we’re trying to have a colocated workshop on the topic of language research. We have a workshop co-located with this meeting, it will be at the University of Tokyo. If you’re interested in participating or observing, please come and let MBH or myself know. This is the agenda. We have a couple of topics on syntax and interactive programming. And there will be a keynote and panel discussion with TC39 members. It’s exciting because we’re going to have the folks from KAIST also come and present the work that they’ve been working on the WebAssembly standard with this new project they have called SpecTec, so that’s going to be quite exciting.

YSV: Now, in case you’re unfamiliar with TG5, what we do is we try to bring work from academia to the industrial context of TC39. So we have scientific studies and proposals, we have development of methods, approaches and tools to aid understanding, design and specification of the language, and also to consider TC39 and JavaScript within the larger ecosystem of programming language design, specification and standardization. We have an issue list, and I’d like to invite everyone here who is a TC39 delegate to populate our issue list. The issue list is important because we have collaborations with universities and the researchers and students working at those universities are unsure how to get started with helping TC39 do research and good scientific work. So if you add things to our list, then a researcher might come along and pick them up. Now, what you see here is my brain dump of stuff that I know has been going on. It’s incomplete, and I think that having the input of the people in this room would really help us bring more interesting projects to, you know, bachelor students, masters students, Ph.D. students, postdocs, professors. And it will also help us build a collaboration with those academic institutions, which are interested in working with us.

YSV: One that I’ll call out in particular is the usability studies. I think this is what most people here are familiar with in terms of TG5’s work, looking at, for example, syntax. That’s a common one. We currently have a study that is being run by a professor from UCSD. A study is currently in planning and just gotten approval, like, ethics board approval. I forget exactly the name of that for MessageFormat, so in the past, we’ve had concern about the maturity of MessageFormat 2.0. So they are going to do a study to validate whether or not the MessageFormat 2.0 specification does what it needs to do before we look at integrating it into the web platform, so that’s exciting. We had a study being run on Do Expressions and it was paused because the undergraduate student left. And that does happen sometimes. So we are working with students, and the work sometimes doesn’t get finished. But I think that this is something that can be resumed by another student. And we have several studies that we’ve run ourselves in the past. And we can use that as a model for guiding future work done by students. So this is something that I think everyone is familiar with from the side of research, but that research space is much, much larger. And, again, take a look at our list and come talk to us if you’ve got any questions. That’s the issue list. And that’s it.

### Speaker's Summary of Key Points

- TG5 workshop will be this Friday, see slides for the agenda
- Please add to our [issue list](https://github.com/tc39/tg5/issues), so that researchers will be aware of areas of interest where they can collaborate with TC39

## Code of Conduct updates

Chris de Almeida (CDA)

CDA: We do not have updates from the code of conduct committee, which is exactly the way that we like it. So, yeah. Very quiet. Just a reminder for anybody who is interested in joining us on the code of conduct committee, please reach out to one of us. Thank you.

## Iterator sequencing for stage 2.7

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1Z5Bz_4xpwRX7tjwmrMakrj3_II8Qy40fnAq-TrPdt0U)

MF: We are asking for Stage 2.7 for iterator sequencing. I typically start with a reminder of what we’re trying to do here. With iterator sequencing, we are trying to give a way to create an iterator from 0 or more iterables where that iterator yields each of the values that each of those iterables would yield in the order that they would yield them. So we’re trying to concatenate iterable values together, essentially. The last time this was discussed, I don’t remember when that was, we ended up choosing from a variety of solutions. We chose this one, which is an `Iterator.concat` function, that takes an iterator of iterables as a parameter. I’m going to go over some of the design decisions that we made during this process.

MF: Okay. In line with our new normative conventions, we reject all iterable primitives. If you recall, we recently added that to our how-we-work document of our normative conventions, so only non-primitive iterables are acceptable parameters. We also, throughout this process it was our goal to allow you to conveniently interleave non-iterable values into your iterable—to kind of append just that value. And we talked about it in the last meeting. When we came to the decision to go with Iterator.concat, we simultaneously decided that it was sufficiently usable to just put that value in square brackets to interleave it. This creates an array, and that array is iterated with the value in line with the rest of them. We decided to drop the infinite inputs use case. It was not really as common, and there are solutions for that, if you really need to. You can flatMap the identity function and that was good enough for something that is so uncommon.

MF: A change since the last time that this was discussed, though, is that we now eagerly validate all parameters. It was the case that if you had some number of iterables given as parameters, and if you don’t reach a parameter that was not iterable, you would just not get an error. For instance, if you’re concatenating an iterable before something that’s not iterable or if you just don’t advance it far enough to reach there. Now it is the case that all of the parameters are checked to be iterable before we return your iterator to you. So invalid inputs show up immediately. And here is just a reminder of some of the other solutions we considered.

MF: So we have spec text. This is what it looks like. I’m not going to go over it right now, but you can view it on the repo. So there is, to my knowledge, a single remaining point of contention. And that is the handling of non-iterable values. So I just explained that we do this eager parameter validation, and when something is not iterable, we throw before we return an iterator to you. I’ve gotten feedback from one delegate that they would like this to not throw. The behavior that’s expected is the value—that the second line, basically acts like the first line. I don’t like this suggestion. I think that having the second line behave like the first line is not a reasonable behavior, and I’ll get into why in a moment. I would think a possible okay behavior would be to have it just be treated as an empty iterable. You know, adding no value—contributing no values to the resulting iterator. But that’s not what’s being suggested.

MF: We have a lot of precedent for this. I think the strongest argument is that we already have a lot of existing places that accept iterables. We have for-of, we have positional destructuring, we have spread, `yield*`, probably others, and those all throw when they see non-iterables. So I think that argument alone should be sufficient to make this decision. But I’ll go over more reasons why. So if we went this route, you know, ignoring precedent, I think that it would be problematic because we would run into cases like this that say somebody defines some type of their own, some custom type. This one is a Maybe type. You can ignore those first three lines. We just have some Maybe type. And on that last line, that person is trying to append it to some existing iterator. And that’s—that works. That’s how the language would work in this scenario. If the author of that Maybe type later makes the Maybe iterable, this does a different thing. You no longer are appending that maybe value to this iterator. You’re doing whatever that iterator value is, which is probably producing a value if it’s Just or producing no values if it’s Nothing. I think this is a serious foot gun. The behavior that this author was looking for was to just append the Maybe. They could have put it in square brackets, but this worked consistently until it didn’t. And I think that that’s not the way we should design the language.

MF: It’s been suggested that there is precedent for treating—for having an API in this style. One suggestion is Array.prototype.concat. I think this is not actually a valid precedent. We don’t have the same issues with Array.prototype.concat because while non-iterable things can get `Symbol.iterator` from an update, non-arrays don’t become arrays. We’re not going to talk about Symbol.isConcatSpreadable. We ignore that for the most part, even within this committee. Nobody knows about it. So non-arrays just don’t become arrays, so you don’t run into this same foot gun with code changing later. It’s still not suggested that you should write your code like this, but you don’t run into those updating kind of errors. I’m going to skip this slide for now, I don’t think we need to go into thenables just for time. Something I do think is precedent other than all the language features I mentioned that take iterables, the strongest precedent is that, you know, we’re basically defining iterator concat like this. It’s just, you know, the mental model should be that it’s just looping over all of the passed parameters and doing `yield*` on them. We have `yield*` and yield. They are separate things. We didn’t add just `yield` to the language and have it take non-iterables and just produce that non-iterable. If we had, that would be, you know, a valid thing to point to as precedent. But instead, we did not, so it is actually precedent in the other direction for throwing when we see non-iterables.

MF: So this is our path forward on this last point of contention. We have four options that I’ve identified. Maybe there are others. The current spec text is it throws. As I said, we validate all parameters eagerly. So when we see a non-iterable, we will throw instead of returning an iterator. A previous version of the spec—possibly the last time those in the room right now have seen it—was when it produces an iterator that only throws when it gets to that point. So that would also align better with that naive generator that I have just shown on the slides. That’s also fine behavior in my opinion. We would drop the eager parameter validation. The option number 3 is the one that was suggested and the one I disprefer, which is yielding the non-iterable value. And option 4 is also an option, but it does not follow precedent within the language, and that’s yielding nothing for that non-iterable value.

MF: So depending on how we move forward, it was requested that we might want to choose a different name to avoid any hint of a relationship to Array.prototype.concat. And I have some options for us here. We don’t have to look at them right now because we don’t know if we’re going to need them, but we can use this as a reference later if we need to get into that discussion.

MF: That’s all I have. I would like Stage 2.7.

RPR: Before we ask for 2.7, can you bring back the options slide? JHD is up first.

JHD: Yeah, I wanted to address a few things you said. If you could step back a few slides. Okay. We’ll start here. So first of all, if they behave like empty iterators, that would be a massive footgun and horrific API design. Throwing is infinitely better than that; I don’t think that’s an option as all. As far as principles, I think you’re assuming principles that aren’t universal, and given that using array concat in exactly this fashion is actually somewhat common, albeit obscure, like, that has been an idiomatic thing for a long time, although certainly never a widely known one. So I just don’t agree that it’s unprincipled.

JHD: As far as the existing places, none of those are—many of those, at least, are not combining iterators. They are just iterating iterators. So, for example, I think all of those cases take one iterator or iterable. And none of them take more than one. Like, you `for-of` one iterator and you destructure one of them. Spread is—they’re all applying to one iterator, so you talked a lot about precedent, but there’s no precedent for combining iterators at all, so I don’t think any of those things are, like, knockout precedents for this, one way or the other. Because this is a combinator, these are not.

MF: I can respond to that point. I think spread and `yield*` are precedents. You can do it multiple times within an array initializer and that is analogous here, because you spread one of the parameters to Iterator.concat, you spread each of the values in an array initializer. Similarly with `yield*`, you `yield*` over one of the parameters on `Iterator.concat`—in the generator implementation. You are applying it in the same way.

JHD: I can see where you’re coming from, but in the array spread case where you make the array literal and you’re spreading many iterators in, you can in fact, and people very frequently do, many times more than with array.concat, combine iterables in that, because the spread syntax applies to one item at a time. That flexibility exists because it’s needed. This proposal's API method does not have that flexibility because it’s taking an argument list. So it’s just not a clean mapping in the same way. But I’m also not saying that those places are unrelated. They’re clearly related. I just think that there’s—it’s not like, oh, because of those things we must do this, because they’re just distinct. They apply to one iterator iterable versus applying to multiples, I think is just—it’s distinct enough that we have flexibility here as a committee. But if you wanted to go to the next one, so adding support for a new protocol to an existing class is always a breaking change. Unavoidably, period. There’s no way to avoid that, because someone could have already been using it in a code path that could branch on the presence of that protocol and it’s the same as if you add a new method to a class, that’s potentially a breaking change. The difference is if the method or property you’re adding is not part of a known protocol, then there’s no intention or likelihood or expectation that someone is going to be branching on it, and so it’s reasonable and common and typical to call that a semver-minor change. If you add a new property called `.then` to any object, that’s a breaking change because it’s a known protocol.

MF: I agree with you on `.then()`. I skipped that slide, but we can talk about it. `.then()` is a case where definitely you can not add it to --

JHD: It’s the same with `Symbol.iterator`. You can branch on it or throw or not throw. You can—it will do-produce different object identities if you pass it into `Iterator.from`. Right? I understand the desire for it not to be a breaking change, but it will always be one. You cannot just suddenly make something, like, be part of a protocol. Similarly, when we add a new protocol to ECMAScript, every built in that needs to have it can have it. If we add a new—I don’t know, a “TC39able” protocol today, we can’t add that symbol to existing built-ins next week. Like, it has to be one and done. Because it’s a breaking change.

MF: I just don’t agree with that premise.

JHD: I mean, in practice, it is objectively, empirically true. Whether it should be or not, that’s a debate. But to me, it’s irrelevant whether it should be, because it is. It will break tests and production apps, therefore, it’s a breaking change.

RPR: There’s a couple of replies to this.

MM: So the—I agree with JHD technically, that it’s a breaking change, but I disagree thematically. The—what we do as software engineers is to try to minimize rude surprises. And to have something be include in these lists of things being concatenated together as iterators. Change its behavior in the silent way, you know, if one non-throwing behavior to another. I think is just introducing a surprise, and it’s introducing a surprise that will mask bugs. So just I’m going to also absorb my other comment on the queue. The—I think that the behavior that MF is suggesting does the best that we can with regard to avoiding masking bugs. The thing about iterators is the things that the iterator that—that happens with the iterator happens some arbitrary amount of time into future, it might never be gotten to. And the fact that he’s not just checking, throwing on a non-iterable, but doing it eagerly, is the best we can do at alerting the programmer of cases that are more likely to be bugs in their program than they are likely to be ways in which they wanted to code things. If they—and once they know it’s a bug, it’s easy to correct.

KG: Yeah, this is disagreeing narrowly with the point about we can’t make things iterable later. That’s just false. Readable stream was not async iterable for the first several years. It is starting to be now. That was a totally web compatible change. We can make things iterable later. People aren’t just switching on iterability very much, and that’s great, and they shouldn’t because that’s generally not a sign of well written code, so we should also not switch on iterability and not do in the language and not encourage people to dot and I expect that most people won’t, which means that as a sequence, we can make things iterable later, as we have successfully done with readable stream.

JHD: Yeah, I mean, I’m—it’s great that it was web compatible, but that doesn’t mean it wasn’t breaking. That just means nobody did the thing that would have broken.

KG: I mean, adding any property does that. There’s no difference between adding this property and any other.

JHD: Yeah, you’re right. And as you and MM have alluded to, and MF as well, the likelihood of people doing something matters. And if someone’s unlikely to do it, we probably don’t have to worry as hard about breaking somebody and so on. I get all that. and branching on iterability - I wasn’t claiming that that’s a common thing people would do. It’s just in the general case, if branching on the protocol is something people are likely to do, then adding that protocol to an existing thing is going to break people. Maybe iterability doesn’t qualify for that, but as a general principle, it’s a concern we have to be aware of. As far as masking bugs, it is a fair point that if you pass a custom iterable or iterator, that—and you intend to surface something iterable and you implement it yourself for some reason and you did a bad job, that it’s nicer to have it throw early rather than wait until you happen to get to that iterator point maybe. But that’s also a thing people just don’t really do. Almost every—in practice, most people’s iterables or iterators are things that the language or platform have produced, which work correctly, and then that’s not really a concern.

JHD: The one thing that I did think about earlier in this presentation, so the decision in general to try and start to no longer accept strings as iterables by saying, no, we’re only looking at iterable objects, that’s a good thing, because primitive strings being iterable caused a lot of problems. And I can see, if we make the change I want to `Iterator.concat` - you pass an array and you pass a string—it is true that it might be subtly confusing to some people who are aware of the footgun of iterable strings, that it does not spread the string, that it just sticks the whole string in there. And that the behavior that you want, MF, would throw right away and say which one do you want, turn it into an iterator or wrap it into an array or something like that. I agree for the people aware of the edge case, that’s clear. But I also would put some money on the fact that basically every single time somebody typed that array, string kind of combination, that they intend the string to be added as an item and not spread into characters. But it is a fair point that with the current semantics, we’re not guessing the user’s intention, and in general, I like that principle and I’m on board with it.

JHD: Iterator helpers has been really valuable for me. I’ve refactored a lot of code to use it and it’s gotten things a lot cleaner when I’ve done so. And the array concat use case is a big point of friction, which is why I’m glad for this proposal with or without the semantics I want. But there are a lot of use cases I have in a lot of code that I’ll have to stick in a bunch of extra array brackets in order to use the current semantics you’ve got here. And that feels like an unfortunate ergonomic and memory hit when I can’t imagine anyone—basically I think that likelihood that someone is going to run into the footgun you’re concerned about is very, very small and I think the likelihood of somebody wanting/needing to wrap in a throwaway array literal is actually significantly higher.

RPR: CM says that yield versus yield star seems like the definitive precedent.

WH: I first have a question about this slide. Why is the `Nothing` line here? `Nothing` is not used anywhere.

MF: Sorry, it’s just a common implementation of Maybe. Are you familiar with, like, an Option type with Some and None?

WH: You define `Nothing` on the second line, but then you don’t use `Nothing` anywhere.

MF: It was illustrative of a library that defines Maybe that would have these things. It is not used elsewhere in the slide.

WH: I agree that this thing should throw on non-iterables. On the question of eager versus non-eager, I have a slight preference for throwing when you get to it. But it’s a very weak preference.

RPR: Thank you, WH. It’s a weak preference of 2 over 1. NRO prefers throwing.

NRO: Yeah, I—I think we should try here, because, like, it’s very likely—well, it’s definitely possible the user will make mistake by passing a non-traveler, and it’s based on what they want if we wrap it in array brackets. I prefer throwing eagerly, just because that thing will throw eventually, and it’s better to throw consistently rather than just depending on how exactly to use iterator. So that maybe at different times us you have different values and maybe it throws different times in the test.

RPR: Thank you. YSV.

YSV: Yeah, I’m also preferring the eager throw for reasons that Nicolo just mentioned, and also then we don’t have to produce an iterator. And since it’s an error, if necessary, we could discuss potentially changing that later, but I do prefer the current spec as is.

RPR: Thank you. RBN.

RBN: So I posted this also in the Matrix, but if you imagine iterator concat as essentially being flat map over the arguments passing in an identity function, flat map throws for non-itersables eagerly, so I believe we should be consistent with how iterator works in the regard.

MF: To clarify, RBN, would that be option 2, then?

RBN: I would probably go with option 1 to be immediate.

MM: Hello. Okay. Yes, much better if I turn it on. I think we’re all arriving at the eager throw as the dominant position. But I just want to raise this because it’s something to keep in mind in general for many proposals, and for such software engineering, is the eager throw will have a much better stack trace for helping the programmer figure out what the problem is. That’s not a trivial issue and that’s something that we—I don’t know that we’ve ever paid good enough attention to and we should start.

MF: Yeah, this was the point made by KG to me, which convinced me to make that change in the first place.

RPR: All right. We’ve got through the queue that almost exclusively has focused on this one issue.

KG: Sorry, I didn’t have time to get on the queue. I want to make really clear: because RBN mentioned the thing about flatMap, Flat map, because it’s on iterator prototype method and because it’s flatMap, it expects the mapper function to return iterators. This function as currently proposed only accepts iterables, just like iterator.zip and basically everything else in the language. It does not expect you to pass it iterators, it expects you to pass it iterables. It produces an iterator, but it expects to be passed iterables. I just want to make very sure everyone is very clear on the proposed behavior.

MF: And, KG, flat map takes iterators or iterables. The mapper produces iterators or iterables.

KG: Oh, yeah, that’s right. We went back and forth on that. Anyway this one only takes iterables.

RPR: MF, do you want to propose the next step?

MF: Yeah, sounds like pretty strong preference for 1, which is the current spec text. I would like to ask for Stage 2.7 for iterator sequencing, as written and presented.

RPR: All right. Any objections to Stage 2.7 with this unmodified proposal? Specifically with option 1. There is support on the queue from MM, WH, YSV, ACE, and a clarifying question there JHD.

JHD: So is nobody else concerned that it’s named “concat” but it doesn’t do what array concat do, which is take a collection or an item and produce a collection? If literally no one else but me is concerned about this and thinks it will just be fine because the error message is helpful, then I won’t object to advancement. I just wanted to ask the question explicitly. [silence] Okay, thank you.

RPR: Okay, so, yes, with—so with that conclusion that there is no one else is asking for renaming, I think I would say congratulations, MF, you have consensus for Stage 2.7.

### Speaker's Summary of Key Points

MF presented iterator sequencing for Stage 2.7. We had discussed options relating to the last point of contention, which was how non-iterable parameters are handled. We decided to not make a change to the spec text as presented. And have consensus on 2.7.

### Conclusion

- Proposal achieved Stage 2.7
- Non-iterable arguments are rejected eagerly
- Name: `Iterator.concat`.

## RegExp Modifiers for Stage 4

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-modifiers)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkr0bZS4Dw79XSH9V-w?e=PIuioJ)

RBN: Yeah. So I’m RBN from Microsoft. I work on the TypeScript team. The RegExp modifiers proposal is one that we’ve been working on for some time as a very brief overview. It allows you to change a subset of the currently active regular expression flags within a subexpression such as enabling in your case, multiline or single line mode specifically for a subexpression. There’s currently no conflict with consisting regular expression syntax in any mode. This is new syntax that has prior art in other languages such as Perl, PCRE, RegExp, et cetera. There are a number of flags that are not supported because they have more intrinsic effects within a regular expression itself such as the global and sticky flags. So right now, this is currently limited only to the I M and S flags. Some recent updates, the ECMA262 PR for this proposal was approved by KG. I have been waiting for the final approval from MF because of some feedback he provided that has been updated. There’s a test262 PR which has been merged for this proposal. And there are now two implementation. This has been shipping in Chrome 125 and Edge 125 for I think two, three months now. And it’s shipping in SpiderMonkey, it shipped in Firefox, 130 behind a flag and I believe is now shipping in Firefox 132 unflagged in nightlies and should be shipping in the main channel soon.

RBN: Now, I originally intended to ask for stage 4 and I still do. I just have one open question that I would like to resolve. There is a—there was a comment from a Babel maintainer regarding the current set of semantics, the early error that we applied when you have the syntax that allows you to have modifiers you add and modifiers that you remove. Currently we only early error when both the first and second mod fire sets are empty. But it allows you to write patterns like IM minus, which is essentially the same as saying IM since minus has no effect. This could be confusing and they suggested we instead error when the second modifier says it’s empty, which would cover both cases. This is a kind of late edition and late change since this is already shipping it’s more of a pedantic change to the early error rules. It doesn’t—if we allow this, it doesn’t really impact what the regular expression does. This would be more to try to catch a developer intention error, so the question is whether or not we actually would be interested in trying to take a change for this at this late stage. My impression from speaking with folks on the V8 team is that there’s little interest for this change, but I wanted to brick it to committee in case we had other opinions to discuss before to talking about stage advancement. So I would appreciate if anyone has any comments on the queue or any questions or concerns related to this change, if they feel that this would be necessary and would support it being proposed as for needs consensus. This is a late addition, so we could also consider potentially coming back with this as a needs consensus PR separately from the stage advancement or postpone stage advancement if that’s necessary.

RPR: Okay, so let’s just do a quick check for that, because given there was added late to the agenda, it’s very reasonable to object to advancements just on the time grounds.

RBN: And I’m not—if SYG is present, I know he had some feedback on this as well.

RPR: Okay, so no one on the queue. Please go ahead, SYG.

SYG: The feedback is given that we have shipped for three months, since May, I think, 125 was May, barring a pretty compelling use case to make the behavior change for the ship proposal, I’d rather that we lean towards doing nothing. That said, this is not, like—this is just a practical point that I’m making, that we made a decision already, for whatever reason, and it has shipped, and I would prefer barring a really compelling reason to just not change it last minute.

NRO: Yeah, I don’t have strong opinion in favor or against this. If we do not throw, I’m quite confident that the interest would allow, this because RegExp already complex, so common linkers like RegExp, we have to make sure there is at least confusion possible in really different expressions. So given this, like, not necessarily and go over the same thing, I’m leaning towards not allow it.

RBN: I think in a way, I think it’s perfectly fine to disallow this. I will say that in the languages I’ve tested this, most languages don’t even error for the cases we do error for. We chose to be more pedantic than others, but someone coming from another language that has used regular expressions like this might not bat an eyelash at the complexity because it’s not really any different. I think this is perfectly fine them to care about if we decide not to go forward with this.

RPR: The queue is empty.

RBN: So I suppose the best way to go about this would be to just ask for consensus and for those—and I expect it would not—or it would be blocked or potentially the best way forward is just to withdraw this. Since it doesn’t seem to be a strong interest in this I think I would probably be best to withdraw this PR.

RPR: You are asking for consensus on this needs consensus PR now?

RBN: I am actually stating that based on the feedback, it sounds like the best action is to withdraw this PR.

RPR: Okay.

RBN: So that leads to the final slide of this. Which is given the—given this again, this proposal is currently in Stage 3, has full specification text, has two shipping implementations and merged tests, assuming no other concerns, I’m seeking advancement to Stage 4.

RPR: Okay, we have support from KG on advancing as is. Likewise, WH supports Stage 4. Any objections to Stage 4 without the needs consensus change? [silence] There are no objections, so congratulations, you have Stage 4.

### Speaker's Summary of Key Points

- ECMA-262 PR approved by Kevin Gibbons (Editor)
- TEST-262 PR approved and merged
- Two shipping implementations: Chrome 125, FireFox 130/132b
- Proposed Normative PR to make small change to Early Error rule, implementers expressed preference to leave as is. PR was withdrawn
- Proposed for Stage 4

### Conclusion

- Stage 4 without the proposed normative change

## Import Attributes and JSON Modules for Stage 4

Presenter: Nicolò Ribaudo(NRO)

- [proposal 1](https://github.com/tc39/proposal-import-attributes)
- [proposal 2](https://github.com/tc39/proposal-json-modules)
- no slides were presented

NRO: Okay. So I’m asking for Stage 4 consensus for two proposals at the same time. One of them is import attributes, so it’s syntax that allows passing in from parameters to the host model for declarations and parts. This is used to use the `assert` keyword. It was changed to `with`. Chrome successfully unshipped `assert`, I think, around June, and there have been no problems with that. Node also successfully unshipped `assert`. And then we have the modest proposal that actually defines, like, JSON types. It requires that when an import types JSON, if an import succeeds, it must go to the JSON parsing algorithm. Both proposals have been shipped in Safari and in Chrome for a while, so I would like to ask for Stage 4 for both of them.

RPR: All right, so we’re asking for Stage 4 for both import attributes and JSON modules. We have support from CM. And YSV. Any objections? No? So I’d say congratulations, NRO, you have Stage 4.

NRO: Yay, thank you. This was probably the quickest Stage 4 ever. Two minutes for two proposals.

### Conclusion

- Stage 4 for JSON Modules and Import Attributes

## Iterator Helpers for Stage 4

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1z9kpu_CITxmNls7aOn61uswOK1SqHqijngtMcDTo8zk)

MF: All right. I’m going to go quick. Iterator helpers for Stage 4. I have a pull request, 3395. You can check it out. Summary of the proposal, there’s the Iterator constructor, the Iterator prototype already existed and now it’s available via Iterator.prototype. We have those two weird setters, constructor and `Symbole.toStringTag` that are funny accessors that we had to do for web compatibility. We have `map`, `filter`, `flatMap` and `take` and `drop` as transforming functions on the prototype, `reduce` `forEach` `some` `every` `find` and `toArray` as consuming functions on Iterator.prototype. We have a lot of tests. It was a struggle. It is implemented in V8. We had to unship and reship, and it recently shipped in SpiderMonkey. And JSC appears to be done and shipping soon as far as I’m aware. That implementation only completed recently as well. And we've had a LibJS implementation for a while now and we have a polyfill implementation as well. But lots of implementation. Stage 4 for iterator helpers.

RPR: MM has a one-liner. “Thanks for the attention to security.” And MM supports Stage 4. As does YSV. As does NRO. As does DLM. LGH has support and excitement, JHD hates the web compatibility hacks but supports Stage 4. CM supports and RKG supports with a “whee”, which I think is very positive. A support from OMT with a “yee-haw”. Okay, I’m—so I’m going to say congratulations, MF, you have Stage 4.

### Speaker's Summary of Key Points

- Iterator helpers has been implemented and is now Stage 4.

### Conclusion

- Stage 4.

## Source Phase Imports

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-source-phase-imports)
- [PR](https://github.com/tc39/proposal-source-phase-imports/pull/65)
- [slides](https://docs.google.com/presentation/d/1o-b8xJ7DzVUnLYJ7pMjVJwyBWsLxW-MLQjJ6pV9q1-w/edit?usp=sharing)

GB: This is hopefully going to be a really short item, and I think we will go hopefully under on the next item as well, so we should be able to give you all some time back. The first issue is this Stage 3 PR update to the source phase imports proposal. So to just give a very brief update on where we are on source phase imports, we finally landed the HTML PR for the WebAssembly web integration into HTML last month based on the Stage 3 source phase imports proposal. And the V8 implementation has a CL up for the last piece of dynamic import support, but I believe they may be pending feedback on us on this error case, so it would be great to be able to clarify this PR. We are also starting to consider the process for moving to Stage 4. In particular, rebasing to import and moving that forward will unlock a lot of progress on the overall module effort I believe as well.

GB: So to summarize the issue, the question is what to do for a source phase import of a module that does not support a source phase representation, for example, JSON doesn’t currently have a source phase representation. And the source phase import proposal itself specified this originally way back as a reference error. And then in the WebAssembly ESM integration, we were slightly more informed at the time and specified it as a SyntaxError if you—for browsers that don’t support either phase 4 Wasm ESM integration—but we need to agree on it is, because we can’t have one type of error for WebAssembly and another type of error when it’s an ECMAScript source phase fallback. So as I mentioned, the reference error was originally justified as being a reference, but the syntax error case is just an early error. It’s a link time error and hence failing under the criteria for early errors.

GB: We have PR 65 on the source phase imports proposal which changes this default error from being a reference error to a syntax error to unify on the early error model, but we require committee consensus to make this change under Stage 3. I wanted to open this up to discussion. There may be some aspects of linking that could be considered a gray area, but at the same time, having a consistent early error semantic would be good and we do need to get consensus on this to move forward. So if anyone has any thoughts, it would be great to move to the queue.

JWK: I support syntax error because as I can recall, all the errors before any code is evaluated this is a syntax error (early error), like, a const declaration with no initializer. So I think this one should also follow it.

NRO: Yeah, and specifically when it comes to imports, try to import a binding that doesn’t exist for a module is already syntax error. And, like, sources are kind of like a special export of modules, and so it makes sense to use syntax error here.

USA: At the end of the queue, we have a comment from Ashley who says the slides link is required for the agenda, so I’d really appreciate if you could put that in. And, yeah, that’s it. The whole queue.

DE: +1 (via queue)

### Speaker's Summary of Key Points

- For a missing phase implementation, the WebAssembly ESM Integration HTML specification specifies that a SyntaxError is thrown when initializing the module bindings
- In the Source Phase Imports proposal itself, we specify that for any module with a missing source phase, a ReferenceError is thrown when initializing the module bindings
- To align these early errors we are seeking to land PR 65 to default to the SyntaxError form in the Source Phase Imports proposal

### Conclusion

- Consensus for changing to the syntax error early error form ([PR](https://github.com/tc39/proposal-source-phase-imports/pull/65)), and we’ll update the proposal accordingly.

## ESM Phase Imports

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-esm-phase-imports)
- [slides](https://docs.google.com/presentation/d/1HF4COMfypVzftilhOIlGxz9Fn1iaiFdwYDZwzqQt1gs/edit?usp=sharing)

GB: Just to give a status update, as I mentioned in the last item, source phase imports, having an implementation would be a huge step and a huge step to see ESM phase imports move forward to give the recap on where we are on ESM phase imports. It’s the extension of the module source that the source phase introduce to JavaScript modules, so it’s a JavaScript source phase, which forms the primitive for JS search initialization. But since this is kind of an abstract concept, we seek to motivate this proposal on the worker construction use case, so it’s Stage 2 proposal currently motivated on this kind of worker ugly syntax situation we have today where it suffers from many of the problems that we had number WebAssembly modules we were solving with the source phase and the idea being you could import a module in its source phase and instantiate a worker directly from it. So potentially even with being able to remove the second argument, because you would know that it is an EMCAScript project module. The HTML integration is of course a really major part of this work, and I was really hoping when we put it on the agenda we would have an update for this meeting, but unfortunately things got pushed back from TPAC and I’m currently scheduled to discuss this in the regular whatnot meetings coming up on this Thursday. And if anyone else would like to attend that, please let me know. But it’s obviously a critical piece of this proposal in proving out that motivating use case. The harmony layering objective is to create the representative of module exploration to module exploration, and when we originally presented this for Stage 2, there were still some outstanding design questions that we wanted to explore as part of the Stage 2 process, which I can give a brief update on where we are today. So to give a recap on what we want to be able to support, we want to be able to support module expressions, which are object values that can be passed into dynamic import, and they also support transfer fire structured clone, so this is the example from the module expressions proposal where you can take one of these module objects and pass it into post-message. So to support dynamic import, we have—we still –

(slides are re-shared, GB backs up a few slides)

GB: Okay. Oh, dear, should I go through these again? I guess, yeah, it might help to just go through the important ones if we missed the slides. So the worker case is this syntax being replaced with a module source syntax. And potentially even removing the separate type argument, so it’s doing a source import and passing that directly into the new worker constructor. And the module expressions examples are exactly from the repos. So, yeah, we didn’t miss too much. Okay. So dynamic import remains supported for syntax that we presented previously. If you pass a source into an iframe and import it, it won’t be supported. But the big thing we’ve been working on is the behaviors of module source transfer. So the base scenario is relatively straightforward for this, which is that when you transfer a module source, you just create a new object that has the same underlying source, and host-defined meta data so the URL and also, you know, anything else to do with the identity of that module. But there are some edge cases that come into play when considering identity under import, and in particular, what goes in the canonical registry for a given ID. So this is an example of the kind of identity cases that we have been discussing in quite a bunch of detail recently. In this case, we start on agent 1 and you have a foo.js module that initially contains the source `export let a = 1`. We import that source and store it in a source object, but then we change the source and we post the source that we imported across to agent 2. Now, on agent 2, we receive this source from agent 1, which contained the export A equals 1, but now if we do an
`import.source` of that same `foo` in the other agent, there is the question of are we going to get the exact same source or are we going to get the update because we didn’t load that source before in this module registry, because both agents have different module registries. And when we look at these two namespaces, are they going to be unique identities, are they going to have the same identity, and how are we going to deal with that? And so there is this kind of question of when you transfer a source, does it exist as the canonical source in the module registry for that ID or not? And there are a few ways to deal with it, each of these four bullets represent one of the alternatives. And there’s the link to this guest when I share the slides that also goes into more detail on this. But there’s ideas of maybe the first person to import a given defines the module at that ID so if it changes, then tough luck, and if you transfer an ID, it defines into registry and that’s what you get. That transfer itself updates the registry overwriting everything else, so instead of just first wins and then you just consolidate, actually, when you do the transfer, it overwrites what is in the registry and maybe you get some kind of orphan imports or something like that. Throw imports entirely to avoid this mess or even something more advanced like agent synchronization where all the agents share their knowledge of some kind of canonical synced ID source registry. A current conclusion in discussing this quite comprehensively at the moment are that the most important property when you perform an import source is you get the source that you provide to the import, so it would be kind of terrible if you provided a source whose underlying source text was one thing, but you get back an import that is something else. And then the other conclusion is that the last item of synchronizing agents and having some really fancy design here is really inhibitive to implementing, and so all these other cases of throwing, overwriting and providing what is not expected is likely not viable, and that kind of leaves us in the space where transferred sources should not inject into the canonical registry under their IDs, and instead behave more like module expressions where they represent always a unique ID. But if you transfer the same source multiple times into the same worker, it can still retain the same underlying unique identity even if each of those objects has a different object identity, so there’s identity under import and identity of the object of the module source itself. What this means for this example is that when you transfer the one source that has the old A equals 1, and you import it, you get the old A equals 1, and when you try and import that same source and you’re going to then directly hit the network from your local agent again, because you don’t see it as being then as the source that you previously had. And so the namespaces are not equal, the instances are not equal. It does mean that we have this instance inequality for these cases of transferred modules. That this is distinct from worker invocation, and we get the expected source of equality. So, yeah, that’s the transfer problem, and what we’ve got on it so far. And then finally, there’s this kind of secondary use case around module sources for JavaScript that we can extend them with module source analysis data, so the—having it have this close relation to the source text means we can provide tooling for import analysis as well as understanding exports. And so one of the updates we made to this recently was we previously just supported discovering all of the export names and star export names. We’ve now moved to a comprehensive fine-grained exports analysis so that you can actually track export binding uniqueness since that was discovered to be something that people did want to obtain. On the export, it’s now under this type property discriminants, which gives all of the full parity with the underlying binding information on exports. Where a given direct export can have multiple aliases and represents a single slot or a single binding slot and export can be traced through that so that you can directly relate exports to their bindings. One result of this is that there is some duplication between imports and exports, the specifier is duplicated in the reexport case and the reexport all case. But since they are distinct use cases for using imports and exports, it doesn’t seem too bad of that. And, again, we have the metadata options we have. So those are the main two updates. The spec text remains mostly complete down to defines the source phase object, and the analysis now with the fine grained analysis behavior. The transfer behaviors are pretty much what we’re now looking to settle on and start to specify the HTML integration being the big piece with upcoming discussions. But if and when we have determined that we’re able to proceed with the HTTP integration, that’s when we’ll be looking to bring this back to committee for Stage 2.7. So that’s the update. I’m happy to have as much or as little discussion as folks would like.

USA: There’s nothing on the queue yet. Maybe let’s give it a minute or so. Let me check the chat. There is a question for you on the chat, but I believe you can answer that async.

GB: Yeah, sure, then I’m happy to conclude it there, and any further thoughts, folks are welcome to join the module harmony meetings, and thanks.

USA: Wait a minute. Sorry, there is now a topic on the queue.

YSV: I was asked to bring the topic that I had in the chat onto the queue. This can be discussed async because it’s not directly reto your update. But a question we had related to this proposal again is why there new methods added to this module source for the proposal and what’s the use case for browsers. And we couldn’t understand how that would work. Nicolo said that in terms of making static analysis work, you needed them but this is more useful for node, and the concern we have from Mozilla side is it makes the justification for landing this in browsers quite weak.

GB: Yeah, so I can certainly speak to that. And just when I thought I had gotten off easy. So the analysis is also necessary for loader construction. And when we get to compartment loaders, you do want these analysis functions, even in browsers if you’re constructing virtual environments. We added it here as a kind of a nice to have, and the way it’s always been presented here has been as a nice to have, that we could always remove if anyone has any problem with it. I think it’s a well-defined space. I think the methods have, you know, clear utility in various scenarios. And it does make the virtualization discussion easier when we get there in already having this worked out so that virtualization discussions can focus on virtualization discussions and not analysis problems. But if there is concern, we can remove it from this request.

YSV: We can take this offline and discuss it further. And we have concerns, and if we get into the discussion of virtualization, even if it’s static analysis, probably we should link that to core motivation of virtualization rather than yes, sirly this static analysis problem around workers.

GB: Yeah, I mean, there is basically—we talked about a library ES module lexer, which is used for, you know, commonly for analyzing graphs, and the use case of analyzing ESM files and graphs is a very common one. And solving it at the same time is creating this primitive. Adds utility to this proposal. And removes the need for an ecosystem library that has shown very wide uptake. But as I say, it’s not something that we need to, you know—that has to absolutely go with this proposal. It was more that it’s nice to solve it, but, yeah, that’s -- let’s continue those discussions. I’ll create an issue on the repo and it will be great to follow up on that.

USA: All right, so that was the entirety of the queue. Would you like to summarize or make any concluding remarks?

### Speaker's Summary of Key Points

- We gave an update on the proposal, including the proposed semantics for transfer of module sources
- We’ll be hoping to give a future update once we have feedback from HTML on stage progression
- Some committee members asked about the motivation of the reflection features of JavaScript source modules. These are originally motivated by build-time tools, rather than usage in browsers, so they might not be needed in all environments. The champions will follow up with the analysis motivations separately.

## Structs and Shared Structs for Stage 2

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-structs)
- [slides](https://docs.google.com/presentation/d/1_LOkmaeM0S-VOvhJ28eeDJUmkMeHVyltxSt1lGLF5iA/)
- [spec](https://tc39.es/proposal-structs/)

SYG: This is a presentation for structs and shared structs for Stage 2. This presentation is laid out by logical feature. This proposal includes a bunch of different features, and it’s presented here feature by feature. With the goal to add fixed layout objects to JavaScript. The biggest motivation is to enable shared memory multithreading, which is a new capability for performance hungry power apps. So, this is not a hypothetical thing. There are real world big applications that are interested. To list a few, spreadsheet application, IDEs, TypeScript compiler. And to be perfectly clear, I am talking about a demand here for shared memory multithreading not strictly via JavaScript but also by WebAssembly. It will be a capability that JavaScript gets, even if we do not reflect that capability directly in JS.

SYG: So it’s important for JavaScript to also reflect capabilities that are coming through from the Wasm side. As a pure motivation, the opportunity cost to not do shared memory multithreading is high, as a matter of competition with other platforms. As a proponent of the web platform, developers are often faced with a choice, and should they target the web platform or a mobile platform. Capabilities are easy to come by on the mobile platform relatively speaking because there’s—there’re fewer concerns like interop. I don’t want the web to miss this opportunity here, especially there are—as the web applications get more and more sophisticated, that it’s important that we rise to meet this need. As a side benefit, it also makes sense to add on shared structs and unshared structs will show also have a nice—some nice benefits for additional guarantees and performance, even if you don’t care about shared multi memory multi threading,

SYG: so structs, this is the unshared structs. At a high level, unshared structs, you can think of them as restricted classes that trade some of the expressivity you get with classes for more guarantees and more run time performance. MM used the term'Defensible classes' and this along the same lines as that. The high level semantics are the struct instances are constructed sealed. They are otherwise look and behave like ordinary objects and they are sealed, which one of the integrity levels if you’re unfamiliar with the integrity levels in the spec. This basically means that their layout, their own properties are fixed at construction time and cannot be removed. New ones cannot be added. So with—in other words, these are closed instances. By default JavaScript objects are open and you can just keep adding to them. There’s something we are calling one-shot initialization, which means when you construct an instance, it will be constructed entirely in one shot. It gets all its own properties that are declared in the struct. There is no return override trick you could do via the constructor, which is something you can do with classes and ES5 style classes, and there’s no half initialized instances. So if you have a field initializer that throws, the field is still there. It’s just undefined. The inheritance hierarchy as consequence of one shot initialization, the inheritance hirearchy must all be structs. The methods on struct are non-generic. This means that you cannot do ad hoc calls on them with an arbitrary receiver and have that work. There is an implied—there’s an implicit brand check that the receiver must either be an instance of the struct or a subclass. So this is good for performance in the VMs meaning that there is one shape check on the receiver at entry instead of every owned property access. For generic methods, when we compile them, you know, this could be anything. So the way it’s compiled is pretty much generic. But when you access on owned property that goes through a normal owned property lookup and try speed that up, we use inline caches and things like that. For structs, if we design them to be non-generic, we can combine all the checks for owned properties into one entry, which is good for code size and performance and good for predictable performance. As a caveat here, the prototype property, so the methods, they can still be polymorphic. The shape check things really only applies to own properties and not necessarily prototype methods. Otherwise the idea is that these structs are usable just like classes.

SYG: So by example, I have a Point2D, has a field X and Y, has some method distance2D and the constructor just assigns to X and Y. It’s okay to reassign—it’s okay to write to fields that already declared right here. But it is not extensible. You can’t do without Z because it’s not declared, and this instance is sealed. You can’t set the prototype of the instance because you can’t to that on sealed objects either.

SYG: There’s one shot initialization. So it’s okay to extend structs with other structs, so if you want to add a third dimension to your point, you can do that. This for a snippet here is to show that by the time the constructor execute, you already have a fully initialized in the VM sense, you already have an instance of the struct object, the struct instance with all of its own declared properties as own fields. Sorry, as own properties even if the initializers have run already. I’m also proposing there is no this-TDZ because it’s already initialized. You can call super, but this is no longer required to be—because there’s no this TDZ, the super can occur later, and just runs the super constructor on the ‘this’ that’s already initialized. This our understanding of somewhat controversial. Ron as the co-champion feels differently about this as well. This is I think a point that might be debated during Stage 2 on whether we want to require super to be called first if it is called. But I just want to call that out as—the main thing here for me is not really super, but that the ‘this’ is already constructed with the fields. And return overrides does nothing. If you want to do a return override, it doesn’t work. The return value is just ignored by the struct constructors. And that’s one shot initialization. Here is an example to show that the methods are non-generic. If I make two Point2D objects it’s okay to call distance with the—with the actual point 2D instance as the value. Subclass is okay. Okay, this example is completely wrong. I think what I meant here, like if I had a 3D point, anyway, this part is just completely wrong. But please imagine that there is a Point3D instance somewhere that is a subclass of point 3d. It’s player if you to call a Point2D method with a Point3D receiver. But you can’t call—you can’t call it with a object that happens to have the same fields with this value. Like, this is not allowed. You can’t do that. There’s an implicit brand check when you create a brand instance that it’s branded a point 2D or 3D class—or a struct, rather. Otherwise, class features are allowed. So this is the—this is the unshared struct. If you want to use getters, setters, static methods, privates, that’s all fine.

SYG: The finer points of unshared structs. Each struct instance has a list of brands in the structs brands list. Internal field for subclasses. And this brands list is what is checked upon entry to a method. Struct methods are, therefore, specced as exotic callables in the brand checks. Struct prototypes are also sealed. Struct `constructor.prototype` is not writable. You don’t want people to willy-nilly overwrite the .prototype on the constructor. Because the idea here is we’re trading some expressivity with guarantees. Struct constructors are currently not sealed. Maybe they should be, happy to debate this more during Stage 2 as well. And this last point is also that struct inheritance hierarchies are currently allowed to top out at object. Object is not a struct. It exists. We can’t really change it to be a struct. So—but at the same time, objects don’t have any fields, like the whole point to top out an object is if you want convenience methods and object.prototype, they are there on struct instances. That seems more use to feel me than to require that struct hierarchy to top out at null or something. But I can also be swayed one way or another on this point. I don’t think it’s too important. It seems better to have the convenience. But this is, like, the one exception to the entire struct hierarchy must be structs, is if the very top of your hierarchy is object, that’s okay.

SYG: All right, that was unshared structs. So we’re going to build on that and to further restrict it, for shared structs, to show how we can further restrict it to make these things amenable to can be used for shared memory multithreading. The shared structs at the high level, you can think of them as restrictive structs that trade even more expressivities to be shared across and be simultaneously accessible by multiple agents. So they have all the restrictions and properties of structs, they are actually shared across agents, meaning they’ve not copied. Their own data properties are shared. They can only reference primitives and other shared structs. So you can’t put normal, ordinary objects into a field—into an own data property of a shared struct because that would be not thread safe. And this—at this time, they have a null prototype. There is a big open question to be further iterated on and decided before 2.7 on whether they ought to have something called a realm local prototype. The idea there, I’ll go not more, but currently they have a null prototype pending the open design question. And we’ve been in many discussions with MM and company who have a lot of insights there on how that to be done. The second big open question about there is the last bullet point is whether these should be usable as keys in weak collections. In particular, WeakMaps. Now, it is the case today that all objects are usable as keys in WeakMaps. These are special because if—WeakMaps recall are basically like properties. So if you have an object as a key in a WeakMap, it’s like adding a property to that object from the point of view of the garbage collector. So if you allow a shared struct to be usable as keys in WeakMaps, that could open the door to cross heap cycles, not from a language safety point of view, because your WeakMaps are not shared, but from a GC reachability point of view. And the GC reachability point of view is very, hard to implement. This question is being heavily debated on the Wasm side currently because of the GC implications, and I think it’s very important, it’s a hard constraint, that we follow whatever comes of that conversation. So for now, the spec draft for—I’m asking Stage 2 for does not say anything special about disallowing them as WeakMaps. But I want to explicitly call out here that if Wasm decides that they should not be usable as keys for WeakMaps for the GC difficulty reasons, that we disallow use of these. We throw if they are used as keys a as WeakMaps so that we can relax it in the future instead of allowing them now and changing the semantics to be something weird.

SYG: MM has his hand raised.

USA: Is that in relation to your clarifying question, MM?

MM: Yeah, it’s exactly the clarifying question. Given what Shu is describing, it seems like a great timing for the clarifying question. There’s another hidden WeakMap in JavaScript which is using return override by regular classes to add a hidden properties, hidden fields to other objects. So the question is, you know, you establish these things can’t do return override, but if someone else does a return override returning one of these struct, can they add a hidden field to it, and if so, that’s—then that basically is a—is logic Cal equivalent to a WeakMap hidden?

SYG: They cannot. These shared structs are sealed from the get-go. There’s no state where user EMCAScript code sees a shared struct and add things to it, including private names.

MM: This is distinct from sealed? There’s one case where we prohibit the return override, which is the browser global, but that does establish a precedent, that there is an object that you can’t add properties to in return override, so these would fall in that precedent?

SYG: Yeah, so I agree that we should—we also—if we decide by WasmGC side that these ought not to be usable as WeakMap keys, we must also ensure that we do not accidentally reveal this capability through some hidden field. Those are the two big pending questions for shared structs, but the rest I hope are more or less settled.

SYG: So to give some examples, there can be no shared-to-unshared references with shared structs, because that is just straight up unsafe. Supposed I have my Point2D, but it’s shareable. I make this MicrosoftSharePoint and I can assign things to it. Here I can assign 42. Ignore this unsafe thing for now, I’m going to explain the unsafe block coming up. You assign P.X pause it’s declared can it’s a primitive. All JavaScript primitives are immutable, so they are from a language safety on it of view unproblematic to be shared. You can assign it to itself because itself is a shared struct, so that’s fine be. You cannot assign, like, an object literal, because that’s not shared. I am proposing to act—to add the ability to programmatically test if a value can be shared. If the `call.reflect` can be shared, and you can test whether it’s shared or not. Shared structs are actually shared, so if I make—so assume P as before, so this is Microsoft SharePoint is the P. I make a worker, I post the P, I assign main to the one—to 2.X, and then I log it. On the other side, I receive P, I assign worker to X and then I log it. This code can log any of the following interleave its, because these things are actually shared.

SYG: This is to show, again, the point that this is actually shared in that if you have an Echo worker that just post messaged the same thing back to the sender, you get the same object identity. This is not a copy. A core Larry to be added with—along with shared structs with a careful case of shared instructor, called shared arrays, which are basically shared fixed length arrays. This is not growable or shrinkable. It’s a fixed length at construction. Instances cannot be resized, dot length is a frozen owned property and like shared structs, because it’s a special case of shared structs, it also has a null prototype and this is also pending the same realm local prototype design question, if we can work that out, that means we can add methods here that will be helpful. If not, then our hands are just tied that this has a null prototype. So shared awry, by example here, it’s basically the same worker main thing I just showed, except instead of using dot examine, it uses a shared array and assigns the zero element. The reason we’re adding shared arrays is that you really do want index collections as a building block so you can build more sophisticated shared data structuring otherwise who is going to make a shared struct and manually declare index like zero to 100 or something. This is a shorthand for that. API editions, I’m not going to go too much into detail here. You can read the spec draft proposing to overload some atomics methods. So that you could use sequentially consistent access. So currently the atomics methods take a TypedArray as the first argument and then an index as the second, and the overloads basically now overload them to take a shared struct to be able also Titanic a shared struct, that Tess first argument and the field name for second. And as I showed before, also a product to reflect that tests if a value can be shared. The final points for shared instruct versus they are not quite sealed, like, as Mark observed earlier, these are—these have even more restrictions than sealed. One thing I do wants to call out here is that they actually cannot be frozen because the idea with this is that the layout is immutable, so that when you share them across threads, the VM in its—it uses—the VMs use the shape to decide how to design an object. If the shape is immutable, you can access them without worrying about the date being out ofize. Freezing changes the descriptor and when you assign to a property, you need to know if it’s writable or not. Freezing makes something non-writable. So in order to check the writability, you want that answer to never change. And if—you want if the answer to never change, we can’t actually freeze something. So this points out a gap in expressivity, which a fruitful thing to follow up on, if we think of structs as declarative sealed things, this points out, well, why not also have declarative frozen things, and I think if you want something to be frozen immutable, instead of freezing a programmatically as we co-for ordinary objects, they should be declared frozen but as a follow proposal. For now, it—shared instruct fors if you are more mutable shared memory. I won’t go into too much the memory model arcana. It is written up in the spec text.

SYG: The executive summary is basically that bare access is unordered And accesses by atomics are sequentially consistent. And no tearing allowed, meaning you can’t see half of one write for any shared struct field access. On the implementation, that basically means that all fields need to be pointer aligned. There’s an implicit allocation as publication in there. That says you cannot observe a partially initialized shared structs across threads. There’s a spec section that uses a critical section—it should not be implemented that way. But that’s the—that’s the underlying assumption of why that spec fiction critical section exists. I’m happy to answer more offline. This a bit involved. But the guarantee that I want to get across is that allocation is publication. Meaning that once you have a new shared struct, there is no other thread under any circumstances that should be able to see that shared struct and see it in a half initialized state with some fields missing and crashes. That must not be allowed by implementations. So to recap the open questions here, open question one is per realm prototypes. Why might we want per realm prototypes? Was a they allow us to attach methods the shared structs. If we believe that, you know, after object orientation has its benefits, it’s very ergonomic to be able attach methods to structs like you can attach methods to class, but methods and functions are deeply unsharable things. They close over the realm, you can make closures, they’re very much shareable. So the way we were hoping to bridge that if you have a per realm prototype, it’s a plain object. And as an ordinary object, it can have ordinary things including methods, and methods would allow better encapsulation of thread safe behavior because otherwise your choice is to use free functions. So, okay, so that’s why we want per realm objects. What’s this correlation part? If we have per realm prototypes, if I have a struct declaration S1 in worker W1, because the prototype objects are per realm, that means S1s prototype in W1 is a, ordinary object in S2 even if S1 and S2 are evaluated from the same source text. Imagine you imported `my-shared-struct.mjs`. They’re two different evaluations, they will have two different per realm objects but from the user intense point of view, they’re intended to be the same. So wouldn’t it be nice if we could correlate the two somehow. It’s difficult to correlate them in a way that satisfy the constraints of no ambient communication, global communication, and some other details, and we have been working through this design space with MM, MAH, and other folks in that space who are interested, DE and NRO as well offering help from the module side. So this is yet undecided. We have a direction, but this is not yet fully done. Why not? As I said, the correlation mechanism must be carefully designed to not be a global ambient communication channel. The promising direction is to use module source identity in this correlation map thing. But this must be designed to satisfy all the stakeholders or dropped to enter Stage 2.7 or 3. That’s open question one.

SYG: Open question 2, are these usable as WeakMap keys? I think that for full composability with the rest of the language, the right semantics is just that they are usable because they’re like any other objects. But that’s a big if because it is very hard to implement this in existing garbage collection. So the next steps here is that this is basically difficult for everybody. Mozilla has expressed a lot of feedback here that is the very hard for them. And V8 is prototyping something that we hope is pragmatic that is possible to ship, but the take away I want TC39 to have is that this an important question to be decided before Stage 2.7 or 3. It’s mainly drive on the WASM side and the exact same concern for Wasm side because it’s a garbage collection thing. It’s driven by the Wasm side because there are more implementors(?) there and the immediate use cases are there, so I want that to be driven there, but we ought to follow the decision that comes out of there. If the decision is we support this kind of express I havety in the GC, then it ought to be usable in WeakMap keys. If the decision is we ought not to support it because it’s too difficult, we must throw them if we want to use them as WeakMaps. This too must be decide before 2.7 or 3. Okay, so that’s the bulleting of the main thing. That’s shared structs and structs.

SYG: Moving on the next two points are somewhat orthogonal and intended the complement the use case of shared memory threading. The first one is something called unsafe block. And the high level, the unsafe block is motivated as follows. So everyone knows multithreaded programming is very difficult to reason about. It would be nice to have some guard rails. We’re proposing an unsafe block to be that sin tactic guard rail. The idea is you want to eyeball a program and know if it has possibly erase things in it. So by defall, barrack sayses to shared structs which are unordered in the memory model, so straight up data race. They are disallowed if they’re not syntactically lexically an unsafe block. I will show some examines becomes. But this is about lexical scoping. If you’re familiar with unsafe blocks from rust, this is not function coloring. This is straight up lexical scoping. Hosts are also kind to have an extra linguistic programmatic whole Internet. The web already has. This you might think—your application should not have any shared memory access at all. And I think that’s a reasonable policy decision to make. The web chooses this to—with a mechanism called cross origin isolation. The server must send special headers to give you shared ArrayBuffer access today. This would extend to any shared memory—any shared memory facilities including shared structs. This is extra linguistic. This is on hosts and this is not in the spec test and this is the extra expectation. Node wants something like a global function, that’s just like turn off all shared memory, that’s a one-way latch or something like that. There’s also an open question here I will get to about the safety level of APIs, because the unsafe block, what it lets us do is filter out property access request dot and bracket, but there’s a question of what do you do with library `Reflect.get` and `Reflect.set`. We’re work through that. Here is an example. You have a shared struct. So normally you can allocate them outside of unsafe context. That’s totally fine. But if you just want to write stuff it to outside of unsafe block, that throws. If you want to read it, that also throws. You must lexically nest them inside an unsafe block. Hopefully that’s clear. And this is to hammer home the points. This is lexical scoping. Even though increment function is called from an unsafe block, increment is not itself in an unsafe block, or plus plus is not in an unsafe block. Is not about function calling. This is about scoping. The final points this is expected as a Boolean parameter. That’s whether it’s unsafe or not. By default, it is not unsafe, so no existing uses of get and set are changed. And reference references track if they’re in an unsafe block. So if third open question of all of the open questions in the spec is safety of API calls. We have some choices here, so you can say—you can do the maximally permissive thing and say all API calls are unsafe, meaning something like `effect.get` always works regardless of whether `effect.get` is inside on unsafe block. You can do maximally restrictive.

SYG: So it always throw on shared structs. This means the proxies break the unsafe scoping. The trap handler has to have an unsafe block inside. And perhaps the third way is to thread the Boolean parameter that we have on the peck side via bracket bracket get and bracket bracket set to [INAUDIBLE]. And this seems like a promising direction forward and we’re still noodling on the complex questions. Maybe we’re okay. Unclear. Is a question that must decided before entering 2.7 or 3.

SYG: Okay, the final part of the proposal is that—so we have these shared memory struct things. You want to be able to synchronize them. This is also the most orthogonal and also the most split outable part of the proposal, and we believe that it is important to have higher level synchronization to maximize the likelihood of correctly using the shared memory things, so that end, we are proposing to provide Amy tax condition variable. And it’s not cursive and the mutex itself is shared, and O cap—in O cap language, you can think of the mutex as the lock cap and the when you unlock it, it gives an unlock cap and the this helps to—misuse like double unlockses and provides a blocking lock and timeout static methods. I put the star next to static because ideally these would be prototype methods, and barring local prototype, these are static methods. And just like atomic style wave block, it only works in [INAUDIBLE], so try to go through these quickly. I don’t think these are—I’m sure there’s more interesting discussion about this. But the idea is that you have—you can make a mutex and lock it. And it gives you back in a lock token and you can pass interlock token if you want to reuse it so that you can save yourself the allocation in hot paths. And lock if available is the time out taking version that give us back an unlock token if you can lock it and null if you cannot lock it. The unlock token has—it’s just an ordinary object. You can unlock it and dispose it, which is just unlock, and returns untwinned and you can check if the unlock token in fact unlocked.

SYG: So by example here, we have the SharePoint make a mutex, you can use the lock thing, which gives back an unlock token which has a `[Symbol.dispose]`
with using and you can use that to protect whatever critical section you want. Hopefully that is pretty clear for folks who used to using mutexes. Lock if available is kind of like—it’s kind of like try lock or lock with a timeout depending on whether the timeout is zero. If it’s zero, it’s see if you can acquire the lock right now, and if you can’t, just tell me you can’t, and with a timeout, it’s the wait for that long and then tell me if you timed out or actually acquired it. The final points is unlock tokens can be pre-allocated reused for hot path and if timeout zero, it’s greater than zero, it’s time scout to and uses the same waiting mechanism as atomic style weight. This is probably the least important of the open questions, but it is an open question on what should the return type of the lockIfAvailable be. Currently, what I have said is, Unlock token or null, so if it could acquire the lock, it gives you back a token. If it could not, it returns null. What this means is that if you naively use the using syntax with lockIfAvailable, you don’t know without check what L is, whether you acquire the lock or not. If you wrote this, you might as a naive reader think that you entered the critical section after you come back because null can be used with the using syntax. So the open question is should we allow this? If we allow the previous example a because using the declarations were already designed to start—from the start to allow conditional acquisition of resources, so you might think that, well, we ought to athis because—you should check the value of L regardless, but you might think we shouldn’t allow the previous example because this isn’t like a resource and it’s a correctness bug if you allow this. And we could disallow it by clanging the return to something grosser, like if you returned a stripping, a string can’t be used with using it so it will just throw if something times out. But that’s something to be discussed and also to be figured out before Stage 2.7 or 3. A condition variable is just basically that, a condition variable. It works like you expect condition variables the to work.

SYG: There is a waitIndefinitely method and wait for some amount of time method and wait for the notify method. I’ll skip this. You can read it if you want. I think it’s not that surprising. OK, almost done with the deck. I haven’t really talked too much about the theory. There is a lot of movement on the Wasm and a lot on the GC implication question that manifests on the JS side as the WeakMap question. It is a hard constraint, hard requirement of the proposal to be reflection of the Wasm GC capability. Because more is happening and the GC thing is likely to be decided on the GC side, I think Stage 3 is not Stage 2 but 2.7 and 3 of the proposal should be sequenced after the Wasm GC or after the lock step because we don’t want these to diverge at all and it would be bad for the ecosystem. So to recap opening to the queue big open design questions to be worked out during Stage 2. Biggest one is prototypes in the correlation problem. 2 is usability or map as WeakMap keys that is the GC question and 3 is the safety or the unsafety of API calls in unsafe blocks and somewhat relatively smaller one is return type of lock type available. What that to the queue.

USA: There is quite a queue. I seen it’s whittled down to ten minutes. You have around 25 minutes at most. So if you would like to prioritize things in the queue, that could be nice. Or go down the queue as it is.

SYG: Let’s go down the queue as it is. I did a quick look. I’m not sure how to prioritize this.

USA: Okay. I request everybody to be brief. First we have Jack. Jack works, are you there?

JWK: In the extends slide, what if you called super() after this access or omit the whole super()?

SYG: Thank you. Don’t call the soup inner the spec text you don’t call the super constructor but this is constructed. If the constructor did something, you don’t call the function. Imagine like a normal function call.

JWK: Isn’t that break some property of the constructor?

SYG: No, because the constructor of a struct is really post construction initialization. It doesn’t do the construction. The construction is like the one shot construction. By the time you enter the constructor you already have a usable this value.

JWK: Not the language, but expectations of the author of the class.

SYG: Then it does. This is possibly another open question, should we be more—should we build in more guardrails here and still require super to be called in some way without incurring the problem of a this-TDZ, I think that’s a very valid concern.

USA: We have a reply on the queue by WH.

WH: I see a couple consistent ways of going about this. One is to insist on `super` being called. If you don’t insist on `super` being called, then you might as well also allow `super` to be called twice or such. Why not?

USA: I think Ross up next.

RKG: Yeah, this almost could just be read off and we don’t need to say anything further beyond the question. You had mentioned you wouldn’t be able to do the return override hack simply nothing would happen. I just wanted to clarify is there a need to silently nothing instead of having that be an error?

SYG: I think it should be fine to make it throw too. These are syntactically distinguished constructors. I don’t think there’s a lot of cost to making it a throw.

RKG: Just clarifying.

SYG: Please with an issue and we can discuss the issue.

RKG: Sure, can do that.

USA: WH has the reply to that.

WH: A return statement with no expression should be fine, but if you return something other than undefined, I agree it should throw.

SYG: Sounds fine to me.

JHD: So since they’re objects, I find it very important that all current object invariants hold, or at least as many as possible. Except for `window` that was a special security motivated case that I’m not anxious to see extended, if it’s an object, you can weakly hold it or stamp private fields on it or extend from it (altho I’m less confident about that last one). Those must I think remain true. So we’ve been talking about that a lot in matrix. It’s fine if the struct part of it has to be one shot as is in this proposal and then if you stamp private fields onto it maybe it doesn’t go to the fast path and gets slower - fine, whatever. We had this discussion in the Symbols as WeakMap keys proposal. I requested a “can be weakly held” predicate and we were told we can’t have that. One of the consequences of having it, and indicated in plenary after that decision, that we won’t be able to change the set of what can be weakly held or not because code has to make their own predicate and branch because most of those will not just be try-catching around the “weak hold” attempt. So if we make objects that are not weakly held, there are code paths now that will break if one of these finds their way in. I’m not suggesting that the stamped-on private fields or whatever be shared or violate any of the constraints here otherwise, but private fields were very explicitly designed to be essentially sugar for putting something in a WeakMap and I think that we need to retain that capability.

USA: There’s a reply to that by Mathieu.

MAH: Yeah, I think the fact that designed that way doesn’t mean we have to uphold this as an object in variant. I find it very unfortunate that we got in a situation where you can stamp private fields on almost every object. I don’t think this should be considered as an object in variance per se. I would like the committee as I expressed before to be able to reconsider that and weaken this ability of stamping private fields on objects.

JHD: Right. I mean, that’s a fine belief to hold. But like it is currently an invariant and at least one of us believes it should be one and should remain one. And as far as, I mean, even if we’re not talking about weakly held or stamping private fields we can make a side channel with the memory leak putting in a regular map and preventing me from doing that as a struct or shared struct with a key in a regular Map would be bizarre. I don’t know why it’s so okay for me to make a memory leak with the side channel and not okay for me to use the actual mechanisms we have for non-memory-leaking side channels.

MAH: It’s not a question of side channel. It’s the question of WeakMap is API that can be virtualized or denied. Stamping private fields is effectively that capability but syntactic that you cannot virtualize or deny. And this was not—the consequences of that were not fully realized when we allowed this, I think, and that’s my concern. And actually is the same concern I believe for why window—why the web host asks for an exception for the window object and as I mentioned before, I have similar motivations for other objects because I again would like to be able to do behavior like host to do which is virtualizing special objects.

SYG: Keep it—with a long queue, I want to pre-empt some of this. This comes back to if it says object.

JHD: It’s not about the type of value because it functions in null. If you pass it into the object constructor and get the same triple equal thing back, it’s an object for example. Or you could exhaustively do the type of checks.

SYG: What is object construct.

JHD: Call the object construct as a function and pass to it. And return is triple equal to the value pass in it is in object if it is not equal it is primitive and those invariants hold.

SYG: I see. I take the constraint to be— I think you and I are agreed from the language point of view, it makes sense to allow these. But our hands are tied by software engineering reality.

JHD: Sure.

SYG: If we cannot realize the ideal language thing, then it sounds like we need to look for—we need to enumerate the places where to make them sufficiently different from object but object like but not actually objects so they can be used as objects but from like a reflection point of view they don’t look like objects from your point of view. Does that sound like the path forward?

JHD: But then what you’re talking about is taking the world for decades had two kinds of things in it and adding a “secret third thing”.

SYG: This is not a secret—

JHD: That is a high, high cost. And against the benefits that you hope to get from the proposal. If we have this sort of untenable situation where we can’t make it a regular object and can’t make it a regular primitive, it’s not a given that we do the third thing. Just putting it out there that it would be great to solve those problems but these are some important characteristics of the language that have been reliable for a long time.

SYG: My read of the characteristic does not—of that characteristic that you pointed out with the feedback of Mathieu and others that keeping that characteristic outweighs the opportunity cost or the thing it’s seeking to enable and leave it to the rest of the queue.

YSV: And clarifying question JHD, cost for who?

JHD: Every user and learner of the language. And I understand that there’s different kind of stakeholders including implementers and different costs for the group and they’re all important. I’m thinking of it in the priority of constituencies kind of way that users of the programs created are the highest and then the developers… and I’d have to pull it up to cite it; I can’t cite it from memory. Implementers are near the bottom of the list in terms of figuring out whose constraints override whose.

YSV: In that priority of constituency, items such as philosophical concerns and specifications is lower than implementations and when we designed WeakMaps and registry, did we have beginners in mind?

JHD: For those specific things, no, absolutely not.

YSV: So from my perspective,tial costs we’re talking about today to implementation is extremely high?

MM: I think we have weak references and finalization registries are definitely not for beginners. WeakMaps are within the language for beginners.

YSV: Would you consider it to be an unclearable bar for beginners to not be able to use certain things in WeakMaps?

MM: No, I don’t. JHD and I disagree on that. I wanted to clarify this issue about what obstructions were designed with beginners in mind and WeakMaps are definitely in the beginner

YSV: Perfect. Thank you for clarifying that. From my perspective and talking about costs here, it’s not a very high cost to understand that shareable memory, shared objects is something special, this is really something new. We never had something like this in the language before. And in fact, multi-threaded programming is a known hard problem. This is not something that a beginner will be able to work with easily. There will be a lot of stubbed toes in this kind of work. Now, we have a very strong concern about shared to unshared edges because the kind of modification you need to do to GC that can’t do cross help garbage collection already is frankly extremely prohibitively expensive. If we decide to do something like this, this will probably prohibit us from having shared structs. I think that shared structs has value. We need to take this concern very seriously. I would say that the consistency argument for the benefit of learnability is not as strong and does not provide as much benefit given the nature of the feature we’re discussing which is already something that is very complex to work with.

JHD: That’s a good interesting perspective. I will think about it. But I recognize that having shared memory at all, having shared primitives at all, may conflict with the goal of making the language approachable and usable for newcomers.

SYG: Again, for reminder for the rest of the committee and also for JHD, the counter factual here is that it comes via Wasm GC as something that they design in Wasm CG that frankly don’t care about that characteristic. So I think it’s important to keep that concrete counter fracture.

JHD: Yeah, if you’re referring to why we added WeakRefs to JavaScript because the capability was coming regardless.

SYG: I’m saying if you care about objects, everything that looks like objects, what you consider to be an object to all have this characteristic of WeakMap keys and tank this in TC39 because of concerns and that looks like objects to you.

JHD: That would be a violation. There’s nothing in the spec that would allow that. It’s not a JavaScript-compliant engine if it doesn’t allow all objects as a WeakMap key currently.

MAH: Sorry. I would like to object there. The host hope that we added allows the host to stamp any object that they want with that behavior. So not for WeakMap key but private field stamping. WeakMaps can be replaced by the host so it’s just—I don’t know. I wouldn’t go as far as saying it wouldn’t be compliant.

MM: I’m sorry, I think it would not be compliant.

SYG: This is already called out as an open question on the usability of yes or no. And I take JHD—thank you for raising the concerns. I will take them as part of what must be addressed during the working out of that question. Please move on with the rest of the queue.

KM: Sorry. I couldn’t unmute. My original thing about locking and I guess also locking is obviously covered. But I guess the other question open parts of it is deadlock detection part of it?

SYG: For mutex is the deadlock if FD current. If it is the current thread it throws or otherwise blocks. Straight current calls will throw. There’s no cycle.

KM: All right. For the whole question. Couldn’t edit in, other barriers like acquire or release barriers for storing?

SYG: No. But I’m not close to adding them if the use case arises.

RPR: Before we move on with the queue, could folks clarify if any of the remaining items on the queue are specifically pertaining to Stage 2 which is the important item for the agenda here? Or, you know, if there’s a chance that it could be discussed later?

USA: Let’s keep moving in the queue instead of asking people to do that. Next we have Dan.

DE: I’m happy for this proposal to go ahead to Stage 2. The design here is really good in terms of how it integrates with JavaScript. It’s much better than some earlier drafts and I really appreciate the attention to detail that was put in here to make sure that it’s bridging JavaScript and WebAssembly and the needs of hardware. I have two quick questions. One about the super TDZ thing. Is that a real requirement that we not have super TDZ? super TDZ was added before class fields in the first place.

SYG: I’m not going to die on the hill it’s my personal preference. I can explain async why it is. I won’t die on the hill.

DE: Will Mutex have an async form for acquiring a lock, like Atomics.waitAsync?

SYG: Async blocking and conditioning it’s not conditioning, unconditioned variables are called out as a follow up proposal. This scope here as you can see is quite large. I don’t want to add it here. They are planned. We already have a fairly worked out design already. Not going to be part of the proposal.

DE: Sounds good. Thanks.

YSV: This is call out about potential issue with the per-realm prototype described. That is another case we can potentially depending how it’s done shared to unshared edge and concern about GC, I could see this working. I think there is a future for this particularly if we rely on module system to load the prototypes and separately from the shared struct.

WH: I’ve been chatting with the proposers about various aspects of this proposal. My biggest concern at this point is the complexity of `unsafe` blocks and whether the benefits exceed the cost. I think the benefit of `unsafe` blocks may be a mirage and create a big mess for abstractions and indirect accesses. I just don’t see whether having `unsafe` blocks pulls its weight and whether it’s something that we think should be included in the language, which is what we’re trying to determine when asking for advancement to Stage 2. I like the rest of the proposal. I do like the idea of structs especially after you removed `struct` expressions which fixed the syntax problems I found.

YSV: I have just a follow up to WH’s concern and we have the same concern around complexity of the `unsafe` blocks in terms of how to implement it. It looks similar to how we implement “use strict”.

SYG: It’s like that.

YSV: And it’s quite a bit of complexity for what it is. And we’re not hundred percent sure about this one.

SYG: Yeah, that’s fair enough. The motivation definitely stands, though, I think the folks are earnest concern there around this—I’ll let MM speak.

MM: Yeah. I’m not going to try to weigh whether unsafe blocks are worth the complexity or not. But the proposal without unsafe blocks, I consider to be unacceptable. So unsafe blocks were proposed in order to deal with why I considered a proposal in their absence to be unacceptable. And the reason is that the properties, one, the shared structs are public if basically the absence of unsafe is just basically the whole world is the case that would in this proposal currently is called unsafe. It means that you’re not in a position to create APIs that expose the shared structs to non-concurrent clients while encapsulating the raciness of concurrent data. If all of the fields of the shared structs were more like class private fields and they were encapsulated and only the exposed methods of the abstraction could operate on that would be a different story and that would also be a different proposal. Given the publicly accessible nature, the thing that I consider to be a requirement is that the—is to not contaminate the ecosystem with sequential code needed to take on concurrency awareness and not bleed into the ecosystem the cooperative non-defensive nature of the concurrency that’s inherent of this concurrency model. So WH is correct that the methods can still expose concurrency but they also have the choice not to. The properties do not have the choice to not expose the currency.

YSV: So just to make sure I understand it, your concern is with the developer’s mental model and how they work with racy concurrent data structures in a—the word is on the tip of my tongue. You know what I mean, right?

MM: The issue is really the provider of the abstraction they’re an expert that thinks they can write shared method multithreaded code and get it right and there’s the vast ecosystem out there of regular sequential JavaScript code. If the expert has two options, they can try to expose abstraction and the clients of the abstraction must be aware of concurrency and there’s plenty of cases of that. There’s also the case that I hope will be common in that the creator of the abstraction is intending to expose a thread-safe abstraction. And they can’t expose the objects directly in exposing a thread safe abstraction if data fields of the object are public.

YSV: Okay. So I support the motivation. But it is the implementation that we currently take concern with.

MM: I’m fine with that. The issue is to satisfy the need here and the unsafe block is the only mechanism that is so far proposed that satisfies all of the constraints including this one.

SYG: Thanks for raising that Yulia. Let’s cooperate on the orientation on this. I see point of order on time. The queue is not empty. Eyeballing it, I don’t see anything that are obvious Stage 2 blockers. I would like to move on to asking for Stage 2 with at least these four open design questions. Sounds like some of—you know, the WeakMap thing got some additional concerns from JHD that we would need to address. The unsafe block got complexity concerns we need to address. There are certain more sub questions now. So with that, I would like to ask for Stage 2.

USA: Yeah, real quick while we contemplate Stage 2, we have one topic from JHD on Stage 2.

JHD: Yeah, I mean, Stage 2 means we’re going to put it in the language. We just have to figure out some minor little details. And like not just the one that I expressed concern about but these feel kind of major to me. It seems like some of them should be like largely figured out before we go to Stage 2.

SYG: What do you think ought to be—like most of the design—my mental model of the process is most of the heavy iteration happens between 2 and 3. Like, between 2.7 I guess. The thing we want in the language is not like this. The thing we want in the language is we agree on the motivation and like the rough shape of it. Now, I see where you’re coming from. But I want to show there is significant agreement on some of this stuff and here are the disagreement that must be worked through. I think given the scope and the envision of the proposal, this is not like majority of the thing. And if, you know, the quibble is with what Stage 2 says, how do we—I think it is important for me and for committee to demonstrate some kind of progress here in the agreement.

MM: Yeah, I mean, I think like I’ve heard a number of—like, I think MM said without unsafe blocks, he doesn’t think we should have the proposal at all and someone said we shouldn’t have unsafe blocks. Sure that can be worked out one way or another. But if we know that one of—if we know there’s a possibility that the whole thing won’t advance, then it feels like Stage 2 is premature to me. If no one else feels that way, that’s fine. Because obviously they would be blockers for 2.7. But like in other words some of the answers to the questions determine whether the proposal is feasible at all. And that to me feels like a Stage 1 question. But, you know.

SYG: I think in this particular case, of course, I’m biased. I do disagree in this case.

USA: If we could be really quick. WH, you’re next.

WH: I am not comfortable with advancing `unsafe` blocks for the same rationale that MM stated, in that `unsafe` blocks will make concurrent code contaminate the rest of the ecosystem.

YSV: I support the current proposal shape with the null prototype and no WeakMap integration for Stage 2 with follow on proposals for those two items. I understand that for MM and Agoric it is a requirement to have an unsafe block and still discussion needs to happen there and this is a smaller concern than the other two.

SYG: So the hardest constraint I heard sounds like from WH on the disagreement with unsafe blocks as it looks today, I don’t know. That makes me pretty unhappy if that is like given the scope of the rest of this proposal, that’s what hangs on Stage 2 and that’s also kind of like—I also don’t know really how to make progress on that given the constraint here. So I don’t know. WH to clarify you are blocking for Stage 2 with the presence of unsafe blocks here?

WH: Yeah, I’m not yet convinced that we should do `unsafe` blocks.

SYG: Okay. And you are uncomfortable—that is called out whether—that’s not called out whether we should do it. It is called out on the design questions. Mark, given that you are on the other side of the constraint, what do you recommend that I do here?

MM: So I think that the problem—I mean, this goes back to the collaboration that Yulia raised, the problem that I raise I think is a blocking problem. It doesn’t have to be solved with unsafe blocks but unsafe blocks are the only proposal so far that have solved that problem within all the other constructs. So, you know, it might be that you can’t get—there’s nothing to propose today given that it’s either with or without unsafe blocks that will get both me and WH to not block. And, you know, that’s unfortunate. But that doesn’t mean that the proposal stays blocked. It means we can search for other ways to solve the problem.

SYG: Concretely, are you or WH comfortable with searching that given the constraint during Stage 2? Like, I would like to show some progress here. And it’s actually documented that the rest
– there is a surprising amount of agreement.

MM: So somebody needs to clarify for me. I know I keep asking this over and over again. What does it mean to have approved something for Stage 2?

JHD: It’s been a lot of years. Can I read the process document again. It says—we have actually tweaked the wording since the last time. Says the committee expects the feature to be developed and eventually included in the standard, but due to reasons that may not yet be apparent the feature may not be included. It’s not a guarantee that the thing will land.

JHD: I think the only time something left Stage 2 never to return is `Object.observe`. That is very rare.

MM: Okay. So I’m comfortable with that part of it. Does it say anything about the degree of stability, the –

JHD: Entrance criteria says proposal document describes high level APIs and syntax and illustrated examples and all major APIs and editorial issues are acceptable.

SYG: The very first sentence of two says committee preferred solution or solution space and design is draft and may still change significantly.

JHD: Like the rest of the process document, it’s sort of a mess of slightly vague conflicting statements. We have to interpret it.

MM: So, yeah, I mean, hearing the language again I don’t feel lawyer-y enough to make a decision. I feel—as long as we are explicit what we’re agreeing to leaving the question open, I am comfortable saying we have agreed to Stage 2 explicitly with this question of –

SYG: Thank you. That is the intent. That is not the only thing that might make this not happen. The GC thing is probably higher on the list as well. This will be in good company, I suppose. WH with that, how do you feel?

WH: I’m fine with the rest of the proposal as long as we’re very explicit that the existence of `unsafe` blocks is still unsettled.

SYG: Perfectly clear. I will record it in the summary. Okay, great.

RPR: All right. Then we have our consensus. Thank you.

SYG: I will let people go to break and write the summary in the notes. I will just write the summary in the notes.

WH: Is there anybody else who has any input on this proposal that might be an issue? I heard GC raised earlier?

YSV: I raised my concerns to SYG and I believe those are understood.

SYG: Yeah, the GC thing is understood loud and clear. Probably even a harder constraint than the Wasm GC side.

WH: I also have concerns about this potentially slowing down programs which do not use shared structs.

SYG: For sure. This one need to be pay as you use is a hard non-negotiable for VMs.

### Speaker's Summary of Key Points

Known open questions that must be resolved during Stage 2:

- Whether to have per-Realm prototypes (to allow shared structs to have methods) and correlation (and how). Mozilla’s concern here is related to the next point.
- GC difficulty and whether shared structs are usable as WeakMap keys, including JHD’s newly raised concerns that all objects should be able to have private names stamped on them and be usable as WeakMap keys
- Some TC39 delegates raised concerns around the complexity and importance of `unsafe` blocks, given the narrow nature of the guarantees that they provide. However, these blocks are considered important to Agoric stakeholders and others, to have guardrails for data race contamination.
- `Mutex.lockIfAvailable` return type
- whether struct subclass constructors have TDZ for the `this` value before `super()` is called. Shu proposed no this-tdz, because there is no return-override and struct fields are eagerly initialized to undefined before calling superclass constructors, and others suggested that this-tdz should still occur because `this` isn’t logically initialized until the superclass constructor runs.

### Conclusion

- Stage 2, with the explicit understanding of the open questions listed above, all of which (except probably the Mutex.lockIfAvailable) may block the proposal from happening

Reviewers:

- MM
- WH
- YSV
- NRO

## Porffor JS engine

Presenter: Oliver Medhurst (OMT)

- [slides]

OMT: I’m talking about Porffor that is a new JS engine developing. I will just go straight into it. JIT is very cool and they have trade-offs that are unfortunate. Mostly the compiling on the system device. You get a fast running time if you compile longer and also longer loading time. And the security can be questionable sometimes. But the ahead of time domain which I guess more traditional languages like C plus plus or rust design will compile to the binary ahead of time which I hope most people will know. This can solve some big problems of JIT and not compiling on device and the loading time issue doesn’t exist and using the binary format like WebAssembly sand boxed the security can be power graded. The down side is you don’t have eval or anything but arguably that’s good. We’ll say since you’re basically making a new JS engine, that’s unsurprisingly hard. So Porffor is my engine that does this. It currently passes around almost 50% of Test262. Just confirm the entire, that correlation there is funding. The other advantages of this is native compilation to binaries and not shipping an entire JS run time you get tiny binaries that are 15 megabytes than 19 megabytes or something. It supports native TypeScripting but since you have control of the entire engine and written in JS and TypeScript. I wanted to participate in TC39 because I like standardization and I think it’s a unique interesting implemented view. And I will hopefully do a live demo. Do people want to shout out things to run?

OMT: I do not have BigInt but I have classes. I don’t have BigInt yet mostly because I would never decide on a good way to do it. I started doing regular expressions and then kind of gave up because unsurprisingly they get very odd quickly. I have weak ref essentially and I have very basic promises like—yeah. Very basic just no real event loop but makes enough promises.

JWK: I have a question. So what does it mean running on Node, because it’s in JS engine, right?

OMT: It’s written in JavaScript. So it’s using node to run it. Does that make sense?

DRR: I think they’re asking what exactly is the mechanism that makes the code that you are generating run? If you can get into the specifics.

OMT: It’s compiling to WebAssembly that uses V8 to run it.

JWK: Do you mean the compiler itself is running on Node?

OMT: Yes. Unfortunately. I support OXP for this. so if you do TypeScript input, it can use these type as optimization in the compiler. If you have no type inferring, if you did this, it would then know like there’s no chance of sting concur.

DRR: What happens if you say let C be a type number and then assign a string to it?

OMT: Yeah, that’s one. it will give you the points of the string. You can then do cursed inline WebAssembly. You can get the length of the string with the because pointers.

DRR: Okay. And going the other way, if you say, you know, you have something that is of type string and you assign it a number, does it coerce? What is the behavior there?

OMT: Well, because the TypeScript just kind of expects you to be correct. But I guess for this, it will probably—like if I do a point string, I think that’s funny—16. If you do this. Yes.

MF: Just understanding what your previous example with plus—it looks like you’re doing type directed compilation so when they're both numbers, you output WASM that assumes they’re f64s or something?

OMT: Yeah, probably do by example. You can see the WebAssembly output here. Ignoring some stuff, it just does add sort of any sort of –

MF: Can you make a `c` variable that's a string and then do plus and show that the compilation is different?

OMT: If I restart this quickly. So you can see here it’s doing concat string.

USA: There’s also a question on the queue by CDA.

CDA: Do you have any web platform API, like, set interval?

OMT: I have a few things like some basic 64 things. I have a few but mostly experimenting with things, because the actual built in API are written in TypeScript and then compile itself like the base 64 break down. With the WebAssembly but it’s written in TypeScript and then compile itself to WebAssembly. And basically every single API is like this. Every single spec. I have a few but essentially it’s kind of good for—I’m using my own engine, it’s good to test the limits of it with APIs.

DRR: Yeah, I see that you have—I guess I kind of see it maybe in your code up on the screen right now, but I was going to ask, you know, because naively every number in JavaScript is just a flow, but it seems like you’re using I-32 operations in WebAssembly. But I guess do you basically just try to stay in Int land as long as possible and jump back to floats when you’re uncertain about a type?

OMT: Yeah, essentially. I have like special built in I-32 and 64 types and any—internally if it’s indexed to the string or something I try to use Ints as much as possible.

DRR: Gotcha. Whenever you—what is the code that you generate when you let’s say access a property off of the object and you don’t necessarily know what that type of that—like, let’s say you have an untyped parameter in the function and you assign that to something of type I-32 what is the—does your compiler have to generate a specific set of codes or run type helpers? I’m just kind of curious about this stuff now?

OTM: I guess essentially it’s basically just like a big switch statement. It checks prototype and calls different functions depending on the type. Usually there’s some inferring that you can do that helps a lot like if it’s computed you don’t need to do like property key stuff. And you can do some fast things arrays. Just a dot something.

DRR: Okay. If you wrote a function in Porffor just on this, would it be able to spill out the instructions from that?

OTM: I guess really basic example. You can just recall to this WebAssembly and just use it as a module. Because it doesn’t know the types, it has to potentially do a string look up. which is checking type things and then—I guess for now optimization mostly because I’ve just been grinding conformance.

DRR: Pretty neat, though. Yeah, as long as you stay within the subsets of typed things that you want to use, it seems like you can keep things pretty type.

JWK: Does it support dynamic part of JavaScript, like it can change the object’s prototype on the fly?

OMT: Yeah.

JWK: Get the correct results?

OMT: It should. It can be a bit iffy but you should be able to—some things don’t work but you can hopefully do like a dot or—like, for each custom function. It doesn’t not work because of some—yeah. This might not work because there’s some caching stuff.

JWK: Can you change the prototype of A?

OMT: Oh, yeah. t does some weird stuff like primitive objects and do some optimization and if you do an object. Yeah, there’s some weird stuff that I try to do some optimization. I have like hidden internal types which if you ever have, that can be strange.

DRR: One of the things that you mentioned early on is that you could get very, very tiny binaries at the end of the day, because you don’t necessarily need, you know, certain runtime helpers and things like that. But are you able to—I mean, it seems hard to guarantee that when you have dynamic access to properties and things like that, right? Are there like—are you planning to disallow those? Are you planning to just say if it happens, it happens? And what you get is what you pay for? Or are you thinking about guardrails there?

OMT: I guess I at least I hope most of the time that wouldn’t really be a thing. But like for this example, it’s pretty tiny. But if I did like globalThis, it would probably include everything. Yes, so that’s a hundred kb and including every single function but it’s pretty tiny.

OMT: It’s still relatively small compared to everything else. So I’m reasonably confident it would still be good enough.

USA: That was all on the queue.

DRR: Are there anything that are staking out that, you know, you see as major hurdles coming up that you’re either thinking, well, that’s going to be a lot for me, like, you yourself, or that you specifically need help with or feedback on or things like that.

OMT: I guess stuff like `eval` I will probably never do. Like, you could do it but including the compiler in the binary, but at least for now, I’m not really worried about it. I guess my hope is most modern JS doesn’t rely on that sort of stuff. But I guess there’s some things like having a really good GC and stuff. I hope to have an option to use Wasm GC or like my own GC because if you’re say using this sort of website, you want Wasm GC because that makes sense because it’s an embedded device, that won’t support Wasm GC any way. Any other question?

DRR: Are there any specific code bases that you have tried to get working in the wild at this point, that you’re sort of using as a test bed or really working on Test262?

OMT: I guess I’m just starting to get to that point. My hope is some day to get it like compiling itself. I’ll probably use my own code base for that. Because I use ecorner, so I will hopefully get that working relatively soon.

DRR: Very cool. Just want to put that out there. Thanks for presenting. I don’t want to hog out all of the questions. I appreciate it.

OMT: Thanks.

### Speaker's Summary of Key Points

I’m on matrix if you want to talk to me or I have a website that you can follow things. There’s an online playground thing you can use for compiler with the graph of test 262. Thanks.

## JSSugar/JS0

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/1ylROTu3N6MyHzNzWJXQAc7Bo1O0FHO3lNKfQMfPOA4o/edit)

SYG: Okay. We should get started. All right. This is going to be a spicy topic. It’s broken into two parts. The first part is a description of what the folks on this title slide here think of the current problems with language evolution. Inside TC39 and how we evolve JavaScript and the second part is possibly the more spicy part of a solution that is endorsed by myself as V8 and Google, not necessarily endorsed by folks on this slide as a possible way forward. So with that, going to go through first—so part 4 is the let’s talk about a possible future and possible solution. And parts 1 to 3 is a description how we see the state of the world today and problems with it and some of the issues with it. So who is involved in language evolution of JavaScript? I think the stakeholders are, on the one side JavaScript developers and these are the folks that author JavaScript and I use it loosely and don’t mean Ecma 262 and could be JavaScript and extension like JSX and these are developers front end and web and native via web tech such as Electron and the Bloomberg terminal and backend stuff like Node, Deno and bun and also embedded like Moddable. In the middle I believe are the implementers and are implementers of tools that transform travel script like like Babel and like TypeScript except and then also the implementers that usually talk about in this room who are the engines of which there are SpiderMonkey and Firefox and JSC and V8 and Chrome and XS in Moddable and they execute your JavaScript. And the other are end users of JavaScript and don’t care how they’re written and what technology and have the use of the browsers and user of the apps running in web browsers and a lot have service side render on days and apps on server run times and embedded device and JavaScript. They look like this. And JavaScript and JavaScript adjacent and feed to tools and possibly none and the data bears out that everyone in the ecosystem use one tool and spits out JS and run time and engine consumes and run the application that the users interact with. And

SYG: I want to start with really calling out the JS is really special. JS as a programming the practical programming language in the world is really outsized in everything. Has tens of millions of developers, some estimate on some like estimate—some statistics service website estimate 25 million JavaScript developers and billions of users of software written in JS and they are users of web browsers and Chrome has billions of users with Safari and Firefox and I i don't know how to count the IOT stuff and I imagine a bunch. There’s many, many maintained independent implementations. This is really pretty special that we have such a vibrant standardized interoperable ecosystem. So that’s the stakeholders of who is involved.

SYG: Why do we evolve the language and why are we here and why do we work on JavaScript and how do we evolve the language? I think we evolve the language to help developers. We want to help developers to be more productive in general. And we change the language to try to help them better match their mental models and this could be functional programming, this could be OOP style programming and type systems and with the recent share of iterator proposals and people who are used to thinking about streaming and transforming data. We want to help developers to be more productive by enabling them to express new domains. And these things can come up as the world discover technology and machine learning and model stuff and finance and science computing and want to help developers build new class of apps with new capabilities that weren’t possible before and things I’m doing with shared memory in the camp. I want to help people write a new class of apps with the new class of performance that wasn’t possible before, WeakRefs similarly to enable a way to hook into the garbage collection was not possible before and help developers new interfaces by us and assembly and help simplify their lives by removing dependencies and build tools. And I don’t want to be so bold as to say this is exhaustive, but this is like most of the reasons of how we motivate proposals here and why we want to evolve the language at all. How to do this?

SYG: Abstracting away complexity in mental model and new domains and reify common patterns and remove dependencies and did see new abilities and new capabilities and new interfaces of Wasm and explicit coordination point that we think is a benefit to the ecosystem. And the first one is bolded because I think that is the bulk of the work here. Important point here is abstracting away the complexity usually moves it. It moves it and may look like it is removed from the surface language. But in terms of the full picture of the stakeholders, we think it moves it, it doesn’t remove it. The complexity move from developers' code to the language implementations. So when the complexity is moved, the characteristic changes a little bit. So an application—complexity in a particular application, the application level complexity has negative impacts limited to the user. If the particular application is complex and has problems arising from the complexity, if you don’t use the app, it shouldn’t affect you. It’s usually easier and faster to patch. Because on the web you can push out a new version. You can deploy a new version without asking everybody to install it. Implementation level complexities in the engines in the runtimes are—they’re broader in their negative impacts. It impacts all of the implementation users. Impacts all of the browser’s users. Doesn’t matter the application they’re running, the complexity in the browser itself and harder and slower to patch. In Chrome, and I can only speak for Chrome's engineering practice that I know best here, for zero day security patches we do a respin and release a new binary because we think the cost of having to ask everybody to do that outweighs the cost of people getting exploited in the wild, but respins is also a very real cost. It’s just harder to roll out because people don’t want to update for whatever reason. So that’s the how and that’s the why and the how. So far, we talked about developers and the implementers a little bit. What about the users that actually use the applications that are written in JavaScript? So from a user’s perspective, what do the users want? They are not developers. They are probably not necessarily computer savvy at all. But they want security. They understand this at a pretty visceral level. And if we’re doing online shopping, you don’t want people to steal the credit card information and money. The scary version of security is that for a piece of software like a web browser that has the reach it does, zero days are known to be used by, let’s say, I think The term of art in the industry is like "surveillance vendors" or something, I forget what the the actual thing is. It’s much scarier than it sounds. Basically these are folks like nation state level who are in the business of exploiting these zero days to, you know, destroy their dissidents and enemies of the state in some way. This is real bad shit, that at the end of the day why we care so much as the browser vendor about security. Yes, it is bad if your credit card got stolen, but it can be a lot worse than that.

SYG: There’s performance concerns. Everyone wants the stuff to be fast, naturally. Hopefully that’s self explanatory. Users want stability. They don’t really want their app to suddenly change; especially to suddenly break. And users in general want features. They want new features. So remember the end users are, for the engines, the implementer’s primary customers. We want to help web developers but at the end of the day the people that use the product are the end users and we want to do right by them. What user impact do language features have? From the security impact it’s almost always negatively impacted. I will go into it. As the performance we hope best case we hope it’s neutral in that it is pay as you go. If you don’t use the new feature and introduce a new feature the existing codebase of JavaScript programs are not using it. The purpose of the application is not affected. But sometimes we do introduce new features aren’t pay as you go and add extra costs to the runtime and parser. Sometimes it's worth it. It’s still a fact that performance is negatively impacted by adding new features and stability is sometimes negatively impacted. I will go into that. The main part where we have positive user impact on language features is on app features. The hope is and very hard to show direct causation here, the hope is if we add new features, that developers truly want, that helps developers have higher velocity to ship new users that delight the users. That is the ideal path and why we add new features. But that’s the main hope people ship better features faster is what we hope new language features to do. All right. So to drive home the security points and more, I think the takeaway here is that complexity equals security. This is an undercount of security bugs in browser engines. Because these are CVEs and we don’t file CVEs for every security bug. Probably not every zero day either. These are the ones I took a quick survey of sampling of the last like five years of CVEs with V8 and SM and asked other developers to implement those and most were V8 and took the ones that are feature related. Part of the point I’m not showing that syntax features are bad or that a particular kind of features are bad, it’s that all features basically result in security bugs. Any feature we add is complexity-- BigInt and promise scope and built-in subclassing. Everyone probably hates that. Probably shouldn’t have built in subclassing.

SYG: You know, again, like, I think for a lot of these, we still made the right choice. We should have added those features to the language. We will get security bugs, on the other side of the coin. The point is not like we are bad engineers. Hope we’re not. I don’t want it toot our own horn, but we have security reviews, a lot of compute dedicated to fuzzing, we have bounty programming to throw at external folks and their compute. So they report security bugs to us early and often. Despite that, this is the state of the world.

SYG: So the point here is that VMs are very complex because there’s pressure to be fast because we as users, we want that, and that cross-cuts security and we want to do better obviously. Again there’s competing pressures here. That is bad when complex features, responsibility for complexity don’t get adoption, species, BigInts to an extent. We add things on the hope that the arguments we were convinced by in committee, are true, and but the real test is, when we ship it, in five years, did their motivations come to pass? It feels bad when that happens. We incurred a lot of cost and didn’t get the gain.

SYG: So that’s security. For performance, a lot of new features are slow because we put in guardrails that can’t be optimized. I think we put it there with the best of intentions, right? It’s like why would you ever want to use that before a dev? It’s great. If you do use lexical scoping, you get this additional guardrail. But it has since then, come to light that some—well, some large applications who are performance sensitive and have regression tests can’t ship `let`/`const` natively that—because the TDZ checks can be not elided in case and they transpile it to vars. The transpilers did not have TDZ implemented because that is too slow. So the state of the world ended up being we added a well intentioned guardrail that doesn't get used in matter in practice. There’s some designs that are I think in a vacuum the right one, but are now realizing even back then may be inherently slow for the network. Like our module system. Native adoption is on the rise, but I think this being a round trip network time is like something we must solve, otherwise, it will never get native adoption. We design static semantics. The file system locally. You know, the performance tradeoff is different. That’s fine. But we didn’t design it to be correct for a performance free network. The iterator protocol is one example. But there are things we design with too many allocations… we really didn’t work out.

SYG: Moving on to stability. I think this one we're very good. Probably the best language in the world at this. But still, we have sharp corner here. We are good with backwards compatibility. We take "don’t break the web" very seriously, but there is a sharp corner: enterprise, the smaller corners of browsers users at least that institutional for whatever reason they decide to use long-term support. The problem is that the reason they freeze it, they want the browser to not change because they're a risk model for hospitals or decide that’s too much risk for them to take.

SYG: But then, applications on the—in the wild, may move on features faster than that. I think Firefox had experience with nullish coalescing where nullish coalescing was not supported on older enterprise versions, but supported by the modern browsers, recent versions I should say, that a lot of apps switched. But then that broke for these enterprise customers. And you know, they complained to the browser vendors and this is something we see.

SYG: And finally, the positive impact on new app features. Now language features… we see some holes in this as well. Sometimes it works out. But when it hasn’t worked out, we have seen that native adoption of features is lackluster because sometimes they find performance regressions. The play book here goes, some app with performance regression test suites, which is already a very small percentile on the app. They decide, it’s the best thing to transpiles generators and to ship them natively. For whatever reason, maybe it’s better debugging in the wild. Maybe it’s smaller wire size, they think it’s like the best practice and they should modernize their deployment for best practice. And they find out it regresses performance. They file a Chrome bug, a Firefox bug, a WebKit bug. And we try our best and sometimes we can make it faster and sometimes we can’t because the stuff we design ES6, it resists that level of optimization to bring to parity with ES5 performance.

SYG: And sometimes use cases that we hope would materialize never did. Like BigInt. And some of it I think is—I don’t have, you know, I don’t have a way to substantiate this. There is lack of incentive to stop transpiling. The users aren’t complaining about being too slow. And why fix what is broken? When you wrote it, it wasn’t—widespread enough support for like cost. And why bother to update. There’s inertia on a lot of part of the web A reasonable thing to ask is, we do important work here. Good work with evolving the language. Aren’t these negatives to the users offset by the benefit to the developer? The developer builds more things. Higher velocity. Isn't it like an aggregate negative positive on the JS ecosystem? No. This is a bit flip. Which is why I have this small note on the bottom. There’s a trade off. Obviously, there are cases where a win for the developer. It’s not a clear win everywhere.

SYG: And the main reason I think is that the cost to the users of these browsers of these runtimes, the cost is in aggregate to all of them. When we incur complexity in the language in the VM, it’s a cost to everybody regardless of what app they are using. Just from principles like it would be nice if complex things were only at the edges, foundational things ought to be simple. JS runtimes are used by billions, a security flaw there has wider implications. The user base of each application is much, much larger than for the vast majority of apps. And I think there’s an important note, there are corners of the web, the ecosystem I know best, but where there are apps that are really platforms and something worth attention. WordPress is something like—I don’t know crazy like 30% + of the web. Something there deserves special attention. Something in FaceBook and Google and these web apps, they do deserve special attention. I am not saying all applications are much smaller. And complex illustrated costs in the runtimes have a storage, memory and performance cost to every user regardless of adoption of those—of those features.

SYG: So the way I am framing this, I think that there’s a polarity here and the goals are the intentions on either side. We want to help developers to be productive. On the other hand, our attempts to do so in JavaScript given the constraints that exist in the world, puts that intention with doing right by users along the security performance stability axes. We are here, to develop developers and be more productive. I would like for us to move over here, I think that’s an eagle. That’s what I searched for. It looks like a pigeon. I want to move us more to the right of the polarity of doing right by users because that is the people that I think we should be looking out for, there’s just billions of them, and there’s, you know, there’s consequences.

SYG: How do we get there? So far this presentation is how we understand the world. I think the implementers get the brunt of the fire and we deal with the zero days and patch and do everything and we would like things to be better. How do we get there?

SYG: How do we get there? We need to have a talk about how we introduce new features. This is a broad discussion and I am going to offer one possible path forward for one narrow kind of feature. But this is—the description, hopefully makes it clear it’s a broad problem that I think concerns all proposals.

SYG: So let’s talk about the future. What engines want, which hopefully I impressed on people, we want security, performance and stability for the users. So the takeaway: we will be conservative to move the polarity more towards doing right by users. What I am not proposing here is a new process or demotions. I think it would be bad to try to demote stuff ad hoc, stuff that has reached a certain stage, not demote for this abstract reason. If we want to demote stuff, we should discuss it case by case. This is really about steering the future.

SYG: So before we get into that, we should—first take a taxonomy of the new language features. Broadly, we have syntax, we have API features and capability features. And perhaps some combination of both.

SYG: Syntax features are characteristics of the kinds of features. They may be decomposable. This is a polarity shown by the trade off arrow there. Represented as API. We saw this with BigDecimal proposal because of constraints from the engines, the champions have decided that it’s worth the addition as a pure API, even without the syntax. I guess it’s like fully decomposable syntax. Syntax that can’t be proposed by API, but people want to type not a API—like pipeline. Syntax where the textual representation enables its function, like records and tuples proposals, structs in the declarative immutable sense of it. There’s also a language distance polarity for sine features. Some syntax fit without issue into JavaScript which is dynamically typed. The other languages are statistically typed, they are perhaps—designed with the static type system in mind. The history is better fit, and sometimes we kind of butt up against that when trying to make the same patterns work well in JavaScript.

SYG: APIs, we have built in methods. So iterator helpers, things like that. We can also add new builtins.

SYG: For new capabilities, these are often about exposing capabilities that are on the underlying machine, but not inaccessible through JS for whatever reason. So things like float16, we added new machine type. That existed in some machines at least. Access to GC information, not exposed that we decided would be useful to expose like WeakRefs. And for the shared structs, exposing a shared multithreading, that native applications have and we don’t have and there’s opportunity costs in that Sometimes exposing the host platform. Not like characteristics of the underlying machine or OS, but about one layer on top, so web APIs, WinterCG, TC53. These are new capabilities and they have special or not opportunity cost of not adding new capabilities is large because the alternative is you can’t do it. The alternative is not that it’s more unfortunate to type or that it is less understandable, or more verbose, but that you can’t do it. This is where a lot of the risk appetite for implementers is because we are interested in growing the pie and also help developers and this is—capabilities are basically an un addressed corner of the developer market that we hope if we add a new capability we can—bring them in.

SYG: So the rough guidance for what the implementers thought should be added to the language. New capabilities, simplicity for understanding implementation for security reasons, for the ones I discussed. Features that have wide adoption and known performance advantages by being in the engine. High confidence needed in the use case for history of, you know, agreeing to implement things, hopefully—hoping that some use cases also pan out and finding they don’t. And the costs associated with that. And particularly the existence in another language should be sufficient motivation given the cost that we are currently bearing.

SYG: With all that said, how do we do that? We could like not—say no all the features. That’s bad. We want to help developers. Polarity is not a black and white thing. Can we have a win-win flexible situation? I hope there is a solution where engines being more conservative for the reasons we say, does not directly imply that we stop evolving the language. Here’s a possible solution for syntax features and this is mainly my preferred situation, Google's, and do not speak from other implementers from here on out.

SYG: So our preferred solution, first take stock of how we see the world and what we see through data that we have of the developers ecosystem. Through the data we have seen that developers have embraced tooling in the past decade, I suppose. TypeScript continues to grow in popularity. Babel has 50 + million downloads. TypeScript usage outweighs JavaScript. And survey data show 55 to 9% of developers using framework. I don’t run these surveys, but everybody uses tools is the picture we see from data.

SYG: Tools exist and widely adopted and they don’t go away because they are on an upward trajectory. Can we use that for a win-win? If we standardize JS as the ecosystem uses it, perhaps we can split the language into two layers. One, which is a directly executable layer, for the sake of being concrete I am calling JS0. And then a layer that sits on top, which is still standardized, with normative semantics. With normative syntax called JSSugar, it must be compiled down to JS 0. They are not directly executed by engine. But standardized features that are progressed by tools like bagel, whatever tools there are and spit out a JS0 that has observable semantics equivalent to what we spec it to be.

SYG: And for developers, the thesis is that because the majority of developers consume JS by tools, they don’t really need to learn the difference. From their point of view, they continue to write is JS. Some of it gets transpiled away and standardized to be transpiled away. And this is a reflection of the world today in that not everything they write is—pass through and shipped. They have to choose what target they want to ship it. ES2025? ES5? 6? And from the workflow point of view, the proposal is basically just instead of thinking of ES6 or ES2024 or whatever, they now think of it as a JS0 version.

SYG: So hopefully no additional cognitive burden to work flows for developers who already have tooling. So taking the previous picture, the proposal here is JS is split into JSSugar and JS0. From the developers view, it’s JS. We reduce the surface of things directly implemented by engines to address the stability performance that the first half the slide deck was about.

SYG: Concretely, the proposal is that we allow future syntax features to be specced as desugarings. This is scant in actual detail of how this would work in 262. I think it’s more important to discuss the high-level of ideas here and then the nuts and bolts of what we can iterate on as needed. But I don’t want to lead with the technical details. They are still standardized features. They can’t implement whatever they are not. There’s a notion of compliance. I think tools for those features count as implementers as like the engines count for all features, I think tools ought to count as implementers and engines don’t for the JSSugar features. API and capability features go to JS0 because that’s where they—because that’s just a proposal, I guess. Other folks in the space, you will have some exciting ideas about how we can apply the same possible win-win flexible thing to libraries, but those ideas aren’t fleshed out. One still counts as implementers for the JS 0 features and one standard.

SYG: And nuts and bolts aren’t worked out, but Test262, you can imagine that there’s a section that only the tools run and they are also, you know, compliance matters for the tools.

SYG: This is not a proposal again for tools to do non-standard extensions. This is a misunderstanding that I got multiple times. I want to iterate this. This is not anything that transpiles to JS like a JSSugar thing and give up on that extension space. I am not saying that. One way to think about it, it is a proposal to call for more tooling into TC39, I think we are glad to have babel implemented here and TypeScript implementers, but the tooling space is bigger than that. And honestly, we should have more direct participation from those folks.

SYG: So continuing with the proposal, you can also think of JS 0, the directly executable layer as a ABI layer to aid coordination of compiled JSSugar features. JSSugar features need to demonstrate that they are debugable at runtime and sufficiently supported by source map. We can’t add the sugaring and them out high and dry off. In my vision, the JSSugar and JSh 0 are fluted over time. If we ship something, via JSSugar as part of the language, because the state of the word today is that early adoption or mid-term adoption of new language features and syntax is via tools, that—think of it like a long incubation time, we’re shipping it and telling people it’s okay to depend on it. But that gives us some data on the adoption on did the use case that we think—like, did the motivated use cases we think would pan out actually pan out? And give us data on our design. And it could come to pass over time, shipping via the tools teaches us that we are leaving something on the table by not having it in the engine. Leaving performance and security. It’s actually—you know, we can argue with more confidence in data that it’s a good thing to support in the engine natively, and we should also be free to move such features into JS0.

SYG: It’s totally reasonable, it may composed of a JS 0 and JSSugar. There’s syntax and but a small runtime core to support that syntax to be used.

SYG: So is this a win-win? I hope so. This is highly speculative. It’s meant to provoke discussion. Here are my arguments why I think it’s a win-win. The hope is the language can improve DX without impacting all users’ performance and security. JSSugar focusses on DX. JS0 features focusses on simplicity and security and performance. And rough guidance for higher bar applies to only JS0. Horses for courses. It is unfortunately just true that JS VM teams are poorly staffed to understand the broad spectrum developer feedback on the web. Is a very large space that is very heterogeneous and for us to fully understand we are not equipped to understand that, very well, but we’re good compiler authors. And this exchange would let us be like—what we are good at. The tooling teams, the users are the developers. Hopefully they get direct feedback from the developers.

SYG: And the improved runtime security is mainly by slowing down the increase of the JS attack surface. Because I am not proposing we remove anything of the JS today. We must maintain backwards capability. But hopefully, the slow down lets us secure and battle harden at a slower rate.

SYG: I also hope that JS0 can have fewer guardrails that are slow and complex and put those guardrails in the tools. You can imagine an alternative world where TDZ is static. That is very hard—like there’s problematic problems with that design. Like, you want to close over stuff. So the static TDZ doesn’t make sense. You can imagine a guardrail where it’s statically checked by the tools and then compiled away and then JS0 doesn’t deal with that and developers will still use it and get a lot of the benefits.

SYG: And I hope by standardized features expected to be compiled, transpilation will feel more permanent and better aligned with the tools. I think some tools for rationale reasons are not perfectly spec client, for too fast or slow or whatever, if we thought of features, we would design them differently to not have those problems. We spec something that has observable semantics; it's up to the tools to figure out how to do that. And how to implement that as transpilation. If it doesn’t admit a good transpilation and the choices are super slow or break corners and people use you, and you hope the corners you broke doesn’t matter. Given the wide adoption of tools, I hope this bi-level JS shouldn’t not affect the majority of the workers.

SYG: JS features can be less stable. I don’t mean we should change things willy nilly. But obviously, we end up codifying, we agree on as a committee and agree on as mistakes. My hope is that those kind of corner cases can become less stable and easier to fix because the universe of developers is easier to convince to update a tool than the universe of browser users. We are talking at least 25 million versus 3 billions. The order of magnitude is very off.

SYG: If we design features with transpiling codegen in mind, we should be designing it with that in mind. That is the first, you know, like that does matter. We may think to ourselves, in the long tail, that people will stop transpiling and they will ship natively. But that has its own cost as we have seen sometimes it’s not possible and it’s true that people do end up just leaving the transpiled steps in place. And there’s no reason why we shouldn’t really think about that while designing some of the features.

SYG: FAQs to address some of the questions I heard when I talk with people about this. 1 JS. Does this kill the idea of a unified JS? I hope no. The state of the word is that JS is authored with tools in the loop. Tool-using developers will care about JS0 in the same way they care about what version of ES to downlevel today. I don’t think that is not one JS. I hope this doesn’t also break one JS. This probably the most conscious one. Why does it take too long? The starting point for me, we look at the data and the author, directly for runtime model is outdated and no longer borne out by the data in the [juz] ecosystem. JS grew up basically. And it is definitely true that there are many hobbyists developers small teams that directly benefit from a toolless model of JavaScript. But if we are kind of maximizing the demographic that we want to support, what we see in the data is that people use tools, frameworks. So the state of JS development today already requires tooling to be productive and competitive… I don’t see any evidence that the adoption rate of tools is increasing, despite efforts of influencers in the field saying that toolless JS is where it’s at. Aspects of web development today that preclude a frictionless direct authoring like secure context server. Direct authoring can be recovered also during development at great performance cost. DE, who has concerns about this proposal, I don’t mean to imply he endorse this proposal, but he pointed to me back when CoffeeScript was around, there was a way to copy-paste this in an indication tag and have a CoffeeScript tag.

SYG: You can author CoffeeScript directly. If that is—if you don’t care about performance and want frictionless performance, you could cover that.

SYG: Won’t devtools be worse? I would like to turn this around. The opportunity for having a standard ABI layer hopefully can improve debuggability of transpiled features. Right now, there’s no market pressure for different transpilers to coordinate at this ABI layer. It’s an opportunity to require better source map support for transpiled features What about my proposal in the pipeline today? Best I can offer there, see the rough guidance and it remains important that proposals be individually considered on their merits as before. So next step and challenges. Tooling representation TC39 needs to improve, if this were a thing and just for a process-wise how does this work? Keep it in plenary? How do we aspect the sugaring. Is this a good or bad idea? These are specific technical things that have not worked out and are less important to work out until there is broader alignment. There’s a giant queue and people are angry about stuff. So let’s hear it.

CDA: There was a slide that said for developers, JavaScript would be a combination of JSSugar and JS0. It seems like it’s not transparent to the developer. They need to use an intermediate tool. Or will a transpiler be baked into the engine?

SYG: it’s not baked into the engine. It was for devs, the majority they have a tool, with a build step. For those developers, that is transparent to their work flow.

WH: I like the direction this is going in. I really resonate with the second half of the talk. On the other hand, I find the first half problematic in terms of setting up framing as a conflict between users, developers, and implementers. The premise was that there is a constant amount of complexity, and abstractions just move it around from one of those three to another. I don’t think that that’s necessarily the case. Complexity is not constant. Most of the complexity we are dealing with came from subtle decisions — little syntax decisions, little decisions how functions scoping should work. We are suffering for past bad decisions. The best way to reduce complexity is to think much more carefully about the complexity that we are introducing now. A timely example of that would be `unsafe` blocks.

YSV: I think we agree WH that we need—if I understand correctly, what you are saying, and please correct me if I am wrong, you are saying that we should be more careful in terms of what we are introducing to the language from the syntax perspective. Is that right?

WH: Not just syntax — behaviors too. I’d say 80 to 90% of the complexity we’re dealing with is not inherent to the problems we’re solving. It’s from bad decisions like adding `Object.prototype.__proto__` to the language. Things like proxies. Complex syntax…

YSV: Yeah. I 100% agree with you. It’s not just the proposals. It’s how we go about, for example, resolving constraints in some cases. Or trying to solve actual problems within proposals. I agree this is one of the issues that we need to discuss solving. And I think we would be open to proposals about guidelines or other mechanisms to use to help us not make mistakes. The problem; once we land something in implementations we can’t unship it. It really raises the bar in terms of what we are doing here

WH: Absolutely. Absolutely. And that’s why we’re suffering so much, from past decisions such as adding `with` to the language. There is nothing really inherently expensive about the TDZ. It’s a problem for implementers due to excessive forward hoisting within scopes, which was just a bad decision.

ABO: Right. So I think that there are some of the issues in the first half of the presence, that would have full effect inside the proposal. So if you—the way—I think something that I am not sure if—well, that—okay. More many websites, I would say most of the websites that use tools are okay. Maybe there are some—my feeling is that for many websites, some are shipped, and it stays there. And maybe some things get added later on. It’s not like the whole stack of code gets rebuilt with every change. And that means that you—if you pass the buck out of implementers features like transpilers, can you fix mistakes like in those—in that compiler that will not change? And you will not—if you—security will not be—much worse in browsers and you would not have undefined behavior in, like, in transpilers. Could you still have thoughts that—that end up being, like, and so on. These might get them fixed in many sites. And about the enterprise thing, the use case of some sites starting using optional chaining, and like that—I think that is unavoidable because you might be only focussing on JS because you work on it. But that will—like, that doesn’t happen only with syntax. It will happen with new APIs, it will happen with new web platform features. That is unavoidable. And this proposal will not change that. It will go beneath the surface

SYG: I will be respond to that real quick. What you say is true. I put this slide back up because the ideal number of security bugs is not zero. The ideal number of complexity is not nothing. It is a polarity. And I am talking about moving the needle to the right here. Which does not mean it is a 100% thing. We’re talking about—I am talking about things we hope will move the needle. So any impact here is a good impact, even if we don’t completely solve the problem because as you say, I think the problem is unsolvable for 100%. But it’s incorrect to conclude then we don’t try to solve it.

YSV: I just have a quick reply to that. I think also, JS should—the proposal shown here is looking at one facet of the problems. We can look at these from different perspectives and I think it’s worthwhile investigating it from alternative perspectives as well.

ACE: So TDZ, as a concrete example, there's something where, as you say yourself, Shu, tooling, it can pen more time analyzing, it can still, at least from what I can tell, tooling, they won’t check TDZ. It might catch trivial cases and even the runtime. When you get functional declarations, it’s like everyone agrees that’s hard.

ACE: If we went back in time, and we had this world before we implemented those things, I am wondering what we would have done. It feels like on both sides, both tooling ahead of time and at runtime, it’s a case where we kind of want the checks to help developers catch these mistakes. But it’s too costly to do those checks. So in that world, I can imagine that split hair isn’t necessary like which layer. But it’s like at what time should the semantics hold? You could say in the spec, we think developers tooling should check that this—this variable is only accessible after it’s been initialized. Because sometimes in tooling, maybe DRR… What about the tooling ban? Sometimes things that it will allow. It’s the gray area, if the spec allows it, maybe we should allow it. And this TDZ is a place where we want to say this should a check. It has to be done at runtime because it’s—if you want the tooling to emit code that adds that check, only when you are doing a debug build, it’s going to have to, like, wrap the reference in like—either a site like—use some magic symbol to represent the uninitialized state to add all the runtime checks. I am wondering your thought of that split, of a spec designed for clarifying which things the tooling should be. Trying to help the developer cap, even if it’s an actual runtime assertion. But I want to avoid that runtime assertion once we go to the production.

SYG: I think it’s—that sounds fine to me. If we have stat semantics, run by the tool, that works for something like TDZ. Like sugar, how would you frame that?

ACE: I was thinking more, with TDZ, what the tooling is going to output, what it might want to output is going to include checks for the whole thing we want to avoid, we don’t want the checks altogether. So if let and const, and my tooling adds in the runtime checks, using JavaScript, like it takes every access that it can prove statically isn’t going to be safe. It will add if this something is some magic symbol, that means I am initialized.. If that’s what the output should be that will happen in production so it will be slow so it will have the problem, we are now doing the checks. When really, we want to not do the checks altogether.

SYG: I think I am confused on what your concrete proposal is. I would hope something like TDZ would not emit any runtime checks

ACE: Another access error. I want two different outputs from the tooling. Tools that adds more assertion because I am a developer and I want to be called by—remove the assertions. But the spec only definitely has one output.

SYG: I think Justin Grant in private communications said, one of his concerns was this configuration problem, it is a fact of the tooling world today that you configure things. And it would be additional friction for developers if JSSugar had—I think there should be configuration-free. This should be 0 configuration. But how would you think about—if the—are they considered clients or not?

ACE: Right now, the too long, they are arguing the line of which things they are adding to the spec. We’re going to—the obvious, writing typed script. It’s hit and run for the team to say, we can ban that. There are some legitimate cases, they are arbitrary of what is the right thing to do. And we have—with babel and things, what is safe? Do we ignore document.all? There are cases, like ECMA and TC39. We want to avoid things. Should we start to hint where our opinions lies so the tools aren’t left to make the decisions themselves?

SYG: That’s a good question. I don’t have an answer. This is the kind of discussion I hope would come and then if there is consensus, the broader problem statement, the broader question, it sounds like a good thing that we need committee discussion on, tooling author input on. But yeah. Thanks for bringing it up.

CM: So I am very impressed with the analysis. One challenge, I think, we face, in this—you face in this proposal: there is what I guess you could call a form of availability bias, baked into our process at a deep level. When we talk about benefit to developers versus benefit to end-users, benefit to developers is very immediate, it’s concrete, you can say, “we do this, it will benefit them in the following way”s. Benefit to end-users is kind of indirect and abstract. And our whole process is rooted in very specific language-feature proposals. I see this even in some of the discussion by previous commenters—very fixated on the details. It’s very driven by people focussing on the language in the form it gets exposed to the developers.

CM: And I think you're advocating trying to pull away from that focus a little bit, even though the underlying process is very much the product of a lot of evolutionary selection effects over a long time that biases it against you there. And I think—I am impressed with where you took your diagnosis of the problem and where the proposed direction to take came out at the end of the analysis—but I think we need to have a meta-level discussion about where we can take our process so that the kind of decomposition of the language in the way you propose will successfully achieve the kind of benefits you are looking for.

SYG: Thanks CM, I will respond. Real quick. I agree with you. Very much, but I have—I am skeptical of productive discussion on that because I think we don’t share—quite bluntly, many delegates don’t share the same goals. We work as different participants of the ecosystem and we have different goals because we are employees or have personal biases. It’s absolutely worthwhile to have the discussion. Sometimes they are irreconcilable differences. If you look at other languages, to get at the JS’s special slide, with the lot of other languages, it is the right move for them to focus on direct benefit to developers because they are in the business of trying to grow. Of trying to grab more developers, to become a—a language with more mind share because, you know, they have beliefs that they are a better language for whatever material benefit, memory, safety, that kind of thing. JS is so widespread that I don’t think we should be operating in a growth mode anymore. Again, this is a personal judgment. Value judgment on the state of the—on the state of JS. There’s so many users that we must be more risk averse.

JHD: Yes. The security risks and performance issues and complexity and stuff of implementing syntax features in engines, I can’t speak to that at all. So I take you at your word, that it’s difficult and you have listed all the CVEs and that makes sense to me. But if it’s not difficult for tooling authors who are exceedingly less well-funded than engine implementers, as a transformation, then if it’s less difficult for them, I am not sure you couldn’t have a on the fly thing. If you want to do it faster, run this transpiler plugin or whatever, it will drop it down to JS0. Right? If it’s hard for them to do it directly or whatever, it’s just syntax sugar, like you said, why are they going to do a better job than the far more funded and large population of engine developers?

SYG: Well, so

JHD: I say that raising that it—let’s say a browser implemented on the fly implementers. It won’t be fast, but correct, and in theory dodge the issues that this proposal attempts to dodge.

SYG: It wouldn’t solve—like, the market pressures for something supported in the native runtime to be fast is very large. So to bake in the transpiler I suppose solves the security issue in the sense that we’re not like modifying the core thing to the—that exposes the security bugs. But it’s—it directly goes against the performance goals of we want the web overall to be faster. If nothing else, a ahead of time tool, a step, is very clearly by construction pay as you go.

JHD: You don’t anticipate—let’s say a few years down the line, after we ship some things in JSSugar, it seems to me like there is market pressure to push those things into JS0 and just slightly defer the same problem.

SYG: But it’s a very important deferral in that we will have known at that point, if it is in fact, used and in what why, which is a thing we ship today on trust. On being convinced without, like, extension incubation.

JHD: Would have—am I understanding correctly if we had a way to have a longer incubation period before native browser implementations, and that also created adoption when applicable, would that also address your concerns? I know there’s big ifs. But…

SYG: It’s a psychological thing. It’s important to not frame it as actually important enough frame it as incubation because you are then priming people to never adopt.

SYG: JHD to bluntly answer your question. I think the world I want requires us to change our thought. Like big T Thought of developers and users. But that’s not possible. So with most things in the world, best we can do is to change the incentive to move towards the change in thought that we want. And we can reasonably—people can reasonably disagree on whether they will a bear out or not. The structure we have had for the past 5 to ten years and the consequences from that, that are not ideal. If the question is like, well, if we do this other thing, would it solve your problem? Yes. If everyone in the world behaved as you proposed, but we believed differently because of things we see. Yeah. You get the point.

OTM: Yeah. I guess my question was, I agree, but most people making websites using tools nowadays, but people using something like—most people don’t use tooling unless they are using TypeScript or something. Should Node be a transpiler? Or…

SYG: So Node recently merged support for type stripping, which means they are running something on the input before it feeds it to V8 to run. Deno and Bun run TSC. The way I see the server runtime go, they are incorporating auto transpilation as part of the runtime model.

CDA: People use tools, but not always, and not all the same tools. Some don’t use transpilation tools and I want to push back against the notion that this would simply be another thing you add to the pipeline and the problem is solved. It’s more complex than that.

SYG: So CDA, I would welcome data, I guess. We looked at the best data we had and that’s what showed of the developer demographic.

CDA: Where I have heavy tooling is the least preferred developer experience/environment of the stuff I do. I actively try to minimize the amount of processing that has to be done. And I very much enjoy the experience where I don’t have to do anything extra. But that’s one person’s experience and not the entire ecosystem.

YSV: JSSugar is looking at one facet of the problem, which is the syntax side. But more broadly, how are we introducing new things into the language? How we benefit things in the I think beiges, I call it a waiting room for features. Developers can start using the feature. And we can get data about how the feature is being used, we have the rigor and dedication to backwards capability. And basically, the same way we do things. I still have more time to bring this proposal to committee and once it’s ready, this is something we can also discuss. But just to make it really clear. JSSugar is not intended to solve the entire scope of the problem statement we presented. There’s room for others to bring their suggestions. This isn’t the only way to approach this problem

NRO: Yeah. You mentioned that JSSugar has to be designed, keeping in mind lack of experience and making sure that work with the maps. There’s very far from being something that can be transpiled. Like we don’t know yet—like in which to improve because there’s so many. We need a little bit of time. I don’t know what your ideal timeline here would be, but I don’t think we can answer any time soon, if you want this JSSugar, JS 0 to be from developers

SYG: I would say Yulia’s topic may be directly related to this. I will let her go

YSV: So we are standardizing source maps and that’s good. They are shipping in multiple implementations. But I would also say that source maps should not be our final destination in terms of debugging. We need something with better scalability with what source maps offer. Source maps are in JSON. We need a different format for—by which to emit it on the bugging so it’s lighter on the wire. I support standardizing source maps. There is a defunt group. That was intended to be for both Wasm and JavaScript and this is something that Aki would be considered as a coordination point between W3C and TC39. We need a solid debugging format that can handle multiple languages for two different targets. Wasm and JavaScript.

CDA: Just want to note, we have ten minutes left for this tonic and an enormous queue. Be mindful, in you want to look at the queue and any you want to, because we won’t have time to get to all of them, but take a look and go to CM

CM: Another thing that struck me as you were laying out the proposal for sort of layering the language structure in the way that you have, is that Wasm, as it has manifested in practice, is an emergent and certainly less self-aware form of the kind of thing that you are proposing, responding directly to a lot of the underlying considerations, particularly with with respect to performance, that you outlined. That suggests to me that there is something going on here that if we don’t respond purposefully and directly, the ecosystem at large is going to push it on us anyway. And so I think it behooves us to try to take control of the process ourselves to the extent we can.

SYG: I will respond to the Wasm thing because this comes back as feedback. Why not Wasm? Well, it would be great if JS just like is compiled directly down to Wasm. We see a big part of the signal with the excitement for the Porffor thing we saw. But JS is just special. Like we still have to service three billion users today. And we are continuing—already bearing the cost and spending hundreds of engineers hours on three, at least three independent highly sophisticated VMs. In 20 to 30 years, who is to say? Today, it’s hard to argue that.

CM: I am not proposing any such thing or advocating for it. I’m saying we should get in front of it.

SYG: Got it.

CDA: Are there any queue topics you'd like to move up?

SYG: I… I don’t know. I think maybe move number 4 Nicolo’s topic up. This is important to hear direct feedback from the tools and how they see the world.

CDA: Okay. So in a similar way this is not transparent to developers this is not transparent to the committee. Right? You mentioned things in a proposal would perhaps be in JSSugar and some things in JS0, so now, proposal authors are also not developing the proposal in the same way. They have to make the considerations and deliberate on which things will be on which side. Is that correct?

SYG: Yes. If the split existed in the spec, part of the spec draft's major semantic past, if it's an explicit open question, called out, yeah. The thing that spec authors have to think about. NRO?

NRO: Okay. In the past year, I would say, 6 months, I have tried recruiting two people to join our committee. I very recently managed to propose invited experts. But I’ve been doing this for longer and the risk of communicating has been they are interested in looking at what we do. But whatever proposed structurally, experting joins our meeting, they see this as a waste of time. As a place where to get anything done, you need to spend years. And there can be just more productive ways of spending time improving the tools. Especially given that most of them do this in their free time. So while I will keep trying to get more involved, I don’t know how he can get this done. There’s been multiple attempts. The meetings end up rarely happening because there was never enough people to actually join them.

NRO: And I hope we will be able to improve this. It’s the—the current situation is far from being good.

SYG: I don’t think it should fall on you, it should all on all of us to do that better. I don’t know how either. But I think tools are—it is true that they are a big part of the JS ecosystem. And we should involve them more. Regardless of, you know, this proposal.

KM: I have heard from various people, historically over my time with the TC39, they would prefer to do things in other standards bodies because it’s much harder to get things through TC39 and I think part of that is potentially good and also a potential risk point for JSSugar. In the sense that, like, if people feel that it’s too difficult to go through, TC39, with the JSSugar, that could mean that there won’t be enough mind share in the JSSugar world to kind of, like, give it the critical mass it needs to be effective. So I mean, I guess that is some of, like, my personal reservation around it. And I don’t know. Like I would hope that if we—I don’t know, tried to go forward with something like JSSugar, we could come together collectively and figure out a way that is easier. That is the larger risks, in my opinion, of any JSSugar proposal.

JWK: Actually, I support this. I even think we should do this years earlier. And this year we are—a lot of proposals are suppressed by the size of complexity. But they are useful for the developers. And if we have this, we can—going to experiment this in quite a formal way. And another benefit is, for example, if we ship all old decorators, it will be there forever. Nowadays, the tools are pushing developers to migrate to the new proposal. So although it’s not very easy, but it’s possible to correct things, if we later find that the proposal is—has some problems.

CDA: All right. We have 2 minutes left. Maybe get to one more.

SYG: Okay. Yeah, maybe one more question and then I will try to sum it up.

NRO: Yeah. So I have the impression that a big reason for why this presentation—this presentation is happening is that TC39 is just like sending features to be implemented to browsers at a speed that is higher than what browsers can sustain. Like implement them with the performance and this means browsers don’t have enough, like, money, engineers to keep up with our speed. However, if we move this problem tools, this is just going to get worse. Like, tools—some tools do have—TypeScript. Most are implemented by people doing it in their free time. For a while, they had some amount of donations compared to the tools was significant. And that led us to pay—that’s the amount of money going to the engines. This is—this is practically zero if we are trying to shift the burden from browser engine developers, it even has less resources. This affects the stability point of maybe we can make changes in JSSugar. Some tools, but I think of ES lint, some tools wait to implement proposals until they are ready to ship to reduce the number of potential changes that will happen and the meaning—and maintain the cost. It’s like the opposite of the hope that maybe we can have more flexible proposals if we ship in tools, the browsers.

SYG: Do I have like 30 seconds to respond to that?

CDA: Sure

SYG: Thanks for the insight NRO. I can’t substantiate the landscape of the tooling maintainership. A lot of the tools are open source projects with volunteer maintainers. One way to frame what Nicolo said for the committee is that if well-funded, relatively, but also in absolute terms, well-funded browser teams don’t have the risk appetite and tools don’t have risk appetite because they are less funded. I hope the committee sees that as a failure. I hope that like the fundability and the importance of funding tools for—we can somehow move the needle and shift the incentives there, that they can reach the level of funding the browser engines given their rise in importance in the ecosystem. I don’t know how we can make that happen. I would like that to happen and want to try. But yeah. To sum up, there is—we presented a problem statement. This is as you can see, this is not a proposal, in the normal sense, there’s no concrete details for the JSSugar/JS0 idea. There is currently a private repo, I will make public at the end of day or tomorrow for folks to—for folks to post issues on.

SYG: But I think my request, and I will let the other people on the slides speak for themselves, take the problem statement to heart. Think about the JSSugar and JS0, if you have a great idea, please bring that to a future time there. As for some urgency here, you know, things don’t move too fast. But I think we do need a shift in our MO and let’s keep talking about it. I think the most concrete take away for individual proposal champions is that if you have issues, if you have concerns, if you have questions on how you think the proposal would look with this new rough guidance we posted on the slide deck, reach out because like I said, I don’t think it makes sense to make a blanket judgment. We need to do this case by case. Is that okay or too abstract? There is a private repo, discuss it. There’s no broader discussion repo for this problem statement. I am not sure how we do that.

### Speaker's Summary of Key Points

- Implementers presented a problem statement from their perspective that new features often cause security, performance, and stability issues for end users and that those downsides are not offset by the upside to developers. Because of that, that they will be more conservative in considering features going forward.
- SYG presented a possible future that splits the standard into two layers so as to more evenly spread out complexity: an underlying layer called JS0, which is directly executable that compliant engines implement, and a top layer called JSSugar, which compliant tools implement and desugars/compiles to JS0.
- Delegate reaction was mixed. Some delegates liked the idea, and agreed with the implementers' cost analysis. Tooling authors expressed concern, specifically around the cost to maintainers.

### Conclusion

- Champions requested delegates take problem statement to heart.
- No consensus on JSSugar/JS0 (there was no plan with concrete specifics anyhow)
- Lively discussion which will continue in the future

## Three normative Ecma-204 changes

Presenter: Ben Allen (BAN)

- [Ecma-402 PR 919](https://github.com/tc39/ecma402/pull/919)
- [slides](https://docs.google.com/presentation/d/1Z-DQ3bNjrbhrPhJ9PMEjTtZr0tlXiN14REvtcPocdGM/edit?usp=sharing)
- [Ecma-402 PR 918](https://github.com/tc39/ecma402/pull/918)
- [slides](https://docs.google.com/presentation/d/1Z-DQ3bNjrbhrPhJ9PMEjTtZr0tlXiN14REvtcPocdGM/edit?usp=sharing)
- [Ecma-402 PR 925](https://github.com/tc39/ecma402/pull/925)
- [slides](https://docs.google.com/presentation/d/1Z-DQ3bNjrbhrPhJ9PMEjTtZr0tlXiN14REvtcPocdGM/edit?usp=sharing)

BAN: While the screen share is up, there’s three normative PRs. I am hoping it will be relatively controversial. And the order is like more interesting ones sandwiched between two bugfixes.

BAN: So yeah. The first one is a small spec bug. Essentially for quite some time we have been neglecting to use the correct numberingSystem when that option is specified. The second one concerns sort order. We are trying—it’s in response to one guidance from about three years ago. We are tying to make the order in which the elements appear deterministic and this is related to that. And the third one, again, is another fairly minor bugfix Here is the first one, as promised.

BAN: So it is a spec bug. There are a couple of different places where RelativeTimeFormat and daytime format create NumberFormats, but don’t pass in the numberingSystem used. So in this example, implementation follows the spec, and if someone requested the number system, Hannah deck. This spec was specced to simply return with the, like, Latin character set number instead of like going… So yes. In the spec it was ignored. No browser actually implements it as specified. So this PR just sets the spec behavior to be intended/implemented behavior.

BAN: It is essentially a two-line fix. Something like that. If I am not still sharing, let me know.

RPR: You are sharing your web browser and going through the PRs.

BAN: Fantastic. There’s several places where we are adding options that we simply neglected to add. This is point where we ask for questions and after, ask for consensus

RPR: SFC is on the queue with a message. All three of these PRs were discussed in TG2. And approved by that group.

BAN: Yeah. They were following guidance that we received from a plenary we got three years ago.

BAN: Yeah. Nothing more. You are going to ask for consensus one by one?

YSV: So unfortunately, this was added after we did our review. I don’t want to say that we are going to block this. I will try and get someone to look at this before the end of the meeting. But I believe that this is going to affect everything you are presenting right now. I am sorry that that is the case. But we will try and get—I will make sure that is completely fine with our folks working on internationalization before the meeting ends. It’s a conditional advancement on my part and I'll get back to you before the end of the week.

BAN: Thank you very much.

CDA: So we will say if we have support from the rest of the room, no other blocking concerns, then we would approve conditionally pending the team’s review

BAN: I was to say, legitimately thank you for sort of sticking to the process there. It’s pretty important.

BAN: Okay. So without further ado… This is the one (PR 918) that I believe is more interesting. Essentially, previously, the result options for plurals, we did not specify an order. There is a sort of like web reality order that is—I believe all the web engines use this specific order that is ultimately kind of nonsensical in a way. Also, we have guidance from plenary to—we must have deterministic orders for this sort of thing.

BAN: So this is the wording we said based on that guidance from plenary. ECMA402 must provide the deterministic order for the elements of all arrays and properties of all objects. This order should be lexicographic except in the cases for which there is a clearly preferable semantic ordering. And there’s a link here to the notes from the meeting where this is previously discussed.

BAN: Okay. To give the context on why the order proposing is useful: so plural give information on how to correctly plurallize different numbers in different languages. In English, if I say, talking about cats, and I say I have 0 cat, I use the plural there. I have one cat, I use singular. And for subsequent ones I use the plural. English has two plural categories. One for one thing. I apologize in advance. There are moments where I pronounce things in French. It will be a real adventure. Apologies to anyone whose ears are hurt French is a little bit more complicated than English in terms of whether you use a plural for specific counts of things. This applies to ordinals. I am guessing in the context of cardinal numbers. So French uses singular when talking about zero objects or one object. Plural in most other cases. But there are certain large round numbers where you get DE in front of it. You have 0 geckos, you have zero geckos. 100 geckos, you have cent geckos. And one million geckos, you have Un million De geckos. So there’s one, many and other.

BAN: There are six plural categories. I believe this covers all languages. But that’s something that you can say confidently. The order that UST35 uses is 0, 1, few, many and other. And you can actually see if you are thinking about ordinals, you can see how in English, how one, two and few work. If I am talking about the first thing, first. St. Three, RD, that’s few. There is no use of many in English. But every other is—has the Th ending. That is classified as other. This order feels natural to people. It's an ascending order.

BAN: Our guidance is to sort in lexical graphical order, unless there’s a reason not to. We have the following few, many, one, other, two, and zero. Which is scrambled, it puts others in the middle. It kind of makes it harder to understand what we’re talking about here. And also, it’s contingent on features of the English language. But so currently, the sort order is left up to the implementations. We don’t specify it. It varies with regard to the ordering that is used. Web reality appears to be, I am not sure how everyone standardized on this. Few many, one, two, and zero and other. There’s a comment from Frank where you tested this on a number of engines if you want to follow that. The PR swaps that language that doesn’t specify an order with language. Specifically, the order 0, one, two, few, many and others. It's an ascending order. Other, covering most numbers is put at the end. We have an older PR or older issue, for thoughts on why it’s important to sort these in an easily order. Users often use this API exploratively and putting it in the UST35 order makes it easier for users to learn which categories are used by which languages.

BAN: I am going to flip over to the next one which won’t take very much time. Fingers crossed for conditional acceptance. This is another one that. We have overlooked some of the logic for handling the formatting of currency values. It makes perfect sense when using a standard notation, when dealing with money. But in scientific and engineering notation, it is just odd. So ECMA402 is drawing on ISO 4217 data to determine the number of minor units to display when formatting currencies. I say currently because there’s another PR I will discuss on day 2. We’re considering changing this.

BAN: So if you are formatting the quantity of Japanese Yen, formatting 123.45 because this data is all data in practice, you don’t use every day—you simply don’t use the minor violence when talking about Yen. USD, you use two digits. And this ISO 2419 is what we’re currently normatively drawing on, even though in practice, they use CLDR practice Here is the problem and bug we overlooked. For example, this number is right there (`12345678`)… if formatting that quantity of then, it will always display without any minor digits. Which doesn't necessarily mean like a fraction after Yen in this context. If we are formatting USD, it uses 2 units. By chance, this is what you want there. But it’s not the right thing to do. The thing that we are using to determine that there should be two units after the decimal point is specifically and exclusively for the standard formatting, rather than scientific formatting. This also applies to the engineering notation and contact notation.

BAN: So the solution is not don’t to that. Only consult the data on a number of minor units to display when using a notation. It’s a straightforward three-line change. Essentially, just—okay. We don’t actually call the currency digits A0 that consults that data unless we are specifically using standard notation rather than any other one.

BAN: Okay. Thank you. I believe at this point, I would like to—unless there’s questions, I am guessing there’s not…

CDA: There is nothing in the queue.

BAN: Okay. I guess I would like to ask for that conditional acceptance for this one. I would like to ask for consensus and receive conditional acceptances

CDA: Consensus for the three normative changes?

CDA: Other than the conditional support signalled by my Mozilla friends, any other voices of support for normative changes?

CDA: Any objections to the normative changes?

CDA: All right. So it’s all riding on Mozilla now.

BAN: Thank you very much. I would to say again, even though it’s kind of put me in an awkward position, I am really glad that you all are sticking to the process on this one

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- List
- of
- things

## Exploring an Idea of a Proposal Management and Technical Arbitration Tool

Presenter: Mikhail Barash (MBH)

- [slides](https://docs.google.com/presentation/d/1gHsElv4Mfs90wxBnft-1cu3KgkGLILeP0BRxe0WR01w/edit?usp=sharing)

MBH: So this is one of the directions that TG5 is exploring. So in the TG5’s programme of work there is a point that we are expected to look into tool support for the work of the committee that aids in design, specification, and technical discussion about the language evolution. So basically, the idea of the tool that I am going to demonstrate now is to provide a space for structuring a language committee’s work and making it more transparent to a broader community. And the tool is supposed to cover both technical and administrative aspects of the committee’s work and I will soon demonstrate a mockup implementation, so it’ll be clearer what I mean. In the first part of this slide, I mentioned a committee. In practice, this is based on the TC39’s experience. So this is not a replacement of any of the currently used tools. And rather, this assumes full integration with the tools that are currently used by TC39. So this is just an exploration of the idea. Not trying to change the way the TC39 committee works.

MBH: So let me show a mockup of the tool. Here, we can see differences—I would call these specifications of the committee work. It has these roles, these persons, and this person has these roles and we have full-blown IDE support here, like code autocompletion, find usages, and so on. If I rename this role, then the refactored name will be propagated throughout the file.

MBH: When I try to add a new person, I get a pre-filled template of what can be entered here. So then I can specify meetings, agendas, templates of agendas for meetings. This is an example. And, say, if I change the duration of this item, then the total duration is automatically updated in the summary section. And I could, in principle, do scheduling algorithms to find an optimal allocation of slots in the meeting.

MBH: This is supposed to be a specification of the TC39 process or of a language process. So for now, it’s just a list of stages. But this would be a much more elaborate specification.

MBH: Then the interesting part happens when we try to specify proposals. So this is a sample proposal here. So I could specify the stage. This proposal is in one of the stages—of course, I only get the stages that I have already declared before. I could mention champions, reviewers and again I have full-blown IDE support here. I can specify related sections in the specs. I can specify related proposals.

MBH: So this is an example of a syntactic change. But I consider three kinds of changes: API changes, semantic changes, and syntactic changes. An API change, I would get here another view where I could add methods and could add arguments. I could have alternative designs here by different persons, they can also leave comments here. The tool should support all kinds of administrative things which are dealing with technical design—which I call technical arbitration. Say here, I have the proposal Set Methods. If it were a syntactic change, I could introduce here the new rules that the grammar would get and the new rules.

MBH: This is a mockup to give you an idea of what in principle is possible. What if I add a new stage and advance a proposal? If I remove some proposal, what would be the relationship between the proposals that are left in the language after I had removed this one? I could combine proposals, but this requires scientific research into what it means to combine two proposals. You could preview all the changes in the language specification.

MBH: And then interestingly, I can also use this tool to author a specification. So for now, this is just some of the sections in the document. And this is a projectional editor for ecmarkup. Let me show how this would be—how I would type this. This is the phrase “if something is not an object, then throw an exception”. I typed an abbreviation for this phrase, and got the rest of the phrase added to the spec text, and I can only modify the placeholders in that phrase that it makes sense to modify. And again, I have full IDE support. If I click here, I get to the definition. Yeah. Let me show one more example. I type “return unused”, and everything is formatted automatically following ECMA-262 formatting guidelines.

MBH: And this is a projectional editor which means that I can only modify the parts that are designated to be modified. So I cannot type anything here, for example, because this would be invalid. Yeah. So let me just show this one. So how do I get line 1. Type “let this”. And then I selected here, new name for that identifier and basically, this tool will support a special syntax for every line that is used in the spec. This one, I would like to show a little bit in more detail. So if I have this phrase: “if something, then set something”, I can define a quick fix that would, for example, remove the condition. And now this is projected without the condition.

MBH: Here, I have this abstract operation “question mark”. And I can also sort of toggle the usage of this operation. There is no need to parse anything. Which means, I can re-project this into the spec text in a different language. Here, I have an example of a sort of different projection which I call educational. Instead of having a question mark here, I now have a comment here that explains the purpose of this abstract operation.

MBH: And again, everything is sort of clickable and—yeah. Presentation. So the target users for this tool would be chairs, technical secretary, facilitators, specification editors. And delegates, if they want to use this tool as an authoring tool. But also a broader language community, if they want to use this as a sandbox for exploring their own feature designs.

MBH: So this is the functionality that I have demonstrated. And we can think about different kinds of artifacts to import and export into and from such a tool.

MBH: So as I mentioned, this would be fully integrated with GitHub and all the rest of the things that TC39 uses. Detailed technical arguments happen in GitHub issues as this tool is likely to fixate milestones of technical design. And here on the right, you can see some of the examples of such functionality for technical arbitration.

MBH: Syntactic proposals, think about grammar validation, grammar debugging. Live preview of the language changes for API proposals and for some of the syntactic proposals. We could think about previewing those proposals directly in the codebase of a user.

MBH: So as I’ve already shown in my demo, this tool can be used as an authoring tool. Quite recently, WebAssembly has set up mechanized SpecTec. The tool that I suggest focuses on language design and evolution processes itself. But it’s in the same line of thought as WebAssembly SpecTec. We can think about features like validation of text of the specification at design-time, navigation within the spec at design-time, refactorings, executability of the spec at design-time. Using the approaches from the live programming environments where you can directly preview in the IDE how a particular piece of code would be executed. And that piece of code is written in ecmarkup. Integration with other tools. This is a potential collaboration with other bodies. Ideally integration with ESMeta. The suggested tool can be thought of as an IDE for the spec. So, the focus is on the editing experience and support for notation that is already used in the spec, including textual, tabular, and graphical notation. All of this can be implemented for the tool.

MBH: All information still will be in the GitHub repositories and other tools used by TC and the model of all of these administrative and technical discussions specifications, that is defined in the tool I am proposing, can be serialized, so there’s no vendor lock-in. The tool will support evolution of itself within the—within the tool. So there will be no need to recompile anything.

MBH: So this tool would be making the work of the committee more structured. This is specifically tailored for the programming language evolution, with the idea to increase transparency of technical design and the rationale of decision-making, as well as increase accessibility of following what is going on with the language evolution. This would help newcomers to get acquainted with the state of the art language evolution. And we also think in the future for evolution across layers. A tool for fixing technical communication. The initial step is to implement the easier parts of what I am suggesting and use the tool in a “view only” mode, to explore the already existing specifications and see whether that could make sense.

MBH: So what is the ask here in my presentation? To reiterate, I am not trying to change the way that the committee works. Exploration of the idea. And what I am looking for is feedback on this idea. So am I missing something that is fundamentally important for such a tool? That’s the end of my presentation. And I am ready for the queue.

NRO: Yeah. This is very cool. Like, one problem I have had in the past very often is to like forget a proposal, all the time it was discussed and find the discussions, and I hoped that this would be a way to solve this.

MF: Yeah. I can’t stress enough how cool this is. This is really fantastic. I really like how you have tried to account for all of the different processes and responsibilities that the committee has and try to not tether yourself and think about things in a fresh, new way. I think it’s great to have something like this. The downside of having a broad scope and being radically different from what we do today, it makes it hard to get from here to there. For any kind of new approach to anything. Have you thought about how any SSO can gradually adopt this and how that would work? If not, that’s an area to flesh out. And share with us.

MBH: Right. So this last point on this slide, to use the tool as just an explorer of the current specification, that might be that first step. And maybe individual delegates could use the tool for authoring the specification just to see how it would work.

MF: Yeah. And—that’s not just looking at the first step, and the second step. I want the whole route to getting the full adoption to this would look like, in theory.

MBH: That requires thinking.

MF: Yeah.

JRL: So how do we use this?

MBH: So for now, this is implemented in the JetBrains Metaprogramming System MPS. It’s based on the IntelliJ platform. But different, because it’s not a textual editor, but a projectional editor. But this could be shipped for—as a standalone application.

JRL: If we make the standalone application, does that include all the necessary—I won’t have to install Java libraries to get it to run?

JRL: I do not have Java installed due to corp laptop reasons, so I don’t have it and cannot install it. Is there a way it make it a single executable

MBH: Well, there are some attempts to actually run this tool on the web. The JetBrains Metaprogramming System. I think there were some implementations that allow running a server and a client in the browser who could use that without installing any of the dependencies.

JRL: okay.

MBH: But I am not sure if it works as smoothly as a standalone application.

CDA: All right. That’s it for the queue. But as I mentioned at a TG5 meeting when I saw this, this is super cool. I can only pretend to understand what is going on here because it seems like magic. I am excited to see what this looks like going forward, what it does in the future. Spec thank you. There is nothing else That is it for today. A round of applause for everybody.

### Speaker's Summary of Key Points

- Presented an idea of a tool for supporting the work of the committee that aids in technical discussion and authoring of proposals.
- The proposed tool can be thought of as an IDE-like workbench for language specification and standardization, including both administrative and technical aspects.
- The tool would be integrated with the other tools currently used by the committee (such as GitHub). Once the key functionality of the proposed tool is implemented, it would be used in the "view-only" mode to follow currently discussed proposals. It's important to have a concrete approach/plan for a potential gradual adoption of such a tool.

### Conclusion

- Got positive feedback from the committee on the idea of the tool. The work on the tool implementation continues.
