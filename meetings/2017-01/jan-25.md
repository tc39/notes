# January 25, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Jordan Harband (JHD), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Chip Morningstar (CM), Dave Herman (DH),  Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Michael Saboff (MLS), James Kyle (JK), Franziska Hinkelmann (FHN), Anna Henningsen (AH), John Lenz (JLZ), Sebastian Markbåge (SM), Bradley Farias (BFS), Jeff Morrison (JM), Tyler Kellen (TKN), Gabriel Isenberg (GI), James Snell (JSL), Maggie Pint (MPT), Chris Hyle (CHE), Bert Belder (BBR), Zibi Braniecki (ZB), Jamund Ferguson (JXF), Brendan Eich (BE), István Sebestyén (IS), Keith Miller (KM), Brendan Eich (BE), Myles Borins (MBS)

-----

## Approval of the minutes from the last meeting

AWB: We are having trouble getting the minutes to approve

IS: I prepared the TC39 November meeting minutes (16/052) before the 2016 December GA meeting, but we had technical issues with the hosting. The old Ecma private website is down and we have to replace it. That will take at least two months. In the meantime we have put all the data on a NAS storage on the office network and that has been released to all Ecma members (this is the Pydio system on a Netgear box). We have also a parallel implementation on a Synology NAS that will be released soon. For approval, I could upload the minutes to GitHub and send them by email.

AWB: If you email me the document, I can make sure everyone here can see it.
IS: This has been done immediately after the completion of the conference call.

IS: 16/052 has two parts. The general part of about 6 pages that includes list of participants, list of companies participating in the meeting, various ISO/IEC JTC1 matters, like status of TC39 Fast-Track projects, dates of next meetings etc. For the TC39 participants , these 6 pages should be relatively uninteresting, but generally, for other Ecma members and the GA this is a summary information they are most interested in and less into the technical details of the TC39 work. This is included in the Annex, which containes all the Technical Notes (like this one...) of the entire meeting. Generally, we need to work on passing around documents in a more reliable way. We also need to improve feedback mechanisms--I only learned today that Waldemar encountered technical issues in accessing the minutes.

WH: A couple different problems: There is an invalid (self-signed) SSL certificate. Even if you accept this, the scripts to surface the links time out.

IS: From a content point of view, these minutes is the same as what is mirrored elsewhere. We just have to make sure the details are approved.

AWB: We'll take care of the review tomorrow

## Report from the ECMA secretariat

IS: Explains the current status of the TC39 Fast-track projects to JTC1. We have various components in ECMA to standardize in ISO. For ECMA-262 (the main ECMAWScript standard), we now have an agreement with ISO that we will not fast track it anymore; instead, the ECMAScript Suite ECMA-414 will supercede it (with normative references also to the needed Ecma standards), and the other redundant standard ISO IS 16262 (which is out of date) will be withdrawn. The only standards in common will be ECMA-414 (on the way to fast track), which happened after the Dec 7 ECMA GA. As you remember ECMA-414 has undergone some minor revisions for ISO requests. We have also provided an explanatory report to ISO (what has been published also as an TC39 document). We have published the document TC39/2016/050. The ISO number of the suite will be ISO-/EC IS  22275. Currently it is registeredasa DIS, but the voting has not started yet. When we change the suite standard, then it will get a new Edition number. ECMA-402 will also remain an Ecma only standard and its latest version is just referenced by the ECMAScript Suite.

BT: Question: The document ISO-IEC 16262:2011, we want ISO to withdraw that document, not "stabilize"?

IS: Defacto, it will be withdrawn. The usage of the word "stabilize" is very funny in ISO. It's possible that they'll call the withdraw number "stabilized". I have to check that. But it was ISO that started calling this "withdrawal". Originally we, Ecma wanted that the ECMAScript Suite should get the same ISO number: IS 16262, but that is not permitted. So the Suite will get a new number. The DIS voting has not started yet; we don't know for sure how that will go.

BT: On February 7th, the PL22 working group is voting on what to do on the 16262 document. Until now, they have been voting for reaffirmation; instead, we want them to vote for withdrawal, and in place, we are fast tracking the ECMAScript Suite document

IS: (Some people, like the SC22 Chair, Rex Jaeschke) are in the loop already

BT: I think there's a different group of people in this other group; I'll loop you in in an email

IS: On JSON, there is some work to do: It got the DIS number 21778. The DIS voting finished in December and it is positive--it is approved by ISO. But the Japanese national body had some comments. Mostly editorial, but some possible technical changes; CM and AWB can follow up. The Japanese national body has voted 'No', and then would change it to 'Yes' to reflect incorporating fixes. Therefore now we have to do a second ballot  (FDIS) because there was one no-vote. We need to prepare a proper fixed version of the document with the disposition of comments to start the FDIS voting and to get  finally this "Yes" vote.

IS: In the ECMA GA, Waldemar was there, so he can fill in any details and corrections of my verbal report. People in the GA are happy about the work of TC39. Participation is growing to-40-50 people each meeting, which is good, but can cause organizational problems..

## Who should be the chair?

IS: We discussed the TC39 leadership--we have to put into place a leadership body to ensure that it is functioning long-term; in the short-term, Allen has been very helpful, but this is a short-term solution and we need to find a new leadership structure. The best possibility is to have the chairmanship position held by an ordinary ECMA member, but ECMA bylaws also now permit other categories of ECMA members to be the chairman. We have had the strange situation in ECMA TC39 where we had a chairman who was financed by three member companies; this has finished. We also had the strange situation where the chairman did not understand much of what was going on on the technical part (this had entirely historic reasons). The chairman cannot be an impartial adjudicator of disputes if they are not following discussions, but anyway, we have a cooperative spirit on TC39. Strangely enough we did not have in TC39 a Vice Chair, which is in most Ecma TCs the case. A Vice Chair really can help in carrying out the Chairs function. IE.g. f there is a vice-chairman, and the Chair has a company proposal which he has to present then the two chairs can switch off, as one of them is acting as chairman and the other is presenting, so member companies in a chair position can still present their own ideas. So, we can have a Vice Chair, but in addition  we may also put a management layer below the chairman. TC39 has the freedom to organize its management structure.

AWB: Would it be possible to have two vice chairs?

IS: Absolutely. ECMA is very flexible on this. If you suggest three, I am sure I can even that get it through.

AWB: The thought I am having here is perhaps we had a chair and two vice chairs that collectively formed a management team but shared the burden of doing that work and, running the meetings, and managing the agenda and other items that came up maybe it would be easier to get three people than it would be to get one.

IS: Absolutely. You are free to set up any sort of management structure. We are very flexible on that. For instance I noticed that people are extremely bored about this subject in the TC39 meeting. So It is possible that e.g. you install a separate small group just for "procedures," on I don't know, "strategy planning". Such groups then could report back to the full TC39 committee who could listen to the recommendations and make decisions. You have a lot of freedom in shaping how you want to do the work in TC39. It is really not our goal from the ECMA point of view to bind you in any way. So this is really just think about--we don't have too long time to do this. Our temporary solution with Allen (which I think is good) unfortunately cannot last forever, because he has other priorities . We want to get rid of this issue as quickly as possible.

AWB: I'll do the next meeting in Portland because I do not need to travel. From my perspective it would be ideal if we could have stuff resolved so maybe by the May meeting we have a different structure in place. At the latest the July meeting. I wondering, going to throw out something here. The question is how are we going to make progress on this decision?

DE: My employer would support me being a chair or vice chair.

AWB: Could we maybe form an ad-hoc committee here to do work between this meeting and next meeting so candidates like Dan could talk about the job? But also to think about doing some recruiting.

DE: I've been asking around for many months.

AWB: I can work with you guys, but it is you guys have to collectively step up and figure out what you're doing to do. A group of 30 isn't going to do it. A group of 3 or 4 try to pull something together and bring it as a proposal to the next meeting or the meeting

AK: Leo was going to ask the JS Foundation

AWB: I'm not asking for volunteers for these roles, but people to essentially be the recruiting committee. Okay, we want have a chair and tow chairs and why. Somebody to pull it together.

DE: Presumably I shouldn't be in that group?

AWB: I wouldn't want to exclude anyone, so.

