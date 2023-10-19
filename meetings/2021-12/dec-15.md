# 15 December, 2021 Meeting Notes

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Josh Blaney          | JPB            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Zibi Braniecki       | ZB             | Mozilla            |
| Jordan Harband       | JHD            | Coinbase           |
| Frank Yung-Fong Tang | FYT            | Google             |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Nicolò Ribaudo       | NRO            | Invited Expert - Babel |

## Records and Tuples

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-record-tuple)
- [slides](https://drive.google.com/file/d/1lVYn8_sHecqxW08vN5Tu7rXZn7GemBqO/view)

NRO: So today we are giving an update about the records and tuples proposal. Specifically, we are exploring the design space around referencing existing objects in records and tuples. The current proposal defines those two new immutable values which are similar to arrays and to objects and that are compared recursively by value, rather than by identity/pointer, and currently records and tuples are two new primitives. They can only contain other primitives, so you cannot put an object inside of them. They use SameValueZero semantics for triple equal, and SameValue for Object.is.

NRO: The main problem that we are facing with the proposal is that everything in JavaScript is an object, and we need a way to attach objects/functions or any non-primitive to records and tuples. We prepared this decision tree to explore the possible alternatives. You do not have to read this now. I'm going to walk step by step in all the different branches.

NRO: So let's start. So there are two ways in which we can reference objects in records and tuples. One is using primitives to represent objects. And the other is to directly put objects there. So if we want reference objects using primitives, we again have two alternatives. One is using the "symbols as weak map keys" proposal to put symbols inside of records and tuples and to have a side table using a weak map to map from the symbol to the referenced object. This needs the "symbols as weak map keys" proposal to avoid memory leaks because currently you can only put symbols inside classic Maps, but they would not be garbage collected. So, how would this work? You need two different side tables. One going from symbols to objects and the other one going from objects to symbols so that, given an object, you can get the same symbol reference every time and you can dereference a symbol. You would put the symbol inside of the record and you would query the weak maps to get the objects. This approach has an advantage: it is a simpler proposal to specify and to implement because it has less features. So it's also easier to learn. However, it requires some userland implementation of those side tables and it might not be easy to implement them. Also, since we have this userland abstraction, it does not work well with debuggers: when you try to log a record containing a reference, you would just see a symbol and not the referenced object. And lastly, since this is implemented in userland, there is not a shared compatibility point between libraries: either you have access to the side table or you cannot know if a symbol is a “real” symbol or an object reference, and different libraries using different side table implementations would not be compatible with each other.

NRO: There is a question regarding these "symbols as weakmap keys" approach and it is what to do with registered symbols, which are symbols created by Symbol.for, because they're never collected. So should it be possible to put them in WeakMaps? The possible answers are "no" and "yes". With "yes" we have a potential memory leak because we have a WeakMap and we generally expect weak map keys to be garbage-collectible. But this could never be collected, not even if the realm is collected. You would have to collect the WeakMap. If we throw when trying to put registered symbols inside of weakmaps, we would have a difference between registered and unregistered symbols, which might complicate code that uses weak maps.

NRO: Okay, so the other option rather than using "symbols as weak map keys" is to use a new placeholder primitive. We presented this object placeholder last time. We proposed introducing this like object placeholder primitive and "object placeholder" is just a placeholder for the final name. We have not decided what name we would like to use for object placeholders yet. These represent objects without being the object. And you can use them to create references to objects and dereference them. This is similar to the "symbols as weak map keys" capabilities. However, we found that there is a security invariant that we should respect if you go with this approach and it is that primitives don't give direct access to objects from other realms. So if you have a placeholder for an object coming from a different realm, you should not be able to get the object. The solution we came up with was to let the dereference function only dereference placeholders created by the corresponding placeholder factory function. This means that if you create a placeholder using the ObjectPlaceholder function from a realm, you cannot dereference it using the… In this case, it calls the getObject function from a realm which is different from the one where the placeholder was created. However, you can still get access to the original dereference function to dereference the placeholder. And again, this is similar to how symbols as weakmap keys work because with symbols as weakmap keys, you can only dereference if you have access to the WeakMap, where the map keys are stored. And why is this a security constraint? There are different libraries out there that need to create some isolation mechanism. This is done using iframes and using vm.createContext on node.js. And most existing implementations of this isolation mechanism assume that if something is not an object, and if it's not a function, then it's safe to pass it to pass it from one side to the other. For example, we found these assumptions in the `vm2` module, which is the userland evolution of the built-in `vm` module from Node.js. And we actually opened a pull request to remove this assumption. Also, it's important to notice that not every implementation is vulnerable because some of them have explicit list of globals that would be allowed in the iframe realm, for example, Endo.JS (or just Endo?) has a list which does not include ObjectPlaceholder, so you would not have access to the function to dereference object placeholders inside the realms. So even if you get a placeholder from somewhere, you would not be able to open it.

NRO: And so what are the advantages of this approach? It does not introduce different capabilities other than symbols as weakmap keys, but users do not have to maintain manual symbol-to-object side tables and we can have shared semantics across all libraries in the applications. So different libraries would work together. However, the disadvantage is that it's the only built-in function that by default does not work across realms. You can make it work for example, by sharing the same ObjectPlaceholder function.

NRO: So, if you go back to the root of the tree of possibilities, the other branch we had is that records and tuples could contain objects directly without any abstraction. Currently records and tuples guarantee deep immutability. With this they would just guarantee a single level of immutability. You cannot reassign the properties of the record, but you can modify the properties of any value stored inside the record. Again, we found that this also violates the security invariant that given a primitive you cannot access objects from other Realms. And in this case if you have access to a record, you would be able to get the objects inside. So the solution we came up with is that in this case records and tuples must be objects and not primitives. The other invariant we found talking with different people, is that `===` and `Object.is` must return the same result when used with objects. In the current proposal, they would be different because we use SameValueZero for `===`. So one solution is not to use SameValueZero, but use just SameValue. So -0 and 0 would be different. And this matches how objects work. So you can see in the example that a record containing negative 0 is different from one containing positive 0. The other solution is to normalize negative zeros to positive zeros. So, as soon as you store -0 in a record it becomes a positive 0 and this means the comparison returns true both for triple equal and Object.is because the value stored is actually the same.

NRO: The advantages of this approach of just putting objects inside records is that you do not need an indirection layer. It completely avoids the question of what happens across different Realms. However, there are some big disadvantages. One, is that you can accidentally put objects in records: because the current proposal throws, if you try to put something mutable so that you are sure that everything is immutable when you create it. In this case, you might accidentally forget the hash in front of the inner object, making it mutable rather than immutable. Also, records and tuples would not be able to pass across ShadowRealm boundaries, because they can only support sharing primitives. And lastly, the fact that something is an object does not imply anymore that it's a valid weakmap key, or at least it doesn't imply any more that it can be garbage collected.

NRO: And if we also analyze the disadvantages of the two approaches to solve the equality problem. First, when having different positive 0 vs -0. So our record containing positive zero is different from a record containing -0, but currently most JavaScript developers do not need to pay attention or even to know about the positive and negative zeros while it would suddenly become important, when using this proposal. And the disadvantage of normalizing -0 to positive zero, is that -0 is not bad. It's actually a wanted feature of floats and it's used in numeric algorithms and we would make it impossible to use those with records and tuples.

NRO: So, a quick recap of the invariants that we found - primitives cannot give access to objects from other realms, and `===` and `Object.is` must be the same when typeof is `"object"`. So here is the tree, which shows all possible choices that we have to make. You can see symbols as weakmap keys on the left, placeholders in the middle and records and tuples containing objects directly on the right. Our preferred solution is the middle one. So it's to introduce placeholders for objects. But we are looking for consensus around which strategy we should follow.

NRO: Okay, so actually if there is anyone from the SES group, I would love some help answering the security questions. The first one from Kevin.

KG: First, this is an excellent decision tree. Second, I'm not totally convinced by this invariant that primitives don't give access to objects from other Realms. There are, I think, very very few programs which rely on this property, which currently happens to hold, or at least sometimes hold. and having those have a slightly different thing which just says these records and tuples need to be handled specially, where you need to ensure they don't actually contain an object or passing them across the boundary doesn't seem like that big of a deal. So I would like to hear more about why this invariant is so important.

NRO: So the problem is that existing libraries have this invariant and their security properties would be broken by introducing records and tuples, and this is, for example, why we had to fix it in the `vm2` module: so that new versions would not be vulnerable. But if you update your engine, and if you are using an older `vm2` version, you will be vulnerable to this objects-sharing problem. So, this is not about new libraries which can be updated. It's about existing libraries using production where the engine could be updated without updating the library.

KG: So this is only a problem in the presence of new code, right? Because records and tuples don't exist in current code. So you have this assumption that the library can't get updated. But it also has to deal with new code.

MM: Kevin. There's this thing called npm… people link old code with new code all the time. The program as whole is no longer a useful isolation boundary to reason about with regard to such things. and with regard to how often people do this, how common it is, every membrane implementation I’ve ever seen. There's there's, there's, you know, I've seen a lot. Everyone has the case in it, if it's a primitive, then let it through without wrapping. And there's several different ways to test. If that something's a Primitive because there is this primitive thing in the language, but the most common ones that I've seen is capital object of x triple equal x and typeof x triple-equals object or triple-equals function. And in both cases, these things would be considered Primitives and all of those existing membranes will just let it through without wrapping. So it's not just an assumption that's made at things that are that are between Realms. So it's an assumption that's made every time somebody creates anything any membrane or anything that's membrane-like. And the other thing that's especially dangerous is that most times when we break an invariant and we think we can get away with it, we go ahead and deploy like a beta version of a browser and see what breaks but the problem here is that you can break the security without any obvious symptom. You've introduced a vulnerability that now can be taken advantage of and you don't get a report at the point that you've deployed the browser that introduced the vulnerability.

KG: I am less convinced that it makes sense to talk about security properties holding when you update only half of your code. But we can move on, the queue is very full.

BT: Yeah, just a reminder that a bunch of folks want to figure this out. But if you want to discuss this topic, you can use the discuss current topic button in tcq and will come up to the top.

WH: Okay, Mark, you've just convinced me that any kind of object placeholder will break membranes. Am I wrong?

MM: Yes, you're wrong. The object placeholder itself is considered a primitive just like symbols are considered Primitives. It would go through the membrane. and if you also have a proxy for the object placeholder function, through the membrane and you get its dereferencing, if you get the dereferencing function, through the same membrane. Then when you apply the dereferencing function, on to the object placeholder, the dereferencing Function goes back over the membrane to the original dereferencing function. containing the same object placeholder. So it works. It works just like if you use the, the original, the the remote Date on a remote Date. Instance, it works because the operation on the remote date goes back through the membrane and the remote date, instance goes back to through the membrane so you have these local data operating on the local data storage. In case. The object placeholder goes back and forth transparently, but the ability to dereference it is based on the original dereferencing function, the referencing function of origin, which continues to work as it gets passed through membranes.

WH: So why is this tied to Realms?

MM: I would say the real issue here is not tied to Realms, that the real issue here has to do with assumptions that letting Primitives through letting Primitives through a boundary after they have passed an isPrimitive check does not carry object references through the boundary and that is maintained. the object placeholder and in particular, under SES, as we're calling it now, hardened JavaScript, you would likely have one these object placeholder functions / compartment, rather than just per realm, although we can revisit that only if necessary, but, but, but yeah, it's not specific to realms.

WH: The proposal is specific to Realms. I don't see anything in the decision tree which allows isolation between things which are not Realms.

MM: The decision tree is talking about Realms. I'm pointing out that the conclusion of the decision tree is actually more general than is stated here, and that compartments are still in an early stage. So it didn't it doesn't make sense to bring in the extra complexity of compartments when it doesn't change any conclusion.

BT: We need additional Note Takers. Hold on. We need. we can't, we need, we need some note-takers before we can continue. Ideally two people would be nice. Actually. It is fun to take notes. Taking notes helps helps a lot. I appreciate it. I’ve taken notes before. It's not too difficult. Thank you, RPR. Let us know what it looks like, if you think that would be nice.

Have be really nice to have someone. Help with notes. RPR will likely have things he needs to help with chairing. Luca Casonato. Just broke that. He can help. Okay, Jesus chopped. I missed that. Thank you for calling that out. Okay. All right. Sounds good. Then let's thanks for the point of order. Kevin. And note-takers. Let us know if you're falling behind.

WH: The invariant in the decision tree is only about restricting objects from other Realms.

MAH: So I'd like to answer. NRO during the presentation mentioned that it's only the get objects of That is attached to the factory function, that created that placeholder that can open and get the object out of the placeholder primitive. It is a pair of object placeholder, get object that works together. It just so happens that currently there is only one of those pair per realm. in the future if we have compartments, for example, or if the userland wants to virtualize this, they can. The invariant here is that it's an object placeholder/ GetObject pair that works together.

NRO: So, yes, the reason I mentioned just realms is because currently we have this "one realm"-"one global" correspondence. In the future we could have multiple `ObjectPlaceholder`s per realm, but in just not the case yet.

WH: I'd like to see this proposal disentangled from Realms. Thank you.

RBU: Yeah, I'll try to keep this brief because I think we should keep the key moving, but I think to back up a little bit more. Generally we've been talking about this concept of membranes as an invariant of this and I'd like to see some because I talk about this with CP a little bit in the past. I'd like to see some sort of thinking into whether membranes can just be updated because we're sort of enforcing constraint around records and tuples how they can interact with Realms because of this fact that exists that membranes already exists in production that use rounds in this way, right? And my general thought thinking behind membranes is that if you have a membrane that can run new code, but you don't have the ability to update that membranes and then that membrane is forever and ultimately insecure. So is it not true that we could simply update these membranes to account for this? And if not, then are the membranes worth considering in the first place.

CP: Yeah, so in our case, have membranes in arcade(?) is not a problem. We already update, those of we need to update on the other ones were not suffering from these. Because when you do virtualization, you are most likely you're already using a single place holder object between the term multiple rounds. They are proxies. So for us, it's not really a problem, but I still am sympathetic with the idea of having the invariant in the language known as solid because of membranes of just because I haven't seen any other interns in which A Primitive give you access to an object. Maybe Kevin can provide more details about why. si I didn't quite get what he was saying before, but we can demonstrate, This is already the case them for me is fun.

RBU: So then it sounds like both surfaces. We got membrane problems with Cooter types of rounds that membranes the iframes, and we got this future world with ShadowRealms, I'm not concerned about, we can solve those issues about transferability. Look at around in the shadow realms proposal, but I are only problem we have and we don't have any proof that it's actually a problem then I don't, I guess my point is, is that this doesn’t seem like a problem at all. I mean I would implore someone to provide more evidence that this will cause a problem for membranes, given the fact that like that membrane won't be updated but is yet still used?

MAH: Yeah, I'd like to understand why you said that a membrane that is not updated, becomes insecure.

RBU: This will hardly be the last update to the language that breaks an invariant like this.

MAH: Why? I mean, we've been, we've been trying to not break the web. We've been trying to not break deployed code. I am not aware of changes that great that have broken things like this, this, that deeply.

RBU: I don't think that there's consensus That this is a enough break. I think that, I think that

MM: I'm sorry. There’s not consensus that it's not a deep enough break. The proposal has to achieve consensus to go forward.

RBU: Sure, of course, I guess. My point is is that it seems like we have this vague like worried that this is a problem but given like these examples of these pieces of code that are written, that are deployed to production, don't have this issue. Then I don't see how you could quantify it as a problem. I guess, is my point.

CP: so the other question is, the inverse question like in which instances you will be using these Dad giving you access to those objects, across realms to be important and, and the secondary part of, will it be restricted now, can we relax it later? Probably. Yes, but not, but if we relax it now, we will not be able to change this anymore.

RBU: I mean, I don't have an opinion on relaxing. Now. This is relaxing later. What I think we should do is I think we should. We want some clarifying question or comment, but it's something we should come back to. Because I think there's investigation here.

BT: I also want to point out that we have a lot of topics and this invariant discussion is just one of them. So if the remaining replies to this topic could be concise. I think that would be good, just because it seems like it would be most valuable for the Champions if we can get to other discussion before the time box is up, we have JHX up next.

RW: (originally on queue, but deleted for the sake of time) In support of (RBU) Rick Button's point: Updating the existing membrane implementations to ShadowRealm will likely require extensive updating.

JHX: I am, I'm not sure whether I understand it correctly, but it sounds like this constraint also affect proposals like structs or enum, I mean, the value type proposals, which may contain object references.

MM: So, absolutely, the constraints that we're talking about all proposals need to be critically examined and will be critically examined with regard to those constraints.

JHX: Okay.

KG: Yeah, someone mentioned about primitives giving access to objects. The way that Primitives currently give access to objects is that they inherit from objects. String.prototype is an object. So like if you type a primitive and then you type “dot blink” or whatever, now you have access to an object. Now it is an object in the same realm, so if the concern is about Realms, then I understand that this doesn't give you access to a cross-realm object, but from the conversation between MM and WH earlier, I had understood that Realms are not actually relevant. And it definitely does give you access to objects.

MM: So for this one, we need to break it down. You already acknowledged that between Realms, this does not create any contagion within a realm and membrane is only a useful, isolation boundary if the implicitly shared objects are implicitly frozen as they are in Hardened JavaScript, in which case, the only things that it's giving you access to are the already pre-Frozen things. Likewise the TC53 embedded scenario, where there's only one realm, there's never a realm boundary, but all of the primordial objects are frozen and membrane in that scenario again, both sides can access the same String.prototype, but it doesn't matter.

KG: Okay, so we're not just talking about when there is a membrane. We are additionally assuming that all of the built-in objects are frozen.

MM: If when we're assuming one or the other, there is the between membrane case, in which case… sorry, there is a between-realm case, in which case the primordials on each side, don't need to be Frozen. That's actually why Realms are a useful additional isolation mechanism is that provides isolation without requiring the freezing of the primordials and then there's isolation within a realm that does require freezing primordials.

KG: I am increasingly unconvinced by this invariant.

MM: Noted.

SYG: Yes, I am also not convinced by the invariant especially if it is of the form: there exists some set of existing membrane libraries, that must continue to work because they haven't been engineered just so, taking advantage of some properties of the language at the time in which they were deployed. That does not seem like a sustainable thing for us as a committee to do while designing a language. This is a very high level thing I'm saying. I'm not really talking any particulars. I saw some threads on the Matrix chat that perhaps the TG3 might want to discuss this but I am uncomfortable with the shape of this conversation, basically.

MM: Okay, I think It certainly very appropriate for TG3 to discuss this. With regard to updating things these the security boundaries. One of things that they're often used for is to evaluate submitted code. That's not already linked in because it creates a safe evaluation environment. And any site doing that is, is you would be breaking the security of that site in the, in the face of new code that it's linking in, and that is a Breaking the web type consideration. It's not just a linkage between library out of skew consideration.

SYG: But by that argument - I mean, this is a straw person that I'm standing up here - but if a library is used in an application security capacity, and for example, exhaustively checks, every kind of built-in object when it gets an external object that exhaustively checks every kind of built-in object that could be and it just doesn't handle the objects that will work until we add a new kind objects. How does that mean we can't extend the language. I'm not sure what were the line drawing is because I don't quite understand the.

MM: So getting these lines clearly drawn as one of the reasons why several of us including myself in so enthused can get the whole “write down the invariants” thing going. Once we've got invariance written down, then we can reconcile these security libraries. he's with the written down invariance, over time to where the we can. We can try have these security Libraries count on invariance written down. But right now all these security libraries going back to Caja at Google written in the 2009-2010 time frame using the enablers in ES5 the These things are written to best practices with what's possible in the JavaScript of the time. And we need to recognize what those practices are. That's what we've always done with regard to not breaking the web. when we tried to upgrade to ES5, we did several things that we thought we could get away with, many of which we did get away with, some of which broke the web and we backtracked on.

SYG: Lots to say here, but let's move on.

JHX: Could we keep the constraint by allowing proxies around records and tuples?

NRO: No, because existing libraries do not know that they would have to wrap these. So this is not like this is about existing code that does not special case records and tuples.

RRD: Okay, I will quickly conclude. So our preference here is placeholders. We think that in order for object placeholders to be possible. We've been interacting with this group and that's the real restriction is kind of necessary. However, if as a committee, it comes in like that the Restriction is not needed anymore, it is easier to remove the restriction, then to edit later to carry this point earlier. So if we're going towards object placeholders now, working to maintain this probably unless we are being told by large majority of the committee, that it's not needed and we should move on from that topic. There is a lot of stuff on queue here.

CP: So when we talk about this these invariants are we talking about in the context of iframes and Node and so on but not in the in the context of shadow Realm. Is that correct? Because in ShadowRealm, the Restriction will be in place. Yeah.

RRD: Yeah. It's for iframes.

CP: Yeah, that's why I was asking. We know that this is going to be a problem for developers to really see this restriction as a as problem.

NRO: Can we maybe do a temperature check to see how people feel about these invariants? Specifically about these allowing access to objects across different realms.

RRD: Okay, independently of the existence of symbols as WeakMap keys as well. Like this is just if we were to do object placeholders, what do people think that the invariance?

BT: if if you really think it would be helpful we can do that. But we also have a pretty long queue, and I think comments were pretty Illuminating on that topic. It's up to you.

RRD: It has been a long standing issue for us. So that would be a very interesting point of data.

RW: are we waiting for me, or is the current conversation going to continue?

??: Yeah, Brian. Yeah, I think maybe too much time discussing whether we do the 4 knots, any color. Do you want to still do it? I mean, we can do it at the end of the times. Lat. If we still end up, this is something that I like that better.

BT: Okay, go ahead RW.

RW: I definitely agree with the next two queue topics (SYG and JHD) in whole, which is that “any symbols as weakmap keys” is independently motivated, and could be fast tracked on its own. For our purposes, at Salesforce where we’re driving Shadow Realms, “symbols as WeakMap keys” are preferred. Back to your decision tree: the left-most path is ideal for us.

BT: I moved all the object placeholder or the symbol as WeakMap keys together. (referring to TCQ)

SYG: Yes, basically the topic is what it says. I prefer symbols as WeakMap keys. There is you know the open question to be worked through whether it's any symbol. Or it's only collectible symbols, but that seems to be an independently motivated thing that would help here. It would sidestep the problem. It would enable new use cases. It would remove complexity from this proposal and from implementations and The, the last point about the complexity and the, the how targeted the use is, specifically for maintaining membranes existing membrane libraries that some of us are seem to be unconvinced by right now. I would not prefer object placeholder. and if direct references to mutable objects in records and tuples is untenable than I think I strongly prefer symbols as WeakMap keys. That's all.

NRO: and so, I think one of the reasons that the Symbol-as-WeakMap-leys proposal was abandoned was that we did not have any use case other than represent objects.

SYG: I think is subsumes a bunch of other use cases though, albeit somewhat, indirectly like complex keys in weak maps and in maps I think, you know, there have been proposals to do that directly, but if you have symbols, you could just do that by indirection.

MAH: So, my answer to that is, I believe object placeholder solves all the problems that symbols as WeakMap keys ithout having to decide if we want, which type of symbol we want to To allow as weakmap Keys, you can build everything. The same way. So all the use cases, that that would be solved with symbols as weak map keys and I believe like usage through Shadow realm. All those are exactly the solved by ObjectPlaceholder. I am not aware of any use case that that you wouldn't be covered the same way.

RBU: Except for the fact that this invariant, the record, the record of, excuse me, the realm invariant causes problems. That's difference.

MAH?: No, Doesn't because if you have access the,

RBU: I should clarify that the realm invariant causes problems for the committee. There's not consensus on what to do about the realm invariant. Whereas the realm invariant choice is made for you, four, symbols kids. Okay, that's not lie. Just to make it clear symbols are as weak.

NRO: Symbols as weakmap keys would have the same realm restriction as placeholders because you would have to send the weakmap to the other realm, as weekmaps are objects.

MAH: and the advantage of I really want to highlight that the advantage of object placeholder is in debug ability. You can look at your Dev tools and see that you have primitive. There's actually a reference to an object, not just a unique value that you have no idea what it is about.

MM: The other thing mentioned in a previous one of these meetings is that symbols as weak map keys has a mapping confusion problem, problem, which is different. The same symbol might be mapped to different objects and different WeakMaps, which is either a benefit or a problem dependent, but with the object placeholder thing, the only way in which the placeholder becomes a key in placeholder look up is to have been created with a correspondence to object that it corresponds to. So the same object placeholder will not be a key in multiple object placeholder look up tables.

BT: All right, we have eight minutes while I guess 10 minutes left on this topic. So just a Time warning. There's a lot of stuff so people could be brief, that would be good.

JHD: Yeah, I was just going to say that to me, the least dangerous approach here, seems to be the leftmost path, right? In other words, the the hazard is that if you're putting stuff in a WeakMap and you care about collectability so much so that you would that you're worried about memory leaks. Like that's the only use where this is going to be an issue. There's a lot of use cases for symbols as WeakMap keys this symbols as WeakMap keys. Proposed in a spec issue, like four years ago, long before records and tuples were floating around as a possibility. So it definitely is independently motivated and I see MAH’s question “Can I clarify less dangerous?”. What I mean is there's all sorts of as you go move right along the decision, tree, along the bottom. There's a bunch of red stuff and you run into a bunch of things where existing potential axioms are broken and you’re kind of choosing, which is the damage I like the least or I like the are the damage. I'm worried about the least as you move, right? And that's sort of the case here, with all of these options, right? You're just picking a trade-off. But I know, just from my point of view, it seems much worse, the more you go to the right.

MAH: I would just like to point out that you did say Say, if primitive new objects invariant holds in which is the only red part of the tree for the object placeholder.

JHD: right, but then the only built-in function that by default doesn't work across different Realms is something that I at least hold as something that should be red, even though not everyone necessarily agrees. That’s all.

YSV: I'd really like to get to topics towards the bottom, but I just wanted to say, devtools can do a lot. Speaking from my experience as a DevTools engineer. So for example, doing a lookup of whether or not is like if we have a well-formed pattern of how weak maps are being accessed from records and tuples or it's a well known relationship DevTools would be able to do a lookup of that sort. For example, we have specialized code in Firefox devtools to do lookups on React, like that's stuff that we've done. So I'm not really compelled by it's more difficult to debug.

MAH: I'd like to understand. Are you saying that DevTools would be able to show if any unique object or symbol might be used as a WeakMap key anywhere else in the program that seems

YSV: so, it depends on on how well known the pattern is and whether or not we can rely on it, but if it's something that we can rely on, that's something that devtools has actually implemented in various places for specific libraries. For example, we did that for debugging immutable structures in immutable.js where so that you wouldn't get a bunch of noise. It was cleaned up. Like what I want to get at here is saying that it's saying that it's just difficult to debug and it's Fixed. I don't think that that's that concrete.

NRO: Thanks for the info. We always assumed it would not work in devtools. So this is important to hear.

BT: We're down to about five minutes. So limit your remarks, if you can.

JHX: Okay, I just feel the symbols as WeakMap key may be useful by itself. But I think it's not a good solution for the record & tuples. what we want is to hold the object reference. This is a very basic feature and use symbols as weakmap, we actually ask the developers to invent the wheels again and again, that's all.

BT: All right. Thank you. Thanks. We have SYG next on the queue. but first, if the Champions wanted to do the temperature check.

NRO: We can skip it.

SYG: I suspect I know the answer to this one. So my initial reaction here was building. Why are you building this enforcement mechanism into requisition tuples in stealth itself instead of leaving it for the membrane itself? And part of the answer there is the is the existing code. I imagine that that because this is a new feature and there's existing code that Opposed to certain property using whatever tools they had available at the time. It is not in a position to update, I guess it's still the contention like Like it's my question boils down to because the existing membrane libraries can update.

MM: Yes.

SYG: Okay. Then we can move on. Okay.

WH: This distinction between objects and primitives bothers me a bit. There's a continuum between them and we have issues when things which are primitives behave like objects. Objects have equality based on identity while primitives have equality based on value. But symbols don’t conform — they are primitives with equality based on identity, which is why we have so many issues with trying to make them work with WeakMaps. And this will introduce another kind of problematic primitive which will have equality based on identity if it contains object references.

YSV : Okay, so this is just a quick yes or no. I hope is there. Another use case outside of records and tuples for object placeholder?

MAH: Yes. I have ideas for how this could be used to introduce, for example, like a way of serializing objects and sending them to another realm in the future, but in general, this is this is like a simple concept of a primitive placeholder for an object. And since we have Shadow realm that cannot pass objects through object placeholder the same way be used to represent an object.

SYG: I have to respond to that. I'm sorry. Wait MM, you can go first.

MM: I wanted to clarify with that? You say who luxury? The you can use an object? You can proxy for the object placeholder, Constructor another realm, you can in this realm, create an object placeholder, which can only be dereferenced in the other realm. Let's deserialization case of MAH talking about to make use of this in order to reify something that can only, then be obtained in another realm.

YSV: Okay. I have a follow on question to that. Is that something that cannot be achieved using the weakmap system?

MAH: No, because you cannot pass the weak map through [many interruptions] So let me clarify my answer, right? The the main problem is I then again it's identifying what is being passed? Like, when you have a symbol, you have no idea what its purpose is. So the main point is that now you receive something that has a specific `typeof`, you know what you can do with it.

CP: No, I disagree. I mean, when you, when you get a record and that record happens to be one of these object placeholder. You still don't know what what it is. So I think to answer YSV’s question. Yes, you did with the symbols. You'll be able to achieve the same in my opinion, whether that is a membrane across different realm to the role of membrane, in the same realm, or something like that. We'll all work the same way, you know, the symbol you will be able to use it to identify in a WeakMap. What is the object that corresponds to the object on the other side? Whether that's a proxy or not, so I believe the symbol will solve this problem. I want to add also that again. There may be what I say before. It was not a clear for us. The placeholders are not really a problem for us, or the WeakMap will work the same for us. So, I don't see, I don't have any objection on just focusing on the symbol for now then continue working. If we were to add any new feature to facilitate something for them.

MM: I want to be clear: We're not standing on the use case that MAH raised, we're answering Yulia's question about there. Other use cases in the absence of object placeholders. We we may very well be able to address the use case that MAH had raised them with me.

BT: So we're at our time box.

RRD: Can you just conclude with for the Champions on this point? Really easy? Yes, there would be a path steal. Introducing object placeholders later on if we have, she was as with my keys and we could use symbols as week might keys to prove you usage and use cases for object placeholders.

NRO: Okay, just before closing: have a monthly call for this proposal if anyone wants to join next week (next Tuesday). And we would be happy continue this discussion there.

BT: All right. Thank you. Also. Check JSC’s comment and in the future if you haven't seen it.

NRO: Yes, we will discuss offline.

### Conclusion/Resolution

- Update Given

## `Promise.prototype.finally` should use onFinally's realm for newly creating functions

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/ecma262/pull/2233)

