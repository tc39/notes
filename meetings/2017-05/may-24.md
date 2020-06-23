# May 24, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Chip Morningstar (CM), Dave Herman (DH),  Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Jeff Morrison (JM), James Snell (JSL), Keith Miller (KM), Myles Borins (MBS), Rick Waldron (RW), Mariko Kosaka (MKA), Stephen Murphy (SMY), Rob Palmer (RPR), Andrew Paprocki (API), Philippa Gardner (PGR), Sam Goto (SGO), Mark S. Miller (MM), Nathan Hammond (NHD), Masud Rahman (MRN), Henry Zhu (HZU), Sebastian Markbåge (SM), Joe Mordetsky (JMY), Franziska Hinkelmann (FHN), Caridy Patiño (CP), Myles Borins (MBS), Ron Buckton (RBN), Ashley Williams (AWS), Domenic Denicola (DD), Patrick Soquet (PST), Peter Hoddie (PHE), Leo Balter (LEO), Ben Newman (BN), Jafar Husain (JH), Yehuda Katz (YK), Sarah D'Onofrio (SDO), Kirill Cherkoshin (KCN), Andres Suarez (ASZ), Diego Ferreiro Val (DFV), Tzvetan Mikov (TMV), Brendan Eich (BE), István Sebestyén (IS)

-----

## 14.i Towards Trustworthy Verification of JavaScript 

(Philippa Gardner)

(request slides)

PGR: (presenting from slides)

- For example, verify absences of array overruns or null pointer dereferences in C++ or Java
- Separation Logic, describing properties of the heap, etc. 
- JaVerT: JavaScript Verification Toolchain

PGR: (examining example: Priority Queue from Node.js)

PGR: (walking through "JS-2-JSIL: compilation by example" slide)

WH: Which ES language are you validating?

PGR: ES5 strict only for now. Shouldn't be much of a difference to get to ES6 and 7.

WH: Proxies make a big difference.

PGR: That's a big topic that would take all day to discuss.

KM: is there a tool to generate the compilation?

PGR: presently handwritten

(something of awe)

PGR: Likes that Test262 tests are filtered based on language version.

DE: File bugs against Test262 for misclassified tests.

RW: We can also use features flags and front-matter to help identify older (ES5 era) tests, won't be 100%, but will help

PGR: (describing internal function)... 20 cases for GetValue(...)

WH: What are "cases"?

PGR: cases are ... (need to ask specific follow up)

...

WH: How does the semantic language deal with state? Does it work functionally, threading state through assertions, or is state implicit in imperative semantics?

PGR: a formal logic description... first order logic, described in assertions

MM: small step semantics? formalization usually reads like an interpreter

PGR: This is written as assertions

DH: clarifying: your group came up with a set of invariants to test against?

PGR: yes—very hard, but yes. 

WH: A type of validations I'm interested in are verifying properties. For example, if you claim a program that sorts some non-NaN numbers, verify that the result is guaranteed to be in ascending order.

PGR: that's verifying JavaScript programs, I'm interested in verifying internal functions

(end of presentation)

Discussion about what kind of verifications are possible with this tool. 

WH: Can you verify that the priority queue will never return elements out of order?

PGR: Yes, we can verify that by induction: if the queue has the proper order and you insert an element, the queue will still be in the proper order.

WH: But that's not true. I have a counterexample where that won't be the case.

WH: For example, I can come up with three priority values a, b, and c, such that a<b, b<c, and a>c.

_discussion_

PGR: Priorities have to be natural numbers.

WH: There's nothing in the program that enforces that.

PGR: That's a constraint that I hadn't stated in the presentation. Our verification process assumes types on objects.
    
    



## 14.ii Shape Security

(Kevin Gibbons and Tim Disney)

https://docs.google.com/presentation/d/1CPAusyG_TRgQ4gy5pw_RzH4JWWmxfDU8AeqaDCa3mJw/edit?usp=sharing

ECMAScript design process: ECMAScript Vision
> Note: See the slides. These notes will mostly be for discussion outside the slides

> Slide: When do we allow ourselves to remove old features?

WH: We kinda removed `with`

_discussion_

AW: We removed it in 6

KG: There are lots of other examples of things that maybe someday we can remove.

TD: Yep, exactly.

> Slide: Mark has answered:

