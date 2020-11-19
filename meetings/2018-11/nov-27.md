# November 27, 2018 Meeting Notes
-----
Mattijs Hoitink (MHK), Michael Saboff (MLS), Keith Miller (KM), Tadeu Zagallo (TZO), Natalie Silvanovich (NSH), Waldemar Horwat (WH), Daniel Ehrenberg (DE), Jean-Francois Paradis (JFP), Chip Morningstar (CM), Alan Schmitt (AS), Ross Kirsling (RKG), Jordan Harband (JHD), Brian Terlson (BT), Kevin Smith (KS), Eric Faust (EFT), Sathya Gunasekaran (SGN), Till Schneidereit (TST), Lin Clark (LCK), Godfrey Chan (GCN), Kevin Gibbons (KG), Pieter Ouwerkerk (POK), Randy Luecke (RLE), Devin Rousso (DRO), Reefath Rajali (RRI), Adam Klein (AK), Rex Jaeschke (RJE), Mark Miller (MM), Shaheer Shabbir (SSR), Mrelita Tiwari (MTI), Jonathan Dallas (JDS), Brendan Eich (BE), Emily Huynh (EHH), Michael Ficarra (MF), Ilias Tsangaris (IT), Thomas Levy (TLY), Augustus Yuan (AYN), Nathan Hammond (NHD), Sebastian Markbåge (SM), Justin Ridgewell (JRL), Shane Carr (SFC), Dustin Savery (DSY), Frank Yung-Fong Tang (FYT), Mariko Kosaka (MKA), Peter Hoddie (PHE), Patrick Soquet (PST), Felipe Balbontín (FBN), Dave Herman (DH), Shu-yu Guo (SYG), Yehuda Katz (YK), Yulia Startsev (YSV), Sebastian McKenzie (SMK), Aki Rose (AKI), Tab Atkins (TAB), Mathias Bynens (MB), Scott Myers (SMS)

Remote:
Ron Buckton (RBN), Bradley Farias (BFS), Robert Pamely (RPY), Leo Balter (LEO), István Sebestyén (IS), Richard Gibson (RGN), Guy Bedford (GB), Conrad Watts (CWS)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/11.md)

## 1. Welcome

RJE: (housekeeping)

## 3. Agenda Scheduling

