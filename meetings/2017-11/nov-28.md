# November 28, 2017 Meeting Notes
-----

Jordan Harband (JHD), Rex Jaeschke (RJE), Michael Saboff (MLS), Caridy Patiño (CP), Peter Jensen (PJ), Sebastian McKenzie (SMK), Fabio Rocha (FRA), Till Schneidereit (TST), Peter Hoddie (PHE), Michael Ficarra (MF), Kat Z. Marchán (KZM), Bradley Farias (BFS), Daniel Ehrenberg (DE), Kevin Gibbons (KG), Chip Morningstar (CM), Dave Herman (DH), Aki Rose (AKI), Godfrey Chan (GCN), Yehuda Katz (YK), Natalie Silvanovich (NSH), Adam Klein (AK), Alan Schmitt (AS), Andrew Paprocki (API), Chris Hyle (CHE), Mattijs Hoitink (MHK), Mark S. Miller (MM), Mathias Bynens (MB), Keith Cirkel (KCL), Justin Ridgewell (JRL), Shu-yu Guo (SYG), Zibi Braniecki (ZB), Mariko Kosaka (MKA), Sam Goto (SGO), Keith Miller (KM)

Remote:
István Sebestyén (IS), Brian Terlson (BT), Leo Balter (LEO), Rick Waldron (RW)

-----

## Opening, welcome and roll call

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/11.md)

## 7.i ECMA-262 Status Updates (15m)

BT: I've updated the queue tool

BT: The only topics which I'm aware of for Stage 4 in ES2018 seem to be the RegExp proposals. If there are any more things for ES2018, then please get the pull request ready by January. If it's not in by January, it's probably not getting into the final spec.

BT: Post-2018, I'd like to pass the torch to someone else. If you're interested in editing, please get in touch with me. Hopefully we can get someone else to ramp up on this role.

KCL: Is Object spread possible to make it into es2018?

BT: If someone can make a PR and get it on the January agenda then we can put it in.

## 7.ii ECMA-402 Status Updates (15m)

CP: No significant changes. A lot of editorial work, thanks to @anba and @littledan for all the help.

CP: Intl.PluralRules is stage 4, and we keep working on the PR to get that merged. We have identified few areas that were underspecified, and we are finishing it. Should be merged in the next few days.

CP: There are a couple of features that we might reach stage 4 before January, and I can work on getting them into the next release.

## 7.iii ECMA-404 Status Updates (15m)

CM: We're on the fast track to have 404 as an ISO standard early/mid December.

## 7.iv Test262 Status Updates (15m)

LEO: Looking for volunteers all the time. Good coverage coming in: class fields and object spread. Those are all big features in test-262. Coverage is great, looking forward to what is next. We discussed possible changes to help external committers and published a document explaining the rationale of code review criteria.

## 10 Timeboxed agenda items (15 Minute Items)

## 10.i.a Array.prototype.flatten & Array.prototype.flatMap for Stage 3

(Michael Ficarra)