JHD: Yeah, so if someone could present for me. It's PR 2233 on the spec. It's linked from the agenda, the great I cannot, but hopefully someone will be able to try and do it on my iPad if no one can but Let me see if I can fold that up. There we go. All right. Yeah, so can everyone see that? Okay, so this is PR that was put up over a year ago. Essentially fixing something that was overlooked in the promise prototype finally proposal. So the original issue here is basically that when the promise and the on finally function or in a different realm and there's Errors created, I believe are not sorry, the function them's the functions that are created themselves are created in the realm from the promise instead of the realm from the on finally function. And for reasons that I am not likely able to explain properly, but those who who understand these things hopefully have taken a look at the issues. It should be using the realm of .finally, instead of the realm the Promise to create these functions, and this choice was not intentional. The current choice was not intentional, it is what I believe all engines currently do is that they use the Promise’s realm and Domenic as well. Who originally wrote much of the promise spec I believe. Also agreed that they should be changed. And this PR does it. And so, since hasn't been brought to the committee for consensus? I am doing that. The yeah, so the crux of it is that what I would hope is that some folks who know stuff about realms would weigh in on their opinion. And it assuming that this is in fact the desirable change that then we would want. Implementations to weigh in on whether they're willing to make the change. It would have been something.

MM: So I object to this whole direction. The reason is that the language are rather. basically, why is that we have a language school called a dynamically scoped language. The something has to be creating the new function. We would be the promise of doing the creation. The promise has access to the realm that it's in. That promise has the power to create functions in the realm, that it's in the fact that the own finally function comes from another realm, should not magically grab the ability to create a function from the other realm. The that that's a spooky action at a distance kind of thing in general, a function from realm, should not implicitly grant the ability to create other functions from that realm and granting that ability to promises because they're primitive makes Promises unnecessarily and dangerously. Then for example, a promise Library, Rick new user code, code, could have fun.

