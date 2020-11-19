# November 28, 2018 Meeting Notes
-----
Mattijs Hoitink (MHK), Michael Saboff (MLS), Keith Miller (KM), Tadeu Zagallo (TZO), Natalie Silvanovich (NSH), Waldemar Horwat (WH), Daniel Ehrenberg (DE), Jean-Francois Paradis (JFP), Chip Morningstar (CM), Alan Schmitt (AS), Ross Kirsling (RKG), Jordan Harband (JHD), Brian Terlson (BT), Kevin Smith (KS), Eric Faust (EFT), Sathya Gunasekaran (SGN), Till Schneidereit (TST), Lin Clark (LCK), Godfrey Chan (GCN), Kevin Gibbons (KG), Pieter Ouwerkerk (POK), Randy Luecke (RLE), Devin Rousso (DRO), Reefath Rajali (RRI), Adam Klein (AK), Rex Jaeschke (RJE), Mark Miller (MM), Shaheer Shabbir (SSR), Mrelita Tiwari (MTI), Jonathan Dallas (JDS), Brendan Eich (BE), Emily Huynh (EHH), Michael Ficarra (MF), Ilias Tsangaris (IT), Thomas Levy (TLY), Augustus Yuan (AYN), Nathan Hammond (NHD), Sebastian Markbåge (SM), Justin Ridgewell (JRL), Shane Carr (SFC), Dustin Savery (DSY), Frank Yung-Fong Tang (FYT), Mariko Kosaka (MKA), Peter Hoddie (PHE), Patrick Soquet (PST), Felipe Balbontín (FBN), Dave Herman (DH), Shu-yu Guo (SYG), Yehuda Katz (YK), Yulia Startsev (YSV), Sebastian McKenzie (SMK), Aki Rose (AKI), Tab Atkins (TAB), Mathias Bynens (MB), Scott Myers (SMS)

Remote:
Ron Buckton (RBN), Bradley Farias (BFS), Robert Pamely (RPY), Leo Balter (LEO), István Sebestyén (IS), Richard Gibson (RGN), Guy Bedford (GB), Conrad Watts (CWS)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/11.md)

## Memory Model bug DRF-SC bug

(Shu-yu Guo)