SYG: Conrad Watts tuning in from UK tomorrow morning would like to speak about memory model issue (https://github.com/tc39/ecma262/issues/1354) so will move in the agenda earlier (10 AM time? Please confirm)

DE: Would like to have breakout sessions or longer discussions with extra time in meeting agenda. I have a pull request open to the agenda. Think about what topics you'd like to discuss in breakout session.

## 4. Approval of the minutes from last meeting

RJE: anybody have objection for September meeting notes? Not hearing any objection.

#### Conclusion/Resolution

- Notes from September meeting approved


## 5. Next meeting host and logistics

RJE: GoDaddy will be hosting us in Scottsdale.

BFS: We will be hosting in Scottsdale. Where should we post the information?

??: I think the public way we've been doing it is a problem

AKI: I'll be thinking a lot about how to do this.

KG: Most internal things should go on the reflector including Doodle.

BFS: Okay, I'll post it on the reflector.

YK: Do we need to state publicly what the official membership policy is?

DE: The official membership policy and defacto membership policy are well-aligned. Rex posted this information.

BFS: I need dietary concerns/any other needs from attendees. I need in at least 2 weeks in advance so we can coordinate.

SFC: Please state your name when you talk so I can record it.

#### Conclusion/Resolution

- Personal information will be posted in Reflector or private repository including Doodle
- 2 weeks advance notice for next meeting (January in Scottsdale hosted by GoDaddy) for dietary restrictions.


## 7. Project Editors' Reports

JHD: There have been 6 PRs merged, 3 normative an 3 non-normative. For-in for-of body evaluation missed an iterator return step. 2 of Mathias bugs for own property keys on exotic builtins are also merged. Open PR for changing symbol notation from `@@symbol` to `%%symbol`.

BT: The idea is to not put every intrinsic in a giant table. The new idea is to put (only certain information?) in the table, so you don't have to reference the table every time you use an intrinsic.

JHD: The intrinsics table is exploding in size.

BT: Also, ES2019 is the current cycle. It will be ratified in June. We need a 2 month period for royalty free opt-out. Which means April. We also need time to fix bugs. So, this meeting is really the last time to merge big changes that you want in ES2019. After Jan, there's very little time to take big features. Chooo chooo 🚂.

RJE: We no longer approve this at the ISO meetings under "Fast-Track". It just updates as we release new ECMA releases.

#### Conclusion/Resolution

- Reported


### 7.i ECMA-402 Status Updates

- [slides](https://docs.google.com/presentation/d/1zSjK-6aew3cQBNBR_7cdh1_E34hvGsZlu2Gu5TwrX1s/edit#slide=id.g442f4955c0_0_50)

DE: I'm the interim editor for 402. I work for Igalia in partnership with Mozilla. ECMA 402 is an internationalization library for JavaScript. We have a monthly 2-hour meeting. Happy to see more participants. Please contact me for an invitation.

Just like main spec, we work with proposals and PRs. We have two PRs since last meeting:

- Specify enumeration order of resolvedOptions
- Normative: don't harden supportedLocalesOf array

(Both of these have consensus from subcommittee; waiting on implementations.)

Stage 3 proposals:

- Intl.RelativeTimeFormat is shipping in Chrome 71. Waiting on ICU implementations.
- Intl.Locale. New change: obscure edge cases due to RFC 4654? and other specs. We've worked with the Unicode Consortium to use BCP 47 more consistently with the Unicode spec.
- Intl.ListFormat. No major updates.
- Intl.Segmenter. FT has implemented this in Chrome. Considering some changes to API key names. High-level concerns have also been raised.

Stage 2 proposals:

- Intl.NumberFormat. SFC will present for Stage 3 this meeting
- Intl.DateTimeFormat formatRange. FBN will present for Stage 3 in January.

Stage 0/1 proposals:

- dateStyle/timeStyle stage 1 proposed for stage 2 later
- Display names (stage 0) gives you strings that are locale sensitive

DE: Please get involved at the [repo](https://github.com/tc39/ecma402/)

DE: I won't be able to organize these meetings in 2019. If you are interested in helping out, please let me know.

BT: We have IRC channels: #tc39 (public channel). Ping me to give you voice in that channel. #tc39-delegates is our private channel. It is invite-only. I need to send you an invite. You need to register your nick on freenode. You can message BT at `/msg bterlson`

### 7.ii ECMA-404 Status Updates

CM: No news is good news.

### 7.iii ECMA-262 Status Updates

Deferred.

### 7.iv Test262 Status Updates


## 8. Updates from the CoC Committee

DE: Find our code of conduct on GitHub https://github.com/tc39/code-of-conduct. Everyone should read it.

## 6. Report from the Ecma Secretariat

(István Sebestyén)

IS: A few points:

- Download of Ecma standards
- IT web matters (help needed)
- ECMAScript trademark issues
- Implementation of Ecma Fellow award
- Status of 2019 Ecma Management and ExeCom candidates
- ECMAScript award in China; would TC39 be interested in a China (Shanghai area) meeting?

### Download of Ecma Standards (January 1 - October 31, 2018)

- 20K downloads of the ECMA-262 specification
- 8th edition on the decline; 9th edition on the rise
- Total of ECMA-262 downloads: 541,323
- Edition 6 being the highest (270k)
- Total of ECMA-402 downloads: 20,303
- Edition 1 being the highest (14k)

TST: I looked at the telemetry for the web site. MDN is the source of a lot of the links to the old versions of the spec because it presents links to the spec in order, starting with the version of the spec that first introduced the feature. I'm working with the MDN team on changing this to link to the latest version of the spec, but it's not easy to change.

IS: Glad someone is working on it.

Onto page 6 (Technical paper downloads), now onto 7. Neither are terribly interesting. Page 7 is about general information on ECMA.

Onto page 8, TC39 Web Matters. So far no change yet. Working on better integration between GitHub and TC39 webpages. Contact on TC39 side: Yulia Starslev

Page 9, Ecma Fellow Recognition Award and Emeritus Membership. TC39 nominated Brendan Eich and Allen Wirfs-Brock as Ecma Fellows 2018. Congratulations and thanks!

Page 10, ECMAScript Trademark issues. Deadline for filing declaration in US is Jan 22, 2019. First registered 10 years ago in US and we need to renew it. The Ecma IPR Lawyer drew our attention to use the ECMAScript trademark. (You need to put an "R" in brackets after "ECMAScript") because we might lose it. So far Ecma does it on all in the ECMAScript Standards, but it would be good if it could also be used by others, e.g. on company's product descriptions, manuals, if hardware then on the box etc. So whenever one uses "JavaScript" in a text one may think to put also "ECMAScript" behind it in a brackets to keep the Trademark office happy and not to endanger that they withdraw the trademark because of lack of "commercial use".

Page 11: TC39 representation in GA, Ecma Management in ExeCom. Important that the true voice of TC39 is present and represented in the GA, Management and in the ExeCom. Fortunately for 2019 we have good TC39 ExeCom candidates.

Ecma President: Jochen Friedrich (IBM)
Ecma VP: (open)
Ecma Treasurer (open)
ExeCom members 3 from TC39, Isabelle Valet Harper (MS)
Execom Chairman: Elected out of the ExeCom members

Patrick Luthi from Ecma Secretariat has been elected as the next SG. Overlapping period between old SG and SG elected. Overlapping starts for how long it will last be decided at the GA on Dec 12, 2018. Probably on Jan 1, 2019. Keep tuned.

Page 14: meeting dates for GA meeting.

Page 15: meeting dates for ExeCom meetings.

Page 16: World Internet Conference (WIC).

Page 17: WIC is a big important event. Istvan was approached by local authorities for promoting the area. So if we wanted TC39 meeting in China, Wuzhen might be an interesting place, because their hotel and internet infrastructure is world class, and it is a very nice touristic place (typical Chinese watertown). Connections to Shanghai incl. Airports are good. I can follow up with local government representatives. It is ~150 km from Shanghai Pudong airport. There is even a high speed bullet train available from Shanghai.

WH: IS said he was looking for uses of ECMAScript. I can find plenty by doing a Google search. Is there something specific you're looking for?

IS: Yes. So I'm not really an expert, but I have some feeling what these guys are looking for. They want something tangible. For example, we could tell them that we can print out the books. That is tangible. If there is a software book, that is also a good thing. If we had, for instance, a "wearable" device that implements JavaScript, and include that the browser implements JS. I think that's what they're looking for. Something which is tangible.


## 9. Ad-hoc TC39 History Group - Archival data and you!

(Jory Burson)


## 13. Management group refresh slides

(Yulia Startsev)

- [slides](https://docs.google.com/presentation/d/1P5DdJBQrr5hj_x-SqQxk8HOTaipJUaxbH0icp1g9iMk/edit#slide=id.g420fef0220_0_25)

YSV: Broke down the management tasks in the last meeting, and how long is needed for each one. Proposed structure is 3 chairs, YSV, AKI, and BT, at about 32 hours per month. TS, MB, LB volunteered to do a smaller amount of work. We can refer to someone being the Chair/Vice chair, but really it's a group effort.

DE: IS, can you clarify if we can have 3 co-chairs instead of the Chair/vice-chair structure.

IS: Yes. You still select a spokesman, and they can coordinate, but the group is fine

YSV: We can take that as an action item to figure out who'll be the figurehead.

RJE: Twice a year the committee (the chair) submits a reports to ExeCom.

RJE: The plan was to rotate through for the meeting chair. Can you elaborate?

YSV: Because meetings run quite long, in order to avoid conflicts, we'll rotate the facilitator throughout a meeting.

#### Conclusion/Resolution

- Chair group adopted with unanimous consent


## Modules layering/naming for WebAssembly

(Daniel Ehrenberg)

## New intermediate class "circular module records"

- [Proposal](https://github.com/tc39/ecma262/pull/1311)

DE: This is a continuation of the work from Lin Clark about making non-JS modules able to participate in the module dependency graph. Currently there is an abstract class for modules. The only subclass that exists right now is source-text module records, which have certain semantics, and recursing to dependencies is something that source-text module records own. In this PR there is an intermediate class, circular module records, that takes over the searching dependency records part. source-text module records can be a subclass of this new class, and other classes can also be a child of it. HTML modules, CSS modules, etc., might also take advantage of this. WebAssembly modules are the first user.

Moving function hoisting sooner is another idea Lin had. The current thinking within WebAssembly is that those changes won't be necessary. We thinking of a more restrictive form of WebAssembly semantics. I'm happy to go into more details if you're interested. Today I'm just looking for consensus

AK: Does this have any normative effect?  Why does this need committee consensus?

DE: I posted on the PR, and no one said anything, so I'm bringing it here.

BT: It's sort-of normative-ish. It's hard to pull the pieces apart. So it was best to just bring up to committee.

JHD: This is a layering change that makes it easier for implementers.

BT: Not on the language, but it could have impact on embedders.

DE: Where were concerns raised?

BT: Will write something down but we haven't established practice of merging in layering PRs. Would impact runtime enough that worth discussing before merging.

Rex: Any objections?  Looks like we're okay.

#### Conclusion/Resolution

- PR Approved


## A name change from "Module.Instantiate" to "Module.Link".

https://github.com/tc39/ecma262/pull/1312

DE: The motivation is that, from WebAssembly perspective, we have a separate phase called instantiate, which happens in the instantiation phase of the JS module pipeline. Link is a better, more clear name. Some identifiers within programs might want to be renamed.

DH: I think the linking terminology is good. My question is, is this the phase where the function that actually gets instantiated?  Because where functions get turned into dynamic values is early in the process—is that where this is?  Because that's why it was called instantiation, but if conceptually this is the phase where dependencies get wired up, then link is a good name.

#### Conclusion/Resolution

- OK to merge the PR.

## Dynamic modules layering change

(Guy Bedford)

- [proposal](https://github.com/nodejs/dynamic-modules)
- [pull request](https://github.com/tc39/ecma262/pull/1306)

GB: This is something we need in Node.js. It's been discussed quite a bit. I'll do a quick recap. In node, the idea is to support commonjs modules is to import directly. Eg, `import { name } from "cjs"`. The problem is that named exports of a commonjs module, you have to execute it. It's not static. We can execute the cjs modules during the instantiate phase, but this causes problems. If you have execution errors in commonjs, you can't guarantee statements execute in order. This is not intuitive behavior.

Our solution is the Dynamic Modules proposal. If you've got an es modules importing a name from a cjs module, we're going to create a placeholder binding. When the cjs executes, we'll populate the placeholder binding. There's one major problem. If you have a circular reference between two EcmaScript modules, it's possible to access the namespace before the module is finished loading.

The first approach to fix the above problem was to ban cycles with namespaces referencing dynamic modules. The new approach is to mark it as a "pending dynamic namespace".

Dynamic namespaces current approach
Mark it as pending dynamic name space
...

To summarize, in #1306, we need to (1) track namespaces within the specific module record implementation, and (2) allow GetExportedNames to return null, and (3) ?.

So that's pretty much it. We need to know from V8 that it is possible to merge this and still be 262-compatible. So we need feedback from TC39 that this is OK, a stamp of consensus.

AK: It was mostly clarified, but there's a patch out to implement this in V8, but it hasn't gotten a review yet. We were unclear what the status of this spec was. So it sounds like there's double-blocking here. We usually get to the state where the PR was accepted before we change V8. But it sounds like the PR is waiting for feedback from V8.

GB: I've spoken with George? And Yang from V8. There's a number of blocking stages. But the lowest-level block is the Ecma 262 spec. So what I'm looking for here is a green light that this is a spec-compatible approach. So if I get a greenlight, then V8 can feel comfortable to merge it, and it's a roundabout way to get it fixed for Node.js.

WH: I can see the implementation perspective, but I'm curious of the usability perspective. There will be this object which suddenly acquires properties. What are the common gotchas that users will run into?

GB: If you have a circular reference in CJS today, it behaves just like this. In CJS, you'll get partial exports, but not all of them. It matches what users are used to.

WH: So you don't anticipate this breaking any usage patterns?  Resulting in other places of confusion?

GB: I think in most cases when you import a namespace, the code that will get that is inside the importing module. You don't usually export a namespace of an imported module externally, so you wouldn't run into any issues.

WH: Okay.

YK: Other than the possible usability issue, I think it's a good idea ... I don't have an objection to V8. But I want to hear from V8 that this is a good idea before giving it an endorsement. I don't get an idea of what's happening here. I don't want V8 to get the idea that TC39 agreed to this change.

GB: Yeah it's a provisional agreement.

DE: I think YK's comment is based on a misunderstanding. I'm happy about the proposal, because node wants to pursue this compatibility between cjs and esm. I don't think we need to have v8 make a ruling. I think we should be discussing whether we have issues with this proposal. If both node and implementations like it, than are we the committee also ok with it?

DH: So, I was wondering if you could help characterize some of what error checking happens when. It sounds like the approach you wrote in this PR... let me state my understanding. I think you want it to be the case you can import * as foo and not have foo itself blow up, so you can pass it around as a first-class object. But because it hasn't executed yet you don't know what properties are on it. Is that correct?

GB: Yes

DH: You also, if I understand the slides, the declarative importing form a dynamic module registers an expectation that there will eventually be an exported name, but it isn't something you can verify in the early linking phase. Is there a phase when that is actually validated?  Once you have executed the dynamic module, is there a phase when you can detect the name and check that it exists?

GB: Yes when you import a placeholder binding is created during the "instantiate" phase.

DH: And it's the "at that point" that I'm clarifying. What is the actual point?

GB: At the end of the dynamic modules loading, there is a step when the dynamic modules will throw if they aren't initialized correctly.

DH: I want to acknowledge that this is an area with a hard tradeoff. But I think it's important to have honest accounting for what those are. I just want to point out that there's a non-equivalence between declarative import syntax and star import syntax. You might expect that import name to import * are semantically the same. But in fact, from ns as name is not being validated early on in the sequence of instantiation of modules. It's arbitrarily delayed. So if you had something under a function and that function never executed, you'd never get the error. So there's a delaying of checking when you switch between the two syntaxes.

GB: Is it not the same for ES modules? Something... undefined...

DH: That's a good point.

GB: I understand this is a hairy topic. I'm just looking to make sure that this could be a viable path for the Node.js working group. Is TC39 saying that this is or is not a viable path?  We need to make progress for this in Node.js knowing that this is something we can do.

RJE: Is there some direction we can give them?

DH: We haven't stated exactly what we're looking for consensus on. Can we clarify that?

DE: Given the history of TC39 saying no to many things that Node.js wanted for modules, I think it's useful for us to say "maybe" to these designs earlier in the implementation.

DH: We might use some breakout time to look over it? I'd love for someone to walk me through it.

DE: That sounds good. Breakout time.

YK: We're devolving into process conversation. I'm worried about whether we're changing something that is how people interpret namespaces today. Is this going to break intuitive expectations? If people feel forced to use `import * as ns`, that would be bad.

DE: Is there a reason you would think that would happen?

YK: I think the reason it could happen is if the named import version has eager behavior, but the star import version has lazy behavior.

JHD: That is the case in ES6 already.

YK: Basically what I'm worried about is, if you import something... I'd rather talk about this in a breakout session.

DH: I get more errors unless I use star form, but that's a bad outcome. We shouldn't be encouraging the star form over the binding form.

GB: This won't be happening in browsers. It's purely node.

DH: That doesn't matter because what browsers do for transpilers, people will follow suit.

GB: The behavior, in terms of error behavior, remains exactly the same. If you import a name tht doesn't exist, that error will be caught during the initialization phase, but in a function (?) it gets caught during execution phase. I will stress that Node.js needs to be able to move forward with ES6 modules soon. It is important that we are able to move forward not being blocked by TC39. We don't want to implement this if TC39 doesn't see this as being 262-compatible.

WH: Just so that we're on the same page, I'm interested in DH's example, and implications of it. If I understand correctly, if you import a name directly and the name doesn't exist, you get an error right away. If you import star, you don't get an error until you reference it later. Then you can write code that is compatible with different versions of the library. Would the ecosystem evolve with these different types of behavior?

YK: I think it's the same question: Does this mean that you can observe the namespace having nothing to having something. Is that new?

GB: Yes. That's an observable change.

YK: It's an invariant change?  In the sense that before, each and every namespace object had a static set of keys, and now the set of keys can change during execution?

GB: Yes.

#### Conclusion/Resolution

- Will follow up with a working group during breakout sessions.


## Test262 Status update

(Leo Balter)

LEO: Want to share some current goals:

- Finish class fields and methods. Not finished yet but probably good for class fields (pub and priv). Progress leading to completion for methods. Want to experiment with early implementations
- Dynamic import is fully covered V8 100%, JSC almost 100%, bugs identified and filed. ChakraCore has impl under debug build and identified bugs and filed. SpiderMonkey started implementation
- Looking for Stage 3 features
- Dedicated test curation time
- Invest more time Intl test reviews, having nice wave of contributions

LEO: We now have CI to run tests in PRs (https://travis-ci.org/tc39/test262/builds/460049237). There is a lot of room for improvement. Runs new modified tests against major engines.

LEO: Officially released https://Test262.report and the "Features" view shipping before holiday season. Issue tracker at [repo](https://github.com/bocoup/Test262-reporter-issue-tracker) (Cannot access?)

DE: Thanks to LB and ... from Bloomberg for writing tests on private methods and bugs were found from the test runs.

LEO: One last thing to report is we got some of the specs we wanted -- bugzilla and bugs have been reported with the Test262.report link which shows accurately the test. Really happy with this.

RKG: It's exciting for me too to fix something and see it show up in the interface.

LEO: Would love to see more like this so thank you!

#### Conclusion/Resolution

- Anyone new to the committee, this is a good way to get involved with.


## ECMA TC53

(Peter Hoddie)

### Smart Wearable Systems and sensor based devices

- [spec](https://www.ecma-international.org/memento/tc53.htm)


PHE: We have a broad charter mission statement: enable broad ecosystem of applications for wearable and IoT devices. The approach we are going with is creating a suite of standard JS APIs for use on Wearable and IoT.
We had our very first meeting last month. About 20 people from big and small organizations.

PHE: The hardware we are targeting is much less powerful than the web platform. Consensus of the committee was we should not have a lower bound to the target. JavaScript has continued to surprise us in performance and how it can be slimmed down so we don't want to assume what that can be. Performance, memory, and code size are very important to TC53.

PHE: The other side of this, important to talk about, is that hardware can get faster. Why not wait?  The consensus was that a lot of those hardware performance gains will go to smaller devices in a more energy-efficient devices. So we think these low-power and resource-constrained systems are here to stay.

PHE: Two developer audiences: Applications (creating apps in JS and using standard APIs) and Systems (implementing "host" functionality in JavaScript rather than native).

PHE: In the title of TC53 is sensors. We get into displays and many other things. I'll talk about sensors; straightforward compared to the others.

PHE: Sensor Example traditional browser style i.e. Chrome host object is provided to the sensor. So Application Script might be JS and that would talk to the W3C sensor API. We envision in sensors there will be a TC53 sensor driver and the application script can talk to the TC53 sensor driver and the W3C sensor API. It wouldn't talk to the TC53 I2C communication though.

PHE: Other points of consensus that I think are relevant (no dispute): (1) There's no intention in TC53 to do language work. We may come back with proposals, but we will go through the normal process. (2) People are used to programming on the web, and we want to hold onto that, but since this is a distinct platform, it has different priorities, so we can't always promise interoperability with web. (3) There was broad consensus that we shouldn't add any new communication protocols. (4) We are a royalty-free technical committee.

PHE: We are a fun committee. Please join us, we have 3 meetings per year. Tentative
Feb 25, 26 in Austin
June 17, 18 in Silicon Valley
We have an email reflector and happy to add people

RJE: It's good to have people from other committees present to us.

## ECMA-262

(Brian Terlson)

BT: We decided that the editor group is a permanent structure. We have a number of orthogonal but slightly related decision points here. The first question is, are we okay with an editor group?  Or do we want an editor-in-chief?  There were various opinions last time we discussed this. The weight seemed on the side of a single person who can break ties and things. Maybe we've changed our minds though. So that's the first question. The second question is, we have two candidates for editor in chief. I don't know how we go about voting. Maybe we can do normal voting. And then, we have the question of who is in the editor group, assuming it continues to exist. So that's my understanding of the situation.

RJE: In terms of the timing, you'd step down in May, Brian?

BT: So yeah I committed to finish ES2019. So by June it should be done but I don't plan doing massive amounts of work past January. Hoping to be done with editor work by March. ES2020 will be on the new group.

MF: Can you speak to how effective you think the editor group has been?

BT: I think there are goods and bads. One of the major benefits are, it has been phenomenal to have a group there to bounce ideas off of. That's been super valuable. So on the balance, I like it. I originally went into the editor group thinking it would help my bandwidth problems, but that didn't happen.

RJE: Would this new editor in chief (?) have a transition period where they learn from you?

BT: I imagine that's how it would work -- we'd become a 4 person group. Nothing would really change.

BT: Another point is that, if we went ahead with the editor group, there's only 2 people identified, Jordan and Kevin, who would be interested in joining.

RJE: Anybody else in the room?

DE: It depends on the structure. Were we going to... ?

YK: So I like the editor group existing as a thing. I like it continuing. It strikes me that, if someone has the time to volunteer, there's plenty of work for them to do. An election for 1 person for editor-in-chief to me seems like a zero-sum game, and why do we need to make that decision?  In light that that conversation will be zero-sum.

BT: To be clear, that's why my first question was do we want an editor in chief.

YK: My preference is we discuss it and I like the editor group idea.

JHD: I think we like the editor group. Our expertises complement each other. I think we would like to have multiple people participating moving forward regardless of whether we have an EiC. The second thing is, I talked with Kevin and I don't think an EiC might be needed. Editors can't do anything the room doesn't like; we don't actually have much power. Anything that we do, if even one person doesn't like it, our work gets rejected.

YK: To be clear I don't mind the powers but I am concerned if we have a debate we pick someone to choose.

JHD: Yeah editors aren't decision makers. Regardless who was in editor in chief, if we are both in the group, nothing is different. Unless strong reasons for an editor in chief, seems unnecessary.

BT: I'll make a case, there are a bunch of things in the spec that changing them might be contentious. I.e. referencing intrinsics. Reasonable to say, it's good to have some provide deadlocks. We have been doing this for years as JHD mentioned and we haven't had a case where we needed someone to enforce that.

YK: If there is some topic where editors are not in agreement, it seems like the EiC wouldn't make the decision; the editors would want to bring it to TC39 to decide.

BT: Don't think that's necessarily true for editorial things. This group isn't really interested in presentational issues in the spec.

YK: But empirically, we haven't needed to get a single person to make the decision. We haven't had that situation.

BT: Yeah that isn't to say we won't have an issue where have a disagreement among the group.

EFT: At the risk of doing number theory, should we choose an odd number of people?

YK: Anything that implies that this group needs anything for voting is against the spirit of what this group is supposed to be doing.

CM: Just wanted to point out, not arguing in favor for editor in chief, editors have a lot of say in the workflow. An example was the transition from having a giant word document to text in a github repo which opened up the editorial process and decentralized it. That was a change that was greeted with wild enthusiasm from the committee but really driven by Brian. I think you should take into account there are going to be process decisions that have to be made.

AK: I echo some of BT's sentiment. But I think there are some situations where editors do make decisions. We had a discussion in New York about when editors bring a decision to the committee TC39, and ones where it isn't interesting to the committee as a whole. There are some decisions only relevant to the editors. If you see several people talking about something on a thread, it's hard to tell what happened.

KS: There is a middleground in having co-editors and a single authority. Having two editors who have responsibility to maintain all the process issues, when and how things are met in consensus, how changes to the document are maintained, etc. I agree it feels wrong to have an amorphous group that might not carry us in the right direction. I think co-editors could work out. And I think Jordan's skills could complement mine. I tend to be big-picture.

RJE: any other thoughts? One possibility is to have the key players lead the room, and having an open discussion. The co-editor seems acceptable for both candidates. We can have them leave the room and discuss it or the alternative work out who the group is and let them figure it out.

YK: I don't personally have anything to say without them in the room, but if I did I might be uncomfortable saying that. Let's have the editors leave the room just in case.

RJE: The historical model is that you have an editor in charge. We don't really have that model. Administratively, I don't see a need to mark someone as having that role.

MLS: An editor in chief I would see it as a chief among equals with equal responsibility but they are the point person for emails, etc.

BT: Practically, that's how it works.

BT: TODO: Editor hats for the editors.

#### Conclusion/Resolution

- We will reconvene tomorrow after break (2:15 PM)


## Stable sort for Array.prototype.sort

(Mathias Bynens)

- [slides](https://docs.google.com/presentation/d/1Io53b2Bi3_N0_wguWoA9OKuPRpHch34EVbS1H8zISes/edit)
- [proposal](https://github.com/tc39/ecma262/pull/1340)


MB: ChakraCore merged a stable merge sort. Moddable added a stable sort as well. Chrome 69 stable sorting is all green on the sort stability page.

MB: Array.prototype.sort is stable in all major browsers and in Moddable/XS!

MB: What does this mean for ECMAScript?  Stability.

MB: Hoping to get consensus to make sort stable in Array.prototype.sort. See PR#1340

#### Conclusion/Resolution

- Approved for merge


## Override mistake fix status update

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/ecma262/pull/1320)

DE: (describes the PR above)

NSH: In the past, that has happened for me because a library included that feature.

MM: A little bit of history. An example each way. In ES5, with a global JSON object, it broke Facebook. Because the stuff that was broken was served by Facebook, they could simply fix it and the problem went away. ES5 also broke an old version of jQuery, not the current version. But that was a problem because jquery code is distributed by being copied, not served. So we (tc39) had to fix it, but only in the least painful way that enabled that old version of jquery to not break. So the particulars of what is causing the breakage matters.

#### Conclusion/Resolution

- Need to look into what is causing problems with the original web sites.


## 2019 Meeting planning follow-up

(Daniel Ehrenberg)

DE: An update from a previous discussion: The October meeting is pushed back a week. The UN General Assembly has the whole city booked up during the normal week.

(discussion about location of meetings and syncing with JSConf)



## Policy Update Reflector Issue#187

(Daniel Ehrenberg)

DE: Last meeting, we discussed updates to address ambiguity about who can attend TC39. As RJE said, there's no issue in the committee. We are just formalizing this. IS wrote a document. This document is consistent with what we discussed 2 months ago. Would people like more time to review it?  I'll walk through it real quick.

(walks through the document)

#### Conclusion/Resolution

- Document is accepted.


## Outreach group update

(Yulia Startsev and Daniel Ehrenberg)

DE: Yulia and I have been working together on this.

YSV: Trying an experiment to have groups and role is to get more input and direction from specific parties of the community that we might not have.
Feedback on stage 2 or earlier proposals
Available as a resource to proposal champions
Educational role and trying to expose more ways to get involved (github, docs)
Not consensus seeking group, just for data

DE: The first couple meetings, sort-of left it open to the attendees to set things on the agenda. We ended up with a lot of things that were already under discussion. So we wanted to make this have very explicit scoping, and especially focus on early-stage proposals. To be clear, this is not a consensus-seeking group, but trying to gain perspectives from more people.

YSV: Meeting monthly 2nd Thursday (contact Dan). Two of the things we are talking about 1) Experimental role (writer for a proposal). External to the committee and talking to the champions -> translate that into easily understand documentation. If README is too specific, we can have someone clarify that. We are asking people to also help champions and make proposals clearer to the public. MDN documentation is being worked on.

YSV: The other topic I'm excited about are better error messages. The goal is to provide a list of recommendations that are unclear to users, and making it possible to make more clear error messages. This is a repo on GitHub where we're collecting bad error messages from various browsers. There are backwards compatibility issues of course, but we hope to address that.

DE: Discussing also with educators is going through proposals and seeing how learnable and teachable they are. We take notes, and champions can take the feedback into account.

DE: Frameworks Group. Meeting monthly 3rd Thursday. Frontend web frameworks are an important group of stakeholders. I don't want to say they're more important than others, but they are still very important. So I wanted to get in contact with Tom Dale (?) to find contacts for these framework groups. There's been a lot of interest about pipeline, decorators, etc.

DE & YSV: Tools and transpilers call. Our goal is to get more feedback with JS tools but hasn't happened yet. Thinking of organizing it in January so please let YS or DE know if you want to get involved.

DE: In discussing with IS and ExecCom, there was interest to make the outreach groups officially part of Ecma. Some standards bodies have "industry fora"; we could think about something like that. There could be issues with requiring people to sign IPR forms. I want to propose that we require IPR forms for these outreach groups and formalize them. Non member attendees have to sign the contributor form.

DE: There's also an outreach effort with Node.js see [repo](https://github.com/nodejs/open-standards). It's still an early effort. But the idea is that we want to engage them with TC39 to get a broader view of Node issues.

DE: The W3C TAG is a body with 9 (or 90?) people that meets several times a year from WHATWG, etc., to make sure everything is consistent with each other. They often have a lot of insight because they're aware of a lot of different parts of the web. I think we should get them to review TC39 proposals more. We did this for decorators and the Temporal proposal. The idea is not to create a blocking step but to get more perspectives. For champions who are interested, Stage 2 is a great time to reach out. The TAG has agreed to be available for these reviews.

DE: Comments?

YSV: Planning on having another group which is a community group -- planned for January which is open to people who want to ask questions and understand how the process works.

WH: es-discuss is one of the places where people come in making first contact with our group. Is the outreach group doing anything about the reception people get there?

YSV: I think we need to address how we treat people on es-discuss. The outreach group is an experiment to find another way to allow people to ask questions where feedback is immediate rather than in the mailing list format. There are reasons why I think this might work. We can discuss it in detail. I would like to see us approach the discussion because es-discuss is not moderated.

WH: I'm not sure immediacy is the issue. I think the problem is our lack of response, and that would apply to any such forum. People from TC39 just aren't interested in engaging with the mailing list group.

DE: Prior to proposing the outreach groups, we discussed text-based communication mechanisms and lots of hesitation. I really think there are different groups of people who are receptive in different forms of communications. Changing the environment in github, having an open call... I agree we need to improve this situation in es-discuss but I don't think this will improve the feedback we're getting from frameworks. We wouldn't be engaging the same people.

AKI: I just wanted to mention, later in this meeting or in January, there will be a breakout session about how you can express your ideas better, and one of the topics will be es-discuss.

BT: Have we run the legal requirements by anyone? Have any lawyers? I can find one. I am concerned for asking with consensus with a group that doesn't know what to say.

DE: I have it on my todo list, with the IPR, is queued to look at it, but I have to write an introduction to the letter.

BT: I would not block on that.

DE: Yeah.

DE: Shout out to Justin for taking notes at outreach meetings :)

## Symbol.description for Stage 4

(Michael Ficarra)

- [proposal](https://github.com/tc39/proposal-Symbol-description)

MF: Symbol description stage 3 right now. Internal description slot is filled in via the constructor of Symbol. That's it. We have implementation support on 3 major browsers: V8, Spider monkey, ChakraCore. Any objections?

#### Conclusion/Resolution

- Stage 4 acceptance


## Function.prototype.toString revision for Stage 4

(Michael Ficarra)

- [proposal](https://github.com/tc39/Function-prototype-toString-revision)

MF: We are moving toString to this stricter definition which is the source text match. The first token to the last token will have to be matched (?). We have to store that for all the different functions and how those can be defined. Some valid concerns have been raised moving to stage 4 -- we almost reached consensus due to issues but are now resolved. There was a bug with source text not converting to functions ? I want to convince you that the open issues are not blocking. I don't think merging this proposal which will move us forward and closer to what we want today will inhibit addressing these issues.

You can see that, we have Spidermonkey and V8. Spidermonkey passes 100% of Test 262 a year ago. We have since made small changes to the tests, the intrinsics one.

MM: Can you enumerate the open issues again?

MF: The placement of the decorator is dependent on surrounding functions. And there is an open issue raised in V8 about, when you construct a function using the function constructor, the way the synthesized source text is slightly different than what they used to produce in terms of whitespace (line terminators). They were very strict in how they parsed that, and it wasn't accepted. V8 is unsure how they will proceed. But I don't think merging this PR will prevent us from making amendments that will allow that to happen.

YSG: Have other engines implemented the whitespace issue? It was for HTML comments right?

MF: I think so...

RKG: I also see an approved but unlanded JSC patch from last month.

NHD: For Stage 4, we need to have two fully conforming implementations. But it seems we might not.

MF: This is that the name of the intrinsic is in the name of the function produced.

NHD: Whether or not this meets the official rules we have, we have an example that says it does not.

JHD: Official rules for stage 4 which is the most vague part of the process document: doesn't necessarily specify fully compliant and it's up to the general opinion of the committee.

MF: Whether we think there could be a backwards compatibility, I think it's possible but unlikely.

DE: I think the vagueness of that part of the requirements shouldn't be that we have a lower bar. It is case-by-case. If there are compatibility concerns, that should be taken into account.

JHD: I agree we have neither decided or not decided if it has met the bar.

RBN: I don't have any objections with the proposal. Concerns I have decorators would fit into making changes with grammar which probably isn't happening.

DE: I think it makes sense to whatever change to add static and we have implementations and we don't have concerns fixing it later.

MF: More practically, it is being used as the assumed spec text for other proposals working in this area, and we should acknowledge that.

AK: On the idea that we should merge this into the spec, there are plenty of areas where the implementation and spec are not exactly the same.

SM: What does moddable do?

MF: We work together with modules on other versions of this proposal. There is a HostHasSourceTextAvailable function, for example.

SM: And is that how it works right now?

??, row 5, seat 2: It works as it did before.

SM: We haven't explored if that part of the code has seen any problems? It sounds like that could be a breaking change.

MF: Tests like that aren't reliable for native functions anyway. What was the concern?

SM: People can do unreliable tests and just because it works, it sounds like you would need a different string?

MF: So, any implementation that does not retain the source text would be problematic for that function?

SM: It sounds problematic it wouldn't fallback.

MF: What would an implementation that doesn't retain the source text produce?

SM: it could produce a different string than in native code.

MF: That's true. I don't think that's something we've considered when adding this hook into Moddable and to someone else's proposal.

SM: I don't think it's anything blocking as there is little risk and we can always change it because it doesn't ship in browsers.

MB: If we introduce another string for this special case, that could break either way.

SM: Yeah but typically but those already break because they are already a different string in these environments.

MF: So anyone can write a function that does toString directly on that function and checks the source text on that function. And then they can tell if they are in an environment that doesn't produce the source text for the function. So it will always be a problem not to produce the source text of the function if people are relying on the implementation being able to do that. In this case, we are telling the developer that you're not producing the source text even though you wrote it.

DE: I'm wondering since you have this call to have source text available, wouldn't the practical mitigation to what SB is saying in HTML to return true from that? In web, you won't have this breakage. In host environments... maybe I'm misunderstanding the issue.

MF: I think DD might have something to say about that. I think he's saying that this should be defined by certain HTML attributes.

DE: So the compatibility issue.. I find it hard to see how that issue would arise in practice.

SM: I'm not concerned about web compatibility issues. I'm concerned about future things like moddables being compatible with existing code.

DE: I think there are a lot of decisions that could make it more or less compatible from web code. If someone is expecting the source code, they can make a mode to get it.

SM: Well, I think there are 3 modes. There's source code exists, or it's a native function, or it's a user-specified function where source code doesn't exist. And usually environments like moddable assume you can't rely on source code existing, which is fine. But there might be code that relies on native or bound functions, which might be treated differently from user-defined code.

MF: This is also fundamentally not an issue because today the tech spec says it should just be a function declaration. Assuming that is valid syntax or something. What we did by adding this hook, we give back moddable that freedom. We restricted it as much as we can, but we are unrestricting that for them.

SM: Specifically it's restricting that it has to be native code as part of the string?

MF: It's restricting in that they have to provide the source text they can't have anything they want.

??, row 5, seat 1: There are cases where a function that went through function.bind doesn't return its source code anyway. So the use of "native code" has never been helpful.

MF: Yes, yes

JHD: I think in the current spec in the crossed out lines... if the implementation can't produce a sourcehost string, it must return...? (See Function.prototype.toString()). When they do it, it has to be native code.

SM: I think there's a pretty strong argument that bound functions have been an exact string for a long time that this issue would have happened in the ecosystem anyway that it's not going to be a concern.

WH: I am a bit concerned what happens when the user starts using the functionality of this thing to determine native or not. The whole point of this proposal to reduce the divergence in implementations. Let me give an example: currently a built in function must not show the source code. How would you polyfill that?

MF: Replace Function.prototype.toString

JHD: Why is showing source code of built-ins not possible? I don't see in the diff at all.

WH: It's in step 1 of the proposed Function.prototype.toString algorithm: "... must have the syntax of a NativeFunction."

JHL (??): Oh I see it now... source code to native function.

WH: Do we want to forbid implementations from showing the source code of any built-in functions?

BT: We have some self-hosted code, but I can't imagine we ...

JHL: Similar to how one could provide more helpful error messages, you could have a native function return a reasonable polyfill implementation when `toString`'d.

MB: Noooo! Nothing good can come from exposing either implementation details or polyfills that may or may not match the exact implementation like that.

??: It's covered in custom engine... goo..

TLY: I am getting the impression this is intentional ingenuous to mark things as native code when they are native code.

MF: We've done that with bound functions

DE: If the web is shipping with something for a while, it can be difficult to change.

MM: So, I just want to go through an actual incident where these distinctions mattered in practice. The conclusion that I arrive at is no different. I still think the proposal that we're looking at should move forward. Salesforce and Agoric made a shim for the Realm proposal, and we are using it as a kernel for security stuff. We tried porting it onto XS, and what we were doing in the Realm shim is we were using the fidelity of Function.prototype.toString being extracted from very particular functions that we wrote specifically for this purpose, and only those functions, so we could write them as functions rather than text but get them as strings, move them from one realm to another, and execute them as a function in another realm. When we implemented the realm shim into XS, we were unable to port the realm shim, but we knew we failed immediately because "function() { [ native code ] }" text does not parse by design. However, the failure to port it is itself painful, so we realized, how do we repair this?  Could we have a source code feature that could preserve the source of these functions? What we really need to be able to say these are the particular functions I am depending on the fidelity for which I believe is compatible with the host hook as specified here.
Is that correct?

MF: I think I will need more time to answer that.

MM: The host hook takes the function as an argument. I think that's all that is needed for this spec to be compatible with the specificity we need, and what this spec did with that experience is it gave us an error as early as possible.

YK: People already said this, but the thing with native code is not just that while it exists on the web for a long time, ... we could have used brackets to make a bunch of things, a bunch of things could be native code, we are okay using "native code" to mean "hidden code".

MF: So... any objections to stage 4?

#### Conclusion/Resolution

- Stage 4 acceptance


## Intl.NumberFormat Feature Proposal for Stage 3

Shane Carr (SFC)

- [proposal](https://github.com/sffc/proposal-unified-intl-numberformat)

SFC: This is an update proposal I showed in July to stage 2 and now we want to go to stage 3. Most of the slides are the same but wanted to give it again for newcomers.

SFC: Motivation for this format is to add more number formatting features to ECMA-402. Feature and important to Google because locale data footprint and barrier to entry. Adding features as opposed to

SFC: 4 sections: Spec clean up

Spec updated limited behavior changes
A few sections of the spec have been refactored for currency plural forms
Move pattern resolution out of the constructor
Units
Add new style entry: unit
Add new key unit which accepts a core unit identified defined in unicode technical standard 35 i.e. length-meter, mile-per-hour, kelvin, 140+ available... (look at right hand side of slides)
New key unitDisplay, taking either "narrow" short long
Scientific and Compact notation
Express large number i.e. 3 billion to 3B in a locale sensitive way
Scientific notation is a big request as well
Sign Display
Feature request when to show the sign on a number i.e. -1, +0, +1, etc...
We want to give users these choices
Currency Sign, Combining Options, etc.

BH Is there a way to not show the sign?

SFC: there are a couple of issues opened against the spec about negative zero but I resolved all of them. The way they are resolved is they are treated as a negative number as a sign and then for math it's resolved as 0.

DE: Can we make a request to convert zeroes appropriately? ...

SFC: Changes from July. Biggest things include:

- Core unit identifier: units no longer need the type prefix. Also allows for custom compound units supported by CLDR
- Compact notation uses its own rounding strategy unless the user provides their own
- Changed "camelCase" to kebab-case in string options
- Distinguish -0.0 from 0.0
- minimumIntegerDigits works for significant digit rounding
- Format-to-parts field names changed according to Ecma 402 subcommittee recommendation
- Intl APIs have something
- ICU units also worked on
- Explicit list of unit identifiers added to spec
- Resolved issue by having a list and we change appropriately assuming its in the list
- Spec language cleanup based on review feedback

SFC: Thanks to stage 3 reviewers zenparsing, gsathya and additional thanks rxaviers, ms2ger, littledan. Can we promote to stage 3?

RJE: Any objections?

WH: How did you pick the list mentioned in unit identifiers?

SFC: List of units comes from list of units currently available in unicode locale data. The CLDR committee vets every single unit to make sure it has reasonably common use and adds them to the CLDR database. We took that list and used it here.

WH: You have picometer but not newton, gauss, tesla? I encounter uses of newtons much more often than picometers.

SFC: In fact newton is being added to the CLDR version 35? Daniel can add more details about how list changes are made.

DE: So the list is made pragmatically. The schema for CLDR includes these units. Translators collect different pieces of locale data and when units are added, the data has to be collected. I was thinking for this we can go about this the same way we do for Unicode property escapes in RegExp? There, we explicitly list the supported properties, to signal to engines: this is what you must support, no more, no less. It's good for interoperability. I think the process of how this worked would work here too. Shane went out of his way to make CLDR upstream was easier for developers here. Shane made sure all of that was all well-defined.

WH: You made a mention of sanctioned units that can be combined using "-per-". However, some sanctioned units have a "-per-" inside them. How does that work?

SFC: The LDL spec enumerates that you are only allowed to combine 2 simple units. CLDR version 35 specifically annotates...

Nathan: No objections but the negative zero case isn't very clear in the spec of what is described. I don't find it particularly clear.

SFC: Yeah that makes sense.. That's the human understandable part... we should do that.

RJE: Last chances?

#### Conclusion/Resolution

- Stage 3 acceptance
