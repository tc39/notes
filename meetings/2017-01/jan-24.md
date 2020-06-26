# January 24, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Jordan Harband (JHD), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Chip Morningstar (CM), Dave Herman (DH),  Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Michael Saboff (MLS), James Kyle (JK), Franziska Hinkelmann (FHN), Anna Henningsen (AHN), John Lenz (JLZ), Sebastian Markbåge (SM), Bradley Farias (BFS), Jeff Morrison (JM), Tyler Kellen (TKN), Gabriel Isenberg (GI), James Snell (JSL), Maggie Pint (MPT), Chris Hyle (CHE), Gabriel Isenberg (GI), Bert Belder (BBR), Zibi Braniecki (ZB), Jamund Ferguson (JXF), Mathias Bynens (MB), Leo Balter (LEO), István Sebestyén (IS)

-----

## Adopting the agenda

- Start with István's items to get them out of the way
- Jeff Morrison more free on Tuesday, preferably

AK: This may take less than three days.

Adopted the agenda

## Adopting the minutes

WH: Technical issues prevented us from approving the minutes: ECMA's web site is down. Their Pydio substitute has an invalid SSL certificate. If you ignore the errors and try to access it anyway, it runs scripts that time out.

IS: No one has reported that back to us directly... We have also another substitute which is not yet announced. Allen has I think access codes. Maybe that one works better. Please try it, but not everybody at the same time ;-). It is only a substitute.

JHD: Why not make the notes the official minutes?

AWB: The notes are appended to the minutes, but there is more in the minutes.

IS: Correct.

JHD: Do those on our own without relying on ECMA?

IS: To my understanding the Technical Notes of a Meeting are for you, and one can access it via this address.

WH: ECMA act as librarians for a long-term record. Our many past attempts have not lasted more than a few years; see, for example, what happened to our ecmascript.org.

IS: Exactly. We have a long-term archival obligation. We are trying to archive the most important documents of the standardization process and this in a way that is accessible and understandable to every ECMA member. Many of them simply do not know the present and past TC39 tools

AWB: There is room to work with ECMA to improve the infrastructure for taking notes--if someone wants to do that, everyone would probably appreciate it.

IS: We could upload the ECMA minutes on the GitHub to the TC39 Reflector part, would that help?

WH: I was able to eventually somehow get the minutes.

AWB: We'll send this around to get token votes; we can make a PDF of it

#### Side Discussion

WH: What's happening with es-discuss? I'm getting bounces.

AWB: The list administrators of this are Brendan Eich and myself. If someone else wants to be an administrator on that list, I am sure Brendan and I would be happy about that. There isn't a lot of work but occasionally something does come in.

IS: I think this is an example for another TC39 tool, that was popular for a few years, and maybe now is slowly disappearing. It is a real challange for us, how to archive all this for long-term.

## ECMA-262 Status Updates--countdown to ES2017

(Brian Terlson)

BT: The key dates for our schedule are, at the end of this month, on the 31st, we will stop taking any normative updates besides bugfixes. we can fix bugs but we can't add features. Correct me if I'm wrong but the only proposal I'm aware of that is pushing for stage 4 is shared array buffers. Are there other proposals if I need to be tracking?

DE: There may be some for 402

AK: Do you mean big proposals, or do bugs count?

BT: Any needs-consensus PRs after January 31st becomes a part of ES2018 (if at all).

BT: For those new to the committee, we're not a technical committee, we're a royalty free task group (of the technical committee). All that means is that there is a royalty free commitment to the content we create in the specification. If you would like to patent something that is in ECMA or if you think you have a patent that is pertinent to something we are standardizing in this version. You should talk to your lawyers and potentially opt out of the royalty free agreement. you'd be the first person to do this. We've never had an opt out. Talking to István, I'm not sure we even know what happens.

IS: Brian is right. In the current TC39 RFTG everything is expected to be RF. At an "opt out" - which we did not have so far - we have to see how that part of the policy plays out. But it will be difficult because a) who decides and how if the claim for the opt out is valid? b) If valid then either an alternative method has to be found or the RF project cancelled... So, if TC39 wants also "RAND" components in the standard, maybe for some special case, options that must be done in a new, different TG working with a RAND based policy.

WH: If someone opts out (or makes an unexpected patent claim), which happened in other TCs, then we have a standard that someone claims a patent on, then chances are we'd end up voting no on the proposal. We approve the proposal pending it not having an opt-out.

AWB: If anyone does opt out, we are unlikely to approve the specification. Starting in April is when the ECMA governance folks start pushing our work through their pipeline (the executive committee).

BT: In March, the ECMA secretariat will start work on approving the document.

BT: In ES2017 is:
    - Async functions
    - Trailing function commas
    - Object.values/Object.entries
    - Object.getOwnPropertyDescriptors
    - String.prototype.padStart/padEnd
    - new.target and eval reform
    - Agents, SharedArrayBuffer and Atomics
    - Latest Unicode version--affects all parsers

BT: Several bug fixes and minor changes. Implementors: if you do `git log` on the spec, you will see all normative changes with descriptions starting with "Normative:"

AWB: Do we still have Annex E listing incompatibilities? Seems like all observable changes in. The document is the real source of truth.

BT: Yes, but I'm not putting every little thing in there; there are tons of minor things. You can look at GitHub, which is sort of a source of truth, even if this doesn't quite align.

BT(?): There is a big one on this page that will definitely make it into the annex which is the alignment of typedarray, arraybuffers and dataview. I think we have implemented all of this so I'm not worried about web compat for this change, so that's nice. Huge number of editorially and front end changes this year. The spec is much more full of links where you can find improved auto-links for cross-references. Tons of rendering improvements and bug fixes. ES2016 was kind of buggy in the rendering of it. A lot of that stuff got fixed. Some quality of life stuff, 100s of editorial updates and improvements. The community, I think we had this year 7 people who contributed for the first time to the spec. A lot of it was not technical, but like, hey, I found this confusing when I was reading it, here, this is better. That is so awesome. TIs' great to have people who are not immersed in this making it better. It's really showing how github is a major win

MPT: Question: this is my first time here. Must the spec be an HTML document?

WH: Actually no, the spec is not an HTML Document. ECMA's requirements used to be that the specs had to be a Word document. Now they also allow a PDF. The HTML is just a courtesy we provide.

IS: TC39 is special in that area. Actually we are offering TC39 standards in HTML format too, because we see that there is a high demand for it. This is a special case, the GA is discussing if we should generally move into that direction.

BT: Actually, as far as ECMA is concerned, we went through this last year; They are okay as treating the HTML document as the normative document. They updated the wording on the website for this. What you say is true for ISO, they have a spec for the spec process. They require a PDF.

WH: Since our specs are now automatically ISO specs, that means that we still need to use PDF for the normative format.

IS: Actually if the Fast-Track goes through then ECMA-262, ECMA-402 will only be Ecma standards. Only ECMA-404 (JSON) and ECMA-414 (ECMAScript Suite) will be also ISO standards (with appropriate ISO numbers). Also the Test Suite remains Ecma only product.

BT: That means that ISO gets a lower fidelity document

MPT: Where this comes from is a day to day life thing. I work on moment. I get people 100 times of day, when I do this piece time ... why is it that way? I spent a lot of time digging in the spec to find that stuff.

BT: You're saying the rendering of it would be slick

MPT: The rendering is slow, following the history of spec changes on date (which there have been quite a few) is non trivial. It's a practicality thing. If you broke that into multiple documents, that would help
From a practical standpoint this comes up at least once a month, I'm fighting around this huge HTML Document looking for changes.

WH: It's annoying that GitHub doesn't know how to show differences in specs over 10,000 lines long, which our spec is.

BT: I've heard that point of feedback before. I've gotten a lot of push back on making a multi-page document. Lots of folks use ctrl+f for no good reason

BT: There are trade-offs.. what are the gaps between pages? If each clause is its own page, some sections would be a quarter of the spec, others would be a paragraph. It's a hard problem. please contribute something! It will get used. Also, we do have something that unifies the multipage sec already and it's... search.

DE: The WHATWG spec has single and multipage versions.

BT: It's just a matter of finding a good enough way of displaying the spec. On the editing side, originally my proposal for the ecmarkup source document was split across numerous files. I got push back on that basically say I need to be able to ctrl+f in my editor, which is an important thing. If we want to change that too, I still think multi-input documents would be handy. I'm pretty comfortable using grep, though.

AWB: These are future development things. They will not make it into this year's edition.

BT: The number of normalizations we've applied to the document in terms of the syntax of algos, the placement of commas, inline forms like when you say, if blah, then do x on one line, format it this way or that. It's actually very rigorous now. We're approaching machine-readability for algos, with some minor exceptions. So, my request for people out there is start thinking about what you want for tooling. We could for example consider syntax highlighting that doesn't require marking up your variables with underscores, or, um, maybe some kind of intelligence trace to help implementors walk through the spec step by step with a sidebar with a list of algorithms.

DH: That would be amazing for anyone who is trying to understand a deeply nested series of methods.

BT: With machine readability comes a lot of options. Think about what you want. In terms of markup, we've improved performance by like 3 or 4x. The search relevancy should be good now. "." isn't considered a word boundary though. Since the last meeting I implemented find all references. Anything in the spec with an ID, you can find anything that links inbound to that ID;

