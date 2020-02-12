# December 3, 2019 Meeting Notes
-----

Brian Terlson (BT), Aki Rose (AKI), Daniel Rosenwasser (DRR), Shelley Vohr (SVR), Michael Saboff (MLS), Yulia Startsev (YSV), Ross Kirsling (RKG), Waldemar Horwat (WH), Chip Morningstar (CM), Rob Palmer (RPR), Shane Carr (SFC), Jordan Harband (JHD), Kevin Gibbons (KG), Gonzalo Cordero (GCO), Sebastian Markbage (SM), Tierney Cyren (TCN), Damien Engels (DES), Caio Lima (CLA), Alan Schmitt (AS), Tab Atkins (TAB), Shu-yu Guo (SYG), Justin Ridgewell (JRL), Till Schneidereit (TST), Michael Ficarra (MF), Pieter Ouwerkerk (POK), Zibi Braniecki (ZB), Hemanth HM (HHM), Dan Finlay (DJF), Valerie Young (VYG), Tantek Çelik (TEK)

Remote: István Sebestyén (IS), Bradley Farias (BFS), John Hax (JHX), Caridy Patiño (CP), Daniel Ehrenberg (DE), Erica Pramer (EPR), Mike Samuel (MSL), Richard Gibson (RGN), Ron Buckton (RBN), Mathias Bynens (MB), d2g, Ujjwal Sharma (USA), Sergey Rubanov (SRV), Jonathan Keslin (JKN)


## Approval of Minutes
Presenter: Brian Terlson (BT)

#### Conclusion

- Minutes from previous meeting in October 2019 is approved.
## Report from the ECMA Secretariat
Presenter: István Sebestyén (IS)
Slides: https://github.com/tc39/Reflector/files/3906307/tc39-2019-052.pdf

IS: (presents slides)

- New members: Alibaba, Sony, Huawei, MetaMask
- Downloads in 2019 - dominated by TC39 standards
  - 19,699 downloads ES Language Spec
  - 556,552 HTML accesses to ECMA-262
- Ecma website is being updated in early 2020, project in some weeks in delay.
- Does TC39 have a suggestion for an Ecma Fellow award for the December 2019 Ecma GA? This award is more for a life-time achievement.
- Does TC39 have a suggestion for the 2019 Ecma Recognition Award? This is more a service type award, like for a TC39 officer or Editor or for a special service for TC39.
- 2020 Management
  - Editors: TC can choose the approach with common sense, so special Ecma rules exists..
  - Chair: Rule 6.2.9 - term is 12 month, eligible for re-election. In practice, flexible.  Yulia is not available as chair in 2020.
  - Secretary: Rules 6.2.10..13. Provided by Ecma. This is more a support function to TC39 and the Management. TC39 Technical Note-taking is a separate issue
- GA meetings
  - ExeCom: 25-26 March 2020, 6-7 Oct 2020 in Geneva. TC39 Management invited.


## TC39 Editor Update
Presenter: Jordan Harband (JHD)
Slides: https://j.mp/262editor201912

JHD: (presents slides)

KG: (on the "meta changes" slide) Also mention the deploy preview.

JHD: Yeah, you can now see a rendered version of your changes in the PR.

JHD: (continues presenting slides)

JHD: Please let me or other editors know direct if you have concerns about #1062 ASI PR

MF: There are hundreds of people who have put emoji on the PR.

JHD: We will change the PR title before merging.

DE: Thanks for taking up this PR and working to merge it despite the controversy. I am not in favour of secrecy.  We should be able to withstand it.  It's inappropriate to discuss tech matter in private.

JHD: There's not really coordination; this is an opportunity for feedback on a PR that has been open for a long time.  While that's a nice ideal, my experience with globalThis and class fields, while we should be able to withstand it, we should not force committee members to withstand community outrage.  We should get a unified position first.

DE: I disagree. We shouldn't try to have a unified front in general.  In this case I have no problem landing - we have dealt with the concerns. Deciding on the name of globalThis in secret before going public is not something I want to repeat.

JHD: This is purely editorial so purview of editors.  We could have closed this earlier.  There's no obligation for feedback.  We want to avoid the emotional burden of committee disagreements provoking arguments.

DE: I'm totally in favor of the decision you've made to merge it.  I was only responding to part of the justification you made.
## ECMA-402 Report

Presenter: Valerie Young (VYG)

VYG: (presents slides)

VYG: We encourage involvement in the Message Format Working Group if you want it to progress.

SFC: Unicode Properties. Regular expressions let you test whether a character matches a particular property. The problem Steven is trying to solve is the other direction: given a character, get the value of the Unicode property.  Needed for parsing and more.  We're interested in gathering more input from committee - which direction to go.

