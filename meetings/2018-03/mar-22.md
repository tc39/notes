# March 22, 2018 Meeting Notes
-----

Waldemar Horwat (WH), Dean Tribble (DT), Mark Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), Robin Morisset (RMT), Keith Miller (KM), Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Adam Klein (AK), Sathya Gunasekaran (SGN),Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Bradley Farias (BFS), Thomas Wood (TWD), Alan Schmitt (AS), Sven Sauleau (SSA), Chris Needham (CNM), Edd Yerburgh (EYH), Jason Williams (JWS), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Conrad Watt (CWT), Philippa Gardner (PGR), Godfrey Chan (GCN), Chris Hyle (CHE), Lin Clark (LCK), Ben Newman (BN), Jake Archibald (JAD), István Sebestyén (IS), Brian Warner (BWR), Mathias Bynens (MB), Surma (SUR), Alex Russell (AR), Peter van der Zee (PZE), Maël Nison (MNN), Dan Abramov (DAV), Christoph Nakazawa (CNA)

Remote:
Ron Buckton (RBN), Leo Balter (LEO), Valerie Young (VYG), Mike Pennisi (MP)
-----

## Meeting planning

DE: we discuss this from Tuesday, this dates seems OK so far. For now I want to say that these are the dates. I haven't heard objections on date. Please let me know if you're interested in hosting a meeting. Or if you're having any trouble with these dates or the location template

KCL: I still wanting to have a Asian meeting

WH: We already had meetings in Hawaii but no Asian people showed up.

DE: Given the current state of conditions with some people preferring all the meetings in the US and others preferring multiple meetings outside the US, this is a good middle ground. We've also heard that meeting planning needs to take place further in advance

AK: For example, once this is settled, we can already start for the next planning

YK: I agree with what everyone just said, but I suspect there's a difference between going to hawaii and going to an asian location

DE: It's more difficult for me to travel to Hawaii; that is not a neutral thing

YK: We've done it before and it didn't work. We should try to do more Asian friendly locations in the future.

#### Conclusion/Resolution

- The rough template for meeting locations from 2018 will be used in 2019, modulo host availability

## 10.i.g Update on Array.prototype.flatten web incompatibility

(Kevin Gibbons)

