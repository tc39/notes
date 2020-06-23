# May 22, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Mattijs Hoitink (MHK), Kyle Verrier (KVR),  Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Sathya Gunasekaran (SGN), Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Leo Balter (LEO), Caridy Patiño (CP), Jory Burson (JBN), Limin Zhu (LZU), Aki Rose (AKI), Valerie Young (VYG), Henry Zhu (HZU), Ross Kirsling (RKG), Shane Carr (SFC), Mike Samuel (MSL), Tab Atkins-Bittner (TAB), Kevin Smith (KS), Ron Buckton (RBN), Eric Faust (EFT), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Patrick Soquet (PST), Till Schneidereit (TST), Diego Ferreiro Val (DFV), Godfrey Chan (GCN), Domenic Denicola (DD), Rick Waldron (RW)

Remote:
Valerie Young (VYG), Maggie Pint (MPT)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/05.md)

## Welcome

RJE: (house keeping)


## Agenda Scheduling

DE: Michael suggested sorting agenda items by reverse stage, so later stages get priority.

#### Conclusion/Resolution

- We'll discuss this after lunch


## Approval of the minutes from last meeting

RW: Submitted to Ecma, archived, no issues

#### Conclusion/Resolution

- Approved


## Dates for next meetings

RJE: July 24-56 in Redmond. Register early and let the host know if you have special dietary requirements (Microsoft)


## Project Editors' Reports

### ECMA-262

RJE: New editor group proposed, Brian Terlson, Jordan Harband, Bradley Farias. Do we need to do anything formal to approve that?

DE: I thought we were going to hear about a plan for how the editor group will work before approving the group.

(deferred)

### ECMA-402

CP: Defer to later

### ECMA-404

CM: No news is good news

### Test262

(Valerie Young)


VYG: ...

Intl.Locale:
  - New tests:
    - ~60 tests added/updated in intl402/Locale (Ms2ger)
  - Meta:
    - Add "locale" to frontmatter to list language tags or subtags used in test (Rick Waldron)
    - Update IANA subtag registry to the 2018-04-23 (Rick Waldron)
    - Minor clean up to metadata and formatting (Rick Waldron)

async iteration:
  - Meta:
    - Minor metadata cleanup (Nicolò Ribaudo)

numeric literals:
  - New tests:
    - 1 test add for numeric literal production (Steve Fink)

BigInt
  - New tests:
    - 12 test for ToNumeric and ToString in comparisons (Caio Lima, Robin Templeton)
    - 5 test of valueOf, toString,  (Robin Templeton)
    - 3 tests for spec change on IsSafeInteger in constructor (Robin Templeton)
  - Meta:
    - 136 tests modified for unique error messages (Rick Waldron)
    - 1 test update to match recent semantic update to spec (André Bargull)
    - 24 test updated feature tags (Rick Waldron)
  - Maintenance:
    - Test fixes and improvements (André Bargull, Rick Waldron, Leo Balter)

JSON superset proposal
  - New tests:
    - 11 tests (Mathias Bynens)

"Function.prototype.toString revision" proposal
  - Meta:
    - 19 tests updated per-proposal (Rick Waldron)

String.prototype.matchAll proposal
  - New tests:
    - 62 tests added (Jordan Harband)

Class fields proposal
  - New test:
    - 1 test of edge case found  (Kevin Gibbons)

Atomics:
  - Meta:
    - Bug fixes (André Bargull)
  - New Tests:
    - 24 tests for wait and wake (Rick Waldron)
      - Tests for spurious wakeup on waiting agents
    - Atomic operations on BigInt64Array! (Rick Waldron)
  - Fixes
    - Eliminate use of Date.now() (See next)

Date.parse:
  - New tests:
    - 2 news tests (André Bargull)


$262 Host Agent Improvements:
  - $262.agent.monotonicNow()
    - implementation patches added for JSC (accepted), V8 (accepted) and spidermonkey (pending) (Rick Waldron)
    - implementation for ChakraCore is in progress (Rick Waldron)

routine maintenance:
  - ~100 of tests edited for formatting, code consistency, renames (Leo Balter, Valerie Young, André Bargull, Rick Waldron)
  - 12 old tests modified for early error syntax (Mike Pennisi and Rick Waldron)
  - feature tagging (destructuring-binding) (Rick Waldron)
  - implementation depend NAN bug (André Bargull)
  - 44 tests added for various test cases for cross-browser compliance bugs (André Bargull)




## Updates from the CoC Committee

(Jory Burson)

JBN: A brief update on the CoC committee: introduce committee members, Daniel, Aki, Jordan and Keith, Brian, and Myles, Leo. Happy to discuss over the break... We're interested in participation, moderation, guiding principles. Coming up with a playbook on situations that don't feel right. Follow along on our repo. If there were questions about how to file support issues, talk to everyone collectively via TC39 Report email or individually (to maintain anonymity). When a report happens, we try to respond within a few hours. We meet biweekly at 1pm EST to discuss appropriate steps. We haven't had any issues yet. We are definitely going to plan to avoid choosing individuals who may have a conflict of interest (?). That's the general process we have so far. A lot of this work is in Bootstrapping phase still—trying to figure out what's most welcoming and efficient. Not just reactive but also proactive responses, building off work that Yulia has done. If you're at all interested in participating, please let one of the committee members know.

WH: I have some questions about what you just presented. You are working on "moderations", what does that mean?

JBN: Right now we just have a draft in the committee. Giving people a better sense of what they can expect if something is reported.

WH: Are these additional rules we have to follow?

JBN: They're being framed as guiding principles.

WH: I don't understand what "Guiding Principles" are? If they are rules, you should solicit feedback on them rather than keeping them confidential inside the code of conduct committee.

JBN: I'm happy to get your feedback, I would just hate to share my typo filled document already.

RJE: Not quite ready for public consumption, but soon.

WH: You mentioned the repository earlier, what's the link?

JBN: We're a team on github. https://github.com/orgs/tc39/teams/code-of-conduct-committee

DE: Is the question "where is the repo"? Or who are the members?

WH: JBN said that there's a draft for us on the repo, so I wanted to know where that is.

JBN: If it's not in our repo already, I may have misspoke. You can follow along on our team page.

DE: When we have a document for the committee, we will publicise it. Right now, we're in the early stages. People were uncertain what the code of conduct mean in practice, so we want to write up some guidelines, get some feedback and then discuss it. Hopefully this should lessen concerns.

RJE: To summarize, internally you have something you're working on. It's not ready yet, but when it is you'll share it with the group.

AR: To clarify, this isn't changing anything, just clarifying

#### Conclusion/Resolution

- None

## Normative: Cleanup Time Values and Time Range Needs Consensus PR

(Andrew Paprocki)