??: I could look into the JSFoundation
(MM: This was attributed to me, but I don't remember saying it. Hence the "??". If someone remembers who did, please edit it in.)

AWB: It would be helpful if someone

AK: If there is a lack of pushing for it I can help. We've had trouble finding the right people for it.

AWB: Okay.

DH: We can have some discussion about next steps offline.

AWB: Okay, not here, but some discussions... however you do it is fine. Is that commitment from Dave?

DH: Yes

AWB: Okay, MSFT is the only other ordinary member.

IS: Today there is MSFT, Google and PayPal.

AWB: Okay, PayPal?

BT: I can help.

IS: Usually anyone who is a member is free to join in adhoc groups and normally you ask around in the meeting when you install the group who wants to participate, some people tell you right away, then usually we set a one week additional deadline to decide who else wants to participate. And then the work of the small group can start.

AWB: I think we need to put together an effort and make some progress

BT: What do you want exactly? Nominations by next meeting?

AWB: Here is what I can imagine at the next meeting, here is what we are recommending as leadership structure, we'll have this or that structure, do we go forward or not?

BT: Okay, a management strawman if you will.

IL: Also, we want roles defined for what people are doing

AWB: Think of yourselves as a school board hiring a superintendent

AK: A self appointed school board

AWB: Okay, that's probably enough for the chair, do you have more IS?

IS: In the last meeting this WH has reported to the GA about what discussion took place in the TC39 meeting on "diversity" of people and group behaviour etc, WH said that maybe there would be further discussions in TC39, maybe there would even be a proposal on a document about the Code of Conduct. TC39 may pick it up or not pick it up, it was about oh, I don't know equality or different communities, about the discussion culture of TC39. I remember I thought a couple of meetings ago that TC39 had a little bit of, rather aggressive discussion culture but I didn't mean it in a negative way. I wanted to say, actually each of the standardization groups, and this is not only true for ECMA but any standards group. Surprisingly each of them have little bit different cultures. You cannot say really which is better or worse but certainly to have an agressive fighting culture which in my opinion TC39 has, someone who comes completely from a different culture might have difficulties with that. I understand those people need some kind of advice or protection or whatever. So those types of things. I don't know WH do you want to say anything re this point?

WH: At the GA I presented what we are doing with our diversity statement and discussions. I also mentioned what happened at the Munich meeting with the bullying which resulted in a member leaving.

BT: We have a concrete proposal, at least the initial parts of the proposal for a document called a Code of Conduct. Are you familiar with these kinds of documents?

IS: A little, I have seen two versions from Allen. One was more complicated than the other. The goals of those documents, yeah, there is nothing to say against it. certainly I think TC39 could accept that and adopt that as a goal that you try to achieve, then install it. I also told Allen that at this point in time this desire only came up in TC39 so there is no such kind of desire at the moment in other TCs but this is nothing bad or good, just a statement of fact. If you feel that something like this is useful within TC39 then I would like to fully encourge you that you should have such kind of document and you should tell newcomers that we are trying to adhere to this document and maybe also to appointment some kind of manager for (me or someone else) if there are difficulties, please contact me and I will try to help or whatever.

BT: That was the question that was coming next which is usually parts of the Code of Conduct speak to how we effectively enforce the sorts of things that the codes of conducnt say we have to do> it's unclear to me how exactly we're to enforce the document, it sounds like one suggestion is sending your complaints to IS and they'll figure itout.

IS: The discussion style can come across as aggressive to newcomers. If we just tell people how TC39 works, in my opinion, yes, the way how it works and the style is acceptable. Sometimes we have aggressive and difficult discussion if we have members for certain cultures, you know then they would really need some kind of help. They are more sensitive

WH: The policy that will be proposed includes enforcement mechanisms with the ability to eject members. How does that jive with ecma rules? Do we have such power?

IS: This has happened once, maybe I don't know 15 years ago, before my time. This happened in TC31. The former Ecma SG just threw him out from the meeting. No we don't have any provisions for this type of thing. We try to talk to people but I have to tell you that also in my practice, at least in ECMA, this did not happen so far. We don't have anything on this in the bylaws or ECMA rules which is formally defined. We can expel under certain circumstances some member companies, if they do something terrible, I don't know. But nothing for individuals in a meeting.

BT: If we adopt a code of conduct... it sounds like you're saying we can't just decide among ourselves that we can eject a dues paying member. If you got an email from someone on the committee saying hey this person has violated the code of conduct, in practice what will you do?

IS: This would be a very sensitive situation, which I would try to avoid. I would just call the guy and I will just speak to him to change his behavior

BT: And if he doesn't?

IS: Then well at least for a specific meeting I can send him out. There are no bylaws for this. I could imagine it could happen but it has never happened before.

AWB: Presumably the next step would be to talk to the member org and say you're sending here a member that is violating the code of conduct can you deal with this

WH: That works for large member organizations, but we also have some small organizations that are members.

TK: Typically, with a Code of Conduct, the committee sets up a group of people, elected by the committee, to investigate complaints and recommend actions.

IS: That's what I'd recommend--better if we start with someone in the meeting. Please go ahead if you think that's a better solution.

BT: Do we need to make changes to the bylaws to be able to enforce the code of conduct?

IS: Whatever you decide within the group, that should be fine; I will just report this to the general assembly. The GA may come back and recommend some changes, but I don't expect that.

BT: To be clear, this means TC39 could disinvite one of its members on its own volition, without more action by the GA

MF: How would you get consensus on ejecting a member with that member included in the consensus decision?

BT: Enforcement would be delegated to a subcommittee

AWB: Should the chairs/vice-chairs be the enforcement subcommittee?

MPT: It's typically a group of people who include minorities, because what looks offensive t one person doesn't look offensive to others. It's completely nessesary, You can enforce a code of conduct with a group fo white men, sorry to tell you that but it's true.

JM: Our experiment within the node community absolutely backs it up

AWB: The best solution to that would be to ensure the management committee is diverse

MPT: One problem you have is that if you have the chair and vice chair holding this, that puts too much power in a same place. it can create weird situations of conflict. if anything your code of conduct committee could be outside the tc39 group

AWB: i don't think we'd want to do that

WH: People outside the room don't see the events that happen and cause problems, like what happened in Munich.

MM: That's true, I won't argue that

JSL: So, within, node, as an anecdote. We had an effort where we tried to do some kind of moderation. We had a working group that was answering to our TSC. It didn't work out because there was a degree of mistrust if the policy would be applied equally to leadership. We're moving to a situation right now where the authority of moderation and enforcement is actually being moved out of the TSC and into the foundation. In this way they can take a more objective view. That doesn't exclude people who are a part of the conversation but there will be people who can take a more objective viewpoint to apply the policy equally. If your review committee is made only of the leadership, does that policy apply to leadership?

MM: I very much like this idea of separating the committee from leaders for separation of power. On the thing about outside vs inside, I also want to say that because many of us are, at all meetings or almost all. Having a group such that for any dispute for it is probably the case that many of the people on the committee saw the incident would be great. A lot of these disputes really rely on the types of subjective judgments you could have if you were there. It doesn't mean we can't have outsiders but we want to be confident that there were witnesses.

MPT: A mix seems reasonable. There are three women in the room, this is the first time  there are three women in the room. I don't think all three of us would be here.

AWB: one way to address that would be to say the ECMA management team could be an outsider. there certainly are women on the ECMA GA.

WH: Yes, the ECMA GA has women in leadership positions.

JSL: You need to be sure that the people who are on that have the mandate to be able to enforce. So, having someone who is already on the management team at ecma is good to find diversity. Actively going out to find individuals in the community is a good idea.

AWB: I'm thinking of this as someone who comes in when there is actually a need for enforcement, distinct from promoting diversity or what-have-you

CM: My experience with these things in other organizations, first of all, having a code of conduct in place drastically reduces the chance that you'll need it and second that it also serves to functions. One as an enforcement function but also a signaling function. it offers people some reassurance that they can participate without problems. Once again that doesn't need to involve exercising the enforcement mechanism

AWB: Yeah, that's my position. You don't ever want to get to enforcement, hopefully you can handle it informally

CM: Yes, hopefully you can set ground rules to set behavior

MLS: I agree with chip that some policy should have disciplinary measures. Just like we have the stages document, if we see someone stepping outside the policy and say okay, stop, what's the criteria here? The policy for participation, we would bring it up and say you're out of line. I think it makes sense to have more formal sub-committee that would be responsible for that. Like Chip says I hope we never have to use it.

BT: I would be very surprised if we use it in the committee. I would not be surprised if we use it on Github, that's the primary venue I think it'll effect.

AWB: You mean non-contributors?

BT: Yes, even non-contributors would be bound.

AWB: We can kick them out any time we want, they have no rights.

BT: We don't want to start ejecting people for no reason

KG: Just because we can doesn't mean it's a good idea to do it. Having the CoC in place is valuable. It's better to do it via a set of rules.

JHD: constraining ourselves to rules grants folks with no rights some rights,

MLS: We warn people once if they've done something egregious

MPT: For what it's worth I work on MSFT in this area and we had one CoC violation reported in 6 months and we have a lot of OSS projects. It's not something that is happening 500 times a day. I wouldn't get too much worked up about how much effort it takes to enforce. If we have a CoC violation we will create a committee that will address this including some people in the room and some minorities as interested. You wouldn't have to have it pre-set, it hardly ever comes up.

WH: It came up this year.

MPT: But when was the last time before that/ it's not like you have to be ready and prepared or people to spend hours and hours of their live on it.

WH: I don't want code of conduct to be used to influence technical discussions. My fear is that it will be used to shut down technical contributions.

JHD: that's exactly what it should be doing, if you can't follow this while making a technical argument you can't participate

CM: What WH is saying is concerned about a CoC argument being used to win a technical argument. It being weaponized. That's something people involved in the process just have to not put up with.

JHD I agree with that sentiment, and I think if and when that happens people see it for what it is

WH: It has come up here before.

AWB: trying to combine threads here, we don't need a standing committee because we don't need a daily or per meeting situation here, this question of how do you raise an issue? anyone can raise an issue. I might suggest one way to approach that is, when that happens, if we have a code of conduct in place. So when a violation happens, the chair group could identify a committee to investigate the issue.

TK: I have a proposal for a code of conduct talking about these details, at https://github.com/tkellen/tc39-code-of-conduct-proposal/blob/master/Conduct.md . Can we identify reviewers?

AWB: I think everyone should be reviewers; this will require a consensus decision of the committee.

TK: How should that work?

WH: I have been reviewing this proposal and making comments. For the most part, I'm OK with it; there are some wording issues. I have concerns with conflating friendliness with respect. Conflating coworkers with friends seems to me to be a bit creepy.

TK: How about we proceed by opening issues on things like this and working together going up to the next meeting?

WH: One litmus test I use is how it would work against a previous instance of poor conduct resulting in losing a committee member.

DH: That instance had many factors and poor behavior from many participants; I don't think we should be litigating the details of that instance here.

MPT: Not having been there, right now you have a member who seems to be on the verge of tears. Maybe right now this conversation is a violation

MLS: What started this discussion is that he isn't sure this would have been effective in Munich.

BT: I think it would have been

MLS: To raise that a little higher, any CoC we draft should be useful in situations we actually encounter.

JM: What will make it most effective is our enforcement policy

AWB: I wasn't in Munich and didn't observe what happened. It concerns me if we conflate too much the sorts of things CoC polices are about vs poor meeting management. I don't know exactly what the situation is, but I wonder if that wasn't a failure of the running of the meeting. In many cases well run meetings prevent these things happening.

BT: Specifically I think our failure was that we didn't realize when discussions lost any amount of decorum. We didn't have strong leadership or anyone watching out for these kinds of issues. Had Maggie been there to point this out maybe we wouldn't have gone down that road. This document is encouraging because it actually does say in many words effectively how communication is expected to be handled and I think we didn't follow that in Munich.

AWB: We should all play well together and if things start to break down the first line of defense should be how our meetings work and hopefully some chairpersons could be in place to prevent these things from occurring and escalating to the point where someone is screaming CoC CoC

BT: Talking about any specific actions by individuals is missing the point. We got way too far down the road of emotional discourse and it burned us

JSL: This is my first meeting, i have to imagine this isn't the-first- time it's ever happened.

WH: That's correct.

JSL: Litigating any particular situation that happened at a past meeting is not going to get us anywhere. Let's focus on what we'll do moving forward. The role of the chair is to enforce the code of conduct. Let's make sure that's the way things are run. But we have to focus on what is the policy moving forward. We can't focus on previous instances or we'll get nowhere.

JXF: Would it make sense to have a policy vs in meeting vs online conduct?

JSL: In my experience there isn't enough of a difference.

AWB: We have a proposal here. Normally the process in the ideal world, the proposal is available far enough ahead of a meeting to file comments. I think we're in that situation now where we have something and we should be providing feedback on that proposal for the next few weeks. It sounds like it's far enough ahead that it's up to the people who are putting the proposal on the table, perhaps at the next meeting we. I would encourage feedback early rather than late.

TK: I would agree

MLS: So everyone is charged with looking at and reviewing this document for march.

AWB: Yes, for consideration in March. Don't wait until March.

KG: Before we move on, we were talking about the possibility of having no standing committee. This proposal states we'll have standing committee. Should we discuss that now? I'm not committed to having that discussion.

MF: I think we should also outline the specific goals we're trying to achieve with this so we can evaluate if we are accomplishing those goals.

AWB: I would hope the goals would be stated in the introduction.

TK: The document has six headings which describe the basic thrust. It came from the JSFoundation, and that is based on the Django CoC and other documents. It comes from pretty diverse perspectives, and so I think it's a good starting point.

BT: One often controversial aspect is that we are bound by this Code of Conduct outside meetings in public spaces where we are wearing our TC39 hat; I know this is controversial.

AWB: What does that mean?

BT: For example, say you are invited to give a talk about TC39--you are bound by the CoC.

JSL: This has come up in the Node community, where people have used their Twitter accounts in unproductive ways while acting in a Node-related capacity.

WH: What about the case where you have a personal Twitter account on which you do nasty things unrelated to TC39, and an unrelated third party then publicizes the link between that account and you? Does that turn into a TC39 CoC violation for you?

?: No, because you didn't represent your personal Twitter account as related to TC39.

WH: Are we all agreed on that interpretation?

KG: It would be nice to be more specific about when it applies and when it doesn't; I'll file an issue for this.

WH: Here's a real-world instance of this related to TC39: A long time ago Brendan had made some purely personal political contributions. Pretty much no one knew about them until someone outed them. Would such personal political activity be regulated by a CoC?

AWB: István, anything else?

IS: I'd like to encourage participation on GitHub between this meeting and next one. I'd be interested in seeing this document as well.

AWB: If you think there's anyone on the executive committee or in the leadership who would be interested in giving feedback, that would be great.

IS: We will discuss this at the next executive committee meeting in April. Generally, this is rather remote to them which is basically isolated to TC39.

AWB: I think this is likely to come up in other groups too.

IS: At the beginning, do not expect too much. There are a number of cases where we are flexible to account for TC39's further advances, e.g., the HTML specification as the authoritative copy.

#### Conclusion/Resolution

- Everyone in the committee is charged with reviewing the code of conduct proposal at https://github.com/tkellen/tc39-code-of-conduct-proposal/blob/master/Conduct.md by the March meeting

## 11. Test262 Status Updates

DE: You should share what Bocoup is doing with Google

TK: Several of my coworkers at Bocoup are responsible for a large portion of the test suite. One thing we're trying to do is to provide long-term governance and support for tests. To get proposals advanced, we need tests, but we are seeing some things not come through with tests. We have an arrangement with Google to write more tests and some sponsorship; if other implementers find it useful, then you can join in on this.

DE: Actually you've also been continuing to identify and fix coverage holes as well.

BT: For example, the double super call test was missing

BF: The module tests that Bocoup wrote is awesome

SYG: Are you importing V8 tests?

AK: In the past, Bocoup has imported V8 tests, but later wrote new tests

SYG: Would you be interested in fuzzer-generated tests that might be hard to read?

DE: Fuzzer tests often can be reduced to something readable and intelligible, at least the ones that have come up for V8. In my opinion, we should be relatively liberal for what we put into Test262.

AWB: I could imagine a failure mode for the tests where they become difficult to maintain because of too many tests for obscure optimizations

KM: For JSC, we try to wire in all the tests from all the other browsers to find any bugs. It can be really useful.

DE: web-platform-tests is very liberal in what it accepts, and it's more like an upstreamed version of what KM describes JSC has; this is way on the other end of the spectrum from Test262's review, and it provides some value, but I understand if we don't go that far.

SYG: Could we use wpt more for testing JavaScript implementations?

TK: I'm not aware of any plans for this, but if implementors want to support work for this we would love to do it!

KG: Embedders come up for things like detaching an arraybuffer

SYG: Event loops are more complicated, and so it's even more relevant there, whereas the harness is not as taxing

DH: Maybe this is a heuristic signal that this is something missing in the ECMAScript standard.

KG: Announcement: when you pull in the latest Test262 tests, you'll find that $ changed to $262 for harness hooks

BT: There are new tests for SharedArrayBuffer, requiring extensive API surface to run the tests; you have to be able to create an agent, sleep an agent, etc. Expect to do some implementation work in your console hosts.


## 13.ii.a Proposed Grammar change to ES Modules

(Bradley Farias)

[_Unambiguous Grammar Javascript_ proposal](https://github.com/bmeck/UnambiguousJavaScriptGrammar)

BF: So, at the last meeting, Dave was talking about use module, and this probably that node has with detecting if a given source text is in the "script" grammar or the "module" grammar. There are certain situations where it can be ambiguous. These are somewhat rare but they do exist in the wild. We are seeking, either to disambiguate source text, or use a new file extension for loading ES modules currently in node. The vote to accept file extension as a possibility was last march or april. The vote to seek a grammar change was last august. The grammar change is a little simple, but it's not syntactic. (explanation of readme of repo). Node would like to have a ECMA-262 blessed way of detecting the difference. The web is not supporting interop by using an attribute on a script tag. Node must support interop. I'm asking if it's feasible to ask for a parsing change.

AWB: One primary concern about this is that it precludes the eventual replacement or migration to a module-only world.

BF: Correct. There is always the possibility of someone accidentally deleting an import/export statement and then discovering this behavior change.

AWB: It adds friction in places of modules in place of scripts.

DH: I don't think module adoption would fail because of this. It's a big loss of ergonomics that you there are just realistic use cases that neither use imports or exports and they require this boilerplate. Removing this boilerplate causes the other parse goal to be used. Not saying that node to get to the place where there is no script target, but you could operate as a node user without knowing what non-module content is.

JHD: You mentioned some actual use cases for a module with no imports or exports, what are they?

DH: Some of them are just like, I have a module that serves only as a polyfill on standard globals. When you import it, you're just looking for side effects. Maybe it's not a polyfill, maybe it sets up the state of the DOM for your app. Basically, you're importing it for side effects, not bindings. There is also a usual workflow of programming story, it's not about here is the final artifact of what I'm delivering. The practice of programming is you open up an empty buffer and start typing. In this world, starting with an empty buffer means you writing in a different programming context until you type the boilerplate. Also, you're editing your program and you decide you don't need that last dependencies. You remove an export or import and suddenly the program operates drastically different. There are various ways in which you could unwittingly change the type of document you're working with. It's so far from what you're trying to do that it won't be top of mind.

JHD: I have a clarifiying question, if that's okay. In this world, without this change, if you type import, what happens? It would still switch into a module. It's dependent on the host environment, it could ask you what

DH: The changing of the contents of the source file don't change which file type/name you're writing to; this is completely managed out of band.

JHD: Out of band you still say this is a module. In the use case you're talking about I agree there are potentially two sources of truth. In all those cases though, in order for usability the environment will make a choice.

DH: One difficulty here is that it's not my call to make a design for Node. We wrote that proposal that didn't go very well of what it might look like to manage by out of band information. It seemed like we got most of the way there, but there were a couple places where it wasn't possible to signal; you'd need command-line flags or something. My goal would be to find a design that's close to that design as possible.

DE: To clarify, what are you proposing?

DH: I would offer several proposals, the ideal state in my mind is that node will design something where you can completely manage it out of band. Failing that, actually, orthogonally to that, it would be nice to signal in source that I really do intend this to be a module. In those cases, I offer the proposal of use module because it more clearly states intent. Export curly looks like boilerplate, "use module" communicates intentions more clearly. It's up to node, not me, to decide if they want to mandate "use module". Node could decide that you need "use module" or one import or export, or a combination. Or they could have what I am proposing is zero changes, manage it out of band. File extension is "out of band" but it's not my call.

BF: To clarify, you think file extension is not out of band?

DH: It's out of band, but I don't like that solution.

M: I struggle from the standpoint of saying you have a module that is side effect only. I would never allow that through a code review. I would never allow this. If you're scaffolding an express app, and you find that adding an 'import' statement makes these non-local changes to whether it's a module...

WH: Modules can be used for small top-level things such as a hello world program.

JHD: A poylfill would never use module code to do it, no browsers would support. For the next decade no polyfill will be written in module code.

BF: Would any of your polyfills break if they were swapped into the module grammar?

JHD: The ones that were written in ES5 would break, they are intentioally in sloppy mode. The ones that are ES6 and later tend to run in strict mode and would not break/

JLZ: Anything that is declaring a global to communicat between scripts will break if they are modules.

AK: Jordan your polyfills are extensive. If you have a targetted one, that is ... for instance Polymer is targeting very spceific APIs. They know they are focused on some baseline of browsers. I don't think it's crazy to say modules in the near term woud be use for polyfills

WH: Two things:
    1.When we adopted modules in the first place we had a big conversation about having an introductory sigil. We decided that no, we shouldn't. We are revisiting past decisions.
    2. If we have 10,000 line program, having an import or export at line 3042 shouldn't change what it is, it should be obvious at the top.

JLZ: I just want to say, from my experience with our internal migrations from different module systems, there is a LOT of confusion when you have to start loading module code in a different way. If you accidentally load a module as a script and it just works, it's going to be a big user issue, more than oh, i'm ediing this module.

BF: are you against changing the grammar?

JLZ: no

AWB: For a ECMA-262 perspective, it's a false dichotmomy to say we have scripts and modules. It's higher than that. We have ESScripts, ESModules and CJS modules. Those are all source files that have distinct syntax and semantics

BF: I would agree

AWB: Distinguishing all three is useful to a tool. It would be wrong for ECMA-262 to only address one of those vectors, the difference between scripts and modules. I haven't heard any discussion to how to tackle the broader issue other than the fact that external metadata doesn't. Any solution that is strictly saying this is about distinguishing for the purposes of node distinguishing modules from scripts is not a complete solution and we shouldn't adopt it because that. I agree with Dave that it would be perfectly fine for node from a standards perspective to say is the way We distinguish for modules is import/export boilerplate. I don't think that will cause issues cross-platform. I don't think we should be addressing this here. It's implementation or platform level concern.

BM: I'm guessing you're still against

AWB: Absolutely

JHD: Clarify, are you against ANY change that would make scripts and modules not overlap?

AWB: Yes, unless it also addressed CJS modules and made them not overlap

JHD: if a solution that was presented that was not this that allowed cjs/scripts/modules to be disambiguated with parsing only. Does anyone reject that out of hand?

WH: I don't know what that means

BF: I'm skeptical

DH: The idea of the pragma would be that in the core definition of the language it is an early error to try to parse a script with a "use module" pragma. It becomes a way that programmers can use this defensively or specific platform like node can decide to mandate in the cases they think it is good to mandate. Both of those are outside of the spec. The spec just says if there is a pragma it's an early error to parse as a script. I want to give an early argument for a complete distinction between cjs/modules/scripts., i don't think it's a universally bad practice to have a module with only side effects. You shouldn't do it willy nilly but in particular there are certain kinds of things that you would do at the top level of your app and they are standard use case for that (polyfills for example). Something setting up your ambient state, you don't want it happening everywhere, but if you keep it all in one place for you rapp that's legit and those use cases happen. If we just reject it because we don't think it's valid....

MM: It's easy enough to export the function and just invoke it

BF: there are other usecases for a module that sets up state, there is nothing to export, we're out of time and it looks like there are people vehemently opposed to this currently.

DH: The point I want to make to JHD is that we also have set up a world where your top level script are modules. LIke, the top of your app is a script. In those cases, you definitely, it doesn't make sense to have exports

JHD: You'd like have imports though

DH: right, but one of the things we've been moving through the stages is dynamic imports, it makes sense to have those, and no other type of import, for some code. We also allow that in scripts. That makes it even more plausible that  it does lots of importing but not top level importing unless we force those things to say export nothing. That to me says you suggest that using modules as the new script is a legit new thing and therefore wants to have the same "lightness" as script modules have today. If we have to add anything, we're adding a boilerplate.

BF: Just to be clear, i'm going to mark this as being rejected and take it to node CTC and fall back to a file extension under the presumed .mjs and this will be dsicussed at the next ctc meeting next wednesday. if you wish to join feel free.

MF: Just to clarify, you weren't looking to move this through as a staged proposal?

BF: people are already shipping technical previews, it would need to be fast-forwarded

MF: you said something was rejected, I don't think that is the case

BF: No, but node CTC's request of inquiry about this, we're not going to make a grammar change. People of TC39 are opposed to a grammar change

CP: We are opposed to THIS one, we are open to see other proposals.

JHD: you mentioned a phrase as a tax on modules that don't have exports or top level imports. It sounds like if someone came with a proposal that didn't impose an ergo cost nobody would be opposed but we have no concept of that.

DH: The fact that I presented this last month might have screwed us over. What really i as trying to present last month was to get started a conversation we'd start here. This is a strictly better option for you than a grammar change. you in node can do...it's effectively the same thing as export {}, just use the "use module" pragma.

BF: This becomes even more questionable and this has been discussed before at node ctc, we want a uniform way to manage this that moves from two or three ways of doing it.

CP: You could mandate "use module"

BF: But that is secondary citizenship to the web.

JSL: We have users who want to use that on the same code on Node and web; if the web doesn't require it, it seems strange to require it in Node.

JHD: In the same way one browsers doesn't want to break a page in one browser, node doesn't want to break compat. with code that works in browsers

JSL: We don't want people to have to include this

AK: This is the opposite of this, it's saying use module in node but it will still work in the web

DH: he's saying there will be the whole problem, there is a lot of web code that won't be able to work in node without it

JSL: all that content would have to have use module added to it otherwise, and we don't want to require that to the rest of the world

AK: we agree there is an ergonomic problem

AWB: We are not rejecting this, we just don't have consensus.

JSL: What I would reiterate like Bradley said: If we cannot have an unambiguous way of determining this, file extension option is the only one that we have identified as being, the least bad option.

DH: I really think you've defined the problem, uh, in a way that's unnecessarily limited your options. These aren't the only two options. It's not my job or right to tell you what to do, but I just don't buy that dichotomy. I think your making a mistake to chose the file extension route. I would certainly be happy to work with you guys on this

JSL: My intuition is that there is a path forward that is reasonable, we just haven't identified it yet. We don't know.

AWB: Just to be clear, the idea that there is a file extension being problematic, that's not a TC39 consensus either.

DH: It's just not our call

AWB: It's not even... we don't deal with files.

BF: I will say if time goes on eventually there will be a true cutoff and we ship something and that will be it. Whatever we do, we do need it to be the same on the web. WE can't have the web not require something that is required in node. I can have myscript.php

AK: The web's not going to require file extensions

BT: Wouldn't it be incompatible, you'll have modules

AWB: Filenames are out of band

KM: What's the difference in effort between adding "use module" and renaming to .mjs?

MPT: As a library author, I don't care either way

DH: I felt like the proposal I had last meeting was promising; I think it deserves another conversation

BF: Let's do that offline.

CP: And let's also explore the pragma

BF: There's a practical time limit if browsers start shipping something that we can't, and shipping seems imminent

JSL: We are having increasing pressure from users for delivering something with modules.

ZB: Given that we have browsers here, we could get agreement to hold off in shipping to make this change first.

TK: Is Node's only objection to "use module" that the web doesn't require it? If the web required it, then would it work for Node?

??: I would not be in favor of that.

JSL: Let's take some more time later to work through this issue.

TK: If we can't work out a solution, after good faith effort, could we agree to live with the pain of "use module", requiring it on the web and add it to the specification?

DE: Seems like we've already heard that the answer is "no" from this discussion.

JSL: If we can't come to an answer for in-band, we will need to put something out-of-band.

MPT: Multiple extensions

#### Conclusion/Resolution

- Some members of the committee are strongly opposed to this particular syntax change
- There is also some interest in various strategies for disambiguating
- We do not have consensus to move forward rapidly on this proposal

## 15.iv Progress report and request for comments on 64-bit int support

(Brendan Eich)

_Int64_

BE: Last meeting I presented Int64 Uint64, in a heck of a draft, trying to show how to do them in a future proof way, as new values types in the language. They got to stage 1. Since then, I think Benedict and LittleDan have talked to me on Twitter and privately about an alternative which I think should be considered. Which is, not to do Int64 or Uint64 now or even try to get them on the agenda in anyway. Instead, we should do BigInt/BigNum. The argument they make is that is what crypto libraries want and it's more ideal as a machine type. If they could be optimized enough they could resolve the use cases for Int64 Uint64. I want Dan to confirm this?

DE: V8 already does similar optimizations, sometimes we tell that something is a smi (small integer) and doesn't need to made into a double. I think determining whether or not BigInt vs Int64 is the first thing we should add is an empirical question. if there is a built-in bigint it can be optimized much better than something implemented as a library. You have a machine-dependent scalar types that should be used in the implementation. You can do compiler analysis on lowering the BigInt which would be not possible for one that is as a library. There are a few questions that could determine which is higher priority: one is, does WASM subsume some of these optimized use cases? Leaving that aside. Starting closer, if you put an explicit mask after every operation, when you want it to be in Int64 mode, then the compiler should be able to figure it out for optimized code. Do we need a lot of ergonomics for the Int64 cases or do we need more for BigInt?

BE: Let me restate this again because I think there is a lot there. Dan is talking about the use cases for new value types competing for optimization effort in the edges. If you optimize BigInt enough, you can indeed sometimes use machine registers, to hold some of the BigInts that are floating around. If you do that and have only bigints you still have a good match with crypto use cases that want it. If you do what I proposed to add Int64 and Uint64 now and optimize them as well and then ave BigNum library on top of them, BigNum won't get opimized as well. There are needs for Int64 and Unit64, OSes have those offsets and sizing, its not all about the crypto libraries but there is no cry from the Node.js community for BigInt like there is for Int64. The standing widespread request doing server programming in code is for Int64 to match system calls.

BT: Why BigInt vs BigDecimal if we're looking for one type?

ALL: laughing

BI: long history here, mike from IBM and Sam Ruby spent some time on this in the early harmony era.

WH: What do you mean by big decimal? BigInts are base-invariant.

BT: I mean arbitrary precision large numbers with arbitrary numbers to decimals. I claim nothing about a specific spec I'm talking about a sepc that can represent something other than numbers.

BE: I want to limit the scope to the discussion of BigInt going forward. There has been a fair argument that if you could have BigInts you can optimized well enough without Int64 and Unit64.

AK: I'm hearing something that is slightly pejorative, you have to do the same optimization for Int64 as for BigInt.

BE: I'm trying to say that either approach can be optimized to avoid boxing. The question is, do you have to do two anyway? Is there enough ground up demand for Int64 in TypedArrays, WebGL, because of Node, which is the #1 driver, you might need to do both anyway.

AK: Question about the node... if you have a 64 bit file descriptor, what's the problem with storing that as a BigInt? What goes wrong?

WH: The thing that goes wrong is when you introduce types of things and you have a function which expects and Int64 and you pass in a BigNum; the type restricts to only certain values. As an example, you can expose a function that contains a check, is this a value within a certain range?  The check can pass.

AK: this seems like a weird place to be the one place where we inject types?

BE: We have them already: TypedArrays for one

AK: you can't ask for those in a function signature. People today expect to get an int32 in their function and they might be surprised if they don't get it

BE: When people want float32, they might want this because of TypedArrays. We might have people deoptimizing these paths if they typically take one but are passed another. plain javascript always has to treat numbers as plain doubles, without more speciailization

BF: We have plenty of random hacks where we have arrays of two numbers for things that need to pass around a 64-bit integer

BB: The issue, we kind of get around with sort of, using doubles for the most part, file offsets, very rarely are they out of 2^50. We have to check if it's an int unless it is out of that range, etc...

BE: There is a legit use cases for 64 bit ints. It cannot be ruled out. you have to say, the tradeoffs look like BigInts could absorb those use cases closely enough.

AK: I also want to point out that just as an implementor that's not my only concern. V8 engineers have been pointing out that BigInt should be better for users as well. As a user, if we add all these different types and you have multiple 0s that don't equal each other.

BE: I thought we talked about value types a ton, we're going to have a number of them and they'll have 0s.

WH: IEEE Decimal has a *lot* of different zeros.

BE: I think we all agree they should be ==, ===, etc. We already have IEEE double, so we're talking about going to the next island of safety which is bigint, or should we do both?

MLS: If we add these other types we're talking about. I could see 8, 16, 32, 64, 128, signed, unsigned and none of them compare to each other.

BE: I'm glad they don't. That is something Dan and I worked out.

DE: Yes, we've gotten positive feedback from other members of the team about no interoperation

AK: Yes but at least BigInts of the same size would be comparable, right?

BE: No implicit conversion.

AK: The hope that would be this island of BigInts that are compatible with each other at least

DE: There are two parts to no implicit conversion; + would throw but === would return false

BE: There are fine points here, whether or we have explicit or implicit conversions, the BigInt vs Int64 step is still a question.

AK: Bigints would allow you have some semblance of understandability between these different types

BE: you mean you'd be absorbing more use cases with a single type?

AK: Yes, while absorbing those you'd be in a better state than having 8 types

BE: After going through SIMD which is stalled at stage 3.... nobody is here to impose all the ISO C++ types, today. But, we have a problem. The twitpocalpse three, there are latent bugs

MLS: Besides file offset, getting values back from stat.. why can't a BigInt handle that? You know you're going to get back a value you can do logical operations on to see which bits are set.

??: I don't think anyone is saying BigInts won't work for node. I think BE is saying we have a use case for smaller integers.

BE: Lets argue apples to apples, if the optimizations for BigInt don't require boxes, there will be slow paths for network i/o

DE: stat is a system call it's going to be more expensive than allocating

AK: it's not significantly harder to optimize a BigInt vs an Int64 that take 64 bits of space.

BE: I think there are always optimizations available. We're talking about doing one or the other or both (which I don't propose personally). I'd like to get a sense of the committee on BigInts as the better evolutionary hop. Who thinks we should do Int64 Uint64 in preference to BigInt.

BF: We just want something bigger; these alternatives don't matter to us

BE: Who wants Bigint?

(the straw poll was stalled in the middie due to objection to the idea of a straw poll, but most implementers seemed to prefer BigInt)

- both: 2 votes
- bigint: 9 votes
- int64:
- either:

BB: The cases where we need 64-bit ints are not in the hotpath. stat is expensive enough that boxing it is not in the hotpath.

BE: I'm not going to champion BigInt. I sunk the cost in Int64, Uint64. My time is limited. Someone else needs to do this. This is why we're five years down the road.

AK: V8 cares very much about the use cases for 64 bit.

??: If the choice is between like, okay, we have nearing completion for 64bit. If we have to start from scratch we might start over again.

BE: That's exactly the issue. I'm talking about who is championing it. Are you gonna do it?

AK: Depending on what the outcome of this discussion is.

BE: I don't have time for it, it's actually more work in my opinion.

WH: This is like 4th or 5th time we've tried to do this in TC39. I first proposed Int64/Uint64 in about the year 2000. We generalized it to BigInt. We generalized it to value types. At that point it became complicated enough that nobody wanted to deal with it. So we dropped it. Next we proposed Int64/Uint64. We generalized it to BigInt. We generalized it to value types. That had too many dependencies and we dropped it.... It's now 17 years later. We proposed int64/uint64....

AK: I haven't been at this as long as you. JS as a language that is moving forward is doing pretty well these days.

BE: I hear it's about to be replaced by WASM. I heard Dart was going to do that too, through. We need a champion.

BE: 64bit is easier. That's why I'm able to champion it, but not able to champion bignum.

BT: We could break the cycle right now by forming a consensus around the specifying some big number type before any other

BE: I tried that last time. That's a given, but that doesn't help We're facing a crucial issue, 64ints as the next step or BigInts?

BE: The big breakthrough was finding no implicit coercions. BigInts are just hard, they have arbitrary precision.

SYG: Do you need to change your value representation from one to the other?

AK: This seems to the V8 folks

SYG: outside of optimization work, it seems like it is just as hard or easy

AK: it's not an implementation concern, it's about users

BE: I heard about optimization early on on twitter, that's good to hear today. that is' really about language

AK: it's big, i can't speak to the twitter conversations, the bigger issue is one of feeling that this fits better  with then language, not doing scope creep helps somewhat.

BE: Everyone wants the ideal but who is gonna do the work? That is the concrete consideration that will guide our decision. Plato vs Aristotle, in the real world obviously bigints.

AK: Do you think it's impossible to specify BigInts

?? If nobody is going to do it we'll be here 5 years form now. I feel this very much too. We should move froward with a good proposal, I think int64 was, or, you know, very soon find someone who is going to do the actual work instead of saying oh yeah that would be much better. If your team is willing to put up a concrete proposal I would be okay with that.

CM: To make this a little more concrete. Is there any reason not to proceed with the 64bit proposal until we have a solid bigint proposal?

BE: No, I think the committee today should decide to go forward on 64bits with bigints with a champion for it

DE: Give potential champions some time...

MM: No matter what we decide it's certainly the case that BE can keep working on it

BE: I'm not going to proceed if we have a split committee

MM: What's the MVP?

ALL: 64int

MM: The use case here is obscure. It's valid, it's very valid. No matter how you slice the 64bit integer, it's an obscure use case for most of the community. Nobody is making a rallying cry for it.

DE: Neither

JSL: Node would use whatever works. Our natural preference would be whatever requires the least overhead.

BE: I think it's quite true, they don't know what trouble they are getting into until they hit a binary rounding problem and then they blame me.

MM: I people are clamoring for this, just ship an MVP

DE: One thing you want is an MVP that evolves into what you want; I'm not sure 64-bit ints have that evolution path. I think if we can give until the next meeting ot find a new champion,

BE: I do want to work on it but I don't have time for it.

??: If we aren't adding 64bit integrates, we're adding infinitely big integers.

WH: That's just bigints.

BE: The spec has to describe how it works

WH: A lot of lisps have that, it works fine.

BE: You cannot parameterize division by the exponent, it doesn't work

??: Ok well

BE: Someone has to write down how operators work and it depends on the type

WH: For 64bits or bignum

BE: I'm saying there is work, it's more work for bigint. If you were writing the spec would you say it would be the same effort?

WH: Yes; in fact, the effort to write a spec is a bit smaller for bigints than for int64/uint64.

BB: That's how I think too, your'e still talking about how division works with integers

MM: There is still a mathematical concept that bignums reflect clearly. 64 bit signed integers do not. I hope we don't do 64 bit signed integers, but I hope if we do, despite the runtime costs, i would have it error rather than silently wrap when it overflows.

BE: I still have this concern having done some of the work, bigints are not just a generalization of signed 64 bit ints.

WH: In the spec language they are, it's a very simple spec. If you look at all the basic arithmetic operations, bitwise logical operations, shifts, they all have obvious definitions for bignums.

??: Maybe bitwise binary operations are

WH: Bitwise operations are merely operations on half-infinite strings of bits in infinite 2's complement notation. They all just work. (A positive number conceptually has infinitely many leading 0's. A negative number conceptually has infinitely many leading 1's. Only finitely many least significant bits need be represented for any particular number.)

BE: It's not bitwise I'm worried about. What about divide by zero?

WH: That doesn't change between 64 bit and bignums. What happens when you divide by zero with uint64's?

BE: it does because 64 bit hardware exists on many computers that run JavaScript

MM: What does the hardware do?

??: It wraps, usually

MM: presumably your'e going to throw an exception.

BE: maybe i should reconsider if it would be more work. let's not worry about the champion right now. i just want to confirm we don't have a split committee.

AWB: There are two aspects to this, one is the spec time, the other is time to implement. Particularly, time to implement across all the major implementations. Do people actually think they can manage to implement BigInts? What are the differences?

FHN: Shouldn't we value users over implementability?

AWB: Where there is a usecase for this, and there are usecases, it's becoming a relatively critical need, this is not something we should be looking for 5 years from now. If we said it was bignums, when can we reasonably expect that implementations would have produced viable performant implementations in browsers?

AK: From the V8 side, we got momentum internally on BigInt because the effrot required seems similar for what people would expect for Int64.

AWB: What do other engines think?

MLS: Same for JSC

BE: Just to be clear, do you mean expectations for users on int32...

AK: I don't know what the details of the staging plan...

BE: Does that bring up signed vs unsigned?

DE: bigints are always signed

??: It's only interesting when shifting

BT: Do you think a general value types is in the cards for JS?

BE: When we got IBM to back off on decimal as a hardcode extension. WE used the same argument that WH cited, value types. Decimal is still out there. I've talked to some people lately that have a need for decimals.

BE: Value types are still on our agenda and we've done some work that everyone agrees with that is constructive. There are all sorts of possible uses, like for the CSSOM; also custom literal suffixes, etc.

BE: Let's talk about this constant rumor that WASM will replace JS. It may happen but not for a long time. We'll have pressure for new value types. Everyone will be happy in Number-land until they aren't, and then maybe they'll use BigInts when they are available? To me, it almost doesn't matter. We've done enough work on Value types, pressure from the edges is big enough. I'd like use to get there so we don't have to keep hard coding. When I extended the spec, I future-proofed a meta protocol for value types. Realm specific auto wrapping of primitives in objects, that's important. I'm not going to summarize all the learnings we've had. Its useful and could be fruitful. Having been around this current wheel so long it's not worth worrying about. If we need it we can do it.

MM: I've been doing this now for 8 years, which I know is nothing compared to you. Leaving the door open for something to be done cleanly at such a time in the future that someone has the energy to do it. To me, that is a big deal. The difference between decimal without value types in the old days vs your proposal now: You've done the work to understand how value types could grow in such a way that what you are proposing now will be retroactively rationalized into the value type proposal. We don't know if it'll turn out that way but you've paved the way. The idea of holding the door open for something often works. If you're going to stay on the standards committee you have to play the long game.

BE: Good point. There is some pressure with game developers with mutable vectors and matrices for operators. That's a separate proposal. The committee could do operators, literals, and value types.

DE: Literals could be done totally separately. CSSOM could actually use suffixes to construct objects

BE: Tab wants implicit conversions.

DE: There are all sorts of intermediate things.

BE: Maybe bigints are no more work. I'll go weigh that. I think we still have people raising our hands on both sides of this.

WH: I'd be happy with either one but want to see it happen now.

AWB: What does it take to get this in ES2018.

BE: If we're being real, I think we should talk about WASM.

MM: I want bigints a LOT more than I want 64. I would really like to see... if we had them, we would never bother with int64 and that would be fine. If we had int64 we'd never do bigint and i think that would be terrible.

BE: We have agreed here that JS isn't a language where we're trying to limit types. We have typed arrays, even with WASM coming up... it might accelerate. We might need 64 bits soon.

WH: Are there implementation concerns with bigints? If there are any, please state them sooner rather than later. We can throw the switch and go the bigint route but I'm concerned about it getting shut down nine months from now due to engines' efficiency concerns, and then we'd be back to square zero.

AK: I wanted to find out what the temp from the committee was before I did any work on it. it's clearly warm and that is enough fuel to do more work. Can we say people who are interested in bigint can look at this for the next two months and we'll talk about it then?

AWB: If you add two months, you've now taken out a major chunk...

AK: I object that if you don't say bigint now....

BE: You need to be de

BF: I will be on the hook for spec work if we agree that if I come next time we're not going to complain about implementation problems. I don't have that issue. I don't think in two months I can get up to feel speed on the entire history of this thing. I do not expect it to go to stage 2 in that meeting.

AK: Michael and I were having some backchatter, and might be interested...

BE: I actually want someone on an engine team to take it. Someone needs to actually commit though and say they'll do it.

BE: Dan would be ideal

DE: I'd be happy to do it, unless AK and MLS want to

BE: I think we need to be decisive.

DE: I can sign up to be the champion for this, if that seems...

BE: Until someone says I'm doing it, it won't happen

WH: I'd be happy to review it.

AWB: And the stage one item we have transforms into a bigint approach.

BE: You did an earlier version that I wasn't aware of.

DE: I did some earlier work to figure out the semantics for operations for Int64 in the past. Stuff like division is not totally simple.

BE: I don't think we have marks glitch with overflows.

DE: That's a legit design point we can consider. I'm not going to rule that out

MM: I would be amazed if what happened was we got int64 first, with overflow throw.

BE: Fair enough

MM: I think of all the options, that's the least likely

WH: int64 with overflows throwing is a really bad idea.

BE: Right; so we don't even need to talk about it.

DE: That's a very awkward path to bigints

BE: Okay so, the other thing that needs to be done, and this is where TC39 needs to take the hit collectively (used to be mozilla).

BE: a bunch of people are going to say you bozos why are you not doing int64

DE: Okay, the job for me will be to write an explainer giving that. They'll probably say the same about division. (Explainer: https://github.com/littledan/proposal-bigint)

BE: You can write an explainer but there will be a reaction.

AK : We can't be making decisions about what people say on twitter, can we?

BE: PR is a part of the job, we do need to do it well.

DE: It's hard to communicate through twitter, explainer docs and threads on github are a better medium for the people who are really engaged.

??: One question about this proposal. Whether it is bigint or int64

_etherpad went down for approx 5 minutes_

#### Conclusion/Resolution

- DE will champion BigInt



## 13.i.d Seeking stage -0.0 for IEEE-754 sign bit

(JF Bastien)

[presentation](http://jfbastien.github.io/papers/Math.signbit.html)

(Presenting link)

JFB: Math.sign doesn't let you differentiate 0 and -0; it has five possible outputs. I want to be able to tell about -0 and +0 in an intuitive way.

MM: Just to clarify, you're not proposing to change Math.sign and the operation is named specifically

JFB: Correct, I'm borrowing from IEEE 754 that has an concept called sign bit. They don't affect the number in any way. If you look at C++ or Go, there are also functions that do exactly this. It's shift and mask, just give me the bit that indicates sign.

??: What does signbit do with respect to NaN's in IEEE 754?

WH: It's complicated.

MM: It matters in the sense that we have to specify something.

JFB: As a user there is no concept of signedness. Although C++ allows you to observe the sign of NaN, sorta, it's not consistently exposed; Go is not mentioned in the standard. We have to make sure that we continue to work well in both NaN-canonicalizing and non-canonicalizing implementations. This proposal just chooses something

WH: Why are we doing this? What is the impetus? Why do we care about the difference between -0 and +0?

JFB: It's very unintuitive?

WH: Why would you care to distinguish ±0?

JFB: It's not an open question, I want to distinguish it, done.

WH: Okay, so do 1/x. Done. If you like, write a function that does it.

JFB: That's hostile to a user.

AWB: Which user? Who are we protecting?

MM: Just to flesh out the argument these guys are getting at. In order for a user to be in a position to care, they are probably enough of a specialist, enough of an expert about what floating point numbers mean that the reciprocal thing is not hostile to them. The people to which it's hostile, have no need for this.

JFB: They have math.sign for that. The bar was high enough that Math.sign was a good thing for TC39

MM: Math.sign is understandable in terms of the mathematical numbers that are represented. Both zero and minus zero are neither positive or negative. They are mathematically zero.

JFB: Yes, but how you got to the zero matters. In some cases it matters to differentiate how you got there.

MM: I understand that it EXISTS, the point i'm trying to elaborate, there are users that care about floating point numbers enough such that the difference between 0 and -0 is significant to them. That's a very small population. There is a very large population where Math.sign mapping 0 to 0 is fine.

JFB: That's fine.

MM: The point is that the user hostility argument fails because the users that would care are ones that would find the reciprocal not hostile

ZB: A real, recent case comes from my field of localization. One of the formatters can have a zero for a unit, year/month In this case the unit we may want to say zero seconds ago or zero seconds. The way we'd distinguish that we use 0 vs -0. 0 means "in 0 seconds" and -0 means "zero seconds ago"

WH: That is user hostile

ZB: I still thing it is esoteric, I just wanted to provide an example

AWB: If there is a distinguishable feature in the language people will find a way to to misuse it

MM: I do not think this is positive argument in favor of the proposal.

ZB: I'm not saying that, I'm just providing an example

JHD: So you're talking about the usability of diving by infinity. At this point you could say (describes a way to do this with existing apis). The usability of Math.sign(x) is vastly superior to that form. That's the burden of proof I would see.

JFB: Let me make another argument, when you're doing something math based things, why are you talking about objects. Sign bit is a thing for a person with a math background.

JHD: In that problem domain it makes sense, sure

JFB: It's totally a niche thing, but it's trivial

AWB: We have a complexity budget. Yes it would be slightly better for a small number of users but it is an addition to the spec, our workload, an implementation, etc. Anyone can trivially define a one-line function to do this. What is the overriding... we don't have an infinite amount of complexity we can add. Someday we need to stop

JFB: Sure, but you already have this complexity. IF you are going to quack like a duck quack like a duck.

JLZ: Are you proposing to add a series of operators.

JFB: I'm feeling the waters... can we add this or should we each roll our own?

JLZ: I would be inclined to see a series of additions rather than single function

JFB: 23 mathematical operations were proposed for C++ 20 years ago, and they were only just now added to C++. It's hard to get these right, and it takes a long time.

JHD: So you're seeking stage....

JFB: Stage -0!

All; ha

JHD: Realistically this is either stage one or the committee decided that this will never happen. Are people saying they will never allow it?

WH: I'm willing to be convinced. But signbit is not what IEEE 754 specs. Instead, they have a copysign function.

JHD: It's in the proposal.

WH: (looks again at proposal) It isn't. The proposal isn't proposing what IEEE 754 specs.

JHD: The timebox is about to run out. If nobody opposes it being stage one, let's do that.

AWD: Is Rick's proposal is in stage one?

JHD: Let's investigate if they should be separate

AWD: I suggest merging this into that proposal

DE: The issue with Rick's proposal the committee was unsure about the motivation. Putting them together just makes something less convincing.

JHD: the question of it being merged or not is a stage one question

AWD: How many proposals we have floating around in different areas? Things in the same general area should be considered together. I'd much sooner be considering a set of related math functions or just math functions in general than a bunch of individual ones.

DE: What if we say the champions should work together? Look at Rick's proposal.

AWD: Happy to say, sure, you should talk to Rick

JHD: Is appropriate to have them both be stage one?

DE: For this particular case, we want to have a consistent math library but there is no cross-cutting thing that associates the two proposals.

AWD: Is this actually higher priority than anything in Rick's proposal?

DE: The thing about Rick's proposal is that we introduced these operations for degrees.

JHD: I'm suggesting that putting these both in stage one is the right place to determine if they should be considered.

#### Conclusion/Resolution

  - Stage one, but discuss with Rick to consider merging / relationship between math proposals
  - Concern about the motivation for users (is this too trivial, and any interested users can implement it themselves?)

## 13.ii.f Promise.prototype.finally to stage 3?

(Jordan Harband)

https://github.com/tc39/proposal-promise-finally

JHD: The overall state. There is still information being gathered by chrome in particular about whether or not .catch can be modified to not observably call .then. If that's true, prototype.finally would do the same. This feedback wil affect this spec (potentially).

DE: Even if we find that nobody or very people do this. I'm not sure we have agreed to change .catch's semantics.

JHD: we need to determine first if it is even possible. The straw poll we took last time said it was okay because people generally want less observable things.

MM: How are they checking whether the change to catch is web compatible?

JHD: It would only be incompatible if someone subclassed promise and overrode then.

MM: No, there are two other ways it could be incompatible. They could replace promise.prototype.then or they could add a then property to the promise instance

DE: Or you could .call the method

JHD: So i'm even less confident now on this change being web compatible.

MM: I want to know how you -determine- that

JHD: I am not sure how that works. I'm not seeking stage three this week. I just want to establish that if .catch will be changed .finally will change. It seems likely that this won't happen, but if it did, I would have a PR that makes this compatible.

??: Whats the motivation for not calling it?

JHD: Just so the .finally call can have less observable specs. I've been told that the V8 team looked into it and decided it's OK to use these semantics.

DE: If we look at the value of the .then method and it's the original builtin value, you can avoid allocating the closures.

JHD: That was my primary concern to make the change. It seems in the majority case that seems like the right way to go (to be consistent with .catch). I'm going to merge this PR, get spec review, await the outcome of the .catch investigation and renew my request for stage three. I don't see future changes.

JLZ: I'm pretty sure that angular and some others depend on .catch calling .then or that they can override .then

JDH: And then the native .catch calls into that? If that's the case, it's not compatible to make that change

AK: WHat's the status of V8 looking into this?

JHD: There is an open bug on your bug tracker.

AK: And we're looking a this?

DE: We checked in a use counter and we'll have data in a few months. Even if the use counter isn't hit, that doesn't address the design constraints this addresses. We don't generally hold nonzero to be the threshold for compatibility.

AK: I'm concerned about holding this feature up... the longer it isn't there, the longer it isn't there. I'm objecting this being stage three because this spec might change depending on the outcome of this work.

AWB: Basically we're splitting hairs about observable vs non observable changes.

JHD: okay, I'm going to merge the pull request where it observably calls .then, look into angular, then confirm it's not compatible.

MM: Given the topic let me say that I approve that when this issue is settled you can go to stage 3.

JLZ: Do we do conditional Stage 3 approval?

MM: Given the topic it felt poetically appropriate to share this ;)

JDH: Last question, can I have some volunteers to be reviewers? Mark, Dan

#### Resolution / Conclusion
  - MM and DE will review, based on proposal in a PR that observably passes callback functions to the .then method
  - Still at Stage 2

## 15.iii.a Error stacks (seeking stage 1)

(Jordan Harband and Mark Miller)

https://github.com/ljharb/proposal-error-stacks

JHD: I'm looking for stage 1. Spec details don't need to be bikeshedded here. The goal is to lay a foundation for error stacks, such that future proposals can resolve outstanding wishlists. The general gist is that error.prototype.stack is going to be an Annex B accessor on Error.prototype. The goal is to have a union of behaviors across browsers in a way that allows for extension which I'll get to in a moment. The reason the accessor is annex b is to allow

BT: Why is that a value?

MM: It's of value because the stack leaks non-local information that can be used for attack (I provides non-local information that is normally encapsulated). Also, everyone sharing the same realm necessarily shares the same error.prototype.stack, so they have to share the same view about where the stack maps to. So, SES for all of those reasons is an example of an environment which will remove this accessor. Having removed it, you're still a compliant environment.

JHD: If it is error.prototype.stack then the stack information is directly attached to the error object. That can be sent across realms. If you do not have the stack accessor and you have something like System.get.stack

MM: No, you understood it except the use of Realm. If you are in different realms those could have different "Error.prototype.stack"s. For residents of one realm running with different global scopes, because of the different get stack string functions they see, they could have different views of how they map to source positions. If it is on error.prototype.stack, you cannot deny access to it diferentially across  realms. You also can virtualize differently for residents of the same realm. It's also a security concern, an adversary can look at how the stack was populated.

MM: In all four browsers, if you create an error object and you say error.stack you'll get a string that gives you information about the call chain.

WH: Am I the only one bothered by this exposing hidden data from closures? MM describes a workaround to hide this data in sandboxes, with a lot of effort, but the basic information leak problem remains for non-virtualized scripts.

MM: No, the reason you make it removable, and Annex B, and deletable is because we're worried about that.

WH: Fine you address this for virtualized environments, what about regular ones? Modules trying to protect themselves from each other?

JHD: Those libraries can't hide that information at this moment. Not specifying it isn't increasing security, it is pretending the issue doesn't exist.

WH: We had the same issue with browsers showing the arguments to functions as a property of functions.

AWB: I know, for strict mode functions in particular we tried to prevent stack walking to observe the callers.

MM: And we were able to get rid of it due to the (strict-mode) opt-in. If I thought we could simply remove the stack trace information, not codify it, but get all browsers to remove it. If I thought that was possible this proposal would be very different. Since all browsers currently implement it, I'm not going to try to argue for that. I'm looking for the least dangerous thing that is compatible with what the web currently does.

JHD: There is huge ecosystems relying on stack traces, we can't ban these.

MM: WH's issue is not with banning this way of accessing. In fact we're specifying that all of them must put the accessor on Error.prototype. It's removable, the remaining privileged operations are on the System object. (WH: that's the opposite of what I said)