YSV: so, this is a bug that came up in Firefox. Where the realm of await on finally, of how, await is specified is different from how promise then, and catch are specified. So we do have this behavior where the incumbent realm is passed in to the then and catch. And the reason we have the incumbent realm is for scenarios that MM just described as things that don't really exist. Pure GS world where the function is being called without a global, the federal realm this occurs in postmessage, this also occurs in DOM events. So I just want to finish what I was saying, so I think since this is not necessarily A JavaScript language, pure language situation, may be one way that we can resolve. This is through a host hook by Triggering this behavior on and off, depending on how the host configures it. Would this be a solution you MM?

MM: No, it would not be OK. Incumbent realm has come up before have been only with regard to browser objects in the only affected the browser objects. It didn't affect language objects, the host hook you're talking about would cause the language behavior on the browser just regarding language. to have this bizarre property that differs depending on the setting of The Host hook, even though there are no browser specifies objects involved. And so when the incumbent realm thing came up before, it was clearly a bug that we couldn't fix because of the way browser worked, but we were able to quarantine it to only having to do with browser object.

YSV: but this isn't the case because it has been They part of the promise spec, since the beginning.

MM: what has been a part of the problem?

YSV: The incumbent realm behavior that we're discussing now.

MM: Why? The incumbent realm Behavior. Was I mean es6. There was certainly no incumbent grown groan behavior in respect.

YSV: So this is, this has been this has been part of how promise then was specified. So we can't, so we can that we can discuss like if you have an idea for how to respect this, in a way, that would web compatible. We can discuss that. But I don't see a way that we can roll back this Behavior, but from promise then and from promise catch

MM: I would just let me make sure, let me make sure I'm understanding what you're saying the promise then without referencing this concept of incompetent. Then created the new function, according to the realm of the Callback.

YSV: Let me think. I believe it created it. So the incumbent realm represents the fallback realm when no realm can be found.

MM: Certainly no concept of incumbent realm in the JavaScript spec. Historically, if it's somehow sneaked into the JavaScript speckle. Not sure when that happens.

RPR: Oh, excuse me. We've got a point of order from Justin saying, saying, please present Particularly a rest request forms.

JRL: It has test262 case that shows what is actually user observable makes what we're talking about much more clear. We have different behaviors depending on whether you're using `.then` or `.finally`. It much more clear to talk about this in terms of what is actually able to see in actual code. So what we're talking about here is promise is the promise.prototype.finally, in line 24, if you change that to a `.then`, then you have a different behavior

MM: And where and which behavior is, which one is the is which one is this? Sorry. Sorry to interrupt again. Point bordered on the notes.

JRL: This test case is with the change, the proposed change, so that if you run line 31 and 32 will pass. If you were to change line 24 to `.then` the same test file will continue to pass. If we do refuse this change, then line 31/32 will fail. Is everything clear now? I'm sorry.

MM: It's going to take me longer to absorb this. That I want, that I should take the committee's time for.

JRL: Okay.

JHD: Yeah, I mean, my, my personal hope is that we either agree to do this or we close it. So I'm happy to come back to it at the end of the meeting after MM has had some time to digest.

RPR: All right, then so JHD should we wrap this up now and then return later?

JHD: Yeah, that sounds great.

RPR: You still have 10 minutes in the time box.

### Conclusion/Resolution

- Return at a later time for conclusion