MF: There are certain things which are not aggregated, "early error", for example. That is probably solvable by aggregating the usages of those kinds of terms as list or some function.

BT: That's possible. The other big one is the polymorphic abstract operations on environment records and the essential methods of objects, where we don't have an algo id for it because there is by definition like 5 of them.

WHB: If you thought about how you would do a find all implementations of an abstract algorithm?

BT: I can handle that in some way. If you click a reference to delete, for the ability for the editor to say, I know you mean this one.

WHB: It would be nice to get a list of those so you could see them all.

BT: You can do it with search but I don't know the right way to do it yet. I had a proposal pulling out... I won't get into that. So anyway, for spec editors, note there is a new type of note, the editors note. You should use this when you are making notes to the committee when you don't expect the editor to include that in the final spec. Easy way to add some stuff that will be removed by the time the proposal is accepted. You don't need CSS in JS files. Please stop hotlinking the ECMA-262 css file. I made changes and external stuff changed.

WH: Can you clarify your last point?

BT: Previously ecmarkup would dump a css and js file next to your built spec and you would have to include that. Because that's a PITA, what people did was not generate that CSS or JS and just link to the github version. Problem occurs when I update the ecmarkup verison for 262, that makes a new CSS file that breaks the old markup. The new version of ecmarkup creates an inline script and style tag. If you do that, everything will just work.

BT: That's everything for 262 tooling this year.

AWB: Any decisions we need to make?

BT: Yes, we have a decision to make about atomics and array buffer and some needs consensus PRs I'd like to discuss but not now. I'd like to do some socialization first. Minor stuff. Not on the critical path, to put it that way.

## [Needs Consensus PRs](https://github.com/tc39/ecma262/labels/needs%20consensus)

### Discussing [tweak to module namespace objects](https://github.com/tc39/ecma262/pull/767)

BT: I just want to talk to the people who know about this to see if it is still what they want. Basically, delete is lying. Basically, we just delegate to the ordinary delete when you're deleting symbols.

DH: Didn't we already talk about this?

AK: Yes, this is a tweak and it turns out we didn't fix it entirely

BT: This is the situation

AWB: So, delete for a nonconfigurable property normally returns false, is that right?

BT: Right

AWS: This makes it align with an ordinary object. makes it look like a nonconfigurable property

AK: Yeah, that's what I missed the last time

BT: Anyone disagree with this change?

### Discussing [not calling super multiple times](https://github.com/tc39/ecma262/pull/762)

BT: I can see how people would be nervous to make this change. The problem is that today, we actually print 'a' twice in this case.

??: This is nasty

??: My concern about this is that it seems like a patch over a small... tries to reactivity something about initialization but there are all kinds of other cases that can come up.

BT: Let me be clear here, the second super throws an error, always. But it does it AFTER calling the super constructor the second time

AWB: That was intentional. To do it the other way requires redundant tests, it requires a test both before and after. This only requires a test after. Since you're going to get an error in either case, I went with the computationally simpler algo

JHD: Is invoking user written code less expensive?

AK: Yes, and potentially the generated code. We don't care how fast the error case is.

DH: 99% of code that has this bug... they are doing extra test at runtime all the time

AK: Right, if they have one super call, they have to check after

DE: You could inline it but often you haven't inlined the entire class hierarchy

AWB: So an error is going to occur, why do you care if there is a side effect?

BT: I"ll tell you why. you will be very confused when you see this happen. I got an email from an internal team who was very confused. It seemed like super was both succeeding and failing at the same time. They had logging in the super class that was confusing.

AWB: Was it confusing because the error message wasn't precise enough?

BT: No, the error message was precise, it said you can't call super or something. Clearly super was working though, they were seeing the logging;
After a second super call, an error will always be thrown, it'll be called, but it will error.

AWB: Maybe a better error message would help

JHD: The message would have to ex

WH: What happens if user code in the second super call throws?

AWB: In the current specification, if you captured this object, and then you do a second super call, but you throw and catch it, before the binding happens, then you can precede as normal, without it disrupting construction.

JHD: If you're doing that with a try/catch the error wouldn't allow the second super code path, right? The only impact that Brian's change is on the spec algo and the fact that there is a second observable.

AWB: The real point here is that you can do all sorts of crazy stuff. The primary thing we're trying to make sure here is that implementations always do the same thing when you do this crazy stuff. The actual crazy stuff, what it is, who cares, it's crazy.

JHD: Is that any reason to not minimize it?

BFS: My concern with removing the second call, if you can catch the error already, I'd be surprised, just personally if the function didn't run but it generated an error. In the other case if I call super the first time and it DOES throw I'm presuming the second one would throw too because it's been set to initialize.

AWB: That seems to be in this space of crazy stuff can happen depending on how they structure their code. We just want consistency.

BFS:  Do you know what happens if you throw on the first super but not the second?

AWB: The second one would run and you would get a bound super and it would be fine

AK: That's with this change

??: But then we have called super twice

??: Super might not complete successfully more than once

AWB: There is no constraint (with or without this proposal) on calling super more than once, the constraints is on binding super

KD: So, i just have a question, maybe a different discussion. Why do we allow this at all?

BT: You can't know statically if it's allowed, consider if/else/etc

MPT: It's very unsafe because that super call is not idempotent, if you're doing it twice...

AWB: as long as implementations follow what the spec does, we don't care that it does crazy stuff, as long as it's the same cray stuff

DH :Clarifying question. I missed why Brian's proposed semantics require extra tests. I took it on faith but didn't grok it.

AK: The title is pretty clear, you have to check before you call to see if it initialized.

DH: Why do you have to check again?

AK It's not that you're checking super is not called multiple times, you're checking that you initialized the object by the end

DE: There is a check for the super call at the beginning and end. The super call can escape and you can use it in an arrow function if by the time super returns has it been bound to something else?

AK: the super call itself has a check in it, when you assign it to this it checks to ensure it hasn't already been iniitalized

DE: no way to eliminate that second check

DH: Two different kinds of check right?

AK: No, it's the same check: you check the receiver slot before the super() call, and then after the super call when actually doing the binding

DH Oh, so the idea is that you make sure this isn't in a TDZ

Hazard case: https://gist.github.com/bakkot/66b515f402b8cdbf3e405f8509ad3525

WH: Normally people don't call super from an arrow function. It's allowed, so you should be able to statically eliminate the second check if you statically see that super is not ever used from an arrow function

BT: There is no known case outside of the arrow function

WH: I am responding to the argument that it would be inefficient to check twice. Most of the time people do not call super inside an arrow function. If they don't do that, it's efficient for the implementation to check just once before the super call.

BT: That's true

WH: If they happen to call within an arrow function they lose an insignificant bit of performance

AWB: The analysis of th etwi cases is more expensive.

BT: It's not expensive for us to check this.

WH: I don't like the user surprises that invoking super the second time produces.

BT: We have real world evidence that people are confused. I think we should fix it.

AWB: I think it is adding overhead to the 99.9999% case

WH: No it isn't. It's only adding a second check to the super-in-arrow case.

AWB: No, it still is adding overhead in the analysis

DH: I would be skeptical about adding analysis

BT: We're not suggesting that, Waldemar's point is you can avoid the static check if you can know super isn't in an arrow function

DE: It wouldn't work for code that uses eval but that's probably not going to come up

BT: My feeling is that this check is so fast that any analysis is going to drastically outweighj ust doing it

AK: FWIW implementation in ES6, a lot of checks are required. it's slower than ES5 in the baseline implementation. If your'e accessiing a variable in a loop it's noticeably slow. I'd rather not add checks where we don't need to.

DH: I think i lead to Adam's and Allen's side here.

BT: Why don't we get rid of the check entirely? Just let super run twice.

AWB: I would be happy with that but part of my grand compromise on how we figured this out in the last two weeks of ES2015, included this error.

BT: Okay, so we have rpecende tfor doing checks in the name of, i guess, usability, or actually, i don't know

AWB: Yeah, it's a usabiilyt argument

BT: Very suprising how the second super is called

AWB: the suprrise partially comes from, probably maybe not full comprehension for this within constructors, that you don't have a this binding before youc all super. if htey understood that, they would understand why the second super was an error.

BT: How would you feel about making the second super jset work?

DH: Feels radical, feels like it needs more than "sure why not?"

WH: Wouldn't work once we implement private fields.

DE: Eliminating the check doesn't add any basic incompatibilites with private fields here, adding a private field twice will fail, so even if we eliminate this check, it'll throw an exception later

AK: My worries, my implementation feedback. I haven't looked to see what a static check would be. If it is easy, I don't care about this, no concerns for this proposal. I have a guess there are some edge cases that could be hard to detect. This is a case where my moderate opposition might go away.

DH: I still worry, even in that case, 70% of code doesn't ever put super under a lambda and can have the checks optimized away. Maybe it impacts your performance.

AK: The super call can't be in a tight loop

DH: The single super call has the additional check, if you're instantiation stuff in a tight loop it could come up. Maybe it's not likely to every be noticeable.

BT: I'd argue the performance would not be a noticeable performance difference

