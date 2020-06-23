# March 20, 2018 Meeting Notes
-----

István Sebestyén (IS), Waldemar Horwat (WH), Dean Tribble (DT), Brian Warner (BWR), Mark Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), Robin Morisset (RMT), Keith Miller (KM), Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Adam Klein (AK), Sathya Gunasekaran (SGN), Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Bradley Farias (BFS), Thomas Wood (TWD), Mathias Bynens (MB), Alan Schmitt (AS), Sven Sauleau (SSA), Chris Needham (CNM), Edd Yerburgh (EYH), Jason Williams (JWS), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Conrad Watt (CWT), Philippa Gardner (PGR), Godfrey Chan (GCN), Chris Hyle (CHE), Lin Clark (LCK), Ben Newman (BN), Jake Archibald (JAD)

Remote:
Ron Buckton (RBN), Leo Balter (LEO), Rick Waldron (RW)

-----

## Agenda

Agenda: https://github.com/tc39/agendas/blob/master/2018/03.md

## Welcome

RJE: New member get together is on Tuesday (today) at 20:00.

KM: Meet the TC39 on Thursday at Facebook. Please get in touch with me so that we can add your name to the list of guests.

DE: Conrad is here to discuss the memory model, but it was not added to the agenda, he is only here today, so we can discuss it today. It doesn't need consensus. Schedule constraint is that it needs to be done today before 3 pm.

BT: Let's just discuss it as part of the normative PR section.

## Adoption of Agenda

RJE: (agenda planning)

#### Conclusion/Resolution

- Agenda Adopted


## Approval of the minutes from last meeting

RJE: Any issues from the minutes last meeting?

(none)

#### Conclusion/Resolution

- Minutes from the last meeting approved.


## 5. Next meeting host and logistics

RJE: Next meeting?

API: New York, agenda posted on GitHub

#### Conclusion/Resolution

- Agenda created https://github.com/tc39/agendas/blob/master/2018/05.md


## 6. Report from the Ecma Secretariat

IS: It would be great if we could come back to this for five minutes tomorrow.


## 7. Project Editors' Reports

BT: There isn't much to report from last time. Editorial changes only. Where we are at right now with the spec is that we are in the midst of the royalty-free opt-out period. If you have concerns about patents, hopefully you have sent this to lawyers. In practice, I realize that this probably isn't of concern to you.

IS: Two things about this. The opt out period is for two month. Final opt-out limit is June 27, which is the date of the formal approval of the standard by the Ecma GA. The latest that the opt-out period can start is April 27. I have to notify the Ecma GA about the start of the opt-out, because last year some members complained that we only announced it in TC39.

BT: We already have it.

IS: Is this published on Ecma? Because this is what we have to do formally. GitHub unfortunately is not enough for that.

BT: We have it on the reflector, but let me take a look.

IS: Ok, let's make sure that we communicate -- it was mentioned at the last time at the Ecma meeting that this was only circulated internally within the TC39. So, this is an action between Brian and the Ecma Secretariat.

BT: The next step in the next meeting in NYC is that we will be making one of the rare votes that we make for the ratification of ECMA-262 2018 -- so be prepared in May to cast your vote for your company regarding if you support the new edition. We have never had a vote against it, but we've had abstentions in the past.

IS: Officially, we need to publish the draft standards two months before the GA approval. We normally assume and we get it so that TCs formally approve such standards already by that time. So if you say in May that is very unusual in Ecma, then it is perhaps just a conditional publishing for the GA; TC39 then need to give the yes or no, and depending on that, the standard will stand up for GA approval as it is, or be withdrawn from approval in the GA.

BT: Well we haven't finished the opt-out period.

IS: These two things are actually separate, and we can handle them separately. The document needs to be published two months before the Ecma General Assembly.

BT: So you are recommending that we vote today?

IS: Yes, because editorial changes between now and June 27 are okay. But no major technical changes.

BT: We have a stable document for some times already. If it works better for Ecma, we can ratify at this meeting.

IS: That would be good. My second question is, do we have two standards: ECMA-262 and ECMA-402? For both of these standards, you need official approval which is separate from the opt-out period.

RJE: Okay, let's do the vote on Thursday afternoon.

IS: It should be a simple majority vote. You don't have to go member by member, just asking how many vote for it, how many against it. Abstains are counted as abstain. As you like....

RJE: At the last meeting, there was a proposal for the transition of editors.

BT: Over the last couple of years, I realized that editorship is a big job. It is interesting that GitHub created the appearance of a lot more work than existed in the past. We have hundreds of issues that need to be triaged and addressed. There are long running changes that need to be done. And this is on top of all of the work that you folks are doing. At the last meeting, we discussed forming an editor group with me. Since then, we have had a few discussions with a few people offline (Jordan and Brad will join the group with me). I think it would be good to discuss if there are any concerns. The idea is that I would be serving as an editor in chief- a mentor as far as spec work goes. My focus would be on tooling and supporting both Bradley (BFS) and Jordan (JHD). The three of us together would hopefully make the most effective editor group that standards have ever seen. If there are any concerns, feel free to raise it, also fine if you want to raise it personally. Just come find me.

BT: They have been helping somewhat on the issues already. Do we have anyone to do 402 updates?

IS: (I DID NOT SAY IT IN THE MEETING, NOT TO WASTE TIME, BUT IMPORTANT): The ECMA-262 and ECMA-402 are the only standards in Ecma in HTML main format. The PDF Version for ECMA-262 - which is the main Ecma publication format, e.g. for downloading, going to national archives etc. is also important, not only the HTML version. Until ECMA-262 (2016) version, the PDF version looked good. The latest version not anymore. E.g. no page numbers, No proper formatting at page breaks, etc. We need the Editors' help with that. The Ecma Secretariat can help, but we need a good tool for HTML-to- PDF conversion... Please to help us to solve this issue.