## Test262 Updates
Presenter: Valerie Young (VYG)

VYG: (presents slides)

## Discussion of Secretary role (15m, chairs)
Presenter: Aki Braun (AKI)

AKI: During the meeting, we benefit from extensive notes the note takers take.  It's a struggle to find those willing and to keep up. I want to talk about codifying a role.  I have no slides or proposal.  I'm looking for people's experience codifying this role.  We're not looking for a single stenographer.  We do not have a budget to hire a stenographer. I'm interested in seeing if we can get someone who is interested in organizing the notes.  We had that for some time, but now we have to describe what we need more clearly.  Instead of relying on someone donating free time for free.  I don't see a lot of people jumping to take on this role. I plan to come back to this tomorrow or Thursday.  New people tend to be good note takers.  Talk to me about it!

TAB: We used to have this problem in CSS WG.  Same people did it all the time. We fixed it in a few ways. (1) pay a contractor, like $10K per year. But if the note taker can't show up, (2) take names at the beginning of the meeting.  People sign up for slots.  It doesn't have to be a strict thing.

SFC: I think there's two problems.  The notes steward and the note taker.  Steward is needed after the meeting, filling in links, remediations.  Takers do the work in the meeting.

(Note: IS: The observation of SFC is correct. The issue is a “Note Taking issue” and less a Secretary role issue. That is defined in Ecma Rules 6.2.10-13))

AKI: Steward could also manage live coverage in the meeting.

TAB: Agreed. In CSSWG our contractor is the Steward.

EPR: I don't volunteer because I cannot keep up. One time when there were 6 or 7 note-takers, we could pick up where someone fell behind.  Then it was easier and more effective to note-take.

AKI: Start-of-meeting scheduling might encourage more people.

RPR: When there's lots of people note-taking, it's kinda fun!

SFC: +1

AKI: Sync with me to help design this role!

## Formal nominations for Chair, Editor, and Secretary
Presenter: Aki Braun (AKI)

### Editor

AKI: We will finalize and maybe vote in February meeting.  Do we have formal nominations for editor?  Is the editor group as it is currently functioning right now intending to continue operating?

JHD: Yes.  There's been a call for editors on the Reflector for some time.  My expectation is that everyone who is currently coming to the editor calls is who will continue in 2020.  There are four of us.  My hope is that the four of us will continue.

DE: Is the call open to members who are not in the call?

JHD: The call has been open for a year and a half.  So far everyone who joins is an editor.  We have it listed on the TC39 events calendar.

DE: We're confirming the editors in the next meeting, right?

AKI: Yes - we will do the formal vote.

__note: I was incorrect about this, as we revisited later in the week. I think I got processes for chairs & editors mixed up in my head—AKI__

#### Conclusion

Proposed Editors: JHD, SYG, MF, KG

Formal voting in February.

“Postal” (email) ballot will be sent out by the Ecma secretariat
### Chair

AKI: For Chair - we will say goodbye to Yulia.

YSV: Quick note. Stepping down as chair, but will stay to walk through new people.

AKI: Rob Palmer has volunteered. Brian and I intend to stay on.  On the reflector, you can see a lot of tasks the Chairs are responsible for.  We can find tasks for other people interested in management.

MBS: I'd be interested in this, but I wouldn't want to commit to something I can't always be available for.  Something I'd like to do, I would love to meet all the candidates to discuss time commitments.  We should figure out what everyone is comfortable committing to.

RKG: People have asked if I can help facilitate.  Not sure I want to commit but am interested to help facilitate.  I assumed that would be separate from the chair group.

YSV: We had chairs vs. facilitators, where chairs were more committed and facilitators had specific tasks. Task-based splitting of the roles worked well.  Things not split by task got dropped. We need a smaller group that can be contacted.  Let's talk at lunch.

AKI: Let's plan to discuss this at lunch. What went well this year, etc.

#### Conclusion

- Will discuss with candidates at lunch

### Secretary

AKI: We should come back to the committee with something a bit more concrete.

## Normative: Make super() throw after evaluating args
Presenter: Bradley Farias (BFS)

PR link: https://github.com/tc39/ecma262/pull/1775

BFS: (presents PR)

BFS: If you use new and don't use it against the class it will eval params before super() would be called.  If you make a class and it extends something, it will cause problems. We agreed a while back to change this.  This PR makes it so we reorder the operations.  3 lines of code.  That's all.

BT: Can you discuss the motivations?

