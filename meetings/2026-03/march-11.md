# 113th TC39 Meeting

Day Two—11 March 2026

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Ashley Claymore    | ACE          | Bloomberg          |
| Aurèle Barrière    | AUR          | CNRS               |
| Chengzhong Wu      | CZW          | Bloomberg          |
| Chip Morningstar   | CM           | Consensys          |
| Chris de Almeida   | CDA          | IBM                |
| Daniel Minor       | DLM          | Mozilla            |
| Dmitry Makhnev     | DJM          | JetBrains          |
| Eemeli Aro         | EAO          | Mozilla            |
| Gustavo Tonietto   | GTO          | Mozilla            |
| Guy Bedford        | GB           | Cloudflare         |
| Istvan Sebestyen   | IS           | Ecma               |
| James Snell        | JSL          | Cloudflare         |
| Jeffrey Posnick    | JPO          | Bloomberg          |
| Jonas Haukenes     | JHS          | Univ. of Bergen    |
| Jonathan Kuperman  | JKP          | Bloomberg          |
| Jordan Harband     | JHD          | Socket             |
| J. S. Choi         | JSC          | Invited Expert     |
| Keith Miller       | KM           | Apple              |
| Lea Verou          | LVU          | OpenJS             |
| Linus Groh         | LGH          | Bloomberg          |
| Nicolò Ribaudo     | NRO          | Igalia             |
| Olivier Flückiger  | OFR          | Google             |
| Philip Chimento    | PFC          | Igalia             |
| Richard Gibson     | RGN          | Agoric             |
| Ron Buckton        | RBN          | F5                 |
| Samina Husain      | SHN          | Ecma International |
| Stephen Hicks      | SHS          | Google             |
| Waldemar Horwat    | WH           | Invited Expert     |
| Aki Rose Braun     | AKI          | Ecma International |
| Jason Williams     | JWS          | Bloomberg          |
| Andrew Paprocki    | API          | Bloomberg          |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Justin Grant       | JGT          |                    |
| Kevin Gibbons      | KG           | F5                 |
| Kris Kowal         | KKL          | Agoric             |
| Michael Ficarra    | MF           | F5                 |
| Mark S. Miller     | MM           | Agoric             |
| Peter Klecha       | PKA          | Bloomberg          |
| Ruben Bridgewater  | RBR          |                    |
| Rob Palmer         | RPR          | Bloomberg          |
| Shane Carr         | SFC          | Google             |
| Ujjwal Sharma      | USA          | Igalia             |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

RPR: We'll start with our favourite activity. Who would like to volunteer for note-taking? Thank you, LGH. We'll put that hand up over there in the room. People who are remote, you're also welcome to volunteer for note-taking if you wish. We just need one more.

## Temporal for Stage 4

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://ptomato.name/talks/tc39-2026-03/)

PFC: Hello, everyone. My name's Philip Chimento, and I'm a delegate for Igalia, and we're doing this work in partnership with Bloomberg. And I'm very happy to be finally getting up here and showing a slide with the title "Temporal for Stage Four." (applause) Well, save that for when it actually gets approved.

PFC: just wanted to share some late-breaking news. Just in time for this, the province where I live has decided to get rid of daylight savings time once and for all. We changed our clocks this past Sunday for the last time, and will now be on permanent daylight time, which is just another reason why you should never use the POSIX "isdst" flag.

PFC: So this is a stage four request. The entrance criteria here are: two compatible implementations, which passed the test262 acceptance tests. Significant in-the-field experience with shipping implementations, such as experience provided by two independent VMs. There's a pull request for ECMA 262 or ECMA 402 as appropriate in this case, both are appropriate. And the relevant editors group has signed off on the pull request. So I'll be going through each of these requirements and talking a little bit about them.

PFC: It occurs to me just now, rather than while I was making the slides, that maybe I should have done a review of what Temporal is. I feel like I've been up here presenting things from Temporal so many times that I didn’t need to, but just in case there are any new people. Temporal is the JavaScript API for handling dates and times in a better way than the existing Date object does. It's a fairly large API that handles exact times, wall clock times, and durations. So there is a large API surface to cover with tests, which I believe we have done in test262 now. For a long time we've been looking for all the edge cases that come up and adding tests specifically for those for the edge cases we've encountered. And I've used a snapshot testing technique to go over millions of inputs. I'll have more on that in a later slide. And there are quite a large number of tests, I think about 5,000 in the test262 repository, which is, I think, about 10% of the whole test262 corpus.

PFC: And we have at least two implementations at about 100% test conformance. There is a little surprise here on this graph as I was updating it yesterday based on the latest nightlies, which is that the Ladybird JavaScript engine jumped ahead, and is also hovering at about 100% test conformance now. Apparently this just happened in the last two weeks since I originally made the first version of these slides. So what you see here, the red bar is test conformance with the Temporal tests, not including Intl Era Month Code and the blue bar (or hatched if you are colorblind) is conformance with the Intl Era Month code tests, which are related to Temporal, but is a different proposal that went to stage four yesterday already. So you can see we actually have three implementations that are around 100%, on both of these proposals.

PFC: As for in-the-field experience we have, as I said, two browser-based implementations that have been shipping Temporal unflagged to the web for several months. Firefox has had Temporal for almost a year, actually, and we've had it in Chrome and other V8-based browsers for a couple of months now. It's unflagged, in several other implementations. I actually have no idea why I put Ladybird under non-browser engines. It is a browser engine, my apologies. And there's an implementation in GraalJS, which is scheduled to be unflagged in the next release, but I'm not aware of any release date for that release.

PFC: We also have several polyfills for the proposal, ranging from several years old to quite new. There's the Fullcalendar Temporal polyfill, the author of which is kind enough to show up as an observer today. So there's one that was that the proposal champions put out a while ago and then there's a new one that's been released, I think, just last month, which is smaller and includes less time zone and calendar functionality. Which is permitted by the spec.

PFC: So the proposal went to stage 3 in 2021. This was before we had a stage 2.7. Compared to a lot of the proposals that we see today, it had an unusual journey. But I do think that the long stage 3 has been beneficial in a number of ways. Having it flagged on the web and having these community-authored polyfills, there really have been a lot of improvements to the proposal, which couldn't have happened if we hadn’t had sort of this long community period for such a large proposal. So you know, we had spec bugs that were noticed by implementers in polyfill authors. We had these same people looking at the spec and noticing opportunities for improving the spec algorithms. This was especially relevant when we still had custom calendars and time zones and there were a lot more user code calls than there are now. Then you know, there's always edge cases, and I've managed to be surprised a few times along the years like the edge case of Toronto in April 1919 jumping from 11:30 PM to half past midnight in a weird daylight savings time transition. I want to take a moment to thank everybody who's made contributions like this. It's been really helpful and I think it's made the proposal more robust and better.

PFC: I said I would talk a little bit about the snapshot testing technique. I've mentioned it in a few earlier presentations, but this is a technique that's also been really helpful for surfacing bugs and weirdnesses in either the time zone data or the proposal. or the implementations. What we did was taking lists of data, like interesting years, interesting time zone transitions, interesting months, and combine those into tests of millions of inputs, and then run that through one implementation, make a snapshot of all the outputs, and then compare that against the outputs when you run the same set of inputs against a different implementation. And if they're not the same, then something's up. And at the very least that should be a test262 case. That's been very helpful. We filed almost 20 bug reports and implementations over the last couple of months when we were doing this and also managed to fix some of them, and we got a lot more targeted test262 coverage that way. I really found this technique helpful, and I think other proposals might benefit from it too, even if they're not as large as Temporal. So if you're interested in that come talk to me.

PFC: I wanted to talk a little bit about web platform integration. We have a pull request open for structuredClone support for Temporal objects, which seems to have interest from two implementers. And there is an issue in the proposal repo with other integration ideas. Such as being able to pass a `Temporal.Instant` as the expiry time of something or other, or for example passing a `Temporal.Duration` to setTimeout. Now, the WHATWG process moves in a bit of a different cadence than ours, and uses different criteria. The big thing there is user stories and implementer interest. So if you want to see some of these things happen go to these issues, and give use cases. If you're interested in implementing them, also comment that there. I would love to see some of these things happen, we're not going to consider it a requirement for stage four because Temporal works just fine without any of these web platform integration things, and it's already useful by itself.

PFC: All right, there are two pull requests open for the spec text. There's one for ECMA 262 and one for ECMA 402. The ECMA 402 one also includes the Intl Era/Month Code proposal. It was easier to put them in the same pull request. So that went to stage 4 yesterday in a separate presentation. The ECMA 262 one is interesting because, as you might know if you've contributed to ECMA 262, everything is in one giant file. I've set this pull request up so that everything from Temporal is not in one giant file. This seems to be a good moment to start doing that. But we'll talk a little bit later about how exactly we want to publish it. But anyway, the pull request that's open is assuming that we're going to put it right in the same document, but in different files that get included at build time.

PFC: Editor sign-off. So we've discussed the open pull request with the ECMA 262 editors. several times in the editor call. and we have an open question about how to publish it, which we'll get to in a moment. The ECMA 402 editors, so I know that usual and Ben have reviewed it. And, RGN is a proposal champion, so I assume he's familiar with it, but I'm hoping that we can get an official sign-off from you in the meeting.

PFC: So a little bit about the future plans. What do we do now? We've been talking over the past couple of days about how the Temporal API and spec text should evolve in the future. And as I mentioned, how should the spec text get integrated into the current ECMA 262? About five years ago when we went to stage 3 and had to declare a bunch of things out of scope, we started collecting ideas for future expansion in an informally named "Temporal V2" repository, which has about 36 issues open that people have contributed over the past five years. Almost all of them are incremental and narrowly scoped. There's no large design spaces like we had with Temporal. And so we expect that updates to the proposal will be in the form of somebody wanting to add an epochMicroseconds property to `Temporal.Instant` or something like that. So the kinds of updates that I would expect in the future, they'd be about the size of `Array.fromAsync` or a `Math.sumPrecise` or something like that.

PFC: We've talked with the existing champions group and one option that was raised, which we'll talk about shortly, was to run a new TG. We're not really eager to do that after having run the champions group for years. But we're happy to review and support any follow-up proposals and we'll support any fixes to issues that people find. So we're not planning to go anywhere.

PFC: We've discussed three options for how the spec text should get integrated. We can stick it in ECMA 262 like any other proposal. We can give it a separate HTML page in the published ECMA 262. So this would be a part two standard in ECMA 262-2. Another option is to make it a separate standard which we'd request a number for. and it would be ECMA 430 something. We talked a lot with the previous editor group and yesterday with this new editor group. and MF offered to contribute some slides and talk about how the editor group sees this. So MF, would you like to do that now? Do you want to come up here or do you want to bring the microphone over there?

MF: Okay. Let's go to the first slide. We have two considerations here. I'll just step back a little bit. I know PFC covered most of the state of things. But you know, when the Temporal champions group came to the editors a couple months back and asked what we were thinking about how we do integration, the editor group at the time gave a lot of feedback. It's very large, it's going to really affect a lot of our editorial concerns with the spec. But also, we have concerns about our ability to maintain it. As it may change or, if that is what happens in the committee. And our ability to maintain it as we make other changes to the document, refactoring, that kind of stuff. We didn't have confidence in our ability to do that. So we had some recommendations that we wanted to run by the committee.

MF: So this first part is considering whether Temporal should have a separate standard. A TG that is responsible for maintaining that and running approval by TG1 very much like TG2 does. And then also have its own assigned editor group. So for this we put in arguments on either side of that question. I don't want to read them off to you. But I guess I kind of have to. So in favor of a combined…

\[short disruption in transcription\]

MF: If we have a separate TG responsible for Temporal then it's all of our responsibility for ensuring that we maintain some expertise there, right? We would not be able to have the TG with no assigned convener. So that just becomes more structurally ingrained in us. Similarly, with Intl and TG2, a lot of the members of TG1 that are not in TG2 don't care to discuss all the little nitty-gritty details. We want to see what the conclusion was at the end and do approvals. We also think that, considering readers again, that a lot of people who care about Temporal just care about Temporal and want to read that. And a lot of people who care about a lot of the other parts of the language won't want to read into the details of temporal. Obviously there are implementers who will be looking at all the bits of it, but that is still helpful. And like with Intl and like with other certain parts of 262, there are other specs that want to reference just Temporal bits or we'll talk about regex later, but other specs that just reference regex bits. We think it would be better structurally to have them just have to reference that temporal spec instead of all of 262. Not a huge deal, though. Can we move on to the next slide?

MF: So when talking about just whether we have separate documents and separate Git repositories, this is not a strong argument. In fact, it's kind of an argument in the other direction. A combined repository and combined documents has a lot of benefits. It's easier for us to maintain editorial consistency because we can just work in one big document or at least if it's split over multiple documents, we can work at least in the same repo. And just finding within files and stuff, it's just easier to manage that way. Also, if we have to split it out, there's going to be things that are shared, shared abstract operations between these documents. And it's not clear yet where we would put those things. Would we have a W3C infra style spec? We'd have to figure that out. It's not a problem. We could make circular references. That is fine. But it's not ideal. We also know through experience that often when developing proposals, when people reach for existing AOs, that actually prompts normative conversations where people were thinking that some minor normative behavior of their spec would work one way, and because they're using this shared infrastructure, it actually is slightly different and actually makes the language more consistent that way. So we could have possible normative consequences from our decision with that. Not strictly following our decision, but through process. And of course, it's much better to maintain just one CI system, one set of dependencies, and that kind of stuff.

MF: Minor argument in favor of separating is just that we do have a lot of people who prefer the single-page document, but also the single-page document performance is not good at times. And it's bordering on unusable. And making it 50% bigger makes that even worse. But we still like the single-page document. So splitting the document has that benefit.

MF: Going to the next slide. So the other group, as of the time that as of the previous editor group, as of a couple of weeks ago, has this strong preference for having a separate standard and a separate maintainers group as I showed in two slides ago. We've had conversations with the new editor's group yesterday quite a bit and it seems like we're all on the same page with that same opinion. So without even having to consider that second question, the first question implies that we would have separate documents. We don't think that that is a strong argument on its own. In fact, it's more of an argument in the other direction. But we think that it would be really beneficial to maintain these experts as an official role within this committee. Does anybody have questions about that?

PFC: I don't know if you wanted to talk about the future idea of putting more things into other specs?

MF: Oh, yeah, sure. I'll briefly touch on that. So yeah, when we were discussing this on the reflector, LGH brought up that regular expressions have many of the same aspects. You can make the exact same argument that we make for Temporal about regular expressions. I think all of those same arguments apply. And that makes a really good, strong case for separating regular expressions out of 262. I would love to pursue that. In fact, this is not a new thing. I've been thinking about that for a long time. And many of us have. RBN has also because he has been very heavily involved in evolving regular expressions over time. It would be great to have a group of experts in regular expressions who can work on nitty-gritty details of it and once they've got a really good design worked out, present that work to TG1. It's also really good to have that separated out as a separate spec. There are other standards that refer to our regular expression section and if nothing else, it would be great to have them just refer to the regular expression standard that ECMAScript uses. So instead of that actually being an argument against having temporal be a separate TG and a separate standard, I think that that's actually a strong argument for just both of those things being separated out.

PFC: Okay. Next I wanted to go to the queue. But I thought since the topic of the form in which to publish it is probably a lot of people might want to have something to say about that, I thought maybe let's discuss any topics related to the substance of the proposal first.

CDA: There is nothing on the queue thus far about the substance of the proposal.

PFC: All right. Well, then let's go to this topic.

JHD: Let me go back two slides. One more. Cool. Okay. So in general, I think that separating things is the wrong direction. The document is perfectly performant in Safari; I'm sorry that there's other browsers in which that's not true. Find-in-page is invaluable. And the HTML spec is hugely confusing that there's more than one document for it, more than one website for it. It's a bunch of scattered specs all over the place. What is the web? It's like 58 different documents. That's absurd. You mentioned regular expressions. There's tons of parts of the spec that have a small set of readers and that need distinct expertise, typed arrays, atomics, regular expressions, Unicode, etc. Separately, the editor group has never been the sole caretakers of 262. It is always all of our responsibilities to maintain the spec. That includes a 402 as well. The point of a separate group is to be more efficient with our time and have the people who care the most and have the most expertise be able to talk about that without dominating the time of everyone else. But that doesn't mean it's any less of a shared responsibility. There's already massive editorial consistency problems between the Intl spec and 262. That wouldn't have happened were it in the same document.

JHD: The only reason that I wouldn't that I haven't been pushing for Intl to merge into 262 for many years is because Intl isn't normatively required. So you can have an engine that implements only 262 and not Intl and have it be compliant. If that changes, if we want to change that, then I would suggest then all be in one document. And then as far as referencing subsets, that's what section anchors are for. That's really a minor non-problem. Can you skip to the next slide as well? Thank you. I think as you've mentioned these arguments on this slide in favor of combining shared AOs are a huge issue. It's a pain in the ass when you're doing a proposal to reference multiple biblios and multiple proposals. And that would worsen this problem.

JHD: I guess we have the multi-page version for anyone who's concerned about load time, so I think that's also a solved problem. Yeah. I think that we should be combining it. And separately, I also think that the structure of the documents has zero bearing on the expertise groups that manage it. I think it's a great idea to have a Regex group and a Temporal group and a typed array group and so on. We should be creating small focus groups for anything that isn't universally interesting to the room? That's my rant.

LVU: I just wanted to reply. You mentioned the HTML spec, but that actually has both views. It has a full-page view and a multi-page view. So if you want to use the single-page view, you can.

JHD: But there are specifications that aren't contained in that single-page view. I believe. Like CSS.

LVU: Yeah. URL and fetch.

JHD: Right. I'm saying there's no single document that describes the web. And I think that's a huge problem. But I'm not in that arena, so I'm not trying to explain about it.

LVU: Okay. So. But the argument still remains that you could have a single view of everything exactly how you're advocating it should be. And also have multi-page views for people who find that more convenient. You don't have to pick that as tooling.

JHD: True. And we have that now already. With the 262, we have that already for a single page and multi-page view. So again, it's just like you said, it's just tooling. The document structure isn't dictated by that desire. So you're right. Some of those arguments that I made don't have any bearing on combining or not. It's just a bearing on what tooling would need to be built. But it's much easier to build the multi-page view, I think, from one than to smush a bunch of documents together especially when we're talking about maintaining editorial consistency. And having shared infrastructure.

LVU: And there's also the question of which view is the canonical one.

JHD: Right. Exactly.

PKA: LVU asked my question. Just can we have separate specs, but then just have a superview somewhere? Seems doable. Not a blocking concern for this.

CDA: Can you go back to the slide about the separate spec TG, etc.?

PFC: This one?

CDA: Yes. So I just want to push back against some of these arguments in favor of separating because I think they're not accurate in some ways. So the idea that having a dedicated TG ensures that we maintain experts I just don't think that's true. Having a TG doesn't guarantee anything. It's really just an abstraction layer over some subset of the committee. We have groups operating as essentially de facto TGs for years. The Temporal champions group, module harmony, stuff like that. So the TG is just formalizing something that can already be happening to begin with. And nothing about that ensures that experts are maintained.

NRO: Yeah. It was mentioned that other specs might want to reference just Temporal bits and wouldn't care about the rest of JavaScript. Do we know if anyone actually wants to? Because a large part of the Temporal spec is still very much JavaScript-specific. There are all of these AOs that deal with actually using the data. But then there is the whole API layer on top of that that is still there. And it's like a separate spec would likely not want to just actually reference parts of Temporal but do it their own version referring to only some of the actual internal parts and not the whole Temporal API.

MF: Assuming that was a question directed at me. I am not actually aware of another spec wanting to make normative reference to Temporal. You are correct that the other things that I've seen that are based on Temporal are following the general layout but not actually normatively referencing Temporal for those because of JavaScript specifics. Unlike the Regex stuff where JavaScript is actually normatively referenced.

RGN: I don't know if EAO is on the call. But there's current consideration in Unicode MessageFormat which might want to reference Temporal. It's an area of active discussion if they're going to do that or instead reference RFC 9557 directly. But the possibility at least exists.

CDA: EAO is on the call. Did you have thoughts?

EAO: The specific issue here is that RFC 9557 does not provide a well-defined expression for a time string. And the ones that are in RFC 3339 are not the time expressions that we're looking for either. So the only place currently that I've been able to identify that has an expression of time as understood by Temporal that I can find is, in fact, the Temporal specification itself. Also noting that this has led me to identifying a small issue in the actual Temporal spec. I'm on the queue for that one later.

CDA: All right. I'm next on the queue. I also wanted to push back against this one about most of TG1 doesn't care to discuss temporal details. Committee members are more or less interested in various proposals to varying degrees. So I don't think it sets a great precedent to say for some category of proposals, these could be in their own spec. And where does that end? Do we poll the committee for every proposal saying, "If 51% don't care about it, now it needs to be in its own spec"? That seems strange to me.

NRO: Yeah. Also for cases where a lot of the committee doesn't care about details, we have this specific calls for RS of JavaScript have the modules calls, the numerics calls. And for example, for modules, 90% of the discussions we have there are then very shortly summarized and brought to the committee exactly to avoid wasting the committee's time on details that we can figure out among the experts of the area. And if we will still have a group of experts around Temporal, I would hope that something like the current Temporal champions call just gets converted into something like that.

MF: Yeah. I guess I should have covered this a little better because JHD had a very similar point here about there are lots of areas of the spec that require a certain expertise that only a few members have and yes, that's true. There are sections of the spec that have varying levels of requiring these specializations in the topics. And also, they vary in size. And I think that you have to draw the line somewhere. And for things that are very large and very specialized, they're clearly on one side. For things that are either not large or not specialized, they're clearly on the other side. But there's this whole gray area of, "Yes, you could decide to separate them out. You could decide to include them." That's just a vibes thing. Oh, and what I was going to say? Oh, so but for Intl in TG2, I think it clearly works very well that they are able to work through these details that require specialist knowledge without having to take a bunch of uninformed input from the committee. And NRO points out that, yes, you can have an informal group that kind of does that same thing and a TG is just a way to formalize that.

SFC: Yeah. Just to +1 what others have said here. I think that what we currently do with Intl and what we currently do with modules and what we currently do with TG3 and some of the security reviews and various other things where we already have breakout groups those groups work those groups typically meet on a weekly or biweekly cadence. And then work through a lot of these details throughout the whole year. And then come to this group after having synthesized all the trade-offs. Maybe and then asking this group like, "Help us make a decision about these certain aspects of a proposal that might impact JavaScript as a whole," right? This group sort of is the central plenary, which I think serves its role very well. And I think that yeah, I think that this is how Temporal has already been working. We have this biweekly meeting and I think that that's what we should continue to do. When there's Temporal issues that come up, whether or not the Temporal thing is moved into a TG or whether it stays as a standalone meeting, that happens whenever we need to discuss Temporal issues as they keep arising. But then we come to this group to then have any proposal advancements I think that that structure makes sense that we should keep it.

