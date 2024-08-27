# July 20, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Yulia Startsev       | YSV            | Mozilla            |
| Robin Ricard         | RRD            | Bloomberg          |
| Mark Cohen           | MPC            | PayPal             |
| Bradford C. Smith    | BSH            | Google             |
| Chip Morningstar     | CM             | Agoric             |
| Mark S. Miller       | MM             | Agoric             |
| Myles Borins         | MBS            | GitHub / MSFT      |
| Shane F. Carr        | SFC            | Google             |
| Sergey Rubanov       | SRV            | Invited expert     |
| Ujjwal Sharma        | USA            | Igalia             |
| Philip Chimento      | PFC            | Igalia             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Nicolò Ribaudo       | NRO            | Babel-InvitedExpert|
| Istvan Sebestyen     | IS             | Ecma               |
| SongYang P u         | SYP            | Alibaba            |
| Waldemar Horwat      | WH             | Google             |
| Rick Waldron         | RW             | Bocoup             |
| Jordan Harband       | JHD            | Invited expert     |
| Justin Ridgewell     | JRL            | Google             |
| Devin Rousso         | DRO            | Apple              |
| Keith Miller         | KM             | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Chengzhong Wu        | CZW            | Alibaba            |
| Marja Hölttä         | MHA            | Google             |
| Rick Button          | RBU            | Bloomberg          |
| John Lenz            | JJL            | Google             |
| Felienne Hermans     | FHS            | Leiden University  |
| Leo Balter           | LEO            | Salesforce         |
| Mattijs Hoitink      | MHK            | Apple              |
| Mary Marchini        | MAR            | Netflix            |
| Rob Palmer           | RPR            | Bloomberg          |

## Adoption of the Agenda

No objections to adopting the agenda as proposed.

## Approval of the minutes from last meeting

No objections to approving the minutes from the previous meeting.

## Next meeting host and logistics

BT: The next meeting will be remote. More to come.

## Secretary's Report

Presenter: Istvan Sebestyen (IS)