BT: What are your actual plans for standardizing Error.prototype.stack? It seems at this point we're all pretty entrenched as implementers on our stack format.

JHD: Yeah, let me get into that. I'll explain the API. The normalization that this is doing is compatible with what all implementors are doing.

BT: More related to the previous discussion. I understand now... I guess the answer I was looking for is that you want this in Annex B because you explicitly want to require browsers to have this property be configurable and you don't want to see error.prototype.stack show up in say, node, or other non browser environments.

JHD: It's already there

MM: We want to allow other implementations to NOT put it there

BT: Annex B is only required for browsers

MM: Yes but it's normative optional elsewhere, it allows non-browsers delete it

JHD: Some implementations do it as an accessor, some do it as an own property.

BT: This is beside the point. I'm trying to understand what you're trying to require of whom so I can understand. I'm extremely skeptical. I don't like adding things to Annex B.

JHD: The first thing in general for adding/codifying it, is not allowing it to be an own property. The reason it should be in annex b is so that it can be deletable without the environment no longer being ecmascript compliant.

DE: What if we just put the whole feature in Annex B? Do we really need the feature dually accessible through this error getter and these properties on the new System object. Non Annex B environments could sort of either not use the future or pull it off to store somewhere before destroying it.

JHD: that's separate, I hadn't considered that