AK: Have you not found the checks for let to be noticeable compared to var?

BT: In some cases, yes, but that will create more checks

AWB: If the primary issue is user confusion, give them a paragraph of text

DH: I'm not sure that's accurate. It doesn't matter what the error message said, It's that they got the error after the super ran and din't know ecma backwards and forwards. Nobody should be expected to memorize these semantics. Their experience was the constructor ran, but i got an error saying it couldn't run. It's one of those up is down kind of experiences where you question yoru grasp of basic logic. It doesn't matter what the error messages says, the confusion you draw is that you are both running and not running this

JLZ: I think you could word it properly, this rebinding attempt, this or that

DH: That's true, I guess you could say you could make it clear that wafter we ran it a second time we realized we ran it a second time

DE: We've been discussing this topic for awhile, we didn't atlk about timeboxes, it seems this is a little contentious

AWB: Maybe, the way I would approach everything for the 2017 edition, the timebox is the meeting itself.

MPT: This code shouldn't exist. We shouldn't silently rebind this. The language isn't helping people when we allow code that shouldn't exist and failing silently instead of failing loudly.

DH: That's not really an option.

MPT: At the end of the day it doesn't really matte,r i hear you, does it really matter, the code is broken either way. You could probably just do the single later  error check

BT: That slows down the non error case, potentially

MPT: So, all implementations are doing the same thing. We agree it's bad source. What's wrong with this?

BT: What's wrong is that it is confusing to people.

DH: I don't agree with the philosophy if there is a bug in the code it's the programmer's fault and we shouldn't help them. I think we have a role in the design and implementation of the language in helping them be more productive in their process. If there are things we are doing that will make it subtly confusing that's bad. In this case, there is a global cost calculus, how much of a cost is this confusion, vs what is the cost to everyone else in additoial checks, more complicated performance model It's conceivable a better error message could help. With chakra where this happened, "multiple calls to super are not allowed" that leads you to the conclusion that something can't happen that just happened. Now your grip on reality is sliptting. You should say just multiple calls to super have occurred. Chakra/Spidermonkey and JSC have reasonable error messages.

(_TODO: Paste in error messages_)

AK: To be fair, at trunk, V8 has a better error

AWB: I think spidermonkey is the right error. Super was called twice and that's an error.

JHD: You can call it twice. You just can't call it successfully twice and bind this. Are you going to put that into an error message and say it's going to be less confusing? If one of them throws you can call it as many times as you wan't, you can only call it successfully once.

SYG: I don't think the performance cost here is too bad.

MLS: I haven't looked at the implementation.

BT: Do you think there is a problem here?

MLS: For me it's a cost benefit analysis. There is performance implications to make the check earlier, I don't care that it got called twice. You did something wrong, we're not likely to see this in real life. I disagree with Allen, at least three of those errors seem reasonable.

AK: I fixed this. I can't remember what ours says. It used to use the same error as let in a TDZ . It was bad. I agree this shouldn't be timeboxed. We've put a lot of time here, can we push this somehwere?

BT: Let me ask you this. If you investigate and find that the perf implications are neglible, which I suspect will happen, would you support this change or would you still be against it?

AK: I would actually be OK with it was easy to see. I feel like it might be easy for us to detect. I'm not as worried about someone moving that super call into an error function I don't think that's a thing people do unless they are intentionally messing with the interpreter.

SYG: Independently, we already have some checks scheduled around super calls

AK: We check in the parser for methods whether they contain super property access and need the home object, but we don't do the similar parser analysis for super construct calls

WH: There are worse surprises you can get. For example, if the super call counts how many instances you've made, you'll bump the count by two while creating only one instance. I'm strongly in favor of doing the check before.

DH: Just to be clear if we do the check before we do it after also.

WH: Yes. The check after can be optimized out in most practical cases.

BT: I think we should do due diligence though. If you can check in advance of the next meeting or next couple of days.

AK: I can set aside 15 minutes to look into this

MLS: This needs to be resolved by March

AK/BT: It's been there for a long time

BT: Interop isn't a big concern here, we're getting an error

AK: Nobody should be wrapping their super calls in try/catches

BT: Most people are depending on side effects of a super call

AWB: I'll leave this to you Brian, but it sounds to me like it should probably be pushed past 2017.

BT: IF Adam looks at this and finds it's not a problem. If it isn't in this meeting it's in next version.

DE: In general are we really aiming to get these in by the cutoff? We have a draft spec.

AWB: The goal right now is what goes into the cutoff. We do have these checkpoints every year. People do pay attention to this in the outside world.

BT: It's important what goes into that document. Everyone in this room only cares about the edge version of the spec but it's not true for everyone. We should just be intentional about this.

BT: Skipping PR 641 for ES2017, are we okay with this?

MLS: Yes, I'm fine with that

BT: I have some talking to on 673 so that wrap this.

DH: Would it be possible after this session would it be possible to take a few minutes for face to face scheduling conversation?

BT: We still need to work on a few layering fixes #673 and #688, which we should leave for later

DE: There's also some new timezone changes

AWB: That's a fairly big semantic change; there are historical bug threads that we should look at for clarification.

#### Conclusion/Resolution

- No change for ES2017
- Awaiting feedback from implementations about the difficulty of implementation of a static conservative check for possible multiple super calls


## 6.i Confirm logistics for March meeting

DH: We are confirmed for Portland for March 2017? We could put down a deposit for a venue in March 2018, if we can decide on that right now.

BT: As far as I'm aware, i think it's just renaming it. Putting it in annex b. Maybe needs consensus is false on this (PR 673) actually. I'm not sure we actually got consensus on this one last time.

DE: We also got a new pull request to clarify about timezones, but it's kind of new.

BT: I don't want to mess with that right now.

AWB: It's not just a clarification, it's non trivial

BT: It's a normative change. It makes sense but i'm conflicted about how much I want to try to "rescue" date. We might just stop bailing water and get a new API.

DH: First of all, I believe we are confirmed for Portland in March. We were not able to get like plan a through plan q in the venues we wanted. No convention center. Tilde is really good at this and they have come up with a good venue for us. It was eye opening about how fast Portland books up. We've had good experience there in the past. We can put down a deposit for 2018 for a similar setup, and we know we wouldn't lose that venue. But, we'd have to commit to a date to the tune of $500 that i'd lose from my budget. I can do that. Do we think it makes sense? Our schedule is stable, generally in the 20s week of a month. I could commit us to that now.

DE: How will the VC performance be in the Portland venue?

DH: The space we have this time, I don't know a ton about

DE: When we me tin Portland  in the convention center last time, we had folks call in and it was hard to hear

DH: You're right the VC was bad

DE: For 2017, we're in a pickle and we can't be choosy, but if we're picking for 2018

DH: I can find more details about the the 2017 venue.

AK: Are the dates on the agenda correct? Is it the 28th-30th (conflicting with EmberConf) or the week earlier (21-23rd), as we later decided to switch to.

DH: Oh dear. I don't know. I will double check with Crystal. That would suck.

AK: There was concern about conflict with Ember Conf.

DH: Given that they were the organizers of the conference, we can likely assume they took that into account?

DE: What were the dates?

DH: If the VC was enough of a concern about the venue we shouldn't put a deposit in?

BT: If they can solve that...

DH: If they can fix that issue, is it worth committing to a date

AWB: If we're going to commit to a date that far into the future, why not a better date? March isn't great in Portland :)

DH: May could be good, July is always Redmond, July is great in the pacific northwest (covered by Redmond). If not March then what, May/September?

AWB: If we're going that route, we can just say January... March is a little better?

DH: Is it okay if I just pick what makes sense?

BT: I've already started on booking catering for 2018

DH: I can't tell if you're joking!

DE: How far in advance do you really need to do this?

DH: Let me find out.


## Scheduling aside

BT: Is István calling in? I have urgent ISO plans to discuss

AWB: The plan is a Thursday morning call. Someone suggested we do this tomorrow rather than Thursday because they think maybe we don't need to be here. We should decide that soon. We have the room for three days.

BT: Should we say tomorrow for István's update? I need to communicate that with Brendan.

AWB: Is that so Brendan -won't- have to be here?

BT: I won't claim to know! Dave, you have what you need?


## 13.i.f Seeking Stage 4 for SharedArrayBuffer

(Shu-Yu Guo)