BFS: The original motivation was consistency on when arguments are evaluated.  If you have something that looks like a function call, like super does, the arguments are called in (some specific order). That was not the case for super() but was for everything else.
It would simplify some of Babel's transforms.

JRL: Babel does not do anything special here.  Just like any function call. So we actual follow the proposed PR to avoid being fancy.

SYG: Do implementations have to change here?

BFS: I have not checked what implementations actually do. SpiderMonkey needs to change. JSC currently follows the proposed change.

SYG: The feedback here is lacking a practical use case, if this is for spec consistency.  If this is extends… oh, I see.  Can I get back to you in 15 mins?

BFS: The question is, is the argument of `super` checked before or after we check if `super` is constructible?

SYG: OK, I see.  Sounds good to me.  No need to wait 15 minutes.

DE: This change seems good. Agree with Bradley and Kevin.  Are we looking for consensus to land this PR?  I would like to see Test262 tests and 1-2 implementations.  If this is already web reality, that's fine, but in general I'd like to see those things for normative PRs.

BFS: There's deadlock between, implementations don't want to implement the PR until we land the PR.

JHD: Tests are already a requirement for normative PRs, and case-by-case, implementations and/or web compat data are as well. I understand there is an implementation that does this?

KG: Only Safari.

BFS: And Babel, if that matters.

SFC: Basically we're looking for approval for Stage 3 for a PR.  There isn't a formal process for that, but we should be able to record in the notes that the committee approves the PR pending the other normal requirements like Test262 and implementations.

BFS: Do we have consensus we will merge it if nothing looks odd?

*silence*

SYG: Implementations are free to implement - it will not change without major input.  PR will be accepted contingent on tests existing without the need to come back to plenary.  Does that understanding sound correct for what "consensus" means for a normative PR?

(seems yes)

### Conclusion

Effectively this is "Stage 3". Ready to merge contingent on tests.




## Normative: Fix extending null

Bradley Farias

- PR link: https://github.com/tc39/ecma262/pull/1321


BFS: Not trying to land this PR. Just trying to hash out what it would take to land _a_ PR. Do we feel calling super() when extending null value is worthwhile fix?

???: It would be helpful if there was an example of that code.

BFS: Sure (opens gist)
```js
class X extends null {
constructor(){
    super(
console.log(1)
);
}
}
```
If super evaluating null, noop and then continue eval? If so, then this is inconsistent behavior if we don’t throw an error.

MMR: I think I missed the motivation for it being something other than an error. An error seems like the best outcome.

BFS:
```js
class Y {
}
Object.setPrototypeOf(Y.prototype, null);

const obj = { _proto_: null };
const obj2 = Object.create(null);
```

BFS: Some people dont want to let people use setPrototypeOf. Do people have strong feelings that super() must only do a construct check even if it is null which would cause an error? There is no code in the wild that extending null works for use case.

(silence)

BFS: Back on the PR then. Does this all seem reasonable that we try to move forward with this PR? Not in this meeting, but probably next meeting. I will look harder to see if anyone is doing this as an error check.

KGN: This PR covers more than just extending null. Can you clean it up to be more specific?
My concrete concern here is that the value of `this` is accessible prior to calling super and you can call super multiple times.

SYG: Feedback on the content of the PR: the presence of the heritage expression is a syntactic parse-time property.
This PR proposes to change that to a runtime property which would have ramifications for implementations that currently split the implementation of…?
I can’t speak to what kind of ramifications that would have ,but without being convinced to whether this is a common pattern to extend null to that use case, it’s unknown whether this is actually desirable.

BFS: We do have some historical notes, including a proposal by AK to try to fix extend null. I think anything we can come up with is fine, but it seems like we don’t have any real consensus on what we’re trying to fix. I think that’s the problem? It would be convenient if we could make a pattern, like classes, available. Mixing and matching private fields and null prototypes is kind of ugly. Maybe in the future that won’t be the case. If we can come up with concrete requirements on what a fix are, I think we could come up with some solution. We’d have to address the concern regarding super’s semantics, in order to move forward.

SYG: Are you asking if I’m OK with any form of the PR that would have to include a run-time property?

BFS: Yes.

SYG: I think the answer is “no.”

BFS: It seems like we have a potential problem here just with this point. We must have a runtime property to fix extending null, if we are unsure of or we don’t want it to ever be a runtime detection, we should kind of lean towards documenting that we don’t intend to fix extending null.

SYG: I’m saying I don’t think we should add the runtime property for this use-case. I’m not saying I don’t suggest fixing extending null. I’m asking the plenary whether we think this use-case is important enough to add the runtime property.

BFS: We have demonstrated the use-case, so I’m not entirely sure what you want to demonstrate sufficient need. Right now you’re asking, where would this be used, except for the examples you’ve already shown.

