# September 27, 2017 Meeting Notes
-----

Andrew Paprocki (API), Brian Terlson (BT), Chip Morningstar (CM), Claude Pache (CPE), Godfrey Chan (GCN), Jordan Harband (JHD), Leo Balter (LEO), Maggie Pint (MPT), Michael Ficarra (MF), Michael Saboff (MLS), Patrick Soquet (PST), Peter Hoddie (PHE), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Waldemar Horwat (WH), Yehuda Katz (YK), Mathias Bynens (MB), Justin Ridgewell (JRL), Kyle Verrier (KVR), Keith Cirkel (KCL), Till Schneidereit (TST), Aki Rose (AKI), Daniel Ehrenberg (DE), Valerie Young (VYG), Rick Waldron (RW), Dave Herman (DH), Henry Zhu (HZU), Tim Disney (TD), Caio Gondim (CGM), Brittany Storoz (BSZ), Sathya Gunasekaran (SGN), Domenic Denicola (DD), Richard Gibson (RGN)

Remote:
István Sebestyén (IS), Ben Newman (BN), Caridy Patiño (CP), Keith Miller (KM), Gabriel Isenberg (GI), Zibi Braniecki (ZB)

-----

## Opening, welcome and roll call

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/09.md)

## ii.30.b BigInt status update (Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/proposal-bigint)
- [Presentation](https://docs.google.com/presentation/d/1wwI7858NPaXV4xTzQwCqPUj7Hp1baHvQodS7MUbZzbU/edit#slide=id.p)

DE: (Presenting Slides)

### Discussion of Atomics PR
- [PR](https://github.com/tc39/proposal-bigint/pull/80)

WH: Why torn?

DE: Writes into a Float64Array are also torn

SYG: Why do we want only 64 bit operations?

WH: What important architectures do not support atomic 64-bit operations? Even 32-bit architectures often support 64-bit atomic operations.

MLS: 32 bit operations are being deprecated but they're still around. MIPS is still being used.

DE: Yeah, set top boxes use MIPS

RW: Router chipsets, eg. MediaTek, etc

WH: Are there 64 bit atomics?

DE: Yes. On architectures that don't support 64-bit atomics built in you can use a spinlock

SYG: By writes being torn 32 bit hold for being atomic but not 64 bit. I don't think we should legislate what JS supports or not.

MF: We are. There are 16bit architectures

SYG: Until we see a state where there are no legacy chips like 32-bit ARM we need to support them.

WH: Atomic operations on integers are far more common than on doubles. We shouldn't forward past decisions on doubles to integers without considering the use cases and implications.

DE: There is an api to detemrine whether your platform supports foreign 64 bit writes. Atomics.isLockFree is a function to pass 4 or 8 to to determine if you have support. (Correction: This was faulty memory on DE's part, and there is no such operation for non-atomic writes.)

SYG: Lock free does not play into the memory management situation of torn-ness. The torn case is about bare reads and writes and if you can observe the tears.

YK: With respect if you got confused then there will be a problem. Trying to put myself in the shoes of someone using this API, if it does things you wont expect its a problem.

DE: Spec authors are generally sure about this. It does not make sense to mandate atomic writes. The details of spinlocks of MIPS are not relevant to us.

SYG: The guidance is that if you depend on atomicity, use atomics. We're saying here if you don't use atomics the behaviour is divergent.

YK: So if you don't use atomics there are other problems. Use atomics if you want them.

WH: This is not a big issue, but it is annoying.

DE: Should we proceed?

WH: There should be a way for users to find out if 64-bit operations are tear-free or not. I was hoping there would be no important platforms left that don't offer 64-bit reads and writes, but it seems there are some still.

MLS: ARMv7 has load-store of pairs operations. ARMv6 does not have a load-store of pairs so it is another platform that does needs support.

DE: ARMv6 is not just a theoretical platform, e.g., Igalia is porting JSC to ARMv6. This is a longer conversation. I'll merge this PR as it seems we're in accordance - we will investigate around Atomics and non-64-bit.

DE: (Presenting Slides)

DE: Should we allow BigInts be property keys?

WH: What happens when you use the `+` operator on a bigint with a string?

DE: It'll coerce to a string. Genuinely useful if you want to put together a string of stuff - like a template string.

WH: If it has toString in one place it should in the other; so property keys are acceptable here.

BT: So we want equivalency in all cases?

MLS: if you allow bigints as indexes then how do we handle the case of passing a bigint > 32-1 bits as the index?

DE: The 2^32 - 1 number only comes up in the specification is for the Array length. Implementations can optimize in a shorter or longer range already. I believe some implementations only bother optimizing for a shorter length.

WH: Don't you have the same problem with doubles or strings?

DE: If users expect this to be usable heavily optimized and ship code using it, then implementations may decide to optimize it. Eventually either everyone will learn its slow to use bigints for arrays or we'll end up supporting it in an optimized way. A fair summary?

MLS: Yeah. Important to be cognizant of what we're doing.

YK: Are we dismissing the idea of banning it in these cases? We rejected a lot of use cases for example [Double] == [BigInt].

WH: What you said is not true, we _do_ allow == to work to compare a Number with a BigInt.

DE: Property access and operators are not quite the same.

YK: This is a more extreme case precisely because not many have a accurate mental model of toString in the first place.

DE: That's probably true. However, I don't think we should add an n suffix to BigInt.prototype.toString, as it is not is not about a representation of the code, but a string representation of the value.

WH: Arrays are permanently limited to 2³²-1 elements.

CM: Larger arrays could be practical in the future, indexing larger arrays could be useful and bigint is how we'd do it

DE: It'll be a while before we need more than 53 bits for array indices.

WH: I don't see the rationale for throwing. There is strong rationale for binary operators to throw, but not for toString operations.

DE: Anyway it seems we don't have consensus. Let's go over the implementation status.

BT: You can coerce as a string

MF: All literals are allowed as properties.

DE: I will not merge any of these PRs then.

DE: (Presenting slides)

#### Conclusion/Resolution

- Accept PR around 64 bit and Atomics
- Do not merge PRs around bigint property access; revisit this question in the future

## 12.i.e Make EcmaScript a syntactic superset of JSON for stage 1

(Richard Gibson, Championed by Mark S. Miller & Mathias Bynens)

- [Explainer](https://github.com/tc39/proposal-json-superset)
- [Slides](https://docs.google.com/presentation/d/1k4fYiLRnOx7Tt8wJo2cJvhWvEsbK1K7AajZFJ_pLlaI/edit?usp=sharing)

(Mathias Bynens)

MB: (Presenting slides)

DH: Is this a real problem? Is it really confusing to developers?

MB: There is a subtle difference as to which unescaped values a string can contain in JSON vs. ECMAScript. It is confusing and unnecessarily increases spec complexity.

MB: There is a larger question about U+2028 Line Separator and U+2029 Paragraph Separator; can we get rid of these entirely as `LineTerminator`s?

DH: Does it cause security issues?

WH: There are security issues with changing our mind. We could have made the original decision either way and things would have been fine, but changing our mind leads to problems. Consider what happens when an ECMAScript sanitizer treats these characters differently from eval: I can then write programs which look good to the sanitizer but do different, evil things when eval'd.

MB: There are security issues with the status quo, too. Consider:

```html
<script>
  // Debug info:
  // User-Agent: <% JSON.stringify(ua) %>
</script>
```

The developer relies on the fact that JSON.stringify() returns a single line when used in this way, which is correct. However, what constitutes a single line differs between ECMAScript and JSON. This code is vulnerable to XSS since either U+2028 or U+2029 in the user-controlled string would break out of the single-line comment.

MB: (Presenting Slides)

JRL: Do editors display these characters as a newline?

MB: Depends on the editor. For example GitHub does not.

YK: It does not necessarily cause confusion for regular developers. Writing a server that accepts JSON is a problem though. Rails did not originally escape these. JSONP which has non-standard parsing did not correctly handle these characters. Very easy to forget these two pieces.

MB: We can choose to get rid of the unnecessary confusion. I think we should try.

DH: Stage 1 is a no-brainer.

MB: Also it won't change RegExps, just strings. Very minimal change. Any objections to stage 1? No objections? Stage 1.

DE: Should this just be a needs-consensus PR? It's a small change

WH: We should think about this a bit.

MF: I think it might require further research

DH: Yeah I'd be interesting in seeing data about this.

MB: We hope to get some data for the bigger question of banning the two chars as `LineTerminators` entirely soon, by the next meeting. But that is separate from this proposal.

DH: Is this precedent to change JSON?

MB: No, very much not. We need to be very clear JSON cannot change. This does not set the precedent.

CM: We had the same thing with the BigInt proposal - we could change how JSON gets interpreted by JS without changing JSON. There is wiggle room there.

DE: I don't think there is wiggle room.

DH: That's fine, this was a quick temperature check to see how flexible we are with JSON.

YK: We could standardise something like JSONC, but keep JSON the same.

DH: Maybe I think about that. Sorry for the hijack!

#### Conclusion/Resolution

- Stage1 acceptance


## 12.ii.c Needs Consensus PR: Template literal memory leak fix

(Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/ecma262/pull/890)

DE: (Presenting)

WH: The current behavior is observable by using ===. Is there any other way to observe it?

DE: Isn't that enough? Also WeakMaps.

WH: Which is ===.

DE: Let's have questions at the end.

DE: (Presenting)

YK: What is the reasonable reproduction? How does this interact with code caching?

DE: `eval` with a string is a new location.

WH: My worry is the same as what YK just stated: The memory leak problem will reappear in other ways related to code caching, in modules or somewhere else.

YK: Does the cache get bigger over time?

DE: Right now yes. Right now there is a cache for each agent that maps strings to the template object. At parse time we create template tag objects.

YK: The issue I have is at minimum even if every implementation has the same caching behaviour...

DE: Interop is not an issue--whatever policy we decide should be interoperable to the same extent the rest of caching is interoperable. Caching is observable. In current semantics you could observe changes.

DH: This seems important - people need to control the lifetime of these things. The solution seems in the direction of the correct one. We need to do something like this - I don't know where else we can tie the lifetime of these things.

YK: The code unit. The module.

DE: This is associated with that.

DH: The issue Yehuda is raising is... if it becomes an interoperability problem we should standardize that. The lifetime should be observable and we should make that consistent and interoperable. My spidey sense says they are solvable issues.

DE: Parse codes are already a thing that exists, we dont have a way to observe them. Theres a well defined concept of parsing, interop can be solved at that level.

DH: We'll probably find some corner cases, we can nail them down as they come up. Status quo is untenable - that's dont ever use template strings. The other option is some other lifetime - but where?

WH: I'm getting a sense of deja vu with Regular Expressions lifetime. We changed this for Regular Expression literals to create a new object for each evaluation. In earlier editions of ECMAScript they had been specified to be tied to the position in code — created once and cached, like this proposal. For Regular Expression literals we moved away from tying to the position in the code.

DE: This sounds like an argument for creating these things new each time they're evaluated? This seems fine from a user perspective but can cause implementation efficiency challenges.

WH: I'm happy with the approach you propose but I wanted to point out the precedence with Regular Expressions.

WH: Another editorial point: If we go with your proposed approach, we should think about cover grammars. Those involve reparsing the same piece of source text with a different starting nonterminal. Whatever wording you use should make it clear how the specified behavior is affected by cover grammars.

DE: Good point.

DE: With this PR I was trying to be conservative. Does this PR have consensus - modulo the editorial issues?

#### Conclusion/Resolution

- Consensus Achieved.

## 12.ii.d Throw Expressions for Stage 2

(Ron Buckton)

- [Presentation](https://docs.google.com/presentation/d/1DlzT3ULW1Iut39zLn1RwPyQk5zxZziSfV8_g38woOPM/edit?usp=sharing)
- [Explainer](https://github.com/rbuckton/proposal-throw-expressions)
- [Spec text](https://rbuckton.github.io/proposal-throw-expressions/)

RBN: (Presenting Slides)

JHD: Since do expressions can throw, `do` expressions aren't a motivating case here.

RBN: A throw expression is a refinement of a `do` expression. I dont think there is an issue with overlap here.

JHD: Why would we want to refine something that isnt in the language yet? We dont have `do` expressions yet.

DD: Im a big fan, but if we end up with `do` expressions that don't require braces this is a cross cutting concern.

DH: Its important to count costs. We're looking at fined grained syntax for fine grained operations. This is a long tail situation. The purpose is to make every day expression of what you're trying to say as a programmer as clear as possible. Not concise, clear. Important to be precise about what these forms are trying to express. `do` expressions are about having an expression form for creating local bindings - the most important thing they bring to the table; not about making return statements expressions. Its about localising variables to just the scope of where you need to use them. Throw expressions are not about that - they're about just the context of throwing in the larger expression; for example `x || throw`. `x || do { throw }` is adding another word that isn't expressing anything that `x || throw` doesnt. Throw expressions pay for themselves by reducing cruft. Do expressions are for bindings. The rabbit hole is - should we have brace-less do expressions or not? We don't need to resolve that here though. I believe these are complementary, throw expressions are one of many statements I'd like to turn into expressions.

WH: I disagree. Just because do expressions _can_ be used for bindings doesn't mean that's their only usecase. I'm uncomfortable doing these proposals one at a time; I want to see a coherent vision for all of these expressions so we don't introduce unnecessary new bells and whistles. It is possible `do` expressions are sufficient, we might not need this at all. I have no technical concerns with this proposal — it's fine — I just do not know if it is necessary and would like to see what we're going to do with other abrupt completion statements such as `return`, `break`, `continue`. I want to see the cross-cutting concerns addressed. That's what makes me uncomfortable here.

RBN: I did look at where throw expressions would be used in another expression, such as `return` or `do`. The expression result here does not return a result - it is an AbruptCompletion. I don't think we need to do this wholesale, whether or not throw expressions succeed or fail could be an indicator of whether we continue with `return` or `continue`.

JHD: Concerned of the cognitive overhead; the fact functions can be expressions is confusing for new JS developers. Having the duality is confusing; `do` expressions is a way to set it apart to say "this thing cant go here, but `do` is allowing it". I'm concerned throw expressions will further blur the line of expression-vs-statement.

RBN: Throw expressions exist in C# and used effectively. I haven't heard much around confusion about their use from their developer community. We're not blazing a trail here; I dont think they'll cause confusion - especially compared to `return` `continue` or `break`. `do` expressions in that case help with this kind of "do lock" to say I'm doing something out of the ordinary. Throw expressions can be modelled with a helper function though - not the same case for `return` `continue` or `break`.

YK: I agree with Jordan but think its the syntax that is confusing. Maybe the champions of `do` and `throw` expressions can work together to ensure good mapping.

SGO: Things that change flow control but produce a value vs things that do not produce a value - this sounds like a reasonable area around expressions vs statements. More can be one but this is the lowest hanging fruit.

DD: Does the comittee believe cross-cutting concerns have been address? I'm more or less placated. Waldemar has expressed concerns but I feel this is ready.

WH: I actually like this proposal but this proposal makes me more reluctant with `do` expressions as they're both in this same space.

DD: I feel there is space for both

WH: It's weird to do for just `throw` and `do`. One plausible ending point is having just `do`. Another plausible ending point is having `do`, `throw`, `break`, `continue`, `return`. Just `do` and `throw` feels too ad-hoc.

RBN: It makes sense to have `throw` without `do`.

WH: No I did not say `throw` without `do` as one of the ending points. One possible scenario is `do` without `throw`.

KVR: Making sure developers have tools to express their intent... this seems like an anti-pattern. It's not super compelling to me personally.

RBN: I've written a fair amount of C# over the past year and adding `throw` expressions is welcome. I've used it a lot. Its easy to leverage. It is, for example, easier to have throw expressions rather than a larger `switch` statement with an outer `let` binding. It's more concise.

KVR: I accept that but respectfully disagree for cases like ternary operator.

RBN: Cases of `||` or null coalescing make more sense because you do want to raise if you hit null. You don't want to have to write a let binding just for temporary variables before a throw.

KVR: I'm curious to see it go further with different examples.

YK: People have said `do` expressions conflict. This is weird because we have a separation of statements and expressions. There'll always be one statement in JS. The line between expressions and statements seem arbitrary. You could imagine that assignment was a statement already, but it's an expression.

CM: Dave's comments resonate with me. Some things are intrinsically statement-like or expression-like. Throw seems intrinsically expression like. You could imagine a `throw` builtin function, it'd be the same as the expression - just adding parenthesis. So concern about things like return or break as expressions  is just noise.

DH: I agree with one of Waldemar's points earlier. I'd like to see a spelled out vision for where this all goes. We can make incremental progress without laying out a vision, but... would the end-state be `do` and `throw` and nothing else? or the whole set? This is indicative of spelling out the whole vision. I'd like to work with you on this Ron - to show the horizon we're heading towards. Have you done this work already?

RBN: I havent got a table written out but I have outlineed in slightly more detail on the issue tracker. We could talk more outside this meeting perhaps?

DH: Yes - I dont want to block progress but this feature makes sense with or without do - but the ultimate vision is as many statement forms become expressions. If we never figure out a way for a few of these forms to not be expressions I'd be fine with this. Statements that aren't expressions are consigned to arbitrary historical decisions, going towards less of those is good.

RBN: So stage 2?

Everyone: Agreement

#### Conclusion/Resolution

- Stage2 acceptance

## 12.iii.a String.prototype.matchAll

(Jordan Harband)

- [Explainer](https://github.com/tc39/proposal-string-matchall/pull/17)

JHD: (providing background for spec, this is just a recap)

YK: What does it mean to make matchAll global?

JHD: If you pass an unflagged or sticky flagged regexp it will treat it as global regardless. If the regular expression would give you one match, you should receive an iterator with one entry.

YK: Do you think you'd want a lint rule to prevent those kinds of regexps?

JHD: I don't see linters enforcing the `g` flag for split; which is the same thing. You could write a lint rule, but I wouldn't expect to add it to the AirBNB lint config for example.

WH: What is the use case for this? Does it find all of the instances of where the regular expression is matched in a string? because `g` does not.

JHD: It'll return all the places it would match - but for the complete match each time.

WH: `g` does not do this. This is a lot less useful because if you have overlapping matches; for example a string of "abababab" with a match of `/aba/g` will find the first and third instances. I want to discard the notion that this will provide a way of matching everything inside of a string. It worries me that we are adding something that is inherently buggy.

JHD: What would you expect then?

WH: I would expect to return all matches.

DE: In the spec text you add the index as the length of the previous match

JHD: No, this is to say that if the index is the same as the last one, then this implies the iterator is done. I am not getting the length of anything, it is the index from the existing regular expression algorithm.

WH: My point is the semantics of `g` are busted.

JHD: Maybe so, I'm not attempting to correct these semantics, just making it simpler to get multiple matches from a regular expression.

WH: But you're not getting that, only getting some matches.

DE: This is the same semantics as calling `exec` multiple times.

JHD: We can continue discussing this - if you think it's worth holding off of promoting.

DE: `lastIndex` gets set at the end of the match.

JHD: These are established semantics. It is important to have multiple matches within the capture groups. Newcomers ask how to do this - they use .match but it doesn't give them capturing groups. This uses existing semantics; the matches you get are all the matches and what Waldemar is talking about is semantics of `g`.

WH: It is my belief that a lot of people are doing this wrong, and they don't realise.

JHD: And this proposal will make that worse?

WH: Yes.

JHD: Are you attempting to submit a proposal to fix this?

WH: No, I cannot change what `g` does.

JHD: The sticky flag predates my joining of the committee but I assumed it was to fix `g`.

DE: If you increment the index by 1 each time then you retrieve all matches.

JHD: Waldemar it sounds as though you want a match for each character in the string?

WH: No, for each character you need to retrieve a single match (if there is one that starts at that character) and collect them. There's also an issue of empty strings and infinite loops.

JDH: Yes - this is why we store `lastIndex`. So, outside of Waldemar, what are others' thoughts?

YK: Ruby has a method named `scan` for the same thing. I think Waldemar wants a primitive to start matching from some place?

WH: No I want a regex to match all matches.

YK: I also would like something that reports all match groups. Is that what you're saying?

WH: No, I am reporting matchAll doesn't report _all matches_.

JHD: Conceptually you're talking of all matches from each character of the string. That's not the definition I had in mind. This is a while loop with exec, what Waldemar wants is iterating the string and doing a single exec for each iteration, one character at a time. My semantics are one match at a time.

YK: To reiterate Ruby has the semantics Jordan has specced.

MB: Overlapping matches are the problem.

JHD: Waldemar is it true that if there are no overlapping matches are semantics are the same?

WH: Yes.

JHD: I should be able to come back in November with modified spec text for this then.

WH: If there was some way to chose between the two semantics.

JHD: Is there anyone in the room who has a strong feeling towards one or the other?

YK: I strongly prefer the semantics you have.

MB: I strongly agree.

JHD: Anyone else? If I keep the semantics Waldemar would you object to Stage 2?

WH: Yes.

JHD: If I came up with a different name would you be okay with it?

WH: Yes.

YK: There's another option which is to provide an option to choose between them.

JHD: Does anyone have a suggestion to how to make this an option?

DD: Boolean options are bad.

JHD: I agree, let's come up with something then.

MLS: Calling it `matchIterator` would solve the problem.

JHD: Does the room think this would be preferable?

DE: Do we really want to set up a convention where methods that return iterators end in "iterator" ?

MLS: you could call it scan instead

JHD: Is everyone happy with scan?

MF: Why don't we set up a github issue?

JHD: Right. I will set up a github issue. Can everyone who is interested please comment on that issue.

MLS: It seems you really want a sticky that doesn't start at lastindex. I'm not sure what sticky means with what your proposing.

JHD: Sticky provides an iterator for one match.

MLS: You want an iterator that gives you all the captures - a "sticky plus" could do that.

JHD: Like an alternative flag?

MLS: Yes. I share Waldemar's concern. What flag should I give the regexp? What do I get back? And so forth. Having something like this with all captures for every single match is good.

JHD: I feel more hesistant about adding a flag over naming this `scan`.

MLS: It gives you more power though - adding a flag allows you to use that semantic with all regexp operations. This is probably the main usecase but would a flag be more valuable?

JHD: By having matchAll we have a consistent interface; while a flag requires introspection in userland code.

MLS: With matchAll do I have to change my regular expression to remove `g`?

JHD: No, you get all match groups with `g`. It works the same.

MLS: So you're changing how exec works?

JHD: No, exec doesn't change. match and exec work differently. I'll file a few github issues to chat about. I may or may not come back in November for Stage 2. Any other concerns?

#### Conclusion/Resolution

- Does not progress to Stage 2 today
- Name change to scan
- Note: Conclusion revised on the following day. See the notes from the third day of this meeting below.


## 12.iii.b Optional chaining operator for Stage 2

(Gabriel Isenberg)

- [Spec](https://tc39.es/proposal-optional-chaining/)
- [Explainer](https://github.com/tc39/proposal-optional-chaining)
- [Presentation](https://docs.google.com/presentation/d/1iiCtJSW42Z7lg0YlagOZOfI-FTrkN88OuiO3pySawSo/edit?usp=sharing)

GI: (Presenting)

YK: Is this falsy semantics, or null/undefined?

DE: null/undefined

GI (Presenting)

MF: Is the equivalent code presented actually equivalent? Assuming no caching of getters?

WH: No, each step is evaluated only once. There is caching.

MF: Okay so the code isn't equivalent.

YK: These examples show the expression in `.d` - de-sugaring seems to end in `.d` which makes sense - but where is the exact point to stop searching?

WH: The desugaring swallows the remaining .'s, ()'s, and []'s in the _LeftHandSideExpression_.

DE: This is explained in later slides.

GI (Presenting)

> Slide: "Syntax: Optional Call"

YK: So `?.` with a call syntax does a typeof function check?

GI: No - there is no typeof function check. It you attempt to call on a non-function it will throw.

YK: So if it is not a function, but also not null or undefined then it will throw?

GI: Correct.

MF: I don't see the purpose of `?.()` then.

WH: (responding) The confusion is because this slide is wrong.

MF: Why do we check for null/undefined instead of callability?

GI: There is a GitHub issue. It is a point of contention, it becomes harder to reason about.

YK: In this case we have a special syntax though? Callability check seems not so outlandish right?

MF: These operators are here to check what you're doing is a safe thing to do; so the check for not-null doesnt matter.

WH: I see your point but disagree. The mental model is it checks for null/undefined only.

MF: That reduces the usefulness for this operator then.

WH: It is more useful though because if it is a number and I expect it to be a function, I wouldn't know about it. It's hard for me to come up for a scenario where:
- if the value f is missing, I don't want to call it;
- if the value f is a number, I silently don't want to call it;
- if the value f is a function, I want to call it.

On the other hand, it's easy to come up with useful situations where:
- if the value f is missing, I don't want to call it;
- otherwise, I want to call it (and get an error if calling it results in an error).

DE: In the issue there are people who think ?.() should not call, but others who believe it should just be null/undefined. The current spec text just checks for null/undefined. It reduces the scope, making it easier to understand.

GI: I made conditions for checking for certain cases, but it makes things more complex - supressing errors for example.

YK: It looks like ?. became a single sigil but its a weird sigil if its not originally using the `.` operator - it looks like "if it is not null or undefined use the dot operator" but otherwise it seems odd.

GI: There are issues around [this in the issue tracker](https://github.com/tc39/proposal-optional-chaining/issues/34).

GI (Presenting)

WH: I'm happy with the existing operator syntax. `?.`, `?.[`, `?.(` is not ideal but I cannot think of anything better.

DH: If we can't find a syntax that isn't really weird then it sinks the whole ship. I find all of these syntaxes hard to swallow.

GI: Yes, its not perfect but it is consistent in favour of the common case.

GI: (Presenting)

WH: You will have to do something for the assignment case — the grammar allows it, so you need to do something. Either throw or do a syntax error?

GI: Good point

WH: Will it always be an error? This is fine for future proposals.

GI: The syntax we have is fine then? Strong opinions on the assignment case?

YK: `?.` and `?.(` do not have an intuitive meaning. It certainly looks odd for function calls if it is not doing a function check. Additionally this feels appealing for identifier operations but nothing forces you to write functions chains like this. In order to understand what the `?` operator is doing you need to figure out the whole line. Its a left-to-right rule but it can't be the real rule because as soon as there are nested operations you need to parse outwards. Most people don't look at code as a tree, you have to parse with your eyes if things are self contained or can be skipped. The rule of "keep reading chains of dots" is easy to see if you can see where the expressions are. The complexity cliff of what the chain is doing is high.

GI: On the GitHub issue there are example use-cases.

SGO: For what its worth there is a lot of discussion on GitHub, they have gone through a massive amount of work for the best tradeoff.

YK: I'm saying I'm skeptical of all syntaxes.

DH: Just because we tried a bunch of alternatives and didn't like the others we shouldn't accept this. The bar for syntax is really high.

MF: This vs other error supression methods like try/catch might be another problem to solve?

DE: There is some discussion about this on GitHub; the idea is just checking for null/undefined is a simpler usecase

WH: I've checked the proposal's spec and I'm impressed. It hits a sweet spot of simple and well defined semantics and solid grammar. I really like it. It's a big improvement over the past versions of this operator. It neatly solves the problem of how far the short-circuiting extends.

DE: About the scope of short circuiting; we could have this feature not short circuit and just ?. would be required on all subsequent calls if you want something to now throw. The current semantics were lifted from other implementations such as C#, CoffeeScript. A minimal set was chosen based on these. You can read syntactically what the scope is because it is a simple rule. This is one linear chained expression.

CM: People are objecting because they're thinking of this as an error suppression operator - rather than a tree walking operator. People do this with boolean expressions. If you conceive of this as error suppression you'll be dissatisfied. You need to be deliberate on what this achieves.

YK: How does one mentally parse the example `x?(a=>b?.c)d`. This is more complex to mentally parse than `x && x(a => b && b.c) && d`

SGO: This came up. Over 90% of the cases its a . operator, about 7% are function calls and a lot less than that for bracket access.

YK: If we just limit the scope to property access and allow other forms later does this conflict?

WH: No.

SYG: Sam gave numbers, what are examples that could be compelling for `?.(`?

DE: For `?.(` there are also Symbols....

DH: Would ?. mean less && or temporary bindings? You would still have to do some right?

SGO: The numbers of usage of calls withing brackets is small enough to not sacrifice property access with it. Yehuda would you be happy with just property access?

YK: If you said `x?.y()` it shouldn't continue past the parens.

WH: If you have `a?.b.c.d()`, if `a` is null does the chain stop before the call operator? What would that mean?

YK: If `a` is null the expression could throw.

KCL: A concrete case: `document.querySelector("foo")?.querySelector("bar")`

WH: If it is an exception when `a` is null then `?.` doesn't achieve its purpose.

GI: In closing we need to understand the scope of the operator for the common case. People are somewhat passionate about bracket access and it being symmetrical. If the syntax of the operator is in contention we can change this. If people are uncomfortable with bracket access we could reduce scope.

WH: I don't think that works. You still need a sensible story about what happens when you call or index in the chain, as in the `a?.b.c.d()` example.

YK: I cannot come up with a great answer on the fly for these use-cases.

DH: It seems to me that if we decrease scope to `?.` the question of "what does parens mean" at the end - both semantics are defensible; binding to the entire conditional or binding to the access.

WH: The parens have to bind to the last accessor. Changing that now would be very strange.

DH: There's a difference between "has to" and "would be surprising". You're not saying its impossible, just surprising?

WH: Conditionals have to behave the same way as their equivalents without `?` if the values are not nully. If you change how they bind, this would not be the case.

DH: `a?.b.c()` in the case where `a` is null it would not do the call?

WH: It would not do the call.

DH: And when not null?

WH: It would behave as if the `?` were not there:  `a.b.c()`. The current semantics specify exactly this and they are good.

DE: We're over time, let's summarise.

DE: Waldemar says that the proposal doesn't work without  `?.(` and `?.[`...

WH: Not quite. My point is a bit subtler: One could remove `?.(` and `?.[` thinking that you'd avoid having to deal with short-circuited function calls and indexing expressions, but that would be incorrect. Even if you forbade `a?.()`, you need to deal with what `a?.b()` does, which is a very similar use case. Thus, you haven't achieved anything useful by banning `?.(` and `?.[`.

DE: Let's record where we're in agreement.

CM: We have a confusion about what we want and about what the proposal actually is.

DE: Three questions then; on the syntax, `?.` or `?&.`?

DH: Im not in favour of either one.

DE: So no one is in favour of either syntax? Short circuiting? Some skeptical and some in favour?

JRL: The proposal becomes useless without short circuiting.

DE: No, you would have to write `?.` with each accessor.

DD: Most people do not rely on short circuiting.

DE: So many people are in favour but some are still skeptical?

YK: I have come to accept it in a limited form - if we keep it restricted I'm happy.

CM: My sense is we're all in favour of it in some kind, but not in agreement over what is being short circuited.

DE: Shall we advocate for no short circuiting?

YK: There is a hard conflict between minimal and expansive.

DE: So if we want short circuiting do we want `?.(` and `?.[`?

YK: An implerical question; its not not-wanted but it needs to be coherant.

DE: So we don't have `?.(` and `?.[`?

YK: I'm advocating for that.

DE: You're in favour of taking those out?

YK: Yes.

DE: To summarise, is it that the committee supports `?.` but nobody for `?&.` We all agree for short circuiting, and `?.[` and `?.(` should be included?

WH: Not including those would be futile, for the reasons I already stated a couple times. Even if you don't include those operators, you need to deal with short-circuiting indexing and function calls anyway.

DH: The state is Waldemar says omitting `?.[` and `?.(` is incoherent but others don't understand.

WH: If that's not understood, I should explain it a third time.

DH: You don't have time.

YK: We should discuss this fully in writing - the incoherence will become more obvious.

#### Conclusion/Resolution

- Remains at Stage 1
- None of the committee really likes ?&. in particular; there is broad support for ?., though skepticism about the way that ?.[ and ?.( have a dot and therefore aren't purely analogous to ?. . Additionally, there is a little skepticism about the way that `?.` is a little inconsistent in not having a second . for the basic case.
- Everyone agrees that the feature should continue to have short-circuiting, but disagreement about these short-circuiting semantics vs only through . and not () or [].
- Disagreement about whether [] and () should be included in short circuiting or ?. versions


## 12.iii.c import.meta for stage 3

(Domenic Denicola)

- [Explainer](https://github.com/tc39/proposal-import-meta)

DD: (Presenting)

YK: No objections to the conclusion. It's weird that eval is for scripts and we have it in modules.

DD: Well not _for_ scripts.

YK: Does `eval('import()') work?

DD: Yes.

CM: What is this even about?

DD: The question is should `eval('import.meta')` work?

DH: You could express this dynamically - like making a function to get import.meta and evaling that - but you're using direct eval. Is this kicking the can down the road?

DD: We could go to stage 3 with "it doesnt work now" but is feature detection important?

DH: Try/catch?

DD: That's an early error.

DH: Eval is not?

DD: No

DH: Is this a sink or swim stage 3 question? It should be resolved by now.

DD: I like that. If I can get reviews can we move this?

DH: Is it possible to do feature detection with script type=module and detect an error?

DD: Yes you could definitely do that.

BT: Does everyone else not care if `import.meta` works in scripts over modules?

YK: What does it mean in a script?

BT: Same as module.

YK: Why don't we wait to see if the host environments want this? Domenic says browser does - why don't we wait for node?

BT: Fair.

JHD: To answer your earlier question it would be nice to expose metadata for scripts. Even though I'm a strong advocate for supporting syntaxes and requiring eval, it doesn't matter in this case because the overlap of support will leave at worst a tiny window of lack of support.

TST: It seems like we wouldnt have this conversation if import wasnt only meant for modules.

DD: The use cases for import.meta are to replace `document.currentScript` and `import.meta.url` to resolve relative to your current module. In the browser we don't want to add more features to scripts - we're trying to move away from them; we try to not add just metadata for scripts.

KVR:  A web application that's using a bundler; I would imagine that it should work as per the example but is it the bundlers responsibility to resolve that directly or...

DD: Yes tricky for a bundler. It could work depending on the file you're concatenating. Scripts vs modules - if you are bundling we want you to bundle to a single module not script - modules are more secure.

KVR: Sure that's the long term vision, but for today's developers it might not be practical. I understand your argument for not having eval.

DD: Let's push for not working in scripts or eval. Maybe going to stage 3 tomorrow?

#### Conclusion/Resolution

- Revisit Tomorrow

## 12.iv.a Private methods and accessors for Stage 3

 - [Slides](https://docs.google.com/presentation/d/1aI89Jgl7CdtKV6D5-ydieUn_-kgRqAD2X8gGzh62xzc/edit#slide=id.p)
 - [Explainer](https://github.com/littledan/proposal-private-methods)

(Daniel Ehrenberg)

DE: (Presenting)

DE: Any opinions on private methods being writable?

WH: I think they should be non-writable (i.e. status quo per your proposal).

?: Why?

WH: It avoids sticky questions about whether methods are shared among instances or per-instance.

JRL: When I was trying to implement decorators and private fields in babel they confused me because of this.

DE: Is leaving private methods non-writable acceptable?

DD: Writable allows me to shadow on instances?

DE: Yes writable allows this use case, although it's not really shadowing technically.

JRL: We could change this later?

DE: Yes we could. Though I'd rather make a decision rather than back and forth. So shall we stay with non-writables for now? So babel plugin is progress for this thank you jrdigewell.

JHD: On the .call slide, can we clarify the incorrect example. Does call without receive has special behaviour?

DE: No, when you look up a method on the object. `this.#foo` is a lookup, there is no extra type checking outside of that.

JHD: So bar property doesn't do typechecking?

DE: No the examples are wrong.

JHD: The bottom example _would_ throw then?

YK: What is the example not throwing?

DE: `new C().bar()` would not throw.

YK: Does it type check what `this` is?

DE: We type-check `this` when you get the method from the object, so within `bar`. In the case of private fields instead of returning undefined it throws an error.

JHD: The type check is done based on the runtime value of the .# member access?

DE: Yes. Thanks for getting this clarified.

JRL: Static private fields on subclasses - it applies the same way to methods

DE: Yes. Thanks for raising. In summary...

JRL: We have the issue link: https://github.com/tc39/proposal-class-fields/issues/43

DE: If you have an inheritance hierarchy - if the subclass does not have the private field, it would throw a type-error.

YK: Isn't the check instanceof?

DE: It is not quite instanceof. We have a list of private elements records. With private fields it maps to values - this proposal maps to property descriptors.

YK: So if this was a static method it would not work?

DE: No, subclasses have to call super and get the private fields for instances. Can we manage this discussion with the queue?

DE: Hard to picture other semantics than what we have. We're not going to do a prototype chain walk.

WH: What are the current semantics then?

DE: There are different intuitions about what the semantics should be. Inheriting fields; prototype chain walk.

DE: I dont think we should have a prototype chain walk for static fields and methods; this would go counter to other goals for private. I don't know of a case where you need subclassing of static properties.

...

JHD: If the subclass implemented a static get that returned super.get does this work?

DE: No. If the subclass had a private static get method that returns super.get it'd lead to the same issue. Super methods are about passing this as the receiver.

YK: I don't think this is okay. Even though the field and method are in the super class the way it succeeds is the sub class has that field.

DE: How often do you feel this use case will come up?

YK: I think its a massive footgun

DE: I see two options then. Allow the current semantics or ban static private fields and methods for now.

YK: It sounds like if you use a static field in a static method, subclassing will not work.

DE: Not true, if you name your class it will continue to work. Using `this` expects to make code generic over subclasses. Telling people to repeat the class name will work.

YK: I'm saying if you subclass and use an inherited method, generally it doesnt work for this use case.

TST: This seems like a massive foot-gun as private fields would work very differently from normal fields. The alternative is to say static fields just dont work

DE: private methods don't go through prototype chain just like private fields.

WH: We have this mess with private. What happens with public - the same thing?

DE: No, it goes through the prototype chain

WH: The getter will follow the chain, but the setter won't.

DE: It'll be wrong if you set it.

WH: So this problem exists anyway without private fields.

DE: So the foot-gun is that if you set a public field on a subclass, it gets a new own property on the subclass, not visible to the base class. The problem is the user needs to understand how own properties work.

DD: My understanding is static private methods in lexical scope of body can access non static private fields?

DE: Yes

DD: That's super useful. If I have instances I want to access public methods. I dont want to have to make my statics into instance methods.

JRL: We can detemine at compile time if a field is static or not and what is allowed to happen

JHD: Static methods being able to access private fields is fine.

DE: Walking the prototype chain for private fields is a significant departure from what we have now.

TST: To clarify its highly useful to have private static fields in normal static methods. But its a foot-gun, this is a targeted way to illiminate the footgun

DE: I was skeptical on this it seems ad-hoc. How does the community feel about banning `this.#` if the field is static?

YK: More-or-less not walking prototype chain means not dynamically finding fields. For instance properties the instance got the fields. When you subclass there is a static instantiation process.

DE: So you re-evaluate initialisers?

YK: My broad feeling is I agree with Domenic, this should work. The foot-gun that is present is bad though. `this.#` is intrinsically not sufficient

WH: If you create new copies of the private fields on the subclass, you get multiple copies of mutable fields, which is a different foot-gun.

DE: The fact that it's possible to get a TypeError thrown isn't really enough to show it's a big problem. Making a predominant idiom for the use case for people to fall into is important

YK: It becomes a lint rule

DE: Yes we could encourage linting for this

YK: No I don't want that.

RBN: For an instance field prototype walk is a noop if it exists on the instance right? Why is a prototype walk out of the question?

JRL: Imagine you have a set on a super static field - with a prototype walk you mutate the base class' property, put operation on a public field would mutate subclasses, not super class. So base class would have the same value of the original field. For private fields if you do a prototype walk you mutate bases value.

RBN: If the suggestion is to resolve this by swapping this with Base is the exact same thing.

DE: Currently getting or setting private fields doesn't invoke Proxy or meta-object protocol operations. We want to keep those out from private operations.

TST: Yehuda said initialisers for fields ... it feels like a foot-gun of similar order. A static getter wouldnt expect the `this` to target a subclass. There's no scenario where I believe the intuition is `this.#` would refer to the base class. If we cannot make that work then this form doesn't make sense.

YK: It doesn't make sense to ban the form

TST: It addresses the 95% case

WH: But do we do it in the language or in linters?

TST: It is effectively a lint and we dont have precident in the language.

JRL: Instead of banning static private what if we add have the private names before a super call?

DE: How would it have them?

JRL: It would already have fields because it would have its own private fields list.

DE: We're discussing a few alternatives. One option is to have its own list.

JRL: So I'm saying sub would have its own fields.

DE: It would not correspond because if you set it in the base not sub it would not receive a value. Do you think that would be okay?

JRL: I don't know I just came up with this idea

JHD: To clarify it seems the foot-gun is _if_ someone uses `this` in a static method it might not refer to a subclass if invoked by one. What if the keyword `static` was a placeholder for the classname? Intention of the developer is to return `static.#field` - you could use the class name but then you're repeating yourself.

WHD: Interesting suggestion.

JHD: If `static` were to refer to the superclass from an instance then we can resolve the foot-gun with this keyword. Every time people use `this.constructor` its the same use case also.

DD: Its not a replacement, `this.constructor` is polymorhpic.

YK: Do we even need static fields right now?

DE: We could say instances have copies of static private fields?

YK: If they're not subclassable using a local variable is basically the same thing.

JRL: Can we make writing to methods a syntax error?

DE: Maybe for now. With decorators we probably cant enforce that. Whats the advantage?

JRL: It would prevent people from writing code to write to it now.

DE: TC39 operates on the assumption that if it throws an error now, we can make it not later.

JRL: Is it a TypeError now?

DE: Yes.

JRL: Not a noop?

DE: No, class bodies are in strict mode.

DE: So the solutions are: "do nothing" - linters take up the use case; ban the use case; remove static private fields/methods; or remove static private fields and copy static private methods to subclasses.

YK: I don't want to remove them

DE: I'm happy with that. Some things we discussed that are not viable: walking the prototype chain. Could we straw poll the 4 options... okay we're not at agreement, we should probably hold off on shipping private fields. We have to work through this.

YK: It only affects static right? We could ship instance stuff?

DE: I would be hesitant on shipping partial features. We could break the feature up but having partial implementations of proposals would make it difficult to work with. Shall we leave private methods as unresolved, demote to stage 2? Private static fields which are part of this stage 3 proposal are a hazard. Public fields don't have the same problem though.

YK: Can we ship public fields?

BT: Implementors are in the room, are you wanting to implement? Can we communicate to you not to implement this? Should we demote to stage 2? We have no established process around dropping to stage 2.

JHD: Leaving this at stage 3 - is the concern that people will implement this?

MPT: Everyone is here - just don't implement it!

TST: I don't understand why this keeps private methods from advancing. Seems unrelated--this is an issue on private fields.

YK: Concerned about the coherence of broad strokes. Why would implementors ship public fields and not private?

DE: This is not necessarily what implementors are saying. I think we can work through this before anyone is ready to ship. Does anyone object to advancing this to stage 3? Okay great, stage 3.

#### Conclusion/Resolution

- Stage 3 acceptance
- Implementers are encouraged not to ship private class fields or methods unflagged yet, pending the outcome of this issue

## 12.iv.b Decorators: detailed discussion of proposed semantics

(Daniel Ehrenberg)

 - [Slides](https://docs.google.com/presentation/d/1jjGeHMW8xH49dWP8S5xk0EHaST1zmRDlbtwyLxaYWnY/edit#slide=id.p)
 - [Explainer](https://github.com/littledan/proposal-unified-class-features)

DE: (Presenting)

JHD: What happens with finishers in element decorators? Can they be used?

DE: Yes

JHD: What about initializer keys in method elements? Is it silently ignored?

DE: Yes. Same kind of ergonomics as unknown properties in options bags. We can throw an exception instead.

DE: Covered in a follow-on: Instance finishers.

YK: I don't agree with people who say this isn't useful. Freezing for example is useful.

BT: Its not something that is difficult to add later but we'll be asked for it rapidly.

DE: (Presenting)

JRL: Why do we need PrivateName can it not be a Symbol?

DE: Symbols are visible to proxy traps - they are property keys. It doesn't work to be both property key and be totally private.

JRL: Can we use Symbols with a private property?

DE: V8 implements something like this internally - its like a Symbol with a bit flipped for private. If we want this the question is do we use Symbol constructor?

JRL: My proposal is have a bit on the decorator.

DE: You want a distinct key though.

YK: There's a stronger reason to have a private decorate usable outside of the decorator.

DE: In spec language private names and fields sit separately.

JRL: How could I implement this in Babel?

DE: Babel could use symbols - it'd be non-spec compliant but its doable. We're out of time now, let's continue tomorrow.

#### Conclusion/Resolution

 - Continue discussion tomorrow.
