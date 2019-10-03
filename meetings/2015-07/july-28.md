# July 28, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Waldemar Horwat (WH), István Sebestyén (IS), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Jonathan Turner (JT), Paul Leathers (PL), Chip Morningstar (CM), Vladimir Matveev (VM), Ron Buckton (RBN), Brian Terlson (BT), Alan Schmitt (AS), Ben Newman (BN), Mohamed Hegazy (MDH), Abhijith Chatra (AC), Tom Care (TC), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Rick Waldron (RW), Mike Pennisi (MP)

-----

## Introduction

BT: (logistics)

AWB: I will chair until John N. arrives.


## Adoption of Agenda

AWB: https://github.com/tc39/agendas/blob/master/2015/07.md

YK: Propose that future agendas be organized by stage advancement

(Agreement)

IS: Need to add Ecma Secretariat items (Allen adds) like report from the GA.

#### Conclusion/Resolution

- Approved


## Approval of Minutes from May 2015

AWB: Posted on Github and es-discuss

IS: Ecma is archiving (mirroring) the most significant documents from GitHub, like technical notes as well as summaries associated with the agendas.
This practice should satisfy both the requirements of Ecma as an SDO as well as of Tc39.


## Report from Ecma Secretariat

## 4.i Status of ISO/IEC Fast Track of ECMA-262 Ed.6, ECMA-402 Ed.2 and ECMA-404

IS: Need an Ecma-262, Ecma-402 and Ecma-404 package "Explanatory Report"

- Next project is "linking" the three explanatory reports in one
- Then discussion on the fast track started

AWB: Can we push through our current documents, as-is? Without changes?

IS: Similar to 5.0 -> 5.1, editorial changes allowed. Any technical changes, no. Concerns about stability.

AWB: Concerns about an ISO document that says one thing, vs. the Ecma document that says another.

IS: Can disallow discrepancies, therefore it is always the policy to synchronize the standard on both sides

WH: What happens if the ISO reviewers discover technical issues?

IS: The problem is that the yearly update for JTC1 might to be too fast. We are elaborating on them. Theoretically worst case, we withdraw the "fast track"

WH: [incredulous] Withdraw instead of fixing bugs? That wouldn't be nice.

IS: (explains why fast track). We have started this about 17 years ago, as long TC39 came out with big time gaps between Edition, no problem, but the current "turbo speed" like standardization (update) may create problems in synchronization. we are discussing this new thing with ISO.

AWB: Good to communicate to ISO

- We appreciate technical feedback
- Feedback will be put into the next edition as part of the on going process

IS: Explained to Rex Jaeschke (JTC1 SC22 Chair) the new schedule. Normally ISO likes to update standards every three years, have expressed our one year schedule plans.

WH: Afraid ISO might not like "take it or leave it". In the past, we got excellent technical reviews from them and have integrated the changes into the ISO standard and to the Ecma standard.

AWB: But that would be next June

WH: That's how we've always done it. The ISO version was a year behind the ECMA version. If we don't integrate the known defect fixes, the ISO version would be multiple years behind ECMA.

AWB: Ignoring unknown issues, we have 5 or 6 technical issues that could comprise a 6.1

RW: If we have a yearly release for full edition points, perhaps we can also include a 6 month "sub release" to address minor changes to current

YK: Not unreasonable when the work is done by a group using shared tools

IS: Theoretically in Ecma we could have a 6 month correction cycle (TC52 Dart uses that). Depends on TC39 what they want.

AWB: What does the GA think about doing this process every six month?

IS: no problem there, this could be reasonable solution, for Dart it has been accepted. Of course Impose a deadline of 2 months before December GA meeting for the version to be voted upon and published.

RW: Can correspond with our September meeting.

IS: (agreed)

AWB: Trivial to make minor changes, willing to work through the first round as we transition editorship.

- Need to decide this meeting and produce a draft for approval at next meeting.
- https://bugs.ecmascript.org/describecomponents.cgi?product=ECMA-262%20Edition%206

