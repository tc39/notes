# 113th TC39 Meeting

Day Three—12 March 2026

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Samina Husain      | SHN          | Ecma International |
| Jeffrey Posnick    | JPO          | Bloomberg          |
| Waldemar Horwat    | WH           | Invited Expert     |
| Chengzhong Wu      | CZW          | Bloomberg          |
| Dmitry Makhnev     | DJM          | JetBrains          |
| Richard Gibson     | RGN          | Agoric             |
| Olivier Flückiger  | OFR          | Google             |
| J. S. Choi         | JSC          | Invited Expert     |
| Linus Groh         | LGH          | Bloomberg          |
| Lea Verou          | LVU          | OpenJS             |
| Gustavo Tonietto   | GTO          | Mozilla            |
| Ron Buckton        | RBN          | F5                 |
| Stephen Hicks      | SHS          | Google             |
| Evan Winslow       | EBW          | Google             |
| James Snell        | JSL          | Cloudflare         |
| Guy Bedford        | GB           | Cloudflare         |
| Dan Lapid          | DLP          | Cloudflare         |
| Steve Faulkner     | SFR          | Cloudflare         |
| Eemeli Aro         | EAO          | Mozilla            |
| Matthew Gaudet     | MAG          | Mozilla            |
| Jason Williams     | JWS          | Bloomberg          |
| Istvan Sebestyen   | IS           | Ecma               |
| Philip Chimento    | PFC          | Igalia             |
| Andreu Botella     | ABO          | Igalia             |
| Ashley Claymore    | ACE          | Bloomberg          |
| Aki Braun          | AKI          | Ecma International |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Justin Grant       | JGT          |                    |
| Jordan Harband     | JHD          | Socket             |
| Justin Ridgewell   | JRL          | Google             |
| Kevin Gibbons      | KG           | F5                 |
| Keith Miller       | KM           | Apple              |
| Mathieu Hofman     | MAH          | Agoric             |
| Michael Ficarra    | MF           | F5                 |
| Mark S. Miller     | MM           | Agoric             |
| Nicolò Ribaudo     | NRO          | Igalia             |
| Peter Hoddie       | PHE          | Moddable           |
| Ruben Bridgewater  | RBR          |                    |
| Rob Palmer         | RPR          | Bloomberg          |
| Shane Carr         | SFC          | Google             |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

## First-class Protocols Update (continuation)

Presenter: Lea Verou (LVU)