- [proposal](https://github.com/tc39/proposal-flatMap)

MF: We decided to use the IsArray test for flattenability. We decided to wait for this meeting to advance to stage 3 to give time for feedback. There's been no feedback so I'm looking to make this stage 3.

AK: Whats the state of the reviewers?

MF: We have reviewers; Jordan and Rick. Rick gave verbal approval but I have yet to get him to commit this to the tracker. It has review from Domenic and other TC39 members. If you'd prefer we can get other reviewers - the spec text hasnt changed other than IsArray

MM: The test is IsArray?

MF: Yes!

RW: I'm sorry I didn't post a final review, but I'm 100% behind this.

MM: Could you reiterate the motivation for flatten? I don't see the motivation.

MF: We see this often with things like array prototype concat as a way to flatten array-likes. We want to make it a common pattern for people to use.

MM: What do people use it for?

MF: Well to make arrays of arrays of things into arrays of things. We have depth argument - Brian was the main proponent of the depth part, especially allowing infinite depth. The case of a depth of 1 - the default - is a common pattern.

JHD: Are you asking for common usecases?

MM: Yes. Many patterns exist, some good some bad.

JHD: It's tough to come up with a concrete example; I could go through the AirBnB codebase to provide examples

MF: You can imagine someone building an array that contains arrays through an iterative or evented process. Once they've built this up they can flatten this value.

DH: So let's you have an online streaming service and you have an array of titles grouped by genre, so an array of arrays.

GCN: Let's say you're getting a resource over JSON, it's paginated, you want to go through all pages and collate them; each page has 10 results, you make 10 requests, you have a 10x10 array you want to flatten.

MM: Okay, yes, I withdraw my objections then.

YK: JSON Data doesn't support Set/Map. Arrays are the main data type in that case.

MF: I want to point out one of the justifications for choosing IsArray is that if we do end up adding Set.prototype.flatten,0 we'd want to use Set as the determinant. So people remember that `thing.prototype.flatten` will use `thing` as the determinant.

DE: Let's go to the question queue.

RBN: We use this a lot in the TypeScript codebase. An example of going through source files and flatmapping diagnostics of the sourcefile. Concern of examples for these was already addressed though.

JRL: Why is flatten not static?

MF: The things being flattened are always themselves arrays, when the `this` value is always an instanceof the same thing we tend to put them on the prototype. I've not considered making this static, during development. Do you see a reason to make it static?

JRL: I'm just concerned that we'll use flatten the same as concat; you'll make a new array just to call flatten on it.

MF: Can you give an example?

JRL: ... not quite yet

MF: Can I suggest we don't hold stage 3 for this then?

YK: People might pull this out, but its not a hazard. This is what we have with mutable prototypes.

MF: Does anyone have _significant_ concerns that need addressing for stage 3? No? So we can make this stage 3?

Everyone: signs of agreement.

MF: Thank you.

JRL: Examples (from Babel):

    - https://github.com/babel/babel/blob/18c8d97c3d872735097d9610bc2c8a02155a40a1/packages/babel-generator/test/index.js#L40-L43
    - https://github.com/babel/babel/blob/18c8d97c3d872735097d9610bc2c8a02155a40a1/packages/babel-types/src/index.js#L476
    - https://github.com/babel/babel/blob/18c8d97c3d872735097d9610bc2c8a02155a40a1/packages/babel-types/src/retrievers.js#L12
    - https://github.com/babel/babel/blob/18c8d97c3d872735097d9610bc2c8a02155a40a1/packages/babel-traverse/src/visitors.js#L169
    - https://github.com/babel/babel/blob/18c8d97c3d872735097d9610bc2c8a02155a40a1/packages/babel-traverse/src/visitors.js#L282

JRL: Seems weird to create the initial array just to call flatten on it.


#### Conclusion/Resolution

- Stage 3 acceptance

## 10.i.c Numeric separators for Stage 3

(Rick Waldron)

- [slides](https://docs.google.com/presentation/d/1E8yKRJwA4iX_EctpY48KGBwAsCtNZpTOz4wu7tbxTqE)
 - [explainer](https://github.com/tc39/proposal-numeric-separator)

RW: (Presenting slides)

RW: We'd like to make this stage 3.

MF: Can I confirm legacy octal integers don't allow underscores?

RW: Hell yeah my friend, there are explicit rules for exactly this. It cannot have numeric separators.

ZB: Is there a reason why we can use multiple consecutive underscores?

RW: There is no support for multiple separators in sequence. An early decision was to have this. It's an unnecessary additional complication and serves no clear benefit. It was a decision to go one way or another and we've we landed on this and have upheld it.

ZB: Could you update examples on the proposal it has this as an example.

RW: Yeah don't read that! Read the spec. Apologies that the readme is out of date.

AK: Champions, please keep your explainers up to date.

JHD: You can use multiple separators, just not sequentially right?

RW: Yes! For example a binary literal might be separated every 4 digits. This has Test262 coverage. Sorry for not having an example on the slides.

RW: So, stage 3?

AK: Prohibiting underscores in ToString - can you explain what the spec does. Does it disallow underscores when things are being implicitly converted to number?

RW: It had an STR decimal literal. Decimal digits, space, decimal digits. The solution is to mirror the spec of today and prefix those with STR.

AK: I'm more interested in behavior than spec text. 1_0 as a string, does that fail to convert to string?

RW: That's the number 10 in parseFloat

AK: So a string being implicitly converted to a number

RW: The underscores have no mathematical value so they get ignored. Implicit conversion of `'1_0'` is `10`. T

(RW: Important to note that I was presenting remotely and misheard Adam's question, which is why my answer "broke the web"—sorry for any confusion there. The correct answer is that there is NO CHANGE to the existing behavior of implicitly coerced strings that contain an underscore, eg: `1 + "1_0" === "11_0"` and `"1_0" + 1 === "1_01"`)

RJE: We've used up the time slot. How much more do you need?

DE: From the spec text, it doesn't draw a distinction from Number constructor and ToNumber.

RW: Existing behaviours do not change from today. It will do what it does now.

RW: So, stage 3? No objections?

RJE: No objections.


#### Conclusion/Resolution

- Stage3 acceptance
 - Follow up: the spec text should define ToNumber and Number semantics equivalently regarding separators


## 10.i.f InterpreterDirective

(Bradley Farias)

- [explainer](https://gist.github.com/bmeck/59cf8c16959eccffd8b7e9828826a842)

BFS: (Presenting)

MF: What does DirectivePrologue have to do with HashBang?

....

BFS: No objections? Stage 1?

MLS: Is it a syntax error for private fields?

BFS: Yes currently.

MM: Negation of a private field is !# not #!

BFS: Stage 1? Stage 1 yay!

#### Conclusion/Resolution

- Stage1 acceptance

## 10.i.h String.prototype.replaceAll for Stage 1

- [proposal](https://github.com/psmarshall/string-replace-all-proposal)
- [slides](https://docs.google.com/presentation/d/10yrU2Jw4-mOIHU7-rL8sugEHgWMNIJVjPRRQ4DvrA2A/edit#slide=id.g32d5be78b3_0_0)

(Mathias Bynens)

MB: (Presenting slides)

MM: Can you use a function for replaceAll in replaceValue?

MB: This is part of the complexity of replace, but we don;t need to make replaceAll as complex as replace. If we want more compatibility we could do the same thing, but it could be more efficient to not.

MM: For me cognitive load is the opposite of what your preference is. It violates principle of least surprise. replaceAll should only be a generalised replace, with the same semantics on the arguments.

BE: I was going to approach it differently, if you want a flat string replacer function don't use "replace" in the name. The function has room to diverge semantics then. Also we have the same problem with matchAll right?

JHD: It's notable that the original plan for matchAll was your option 3: cloning the regex and forcing the "g" flag, but we moved away from that so matchAll could delegate full responsibility to the regex.

MB: So if we change the method we can get away with just using simple strings?

MLS: I agree with that. If we can simplify the method then that's preferred. We should change the name.

MB: So substituteAll or something? We can bikeshed the name.

YK: I am missing this cognitive load point, what's the point?

MM: Well replaceAll should match semantics for replace in terms of the supported arguments and features

DE: I disagree with the cognitive load point. replace is really complex, I'd wager no one in this room can describe the specs of replace, for example all of the $ patterns you can put in the replacement string.

MLS: But someone schooled in replace knows what they expect and so it does carry over.

DE: It would not be more cognitive load if we left out obscure features of replace in replaceAll; it would only be less load.

BE: No one uses Perl these days!

ZB: We can optimise for fast passes if the arguments are strings so performance isn't a concern. Im not concerned of cognitive load but I am around principle of least surprise which should prevent us from reusing `replace*` if we change the signature. On the other hand bringing `replace` and `substiute` into JS feels an inconsistent large-scale language API.

MLS: Yeah the issue with replaceAll is that if it has the same semantics, whats the use? Just tack on a `g` to the RegExp flags.

BE: Having simple methods that just work on strings is useful, but replace/replaceAll is something to think about.

MB: Okay, so I guess this isn't a concern for Stage 1 - I'm after Stage 1 so can we push this to Stage 1?

MF: RegExp escape might be a better option - when this last came up I was the main objector, but perhaps we could reinvestigate this.

MM: Theres a RegExp template literal tag proposal which escapes a lot of the pitfalls of RegExp, maybe this could be something to look at?

MF: So yes this doesn't block Stage 1 or 2 - but it'd be good to research these alternatives before promoting

MB: That's fair.

YK: I don't think simple strings even reaches the 80% case from my perspective. I would say having "replace" and "substitute" would lead to confusion. Ruby has `sub` and `gsub` - going for something like this would be preferential.

MM: Yes. If it seems synonymous then we lose the value of renaming. I dont have a concrete example of a good name.

ZB: Do we have stats on how many people use replace with g? Maybe we could get stats?

MB: Yes I will add a use counter I think. Yehuda: why do you need regexp support in replaceAll? Why not just use existing replace?

YK: It's just a case of confusion. I agree with Mark's original case.

MB: So can we say stage 1 still though?

MM: It certainly qualifies, and I won't object. But my preference is we drop it. One of the functions of the committee is to be the guardian of the overall language complexity. We lose sight when we look at each proposal in isolation. We should ask ourselves if the benefit this brings is worth the extra surface. My opinion is no.

MB: My opinion is different. Whether it's worth it depends on the exact shape of the solution.

MLS: To counter Mark, there is no good way to do a global string search of another string without regular expressions.

MM: Hmm, this is a significant point I hadn't considered.

YK: This case and others from earlier is making the case that a better API for "just use /g" is important.

MB: So stage 1?

#### Conclusion/Resolution

- Stage1 acceptance

### 10.i.i Throw expressions request for reviewers for Stage 3 (Brian Terlson, Ron Buckton).

### 10.i.j Additional Intl options, for addition by needs-consensus PR

(Daniel Ehrenberg)

 - [pr](https://github.com/tc39/ecma402/pull/175)

DE: (Presenting)

DE: Any objections to this normative PR?

YK: Is this landed in v8?

DE: Not yet; I was waiting to land it until it got TC39 buy-in.

YK: And it's web compatible?

DE: I can't imagine it breaking the web.

DE: The other thing is we have good cadence in GitHub that these small normative changes get good feedback on GitHub PRs. There are a few more normative PRs coming, and it's not clear whether we should be getting review for all of these in TC39, or if it's OK to discuss it just on GitHub. Would you all prefer if we went to TC39 with all of these changes, or would you mind merging these changes based on discussion which takes place outside of committee?

ZB: Historically we have a slim number of people interested in ECMA-402. It was natural for us to come to TC39 to propose the first revision for these, then for the second we were trying to extend that. As we progress we're going in 2 directions. We're looking for use cases to solve problems, and bringing those into TC39 to improve JS overall. Then theres a number of smaller issues which are small in scope - like "we need to know how + and - is represented in asian languages" - this is a small change and we should question if we need to come in to TC39 with every tiny change. Should we (without abusing the process) just come every now and then to show a summary of things that have changed, rather than presenting each individual one?

??: So these changes are just small corrections to language data?

ZB: Yes. For example formatting currencies - someone brought up that currencies have 2 formats: accounting and non accounting formats. Its a small feature as part of the existing API but do we really need to go through all 4 TC39 stages or just merge a PR?

DE: It'd be great to get more of all of you involved in ECMA-402 and watching the repo - there's lots of smaller activities there.

CP: Most of these changes are simply adding wording and options for conformance, it does not require changes in algorithms or steps.

YK: Yes, maybe follow the staging process yourself but move it along quicker - external to TC39. I would hope you would still follow a staging process for the same reasons we do.

DE: We have the ECMA-402 update at the beginning of each meeting so we could use that time to discuss these changes rather than these additional 15 minute timeboxes.

DE: Any other questions? No? Thank you!

## 10.i.k BigInt status update

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1u2xXRokUBPMjBsTL_ZCDghA16cH5FI0m1kLOczm1oMw/edit#slide=id.p)

DE: (Presenting)

DE: Should we have BigInt << Number rather than BigInt << BigInt?

MB: It seems very strange to disallow BigInt << BigInt.

BE: There was a decision to make shift operators unary but we went away from that because of the right shifts?

DE: The concern was that programs may depend on idioms like `x >>> 0` to always return a 32-bit unsigned integer *Number*, which would no longer be the case if we allowed overloading just one side. However, this is not an invariant used by asm.js.

YK: Its common to end up doing operations like this, where you will have a BigInt or a Number, and the thing you put after the shift operator might be a constant; in this case,

DE: The idea of the proposal is you have casts.

YK: because we decided anything other than a 64 bit number...

DE: The current spec says they both have to be BigInts or they both have to be Numbers

YK: It'd be pretty common to want to get the right argument variable, possibly varying in types, while the left argument stays the same, possibly due to getting something out of a TypedArray which may be a BigInt64Array or a smaller type.

DE: I don't quite understand; I think the left argument is more likely to vary.

JHD: I said last time could we make BigInt throw if it will lose precision and I was told that was not a good idea. There are some operations where the value will lose precision and some where it will never do that. Is this right?

DE: Yes; we don't want to lose precision, but  let's come back after the rest of the slides.

DE: (Presenting)

JHD: How does BigInt.parseInt interoperate with numerical separators?

DE: BigInt literals will support numeric separators. We will follow the semantics of Number here.

DE: We have 3 options here. Remove parseInt, give it a different grammar (e.g. the grammar for BigInt(string) but with a radix argument) or we stick with Number.parseInt semantics warts and all.

BE: Remember in July we raised an issue of oddities with Number.parseInt cleanups around null and radixes greater than 23. If we have BigInt.parseInt let's have it with cleanups of Number.parseInt

DE: Does BigInt.parseInt pay for itself?

AK: having looked at the implementation of parseInt it does a bunch of weird stuff that you don't want.

DE: Ignoring trailing garbage is perhaps the worst of those things.

AK: Also the 0x prefix support is very bad.

BE: Do these criticisms apply to any Number.parseInt, BigInt.parseInt, Decimal.parseInt?

DE: Number.parseInt is still bad after the cleanup. We could change the method name to `BigInt.fromString` and have a cleaned up grammar. Or would that be weird?

BE: Yes we can call it fromString and cleanup. The global imprint becomes bigger - we now have a fromString convention. But if parseInt stinks up the place lets just diverge and call it fromString.

YK:

AK: This is a good argument for leaving it out and adding it later I guess.

DE: Any feeling in the room of preference among these options then? Absent any feedback I'll go for fromString.

AK: I'd say leave it out for now.

YK: I agree

JHD: As a general temperature for the room - what would consensus be for Number.fromString etc for consistency? In the future would this be welcome? If no one immediately objects to that concept - then we could leave this out for now.

BE: We should keep in mind the "browser game theory" here. We have a shot to get something in now; later it could be harder.

DE: So we could leave it out and have a later proposal

BFS: The main thing I've seen is JSON apis returning strings with large numbers (beyond number maxint) but Ive never seen anyone do math on these, they're always identifiers. I think there is maybe a usecase but not to my knowledge.

JHD: When I left, Twitter Ads did hex encoding of these numbers

DE: Well that's a usecase for toString with radix, but not parsing.

BE: I'm of the opinion we should just take it out.

DE: Okay I'll take it out.

DE: (Presenting)

RJE: Let's break for lunch

#### Conclusion/Resolution

- No real support for changing types for some binary operators, or range limits for shift
- Remove BigInt.parseInt and pursue Number/BigInt.fromString in a follow-on proposal

## 10.i.i Throw expressions request for reviewers for Stage 3

(Ron Buckton)

- [proposal](https://github.com/tc39/proposal-throw-expressions#readme)

RBN: Can we get stage 3 reviewers?

TST: Me

KCL: Me

### Conclusions/Resolution

 - Till Schneidereit & Keith Cirkel to review

## 10.ii.a Clarify/redefine Stage 4 requirements

(Daniel Ehrenberg)

 - [pr](https://github.com/tc39/process-document/pull/15)

DE: (Presenting)

KM: A lot of proposals make it to stage 3, get implemented by 1 or 2 engines, and for whatever reason they die. For example SIMD. If it had shipped, they'd be locked into it - but it would never make it into the standard. The problem is shipping features that - beyond a reasonable doubt - wont make it into the spec locks us into shipping non-spec features.

MLS: Keith and I are in alignment. SIMD sat at stage 3 for a long time.

DE: It's not at Stage 3 anymore.

MLS: No, but it did stay there. Also sometimes things change in stage 3 that are significant changes, if we ship prior to these changes, we end up with web compat issues. The intent here is to kick the tires. Historically, Apple can't help in this process though; historically we ship one stable version of Safari per year, this year we shipped two. I don't know if we'll dramatically change that. It doesn't make sense for the committee to wait for us to ship. Its unlikely we'll ever have a stage 3 feature sitting in Safari stable.

YK: Is the goal that users are happy with the feature or is it a case of finding out web compatibility issues. I also want to strongly disagree with what the criteria for an implementation is. I understand that people think asm/JIT is a privileged implementation, personally I think we'd be better served amount making requirements on testing - for example C++ committee doesn't require a running version over tests. It should be a case that we can run an implementation against tests.

DE: If we accept javascript to javascript compilers, what happens if browsers were to disappear from this group? We want to stay in alignment as a group - and this should be a rate limiting step. Some committee members were concerned about the bar for approval being way to low. We need to have a criteria that validates the features.

YK: So are we saying just browsers should be this?

DE: Or any native engine, like Nashorn

YK: So what about a JavaScript engine? Like a JavaScript to JavaScript compiler?

DE: The implementation should represent the whole thing. It shouldn't defer to underlying existing features.

YK: That's an incoherent line though, it's a slippery slope argument.

JHD: Dan I agree, should we have a strict requirement for every proposal? To what you're asking Yehuda - part of this is about implementability. We need to learn can we implement this in the engines? There have been cases where something has been easier to implement in Babel and hard to implement in an engine. We need to evaluate the web compat risk for each proposal. For each one figuring out what is the requirements. For example `global` has 0 implementer concern but a huge web compat risk. Object spread on the other hand has a larger implementability concern.

DE: Yes, I'm not sure; it's sort of case-by-case which engines have a web compatibility risk.

JHD: If we're concerned about web compat risk, shipping in stable browsers, unflagged, applies. If we're talking about implementability then flagged is okay - its been implemented, so we know it will work. For some proposals these things dont matter.

DE: I still think we require implementations for stage 4. Implementors give really strong feedback because they look at the proposals differently to others.

JHD: If a proposal is determined to have no web-compat concerns, could we just allow this - as a comittee - to have looser criteria. I'm hoping we can come to a codified decision tree where some proposals fall down the strict route and some fall down the loose route.

TST: The two most prominent examples of things being unshipped: Array.prototype.values and Array.prototype.contains which turned out to not be web compatible. We shipped them in Firefox up to beta, but not stable. I can't think of an example with the new staging process where things like this _weren't caught_ so maybe this is just discussing theoretical things which will be caught anyway.

MLS: Its the duty of this committee to tell the world what the 1 JS is that people use. For an implementation to say its compliant, we want to make sure it implements what this comittee produces. So they need to count towards saying what is in the standard. Any engine - in my mind - that says it is ECMAScript compliant needs to have a say as to what gets standardised. Predominantly this is browsers but we shouldn't leave out other engines. Yehuda brought up a JS to JS implementation. People use this for their daily work - we'd get more feedback from these because websites wait for critical mass support from browsers. If a browser implementor says: "I implemented it and its good" and we ship it - but its not ergonomically compliant or maybe some tweaks would improve it - we won't get this feedback at the browser, we get this from Babel though. We can't discount that feedback.

DE: Sure - I wasn't discounting that feedback, I'm saying that we can have early babel feedback but stage 4 should require actual implementations. In this PR it doesn't say the feature has to be shipped unflagged.

MLS: I'm just saying we should say non browser implementations

DE: It doesn't say browser here, it says native.

MLS: I'm not sure we want all implementations from stage 3 to 4 have to have implementations be native.

ZB: Depending on the feature we worried about different things, as Jordan was saying. We don't want to end up at a stage where edge and chrome have it and safari doesn't or something. We try to cover this with the stage process but we're not looking at each case. An example of global vs something else... we should have the proposal include concerns for stage 4 - in some cases we're concerned around web compat, in others we'll get more feedback from a polyfill where people can use it and give us feedback. We shipped PluralRules in firefox - we proved its implementable but no one uses it, we dont know if its useful or not. global though - we know its useful, but we want to make sure implementors can implement and there are no web compat issues. We need to ensure we're writing proposals that are useful for people. I don't think we can hardcode this in a document, I think the comittee and champions should work through this in their proposals.

DE: It seems good to allow champions to identify problems in their proposals. But the browser implementation thing also records buy in from the browsers. Not just web compat or implementability. Sometimes standards bodies get into modes where they end up producing specs and features that never get shipped. The two implementations thing gives us a barrier to ensure we're shipping things that people want and engines want and can do.

ZB: I'm not saying we drop the two engines thing, just we identify issues per proposal.

DE: Yeah that seems good.

GCN: It seems like to resolve this we should explicitly say what we want the stage 4 criteria for. Like performance, web compat, etc. The two implementation requirement isn't serving any particular one of those goals and causes confusion

DH: It could be valuable to try to spell out what we're trying to achieve here. As usual there's different interests - not in conflict but some care more about one thing over another. It could be a good excercise to see these. I think its okay if our process does not spell out - formally - everything we want to achieve. Conensus is about how we want to operate and not try to hold ourselves to what requirements and constraints are. That is to say; just because its not in the formal process doesn't mean its something the comittee doesnt do. Dan you're trying to address one constraint which is we don't want to make it too easy for things to permanently end up in the spec without the right scrutiny. We don't want the floodgates to open. Perhaps whats missing is we have nothing inbetween "I'm onboard" and "I object". When someone feels like this is moving to fast - we have no way of saying "not yet". It does mean yes or no, just that they're not convinced its ready yet. So having norms to formally say this doesn't really change the process.

DE: This proposal was created to solve a concrete problem. At the last meeting, we weren't able to move a RegExp proposal forward just because it hadn't shipped to two stable implementations, only to browser preview implementations.

DH: So you think the requirements are too strict?

DE: Well, the objection presented in committee was actionable; we had Chrome and Safari implementing it, and we just needed to wait for another browser to implement which has a different sort of shipping policy from Safari to meet the requirement stated by a committee memer.

AK: I don't think not going to stage 4 is a concrete problem. What Godfrey said was good - let's think about what are we trying to get out of the process, rather than focusing too much on the process.

BT: From the ChakraCore perspective we're in the similar boat to JSC - around what we can implement. We don't have a rapid shipping channel to the public, I definitely don't like the idea of waiting for implementations in stable browsers. I also agree that we shouldn't nail down a hard process here. I like the idea of champions identifying risk areas. That info will be different per proposal.

AK: As Domenic is not here I'm going to try and express his feelings. He doesn't want things to end up in the spec that are not supported by JavaScript implementations; e.g., SIMD.js could have ended up getting to stage 4 given the relaxed requirements (read in isolation). Domenic is worried that the way to block something is to hold up the consensus.

DE: Maybe we could have signoff from implementations?

AK: Well getting to any stage at all is effective signoff. I'm worried that this takes power from the committee to say that if you're stage 3 two implementations means you're stage 4 - without committee involvement.

SYG: What was the original motivation for this PR? To reduce the deadlock situation? That we can be blocked waiting for another implementor?

DE: Yeah, that and balancing it with wanting to ensure theres sufficient buy-in.

SYG: I don't see this helping that then. Nobody is going to go back to their team and say "well the document says we have to do this now" you have to get buy-in, you have to talk to people.

JHD: Why don't we come up with a concrete list of the categories of concerns from promoting to a stage? Then we can as a committee agree to what categories a proposal fall into. So we can say a proposal needs browser buy in, then theres an actionable thing for the proposal to do. We then don't end up doing this process-lawyering by stonewalling proposals or using the proposal wording to push proposals through.

YK: This happens informally which I like. We often say "I agree to stage 1 but for stage 2 you best do a b and c". This gives clear indications for what a proposal should come back with. I know there's strong norms against objecting - but it would be problematic if stage 4 was a list of checkboxes - you check them off and boom you win. We should have proposals where browsers can say they don't want to advance it and thats okay. People should feel comfortable - with rationalises - to say they don't like a proposal.

DE: Do you think the current process document specifies implicitly that 2 vendors are shipping?

MLS: I don't think the current criteria is clear. We're arguing over Domenic's vs other interpretations of this. I'm going to read this spec verbatim. The term "significant" - I don't know how to qualify that. "such as" - is that really "such as"?

YK: Point of order - I wanted "such as" added because Domenic wanted concrete browser list and I wanted to keep things open

BE: Yes, I was advocating for this too. The ambiguity was a feature not a bug. It allows us to have a conversation on a feature by feature basis. Maybe this was a bad idea though.

MB: The problem is it makes no distinction of stable vs not, or flagged vs unflagged. That's the problem right?

RJE: We're 20 minutes over so...

DE: Oh sorry!

JHD: Shall I make a PR proposing my idea of categorising concerns?

DE: Maybe we don't need to formalise this right now.

MB: Jordan if you do that you're going to need to address "significant" and "such as".

AK: The ambiguity was here so we keep talking about this. This is the discussion we wanted per feature when we added this ambiguity.

#### Conclusion/Resolution

- The process document is deliberately ambiguous, allowing a feature-by-feature discussion of what requirements are
- We should become more explicit about discussing what requirements are required for a particular feature to advance to the next stage
- Process doc PR not merging

## 9.i.l Intl.ListFormat find Stage 3 reviewers

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39-transfer/proposal-intl-list-format)

DE: (Presenting)

MB: I'll review

FRA: Me too

#### Conclusion/Resolution

 - Mathias Bynens and Fabio Rocha to review

## 9.i.m Intl.RelativeTimeFormat for Stage 3

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-intl-relative-time)
- [slides](https://docs.google.com/presentation/d/1TdThcywfZWpAhC41DyllFP7gVxQjdfRCYGJKlxoHWls/edit#slide=id.p)

DE: (presenting)

ZB: During implementation we realised there are subtle cultural consequences thinking about relative time. "Tomorrow" is not 24 hours from now for example, it could just be 2 hours from now. In December "next year" is only a month away, while in January "next year" is 12 months way. Other libraries implementations we're basing this off of have the two "numerical" and "textual" forms which toggle between this loose format.

DE: Do we have feedback about the two values for single/plural thing?

MB: It seems simpler to explain to developers this way.

DE: And the three values for the length seems fine too?

#### Conclusion/Resolution

- Stage 2 holds
  - Consensus on the previous previously contentious questions about the singular+plural unit names as well as the size names


MM: Side note, I'd like to withdraw my proposal for Repair Proxy Transparency.
https://github.com/tvcutsem/es-lab/issues/21 explains why.

RJE: Okay, removed.

## 9.ii.c Make ECMAScript a syntactic superset of JSON for Stage 2

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-json-superset)
- [slides](https://docs.google.com/presentation/d/12z_3OqQOA2a6hioWZWDa9cj8kEJw4FlhR4_pZhhKA-U/edit?usp=sharing)


MB: (Presenting)

MM: It's essential that we do not introduce other newline characters which can introduce vulnerabilities. I'm confident we can never remove line terminators.

MM: I'm convinced the transition problem is worse.

MF: Why? I asked last time to get usage numbers.

MM: With regards to the vector for attack, the usage numbers are irrelevant.

MB: If we were to make this change these checkers would have to replace such characters with newlines.

MM: They would have to check both. Code that is deployed should work before or after browser.

YK: This proposal is good, I've worked on Rails code that hits this. If we cant fix anything else fixing the polyglot case is worth it.

MB: Any objection to stage 2? Stage 2 it is then

#### Conclusion/Resolution

- Stage2 acceptance
 - Reviewers for Stage 3:
     - Michael Ficarra
     - Jordan Harband

## 9.i.e RegExp dotAll status update

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-dotall-flag)
- [slides](https://docs.google.com/presentation/d/10yrU2Jw4-mOIHU7-rL8sugEHgWMNIJVjPRRQ4DvrA2A/edit?usp=sharing)

MB: (Presenting)

MB: Stage 4?

#### Conclusion/Resolution

- Stage 4 pending editor approval

## 9.i.f RegExp named captures status update

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-named-groups)
- [slides](https://docs.google.com/presentation/d/10yrU2Jw4-mOIHU7-rL8sugEHgWMNIJVjPRRQ4DvrA2A/edit?usp=sharing)


MB: (Presenting)

MB: Stage 4?

#### Conclusion/Resolution

- Stage 4 pending editor approval

## 9.i.g RegExp lookbehind assertions status update

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-lookbehind)
- [slides](https://docs.google.com/presentation/d/10yrU2Jw4-mOIHU7-rL8sugEHgWMNIJVjPRRQ4DvrA2A/edit?usp=sharing)


MB: (Presenting)

MB: Not yet ready for stage 4 as there aren't enough implementations yet

#### Conclusion/Resolution

- Not moving to stage 4

## 9.i.g RegExp Unicode property escapes status update

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
- [slides](https://docs.google.com/presentation/d/10yrU2Jw4-mOIHU7-rL8sugEHgWMNIJVjPRRQ4DvrA2A/edit?usp=sharing)


MB: (Presenting)

MB: Ready for stage 4 soon, spec needs some final non-normative tweaks to the spec text

CM: So you have a test suite generated by automated means? How do you know it's right?

MB: I have three different mechanisms for generating the data - and they all pass.

MB: I've yet to submit a PR for the spec text so this is not stage 4 ready

#### Conclusion/Resolution

 - Not moving to stage 4

## 9.ii.e Discuss module order instantiation/evaluation guarantees

(Bradley Farias)

- [slides](https://docs.google.com/presentation/d/1RXvvScD8ce2FyLY2aYhbas83WCiBqzIOqdMt4OpkCJM/view)

BFS: (Presenting)

JHD: If we have for example `import 'es5-shim'; import 'es6-shim';` that order absolutely matters. The order is completely critical. We absolutely want the invariant.

DH: You can't guarantee that A is evaluated before B because B could have been evaluated already.

DH: Why do you want to change the order to evaluate B first?

BFS: There was a PR against Node that was seeking to do this. It was one route towards providing Babel like named exports from CJS

AK: I'm glad this has landed I dont think we should do a TopLevelModuleEvaluationJob - I dont think it really does anything. Concrete html implementation of the loader does not use TopLevelModuleEvaluationJob.

BFS: Node does the same

AK: I don't think its reasonable to add normative text to the spec

DH: Bradley's  instinct here is good, we have to know what we can reasonably say. How do we specify this invariant? We can add English language invariants, they are in the spec already for example Array.prototype.sort. I want to point out we have discussed this exact topic at some length. In Portland a few years ago we did this. We landed on semantics where async execution of subgraphs are possible but only if they follow the ordering. The goal is to allow browsers to fetch modules and evaluate them as they come available while still respect ordering. In reality its a meek optimisation. Serious webapps will use offline transformations, not modules. The optimisations are useful for small to medium apps but don't scale to big apps. Maintaining ordering invariance is worthwhile.

YK: For a given graph you're allowed to execute from the leaf backwards as long the children of your module are present and executed - in source order. You are also allowed to spread these evaluations across turns. I think Dave is correct - we want to have a description of what we're trying to accomplish. Executing in source order is important. I agree with David about the meek optimisation. Offline tools work better here.

BFS: Yes Google came to the same conclusion around ASAP evaluation.

YK: The guarantee isn't complete though; `import a; import b; import c;` looks like a, b then c, but if a imports c you actually get c a b.

JHD: Can we add to meeting notes that we want this to happen but don't know how to put it in the spec?

DH: The reason I believe this is hard is because its dependent on the current module graph for which loading and evaluation has been kicked off. We don't have the entry point as its host specific. TopLevelModuleEvaluationJob was supposed to suggest this but its not used. There are some subtle questions about races where you have interleaving modules. I suspect we haven't thought hard enough about all the race cases. We don't have a way about talking what the session is because its host specific.

BFS: I'm not eager to try to move the host specific stuff to where it could be described in spec

DH: It feels like sometimes a spec is trailing reality, not leading it. We can just go away to implementations and after studying what the implementation details are we can spec it. I feel from the room we have a consensus of wanting something in spec but not knowing enough about the problem.

AK: Agreed that the race cases may be fatal to having normative language around this.

BFS: This feels right.

#### Conclusion/Resolution

This goes against the sort of spirit of the specification, though we have no particular normative spec text to add right now. Spec may in the future add normative text around this.

## Array[@@Species], Array Index Accessors and Security

(Natalie Silvanovich)

- [slides](https://docs.google.com/presentation/d/11fkQeEisoszNGF8SrautVT1ltSnsQBWRxJ4usoc-g_o/edit?usp=sharing)

NSH: (Presenting)

DH: Firstly the work you're doing is super important. Thank you for your awesome work. The usage though - I wouldn't expect high usage, its a power feature. Low level meta object protocol hooks take longer for developers to figure out how to make use of them. The thing missing from the analysis is how these features were designed. Deprecating a new feature because its had little usage and some vulnerabilities is premature because of this. Again the work is super important, but my conclusion is not "lets get rid of this feature" but instead "lets work on hardening this". Developer education is not an issue here, weird things can happen in javascript.

NSH: Sure - perhaps we could say "is it worth relooking at deprecating in 5 years if usage is still low"

KM: What are the semantics of index array accessors?

MM: Back in ES3 days accessors were not part of the standard but most browsers implemented them. The detailed semantics were never written down - so I cant tell you semantics for them. I will say there is a Frozen Realm proposal which allows for an environment of secure execution. Primordial objects like prototypes are frozen before the environment executes.

DE: Do you know when array index accessors was added to JS?

MM: You'd have to ask Waldemar, I can speak to ES3. Originally they walk the prototype chain. Some implementations may have treated them specially but only in the sense that they were buggy.

NSH: Inside every script engine is different. Even if at the superficial level they look the same.

DH: Sorry I thought we were talking about JS developers not JS engine developers. For engine developers its seems like a reasonable thing to add guidance notes for engine developers.

DE: I really like the idea of guidance notes like that. Empathy with JS engine developers is important, we often talk about empathy for JS devs but engine devs are people too.

NSH: I think specs should offer more of this kind of guidance. Array detatched buffer is a good example of this. For sort for example it says to be aware that your sort function could detatch a buffer.

SYG: Its all about optimisations right? This is the place where things can get screwed up.

CM: This is brilliant stuff but its a specific case of a more general issue. We have entangled semantics where you can rewrite the rules of reality underneath your feet. That we feel its essential this is the case I wonder if we should prune back the philosohpy of redifining everything.

BFS: You can do odd things with string prototype accessors. Have you done research on this?

NSH: I've looked at this a little but engines with this I've found tend not to work. Stuff is so optimised it doesn't really even notice the accessors are there.

BFS: Have you encountered anything with Promise[@@species]? Async functions always return regular promise, not Promise[@@species]

NSH: Promise implementations are extremely complex in every engine. I haven't found any bugs but it doesn't mean there aren't any.

TST: Did SpiderMonkey just get lucky or did you not test it?

NHS: Yes its funny a few Firefox developers come up to me with this. I haven't found any bugs. Something I have observed is that in more complex situations it behaves differently, for example pushing into an array - does it trigger the accessor? It didnt in Spidermonkey but does in the other 3 engines.

YK: If you discover a thing that is security sensitive and not all browsers are implemented - that _is_ something we can consider removing.

NHS: Yes I have a very long list of divergent behaviors across implementations.

DE: It'd be great to publish this list.

DH: Species was intentionally extensibility design. Subclassing an OO were key goals and continues to be a valid usecase. So if the sentiment in the room is "what did we do?!" then I want to defend the design decisions. We should have just called it out sooner that low level language hooks are rife for vulnerabilities. Let's not have the takeaway that extensibility is a non-goal for JS due to security concerns.

NSH: Yes this is all easy to say in hindsight, I don't want to attack the original decisions just highlight the vulnerabilities.

JRL: Surely Test262 coverage could add this.

AK: Well in my experience conformance testing is not right for this. Fuzz testing or security analysis is how we get these.

NSH: I think we should add shared tests for known vulnerabilities.

#### Conclusion/Resolution

- Explore adding vulnerability tests to Test262
- Improve guidance for implementers in new language features, documenting potential vulnerabilities

## 9.ii.h Intl.Locale for Stage 2

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-intl-locale)
- [slides](https://docs.google.com/presentation/d/1Pe2D_w891Wr8EaJ-r9LiegLgwcMNHxKuOM7fvlylpak/edit#slide=id.g2af58290b6_0_0)

DE: (Presenting)

DE: Stage 2?

YK: Generally speaking I agree that we should be extracting things that are floating around in the OS - like "give me a list of countries". Theres a lot like that in the intl space. Exposing that is a good thing.

DE: Yes, for a country selector that's one of the hardest parts--just having a list of countries.

ZB: One use case where this is important is any operations on languages you have to parse the language tag. Any negotiation of the desired language - e.g. `en-GB` vs `en-US` will need to parse this. We do this internally in engines anyway so this just exposes that.

CP: So we're saying that Intl.Locale does not throw a RangeError for underscore while other libraries do? Should other Intl APIs be changed to be more flexible and support underscore as well in  locale's value?

DE: I don't have an opinion so I'll have to go back and check this.

DE: Who wants to be stage 3 reviewers?

BFS: I will

KCL: I will

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
  - Bradley Farias
  - Keith Cirkel