MM: I hadn't either

BT: I would object to that completely. I don't see why you couldn't put this in the main text of the spec along with the presumably the spec for System.getStack

JHD: I guess that's true. Either way you could... either way the accessor has to return a string if you want to deny access to the stack trace information, you'd have to return a string or object representing it.

BT: That's going to be true regardless.

JHD: If it doesn't exist, the only way to get to the stack is through that function

CM: If i understand correctly the reason to put it in annex b is to make it allowable to get rid of it. why not just say that's allow?

MM: No no, it's just saying that once it is disabled it's an environment that's spec compliant.

CM: Just say that, then. Annex B has other implications.

MM: No, we're saying it's optional to implement the feature, but if you do implement it, it must be like this.

AWB: I don't believe Annex B says feature-by-feature thing can be omitted

BT: You can't pick and choose pieces of Annex B

JHD: it sounds like if there is a mechanism for it to be deletable and still be compliant

BT: Making it deletable just makes it writable. We're saying don't put it there at all

MM: If Annex B is take it or leave it as a package. It needs to be normative optional on a per feature basis. If it is only normative-optional as an indivisible bundle, I've been putting things in annex b for years with the wrong assumption.

MK: I had the same intuition you had mark. I'm reading the text and it's not clear.

AWB: o, these are the things that you need to include as a browser