- [issue](https://github.com/tc39/ecma262/issues/1354)


SYG: Want to recap that there is a memory model bug. The good news is the spec is wrong. Evaluation results in candidate executions: set of events. CAndidate executions are constrained by the memory model. If your program doesn't have any data races, it should be sequentially be consistent. Data race free programs are sequentially consistent (DRF-SC). The relations in the memory model are listed
Agent order
Synchronizes with
Happens before
Memory order
Reads from


SYG: Original bug was found in Web Assembly. Wasm is using MM for interop. CWS who is the author found is on the call. The wasm paper has fixed it in a similar way so he will talk.

SYG: DRF-SC counter example

```
Agent 1
[W1] Atomics.store(x, 0, 1);
[Wy] Atomics.store(y, 0, 1);

Agent 2
[W2] Atomics.store...
```

(See slide)

2,1 is allowed Program DRF but not SC.

SYG: There is no way to interleave the statements to produce 2 and 1. In this example it is clear we should print 2,2 or 1,1. This is loading an atomic store that is fenced by the atomic loading. Does anyone have differing intution?

SYG: Now to fix this, conrad has suggested the minimalistic fix which I want to point a counter example variant. If I were to replace atomics store with atomics.load, should 2,1 be allowed?

SYG: There might no interleaving that explains an output. We still make decisions about what can happen even if there are data races.

DE: Any compiler optimizations?

SYG: Not that we know of?

CWS: Compilers aren't going to do something like this. The wasm fix, allows 2,1 to be printed here. The wasm fix isn't as far as I know allowing compiler optimizations but.

JF: Better way to think about this example, why do you want users to write this code? You're writing to x and you have published the value. Agent 2 is saying y is looping through to see y. I don't think 2,1 should be allowed.

CM: How is there a data race here?

SYG: W1 and W2 are in a data race.

CWS: The strong fix there could be compiler optimizations but the weak fix does not.

SYG: I am convinced that ..

SYG: Not sure if there are any compiler optimizations that would produce 2,1 in the racy example (Counter Example 1 Variant).

WH: Common subexpression elimination would do it.

SYG: Just one of them?

WH: Here is one. A simple compiler optimization that might happen is a compiler might do common subexpression elimination on just R1:

Agent 2:
```
[W2] x[0] = 2;
[Ry] if (Atomics.load(y, 0) == 1) {
[R1]   print(x[0]);  // Compiler can replace this with just print(2);
[R2]   print(x[z]);  // z happens to be zero at runtime but compiler doesn't know that
    }
```

WH: Thus it would be problematic to disallow 2,1 in the racy example. We should allow it.

SYG: To be fair disallowing this would disallow optimizations.

CM: If it introduces incorrectness is that an optimization?

SYG: Currently in the memory model we allow this and we need to debate if this is actually allowed.

WH: If you cannot do common subexpression elimination, there is something wrong in the memory model.

DE: About intuition, the wasm memory model allows it. Unless we have a good reason for the memory models should coincide.

SYG: That's why conrad is on the call. I am pretty convinced that we should allow this despite the counter example.

DE: We should be as restrictive as possible before we allow.

SYG: So the other con to disallowing this is the.. The fix to disallowing this would change the atomics of these examples.

CWS: The strong fix is stronger than that -- it introduces a not complete a notion of total ordering. It does change the semantics... abstracting the str

SYG: I also don't know the strength of changing non-atomics changes for compiler writers. There is a lot of cons

CM: If these optimizations... if X was not shared, there would be no interference.

?? R1S4:\  If you're trying to have a low latency thing...

DE: If you want to communicate between Javascript and web assembly threads I think it's important we can optimize them.

DH: Couple quick points, first want to second Dan's point that diverging from sugar array buffer seems... if we find a difference between the two we should engage. If we have disagreements we shouldn't accept it blindly. There should be a high bar for forking behavior. Chip was mentioning a predictable behavior but it's not very practical in memory models. We are in a state where there is no straightforward semantics. There will be surprising behaviors unless you want you lose optimizations. We can't just go off the example and say that looks wrong -- we want the optimizations. I don't think looking at just these examples is sufficient.

CWS: My intuition is to allow the minimalistic fix... you are opening up to having weird architecture for optimizations.

CM: I think I have to fallback on "threads are evil".

SYG: If you do not use data races, you have more predictability and we are trying to preserve that guarantee.

CM: Bringing the naive programmer intuition.. If you're going to do subtle cross thread comms, you need a specialist. Normal people should never touch it. We should be explicit.

WH: Intuition here isn't that Ry is doing something strange. Instead, the combination of R1 and R2 is doing something funny. The mental model that is appropriate here is that racing x[0] = 1 and x[0] = 2 in different threads results in x[0] being in a quantum superposition of the values 1 and 2. Reading x[0] multiple times can sometimes return 1 and sometimes return 2.

DH: Because SAB is a data structure.. You can abstract around it. A javascript programmer can understand that. X[0] is never gonna be a scary thing as long as it's not operating on a shared array buffer (SAB)

TLY: Wanted to point well don't we use atomics for these full memory fences, other languages allow you to release the fence. Shouldn't we have that option?

SYG: In JavaScript there is no weaker ordering that... there is no sequentially consistent fences. A sequentially consistent fences are too slow in that if people depend on it, we can't back out of it. As the need arises we have room to grow the model but currently it's here or nothing.

SYG: I understand this an esoteric topic but I hope it was clear that we should allow 2,1 in the original example and disallow 2,1 in the counter example.

SYG: Counter example 2... on agent 1 we do an exchange (Atomics.xchg). We non atomically store 1 and then we atomically exchange it for 2. In this scenario 1 2 is allowed and program DRF but not SC. The weakest fix given by conrad would disallow this.

CWS: The thing about this is that these two examples are disallowed by 2 separate rules.

WH: I was looking at the fix. I saw the two new rules that were duals of each other. One of these addressed the original counterexample. I had been wondering what a real counterexample was that motivated the other new rule. Thank you for showing it!

SYG: The paper is not published but recommend people to read it once it is. CWS are you allowed to share the draft? With permission, I'll post to reflector.

CWS: No. Especially if you are a reviewer of PLDI.

SYG: People who want to email me, can read it unless you are a reviewer.

WH: In addition to the strong and weak solutions, there was an intermediate solution on GitHub, correct? What are CWS's thoughts about it?

CWS: Thoughts on intermediate... I strongly disapprove of the strong fix because of the problems it causes. Intermediate fix is unclear; its one advantage is that it the makes the memory model smaller, but that's not necessarily something we should be optimizing. I want to give a little proof that the intermediate the solution doesn't have issues.

WH: Are we convinced the weak solution will fix the problems?

CWS: Yes. There is a proof in the paper.

SYG: We don't understand the full ramifications of the intermediate solution.

WH: [Responding to CWS] Good. Then I agree we should go with the weak solution.

NHD: In addressing this we have 2 concerns: we have the compiler side in that it is optimized and performant. The other is making it so that mere mortals can accomplish writing safe code. Our current API doesn't enable that, which maybe means there needs to be a future consideration for Atomics.

SYG: I thought we agreed... mere mortals stops at data race free programs. If the bar we want to understand that programs with data races should be more intuitive that is a very different and hard problem.

NHD: We could guarantee total ordering using fences... that doesn't require it at the memory model layer, but could instead be accomplished at an API level.

SYG: That seems totally fine -- adding APIs to atomics that give you stronger guarantees.

#### Conclusion/Resolution

- Weak fix


## Hash Bang grammar

(Bradley Farias)

BFS: We altered the text lightly instead of having it being phrased. We moved it to be part the tokenization and lexical grammar. Basically at the start of module or script is that Hashbang Comment and other types of comments are discarded from the stream of the outputs. No tests but seeking Stage 3 for this. Any comments or concerns?

KG: Who were the reviewers?

BFS: I didn't actually... get reviewers... long time ago we talked about this and we wanted to push to stage3 ... Only people who looked at it was the last time at the meeting. WH gave a review and thumbs up?

WH: Unless you changed the proposal since I gave you the thumbs-up, you can count it as a positive formal review from me.

AK: Generally I would encourage champions to check off the process document boxes before coming to the committee asking for stage advancement.

BT: We can get it reviewed in 30 minutes?

RJE: Can we defer to later today?

KG: I can review by tomorrow morning.
BFS: Sounds good.

#### Conclusion/Resolution

- Deferred for review by KG and rediscuss tomorrow morning
- Follow up after lunch: No objections.
- Stage 3 acceptance


## Decorators Stage 2 update

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/12QtzhGvtA4bf7tznPzIeYH5aLEo40Kwfs3vpJxaSbHE/edit#slide=id.p)

DE: We realized decorators were still missing something and why it's important for v1... wanted to hear concerns for stage 3.

DE: New feature: Some people were mentioning a debate matches what we had at the time. We had arguments on both sides. No real new arguments. It's split among the community and it was split among the community. One thing we can do is make decorators make the choice of set vs defined. (@set)

DE: You might not want to use this when you are using a backing store i.e. in MobX.

DE: previous solution in decorators which didn't come up before in TC39 which is use a throwaway field, run the side-effect... I don't want to encourage this idiom. Unclear how JITs should reliably detect dead fields. This would encourage anti-patterns. This wasn't an issue in stage 0 because they were not about thinking the initializer.

DE: Instead, we could run a side effect outside of the decorator. Semantics decorators output can refrain from defining a field. We heard from the discussion of set and mobx that once the stage 2 was in babel, many people ran into this issue and proposed the mitigation and realized the flaws.

DE: Decoratator descriptor can have a `kind`: `"initializer"`. See semantics slide. Any thoughts on the initializer feature? PR in babel and wanted feedback from the committee. Thank you to everyone who participated in threads and reviews for this.

RBN: Mentioned in issue thread I have concerns that using the initializer in initializer description somewhat conflates it. It feels like we should have a different if you're not initializing a value.

DE: I misunderstood your review on the issue thread. What should the name be?

RBN: We discussed finishers?

DE: No these are different from finishers and we discussed that in the thread. Let's think about new names.

AK: So... say decorators went to stage 3 in July but then we realize something. Is there a reason we need this now vs later?

DE: It didn't pop up -- we had this a year ago as a proposal.

AK: If we think of something after, can we add to it?

DE: Yes, I hope in general we can get draft implementations and take that experimental feedback before going to stage 3. We decided not to add that to the process doc but I feel that's kind of the reason...

AK: Just because it isn't in a process document.

DE: Yes I want to do this and babel community stepped up and did it so want to help with that. We have stories for why we have certain mitigations. This one in particular we don't have data on the frequency but it seems we need this as a v1 feature to avoid anti-patterns. I want to be clear we should be open to follow up on proposals once decorators are out.

WH: My comment is very similar to RBN's. I too was confused by overloading the name "initializer", wondering how initializing a nonexistent property works.

DE: Breakout session. We can talk about names?

KG: How about effect?

DE: two different things...

DE: Stage 2 update we have a line a communication with W3C tag. Positive reviews from W3C and frameworks. We are also improving docs and ongoing work in the babel's implementation. Thank you to the community who have done great work here.

DE: Minor spec updates... for the decorator ordering... in the previous breakout session, the conclusion I heard was there was rough consensus for export before decorator. I would be happy to conclude this. Based on comments I wanted to give other people a chance to propose to the agenda. It would benefit programmers. Export before decorator ordering... would love to get consensus.

RBN: I had issue with the breakout session discussion because people on the call weren't able to participate. Don't feel like there's full consensus yet.

DE: Where do you want to go from here?

RBN: In most discussions and the community and comment threads, it's a 50/50 split on the in favor of decorators before export? Doesn't seem locked in.

DE: How long do we need?

RBN: One more meeting?

DE: Let's agree to try and conclude that in the January meeting.

RBN: I am in favor of doing it right vs pushing it out.

DE: Let's discuss online.

MF: In private conversations with other members where decorators have really allowed advancement I have heard concerns that even though decorators are very popular, the general fit in the language and how it might affect the design of the language. Want to give the opportunity that is how they feel. I am not a fan decorators but I don't think it's harmful to the language. Community members who are in support of it, it seems there are groups who have taken advantage of the usage of it.

DE: Doesn't really correspond with my discussion with framework authors. It seems most of the framework authors are saying classes don't work well without decorators. That seems to be a broad opinion but can't say much. Would love to hear more and maybe even proposals for stage 2 earlier? Given where we are, want to hear about this.

MF: Yeah it seems people were agreeing for it but want to give opportunity. Since this is going to stage 3, it should be discussed.

??: To Ron's point, based on my experience, it doesn't seem the committee is going to help the proposal champions. I want Ron to be on the same page.

RBN: Yes.

DH: I want to timebox and champion to prevent issues coming along but I agree we don't need to spend more time debating with the committee.

WH: I am on the other side of the issue. I agree we have spent way too much time on this already. On another subject, speaking about our process in general, I'm a bit concerned about the push for more time for breakout sessions given that their topics are not announced in advance and the right people might not be there.

DE: I don't want to say breakout sessions were conclusive which is why I'm not saying stage 3 right now. My interest is getting this feature stabilized to stage 3 and it would benefit to users. I want to provide another call for MF's point. Please raise all concerns for stage 3. If not now then  prior to the next meeting.

AK: I would like to have a conversation more... since the next meeting we'd talk about stage 3? Light agenda?

MF: When does the committee not want a feature?

AK: It's stage 2. Committee expects this to become part of the language.

MF: There could be a case where more people than not the feature should be included in the language but nobody is passionate about blocking consensus.

DE: I don't think that's the feeling about decorators right now. This is a strong feature and my feeling is that the committee has been persuaded for decorators but want to hear more.

CM: Wanted to add some thoughts, I share MF's sense that the bunch of complexity to the language and I have a bias and I wouldn't bother this normally but as a committee member I feel everyone has had a chance to weigh in on it, we should be going ahead with it.

EFT: As one of the resident grease monkeys about this I want to hear more from implementers about the complexity and optimizability of this.... Nothing?

SGN: Decorators are not going to do a lot of harm for the runtime performance but startup performance. I'm trying to understand because committee members care about startup performance but this killing that...

DE: What is the baseline for this? To be concrete the performance overhead is that decorates allow you observe this thunk before the JIT kicks in. The other overhead is you can't see what is a private method vs field and that becomes more complex to do.

SGN: Looking at the spec it looks like this will kill static analysis.

DE: In transpiled decorated classes, we don't have any static analysis. Do you count decorated classes as the baseline? Or code that uses classes as the baseline.

SGN: The baseline should be non decorated classes.

AK: I have these concerns especially since we're talking about frameworks... I am not sure this is more of a footgun compared to using a framework.

MLS: We have similar concerns in that static analysis will be difficult. We have to change the object model to account for decorators. I personally don't like it, users want it... startup cost i have concerns but not super huge.

EFT: My intuition is that when you codify this a first class language thing

DE: Because they are not able to use classes, they use an object literal. Decorators might be able to help with those and those aren't able to be static analyzed anyways.

Diego: We prefer these ergonomics of using decorators vs the current patterns. From a performance perspective, we have done our own tests with 10K-15K components, we have reached reasonable performance. For me the ergonomics outweigh the static analysis.

KS: It's clear people want to use it but you also have to ask if we had a similar conversation about JSX would we say the same thing? If Facebook was more assertive, would we have included JSX? I don't know the answer. More interested what other people think.

DE: I have arguments why decorators > JSX.

JRL: One option we have is to leave it for babel and typescript. This can just become a syntax reservation for compilers to work on. If you shipped a decorator to a browser, it would throw because there's no runtime meaning to the decorator.

DE: I originally proposed that and we wanted to promote the unification so that we had interoperable code.

Diego: Yeah we talked about everyone would implement their own thing and we would have lots of interoperability.

TST:  I don't see the value of startup costs if the feature is valuable enough that it will lead to dynamic code that will lead to performance benefit.

SGN: Is that really the baseline then? Comparing against dynamic frameworks? Okay then let's ship this.

DE: Please let me know more issue.

#### Conclusion/Resolution

- Decorator export issue conclude in January
- Naming issue of initializer conclude in January (maybe breakout?)


## Withdrawing Distinguishing Literal Strings

(Adam Klein)

- [proposal](https://github.com/mikewest/tc39-proposal-literals)

AK: I'm withdrawing a proposal I had a year ago. Trusted Types, which motivated it, has moved on to other ideas.

MM: What is WICG? Web Incubation Community Group

AK: There was some interest, but trusted types doesn't need it, so I'm not championing it anymore.

MM: I just mentioned that some of the purposes that serve that might be good purposes. Might be good to reintroduce that point.

DE: I share MM's interest. I'm presenting on it now.

#### Conclusion/Resolution

- Withdrawn


## Distinguishing templates: PR Phase 1, Spec Phase 2

(Daniel Ehrenberg)

- [PR](https://github.com/tc39/ecma262/pull/1350)


DE: I went to an annual conference where they talk about web standard proposals. Had the proposal of trusted types. History of what adam is talking and they heard tc39 would take a long time... that's disappointing. The direction they went in was instead of checking for literal strings, you had checks that would follow that policy that could sanitize strings of certain trusted types. I think what they were proposing with user configurable policies is complementary. Since the TPAC meeting, I think it would make sense to propose if we could do something here in tc39. I want make a way not for literal strings, checking if  a string is equal (what if one is literal and one isn't) but we don't need strings, templates is enough. Trusted types have a constructor so you have a trusted script source.

MM: What is that?

DE: Trusted types have a trusted script source where you can know it's from user code. You can make trusted templated script tag so people can check if something is a template literal. There is different levels to this -- embedder hooks, javascript API that can make this usable in developer code. Talking with Trusted type champions, they would be interested in having it in user land. It's nice for things to have a JavaScript API. I have 2 phases
Host hook
JavaScript API

DE: Is this a good approach? If useful for embedders, should we brand template objects to let embedders know they are template objects? Would we consider a javascript API for this? I split them in 2 separate phases because there are some concerns with integrity checks. If we want that, we don't want a monkey patch to spoof it. All functions are properties of objects but lots of things going down the pipeline i.e. proposal from apple to make built in modules or get originals web platform proposals. When we are familiar with more than one, we will know which direction to go.

WH: What are you trying to protect?

DE: We're making sure that new strings aren't manufactured through injection, but that they're actually represented by sourcetext in the JS. There was actually a tagged template with the source strings being in the sourcetext. Doesn't prove that the same tag is used but it does prove that there was some tag in literal source code. You're proving it was in the original source text vs HTTPS can prove it wasn't injected somehow.

WH: I don't understand what is being proposed here well enough to have a meaningful discussion about it. Maybe examples would help. What is allowed and not allowed?

DE: Trying to call trusted source string with a string it will throw an error. Perhaps something I can do is breakout... or make formal slides next time? Was there something that didn't make sense?

CM: I think explanations are farther ahead than where we are at.

JHD: Execution point?

DE: We are not proving that template object was literally in source code?

JHD: It sounds like you are trying to verify if a tag is from source code. Since it is frozen, we can guarantee that.

DE: There are further properties that would be nice but this matches the original request and isn't that bad.

KG: You mentioned JavaScript API which I think would be nice. API only useful if it's unforgeable... there are 3 things are not virtualizable -- Nan, undefined, infinity. Would the idea be introduce an unforgeable function?

DE: I like the import module. Regardless if we go with the Apple proposal to freeze modules, at least if we go... import map give you a place to virtualize built in modules.

KG: That seems reasonable. I thought this would end up a global.

DE: Yeah we discussed and we have raised concerns with virtualization. Import maps can give us a nice middle point.

BFS: I want to bring up a different design idea... concerns with global api when I think of something to be forged I think of typeof. Adding a new typeof is concerning... but it's the only thing proxies can't intercept. Has there been thought on the actual state of templates? Like how can we hang it off the object itself?

DE: I don't have any particular ideas what we can do in that area. We should chat if you have more ideas.

KG: Broader concern, which I don't think this should block stage 1 but: this is only useful in very restrictive CSP (content security policy) which restricts the use of eval and inline script tags, and scripts sourced from untrusted domains. Most sites using CSP get it very wrong. I am hesitant to add security features that are only a guarantee if some other thing is implemented correctly which most people do not implement correctly.

DE: Have you presented that to the trusted types group? We should do that.

KG: No we should though.

MM: Some of the motivations are good, but the particulars of this one are confused. I like the underlying motivation, though. The thing that needs to happen for clarity, it an articulation of a threat model. Chain of trust is the right concept.

DE: Okay so lack of documentation?

MM: Lack of documentation + general sense of this proposal is in the wrong direction.

DE I was hoping to defer to the trusted types proposal on that.

MM: I haven't looked into that proposal and I believe it does address they had something that addresses that proposal. I think there are a lot of corrupting assumptions.

DE: I am just trying to sift through.

MM: With trusted types, I'm not familiar with their requirements. Mike Samuel proposal about the threat model is something we should be concerned about.

DE: Perhaps we can talk offline because I don't understand the literalness of strings vs templates doesn't seem to be linked.

MM: The original threat model on eval mentioned something that might be a concern here. I agree we haven't documented the threat model.

JRL: Are you targeting tagged templates or normal template literals

DE: Tagged templates. Template literals are just strings

JRL: If we instead put this on the arguments object, we could capture all of these things as written in the program rather than just one use case for template literal. Whether it's an implicit from a tagged template, from a decorator, from a extensible literal, we can tell whether the caller was from source-text or from an unverified runtime call expression.

DE: That is an interesting idea, and we should think about that more. I think Justin from Polymer brought up this. This is a much more minimal idea to that—this is just tagging the template so embedders can read from it. KG mentioned but wanted to clarify this is a layering PR. They are not creating a concernable change but wanted to get broader feedback but doesn't truly need consensus. If we are just giving hooks to embedders.

MM: It is contentious.

DE: Want to pursue as a PR.

WH: This should go through the stage process.

MM: This gives hosts the ability to distinguish things that would otherwise be indistinguishable, thereby affecting the semantics of programs.

MF: I don't think this is an issue...

MM: I think we need to have a larger discussion. I don't want to encourage things that might break equivalency in embedders.

NHD: Talking about the comment Justin made, using arguments doesn't solve for template expressions.

JRL:It does solve the cases we are talking about if the trusted tag expression evaluates to a known class.. You'd have to bolt your own semantics to the known class. It just allows the tagged template function to know that I came from a tagged template source-text and not a call expression of the tagged template's function.

NHD: Okay, so, tangential.

RBN: Want to also touch about the arguments: in a way the template literals slot doesn't actually tell you it was passed to the actual template literal tag but it was just passed at some point. It sounds like it doesn't really solve the problem. What we really need is a mechanism that we have a trusted assumption call. This is also issue in decorators. We talked about possibilities of using a symbol that holds an access token so that when I call a decorator, so I can verify the call itself wasn't forged.

DE: I think this is interesting direction to look into to. I think this could be done as well as the arguments forging direction.

RBN: My concern is the slot is forgeable with or without eval. If I create a template literal and forge it then it will be a template literal.

DE: This isn't attempting to address that issue.

BFS: There's no API to construct a tagged template strings array.

NHD: In Handlebars we had a vulnerability which could in part be addressed by this. It has a construct called SafeString which was a POJO with a string property and a boolean stamp. If you had control over the JSON fed in, you could create an object that Handlebars would treat as a trusted string. Rather than stamping with a boolean property, we ended up replacing it with a function that returned true. This was a non-theoretical XSS vulnerability. This sort of stamp could be valuable to protect from this.

AK: I wanted to respond to Mark and Kevin... first off back up layering changes... we want to define well defined interactions rather than have a browser defining it on their own. If people are concerned about those changes, we shouldn't be doing that here because a layering change is a very small thing. One more thing, timelines... on average things take longer in tc39 than W3C, WICG, etc. It makes sense people get tired of waiting.

DE: We could provide useful input and I want to encourage two way interaction between other groups and TC39—want more input from web/node people in TC39 & visa versa. That's why I mentioned W3C tag review. I want people to be able to bring problems to TC39 and not avoid it.

KG: If we in this room don't think a feature someone else is trying to implement.. It's true they might go around us, I still don't want to make changes.

DE: I'm not trying to champion the trusted types proposal. The literalness check is important.

KG: I don't think this change is a good idea.

WH: I am uncomfortable with this being a PR — this is a feature to solve an external use case rather than an internal refactoring change so it should go through the stage process.

DE: How should it go through it?

WH: Stage 1: should we discuss this? Stage 2: Do we think something like this will be added to the spec? ... We also need to discuss questions such as if it satisfies the threat model.

NSH: Is this ever going to be used? This enables people to write secure code but it's even better if people don't have to think about this. Is this primarily for people who are using for security? Anyway we can enforce URL rather than opt in?

DE: Do the headers help?

NSH: only if people use them.

MM: There is good work on formalizing JavaScript and you show things are equivalent by reasoning about semantic state. By adding an internal slot, you break transparency through proxies. Membrane transparency is a requirement.

BFS: I think we are skipping over how these template object arrays are a little string? The host could technically do things like source code manipulation... Do people really feel strongly of having these really strange object arrays and somehow preserving where they are in sourcetext.

MM: Yes.

BFS: How is an internal field different from callsite potency?

MM: I don't understand.

BFS: You can store strange internal state through side channels, so you have persistent state on this special object which can't be reproduced in a proxy..

KG: Let's take it offline.

#### Conclusion/Resolution

- no consensus to merge the PR


(Lunch break)


## dateStyle/timeStyle for Stage 2

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-ECMA-402-datetime-style)

DE: These are internationalization features and I'm just helping propose to stage 2. DateTimeFormat is currently locale-dependent style. dateStyle and timeStyle give you a more fine grained control and let you special narrow/short/medium/full. You can specify date, time or both

```
new Intl.DateTimeFormat("en", { timeStyle: "", dateStyle: "" });
```

DE: Using data present in CLDR exposed through ICU

DE: Updates since previous version -- data schema made well-defined, paralleling CLDR. When completely implementation defined we would take in OS preferences but it's actually based on the locale so removed that. Concluded to not read/check other options if dateStyle/timestyle set. Finally the `hourCycle`... it doesn't make sense to do timeStyle and then add for hourCycle... doesn't make sense to combine those so we are considering to honor that feature. (Slides have links to proposals)

DE: The Proposal status originally by Zibi is in stage 1. It is in Firefox internal only. Stage 2? Stage 3 reviewers? By the way this has been discussed and reviewed by ECMA 402 sub group and we are recommending to move to stage 2. Thoughts?

MF: General question if I am a website and I want to format things i.e. this... i would want to use a user preferred format. Is that available?

DE: It is not clear how to expose OS preferences. We've talked about browser preferences. We defer this to the site to manage.

MF: Is that a good thing?

DE: We are working little by little. We talk about the user-agent could provide this navigator.locales array of intl locale objects and maybe those locales could provide preferences but that leads to questions... i.e. its not clear we should keep growing existing extension mechanisms. I don't think this is the body to make that decision and ECMA 402 is been helping more with this. There isn't a clear way to make date/timeStyle. Also operating systems differ in their schemas.

MF: I want to make sure whatever format we do accept would be possible to provide via user agent.

DE: If we make an API to provide more specific strings, we ideally want to be able to pass navigator.locales instead of language string.

DE: This proposal is already set to accept intl.locales but the question of what could those be is still open. Ideally we get explicit data flow of options. One important use case is server use i.e. node.js ICU and INTL. Node.js made an effort to make these things available. It doesn't make sense to use OS options and they need to pass in via client.

MF: I'm not suggesting it be implicit but it should allow more user preferences to be consumed.

DE: We're thinking about best way to do it, unclear on when we will have proposal.

MF: Do you know if there is work currently for that?

FYT: if there already a way for OS to give preference, it can set it. If OS has a setting then that is an issue.

DE: Something that is still an issue is __. That slide shouldn't have a dot.

MF: I want a flexibility API to allow UA to pass the locale.

DE: That is an open-ended feature request.

FYT: What does the UA provided mean?

MF: If a user has preferences for date/time style and those preferences are quite specific...

FYT: I think we can definitely work on a different proposal to allow more formats to intl date format. This doesn't prohibit that.

MF: Satisfies me.

#### Conclusion/Resolution

- Stage 2 acceptance
- Stage 3 reviewers: FYT, NHD


## Update on Optional Chaining

(Dustin Savery)

- [proposal](https://github.com/tc39/proposal-optional-chaining)
- [slides](https://docs.google.com/presentation/d/12KG2Y1V6Ufa-ed1RsH6qC8S2nn0WFwY5bfBWHTaYJDY/edit?usp=sharing)


DSY: I am now championing the optional chaining proposal after working through for the last 5 years. 2500 visitors and lots of traction on this proposal. Lot's of community involvement. A brief refresher for those who are not familiar -- syntactic sugar for finding a value in a tree-like structure. We want to simplify how we get a value out of a tree. We also want to deliver predictable results.

DSY:

```
//with
a?.b?.c

a == null ? undefined: a.b == null ? undefined : a.b.c
```

DSY: Lots of cleanliness with optional chaining and predictability. I want to be clear though there is we are not doing error prevention or logic alteration or augmentation. There is no sugar coating -- it's just an easier way to access a value in a tree. As far as what we are trying to support, we are proposing for property access including static and dynamic property access.

```
//static
const x = a?.b;
//dynamic
const y = a?.['b'];
```

DSY: What we don't support is: optional: function execution, deletion, construction, template literal, property assignment. Don't want to halt property access proposal because of this edge case.

DSY: Some controversy and lots of discussion but community has been supportive. Sticking point is particular operator to indicate optional access.

DSY: Right now we have `?.` and we chose this because other languages support this syntax i.e. C Sharp, swift, coffeescript. So obviously we don't want to jump bandwagon because other languages have been doing it but ultimate community support. If developers are using standard then it makes sense to continue using it. Looking at the polls, people are more supportive ?. syntax instead of other ones. If people have differing views, please let me know. I am not looking stage advancement but getting feedback and hearing concerns/wishes. I want people to agree that this proposal is worth advancing at a later date.

DSY: Where do we go from here? Hoping in March we can move this to stage 2 unless there are major hurdles.

WH: You just said optional chaining doesn't support function calls, but I just checked and they are in the proposal, both in the semantics and in the examples.

DSY: That's fair, there is a PR open to remove them which will be merged shortly, but I want to get feedback beforehand.

WH: Are you removing function calls anywhere in a optional chain (example: `a?.b()`), or only if directly following a `?.` (example: `a?.()`)?

DSY: The first example would be allowed, so the thing that is being removed is the optional function so if you `a?.()` It's confusing because of ternary operators—an edge case. But `a?.b()` is still valid.

WH: I am a little concerned but it might be okay.

DSY: Looking at the amount of complexity around it, it will cause problems. Community is primarily looking for property access.

JHD: Are we confident we'll never want optional calls?

DSY: No I don't think we will never want, but given the scope that is more of an edge case. If we can simply into smaller pieces we have a better change of moving forward.

JHD: This leads to something -- there is a lot of importance and value in having consistency in . and bracket access. If we want optional call in the future, it will need sufficient similarity to optional member access. I suspect many people will bring that up. I agree that separating optional call from member access is sensible but if we ship member access, we might corner ourselves for optional call. I don't have qualms about optional call but we need to assess the risk.

DSY: No, I think that's a good statement.

JHD: I have commented on the proposal repo I think it makes sense to me that we have a token and dot for member access and a token and a bracket... they should have the same token.

MM: Is there another concrete suggestion that would work in that situation?

JHD: `??` was floated around `??.` and `??[` but there would be consistency issues.. We wouldn't be to able to use it the other. Three question marks were distasteful to the group.

DE: We could use a triple bar, that only returns undefined.

JHD: There is a different discussion but I have an objection for null and undefined case.

DE: Does your objection also apply to defaults?

JHD: Yes I think it was an unfortunate choice for default parameters.. Null and undefined are indistinguishable in some cases but for default parameters they are.

DE: So one thing that's relevant—it might be a reason double question mark might be OK, but we're talking about triple bar.

JHD: Separate from semantic debate, if triple bar is generally acceptable then it seems like it would address the grammar issue and consistency issue. Nullish coalescing is intertwined with this.

BFS: I want to voice concerns about timing—we need consistency. We have a new operator .# for private fields, which doesn't have dynamic access. We're not blocking ability to access a private field. If we're not blocking we should explain need for consistency here and lack of consistency on private fields. Perhaps in future we can get private symbol to be used with dynamic access.

JHD: Someone stop me if someone has more knowledge about private class fields. As I have heard it explained, hash is part of the identifier, and `.#` is not an operator, so it's sufficiently different from public property access that the same expectations of similarity need not apply.

MA: BFS is pointing out that you don't have access to private fields

DE: Does that make it OK to not have this?

JHD: So yeah I think private fields are a different beast and the hash is part of the identifier... the lack of dynamic access for private fields... you can argue for that feature but the lack of it doesn't justify the lack of consistency.

WH: I agree with that.

BFS: My concern isn't you can or can't access priv fields dynamically. We are discussing a requirement before moving forward such as optional function, static access... we are not seeing the same discussion for private fields. I'm not concerned about private field accessor... we require one consistency one this proposal but we don't seem to require it on the other proposal.

RBN: I want to make the point for triple bar, when we look at double bar where we are doing boolean OR—would triple bar only care about undefined or would it also care about boolean values? It feels strange/doesn't feel like it's the right semantic for that syntax.

WH: In response to the question, we've had major discussions regarding private fields. We have explored that topic at length. Consistency has always been a design goal and there've been arguments.

JRL: Jordan brought up optional call would not have a similar syntax. My opinion it's different from optional property access because it's going to invoke a function. It could do typeof function, or is it nullish check only? As there are different semantics, it deserves a different syntax. The fact that it doesn't directly match is a good thing given they're different.

JHD: That seems reasonable to me.

DE: We have heard this consistency argument... how do we weigh that against what the community has to say.
Dave did lot's of outreach about this issue. Majority prefers `a?.` on GitHub, additionally framework maintainers voiced similar opinions. I think there are a multiple ways we can think about consistency. It's a hard pill to swallow but consistency with other programming languages -- lots of languages use '?.' Even among frameworks, i.e. Angular HandleBars... I don't think these arguments favor one or the other but there are tradeoffs. How should the committee weigh these?

WH: This proposal is mostly syntax driven — generated by the grammar for member expressions and call expressions. Those allow function calls already so we have to decide what to do with them regardless. The proposal as it is now (without the pending pull request) allows `?.` to apply to function calls the same way to square brackets. If we want to do steps to prevent that, we would be increasing the complexity of this proposal.

MM: the way people informally process text as opposed to the view from parsing—I can image even with the `?.[` property name being inconsistent with `?.` (where the consistent one would be `?..`). If you take a look at natural language, my sense is `?.` will come to mean optional chaining. I think ||| accepting null & undefined as falsey is bad. If we think of it as stricter || which is about truthiness and falsiness, I would expect ||| to be stricter, ie. is is just about true and false. If we use ?. for null chaining and ?? for null coalescing, then there is a suggestiveness that the ? is about null/undefined as opposed to ||| being about truthiness. I think the former is more consistent & better.

DS: Thanks for the discussion. Anyone have additional concerns, please discuss.

#### Conclusion/Resolution

- Continue discussion more contact Dustin with thoughts

(break)

## Editor in Chief selection

RJE: Aki will tell us how the voting process will work but if there is anything we need to discuss together please do.


*Discussion ensues regarding editor in chief... Notes not taken during this section...*

#### Conclusion/Resolution

- Rules for voting will be posted on Reflector via picture.
- Email Yulia your vote by tomorrow 12 PM


## Asset References for Stage 1

(Sebastian Markbåge)

- [proposal](https://github.com/sebmarkbage/ecmascript-asset-references)


SM: Goals of this is indirect dynamic import of relative path. Cross platform script authoring experience for assets... various bundlers can benefit from this.

SM: To refresh our memory on dynamic imports. The current stage 3 proposal which lets us load a different module on demand. However loading things over the network can get complicated such as showing a dialog on retry, etc. The loading experience makes it complicated.

SM: There's some problems with this. (1) if you extract to another file, you have to put a path relative to that other file, not your original file. This is the crux of the problem: libraries can't build this logic into separate files. (2) If you pass a dynamic path like a URL, packagers have this pseudo-syntax requirement where you provide a static string next to an import.

SM: Alternative for this is to wrap in it an arrow function and pass that arrow function into import.

MM: Where will this code appear?

SM: This code appears in __ source code and the library is what invokes this function. The library can define advanced syntax on when/where to load it, how to handle errors.

MM: I'm not understanding.

SM: Imagine this example instead of the load call taking a string, it takes an arrow function

```
customLibrary(() => import('...'));
```

SM: So now it's relative to the bottom (?) file.

SM: It's still not completely sufficient. (Shows slide title "Alternative" with reasons why it isn't sufficient.)
It does not let you talk to cache and doesn't work with other assets. We'd have to make you invent your own way to refer to things. It also doesn't allow additional argument configurations to loading. It kind-of looks awkward, for something this common to have an arrow function. And we're trying to require a conventional static string, but that's not being forced.

SM: Currently there exists capabilities to working with loaders i.e. require.cache but in Node.js they use require.cache[require.resolve("./other.js")];

SM: In WebPack, they behave more like pseudo-syntax. They require static strings.

MM: What does "weak" mean in this context?

SM: It means that this does not necessarily need to be in the same bundle as this file, but there could be an idiomatic check to see if the file is in the same bundle.

SM: The third one there is a theoretical loader API where we could do something like import.meta.resolveURL.

SM: Another use case is, where you have all kinds of resources, like images. There have been various ways to refer to images by relative paths. (Shows slide with prior art: Node.js, Webpack, Rollup, React Native, NativeScript, Web.)  But there's no canonical way to do this in JavaScript.

SM: Solution today? There is no canonical way but instead we use transpilers to translate. So a common thing is to use webpack to resolve dependency graph and then take the webpack bundle and run it. The problem is you can't use the language itself.

SM: So there are various ways we could approach this. We could build a whole ecosystem. But the smallest possible thing is that we need to get past this syntactical problem. We don't need runtime APIs, with polyfills, feature detection, etc. We just need the individual source files to be defined in a cross-platform way. The limitation today is there's no syntactic way to describe that.

SM: Static syntax we want

```
Import asset Foo from "foo.js";
```

SM: I think we also need the dynamic form still. This does not load the file. It just returns a promise that resolves into a reference to that file: (shows example code on slide).

SM: I'm not sure what data structure to use. Here is one option. It has 2 internal slots which are similar to dynamic import works. There is [ReferencingModule] and [AssetSpecifier]

MM: I'm sorry. Dynamic imports returns a promise, so what object has the internal slots?

SM: The internal function mechanism accepts these arguments and it has the same types.

MM: The dynamic import can accept something other than a string as an argument?

SM: No but when the call the internal mechanism (forget name), the imprort call calls an internal mechanism. That internal mechanism accepts __ and specifier that passes the string.

MM: So there's no observable object that has these as internal slots?  So you're saying there's ___ that has these internal slots?

SM: Yes. I'll get back to this. Might not be the right data structure.

SM: There is also dynamic import of reference where the specifier that was stored in this object. In this example it isn't based on the call site.

MM: I didn't follow that.

SM: Imagine this is two different files.

MM: The import line and the ___?

SM: In this proposal, the referencing module, the one with the import asset line, since it's attached to this first-class object, and the specifier is also part of this rarefied object...

MM: This would change the semantics of the dynamic import special form correct?

SM: Yes. So, one example is import.meta that contains this reified information.

SM: So the problem with this mechanism is that it allows you to use this mechanism in the runtime form. I can extract the URL from that and do my own resolution. With some mechanism in this library. Which is fine except that it doesn't have the static properties for build tools to use.

SM: Another alternative to having the syntax is to use the import.meta mechanism which is pretty much host environment can have whatever they want. I propose we had a resolveURL so that people can specify what loader they want. The problem is this only works on the web so we need to unify people on this extension and the particular usage of assets in the static form. But also the return value here in the request is very specific to the web. Maybe there will be a specific form that works for node as well. But it's a very heavy-weight object that it is hard to unify. But you could imagine that mechanism having opaque semantics. We could also leave this as-is and let bundlers modify using some pseudo-syntax and we keep cross-compiling between platforms. Or we could add a higher-level structure into the language.

MM: I think that this is adding a lot of mechanisms to both syntax and semantics around one of the worst thought out and newest features of the language which is dynamic import and import.meta. Both of these were allowed to proceed with the assumption that the Realm API would provide hooks to repair the unsafety. That hasn't converged yet and we don't fully understand how those hooks will work. You are trying to serve both bundlers and direct execution semantics in the absence of a bundler. You are trying to preserve the semantics with the absence of bundler. I like that. I sympathize with the goals here. I think dynamic imports and import.meta are some of the biggest mistakes we made and I don't want to consider adding more complexity to those mechanism until we figure those out.

SM: To your point, or to counter that point, the alternative is that there is going to be a process to add more things to import.meta if we don't do it in the web spec today, or bundlers will take advantage of import.meta because we open the door for host environments to add whatever they want. If we don't give a direction here, then clients will define their direction elsewhere.

MM: Like I said I sympathize with the goals but is there a way to address the goals without adding more weight to import.meta and dynamic import situation. I want to raise that as a design direction.

SM: So, in the current proposal, because this is the alternative, we don't add anything to import.meta. It does add to the ability to get one of these references into dynamic imports. And I think that can be staged at different levels b/c you can have loaders in the runtime that allow you to get a canonicalized specifier that can work for dynamic imports. A similar example is how do you actually use one of these objects in the web?  There would have to be some mechanism to extract the URL that could work with existing DOM APIs.

MM: In this special form, the logo variable comes down as...

SM: An asset preference object. What's added here is URL.createObjectURL, which creates this temporary URL reference to this opaque blob, which could be a URL or an in-memory representatoin.

MM: I  think I was just confused by the import.meta on your last slide. I misunderstood it to be part of the proposal. so it would have ..., a new data type, extend the dynamic import data type, anything else?

SM: No.

MM: Okay. In that case, I might not have an objection.

CM: Yeah so ergonomic nit, `import asset` is confusing because it is not importing anything but instead declaring a reference relative to the current context. I would just argue for a different keyword other than import asset.

SM: Yeah, so in the original proposal on GitHub, it's just asset without import. but that has potential grammar issues that we may need to solve. Maybe there's another word than "Asset" we could use. I also want to say, the reference for this is externally defined.

CM: The implication of import is you are importing but you are not. You are setting up to import in the future if you want, but it's not doing so.

SM: So, the mental model of the import statement is importing the bindings that are already defined elsewhere. This is importing the binding to a reference that is defined elsewhere.

Kevin: Maybe import ref?

MM: What is the API of the new data type?

??: Just a holder.

SM: I should explain more. There's concern when you create URLs to create representations, because they can't be garbage collected, so they have an unknown lifetime. Adding other mechanisms ... But it's weird you have 2 mechanisms. You can have an asset object and a reference object that behave similarly. Ideally it would look something like but which platform should it use? One idea we could use is that there is no asset reference defined in the language but the object behaves in a platform independent way.

MM: I would certainly want to look into it more deeply.

SM: Some issues... is this too much syntax? Is dynamic syntax enough? Some questions about resolution timing i.e. if there is a resolution timing it probably needs to be a promise... even just getting a canonicalized reference value needs to be a promise. Parameterized static syntax? I'm really just looking to see if we want to continue exploring this in TC39? To go to stage 1.

RJE: Objections to this going to Stage 1?

Kevin: The obvious problem is that there is a new opaque object. Can you elaborate on the justification for that?

SM: So in the language we have this string to represent the specifier that gets resolved later on. In the spec there is no canonicalized value that gets resolved as a string? Reason we don't do that is because of the garbage collection model -- once it becomes a string it becomes hard to clean it up. The other is that a string has all these security implications -- it cannot encourage you to manually manipulate it. If you look at Node.js it's a string but in webpack it is a number because it optimizes the transport so it doesn't have the long file type name. One possible alternative is a symbol, for example. But even that has garbage collection issues.

MM: Given this proposal, how strong a statement about the equivalence of the direct semantics to the semantics of static...

SM: For the static proposal, so if we're talking about only the "static syntax" form, because the string itself is not observable at runtime, statically resolved early on, even if there's a more filesystem requirement when resolving... in the dynamic syntax form, it's different. It's similar to how the dynamic import system does not have equivalency, unless you have the requirement that the argument passed in must be a static string.

AK: So I am relaying with dominic and he gave me a quick statement. I think this is a good problem space to explore but we need to iron out before stage 2. I think there's support for stage 1 but want to relay those thoughts.

#### Conclusion/Resolution

- Stage 1 acceptance
- Some thoughts to iron out before approval to stage 2 see proposal thread


## isRegExp change

(Jordan Harband)

- [proposal](https://github.com/tc39/ecma262/pull/1318)

JHD: So the current isRegExp algorithm are used in 4 places and 3 of them are used for throwing an error.. What the algorithm does is it returns true if it has a regex slot. It has an additional case though which I will talk about later. If isRegExp returns true, it looks up its source and flag properties, to otherwise it treats as a string and stringifies it, and constructs a regex from the string.

JHD: If it has an undefined symbol.match value and the internal slot, isRegExp will return true. What this means... out of the 4 symbols, one of them is special and denotes isRegExp. I asked Allen on the PR what the motivation was: it was the simplest one and it seemed easy, and there was mild pushback about checking more than one symbol. What this attempts to do is remove Symbol.match from isRegExp. This will remove an observable call. Negative impact it could have is if someone was currently passing into `new RegExp` an object, that was not a true regex nor `extends RegExp`, with a `Symbol.match` property, and instead of reading its source and flags properties, would stringify and lead to a different result. I am very skeptical that people are doing that. If you subclassed RegExp you'd be fine, whether you'd overridden Symbol.match or not, and it doesn't make sense to me to subclass RegExp if you want the RegExp constructor to treat your instances as "not a regex".

JHD: It will be better to have a clear precedent and clear mental model of how regex symbols work. I wanted to get consensus between one of the 2 approaches -- one in the PR which is removing the symbol.match check, and an alternative to checking for any of the regex symbols (which would likely have a performance impact). I think we can easily add a use counter in Chrome to detect how often this happens. If we can't make a consensus because it isn't web compatible or pushback on implementation, that's fine, but it would help future designs and matchAll if we can decide what makes the most sense - what we would want conceptually. Symbol.match being special allows for ambiguous interpretations of its behavior.

DE: I support this proposal. I don't quite understand one symbol being different from the other but why I like about this to subclass regex -- taking that motivation there is a use case where you can port the exec command and that was a design goal from allen and that would be preserved.

AK: There is a lot of text from Allen about this.

DE: Do you want to represent allen's concerns.

JHD: Yeah sure so Allen's comments -cites from github PR-. You could make a subclass of regex and mark it not a regex but no one has claimed a use case for that I'm aware of.

DE: I believe Brendan and Yehuda remember this conversation?

BE: I'm a little worried about the complexity of the RegExp design.

DE: Yeah we are concerned too but we want to know if it's okay to proceed.

MM: I certainly participated -- I don't think I have enough memory but Allen's general approach to the kinds of questions, Smalltalk made very intimate use of such subclass inheritance override patterns. The yo-yo people have complained about is related. Allen tried to make Regex economically subclassable.

DE: That makes sense -- do you see this PR making regex less economically subclassable.

MM: I don't know. I can see how Allen's intuition would lead to this but I can't simulate Allen well enough to predict whether he would object to this change.

DE: He did object to it.

MA: When we were implementing regex subclassing. There is the exec level... we tripped over this originally. I have a concern that this fix may affect the optimizations we have done based on how ES6 made regexes.

MM: The Allen design approach from Smalltalk regarding subclassing make patterns that are very hard to optimize.

MA: We had to do a lot of checks...

DE: Chrome also.

AK: We had feedback from V8 and they said they were happy with the PR.

JHD: If we get implementation feedback that would push back which solution would we opt for? I'm not interested in slowing down regexes but if we can agree to remove this check, I can move forward with other proposals.

Kevin: I can see the point of view from Allen's design -- does this change have any benefits to match all?

JHD: 4 regex symbols 2 have fallback behavior and the other 2 have different fallback behavior. The match all currently would seem to suggest it isn't special but in my proposal, I believe it is special and this would actually help clarify.

DE: So we are saying due to web reality this may be an issue but if it isn't we can proceed with match all.

JHD: if removing the check has consensus then we could move forward and I'm hoping the outcome will be to move matchAll through with the mental model we have and onward to stage 4.

JHD: I'm going to establish web compatibility and adding use counter

SGN: I have concerns about the use counter due to performance.

MB: We've taken the temporary perf hit in the past just to get the data.

JHD: I want to proceed with the `matchAll` proposal.

JRL: The only place this would have a performance hit is where you pass a regexp without the `@@match` property to the regexp constructor. The other cases all raise an error, so it wouldn't impact performance.

JHD: I really want to proceed with `matchAll`.

SGN: Okay that sounds good.

JHD: Okay thank you everybody..


#### Conclusion/Resolution

- PR will move forward and JHD will revisit to check web compatibility and maybe implement a use counter (seems no performance issue) and unlikely but good to check
- JHD can move forward with matchAll proposal with the conception that symbol check shouldn't be happening, regardless of whether removing the check is able to land or not.