MM: Some valuable essays are deeply buried. (e.g. MM's https://mail.mozilla.org/pipermail/es-discuss/2015-June/043307.html )

WH: What is a primordial?

MM: Those objects mandated by the spec must exist before code is run.

SOMEONE: Is there a persona for a compiler writer?

BN: There's a distinction here. There are malformed programs because we think you may have made a mistake and then there are those where we _know_ you made a mistake. Like const, we know you made a mistake. But destructuring patterns where you can't ever get something out are where we _think_ you made a mistake. I'm with you. But it's frustrating when the committee assumes we made a mistake when we really meant to do something.

WH: I also have lots of comments, but let's keep going.

> Slide: 👎 sloppy mode

YK: What does the thumbs down mean?

KG: We want to make it harder to use sloppy mode and encourage strict mode.

Dave: I would like to note that this is contentious. There are many slides in this presentation that are contentious.

KG: We're done

BT: Comment time now?

KG: Unfortunately, I don't think we have time to litigate this now.

AW: The goal of these vision talks is for us to throw out long-term vision things we'll want to consider for years into the future without the much more normal constrained thinking we do. Coming out of this, there are ideas where we should say: We really should think more about these goals.

DH: That makes sense.

WH: I have a question for the presenters. I have a wish that we get rid of  `__proto__`. How would you recommend going about that?

KB: One of the things we had on our talk is we would like the committee have a process for deprecating old features. We don't have guidelines in mind. Certainly one of the guidelines there is if browsers can't remove it without breaking more pages than they're willing to break, that has to be a constraint. Also if this exposes more than we want to expose and it's not widely used, we should kill it. In 20 years, we may be able to remove `__proto__`.

WH: So, basically we can't due to web compatibility. But I can think of ways of removing `__proto__` in new code without breaking web compatibility. Of course, those are controversial.

AW: I've been talking about getting educators to look at proposals which may help the proposals process and they may also help with the definition of personas.

KB: Also we could ask them to stop teaching about these features we'd like to remove.

DH: There's a critical difference between coming up with personas and weighting them. I think weighting them is a great way to unnecessarily put people on the defensive and make them feel like they're being attacked. Our job is to best align the interest of multiple stakeholders. The best outcome is for us to not determine one persona in a zero sum competition. We should try to solve for both. I want us to avoid framing this as a zero sum game--somebody's going to win, somebody's going to lose. Identifying personas is very useful.

Someone from Apple: And then getting those personas in this room

KG: It does come up sometimes that there is a zero sum game. This is the worst case, and it is pretty rare. It's really hard to solve those problems.

BT: There's one piece of undefined behavior that I hate and it is the fact that ECMAScript implementations are supposed to have infinite resources available. I would love for us to prod the world toward tearing down at least the realm but probably the agent group when resource exhaustion occurs. I don't have time for that, but that would be great.

AWB: Break time!

## 14.ii Daniel Ehrenberg

"Follow the user"

https://docs.google.com/presentation/d/1jgHPsSqCP0aAYcyvYBRYw3db1jUm0pyu7Vj88DHUOGg/edit#slide=id.p

> discussion was missed from the notes :-/

SYG: A big part of devtools is not just visualizing stuff, but also working with the repl. All browser vendors know this. The message I get is: "That's a different way that we don't care about." 

BT: We talked about that issue and the response was "eh.."

DD: Devtools are not governed by a spec, and that's good, but that makes it harder for us to discuss as a committed.

DH: There's a difference between whether we standardize on devtools or whether the features we implement are easy to make devtools for. The issue is there was a stakeholder who felt that "my needs are not being taken into account here."

JSL: This is why Node is here.

DH: The way to get more user input is to empower users.

## 14.iii

Presentation by invited expert Patrick Soquet and Peter Hoddie of Moddable on ES6 in 48K of RAM (Brendan-invited, Ecma-approved)


MM: Would you like to join the TC39?

Someone from Apple: You can also contribute via ESDiscuss

Dan: Did you find any parts of the standard that didn't fit well on the device? What about new stuff.

PH: Some things are tricky. It's surprising how much a module takes up in RAM. We had to do require with weak binding so they could be garbage collected.

## 14.iv Role of Babel in JS

(Henry Zhu)

Slides: https://github.com/hzoo/role-of-babel-in-js

> ASTExplorer Slide

WH: Where in here does it define the grammar rule for `**`?

HZ: It doesn't. This is just plugin code, so the parser is already selected.

YK: Henry previously mentioned Babylon, and that's where the grammar rule is defined.

## 14.v TC39/ECMAScript: The Next 20 Years

(Allen Wirfs-Brock)

Slides: https://github.com/tc39/agendas/blob/master/2017/ES-next20.pdf

JM: What are some of the pitfalls of their organization

AWB: I don't know

API: We have a number of people on that committee. We follow some of their process. It's much more strung out. We have people who have been pushing something for a decade. They can do that split and subcommittees because they don't have any problem breaking compatibility. Here, everybody is more involved in every feature because you have to carry along with you all the backward compatibility concerns.

## 15.iv BigInt towards Stage 3 

(Daniel Ehrenberg)

- https://github.com/tc39/proposal-bigint
- https://docs.google.com/presentation/d/1lrcjQzIFgdUXczeeAzs4GkTXJsRQU21UhtmXef70Qic/edit#slide=id.p

DE: Name changed to BigInt for user intuition reasons. Another small tweak. In the BigInt constructor, it will throw if you pass it a non-safe integer

WH: That's the wrong behavior

MM: By safe you mean...?

DE: Number.isSafeInteger

DE: Throw on JSON.serialize (use a replacer).

DD: We could change JSON.parser

DE: It could cause issues

BE: We've had 2 related twitter bugs: 
    
- ids at 32 bits
- ids at 53 bits

Now they send ids as strings

YK: I've written ruby code that figures out limits of JS and tries to stay within them.

BT: Does it make sense to talk to the i18f??

AWB: The i18f have different requirements. They're based on what to do with network protocols. Not what's coming out of JavaScript.

BT: Well, they don't care about what's coming out of JavaScript per-se.

DE: I'm always interested in more perspectives.

DE: There's also been a fix to the spec to allow mixed comparison. Also some typo/bug fixes.

DE: `Presenting: Mixed comparison semantics`

Someone: What happens if you compare to a number that is an unsafe integer?

DE: Comparison between numbers and dates is based on the mathematical value of both which is not casting to one or the other type.

WH: It's easy to implement. If they have different signs or one has an absolute value ≥2⁵³ and the other <2⁵³, then the result is obvious. If they're both ≥2⁵³, then can exactly convert both to BigInt. If they're both <2⁵³ then can exactly convert both to Number.

AK: How is it observable that it's not convertible to a BigInt?

WH: If you compare 1 to 1.2...

Someone from Apple: When you compare .... ?

DE: Double equals doesn't convert to BigInts ever. They're both cast to a real number.

MM: There is one number that has no mathematical value: NaN

DE: We'll just say that NaN does not equal any BigInt

DE: If you call the BigInt constructor on a string, it'd be better if we throw a syntax error.

BE: SyntaxError is kind of funny. Might be a RangeError

DE: RegEx constructor (FWIW) throws a SyntaxError

BE: Fine point about SyntaxError, we can debate. It's a runtime SyntaxError.

AWB: Back in ES6 days we decided SyntaxError really should be focused on things that actually involve user syntactic input.

BE: Let's take this offline.

AK: Could you speak to the motivation? It seems that the particular thing you called out, this numeric comparison thing brings new meaning to double equal.

DE: Both comparison and double equal provide special capability.

AK: I'm not saying it should be strict, I'm wondering about giving it new behavior.

MM: When people want to compare for equality because they want to compare magnitude.

DE: A lot of people may be enforcing programming practices to not use `==`, like TSLint and ESLint. And that's ok, they wont get this. I hope that people keep using lint rules that don't allow you use `==`. But Waldemar makes a good point.

JM: Are there cases where `==` already throws?

BE: No, not for equal null, it's important that it does not. Here's why I'm concerned: If you pass a BigInt to old code, this could cause issues.

DE: That's a good point. I think SyntaxError is not right here.

SYG: This is not doing casts. Is it observable if we do the cast for double equals?

WH: Yes

DE: There's the `1 == 1.1` case

MM: If you're casting toward Integer then you have a problem.

SYG: Right. Ok.

WH: You can implement it as I described earlier [repeats algorithm].

DE: But none of this needs to be in the spec.

AK: `==` doesn't mean "do type conversions" it means are these two things kind of the same.

DE: The logic I took in coming up with this is: "What does number do?"

WH: There are two things going on:
    - What do you do when you compare number to a BigInt? The only sensible thing is to compare mathematical values.
    - What happens when you compare BigInt to other things like strings? The simplest thing to do is analogous to what you'd do when you compare numbers to strings.

AK: That's not what we're doing here.

WH: Actually it is.

DE: The logic makes sense.

_lots of discussion_

AK: Why not convert strings to Numbers when comparing strings with BigInts and then rely on the BigInt-Number comparison?

WH: That would be a gratuitous landmine because it would give wrong answers, but only for strings which contain integers with magnitude >2⁵³.

DE: Now they'll never throw because

BE: It'll be kinda like number

DE: `presenting: Proposed answers for questions`

JM: Any reason you didn't use `i` instead of `n`?

DE: Because that might lead you to think "imaginary"

JM: What about "b"?

DE: Binary? Anyone have anymore?

DE: `more presenting: Proposed answers for questions`

_discussion about whether to add BigInt to TypedArrays_

DE: We might see user libraries to address this ergonomics issue and we could use these as inspiration for the built-in version.

KG: I think it would be valuable to not use exactly the same interface... But have methods of different names to make it clear you're getting a different type than you're getting out of the other TypedArrays. My proposal is that property access would always give you a Number for any TypedArray and would just throw if used on an n64 array.

DE: Developers consider TypedArrays to be just like Arrays, especially considering they were designed to be compatible.

KG: I suspect we could make this work

DE: I don't get the motivation

KG: There's this ergonomics issue. Also some people would like versions of the other TypedArrays.......

WH: I'd like to see variants of 8, 16, and 32-bit typed arrays that produce and consume BigInts in addition to the proposed 64-bit typed arrays that produce and consume BigInts. The motivation to do it now is because of the health of the ecosystem — others will follow our example for other APIs, leading to unnecessary obstacles to writing code that is generic across 8, 16, 32, and 64-bit integer sizes.

_more discussion_

DE: `presenting: Considered integrated type`

DE: In the end, decided to not go with this proposal.

DE: `presenting: Status`

WH: I have not really seen it since the changes you've made this week.

DE: I'm not asking for stage-3. I want to know what I should address to get it to stage-3. Maybe we should discuss it more, but I don't imagine changing the API.

Someone from Apple: What happens with shift operations? Can the right side be only a number, can it be a number or a BigInt?

WH: In the proposal as it is now, the right side must be a BigInt.

WH: There is some logic to it for web compatibility, in that if you do currently a shift operation and the right hand is a Number, you're guaranteed that the resut will be a Number between 0 and 2³²-1. This idiom might be in existing use to coerce numbers mod 2³².

DE: Brendan and I went back and forth on this. But I think that it should be a BigInt. 

LEO: I want this to move to stage-3 and I'd like to see some of this added to the tests as well.

BE: I'm still wondering why you flip-flopped.

DE: Another wart that Shu has brought up is....

...

BE: WH, what do you think about the differing behavior of unary - and + on BigInts?

WH: In an ideal world (and my preference) would be that they should both work on BigInts and do the obvious thing. However, ASM.js currently uses unary + to coerce things to Numbers, and that idiom would break if we made it work for BigInts, so we might have to make a compromise for web compatibility. On the other hand, we have to make unary - work on BigInts.

DE: ASM.js is on its way out. I think it'd be better that we don't block shipping BigInt on ASM.js going out.

YK: What do people mean when they say ASM.js will be deprecated and removed?

BE: I don't think that's relevant here.

_discussion_

MM: What about `toString`?

DE: Yes, the question is, should toString on BigInt have an `n` at the end? And the spec says no.

WH: The best answer is "no".

_discussion_

DE: The hope for BigInt is that it will only be used for big things. Hopefully we can communicate that to educators well.

BE: We can implement unary + with value types.

WH: It's not really up to us. The issue is not with the implementation, but with existing usage which assumes that the result of unary + is a Number. We can define overloads for unary + once the usage gets low enough for us to ignore.

DD: Other things use unary +. Current code will continue to work because it will only use it on Numbers.

WH: That's not the problem. Unary + is used in stylized optimizations in ASM.js that assert that the result is a Number.

BE: Existing uses of ASM.js will use unary + on Numbers only, so that's fine.

WH: That doesn't work because the optimizer can't guarantee that any particular unary + will never encounter a BigInt. They could potentially sneak into code from various host places.

DE: 1n == "hello" needs to ... `something I missed...`? unary + will continue to throw. Do we have a conclusion on TypedArrays?

DD: I would like to propose we reach consensus on Dan's current proposal.

KG: The backing for Array Buffers....

_more discussion_

#### Conclusion/Resolution

- Changes to the current proposal:
  - "hello" == 1n => `false`
  - 0n == '' => `true`
  - Rename `Int64Array` → `BigInt64Array`; `Uint64Array` → `BigUint64Array`
  - (Tomorrow) Stage 3 pending WH's final review
