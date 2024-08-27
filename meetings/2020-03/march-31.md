# March 31, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:** Yulia Startsev (YSV), Mark Cohen (MPC), Jeff Long (JHL), Bradley Farias (BFS), Rick Button (RBU), Michael Ficarra (MF), Mathias Bynens (MB), Myles Borins (MBS), Caio Lima (CLA), Dave Poole (DMP), Jason Williams (JWS), Kevin Gibbons (KG), Chip Morningstar (CM), Philip Chimento (PFC), Mary Marchini (MAR), Rob Palmer (RPR), Ross Kirsling (RKG), Waldemar Horwat (WH), Pieter Ouwerkerk (POK), Bradford C. Smith (BCS), Ujjwal Sharma (USA), Richard Gibson (RGN), Felienne Hermans (FHS), Nicolò Ribaudo (NRO), Shane F Carr (SFC), Justin Ridgewell (JRL), Jack Works (JWK), Philipp Dunkel (PDL), Robin Ricard (RRD), Ben Newman (BN), Sergey Rubanov (SRV), Jordan Harband (JHD), Guilherme Hermeto (GHO), Robert Pamely (RPY), Edgar Barragan (EB), Mark Miller (MM), Hemanth HM (HHM), Aki (AKI), Daniel Rosenwasser (DRR)
Not present, but reviewed the notes: Istvan Sebestyen (IS)

## Housekeeping

### Adoption of the agenda

Adopted by consensus.

### Approval of minutes

Adopted by consensus.

### Next meeting

AKI: The meeting at PayPal in early June will be canceled, unfortunately. The meeting will be held remotely. The chairs will continue to work on managing remote plenaries going forward. There will be more discussion later in this meeting.

## Secretary’s Report

Presenter: Rob Palmer (RPR) in place of Istvan

