# July 27, 2017 Meeting Notes
-----

Adam Klein (AK), Allen Wirfs-Brock (AWB), Andrew Burgese (ABE), Andrew Paprocki (API), Ben Newman (BN), Benoit Girard (BGD), Bradley Farias (BFS), Brendan Eich (BE), Brian Terlson (BT), Caridy Patiño (CP), Chip Morningstar (CM), Chris Hyle (CHE), Claude Pache (CPE), Dave Herman (DH), David Teller (DTL), David Turissini (DTI), Dean Tribble (DT), Diego Ferreiro Val (DFV), Domenic Denicola (DD), Gabriel Isenberg (GI), István Sebestyén (IS), Jeff Morrison (JM), John-David Dalton (JDD), Jonathan Keslin (JKN), Jordan Harband (JHD), Jorge Lopez (JEL), Kent C. Dodds (KCD), Kevin Gibbons (KG), Kevin Venkiteswaran (KVN), Leo Balter (LEO), Maggie Pint (MPT), Mariko Kosaka (MKA), Mark S. Miller (MM), Michael Ficarra (MF), Michael Saboff (MLS), Nathan Hammond (NHD), Patrick Soquet (PST), Peter Hoddie (PHE), Pierre-Marie Dartus (PMD), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Vladan Djeric (VDC), Waldemar Horwat (WH), Yehuda Katz (YK),

-----

## 11.ii.g. Numeric separators for Stage 2

(Sam Goto, Rick Waldron)