- [Normative: Cleanup Time Values and Time Range #1144](https://github.com/tc39/ecma262/pull/1144)

API: Dan suggested making a presentation for this PR. There are a lot of issues in the backlog for Date APIs. After reading the spec, Date.parse returns a time value. The spec speaks about what a time value is, its 8640000000000 milliseconds.

API: Specified in 6 digit years, which is great if both sides understand it, but ECMAScript has not yet standardized it.

API: What happens when to get too negative with Date? Parse should always return a valid time value. Weird things happen when the numbers get toooooooo big. The parseable values go up to MININT and MAXINT, which is an implementation decision and not actually in the spec, so this proposes adding it to the spec.

RJE: Any objections?

API: Mainly for engine implementers

DE: I think API did great work here. I hope we can have more changes like this. Date.parse is really ambiguous. I support making this change.

(Jokes about Date APIs being difficult)

DE: Any feedback from any of the implementers or editors?

BT: Have you seen any specific issues?

API: Practically no issues because no one uses dates this big.

DE: I want to make sure we either have consensus from implementers (since we only have SpiderMonkey) or next steps.

SGN: That sounds like a good plan from V8's perspective

DD: Everyone should make sure bugs are filed.

API: Test262 changes were submitted.

SGN: What does Chakra core do?

API: It also exhibited similar behavior, but basically none of the engines agree at some point, so the API is effectively unreliable.

BT: Chakra has similar behavior to V8

#### Conclusion/Resolution

- Consensus


## Array.prototype.values web compat update
(Sathya Gunasekaran)

SGN: The update is Chrome tried to ship this twice, finally did recently. Now Firefox has shipped it as well, so it has been implemented in all major browsers. [Thunderous cheers in the room].

#### Conclusion/Resolution

- Shipping in all major browsers!


## 9.i.b. Normative: Add export * as ns from "mod" to Export production and Module Semantics
(Valerie Young)

- [slides](https://docs.google.com/presentation/d/1FmaW2p4DIBOO2fWVUIVhFRz7N4ekVVLqGqmjqV-uaj8/edit?usp=sharing)
- [Normative: Add export * as ns from "mod" to Export production and Module Semantics](https://github.com/tc39/ecma262/pull/1174)


VYG: Seems like a natural addition to the language, because it can be done in two steps easily. Semantics seem clear. We thought it would just be a grammatical change. Just needs consensus. We have incomplete tests in March 2018.

YK: This happens to me often. I like the change.

DE: What are the next steps? Are we looking for a merge now? Or feedback?

VYG: Is Jordan or John Dalton on the call? The question is is this PR ready to be merged? I think it is.

JHD: The impression I got from 2017 is that we didn't move forward because there was no PR or tests. If this PR is uncontroversial, it still would need editor review, but if there are no objections it would seem we have consensus.

DD: I'm unclear at what point we decided to treat this as a PR without implementations. We need implementers to do this before it merges. Like a Stage-3 proposal, even though we're doing it as a PR.

RW: I agree with DD. We should still go through something similar to Staging process. Already done Stage 1 effectively, and this is Stage 2, so Stage 3 next?

DE: We didn't want to go through the full stage process. It can be in the middle, where we do a PR _and_ get implementers to do it at the same time. Maybe we can treat this as a "Needs Consensus" PR and then get the Test262 changes merged, then land the PR once we get implementers.

KG: We discussed a requirement for Normative PRs for this process.

DE: proposed for general purpose, but agreed to apply on case by case

LEO: Either path: as "Needs consensus PR" or "Stage 3". Asking for implementers to work on this, and therefore moving on to Stage 3.

RJE: What do we need to do here to make that the case?

DE: I suggest for next steps we land the tests, and land the normative change once we get enough implementer feedback.

#### Conclusion/Resolution

- The needs-consensus PR has consensus and awaiting
- Land tests
- Continue to pursue with implementers with feedback as needed.


## 11.i.c 2019/2020 meeting scheduling update

(Daniel Ehrenberg)

- [2019 meeting planning #130](https://github.com/tc39/reflector/issues/130)

Most recent suggestions:

- January 29-31, 2019: GoDaddy in Scottsdale, AZ
- March 26-28, 2019: Google in New York (SF?)
- Late May/early June: JSConf EU in Berlin (pending coordination on date)
- July 23-25: Microsoft in Redmond, WA
- September/October: Node Foundation at JS Interactive (pending details on date and location; this year, early October in Vancouver)
- November/December: Salesforce in SF (NY?) (pending coordination to not overlap with Dreamforce)


DE: If people could communicate their scheduling needs on the reflector issue, that would make this scheduling easier.

GCN: Are there any conflicts with other meetings? Node board meetings, etc.

MBS: For JSConf EU, the conference is on the weekend. For next year, this is far enough in advance that we can schedule it appropriately. By October 2019, I'm sure we can do the same for JS Interactive.

[Several voices discussing, specifically purple shirt]: Some cities like New York are expensive.

??: Google has offices in Boston, so we could host there, if New York is considered too expensive.

WH: Boston was extraordinarily expensive at the last September meeting. It was hard to find any decent room under $500/night, probably because of some big conference in town.

(RW: Boston will always be extraordinarily expensive)
YK: We discussed last time that doing events on the East Coast makes it easier for Europeans to attend.

AKI: (On the topic of the 2-week JSConfEU/TC39 meeting burden) I support co-locating with JSConfEU, since jetlag for many North Americans is rough; a longer time for travelling isn't exclusively bad.

JBN: Maybe someone else can help with meeting planning?

JHD: On behalf of those of us with children, I would ask that we consider people with families in these schedules.

DE: For these conference, For JSConf EU that's on the weekend, we could do the following Mon-Wed. That might reduce this 2week burden.

DH: I can always just skip the conference, because I have kids.

DE: Seems like this is good overall, with various people wanting small changes. Please add comments to the Reflector issue.

#### Conclusion/Resolution

- Create a poll to map humans to dates, post on reflector


## 11.i.d. Optional catch binding for stage 4

(Michael Ficarra)

- [proposal](https://tc39.es/proposal-optional-catch-binding/)

MF: Alternative syntax for catches. The PR is here (https://github.com/tc39/ecma262/pull/1185), and it has been approved by editors. We have Safari, Chrome and Firefox implementations already. I am requesting Stage 4.

RW: Voicing another's objection, Mike P? from Bocoup strongly objects, calling it unnecessary and over-complicating try/catch syntax.

MF: I think it's valuable for language ergonomics.

RW: Speaking on just his behalf, not on Bocoup's.

MB: Isn't this late for such an objection?

WH: Wearing two hats here. I reviewed the grammar. The grammar works.

WH: On the other hand, this seems pointless to me too. But it's harmless.

MB: The developer community loves this—linters complain when there's an unused variable, so people get excited about this.

WH: I'm not objecting to it.

MP: (remotely)...

## `catch ({})`

Thanks to ES2015's introduction of destructuring patterns in the CatchBinding
position, most use cases identified to date can be satisfied without any
further change to the language:

```js
try {
} catch ({}) {

}
```

As far as I know, the only observable difference to this pattern is the
behavior when the abrupt completion being caught has a value of `null` or
`undefined`. In those cases, a new exception will be thrown.

If that is the only distinction, then this extension suggests that the case of
`null` or `undefined` completion values is sufficiently common and logical to
warrant recognition in the grammar itself.

Anecdotally, I cannot recall a time where I have witnessed such a completion
value. Motivations for this proposal such as `JSON.parse` don't seem to require
it. I also question the soundness of such practices and wonder if the committee
wants to promote patterns like `throw null`.

#### Conclusion/Resolution

- Stage 4 acceptance


## 11.i.e ECMAScript as a superset of JSON

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-json-superset)
- [slides](https://docs.google.com/presentation/d/1_1PNgDm55vtRYQ0UwndHQ0pI7aWGEcYgPztdXs08HVw/edit)

MB: Add two unicode chars (U+2028 and U+2029) to string literals without being escaped. Without this proposal, we would get a syntax error, with it we allow them just like JSON. Overall negative lines to the spec. All kinds of implementations in Chrome and Safari (as well as Babel as of last week).

```
"foo<U+2028>bar<U+2029>baz"
```

MB: I am proposing Stage 4.

WH: I reviewed this. I'm fine with it.

MB: I'd like to thanks Richard Gibson, he's the community proposal author.

#### Conclusion/Resolution

- Stage 4 acceptance




## 11.i.a Sequence properties in Unicode property escapes

(Mathias Bynens)

- [slides](https://docs.google.com/presentation/d/1Nd7pjZBztiI5_4DEHEtxb_hw5Ve3eJbcpUbhUO-Z3JE/edit)
- [proposal](https://github.com/mathiasbynens/proposal-regexp-unicode-sequence-properties)

MB: Mentally you can think of property escapes as a [abc] character class. There's another type of property in Unicode called Sequence Properties. They would map to a set of alternatives, e.g. `ab|def|ghij|k`.

```js
\p{Script_Extensions=Greek}
// maps to
[\u0342\u0345...\uDE00-\uDE45]
```

MB: Currently, sequence properties in Unicode deal with Emoji, but I'm proposing we support the general feature, and then once more sequence properties are added to Unicode we can just support them in ECMAScript regular expressions as well. The proposal makes it easy to match things like keycap emoji, which consist of sequences e.g. `"4\uFE0f\u20E3"`.

```js
const regexEmojiKeycap = /\p{Emoji_Keycap_Sequence}/u;
regexEmojiKeycap.test('4️⃣'); // '4\uFE0F\u20E3'
// → true
```

MB: If you want to match emoji sequences, it's hard to come up with a Regular Expression that matches all of them. In the Unicode standard, however, there are Unicode properties that define all these categories of emoji, and which of them form the concept of "emoji sequences".

```js
const reEmojiSequence =
  /\p{Emoji_Flag_Sequence}|\p{Emoji_Tag_Sequence}|\p{Emoji_ZWJ_Sequence}/u;
```

MB: Some data to explain the motivation for this: with this proposal we can take [a popular 7 KB npm library people use to match emoji](https://github.com/mathiasbynens/emoji-regex) down to 115 bytes.

MB: We should ban sequences within character classes (the square brackets) and their negated `\P` form, because it's not clear what either of those expands into. I am requesting Stage 1.

DH: Awesome use case. It's easy to giggle about emoji being silly, but given the popularity they are important. Maybe we should use a different prefix other than `p`; negation doesn't work because this isn't a char class anymore, it's a sequence.

MB: I forgot to mention this proposal is based on actual feedback from developers using Unicode property escapes. In particular, Twitter wants this to match hashtags and emoji.

MF: Not having a negated form is uncomfortable. It's not that I would be opposed to this, I would just be much more in favor of this proposal if there was a negated form.

MKA: I am very in favor of this, from my experience working on text editors. Happy to share more examples of use cases, if people want.

YK: I think this is great. I'm not sure that making it work in a character class is unintuitive. I think it might work.

WH: I reviewed the grammar and worked with MB to revise it to get it to work well. Only a few minor typos remain.

WH: For negation and character classes, this doesn't make sense in char classes, particularly if the character class is negated. Imagine if there were a \p sequence property that expands to all ECMAScript keywords, e.g. `\p{ECMAScript_Keywords}`; what would a character class that negated that accept? `[^\p{ECMAScript_Keywords}]`

WH: Instead, you can use negative lookaheads or lookbehinds, which have existing well-defined semantics. If you want negation, put a sequence property inside a negative lookahead or lookbehind.

MF: Did you find any precedent of sequences in other languages/engines?

MB: No precedent, it's entirely new ground. I've been trying to work with the Unicode org to define this while working on the initial `\p` proposal. They were very protective of their current spec and weary of modifying it, even when changing it would make their spec match the reality of implementations. I'm proposing Stage 1 or possibly even Stage 2 (because there's spec text already).

BT: There's no need to rush.

#### Conclusion/Resolution

- Stage 1. (No need to rush to Stage 2.)


## 11.i.f. Update to the How We Work Documentation project and Website

(Yulia Startsev)

- [slides](https://docs.google.com/presentation/d/1DZ0Q7hX-4ST08n4PUHD3NjRC6_2iAn7ukTa_QAPMgAg/edit?usp=sharing)


YSV: We have two tracks, a user story and a documentation track. Iterating on how proposals are recorded for the website. We have a current design for the new site, it's a little more refined. Testing two different forms for below the fold info, either for larger screens or smaller screens. Below the info, we have state of Proposals at stage 3 and above, so that people don't get overwhelmed with newer proposals.


## Rename Atomics.wake

(Rick Waldron)

- [slides](https://docs.google.com/presentation/d/1awJqO2WcBs4UlBaLZn0mfwV3xOYOlo0hHNbB6mtctnQ/)

RW: Atomics.wake sounds too much like Atomics.wait. Because we unpublished the feature, we have the unique opportunity to change the name, as you cannot presently write new programs with the existing API. Let's call it Atomics.notify instead. It basically means the same thing.

KZM: Why change it altogether instead of deprecating and adding the new API?

YK: We don't deprecate it. Browsers could just remove it though, and they can tell us if they can.

RW: Spectre security mitigation disabling created an artificial "deprecation period" for us.

RW: We have an opportunity to rename it. Let's rename it.

RW: So, 1. Do we want to do this? 2. What stage should it be?

SYG: Is the Atomics object extensible?

RW: Everything is extensible by default.

SYG: If we rename it, we should rename abstract ops in the spec that says wake

RW: Right

DE: A needs-consensus PR makes more sense here. Ask implementers to not ship the other version.

RW: Editors: If this were needs-consensus, is it too late for ES 2018?

JHD: It seems good to get the renaming into 2018 but it may be too late.

BT: We are technically not allowed to make this change at this point.

RW: Are we in an opt-out period?

BT: Yes, it's been frozen to normative changes for a couple months. We could do an errata 0.1 release.
Would prefer not to do this work until we're sure it will work.

#### Conclusion/Resolution

- Create a needs consensus PR
- Outreach with "in the wild" occurrences
- Pursue implementations


## Updates and a question to resolve on String.prototype.matchAll

(Jordan Harband)

- [Re-evaluate IsRegExp call in MatchAllIterator? #34](https://github.com/tc39/proposal-string-matchall/issues/34)

JHD: There are 4 methods that take symbol regex:

- replace
- match
- search
- split

JHD: Split and replace fall back to spec defined algorithms. Alan probably wanted to make sure no one broke legacy behavior. The other two methods, match and search both create a regex and then invoke their symbol on it. In matchAll, I propose we do what split and replace do.

JHD: Symbol.match actually provides two purposes. One is the methods, and one is a brand that says "I am a regexp". To subclass a regex, you really have to also define the special regex symbol methods on your prototype.

JHD: Symbol.match has conflated purposes. matchAll extends and is consistent with match in terms of getting a match out of a string. The one deviation is...

JHD: If the match symbol is not present it's not a regexp. If matchAll is not present it could still be a regexp.
During implementation, Andre Barghul raised a concern as spec feedback. Open question: should there be that fallback? One path is to keep it as spec'd, if the symbol isn't present fall back to the spec algorithm. The other path is to fail if the symbol isn't present.

JHD: Another thing that motivates my preference for current behaviour is that all symbols on symbol.prototype, all of the behaviour is still the same except the match symbol.

DE: I thought there was a second question about whether there should be these defensive "is regex" calls.

JHD: I thought we resolved most in the thread. Tried to tease apart. Merged a PR in April. The only remaining issue...

DE: You call createRegex, then call isRegex on the result. Is that normal?

JHD: If you pass a string into matchAll ... it throws a type error. This is a secondary concern we can answer today. The matchAll abstract op takes two args: regexp + string. I should come back to the committee for the second question. Let's defer to later in this meeting.

MLS: We discussed removing the expression. We did not remove it. I was an advocate for removing. It seems weird we wouldn't add a matchAll. If we don't they will operate different to match.

JHD: There is a Symbol.matchAll in the current spec.

MLS: Understood. I am arguing for it.

DE: We should address polarity. Will follow up offline.

#### Conclusion/Resolution

- Deferred



## BigInt Status Update

(Daniel Ehrenberg)

DE: BigInt is at stage 3. Based on operator overloading. ONe change: a number casted explicitly using BigInt constructor and is an integer out of safe range 2^53, it's now permitted. We allow the conversion. Robin Templeton implemented tc262 tests for this. Comparison greater than or double equals, number is cast to a bigint. Implemented tests and implementation in SpiderMonkey. I have a PR against main spec that changes how math values work. This will make it more explicit - more feasible to add BigInts. The other change is BigInt.p.toLocaleString support is an alias of toString(). It takes an argument that is a locale. The PR for review in ECMA-402 is based on Intl format. This has consensus. Will be in Node when it goes to V8 6.7. Thanks to Bocoup and Igalia colleagues.

MM: In the 2**60 case, it has to be an integer value, but it changes to BigInt and therefore doesn't need to throw? Is that correct?

DE: Yes. Integers don't throw. NaNs, infinities, and fractions do.

MB: +1 to overloading Intl.NumberFormat and similar APIs on a case-by-case basis. I ran into the formatter use case specifically when writing a toy BigInt demo web app.

RW: Public Service Announcement: We have a lot of implementers in the room: don't forget to update Atomic operations to support BigInt64 arrays. None do today. Update accordingly please.

WH: I reviewed and am happy with the new updates. They addressed my concerns from the last meeting.

#### Conclusion/Resolution

- Status updated


## Function.prototype.toString revision updates (slides) and stage 4

(Michael Ficarra)

MF: Added support for Async functions and Async generators. Added HasSourceTextAvailable host-defined abstraction. Committee reviewed. Agreed by Dominic how it affects Function.censorship. Allow for anonymous, well-known intrinsics (the spec supports omitting the name now). Biggest change is to allow PropertyName.
Going in more detail: HasSourceTextAvailable should always complete normally (return true/false) and the source text is preserved.

MM: "must return a consistent result" so everytime you ask a question it always gives the same answer?

MF: Yes.

MF: PropertyName in NativeFunction name position is the biggest thing in the proposal: in SpiderMonkey, the implementation generated a .get, which we decided to allow the first but not the second.
It would confuse the user to see something they couldn't type. So computed property naming, OK, get/set before the name isn't.

KG: This is only something allowed for implementers. So even though it allows arbitrary expressions in that position, just don't put dumb things there and that isn't a problem.

MM: Does the propertyname ever show up in the function name in a code block?

MF: Yes, from the first token to the last token. This is actually why I think the second form is not acceptable.
I have reviews from Jordan and Bradley in the editors group. And Brian. Only objection: Firefox has not updated. Proposal has caused engines to make changes of similar sort.

WH: I reviewed. A concern is how this interacts with decorators. We can discuss that in the decorators topic.

MM: When you toString, the printed form, if evaluated, in a similar lexical scope, either the eval throws or creates a function whose call behaviour is the same as the original to the extent that the lexical scope and evaluation is similar.

MF: Yes but if it's [native code] then no.

MF: The sourcetext is produced from first token to last token, you can see the points are clearly defined.
MM: If Waldemar is says he's confident a string that results from a precise expression...

MF: So you need more time to review the proposal?

MM: Yes. To have confidence in that property.

YK: What's the area of decorator concern? [deferred]

#### Conclusion/Resolution

- Objections raised (need to make sure ConciseBody strings are not evaluable)


## Array.prototype.flatten rename

(Michael Ficarra)

MF: Flatten name conflicted with MooTools. Flatten is still in Safari TP.

MLS: We can smoosh that.

MF: Assuming `flatten` is not possible would like to choose another. Propose `flat` to avoid renaming `flatMap`. How about `flatten` to `flat`?

YK: Changing to `flat`... implies infinity is the depth. Other than that no objections.

RKG: Using an adjective for a method name seems pretty unusual for JavaScript. It would seem suitable in a language that doesn't require parens for argumentless calls, but a bit awkward here.

MF: Agree `flat` sounds a bit weird. Seems best compared to alternates.

DE: There are already different parts of speech in `Array.prototype` with `some`, `keys` etc. — they are not all verbs.

#### Conclusion/Resolution

- We choose `flat`.


## Symbol.prototype.description for stage 3

(Michael Ficarra)

- [proposal](https://github.com/tc39/proposal-Symbol-description)

MF: Stage 3 proposal, hasn't changed since last meeting. Has received reviews from everyone assigned and Brian.

#### Conclusion/Resolution

- Stage 3 acceptance


## Object.fromEntries to stage 2

(Kevin Gibbons)

- [proposal](https://github.com/tc39/proposal-object-from-entries)
- [slides](https://docs.google.com/presentation/d/1o0XpxQmERelo0u-tyibSeHLhy-YyCNCBwHGIDwuXUww/edit)

KG: It's the same as last meeting. Inverse of Object.entries, constructs an object from an iterator of key-value tuple pairs. The polyfill is basically exactly what you expect. What if anything should a second argument do? One choice is a prototype for the resulting object a la Object.create, another is a mapping function a la Array.from. Currently we propose not taking a second argument. Please look at the GitHub proposal for discussion of this and other details (https://github.com/tc39/proposal-object-from-entries/).

JRL: Why isn't this taking an object for key-value pairs instead of a list?

KG: There are lots of APIs that take a list of key-value tuples _from_ an Object, but there's no good way to produce such a thing if you already have a list of key-value pairs such as that produced from Object.entries. Also, you can't really transform an Object very well, as with Array.prototype.filter, but you can transform an array very easily.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers: Michael Ficarra,


## Top Level Await

(Myles Borins)

- [proposal](https://github.com/mylesborins/proposal-top-level-await/)
- [slides](https://docs.google.com/presentation/d/1lTTiNosXlqk78FO7Ze_CdMbF3PhO36kCk-mT783wpi8/)

MBS: The main use case for this is immediately-invoked async functions, especially in the context of module graphs. People are exporting a main or then module methods, then awaiting for the import. Top level await alleviates the need for this pattern.

MBS: Potential solutions: top-level await blocks tree execution: if top-level await (TLA) is hit, the event loop isn't blocked, at the point hte await is resolved, the block will continue execution.

MBS: The other variant is that TLA wouldn't block sibling evaluation for other modules in the tree.

MBS: A constraint that could be introduced is allowing TLA for only modules without exports, enabling modules without deadlock.

One way to think about it is either sequential evaluations in A, or parallel evaluations in B (as though resolved via a Promise.all). import('a') will still evaluate first, but if it contains an await inside it, it will start evaluating the import('b') module.

DD: To clarify, the top-level statements up until the first await will still run in the order that things are imported.

MBS: Any questions?  No.

MBS: New things are all in the GitHub repo. As recently started in the spec, AsyncBlockStart, which is what gives the functions their promise capabilities...

(Discussing spec grammars and what gives what capabilities to the syntax using that grammar for Variant A)

MBS: We're allowing in these spec changes for these functions to defer. Also, there have been updates to normative/non-normative to awaits for use at the Job level. Variant B needs to be refactored to allow all children to execute in parallel. This could be done in a spec-level Promise.all (and worth discussing here, in addition to the issue, whether that is a good way to go).

DD: all we really need for this case is a spec level await? That definition is not precisely like a normal await. It's probably not well founded, it's tricky.

MBS: Building on that also, whether a spec-version of Promise.all, or whether that's even something we could implement: for Variant A or Variant B.

MBS: What about deadlock? This change can help detect and prevent deadlock when cyclical dependencies exist in a module graph. There's potential to introduce deadlock using dynamic import. Rather than attempt to solve particular issues with deadlock, we should be doing this on a broader scope than TLA. As for polyfills, there's not a way to dynamically import and ensure polyfills. If you are not dynamically importing, you can guarantee the order of the graph execution. In Variant B, however you cannot guarantee execution order of imports.

MBS: We're exploring this as an option for the module loader in Node. Currently, we're looking at pluggable-loaders, and generally exploring what options could exist. We're imagining TLA won't be available to script goal code, only module code. Our current plan is to not implement the specification text about deadlock, or handling cycles.

DH: You claim an equivalence between dynamic and regular imports. Can that really be true? Is there not a way to split apart the static portions of loading modules from the dynamic execution. When you write it as await.thing you tell the JS engine this is a thing we're going to start retrieving...

DD: You might be taking it too literally. The semantics are not really sequential or Promise.all, it's hand-wavey similar.

DH: I still have two questions: 1) does this preserve the ability to fetch early, and 2) for realms, can you emulate this in userland (with the source code in the module graph, kick off the fetching early, etc.)

DD: The spec text is helpful. The impact is purely on the evaluation phase, not the static parse and binding finding.

MBS: What we're doing is simply to take the execution block—the same text we currently use to instrument the async normally, but just do so in this new context.

MM: In general, I think Variant B is crafty. If you ask the question of which semantics is the least surprising, what would people naturally assume? I think it's Variant A. Variant B is surprising in ways that cause divergences from expectations.

MBS: I've also been supportive of Variant A, but as we think about executing the graph, it's more about Bottom-up. In Variant B, it's instantiating different graphs, but they're more likely to block each other. When we plan out a bunch of use cases, I don't think it'll be that big a deal.

MM: I didn't understand that.

DD: I am sympathetic. If you're in the perspective of a module author, if you have a top-level await, that's a signal that we're done evaluating and need to wait. It's out of the module's hands now, it has to wait for the embedder.

MM: If we're in a module and it's the only one that imports A, B, and C, and B is fetched faster than A, can the code on the right, would A be evaluated first?

DD: In the real semantics, it cannot happen. The slide's example desugaring isn't perfect. But it's only at evaluate time, regardless of network, import('a') must execute first. It'll continue that way until a TLA is encountered.

MM: I don't object to Variant B then.

DH: The only thing that we're racing here is "await-y" top-level execution. We're only making this case for top-level await, correct? (Yes)

DE: Do we want a timebox extension? We've overrun.

RPR: This guarantees that esmodules can't be loaded sync. Do we all accept that as a side-effect of this? This is the first time the loader can span multiple ticks of the event loop.

YK: In today's world, it is possible (all transpilers, in fact, do this) to transpile into sync functions to emulate the modules. With this, they'd have to be async functions now.

TST: This is important because it will happen, and without TLA, this will affect all module graphs forever. This increases encapsulation of modules. The effect will probably be that people will be conservative in using asynchronous code in their modules.

RPR: What you're saying is the value of this feature adds is bigger than the downside of breaking the sync loading pattern.

YK: WASM already enabled this. In Chrome, for example, you cannot transpile to a synchronous module. Separately, a question: when you cycle-back, do you block?

DD: Yes, the plan for now is just to behave like async functions.

DH: Of course this is impossible statically (halting problem is real), but dynamically, I think you could track which modules are blocked on which.

API: It would be nice to defer to the Host. If you're not in a browser context, it might be nice to take action on deadlocks.


JRL: It's not clear to the importer, that the module may wait on something.

MBS: I'd argue that that's the case for dependencies already. It could be fast or slow! You trust that the module author has done this properly.

JRL: It's clear from the caller that you're waiting for an import, but it's not clear within the module.

YK: The whole point of this proposal is to prevent that from happening. Normal import keyword just waits for it to be required, but the async keyword is what changes that.

#### Conclusion/Resolution

- Stage 2 accepted!
- Reviewers: Till, Dave, and hopefully Brian



## Intl Updates

(Daniel Ehrenberg)

DE: This is a spec about built-in internationalization in ECMAScript. Some changes since last time: improved handling of non-Gregorian calendars. The proposal here is to relax that DateTimeFormat for other calendars. For Intl.RelativeTimeFormat, it's already implemented in Firefox. For Intl.Locale, implemented in V8 and SpiderMonkey. We've added baseName and minimize/maximize features, which let you manipulate the script (i.e. set to Latin script).
There's also the Intl.ListFormat API. Not much has changed in that. The Intl.Segmeter proposal, we added a LineBreak option.

New Proposals: Intl.NumberFormat options by Shane Carr.

SFC: Over a dozen requests for various new number format features. The spirit is to most of the features to make the API more thorough. It already supports many of the features, and we add four "measuring" features (i.e. things like gallons, the forms them into a localized string.

SFC: Also number formatting (with commas or decimal precision), and scientific notation have become very popular methods for people to implement, so we're proposing adding them to ECMAScript. Showing the sign on numbers. To show a change in something, like an increase of 43¢. I'm working on a proposal for July to spec these new features. I propose this for Stage 0 today.

DE: Also another new feature for FormatRange.

DE: There are a number of features needed. If you want to participate, please join the between-meeting calls.

#### Conclusion/Resolution

- Updated

## Function.prototype.toString() censorship for stage 2

(Domenic Denicola)

- [proposal](https://domenic.github.io/proposal-function-prototype-tostring-censorship/)

DD: The desirability to censor Function.p.toString, solves encapsulability and leakage. Encapsulation leakage is mainly for library authors. For library authors a pragma is better. For app authors, an out-of-band (like a header) is better. We're now changing this to discuss only the pragma. Everything that the pragma applies to gets censored, their toString gets "[native code]". Every place that saves the source text checks if it's censored. It's very analogous to "use strict". We have full spec text for this. Looking for Stage 2.

MM: Want to check: you can put the directive at the top of a function or at the top of a module/script.

DD: It's also added to Class, so I had to add a bit of spec text for that.

CM: What promise is this making to developers? Code-hygiene?  This might get cargo-culted, and everyone starts using it for no reason. Some clarity for the purpose would be good. Jab at concealing intellectual property.

DD: Maybe being explicit in the pragma text is useful.

SYG: (missed this question)

DD: Hosts already have the potential to censor out of band.

DE: What's the status of the out-of-band?

DD: I got discouraged after all the engines told me it wouldn't really help memory usage. It's on hold.

MF: Is there any usage in censoring a function that's already been created.

DD: Initially I said no. I'm not sure what the benefit is.

MF: Is there a way to detect that censor function is implemented?

DD: Just toString a function you create to see if it return [native code].

MSL: (something something something mumble mumble mumble)

DD: A property doesn't work at all... There is no such thing as a single-set property. I think introducing the interface for a single-set property for this would be a bad interface.

WH: In a few places in the spec, you state that functions become strict if they contain a Use No Function.prototype.toString() directive. Intentional or bugs?

DD: Those are copy-paste errors. I'll fix that.

WH: How do we feel about these directives being retroactive?

MM: What is retroactive?

WH: In a few places in the language they can affect entire functions defined textually before the directive. Examples are decorators and initializers inside function parameter lists that themselves contain nested functions.

KG: That's why we banned "use strict" directives from inside functions that contain such things.

DD: That would be unfortunate for this directive.

KG: This isn't as much of an issue here. There's no need to reparse, etc. you just have to wait longer to see if you can drop the source text.

YK: It makes sense to think about censoring using a method, since there's no memory benefits.

DD: My main problem is it's not ergonomic for the main library use case. It'd have to be a follow up proposal.

YK: I'm not suggesting we block it, just something that seems relevant.

DE: This memory usage discussion makes me wonder if it's not ready for Stage 2. This conflicts with our One JS message...

DD: I disagree.

DE: Adding more pragmas adds a lot of complexity.

DD: I think it has a very limited amount of extra complexity. This much (gestures nothing)... The problem is adding modes, and like a matrix of modes, but this is not a mode. This is just a switch that gets associated with a lexical group.

DE: I don't mean my concern is fatally bad. I just mean that we can take our time to adding the pragmas. For me the memory savings was the strong motivation. Without that, I think we should think whether the feature makes sense.

DD: I'm wondering what would satisfy your consideration for Stage 2.

DE: Your explainer says this would bubble-up the priority for memory optimizations. That's the kind of thing I'd love to get more feedback on.

DD: Happy to remove that sentence if that is what's preventing us from Stage 2.

SYG: What you got back from the implementers is there's no immediate win because of lazy parsing. Is the worry beyond that? Once you de-lazify, you can drop it. Why would you re-lazify it.

SGN: When you call a function that's undefined (i.e. "undefined is not a function"), we need to reparse that source file to throw an error with the name.

YK: Can we reparse from disk?

DD: That'd be bad.

TST: For us, bytecode is much larger than source code. We store the entire source file in a compressed string. If we were to change to drop source code for individual functions, we'd have to compress individually.

MSL: What should we do when the censored function is inlined within a non-censored function?

DD: I'd leave it up to the tool authors. You could invoke an IIFE with the censor pragma.

Eric Faust: Are we worried about "use language feature" pragmas?

DD: this isn't about function code, it's about source code text. You want to put this at the top of the file/class/block, and have it apply. In terms of precedent, I think it's ok to add esoteric pragmas.

BT: Using directive prologues makes me uncomfortable because I imagine a future where every file starts with this  incantation of multiple pragmas. I have a hard time supporting Stage 2 without memory improvements. If it's purely about encapsulation, I don't object.

MM: How does this affect Moddable?

PST: It doesn't--for us, all code is already using this pragma's behavior via the host hook.

DH: I understand the precedent concern. I think casually dismiss pragmas. I don't think multiple pragmas is unrealistic or bad. The compilation step could output these, the people wouldn't have to write them.

EFT: We'll hear about improving the transport format of the web. Improving encapsulation is good, but we could take our time here.

DD: I'm hearing hesitance, but no concrete steps to overcome it. I'd still like to ask for Stage 2, or if someone objects at least steps to address those concerns.

DE: I think there were a bunch of people who want this to go slower. I would like to see more use cases for the encapsulation.

DD: I went over libraries like Angular who relied on this and broke code. The ability to introspect polyfills, etc, are the encapsulation use cases.


RJE: Are there more objections?

BT: I'd like to hear more about polyfill libraries.

DD: There are multiple polyfills that override F.p.toString()

BT: Doesn't that mean you're breaking that?

DH: The use case is you're polyfilling a new feature. No code in the wild will change its behavior.

YK: One plausible use case it to use self-hosted code using just native code.

DD: reducing magic is one use case.

DE: The self-hosted code seems implausible. This is not the main concern.

DD: The other concern is getting access to built ins.

#### Conclusion/Resolution

- Stage 2, but there seems to be objections?


## Set Methods

(Sathya Gunasekaran)

- [proposal](https://github.com/tc39/proposal-set-methods/)
- [slides](https://docs.google.com/presentation/d/1xsMiY63xN4l7YUZe3W0ITq7C4nBxWa8_1u-MGm0nwN4)

SGN: Previously, we proposed adding 4 methods to Set. It was suggested we split the proposal, one for set specific, and one for collection methods. This is the Set specific proposal. Other languages seem to use isSubSet, isSuperSet, etc. Feedback, someone said to use isSubsetOf (of suffix for all). Other feedback that semantic difference is tooooooooo long of a method name. 2 Themes: set theory methods and bitfield methods. Let's pick one theme.
Other mainstream languages use set theory names: union, intersection, etc. so we would be breaking convention. They're pretty well understood, and union/intersection are the most common cases, so we should optimize for that.
Symmetric difference isn't very common, so it might not be really worth it to optimize for. Union and intersection are common and easy enough. And is ambiguous—could mean union OR intersection. My solution is to use set theoretic methods.

SGN: I added 3 helper methods: subset, superset, after the deadline, so that may not go to stage 2.

MF: The additional methods are just the set methods?

SGN: Yes.

LZU: You can't do this on iterables or arrays. Why does it have to be on the Set instance?

SGN: could just be called on the iterable.

WH: Sets have well-defined key behavior. Arrays do not.

LZU: If you're able to take any iterable and use a set method on it? (super hard to hear without mic)

JHD: We should consider doing operations on sets that are iterable.

SGN: If it can work with iterable, why not let it?

JHD: That would also be consistent with array methods that can take generic {length} things and produce arrays; similarly, Set methods should take generic iterables and produce Sets.

KG: I think these methods (the set specific methods) are also useful on WeakSets. That's not true of the helper methods isSubSet, isSuperSet; I am planning on getting those into the Spec as well.
I don't think the iterable stuff affects the helpers methods.

TAB: symmetricDifference is too complicated. I would formally object to this if it were proposed in a CSS spec, "diff and symDiff" would be better. They are long, terrible names.

MB: All other programing languages uses these already.

TAB: Python is the only other language I use that have these names, but they also have operands, so you don't have to use them.

RW: True, they are super long. But I don't remember the last time I typed out everything. With tab completion, I don't really care.

LZU: A big group of people still use Notepad.

TAB: A lot of people use dumb text editors. Long names are not victimless.

SGN: I agree, but we need this.

KVR: Due to the math nature of the API. I like algebraic laws in the spec text. Let's talk offline. Keeps talking... (note from KVR: This is the flavor of what I was talking about that might be worth incorporating into the spec https://en.wikipedia.org/wiki/Algebra_of_sets )

SGN: let's talk offline.

YK: I also agree with TAS. Telling them to learn set math vocab sucks. Ruby uses operators.

MF: Stage 2 has specific requirements. I would like a more concrete API in the future.

SGN: I don't think this blocks stage 2.

WH: The slides don't match the repo: the slides have `intersection`, while the explainer and proposal have `intersect`. If we use `union`, the counterpart should be `intersection` — that's consistent and what the other languages do.

SGN: Will update the spec.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers: Rick Waldron, Kevin Gibbons, Michael Ficarra, Tab Atkins

## String.prototype.codePoints for Stage 2

(Mathias Bynens)

- [proposal](https://github.com/RReverser/string-prototype-codepoints)
- [slides](https://docs.google.com/presentation/d/1hzaEVp9Z4NoUDg0n05hffPuw3fSnIZlI46MzNAHEU5s)

MB: Proposal by Ingvar Stepanyan. The last time this was presented, we agreed that the `{position, codePoint}` return value is the best approach. The proposal has been updated accordingly, and there is now spec text. At a high-level we added a new `[[StringIterationKind]]` internal slot to string iterator instances. It has two possible values: `"string"` (resulting in the current string iterator behavior) and `"descriptor"` (resulting in the new proposed behavior). We can switch between those two in `%StringIteratorPrototype%.next()` to avoid duplicating code. Asking for Stage 2.

DE: SGN raised a question about quantifying the performance difference.

MB: Dealing with numeric values is faster than dealing with strings in general. That's where the performance aspect of the motivation came from. You still have the same overhead as the current string iterator. The difference here is that you get numeric values.

DE: How do we conclude that this is still motivated, if the initial point was for performance. Do we have enough motivation without a performance increase? Should we add more benchmarks?

MB: I'm fine with waiting for perf numbers first, before Stage 2. The performance difference is the same as dealing with numeric values compared to string values. I have to come back with data if you want to block on this.

SGN: I'm not sure about performance wins. But there's undeniable ergonomics wins.

CM: The big win is ergonomics. You get the offset and the codepoint at the same time.

MB: Performance is one of the reasons this proposal came to be. Are the ergonomics by themselves worth it, or shall we wait for performance data before we advance to stage 2?

CM: I don't care about performance.

YK: Unless performance gets worse, I'm happy with this.

JRL: We can delete a lot of code if we get this. We're using this in Node for Babel / Babylon.

DE: How do you take advantage of this?

JRL: We're using numbers because charCodeAt is faster than charAt.

DE: Will you be using for-of or manual iterators?

JRL: We write this as a for-of loop.

DE: Will it be practical to do a for-loop?

JRL: Yes.

DE: I filed a bug with Intl.Segmenter — perf concerns by SebM. Version that avoids allocating. Cursor advances and read value there. If perf is a motivation, it makes sense to use that as a protocol. Reasoning applies both ways.

YK: To understand, what you're saying is that there's another iterator approach?

DE: What do you mean? The Intl segmenter has two APIs...

YK: This all makes sense. One thing that iterators help with is to avoid O(n) scanning. I want to agree but not 100% sure. What we do in handlebars is we have an iterator version and use it for both nodes and increment manually to avoid doing things synchronously. Can they use for-of or iterators?

DE: In `for-of`, engines can unbox. If you do it manually it's harder. Also less ergonomic using iterator vs. segmenter API. What next?

MB: It doesn't feel right to me to advance a proposal without everyone on board. Happy to bring this back to a future meeting.

#### Conclusion/Resolution

- Stays at Stage 1
- Consider alignment with `Intl.Segmenter`
- Quantify performance benefit


## Well-formed `JSON.stringify`

(Mathias Bynens)

- [proposal](https://github.com/gibson042/ECMA-262-proposal-well-formed-stringify)
- [slides](https://docs.google.com/presentation/d/1A6sQphLdaUe56V0lEp4wVT6Q2r9tjmIITZBbudKZtDU)

MB: Proposal by Richard Gibson.

MB:

> RFC 8259: "JSON text exchanged between systems that are not part of a closed ecosystem MUST be encoded using UTF-8"

MB: Using UTF-8 is best practice. But `JSON.stringify` can return symbols that are technically not valid, and that cannot be represented in UTF-8. Many problems.

MB: Even the description of `JSON.stringify` in the spec is incorrect. It says it returns a string in UTF-16-encoded JSON format, but UTF-16 does not support lone surrogates either!

MB: Solution is to use Unicode escape sequences. Instead of raw symbol, you use escape sequence that parses into the same value. These lone surrogates are rare in practice; this is an edge case.

MB: `JSON.stringify` already escapes non-printable ASCII symbols in the same way. This means that any userland `JSON.parse` alternatives, including implementations in other programming languages, already have to support such escape sequences in order to support anything that can be produced by `JSON.stringify` today.

MB: If you have a lone surrogate, then with `JSON.stringify` you currently just get the raw symbol in the output. With the proposal, you'd get an escape sequence for the symbol, which can be represented in pure ASCII.

MB: If you parse a stringified input string, you get the same string value as the original. This proposal doesn't change that invariant. `JSON.parse(JSON.stringify(string)) === string`

MB: But more importantly... You can take either the current serialization, or the proposed serialization with escapes in it, and pass it through `JSON.parse`. The result remains exactly the same. And that's why we believe this change to be backwards compatible. These escape sequences are specified as part of JSON, so any valid JSON parser already supports them.

YK: Are you saying that after changing, old JSON.parse will return the original value?

MB: Yes. You get exactly the same value.


YK: And that's true for other languages?

MB: Yes; stringify can already produce such escape sequences. So is this just a theoretical issue? Well, no. It often leads to bugs, and sometimes even security vulnerabilities. I gave a talk on [Hacking with Unicode](https://speakerdeck.com/mathiasbynens/hacking-with-unicode) back in 2014, with this example in it:

```js
const input = '\uD800';
const payload = JSON.stringify(input);
storeInDatabaseAsUtf8(payload);
// → error/crash
sendOverWebSocketConnection(payload);
// → error/crash/DoS
```

You can cause errors or crashes just by using lone surrogates. If you want to store such a payload in a database, it can crash your web server. If you send such a payload over a WebSocket connection, which uses UTF-8 per spec, the connection would be closed. Socket.io used to auto-restart in this case, resulting in a DoS vulnerability just by repeatedly sending a payload based on a single character. This was a real issue in a real product. Lone surrogates cause real problems. Anything we can do to help prevent these issues from happening, is a good change. Of course, we can solve this in userland using libraries like [jsesc](https://github.com/mathiasbynens/jsesc) which has a `json` option; jsesc produces ASCII-safe output by default. However I'd prefer fixing this in the spec, to avoid need for such userland solutions. There's one edge casey issue with backwards compatibility: There might be non-JSON-compliant userland "JSON parsers" that support `\uXXXX` escape sequences only for those specific symbols that `JSON.stringify` currently escapes (i.e. non-printable ASCII). These would break once they see an escape sequence for another character.

DD: It would "break" in that they would just not decode the escape sequence. So after "parsing" (incorrectly), instead of a lone surrogate, you'd still see the escape sequence. It won't crash. This doesn't seem too bad.

YK: The problem I see is that they've...(something) I wouldn't be surprised if such broken parsers actually existed.

DD: I second that lone surrogates do cause problems in real life. Chrome has 3-4 JSON parsers — some only operate on Unicode. We had bugs where it was not safe to pass through. Would be great if default did not produce problematic output.

MSL: I've seen systems that produce this, things that transcode, trim strings at 40 "characters", and end up breaking up a surrogate pair, etc.

CM: As custodian of JSON, I endorse this proposal. The edge case concerns are not a worry, because they happen as a result of lazy/sloppy code (non-compliant parsers).

DE: I like how well-written this proposal is.

JRL: To confirm, this is only escaping on Lone Surrogates, not surrogate pairs right?

MB: Yes. Also, Allen suggested possibly adding an options bag to `JSON.stringify` to opt-in to this behavior, but I'm really hoping we can just fix this by default.

(general agreement)

WH: Are there any issues with U+FFFE and U+FFFF? I suspect the answer is no, but just want to double-check.

MB: No, at least not the issues we've talked about. These code points can be represented in UTF-8 just fine.

YK: I am enthusiastic but worried about our enthusiasm resulting in overly speedy proposal advancement. Verifying Django and Express do roughly what we expect would make me feel better.

MB: To confirm, you mean their `JSON.parse` equivalent?

YK: Yes.

API: I think I found one JSON parser with this issue — it parses `\uXXXX` escapes and throws for lone surrogates.

MB: That sounds like a different issue, which may not even be an issue. That parser seems to support escape sequences. There are valid use cases for not accepting inputs containing lone surrogates, which is totally fine. It depends on the use case.

JRL: Does it also throw if it contains an unencoded lone surrogate? As in, does it behave differently if than the encoded case?

API: Not sure; I only just found this code.

MB: Please post a follow-up on the repo so we can look into it.

API: (after the meeting) https://github.com/gibson042/ECMA-262-proposal-well-formed-stringify/issues/5

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers: YK, MF, DE, MSL


## Revisiting `String.prototype.matchAll`

(Jordan Harband)

JHD: I've spoken with Dan, and all the issues have been resolved.

DE: I was also confused by the original review.

JHD: I removed the problematic statement.

#### Conclusion/Resolution

- matchAll remains at stage 3 and has no further blockers towards stage 4 besides implementations