MM: I thought it meant that each thing was individually optional. Michael just read it and said he couldn't tell

AWB: If it doesn't say it is individually applicable then it applies to the second

MM: No, it applies in the section

WH: No, it's a logical fallacy. If you're a browser you must do this; if you're not, you may do this or not do this. There is nothing that states that you can't do something else, like just a part of this, if you're not a browser.

MM: You may do part of it. They are individually normative optional.

AK: I think if you're building a browser you want this feature.

MM: I'm fine with it being what I Thought annex b as, which was mandatory in a browser, normative optional otherwise.

AK: I don't think it should be an optional thing for building a browser.

BT: That's fair

BT: Mark would you want a web browser to not ship this? Are you comfortable requiring it?

MM: I'm comfortable requiring it.

AK: Parts of the regular spec will say parts are allowed?

BT: Before I thought i was optional in browsers as well, was that a misunderstanding?

MM: Yes it was. I understood Annex B to be mandatory in browsers, otherwise normative optional on an individual feature basis

SYB: are we just discovering that English is ambiguous? :)

AK: I don't think there is normative text in the spec to describe what a browser is

AWB: When I wrote this language I was not thinking about piecemeal application. It's plausible to interpret it, but that isn't what I was thinking about.

DE: I think the discussion would probably be helped by more concrete current nonannex-b implementations. We know that SES is one non-Annex B environment; other possibilities could help us refine our ideas for what we should have in spec text. The other thing I want to say (shameless plug) I have a PR for ecma 402 and I have inline annex b stuff and I have different formatting for it. I would be interested in anyone's review because apparently there are a lot of feelings about what annex b is... https://github.com/tc39/ecma402/pull/84/