DE: I'll do ECMA-402 updates, the main features are PluralRules and hourCycle, we had no complaints so far. There are four Stage 3 proposals for ECMA-402, and we are having monthly meetings to discuss ECMA-402. Please let me know if you are interested in attending.
(https://www.ECMA-international.org/publications/standards/ECMA-402.htm)

RJE: ECMA-404?

IS: ECMA-404 as far as I understood is completed. We have finished the fast track approval and this is now a stable standard so it will now last "forever". So at the moment, the next one - 414 - can I say something about that? It will make the Ecma fast track proposals not necessary, as in the past. As you know, we have had problems in the past with fast track approvals. Yearly cycles are simply too fast for the process. Once 414 is approved, it will never change. Once it is approved, it will contain non-dated references to 262 and 402 that mean that it will still be working with 414 - as always the last version of ECMA-262 and ECMA-402 will count. From Japan, we had a negative vote in the DIS vote which we took into account for the final FDIS vote, which is finally already out. It is a 2 months vote. Maybe at the end of (the 28th of) April, will be the termination date (I do not remember out of my head the exact date). Since everyone else approved, the DIS already this will probably go forward as ISO/IEC Standard. So this is the status. It is now in ISO in the final balloting process and will be done in a month.

RJE: Test262 update?

DE: Let's do that in the afternoon when Mike is here.


## 8.i.a Normative: add RegExp lookbehind to annex-B

(Daniel Ehrenberg)

- [Normative: add RegExp lookbehind to annex-B #1102
](https://github.com/tc39/ecma262/pull/1102)

DE: (presenting Needs consensus PR: Disallow lookbehind in QuantifiedAssertion (likely needs backporting to ES2018))

DE: This PR came from a new contributor to the JS specification who noticed in the lookbehind specification that we forgot to contain the Annex B specification containing a ?? (for example you could have a lookahead without a qualifier, which makes no sense at all). ... Based on code review, the initial version was to disallow even in ... ? The PR is very simple  ... the design principle is that we're only adding the bare minimum to add the ... but we're not adding support for legacy features when the new feature doesn't make any sense. This is what we want to backport to ES2016.

MM: Can you explain why this is in Annex B?

DE: The main spec was already modified. It has an ambiguous grammar. Regular expressions normal context-free grammars first one is tried, and so on... Personally I wouldn't be opposed to taking it out of Annex-B.

DE: I guess it's in Annex B because it's too messy for the main spec.

MM: Annex B started as language-optional. Now, it is considered as required in the browser environment. Is that the intention?

DE: I have my opinion about how Annex B is structured into the spec, but it is not very relevant here. My intention is to make sure the non-Unicode RegExp grammar integrates well with lookbehinds, and that we don't extend nonsensical legacy cases unnecessarily.

RJE: Any discussion or objection to this?

DE: Do we have consensus? We already have Test262 tests and it has already shipped in V8.

#### Conclusion/Resolution

- Approved.


## 8.i.b Normative: Fix length property of TypedArrays, DataView, and ArrayBuffer constructors

(Daniel Ehrenberg)

- [Restore original definition of DataView.length #1131](https://github.com/tc39/ecma262/pull/1131)

DE: DataView constructor view was noted as 3 even though ... ( ? ).. to give it a more comprehensive memory model. There are two different proposals. A minimal one and another more complex unification. It seems like given implementation and Test262 converged on 3 as ? .... any other thoughts on this proposal?

MLS: Can you show Leo Balter's table?

??: So you want to change DataView?

JHD: The original post from andre here is that the implementation is 3, but the spec says 1. Because conceptually one of the arguments is required, and two are optional. So my preference is, even if all four browsers agree, that the length is 3, then ..?

JHD: Function lengths are one of the things that we found to be web compatible to change. Is there any reason why we shouldn't consider changing the length to 1?

AK: I think its a waste of time to change length. Let's take the simplest path.

BT: I'm fine with changing the spec. It's a bug that will get fixed when it gets fixed, when it's time.

JHD: Can we make it so that the Test262 is changed to 1 to match the spec? Should we shoot for that?

??: The browsers will fail the tests. The browsers do their thing but the spec should be ..?

DE: Three options: leave the spec as is and update the Test262 to have the length of 1 instead of 3. Option 1: Total alignment with Chakra core and the spec draft being one. The other option is to create a new consensus concept that Leo had. Proposal two is to make a rough consensus between implementer.

YK: I want to hear if vendors agree that 1 is the correct solution.

BT: That doesn't change the answer. If you wanted to be pedantic, 1 would be the correct choice, I think.

BT: Would anyone object to any of the options here? Raise your hands if you have any objections for any options here.

WH: Let's split the difference and make it 2 (everyone laughs).

MLS: Since there's not much controversy. Let's just keep it 1, since that's the right answer.

DE: My understanding from this thread, it was typo accidentally?

BT: Your implementations have said that no one really notices this. If we leave it as is that's less spec work.

DE: Tie breaker here could be "does anything have web compatibility risk". If we have a strong compatibility(?) of browsers ...

JHD: The only two situations, non construct-able functions for callback and the other is polyfill.

DE: The thing that new code uses is a very small subset.

JHD: There are two places where code tends to rely on the length. Polyfills and ??

KCL: People might use this for compatibility checks. Just in this specific use case, the length is already inconsistent.

AK: The reason why I prefer the minimal change is to minimize the time spent on this. That's my whole goal on this thing.

BT: I share that goal.

AK: To reduce time on trivia.

DE: It sounds like nobody wants to talk about this. Any rejections to Proposal?

BT: I object to changing the spec.

DE: Better to change implementations than to change the spec?

BT: That is absolutely NOT the principle. I just don't care.

DE: Sounds like we will not make a change, but leave the length as it is.

#### Conclusion/Resolution

- Rejected
- Leave the spec as is, with DataView.length === 1


## 8.i.d Strengthen Atomics.wait/wake synchronization

(Conrad Watt)

- [Normative: Strengthen Atomics.wait/wake synchronization to the level of other Atomics operations #1127](https://github.com/tc39/ecma262/pull/1127)

BT: Conrad, what's your GitHub username?

CWT: https://github.com/conrad-watt

CWT: Is this fine for everyone? This proposal is about I noticed that 2-3 years ago wake call synchronizes with wait call. Basically treating wake and wait as read and write. But if you look at a more recent version of the spec. The behavior is different. If you do a wait then a read in one thread, and in another thread a store of 1 followed by a wake, you would expect it to always read 1 at the end, but the spec currently says it can read 0, which is totally wrong. If you go back to the proposal from three years ago, you realize that these are meant to be synchronizing. The only small caveat is that implementer will need to make sure that they use the correct barriers. I talked to some Mozilla people, who said they busy-wait rather than going straight to the OS.The spec point of view is the correct behavior should be to synchronize wait and wake. The only question is have implementers done something wrong in the meantime?

WH: I would very much doubt it because that synchronization is basically the point of wait.

SYG: Implementers have done something stronger.

YK: Currently no implementers have shipped this so we could change this.

CWT: So that sounds like it would be a very good idea to land this proposal.

WH: I remember the synchronization being in the proposals when I was reviewing them. I didn't notice it getting deleted from updated proposals.

KM: We do a full extensive fence, so that is already fixed on our side.

CWT: Ok, so that would be conformant even after this change.

DE: Does this PR have consensus?

#### Conclusion/Resolution

- Approved.


(DE: We have a really long backlog of need-consensus PRs. Jordan had a different one that I thought about)


## 8.i.e Array Buffer Detach layering improvement

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/ecma262/pull/1112 )

DE: Let me share the screen. Let's keep the timebox for 15min.

DE: So, when you detach an ArrayBuffer, there's certain embedding specifications that own ?? and prevent you from detaching it. WebAssembly exposes a memory object which has a underlying memory buffer, and you can't not postMessage the memory buffer, but the WebAssembly memory object as a whole. This PR gives a concept of an ArrayBuffer detach key which can optionally be constructed that can be checked later in a properly layered way.

BT: But it's not exposed...

DH: Before you go any further, this is new to me. Can you explain?

DE: There's a thing in HTML, that's called postMessage (Everyone laughs...)

DH: I know about postMessage.

DE: Maybe someone in the room doesn't. postMessage allows you communicate with things like Web Workers. When you do that it attaches a copy of the post message to the Web Worker. For TypedArrays, what actually happens is that the TypedArray is no longer available on the sending Worker. What we do is move the ArrayBuffer into a detached state, Whenever you use a detached ArrayBuffer, an error is thrown. Not every browser throws the TypeError, some will return undefined. WebAssembly provides programming a top of ArrayBuffer, the JS api has the concept of the Memory Object, which is memory object is a thing over an ArrayBuffer. WebAssembly does not use this. The way that memory objects are created is sometimes more efficient. Anyway, memory is also grow-able which ArrayBuffers are not. The API for memory is... you can postMessage to another worker. What you cannot do is take out the underlying arrayBuffer and postMessage directly. I'm working on the WebAssembly JS API specification. There's a lot of specifications that work like this and it's pretty difficult to read and implement. The WebAssembly memory API is already shipped in major browsers.

BT: Can you talk about Allen's concerns?

DE: Allen's concern is that if we expose this to other specifications but not to JS it is a design smell. If other specifications can do this why can we not polyfill it. We can definitely consider adding it. This patch is a bit different, is showing the state of the world today. This isn't a standard that is reflecting a legacy consideration. This had the participation of many stakeholders. Programmers and implementers should have a clear specification that shows how this works.

BT: So, I think Allen's feedback wants to be a public API, it's more about in the 262 spec, we should have a layering API. WebAssembly wants this conceptual (?) key thing. Allen's concern is that we haven't already considered what this is. We should have a systems-level conversation about this. I'm doing my best to proxy his viewpoints.

DE: I tried to respond to Allen's concern in the issue thread, applying his suggested renaming. Otherwise this is significantly generalized from the bare minimum with regards to the WebAssembly specification.

KM: WebAssembly, when you grow the memory, it's supossed to detach the memory.

KM: Some browsers actually alias the memory.

MM: Clarification question: you mention detach and super.detach. Is there a distinction that ..?

DE: Not really. This wasn't my idea, this was an idea from Andreas Rossberg. Until we get to the point of exposing a JS API. Does anyone else have any suggestions of how to structure this so that it could be more generalized?

DE: Any more suggestion about it?

AK: I think Allen is asking us for more system design but a lot of it it's out of ECMA. ECMAScript had a pretty well thought spec on modules. But I don't think it should be a requirement that every system design discussion has to be exposed to JS to integrate with JS. JS is used in a lot of different env. And in a lot of different ways, it seems there's no use case for exposing this.

BT: That's my preferred response as well, but nobody has came up with what system design would look like. Let's do this thing.

DE: Another note on layering changes -- layering changes can be done outside of this committee on GitHub. Is that correct? However, we are discussing this here due to the activity on the issue.

BT: That is correct.

DE: Given the past discussion, should be move forward with this patch?

BT: It describes the world, so it seems good.

MM: I want to register an objection to the position that Brian(BT) and Adam(AK) just stated. I do agree with Allen, if something is a useful API for integrating with JS, then we should support that, but there's no reason why that should slow this down.

BT: I don't disagree with that at all.

RJE: I don't hear any object with that?

TST: It seems that this concern is orthogonal, this doesn't change anything.

BT: I mean yeah, that's usually true of these layering changes.

TST: If we were to expose ArrayBuffer.transfer, but it wouldn't touch this proposal very much. It seems like while yes, that's might be a valid concern, but that wouldn't change anything about this particular proposal.

RJE: I believe we have done all that we can on this topic (Needs Consensus).

BT: Yeah, we're done with that.

#### Conclusion/Resolution

- Approved


## 9.i.v Open-ended discussion: How should we evolve the JavaScript standard library over time?

(Bradley Farias)

- [slides](https://docs.google.com/presentation/d/1QSwQYJz4c1VESEKTWPqrAPbDn_y9lTBBjaWRjej1c-w/view#slide=id.p )

BFS: I think it will flow into a later topic as well.

RJE: How should we evolve the JS standard library.

BFS: I basically stole this discussion from DE.

DE: Thanks for taking this on.

BFS: I am going to talk about the standard library. We have a relatively small standard library for JS. The best thing for us, maybe not. We are here to propose things, but not as much for standard library as I'd hope. Most of the proposals are for syntax. Dan wrote up a list of everything that has changed that might be of concern. Java has a huge standard library, which is not something I'm very interested in copying. We have a cultural reason for why we've moved a little slower than some languages. We've been very conservative - we think through features and APIs on a year scale and we spend time on it.We have consistent interaction from the community regarding what features should be added (features from known libraries). Let's talk about what we're thinking about when we talk about what to add to the standard library. Optimizability and performance. Expressiveness... these are all important factors. We have `WeakMap`, `WeakRef`. Also, one of the main purposes of JS is the glue for the world wide web. Everything that we can pull out from the standard library, everything that we add to the standard library is less stuff that needs to be pulled from the internet. We don't really have a bar for this right now. There is an expectation from userland that if something is useful, it has proven itself as useful and should belong in the spec. We try our best to go with what causes the least amount of friction, not always the best though. We even have other specifications that are using javascript, and as we evolve our library we need to take that into consideration. There's been some cross-pollination with Node and the web. Some of these examples like TextEncoder, but they haven't landed in the JS spec for some reason, maybe we should look into why they haven't landed in the JS spec even though they're applicable to multiple environments. One idea that I have had, after only a couple of months of trying to be an editor, is perhaps we should think of another way to document and publish our constraints for the standard library. These standards were written by Dan (thank you so much). There are some different expectations of how we use IDL, but maybe we should look at producing this new domain language for JS. And that might be a way to ease people reading the specs, and quickly skim over things.

BFS: Built-in modules. We just had that whole thing about arrays. We've tried for years to describe built-in modules, some of us liked them but some of us don't liked them. There have also been some philosophical differences such as people wanting things to be available on the global or not.

WH: No one wants to be the first to put their library into a standard module.

BFS: We're going to have a presentation later on about polyfills. We also have some experience with loader, both with service workers; Node has an implementation of loaders. What are we going to do about this? Well, this is probably something we should look at again. This is a route that doesn't have the same mechanics as extending array. These are things we need to agree on. I am happy to discuss this outside this proposal but I'm trying to keep the timebox, I want all of us to think of this not just in terms of syntax. These are library features and we are starting to get a few of them but there's a ton more used in the ecosystem. I don't even know how many people use Lodash because people consider it to be a more feature-complete standard library. Before this slide, we did talk about what is good to add to the JS standard library. There is also a huge amount of the ecosystem which are either hard to produce in small libraries or is so common that they use it as a small module.

They're starting to have duplicating for 50+ on NPM, they have lodash and many, many modules in their dependency graph, it's absolutely monstrous. Have made a GitHub repo about getting people to work on the standard library. But for now, maybe we can just compare what other languages are providing. If you see something we can compare it, make a proposal for it. But before we jump on the adding syntax bandwagon, we should look at library features.

Fewer things to learn because they work in multiple ways across proposals. That's it.

YK: I have two comments. We badly need standard built-in modules, and if we need to discuss it we should. And if the reason we are not doing it is because we are not discussing it, then we should get on that. Perspective was that it's really hard to get people to update to new syntax, but libraries can add polyfills for new APIs. This is the opposite of what happened, for various reasons including the "smoosh map" debacle. It turns out it's pretty hard to standardize libraries in user land. There is a lot of complexity to building a library, and it's even harder to do in user-space than in built in modules. Because we think that its easy to do it in user space, we are underestimating what kind of an impact we could have. Library everyone can polyfill and thus throwing it whatever.

BT: I spoke about a JSIDL subset of WebIDL a couple years back. I strongly support this idea, because it will clear the spec. If anyone wants to work on JSIDL, let me know. It's a lot of hard work to figure out. We don't want to take just WebIDL just as it is, as it has a bunch of Web-isms in it. So, plus 1000 to JSIDL, since that would help a bunch. I second Yehuda about Built-in modules. Sensible APIs for people without having to deal with web-compat. I'll note that the proposal I liked the most about bare modules rather than a string literal thing, I like the identifier. So rather than "js:itertools" import ... that would be "itertools" bare. Anyway, I'd love to see people working there, and really hope we're making progress about ES modules.

KM: It turns out, it's a lot more sane to do this out of bound. No spec change, but we should discuss about if we have modules. How should we do it? If we are thinking about something like Node, how ... ? The other question is: If we did go to a identifier based thing, we probably need to come up with some resolution there since it avoids some ambiguity. If the JS spec picked some kind of naming convention for our modules, we can map this in the Node world.

BFS: We should still talk about collision with same namespace, which is relevant with name map that Domenic proposed?

DE: I'm a big support of discussing things which relates to our specification closely, even if they aren't technically inside the ECMAScript specification. I wanted to bring in the status of JSIDL and WebIDL. So I started the discussion with the web IDL and the response from them was great. They're all for using IDL for javascript needs, and making changes needed. There's a lot of open issues in the IDL repository. These are all technical things that we could work through. If we wanna have a working group for builtin modules, have a regular call (once in month), would somebody will interested in such a call?

YK: I would be strongly interested.

MBS: One of the problems we've had is namespace collision with npm. There's a couple things we're interested in adding for Node, but that may conflict with the npm namespace. For example, there's a popular http2 library in user space, makes it problematic to use that name within node. In Node, it would be really great if we had some sort of name space or something. So we could say, "Hey, this is a node thing". No compete with the global npm namespace. Something that's standard with all other environments. I was imagining something like "Node:" or "web:" or something like this. Things hanging off the global [namespace] like console, for example. It would be great to have something like an "std:fetch". `Node:` or `Browser:` could identify in which environment it's coming from.This is something that's blocking us, and I don't want to introduce a mechanism that's going to cause more problems or backwards incompatible.

KM: I have a question - in node es6 module loader, does it have the same sort of restrictions like --

BFS: Web doesn't allow bare specifiers, and follows URL semantics. Everything in Node's specification is behind a specifier. If it doesn't work in the web it will work in Node behind a specifier.

KM: It doesn't seem to have too many collisions right now. But a consistent naming... do we want to discuss at least some of the beginnings of this in this meeting? Or do we want to put this off until later. I still have my 30 minutes, I can put it back for discussion. Any thoughts, opinions?

AK: There's a lot of value with moving this into a separate meeting, but there is a lot of concrete stuff to discuss.

#### Conclusion/Resolution

- We will follow up on discussing built-in modules offline


## 6. Report from the Ecma Secretariat

(István Sebestyén)

IS: Something I already wrote into the meeting notes. It's a very mechanical one regarding the editorships in the past. In 2016 we also had a very good PDF version. We have a problem with the latest PDF version of ECMA-262. The main format for Ecma is the PDF version. But here for ECMAScript what we are doing the HTML version, but we still need the PDF version. The main format for TC39 is the HTML version. The PDF version created from the HTML doesn't look good. For instance, the page numbers are broken. Luckily, I have somebody in the Ecma secretary that can do the transformation but unfortunately we don't have a good tool for the transformation of HTML to PDF. If someone has a tool that we can buy or that we can get; that would be a great thing. My request would be that for this edition to help with this. We are getting still a lot of requests for full downloads of the PDF version. The PDF is still the #1 standard that everyone is taking from us. Public libraries and other organizations would also like to have a good looking copy, that asked for the PDF version. So I will need some sort of help on that.

MB: (after the meeting) What's wrong with `chrome --headless --disable-gpu --print-to-pdf 'https://tc39.es/ECMA-262/'`? Page numbers seem to work fine. There is one minor rendering issue which is patched [here](https://github.com/bterlson/ecmarkup/pull/134).

IS: There are several issues regarding TC39 practices. For me, they are not problems. The issues we are having here are basically that TC39 operates in a different manner than any of the other Ecma communities, but this brings up issues and we have to solve it.

And we are doing it with the mangagment and only to bring this to the management committee - which really belongs to them. Each time they hear that there are problems, there are some people in the management who are really thinking about big problems, etc. In my opinion, this is an extremely good group with real problems we don't have to solve. To the next executive committee meetings and this is how to handle the, not the external participants that are not TC39, but for instance for one of the categories of people who are coming here, that we should make a new category of people in Ecma who have been working for 20 years, who have really shown continued support—I don't know what this special group should be called—

??: Ecma Fellows?

IS: This is something that really that would be defined by the Executive committee. The only thing that they cannot do is voting and they should follow the Ecma rules. This is something we must discuss in the executive committee. How should we handle those who are not part of this organization? Babel community doesn't have any legal status, so they can't sign up as members. For an organization that doesn't have any legal status. they must follow some ... this is a dilemma - Ecma has the royalty free on one side, on the other hand, the strengths of TC39 that we are trying to reach out the the open source community like Nodes and Babel. It's a little bit of a contradiction, and I call this an issue -- how do we solve this?

BT: I would like to make a comment about the PDF. For those who aren't aware of the history, we used to use a word document. But we're now doing development on GitHub with a HTML spec format. If anyone else is on the CSS working group, there's a print media spec that could help with this! (Laughs...)

Dean has a magic toolchain that will give us a higher fidelity. I have two things to say on that ...

MM: Does it help that the source is in ecmarkup? Would that help at all?

BT: I mean we could make our own Tags with semantics for printing, that could help for our pe-processing.rinting, we have a tool for converting them.

BT: That would be a lot of work I think, I would rather stick to a toolchain that renders in webkit and does something cool with it. The reason why the PDF doesn't look good anymore is that the PDF doesn't work well for implementation work.

WH: It's nice to be able to download.

BT: You can download an HTML page too, it's one document.

WH: From a librarians perspective, it's more likely to still work in 10 years than some random HTML page...

BT: Yeah, I don't know about that...

IS: E.g. the Swiss National Library always comes to us regarding this. It will be kept in the mountains of the Swiss Alps for 1000 years, it should look good. ECMAScript/JavaScript is one of the most important standards today. So, we have to expect much more interest in the topic as for a typical standard...

BT: I have a suggestion, I can't justify spending a significant amount of effort getting back the fidelity we've lost, because it's the peoples that are working on the spec that are ???

And now the website is many times more usable than the PDF for finding references and highlighting things.

So, I want to point out that there are contractors who will take your HTML site and produce a very nice PDF out of it. They just need to be paid money. If Ecma would be willing to put money towards this, I'll be happy to work with those people.

IS: Absolutely, we just want to get closer. Perhaps, we get more man power, or perhaps a tool, then we can get closer (to achieving that).

BT: The only thing that I will try this cycle will be to try dean's tool.

IS: It's closer.

BT: If you are hearing complaints, I am guessing that Dean's tool will fix this. I guess the best way to address those concerns would be by hiring a company. Who's doing it?

IS: Best effort...

BT: Well, what we currently have is also a best effort... (Laughs) Making a PDF that is high quality we need to hiring someone.

IS: No no, the community is happy with the current versions and I do not want to over burden anyone.


DE: Thanks for your work over the years with communicating and handling the Ecma coordination with our committee's practices. Finding a right balance between Ecma sustainability and being open to a larger community.

#### Conclusion/Resolution

- Update delivered


(Break for lunch)




## 10.i.a Update on Frozen Realms in light of Meltdown and Spectre

(Mark Miller)

- [proposal](https://github.com/tc39/proposal-frozen-realms)

MM: Title; like the end of "language security". For many things in security, you can apply this three ways ??? to break down issues. Only authorized actions or effect happens; only authorized actors can provide invariants. You can write programs that continue to do this, to ??? issues within the same address space. There's liveness and correctness; correct clients do not get good? service, they get correct service. Finally, there is the issue of most concern with regards to the issue of Spectre and Meltdown. That secret information -- it is not feasible to infer it; information that you have access to should not be inferable from information that you do not have access too. Confidentiality needs to be broken down into overt vs. covert channels. Overt means that the communication is guaranteed to happen according to the language semantics. When an object A passes information to object B, it means that is overt. If information is leaked, this is covert. The issue here is intentionality. The dependency between these things is important: in a good architecture, integrity should not rely on availability. Local integrity should not depend on confidentiality. Distributed integrity uses cryptographic protocols, which depend on cryptographic secrets. Side channels--as in Meltdown and Spectre, ... and a computation can infer information which it should not have access to. Granularity is important. When we talk about language-based security we are usually talking about an object within an address space in Javascript and sharing an event loop. So safety, integrity, and consistency apply down to object integrity and security. Confidentiality you can make the important distinction between language security mechanisms. You have to assume that if a computation has access to exact timing, it's trivial, even without Spectre and Meltdown, for the process to signal (it can take up various amounts of time, and just use that to infer the information that one was attempting to communicate). The big surprise with Meltdown and Spectre: data at rest is subject to side channels. This is what broke everyone's assumptions. The high level of certification, the orange book never required a proof; it merely required an argument that there was an upper bound on the data bandwidth that could be read. This is a text from the frozen-realms' proposal. "Even without pinning down the precise meaning of implementation defined, a  computation that is limited to a particular type of determinism cannot read covert channels and side channels that it was not explicitly enabled to read. Nothing can practically prevent signaling on covert channels and side channels, but approximations to determinism can practically prevent confined computations from perceiving these signals." This is a reflection of the fact that I never assume that there no side-channel ??? In the Meltdown and Spectre worst case. if there are deeper problems in the CPU that have not been identified yet. Within the process, you have complete transparency, and integrity is not diminished at all with regard to local integrity. Frozen realms is a local proposal, in relation to Spectre or Meltdown nothing changes.

For confidentiality, the frozen realms provides a key enabler. Many libraries that we link into our programs are purely computational. The things that they need do not have to measure time. Frozen realms gives them what they need, but denying them access to measuring time. Many libraries—think parser libraries—that we link into our programs are purely computational; they don't need to measure time. Programs as a whole generally interact with the user or with the network and need to access the time.

Ethereum demonstrates the utility of this kind of... Meltdown and Spectre (beyond my worst fears) demonstrate that if you can't keep a secret, is it useful to talk about security? Etherrum is a demonstration of the integrate of ???

YK: What is the takeaway for the proposal?

MM: Encapsulation boundary should be taken as only to be reliable as an integrity boundary. And to warn people not to read into that encapsulation of information, i.e., confidentiality.

YK: Does it change anything about the API or the semantics?

MM: What changes is the priority. It gives you in-process protection against confidentiality.

??: Actually playing off that, one of the things I want to see off frozen realms is to run things in a deterministic fashion. To perhaps at least offer a process for usage examples that make it easy for library authors to test these cases.

MM: The other thing,  Wonderful paper: ["Fantastic timers and where to find them"](https://gruss.cc/files/fantastictimers.pdf) a paper of all the ways that you can use timers in the browser context. Then we can spend time classifying those and building off them to understand the ergonomics of these use cases, which libraries can then use.


#### Conclusion/Resolution

- Frozen realms doesn't guarantee confidentiality, only integrity.


## 10.i.b Meeting planning for 2019

(Daniel Ehrenberg)

- [Thread](https://github.com/tc39/Reflector/issues/130) (private repo)

DE: Last year, we started planning too late for this year's meetings, so let's start the process early this year. These are the days for the next meeting, do you have any objections or feedback? Please post comments on the issue. Last year, there were more prospective hosts than were actual slots, but we still need more meeting volunteers, so I'd be really interested in email directly or response to the thread.

DE: The distribution is 1 in Europe, 2 in West Coast USA, 2 in East Coast USA, and 1 in Seattle. Do we want the same distribution of meetings for next year?

RJE: You'd like by the next meeting to have hosts assigned for Jan/Mar 2019?

DE: I would like to hear back by next meeting from prospective hosts.

DE: Maybe we should use an online poll?

MBS: Is this possible to coordinate the meetings with the conference organizers to be run in tandem?

DE: They haven't been socialized yet. I want to get some agreements from us about the dates.

PGR: Can I just say in terms of timing, from the University's Imperial College London perspective, it's very late. In terms of us hosting a conference or meeting. Normally, we want to book two years in advance; this schedule doesn't allow [us in] academia the normal two years to plan.

DH: What are the practical consequences of organising a TC39 meeting alongside a conference?

MBS: TC39 panel, socializing, is the committee interested in optimizing for that? (the community)

DE: JSKongress this year, for example, is very interested in having the TC39 panel, but it is happening at the same time as the meeting (in New York)

KM: It does sound like we are interested in doing this. We have the community meeting this Thursday, and this seems to be happening more and more. The Community feels like we do not interact and this seems important for the PR of the committee.

TST: The committee has grown quite a bit, would it be better to update the planning requirements to reflect this? And impact the hosting requirements to reflect that. It's certainly not ideal, as it is, so we should determine the requirements we should set (when making these schedules).

DE: What requirements are you thinking of?

SGO: The last meeting I hosted at Google, I expected 40-45 people, and we had 60-65. In terms of capacity at least, it was a big surprise.

RW: (remotely) I counted 17 delegates from Google & 9 from Apple (these numbers come from the attendee sign-in sheet).

TST: We need at least a rectangular room where people don't have to shout and have easy visual access to slides.

DE: One thing is finding a place with a good video conference setup, what we should do about that?

API: It might be a requirement to specify a system, and have a system brought in. It's becoming increasingly difficult when trying to set up a meeting to get rooms that are large enough to have a group as big. If a host needs to also have microphones etc. This further narrows the number of spaces we can use. Can we bring the mic and speaker setup with us?

KM: On the mic thing, it's good to not shuffling the mic around, it's a bit slow to pass it around.

DE: We have been talking about audio requirements for a year now, but that hasn't lead to anything yet.

KM: Have we specified the requirements?

DE: When planning 2018 meetings, we tried to be clear.

AK: You can say it stronger and stronger, but a lot of people seem to focus on the space.

YK: I just want to raise that, while it may seem like not a big deal for companies to increase the cost of travel, people talk about where the meetings are in mostly inclusive/positive terms. I just want to raise that as an issue for small companies, which have small travel budgets. I also understand that European companies have the issue in reverse.

DE: We actually have several delegates from smaller EU companies.

YK: We want small companies to participate, and basically everyone at a small company is having difficulty being able to budget for travel to these meetings. I don't have have a specific proposal, I doubt I will be able to pay for more European meetings.

DE: Hotel costs sometimes exceed the flight costs, and we don't take any costs into account yet.

WH: Flight time is a big factor for far away meetings.

KM: If you have issues with travelling, you shouldn't feel terribly pressured to attend all meetings.

DE: Since we're over the timebox, I propose to extend the timebox.

WH: I object because we have this kind of meta debate every few months and we're not actually discussing the schedule. If we're just going to continue the metadebate, I don't think we should extend the timebox. We should focus on the schedule, as this was intended to discuss.

DE: How do you propose to get in touch with committee members to get feedback?

WH: If we talk about the schedule, that is fine, but we have digressed.

JHD: My queue topic is related to that. Narrowing down which coast each meeting is going to be in. Dates are fine, but locations may be limiting.

??: I agree, lets do a straw man location.

DE: (discussion of locations) The locations we have for 2018. January in the Bay Area, March in Europe, May in US East Coast, July in Seattle, September in US East Coast. November in Bay Area again. How does that sound? If we want to adopt a template?

YK: Last years template was a better compromise.

KCL: I'd much prefer three East Coast. Personally, if I'd have to fly to America, it's much easier to fly to the East Coast.

WH: I don't like this trend, the center of mass is still on the West Coast.

DE: One thing we can do is to take a more formal poll with the delegates living in this places.

TST: Center of mass is partially this way because people don't want to travel.

KCL: Well, I think we don't have a bigger Asian or European contingent because we don't spend enough time in Asia or Europe. If we want to be more inclusive of our members in Asia and Europe, we need to have meetings they can attend.

KG: All of the browsers vendors are on the West Coast.

TST: The V8 team is in Munich.

YK: We should say that the browser vendors are on the West Coast, because they are based there.

KM: Should we also consider a more Asian meetings?

KCL: I would be happy to do that but we only have a meeting space for 30 people.

DE: One or more companies would be able to co-sponsor a large enough space.

KCL: I would be very happy.

??: Is the East Coast doable?

KCL: For me, definitely it's more doable.

WH: NYC is very expensive. So is Boston in September. At the last meeting there most remaining hotel rooms were about $500/night due to some other conference in town.

KZM: Boston and New York are not the only East Coast cities, for what it's worth.

DE: It would be great to have help with researching which dates conflict, what good times are etc.

BT: We should document how we arrive at these dates. We should talk to conference organizers, to learn best practices (? may have paraphrased). We could extrapolate out to 2021, for example with pretty good certainty about what those dates would be. That messaging would be very good for them. If we do an Asian meeting I don't know how valuable would it be for people. Who's willing to put up the money to host us. IIRC, it was pretty hard to find people to host us for those dates.

DE: Not really, in the end, we had 10 potential hosts from whom we had to choose 6.

BT: Ok, well then never mind. I don't know where everyone is getting their catering budgets, though...

DE: Only thing was that there seemed to be a shortage of East Coast hosts, but in the end it was fine.

BT: Ok never mind.

DT: I was just curious if we could have remote meetings or multi-site meetings? It means more media but less travel.

DE: We need to have good video call setups.

API: Its kind of short timing for us, we are hosting in May, but we have a big office here.

BFS: I know that GoDaddy has offered, but we're not on a coast...

DE: Some people want direct flights from the big cities. (out of time) Do we want to adopt this template?

MLS: I don't want to adopt an exact template, but I want one European, two East Coast (perhaps Atlanta) and three West Coast. Places like Atlanta have good connections which could make it less expensive, the problem is finding a host for such a location.

DE: Why would you not adopt this template?

MLS: Don't want to preclude a perspective host for a particular meeting date whose company doesn't fit the template.

DE: This can be a first draft and it's subject to change, can we have a two minutes extensions?

#### Conclusion/Resolution

- Revisit on Thursday


## 10.i.c Getting last item of Array for stage 2

(Keith Cirkel)

- [proposal](https://github.com/keithamus/proposal-array-last)

KCL: **presenting** I proposed this in January. Rationale is that we need to use math to get the last item from an array. This seems trivial, but it's an interesting source of bugs, because you can end up doing an access of `-1` index in the array solution is a new prototype method, but this was dropped in favor of a prototype getter/setter combo. The problem was that the method proposals has WebCompat issues with libraries like Prototype.js and Sugar.js. Bikeshedding ensued. I proposed `end`; I think it's a good English word, but my opinion is not representative of the community's and they've asked for `lastItem`

YK: What were the arguments against "end"?

KCL: It was not a particularly intuitive name. Current proposal is "lastItem" and "lastIndex". I'm asking for stage-2.

WH: What is the proposal? Getters and setters?

KCL: LastItem is a getter/setter pair. lastIndex is a getter. (Examples in slides: `['a', 'b', 'c'].lastItem === 'c'` and `['a', 'b', 'c'].lastIndex === 2`)

WH: What does the `lastItem` setter do when the array is empty? Does it change the length?

KCL: Yes, it grows the array.

MM: And if the array is nonempty?

KCL: Then it sets the last element without growing the array.

MM: Is it important that there's a setter here? Is it important that it's an accessor? One of the issues discussed yesterday in the Formal Languages symposium, is the correctness of code. It depends on the existence of unexpected accessors. By making this an accessor, you are creating a side effect that wasn't anticipated. So it needs to be a method that can be overridden.

KCL: To rephrase what you're saying, it needs to be an accessor

MM: It needs to not be an accessor.

KCL: It's not an accessor, sorry.

YK: It sounds like you, (MM), are making a broad claim.

MM: The broad claim is that with regards to existing prototypes we should not add accessors to existing prototypes.

YK: Does that include web prototypes?

MM: I'm talking about stuff in TC39's jurisdiction, ie Array.prototype.

YK: The reason I had this question is for IDL

MM: if its creating accessors for anything where the audience is used to there being a flood of accessors then thats a different precedent.

??: But this a precedent.

MM: This is not a precedent in JS.

KCL: But does this mean that you are objecting?

MM: I'm am objecting on these grounds. I am not objecting to the proposal but im not saying yet anything about that.

WH: To clarify, are you (MM) proposing that `lastItem` and `lastIndex` should be methods?

MM: Yes, they should both be methods.

TST: Can people use the queue?

KM: (Addressing MM) most web standard, properties are all accessors, they are everywhere, we already added accessor for TypeArray for length.

MM: Part of the sensitivity here is that Array.prototype is very old. And there is lots and lots of old code that use arrays. This will take old code that was correct and disrupt it in a way that adding a method would not disrupt.

YK: I think someone needs to present these constraints to the committee so that we all understand them.

KCL: Do you have concrete examples?

MM: I do not, I missed that this was an own accessor so that is different.

BFS: Keith do you have any objections to this being an own accessor?

KCL: Length is an accessor, and was there for a long time.

KG: Length is not an accessor,  (audible gasps heard in the room It has magic behavior, but it is a property).

DH: (to MM) I'm trying to understand the reason for your objection. What is the actual hazard you are talking about? In particular, you are saying that you care about this.

MM: ... (missed this section) it is writing a specification ... (anyone catch this?)

DH: I think I buy that there is an interesting question here. I am not sure if this is how people do or should think about JS code. I think that as a methodology is too intricate, I don't think people will have contracts about which things are accessors and superclasses.

MM: The level of specification are not claiming that ???, I'm not suggesting that.

DH: I'm not saying that you're saying that. I just think we need formal rules about this.

KM: I dont really see how the own accessor helps anything. you still have the same problem. And if it's an on lastName operator extends the length of the array because it's an accessor and my analysis is wrong, then that is undesirable.

MM: You're correct.

KM: I mean, I'm still not totally convinced if we should design all of our API, i'm not going to say that because of the queue.

JRL: Withdrawn webcompat point. sugar.js is what had the issue, not Mootools.

SYG: Could I have some use cases for setting the last item? It doesn't seem compelling to me to set the last item at all... I mean with a setter—why not just have a method to get the last item?

KCL: I don't really have any. Domenic raised this as an issue in January.

YK: The question that I asked is "is it important that there is a setter?". Ruby, where we are deriving this from, has a "last" method, but there is no setter. I would prefer to just have a getter. The setter is a bug form, it has so many edge cases—basically more work than the bug itself.

YK: Here is my question for you -- were there any use cases for last = ?

KCL: It's more a surprise when you have a property with a getter that there is not a setter. The symmetry is expected. I'm probably wrong, but I can't think of a strong precedent for getters without setters.

YK: I think that's pretty normal.

SYG: Second question, since setter doesn't seem that needed I would prefer that we have a method.

KCL: The issue when we had it as a method, it could involve passing arguments that could be used as a setter or getting last n items. Lots of bike-shedding happened with this. I don't care about getting the last n items. that seems like a recipe for bugs.

SYG: Then it comes down to how strong is this argument. If we have an method that takes the last n items, I would be more interested in that.

KCL: I think it was Dominic who raised the issue, that it should be a getter/setter combo, last meetings.

KCL: Any hard objections to advancing to stage two?

WH: I don't have a hard objection, but I'm not sensing any consensus from the discussion we've just had. I would prefer this stays at stage 1 until we reach an agreement on what form this feature should take.

RJE: Is there any objections to extend the time?

KCL: I don't think we will come to a resolution in the next 5 minutes. So, if there are definitely takeaways that we can discuss on an individual basis.

YK: Let me try to summarize. There are strong doubts about the getter/setter pair. There are fewer doubts about the method, even if the method isn't ??.

RJE: Let's just go through the queue.

AK: I think the name "lastItem" as a method, by itself makes a lot of sense (without any arguments).

TST: I think lastIndex doesn't have strong motivations. It's not particularly sane.

API: Just an observation, it seems the spec is loosey-goosey about whether to use a "item" vs. "element". The phrase arrayItem doesn't appear anywhere in the spec.

KCL: I'm less concerned about spec jargon, I'm more concerned with making the method name intuitive for users.

SGO: I just wanted to mention that the setter is maybe not motivated as much as the getter. Also I share the intention that lastindex doesn't seem that well motivated either. I personally like "peek", but perhaps revisit your list of names.

KCL: Ok

#### Conclusion/Resolution

- Not advancing
- Needs motivating use cases for setter and lastIndex
- Maybe just a method to get last?


## 10.i.d Debugger operands for stage 1

(Bradley Farias)

- [proposal](https://github.com/bmeck/proposal-debugger-operands)

BFS: We have a `debugger` statement in JS, but we don't have a operand for this. I don't expect it to make any progress anytime soon, but I want to get stage-1, so I'm proposing that we're adding an optional operand for the debugger statement. Should we wish to split this up, I am happy to do so. Proposal is to add an operand to the debugger. Right now in DevTools, you can have a groping of breakpoints with an event going on, whenever clicks a button, loads a network resource, etc. We don't have a way to serialize that to source text, or provide that to users. If we allow an operand, we can give it something like a grouping ... an alternative to that could be something like here where you actually use a label on your debugging statement. So I'd like to .. our grouping of debugger statements. For conditional similar things, we have in devtools ???

WH: I don't understand your previous statement. What are you proposing in the labeled `debugger` statement example?

BFS: This is not part of the proposal, but an alternate solution.... (Opens up Developer Tools). I'd like to introduce something where a user could serialize in their own stack.

WH: This is an extralingual feature. ECMAScript does not spec what IDEs do. There are already well-defined semantics for nesting a breakpoint statement inside a label statement.

BFS: This is _all_ fluff.

WH: The spec doesn't say what the dev tools should do. If an IDE wants to label a break point with its label, that's its prerogative to do so.

BFS: That's fine, except we do ... Another idea for things we can do, right now you can do some sort of operand for your debugger statement, The final thing, there's userland devTools being built, there's React tools, and there's not really a way to integrate with the language or even with the builtin devtools, but I'd like to  find a way to do that. That said, I don't necessarily have any ties to any of the solutions. Do people object to any of the use cases?

WH: A set of use cases is not a proposal. What is the actual proposal here?

BHS: I'm proposing adding an operand to the debugger statement and the use cases. I am not tied to the solution, but do people object to any of the use cases?

DE: What are you passing in the debugger statement? Is this left to the implementer, or is there some sort of external standard for what they accept?

BFS: Some sort of protocol for this things, could be by named methods or by symbols. I'm somewhat neutral to that, but I'd like to talk to the DevTools teams, etc.

DE: Even if the specification is outside of JS, it seems useful to agree on something somewhere.

BFS: I agree.

YK: What I'm not sure about is diverging the capabilities of debugger between IDEs and the browser(???). You can make the debugger very powerful and make things that you couldn't express in a IDE.

BFS: Couldn't the debugger just inject the breakpoint statement?

YK: I would be interested in getting some browser devtools people discussion this.

RJE: Keith?

KM: I guess this would make it super easy to tell if the debugger is attached?

BFS: You can already do that. I don't have a strong feeling about whether the operand is evaluated or not. I don't see a strong case for the evaluation(???).

DH: I think we are circling around by talking devtools and IDEs, is that JS debugger statement is a bit of a unique feature in a programming language, it's also appearing making a claim about ??? model and something that I'd love to see is that we have a clear picture. Questions like: what do we envision for this statement? Why does JavaScript have this thing and why is it useful? And what the vision for the design is? I'm just saying, I don't have have any precedents, if someone were to ask these questions, I wouldn't have a clear answer for them.

BFS: I'm a little bit concern that people are pushing on me that ???

??: (In blue sweatshirt towards projector) If someone says this isn't useful because I don't use it, I think there's a lot of precedence for justifying features for others even if you don't use them yourself.

YSV: I work on Mozilla devtools, regarding these questions about how the debugger is used, you can talk to me later about use cases.

SYG: I like the proposal to making the debugger more powerful. I want to argue against making the debugger re-entrant. I think this might add a lot of implementation complexity. When the debugger pauses the code, to execute more code there are certain powers that are needed.

BFS: ???

SYG: The actual concern is the implementation complexity. This is just a general claim, we don't want to make it super powerful.

BFS: Sounds good.

RJE: The queue is empty and we've used up more time. You're asking for Stage-1, right?

BFS: Yes.

BT: Clearly, we should investigate more use cases.

DE: I would say for stage-2 requirements, I would like to see more implementors, and seeing what's the protocol would look like.

YSV: I'm also interested in working on that.

DE: I don't think TC39 should just make a standard and send it to the devtools implementors; we should work cooperatively with them.

#### Conclusion/Resolution

- Stage 1 acceptance
- Stage 2 requirements:
  - Get more devtools/debugger stakeholders involved
  - Draft out a protocol for what the objects should mean (even if it's not within TC39)

## 10.i.e Logical Assignment Operators for Stage 1

(Justin Ridgewell)

- [proposal](https://github.com/jridgewell/proposal-logical-assignment)
- [slides](https://docs.google.com/presentation/d/1OVIUGQZK03vKa2vRqkgmqolDQ3zH3GILMrfsDIe3PnY)

JRL: I started off with a very simple proposal. In a nutshell, I'm proposing `||=` and `&&=`. I'm not proposing `??=` in this proposal. Convenient when you're doing deep object assignments. It's simple, people can understand it, with the exception of short-circuiting. I'm asking for stage 1.

WH: I made an identical proposal about 18 years ago here in TC39 and I'd be happy if it finally got in.

KG: I think stage 1 is great, but I'm strongly opposed to the short-circuiting your propose. That can happen later. Must be equivalent to `A = A || B`, it should trigger a set.

WH: But it would evaluate A only once, right?

KG: Yes. Just sugar with like some special.

JHD: Just like `+=`.

RJE: Till?

TL: Whoever the one that's managing the queue could be less aggressive?

BT: ???

TL: To counter what KG said, this operator also exists in ActionScript, where it has short-circuiting behavior, that turns out to be a footgun for people. Nobody expencted setter to be called by this.

KG: That's good context.

YK: I think for once, I might actually want to object to Stage-1. Ruby has only two falsy values: null and false. I get tripped up in JS with zero and empty strings. I don't think that falsy semantics in JS is bad???

JRL: It sounds like you want null coalescing. So with null coalescing, we'd also get null coalescing assignment operators. Any inconsistencies (getting only null coalescing assignemnt), I strongly object. If we have any inconsistency I'm super against.

DH: I don't have to accept a feature because you object to a particular use case.

YK: I really like the syntax in Ruby.

DH: ???

YK: I'm not making any claims here and I'm not really against it going to stage 1, but I don't think this is a good feature and I will likely object to it in the future.

RJE: Dan?

DE: Rob raised a concern about this.

RPR: This shortcut behavior in JavaScript, the short circuiting behavior in javascript, is a bit odd. It's easy to get wrong with falsy values.

JRL: You're saying that ||= should not make shortcut semantics?

JRL: Specifically with short-circuiting semantics? Or are you objecting to the ||= and &&=, only wanting ??=.

DT: In Ruby, I can use ||= and it works because the value is initially undefined, but here if I do ||= I will smash it, because of the expanded falsey. There's a "bug farm."

YK: And it's common to initialize something to 0 or empty string.

DT: So other than a consistency argument, is there an argument for why ||= it seems like it's a trap for them to use this in the obvious way.

JRL: My main use case is to use it as the assignment operator, and for not repeating myself when doing deep assignments.

DT: You don't agree that it could be added afterwards?

WH: If we're going to have `??=`, we need to have `||=` and `&&=` as well.

JRL: We could add ??= to this proposal, and wait to introduce all of them.

WH: I would strongly object to that.

JRL: No, not null coalescing de-??? but null coalescing assignment.

DT: Null coalescing solves that.

JRL: The for-loop case is something that AMP uses right now.

RJE: We have Leo on the queue in the call,

JRL: Not sure if we ever use this for integers, in most examples here we're using Booleans.

RJE: Can you hear us Leo?

BT: Ah, we don't have speakers.

LEO: I object to the short-circuiting, I do not see a use case that is not solved by default params. It adds more to the language complexity vs solve problems.

JRL: Default params only solves if you are in the lexical scope, we're not solving the 'don't repeat yourself' part.

DE: This is not necessarily true.

LEO: Loop is a very specific use case, I don't really have a concern to "fix" it, it adds complexity that clouds clarity for the language.

BT: Why aren't we having this discussion when audio works?

DH: It's just confusing because ??? I just want to understand.

(10 minute break)
(audio issues are not fixed yet, delaying till later)


## 10.i.f Object.fromEntries for Stage 1

(Jordan Harband & Kevin Gibbons)

- [proposal](https://github.com/bathos/object-from-entries )
- [slides](https://docs.google.com/presentation/d/1o0XpxQmERelo0u-tyibSeHLhy-YyCNCBwHGIDwuXUww/ )


KG: Only asking for Stage 1. Note that this was written by a community member, https://github.com/bathos. General idea is the rough opposite of the `Object.entries` and its opposite, `Object.fromEntries` We already have a fully compliant polyfill. Any body has question about this or strong feelings?

#### Conclusion/Resolution

- Stage 1 acceptance


MM: Do new constructors inherit from the Object constructor, other class would inherent from entries.

JHS: They do.

KG: It's a static method on Object prototype.

MM: I'm not talking about Object prototype, but about Object constructor.


## 10.i.g Update on Array.prototype.flatten web incompatibility

(Kevin Gibbons)

- [proposal](https://github.com/tc39/proposal-flatMap/pull/56 )

KG: _OKAY_. This blew up on Twitter, so this is mainly there for an update for people that aren't looking at Twitter too much. It turns out that `Array.prototype.flatten` is not Web Compatible because of MooTools. It is the exact same problem as `.contains`. It's an non-enumerable property, it's Mootools using the old assignment operator, and making them enumerable. then they use `for in` which only copies enumerable properties to their custom object. When they iterate over Array prototype they will not see .flatten at all. But because we have specified a non-enumerable property implementation, it ends up not being copied. It is reasonable to use flatten on website, we know this because Firefox shipped this in nightly, and one of the top 100 websites in Germany weather site broke. Suggest screw Mootools? I doubt, it will break millions of people every day. Other options include "smoosh," "flat," "flatten," Flat or flatten. There are also (horrible webcompat) hacks that we can do: define a getter/setter pair that would return the real flatten from the getter and define an enumerable own property if you did an assignment on Array.prototype.flatten, it would work, but it would be a hack. Options are being explored, engines should probably not ship it yet.

DE: We got a lot of flack on this issue, what should we do to avoid this in the future? Should we be making jokes?

KG: I like jokes!

YSV: Some people are using their personal account on Twitter, and this is problematic, because it constrains committee members in their freedom of communication, as it's assumed to be an official source. We could alleviate this by using the official TC39 Twitter account.

MKA: I think more official communication would be good, but I doubt the fact we are a mini delegate, no matter what disclaimer you put in your Twitter profile it will to a certain extent affect what is unavoidable. People looked at the PR, it was difficult to tell if Smoosh was a joke or not. People that are not aware of the process, a lot of project where you have a PR it's ready to merge, but in TC39 we have a process and there no way that Smoosh would get through it. Just be mindful of that.

MBS: Sometimes, it's hits a precipice, where it goes out of control. Starts with whimsy, but at a certain point we've completely lost control, people got upset. For the two points that were just raised, with multiple stakeholders, it's really hard to coordinate that. We don't really have a mechanism to coordinate that. In Node when I gets to the point, making sure we have a shared message and we're making front on it. I don't know if there's something that the community is interested in it. The Node Code of Conduct Committee has offered to coordinate over the discourse to make sure it doesn't turn into a PR problem. The committee is not connected to the community, people think we're going to break the internet. When it hits this point, we just need to be in lock-step. I wanted to get the temperature of the room to see how we, as leaders of the JavaScript community, should respond to situations like these. It involves a bit more coordination.

DE: On the day this happened, Brian asked "Hey, Dan watch this issue," because it seemed a bit heated, we discussed it a bit because it did seem heated. I'd never frozen a GitHub thread before. We do have a moderation repository, we can refer to it at https://github.com/tc39/moderation. Place where we can have discussion to know what to do in that case. Many people posted (as well on Twitter) on the thread.

DE: Overall, what I regret was not closing the thread maybe eight hours earlier. If we can be more aware of these places, like the delegates channel, or the moderation repository. All delegates have access to this repository, so we can have internal discussion to document any moderation discussion, like when you need to delete a comment, you just open up an issue on this repository, you propose an action and you talk there. If more people want to get involved into this it would be great. What should we do with jokes? You said that you like jokes but it's maybe not the correct place to make them.

MKA: Even if we close discussion, on GitHub, it still happens on Twitter. I continued to get [harassed] for 2-3 days afterwards. There's clearly not a good understanding of how we operate.

BT: Thank you.

MKA: The Twitter thing is a total separate thing. We are delegates to this meeting. We have very different interests and proposals in TC39, so the things that we have proposed before like a central voice, it would be very hard to have us as a central voice on Twitter.

DE: What should be the result on the Twitter related thing?

MKA: We say that "TC39 will not do this", and people think that we're not doing things.

YK: I really like what Mariko said, and I think there are at least two subtleties that we missed, the first as that the original joke was submitted as a PR. So, even if you already know what we do, it's reasonable for people to assume that it's legitimate if it's submitted as a PR. The first comments made it clear that it was a joke, but if you didn't see that, you may not recognize that it was a joke. Second thing, I think we should be careful for using polls. I think in our mind, rather than ask ourselves if we should make jokes. The point that really changed my perspective on that was even if you understood the context on this was since it was a PR, you may not recognize that it was a joke.

KG: Not totally clear that Michael was joking.

YK: I think the Pull was problematic because we should have had a strawman that indicated that we don't think the name "flatten" would work, but because so much of the dialogue focused on the term "Smoosh" the issue got lost almost immediately.

JHD: Maybe we need better messaging. The way this was announced to the world was through Twitter. It would have been easy for me to tweet about Flickr breaking global. I think that web compat issue like this are best address softly, like raise an issue to discuss this at the next meeting. The fact that's a PR from the champion has more weight. None of us had written a comment or had a chance to prepare. A week or two later, making a joke PR would have been fine but the most important message was lost—let's be more careful in the future. Unfortunately, that message was drowned in the noise of the joke PR.

KCL: I'll backup your point a bit, because sometimes this reaction is healthy. Almost everyone in the community has an opinion about this. Kind of a bike-shedding problem, which triggered a dramatic response in the developer community.

JAD: It feels like we should have been much quicker to get an explainer out there so that all of the angry developers didn't have to search through all of the issues to find what the issue was.

BT: It made sense at the time to piggy-back on Keith's point. I want to point out that there are things all over the tweets and over the PR Githubs stuff, thousands of new developers now know that TC39 exists. New developers know better how the committee works—we don't decide things based on the PR but rather based on the meetings we're doing, from that perspective, I see that as a positive thing. I did get the opportunity to tell developers how TC39 works, and found those conversations productive. I'm not convinced that we need to avoid jokes, or do things that avoid noise in the community or get people mad. We shouldn't try to troll people, we can use those moments as teaching moments, and be successful.

KZM: We should not aim to repeat this circumstance, but we can make the most of it when it happens.

BT: It doesn't seem realistic to tell what delegates can say (paraphrasing). We should just let delegates be themselves, and if that means be jocular, they should do that!

YSV: I just want to make a note about having a unified voice, the community finds it quite difficult to find multiple TC39 members. I think the fact we have so little information available and unassociated with specific people [(delegates)] is something that contributes to community members getting anxious about something they think is real.

KZM: A reponse policy is reasonable. Its ok to let the heat die down a little. We can actually agree on what our operating policies are, we do understand that, and I think we can document that and have it ready linked. That doesn't stop people when they want to joke. I say this as a bit of a Twitter troll—I too link people to things that they could easily find on their own.

BT: The queue has a bug, refresh it.

RJE: Still three to go in the queue.

DE: What should be champion responsibilities?  We could focus on moderating our responses? Deferring to a champion, when a champion is also not interested in responding is a mix that doesn't exactly work.

KG: I don't want to speak for anyone else. I think managing social media is a very different work compared to doing good language design.

DE: What about writing explainers?

KG: The focus of the committee is about language design, and community moderation is a different skill than doing language design.I don't think that writing explainers for people outside the committee is a required part of what we do.

KCL: What about the community group responsible for the code of conduct?

API: If the response is "we found a web compat issue". Make sure that it's added to the next meeting.

API: It could have been a lot clearer that the the issue was a WebCompat issue.

KG: I promised to represent a community member's voice here.

KG: For people who weren't following the twitters, Brian submitted a poll in how we respond to this, one of which was "break the web". I want to ask the committee that we're still behind not breaking the web? 70% of respondents said they would choose to break the web, with multiple thousands of votes, no vendors would ship this. Breaking the web is, of course, a sliding scale. We do make some decisions that break specific things (like German weather sites).

TST: (and all other implementers) No implementer will ship this.

DH: A couple of quick points: don't break the web is, as you said, on a sliding scale but the bar is quite high. But I also want to talk about Twitter polls, because we've heard more and more about people talking about Twitter polls. Twitter is _designed_ to make people react in instantaneous ways. Especially a poll that's like "do you want this ridiculous thing?" Twitter is all about stimulus/response. We should be skeptical of using "data" from a quickly thrown out there Twitter poll—we get knee-jerk reactions, this does not necessarily indicate a scientific poll.

BT: To be clear I don't think anyone disagrees with that statement.

#### Conclusion/Resolution

- We will continue to discuss this topic on Thursday


## 10.i.h Update on WASM ES modules

(Lin Clark)

- [slides](https://linclark.github.io/wasm-es-modules/slides/2018-03-06/#/0)

LCK: This is a slide deck that I presented to the WebAssembly Community Group, So I just wanted to update TC39 on this because it will affect the ES modules spec. Today, there's an imperative API for declarative way for the inputs, This proposal adds the declarative API, and in particular the ESModule API. The point is making the WebAssembly Modules part of the ES modules graph. From an engine level perspective, what do ESModules do? (I will preface this with that this is review for most of the members of this committee) What do they do from the lexical environment perspective? From the engine point of view, they provide a lexical environment from the outer level of the modules. The boundaries are semipermeable. The importing module can access the module from an external scope. It's different from CJS and WebAssembly, which both copy values, instead we want to use live bindings. With ES Modules you can import and export things. How does this get loaded? Three phases: Construction, instantiation and evaluation. People think about ESModules as asynchronous, but the phases themselves are not necessarily async. In construction, we need to fetch and parse all the files into ??? Records. We start with an entry point for this graph, for example, the Script tag. We continue on fetching and parsing, as defined in the HTML Loader spec, and the  The loading and fetching is specified in the HTML loader spec, and the other is specified in the JS spec.

We don't expect to make major changes there. Some implementations such as SpiderMonkey and JSC will compile the code at this p  ... After construction we move into instantiation, the inputs needs to be wired up to the exports.This happens as a depth-first post order traversal, and as I mentioned before, these are live bindings, meaning the

(etherpad technical issues, all note takers were affected)

During the evaluation phase, we run the start function. ... so that's how we could add es modules in a pretty straightforward way. What are the problem spots for WebAssembly? One of the problem spots is live bindings, they enable cyclic dependencies. We want to be able to have cyclic dependencies between JS files and between JS and WASM files. For now, Live bindings will be tricky. By the time the WebAssembly instantiation reach the JS value, it's undefined. There is potential that we could have functions, memory tables, like how functions are initialized in JavaScript, but that's controversial and we'll have to wait and see. We have to talk more with the WebAssembly group, On the topic of cyclic-imports: we're going to need to work with you all to change the working the spec to allow it.
Those are examples of what we need to work on for ntive module support but ???. We're also going to need to support bundlers. For those of you who aren't familiar, bundlers are those who have implemented module support before the spec landed. They reduce the number of HTTP requests. Adding a little bit of run-time to handle that, but they want to emulate the module API, because those are the semantics that users expect. However, even if you're only importing functions, This means you have to sequentialize things. One way is too allow the ImportObject being promises.

Why do we want to start on this now? Bundlers are already adding support, as is Node, so we need to be in a position to give guidance on how modules should work, otherwise it will be done outside the scope of TC39.

Steps forward:
  - Created a repo
  - Potential early implementers lined up

JRE: I don't see anybody in the queue, any questions for Lin? No questions I think we're done. What's next?

DE: The JS spec prohibits cyclic dependencies between JS and non-JS modules. Are we OK relaxing this restriction, as Lin suggested?

MM: What do you mean the dependency is cyclic?

BFS: I think Allan wanted to add this? I don't think this was added for any other reason than CommonJS.

We should explore the space of trying to make cycles work.

DH: I think this is definitely open for discuss

LCK: Domenic and George raised this in PR #916, it's definitely going to need more work. Once we talk face to face at the next WebAssembly meeting, We will have a chance to clarify it and then I can present it for the next TC39 meeting.

#### Conclusion/Resolution

- Nothing Recorded

## 10.i.i Update on improved TC39 documentation efforts

(Sam Goto, Yulia Startsev)

- [slides](https://docs.google.com/presentation/d/1C4mkRNI3WjcrASFD_MtGRQMLErN5tCW7rLlxyTmLHxc/edit?usp=sharing )
- [draft webpage](http://hag.codes/tc39-web-draft/ )
- [research document](https://docs.google.com/document/d/1yHa2V0owollcA-JHgXbTfELKW7c9fL1QitXgrfyNLWE/edit?usp=sharing )

YSV: We'll be showing the early results of a working group, currently Sam and I are taking two sides of the problem. And the problem we're trying to improve is the documentation and what's facing to the user. I started a research document and started to talk to a lot of people. So far there's been 700 respondents (growing by 80-90 people each day). Where do people get their information about TC39 = Twitter.

WH: Who did you survey?

YSV: Through Discourse, JS Weekly and Twitter and these are JS developers. I think that giving people an information source could be valuable for the community. You'll see there are just two Yes'es to engaging in the proposal process, because people indicate that they don't think the proposal process where go anywhere. There are people who would like to engage, but don't know how. Some don't know that the process is open to new ideas. Most of the documentation is about the proposal process and where the proposal goes and lives. Not so much how to make a proposal. By far the engagement that people would like to have is giving feedback, We can improve that we our documentation, because people don't really know how do that. A more technical role, less than necessarily proposing something, is writing specs and tests. The next answer was a bit longer—free-form text, which is difficult to summarize, but if you're interested you can go to X URL. If you're interested into what's going on, there's a document linked on the meetings notes. The thing of note is the demographics which helps us determine who we should be talking to. There's us, observers is the really big population, people who are new, the rage mob from Twitter, and organisations. The result of this work is to a draft website, information for peoples that are new. It gives people information on proposals and their current status. It's open for comments, that's it.

DH: This is amazing work, very well done.

YK: Strong confirm.

YSV: Are there any comments or suggestions on this half?

JRL: Babel tries to do this, we have a repo for people that tracks the proposals. Should this effort take over the maintenance?

YSV: For what stage?

JRL: At any stage in the process. It's at https://github.com/babel/proposals.

YSV: From the survey, this is one of the most frequently requested things we do as we communicate to the general public. If you look through the ??? chart people ask for exactly that. As a committee, everybody is over committed with work, not sure we can commit someone to doing that. How do we optimize so we don't spend too much time updating the website, but also make sure it has relevant information?

SGO: Can everybody hear me? As part as the same group, my part isn't as fancy as Yulia's. Helpful for myself, as I recently joined. Trying to collect some of the information I wish I had when I joined. First one is a getting started guide, a bit more prescriptive, telling a little bit more about the TC39 delegates, the IRC or the reflector. This is in terrible shape right now, and I will share it when I'm not entirely embarrassed. The reflector, the IRC channel, the language we use between ourselves. Coming to the meetings, the queue, and so on. The other thoughts that was useful, is having a enumeration of what we're discussion during the meetings. General things that people bring up in these discussions. Syntax, examples, the cost of growing a language, complexity budget (more that I couldn't hear), does a proposal stand on its own weight (something Mark brings up). The complexity budget, things like the frameworks, Implementation considerations, role of transpilers. Trying to collect, enumerate and describe them. I'm going to try to do my best with Brian, Jordan and Dan. We'll share something to you asap for collaborations.

YSV: I have just one more thing, as part of the work that I was doing to figure out he developer facing issue, I also want to look into the committee-facing issues. Making sure there's good communication between new committee members and those with more experience. I would like to interview as many members here, anybody that's interested, like if you are new.

SGO: If you want to help, please reach out, we'll happy to have this conversation.

(Applause)

YK: You pointed out that a lot of people are interested, do you have any thoughts on what we can do to help people who want to province feedback?

YSV: There are few directions we could go.This is a question that needs more time, people want to help and I think people come with good intentions, but I think people get into bike-shedding conversations, because they're the easiest ones, which can be difficult to comprehend. Making sure that they know what's the discussion has been ???, making sure that people understand the constraints. Theres a contraint that excludes that possibility. I think having explainer docs - maybe a technical solution explaining things already ruled out. This is the most intuitive way of doing this, but it's also the most difficult way.

DH: A couple quick thoughts on something I know isn't final. You mentioned es-discuss before, but I wouldn't recommend you going on es-discuss, I don't know if we want to get into an argument about es-discuss, because if we're sending people someplace that won't have a good outcome...

The other thing is regarding the list of design considerations. This could appear like a glossary for weird jargon, I think it's helpful to list them as something more like ... These aren't something that are always in consensus, or something that are commonly used, but we should explain that they are terms that appear (not part of the Zen of JS that you must abide by) and we should help newcomers understand what they mean. (paraphrasing)

SGO: That would certainly be the intention. These are more like design patterns or considerations.

DE: Just wanted to precise about the documentation project, if you want to join the call, just let me know and I'll add you to the conversation.

WH: Where are the other documents?

SGO: The document is not in a really good state, and we could probably polish it a bit more so it's more appropriate to be circulated with a wider audience.

#### Conclusion/Resolution

- Nothing Recorded


## 10.i.j Await in parameter defaults for non-arrow async functions

(Daniel Ehrenberg, Pedram Emrouznejad)

- [issue](https://github.com/tc39/ecma262/issues/917 )
- [PR](https://github.com/tc39/ecma262/pull/1136 )

DE: My colleagues noticed that `await` is not permitted in a default param, you might've expected that you can do this (see slides). If you're using this for some sort of dependencies injection. The restriction here historically is from generators where you can't do yields. An example of the dependency injection case, is taking a module as a parameter, and using `import()` as the default. I'm not entirely sure prohibiting await expressions in parameter defaults was intentional. Unfortunately, in this PR, we couldn't implement `await` in all cases. Grammar-wise, in async arrow functions, you'd have to look too far ahead to be able to parse it. The proposal here is just to enable `await` in all async function declaration parameters—function declarations as well as methods. Thanks to Pedram for rewriting Test262 tests as well as spec text. The current PR doesn't include async generators because the PR started before async generators landed. The specification changes is sort of a small refactoring of where function declarations vs instantiation happens, but its a very small change in the specification. Are we ok to allowing await in async function declaration but not allowing in async arrow functions?

MM: What's the reason for not allowing them in async arrow functions?

DE: Async arrow functions don't have. You don't know whether to parse the `async(await / 3)` as a function or an regular expression when going left to right).

BT: You could have it figure it out, but it would require more speculative parsing, I guess.

DE: We've been trying to not require speculation or rewinding. I think we should relax the grammar specification when it makes sense; on the other hand Jordan has raised a concern about this omission.

MM: I have a clarification question, as you're going through text here, I saw an await and the parameter itself out of the default (e.g., `async function(await x) { ... }`), that's not part of this proposal?

DE: No, that's not part of this proposal. Any use of await in binding context, it doesn't extend that at all, you really ??? have await in this case.

BN: Is this proposal compatible with the standard transpiler strategy of desugaring default parameters to undefined parameter initialization in the body of the function, and then treating the initializers as ordinary `await` expressions?

DE: async operations also have to be desugared. I'm not a transpiler author, for those who do, what are your thoughts? the question was would having await in ? cause issues for transpiler authors?

SSA: I don't think so.

JRL: The only implementation difficulty I see is if we allow yield here

DE: We cannot allow yield here. The semantics of the generator is that it evaluates the arguments, and then waits for a next call to continue. You need to call the extra `next`, and there no way you can pause here. Presumably transpilers are already aware of the differences between these two. Could you elaborate on what transpilers do?

JRL: Without unwrapping all of this to a switch statement, we can't implement all of this. If you yield something we're going to wait for the Promise and the other step is to unwrap it into a switch statement, but why can we do that with yield?

DE: First you desuggars await and then you dessugars the default param.

JRL: Two different transforms. One is using the Regenerator transformation (which transpiles generator functions down to an ~ES3 switch statement) and the other transpiles await expressions to wrapped yield expressions.

YK: I'm a little skeptical of awaits in the function case but not in the arrow case.

DE: Why?

YK: I guess the refactoring hazard is the TC39 case against it. With arrow functions I have to know that it captures `this`, and this introduces another thing that I have to know. I've read a lot of async/await, and I don't really get this problem.

DE: We don't have arrow generators, there are some differences between arrows and non-arrows.

BFS: I'm with Yehuda, we have multiple function types already and even though we brought up Arrow generators, that would make it kind of trivia to know what the different function types do in different scenarios. I do agree that it's convenient for ???

JAD: If I have two arguments, that have to await on each other, is that going to happen in serial or parallel?

DE: In series.

JAD: is that encouraging bad practice?

DE: I don't see how it's encouraging bad practice, because you can do things more or less in parallel outside of parameters as well.

AK: A better practice might be to do Promise. All in the function body [which you can't do in parameter defaults].

DE: How is that different?

BFS: Well that's different, to Jake's question there's some differences that you can do in a parameter-less function...

WH: I agree we can't do this with arrow functions. Because of this I'm a bit hesitant in allowing this in non-arrow functions because you would have more weirdness to remember.

MM: I'm fine with that as well—it's a minor increase in utility but a major increase in difficulty.

DE: Maybe we can allow this in arrow functions?

WH: I'm sure we cannot allow this in arrow function because we could have something which lexes the wrong way in the cover grammar. Things like `(a = await/x) => 3/g`. It could even have a quote after the /, in which case you don't know whether to look for a closing quote. We must not go there.

DE: I see.

DE: Ok, so does the committee does have any next step, or last closing thoughts? There's some fairly compelling examples here that would explain why you would need this.

MM: I don't see the examples [the unseen person controlling the projector scrolls to examples]. I don't find that difference compelling.

AK: The more utility it has the more problematic the inconsistency becomes. I think this is in bad shape, because the fact that having this be one of the differences for arrow functions would be surprising.

DE: Thanks, if you want to participate  and give more feedback, please follow up on the issue. (Note: The issue was closed shortly after the meeting due to the above feedback.)

#### Conclusion/Resolution

- Nothing Recorded


## Agenda Organization

RJE: For the agenda tomorrow: We agree that we start with class related stuff, at 10 am: start with two 60 minute issues.Static public fields to stage 3.

After the lunch call from ??? for decorators and then we have the JavaScript classes 1.1 ecosystem discussion.

That will take us to 1-2 or even to 3 pm, and then we'll have two hours for non class related discussion followed by time for the 30 minute discussion.