SYG: I’m also asking the room to demonstrate the need to solve this.

BT: It has been brought up for years.

KG: It’s something I think we should solve, yes. If we were able to find a solution that satisfies our concerns, it would be worthwhile.

WH: My position is the same as SYG’s: it seems undesirable to make this a run-time property, but I could be convinced otherwise.

BT: It seems people are uncomfortable with this approach.

BFS: If anyone’s uncomfortable, can you please document what it is what makes you uncomfortable? At least make sure it’s in the notes.

BT: It sounds like turning static semantics into runtime semantics is the main concern here.

SYG: The concern is that the static semantics are being changed to runtime semantics. What ramifications that has is sort of an unanswerable question.

BT: Sounds like if SYG’s happy then WH’s happy. And also me, and DE, and KM. We have consensus and I guess SYG will be the decider.

### Conclusion/Resolution

- Address the concern that the static semantics are being changed to runtime semantics such that SYG is satisfied, which will then trigger WH, BT, DE, and KM’s approval and thus consensus.


## Normative: make async iterators next/return/throw not pass undefined when value is absent

PR link: https://github.com/tc39/ecma262/pull/1776

Jordan Harband

JHD: (Points to PR with example) The next iterator gets no arguments in `for..of`, however in `for await..of`, it does. This was an explicit decision by the champion made in the depths of a GitHub issue on the proposal repo, but as far as I could tell, never brought to this committee. The entirety of this change pivots on whether this value was passed or not. It’s a simple change, and should be simple for implementers. I find it highly unlikely that people were relying on this behavior, but it is of course possible. There are two questions which I would like to seek consensus on:

So, should this be consistent (please object if not)? No objections. Is this something we should change? No objections. Is this something implementers would be willing to change?

YSV: I can get you confirmation at the end of the day that we will be willing to implement this assuming it’s webcompat.

### Conclusion/Resolution

- Consensus reached to address this assuming webcompat and YSV’s confirmation of Mozilla’s willingness to implement a fix (expected by EOD on 12/3) (YSV confirmed)

## Normative: Eliminate extra environment for eval in parameter initializers redux

Slides: https://docs.google.com/presentation/d/13QR4YDAVQX9xm1MoDlQp0nRXjrrKvSGm3I-QHqOgpyE/edit#slide=id.p

Shu-yu Guo (SYG)

SYG: (Presents slides)

KG: Clarifying question: where does this new scope for evaluated parameters sit relative to the function name scope?

SYG: My intuition is that the function name scope should be the outermost scope—more outer than anything seen here. It would be its own scope that encloses the scope for eval vars.

KG: That would be my preferred semantics as well.

MS (MLS?): What if you didn’t declare the variable, the variable would still be in the outer scope?

SYG: Correct.

JRL: What if you have an eval in two parameters? Does each param get its own eval scope?

SYG: Each parameter shares the same eval scope.

### Conclusions/resolutions
- Consensus reached to change this

