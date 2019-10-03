# November 17, 2015 Meeting Notes
-----

Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Sebastian McKenzie (SMK), Waldemar Horwat (WH), Mark S. Miller (MM), Paul Leathers (PL)

-----

## Async functions (Stage 4 Process Discussion) (BT)

YK: can we order the agenda better? Lets make a template and follow it next time

BT: potential ES2016 items first

BT: async function process discussion, they have been stage 3 for 2 months, implemented in edge (soon FF), implemented in babel

YK: babel version i

DD: does babel pass Test262

BT: no Test262 yet

YK: thats a blocker

DE: Is babel 100% spec compliant, we should wait until we have 2 100% spec implementations

YK: does transpiling to generators make the edge cases easier to deal with?

SM: I believe so

YK: It seems like edge cases are always going to happen

DE: if we wait for FF, we will get more implementor related input

YK: we need to figure out this rule, babel "loose" mode clearly doesn't count. Does babel trying for high fedility count?

DE: browser implementations will likely have different criteria

YK: high fedility simulation should be sufficent

BT: edge is basically desuguring to promises + generators

AK: two implementations that pass the test, should be sufficient. (tests implied as Test262)

BT: I believe we as a group should be able to deem that the current landscape is or is not sufficient.

YK: Are we holding babel to a higher standard then browser?

DD: there is a difference between bugs and missing features

DE: we should wait until 2 implementations pass the tests

DD: test should be approved by reviewers.

BT: mainline tests must pass

SP: In summary, tests approved by reviewers must have 2 implementations that pass.

BT: should we update the process document, the champion comes with a set of tests for stage 4, the group uses this to +1/-1

YK: source2source should be considered sufficient for "implementations'

AK: stage 3 is somewhat problematic, implementations must put out there neck early.

SK: sounds like a good filter, if no implementation wants to stick out their neck maybe the feature doesn't have value

DE: if there are tests, that we agree are good, any implementation should be sufficient.

BT: if I come back tomorrow with mainline tests, that reviewers agree on, is babel + chakra sufficient?

everyone: yup

BT: babel should be considered an implementation.

KS: stages are meant to signal churn risk, the only problem with babel is less likely to give churn feedback

YK: churn feedback?

KS: 80% implemented, 20% missing, will babel give feedback?

YK: babel does provide this feature.

DD: can we accept 2 user-land transpilers

YK: browsers could also implement as source2source step.

YK: proxies are a good example, likely input from babel isn't as valuable. As it must make all . operations slow. Which wouldn't be acceptable for a runtime. and also why babel doesn't offer proxies.

YK: so only cpp compilers qualify?

BT: we can look at it case by case, and deem if it is sufficient or not. Some features are likely fine as source2source and others are not.

YK: DD you are right to be worried

DD: thanks you, we can move on.

BT: time for a regexp talk ?


#### Conclusion/Resolution

None yet.


## Object.values/entries

JHD: OK for stage 3? It got signoff
... [general consensus]

#### Conclusion/Resolution

- Stage 3 acceptance
  - Object.values/entries


## String.pad{Left,Right}

JHD: Concerns raised on es-discuss: 1) No grapheme handling (response: then other existing things should be changed, and nothing cares about it. Every language follows native string support in its padding.)

... [General consensus that that's OK]

WH: I see the choices as either doing this simple thing (measuring code units) or doing something really, really complicated that works correctly on graphemes. The simple thing is useful in practice, while implementing grapheme measurement would be too complicated and take us a long time. So I support this.

JHD: 2) Naming: we sometimes use left/right, sometimes start/end, this one feels right. The language already equates left/start/index-0 and right/end/last index. In this context, RTL doesn't apply...

DD: How about padStart, padEnd?

DH: Well, it's very entrenched

JHD: BiDi is really complicated

DD: Eurocentric

DH: How hard will we get trolled? Being willfuly different...

YK: people wouldn't expect padLeft, if the language has padLeft and it does something different. That is wrong. If we have other methods do the same thing, we are good.

JHD: Only remaining objection remaining is the name

padStart only makes sense if its RTL aware
YK: saying padLeft, and meaning visual right is clearly bad.

YK: any objections start/End ?

CM: Remaining parallel with trimLeft/trimRight, established names?

DD: Add trimStart, trimEnd and rename to padStart, padEnd as part of annex B.

#### Conclusion/Resolution

- Stage 3 acceptance
  - Rename to `padStart`/`padEnd`, update trimLeft/trimRight proposal to also include trimStart/trimEnd. padStart/padEnd approved


