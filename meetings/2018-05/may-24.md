# May 24, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Mattijs Hoitink (MHK), Kyle Verrier (KVR), Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Sathya Gunasekaran (SGN), Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Leo Balter (LEO), Caridy Patiño (CP), Jory Burson (JBN), Limin Zhu (LZU), Aki Rose (AKI), Valerie Young (VYG), Henry Zhu (HZU), Ross Kirsling (RKG), Shane Carr (SFC), Mike Samuel (MSL), Tab Atkins-Bittner (TAB), Kevin Smith (KS), Ron Buckton (RBN), Eric Faust (EFT), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Patrick Soquet (PST), Till Schneidereit (TST), Diego Ferreiro Val (DFV), Godfrey Chan (GCN), Domenic Denicola (DD), Rick Waldron (RW), Tom Dale (TDE), István Sebestyén (IS), Lin Clark (LCK), Vladan Djeric (VDC)

Remote:
Valerie Young (VYG), Maggie Pint (MPT), Ben Newman (BN), Brendan Eich (BE), Dean Tribble (DT), Robert Pamely (RPY), David Turissini (DTI), Felipe Balbontín (FBN), Pedram Emrouznejad (PED), Tim McClure (TME), Bradley Farias (BFS), Jason Williams (JWS), Trevor Bliss (TBS), Robin Ricard (RRD)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/05.md)


## Further Secretariat Updates

(István Sebestyén)

IS: The ECMA opt-out is ending tomorrow. So far we haven't received anything, and I don't expect any opt-outs. We're going to the General Assembly in June.

IS: TC53 deals with variables. One of the work items is related to variables which are based on ECMAScript. Management and participating companies (including Bocoup and Moddable) which are already doing the management. Trying to have our first meeting at the end of September/October. We're trying to explain our goals (and differences between TC39) and advertise this group to prospective group members.

## Numeric separators update

(Sam Goto)

