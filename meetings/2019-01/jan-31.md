# January 31, 2019 Meeting Notes
-----
Bradley Farias (BFS), Aki Rose (AKI), Yulia Startsev (YSV), Mariko Kosaka (MKA), Shane Carr (SFC), Richard Gibson (RGN), Brian Terlson (BT), Michael Ficarra (MF), Kevin Gibbons (KG), Kevin Smith (KS), Justin Ridgewell (JRL), Mathias Bynens (MB), Sathya Gunasekaran (SGN), Chip Morningstar (CM), Peter Hoddie (PHE), Waldemar Horwat (WH), Leo Balter (LEO), Shu-yu Guo (SYG), Michael Saboff (MLS), Mattijs Hoitink (MHK), Yehuda Katz (YK), Till Schneidereit (TST), Pieter Ouwerkerk (POK), Tom Dale (TDE), Myles Borins (MBS), Sean Larkin (SLN), Godfrey Chan (GCN), Rick Markins (RMS), Daniel Rosenwasser (DRR), Mark Miller (MM), Lin Clark (LCK)


Remote:
István Sebestyén (IS), John-David Dalton (JDD), Adam Klein (AK), Daniel Ehrenberg (DE), Jordan Harband (JHD), Domenic Denicola (DD), Ben Newman (BN), Ross Kirsling (RKG), Frank Tang (FYT), Jory Burson (JBN), Conrad Watt (CWT), Guy Bedford (GB), Justin Fagnani (JFI), Robert Pamely (RPY), Eric Faust (EFT), Caridy Patiño (CP)
-----

## Freezing prototypes for stage 1

(Kevin Gibbons)

- [GitHub](https://github.com/bakkot/proposal-freeze-prototype)

KG: (presents proposal)

KG: I'd like to propose a mechanism for freezing internal prototype slot of an object. This is a bit complicated, so some details will need to be worked out, but those details are Stage 2 concerns.

JDD: Is this related to https://github.com/tc39/ecma262/pull/1320 ?

KG: No, this proposal would not resolve PR #1320. I'm not proposing freezing the actual object, just making the slot itself immutable.

MF: Is there precedent for objects like this? Is it possible that somebody has built a program assuming certain invariants about objects, and could this proposal break those invariants?

KG: Yes, there are at least two what are called "immutable prototype objects". 1) Object.prototype and 2) window proxy object. It's not currently possible to check whether the object's prototype slot is immutable.

MF: If objects of this kind already exist, that nullifies the second part of my question.

KG: Those are the only two, as far as I am aware. (Note: There are more objects which have immutable prototypes; see WebIDL and HTML for details.)

TST: I'm strongly in support of this, I think it allows you to separate two concerns that are de facto separate of each other. Preventing changes to its inheritance chain. It's also something the platform separating cases in userland, and I have use cases for this. It's absolutely the right thing to do.

JHD: When we added immutable prototype exotic objects to the spec, we discussed that it would be desirable to have a proposal exactly like this, to make them no longer exotic. I'm very excited about this proposal.

KS: I added something late—I'm ok for Stage 1, but I'm generally quite hesitant to expand the MOP. So when you bring it out, please be ready to address these concerns.

#### Conclusion/Resolution

- Stage 1 acceptance


## Intl.DisplayNames for stage 1

(Sathya Gunasekaran, on behalf of Frank Tang)