- [spec PR](https://github.com/tc39/ecma262/pull/769)
- [Test262 PR](https://github.com/tc39/test262/pull/839)

SYG: Last time, we were missing a mergeable PR and Test262 tests. Now we have both of those. The memory model is now a top-level clause.

BT: I suggest that even people who are not familiar with memory models could read the notes which are specifically targeted to the developer intuition for the memory model.

SYG: Notes: 1. For programmers using JavaScript 2. For implementers trying to decide which transformations are valid 3. For code generation. These are informative, and describe things that are implied by the memory model, but the memory model is arcane.

BT: This is a new thing, including extensive non-normative explanatory text. It would be great to have feedback on whether you like it, don't like it, etc.

SYG: There haven't been any big normative changes since the last time; @@toStringTag, etc. The initial PR tests the coverage of the ECMAScript parts, like that the properties are hooked up correctly, the methods have the right property descriptors, etc. The difficulty is that it requires that test harnesses can spawn agents, which is provided by the embedding. The PR includes a description of what harnesses should provide, but the harness isn't part of the PR.

BT: If Test262 tests exist but can only be run on one engine, due to lacking the time to implement the harness for every engine. Does that meet the stage 4 requirement?

SYG: It's also not all functionality; wait and wake need agents, but other atomics can be tested on one thread.

AWB: We don't have any strict requirements for what the Stage 4 tests consist of

DE: In this case, you're working with V8 to make sure the tests are compatible with the harness, so it should be especially not a problem.

LEO: I have been reviewing the tests. They seem to have reasonable coverage so far. About the harness support, this is not the first time that the harnesses are expected to provide functionality (also for TypedArray detach). As far as reviewed the PR, this has my +1.

AWB: Any objections to Stage 4?

#### Conclusion/Resolution

- Stage 4 acceptance
  - SharedArrayBuffer

AWB: And that's it for ES2017

## Other time boxed items / Looking for stage 3 reviewers

DE: This is very short, I had a few proposals reach stage 2. I have not yet asked for stage 3 reviewers. Would anyone be willing to look?

BT: I'll sign someone at MSFT to review.

MF: I could be a reviewer

WH: I have reviewed these already, would you like me to review again?

AWB: What this really means is that during stage 3, if there are further reviews, these people will take a look again

JSL: Unicode properties or myself will take a look.

DE: Great, the more the better!

WH: I will look at any changes!

#### Conclusion/Resolution

Named reviewers for Stage 3
- RegExp lookbehind:
  - Someone from Microsoft (nominated by Brian Terlson)
  - Kevin Gibbons (nominated by Michael Ficarra)
  - Waldemar Horwat
- RegExp Unicode Properties
  - James Snell
  - Someone from Microsoft (nominated by Brian Terlson)
  - Kevin Gibbons (nominated by Michael Ficarra)
  - Waldemar Horwat

## Scheduling aside

DH: Just a quick update, I did verify that this march is the week earlier, the 21st-23rd. I've corrected the date. I don't know if there is an incorrect date anywhere else, but if anyone sees this please fix it or let me know.

AWB: Do you know yet where it is?

DH: I can get more details. Obviously we'll fill out the agenda page.

AWB: Just curious!

MF: Did you say you've checked the previous agendas so ensure they don't conflict? I want to make sure nobody gets confused

DH: Will check


## 13.i.b Discussion of some oddities around classes extending null

(Adam Klein)

- [slides](https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.p)

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c264b0f9c_0_58

AK: A little background on constructors in ES2015. There are two kinds, Base class and Derived class which has an extends clause. There are certain requirements about super for these things. Base class doesn't make any sense to call super. Basically Base class uses ES5 style allocation and then you call the constructor. In the grammar, super is an early error for base classes. In the derived constructor you have to use super, if you don't call it we'll throw. This is what the state was in the ES2015 spec. you can tell the difference looking at the definition, if there is an extends clause.

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c26b27b69_1_28

AK: There was a recent change to allow extending null to "do something". (Previously, calling the super constructor from a class extending null would throw, rendering the normal constructor pattern unusable.) A class which extends null is a base class, according to ES2017. At class definition time we check to see whether the extends is a null or an object. null means it's a base class. This looked like it might be a derived class. Prior to this change, the presence of extends was that it was always derived. Basically, there was a spec bug that if you extended null it didn't handle derived-ness correctly. It used to be that you detect a derived class syntactically but now you have to confirm if it is null.

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c26b27b69_1_55

AK: This leads to some funny syntactical things. If you have a derived class, you can always change what something extends from later. The super call is dynamic. The first time you instantiate a thing, you get an object ( a subclass of object), mess with it a little bit and then.

AWB: Actually, to change the super construct call change, you want to modify Derived's `[[Prototype]]`, not `Derived.prototype`'s `[[Prototype]]`. Then, you'd observe the behavior changing. (Note: This was to correct a previous version of the slide, which has now already been corrected)

DH: A few points of clarity. For a base class, there is a base.prototype, it is an object that stores the methods for sharing with instances of this class. It's internal prototype slot is null? Base.prototype

AK: Confirmed, base.prototype slot is null

AWB: The difference is, if you say extends object, the prototype internal slot of base, the constructor is object. For class-site inheritance you get the object.

DH: Base.prototype, do we care, do you care, do you know, if, base.prototype is an instance of base?

AWB: No, it isn't. Anything defines as class, prototype objects created by class declarations are

DH: That was just some groundwork I wanted to be sure of.

(Discussion about the details on the slide)

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c26b27b69_1_62

AK: Derived classes which inherit from Object have a mutable super() call, but this isn't the case when inheriting from null, since those are marked as base constructors when they're created, under the new ES2017 semantics.

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c26b27b69_1_43

AK: Under the ES2017 semantics, if you want to make a class factory which inherits from a parameter, then you have to be very careful to not call the super constructor if the base class is (dynamically) null

JHD: And the issues from the two slides may happen at the same time!

DH: I posit that this seems expected, that a mixin function is in the domain where it is thinking about whether it should call super or not

AWB: It seems like base-ness should be driven by the syntax, and it's not

AK: I was trying to implement the ES2017 semantics and I ran into this; that's why I am presenting this.

AWB: Yeah, this is all what led to our ES2015 state.

Slide: https://docs.google.com/presentation/d/1makDPBGA3fo-jjOpjhD97_GqlKRQHvh9Mya-B2Spxng/edit#slide=id.g1c26b27b69_1_79

AK: Proposal is that literal "extends null" is a special syntactic form to get at the base class with null prototype. If you extend an expression that evaluates to null, then it is a derived class.

AWB: Anyway, mutating the prototype in the super call is not a mainline use case; it's largely for consistency with the way that `__proto__` has always worked. As a separate program, we may look into adding immutable prototypes.

JHD: This is a pretty core part of the semantics, and we expect everything to be analogous. What if, if there's no extends clause, that could always be dynamically mutated to be a derived class?

WH: That's a hard thing to make work, since if there's no syntactic call to super(), you don't know when exactly to call it.

AK: The syntactic form gives a few advantages:
    - Permits all alternatives
    - Early errors for calling super() in an "extends null" class

DH: Does this not bother you at all? If you use the literal null vs some other expression that evaluates to null with dramatically different semantics? What about (null)?

BT: I think it was ES6 draft 23 that we discussed this.

MM: if you're going to create a new special form you shouldn't do it by giving special meaning to something that's already an expression

AWB: When we did this in 2015, if you say extends, and you don't have an explicit constructor, it does a super call.

AWB: If you say, class extends null, what it evaluates to, the prototype of the prototype that is created is set to null and the `__proto__` internal slot is set to function.prototype. So the question is then, is function.prototype constructable?

MM: Isn't it right now?

DH: It seems unlikely to me you could change that without breaking the web. Let me check the console.

JHD: What happens if I make a class that extends an expression that evaluates to null, and later change it to extend something non-null?

WH: Can't do that. The super call will fail.

JHD: Conditionally call super.

WH: Still can't do that. A class that's not a base class will fail at the end of the constructor if doesn't call super.

JHD: Things that I instantiate from class foo extends null, if i get the prototype, i get null.

JHD: What if I want to dynamically determine whether the superclass is null or not?

AWB: If you want this dynamism, you could use the syntax "class extends Dummy" and then mutate it afterwards.

AK: Anyway, it sounds like we're over timebox. It sounds like we have some objection to the "extends null" syntax behavior

MM: Because it is special behavior for a valid expression in an expression position.

AWB: What about just "class extends { }"? That would be invalid.

DH: OTOH if it feels sufficiently new, we have to think about whether it pays for itself. The cute cheat of "extends null" is nice in this way.

AK: What about the problems I've pointed out with the status quo; what do you think about that?

DH: That doesn't upset me as much as null behaving differently from (null).

AWB: Since this is a 2017 change, I am wondering whether we should roll it back before rolling forward with something new.

AK: I would be fine with that.

DH: BT mentioned, there's a mismatch between user intuition and spec machinery. The mutability seems like the biggest mismatch here.

MM: I'm more comfortable with the ES2015 way of doing things.

BT: I don't have a strong opinion, but I did get some feedback from people who tried to extend null, and found that they can't do that straightforwardly and have to implement my own constructor.

AWB: Well, the constructing-up-through-Function.prototype possibility could address some of this. Web compat issues?

KG: Chrome and Firefox have bugs preventing classes extending null from ever being instantiated.

AK: I can go offline and think more about this.

BT: Can we get consensus on if we want what is in the draft now or ES2015 semantics? Now is the time.

AWB: I would say we should revert it. It's better to go back to something that is already out there and is not perfect than to replace it with something else that isn't perfect that will be replaced again.

WH: I think we should revert it too.

AWB: It sounds to me like it just may require making Function.prototype constructible

MPT: The common knowledge for devs is that class is just syntactic sugar for doing it in ES5. With that in mind, it should behave as closely to the way it used to. Because you're thinking of it as syntatic sugar that's how you think of it.

AWB: But the old way doesn't actually delegate that way either. The old way is actually closer to saying, "it's a base class". Mark, how did we arrive at Function.prototype not be constructable; was it based on your concerns?

MM: I don't think I made a distinction there or see a reason to.

AK: I'm happy to do the work here. Brian's question is good. Do we want to revert that change? I agree there are use-cases for people extending null but I think there are a few reasons to be unhappy with what we wound up with.

AK: Anyone opposed to reverting and doing more work?

BT: I just want this fixed. I don't have a vested interest how it is fixed, if Function.prototype being constructable works, I'm happy to do that.

AK: I'm happy to try to have this resolved for March

MF: Does reverting it involve making changes to browsers?

AK: Correct, we go back to the current state of shipping implementations.

AWB: This is all part of the January 2015 scramble and we missed a case there.

DE: I'm happy with that whole change overall.

AK: Okay, i'm 3x my timebox!

#### Conclusion/Resolution

- Revert the ES2017 change for now;
- AK to investigate a new solution for a follow-up spec change.


## 13.i.c Seeking stage-1 for Null Propagation Operator

(Gabriel Isenberg)

- [slides](https://docs.google.com/presentation/d/11O_wIBBbZgE1bMVRJI8kGnmC6dWCBOwutbN9SWOK0fU/view#slide=id.p)

GI: I'm Gabriel Isenberg, here to talk about null propagation operator. This proposal is also know as "existential operator" ?.

All: having a hard time reading the screen

All: Scaling in the browser is hard. Booo at the results!

GI: The common pattern today is using && operator, which is very verbose. We want to support message.body?.user?.firstname || 'default'. If any object is not defined along the way, we should return null/undefined. There has been a lot of discussion around this in the past. We have spec text that speaks to what happens when we hit null or undefined in the chain. This has been proposed in Typescript but was ultimately punted waiting on EcmaScript support.

BT: Typescript has similar syntax already.

JM: Hey, flow doesn't have the elvis operator. We added a really hacky callback oriented workaround. If that's compelling evidence that people really want this.

GI: I'd really love to see this in JS.

DH: I'd give strong support

BT: I'd support this

DH: It's not an accident that this is in high demand is that most applications read data that comes in from a dynamic source. Very often you can't predict statically whether all the pieces will be there. Maybe the data is ill formed, or you have a format with multiple options. Either way, this need to dynamically dig into nested structure happens all the time.

TKN: This pattern has been in every application I've ever written, all over the place.

JLZ: I think this is needed, but it shouldn't be the only place it's added (support for brackets, calls, etc)., as Claude Pache's proposal does. We should also avoid encouraging ||

DH: There is an important sense for which this ties into the specific semantics of this operator. How does this operator treat falsy values. If we want a cohesive overall story. None of that is a stage 1 concern.

JLZ: Before we finalize it, even before we, we should consider additional operators.

AWB: Relevant to stage one is what are we making stage 1? Is it just this operator? Or is it the general problem dealing with accessing and invoking properties. Is it the dot operator, is it new? The scope of this item should be large enough to explore this space.

DH: It's full of cross-cutting concerns. We want to think about this. It's the usual dance, the totality of the problem is large and we want to consider it but we don't want it to stop progress.

AWB: As long as we define this item in a way that is broad enough to make it clear that we want to consider

DH: I think at stage one we shouldn't care too much. Null propagation operator or operators is the concern.

AWB: Agreed

DH: An example of the kinds of crosscutting concerns we do want to think about What's the special case of ?. with a number following it is a ternary. I don't care much about putting a float literal in a ternary but an array is definitely there.

JHD: Totally support saying this is stage one. I would expect at stage two questions about this would be resolved. The entire JS community thinks of these as null or undefined / skip. For default params, it's ONLY undefined. I think it should be null/undefined.

GI: seems like a lot of conversation would be warranted for stage two.

DH: I'm happy to help resolve that offline.

WH: I like the proposal, but the free grouping section seems odd. From the document:

```(a?.b).c().d     // equivalent to: a?.b.c().d```

I understand how that came about but I don't think that parentheses-overriding weirdness should be included.

JLZ: I'm not sold on the weird short circuiting.

DH: I'm not sure the call case is so important.

AWB: Claude's proposal addresses a lot of the edge cases; whether we like the particular decisions or not is something to look into.

MF: Would you be interested in moving this forward without syntax? I'm worried about the explosion of notation. After this proposal is in, when new language features come in, will we need to give them associated question mark forms?

DH: I'm not at all convinced that we need completeness. There is a strong argument to be made for the computed bracket case. There are hard syntactic questions there. its' for sure tricky but I think there are diminishing returns when you get into other areas.

MF: If this is done as a library, we can get a lot of these things free. We could put it in our standard library, so you don't have to bring in lodash as a dependency.

DH: We live in a world where bringing in dependencies is not unthinkable, people do it because it's convenient. I'm a big fan of it. But, you have actual static cases where you need to do string based indexing. The bloat and loss of clarity in saying what you mean is quite huge. WE're talking about a space where minor differences in syntax can make all the difference in comprehensibility.

DE: From an implementation standpoint it's easier to implement efficiently if the property is represented syntactically vs function calls that you pass strings to a function.

DH: I think we should always be careful and conservative about adding syntax

MF: Potentially a lot of syntax

DH: I especially don't think we need to treat this as a combinatory operator. WE don't need this operator for everything in the entire syntactic space.

MF: Do you think that the committee should suggest that we limit this to member accesses?

DH: I think the advice is good that we should be thinking about the over all space. Part of the strategy of getting this to success is charting a course through this space--there is a meaningful chunk we can ship/solve but that is not so path dependent so hill climbing that we end up diving into a morass of other syntaxes. I don't know the exact answer but the final answer doesn't need that we need something for every form.

WH: I have the same concerns Dave has. `?.` is very useful, `?.[` is useful but has awkward syntax, and `?.(` is weird.

MF: I don't want to bikeshed on particular syntax issues

WH: ?.( is not a syntax issue. I don't think you should be calling functions on things that might not call a function.

AWB: Isn't that your classic, "I want to call this method if it is there?"

JLZ: I agree that the .? or whatever syntax we use, the property accessors we use are the most valuable. The rest of them seem like they have reasonable alternatives.

DH: To my mind, when you're adding syntax to the language it's for the most common idioms that you're trying to bless with the most concise notation. That you might ever want to say something is not the bar, it's that it's very common and idiomatic. I could be convinced otherwise, but pulling out a function from something that might not be there is much much less common than accessing a piece of data. In the cases where you might need to access a function you can handle using the existing && syntax but accessing field data is so common that we want concise syntax.

JLZ: My motivation for the call was basically lots of setter/getter chains (getFoo()/setFoo(), not actually accessors). Maybe i should put together an example.

MM: Concerned about semantics like `a?.b.c().d`, where the first "?" changes the meaning of all subsequent operators such as the  () and . attached to c and d. In this example c and d don't have ? operators and it's surprising to find out that, for example, c might not be called.

DE: A nice thing about the surface syntax is that if you are accessing a private field on something other than this, you'll likely want to be able to do obj?.#x.

AWB: I'm not sure we need to support this for private state.

DE: If we went in the maximally general syntax, we want to consider

DH: I think the chances are high this will be impossible

MM: I'm trying to focus attention on a?.b.c().d does there need to be a?.b?.c().d? Should a single question mark color all further dots?

BB: I agree, if you look at Swift, they support this and they require a ? after every optional. Docs: https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/OptionalChaining.html

JHD: Now that we've considered this stage 1, I think we should table this until stage 2.

GI: I will champion this in all forms

AWB: Different threads went through different alternatives

WH: I like it, but I don't want short-circuiting and free grouping.

#### Conclusion/Resolution

- Stage 1, champion  for investigating the whole space, not tied down to the details of Claude's concrete proposal.
- Areas to investigate for next time:
    - How should null be treated?
    - Should we have a better default operator than || ?
    - How should computed property access, function calls, new be handled--as in Claude's proposal, or another way? Are they needed for syntax--do they pay for themselves?
    - Short-circuiting--does it need to be as general as in Claude's proposal. Also, free grouping.
    - Interaction with private state--included or not? See https://github.com/tc39/proposal-private-fields/issues/78


## 8. ECMA-402 Status Updates

(Caridy Patiño)

- [slides]: https://docs.google.com/presentation/d/1w-dhlVfbstl8MO0onMc04julUkk3WtKzTuQLN2Vz6-Y/edit#slide=id.p

CP, ZB:
    - Editorial changes
    - Legacy constructor compromise (ready to land in SpiderMonkey)
    - NumberFormat.prototype.formatToParts will wait pending evaluation by Google; DateTimeFormat.prototype.formatToParts is at Stage 4 and makes it into ES2017

AWB: Is it OK to have DateTimeFormat.prototype.formatToParts but not NumberFormat.prototype.formatToParts?

DE: I don't think there is a situation where you have a formatter and you don't know what you're formatting. It's not polymorphic. It's good for the APIs to be analogous but I don't think we'll discover meaningful differences.

ZB: Intl.PluralRules is at Stage 3; we are awaiting a second browser implementation

AWB: A broad question... in both of these cases, where we don't yet have two implementations. Is this a reflection that these things have gotten to the stage relatively late and there hasn't been time? Is there feet dragging going on among implementors? What's the level of interest in extending thes features?

ZB: It is somewhere in between. Over the last year it was mostly Google and Mozilla (as browser vendors) interested in expanding intl support in JS. I think Mozilla got a little more active because of our internal strategy / higher pressure. Google is supportive and helpful but has a little less resources to implement it. Often we are pushing the spec and the tests, but Google is taking a bit longer. Is that representative Dan?

DE: Yes, that's accurate.

CP: Yes, this spec is only been around for a few months.

ZB: This is what we consider internally on the ECMA-402 group is done. Userland can follow an implmenet if they want to. It's been reviewed, we think it is a sound and safe API. Once a second implementor steps up we should put it into the spec.

CP: Three more formatters that we introduced about a year ago that have been through discussions and writing.
  - intl.ListFormat
  - intl.RelativeTimeFormat
  - intl.UnitFormat

I'd like to move these to stage 2. My understanding is that stage two means we'll be looking for more feedback from implenetors, but not putting pressure on them.

AWB: The move between stage 1 to 2 is saying, here is an area we think will be useful, let's explore it. Stage 2 is saying we should start getting something like this into a future version of the spec. I would expect at that stage some sort of review presentation. To move to the next stage would be appropriate to have a review of the stage. Here's the API we arrived at, here's why it's good, we should advance this, etc. My sense is that waiting two months is not going to really hold you up any.

ZB: Happy to delay to the next meeting. Two new proposals to put forward. Deprecate `hour12` option and introduce `hourCycle`. Proposal: https://github.com/zbraniecki/proposal-ECMA-402-hourcycle. I don't think we need to seek any stage now, I'd just like to introduce to the community that we are using it.

DE: About this proposal, I'm wondering what the appropriate vehicle for it is. The spec text is written very well, thanks for responding already. It's small and we may add more thinks to this. I'm wondering if each one should go through a 4 stage proposal. We might move through the stages quickly, but getting implementation feedback on these things would be good.

AWB: I think it could be streamlined as one. As a starting point, I'd like to understand what you mean by deprecate.

ZB: The proposal means that we will still fully support the current implementation (interface). If someone creates a dateTime format with hour12, we'll internally convert it to an hourCycle. If both are present, we'll use hour12, because we'll assume it's an old implementation. In the spec we recommend users use hourCycle.

JHB: Why support both in new code?

ZB: I misspoke, we are doing what you said already. Out of all the things in our current scope are additions.

CP: It's not really deprecation, we're still supporting it.

ZB: I would like to express to users of this API to use hourCycle, not hour12.

AWB: Yes, you're trying to establish a pattern here. If there is a newer option, continue to support the older option but in the presnce of both, ignore the old options. You tend to follow that pattern for future things.

DE: This might not be the last one. There are all sorts of things that fall into this bucket... maybe we'll have more possible values for a key.

ZB: This is the one that we know if we try to get to extension key to options, we hit a line.

BB: Are there options other than 24 and 12?

ZB: Yes, 23 and 11.

BB: Don't forget Mars time!

ZB: This is academic right now, we only support Gregorian calendars, but as we start to think beyond those, we shouldn't carry these limited features.

BB: I have no real objection. I've never been to a country or seen a 17 hour clock.

ZB: If you look at a unicode

DH: Swatch invented internet time in the 90s, like a 10 or 100 clock

BB: I could imagine some metric time system but it seems a little extreme to anticpate something tha tmight be invented in the future while standardizing.

AWB: The real question is, if this is a pattern, does this pattern apply to other specs. Do we have option objects in any of the shared buffer or atomic stuff? We don't have them yet in 262.... but we might someday. So, if we had any... would we apply the same principal? We probably should.

DE: This sets some other precedents. AS a part of this deprecation, if you instantiated something with hourCycle, if it can emulate the old hour12 format, it will, then you can read off the old property or it will be missing if it can't. I don't think this is that academic. In the US midnight is 12. In many places in the world midnight is 0.

ZB: I agree it's not that academic. It has the value of closing the gap and being more consistent. I wanted to test the procedure of this kind of change with this community. I wasn't sure what the reaction would be. I'm not sure if you have a precedent of this.

AWB: No, not exactly. I think it would be good to write up this pattern. I'm not sure where we put it, but if we think there are a set of steps you'll follow here. The next time this comes along it would be good to write that up rather than having to reverse engineer it from what we've done.

MPT: On the record, we have an extension point in moment.js for this and it gets used all the time (extending hour cycles for time display). It is not academic at all. Tons of locales use this.

AWB: I think we're fine.

CP: Are we going to do a pull request on this? What is the consensus here? Is a PR enough?

AWB: I suggest treating this as a bug that needs consesnsus.

DE: Could we get especially much feedback from implementors before landing it?

ZB: I am seeking feedback

DE: Yes, but as a part of process

AWB: I don't think this is any worse than tweaking we were talking about with extends null.

AK: To be fair, this is something that Dan called out as saying this might be problematic when we landed it.

CP: This is the same as a the PR you have open right now, the compatability bugfix. It's about the same. We wait for feedback and we merge it.

AWB: Don't we have a tag for this?

CP: Yes!

JHD: In general for this, we're trying to adhere to a different spec. There is a general loose goal of trying to match that long term. Over time those changes are going to come into play. Implementation feedback is important.

DE: 402 already normatively references BCP47. This is really a new feature. It's not a bugfix. It's exposing extra functionality. Other things that we might pull in from CLDR are also even more straightforwardly new features. Maybe we can add small new features like this by PR.

ZB: I think I agree with what you are suggesting. I just don't understand what the formal way of doing this is. getting feedback takes time. I'm okay waiting. I would like to do this sooner rather than later, but I'm happy to wait for browser vendors if we need to.

DE: As I suggested at the last meeting but it was rejected. Maybe we could have a protocol to get one or two implementations just to like, make sure the idea is fully articulated before we accept the pull request. That will give us more information for new small features.

JHD: The rejection last time was for -any- normative change. This makes a little more sense.

ZB: My only question is, if I land the patch in spidermonkey next week... is it enough? I woudl like to think we can hope for more.

AWB: It's potentially kind of self-serving if the proposer of the change is th eimplementor and nobody else is doing it. But, we all know here what is going on. We can decide if this is sufficient. How do you get others to try it?

ZB: Our experience is kangax compatibiulity tables give browsers strong incentives to implement

AWB: Sometimes, you need to nudge the implementors, the spec says this, fix it.

ZB: Also happy to say we announced it today. We can see if in two months there is any feedback. Then we'll land it.

AWB: People here who represent these implementations should be able to report back.

ZB: Last item, adding a "style" value for date time format. Also an idea from CLDR. Trying to have parity with how operating systems manage this. How can we make it easier for webapps to follow these preferences? We would like to introduce this change in some way. I'm not seeking any stage, I'm just announcing this is a conversation we are having. One open question i'm seeking feedback on: any thoughts about adding style to datetime format?

MPT: There is not community consensus on what they should be. It's a never ending source of pull requests on moment. The community doesn't accept what Unicode has decided.

ZB: My thinking around this is that CLDR is a great place to have those conversations. Second our API is granular enough to allow userland to do whatever they want. Internally at Mozilla, if we want to match how OS's create a date. We need to follow how Windows/MacOS/Android etc do it. This allows us to close the gap, the OS does this, we'll do it too. I get that it is a heated topic.

AWB: It sounds to me like this should go through the stages process, and that this should be at stage one.

ZB: I'm not quite ready, no draft yet.

AWB: Not needed, this is enough. Unless somebody thinks this is not clearly described.

DE: The distinction here is that there is more complexity?

AWB: it sounds like there isn't necessarily a simple obvious solution that everyone agrees to.

ZB: I think there is. The solution is based on CLDR consensus. Which, as the name suggests is just the consensus. There are a significant number of poeple who dsiagree CLDR, but that's okay. We seek to confirm to CLDR, regardless if everyone agrees 100% with CLDR. We don't forbid people do other things, though.

AWB: Is adherence to CLDR a recorded decision and we have consensus on within tc39 or the 402 subgroup?

CP: Even if we adhere to CDLR, there are still questions to answer. We just don't know. We don't have a solution yet.

AWB: For me, that sounds like stage one. I'm not sure what the scope of that items is. Is it just datetimeformat style?

MPT: I would suggest hard adherence to CLDR. The moment you're willing to support -anything- but CLDR you open the door it never, ever ends. My advice from the trenches if nothing else is hard adherence. If it's not available in CLDR, shy away from it. Let people do custom patterns, but the community is going to fight you on that.

AWB: I think it would be quite in scope for 402, if they in fact could agree on such a decision. If you brought that here you'd get a rubber stamp and we'd move on. This is the responsibility of the 402 subgroup. Solve these problems and make decisions where appropriate.

ZB: Okay, i'll rely on my editor!

CP: So, stage one?

AWB: It's stage one for something!

ZB: Okay, stage one for datetimeformat style.

AWB: If you guys really want to consider saying yeah, CLDR is your guiding light for a lot of these things. You ought to say that and do it--see if you get any push back.

ZB: Dan, so far we haven't explictly stated supporting CLDR right?

DE: We have non-normative text stating it and historically Microsoft pushed back on it.

ZB: That was because CLDR at that time was much more bound to ICU, if I rememeber.

CP: Brian, do we have an update on that?

BT: No update.

ZB Would you oppose normative binding?

BT: As a rep of MSFT I can't say yet. There is an important decision coming I am waiting to resolve.

ZB: I'm happy to say that if it isn't in CLDR we won't support it. We expect you to have as much data as CLDR.

BT: The concerns aren't like... in some cases windows data is better than CLDR data. In other cases we have different fields that accomplish the same end goal. Using different fields could be non-standards compliant. That would mean we'd have to maintain two databases with different structures. I think we have to be clear that if we go down the route of standardizing CLDR, in practice no implmeentaiton will use anything other than CLDR. I don' tthink that's a bad place to be personally, but we should be cognizatn of the fact that the more stuff you add stright out of CLDR the harder it becomes to deviate.

ZB: I think that's a good point. I think the current CLDR proceudres are open enough to have everyone resolve their issues there.

BT: I haven't seen that participation with MSFT

ZB: I know we recently sent our localization changes upstream to CDLR. We're testing the system

BT: How is it working?

ZB: So far everything we've sent has been approved. The volume is likely lower than what MSFT would send though.

ZB: One other thing, we have an internal debate we haven't resolved yet. We have two option formats for datetimesformat. Does the community have an opinions on what looks more like JS?

??: The single format style matches CSS, so that makes sense.

ZB: Thanks for your time!

#### Conclusion/Resolution

- Stage 2 was proposed for these topics, but we didn't get an explcit "yay" or "nay" from the committee, and didn't appoint reviewers:
  - intl.ListFormat
  - intl.RelativeTimeFormat
  - intl.UnitFormat
- Stage 1 for the DateTimeFormat "style" option
- "hourCycle" can proceed as a needs-consensus pull request

## 13.i.e Discussion of Annex B.3.3.3 EvalDeclarationInstantiation overwriting bindings

(Shu-Yu Guo)

https://github.com/tc39/ecma262/issues/753

SYG: No browser is spec-compliant with this Andre Bargull test case. Reviewing the issue contents.

```
var f = "x";
eval("print(f); { function f(){} }")
```

SYG: This should print undefined, based on calling CanDeclareglobalFunction followed by CreateGlobalFunctionBinding. This is a strange discontinuity

AWB/BT: It's a bug.

SYG: IF we have consensus that this is a bug, what should we do?

BT: Can we use our normal rubric of remove eval and do what that does?

KG: In this case you're creating a function binding after you've already been writing to the binding. Not performing the CreateGlobalFunctionBinding technically changes the semantics. So, CreateGlobalFunctionBinding isn't quite identical to creating a var declaration.

AWB: Changing to the consensus implementation of what is historically done.

KG: This is like a weird... this isn't intersection semantics. Nobody is depending on this. We can do whatever we want?

AWB: Nothing might be a possibility. At 2015 we didn't actually specify at the top level, particularly for eval my recollection now is that we starting running into a bunch of hair in all of this. In fact it's not clear there is a valid implementation intersection semantics here. We didn't specify anything. We left it up to implementations. For 2016 we said "oh oops, we forgot about eval and global". Then we started defining things like we understood the situation but we didn't really. You know better Brian.

BT: We had a giant table of all of these cases with browsers and what they did We tried to weave through what they did. There were some pretty crazy things there.

SYG: All browsers agree on this now. We aren't spec compliant but we all agree on what the observed behavior is in the wild.

BT: I thought you said your slide said someone disagreed?

SYG: I think that's just... incorrect?

BT: I guess either it would be undefined or....

AWB: Okay so, that's certainly a quite reasonable legacy semantics. Simply say there isn't an intersection that covers that case.

BT: Yeah

AWB: It's just hoisting across all the blocks. That's close to what MSFT does.

BT: Yeah we used to always hoist out of blocks.

SYG: Are you suggesting we rollback the eval function hoisting semantics spec?

BT: What? No. Let's remember when we got here there was no spec and all kinds of wild behavior. Now we at least agree on sane behavior.

MM: I want to double check that none of the changes or non-changes that we are considering will have any effect on strict mode.

SYG: Correct. But i don't know what we're considering.

KG: I would like to propose that we check to see if there has been a variable declared. So, okay. Two potential things you might smash, properties and global objects. I'm not entirely sure what to do about smashing the second kind of thing or what browser agreement is in that case. If you say function array, does that overwrite the array constructor? If there is already a variable of that name declared, we should just not CreateGlobalFunctionBinding

AWB: That's consistent with how it's handled in the global case

KG: Yeah, it is consistently. Functions don't have that other case, though.

AWB: That's why we went through the trouble in the spec to defining this global distinction vs properties that just have appeared.

KG: It's really funny. I don't know what to do about that case. At least if there is a variable declaration of that name, don't create the binding.

AWB: if it's already there, you shouldn't do it at all. imagine you removed the eval. In that case we don't do the hoisting, do we?

KG: What do you mean by "the hoisting"

AWB: B.3.3.3 hack for that function.

KG: Which part of the hack

AWB: The leakage of the declaration in the block out to the global scope

KG: The leaking still happens. The assignment that occurs at the position of the function declaration still occurs.

SYG: without the eval, still at the top level, but it happens at the very beginning of the global script execution instead of executing the eval script so we don't see this undefinedness.

AWB: I have pull out the spectext. I thought we had a list of conditions if this and this and this and this apply these semantics.

KG: The condition is if there are no outer lexical declarations, but you would overwrite a var declaration or a top level function declaration.

AWB: For function declarations this was a set of rules for when you do this. For eval this has to be turned into dynamic texts for the direct eval semantics. They should essentially be the same tests. If it's in a function

KG: Yes. The difference is the same set of tests on whether you should perform the write. At the point you're actually executing the function statement, I agree those should be the same The question of whether or not to CreateGlobalFunctionBinding.

BB: What I find weird about this case is that overwriting happens through eval, but it only happens at that later time.

AWB: So, it still seems to me, whatever the semantics of var foo, block function foo, at the global level, whatever they actually are, if you put an eval in quotes around that block, the static semantics that are applied for the case without the eval should be the same as what is dynamically applied.

KB: The problem is that the declaration occurs later with the eval. With eval, creating the binding occurs after someone else might have created that binding. It's only observable in this case because creating the binding happens in a different place. It has to.

AWB: You're saying the difference is that within the block if you don't have the eval you have block level hoisting.

KB: At the beginning of the script

SYG: So Kevin is saying for Annex B there are two phases.

AWB: In this example, when we do the eval we are clobbering f, even if we never execute the block. That's the semantics of Annex B.

SYG: There is no dynamic counterpart in a function binding when eval is not present

AWB: Isn't there a similar thing going on when we do this in a function. We aren't really doing anything with the outer scope.

SYG: Because the spec mechanism for creating a new var level binding is not this CreateFunction thing...

AWB: It sounds like we're using the wrong spec mechanism.

SYG: No, we need to make a new one.

KG: Can we agree on the new semantics?

SYG: What Kevin has proposed: https://github.com/tc39/ecma262/issues/753#issuecomment-267171024

(quick discussion)

SYB: We have consensus that it is a bug. We want it to print x and we may need a new spec mechanism to do this.

MF: The small mechanics around it can be resolved in a PR

JLZ: Random question. There are no bugs around global properties here, right? So what, if you have window.f, what happens?

SYG: I think the same thing happens. Properties of window are just like "var f" in the global scope

#### Conclusion/Resolution

- Consensus on new semantics to print "x"
  - This is a bug.
  - This should print x
  - We may need a new spec mechanism to do this.
  - To get in ES2017 (not too late, as this is a bug fix)



## 13.ii.b Function.prototype.toString updates

(Michael Ficarra)

- [proposal](https://github.com/tc39/Function-prototype-toString-revision)

MF: I don't have materials or anything. I recently made changes to the stage 3 proposal. We discussed last time the line terminator normalization. This is a process that happens at the toString algo to replace all line terminators with a standard one. That was added as a part of this spec. No implementation actually does this. I remind you that the proposal's original intent was just to specify existing behavior. Sort of like an Annex B requirement. I've removed that normalization. I just want to make implementations aware of that. The reason I've done this is because I don't think it's valuable to try to specify something that all implementations have said they would not implement. We're just really trying to spec reality as closely as possible.

AWB: Just to clarify. Not everything in this proposal toString is done by every implementation;

MF: Where the implementations differ I try to use the simplest possible mental model of how the method should work. We've agreed on this being from the first and last token for the given grammar production. For functions created dynamically we have a very simple string building operation that tries to get as close to the overlap as possible.

AK: To Allen's point, V8 has done some implementation work to match the spec. Thanks for this change. it does make our implementation significantly more performant.

MF: One thing I want to add is that we did look into how difficult is to just do it yourself if you want to. It's a lot easier if you want to go from an unnormalized string to a normalized one if you want to. It's a pretty simple regex.

AWB: The motivation for this sort of normalization is to eliminate variations

MF: There are a lot of good reasons for doing this. IF we were defining this as a new feature I'd be fighting harder

MM: Since I was a strong advocate for normalization last time we met. I want to go on record as saying I do not object. I care much more to see this go forward than to see normalization.

MF: I feel exactly as you do.

DE: Our implementation in V8 has a patch, are there others?

MF:I know Mozilla was working on this when they realized the performance implications

BT: I implemented this in chakra but i didn't do the line termination. I only did it to fix another bug, it's not close to the spec.

MF: I've updated all the Test262 tests to not enforce this. I can test this in the wild to confirm the current state of things. The new tests actually enforce the opposite. I'll do some research tonight.

DE/AK: We aren't shipping, our patch is not checked in.

MF: Just wanted to let implementors know.

WH: I raised the issue with the lack of normalization being user hostile, but if implementations are against normalization I'm not going to block the proposal.

AWB: that's it!?

MF: Yup :)

#### Conclusion/Resolution

- Stage 3 holds
  - Going forward without line terminator normalization.


### What to discuss next

DH: What's going oNNNN? The universe makes no sense anymore!

AWB: If anyone has to wander off before 5, the intent is at the beginning of the meeting tomorrow is to handle all the non-technical issues we have remaining. In particular that includes the issues around diversity goals and code of conduct. If you're interested in those particular areas, the beginning of the meeting tomorrow, you'll want to be here.

BT: Can we ask people to stick around for the CoC issue?

AWB: I have done so!

AWB: Capture groups?



## 13.ii.c Seeking Stage 2 for named capture groups

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1fx5S4DpuD7z4K6ItFW7BjbvYPiuQNxU2769F5YhGP3o/edit#slide=id.p3)
- [proposal](https://github.com/tc39/proposal-regexp-named-groups)

DE: A quick overview of the feature: it allows you to access matched groups by a name in the match object.

AWB: Can the same name occur more than once?

DE: No, that's an early error. I'll double check that.

WH: That's an early error.

DE: There are a few issues I've been flip-flopping on. Should we allow this outside of unicode mode? the initial proposal was unicode only, then Kevin pointed out there is no ambiguity at all. The new spec text reflects a method of handling this.

AWB: Other than the annoyance of having to put a u after the slash, is there a reason people wouldn't always use unicode mode

WH: Lots of reasons. For example, if you're looking to match the ASCII a-z in case-insensitive mode, you'll get subtle and nasty surprises if you turn on unicode mode. It's quite common to run regular expressions on such programmatic or protocol data.

DE: The other thing I flip flopped on was whether the results should go on the match object or a nested groups object. I heard complaints about what we we added more properties?

MF: If someone writes a function today that accepts a regex, runs it, then accesses properties of the match that are supposed to resolve to existing properties may be masked by a capture group.

JHB: Sure, if you try to capture forEach or map in my capture groups.

DE: Another argument on the contrary of why we shouldn't expect more properties, given that we do have regex subclassing, anything exec'able should be able to pass it in and those might not be updated for the future version of ecmascript that gets added to the match object.

BT: Do you have a slide showing how destructuring and pattern matching differs?

DE: See the explainer; it looks like `let {groups: {one, two}} = /^(?&lt;one>.*):(?&lt;two>.*)$/u.exec('foo:bar');`

MM: Is there a reason -not- to use a map?

DE: It's not ergonomic, having a separate groups property is already some overhead, but maps are much more; but you can't do destructuring on a map.

BT/DE: Examining potential issues on destructuring assignments when exec returns null.

DE: There is spec text for all of this.

MF: Is groups possibly null?

DE: The match object is null if there are no groups in your regexp. If there are groups but the groups are not reached, they'll be undefined, just like with captured items in an array.

JHD: Groups could always be an empty object

BT: Yeah, that makes sense

AWB: That's adding another object instantiation for every...

JHD: It lets you do Object.keys

BT: Object.keys is a proxy for any operation you might use to enumerate. The only scenario that's important is dotting into the object.

DE: I'm saying that when would you try to do anything with the groups property from a match object when you don't use named groups?

AK: I don't feel like you want to pay for an object for every regex ever.

AWB: Can we safely return the regexp result object to an instance of a subclass of an array?

DE: It still doesn't answer the motification of having groups always there.

AWB: If you have groups as a getter on the subclass....

DH: If we're always returning a unique object when you call the getter when you normally access the groups property.

AWB: It could be the same value, an internal slot that we keep returning.

DH: We have lots of situations like this! Does it have to not exist? Could we just set it to the value of undefined to allow destructuring?

DE: I don't understand what code would require these. If you use destructuring, you know what groups you're looking for. If you write a regex, you know what groups you're looking for. Why would you introspect keys for groups of a regex that you don't know?

KG: There are two completely separate concerns, making destructuring work, and making object.keys work. It doesn't sound to me like anything in this change, having groups or not, would affect destructuring. Having the match object return undefined vs null would have mattered but that ship has long sailed. Having groups there or not doesn't affect destructuring as far as I can tell.

JHB: If the property isn't there, the destructuring will throw

DE: We know, the groups protocol would be very straightforward. Why would you not know what the groups are called.

DE: What is the object keys concern?

BT: Yes. You do a match, you see you matched something. You want to get a list of the groups that matched.

DE: Okay. So, then, making an empty object be in the groups property makes it so you can always introspect which groups exist.

KG: Or just do || empty object.

BT: The reason we are discussing this is to determine if it is reasonable for us to make it easy to work around.

AWB: is there really any question about it being separate? it affecting the prototype chain is a problem.

??: I'm actually concerned about that. People could referential integrity stored in a weakmap. That's an odd scenario I don't want to ever exist, where we sometimes have the same object and sometimes different objects.

AK: We already have a situation where something like this... template strings with a frozen array. The first thing looking into is what are the use-cases

(bikeshedding)

JHD: Currently, because I can't know the number of named captures, the way I've seen replace used, it depends on the number of arguments, you ignore the last two. With named groups being combined into one this could be a compatibility concerns.

DE: There is direct applicabliity to this, you could use the named captures as a legitimate application to replace.

??: In this proposal it's possible to mix named and position groups in the same regex. Is that something you really want at all? You could just say if you're going to use named groups you have to name them all.

DE: In this proposal, named groups still come back positionally. You could refactor an existing regexp by incrementally naming some groups, but leaving the positional ones with no change in their numbering.

WH: You know that somebody will come up with a feature request to have named capture groups that don't use up positional numbers ☺.

BT: I have been in the weeds implementing my own regex engine because in Ecmarkup, I have effectively [a giant regexp that I produce dynamically](https://github.com/bterlson/ecmarkup/blob/f8128632e765960ac55b9853315244ca639bc9b8/src/autolinker.ts#L66-L93). There is no way, right now, for me to know, which part of that pattern I've matched. If I could give a unique name to each alternative that would solve this.

DE: Why can't you do that with numbered captures?

BT: In order to know which you've found you have to iterate the whole thing to find out which one isn't defined. My guess is that the other group names won't be present if they aren't matched.

DE: The semantics in this proposal, in order to match the semantics of numbered captures, all the groups are always present.

BT: Sure, so it's the same problem here. You'd have to enumerate all the keys.

DE: OK, interesting. Sounds like we could potentially make the change to leave out the undefined keys, for this introspection; thanks for explaining. Seeking stage two

MK: That's fine

JHD: Sounds like there are just editorial issues

AWB: Okay, we call this stage two

AWB: Annex B RegExp grammar, do we fit within those constraints? The non-Unicode case is pretty much what browser implementors use.

(discussion about how to address this)

AWB: Are you suggesting if you use the named things, that kicks you out of Annex B grammar.

DE: No, no, it just kicks you out of that production.

AWB: Why not kick you out of Annex B?

DE: I would worry that would have weird refactoring hazards, if we said that if you invoke this feature, then you step into a different RegExp grammar

WH: Describing entertaining problems we'll encounter when modifying the Annex B grammar to add named capture groups: That grammar is unique among the grammars in the spec in that the grammar is highly ambiguous and the order of productions matters. The production that's listed first wins. For `\k` there'd be two productions, one for parsing `\k&lt;id>`, and the other one being a `\k`; if the parse of the first fails, the second one would be picked, which is undesirable.

DE: OK; we'll disable the `\k` identity production in `+N` mode in Annex B.

WH: That would work.

AWB: What if we just kick the regular expression to the non-Annex B if named capture groups are present?

MLS: It makes implementation very difficult. I have existing regexps, Unicode ones, named I'm going to go partially into, but if I'm not in Unicode mode, then this other behavior is invoked

AWB: The biggest issue could be that you may be way at the end of a parse before you realize you need to change.

DE: That's already going to be the case in some places. (NB: See related blog post https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983#.kup9nqgd8)

#### Conclusion/Resolution

  - Moves to stage two
  - Groups are segregated into a separate object (to avoid conflicting with prototype changes)
  - Reviewers: WH, someone from MSFT
  - Issues to look into:
      - Interaction with Annex B grammar
      - Tweaks to groups object (always present? include only properties for groups that are found?)


###

AWB: It sounds like we now have several regex related features to land in 2018. I think it would be beneficial for users to let them know about this theme.

MB: https://mathiasbynens.be/notes/es-regexp-proposals