## Normative: TypedArray on prototypes web reality
- [issue](https://bugs.chromium.org/p/v8/issues/detail?id=9982)
- [Slides](https://docs.google.com/presentation/d/1Cg7XDFmq2_Aa7h1ZNdgrmT_UCIm0w02P9Z7Krht46Kw/edit#slide=id.p)

Shu-yu Guo (SYG)

SYG: (Presents slides).

WH: The proposal converts the string to a number and back to a string. If you set property "-0", will this turn it into property "0"?

SYG: For integer keys they do not set it on the numeric prototype

CM: does this mean that the NASA code that you cited as evidence of non-web compatibility would think it’s using a typed array but it’s actually not?

SYG: Web reality is that it is not on the typed array.

KG: Does the spec normalize values? If I write a string with extra digits, what happens?

WH: Those should fail the _CanonicalNumericIndexString_ check, so they should be treated like nonnumeric properties.

KM: To WH, in JSC, at least, "-0.0" binds on the receiver. What was the case you mentioned earlier?

WH: My question was actually about -0, if you convert it to a string you get just "0".

SYG: (Continues presenting slides).

### Conclusion/Resolution

Consensus to change `set` but not `get`



## Normative: make EnumerableOwnPropertyNames ordered
Kevin Gibbons

PR: https://github.com/tc39/ecma262/pull/1793

### Conclusions/Resolutions
- Consensus reached

## async-of grammar ambiguity
Waldemar Horwat (WH)

[slides](https://docs.google.com/presentation/d/1POaK3AQxbdeDIq5M1RVjH1YIHe3fSxOCPPALTHIaLyo/edit#slide=id.g635b95875a_0_0)

WH: (Presents slides) This is a specific instance of a more general problem with contextual keywords interacting with one another in weird ways. We got lucky that this one is solvable, but the next one might not be if it causes an ambiguity where in one branch a `/` is treated as a division symbol and in another branch as the beginning of a regexp.

WH: How should we resolve this issue and other similar examples? We can solve this one with two token look ahead preventing `async of`, but it is brittle and liable to break if we make modifications to the expression grammar. We would need to define what two-token look ahead means in the spec. It is discussed but not defined.

DRR: When we talk about defining how two-token look aheads works, what do we need to do?

WH: The lexical grammar has multiple goal symbols. Next token look ahead is specified in the spec according to the current state of the syntactic grammar. We don’t have a lexical goal symbol defined for two token look aheads.

WH: I will propose a definition of two token look ahead. I’d like to try to disallow `for of` loops that begin with `async` (leading to one token lookahead), but it might break something.

YSV: We could do this with a single-token lookahead.

### Conclusion/Resolution

We can solve this problem by disallowing for of loops that begin with `async`, but we need a solution for two-token lookahead in the future.
## JSExplain demo

Presenter: Alan Schmitt (AS)

- [code](https://gitlab.inria.fr/star-explain/jsexplain)
- [demo](http://jsexplain.gforge.inria.fr/index.html)

AS: The motivation is to have a simpler way to read the spec. You can give it a program and step through it. Naive interpreter in OCaml compiles to javascript and a pseudo code language which we hope is more friendly to read. Every function in the javascript/pseudo code has the esid, and that is how you can follow along in the specification. (demos demo)

MM: Each line of OCaml corresponds to a line of spec text and to a line of javascript and javascript pseudo code?

AS: Yes
MM: How do you interrupt the JavaScript program to inspect it.

AS: We don’t interrupt it, we run it to the end and we generate a trace of its execution, which we can then inspect.

YSV: Is this ready to be posted online?

AS: We need a web dev to make the website prettier. For simple things this works well. But we are only up to ES2016. “Let” and “const” are a bit difficult. We need to write the ocaml code for the new spec. We can open it to a wider audience. Right now the audience is really this committee, not javascript developers are large.

YSV: Would we like this to be public on the website, committee?

MF: I don’t think it should be recommended. We don’t want to confuse new to javascript developers with this whole new syntax. We can make it public but I have reservations about confusing people

MF: How do you know your interpreter matches the spec?

AS: We can not be sure. We are line-by-line close to the spec, and we run test262.

MF: Some parts of the spec are vague. Do you have a list of things we could do editorially to better match the spec to the implementation?

AS: As a side effect, we have to address issues like what completion records can hold. Also mathematical values and javascript numbers are different. We might need type information in the spec. Sometimes it’s not clear. We have opened PRs before to make things clearer.

KM: When you compile your engine to JS, you have the completion record, so why not use an async function, which would just give you the value, and with an abrupt completion, you could handle it with a catch? A question mark is equivalent to an await.

AS: the subset of JS that we use is super tiny.  we don't need prototypes.  A core of JS is functions and arrays, simple numeric access.  So, we're trying to keep it as minimal as possible.  To deal with CAML modules, we use the with construct, which is not very nice. Implementing this on JS is easy - no type conversion because everything is typed. Using an async function and the exception mechanisms would have much complexity to this core language. It’s simpler to check return values and calling the relevant continuation.

WH: The website is down.  How do I access it?

AS: It is blocked by Salesforce internet. You need tor.

API: No, Germany/France is down.  Traceroute shows.

WH: What is the format of the source code?

AS: The trace navigator is in JavaScript, as well as display of anything happening in the trace. The generation of the trace is automatic.  We have a tool that takes the semantics of any programming language.

WH: What format of semantics are they written in?

AS: You type ML. A tiny subset of ML. You match records and tuples.  This is compiled automatically to ML.  ML is not widely known.  You could use Reason.

CM: Is the interpreter derived from the spec an entirely manual project, or is it automated?

AS: A long time ago we wrote a formal specification in Coq, from which we extracted OCaml code.  From this we refine our code manually.  Some people are able to extract Scala code from the spec - 90% of the spec.  However, the way they do it is not typed, in the sense that they don't know what getValue is going to return.  Doing it manually has added value.

CM: Would it improve the spec?

AS: Markup is already close to a formal model.  We need some added to work to directly generate them. Once you know ML you can write it easily.

SFC: Since the JSness of this is abstracted, I wonder whether you think it's feasible to have a different syntax, say Python, with JS semantics. Is it possible to go from the spec and then instead of outputting JS, outputting another language?

AS: We need first class functions. If you have them, it's easy to generate that.  I don't know why it would be useful but it can be done.

MM: A while back an earlier form of this project could go from formal semantics to ECMAscriptese - used in the stylised spec.  If you can do that, closing the gap, can you imagine a future in which we take the mechanized semantics and treat it as normative, or treat the two specs as normative and consider it a bug when they are not equivalent.

AS: It's not difficult.  There was stronger motivation before as the spec was not written in emarkup.  Maybe it would be better to have a way to add things to the ECMA code to have all the info you need.  JSExplain needs code that can actually run, which is problematic for implementation dependent specs. Unfortunately, the amount of impl-dependent stuff is going up not down. We need to have a story there.  e.g. we give you an algorithm but you don't have to do that. WebAssembly has two semantics, a formal one (in text) and a reference implementation and formal logic implementation.

Having any kind of reference implementation will break.

KM: The normative one is the text based for WebAssembly, if there's a conflict.  The prose wins.  the ref impl and formal logic are "inferior".

AS: If you want any feature you must provide the implementation.

KM: The impl is required to go to Stage 4 but champions are not expected to implement it.  Staging is similar to TC39.

MM: Much of the benefit that should follow from a mechanized formal specification is that we can prove theorems.  If the formal spec is too low level and the thing to specify has too many odd corners, you’ve just written an interpreter and it's no better than a hand written interpreter.
Have you succeeded at using your formal semantics to prove theorems?
For example, do the operational restrictions on proxy handlers, enforce that a misbehaving handler cannot cause the proxy to violate the object invariants?

AS: No. The way we initially wrote our formal specification in Coq, we would run out of memory if we tried to prove things. We've been working on a new way to write semantics. We have a format to write semantics that is close to this.  Not ML.  Has choice/sequence/recursion. The hope is that we can now try to prove things. Proving this kind of properties is difficult in an unrestricted setting. Javascript is messy. Capturing these notions is quite hard.

## Topic Policy on published code/polyfills in proposal repos

Presenter: Jordan Harband (JHD)

JHD: A while back, there were concerns about endorsing a reference implementation Should the spec or test262 be the arbiter? We decided the spec.  There were discussions about official polyfills. General feeling, not codified, is that TC39 should not be in the business of publishing these. We should not be providing implementations. That was a norm - it was not documented. As a polyfill author, I don't want an unfair advantage because I am involved in tc39. It's been working fine, but 2-3 times in the last year proposals have included a polyfill. Something you could use in your code, published packages, etc.  There has been discussion about where they should live. In the proposal repo? My stance is that no, do not check implementations/polyfills/shims  in the tc39 github org. But it seemed worth, based on recent discussions, to ask, do we want to say these are things TC39 can attach our name to?

DE: This is an interesting topic. I think when we have the language standard, we are not trying to endorse a reference implementation. But in the development of a proposal, it's really useful to have code associated with the proposal, and it's useful at some points in development to have the code in the same repo as the spec text.  You can get PRs that change both the code and the spec.  This has been useful in SIMD.JS - there in 2015. For Temporal, for example, I think it is useful that the polyfill and the spec are in the same repo.  Moving them out of the proposal repo had issues - people file spec issues in the wrong place. I think it works a lot better now that they are in the same repo.  Temporal is still undergoing iteration, and I think this model is working well so let's keep going with it.

JHD: SIMD.js and temporal are not publishing to NPM to be used. They are examples that are mostly unusable except as proof of concept. As far as Temporal, I think that's fine.  I have a polyfill.js in a lot of my proposal repos.  I think the difference is about publishing, which is a signal that people can use it in a production app. We're not talking about encouraging packages that don't modify the global.  We should encourage people to build their tools in a way that allows for future iteration that is future-web compatible. Published under a person's name is fine - but publishing under TC39 name gives it officialness.

DE: I don’t think we should use tc39 organization for this. I do think it's useful to publish modules. The SIMD.js is a special case because it's not very useful. I think the bigger thing is that we make clear that Stage 2 things are not stable yet, and that people depend on these repos with the expectation that they could change.
The issue about code in test262 having a lower value than spec text, I agree.
Champions edit spec text and bring it to committee.  You don't need to land it beforehand.

SYG: What is being asked here -- that we come up with a policy about what to do with published poly fills?

JHD: My preference is that consumable code (polyfills) not live under the TC39 github org.

MM: What are you proposing be done with test262?

JHD: Nothing. For proposals, like the Realms shim, the source of truth for the source code should not exist in the TC39 org.

MM: What if we develop 262 tests that we run against the shim? Where do they go?

JHD: I would expect those would be iterated on in a draft PR on the test262 repo itself.

MM: So there is an issue. What we have been doing at Agoric, is that the explainer (not a normative document) links to a repository with a shim, and the shim links back. The test262 tests we put with the shim because we need to maintain them together, so as the proposal and tests and shim changes you can run the tests against the shims.

JHD: That seems sensible to me, but I don't think the Test262 are relevant or conflict with that.  If you believe they should be accompanying the Test262 code, then yeah, but I don't have an opinion on where the Test262 code lives.

WH: What is the issue here? We don’t want a specific poly fill to become the de-facto spec? Or we want to avoid a race towards making polyfills mandatory in new proposals?

JHD: I think both of those things should be avoided, but we should also avoid privileging members with easy access to polyfill infrastructure or unfairly assuming that any particular person's polyfills are the most official.

WH: How different are polyfills from each other?

JHD: there is small details on the way they are decided/their interface, details that the committee should not be wasting time on.

WH: I agree we should not be concerned with practicalities of using specific utilities or coding style. Other than those, how different would polyfills written by different folks on the committee be? For example, wouldn’t there be a canonical way to implement, say, proposed new Array methods?

JHD: For example, you could write flatMap in 6 different ways, and you shouldn't prefer one over the other in polyfills.

WH: We usually need to choose one for the spec itself.

JHD: The spec needs to choose one, but we want to allow implementations to implement the spec in different ways. We don't want to require polyfills implement the exact specification.

HHM:  I wanted to bring up an example, Set.prototype.toJSON.
I would propose @tc39/... - Two advantages: we can make it spec compliant and linked to the tests.  The author has more context than anyone else.

JHD: That's the exact level of officialness I want to avoid. (1) it creates a lot of discussion about semver. I have a strict interpretation. (2) should we support symbols?  These are decisions that as an independent polyfill author I can make.  As TC39, I don't think we should take a position on those issues.
I think it's fine for a polyfill author to ask the champions and make their own decision.  Our advice as champions is not binding.  It's different if TC39 is dictating how we write packages.  We want to encourage competition - we want it in polyfills and web browsers.

CM: I resonate with JHD's notion that having an officially blessed polyfill is a bad thing, but we all agree that having a canonical implementation can help clarify the proposal.
It feels reductio ad absurdum to say you can include code, so long as it's not too good.

JHD: The way I author polyfills for my own proposals is using lots of special tooling.  I think authors should be allowed to do that, but not required to. I think that value judgements about quality should not come into it.

CM: Agreed - there should not be an official blessed polyfill.

JHD: If it's that good, my contention is that it will rise on its own.  It won't need an official bump.

CM: I am concerned people will be discouraged working out how something might work simply to avoid being a blessed implementation

PDL: I will give background with my experience with Temporal. The polyfill in the repo was started there and was moved out on Jordan's urging to another repo. What happened is that we were asking that, because it's a fairly large API change, where we wanted to get feedback on the ergonomics, etc.  For that, we did publish an initial version: we're doing this to gather feedback.  What happened is that the polyfill mutated on that feedback faster than the spec text did. A lot of the feedback were made on the polyfill and now we are trying to maintain parallel versions.  Now we're trying to maintain two parallel versions, on the polyfill and the spec.  People were looking at the spec and wondering what was going on.  So we brought them back together because it was hurting forwards progress.  Admittedly, when I write a polyfill, I try to do it as well as possible.  With a lot of squinting, maybe you could use it in production, but from my perspective, this thing will keep mutating until we have the surface we want. The moment we say this is actually the API, which is when this committee says this is Stage 3, that is the moment the polyfill gets archived and moved out of the repo, because the polyfill has done its job at that point.  I agree that there should be no officially blessed polyfill.  But, I disagree with the separation for spec and polyfill because it is destructive to the process. Having them issue-share and share pull requests - that is a really good way to move forwards. I disagree with you on the practicality of where the polyfill lives, but I agree on the spirit - Temporal polyfill will get archived when the proposal is stabilised.

JHD: That's an important caveat.  When a proposal hits Stage 4, ideally all of those repos are archived.  It would be problematic if there were a polyfill that still lives in a proposal repo.  If you remove the polyfill at Stage 3, it addresses that concern. Where it got contentious with Temporal when we discussed.

(timebox expires)

### Conclusion

Consider BT proposal: 1) TC39 does not maintain official polyfills. 2) TC39 proposals may include and publish polyfills which are not production ready (semver 0.x, readme disclaimer), but can be forked into a production ready thing if people want.

Continue discussion offline.
## RegExp match indices performance feedback
Presenter: Shu-yu Guo (SYG)

[slides](https://docs.google.com/presentation/d/1pn-oW1tzh33WWCzQaaYwFCtn5GUjn5F-YhQVl_8rCTw/edit?usp=sharing)

SYG: (presents slides) We are not asking for a spec change. Just sharing what we learned.

SYG: Are we ok with general regressions for REs for match indices?

MM: With regard to your specific question about regressions and what we do with this.  It seems like the right choice is to make *compile* pay. Making compile more expensive seems good.  The more important question is, the other place I remember the spec naively creating a terrible allocation burden was IterationResult.  The semantics of iterators was, every time you call next(), it gives you a new fresh IterationResult object with “value” and “done” properties.  If it actually did that allocation every time,  I would expect that to be very bad.  Has optimizing out that allocation worked out in practice?

SYG: I don't know right now.

MM: The reason I ask is that it's the same structure of argument.

WH: In the presentation you gave approaches which don't always work, but do work like 90% of the time.  There were multiple: Caching the results does work most of the time.  You just need enough information to unwind it if it doesn’t.  The re-execution approach also works most of the time: if the regex is cheap, it doesn't matter, and if it is expensive, then save the indices the first time you run it since it won’t cost you much relative to the execution of the regex. While I am concerned about performance, I don't see this as being a big problem, when there are solutions that address almost all the cases.  It is always possible to write pathological cases.

WH: Reading between the lines, are you wanting to go back to the options bag API?

SYG: This was not a presentation about "we don't want to introduce performance cliffs".  It was shaped by early stage performance assumptions that turned out to be incorrect.  If other delegates want change, I want to hear, but we V8 are not proposing this.

WH: I wouldn’t want to go back to the options bag API.

Dan???: It seemed that there was a moment when indicies did not come, so a simplicification was done. There was a decision to simplify the API by removing the options bag.

RBN: The main reason we moved away was subclassing.  Regexes pass through many base methods.  It makes threading through this options object nearly impossible. Even though it seems like options was simple, the implementation with compatible sub-classes made it much more complex.

BT: Recalling during the ES6 days when it often felt that everything was a performance regression in one way or another, it seemed almost hopeless that we would get back those gains.  And since then, by and large, we've mostly gotten there.  Do you think we could in a few years overcome the performance problem with regex indices?

SYG: I am not the primary implementor.  Joshua Litt was.

Josh: There could be a path but it is non-trivial. We have some ideas, but are they worth it for this feature?

DE: People who are optimizing implementations know better, but many optimisations were done to compensate.  I don't know it's true that there weren't still regressions.

BT: Some things regressed in ES6 but you only fell into them if you were off the happy path.  It wasn't across the board regressions. I was curious about gut feel for how intractable it is.

SYG: I think for this particular thing, and for regex as a whole, for any one proposal, you can, with enough engineering effort, figure something out.  But then you have to build on debt you made for previous features when you have a new feature.

SFC: Sometimes in Intl we discuss "shall we do this feature this way due to perf".  When we return objects we discuss properties vs getters. Should we prefer getters on prototypes or data properties?

SYG: My guess is they will be the same in steady-state.  If you spec functions with identity you have to allocate the thing.  It should never be the overriding concerns.  I think anything that has observable allocation could have performance allocations that aren't entirely clear to begin with.

RBN: This is spec not impl, during the process, V8 recommended moving away from an accessor to permit lazy allocation, to using the getter and letting the host lazilly fill this in, but it still looks to the runtime as though it had been specified initially. My question: one of the concerns was memory overhead. Is it feasible with an existing RegExp with perf sensitive paths, but in a cleaner environment and always stored the indices information, then lazily provide the strings when requested. So you only lazily calculate the slice of the string using the indices.  Would that address the regressions?

SYG: The feeling is that yes, that is the ideal implementation.  But that requires large rearchitecting of string representation and regexes.

RBN: But it sounds like that is a way to get back some of the performance problems?

SYG: Not in the near term, but in a clean room, for sure.

RBN: But I think this addresses BT's concern.

SYG: I think there is. But then this is one of the factors you weigh.  What is the short-term possibility of getting a high-performance feature?  How do we weigh how much feature work is worthwhile.  There's the mature, already-having fast code paths carved out, that as we expect more features, they require re-architecting, that's a tradeoff.  It's possible to have something here in the long-term.  I would have loved Apple to be here, so I will follow up with them.

SYG: Can live with this performance regression?

TST: What's the alternative?

SYG: We flip flop on the API.  I have not proposed this.

(silence)

### Conclusion

Seems like the committee consents with the performance regression noted in SYG's presentation.