- [slides](https://docs.google.com/presentation/d/1ivYa55mNEDPZ2z5K41fU5gwRxmlb4aUTrA0qEuBTfow/edit)

SGO: This represents work from Rick, Dan, Leo, and myself. We've converged on a proposal to move forward, but also looking for recommendations. Numeric Separators were Stage 3 when we uncovered a conflict with a Stage 1 Proposal (Extension of Numeric Literals). We blocked that proposal and tried to resolve conflict.

SGO: The first feature allows underscores exclusively for readability. These Numeric Separators are Ignored at runtime, and must be between two numbers to improve reading large numbers. The second feature is numeric literals extensions, which offered to write a number, followed by an underscore and an identifier, which translates to be transformed into that number with units. This was designed to make it easier for userland numbers to be more expressive. The problem was that this conflicted with Numeric Separators—we both use the same delimiter.

SGO: The thing that follows a number is an identifier, so it literally transpiles `1234_i` to `_i(Object.freeze(string: "1234"))`, which assumes the function `_i` is defined somewhere.

RW: A couple of alternatives: note that these are listed in order of simplicity/preference.

SGO: Caveat: if you don't like this one, you probably won't like the ones that follow. Alternative 1: to pick a different sigil compatible with the resolution mechanism. (i.e. two underscores for extensions). Problem is it's not very ergonomic, but it is the most sound and simplest solution. Alternative 2: different sigil, but incompatible with current resolution. For example: `` ` ``, e.g. `` 0x12_34_ab`bytes ``, which is slightly more ergonomic but it's incompatible with current options. Alternative 3: restrict extension to decimals. Because separators don't allow underscores at the end of the number, we can guarantee that the extension is unambiguous, but doing so means we can't use decimals.

YK: What is the set of things in decimal literal.

WH: You can get integer literals, fractions, and exponents.

SGO: Alternative 4: a pair of separators (_ for extensions, 1 for separators), but this would necessitate a Stage 3 -> Stage 4 regression,

JHD: Between 1 and 2, (Alt 1 is basically the same as the original, with a different sigil). 2 seems much more ergonomic.

RW: I can speak to that. When you have all these names floating around in a program, there's a belief that forcing this convention, we reduce the likelihood of variable name collision. Whether or not you agree with that,

DD: Not being able to use imaginary numbers in a for loop seems pretty terrible... With `for (let i = 0; ...) { 123i }` the `i` would now refer to the wrong thing.

JHD: I hear the conflict, but I feel if that one case is an issue, we can use j or k in a for loop, if i conflicts with imaginary numbers, or just to use the more common pattern of iteration.

SGO: Your point is valid.

JHD: Using a different sigil seems like the best thing with Alternative 2.

SGO: That works for us.

MLS: In Alternative 3, Colors are often described in Hex, so that seems like a potential collision. If someone wants to do a manipulation of colors with the Extension proposal, this would be impossible.

WH: I like any of these except for #3, which doesn't work. You get ambiguities related to decimals: if you define a unit called `_0`, that would be ambiguous. `_0_px` is also a good one — even with units not containing exclusively decimal digits you get ambiguity.

TST: I like Alternative 4. There are two features that could get quite wide adoption, so this is an area where every day users could get affected. These features are clearly tightly connected, and since they are potentially so big it may make sense to go to the whiteboard and carefully consider the best solution here.

YK: I am pretty viscerally opposed to 1. We shouldn't underestimate the language precedent issue. In a clean slate, I'd prefer #4.

RW: A person named Rick worked on C++ standardization, and helped us with this proposal. He pointed out to us that some users added an underscore extension for literals in C++, and then you couldn't use underscore for separators anymore so they had to roll back the feature proposal. (Ultimately, they used an apostrophe for a separator).

DH: We could be consistent with another language, which seems like a very strong argument to mimic the style C++ chose.

YK: I think users coming from other languages _expect_ #4. C++ is a huge outlier here, so my argument is to match other more popular languages.

SGO: Java, Ruby, C# all use Underscore, C++ is the only one that uses apostrophe.

RW: But, again as Jeffrey from C++ told us, they said if they could go back and redo everything, they would have never used an apostrophe.

DE: A minor point about C++, the user defining numeric literals was from a user extension, not part of the language specification.

DH: Anything that requires multiple underscores is aesthetically gross, it's a non-starter for me. The second one, the single apostrophe also bothers me a lot. I love the let's call them "GDPR" separators—if you squint really hard they seem like a natural compromise between US and European separators. It's unclear how extensive the precedence is, and how far the divergence from precedence is—like the first time you see 1_000_000 might be surprising, but it's an easy thing to figure out in context.

RW: To clarify: row 4 means this _might_ happen when we go back to the drawing board to redo this Spec. Since you said you really like the way that this works, I want to mention this as a caveat; we may not end up choosing the _, so you liking that may not ultimately

SGO: Moving to 2 means going back to the drawing board. Staying at 3 means we're confident enough that we've resolved these conflicts.

DE: Let's extend.

WH: Alternative 2 has a gotcha: if you use the form of alternative 2 that uses spaces to separate the unit from the number, you'll get more ambiguity. `in` would be a convenient name for a unit for inches, but if you say `3 in` that would be ambiguous.

TAB: `in` is a binary operator, but this unary

WH: `3 in /` opens up a can of worms — is the slash the start of a RegExp or division? This is not viable.

RW: We wanted to look for how often our extension is used in practice. Unfortunately, this is very difficult to measure.

DD: For C++ user-defined literal extensions are heavily used for sane strings

AP: Bloomberg uses numeric extensions internally for decimal literals.

DH: This is a very valuable way to collect feedback. I would caution, however to attempt to declare any particular consensus.

RW: It sounds like we are going to #4, in that case.

YK: This is a weakly held position, but a lot of people have used underscores in Ruby, and that would be very natural for users

MHK: I don't want to get into a situation, where we have to update parseInt.

RW: If you use parseInt, nothing changes—you're feeding parseInt a string, so the behavior never changes.

RJE: Sounds like we're going with Alternative 4.

RW: Rather than run through pop-quizzes about "what happens when," I suggest you look through the Spec which fully defines the semantics of Numeric Separator Literals, including behavior in the terms of Number, parseInt, parseFloat, etc.

#### Conclusion/Resolution

- Demoting to Stage 2 from Stage 3.
- Coupling proposals to create a holistic design


## Pattern Matching for Stage 1

(Kat Marchán)

- [proposal](https://github.com/tc39/proposal-pattern-matching)
- [slides](https://docs.google.com/presentation/d/1WPyAO4pHRsfwGoiIZupz_-tzAdv8mirw-aZfbxbAVcQ/edit)

KZM: Rust, Elixir etc. all have this pattern matching feature. You can think of this as an advanced `switch`. Pattern matching is one of these core features that new users of a language are introduced to and use them all the time from then on. How would this look for JS? (Shows example slide). Another motivating example, in React, you're often matching with deep values within your state (in Redux, for example, and you have a message with a complex structure).

KZM: There are 3 separate proposals here: the core proposal uses existing patterns to make basic pattern matching work, As-patterns allow you to bind to the expected value to a variable more ergonomically, and Collection Literals allow you to map matches to custom data structures.

KZM: Core Proposal: the semantics are based on the structuring assignment. Using `when` to say when the property matches this literal, do this.


WH: What does `when 1` mean? (Object Equality) Does `when 0` match -0?

KZM: This applies to numeric literals, and I believe -0 is not a numeric literal. Continuing... `when x` is an irrefutable pattern. You can also have guards using something like `when x if ()`

DD: What is the match doing here? If you do this on an object that doesn't have a match method, will that throw an exception?

KZM: Yes.

WH: (Question about the scope of a variable `v` on the slide)

KZM: It's like `if` scoping.

MM: Why did you reject the arrow function body?

KZM: When I was playing around with it and showing people, these cases (continue and break) got very weird. Let's not create a completely new kind of scope.

DD: You also have an example that works with a return which makes this a lot simpler.

WH: What does `continue` do in here? It doesn't seem to have it regular meaning of resuming the innermost enclosing loop.

KZM: That's exactly what it would do. There is also no fall-through (not implicitly or explicitly). Anything that is a collection literal can use this. For pathological cases: `Infinity`, `NaN`, `undefined`, etc. we currently have no specific answer.

WH: It's not just `-Infinity`, even `-3` wouldn't work here.

KZM: Yeah, I guess negative numbers don't work either.

MM: Does the syntax use parens to wrap expressions?

KZM: I don't think you should be able to do that. I'd rather avoid it.

MLS: (something...)

MM: There's too much ambiguity

EFT: You want to basically do a jump table on some hidden class.

DD: Personally, I'd really like to make these things work, it may be special casing but does that bother anyone?

KZM: I think this is a nitty gritty question that we can talk about later.

KZM: It is specced to use NLTH (No line terminator here), I don't want to. I hate NLTH. This is not pretty or great. There's a number of languages that use `case`, so I prefer that. Or we could use `super switch` which would _not_ be syntactically ambiguous (jokingly). I would rather use proper grammar here (as opposed to NLTH) but this is the core proposal, and for simplicity let's start with that. There's a massive thread on the issue tracker. Please jump into that if you have opinions. There's issues for working with iterators and how many times they get called.

KZM: I want the other proposals to land (especially collection literals), since they would correspond to pattern matching in other languages (any languages with record constructors). The concept behind pattern matching is to use the left-hand side as a simulation or mirror for the match to succeed. It's very important to have that correspondence so that you're not learning a special syntax just for this.

WH: Is a the only thing allowed within `match` block a `when` clause?

KZM: Correct. We could add default, but it's not necessary. You don't actually need it.

MSL: If the parser sees an `match (` (match plus open parens), does the parser have to parse as a potential function?

KZM: Yes, there's NLTH and a lookahead to handle this case.

MSL: Another point, to resolve the undefined ambiguity, could `when ===` be an expression for syntactic sugar for `when if()`?

KZM: This is not adding very much, I think (over the current if-guard syntax). In general, these kinds of things slow down the pattern matching a lotl

SYG: We looked at this - the iteration protocol is destructive. Multiple array patterns in the same Match statement could exhaust an iterator. Is this desirable?

KZM: It would only iterate over it once - in the lifetime of the match statement. Multiple cases of `when [...]` will only cause one iteration. It would also need to call next() one more time to determine the length of an iterator.

SYG: Are unbraced declarations allowed in the body of `when`? If so what is the scope?

KZM: Yup. It's the same as `if`.

SYG: There are some edge cases, around let

KZM: This just copies the syntax from `if` itself. I'm not sure what the issues are around the edge cases.

TST: The behavior you just described, does that also apply to `property.get`s? (Yes) Multiple `when`s with the same property, is that OK?

KZM: We can make this normative but it was assumed that would be the case.

MF: We can solve some of the problems you mentioned by allowing arbitrary arithmetic expressions. This exists with your true and false and nulls, but we can also add a parenthesized identifier.

KZM: I think that was already mentioned.

MF: It's worth exploring arithmetic expressions though.

KZM: I don't think we need arithmetic expressions. Basically, the negative numbers we can address and we could special case unary literals though - like Infinity/NaN.
MF: Do you allow spread destructuring?

KZM: It's not in this example, but if you put a splat here it matches on any length.

MF: that's exactly what I'd expect, and frankly the most common usage for me for this feature.

KZM: I considered special-casing splats (to note include the variable/pattern following `...`. That is `[a, b, ..]`) because of their frequent use, but I think not doing this is much simpler.

MF: I agree. This not having an expression form makes it less useful to me. Why would you not want expression form?

KZM: Optimization.

MF: Putting a match in expression position?

KZM: If this becomes an expression it needs to answer all the questions `do` expressions have.

MF: I think that would be great to answer.

KZM: While `do` is alive, I would want to let `do` do it's thing. I would _much_ rather all conditional statements use the same semantics for their bodies. Having match define its own semantics, and then having different semantics for if statements within do expressions would be bad. What does it mean for an expression to have a statement? We don't have answers to those questions yet.

MF: I wouldn't feel comfortable conforming to `do`'s specifics, given that `do` hasn't gotten much progress recently and it's basically used as a mechanism to stop more interesting proposals.

KZM: My opinion is all or nothing. Either `do` lands or it doesn't.

BN: What about object ...spread?

KZM: Object spread is object spread - including its oddities. For example, the ...rest can only be an identifier, with no further destructuring inside.

DH: First, this is a ton of great work. Years ago, I wanted to do similar things, but not nearly as much work so I appreciate this. One other syntactic option is to keep `switch` for the name but use `when` for the cases?

KZM: It's been brought up and there's reasons...

DH: If we have `do` expressions, having to wrap this in the `do` expression just to get a result out. This is way too verbose and there's no ambiguity for the precedence there. You may want to couple the challenges of `do` expressions, but that's very difficult, so if you need collaboration from other team members, we can make progress on that. Of course we shouldn't block landing this on `do` expressions. We should try to make statement right hand sides to work, and we can discuss do.

KZM: Expressions are useful for `if`, `switch` etc, not just `do`.

DH: In a perfect world we would maintain that symmetry, but unfortunately JavaScript is not that perfect world, and we don't have symmetry already. I'd rather get the new, desirable conditional form without that perfect symmetry, then incrementally advanced to reach that symmetry eventually.

KZM: I would like to keep this as a statement until later stages and when we've looked into more of these questions and answers. I'm even comfortable blocking this on answers for `do`, eventually.

DH: As this goes through the stages, I will become more and more uncomfortable with (not having them be) expressions.

YK: People really want `match`, plus there's some desire of `match` not being an outlier (among other programming languages). Because of eval, we have a global explanation to what completions mean. I think it does make sense for this form to work with expressions.

Eric: Are we strict (as in, exhaustive property matches) on objects in the when clauses or just arrays?

KZM: Just arrays.

WH: I'm uncomfortable with proposals that introduce new no-line-terminator-here restrictions and am glad that you're trying to remove those from the proposal.

WH: We need to have a discussion about us introducing new proposals with a lot of new syntax that JS users have to learn, which came to a head at the end of the last meeting.

WH: This proposal conflates assignments with values. A lot of people use named constants for things—if you have an object with a color field and you say `if { color: red }`, this assigns the color field's value to red instead of testing if it's the red constant.

KZM: This is covered by the collection literals proposals. I want to keep the variable-based semantics.

WH: Collection literals doesn't apply to named constants. I would be uncomfortable with this because it conflicts with named constants.

KZM: There's a number of named discussion points in that proposal, so you should consult that. What elixir does, which has similar semantics to JS, it puts a hat before a variable, and that adds a pin to that variable. e.g. `when ^x` that would match against a higher-scope x. This is called the pinning operator.

DD: Could I persuade you to add catch guards to the proposal?

KZM: I don't think it makes sense in this proposal, but rather in a separate connected proposal.

DD: This is not nearly as useful to me as catch guards.

??: One cool piece in other languages is for pattern matching is exhaustiveness checking. Have you thought about that?

KZM: I had that in the proposal because it's common in other languages. It's not very hard to do your own exhaustiveness check, but it's kind of either or and open to discussion. I personally like exhaustiveness checks.

WH: Not objecting to Stage 1, but I want to reiterate that I'm uncomfortable because of the issues I raised above.

#### Conclusion/Resolution

- Stage 1 acceptance





## Tagged Collection Literals for Stage 1

(Kat Marchán)

KZM: It would be great to construct a map with an object literal, or a Set with an iterator/array. This gets very cool with destructuring.

MM: Not a Stage 1 blocker, but we'll be fighting over infix bang.

KZM: That's fine, I'm going to win.

KZM: This would make it useful for pattern matching. (Shows example of pattern-matching )

WH: Does this use the current value of x or assign the value to x? If you have x:y inside the tagged collection literal, does it assign to x and y or use the current values of x and y?

KZM: These are fully numeric keys in this case.

DH: In your first presentation, you talked about `new Map`, and the structuring/destructuring Map. Does this proposal supplant that? Would this new syntax completely replace `new`?

KZM: It would not use the same protocol. For destructuring Maps, it uses this thing called `valueOf` which returns an iterator. It's possible you could use the valueOf in both cases, but it would have to use three arguments. It could work off the same protocol.

WH: What comes before `!`?

KZM: An expression.

WH: So `when` clauses can now take an expression?

KZM: Only left of a bang.

MF: I don't see the value in the kind of destructuring you're doing. (Gives example)

KZM: Checking against the type is a thing I want in pattern matching (doing an instanceof check and the value).

TST: Why would it be so valuable for pattern matching?

KZM: This would be very useful for error matching. They may all have the same property names, but you want to handle special cases for these different errors.

TST: You could use guards.

KG: Syntax is expensive and I don't see how this pays for itself without pattern matching, or frankly even with pattern matching. This is just syntactic sugar. I would not like to see this go in without pattern matching.

DD: This proposal is all about syntax, and I have a lot of issues with the syntax. You are using object literal syntax to put something that isn't a string key, for example. Maybe this pays for itself in pattern matching, but you get the same benefits from things like guards, etc. I'd rather see a specialized case for pattern matching as opposed to adding this syntax generally.

EFT: I'm concerned with how this works with pattern matching, in particular this RegEx thing scares the shit out of me. We want this to all be static and literally, and this has upward bindings and erodes some of the goodness of the pattern matching that you had in the previous proposal.

WH: This is much more complicated than I thought reading the original document. I now don't have a good understanding of what is being proposed after the presentation and don't think this is appropriate for Stage 1.

DH: I have a lot of issues with the syntax, but I would not object to Stage 1. In Rust, I believe there are syntactically characterized subsets that we could base off here.

KZM: It hadn't occurred to me that it would actually look that terrible as a special case only in pattern matching but also in destructuring. I pretty much agree with everything you all said, so I will update the proposal with this feedback.

#### Conclusion/Resolution

- Collection literals withdrawn
- Researching use of protocol for destructuring
- Pursuing `new` as part of pattern matching


## Binary AST

(Shu-yu Guo)

- [proposal](https://binast.github.io/ecmascript-binary-ast/)
- [slides](https://docs.google.com/presentation/d/12A0w7XuazDyhvSxqPcfXZCqV17iFJF6LOaNP-gtzifM/edit)

SYG: Update on Binary AST. Currently at Stage 1, will remain at Stage 1, likely. Normally parsing source text is fundamentally slow, but we could ship a pre-parsed AST (compliant to 262 syntax grammar) to make things fundamentally faster.

SYG: To enable per-function laziness, we need to enable scope annotations. We can also do a single-pass and streaming code generation (a sort of magic, go fast button). These are not orthogonal, it _is_ possible to do both.

SYG: On the Spec front, we want to incorporate these semantic changes and a new over-the-wire format. We explicitly don't want to "handcuff" people on the spec side or implementation side. The binary AST spec will not limit the possibilities of JS as source code. We're speccing a basic tree grammar. It's a shift off an AST, with some differences (written in a WebIDL-like thing). It works backwards from an implementation—you take a source text and transform it into an AST, the spec takes the AST and transform it into an ?? to "Ecmaify" it and to avoid bifurcating the language. The new semantic stuff like scope annotations (which we call "asserted scopes") are checked during the Ecmaify stage.

MM: The variables that appear to be free within `with`, may actually be looked-up in a with block?

SYG: Yes. And that's what implementations must do already.

SYG: The things in the asserted scope are effectively the outputs of static semantics (we're encoding them). This introduces the concept of "free names "

MM: What's the difference between "free" and "captured" names?

SYG: "Free" means identifiers that refer to a variable not declared in the current scope. "Captured" names are declared names that an inner function closes over.

SYG: This opens up a smoother adoption process, where implementers can decide, without changing any existing semantics. What do we do about compatibility? Once we output a tree, we cannot change the semantics, and for forwards compatibility the set of AST nodes is purely additive.

EFT: The implementation of this was quite small—it took less than 5000 lines to implement this in Firefox in roughly 5 weeks. Laziness is a thing that all the engines do already, so it was very cheap to implement. This does not require laziness to be quick; when you turn on the laziness, the front-end gets significantly faster (~50%).

SYG: On CDN, this is a very seamless experience for devs; you feel the benefits super fast.

KG: Personally, I would be very enthusiastic about this only being enabled in Strict mode.

SYG: That sounds fine to me. My main concern is that this would hurt adoption, given how much sloppy code there is. The use case here is we want to just make this a switch they'd press. If we say you must also convert your code to Strict mode too, then it may be a bit more difficult to get adoption.

YK: If there's just occasional sloppy code that you need to get around bugs, that seems extremely punitive to force people to use Strict in order to get these performance benefits.

MF: It's worth pursuing a Strict mode variant or something. You get to drop the variable names from the binary encoding in Strict mode, and size is obviously very important. I do think it's worth going the full route of requiring Strict mode, we should at least take advantage of this in Strict mode.

MLS: What was a performance benefit you got from JS to binary AST?

EFT: The parser gets 30-50% faster.

MLS: You have to go end to end, because part of this is load time.

EFT: 30% of parse time, and parse time is 25% of load time.

MLS: You say you get this improvement of the front-end time, which is like 25% of the load time

VDC: The benefit to us at Facebook is not the load time. You want the cost of additional code is asymptotic as length increases. We vastly improve that cost equation using binary ASTs.

MLS: How many Alexa Top 100 sites will use this? Facebook would have different websites that you send to different browsers.

VDC: we ship one, es5 to everyone. And there are additional features we ship (including feature testing) that we conditionally ship to other users.

MLS: The kind of Portable device vs. desktop device.

EFT: We gave this encoder to Instagram and they had this up and running in 3 days.

MLS: Would a very popular website do this for all browsers? But we're talking 6-7 various browsers, this would effectively double the number of bits in a testing matrix for websites to ship this. We're crafting a feature that's not going to be widely used.

VDC: Additional encoding is not a testing exercise. We can trust that the encoding is sound.

MLS: More testing bots.

VDC: If you believe there's an issue with the encoding, then yes, you need more testing. But we don't expect this to be the case.

EFT: Maybe we can hear from other people?

SYG: We need to answer this before stage advancement.

MLS: You said it was 30-50% of parsing, and parsing is 25%. All this work for 12% improvement?

SYG: It seems like a big ask for implementers to add this feature. But for websites, this is a small ask.

TDE: We go to way further lengths for smaller gains. We do multiple builds for each browsers, done brotli, etc. From the LinkedIn perspective, this would be a trivial integration for performance gains that we would be happy to see.

MLS: Would you be willing to ship all six flavors to get this performance gain?

TDE: Yah.

MLS: This doubles those.

TDE: We would be comfortable with that.

MLS: You talked about once the spec is frozen, those nodes will always work. We then have the issue of tracking the implementation state for other browsers—if some implement but not other browsers do, this becomes a mess to track for backwards compatibility.

MLS: I'm concerned with introducing new nodes that are not available in all browsers. We add 5 new AST nodes, some of them do only some. Having to deal with this will bite us. What happens when someone adds a node that doesn't work in all browsers?

DH: We'll just do what we today with JavaScript.

MLS: We can't do that—it's a binary node!

EFT: This is up to the host.

DH: This is just like new syntax. If the browser doesn't understand the syntax, it blows up. It's the same thing for a binary format. People use transpilation to ship towards the least common denominator of browsers they want to support. This is an existing problem.

EFT: It's easier, in fact.

YK: I'm confused about some of the points being made by people. Where are the multi-build concerns coming from?

MLS: For websites that have a different set of bits for different browsers, now you have a binary AST, that's 4. You also have to support the older browsers that don't support the feature.

YK: So I have 6 builds, if Chrome adds a binary AST, we'd just replace the build for Chrome with that one (dropping support for old Chromes).

MLS: What do you do with a Chrome version that doesn't support binary AST?

YK: If I want to support new syntax, I would choose what is supported by

MLS: Normally you do this with polyfilling, but that doesn't work for syntax.

YK: I work at a tiny company—7 engineers. We use Ember. We would _also_ find it trivial to adopt this feature. We would add this feature to our build pipeline, so all Ember users would get this feature. We'd definitely allow you to ask for a binary AST. There's a question that it would be hard to build an binary AST, but frankly this is the same step conceptually as using a minifier. People go to extraordinary lengths that take more time and produce less benefit. For people that only target evergreen, as soon as they all support Binary AST people will only target Binary AST. Same as transpiling to old JS.

DFV: Linkedin and Salesforce are in the same boat. Particularly we ship enormous pieces of JS and we have to go through the length already to make the compatible. If this gives us 10% improvements would be amazing, we are doing today crazy things with much weaker effects. We would love the performance benefit, whatever small % we can get. We are very supportive of this proposal.

SG: Just to reiterate what's been said: my personal one not Googles, count users not domains,not devs. I have an intuition, no data, if you count 5-6 devs that constitute a good proportion of web traffic - gmail, linkedin, facebook . these are well funded 500 engineering teams that are, google.com you'd be surprised how much effort goes into that last bit of perf. My intuition is to prioritize for number of users. Even if adoption is small, we can pay the cost.

MLS: I work on JS core, so I agree with you. If we do this we're not doing something else. I also don't think the numbers that Eric is quoting will be the same on all browsers. So, maybe 3% performance gains out of Safari, instead of something else.

SG: Agree. Not advocating for this solution. Problems are valid. If it's less accessible to some devs but more accessible to users, that's fine.

MLS: I don't think this is solving a long-term problem for the web.

TST: Curious why it won't solve for lots of content producers. If it solves what ... wants to get it, content producers should treat it like GZIP. Accept-header should switch it to CDN. You do not have the explosion in test surface. If you don't believe it will pan out I want to know what the concerns are.


MLS: Experience tells me the test explosion will happen.

TST: You think the cloudflare thing just will not work out.

MLS: At past companies, it's not as simple as putting a tool out. You're putting a piece of software that you don't have control over.

MLS: I'm concerned that the devil is in the details.

EFT: You can just not pass the accept header if you don't think it will go faster.

SYG: We'd like actionable feedback. Would you like numbers on JSC?

MLS: We ask for the different implementations, how much time would it take to parse this code on this page. I think it would be pretty easy to ask these implementers for metrics so we can use this data to decide if it's worth it.

YK: A relevant factor. One trouble is writing tools to target lazy-sniffing browsers. It would be good to look at how often people are hitting eager parsing inappropriately. What would the saving be if you didn't hit this.

EFT: You don't have to lex the whole thing.

VDC: WRT to the actual wins, at Facebook we get 10-15% wins out of squeezing efficiency from the parser. The problem is you're still trying to get efficiency from ALL the code that gets sent. Then we want to support more code and more paths, but you need to do the optimization again to get back to the previous level. That's the fundamental appeal of binary ASTs - it's not just a % it really changes the cost structure of the page.

MLS: I talked about signed modules in the cache.

WH: First, if you do this, is the intent to change the APIs for things like Modules, Realms to allow ASTs instead of strings for inputs?

SYG: I have not thought about it. It is not my intent at this time.

WH: On the topic of forwards compatibility. It's a different problem than with text — if you interpret text, it's just a string when not being interpreted. On the other hand, an AST might not be representable in the implementation even if it's not being evaluated. So you couldn't even store the input to an `eval` even if you don't call the `eval` on that input.

SYG: We're not changing eval to take binary ASTs.

WH: Had a long discussion with the presenters at dinner last night. Just want to make sure that we're all on the same page as to what compatibility means with regard to ASTs. Your message is that compatibility means existing nodes strips compiled continue to work as we upgrade the language. But as ECMAScript evolves the same text source code may compile to different nodes even if they don't use new constructs.

EFT: That's correct.

WH: There are examples like changing associativity of `||` that came up recently that show why that may be important. The Hyrum's Law challenge is that folks may come to rely on source text compiling to a specific AST. What are we going to do if we make such a change and it turns out to break the web?

KG: We can avoid that by not exposing the binary AST to users.

MF: Can you explain how a user would rely on a particular AST?

WF: In this committee it came up discussing changing associativity of `||` from left-to-right to right-to-left in order to properly support one of the variants of the `??` proposal. It's invisible from within ECMAScript but would change which AST gets generated. There was opposition related to the effect this would have on Babel's ASTs.

EFT: What I was able to glean from talking to you last night was that Babel has a particular AST API that will be independent from this.

MF: What happens with the binary encoding of the AST?

SYG: The TC39 is most concerned with the tree grammar. The question of the binary encoding - it's just an encoding. It's out of scope of TC39. Should we as a committee own the binary encoding parts? Or defer to another standards body?

MM: Of course we should spec the binary part of the binary AST. I also think that once it's introduced, programmatic access would follow.

SYG: I think that's dangerous given the compatibility constraints.

MM: Programmatic access will follow—allowing evaluators to accept ASTs in addition to strings. It's fine to leave that out now, but I think this is a natural part to a dynamic and it should be part of the language standard to support.

DD: Maybe Mark is talking about something a bit different. We should own the AST and the encoding, but not sure we have the expertise to handle the binary encoding.

SYG: To clarify, if you see the spec that says byte 2 means this, etc.

DD: We need to be extremely involved, like what should be in the default dictionary? We should do a corpus crawl...

MM: The result of applying the expertise, wherever we find it must be included in our spec.

MF: I'm not sure that's true. I think this _could_ have a pluggable encoding for the AST. There may be a different encoding for a different platform.

MM: Having it pluggable gives flexibility we could consider - the utility of having an agreed concrete format for the concrete representation that corresponds to language semantics. There's no need to tie to hosting environment.

BFS: I somewhat agree that this should be in the specification. It should be controlled to some extent by TC39.

TST: I don't think there's one particular group that stands out as being an expert on this subject. IETF, the WASM community group does great things here, but I don't think there's a clear group here for us to spec this out.

EFT: There will be a future proposal where someone invents an arcane encoding.

TST: Luke Wagner specifically offered to help with this, so we should take him up on this offer.

EFT: There are several people pursuing how best to structure it.

DE: In the recent pass, we decided about making this more specific—what should be resolved by stage advancement. There were number of questions that were raised about the binary format, and the level of evidence that it's a sufficient performance improvement. I'm most concerned about these two question—I'm not sure if these are Stage 2, 3, or 4 concerns.

SYG: Stage 2, I think.

DE: I'm talking about entrance criteria—to get _into_ Stage 2 or to get into Stage 3.

SYG: I think Michael's point asking for evidence is important. We need to address for Stage 2. The surface binary stuff is a Stage 3 concern. It does not introduce new semantics.

EFT: If we claim that we have mostly complete spec text to get to Stage 3. How would we go about doing that?

DE: If you have some draft binary format, I think that's sufficient. It will need to be ratified by Stage 3.

SYG: I believe this proposal at this stage is independent of what the binary encoding will look like. The encoding will not impact the utility of this feature.

MBS: I may be off on this, but we're talking about the binary advantage of this on websites?

SYG: Because of compatibility constraints and the nodes being not for tools. It doesn't work with the perf goals we have set. They look very different for the two use-cases.

MBS: I'm interested if you have any numbers for that.

SYG: The new trees might cease to be good for your use-case. We can create a starting point, but not after that.

YK: It may be more useful than you think because there's a lot of AST to AST transformations today and there's not a consistent intermediate format. You could imagine these kinds of transformation being much simpler if there's a universally accepted intermediate AST format.

MBS: If webpack/babel/rollup could all share the same intermediate format there's huge value.

SGN: Regarding numbers, we've seen Facebook's profile is different to other websites. So we want to see other sites. Facebook don't hit the code cache. Binary AST is only for the code start. I want to make it clear that this is not a one-time cost. Spec authors have to spec both Binary AST and JS spec, tooling has to be updated to support both, and the implementers have to implement both. This is not trivial.

MB: I want to see data for other engines. There are other techniques. V8 supports streaming parsing, we parse as the bytes are still being downloaded. I imagine the relative gains from binary AST are different compared to the SpiderMonkey numbers you've seen. Would be interesting to explore.

EFT: I'm open to getting more numbers, but I don't want to corner myself to a place where I need three compatible Binary AST implementations to get to Stage 3.

MB: Still worth exploring other options that do not have the same ongoing cost in parallel. E.g. streaming parsing is an optimization that comes for free for users and developers. There's no opt-in.

EFT: I haven't heard of other ones with this much potential upside, but I'd be open to hear that.

YK: I have been the consumer of many of these improvements. The cost of targeting is very high. If you figure out how to target engines, a year later it's wrong.

DD: Earlier, the analogy to Brotl was brought up. I find it interesting. Not implementing something and still be just as good is not a loss - it is unique for this proposal. It may be interesting exploring this as an optional thing. Maybe not in TC39. If you think about this more as an compression format, then there are different conclusions you can make with different committees, for example.

SYG: A complete spec with the well-understood caveat that the binary encoding may change drastically. Sufficient evidence that we get the perf wins we are aiming for. Some like "across implementations". We hope to work with implementers to find less than 1 engineer year ways to show promise. We can't do 5 years engineering and hope something happens.

SYG: I'd like to reiterate the other point that MB brought up to look at the other design specs to see if there are other potential alternatives that could give us similar performance wins.

EFT: We can talk about the pragma, but it leaves performance on the table.

SYG: In case we progress, Sathya mentioned it will incur spec author cost. The idea is that implementers are free to implement in whatever format they choose. The surface syntax specs should be in lock step. I will personally offer help to spec authors.

#### Conclusion / Resolution

- Stage 2 entrance criteria:
  - A complete spec with the well understood caveat that the binary encoding may change drastically.
  - Sufficient evidence that we get the perf wins we are aiming for across websites.
  - Some like "across implementations" We hope to work with implementers to find less than 1 engineer year ways to show promise. We can't do 5 years engineering and hope something happens.


## Function.prototype.toString() censorship for stage 2 (continued discussion)

(Domenic Denicola)

DE: The notes say Stage 2 with objections, but what does that mean? Can we come to a consensus? One theory is that we expect not to get memory savings? Is this a Stage 2 blocker?

KS: By entering Stage 2, are we committing to solving ? or solving with pragmas? I don't think we want to commit to pragmas at this time.

DE: By Stage 2 we need to figure out if we're going with pragmas.

DD: We're committing to something that works at a Stage 2 level. I have not explored alternatives in that design space.

BT: Probably a good idea to explore alternatives in that design space. Could we consider directive prologues? I'm worried that the pragma is the right approach for that.

DD: If cross cutting concerns revealed that that approach wasn't good, we obviously wouldn't use pragmas.

BT: The reality is that once the pragma exists, if it has any benefits, then this is a pragma that will exist in _all_ JavaScript programs. It's effectively a free turbo button, so why wouldn't you use that? I feel pretty weird that this would be such a clear win, and yet it will still be opt-in.

DD: If we ever saw signs that this was optimizable, we would certainly seek that. I completely agree that this could quickly become a cross-cutting discussion.

YK: If we have Binary AST, then why would you use this?

WH: The question of misspelled pragmas comes up—it's easy to mess up a long name like what's proposed here (unlike "use strict"), in which case nothing happens (silently). Another concern is retroactivity — a pragma inside a function takes effect considerably before the pragma is seen, which caused the "use strict" pragma to be banned there in some situations. If we're addressing cross-cutting concerns of pragmas, we should look into both of these things.

TST: There does seem to be enough of a consensus that this is worth pursuing. WH seems to have some concerns with using a pragma.

WH: I do not. For this proposal, I would say a pragma is the best solution. The issues I raised are generic to all pragmas (and we should explore them). I support this proposal for stage 2.

TST: Would there be anybody in Stage 3 who would object to this?

DD: If you want to block of it because it's a pragma, we should talk about it now.

MLS: I'm worried this opens the door for more pragmas (with misspelling). I do share Brian's concern where if I do this, I should use this everywhere.

LEO: I'm concerned for a precedent of adding new pragmas. Following Brian's concerns, if we are going to use these pragmas everywhere, we should first collect data from the host implementation.

DD: I can just repeat my presentation yesterday...

DE: It seems exceeding clear that we don't have a consensus.

MLS: I really don't want the pragma.

BT: This is our chance to say no.

MM: The history—when we first introduced "use strict". Doug Crockford suggested both a
"use strict";
with the quotes and a
use strict;
without the quotes. The first is ignored on earlier versions of the platform that don't recognize it, falling back to sloppy mode. The second causes a static rejection on platforms that don't recognize it. The first pragma form is the only syntactic marker we've got that is ignored, rather than causing failure, on earlier versions of the platform.

DD: The thing that would be most helpful is if we decide to not go to Stage 2, to give reasons why not. I don't

Kevin: The takeaway here, the pragma is a very bitter pill to swallow—even if it is the best solution. When we introduced modules, it was a great win that we got rid of boilerplate. Looking at this proposal, the fear is that it is boilerplate.

DD: Definitely, and I think more work can be done in the proposal to clean up that confusion.

DD: This comes down to the question of, are there people who have any objections to adding new pragmas? I need to know, is a pragma OK, ever? MM has successfully communicated that pragmas are the best option here.

MM: The graceful degradation of what happens with the pragma with other implementations is a very critical point that I want heard. We've only ever added one pragma to the language. Why do we have an enormous tolerance for new syntactic features, and no tolerance for new pragmas?

??: Pragmas are the best solution (better than symbols)

SGO: If you take that it needs to be in the source code itself, than pragmas seem to be the only viable mechanism for that. This is also importantly a feature that the developer can use to protect itself. This is done on an author basis, not a the language level—done at userland. My intuition is on the lines of whether the feature itself pays for itself, than pragmas seem to be the only option for it.

JHD: How does this interact with error stacks?

DD: Line numbers are tricky.

JHD: An error stack trace with some functions that are censored seem impossible to reconcile. But this may be better for a later discussion.

DD: I appreciate the Stage 3 concerns, do we have Stage 2 approval?

#### Conclusion/Resolution

- Stage 2 acceptance

## SuperProperty evaluation order

- [proposal](https://github.com/tc39/ecma262/issues/1175)
- [slides](https://docs.google.com/presentation/d/1hYEAK5-fO97tbnsJlsxypcx5YBPYm09-TPf00s3Ck5g/edit#slide=id.g34faec4245_0_124)

(Justin Ridgewell)

JRL: (Presenting slides)

WH: Sounds great
MM: Yeah
SGN: Sounds good
MB: Agreed

#### Conclusion/Resolution

 - Consensus


## Symbol.thenable for stage 1 (or 2?)

 - [proposal](https://github.com/devsnek/proposal-symbol-thenable)

JHD: Exporting a named `then` function from a module makes the module a thenable. This logically follows the promise protocol, but means there is now no way to dynamically import a module with a then function. Refactoring hazards exist. Someone could write a module that blocks itself from dynamic import. It's super weird conceptually, but it logically follows from the way Promises work, but it is a problem. This came up with members trying to implement custom module loader in node. There is no way to get a dynamically imported module record. V8 can provide hooks, there are workaround but it surfaced the issue. DD said it would be bad if module namespace objects were magick where they weren't thenable. Namespace objects are thenable now, they shouldn't be through dynamic import - it should be a static picture of the module. Its weird if we make them magick. `import('bar')` would give different output to `import foo from 'bar'`. Generic solution is to make a thenable object not be thenable.

DD: I was saying this is a generic problem, not that we should solve it.

JHD: Fair, it's a generic problem. The premise here is that we're faced with *.isFoo, or promise.foo, so it's not a WebCompat issue yet, but it could become one.

DD: 4/4 browsers ship this I think

JHD: This will be rarely used Im sure except when someone wants to exploit it. Another solution is to block `export then`. This is weird though - only current forbidden is `export default` which is not really forbidden, just default export. I think this proposal with `Symbol.thenable = false` to block the object being a coerced to Promises is a good one. Hoping for stage 1 today - we have spec text for stage 2. Do we want to pursue this or not? If we do, we want to go rapidly.

BN: Module authors can't choose to export a Symbol.thenable-named export (because it's not an identifier), so this would have to be a blanket policy. Should module authors have control over this?

JHD: No choice, all module namespace objects (which are frozen) would have `Symbol.thenable = false`

WH: Why do we need to do this? Yes, it's a strange problem to have. Not sure the solutions are worth the complexity.

JHD: Doing nothing is always the default option. The conceptual weirdness of a namespaced object—using dynamic import you cannot always guarantee the shape of the module, which undermines the benefit of the module in the first place. The concept of `import * as` gives you the ability to get all the symbols without having to know them in advance.

WH: I agree it is a problem I just don't agree a solution is needed.

DD: You could make a wrapper module as the consumer or author. This echoes the general solution for the then problem: if you aren't expecting a thenable, wrap it.

JHB: This isn't something in the language spec so we cannot guarantee it

DD: You could guarantee with a wrapper module

JHB: We could make it return a wrapper module then

DD: It's not web-compatible. Dynamic import is shipping and in production

WH: The problem is that adding the symbol will significantly complicate the promise protocol. Different things (userland and built-in) will disagree about whether an object is thenable. That extra complexity in a different area of the language is not justified just to let folks export a module containing a top-level `then` export.

JHD: I think it's rare that people will `export function then`, I also think it is rare people will specifically create userland objects that do `Symbol.thenable = false`.

CM: We're reaping the consequences of the `then` magic now. But this feels inside out. This is almost `Symbol.unthenable`. The marker for `Symbol.thenable = false` to mark something as unthenable seems backwards to me.

JHD: This is not a stage 1 concern

CM: Well it strikes the heart of the proposal. The semantics are odd

JHD: I agree - boolean absence is not the same as true. I would want to update it, but we'll see.

CM: Domenic's proposal feels less wrong

SGN: Promises are already super complicated, let's not complicate it more. The status quo is fine.

MM: Some people will be confused. Principle of least surprise. `Symbol.unthenable` creates confusion. When we cannot avoid surprises the way to chose is: static rejection is the least surprising. Static rejection is surprising but I can handle it ahead of time. This suggest the solution which was glossed over: banning "then" as an export - it seems weird but its a good solution considering the human factor.

JHD: I'm content with that, I cannot imagine any reasonable case when you'd need to do that. It would take a lot less spec test, wouldn't complicate promises.

MM: Anyone feel a strong preference to introduce a new static check?

DE: Would that be web compatible?

DD: It's iffy. People are doing this. This is almost a feature.

MM: People are exporting `then`?

DD: People are doing it in lieu of top-level `await`.

MM: Oh my god. In that case I withdraw my suggestion. Status quo is sufficient - we should simply explain the issue. It is just something JS devs will have to understand. Asynchronous constructs --- promise, async iterators, etc --- only promise non-thenables. Thenables are plumbing through which they rech the non-thenables. JavaScript programmers already have to understand that.

JHD: What happens if top-level await lands? How do we feel about that? People are then immediately provided a migration path.

MM: People leave companies, things stop getting maintained. If there is a hard line to switch, we can't let this happen for webcompat reasons.

DD: This is a generic issue in JS. Same thing for String concat will do toString, Number concat valueOf, its all just protocol hooks. Does this pay for itself? Should we had `Symbol.unvalueOfable` or `Symbol.untoStringable`?

JHD: I agree but module namespaces are super special. The others do not follow this as much.

DD: The + operator does this

JHD: But there is a way around the coercion.

DD: There is no way. If you want to add something with `valueOf` it'll invoke `valueOf`

JHD: We dont have to dig into it here and now — I think there is a subtle difference of thenable than `valueOf`. I agree a generic anti protocol approach is bad though.

BFS: We're talking about webcompat concerns. Is dynamic import shipped?

MB: Chrome does

MM: Safari too

DD: I'm not sure but I think Edge too.

BFS: A boolean seems odd. I'll remind everyone of `Symbol.toPrimitive` though. Instead of as a Symbol maybe we could look to a different design. Could we change the Symbol to be a function or look at dynamic imports that... . I think this might help the situation.

BN: I've changed my mind. Initially I was okay with static rejection of `then` exports, since I agree with Mark that static failures are not so bad, but then I thought of a legitimate use case. If you have a module with one default export and consider it unergonomic for your users to have to do `import("your-module").then(ns => ns.default).then(x => ...)`, then you could export a `then` function that returns the default export. Importantly, this is not the same as the namespace object, so it won't cause an infinite resolution loop like the namespace object would. Then your users could do either `import x from "your-module"` or `import("your-module").then(x => ...)` or `const x = await import("your-module")` without worrying about accessing the `default` property explicitly. This is a slight but real ergonomic win, for module authors who know what they're doing. So I have changed my mind and prefer the status quo.

JHD: Sticking with status quo means that's just a babel transform (and one that I would be tempted to use!). It seems we won't get Stage 2 - Stage 1 means examining the problem. So is this something TC39 wants to hear from me again on or do you want to reject for stage 1?

WH: I'm in favor of keeping the status quo. I'm not in favor of the complexity

JHD: Complexity is a stage 2 concern.

WH: It's not worth the complexity of symbol.thenable to solve the problem at all here. It's just not worth doing, which is a stage 1 concern.

JHD: Based on your concerns _this_ solution will not advance, but if you feel I cannot come back to you with _any_ solution then you can block stage 1. Is that the case?

CM: I don't think we have consensus that this needs to be solved. It's fine for this to stay at stage 0. If you came back with a different crack that fits well then I'd be more amenable but I'm not saying never ever.

JHD: I will come back with something else then.

#### Conclusion/Resolution

- Remains at Stage 0; will discuss further on GitHub. If unable to come up with compelling solution, will withdraw.


## "Blöcks" syntax for Stage 0

- [proposal](https://github.com/domenic/proposal-blocks)

(Domenic Denicola)

DD: (Presenting)

#### Conclusion/Resolution

- To discuss further on GitHub


## RegExp Match array offsets for Stage 1

 - [proposal](https://github.com/rbuckton/proposal-regexp-match-offsets#readme)
 - [slides](https://docs.google.com/presentation/d/12I8W-uViPXuFu2IAk3yZpXTr5MxLYxCfhJValykyT0E/edit?usp=sharing)

(Ron Buckton)

RBN: (Presenting)

MM: There is no precedent within ECMAScript for extending existing APIs with new arguments.

MM: For a capture group, within an expression, you don't get all the captures, just the first one.

MB: Regarding MM's comment extending APIs, there _is_ precedent for this on the Web platform _outside of ECMAScript_. There's even a case where a previously existing boolean argument eventually converted to an options bag (`addEventListener` with passive event listeners) in a web-compatible way. This is certainly possible.

WH: This seems like a generally good idea. I'm also sympathetic to existing concerns about how this affects all other users.

WH: Instead of creating a new output channel, could you just add a new atom which tells you where it is?

RBN: One of the motivating use cases is TextMate grammars, which need to be cross-platform without changing the regular expressions. In my opinion, that would not be a good compromise to this solution.

WH: OK.

CP: One of the hoops you have to jump through is when to turn this on/off due to performance issues.

RBN: The cost is that in a world with GC, by the time JS gets the match from the exec, any garbage has already been collected or memory has been released to the heap for reuse.

CP: Is the scale issue due to the complexity of the expression, or the volume of the matches?

RBN: Any regular expressions have to take on that cost, even if they're not using it. It would be good to have specific numbers on this.

#### Conclusion/Resolution

- Stage 1 acceptance


## Meeting Planning Update

DE: Some concerns about the 2019 meeting at JS Interactive, please don't consider that to be final.
