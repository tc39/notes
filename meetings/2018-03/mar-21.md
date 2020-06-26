# March 21, 2018 Meeting Notes
-----

Waldemar Horwat (WH), Dean Tribble (DT), Mark Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), Robin Morisset (RMT), Keith Miller (KM), Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Adam Klein (AK), Sathya Gunasekaran (SGN),Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Bradley Farias (BFS), Thomas Wood (TWD), Alan Schmitt (AS), Sven Sauleau (SSA), Chris Needham (CNM), Edd Yerburgh (EYH), Jason Williams (JWS), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Conrad Watt (CWT), Philippa Gardner (PGR), Godfrey Chan (GCN), Chris Hyle (CHE), Lin Clark (LCK), Ben Newman (BN), Jake Archibald (JAD), István Sebestyén (IS), Brian Warner (BWR), Mathias Bynens (MB), Surma (SUR), Alex Russell (AR), Peter van der Zee (PZE), Maël Nison (MNN), Dan Abramov (DAV), Christoph Nakazawa (CNA)

Remote:
Ron Buckton (RBN), Leo Balter (LEO), Rick Waldron (RW)

-----

## 10.ii.c Hashbang Grammar for Stage 2

(Bradley Farias)

- [proposal](https://github.com/bmeck/proposal-hashbang)

BFS: Basically you can have the first line being single line comment, it's not available in function body. We could allow `eval` but i'm not sure about that, I just wanted to bring it up because people could have opinions on that?

KG: If we went for it with the class field proposal as it currently stands, it wouldn't actually be a problem to have `#.a`  in `eval` it might conflict but i'm not sure if this is an issue

BFS: Are we allowing private access state within `eval`?  We don't have a valid production plan within hash.

DE: In Joshua's smart pipeline proposal he uses hash as a placeholder. And place holder means partial application in this case. His proposal doesn't specifically permit this, but if we allow the placeholder to be used in the `eval`. You could have `x |> eval("#!")`, it would be a different interpretation of the same syntax. (Note: DE got this backwards during the meeting, #! vs !#)

BFS: to my knowledge all placeholder syntax should be static.

DE: we should treat the placeholder like yield.

DE: I'm not arguing that we should allow the placeholder in `eval`. It doesn't inherit the same placeholder syntax, I also argued the same thing for private field's that they are not accessible from `eval`. However, we ended up permitting private field access in `eval`.

WH: There's enough noise (side conversations) that I can't hear you

DE: let me write the example on the board one moment

BFS: there's some concern with the other proposal we're going to talk about that. If we allow #! in `eval` there might be some confusing with ???, or also I tried to prevent private state, also using the hash, from being used in `eval`. because `eval` is a string my arguement is that we can't use it there because we cannot statically determine if it exists.

DE: Even though this is my intuition also, we should consider the applications here, since it falls outside of the applications we've seen before.

MM: We have some parameterized productions in the grammer and then other things we get the context by saying that its allowed in the context .. ? does direct `eval` (we are only talking about direct `eval` here) does it ever inherit parser parameters from its context? Does direct `eval` ever (permit?) a context with this grammar?

DE: There's just a lot of ways we can specify this kind of things

MM: I'm asking about clarifying the precedent

DE: The answer to that narrow question is no, not that I know of. The spec formalism is pretty flexible, but we can be pretty formal about what we want the language to be.

BT: I don't think we have a parser parameter that assigns context to `eval` but (?)

MM: I knew about ???... As Dan says, we have flexibility about how we can specify it . but that flexibility should be coordinated with regard to which static context we want.

MM: I dont think that we should use the parsing parameter in direct `eval`.

MM: It gives us guidance but it doesn't gives us a decision

YK: I might have missed this before I got here: Why do we need to support this in `eval`? I understood the usecase for this as being that node supports it. since node supports it right now, so we wouldn't  break it anyway. This would be a valid use case.

WH: That's a good reason

YK: What I was thinking is that since the only reason to do this is to communication with a shell, and since `eval` is not used inside of a shell, so. the anwser I guess it you read the file and you `eval` it..

MM: All of those evaluations are indirect
However it would be extremely weird.. I think the hashbang, having that be part of script or not based on having parse ?? semantics would be good. Parse node(?) production.

YK: I guess it goes back to the first part that I said, the issue we possibly have is place-holder semantics. Given that this is already a defacto standard in node,

MM: After this discussion im strongly in favour of this proposal be phrased as script, direct-`eval`, and indirect-`eval` continue to have the same start production, and this start production would now accept an optional initial hashbang.

BFS: I'm asking for stage 2 on this, is there consensus for that?

WH: `#!` would be a lexical token?

BFS: currently it is as a single token but we can specify it as two if you desire.

WH: No, I do not desire for it to be two tokens. It should be one token. It was unclear because the proposal doesn't properly distinguish between the lexical and syntactic grammars.

JG: You should ask for reviewers.

WH: (will do it)

BT: sure

#### Conclusion/Resolution

- Stage 2, WH & BT to review



## 10.ii.b Richer Keys for stage 1

(Bradley Farias)

- [slides](https://docs.google.com/presentation/d/1q3CGeXqskL1gHTATH_VE9Dhj0VGTIAOzJ1cR0dYqDBk/edit#slide=id.p)

BFS: I want to discuss a proposal pair to improve creating keys for maps and composite keys. I tried to point them under the term of richer keys. We have some problems that I encounter somewhat frequently with arbitrary nested maps. Multiple object that i'm using as a composer keys. We also don't have any way for nested maps when they use synthetic keys. You have to manually key if you extend map, and if you extend map you have to crawl-up the prototype chain and use the incorrect one either by accident or by design. First thing that I want to talk about is creating a composite key, not value types. you can think of this as a variant of symbol.for. If you pass it any sort of references, however many there are, it creates an identmpotent cache symbol, and it will return the same symbol every ttime, it will return the same symbol back every time. its something that can be passed back between realms. I do think that the order of arguments matters, basically allows us to have duplicate objects within our value list. This, importantly, should not be treated as a solution for value types. it does not have any way to get values back from your symbol. So once you get your symbol, you're essentially weakly holding on to those objects. It has no way to get your value back from the symbol. The global symbol map is weekly holding onto the symbol via this value change. So what does this look like?  Given two object a and b, we can create a composite key. Called Symbol.compositeKey, so pretty simple. and then we can use it as a key on an object or pass it into a regular map (not a `WeakMap`) . we can discuss if this should be a reference type or (..?). We can use it as a reference type or as a symbol, so that's fine. Whenever I go and I set O key, I create a new key with the same compositeKey of A and B. I have access to both their objects, but I can't reproduce the key, but we can still get access to this when using ??? and it can be GC'ed at that point.

AK: previously you said something about realm can you say what you mean?

BFS: I want to skip over that for now

MM: the symbol corresponds to the identity of a, so the symbol composite key of AB will be different from BA

BFS: Correct. The order is important and duplicates are allowed

??: The symbol corresponds to object-identity at that point.

BFS: Correct it's identity

YK: It's always an object ???

BFS: So we can't put a symbol in a `WeakMap` as a key, so lets talk about Map?

YK: That was a clarifying question, so at this point I will wait and say. TL;DR I am unsure if this is the right mechanism, but I will wait. We can't use symbol.for because it does stringify it's arguments.

BFS: It's sane to me to have single argument string to be equal to Symbol.for. Once we talk about using primitives in this composite key we have to be careful about GC because we essentially are keeping an idempotent thing around. The global symbol table isn't specified

BFS: The companion proposal I am suggesting to this, "companion key" its a mapping function for when you are having a custom keyed collection. it returns any value and could be a reference to an object.
We can bike-shed the names forever, which I don't want to doBFS: , Its a generic API, any sort of keyed collection sets I'm saying are keyed based on the identity. You can return any value, could be a reference to an object, I could have A map to a different object such as B

BFS: S: I could be argued that you want to have the original key passed to set for entry for keys, but I think that would just keep them alive when it's not needed. I can't think of any use cases where you need the original key (but I could imagine the opposite direction). If we return the original key, we can reuse the entry keys to reuse set and get. but if we return the synthetic keys that may not be true, so im not sure how to tackle that at this time, this is something for future investigation. So right now I don't think we need this on weak collections, in use cases we could probably figure it out. If it is a weak collection, we have to return something like adam said with a lifetime. doesn't have to inherit from the object protoype. ...? basically it is a mapping function, here we have a create user function. im using the email as a primary key.

YK: I understand your proposal, that allows symbol to be collected

BFS: Any sort of itempotency is going to prevent collection.

YK: I think that the use case that makes sense for me is to create e a weak key that can be used in a `WeakMap`. so you have a composite key and you want to put the composite key in a `WeakMap`  allows the composite key to be collected. I think there was some aspect that I didn't fully understand about collecting semantics. can you explain that?

BFS: So to reiterate, the symbol.compositeKey idea does not allow the symbols to be collected, until A's lifetime (??) has been collected. Since generally you're going to be putting them in a map or something, so they'll be held and you'll manually have to dispose of it you'll have to manually dispose of it

YK: so you haeva symboe that contains several object. once those objects are collected there is no way to get that back. so the symbol cannot be collected.

BFS: Correct. It can be collected, in the reference implementation and the spec ??? are collected.

YK: but in this case that symbols is strongly held by some other map.

BFS: I'm not sure of that because you're storing it in a Map.

YK: but it sounds like the pattern that you have in mind is that you create a symbol in a map, and then someone else comes a long and makes that same symbol and uses it again. From my perspective that use case is just better described as a `WeakMap`. The use case that make sense to me it to turn the ??? into a `WeakMap`.

MM: It took me back to why symbols themselves can not be keys in `WeakMap`s. I'd like to make a third point. Why symbols themselves can't be weak-map keys. I remembered symbol.for and its the same issue here. If the symbol has a unique identity, then when the symbol is lost, the association in the `WeakMap` is lost. However, if the symbol can be recreated from data with `Symbol.for`, then we the `WeakMap` can never drop the association because it might still be looked up. Likewise, in compositeKey on an object identity, when the object identity is lost the composite is lost. The problem is that this proposal (for very good reason) also accepts values as arguments to compositeKeys, in which case the same compositeKey can be recreated.

YK: I think the composite keys have the same relationship as the original keys

MM: But, are you suggesting–I'll let Bradley speak to the details of the proposal. but My assumption is that the purpose of this proposal are strongly against having a big semantic difference between object and value arguments

YK: Right, that's not what i'm proposing.

MM: I think I can reduce your question down to the symbols themselves, we could have allowed symbols that are not created by `symbol.for`

YK: I dont think symbols are a good mechanism for this.

DE: I wanted to thank you for iterating on this proposal based on the feedback. I really liked some of the recent changes like reKey used to be called hash, and that was really confusing. It seems like compositeKeys are a really core feature. I don't quite understand the memory leak issue, but it seems like something we should continue to look into. But to me the composite key seems to solve a use case that comes up in situations. To me the composite key seems to solve a pretty common use case.

BFS: I only have a couple more slides, I expect this to be some kind of composite key destructuring or ?? With this, we need to be careful a little bit, if we have all these things we've been talking about, GC and all that. We need to be sure that when people are doing these, that we can have good intuition of how things CAN be garbage collected. In particular, if a single life time object is collected. the entire key - the path to it, the composite key is destroyed. for example I have this example with x and y. I only need one of them collected to make the entire symbol to go away. Likewise if X is some disposable object ??. Once a single object is destroyed we can destroy the entire path to it. Since order is important, you really want the object references to be invalidated. That's actually a bit tricky to do. its not in my naive implementation but it is doable I think.

MM: What do you mean by destroyed in JavaScript?

BFS: It's allowed to be collected but its no longer idempotent you can't get access to it.

AK: Its unreachable?

MM: Ok, I am very confused

AK: I'm not sure this is important. I think it just falls out of how its specified. I think you are reiterating something that is logically implied by how it is specified.

BFS: Let me try to rephrase, so once a lifetime associate with this symbol we can remove this symbol from the global symbol table.

AK: oh I see

MM: only if no one is holding the symbol right?

BFS: no we can remove it eagerly

MM: I see but nothing can return to it. I got it

BFS: you can't reproduce the symbol

JRL: the rekey function is being called with the key of map.set by default is that correct?

BFS: It does nothing by default

JRL: How is the rekey called?

BFS: I haven't specified that. Calling `map.set(key)` calls rekey with key to get the finally used key

JRL: the internally used key is externally visible through entries?

BFS: Yes

JRL: why isn't the code who calls map.set creating the composite key before calling set (eliminating rekey)?

BFS: Because I've tried to get people to use that multiple times, also even if you do something that is also a solution for extending map which has these problems. Lets say email map. then I have to reimplement all the functionnality of map and doing it manually to all these places. it seems a little grunt-worky.

JRL: My second point: are the keys only objects? I'm trying to do this in Babel, and my first thought is to implement this on `WeakMap` (that points to another `WeakMap`, that points to another `WeakMap`...).

MM: so it is a "weak trie"?

BFS: It is not a "weak trie" because it has to have reference to value types

YK: ???

AK: I wanna go back to what you were saying about subclassing. it seems like subclassing seems like a .. approach instead of using rekey.

AK: That's wasn't it

AK: subclassing gives you the ability to do that

BFS: This is very tailored just for changing the keys though. If they want more behaviour they can do more.

AK: thats exactly my point. this is tailored to something very specific that can be done in user space. in comparison to composite key, its easy to make a composite key implementation that is leaky.

BFS: Mine is not (Laughs...).

AK: rekey seems more... specific and not generally applicable while this seems more significant. I would prefer not to have rekey.

BFS: can you say why you would prefer not have rekey.

AK: because it's narrow, it doesn't do all the things.

BFS: If there are more things that we wish to add, I'm perfectly fine with that.

MM: composite key has a compelling case for standardization, because its doing something thats very hard to do for yourself. reKey is modifying the built-in map and inserting an extension mechanism by extending the API when the built in map is already specified to be extensible by subclassing, now, I'm not a big fan of subclassing but I agree in this case that there is nothing hard about the user using the subclassing mechanism, to get the extension that expresses this feature as a subclass of map so there's no reason for reKey. There's no reason for rekey to complexify the Map class itself, rather than come in as part of a separately complex subclass. Leave the superclass simple.

JHD: The reason is, ill use an existing class, is it possible to ... positive and negative zero because map.prototype.set.call bypasses ??, it so in fact, it is impossible to create a subclass that can specify this behavior. I'm not specifically talking about reKey im saying in general subclassing Map and Set can avoid modifying the built-in...

AK: thats a missuse of my concept of subclass.

JHD: None the less its still something that's impossible for me to provide

AK: I can also hide the implementation detail and hide the map...

JHD: You can then wrap and you can provide it then it because very difficult to get right.

AK: Your point doesn't apply to rekey...

JHD: you can subclass it as a reason not to modify the built in. Then the subclass has to be adding capabilities, and when the built in does not provide that restriction between negative and positive—its not something you can do

BFS: as a counter point it could be seen as desirable to make subclasses as the standard way of making this available. sure if its rekeyable map and `WeakMap`. I would still like to see this feature possible.

BFS: Asking for Stage 1, so if we need to add features or change it to a subclass that's fine

#### Conclusion/Resolution

- Stage 1 acceptance


## 10.iv.b JavaScript Classes 1.1

(Kevin Smith, Brendan Eich, Allen Wirfs-Brock)

- [proposal](https://github.com/zenparsing/js-classes-1.1 )
- [spec](https://zenparsing.github.io/js-classes-1.1/ )
- [slides](https://www.dropbox.com/s/6krev2pzr55h5i4/max-min%20classes%201.1.pdf?dl=0)


RJE: A couple of things we want to discuss today. The classes 1.1. ?? The decorators to stage 3 ?? Rather than get into technical details about these, we might start off with a philosophical discussion. Given that there are multiple specifications, we should discuss whether one supersedes another, etc.??: Can you clarify what you mean

BT: Can you clarify what you mean by a philosophical discussion?

RJE: The idea that some of these things have been floating around for some time, so we should decide whether they can be reconciled...

AK: I would like to hear the presentation of the new thing

BT: we can discuss the actual proposal but there might be higher level things that we can discuss in advance to that. such as in what ways is the process broken in some ways?

AK: I worry that might take all our time

BT: but if we don't then we might discuss it interleved with the technical discussion

YK: I have a smaller version of Brian's question: what is the proposed resolution of the to this spec.

BE: The proposed resolutions address both the concrete and the abstract...

BE: Take this thought experiment; think about and reject it. That's fine, I think we should just present it and talk about it first. OK, I'm a late comer to this. I think Allen pinged me about this, I think others are aware of this. The history goes back very far, the first TC39 meeting ever in November 1996, Netscape took the lead, and we had a proposal at that time for classes. We had lots and lots of false starts. We had a problem with the baggage that classes have from related languages. Adding them with prototype inheritance is problematic. We almost dropped them from es6, that would have been a disaster—we did it by what's called maximally-minimal design. since then we have classes as a building block. I think what might be said is we have gone in an independent path lead by Babel and other transpilers. And maybe we should back up. I'm presenting this on behalf of Kevin and Allen. we have non modular properties, cross cutting concerns. its treacherously easy to lose some of them as you add to the language. Making sure as we go we keep track of these concerns. We want to minimize the kernel, but its all easy to say rather than to do. One of the suspicions I think some people have, is that we've lost that with classes. We probably need to try and minimize global complexity. We should probably need to take another trip around that. and take a look at what we should maybe look at what should be taken out. We have a habit in the committee, which is quite large now, that makes it hard to make more minimal proposals. I don't have a strong position on how this proposal relates to minimalism. If we have any problem in getting down to any dependent path that doesn't optimize for complexity. We should look at alternative proposals even if they're too modest, too small, too simple. It can be a useful thought experiment. So I hope this framing helps—we should be conscious of what is going on. Reluctance to break consensus is a great thing. This is going to take us back to
some goals and some anti goals. This is word salad—I'm not going to read it out. Allen and Kevin, in particular, want to find a new way forward for, the essential parts of the class which are missing now, so lets get into it. This is a little bit preliminary. while proposals that are early implemented for getting feedback, ultimately the committee is also going to dispose of things in a way that the implementations have looked into and not just going to move a proposal that is popular only for that reason. There's been controversy on twitter about this, like "how can you pull back on a stage 3 proposal?" its happened before. We can always pull back from a stage-3 proposal, so I want to make sure that is not controversial. This proposal form k and a has hidden names, per instance encapsulated state .... (see slides)

(presenting slide showing `class Point` implementation example)

BE: This example is helpful to show pretty much everything that is in this proposal. it also shows the integrity of this design—encapsulation, for example.

WH: (Asking about Brendan's slide) Did you mean to say `another.brandCheck()` instead of `another->brandCheck()`?

BE: Yes, that's a bug in the slide. If you use dot then you will get a reference error or call the wrong brandCheck function.

WH: This is a very telling bug.

(discussion about contents of slide, correction noticed)

BE: There's similar issue with hash names.

BE: this looks a lot safer than the hash. if you leave out the hash you have problem. Waldemar what do you think?

WH: I have lots to say about this but I am waiting for you to finish the presentation first.

(presenting slide "a simple example: add a hidden method")

BE: This is just showing a minimal case of an instance variable. You go along showing a hidden method, and a static initializer. I suppose the idea is the outer frame bound. I think one of the most appealing parts of this is not the syntax, but the lexical bodies being hidden. you could have a computed property name, ie `["foo"]` and have `this.foo` The meaning of this is radically different. I was saying that there is a missing illustration of how computed properties are ... ? Polyfilling allows this.foo as a static initializer, seems like a problem. What this proposal tries to do is get away from this. and use lexical names where possible. When referring hidden names is where you have to make a choice—could be .# could be -> .

BE: we realized any kind of shorthanding doesn't work because of what people call the "ASI" problem. you would need a semicolon before a line that starts with an instance variable access.

BE: `#` has the advantage of using it without a prefix. The disadvantage is aesthetics .

BE: There are a lot of issues on the github issue like "why var", though the choice of token is not really core to this proposal; we could use another name.

BE: public fields are left out of the proposal.

YK: clarifying question. I read their documents carefully and my instinct is that they have to reject public fields.

BE: I think Kevin or Allen might want to reject them, but I don't want to make that case here. We don't need to get into that. You can get around that the long way. We are not adding new kernel semantics. There's nothing novel about the syntax proposal. I think this is a fruitless debate. I'm going to advocate against all appeals here. Public fields desugar. This is probably not a surprise given Allen's small talk background. Why use var? Short, love it or hate it, its already there.

BE: I think hidden is too long but I think it works as an intentional keyword.

(more examples)

BE: This proposal does want instance variable to be imperative, not declarative. This proposal does want its variable to be per class, not inherited. This is something I think implementors have asked for.

BE: Again, we already have properties, I think the question for the committee is do we have private variables with the hash syntax or do we do something different. Is there anything else here I want to emphasize? Apologies for the word salad again. The earlier example had a branch x, and the idea is that engines can hoist these to optimize. this is up to the implementers.

MM: With regard to what you\'re saying now, is there any difference between this proposal and the private state proposal?

BE: Dan you should help me out here...

AK: The answer is "no", there's a slight difference but the methods are the same.

BE: Hidden methods are statically determinable.

AK: the only concrete difference here is the absence of brand check for private/hidden methods.

BE: I'll work in this proposal

DE: Allan initially proposed this semantics, and this is what I started out on the private methods proposal with. However, there was a lot of convincing committee feedback (e.g., from MM, KG) that we should treat them as non-writable own private fields, so I changed the proposal to that.

YK: Are the methods different in any way other than the brand-checking?

DE: If we go with this strategy, this method static branches do not encounter the issue that we saw with static private methods. but we had the objection that this would not be "methody" enough if they were missing a brand check.

BE: this proposal does not have a branch check.

DE: Methods have a brand check in the current private methods proposal, on the other hand

WH: In this proposal calling a method ignores the left side of the `->`, so that you can call an instance method on anything and still get your enclosing class's definition of the method rather than the instance's definition of the method.

MM: It doesn't ignore it, it passes the this, and other than that it ignores it.

WH: That's very strange.

BE: Dan, you defended that position.

DE: Which position?

BE: This proposal, these semantics.

DE: Personally im not sure that the brand checking is that important but it also seems more ok. If this is more intuitive for a chunk of the committee of private instance fields that does the checking I'm ok with going that way. From an implementation standpoint, (from what I could tell from talking to implementers) either one would be ok. The brand-checking proposal will be pretty analogous for what you gave to do with optimizing for inlining methods.

BE: Runtime optomization burden is the same.

YK: It fits as the standard static private property. a problem that we have been dealing with lately is that static private methods do not work well with subclassing.

DE: Because the subclass doesn't actually have the static/private method

BE: I think that's also a motivation

AK: I doesn't help that much because it doesn't access static private state.

DE: There's been a variety of intuitions about what hazards are hazardous. Some people view static private methods not working with subclass receivers is worse than ... ? So for that intuition switching to these (no-brandcheck) semantics would address the concern. Other people view them as both being significant.

BE: This is a different design choose, thanks for bribing up. Class initialization blocks: I think this is uncontroversial.

DE: We will discuss it later, in the static public fields presentation.

BE: This slide is worth calling attention to the unbulleted items at the bottom (behinds the scenes slide) -- you can resolve hidden method references statically.

DE: So to answer this question, Without decorators, the methods are already statically resolvable.

BE: You need to partially evaluate a brand check or ..?

DE: What I mean is, without decorators, when you call a private method it's already lexically resolvable; the method is a non-writable part of the field. but you still have to check when reading the method of the object that you are reading  the right brand.

BE: Interesting...

DE: Without decorators, it's statically determinable, though we lose that property for private methods in decorated classes.

BE: We should talk about decorators because this is a composition issue that I thought would come up. we should discuss that. ok. in spite of the backwards presentation. but I think people get the idea. this isn't as far a long as other proposals but I think its interesting as a maximally minimal solution. This is not a mature proposal to the degree for the stage 2 or 3. I think if we keep blazing this path of taking (talking?) compiler implementations as the way forward it is more likely that we will make a mistake.

WH: What happens when you nest a class within a class. would you see the outer ones as well as the inner ones?

BE: My understanding is that you can see all the outer ones.

WH: There is no way to get the shadowed ones? ok

DT: In your example, where you had a dot vs arrow confusion. That seems like a pretty plausible bug to show up pretty often. I'm wondering whether you can't really tell if its a bug or if its what the programmer detected. Do you have any thoughts on preventing this class of bugs?

BE: There is a benefit, if you ever use the arrow to get a hidden name that doesn't exist, you get a static error. In this case you'll get a runtime error or something similar. I think this is true of hash as well the latter error of using dot without the hash. And that is analogous

AK: There's the debate whether it's significant

BE: I have an intuition that if you use arrow for hidden names and instance variables. especially people who have a background in hidden and .. ??

AK: you talked about the this.foo and the this.['foo'] initializer. Another hazard, that particular hazard has been discussed by the committee many times. The combination of those discussions and community feedback and use of that feedback in the wild, got the committee to consensus that it was OK. I just wanted to say it's not a new example.

BE: Agreed.

YK: I read the proposal in great detail, and I wrote a summary. one thing that I did was make a table that showed the syntactic difference. It's now clear to me I really like the fact that in the current proposal definitions and uses are analogous. (and I agree that we can change any of these names) but `->` is how we declare them here, previously, `#` is how we declare them and `#` is how we get them. here in this proposal we have arrow for read and write and invoking, and var or hidden is for declaring. and in the hash proposal it uses a single syntax for all of these.

MM: The same syntax is used at the declaration side and the use side

YK: and at the invocation site.

Yes thats a difference for sure, this claims to be more orthogonal in concepts.

BFS: One thing that strikes me about this proposal is thatI have trouble with the mental model consistency when comparing it to both public and private fields in this proposal. You said these are instance variables basically, its a difference design but I think one of the advantage of the current field proposal, they have no new kernel behavior, they do use define instead of assign and you need to be a bit careful about this. The current staged proposal is more like a minimal proposal, that also draws an analogy between public and private.

BFS: I have some concerns about scoping when you nest things and In particular, you delegate up to whatever is not shadowed, I think this essentially may solve some use cases, but it isn't addressing all use cases. And the semantics are different enough that I don't really like comparing the proposals I would prefer to treat them as different paths we can take but have 1 supercede the other

BE: Can we try to break that down? I agree with you, but having some concerns is not actionable. I agree each scope can be nested? You're shadowing that's your problem. None of these proposals claims to solve all problems. I agree.

MM: I want to just clarify a pedantic point that because people keep using `WeakMap`s. Its a `WeakMap`-like collection.

MM: It has to differentiate assignment from invocation, otherwise you get a confused delegate problem

BE: that was BFS last point, MM is pointing out that what we have in the hash private field is that its an extension of kernel semantics. we need to be crystal clear about that. Neither one is preserving ES6 level of semantics as such.

MM: You could create a `WeakMap`-like collection in the user space. I would still say that the right characterisation of is a desugaring to that feature of ES6.

BFS: the point about define vs assign though is critical.

BE: One of the lesser arguments here is consistency with the use of equal, assignment uses equal as well... This proposal uses a separate selector, and avoids the define vs assign by construction,

MM: the only difference that I see is the lack of initializer. and then syntactically there are of course a number of difference. The fact that there is a leading keyword makes the equals less confusing. Declaring keyword variable name equals expression is never thought to have assignment.

(discussion of the leading keyword)

BE: The lack of equal there kinda takes away ...

MM: I actually like the lack of equal

WH: We're digressing from Bradley's point.

DE: maybe you could put yourself on the queue

BE: I wanted to pick up on that because theres a syntactic controversy on using equals.

YK: the little aside that we had is why we should reject certain aspects of features. .

BE: Public fields?

YK yes, you don't have to reject them, but if you do add them in the future what makes this nice would be less nice

BE: Allen or Kevin does argue that it's better to put the initializer in the constructor body.

YK: I think that whole perspective hangs together and we should consider it as a cohesive thing.

BE: The example that came out in one of the issues I mentioned.

BE: the example that I'm thinking of:

```js
class {
  [this.foo]() {...}
  x = this.foo;
}
```

BE: Semicolon! (Laughs). Those two `this` are not the same. but there are some particulars. there is no curly body, and just the square brackets. and being on the right in the public field. and this is a smell. Seems like mistakes were made, maybe its acceptable. I know JS has mistakes from long ago that we can't go back. Maybe this is something we should talk about today. In the GitHub issue people bring up with we could use this.

??: since you mentioned my name, we can make changes like that without worrying about breaking --

YK: I think we shouldn't worry too much about... well, I'm not worried about breaking users? more that we should not ignore this issue

i think that we should not ignore this issue.

BFS: Why can't we use curly braces in the initializer to symbolize that the `this` binding is changing?

BE: Nowhere else do curly braces change the meaning of this. If we adopt computed property names and public initializer and we will have to make a very convincing story.

(more back and forth)

BE: No where else in the language does square brackets change the meaning of "this" (refers to example above)

BE: Only this juxtaposition arrises in public fields and not in computed properties. no where do square brackets change the meaning of this

BE: Do square brackets change the meaning of this? We should debate that do square brackets change the meaning of this?

BFS: thats not exactly what im trying to state. im asking why a functional form ? I'm asking why do you think a functional form would you be any different. This seems very strange to me as an argument, and I haven't been able to articulate it because ive only seen this proposal for a very short amount of time.

BE: Forget this proposal, YK already tried to explain that

DH: I think the claim is that this proposal that brendan is presenting doesn't strongly claim but it sort of weakly claims that, it has the intention of perhaps never having public field syntax at all. What Brendan is saying, the reason is that's different from the proposal you're proposing today is that public field syntax is gone.

BE: It sort of gestures in the direction that we shouldn't have it

BE: wanted to avoid that controversy. I think the softest form of this is that in this case you won't need public fields.

BE: I'm not here to condem public fields based on this proposal but this example came out and it has nothing to do with ??? proposal

DE: I wanted to give a little more historical context to what we're discussing. As Adam mentioned, both the syntax and the equal sign. People were suggesting maybe we should put in some curly braces, we ended up coming to some consensus on this that = should be explicitly OK as a syntax. Its a cost benefit thing. There are other options than not having public fields. For example not having computed public fields. The other thing was, the use of equals and the keyword at the start of it. We were considering whether a keyword before the field declaration would clarify "define" rather than "set". An educator in the room. Ashley Williams, gave an interesting perspective that a keyword doesn't add that much. Rather people will just have to learn this regardless. The keyword just doesn't give explanatory power, for the issue that you raised about when things are evaluated, we discussed in the Munich meeting that this integrated idea for when things are evaluated, for example you might expect that static public fields would be evaluated in a strictly top-down, left-to-right way way. This really doesn't work for a bunch a reasons: first, the static public field maybe decorated and you need to coalesce getters/setters. The other issue was the static public fields had to have the class no longer in TDZ. So we really had to do all the other things to build a class. If we want to put expressions in these places, that's what we're buying into.

BE: If we have this reordering and staging, and decorators actually up the ante. We should look at the possible misorder,

BE: I dont think computed property names are something we can pull back, thats already in.

YK: clarification -- when we did the Munich ordering proposal We observed that there was only 1 place where there was any ordering at all. As a result there's no compatibility issue right? Today they run top down, so there is no compatibility problem.

BE: I don't want to get into public fields too much because its not my bag.

YK: We should really figure out the ordering before we start bringing up any other proposals

BE: Does anyone here have more questions? I guess we should get to this later...

(refers to the class example above)

KG: It seems plausible to me that we can make that first line an error. That this is the outer this and has nothing to do with the class. This is super confusing and does not seem like something that would be useful. (`[this.foo]` as a public method name)

BE: You want to have some ad-hoc incompatible changes. I think that's hard to do because you could also have something like this (refers to example)

YK: I think the current implementation, which in strict mode in modules is undefined.

JRL: It's not always undefined. It's the outer this, which can be defined by `.call`ing an enclosing function

MM:

a reasonable semantic change would be to ..?

KG: Which seems confusing, that first thing doesn't seems problematic, the only thing which seems bad here, is this having a different meaning depending on whether this is on the left or right of the equals sign. We can just ban it on the left and have no problem.

BE: Its a breaking change and its an irregularity.

KG: My claim is that the current behaviour is confusing. In the class body you're in the class, you enter strict mode.

BE: We have something that seems like it was regularly composed, but then there's this incongruity with scopes

DH: We're in the space of talking about a massive incompatible change

BE: What's the incompatible change?

DH: The whole proposal it's not actually obvious to me if a change to the scopes of computed property names is doable.

DH: We are discussing again topics that have come up multiple times. I just want to reiterate that there is some discomfort. The public fields are you know we have different context that have not the same as computed property names. We have sublty different contexts that do not have visual nesting. I've argued it before and I will argue it again, this is the nature of class syntax. Class syntax is describing a pretty compound construct with a pretty flat context structure.

DH: That's just sort of the nature of a syntactically more sparse syntax for describing a compound protocol. To begin with classes are already combing the se layers of static properteies and ... (properties). So you have to learn the different things that shift your context. Based on some of those signifiers based on prefix and that I think there is some budget in classes where you have to learn this.

YK: Its really a different point that I would like to make

BE: You can teach all this. Classes are like recipes with module functions, and there's a complexity there.

BT: I suspect that it will be hard to not wanting to reply if they're not in the queue. My concern is that the queue accounts for more than 15 minutes of discussion.

(discussion about what to do right now, 5 minutes before lunch)

YK: We've been discussing that we can make this more of an error. The natural form is

(demonstrating the following class on the whiteboard)

```js
class {
  [this.x]() {}
  static x = this.x
}
```

YK: `this` in this (:drums:) example is the same value. I think this is a justification for making this change...

BE: we had an example on the GitHub issue?

BE: If I understand right, with (?) property names in (?)

YK: this is the outer ??? It's small breaking change

oh I see you are talking about another breaking change other than the one we were discussing before

WH: I agree with YK's point but I think we're ratholing on square brackets rather than going into the main issues here.

JRL: IRC we trying to figuoure out the brand checking, you can literally call the function arrow branch-check, the arrow function doesn't automatically use the branch-check. I just wanted to point it out because it's on IRC

```js
"hello"->brandCheck()
```

JRL: This calls brandCheck with "hello" as the `this`. Everything "works", but it's weird.

BE: The arrow does not do a branch check. Basically you can do a string "hello" and the arrow will follow a brand check with ->"hello"

BE: It's unwrapped because of strict mode

KG: It just seems weird to me that you can lookup that method on random things

WH: My main concern here is that this is too complex.

BE: (joking) which this?

WH: Is this proposal meant instead of the decorators proposal or in addition to the decorators proposal?

??: will this be combined with the decorators proposal?

BE: I actually don't know

YK: The only thing I can say is that the authors of this proposal strongly disagree with decorators?

BE: There's a risk that this proposal is taken as such a clean slate that this blows up decorators as well as public field.

BT Its probably true

WH: We've had maximally minimal classes before. They were insufficient, so this is another attempt at that. However it's clear to me that this does not cover many of the use cases, so, extrapolating a little bit, I don't think this will prevent people from proposing more class extensions later on. Maybe someone is idealist enough to think that this will end future proposals for classes, but I don't believe it. What concerns me is what position we'll be in if we adopted this and then want to address the other use cases. Unfortunately it looks like we will back ourselves into a corner. One way I look at that is refactorings—the kinds of code transformations that people are likely want to do. There is a desire to use public fields, not just private ones. Dynamically creating public fields doesn't work if you want to attach decorators to them. The obvious syntax for public properties is taken and they won't be able to be made consistent with the private ones.

BE: Because `->` vs. `.`?

WH: Yes. And also because the syntax for private fields doesn't visibly mark them as private.

??: I dont like arrow because its buggy.

BE: I was asking why you think this proposal, other than the attitude of its creators precludes that...

WH: Public members would have radically different behavior from private ones. One kind of fields you must do declaratively, the other kind of fields you must not do declaratively. One kind of methods always do dispatch, the other kind of methods never do dispatch.

BE: yes

WH: It rubs me the wrong way.

BE: OK, let's put that after because I still don't understand the distinction you're making about public vs. private methods

BT: They can, certainly I think they will undermine what this proposal is trying to do.

WH: You are declaring private fields with var. so now it's--

BE: (continuing WH's sentence) ... "star wars". It feels like a mismatch. I agree with that sentiment.

WH: Looking at the refactoring cost of changing a method between public/private -- there's just so many pitfalls. You have to change all the dots to arrows. One you have to do declaratively, the other you cannot do declaratively.

BE: ???

BE: You still have to do the work for it(?). This is controversial and it came up in the GitHub issues too. Using the hash there is still a hazard, if you leave it out then it is a .name.

WH: I think of the `#` as part of the name of a private member. `->` doesn't have the same connotation and leads to more confusion.

DH: I like Waldemar's point, especially regarding backing ourselves into a corner. The proposal is that the slides said at the beginning and Allen had said on Twitter that we need to make sure we're considering cross-cutting concerns and looking holistically.

DH: So we've done all this work to consider cross-cutting concerns, "lets remove those from the discussion". That's the _opposite_ of cost-cutting concerns, that's not even thinking about them!

DH: If we only do a design that refuses to engage with these things than we can back ourselves into a corner (paraphrasing, possibly).

DH: It's still removing them from the discussion, and the whole claim is to consider  them in our design

DH: You building a broader and broader understanding.

BE: Then you just get max.

DH: I'm not claiming that there's any process that gets you perfect. I am claiming incremental work can get you further along. I don't think this process has been a greater upper bound process.

BE: Yeah, This isn't like a kitchen sink process, I agree with that.

DH; I really like the way that you frame this as a thought exercise, while i'm not comfortable with the proposal ??

BE: Considering this under a Smalltalk  halo, I think it's interesting to discuss, the arrow and the static resolution is interesting. I agree with brad

DE: So I really like this phrasing of it, I wanted to go back to  what we were talking about before with the intuition of arrow vs dot hash. The way I've been explaining this proposal is that "hash is the new underscore. Basically, like
basically its like a `WeakMap`". Private fields can be thought of as internal slots or as properties of a `WeakMap`, and the semantics in the private field case is a subset of the public field case (plus more exceptions). We talk about public and private "fields" because they are in correspondence with each other. We should make it clear to programmers that private is different from public so people don't get confused. I want to make the opposite point. So that developers can migrate between these things, they should be parallel. Developers who are currently using public can easily migrate their code to private. JavaScript programmers understand these patterns of leading things with underscores with intent to not make things visible outside of the class. This sort of intent in creating this analogy lead in a way that it took .... ? and copied it over and I agree with what ??? was saying that hash should be part of the name. is really sort of core to our model that we hope programmers won't mix it up.

??: If we only we could use underscore

DE: Thats a frequently asked question that I get about this proposal. It's clear that there's community discomfort with the hash. Multiple uses of the dot--one of them referring to public and one of them referring to private. This is why we need ?? site to make this less ambiguous. Usually the question after that is well why not underscore and the answer is that there is a compatibility issue. To the extent that this proposal is trying to address community feedback and intuition about what the interface should be, I feel like the arrow misses the mark. I think the intention from a lot of programmer is to use dot. Once you realize that the dot doesn't work, arrow seems like a good idea superficially but it doesn't do well with refactoring and clarifying this correspondence

BFS: He brings up the ? concern, when you refactor from a . to an arrow, a `.` is a reference lookup vs. an `->` which is a lexical lookup. We are not just changing how things are looked up. we are also changing what I fundamentally understand intuitively about dispatch. that brings up a new concern which I had a horrible time describing earlier. It make it more complex for me to explain. This makes it much harder to understand, it may be like this in other languages, but it seems much harder to understand this way.

TST: I would like to say something about how the proposal ??? One of my main concerns that I would like to make explicit is, to me but at the ?? box? I'm sympathetic to some of the changes proposed, and we arrivesd at the proposal as it is right now as we were influenced by many factors. A lot of it has been discussed earlier. It might be worth revisiting them, its also presented as a counter to some proposals that I feel are completely orthogonal to this one. and that feels like a slight of hand. I feel like the proposal should in this case go and argue against the specific proposal, rather than being one about the private state. and you mentioned this that this doesnt preclude these other proposals. you said that this should also be a reset and I dont agree with that.

BE: I didn't do that. I said it was a thought experiment. I'm not Allen or Kevin. Smalltalk design point ... I think they have sympathy for decorators, and I think that bringing up cases where we have allowed this mean things that it shouldnt might be worth the time that we spent this morning. I hope it was worth considering alternative design. I don't want to drag this out too long...

YK:  I agree with what brendand just said which is there are somethings. I agree with there are are things worth considering: first we consider whether we want rprivate methods to have the branch-check. we consider arrow syntax. Private methods to have the branch check,  we could consider arrow syntax but I think that is pretty unlikely, given dan's very well private syntax faq. (NOTE FROM DAN: This FAQ was written by Kevin Gibbons. Great job, Kevin! )We could consider making the `.#` a single token, not sure why this was so important to Alan. He did repeat it a lot in the issue thread. Finally we could consider ??? I think with the exception of the arrow syntax, all those other things I don't object to. From that perspective i'm happy that this proposal was presented

AK: I will spend 30 se. In this proposal from Allen and Kevin, `this` changes meaning in these places (points to whiteboard and explains the different lexical scoping of various `this`es)

BE: We've already got "this" meaning different things

AK: but it adds another one

BE: which we might want, I believe static locks might be desired? The static initliazer we could talk about it separately. We have problems where this changes meaning, it could be good if it was as small as possible

MM:  I want to discuss an answer to Brian with regard to Process. One of the dynamics that has repeatedly come up, the suggestion here is calling into question decision X and has decision X already some into consensus. and that happening again for decision y and decision z... Our process is not broken as long as we don't take our process too seriously. There are reasons why sticking with the process literally would be broken, but the right fix to that is not to try to design and write down an amended process. the right way to deal with that is to deal with it when it comes up. The particular thing that's triggering this for me, is that (and the reason I pulled my item from the queue) is that the consensus of decisions is perfectly sensible, for Y by itself and Z by itself. Is that the reason is that I called my item in the queue " the atom of consensus" But as stewards as the language as a whole, we are to put all of those things together, that have consensus back on the table to see if they still have concesnsus when they are combined together.

??: people said repeatedly in the repo that it was our process that lead us to that issue.

MM: I think that there is a bug in the process, but I don't think we should fix it by writing more process documents. The bug in the process is that it is all forward oriented. where as the visible pogress is adding stuff. The focus of the process are the individual proposals considered individually

MM: Doesn't leave us discussion time for the overall complexity of the language. It doesnt allow us to consider cross cutting issues between proposals and makes us focus on proposals individually.

BE:  There is definitely some fear that the committee will add too much. Never say never use namespaces—except for regards to  Common Lisp there's name packages

MM: There is a very particular kind of "never". There are safety properties that people come to depend on, and adding features can break existing safety properties. I really feel like it's a distraction from the classes that we're discussing. There's concern with focusing too much on safety features that it ends up as destroying an added feature.

the way we talk about safety properties is really important. I would love to formalize it so that we do not lose it over time.

BE: I don't think anybody should fear that we'll break your code, stage 3 doesn't mean stage 4.

DT: This is a follow up on the process item. A lot of current proposals are small incremental features and proposals, then we can see the need for something more general. Dean

BT: Is this a clarifying question?

DT: A lot of the current proposals are small incremental feature improvements and when we have enough of those we can see a need for something more general, so we can see that the process is actually right, and we can back out of those smaller things to do a more general change.

YK: I do want to say something about the process I think its important to think that the stages in the process represents the work that people are doing. So if by the time something gets to stage 3 there's been a lot of work not just by those in the committee, but by everyone in the community, just last month we had four different hour long calls with people in the community. I think its also important to remember that by the time something gets to stage 3, a lot of feedback has been gathered and we should remember that if we reboot at that state we have to repeat the process of getting all that feedback again. and then we might be exactly where we were to begin with.
We need to be able to say "the process is on the rails". We have to repeat the for example at the very beginning of the process we did the munich ???  and a lot of the discussion since then has been having the champions work together on cross cutting proposals. In fact, I guess I would say that a complexity really comes from how much we have explored the considerations. A lot of what seems complex about fields comes form looking forward to decorators and vice versa. I don't think it's either a problem ??? to reject them ???

I think its just a consequence, the opposite of those things not what everyone wants.

DT: you already addressed one of my comments. Allan bringing in Smalltalk things, so this thing is kind of important, but This isn't really smalltalky at all, this is a lot of new stuff that seems very thoughtful about JavaScript.

BE: I didn't say grinding the axe... what I find small talky here is not the variables, but the instance varibales being private in a lexical way. Not the details but the instance variable being private and not in a flexible way. That also feel smalltakly. Its more about philosophy of doing things in an integrety way and doing things through methods. I think its fair to say that thats smalltalky, I think its a useful point of view

#### Conclusion/Resolution

- Good to have these cross-cutting concerns thought processes; let's keep thinking things through carefully
- The committee was critical of several aspects of the JS classes 1.1 proposal, but there was some support for a couple aspects
- No known champion to follow up, so this proposal is not at a stage
- Public and private instance fields and private methods remain at Stage 3
- Will follow up on this later in the meeting.

## 10.iv.c Static public fields for Stage 3

(Daniel Ehrenberg)

- [proposal](https://tc39.es/proposal-static-class-features/)
- [slides](https://docs.google.com/presentation/d/1tbOgkZT_vxUAJiAOQ2tGjneZpkecHhI8wyclRLmgyHE/edit#slide=id.p)

DE: I wanted to propose the public static field to stage 3. It is syntactic sugar to make data properties on the constructor. In this example it's sort of equivalent.

```js
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp);
    // prints 42
  }
}
```

DE: Beginng a class body allows visually grouping, this static public field with other elements. Nailing down common semantics follow the pattern that we have followed so far. A big part of the reason why public static field are justified, they are heavily used in big frameworks like React. They expected properties to be set like PropTypes. Its not just react, its many many things in the ecosystem using babel or typescript to cross compile or transpile down to es5. The syntax here in this proposal almost entirely matches what's deployed and used of this ecosystem of transpiled JavaScript. Here on the right, I have this tweet by Kent C. Dodds:  (see slide) For background kent was a TC39 delegate for a while. He was in the committee when we was discussion this proposal. That shows how deeply in the community this proposal is.

(showing slides regarding implementation "Semantic details proposed")

DE: In the top left you can see that the initializers are run one by one, interspersed with adding the field to the class. In the bottom left, you can see that the class is actually in-scope in the initializer expression, which means that you can instantiate the class from static public fields. this is something we agreed on tin the Munich meeting. In the top right you see early syntax error. In general the scope of the thing on the right side is just like if you had a public static method, except that the arguments cause a syntax error. We create a syntax error if you access `arguments`. but aside from this it lines up with methods.

DE: In the bottom right you see what we were talking at the committee regarding set vs define semantics, instead of being something like static y = hello. You can see in this example, when we have a super class that has a static setter with the same name as the public static field in the subclass, the setter is not trigger, and this like all the other semantic details is just a logical consiquence of matching the pattern that we established in the stage 3 public instances proposal. On consequence of the fact that we're creating own fields, basically, if you have a class that extends another class it inherits as a result this data property. You can observe some things about some JavaScript prototype inheritance model.


The subclass can read the super class' property, but if you write to it later it creates its own data property.

As an example here we have class D extends C,

```js
class C {
  count = 0
  inc() {
    return this.count++
  }
}

D extends C { }

C.inc()
D.inc()

alert(C.count) // 1
alert(D.count) // 2
```

D prototype's is C. The count of C becomes 1 and D doesn't have a count property, because there's not reason it has a this property because it's on C. And this is exactly how it works with objects. if you use object literals and object.create which are all idoams that are well known from JavaScript programmers.

KG: this isn't the surprising bit.

DE: This **showing** is the surprising bit

WH: You are giving a rationale for why you proposed it this way, but I don't think the rationale makes it "acceptable".

DE: Maybe would it be fine to discuss questions and objections at the end?

DE: I'm making sure to say to the committee why I think this is acceptable. We examined several other possible semantics which you can find in the static classes proposal repository. and none of them really seem feasible for how this can works, and none of them seems really feasible. At the same time this is in the context of a proposal that is very well motivated. Again this is more things that people need to learn. In this case I think it's justified, none only because it's following ??? semantics, and not because of the cost of learning it. We previously discussed this behavior in the community, and we decided to advance the proposal based on this discussion. Right now the status of the proposal is that it is at stage 2 and it was retracted for reason that I'll discuss later. One possible mitigation is to make a possible syntactic `class.x` meta property which is more ergonomic for accessing properties of the class.So one reason why someone might want to write code such as this, is to have a more terse way to refer to the class that they are inside of so when you are within a class:

```js
class C {
  static count = 0;
  static inc() {
    return this.count++;
  }
}
class D extends C { }

C.inc();
D.inc();

alert(C.count);  // 1
alert(D.count);  // 2
```

DE: If you call `C.inc()` you can cont of the fact that's the class C, you don't even need to think about what's inside of the subclass, personally I would just refer to C if thats what I want to do, but maybe if you have a very long class them, then you'll want to do something different. To mitigate for the duplication for a very long class name, if you add some syntactic sugar which ??? `class.count` is always refering to c.count, this sort of hazard case would not occurs, the semantics that I would suggest for this is to always refer to the inner most class. there is som concern about how this would behave with static private. This proposal is not proposing static private, but if we were, we would suggest it refers to the class of which it's private name was. The case where this comes up is where you have nested classes and there may be multiple different classes you may be thinking about with this proposal you could get these Java-like static semantics.

```js
class C {
  static count = 0;
  static inc() {
    return class.count++;
  }
}
class D extends C { }

C.inc();
D.inc();

alert(C.count);  // 2
alert(D.count);  // 2
```

DE: where when accessing from this method inc() with the receiver  being D, you're still ?? If the communitee is intersted, this would be a really short proposal, not really bigger than Bradley's proposal and I would be happy to pair spectext and explainer for this. As part of the investigation into this feature a number of delegates and I looked into several alternative proposals. So for history, static public fields were initially part of this bigger package that included static private fields and static private methods which were all part of TC39? There were some issues discovered—or more broadly commnunicated to be a specific problem with static private field and static public field, so in an attempt to find a unified solution to .the problem the idea was to retract the idea of static private fields and static public fields to stage 2 In this proposal i'm just proposing that static public field should go back to stage 2 we want to think things through and identify road blocks so this is not just about moving this proposal forward. So one of these is static blocks. Brendaan talks about that in his proposal (calss 1.1), It seems useful, what static blocks give you is a way to execute some code in a scope which contains access to private fields and methods. One thing that static private fields would give you is the ability to execute things in such a scope.

```js
let get;

export class A {
  #x;
  static {
    get = a => a.#x;
  }
}

export class B {
  constructor(a) {
    const x = get(a);
    // ...
  }
}
```

DE: Ron has a proposal that I've linked to in the slides (https://github.com/tc39/proposal-static-class-features/issues/23#issuecomment-360599243 ). I like that proposal, you know there's a lot of different alternatives, Kevin and Allen proposed a different alternative for static blocks as part of JS classes 1.1. There is an explainer that I put up a while ago and that's another alternative. The only few things to decide on, if we want to go this way we can work through them.

DE: Static private fields and/or methods, we discussed it previously and we retracted because of the subclassing hazard. We've considered a few other options how to make this work. One option proposed by KG was to re-initialise private and public static fields on subclasses. Basically when you declare a static field, and you subclass, you'll reinitialize the field it on the subclass. There were some downsides to this, Personaly I'm not really excited about public static methods to be used as a state factory. There was also an idea from JRL about using accessors rather than own data properties. One downside to this that MM brought up was the Object. freeze would not  freeze them. This could lead to failing to protect communication channels. We discuss them with more member of the community, so even we went through the process with the hazards, we would end up not regretting the choice to use own data properties for static public fields. There's no feasible alternatives that applies to change the public/private field syntax. In the slides is an example for why you might want static private fields.

DE: Another possible follow-on proposal: private names declared outside of classes, continuing with the theme of what we saw in this example. This is a proposal that was, I don't know when It has started but at least was considered during the ES6 cycle,  back when it was based on private symbols. This little code sample here, is kind of an annotation for the current proposal. Mainly, if you make such a declaration of a private name outside of the class, and you make a function outside a class, you can refer to the private name from within that function. This way, you have a family of functions that are declared lexically that use the same name. A lot of JS programmers having a familly of functions declared that operates on object literals, they call it part of "functional programming". You can see on this slide that this outer #x, if you just have #x, it will just create a new private name in the class that shadows the outer lexically declared. It would seem like a weird deviation of lexical scope to modify the inner scope. There's some more thins to work through, how it exports to modules importing/exporting some of the scoping, and understanding whether its learnable. Understanding how it's learnable, this is why I pushed this in the past because I'm concerned that it could be difficult to understanding this concept of the name being a separate thing. In the gist (https://gist.github.com/littledan/d3030534cf96075d47228955828f932e ) you'll find more complete list of syntax. But now I'm thinking about breaking this into separate proposals.

DE: The final option is lexically declared elements in class bodies. Allen and Kevin were big advocates of this concept, which I guess evolved into their proposal to replace public field declarations with static blocks. In this example we use a token (`local`) to indicate a function which is lexically nested in a class

```js
const registry = new JSDOMRegistry();
export class JSDOM {
  #createdBy;

  #registerWithRegistry(registry) {
    // ... elided ...
  }

  static async fromURL(url, options) {
    url = normalizeFromURLOptions(url, options);

    const body = await getBodyFromURL(url);
    return finalizeFactoryCreated(body, options, "fromURL");
  }

  static async fromFile(filename, options) {
    const body = await getBodyFromFilename(filename);
    return finalizeFactoryCreated(body, options, "fromFile");
  }

  local function finalizeFactoryCreated(body, options, factoryName) {
    normalizeOptions(options);
    let jsdom = new JSDOM(body, options):
    jsdom.#createdBy = factoryName;
    jsdom.#registerWithRegistry(registry);
    return jsdom;
  }
}
```

DE: There are a bunch of details to work out for this too, ordering of execution if we include things besides functions. And then there's syntax, whether we should use the local token, seems like we're dammed if we do damned if we don't thats so far the discussed we've had. Function declarations don't have observable behavior when they execute, so they don't run into this ordering issue.

DE: Anyway, why we should advance static public fields  to stage-3: there's a lot of community feedback lpositve feedback for this proposal. its rare that we gt this kind of strong and actionable feedback. For example: When SGN tweeted about the implementation of instance fields in V8, a response was expressing excitement about adding static public fields as a follow-on.

DE: Valerie Young from Bocoup wrote the spec on Test262 which V8 passes. Previously this proposal reach stage-3 as part of the class fields proposal. This is in the context from Kevin proposal to re-initliaze static public fields. Aside from that, the accessor possiblity, I just don't see any interaction with other proposals that we need to look through and docuement. You can see this document here about which interaction and other ideas were considered. Stage three review will be done by Sathya Gunasekaran. There's no change in the semantics, or in the way they are organized, if there are any changes, they're just bugs that we'll figure out how to revert. Should we go to stage-3?

YK: I should just conflate the first two of my comments. The first thing is I want to express strong support for this proposal. Just last week we added a protocol to ember that is a static symbol protocol. I think there's a lot of use-cases for static fields. The second thing (and I'll just read what I wrote in the queue) is are we willing to have static public fields even if we might never have static private fields? Or is accepting this proposal tantamount to accepting static private fields in a big enough time horizon? If we accept this proposal are we ok to reject other proposal? Some people don't want to reject others proposal

DE: I don't know what you're suggesting we discuss. But I will answer the question of whether it makes sense to add this proposal without static private. I think it does make sense to add this proposal without static private. It seems like there's some cases where people ran into the subclassing issue; some people said that ,  so theres a difference between having a runtime error when the ??? and having a early error when you type the code not having static private, you will get a syntax error that says that static private does not exist. Potentially, it could even link to documentation containing idioms where you can get the same thing.

YK: I'm trying to find out if there are any people that feel strongly that if we accept this feature we have to accept private static. I want to make sure if people want to have that argument, that we have that argument now, rather than awkwardly in the future which will make it easier for us to get stuck.

DE: Ok, so does anybody want to make that case?

YK: Everyone would be ok to reject private static, even if we accept public static?

(general saying of no one making the case for private static being rejected)

Yk: I'm putting this across in an aggressive way on purpose because we're gonna have this debate later anyway

DE: We already have a queue of people objecting to things, so I think we should just go to those things first.

WH: This proposal makes me very uncomfortable, because it feels like we're offering support for even numbers and delaying support for odd numbers to the future. The thing that we should be defining (and the thing that we were defining until November) is static fields. If we are going to do static fields they should work analogously for public and private. There were some concerns regarding private fields with the `this` problem—it's the same `this` problem as in public fields. I'm (grudgingly) ok with it, if we have matching private fields. I don't like the behavior of how it interacts with subclassing and `this`, but the alternatives are worse. I'm not willing to put up with different approaches for public and private. We should keep the language simple and not special-case every intersection of features to behave unorthogonally.

DE: WH was saying the hazard here is the same between static public and static private.

WH: Yes

DE: I disagree, the hazard is a bit different, to encounter the hazard on static public, you have to write to the field. To encounter the hazard on private static, you only have to read the field.

WH: I know that, but that doesn't change the fact that that hazard is present on both public and private.

DE: OK, so we can just go to BFS

BFS: There was some talk about cross-cutting design and having a cohesive story for all these class features, I just want some clarity on Waldemar's side if the concern is a maximal design for all these features?

WH: Are you asking me a question?

BFS: yeah

WH: I'm not looking for a maximal design. I am looking for not splitting the public and private static fields into different proposals that go in different directions.

DE: I want to mention that we're only talking about fields here... We're currently in a state where at stage 3, we have instance private fields and instance private methods. Even if we added static private fields and static private methods, I don't really see why this proposal in particular is in a special place, also, I just wanna clarify about this hazard to make sure the committee is on the same page (points to this example):

```js
class C {
  static count = 0;
  static inc() { return this.count++; }
}
class D extends C { }

C.inc();
D.inc();

alert(C.count);  // 1
alert(D.count);  // 2
```

The hazard here is when you write to the count, and the hazard with private static methods if when you read from the private method and you get a type error. One thing that Kevin has made in the past, a TypeError in such a case would make it kind of un-method like from this point of view. If you cant call a method with subclasses and receivers then it isn't really a method. im trying to find some common point in this area.

KG: This is on the same topic, a two-part reply to WH, because I have the same concern about cross-cutting details and not designing features ??? But I think there is sort of an important part to this which it seems to me that we have considered a lot of path foward, like just not do it or static blocks. The important part here, is that it seems to me that every alternative that we consider acceptable is that we still want to do static fields this way. We rejected a couple of things including my ??? proposal, which would involve of change the behavior of static and private fields. If it really is the case that we haven't made a decision on what to do with static/private. I think we can just do static public. This is my argument, for being ok in this particular case.

AK: you mentioned static blocks, and in Brendan's proposal this was present to get nearly the same behavior. I'm wondering if you research into the use-cases of static blocks and whether static blocks would suffice in those use-cases.

DE: one is that it is not as terse as the current syntax. I think people like the current syntax, I don't know if people wants to reply in the queue. There's a lot of JavaScript programmer in the room.

AK I dont know how we could do a really objective study on that. It just strikes me and I'm interested in WH would be OK with static blocks and NO static fields. I'm just trying to figure out some middle-ground here.

YK: I would personally be OK with that largely because the use cases that I care about are protocol cases where someone told you you gotta put that static thing in this. I also think that it addresses the issue of static / private ?

YK: I think static blocks would be fine, I also think it addresses the issue. That's my opinion, I think people who aren't for some reason thinking about complying with this protocol but are thinking "oh I just want to put this thing on this object" would probably find it annoying

MM: ... once you have a static block, then the overhead per field, is you know, classname dot thing equals something. Also on the ??? issue, I want to apologize for orthogonal classes, because public and private are not orthogonal semanticly . I agree with the all WH but if the semantics that comes from ???. Private and public are just too different from each other because private is not inherited. Orthogonality was a false hope. We should avoid a pretend orthogonality if we can't have a real one.

DE: Would you be interested in adding a reply topic to the queue?

WH: Public doesn't inherit either (not even for reading) after doing a write.

DE: please add your item to the queue

JRL: We already have staticaly owned fields with static methods. I could assign a static property that is a function. Disallowing static fields is only disallowing a very common pattern.

DE: ... for example we don't allow proptype field, there's no syntax for doing it. Whatever we do as programmer we always are opinionted.

PZE: It should match ??? which If you assign `C.x = 5` that should be the same as the static x = 5

I wouldn't expect it for sure, I would like it to represent something we already do right now. On the other hand the private property is a bike-shed, can we preserve that for something that has iteration? for now there are a number of reserved characters like tilde and others. This is my point of view, and we can reserve the hash for circumstances where it's absolutely necessary to disambiguate between private static fields.

DE: I'm not sure if I understand the question, in this topic im trying to understand public private fields. The syntax for private field, i'm not proposing that for discussion right now. We're not proposing this right now, but we continue talking about this offline.

YK: As MM pointed out, we don't have inheriting on static/private. So for me when I think about this problem I avoid the syntax with the issue of inheritance.

JHD: I just wanted to talk about static and private field, when we talk about footgun and user confusing. Actual usage tends to ??? a lot. Public class fields probably have more usage than any other new feature in JavaScript in years. It has been many years of very wide usage, so what I was seen the current semantics are expected by everyone—very intuitive. And the foot-guns were are talking about are no different from foot-guns in JavaScript. deviating from that would be a mistake. it's a good thing to improve JavaScript when we can but it's not possible to redesign JavaScript from the first time. Discussing public and static field is fine, whatever we include them or not. The community pushback on us doing anything different will be very large so  it means we should think very carefully about... we were unwilling @ and # because of years of documentation changes that would be required. I don't see how we should be willing what to override that since it means going against conventions in very popular frameworks like React, etc.
I don't think it's a strong ??? to overide that.

DE: Jordan, what do you think at this point of removing this feature and just using static blocks?

JHD: Decidedly not. that would be terrible,  users have been using this for many years,. Changing the public properties in static blocks is not a viable option. Both public instance field and static public field are supported by the transpilers. How much actual, do you have a sense, how much static public as opposed to the public instance In the react ecosystem in 90%, It's very massive. Every class should theoretically define propTypes and default props. Dan right here is in the React team.

DAV: I just ran a search on static/nonstatic proptypes. I see about 4000 matches across 50,000 components

YK: What was the query?

DAV: Its for "static defaultProps =". if I search for propTypes .... thats 8000

MM: Thanks that was very informative.

YK: I searched Ember's code base and I found 5 cases in my case which is much much less than public. It really depends on if someone tells you to do it. And it does seem like react tells you to do it. Ember's doesn't, and we have this usage anyway.

AK: we just heard some strong arguement about static and private but they doesn't address the concern about private static. I am wondering if Jordan—does that argument say anything about what that says to you about static private?

DAV: We don't have a use case for it.

AK: It's nice, it's very useful to hear that static public is very important.

Jordan: So for static private, of all the use cases I can think of most of them are covered by closed over ??? where the class in defined. In the presence of instance private if I want to be able to access (restrict?) private data outside the class, I have no way of doing that.

off of instances of my class. and in that case it would be useful to have some kind of function declaration within that ??? im not saying that hrer isn't a use case for that but static private has not been transpiled the use cases for that havent really come around. and It has not been shiped in browsers yet

DE: The exercise the committee members have done with me over the last couple of months is to have several proposals, either as semantics or as follow on proposals. None of these potential follow-on proposals leads to wanting a change in public static fields. The hazard doesn't seem that bad to me, or from a lot of view points. I'm not sure if it address your point.

AK: It doesn't really, I'll try to explain what I'm trying to say... The usefulness of static public, doesn't really speak to that question at all... What I'm trying to say is, static public is useful, static private is so not useful that we can defer it.

DE: At this point at the stage of stage 3, we already have instance private methods and field, we don't have static private fields. We already made the decision, that we're ok with saying that not all the gray area is filled out. Maybe we can reconsider that decision if its not intuitive. We can talk to educators—those who have experience teaching public static fields to JavaScript developers. I don't know if anybody in the room is involved in interested in leading such a discussion, or has education experience to give here.
.
AK: I think what im saying is that you and WH are talking past each other. You are saying that its not getting in the way. WH is saying "we should figure out what we are doing"

DE: I've been trying to get this moving for a long time. I got in touch with a number of groups of people to try and get feedback, as well as recruiting champion groups for each of these four follow-on proposals I mentioned. I'm really hopefull that in follow on meetings we will have more detailed discussions about them individually. The fact that we don't have static private field in the language;fora big chunk of JS devs they're not part of the mental model; so if theere's part of the transpilers ecosystem, they are already part of the teaching.

AK: I appreciate your work on this. I'm diagnosing the disconnect that happened in the room.

YK: I am removing myself from the queue, but I still have a point to make. I think from the fact that people feel strongly about public/private static. even though WH and I have the opposite perspective. Due to the fact that static private does not inherit we do not have this yet. people talk about filling out the grid. For me filling out the grid is not a good solution

DE: This proposal attempts to follow Allen and Mark's orthogonal classes framework, which was a "grid with holes". By doing this, the runtime "hazard" is converted to an early error.

YK: It's not what people are worried about. When we'll add public, people will be very confused why private is missing. An explanation that the committee just didn't fill out this grid box in 2018 won't be very satisfying.

DE: I think it's the case either ways, because transpilers will continue to support static/private fields.

YK: I think you are overly aggressively rejecting static block, multiple people presented it as an alternative

JRL: back on the static block init, it's literally no better than declaring the prop after the class declaration. All of done now it's increase my identantions twice

AK: Except that it lets the private fields and methods be in scope

JRL: That's not what it's being used for today

DE: Do we have consensus for this to go stage 3?

YK: I don't want to be the only person that objects

WH: I also object. I want the cross-cutting issues addressed.

#### Conclusion/Resolution

-- No concensus, does not proceed to stage 3

## Decorators towards Stage 3

(Brian Terlson, Yehuda Katz, Daniel Ehrenberg)

- [explainer](https://github.com/tc39/proposal-decorators/)
- [spec](https://tc39.es/proposal-decorators/)
- [slides](https://docs.google.com/presentation/d/1Sx5gwx9yd3gbRhbzgwQijGLRIbfR9PkwLlwfNK_USQs/edit#slide=id.p)

DE: This is a status update of the decorators proposal which is at stage two. I think we're getting into the last stretch and my hope is to present this at the next meeting for stage 3. What are decorators: they are a mechanism for meta-programming in classes. Decorators let you modify a class declaration. There is an earlier version which is significantly different from the current proposal which is implemented in transpilers. So as an example, here is an example of using field decorators (example). That comes up in multiple frameworks such as Polymer and Salesforce. To modify a field declaration or to modify a calls or method. We heard more about use-cases in the previous meetings.The core semantics, classes methods and fields are reified into special descriptor objects. You can see a full description of the API and ??. So in the past couple of months, YK and I arranged meetings with various stakeholders to go over the API and get feedback.

DE: So, first we met with native implementors, in this meeting there would be JSC, chakracore. There were some scheduling issues. We went over the proposal, we went over the `metaprograming.md` file. The biggest concern from the implementors meeting was that private name type was a primitive, which leads to additional implementation complexity. The private name type was a reification of private ??? types. In particular they don't refer to the syntactic constructs so `#x` but `#x` indirects to another underlying name, which is a different name each time the class is evaluated. Private name is currently specified as a primitive type. the stake holders identified this as the biggest overhead and in the end there isn't really much of a reason for it to be a primitive, another alternative would be for it to be a frozen object. And I have a draft of what the semantics would be,  we just need to write it up in specification text.

DE: We also met with framework authors, Polymer, Ember, Mobx, view. We went through the decorators proposal with them. Some interesting feed back here is that the additional features that were added in this iteration of the proposal is that ???. Adding decorators or first class decorator support for ?? fields, would be directly useful with ?? there is also an issue with parenthesis, which I have more description of in a future slide. One action from this is to continue with the full proposed feature set, we thought about moving/adding certain things. But this meeting seemed to solidify we're settling or more on this feature set.

DE: We also met with transpiler authors, Google closure compiler, typescript and babel, which all implemented es6-> es5 and are at various stages of implementing various language features that we at TC39 are currently specifying. We got some feedback about some things would be a little bit verbose to compile or might have layering issues in compiling. Some feedback from Google closure compiler which is also used as a JavaScript static analysis tool. For example, dead code elimination, which closures are especially good. Decorated classes do not lend themselves so well to dead code elimination. We in the champions group think that's OK, because decorators are expected to be for more dynamic features. The hope isn't to take some static code and add a bunch of decorators and make everything worse but to fill use cases that are used in more dynamic language use cases. So, when talking about the compiler output there's sort of a trade of that cross-compilers can use. They will have to think about what they want to do in some of these cases. Another piece of feedback was again asking the question "should we allow decorated private field methods at all". This is something we discussed in the previous meeting and I recorded the champion groups decision that we should because they're important use cases and there's and important privacy model is that only things within the class and decorators are only within the class. It's well defined, if you call out to a decorator, the decorator for this particular field or method then this decorator can only see this particular field or method. If its for the class as a whole, then it can see the entire contents of the class. That's the model we are going with for now. Spec updates: there was feedback in the Jan meeting that element descriptors should be more ?? so we tweaked that. There was something about coalecing the getters and setters so we implemented that. We reverted that and element ordering change ??? The other thing that we added is ...? to string property. which should be easier for branch-x spec. There are also a number of spec type and documentation improvements from new contributors. There is also an increase in new contributors which I am really happy to see that.

MM: I heard brand check and I don't see anything on the list about it?

DE: @@toStringTag is used. The last time we discussed adding actual brand checks in JS, some committee delegates stated strongly that we must do something similar to @@toStringTag, if anything, so that's what this proposal does

MM: So, its not a brand?

DE: It's not a brand but it should be usable in practice. When you want to have a function that can both be used as a decorator or as something else. You can check the @@toString to see whether you were given a decorator descriptor.

DE: Specification questions: as I was just mentioning, this issue with PrivateName. This is really the top concern for implementations that I've heard. Some parts of this proposal sit in the front end of the implementation but it also adds complexity to the back end implementation to add a new primitive type. A new primitive type would require the need to think about how property access, well have to specially update ToPropertyKey. That's what the current specification text does. and all of this is complicated because of how heavily optimized property access is. There are just many different implementations of it, there are a number of different usage patterns. By making it a frozen object rather than a primitive, all this complexity is avoided and decorators don't need as many cross-cutting changes. Spec text is not written yet, but there is a plan in a linked issue.

DE: Parenthesis? So this is a long running issue from years ago. One issue was that back when decorators were passed to the class as an argument. Then it was hard to overload, a function which could be used as a decorator and a function which could be passed as an argument. To determine whether it was being alled in the decorator sense, or if it is called as a function within a function. That particular case is actually fine now, because its easy to tell whether we have a function or decorator. We added `toString` tag to make it even easier. maybe you have a function that has a certain property and you want to overload that. When we discussed this at the framework meeting, there were mixed opinions. some people are strongly in favor of... I should step back. when I say adding parenthesis. With this change in the calling convention, when you have @ decorator and class we would make it so first you call that function and undefined?? So the champions' recommendation is to not do that and stick with the simpler model. Where we just evaluate that as an expression whether its a function call or not, and then call that resulting function with the class decorator or the element decorator as an argument. So, for both of these questions I would be really interested in more feedback.

DE: So for next steps, this is currently a stage two proposal. We don't have Test262 tests yet. A babel implementation is currently in progress (Nicolò). Someone (Nicolò) is iterating on the babel version; he was very helpfully reporting specification issues and making fixes. I don't know of any other draft implementations apart from that one. There were five stage 3 reviewers. I haven't heard back from any of them. I would be interested in any feedback from these reviewers for this proposal. The plan going forward is apply the settlement that was noted here and any advice that we get back there. To continue to work with Babel on the implementation and to propose decorators for stage 3.

MM: Specifically about the PrivateName object, which is unsurprisingly my concern. First of all, clarifying question and then I will say what I want to say: It is distinguishes initialization so the assignment that was not present in the `WeakMap` throws.

DE: Yes

MM: I somehow had missed that it had ever been proposed as a primitive type. I always assumed that it was an object. I want to take everybody time to emphasize why we must reject it as a primitive type; which is, where is the mutable state? Primitive values are immutable. Values go through membranes without modification. You cannot proxy them. And a private name object you can use to associate a value with an immutable object. How can you do it if the object is immutable? Clearly the state is not in the object. The mutable state of the collection has to be semantically in the `WeakMap`-like collection. Therefore it cannot be of a type that implies that it itself is an immutable value.

DE: I see. There is something else about the PrivateName. I don't know if it will imply anything here. We're proposing PrivateNames to be a frozen object, and the reason is because BFS has raised the concern that any modifications to the PrivateName prototype shouldn't affect decorators, as this would be a way to intercept certain reads and writes to private fields. So the way that the interface would work is that rather than having PrivateName be a property of the global object it is passed as the second argument to every decorator.

MM: Thats a PrivateName instance correct?

DE: No, the parameter is the PrivateName constructor. PrivateName instances are passed in the key property of the class elements. We need to represent private names that are there created syntactically, but we also need to be allowed to create ?? that ?? If you want to add an @observed or @tracked decorator which will do some sort of action on the set. You need to be able to store the underlying state similar while replacing the name of that field with a getter or setter, so for this sort of case,  We heard from framework authors who were like "oh wow" but immediately pulled out some mangled code which having private names be this thing that can be used that way is important

MM: I see the need for access to the constructor, I see the need for instances to be defensive, with regard to somebody does prototype poisoning. In some sense that is the entire rationale for frozen realms, lock down all the primordials. I'm worried about trying to do piecemeal ad-hoc locking of things down in a way that create an appearance of safety but has none of the safety. If you poison Object.prototype, everythings going to be confused anyway.

DE: Yeah this is to protect from a very specific attack that BFS described, BFS do you want to talk about?

BFS: So my concern was coming from Node and Node core in order to make a robust core. A lot of Node code is written within an unsafe realm so we can safely preserve a lot of these. We can safely preserve a lot of these safely assign them to a variable at a time. I'm having trouble figuring out how to do that safely here an issue thread to have the getter and setter separate from the key itself. So not a member just a function where you pass in an identity for the key and then if its the set pass in the value on the right, of the second one. Basically the whole point of this is to ensure that decorators can be used within Node in a safe way, when we're already in that realm which you have stated that some of them are safe.

MM: So you mentioned how you make things safe when you run first in  a realm that might get corrupted. If private name is defined as a `WeakMap`-like collection in a really symmetric way to how map is. The way you do that safety is for each you pick out the methods from the prototype every method you want to use safely you save it off on the side. And then you apply it to.. and you save the constructor on the side. Ideally in an uncurry'd form and then you apply it, you save the constructor on the side to create instances which are genuine instances.... All this is very painful, but if you're programming in a corruptable realm this is the pattern. I don't see why this case is different form any other case in a corruptable realm.

BFS: I think in particular at the time I originally voiced this complaint, PrivateName was being propposed as a primitive.

DE: I don't actually see how that changes anything. but there were methods on PrivateName.prototype, as originally proposed. If you can run code when a Realm starts up, you can copy off the methods. I probably wasn't very clear when I tried to make MM's case to you when we discussed this several months ago.

BFS: I can look it up on GitHub but I think I understood it. This is a very difficult topic for me.

MM: Clearly the PrivateName needs its own very detailed careful discussion. That should not happen right now because its a detailed discussion that was focused on private name and I think that as long as PrivateName becomes something. and as long as it acts as the right kind of `WeakMap` collection

JRL: (Context: https://github.com/tc39/proposal-decorators/issues/43) I tried to argue for the same proposal that you just mention so that you create a PrivateName object instance? The solution I came on was using syntax to construct the private name securely. The private name is a constructor but you can't new it, it will just throw. The only way to properly make a private name is to use the private key syntax so you would say `private x` and `x` would be a private name and would have own properties, get/set and others that would allow you to do `WeakMap` properties. That would be the only way at this point to secure a private name instance object. In that case you don't even need an instance object at that point, because you can just use access syntax much like you have privates in classes ? You can just define a private property on the class or you define a private property on the object (using the lexical private) and use it as though its a regularly property on the object (like a private instance field on a class). YK has added a gist to the chat a couple of times that fully describes this.

DE: I'm all for continuing to investigate that path, which is different from what I'm proposing here. At the same time when we have such a proposal I'm not sure if we could jump to a conclusion right now, because that syntax has also been proposed for the shorthand, while I'm not really sure what that is trying to solve.

JRL: I didn't quite understand that from the GitHub issue maybe you can clarify that

JRL: My issue is how do we give private name to objects as well as classes. so my idea was to make it a `WeakMap` that you can't monkey patch. Doing that exploration private name, lexical declaration instead of declaring a private name instance would be very unusual in the current spec. It would be better if it was just a primitive that we could work with.

MM: I think a lot of these things were directed at me, can I respond? The key thing in what you said is security, and I want to ask you the same question I asked BFS. If you are programming with these thing s in a normal manner, inside a corruptable realm. Then the monkey patching of Object.prototype and Array.prototype then it will be corrupted anyway. So whats the safety that you are concerned about.

JRL: I think the concern is the node concern even if you do the monkey patching.

MM: The internals are in a special realm that can't be monkey patched and what I heard you say is that the code is monkeypatched but it can be used awkwardly but safely.

BFS: Humm, yes but to an extent if we allow anything like user-land decorators we might have issues, so that's a long conversation. You could create an uncorruptable realm and create the primitives you need in there and use those in an uncorruptable manner.

MM: In which case te safety that you are seeking by transitively freezing the ??

BFS: That is a performance bottle neck for us

DE: Sounds like there's a lot to talk about for private names, maybe we could have an offline discussion between this meeting and next meeting about the details

DE: yeah I don't think that we will be able to get a resolution here. Lets make a separate meeting

YK: I just want to thank DE for his work on this. it may not be obvious to people that there has been so much  reaching out to stake holders. I think he has done a great job navigating what was a very complicated process

Yk: I was certainly out of my depth when I tried to champion it with BT and I just want to thank DE for the difference he made

WH: I'm curious about one of the things you raised in the presentation, which is the behavior of decorator argument parentheses. Some decorators take arguments; some don't. Is there a case where the same decorator either takes arguments or not? Currently `@foo` and `@foo()` are specified to do very different things, but there is existing precedent in the language to make them behave identically—`new` expressions work that way. You can omit the parentheses if you don't want to specify arguments.

DE: Err, some decorators take arguments and some don't and some are overloaded between taking arguments and not taking argument. To your question on the queue regarding operator new grammar. I think we would re-usue the grammar. some people have also raised concern about this. So there was a thread where Alan suggested we create an object for this case and that we call this decorate method on it, and that would be the semantics. Alternatively it wouldn't be clear on the benefits.

WH: I'm not proposing creating an object. I'm pointing out there there is a precedent for taking an object and omitting the parenthesis and have it mean the same as if you called it without arguments.

DE: The concern is whether we'll be coming up with more and more cases where the parenthesis will be optional. There are other languages that you don't need parenthesis. in JavaScript we cant work like that and we. won't work like that. We can only add specific cases where there's explicitly a function call. The default that i'm leading towards is not adding this additional case, decorator authors could if they choose to overload their decorator. It's basically a one liner. in the first line of your decorator checks for arguments, and that is how you can return this function. On the thread so far people have talked about a few different overloading cases, no one has brought up that particular case.

DE: You can also use arguments.length

CPl: We did talk about this. I think Ron has some position on this

WH: Things like that seem very hacky and brittle. The way the `new` operator behaves seems to be much better.

DE: I'm not really sure what you mean by "things like that". We're just applying the decorator as an expression.

AK: It would help me to understand why not allow a call if there are no parenthesis because it would be confusing to have more and more calls that are included without parenthesis (implicitly).

DE: The other point is that it increases stylistic variance. If you have a decorate like @nonwritable which doesn't take any arguments there would be 2 ways to invoke it and creating another choice point and that could add more friction for developers.

WH: `new` does that.

CP: the strongest point from Ron was that you might use a decorator like @foo.bar, with and without parenthesis, and what will be the context when calling `bar`?

DE: Here is an example decorator library that has this @ key. Which has this @t.expose and the only way to make this work is expose would sort of close over the key because you would lose the receiver if you call the function and just use. the results. But maybe its not very important, since you can make it a getter that returns a function bound to the right receiver.

YK: I don't have a very strong opinion on this question. It has never occurred to me that having no parenthesis could be an option. So now I don't in the world where you could differentiate. In that mind though I don't mind adding auto parentheses. TLDR; from my perspective its fine. There is one thing. It should be clear that decorator and function use should be clear since that's addressed I don't know what solution we could provide here.

WH: I am strongly in favor of what you call "auto-inserting `()`".

RB: My main cases and concerns were around , we tried to use new semantics what the receiver would look like, I had a couple of soft concerns because of it basically requires that every decorator is written as a decorator factory. Seems like overkill for scenarios like @readOnly or @ennumerable and simple decorators where you are making a small change to the descriptors. It feels like overkill in those cases and again my concern was mainly about the receiver. Beyond that I would need to pick through a couple of issues I commented on and get back to you

DE: It seems like you could handle that by having it instead of a property but have a method that is a getter and could bind the receiver, it's still possible to create sufficiently expressive decorators in this case, does that address your case?

RB: my concerns are not really strong concerns, my conerns are.... the big thing here is that we could have call semantics that are not exactly the same as new semantics. We don't have to instantiate a new instance of key.Exposed, so exposed doesn't have to be bound but rather its a call that if you have parenthesis that are added for you. Parenthesis vs non-parenthsesised new has had problems in the past. Where if you want to use something you have to add parentheses nad dot off of it. it's one of those things where....can possible be confusing to people,  where the current semantics are, i'm calling the thing that you wrote with a descriptor. that's the function i'm calling. Those semantics are clear. it's just the underside of if I'm writing the decorator or using the decorator in my class do I need to add parenthesis or not which are mostly documentation based.

WH: The issue you raise of following a `new` expression with a dot that is purely a thing that arises in expressions. This cannot arise here. The decorator grammar is a very limited subset of expressions: essentially either parenthesized full expressions or limited member expression. I raised an issue a few meetings ago about what happens with a decorator such as `@foo().bar`, and it was closed as won't fix: syntax error.

DE: So we do permit arbitary expressions if yo just put parenthesis around the whole thing.

WH: If it's not a parenthesized expression, the call must be the last thing in it.

DE: I agree about the particular issue that Ron is raising but there is a broader question of if we want to add more cases of calls without parentheses.

WH: For decorators I think the same rationale applies making parentheses optional. With `new`, the 0-argument case is common on enough that you don't want to require the parentheses. You also do not want to distinguish the empty parentheses from not having them.

DE: Ok so how would the committee feel if we moved forward or back on this. With the grammar based on the new grammar?

YK: Any objections?

AK: that sounds like its a big piece of feedback.

DE: Really the champion group doesn't consider either option to be fatal. This is an aesthetic preference as far as we are concerned. If anybody wants to argue in the other direction that would also be useful.

AK: As a novice in this area, this was one of the things I came upon when reading the spec, it seemed unfortunate to have this difference. I'm mildly in favor, if you say "ill make this change based on a 5 minutes conversation" but that sounds not the case, sounds like this has been discussed quite a lot of times

YK: I basically wanted to reiterate what AK  just said. We don't really care. I think from a user perspective it actually is very common  to not have the parenthesis in practice the syntactic use is going to be sometimes yes sometimes not, we're either gonna do branding as a way to detect it  or we are going to insert the parenthesis if we can't just find the problem and I think at this point we just want to come back to stage 3, if the committee doesn't care we will pick something. this is an issue that we have discussed at length.

DE: Members of the champions group have discussed both options. Thanks for all of your feedback and please, if you want to review the proposal in more detail you go can go onto the proposal repository and discuss on issues.

#### Conclusion/Resolution

- Decorators remains at Stage 2
- we're thinking of going toward adding the parenthesis
- follow up more on private name semantics details


## 12.iii.b. What does 1JS mean in a world of transpilers?

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1sermrj6TCCf-6mCj05sVORBBVQZeDbc2KVtvKk5uNBs/edit#slide=id.p)

DE: When we talk about evidence from the ecosystem, there's two different examples within the ecosystem. This comes up in the Classes 1.1 proposal, and in the decorators proposal. One is powerful and minimalist: adding fundamental capabilities, refrain from superfluous syntactic sugar. For example the decorators to transpiler authors. We could focus on things that we could fundamentally not construct instance vairables, strong encapsulation. And we could come up with a wide variety of superset languages such as JSX. Not on our mental agenda as things we want to do. Another vision is to have a common language, including more usuable things: syntactic sugar addit l ergonomics, opinionated things here. We can look to the ecosystem of compile to JavaScript languages for inspiration and what works well such as Babel plugins. When something is widely supported in this ecosystem, we take it as a strong datapoint that something is needed for the language. For compiled languages to work together in the ecosystem. People wouldn't want to change their code from this to that, "but this is irrelevant because they're using language X". These are the two views we're seeing together. I want to Talk about ecosystem alignment within TC39. The word of those JavaScript transpilers is going in the direction of ?? Based on the fact that a lot of them have these policies to only add standards on a TC39 standards track. This isn't for all of them, but for example for TypeScript. In order for it to ship, it needs to be in stage 3+ and babel only ships things that are at least Stage 0. It corresponds to at least discussed in TC39 (or by a delegate). There are other parsers such as Acorn, which only parses Stage 4. Other language authors. applying processes as language innovators, which are creating new languages with these innovations.

(NOTE: we will fix this at the end of the session, Sven: I fixed it)

BT: I wanted to add additional context here. The users of transpilers, developers are, this is the result of research by TypeScript, developers are extremely skeptical of new features that are not on the standards track. On the typescript team, we've heard endless feedback that a handful of features in advance of standards (just features TS users wanted) that didn't make sense to go on the standards track, and those all came back to bite us in the end. The biggest problem I believe is that if you're not on the standards track. Anything you do that isn't on a standards track is possibly problematic for your users. TypeScript is said to be a separate language from JS for this point.

DE: One thing that's been a factor, a vote of confidence for us, if this ecosystem saw TC39 as stagnant, they wouldn't have adopted these "must be on standards track" policies. Dave Herman proposed the One JS. We don't split out JS into many more mode than we have now, and that we harmonize among these modes as much as possible. I want to ask, should we have two JavaScript? I think the ecosystem of tools will have a language that will evolve. Such as public fields, private fields, decorators. So I think, ecosystem-wide there should be some sort of standard, if we don't have 1js, 1js here is seen as the standards track policies,  So, an issue with the current status if we don't continue pushing forward with decorators, people may have trouble (due to policies, recognition of the development of the feature) flipping these flags on. Ultimately, if TC39 doesn't want to be the body for these types of things, or to defer to transpilers, they should be coupled with a different standard (not EcmaScript?). I wanna say, 1JS including transpilers ** (big ast) JSX for a typed language, we won't put these things in JavaScript. (this doesn't make sense, missed something) Such as these class features and decorators. We can talk about advantages/disadvantages of 1vs2JS. Advantages: minimal powerful version of JS, if a team chooses they can stick to minimal form of JavaScript, It may be simpler to implement, maybe with respect to optimizablility this feature should, some of the features proposed don't give a lot of optimization anyway, but just add complexity. There's some cost to going through with this divergence. We could view these compile to js languages as out of scope. There's a lot of JavaScript programmers who consider the complexity, because long term they need to see the divergence (?). At the same time, even if we do do this, we stil need to take into account these other languages if our users care about interop between standard JS and the other language. If our users
end up caring about the interaction. This happens in other languages as well, for example C++ syntax in Objective-C. How many users use Objective-C++? Not many but they can still be considered a stake holder. We also must take into account, Node and other developer tools, which have certain sets of mismatches —Maybe those could be solve in other ways. When we figure out a language feature, how do we decide whether it goes into real JS or this other language? What are your thoughts on this language?

BT: no I think you covered it, lets go to the queue

YK: so I want to stand in favor of 1JS. For a few reasons, compile to JavaScript languages support features with a long life. For example if we treat private state as something that can be punted off to the ecosystem, You can imagine different transpiliers and the constraints they have. There's also a runtime requirement that requires coordination. For example a library that wants to use a decorator, we need to share a declaration between those states. But I might not want to force people to use a particular transpiler to use the feature. Increasingly transpilers don't want to have that role. People do perceive TypeScript extensions to good features, People want the TypeScript team to standardize certain features, but specifically DON'T want the JavaScript team to implement them as well.

AR: We've been in the HTML world trying to solve some of these problems. With all of the other pieces of the platform, the difference between high level and low level feature implementation, we perceive that JavaScript has been at the bottom of the stack. There is a natural thing for JS to do, to achieve the expressivity that people want. Some folks have argued that transpilers should go off and do their own thing. We think of this as admission of defeat. This matters in the real world. (Shows phone). This is a phone that'll be sold for less than $100, and it'll be with us for the next 5 years. The chip in the phone is a handmedown from 2014 (bad chip then, bad now), This is what's currently drowning in your JavaScript. Any code run server-side as opposed to client-side on this very low powered phone is a much better experience for the user. And anything that we can reasonably build into the platform will decrease download size and improve performance on low-powered devices and networks

DE: one case where this comes up is transpilers will make the output for decorators will be relatively large.

AR: I'm currently reviewing 1MB of output code, To try to understand what is happening in that product, once again, looking at this device, Where we have diverged from API that's diverged from the standard features. This is the natural process of moving off the evolutionary path; the fact that you. That fact that you can deliver custom non-standard code, is not a vote that you should. To deliver more of that value to more people more of the time

MM: An issue regarding one of the position. There's the 1JS position, trying to improve the language through syntactical features, that we've talked about. There's the separate issue, there's the compile to JavaScript languages, then there's things like TypeScript and JSX, which are trying to be standards track, addtional syntax, widely used, but not standard. The issue that I want us to pay attention to, is that while we're participating in that structure, We need to pay attention as to what grammatical constructs to keep reserved for those extended languages. Such that we don't create syntax that conflicts with widespread extensions. We've been doing that, but we haven't been doing so in any systematic way. We know not to conflict with TypeScript or JSX syntax, But for other people, there's no systematic guidance on what syntax they can use (because we won't evolve and collide with them).

DE: Interesting idea, how is it related to the idea that these compiled languages WANT to align with TC39, rather than innovate themselves.

MM: Take a look at TypeScript and JSX, it is conceivable that at some point we will bring into the Standards process some sort of TypeScript like typesystem. But we've got several type systems that use the same syntax. Flow and TypeScript collide on syntax, so there's some sort of reconcilliation process needed. And it's our job to do that, when the state of these things is such that these major players would rather complete their own standards than integrate in some other system. We have not been hearing that from type script and flow. likewise with jsx I haven't heard anyone proposing that we reencorporate that. This kind of brings us back to the E4X use case. Even if we included those things, here's a particular syntactic space that we reserve for them. And at some later time we engulf and devour. That's a tricky coordination with people have reserved that syntatic space for their extensions. If the dominant desire in those ecosystems is to continue to develop on top of JavaScript rather than coordinate with the JavaScript standard. Then I think we should respect that.

Pedram: Are you suggesting to maintain two specifications, one for regular JavaScript and one for compile to JavaScript?

DE: we disuccsed that in the case of deocrators, where YK expressed that this should just be Transpiler feature and not standard. We've heard several negative responses from community members.

Pedram: My other question is there's not one specific compile to JS.

De: I'm talking about other features like Decorators, that are not specific to ???

MM: I'm going to take that as a clarifying question to me, so I can answer. What I have in mind is a proposal to standardize the TypeScript syntax as an extension, but not the semantics. We rejected that because what does it mean to have the syntax without the semenatics? What I am now suggesting is realizing tha thtey are converging on multiple syntactic spaces as a single syntactic space, with the goal to mutually decide to converge on the lessons learned. We should standardize some of these syntatic spaces, as reserved for expierimentation (lol) for these authors that we won't take over.

DAV: In case of TypeScript or Flow, and JSX. What about something like public class fields?

MM: So public class fields would not be in this catagory. That's the kind of thing that people who are prime to introduce it would run into the same problems as BT (context?). This is the kind of thing that we won't use unless it's standardized, so there'd be pressure to standardize this at the language level.

BT: My queue entry is about this.

BT: The difference between JSX and TypeScript, and something like public fields, is how easily separable it is in developer's minds. It turns out that developers are asking, "hey this should be standardized? help...". There is an expectation in TypeScript users that we should work forward to this kind of future. There isn't much issue separating TypeScript from JS. JSX falls under the same thing, it's very contained, no side effects in other parts of the language. As a result. Some people saying it would be great for JSX to be standardized, We support JSX and TypeScript, for people that wanted it, so I think that the syntax reservation is an interesting idea, but it's not a syntatic thing. I don't know how to describe what that reservation is.

YK: I think that the claimed thing that we reserve things after the colon. That is not a valid way to reserve a syntax in a grammar. That's not the technical reason, but the stuff after the colon is not where you stop. It's a non-expression in a syntax specific to the language. There already have been cases where if we really want to preserve it, we have no way of doing so.

DH: You have just expressed a very big concern I've had with this idea.

WH: I agree

(general agreement)

YK: We have not done it and what we're saying doesn't make sense. We are trying really hard not to collide.

DE: that's besides the point.

API: From the user point of view, we gave TypeScript to thousands of peoples, one of the decisions that came into play was jumping into the compiled language what's the safety valve? If you have to escape, because a problem happens, what's the out? The decision that sealed the deal was that the output is just JavaScript. That was good enough. I can't speak for everyone,, but people don't speak of it as a different language— Generally, people don't think of it as a different language. People want to program in JS.

DH: Not a question, I missed the first couple minutes, I don't really understand what the problem statement is. I definitely I would be very sad to see the 1JS sentament to lose mind share. It's not a precise concept, but We're here to do standardization, so we are the central point, naturally that's a broadining and widening thing over time. That means that we'll scale the way we work, but if we fragment the development space (???), some of these working groups Ideally, there's a nice evolution where we can keep evolving where we work and coordinating how we work so there's some cohesion in a single spec. Last couple of related poitns: It feels to me a lot of what we're describing as stuff we can't standardize as either a failure or a success of the process. It's relevant to the work we do, so it's not finalized and we have to allow for that ambiguous middle state, Just because something's not standardized doesn't mean we have to split it off in a separate space. We tend to split out from the main trunk—but They often don't end well, There's stuff like Annex-B, there's E4X, and the whole thing that lead to 1JS in the first place. There's an alternate universe, where I don't know what's meant by 2JS, but whatever it is I don't like it.

DE: This has been interesting, but we don't really want to splinter JS. Maybe this will feed into other proposals.

#### Conclusion/Resolution

- "this has been an interesting discussion;" no consensus needed.


We discussed this morning if we wanted any clarification about Class related conversations.

DE: Brendan made a proposal this morning, do we have a conclusion on it? Do we want multiple competing proposals, do we want to return feedback to a single proposal?


-- Return to the class 1.1 feature update discussion. --

YK: So I enumerated a bunch of things, I'll narrow it down. I think we should reconsider whether we want a brand-check. Whether we want private methods, Should we reconsider initializers? I think we should reconsider having a mandatory leading key word

BFS: I would like to explore them both as staged proposals, we can learn by comparing them. We shouldn't consider this as a conclusion of one or the other.

YK: What does it concretely mean to say that both are active?

BFS: We can continue discussing both propsals, and move forward with the existing proposal.

YK: What is the difference between that and continuing with the proposal that we proposed this morning. I'm not trying to troll, but genuinely curious/confused.

BFS: I think that I am ok with advancing class 1.1 proposal separately than the exising proposal.

YK: So, you're suggesting it would be a big offense to keep the 1.1 proposal over the existing one.

BFS: I think it's fine.

DE:  I wanted to take the time to analyze the 1.1 proposal, as soon as possible. Before this meeting, I don't think we considered the -> syntax in the committee, just on GitHub. But other things we did discuss. We arrived we arrived at this particular case. I don't think switching to a different position will be easy and if we do want to do that, that I hope we do so soon.

BE: I'm not going to champion, Allen probably won't either. It may just be a strawman. My intention wasn't to advance a proposal.

DE: I don't see any new cross cutting concerns. Reading the explainer, I don't understand if there's any synergy -- to see If we do want to make some of these changes. If not, maybe we come with a conclusion. We have very carefully considered various cost cutting concerns, and I'd like to discuss those.

AK: I would like to focus less on the fact that we have made decisions on this and that point. The thing that's most important, is that the presentation this morning, is that the classes 1.1., seems to be about a desire to address concerns moving forward. The champions that have been doing this have the thing in there heads. As you get out of the whole commitee that's less true. I believe the discussion helped clarify some of that stuff. I don't think it makes sense to treat Classes 1.1 as a separate proposal. I take it as a, OK, this gives us a chance to see the direction we're going. I don't think it's a, it's more a gut-check for the committee, to focus on a series of details, not a separate proposal.

BE: I don't think we're missing concerns, we're just weighing them differently than we would doing things piecemeal

MM: So, I think that very concretely, what has been said about Classes 1.1., We need to consider some of the issues on which we already reached consensus on, to be still open for reconsideration. That means, when discussion to consider them arises, we don't shut them down as reason to not discuss them again. In particular, the leading keyword, I would like more evidence about how normal users see syntax. How they form understanding between declrations and assignments. But I find the leading keyword compelling, prohibiting `this` initializers compelling, the issue about the brand check, I like the brand check, but I think it should be reexamined, until we declare consensus.

DE: I want to clarify what I meant. I agree that we should be able to reconsider things. If we think about it harder and come to a different conclusion, we should do that. My response to this has been in part making response tin the air, and in part examining committee history. Maybe it's hard to follow the arguments in the air that the original reasoning is still valid. The arguments that were made that have led us to where we are need to be recognized and considered.

MM: We need to consider the stated arguments, just consider some of these being not fully at consensus. Maybe the consensus will change.

DE: I'm not sure if that's a productive way for us to progress... I'm not sure how we should structure this process-wise. If at any point, people make a particular case, then we say we have consensus, then we make the same case again that doesn't convince people anymore. I'm not sure if we should retract proposal stages because of that situation.

MM: Depends on what you mean by progress?  I think that the reconsideration is that the lesson that we should take from classes 1.1

MM: I think that the things that some of feel should be reconsidered, should be reconsidered and not be in a state of consensus.

AK: What does it mean to not be in a state of consensus for things we have consensus for?

MM: We historically have had consensus, the issue is do we have consensus now? We've generally hold consensus. That the disagreement after the state of consensus counts for less. But we should be re-asking, do we have consensus now?

YK: From IRC, initiailzers being rare, forgot that pepole acutally use it frequently in some sub-ecosystems to create a bound method. We should consider that usecase strongly before dropping the feature. I.e. fields initialized by arrow functions. We should consider that before dropping support for that. I don't use it but it's popular. Fields who's initiailzer is an arrow function. The arrow closes over `this`,  so it creates a bound method.

BE: People really like that.

YK: There's no literal this context, it's implicit.

MM: oh my god, If there's no this, you can't be sensitive to what it is...

BE: Someone tweeted and example of this at me, if I may, consensus is fuzzy at the frontier. if it's really fragile, then why even have it? If consensus is retraced so quickly, you really didn't have it.

MLS: I have a softer view of MM's consensus. It causes me to want to move slower on the existing proposals going forward. In my mind, we need to consider the existing proposals in light of what was presented in the classes 1.1 proposal.

AK: To respond again to MM, I think that the presentation is a nice way to rethink the cross-cutting concerns. For me to go back to the state that I was in regarding the Stage 3 proposals. Given, that stage 3 represents some level of vetting and a lot of thought  It represents a lot of details on the grounds. Just because someone asked a question doesn't mean we've lost consensus.

MM: I agree with that

AK: It's a burden to do that research in a round just to re-do it in another proposal. It's hard to discuss whether `#` or `->` is more intuitive. OK, we've got people in one meeting to agree, but then ignore that.

DAV: I heard that the arrow functions use case, this one is important in React, because there are performance issues, we need to memoize things, so we often use arrow functions. We've enabled this about a year ago in Facebook, I've searched in our React repo and we have 16000 declarations like this in Facebook, in our experience people did not encounter any difficulties about this. so this is an empirical point regarding this

DE: Even though we don't have another topic on the agenda, maybe we can add another one tomorrow, based on what KG laid out the differences between the 1.1 proposal and the current one. We could go through and see if we want to adopt any of them. Or we could say that we leave this topic to a particular champion to go forward on that direction. It's been a good excercise to reconsider this. Ultimately, I don't see any changes to make to the proposals I'm championing.

DE: Is there any support for someone to champion that?

AK: Can we narrow down the list of things? Some interest in the leading keyword, some interest in getting rid of the brand check. Interested people should talk tonight, so the list isn't every single difference between the two proposals. I think we should list the topics left and discuss which ones to discuss.

YK: An uncontriversal one is the static block. Dan introduced it, and it seems to be relevant. I would like to do a presentation on lexical private declarations, in light of the fact that it became an important debate today. (NOTE FROM DAN: I did not introduce the idea of a static block; it's an idea from many other programming languages such as Java that was previously discussed in the ES6 timeframe)

#### Conclusion/Resolution

- Will not be multiple competing proposals
- Open to continuing to discuss issues that people may raise
- Will continue to discuss tomorrow