MM: I would like to review it

DE: Thank you

WH: I see this as a problem that creates non-sandboxed information leaks. Just saying you can delete this if you're building a sandbox doesn't ameliorate the leaks.

MM: the issue WH is bringing up is that it *can* leak information

JHD: It's already doing that in every implementation.

MM: That's the reason why we are pushing to codify it because we don't think we can kill it

WH: I think we should kill it or require special permissions

JHD: ordinary scripts already require this sort of thing. NewRelic for example, there are billions of dollars in around this. i can't see how it would be possible. I think all member companies here rely on that information.

WH: It's unfortunate that we're required to codify a security hole just because of existing practices.

MM: Do you believe there is something we could propose that could be accepted and be implemented that would plug the hole?

WH: Hmm. Approaches would be either to not build this or to proceed along the way you (MM) suggested of finding some way to obscure or hide the information it provides.

MM: As far as the first one is concerned, if we don't propose anything, browsers will continue with existing practices and not solve the issue

JHD: I would claim this lays the groundwork for opening the possibility for allowing some sort of global config to say anyone using this System.getStack information to remove all the security leaking information. Currently fixing this is not possible at all

WH: Sure but that would break those billions of dollars of scripts....

JHD: maybe it could be opt in?

MM: That's precisely the difference between what WH is proposing and we have here. Things which have not opted are able to now