- [slides](https://drive.google.com/open?id=1Orrdz7YMZIVmmy5IjKpDKLLk0egYFU9X)

RPR: (presents slides)

IS: Note: I am not sure if it came out that I requested the ExeCom (one of the last slides) that the approved 6,000 CHF for the Communication Seminar should also be permitted to use for TC39 for experimenting with online remote meeting functions, like “break-out rooms”, where I understood that a simple administrative solution would be good. I presented this to the ExeCom, but have not heard any reactions to it. Usually silence means agreement in standardization. The rest of the slides was like always, no major changes. Except, for the scenarios of possibility for going to letter ballots both on TC 39 and GA level. Which is ok too, does not really cause long delays.

## ECMA262 Status Updates

Presenter: Jordan Harband (JHD)

- [slides](https://docs.google.com/presentation/d/12IiE6RKYh3nTrP9CQurCDKizj629lQfMz8nBrodYlLw/edit?ts=5e729eb0#slide=id.gc6f73a04f_0_0)

JHD: (presents slides)

MLS: So are we going to vote before or after the opt out?

MBS: We need to finish the spec first.

JHD: We could just give the option to say “we’re comfortable with the spec modulo the normative PR that we need consensus on”, but we could also make that decision after we decide on that pull request

MLS: Last year we didn’t have an opt out period, we didn’t have the vote, which was the issue. I just want to know, my legal wants to know when the opt out period is so that they can look at stuff. I thought we did the opt out period in Feb, I’m fine that we vote contingent and then present to the GA in June. I just want to know how it works.

IS: This was different. We have just combined the TC39 approval in the Opt-out. So we had an opt-out especially knowing that some legal persons might be interested in it, but not a separate TC39 approval of the standards. This was brought up to the TC39 Management who contacted me on the matter. We both looked at it and agreed, that next year again we will have both a separate “opt-out” (which was the case in all past years) but also TC39 approval of the documents.

JHD: My recollection is that we have done it a number of different ways. In past years, not just last year, we’ve just assumed that nobody was going to opt-out as long as there would be a 2-month period for them to do so, and provisionally approved assuming there are no opt-outs. I was not led to belive it would make a big difference.

KG: For this meeting, can we just say that we’ll address this last normative PR that’s outstanding (hopefully today), and then the editors will approve the last few editorial things, and then tonight cut it, and tomorrow we can say "is everyone ok beginning the opt-out period now"?

JHD: I’ll post tonight a rendered version of the PDF. It won’t matter what is in master.

KG: And then tomorrow we’ll just return and ask if it’s okay to begin the opt-out period now.

MBS: Would it make sense to make a tag or a branch for a release candidate rather than leaving master frozen?

JHD: That is the yearly procedure. There is already an es2020 branch that I will be updating tonight. As soon as that branch is cut, master is no longer 2020, it is 2021.

MBS: It seems like the current plan is to reach consensus on that single normative change, and then for us to have a quick vote as a group on it, and then begin the opt-out period of 2 months beginning as early as today.

JHD: Yep

IS: Just as reminder. Editorial changes (inc. error spotting) are possible until we publish the ECMAScript2020 Edition.

## TC39-TG2 Status Updates

Presenter: Shane F. Carr (SFC)

- [slides](https://docs.google.com/presentation/d/1dom5pbjy-6vqKzOqwhEmW0OSo0y3NnKV-3rWoili7cM/edit?usp=sharing)

SFC: (presents slides)

No remarks.

## ECMA-402 7th Edition (2020) RC Cut

Presenter: Leo Balter (LEO)

- [slides](https://drive.google.com/file/d/1z3v23piIHSBxZnQhbR2bvYNuuzYqDvER/view?usp=sharing)

LEO: (presents slides)

LEO: Any volunteers for 2021 Editorship?

SFC: I just wanted to say that LEO has been doing an excellent job being editor of 402. We have a really high quality document coming for 2020. Whoever wants to get involved will have a great mentor. I am grateful for the work LEO has been doing over the last year.

MBS: Maye one of the other chairs can handle the vote? Do we have to go through each member company and gather the votes or just do a call for objections?

BT: In the past we go to the member companies.

MBS: We can do it based on the doodle?

BT: That is also possible.

MLS: One member company, one vote.

MBS: Yes.

AKI: If you are unfamiliar with this and you are the only one in your org don’t sweat it.

BT: MBS can you do a roll call of companies?

Member Companies:

- Facebook (Aakash Patel): Yes
- Google (WH): Yes
- Hitachi: does not participate in TC39
- IBM: not on call
- Intel: not on call
- Konica-Minolta: not on call
- Microsoft (BT): Yes
- PayPal (AKI): Yes
- Stripe (POK): Yes
- Airbnb: not on call
- Alibaba: not on call
- Apple (MLS): Yes
- Bloomberg (API): Yes
- Canon: not on call
- Dell Technologies: not on call
- F5 Networks (KG): Yes
- GoDaddy (BFS): Yes
- HP: does not participate in TC39
- Huawei: not on call
- Netflix (GHO): Yes
- Salesforce (CP): Yes
- Sony Interactive Entertainment (RKG): Yes
- 360 Technology Group: not on call
- Evernote: not on call
- Head Acoustics: not on call
- Igalia (CLA): Yes
- Meteor Development Group (aka Apollo, BN): Yes
- Agoric (CM): Yes
- Bocoup (RW): Yes
- MetaMask: not on call
- Moddable (PHE): Yes
- Sujitech (JWK): Yes
- Tilde: not on call
- Mozilla (YSV): Yes
- OpenJS Foundation (GCL): Yes
- Leiden University (FHS): Yes

Vote passes.

MBS: Can NFPs vote?

GMS: It says on the page for a specific company.

WH: Ecma voting rules are only for GA. NFPs can vote at the TC level.

MBS: With that in mind, the only NFPs from this list present here are Mozilla and the OpenJS Foundation. I’ll call them and then make a general call for other NFPs.

LEO: Thanks! With the passing votes I’ll communicate the result to Ecma. I already sent the RC to them.

## Test262 Status Updates

Presenter: Rick Waldron (RW)

RW: (presents without slides)

- 188 Commits since Feb 1, 2020
- Clearing the PR Queue
- Regular triage, next major task is to triage all of the issues by end of Q2
- 'OptionalChain'.PrivateIdentifier tests pending in the queue
- WeakRefs FinalizationRegistry API changes implemented in tests
- import.meta is well tested
- Promise.any & AggregateError is well tested
- Logical Assignment Operators are well tested (tests arrived overnight!)
- Atomics.waitAsync tests are in progress, some testing is blocked by an issue we'll discuss at this meeting.
- Updates and new tests for changes to Revocable Proxies, per a "needs consensus" spec change
- Using Gus Caplan's Engine262 coverage reports to identify missing coverage

RW: Any questions?

(silence)

## Updates from Coc Committee

Presenter: Myles Borins (MBS)

MBS: We have begun cancelling the meetings when there is nothing to discuss. You all have been so well-behaved for the last few months, the committee has not met since the last meeting.

AKI: There have been no concerns brought to our attention.

## Generically forbid extensions of all 402 methods

Presenter: Ross Kirsling (RKG)

- [PR](https://github.com/tc39/ecma262/pull/1920)

RKG: (presents PR)

RKG: Any objections?

(silence)

MBS: Hearing no objections, we have consensus for this to land.

### Conclusion/Resolution

- Consensus to land

## Aligning atomics with wasm: allow it on non-shared ArrayBuffers

Presenter: Shu-yu Guo (SYG)

- [PR](https://github.com/tc39/ecma262/pull/1908)
- [slides](https://docs.google.com/presentation/d/1XbYYB-V08H4Wk41cPtxITInqgxFI03WZIsj5airUqkI/edit?usp=sharing)

SYG: (presents slides, PR)

SYG: Are there any objections to extending Atomics to work in the specified way with ArrayBuffers except for Atomics.wait which will ???
Request to SYG to fill in the end of the request there

MM: You enumerated two parts, the remaining question is, without concurrency, if I have a SAB and an AB, what are the observable differences between the two?

SYG: The setup here is you still only have a single agent. Except in one case you have an unshared SAB, and in the other you have a normal AB.

MM: That is exactly my question.

SYG: Other than Atomics.wait and notify differences, I would have to think through it some more. They should be mostly the same. I can’t exactly know for sure right now if the event model has some subtlety in the event model. Are you doing other things to the SAB or are you only using Atomics on it?

MM: Other things as well. In that case is there an observable difference?

SYG: You're opting into the event semantics even though you only have a single thread.
I’d have to work through it to see if we allow any additional optimizations, but it seems like we should not.

MM: Ok. I’m happy with this but would like clarity on that question.

SYG: Ok.

RW: I understand the changes to the non wait/notify operations. i just want to make sure i understand you want to change that to return 0 and not throw?

SYG: That is correct. `notify` on ABs is relaxed to always return 0. The only thing that continues to throw is wait.

RW: Thank you.

WH: In the SAB atomics do we have any place which can create spurious failures?

SYG: What do you mean by spurious failures?

WH: In most memory models some atomic operations e.g. compareExchange, can fail even if they would have returned true. Do we have anything like that in our shared array buffers mathematics? Another common example of that is sometimes a tryLock on a free mutex can fail.

SYG: I don’t think spurious failures are explicitly called out in the spec. I’m not sure how you would observe the “even if it would have been true” part.

WH: A lot of memory models allow spurious failures. I don’t believe we allow them in ECMAScript but just wanted to double-check in the context of this proposal.

SYG: Spurious wakes are possibly allowed, but that doesn’t apply to this PR.

WH: Ok.

KM: How is it observable? I don’t know how you observe the failed exchange.

WH: For example in C++, you have compareExchangeWeak/Strong. For the weak variant, even if the value is equal then it allows the implementation to occasionally say no it thinks it's not.

SYG: We do not have the weak variant in ECMAScript.

WH: Same for tryLock, which has the semantics of acquiring the lock if it's not already taken, but can also fail even if the lock isn't taken. It sounds like a non-issue for this proposal.

KG: At least for that one, just reading through the spec quickly, there has to be a specific point in time at which the value it’s returning makes sense.

WH: I like this proposal. Not sure about the details of what Notify should do.

SYG: WH, I would appreciate your review, MM as well. I’m not in a hurry to ship this.

WH: Ping me by email.

SYG: Sure. Moving on the queue.

JRL: How does WASM handle Atomics.wait on non-shared ABs?

SYG: I think what a trap does… is dependent on the host and on the JS host it's to throw an exception.

BFS: I do know in the browser you have [[CanWait]] on agents set to false for the main thread. To prevent waiting on the main thread. But in other environments like node, we see people using Atomics.wait as a sleep operation without spin-locking. You should call out that that behavior is an error and that the use cases allowed differs between shared and non-shared array buffers.

SYG: I’ll be happy to add a non-normative note.

RW: (On the Atomics.notify change) Could you just recap why that particular change is necessary?

SYG: The inference chain is something like: because we don’t want single threaded programs to deadlock themselves, Atomics.notify services no purpose. There’s no way - how would you spec it if it’s not possible to put the thread to sleep? The assumption becomes there are always zero sleepers, and so if there are always zero sleepers then you just always return zero.

RW: With a regular AB?

SYG: Yes.

RW: So I don’t understand why we would change it from its existing behavior which is to throw on a regular AB.

SYG: I don’t recall why WASM decided to do that. Given that the motivation is to allow as much of it to be useful with regular ABs as possible, it’s not coherent. There was no harm in preventing it from throwing.

RW: I could see a world in which - we’re talking about generated code, right?

SYG: For WASM, the motivation is that I don’t want to generate two binaries - one with shared memory and one with non-shared memory. But for this it’s not a codegen issue. The idea is if I’m implementing syscalls in JS that rely on WASM (???), I don’t want to ship two versions of my syscall, one each for shared and non-shared memory.

RW: So there is this hypothetical scenario where you have a piece of code; If I have a flag in this build that says “I’m building for this particular platform where I will have worker agents running with waiters on them, but ???”

SYG: From the codegen point of view, there’s no reason to require separate codegen here, whereas for wait it’s just not .?? That was Thomas’ motivation.

RW: Works for me.

### Conclusion/Resolution

- No objections, consensus on the PR.

## PSA: Chrome freezing release train

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/119Pdby2Z45ClYSqQIAQ0vK-24EYaxLOTIRBb6YWZCfs/edit?usp=sharing)

SYG: (presents slides)

LEO: I appreciate the strategy from Chrome. Thanks for reporting this. I think it’s really thoughtful, and as a web developer I appreciate it a lot.

## Surrogate pairs in RegExp capture groups

Presenter: Kevin Gibbons (KG)

- [PR](https://github.com/tc39/ecma262/pull/1869)
- [slides](https://docs.google.com/presentation/d/1pKvUGkTcS5YkCqhJAlr093twy0RKtEmdoN6AGvpbP3Q/edit?usp=sharing)

KG: (presents slides)

WH: You mentioned that the spec contains some missing production. Can you be more specific?

KG: Specifically says that it is an early error if the SV of the capture group is not an identifier or not IdentifierStart, It refers to the SV of this capturing group name production, but that operation is not defined. It's linked in the PR.

WH: The spec grammar isn’t missing any productions.

KG: All of the grammar productions exist. There's a reference to a syntax-directed operation that is used in an early error. That syntax-directed operation does not exist.

WH: I can take a good guess as to why it’s there. It’s the same in the identifier grammar. The idea is to prevent creating identifiers that contain things like spaces or nulls.

MPC: Is the spec coherent about the other two ways about writing the code point? Is it incoherent about all three, or just the surrogate pairs?

KG: It is incoherent about all of them. The reason why I am presenting this as the only place: This is the place where unicode regexes disagree with identifiers on how things work. In Unicode regexes, the two surrogate pairs are equal to the long form all of the time.
The two surrogate halves is the place where it seems like the intent was not clear.

MF: Why do we care that they are identifier names?

KG: /shrug This PR doesn't propose to change that.

MF: So can we just treat them as an arbitrary string?

DE: I was involved in making this decision. I thought it would make sense to have this kind of parity. I was looking at the thread where we made this decision. A couple people said that lets let them be anything. I felt like it would be more consistent to have them as identifiers, and reuse part of the grammar. I was confident in my ability to reuse and reduce complexity. I would be open to reversing this.

MF: I would have the opinion that I would not want them to have to be identifier names but if we do keep them it would match how we handle identifiers in other cases.

MB: I wanted to reiterate my preference that the smallest possible change at this point would be to match Identifiers, which would ban individually-escaped surrogate halves. You want parity between the legal names and being able to write `match.groups.foo`. I'd prefer making `/(?<\uD835\uDC9C>.)/u` remain illegal, since group names are thought of as IdentifierNames, and because `var \uD835\uDC9C` or `groups.\uD835\uDC9C` aren't valid either.

JRL: Why on earth do we allow the joined unicode here. If we want to use a fancy A as an identifier name, you can use that. Having two crazy Unicode escapes makes no sense. I have no preference on allowing this or disallowing this, but I just hate the syntax overall.

KG: People wanted to write the fancy thing, but have it encoded as an ASCII thing, so that it can be transported over the while. Encoding is hard, there is an advantage in being able to express your program in ASCII.

GCL: We sometimes have trouble building node.js core on systems with unicode in the source code.

SFC: From the perspective of Mark Davis and others on the Unicode Consortium, surrogate pair syntax is sort of seen as a historic artifact and is not something we want to continue to propagate. The newer syntax with the curly braces is more modern and reflects more the intent - having these two separate code units ties the identifier strictly to UTF-16, which is not what Identifiers are. It makes no sense when you’re not in a string context to have surrogate pairs, because then you could have unpaired surrogates, illegal surrogate sequences; it opens up a whole can of worms. UTF-16 is what JavaScript uses for string encoding, and if we were reinventing the language we may have chosen something else, but it’s what we have. We shouldn’t let the UTF-16 stuff trickle into other parts of the language when we have a choice.

WH: I strongly feel that both of these should be legal. Suppose your mission, should you choose to accept it, is to write something which takes regular expressions stored as ECMAScript strings and escape them so that they only consist of ASCII but do the same thing. If you do not make this production legal, there is no way to do this. If you make this legal, it is easy to write such an ASCII-fier.

MB: Can you use the `\u{}` production instead?

WH: No, because of backwards compatibility, in regexps that matches the literal brace followed by the digits.

MB: Right, or the raw character ‘u’ repeated n times if the code point is all digits. But we could make that work within named capture groups within non-u RegExps.

WH: The only way to ASCII-fy it is `\u` with two surrogates.

MB: Sure, but this applies only to non-unicode regular expressions.

WH: I don’t care. The ASCII-fier needs to ASCII-ify a regular expression given to you as a string - you don’t know if it’s being used as a unicode regular expression or not.

KG: I don’t have strong opinions on whether they should be legal, but I would sure like them to agree.

RPR: We’re past time. Shall we return to this?

KG: I was hoping to get through this today, so that we can get it fixed for ES2020.

RPR: In that case, let’s do another 10 minutes if this is an ES2020 blocker. But that’s it.

RBN: I would like to state that I am opposed to non-identifier names being disallowed here, I am drafting some regular expression proposals that take reference from C# regex syntax. Allowing regular expressions to have ordinal-based names (....?)

RGN: It should be possible to express any ES program with ascii, if you don’t support surrogate pairs for group names, then it is not possible.

KG: Why? I get that it is hard, you need to parse the regex. Because the script A appears outside a capture group name or as the \u version inside a capture group name

RGN: You cannot use the braces syntax in a non-unicode regular expression to represent the code name.

KG: In an identifier name? Or in a named capture group name in particular?

RGN: Correct.

KG: Why?

RGN: Because non-unicode capture group names apply the (...?)

KG: They don’t in general, capture group names are their own production.

RGN: I would be opposed to that due to its inconsistency.

WH: Yeah, that would be super weird.

KG: That is the behavior browsers currently implement, where the \u{} syntax is illegal in non-unicode regular expressions and legal in unicode regular expressions.

RGN: (referring to slide titled Browsers (Safari. Chrome)) I actually don't care if it's treated as valid or not, but I do care that it doesn not have a result equivalent to the third bullet point

…

KG: I suspect that it's exactly what is going on, because if it's not a valid identifier name it would be rejected.

KG: That seems quite plausible.

RGN: And I’m ok with that semantic.

KG: Ok.

RGN: the only way to express a capture group whose name is not in the basic multilingual plane, the pair escapes.

KG: Even inside of a capture group name?

RGN: Even inside of a capture group name.

JRL: I don’t see why if you are trying to identify it we can’t allow it on the current slide. We can just parse this as an identifier. We can disallow and make it the exact same as for plain var identifiers.

KG: Yes, although we have heard people say they dislike the inconsistency with the `\u{}` being different in non-unicode regexes based on whether they appear in or outside of the capture group name.

WH: I don’t see what you gain by disallowing the `\u` surrogates. They are allowed everywhere else in a non-unicode regular expression.

KG: They do expect unicode regular expressions.

MB: What you gain is symmetry between `match.groups.whatever` and the capture group name.

WH: There are lots of things you can do in a regex that you cannot do in other source code.

MB: Sure, I’m saying we should prioritize the common case where if you’re using a capture group name, you’re using it with `match.groups.something`. That’s going to show up in most code people write when they’re using named capture groups. There’s going to be an inconsistency either way, and we have to pick which inconsistency we want, and I think we should prioritize this consistency of the common case.

WH: I feel it’s much more important that regular expressions are internally consistent than consistent with the rest of the language.

MLS: The identifier you expressed in the regex needs to be the same way you do in the source language.

WH: Those identifiers evaluate to a string. You can always access the properties using square brackets and a quoted string. How you specify identifiers in ES has nothing to do with regular expressions.

MB: I know you can do that. My claim is that you don’t want to do that.

KG: I don’t think that anyone is going to write this. I agree with WH and RGN, tools will want to output this. It makes sense to prioritize the tools, which means making it legal. The humans reading the source code will have just written the actual script A, both in the capture group name and in the `match.groups.whatever` part, and the tooling is responsible for making the two equivalent.

MB: I can see that argument. My thinking is that unicode regex are the way to go, and I consider non-unicode regex a legacy feature. Here we are making a questionable change, exposing the concept of surrogates in more places, just to support non-unicode regex.

WH: All I care is that the tools work.

BFS: JavaScript supports a lot of legacy features probably indefinitely. We have gone out of our way to make sure new features align with specific preferences/styles and stuff like that. I haven’t really heard anything here where if somebody were to manually type out the two surrogate pairs that it would produce something unexpected. Did I miss something or are we arguing about this like semicolons, where we would like to have an opinion but we can’t reach consensus?

KG: I don’t think there is a case where it would produce something unexpected.

BFS: I don’t think this differs from any time we’ve carried legacy forward.

KG: Timebox check?

RPR: We have to wrap this up.

KG: I would like to ask if there is consensus on making both of these legal: people have expressed opinions for both sides, but I would like to decide on one side.

MB: I don’t want to block.

KG: Anyone other than SFC that would like to discuss more?

JHD: Legal only in unicode regular expressions?

KG: Legal in both.

WH: Has to be both.

JHD: It has to be a u.

KG: No, in both cases.

DE: Let's hear SFC's concern.

SFC: I disagree with WH about regexes being consistent within themselves. I see the things within the angle braces to be in a different context, like `${...}`. There is no reason that what comes inside <...> should follow the same rules as other parts of the regular expression. I would expect it to be the exact same syntax as an Identifier, and it seems weird to me that we would be inventing something new here.

SFC: The concern is that we have to be able to represent an arbitrary file as ASCII.

WH: That’s not what I said.

SFC: You need to be able to encode a file as ASCII.

WH: No, that’s not what I said.

SFC: I’ll proceed to ask my question. Do we allow the literal unpaired surrogate as an identifier in a code file?

KG: No.

WH: No, but there is a way to ASCII-fy it.

KG: The answer to your question is no, that is not legal, you cannot have an unpaired surrogate anywhere in an identifier.

RPR: We’ve now gone half an hour over.

SFC: I don’t understand why it’s necessary to allow this.

AKI: We’ll have to come back to it.

KG: We could decide to leave the spec incoherent, it wouldn’t be ideal but we could decide to do that.

WH: We should resolve this before ES2020. This is a blocker.

DE: Was this in ES2019?

KG: Yes, this was incoherent in ES2019.

MB: Even in ES2018.

SYG: We planned to hold the contingent vote for the final cut for the Apple lawyers. I’d rather we reached a more stable footing for what that final cut is before the end of the day Thursday. Given the contention of the issue, and the status quo of it being incoherent for two years.

KG: There is a web incompat.

WH: We need to resolve this today. This is higher priority than other items on the agenda.

DE: I’m not convinced by this prioritization. We operate in a mode with a spec draft. We should work on resolving this, but I don’t agree that this is higher priority than anything else on the agenda.

WH: This is blocking the 2020 release. We need time to draft the resolution and review it, and I’d like to get the 2020 release by the end of this week’s meeting.

DE: I agree that the 2020 release is high priority, but we can continue to resolve this for 2021.

KG: Let’s come back in an hour and follow up with SFC in the meantime.

### Conclusion/Resolution

- Return to this discussion later.
- This is blocking ES2020.

## Make SharedArrayBuffer optional

Presenter: Shu-yu Guo (SYG)

- [PR](https://github.com/tc39/ecma262/pull/1903)
- [slides](https://docs.google.com/presentation/d/1kDyGa6XDjnXe8njIJBBdt1-LeqeMLgVyO0eEhIv4EPo/edit?usp=sharing)

SYG: (presents slides)

SYG: Do we have consensus for SharedArrayBuffer Optionality?

KG: The wording is that Hosts are free to omit the global property SharedArrayBuffer in contexts where they do not make… I forget the exact wording, but make them synchronously available or something.

SYG: Are there any concerns to allowing implementations to still be compliant?
You can consider it as: if you don’t have the headers (…?)

MM: Is the form of optionality here the same concept that we have been calling “normative optional”?

SYG: I do not know what normative optional means.

MM: If the property exists, then it must obey the spec, but the property is free not to exist.

SYG: In this case, it’s saying something stronger than that. The constructor is still accessible via the code snippet I showed in the slides.

MM: WebAssembly doesn’t necessarily exist in every JavaScript, it does not exist in XS.

SYG: I see. For XS, the only optionality this allows is the global property. If you can get the constructor by another host mechanism, such as WebAssembly, then the SAB must conform to the spec. I think that it's the same as what you are saying about optional properties in the spec.

MM: And if the global variable SAB is present, then it must be a conformant SAB.

SYG: Correct. The optionality is not like “you can make it something else”.

MM: I like this, I agree, just want to make sure that as we go forward with the phrasing, that we ensure uniformity in this normative optional versus other normative optional things.

SYG: That sounds good, and to clarify the language here specifically calls out SAB, it’s not a general framework for other properties.

BFS: There was a discussion on WASM.Memory having different semantics from SAB constructor itself. I was wondering if that means we should find a way to expose the actual SAB constructor somewhere else or?

SYG: That it's what that code does. It doesn't create or use that memory, but just gets the constructor.

BFS: The discussion I’m trying to find is that there was a different amount of reserve memory when using wasm to resize buffers than in javascript. But if we can ensure it acts exactly like the SAB constructor, it would be good to note that. Otherwise we may want to do something to expose the constructor.

SYG: My understanding that .buffer.constructor from WebAssembly memory is the SharedArrayBuffer constructor.

BFS: Ok, then I don’t think we need to do anything.

SYG: The thing to remember is that it’s memory allocated by the wasm.memory constructor (?)

BFS: Correct.

LEO: I don’t have any objections. Instead of the PR describing optional, it seems like it is conditional. I’m OK if it is actually conditional or optional, but I want clarification if we are going for optional.

SYG: I don’t have too strong an opinion here, I think I prefer to use the word ‘optional’

LEO: If you prefer optional, the phrasing is not referring to optional, but instead conditional.

KG: It is optional if they can’t provide cross-thread access. The host has a choice in that scenario.

MM: I object to that. I think it should simply be “optional”.

LEO: I would be more comfortable with it just being generically optional.

MM: I’d like it to be aligned with other things in the spec that are stated to be normatively optional, and using the word ‘optional’ is a good step towards that.

JHD: MM, are you wanting it to be optional because of Spectre vulns, or optional anyway?

MM: I want it to be optional anyway.

JHD: Why wasn't this raised during the advancement of the proposal?

MM: It was an oversight during the original fight, which was about whether or not to add it at all. WH, to his credit, warned us about adding a high-resolution timer to the spec before we even knew about Meltdown and Spectre.

JHD: The reason I am asking: there are two concerns here. The PR is to deal with web reality, so that the web doesn’t have a willful violation; it seems like you are wanting to widen that change?

MM: There are two separate concerns, but I think that they are both satisfied by one proposal (we don't need to split it in two separate proposals). I’ll state my concern which I didn’t have clearly back then: when running JavaScript in non-concurrent contexts, the SAB could exist in a system that didn’t support concurrency, but the thing that the web discovered seems to me to be good, which is to enable feature detection by checking for the existence of the property, such that checking for the existence of the property is effectively a check for the presence of concurrency. I just want to clearly state that it’s a host choice, and there are multiple purposes served by making it optional.

SYG: In practice, this is really a spec lawyering question. In practice if we say that the optionality is contingent then any hosts can say that they don’t provide the contingent thing (i.e. concurrent access). In practice, you could make an argument for Mark's case because it makes the language simpler: simpler optionality already covers the contingent-on-concurrent-access version. It also solves the web compat concern.

MM: That is perfectly fair.

JHD: That makes sense to me. I wonder though, (stop me if this is spec lawyering), if the concern is about giving the hosts the ability to decide when to provide concurrent access, is SAB the only thing we want to be optional? Should hosts provide Atomics in that scenario, for example?

MM: One of the things I had in mind when I asked my question about observable equivalence between ArrayBuffer and SAB in non concurrent contexts: given that they are observably equivalent, I don't think this API is contentious.

SYG: Given my earlier presentation about not wanting to ship multiple versions/codepaths for things that can remain the same with Atomics. There is no reason we need to unship SAB either, this is a webcompat concern. Because postMessage or whatever host things are there, given that those have to be independently gated, it would be less confusing for the host to decide, but I don’t think it should be a technical argument, just a preference.

JHD: That answers my questions, thank you.

SYG: MM, on the longer time horizon, a couple of years, once folks switch to feature detection using site isolation detection, we might want to turn SAB back on. It sounds like your concern is to preclude a future where we say it must be available everywhere, by making it strictly optional. (To be clear, it doesn’t preclude that future for any particular host since the optionality gives hosts the right but not the obligation to provide or delete the property.)

MM: To make it a permanent option, the ability to use it for feature detection for contexts like blockchain where origin is nonsense anyway. It is used for feature detection for concurrency.

SYG: That sounds fine to me, in that it doesn't preclude anything the web platform might want to do in the future with SABs.

MM: Great.

SYG: Are there any objections to strictly optional? Again it’s just for the SAB global property. The optionality does not imply that if the host does not want to provide the global property, it must also not provide WebAssembly.Memory.

PHE: I wanted to add a voice in support of making this optional: MM said the blockchain case, but in embedded JavaScript there are plenty of scenarios where SABs don't make any sense. Making it optional is great for us in terms of code size and complexity.

### Conclusion/Resolution

- Consensus is to make the global property SharedArrayBuffer strictly optional for the host, without contingencies.

## Add support for 'OptionalChain'.PrivateIdentifier in class features proposals

Presenter: Caio Lima (CLA)

- [PR](https://github.com/tc39/proposal-class-fields/pull/301)
- [slides](https://docs.google.com/presentation/d/1QxnawLOMxjvXo7nHzjP33E2lMP2f9LC7ywEWKUUoyHs/edit?usp=sharing)

CLA: (presents slides)

CLA: Do we have consensus on the “class C” slide here?

JRL: This first part, class C should be allowed. I am also in support for class D syntax where you have a private identifier with optional chain syntax.

CLA: The plan is to discuss that just after we get consensus on this question. If you would like we can just move on and ask consensus later for both of them.

JRL: That would be my preference.

CLA: (continues to present slides)

CLA: Do we have consensus support for o?.#field?

WH: This looks like an artifact of the proposal system where we have multiple proposals that interact — essentially a merge conflict between the private fields and optional chaining proposals. The merge conflict resolution seems pretty obvious — allow private fields in both kinds of optional chaining expressions here.

DRR: Same as WH, the idea was to have one proposal not block the other, we just wanted them not to conflict, it always seemed obvious that you can implement it. I think it was intentional to decouple, because there was always a path forward.

DE: People keep talking about this as an accidental merge conflict; it’s not accidental, just a difference of opinion and maybe not good communication. The omission was deliberate not just because the proposal wasn’t there, but because I didn’t want to support it. Now that there has been much more discussion, I’m not sure there’s much of a reason to not support it.

WH: If this omission was deliberate, that was not clear.

DE: It is apparent that I didn’t do a good job communicating this.

DRR: On the optional chaining side it was intentional to allow it to be handled on the private identifier side.

DE: Right.

DRR: I didn’t know that actually.

MM: Can you go back to the slide that shows both class C and class D?

MM: Class C, you said to see the proposal for the semantics, please state the semantics that class C would have, if by showing a concrete rewrite, that would be great. And for class D, you showed two bullets with semantics; I agree with the second bullet, so class D is in good shape.

JHD: This is relevant to my queue topic. The semantics of o?.anything, if o is non-nullish, return the rest of the chain.

MM: Maybe I’m confused about the semantics of optional chaining, what is the semantics of o?.c.f;

JHD: If o is nullish, undefined, otherwise it returns o.c.#f.

MM: If c.#f is also optional, then you don’t have to say ? again.

JRL: You’re talking about two separate things here. The `#f` thing can be short-circuited, but that does not make it optional. In this case if we delete that `#` in `#f` it stays short-circuited, but that does not make it optional. `o` is optional, and if o is not null, the `.c.#f` or `.c.f` still has to be evaluated.

MM: I am in favor of making both C and D legal with the stated semantics, and for D the ones stated by the second bullet.

JHD: The class C version should obviously be allowed, anything you can do in a chain can follow an optional chaining operator. If you can do it without the question mark, you can do it with the question mark. Class D, should also be obvious, anything you can do in a chain, you can optionally do in a chain, because we added optional chaining. It's a bug to not allow class C, and it’s a massive inconsistency to not allow class D, even if by design.

GCL: I don’t like that private identifiers throw if they don’t exist. The semantics of optional chaining don’t care about what the property access is, only what the receiver is. I don’t see the reason why either of these would be restricted, because it’s just the normal thing as the receiver.

WH: Yep.

JHD: (thumbs up on camera)

RPR: The queue is empty.

CLA: Do we have consensus on adding both class C and D syntax?

MM: With the second bullet semantics?

CLA: Yes.

(silence)

### Conclusion/Resolution

- Consensus for both syntax forms
- `o?.#f` still throws if `o` is a non-null/undefined object and`#f` is not present.

## Process: require public repo for stage 1

Presenter: Jordan Harband (JHD)

- [issue](https://github.com/tc39/agendas/issues/722)
- [PR](https://github.com/tc39/process-document/pull/26)

JHD: (presents PR)

JHD: Consensus on merging the PR?

MM: The convention that I have been following is that until we are at stage 1 we make a repository not in the tc39 org, and put a link to the non-tc39 repo in the agenda.

JHD: That would remain the case.

MM: Having it be under tc39 once it achieves stage 1 is not the question I’m asking - the question is before achieving stage 1.

JHD: I don’t think anyone is proposing that and that seems like a big process blocker. Rather, we can just require a repository that can be transferred to tc39 once achieving stage 1.

MM: I’m happy either way.

GMS: I didn’t read the details of the proposal, but I would feel best if the advancement requirements also included a consistent structure in the repository README/file structure.

JHD: My reaction to that is that we have a convention for such things, people are opinionated. The amount of time we would spend bikeshedding that would not be valuable. If they have a README, …?

GMS: I’m fine with that at this point. But it would be nice if we could make a consistent machine readable format.

JHD: I would welcome the actual spec getting to that point before proposal repos. There is a template that is not a requirement but many proposals have used it.

HHM: We have proposals template repo, that can be cloned.

JHD: Do you want to discuss more?

WH: Why does this need to be a GitHub repository before stage 1? When I requested this, all I wanted was a document somewhere explaining what a proposal is at least 10 days before the meeting.

YSV: It was exactly what you just described that makes me think we need a requirement. We could say that this could be a document anywhere but this could be difficult for newcomers to the committee, it would be difficult to make it reviewable. Proposals have a template, that is the benefit of them. There isn’t any particular benefit specific to repos.

JHD: The other reason is that the discussion that happens in those 10 days leading up to the meeting needs to be archival, and GitHub gives us that. All the discussion about a proposal should happen in a place where they can be stored.

WH: I would understand your point if it were a repo we controlled, if it is a repo that can be deleted then it doesn’t hold.

JHD: If the proposal is not going to advance, then we don’t need that material, because the notes would be sufficient.

JRL: Having a public repo allows you to open issues and discussion. Having a public discussion beforehand, a document is hard to comment on. Having a repo seems like a very small bar to allow all of this to happen.

MPC: I want to strongly voice support for YSV’s point about ease of access as a newcomer.

LEO: I am strongly in favor of maintaining consistency. If every proposal is to become a repo, I would like it to be enforced at the beginning. It shows preparation before presenting to TC39. I am in favor of it.

HHM: Should the proposal repo be on github, or somewhere else? If it is not on github, where should it be?

JHD: I think GitHub is the only place that makes sense because everything is on GitHub, and the repo needs to be easily transferable to the tc39 org upon stage 1.

LEO: One of the things mentioned is the process template. I believe GitHub does have some useful actions to transform a template repo into an actual one we can reuse.

JHD: The template repo has a big green button that says “use this template”.

LEO: I am also in favor of having a link in the process document to the template, if not mandatory make it optional. I believe it is good to have it featured there.

GMS: If there is no requirement for the exact structure, then at least some mandatory information must exist. Even if it’s just a title or a description.

JHD: At the moment, anyone can reasonably object that there wasn’t the proper material. It seems useful to more explicitly document what is needed.

RBN: I just wanted to mention that though it might be slightly out of date, I created a yeoman generator for creating ES proposals that allows you to pick and choose what parts you want (e.g. syntax, API, etc). Perhaps we want to continue discussion and/or work on this.

JHD: Do we have a consensus to make a repo somewhere on GH a requirement? And then the rest of these ideas taken up separately?

(silence)

### Conclusion/Resolution

- Consensus reached to require public repos for stage 1 proposals.

## TypedArray stride parameter for Stage 2

Presenter: Shu-yu Guo (SYG)

- [proposal](https://tc39.es/proposal-typedarray-stride/)
- [slides](https://docs.google.com/presentation/d/1TtkFgkPy5XdtIVGv8DceeEWUt--W9ZzOmU20wfDehXw/edit?usp=sharing)

SYG: (presents slides)

WH: Looks fine, I’m curious if there are any overflow concerns. I assume that the multiplication in the spec text uses arbitrary precision integer arithmetic.

SYG: That is correct.

WH: People can mess with it by making absurdly large strides and look for corner cases in the various spec’d algorithms.

SYG: That is a good concern that stage 3 reviewers and myself should ensure that we don’t spec bugs in the corner cases.

YSV: We have a couple of concerns about the use cases implementing only the stride parameter. It's why I asked the question about length, because I had reviewed the proposal with our graphics team. Their perspective is that stride without a size parameter doesn’t make sense, it’s partial for a graphics use case. If you are trying to do image processing, and there is padding on the image, and there are a certain number of characters in the buffer for RGBA then you want to do the stride and then a size of four, and then stride again. Without that, it doesn't seem as useful as it could be for the graphics case. They also raised interleaved webgl as another case where the way ABs work now would be insufficient. So we're a bit uncomfortable with this moving forward. The other thing that we talked about is performance since it would impact on our jit.

We are curious how Chrome is going to address this.

SYG: The size one sounds like a good concern that we should work through. If it does not address a common graphics use case it should be held . I didn’t quite understand the second of the two concerns you brought up.

YSV: There's another use case brought up by the graphics team, which is interleaved WebGL vertices. If you have a secondary data structure that you’re trying to get a view into, with this proposal you would need 9 views, as opposed to 2 or 3 views. I think the issue #8 on the repo explains it better than I can.

SYG: That sounds good. I will review those issues and work through those. As for the JIT concerns, what exactly are Firefox’s JIT concerns here? That you would need to track the exact instance of the TypedArray to get the stride out to it?

YSV: The stride parameter will have influence on the JIT because accessing an index of a TypedArray currently calculates index *byte size where (index & bite size ???). With this proposal, it would need to become index* stride * typedArray.byteSize. We would not be able to use the constant as it exists now.

SYG: You already need to save the offset of the TypeArray somewhere.

YSV: This is also in an area I am not sure about. It looks like slide impacts us more greatly than offset does. The solution we discussed is to do this in self hosted code, or do this to the type. We'd have a fast path which doesn't have stride, and a slow path that does include stride.

SYG: I’d like to better understand why byte offset is better than stride.

YSV: I’ll echo that to the team. We have an issue on the repo. We were thinking that probably you folks were already looking at this and probably have a solution in mind. This is probably more solvable without significant changes to the api than the other issue that I brought up about the API.

YSV: I’ll get that answer for you.

KM: Seems like it doesn’t cover a lot of cases, at least from the graphics people on webkit. The simplest one is like you have an RGBA, you only want to iterate RGB values, you would need to have three views here and make sure you iterate each one in successive order. You are better off writing a function. As far as JIT concerns, it’s not so much a concern of being not implementable, just that it would be a lot of work to thread this through the entire engine because of the way it's all built around the existence of a TypedArray now. It’s all a simple matter of programming, but it is a lot of work for something that isn’t overwhelmingly useful if each of the cases is specific to the particular data structure and there's not an obvious format to present it in without requiring users to write code anyway.

SYG: It’s a fair characterization of the first point. Usually how would you do this? You would make a struct in a C like language and overlay the array.

KM: Yeah, that’s probably how you would do it. And then you would say I want A, B, C...

SYG: It sounds like here is a case where we know a simple stride wouldn’t work, but in the usual environment where it comes up we have other tools that aren’t applicable here at all.

KM: Ergonomically, it wouldn’t be great for a graphics setting. One way would be to ???, but no one would want to do that because it causes allocations and you don’t want to do that on a graphics path.

SYG: My pushback is that it doesn’t solve all use cases including some which were never really solved by stride. The stride works for very simple types of data. I take the point that if most of your use cases do not use simple strides, then what’s the utility of the proposal?

KM: Yeah it’s a motivation question.

SYG: On the implementation...

KM: It would be very complex by the existing code. What I’ve heard from the other graphics team is that there would not be an overly significant value in their writing graphics code - it’s a super high implementation cost without much benefit. In terms of engineering cost in a performant way.

SYG: In a performance-neutral way to user code? Or in a more performant way with respect to user code?

KM: Equivalent performance in user code.

SYG: I see.

KM: That would be engineering time I'd rather use for e.g. making Proxies faster. I would guess it would be similar amount of time for both of us.

SYG: My take is that the graphics use case is not a good fit, it needs something like structs.

BFS: I use a library that we wrote that does have a large binary data structure that it compiles heap snapshots. At least for me, this would make things a lot more ergonomic - I juggle at least seven typed arrays. It is difficult to keep it all in track. It would at least help me to have an easy way to do an equivalent to the stride parameter, if not just the stride parameter itself. I have no desire to use this for graphics, but could totally use this today/tomorrow.

MM: I have a few clarifying questions. First, while I doubt a Proxy-based implementation will ever be performant or practical, it’s still the case that having a proxy-based shim that is observably equivalent to what is proposed would give everyone a chance to play with what is proposed and get a sense of how ergonomic the API is. Do you plan to make an observably equivalent shim, based on Proxies, to showcase the proposal?

SYG: Yes. Surma has written a proxy based polyfill that is currently available on the repo.

MM: Wonderful! Does the issue of a strided view of a strided view arise from this proposal?

SYG: No, because the only constructor that’s changing the stride, always takes a buffer directly.

MM: Finally, does it preserve the property that as long as you don’t directly access the buffer, then each successive view doesn’t give access to anything that the underlying view prevents from accessing?

SYG: There's no layering of views. You can only make a strided view from a buffer, not from a strided view. You can make a new strided view by pulling out the original view’s buffer.

MM: Ok, but you can make a non-strided view of a strided view, correct?

SYG: Yes

KM: when you get an array buffer you get the buffer, you lose the offset, presumably it would have the same semantics here.

MM: So under the assumption that you can make a non-strided view of a strided view, I would want this to preserve the property that the view of a view cannot give any more access to an underlying AB than the one the view is derived from.

SYG: I don’t know how to discuss that. I’m not sure that is possible today. I’m looking at the spec right now.

MM: Ok. If you don’t have the answer in real time we can table it. It should be answered.

SYG: I’m pretty sure that there is no TypedArray constructor today that lets you chain views in the way you are suggesting. All constructors make a new array and copies, the only one that takes a view takes a buffer. So you cannot chain views anyway.

MM: That answers my question.

KM: Once you get the buffer you can do whatever you want with it.

BFS: Do we have any concerns with non-power-of-2 strides? I would like non-power-of-2 strides but I know we have some memory alignment assertions… I don’t know of anything that would be problematic off the top of my head.

SYG: Stride here as proposed today is a multiple of the element size. It's not a byte size. So restricting to a power of 2 doesn't make sense here, if it's a multiple of the element size.
But it should be aligned - I shouldn’t let you read in a tearing way into an int32, you shouldn’t be able to read an int24 or something. But since it’s a multiple, that question doesn’t come up.

YSV: To answer the question regarding offsets, I got an answer from the team. The reason that offsets don't have such a significant cost on JITs is that we grab it out of the buffer at the beginning whereas strides affect array access.

SYG: I see. That is a good data point.

RPR: The queue is empty.

SYG: My take-away is that there is suspicion and concern around the graphics use-case. If it’s not a sufficiently expressive API to address many common graphics use-cases, is it still useful enough? There seems to be arguments for both sides. As for the implementability, the operative question is the one that KM raised; a lot of work needs to go into it to make it performance-neutral with user code, what's the price we're willing to pay for the convenience of it being built in? It sounds like we don't have consensus for Stage 2 today. It sounds like it’s not useful enough for the simple stride case.

### Conclusion/Resolution

- Not asking for Stage 2.

## import.meta for stage 4

Presenter: Gus Caplan (GCL) and Myles Borins (MBS)

- [PR](https://github.com/tc39/ecma262/pull/1892)
- [slides](https://docs.google.com/presentation/d/1dXono-H8VjmihAM9bel1RuPvHoSFOqRZ-WprVWUQ3EI/edit#slide=id.p)

GCL: (presents slides)

GCL: Stage 4?

MF: The editor group was discussing whether or not this was an editorial change, and we feel like no, it isn’t. Right now, this uses two different host hooks, one that can only add data properties, and one that allows arbitrary changes to be made to the import meta object. It seems like one is a simple version for hosts to use and the other gives the full power when they need it. I'm not super comfortable with having one host hook that is completely superseded by another one. I think the host hook surface area should be kept small if we can. I especially think that it’s important given proposals like the one we’ll see from BFS later with compartments where the host hooks are possibly directly exposed, it’s adding burden now at the user level too. Something like what SYG brought up in the editor call is important too which is that implementations that have implemented against 262 have already used the simplified API. If we remove the more simplified API and leave the more powerful one, they would need to change their integration. It would be really simple though, just like having a helper at host hook level. I bring this up to committee because it’s not simply an editorial decision.

GCL: We (the champions) are OK with not having both hooks if that was the decision of the committee. I don’t see a huge motivation for having both besides HTML integration.

MF: It was really only integrated at the spec level, it might be worth it. But if we're considering reifying these soon, then we should consider keeping it minimal.

DE: It would not be reasonable to reify the current host hooks we have, and would be worth revisiting the layering we have here. I think the layering that we have in the import.meta proposal should revisit the old ???. I think it comes on TC39 to have more structure guaranteed. We could go back the other way and provide a single generic hook. I’m totally open to iterating on this. But given that compartments is at stage 1, once it hits stage 2, we’d have to do a big refactoring of our host hooks. If we want the compartment API to be in correspondence with the host hooks.

MF: That’s fair.

MM: First, I agree that one host hook rather than two, if it covers what we need to cover is an improvement. If one is more powerful than the other, is there any reason we need the more powerful one, because the less powerful one has stronger guarantees?. I'd be in favour of reducing it to the less powerful one if it covers the actual need. The big question - the request that I have is that I think this is a simple enough proposal that I would like the presenter to actually summarize the proposal itself, because as presented it mixes what’s being proposed and what’s in various uses of this. For example the URL is not actually part of the ES proposal, but exists in the use of it in both the browser and node. I make the request that the presenter actually describe the proposal.

GCL: The reason that there are two hooks is ~3 years old at this point, so I'm going to call it historical. There was this idea that the object returned from import.meta should be a plain object with a null prototype. Then hosts would just add properties to it, not change the prototype or do anything weird. But then later, the second hook HostFinalizeImportMeta was added - so when the host wants to finalize the prototype they can’t make it an ordinary object but they can add other things to it. So we ended up with two.

MM: Was there a motivation for the second one? Was there something that people actually wanted to do with it, or was it that the host might want to do something with it just in case?

GCL: I don’t know if any host uses the capabilities outside of the less powerful hook.

MM: Ok, I would then be in favor of standardizing on the less powerful hook alone. The stronger uniformity that you can count on across hosts is good.

GCL: Just to clarify, that is a null prototype ordinary object, and all the host can do is provide keys and values?

MF: When talking in the editor group, I think SYG said there was a need he was aware of for the more powerful hook.

SYG: The only one I am aware of is HTML and it only uses the simplified host hook.

MF: Okay.

MM: Is it the case that the url property as shown in the presentation is not part of the proposal?

GCL: The entirety of the proposal is just the null prototype object that gets created when you use import.meta. So all you do is type in that syntax and the host somehow creates an object with no standardized properties, and if the host doesn’t implement the hook there are no properties at all.

BN: I think there is a use case for specifically being able to set the prototype of import.meta in a host defined way. In CommonJS, in Node, the module object actually had a shared prototype which was where node decided to put the require() method. That inherited require method was able to access this.id in a generic way. It feels JavaScript-y and useful to have even just an empty prototype whenever you could have many instances of a given type. And I think it’s reasonable that a host environment might decide that that import.meta should have a non-null prototype, just for the extensibility of adding methods to that prototype.

MM: Is there any example that is not adequately supported by that value coming in with a prototype, there is no reason to mutate the prototype.

BN: It's a question of whether methods on that prototype can access other top-level properties of the import.meta object. I could see a scenario where you’re only able to define a list of properties and they could include methods and those methods could all share a scope through lexical scope and would not have to rely on top level properties, if there is one bit of code controlling the creation of these things. But if you’re relying on getting say import.meta.url from some other source and then implementing a number of methods in terms of that on the prototype, then it would be useful to be able to set the prototype. If you had to explicitly list every property that you wanted on the import.meta object every time, you’d miss out on the sharing of properties inherited from the prototype. Given that we were talking about the outstanding number of use cases for being able to set the prototype of import.meta, I wanted to raise this as one more use case that has some historical precedent, for whatever that’s worth.

BFS: I was around when we were discussing use cases for all of this. We did discuss changing the prototype. Largely people wanted it to be something different from what the spec provided. In some ways this matches how the global works, can have a different prototype just like in the browser. And so you could have custom things as BN was saying. But the other use case was the ability to be able to extend the object in other ways, either by ??? or freezing it, so without the ability to lock the prototype itself you have to freeze it to lock the prototype, it would enable better static analysis in tooling.

MM: Let me interject that what BFS mentioned, freezing the meta object, that is a convincing case that flips my preference to the more powerful hook would enable the host to freeze the meta object, which seems useful. The less-powerful hook would leave the hook no choice but to leave it unfrozen.

BFS: We can’t use this in node for a variety of reasons.

JHD: Why does this need to be frozen? This object wouldn’t be shared across modules, it is derived from syntax.

GCL: There actually are use cases for passing the import.meta object directly to things outside the module. The one that stands out to me is that ?? has a CLI API where you pass the import.meta object and it constructs the help information.

JHD: Ok. And MM, is that your concern then that if you were passing the import.meta object around, you would just throw it through Object.freeze before passing it?

MM: To answer this question, there is something else about the spec that I didn’t understand. With the import.meta expression, each time it’s evaluated, do you get a fresh object for each evaluation? And it looks like from line 3, that it’s not fresh.

GCL: That is correct. It defers creating the meta object to the first time it is used. It is only really noticeable once compartments are added.

MM: In that case, yes, there’s a very strong need for why you would want to have the meta object frozen in an empty state.

JHD: It’s fresh per module.

MM: It’s not fresh per evaluation of the expression. There’s nothing else in the language with that character. There used to be, and we fixed it. There is another place where we could and we chose not to. The place where we fixed it was a RegExp literal syntax would evaluate it to the object, and instead we made it evaluate to a fresh object each time even though they had the same pattern matching logic.

The other place where we evaluate the same object for successive evaluations is the template literal, and for that one we were careful that it was not a communication channel because it is frozen. You want it to be straightforward to write modules that are pure and are statically analyzable to not have mutable toplevel state so that simply importing the same module, does not create a communications channel. That’s something we’ve put a lot of work into at this point.
If the meta object was fresh, and the host did not place onto it something that enables a communication channel, it would not be providing one. If it is shared, but it were frozen and everything accessible from it had no mutability like the template object, then it would also not be a communications channel. But “if it is not fresh and it is not frozen, then it is rotten.”

The less powerful host hook combined with step 3 here allows it to be both non-fresh and prevent the host from freezing it. Either fix it so that it is fresh every time or enable the host to freeze it every time. This is something we really need.

JHD: So to clarify, the powerful hook, it seems like you don’t actually need all that power, the only ability you’re concerned about is - with the step 3 caching - the ability to freeze it.

MM: That's accurate.

JHD: So a hook that merely said "HostFreezeObject" or something would be sufficient for you.

MM: That would be sufficient for me, yes.

JHD: That seems like a shorter term resolution. We can change the more powerful hook.

GCL: If we need two hooks, I’d rather just have the more powerful one and the HTML spec and node use it for adding properties, and MM uses it for freezing the object.

JHD: It seems like a valuable property to give up to have limited tightly constrained host hooks. In other words, a "do whatever you want" host hook seems undesirable. Strong preference for avoiding superpowered hooks like that.

PHE (via MBS): XS is freezing import.meta today

JRL: (to MM) You said that before, regexes shared, were they shared cross module?

MM: It was not based on a comparison of the text of the RegExp, it was very much like what we ended up with template objects, it was per source text occurrence. If WH remembers differently, I would defer to WH with regard to the accuracy of what was in ES3. (WH did not object.)

JRL: Tagged template literals had to be frozen because it was possible to recreate the same template literal in any given script until we changed it in 2017.

MM: Historically, we did go through those phases and we decided they were frozen in the earlier phase, but once we decided on a source text location, if somebody had suggested that they no longer needed to be frozen, then I would have objected.

JRL: There is not a way to have a cross communication between modules unless you pass it around.

MM: I’m not talking about cross communication between modules. I’m talking about if the module passes the static analysis that shows that it has no top level mutable state, then you want two imports that contain the same module instance to not have a communication channel. It's an important guarantee, and it's built on the invariant that we have right now in the language, that evaluation of a toplevel expression does not create a communications channel between two separate evaluations of the same source expression locations.

JRL: I did not understand that. You’re saying that import.meta is cached not at the level of the module but as a shared object across all evaluations of the module?

MM: Step 3 is showing that if it's on the module, it's reused, if it's not on the module, then it's made fresh in step 4a. If it's made fresh then step 4e places it on the module. It's only made once, and therefore if it's mutable it is a communications channel.

JRL: That same module.[[ImportMeta]] will be shared across all imports of the module. But your saying it's across all evaluations of that module?

DE: If you have different copies of the module, under the current proposal if you make a new realm, you’ll get a different import.meta object.

MM: No, I’m talking about the same module instance.

RPR: We are at the end of the timebox.

GCL: Does anyone explicitly object to going with the more powerful hook only?

JHD: I wouldn’t object to this advancing. We could continue to change it at the next meeting.

GCL: I’d say the engines just implement the more powerful one because implementing both is a pain, but there could be a theoretical host that uses the more powerful one.

JHD: Can we defer the question until something like compartments exposes hooks? If there are engines that need this power, ??? I’d like to see this advance to stage 4 with no changes. I'd like to see us have further discussions if we want to, about altering these hooks.

MBS: I could ask if anyone objects to moving to Stage 4. We also have a little extra time tomorrow. First, does anyone object to going to stage 4?

SYG: With both host hooks?

MBS: Yes

MF: We should spend more time on it. If we figure out we can use one host hook in a short amount of time.

MM: It sounded like anyone who would be fine with both host hooks should be fine with only the more powerful one. This discussion flipped me to being comfortable with the more powerful one.

MBS: We have more time tomorrow. Let’s put a 15 minute time box for tomorrow at the end of the day.

### Conclusion/Resolution

- Will continue discussion [tomorrow](https://github.com/tc39/notes/blob/master/meetings/2020-03/april-1.md#importmeta-for-stage-4-continued-from-previous-day) in a 15 minute timebox.

New Topic: Do we need to worry about this prior to Compartments actually exposing hooks?
Jordan Harband New Topic: I would prefer a stronger argument to preclude hosts from doing things because we can happen to enumerate use cases today

## Decimal update

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://docs.google.com/presentation/d/1lm4ZduOQ9mpseCXGBh_dXtWWBAtDi-Or1pqdv7jen4A/edit?usp=sharing)

DE: (presents slides)

MM: We really should not advance this until we have a quite advanced operator overloading proposal either based on objects or value types. I’m skeptical on value types, but I haven’t seen ref collections - if there’s a good value types proposal supporting operator overloading, then that would be great. But I feel strongly that we need to understand what the semantics are of decimals built on top of the same user-provided abstractions that users would use to do complex numbers, rational numbers, matrices, etc. We need to understand the general operator overloading first, write a decimal in userland on top of that, and at that point consider promoting decimal to be part of the language.

DE: I’m trying to work to advance these proposals. I’m also trying to understand the Decimal proposal needs. That’s why I included a slide about these proposals.

MM: I think we understand each other.

GCL: I think it would be a shame if decimal was held back by operator overloading. It seems unlikely that operator overloading will happen any time soon. I don’t want decimal to be stuck by an operator overloading proposal.

DE: Could you say more about why it would never happen, or the timeline you would like Decimal to happen in?

GCL: The [operator overloading] proposal that I've seen as it is now, is not something I think should be in JavaScript. I just don’t want the Decimal proposal to be held back by that.

If they progressed at the same rate and operator overloading never became a blocker it would be fine, but it is not possible to guarantee that.

DE: How should we make this tradeoff between the values you and MM are advocating?

MM: It sounds like where we agree is that if operator overloading were to advance at the same rate as Decimal if we would agree on it, we should do operator overloading. The object based operator overloading - I like it, I think it could advance at a reasonable speed, but let’s try it. I think that the thing to do at this point, given this disagreement, is to push on advancing general object-based operator overloading and see how it does. If value-type operator overloading does well, then we can do both.

DE: I’m gonna be pushing on both.

MM: Only if they are both blocked should we revisit this question.

DE: I’m not going to wait for operator overloading to be ready to resolve some of the interesting problems in Decimal. There are a lot of issues with Decimal that are orthogonal to operator overloading. We can advance in collecting information from users and thinking through interoperation with BigInt, so there's plenty to do in the meantime.

MM: I think refining Decimal is great, I just don’t want to see it stage advance until operator overloading is either well understood or both are clearly blocked.

DE: You’ve explained this concern at several meetings. I want to propose that we bring it back when we propose decimal for stage advancement.

JHD: Operator overloading has been hoped for by some for decades, its not a cross cutting concern where it’s easy to see if two things will collide. In this case it’s not even clear if operator overloading can ever happen, or if it would, what it would look like. The most recent proposal from DE is a totally brand new proposal that's not like what went before. It would really be unfortunate if something as primordial as decimals would be held back by something like operator overloading, where there’s not even consensus on whether it belongs in the language.

DE: Could you say a little more about why you think Decimal is important?

JHD: Because of numbers?!, math, physics, money. I think IEEE floating point stuff is one of the biggest footguns our language has inherited, not something like `typeof null`. To be able to come up with a better story around numbers that matches peoples’ intuitions is incredibly powerful. All the reasons to do bigint are a tiny fraction of the reasons to do bigdecimal.I think it’s far more important than value types ever could be, because it’s integral to how life works. Does that answer your question?

DE: Yeah, and I agree with you.

KM: MM, in what way would having special engine hooks for all the various operator overloading - how do you envision that being incompatible with a future operator overloading proposal? All of the work we do for add - hooking into an add would be pretty intuitive. Why is it so important that we have the actual operator overloading proposal before we add quote-unquote magic here?

MM: The object or primitive is an example of this, but in general the operator overloading thing, took a long time for DE to convince me that it was a good proposal. Decimal could very well on edge cases do something different on those subtle issues. In particular, if user written rationals and complex numbers, matrices, suffer from the === problem because they are objects and not values, then decimal should also suffer from the problem. There’s lots of other subtle issues where the only way to get them right is to see where operator overloading lands to make sure that all the edge cases land the same way.

DE: That's one possible goal for language design, but you talk about solving a lot of problems; I think decimal itself would solve a lot of problems for programmers.

MM: I’m not saying that we should never have decimal, but it should be made consistent with user written complex/rational/matrix etc.

RPR: We’ve got 8 minutes left on this topic.

WH: I understand what MM is trying to do here. I would try to do that too if it were possible, but I am dubious that it is possible to come up with operator overloading that doesn’t break asm.js and other things. [Interrupted with asm.js discussion] I don’t want to debate that because operator overloading is a separate proposal. I’d like to see Decimal, specifically Decimal128 be a primitive. I'm not in favor of BigDecimal because of concerns I raised at previous meetings. It should be a primitive because Numbers are also a primitive.

DE: I didn’t quite understand how your comment relates to MM’s comment.

WH: MM assumes that operator overloading is possible. I think that assumption is incorrect (but I’d love to change my mind with evidence).

MM: To clarify, if we try to advance it and it becomes clear that it cannot advance, my opinion changes.

WH: What if it is delayed indefinitely?

MM: If it comes to be delayed indefinitely, I will change my mind on this.

GMS: I heard DE say that the reason for not making a primitive is that it would make it difficult for implementers to do things like ===. Is the argument against Decimal simply that, or is there a further reason that it doesn’t make sense to be a primitive? I'd personally believe that it would add a lot of complexity to the language if it weren't treated like any other number, where I could say that two different numbers of different types could be equal simply because the value is equal. If it is more complicated than that, it is an argument against moving forward. Is there a reason that the added complexity is required?

DE: The complexity of being an object? KM and MM were the ones in the last meeting arguing for it being an object so maybe they can answer that question.

MM: For me, it hangs on this issue of operator overloading advancing into the spec. As long as that seems possible, I would want decimal to be built on operator overloading. If the operator overloading that advances into the spec supports value types, then I would support Decimal being a value type. If the operator overloading that advances into the spec only supports overloading objects, then I would be in favor of Decimal being that. All of the arguments for decimal apply to complex numbers too. The only way we can get uniformity is to have the general abstraction mechanism first.

DE: I see, is KM here? You had some totally different arguments.

KM: The main reason I was concerned last time was what is the limiting factor of primitives? If complex numbers are, maybe vectors, maybe matrices. I’m not arguing that those will all be decided on. I do think that there are a lot of use cases I don't oppose it as an API, but I don't necessarily see it as fundamental to writing JavaScript. Most of the other primitives are fundamentals for writing most programs.

GMS: My feeling is that the only reason BigInt and BigDecimal are being proposed is that Number is not sufficient. If we were in a position to fix Number, we would do so. The only reason we are not is because we don’t want to break existing implementations. I don’t think developers would view it as an object, they would view Number, BigInt, Decimal as the same. Everyone that tries to do comparison between them will be confused about how to do equality. So I get that in normal cases operator overloading is important, because we as the spec do not know how one object could equal another and so leave it up to the developer. But this is part of the spec just like anything else, so we have the luxury of saying we know how this thing equals this other thing, so we should include that in the language.

Remainder of the queue:

1 Reply: BigInt was argued for as a one-off - Shu-yu Guo (@google)
2 Reply: some see decimal as fundamental - Gus Caplan (@nodejs @tc39 @WebAssembly @OpenJS-Foundation)
3 Reply: Regardless of what you think of IEEE, have to mention it + history - Andrew Paprocki (Bloomberg L.P.)
4 New Topic: Given reservation around operator overloading, could BigDecimal decisions influence operator overloading instead of the other way around? - Shu-yu Guo (@google)

## LogicalAssignment for stage 3

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-logical-assignment)
- [slides](https://docs.google.com/presentation/d/16WVyQifraT3sYwSb7e8xaTv3mE85ti0v8dlnBK7yBCA/edit)

JRL: (presents slides)

JRL: Stage 3?

(silence)

RPR: There is no-one on the queue.

SYG: I’m impressed with how thoroughness of the checkboxes being checked.

JRL: Thank you.

JRL: Any objections to stage 3?

WH: LGTM!

??: Awesome stuff.

### Conclusion/Resolution

- Stage 3.

## Pattern Matching Update

Presenter: Jordan Harband

- [proposal](https://github.com/tc39/proposal-pattern-matching)

JHD: I intend to take over as champion of the proposal. Let me know if you would like to help. More of a notification. The previous champions are not interested in championing it.

KM: This is pattern matching like functional programming algebraic datatypes pattern matching?

JHD: The current syntax is like when & case, but was originally proposed as match.

KM: It’s like the ML-family features, right?

DRR: I’d be interested in working with you on it.

JHD: Let’s talk offline.

## Surrogate pairs in RegExp capture groups 2: Electric Matchaloo

KG: (presents topic)

KG: We have had people uncomfortable with making the current spec the 2020 candidate without resolving this question. I would really like us to resolve this. I appreciate this is not a super important question in and of itself, but if it is going to block getting the candidate spec out, then I think we should take time.

JHD: The other option is that since this was an issue in 2018 and 2019, we cut the draft now.

WH: I'm uncomfortable shipping a standard with known bugs. It's one thing if we don't know about the bug, but it's another thing if we know about it.

JHD: The challenge here is that we have the 2-month opt-out period, and we have 2 weeks until that must start, and we have to agree in a plenary.

MBS: We could agree by written ballot, but that delays the process. It would be preferable for us to work through the concerns about the 2020 spec through these meetings if we want to avoid a delay.

KG: I would like to ask the chairs if we can come back to this tomorrow morning so we can pick something. I will write up all of the possibilities ahead of time.

AKI: We have 15 minutes before lunch I believe.

WH: We should have a longer timebox than that.

MBS: The spec does have known bugs. A: Do we think we are going to get through this, B: If we can’t reach a consensus does that block the 2020 spec?

WH: We shouldn't talk about talking about things. It's not a productive use of time.

MBS: I’m not talking about hypotheticals. I’m asking very literally, should we cut it now?

MF: At the same time, I'm not comfortable making a change I haven't fully thought through. I don't think there's going to be enough time.

MBS: Would it be safe to say that if we pick a time box tomorrow, and if it doesn’t reach consensus by the end of the time box, it doesn’t make it into the ES2020 spec.

WH: If you make the timebox something reasonable, like 30 minutes, we'll see what happens. I don't want to just say yes to what MBS said because it may encourage people to block consensus.

MLS: WH, If we say 30 minute time box, and we don’t reach consensus, are you ok with not making it into 2020, and revisit for 2021?

WH: That bothers me.

KM: If we just make the capture group name the way the current way the identifier is specced. At least it is forwards compatible.

WH: I don't know what you mean.

KG: The proposal is to pick a semantics even though not everyone agrees with it and come to a consensus later.

KM: We normally allow forward changes with exceptions. It won't prohibit improving the semantics in the future if the committee decides to do that.

WH: There are a couple cases that are ok, 0-3, or 0,2,3 from the IRC discussion.

KG: Not everyone has agreed to allowing all of those, so we can’t do what KM is proposing.

WH: I can’t agree to anything that breaks ASCII-fiers

KM: Are ASCII-fiers practicable today?

WH: Yes, except for this issue, yes.

KM: That’s relevant to the state of the world.

WH: I don’t want to ship a standard that breaks ASCII-fiers, they are possible today.

MF: Does that include tagged template rules? I doubt that.

WH: I want ASCII-fiers to be possible with regular expressions. I can't see anyone writing this code on their own.

KG: We do not have agreement on the semantics. We need to cut the specification with some answer, either no answer or an answer someone is not happy with.

WH: I have not heard an argument for why it should be done another way.

KG: Sure, but suppose those arguments are not forthcoming, but people are not willing to agree with the semantics you think are correct. In that case, what do we do?

WH: I need to hear reasons for why we cannot solve this.

MLS: That is subjective.

KG: We might not hear a reason. We as a committee need to ship a spec.

JHD: That sounds like an unmitigated disaster.

MLS: It’s been like this for two years.

WH: I don’t like the attitude that we can leave unresolved bugs in the spec.

JHD: It’s not unresolved forever.

WH: I’m very uncomfortable with this pressure I’m feeling.

BFS: Both sides are feeling enormous time pressure. The only way to realistically alleviate the pressure is to not ship the spec. So if we are to agree here, we need to agree that we are doing this “under duress” as it were, and that it’s more important to ship the spec. We need to choose a timebox after which we will table this for the sake of shipping the spec. If the goal is to apply enough time pressure to cause peer pressure, we should stop.

MM: WH stated that he feels put upon. This is our first fully online meeting. I want us to take seriously that this is our first time trying to debug our interpersonal interactions so that we proceed in a way that we are comfortable with. I think that it is really important that if someone feels uncomfortable we back off.

MBS: We are at time. Everyone can agree to adding 30 minutes for this topic. If we all sleep on it and discuss a little more tomorrow in the first 5-10 minutes about the bounds in which we want to have this. I don’t think any of us want to be in this position. So unless anyone objects the best thing to do is to step back and sleep on it. The first thing we work out is the time box and the decisions on the table. If we can all agree what the decisions are as a starting point. It is good for us to call it a night. Anyone have any last thoughts?