CDA: Philip has an item on the queue, but it appeared to disappear from my screen, so I re-added it.

PFC: I can definitely see both sides of this argument. The example I brought up before, I'm sure most of the committee is not that concerned with fixing a wrong assumption around a daylight savings edge case from 107 years ago. And that thing I don't want to speak for anybody in the committee, but if something like that comes up, I'm sure TG1 is happy to delegate that to a small group and have it be fixed. The other side of that is that I do also think that TG1 having the sort of ultimate say over the contents of the spec does kind of obligate us all to at least get a passing familiarity with the areas of it that aren't necessarily part of our particular area of expertise. So I think this kind of goes both ways.

CDA: I just had a reply for just a minor point. On this slide, you kind of coupled having standard be separate and having a dedicated TG and a dedicated editor group, which is fine. But it does not necessarily need to be that way. You could do any combination of those things. If the committee wants to do that. I'm next on the queue again. This was just for clarification. Because it sounds like so previously, the last time I checked, there was not interest from the Temporal champions to have a TG and to have and to step up for dedicated editors for Temporal. But by these slides, it seems like that position may have changed.

PFC: I can reply to that. So I don't think the position has really changed. My position, which seems to align with the rest of the champions, but they can put themselves on the queue if not, is: for me, I've been performing this role informally for six years. And we're hopefully getting this over the finish line. And I'm happy to help other people transition into that role. But I think most of the current Temporal champions group are excited to stick the landing and move on to other things within the committee. So there's that. The idea of having a separate TG I mean, I've gone kind of back and forth on that. But as of certainly as of our discussions yesterday, I think it's especially if the editors are thinking of it as part of a roadmap to split out more parts of the spec, certainly fine with me as long as it is not a blocking concern for stage four and as long as I don't have to be the convener.

SFC: So I wanted to raise the question of if we wanted to have a separate TG, that sounds like a lot of process weight. Because they have to have a chair and an editor and all that. I observe that the overlap of interest in Temporal in TG2 is higher than the percentage of interest in TG1. There's definitely folks in TG2 that are not interested in Temporal. But the percentage of people who attend TG2 who are interested in Temporal is a higher percentage than the percentage of people who attend TG1 who are interested in Temporal. Which could suggest that TG2 might be a natural landing spot if we wanted to go in this direction. TG2 already manages the ECMA 402 proposal ECMA 402 specification. If there were a ECMA some other number I don't know what number we're at now. I think we're are we still in the 400s, SHN? SHN stepped out of the room. 426. Okay. So maybe this would be like 435 or something. So if we were to introduce an ECMA 435, then I feel like TG2 could possibly be a group that could field questions to it. But then we would, of course, still stick with the same process of coming back to TG1 to get formal approval on anything. I haven't this is only an idea. I haven't asked TG2 how they feel about this. There might be similar pushback from people in TG2 who are like, "I don't want to worry about date arithmetic issues." Those are not internationalization problems. Although a lot of them actually are, as we found. So I just wanted to throw that out there.

ACE: So I mean, my preference is not a separate TG. So for this proposal, I think I've noticed I've never been able to weigh in on anything about the date time aspect of Temporal. It's just I'm nowhere close to a subject matter expert in that domain. However, I have frequently found myself having a lot of interest and attention and having opinions about just the general programming aspect of it. Does it take an option bag? Does it validate which things throw versus this? The naming of things. That I've really found very interesting in Temporal. And I would not like to see the splitting things up. I can see all those little minor aspects of the language, no language is perfectly consistent and JavaScript isn't perfectly consistent. But I think we're doing a good job of trying to be more consistent with our designs. And if we start splitting things up, I can imagine those little things being missed. Because sometimes a proposal will be on the agenda and I'll think, "Oh, it's really not something I know about. I'll skip over it." But then when it's presented, I'll suddenly go, "Oh, hang on a second. That seems different to what I expected." Again, in terms of just the API shape or the validation. So yeah, I think we shouldn't think of this just because it's a very particular domain; therefore, it should be split off. Because at the fundamental, it's a language and the language should be consistent.

EAO: I'm active on TG2. I would look to avoid the meetings in which we will be discussing so much Temporal. I would really prefer that it not to be added to TG2.

JWS: Yeah. I agree with what PFC said earlier, where I personally don't think it should be a separate TG. There's plenty of champions who are still here who are not going anywhere. And they can always refer to one of the champions for reviews or helping push forward any new Temporal-related proposals or any spec books. I don't think there would be a high amount of maintenance or work going forward with Temporal. I mean, we talked about this last night. There were one or two things in the V2 repo that were all pretty well scoped. That people could pick up. But I think all of us, as in the spec champions, would prefer to see those things being picked up and discussed in the main plenary, the main TG1, and not a separate track. But in the effort of trying to move things forward, my question was going to be, if this is something that we could revisit if people feel that we might need a separate TG? Can we try out not having one right now because we don't even have any dedicated spec champions or anyone to run this group? And we may not even need it. And is this something that down the line, we can try and see if we can work without a separate TG? And if we really feel in six months or a year's time, it is needed because maybe there is a high amount of spec bugs or there is a high amount of proposals coming through for Temporal, which I don't think there will be. Is this something we can revisit then but still keep the other things maybe a separate document? So that's just a question.

API: Just echoing what JWS was saying. JWS nailed it. I feel the same way. I feel like we just need to land it. Temporal is huge. But so much work has gone into it that I really don't see there being a lot of ongoing churn within it. So we just need to land it, and then we'll see how things fall out, right? And if there turns out to be a lot of time being spent where people in plenary feel like it could be better time could be better spent off in a more focused working group, we can discuss that later. But I think right now, it just makes sense to keep it all together. And that's orthogonal from how the documents are presented, right? You could still keep it as a separate document if you wanted just for organizational purposes. But I think we're good to go.

CDA: Yeah. I think my comment is in a similar vein, which is that I don't think we can take any of these decisions today anyway. I think it's good that we're talking about it. I think we should wrestle with this a bit. But I don't think we can actually today decide whether it's a separate standard whether we're convening a new TG or whether we have one who assigned a dedicated editor's group. That would have to be a follow-on at next plenary, I think, at the earliest. EAO. Oh, sorry, PFC. Did you want to speak to that?

PFC: I wanted to suggest that since we started on the big publishing topic, maybe we should go to MF’s topic and then EAO's?

MF: So I'm hearing the feedback here. I'm getting the general feel of the room is the desire to, at least for now, try to remain combined. I just wanted to summarize what that would mean for us as editors. Again, we brought this to the group because we felt there was risk in our ability to maintain the document going forward. I do totally respect that you think that there's not going to be very much change. And that'd be great if there's not a lot of normative churn in that or a lot of spec bugs found. That would help reduce this risk for us. The risk we mostly saw was that performing spec maintenance where we do major refactorings, where we have to touch a lot of things, this is kind of a—it's like maintaining a large code base where you just kind of don't know what a section of that code base does or you don't know the language it's written in. It's kind of hard for you to really understand and make confident changes in that. That's kind of how we felt as an editor group. And in our talks yesterday, the remaining editor group kind of felt that same way. I know we have RGN now who can be our expert there. But we may not always have that. And we want to always be confident in the same way that—I would not have volunteered as editor of 402 because I just don't have the relevant subject matter expertise, even if I have the expertise around actually maintaining a spec document. I feel like a lot of that is kind of being forced on me now in that I have to either try to get that subject matter expertise in Temporal at least to a point where I can maintain it or I just can't do the kinds of editorial things that I need or want to do as part of 262 editor. So that's our summary. I'm totally happy with following the group's will here and trying that out. And we can always delay this decision to later. That's fine. I just wanted to let you know that that's what the consequences are of that.

CDA: Yeah. Thank you. That’s very helpful context, of course. DLM.

DLM: I'm also in favor of keeping Temporal part of the main specification. I just wanted to ask MF a question about what he just said. And that's if the main specification is being refactored regularly, if Temporal were a separate specification, is there a risk of drift between the two specifications because people are paying attention to Temporal if it's separate?

MF: Not totally sure what you mean by drift. If you're talking about editorial inconsistency, yes, totally. In the same way that there's significant editorial inconsistency between 402 and 262 today. That can happen. I think that's not a terrible outcome.

DLM: Okay. Yeah. That was my question. Thanks.

NRO: Just about the problem with most of the editors knowing nothing about Temporal. Now that this new editor group is larger, I wonder whether some of us could actually be assigned to focus on this. I have PFC virtually sitting next to me all the time. And so PFC could help me when I need help with learning this. Or think about LGH that can just walk to JWS's desk and ask things to him. So maybe we can try to explicitly grow expertise here to make the editors' work easier.

PFC: I also just wanted to reiterate that I have no plans to disappear and as far as I'm aware, none of the other current Temporal champions do. So yeah, like I said, it's not a question of we want to throw it over the wall and wash our hands of it. We're certainly available to answer questions and try to help bring in whatever expertise is needed.

CDA: JKP’s on the queue with plus one to NRO. I like the idea of trying to keep SME editors at all times. I just had a question on the de facto is that this is going to land in 262. So the committee has agreed to do that basically at stage 3. So unless we decide to do something different, that's where it's going. So my question is if after that happens, presuming that is what happens, and then for some reason, as a committee, we go oh, hang on. We actually don't like this. And we do want to split it off. Is that painful for in some way? Is there a cost of not doing it upfront that?

MF: No more so than the typical repo splitting kind of thing of moving issues, trying to figure out how to split history, that kind of stuff. Which is not fun.

CDA: Well, you mentioned the repo. But previously, we had talked about even if it was a separate spec, it could potentially be in the same repo.

MF: Yeah. Only if we actually go full separate editor groups would we really want to make sure that we split repo and stuff.

DLM: Just a quick reply to what MF said earlier. He said that editorial inconsistencies weren't necessarily that big of a problem as an implementer. I'd prefer not to have those sorts of inconsistencies.

JHD: And the same is true as practitioners, right? I mean, having to learn a foreign language, essentially, to understand a spec is hard enough. Having to learn two is even harder with 402. And having a third dialect will not make understanding the spec any easier for anyone. So I think it is actually a really big problem to have editorial inconsistencies.

CDA: I was going to reply while RGN’s finding a microphone. Yeah. I think we have seen that as well with some conventions in TG2 that didn't quite match up with TG1. And that's not been a great source of.

RGN: That's true. But I don't want it to be overexaggerated. The editorial inconsistencies we're talking about are things like whether you phrase something in one step or two steps, whether you use words like else or otherwise. I mean, yes, we value consistency. We strive for perfection. But it's not like you have to learn an entirely new dialect to read ECMA 402.

JHD: That's true. And I didn't mean to imply that you all had not done a great job keeping up with the refactors that have happened in 262 over the last decade. But there have been a lot of them. And it would have been easy for you all to fall behind. And I think that the more documents we have, the easier that will be in the future.

EAO: In the context of working on Unicode MessageFormat and there wanting to find an expression for a time string that we ought to be able to support in that standard, I ended up kind of discovering by accident that I think the time string expressions that we are referring to in `Temporal.PlainTime` specifically are maybe a bit under-specified. I don't know if that's the term. But still, the situation is that, for example, if you look at the MDN documentation for plain time, it's referring to an RFC 9557 expression of a time string. And then it kind of details that. But this isn't actually something that I can find in 9557. And it's not clear that there's any specific one in RFC 3339 where this is coming from either. I mean, it is ultimately really quite well specified in the Temporal spec itself for what it is that's acceptable to pass like this. But then the odd weird thing for which I filed an issue last week that when I noticed this is that Temporal's PlainTime is the only place in Temporal where we are parsing a string that does not contain a date part, only contains a time part. And when we are passing such a string, we do accept it to have a valid offset. And it’s possible annotations added at the end of the string. So effectively, a full date time thing just cut everything only consider stuff that's after the T separating the date and the time. And then we discard that information. And I found it very surprising to be able to parse a time with an offset and this is completely valid if the offset is valid. But then the offset is completely ignored. And that this is the only place in the spec where we are parsing a time string and I did not find previous discussion or consideration during the work on Temporal for why this is a thing. It seems to me from the outside it looks like this is an accidental work that's kind of left in here. But I just wanted to highlight that, hey, there's this weird thing that probably doesn’t really matter. I'm not going to be blocking Temporal or anything. I just wanted to highlight that there's a weird thing here. And if anyone does have a concern about this, this is the last time to do anything about it. But yeah, I found this to be surprising behavior.

SFC: My response was in all the different Temporal types, the decision that was made a while ago was to pull out the fields that are required for that type and ignore the other ones as long as they're syntactically valid. So for example, if you give a date time string and give it to a PlainDate, then you get the date fields. But you don't get the time fields. It ignores the time fields in the string. But it's still looks for syntactic validity. That always is the case. So this seems consistent with so the behavior that EAO just described seems consistent with that. And I'll let Philip address the thing about the time syntax.

PFC: So we're talking here about strings with a time and a UTC offset. So something like `12:34+01:00` where if you feed that to `Temporal.PlainTime.from()`, you just get a PlainTime of 12:34. The UTC offset is ignored. Yeah. So like SFC said, that's been a design principle since we started designing what string formats Temporal would accept. It's not accidental that the a time-only string plus UTC offset is accepted. That is a format that has its own it's specifically called out in its own section in the ISO 8601 standard which, to my infinite chagrin, you cannot access without paying. Sorry. But yeah, it is a format defined in a standard. And we had no good reason to exclude it.

NRO: Just to clarify, it's not just the Temporal PlainTime you can pass a time with a timezone offset. You can also pass a date and a time and a date will be ignored. So it's not just about the timezone offset. It's all of these things.

CDA: That is it for the queue. We have oh, hang on. There's a reply from SFC.

SFC: Yeah. Just to note that the exact grammars are kind of spread out between ISO 8601, 9557, and was it 3338? 3339. But Temporal also reproduces them in a grammar that is directly embedded in the Temporal spec. And each one of these individual specifications that we cite discovers a different piece of the grammar. But then we reproduce the parts that we actually use because, for example, ISO 8601, gives sort of goalposts for what a grammar should be without actually writing down a grammar without actually writing down the context-free grammar rules. And then Temporal actually writes down the context-free grammar fully. So yeah, that's all.

CDA: All right. That is it for the queue. We have just over 15 minutes left in the time box.

PFC: All right. There's no other comments. I think it's time to move on to the request for consensus for stage 4 for Temporal.

CDA: Do we have support for stage 4? I support stage four. JKP also says, "Strong support. Thank you all for years of amazing work." DLM, enthusiastically support. API, plus 1,000, thank you, everyone. I also have enthusiastic support. I just want to elaborate on that as well. Mine seems lackluster in comparison now. MF, plus 1, stage four. DJM, plus 1. LVU, plus 1,000. Yay. Celebration emoji. JHD, plus 1. CZW, support. Node.js plan support of Temporal in v26 in April. Oh, did you want to speak? Or is that we're good? Okay. JSL, plus 1. Ruben, definitely support. NRO on the queue.

NRO: Yeah. Should they already commit to discussing, let's say, March 2027 because of having it in a single spec to see if at the point we want to we see, "Okay. Actually, there is nothing happening for Temporal. So it's fine." Or whether at that point we want to decide to split. Just to make sure, even if everything is fine, we somebody's responsible for coming back and say, "Actually, everything was fine."

CDA: Sure. Do you want to take that action?

NRO: I'll put it on my calendar, hopefully that works.

CDA: Perfect. We can put it on the TC39 calendar. RPR, with plus 1, after eight years, this is a great day. I think it's more than eight years, RPR. ZB, plus 1, proud to witness. Do we have any objections to stage four? Any dissenting opinions, people that really don't like Temporal, really love Date object instead?

PFC: Well, if you put it like that.

CDA: Do we have any Date stans in the room or on the call? Hearing nothing, seeing nothing. I believe you have stage 4. Speech!

PFC: Yeah. Thanks for the overwhelming support and the plus 1,000s. And I just want to take a moment to highlight all the people who have been in the champions group as well. It's really been a pleasure working on this with you all. And yeah, it's been a great journey. And I'm glad that we're here. And well, like I said, we're not disappearing. So we'll pick up the odd thing from time to time, I think. I had another slide in case there was something else coming out of the editor discussion that we wanted to request consensus on. But I don't believe there is. At this moment. But we will follow up with this, I guess.

CDA: Yeah. Sorry. I don't have the queue open. So I don't know if anybody's saying anything. But I feel like I would object to anything simply on the basis of it not being explicitly called out on the agenda. So whether that's the new TG, whether that's splitting off into a spec, a separate spec, whether it's assigning a dedicated editor's group, etc. I think all of those things require more explicit and advanced notice.

PFC: All right. Then just to close it up, I wanted to share some statistics with you all because I thought it would be good to close on a lighthearted note. And maybe it says something about me that I think statistics are lighthearted. We got 12,000 lines of spec text in ECMA 262 for Temporal. In ECMA 402, we are adding 1,600 lines. I took a look at some of the history in the proposal repo we've merged almost 2,000 pull requests over the years. We've had almost 200 champions meetings. I did this by counting the number of ones that were in the minutes. So there's probably some others from the very beginning that weren’t in there because I think the minutes document started 2018. I made a total word count of champions meeting minutes, and that's over 200,000 words. And just for scale, that is two to three average-sized novels and then this last one, you can calculate using Temporal how many years has it been since Maggie's kickoff blog post, which happened on April 9th, 2017. And you can calculate until the `Temporal.PlainDate` of today. And we want a nice human-readable figure. So we'll choose largestUnit years and smallestUnit months. And we'll format that in my locale. And you get eight years, 11 months. So it's been quite a road. Thank you all. And I'll give us five minutes back.

CDA: So I'm on the queue with Temporal getting to stage 1 on March 23rd of that year.

PFC: Oh, stage one. Okay.

CDA: Who here was on this committee in March of 2017? How many do we have? Less than 10. We have five, maybe six?

AKI: I joined two meetings later when it hit stage two.

CDA: A couple. I know there's a couple on the call. WH was here.

WH: I was on the committee.

CDA: Do we have an attendees list on this thing? We do. WH was at that meeting. MF was at that meeting. DE, SYG, MLS. I'm skipping over the people that are no longer in the committee. MM was at that meeting. LEO, ZB, and BE was at that meeting. Istvan was at that meeting. All right. Sorry to hijack your well, I guess you were done. So I'm hijacking.

PFC: Yeah. Yeah. Done.

CDA: Okay. Well, I don't think we have another topic for the next that we can slot in for the next eight minutes before the break. Do any of the Temporal folk want to say a few words or anything? Not to put you on the spot. I see JGT has arrived just in time for his speech.

SHN: Can I just say a few words? I didn't put my JGT, did you want to say something? First, you need a mic. You need a mic.

JGT: I just want to say thank you to everybody. I mean, I'm working on this for maybe five years or so. Maybe a little longer, maybe six. And I've been in the tech industry for a few decades. I've benefited a lot from the tech industry. And this was my opportunity to kind of give back to a group of people and a collective industry that's taking care of me and taking care of my family. The topic that we're working on is something that matters a lot to me. And it's just gratifying to be able to have all of you and especially Philip and the other champions give me the opportunity to do this. And I was talking about it with Chris last night. And I realized that this thing is probably the biggest impact to the world of anything that I will ever work on in my career. And I did it completely for free because I was interested. And it was fun. And I think that's really the beauty of open source, right, that all of us can do these things that affect so many people. And we're not really doing it to get rich. We're not really doing it to get anything special. And I just think that's great. And I'm so pleased that we've all had the opportunity to do this. So that's it.

SHN: I just wanted to congratulate everybody at the committee, the champions, the dedication, the persistence that you've had over the last eight years and 11 months. I thought it was 10. But 8 and 10, that's not far off. You've got an epic novel. I need to think of a title for your epic novel as you said. I love your statistics. I love your statistics. It really puts some perspective on what's happened over the last years. You could go back to the slide because I don't know if everybody saw it. And that's really quite impressive. Everything has 1,000 next to it almost. So congratulations. That's all I want to say. Congratulations. It's important for you. It's important for the committee. It's a huge milestone for ECMA. And we thank you for your work.

AKI: SHN and I have been discussing this for weeks now, how we were pretty thrilled about this hitting stage four. And we wanted to just make sure that we set our congratulations. Thanks, SHN.

SFC: Yeah. I guess I believe my first meeting of TC39 when July 2018 was perhaps the one where a Temporal reached stage two. And that was in Seattle. And MPT and the others were there. And I'm really happy that I was able to be involved with the champions group. I'm very happy that this committee was receptive to the idea of supporting non-Gregorian calendars in Temporal. I know that this has always been very important for the Intl working group. And I think that we've really done a lot to raise the bar across the industry for how we do dates the right way. I think that when other programming languages, other standard libraries of other independent projects have added dates and times to their language, to their programming languages, every time it's done, it's gotten better. And I think that I've already seen Temporal be the basis for datetime libraries in Rust and in other platforms. So I really do think that we're moving the bar not only in JavaScript but also across the whole programming industry. So this has been a really this has been a really rewarding time that I've been able to work with this committee on the Temporal proposal. And I'm really excited at this watershed moment to see that it's finally reaching stage four. It's a very big milestone.

JWS: Yeah. I won't repeat everything that's already been said. Yeah. I echo all of that. Yeah. I've been on Temporal since I think 2018. Yeah. It's been great working with everybody on it. I've learned so much about dates and times more than I would probably ever want to know. But no, it's been great. I just wanted to add thanks to the temporal_rs devs Manish as well, who's not I don't think he's here. But also Kevin Ness, who is on the call. He was able to join. And Jose Espina, they have been really enthusiastic about Temporal. And they have been working on it for years now. They are not part of a large organization. They are just open source contributors who are just very enthusiastic about the proposal. And they've managed to help us get a full implementation from what PFC showed earlier for V8 and Boa. So I just wanted to give them a shout-out too.

PFC: I'm actually struck by the number of people that we got from the community showing up to help. So Justin was one. Adam is another who just decided to write a Polyfill and showed up with feedback that was really helpful. And this has happened over and over again over the years that I've been working on this. So I think this really shows that the topic is kind of alive in the community, which is yeah. I'm really thankful for all that help. And yeah. Glad that we could do this.

CDA: Yeah. I think it's fair to mention ABL as well.

PFC: For sure. Yeah. I always forget that ABL doesn't work for Mozilla. He's somebody who does Mozilla stuff because he loves to. Definitely gets a shout-out.

CDA: Thanks, everybody. I'll do one last thing to mention. James, I think, had opened an issue in the node repo for Temporal and shipping that node. So maybe we can get the loop closed on that.