## Array.prototype.includes

DD: CC + FF in betas

DD: Test262 works

DD: Safari doesn't have TypeArray.prototype.includes

DD: Stage 4?

DD: should it be in unscopables?

BT: if it not in unscopeables it may be ok?

BT: real world with no breaks, should be good.

DD: lets make it unscopable

DD: stage 4?

YK: yup

#### Conclusion/Resolution

Move to stage 4 (tomorrow when it's added to @@unscopables)

## function.sent

BT: We have not gotten any feedback at all, not from implementors, no implementations, no Babel

YK: That's scary; we need some feedback

DE: Do we have reviewers?

BT: It's so tiny! It should be OK to add it. It would be almost impossible to design it  wrong.

JM: But, does anybody need it?

https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md

SP: Let's defer until we have a strong advocate with use cases

BT: There are use cases for it, it's just that no one's used it, because it's not implemented anywhere

YK: Is stage 2, only about completing the spec language? dave's tweets say userland experiment

AK: The thing we're trying to avoid is adding something to the language that won't be useful for anyone

BT: Implementing something at Stage 2 carries quite a bit of risk

#### Conclusion/Resolution

 - Designated reviewers: DE and DD
 - Side process conversation: AK, YK, BT

## Object.observe update

AK: Object.observe is going to be deprecated in Chrome. I'd like to formally withdraw it from the stage process.

YK: I already submitted a PR to remove it from tc39/ecma262/README.md!

AK: I haven't gotten very much negative feedback

YK: Maybe the framework wars will be settled and we can revisit this question

#### Conclusion/Resolution

Object.observe is withdrawn

## Should destructuring declarations without bindings throw?

```js
let { } = obj;
let { foo: {} } = obj;
```

BT: who is in favor if this being an error?

BT: this may actually be programmer intent

BT: it may be expecting side-affects, exhausting an iterator etc.

YK: decomposing (commenting out large chunks of a destructing statement)

BT: code-gen may not be as ergonomic

YK: code-gen supporting this is simple enough, that isn't a good reason

BT: no binding identifers in any pattern or sub-pattern, should error.

YK: it has to be recursively defined.

DH: refactoring transformations breaking down, due to this restriction is is unfortunate

DH: without a good argument, I error on the ergonomics wins composition over the error.

WH: This is like trying to delete the number zero from the number line. It's cognitively simpler to keep it than to avoid it. {} and [] are legitimate objects and shouldn't be a special case.

DH: it is the base-case of a recursive definition.

YK: As I write code, I often write this, expecting to fill it in after. Only to find a parse/syntax error.

DH: patterns are defined to symmetry of the structure, in JS we can define 0 or more for [] and {}.

BT: is there strong support to make this an error:

YK: what was the exact error

BT: A user used a : instead of = when attempting to set a default during function arg destructuring.

YK: This seems like a good use-case for a linter.

WH: We get these kinds of errors anyway with users putting object literals into contexts where ES parses them as blocks.

?: There is a use case for users whose style guides do not allow holes in arrays

BT: current semantic remains?

everyone: agrees

#### Conclusion/Resolution

Current semantics stand

## legacy function hoisting semantics in sloppy mode (DE)
https://github.com/tc39/ecma262/pull/175

DE: self defining functions, GWT generates this whenever there is a static block

BT: how many sites?

DE: GWT is hundreds of thousands, FB uses etc. Quanitify the impact is hard to do.

YK: BT how many sites did edge break

BT: none

DE: there are several things together that cause this issue.

DE: try { } catch around all code, function hoisting out of try block

DE: summarize, the problem is:
1. sloppy mode block scope function (in a try block likely)
2. self defining function
3. the self defined function is called multiple times
4. the function is not idempotent.

DE: Google inbox broke.

DE: several work-arounds, but require changing existing code.

YK: IE 11 has this in prod, how have they not recieved bug reports?

DE: I have a proposal that may work, you may not like it
 1. TL;DR making sloppy mode function declaration "host' to a var outside the block
 1. would not change strict mode
WH: If the outer block contains a binding with the same name as the function being defined in the inner block, will this proposal break that code?

DE: Yes.

YK: Intersection semantics, we will only support use-cases that work cross platform

BT: We did aggregate large amount of data, and did not find this case.

DE: Team working on Google inbox doesn't know which way to fix inbox breakage because what's broken by the hoisting semantics is undefined.

WH: The ES2015 spec is well defined. There is nothing undefined here about how to fix Google inbox to be compatible with it.

YK: we knew this is a composition breaker

DD: 3 browsers support, 1 browser does not. Should we see if people update?

YK: it doesn't seem like a widespread problem, inbox is an issue but it may not be a bigger issue.

BT: + 2 years of IE11 and edge (tens of millions of users)

DD: the mobile web, isn't represented here.

PL: We researched the public web, looking for this. We found some issues, solve them, came to consensus

WH: the issue is, this fix breaks other things

DE: what does it break

BE: we don't know

WH: the future is bigger then the past, lets not sacrifice the future for the now.

WH: The scary part is that under this proposal the resolution of an identifier in the outer scope will change depending on whether the code is strict or not. The same code will work in both strict and non-strict mode but do completely different things. That's terrifying because it's easy to unintentionally move a function into strict mode or, conversely, get the use strict declaration wrong and not have it be strict even though you intended it to be.

WH: this is a foot canon, not a foot gun.

AK: todays practical semantics are undefined, do to current state of implementations

KS: can you get more data, what is the "true' impact

YK: FF can do implement it, inbox needs to fix

AK: inbox fixing it is trivial

WH: if we take out block scope from sloppy, we would have to from strict.

WH: lexical semantic differences, now would critically be different:

DE: that is already the case.

WH: This is a completely different order of magnitude. This strict-vs-non-strict scoping incompatibility would be far more common than some existing obscure differences in eval hoisting.

PL: It's true, different browsers have different audiences. I wish we made some changes in the past.

YK: we knew we would break stuff here, we agreed we would only support already cross platform sites. IE11/edge shipping two years ago, should be evidence enough.

YK: we intentionally changed semantics, at that time there was strong consensus.

DE: I feel I don't have strong consensus, it seems like I may need more information.

DD: lets make sure we converge on two semantics

BT: lets be clear EDGE/IE11 semantics are standard thing

AK: the group seems to want more data

YK: So a google only optional spec doc?

BT: So far, inbox only broken. Fixing inbox, and implementing the spec will help uncover is the has a larger impact to the chrome specific users.

BT: Chrome should make an effort to ship the standardized semantics; don't assume the standard is broken.

BT: in the past, IE discovered some issues. We took the approach of fixing all affected sites.

AK: long term this seems ok, trade-offs to make around release schedules etc. Its not a goal to have a compat mode.

MF: is it possible to isolate this scenario more, targeting this exact semantics

DE: in addition to confusion for implementers, that will likely make it hard for users to infer the correct behavior. Complexity is future hostile.

BT: it seems like even with more evidence, we would still have other, independent reasons not to make this change, such as the future is bigger than the past argument.

YK: I am surprised IE + edge this.

DE: do we have evidence this is common or not

MM: this is just strange

MM: future is strict, which doesn't have this problem

WH: That doesn't follow. Repeats point about script authors often believing they're in strict mode when they're not or vice versa, which is an issue if the two modes silently resolve function identifiers to different things.

DE: i don't want sloppy mode to become overly complicated by adding a 3rd case.

BE: once we made our call (assuming we did due deligence) we should risk chasing our tale by endlessly adjusting the spec...

BT: we should be prescriptive. GWT should fix its emit. Inbox should fix its app. Chrome should attempt to ship standard semantics.

#### Conclusion/Resolution

No consensus on changing the existing Annex B semantics.

## RegExp simplication semantics (DE)
A few extension points for RegExp subclassing.
 - Symbol.{search,replace,match,split}
 - get RegExp#unicode/multiline/etc
 - RegExp#exec - an easy single override point
proposal: fewer extension points.

DE: today, the cost is both for implementators (no one implements correctly), and user extension

...some talk about, why is this costly for the implementation...

WH: I don't buy the implementation costs, but I do support this proposal for user ergonomics. It makes it much clearer to users what they should implement if they want to subclass RegExp and reduces the opportunities for getting a performance surprise if they override just one thing.

BE: it was added late

YK: it was maybe finalized late, but around for years

DE: it was added with a lack of implementation input

JHD: i tried to implement on the weekend, and I dont see added value for all these overriding points.

YK: alan has a motivation, and he is not present

DD: I think I know, (related to promises), out of the box it should be very easy to create a fully functional subclass. There are some inconsistencies, alan said he would tweak these things. His goal was to make this super easy to make subclasses. Dans argument is, a library could handle the "super easy part' putting less weight on the spec.

BE: lets have symbol names for this, alan tried his best. But without implementor feedback, we it may not have been ideal. Since its not implemented, we have the flexibility to change.

BT: alan is available right now via skype, lets pull him in

WH: The bigger override kernel is helpful with efficiency. With exec overridable, if a user overrides exec then searching must necessarily call exec on each position of the string. With the bigger kernel of overridable methods, searching could use a Boyer-Moore algorithm instead.

BE: should we defer this [the override features of ES2015] or take it out.

BE: we screwed up, it needed more implementor feedback and further iteration.

MM: lets defer this conversation for tomorrow, when Alan can call it successfully.

#### Conclusion/Resolution

defer until we can talk to Allen tomorrow


## Remove generator `.return`? (DE)
 - overview of `.return`
 - pros of `.return`
   - signal to iterators/generators when resource is "dropped on the floor"
   - reify abrupt completions, generators as a sink for observables, etc
 - ???
 - `.return` in the iteration protocol
 - why reconsider `.return` for resources?
   - resource allocation mostly now for async i/o and promises
   - try/finally pattern predominates for freeing resources

?, WH, MM: comments that this pushes the burden to the consumer. Consumer would need to wrap each for-of loop inside a try-finally that explicity releases the resource.

YK: example code in an abstraction?

DE: no, this is imagined direct user code

DE: Generator `return` is idempotent

[Example of speculative auto-disposal syntax: finally let ...

WH: That approach (auto-disposal syntax as a replacement for `.return()`) either makes garbage collection visible or fails to work for the iteration use case. If you rely on the finally-let to clean up inside a generator, then either you get to run code when the generator is garbage collected or you don't get notified when the user breaks out of a for-of loop that invoked the generator.

[discussion about how to do this compatibly in the future if we were to take it out.]

DH: Need to beware of implementations attaching other meanings to `.return()`

DH: Could work around the conflicts by using a symbol in the future.

MM: That doesn't work. The problem is that an implementation could reify an iterator, run a for-of loop on it partway, break out of the loop, and later continue iterating through it. Such usage would incompatibly break if we were to remove and later re-add a return cleanup mechanism. That was (and still is) the argument why we couldn't postpone this in ES2015.

BE: I don't think we could remove `.return()`.

YK: Why is it bad to auto-clean-up?

DE: Cost of try-catch

YK: Expect try-catch to be irreducibly expensive in implementations?

DH: Want sync and async to be as close to each other as is practical.

YK: Want try-finally to always run finally inside a generator if the generator is used in the common case of using it in a for-of loop. Yes, there are other cases where generators are used in other ways, but this invariant should hold at least for the for-of loop.

DH: Generators won't be used for async code (in favor of async functions) and generators will be used primarily for for-of loop.

DE: Make users explicitly clean up after for-of loops.

DH: for-of is the only construct in the language that implicitly creates one of these iterators out of the iterable. That's why it's different. There is no way to get a hold of one of these to explicitly dispose it.

DH: We had and resolved those debates before. We shouldn't be revisiting this and focus on things we didn't already discuss when debating ES2015.


DD: we can seperate iterator and retainment.

MM: combining open a file, and iteration causes the conflation. Preventing a handle to the file from being available.

YK:

DE: if we encourage, generators shouldn't own the resource instead the resource is passed to the generator.

DH: having syntax for disposal is then misleading

BE: I don't think we can walk back from this

BE: We didn't add `.return()` without use cases. Don't discount those. One initial usecase for implicit `return` is yielding from the try.

DH: Don't want to relitigate the use of try-finally in the language. Disagree with the claim that it's ok that finally wouldn't work in generators.

MM: Allow redundant `.return()` calls, which are ignored. This way a user can manually iterate and wrap the iteration inside a try-finally that unconditionally calls `.return()` on the iterable from the finally.



## RegExp Buffet

BT: if we have multiple proposals, I would propose we attempt to advance them together. I am hoping to get an idea from the group, what the initial RegExp proposal should include.
- look behinds
- Named Capture groups
- Comments
- Free-spacing
- mode modifiers
- Unicode Categories, Blocks, and Scripts

BT: look behind, is like look ahead but looks behind... `(?<=pattern)` or `(?<!pattern)`

BT: both positive and negative variants

BT: most potent when considering replacements.

BT: do we follow perl style static lookbehinds, or c# style quantifiers.

BT: dynamic quantifiers \w capture groups can yield to some unexpected gotchas

YK: ruby has a pretty big RegExp buffet, and does not support this feature

BT: does ruby support lookahead?

YK: will investigate... yes

YK: lookbehinds run backwards, which makes it somewhat confusing.

BT: my mind is poisoned, as its to comfortable with implementation details

WH: Note that the fixed-length and variable-length lookbehind variants are incompatible with each other. They'll differ on what gets captured by `(?<=(.){3})`

BT: this feature has been brought up before, MS is working with Nozomu Katō to make this a reality. Is there general interest?

... [positive thoughts]

DE: how do you plan to handle backreferences \w look behinds

WH: What's the problem? This is no harder than in lookaheads.

BT: Numbering of capture groups is the ordering of the opening parentheses, regardless of whether they are in a lookbehind or not.

WH: Strongly support this, in particular the variable length lookbehinds variant of the proposal.

WH: backtracking behavior should behave to match forward captures. ECMA ones do, perl does not.

BT: any other items on look behinds?

BT: stage  0?

... [yup]

BT: FYI: twitter poll indicated, people are upset about this...


BT: Next feature, Named Capture groups `(?<name>)...`

BT: result.matches { name: value, otherName: value} vs merging with result.

WH: Would prefer that named captures capture only using named properties but not also duplicate them under both numbers and names.

YK: May be easier to refactor because adding a name doesn't shift numbers of following captures.

WH: That's nothing new. You do this all the time in existig regexps when inserting a new capture into the middle of the regexp.

WH: Easier to refactor with named captures that do not alias to numeric properties and introduce new numbers. Can insert and delete those without affecting numbering of other captures. That's the same simplicity and advantage that ?: provides.

MM: what can appear in the `<>`

BT: JS identifier

BT: we can discuss tightening

MM: what about numeric identifier?

BT: we must disallow numeric names and `length`; we should probably put the named captures on a .matches property of the result

BT: What syntax to use to backreference to named capture groups?

  C#: `\k<name>`, perl: `(?P=name)`

MF: why `\k` over `\<`

WH: \ is an identity escape for punctuation symbols. We had reserved it for letters, but engines were excessively permissive, so \ followed by letters other than n, w, etc., might be used in the wild.

YK: we should likely not move away from existing syntax

YK: looks like `/\k<>/` currently escapes `\k`

BT: this would be a compat issue then

WH: It may be surmountable. We had the analogous compat situation when we first defined \u.

BT: We have significant data on regexp, we can run analysis

SP: it sounds like we should base the choice on your data analysis.

MF: unicode?

DE: unicode regexp might have different performance properties

BT: don't think thats true for us (MS)

M: neither for us (Apple)

DE: oh, ok.

WH: Named backreferences and unicode are orthogonal concepts. Unicode regexps are not a substitute for traditional regexps; both are useful.

MF: would you be ok with back-reference and named not being combined?

WH: that would be unfriendly to users

BT: Named replacement syntax in the replacement strings? `"${name}"` or `"\\g<name>"`

Various: Do it!

BT: tweeted about this, majority of users were sad.

BT: I tweeted an example of destructuring and named capturing groups, its now my most retweeted tweet.


BT: Next feature, Comments & Free-spacing syntax & related semantics:

BT: The difficulty is how to do this without modifying the /regexp/ literal.

BT: can we do this in a backwards compatible way?

MM: Template string tag is the right approach to handle this. Something we can ship. This avoids the parsing problems because template string literals' lexing wouldn't need to change.

MM: lots of issues with parsing related to RegExp, this may keep it from growing in complexity.

DH: we are already in a situation, lexing is already complicated.

WH: Extensions that overcomplicate lexing, which this would do, are dangerous. If the a web page goes through a white-lister that lexes it one way and then run through an engine that lexes it in another way, it can sneak things past the while-lister.

BT: can someone more familiar with the lexing speak to this complexity?

WH: It's undecidable in Perl. It guesses what you mean.

YK: can you explain

...

SP: it seems like we can explore this further as a templateString, if it really feels poor we can explore grammar based variant.

BT: Comments: `/(?# this is a comment)a*/`

BT: Annoying to use

WH: At least it's not problematic from a lexing point of view, as long as comments can't contain newlines, slashes, closing parentheses, or such.

BT: stage 0?

M: lets pick this up tomorrow

BT: preview for tomorrow:
    - mode modifiers
    - unicode categories
    - blocks & scripts

BT previews us some syntax for tomorrow.