RW: Does this need to include the ISO review comments (Waldemar's concern)

YK: Would like to come back to this after we have a more in depth discussion about the future of our tooling.

Discussion about what we produce.

AWB: We can produce errata any time, but it's not the standard

DD: If we have the base covered, avoiding shipping bugs, do we publish errata every year or every six month?

WH: It's not ok to ship a standard with known defects. We can publish standards on whatever schedule we want, but anything we publish should have all known defects fixed.

YK: Think "annual" is enough time to fix bugs

AWB: The issue is ISO. There is concern about divergence between those two documents (ISO document with changes made by their reviewers, Ecma version)

BT/IS clarifying why we need ISO version?

BT: Why?

WH: There are benefits to ISO publication

AWB: There are organizations that may require

IS: Public procurement, if it's an Ecma standard, maybe problematic. ISO is in the "highest level" of international standard category.

BT: Are there concrete examples of using ISO specification over Ecma?

(Spending too much time on something we don't know the value of)

DD: Propose that we don't do this process unless an external request for it is made.

IS: We are already for 17 years in this process, and it is expected that we continue for future editions as well. So this is automatic and not exteranl request is needed. How to explain why ES 1, 2, 3, 5 & 5.1 are ISO standards, but 6 and 7 etc. not and what if Ecma is already e.g. at 7 and ISO still on 5.1?.

Can we be forced to do this?

IS: Yes, the current rule for synchronization "forces" it.

YK: (clarify) Once we issue _any_ ISO spec, we're required to maintain?

Several "yes"

WH: We don't want to destroy the relationship between Ecma and ISO

STH: How does is hurt to not create ES 6.1?

YK: ISO was ok with a two year wait for 5 to 5.1, should be ok with a year between 6 and 7

WH: But much longer since 5.1

AWB:

- Errata?


Discussion re: schedule, responsibilities, etc.

AWB: We will submit to ISO, with exact same text (subject to ISO naming, etc). But the text will include any known errors.

WH: No, they have to be fixed. I'm not ok with shipping standard with defects known to us.

DD: We agreed to fast track at the last meeting and Waldemar is now disagreeing?

WH: Incorrect

DD: You said you won't allow us to fast track with defects

WH: No, we _must_ fix defects

STH: Why does fast track require fixing errata?


WH: Not a lot of work

DD: You're saying that you no longer agree to fast track

WH: We will get comments from ISO reviewers, these will identify defects, these need to be fixed. It is our job to fix

CM: Exactly the proposal: take the existing text and put it in the pipeline and publish the errata later.

YK: Treat ISO as an LTS?

WH: That's _what_ it is

DD: Can we have members of the committee that are responsible for incorporating the errata, as a separate task.

AWB: That's the editor's job. Incorporating errata is not a lot of work.

RW: This is exactly my suggestion, but with a schedule requirement.

Discussion about who and how.

AK/JT: What is the cut off for known defects?

DD: Suggest that we let whoever volunteers be responsible for making those decisions

YK: With better tooling, we could really just do this as branches in a repository where all work is tracked.

AWB: Don't think that any editorial difficulty. Bigger isssue: what are we going to do with ISO on a regular basis? Yearly ISO and it's the same document?

BT: Agreed.

AWB: Ideally we'd have "fast track authority", submit the Ecma document and they either take it or leave it.

YK: Can we revisit this after we've read the agenda items? (Specifically item 5)

AWB: That item is Editorship?

YK: That seems to determine tooling.

JN: Assignment of Editorship role.

BT/AWB: Yearly release, give them to ISO without change, accept them as is. Take their changes and roll them into next year's edition.

WH: This is agreed to an incorrect assumption. All ISO comments must be addressed.

IS: That's correct. That's required by the ISO process.

BT: If István can convince ISO to accept yearly releases "as-is", are you ok with this?

WH: If ISO can accept as-is, then let's discuss this again, but I don't think they can

IS: I told ISO at the last meeting that we are moving much faster and that we need to create a new way to submit. This is a way to handle that and I can present it to them as a solution. Normally, they don't update until every 3 years. I pointed out the issue with their timeline and they agreed. This is a possible solution and I will work with them to sort out this problem.

WH: Are they ok with not making comments?

IS: From some members, but not all, awaiting final word.

WH: Not ok with making decision until we know where they stand.


#### Conclusion/Resolution

- Yearly release, given to ISO without change, to accept as is.
- No sub releases
- Publish errata as follow up
- Take their reivew comments/changes and integrate them into next year's edition.
- István will present this to ISO as a solution



## Propose Life Membership for Allen Wirfs-Brock

(Rick Waldron)

RW: As we have for Brendan, I'd like to propose inviting Allen Wirfs-Brock as a lifetime member of TC39

IS: Such a category does not exists officially at Ecma, only some freedom for the Secretary General to allow partication as invited expert. He will bring this to Ecma Management for seeking agreement. This is a special case, and I am confident.


#### Conclusion/Resolution

- István to get approval



## 5 ECMA-262, Editorship

JN: Need to appoint a new editor, only one volunteer has come forward and that's Brian Terlson.

- Motion to appoint Brian

YK/RW: Seconded

JN: Discussion?

WH: Do you see your approach as different from Allen?

BT: Only in that I'm a different person, but generally the same. I'm not Allen, but I will do my best.

AWB: Appropriate to also appoint a manager for the content that we're producing.


#### Conclusion/Resolution

- Brian Terlson is new editor of Ecma-262
- Unanimous consent



## Discussion of the Manager Role

AWB: Useful to have some web content which will need a manager

Discussion, re: content manager

"web master"

IS: Need procedures to archive the github material

AWB: Unless someone wants to volunteer now, then let's resolve to appoint someone by the next meeting.

JN: Allen please generate a "job description"

#### Conclusion/Resolution

- Allen will produce a "job description"
  - Coordinate with Brian
- Submit to member companies for review
- Member appointed to the position at next meeting


## Exponentiation Operator

(The room is very excited about technical discussion finally starting.)

RW: SpiderMonkey is ready; V8 is ready; spec material is ready https://rwaldron.github.io/exponentiation-operator/; it meets the requirements for stage 3

WH: This is incomplete; it is missing details on the lexical grammar.

RW: Agreed; I can address that issue before the end of this session. Perhaps we can revisit in the coming days.

DH: Let's avoid a precedent that if anyone finds any minor hole, they can stop advancement.

WH: This is an issue of completeness

DH/BT: The resolution of this problem is obvious and trivial to implementors

AWB: We need to improve the process document to include expectations for reviewership

DD: The process document is now published as an HTML document in an public repository on GitHub.com. I have migrated it from Google Docs with no changes to content. I have opened two issues to discuss details that have historically vexed this committee.

WH: I have no doubt that you can address this by the end of this meeting.

RW: I am literally done.

BT: We have agreed that technical issues should not block advancement to Stage 3. Does anyone object to advancement?

AWB/DH: We have technical questions, but they have no bearing on advancement to Stage 3.

(break for lunch)


#### Conclusion/Resolution

- Stage 3 acceptance




## 6.2 RegExp.escape

(Domenic Denicola)

https://github.com/benjamingr/RegExp.escape

- [slides](http://slides.com/benjamingruenbaum/regexp-escape)

DD: (presents slides)


YK: Don't make user think about escaping.

AWB: Generate a complete regexp from string. Append cases

WH: What does it mean to create a regexp from a string? (w/r to Proposal Ruled Out)

AWB: Regexp construction that will exactly match

YK: A simple example: a lexer, the lexemes provided as a string

DD:

SyntaxCharacter Proposal

- Escapes string just enough to be used as a RegExp

AWB: Used as argument to the RegExp constructor

DD: yes

Safe With Extra Escape Set

- Escapes everything the SyntaxCharacter proposal does
- Escapes `-` addl. for the context sensitive inside-character-class matching
- Escapes hex numeric literals (0-9a-f) at the start of the string in order to
- Less readable output but safer

WH: Escaping `d` by replacing it with `\d` completely changes its meaning. The latter matches any digit but not the letter 'd'.

YK: Issue is `RegExp.escape(...)` what?

WH: Second use case (https://github.com/benjamingr/RegExp.escape/blob/master/EscapedChars.md, `0-9a-fA-F`) is not useful. There is no good reason for someone to concatenate the erroneously short (three digits instead of four) `\u004` to user-defined input. The first use case there is also not common.

MF: Should be a `RegExp.compose`, not use `+` to concatenate strings for `RegExp()`

```
new RegExp("\\u004")
```

AWB: illegal in the grammar, but allowed in the annex extentions (annex b grammar allows < 4 characters following the `\\u`)

WH: Why would you do this on purpose?

WH: How do you escape these things? `\d`, or  `\0` which does not mean `0`

MM: Issue about fragment hazards, not using + for composition. I actually think that a template string tag is the solution

DD: Extended "Safe" Proposal, Allen had concerns?

AWB: ES5 takes efforts to roundtrip the string returned for a regex has forward slashes

WH: RegExp's toSource creates a string that, when eval'ed, produces a valid RegExp

DD: No change to output of `RegExp.prototype.toString`


DD: https://github.com/benjamingr/RegExp.escape/issues/4 explains why not a template string tag, but reviewing now, the arguments are not strong

MM: You get the escape functionality in terms of the template string tag.

MF: Concerns about unnecessary escaping

DD:

WH: Readability costs. Don't want RegExp.escape to turn '7' into '\u0037'.

MM: template string doesn't have those costs

DD: cannot compose a variable number of strings together with template string tag

YK: Assumes certain amount of "static-ness".

... Would like to see an injection scenario that seems realistic.

DD: it's possible, it can happen. Reasonable for a TC created solution to address all the cases. All we need to do is address all of the cases presented, at the beginning of the string

AWB: Why do we thing there is one `escape` function that covers all cases?

WH: Whoever is writing the things that are not escapes, limits themselves to a subset of "well behaved regexp". In a well-behaved regexp:
  - don't end it with a single \
  - don't end it with \u002
  - don't end it with \1
  - don't end it with (?
  - etc.

DD: What if you want to match backreference \1

WH: If you want to do it just before a concatenation point, write it as (?:\1). A trailing backreference is such a rare case, this is a reasonable constraint to do to simplify readability of all escaped strings that start with digits.

MM: Object to template string solution?

WH: No. My argument is orthogonal to whether we use template strings or RegExp.escape. Object to escaping individual non-punctuation characters a, b, c, d, e, f, 0, 1, 2, 3, 7...

DD: Objection to any proposal but the SyntaxCharacter Proposal?

WH: No. Fine with other punctuation-escaping-only variants such as also escaping '/' if we choose to do so.

YK: Does SyntaxCharacter escape `-`?

DD: No

YK: That's a mistake

AWB: SyntaxCharacter has specific meaning

DD: Current thing on table: SyntaxCharacter and hyphen

- Advocate for whitespace?

YK: Why?

DD: eval

Discussion re: template string availability

DD: Proposal coming from people that need to ship code to non-edge browsers


YK: Use today? Library code.

DD: Has been a request for a long time, give what's requested even if unsafe? Give them what they want plus things that make it safe? or make a new thing from template strings.

Discussion, re: issues with template strings in this use case

YK: Maybe template string API is flawed and needs work to be dynamic

MM: Agreed with need.


CM: this output from one piece of code to another

STH: The spec can say "the output looks like literally the input"

YK: People will then rely on it

STH: State the goal, then go back and specify to reach the goal.

DD: We've done this, and the constraints are illustrated https://github.com/benjamingr/RegExp.escape/blob/master/EscapedChars.md

MM: What is the motivation for readable output?

BE/YK: Debugging

MM: Ok, then issue is debugging vs creating less bugs?

DD: Then escape everything

YK/MM: Agreed

DD: Any objections to escape everything?

- There's been a lot of work so far
- Can we continue on this path?
- Preference for template strings?

MM: I think the template string proposal is better in all dimensions

YK: Maybe do both?

- Safe version of `RegExp.escape`
- Template String solution

AWB: Stage 1? Will the champions know that this could change from RegExp.escape to template strings?

DD: Want to say that `RegExp.escape` can move forward for now

YK: ?

MM: template strings handle all of the malformed fragment cases

- Small list completely safe?

AWB: and is 100% convinced is safe?

MM: eval thing is safer than

DD: "only beginning of string"

WH: What mark is suggesting conflicts with what I was saying

YK: What is the constraint?

WH: Readability

Ok to escape everything, but don't have to

MM: Rather not inro hazards, ok with either solution that doesn't

DD: Ok to advance is escape everuthing?

WH: if we don't, escape everything, unnecessary to escape "d" at the beginning of string

DD: This has been identified as a security issue

WH: it does't buy anything and there are others that aren't covered.

DD: Can you give example

WH:

```
new RegExp("\\" + RegExp.escape("x"))
```

MM: "\\" is a regexp fragment.

WH: Yes (in this case), but in practice so what? There's nothing in the concatenation example that would ensure you only concatenate complete fragments.

MM: Right, this is still a security issue. Unresolvable by escaping due to the odd-even problem.

DD: Ok, the point was to handle all cases

YK: Non capturing parens solution

```
new RegExp("\\\\(?:x)")
```

WH: Stick to well-behaved

Each case fails where another does not. Template strings address all issues, but fails for not being dynamic

MM: Would Benjamin be interested in pursuing the template string solution.

DD: Will bring this to Benjamin

?: Need to work to resolve the caveats in RegExp.escape.

WH: The caveats of protecting against all possible prefixes are inherent and irremovable. I want RegExp.escape to move forward despite those. It's safe for concatenating arbitrary escaped user input with well-behaved regexp fragments.

MM: I'm not ok



#### Conclusion/Resolution

- dynamic solution that has caveats
- caveats cannot be eliminated
- not confident that all issues can be addressed
- want to see template string solution explored



## 6.i Advance Array.prototype.includes to stage 3

(Domenic Denicola)

https://github.com/tc39/Array.prototype.includes

DD: Walking through https://github.com/tc39/Array.prototype.includes/issues/12

#### Conclusion/Resolution

- Stage 3 acceptance





## Introduce promise rejection tracking proposal

(Domenic Denicola)

https://github.com/domenic/unhandled-rejections-browser-spec#changes-to-ecmascript

DD: (introduction)

YK: (summarizing) Some want to be notified when a Promise is rejected without an error handler

- Will be used as if any promse without an immediate handler to treat as a fatal error

MM: prefer this to solution had consider

YK: Easily be used incorrectly

BE: Regardless of our intentions, it will be misused

- What do you do with the promise?

DD: Use to correlate

- dedupe on client


Discussion, re: potential hazards

YK: People often try to deal with promise debugging incorrectly

MM: This provides diagnotistic tools that allow for better debugging

YK:

MM: Instead of using the turn boundary, await gc, but gc may never happen

- Intead of calling something to notify, a query API: did a promise get rejected? provide reason

DD: (refocusing) All I'm hoping for is the addition of these non-observable steps to the specification (showing https://github.com/domenic/unhandled-rejections-browser-spec#promise--executor- )

AWB: Nothing there that an implemenation couldn't do in terms of the current spec, it's totally allowed.

DD: You'd have to say "insert steps here"

AWB: When putting in the hooks, we more than say "this is allowed", we're saying "this is supported"

BE: This is more like a debugger API

Agree

YK/MM: An innocent refactoring to register a rejection handler

MM: The utility of having a diagnostic outweighs the noise of introducing

DD: There is no delay, occurs immediately, at the earliest step possible

MM: If I call Promise.reject?

DD: Will trigger the HostPromiseRejectionTracker

YK: Persuaded by Mark's argument


Discussion, re: .done

AWB: Different promise's can have different handlers? No

AWB: no reason an implementation needs to define HostPromiseRejectionTracker, so a default handler should be specified.

DD: Didn't see something like that

YK: Move to stage 2, because already implemented.

Discussion, re: stage process? Yes.


#### Conclusion/Resolution

- Specify a default handler
- Filed: https://github.com/domenic/unhandled-rejections-browser-spec/issues/14
- Non-normative note: "If operation is "handle", it must not hold a reference to promise in a way that would interfere with garbage collection."
- Filed: https://github.com/domenic/unhandled-rejections-browser-spec/issues/15
- Stage 2 acceptance



## 9 Tooling Updates

(Brian Terlson)

- [slides](tooling-updates.pdf)

BT:

Grammarkdown (Grmd)

- http://github.com/rbuckton/grammarkdown
- Plain text syntax for specifying ECMAScript grammar
- Support for multiple emitters—MD, HTML, Emu
- Example

AsyncArrowFunction[In, Yield] ::
  `async` [no LineTerminator here] AsyncArrowBindingIdentifier[?Yield] [no LineTerminator here] `=>` AsyncConciseBosy[?In] #1


MM: Can I use this standalone?

BT: Sure, but it's just part of Emu

Ecmarkup (Emu)

- Emu-xref for cross-references
- Emu-production references
- Emu-syntax element supports Grammarkdown
- In use by SIMD, Intl 2.0, Async Function and others
- Michael Dyck now maintaining es-spec-html, working on high-fidelity emu output
- Next steps:
- Unclock authoring of new specs and porting of 262
- New EMD processing model
- Continue improving authoring tools
- Emd 3.0


AWB: note that the Python program that Jason wrote has evolved


Ecmarkdown (Emd)

- Working towards 3.0 release
- Hand written parser
- Support for parsing entre documents (not just single paragraph/list or fragment)
- Support for more Markdown-like syntax
- Bullet lists
- Backslash escape
- Next steps:
- Unblock authoring of new specs and porting exsting spec
- Syntax for links
- Smart quotes


## 6.6 BindingRestElement should allow a BindingPattern ala AssignmentRestElement

(Brian Terlson)

- [slides](binding-rest-element.pdf)


BT: AssignmentRestElement allows destructuring, BindingRestElement throws. Destructure rest on assignment, but not on binding

- Historic accident
- Bug filed on error thrown by having an array lutera after a rest
- https://bugs.ecmascript.org/show_bug.cgi?id=3361


Possible Avenues

1. Keep as is
2. Remove support for a bunding pattern in a rest element
3. Align AssignmentPattern with BindingPattern to allow further destructuring of the rest element

BindingRestElement[Yield] :
  `...` BindingIdentifier[?Yield]
  `...` BindingPattern[?Yield]

Plus necessary statc and runtime semantics to align with BindingPattern

MM: Made and fixed this error in http://research.google.com/pubs/pub43462.html

- Any reason to not do the general orthogonal thing?

BT: No

BT: Babel already treats the same


#### Conclusion/Resolution

- Align AssignmentPattern with BindingPattern to allow further destructuring of the rest element



## 6.7 new & GeneratorFunction

(Brian Terlson)

- [slides](new-generator-function.pdf)

BT:

Current Semantics:

  - [[call]] `this` set normally by caller
  - [[construct]] `this` is a dynamic ReferenceError

Issues:

  - Potentially confusing
  - new doesn't do anything useful

Possible Solution:

  - GenerationFunction doesn't implement constructor, so new throws
  - `this` is not a dynamic ReferenceError, but instead refers to the GeneratorFunction instance (align with current implementations: Babel, V8, SM)

AWB: Doesn't act like derived constructor, does have a prototype property that's used to initialize instances

BT: No case where a subclass will always throw

AWB: Body of function is not run as part of the constructor. The body is not a constructor body in the typical sense

BT: Breaks down the `this` and `new` behavior, b/c can't use `this` with `new`

AWB: The body isn't run as part of the constructor, it's run as "next"

DH: A generator used with new is weird. (giving an example)

```js
function * Thing(x) {
  this.x = x
}

Thing.prototype.sayHi = function() {};

let thing = new Thing("tc", 39);

thing.x // undefined
thing.y // undefined
thing.next();

thing.x // "tc"
thing.y // undefined
thing.next();

thing.x // "tc"
thing.y // 39
```

DH: Why would want to pause before fully constructing the object?
- Introduces a non-orthogonality that doesn't pay for itself

AWB: Generator method

```js
let obj = {
  *foo() {
    yield this;
  }
};

let iter = new obj.foo();
```

RW: Non-generator method would throw a TypeError when `new ...`

MM/DH: (discussing special cases)

BT: Potential argument for why we should allow `this` inside generator, observables, where you might initialize this before the first yield (by calling `next` before handing out your iterator)

AWB: this binding is actually set up when the iterator is created

MM: A generator method, that does not mention super, has a call behaviour that sets this from it's caller the way that a generator function does

AWB: imagine "MyCollection"

```js

class MyCollection {
  constructor() {
    // ...
  }
  * values() {
    let k = 0;
    let length = this.length;
    while (k < length) {
      yield this[k++];
    }
  }
}

let collection = new MyCollection();

let values = collection.values();
```

```js

class MyCollection {
  constructor() {
  //
  }
}

let collection = new MyCollection();

collection.values = function * () {
  console.log(this);
};
```

DH: Have a construct trap, normal new object passed in. Generator function is a generator implementation of a function.
- On us to prove/disprove value

BN: If trying to discourage using new, this may already be the case, since this.next(), this.throw(), this.return() will all throw if called from within the generator, because the generator is already executing

AWB: Cannot re-enter


```js
function * Thing(x, y) {
  this.x = x  // current ES6: throw here.
  yield;
  this.y = y;
}

Thing.prototype.sayHi = function() {};

let thing = new Thing("tc", 39);

thing.x // undefined
thing.y // undefined
thing.next(); // current ES6: ReferenceError on `this`

thing.x // "tc"
thing.y // undefined
thing.next();

thing.x // "tc"
thing.y // 39
```

(Note that SpiderMonkey doesn't throw at either of the places called out above)


DH: The \* is a way of saying that you're providing a way to the precise thing you would do by hand, but without the long form hand written

RW: Then generator method should throw TypeError when called with new

DH: Agreed

MM: What is the instance created from whehn a generator method is called with new?

AWB: instance of Generator

MM:

```js
let coll = {*values() {}};
let it = coll.values();
it instanceof coll.values; // true
```

MM: Unseen: allocatiing a new generator instance. Contains an implicit `new` and implcit constructor body.

DH: \* imputes an implicit `new` (in both the method and constructor)

MM: Acting like a function that's calling an implicit constructor


BT: it's a factory

DH: Simpler: "\* is never new-able"


Alternative 2: a function \* has


MM:

```js
let coll = { *values() { this; } }
coll.values(); // ?

coll.items = function * () { this; };
coll.items(); // ?
```


DH:

| S | I | Code |
|---|---|-----------------------------------------------|
| ? | X | `{ *foo() {} }` (no [[construct]]) |
| X | X | `function * () {}` (no [[construct]]) |
| ? | ? | `function * () { this }` is exactly like `function() { this }`  |

AK (offline): Further spec reading suggests that GeneratorMethods need to have their [[Construct]] removed just like GeneratorFunctions (they both pass "generator" to FunctionInitialize, which is where the decision to set up [[Construct]] is made).


#### Conclusion/Resolution

- Maintain spec that cannot construct generator methods (or change spec to make them non-constructible, see above)
- Spec change: generator function do not have a [[construct]] trap, so `new` throws
- Call a generator, `this` should be set by the caller, as is normal (global or undefined)
- File Errata




## 6.12 String.prototype.split, its limit argument, and ToLength vs ToUint32

(Adam Klein)

https://gist.github.com/ajklein/335e0f948c500a0c25dc

AK: Issues:

- ES5 (15.5.4.14.5): If limit is undefined, let lim = 2**32-1; else let lim = ToUint32(limit).
- ES6 (21.1.3.17.8): If limit is undefined, let lim = 2**53-1; else let lim = ToLength(limit).

Problems:

- Return value is an Array, so a limit greater than 2**32-1 would result in a "malformed" array (one with elements past the end of the array). Iteration over the return value will skip all such elements.
- Behavior changes for negative limit: ToUint32 transforms -1 to 232-1; ToLength instead transforms -1 to 0.


AWB: One of the discussions was to change arrays to be larger

AK: That would make sense


Discussion about changes

- break web?
- but this will never likely be hit by any real world code
- clamping is valued


Proposal: Revert this spec change. Existing implementations still match ES5, and the old behavior still makes sense (even with ES6's longer String length limit).

WH: The spec needs a geocities-style "Under Construction" animated GIF here ;). This was the first phase of a series of changes attempting to move the spec to eliminate the 2^32 array length limit, with the changes spread over time.

#### Conclusion/Resolution

- Revert this spec change. Existing implementations still match ES5, and the old behavior still makes sense (even with ES6's longer String length limit).
- Filed https://bugs.ecmascript.org/show_bug.cgi?id=4432