* [proposal](https://github.com/tc39/proposal-first-class-protocols)
* [slides](https://tc39.es/proposal-first-class-protocols/slides/2026-03/)

LVU: Okay. Is, yeah, it's definitely on now. Just going to qu-quickly go through the slides I presented yesterday to remind people what this is about. What remains, especially the code examples, this was the design around 2018 and what was changed? Members are now explicitly required through requires. One of the sort of bike-sheddy questions is, should we use requires or abstract here? Then we switched to using computed property names for literal names, which also allows us to use external symbols. So you can actually use symbols from the outside that have been defined somewhere else. That was a question I got yesterday at dinner. You just use the bracket notation, so the computed property name.

LVU: It is very much framed around objects. There is nothing constructor-specific anymore. We dropped some of the syntaxes for implementing a protocol. We pruned it down to the essentials. Yeah, flattening. We fleshed out introspection. A bit more. Protocols are immutable. I got a question about that as well. this with strings concept is kind of open up in the air, both how to name it and also, like, whether this is the right direction, whether, a factory method is the right direction. I got some discussions last night at dinner that having a dedicated syntax for it could actually enable certain optimizations that this wouldn't.

LVU: And the open questions, should, strings and me identifiers with the same name be considered distinct members? Which affects a lot of the other questions. Constructor and prototype, should they be errors? If used without quotes, should they be automatically strings? Like, we know what the author's trying to do. Why? Why throw, how protocol inheritance extends implements both, how to access parent symbols, how to, similar question about sub-protocol members. Do they create symbols that you can access from the parent protocol? Or do you just have to keep calling protocol describe, which is very awkward? Yeah, those are the open questions. But obviously, everything around the syntax is also, for debate and feedback.

RPR: I guess, this is the one where we did actually have a cue from yesterday.

LVU: Oh, right.

RPR: Is that in the notes? I assume that's normally where we put the queue items. CDA said that he took a screenshot. But it's not clear where that was put. Sometimes it's put in the delegates' chat. All right. Let's just see if we don't think it's in the notes. Okay. All right. So, unfortunately, CDA may just have it on his local machine. Yeah, if so, if you do recall having a question or comment from yesterday, please put yourself back on now. EAO?

EAO: So yeah, I do remember this because I was actually the next one up, from yesterday. My sense is that one of the premises of this proposal as I understand it at least is that it is possible for a, a class or an object to implement multiple protocols at the same time. And, I've not looked into what you've said about how this is done. But, if I recall from yesterday, LVU, you mentioned that you were able to kinda combine all of the parent protocols into a single sort of, combined thing. And for that to be the protocol that then the class is implementing. So if this is possible for protocols, I would presume that the same operation would actually be also possible for parent classes. So would it be possible to extract from what you're proposing here a proposal to allow for a, a class to extend multiple classes using the same logic that you're proposing that is used for protocols? Effectively? And only do that part?

LVU: One thing that hasn't changed, is that protocols are being applied by copying their members onto the object they're being implemented on. They do not use the prototype chain. And basically doing that for classes is exactly what the mix-ins proposal is for. That is exactly what it does. And yeah, that is a separate proposal which, our understanding was there was some committee pushback against.

MF: Yeah. Yeah. You, you just can't do it for classes because you only have one prototype chain. It's different when you're copying like this.

EAO: But could we create the same sort of meta-parent, class the as is proposed it happens with the protocols and have that be the parent of the class that we instantiate?

MF: You would have to resolve how their prototypes are used to resolve lookups as well. That is a thing that you can do. It sounds like the thing that you're asking for does very much overlap with the thing that was in the mix-ins proposal. But that's not at all the direction that this proposal's going.

LVU: Also, you don't have enough information to do this for classes, like, from the outside at least. I suppose implementations could do it, but yeah. Anyway, that's a separate thing.

EAO: So is the difference that protocols don't have parents?

LVU: They do have parents, but that's resolved on the protocol side. And also how that their parents, how that works, is also one of the open questions. Like, it's very clear that we want protocol inheritance in some shape or form. Does that use the prototype chain? Or does that also use a protocol mechanism? If it uses the prototype chain, it's basically like we're trying to solve this problem of having a single inheritance and we're, we're also having single inheritance here. That is kinda weird. Yeah.

SFC: Okay. I had a question. Which is that in the slides you gave examples of, built-in protocols, I have a proposal where we're doing a built-in protocol. Is the idea with this proposal that, like, we will have protocols like, like, we will define a bunch of, like, protocols for all of the built-in protocols, and then in addition to that, users can create their own protocols? Or is the idea here more that users can use this mechanism to create their own protocols and then implement it on all the types that they want, but that built-in protocols will, like, remain the way they are?

LVU: So there's absolutely an intent that implementations would provide their own protocols. And basic and one of the goals is to reify the existing protocols. Do note that most of the existing protocols that we have are around requirements and not provided methods we thought that provided methods is the provided members is the natural next step. Like, for example, if we were defining `Symbol.iterator` when after protocols had existed, we may have wanted to also add provided members like forEach. But that was not a thing back then. Do you want to?

MF: Yeah. If you look at the slide, we have a slide that we presented at the beginning of the presentation. These are just some of the built-in protocols that we think would be nice to actually represent as protocols once we have that feature.

LVU: Although we don't want to have a rule that every single Symbol well-known Symbol that we add needs to also correspond to a protocol object. It should be on a case-by-case basis. Like, does adding a protocol add value. Like, I don't think if there's just a single required member, that would be particularly useful. But if there are provided members or if there are multiple requirements, it does simplify certain things.

SFC: Okay. I understand that this slide is giving a list. I just wasn't clear on, like, is there going to be a thing called, like, protocol .iteration? That's like a new global in JavaScript that, like, you can implement, or are, are these just, like, examples of, like, motivation?

MF: I would really like for that to be the case. Whether it's done as part of this proposal introducing protocols themselves or as a follow-on right after, I would like to pursue that, yes.

RBN: So this came up yesterday in regards to the possibility that `implements` conflicts with TypeScript. In the C# language, when you have a class that may have a superclass and zero or more interfaces, they are placed in the same location after the colon (where we might use `extends`) separated by commas. So you can say `class C : B, ISomething, PSomething` using a combined list. In a way, it looks like multiple inheritance, but interfaces are kind of multiple inheritance and you may run into some of those complexities when you're dealing with the possibility of implementing multiple protocols that may have default implementations. So there are things you'll have to figure out if you use a combined syntax like this, but it does avoid the issue with potentially clobbering TypeScript syntax. I was discussing this in the Matrix with JHD yesterday and his concern was that you could only really have one actual superclass and would have to throw at runtime if you specify more than one that is not a protocol. But that's actually consistent with how C# does this, where C# only allows you to have zero or one superclasses, which must come first in the list and then any other items in the list must be interfaces. So that might be a feasible option.

MF: Yeah, yeah. So, when you initially showed this yesterday, I thought, like, oh, this is not feasible for this syntax space. But actually, the syntax space is available. I think you should have mentioned that explicitly. Yeah. It's currently just a left-hand side expression, so we could put a lower precedence expression there. And actually make that work. That's an interesting suggestion. I like that.

RBN: I will also point out that in the ecosystem, when it comes to mixins, you will often see the approach where there is something like a `mixin` function used like `C extends mixin(B, M1, M2)`, so that's not too far afield from what people are expecting.

PFC: So my question is around the Symbol keys in a protocol kind of looking like string keys. As a programmer looking at this syntax for the first time, that's very confusing to me, and it requires a mental leap to get used to. I understand the logic that got us to this place. So I don't want to say, "I want this to be done differently." Maybe this is the right solution. But I'm wondering if you could talk a bit about the design space and whether there seems like there might be a coherent solution that would make string keys look like string keys and Symbol keys look like Symbol keys.

MF: I understand the apprehension here. Somebody else yesterday mentioned the same thing, that it's unintuitive if you're familiar with class syntax. And we are mirroring much of the aspects of class syntax. So, like, why doesn't it have the exact same semantics there for that? It is very important for the proposal to encourage the use of Symbols in the protocols you create. And for that to be the most convenient thing to do because we expect that that's what most people who define protocols will want to do, in most cases. Does it have to be through this particular syntax that we do that? No. But we still want to get to that point where it's really centered around Symbol-based protocols, existing or new, and that there are escape hatches for, like referring to externally defined symbols or referring to string keys. So I'm open to suggestions for what you think would be a better way syntactically to do that. But for now, like, that's the trade-off I had decided to take. And so far in the group, we hadn't decided that it was not worth that trade-off up to this point. But thank you for the feedback.

LVU: And there are many, good things that we get from this. Like, you can apply a protocol to existing objects without worrying about conflicts, which was the primary motivation for using Symbols. That said, I think there might be value in a syntax that lets you define a protocol as being string major, and, like, then you have to opt out on a case-by-case basis and define that, no, this is actually a Symbol. Whereas right now, you're defining symbols, and you have to opt out to define literal strings. And this is just my personal opinion, not something that we've discussed in the champions group. But I would personally see value in something like that. 'Cause there are basically these trade-offs that you need to balance. Like, on one hand, avoiding conflicts. On the other hand, ergonomics. And right now, that is the sort of balance that we've ended up on. But there are many other potential options there for balancing these trade-offs better.

SFC: Most examples of protocols currently use strings. And that's kind of the approach that a lot of the ecosystem has, has been relying on. And, like, if you have a case where there is a protocol that conflict because they have the same function name, then, like, why do they necessarily always need to have different behaviors? And if they are different behaviors, then that's kind of maybe a bad way to name your function. Like, if you have a function called length, then, like, it should return the number of items no matter who's defining the length. I shouldn't have to redefine the length function five times or five different protocols that I'll need a length function.

LVU: There are many reasonable ways to implement the same function. Like, as we've seen many times in the past when we were trying to define functions that the ecosystem had already defined in a slightly different way. And also, in some cases, it might be Symbols give you a way to also disambiguate like, suppose you include multiple protocols that all define connectedCallback for a custom element. You can write your own connected callback with an actual. Name and pull all of these together.

KG: As a concrete example, there's like a dozen different things a method called "render" might mean.

SFC: If we consider that most of, like, TC39's built-in protocols are still mostly string-based, then, like, and we want the ecosystem protocols to be Symbol-based, then this kind of decision could make some sense. And then, like, in TC39, we go through the trouble of, like, defining the string-based protocols, and we don't really like, we're not the market for the nice syntax. Right? But then if we want to encourage the ecosystem to use string to use Symbol-based protocols, then like, in some sense, that, that, trade-off kind of makes sense. I do still share PFC’s concern about, like, class syntax is string-based. And that might be confusing for developers. I think it might be worth doing, like, a user study on that. But also, like, I don't know if most users really are aware of the difference between s between, like, string-based functions and not so it's probably fine. But it would be good to have a little bit more of a stronger signal there from users.

EAO: So, so my sense here is that, proposed syntax for defining a protocol looks an awful lot like the syntax we are using for defining a class. And in that syntax, we already have an existing way of saying this is how you define a member property of this class which has a string key. String identifier. And we have a syntax for saying how do you define it to have a Symbol identifier. And I don't see why this should use a different syntax or use the same syntax to mean something else. That seems like just a way to, to get to mislead developers. And we shouldn't do that.

RPR: OFR has a plus one to that, end of message. And, I've got 10 minutes left. Three on the queue.

LVU: One thing I wanted to say is that we don't have a concept yet of generating symbols. So the existing syntaxes for defining a class member with a Symbol name, that already works. If you already have the Symbol. But we don't have a-any syntax right now for generating symbols.

LVU: There is no syntax for doing that in classes. There is no syntax for doing that in classes right now. I mean, there yes, there could be new syntax, but right now, there isn't.

ACE: Yeah. So it's and yes, we don't have syntax. We could add new syntax. This proposal's already adding a lot of syntax. It seems I agree with EAO. Like, using something that looks like a class but is going to be different. Like, because otherwise, we'd have to add new syntax. It doesn't follow to me when we're adding new syntax anyway. And if the feature would be useful in classes too, so.

RBN: I have a different take on the Symbol versus string discussion. In C#, interfaces are strict, much as what we're trying to propose by using Symbol names for the protocol. One thing that's interesting in C# is that they have this concept of explicit versus implicit interface implementation. With explicit implementation, the syntax explicitly calls out which interface method signature this method is implementing (i.e., `void IDisposable.Dispose()`). Whereas with implicit implementation of an interface, you just name the method the same as the identifier spelling of the method signature (i.e., `public void Dispose()`). Something similar could be applied to this, where the protocol will look at the object on which it's to be implemented and if an explicit method using the Symbol is not found (i.e., `[MyProtocol.foo]()`), but a method with the same identifier spelling is found (i.e., `foo()`), it could create the explicit Symbol-named method on the object as an alias for the identifier-spelled version. Since this explicitly-named alias exists, it would then pass for any `instanceof` or `implements`-like check that validates the symbol-named methods are present.

(Transcription drops for ~30 seconds.)

RBN: I think that in a way solves a lot of the issues. You don't need specific syntax like a `requires` to say that it has that thing. It is just that by default having that member says that it has to be there. Instance checks would just be checking for the specific Symbol names because they would exist because it aliased it when it was added. And I think it solves the confusion around members versus pre-implemented methods because those just are methods that must exist, and if they don't, they get added. So I think that a potential solution for those cases is to look at something like that approach.

ACE: Yeah, so for me personally, I'd love to see more use cases that are not more in terms of, like, a number, but more in terms of ones that I would find more convincing, like so the if you go to slide six, like the it lists things which are protocols, the real-world use cases, but yeah. Two more. Yeah, so this, this does list things that are protocols, but I don't think anything this list motivates Protocols,, like a lot like definitely like Symbol is concat spreadable. Symbol's unscopable. It's like the use cases for those are fleeting. And obviously Symbol species definitely not. And, things where it's just a single string like you can just implement that method. There's not a huge benefit to saying..

MF: Have you seen slide seven and eight? Like those were more motivation.

ACE: I'm going to go so like the first slide, I'm just going to the first slide, to me is not convincing to me because I thought like those things are either too niche or already currently served well enough. The next one I love category theory. I find it really interesting. I don't know if the JavaScript community is ready for category theory at large. And it would be interested and again, like structured clonable, I'd be really interested in a proposal around structured clone and customizing that. But that proposal doesn't exist yet, so it feels like we're putting the cart before the horse. Make sure I get that. And then for the DOM ones, I just I don't write, HTML much anymore. So it's hard for me to latch onto these. So if there are ways of making either going into these deeper like assuming a lower base knowledge, of the pain here, or another domain that maybe I'd, I'd really appreciate that.

RPR: Okay. We covered both yours, ACE?

ACE: Oh. I forgot this. I'd also appreciate like we talk a lot about things like Java. And that has similar things to this, but like I find again, I'm not massively convinced when we compare ourselves to like statically typed languages because JavaScript isn't statically typed. I'd be really interested if there are other like dynamic languages like JavaScript that have something like this because a lot of these protocols, when I'm looking at them, I'm like, that on its own what I'd really want to see is like TypeScript to have support so you can actually describe not only you have this thing, but this thing should take a function, a callback that takes these properties and return these things 'cause a lot of these protocols just the name is only the surface. What's more important is the types. And this without the types again, it feels like it doesn't pull as much weight as it would in a statically typed language.

RPR: Okay. Two in a bit of minutes remaining, two in the queue. JSL?

JSL: This might just be a factor of me just not having the right mental model. Why isn't this just an interface? Why, why protocol?

LVU: Because TypeScript already uses that term. It is basically an interface.

JSL: Okay. But why is it since we already have a syntax there, why are we saying it calling it something else?

MF: The last time that this was presented, the TypeScript team objected to it being called an interface. It was presented as an interface. Yes. I am right there with you.

LVU: So we'll split it.

RPR: Shane?

SFC Yeah. MF will answer this a little bit on matrix, but it seems like this pro besides the keywords, this protocol, this, is implemented implementable in a polyfill, which also means that the main motivation of the proposal is that we want people to use the Symbol-based protocols more because like what they can do right now, they can do we just want to make it easier for them to do it. Is that right?

LVU: Yes.

RPR: I think that's the queue done. And you've about 30 seconds left if you wish to say final.

MF: Thank you, everyone. I really appreciate the feedback. I think this was a really constructive discussion. Yeah. I'm happy with how it went. And I'm looking forward to doing more design work and coming back with our updates later.

### Speaker's Summary of Key Points

* Gave another quick run through of the presentation
* Received committee feedback:
  * EAO is interested in multiple inheritance for classes, but the champions' group was not interested
  * PFC is concerned about identifier names being Symbols as well
  * RBN wants to explore `extends ParentClass, ProtocolA, ProtocolB,…` notation in the class head
  * SFC claims most protocols are string-based, not symbol-based, and is skeptical about the protocols design being symbol-first
  * EAO is also concerned about IdentifierNames being symbols
  * ACE thinks we can explore a notation for generated symbols for class elements
  * ACE would like to see the motivating examples expanded on more for people who lack background in each respective domain

### Conclusion

* Champions received feedback to help inform their design on the way to Stage 2.

## test262 coverage strategies

Presenter: Richard Gibson (RGN)

* no proposal
* no slides

RGN: Okay. So this is going to be less of a polished presentation and more of a show and tell. And I wanted to start with an explanation of the problem that I'm looking at. Let’s look at the algorithm for a relatively simple built-in function, `Array.prototype.pop()`. It has 10 steps, one of them implementing an early return. And as some of you may know, when you hit U, on the spec viewer, you get to see calls to user code. Which is convenient in this case because it highlights every time that user code can run, each of which is a potential source of throwing an error. And this function also has one additional point where an error can be thrown right at the top. It's deterministic. There's no implementation-defined behavior here. There's no hand-waving here. And in test262, we have a goal to cover all such details.

RGN: The normal strategy for that would entail something like finding all steps where an error can be thrown, and creating a test file for each. In this case, I haven't even pulled up the test262 directory. Because I know that one aspect which isn't tested is the relationship between these exit points. So we've got first a check on ToObject, then a length determination, then if that value is zero, a Set of “length”. Or if that value is not zero, we jump into these later steps, where we do a Get of the index corresponding with the element that's about to be removed, delete the corresponding property, and finally a Set of “length”. All of these actually have to happen in order for an implementation to be conforming. You can't, for instance, set length before you delete the property. test262 right now, as a general rule, does not cover this. And for more complex functions, we actually do see implementation divergence. I don't expect it for `Array.pop()`, but it definitely does come up elsewhere. And I'd like to resolve that.

RGN: So I have been playing around with what testing would look like if we addressed such gaps. And basically, what I came up with is something like this. A test progress helper allows us to take as input what I'm calling for lack of a better term right now, variations on the different aspects. Variations on the different elements that constitute inputs to the function being called. testProgress will accept those variations and invoke a callback for each specific selection, along with the expectation of what should be logged, and what exception, if any, should be thrown. I'll come back to the definition of what these variations are, but I just want to walk through a callback body right now.

RGN: So for testing Array.pop’s first return (the consequent when length is zero), the callback is going to receive arguments for what should be logged, what should be thrown, how to make the method receiver, how to make a length getter for that object, and how to make a length setter for that object. For this scenario where we are calling ToObject, getting a length off of that object, seeing that the returned length is zero, and then performing a Set of “length”, that's all we need.

RGN: And the body of this callback basically just looks like a definition of what should be thrown based on the input. Definition of thisArg along with a descriptor for “length”. So what we want here is that the length getter just calls the corresponding lengthGetter argument and then allows us to do a set. The length setter verifies that that has happened and disallows further invocations (so it's a call-once), and then calls the lengthSetter argument. Those two constitute our descriptor, and then we send them into the receiver maker to get thisArg, which we then use in an `Array.prototype.pop()` call. We expect in most cases to catch an error, so we're looking for that here. And then, if no error was expected and none was caught, that's a successful case so we can go ahead and push into our log what we expected to get. If an error was expected, and what we caught is an instance of the expected constructor, then that's also a successful case. Anything else is unsuccessful, so we push into the log a value that won't match expectations. Following that, we characterize the case that just ran. Here, I'm using `JSON.stringify()`, but I think probably we'll do something different if this actually makes it to maturity. And then finally we run the assertion that the observed log matches the expected log. So this covers all the calls that were produced along the way, along with that final exception for a thrown error or lack thereof.

RGN: I said earlier that I would come back to the definitions of these inputs. And I'll do that now. For variations of the receiver, we start with values for which ToObject will throw. So that’s `undefined` and `null`, each of which should throw a TypeError. And these variations are ordered—I should go into that theory. We have all of these inputs, and we want them to correspond to an order where we start with every single input being “bad”. Every bad input should cause the algorithm in question to terminate abruptly. And when they are all bad, we expect that the first one will be the source of the thrown error. So that constitutes our first selection of cases. And then we can start to vary the selection. So first run with all-bad variations, expecting that the first input produced a problem. Then modify that first one so things get a little bit farther. If you're out of “bad” cases for an input, getting a little bit farther means the next input will be relevant. So actually, that's the case for receiver. If it's undefined or if it's null, those are hitting the error cases in ToObject. We're going to encounter a problem. The final variation for receiver is go ahead and make me an object. We'll get past step one in the `Array.prototype.pop()` algorithm, and uncover the problem with subsequent inputs. Which in this case is the getter for “length”. So undefined receiver gives us a type error, null receiver gives us a type error. That's this expectThrown field. And making an object does not. There's no expectThrown on this variation because it's a success case. It's going to allow the algorithm to proceed.

RGN: But we do care about having a receiver that allows us to detect problems later on. And so this is a helper, which I can go into in detail if we need, probably we don't. Suffice to say that what it's actually doing is taking our length descriptor, defining an object, and then wrapping that object in a proxy that will allow gets of specific properties that exist on the target to go through, and generate an error for anything else. So for instance, if this were reading the index property before it read “length”, then the value returned by this proxy generator would throw an error because you weren't allowed to read an index property. You are only allowed to read “length” in this case.

RGN: To make the length getters these are actually really straightforward. The base case, the most “bad” variation for the earliest abort, is a getter that throws. When LengthOfArrayLike does a Get of “length”, if running the getter itself throws, then we're not going to proceed any farther. Otherwise, the output from a successful Get of “length” will be sent to ToLength. And ToLength has some substructure to it as well. It's going to call ToIntegerOrInfinity and then clamp the output. ToIntegerOrInfinity calls ToNumber. ToNumber calls ToPrimitive, and so on and so on and so on. This stack constitutes probably the most common deep cases that we define. And test262, as a general rule, expects that the implementations correspond with the spec, and that there's only a single implementation of something like LengthOfArrayLike. In practice, that seems to be true. But it might be nice to test it. This makeToNumberVariations helper allows us to do so wherever we want. It's accepting a log prefix, a function for adding to that log, some bad cases, and some good cases.

RGN: So what we want here is basically ToNumber, all of the standard inputs, all of the things that would throw in those deep algorithms. If getting `Symbol.toPrimitive` throws an exception, if `Symbol.ToPrimitive` returns something that isn't a primitive, if the hint is NUMBER then we should get valueOf before toString, if the hint is not NUMBER, we should get toString before valueOf, and so on. All of these cases can be covered in by producing variations here and that's what this helper does. But because we want a getter, we're going to map variations produced by that helper into wrapping functions that just return them. And these are the things that we're adding in. We care about also seeing value zero and value infinity, which are not problematic outputs problematic inputs to ToNumber. They're just things that we want to see for this for testing Array.prototype.pop.

RGN: And the setter for length is even simpler. We have an error case where it throws. As in the value is a function that throws. And specifically, we're constructing these dedicated errors so that we can differentiate the variations. This particular setter throws an instance of this SetLengthError that we defined above, and we expect that that's actually going to be thrown. And then finally, we see the good case for the setter. Which is a no op function that just logs the fact that it was called. So in getting that far, we've actually reached this step 3.a in the algorithm, exited that step successfully without an abrupt completion, and then the very next thing will be return undefined, which we don't actually care about here. We're not testing the output of pop in this scenario. We're testing that all the steps of the path through it were encountered correctly.

RGN: And that's pretty much it. We also have this one other special thing that I put in, this UnexpectedSetLengthError, for if the setter was called before the getter. It's not a specific aspect of the input, it's just for observing the behavior. I'm going to do one more thing and then if anyone has questions or discussion, we'll go to the queue. And that is actually run this code.

RGN: Just for demonstration purposes here, I'm logging the parsed version of what the label should be for assertions in each of these callbacks. And then when I'm all done, we want to see that it passes. So these are the scenarios that we actually encountered.

RGN: Okay. So what we had, we would expect a large number of cases if we were naively executing them. But the implementation that I have for this testProgress function knows which step is supposed to produce the abrupt completion. That's the one with expectThrown. And so once we encounter that, we establish a prefix of variations and we can ignore every other selection with that prefix. So the first thing we have is an undefined receiver, and we actually don't care about lengthGetter or lengthSetter in this selection because an undefined receiver should throw a TypeError before doing anything with “length”. Which in this environment, it does. The fact that we don't see an exception produced by that `assert.deepEqual` verifies that. We move on to a null receiver, which behaves similarly. And then we get to make a little bit more progress. The receiver is now an object. So it now matters that lengthGetter throws because we expect to call it, and we see `expectThrown: GetLengthError` corresponds with that.

RGN: The next lengthGetter variation returns a Symbol. Symbols can't be converted to a number, so that's a TypeError. It holds for both unique and registered symbols. Getting a little bit farther now, we're going to return a length of zero. Great. That means that we expect lengthSetter to be invoked. And there it is. With a type error. Okay. But getting the setter through an exception or through an error. So that's a problem. Advancing a little bit farther, what if we replace that setter that throws with a setter that succeeds but a value of that throws? And now we see that valueOf is called. That proceeds a little bit further. The final two we're back to a setter that throws. Okay. That looks like actually those last two look like there might be a little bit of a bug in the implementation. But you see the idea. It gets farther and farther along through these cases. And ultimately, either passes or fails.

RGN: So we're basically doing the minimal coverage to verify that this branch through the algorithm has succeeded. And then we would do the very same thing for that other branch where the length returned is not zero. Now we want to verify that, okay, we're going to see in the log the get of that index and the exception accordingly. And so on and so on and so on.

RGN: One last observation on this. We now have it in a single test file, not in six test files or 30 test files. In a single test file, we've covered a large aspect of the implementation of any given function. We know that the path that went through it was good because we saw the calls to user code and even for those things that didn't call user code, we saw the errors that we wanted to see. Which actually gives us a lot of confidence once an implementation passes this, that all the other aspects that do care about the behavior, that the value that was being set was correct, that the calls had the right arguments, all those, are now in a context where the overall structure looks good. So with that, I think I'm finally ready for a discussion, if any, on the concept of doing this more widespread in test262.

ACE: I'm first up on the queue. Obviously, a lot of these things here I don't know how close to finished this is. So obviously, I don't know where my feedback's landing. There's a lot of similarities with general JavaScript testing and spies and the spies APIs where you can assert this was never called, this was always called before this, and it's perhaps just re-familiarity I find those test cases much easier to review than this. Obviously, once perhaps this would become easy to review once it's familiar seeing something for the first time, it's going to be the hardest to review. So I, was there a reason this doesn't look like a traditional spies thing where like it's manually pushing into its logs rather than just having a generic like a spy utility?

RGN: Yeah. Two, two reasons for that actually. Number one is that test262 is built on a lowest common denominator implementation. So things need to run as best they can. I didn't even go into the implementation of that. Like that proxy thing, but basically like if Proxy doesn't exist, we still want to be able to leverage these helpers. We have to have a fallback for that kind of thing. The other reason is that we actually have an explosion of the matrix constituting all these variations. And I think that probably at maturity, brevity is going to be super valuable where any manual logging risks growing to a lot. And if it's a lot, then the test is going to get incomprehensible. So I'm definitely leaning on that pattern. Like this is internally doing all that spy logic. But ideally, it fades into the background for the test authors and the test reviewers, and we can just point them at documentation for what this kind of testing looks like in test262 and why. It's doing the same things that you're familiar with, but it's doing them as automatically as possible.

RPR: We've only got like seven minutes left. With the current plan box.

PFC: Okay. I was just wondering if there is any prior art for ordered spies in JavaScript testing libraries, because I've only seen unordered ones where you can assert that they were called or not. I'll skip the second part of my question.

RGN: I mean, in testing libraries at large, I haven't done a thorough search yet. Inside of test262, we already have manual constructions of this pattern. We like there's a bunch of it in Temporal, as you know. And I want to make it like more widespread. I don't care very much about the particular interface choices. I just want to see this kind of coverage.

ACE: Actually, I say I'll yes. It's very common. People dislike spies. They dislike spies for the exact reason that doesn't apply to test262. I hate spies 'cause spies traditionally try and test the implementation too precisely, and I can't refactor it, and I can't reorder things. That's the opposite. We're literally trying to do the opposite here. We're trying to write tests as adversarial as possible so that engines can't deviate. They can't refactor. They can't change these things around. Like if that's our goal, like like the reason people don't like spies doesn’t apply here.

RGN: Yeah. This is a contract. And we really want to assert all the details of it.

RPR: KG?

KG: As a consumer of tests, this could be annoying. As an alternative to doing this at runtime, could you do this via test generation?

RGN: I'm curious in what way you think that the implementers will need to know the internals of testing for this. My goal is that if a test fails, you'll get meaningful output like here is the exact combination of inputs to a particular algorithm. And here is the deviation in the log. What you did versus what we expected.

KG: What log?

RGN: We don't see it here because these are all passing. But basically, it will be the calls that were observed. And we can highlight and we do highlight the area where things went awry.

KG: Looking at this log doesn't really tell me what I got wrong.

RGN: Even, even if you were informed that, for example, the receiver was an object, the length getter returned 6, and the index property was not deletable?

KG: Possibly? But this would be worse than my normal experience of looking at the test, trying to understand the totality of the test, and understanding why the test logic is different.

RGN: Okay. Awesome. That is great feedback. I will definitely consider that use case.

KM: To clarify, I think I maybe I'm misunderstanding you, KG, but I think it's like the, the because this is a large blob of code, it certainly feels like it would be hard to reduce where your error comes from. Like you might be able to do you might be able to deduce from the error messages what you did wrong. But like getting a small test case might be difficult because it's all in this like kind of framework thing that you need to then like extract. Yeah. But so I mean, if it output like here is like a nice mi here's a small test case that would reproduce this issue. Like it built you a little tiny program basically. That would probably be fine as well.

RGN: I think that’s very doable.

KG: That would be fine, but at that point, I’d construct those programs at build time rather than runtime.

KM: The problem with that is you would end up with in some cases like a couple hundred of them, which is a great pain for test maintenance.

KG: It's only a pain for test maintenance if you look at the generated code. If you have a directory of generated code that humans never look at, it's fine.

RGN: In principle, yes. In practice, no. In test262, it breaks the GitHub PR interface, for instance. Imagine a contributor who checks in all the generated tests in the same commit as the source modifications, for instance.

KG: There’s a way of marking generated files as generated on GitHub, and then they don’t show up in the PR interface. Anyway moving on.

ACE: I made an assumption you were using proxies, but it sounds like maybe you're not using proxies. And that, that helper there is actually a.

RGN: This implementation is using proxies.

ACE: Right. So that right. So my comment sorry. I I think there's a risk of coverage here of assuming that the algorithm is the only thing that's happening here, whereas we know inside engines the algorithm is not once. The algorithm m-maybe it is for like new things, but over time when things get optimized, the algorithm is repeated. It's like, oh, if you have a proxy, go down this completely different implementation route. So you might look at this and go, technically we've covered all the steps, but if the inputs are controlling those steps via a proxy, we're actually only testing half the engine.

RGN: I'm thinking about that as well. And I basically just run it in multiple modes.

KM: Is that really part of the scope of test262? I mean, in theory, engines can do all kinds of things in some respects. It's sort of like if you're doing special optimizations in your engine, there's no way that some maintainer of an independent test suite is going to know all of the implementation details a white box like testing.

ACE: Well, what what I'm saying, if imagine a test262 where every single object was actually always a proxy 'cause it's convenient to control it, it you could then have real websites that are using normal objects with getters and setters and they don't match the spec because test 262 didn’t cover that.

KM: I'm not saying that, that, that there wouldn't be bugs in that code. I'm saying that, do we think that's in scope of test 262 because like in theory, those kinds of is-a-proxy check could happen essentially anywhere in any line of anything in the spec. So basically everything in the spec has to be at that point, then you might as well test nothing with proxies because.

RGN: But it's enough that I would say it's in scope.

ACE: I would go further and say that test262 should focus on like like the non-Proxy case 'cause most of the majority I think proxies are bad for security. We should cover them. But like if test262 only covered proxies, that's like a bad use of test 262 because the majority of code isn't.

RGN: I mean, just to set the context again, this is not the only test coverage for any given point. Like, this establishes that you wrote the algorithm steps in the right order for an implementation. And it exists alongside all of the traditional tests which are inherently easy to understand but very narrow.

KM: Yeah. I think that's fair. I mean, I think like in, in the same way that like web platform tests tend to cover like I mean, there are plenty of buggy web platform tests, but, the, the, they, they intend to cover the most common use cases so that like at least the they have a like 95th percentile of catching compatibility issues before they make it to the like that web developers would actually run into. I mean, that's like you know, you'll never get 100% because there's just no way to cover all the exponential combinatorial explosion that basically makes it impossible without white box testing essentially.

RGN: And what this does is shove together the boring parts, like mixing up the order of some input validation steps. And then all of the interesting tests can be more prominent inside of the directory that contains them.

KM: Gotcha.

RGN: This is boring. I want it for everything, but I don't want it to overwhelm other testing. Because it's actually not interesting. There's really nothing behavioral in terms of function-specific effects. But it does establish confidence with respect to following the spec ordering.

RGN: I think we're ready for PFC now. And that might be the last one.

RPR: Yeah. Let's try. Okay. Yeah.

PFC: We don't have a lot of this type of coverage in test262 currently. Maybe at most we sporadically for some methods check that such-and-such getter is called, and the argument is converted to a number before this other error is thrown kind of on a case-by-case basis. So there's always an element of "where's the point of diminishing returns?" Like I noted in my TCQ comment `{ toString() { return { toString() {…`, you can have arbitrarily deeply nested objects each with toString methods until the engine runs out of memory. And nobody's going to test that. I don't really have a sense of how likely there are to actually be bugs in this the running order of these sorts of exception throwing points or user code call points. Does anybody have a sense of how often there are realistically bugs in this?

RGN: I do actually. I have a rough sense of it as basically a power law distribution. Most of the problems are in those dedicated top-level algorithms. So like in this case, if there’s a problem, it isn't likely to be in ToIntegerOrInfinity. It's going to be in `Array.prototype.pop()`. And even across those top-level algorithms, the problems concentrate in specific areas. I chose this one because it's a simple example, but the area where I really want this kind of testing, where it's really needed, where I really have seen issues, is TypedArray construction. There's some complicated branching. There are checks that a lot of implementations do out of order, maybe from spec evolution or maybe just because that's convenient or whatever. But that's the part where we see it. I think descending down through all the possibilities is worthwhile, if it's convenient—and I do want it to be convenient—but I definitely don't care about deeply recursive inputs. As soon as we reach the point where a getter is invoked, I think we're good. But you could also use this framework if there were a case where you cared to go deeper. I just think that mostly I would want to see coverage broadly across all the exposed surface area before I care about looking at any deeper aspect of one of those algorithms.

PFC: Does anybody have a sense of how often it happens that engines inline these reusable operations like ToNumber? How often does it happen that some piece of code has its own ToNumber implementation because that was more optimizable?

RGN: That I don't have. That's a question for implementers.

RPR: So we're actually over time, at this point. Apologizes. There's still two people in the queue, but could you summarize what we've got to?

RGN: Yeah. I am planning to polish this up and start introducing it to test262. I very much appreciate the feedback on what people value, especially for the output of this. And wanting to save them from having to dig into whatever framework we end up with. So thank you for the feedback.

RPR: Okay. Thank you. And just to dictate for the notes, the two topics we didn't get to was from MF, this seems like it can be auto-generated, maybe reach out to the ES Meta maintainers. And from OFR, this looks like we may want a fuzzer based on this instead.

### Speaker's Summary of Key Points

* test262 does a poor job of algorithm branch coverage (e.g. correct order of input validation steps in implementations), and what is there is cumbersome
* this presentation presented a proof of concept for efficient branch coverage, based on successive relaxation of inputs that trigger abrupt completions from early to late
* discussion raised the possibility of doing something similar with code generation rather than dynamic evaluation, although that might be high friction for test262 contribution and review
* there’s also a potential concern around proxy-based probing being potentially incomplete due to bypassing optimizations; it might be important to cover non-proxy paths as well
* after some polish and refactoring, this will be proposed as a test262 PR to hopefully consolidate “throws” tests into one or few per top-level algorithm
* …but it will be necessary to ensure that failures are comprehensible and easily map to specific use

### Conclusion

* Further progress will take the form of a test262 PR

## TypedArray concat

Presenter: James M Snell (JSL)

* [proposal](https://github.com/tc39/proposal-typedarray-concat)
* [slides](https://github.com/tc39/proposal-typedarray-concat/blob/tc39-plenary-march-2026/slides-export.pdf)

JSL: I will say I'm going to hold off asking you know, just not I'm not asking for stage advance. This is really just some clarification to continue on some part of the conversation we didn't get to the other day.

JSL: There is still a question of the naming. Of it, whether concat is something we can use or not. Right now I'm actually leaning towards from list instead. But I'm definitely open for, fo, for other suggestions. The biggest issue that we did not get to the other day was settling on the iterable conversation. And here I can let me bump up the size of this a little bit more so it's a little easier to read. There are some complexities here. So obviously if we pass in an iterable that can mutate whatever state of, of the of the other things that we're passing in, for instance, if somebody did a silly thing of transferring Uint8 on you know, the underlying ArrayBuffer. Within the iterator obviously we're changing the state. So we end up having to consume the full iterator before we actually do anything else with it. There's one. The other part of it is the thing yielding incompatible types. We end up having to consume it for there's questions of if it's a different type do we coerce or throw, right? So for concatting a Uint8Array, and we get a number like 6.1. Or if it yields a string that can be coerced to a number, are we going to coerce that? So I think that th-there's a number of complexities here for iterable that we need to understand if it's worth it.

JSL: Now the existing use cases you know, li-like with nodes buffer, with concat, it just accepts a buffer or Uint8 array. We don't deal with these. So in terms of the ecosystem use cases that exist today, we don't have this problem. And so we're inventing new capability here. That we need to figure out how to deal with this. Now, personally, I would just say just not do iterables, but there seems to be you know, th-th-there's an argument being made that it's more ergonomic that if we if we allow the iterables to be used. So the, the key initial question is there a strong enough sense in the committee that we need to support iterables? That's the first question. And that's, that's an open question to any, you know.

RPR: Yeah. That's o-open to the queue right now.

JSL: Yeah. Okay. While people are thinking about that… okay. MF.

MF: Yeah. Would this be precedent-setting for other TypedArray helpers? Like are we going to use this to justify how the findWithin-like operand would work and stuff?

JSL: It could be. Yeah. Find within, I think there's, there's, there's definitely overlaps here.

MF: I wasn't looking for a “could be”. Like, I feel like that's a yes or no.

JSL: It's not until I think that the concerns here are a little more fixed. Like, like with this particular case, kind of the main thing that we really need to know, is the length of the thing and whether the types are compatible. That is less relevant for something like FindWithin. So I think the answer is yes, if we end up going with this. I mean, that you know, but yes, to various degrees.

JSL: Now, while it looks like folks are thinking about it, the other possible approach we can take here is to just say we're not going to accept iterables, but maybe we'll accept array-likes. Right? And from what I've seen, of the use cases that have been suggested, that actually meets the majority of the use case. Which is more meeting this pattern here where you want to concat a TypedArray and then you pass in an array of elements. Array-like might actually fit the need better than just iterables in general.

JSL: So again, you know, right now, like I said, I'm not asking for stage advancement here. This is really just a feel of the room, you know, getting a general sense of what direction y'all think this should go. I-if someone feels strongly that iterables have to be supported, okay, but if array-like is enough, then it's, it's, it-it's, it constrains the problem much, much more. RGN.

RGN: Yeah. I definitely have the opposite feeling of that hypothetical. Iterables don't seem good here. It seems like complexity with little benefit. On array-like, fine. Sure. But I actually would want to be careful about a wrongly-typed TypedArray. Like if I end up searching a Uint8 array for a Uint16 array input, it'd probably be better to throw an error in that case than to try and munge it into some shape that could be used. But like a generic array, a generic array-like of something that gets converted into the proper typed array, that seems convenient and helpful. But fundamentally with respect to iterables, I, I would prefer not to have them.

JSL: Okay. Thank you. PHE.

PHE: Oh, yeah. Sorry. I got auto-corrected in my comment. It seems like this is all about sort of convenience. And, it doesn't really seem necessary. They're the tools already in the language in the APIs. To do these sorts of things with, with, and let us keep the, the concat API really straightforward. And that seems like, enough here. I mean, people who are dealing with, I deal with Uint8 arrays and binary data all the time. And, iterables never come up. So, then and even arrays, we can just use Uint8 arrayOf, so there's not like a super strong reason here to make this more complicated by, by supporting more types of inputs. Tha-that's my perspective coming from the embedded universe anyway.

JSL: Cool. Thank you. KM.

KM: I don't know if this is entirely related, but to the extent that we support iterables and array likes, I do not want to support `Symbol.IsConcatSpreadable`. That's like the bane of my existence. That was like the first six months of my job was implementing that feature. It was an enormous pain. For performance. So whatever we choose, I would like us to not support that. That is my only request.

JSL: I agree. Cool. And MF.

MF: So, so the question here seems to be phrased as like, do we want iterables or not, assuming that array-likes would be accepted. And I feel I mean, PHE kinda said, said the similar thing. Like, both of those are only being considered for convenience. So I see that a reason for including both of them is convenience. But a reason against including them is that the contents of them have this like auto-conversion to the TypedArray type and seeing you know, concat with, you know, numbers that wouldn't fit in that TypedArray type would be like a confusing way to write that thing. Whereas if you just like had the manual conversion to the TypedArray type included there, that would trigger that in your head that like, oh, yeah, there's this like, modular arithmetic going on or whatever. So, I think if I didn't support iterables, I also wouldn't support array-likes here. I'm not actually—I don't care which side of that we end up on, but I would say that it probably should be the same because we have the same reason to make that decision.

JSL: And I absolutely agree. The first version of this just supported, the TypedArrays and ArrayBuffer. The only reason this w you know, the iterables were added here was through d because of conversation following the initial presentation in, in November. None of the ecosystem use cases of this support anything other than the TypedArray.

\[transcript stopped\]

JSL: user-code side effects and any kinds of things. So I would definitely prefer that we keep it much simpler.

MF: Okay. Then you've convinced me. Like, both those seem like much stronger arguments than anything I've heard for the other way.

JSL: Okay. OFR?

OFR: Since you mentioned this, the detaching problem before, I think that can still happen if it's just an array. So you can just have an accessor on one of the properties and then that one can still detach the array. So.

JSL: Yeah.

OFR: So, I mean, we like, from a convenience point of view, we maybe eliminated a few, complicated cases. But from a spec and implementation point of view, it's almost the same.

JSL: And KM?

KM: Maybe this was discussed and I missed it. But if we did support iterables, would we be having, like, a check that the thing is a typed array at the beginning and then not running the iterator protocol for those ones? Or is the spec to would it just assume it's iterable and run the typed array through its iteration protocol?

JSL: No. The it's currently written that it checks, and and and and forks in it. It's yeah.

KM: Okay.

JSL: But I would really love to get rid of that other one. I can just have it be a TypedArray. Cool. Okay. So unless anyone jumps up and down and throws something at me and says, "No, iterables and array likes have to be supported," I'm going to rip that out of this and then bring this back in May and by that time, probably be ready to ask for 2.7 or higher. So okay. Cool. Thank you.

### Speaker's Summary of Key Points

* Getting temperature of the room on support of Iterables in the concat api
* Will be deferring stage advancement ask to may

### Conclusion

* No iterables
* Renaming the function from concat

## Amsterdam: Rust/JS meetup

Presenter: Shane Carr (SFC)

* no proposal
* no slides

RPR: Okay. Thank you, JSL. So we're slightly ahead of schedule for the break. Given that we've got seven minutes remaining, I wonder SFC, did you want to talk about your Rust meetup?

SFC: So it turns out that in the week that we're in Amsterdam in May is the same week that the Rust core maintainers are having their annual all-hands meeting. Also, in the Netherlands, it's in Utrecht. And it's in coordination with the Rust Week conference. I know that in the past, I remember at least once or twice, when we've been co-located with, like, other language maintainers like CSS and others, where we've sort of had, like, meet-and-greets. And given this opportunity, I wanted to survey it or see if there's people who are interested in such a meetup. I have some contacts with the Rust Week maintainers and and and such. And could possibly help coordinate such a meetup. It could take a couple of formats. One possible format is it could be, like, a social happy hour, in one of the evenings. Another format is they the, the Rust team has an all-hands meeting on, it's like a three-day meeting at this venue in Utrecht, Thursday, Friday, Saturday. So possibly Friday or Saturday, we could maybe have, like, a breakout session focused on, like, JS and Rust. What we can learn from each other. That would be more of, like, a, academic, like, meeting-type more more like this format. If we did, like, a more informal social, we could have, like, lightning talks, from both groups. And, that could be in Amsterdam or Utrecht or somewhere in between. They're, like, half an hour apart, on on the train. So I wanted to see if this was interesting to folks. Obviously, I'd want to make sure that it fits in with the rest of the TC39 programming, like the task groups that we have scheduled. And, w+what are some of the goals you would want of a meetup? Like, do you think that this would be productive and fruitful for us? to have this level of coordination? And what are some things that people would want to see, out of that out of out of this?

RPR: MF?

MF: I just I would like to register my interest. I think this is interesting. I just wanted to make sure that we are going to be able to avoid conflict with the TG5 meeting, which is on the 22nd. I believe that's the Friday. Or is it the case that you're considering a conflicting date?

SFC: Okay. I'll I would I would like I mean, obviously, I would like to avoid a conflicting date and, that's why I think that a social in the evening would probably be more likely to fit in both schedules, given that we have the TG5 scheduled already on Friday. .

MF: Also note that it's at TU Delft, which is in Delft. So, like, I don't know how far away these are. But we would have to make sure it's possible to actually do these.

SFC: Yes. That I would not want to make a conflict with anything that we have already programmed. So, like, if we did do it on Friday, I would try to figure out if there's a way to if it's possible to fit them both in on Friday if it were on Friday. My the Rust all-hands is Thursday, Friday, Saturday. So, like, we could possibly get it on Saturday. My worry there is just that, like, everyone in TC39 is going to be gone and we wouldn't have anyone from TC39 actually show up. So that's why, like, it seems like putting it on either one of the evenings or on Friday sometime would be more likely to get turnout. I see MF nodding, which probably acknowledges that if we were to have it on Saturday, I I don't know if people would come. .

RPR: So, whatever candidate you select, we can add this to the interest survey that we already have 'cause we know that the people that are already looking like they're going to come. So we can, you you can solicit more from that. And I I think also posting this as a a an i an issue on the reflector will also help raise awareness.

SFC: All right. I'm also interested in, like, what are some of the outcomes? 'Cause, like, I'm happy to put this together, but also, like, I only want to do it if, like, if there's sufficient interest from this group. If it's just if it's going to be me and MF and, like, you know, like, four people, then that's that's that's fine. But then if it but if if, that might be a different type of format of event, then, like, if if we would want to have, like, lightning talks in, like, a more bigger thing, so I'm interested in if there's anyone else you you can also come talk to me during the break. Anytime today to, brainstorm about this.

RPR: Okay. Thank you, Shane. Sounds like we're going to have a very action-packed week. Because we have TG4, the source maps on the Monday. The meeting, I think there's also a meetup during the week in the evening. And then TG5 on Friday.

SFC: Yeah. So it'll be a very action-packed week. All right. Come talk to me, about this, during the break. And if anyone on the call, you know how to con you know how to send feedback. So please, do so. Thank you.

RPR: All right. Thank you, Shane. So it's time for our break. So we're breaking for 15 minutes. We shall resume at 11:45.

## Tree-shakeable methods

Presenter: Evan B. Winslow (EBW)

* (no proposal/PR/link)
* [slides](https://docs.google.com/presentation/d/1zy10o54PMuh2c9Liz6RH5R3bnBpe-3-sy0uEXbACzjQ/edit?usp=sharing)

EBW: Tree Shakeable Methods for a faster web. My name's Evan. I've been trying to meet everybody. If I haven't gotten to you, it's not because I'm avoiding you or something. Please talk to me. I'm sorry I can't meet all of you on the call. But I figured I'd at least try to show my face here, so yeah, let's get started. I want to talk about Dead Code. And sort of my goals for this talk and discussion are to zoom out and get a bigger picture view of the problem of Dead Code, more broadly, particularly on the web, in browsers, like Dead Code that we're shipping to end users, in web browsers. And, try to put some kind of number on that. And then for the second part, we'll zoom in on a subset of that problem, and that's the methods part. And then, talk about practical ways that TC39 can help or why I think TC39 is well positioned to help, but one non-goal I have is to bikeshed some concrete syntax, I'm really just trying to focus on the problem space and if we all think this is worth solving, then I'll come back. But, if you don't think it's worth solving, then I'll just save everyone the time.

EBW: Let's dive right in. So how big of a problem is dead JS on the web? And I did a little napkin math. For any number like this, there's asterisks, right? So, plenty of caveats we can talk about. But I think there's on the order of tens of thousands of years of human life wasted every year waiting for dead JavaScript to download. I have the basic math under there, and I can share more where these numbers come from over the next few slides. But basically people use the web a lot. The slowest 25% of bandwidth globally is much, much lower than maybe we are used to. And this adds up to a lot of time. When you multiply by trillions this is really bad. I would also say I do think this is a conservative number. And I can talk about reasons why that is, but I think the biggest reason for me is, the bandwidth number is optimistic. I think, because when you measure percentiles of bandwidth, you are heavily weighting in favor of faster users because they use the web a lot more often. And so they push the speed distribution up, right? If we sort of flatten this out and made it equal, every user across the globe gets an equal weight, this would strongly push the bandwidth number down and make it worse. So that, that to me is the biggest thing. But I have others, and I welcome questions about that. Let's see.

EBW: Speaking of the bandwidth, I have a general experience of over time hardware gets better, right? I think this is basically not the case for users globally. In 2025, bandwidth was 9 megabits per second at P25. And it has gone down according to this graph recently. So far from a Moore's Law type of effect where the hardware people just save us eventually, it could be the case that this is just getting worse, right? And, if that is very unintuitive, I think it's important to remember that there's billions of people that don't use the web yet and aren't connected to the internet. Like, the world is a really big place. And that just adds up, right? So when in my research, what I see is, a lot of hardware gets cheaper over time. So that more people can buy the low-end hardware. And that is how they come online and get connected. But the absolute power of the hardware is just not going up. Over time, certainly not quickly. And according to this graph, which I'm still not sure I entirely believe, but this is from Cloudflare. It seemed like a good dataset to me. It could be getting worse. In terms of the distribution. Can I pause here and see if there is anything in the queue?

RPR: Nothing in the queue.

EBW: Okay. So I'll just keep going, but feel free to stop me between slides or something. Okay. Oh, I have in my notes here to drive home the point about eight megabits per second is actually probably fast. If you think about a country like Nigeria, which has 200 million people in it, their P25 is three megabits per second. So that gives you a sense of lots and lots and lots of people don't have good internet, basically.

EBW: Despite flat or even declining bandwidth, the amount of JavaScript being shipped to users year over year just continues to climb on the top certainly on the top million sites, but it doesn't seem to matter what slice of sites I look at. This is the trend. These numbers are in the kilobytes of transfer size. So this is after GZIP, if they're even doing compression. Of the top million sites over the past five years. The way to read this is that the red line is P90. So the 10% of the top million sites had more than three megabytes of JavaScript and JSON on the wire. Which implies something like 10 megabytes or more if they were compressing that. Because GZIP is awesome and Brotli is awesomer, and everyone should totally do it, but also it can only do so much, right? Eight megabits per second is one megabyte per second. So that's three seconds just waiting for the JavaScript to download. And we haven't gotten to parsing, execution, et cetera.

EBW: Also, this is only the JavaScript, right? But people go to websites for images and CSS, and the HTML, and those are big too. So all this adds up. And there's a lot of contention when you visit a site because all these requests happen at once, right? So you're not getting your eight megabits per second dedicated to the JavaScript; it's shared with all the other resources that the page is trying to download. So it's growing. Also, AI is a thing and it writes a lot of code really fast. And I'm really nervous about how much code it's going to write and continue ballooning this number. I see every reason to believe this number will keep going up unless something changes. I think I said earlier something about execution. This doesn't count that, but the P90 for execution time for scripts on a page is something like 25 seconds, which to me is not “oops, my site was slow”. That's broken. I'm going somewhere else. Like, people cannot use the web at that kind of speed and experience. So, this is really adding up and hurting people, in my opinion.

SFC: I was just wondering, on that graph slide, what's that almost 20%, 30% bump in 2024?

EBW: Oh, yes. This is HTTP archive data, and I did not investigate that particular spike. So I don't have an answer for you. Sorry.

EBW: I mentioned earlier that I think, 0.5 if we go back to this slide. So it says here 0.5 megabytes per view is dead code. And that comes from, basically a the data that I have managed to cobble together that is, is indicating to me 60 to 80% of JavaScript on any given page is likely to be dead, at least at page load. So this particular, coverage trace is from a run I did on the mobile-specific view of a top 50 site this is I, turned on slow network, disabled caching, turned on coverage, reloaded the page, and waited until all the main content had loaded. So, like, the images, basically trying to get get LCP. And this is, like, the state of the JavaScript at that point. so I interpret this as, like, this is the dead JavaScript that was competing for bandwidth with the main content of the page. And this I will note that this is even the case when scripts are loaded async. Because async doesn't block render, but it still, like, taking up network space. So it can cause congestion by competing with CSS, and CSS does block render, so it it's even though it doesn’t async JavaScript doesn’t technically block render, for someone on a congested network, it can have the same effect. And then, of course, there's the CPU and memory usage as it streams in. 60 to 80% is just, like, very typical. This is not, like, some special thing that I pulled out of, my list, right? This has been confirmed to me by talking with MHA, from the V8 team. And I researched some academic studies that also confirmed numbers like this. And just in my own experience, like, poking through the top sites, I, I keep running into this, like, level of dead code. Okay.

PFC: Do you have a sense of how much of this dead code is stuff like polyfills or features that many browsers have natively?

EBW: Yes.

PFC: Like, it wouldn't be dead if it was loaded on an older browser?

EBW: Correct. Yes. So that is very common. I don't have numbers for you on how much of the bundle is that source. But, like, I spent way too much time looking at built code that was getting shipped to the browser and, like, what is this doing? And yes, polyfills, like, I was getting polyfills in Chrome a lot, right? This is just, like, these are not needed please stop shipping them to Chrome. But, there are reasons people do this, right? So, yes.

DRR: Quick question. Would you prefer questions coming in on a rolling basis or till the end?

EBW: Yeah. I think that's fine. If I need to get through something or if I'm about to answer it, I'll just defer. ACE says plus one on diving deeper.

ACE: Plus one to kind of, what PFC was saying. Maybe this is almost like a university-level bit of research, but I would be fascinated in a breakdown of out of that dead code, how much of it was error handling in that it kind of it has to be there because there could have been errors.

EBW: Mm-hmm.

ACE: Polyfills versus, like, a locale, I think that would be fascinating research. I'm not saying you have to do that. And I'm also not volunteering to do that, but I'd love to read it.

JHD: Yeah. Just, I'm sure that many polyfills that are shipped aren't needed. But, just because a browser ships a feature doesn't mean it does it correctly. And many polyfills feature detect the bugs and patch them. So it is, and although it would be ideal to only ship poly polyfill to the browsers that do need it, it would be it's exceedingly impractical, for most, like, web a web, web authors to, have that sort of refinement. But I would love to see what the number is if you ignore polyfills and I assume the problem will still be large. But, clarifying that would be helpful because I think if we just tell people to stop shipping polyfills, then their apps could break and almost certainly will. In surprising ways.

EBW: Yes. Don't.

JHD: Separately, we've come up with a good way to solve that problem. Where we only ship the right thing. That's the best possible outcome.

EBW: Yeah.

JHD: I just haven't come up with one myself.

EBW: Yeah. I was going to say, don't break the web as the one thing maybe I put above. Like, please make your site faster.

AKI: So this is kind of possibly veering off, into not relevant, so please stop me if it is. You know, thinking about sort of the people who are most likely to have slow internet, are relatively aligned with the people who are likely to have either slower or older devices.

EBW: Mm-hmm.

AKI: And I know that, obviously, browsers update themselves now generally, or, people on their app stores are much better at updating their apps than they were years ago. But those polyfills that are taking up more time for people with slower internet are they also necessary?

EBW: Yep. Yep. That's a great question. I think it just needs more investigation. I don't have an answer today, so. Yeah. Sounds like SFC's topic is for later, so I'm going to keep going. The natural next question that I consistently get when I talk about this with folks is maybe it's just the event handlers and we can't not ship those, right? And apparently, it's not. The academic study I looked at wrote some crawler that basically clicks all the things on the page and found this number held after that. I tried, in my own experience, to load the code and try to trigger click handlers, and it takes a while to make any noticeable difference in the amount that is getting used. I will also say, executed code does not necessarily mean useful code. That could effectively be dead as well because it's not providing the user any value. But that's harder to tell, you really have to look at it and understand the program to be able to make that call rather than just it was never executed, it definitely hasn't provided the user value yet. So, even after interaction, this number remains very high. I was finding 60% very common. For the math on the 40,000-year slide, I chose to use 50 as a fudge kind of number.

RBR: All right. So of those 60%, is it also JavaScript that is for advertisement placement? Because I know that years back, this was not so much the case. Now, everything is loading advertisements everywhere.

EBW: Yeah. I think so again, I can give you my anecdotal experience. Take that for what it's worth. The advertisement placement, tags on your site, seem to have the same problem. They don't particularly move this number dramatically one way or the other, but they do just increase the amount of JavaScript that's loaded, right? So if we have a 60 to 80 percent dead, that pretty much seems to hold for the ads. And, the ads are more JavaScript. So yeah, it just adds to the absolute amount of dead JS on the page.

JHD: Yeah. So it's a common practice to put the entire website's code in one bundle and it's not actually needed on any arbitrary page.

EBW: Yeah.

JHD: And so did this study actually navigate through the whole site as well and determine after navigation and interaction? What was unused? 'Cause that seems more realistic.

EBW: Yeah. That's a good question. The way it worked was it sort of instrumented the code and then made sure it got behind all the dropdown menus and clicked on every link it could. I can't remember for sure about that particular question.

JHD: Yeah. It seems like to do this properly, you'd need essentially code coverage metrics. You know, the standard statements and branches and functions and stuff. And basically do that for the entire website. On every page. And then look at the combined results to determine what was uncovered.

EBW: Yeah. The branch-level coverage comment is interesting too because every study I've seen so far only does function-level coverage. So you could actually have an executed function that also has dead branches, but those were counted as live because they only measured the (?).

JHD: Well, yeah. And there's actually four metrics that everything in the except Chrome's own test coverage thing supports, which only supports three. And I think it's useful to check all four.

EBW: So my takeaway from all this is, the world's a big place. We have a lot of users. End users of JavaScript. Let's keep everyone in mind when we're designing. There's billions of people. That adds up quick. So we've spent some time talking about dead code and the problems I'm going to talk about methods next. I just want to acknowledge this is more than methods. I'm not saying methods are the only source or something. And there are many things that could be done outside of TC39. But I'm here talking about what I think TC39 specifically can do. So in the data that I gathered, it appears to me that 35% of the dead code on top pages lives directly within a function that is very method-like. And method-like means uses object literal method syntax or uses class syntax. Or uses the this keyword in a way that is not just referring to the global object.

EBW: So I ran this on Google Search. And found that 100% of code is in methods. I was like “no, that is not a thing”. And the reason it was getting that was because they have this practice of whatever the compiler is outputting was adding this at just the very top level of the script to refer to the global object. I say that doesn't count. But otherwise, I counted it as methods. And if you want the full breakdown of the data, you can look in the speaker notes. Actually, a lot of references and more data is in speaker notes. So if you haven't seen those, please do. And I guess the callout subtitle here is this does not include dead code that was retained in other functions that are not methods. But referenced from within the method. So I yes. I guess just noting the caveats, on the numbers that I'm sharing here.

EBW: Okay. What's the deal with methods? Why am I focused on methods? And basically, the summary is tree-shaking methods is hard. Here is an example of what happens when you try to tree-shake this, most tree-shaking just happens on the import graph. So bundlers that are broadly available and broadly used in the ecosystem do not try to introspect the content of methods to see what else they might reference. They just focus on the import graph. And so when you have something like this, the bundler basically cannot tell. Like, is M2 used ever? I don't know. Maybe M1 calls it or maybe there's some reflection thing. I can't tell. So I'm just going to keep it all. And this, as I was saying before, this becomes even more of a problem if the class is not small. If each method has disjoint dependencies that reach out to other modules to pull that code in. All of that code also gets retained as well. So this problem of dead code can be very viral, right? If something is sticky, then all its dependencies get stuck as well. And that's why it's making it really reliable to tree-shake can be super valuable.

EBW: I have a note in here also about even if the program actually does need M2 at some point, it cannot code-split that, right? Just because of the semantics of how these things are glued together. So class methods interfere with lazy loading and code-splitting as well. Even if the code could eventually be used in some case, it's not needed right now. And that could be a possibility for an optimization lost because of the way the code is written. So bundlers have open issues that are a decade old to tree-shake class methods. And they have said no. Consistently. Like, we can't do that safely. Why is that the case? I give three examples here of things that make it hard to tell what code is still alive or not. The first one is polymorphism. So if you have the method M on an object we don't know what class was used to instantiate that object. Because no bundler widely used and available today uses the type system. So we basically have to retain at least all methods named M regardless where they come from. It gets even worse if you do something like computed property. 'Cause then we don't even know what M evaluates to. So we just have to retain all methods everywhere because we might call a thing if a computed string turns out to evaluate to that method name. And then yeah, reflection is another way that you can just get references to methods that makes it fundamentally not safe to to delete methods off of class instances or or objects.

EBW: So maybe we should just make the bundlers smarter, right? That would be nice. Then people don't have to change their code. And the web can just get faster, right? No. Wrong. This is also really hard. Google's closure compiler is the only bundler I know of that even attempts to detect dead methods and remove them. And it does so at a very high cost to Google and to its engineers. So basically, as a company, we have been willing to say you need to follow these rules and if you don't, the bundler will break you and it's your responsibility to fix it. That is not a position bundlers more broadly have been willing to take. Because again, don't break the web, right? It's very confusing and costly to have everything work in development. Everything works when I run my tests. Oops, I shipped to production and broke my site. That's painful. And we feel that as well. Also, some of the optimizations in closure compiler are based on its own unique nominal type system, which is not TypeScript. TypeScript is generally a structurally typed type system. And so that doesn't provide the same level of disambiguation opportunity to tell which M method am I talking about. When we import we call it third-party code, external code written outside of Google, we generally have to just disable the closure compiler on that code. So we can't optimize it. Because otherwise it would just break too much stuff.

EBW: This has also been available for a long time. But it's admittedly hard to get to the advanced optimizations. And people haven't chosen to do that. I think the bottom line here that I'd like to drive home is in order to get the advanced optimizations that closure compiler offers, you do have to change how you write code. So this is not a for-free type of a solution. And I figure if people have to change code anyways, why not provide them a way that's more reliable to tree-shake once they've changed it rather than “oops, now one of my callers broke the rules and my library's not tree-shakable anymore”. Because all the callers of the library have to follow the rules, not just the library itself. I have more in here, but I think that will do it.

EBW: So methods are really common. People like them. But why do they do that given the costs to end users? And I think it's ergonomics. It's very convenient to write code this way. And autocomplete and method chaining are very compelling developer experience-wise. So you know, I think devs would like to not ship dead code to their users, but there's just a lot of friction and they have their own concerns and pressures that they have to deal with. So it's very convenient to write code this way.

EBW: How can TC39 help? I think we should treat dead code in general as a language design problem. Like, do the features that we are thinking about and and the proposals we're considering hinder the fight against dead code or do they exacerbate the problem further? I would love to ship a syntax that makes methods reliably tree-shakable. That would make a huge dent in this problem, I think, for us. And then I think it's the key with shipping a syntax here is that in order to get impact for end users, we need to convince like, current devs who use methods or would otherwise use methods to, like, use the new syntax instead. So it has to appeal to them. So the the goal is to help the end user, but in order to do that, devs need to write code differently. And it would be great to make that as appealing as possible. So I came up with some quality attributes that I think should be true of any, like, syntax that we explore in this space. Reliably tree-shakable, that's like, table stakes, right? Otherwise, we haven't solved the problem. Number two is very familiar to method users, the phrase I've been using is, like, as pleasing to use as methods, or at least approaching that as close as possible. Can't have performance penalties and needs to be an incremental thing. Like, it it cannot be the case that I have to migrate my entire code base before I get any benefit out of it, right? So something that's very safe and backwards compatible during migration would be would be key. All right. To sum up, my thought is we could have classes, get written from something shaped generally like this, to something shaped generally like this. So that bundlers that examine the import graph can delete the things that are not used and then the web gets faster because we're not shipping as much dead code. So let's make it convenient to produce tree-shakable code. The end. Yeah.

DRR: First up on the queue, we have SFC's question on how to convince decision-makers to spend time fixing it.

SFC: I kind of also want to get to some of the more technical things on the queue, but I guess one experience I've had here is that, like, this is a super important problem and I want to make progress on this problem. But then, unless I can show my VPs that, like, I reduced the download size of Google Photos by 20% and now we have, like, 10% more daily active users, it's really hard for me to motivate this. Yeah. I was wondering generally how do we get leadership to agree to this problem? Because, like, it makes the web faster, but, like, how do we motivate that we should be spending time on solving it?

EBW: I don't have a ton of experience motivating leadership outside of exactly the kind of thing you just said. Like, if we do this, we'll cut this many bytes and that'll increase revenue or whatever. I know for Google Search, I can't share numbers 'cause it's not internal. But sub-millisecond improvements count as really valuable, right? So find the leverage points where you can get, like, the highest ROI and hammer on that and demonstrate the benefit. I think that is the goal, right? I don't know any other path than that.

KM: I certainly it's on the same topic, but I don't you know, I don't work at on actual websites. I write the work work on the browser. But my impression was that the actual costs of, like, networking bytes at the CDN layer and all these other places are a significant cost for most web servers. And lowering those costs in a meaningful way. Yeah. Would be something very valuable. Beyond just usage metrics improvements, it would also be data center costs that you're saving.

EBW: Yes. The CPU of just bundling and shipping that from the CDNs is itself a cost, a very measurable, at least for us. I have definitely seen big projects that took a long time to make that number go down and were highly celebrated. So yes, that is a relevant cost. I just hadn't talked about it today, but it's worth considering.

DRR: We've got MM on the queue.

MM: Yeah. So you mentioned 35% of something is methods. But I just want to first first clarify, is that 35% of dead code, not 35% of code, correct? Yes. 35% of the dead code. Okay. On the sites where I measured it was in methods. Yeah. Do you have a sense of the for the remaining 65% do you have a sense of what kind of code that is? You know, what the breakdown of that?

EBW: Yeah. So I have a very coarse-grained breakdown. But basically, it's functions that are not methods is a huge chunk. And then things at the top level of the program. I'm not creative enough to come up with any other place dead code for come from. I think, like, top-level, functions, and methods about covers it. But yeah, that was how I broke it down.

MM: So between those two, the functions and the top-level of the program. Any idea the breakdown between those two?

EBW: I got numbers like 20% top-level and the rest functions not methods.

MM: Wow. Yeah. Okay. The reason I'm asking is I find it much more plausible to work on ways to safely shake the top-level rather than shaking methods for the reasons that you raised. I mean, you explained well. The reasons why it's hard to shake methods and get away with it. but I think that the and and bundlers do shake the top-level, but they don't do it safely. Okay. That's it. Cool.

DRR: We have a reply from SHS. I think this is about closure compilation. That unexpected optimization back off also happens a lot within Google. And that was the end of the message.

EBW: Good call out. So yes. I think I forgot to say that, but closure compiler is far from perfect and lots of new patterns are causing back off and the ability of it to to trim these methods. So the problem is getting worse for us over time rather than better.

SFC: I was just wondering, in your experience, it seems like one of the reasons why methods are hard to tree shake is 'cause, like, you could call them indirectly in a whole bunch of ways?

EBW: Yep.

SFC: And I was wondering, do you feel like using more Symbol methods makes methods easier to tree shake? Because if you can find that the Symbol is not referenced anywhere, then the method is not referenced anywhere. And in that, if that's the case, then do you feel that that would help motivate the protocols proposal?

EBW: Anything that helps move the problem in the right direction is great. Let's see. Symbol methods I think really seem like they should be a solution, but you can still reflect on the Symbol properties of a class. So it’s a matter of how risky do you want your bundler to be? And, like, at Google, we've dialed that up, like, as high as we possibly can. Like, we're willing to break things. In order to get lower code. And that would be a matter of, like, is this enough? I think symbols still would suffer from the polymorphism problem. So if you use a Symbol property on an object, like, some other object could have this Symbol property. And that code would have to be retained as well. So it would have to be, like, no code in my entire tree uses this Symbol, and then I can delete all the methods associated with that Symbol. Like, maybe as long as we ban reflection also.

SHS: So for what it's worth, I mean, Google's advanced optimizations, we still consider symbols to be a re form of reflection. Property. It may be possible if you say, like, the Symbol itself is, like, deleted, so you can't ever access it. Property in the first place. You could optimize it, but other than that, t's not helpful. At least in our way we frame it.

CZW: Yeah. I think it was mentioned that reflection would make the minification impossible. And especially if for approaches like protocol, if the reflection still a part of the proposal, but I think there are other proposals, like extensions and code-based proposals in TC39 that could not attach any of this message to the object itself so that this method has to be referenced explicitly. And then be invoked on an object. And I think another issue here is that do we want to convince people to write code using a class style or a function style? And one reason for a class style was that people can organize logic in a consolidated way. And they don't have to put functions scattered everywhere. And so even for extensions or code-based proposals, I think in order to adapting this problem space, they will have to also address that. How can we not push people away from, like, organizing their codes in a unified single place? So that even if they are writing their code in the new extension or code-based style, they can still organize their business logic like they used to they used can be done in the class style.

EBW: Is there a question or anything you want me to respond to that about? Otherwise, like, happy to just have that on.

CZW: I think what I said was replying to the previous topic.

JSC: So as one of the co-champions of the pipe operator languishing in limbo for more than a decade, I wanted to also ask about what if we made if we made tree shake-ability or dead code elimination a language-level priority, then would things like the pipe operator and also other proposals, like the just-mentioned extensions, call-this, etc.…Would the pipe operator, which is a function of more function function thing rather than a method thing, also nudge the ecosystem more towards less dead code? Because obviously standalone functions are a lot easier to tree shake. I just saw SHS on Matrix saying that there was a conversation at the January plenary in which the pipe operator helping with tree shaking came up in the conversation. And SHS was saying that as someone who owns an optimizer—I think he was talking about Closure Compiler—he has a vested interest in moving people away from prototype methods and towards standalone functions. And so that kind of thing and he was talking about apparently there was a conversation in January about kickstarting the pipe operator again.

JSC: And so I'm asking here, how do you see the pipe operator fitting into this? And it's also that problem we've been wrangling with over the years. Should there be more than one way to do it? Like, per TIMTOWDI, that we encourage developers to do **any** of the following: prototype methods, function functions, and, with the extensions proposal, `this`-based functions. All of those if there are more if we add stuff to the language that encourage tree shake-ability, should there be one-way encouraged or multiple ways encouraged, like pipe and, like, obviously these are all already in the language. `this`-based functions and prototype methods and standalone functions are all not going away. But as far as prioritizing making a language priority to reduce dead code and adding syntax to try to ameliorate and mitigate dead code, that kind of prep I would be interested to see how you see it and also if Steve is here, I would also be interested to hear his perspective. On that too for this big problem. And it also plugs into Jordan's topic later. So yeah, I'd be interested to hear your thoughts. And as well Steve's.

EBW: Okay. JSC, I would love to meet and talk to you about this more at the risk of totally avoiding your question to not take up the rest of the discussion time. I'm going to say the way I am thinking about existing proposals in this space is basically this slide here. So in my mind, the process would be like here's the criteria. Like, let's weigh the existing proposals against these criteria. And, like, pick the best option. At a very, like, coarse level. That's kind of how I'm thinking about it. So yes. But I would love to talk to you more about that. So please reach out to me, afterwards.

SHS: I hope that this is a motivation to sort of revive one or more of these proposals and kind of get them in earnest. They've been languishing. I'm going to jump a little bit is what I said is that, I think the excessive bike shedding which maybe is an indication that this isn't a priority. That if it was if people cared enough about this topic, we could maybe get past some of the bike shedding. And that's kind of what I'm hoping that maybe this is a call to to action for.

DRR: We also have JHX on the queue. I noticed you're in a message before, but it says, "Unfortunately, hack style pipe have very different code style compared with methods.”

MM: I'm wondering if the important issue is shakeable versus postponable. Right now, you can write methods of the form async foo and then beginning the function body with a simple await. So that all of the code in the function happens after that first await. Now let's say we had a way to say that that await doesn’t mean postpone according to the deterministic postponent logic of the language, but just postpone to some future time. What that would mean is that the code of the rest you know, that given a you know, sufficiently fancy bundler, which which is, you know, a a itself a a weird assumption, but one could imagine that code written that way with that you know, that that indefinitely postponable semantics for await that the rest of the function could not be part of the initial bundle, but be something that could be loaded lazily afterwards. And that means that you're not paying for methods that you don't use but the methods are still there in the class so they show up in all the reflection, etc. And the semantics is just very, very close to the semantics of the language that you can express today.

EBW: So this is a very interesting idea. I had not considered it before. Would love to talk more about it. But want to leave time for others as well to comment.

MM: Okay.

KM: We chatted about this a little bit at dinner yesterday. So I guess I wanted to repeat that here. Committee. I could imagine proposals or new syntax in this space where just trying to be very vague and hand-wave because I don't want to tie anything down. I'm going to be quick. But, like, where somehow you can bind identifiers basically as a Symbol to some like very static analysis amenable syntax and then you you can use those identifiers and basically the same way that you use them today but you know it allows both hopefully engines on the browser itself so it's actually faster and like bundlers to to to know that the to disambiguate between these different properties effectively at compile time. Maybe with some slight optimizations and things like this. There probably are many people who would not want to write their code in an entirely different paradigm. And they've already been writing it for a long time. And so that might help also those kinds of proposals might help with adoption at a wider scale.

EBW: Like an unambiguous reference to a particular block of code. Which then like if I don't use that I can just get rid of that code. Is like on track with what needs to happen here.

JHD: Yeah. If one of the advantages of implementing you know, improving bundlers is that users don't have to know about it or change anything. Obviously not everyone uses a bundler. Not everyone likes using a bundler, etc. And there's many bundlers. But so there's lots of issues with that approach. But what you described really just sounds like functions to me. And as others have mentioned with almost any combination of call this pipeline extension methods and any proposals in that space. It becomes more ergonomic because you get fluent chaining. To just use standalone functions. And if we have to teach users something instead of new syntax to specifically target this problem, maybe we just teach them what has generally become a better coding paradigm in the ecosystem. Meaning don't do classes with methods.

EBW: It sounds like you're saying you'd be okay with just introducing a syntax for call sites but not anything new for the authoring site.

JHD: Yes. I'm saying that we should make non-class usage more ergonomic. And then the place where we teach people should be where people are already being pushed which is do classes less.

EBW: So that that kind of an idea is exactly the kind of thing that fits in the shape of like do these you know, take that idea, evaluate against a criteria like see what pops out the other side. Type of process. Yeah. That is in the design space here.

DRR: We've got we're going to wrap it up really quickly. PFC.

PFC: I want to be a bit skeptical about your number four up here. Incrementally adoptable. Some of the skepticism I've had in the past about the call-this proposal and stuff like that is that you'll have dependencies that use it and dependencies that don't use it. And you'll have to mix the two and you know, maybe you get pipeline in there as well and you'll have three programming styles. And I'm going to go out on a limb and say probably 90% of working JavaScript developers don't understand how `this` works in method calls at all. And don't care. Don't have to care. Teaching somebody, "well, in this piece of code you have to use double colon and in this piece of code you have to use a period"? Not going to happen. I think that's a social problem and seems to me the technical problem of building a smarter bundler no, matter how hard that is, it's still easier than solving a giant social problem that affects the whole industry. I'd love to talk more about this but I don't want to take more time.

EBW: Yeah. It sounds like what you're saying is there's something missing from this list. So I don't know that we have time now but we should totally follow up and figure out what needs to go on here. Yeah. James. Okay. All right. Have you hear me? Okay. So

SFR: Steve from Cloudflare here. First off, very spiritually aligned with the goal. Right. Like I mean, I would like to see this work. Just piggybacking off JHD. Like I have gone so far as to basically stop using classes. For a lot of reasons. But one of them is this. I've had projects where I've linted away classes. I said, you cannot use class in this project because it's not tree shakeable. And I think most people don't understand that trade-off. Like this is a thing that you know, we should contend with. Would love to see it contended with a language that would be a cool option. I have talked to the Vite team about this before. So like I'm kind of curious my actual question is how have you plugged the existing ecosystem of what people are doing here. So what comes to mind is the pure annotation. Right. So you know, you put pure in there and then it will figure out, I can probably tree shake these where I didn't know if I could work for. So they've kind of invented their own thing already. I'm curious if you've thought like well, could they invent something else?

EBW: That sounds like another thing. Totally in the design space. And to the question of sorry. To the question of like what have you done to plug into the community? Maybe I did it in the most roundabout way but like this is me hello. Part of the community. Please like plug in with me. I care about this problem deeply. Like I need your connections and like conversation. So yes.

SFR: All right. I mean, I definitely think if you engaged with even given the Vite team into one of these meetings or Evan, I mean, I don't know how much the bundler people attend TC39. But I think they would love to be involved. Right. In making this work.

DRR: I want to finish off with JGT.

JGT: Yeah. So of of the features of classes that actually produce this problem, obviously enumeration of properties would be one of them. The ability to call computed property names is another. Are there any other features besides those two that cause this?

EBW: Reflection, computed names. I think it's let's see. I can go back to the slide. So the three I guess like maybe polymorphism is just like a special case. Of this. But I think it is actually different because in the polymorphism case, that's a case where you have two classes with the same name. And so you're like not sure which one you're referring to at compile time. So you have to keep both. And then in the computed property case, you have one class with maybe many methods. And you don't know what M evaluates to. So you have to keep all the methods in that class. Are there any others? I think I don't know. I don't want to say I'm nervous to say no. Definitively. But these were the ones that I could think of.

JGT: And why I'm asking this is that it does seem if there were specific syntaxes, that we know o+on the call side side are dangerous. Right. That you could imagine a cooperative thing between libraries and bundlers and linters. That could say, okay, based on you know, we define these three things as dangerous. Your linter can find every one of them. So therefore, libraries that participate in this world and sort of going with where kind of where JHD was going before, which is we may not need new syntax for this. It might be because a bundler is required anyway. A way that you could have a bundler helping linter that would prevent people from you know, calling this and essentially be more static analysis friendly.

DRR: We gotta we gotta cut here.

### Speaker's Summary of Key Points

* Tens of thousands of years of human time are wasted annually waiting for dead JavaScript.
* We should consider tree-shake-ability in all designs for the language.
* Methods *hurt* tree-shake-ability but are very convenient/attractive.
* New syntax could help make tree-shakable coding patterns more attractive vis-a-vis methods.

### Conclusion

* Several proposals were mentioned as potentially helpful in this space: protocols, call this, pipeline, extensions, a new idea for deferring code in async functions.
* Several people indicated they are more hopeful about a linter/bundler-based solution than a syntax-based solution
* More discussion is needed to explore the design space

## TypedArray findWithin continuation

Presenter: James Snell (JSL)

* [proposal](https://github.com/tc39/proposal-typedarray-findwithin)
* [slides](https://github.com/tc39/proposal-typedarray-findwithin/blob/tc39-plenary-march-2026/slides-export.pdf)

JSL: This is just a quick continuation on findWithin. Like Concat, I'm not going to ask for a stage now. I just want to get some clarification on moving forward. I've updated it. I have a PR to remove contains like we talked about. Simplify a little bit. Just like with concat I'm going to be removing the iterable support for that following that precedent. The one open question we have is either naming of the new functions, which you know, pick a color for the bike shed. Or we could just skip adding new functions here in overload index of in last index of. Since we are removing the iterable support. There's actually no change in behavior that we have to worry about other than index of right now would be pass it a type grade or it always will return minus one. And this you know, with the overload, it will actually give you the index. So there is a change of behavior but there's no additional throws. And the likelihood that anyone is actually depending on it returning -1 in the ecosystem is quite low. But I want you know, before I go off and make this while we're here, I'd like to see the temperature of the room. Does anyone feel strongly that overloading index of and last index of is wrong approach that we need different functions here? And unless somebody feels very strongly about the naming, if we do have other functions, I'm going to pick something that's reasonable here because I mean, I think we could go around in circles debating the name. So I just want to basically just open it up for questions on that if anyone has any and I can't see the queue 'cause I accept posted.

DRR: We have KG on the queue.

KG: You said this only works if we aren't accepting arbitrary iterables. I think we could probably get away with it because the existing methods currently don't do any coercion.

RGN: I understand and appreciate this behavior change probably doesn't break any existing code viewpoint. But the history of this committee is littered with exceptions to that rule. I'm actually not as strongly positioned as I’ve seen in Matrix. But I would really like some dedicated methods. If we want to try overloading and hope to get it. But back off on encountering breakage without stalling the proposal because we have specifically subsequence oriented methods that would be a fine outcome for me. But I do think it would be a mistake to pursue only overloading.

JSL: I will note node there is precedence for this. I mentioned this in the Matrix as well. Node has shipped buffer index of for years. With the overload, and nobody's complained. It's not broken anything that we know of. So there's at least a very strong precedence already in the ecosystem for this. But well noted.

RGN: It's actually an overly strong precedent, right? Because you can specify a string in encoding.. Not just limited to you know, an element or a subsequence. Yeah. But yeah, again, I would not have the overload. But I really think we probably want a dedicated method. And if problems are encountered, we'll fall back on the dedicated method anyway.

JSL: Okay. And I will say in retrospect, if I had the opportunity to do the node thing over again, I would have pushed for a separate method there as well and not overloading it.

NRO: I think I feel similar to RGN here. I understand that this is likely very rare that people are passing like already typed arrays to index of. But at the web scale, it feels to me like an incredibly risky change to do. We probably would need some browser that already early, maybe like in stage two, is going to ship some use counters to to like see if this is doable. I understand that people probably do not intentionally pass typed arrays in there. I think it’s likely somebody's passing a typed array there unintentionally, hoping to get the behavior that this proposal is suggesting. But they're actually getting minus one. And they might be already relying on that thing returning minus one without even knowing. So we would need here a browser that's willing to ship early use counters before making a design decision whether to overload or not.

JSL: I can reach out to you know, the Chrome folks and see if they're willing to do that.

MF: I just wanted to voice my support for the overloading. I was very convinced with some of the precedent that was discussed during the session and in Matrix earlier. Particularly the overload that exists in Buffer. But also overloads that exist in other languages for exactly this case. I was initially skeptical of whether that would make sense for users, but it seems it would be the case. I also understand NRO's point. And I would be fine if implementations were hesitant and wanted to get usage counters beforehand. But I don't actually expect that that will be an issue.

KG: TypedArray usage is pretty low, and the people using them tend to be more specialized and careful, so I would be quite surprised if this broke anything.

DRR: Queue is empty.

JSL: Okay. So yeah, that was it. I don't think it answered my question. I will be bringing this back in May. And we'll go from there.

### Speaker's Summary of Key Points

* Reviewing naming and iterable issue
* Override indexOf or new function?

### Conclusion

* No iterables like concat
* No firm conclusion on override vs new function but committee seems to be leaning towards new function

## Call for hosts

Presenter: Rob Palmer (RPR)

RPR: I think I hope everyone can agree this has been a successful meeting, at least so far. Something's very special is that we're here in person. As we do three times per year. Lots of people have opinions of where we should go and you know, where we should meet and aspirations, that kind of thing. The thing that underlies our ability to have these meetings to go anywhere is volunteer hosts. So people who can provide venues, who can cover the lunches, cover all the things that go with this. Meeting. So it's about time. We've already got our schedule for this year planned out. So we know all of 2026. What we don't have yet is the plan for 2027. But as I say, we will do the usual survey about you know, what kind of cadence, what kind of time, where people would like to go.

RPR: But those are all wishes. The things that provide the capability for us to do this are only when we have people volunteering. So we'll post about this on the reflector in the usual way. The call for hosts. I will just bring that up on the agenda there. But yeah. So right now I'm what I'm telling you is or what I'm asking is that if you like this kind of thing, the way we meet up in person and we have these meetings and connect and want to keep it going, please do see if your company can volunteer. I think we have the semblance of perhaps one volunteer from Paris I heard last night. But apart from that, I'm not aware of concrete offers at the moment. So please reach out to the chairs. I'm available here today if you'd like to talk about it. And we'll be putting up a reflector post to make this official very soon. Are there any questions?

RBR: I asked Chris yesterday about it and for suggesting Datadog. Now Datadog is not yet a member. And he was uncertain if a non-member is actually able to host or not.

RPR: Yeah, it is normal that we have a member company hosting. I think there are no ECMA rules that forbid a non-member. And we'll be speaking with SHN to clarify that situation. But certainly we really appreciate the offer.

## Thenable Curtailment for Stage 2

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1i0jY_e-A3rkd9256VzirJdPVtHInYNGjtYq_KrTBMuo/edit)

MAG: All right. So let's just get started. So this proposal has a terrible name, and we'll probably need to be renamed as we come closer to agreeing on a solution. But let's get started. All right. So a reminder of what is the problem that we are trying to deal with, basically. So objects with a then property, which I meant to change the format of, are Thenables. So they're treated specially during promise resolution. The problem is that it is super easy for security issues to happen as a result of this. Particularly given that the hunt for the then property goes all the way up to object prototype.

MAG: So since I last presented, I've had one more security bug that I know of that was caused by this. And since I prepared these slides a second one showed up. So this is a recurring theme. And so I would like us to try to provide some support to do something about this. And that is ultimately my goal.

MAG: All right. To remind us a little bit of where we have been and what we've talked about. I originally came with this idea of adding an \[\[InternalProto\]\] internal slot to specification-defined prototype objects. And then basically teaching the promise resolution to use a new abstract operation, I called it get non-internal, which would stop exploring the prototype chain for a then once you hit the constructor, or for then and constructor properties when it hit the \[\[InternalProto\]\], I don't hate this solution, but there are some challenges. Polyfillability, it's a special case in a weird way. And it doesn't fix all the problems. It only really fixes the problem for newborn objects in the web platform because once you hand an object off to script, they can always put an own property `.then` on it. So you're not entirely safe. But a little safer. We had, hmm, so we've talked about safe resolve as well.

MAG: And so the idea here was you would start the resolution process, but at any time if you discovered you would run user code, you would stop and say, "I'm going to enqueue a new job." And there's some open questions. So like, how compatible is this going to be? How do you deploy this? And I was kind of stuck here. So I did an experiment though. So the experiment is basically I implemented a basic version of SafeResolve. It looks a little differently than how I had originally pitched it. Rather than starting the algorithm steps, you instead actually just at the beginning of the algorithm, you say, "Hey, has this got any chance that it could possibly run user code?" And if it does, then enqueue a new job and wait until that job is dequeued for you to actually resolve the promise. So how to deploy this? The thing I'm most interested in is kind of making the C++ code in the browser safer. And so the way I did this was I deployed this inside of all C++ promise resolution. So all C++ promise resolution went through this path. And then I ran all of the web platform tests. These are not a perfect substitute for saying this will be web compatible. But they're also not terrible. And they'll highlight out some of the, i-if, 300 of these failed, I would immediately know, "Hmm, this probably won't fail."

MAG: The good news is basically everything passed. The tests which failed mostly were either trying to use then to observe resolution timing, in ways that probably don't actually need to be done, or you could just adjust the expectations. Or just validating that if you break then, things don't break otherwise. And so by eliminating that problem, those tests can just be deleted. I've updated the repo README with the actual details here so you could go through that if you're interested.

MAG: I also have run this past our DOM team because they too are very tired of the constant chasing of these kinds of bugs. It's quite nice, and they kind of support this in general. Some of the reasons being it makes resolving promise steps for web specifications no longer run script. So you don't actually have to think about whether or not you've resolved a promise. All of a sudden you're going to ‘run script’. It's hoped, by a lot of us, and my DOM team included, that this has a pretty high chance of being web compatible. The theory here being that almost nobody cares deeply about what order resolution happens. Fingers crossed. If it's adopted by WebIDL, it will make writing specs less error-prone. It means that specifications don't have to deal with what happens if, like, user code runs in the middle of some algorithm that you're writing. And this is just a screenshot of what the actual WebIDL, resolve steps currently look like. Okay.

MAG: So to ground this kind of concretely, I have put together an approximate specification. Note, I'm not an editor. There are actually problems in here. I'll show out some of the spec text, in reverse order. And I have adopted some hints about how much you should trust this specification text. Chief among them, I put it in Comic Sans to communicate a certain level of playfulness. So this is the MaybeDeferredPromiseResolve. This is kind of your high-level operation. The important thing here, and I don't know if you guys can see my cursor, you sort of can. It's not amazing, but step three is requiresDeferred. So this is going to be do you check whether or not you need to defer the promise. If you do, then set the promise state to deferred. And then enqueue a new job and return on find. Otherwise, if it doesn't need to be deferred, just do PromiseResolve 'cause that's what you're here for. I want to give an explicit thanks to MM because MM in a TG3 review of this concept highlighted the fact that we would actually need to probably set some sort of state otherwise you could race on another promise, somebody else trying to resolve the promise with some other value. And that would be bad. So I have added this state deferred, although I've not actually run it through the rest of the specification, but it's just trying to highlight that we would need something to stop someone else from stomping on the pending resolution that would happen.

MAG: Next, NewDeferredSafeResolveJob. How to write this, I kind of struggled with. And so I again, not an editor, and didn't want to derail too much on details because we're only going for stage two here. We don't need perfect spec text. So you know, let job be a new abstract closure that returns do the rest of the promise resolve stuff without accidentally creating another job because as JRL highlighted, the way that I had originally written this actually you could end up in a situation where you created a delay of two ticks, not one, which was the whole intent. But I didn't have quite enough time to sort that out, so hence the very long comedic method name.

MAG: This is the meat of the object or of the problem. There is a problem in this spec text again, but the general idea is that given the value you are resolving, you want to make sure that it doesn't need to be deferred. If it or you decide if it needs to be deferred, sorry. So if it's not an object, of course you can immediately resolve it. If it has a proxy handler, then you definitely need to defer it because proxies can do anything. If it's a descriptor and it has an own property, then, but it's a getter, then it's also return true. Then loop on the prototype. This constructor lookup actually probably also needs to be a loop like this, but I wasn't 100% sure on it, so I didn't write it down that way. I also couldn't figure out whether or not getPrototypeOf can trap on a getter. So if that needs hand special handling, again, Comic Sans, trying to be not too serious about spec text at this point. Stage one going for stage two.

MAG: Okay. So I do have some open questions that I don't have answers to and that I suspect will take a substantial fraction of the discussion time. Do we expose this to userland, which is to say, do we give users access to a capability where they can resolve a promise using the same semantics here? As somebody who really is trying to fix browsers and trying to make browsers less security-hole-filled, I don't have a strong feeling whether or not we need this for users. I think there are some people who will want it. A challenge for me being I don't know what to name this. It is like for a user, it is a very complicated operation to give a name that is not actively misleading. Like, I don't even like the name SafePromiseResolve because I think it is kind of misleading. It's like safe from what? So, if we do expose this to user land, what do we call it? Again, I don't know.

MAG: There's still a whole bunch of work to be done. You know, I would need to do a much more fulsome validation that this is web compatible. This is hard. Doing web compat checks of this nature are very hard because site breakage, if it exists, will probably be more subtle and require quite a bit of diagnosis to actually lay the finger at this specific change. If we were lucky, we could ship it to Nightly and be able to have somebody report it quickly and then be able to bisect it down to a specific build that turned this on. But this is among the worst-case scenarios for doing web compatibility checking because this is not going to just highlight in dev tools hey, this name collided with something else. I suppose I could actually add a dev tools error that's like, hey, promise resolution order changed a little bit here. But that's a challenge. Need to talk with other specs to make sure that they're on board just because my DOM team is interested in this, does not mean that I can get the HTML editors or the WebIDL editors interested, but I'm hopeful because every browser has had problems of roughly this shape. I need to do a proper implementation, proper specification, and figure out a name. If we decided that we didn't love the idea of just doing this universally, I still think there's value in exposing the abstract operation here to other specs just so that they could use it even explicitly for newborn objects. As a way of saying, this becomes a spec culture where hey, I'm in the middle of a complicated operation, maybe I should do a SafeResolve of this promise and that is something that ECMAScript provides and supports and is okay with.

MAG: So yes. And I expect lots of discussion, but I am hoping to take this to stage 2 today. And I have raced through this because there's not a lot here, and I gave a 60-minute time box mostly because of discussion. So let us save the time for discussion. Clarifying question, which I have entirely lost the context, MF. When was this?

MF: You had a slide 12… Yeah. The thing that you're exposing to user land, are you asking about the predicate or the actual—

MAG: The whole operation. So basically that would be the like maybe deferred promise result, maybe this operation. The predicate is maybe also possible, but again, same problem. And there is I have talked with the MAH before and he says they're kind of okay with the fact that this is actually a weak ability to detect proxies. I think if we gave the predicate, they might be more irked by that because then it would be a synchronous way to detect proxies. There was some comfort from the fact that it's basically you have to count ticks and it's a little bit distant. But yeah, so I think the actual question is when I said this and thank you for calling me out, I probably should have just actually written the name. Is should we expose like maybe deferred promise resolve or whatever we call it to script?

MF: Okay. Because I'd possibly be interested in the predicate as well.

MAG: Okay. I will write that down in my notes as something to think about.

KG: Yeah, so my question is, would we use this in ECMA 262? And more concretely, I saw it in your README, you had an example of a CVE that would not have been solved by this, which was the thing from a year or two ago where if you put a `.then` method on Object prototype, then the async generator resolve machinery with the newly created iterator result objects would trigger that `.then`. And I was looking at this and was like, oh, this would definitely solve the issue that we had in the spec. So I'm wondering concretely why you said we wouldn’t use this there, and whether we'd use it in other places in 262.

MAG: Well, okay. So maybe. I hadn't so in the interests of trying to not get derailed, I didn't want to use this to replace the actual PromiseResolve steps. Which would sort of broadly fix all of this, but everything would be changed from tick timing and then I almost certainly would cause problems. Targeted use of this inside of the specification, I think could be considered. And once the capability is there, people writing future specifications could say that they're like, yes, it makes sense for me to choose this option. I haven't given it great thought. I did highlight that it wouldn't have fixed that one mostly because I was not planning on touching that part of the specification. But it if we deployed it inside the specification, it would in fact have fixed that one. Yes, you are correct.

KG: I was thinking of this as like you would use this anytime you were resolving a promise with an object that you created and did not expect to be thenable.

MAG: Probably yes. But it makes the scope bigger and I'm trying to avoid too much scope creep here. Is maybe my biggest thing. I feel like there's a chance for us to do a targeted thing that we could get to stage 4 that could actually be deployed inside of, you know, web browsers and provide value. And then we could come back and say, yeah, but you know what? There's other places that it totally makes sense for us to do this. So that's my whole thing about scope.

KG: Sure. Yeah. There's actually one of the only places in 262 where that happens right now. So this wouldn't yeah, I'm not attached to doing this as part of 262. But existing things, I'm, I am more concerned about doing it in 262 in the future. And it sounds like you would be on board with that, so.

MAG: Yes, absolutely. And actually I didn't know that this was basically the only existing one that did that. So that is interesting.

KG: There's remarkably little async stuff in the spec. It's like this and `Array.fromAsync` is the other place. I guess `Atomics.waitAsync` too.

MAG: MM.

MM: Yeah. So I like the semantics here and what I'm about to propose does not change the observable semantics from what you're explaining at all. It's just a different way to phrase the spec, which may be better or may be worse depending on your criteria. But it avoids introducing a new state. The alternative to introducing a new state is to resolve the promise in question with a new spec internal promise i.e. forward the promise in question to a new spec internal promise and then hold onto the resolver of the spec internal promise. That effectively makes the original promise not re-resolvable. It's sort of takes exclusive ownership of the ability to further resolve the original promise. So it's a cool way to deferred.

MAG: Okay. I don't hate that idea. Like I, I agree that that is a nice clarification. And probably is more targeted when we have to write the spec text than having to wind a new state through everything.

MM: Yeah. And with regard to you know, things like the you know, our meta interpreter, our JavaScript implementation of Java in JavaScript, and the ability you know, the hence by people to shim this or things based on this. Being able to do it using constructs that are or you know, how you would do it to state it in the spec in a way that's explicitly in terms of operations that are available to the JavaScript programmer, I think is good.

MAG: Okay. I had not thought about that, but that's actually a really nice clever way to do that. So I will think about this more and I like it.

RPR: KG.

KG: Oh, yeah. So since there's nothing else on the queue, I wanted to give explicit support for this going for stage two. I do also think it should be exposed to user land. I would use it in user land in all of the places I would use it in the spec. So I think it's just a very useful thing to have. And a thought on the naming is that you can technically avoid having to have a new name by just overloading the existing resolve. You could just pass it a second argument. Currently we're not using the second argument of promise resolvers. So you could say, if you pass true for the second argument, then it does this special deferred behavior. Possibly a new name is better, but the thing about a new name is—if you've already vended the Promise that you are going to be resolving, there's no place to put the new name. The only things you have are the resolver functions. So `Promise.safeResolve` doesn't work because that vends a new Promise rather than resolving an existing Promise. So a second argument to the resolver function is not a terrible way of doing this.

MAG: Actually, I hadn't thought about that, but yes, that, that is actually quite a nice way to do it. Cool. OFR.

OFR: Yeah, I guess a question. If I remember correctly, like basically the deferred resolution will try to do everything in one go. There was like a point regarding that on the slide. And maybe I missed that, but what is, so this is actually what will make it what will introduce an observable difference, if I understand correctly, because what could happen is that the resolution itself creates another task and then that task will run after the actual execution of the Promise. And so that, that would be one way of observing that you ended up in this deferred resolution. And I was kind of wondering why is that important and can we just drop that and then you would not have this reordering problem.

MAG: Well, so we hope it's not important that people care about the order that things actually get resolved in. It’s maybe one of the fundamental premises here. It is always possible that people rate code that depends on this. You know, they assume that some Promise is resolved and that then it will and the then handler fires. Before some other operation happens. You can write code where this is the case. I didn't quite follow how we could reorder this to avoid this though, because the general thing is you just can't run user code when you are trying to resolve. And so that is all unobservable. The only thing that is actually observable here should be the ordering possibilities. The change of ordering. And you would then to be clear, there is multiple ways that you can observe this because you would be able to see not just the fact that the Promise got resolved at a different time, like it, it was not the then like all of the reaction records did not fire when you kind of thought they ought to have. But also if you have for example, put in and the only way this happens is if you haven't in fact put in a proxy on the prototype chain, or you have put you know, a getter in the then slot, these are all places where you could and would observe different things. So the important thing here is that this does happen elsewhere. But I also think that a lot of people when they are doing these kinds of things are already trying to do bad things. And so maybe that's okay. Especially people who are putting then on object prototype. I don't think I've ever seen that in real code, but I see it in exploit code a lot.

OFR: But can you maybe move one slide forward? \[Slide 10] Yeah, here like this, do the rest of the PromiseResolve stuff without access and creating another job. This part, right? So maybe I misunderstood. Does that mean it will resolve the Promise and then also like actually post the task to to run the pro or like to run the Promise code or would that then still be in a later tick that the actual Promise runs?

MAG: I need to work out exactly how this ends up playing out. I think that you the way that it is currently written if you were to just sort of replace this with what I originally had, which was PromiseResolve, like just do the PromiseResolve operation, then you do in fact get into a situation where you have new jobs which would get in queue, and they would run. And JRL’s point, as I took it, was, but you're already later like you're, you're already further along in the, in the task queue. And so you could conceivably coalesce at least one of those jobs into just doing the thing now. But I haven't worked out all of the details here. And yes, this is an area where there's a gap here for sure.

OFR: Okay. So, I guess this is what I meant. So, so if then the resolution like creates another or posts another task itself, then that task will be reordered after that coalescing and that's how you could observe a reordering and I was wondering is this really necessary that we do it, right?

MAG: Yeah. And, and I think the reordering itself is, is yes, necessary. But the I'm hoping not too many problems and SHS’s reply is probably relevant here.

SHS: Yeah. So I mean, my experience with trying to move from kind of a mock clock sort of situation in synchronous tests to Promise-based asynchronous tests is that it tends to be very brittle. A lot of people write a lot of tests that depend on very specific tick counts. I don't know for sure that it would apply here exactly 'cause I'm not entirely clear on what the proposal is. But my gut is that we would see a lot of difficulty in migrating.

MAG: The hope is that because this is only when people are already doing bad things that we that, that is the only change. Basically you have to be already resolving a thenable. And so people have to actually explicitly go in and opt in to create a thenable. And so my hope is that the blast radius here is actually quite small. But it is absolutely a risk. And so I do take that point for sure.

SHS: Those, those tests, they rely on tick counting. Like, is that, is that considered appropriate or would for instance, web platform tests accept changes to remove them and refactor them?

MAG: Yes. Generally I think there are certain cases where we do want to, you know, provide minimum counts about ticks and things. But I think for the web platform, a lot of them would be fine. And there's not that many that actually get exercised here. It's really there are, I think the only ones that fail, there's only like eight or nine of them that fail. And they are very explicitly ones that are already trying to probe this behavior. And for at least two of them, it's like, hey, we had a security bug, so we wrote a WPT to try to make sure that we don't have that security bug again. And this proposal would sort of obviate the need for that test because it tries to observe a behavior that will then subsequently never happen.

SHS: Yeah. I think in the case of what I'm thinking about is maybe I'll part, partly just an issue of us having a monorepo and you know, it's sort of, we upgrade the browser and then people break their tests and we're sort of responsible for that a little bit. But I think it's more of an us problem. And unfortunately we have a little bit of coverage of, hey, you've gotta get your tests together or else you're, you're going to be stuck on an old browser. So it's not a blocker, but it's something to be aware of.

MAG: Okay. JRL?

JRL: Hello. Okay. So SHS’s point here, I think the Promise tests that you're concerned with are user-written tests. Where they are trying to wait a couple of seconds or something like that for a Promise resolution to happen. They don't have direct access to that Promise so they can't directly await it. They're just using setTimeout or something else to, as a side channel, to get that to wait for that event to happen. With my proposed change here, there actually would not be a new there would not be any additional ticks. So all of those tests that are using setTimeout should continue to function correctly. The only change is the order of whether or not you wait for one tick before you get the .then or potentially get the .then method. And when in the old code, you would get then see it has a then method, then await, then you would wait for that after a tick and then you would continue the Promise resolution after another tick. So two ticks total. In the new one, we cannot safely get the .then we wait one tick and then we get the value, we resolve the Promise, everything else about it. And then after another tick, the Promise resolution chain continues on. So it'll still be two ticks total. And hopefully unless you are specifically testing for when the .then accessor is actually got, then there will be no other changes that are no other breakages that could happen.

RPR: MM?

MM: Yeah. I support this. I would like to see this appear in userland. But I'm certainly not gating anything on that, that could happen in a later proposal. That's it.

MAG: Okay. I'm happy to hear people expressing some support for the userland thing. So I will do work to actually write out what that would look like and think a little harder about what's involved. So that's great. Give people a minute. This went much quicker than I expected. I expected this to be more controversial. Thanks everyone.

MM: While we're waiting, I have a historic note to interject. Which is this kind of repairs the breakage that happened with regard to the original intent when we first introduced Promises. That we were trying to make it be the case that a `Promise.resolve` of `X.then` stuff would, would be safe against reentrancy independent of what X is. And then over time the breakage of that that happened was sort of inadvertent with regard to endangering the reentry reentrancy issue. So, so this, this sort of brings us this finally realizes the original intent when we introduced promises in ES6.

MAG: Nice. I'm glad to be of service. All right. I think that's it for the queue. So I've asked for Stage 2. We've got two supports. Anybody want to object?

RPR: So this is the official ask for stage 2 for Thenable Curtailment. I'm not hearing any objections. So I'll say congratulations MAG. Oh, oh, sorry. There's also been extra support from PFC. So congratulations MAG. You have stage two.

MAG: Awesome. I will go update the summary in my notes.

### Speaker's Summary of Key Points

* Aiming to add a new ‘Safe Resolve’ (name TBD) operation which will defer execution by a tick, only in the cases where there’s a possibility that user code could run.
* MAG was curious about whether not 1) We’re OK with adding an operation like this 2) Whether or not there’s interest in exposing this to user code.
* MF asked about a predicate, and whether or not we should add a ‘would-trigger-deferred resolve’ predicate; we didn’t actually conclude on this
* Discussion included some notes:
  * Should we use this internal to the specification; MAG hadn’t thought about it, but worth thinking about especially since this would have addressed the specification CVE from last year.
  * MM brought up a clever way of avoiding the new promise state by creating a specification internal promise, and just enqueuing a job with the resolver function and resolving that with the ‘dangerous’ value when the time comes.
  * KG suggests second argument to resolve function for safe resolve semantics
* Some concerns about brittleness and testing

### Conclusion

* Stage 2.
* Matthew will investigate user exposure, through second argument of resolve function probably.

## Iterator Includes

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-iterator-includes/pull/8/)
* (no slides)

KG: So we just approved the spec text for iterator includes. But we did it wrong. We have a convention that if—so iterators are closable and they are supposed to be closed when the consumer is done with them, including if the consumer enters an error state that is not the fault of the iterator itself. And that includes, for example, passing an invalid argument to an iterator method. And we had not done that correctly here. So if you passed a non-integer to as the second argument to `iterator.includes`, it would throw without closing the receiver and leave the receiver in an unclosed state. So this is a PR fixing that. I think it should be uncontroversial, but I figured since we were here, we might as well stamp it. Does everyone approve this? All right. I hear no objections. Sounds like we're good.

RPR: Let's just check do, do we have any support for this change?

JHD: It did get an approval on the PR.

RPR: You've already got two approvals. And RGN has said the same.

RPR: Yep. There have been no objections. So the PR is approved. Thank you, Kevin.

### Speaker's Summary of Key Points

* There was a bug in the just-approved `iterator.includes` spec text where it was not closing the receiver if the argument was invalid. Proposed PR fixes this.

### Conclusion

* PR is approved

## Towards Structured Concurrency

Presenter: Kevin Gibbons (KG)

* [repo](https://github.com/bakkot/structured-concurrency-for-js)
* [slides](https://docs.google.com/presentation/d/1vYh__pmW0QuIhxz9jPQbUXdkIrzD5p7Wjl6oTdKSBZI/edit?usp=sharing)

KG: Okay. Good afternoon, or whatever, everyone. This is not a concrete proposal. It is a sort of vision for a possible place that we could go as a language, and an introduction to a thing that a lot of people have been thinking about in other languages that we haven't actually talked about very much here. I do have a repository, but it's not for a proposal. It's just basically to use the issue tracker for discussions.

KG: Okay, so, structured concurrency is a newish idea, or at least a relatively newly named idea. By which I mean it's about a decade old, but that's new in the timescale of programming languages. The name is an analogy to "structured programming" from the famous goto-considered-harmful paper.

KG: The idea is that you want your concurrency to be basically bound to a scope. So you have some scope in which it is possible to open child tasks, and then the scope doesn't exit until all of the tasks that were introduced within that scope have completed or shut down, and if the shutting down is asynchronous, then that requires waiting for the asynchronous shutdown Promises to complete as well. And usually, it is the case that errors in one task will cancel the other tasks. This is not necessarily implemented explicitly in the form of looking for errors in one task. Usually, what just happens is that any early exit from the scope will trigger cleanup of all the other tasks. So if you are awaiting one task and then that task throws an exception, that will throw an exception which is not caught within that scope, then that exception will propagate and will exit the scope and then scope exit will trigger cancellation on the other tasks.

KG: So I'm not really going to defend the thesis that this is a good idea. It is implemented in a number of other languages, and I think they've all proven it out pretty well. But also, hopefully if you've done much concurrent programming at all, you can just stare at this and be like, "Oh, yeah, that would be nice." I'm happy to talk more about why this is nice if we want, but I'm not really intending this as a defense of this idea, just a presentation of it. And a vision for how we might get there in JavaScript.

KG: Before going on to JavaScript, though, I'm going to give examples from three other languages of how this is implemented in other languages, starting with Python. So Python has this with construct, `async with`, which is their form of explicit resource management. So think like a `using` declaration, except that it introduces a new scope instead of just being ambiently in the current scope. They use it here for structured concurrency. So you can introduce a task group and then create tasks within that scope and then when you exit the `with` scope that will trigger the cancellation on the tasks. Notably here, Python does have async await. Their async await is a lot more like generators in JavaScript, or you might think of it as cancelable Promises, in that the tasks created thereby have a `.cancel` method. So what this task group is doing on scope exit is that it's calling `.cancel` on the tasks created by these async functions and that injects an exception at the current await point within those functions. So you should think of Python's implementation as basically being like explicitly resource management plus cancelable Promises.

KG: Next up, Java. This should look a lot like the Python one. Java has `try`-with-resources, which is their equivalent of Python's `with`, which is again just like our using statement, except that it's a new scope instead of the current scope. And in Java, they use virtual threads instead of an async await syntax and so there's no explicit await points within these functions. But it otherwise works the same way. The threads get an InterruptedException injected into them, wherever they happen to be. Not literally wherever they happen to be, only at places where the VM has marked that it is potentially paused. But at positions which are not syntactically annotated. But otherwise, a lot like Python, you're invoking these functions within the scope, and when the scope exits, you trigger the cancellation method on those tasks, on those threads, which just like Python takes the form of throwing an exception.

KG: Swift actually has something nice there, because they didn't introduce async await until after structured concurrency was sort of in the water supply. So in Swift, the way it works is that there is an ambient Task, just think of a global variable in JavaScript called Task. And tasks can check "Task.isCanceled" which is a Boolean which just tells you whether the current task has been canceled already. And at scope exit, any tasks which were introduced in that scope which have not already been awaited will set isCanceled to true. So Swift doesn't actually automatically inject exceptions; it relies on purely cooperative checking for whether the current task has been canceled. And Swift also doesn't require you to introduce a special kind of scope, in order to handle the possibility of canceling tasks within that scope, it just uses anything where there is an async function invoked and bound to one of these `async let` declarations. If those `let` declarations have not been awaited by the time the scope exit is reached, then they are canceled, or rather, the isCanceled boolean is set to true. So Swift is the weirder of the three, mostly because they got to design their feature after structured concurrency was already in the water supply.

KG: Okay, so can we do something like this in JavaScript? So this is sort of building off of James's presentation from earlier. So I am going to take as a given that we have to use AbortController because AbortController is already what the web platform uses. It's already what most JavaScript runtimes that have things which can be canceled in any form are using; it's what user land libraries are using. I don't like it very much, but I'm just taking as a given that we gotta start with AbortController and see where we can get from there. And spoilers, we can get pretty far.

KG: So this slide is what you would do today if you wanted something like structured concurrency. This isn't actually literally structured concurrency. You can hopefully read the comment towards the bottom of the slide here. But basically the idea is that you introduce an AbortController and then you manually thread a signal into every task that you initiate. And then at the end of the scope, or rather not at the end of the scope but with a finally block, you call `controller.abort`. And that will set the signal's state to be aborted. So just like in Swift, this doesn't automatically cancel the tasks. But the next time any of these tasks check if the signal has been aborted, which there's a convenience method on the signal for doing so, they will trigger their own cleanup, presumably. But again, we don't get to wait for the cleanup; `controller.abort` is strictly one-way; it just sets the state of the signal and triggers any manually registered cleanup callbacks and does not then wait for any work to finish.

KG: No one actually does this. In my experience and from reading a lot of code on GitHub, literally no one puts that finally block there. The `controller.abort` is only triggered when there is some other case that causes cancellation, not when you're just doing a scope exit. And this kind of makes sense: finally blocks are not a widely used feature, and this pattern is pretty ugly: you're introducing the controller outside of the scope. And also cancellation doesn't happen until after your catch block. So if you had something long running in the catch block, the other tasks would still be sitting there running.

KG: Okay, so you can do a little bit better today by using our form of explicit resource management. AbortController is not currently disposable, but we have a mechanism in the form of DisposableStack for adopting non-disposable resources into the `using` syntax. And that's `DisposableStack.adopt`. And so this is basically equivalent to the code on the previous slide, except that now we will actually be calling `controller.abort` at the end of the try before the catch runs. So it's already a little bit of an improvement. On the other hand, no one does this either. Partly that's because the `using` syntax is quite new, but I think also it's just a lot of concepts to keep in mind. Not quite half of the code on the slide is boilerplate, but you do have a fair bit of boilerplate. And again, this still not actually con structured concurrency 'cause we're not waiting for the cleanup to complete.

KG: Before I keep going in this vein, that's where we are today. That's the best we can do given the features currently in the language without introducing any new APIs or whatever. Do we have questions on the queue before I move on?

DRR: You have no items in the queue.

KG: Okay, great. I am assuming this is all clear and obviously correct then. Let's keep going. Okay, so how can we make the situation better? Well, the first thing we could do is make AbortController disposable, or introduce a subclass of AbortController which is disposable. Some debate on the topic of which of those two we should do, but for purposes of illustration, I am imagining that we have an AbortController subclass. The only difference is that it has a `Symbol.dispose` method, which calls `controller.abort`. This would improve on the situation in the previous slides. Because now we don't have to have a separate DisposableStack, which is pure overhead. And this already is kind of clean, I think. It's not ideal. There is still some manually juggling the signal and everything. But at least you're not like having to do a bunch of work to get automatic cancellation of outstanding tasks. I think this is independently motivated. It is still not structured concurrency because of the caveat about `controller.abort`. But I do think it's independently motivated.

KG: However, what if we wanted to address that caveat? So let's go back and ignore the possibility of disposable AbortController and instead just try to fix the issue where we don't wait for cleanup. Maybe we can imagine having a version of `controller.abort`, which just returns basically a `Promise.allSettled` for any Promises returned by the cleanup callbacks. This, what's on screen is already technically structured concurrency, or almost. If we then combined it with the previous idea of making AbortController disposable, this is structured concurrency. We have introduced a scope. Tasks which are invoked in the correct way within that scope will be cleaned up at scope exit. Again, assuming that the tasks are cooperating with that properly. And you don't have to introduce a `finally` block or anything. And we will wait for cleanup to complete before proceeding past the end of the scope, before even entering the catch block.

KG: So this gives us structured concurrency with no new features in the language, just new APIs. I think that's kind of great. So my main thesis is that we should do something like this.

KG: On the other hand, how would you actually use this? So let's take an async function and imagine how we would actually implement it. So remember that signals let you register a callback to be invoked. Here I've written it in the form of addAbortCallback rather than what you actually have to do today, which is this horrible addEventListener machinery. addEventListener also doesn't have any possible affordance for returning a value from the cleanup handler. So I'm imagining that we add an addAbortCallback method to signals, which allows you to register a cleanup function and which allows you to return a Promise from that cleanup function which will be awaited by the `controller.abort` Promise that I was talking about on the previous slide.

KG: So imagining we have all that, how do we actually wait for cleanup in the async function? Well, what you have to do is register a callback which is only going to resolve when the body of the function has completed. And you can do that by manually returning a Promise from the abort callback and then manually resolving it at the end of the function. And you have to remember to do that in a `finally` to handle any early exits or exceptions. But this works. This does technically work. But this is gross.

KG: Also because we are passing a closure to `signal.addAbortCallback`, and we are never then removing this closure from the signal, this will keep that closure alive—and in actual engines, that closure will keep probably everything in scope alive—until the signal itself is cleaned up, even if this particular task completes much faster than the other tasks.

DRR: We do have a question from Matthew Hoffman.

MAH: Yes, right. I think you're actually addressing it. Could you go back one second on the other slide, that you just showed? This one. Yes. This one. I suppose the addAbortCallback is rejects. Right? No. I'm confused as to what the goal is here. I assume you're basically trying to have the AbortController being able to wait until all the reactions from the abortion have executed.

KG: That's right. Yes. So that's the idea here is that the `controller.abort` would return a Promise and that Promise would only settle when all of the Promises returned from the cleanup handlers had themselves settled.

MAH: Got it. So going back on the other slide that you just had right now, if anything throws, how do you ensure that—oh, because it's `finally { resolve() }`. Got it. All right.

KG: Yes. Yes. But you are right to be like this, it is not obvious that this works or even that this is the code that you would want to write. And I'll get to that in a second. But first I want to address a separate issue with this code, which is that it's keeping the closure alive. When we did signal addAbortCallback and we added this closure, that closure will keep everything in scope alive as long as the signal itself is alive, even when the function itself has already completed normally. So if the function completes before other tasks in the scope have completed, we are still keeping everything in the function alive.

KG: Right. So let's try to address that first problem and then we'll get back to the ergonomics. So the easiest way of doing that is to just have some way of removing the addAbortCallback method. In the prevailing pattern with things like addEventListener, you get a removeEventListener function that you have to pass the same function to. We could do that. I think it's pretty gross. I think it's a lot nicer if addAbortCallback just gives you a capability that lets you unregister the function that you've added. Supposing you have something like that, as long as you remember to unregister the callback, then you at least avoid the problem of the memory leak. On the other hand, this is even more gross than what we were writing previously. But at least it doesn't leak memory.

KG: So now let's try to get to the ergonomics here. The simplest thing that we can do is to just make the token that I introduced on the previous slide itself be disposable. And then you don't have to manually unregister at the end of the scope. You just say, I'm going to do `using token = signal.addAbortCallback()`, and then at the end of the scope, the token is disposed and that automatically unregisters because we no longer care what's going on with the signal because we're done with the function. So okay, that's already an improvement. And I think this again is independently motivated. Like leaving aside all of this stuff I said about async cleanup and structured concurrency and whatever, I think this is independently motivated. The issue where you attach a cleanup callback and then never remove the cleanup callback is actually extremely common when using AbortController today. And I think this would be a step towards avoiding that very common leak, even completely independently of trying to get structured concurrency.

KG: So we're getting somewhere, I think. But you know, this code's still pretty gross. The `Promise.withResolvers`, it's basically a magic trick. Like from the point of view of the user, it's like, what are these first two lines doing, and what's this try/finally? So let's introduce a helper so that you can abstract out all of the magic here. And this is just a structural rewrite of the code on the previous slide. Anywhere you have a try/finally, you can instead have a disposable resource. So let's introduce a helper that returns a resource that unregisters the token and calls the resolve method of the Promise that we were returning from the cleanup handler when the resource is disposed. So if you call this helper at the very first line of your function, you just say, `using whatever = mustComplete(signal)`, then you don't have to write a try/finally at all. And in fact, you don't have to write anything else in the rest of the body of your function. That the function's Promise will be awaited in `controller.abort`. And if you get to the end of the function before `controller.abort` is called, then the cleanup handler will be removed and you don't leak any memory.

KG: It's even nicer if we could make this a built-in, because that helper was still sort of magic. So let's just say, signals have a prototype method that is just the thing that was on the previous slide, so `using whatever = signal.mustComplete()`.

KG: I still don't love this, but it's the first slide in the last five that I have not immediately hated. This is not the worst.

DRR: We do have a clarifying question from WH.

WH: Go back… a little more…. \["Maybe: with a helper?" slide\] I noticed that in the different solutions you flip the order of `token.unregister()` and `resolve()`. Does that matter?

KG: It should not matter. The resolve will—it just shouldn't matter under any circumstance. That was just an oversight on my part. Sorry.

KG: Okay. So where would this leave us? I think these are all independently motivated steps. I think it is useful to have a disposable AbortController. I think it is useful to have an AbortController that allows you to wait for asynchronous cleanup tasks. I think it would be useful to combine them. I think it would be useful to have an addAbortCallback instead of having to use addEventListener. I think it would be useful for addAbortCallback to return a token that allows you to unregister the abort callback. And I think it would be useful for that token to be disposable. And assuming we had all of those things, I think it would be useful to have this mustComplete helper for the case when you are combining the async disposable AbortController and the unregister tokens.

KG: This isn't the best possible version of structured concurrency. The most annoying part of it is, of course, that you have to thread the signal through everywhere. And that you have to manually do `signal.throwIfAborted` everywhere. And if you are doing a try catch around anything where there's a signal throwIfAborted, you have to put as the very first line of your catch basically a rethrow. You have to do `signal.throwIfAborted` again in the catch handler. I don't love any of these aspects. On the other hand, this gets us to something which is at least workable.

KG: There are already user land libraries which are actually, I think, an improvement on this. For example, there's a library called Effection. It asks you to write generators instead of async functions. And because you're writing a generator, the generator can be driven from a library in user land and can inject a return completion at your await points, or rather your yield points because you're using a generator, not an async function. And that is in some ways nicer. That doesn't require you to thread signals around everywhere. It's actually quite close to Python's implementation. But it requires you to write generators everywhere. And it doesn't automatically work with AbortController, which is the thing that's already in—not the language, but the platform, and which I think is kind of inevitable that we put in the language.

KG: Yeah. That's basically the talk. I did have one further idea, which is that, instead of this `signal.mustComplete`, you could in principle have a version of the Promise combinators that is attached to the AbortController. And so in this case, you would know that the Promise is from the task because you are passing them into the controller. This would allow you to skip the boilerplate in the callee, the `signal.mustComplete`, except of course you do still have to pass the signal in. On the other hand, if there's any other early exits from this function, then it's not going to wait for the cleanup for those functions. So I don't really like this idea. I just wanted to suggest it as a possible other thing that we could do.

KG: Anyway, this isn't my ideal version of structured concurrency, but I think it's a feasible version of structured concurrency. I think we should take as a given that we are not getting the third-state cancellation at this point in time. Similarly we could say that actually it's possible to inject exceptions at await points that don't come from the value being awaited, but that rather come from outside of the function. But I don't think we're going to do that at this point either. Async functions already shipped, and they don't do that.

KG: So yeah. That's my talk. We can get to the queue.

DRR: Okay. First up on the queue, we have ACE.

ACE: First of all, I love all of this. I love the recursive application of whenever you see try finally, that looks much nicer with our new, explicit resource management. With your comment on generators, just again, for people that might have heard that and gone: “well that sounds great. Why don't we do that?” One, frustrating thing with doing that in TypeScript is TypeScript doesn't have high kind of types. So when you await something, in an async function, TypeScript knows that the result of await is based on the right-hand side. Like if I wait a Promise of a string, then I'm going to await's going to give me back a string or throw, you don't get that with yield. Yield doesn't have a, like, oh, every time I yield, pass that type through the resolve higher kind of type. So what the libraries that do this look like is you have to await and yield. So that you get the kind of type resolution of await, but then the kind of structure concurrency or async control flow of yield, so it's like it helps a little bit, but it's still like not a great solution here.

KG: Yeah. And typing generators is quite hard because the `.next` method—the value of the yield is just whatever the argument to `.next` was. And that's only one function. So it's hard to have more than one type. But in real life, you are awaiting different values of different types, and you expect that to work.

DRR: We also have MAH.

MAH: Yeah. So I mean, one thing that might've been easy to miss in your example is that this requires you to write `return await`. In the functions you call, whenever you have a using. I think there's been a lot of, like, this is something people often forget to do. Especially because linchers for a long time and possibly still now, like, tell you the await isn't necessary in those cases. We're really, if you have a using in scope, it isn't.

MAH: So I just wanted to note that. Like, anything that, that, that relies on using and something in the scope, in scope, resource management, will run into that gotcha that, people will forget to write return await.

KG: Yes. That's a great point. On the other hand, you will at least do all of the cleanup in the function itself. The only thing that you're not waiting for is, any work that's being done in the Promise that was returned. And if that function is itself written in this style where the function takes the signal, then you will still be waiting for work done inside of that function. So it's only either user land functions which are not cancelable or platform functions which don't do this signal mustComplete stuff. And that is still a problem, but the scope of the problem is smaller than you might think.

ACE: There's an eslint rule for this.

ACE: So I can make a guess, but I'd be curious to hear explicitly the—everything you've shown is technically outside of the current remit of TC39. Like this could all be done today. We've already like Ron's already kind of gotten us to the place where we can do this. So the, is effectively the relationship here one that this all affects us? And two, if we do want to, say there is a canonical, abort signal protocol in the language for other things, then th-this is the intention to add this to like WHATWG. So like we're going to end up with this eventually. So we kind of need to ag now is the time for us to be happy with that because this is what's, this is the, like, the train that's heading towards our station.

KG: So a bit of that. Certainly if we can't do this in TC39, I will personally want to be pursuing it in WHATWG. But my opinion is that TC39 is the correct venue for this. And I think that we have a path towards doing it in TC39, which looks like basically—so James didn't talk about this in great detail, but I think we need to have cancellation in the language. I think cancellation in the language needs to basically be an extension of what's already in WHATWG, which is to say AbortController. So my vision for the future looks like, add AbortController to the core JavaScript spec. Not all of AbortController; in particular, AbortController is currently an event target in WHATWG and in Node and I don't want to pull in the event target machinery, but I would say that there is a class AbortController that has an abort signal and that the abort signal has an addAbortCallback method and the controller has an abort method. And we could just say those things, and that would not require any changes in implementations that currently have an AbortController because they would already have that. And then once we had said that, we could start making these improvements in TC39, which I think is the correct venue, because this is really a language level facility.

ACE: Thanks, I'm pleased to ask the question 'cause I wasn't aware you were going to go there, and I'm pleased that's where you're going 'cause that sounds great.

DRR: KM?

KM: Carrying on what you said there, our perspective is that anything that we do with related to cancellation has to fit nicely with AbortController. As far as web developers are concerned, this is all one and the same. The fact that these are in different standards bodies is not relevant. And we don't want to have a weird TC39 cancellation that doesn’t fit nicely with the rest of the web platform's one.

KG: Yes. I've been taking that as an axiom. Which is why this presentation all takes the form of, here are some extensions to AbortController. Even though I think that it leaves us in a place that is not necessarily as nice as Python or Java. I think it's the nicest place we can get taking that as an axiom. And I do also agree with it, web developers know that AbortController already exists.

DRR: ABO?

ABO: So, one thing that we had been thinking about for the same conduct proposal is to have some way of, well, to use async context to have an ambient, abort signal. Rather than having to pass it, manually to each function. And it seems like it would fit very nicely with this. This is not something that we're, like so the plan for this would, would probably have been to pursue that after, disposable async context. And, maybe, like or at least, in order for it to fit here, it would have to be pursued after abort, dispose, after disposable async context. And, yeah, this is not part of the current web integration of async context, but it's, it is, it was a follow-up that we had been thinking and planning to propose to WWG after the, main web integration of async context was, was done as, as a follow-up. And it seemed like it could fit very nicely here. Maybe, it's, async disposable would also set the ambient signal. But maybe you would also want to have, want to set, an ambient signal with a different disposable. And it seems like it would fit nicely, together.

KG: Yeah, the idea of doing something with async context around this had occurred to me. But I haven't thought much about it. The idea being that there would just be like an ambient global level one basically what Swift does?

ABO: Yeah.

KG: And then whenever you started a new context, you would push that, basically.

ABO: Yeah.

KG: Yeah. That sounds like a great idea, especially if we can make built-ins respect it. That would be so nice.

DRR: We've got a reply from Stephen Hicks.

SHS: The ambient AbortSignal async context variables are certainly something that we should look into. And if it doesn't happen on the platform level, we'll probably experiment with it at Google anyway.

DRR: Great. Ashley?

ACE: Initially, I really liked the idea of the ambient context abort signal. I was randomly watching—I don't do any .NET, but I was watching a YouTube video about cancellation token and .NET. They went that route and then actually backtracked. They found the ambient abort signal actually led to some bugs where people thought it was being ambiently passed, but it turned out the thing was never consuming it. And they—at least the outcome from the video I watched was that they backtracked and they went back to preferring telling people to explicitly pass it down. So it'd be good to maybe make sure we don't repeat a mistake if there's something to learn there. Maybe there are reasons that won't apply to us. Like it's very subjective, but I'll just say maybe this isn't as great an idea as it sounds or maybe it is.

DRR: A question from Mark?

MM: Yeah. You mentioned earlier that, had our history been different, we could have had three cancellation states, what would those three states have been? I just, I didn't follow that at all. I don't necessarily mean three cancellation states per se.

KG: Consider the following:

```javascript
async function f() {
  let state;

  try {
    await promise(); state = 'completed';
  } catch {
    state = 'errored';
  } finally {
    console.log(state);
  }
}
```

So in this code, it is an invariant that the `console.log` will print either completed or errored, or I suppose never run. This is true of async functions. It is not true of generators. If we had written this as a generator, and done `yield` instead of `await`, you can enter the `finally` without either proceeding past the `yield` directly or entering the `catch`, because generators have a `.return` method. So that's all I meant by third state. We could have done the same thing for async functions. We could have said that you can interrupt an await point without getting an exception from a Promise.

MM: Okay. I understand. Thanks.

KG: But like I said, yeah, I think that ship has sailed even though there are things to recommend it.

RBN: So I'm not sure if you've had time to look in Matrix, I posted a rough idea. So I like in a way, I kind of like the idea that you had or presented with how Swift does things, except back when we were first talking about cancellation a number of years ago, there was this contention going back and forth about whether or not cancellation should be something you explicitly pass around, or should it be something that's just ambient in the environment. And you could just cancel any Promise and then it would just cancel the operation and things would happen magically. And that's where the problems lie because you can have code that requires asynchrony and must complete and does not want to be canceled that is in the middle of other code that can be cancelable. And that's where it's useful to be able to pass a signal around. When the first discussions around having an ambient signal came up, those were the problems that were presented and that you had to have a way to be able to opt out and/or to opt in, and not everybody writes codes that expects cancellation to work. So it's in a way better to force people to opt into it so that if you do support it, then you take it. If you do want to pass things down, you pass them down manually. So that's generally been the principle that they use in .NET and the one that I've primarily promoted. That said, I did take five minutes during your discussion and threw together an example that uses `AsyncContext` to pass along an `AbortSignal` that would be aborted if an exception is thrown in any of the pending operations, with the caveat that if you wanted to participate in this, you still had to look at the global `Scope`. It wasn't just magically happening in Promises. You had to do look at a `Scope.isAborted` or a `Scope.signal.aborted`. So there's the potential that we could do something that introduces an ambient `AsyncContext` that if you want to opt into it you can, but you still have to talk to the signal. My only concern is something you stated a moment ago, which was that (paraphrasing) "it would be great if we did something like this with built-ins that just magically supported it". I would definitely not want to support that because I want a `fetch` to happen and don't want some random person who calls me to abort that operation because I'm doing a POST and I need to make sure that gets completed. It still needs to be explicit.

DRR: We got a reply from WH.

WH: In Swift cancellation doesn't happen automatically. It's done by you polling to see if you were canceled. So you think that would work fine, but the problem that people have been running into is, if you need to do something atomically regardless of whether you've been canceled, you can just do it, but as soon as you call any library which responds to cancellation within that atomic code, you have a problem.

KG: Yeah. Yeah. That's an excellent point. So yeah. Okay. I now think we should not do anything that is automatically respected by built-ins. But also the whole async context thing would definitely be a much further follow-on.

DRR: CZW?

CZW: Yeah. I would like to have a quick clarification question about what RBN said. I, I would like to know, is the issue you mentioned about like, I don't want the synchronous code being aborted, as is it more a question about declaring a safe point to cancel or is it about I don't want the parent signal being implicitly being passed to a inner task that I don't want it to be canceled in?

RBN: Yeah. I would say it's a bit of both. The concern is that the author of a package may export an async function without expecting cancellation to be involved whatsoever. They're expecting their code to run to completion. They may not have considered safe points and how to back out in those situations other than exceptions being thrown. They may not have considered that built-ins they are executing might be canceled by some caller up the chain that they're not aware of. So it could be library code. It could even be their own code. It's just that they have not planned ahead for this, because when they wrote that code, this feature didn't exist and then we suddenly introduce it and they're code is running in the middle and now all of a sudden their code starts breaking because of something that their caller is doing that wasn't a feature before. That's a problem. So it's both of those things.

DRR: We have a little bit of space. Remaining. So we're going to extend it out another couple minutes. So next up on the queue is JSL.

JSL: Yeah. I, I make a quick, one, one point on this existing uses of abort control and abort signals do not need to change, but that doesn't mean new cases have to continue to use those. So if we adopt this, you know, I don't want to be. Constrained to that, that existing API and I don't think we should feel constrained to it as long as it can be retroactively fitted into abort signal and AbortController. And then on the ambient signal, I have experimented with this. There are definitely cases where it works fantastic and definitely lots of edge cases where it just falls down completely. if we approach it from that angle, we need to be quite careful of those edge cases. They are pretty sharp.

DRR: Okay. And SFC.

SFC: Yeah. Thanks for the presentation. This was, this is, this was good. Having not thought as much about this problem space as, as, as you have and many of the others in the room have, it seems to me like if you're inside a `Promise.all`, you have access to the Promise that was returned from the, all the functions that, that, that you were calling along the way. And, yeah, yeah. So if ins, if one of, if inside I think that's more, yeah, I think something sort of like this. So, so like if you're ins, if one of the Promises fails, then like you can set state on the other Promises in the `Promise.all`. And then and then if we make the await syntax like generate a check that checks the, the field off of that Promise, then that would be a way to send the signal without having to like pass it as an argument. Right?

KG: Yes. And we could have done that. I think that would be basically cancelable Promises. And I think we have gotten to a point where that's not going to happen because we have AbortController. Like KM said, it is the opinion of at least some browsers, and I think all of them, that any cancellation that we get has to be an extension of AbortController, which does not work that way. AbortController actually isn't tied to Promises at all. You could do something like this where instead of `Promise.all` setting state, you have a `controller.all` that cancels its corresponding signal. And that would work. It doesn't do anything magic with await syntax. But it would cancel the signals. The downside of this, like I mentioned, is that any other early exits from the scope wouldn't be able to wait for the cleanup for those Promises.

SFC: It seems like what's nice for JavaScript's might be to do something more like that, but I understand we want to be good citizens when we go into the web ecosystem. So yeah, it's a little bit of a tricky situation.

KG: Yeah. It's not my preferred world either. All right.

DRR: ACE, do you want to take the last response?.

ACE: My gut my gut feeling on `controller.all` is it feels like a slippery slope because that seems to suggest `controller.all` settled, `controller.all` keyed and I, don't want to I can't, I'm not going to enjoy being the kind of like trainer doing classes trying to teach people the difference of when they should use `Promise.all` or `controller.all`. Is my gut reaction here. I can see the convenience of it, but I also feel like it's going to be a really confusing thing for people to learn. So that's, I want to think more about that area.

KG: Yeah. To be clear, this is only an alternative and I'm planning on not doing that.

KG: Okay. Thank you for coming to my presentation. It sounds like people are not opposed to this direction. So I will probably need—I'll try to put something together more concrete. But right now, the addAbortCallback is something that is proposed in the DOM, in WHATWG. Because that's where AbortController lives. And we have not done anything like this before where we sort of took something from another spec and upstreamed it. Not counting TypedArrays. So this will involve more collaboration across specs than usual. I have found it kind of hard to get any response from people working on WHATWG specs, so I'm hoping that the browsers can help out with that some if this is a direction that browsers have any interest in. Also, separately, if we do this, it is definitely foreclosing any other sort of structured concurrency. Any further structured concurrency will be built on top of this. I think that's okay. I think the ideas around maybe using an async context are kind of neat and would be definitely a possible follow-on. But I want to make sure we know what we're getting into if we start going this direction. Okay. Thanks all.

RPR: Thank you, Kevin. You have finished within the time.

### Speaker's Summary of Key Points

* Structured Concurrency is great
* AbortController is here to stay
* I think we have a path towards structured concurrency as a series of independently-motivated extensions to AbortController and AbortSignal, making heavy use of the new `using` syntax
* Safari, at least, is committed to only having AbortController-based cancellation, no new separate kinds of cancellation

### Conclusion

* General support from the committee for this direction.