JSL: Node 26 should be shipping Temporal.

CDA: All right. That brings us to our break. We'll see everyone back here at the 45-minute mark. Thank you.

### Speaker's Summary of Key Points

* Temporal has several implementations in use already, including two in major browsers which both pass >99.5% of the ~5k conformance tests.
* The conformance tests in test262 are extensive, and we used a snapshot testing technique to find implementation divergences in order to build more test cases.
* We won't block stage 4 on web platform integration, but delegates are encouraged to think of use cases for any web platform integration problems they'd like to see solved.
* We discussed putting Temporal in a separate specification document and/or chartering a separate TG to maintain it. The committee gave feedback on this idea which was generally not in support of taking either of these actions.
* Based on the kinds of ideas which have been raised as future improvements for Temporal, we expect any follow-on proposals to be small and self-contained, and there are no plans to champion any at this time.
* The ECMA-262 editors remain concerned about safeguarding access to subject matter experts on topics such as Temporal, but also other existing parts of the spec such as the RegExp grammar.

### Conclusion

* Temporal advances to stage 4.
* At this time, Temporal will not be put into a separate specification document.
* At this time, no separate TG for Temporal topics will be created. We will follow up within 1 year to see if current assumptions still hold.

## Import Text for stage 2.7 or 3

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-import-text)
* [slides](https://docs.google.com/presentation/d/1mbkpHjqihHBx6rp07Snb8uB8XevJk7jz2xPSyQppSjE/edit?usp=sharing)

EAO: This is import text for which I'll be looking to seek stage advancement if possible. The very short review of what this is is about adding a new text value for the type import attribute and if you do that, then you end up importing a file as a string value. And this got to stage two at the last November plenary, and it's good to note that this is not just an ECMA 262 proposal. To affect the changes as a whole, a lot of the spec text for this actually ends up being in the HTML standard and there are small pieces that also go into the Fetch standard as well as into the Content Security Policy definitions. And I've submitted PRs for all of those. And have gotten some feedback from those. That's been taken into account into those specifications parts of this.

EAO: And there's also testing available for import text in TC39 test262, but also in the Web Platform Tests there's a test suite PR for import text. And effectively, this is already available unconditionally in Bun. And in Deno, you get support for this when you run it with `--unstable-raw-imports`. I'm not aware of a browser implementation yet for this, but would be very happy to be corrected on that.

EAO: This did not get 2.7 at the last time when I presented this, mostly because we ended up discussing quite a bit the concerns that SFC raised about representing non-textual data through this API. And so after some work, there is now an open PR that would be affecting a change that SFC at least has indicated previously that he would be happy with as a change to the TC39 parts of this spec to have it go forward and become a thing.

EAO: The proposal as a whole is adding this new CreateTextModule abstract operation and the proposed change to the proposal here is to add the highlighted specifier here that the input source is a string value that should represent textual data. Which is hopefully sufficiently clearly crafted to kind of match what is required to satisfy everyone around us. So specifically, the term “should” has no normative meaning in our specification, as indicated by other examples of “should” that I found in the spec.

EAO: As opposed to the expression “is expected to,” for instance, that seems to be correlating in the spec much more with expectations that cause an error to be emitted if its expectations are not fulfilled. And then also the phrase “represent textual data” is something we already have when we are defining what a string is. The quote here is literally from the existing spec that the string type is generally used to represent textual data in a running ECMAScript program. And so I would like us to be able to merge this PR and I'm seeking support from people on the call for this.

NRO: Yeah. I reviewed this PR. I am personally fine with it being merged. Because I don't think it causes any problems. I, however, also don't think it's really useful for its goal. The original problem was that we wanted a way to tell hosts to not use the wrong encoding algorithm when encoding whatever source they have for the string that will give it to us. And it's really not something that our spec has any say on because we do not deal with the actual way that the data is stored before giving it into ECMA 262. So a proper spec change that would move towards this goal would need to happen at different spec. I find this text here meaningless mostly because as you already said, the definition of a string type already says it represents textual data. I believe our definition of textual data is just literally any text, literally any sequence of code points. But yeah, if it's what we need, it's not harmful.

SFC: Yeah. So this particular language emphasizes that we want the strings that the hosts give us to be of textual content. Which I think is important and which I think is important to show the provenance of those strings. In the repository, I use this language, good strings and bad strings. Where good strings are ones that contain text that contain Unicode text, Unicode code points. And bad strings are those that contain unpaired surrogates and other arbitrary binary data replacement characters and so forth. And I think that this language is a small step in the right direction. I would prefer something stronger. But also I think that it's not clear that there's a path to get something stronger in 262. I think that 262 saying that we want these strings to represent textual data is already good and being more clear about that is already a good step. So to address NRO’s point about it doesn't make a difference. I think that the existing definition of the string type says that it—can you go to the slide that shows the existing tech that the existing spec? It says that it is generally used to, right? Meaning that the spec explicitly says there are good strings and bad strings. It is generally used to represent textual data. But not necessarily. And then in the pull request, we are saying that we want the strings that the host gives us to be of the class of strings that are good strings. And I think that's what the impact is of this language. And it's a step in the right direction if it's something that we can agree on as a committee, then I think that that's progress.

EAO: I don't see anything on the queue here. But JHD, you're the other spec reviewer for this. Would you be fine with PR #10 being merged for this JavaScript?

RPR: I don't see JHD in the room. Empty desk. Empty chair. So I don't think you'll get a response to that, EAO.

EAO: That is a little bit unfortunate. I would like to be asking for stage 2.7 after merging this. And I think it would be good to get an explicit agreement from the other spec reviewer for this.

RPR: We're sending people out to hunt him down. It's probably in the bathroom.

EAO: Thank you. I also don't know how it works, but given that we've previously agreed to have JHD as our stage 2.7 reviewer for this, do we actually need explicitly his support for this? Or can we ask somebody else to also be a stage 2.7 reviewer and advance based on their appreciation of this text?

RPR: I think we're not under such time pressure that we need to make that call in the next five minutes because we could return to this later in the meeting.

EAO: Okay. I mean, just noting once this is resolved, I'll be asking for stage 2.7 and immediately after that, asking for stage 3. So if anyone has any concerns about stage advancement or any issues around those, those might be discussed now. But I'd be very happy if the queue remained empty because nobody hopefully has any concerns about such a thing.

RPR: The queue remains empty. SFC is on it.

SFC: Yes. And it seems like we have time. I just wanted to get a temperature check from the committee on this question. I think this spec change helps us get toward that direction. But I think without this change, it's certainly conformant. With this change, it's maybe, maybe not conformant. Not entirely clear. On whether you can import, for example, a JPEG file or anything else, a WASM file, whatever you like, as text. With typed text, import typed text. As of the my understanding is that and EAO can correct me if I'm wrong that the current that the previous attempt or intent is that if you do try to import a WASM file or a JPEG file, as typed text, what you get back is a string that has that takes the binary content of the JPEG file pushes it through a UTF-8 decoder to which most of the string is replaced with replacement characters. And then you get a string. And that seems like behavior that ideally we wouldn't have in JavaScript, especially as we're moving more in the direction of being more strict with things, with various types, it seems like that's a case where if I tried to load a WASM file with import type text, I get an exception. Not a string with a bunch of replacement characters.

EAO: Around this that I understand you to be describing is not actually in the JavaScript spec at all. It is it would be most directly in the HTML specification which currently would define the behavior of where the image or whatever that you describe would have most of its contents replaced by replacement characters effectively. So this is the and again, this is not a consideration directly for this group. It's a consideration for the HTML group.

SFC: I disagree. I disagree with that. I believe that the HTML group doesn't care about strings representing textual content in JavaScript. They care about they care about cases for have you loaded the file that exists or the permissions correct? Are the paths correct? They have a lot of problems like that that they worry about. They worry about the integration with the DOM. They worry about a lot of different problems. What they don't care about is strings in JavaScript represent text. And ArrayBuffers represent binary data. They don't care about that distinction. That's a distinction that we care about in TC39. We care about you should load JPEG files as ArrayBuffers. You should load JSON files as strings. That's something that we care about. And that's why I think that the can you go back to the PR #10? Well, it's went away now. The spec change. Yeah, that one. Right? That's why I think that this language is in scope for 262. Because we were telling hosts don't give us bad strings. Give us good strings. That is definitely in scope for TC39. It's not in scope for HTML.

EAO: This amount of language is entirely within the scope of this group, yes. But going beyond this, to define the behavior that, for example, the HTML standard will define, is not in the scope of this group's considerations.

SFC: Yeah. My main concern with this pull request is that it doesn't really say it doesn’t really tell HTML clearly enough what we would like them to do. But again, it's a step in the right direction. And I believe JHD’s back in the room, so we could also go back to the question you were asking before.

EAO: Excellent.

RPR: Just before we get to that, I think there's a continuation from DLM. So let's go to Dan.

DLM: Yeah, sure. Just briefly, I was wondering if you could comment on the current status of the HTML integration pull requests.

EAO: It's there. It's had some discussion on it. It's currently, I think, mostly waiting for us to proceed. Overall, my understanding of the sentiments around this in the HTML group is relatively positive. And I've not heard any concerns from the Fetch or the CSP changes either. Mostly, it's just waiting for the JavaScript parts to advance a bit beyond the current stage 2 so that it becomes more appropriate for HTML to have a valid opinion about the whole thing. And also the very specific spec language, whether to go with what's in the PR at the moment or something a little bit different.

EAO: JHD, You're one of the stage 2.7 reviewers here. And the question here is, it would be if we were able to merge PR #10, this would effectively unblock our stage advancements to 2.7 and beyond. And the thing that 2.7 adds is this clarification to the create text module AO that is added in this proposal specifically that the source string is described as a string value that should represent textual data. And here, specifically, the term “should” has no special normative meaning. And the phrase “represent textual data” is taken from our existing string description. So my ask for you, JHD, would be, would you be fine would you be would this be acceptable to you to merge this PR in advance?

JHD: So yeah, definitely. And I just stamped the PR. The only comment I think I wanted to add on record, which has nothing to do with the 262 spec, it's that I wish that the web wasn’t going to be sending a different MIME type with import text and import bytes. I don't think it should be possible for a web server to choose to send different information whether you request it as JavaScript or as text or as bytes. I think it should be transparent so that you can only ever send the same thing. But I don't get a vote there. I just wanted to record that opinion. The 262 spec is great with this PR or without. And I'm happy with the PR.

EAO: I would encourage you to ensure that that comment is recorded also as a comment on the HTML spec PR.

JHD: I believe I have commented on, if not both, on one of those two proposals I mentioned on the HTML PRs. But that input seems to be ignored.

GB: On this topic, the error for non-textual data I see that we specify in the host hook that there's an error for that it can return an error. But would it be worth specifying the type of throw completion or text when it's non-textual data? Like syntax error or type error or something like that to more specifically define what should happen in this case?

EAO: I believe this is in the HTML standard. Because that's where the error would get thrown.

GB: Right. But specifically, what error type would it be?

EAO: I'm sorry. I don't remember that off the top of my head. I'm looking it up now. Wait. Sorry. What is the condition? Because I think, actually, in the HTML standard, there is no error for this. In the current PR for the HTML spec.

GB: So am I understanding correctly that the wording change here does not have a corresponding HTML spec change to add a new error for any non-textual data types?

EAO: Correct. The PR for the HTML spec currently is proposing to parse any input that is requested as text as UTF-8. And then to use replacement characters for any non-character parts of that.

GB: Right. Well, I guess my suggestion would be to amend this change to also note what type of error should be thrown for non-textual data. And we can at least decide if it's a syntax error or something else. Just a suggestion. But it might be beneficial. Well, if it's a host-defined property, we could still define what the host should do in that case.

RGN: Yeah. Question for JHD. You mentioned servers sending different MIME types. Can you explain what's going on with that?

JHD: Yeah. So this type of question has come up before with dynamic import. And with that one, I think there was no way for the browser to mandate that a server send the same content for two requests that are in parallel. So if you kick off two dynamic imports for the same specifier, it's possible for a server to send two different modules down. And so we put wording in the spec that says don't do that. But there's nothing mandating it. But in this case, by and that's still the case here, right? If you kick off an import, two different dynamic imports, one of which is bytes and one of which is text at the same time, a server could similarly send two different responses just randomly. And there's nothing we can do to prevent that. If a server can distinguish between what import type you're using, then they can choose to send different stuff. For example, a server could deny you the ability to import JavaScript as text or bytes and say, "No, it's only as JavaScript. Only when the MIME types this and when the MIME types something else, I'm going to 404 or whatever." And I don't want that type of ambiguity to be possible. I want the server to not be able to tell the difference between a request for a JavaScript resource.

RGN: Okay. So specifically, what you want then is for the HTML spec or possibly the Fetch spec to mandate the Accept header field value in the outbound request such that they are not distinguishable?

JHD: Correct. I believe.

RGN: Okay.

JHD: Yeah. I want to deny the servers the ability to differentiate because there should be no reason for them to do so.

RGN: Okay. But you're not talking about server behavior at all in that case. The HTML spec would have to clarify that the outbound request is indistinguishable.

JHD: Right. Because then that obviates servers from being able to have different behavior.

RGN: All right. For the clarification. I get it now. Thank you.

MF: So I apologize. This is logged as a clarifying question. I had no way to reply to GB’s topic, which was also submitted as a clarifying question. So I'm going back in time now to try to respond to that. So what error are you talking about? Where is an error?

EAO: That was effectively my answer. There is no error here.

MF: But I think your answer was we don't know what error HTML is specifying. But there's no error anywhere. Where is an error?

GB: There is an error specified for the host load imported module hook—let me pull up the spec here. So basically, if when returning text, when the host load request type is text, FinishLoadImporting module must be called with a completion record. That is either a completion record or a throw completion. I was under the understanding that this addition of creating a synthetic module record whose default export is source a string value that should represent textual data implied a case where non-textual data would error. Is that?

MF: I see. Okay. So I'm just yeah. So you're talking about in `HostLoadImportedModule`, that step three that's in the spec where it says the throw completion. You're asking about that throw completion right there?

GB: Yes.

MF: Okay. And you're also saying that that throw completion you think is associated with the wording in CreateTextModule?

GB: Well, I don't understand how else the wording could affect behavior.

MF: Okay. So okay. Okay. Thank you. That was what I was wondering.

SFC: So I haven't heard anyone pushing back against PR #10 on the screen. So if we assume that we're okay with PR #10, then I wanted to see if we're okay with maybe an even stricter version of PR #10 replacing the word should with must, for example. And perhaps also being a little bit more explicit about what we mean by textual data. Textual data could even go into modifying the existing string definition in 262. Which is saying, for example, a sequence of code points of human-readable syntax, which allows JSON, allows most other human-readable syntaxes. It allows regular human-readable strings. The intent here is to disallow WASM and JPEG files and explicitly binary non-human-readable syntaxes. This word this language, human-readable, is used in other programming languages to talk about what a textual string is supposed to mean. So I wanted to see about that. I see a reply from RGN.

EAO: NRO, I think your comment is effectively a reply to this.

NRO: Okay. Yeah. So we're talking about whether we should recommend HTML to throw and whatever. But HTML editors already made it clear that they do not want to throw here that since many years ago, the web platform decided to go in the direction of just assuming the text is UTF-8 and just coding things as if UTF-8. And giving garbage out if somebody's probably not using UTF-8. And new APIs have been designed like this. Fetch is designed like this. So HTML made it pretty clear that they do not want the extra restrictions we're discussing about.

RGN: Also at our level. As I mentioned, I would push back strongly. In no small part because I don't want to fight over a normative definition of what it means to be human-readable.

KM: Yeah. I mean, I would also push back on that. It's pretty ambiguous. I don't know what that means. And it's also yeah. What if I have some crazy programming language that looks like a JPEG, but actually is not but actually or something weird? You could argue maybe that's not human-readable, but maybe there's someone who can read that. I don't know. I don't know what it means. I don't want to get into the weeds of what human-readable means, I guess. To summarize that last sentence that I forgot.

SFC: Yeah. Just to so push back a little bit on some of this, which is that the comments that we got from HTML, my understanding is that they were about when we were talking about, "Well, what if you're loading a file that's UTF-16 and it has a content type that says it's UTF-16 and you're still pushing it through a UTF-8 decoder? That's wrong." Yes, that's wrong. That's something that we have very little control over in TC39. I agree with everyone on that. I can respectfully disagree with W3C's choice to ignore content type headers. I think that that's a silly choice. And that's a problem we should bring up with HTML. I don't think there's a lot we can do in TC39.

SFC: The question about human-readable versus binary strings is, like I was saying earlier, is something where I do see it to be in scope. And just if you do have your funny programming language that looks like a JPEG file, you won't be able to import it with import type text and have it actually be something sensible because it'll have replacement characters. Replacement characters are just a very bad way of us returning an error. We have better ways like exceptions. If you have to do a replacement character, you get an exception. That seems like a much cleaner approach that informs programmers early on that there's something that was going wrong. Rather than delaying this problem I think that there's a lot of cases where replacement characters make sense and are the right tool for the job. But when we have the ability to take and import and say, "This import is not a valid human-readable string," I think that is something where as TC39, we should do more and we can do more. To enforce this.

RPR: That's the end of the queue.

EAO: I think then what I'm going to do is, MF made an editorial suggestion to to the PR that I’ve now incorporated, to say now that “a string whose value should represent textual data”. And as I've not heard any opposition for this, I'm now merging the PR to now be a part of the proposal, and so I can advance to this slide. With that spec text, can I have stage 2.7?

RPR: So we do have support. From JSL and NRO. Is there and from CDA. Is there any opposition? And support from MF? Is there any opposition to stage 2.7? No opposition, so congratulations. EAO, you have stage 2.7. And I will also note extra support on the queue from RGN and JHD.

EAO: Excellent. And my next question is, can I have stage 3?

RPR: That's right. Okay. I'm just clearing the queue. So that we're not confused about what is.. I apologize, oh, I think SFC had a question: What are the nature of the tests?

SFC: Yeah. I had a queue item that went away, but so for the stage 3 question, one of the questions that I'm would like to see is now that we have this new language, I said stage 2.7. I'm not exactly sure if you can help me a little bit, EAO, and sort of go over the nature of the tests that you've worked on. For this proposal, given that 90% of the proposal is not in 262, how are you testing this and what kinds of tests are you able to write for it?

EAO: So the test262 tests are mostly modeled after what was there for imports with type: ‘json’. And effectively, matching how we exercise that, as the new language that we are proposing for 262 is a subset of that. There are a whole bunch of different parts of exercising this. And there's also a test validating that if you for example, import something as text and then you import it as JSON, you get a different module for that. And similar.

SFC: So is it like in scope for us to test the behavior around textual content? Or is that not something that's possible to test in test 262?

EAO: It's not possible for us to test that in 262.

SFC: So in test262, where we're able to test the module graph is well defined and those types of questions. But we're not able to test you have a the example before. You have a WASM file and you load it with import type text. And something should happen. We're not able to test that in test262, but we are able to test is the module graph valid? Is that the kind of does that correctly describe?

EAO: Yes.

SFC: Okay. And for example, in import type JSON, are we able to also validate that if you try to load a non-JSON file, then you get an exception if you try to load a JSON file, then you don't get an exception. That's also something that's not able to be tested in test262?

EAO: No, we can test that because we are doing the JSON parsing in 262.

SFC: Because we do the JSON parsing in 262. Okay. I'm a little worried that we're deferring so much to HTML when we know that HTML is trying to do something that is harmful for JavaScript. But if we're not able to test it in test262, then I don't see a reason that we can't go to stage 3.

RPR: CDA eventually wrote some valid code that says if(entranceCriteria.met) { me.supports(Stage.THREE); }. Right. I saw the iterations.

PFC: I haven't been to it involved in the questions about what can be tested from this proposal so far, but I was wondering if you had web platform tests for the parts that can't be handled cross-engine in test 262. So for example, I'm assuming the HTML integration part of this is going to say something about how bytes are decoded into text.

EAO: Yes, it does. And yes, there are tests in the web-platform-test PR for that.

PFC: Okay.

RPR: So the queue is empty. Would you like to ask?

EAO: I would like to ask for stage 3.

RPR: Okay. Is there any support for stage 3? We have support from JSL, and NRO. Are there any objections to stage 3? Nope. So congratulations, EAO. You have stage 3.

EAO: Excellent. Thank you very much. That's it for me.

### Speaker's Summary of Key Points

* The import-text proposal is adding support for a new type: “text” import attribute.
* Its PR #10 is the only open issue, adding some language describing the input of the CreateTextModule AO added by the proposal.

### Conclusion

* PR #10 was merged, after some discussion on its specific language, and a small editorial change suggested by MF
* The proposal advanced through stage 2.7 to stage 3.

## Intl Unit Protocol for Stage 2

Presenter: Shane F. Carr (SFC)

* [proposal](https://github.com/sffc/proposal-intl-unit-protocol)
* [slides](https://docs.google.com/presentation/d/1ECuRD0MU6-Z5DzBJaOi5W3u7f2kf_PZYZU9cXjg5Ock/edit?slide=id.p#slide=id.p)

SFC: So Intl unit protocol for stage 2. So I've been calling this proposal Intl unit protocol. Nicolo suggested that maybe I can consider renaming it. I have a slide about this. But I'm asking for Intl's unit protocol for stage 2. But alternatively, Intl number format options for stage 2. So let's go ahead and move on. Can I have a handheld mic for this? It's kind of hard to talk through this. All right. It's much easier to hold the handheld mic. Cool.

SFC: So the background is that numbers ought to be annotated with the quantity they are measuring. And this unlocks items and features. Such as automatic unit conversion. So for example, you might have a message in a message format string. Either in a built-in message format or in a userland message format. Where you want to, for example, display road distance. You might have a placeholder for this. What do you put in the context of the distance field in the format function call? As it turns out, we have ways to pass in dates. We have ways to pass in basically everything else you might need to format except we don't have a way to pass in a number paired with a unit. So as a step in this direction, the proposal is to make the format function be able to take in options bag of a specific shape. So the shape currently what you can do is what's written on the left here. Where you have a style and a unit in the constructor and a value in the format function. Now we can move the value or the unit from the constructor into the format function. And put it in an options bag that gets passed to the format function. I'm highlighting in orange the word value is changed in the stage 1 presentation. I called this number. Now I call it value to emphasize that this can take a number of big and/or a string. Or in the future, a decimal. So I have this slide here. To discuss the difference between options bags and protocols. So when I say the word protocol, what I mean is a well-specified means of passing data to an API. And when I am throwing around the word protocol, I did not coordinate that with the first-class protocol's champions. Who will probably be trying to actually give a definition for what a protocol means in JavaScript. As of now, there is not an official definition. So this is the definition I'm using for the word protocol. Protocol shapes could take various different shapes. It could take a thing that has string-named functions. Thenable is an example of that. It could be symbol-named functions. It could be just a string. A protocol could be like a string of a specific syntax. In this case, I'm doing it in an options bag. Which is an object that has fields. Those fields could be getters. So they could still run code. So this is a specific shape of a protocol. So we considered these other shapes. We don't always take options bags and Intl constructors because we expect that those call sites are used in such a way that these are basically additional arguments and they're largely always going to be in line with the call site. Whereas with this, I'm using the word protocol because we fully expect that this protocol will be implemented on user-led types, on proposals like the amount proposal. So it's important that we think about, well, it doesn't have to be fields. It could be any other shape of a protocol. But we decided to use to still use fields because you can implement it using getter functions if you need to. If you're on a class. But it also is ergonomic to use if you're not using a class.

SFC: So just an open question. If people have thoughts, I'll loop back to this at the end. I'll go through the whole presentation first. But proposal name, we could call it Intl unit protocol. It's concise. Problem-focused. Or we could call it Intl NumberFormat options bag. It's wordy and solution-focused. Now at stage 2, we sort of agreed on this is the direction we want to go. So we could rename the proposal. I'm going to continue using Intl unit protocol though for the rest of this presentation since that's what was on the agenda. All right. Let's continue moving on. And I'll take questions at the end.

SFC: Amount versus Intl Unit Protocol. So a question we have is, why is Intl Unit Protocol its own proposal? The problem space is sufficiently separable with different questions and different trade-offs. We felt that the proposals are independently motivated and we can discuss the design questions independently between the two proposals. Some people have asked me like, Shane, you're proposing Intl Unit Protocol. Do you see it as an alternative to Amount? No. The impact of Intl Unit Protocol on Amount is that the Amount proposal will have the getters listed on the previous slide. These getters will be how Intl number format reads from amount. We're specifying in some sense a shape of what a polyfill of amount could look like. When it's plugged into Intl. But these are two separate questions that have enough independent motivation and enough independent questions to be answered that we can talk about them separately.

SFC: All right. So another change in stage 1 is that currencies are handled as units. So the protocol takes a key named unit for both units and currencies. In the stage 1 proposal, currencies were passed using the currency key. They're now passed using the unit key. But the unit must be 3 uppercase letters in order for Intl number format to actually be happy with it as being a currency.

SFC: Conflicting units. This is also a change since stage 1. When I presented this in stage 1, I thought, obviously, we should throw an exception. I don't see anything else we can do. I got some feedback from the committee. We went back, discussed in TG2. And this comment from EAO is what we ended up adopting. I'll just read it out. It says, the value that's used as the format argument ought to be defining what we're formatting while the constructor ought to define how it's being formatted. Therefore, conceptually, the examples above are asking to format a value in kilometers using meters as the input as the output unit. Either we can do that and convert or we can't do it and range error. So TG2 looked at this and decided to adopt that position on the question.

SFC: So what does that mean? It means we'd like to convert. However, a principle that we have in TG2 is we do not add any more functionality that incentivizes programmers to parse localized output because if we were to implicitly start doing the conversion, then people are going to be using Intl to do conversion and then look parse out the numbers in the output in order to get the converted result. This has bitten us multiple times in the past. Time zone conversion and calendar conversion are two examples where I can point to popular libraries and other websites that do that when they didn't have access to Temporal used Intl APIs to do their time zone conversions for them. This was a mistake that we do not want to repeat. Which means that in order for Intl Unit Protocol to do the conversion, we must expose a programmatic conversion API which is the Amount proposal. So procedurally, the proposal in front of you today throws the RangeError. When Amount reaches stage 2, when both amount and Intl Unit Protocol reach stage 2, we will tweak it to do the conversion. And I don't intend to advance Intl Unit Protocol beyond stage 2 until we resolve that issue. So again, it's two different proposals and they will synchronize once they're at stage 2. That is the current proposal for how to do this procedurally.

SFC: Another slide just to highlight, again, a construction versus formatting. We people might ask like, well, why didn't you just do this from the start? There's two reasons why constructor options are still a good choice in some cases. One is that the formatter well, for why you want to pick what goes where. The formatter encapsulates the locale and formatting options whereas the locale data can be loaded and initialized ahead of time in the constructor. So this proposal helps us get a little bit more toward goal 1 with a construction versus formatting which is that we're doing a better job of passing in locale and formatting options to the constructor as well as instead of passing in formatting options, data in the format function. So we're getting closer to goal 1. But we're regressing a little bit on goal 2. Because previously, we could preload the symbols for outputting a certain unit in the constructor. But we're no longer able to do that all the time. We have to have more data available in order to obey the formats unit. The unit that goes into the format options. It's not zero impact. We can minimize this for example, if we take the approach of doing automatic conversion or throwing an exception. If there was a unit specified in the constructor, we don't have to load any other unit formatting data. That will help us with getting toward option 2.

SFC: All right. And I also wanted to add a slide here about extensions to the protocol. So I just wanted to highlight that the fields we currently have are sufficient for the cases that we're looking at. But we could in the future consider extending it to do things like rational numbers and other precision styles like margin of error. By having a protocol here, we have room to think about representing these other types of numbers and ways that numbers can represent themselves to an Intl API.

SFC: Spec text is here. I can go ahead and open that. I will note that although the spec text has been in the repo since March 1st, it was not rendered on GitHub pages until March 10th. And I apologize if you tried to look for the spec and weren't able to find it. If there's anyone here who's like, I needed more time to review the spec, I'm sorry SFC. I'm sorry that GitHub had problems. But I really need more time to review the spec. I totally understand. And I'll just bring this back to May. But I just wanted to go ahead and open that. I can share the spec text. This is what it looks like. The way I did it was I added a new abstract operation called GetNumberFormatInput that does the stuff involving reading fields of the input options bag. I made that a separate AO from get Intl mathematical value. So get Intl mathematical value is now still exists as its own operation. But there's a new one that wraps it. And then the various different formatting functions take the instead of taking just a mathematical value, now take the record and pass that down through the stack. So I don't intend to walk through the whole spec text and the slides today. But if you'd like to browse to peruse it, it is now rendered and available on GitHub pages.

SFC: All right. That was the end of my slides. I'm open for feedback. We can go through the queue. And then I'd like to ask for stage 2.

USA: So first on the queue, there's NRO.

NRO: Yeah. I did not understand why we need to block stage 2.7 on Amount. It feels to me like even if we keep the range error all the way up to stage 4, then we would still be able to change it to not being an error. Like after it ships, that's generally something safe to do.

SFC: Yeah. The position that we currently have is that we want to do the conversion and we think that doing the unit conversion here is a better experience for users. And we currently can't do it because we don't have a way to do the conversion that is not Intl specific. That doesn't involve parsing localized strings. So we would like to do the conversion. We think it's a better proposal if we do the conversion. And avoid the RangeError when possible. So while you're correct that we could advance it to stage 4, having a RangeError all the way through, that is not the desirable outcome.

NRO: Okay. I personally still see the value in this proposal even without the conversion. But yes, I understand your position. Thank you.

USA: Okay. Next, we have Kevin on the queue.

KG: What is the actual protocol?

SFC: I can show you on the repo. I can show you in the spec. Like I think this is the slide you're looking for? Yes. It's an object that has two fields. We read the fields using the get operation. So we get the two fields out of the object. If the format function is given an object, it reads the two fields using the get operation. It reads the two fields. One is called value. The other is called unit.

KG: Is it "value" or "number"? Some of the slides say "number".

SFC: I hope I fixed them all. It's possible that I missed one. This one uses value. Oh, this one still uses number. I'm sorry. I thought I fixed them all. Yeah. It is value. Okay. There you go. Thanks for highlighting that. Fixed.

KG: OK, sounds good.

USA: Next on the queue, we have MM.

MM: So you said that in order for something to be recognized as a currency, it has to be three uppercase letters. In the crypto world, there are many currencies. And there are many currencies that are indirectly derived from others. What is the operational consequence of being or not being recognized as a currency?

SFC: All right. So the currency syntax is fed directly into `Intl.NumberFormat`. And there could be currencies that are not formattable. And those such currencies would have the same behavior that they do today. If you try to pass them in. But all of the currencies that are currently formattable by Intl all follow this syntax.

MM: I see. So the issue is simply whether the Intl specialized formatting can be applied and if it's not recognized, is it equivalent to just being treated as some other unit like feet or something that has but one which is not known by Intl?

SFC: I believe that's the case. But I will triple-check before I go on the record as saying that.

EAO: My understanding is that right now what you would in that case be trying to do is format a number together with a currency using currency as a style with an invalid currency code being given. I can't remember if that's a RangeError or a TypeError that you would get in the behavior. This detection happens entirely internally in `Intl.NumberFormat`. So there is no external API that is provided for inspecting whether a specific code is a valid currency code other than trying to use it with number format.

SFC: Yeah. I just verified that if you pass a currency code that's not of that syntax, then it throws a RangeError. Because it's not known by Intl. So that's what's still happening here. It's possible that we could extend this in the future to support currencies that are not just the three-letter currencies. But as of now, we're just adopting the existing behavior.

MM: Okay. Thank you.

USA: Next on the queue, we have ACE.

ACE: So this isn't like a blocking thing. But it looks like this is a breaking change. Like right now, if you pass an object, we'll coerce to primitive calling like `Symbol.toPrimitive` like value of. Whereas now, the spec immediately goes to only reading the dot value.

SFC: Yeah. I can show where that is. Let's open that in the new abstract operation. Called GetNumberFormatInputs. So if input is an object, then we do the get on the object. Whereas previously, we'd went directly to Intl mathematical value, which ends up calling

ACE: First step.

SFC: Yeah. First step, which ends up calling this. To primitive number. That's right. So yeah. That's correct.

ACE: That feels like a bug. It feels like if the thing doesn't if it's an object, and it doesn't implement .value, then should it fall back to this? Because it feels like this is where this could be a web breaking change otherwise, right?

SFC: Yeah. I mean, that's exactly the kind of question that I would like this committee to look at. What I currently have proposed here is that I pass it into Intl mathematical value if the get of value doesn't if the get of value does not or actually is. So it has to if it's an object, it must have the value field. Right. So that's good feedback here, which is like do we want to instead check for two primitive first? Do we want to check for the value field before we check for toPrimitive? Or do we want to do it in the opposite order? What I have here is, I agree maybe not the greatest solution here. So good to highlight that. This is exactly the feedback that we want to get from this committee.

ACE: Yeah. And to reiterate, I'm happy to talk that during stage two.

USA: And that was the queue. You have a few minutes. Left. SFC, how would you like to proceed?

SFC: If there is no one on the queue, I'll go ahead and back to my last slide, which is asking for stage 2 for Intl Unit Protocol. Yeah. With all the understandings and caveats that we have described so far in this discussion. But I'm asking for stage 2. Specifically, stage 2 means that we're taking an object with an options bag. Those options bag have the two fields of the names value and unit. The unit field has certain requirements about the syntax of the unit for formatting of units versus formatting of currencies. We will discuss during stage 2 whether we call toPrimitive first or whether we check for the value getter first. And we don't plan to progress beyond stage two until we are able to get a solid answer to the unit conversion question.

USA: Thanks for qualifying that, SFC. On the queue, we have NRO first.

NRO: Yeah. As I proceed to, and I agree with ACE’s suggestion of trying to preserve backwards compact for passing an object in there that would be stringified. Maybe if it doesn't have the properties or something like that.

USA: All right. Next, we have KG.

KG: +1 for stage 2, and thank you for doing this in terms of public protocol. I know we'd previously considered reading internal fields. I think reading public properties and having Amount have those fields ends up being a good design.

USA: All right. And next, we have JKP on the queue. He says support for stage 2, but would be good to address possible breaking change. And that's it. So I don't hear any opposition to stage 2. It's been close to a minute since the last thing came up. So congratulations, Shane, on stage 2.

SFC: Thank you. Next in the time box is two more things. One is stage 2 reviewers. I guess that's called 2.7 reviewers now. We used to call them stage 3 reviewers. They called stage 2.7 reviewers. I'd appreciate a couple of volunteers for that.

USA: That'd be amazing. So next, let's open the floor to volunteers. And yeah. Please let us know if you'd like to help. Let's aim for at least two.

SFC: There's the question I'm currently asking. Stage 2.7 reviewers.

USA: RGN has volunteered on the queue.

SFC: It's not a very huge proposal. And it will be a nice little tour of Intl in case you're interested in learning more about the Intl spec. I'm just giving a little pitch.

USA: Yeah. So my apologies. I was not paying attention to the queue. ACE also has volunteered as they have already started, so you have your two reviewers. I would like to remind you that this can be a lot of work. So if you'd like to help out, you can join in later. Or you can just informally review. For that, we checked either the chairs or to SFC.

SFC: Thank you, ACE and RGN, for volunteering. I really appreciate it. The last question since we still have a couple of minutes on the time box is this question about the proposal name. Is there anyone on the committee who's strongly opinionated here, perhaps the first-class protocols people who don't want me to use the word protocol in a proposal name? I'm happy to change it. Otherwise, I'll probably just keep it as the same existing name because it's what is already there.

JHD: So I had had this on the queue earlier, but removed it. The definition you gave for protocols is basically the one that already exists. It's defined by the existing protocols out there, which you listed. Some of them. The only thing that the first-class protocols proposal was trying to do is reify them as first-class objects. And provide affordances API and syntax affordances for them. So that I don't see any conceptual conflict whatsoever. This is a protocol. And if the first-class protocols proposal arrives before or after this one, then it would just create a first-class object for to represent this protocol. So that should be fine.

USA: Okay. Real quick so we can get the rest of the queue within the time box. Next, we have NRO.

NRO: The reason I suggested this name change is because some delegates in the past expressed some uncomfort with having a protocol that doesn't actually have a built-in implementation of the protocol. And also, that's only like using one place that's not really a protocol that's understood across multiple language features. But I was suggesting this options bag name because it I think it more closely reflects what the scope of the proposal actually is. But I have no problem with keeping the current name.

USA: Great. Next, we have CDA. Oh, sorry. Prefer to keep the name if not a strong compelling reason to change. And then we have CM who says simple and clear is better than long and precise. We still have two minutes. SFC, do you want to?

SFC: All right. Based on the temperature of the room, it sounds like I'll probably keep Intl unit protocol as the proposal name.

### Speaker's Summary of Key Points

* SFC presented the updates to the Intl Unit Protocol proposal, including changing the field name from number to value, as well as the currency name from currency to unit.
* The committee is happy with the direction of the proposal and approved the proposal for Stage 2
* In stage 2, we will continue to work on open questions including: (1) the degree to which we should block on conversion availability, (2) make sure that this is compatible with the web.
* RGN and ACE volunteered to be the stage 2.7 reviewers.

### Conclusion

* Approved for Stage 2

## Intl Energy Units Stage 1 Update

Presenter: Shane F. Carr (SFC)

* [proposal](https://github.com/johanrd/proposal-intl-energy-units)
* [slides](https://docs.google.com/presentation/d/1iwknifQLEIA42KIoveoNLrRZlhEitZQ_JTKADP20rMA/edit?slide=id.p#slide=id.p)

SFC: Back from lunch, it looks like most people are back in the room. So I think there's enough people in the room that I'll go ahead and get started with Intl Energy Units update. All right. First, some background. I prepared some more slides on this on exactly how we have arrived at the measurement units that we currently have in Intl number format. ECMA 402 contains 45 units of measurement. You can see the link to this in the spec, and I'm going to walk through them right now, how we ended up with what we have. These 45 units were chosen based on a judgment call on TC39's judgment on the motivation either of the independent unit or as being part of a common usage pattern.

SFC: So independently motivated units. I have started the list starting at number one. These are units that we included because we felt that they were independently motivated. 1 through 8 are all the units of duration format. I don't need to read those all to you. Those are the eight units that we need for duration format. Those were included. Numbers 9 and 10 were because we decided to include units of volume, basic units of volume. We had previously decided to include number 11, "percent", because it is already in Intl number format. Numbers 12 through 22 are because digital units are important for our users. Bits, bytes, gigabit, gigabyte, and so forth. We have included those. We do not currently include mebibit and Kibibit, but there is an open issue to add those if there is enough demand for them. The unit degree as far as I can tell was added because there was a delegate who needed it, and they asked if we could include it, and it was only one unit, so we had decided to include it.

SFC: And then we have some more units that were added because of usages that we wanted to support. So we wanted to support the area land usage. This term usage at the time was very abstract. It's going to become a little bit less abstract. Now that we are talking about the amount proposal. But one of the usages is land area. So we decided to support that, and there's two units that are used for land area, which are both included.

SFC: Wait a minute. I thought I was already on the previous slide. Oh, these are also duration format units, but they're also covered by a usage, so I put them on this slide. So we decided to support units for duration of music, track, and TV program, which includes minute and second. We decided to include length usages which is how we get centimeter, foot, inch, and meter. Also road distances for some of the slightly longer ones. Kilometer, mile, yard, and also mile-scandinavian, which is not exactly the same as a mile, but is used to measure road distances in that part of the world. We decided to include rainfall for measuring on weather forecasts and such. We decided to include person mass, and those are the units for person mass. Including stone, which is kind of interesting one because I'm told by JWS that this also depends on if you're in the older or younger generation, whether you use stone as a unit of mass of a person. But it is included in Intl because there are enough people who do use it, and it is in the CLDR data that we do include that one. Temperature has two units that are used for the CLDR usages, and then finally, vehicle fuel volume. Volume of vehicle fuel. We include those units.

SFC: So these are the usages and units that we had previously decided as TC39 that we want to support, and these are the ones we currently ship in Intl. Why am I belaboring this? I'm belaboring this because the main thesis of this update is that when we add more units, we need to go back and look at where the current ones we have came from and then commit to continuing that bar of the motivation for those units.

SFC: So kilowatt-hour. This is an issue that was filed almost three years ago. More than three years ago. By @johanrd where they made the observation that we don't support kilowatt-hours very important, especially with electric vehicles. And other usages that we don't currently support energy units. Can we please get these? This has 16 thumbs ups, thumbs ups are not a very good measurement of interest, but it's like an order of magnitude in some cases higher than most of the other issues on the 402 repository. There's only a few issues that have similar numbers of upvotes. So yeah, maybe we should make it a unit, a thumbs up unit, but it's not currently specified in CLDR. So the ticket for adding energy units having that many upvotes means that there's also multiple motivated community members who've been helpful in formulating a proposal.

SFC: So there's two usages that we'd like to add. Based on this feedback from the community, one of them is energy usage. And here's a specific use case that we want to support. We want to support electricity billing, utility dashboards, electric vehicle charging sessions, battery state, solar generation. Required units for this are kilowatt-hour. I have an asterisk here because I have a slide coming up later to suggest that there may be cases where we need more than just kilowatt-hour. But kilowatt-hour covers these use cases, and you can see some examples screenshots on the right. For what that might look like.

SFC: The second one is power. So this is charging again, charging stations. This also includes solar and HVAC systems and real-time device power draw. And this requires watts and kilowatts. And there are some examples on the right of real-life examples of these units being used and why we want to consider adding them to Intl.

SFC: One question I had last time I gave this presentation. Does this update last time I talked about this proposal? Was what are things that we're not supporting? I want to be very clear with this proposal about what is in scope and what is out of scope. This almost clarifies the stage one motivation for this proposal. So what I just showed is what's in scope. Here's what's out of scope. Science and there's a list here. Scientific applications are not in scope. The users who are motivated for this feature are not scientists. They're people who are building electric vehicle and other energy usage applications. They're not motivated by the scientific applications. Therefore, that's why we're not including Joule in the current presentation. That's not to say that Joule can't be added if it's in a separate proposal, if it's motivated. But it's not being included in this proposal. So when I say Intl energy units, it really should be Intl energy usages. It is what we're adding. Utility-scale energy measurements, like you try to measure how much what's the power output of a power station, like an industrial-sized power station. We don't support that usage. We're not supporting the automotive and heavy industry, which adds horsepower. We're not including that usage. We're not including natural gas and heating, although we are including one of the usages we were including was a solar and HVAC. We're not including natural gas and heating because that would require the British Thermal Unit. We're not currently adding that. We're not including batteries and small electronics like milliwatts and mAh, this popular unit used for microcontrollers and things. We're not adding those. We're also not adding nutrition. So these are examples of energy units that have various usages, which are not included in the proposal you see before you today. Again, all of these could be included in a future proposal. But I just want to be super, super ultra clear about what's being included, what's not being included, and why.

SFC: So the caveat that I had earlier, I had a little asterisk. Here's the caveat. The caveat is that for the use cases that we have identified, we want to do full research on making sure that we support these usages across all locales. The extreme preliminary research that we've done suggests that there's just three units: watt, kilowatt, and kilowatt-hour that support all of these usages across all locales. However, I'm not necessarily fully convinced. I've seen at least anecdotal evidence of certain regions using, for example, megajoules as their unit for billing instead of kilowatt-hours and megajoules at like three kilowatt-hours. They're very close to each other. And I've seen at least anecdotal evidence of some regions possibly using megajoules. We need to confirm this and research this. So that is the caveat for that's why I'm not asking for stage two today because we need to finish that research before we come back and ask for stage two. There's a CLDR ticket tracking this, which hopefully will be resolved within the next few months or so.

SFC: Another question I wanted to address is relationship to amount. So all units supported by Intl number format will presumably be supported for conversion by amount, which means that if you have a watt, you'll be able to convert it to a kilowatt. And so forth. They will be supported in the amount proposal, as well as the usages.

SFC: And that was my update. Yeah, we started a little bit late, so I think we may still have like 10 minutes for questions if we need it. But does anyone want the cue?

MM: Yeah. So there's lots and lots of units left out. Apparently, for good design reasons, but I'm not quite understanding what those design reasons are. I just listed in my question title some examples of things that are omitted. None of these have to do with energy. They're just with regard to the units supported in general. So just the examples: Kelvin, very surprised to see centigrade and Fahrenheit or Celsius and Fahrenheit, but not Kelvin. Knots, nautical miles, light-year, parsec, atmosphere, PSI, yeah.

SFC: That's a good question. So the list that I gave of usages hopefully clarifies that a little bit. This slide here. These are the usages that we decided to support. So CTC39 looks through a number of different choices of usages or at least TG2 looks through a list of usages, and then we brought it to TC39 and people seemed okay with it. And we spent more time in TG2 going over this, but these are the list of usages that we decided to support. We decided that we cared about measuring land area, that we cared about measuring video duration, road length, rainfall, person mass, temperature of weather temperature, and then vehicle fuel. These are the usages we surprised us to support. We don't support Kelvin because we didn’t decide to support scientific temperature. We only decided to support weather-temperature. Which is the default usage of temperature. Some of the other ones in your list, like knots, I don't think we ever considered what would knots be used for nautical distance or something. It'll be length-nautical or something. Length-nautical is not a or speed-nautical, whatever that would be for. It was not a usage that was considered. Again, you're perfectly happy to consider additional usages, and that's what that's exactly what this presentation is about. This presentation is about "we want to add these usages. We want to add electricity billing, EV charging, solar generation, and real-time device power draw". That's what we're asking this committee to approve. And then if that committee approves those usages, then what follows are the exact units required to support those usages. So the units that you've listed are just not ones that this committee has yet approved in terms of the usages for those units.

MM: Okay. Thank you. Is there any sense in which any of this any of the systems around units understands that a kilowatt-hour has a relationship to both kilowatts and hours?

SFC: So that would be a question more for the amount proposal when we start adding unit conversion. As of now, Intl number format and again, this proposal is currently just for Intl number format. It's not for amount. Intl number format just takes a unit and displays it. So it only concerns itself with the localization of the display name. It does not concern itself with conversion from one unit to another. And it does not concern itself with the relationship between them. Amounts will have to go into that territory.

MM: Okay. Thank you. That was all very clarifying.

JSC: Yeah. So it seemed like you took a very application-centric use case approach to your use cases, right? Like going back to the slide where you had road lengths and yeah. Things like this. I am wondering about the scope you used to figure out what you're including or explain here. I know you said it's still under investigation etc. But there are a lot of scientific applications that use web technologies that present user interfaces that use a broad range of dimensions and so I'm wondering to what extent would you draw the line in scope here for formatting them? The entire SI unit system, basically all of them are used in some kind of scientific user-facing application and I dare say many of them use web platform technologies. I know of a couple right off the top of my head, e.g., in biomedical applications, especially big electronic health record systems like Epic that now have switched to Chromium and web platform tech, etc. They present lots of scientific or biomedical dimensions. They need to format them. There is an internationalization need for them. But are you drawing the line to include them or not in your in the mission statement of this proposal? Because if you do include applications like that, whether they be electronic health records or other or scientific applications or those kinds of things, that are user-facing. And why would you not include the entire SI system for formatting?

SFC: Yeah. I can address that. So the list of usages that you found on this slide is a list that came out of a TG2 discussion where we looked at all the usages that are supported by CLDR, which is about twice this number. And we made a judgment call based on which ones we felt were most highly motivated for the web. With the idea that we would do exactly what we're doing now, which is let a user post issues and gather feedback on which things that we didn't include are well-motivated. And this energy units proposal is an example where users identified units that we didn't have on the original list and there seems to be enough ecosystem support for them that we're now considering them for inclusion. We're not including things for the sake of completeness. If we cared about including things for the sake of completeness, then yes, we would include all the SI-based units as well as all the NIST-based units, the American ones. And probably many others. But completeness is a non-goal. Usages are goals.

JSC: Yeah. So if completeness is a non-goal, and you're and the demand is for concrete use cases in every case, on an ad hoc case-by-case basis, then do you have a list of criteria for that? For instance, off the top of my head, millimeters of mercury (mmHg). Extensively used in blood pressure displays. Every electronic health record system does them. The biggest one in the United States which I mentioned, Epic, uses web platform technologies to format them as mmHg. Is your gut feeling that that would be within the scope of this?

SFC: Yeah. I think I've got like a minute or two left in the time box. So the short answer is that we're trying our best in a not exactly 100% scientific way to judge the impact of these usages to users. And that's why this particular issue which has a lot of upvotes, which has multiple community members who are offering to put in the legwork to push this proposal forward, has gotten to this stage. What I'd like to have is an exact set of criteria. I think that would be great. That's not a we don't currently have that exact set of criteria. And I'm more than happy to follow up with you, maybe in a TG2 meeting where we can sort of go into a little bit more detail and depth in establishing a very exact quantitative rather than qualitative set of criteria.

JSC: That'd be interesting. Thank you.

SFC: All right. We have 30 seconds left in the time box. So I don't know if we have time to get to Stephen's question.

SHS: What is the cost of completeness?

SFC: My quick answer to it is that if we did have completeness, it would just increase the size of browsers. And there was pushback in the original proposal which did include many more units that it was increasing the browser payload too much. So that's why we decided to have a more limited set and are working on this problem.

### Speaker's Summary of Key Points

* The Intl Energy Units proposal was reframed in terms of the supported usages.
* Delegates would like more quantitative criteria for adding the usages in the future.

### Conclusion

* Will seek Stage 2 in a future meeting.

## Error code property for Stage 1, 2, or 2.7

Presenter: James Snell (JSL)

* [proposal](https://github.com/jasnell/proposal-error-code-property)
* [slides](https://github.com/jasnell/proposal-error-code-property/blob/main/slides-export.pdf)

JSL: So here, asking for if we can get stage 1 on this error code property proposal. Maybe if we can go beyond stage 1, stage 2, or 2.7, that would be nice as well. But let me set the stage a little bit. Kind of a long-running problem. How do you identify the specific error condition? The convention is to look at the error message. But that's fragile. I once broke NPM, for instance, by adding a period to an error message. Which was fantastic. Or you can look at instanceof. Obviously, with cross-realm, that doesn't always work. You can look at the name. But because of DOMException and how that works, the name doesn't always match. Sometimes it's the class. Sometimes it's the error condition. It's very inconsistent.

JSL: The proposal here is pretty straightforward. Similar to what we did with cause. Add a code that can be passed in as part of the options bag on the constructor. And that installs it as an instance property on the error object. If the code is not provided, just like with cause, it just is not installed and is not present. You can, when you pass it, you can be checking that the .code property. Okay. Design, again, very straightforward. This is on instances, not the prototype. The type is any value, the normal convention in the ecosystem is to use a string. DOMException in a couple other older errors that are using some of them use number. The common convention now is to use string. But we have really no reason to limit what type it is. So we can just say it's any value. Default absent when not provided. Not enumerable, but it is writable and configurable.

JSL: Why do we need this? I mean, there's several reasons. The biggest one is it's an already existing path that the ecosystem is already using. I introduced the code property in Node, I think it was in 2017. Specifically to deal with the problems with the fragility of checking error messages and that kind of thing. Since then, we've seen ecosystem libraries, Axios, AWS SDK, a bunch of them. There's actually quite a few that have started to add codes themselves. We see this in Deno. We see this in Bun. There's other runtimes that have picked this pattern up. There's not a lot of consistency in what the actual values are, but that doesn't matter. We're not defining what the value space is. We're just saying that it's there.

JSL: On the web platform, DOMException does have a code. It's generally considered deprecated. The preference is to use name. Instead, they challenged name, though. Again, it's very inconsistent. Type exception. Or type error, for instance. It's just the same thing no matter what the actual condition is. But when you look at DOMException, okay, you have a name for each individual set of conditions. So name actually becomes a bit ambiguous about whether you can or cannot use it as an indicator of what the actual error condition is. Code becomes very unambiguous. And then the other issue with DOMException, one of the arguments for this is, well, just subclass DOMException and change name to what you want it to be, but then that actually adds more ambiguity. On top of it because it's like you're extending that name space in a non-standard way and it's still difficult. And we end up with a case where instanceof and name don't actually match. Not supposing that we changed DOMException at all. I'm just saying that this is kind of where it does introduce a degree of ambiguity. It kind of comes, goes, I'm jumping ahead in the slides a little bit.

JSL: One of the concerns that have been raised on a has raised this about DOMException having error in the prototype chain and a legacy numeric code. Is there a conflict here? I don't think so. Code is only installed when it's passed via the DOMException bag. The DOMException constructor doesn't accept the options bag yet. It doesn't pass this. When it's created, therefore, it won't ever be installed. It doesn't actually conflict. With existing web cases there should not be a web backwards compatibility issue. One of the concerns is, well, is it useful for DOMException? Well, DOMException already has a code. We're not changing the value of that. So it should not introduce an incompatibility. `‘code’ in DOMException` is always true since it's part of the prototype. Is it a problem that we're installing it as an instance in it? And code already exists as a prototype? I don't think so. The ecosystem experience shows that these can happily coexist. In Node, we've had code on regular errors as an instance property for since 2017. We also have DOMException in there and it's there as a prototype property no one has ever raised an issue that this thing is problematic. Changes are very straightforward. Just like we did InstallErrorCause, we have a parallel InstallErrorCode. It follows literally all the exact same steps, except in saying instead of saying cause, we install code.

JSL: The one thing that it does add, it's different than what we have now. SuppressedError doesn't have an options bag now. It's one thing that we talked about yesterday. This would add it. So that we could have code on the suppressed error as well. But everything else is identical to install error cause. I mean, there's some relationship to other proposals. This is not minor. Or not that big of a deal. Won't every library invent its own codes? They already do. We're not changing that. All we're doing is paving an existing path. Why not use symbols? I mean, the things should be fairly obvious. And can't you solve this with subclasses? Yeah, sure. This is kind of the DOMException argument. But again, that does include you solve the ambiguity problem. So yeah. So I'm asking for trying to see if we can get at least stage one. Ideally, the spec text, if you look at the repo, is already there. Again, it literally is just like install error cause. So I'd like to see if we can get it to state 2.7. But let's start with stage 1.

JGT(?): You mentioned that code on DOMException is already true. Did you mean the literal true or you meant it's just always there?

JSL: It's still there and I think it should still come up as true when you collect the code in whatever.

JGT(?): What would false mean in that context?

JSL: If it just says it's not present. It's not present on the object. It doesn't exist.

JGT(?): Okay.

MM: So my question is not a suggestion for changing this proposal at all. I do support this proposal. My question is, in the context of the thinking about this proposal, what's your reaction to the following possible follow-on proposal? Which I would find attractive. Which is, the spec currently specifies in lots of places if this condition is not met, a type error is thrown or a range error is thrown or whatever. So the spec is always specific about what the class of error is. The spec certainly never says anything about what the message is, which I would support continuing to never say anything about. It would be nice in a follow-on proposal for the spec to always specify what the code is for every error thrown according to the spec. It doesn't mean that every throw in the spec has its unique code. We would still group them into some kind of sensible equivalence classes. But there's certainly many use cases where user code would like to distinguish between type errors that mean different things that are all of which are thrown by the platform. So is there anything about your thinking that led to this proposal that would be intention with that extension?

JSL: It is definitely a possibility. I believe it's something we need to approach very carefully. Because it can get out of hand very quickly if Node's experience is something we can draw on. Node has hundreds of codes now. Some of them very generic. Some of them way too specific. And so I think we would need to approach that part of the problem very carefully. But I think there's definitely room for that possibility. But yeah.

PFC: I was thinking the same thing when I was reviewing this proposal. And there's kind of a strong advantage and also a strong disadvantage to doing that. The advantage is something I've noticed with Temporal: each implementation has their own error messages for what's essentially the same error. And some are clearer than others. So it would be helpful to have a code that you refer to that would be on MDN and provide you with a longer explanation of the error than would fit in the error message. So that would be great. The disadvantage you should note that it would make a lot more things observable in the spec than they currently are. So there's a lot of room now for implementations to reorder steps that all throw a RangeError as long as they don't reorder that observably with something else. And I know that at least for V8 adopting the Rust library for Temporal, that was quite useful to be able to reorder the steps that throw the same class of error because one would be on the JavaScript side of the boundary and the other would be on the Rust side of the boundary. So that's a freedom that we shouldn't give up without thinking hard about it, I'd say.

MM: But just if the range errors are not something that user programs need to distinguish among, then we could specify that all of those range errors, those specific range errors, that all of them carry the same error code.

JSL: Yeah. I think it just comes down to this is a namespace. And with all namespace issues, we have to carefully think through what the ramifications of assigning those values are. And in some cases, they're going to be useful. In other cases, they're not. So yeah.

PFC: Yeah. There's a trade-off there between merging error codes so that they're not observable versus maybe it's helpful to users to be able to distinguish those error codes. So there's not an easy answer, I think.

MM: Yeah. The amount of footwork required to do this extension would be tremendous. I mean, so I'm not eager to but the world on the other side of this extension would be a very nice world.

KM: I’m reiterating the same point. At least in JavaScriptCore, which type errors or which errors in the spec correspond to a particular line of code where an error is thrown is extremely ambiguous. And it would be an enormous amount of work to go through the millions of lines of code where anything can throw an error and figure out exactly which error code it's supposed to be attached to that line. Is that the right error code? And I agree with the fact that, yeah, there's plenty of times where it's very handy to just say that all errors are the same. And we know all of these produce the same error. So it doesn't matter which of the errors you get. Because the contents are irrelevant.

JSL: Yeah. I very specifically did not want to cover this whole namespace of errors here because I'm just experienced with Node. We've been doing this for nine years. And we still have issues with making sure the right error code is thrown at the right spot. So its code is open. It's a paved path but there are complexities with it. So if we do take that additional step, we have to approach it very intentionally and very carefully.

KM: I guess also and that'll be a huge change in the actual spec itself, right? We'd be talking about essentially going through every line of the spec and looking for errors. And then seeing if those errors what the right code is. And we'd have to go through and debate that whole thing with everybody at this committee. And then it's also hard to tell if those errors would be the same because there are a lot of them are abstract operations. And those abstract operations can be called from any other abstract operation. So we wanted to say, "Oh, well, it's fine because most of the errors have the same code. And you can do the collision." You still have to go through all possible calls. And anytime a new proposal comes in, does that split them in some way where now a distinction again? So it creates an ongoing kind of in perpetuity overhead that I think we should be careful to agree to before we're ready.

MM: Yeah. I certainly agree with all of that. This would be a tremendously expensive road to go down. But it would be very nice to be on the other side of it.

EAO: The angle I would take would be to start to consider how we get to the other end of the road, as MM put it just now. I think it should be a stage one or maybe stage two consideration of this proposal to determine whether there's an expectation of a follow-up near-term proposal to be adding codes to spec-mandated errors. The concern I have here is that with this change, we're effectively communicating to developers that it makes good sense to attach a code to an error. And it is presumable that more and more of this will happen as is already happening. If we are not differentiating spec-mandated error codes from other error codes that are entirely user-defined, we may end up in an unfortunate situation with an ecosystem adopting certain codes that we end up determining as a committee that for the spec don't really work.

EAO: This creates conflict that I don't think needs to exist. And therefore, I think it would be appropriate within this proposal's early stages to determine whether or not there's an expectation to follow it up with spec-mandated error codes and either way react accordingly.

JSL: Okay. Let me ask you this. What stage do you think that that needs to be addressed by?

EAO: It would be nice if it was a stage one concern, but at latest stage two. I am really fuzzy about exactly where this would go. The thing I'm concerned about is not anything specifically in the spec text proposal that you have, but more about the implications around this proposal. And I think if it goes beyond stage two, then the signals become very strong that this is going to become a thing. So does that answer the question, hopefully?

JSL: Yes. I think so. Thank you.

WH: I have the same concern. I assume we're discussing the namespace land grab which is going to take place once the code is introduced. After that we may have trouble agreeing on what the codes of spec errors should be because of various claims on the namespace by external sources.

JSL: Yes. That already exists. To a degree. If we look at all the examples that do exist in the ecosystem, there's very little consistency here. And the risk of even these competing with each other is significant. I actually think that this is another one of the reasons why .code not being limited to just string is useful. Because we might decide at some point that, hey, maybe a symbol is actually the right code for us to use to avoid that namespace land grab. And we can make them unique. This is part of why I think what I said earlier is this is a very difficult and careful conversation we need to have. If we decide to go down the route of defining our own codes. I have no problem addressing this in stage one or two for this proposal. I just would be I wouldn't want to go down the road of actually starting to define what this namespace is if we want to carve out one particular corner of it or at least call out that we want to. Okay. But I think a much more difficult conversation for us to have is to define what that actually is.

RBR: So the argument for it was to make the error handling consistent similar to, for example, instanceof something like that. I don't see that here. Because it's one way of detecting something is an error. Okay. But that is the possibility to do so is there right now. It's actually so often used, as you showcase also this here in this list, that I'm in favor of having this as a kind of syntactic sugar for the possibility. And also making clear that who assigns the code is always the author of the error. So therefore, they are the only one to determine this, out of my perspective. I'm in general in favor of having something like that. Because it makes it nicer to create an error instance for our users. But I don't really see any further benefit from the current approach. Also, when I think about Node.js errors, for example, I'm coming back to this instance of versus other name detection things. I normally don't need the exact error code. I normally need one of these 10 error codes. So that's a very different problem, though. And I believe we should separate this a little bit. And make the proposal very specific about what it addresses and what it does not address.

JSL: Yes. I agree. I mean, this proposal as it is is very much a syntactic sugar over what is currently the existing pattern. There's nothing here that can't currently already be done just by assigning a code property. That's fine. Just like with cause. I mean, there's nothing that says that somebody couldn’t already do it. Everything else that we've been talking about here about the namespace of actual error codes is a much bigger problem. So it's like I very much want to separate the conversations as much as possible.

ACE: Yes, you could do this in Userland. But structuredClone won't copy that thing across. When we added cause, we also added cause to structured clone to copy over cause. So yeah, it's more than just sugar. Obviously, we could update what we're structuredClone to say, oh, if it has a code, copy that across. But to me, it'd be odd doing it only there if there's no mention of it in TC39. It feels best to do it in both.

JHD: I mean, unless we're planning on adding codes to built-in errors, which it seems clear from the discussion that we're not, I don't see why the namespace thing is an issue. That's no different than string method names or string-based protocols. Or global symbols, right? You can put an object or a non-global symbol on code if you want. That's one way userland can address it. You can do Java-style com.whatever strings if you want. You can do arbitrarily large numbers. Or you can put big ins in there. That's a problem userland may need to solve. But also, it doesn't really matter. Because most things aren't going to have conflicting error codes coming from the same exception source. Right? Library A might throw something with code foo. And Library B might throw something with code foo. But those are different call sites. And you'll know that they're different because they're different lines in your editor. And it doesn't really matter if their codes are the same. So I just don't think this is that interesting to discuss. And I definitely don't think it should obstruct the progress of the proposal.

RBR: I agree to what JHD just said. And about structured clone, and how the code property is currently added as a own property normally. So it would also be copied over in most cases. People just assign a code. And errors, structured clone does not copy the own properties.

JGT: First of all, I think this is super interesting. I know I've personally spent much of the last six months trying to deal with logging errors in various parts of a code base I had nothing to do with. And I'm angry about it. And so I think having any standardized place where more information about an error can be obtained and generically logged, even if you have no idea where it's coming from, is actually a very helpful thing. And so just having a standard name where assume you have a message you want to put in your log saying error and obviously, the message properties are always there. And to also have a code property that's already there and put that in some structured way, for some other piece of your infrastructure or some person to digest, seems like a very useful thing. And having it spread across 10 different named properties and needing to try to figure out which one makes that whole process more complicated. So therefore, I support this.

JGT: One thing to watch out for with these kinds of schemes is that novice developers can sometimes assume, let's say we have exhaustive docs in the spec. One of the suggestions somebody made earlier was every time we throw an error in the spec, we would also have a code there's a slippery slope there where a naive user could be reading MDN, could see that, oh, this function calls has errors with this code, this code, this code. And then they will write their code saying, if code equals whatever, then do this. If code equals whatever, do this. If code equals whatever, do this. And they will not think there might be a possibility of some other thing happening there. Right? And certainly, I would say the biggest failure of error handling that I've seen in our company's code base has been exactly that, where people assume that the only errors that can pop out of something are within this narrow range. And anything we do that would encourage more novices to think like that would be a challenge for the reliability of the web. So I just want us to be really careful. Not unlike the other voices that have talked about care for different reasons, about sort of specifying too deeply what we're doing for errors because it can backfire.

JGT: One thing, and this is not really in scope of this, but it is related, is that as from five years of writing Temporal, one thing that has been really clear is that I would say all of our errors are either range error or type error. And those errors aren't particularly descriptive of the kinds of errors that can happen. And so one additional thing beyond this that might make JavaScript a better platform for dealing with errors would just be maybe four, five, six more common types of the kinds of errors you see. I spent a lot of time in Python lately, which I'm not a huge fan of. But one thing I think they do well is there's just a wider set of common error types that can be used. And I think that might be a middle ground between the we need to spec every error versus we don't give enough information for users about what's going on. So I'm not the guy to bike shed what those common error cases would be. But if somebody were to bring a proposal in the future, I think that would be a really interesting option. Because today, what I see is there's range error and type error. And then there's a long laundry list of 10 or 20 very specific narrow-form errors that are emitted by proposals. And a lot of times, it seems like proposals come up with these very narrow errors instead of being able to leverage a sort of mid-range kind of thing that is shared across the platform.

NRO: Even if we don't want to go in detail about how this error code is Temporal PlainDate time from wrong date type or something like that, we can still have larger categories like invalid argument error while still representing them as error codes. So the two things do not exclude each other. We don't need to go through the prototype approach, especially given that changing the prototype of existing errors is very much likely to be a problem.

JGT: And that was actually specifically what I was referring to, is if we had had 5 or 10 more common cases like that, then the need for unique codes on things might be a little less.

EAO: Just a thought that most of the issues around code, I think, are namespace issues. And we could theoretically impose a restriction on the string values that we accept for the code argument in the options bag, for example to include a “:” colon. That would effectively create namespaces that people would use. But I also realize that this would conflict with most existing code values such as the ones used in Node.js and so on. But it's a potential solution that I think we could technically do that would solve namespace issues going forward, at least. But I'm not sure if we want to consider something like this.

JSL: Yeah. My deep fear on that would just be that I don't think it would be web compatible. It would just break too many existing cases if we tried to enforce that. I think the stronger option is less ergonomic, the stronger option is we already have a type 4 namespacing symbol. That would be an approach we could take that we could enforce. But it's from an ergonomics point of view, it's kind of terrible. But yeah.

EAO: To specify, the idea I had was only for the new API that we introducing. And to otherwise allow the code as it is already being set to be set to any string or any value.

NRO: Yeah. Just symbols. Remember that when you implicitly coerce symbols to strings, it throws. And it's very common to try to convert an error to string to log it somewhere.

JSL: Yep.

CDA: All right. Let us do a call for consensus. On the queue, we have ZB support for 1, 2, and 2.7. JHD, did you want to speak, or should I just read what you wrote?

JHD: So I do support all those stages. I'm volunteering to be a reviewer. And I have looked at the spec. And reviewed it. I don't think we should put any requirements on the code, especially since we're not requiring it to be a string. I don't as I've stated already, I don't think namespace issues are a real problem. Or one that we need to solve. And I'm looking forward to standardizing this very common pattern.

CDA: DJM is on the queue with +1 for stage one. Next is KM.

KM: I think there's still at least on my end, feels like there's a lot of areas to flesh out. And I'm hesitant to make the commitment that I think it's going to make it into the standard until at least some of the broader especially with HTML integration as AVK brought up. So I'd like to talk over with him in a little bit there. That only came up in the last few days. So I haven't had a huge amount of time to discuss it with him. But I'm okay with stage one. Seems reasonable. Looking at areas to explore. I spent a little bit of time to kind of work out some of the other stuff.

RBR: I leave the problem spaces. So common then just even if it would only be sugar, which I learned that it is not. So I like that additional benefit. It's good for stage one. For stage two, I would like to clarify that it's not that we are going to plan on adding error codes probably to or that it's not at least in this specific proposal that we're going to add error codes to built-in errors and similar and it's really just about then handy functionality part there.

CDA: CZW says, "Support for one and two. Happy to be a reviewer." EAO, has plus one for stage one. MM(?) (Mark) is on the queue plus one for one, two, and 2.7. I think we're just going for one at this point. For the record. And we have run out of time. I do note that there's a couple of things in the queue. So maybe we could do a continuation if we.

JSL: I don't know if a continuation is required if we're staying at stage one. And I think both of these could be opened as issues in the repo. And then we'll address them.

CDA: For NRO and Justin, please raise your thoughts in the error code property repository.

JSL: And I will get this transferred over to the TC39 organization tonight.

### Speaker's Summary of Key Points

* The `code` property on Error is an established pattern in runtimes and frameworks, it makes sense to codify it
* Add it as an optional instance property following the same pattern as `cause`

### Conclusion

* Stage 1 approved. James will initiate move to tc39 tonight
* Pending some additional conversation about whether and how we should approach defining codes in the language

## Update on ESM Phase Imports

Presenter: Guy Bedford (GB)

* [proposal](https://github.com/tc39/proposal-esm-phase-imports)
* [slides](https://docs.google.com/presentation/d/1inTcnb4hugyAvKrjFX_XHTnxYaPW0rodWwn0VFmlq24/edit?usp=sharing)

GB: Okay. The last time I gave an update on ESM phase imports was, one, just over one year ago. And, so I wanted to just make this a general update, as a refresher for folks who are not familiar with where we got to in November. Actually, it was November 24, and a couple of normative changes as well. Please, feel free to ask clarifying questions that are on the topic. If it is about an idea you just had on a slide you just saw, I'm probably going to address it shortly, so save those for, for later on. But if it's a clarifying question, I can take them at any time. So I'll start off with a refresher of where we got to with, well, where we are with WebAssembly imports and source phase imports. So this is a complete recap of the source phase imports proposal, which is separate to this proposal, for those who are not familiar. The WebAssembly as an integration, which is phase three in the WebAssembly process, specifies the ability to import WebAssembly in the same way that you can import JavaScript. And it's useful because you can tree-shake WebAssembly. You can statically analyze your code and tell what WebAssembly you're loading. And it integrates into the browser security model, in that you don't need WASM unsafe eval, in order to execute your WebAssembly. But many WebAssembly embeddings and toolchains require more fine-grained control than this when they execute their WebAssembly. They actually wanna control the WebAssembly instantiation itself. And so for that, we have source phase imports, which is this extra syntax to import source, the WebAssembly module, and it gives you not the instance, but the compiled WebAssembly module, which you can then instantiate, passing custom imports or import wrappers, and then wrap the exports before creating a JavaScript wrapper module that basically exports the functionality and wraps the WebAssembly. You still get the tooling benefits, ergonomics, static analysis, your bundler can easily handle the WASM instead of having to embed base64. It's unimaginable that you'd ever do that.

GB: And, security model integration. And so this is the flexibility. And then embedders can choose which model they wanna use. If they need the flexibility of custom instantiation, or if they want, the, the, the closer integration of instance imports that support tree-shaking.

GB: So just an overview of the status. WebAssembly as an integration with source phase imports went to phase three in the WebAssembly CG in April '24. As an integration, landed in HTML for importing both JavaScript and WebAssembly. In September '24, source phase imports reached stage three in October '24. And the Node.js source phase implementation was released and flagged in February '25. We now have implementation support, in WebAssembly tooling, WASM branching and scripting, JS tooling, SWC, esbuild, OXC, rollup.js. I just got a PF for that a few weeks ago, which should hopefully finally land now. We've got Node.js support for both phases. Deno support, for instance phase and Cloudflare Worker support for the source phase. And browsers, we're waiting on you. So I think we're, we're close. And I, I know that, Chrome has a complete source phase implementation that's just ready to go. So, yeah. And, and, and the, the actual instance phase is unflagged in Node.js as well. The ability to just import WASM. And so, I'm gonna do a very brave thing here and give a brief demo.

GB: All right. So this is a simple example of a WebAssembly module that you might want to execute. I'm importing the string, the built-ins, functionality in WebAssembly here in my WebAssembly module. Where I can cast from an external ref to a string. And I can concat two strings. And then I'm importing from this WebAssembly string constants import, the "hello" string. And what this does is basically just gets as the same as if you were compiling, you know, constants in your data section, this but this becomes an actual JavaScript string constant available on the import, and it becomes this hello global. We then have a greet function that's gonna take a name as an external ref. We're gonna call the concat function and concat the hello with the string cast of the local external ref that's the name. And so we're gonna get this basic, greeting concatenation. So if I want to run this WebAssembly in Node, I first need to compile it. So I'm going to compile like so I've just got that one WAT file. So if I go `greet.wat` and output `greet.wasm`, and then if I create a test I want to, I'm gonna import source. The module. From the `greet.wasm`. And then I'm gonna go `WebAssembly.instance.mod`. And then that's gonna give me my greet function. With a new. And then I'm going to greet and greet source phase imports at TC39. And if I run that with Node, I get nothing because I have to log the string. And we get hello TC39 source phase imports. So really simple WASM module. And it, it worked.

GB: If I want to use the instance phase instead, I'm just gonna put this in a block so that it's scoped. I can go import greet from `greet.wasm`. And then I can just greet and again, I'm gonna log that. And that you can see is a tree-shakeable variant. And here we have the instance phase working. So you've got the control in the in the new instance where you can pass custom imports here. Note that I didn't have to pass any of those built-in imports because these are removed at the compilation time and they're not actually part of the module imports by the time you get it here. So these strings are all, the string handling here and the enabling of the WASM built-ins is all part of the compilation. Including recently, the string constants functionality as well, which got, consensus in the WASM CG for a string constant name, which was possible because we now have compact imports, which is the same thing JavaScript does where you don't have to repeat both strings twice in the binary format. Yeah. That's the demo. All right. Let me resume.

GB: So what we're talking about today is none of that. That's all complete. We're talking about the ESM phase imports proposal. This was frozen February 24. Reached stage 2.7 in December. Sorry, November. And has been incorporated into the module harmony process. So it layered with the other module harmony specifications. And this is a low-level proposal that kind of directly enables the primitives for module declarations and compartments. The motivating use case is workers and creating workers from modules, solving ergonomics and, and, static analyzability for workers. So today you have to create a worker from a URL. You have to figure out where the URL is. And then you have to set type module. And Bundler is kind of don't easily find these things. And the idea is that if we have a source phase import, which can behave like a module handle, or a module capability, you can just pass it to new worker and it can automatically know you have a module worker. And, Bundler's can see that and more easily understand what's going on. So yeah. The ESM integration and the source phase for WebAssembly completely self-contained. This ESM phase imports is the next step that comes after that and completes the source phase model for JS mod modules as well as, the existing WebAssembly module.

GB: Okay. So for the discussion today, I would like to give an overview of the proposal, and the exact semantics, as a as a full refresher, and then, go through the transfer and import keying semantics, to then have the context to discuss the two normative PRs that I would like to get, consensus on if possible. If folks feel that we don't have the context today to make that decision, I'm happy to bring it back. but it would be nice if we can build up the context. And if people could share any questions as, as we go. so the ESM phase imports proposal, specifies the source value for JavaScript. where the source phase imports proposal specified, getting a WebAssembly module and adding abstract module source into its prototype chain. With ESM phase imports, we would be getting a module source, sorry, the slide is wrong. I it is not an exposed global actually, is it an exposed global? I haven't checked the spec in a while. I, I think it is.

GB: I need to double-check that. We did discuss it at plenary and we decided what we wanted it to be. I'm sorry. I just had a moment of doubt there. But yeah. ModuleSource, is the object. And that also has AbstractModuleSource in its prototype chain. And so what is a module source? It's a JS object that has this internal slot of the source text module record, which points back to the source text module record itself. And then that source text module record in turn has a module source slot, which points back to this module source JS object. And that's separate to this host-defined data on the module. it's just an opaque object. That's used to represent the module. It also represents the module's key because you have a, a reference to the module and the module has its host-defined data. It also associates with the URL. And, module source is specific to JS modules. And it's, it's something like a module handle. we did discuss whether it should have reflection for reading the imports and exports of the module. But that was deemed out of scope for the proposal. It could be added in the future. The constructor is also not going to be specified and likely will never be specified, because it is a new evaluation vector in the language. And there is resistance to adding new evaluation vectors. It would instead be possible with inline syntax to use eval to get a module. Or possibly, once we have the safe forms of creating these things, with inline module definitions, reconsider if we can do a constructor. But I think we likely aren't going to.

GB: And this object supports usage in dynamic import. It has very well-defined keying semantics in the host. And it supports serialization in post-message and between agents. So what happens when you dynamically import a module source? It looks up the module source record from that internal slot, gets that module record, and makes sure that it's executed and that's basically it. So that was relatively straightforward. and the way this works in the spec is we update the import specification to check if you pass an object. And if we do, we have the spec method get module source module record, which will either return the module record or return not a source. And that will check the source text module record internal slot. Falling back to a host get module source record, which is the WebAssembly source phase, integration because it is an, embedded defined module source. So when you pass a WebAssembly instance, you're going through and, and you're failing the first check, which would apply for JS modules only. And you're hitting the second check. So the same thing would be defined for WebAssembly modules. So that is this specification by defining dynamic import for the source for, for JS source phases in turn em defines it for WebAssembly module as well. So you could actually, from a WebAssembly module object, just dynamically import that handle to the module in the same way.

GB: There is a PR for the WebAssembly ESM integration featuring this functionality. The semantics have been discussed, and, gained consensus within the WebAssembly community group. And so the WASM aspects of the proposal are waiting to land only on the JS proposal progress side of things. In theory, you could use WebAssembly type imports to have something like module handles in future in WASM. And actually have, like, first-class module handle types, but that's all hypothetical for now.

GB: The keying semantics are one of the most important aspects of the proposal. And, quite a lot of work had to go in to make sure that this all makes sense. If I import and now we, we, we no longer just have URL keys in the registry. We also have source keys in the registry. So if you import a URL, you get the instance for that URL. But if you import that source, you get the same instance. And you're not gonna get a new instance. So you're, you're getting the same thing for both of those imports. If you postMessage an import to an agent, and then import it in that agent, that's actually injective into the registry in the sense that it creates that source that you passed into the registry. So this is the first case where we've actually had, like, a, a network bypass, effectively. And you create a new, new instance in that agent. This is a RACI semantic because if you have already imported that URL inside of the agent, but it got a different source due to some network-specifics being different in that other context, then post-message a source that happens to have the same URL key and import that, you're gonna get a different a different value. A different instance. And so the question then was, how do we figure out how to disambiguate that when you're in a worker context and you import a URL, that you know what you're getting? If you import that URL, what do you get? How do we know which key you get? And the idea there is that there is a canonical source associated with every URL. and that is the source that you're importing. So this is the canonical module source for a given URL. Sorry, that should say a.js. And that canonical module source is, is defined in, in, in a well-defined way and then the question is, when do you use the canonical module source versus injecting a new module source? And we came up with this semantic of using a module source as equal definitions that you can equate two module sources and determine their equality. So that if you transfer the same module multiple times, you can see that it's the same module and figure out its equality. Another way to look at this is as two separate registry maps, the URL to the source and the source to the instance. where the URL to the source is the URL to the canonical source. And every source has a unique instance. are there any questions so far? I can check the queue.

RPR: There is from NRO.

GB: thanks. NRO, did you want to speak or can I just quote that?

NRO: Just quote that.

GB: Sure. So NRO, asks if the canonical module source is per realm or per global. it is associated with the module registry. And right now, the module registry is per realm. and, but I, I will get to the realm discussion as one of the normative changes that we're, we're looking to discuss as well here. NRO, did that answer your question?

NRO: Yes.

GB: Thank you. So this then fits into the module harmony layering. So far, as, import defer, source phase imports and ESM phase imports are all phase proposals. But the semantics of this ESM phase imports proposal from the basis of inline modules and, and the primitives for module declarations and so when we're figuring out these semantics of importing modules in different contexts, that's actually starting to fill out the details of what compartment imports would look like as well. And so it, it's got a lot of crossover with, with other module harmony proposals, but has been layered very carefully. And we've had all the very detailed discussions there around that. To show you a little bit what these layerings look like, with module declarations, the object that you would get for the module, its representation would be the module source instance as specified here. And then when you import it and post-message it, you would have the semantics as specified here. So whoever is gonna work on module declarations will have a much easier time of things. So it's in module source and as abstract module source in the prototype chain.

GB: Compartments each compartment has its own module registry. And dynamic import is scoped to each compartment. So the semantics of this import that we specify that are scoped to the registry can extend to compartment registries as well. And finally, the HTML integration there is a draft PR up, which specifies the HTML integration and the serialization semantics. It is still draft. It is not complete. But it covers the majority of the semantics in specifying this new worker behavior. There is actually a separate PR by NRO to support an import map option in the options bag passed to new worker. And with this, you could customize the import map of the worker when you construct it. And what we would really like is if we could land these together. What we could say is when you pass a module to a worker, the registry context of the module you pass, that import map associated with that context should also be passed along with it. And in that way, we could have this one expression support transferring resolution; it would be a snapshot of resolution at the time of worker construction. but, but would then actually get the usability required to have imports just work with, with the import map resolutions.

GB: The semantics of this new worker behavior and, and our hope for the import map were presented whatnot meeting, in '24 prior to stage 2.7. but the, the both of those PRs, st-still need, implemented progress, to be able to, get, get them get them over the line. And, NRO's PR as well.

GB: So just to summarize, what the proposal includes, ESM phase imports specify module source, for JS. Which complements the existing source phase imports for WebAssembly. It defines the transfer and dynamic import semantics. And fully specifies the host loading invariance. For module keying based on these semantics, considering the edge cases of module handle transfer. Then the HTML integration specifies the new ergonomic new worker and the proposal layers within the harmony process. And that's what we got to at the end of '24 with stage 2.7. So finally, for the new parts, that's all everything I presented is over a year and a half old, right? So what, what, what I'm presenting today is the test 262 coverage. Two normative changes that I'd like to discuss one change to the keying semantics and one change to the cross realm import behavior. And then I, I'd also like to hear feedback on source representation for built-in modules.

GB: So on the test 262 side, we now have a, a draft test 262 suite PR. It is still a very rough draft, but it includes the, the, the general semantics of, of how to get coverage on this proposal, which just figuring that out was a little bit tricky. But the key integration points there is having an intrinsic for constructing a module source. So basically, we, we need a module constructor to test it, even though our modules constructor won't be specified. and so it, it has that that takes both a source and a specifier ID. and then to in order to actually validate what you're getting, another intrinsic defining an import meta intrinsic hook so that we can sort of stamp these, these, these import metas and, and, and check IDs between modules so that we can verify the invariance. And with that, we can actually test the, the keying semantics across contexts. Based on the two normative changes today, which, which enable this. And but it, it doesn't include any of the existing source phase imports you know, thr-third party source phase imports tests, which were separately handled in, in the source phase imports process for Wasm. Okay. so with that, I will get into the details of the two normative changes. Before I start, are there any questions on the? Okay. .

RPR: So, so just there's a point of order first. There is a person on the call that has just dialed in. Julian Espina Delan-Anhel? We're, we're not sure oh, JWS.

RPR: Ah. Okay. I've, I've, I apologies. Yeah, I, you did communicate that. I'm, I'm thank you. All right. Let's please, please go on. s yeah, I'll take the question. From CM.

CM: Could you go back to the slide where you had the two-stage mapping thing?

GB: This one?

CM: Yeah. The URL to source and then the source to instance registry maps thing: I’m just trying to understand what that means. If two different URLs lead to the same source, they actually end up pointing at the same thing?

GB: They would point to the same instance.

CM: And so the source is identified by, by what? By the full text of the source text or a hash of it?

GB: Yes. So that's normative change number one.

CM: Okay.

GB: It's a combination of the, source text equality, which so that's the module source is equal, and the host defined metadata, which includes the URL effectively. but your question exactly leads into my normative change number one.

CM: Okay. I was wondering if one of those normative changes might relate to that.

GB: I will dive straight into it.

CM: Okay. Carry on then.

GB: Okay. So, this is, basically the, the concept of what happens if, if you post the same source twice, into an agent, and you're gonna get two sources that have different that they aren't equal. Because they have two two different lease serialized objects. But when you import them, you're gonna get the same instance, even though they were different module sources, because they satisfy equality of both, both the host defined metadata and the source text equality. So they're, they're de-define they, they, they support equality by the two key equality constructs that we created. And this gets to the heart of CM's question as well. by defining equality based on source text equality, using this module sources equal, you can allow a basically forming an equivalence relation between instances across agents. And we thought that this would be something useful to have, because originally there, there were discussions in, in the structs proposal about a concept of can we can we form a concept of module identity between agents? But at the end of the day, there was no genuine semantic or, or actual use case that was formed there at all. And so this was a completely hypothetical use case, and design aspect that we added. That served no benefit at all. And in fact, the behavior is, is difficult to implement difficult to test. And somewhat counterintuitive. And so the, the normative change is if we can do a better form of equality here. And, and the idea is, instead of using source text equality, which like you know, two sources might look the same, but you add a one white space and they're different. It's, it's a terrible concept. So use the, the actual object identity of, of the source phase object representation. And that's the first normative change. it no longer allows us to create identity of instances, between agents and contexts. But there are no use cases for that we know of.

GB: So, normative change 58. instead of using module sources equal, which compares the source text just use the object identity of the module source object we already have. And so that becomes the direct key in the source key. an implication of that is that structured clone will now give you a new instance key. And so if we go back to this example and we post message the same module twice, you, you got different objects. sorry. I the slide's wrong. That's exactly what we're getting is non-equality. so you're, you're gonna have two different two different instances now. And so we're, we're basically fully making it well defined on, on the, the source object instance identity. so if you do structured clone before that would have given you the same instance. Now you'll get a different instance, a, a different module. And for, for the most part, it's a much simpler semantic, much more intuitive semantic. And I, I think and, and, and also allows test 262 testing to work very nicely on, on these semantics. so what's happening when you create a new source is it's just a completely new source key. You import the new source key and you're getting a new instance. And it's that simple.

GB: The next normative change to discuss, which builds on top of that, is the cross-realm import case. We initially actually banned cross-realm imports, because it wasn't clear how to properly define them. And so we just said if, if you pass an object into an iframe and you try to import it, you're not gonna get anything. so what we want to do is actually just relax this constraint now, by using the source object identity the object has a perf-perfectly well defined identity no matter which context you're using it in. Or, or which realm you're using it in. And the same could, in theory, apply across departments. That, that same identity model works perfectly fine across compartments. And so the idea is instead of the current spec text, which throws when you if you try to pass an object that's not the same realm, we would actually just relax that check, use the object identity, which is just the natural specification path. So there's no custom definition required for cross-realms to work. It just works out. And we would get this kind of cross-realm semantic, where you get instances per, per realm. and I don't know why I have that slide. Yeah. So that's it. and so what I would like to do is seek consensus for the two normative changes, if possible. Any questions or discussion are very much welcome. So the, the first one is this module source object identity instead of source text identity. Nicolo has reviewed this change. and so I would like to now put that to discussion. Okay. We've got a few items on the queue. So starting with Kris. Go ahead, Kris.

KKL: For one, this looks great. But you mentioned earlier that there was that we needed to expose a test function for module source construction that accepted an arbitrary source key, I think, or specifier as a second argument.

GB: The second argument was a ID string. The the actual URL in place of the URL.

KKL: In place of the URL. Okay. And it's and it's clear in the way that this is framed in test 262 that this is not how we would propose to surface the module source constructor proper.

GB: Yes, it's a test 262 in, intrinsic that's not a public function. Yeah.

KKL: All right. That sounds good to me. RGN?

RGN: Thank you for the clear explanation of a very elaborate topic. I'd like to express enthusiastic support for both of the normative changes. They make a lot of sense and I'm strongly in favor.

GB: Sure.

RPR: NRO?

NRO: Yeah. so first okay. We are removing the utilities that we are hoping to build for shared structs, but just note for the rest of the committee, we could always add those back, it's just they would not affect module imports. But in the future, we could say, "Oh, actually, in this source, there is this special global ID that shared structs can use, and it's preserved across structural clone." The only thing is that that would only be observable then through shared structs, even if it's tied to module sources. so I, I was like the one hoping to be able to reuse these things for shared structs, and I believe we still can in the future. We still want to go with the direction, even with these changes.

GB: That's a good point. Thanks for mentioning that.

NRO: And for, for my other topic, I am generally supportive of this both of these changes. I this does simplify the mental model, and probably it also simplifies implementation, so it's good. just a note, my review of the request was not as detailed I was hoping for. I apologize I didn't have enough time for that. So I might find some like things, but from a first look, I took a like past few days, they were very good.

GB: Sure.

CZW: Oh, yeah. I really appreciate the work on the colli clarification made on the proposal, especially with the tuple request. But I, I think the pull requests were open last week, so it's a little bit late on the deadline, and I don't have much time reviewing on the change. But I, I the face was meaning on the module request key because, I commented on one of the pull requests. So I think the slides made this a little bit clear to me, but, I still the slides was made public. A few hours ago, so yeah. But anyway, I think I really appreciate the, clarification. On the pro, on, on, on the proposal. Thank you.

GB: Sure. Would it help? I certainly appreciate that the content of this one was added late. If, if anyone has any concerns about that and would, would like to, push consensus back, I'm open to that. and CZW, if it would work for you to say that it has consensus given your sign-off on the final shape of it, I think that would be accepted anyway. I'm open to whatever works best, given the situation.

CZW: Is this a question?

GB: Yes. Well, I guess the statement is, we can say that it has consensus based on your editorial approval along with NRO's final editorial approval. And then the question is if anyone feels that is not a strong enough claim given the late materials on this one, please say so. And I can always bring this back for next meeting.

CZW: Yeah, I think that would be great. I think giving reviewers a little bit more time to review the progress will be really appreciated. And we can come back and seek consensus on the normative changes again.

GB: Sure. Yeah. okay. I will add it, for the next meeting, to do a request for consensus on these changes with adequate review. And then instead of seeking the consensus now. Sure. Let me just go through the last slide.

GB: So, the, the other PR is the, the cross-roam case, which is just removing the cross-realm error. And I will defer the consensus on that one as well. If anyone has any further feedback, please contact me between now and the next meeting so that we can be sure that we've got all the feedback in for then. I'll move on to the next two items, very briefly. So the first one is a possible extension to the proposal. Which is feedback that came up, I believe, out of, Moddable's initial exploration of, of the source phase, but please correct me if I'm wrong. And the idea is, if we want a source phase import for built-in modules like, host modules, and if we would use the same module source or if we should have a different module source. and then you could also support this as a host module handle. and support it in different contexts. This one would obviously have an identity that is not related to the object because it would be related to the actual, built-in ID. So it would be distinct from the former change. but that is a fairly straightforward semantic for a, you know, either a synthetic module source or a, a built-in module source. So the idea is to either extend module source to apply to arbitrary synthetic modules.

GB: So, so either extend. So we use the same module source representation. Or have a new synthetic module source representation. This would be a normative change. And there is no spec text but, this is also made easier to consider by the current round of changes. So, what I'm looking for is if anyone has any feedback on this use case or interest in this use case. It would be great to discuss it further. I think that's that one. Yeah. NRO.

NRO: Is there anything in the current spec with or without notes requests that would prevent hosts from already providing their own built-in sources?

GB: Yes, that's correct. Sorry. I should have brought that up first. so with, with all of this, with built-in module sources, because we allow host module sources, hosts can define any module source themselves. And can very easily define, just like a web assembly module can be a module source, custom module sources. So the idea of a built-in module source or a synthetic module source would be a streamlined version in the actual ECMA 262 spec, which would make it more natural and more, basically bringing that into, into ECMA 262 as something available, more generally for synthetic modules. but, but yeah, what the, the functionality already exists today normatively. It's almost a refactoring, but, but it certainly is, is a normative change as well. Yeah. NRO?

NRO: Yeah. Just I think I'm, okay with the idea of having, like, synthetic module sources. If we're doing but for the host-defined modules, I'm not sure we should have that in the language. Mostly because not all places run JavaScript do have a built-in modules. Like, even just the web doesn't have built-in modules. So maybe it would be better, for example, for node to define its own node module source for its own built-ins. I-I'm not sure yet about what I prefer here.

GB: Yeah. Yeah. This is just an early, seeking early feedback on this at this stage. So, yeah. I'm I don't have a strong opinion myself. MM?

RPR: MM?

MM: Yeah. Just, just saying that, since you're asking if there's interest, I am interested. That doesn't mean I have an opinion yet. just wanted to register that, very interested in this extension. In particular, you know, in the compartments, we're keeping our eye on trying to enable, code running on one host, using compartments to emulate other hosts.

GB: Okay. It would be great to discuss that further. Thank you, MM.

RPR: CZW?

CZW: I think I should mention that this is part of the host integration. And the examples show that this is not just integration. And we should specify this before stage three as part of the host integration. am I understanding this correctly?

GB: I'm sorry. I'm not following. Can you just repeat that?

CZW: So is this a part of the host integration doc?

GB: This would be a feature on synthetic module records? To allow them to and, and as I say, there's no clear spec text here currently. And, maybe it will be onerous to specify. but the idea would be to allow synthetic modules to define, a module source, or to get a module source for free, basically.

GB: And, and we could make this optional as part of the create synthetic module source call. If, if they want to use it, they could opt into it. If they don't want to use it, they could choose to opt out of it. it yeah. Did th-that answer your question, CZW?

CZW: Yeah. Yeah.

GB: Okay. Thank you.

CZW: And I think, another point that I would like to, state is I would like to see the host-host integration, definition for Node.js in particular because, I think in the slides, we have mentioned there are web integration and compartments, integration with the WASM module source, and how it how they should, operate between each other. But Node.js VM module is already out there. And Node.js is one of the major runtimes that implements the virtualization of modules already. So I think it would be great if we can clearly define this space before we go to stage three.

GB: I guess one caveat I would add to that would be that we should not make stage three dependent on Node.js implementation work. because VM's API has a very complex surface area. And figuring out every edge case as a requirement for this spec would be an unnecessary constraint for this spec. But I think there are very simple ways that a module source can integrate into VM hooks. I-I think it's a very very straightforward thing to return a source in a hook. And support that in existing hooks especially with our identity model well-defined. So certainly let's have some more discussions to talk through that. But I'm-I'm hesitant to say that that should be a stage three requirement.

CZW: Yeah. I'm okay with that if we can explore how the integration would be like. Because right now, I think it's still unclear to me how the general picture of the Node.js integration would be like, especially on the node VM module.

GB: Sure. Let's have some more discussions around that. Thanks, CZW. Okay. And then the last topic I wanted to discuss both of the normative PRs were actually based on an editorial PR that does a module source refactoring finally. So this is something that we discussed previously about exploring whether we should properly separate the module source record from the module record. And if you recall, the first slide where you get the source text module record directly for the dynamic import it isn't necessary to do it because you can just get the instance record and then you're done. So it wasn't necessary for the specification. But exactly seeing the sort of questions that CZW has and for implementation questions, I think it would help at this point to think in terms of what it means to actually architecturally define a module source. And so a very simple formulation is just a non-normative editorial PR and instead of having this module source object that has a source text module record pointing to the source text module record we have a source record which has the module source and the host defined information. And we and it's that simple. It’s one slot on each. And then the host defined slot on the source record which in HTML, the host defined slot for those who don't know is the script itself.

GB: And so because if we're defining identity based on the module source, object, we have the entire identity there already, right? So it's fairly straightforward. That's your key. And so when you get a host loaded imported module, you take a module source record. And then you return the module source instance. And then we can define in the host invariance, all the keying semantics based on this key. Because we have the key. Now. So that's basically it. So we can integrate those the-the well-defined keying semantics in the same way. We can define all the invariance. We have a simpler model with actually more form with a more formal definition. And that's this PR #56. so yeah. that's everything.

RPR: So NRO says I like the editorial PR. End of message. CZW?

CZW: Yeah. I also like the new pull request especially as that clears my original question about how the host would interpret the module source record state. Because this record originally links to a source text module record. And this record contains other state, especially like `import.meta` objects and other states. So I think the refactoring would make it clear that how the the host should clone the module source and transfer the module source. Thank you.

GB: Yeah. I think it was always implicit. But it just makes it explicit in a way that makes implementation clearer. And thanks for confirming. It does look like that. The summary here is we've got the the-the two PRs which I'll bring back at the next meeting 58 and 61. And I will aim to do a short item to seek consensus on them having gone through the full editorial process and review process. Until then, we will pick up the discussions on built-in and I've- also referenced the existing HTML integration PRs which are all pending JS implementation progress.

GB: Okay. Thank you.

### Speaker's Summary of Key Points

* Provided an reminder of source phase imports & Wasm imports semantics
* Covered the ESM Phase imports current specification semantics in detail
* Discussed and justified two normative changes 58 and 61 for the proposal

### Conclusion

* While there were no objections for the normative changes in PRs 58 and 61, consensus for these changes ie deferred until the next meeting due to the late details provided and to ensure adequate review.
* In the mean time, will continue discussions on builtin source, HTML & Node.js integration designs.

## First-class Protocols Update

Presenter: Lea Verou (LVU)

* [proposal](https://github.com/tc39/proposal-first-class-protocols)
* [slides](https://tc39.es/proposal-first-class-protocols/slides/2026-03/)

> Slide: History

LVU: All right. So this is not a new proposal. This was started in 2017 by MF who's sitting right next to me. It reached stage one shortly after. There was an update in 2018. And then after that, there were crickets for like five years or so. Until November 2025 when there was renewed committee interest. And two new co-champions, me and JHD, and we iterated on it quite a lot. There's a lot of changes. And there's a big update today. We're not asking for stage advancement at this point. This is just today's agenda is just getting back up to speed with the proposal. What is the current status? What are the changes since 2018? What are some of the unresolved design challenges that we faced? We're hoping to get committee feedback on that on those, and hopefully unblock them. And the plan is to ask for stage 2 in a future meeting, hopefully this year.

> Slide: Motivation

LVU: So what is the motivation the original motivation behind this proposal? There's a lot of existing protocols that are kind of ad hoc right now.. The symbol-based ones all kind of live on the same Symbol namespace. So a primary motivation is to reify the existing built-in protocols in the language. And also give authors this expressivity. Allow them to describe and refer to their own protocols, their own interfaces. and once we have a standardized representation, they can be consistently introspected. They can be composed. And while most protocols in the language today are mostly around requirements, the this proposal goes one step further and supports both requirements and provided members.

> Slide: Design principles

LVU: So some of the design principles behind it are in general, we want to encourage symbol-based interfaces. There are many advantages there. There are obvious advantages to this. There should not be any coordination needed either between producers and consumers or across multiple producers. And symbols give you all the fun and convenience of monkey patching built-ins, but none of the downsides. They make it possible to monkey patch built-ins again without all the reasons that made this a bad idea. and also enable a more principled duck typing.

> Slide: Real world use cases

LVU: So what are some of the real-world use cases? I've kind of already alluded to some. There are already there's already a cornucopia of Symbol-based and string-based protocols in the language. Iterations, the canonical example, and more generally gen and generators. There are a lot of pro there are a lot of protocols to express capabilities to convert between different types of values like converting to strings, converting to primitives. Converting to JS how to convert this object to JSON. There's toString tag. around what will `Object.prototype.toString` return. Thenables, is concat spreadable and scopables and a bunch of less nice ones like the regular expression stuff, Symbol species. There's an array-like concept but it's never been formalized as a protocol.

> Slide: Real world use cases 2

LVU: The web platform and the DOM also have set-like and map-like that use a bunch of objects. and having a first-class concept for this also enables a lot more protocols to be created. Protocols around mathematical properties of certain structures where this makes sense. Or structured clone there could be a structured clonable protocol. many other languages support ordered protocols equals protocols. from iterators, protocols to go from an iterator to a builder. We could create Symbol-based alternatives of the existing string-based protocols. And once we have standard objects for these standards protocol standard protocols for these, we could implement them on existing built-ins and provide them for authors to use in their own objects. We could even add new protocols for operator overloading. There have been discussions around that. There are a lot of use cases. Obviously the deeper hierarchy goes, the more kind of use cases emerge for this.

> Slide: Real world use cases—DOM & Web Components

LVU: EventTarget right now is a base class. It should have really been a protocol. It means if you have an existing hierarchy, you cannot have an event target. Having a protocol for that would solve this. There are other elements that are more th-there are other base classes that are kind of more questionable like HTMLMediaElement. But it would be more flexible as a set of protocols. Like now there's a bunch of HTMLMediaElement features that we want to add to the image element. And but we don't want to wholesale pull in the entirety of HTMLMediaElement. So we're just gonna add them ad hoc like, oh, let's add current time to it or let's add the controls attribute. If there were protocols for this, this could be done in a more structured way. There's a bunch of element capabilities that are just implicit and they're not described by anything. Like focusable, labelable, pop-over target, form associated. Web components need to pull in these capabilities on a case-by-case basis rather than altogether. And right now this is done through forwarding through this element internals object, which would have been much easier to manage as a set of protocols and would have provided a lot more flexibility. there would also in the web components, there could also be a lot of protocols for improved ergonomics like to manage CSS states, styles, templates, and so on.

> Slide: Design circa 2018

LVU: So to refresh people's memory 'cause it's been a while, what did the design of protocols look like in 2018? Declaring a protocol looked like this. If bare property names declared a required member. These members look like string members, but they're they would actually create symbols behind the scenes. So you would implement them by either referencing the Symbol directly. Or and there then there was an imperative method as well. As the declarative syntax. And you could even have a grouped syntax as a class element. So in summary, the 2018 ma syntax-covered protocol declarations and there was a corresponding expression syntax. Members were declared either as identifiers, but they were actually implemented as symbols. And there was syntactic sugar for defining and using these symbols. Or you could just use them directly. Required and provided members were basically what type of member you had was basically determined by whether it had a value or not, accessories and methods were provided, anything else was required. There was an implements operator to check whether a-an object implemented a certain protocol. There was an imperative API for both of these. and it was very class-centric. It was integrated with class fields and there was a syntax for inline grouped implementations in class bodies.

> Slide: Explicit required members

LVU: And so what has changed since then? Many things have changed. The first thing is that required members are now explicit, which gives us more flexibility about what we can do for both required members and provided members. Back then it was very confusing to people that were new to protocols. Like it was unclear what were the required members, what were the provided members. Basically, if you just had a name, it was required. Otherwise, if you had a method or an accessor, it was provided. There was no obvious extension to adding additional constraints, which is which is the plan for the future. like right now it's only about presence. Required constraints are only about presence. Down the line, at some point in the future, we would want to be able to have additional constraints. And on the provided side, it was not easily extensible to providing actual data, actual data properties. Now there's an actual keyword, which we've currently called requires. abstract would be a valid choice as well. It is more consistent with other languages, but potentially less self-explanatory to someone who's not familiar with these other languages. There can be a case for either of them. Anything that doesn't have requires is provided, which also allows allowed us to provide regular data properties as well. And also one one reason for this was that required members are usually a lot fewer than provided members. So it iis not a big tax. And it helps a lot with clarity.

RPR: LVU, would you like to take questions in line or at the end?

LVU: We were thinking at the end because there's a lot of design issues that kind of relate to each other and affect each other. So we were thinking of doing that at the end.

> Slide: ComputedPropertyName for literal member names

LVU: So previously, there were only two types of members, either identifiers that generated symbols behind the scenes or quoted members. That added a literal string property, which meant there was no way to use external symbols. How do you express a protocol that can only be implemented on iterables? Like you could not require `Symbol.iterator` as a property. whereas now we use computed property names for declaring a literal name. So an identifier still creates symbols behind the scenes. Nothing has changed about that. whereas a computed property name means use this exact name literally. So if it's a string, it's using that exact string literally. It does not generate a Symbol. But it can also point to external symbols that are already available. Possibly from another protocol or existing well-known symbols.

> Slide: Framing around objects, not constructors

LVU: Another change is we've gotten rid of all the framing that was specific to constructors. Now the entirety of protocols is framed around objects in general. It still accommodates constructor use cases, just like it did. But all concepts are now generally around objects. So with the preview syntax, for example, there were dedicated static members. either as requirements or as provided members. Implementing a protocol on an object meant that all the direct members or all, all the direct protocol members were actually added to the prototype object of that of the object that the protocol was being implemented on. So it didn't work very well on instances. It didn't work very well on like ad hoc object literals. and it was only static members that were actually added directly to the object. Which also had the unfortunate effect that the ‘implements’ check returned false. On actual instances of the class. Whereas now there’s nothing to special case for constructors. It's all framed around objects. So implementing a protocol on an object adds its direct members directly on the object. And there are subprotocols for implementing members on an object that lives on a property of that object. So we dropped static in favor of subprotocols because you can just include static members on a constructor subprotocol. And the only difference is we still have the dedicated syntax for class heads. But it's now sugar for implementing the protocol on the class prototype. And as and that means that also the implements check on instances still will now return true. There's a bug on this slide.

MF: Yeah.

LVU: Anyway, hope, hopefully it's self-explanatory with that anyway. But yeah, that last line there should have been UC implements P, and it would have been true. So we also dropped some of the more special case syntax. Like we no longer have implemented by blocks in, in classes. Most of the protocols that we looked at had like one or maybe even maybe two members. The vast majority of protocols that we looked at actually had just one member. So the ergonomics advantage that this provided was marginal. And we figured maybe we can add it later, but it doesn't seem MVP. And we and we also dropped the inline implementations for existing classes from protocols. Like previously you could provide implementations for even built-in classes in your protocol. We also decided to defer that.

> Slide: Protocol flattening

LVU: One bit that was kind of undefined before that is now more well-defined is how do you implement multiple protocols on a class? Obviously, this has always this has always been the goal to be able to implement multiple protocols. But how does this work actually? Are these protocols implemented independently, one after the other? That means that if a protocol is partially satisfying another protocol, you don't get that benefit. The class still needs to satisfy the requirements of each protocol individually if it worked like that. So instead, the way we decided to do this is when you're implementing multiple protocols through a class head, they are first flattened into a single protocol. That includes the union of all provided and all required members. And then that union protocol, that flattened protocol is what is actually being implemented. And since we're gonna define that algorithm anyway, we figured we can expose it to authors as well. Via a method, which we called `protocol.union` for now.

> Slide: Protocol introspection

LVU: Also, previously there was always the goal to be able to access protocol members independently, either that was to create new protocols or to like to use them in any other way. But this was not defined at all. There was no way to do this. And it is non-trivial because what namespace do you use? The actual protocol object uses anything any property, any string property on that object could actually be a Symbol. So instead now we've introduced a `protocol.describe` function that returns an object literal that fully describes this protocol. And that can be fed directly to the new protocol constructor to create a new protocol. Obviously it can be tweaked in any number of ways to create a derivative protocol. And the object shape is TBD. We, we do have some ideas about it, but also depending on what we decide on the open questions, that will also inform what the shape of that object literal is. Is going to be.

> Slide: Immutability

LVU: We also decided this was also undefined previously. We decided the protocols are immutable. If you want to tweak an existing protocol, you can create a new protocol. And that is why they're so introspectable. And you can get all this information about them. So that you can create your own new protocols but you cannot tweak existing protocols. So if an object is satisfying a protocol, that can be guaranteed to continue to be true at least if the object doesn't change.

> Slide: Reducing boilerplate

LVU: A big tension in protocols is that their design avoids conflicts by using symbols. But when you actually implement them, on an object, sometimes you implement them just for their functionality and you use them internally and that's totally fine. You can just use the symbols. But often you want to expose this functionality as an API to your own consumers. And then you need to to, to create to write a bunch of boilerplate for example, a common case with web components with custom elements is creating form-associated custom elements. And there are a bunch of methods that are expected to be there for any form-associated HTML element. And if we had a protocol like this, you could implement it like this. Like all you need to do is wire up what is the actual value of this form control. But then you would need to add accessors to map all of these provided members to actual string provided members that you want to provide even though they might be exactly the same. But also one potential solution is if this protocol is defining strings. But that kind of defeats the point of protocols, and it moves control from the implementing object to the protocol. So it moves control from consumer to producer. But often the same protocol you might want to use in both ways. Like in some use cases the same protocol is used as an implementation detail. And in other cases the same protocol is exposed to consumers. So what if it were a property of the actual protocol to object relationship? What if it were a property of the implementation itself?

> Slide: Auto-generated string aliases via factory

LVU: And I originally thought maybe we can add some kind of syntax when you're implementing a protocol. Like maybe there could be an option or maybe there could be a keyword that says like add string aliases for all provided members. And it is an open question how to even name this concept. We called it withStrings for now, but it's such an awful name that we're gonna be forced to change it. But then. We realized a more flexible way might be to just have a function that takes a protocol and returns a protocol that has the string mappings. So then you it's it is still decided at the point of implementation. You can either implement P or implement protocol withStrings P. It adds a little bit more noise but not very much. It can be memoized. So you don't get a whole new protocol each time. Like the same input protocol should give you the same output protocol since they're immutable. And then you could even reason about them separately. You could check implements separately and, and it adds no actual complexity to the underlying protocol implementation 'cause it just sits on top of it.

> Slide: Open Questions

LVU: So this is the current state. These are the things we're kind of more confident about. Obviously everything's up in the air. But there's also a lot of things that we are less confident about and we don't quite know which way to go. And we were hoping to get feedback on these. So I'm gonna go through all of the open questions at once because they are very interrelated. They affect each other quite a lot. But this is this is a summary of them.

> Slide: Are `“foo”` and `foo` distinct members ([#59](https://github.com/tc39/proposal-first-class-protocols/issues/59))

LVU: So the first one that keeps coming up in a bunch of design dilemmas is so right now we can have literal strings and we can have identifiers that create symbols. Should you be able to have a distinct string and a distinct Symbol member with the same name? 'Cause this complicates the API shape for anything that references these members. For example, `protocol.describe`. It's very convenient for it to return an object literal with a string key for every member and an object that has metadata about that member. Like what is the value? Is it required? And so on. You can't do that if these are distinct members. 'cause now they would map to the same string. Whereas if we say no, you cannot have both of them. then we can actually have this nice API shape.

> Slide: Should `constructor` and `prototype` be automatically strings? ([#84](https://github.com/tc39/proposal-first-class-protocols/issues/84))

LVU: Also I remember we dropped static in, in favor of subprotocols. And like nested deep protocols and right now if you want to it is up to the auth it, it is up to the protocol author when they're writing a protocol for a class whether to define that protocol as primarily static methods and then prototype methods or primarily instance methods and then static methods. The standard recommended way is primarily instance methods and then the static members as a nested protocol on constructor. But here's the thing. By default the way the protocols work if you write an identifier of constructor or prototype these would create symbols. Like these would create `P.constructor` and `P.prototype` symbols. But a protocol is an instance of the protocol class which means that technically I mean it doesn't have to be that way but technically `P.constructor` should be pointing to protocol. And also there are uses for `P.prototype` that we're gonna see in a bit. So we probably don't want that. And it's also kind of a bug factory. Like you almost always need the actual strings in that case. So a very easy way to deal with that is to just say constructor and prototype are automatically strings. You cannot have these as regular Symbol members. The alternative is to just say you can't use these as identifiers at all. But if you're gonna have an, an exception anyway maybe we should do what people are actually expecting. I don't know. There's the argument that this might complicate the mental model too much.

> Slide: Protocol inheritance

LVU: Also there's the question of protocol inheritance. You very frequently need to build on top of existing protocols and add more things to them. So with the strings factor is an example of that. It takes a protocol as input and it creates a protocol that is a superset of that protocol. How do we implement protocol inheritance? Can people use extends, implements or both? Like implements would pull in other protocols prob multiple of them in the same way that classes can use implements to add to implement multiple protocols. Except it would work slightly differently from protocols because the protocol itself cannot satisfy another protocol except partially. Any, any non-satisfied requirements would be propagated to when that protocol is actually implemented. Extends on the other hand kind of implies a prototype chain—would it work this way? If we use extends only then it would be limiting if it only supports one protocol to extend from but it would be inconsistent with classes if it supports multiple. Or we could just have only implements and, and avoid that altogether.

> Slide: How are parent symbols accessed ([#81](https://github.com/tc39/proposal-first-class-protocols/issues/81))

LVU: Regardless of how we're doing inheritance there's also the question of how, how to access parent symbols. Suppose you have a protocol that extends another protocol. Do people reference these symbols only through the original, the parent protocol or are they copied onto the child protocol as well? In some cases it is reasonable to reference the parent protocol because maybe it's a well-known protocol. In other cases the parent protocol or the all, all, or the multiple protocols that this might be pulling in might be seen as implementation details and maybe I don't want to expose them to my consumers. And a similar dilemma comes up with subprotocols as well. How do you access this bar member here so that you can actually implement it? You could use `Protocol.describe` or and depending on how we define that it could even be nested `Protocol.describe` methods and calls. But that is extremely unwieldy. It would be nice if there was better syntax. It cannot be `P.bar` because then what happens if P has a bar member of its own? Maybe it could use the foo Symbol because every subprotocol is also an implicit requirement as well. So it will create a `P.foo` Symbol. Or if we decide that you cannot have a string member and a regular member with the same name it could even be just a simple `P.foo.bar`. All right. So that's it. And let's go to the queue.

MM: Okay. Good. So I've got a few questions. First one: are protocols themselves mutable?

LVU: No. We covered this already. Protocols are immutable.

MM: Okay. I'm sorry. I missed it. Okay. Where is the semantic state stored to enable you to do a, to ask the question at runtime does this class or does this object implement this protocol?

LVU: So right now there was a strong consensus amongst co-champions that this should be done with duck typing. An alternative design is that you could store which protocols this object implements but I believe we there generally this was not .

MM: Okay. Good. Those were the two alternatives I had in mind. If you do it with duck typing then if you, you say declaratively that you implement protocol P which provides a method bar and then later you remove the method bar from the class since classes are mutable the duct typing would imply that, that the class no longer implements the protocol which seems like a fine conclusion. Okay.

LVU: Correct.

MM: Okay. so, so good. Are these symbols that are created unique symbols or registered symbols?

LVU: Unique. Unique symbols.

MM: Okay. Those are my questions. Thank you for the clarifications.

RPR: ACE.

ACE: You don't have to go deep, deep, deep into this 'cause it's early and you're asking a stage thing. But I wonder what your thoughts are around on the clash with TypeScript here. Like TypeScript already has implements X which is erasable. Like for me I have like my TS blank space library if I see implements blah I remove that. You, you could say or you can look up and like what does that resolve to? If it resolves to a TypeScript type you remove it. If it resolves to a protocol you keep it. But that's like makes it way more complicated to do the TypeScript transformation if you knew you had to look up symbols. Right now I don't have to do any scope analysis, any Symbol tables, and no cross file. It's all purely local. Would you consider a different keyword? Just interested in your thoughts.

JHD: Yeah. So a different keyword would be certainly worth considering although this seems to be the correct one and it already can't be named interface because of TypeScript. So it would be sad to choose a second subpar name for that reason. But also I'm pretty sure is are you just talking about the conflict in class heads?

ACE: Yeah. Class blah implements foo.

JHD: Okay. Yeah. Then I mean I would say the only way to resolve that if we shipped the implements keyword would be to know if the right-hand side of that keyword was in type space or value space basically. That would certainly complicate TS blank space. But yeah. If you have ideas I mean I think file an issue.

LVU: Yeah. I think a good solution to that would be to find a nicer keyword that also makes sense like then why not?

ACE: Yeah. I mean to, to add to I primarily I think it's a it's annoying technically but also for pe learning this like we've been ingraining for the last 10 plus years the implements is has no runtime semantics and then not, not only would we teach the tools but we have to teach humans and other things that write code these days what these mean. I'd be interested in exploring other keywords. I appreciate it's unfortunate but many things in JavaScript follow that attribute.

DRR: So with respect to being able to determine whether or not something on the right side of an implements is actually value-ful, that's not a thing that most compilers apart from the TypeScript compiler itself can determine. Most compilers use only a single file's context at a time. So they don't do any sort of resolution to determine whether or not something is only defined in like type space or value space, meaning like JavaScript's binding space. So while it technically would be feasible for the TypeScript compiler a lot of people don't use the TypeScript compiler for compiling TypeScript. They use Oxide, Babel, things like that. Just build whatever. So I think that that is a bit of a challenge.

DRR: I also have the next item. The other thing that I have I mean this was this similar sort of feedback that I had last time this was presented. But basically the fact that identifier named members don't appear as identifiers for the people actually implementing the protocol is a fairly confusing interaction. It is kind of a surprising thing that basically you know, you define something in the class with an identifier or an object literal or anything like that. That defines a member of that name whereas now you end up with something that you have to define through an accessed field in some way or you basically destructure it in, into some like first-class value locally. I think that that's definitely a foot gun and it's, and it's surprising semantics that you would have to define it as a string literal. It's not really a thing that we have anywhere else in the language. I think that also kind of I don't know if I want to keep time open to dis-discuss that specific topic.

MF: I can respond. I understand your initial surprise at it because it's not how other syntactic constructs in the language work. They are strings. We feel it's just very important, like a core part of this proposal that we need to encourage Symbol-based protocols. We need that to be the easy and convenient thing to do. And that makes it worthwhile. We could explore what it would look like to, you know, call out the Symbol members in some other way. But, you know, from what we've looked at so far, that's the design that this champion group prefers.

DRR: Under yeah. I do appreciate that specific point. We also got a reply from SHS.

SHS: Yeah. I'll just call out that some tools actually make a distinction between identifiers and quote strings. For optimization purposes. So for instance, closure compiler cares about the two and treats them differently. So this would kind of break that sort of treatment for what it's worth.

MF: Right. Closure compiler doesn't have support for protocols.

SHS: No. It doesn't. I'm what I'm saying is it would, it would have a hard time dealing with this i-in the future if it would were to be part of the language.

MF: I don't understand how. Wouldn't it just be a completely new thing? You're just saying you wouldn’t be able to reuse the same logic that you do for classes or something?

SHS: No. No. What I'm saying is that the closure JavaScript is basically a different language that that treats quoted names, quoted property names as different from identifier property names in optimization.

MF: In Object literals and classes?

SHS: Everywhere. Yes. To the extent that if you quote a property it will never be renamed. If you use a dot identifier then it may be renamed. And that's actually a very important distinction. I'm not sure if closure's the only thing it does that but that is sort of a tooling consideration to think about.

MF: Okay. Okay. Thank you.

RPR: Just for awareness there's five minutes left on the time box and we are gonna have to stick to that. OFR is up with a re-reply.

OFR: Yeah. Maybe I'm not fully understanding the proposal yet but like also with this point of why does it have a different syntax. even I, I even have I even struggle to understand the require because isn't like isn't that just a like in a not in most other languages it would just say function foo and that would imply that an implementation would have to implement this function to implement this protocol. So I don't understand why that needs a different syntax than a class literal.

LVU: So `requires` is basically the members that you need to the members that the implementing object needs to have a to, to implement so that they can actually use that protocol. Like if they try to use a protocol to implement a protocol without having the required members that will throw it's basically kind of similar to abstract members. If you've used like any language that has interfaces like you could see this as the you could see the provided members as the default implementations and the required members as the abstract members, if that helps.

OFR: Right. But I don't understand why it needs to look different than declaring a concrete superclass. to declare an interface.

LVU: You mean why the syntax for required members needs to be different?

OFR: Yeah. I mean why is it not just like a normal member but without a definition?

LVU: So that is what you're right. So basically why did we make this change? So first off there was the, there was confusion when people looked at code written with protocols like it was not immediately obvious what was required and what was provided. Also down the line we want to add additional constraints, and there's many potential constraints you could envision. Like maybe a certain member needs to pass a certain test. Like maybe the maybe it's descriptor needs to pass a certain test or maybe it's value needs to pass a certain test or it needs to maybe it needs to descend from a certain type. Like there's many possibilities there. We don't know how this is going to evolve yet but we do know that we want it to evolve at some point. And this and being able to syntactically tell the difference between the two types of members gives us a lot more flexibility whereas otherwise for example right now with the current syntax you can have data properties. You can provide data properties. And that just set that just pro that just set a property to a to a certain value and that is a provided member. It is kind of weird if when you omit the value then suddenly the function of this member changes completely. 'Cause it still looks like a data property. Like in, in classes for example in constructors like you can't have both syntaxes and they don't change that dramatically. Like what, what this means.

OFR: I understand it was a design choice. But I think I'm still unconvinced that this kind of abstract class looks so drastically different than a concrete class in syntax.

RPR: So we have two minutes left. And there's quite a long queue. And a continuation tomorrow.

JHD: I just wanted to add one thing. These are not only usable for classes. They're also usable for objects. So it would be weird if they had two close syntax to classes in my opinion because a code base with zero classes and, and many protocols would not expect that similarity.

DRR: What I would say is consider a design where this proposal is deconstructed into like maybe three general directions that you can target. One is where you define new symbols that are off of a common object. You should look to enums for that. Another is being able to append existing members like these default members that you have. That would be something akin to I guess mix-ins or something along those lines if you want to use that terminology. And the other is being able to ensure that something actually satisfies an interface. You can lean on TypeScript for that for people who actually care. I kind of doubt that engines actually want to do the validation at runtime that this thing actually implements a type. I also think the people who want to use this feature are probably also using a type system to be honest. So that's my input on this proposal. Otherwise I think it's a lot of things wrapped into one direction which I understand. But I think those three decompositions would make things a lot easier.

RPR: Thank you, DRR. I'm so we're at the end of the time box now. But this will continue tomorrow. So don't worry. We've, we've captured the queue. So everyone that has registered questions so far CDA you have a screenshot? All right. Thank you, LVU. In the remaining few minutes I think we have a special announcement.

### Speaker's Summary of Key Points

* Gave a quick reminder of the old protocols proposal status
* Introduced new champions' group
* Showed off the new design changes that have recently been decided upon by the champions' group
* Went through the unresolved design challenges
* Received committee feedback:
  * MM cares that protocols are immutable (in that a implements test won't change if the object doesn’t change), that they use property tests instead of branding, and that the generated symbols are not registered symbols
  * ACE and DRR are concerned about `implements` in the class head and how that would affect type-stripping tools that can't tell apart term space from type space
  * ACE is also worried that people have learned over many years that implements in the class head has no runtime behaviour, and changing that could be confusing
  * SHS and OFR are concerned about using identifier names for generated symbol members in protocol declarations instead of annotating them in some way
  * DRR would like to consider splitting what's contained in the proposal into 3 parts:
    * convenient way for mass-creating a group of associated symbols (enums?)
    * a mechanism for copying groups of properties from one object to another (like Object.assign?)
    * an operation to check that some description of an interface is satisfied by some object

### Conclusion

* (continued)

## TG3 Security Update

Presenter: Samina Husain (SHN)

CDA: TG3 security update. TG3 continues to meet weekly to discuss the security impacts of proposals. Please join us weekly on Wednesdays if you would like. Some may be wondering why this item appears here in the schedule and not where it normally is. And that's because… SHN, over to you.

SHN: Okay. Thank you very much. I wanted to take a few minutes before the day's over. We've had a few milestones. There's one very big milestone that we also have to recognize and I would like to share my screen.

SHN: So I'd like to share my screen if I can. Give me a second. So a recognition award. So the reason I'm up here is I wanted to recognize RPR. So as you all know in the July GA of last year, RPR would receive the recognition from ECMA. and I was unable to go to the Tokyo meeting. And I wanted to share this award personally with the committee and RPR. So, RPR there's a beautiful citation which I will share when we're having cake about your exceptional leadership. your consistent support. Your ability to keep this committee running smoothly over the many years. And many more things. It is truly appreciated by the whole committee and by ECMA, the work that you have done together with your co-chairs but especially you and your work. So if I could ask you to join me here please. Oh, and it's RPR’s birthday.

SHN: Rob, I have a birthday present for you and it is so heavy. I have to put it down.

SHN: Okay. So I learned a few things about RPR. I will then pass the mic around and you all can make comments. But I learned not only that I've known him only a few years that he loves his color for shirts. Probably that brings that peace into the room when we do our work. He has this baseball cap. I'm gonna try to convince him to use this one in the future. This is for you.

SHN: And I learned that RPR likes whiskey. I did not bring any liquid with me but I may have to think about that. I didn't know that you liked whiskey so much. But what I have is something else. It's quite special. So

SHN: I'm not quite as tall as RPR. Okay. I'm gonna have to give you the somebody's gotta take the mic. And hold it 'cause I did break a wrist and it's the right wrist and it's very heavy. I need a volunteer to please hold the mic. I love this. Thank you. You know, it's like when you when you're when you have a fan fanning you when you're the queen. Okay. RPR. On behalf of ECMA and the whole committee please accept this award for your great efforts and your work. There you go. Congratulations.

> Much applause

RPR: Thank you. Thank you. It's beautiful.

SHN: I hope you'll enjoy it. I hope you'll enjoy reflecting upon it. And remember all the good work you do and your committee.

RPR: Yeah. This is wonderful. Thank you so much.

SHN: I'll have to consider the liquid next time. All right. I am going to pass the mic around for others to make comments from your memories of working with RPR. I also want to share that we have done a few milestones today. Not only the recognition for, for RPR but also Temporal. So outside when we adjourn there is there's some Swiss chocolates. It's about a kilo. So it's 100 grams for every year of Temporal. And then the remainder of the grams left over is for RPR’s effort. So that's the 1,000 grams which is a kilo. And of course a chocolate cake which is apparently quite delicious from New York. So enjoy chocolates from Switzerland. And across the waters also from New York. So first a speech and then others.

RPR: I was not prepared to make a speech. All I can say is that it's a pleasure to work with each and every one of you. I've seen from like first arrival I don't know what preconceptions I may have had but I know that, you know, everyone here is dedicated to making the language better. They truly mean it in individually and, you know, as opposed to the more, you know, the wider interests and so on that sometimes bring us here. So thank you all for caring so much. I'm here to support and serve and hope to continue as long as you want me. So thank you.

> More applause

SHN: We, we cannot not let Rob go away. And I'm sure. I also understand others. Okay. So my comment was we cannot let Rob leave without comments. And since I know others also like whiskey. They have got to be amazing stories. And I thought Aki, you may start with one. Since I know you've been on the table before.

AKI: Call me busted. So I told SHN about the spreadsheet that the chairs kept that a lot of you probably don't know about. But there was a period of time where I feel like we had several meetings in a row where wherever we were it was nighttime for everyone. Like it just kept on happening where it was like evening for someone and night for someone else or something or like someone was traveling. And so we started, you know, having about half an hour before the end of the meeting we would between the three of us kind of quietly have a little whiskey toast. And we started tracking our whiskies and including our opinions. Then we when we started doing in-person meetings again we, we would have some whiskies and leave our notes and that included non-alcoholic whiskies, you know, to be inclusive. When I got rid of my Google account, the only thing I kept was our whiskey spreadsheet.

SHN: Other comments about Rob while we put up that slide that I was unable to share. Good comments obviously. 'Cause there's nothing but good things to say.

DRR: I just wanted to say that throughout the years on TC39 working with RPR has always been a pleasure. I know that he's always done his best to bring everybody together to try to make sure that the language is the best that it can be. And that this committee works the best that it can together as a chair. I think you've done a phenomenal job. And I think, you know, you're probably one of the most fitting people I can imagine to do it as well. Thanks for all that you do all the time. yeah. And I don't want to gush too much because then I'll start tearing up.

SHN: That was nice. Thank you so much. I put up and I asked thank you so much for putting up the slide. So RPR, this is a citation that the committee gave to the general assembly on, on your behalf for the award. I've just highlighted a few words that I was trying to also highlight earlier about your work which is the outstanding and lasting impact that you have in the committee. The balanced solution, your leadership, your unwavering support. And of course you will have all of this we'll send it to you so you can then frame it next to your, your award.

RPR: That's wonderful.

SHN: Okay. We have cake outside. So you can all congratulate Rob outside also if you're ready for cake. But you're all ready to speak. I will stop talking now. It's, it's up to you all.

CDA: Yes. Would anyone like to say a few kind words about Rob? We'll save the airing of the grievances for the dinner later. Please.

JGT: One thing that I'm always aware of is that most of the engagement of the people in the world with TC39 is not in this room. It's online. It's elsewhere. And one of the things I always really appreciated is your hyping what, what we do online in various places. And, and I think that's really important because, you know, we can make all the great decisions in the world but unless the people out in the world know about it and unless they support what we're doing it doesn’t matter. A-and so I just really want to both congratulate you for doing that and encourage everybody to try to, you know, do what you can because most people are completely unaware of anything new that's happening anywhere. A-and so the more we can collectively do it and I think R-Rob, y-you're showing the best example of how to do that. Thank you.

JSL: I’ve been involved with standards in some way or another for like 25 years. And, you know, W3C, IETF, you know, a bunch of them. This is probably one of the only times that I've seen a chair actually maintain a happy disposition. Out of all that time. So, you know, I think that, that really goes to credit just who you are. And leading us. So thank you.

CM: So one of the things that's striking is, sort of echoing what he just said which is for somebody whose job is making the trains run on time and, you know, imposing order and discipline on a bunch of unruly and highly opinionated people. You've done this with an uncommon amount of kindness and decency. And that's much appreciated.

JHD: So when I first started on the committee in 2014 we had a chair. That chair was a nice man. But he did virtually zero for the committee. His job was to be a warm body that wasn't employed by Google, Microsoft, Apple, or Mozilla. And he did that job. He did that job very well. and so when we started when he retired and we looked for other chairs I was always kind of like, "Huh, I wonder what we need a chair for. We're doing kind of okay." Like we manage ourselves when we yell at each other and, you know, like I think we I don't even think we'd started using the cueing software yet. So things were kind of okay. But, and then we had another chair for less than a year that didn't work out super well. But ever since then I think that the chair group as a whole over time has done a tremendous job managing this very fast-growing group. Like I think there were less than 20 people my first meeting and now like in the room we have 30, 34 I think. And there's like 80 people that could be calling in or attending so yeah. I just and then echo what everyone else has said in like about RPR’s kindness and, and sort of happy disposition while managing all this stuff he's also an engineering manager. So he's also dealing with that stuff which is probably not stress-free. And on top of that he has for me personally stepped in to mediate a conflict with another delegate very gracefully and elegantly in a way that I would certainly not have been able to do if I were in his shoes. And it's quite impressive. So I think I, I hope that you do remain around for a long time.

KM: I was gonna say basically the same thing that JHD said but I'll repeat it in my own words. 'Cause I think it deserves restatement just because of how impressive it is. Yeah. I mean, I distinctly remember the let's call it the, the pre-RPR era of TC39. I distinctly remember there being huge fights, people storming out of the meeting room, meetings where delegates quit and never came back. Just bad stuff. And that doesn't say every meeting was bad but the I have yet to see any of those since then. In the, in the, in the now RPR era. So I think that deserves just credit in and of itself. I mean, it's, it's, it's, people here have strong opinions. They're very passionate about, you know, how JavaScript should evolve. And the, you know, the ability to steer through all of that, keep everybody happy, keep people coming is in my opinion as remarkable as the fact that anybody actually has a working JavaScript implementation. Maybe more impressive. So yeah. Thank you.

RPR: Sorry for, for people not in the room. I just want to say that means a lot. But also there were many people taking steps to change the way the committee operated for the better. I do I think a lot of it comes down to BT introducing TCQ as well as the code of conduct committee and the inclusivity committee that we had. So yeah. It's been a very group, group effort but yeah. It's important. All right. Is it cake time?

SFC: It's hard to add to what everyone else has already said but I just wanted to reiterate how I think one thing that you've done as chair is really make the, this, this standards body very inclusive. It's very, it's always been very welcoming. I think that it really helps that we've been able to bring on, you know, people from all different a-all different areas of JavaScript, all different, all different types of, of experience in this field. And then have us all be able to work together. I think that you've been really doing an outstanding job in making the body being, being a welcoming and inclusive type of environment that makes it a pleasure to continue to contribute for, for all of us. I think that's, that's, that's, that's great. And yeah. Also I'll everything that you've done to you know, balance the transition into COVID and then out of COVID in terms of like in-person meetings and, and hybrid meetings. I think you also handled that situation very, very well. And I, you know, look forward to continuing that.

RPR: And thank you, SFC. So I did want to say something you reminded me of there is that I feel like I didn't know this stuff before I came in. I learned it from the other people who are here. Like MBS, like AKI in particular. USA and CDA, they teach me all of these things. So it's a shared effort.

JKP: I just wanted to say that I think it was cool that SHN learned that RPR likes hats and whisky. But getting to work with RPR, I know that he loves praise and he has never been happier than when he's in the spotlight. But I did sincerely though want to say that you're the reason that I joined TC39. It's been incredibly fulfilling for me. And I do agree with a lot of the earlier statements. Like your kind of outreach and inclusivity and like keeping, getting everyone involved has been really impactful and really meaningful. So thank you for that.

CDA: All right. I don't want to keep torturing you but I feel like I should say something. You know, I don't want to repeat what everybody else has already said. But of course I have an additional perspective than most folks because I am on the chair group with you. So I think all of these same qualities that folks are bringing up, he also brings to the chair group. And what I mean by that is like, you know, the chair group meets weekly. All the stuff we're doing behind the scenes. Whether that's things like conflict resolution or beating planning or everything in between. And Rob is obviously, you know, a huge part of the chair group. I could not imagine him not being there. I secretly am deathly afraid that one day he will leave the chair group and I don't know if I would be able to continue on. so really happy that he's here and doing this role. thank you.

RBR: So one memory that I have about us and together is actually in Spain. And like I find your shirt is very fitting in this case because it is like a very nice atmosphere that I remember us just being at the beach and enjoying the time there. And honestly speaking, like where I before I joined TC39, I heard also all these horror stories about how it has been earlier without knowing anything in person. Being here I must say I have never ever in my life I believe seen a group of this size with lots of strong opinions where there is not someone speaking loud or anything like that. It's like the atmosphere of your shirt is the atmosphere of the whole room. And this is kept all the time. And this is amazing.

CDA: All right. Have we put Rob through enough?

SHN: Yes. Can I have the last word? I get the last word.

SHN: Thank you, everybody, for your comments. They are all so wonderful and meaningful and Rob is wonderful. I wanted to thank everybody also online. I'm sorry that you're not here with us. We are gonna celebrate with cake and chocolate. And there will be a social dinner this evening in which you may further celebrate so we will miss you for that. But we will be on time tomorrow. So on that note, Rob, and everybody, let's have some cake. And so let's continue the celebration or Rob, would you like the last word? Rob, cake. Rob wants cake. Thank you very much.

CDA: We are. Just to be clear. The cake is also for Temporal. I think it might actually be exclusively for Temporal. But plus RPR’s birthday. So there's that. So yeah. Can we get one more round of applause for the combination of Temporal stage four and RPR’s ECMA recognition award?