- [proposal](https://github.com/tc39/proposal-flatMap/pull/56)

KG: There are a few options, I would like to have a few guidance from the committee. I would suggest four options, please give me feedback
- The first option is to drop flatten for the proposal and only keep flatMap.
- The second option is to pick a second name, not Smooth.
- The third option is to use a Symbol as the name, that would work but that would be bad if we're planning to do more generally
- The fourth option is to do a web compatibility hack for this

JHD: I think webcompatibility hack will be very unfortunately, and smooth same. I do no want to drop flatten at all. Can we use flat?

KG: We could go with flat. We can spend 5 min bike-sheding the name if we want, or we can just pick something instead.

YK: It seems like we're forced to bike shed because if we don't do that we're forced to go with smoosh.

KG: That's what Michael said. We could also just pick flat for example. Then there's no bike shed

JRL: Why not drop the prototype method and just use a static flatten on the array constructor

KG: that seems less useful

DH: I would not strongly recommend doing that, That would be a major usability regression for people who don't write purely in functional programing style. I would like to be an advocate to use methods, people use it a lot

YK: I don't like flat as much because it's not a verb

AK: There are a variety of methods that Kevin proposed, I'd rather discuss that?

YK: I guess I don't want to bikeshed the name, I don't want to resume the smooth conversation.

KG: You can also just say any name other than smoosh

AK: surely not any names

??: Sounds like a challenge

BT: So are we.. I think compat hacks are just.. out?

KG: we just heard from JHD that he will be strongly opposed

AK: symbol seems bad because it's one off, and we don't want to do that for all the future methods. Web compat hacks thing, makes me uncomfortable in a lot of ways. I can't say that i'm completely opposed to it. We've managed to do small ones in the past, but it just feels bad

DE: I agree with AK. Also Dave's suggestion we don't use a static method. So I think at this point if there's a champions recommendations for what a decent sounding name is, do we agree with a decent name. JHD mentionned flat, that seems decent to me.

KG: sure, that's one options that we're not gone to, dropping the flat from the proposal. Sounds like we would prefer a name other than flatten, other than not having it

DE: Any objections to flat?

KM: You could imagine having a future where because of web compatibility issues, we've basically turned most of these proposals. We could use something like require array.prototype.flatten, or import flatten, and that would change the Array method installed. MooTools just don't have it. This is really a new precedent I guess for how we would do language design. What is the right way to go? I don't really know, but there doesn't seem to be much option apart from picking weird names amongst other things

YK: I thought you meant flatten? Instead it seems like you want lexical support?

KM: you could import it ...

YK: The reason I ask is that the effectful import is a useful idea, and it does solve the mootool option

KM: It execute more or less like a script, it's an assignement and puts flatten on the prototype

JHD: If it not an import, there's no symbol. I wouldn't be ergonomic to use. If you're importing a function with a receiver that you can't use, that would be a less ergonimic. Either method syntax is critical, or the static Array.flatten is a better option than importing it. We don't have built modules, so that would be a huge thing. I would love it that we could just agree, when we have builtin modules we can just decide about ???.

KG: If we stop now, the champions will pick a name (it will not be smoosh). If someone doesn't want to outcome should speak now please.

BT: Don't just pick a name. Any name can be contingent on approval of the TC39.

KG: Of course

DH: bring a name with an argument

GCN: Do a servey or whatever and pick the first ones

YK: Other people have other heuristics that'll work better.

WH: (making a joke sentence using as many thesaurus synonyms for "flatten" as possible) ...,  all of which are synonyms for flatten.

KG: OK, thank you for your time, If you have something else GitHub is a good place.

#### Conclusion/Resolution

- Champions will pick a name and bring one or several to the committee
- Opposed to not including the method, to web compat hacks, to symbols as names, and to placements other than Array.prototype


## Slice notation for Stage 1

(Sathya Gunasekaran)

- [proposal](https://github.com/gsathya/proposal-slice-notation/)

SGN: this is a stage 1 proposal for the slice notation. It's just a strawman. So what's the motivation for doing this?

I also get confusing that the second parameter is the lengh array, its not explicit when I see the slice method, so this sort of syntax makes it explicit.
there's not consistency between the other languages.
So this is the syntax, the square bracket, lower bound, :, upper bound
it just transpiles to the existing slice methods, it was the same semantics.

WH: You mean upper bound plus 1?

SGN: Yes. The upper bound is exclusive. It could just work with strings as well with the same semantics. We could even omit the bounds and have the same behavior as the slice method. In this example we want to have the upper bound. Its the same behaviour there is no new behaviour. This also works already with the slice method. Some of the prior art, this (python slide) is a similar syntax. I'm only proposing a single colon operator (no step operator)and ruby also has double dot and triple dot operator. They also have the [lower, length] syntax that does it. There also have a double dot operator, and Coffeescript does the same thing, there's also Kotlin and rust that take the double operator, and golang and matlab have the triple operator I haven't added them here. why not the double dot, the problem is already already valid syntax in 1..toString().

WH: `..` works but is annoying because you'd need a space if preceded by a number.

SGN: You can't have a dot dot operator

WH: You can have a `..` operator. The only problem you'd run into is that if it follows a number without a decimal point, the first dot would be swallowed as part of the number.

SGN: That would be a tripple dot operator?

WH: Remember that lexing in ECMAScript is greedy. You pick the longest token that you can.

SGN: i'm going to talk about the tripple dot operator...

This is valid syntax..

WH: (referring to the slide stating that `..` is not possible due to the current syntax) That's not true.

SGN: `1..toString()` is valid syntax which is all I'm saying.

YK: Clarifying question, earlier you said that it's a strawman proposal but you already have opinion about the syntax.

SGN: I don't have strong opinions, im just saying these are the challenges we face if we use this syntax
Why not the triple dot? because its slightly confusing with the spread operator, which already exists.

SGN: What about splice, it's mutating an existing array, this proposal only uses slice. This could be a future proposal. What about custom slicing? What if you have an object like this which has indexes and a length. One way to do this is to create a symbol.slice protocol that the operator calls out to. The array.prototype would have the default symbol.slice. That's basically it, do you have any questions?

DT: Is there any collision, for example TS type notation?

SGN: no

DE: Good, well I have heard a concern about that proposal, square bracket currently means property access, and what you have in square bracket is a colon, so this is not a first class thing there. Personally I like that syntax, and dev could learn that's not a property access but a slice notation. But what would you say about complicating a mental model for programmers?

SGN: It's kind of similar to array spread and you add a spread operator in the array and it changes how it behaves.

SGN: Initially you have an array,and this is a property access. Adding a spread operator changes the meaning.

DE: I see, interesting point.

KM: There are a lot of other shipping languages that have this operator, I haven't heard may complaints from people saying its confusing, it obviously changes the model slightly. Its so substantially different.. It's not clear what the hell that even means. And then you find out that it's taking a subset of your thing.

YK: It can only speak from my experience from ruby here. At least in Ruby I find myself actually ??? Obviously you can use like...subtraction, but has all the issue that makes us want to propose .last.I could in Ruby I could forget that ... exsints but it's usually easier to do that math on the thing. I guess that the reason we think that's not true, is that python does not have inclusive and exclusive.

JRE: OK

SGN: I also heard from people in the community that other operator could be confusing.

YK: the worst thing about the Ruby syntax, the fact that dot dot came first and means incluseive, and the ... came later and means exclusive. Rust did it better. there's a proposal for dot dot equal.
I find it confusing therefor I think we should do ????

BHS: with inclusive and exclusive I at least get a bit confused with negative 1 and negative 0 when takling about indices. I understand that people like inclusive, I would just recommend we look at exclusive first.

SGN: It wouldn't match the slice method, is that ok? (some confusion about what BHS said) .. It doesn't include the upper bound.

BHS: We do want that.

SGN: yes ok we are in agreement

KM: I didn't even know there was a ... operator in Ruby.

YK: I strongly agree that we should not have the same that the Ruby syntax.

DH: I think someone asked about whether colon had any conflicts with typed dialects of JavaScript. I still trying to figure out if there's any conflicts.

BT: no, at the expression level, there's colon and the angle bracket

DH: Is there a possibility that it's OK and we can feel confident that's there not conflict?

BT: It's potentially problematic, I need more research about that.

DH: That's fair.

YK: I know WH, there actually are, I guess this is an example that the colon resolution?? doesn't mean anything. The are things that looks like this syntax, things like confusing around ... there are cases where.....its not optimal

SGN: I agree. I plan to talk to TypeScript and Flow folks and get sign off from them.

GCN: I think this is loosely related, in the Ruby syntax, there's also a first class range object that you can pass around, that has the same syntax as the slice operation that you're doing here.

It will have to work differently here. but if we have an appetite for doing this first class range options that you can pass around and have methods on it, It would be good to have something similar. It's the same kind of operations

SGN: I did think about the range options when I did my research about this, It can be a follow on. It also complicates property access, You could create a range object and we would have to special case property access for that object, we could do that later. This solves 90% of the use-cases that we already care about.

YK: Rust has the first class thing. The syntactic problems are more contains, for example you might want .slice() the method to take a range. I think we should decide if we care about the first class object.

WH: I've gone over this proposal with the presenter before the meeting and had requested some changes. Originally the proposal had 3 field syntax of begin, end + 1, and step. I didn't quite like that it because it reserved `::` which we might want to use in future for other things.

WH: In the extended ECMAScript universe there are already many uses of colons: labels, object initalizers, `?:`, and types. When we add a new one, we risk confusion and collisions with uses in the extended universe, such as the syntax of types. As far as I know this proposal doesn't currently conflict with anything, but our set of uses of colons is getting rather dense and I don't know if there will be any collision in the future as features get extended.

SGN: can you clarify about extending the thing?

WH: An example of an extension, would be the third step operand or using this notation in other places. I want to get an idea if this proposal would rather stay simple or if we would plan to add more syntax in the future?

SGN: I like simple. It feels right. Anyone has thoughts?

GCN: It seems like WH and me and maybe YK, we sort of basically saying the same thing, you can really just, you have like me rather we doing the thing ??? If we decide to do the narrow thing, that kinda means the other thing won't happen. I don't thing you don't have to decide on that question now, the important thing is that you need to progress in the process. As you progress, we need to decide.
for stage 1, the question is whatever we have interest.

YK: Are you asking for stage 1?

SGN: Yes

#### Conclusion/Resolution

- Stage 1 acceptance

##  BigInt status update

Dan Ehrenberg

- [Slides](https://docs.google.com/presentation/d/1kexAmEsKMi8Blkb_wUeHKyx-3iqKUjWoyaDBMQ168Bk/edit#slide=id.p)
- [explainer](https://github.com/tc39/proposal-bigint/)
- [spec](https://tc39.es/proposal-bigint/)

DE: The bigint proposal is moving along , it's currently stage-3. It adds a new arbitrary size integers in JavaScript. At the last meeting, we discussed some sort of edge-cases. Should we permit coercion between int and bigint in the case of writes into a TypedArray? We concluded no.
There have been several other fixes that have happened, there has been some work on Atomics, and TypedArrays from the v8 team. There were various problems with int64 and memory atomics. There were also typo fixes.

DE: So thanks everybody who contributed, there were a lot of people who wrote PRs and were able to contribute to the specification that way which helps me doing a lot of progress.

DE: Some specification questions: Robin Templeton, who implemented BigInt in SpiderMonkey. A comparison BigInt < String uses a different sort of cast compared to BigInt == String

DE: when you compare a string with double equal, it actually use the string to convert to a BigInt. It end up calling ToNumber on the string, they both do rounding, but if the string is a large integer you will lose precision in this process. If the string is large int, it looses precision.

DE: on the other hand if the string if something after the decimal point, it's not mathemically true. There's no operation we can do to get the mathematical value of the string. We're not going to use those semantics. The rough concensus so far, is that we should switch abstract relational comparison to use string to bigint we should switch abstract relation comparison rather that using two numerics instead of comparsing a string and a bigint.

WH: I agree with that consensus.

DE: does anyone else have any feelings on this? he alternative is to do the switch from string to bigint, we have to write spec tests. The other issue that was brought up was the strictness of bigInt number conversions.
the current status of the spec, when I mean conversions I mean conversions that were requested explicitly by the number or by ?? being called.
conversion are always explict, otherwise it will throw an expection .It's core to the design. The current spec says that the number constructor will round to whatever is closest
according to the existing, you know, the ??? of the spec text that you have in JavaScript for ever.

BigInt throws range error whenever you pass in a number value that cannot be safely representing as an integer

WH: That is not correct.

DE: We use ToSafeInteger. We're in dangerous territory because this number is so big, we might make an incorrect decision about its representation.

WH: Currently the conversion from Number to BigInt throws in 3 cases:
    * One is if you have something like a NaN or Infinity.
    * Another one is when we number which is actually not an integer (like 1.5). These two I agree with...
    * The third situation is a integer whose absolute value is greater than or equal to 2**53. That one I strongly disagree with, because it is in fact an integer and there is no really good reason you should throw.

DE: Thanks WH, We discuss about this alternative on the issue but some people had disagree on this.

WH: `IsSafeInteger` doesn't really make sense here. It has a different purpose which doesn't apply here.

DE: Personally I would be fine with WH proposal, I just want to mention that we already had some kind of issue. There's a Scala JS (link?) project that is experimenting with bigint because they have to represent 64bit.
convert a number into a bigint, they had do a series of shits, I think this address WH concern.

WH: The slide presents the question "should we change both to round, or both to throw". That's not the right set of choices. There's the 3rd option (which I prefer) which is converting a Number to Bigint throws on non-integer inputs but accepts all integers.

DE: let's keep discussing these questions when we come at the end of the presentation. Denoting numeric values in the spec. (discussion of slides typeface). the specification currently had this thing, where mathemitcal values, some of the things flowing through the spec are mathematical values, some are numbers, this is confusing implicit conversion between them. Now we have bigints, a third numeric value. After a bunch of procrastinating I created a PR, this is bigger that we just JavaScript, spec like the web platform are running in the same kind of issue, if we find a solution if would profit to both sides. Both implementers and programmers have to look at the document. What I want to do is minimize use of mathematical values. I have a fear that maths values will leak out into observable behavoir. What I want to do in the PR is change the mathematical way of interpreting values. It might be more comfortable if we are using that thing that actually fit in the computer. (Mathematical values, like an arbitrary real number here.) if you want to join the discussion, go to the PR and we could really do with your help. Since the last meeting we worked on several implementation, first it behind a flag in Chrome is HTML serialization. Postmessage, this calls out to the spec that decides how to serialize the value. The actual spec says "serialize the bigint", but needs some plumbing. Wrapper works too, if you do an object from a bigint you can also Postmessage that and that just follows the specifications in the PR. because interested was expressed from both Chrome and Mozilla, now the requirement is that you need to ship BigInt, interestingly. There's some Webplatform specifications that landed for BigInt and 64-bit integers and we should coordinate there. WebAssembly BigInt integration, WebAssembly has a 64-bit integer type. in the JavaScript WebAssembly api, currently when you call a function that has an i64 argument, it throw a type error, there's just no way to.they ma
ke sure to lead this, anyway, I wrote a specification PR and some tests and I presented this at the WebAssembly group, and it's stage-2 in their process, meaning ready for implementation. They have sort of a difference between stage 2 and stage 3. You know that will be interesting to see how it will go forward. Now there's a question of webIDL, which is a little bit trickier WebIDL is the interface description language, used by many web specifications. Most of the specs that come out of WhatWG and W3C expose a JS API, they spec it in WebIDL except it has runtime semantics on how to ??? conversation. These days in modern browsers, there's actually an automated generator to C++ and ?? bindings. web platform implementators don't have to worry about ??? in JavaScript, if we want web platforms to take bigints, there needs to be some integration. so I proposed one thing we're sort of iterating now to handle when ??? When you see a string should you cast it into ??? or a number. Lastly BigInt has IndexedDB key, IndexedDB it's a system for storing information locally, it's key-value stored that is order, now the key can support bigint due to the serialization. For the keys, we could make them BigInts, not sure if this is useful. I did an (likely unrepresentative) Twitter poll. I did the same thing for bigint typed array, and I got some response: "Yes, I would use this," for BigInt typed arrays, and for IndexedDB keys, "yes, useful for someone else".

(Slide: Implementation and tests status)

DE: There's an implementation in V8 behind flags which you can use right now you can just use it in your console, it include the HTML serialization that I just mentioned
an intent to ship has gone out to blink-dev. it's a positive signal. Here "shipping" in Chrome means flipping the [feature] flag by default in Canary. in JSC Igalia is working on a JSC implementation of BigInt based on V8 it's going pretty well, it's not all there yet but thing are incrementatlly going. And any more help with code reviews would be really great. In SpiderMonkey, Robin Templeton is working on the BigInt implementation. A feature complete patch is out for review, and so far the Mozilla position on BigInt is a little bit unsettled, in the blnk post they were intent to ship bigint. I would like to have more feedback. It's on the queue for review, the review there will include the specification as well as the implementation. Anything more to clarify?

TST: This seems like a nice feature, but it's also large, and in line behind HTML Streams for our code review resources. it won't happen tomorrow

DE: I understand that everyone's resource constrained. For tests they were initally written by Igalia, but there are many more conformance tests from Bocoup. V8 also has a good test suite. Any question comments about this thing?

YK: I'm exited, in Wasm. I'm happy as a user of WebAssembly.

AK: I want to go back to integral numbers question. I agree with WH, the two options don't seem right. Whats the downside to allowing not trowing for number coerce to int64, I can say a little more—I understand your point that doing safeInteger will do some unpredictable math, for example  if you pass it a large number in the bigint you'll get a bigInt that;ll have the same mathematical value.

DE: that alternative seems very reusable to me. My intuition that initially, there was... one thing is that match array buffer in the casting scheme (sven: unsure). Anyway, if we can agree in this room, and then revisit the GitHub, addressing WH's concern, than that's a great way forward.

AK: Calling the BigInt constructor seems like a very explicit cast operation.

DE: But the constructor should not round by itself; we want to people to explicitly do a flooring or a ceiling.

AK: That's part of the problem with this issue;  i'm not proposing that we change the behavior.

DE: That sounds like a good resolution to me, I just want to bring up the actual use case and confirm whether it would be resolved by this. I'll follow up and make sure we get a patch for allowing things outside the safe integer range.

WH: (Referring to code on slide DE presented on screen) This workaround algorithm is actually insufficient, it would need to be more complicated to be correct.

DE: === will never throw, including in the BigInt proposal

WH: The problem is it will still throw on some integer inputs.

DE: that sounds like a good case. Does anybody sort of objects?

YK: I want to agree with the proposal, I think the kind of usecases I have are web assembly  where I'm trying to move value form JavaScript in there. I know I have an integer here, I know it's not a float, and I want to pass in any inconsistencies, and pass in those in JavaScript which is annoying... Generally, I more or less agree with the point of taking any integer even if it's not JavaScript safe, and convert it into a language-agnostic nature.

TST: There are two native concerns. one concern is that Igalia doing all the implementation, it's difficult to talk about completely independent implementation. I don't know what the solution is, maybe we're fine that they're done independently in different organizations. An additional concern is the use of the same underlying BigInt library.

DE: I can clarify both of those things. First for the same underlying BigInt library, there isn't use of a common underlying BigInt library. Spidermonkey is using libgmp. This library is under the LGPL. A mozilla laywer said that it was ok, but others are going to have a different library. V8 decided to implement their own BigInt Math library, and JSC is sort of working on that fork of that.

TST: OK

DE: For Igalia doing all the work: We didn't actually contribute, besides one or two Code Reviews to the V8 BigInt implementation, so it's pretty independent. You could say that neither Mozilla or Apple has given a strong independent statement. My conversation with some Mozillans would be positive.

TST:: What I can say on that is I'm positive on this proposal, but there's very many cross-cutting concerns, making it hard for me to say for sure that I support it, but I can say that I think we'll eventually get there.

DE: I'm really happy that Jason is going to be looking at the issues. Feel free to be in contact with me or Robin for any questions.

TST: That should help us with this things;

DE: Great, I just wanted to mention that Jason and Till are not the only Mozillian are not the only Mozillians that helped. We've also had a lot of great specification reviews from Boris Zbarsky and Anne van Kesternen, in HTML and WebIDL, and these sorts of things, so thanks.

AK: About the V8 implementation, we thought this would be a lot of work. This turned out to be fun for Jacob but not that hard, actually. there's a lot of work to do on the various runtime implementation. I'm not worried about that, implementing this in multiple engine would require a lot more of work.

TST: I agree.

KM: Does any one have any thought on conversion operations on the constructor? If you're trying to convert from a floating point to a BigInt, etc., throw if you have a fractional part.

WH: That's exactly what the proposal is, assuming the change I am advocating gets in.

DE: to address your concern, the other sort of conversion it the bitwise conversion. I prefered to leave that out in the current proposal. Other conversion operators can also be considered to be added in future proposals. Jacob has mentioned multiple times of implementation in the core engine that may be difficult to do in JavaScript code. I want to continue to think about how to extend the library.

KM: My point in this was not that stating its a requirement, it was more wanting to resolve the conflict of the strictness. people have different debate of what the strictness of the conversion should be.
Maybe they would be happier if there were multiple different ones and you could opt in to which you want anyway.

DE: I'd rather come to a single answer on this question. "We are having a debate, so let's put in a menu option so users can decide the answer" is kind of an antipattern. I don't think we have a use case for this kind of things.

WH: In my mind there are only two ways of converting a finite Number to BigInt that make sense:
    * One is if you have an integral number, convert to a mathematically equal BigInt, and throw if you have a fractional part.
    * Another acceptable choice is round finite Numbers towards 0 and return the mathematically equal BigInt.
Either one is sufficient. When you have the former, you can do the rounding or truncation yourself using `floor`, `ceil`, `trunc`, etc. I'm happy with either choice we make; we don't need to provide both.

DE: Yeah

WH: I'd happy with either choice you make.

DE: what about doing the rounding operation first, anyway to conclude on this topic on the specification. I think we have the consensus in the room to throw ???For the second question on exact comparisons, it seems like we have consensus. Using string to bigint rather than isNumeric

WH: (Nods.)

#### Conclusion/Resolution

- Use StringToBigInt for Abstract Relational Comparison between BigInt and String
- Throw on non-integral values in BigInt(Number), but permit non-safe integer range

## Weak References for stage 2

(Dean Tribble)

- [explainer](https://github.com/tc39/proposal-weakrefs/blob/master/specs/weakrefs.md )
- [slides](https://github.com/tc39/proposal-weakrefs/blob/master/specs/Weak%20References%20for%20EcmaScript.pdf )


DT: this was done as a hour talk, we are going to the first part. Last meeting there was a bunch of conversation that broken the ??? I want to ask for stage 2, since then we got a lot of feedback, especially from the discussion in wasm. For some of the follow up as well, and whether we can approve as well the partial API is something I will bring up at the end. we only have half an hour, everything that is bike-sheding we are going to discuss it later. So this is the weak references proposal has always been targeted to framework developers. Since 2016, this ??? this is a refinement of that, it's not intended as a general API for developers to use.
BHS did an initial implementation that we've been playing with in the last API,  we are going to either adapt it or shim it. TST has done an implementation on SpiderMonkey shell. We're going to start to experimint and build code on top of it. Ok. so, most people are aware of the background of the language which have GC, in order to be able to do remote reference for ???? in order to be able to do backpointers for observer patterns etc we have all of those and recently we added WASm to add meaningful support, and that's why we're starting to move faster on other things. The background requirements we've always had are you have multiple sources of finalisation of finding the object I might have a object that I want to get out that might need some internal finalization. And it has external finalization; I stick it in a reserver table, and it keeps a reference of it's own internal state. the second is finlaization there's two bugs: one is resurection, where I have an object that I think im done with, then that ??
I will talk a little bit more about that. for layered finalization, I have a DOM tree or I have a graph of a network w/e it is. that makes now the second layer available for GC, then work our way down to the first layer, layer collection, turns out to be a ??? issue, so the resurection case you end up with a graph, the entire graph is unreachable ive taken a dom tree and ive dropped it on the floor. Work on the DOM Tree and traverse our way down, but the finialisation of each of the nodes ???? in this particular case Z and A have been dropped.If I'm holding on to a file because I've got a file open, then the file manage better have a directory or a directory leading up to the route. so here I would like to let go this reference of the file, both files could be GC'ed. But someone's directly holding on to Y. If in theprocess of cleaning up after them we were to resurrect one of them, Then like if I drop file A, both of these are garbage, I do finalisatiion. If I then try to do something to cause it to be referencable, but it was cleaned up, now suddely this subtree is reachable, I already have cleanup, I closed this fd. Instead of producing a fully ?? graph it has produce a zombie tree. This happens in DOM trees with event listeners, and some of the elements are removed, you may have some dangling listeners, which give rise to resurrection bugs. Now you have something that looks like something you tried to recorverd, but failing to recover. It's really hard to prevent if not impossible at all, that's the only way to address these bugs via resurrection. Layered collection is the same kind of thing ill jyst use the same kind of graph, ill have to first have to ?? that level Then the next round of garbage collection collects this level. If its 20 deep you don't clean it up until you've done 30 garbage collections, and thats pretty bad. I'll skip the terminolgy to move forward—I'll just talk about the Core API So this is the API that we evolved 2 month agho, its actually b
een stable even thoygh it appears the presentation and spec languages have changed. I'm going to focus on the stable part of ??? So a weak reference is the core and new thing which we have, and thats the same as the proposal from 2016 all the enhancements are on the edges that reveal less determinism and more adapted to ?? and you can invoke the weak ref, and that will return a strong ref ... The target will be hold too tstrongly, so if you hold it on the turn ???
so if you dereference it twice, get the value out the first time, you'll also get it out the second time too. The other operation is clear, yea this object ive used it im no longer the observer "go ahead and clean out my weak reference" Fianlly and this is addition, so we have this concept of a holdings accepting a weak target, so we can clean up after the target, after the target has been reclaimed.
so if ive got a remote reference javascript object thats got the remote ID, So when my remote reference is reclaim, i'm going to run the cleanup ??? in order to ???
ill show you that in just a minute...

WH: These holdings are strongly-held or weakly-held?

DT: Strongly held.

WH: So if the holdings refer to the object, it never gets collected?

DT: Yes. We actually specify checking for that so we can't specify the target as holdings
Weak reference and the factory that makes them. This is the new API in the WeakFactory class.
What actually happens in systems is you do finalization across many objects in the same way. If I have many objects, I have hundreds of thousands of references, so I'm going to clean them all up the same way, similarly, if I have WASM handles, similarly the WASM handles are in multiple memory blocks, and
Those are all going to be handled the same way when my wasm handle is dropped those are going to handle the same address.
that's what I mean when I mean finalization is all about finalization system. The intent for this is to make it straightforward, to reliably say here's my subsystem for all of my handles in here I want to handle them the same way
It has a constructor that takes an optional cleanup function (I'll show an example later)
From that you can then make a weak reference that is part of the group that is managed by this particular WeakFactory

part of the set of wak references that when they are going to be cleanup they will be using the same shared cleanup function.

And then finally one of the things I can do is I can say "shutdown()"
back to this subsystem orientation, with this Wasm subsystem.
I just saying say that I just want to throw everything away, don't bother me with the cleanup function.
so I can turn it off,  and if we had cancellation this could be replaced by a cancellation ??

WH: What happens when the weak reference factory itself gets garbage collected?

DT: i'll come back at this point later. both for subsystem is turns out to be more efficient. If instead we provide an iterator to the cleanup function, and that's an example of something we'll deal with in Stage 2. doing the cleanup has some setup to it ??? doing the remote reference case you drop a bunch of proxies, you might want to drop...and that's it, this is the core API from these two APIs. What are some examples? the state of a weak reference, is it may be available so the target is available, it can be dirty, which means GC has blown it away, and we need to do finalization, or it can be clean, in which case nothing is necessary.the examples are really simple. I create a weak factory, thats a new thing over the previous API ai can create an observer here I don't weak factory doing a observed. that's how i'm going to notify all my observed, and when it's going to be GC'ed it's going to notify all my obversed. Now this means that i'm going to accumulate cruft in my observer table but we can have the automatic finalisation to pull this out. If we drop the whole subtree, suddenly a part of the tree goes away. Yes it's nice that some % of this stuff gets cleanup carefully. And you shouldn't count on any particular item being cleaned up. so back to what happends, I don't need to cleanup particular observed. Ive moved on to another pane, the entire view subsystem is now unreachable, that can all be garbage collected. I don't need to do finalization in that case. One of the thing about the weak factory, going back to if the weak factory is no longer refereced. -- if everything is dropped I dont need to do finalization. As long as I holding one in the weak references I don't have to do the finalization. I will drop the entire subsystem and not have to do finalization. What if the GC happened right there (points to slide)? You'll end up with an error, that would be bad. That's not good code, but it's code that people will write. Once you start to separate it, -- if its
 in my cache, leave it in my cache otherwise add it in my cache, and so the goal is a program cannot observe a target being reclaimed without a turn in the event loopwhen we deference a reference we check the cache. Additionally, when you first create the weak reference, so we treat construction of the reference -- the object you provide in, we refer to strongly. Because of this scenario (if it's in the cache, no? add it in the cache and so on). creating new weak reference on the new object ??? and if somewhere in there you dereference you would suddenly return undefined, and this is one of those not great coding pattern that people are doing ??? let's reduce the determissm in our system ??? and so, this trivially eliminates the multiple use hazard I mentioned. Let me get my slightly more complicated example; so on cleanup I'm going to do a drop ref and so this is essentially the same pattern than the obvservers what I don't show here in the real code, is that. Instead of sending each individual dropref I wil accumulate a list of IDs  and once I get to one hundreds, I going to send them all together. that finalization iterater will ???.

DE: you're 20 mins in

DT: we can do multiple weak refs on the same target, they wil be finalised independently in their own group. and we can unregister from ??? by doing ??? Ok so let me pause for a moment thats the stage 2 api, it is what we originally planned to propose, and that hasn't change in months What we've been doing since then we're doing specification, there is a question for the committee, which is from the point of view of stage 2. we do have spec tests for this stuff. The thing I would like you to think about is everything after this a believe is approximately stage 2 requirements the question is, are we ok with saying that's stage 2? Or do we have significate ??? to address in order to go to stage 2?

DT: Can I take a moment to ask that question?? Does people want to go to stage 2

BT: we have a queue

AK: lets discuss

DT: we can clear the question

DT: ok queue

YK: first of all I just want to agree that the WebAssembly use case ??? I create some object in wasm and I would like to leak it into JS as a GCable object, but when the Gc cleans up I want to clean up the wasm side.

DT: this is almost the same ??? stuff. And we're going to do some cleanup call that is going to call into the wasm.

YK: and in that use case it really doesn't matter to be, I basically want the same GC timing rules as regular GC and I suspect that engines will use roughly equivalent heuristics.
I will expect that engine will ??? basically I just want to keep my memory.

DT: ??? is in some csense changing the language terminology. We're not proposing that you can rely on things getting cleaned up properly

YK: the other question which people are now answering on irc,
the second question, is finalization couple to weak-ref? or can you have a finalizer without a weakRef?
is there a reason for that?

DT:  yes. Internally you need to have some code that will run when something goes away. So fundamentally / architecturally there is a weakRef to ?? now the question is how much book keeping do you need to do. i'm going to show you here that ???

MM: go ahead and show it since it came up

DT: We take the weakRef protocol and introduce a ??? class so the weakCell doesn't get weakRef

DT: i'll explain this a little bit more for the questions.

DE: previously we heard concern from implmenters of any kind of ... ?

MM: I'll clarify that, I had a lot of talk with the wasm team, and the mozilla/v8 folks. And the previous objection to weakref was a completely valid objection that caused the proposal to be stuck
which is you have the hazard that programmes that are not actually correct by the specification just happen to work because of the way garbage collation timing works
code that always work that was incorrect starts to beark.
that objection is just as valid as it always was.
it's a real hazard. what broke the log jam was this wasm use case, which yehuda just pointed out
this was seen as an overwhelming use case by the implementers
they wanted to have an obersvable GC on the plateform with all the hazard.
what is does, it treats the GC, which is where interleveing haards usually happn, and each turn boundering ??? the hazard which is exactly where the javascript programmer is used to interleving hazards
within a turn with ??? we mitigate this hazard as much as possible.

implementers who were present on the phone call expressed that this was something they were happy with

AK: I just wanted to agress with MM overview, the WebAssembly case became more and more obvious that's become a problem. THere's a lot of issue that's going into, both when you are using wasm in js with the current memory model and the dangers of using a lot of memory which we at least are looking at -- reducing memory usage overall
this seems like a good fit for improvement

DT: there have also been some changes in the api to more strongly stay away

TST: WH, I don't think that should be on the queue

WH: You presented WebAssembly being a motivation for this feature, but doesn't it suffer from the problem of cycles?

MM: yes I can answer that. yes it suffers from cycles. this came up in the internal v8 discussion. This solution can not cleanup  cross zone  cycles, and we did examine what would be a solution to clean up cross zone cycles and it was ugly and everyone backed away from it the current agreement in order to go forward is too ??? There will be leakage, but it will be conservative anyway. There is the question how much the cycle problem ends up ??? even if some additional mechanism needed for cross zone cycles there is still use case for this.

YK: I can only speak for myself for the webassembly use-case, the cycle problem is really apparent to me, where im at right now, I cannot reference into the wasm heap from js at all.
I want to have wasm object in js that are GC'able the only thing I can do right now is ??? this allows me to reference into wasm directly from js in a gc'able way I want to reference js from wasm from a gc(able referancle way.

MM: Just one more clarification, part of the reason why people were ok living with the cycle problem for now is  we do expect that there will be a wasm gc in the future; it uses heap allocated and uses the garbage collector of the embedder. thats one graph that it sees in both the js and wasm gc objects.

-- extended

SYG: my question is ??: it seems like the answer to ??? it seems the be yes. With respect to finalization, what is the standard what can we tell users that they can rely on

DT: I don't want to answer that. This is a stage 2 discussion.

MM: I have a very short answer. an implementation taht never garbage collects in the absense of weak reference and that never pops a stack, it sill conforms to, the spec doesn't ever talk about finite memory or memory exhaustion.

DH: I like this, ive always been in favor of weak refs. the thing that I got stuck on when I first started n this ...? program tends on rely on surprising bugs. and then this idea of doing turn based collection is very clever and fits js very well. but what I dont have an answer to one qustion which is sure on the main thread the javascript way of doing things is short turns but in workers you can have unbounded threads doing long turns if you ahve this weak ref, that by definition never be collected (sven: unsure) they just become strong references in an unbound? turn. is it that we should never use weak refs on a thread, or ... what's the answer for a language that ahve both weak-ref and unbounded turn?

DT: So the answer is in the rest of my proposal it turns out i'm happy to talk to you offline. I think of that as being stage 2 enhancements, which I is why we didn't try to address it before.

DH: I'm fine with that, I just want to say that for stage-2 I don't know to block ??? Ideally I would like to hear a plausibility ?? before I agree to something stage 3

I would need to hear more ...

MM: We have two possible answers

DH: happy to hear that.

WH: I have the same concerns as DH. I want to see a good story on how weak references can be used from within long-running turns. As it is now, you can't collect any weak references you created within the same turn.

DT: this weakCell that we added which is the superclass that you can't derefernence, those have ?? It will still only run automatical finalisation on weak turns

WH: That's not actually a weak reference. It only supports finalization.

DT: it has a weak reference you just can't de reference it. This doesn't do weak reference in long turns so this doesn't satisfy all cases. We have an addijtional solution for wasm, we haven't look if it would work in js

TST: I want to explcitily support moving this to stage 2, i'm fairly confident the proposal as is right now, the things that it touches, the usecases that are important and addresses them sufficiently well. and the space for use cases is known well, and there are plossible solution in there. I'm very confident that we're going to find that.

DH: (quick reply) im prepared to believe that, my main concern is ecosystem effects. you can only use this api one way, if you are in the context of the main thread or in the context in the worker.
I'm just saying that anyway that forks the behavior is a community smell, it's not a stage-2 blocker.

TST: I strongly believe that's not a case we're going into.

DT: I don't like the name either

#### Conclusion/Resolution

-- Stage 2, change naming


## Optional chaining for stage 2

(Gabriel Isenberg)

- [explainer](https://github.com/tc39/proposal-optional-chaining)
- [slides](https://docs.google.com/presentation/d/1XDUB1gGRmD6cIUu2-bVXEA-ZrWUIfQfhWxFKALCAXOQ/edit#slide=id.p)

GI: i'll recap the features and go through the syntax and finally ask for stage 2. It's for optional property access, racket accses and optional method invokation. The current status is stage 1 with implementation in Babel. Before i'm showing you the syntax I would like to go through the other languages. People asked in the last meetings if people are using ??? The current scope of short circuiting fulfils almost 90% of the use cases in coffee script. Syntax is probably one of the more challenging issues for this. we want something that is backward compatbility, something that's easy enought to parse, we want something that works for our use cases such as member access and bracket access, we want to pick something that's not used in other maintream languages, we want something that is uniform across the three cases, looks lnice , esay to parse, and intuitive for the developer. the current syntax that's in the proposal, are ?., ?.( ?.[ and ??. There is a related proposla wichi is ... (see slides) it allows the ideal syntax for nullish coalis, fallback syntax: last meeting I discussed ?? as an alternative to ?. (explaination) since we're using ?? we need other token for nullish coalis, and ?? is the strawman for the future, there's a pr to switch the syntax from ?? to ??? because it's easier to parse. The big con here is that we can no longer do that ??  Another con the method invokation ??? looks like other ??? The status is that we are at stage 1, I am seeking stage 2 for the community favorite syntax. That optimizes for the most common cases. We have babylon and transform support. There is one open issue with unwelcome grammar suprised with tagged template literals with that I would like to open it up to the queue.

MM: What is the unwelcome grammar surprise?

WH: I filed the bug. I'll show you offline. (The bug is https://github.com/tc39/proposal-optional-chaining/issues/56 )

YK: two comments. The first one is I appreciate we have the coffeescript corpus But I don't know how much to amplify this objection. Coffeescript was quite a different language that took quite a bit of direction from Ruby. how people do things in js is really different. I think its good for rough approximation but. the other thing is that largely for that reason I have concerns for anything with ?. because it has nothing to do with what . means in js. I think it would be confusing, I think this is already a power tool, and making a syntax that has tokens that don't match their usage in other languages is just confusing. The last thing that you kind of address, how the question mark token works with nullish collao, and later on feel regretful for what we have on nullish coallessing. We should decide together, what does question mark mean in javascript, do we want null coalescing

BFS: I guess this is partially a general question. We've had inconsistnecies with syntax brought up a couple of times in this meeting, im trying to gauge. This is a generally objections to add more inconsistency in the language syntax.

YK: its definately a case by case basis
but I think especially in expressions and when there's a lot of ?? next to each other I think its important to... the syntax really needs to pay for iteslf.
i guess I dont  want to go so far but
but I do want to say that, syntax is expensive and putting a bunch of tokens next to each other really should have some evocative meaning
i object on putting tokenst oether that mean something different than what they used to mean.

BHS: I'm question is still what's the ??? in the feature. You just mentioned having multiple tokens, this looks like a single token with multiple code points.

YK: I don't know what to you say, there's a dot there. Its a micro syntax that doesnt justify ???

BHS: That answer my question

JHD:  I think that the teachability depends strongly there being some token in front of a . or in front of a parent based on the current options I prefere the ??. ??( ??{ for the consistency reasons.

DE: I might not be the most exposed to lots of javascript developers, but from conferences ive been to it seems like a lot of people are interested in this proposal. It feels really common use case, where you have some nested structure that's you're going into. This proposal doesn't really present any implementation burder. Learnability in both direction is ??? And its legitimate to talk about whether its unneccesary, but it looks like the explainer document goes through a load of common scenarios where this happens. The explainer document goes through a lot of versions. To the quetion that YK raised, this is considred together with null colleasin??? This is like class fields private and public again, where we went back and forth between proposals.

YK: I want to make it clear I did not suggest a specific process point, I don't mean to imply people did not do the work to consider cross-cutting concerns. I was nervus about advancing both proposal at the same time

DE: I support advancing both proposals. I think both these proposal will make it easier to write code and will reduce the amount of bugs in people code.

DE: Thank you for your work on championing this

GI: I am challenging the consistency arguments, I have a PR and fallback for the secondary syntax if that will happen. regarding combining these two proposal I intentially kept them seperated. There are cases where null coalescing will be more controversial in other cases so that's the rationnal.

DE: The poll was pretty well done by GI, I was afraid less people would respond but instead we seem to get more people engaged, and the setup of the poll really seemed to have included ... I think we are talking about question of estetic. There are multiple angles to the consistency argument, but these things are not infintely composable. There are a fixed sum of operators we are adding. I think in this case it could be good to seek more community feed back. and I think gab has done a great time getting that feedback, that's the relevant data to look for.

GI: I was looking at the github repo before presenting today, and as far as stars go in the proposals, this seemed to be the most starred proposals and it would be a disservice to our ursers to not have any advancement on this today

JRL: I would like to register my storng dislke of the ?.( --it looks like a property access It's very strange when you want to access a propery on an optionally called object (obj.method?.().prop), I posted a link to the IRC which describe it. It doesn't look like a function call anymore, it looks like a really random parenthesis. The `??(` is similar to php's ?? which is a nullish coallesing syntax. My argument against that is your linter will be able to determine what you're actually doing here. For actual membership access theres no spaces around the operator. For nullish coalescing where you could have ?? in PHP and ??: here you would have spaces around a binary operator. They look different, php would have one style of spaces are around the operator, and js has different spaces around the operator. Telling you that they are actually different operators even if they use the same symbols.

WH: We've gone around the block of possible syntaxes a few times already. The only one that survives is the current proposal. `??(` looks like the null coalescing operator `??` and not everyone adds spaces to their program to disambiguate the two. `??:` is not a good name for the null coalescing operator. I am not comfortable putting in a feature which depends on any particular spacing style. If you don`t like `?.`, what are you proposing that works consistently?

GI: With regard to the syntax options we've gone throiugh a list of over a dosen possible candidantes. ?. is the current proposal or ?? anything else is too difficult to get through the community and committee

YK: what about having ?. and then not having anything for () and []?

WH: We disussed this before and it's not an option.

DE: SO to clarify how ?? doesn't work with nullish coalescing, this wasn't actually the main one that's being serious considered. This wasn't actually the main one being seriously considered. The only options are `??:` for nullish coalissng

WH: I don't believe that `??:` will fly for nullish coalescing.

DE: What's the divantage of that?

WH: The short-circuiting operators would be `&&`, `||`, and `??:`. The colon is too weird.

YK; I'm ot proposing the thing ??? which is restricting the syntax, I think this proposal is fine on that front, I objecting to ?.[] and ?.() . I don't see why this is required. There are definitely some people who feel who only question It seems like many people don't want to do `??` (sven: unsure token here) now.

BFS: I feel if we do property access with this property acces on this, we do need to be able to do symbol access. I would feel ery uncomfortable only be able to ship property access and not symbol. so we do need the square brackets.

BT: `?.(` is feel a bit misleading on what it's doing this could be easy to get some data on. It's pretty specific to question to get good ways to get feedback. I would like to see that before including that syntax.

GI: ???

BT: as long as it happens, i'm not going to block

GI: thank you

YK: I said this already, people have said we're not going to do the full set of orthoganal primitives?  I certanly don't want to use that because it will complexify ??? I just want to be concervative about the syntax we agree to. and I dont like to be forced to make that decision.

GI: ???

YK; I don't understand why.... what would force us to support those syntaxes? what would force us to do this

GI: if we want to ???

YK: ???

GI: ??? cant remember the justification of the top of my head.

Yk: so WH did point out last meeting that `?.foo()`, im just asking anything that requires us to accept ?.[] right now, seems like we can pick the first point there with out the other? I feel like we should pick ???

WH: The specific point YK was referencing was the syntax issue I brought up several meetings ago, which terminated the optional chain as soon as it encountered a [] or (). That wouldn't apply here if we just didn't have the `?.[` and `?.(` operators. On the other hand, I don't think it's a good idea to omit those because those are still useful use cases.

YK: Do you think its very important that we do all 3 of them at the same time? what is fatal on moving forward with ?. and hanging back on bracket access and method invocation.

GI: ???

YK: ou keep saying that but stage 2 means that ??? You're presenting two options here.

BFS: id like to reiterate that square bracket access and dot access are inherently tied. in my view this is absolutely mandatory. if we have this dot access we also have this quarred access. I feel this feature would be incomplete if we can not use one of our first calss ?? in this case.

DE: To the point YK had about ??? I agree with the future proofing strategy even if we ??? It may come up in a future proposal. for example for the class fields proposal even though we ended up not having hte short hand in this iteration. we did work out the short ahand for the future as part of the acceptance even if we dicided to not to support optional method invokation now. That's the advice that the committee is giving GI now. also growing from small, this proposal already went through that it was a much larger proposal, it also included more operators, optional `new` or property set, this proposal is really stripped down in a data driven way. I think this is sort of the right method to arrive at the conclusion now we're just at the point where ??? tradeoff.

JRL: wanted to clarify the support of whitespace support, was also with ??: for null coalling, it would not be significant white space around the `??(`, it would just be whitespace the programmer see while reading.
it doesn't change the grammar by just having the space there. The majority of programmers put spaces around binary operators (`??:`), and don't put space around property access (`fn??().prop`)That's just how the majority of programmer would have it written.

JHD: we ve been chatting in irc and it seems like some of us were not on the same page. a number of us more or less require that optional member access and optional braket access be supported. this is whywe cannot proceed wiht optional member access without optional bracket access. let's just talk about the semantics on the operators and not the syntax. It needs to be the same token, the current syntax is not somthing that I would like to see further.
In order to avoid the conflict that JRL just talking about, could someone that's oppose to that syntax, can someone who objects to this clarify why?

WH: I did and I already stated my objections.

BT: What does the note say?

JHD: I know but I didn't hear that ,so the consistnace with the and and the or operator is the objection.

GI: so as I understand that

BFS: I just want to clarify, are you objecting on the alternative syntax? Are you objecting to `??`?

WH: Yes

BFS: ???

WH: I don't believe you'll end up with a better syntax for nullish coleasing, which means that you can't claim `??` for this feature.

BFS: you are blocking this proposal because you have predetermined a syntax for nullish coallesing

BFS: IJ don't understand ??? i'm sorry.

???: and it is very aggressive and im sorry

WH: We've gone around the block on this and the nullish coalescing proposals a couple of times. This isn't new, and they do interact in the grammar.

GI: so there's a very strong objection to stage-2 with the current syntax?

JHD: Yes

YK: there was a proposal that godfrey told me a couple of days ago and I found it interesting. hold your initial reaction. the first part of the proposal. nullish coalescing is |||

that's the dangerous version of ??? and then we have ??? which the better version ???. I think it's certanly not ???

JRL: would ??? if we dropped optional call?

WH: You mean `??` or `?.`?

JRL: `??`

JRL: we drop optional invocation syntax which makes it so that  ..

WH: What problem does that address?

JRL: it takes away the expression, and it gives us ?? being null coalescing.

WH: No, it doesn't.

DE: it's still need to be whitespace ???

JHD: because in `??[` and `?? [`, one would be optional chaining, the other would be nullish coalescing with an array literal.

GI: ???

DE: Wait, the proposal is triple pipe for nullish coalescing?

WH: Let's discuss nullish coalesing first and revisit this item based on our decision there.

GI: ok


## 7.iv Test262 Status Updates (15m)
(Leo Balter and Valerie Young)

LEO: I like to have Valerie Young presenting the latest updates, as she did very nice summary for it.

VYG: (updates)

BigInt
* Coverage added:
  * Last TC39: [BigInt TypedArrays would not do implicit conversion](http://tc39.github.io/tc39-notes/2018-01_jan-25.html#13va-bigint-status-update-significant-recent-change)
    * 6 tests by Valerie Young
  * conversions to/from BigInt
    * 40 tests by Valeire Young
  * BigInt TypedArray built-ins
    * 100s tests by Robin Templeton
* File reorganization and renaming for consistency with the rest of Test262
    * 100s of tests, by Leo Balter and Valerie Young
* BigInt Test262 bug fixes:
  * During review of SpiderMonkey implementation of BigInt by André Bargull, 100s bugs in BigInt tests were surfaced
  * fixes submited by Leo Balter, Rick Waldron, and Valerie Young
* Specification Review:
  * 2 specification bugs surface by Valerie Young

async-iteration
* Audit of existing coverage (cleanup of metadata, re-org of some files)
* 111 tests added for async iteration built-ins (AsyncIteratorPrototype, AsyncGeneratorFunction, AsyncGeneratorPrototype, AsyncFromSyncIteratorPrototype)

Atomics.wake and Atomics.wait
* 34 additional tests, completely and thorough coverage of these functions in coming by Amal Hussan

`Import * as ns from 'somemodule.js`
* PR specification review, 2 specification fixes
  * Static Semantic production missing
  * More serious concrete method bug, to be reported today
* ~30 tests updated or added

Numeric Seperater Literal
* Full coverage
* Including recent specification change for to string conversion and unicode escape sequences
  * Tests covering spec change added by Valerie Young

Function.prototype.toString()
  * Updates by Michael Ficarra

Routine Maintenance
* 100+ files now have tags for Atomics and SharedArrayBuffer
* 10,000s files fix for consistency in indentation (both depth and character consistency).

Eshost Updates
* SharedArrayBuffer and Atomics can now be tested in the plaform agnostic toolkit. Test harness now support agents do to contribution sot Eshost
  * Contribution from Rick Waldron and Amal Hussien

BT: since we have a bunch of new folk in the room I think it would begood to call out that Test262 to get practice with spec reading skills and a lot of  sort of disciplines and work that go into the committe so if you a re looking for a good place to make contributions to the committee. Test262 is a good place to do that. I also want to thank the people that worked on ES host. Theres been a lot of really awesome changes there. for the new people who are here , eshost is a way to run a script across a lot of engins at the same time. its a good way to get an idea of how the same script runs across several implementations.

DE: I just wanted to say im really happy that you've joined the Test262 team, Valerie, this allows the community to roll out new feature and ??? across many implementation. This is just very core work that you're working on, and thank you very much.??. There is an issue pending from JRL.

## 10.i.e Logical Assignment Operators for Stage 1 (cont)

JRL: to recap the discussion we had yesterday both DH and YK objected to adding logical assignment operators. Specifcally Yehuda's objection it would it will likely push people to use ||= syntax instead of explicit if statements, to using the sugar syntax. This will likely hit falsey error. With that I suggested if we add ??=, so we would have all 3 logical assignment operators, with that he said he would would withdraw his objection.

WH: Or whatever we change nullish coalescing operator to.

JRL: Yes, there will be some operator but it will include nullish coalescing assignment operator. DH still has reservations about ||=, maily because it opens the falsey footgun. The only objections that I haven't heard it from Leo on the call.

LEO: I think there is a major problem here. I want to discuss this in the next meeting. as discussed yesteday regarding 1js and 2js that not many things are fixing problems in the language, they are just creating a lot of sugar, and im not happy with the extra complexity. I feel like we just overloaded the syntax with thigns taht are not really necessary and I have the same feeling for this one. in other languages yes, those are like reasonable features, in terms of feature they're reasonable, in terms of adding new syntax to this language I am not happy. But I wont give a hard objection here alone. I would like to collect the new meetings and talk this through in the next meeting.

JRL: Ok (Sumarizing what Leo just said) He is objecting because he feels like we're adding new sugar syntax that is not paying for itself. Have I explained that correcttly?

LEO: Correct

JRL: it's just kind of a nicety to avoid object[key] || (object[key] = 1). Especially when we have nullish colleasing operating to set properties on an object.

LEO: There is something that we discussed last year, errm, how javascript is a good language for all levels of expertise, and when you talk about nicety, its not a fix. its a nice to have. the problems we have wen we add a whole spectrum of nice to have, the problem is that when you add a lot of nice to have things we end up with like... 3 amazing things but they just cause confusion. I like the way js communicates to developers. and I like this diversity of expertise of developers.
Soo.... Im totally aware you'd probably use it like this, this operator is common in perl for example, and those developers love it. but its not uncommon to see them needing to expalin it again and again. I think that adding all this new extra things will allow to do the same thing in multiple ways, and creating multiple ways of doing things in the language rather than fixing pain points is a problem. I dont think this is fixing a pain point. I dont think this is good for the complexity of the language.

WH: If no one else objects, you won't object either?

LEO: if im the only one then I will not block. if tc39 wants this then its ok for. but its really good to talk about this. It's really good ??? as a warming, because we might end creating this while lot of complexity. When we had this 1js thing, I think it's what we all want.

YK: I just want to say that I appreciate that you took seriously what I said yesterday.

JRL: yes, this proposal can not be moved forward if null coallsing isn't ready.

WH: I am in favor of this proposal—it's one of the few that have a negative complexity budget! For historical reasons we omitted those operators because we copied what C++ did, but that's just a historical accident.

JRE: DH?

DH: first I want to point out is that this slide, if you change ??? you have a bug. The only case that you should use ??? when you have stricly booleans on both sides, and you have a logical operation.

AK: I don't understand, you have to explain more.

DH: ???

AK: Ok I see

DH: I don't actually buy that's not a complexity budget because it does introduce a new hazard into the language without reducing the complexity budget. I just want to be clear that the issue with these operators, unless you stricly use booleans on both sides, you are under the risk of bugs.The reason why im withdrawing my objection is under the assumption that we have something like ??= for defaulting situations use the defaulting situation. but to me that demonstrates that the value of this is very very minimal. its nice to hve symmetry but I think it will be important for us, that's not a good thing that recommending people to use ???

#### Conclusion/Resolution

- Stage 1 acceptance

## 8.i.c Expand text included in "function code"

(Mike Pennisi)

- [PR](https://github.com/tc39/ecma262/pull/1091)
- [Prior discussion](https://bugs.ecmascript.org/show_bug.cgi?id=4243)
- [slides](https://jugglinmike.github.io/presentations/2018/tc39-fn-name)

MP: Thanks for having me today. I've been working to improve Test262 to better support consumption by JavaScript parsers. I stumbled on a contentious question: is the BindingIdentifier in function expressions and declarations part of "function code"? In ECMA-262 2017, you see that no, it does not include the binding identifier, but if you were to refer to the implementations, you would have a different story. Most of them include the binding identifier when enforcing strict mode restrictions. So, the initial question would.. well maybe you would say the implementations are wrong and we should change them. That may seem a bit presumptuous of me. I'd like to point out that by enforcing the current spec text, we would actually be lifting restrictions. So it's always controversial to change running code. but in this case, the risk of web incompatabilities is very low. However, there's a third alternative that's worth considering. The way that function declaration affect the surrounding environment record differs from the way function expressions affect the environment record. Since the BindingIdentifier of a function declaration creates an entry in the outer environment record, the strictness of the function body doesn't seem particularly relevant. On the other hand, the BindingIdentifier of a function expression creates an entry within the function body, so the strictness has more bearing in that case. The third alternative I'm offering is to extend the definition to say that function code includes the BindingIdentifier only for function expressions. So thats it in a nutshell, this is a pretty self contained issue, so I just want to give you an overview of the options we have on the table. The issue I'm seeking consensus on is how we treat these pieces of code. Is anyone seeing a value in changing the spec?

(Participants in the following discussion reference the following table)

ES2017 | Implementations | Proposal
-------|-----------------|------------
function static() { 'use strict'; }    // valid  | SyntaxError     | valid
(function static() { 'use strict'; }); // valid  | SyntaxError     | SyntaxError

KG: I have been discussed with you, I endorse Mike's proposal, but I just wanted to say that I care more about consistency between the specificatoin and the implementation. Going back to the BugZilla thread, this is an issue for me in maintaining the parser tests. Currently, there's an open issue, that's kind of silly when no implementations matches with the spec. I think the most natural is what Mike has proposed, but I would appreciate if the committee is picking any of the options today.

MM: I strongly feel like the middle column what implementations are currently doing now is the right answer, the right column it has an elegance that only a deep language lawyer would ever appreciate. For a normal programmer both of this lines of code are just confusing. The only reason someone would like to take the first, static is not reserved in sloppy mode. Rejecting the code that's not ??? and to lead people to not ??? The third column which is splitting a hair that no one will understand is not doing our end users a favour.

DH: Just as a data point I do not understand it

MM: would you find the middle column understandable? It suprised me when It was raised. What I thought the spec said is the middle column

WH: So now that I actually understand this proposal, it kind of makes sense to me. I had read the proposed PR and couldn't make heads of tails out of it. Could anybody tell me what this sentence means: "Function code includes the BindingIdentifier of function expressions because of the effect that the identifier has on the lexical environment of such functions"?

MP: WH is referring to some non-normative text I included in the proposal to help readers understand the motivation. I'd be happy to iterate on that text, but I didn't include it in the slides because it does not concern the proposal itself.

WH: I understand the spec quite well, but I couldn't make sense of the proposed pull request. The takeaway is that, while I agree with what it's trying to do, the wording needs work.

???: I'm sorry but for folks that are not ??? Certanatly if we want to move forward ???

BT: yes let's discuss this on the GitHub thread.

MM: Does anybody object to the middle column?

??: This pr he wants to get in 2018, can we get it into it?

BT: I don't think so, is it a bug fix?

MM: can we call it a bug fix

KG: I can convience you tha's a bug fix.

DE: ???

KG: im not going to advocate to get it in 2018 but I look like to have it in 2019

BT: Yes, ??? I would prefer to have a harder line ???

MM: Since the implementation are already doing this I don't think it matterns.

AK: There are a lot of JS users that care about this.

BT: No we are approving the spec change

KG: We are not approving _THIS_ spec change

MM: My point was there were no objections to the middle column

KMR: are we doing some thing about ???

KG: No that's going to remain valid.

** multiple conversations **

BT: I think the question is ???

MM: Are you willing to go with middle column? Are you rejecting middle column??

BT: It will go on the backlog

KM: It will have a bugzilla that will be there.

KG: Mike are you ok with the middle collum?

Mike: Yes. I'm biased for my proposal, but like KG, I'm more interested in consensus.

KG: So consensus on middle column?

BT: And we'll interate on the text spec in the PR

?? Thanks folks

BT: are we going to get to pipeline?

#### Conclusion/Resolution

- consensus for the middle column: SyntaxError for both cases
- Mike will follow up with a change for his patch


## 10.ii.f Nullish coalescing for stage 2
(Gabriel Isenberg)

- [explainer](https://github.com/tc39/proposal-nullish-coalescing)
- [proposal](https://tc39.es/proposal-nullish-coalescing/)
- [slides](https://docs.google.com/presentation/d/1vRiLFVYOXrKrqCxe-xEAkhAEaWXAdfZ0h8MPAIQ6mtc/edit#slide=id.p)

GI: Its an operator that provides some value. The rational is that the current syntax is ?? and that can provide surprising results. The current status is initial spec text and we're at stage 1



GI: If optional chaining take that operator we're going to look for something else. The favourite 3 tokens that come up were `???` and `|||`. There's another issue related to precendence, its currently speced out to have the same precedence as the OR operator. In the examples above, if you do a mix of null coalecing and ORs you might get some suprising results. There are some possible solutions, we could forbid mixing the operators without parenthesis or we could do nothing. I would like to present it for stage 2?

BT: hold on the queue is comming.

WH: I raised the issue about the precedence order. if you have `A || B || C || D || E`, the intuition is if you go down the line, which ever one is truthy you stop evaluating there and ignore the rest. The grammar happens to be left-associative, but I think of it as being right-associative. It doesn't matter because it's just an artifact of the grammar, invisible in language behavior unless you define two different logical operators with the same precedence.

WH: I gave a few options of how to proceed in the issue. One is to have `??` have lower precedence than `||`. Another is to keep them at the same precedence but make them right-associative.

GI: there is precedence for this in other languages.

BFS: So WH answered my question about right associativity and any visible effects. So, I feel if we don't allow mixing that's a bit surprising to me, that feels very similar to a logical operator and I feel it should live in precedence. DE read the spec text for that one and he felt ??

GI: anyone else in the queue?

WH: So in this example `0 ?? null || 7` you would want the answer to be 0? 0 is truthy according to `??`. Because the operators are specified as left associative the current proposed spec would return 7.

BFS: Yes, I'd want the example to evaluate to 0.

JRL: Returning 0 is also my intuition

GI: So the developer intuition in the room matches giving lower precedence than `||`

WH: Or making the operators all right associative, which would be a transparent language for the language.

JRL: Making this right associative would be really bad for ASTs and Babel

YK: there's something interesting about what should be truthy for this operator, I think its interesting in at least Ruby which just has false and nil.
I don't know what to say about that, maybe null undefined and false is fine.
Another way of saying that is this project is really about reforming falsey in javascript

GI: Is there strong consensus that nullish colleasing should include ??? falsy values.

JHD: So YK just to make sure are you suggesting it should be including undefined null and false. The use case I have is being able to default things on an options object

YK: but that same problem exists  with null. with various reasons we are not going for undefined.

JHD: undefined and null are the same to me, from an initialization pov

DH: I dont agree with that, in implementations we have something different

JHD: we have a table in the proposal which shows that more often we see that they are treated the same. I'm not clear on left assc vs right associative. So I see zero questions null. ?? One of hte additional reasons that I see precedense as important is because ..? I havent thought out the hazards in all the places where I would want to do that follower precedence

JHD: Could someone just briefly clarify left assc vs right assc

DE: it is left associated

WH: Zero is truthy so you never evaluate the `null`.

JHD: So you're saying the short circuiting would be such that it would never hit the `|| 7`?

GI: what I want to spend a little time on is the syntax. would everyone be ok with the three token as a syntax.

WH: Depends on which one.

GI: So the fourth bullet point on this slide

DH: I don't like it very much. These are just a super-cross-cutting collection of these proposals. we would have to deal with it as a collection. I dont see why we deal with the m separately

GI: That's fair

YK: I agree with what everyone has said. you shouldn't feel stuck I think three is enough in the air so that you can ???????
It seems like theres some desire to do triple pipe

WH: What's the use case for treating just null, undefined, and false as falsy values?

YK: basically a better falsy.

WH: I cringe at treating just undefined, null, and false as falsy values here. It's such an oddball collection of falsy things.

YK: there is a use case for double type. boolean is always what you mean. ?? I dont know what to say about that other than, I think that if you tryed to use that it wouldnt work

RBN: one issue in the issue tracker is ?: and I know its considered to be ?? There are a number of language that use ?: as null coales.e. im personally more favor in ???

** discussing the agenda **

#### Conclusion/Resolution

- more discussion needed


## Summarize classes

(Daniel Ehrenberg)

DE: In both the js classes 1.1 proposal and the response to static fields. These are things we have talked about a lot and have gone through several ideas. My view is that none of the changes that were proposed either, adding static private or switching to an arrow or switching to hidden or var, or removing public fields are things that we should do, and I think the logic that we have applied in the past. so in the next meeting I want to go point by point and in one presentation and go through all I one presentation because we didn't arrive at the semantics rather gradually, so I'm planning on going through everything and if someone wants to champion new changes. like KG  pointed out here are several changes that can be considered in a smaller way. so I want to go through this and explain why things are the way they are and why I believe that we should keep going this way and see if there are any objections or any potential changes people want to check in that's all, any comments? Thoughts on this plan for moving forward?

MM: I just wanna point out a particular difference which is some declaring keywords before field declarations

AK: its on KG's list, second one

MM: No , that says var, what im saying is, there's a.....I'm going to drop the point I can bring this up as we persue these things...

DE: Let's get in touch between meetings, if anyone else wants to be involved lets be in contact. im preparing as much as possible so we can get further. any other comments?

AK: So I want to second DE's opinion. I'm also fairly confident with the stage 3 proposals. And I think yesterdays presentations made it clearer in my mind. It's useful for us as implementers to have implementation to know when this spec is more final. Mark has raised his hand as someone who is interested in considering some of the changes in classes 1.1. It would be useful to hear from anyone else who saw those presentations and thought "ah there's something useful I have to say today" Can you add yourselves to the notes so I can be in touch?

DE: I want to just mention that static public fields is also in scope as something I would like to reaffirm as the right path

#### Conclusion/Resolution

- Please follow up with Dan (littledan@igalia.com) if you want to champion carrying forward any JS classes 1.1 features, or have any feedback on this plan

## 10.iv.a. Weak References for stage 2

(Dean Tribble)

- [proposal](https://github.com/tc39/proposal-weakrefs/blob/master/specs/weakrefs.md)
- [slides](https://github.com/tc39/proposal-weakrefs/blob/master/specs/Weak%20References%20for%20EcmaScript.pdf)

DT: only two or three things. First off a big chunk of the presentation I did not go into was around the wasm stuff, we've been working 3 or 4 people there. TST eseptcially has been helping drive the ?? on this. so he is joining as a co champion. And there are 2 and hopefully 3 implementations Bradley Meck has an implementation last API and working to bring it to the new API. TST has a version in the SpiderMonkey shell. to be able to prototype and implement on top of that. my goal for stage 3 is to have a fully working interface that will talk to wasm and that will be some of what we work through so that we nail down all the issues that we care about but if you have a use case that is interesting and diffreent
I am interested in other usecases, Dominic has one for many of those what I would like is some real code and we can put them in the proposal. If you want an example please put into proposal repository.

AK: not to you and bradly,  BFS I want to make clear that you should coordinate within the v8 team.

BHS: we should coordinate

AK: We still won't want ot have that in mainline before ??

## 12.iii.c function.sent needs a champion

JHD: so I asked AWB on GitHub issues for the proposal of `function.sent` somewhere, his response was that he was out of the proposal writing championing business. Is anybody interested in picking this up and championinig it, if so great... You can ping me offline. However if nobody is interested in championing it we should question if this is still a problem we expect to solve in the language. Please let me know if you are interested in championing that

#### Conclusion/Resolution

- No conclusion recorded


## 10.iv.e Pipeline operator

(JS Choi, James DiGioia, Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-pipeline-operator/)
- [slides](https://docs.google.com/presentation/d/1eFFRK1wLIazIuK0F6fY974OIDvvWXS890XAMB59PUBA/edit#slide=id.p)

DE: we've discussed the pipeline operator before. Rather that having nested function calls you use a pipeline operators. A nice thing about the pipeline operator is that for this usecase today you would use method chaining. It's easier to reason about the flow of data in nested expressions and there's less indentation. A lot of programmers view what you would see at the top here as not even a feasable option. A lot of programmers view deeply nested expression as unreadable. Giving the chaining style is useful instead of using variable names. We actually have a few parallel investigations of pipeline operators. Given that this is purely syntactic sugar, I thought we should make the right choice for the syntax. This isnt something like BigInt where we can reason about, we're really thinking about erganomics. We're really thinking about ergonomics. They way we get better ergonomics is with user feedback. We're trying 3 different proposals. We're trying the minimal proposal called the "smart pipeline" proposal. We're also working on the F# pipeline proposal. And there's a minimal proposal. Both of them are collaborating together on explainer texts and babel transforms. Sometimes in this room, discussing proposal alternatives can seem contentious, but these two seem to have formed a good working relationship around comparing the alternatives. Minimal Proposal: Arrow functions require parenthesis due to complicated grammar issues. Not requiring the parenthesis causes a SyntaxError. If you use a property access in the pipleline, the receiver of the property access is used as the `this` context. We've also talked about async/await integration. This minimal proposal bans await, so later proposals can use it. So for this there's explainer and specification written. It's at stage 1 presented at TC39 meeting last September. Arrow functions in a pipeline is a syntax error: `a |> b => c |> b`. There is an issue with precedence, requiring parentheses to disambiguate. In this proposal is just a syntax error. I was also talking about await in pipelines, it's unclear how we should handle this. There are two proposals, either wait for the value it has to be a function, or if we wait for the return value. if you just have in your pipeline an async function, it won't really work if you have synchronous function after it unless the following functions in the pipeline expect a Promise as an argument This was a requirement that was made in previous TC39 meetings. There were two proposal made, let's show one by one.

YK: I have a clarification question. What do you mean by "fixed" context in the pipeline

DE: For `x |> y.z`, the semantics are, evaluate `x`, then evaluate `y`, then get the `z` property of `y`, then call `y.z` with the argument `x` and receiver `y`.

The two problem that the two problem the proposal is trying to solve, it's some bigger problem, the pipeline operator always passes the left operand as the sole argument to the right
In previous meetings we discussed this idea but it's sort of confusing.
and the other one is the await integration. Let's talk about the F# pipeline, the two elements are this arrow function syntax and the await integration. The way that the arrow function is specced out, they have this narrower scoping, in general => binds narrowly until the next |>

WH: What's precedence of the operator relative to the other code in the slide?

DE: It's a bit difficult to describe in the air; you can find the patch on GitHub. Please open a issue if you see a problem to discuss further. Maybe you'll find that the semantics are infeasable. Both are possible and there's a default that is chosen. Michael Ficarra was previously skeptical about this path but found the patch to be a good solution. In this proposal await is kinda treating like a pseudo function. We allow it to use it wherever a function may be; it doesn't have to be in between two pipelines but can be at the end. And of course this semantics only come from when you are in a async function--otherwise, await is treated as an identifier. So the status of the F# proposal, there is a Babel implementation but there's no full spec text yet. The specification is contained in a couple different PRs. For this "smart pipeline" operator, Joshua went with a different idea. Hack includes a pipeline operator, it's based on $$ specific token, but we're thinking on using hash. We we were discussing it on the bug tracker, the objection to the hack style is that it doesn't have the same ergonomics. Joshia's proposal supports both ot this syles. The grammar is a bit simpler than checking if it has the hash. (Code samples). Here you can see some things basically, only a few different syntactic things a permitted in the so called topic style. The attempt here is to avoid ?? cases.

DE: For me the most interesting thing about this is the method of having multiple approaches and elaborating them significantly. Joshua wrote a very detailed spec and is working on a babel implementation and he's very interested in feedback on this. He's done a very good job in understanding the hazards. The proposal is rather complex though, the slides only describe part of it; he's dividing this into multiple features. So one critique of this is that its more complicated. I hope that this can be the start of the investigation. I want to come back to, what do you think of this as a model for thinking on proposals? So here it is longer and it is more labour intensive.. Get some early draft implementations, and get feedback on people actually using them. This is also an example of working with people who are not members of the community and attend community meetings, and in this case 2 people who are just very interested In this case, 2 people who are just interested in writing this feature, are writing spec and explainers, and doing all this detailed work which is nice. I want to think about how we can work with external contributors on future proposals.

YK: My question is, whether this or the inverse order of this will result in any of the steps being able to see a mutation from the previous step. [referring to something written on the whiteboard]:

```js
let x = func;
a |> mutate() |> x
function mutate() {
    x = other
}
```

DE: I was trying to clarify the evaluation order. There a few things that are in common between proposals. (Explaining code sample)

YK: There are two explanations of "fixed". Does this evaluate all of the references at the start of the pipeline, or as it executes?

DE: It evaluates references as it executes, with some interleaving.

YK: What about the external contributors now?

DE: The proposal started as the bind operator, `::`. This sat for a while, but there was some interest in passing the left operand as an argument rather than the receiver. From there, we were debating the "F# style" or "Elixir style" evaluation, about whether the left operand is passed as the only argument, or appended to an argument list. In this repo, they looked into several proposals. We didn't come to a consensus. One question is whether this would lead to a lot of currying. There are experimental libraries built to support the pipeline operator using currying. Axel Rauschmayer wrote a really good blog post on why currying isn't really natural in JS. We wanted to see if we could avoid currying, and we discussed RB's partial application proposal. These two proposals are trying to figure out if there's another approach besides the partial application proposal.

YK: thank you that answers my question

DH: First, just to respond to that, I think that's awesome. I think that people who aren't in the core committee doing exploratory and collaborative work rather than jumping into "bakeoff mode" seems useful.

DH: My question is, it said that the `#` placeholder subsumes currying. By subsumes, does it fully genaralize, or would it be used elsewhere?

DE: We can't stop people from doing currying. I don't see these as in conflict with partial application. Past community feedback was that partial application won't be here today, so we should see if we could do placeholder syntax inside pipeline. What this does is, it handles putting the argument at a particular place in the function call without currying.

DE: . One of these proposals are trying to make sure arrows are sufficiently easy to use, the other is trying to use `#` as the placeholder to solve the same thing. One is more minimal than the other.

MM: I want to bring up the issue of the punctuation budget. The punctuation overload of the language - we can look at Perl, and those unfamiliar with it - different people will eek out a subset of the language and stick with it. But they will use code from someone else and it'll be a different subset. We've talked about null coalescing, logical assignment, debugger operands, slice notation, optional chaining, and pipelines. The total number of new punctuation - all the options of adding private field - all new punctuation. We need to prioritize how much this imposes on new people learning the language. If you allow yourself to pick 2, which two would they be? Which are the two most important punctuation proposals? Maybe you think a budget of 3 is reasonable. A budget of 5 is not reasonable. We need to constrain ourselves. I am terrified how much we're adding punctuation wise. Considered individually many of these proposals may be good. In life, there are many things we want that are genuinely good that we do not buy because we cannot afford them.

DE: This is a really good point. We don't have an unlimited budget of punctuation characters and they don't name what they do. There are a few different things we can use to not break that budget. Some data sources we can look at  - do we _need_ a punctuation? Thats the state of public fields, they need a new punctuation things. Another data source is looking across programming languages. Optional chaining and null coalescing are across other languages. This gives us data about what programmers are interested in. I've seen comments about people saying how much cleaner their code will be with these things. If the optional chaining is going to clean up a bunch of these things then it may pay for itself. Similarly with pipeline if this is going to in practice enable more modularity with less monkey patching then it may pay for itself. I want to bring up another point about criticising this feature. What this means is a little bit vague, but some people claim, "the future is functional". I like elements like immutable data structures and the likes, but I don't think the committee can come down on one stance like "the future is functional". Part of getting involved in this feature is a nod to that community - its the first small step to other things like pattern matching which is also "functional". Neither of these have to do with immutable data structures so I feel funny about calling it functional - its a constellation of attributes though - such as not passing the left operand as the receiver. One of the goals of functional programming in JS is avoiding `this` which is seen as confusing. Theres been some discussion leading up to this meeting where members are discussing the previous :: bind operator proposal, and the tradeoff of passing as the receiver vs the first argument; serving the functional community is what led to some of these design goals.

MM: So I have a lot of reactions about the particular things you said. I feel like you missed a lot of the things I said..I feel like until there is some evidence that people learning the language are not --

BT: This is a general topic about syntax... can we talk about this proposal...

YK: The whole point MM is making is about syntax budget.

MM: The sharp sign thing. The first minimal proposal has arrow functions. We've already both ed to put arrow functions into h the language. Sharp sign doesn't solve a problem other than "how can I type code with fewer characters"

DE: I share your intuition. I think the F# proposal is my favourite. I am just laying this out as a investigation.

BT: Tab Atkins has been waiting to talk about this with fairly well reasoned motivations of why smart pipe is a good idea which the slides don't convey. It'd be good if we could let him talk.

TAB: First I highly recommend you go read this proposal. Its an extremely well written readme. A lot of what I've seen in this discussions is not arguing against what has been proposed. The two major points: first the F# style priviledges functional programming style things for anything beyond the basic case. As soon as we go beyond... by piping a value into one arg of the function call you have to switch over to writing pure functions F# style or more FP shenanigans like manipulating how arguments are passed around. This isn't the way people write things they mostly write "light functional style" Smart pipes allows for this style of code for the majority of cases. You don't have to do function math or currying - or organising your functions to be maximally beneficial to this feature - you just organise your function arguments to whatever makes sense and people can just call it how they need to. F# ... allow alternate styles, its a handful of extra characters -a bit of extra weight. The two are comfortable if you have to the opposite style - but we should prefer the one that encourages the style most JS devs are comfortable with - so using placeholder slots rather than argument ordering shenanigans. Smart pipes mixed with the variadic pipelines totally subsume already 3 other syntax proposals this committee is interested in. The method abstraction +> a.b..... 2. It replaces and improves on partial application, You have to use the argument exactly once.If you're using 2 the first one had to .... The slide Dan passed over shows how using topic style, you get the benefits of partial application and you can arrange arguments, use it multiple times, use an operator instead of a function. Functions are easy to reason about but operators are also important! If you don't allow operators you end up with functions like lamda add which is much less convenient. The point is all of these extra things which take in extra proposals and making them part of pipelines - its all very natural. They automatically achieve other goals. Natural every day way we'd use them. its a fairly light weight synrax proposal that punches way above its weight class given the amount of conceptual space it covers - we can drop several other things.

#### Conclusion/Resolution

- No conclusion recorded