## Decorators Update: Removing @init

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators/)
- [slides](https://slides.com/pzuraq/decorators-update-2021-07-cedd5b)

KHG: Okay, cool. So yeah, this is just going to be a quick update on the decorators proposal. There's some changes that we made recently in preparation for proposing for moving to stage three which were hoping to do at the next meeting in January. So I just wanted to run these changes by the committee now so that people understand that they're coming and everything. Cool so quick refresher on the capabilities of decorators. These are the fundamental capabilities that we decided that decorators would be responsible for and every decorator kind of has the ability to do these things. So the core ones were replacement. So being able to replace the value, that is being decorated with a like kind of value a method with a method, a field with a field on and so forth. Metadata, so you would be able to associate some metadata with that value, which could then be read by other code. And then access so that is basically giving the ability to access that value out to other and that could be, you know, with public values. That's pretty easy. You just give the name of the property of the value and then you can access it. But this was really important for private. Is where you may want to be able to set or get a private value through some friend code. There was a fourth capability, which was initialization and this was really important for certain use cases like the bounds decorator. but because of the original constraints we had we ultimately couldn't allow every decorator to just have an initialization because otherwise Is it would result in a very Dynamic kind of execution path? And that's why we added this extra syntax @init and so at an it gives when used with a decorator. It gives that decorator the ability to, to initialize the value. So quick refresher on that: adding an @ to the beginning of a value of a decorator like so, adds this @ initializer function to the context provided to that decorator and you can then pass a function into that initializer to initialize the add value. And so, originally Clash elements initializers would run during construction. They would run at the same time as class fields, and they would eat interleaved with class fields. And yeah, so that's basically initializers and added it in a nutshell. So like I said originally this was motivated to make decorators more statically analyzable. Basically, we had the situation where, you know, a decorator could be defined on a method between a few class fields and the idea was that the initializers would run in order. You start with, in this example, here you'd have an uninitialized field assigned first. You would have the initializers for method called s and then you would have the initialized field assigned to last. So, the reason I made this example here is to demonstrate one of the issues we found with this approach. It was really all in all a very controversial approach. It was very confusing to users. It meant they had put it on every usage of a decorator that required initializers and it also ended up in this case where you would have a really confusing behavior, where the fields, the for a method could reference the method before it had been initialized. So there was a period of time a method or another initialized value would be visible without those initializations. And that could be pretty confusing behavior to folks. So, yeah, basically, nobody really liked this behavior and everybody thought it was pretty confusing, but we were originally keeping it around for the performance constraints. So, after some discussions with folks, we actually decided that there was a way we could remove it and still meet these performance constraints. So that the updated proposal initialization is now considered a core capability of decorators. So it is now the fourth capability that they provide initialization is provided in one of two ways either for elements that are per instance like fields. They can already replace the initializer of the field so you can just call additional code during that initializer. And for elements that are part of class such as methods that are assigned once to the Prototype, Prototype, you can add additional initializers without initializer. That will run / for every instance, and these initializers are run all at once. So before class fields are assigned, they are run, so that class fields and other user code has no chance to see the uninitialized version of the method. In addition, because they are run all at once we no longer have to deal with the interleaving class fields and decorator initializers, which means from a performance perspective there's only one check that needs to be admitted for a decorated method to see if any initializers were added. So we're no longer having to add a bunch of additional complex code for class field in between class field initializers. There is one other consequence to this change. Previously it possible to have a decorator on class field specifically that could change the enumerability of that or other aspects the right ability using an it and how this would work is you would essentially have the fields would be defined on the instance and then it would immediately be redefined with the decorators initializer. So this capability is no longer provided in the same way because the only way you can decorate fields is by replacing their initializer. The only way you can initialize them is with their initializer. We saw this as not being a huge issue because this was never a capability that was designed for. It was just one that kind of fell out and it also was never a capability that was provided across the board with this particular proposal. instance. You could have done this type of decorator with fields. You could not do it in an efficient way with methods, since initializers run once. For instance, not once per brother-type(?). So the opinion we came to was that this type of capability should be provided by a different behavior in order for decorators to maintain their static analyzability and all the other things that we designed them for. Yeah, that's pretty much it, any questions?

RGN: Yeah, I wanted to thank you for the I'm thrilled to see it and enthusiastically supported. Thank you.

SYG: Could you go back to the slide that had the new semantics? I also like to apologize that I know you are mailed me for feedback and I've been swamped. I haven't been able to. So, okay. So the thing I was confused about here was initializers run all at once before class fields are assigned. So the idea here, let's take a number. Let's take number one first. You can do initialization by replacing the field initializer. So, in that case, all the ones that are replaced. Those fields conceptually have like an equals undefined then the replacement initializer run at the end after all the on replace decorators have run.

KHG: So initializers for fields, the way the way decorators for fields work is you can return a function that receives it basically pipelines. So that the decorator receives the initial value of the field, the first decorator, and then Returns the new value. And the idea is that you can also go if you need to run additional initialization code for that. You can also run that code during that initializer because that initializer has access to the class instance. It has, it can do anything that a class field initializer can do. So the only thing that it can't do is redefine the field after it's been assigned, because it doesn't runt at the same time, you can't do that in a normal class field initializer.

SYG: Okay, so what does it mean that initializes run all at once before class fields are assigned. What those initializes?

KHG: Additional initializers added via @, initializer per class initializer. So initializers for methods for accessors the. Yeah, those and I think that's a anything that is not a field.

SYG: Okay. So for fields the mechanism of initialization is only via replacement and for non fields. It's via at it at initializer and those additional initializers are the ones that that slide is referring to when it says run. All at once before class fields are assignment?

KHG: Correct?

SYG: Okay, I see so and then it's fine that for your use case that those initializers do not any fields.

KHG: Yeah.

SYG:, I see. Okay. I think this is fine from implementation perspective for how these are compiled for field initialization. Yeah, I think this is okay. And I do agree that if you can work around it and the use cases allow for it, not having the extra syntax. Does seem better for the users.

RBR: That minutes left on the find box. Yulia is on the cape.

YSV: So we also reviewed this to see if there were any remaining issues that we had with like dynamically initialize class fields, and it looks fine and I want to Echo what you said. The thing is we would like a bit more time to digest because we haven't looked at this for a while. So we did read-through but we don't think we did due diligence yet and would just basically like more time. But otherwise from what we have seen it looks okay.

KHG: Okay. That sounds great. When say you would like more time, the mean you would like more time before we pose moving to stage 3 or just in general more time?

YSV: But to be completely honest, we haven't looked in depth at the decorators proposal for a while. So if you go to stage three, can you give us a heads up of about a month.

KHG: Yeah. Absolutely. I mean, the current plan was to try to go to stage three in January, But if it sounds like that won't be enough time. We could move to next, plenary, after that

YSV: if you can, then that would be great. But that would that would give us a chance to actually fully review everything again.

KHG: That sounds good. We’ll do that.

RPR: Okay, one minute left and Philip on the queue, okay.

PFC: Did I understand correctly that initializers would be able to see static fields, but not instance fields?

KHG: Initializers for static methods, will not be able to see static fields because they run before static methods. The Initialization, like thoughts construction, If you will, the equivalence will work exactly the same way. Static methods and accessors. Their initializers will run first, then, static Fields, classes will assigned. Then the well, I guess there isn't a Constructor equivalent. So static blocks will run interleaved with the class fields. So then for methods that are static, yes, their initializers will be able to see static fields because the instance necessarily is constructed. Constructed after the class has been fully defined.

RPR: Okay, I think we have to wrap it up there. So I'll time box has expired. Okay. All right, I thank you for your time. time. Chris decorate us is always exciting. Okay. Last up from this session. Is Sarah with decimal.

### Conclusion/Resolution

- Topic Presented

## Decimals

Presenter: Sarah Groff Hennigh-Palermo (SHO)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://drive.google.com/file/d/1qdieei11dZgDY_KnJhSBcFyHTMZOmCJr/view)

SHO: Hey, everyone. All right. I assume you can hear me because no one's saying they can't. We count that. You couldn't hear me. You wouldn't know that. I'm going to share my screen like answering fantastic. Okay. Hi. One. I'm Sarah GHP. It's a lot of last names. It's like, you usually see me listed is GHP. I work at Igalia and you may recall me from such faux pas as unloading my dishwasher while mute was off last meeting, but doing much better this time, and I'm here today to talk to you about decimal. This is a stage one update. Of course. It's fitting that we are talking about decimal in December. That is the tenth month. And this update has been pulled together since the last time we talked about decimal was in March of 2020. And as we know that was a very different time with very different people. So my hope with this presentation is just an introduction to me a little bit since I'm taking over the proposal and update about the proposal where is where we intend go, a temperature check on a specific question or two. And then finally, this talk is an invitation to talk to me more outside of plenary, since I'm taking over this proposal, that was started by someone else. There's still a lot of things I don't necessarily know, so please consider this an invitation to have discussions with me outside on GitHub and issues, ETC, and help me make sure that this proposal is the best proposal, it could be for everybody. Terms of introductions: so the Champions group now is me, PFC, also from Igalia and then API at Bloomberg remains one the Champions. So in short, the proposal for decimal can be considered as improving on number. So I'm just going to go through our basic changes are a basic proposal. It's a built-in decimal type. It will include most arithmetic operators and comparators. You will notice that in supported operators. Divide is missing as well as power, there will be a standard library of methods that need options basically to work correctly. So we can see that division is here because it needs for their options. Then overloading the operator there's a little bit of a question here, where these would live because we're looking as well. Of course looking into the big into math proposal. So you'll notice they're they're sort of nothing showing what these methods on currently. But aiming for the sorts of methods is part of the design. The primary use case is representing human readable decimal values in particular, money. The secondary use case here is numerical calculations on more precise, floats can see more details in that little link down there. The language design goals here in this slide is from the previous presentations, right? I think the key one to talk about here are looking for a consistent story for numerics in JavaScript together, and not using global mutable state in operator semantics. And then, of course, being able to be implemented in all environments. So, in the position we are in now, there are sort of three current unanswered questions, biggest to smallest that we are looking at to move on to the next stage where we can sort of refine more of the details. And the first question is how it should be implemented as a new primitive or using operator overloading and sort of its stake. Here is the trade-off between the concern about runaway primitive installation. On the one hand and the limitations of an object-based operator. Overloading on the other hand is what this slide covers. Those limitations that really concern you in particular. The first one object Base, operator, overloading 0m for decimal would take the true path rather than the false path, which is, I would say very counter to most developers intuitions and concerns, me greatly as well. Our initial example doesn't work. The triple equals wouldn't work as expected and of course, it would cause issues with using the type base. The type, the type polymorphic math operations, right? So for instance, if we were doing Math.max, how would decimal work in there? That would be a problem with object-based operator overloading the second question is around finite and infinite precision or is you might like to think about it, decimal 128 versus bigdecimal at stake. Here is the question between a knowable in limited precision, which can help make the behavior of the divide operator and rounding simpler and doesn't carry a danger of sort of spiraling memory usage, especially, you know, with repeated multiplication and exponentiation. However, on the other hand, you know, we can support wider use case. Isis, especially including some database, representations of numbers that are larger than decimal 128, as a conceptual consistency with BigInt. The other problem in the conceptual consistency with bigint is helpful, because otherwise, you sort of have three slightly different ways to represent numerics inJavaScript, and that could be a concern.

SHO: The third big question is of normalization versus precision, which is to say that which is to, you know, talk about the following digits. It could be much more precise and much less precise. But if we don't normalize the Is then we run into questions about how cohorts compare. So help understand the space, and sort of practitioners, we've undertaken surveys and a handful of qualitative interviews. The first survey was presented at the first meeting in 2020. And some of the findings are people are interested in money. Almost all respondents thought they had rounding errors already and they're currently mostly using numbers carefully or reducing their decimal calculations in JavaScript. Some use libraries in JavaScript, but overall It doesn't eliminate all cases. The developers are excited about adding decimal. Although it's a biased sample, the concerns with user libraries were around package, size and operators. People really, really, really want overloaded infix operators, and the desired ones are te general ones that you'd expect. Serialization/JSON and localization are also very important to developers. The second survey, which is pretty new and has had a small handful of responses. Is that decimal is appealing since JavaScript is being used to calculate and display values as well as on the front end and the back end. Right with Note etcetera, the desires for consistency precision are the biggest themes. Most people bring up interaction with bigint unprompted. So, that sort of an expectation that we're seeing people would really like to see the divide operator that's often coupled with the expectation of a default rounding being applied and then the method called the used, if people want to be more precise, developers are however, understanding that that may not work. So I think there's space here to refine what we're doing, but that's a bit of an open question, the interfaces library where mentioned again. Global configuration and memory size. So that shows that were on the right track with our desires to avoid this. Global normalization has been under-researched, but we have heard that, it seems more like a formatting question than intrinsic one. And for those that were aware of the operator based operator overloading. The preference is for a primitive. And so, given that feedback and knowledge. This is sort of where we're headed with the answers with more and less conviction. So, on the first question, it seems that a new primitive is the preferred option. Giving you downsize the triple equals and Boolean in particular and the intuitions, we hear from practitioners the decimals essentially BigInts expanded to handle decimals. This direction feels really strongly. Indicated the biggest objection to this path has been the possibility of runaway growth, especially looking at other mathematical. Types, write matrices, vectors rationals, Etc. I do believe that there's an argument to be made here. The BigInt and Decimal are the like twin enlargements on, number. I know different from more complex numerical types of this is not actually setting a precedent that's going to lead to that Tipping Point, and not asking for consensus on anything today. But in particular this intuition, would like a temperature check on. It has been discussed before further investigating it, and I would like to be able to say, we're comfortable with working on a new primitive and stepping away from the operator overloading path. And so knowing how close we are to that is incredibly helpful to me in the second case. The intuition is slightly forbidden decimal because it covers more use cases and Decimal seems sort of ripe to understand a default rounding applied to operation. So we could hopefully design a version of bigdecimal that sidestep some of the runaway memory usage but this we will keep exploring. Finally, normalization needs more study, especially into how often JavaScript is being used for displays into which is vital. So whether developers are going to have to keep solving this, and whether it makes sense for just to be a formatting use case. So the path from here, our main goal for decimal will be heading to Stage 2 at some point in 2022. For some more auspicious. number Vibes, and to get there a decimal playground. It will be coming out pretty soon with bigdecimal and decimal128 modes so that we can start refining how the design should work and get some answers about what developers expect. We will continue to capture other qualitative feedback from the survey also other stakeholder interviews. So again, if you are deeply interested in this if you have friends and family who love to talk you about decimal it Christmas, you know, please send them our way to the survey because I'm definitely looking to challenge with more people in terms of. You work for keeping an eye on, proposals that relate to the larger decimals story in particular, the JSON.parse with source for the big in serialization is, of course, part of will be part of the decimals here, lusatian story. And then big in math, right? If we are doing that, polymorphic overloading for math methods, making sure that the story is coherent with bigint and some form of decimal representation is important and I'm super psyched by that proposal and to see it going. And then, of course, I'm interested in feedback from the committee. In terms of temperature checks and restart in conversations about things that I may have overlooked. So, please feel free to reach out to me and that's it. Thank you all so much.

BT: All right. We got a couple items on the Queue and you like to go to those. Yeah, let's jump onto that. All right, we have Waldemar first.

WH: Yes. I read that proposal and I think that there is way too much of an attempt to reinvent the world here. Neither of the proposed alternatives is compatible with IEEE decimal semantics and I don't want to spend years on trying to reinvent the world. We should just use the IEEE semantics. It's by far the most useful case. BigDecimal has major usability problems due to runaway or unlimited precision.

SHO: Do you not feel that a default precision, That also allows for sort of expanded use cases is worth considering like that. Is it? So worth it to not sort of capture those use cases that lie, outside the IEEE.

WH: By making the precision variable, you’re making it much harder to use. There are fewer use cases which work with BigDecimal than work with Decimal128.

SHO: That, that I could understand a do you have any?

WH: I can write a library which works with Decimal128 to compute some financial or transcendental functions. It's way harder to write the same library to work with BigDecimal.

SHO: Maybe it's probably I don't want to keep everyone who

WH: It’s too general. It's much easier to write algorithms which we can prove work on a known fixed-precision type than it is to work on unbounded-precision types.

SHO: So, you're saying the so before you said that, that, there were cases that bigdecimal made impossible and so it's not so much use cases as much as the use case of what's provable, not so much broader user land actions. Is that correct?

WH: It's much harder to reason about and write correct code with BigDecimal than it is with Decimal128.

SHO: And and so, and you feel like that trade-off is the correct - is more important than being able to say, pick up use cases from representing. I believe, it's Oracle databases, although I would have to recheck my notes that have basically numbers that are still larger than that 128 byte representation.

WH: I really don't think we need to worry about those. If you want unlimited precision decimals, you can build it as a user library out of BigInts.

WH: The other issue I have is that there are some major flaws in the Decimal128 proposal. For example, it doesn’t support infinities or NaN and that's so incompatible with IEEE semantics that I don't see how that could work.

SHO: Okay, that is helpful feedback that I will consider. I have not, I will be perfectly blunt that I have not delved deeply into those details as I'm trying to sort of figure out the first step, but I will look into that further when we are working on the playground to see also how surprised developers and other folks are that they're missing.

WH: Yeah. The proposal references an issue that says BigDecimal should not have infinities. That issue is correct, but then the proposal uses that issue to justify that Decimal128 should not have infinities, which makes no sense.

SHO: Okay,I will double-check that. Thank you so much for your feedback.

WH: Yes, and finally, I agree with the decision of not exposing IEEE cohorts. We should not expose decimal cohorts, just like we don’t expose things like signaling NaN's. Decimal128 will work fine without exposing the cohorts.

SHO: And does that for close using? Does that foreclosed sort of using toString to set precision, so sort of using a precision as a formatting question, rather than anything or know that your reward, I'm undecided on that one.

WH: When you format the number, you can specify a precision just like we have existing functions in ECMAScript which let you format existing Numbers to whatever precision you like. That's fine. What we should not do is to have numbers carry precision as part of the visible state inside the number.

SHO: That makes sense.

WH: So all members of an IEEE cohort should be indistinguishable from each other, just like IEEE NaN's are currently indistinguishable from each other as far as the language is concerned.

BT: All right. Next up. We are Shu.

SYG: I think my comment here mostly applies to bigdecimal but maybe to decimal 128 as well, but I don't know the state of prior art. They're well enough to say so with bigint implementation experience and shipping experience under our belts. The V8 team has felt that BigInt has had spectacularly poor ROI. Basically it doesn't enjoy much use outside of, unfortunately, crypto miners, which are mostly malicious payloads. And now, in one corner of Temporal is using bigints, which actually our opinion on that is maybe it shouldn't have used bigint either. So, extrapolating from the bigint ROI we're currently unconvinced of the ROI for something like bigdecimal. It takes a lot of time to implement. It's quite a bit of complexity and maintenance burden to add to the engines. So more justification is Needed. Oracle DB is certainly not compelling enough that if Oracle would like to be able to run their… What are those SQL things called? Triggers or something? …by embedding a JS engine that has some decimal thing. They are more than welcome to provide ones and give yourselves and their JS engine.

SHO: And do you think that outside of bigdecimal in terms of decimal128? You're also saying that that might be currently feeling under-motivated, just so I understand better. Okay. Go ahead. Ahead.

SYG: This is more of an unknown to me if implementation of decimal128 is in fact, straight forward. And if it doesn't seem too complex maintain, then we would withdraw all that. But as it stands I'm just not familiar enough with it. If, you know four basic arithmetic operations, there are competing algorithms that we have to choose and it takes a domain expert to maintain the code in the future to understand the performance trade-offs. That is more work than we can justify staffing an effort for.

SHO: Okay, that is helpful to know and to look into in the future. I was going to say from the user side. feel comfortable just saying that use cases for decimal are well-motivated whether that is motivated enough to get over the bump of implementing and maintaining it obviously is a bigger argument to build but I think that there is a clear pool of usage that is larger than the pool of usage for bigint.

SYG: I see that would be certainly good to to see some some of you some more arguments for there. You know, it's not like we are against the use cases, but for the use cases to clear the ergonomic pains from using libraries for it to clear that bar. I don't feel like we've met that yet.

SHO: OK, thank you. That's very helpful. Feedback to know where to focus. Our attention going forward.

BT: There's a couple replies on the cube. We also have I'd have their hair.

TAB: Yeah, well, the implementation concerns are very valid want to make sure that this isn't a huge burden in the future. I do not think it is reasonable to try to draw a line from big into usage. To bigdecimal usage. The realm of extremely large numbers, more than ten, more than ten quadrillions is relatively limited. There's not a lot of things, we need those for, but money, accurate money and related things like that are extremely common and valuable in many, many realms. The usage case is not comparable between the two. two. That's all.

BT: All right, so we got Waldemar next.

WH: Answering Shu's question: I agree with Shu on BigDecimal. On the other hand, IEEE Decimal128 is a common library. You can find this for just about any platform, any common language. I don't expect a lot of issues with it and it has way more than enough range and precision for any money applications.

BT: All right, and then we got a few comments on use cases, Shane was on the Queue first with some use cases.

SFC: Hi Sarah, thanks for reviving this proposal. I'm really excited to see this come back up for discussion. I'm filling out your survey right now. So I'll put most of the details in there, but two of the use cases I'm going to be listing are (1) things relating to number formatting and (2) measurement unit conversion. So I'm definitely hopeful that we can put together some motivating use cases for the proposal. I think that it would really be helpful for, you know, these types of use cases. So, that's all, and I'll fill out the survey with the rest of the details.

USA: Hello, I hope I'm audible. I think a lot of these have been mentioned already. Maybe by now, but in the different Outreach goals that we had, we had a lot of discussion about the use cases. Now I'm hoping that we had documented all those but all that I recall of was related to currencies in the banking sector and also with scientific Computing. So I think Both of those would be interesting applications for this.

BT: All right. Thank you as well. JRL has a question.

JRL: So I'm the same, looking for use cases here. The only thing that I can understand as a big motivating use case is money. And so I'm curious. What is the smallest thing? The easiest thing that we can do that has enough Precision for all money applications. If that's bigdecimal then we should do that. f it's the IEEE version. We should do that. Whatever is the simplest that solves the money use case.

SHO: Iis that because you don't think their scientific use cases as well or that they are just overall less important.

JRL: I think those are much more niche than money. The same Shu was saying about bigdecimal, not having a good return on investment. We can pursue arbitrary-precision decimals for scientific applications, but I think it's also going to have a small return on investment. If we can solve the finance use case, I think that immediately has a very big impact.

SHO: That makes sense like a big 90/10 split there. Thank you.

WH: I wanted to point out that Decimal128 has a precision of one part in 10 decillion. So unless you have more than ten decillion units of currency you should be fine. That’s a precision of 1 part in 10^34.

SHO: Thanks for that. I see. we're just at the top of the hour. I did want a slight temperature, check on whether people are comfortable, moving focusing on decimal as a new primitive so that I can start answering these more detailed questions. questions. Is it possible for us do that real quick with the icon?

BT: No problem. We have five minutes left in your time box. So I'll turn on the check temperature, but if you can To explain very clearly what we're checking temperature on here again. That would be good.

SHO: Yes. I was going to try to type it while I said it but I'm just gonna go. So let's say that part is new primitive is totally fine with new primitive. Sad face is I will block this if it is not object-based operator overloading and the question mark is I don't have enough information to say, let's just do like a big like this is fine. Maybe and I will stop it. So please keep focusing on that as a possible path.

MM: Could you write those choices down? So we remember the correspondence?

SHO: ♥️ yes new primitive.❓not sure, talk to me more. ☹️ I will block a primitive.
:heart: = 13, ? = 1, :frown: = 0

BT: all right, looks like folks have stopped replying. Awesome, I can circle around with John lens because you would like to talk about it a little more.

SHO: So outside of plenary, we can chat. But other than that, this is really been very helpful. So, thank you all so much. I wasn't with blocking. I just push people will tend to have to circle with me. Okay?

MM: I don't see the temperature. Check itself. Is there one of your other say it? It is up. Maybe, maybe you could share it, Sarah. Oh, you know, it's actually on my other. Yeah. Here. Let me share it. Sorry. I was looking at it on a different machine because I don't think if you refresh and you can see it, right?

MM: So I can see, I can see it on your screen when I refresh my tcq. I still don't see it. I don't know what's What's on.

BT: Refreshing won't bring it back. Unfortunately. That's that's a bug. There's a screenshot into notes in one second.

BT: All right well, we're at our time box. So I think with that we can close this item unless SHO, you're feeling like you wanna say some closing notes.

SHO: Nope. This was great. Thanks, everyone.

## RegExp Modifiers for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-modifiers)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfs3yIyrh3hZ2k6PCQ?e=Yodx4H)

RBN: Thank you, Rob. yesterday, we talked about the we talked about the /r modifier or sorry, the /r Escape. Today. We're going to be talking about modifiers, which are a mechanism for converting flags that are set in the regex Constructor or V8 reg, ex literal. And controlling the within a regular expression. There's a number of different motivations for this proposal which we discussed again, when we introduced this for 1, one of them is in browser support for things like textmate grammars, as well as other sources of regular Expressions. It gives you the ability to specify and invert regular church and flags with Pattern itself, which gives you kind of more fine-tuned control and allows you to do some things that aren't currently feasible within a regular expression. the proposal as it stands today currently, is that a modifier part of the pattern has two forms. A kind of unbounded formed when I say unbounded, it's actually bounded by the containing Group which sets the Run sets flags and a sudden some specific Flags starting at that position until the next closing parenthesis or into the end of the pattern. And then a Very into. This is one. That is a self bounded form. That is a essentially syntactic sugar over having a Non capturing group that contains as its first elements, the unbounded form in which the sub suppression is then matched. Using the flags that are set in the header of that group, modifiers. Don't conflict with any existing syntax. And in regular Expressions so they can be used with or without any other flags. So they don't require Unicode mode. They can be used with normal regular Expressions because the and friend question mark syntax is only currently valid for named groups and non capturing groups. I have listing a list of subsets of the prior art for this feature. Done a fairly thorough bit of research on support across languages. There's 23 engines and languages in total that support modifiers. 15 unique implementation since a number of these implementations leverage, something like pcre on the back end for Boost reg. Ex. There are certain flags that can't be used with this Global sticky Unicode and the new unit code sets FLAG, NOR hand nor has indices can be modified with this Behavior. They either those flags, either affect matching Behavior. How matches start at such as Global or sticky. And how the indices are modified, they affect results. Such as the production of the indices array, or they affect how the regular expression itself is parched parsed. Such as with the Unicode mode and those can't necessarily controlled. So the set of flags that were considering is just the a multi-line a subset, the ignore case. dot all and the proposed x-mode flag and we'll get to those in a minute. Here are some examples of enabling and disabling Flags within a pattern of shown the first one for that. You could have a regular expression which is case-sensitive case-sensitive by default then can turn on case-insensitive matching within that pattern and then the rest of the pattern then becomes case insensitive matching. I've another example showing this now with the self bounded form where you can create a modifier non capturing group specify again ignore case, and then it's case-insensitive within that group. this has some additional use in again with things like JSON configuration files that use regular Expressions. This is fairly common in the ecosystem today, but there's no current mechanism for enabling these Flags without an additional out-of-band flag or an additional out-of-band mechanism. there to open issues that we've that were tracking right now, one came from the discussion. We had in last plenary, which is we wanted to go into a bit more detail as to, which flags were, you're considering supporting and which ones we definitely can't support. You can take a look at issue. One on the issue tracker. If you're curious about more details here, the modifiers, we're currently planning to support. We theoretically can support currently, are the ignore case flag. Multi-line single line, or dot, all flag, and extended mode. Some of this investigation has been around which flags can be inverted today. So what can you do that? Doesn't require using these flags using modifiers today and what things can only be done if you have modifiers. So for example, you can invert ignore case in some cases. However, /, oftentimes, that inversion is non-trivial. So if I wanted to match, hello with varying case, I would have to essentially provide the each possible casing for each letter. And that gets even more complicated when you're looking Unicode characters that have even more complex case folding semantics in there are certain flags that can't be inverted without modifiers. So the multi-line flag, essentially can't be inverted today. If used if you're in Like mode. There is nothing you can use to match buffer boundaries. If you even if we introduce the buffer boundaries you can only match those boundaries in Unicode mode because the buffer boundaries proposal that we'll talk about next can only be used if you are at least in Unicode, or Unicode sets mode. The other issue that we've been discussing is whether or not to forms are necessary. So, again, the syntax currently has two forms, one is a self bounded form, which is again setting or clearing Flags, then colon and then sub expression and then the unbounded form. So are both forms necessary. Self bounded forms could be written in terms of the unbounded form. As a matter of fact, that's How did the evolution of this feature? Is that you could have written this without the without having the self bounded form by using a non capturing expression and then the unbounded form is the first argument, which then we over time was evolved to having kind of a syntactic sugar for reducing complexity of the pattern here. here. The other option is, could we only the self founded for, man? Have the unbounded form my preference from the research that I've done. Is that we should have both forms for consistency. Both have existed in pearls since 1998 since Perl 5005, we do. We do in the ecmascript spec, specify that our rig expressions are based on Perl 5, but we've been again, missing a number of features that are exist in regular expressions and Perl since very early on these numbers actually incorrect as a recent review, I found one of my points for one for one of my one of the engines that I was looking at it was looking older documentation, and it does currently support both forms. There are. Three engines languages that support both. There's actually 15 unique engines that support it isn't again. Number of them are actually some languages that have support for a Expressions. Their implementation is actually a basically built on top of something like, pcre. There are six that support a variant of the unbounded form now in some of these cases, the unbounded form can be specified as the first as the first atom within a regular expression, such that it's essentially essentially is like the flags in a regulatory some literal at the end. There are currently no engines that, only support the self bounded form. I have concerns that choosing one versus the other breaks from other implementations waterfire, modifiers are widely supported across a Nations and languages. Again. There's very few that actually that don't currently support them that are in practice. Use today, and I have brought this up before with the /, Our flag gives me the /re Escape, but that having kind of a partial implementation could be a hazard to multi-language developers. Now. I've been discussing this again some folks on this issue. And the question is whether or not? If we to drop the unbounded form in favor of the self bounded self bounded form is something, is A break like this from the rest of the ecosystem and other languages that that support this warranted. And are we breaking? If we were to only pick the self bounded form? Are we breaking from the supporting other languages because we believe that the older, the unbounded form is essentially old not valuable or something that we want to. Break. Because Do we think that this is the right thing to try to break? So those are two issues that I'm curious to address. And then finally and I can go back as through these slides as we talk about things around the queue, but there is a full specification supports, both the unbounded and bounded forms written for this proposal for review. So you can go to the queue and then talk about stage advancement.

[*NOTE: ABOVE BLOCK IS NOT EDITED: it's RBN presenting slides*]

KG: Yeah, so Ron, I'm sure you're familiar with my position, but let me just say for the group - first, I'm in support of the proposal, second, I think the topic of which forms are supported can be decided during stage two; I want to be very clear that I think this proposal should go to stage two. That said: I really really don't like the unbounded form and strongly prefer that we leave it out, mostly because its parentheses do not work the way parentheses usually work, which is to bound things. The self bounded form of the parentheses works the way I expect them to. I do also want to raise that while it is true that python allows you to write the unbounded form it is not with the semantics proposed here, the use of the unbounded form in Python sets the flag for the entire regular expression, both forwards and backwards and breaking out of groups.

JRL: +1

YSV: +1

RBN: I want to point out that it doesn't necessarily break the parentheses bound things, but it does - because the parentheses does specify where the non-self bounded form finishes its match. It's only not self-bounded. I guess I should have said rather than unbounded.

KG: Well, the bounding parenthesis which closes it doesn't match the parenthesis which opens it.

RBN: I think I just don't - I am not opposed to discarding the unbounded form if that's necessary to achieve consensus. I do think that this is a valuable programmable proposal. I only worry that we would then be the only engine that is on the other side of this. where again six engines or five engines, really have only support the unbounded form. We would be the only engine and regex run time. Supports only the self bounded form and not that it's bad that we set a precedence. But that's just one thing I want to keep in mind.

KG: We would effectively be matching python. Python allows you to write the unbounded form of the syntax, but it doesn't mean what it does in the other languages. So they essentially do not have the unbounded form.

JHD: Okay, so I think I'm up. Yeah. Yeah, so I wanted to just start by saying that I think that prior art and other languages should always be considered in a proposal but I don't think you should ever be an inherent constraint, and I don't think they're ever sufficient justification alone to add anything. So with that opinion stated, I'm curious to understand the benefit of the unbounded form on its own merits. Because to me, it looks like an immediate candidate for a lint rule to forbid the unbounded form because it's less clear and it's more confusing as you read the regular expression. So I'd love to try to understand - other than precedent - what the benefit of having the unbounded form is.

RBN: That's primarily the benefit that I was focused on. In some cases, the self bounded form can result in what looks like a more complex regular expression, but it does do so in the vein of actually having very specific semantics or a very specific and clear guidance around when something is going to begin and end its support. So again, I don't have issues with only having the self bounded form versus the unbounded form and my primary motivation for including the unbounding. For me is precedent portability and avoiding a hazard with multi-language developers and all of these are mostly week concerns. my script on its own has already has long, had it been considered kind of a its own thing when it comes regular Expressions, many of these of the 22 engines and languages. I've talked about, I think good five or six of the core engines actually have what they call ecmascript mode to for matching, which uses a reduced set of functionality to match what we supported at least prior to the Unicode mode flag. So again, I don't really have a strong preference for including the unbounded form of other than precedent in Prior arts and trying to kind of not. But the trend of every other language supports and even languages like rust, which are relatively new on the scene in comparison to something like ecmascript support both forms. That's been my primary reason including it.

JHD: yeah, I agree with Kevin that this is a stage 2 concern but like think when it came time for stage 3 I would personally not want it to advance unless the unbounded form had more motivation besides “it's the way everyone else does it” I think we should hold ourselves to a higher standard than that.

RBN: I would be, I'd be more concerned if we were doing something completely different than what everybody else does. But to not included, I think is fine. Right?

JHD: Yeah, and also, my earlier comment about prior art: I would apply it less when we're talking about deviating from existing semantics in other languages versus doing or not doing something. So I agree with your take in that case as well.

RBN: That's a fair point. Thank you.

WH: What I just heard is that in various languages the unbounded mode form ends in different places. Where are you proposing this thing end? Suppose you have the unbounded form in an alternation: `aa|b(?i)b|cc`. Does the mode change apply to the rest of case until the `|`, or does it apply to the rest of the regexp?

RBN: First, you clarify, the unbounded form doesn't have different points that it ends from implementations. It has different points where it can Really be placed in some engines and earn some implementations. You can only have the unbounded form as literally the first set of characters of the regular expression. It's essentially a way of setting flags for the entire expression and in the cases where it is allowed, anywhere ends either at the first closing parenthesis or the for at the end of the regular expression, so and just like owning a room has supported anywhere curls supports it anywhere. With a subset of flags that are only supported as the first elements of the pattern. So in those cases where I would wear I was proposing, it was that is an example, you have in the topic. And it would start after the first `b` in the second part of the disjunction and go through the rest of the pattern.

WH: What happens if you have an empty `(?-)`?

RBN: I don't believe that's legal syntax in the in any of the engines that supported it. it. You either, you require at least flag on one side or the other?

WH: And if it's the same flag on both sides of the `-`?

RBN: I would have check. That's either an error or a no op right now, I believe the what the current specification text that I've written has is that it would first set the flag and then on set the flag, so it's essentially unsetting it. But again, I'll have to clarify that

WH: How would it interact with backreferences? For example, a backreference to something with the other case mode?

RBN: I'm actually not certain offhand. I believe it would have a back reference would match the the exact string that was matched in the previous case rather than trying reapply that that match with different semantics or different casing, because the back reference takes isn't literally it takes the as far as I recall takes the literals string that you've matched and matches those characters sequentially.

WH: I'm assuming this does not depend on the `x` mode — the inclusion of `x` here is only if we actually decide to do `x` mode. Is that correct?

RBN: That's correct. This doesn't have a dependency. I've mentioned it in a preceding slide. Backed up here. That's extended mode is a modifier that we plan to include. But again, assuming that we move forward with the x mode flag on its own.

WH: Thanks.

YSV: So a couple of people said that they didn't feel very strongly about the motivation around the unbounded form. And since this is going to stage two. I think that may be what might be wise is to likely drop it from the proposal at this point, and then maybe we can revisit it at a later point because I see stage two as a signifier that we have found. Motivation compelling and we'll be developing this into full feature seeking maturity of that future. So since we're not entirely convinced of that form, I will say also for myself. I am also not entirely convinced by the unbounded form. I could see it as being useful for the ignore case version, but for the others, I don't see it as really having a great deal of use. I may be wrong about that, that, but since we do seem to have Have some agreement about the unbounded for, maybe it's wise to just go forward with that rather than resolving this in stage 2, because then we would be allowing this proposal to go forward without fully establishing the motivation to Stage 2 core Core part it.

RBN: YSV, can I clarify your statement? You said that there was that folks felt that there was less motivation for the bounded form. Do you mean the unbounded form? The agreement on was the self bounded form that has the subject specialist part of the pencil, right?

YSV: Yes. Yes. That's right. That's right.

RBN: Yes, I'm fine with moving ahead only with the self bounded form, if that's necessary for consensus and we can revisit unbounded if we find that there's any reason for it.

RPR: Okay, your queue is empty. So you could ask for stage 2 with only the self-bounded form.

RBN: That would be fine. So again, I have full spec text that currently includes the unbounded form. I can remove that but since stage 2 requires that, just a, the semantics are covered and And I think we've, at least covered the semantics the self bounded form so I can go and make edits as necessary. So at this point, I'd like to ask for stage 2, and if there's anyone that objects?

RPR: Likewise anyone that supports?

KG: I support.

RPR: Thank you, Kevin.

RBN: And then, my last question would be, is anyone willing to take on being a reviewer for Stage 3?

RGN: I'd be willing to review

WH: Me too.

RBN: Thank you.

### Conclusion/Resolution

- stage 2
- will drop the unbounded form

## RegExp Buffer Boundaries for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfs-sKyEtV6B_S-poQ?e=U7ToKV)

RBN: so, continuing along with our regex discussion. the next proposal I want to discuss is one again. I brought up at the last plenary: buffer boundaries. the point of buffer boundaries is that currently anchors that we have today, the circumflex and dollar sign anchors, which match the starter end of input are affected by whether or not the multi loans, multi-line mode flag is set, which means that if you are in multi line mode, you have no mechanism to also specify the start or end of the input buffer. I'll talk a little bit more about how this, interacts, with the modifiers proposal here shortly, but one of the reasons for introducing the buffer boundaries, The buffer boundary escapes is the ability to again match the beginning or end of the input buffer when in multi line mode, so this also gives you a kind of a simple sequence that can be used to match the end of input using optional line Terminator. Now, there's been some discussion about that will bring up your shortly as well. Kind of a brief overview of the proposal similar to the circumflex and dollar anchors. These can match the beginning or end of a buffer but are not afflict. Affected by the multi-line flag, the slash capital A Escape is a 0 with the searchin assertion that matches. These start of the input only and the / lowercase Lowercase z is a with assertion that matches the end of the input. There is also a slash capital Z, which is supported in most of the engines that have the support as well. Which also is a zero with desertion, it consists of an optional. New line trailing the end of the input. So it's equivalent to a look ahead for the proposed line ending Escape as an optional elements and then the end of the buffer. Using these escapes requires using, either the Unicode or Unicode sets Flags, the U or V Flags, which means that they're not viable inside of a normal regular expression modifiers, allow to turn off the multi-line mode for a specific case, but they're a little bit more complex. Two rights then matching just a beginner end of buffer. These also are not supported in character classes, a Escape of a, or Z, and a character class is just a, or Z and As with these Lush our flag, if you're not in Unicode or Unicode sets mode, then a slash a or /z will just be interpreted as a literal, a or Z character. so, provided some examples here of leveraging, this pattern. So I'm using the same pattern both cases and Non unit here in non multi-line mode, getting matching with circumflex and dollar matches the inputs. If again, not in multi line mode, trying to match with a new line in the textbook fail with buffer, boundaries than you can guarantee that you're always matching the end of the input. So that whether or not multi- set, you have the same results. This also allows you to mix buffer, boundaries and anchors when in multi line mode so you can specify the begin a string that matches the beginning or end of a line as well as strings that match at the beginning of the input or the end of the input. and finally, the additional 0 with the search in this adds is a buffer boundary. That has some allows for an optional new line at the end. There is of the implementations that I investigated one implementation allows a arbitrary number of optional new lines at the end, but it is the only case there are I don't have exact number. So off the top of my head, the moment there are multiple engines that have support for this. That only allow a single new line at the end. And this matches the majority case. so, there is an open issue as to whether or not we should drop to the capital Z Escape that the difference between the slash capital Z + /. Lowercase z could be confusing and again, Capital slash capital Z is matches the end of buffer with a optional trailing new line and the / lowercase C matches the end of the buffer, with no trailing new line, the issue proposes that we drop capital z in favor only having the exact match the main rationale for keeping is to again. Arbitrary inconsistency, with other engines one, caveat that I would mention if we drop it is, I recommend that we don't introduce a capital Z escape with a different meaning to avoid possible, collisions, and confusion, and portability hazards, although others on the committee have indicated that, they believe that such a portability Hazard, is not a goal. So, primarily mentioned. This is more of a concern than a specific reason to avoid it. So I do you have a question for the plenary if anyone is strongly opposed to including the optional trailer, glue line, Escape. And finally, this spec again has full spec text both. Begin of end boundaries as well as support for trailing new line that matches the semantics of the /r Escape for trailing new lines, currently, and depending on where we stand, I will seek stage 2 at 2 at the end of this.

MM: Yeah, so with regard to all of the regexp proposals. I just want to verify that none of them change. What a lexer needs to do in order to tokenize a JavaScript at the same old rules with regard to tokenizing a reg, ex still apply, not parsing within the reg expert just recognizing the record as a whole as the token and

RBN: you're speaking about reg, EX literals. Correct?

MM: That's correct.

RBN: The three proposals that I presented over the last two days. Would not affect it. The only one that that might affect it would be the EX Mode flag, and I am considering not allowing X-Men flag in reg, ex literals and I can talk about that more. Next time I discussed x-mode, but I did not have time to finish these specification texture that prior to the agenda deadline, which is why I did not put it on the agenda for this meeting. So, So we can discuss it more than it is possible. We could theoretically support x-mode with changes to the syntax? That's used to Lex regular Expressions. But I'm aware that there are folks that are against or concerned with making So I'm take that any changes to that under consideration.

MM: Yeah, as you can guess, since I asked the question, I would be very concerned with anything that changes the lexing rules and and

RBN: neither this the modifiers proposal change Lexing rules because those, those election rules in this specification today only deal with balance square brackets.

MM: Okay. Thank you Mark.

KG: MM, can I get you to write up your exact concerns with changing Lexing? Because I raised this issue on the x Mode flag proposal, but I wasn't able to represent your position because I don't actually know why you care. There's an open issue on that repository. You can just respond there.

MM: Okay. Can you point me at the place to respond?

KG: Yes. Where do you want me to put a link? Are you…

MM: In the jitsi chat.

KG: Great. I will do that in just a second.

WH: The regexp proposals we discussed today don’t have any issues with lexing. The `x` mode proposal does.

RPR: Okay, on to Michael.

MF: Yeah, you asked if anyone has any strong opinions, and I don't know if I would classify this opinion as a strong opinion, but I do feel that in my personal use of `\z` I would get confused which one to use. The Lord is means wood From the capital means. I don't think the one that allows new lines is incredibly well motivated. It does seem useful but the motivation will depend on the advancement of the `\R` proposal of course. But I think that the risk of just never knowing which one is the correct one, and especially just being able to use the wrong one and not see any error from it just outweighs the benefits and I'd rather see it dropped from the proposal, at least for now. I do think you had a great suggestion that if we should never have the capital Z mean something different than the precedent from other languages. I'm fine with that as well. As another point to support my opinion here, I don't think any of the current escape sequences differ between lowercase and capital other than in just negating. So, it's easier to remember what it means. Whereas this one changes in a way that's not obvious. So yeah, I would prefer just to have the one -- and I can't can't even keep them straight here -- the one that does not allow the newline.

RBN: To clarify, you mentioned your opinion on this was not a strong opinion. Is it something you would block stage 2 advancement with leaving the kept capital z or capital Z Escape in? Or would you prefer it be removed before this advances in stage 2.

MF: I don't think it would be a disaster to have it, but I do think it'd just be a net negative for the language. I wouldn't be supportive of it, but if you're asking, you know, I don't really -- I don't like saying that like blocking is our only way to come to some conclusion here. I think that we should say that we have more people supporting its inclusion than we have people asking for it to be excluded. I think that would be a better kind of way to resolve this. And I don't mean to imply that we hold a vote at plenary or anything. Just more input on it. So if you would like to include it as you move to the next stage, I would say the way we go about that. Should probably be getting more feedback on the open issue, for people saying that they support it. Otherwise, I think we should exclude it.

RBN: what I'm considering doing for the time being is removing it from the specification text and opening an issue on the issue tracker to reintroduce it depending on whether or not there's interest and support for that.

MF: I think that would be fine.

WH: Is there a typo on this slide because on the left side you're proposing dropping lowercase z, on the right side you're proposing dropping uppercase Z?

RBN: That's actually an issue with the font that was used in that on that side is a capital Z, but the, the font I was exchanged the fonts on a number of these slides to be a little bit more readable. And I missed that one. That's, I think that is supposed to be a capital Z on the left and I wrote it as a capital z. For whatever reason, the font rendering is making it look like a lowercase z, okay.

WH: That's the best argument I've seen so far for dropping it. [laughter]

RBN: I blame PowerPoint choosing fancy fonts for me for that one. But yeah.

YSV: So overall we weren't completely satisfied with the motivation. It seems like something like this can be done already in regex in JavaScript. And that the Motivation here is similar to other proposals. We've seen today, which is other regex engines. Have it. Therefore we should included plus. It's ugly when you read it in JavaScript that said we are not against this proposal moving to stage two. I do think that dropping the capital Z is definitely a good idea.

JHD: So if we're going to drop it, and we never want to introduce it with a different meaning. Can we make it just always throw so that there's no future problem.

RBN: I mean it does this only is allowed in `u` mode, which does currently throw we might want to maybe knock add specific Logic for that. But possibly a note to note.

JHD: Okay, so it already throws those.

RBN: Yes, it'll already throw because it's currently a syntax error and this is not supported outside of you or the mode. Thank you.

BSH: I understand the motivation for wanting to drop the capital Z, but I think that actually if you do, you add the problem that you have a thing, you can't really represent - that you want to match a newline sequence specifically at the end of the buffer. I suspect the reason they are the way they are. Is that the traditional standard way of doing a regular expression match, is you expect to have a buffer that contains a single line of text ending with a new line. And the standard thing to do is match the beginning of the text, or the end, excluding the new line. So \A matches the multi-line equivalent of `^` and `\Z` matches the multi-line equivalent of `$`. If we drop the capital Z here, then how would you match "I need to get to the end of my buffer which has multiple lines in it, but I want to exclude the new line". How would you do that? If you didnt - you could do backslash lowercase z, which matches the entire end, but then how do you match the new lines before it if we don't necessarily have the `R which we may not get because that is a separate proposal? So there would be no way to match that. Dollar sign would match before the new line sequence, but then you don't know which new line sequence is used. So you don't have a way to say "and whatever new line sequence happens to be in between here, and the end the buffer".

RBN: I'd like to point out that while whether or not \R advances, the semantics of \R are possible to implement in an existing regular expression. The basic semantics will use an atomic group so that don't backtrack. A failed match and then possibly match a line feed after a carriage return. So, if you said `\R.`, you don't want to match carriage return line feed if there wasn't some other character after it, but you can still represent that by having a disjunction that matches crlf or matches a - look at look ahead that says, it's not crlf, but then can be any of the possible other single character line Terminator. So it's possible to Isn't that without /r but I use livestock are here, because it would have the same semantics and is easier to read in the slides than the 30 or so characters needed to represent that regular expression. So again, it is possible to represent this without /r. I've just put it here for to simplify the Allure of light illustrating this the support.

BSH: Okay, until I'm just guessing here at the motivation for Perl, when they added the (?). When he created this But I figured that its capital A and capital Z because those are the most normal so they both match in case and lower case z is the special one, because you're ignoring that individual End of Line character, which generally is expected. I think that's how I would remember it, by the way, just in case it helps. Thanks.

RBN: I do have one thing about that. So, what's interesting is that it's capital A and lowercase z or at least my my intuition is capital A and lowercase z because capital A is the 1st ascii alphabetic character in The, in order in ASCII and lowercase z is the last ASCII alphabetic character.

BSH: We're both guessing.

RBN: I'm kind of curious as to history for that because I did a lot of research into some of that Perl history, and there's nothing that documents this anywhere.

WH: If we don't do `\Z`, this is a moot point, but if we do then which semantics of `\R` would we use for it? Specifically with regard to a carriage return line feed sequence at the end of a buffer. Could `\Z` match between the carriage return and the line feed?

RBN: It should not. I would match what the is for. From Unicode TR18 on how this gets matched, which is how \R matches. It's also how, far as I've seen, every implementation that supports this has supports those semantics because it's specified in the in the Unicode spec.

WH: The latest proposal of `\R` was something different.

RBN: I don't believe. So the main I'm I think the last time I discussed \R earlier, I showed an example used a non capturing group with \r\n?. That's not actually quite the correct semantics because this was it was originally an atomic group, but Atomic groups didn't move forward at the last plenary. I still intend to reintroduce them, but the point of the atomic group, was that it would not backtrack. So, if you matched crlf and then failed to match the following character, it wouldn't then reattempt the match with just carriage return and possibly match the Line Feed, as the next character. an atomic group wouldn't allow that to happen because it prevents backtracking. It basically failed to match outright rather than allowing you to retry with the optional character that's missing. so it would have the same semantics, it would essentially treats crlf as a single character for the purpose of matching.

WH: Yeah, I'm uncomfortable advancing something with a dependency on a proposal which has not advanced.

RBN: I wouldn't say that this has a dependency on the another proposal. Again, the intention is it would match the semantics that are specified in Unicode 18. Which we discussed in for the R flag.

WH: I have issues with the `\R` doing lookbehind.

RBN: Sorry. There's no look behind. It doesn't, I'm not looking make sure that if you are at an add a line feed that you look behind and make sure there's no carriage return. It doesn't do that. It just says that if you are at a carriage return and the next character is a line feed, you don't retry, whatever comes next with just the carriage return. So it does not look back to make sure you're not in the middle of a crlf. It just makes sure that you don't Advance if you are at the beginning of a crlf.

WH: Okay, that is what I was asking. If you have a CRLF at the end of the buffer, would `\Z` match in between the CR and LF? So you’re now changing your answer to "Yes, it would"?

RBN: I must have misunderstood your question. Then, what this does is looks at a character - when it's trying to match the Z it looks to see if the current character is a crlf and then follows with a trailing new line if it is not a crl are if it is a crlf but does not have following (?) like it fails the match. It doesn't retry with just carriage reutnr. If you are at, if you have advanced past the carriage return and you are on a Line Feed and have this then it would it would just match to say yes. There is a line feed. That's followed by a new line there, followed by the end of the buffer.

WH: So the answer is yes, it would match.

RBN: Yes, because it doesn't backtrack.

WH: That's the answer I like.

RBN: I apologize for the confusion there.

[queue is empty]

RBN: I'd like to ask for stage 2 for this proposal. Again. This is currently with dropping the \Z, but we will consider it as possible, possibly reintroducing it during stage two, if necessary. If there's enough interest.

WH: I support this for stage 2.

RPR: Any other support or opposition? [silence]

RBN: Can I ask for reviewers?

WH: I'll raise my hand.

RBN: Thank you.

RGN: Likewise for me.

RBN: Thank you, Richard.

### Conclusion/Resolution

- stage 2 without `\Z`
- WH and RGN to review for Stage 3

## Intl.Segmenter v2

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/proposal-intl-segmenter-v2)
- [slides](https://docs.google.com/presentation/d/1ezpdee0r_ujHXDqqT4HHNYa2Q4VU7b4cMQWg6gQxLTk)

FYT: Yeah, so what a gray timing for us to talk segmenter, which cannot be addressed by regular expression. That's why we're talking about that. There are certain things can a addressed by regular expression and certain things that cannot and the reason we have S Mentor is because they're thing we cannot be addressed as a regular expression.

FYT: So, my name is Frank Tang from Google. And today we're going to talk about until Sacramento version 2 proposal for stage 1. so I show this proposed so in December 2nd to the TG 2, which means the Ecma 402 supporting group and then put another agenda and after receive feedback. I go back to study a little bit more and talk to someone and he met originally proposed have two parts and after which receives a feedback and the last week, we decide to drop one part of that, but I don't want to remove that. Just put it here and put a big cross for the part. I remove. So there are some difference. I shouldn't shouldn't have different. There are some different. Between this thing I presented a and the one I present like two weeks ago to TG2. And I, instead of removing that I just put across. So, you know where it's far different. So, this particular proposal for the scope, we have right now are mainly focus on adding line break to the proposal. And what does that mean? Is that we already have an Intl segmentor API, which is already stage 4? Richard was the last champion of that. But what happened is, during the development of that, word, sentence and the grapheme break are included in the V1, but the line-break is not and we received a lot of feedback asking us to a line break it back to the intersect mentor of which was originally in the states too. Kind a of time this documentary about late. It got dropped. And so this proposal and are now only focusing on adding the library. This is a separate part originally asking for a batch mode and that after careful consideration and receiving feedback. We believe that part is not needed to. We cannot justify that there is a benefit which will actually causing some ergonomic of using the API. So the crossed out part of the slide, which originally put originally put in my (?). I decide not to run with it.

FYT: So the idea of this adding the line break a different than other break is, this is actually a need to show to the web developer to provide a possible logical line break point opportunity points, so they can use it to measure the tax. Then the decide where to grab the line in in the user interface. So so what's a problem problems? That currently in customer only support grapheme or incentives, break plus G. Al t, as know, for a lot of Western language, those a lot of those things could be done by Rutgers traction, but in many other language for example, Chinese Pike for mere, Japanese fermi's and the Lao and c'mere. You cannot use. Regular expression to coordinate. And what's the usage? Why we need a line break opportunity, right? Your line break, are there similar to that, But different couple usage. One is an HTML5, the canvas. No have an API of a view text and also measure texts, but it only supports one line of rendering. It does not support multiple line rendering therefore the developer has to use it with a line-break API in order to properly render text in multiple lines. So this thing when I work long, time ago, last century, nineteen ninety, eight. The Mozilla, the project, I did the first line breaking algorithm there. At that time. We don't need to do though, thing. Right? We only thing we need to do is make sure the HTML layout engine. Wrap the line correctly. We really don't have me. Much need to expose that to a JavaScript. But 20 years later while I was a 23 years later after canvas, pretty popular, and because is only have the line by line re-rendering, a man driven, this become very important to fulfill that needs. And we also asked people around what kind of test cases they're needed. I will show you something one. Is that Richard? I think mentioned that even with something very simple like a formatting and mono space context like GitHub or (?) you need something to tell. Where are the linebreak opportunity and mixing with our information to decide where to break. And also, there are some context not in HTML. One particular example, there's a project called JSPDF. Yes, which is Josh. Good Library, true friend, generate PDF and their particular a play that you try to do layout in PDF. PDF. You have split paragraph into lines. They have all the mattress information, but in order to properly split the line for not western-style line break, you have to have api to do a line breaking.

FYT: So there are several different cases. There are more I will show you later. Yeah, so a lot of people give us some feedback is to make example that case in the pan program, the webgl and VR and AR environment. And there's also many other cases and another motivation. We really want to have that is before the Ecma for to is formed around between 2010-2013 Boucher actually in the V8 iterator in. Crop, which support all the four different break and this is a problem. One of the so. So actually what happened in the bush as my boss and I have one I want and I say, hey, you wish. I don't know who had that PA break iterator, You know, we try to keep your tire. Then he said, oh I did that but oh, that's easy. I can just ask you why you put it there. You say Well, in that time, that's before now, I'ma for to a and we tried, you know, everybody like Mozilla have most You have them that this I'm saying, and we experiment with that because we haven't had before my 424a later on. We just established for to and we want to, you know, know, it's just left there because there no replacement. All right, we really want to retire. Those kind of, you know, pre for to kind of thing. A lot of things got retire. Like the number format. I used to have a V8 number format was Once we have five more for who retire those. So, So, we're really want to have A line break in the intersect Mentor. So we can retire the a break iterator and just obsolete it until all the user to migrate wouldn't stand on. But because there is no standout one. We just cannot get rid of that because people are asked using that.

FYT: So, so give you some background and we did some research to see is that really needed? So around I think about two years ago where we try to launch intl segmenter I also started instrument Chrome for all the users that agreed to provide information in a song user by default DOM but a lot of user (?). We figured out what kind of pager are loading try to give feedback to that. And we know this right now is 0.0645% percent web page. We asked me, are you losing by the Chrome are using this line type of the a break iterator? And in comparison the Intl SEC Mentor is about 0.085%, right? So a little bit less than that, but there are three different types. Probably most of their using the (?) should do the counting. How many words there are, right, but you can see that. That is pretty still a lot of people using that there are also interesting things. Once what instrument that we also have way to see what kind of sample page. This didn't mean the ranking is to say, well, we stamp. Oh, what kind of page are using that? You go to that side and you can see some the sample I think, interesting, number oxcart government are using that V8 break iterator. And I think most of them probably come from somewhere. Try to draw some charts and have to have multiple lines in that chart either by a to tip or some multiple line of text. Just don't fit the width so they have to break the line in right place, but you can see that Pages. See some real example of how people try to use a V8 breakiterator to break line, because we don't have intl linesegmenter yet.

FYT: So, here are the high level. This is not fixed, but probably likely to what will be If we have the proposal, it going to be staged 2. Remember. We are only asking for stage one right So this part is not really needed, But I just try to show you what may likely. I don't, I don't need have a spec or pipe a habit here so you can see that probably will have adding a line G ality there and then decide how to break. Why break the second? That's right. And don't think our standard those thing are already in stage by Richards design. just adding a new value for Gran LT is a lie. Oh, so that may we will may have a new type of light break style. which match whatever css3 they have strict normal, and loose last line break style and also match. Matching u-235. And so we can see here. a spec text I put together, which is really not needed for stage 1, but if we go to stage, 2. But today, I only ask for stage 1 and also have a V8 prototype. We tried it out.

FYT: So here, so, what are the cross-cutting concerns? Because that's what ever we need required to study it before, go to stage one. So here, I show you some of the reference material from safaris HTML5 canvas guide, right? So it's apple's documentation, but I think it's also apply for all the browser's canvases, it says that the bounding box, you know, whenever I draw the text in canvas you need to include tags that Supply at front. You may want to, you may want to break text into multiple lines. So apple is telling the developer, if they want to read using canvas with text. They may want to break text into multiple lines, but how to? Right so the how to part is that you basically have to have find out opportunity and then call the matter, text and figure out the bounding box and then you can do it. So apple or all the browser vendors. Does it supporters measure text to do that part. The missing part is, will be fulfilled by the line, granularity in segmentor. So you have to have that one piece of the recipe is already here. The other piece is whatever we try to pose the line granularity to make sure that could be fulfilled.

FYT: So look like to look at prior arts? Prior art. There are a lot of prior art way back in different programming Programming language beside the V8 break iterator. Which think about 2010, but even before that, there are a lot of prior art back OSAP. I have my two different kind of generation of similar API for the C Objective, C or something or so on so forth, Java. Our sinks 1.2 December 1998 have break iterator. Get my instance that 23 years ago. Okay. I see you. I see you foresee, and I see for Jay Happ that around 2001, which is again finding years and actually 4X recently, I think Chen and ZB and many adding Benicia many other working on that area. One thing I want to point out when I first worked on line, breaking in Gecko and back 1998. They're not much reference material or how to wrap a line while, originally our cabina a Mosaic in University of champagne 1994. He's right a lot nail and are rather poor 95, Netscape 1.2 adding just how to deal with Japanese, right? But there are no much standoff that you With that, but things changed. Around Japanese, 450. Sark's 4051 the previous version around 1998. That's the first one I can reference when I work on that, get coal. elderly PRK around the year, 2000 or 99. that's only stand on naturalist and dark and reference to Okay, fine. about line. Wrapping a kingfisher e about how the graph He's lying around that time as in can Lundy's, night-night book also mentioned, how to do that and Microsoft list extend that (?), which character should be cannot put in the bag and which character cannot put in from actually Extend the symbol of characters of Chinese and simplified Chinese traditional Chinese and Korean and in another book, which I've got.

FYT: that but things, change a lot around that tithing 2000, Unicode Consortium start to look at all the reference and put out. unicode standard UTS14 around year 2,000. Again about 20 years ago. So there's a standard international standard definition based on Unicode property based on the algorithm there, but also allowing Locale tailoring, which means some, the Locale may tailor right? The ICU database some become a very important piece of that because whenever you eat, add a new character, for example, you add an emoji, you have to decide where do the line break with Emoji. You have an emoji sequence. You cannot break in between, right? You don't want to have a engineer, and the end of and the color black or color in the brown in the beginning of the second line, you want to put it together. So there will be a a dark-colored engineer or something like that. Right? the line breaking is important. So CSS also have the text css3 also have mentioned above Define those thing about the keyword of the strict normal loose for lb or line-break style and uts35. They start to Define, Define, you know the lime. Break style. (?) 40. We're handling. I think the mostly they are coping for whatever in the css3, right? So thing changed a lot in the last 22 years since I work on the line break Gecko because all the standard algorithm got published and worked on by industry inmany company. And therefore, does it become an no longer? Just hey, let's look at (?)'s code and see how he wrote that in mosaic. We can reference the standard, and we have will send our library in the open source, and we can all use that. So have a standardized implementation.

FYT: So here are some example request, that's not all the thing I got one is several different web developer asking for that beside Google internally JS, PDF contributor. also Also a mansion about that. (?) did thing in order to support, JS PDF in charge Q2 General, pre-post, correctly. It without that is very difficult to info, and they have write a lot of code Futter-web, one of my colleague also mentioned that they think this will be very helpful. without that they have to compile with wasm some of ICU to JS in order to do that, right? So that will help them to improve their Code size, which means it improves improve their performance. And there are some other requests are not go, the code that you can also see from the web. There are some people asking how to do that. Sometimes people get a very wrong answer based on Assumption of a western-style line break and some of the solution didn't work, but the demand is there. Clearly, people are asking for that.

FYT: So while the other question is what will happen, if we don't work on this proposal? Because the status quo is always the alternative, right? Let's say we just say, eh, we're not working on that, what will happen next. Well, there are couple of possibilities, right? One is what the upper canvas, for example, JS PDF or something else. They can just use string to split and do the wrapping. Well, what will happen? The consequence is that that approach will make Chinese Japanese Thai Lao Khmer Burmese and several other language line wrap incorrectly on those plan on those applications, right inputs. For example, these three are very easy to ride of char people without the thing. Well, very easy to produce, wrong results. those language. It will work for Chinese, English and French, but it will create a very disadvantaged for many other language, because very difficult to England (?). The other possibility which I think already saw. Some people try to do that. Is that they try to use the word break, we already have in the segmenter, misuse it to do the line break, right? Similar to the first approach. Again, this wall causing low line, break quality for CJTLKB languages, right? The demand is there. They're going to break It. the questions that how hard it? How good is the result they are going to produce. And how hard is that for her to do that (?) The other possibility Is they can load a big library to do the correct line break. example canvas kit, which is wasm compiled ICU into JS approach to implement a line break, right? So well, they can do it. The what happens there are going to because of the line break line break for Japanese and for all. The language remain Chinese damaging(?). They're all required dictionary, which means they are going to lower a pretty big chunk of this wasm compile into the client, right? It will affect latency and page load. I think one of my colleagues asked is that at least about 1 megabyte. want to support some of this language? I'm not sure all the languages because I so I think for Chinese Japanese, I don't think they really need a, the dictionary of Loa and Burmese, that surely need dictionary and that is about 1 MB. or the other way they can do is they combine with big JS and this hey, you know what? We have this break iterator already ship for like more than 10 years and they haven't retired. So, how about prom? We just write a rapper of Public Health and non Chrome browser of sound something like Safari or Mozilla. We were just load big giant J's Library, which doesn't right? First of all, it's harder for developer to manage be causing, you know, whatever. Incompatibility and I think it's really not good for non Chrome browser, right? In particular we go. We have a lot of occasion and we really care. It's not only our vision real fast on Chrome browser. Will also want to make sure it runs very fast on non-Chrome browser and we see this kind of approach is a really bad idea. We want to see we all run on different browser. They have a very optimized Speed and Performance and use less memory, and that will be a benefit for our application product. Right? So the along all the user of there more, all different browser platform, but if we don't act, we keep instead of school. This all the thing I mentioned here, maybe something else may happen, Ryan, so we really don't want to see those things happen. would so we therefore we think we need to take action.

FYT: Okay, here are the sly and I'm going to talk over this second batch mode, kind of idea that original put it there, we decide to remove that. We figured out, we don't really need it, but I don't want to remove it. I just put it across here. So because I kind of put across last week. I don't want to change proposal. I just want to make sure we are not talking about this part. So now let's look at what I hear in stage zero. So we propose because the stage one, so one who go through checklist, right? So we have a champion who's me that Part's down in this presentation. I think. I'm pretty sure. I illustrate all those point I require about algorithms, reference, or thing. we also have a palpable repository for that. Which list here. So that's AA. I believe and I fulfill the entrance criteria for stage 1. So asking for stage 1, and I want to remind you. What does that mean? That means that each one. According to the process committee has respect to devote time to examine the problem space solution and cross-cutting concerns us all. I to advance the stage one. Okay? And question, answer. All right.

RPR: We got one on the queue. MCM?

RPR: We can't hear you. Increase your mic gain? There's no one else on the Queue, but feel free to add your items. Now, if there's any, it's a sport. Yes, we

MCM: Hello, everybody. I'm Myles. I think this is the first time I've spoken TC39. So just thanks for allowing me to attend. I work at Apple on the webkit team as an engineer. see, so I wanted to bring up the larger scope of this particular proposal. Whenever anybody wants to do line breaking, the next step necessarily in that program is to try fit text into some available width and that requires things like font metrics and such and it's not just that canvas. You mentioned that you mentioned the canvas API. Canvas has draw text function at a measure text function, but it doesn't do line breaking and that was intentional from the beginning for canvas. And the reason for that was that this idea of line breaking is a small part of a large problem. The larger problem being sort of the ability to lay out paragraphs of text. And so, in order in order to do this sort of larger kind text layout, you need a lot of things like font metrics, like I mentioned, but also you need to handle Bi-Di and font fallback and need to execute shaping and probably the content is going to want to also add support for things like line, word, spacing, and character spacing. And then we start talking about all of the of the sort of functionality that in CSS, so I'm not saying that we should add all of the functionality of CSS. But the point I'm trying to make is that this proposal is one small piece of a large area. And there is a another working group, or rather a task force, whose primary purpose is to work on that larger area. That's the Houdini, Houdini task force inside the w3c. They have a product that they're creating about custom layout, and this sort of text layout should just sort of fit, right in with the larger effort that they're that they're investigating. So, with that, I think that this particular proposal would better fit inside that task force inside the w3c and I wanted to sort of mention that the acceptance criteria for stage 1 says the committee expects to devote time. I don't, it's little unclear to me reading that whether or not that means the community expects to devote time in. This committee meeting or in a different working group if the acceptance criteria is like members the committee will spend time and that might happen to be in another working group them. Okay. Sure, then than stage one fits, but if it doesn't mean that and I think stage one might not fit.

BT: Well, I think it can mean either or both. Stage 1 just means, you know, we'll continue to talk about it. We'll, you know, welcome updates in plenary and that kind of thing. I don't know that venue concerns are something that we would bring up for stage one, but if other folks want to discuss that, we can do that. Although we do have four minutes left.

MCM: I guess I'm I forgot mentioning. I wanted to mention one more thing, which is if a developer only has the ability to find the library opportunities in a line of text and the only way of measuring text is to measure a run, which is what canvas gives them. Then that turns into an N squared algorithm. So one of the ideas of moving this into Houdini would be to allow some sort of API to merge the line breaking with the text measuring to the N squared algorithm into an O(n) algorithm.

BT: We have JSC on the Queue. Do you want to do want to talk to that? I think you're, I think you're right.

JSC: yeah, just just wondering if that should actually block stage one rather than stage 2. Yeah, I'm new here. So I actually have no idea whether it should look stage one or not. Okay? Yeah, stage one is sort of more of an exploratory. It's like if you look at the process documents on TC39/process-document describes the stages basic. It's a quote, the committee expects to devote time to examining the problem space. Let me quote basically. So like I'd say that your concerns on appropriate venue whether to differ. Including a versus whether it's to put in JavaScript. International would be thing. That would have to be resolved before stage 2 But stage 1 would be with mean there's room for the committee to explore. What's the most appropriate venue. So does that. So with that said, would that make? What would you still block stage one, or would you let stage? One and block stage to until your concerns. Are those concerns. He said are satisfied.

MCM: Yeah, if that's the definition of stage 1 then we won't won't block stage 1.

JSC: Okay, that's all for me.

BT: SFC with more process.

SFC: Yeah, I think that, you know, traditionally we have a low bar for stage 1 and a high bar for stage 2. It's very common that proposals come to stage one and die because we can't get consensus for stage 2. But Stage 1 reflects the fact that someone on our committee is going to be putting in time to investigate this space, and we have that person; it's Frank. So I think that this proposal is definitely something that we should promote to Stage 1. Whether or not it makes it to stage 2 clearly requires additional discussion with MCM and others.

BT: All right. We're at the time box. So. Frank, I think you want to ask for stage 1 now.

FYT: Yes, I would like to request a committee to approve. What advances stage 1.

BT: All right, any input there?

JSC: I personally, positively support this proposal, although the Providence and whether to defer to Houdini is a reasonable concern. All right.

BT: Sounds good. All right, I don't hear any objections. So Frank. You got your stage one. Thank you. Thank you. Alright, and we're done on time.

### Conclusion/Resolution

- Stage 1

## `Promise.prototype.finally` should use `onFinally`'s realm for newly creating functions (continued)

Presenter: Jordan Harband (JHD)

Finally is Jordan is ready to bring that back up. We have 10 minutes left on this time Time box from previously. Yeah, I'm not going to present anything this time.

JHD: The hope was that Mark would have some time to digest. Some of the points brought up. So in summary, we're talking about in which realm the functions passed to `onFinally` are in. Current spec says, the realm of the promise; the proposed change is the realm of the `onFinally` function, and there were thoughts on that. Mark, please go ahead.

MM: Yeah. I took a look at the at the test case the proposed test case took a look at the suspect. I understand. that the spec without bringing in the Incumbent realm or the term does, do the wrong thing for then and catch but does do the right thing for finally and that's that is also my position. Is that in the current spec, finally correct. And then and catch are broken on this ground and need to be fixed now, obviously, you know, so I reject the, I reject this PR's desire to let finally join the broken state of them and catch. So I'm happy either with you. Just closing the pr in which case we have the then and catch question that needs to be fixed or I'd be overjoyed if you would revise this PR to instead reverse then and catch to consistent with the current state of fundamentalism.

JHD: so, given that it was I believe Mozilla folks that both raised the issue and made the pr YSV. Do you think you have any thoughts on perhaps, making that change?

YSV: So I would be interested in seeing more of a proposal from Mark about how this could be fixed. Because as it stands. Now, this is a spec bug because the behavior is inconsistent between the three methods. I don't see any motivation that we could use for saying that finally should have different Behavior.

MM: So to answer YSV. Yes. It is. aspect, but I verified that when I was looking at the spec and all these other material, then and catch are inconsistent with finally. The appropriate fix is to fix, then, and catch. So that they are consistent with finally. Now, I do. See I'll just anticipate. From the title of Shu's question. They might not be fixable. We don't know. However, this leads to a question that I was not able to resolve on my examination, which is the bug as means the behavior as stated only in the absorption of a Thenable into a Promise as the receiver of, then catch and finally and the need to synthesize the on-then, and on-catch callbacks when, when doing the absorption of a then-able into a prop in to effectively a promise, which is then use. Is that the only place that this non lexical scoping semantics occurs, and if so, I think the hypothesis that it's fixable is really quite strong. I really doubt that the absorption of a then in that position, followed by the sensitivity to the realm of the synthesized on success and on-failure callbacks. I really doubt that There's anything dependent on that altar. Of course, there might be but this falls within the range of the things that the committee has gotten away with that are technically not compatible. There are other much more violent changes that we've succeeded at getting away with but the web can always surprise us once we try

BT: Time box. Now. There's about three minutes left.

SYG: So that would be okay. So I'll just defer on the question of data whether it's fixable in practice and whether we care to staff trying to figure that out. There's other point that I just and I think it's raising. So maybe I'll just let Justin speak.

JRL: This, my memory's a little hazy and I'm not in HTML implementer, so I don't know the exact reasons. My memory is that we changed thenables behavior explicitly because HTML was having difficulty integrating with what was specified in TC39. There's something about a dying Realm where they have to have the functions in the thenable's realm in order for something to work correctly.

MM: So neither of us, it sounds like, actually understand the issue. I agree that such an issue would be very relevant data and I would encourage somebody to point us in the right direction, understand what the HTML issue was?

YSV: so, I just want to - how to put it. I am happy to change what we're doing in terms of the spec, so that other implementations don't need to be aware of this behavior in any way. I think that's a perfectly reasonable direction to take this but my main worry is that we won't be able to reconcile it with what we need as embedders of the engine. So it could be possible. This is something we can certainly investigate could,

MM: but can you explain the source of the concern about why it might not be possible? Just at this?

YSV: So my suspicion is that this is a web compatibility issue and I would need to do investigation in order to verify that because we discovered this because of an incompatibility. So people are relying on this Behavior. And we wouldn't have noticed this. If it wasn't a problem,

MM: okay, and then we're speaking specifically about the synthesized onsuccess and onfailure, callbacks to the then call that happens, When promoting a thenable into a promise as the receiver of a then capture final,

YSV: the specific issue that we have. Is when writing we have a test case when using await syntax that eventually calls on finally it ends up never resolving, when it should be using the incumbent realm to resolve. It ends up never resolving. Because it doesn't have a realm to rely on. So, we end having an infinite wait.

MM: Okay, I would like to understand this. I'm not going to ask you to explain it adequately for me to understand it in committees time. I do agree that at such a consideration would be relevant. But until I understand that I can't, I can't accept it. No, not another way to fix it.

YSV: I think. I think there may be another way to fix it. I'm not sure that that other way will not be something that requires some existence of an incumbent realm. Like I do believe we will need to have a way to fall back on to this functionality, but the way that we specify, that can be different than what we currently have.

MM: I look, I look forward to understand. Please Point me at all, and all the relevant material.

YSV: Okay? I'll add our bug to that original issue.

JHD: Okay. All right, so it sounds like YSV. You're going to comment on spec issue and I will react to that and update the pr titles and stuff. As necessary.

YSV: Yeah, probably I also should have been the one to bring this since it was issue on Firefox that we ran into. So I'll work with you to see how we can resolve this. Okay?

JHD: Awesome. Thank you.

### Conclusion/Resolution

- YSV will update the PR / issue on github to refer to Mozilla's bug
- MM, JHD, YSV to discuss further offline

## Incubation chartering

Presenter: Shu-yu Guo (SYG)

### Conclusion/Resolution

SYG: Cool. Thank you. Let me bring up the current charger. So first of all, I made a reflector post about this, but I like to post a question verbally as well. I am looking for volunteers to help facilitate these incubator calls. I have been myself kind of busy around the past quarter and possibly continuing it would be helpful to have some other facilitators. facilitators. Who are Or able to run these meetings. I think the ideal candidate is probably someone who has an interest in one of the topics, but kind of an adjacent interest not enough that you would want to actively participate, but would like to listen along. So you don't mind taking notes or something like that, the primary responsibilities of a facilitator for one of these calls is to set up a doodle to collect a good time with the stakeholders to hold the call. And then taking notes during the call. so since last time, the only Incubator called, we were able to have was like bike shedding on the pipe character. So it's still on the carry over from the last Charter, then we still have pattern matching which I think you know, we ran a doodle, we got enough interest but due to some conflicts of of some of the stakeholders we couldn't hold it. I think they're still interested pattern matching and helper functions. And big int math are to carryovers from from last time. And then for this meeting, it was specifically raised in the array that from async discussion that it might be good to have an incubator called about the precedent of having a sync functions. So those three who carry over is enough until our next meeting. I would think I would think. But with that, I would the floor to other folks who want to have their topics discussed, we can queue it up .

??: I'll note that we did get the pattern matching called done actually.

SYG: Oh, you did excellent. excellent. Okay. Yeah. so then strike pattern matching from from the charter than we have a total of three function functions, big and math and, and array, or a precedent for your methods. All right. I don't hear any. Anybody volunteering you talk? So. That sounds good to me. And yeah, if you are interested in facilitating, one of these calls, please respond to the Reflector issue

BT: All right. Thank you. SYG. All right. We're on track to finish a little bit early today. I have one more agenda item, which is time box to one minute, one minute item.

## Master->Main rename

Presenter: Jordan Harband(JHD)

JHD: All right. So this is just an update that their announcement as soon as plenary stuff, settles down. I'm going to go ahead and migrate the agendas and proposals repos so their default branch is called main. I think these are some of the last repos we have at least the public ones. They're like this. So, I'm just gonna go ahead and pull the trigger on that. So, for those of you who contribute to those repos, if you have no open pull requests, the easiest thing to do is to delete your fork and recreate it. So please don't do that if you do have open pull requests and feel free to ping me on Matrix. If you want more detailed instructions without deleting every critic of work. That's all.

BT: Thank you, Jordan. I was excited to cut you off after a minute, but you came in under so

JHD: I'll give you that joy another time. That's unfortunate.

BT: Okay, well with that, we have concluded all of our business for this meeting. Thanks everyone for making it a good one and productive. Thanks, especially to those of you who helped out with notes. We could not have done this without you. Thank you just so much for that.