JHD: That is the reality of the web, unfortunately. That ship has long since sailed.

AK: it might be cross origin iframes issue

MM: The issue about cross-origins stacks and what information we reveal there is important, fortunately because ecmascript doesn't understand the concept of origin, because of the freedom this proposal allows, this proposal specifically is able to sidestep that. We as responsible creators of the web infrastructure can't sidestep that. it's a hard problem. i don't know what to do about cross-origin stacks.

JHD: You can postMessage an error object

AK: We've had security bugs with stacks

MM: I want to signal with everyone that is an issue we need to wrestle with

JHD: Error.prototype.stack is an an accessor that is somehow normative optional. There are two functions that are stored on a privileged granted namespace, currently called System. Mark has a number of opinions on why it must be a separate namespace. WE can also address concerns of compat about the name system. I'm sure that anyone using that is just using it for a namespace to hold .import.

AWB: Why not use an import to access it?

JHD: Because there is no current feature for builtin modules. As we've discussed every time this comes up, it shouldn't be a blocker.

AWB: Maybe we should change that.

JHD: There is no consensus on that.

MM: In order to change it, you need to do two things, one is you need to solve the problems we've already discussed. Because this is a privilege-granting operations, you basically have to alreayd have a multiple loader environment so you can say that some priv code says you can import the object. normal code cannot. If you had a built-in module system that satisfied both of those requirements I would have no objection

JHD: Okay, if anyone lands built-in modules, a number of existing proposals would be.

BT: WE need some proposal to be a motivating use case to drive built-in modules

BM: We have initial bikeshedding from browser side that we could expose the current url of your module via an import of some kind. The assumption is we'd have our own URL scheme, either the about scheme which seems kind of weird, or maybe js:

BT: What?

BM: Clearly we can't use JavaScript:, we could try to present that in two months if this matters to you at all

BT: It matters to me!

JHD: I don't want to get into this bikeshed. I don't think things should only be provided by builtin modules right now. That's not something I want to get into until now.

BM: So you're not locked in.

??: What if we ignored the container of you proposal.

AK: What is the motivation for providing additional things?

JDH: WE want to create a scope in which System.getStack does something different in one scope or another

AK: I'm curious about what it does. Are there users that want to provide getsack but not Error.prototype.stack

MM: Yes

JDH: I have a use case. I want to filter out any part of the stack trace that is in react.

AK: Has anyone written code doing this?

MM: Causeway, which is a postmortem debugger for distributed JavaScript. It does a post-filtering of the stacks it gathers. It doesn't do the post filtering by bundling the result of the post-filtering as a virtual getStack. It does the filtering basically in order to present, in order to filter out things that are known in that context, likely not to be significant.

AK: I understand the use of working with stack traces and strings and even objects and filtering them. I'm looking for a use case online.

JHD: Okay, so, the API. (Describes the spec as linked above)

JSL: V8 has Error.captureStackTrace.

MM: this proposal doesn't support that

JSL: We are making use of this in Node

BB: That's because in V8 you have to do that

JSL: It basically lets us truncate the stack at a particular site. It basically takes the error and a particular constructor.

JHD: Two responses: On es-discuss, some modifications due to feedback

MM: What we shouldn't do is expose prepareStackTrace, which exposes all sorts of function objects

JSL: We use some additional information to get stack information

JHD: We might want to add an API to configure that in a future proposal.

BB: What would the performance impact be of having this available? {unclear}

AWB: How is \[\[ErrorData]] represented?

JHD: This needs to be added in a future revision

{What is the motivation?}

MM: There is currently a lot of cross-browser divergence. The only way to get error stacks cross-browser currently is to convert to a string and scrape the string. The SES shim has to do this. The proposal is purposefully vague, to permit omitting frames, etc so you at least get the basics in a cross-browser way.

AWB: But the hard part is actually looking through these cross-browser issues in a comprehensive way.

WH: How useful would this proposal be without those things nailed down? The claim was made that there are lots of scripts in existence that depend on this proposal's functionality so we must include it in the spec, but how do said scripts deal with frames omitted or inlined at implementations' whim?

JHD: They break once in a while.

JLZ: You should remember the problems with stack frame elision from the tail call discussions.

JHD: again, during these discussions, stacks came up. Mark or I, one of us said we are not intending to normatively require or prevent omissions

MLS: I think I asked specifically that not all frames would have to appear. Thank you for doing that in this proposal.

JHD: Thank you, I intend to do that.

MF: I like this proposal, I'm very much in favor of it. Early in the discussion we discussed a convenience API where a function is given and all appearances of that function in the stack trace are censored.

JHD: I went back and forth if i would include that in this proposal. This is hard enough that I think it should be a follow-on as options to the System.getStack call. I'd like to be able to black box react or jquery, etc.

MM: It seems to me that's a perfect example of something you'd want to do with getStack virtualization.

JHD: That's true, you can do that yourself by virtualizing this.

MF: Do the stack frames actually contain the function object? We need to compare against the function object and don't have the source position.

JHD: I agree it's useful to just take the function object, that's a possible extension in the future to this functionality. Nothing bout this makes that impossible

MM: We must not provide access to the actual functions. If we want to provide for this filtering, we must do it another way.

MF: I think it is required that this proposal must provide this. The source position isn't enough, we could just create functions in a loop. this is not sufficient.

JHD: I'd love to discuss this with you offline.

MF: That is a very important API to me, I hope to see it here.

JHD: I wasn't sure how important it was

BB: I am still a little uncomfortable that we're not specifying what is captured when and we know that elision isn't going to happen in the future. I'm concerned we'll find other things, and we'll progress on this spec and find issue where this is not very practical, too much information, hard to obtain or whatever. A glimpse of what it might look like would be helpful. The structured stack format, can you show it in a JSON-like format?

MM: Yes! It's in the original README

JLZ: I would really like to see this as the maximally minimal. I would object to adding the additional capabilities.

JHD: Would you be content if we could add this later?

MF: I would be fine if you can do it at the user level or provide an API.

MM: I will not expose actual function objects at the user level.

JHD: we'll discuss this after

MF: Presence in a WeakMap, perhaps?

BB: It would be great if the data were JSON-like

Schema https://github.com/google/caja/blob/master/src/com/google/caja/ses/debug.js#L47

(MM: Since it might move, I provide a copy here with the one correction we talked about)

```
stacktrace ::= {frames: [frame*]};
frame ::= {
    name: functionName,
    source: source,
    span: [[startLine, startCol?], [endLine, endCol?]?]
};
functionName ::= STRING;
startLine, startCol, endLine, endCol ::= INTEGER;
source ::= STRING | frame;
```

MM: It's all expressible in JSON

MM: I'd like to imply that we'd continue to leave this to the implementation and pin it down in further specs.

MLS: With this specification of what the object contains, what do you do for anonymous functions, etc?

JHD: Whatever you do now

MM: For anonymous functions, what the shim does is use a question mark. I'm not suggesting we do that, I think we should decide.