- [slides](https://goo.gl/qzQK8A)

SGN: (presents slides)

DE: Is there any more feedback we can gather about use cases and implementation concerns?

SGN: We already have implemented it in V8.

DE: How about use cases?

LEO: As someone who worked a lot in translation for Firefox, this seems great, but I think it's just a kick start.

SGN: Can you be more specific about what functionality you want to see?

LEO: Not for this method, which I think is a very nice kickstart. I think it's very useful from my perspective. So I want to see more proposals like this extending the functionally to expressions as well.

SFC: I'm very happy with Frank and Sathya working on this proposal; we've discussed it in Ecma 402 subcommittee and I'm very happy to see it presented as Stage 1.

JHD: It just occurred to me looking at these slides, is there any way to handle fallbacks? How would I reliably fallback to my existing translation system to fill in the gaps.


SGN: Currently there's no way to add data.

JHD: How would I determine it fails to fallback to my other function calls?

SGN: I think that's undefined currently; I'll make note of it.

JHD: Not a Stage 1 blocker; just wanted to make note of it.

#### Conclusion/Resolution

- Stage 1 acceptance


## new.initialize for stage 1

(Dan Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1norBeSTH8MOIRzTxuYaWDmi2UaZ8Sdq9XBGaKUnth3Y/edit)
- [proposal](https://github.com/littledan/proposal-new-initialize)


DE: (Presents slides). I want to credit DD for re-raising this issue and Allen Wirfs-Brock for raising it in the first place some years ago.

WH: This seems to be tied in very nicely with the first proposal from today (Freezing Prototypes). Given the hierarchy in the (corrected) examples (refers to example on Slide 9) — class `D` inherits from `C` — you can use this approach to prevent an adversary from messing with `D`'s prototype link to `C`. However, an adversary could play the same game to make `C` inherit from some strange class, and this approach wouldn't prevent that.

DE: I'm not sure what that would cause? Nothing really happens except for reading a value?

WH: You might get a strange object which you don't expect. Even with this approach, someone can add inheritance links which really weren't there.

DE: This proposal is more concerned with cases when you _don't_ want to freeze it.

WH: Okay. Now when you say "freeze", do you mean freeze just the __proto__ link, or freeze like we have now that also prevents extensions?

DE: I meant not the prototype but the constructor. The way a constructor works is it has a home object, like a static method, and super looks at the current class.

WH: Are you concerned about freezing just the slot or the whole class, since the Freezing Prototypes proposal is required for freezing just the slot?

DE: KG's proposal takes away some of the motivation for this proposal. On the class fields proposal, we had a thread where we talked about both of these proposals. I'm not making the case that we definitely want this feature, just exploring it as an option. That's why I'm proposing this as Stage 1 and not Stage 2.

WH: I would prefer a way to freeze just the `__proto__` slot linking a class to its super class, preferably in a declarative way. This would much more cleanly address almost all of the use cases of this proposal.

DE: So maybe we could make a more specific approach, like using decorators?

WH: I agree that the problem identified in this proposal is one we need to address, but freezing the `__proto__` slot is a simpler way of addressing it.

KG: WH are you OK with this going to Stage 1?

WH: I'm OK with Stage 1 to explore the solution space.

MLS: Do we expect people will create class hierarchy, modify prototype, etc? Do you think this will be a common pattern?

DE: I don't expect that this is a common pattern, no. The way the concern was phrased, this was the way to solve it. I don't know how common this need will be, but I think this is the best way to do it.

MLS: But we're introducing something you can use in a bunch of different contexts. It seems like the fix is worse than the problem.

DE: How do you want to avoid the problem?

MLS: Don't change the prototype?  if you're using class hierarchy, it seems weird that you'd want to change the prototype.

DE: I agree with WH, where this may not be the best proposal to address this problem.

KS: One of the use cases for private fields is to allow programmers to express internal slots in JS, and be able to do polyfilling and traditionally CSS-authored things like DOM. But JS is so wide open with prototypes; to serve the case with JSDOM's specific use case, it's unable to address that use case because it's overly restrictive. new.initialize seems like a patch over that after the fact.

MLS: I agree with that, this is a patch.

DE: I see this as a fundamental primitive, where it makes the common case ergonomic but the extra case something you opt-in to.

YK: I agree with MLS; I am a proponent of return override because of base classes. How do you create a base class that allocates?  Having constructors that return is important. The problem is that you use return override in a non-base class. I want to learn more about the DOM use cases, but I think this may add too much power.

MLS: This is basically a C++ placement new. So even though it seems like a simple addition, it would have to be replaced everywhere where this is called.

KG: In reply to MLS; I think the reason this is relevant for a library who has classes that are consumed by someone else's code. They want to behave in an expected way, regardless of what the user does.

MLS: If the library changes its prototype, it's in control of all its code and can easily work. If the user changes the prototype, the library can simply disallow that. So I'm not entirely sure what the use case is for that.

DE: Yeah, we could say that. That's a design choice.

SGN: (I will discuss offline)

BFS: (I will discuss offline)

KS: I think there is an artifact of the current design. Imagine if you had weak maps; you wouldn't have this problem at all. We're seeing the costs of the ergonomic things we've done previously with private fields in JS.

DE: This proposal is really about the interaction of field initializers (which are a very popular feature, where Classes 1.1 got significant negative feedback due to its removal) and ES6 dynamic super() semantics (shipping in browsers for years). It doesn't have to do with private or WeakMap semantics.

JRL: new.initialize is a required step to prevent abusing the constructor override return. If we don't have this, and I have code that I want to attach private state to some foreign object, then I have to make a base class that returns something so that child classes can use it as it's `this` and attach it's private state to. The whole point of private state is that it is better than weak map. Without this, we having devs use this clunky solution to get the same affect.

EFT: So there is no way to do return override in a subclass constructor?

(out of time; EF and DE continue discussing)

#### Conclusion/Resolution

- Stage 1 acceptance


## Private declarations

(Bradley Farias)

- [slides](https://docs.google.com/presentation/d/1Zu9uCFMUU4zLwBVSd3OOxtsm-CYyYvJIryLVGW5leoA/edit)

BFS: So the point of this presentation is not for stage advancement, but it is to find a champion.

BFS: (presents slides)

WH: This feels like symbols; these problems will be well-addressed by symbols. The reason just using symbols would be better is that with symbols it's syntactically clear whether you're referring to the symbol itself or the value of a property named by that symbol. Here (refers to slide 9) there's a lot of confusion about whether `#bar` means the name or the value.

BFS: I'm sure if I understand "the name" of something.

WH: In the brackets, `#bar` refers to a symbol...

JRL: He's talking about the reified key thing.

WH: If you say `#bar` in other contexts, it means the value of the property.

BFS: This is a weird thing also when .# is used. #bar is generally thought of as a symbol by people, but .# is an access. So I'm not sure if symbols solve this use case. Perhaps there are some syntactic problems with this. I would like to see this addressed, because people are starting to see usages of super override to do this. Private data does not do delegation like symbols do. So I think that even if symbols have a use case similar to this, they are not the exact same use case.

WH: I agree that this is an important problem area to look at; I just think there are too many different language features to address this use case, and I'd like fewer.

TST: So these do seem a lot like private symbols to me. What's not clear to me is whether they are first-class symbols or not. If you can import them into module it seems like first-class symbols. Could you for example store #bar as a first-class value?

BFS: This is a complex topic, but I don't expect this to be able to be passed around as a first-class value.

TST: How about between modules?

BFS: No, not unless you use the special syntax. Maybe we have different ideas on what import/export do. But I don't see how sharing the binding turns them into a first-class value.

YK: I agree with WH on slide 9. The main reason it's confusing is that I wouldn't require the [] around #bar. It makes it seem a lot like symbols. I don't like the syntax.

BFS: It is looked up still. There is a discussion on GitHub that explains why you need the brackets.

TST: BFS said this is like weap maps. Can you elaborate?

BFS: If you do the super override trick, and if you add arbitrary data to an object, there's no way for that data to get collected. (explains)

DRR: I think we'll get to this when Caridy speaks, but about how #bar gets resolved, based on when I've talked with KS and others... I am trying to give some ideas around giving a consistent view on how things are resolved. If #bar is in a computed property position, that may be something to consider.

JRL: Please don't think of this syntax as being useful only in the private symbols proposal. This syntax is also useful with the weak map proposal. We keep talking about this in terms of private symbols, and that takes away from the overall proposal.

BFS: Yes, I would still be talking about...

YK: I agree with what JRL said. Thinking about the mechanism is obscure in why anyone cares. The reason I care about it is that when you write classes before private state, if you write it in a hybrid style where you use functions as helper, it's pretty easy; you use private variables and methods in local state. We got to a point where we got static private to work. But if you write classes in the old (hybrid) style, you can't get to the static private methods. I like this proposal because it closes the gap between the two paradigms.

CP: Can you explain why [#bar] vs just #bar is important?

BFS: This is a consistency problem. Go to the issue thread and you can disagree with my conclusion. This seems like useful feedback so we can make it as consistent across multiple mental models as possible. The other problem is (slide 9)

YK: I think the high-order bit is consistency between classes.

DE: There are many different design decisions that are being conflated in this discussion. One is if it is possible to declare private names separate from using them. Back in 2015, we had a private keyword discussion. (discusses that proposal.)  So there is still opportunity for different symbols. Another question is whether to reify the names. The symbols proposal kind-of does that. But a question is whether reified uses weak map semantics or not. We could make it use other notation like the method notation in the decorators proposal. So the current proposal is a point on the design spectrum. if you are not satisfied with one particular thing, there are ways we could revisit one part of it.

(out of time)

#### Conclusion/Resolution

- JRL volunteers to champion the proposal.


## Iterator helpers for Stage 1

Presenter: Domenic Denicola (on behalf of Gus Caplan)

- [proposal](https://github.com/devsnek/proposal-iterator-helpers)

DD: (presents proposal from Readme file). Open question here is which combinators to implement first.

MF: I have a lot of comments in issues, but for the discussion here, what's the motivation for Iterator.prototype/asyncPrototype vs AsyncIterator.prototype?

DD: It makes referencing the prototypes easier.

BFS: Could we use Iterator.of; Iterator.from seems to... I would expect a corollary that Iterator.from is turned into a real iterator whether than something with the iterator protocol.

DD: A real iterator inherits from Iterator.prototype?

BFS: Yes.

DD: We could delete .of or look at .from.

JDD: I'm excited about this proposal. In lodash, we have support for lazy iteration, but it's our own weird solution. Having it be in the language is exciting. I like the amount of methods you have; I'm glad you're starting small.

JRL: How does this tie into generator/asyncGenerator? Does this inherit from the prototype so they get all these methods on them?

DD: Yes; they already do. We have these prototypes in the prototype chain and they've been sitting around waiting for us to do something with them.

JRL: Excellent.

TST: JDD mentioned this too, but how much of a focus is there on making this optimizable? We could add add hooks to make these optimizable, or go the other direction and make them statically analyzable.

DD: I don't know very well what would make them optimizable. My opinion is fewer hooks, more optimizable. From a long time ago, should we be using a common prototype or separate prototypes?  V8 team said it's okay either way. If you can get in touch with us about what makes these more or less optimizable, that would be great feedback to have.

WH: I like this. I ask for a little more insight into what made itself into the table and why. Perhaps more interestingly what existing practice _didn't_ make it into the table and categorize those into things we'd like to do in the future vs things that there are good reasons not to do.

DD: We have an issue for help wanted with this table. We could add more columns, add a column for this proposal, etc. We should work a little more on the rationale.

AK: I like this proposal. As we start to add things here, then people will want to add more things. Adding two things at a time might be too slow and we run the risk of people beating us to it and perhaps causing compatibility problems.

DD: It's a concern; optimistically, I think people won't mess with the prototypes as much as they had in the past, now that we have frozen objects, for example.

RBN: Iterable or iterator?

RBN: Compared to pipeline operator: it is more extensible and lets you pick whichever method you want and only requires that the object has the method on it.

DD: The language already does a lot of inheritance. We have an iterator prototype. If the pipeline operator made it far enough along, that might block this proposal. But I don't think that should block this proposal. I think we should continue adding things to prototypes.

RBN: I'm not saying that we should never extend the prototype, but I think we should put these on the Iterator prototype.

DD: I would be disappointed if there weren't a way to iterate over Maps, etc.

KS: I'm happy to see this feature being added to the language. I want to make sure at this point we're not closing ourselves off against the pipeline stuff RBN said. I agree we don't want to block forever on that.

DD: I think this is a better solution for various solutions; we can debate. But I think even if this goes to stage 3 or 4, this doesn't prevent us from having both.

YK: We should have a fuzzy best-guess of what it would mean to have both. It seems plausible that we might end up with both (this proposal and pipelines).

DD: We had a similar conversation about observables and iterators. If someone wanted to work on that, I think that would be the best path forward.

DD: If anyone has concerns about extending each and every prototype (iterator, map, array, etc), including implementation concerns, please let me know.

#### Conclusion/Resolution

- Stage 1 acceptance


## Update on sequence properties in Unicode property escapes

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-unicode-sequence-properties)
- [slides](https://docs.google.com/presentation/d/10ay5V9Pfbsk6sRlGmK-BfltEUJCc8AIMPn-_IpsNgsY/edit)

MB: (Presents slides). We're currently in a draw between the `\p` and `\q` mental models, but we decided to defer to the Unicode Consortium for a conclusion on this. We've filed [formal UTC-level proposals](https://github.com/tc39/proposal-regexp-unicode-sequence-properties#related-utc-proposals). We hope to get a final resolution this at the next Consortium meeting in May.

WH: I've been participating in this too, and it looks like the same kind of draw we've seen in this committee.

MB: I think it's the right call to resolve this at the Unicode level, because ideally other languages would implement this using the same syntax. It's unfortunate that it means this proposal takes longer to complete, but it will be the right result in the end.

#### Conclusion/Resolution

- No conclusion; just an update


## Private Symbols for Stage 1

(Justin Ridgewell)

- [slides](https://docs.google.com/presentation/d/1HWM_pREmpz7QN9VrNeFt5T-x6CfKBL06pXhiQcxgfgU)
- [proposal](https://github.com/jridgewell/proposal-private-symbols)

JRL: (presents slides)

YK: Please explain slide 11.

SRL: (explains the slide)

YK: In the case where you freeze the prototype, can you install state on foreign object (?)?

JRL: You can still install state on foreign objects. In the other proposal, you can't.

JHD: If prototypes can intercept "private" lookups, they're not actually private.

JRL: The getPrototypeOf proxy trap will not fire no matter what you do.

DE: I would be interested in understanding that.

JRL: Imagine you have an object and you're trying to get state from it. By default, it will go up the prototype chain on ordinary objects, not the proxy. If it encounters a proxy, it goes directly to the wrapped target, then goes up the prototype.

JHD: That raises the question of how do I write a proxy that throws on a private field access.

JRL: You can't, on purpose.

BFS: Can you make a comparison of your semantics and what the spec currently does on private slots?

JRL: I'll cover it later.

BFS: What do you have on private behavior of you do a lookup and it's not in the prototype chain?

JRL: It returns undefined like a normal property.

DD: Can you go back to the slide 18/19. The only one of these that seems developer-facing is memory usage. I'd like to hear from implementers on this.

SGN: In this case, the private methods are on the prototype. In this proposal.

DE: The stage 3 private methods proposal.

SGN: For the fast path, you pay per superclass per Map and if you do transition, you pay per superclass per instance.

DD: So that's not the same as this proposal, because there could be a prototype referring to each one, but otherwise there could be a prototype...

SGN: This proposal has better memory than the other one.

DD: Is there not a hidden path for prototype?

SGN: In this case, the private state lives on the prototype, and many methods share that prototype. But I don't think we should decide this based on implementation concerns.

DD: So, the main user-facing benefit is memory usage.

JRL: I don't think the change (what change?) should be taken lightly.

DE: (subject: "branding" is an emergent property of having private be reliable; reliability goals are independently motivated.)  I see branding as a term we can use to say that private is reliable. If you have private fields/methods, you know the constructor was entered with that instance as the receiver. This gives a centralization of control. By looking up the private fields on the prototype, or a proxy trap, you've giving up that centralization of control, and you're giving other ways of constructing objects with private fields that don't go through the constructor. Centralized points of control is good for JS. I think it makes sense to have undefined returned from property lookup that is different for private symbol lookup.

AK: (subject: Prototype lookup doesn't seem useful beyond methods.)  When we put symbols in V8, we started using private symbols inside, and we had to change behavior to be lookup own-only. It's just confusing to lookup the private symbol .  I think treating encapsulation in the narrow way in JRL's slides doesn't get to that point. I'm curious to see if prototype lookup is more useful than just in the method example.

JRL: (answers question)

AK: That sounds to me like a great reason to use weak maps.

AK: But properties on public things are things you could put there anyway. Whereas private things are private from the start. I would like to default to do the right thing. The nice thing with the current proposal is that you don't have to use bang or externally check brand.

SYG: This is different form KS's iteration of private symbols, which have property symbols. These questions make it clear to me that this does not have the simplicity of property semantics, nor the simplicity of ...

JRL: Can you say why these are not property semantics

SYG: I think for those constraints, KS said, the scale of properties, versus the iteration of private symbols is like properties, and this iteration is in the middle. It's not like weak maps and it's not like properties. Outside of these runtime reasons, for the end programmer, we see value in not having default reification for these things. It makes it for the end user, you can't use a computed property. From looking at the rest of the proposal, you're not going for reification, right?

JRL: Right; reification comes with decorators.

SYG: I don't think there's any indication for the end user that this is or should be like a property. It doesn't feel like properties.

??: Properties are public.

JRL: You can't add properties

SYG: That aspect of propertyness doesn't address the point of why we (the committee) are looking at private fields as a concept.

JRL: (returns to presentation from slide 26)

WH: You seem to label another proposal as the "branding" proposal, but there is no such proposal — the private fields proposal does not rely on branding. The "branding" terminology is very misleading. The only place where branding appears is as extra user code necessary to make some examples in this proposal work. The other thing that's misleading is the claim that this proposal provides encapsulation. Encapsulation is defined as combining a set of data properties and methods with guarantees that such methods and only those methods can operate on those data. You do not have encapsulation here.

JRL: If you can tell me how #foo would be extracted out of this, I will recall the proposal.

WH: Part of encapsulation is that a variable does not change unless you change it. But if you have more than one variable on an object, someone outside the class could play prototype games (that we've discussed a number of times before) to cause them to be different from each other. Because of this, this proposal fails to provide encapsulation. We're talking about the definition of the word.

YK: Do these properties have property descriptors? / Can they become non-configurable?

JRL: Yes.

YK: Are they default-configurable?

JRL: No... actually yes.

YK: Does Object.freeze turn them into regular properties?

JRL: No.

YK: (talks a bit longer)

DE: I share Justin's concern for good ergonomics in using #private. I really like that you kept the private method and field syntax. I think it will help adoption. We've talked about alternatives that remove the ergonomic syntax.

YK: This is a minor detail. I keep hearing people saying that the ecosystem does a lot of wrapping proxies. As a person who uses weak maps and weak sets a lot, I use them to store state about objects I don't own.

JRL: I agree; there's always going to be an issue with weak sets/maps. I don't want to open up the hole wider.

AK: There are lots of complexities added by Justin's proposal, and it's important to weigh that against what's there now.

BFS: I'm really concerned about reifying these things.

MM: [MM's comment sent by email and read by WH because MM had to leave meeting early due to unforeseen circumstances] Please praise Justin and all involved in the membrane issue for meeting my challenge and demonstrating a compatibility that I thought was impossible. Impressive! And I was wrong. However, private symbols still have a number of other "features", like lack of integrity, vulnerability to confused deputy, and visibility over inheritance, that decrease the quality of the language. We are better off without additional language support for private state than doing it this way.

WH: How does this proposal relate to the private fields proposal, presented earlier?  Is this proposal intended to replace that one or just to supplement it?

JRL: It would be joined. Eventually the private symbols would be a reification. I'm just trying to propose a different set of semantics around class fields.

RBN: I have concerns similar to BFS. I will discuss offline.

DE: With private method access being based on prototype chain lookup, mutations to the prototype chain from outside of the class could make access to the private method fail. This introduces a reliability issue that built-ins don't have: They are always able to access their internal algorithms, even if you change the prototype. The reliability for private methods is useful for the same reason as it is for built-ins. So I would rather not look up the private on the prototype chain; the only alternative I would consider is omitting the "brand checks" for private methods.

JRL: What we need to decide today is, we either pursue this proposal and move the current proposal to Stage 2, or we don't pursue this proposal. Chrome has already started implementing the current proposal.

AK: The current private fields proposal has been going on for a long time; SM and JSC are also working on implementations of private fields.

Moderator: does anyone have an objection to Stage 1?

(several people raise hands)

(people discuss procedural issues)

AK: It seems like we do not have consensus.

#### Conclusion/Resolution

- We will not move forward with this proposal. The private fields proposal remains at Stage 3.


## TC39 rationale - a proposed starting point

(Yulia Startsev)

- [slides](https://docs.google.com/presentation/d/1c4RY8ld-um7gsfoosoHNXQER6qZoUu6mLxiCwOjkhK0/edit)

YSV: (presents slides)

CM: (topic: intra-committee negotiations & tradeoffs?)  Everything you said sounds quite interesting and valuable. I think there's a piece in how things get done that's not well captured in how you record it, that each of us come to the committee with a particular list of things that get done. So there's a dance of, how do I get other people over to my side, how do I know what other people are concerned with and how do I weigh that into my proposal?  That's an important piece, but I think that's not properly captured.

YSV: I think this involves the ultimate goal of this exercise. The goal is for us to find concrete examples that we can use to illustrate our process to an external audience.

WH: (topic: Do we all understand what is being proposed for adoption and why?) It's unclear to me that, if you went around the room and asked folks what they think you're proposing, you'd get consistent answers. I like the idea of writing rationales for major decisions, but I couldn't figure out what the graph thing is being proposed and why; it feels like the members of this committee are being asked to be subjects in an anthropological study.

AKI: You already are by sitting on this committee.

WH: It seems like having folks put labels on a graph is bad. It would lead to a lot of arguments over which labels apply in which situation. For example, which arrows should be labeled with the "Fairness" tag or the "Complexity budget" tag? I suspect various folks will have differing opinions on that.

YSV: What I wrote up until Part II should be non-controversial. From that point forward, that is my personal perspective. Organizing the source texts is how I can better understand the decision-making process. The graphs are something for me; they won't get published.

DD: Concretely, what work does this add for me as a champion, if any?  You're saying that we would have to tag the discussion?

YSV: I would do the preliminary work of tagging notes, and the champion would have to review.

YSV: Is it worthwhile that I continue to do this work, or should I stop now?

WH: Having rationale for decisions is great, but they should be written by a good prose author, not constructed in some kind of mechanistic way via graphs. I'm skeptical about the utility of the graphs, but am open to being convinced.

BFS: It seems that this would be a great tool as a champion to know what the problems are with proposals, exploring which paths need to be explored, etc.

#### Conclusion/Resolution

- No specific conclusion


## Overloading method parameters between BigInt and Number: Just Say No?

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/11A3MSCUv9XEkquWPaCl3GkksI4v5bhZOMSe5r5Aj_uw/edit)

DE: (presents slides)

DE: Can we recommend, even where it semantically makes sense, like in Intl.NumberFormat, let's not overload parameters between Number and BigInt?  This recommendation may be followed outside of TC39.

MB: If I'm writing any library that deals with numbers, now I have to write two versions (duplication of APIs).

DE: In most cases, you should use Number. You would have to argue why you need to support BigInt.

MB: As a library author, I can't predict what number ranges my users will need to operate in.

DE: In general, I want to discourage people casting between Number and BigInt. This is an education issue; maybe someone with more experience can comment. The main issue here is that overloading risks rounding, which is what BigInt is trying to avoid.

MB: I'm not talking about casting. We agree that casting is bad. Simple example: create a library that adds two numbers together.

DE: That seems a little bit abstract.

MB: If you're adding two numbers, even if you don't mix operands, you may still want to support both types of input because you don't know in which range the user needs to operate.

YK: We chose not to support this across the `+` operator; that library still seems abstract.

MB: Adding numbers was just an example. Pick any numeric operation that cannot be completed using only operators.

MB: Anyway, I'm not talking about mixing numbers and BigInt. I'm talking about an API `add(a, b)` that would work if both `a` and `b` are Number values, or if both `a` and `b` are BigInt values.

YK: DE is saying that it should be a really explicit decision if you accept a BigInt, because you may need to have specifically different behavior. It encourages defensiveness by default.

DD: Yeah.

DE: I would discourage that pattern from libraries unless they have a strong reason for it.

MB: I'm just pointing out that if we accept this proposal, we're duplicating the API surface for every single API that deals with the concept of numbers. Web platform APIs are one thing, but we need guidance for userland APIs as well.

(YK and MB converse more)

WH: My answer to DE's question on the last slide is "No". I think this is too absolute of a rule as worded there. In 95% of the cases, I fully agree with it, but there are some cases where it would make sense to overload based on number type, and I don't want to forbid those with this blanket rule. An example is it might make sense in some cases to make things like min and max heterogeneous, even though we decided not to for those particular ones. I don't want to end up with separate Map and MapBigInt just because of this rule.

DE: We decided not to in the min and max case. What about `NumberFormat`?

WH: That's an interesting one. I'm not sure how I feel about `NumberFormat`. I'm not ready to discuss it now because the item on the meeting agenda was the blanket rule rather than `NumberFormat` specifically. Also, it would take more time than we have to discuss the nuances and implications of what we do about `NumberFormat` here.

DE: I'll bring up `NumberFormat` on a separate agenda item in the future.

#### Conclusion/Resolution

- We need more discussion; TC39 does not make a formal recommendation at this time.


## Simplifying Set constructor

(Kevin Gibbons)

[GitHub](https://github.com/tc39/ecma262/issues/1430)

KG: (explains issue)

JRL: If I have a custom subclass with custom .add, is that still used?

KG: Yes. This is specifically about the `new Set()` case.

AK: This is an observable change in behavior. It's not clear that there's an advantage to taking this risk.

KG: This came up in the Set methods discussion. It makes it harder to implement those methods in a consistent way.

AK: Why do you think there's no risk of breaking the web?

KG: Because you would have had to have overwritten Set.prototype.add.

JHD: ES6shim overwrites Set.prototype.add. But, theoretically, any browser that implements this shim won't break.

KG: I looked at npm for everyone overwriting Set.prototype.add and all (mostly all?) occurrences are shims.

BFS: We had a discussion about Promises calling .then.

JHD: That was about whether Promise.prototype.catch should call into Promise.prototype.then. We decided not to make that change, but we could make that change in this simplified situation.

KS: For await, we could make a change where we avoid a case where we... in that case, there was a well-documented performance improvement. The cost-benefit analysis was well-done in advance. For things like this, I would like to see more evidence.

CM: (topic: Is the problem this is a cure for any different from the rest of JavaScript?)  This makes me wonder if this is the tip of the iceberg. If the issue is that the spec was just not written in a defensive way, then how about everything else in the spec?  Do those classes have the same issue?

KG: Most things in the spec do not operate on userland code in this way. I find it weird that the spec is less defensible than code I try to write. I don't think there are many other cases like this in the spec.

BFS: I saw this when I was working on toKey and toValue. Sets are kind-of unique in doing this kind of lookup during construction. I understand why it was done, for subclassing reasons, but the newer proposals don't have this kind of delegation for all the kinds of hooks you might want. I don't think this is part of a bigger problem.

SGN: (topic: Makes implementation easier. I like this proposal.)

TST: Can you talk about code complexity?

SGN: Currently, we have to check the protector cell every time; with this change, we can just say that subclasses have to go to the slow path and remove the protector cell entirely.

TST: Is the check in the constructor?

SGN: Yes.

KG: Are we okay with this being a normative PR rather than staging?

(a few thumbs up)

#### Conclusion/Resolution

- I will come back with more research and a PR.


## Module specifier for builtins

(Myles Borins)

- [GitHub](https://github.com/tc39/proposal-javascript-standard-library/issues/12)

MBS: (presents slides)

DD: Thanks for the concrete questions. I personally would recommend Node.js not to wait. It will take a long time for different parts of the ecosystem to do built-in modules in any form. I think Node should go with its own method. The worst case is inconsistency later.

WH: Does your answer apply to import syntax changes or just reinterpreting strings?

DD: Whether we do syntax changes or not, Node should be able to ship modules regardless of the undoubtedly long process of the committee getting that change through.

JHD: I think it's bad for a platform to set a strong precedent here. If Node or browsers choose something here, it has high likelihood of it turning into web reality and being forced into the spec, which has been bad previously. The advantage is faster shipping of things. I think in general, platforms should be careful about introducing precedent that is hard to change later.

JHD: Built-in modules are still stage 1. It's not clear if or when it will move forward.

BFS: JHD, you said there's a lack of desirability for platform precedent here. You've also mentioned that we could use strings. From your perspective, what you personally recommend to do?

JHD: Not wearing a Node hat, as TC39, as long as I'm wishing, my wish is for these questions to have been solved before modules were first added to the spec. Implementations shipped long after the spec was written without having resolved all of the problems for all engines, like node. My personal opinion is that Node.js should use strings and npm syntax. DD's import maps proposal is a way for that to interop well as long as they use strings. If a syntax is chosen, a language feature similar to import maps is a way to interop well. I don't want that labeled as the TC39 opinion though. We're stuck in a hard place with most of the features that were specified before they were implemented.

MHK: Not getting ahead of a proposal we haven't put to committee yet, I would say to stick with a string.

BT: My opinion is, "Don't wait. Strings > identifiers. Yes, benefit. Out of scope in that you can do what you want, but good to get feedback. Do it now."

BFS: Do you think we SHOULD or SHOULD NOT wait?

BT: I don't think anything we're doing should block you from solving this problem now.

TST: I think it's not in scope for this committee to discuss. It would be in scope if you introduced new syntax. But given your implementation as reference, I agree that you should not feel paralyzed by what TC39 is doing.

MBS: We had collaborators over in Node who were unsure. I think this recommendation helps a lot. We want to be careful making decisions that can affect the whole ecosystem. It sounds like the general opinion is that we should not wait based on TC39 unless the changes affect the syntax of the language.

#### Conclusion/Resolution

- The committee agrees with MBS's final comment above.


## Communications: Discourse Strategy

TST: I am in favor of shutting down es-discuss. Mozilla maintains the list. I would very strongly oppose shutting it down until we have something better to replace it.

AKI: I agree; we need a replacement. I hope Discourse is that answer. JRD, are you satisfied?

JRD: I am in agreement with creating an alternative. I'm not in favor of closing down discussion on es-discuss until we've proven out an alternative.

AKI: People won't move until we force them. If we just wait awhile, nothing will happen.

JRD: I would love to see an example of some people choosing to go and be on both. I certainly would be on both. I just want to see some usage.

AKI: I think in offline discussions, many delegates said they would participate in Discourse. We had a limited time in es-discuss where delegates were participating. I think the odds of us trying Discourse and going back to a mailing list are close to zero.

JRD: I don't want people in the community to feel forced; there may be people in the community who prefer mailing list. I just want to be cautious about the transition.

WH: I researched more about Discourse. Similar to what MM mentioned a couple days ago, I also find it really demeaning. There is way too much gamification. It measures how much time you spend on it; if you don't spend enough time with it every day, you will lose points. It's like Farmville. If you don't keep up with it, you lose status. Furthermore, you don't get status for reading via email — you need to read it via Discourse itself.

AKI: First of all, we can configure it however we want. Since you're a delegate, you don't have to worry about the levels thing. The point is that it makes it easier for some people better about participating. I get about being demeaning, but once you have an active community, it rewards for reading and engagement before you post.

WH: If you read it over email, you don't get rewarded. I like es-discuss.

AKI: How many people have participating in es-discuss over the last month?

(two people raised their hand)

WH: Several of us are participating on es-discuss, most of whom happen to be remote at this meeting.

AKI: How many people are willing to try Discourse?

(more people raised their hand)

WH: Okay, let's do this experiment, but let's not shut down es-discuss until the experiment concludes.

AKI: Nothing would happen if we do that. There's already a Discourse set up.

YK: I think interpreting how to use Discourse, like the Hello World tutorial that MM described, are not really accurate descriptions of what normal usage of the product is like. I'm active on multiple Discourses and I don't consider it too "gamified."

TST: There are concerns here that we need to carefully consider. Ultimately this will contain some amount of a tradeoff between requirements and candidates, and I think some concerns are valid.

EFT: I'm in favor of finding something besides es-discuss. It is just not moderable. I appreciate what TST has done, but it's a lost cause.

SYG: Delegates feel actively disincentivized for engaging with es-discuss. A lot of delegates raised their hand that they would engage with Discourse. Why?

DE: On what encourages or discourages participation, it discourages me from participating if another TC39 member would write the same response. I think it's important to explain context to people.

YK: People who know more about TC39 are more empowered to participate in threads. Discourse seems better on this front.

TST: As a next step, set up a Discourse instance and work with delegates that the configuration meets their needs as much as possible. If we end up with a Discourse instance, this process should alleviate concerns and seems like a prerequisite. Changes are, Mozilla's IT department might not want to send out passwords for mailing list participants once per month.

#### Conclusion/Resolution

- Spin up Discourse and configure the instance, but do not give public access. Decide in March whether to move forward with it.


## globalThis Follow-up

LEO: This is a conclusion statement on globalThis. I tried different approaches, talked to browser implementors, and determined there's no possible way to get an actual browser get actual metrics about the usage. There's simply no way, unfortunately. The alternative way was trying the other names, but we also collected objections for those. I don't think I will have energy or time for that. Since browsers are already shipping `globalThis`, I think it's too late. Some parting thoughts on this, I think secrecy didn't work on this. We did this in light of smooshgate but I think communication should have been better. It would be interesting if we could find ways to reach out to JS educators or those who come in good faith to give feedback to us. This is frankly upsetting, I wish it could have a different end, but this is how it is.

SFC: This committee has a communications problem, which AKI has been doing great work to resolve. We should engage AKI and Comms to make a PR strategy that makes sure that the community understands that their concerns were heard and that we considered them carefully in this committee.

#### Conclusion/Resolution

- Try to get educators more involved on this committee. Avoid secrecy in the future. Engage Aki and Comms to deal with this specific situation.