- [proposal](https://tc39.es/proposal-numeric-separator/)
- [slides](https://docs.google.com/presentation/d/1i3pI_Z34xxg6_1gHVB6Q0RzZzpINmpI7yu8SVXSEgRo/edit#slide=id.p)

SGO: (revisiting background/recap)

- https://github.com/tc39/proposal-numeric-separator/issues/11
- https://github.com/samuelgoto/proposal-number-parse
- https://github.com/fuchsia/extractLiteral

AWB: similar issue in ES6 when we introduced new numeric literal syntax (0x, 0o, 0b).

RW: We are following the precedent to the letter: only making changes to `Number`, nothing else. Let's also think about a new method that can match new numeric grammar! Just don't want to couple that to numeric separators.

BFS: HTML isn't changing their behavior.

AWB: Application level user input should not be tied to the syntax of an implementation language.

MF: explicitly disallow NumericSeparatorLiteral in LegacyOctalIntegerLiteral

RW: (I explained that this restriction was implicit in the proposal's grammar)

WH: The legacy octal behavior is correct as is. *LegacyOctalIngeterLiteral* is defined independently in Annex B and didn't allow underscores. It's unchanged in the proposal and will continue to disallow underscores, which is the intended behavior. (note: a few minutes later I found and filed a different bug in the Annex B grammar.)

WH: I have reviewed the proposal, found bugs (which the authors fixed), and I'm happy with it now. Underscores are allowed in source text, but not in `ToNumber` calls, nor `parseFloat` or `parseInt` calls (by design). `ToNumber` differs from `parseFloat` in that the former allows `0x` etc. prefixes. Furthermore, the grammar of `ToNumber` is not quite the same as the source grammar (it allows leading zeroes). It makes sense not to allow underscores in `ToNumber`, `parseFloat`, or `parseInt` to avoid changing the behavior of existing programs.

MJN: Why would we expect that adding a literal to the language would change the end user's expectation?

WH: We don't. We had to decouple the grammars to avoid changing behavior of existing code.


#### Conclusion/Resolution

- Stage 2, with reviewers WH, MF, KCD



## 11.ii.e. export-ns-from and export-default-from for Stage 2

(Ben Newman, John-David Dalton)

- [export-ns-from](https://github.com/tc39/proposal-export-ns-from)
- [export-default-from](https://github.com/tc39/proposal-export-default-from)

BN: Follow up on a stale proposal from Lee to have symmetry between import and export.

### Export-ns-from

BN: Not only about symmetry, but also preventing the creation of the unnecessary namespace object via import to just export it.

BN: Shorthand for

import * as ns from "mod";
export {ns};

would be

export * as ns from "mod";

JDD: Looking for Stage 2.

AK: Maybe this should be a needs-consensus PR; this doesn't even seem controversial.

Committee: Once there's a PR written, bring it before the committee to present again to get consensus. Also, tests are needed.

BT: The tools are already deciding that this is syntax.

BN: The parts were previously one proposal but were broken out in two. Lee Byron ended up not having time to pursue.

#### Conclusion/Resolution

- Pursue export-ns-from as a needs-consensus PR, to be brought back to the committee for consensus with tests.


### export-default-from

(Ben Newman, John-David Dalton)

BN: This is a similar syntactic sugar. Motivation is that is strictly better than the two lines. It has a nice symmetry with import.

BFS: Do tools currently have this? Is it built-in to the core?

BN: Babel has this as a Stage 1 plugin, separate from the modules plugin

AK: So, this has tools support, as this as a Stage 1 proposal

BN: Yes, and this provides some validating information, as people are using it.

JDD: We are proposing remove `export default from "mod" ` for symmetry purposes

BN: An objection is that you can express this in other ways

CP: Today you have to `export {default} from`, then `export * from`, two lines.

AK: For this one (`export v from "mod"`), I think the existing syntax is pretty clear, and the new syntax is not clear, since the exported name is not in curlies--it looks like you're exporting default, and so it seems like a funny form. It would be clearer to say, `export { default as v } from mod`

LEO: Maybe a real use-case/example will help.

BFS: This a real compiler use, it's sort of a microbenchmark.

BN: The reason we have special handling of default exports is because we want people to be able to operate in the mental model of the old CommonJS-style exports. If we require people to say `export { default as v }` then, better or worse, people have to know that default is another named export. Then, they have to depart from the illusion that default exports are sort of special.

LHD: This proposal doesn't add a capability, since you could do it other ways, but it fixes a sort of asymmetry where this model helps elsewhere.

JM: Two things: I general agree with the notion of the concept of default as the preferred way, the concern that I have is how to interpret this. I think the objection is mostly with the possible confusion of this syntax. I will skip to my second point on metrics: since this is something you can do today with two lines, the metrics will not be very interesting.

KCD: Is not confusing to do it with the curly braces; it is common to do already with the current syntax

MF:  The mental model of default will lead to inconsistencies; it is really all named exports

JD: I don't this is an inconsistency, but part of the mental model.

BN: you can imagine someone who uses the rule of thumbs of avoid curly braces, for that case, you will need something like this.

SYG: Im sympathetic that this reads very confusing, specially to teach. I favor the current form that is very explicit.

AWB: I see that there are various variants of export, with `export {` and `export default`. You could also imagine `export default from...`. You can follow it with a declaration, or

WH: There is a grammar problem. `export default` can be followed by an expression. `export default from(x)` has existing behavior of exporting the result of calling the function `from` with parameter `x`.

?: Parentheses aren't allowed. `from` would have to be followed by a string literal

KG: Then there's a problem with

```js
export default from
"name"
```
This treats `from` as an identifier.

DH: you can only use only an identifier.

JM: Which are we talking about: Forwarding a default, or converting it to a name? There are different cases

BN: This is an argument that we can make here. The original proposal was using the default keyword after the export, and we remove that one from the proposal because we think it was confusing.

AWB: If you want to teach someone part of the language this form will be a natural part of that, because the curly gets part of another design space.

DH: What is appealing here is that when you are in them implementation side of a module what you are exporting something, you add the default exports.

BN: should we go forward with this proposal where export default is the only option?

DT: Did you look at alternative syntax?

BN: Something like export default, * from "mod" could be an interesting approach.

BN: The reason why we are still looking for this syntax is because it allows us better static analysis on the code.

LEO: We have two options: 1) we have objections, should we kill it, or 2) should this be just a PR.

AWB: MF do you object this proposal?

MF: Seems like this proposal would only make sense in a changed form, which would save very few characters. It would warrant a later discussion at a later point, not advancing at the moment.

DH: the proposal is to change the grammar, not the user's mental model about exports.

BN: Is there a reason for the strictness of the ordering of the comma separated list?

AWB: It is not comma separated list, it only allows two items, where the default must appear first.

#### Conclusion/Resolution

- Remains on Stage 1 will follow the staging process while keep on refining it and can be discuss further.
- The proposal has changed to be part of the `export default` family with entirely different syntax


## 11.ii.f. Temporal Proposal updates

(Maggie Pint)

- [proposal](https://github.com/tc39/proposal-temporal)

MPT: We tried to make this proposal more minimal than previously based on feedback from last time. We tweaked the names to make the type system more clear and cut down to 5 types. They are divided into "Civil" and "Instance". (By types, I mean objects, of course.) The Civil objects represent a date and time without a relationship to a point on the globe--e.g., year/month/day. It is civil time, somewhere. Or, hours/minutes. You don't have offset information; you don't know where. This helps avoid bugs--in Moment, since JS doesn't have any civil times, people will parse ISO8601 *without* an offset, and they'll be surprised when executing the code in different timezones gives different results--use Civil for that case. The Instant type is just UTC, context-free.

MF: You give a timezone to a Civil type to resolve to an Instant?

MPT: ZonedInstant gives you an Instant with a timezone context, but this is really not what people should be using by default; maybe we should look into making this harder to get to. We considered a fixed offset type, but we ended up deciding to use IANA fixed-offset timezones within this same ZonedInstant type.

BT: Do you map an object to a specific timezone?

MJN: We decided that a "zone" can be any one of
- UTC
- The local system
- A named IANA timezone (if available)
- A fixed offset from UTC

MJN: So, it doesn't need a special mode; this is just a function of the zone you're working with. The system will not try to map from one zone to another

API: They provide names actually, for these numbered offsets

MJN: These are not great names and we don't bother presenting them.

DD: I was convinced that this is a good design by some examples on the issue tracker.

JHD: Why is Instant exist standalone rather than having part of the Zone context?

MPT: If someone has a timestamp in UTC without a specific offset, you want to *force* them to convert it to a zone, when they want a local time. It's better to have this clarity

DD: For example, a geographically distributed meeting would be an unzoned instant, but maybe a recurring meeting would be based on zoned instant calculations. Or something... I'm out of my depth, but basically, the point is that ther are very distinct use cases, and there is an open TODO in the issue tracker to explain them.

API: Instant allow you to do map operation, but if you are trying to do subtraction the API has to be aware of the offsets.

MPT: We can decide how pedantic we want to make the API. Some APIs would force you to do these conversions, though I was not intending to structure the API that way.

BFS: You mentioned  that you removed two, which ones they were?

MJN: (List of removal Object types here)

CM: The timezone in its own instance is an annotation rather than an offset.

MJN: You can't always reliably get the system timezone

??: Is there any precedents about Civil dates in other libraries for time and date time?

MPT: Not really, I think the prefix does a lot to help the user understand the context and mental model

DH: You're making it clear that it is a time located in a particular place

MPT: "local" has gotten a lot of adoption because it's part of the JodaTime API that became part of Java 8. But when I discussed this with people, "Civil" was overwhelmingly the choice. There is a long [thread](https://github.com/tc39/proposal-temporal/issues/33) on GitHub about the issue

MJN: The prefix also helps distinguish all of these from the Date object. We also have 1-based months, rather than 0-based; this helps avoid conflicts

SYG: The API surface: Do we have anything that introduces a new global? vs potentially a module?

DD: We had a big discussion about module/namespace/global

MJN: As with other proposals, this decision will be deferred, depending on where the committee sits at the time with built-in modules

BFS: Subtracting dates?

MPT: Subtraction is a little more complicated to get right and is not included right now; it's a common source of potential bugs in Moment where people have the wrong intuition.

BT: The order you apply  to this operations can be different, so even if you put the wrong order it will preserve the "right" order?

MPT: Yes

MPT: Can't think of a case where you'd want to not order the time addition updates from most significant to least significant.

WH: Here's a case. You're adding 1 year 1 month to dates, and the date you happen to start with is February 29, 2016. If you add the year first, you'll get March 28, 2017 (or April 1, 2017 depending on how you overflow). If you add the month first, you'll get March 29, 2017.

DD: Have we talked about overflows?

MPT: Not in the spec, but it has been planned not to bubble in the next month. For invalid programmer errors, we will throw.

MJN: We will we working on diff functionality shortly. A plain object literal is just as good as a typed struct.

MPT: The only thing we want to do is under parsing for ISO time somewhere,

JM: Can you specify negative numbers in plus?

MPT: Maybe we don't need minus; let's not do that.

WH: Hours can go to 0 to 24? What does 24:15:10 mean?

MPT: The ISO spec provides for a 24 hour but it parses to the next day, so its no really represented

WH: Leap seconds?

MPT: You'd have to carry a leap second table

WH: What if someone gives a leap second as input?

MPT: ISO supports it, but most ISO date parsers fall back to the previous time that makes sense.

CM: Mars?

MJN: Until we can standardize on what Mars time really means, let's stick to earth time.

WH: There are standards for things like *Barycentric Dynamical Time* used in astronomy, but I suspect they're beyond the scope of this. You start getting into nasty special and general-relativistic time-measuring effects.

MPT: We are sticking with gregorian calendars, but we could potentially explore translators, but it can be very tricky to implement and it will probably confuse more people that it will help.

CP: My concern is mostly about the limitations of not having a parser, since there can be ambiguous dates.

Andrew: ICU might potentially fill some of this gaps

MPT:  ISO 8601 parsing belongs, maybe (other standard), but I don't think locale-specific parsing belongs here, maybe better in Intl.

MJN: If anybody feel strongly about Leap seconds, we can talk about it in git, although I would encourage that we not for now.

??: Is there a specific reason why you are departing from Date object for property accessors. Why would you make inconsistency with civil dates?

DH: Because is an immutable API, which is a good thing

BFS: Are you freezing those properties?

MPT: Yes, the polyfill right now is a getter

DD: That makes sense; I'd think of these as calculated from internal slots

MPT: ISO-1 parsing, are we ok with this and defer everything else to ICU? We could otherwise overload the constructors.

DD: It would be great we don't override the constructor

MJN: I was thinking of nanosecond precision; right now Date has millisecond precision. OSes expose, in theory, higher than ms precision. I wanted to expose Instant.now. The problem that we had was that the range of the number is two Numbers

SYG: Would platforms have to give such high precision timing to be spec compliant

MJN: No, they could zero fill the nano seconds precision, so won't be mandatory

SYG: For security reasons, in the web platform, we might not expose such a high-precision sense of the current time.

MJN: I haven't tough on it, It would be reasonable, if the API surface supports nanoseconds, everything should retain nanosesconds.

AWB: Regarding your precision issues, for the internal representation you could go either way, you don't have to expose it if you don't want to

MJN: Would it be reasonable to use BigInt for this or two separate numbers?

DH: It seems that there is no real dependency, you can allow the nanosecond precision without coupling.

DE: Couldn't ISO 8601 strings let you express any ns quantity without resorting to two arguments or BigInt?

DD: Fractional microseconds would match Web APIs. I think we should discuss whether this makes sense. Also, AP points out that ns precision gives you a false sense of precision, since computers are not fully synchronized.

MPT: Clock skew can be up to three seconds; it's way bigger than ns

DH: Why we are talking about BIgInt here, since the range seems enough?

MJN: You'd get less accurate in nanoseconds as you get to very old years and years which are very far in the future. We wouldn't want "midnight, many years ago" to be represented inaccurately.

MLS: Document the use case for benchmark

YK: Benchmark

API: No, you don't use this for benchmark

MPT: You use a monotonic timer for that

#### Conclusion/Resolution

- Good discussion, the proposal advance itself internally; "Stage 1.5", there is still no spec text


## 13.i. Needs-Consensus PRs

(Brian Terlson)

### [#840 Template objects are eternal when put into WeakMap](https://github.com/tc39/ecma262/pull/840)

SYG: The issue is that tagged template objects are currently eternal within a realm.

BT: The new semantics are to associate the template tag with the source site, rather than the string of the template tag.

AWB: When you say "parse node", you mean the code that's evaluated in the script.

BT: Yes, and that opens the question of what do you do if an implementation decides to cache the parse tree. Currently, it's implementation-defined whether multiple parsings of the same script or module will give you the same Parse Nodes or different ones.

YH: Is this true for regex?

AWB: What if you eval the same string repeatedly? The intent of the spec is that is a fresh operation. Just because the text is identically doesn't mean is the same.

BT: Let's figure out what we want first.

YK: It seems like we are doing something different what we did with template literals.

AWB: Yes, you're right! We intentionally make them different, there are caching scenarios that we apply to template literals that we don't want to apply to regexp.

YK: You can tell if you put an expando on it.

AWB: Its frozen

DH: The only thing that we could do if you use it as a key in a WeakMap since you will have the same identity.

BT: In order to mandate this, we will need to specify some kind of eval cache.

AWB: All Ecmascript code that references this will have to keep the keys them forever

BT: I think this is also bad, that put us back into a world where ...???

YK: As a user, cache keys don't have semantics

DE: We don't want to force caching all the time, the point of this proposal shrink the live time and don't keep them there forever. The proposal is to allow caching but not force the caching to stay alive forever. This should work effectively like template literals. Its implemented in V8, and the exact caching semantics were looked at very closely, and became natural to cache it all together, rather than to cache it somewhere else.

YK: We might care about the identity for other reason than implementation. You can use it as a key in a Map. I don't care about whether caching is observable, but I care about ...???
Im concern about the observable effect

DE: In this proposal we want implementation to make their own decision about caching. Its all about enabling template tag object to be cached so its cheaper.

YK: You are using a weakmap to associate the state with a template literal. It is hard for me to come up with good examples.

DE: You are describing the observable effects, we maybe can come up with a case where this observable effect is bad.

YK: I want to understand why this is not scary to people (the identity problem)

BT: The other two options are:

- Identical template literals in the same code retains the same identity.
- Every template literal is a fresh copy?

BE: It makes it really hard to cache any code that uses template literal. We will have to make another data structure...??? It adds a lot of complexity.

AWB: I see a problem with this definition based on code eval:
- Imagine a module, this module exports a tag function. But the this module also in it body, loads the cache, to optimize the most common cases. If the ...???

SYG: Are you saying that this cache is tied to the REALM?

AWB: By The original spec language, yes

SYG: I don't understand your use case.
You have this thing that you export from a module. And you import it from another module.

AWB: If you have a template tag originating from a separate module, and somehow another module imports that template tag via another module, where this intermedia module can cache multiple template literals before it exits, then the cache for the result of the caching should be independent.

YK: Is there a leak that makes this urgent?

SYG: By the spec you will keep everything alive forever? Because of this REALM connection, where we have weak reference between REALMS.

YK: If you make a REALM to execute a template, that is kept alive forever?

DE: REALMS stay alive for a temwhile, so its a significant problem if you keep it alive forever.

SYG: The spec says that we can never collect any of the cached results?

YK: What would be kept alive if I have "template tags as a service"?

SYG: A new instance perf content of the string.

AWB: For each template string there is (syntactically) template jey object that corresponds to that. All template literals that are the same text are specified to produce the same object.

YK: So you will end up leaking all intermediate objects.

BT: There is not much concern about all this objects living forever?

YK: I disagree, how this doesn't cause leak today?

SYG: Regardless of the implementation it has to live forever.

AWB: It is similar to scripts, we keep them forever.

DE: We should keep the discussion in github given that there still some disagreement

#### Conclusion/Resolution

- Debate among alternative approaches to continue on git.


### [#945 Normative: Evaluate all computed names before any values in object literals](https://github.com/tc39/ecma262/pull/945)

BT: Two problems with this:

- it doesn't align with classes.
- the biggest issue if that it we ever want decorators... ???

JM:  Do we know if this is web compatible?

BT: We need to test it, it seems that the risk is low? Im planning to run tests.

YK: observation: the kind of problems that I can expect, someone is using a computed value as a key, but JSC makes this impossible.

WH: If there is not way to get a hold of the object from within the expressions, then it seems that this will be ok. I was concerned about a case where the name of a latter field could use the value of a prior field.

SM: What about nested destructuring?

BT: Assignment target?

SM: Is the right handside is part of a nested destructuring would this break?

BN: you have to compute the key before you can apply the destructuring.

AWB: The right-hand-side can contain an initializer expression, which can affect subsequent left handsides... We don't want to apply this to destructuring.

BT: Im ok not applying this to destructuring

SM/JM: example from the whiteboard:

```js
var { [print(1)]: { [print(2)]: x }, [print(3)]: y } = 0;
```

YK: We need to couple the destructuring with this issue?

BT: Its helpful to understand destructing as an imperative chain of events.

SM: It is important that the execution order is the same

JM: I think I agree with you.

YK: You can easily observe changes on destructuring.

JM: If we were to follow up on github, is there anything blocking this?

DE: We should aim to consistency, we could have a decorator that does nothing that does not change the behaviour of the code.

YK: example from the whiteboard:

```js
let { [s]: x, [x]: y } = obj;
    { [s]: x, y = x }
```

BT: We will have to pick the inconsistency.

YK: There are different class of symmetries.

BT: I lean towards leave the destructuring evaluating order as it.
In the interim, any current platform use cases will be appreciated.

#### Conclusion/Resolution

- No significant concern.


## 13.v. Meeting schedule for 2018

LEO: Need volunteer to coordinate our schedule.

?: The chair should do it


LEO: I'm voting for Rex to become our chair.

RJE: Introduces his background: Chair of Committee for 7 years, TC41, .net, C#, TC39 in 2000, edited specs, TC45, TC46, PHP and Hack for Facebook (open source).

RJE: Minimally invasive bureaucracy, starting on time, prioritizing agenda items, vice chair candidates, bringing up newbies, mentoring, management group looking at the big picture of language direction

IS: (Describes ECMA's election process rules)

- ECMA rules 6.2 on voting and consensus
- Chair and Vice-Chair should be elected from among ECMA ordinary member representatives if possible. If no one is available, the TC may appoint someone who is not from an ECMA ordinary member
- Term is for 12 months and can be extended

(discussion about whether to decide now or at the next meeting)

?: Need to figure out who is going to be running the next meeting, and it would be good to let them know before the meeting

BT: Feel that Rex has been a candidate for long enough.

YK: Why can't I nominate folks like Dan as chair?

DE: I like Rex's presentation.

LEO: I'll be available if needed in September but not November.

IS: Need an ECMA member as chair. Can't come in as an individual.

DH: Chair needs to be a steward of the consensus-based process.

AWB: We miss having the long-term planning that we used to have.

MLS: YK wants to nominate DE. Does he want to be nominated? He'd need to recuse himself from the technical discussions in which he's participating.

IS: Has to be an ECMA member. Ordinary member is preferable, but some kind of member is mandatory.

DE: I am not interested in being a candidate for chair.

MLS: Being chair is about being good at management.

YK: I was never notified that there was a search for a chair.

AWB: Oh, come on. I've been raising the chair search at meetings for the last year.

?: There was specific discussion of the candidates at the meeting six months ago.

YK: Concerned about process

MLS: Like the proposal of Rex chairing two meetings and then having an election in January. DE and LEO are interested in being vice chairs. We should jump at the opportunity!

BT: I don't see a reason to attach an "interim" title to the chair.

?: Need to be welcoming to Rex.

MLS: I think Rex would be a great candidate. I'd like to see him in action.

YK: ?

BT: What if we announce that we'll have nominations in November and a chair election in January?

DE: I wouldn't have to stop doing technical work if I were vice chair?

BT: Yes, except if you were stepping in for the chair.

IS: Just a remark to this, not told in the meeting. The "Chair" in his "member capacity" can also do technical work and be behind his own proposal, but he always must make it sure that it is clear when he is speaking as "Chair" and as contributing "Members". The best to "step down" from the Chair when his proposal (as member) is discussed. The same is also true for the "Vice-Chairs". They need to make it clear when they speak as "Vice-Chair" and when as "Member".

#### Conclusion/Resolution

IS: We'll have Rex Jaeschke as chair for the rest of the year and an election in January.

IS: We will have Leo Balter and Daniel Ehrenberg as Vice Chairs until the end of 2017. Candidates for the 2018 TC39 Chair, Vice Chairs can be "registered" to the Ecma Secretariat until the November 2017 TC39 meeting. The 2018 TC39 Management will be elected at the January 2018 TC39 meeting.


## 11.iv.b Unified introduction of class features

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1GZ5Rfa4T7aF7t0xJrDxRZhC49mvqG5Nm6qZ_g_qrfBY/edit#slide=id.p)

DE: there should be a slides like the private fields slide but with everything being public.

DE: Adding field declarations and private fields are small changes. With decorators, it provides another incremental cleanup

DE: the framework is orthogonal over a few different dimensions (using Mark/Allen's terminology). See Dimension slide

DE: fields go on instance, properties go on prototype. a keyword may be added to change those defaults.

DE: main result of orthogonality is avoiding surprises to programmers, e.g., you can declare anything private

#### Conclusion/Resolution

- None recorded


## 11.iv.c Class fields for Stage 3

(Jeff Morrison)

- [proposal](https://github.com/tc39/proposal-class-fields)

Goal: going for stage 3

JM: Last meeting: merged public and private fields in a single proposal.

JM: made 3 simplifications to the proposal.

JM: 1) moved private field shorthand to separate proposal

YK: I want to characterize it. There were other subproposals people were championing. I will work through the details with people championing the subproposals as separate proposals.

WH: I precipitated the separation by pointing out that there are two sensible but mutually incompatible definitions of shorthand semantics, and we should explore the area to understand which one to pick.

JM: I'll go into the reasoning on the presentation.

JM: the updated proposal only shrinks the proposal

BT: is the the proposal that would motivate the use of the private keyword now?

YK: Waldemar's reason was what caused me to move it. The original definition was for the shorthand `#foo` to always mean `this.#foo`, but Waldemar pointed out that's the inappropriate thing to do inside an instance method that references a static field `#foo`. The alternative definition is to always get at the wanted variable in the obvious place.

JM: Shows "shorthand this" example. the concern is that if you look quickly here, the `this` received is not syntactically clear.

YK: Sad to defend his position about things being withdrawn. The conflict is confusing. People would need to be able to keep "this" clear in the same way they need to keep it straight within normal vs. arrow functions. So we want more experience and hash it out.

JM: 2) second simplification. We had comma separation for fields (mostly for decorators). That's moved into a separate proposal.

DE: confirms that 1 & 2 are broken to completely separate proposals.

YK: when declarations are combined into a list, people couldn't tell whether a decorator applied to multiple values in the same single declaration statement. The hypothesis of why it's still a proposal even though there are toy examples that show either side si that we don't have real examples of e.g., long declaration lists for interesting use cases.

WH: I'm disappointed comma-separation was withdrawn but I understand.

YK: You can help champion it!

JM: Another driver: putting in a single comma-separated list, which does a single "static" keyword at the beginning apply to?  It's not clear what people would understand or be surprised by.

JM: 3) third change: ban fields named "constructor" because of the potential surprises and the potential obstacles to future enhancements that interact with instance constructions

JM: Do the reviewers agree that these changes are fine?

MM: I'm not sure i was a reviewer, but I'm ok with this.

WH: I reviewed this and all the other class-related proposals for this meeting. I was a little confused by overlapping proposals sometimes disagreeing with each other, but I'm good with this. The bugs I found have been addressed.

#### Conclusion/Resolution

- Stage 3 acceptance


## Agenda review

LEO: (shows agenda to discuss what we are doing the rest of the day)

LEO: we have time constraints, e.g., Ron won't be able to join us at the next meeting. similarly, Gabriel Isenberg also won't be available.

WH: Is there a particular technical reason to defer, or are you just doing it to yield time?

DE: I could defer or cut the time boxes down to 15 minutes each

WH: Given that we are doing the class things, we should do them all together to avoid having to reestablish context.

RBN: partial application really dovetails with pipeline, so if we can't do them both we should defer both and I could present them together later


## 11.iv.d. Private methods and accessors for Stage 2

(Daniel Ehrenberg)

- [proposal](https://github.com/littledan/proposal-private-methods)
- [slides](https://docs.google.com/presentation/d/1hiti-3Upn-v5ez9OCJb3UOXH6ksdFAEWWJyoqe13mAc/edit#slide=id.p)

DE: (showing presentation)

BE: I didn't understand the "no difference between static and instance" point

DE: you could put static before your private method or not put it there. But then you could still call it on an instance and no one could notice.

MM: To clarify. It's currently spec'd like a non-writable own private field, so the example you are showing on the left would be a type error?

DE: yes

JHD: why was the decision made that private methods should be "own"?

??: then are not actually own private fields,

JHD: if I had a method that took another instance, and I applied my function to that other instance, would it work?

YK: tlkaing about them as OWN is misleading...

DE: to clarify, the type check is when you get the private function, no..

YK: Previously when we shared properties among instances of a class, we would put the property on the .prototype. Now that we have this #method() { ... } syntax, we have the ability to make it define identical own private properties on each instance, which accomplishes the sharing without exposing the method on the prototype.

```
class C {
    #foo() {
        alert("hi");
    }

    bar() {
        this.#foo();
    }
}

C.prototype.bar.call();
```

In other words, this example appropriately throws a `TypeError` because there is no `C.prototype.#foo` visible to `C.prototype.bar`.

DE:

AWB: what does the receiver check?

DE: In the spec mechanics, it actually reads the method off the instance the same way you would read a private field off.

AWB: and are these propagated dowards by inheritance?

DE: No

AWB: What happens when a subclass calls a public superclass method which then calls a private superclass method?

WH: It just works. If you have a class hierarchy and the subclass calls a public superclass method that then calls a private superclass method, that last call will find the method among the object's own private slots. They're not visible to the subclass but they're there.

DE: the private name is not visible in the subclass body

BE: I'm going ot channel MarkM, does the transposed implementation of weakmaps still work for this?

MM: yes. For each name you are declaring, whether it's a field or a method, you are creating a weak map. Then you are looking up the instance in the weak map. All instance of the same class would look up the same method

BE: I didn't understand the option of funny function declaration since we didn't choose that one, let's move on.

(some discussion that we put aside to proceed with the presentation)

DE: (presenting private accessors)

DD,YK: mentioned anecdotally that the conversion to private accessors has been convenient.

DE: current proposal has private accessors, but I'm open to reconsidering them or separating them into a different proposal.

WH: I've been looking at the spec text for several weeks now ☺.

#### Conclusion/Resolution

- Stage 2 approved, including accessors


## 11.iv.e. Interaction of privacy, fields and decorators

(Daniel Ehrenberg)

- [proposal](https://littledan.github.io/proposal-unified-class-features/)
- [slides](https://docs.google.com/presentation/d/1AOSCuB1TLljBZFMLVlFfXz9IXQAdzC-VzMtyUT9vtnI/edit)

DE: (shows method decorators)

JM: question: I notice there's no getter/setter in the descriptor

DE: instead of a value/writable, it could have get/set.

DE a class decorator gets a list of all the methods in the class and can issue a replacement for them.

DE: (presents private names)

YK: I wan to confirm that people understand that. If I make a private name called "x", can people mention "#x" in the class. The answer is "no". The use occurrence needs to be lexically apparent.

AWB: How does the decorator access the private name?

YK: (points at the PrivateName class on the slide)

MM: you are actually reifying the WeakMap model of private state.

DE: it's not actually a WeakMap because the GC collection semantics are slightly different. E.g., the WeakMap model would cause the table to be retained ...

MM: I don't need to discuss the GC details. I want to understand the meaning of `PrivateName.prototype.set`. You can only update things, you cannot add new keys.

DE: correct. If you want to add new private fields, there's a hack to do it but it's not desirable

MM: So, at the `PrivateName` level of abstraction, the registration of a name in the (conceptual) weak map is something that happens by magic. There isn't actually a weak map that's directly accessible to decorators.

BFS: I have problems using a global prototype for this purpose.

YK: can we resolve that before stage 3?

DE: Can we come back to it?

DE: Yes.

WH: What happens when you call a method while it's uninitialized?

YK: it will work till you hit `super` and then it errors.

WH: Can you call the constructor?

YK: you cannot decorate the constructor

DE: (more description)??

WH: So if you access static private variable, will you get it?

YK: it won't have been initialized yet.

DE: this proposal follows the order of initialization at the Munich mtg. The class is in TDZ and you will get a reference error (because you tried to access the class)

DE: Omitted features: instance finishers. Yehuda?

YK: an instance finisher is a function that is executed at the end of instantiation of the class at any subclass level and passes at the instance. this is at the end of Reflect.construct. the use case is a decorator to confirm that all instances are frozen or sealed. Another:  you want to register created instance into a map. The subclass provides the key, the superclass expresses that the instance should be registered.

DE: instance finishers change how instances are created. <describes an implementation> It's complicated and so wants to separate it out.

MM: I'm very interested in instance finishers but I can understand having it a separate proposals.

JHD: another use case: always put them on a superclass to validate that the subclass didn't do something bad like install fields. e.g., React could make sure that the right properties were set.

MM: Dean and I are also working on a subclassing hook

BT,YK,others: Yay!

DE: Parameter decorators.

YK: I'm still not interested in it.

BT: Ron is.

YK: Great. He should write it.

DE: Having decorators put classes in slow-mode would be bad. Hence performance considerations.

YK: ??

AK: Initializer performance concern is real =

YK: These are real things and people should be careful, but in many cases where people use decorators, they would have had to do something else.

YK: Babel is making progress on getting to the new semantics.

RBN: we have held off on updating until it gets to stage 3.

YK: If you already implement the legacy semantics, you will increase the number of users on the legacy. If you do it sooner there are fewer people impacted.

DE: I do agree that the proposal will likely change again before stage 3.

YK: It seems very reasonable for implementation to wait for stage 3 before implementing anything. But existing implementation should move forward to not build a larger legacy.

WH: I was waiting to review until it got synced up with other proposals. Right now it's inconsistent with the other class proposals. I also have a bunch of questions, but they're mostly about understanding what's going on here.

YK: that's why we are not attempting to advance at this time.

DE: we may advance private methods before decorators.

AK: I will be a reviewer for private methods.

WH: I will review all the class proposals. <huzzahs>


#### Conclusion/Resolution

- Remains at stage 2.
- Reviewers:  WH, BFS, AK


## 13.ii.a Optional Chaining Operator

(Gabriel Isenberg)

- [proposal](https://claudepache.github.io/es-optional-chaining/)
- [slides](https://docs.google.com/presentation/d/1OcytQtyykmOZJwm-LFgOP0FpQccyeajAjLdOvBki9a0/)

GIG: questions:

- Should we return undefined, null, or null and undefined?
- Returns `undefined` if property absent, `null` if property is defined with a null value

MM: (null)?.b gives undefined. That seems wrong.

JHD: "b" is not a property on null, so it's undefined.

GIG: Does not swallow errors in computed properties or caused by getters

GIG: Options for short circuiting:

1. the current property access, method, or function call
2. the current chain of accesses etc
3. includes LHS Expression, which includes `new` and tagged templates
4. grouping parentheses do not stop short circuiting - `(new a?.b.c).d[x]`{y}` short-circuits all the way through

GIG: Claude is in favor of option 2.

WH: Last time there were significant objections to 2, right?

GIG: Right.

MM: What are the objections to 1, except verbosity?

GIG: It is mainly about verbosity.

DT: There is a difference - in option 2, for `a?.b.c.d` you can distinguish between "I want to get undefined if a is absent but throw if c is absent", in option 1, with "a?.b?.c?.d", you cannot.

WH: Option 1 has the advantage that ?. is localized. It does not cause containing expressions to not evaluate - it does not affect things around it. Option 2 does, and that causes problems. Some examples:

- Can't refactor `a?.b.c.d` into `x = a?.b; x.c.d` or vice versa.
- What happens to x in `a?.b.c(x++)` if `a` is null.

RBN: These examples are confusing because in option 1 it is not clear what the additional `?.`s do

RBN: And in option 2 it is not clear if the chaining thing happens to all of the remaining property accesses, or just to the `a.` access.

BM: Part of the confusion is that option 2 is commenting on if `a` is null or undefined, but in reality it affects all of the following member accesses

JHD: No, if `a.b` returns something, and `c` is missing from that, `a.b.c.d` will throw.

CM: we need a single expression that we interpret with different rules and compare the result rather that two expressions that are supposed to sort of how the same semantics.

BM: `o =  { a : { b : null } }`

BM: `o?.a?.b.c.`

BM: In option 2, the .c does not throw?

CP: It would throw.

GIG: The option that does throw is 1. In option 2 it does not.

LJH: Does anyone think it should not throw?

room: (majority thinks it should throw)

MM: I am abstaining because I am confused.

JM: One scenario is, "?. stops executing the remaining of the member expression". Another is "it only stops that access" (?)

RBN: We seem to generally agree that there is some case where `o?.a?.b.c` should throw. Should it throw only if o is null, or if o.a and/or o.a.b are null?

RBN: In C#, ?. says, if the left is undefined or null, stop. Otherwise, proceed as usual.

WH: Including binary operators after?

RBN: Only member access and member calls.

WH: It's not a well-defined concept; they are not sub-expressions in JS

BE: https://esdiscuss.org/notes/2012-09-20#existential-operator-strawman-discussion see Existential Operator (Strawman Proposal)

BE: http://coffeescript.org/#existential-operator

CP: It is easiest to think of this as an explicit if statement. Option 2 says, `if (a) a.b.c`.

MM: This should come back with something clear, including a desugaring.

WH: If `o` is null, what happens to the `x` in `o?.a?.b.c.f(x++)`? Does it get incremented or not?

RBN: In C# it does not get incremented.

WH: Really?! Hmmm; that changes my model and thinking of what the options are a bit....

BE: I put in the notes a link to the the previous discussion, including various counterexamples.

BE: I think the short-circuiting design without a nil magic value with unusual runtime semantics is still a non-starter. i'm not sure whether a nil value-proxy is a non-starter but it would be a separate proposal.

DH: Without getting into details, there's a tension between the more expressive less predictable version and the less expressive more predictable version. There is a fear of people not using this feature because it is too unpredictable. Unpredictable behavior of operators leads to people writing code in a sloppy way.

MPT: Concretely, in HR software I was writing I would frequently want the SSN of an employee of a job if the job had an employee, and get an error if there was an employee with no SSN. I need to be able to express it.

BE: There's an option to implement this not discussed which is the nil-soaking value.

DH: I'm not arguing for either. I'm concerned that they each have unresolvable issues. Option 2 feels very off. Option 1 feels weird around null vs function

YK: I am also concerned about how one is supposed to reason about the rest of the expression.


#### Conclusion/Resolution

- Come back later with clearer definitions for various options and answers to feedback
- Still stage 1


## 11.iv.a Optional Catch Binding

(Michael Ficarra)

- [proposal](https://tc39.es/proposal-optional-catch-binding/)

MF: The proposal is to make the catch binding optional. i.e. `try {} catch {}` with no parenthesised binding follow the catch.

MM: What's the purpose?

MF: Allows you to not introduce a binding.

BE: Doesn't this confirm the argument that catch without handling the actual thrown value as a pattern implies termination-style exception handling in the large is a poor design?

KG: Stage 3?

CM: point of order

MJN: if you can catch without the binding, can you just "throw;"

MF: no.

CM: We are going too fast. We don't want to hop a bunch of stages at once.

WH: Stage 3 is appropriate for feedback etc.

DD: I am asking for stage 3.

BT: We do expect this in the language and don't expect it to change, so stage 2 seems reasonable at least.

AK: I don't think we should have a rule preventing proposals from moving ahead.

CM: I just want the opportunity for things to come up.

AK: Stage 3 is appropriate for that.

DD: Stage 3 is a good time for feedback.

CM: Still uncomfortable with how fast this is moving, but I'm not going to block it.

#### Conclusion/Resolution

- Stage 3 acceptance
- Reviewers: Waldemar, Dan





## 11.iii.b Array.prototype.flat{ten, Map}

(Michael Ficarra, Brian Terlson)

- [proposal](https://github.com/tc39/proposal-flatMap)
- [slides](https://docs.google.com/presentation/d/1W7aFgvI0LlbTpCFEiJdZ7xl4rW_sfKalrAsUL0XgXog/edit?usp=sharing)

MF: Flatten spreads concat-spreadables into the resulting (new) array.

MF: Depth argument is equivalent to calling flatten that many times.

DH: No flatten of infinity?

MF: There is. Stops when nothing spreadable.

YK: What about when no arguments?

MF: = flatten(1).

DH: flatten(0) is identity?

MF: Not quite: eliminates holes.

MF: Also proposing flatMap. Better than .map + .flatten because it's a single pass.

JDD: Is flatMap just map then flatten?

MF: Yes. Equivalent semantics, but doesn't actually do a Get of "map" and "flatten".

MF: isConcatSpreadable vs Iterable? We went with isConcatSpreadable, this is most similar to existing implementations.

MF: Iterable is weird because it e.g. splits strings. Especially weird with infinite depth.

MM: I don't remember what things are concatSpreadable

MF: arrays, argument objects, anything with the symbol

DD: So DOM collections will not be flattenable.

MF: Right.

DD: I can raise that on the issue tracker.

MF: Another issue is, what happens when you flatten something containing non-spreadable things?

MF: We treat it as equivalent to a one-element array containing that thing.

MF: `[0, [1, 2], 3].flatMap(x => x)` should be `[0, 1, 2, 3]` instead of throwing

WH: So flatmap always has depth 1?

MF: Yes. Doesn't seem relevant.

MF: Holes could be treated in different ways. Current proposal: eliminates holes.

MF: Another option is preserving holes. Cannot become undefined because it breaks symmetry with maps.

DT: What is the spreadable thing represented by that hole?

MF: Conceptually, it is an empty array, instead of an array with one thing in it.

YK: I have concerns. This is a new feature, but kind of drags in old legacy behavior:  it does not work with dom lists; we tried to move iterable or isArray, but this is a new feature which makes you need to understand the old behavior. This does not block stage 1.

DD: Raised this on the tracker. Can discuss after this stage.

MM: Since this is intended to be generic over all "spreadable" things whatever is "spreadable". Presumably other collections you intended to be flattenable would have a similar function. That makes sense for .flatten but maybe not .flatMap

BT: This tracks arrays.

MM: It's not just what it creates but also what it tests.

MF: Do not want %TypedArray%.flatMap to be a part of this proposal.

WH: If you called the .flatMap method as defined in this proposal with a typed array receiver, would it just work?

MF: Probably.

AWB: As the inventor of isConcatSpreadable, it exists solely to provide the ability to self-host array using proxies.

MF: I would like feedback on what a better alternative would be.

BE: The name should tell you not to use this for anything except concat.


#### Conclusion/Resolution

- Stage 1 acceptance
- Explore alternatives to isConcatSpreadable


## 13.iii.f Throw Expressions

(Ron Buckton)

- [proposal](https://github.com/rbuckton/proposal-throw-expressions)


RBN: Proposal is to allow you to write `throw expr` anywhere you can currently write an expression. Useful for parameter initializers, arrow function bodies, ternaries, etc. Also works well for pattern matching and nullary coalescing if we add those.

RBN: Addition to the grammar is just adding ThrowExpression to AssignmentExpression, and adding a lookahead restriction to ExpressionStatement

DH: I am excited about moving away from statements, especially for throw.

RBN: This is different because `throw a, b` would change: in a statement that throws b, in an expression it throws a.

KG: The value of this proposal should be considered in a world where we already have do expressions

MM: I am more concerned about the `,` difference. But we could forbid it using a grammar restriction, similar to the -a**b restriction: if someone wants to return a sequence, require commas

WH: Why just `throw`, not `break`, `return`, `continue`?

RBN: This was brought up. Also, has prior art in C#, which does not have return expressions. And I have needed this but not those.

DH: Adding to that, there is justification for a wide range of statement forms becoming expressions. I think that's a valuable larger initiative. Throw seems like one of those most common patterns, and a lot of people will be more confused by return expressions and break expressions, so this is a better starting point, but this doesn't seem like a local optimum which would block something better.

DH: Do expression seem like they will always be valuable, in particular for `let`, even if all statements are useable in expressions.

DH: The reason do expressions haven't been moving faster is that my job has allowed less time, and it might allow more soon.

AWB: I would think we should push do expressions forward first.

DH: No point in throttling this work.

AK: Concretely, some of the problems do expressions have are not a problem here.

YK: Point of fact, ruby has both (throw) raise and return expressions, as does rust.

WH: I'm OK with stage 1 but am concerned that we should explore the space more fully — a consistent long-term direction for which things to turn into expressions, rather than doing it ad-hoc. I will raise this issue again when this goes up for further stages.

#### Conclusion/Resolution

- Stage 1 acceptance
- Explore the space of turning statements into expressions.