- [Slides](https://github.com/tc39/agendas/blob/master/2020/tc39-2020-036.pdf)

IS: (presents slides) ECMAScript 2020 has been approved by the Ecma GA on June 16, 2020. Many, many thanks to everybody in TC39 who has made this possible. Otherwise the GA was via conference call, very short. For TC39 relevant: to elaborate a liaison Agreement with CalConnect was encouraged by the GA.

## ECMA262 Update

Presenter: Jordan Harband (JHD)

- [Slides](https://docs.google.com/presentation/d/1O8wGWehzMhqb_Jz2JfmyUxyUepxanc8sEVMlTRUVnfo)

JHD: (presents slides)

## ECMA402 Update

Presenter: Shane F. Carr (SFC)

- [Slides](https://docs.google.com/presentation/d/1C54jVjcuE27wq658CbMi0KEfa5ded_WIWvdq1JP8QDI)

SFC: (presents slides)

WH: Does #471 affect output or only avoid errors? I looked at it, it’s full of code so I couldn’t figure out what the effect of that change was. Is it only to avoid range errors or does it affect the way things round?

SFC: It only affects the RangeError, there is no change to the rounding behaviour. The current problem is that if you have this code, this throws a range error because the currency EUR requires two fraction digits, but you set maximumFractionDigits to 0, and that’s a conflict. However, if your currency had been JPY, for example, then there wouldn't have been a problem since the maximumFractionDigits is already 0 for that currency. It doesn’t fix any other behavior other than eliminating this RangeError. maximumFractionDigits will win out and override the currency. The current workaround is to specify both minimum and maximum at the same time, but that’s undesirable.

```js
new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
```

DE: There's a presentation coming up about this on the agenda. Let's defer this discussion.

WH: My question is answered.

SFC: Can we call for consensus? I was not aware that there was a separate agenda item for 471. So how about consensus on 459?

[silence]

SFC: I’ll take that as consensus. And we’ll get consensus on 471 when it comes up later.

### Conclusion

Consensus on PR 459.

## Test262 status update

Presenter: Rick Waldron (RW), Leo Balter (LEO)

- [slides](https://docs.google.com/presentation/d/1tsqTUZioHi8YxRF_CapxcZTjZQYDClEgXOFUm0W4gHg)

RW, LEO: (presents slides)

### Updates by the numbers, since last TC39 Meeting

113 new test files 92 commits 50 Merged PRs 26 Closed issues

### General Outstanding Updates

Coverage improvement for Atomics, e.g. relaxation and waitAsync Coverage improvement for Promise functions Intl on the fast track
`eval?.()` w/ further discussions in this TC39 meeting Improvements to IsHTMLDDA Improvements to Optional Chaining tests

### Meta: Renaming master branch to main

The etymology of "master" in git branch name conventions has been traced to the master/slave metaphor.
Tracker issue: https://github.com/tc39/test262/issues/2699 Current status: Test262 default's branch is now `main`

### Extras

Improved language in tests removing usage of blacklist/whitelist.
Thanks to Tierney for pointing those out.

## ECMA404 Update

Presenter: Chip Morningstar (CM)

BT: Do you have slides?

CM: No, I didn’t have time for that.

CM: Imagine, if you will, a blank screen.

CM: And that’s it!

BT: Okay, thank you for the update on ECMA404.

## Update from the Code of Conduct Committee

JHD: There was a tense discussion on the pipeline repo which Aki was able to step in and moderate. Otherwise, it's been uneventful.

## Retroactive consensus on Unicode 13 property names and aliases (#1896, #1939)

Presenter: Michael Ficarra (MF)

- [PR #1896](https://github.com/tc39/ecma262/pull/1896#issuecomment-642301441)
- [PR #1939](https://github.com/tc39/ecma262/pull/1939)

MF: We originally did this thinking that it was entirely an editorial change. We brought this to the committee asking for an expedited process, but the committee actually decided to do the opposite and treat these updates as normative changes. In the end we never got consensus on the actual normative changes, so this item is asking for consensus for these changes that have already been merged. If there is no consensus, we will back them out.

BT: Can you give a description of the PRs?

MF: We include Unicode data in three tables in the spec and use it in RegExps. The committee decided we want to pin that data instead of referring to the latest Unicode data, because that's the way that engines will implement their unicode support.

MF: I didn't consider that some delegates might be missing context from the last meeting, and don't have materials prepared. If anyone feels they are not informed enough, I can put some slides together and bring this back for the next meeting.

BT: Does anyone have any questions on these PRs?

[silence]

MF: Okay, great, thank you.

BT: Consensus that these two PRs stand as merged.

## Specify \8 and \9 in sloppy (non-template) strings (#2054)

Presenter: Ross Kirsling (RKG)

- [PR](https://github.com/tc39/ecma262/pull/2054)

RKG: (presents PR)

WH: What is the polarity of the changes? The presentation was unclear. You mentioned that you’d make an exemption for strict mode in Annex B. What does that mean?

RKG: We can’t quite hear you WH, but I can understand from the text version on the queue, asking whether this affects strict mode. The user-visible impact is just on strict mode, that \8 and \9 become a syntax error in strict mode only. The polarity is confusing because the way we specify this is by allowing \8 and \9 in sloppy mode via B.1.2.

WH: Will \8 and \9 continue to be errors in strict mode?

KG: Strict mode is unchanged, these will still be errors. The hope is that engines that currently allow them in strict mode will prohibit them because they will be explicitly forbidden.

DE: This investigation was really great and I'm glad this can now be standardized. I support consensus.

BT: Okay, any objections to merging this PR?

[silence]

BT: This PR is good to go.

## Adding Reflect[Symbol.toStringTag] (#2057)

Presenter: Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/2057)

JHD: (presents PR)

KG: To be clear, this is asking for consensus not just for this object, but for this to be what we do going forward as well.

My position is that I don’t think it hurts anything to make it more obvious if you accidentally end up with the `Math` object in a variable that you then stringify, you know that it’s the `Math` object rather than `[object Object]`. That’s already the case with the `Math` object and it seems like it would be good to add it to other objects. It seems like it's helpful in some situations and never harmful. I'm in favour of this.

SYG: I'm not asking for you to do this work, but have you looked if there are namespace objects in upstream specs that would need this added?

JHD: The reason Domenic filed the issue [tc39/1970] is that the web platform is inconsistent and wants to be consistent. Of the three web namespaces WebAssembly, console, and CSS, WebAssembly gets a toStringTag, and the others do not. So if we decide that it should be added - which is Domenic’s recommendation from the HTML side - then the web platform would align in this way.

SYG: Thanks for the list, I’m also in favor, and we should make sure that the other specs standardize toStringTag.

BT: Any concerns?

[silence]

BT: Sounds like consensus.

## Should eval?.() be direct eval? (#2062, #2063)

Presenter: Ross Kirsling (RKG)

- [Issue #2062](https://github.com/tc39/ecma262/issues/2062)
- [PR #2063](https://github.com/tc39/ecma262/pull/2063)

RKG: (presents PR)

MM: First, let me clarify that with regard to the specific syntax on the table, I don’t care, in the sense that I don’t think that people are going to be accidentally writing this, so the hazards of having it mean the wrong thing is not a big issue. But the reason why I’m going to spend airtime debating is because of the issue of taking this as a precedent for a general policy, in particular what the consideration should be, and whether or not it should be a syntax error.

MM: One of the criteria that we have applied and should continue to apply is what I’m going to call the hierarchy of painful surprises. If there’s a programming construct that some people who have never seen it before will assume means one thing, and some people who have never seen it before will assume means something else, then whichever one of those choices we make, some part of that population will be surprised. With something like optional chaining, it’s not a rare construct, and the thing that has a potential surprise has tremendous utility. So the cost of making it a syntax error is incredibly high. Once it becomes available in the language, it will be used a lot, and those who use the language will rapidly become familiar with it.

MM: With -2**3, the issue for me was not that the person might make different decisions based on whitespace. The issue was that the surprise in both directions would lead to programs silently proceeding with wrong data, leading to painful runtime surprises possibly after code is deployed. The utility of allowing it (i.e. the cost of disallowing it with a syntax error) was very small. The extra cost of having to put it into parentheses to disambiguate it was very small and it avoids anyone having to face the cognitive overhead of remembering which of these two choices to take. The eval?. is not going to be common, it’s going to be very rare, when you’re reading someone else’s code you’ve probably never seen it before, so the reason I don’t care is that you’re not going to assume what it means either way.

BT: Point of order, there are 2 minutes left in this timebox.

MM: I’ll get to the punchline. A SyntaxError is an error during development time that is low cost even if you're surprised by it. The common reaction is “well that was rejected. How do I write the program I intend so it’ll be accepted?” The costs are low, the benefits are high. In this one I don’t care, but in general I think that’s a principle we should come back to.

WH: For here, my opinion is that we should not make any changes, we should keep `eval?.` indirect. There’s lots of operators you can pass `eval` through that turn direct eval into indirect eval, so I think we should keep it simple and say that if you pass eval through any operator it becomes indirect. We should not make this into a syntax error any more than we should make `(0, eval)` a syntax error.

SYG: I’m leaning - not strongly for - making it a direct eval. I am strongly opposed to making it an error, though, for the same reasons as WH. My priority here is consistency with the mental model that we’ve been teaching for optional chaining. With that being a very common feature that people will use, I think aligning with that, it would seem correct that eval?.() should be direct eval in that optional chaining just decomposes. I don’t think normal devs think about direct vs indirect eval, but I think they will think about ?.() as calling something if it's defined (not nullish), so that's the reason I'm leaning towards direct.

JHD: When someone's using optional chaining, I do think they're thinking "this is the same as if I didn't put the ?, if the thing is not null or undefined." I don't think they're thinking about direct or indirect eval, though. Typically, when I’ve seen that explained, it’s that only if you’re typing literally `eval()` that it’s direct eval, and anything else is indirect. My understanding was that that decision was a way to web-compatibly remove as much direct eval as possible. It was a priority for the committee at the time to eliminate direct eval. If that's true, then making it direct eval would be adding a new source of direct eval, and invalidating the usual explanation of what direct eval is. It lightly seems to me that indirect would be the better choice, because anyone who wants direct eval isn’t going to expect eval to be nullish.

MM: I was there at the time, and JHD is correct. We were trying to minimize direct eval because it's dangerous and strange.

SYG: I think from an implementation point of view, minimization isn’t as important as having it be syntactically analyzable, which was the purpose of that split. And from that perspective, eval?. is still completely analyzable.

BFS: [inaudible] (queue question: “reason to want to perform anything except direct eval in same source location?”)

RKG: I'm not sure I have an answer for this.

BFS: [in chat]: agree with JHD, can skip

JRL: Want to remind everyone that this will affect future syntaxes such as the pipeline operator. Future things that also perform a call operation should also follow this, like `'source_code' |> eval`. That should also follow whatever precedence we set today.

BT: RKG, did you get what you needed?

RKG: Sure, I see a trend towards preferring to indirect, which I guess I’m okay with. I suppose I could rephrase to ask if anyone would object to direct.

WH: I would object to direct.

MM: I would also object to direct after hearing Justin's point.

RKG: Okay.

### Conclusion

Keep spec as it is (indirect eval).

## Forbid Numeric Separators in NonOctalDecimalIntegerLiteral fractional / exponent parts

Presenter: Leo Balter (LEO)

- [Proposal issue](https://github.com/tc39/proposal-numeric-separator/issues/49)
- [262 issue](https://github.com/tc39/ecma262/issues/2090)

LEO: (presents issues)

WH: What would happen if you wrote `07e1_0`?

LEO: I haven’t prepared everything - sorry, I’m trying to refresh my mind, but if we tackle this question do you mind if I take a note? I know so far it’s not implemented, or…

???: It appears to be an error.

LEO: Yeah, so `07.1` is an error, legacy octal digits cannot have fractional or exponential parts. So exponential operators are not allowed in legacy octal numbers.

WH: Why not disallow `08e5`?

LEO: This is something that has been there since forever. NoOctals allow exponential parts. I’m not sure if changing this will break the web, I haven’t done any research into whether we can remove exponential parts.

LEO: So should TC39 work on a fix for this, or just go as it is today? NoOctals are ridiculous but I’m not sure if people are using them today. This is too much of a syntax patch for 262 to be worried about ??? being valid in ??? parts.

WH: Since `07e1_0` or `07e(anything)` is an error, my preference would be to disallow these weird non-octal numbers with exponents or fractions altogether, if it's possible.

LEO: Here is my follow-up slide that I just created. I’m not proposing for this thing to happen - I just wanted to point out there is an issue related to numeric separators and NonOctal numbers. But honestly, I agree with WH and SYG.

WH: This is the first time I’ve heard of those legacy non-octal numbers allowing fractions but only if you include a number greater than 7 before the fraction. If there is a reason to keep then then we should work that out, otherwise we should get rid of them.

LEO: [inaudible]

LEO: What I want is to not block numeric separators from advancing to stage 4. The status quo is ??? and we can follow up with a broad solution, if we should be disallowing ???. Can we get a ??? for what I’m asking?

RPR: What LEO says is that this is not going to block the numeric separators proposal and he will follow up with a separate proposal on this?

LEO: Yes.

?: Do we have an agreement?

WH: What are we agreeing to here? We’re only discussing LegacyNonOctals, not numeric separators. So what is being proposed?

LEO: I’m asking to not block numeric separators from advancing to stage 4, because a change would ??? and I’m not really a big fan of that. Also we can tackle a follow-up for a better solution to disallowing exponential parts - perhaps fractional parts as well - from NonOctals, which I believe is also what WH and SYG expressed as what they would want. In this case we would not try to fix numerical separators on Non-octals and ??? and in this case the issue should be closed

WH: I’m fine with that.

SYG: I’m also fine with just allowing it.

RPR: Sounds like consensus.

LEO: PR will be closed, numeric separators will be unblocked on this matter.

## Cognitive Dimensions of Notation: a framework for reflecting on language design

Presenters: Yulia Startsev (YSV), Dr Felienne Hermans (FHS)

- [slides](https://docs.google.com/presentation/d/1OpKfS5UYgcwmBuejoSOBpbgsYXXzO0gG7GJHo65UXPE)

YSV, FHS: (presents slides)

WH: I don’t understand your definition of Viscosity. You said that eliminating types reduces viscosity yet removing types removes the possibility of finding all places that need to be looked at when revising data structures so it makes it harder to modify data structures.

FHS: It’s an interesting question. We will go into detail on this dimension - YSV will give some specific JS examples, which may give you more information. You can definitely disagree on whether something will increase or decrease viscosity. It’s really about the ease of changing things, where you might be thinking more about error-prone-ness. It’s definitely true in general that we don’t agree whether something increases or decreases a dimension. It’s not a measurement, it’s meant to be a jumping point for these discussions.

WH: I’m still unclear by what you mean by Viscosity.

[crosstalk]

FHS: Can we defer that question until after YSV has shown the concrete examples?

WH: Sure, I can wait.

YSV, FHS: (resume presenting slides)

YSV, FHS: WH, did that clarify your confusion?

WH: No, in fact you’ve now made the confusion worse. You used Impact, I have no idea what it means, other than getting the sense that positive Impact is good.

FHS: I think what YSV meant by impact is that when, for example, comparing function syntax and arrow syntax, making a decision between those two options will impact a certain dimension. Impact is not necessarily good or bad. Imagine a language where you only have the function syntax with explicit returns, versus a language where you only have arrow syntax. Either decision will have impacts on visibility.

WH: So is Impact a dimension or is it just that something affects something else?

FHS: Yes, just that something (a new language feature) affects something else (visibility, readability, error-prone-ness). It’s just meant to give us an idea of what language changes can affect, and for whom.

WH: Back to the original question, what are the definitions of the dimensions? They are unusably fuzzy right now.

FHS: I totally understand. The purpose of this presentation is not to go over all the dimensions because it would be too large. The idea of today is to give you a sense of what the framework is and how some of the dimensions could apply to JavaScript.

WH: I have more to say but I’d prefer to wait until after the presentation.

FHS: (resumes presenting slides)

SYG: Thanks for the presentation. It seems most of these dimensions are focused on syntax-like or notational features. But implicit in this - even for stuff we design purely as syntax features - their semantics directly affect how they’d be rated on the dimension. And there’s a lot of leeway there. For example, given the same syntax, if I change the semantics, it could have a significant impact on some of the dimensions. How is that handled in the framework?

FHS: I don't think I'd say that it's purely about syntax. Syntax, or even a diagram if you take it outside of programming languages, always means something. (???) Maybe the question I should have started with is that as computer scientists we are always focused on whether we can measure something with numbers. This framework is more a way to make sure that we discuss the right things. So maybe I say, hey maybe this syntax has this impact, and then you say well maybe it wouldn’t have this impact because of this aspect of the semantics. (???)

SYG: This would help us have a shared language with the PL community. But coming from ACM on programming languages, I am not familiar with this framework of languages. Which PL community were you referring to?

FHS: It’s not necessarily the PL community as in PoPL, it’s more at PPIG (Psychology of Programming Interest Group) for example. This is one of the conferences where much of the work in this area has been appearing. But also for example, the international conference for program comprehension that looks at existing comprehension/codebases (...???). So maybe it's less PoPL side of programming and more ??? that I'm referring to. I do think it's sad that the PoPL crowd doesn't embrace this yet.

SYG: I'm unfamiliar with that side of PL academia. I'm more familiar with POPL, PLDI, etc. Are there papers from the PPIG side for example, that have had impacts on academic prototypes, industry prototypes, etc, where they put this framework to work and build things out and see how it goes? If so I’d love to hear more about that.

FHS: Some of my work, which I showed here, designing an alternative interface for spreadsheet formulas, is being picked up by Microsoft Excel. Also lots of the evolution papers might not necessarily impact the design of a programming language, but they might impact the design of an API, or the design of how an IDE works to help with understanding. Because if a language has low visibility, then an IDE might help increase that. (???) It's probably because this framework is not so very well known, and also this type of research is not very well-regarded by the technical side of the programming language design community. There's some part of people who publish in PoPL who would say oh, well we just design programming languages, whereas people in software engineering like to look at how people actually use programming languages.

CM: First of all, very interesting talk. Certainly TC39 has no shortage of peculiar local jargon, though I’m not sure any of the examples you gave are actually examples of that, because most of those are importations from outside TC39. I think there's an anthropology dimension: someone will take things from another group they're a member of, and it will spread like contagion. And I think tracing the patterns of those might be interesting. But the thing I wanted to focus on was error-prone-ness. I think it's a slippery idea. A lot of language design features, you might think of them as speed bumps, because they increase the probability that you'll make certain kinds of errors that are easier to deal with, and decrease the probability that you'll make certain kinds of errors that occur later down the road and are more difficult to deal with. A lot of the programming tools and IDEs and things we've been developing have been designed to try to front-load things, so you tend to have more errors earlier but they’re simpler and easier to deal with. So I think error-prone-ness is way too slippery to be tossed off as a dimension in the way you have.

FHS: Yeah, so I can be brief. I think the only thing I can say there is that error proneness can be clearer than things we use now like “foot-gun” which has the same slipperiness.

CM: Footgun is… it has an extended penumbra of cultural meaning. But that refers to something where it's not only easy to make a mistake, but it leads you down a garden path to making decisions where you'll be sorry later.

YSV: We’re focusing very much on specific dimensions, and I think one thing that was very interesting when I started looking at the framework is that many communities develop their own dimensions as they go. But the framework has three parts: there’s the dimension, there’s the user, and there’s the activity. And having a list of activities that interact in this space. And not all dimensions interact in all spaces equally or in the same way.
And for me what was really interesting was the emphasis that this framework puts on how people experience a programming language. Specifically, when we design, we design for its use, and it's being used by people. The emphasis in this framework on the user, who the user is, and what they're doing would be useful when we are evaluating and designing and asking questions. I see the framework as a starting point for asking questions, like how is this affecting people, and who is it affecting, and what can we find out about those things.

FHS: For anyone remaining on the queue, please reach out through the discourse page (link?), IRC, email, or the August 27 call (details?).

### Remaining queue

1. New Topic: This will lead to time-consuming taxonomical debates. (WH)
2. New Topic: These words seem more precise and easier to learn than our current jargon. I support gradually adopting these terms. (DE)
3. New Topic: While this introduces a more formal framework to discuss language constructs, the impact is still subjective. (MLS)

## Class static blocks for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://tc39.es/proposal-class-static-block/)
- [slides](https://onedrive.live.com/view.aspx?resid=934F1675ED4C1638!291940&ithint=file%2cpptx&authkey=!ADFod3jufA89iM8)

KG: About private declarations in particular, I think that most of the examples with private declarations, I feel like those would be nicer using private declarations outside of classes - that proposal. In particular -

RBN: This example? (link)

```js
private #x;
class C { outer #x = 1; }
class D { constructor(c) { c.#x; } }
```

KG: Yeah. I don’t find myself concerned about giving both read and write access given that it’s the same source file, and I’m not concerned about hoisting the definition out so you can talk about it, because that’s already a normal pattern with variable declarations that you’re closing over. I do think that wanting to do all of the initialization as part of the class body - especially with regards to static fields - those are reasonable things to want out of this. So I’m okay with this, I don’t feel strongly because most of what I would use it for would be solved by private declarations instead, but I’ve used similar features in other languages.

RBN: One thing that I neglected to mention in the slides: we've been having some discussions in the decorators group meetings about alternatives for decorators. Some of which will possibly be discussed in tomorrow’s meeting. One of the proposals we've been discussing is one which would theoretically make heavy use of static blocks, which was a motivation for us to bring this back into discussion. Whether or not that will be discussed in the decorators presentation I’m not sure, but there are other reasons we’re looking into bringing this up (back?).

MM: I'm curious about the scoping of the class name. You mentioned that you refer to the class as `this`, which is fine, and you have to figure out what the binding of the class name is. But I know from function declarations, the binding of the function name to the function inside the function is a separate binding from the one outside the function, because the one outside the function is assigned to, and the one inside the function is the original one.
I assume that's true for class declarations itself?

RBN: Actually that’s not correct. The name of a function declaration - we’ve run into this in TS with regards to class declarations - the name is only in the outer scope, so references to that function inside the declaration change if you replace the function name outside the scope. In a function expression, the name is bound inside the function immutably. Classes are doubly bound. They are bound both inside the class declaration methods themselves, and in the outer scope. We ran into this with decorators because if you try to reference the name of the decorated class inside of the class, that replaced the class declaration, because if you have a subclass that overwrites the binding of the class, then it is not reflected inside the class.
So classes have completely different semantics when it comes to binding names to bodies inside the class than outside.

MM: Thank you for that clarification, very surprised about functions but that’s fine. Since classes do have this double binding, you could have the class name be bound to the class when you're inside the static block, but still have it be temporal deadzone outside the class until the class is initialized.

RBN: That is feasible, but there are some caveats as well. Class expressions and default class exports can be unnamed. I don’t believe your question was specifically around whether or not we should use “this”, but there are going to be cases where there is no name being referenced.

MM: This part, I have no argument with, I think it's the right thing. I'm saying the class name could be available inside the static block even though outside the class as a whole, it’s temporal deadzone until the class is initialized.

RBN: That would likely be the case. Following along with how class definition works, the name would exist, but it’s not actually bound with a value until the definition has completed evaluation, because of how the double-binding works.

MM: I like that double-binding, is that in the proposal now?

RBN: Double binding already exists. I'm trying to find out how to fit it properly into the spec text. Generally the evaluation of these statements would happen after the outer definition has been evaluated and TDZ is bound, so I’m still trying ???.

MM: So, that part I very much object to. I think the class name outside the class should be in TDZ until the class is initialized.

RBN: No contention about that at all. I agree that’s the case.

MM: Oh! Okay then I misunderstood something.

RBN: That's how it currently works. I'm trying to say the class will be TDZ outside the class definition until the class is fully initialized. Which should align with how static fields are initialized.

MM: Great. I very much support this for stage 2.

SYG: I really do like the multi-step static initialization. I think that alone is enough motivation for something like this. My one comment right now is - and as folks have pointed out this is not a stage 2 blocker right now - I’m unconvinced by the special `var` treatment. I would like to think of this as not a function boundary but a block that runs. So, to have vars not escape the static block seems weird to me. I'd like to understand the motivation for that better, for Stage 3.

RBN: My question would be, how would you imagine that `var` would work in that case? Would it lift out of static block into the surrounding function scope?

SYG: Yes

RBN: I’ll be honest, if I could’ve written this as `static(){`, then I would have, but that's already legal JS Because it has special semantics around how `this` works, because otherwise who knows what `this` would be referring to, and then we have the complexity around what happens with return, await, yield. I saw on IRC that there’s some discussion about the class access expressions, that one, I may eventually bring back, but that one had some strange things around evaluation, since its main motivation was around private static and subclassing.
So again the main reason that it’s essentially treated kind of like a function but I can’t put parens in because it would conflict with existing syntax, and as such vars would not be hoisted out.

SYG: So you really want this to be thought of as a static constructor, not a static block.

RBN: It is essentially a static constructor, since you can have an instance method called static on a class.

SYG: I have to think about that some more. I'm okay with the idea of a static constructor but I have to think about it. But again, not a Stage 2 blocker.

RBN: And much of the references I have on the explainer page are to prior art with static constructors in languages like C#, Java, etc, and this is trying to mimic that and provide some of the same capabilities.

WH: I agree with RBN about not hoisting `var` out of a static block.

YSV: I’m sorry to be the one to say this, I know that you were mindful of this being a little late, but unfortunately because it was late, I wasn’t able to review it, the SpiderMonkey team wasn’t able to review it, we've put a number of proposals through the ringer for Stage 2 advancement.
I wish I didn’t have to say this would be blocking, but unfortunately I need more time to review it thoroughly.

RBN: I would like again to restate that this has had no substantial change in syntax or semantics since stage 1. If you do feel the need to block based on time, I understand, it was my own fault, but I just wanted to make clear that there have been no major changes since stage 1.

YSV: We didn't have enough time to review the Stage 1 proposal, since we have limited time. When something is proposed for Stage 2, it becomes higher priority.

DE: I think this is a really great proposal. I’m definitely sympathetic to YSV’s concerns, it’s hard for everyone to review the stage 1 proposals, but if it weren't for that, I'd be in favour of this going to Stage 2. I agree with this idea that it's not only useful for things in private scope, but also logically grouping things in the class so it’s easier to understand. I was surprised by the `var` scoping as well, but I don’t see it as fatal, and it’s definitely not a stage 2 concern. So once this has been proposed with enough advanced notice for stage 2, I’d be in favor of it going through.

### Conclusion

Not advancing at this meeting.

## Host hooks for Job callbacks

Presenter: Shu-yu Guo (SYG)

- [Slides](https://docs.google.com/presentation/d/19S97ZqhibJABqzeP5ZU6Flk6TVgWzXuvJWFbNTTfpWs)
- [PR](https://github.com/tc39/ecma262/pull/2086)

SYG: (presents slides)

WH: If I understand this correctly, you get the realm passed through from the caller of something like `setTimeout` (on the “How does this work?” slide) to the bound function?

SYG: That’s right. How WebIDL specifies this is that every time you pass a callback to a WebIDL interface that ???, it captures a tuple with a function object and the incumbent ???.

WH: And if `bound` is from a different realm than the one in which `setTimeout` is called, which realm does it run in?

SYG: It will always run in its own realm. But ??? It’s really arcane, but due to legacy reasons, there are two parallel stacks of realms that are used for different things. And the incumbent was not hooked up correctly. ??? It’s only really weird when it’s a native function, like a platform-provided or host-provided function. So WebIDL already does this - APIs like setTimeout already capture the incumbent. What doesn’t capture the incumbent is ECMA262 APIs that interact with ???. Right now, that’s Promise. So the behavior of `bound` in this code (link?) is different from the behavior of `bound` in this code (link?), except in Firefox which does implement WebIDL semantics.

SYG: (resumes presenting slides)

BFS: I’m a little bit curious about the host-defined options. I think the expectation is to virtually always use `GetActiveScriptOrModule`.

SYG: For the dynamic import case?

BFS: Sure.

SYG: That is the plan, though I think on the HTML side some editors and Chrome engineers are trying to simplify this by combining it into an incumbent-like concept, so you can key the active script off the incumbent.

BFS: I know in node we’re not set up for that. That wouldn’t work for us at least how we’re currently designed. My main curiosity is one, if you do indirect eval on this thing I guess it would basically cascade? Would that mean that in order for you to polyfill something that inherits something - so setImmediate for example is not really available in browsers, it accepted a string argument, so it was enqueueing a job - how could you have that interoperate in the same way? The GetActiveScript will be your polyfill's code or the eval's wrapper (???)

SYG: The question about setImmediate is that it does not take a callback, it takes a string?

BFS: The issue is that you’re tying the callsite that queues the job to ???. But if you polyfill something, you’ll always get the polyfill’s callsite.

SYG: I don’t really know how that works today for web APIs, because this is the status quo today for web APIs that take callbacks. I guess polyfills don’t apply the same way, because if you’re polyfilling, there’s no way to tell the browser or engine that it’s not user code. So when your polyfill code runs, no matter what you do, it'll look like user code. If you’re polyfilling, unless there’s some extra-language way to tell the engine that your polyfill code should be considered native code, so maybe that's not a very satisfying answer, because it sounds like you can never polyfill this correctly. But on the other hand, this is so edge case-y I don’t think it’ll really matter.

BFS: I spent some time in the last week sorting through this. Overall I think it's the right direction, but I think we shouldn't move forward in this meeting. Overall that is the right direction but we need to fix some edge cases but if it's so edge-casey, do we need to fix it? If it's not polyfillable--we usually take a stance of allowing polyfills of things. We could even do it offline; that's my only concern. If there's consensus besides that, that's good.

MM: I am against this proposal. I don't want to see this move forward at all. The legacy behavior of the browser here is one of those things where the HTML spec can say purposeful violation, but there should not be any such mechanism in the TC39 spec because it shouldn't be something that any other host should consider hooking. This notion of "incumbent" is dynamic scoping, and it's incoherent. The polyfill example shows the incoherence of it.

SYG: I see, what I take issue with in that response, while it's legacy in the sense that new APIs are not supposed to rely on the incumbent machinery, we did specify dynamic import with this dynamic scope like behaviour.

MM: I’m sorry, I suspect it is a misunderstanding of dynamic scoping

SYG: the baseurl for a dynamic import, you need to determine it when there is no user code on the stack. As shown in this example here, where you can cause a dynamic import to happen when there is no script on the stack. Hosts need to be able to determine when that is. I would be disappointed that ecma262 would not consider it and I would want to point out that Firefox has been shipping this behaviour for a long time. It's not completely a legacy thing that we're trying to phase out.

MM: Let us take a good look at the semantics of dynamic import offline. The only sane answer for the base URL of dynamic import, which is that the eval evaluating the string came from some Realm, so we'd talk about the base URL of the Realm where the eval came from.

SYG: that is the semantics and that is the thing that this host hook would do

MM: That semantics is lexical. It doesn't need a host hook. The semantics is that the realm is carried around in the eval, and the eval captures the realm it was created in.

YSV: It's been a bit mischaracterized as Firefox being the only browser doing this. Chrome does implement this partially. So we’re not just aligning with Firefox, if we were to align with one of the other browsers, that would have to be discussed in more detail. The discussion between the browsers has been that this is the simplest way to align.

SYG: That's correct. If there's no JavaScript on the stack then we are aligned. (???)

SYG: The conclusion is that I will chat with BFS about the polyfill point and will talk with MM about dynamic import but I don’t really know what conclusion to get there

MM: The issue is understanding what dynamic import does according to the EcmaScript spec, because if it implied dynamic scoping, the language would be badly broken in ways we never intended.

### Conclusion / Resolution

- Meet together offline to continue discussing the issue

## Handle awkward rounding behaviour

Presenter: Ujjwal Sharma (USA)

- [PR](https://github.com/tc39/ecma402/pull/471)
- [slides](https://docs.google.com/presentation/d/1QGUTz61o-X_HEgYrkTUXtScoRpu_KhXsoKxGyMQJthc)

USA: (presents slides)

SFC: I'm really happy with the work USA has been doing on this and I think it definitely fixes a bug. It’s never good when the same code works in some locales and not in others - this code can throw an exception in some locales and not in others. So I’m very happy with the work USA has been doing in this PR.

USA: Thank you SFC. I believe I can ask for consensus pending the remaining editorial changes and the test262 PR.

[silence]

RPR: Congratulations, you have consensus.

### Conclusion/Resolution

- Consensus