MLS: &lt;anonymous>?

MM: That would be fine with me

MLS: What do you do when someone just wrote in the code using document.write?

MM: Once again, open to suggestions. Browsers do very bizarre things that differ from each other here.

JK: This is a bit of a jump. Right now this doesn't affect the stack in JS. Chrome does have an async mode of viewing stacks, to see stacks that happened across Promises, async/await and Web API callbacks. That async operation needs to be represented somehow. Is there room for that?

JLZ: That isn't visible from the code

MM: This format came from Causeway, and Causeway is all about stitching together each of those separate turns and async operations into an overall causality graph. ( https://github.com/cocoonfx/causeway http://www.hpl.hp.com/techreports/2009/HPL-2009-78.html ) So, that's one of the reasons there is an outer object here. The identifying of what turn you're in, and then for an async operation, identifying what turn it is causing, with separately logged information, not in this schema, those are all follow-on things that i'm hoping to propose. When I took a look at overall, all the information that causeway logs that allows us to stitch this back together into a causality trace, this was definitely the place to start. As a place to start this is also the closest to all things browsers agree on. That's exactly why I've reserved some space there. FF by the way, already does deep stacks, though in a different way.

JHD: Any information can be exposed in debugging tools.

JK: It's not observable today but I wanted to know if it was

BB: Chrome has inferred names for method calls; they would not show up in the stack.

JHD: We could add additional properties to these objects. They are frozen but they don't have finite list of properties.

BB: It calls into question... what's the point of having a way to format the textual stacktrace if in fact you have much more information

JHD: Currently that information is not observable

MM: I was not thinking it would be up to the implementation to populate with more data. I was thinking more properties would come from later specs, not from implementation dependencies

JHD: My assumption was that like any other object, implementations can extend them. It seems useful to me to have that information available. If we can't currently get that information, it's fine to not be there.

AWB: Why is it important that these are frozen? They are a snapshot of data you have now, let people hack on it.

MM: if you generate two error objects which have a common stack at some state, basically a common caller, and we have a call tree and we have joins with a common caller. You don't want to obligate them to be made separate. But you don't want the sharing to be a communication channel. It's observable that they are sharing but two entities that otherwise can't communicate, with common access, can't use them to communicate with each other. When we haven't specified that something is frozen, like getOwnPropertyDescriptor, that's a great example. I desperately wish we had specced those as frozen. We now obligate the implementation to generate a fresh one every time.

AK: Why not?

MM: Because, for example, once a property is non-confgurable, non-writable data property. It's descriptor is never going to change. You'd like an implementation to be free to have a little cache and reuse them.

AWB: You'd like it, but this is JS

AK: Why do you assume it would be better to have them always cached? That has its own problems.

JHD: You're not required to cache them

AWB: They are either the same or they aren't.

JHD: Yeah, if you want it to be consistent.

MM: If I had to choose, I would not REQUIRE them to be the same object, not require caching.

AWB: Different from template objects, which are statically generated.

MM: yeah, I suppose, I can't find a killer reason off the top of my head. Maybe I don't have one. This one we can revisit.

MLS: Is your concern that someone would use property names you'd want in future versions?

JHD: If it created a fresh object every time, it would just be shadowed. If the concern is implementations... they can currently add a property like they can anywhere else. We might say you can't add new properties that aren't in the spec but leave it unfrozen.

MM: We will need to leave it as an open question whether the produced object is frozen or not.

MLS: I can imagine implementation extensions causing compatibility issues. Say an implementation adds an arguments property, but later TC39 standardizes it differently. But this is all about implementations, not about whether the object is frozen at runtime.

AWB: Well, if you're asking for enhanced information, why not use an implementation-specific API for everything?

JHD: Maybe they would be implemented in terms of the other, and this could be affected by our decision about freezing.

AWB: I'd assume they'd be implemented primitively.

WH: How does an implementation censor the result of GetStackString? It can call GetStack and possibly remove or alter some frames, but how does it render those back into something that GetStackString would have produced?

MM: Good point. We need a way of rendering for virtualization. This suggests including another part of the SES shim api we omitted from this proposal: stackString, which is an unprivileged operation that takes the object structure returned by getStack and produces the rendered string returned by getStackString. Then, when virtualizing getStack you'd just reimplement getStackString as stackString(getStack(error)).


#### Conclusion/Resolution

- Stage 1 acceptance
- Open Questions:
  - Determine if this belongs in annex b or if other normative-optional text is allowed
  - Add a separate method to convert stack frames to a stack string?
  - should getStack return frozen things?
  - should implementations be prohibited to extend the `frames` array/objects?
  - should we include in this proposal an API that takes a function object and allows for eliding stack frames from within this function?
  - what does the Error constructor text for populating \[\[ErrorData]] look like?

## Discuss non-technical long-term vision for ECMAScript

(Brian Terlson)

JFB: Kill it with fire?

_Straw poll, should we kill it with fire?_

BT: No, the consensus is to not kill it with fire.

BT: Are there people who would be interested in listening and participating in such content? I was thinking we could debate format, 5 minutes to 30 minutes level. No 2 hour disserations or anything. We could do it at the next meeting if that is sufficient time to create decks.

MF: Will we produce a goal statement or some kind of document?

BT: I think it would be awesome for this committee to have a consensus roadmap.

MM: I would prefer not to use the upcoming meeting. The kind of thing you're asking for, I would really want people to think about what they want long term and let that gestate for a while. With all of us having many things in our schedule for the next two months, having a bunch of unanticipated time over the next two months is going to be too tight for contemplating in this way.

BB: Are we saying everyone who has an idea would say this during the same day? We can do it staged

MM: I would be perfectly fine

AWB: I think it would if we could focus and have like, a vision day, and not have a haphazard here is a piece, there is a piece. We should block off a day and we aren't going to worry about, you know, the current proposals and the process and the bugs and just think about the next 5 or 10 years or whatever seems appropriate and start to form a common vision about where it is we are going.

BT: To answer MF's question, in an ideal world we would have a shared vision of where we are heading. I think some kind of vision day... something that would come from upper management. It felt horrible to say that. Someone give me some other name.

MLS: Long term direction day?

BE: Everyone read the harmony email from 08? Long term direction happened, ES6, etc. It's time for a new one. link: https://mail.mozilla.org/pipermail/es-discuss/2008-August/006837.html

BT: I hope that by everyone sharing what their vision is, that we can appreciate the different aspects of experience and interest that people bring to the table and have another rev of that document. We should keep the top 5 long term goals of the committee available. I'm not sure what it looks like, but a reasonable starting point is us sharing what we think?

MLS: Brendan can you share that?

BE: You can search "ecmascript harmony mail" it's the 2nd hit

MPT: i started a conversation about vision last night, where I was coming from, the community et al has very little idea of what goes on in this room. For the most part it doesn't occur to them that they would have any influence on the proceedings here. If they don't have a say, I would say they ought to. I don't think they should be here commenting on every little thing. But it does make sense to release a long term vision and accept their feedback and yes you're going to get flamewar and 500 miles of bikeshedding. Inside that you'll find valuable feedback of what people are looking for. As the JSF rep, I'm happy to try to get that some press. Make a doc that says where you're going.

AWB: I assume whatever we discuss would be public and call people's attention to it.

BT: We don't wan tot just dump a bunch of text on people.

AWB: Ultimately we want to get something unified, but the first step is probably "Decks"

MLS: Part of our diversity issue, we don't actually have a lot of users here. We talked about it making sense for those in the committee to go to user group meetings small or large and represent the workings of TC39 including what's currently going on. We didn't create any actions but we did talk about doing that.

BB: I think what is confusing for a lot of people is that TC39 itself does not have or state anything that we produce the spec. The spec is pretty unreadable and uninteresting.

BT: hey now

BB: To most people. It doesn't tell you what can I expect from TC39, what do they think is important, how do they approach problems? In a way we are just a group of random people arguing about things. We may not have a shared opinion but we could have a shared message.

??: What is the forum for this discussion? We have esdiscuss, we have github, twitter isn't very effective....

BT: I would hope we could put something on the TC39 wiki.

DE: We produce the minutes, a lot of people read them, but they are kind of hard ot read. When I was working at Google, I would produce a summary of what happened at the meetings. Now, I could do that externally instead

BT: I would love for you to do that; I do that at Microsoft

MPT: It's a stated goal of JSF to produce exactly that for the community. We don't do it , but we could! I was slack chatting with Chris today about this.

DE: Great, let's all work on this together then.

WH: We have had, quite often, meetings with community user groups as an adjunct to TC39 meetings. We had one last year in Munich, in Boston, etc. They were for the user community to meet us and for us to meet them, chat, and listen to their stories. We should continue doing that. That's part of the reason I was pushing for geographical diversity in our meetings.

BT: I promise you have a JS meetup in your area.

BT: Back on communicating of vision....

AWB: Before we communicate it we need to create it

BT: Communicating amongst ourselves, we all agree that would be good. Does it seem unreasonable to spend an entire day on this?

DE: Sounds great.

AWB/TK: not enough

MM: if we spent an entire meeting on it

MPT: you'll want to spend a day on it, give to the community, get feedback, and then do it in the next meeting. You'll never get it in one meeting.

CP: I don't think we're talking about getting a draft of anything. The first step is getting a sense of what the highly varied opinions are

DE: We could write a summary of the visioning session on the newly legible minutes that might happen and get feedback on that, even if we don't get a consensus vision among the whole committee.

AWB: we need goals, he meanings fo the goals, the specific actions we'll accomplish

BT: The question is, what .... i guess without doing an actual call for presenters. I imagine we all want QA periods too, we have at least an hour per. WE could just cancel the agenda for the May meeting. We should decide that now. People should get stuff ready for that.

JSL: In may we're just ratifying 2016, right? That's where we have the final vote?

MF: Can we just do proposals ready to advance? Let's do the stuff we have to do

JSL: We travel in NY we end up not using three days

BT: What if we have three presenters, and the schedule doesn't fill up?

CP: Who will present?

BT: Not many hands were raised, but I hope to make the compelling case for more people to present.

TK: Good time to bring in the community

BT: I think the two-day plan is reasonable; I'm sure we'll find other content to fill the day with. This is all for the May meeting in New York.

DE: Will the CFP be directed at just members, or also at the community?

BT: Let's have a meeting the Friday after TC39 to bring in the community and talk about the vision.

WH: Friday would be an issue for those who travel to the meeting. An evening during the meeting would be better.

MPT: Lots of people have travel restrictions, so maybe Wednesday evening is best.

WH: In the past, we've already done these things on Tuesday/Wednesday night

TK: The visioning should be done *before* the community meeting, rather than afterwards, so maybe Tuesday night

MPT: How about splitting it up further, e.g., I go to Seattle JS. Anyway, most user groups would hold a special session for this sort of thing.

JHD: It will be good for us to be on the same page

BE: In the past, various people wanted to control the narrative.

DE: Chapters.io has some resources

BT: I'll put a reflector post for figuring out community outreach

#### Conclusion/Resolution

- BT to make a post on the Reflector saying that we'll spend the May meeting
- BT to write and send out a CFP for internal vision presentations
- Another thread to discuss attempts at community outreach
