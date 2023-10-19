# 28 October, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Bradford C. Smith    | BSH            | Google             |
| Waldemar Horwat      | WH             | Google             |
| Robin Ricard         | RRD            | Bloomberg          |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Michael Saboff       | MLS            | Apple              |
| Istvan Sebestyen     | IS             | Ecma International |
| Nicolò Ribaudo       | NRO            | Invited Expert     |
| Jack Works           | JWK            | Sujitech           |
| Philip Chimento      | PFC            | Igalia S.L.        |
| J. S. Choi           | JSC            | Indiana University |
| Yulia Startsev       | YSV            | Mozilla            |
| Jordan Harband       | JHD            | Coinbase           |

## Records & Tuples update

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-record-tuple/)
- [slides](https://drive.google.com/file/d/1cExHCNFxl8x5tvF63Vt9THnQICBJqlan/view)

NRO: Okay, So this Stage-2 status update is because we want to hear the Committee's opinion about some problems. Just a quick refresher about records and tuples: they are compound primitives, similar to objects and arrays, and they can only contain other primitives. So they're deeply immutable and also they are compared by value recursively. Records and Tuples have different behavior than the other objects because `Object.is` and `===` can be different. And this is when they deeply contain negatives zero: they use SameValueZero semantics, so also for NaN.

NRO: The problem we have is that they do not integrate well with the rest of the language, because JavaScript is full of objects. So we need a way to be able to somehow associate objects to records and tuples. We introduced something that from now on I'm going to call ObjectPlaceholder, just for the sake of this presentation. ObjectPlaceholders are something that represents an object; they are an opaque value that represents the object. They are immutable, and can be put in records and tuples. They're primitives and two object placeholders are equal if they represent the same object. And as I was saying, this is just a placeholder for the final name. We do not have a good name yet for this: the current proposal uses ‘box’, but this has two problems. One is that it clashes with existing boxed primitives concept, when you wrap up a primitive in an object, and we initially didn't consider this. But we found that this is a very big problem every time we talk about boxes. Second, it gives the impression that it should be a generic container. Or maybe it should be a generic container, so that it can also contain primitives and it can be generically used outside of Records and tuples structures? We've heard a few people asking for this, for example to replace a Maybe monad or to mark a value as trusted. And [if you have any idea for a good name, we have an issue where we are discussing this](https://github.com/tc39/proposal-record-tuple/issues/259). And we would love to hear your opinion.

NRO: So with this object placeholder, there are a few security considerations that we discovered while talking with the SES group. One is that ObjectPlaceholders should not provide direct access to objects across shadowrealm boundaries,because ShadowRealms are meant to isolate object graphs and you can only pass primitives across the boundary. ObjectPlaceholders would be primitive, but they need to not be able to expose the objects that they contain when they come from a different Realm. And in order to not break existing iframe-based membranes, used for some security purposes, they should also not give access to objects across iframes (realms created using platform-specific functions). And also, in order to be able to use them in compartments (which is a different isolation level which lives inside the same realm), the function to get the contents of an object should not live on the prototype.
A possible solution that we came up with is to throw when unboxed if they reference an object created in a different realm. So that for example, in this case it throws because we are trying to get the content of the placeholder created in the different Realm. And this would also be the same when using iframe-based realms. However, this has a problem, a drawback and the drawback: this would be the only API, or at least the only API that we found, that doesn't work cross realm. We also tried looking for API outside of ECMAScript, for example, in the HTML spec, but we couldn't really find them. And well, it's not controversial that they should not work across Shadow realms because they would break the purpose for shadow Realms. However, this can be an unwanted limitation when using iframes. So, when using iframes users could work around this limitation by installing inside the iframe the ObjectPlaceholder from the parent realm, so that they all share the same ObjectPlaceholder constructor. And from both from the inside and from the outside points of view, they're always like placeholders created and dereferenced in the parent realm, and so they always work.

NRO: Also other than this manual workaround there, there are two possible alternatives. Alternatives one is to allow objects, placeholders to be dereferenced across Realms but throw, when passing an object placeholder across a shadow realm boundary, and this makes it harder to create membranes around ShadowRealm boundaries because you have to first clone on one side. It has to traverse records twice, replacing object placeholders with something and storing those associations; then pass everything to the other side of the membrane. And then reconstruct the whole thing on the new side. However, this introduces a security vulnerability in existing iframe-based membranes because currently they assume that primitives are safe to be passed and they do not give access to objects. A second alternative is to make the error host-defined behavior, and I know that we try to minimize the things that are supposed host defined, But we could do something like this, so HTML can use a new content security policy to allow or disallow dereferencing across the iframes, so that we can keep existing iframe-based membrane secure.

NRO: Even if host defined behavior might not be considered a good thing, we must remember that iframes can already be created only using custom host functions. So it wouldn't affect the possibility.

NRO: And so, this is the design space we are exploring right now, and we would love to hear your opinions about this ObjectPlaceholder and how to make it interact with realms.

WH: This seems really complicated for a basic feature of the language. I just struggle to figure how somebody would teach newcomers to the language abouts records and tuples, in particular the object storage restrictions on them. So, I'm unsure whether we should be doing this at all. I'd rather keep records and tuples simple and if we get to this kind of complexity I’m not sure it's worth it.

NRO: So I don't think that newcomers would realistically see this complexity around iframes mostly because like, I don't think newcomers interact with different realms.

WH: Newcomers will want to use records and tuples because they’re a nice new feature for value types. They will also want to store objects in them. So far this doesn't seem like the right answer for storing objects inside records and tuples.

RRD: I'm sorry WH. Can you clarify what you're talking about here? Are you talking about the object placeholders? Or the general principle of them interacting with Realms?

WH: Yeah, the problem I have is that in order to understand how records and tuples work you need to understand how realms work. And I don't want that. I want folks to be able to understand records and tuples without delving into the intricacies of realms, which most people are not aware of.

RRD: So, can I ask another clarifying question? So I mean no, it's more of a statement. Those concerns here that we are trying to express here are because we want to introduce this object placeholder, and we need to know how they will interact with Realms. That being said, It's not necessary to understand the Realms, interaction to be able to use them. I'll see you around soon.

WH: You could just stick objects inside records and tuples.

NRO: sorry, could you repeat your last sentence

WH: Without realms you could just stick the objects inside records and tuples.

NRO: Well, no. Our goal with this proposal is to give the stability that you do not accidentally access mutable parts of your tree and that the equality semantics can be easily understood. So like before introducing this object placeholder concept, the proposal just did not support containing objects.

WH: I'm really unhappy with the complexity of supporting objects inside records and tuples. It may be better not to do it.

RRD: So we had multiple discussions on this multiple dates. We, this is something that has been requested by the community around us, and also that we have been discussing in length in SES meetings. I think, at this point, we do not want to get into the debate of whether we want object placeholders to exist or not. We can Work towards having them as a possibility and the main question that we're trying to field right now is interaction with realms and membranes and mostly the conference. So if there is an objection against object placeholder, I'm wondering exactly what it is except for the complexity one because this has been discussed.

WH: It's the complexity — without understanding realms this is not learnable.

RRD: All right. Can I propose we move on from this for now, and try to discuss the subject that we intend?

RPR: Okay. Thank you. KG?

KG: Yeah, sorry. Can you just remind me what the purpose of object placeholders is? I might have known at some point but no longer.

NRO: So, what is the purpose of putting objects in at all or just, why do we have to wrap up objects?

KG: The question is, given that you want the ability to put objects in records. What additional benefit is there from wrapping them?

NRO: Okay, so we would like to prevent people from accidentally going into a mutable part of their records and tuples structure so that we can give stronger immutability guarantees by default. And this also makes equality easier to explain because you can just say that the equality is recursive and I mean in general, it feels Like, it makes it safer to work with those immutable structures because you can trust their immutability more.

KG: It does not seem to me like it lets you trust their immutability more, and the other benefits that you listed seem not commensurate with the level of complexity they are otherwise entailing.

RRD: Okay, so I guess we can. Okay. I can try to summarize this again. So essentially we went through multiple possibilities here that are not discussed in this slide. So that's why I don't want to take too much time discussing this because this is not the main question at hand that we have the main to do. The three main possibilities that we explored so far is either a record into goes, could contain. and as NRO just explained, this is kind of a risk for people using the data structure to accidentally mutate something. ObjectPlaceholders make it explicit whenever we want to look up an object. We think that's a good feature and by discussing and with the community interested or on the record and tuples, there is now kind of an agreement on that. But otherwise we would be to have Symbols as Weakmap keys because we could, instead of having object placeholders, we could use symbols and look them up in a WeakMap, and the other alternative is object placeholders, which makes it possible for us to still keep records and tuples compound Primitives that have that do not have identity, but that they can still contain the object through the ObjectPlaceholder, and therefore, giving them in a way, an identity, but this is only controlled through explicitly having an object placeholder in there. So that's why we had this design. We've been told by the community essentially that if that doesn't exist, someone would come up with something similar using symbols or numbers incrementing, or some things like this, it would get into userland most likely. So we're just trying to address this at the feature level instead of having multiple competing implementations of this system.

JRL: So what I might use cases for, ignoring the changes. Now, if we had a box that allowed us to wrap user data, essentially we could have a graph like imagine a div and inside that div. You have a placeholder that points to some userdata to a parameter to a function or something. So, you have a component that returns a div and inside that div, You have a more data allowing you to box the Parameter allows you to mark explicit exit out of the div that you wrote in source code into a mutable or immutable area that was represented as the user's data to a parameter. It could be like a string, it could be more records, or it could be anything else. The ability to Mark the exit point out of real source code and into Data allows you to attach security guarantees on to what you actually render into a DOM tree. Allowing you to skip things like us, the XSS rendering directly into inner HTML and opening up an xss vulnerability where you accidentally treated user data as something you actually want to render into the inner HTML. That was my original use case that I wanted for it. It's very different now that it's just an object placeholder instead of a box. but I think it's still a useful basic primitive. The representing the data.

RRD: So, I wanted to add on that. It really should be useful. This is effectively not quite the object placeholder is for the and the moment it was designed for that. But that being said I agree that would be useful. There's something that we could be considering to experiment with in userland and probably another proposal later. but again, this is not object placeholders, which is, non mutable in itself. Once you put an object in it, You cannot change your reference to that object. So before, if you think about this user data use case, you wouldn't be able to swap out what's inside. That's just what I wanted to clarify here.

MAH: Yeah, just to follow up quickly on being able to put any value Inside the Box. We recently showed in discussions that it's still possible to do that with an ObjectWrapper in a userland library that holds the value inside it because it can only contain an object so that kind of use case is still supported by this restriction.

JHX: Yeah, my question is, it seems, if One Direction is the box or maybe we now call it objectPlaceholder only contains object reference. If that's true, one use case I care about is about undefined because in many cases we get object reference or undefined. If we have the optional chaining operator, would support that.

NRO: Undefined would be handled as the other Primitives are handled. There is a thinking of allowing something like ObjectPlaceholder created with undefined would return undefined, rather than objectPlaceholder. So that you can select as a leader to use it with external changes.

JHX: Oh, yeah, I think I could follow. This is probably in the group policy.

YSV: I wanted to talk about the alternatives if we do choose to go this way, so I believe it was alternative 1. Alternative one is the one that introduces a potential security issue with older iframes. We are not too comfortable with that. But alternative 2 and alternative 3 are fine for us. So I just wanted to mention that otherwise, a lot of our concerns that we raised previously for this proposal have been addressed.

NRO: Thank you.

SYG: Okay, so it sounded like this is going back to the discussion about why are we having boxes or placeholders at all instead of directly representing objects into records and tuples? And one of the reasons I heard was it's a Big footgun. Otherwise, we want people to explicitly opt in to these mutable exit points. And there's the argument that I think RRD made that if we don't do something, the userland is going to invent something anyway, and that is bad. I'm no longer that convinced that, if the userland invents something here, it is that bad. In the sense that, if you have a use case, where you need to have a mutable exit point, the advantage of having a standardized way to do that, is that we solve the coordination problem among libraries and other apps or whatever such that mutable exit points are always represented the same way. But that complicates things. So if we let them invent it in userland, then they also have to solve the coordination problems themselves. But you remain with this complete picture from the language point of view. You always say that these things are recursively deeply immutable, if you happen to put a primitive there, that is like conceptually a handle for a mutable thing. That's up to you to, you know, Define with application logic. That seems okay, unless the coordination problem is a huge one that I don't really understand yet.

RRD: Yeah, we had a feedback specifically from library authors that the coordination problem could be very annoying to them, but to a greater extent I think we just need to address the point if we get, if we could that in userland. We need to give userland a way to manage memory correctly. And in this case, we would need them to have symbols as WeakMap keys or similar to be able to handle that without managing manually. Memory, the references to do checks from inside the regular intervals. So that's it's not the, it's merciful for the two reasons that you prefer not having them Amusement, which is coordination problem. And even right now, we don't have the tools to give them that so we would need to put SymbolsAsWeakMap keys back on the table.

SYG: Agreed and I thought we were already doing that work.

RRD: Well, no, we are not doing that work because we thought it was an independent proposal. It was proposed at some points, but was rejected when we went towards the object fiber way, because now the symbols as we met keys or Needed anymore. And so we start pushing for that. If I feel the Committee said it was not motivated at that point. Yeah, so motivation for symbols as WeakMap keys died down at the moment. We started pursuing [?] as other object placeholders.

ACE: There is another thing with symbols as weakmap keys would allow user name to do this, but it does have two big issues in my opinion. One is debugging, this makes this much harder. If you console.log, inspect in devtools, you would end up just going to see the symbols. You're not going to, whereas if we have boxes in language that would free up. Devtools to actually, you know, in the same way we show you the hidden-slots you could actually show the contents of the box. So this helps people debug. The other thing with symbols as WeakMap Keys it makes it much harder, because that symbol could represent different objects, depending on which WeakMap you look it up and you could then delete that symbol from the WeakMap and then it doesn't point to anything or you could change the object in the WeakMap. So it's much more powerful, but you lose debugging and now it's harder to reason about what that symbol represents. Because it depends on the contents of the WeakMap now, so I don't think it's as simple as language or userland. I do think that it ends up being a very different flavor of the language to any which way you go.

MAH: Really quick. I would actually say that object placeholder solves the leaking problems of symbols as WeakMap keys. You can create a unique object and put it in a box, and then use that as a WeakMap key. And which is basically an all intents and purposes like this equivalent to a user created symbols without the leaking problem of well-known or registered symbols as for. I just wanted to ask, like, an issue you mentioned is that this is complicated. I'd like to understand why you think object placeholders are complicated or any more complicated than something as simple as that with my keys.

SYG: Symbols as weakmap keys are less complicated. in this sense that it leverages existing concepts. This is more complicated in the sense that it seeks to introduce a Whole New Concept. That you now have to understand to really understand records and tuples. I think, was the point several other delegates have brought up before.

RRD: you will have that issue as soon as you do equality operations on records and tuples, do so, I guess I think that if that's the complexity that they’re talking about, it's already baked into the proposal. I have trouble understanding this whole complexity point, to be honest.

NRO: Yeah, it is a complexity issue. A question of being able to know that you can actually put immutable or linking mutable data from immutable structure link, immutables data from immutable structure.

SYG: I won't speak for other delegates. That's part of the complication for me that the userland thing would sidestep. You can argue that in userland, the user of the records and tuples, if they want to have exit points, have to deal with that fundamental complexity. And for that, I agree, but is it the case that every record and tuple user needs mutable exit points?

RPR: We are at the end of the time box. We do have extra time on the schedule. So you could propose an extension and we can see if the Committee wants.

NRO: Yeah. Would be interested in extension of disposable.

RPR: How much time would you request?

NRO: If we can get, if we can move on from those debates, I think we have five minutes to do a survey on the three alternatives that were presented in this light.

RPR: OK, five more minutes.

NRO: Okay, in that case, then we can focus on the Alternatives and I hear your prevention. And yes, we are okay. We will keep that in mind and probably come back with a debate around symbols as we can have keys. But if we go to the object place all the way we need to figure out those provinces, and there is also a mark on the cube.

MM: so, I wanted to just recap some of the debate around symbols as WeakMap keys. Some of which occurred in plenary and some of which occurred in other meetings outside plenary. The the main thing is that there was a whole discussion thing aside because it has use case, Clearly if we decide we need it, Then this is the use case that justifies symbols as WeakMap keys being an active topic, the problem that was debated back and forth is Are the symbols that can serve as WeakMap Keys only anonymous non-well known symbols, which are therefore, therefore subject garbage collection, or are they all symbols? If they're all symbols, then there is a memory leak problem that I eventually got decided was okay, but then Bradley, is Bradley here? He decided he argued strongly that this leads to a memory leak problem and the difficulty of explaining the problem would be overwhelming if we allowed all symbols as WeakMap keys. If we only allow anonymous non-well known symbols as weakmap keys that's consistent with the current WeakMap GC constraints, but it draws a distinction between kinds of symbols that programmers don't necessarily find intuitive. If we can solve that problem, then I will say, I agree with Shu that symbols as WeakMap keys are simpler because then the records and tuples are the root of what is always transitively immutable, primitive structure and anything else is just userland side tables. So it's simpler as far as language is concerned for the users. And I think that you know, the evolution patterns and libraries can probably take care of a lot of that user complexity. That's it.

SYG: I do recall the problem. Thank you for the recap Mark.

RRD: Can we go back to the Alternatives? And if we can have more expert opinions on Alternatives? I heard Yulia say 1 was bad. That was very helpful. So alternative 1 seems to be extremely complicated. If we have any opinions on alternative 2 or 3, that would be very useful before we go..

NRO: alternative 3 I think is what we were currently proposing, which is to like what I did not list as alternative, but alternative, but this one.

YSV: I can quickly jump in and say that when we looked at this alternative one, sorry alternative two because it's just throws it has relatively simple behavior that can be expanded upon later into alternative 3. If necessary.

WH: What is alternative 3? I don't see it in the slide show.

NRO: Yeah, I think let's call these alternatives to these alternative 1, and the one above drawing, referencing from the realms is alternative 0, just to make sure that we understand what you're talking about. Because I did not have an alternative 3, but at this point we have this solution and two alternatives.

YSV: Sorry, so I meant this alternative 0 I think can be expanded into alternative 2.

NRO: Yes, I'm done. Yeah, so as a minimum solution, alternative 0 may be the simplest for now, but if we have reason and use cases already, then alternative 2 would make more sense.

RPR: Okay. We're at the end of the time. I will say that at the moment. We have a spare 30 minutes in this morning session, and we are also on track to have a spare 30 minutes in the afternoon session, but I think we need to wind this up now, so that ROM can discuss later. We'll let you know.

WH: What I would like to see is an example of how you would teach users a simple way of creating and using these placeholders. If it's simple enough then my concerns will be resolved.

NRO: We will check that the current explainer that we have is up to date. So we can, we can then share it.

NRO: OK, Yes, we weren't asking for concessions on anything. So that's okay.

### Conclusion/Resolution

-

## RegExp `\R` Escape for Stage 1

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-RegExp-r-escape)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfoQmhSpEYYM0spVqg?e=zsP6g4)

RBN: So good morning, everybody, afternoon, or evening wherever you are. I have three proposals that I intend to present today that continue the discussion around some interesting features that I've been looking at the possibility of adding to the regular-expression grammar in ECMAScript. These three that I'm talking about today were late additions. There's a significant amount of work involved in taking the much larger presentation that I had last meeting and breaking it down into something a bit smaller for individual presentations. And I added these because it looked like there was some additional time on the agenda, following the submissions that I had. I understand that there is a possibility of any of these being blocked due to the late addition to the agenda. Hopefully, I can show the value of these enough that it's worth considering advancement to Stage 1 in some of these cases, or can at least get feedback one way or another. That would be valuable for any changes we need to make to look at the possible advancement of these.

RBN: The first one I wanted to discuss today is relatively short. It is a new escape sequence that I'm looking to add. The purpose of this is to simplify matching behavior and get more correct matching behavior for line-terminator sequences. The most common case, you'll see today is someone might write a character class to match line endings and know, right. are like our class. They might use a pattern that's like `/cr/n?`, but that can have some problems and can depend on matching mode as there are more line terminators than just those that can cause incorrect matches in the middle of a character in certain cases. So what we're proposing is a new escape sequence, `\R`, which matches a line ending using these two following patterns. This can only be used inside of Unicode `u` mode or the new `v` mode that's been discussed as part of the RegExp set notation proposal because this requires a custom escaped are special escape sequence that when outside of `u` mode or the mode would be interpreted just as an escape for the letter capital R. So in each of these cases, the pattern that is matched by this escape sequence is defined somewhat differently between whether you're in `u` mode or `v` mode, but they're designed to align with the matching behavior for the `^` and `$` anchors within a regular-expression pattern, the syntax. It's been amusing, the slide is actually on atomic groups, which I will be discussing a little bit later, but the idea is that, if an atomic group contains a sequence that is possibly optional or possibly repeating. It consumes as many characters as possible, and if it fails, then the pattern fails to end, and does not backtrack before advancing to the next token. This has some implications we will get into more with the atomic operators, but the basic idea is to be very clear that we don't try to match `/R` and then if, if we match `/R` and then and then `/n` if that fails, we backtrack and try `/R` and something else. so, new mode. This matches carriage return–line feed, or just carriage return, or any of the other line-terminator characters specified within the Unicode standard. It does not treat the carriage return line feed as a single character, which is the specification in [UTS #18](http://unicode.org/reports/tr18/), but it does match the current behavior of anchor and dollar when matching lines in multi-line in unicode. The mode is much stricter as many of the other capabilities of the `v` mode are also a much stricter interpretation of Unicode, encoding rules in that, it treats a carriage return–line feed as a single character per UTS #18 and would as a result be aligned with `^` and `$` when in multi-line and `v` mode. The `\R` escape would not be supported inside of a character class inside of a character class; it would just be an escape for the letter capital R. Because currently and as we've discussed in previous meetings, the character classes match, essentially a single code points in Unicode rather than match multiple characters as a sequence just crlf then we it's not really supported in that case. This does have existing prior art. It's a fairly common escape sequence that's used in multiple runtimes and engines including ICU, Perl. I have some notes here and links to some additional information about the VMO percent notation and some things we are discussing later for atomic groups. So again, there's not much here Beyond just the possible sequence and I'm seeking Stage 1 so we can go to the queue.

WH: Yeah, this seems like a decent idea, but I strongly feel that this should not change its behavior in `v` mode. It should do exactly the same thing in `u` mode and `v` mode.

RBN: the feedback that I've received from individuals that are participating in the set notation discussion that it would not align with what their intended use case for `v` mode, and it also wouldn't align with the line-terminator matching behavior for multi-line mode and `v` mode. So, our goal is to align with that rather than to break the break, the design that they're intending for the be mode.

WH: `v` mode does not change line-terminator behavior.

RBN: I don't believe that's true. That's the purpose of the mode has expanded since the last time that it was discussed.

WH: I believe we rejected that option the last time we discussed it.

RBN: If that's the case, then that's fine. My primary goal is to align with whatever is supported within `v` mode, and the feedback that I received early on after the last meeting was that the plan was to use mode to support CRLF as a single character. If that's changed I'll align with whatever the direction is.

WH: I have not heard anything about trying to represent a carriage return line feed sequence as though it were a single unicode character. That would be really weird.

RBN: So I can find there's an issue, this repo something that came up elsewhere. can probably then post the link to the Matrix for the issue from the larger RegExp features proposal from last meeting that I plan to move over to the new repo for this that specifically calls out the interest in, having it not match between crlf and match Behavior. I'm perfectly fine with not matching, as long as the goal is consistency with whatever the flags are. So again, I'll back a slide here. The goal is that we are essentially treating things consistently when in Unicode or in `u` or `v` mode so that we’re aligning with whatever the anchor characters perform.

RGN: Yeah, just to clarify, the Unicode sets proposal was hoping to get a CRLF handling / Unicode in multi-line mode, but that is currently out of the proposal.

MLS: Before I get to my issue, I agree with WH. That it seems weird to have you and BMO treat a `^` line feed [?] as a predicate [?]. I just want to clarify. My question is outside of `u` or `v` mode, `\R` is syntax here. Is that correct?

RBN: No, it is not a syntax error. It has existing defined behavior when outside of `v` or `u` mode. `\R` in non-Unicode mode is just the escape sequence that returns capital letter R. Unicode mode has more specific rules around us there because it is the ones that aren't defined.

MLS: Okay. Yeah, got it. I wish that wasn't the case but I understand why.

RBN: There is no one on the queue. All right, I would like to seek Stage 1 for this and ask if there are any concerns.

RPR: So, yeah, so just to be clear, this came in after the deadline, but that just gives people the right to object on that basis. This could well proceed. So, any objections to Stage 1?

MM: I'm happy to see this. Go forward to Stage 1.

WH: I'm fine with Stage 1. I prefer just the `u` mode semantics for both `u` and `v` modes.

MLS: I'm fine with but agree with WH.

WH: The proposed `v` mode semantics are really bizarre, matching or not matching a line feed depending on what's in the string prior to where you started matching. We don't have anything else like that.

RPR: I'm only hearing support. So, if there are no objections, then congratulations. You have Stage 1. Thank you very much.

### Conclusion/Resolution

- Stage 1

## RegExp Buffer Boundaries (\A, \z, \Z) for Stage 1

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-RegExp-buffer-boundaries)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfoSnHYFCoo4mYndTA?e=r0YIxu)

RBN: Continuing the new RegExp buffet, the next thing we have to discuss is a feature that I've been investigating called RegExp buffer boundaries. The primary motivation for this is that when in multi-line mode, the anchors that are generally used for matching the beginning and end of the input buffer are interpreted as matching the beginning or end of a line of input, there is no capability when in multi-line mode to also be able to match the beginning of the buffer without possibly complex. patterns, in some cases using negative or positive or negative, look behind or positive or sorry, look my to look ahead to be able to try to match that. You're actually at the end of the input, and there is no additional content. The purpose of this feature is to provide the ability when in multi-line mode, to be able to also match the start of inputs and the end of inputs. Also, the one of the capabilities that's generally grouped with this is the ability to match the end of input plus an optional line terminator, which is often the case in many text documents that can be processed. Is there may or may not be an ending line terminator and this provides an affordance for that. The basic syntax is that you have a `\A` which matches the start of the input, backslash lowercase z that matches the end of the input, and there is also backslash uppercase Z, which is the end of the input, plus an optional newline, which is equivalent to the expression below. This essentially treats the `\A`, `/z` escapes as the same as the `^` and `$` anchors. When not in multi-line mode, This would require either the u or the v flag just Just as with /, are these existing valid Escapes in non Unicode mode, but are reserved in Unicode mode. And just like with /, are, these would not be supported inside of a character class and also, just like /r, This has a significant amount of prior art across multiple engines as engines as far as support.

RBN: I have a couple examples here that you can see for reference, so we can see an example of this is the same regular expression, pattern matching in various modes. So in the case of matching a bracket foo dollar, we can see that in Unicode mode only, we can match length or the input string Foo, not the input string with Foo and bar separated by a line terminator. In multi-line mode, we can see that it does match in both cases with buffer boundaries. We have the ability to then say, we will always match the input regardless of multi-line mode. And then as result, this secondary case returns false.

RBN: Some other existing, some other examples here, show mixing both using buffer boundaries with using existing anchors for the existing dollar and carrot anchors in multi-line mode so that you can mix and match how you would like to perform your matching so you can determine am Imatching at the beginning of the buffer and my matching in between a line or am I matching at the end of the buffer.

RBN: And the final example shows the trailing buffer boundary would match an optional newline then `/r` sequence. So it matches any Unicode line terminator following the end of the input. And this again was added after the agenda cut off, but I am seeking Stage 1. So there's currently no one that I see on the queue. I'll give it a moment for anyone if they have questions or would like to add any commentary. And then I can ask for Stage 1.

JRL: Yeah, the `\z` that allows any newlines, but still matches if it's the end of the string - is that actually regular? The way I imagined this is implemented in my head is that a forward look ahead for an arbitrary number of newline characters afterwards, which can't be implemented as regular, which makes me think it's not a good fit for adding to a regular Expressions.

RBN: It's not an arbitrary number. It is a single newline at the end of the input. So it checks the current position. And if the current position is a newline, it looks at the following position and checks to see if that's the end of the buffer.

JRL: Can it just be implemented as a union then? Like a dollar and then a newline and then a `\Z`.

RBN: This isn't looking for a newline or the end of the buffer. This is looking for the end of the buffer. That may have an optional newline. So it's not a union. If it was a union it would be a union of `\z` or `\R\z`. Yes, because it's always looking for the end of the buffer. buffer.

JRL: Yeah, that's what I mean. So, I'm just curious why we need the special case that has a slightly different meaning. It allows a newline if we could implement it. If we just had a `\Z`.

RBN: The primary case for this is specifically for the `\Z` is consistency. Many of the other languages that support these buffer boundaries have this capability for matching the trailing line terminator, And it's sometimes the case or fairly often the case, depending on codebase really and your lint rules as to whether or not line terminator is required at the end of file. file. So it can often be the case where you're looking for something, that's the end of the end of the buffer. In a regular session pattern, but you're having to also check to see if the trailing newline. I know that a lot of engines that, for tooling, use sourcemaps, looking for sourcemap comments at the end of the buffer. There's a number of different use cases that would leverage the ability to check for this and having a convenient syntax would be valuable as opposed to having to remember that. I need to write out something like the zero width assertion that I provide is the equivalence here. Because again, part of the goal for the `\R` originally was there mentioned was to provide a convenience mechanism for something that is easy to get wrong, especially when working with unicode.

JRL: Okay, then I have a second point, but WH actually is going to talk about it so we can just go to WH.

WH: It's a little jarring that in order to get the simplest semantics you need to use `\A` and `\z`. I assume that's because `\a` is taken already?

RBN: I believe that's possibly part of the case. It's also the end of the buffer with trailing lime. Terminator, is a fairly common case when parsing files from the file system. you'll tend to see a as of, at least in some of the examples, in references that I've seen that use this, where they'll use `\A`and `\Z` in many cases when parsing files.

WH: I think that having the same characters as Perl and the other regular expression engine trumps any consideration about inconsistency of upper and lowercase `\A` and `\z`.

RBN: Yes. There's the only difference that I found is – and I would have to look at the feature site that I put together that does a comparison of RegExp features – that I think there's one engine where the `\Z` matches any number of trailing line terminators before is e [?], which is not the common case and is the specifically that the general case it was being pointed out as being not truly a regular grammar, but predominant use case is Is looking for a single line terminator.

WH: Yeah, I'm happy with it as long as it matches exactly what Perl is doing.

RPR: Justin's giving a plus one. And without the need to talk.

RBN: It doesn't look like there's anyone else on the Queue. At this point. I would like to ask the Committee for Stage 1.

RPR: Okay, so this was after the agenda of but that just gives people the right to object. Does anyone object to Stage 1?

WH: I support this.

JRL: +1; have wanted this multiple :snare-drum: times.

RPR: Okay, I'm only hearing support, no objections.

RBN: Thank you very much.

RPR: You have Stage 1.

### Conclusion/Resolution

- Stage 1

## RegExp atomic operations

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-RegExp-atomic-operators)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfoUE-yb6OHZGaPtvw?e=mJQWJ8)

RBN: This one I imagine will be more controversial. The final proposal I'm presenting is a proposal to add RegExp atomic operators. So, the primary motivations for this feature or to improve performance of regular expressions that currently might have degenerate cases for greedy quantifiers by introducing possessive quantifiers, and backtracking control. One of the examples that I've used here is one that I encountered recently which is a CVE for a regular-expression denial of service in a language is a package called trim newlines. It's used by Gulp and as a result is seen a lot within the ecosystem. It's one of the constant warnings you might see in `npm audit`, which has been discussed on various platforms for a while. The thing that I found when looking at this is the fix for the degenerate or the denial-of-service case for trimming newlines required completely rewriting the code to not use a regular expression. And while there's nothing specifically wrong with that, a possible change that we could have by actually implementing atomic, quantify, or atomic captures and possessive quantifiers is that this could have been fixed with a single character change. The example I show here is the previous code that was part of the CDE that did a string replacement matching an A [?] either, a carriage return / line feed character, any number of those. Leading up to the end of the buffer, with an empty string. But because it uses a greedy quantifier or regular quantifier, the backtracking becomes exponential, the more characters you have when it attempts to match a character it then – if you have a hundred thousand newlines that then ends that does not end at the end of the buffer, normal matching will then say, okay, we failed with hundred thousand. Now, let's try with 99,999 newlines and see if there's a b, but we've already tested that case to know that that's not possible. So the goal of this feature is to avoid, in this case, 13 seconds on the somewhat slower, older-generation CPU that I tested this on. So, the proposal is to introduce. I see a clarifying question. I used the phrase “exponential” not mathematically, but more figuratively speaking. I don't know the actual growth rate, but it is significantly higher.

WH: It is possible to write regular expressions with exponential runtime. This is not one of them. This is linear.

RBN: I've tested this with possessive quantifiers and the growth might be linear, but with a possessive quantifier, at least the actual performance cost is or the actual runtime cost is almost imperceptible.

WH: This is a linear match both in forward tracking and backtracking.

RBN: Yes. What you're now, you're set in the same position, but you're retrying it for every possible failure case. So you're trying this a hundred thousand times in the case, where, you know that we know as part of writing the regular expression. That's why we're looking for the end of the buffer. So if we see anything, that's the end, the buffer we should stop trying. We shouldn't try this a hundred thousand times because we never see anything that is in a sequence. Characters that turn into [?] line feeds will never see the end of the buffer. If we see something that is not a carriage return line feed. So the degenerate case is anything that is a significant length of newlines, which is what results in the denial of service.

WH: It's still linear in either case.

RBN: That's fine.

MM: I was interested recently in trying to avoid the RegExp denial of service for user-provided RegExp which is a more onerous case, but I figured there was going to be a simple static like linting rules or something for rejecting RegExp that might blow up. And it turns out that from what I could tell from searching around that this is a research topic. There's apparently no good JavaScript libraries that do this well, although there's one that claims to do it badly and there's a bunch of research papers about verifying which regexes don't explode. And this is all very, very surprising to me. So my first question is simply, given these new operators does this mean that code that should not explode can use these operators and be confident that it does not explode?

RBN: If your concern is around user-provided expressions, the user could provide a regular expression that uses these features. But again, there's no affordance for determining whether or not a regular expression would have this type of explosion or explosive behavior. I do want to make a point. There is a member of the TypeScript team who has a colleague from his university that is part of a group that is researching regular expressions, and they had run some tooling that they were using. I don't have more information at this time. But essentially, they were used against the regular expressions in the TypeScript code base, which caused us to make some changes. So, yes, this is definitely an area of research. Currently.

MM: Good. Thank you.

RGN: I appreciate the simple example, but I wonder in this case if it is too simple. In particular, does current spec text require a long run time to process it or is this a question of implementation choice?

RBN: I can't speak to the implementations within, say, V8 or SpiderMonkey and what they're using them for underlying support for the regular-expression engine. The specification doesn't say that this has to be long, but there is an issue with the way the specification text is written is that it's expecting backtracking to be essentially, in these cases, to be a repeated operation. There's no type of heuristic that's used to determine that. The match couldn't possibly be successful to avoid these types of degenerate cases And even if there could, there’s still corner cases where you could formulate a regular expression that would be able to break any of these systems, because the fact that grammar is the regular-expression grammar allows so much flexibility when it comes to optionals so, I'm not sure that optionals, alternatives, repeating – there's any solid answer to whether or not this is a suboptimal implementation. One of the goals with providing possessive quantifiers, is that it gives the developer or the provider of the regular expression control over matching behavior when they know that certain things shouldn't be possible and then can control backtracking behavior because of it. I think there's a clarifying question, but I think it's more of an answer from JRL that it's a suboptimal implementation, but not possible to support all features without using a suboptimal implementation.

JRL: Yeah, it's specifically certain features of regular expressions as we know them are not actually regular and it's not possible to implement those features without using a backtracking implementation. Lookbehind, lookahead, backreferences. And so everything essentially uses a backtracking implementation in JavaScript. It's possible if you were to analyze the regular expression beforehand and guarantee that none of those features were used, because it's syntax, you could switch to a linear implementation, but no one does it currently and that's disappointing.

RGN: If this proposal is adopted and makes it into the language, does that effectively Force implementations to do that? And if so, then is it, is it a non operation?

JRL: No, you can Implement these features in a backtracking implementation.

RGN: Okay.

RBN: WH's comment here is that it's a bad example.

WH: Yes. It's a bad example because the regular expression is linear going forward and then linear going back. It takes O(n) steps to match the 100,000 newlines, doesn’t get to the end of the string, and then takes O(n) steps to backtrack one newline at a time, still not finding the end. O(n) + O(n) = O(2n) = O(n). So you're just getting a factor of 2 by cutting off backtracking.

RBN: That doesn't seem to be the case in the tests that I've run.

WH: So in this case you’d need to explain what you mean by turning off backtracking in the replacement. Does it turn off backtracking just for testing the regular expression at a single starting index and try again at the next index, or, if a replacement fails to find the regular expression at the beginning of a string, it doesn't try again on the next character?

RBN: No, it will continue with the next. So backtracking in this case affects the current index at which matching is occurring, and in the case of a repeated sequence of line terminators it fails to match using a greedy quantifier. It will try to match everything, every newline, until it finishes that match. So it'll match a hundred thousand newlines and then fail and then because of how backtracking works. This is going to reattempt this pattern by grabbing the first 99,999 newlines, and then now it says a newline, which is not a not the end of the buffer. So it's going to retry this a hundred thousand times. and then it'll move to the next character in the sequence, which is a newline. And then it's going to see this newline repeated 999,999 times and does not end in a newline. So then it's going to try this again, so it's more,

WH: That's not how backtracking works. For backtracking, you greedily accumulate as many newlines as possible. You get all the way up to the “b” and find that it doesn't match the end of the string. So then you remove the last newline you matched. You’re still not at the end of the string, so you remove the previous newline you matched and so on. That’s linear both ways.

MLS: But the point is it runs trying to make it [?] after you do the hundred thousand forward, a hundred thousand back. You then advance the string one character because you're not anchored to the beginning of the right expression, and then you do it 999. Yes, 9999, forward back, and it then ends up being O(n²).

WH: Yes. It's O(n²) whether you use `[\r\n]+` or `[\r\n]++`. Each one takes O(n) to run for a given starting index and there are O(n) starting indexes.

RBN: So it does cut a significant part of what happened. So that is one of the advances that only has to perform the operation a single time for all the characters of collections [?]. I have some other examples if I can actually get through, get to them as part of the proposal. So if we want to talk about this more, if we have time or need to extend the time box. I'm not sure where we are on the time box at the moment.

RPR: Seven minutes remaining.

RBN: I'd like to go through the rest of the slides and we can come back to this discussion if that's fine. So, again, the matching is similar to how greedy quantifiers match in that it will first attempt to match everything in a repeated list. If it fails to match, however, it does not perform any type of backtracking and the goal for this is again improved back performance when backtracking isn't necessary. This is something that does not conflict with existing syntax. So it does not require a special mode to use. This would currently be illegal syntax in a regular expression and is again used by a number of existing implementations. And here are some of the examples that I wanted to point out of greedy versus lazy. So a greedy quantifier will try each of these operations. First, probably take the most characters first before failing to find something and backtracking and then take the next set of characters and try. In the case of the lazy quantifier, it will try the least number of characters before it tries to match and then and then grow. Sorry, for the possessive quantifiers. We would see that first. tries all 4 "a"s and then fails and stops the match at that point.

RBN: So the point I was making before about that CVE in the example is the existing code was incorrect. If you change that to add a new `+` and work to utilize this feature the exact same pattern with a hundred thousand newlines followed by a non [?] not the end of the buffer, takes less than one millisecond on this. Same older generation processor.

WH: This makes me suspicious that it's not doing what you're saying that it is doing. It should still be quadratic.

RBN: The purpose of the backtracking control is to reduce what tends to be extremely. a behavior in certain patterns, that is extremely expensive because of backtracking and the use cases where it's used are very there. It's used in specific cases where, you know, that the backtracking can be problematic.

WH: Yes, I know what backtracking control is, but it shouldn't affect this particular example.

RBN: I tested this in the .NET runtime, using the non using a normal greedy quantifier and a possessive quantifier and saw these same performance costs.

RBN: The second part of these atomic operators is what's known as atomic groups. It is a non-capturing group that has a similar behavior. A possessive quantifier within that group backtracking is not performed. The non-capturing group is matched independently of neighboring patterns and doesn't backtrack in the event of failed matches, and it's also a backtracking control mechanism that can be used to avoid degenerate cases in regular Expressions that are a result of backtracking. Both this and the possessive quantifier plus syntax. Are fairly common in multiple runtimes. Perl, PCRE, .NET, Oniguruma, and ICU among others. And again, I have some examples here showing a regular non-capturing group, versus an atomic group. So we can go back for what time is remaining to continue with discussion on the queue.

KG: Yes, so I appreciate the motivation for this proposal, but in line with my comments on previous of these proposals this seems like one of those things which adds a lot of complexity. I think I understand the motivation better, but still – do we actually expect people to use this before they run into the denial of service or is the way that we expect this to be used that people will write their regexes and not realize it has catastrophic backtracking and then someone will file a CVE and then stackoverflow will tell them to add an additional plus? Because that seems like the thing that's going to happen. And if that's the only way this feature will ever be used I'm not sure it's worth adding.

RBN: My counterpoint to that. Is that for this example specifically, without having a possessive quantifier, there is no solution within a regular expression that could avoid this performance cost.

KG: I have the same comment as I had on conditional groups, which is that that doesn't seem so bad.

RBN: As someone who has used a significant number of regular expressions in software, engineering within the JavaScript platform, and knowing the number of people within the community that use regular expressions, the number of times that this has become a problem…It's one of the most common things you see in npm and GitHub audit reports for JavaScript projects, are these RegExps denials of service? It does feel like it's a valuable pattern to implement. It is a niche case, it's not going to be something that is used all the time. It is something that if you are familiar with it, you can be aware of when doing matching. But again, if it's something that isn't in the language, then there are no no Alternatives and still be able to use a regular expression. The only alternative is flattening out the regular expression into user code which is sometimes much more complex to match the same behavior as with a regular expression. So not having this is There's no current solution within regular expressions and having it is a boon to those who do use regular expressions and use them heavily. It might be the case. Yes, that it's something that you add on when you realize that there is a performance issue with a regular expression, and that's not much different than if someone adds a question to the end of the regular expression because what they're getting is what they expected. And so they want to try a lazy quantifier but not having it just because it seems complicated when there is no alternative doesn't feel to me like a good reason not to have it, especially since the syntax here is relatively terse.

KG: That's the best reason to not have things. Complexity in the language is like the main thing we should be avoiding as language designers.

RBN: This feels not so complex to me.

RPR: So I think we don't really have time. We don't want to go in the queue. I don't know if those things in the queue are blocking. Could anyone say if they have a blocking item in the queue?

WH: Mine is. I'm not opposed to this feature, but your description of the behavior of this feature and of how it behaves in this example contradict each other. So I do not understand what it is we are proposing. I would be more comfortable if we could take some time to get a better explanation of what exactly is being proposed here, in particular about which backtracking does and does not happen.

RPR: Okay, so we will leave the time box now, I think Ron and WH I'd ask to to work this out off-line. Is that okay? Aadd more information to the explainer to try to present at a future meeting.

MLS: Okay, we have something else before the break.

RPR: We do. Yes, I really want the full time. And then MLS I do note you have an item on the Queue. Could the notetakers please capture Michael's comments from the queue.

**Queue:**

JHX: Same feeling [as KG], but if you consider at large scale (10+ years), I hope people can finally get it.

MLS: This introduces a 3rd middle counting type. Seems like the semantics may be difficult to reason about.

### Conclusion/Resolution

- Not Stage 1​​ (does not advance)

## Evaluator Attributes

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/lucacasonato/proposal-evaluator-attributes)
- [slides](https://docs.google.com/presentation/d/1YCaUQ72q6TaPLkODr1rSfkr2M8EfGpuK8MHNGaqP9fU/edit?usp=sharing)

GB: So this one was actually, it was brought up by Luca Casonatto, who is here as an observer today from Deno. And the proposal is for evaluator attributes, primarily justified for these WebAssembly importing scenarios.

GB: So to try and give some background with an incredibly readable wall of text: when importing WebAssembly through the ES module integration that we currently only have as a specification for WebAssembly imports. There are various conventions that current WebAssembly loading patterns need to translate into the WASM integration patterns. So for example, how to interpret the meanings of the specifiers that are imported in the WebAssembly binaries, like module imports? What the export interfaces are. So, the namespaces, and the actual runtime conventions around that to get a functional application, which are all things that are being developed and are also in flux and changing. And this is in contrast to JS where there's a very clear execution model that we specified, that is a single kind of graphic solution model that we have full kind of convention and community consensus around.

GB: To give some examples. Many WebAssembly modules have things like an end import that is kind of like just an object that they hook all the standard library functions on in WASI. It's called WASI preview 1. So if you import a WASI module, it's going to have an import of this bare specifier that in the WebAssembly module be seen as a very specified [?] and if you wanted to then get correct WASI execution. You would need to individually map that for every single WASI module in your application, and you would want to. Then the fact is that they share memories or shared between these modules. if you want a different instance, you would want to map it to a different version of the standard library for each one. So you could get a different memory being shared with each one. So there's these difficult… [unable to transcribe]. I don't know how far it is along the specification process, but given the ability for what is happening right now in all this JS, glue code to be brought down into WebAssembly in a way that's going to be compatible with not necessarily requiring a GC integration. And one of the things that this module linking specifies. Is basically like you would in the current mechanism instantiate WebAssembly as a module instance and posting the imported object programmatically basically gives it the way to do that. Using a WebAssembly module imports the actual WebAssembly itself. So use this pattern inside of WebAssembly to get you [?] on the module, it needs to be able to import the module, as an uninstantiated module. So you have two types of imports. You've got a kind of a module import type and instance, import type.

GB: Yeah, that's as much as I want to go into that, now. So to kind of summarize what the module linking proposal requires of the WebAssembly ES module integration is because of the fact that the way that WebAssembly gets its modules from the host in the ESM integration is through the same es module runtime semantics, and with the same Post item potencies, semantics as well. The ability to be able to get an instantiated module would be a new type of post definition for basically, basically, in JS. So if we specify something to allow this, in JS, we're both Paving the way for module linking which, which currently can't be specified in the ESM integration without more work there, and we're also permitting. These are more flexible patterns for instantiated WebAssembly modules, and I will get to an example soon. Sorry. I know that's quite a lot to digest.

GB: The thing to bear in mind is that they are acyclic. So that these kinds of instantiations are kind of uniquely better suited to WASM because of the dual fact that it's acyclic and the fact that we have all this glue involved in the instantiation process that isn't needed in JS until you want to do lots of much deeper reflection stuff. That's more the advanced cases in the standard cases. So that's the motivation. Let me jump to the example actually now instead

GB: So the idea is that you can import a given module as and give how you want that to be interpreted in the host. So that instead of just getting an instance, you could possibly also get a more reflective module type that represents that same module record for that same resource. You're not changing the interpretation of the resource. You're not changing it so that it could now be typescript or something else, but for it to basically change that interpretation. So you could be importing the module type, the uninstantiated module or unexecuted module.

GB: And what that means for something, like the [?] integration is this kind of example, this is an example, demonstrating how one might use the nodejs, WASI core module to execute a WASI binary. So from if you look at the first line at the top you can The default export would be that much that module type served by putting it as a WASM module. You would get the module type back. That would then give you the module as the default export. So you've now got access to the compiled module, but it's not linked and it's not executed and you can, it would be an instance of WebAssembly dot module, which is already specified. And then if you, then you can, instantiate this module and create the specific execution context, which if it's kind of based on a process module model, you can then get that kind of process abstraction, You're getting able to construct a unique standard Library import with the correct memory binding and possible the parameters ition, that would be associated with that execution. And the reason why you would want to do over what is effectively today a fetch and a compiled streaming step, is that…

GB: So at the moment, if you fetch and compile streaming WASM, you're going to need the unsafe WASM eval CSP policy in your application. There's no way to execute WASM without unsafe WASM eval. So, in theory, this more declarative form would open the door to having that CSP security policy in place and get at the other benefit of this. This is that, it's also statically analyzable. It's much better for static analysis than having a custom fetch. When you have a custom fetch to assembly binary. There's also the question of where the URL is located. So there's also a portability convention issue, currently. And also, with a lot of applications as well as allowing these custom binary URLs. It's even things like data URL embedding because of the fact that it ends up harder to find other projects that easily create portable JS portable, JS conventions around WebAssembly and [unable to transcribe].

GB: So, to just summarize again. What the attribute is, it's the namespace interpretation, where you could possibly have instance- and module-style interpretations of a given resource. Instance styles, could also the instance exports reputation and module style could alter the unexecuted representation [?]. It could be linked to the types of definitions of these attributes, so generally, that's that. That would be the kind of scope of what evaluator attributes could define,

GB: And the spec would be basically, splitting the idempotency requirement into two separate steps first phase that would resolve the given resource. And instead resolving a sort of module, if we resolve to some perhaps more opaque resource key, where that resource. Key could then have different module namespace representations or different module representations where the specific exports might have different parameterised executions or instantiations. It does not affect import assertions, but that interaction would need to be clearly defined and then there's a few specification questions about it.

GB: The first one was asking if evaluator attributes is really the right name for something that affects the interpretation of a module, but not necessarily the semantics of evaluation that might be seen as misleading. We're not trying to encourage TypeScript. Sorry to the typescript folks. So, if another name might be more appropriate and then I guess with it, with the general spec, like this, this, that is so driven by a single use case. It's worth also, thinking about what other use cases it would allow and if that's a road that it should go down or not. You could imagine things like a module block, import or a deferred exec or perhaps alternative CSS imports that allow parameterization in future while still representing the same resource. Maybe most of those are bad ideas. But it's worth putting design space there. And then also just from a syntax perspective it should have come before or after the import ocean [?]. The thinking currently is that it might make sense to put the importer assertion first as it represents an earlier phase of the pipeline. But yeah, that's also an ongoing discussion.

GB: So if anyone has any questions about it or if there's anything that can be clarified. Yeah, I went through that pretty quickly actually, but yeah, that's the slides.

MM: So first of all, I want to make it clear that I enthusiastically support this going for Stage 1. I think that the way you've characterized it creates a confusion or between static module records and module instances. And that's a category where I think that WebAssembly actually has this right. And there's other proposals in the pipeline, some of which you mentioned that have that, that will also move forward to having this distinction be correct in JavaScript in a way that fits with what you're doing. So the module blocks as you mentioned, as I see, YSV is going to raise the issue about deferred modular continuation, which I'm not sure is in the same category, but we're thinking about and the compartment proposal, static module blocks in the modules and static module records are already known be convergent. The key thing here is that what you're talking about is a genuinely static concept like module blocks are, where it contains no more information than in the JavaScript case, than one would get from compiling the source in the absence of any linkage information. All of the linkage initialization happens in a later phase. And so it's not that they're having an import with extra interpretation on it. It's that you're doing something that's an earlier phase than an import, which would produce a link and initialize things. So we need to coordinate between this and the static module records of the compartment proposal and the module blocks proposal. Because I think that there's a concept common to all of them that is struggling to get out.

GB: Yeah, I'm sorry. I haven't kept up on the compartments proposal. I will check up on the static module there because it would be interesting to see what that convergence is. But yeah, that's not something that I have researched yet. Unfortunately, there is still that distinction, though. That the WebAssembly modules in acyclic and also having an existing specification in JavaScript for this unexecuted compiled but unexecuted reflective type that actually came first. It does put us in a kind of a unique position to be able to get a handle on that. Whereas, for JavaScript modules to support their cyclical nature. You generally want that to be a two-phase process where you can first link the module and then separately execute them. For example, module blocks carry their linkage with them in some things. So, there are these different kind of internal –

MM: No, module blocks do not. They do not carry with them – we clarified that earlier when module blocks are being presented. I asked about that specifically because there had been confusion about that. Module blocks are purely static and unlike that, not carried linkage with okay.

GB: Yeah, I sorry I was new to that discussion so that's that's great to know that they carry host content. Sorry, definition context, that determines their initial resolution.

MM: But what do you buy? What context was that? Can you please clarify?

GB: Any relative URLs are relative to the URL that the block was defined in.

MM: I think the linkage context, the same static module record can be linked multiple times in different contexts. So, to start module record, really should be no more specific than the source code that was compiled into it as a separately compilable in a way that supports separate compilation. so, I think that I think they should be independent, because of the URL context and that way that I'm not sure about. I agree with you about the cycles, though. That's certainly a difference that we need to wrestle with. Yet, there's there's a lot of cross-cutting concerns.

GB: So, I think having those discussions is key to making sure these things work together. Well, I'll definitely do some more reading compartments. Yep.

MAH: Yeah, just quickly. I believe that the relative URL part and how resolution of those with module blocks would happen is still something that we need to figure out. It's not clear what exactly is carried by the module block definition when it’s sent, and how that's resolved on the other side.

YSV: I wanted to raise an issue that I put on the repository, which is when I read through this, I noticed that there are a couple of overlaps with the goals of different module evaluation, specifically splitting, the loading of modules into two parts. In deferred module evaluation we do the fetch, compilation and linking eagerly, whereas this only does compilation eagerly if I understood correctly. However, they are similar in that they both evaluate at a later step. So, I've been working on the side on this proposal a little bit and one thing that come across is that in fact to really Bridge the compatibility gap between userland libraries that implement modules and es6 modules, is there are implemented in browsers, would be exposing the module loader system itself and allowing people to write loaders. This is tricky and GB pointed this out on the issue and I am very interested in seeing if we can find a common abstraction that would work for both cases. That could be this static record representation that then users could decide how to represent. For example the way that we do it in spidermonkey is we replace the placeholder name space and what we could do if with a custom loader is take a module record that's kept by the static loader, a module loaded by the custom loader and replace the placeholder. So if there's common abstractions that we can share because we do have a known pain point in JavaScript modules right now. I would be really interested in seeing how this proposal can evolve.

YSV: Additionally, GB you made a great suggestion that maybe we could use evaluator attributes for deferred modules. Think that's also a direction that that proposal can go and if we don't want to give so much freedom.

GB: Yeah, there's certainly not a shortage of things to consider and that is what makes this stuff difficult with these wide design spaces, but, certainly, there are a lot of crossovers and in having these discussions. Yeah, seeing these concepts of things like having a deferred module attribute kind of come out of the discussions that we've been having has been really interesting to see what could be there. Because of the fact that in this model, it's these different representations of a module. You're getting a kind of a higher-order representation of a module, and there could be, you know, different types of higher-order representations of a module that you could then link into our graph. One concern with the loader hook, smog [?] model, as I mentioned in that issue is you get down to that kind of fine-grained linkage that we see with Node.js [?] VM Source, text module record, which exposed and right now there are some users who are using that quite extensively and it's difficult for users to get the usage exactly right. It requires a lot of understanding of module linking and concepts to be able to use those source text APIs and get cycles right. And things like that. So there is a balance to be found between the perfect abstraction and the most usable abstractions as well.

DRR: Yeah, I think that, you know, I'm probably not the only one here that feels this way. I think I have a hard time understanding the use case fully. I see some syntax. I have some ideas of what I should do. I mean I can kind of piece things together based on some of the slides. It sounds like there's some sort of representation of a module that can be instantiated with Maybe some parameterization, right? I don't know if I interpreted that correctly, but it is. It is hard for me to understand, you know. The direction here. And, you know, I'm willing to give a little slack and say, well for Stage 1, like maybe others have a better understanding here, but, you know, it is one of those things where it's like, adding syntax to modules and that already feels like a very high cognitive overload place for people.

GB: Thanks for bringing that up. I completely agree. It should be crystal clear. I can try and go through this example. Again, if it would help. and So currently in the ES module integration when you import from WebAssembly you are executing the graph like any other module. You're executing the dependencies first, then you're executing the WebAssembly module. And then you're getting back the exports and in doing that, you're also resolving the imports of the WebAssembly module using the same host resolver, including very expressive higher resolution, relative resolution, and one of the issues with the WebAssembly integration for that. is that these conventions in WebAssembly binaries often simply don't match up with the conventions that we have in the JS world. And instead what you see in WebAssembly usage is the direct programmatic calling of these WebAssembly modules, where they base it your, which is basically just the the WebAssembly to instantiate code where you can pass it, the WebAssembly module and then the the second object is the map of the imported specifier names to the modules that they that implement. These effectively, the module name spaces for its imports. So you're parsing the imports to the WebAssembly module when you're instantiating it and executing it in the same step here and having fine-grained control over, setting the imports. Whoever assembles the module in a way that doesn't require to perfectly align with the host module system conventions. Where in JS, we assume it's all URLs, and relative URLs end up being useful for WASI, for example. Because WASI often represents the process model of having something? That is like a traditional binary. And when you run that WASI start, it's going to sort of run the binary from start to end and go, by saying you, it's the time that starts. as if the binary is done on its work already, whereas if you're importing a moment show, you don't necessarily want that execution during initialization. And so it's basically just defining the default export when importing as WASM module to be that compiled WebAssembly.module. so that you can do this this more kind of fine-grained instantiation using the existing WebAssembly APIs and paving the path that current WebAssembly execution already takes, which is the standard instantiate custom programmatically instantiate calls and that encapsulates the extra wrapping that the web is coming in.

DRR: Okay. That gives me some context. Okay. Thank you very much.

SYG: The last time this came around, you know, the reason we have assertions at all instead of just a general class of annotation that can do both the asserting and the reinterpretation is there were objections to having reinterpretation attributes and back then, I think it was a more General reinterpretation. So I appreciate the rescoping of this now. Also, this kind of thing affects interpretation, but not semantics. I have some quibbles with the word choice there, but I'm just wondering about the opponents in the room who were against evaluator attributes last time. Does this rescoping address your concerns? I don't quite remember who the opponents were last time. I think JHD was one of them.

GB: Yeah, and possibly BFS, I believe I did discuss it briefly. I'm not sure. I'm sorry. I don't want to assume but yeah, so the fact that it's not altering the underlying execution, semantics the resource that is being targeted. It's not altering the way that the execution model runs. It's just either reflecting that execution model at a higher level or altering. the way that it's represented through the namespace, exports, possibly. but before, what would be worth checking,

SYG: Yeah, it's satisfactory to me, but I really didn't have too much of a concern anyway, but I just realized maybe those folks aren't actually in the room due to timezones. So I would support this for Stage 1, but, in the interest of not putting extra work on you, if there's just categorical objection, I would like that resolved. Certainly before Stage 2, but hopefully before the end of the meeting if those folks show up.

MM: SYG, if I understand your question, I'm one of those people that did object and would object to something that changes the interpretation. That's why I don't like this framing of the API, but I think that the actual goal of the API is that the interpretation isn't changing. What's different is that you're taking the interpreted artifact and catching it in an earlier stage. You're catching it at the stage before, it gets linked and initialized. As opposed to saying the same text could be seen as a source code in one language or another language. That would be a change of interpretation, which would be a security nightmare. That's not what's going on here. And I hope the proposal changes. So it doesn't doesn't seem like that's what's going on here.

SYG: I see. Thank you, MM. I was mentally framing it as…This comes back to my comment about the quibbling with the words here. I think this will be framed as something that doesn't change interpretation, but representation, but your framing, Mark, is even more precise in that it's really about the staging of the processing model.

MM: Yes.

SYG: I'm okay with either if they solve the use case at hand. But yes, thanks for your feedback. I'm glad that this kind of solves it for you.

RPR: Yeah, three minutes left and only JRL on the queue.

JRL: So, I'm concerned about how you teach this to users who are trying to use WASM. I remember from conversations, when we were discussing assert, that a user would be able to specify import, whatever from [unable to transcribe] assert type equals WASM and that would give them a WASM binary. And I don't understand how we can teach people that they would get it. Great. Why is [unable to transcribe] things by specifying this an evaluator or what? And even evaluator could be here for anything besides WASM, so I'm not sure why need both evaluator and assertion and maybe it's just the way that it's presented in this API currently. Maybe this is exactly what Mark is talking about. I just don't understand what's going on.

GB: Yeah, it is. Unfortunately, verbose in that would be import X from specifier asserts type wise. We could potentially call it, you know, as well as a module if we could unify on a generic, you know, kind of module definition of what it means to have as module it could be "as module", if we could more strictly define that. But for now, we're calling it a module. So yeah, you would say import action, specify a certain type of WASM as WASM module to be able to get this kind of compiled. But linked on instantiated module form that would basically just be the, you know, the spell to cast to load some WebAssembly and it would effectively become a standard pattern for that. Because it has these benefits over fetch and compile streaming with CSP. And the import assertions potentially have some, I mean, we still need to decide if – there's some interesting CSP questions that are kind of unrelated so I don't want to get into that now.

JRL: Okay, I can bring it on GitHub. Instead. We could have a better discussion for sure.

GB: Thank you. Please do.

JHX: Agreeing with JRL. And one thing I want to say. Yeah, I think import assertion and imports, that, they understand that they their reason we need to - it's very hard to make the average developer understand them and use them correctly. So, yeah.

RPR: Okay, we are right at the end of the time box. DRR, do you want to go quickly?

DRR: I'll try. So there was a bunch of dissatisfaction around being able to import CSS in the last, you know, two months or so, because mainly bundlers have their own interpretation of what it means to import a CSS file and browsers have a different version of that. And, you know, I think it's hinted in the presentation that you'd be able to kind of hint to an implementation which one you'd want. You know, bundlers have said, Well, we might look at import assertions, but then there's clearly an overlap there where like one can do. Well you may not need both right? Like in a lot of these slides, you have both but you may not need that in every case because the evaluator attribute might just say, you don't, you know, this is the thing I expect to get, you may not. The assertion, I could be wrong about that, but I don't think that this is a Stage 1 blocking thing. It's just sort of like something to discuss further.

GB: Yes. I just wanted to ask if anyone doesn't have any immediately blocking concerns. Is this something people would consider putting through to Stage 1 and then we can consider the continue these discussions.

SYG: Again, I'm comfortable with Stage 1, but given that JHD and BFS don't seem to be in the room, if you could confirm with them offline or something and then communicate that back, that will appreciated. Sorry that the thing that does not change interpretation, but lets you get representations of the thing at different stages of processing is a satisfactory direction

GB: JHD has been commenting on the proposal already, so he's aware of the details. but we can, I could say that we are potentially conditional on them, not having any blocks. Does that sound like a reasonable way to put it down?

SYG: Sounds good to me.

RPR: Okay, any objections to Stage 1? Any support for Stage 1?

MM: I enthusiastically support Stage 1.

YSV: I also support Stage 1.

RPR: All right, we've had no objections. So congratulations. You have Stage 1. Thanks so much. All right. Thank you, everyone.

### Conclusion/Resolution

- Stage 1

## Agenda deadline rule clarifications

Presenter: Rob Palmer (RPR)

RPR: So about a week or so ago. There was a question on adding topics to the agenda for these meetings. So meta-process thing. And as part of that, the question came up, I think, from Ron, about the meaning of what it means to submit something to the agenda, as in, have you made the cutoff in time or not? And originally the language I think was not entirely clear what it means to get something onto the agenda. The key question is, is it okay to Just get the PR open, to raise the PR in time, or does it actually need to be merged by the deadline? and at the moment JHD clarified that both, we both talked about on the TC39 delegates Matrix Channel, and it was clarified to say that an [un-merged PR still counts for the purposes of being added](https://github.com/tc39/agendas/commit/d2ef80976759f763eaf621b851479753e29b081c#diff-0b87e2fc7748588525a23909f36542c8244da7bf86fe1e93ee9715e549f7944b). You can see the wording there, The wording explicitly says, "Note: an unmerged PR counts as added for the purposes of this requirement". So we're raising it here for awareness. And so people have the opportunity to discuss or to object. If you think instead that we should say, "no people must have merged by the deadline". I think as part of the explanation for this. Normally PRs on the repo, to get submitted to the agenda, gets merged fairly quickly. I would say, normally, within 24 hours and as we approach the deadline there is even more attention on it. So things generally get merged within a few hours. So I think that under all practical purposes, any PR that was open but not merged at the deadline, would ordinarily get merged within that. The next 12 hours. And so if anyone has any questions – I see that there's SYG on the queue.

SYG: Yeah, this can’t all delegates already push to master? Why not just do that? Like who's the PR workflow for?

RPR: I think it's mostly just to protect the integrity of the document. So people don't make accidental mistakes and people obviously are putting things on it in an order. So it is appropriate for someone to check that things go order

JHD: So, I can speak to that please. The reason that we've retained ability to push directly to master is because folks like the convenience of it and the reason that we have, I don't know if it's required or preferred, pull requests for some kinds of changes is because it notifies people in a way that pushing a commit does not. So generally speaking, if you're adding something to the agenda after the deadline, that's the point. When people may have looked at it for the last time, the convention we followed is to use a pull request for anything like adding a new item or, you know, changing whether you're asking for stage advancement, things like that so that people are aware of it. Having the PR merged is not a requirement for people to be aware of it. That was the point of the deadline - so that people are aware of it in time to be able to review it. So the way we've always treated it in the past - the actual precedent followed - is that as long as people are notified before the deadline, then the requirement, spiritually at least, is satisfied. So that was why I went ahead and updated the requirement in the agenda to note that the PR doesn't have to be merged. So you're correct that someone could just merge their own PR, but sometimes there's merge conflicts and as Rob said, sometimes there's a few of them open within 12 hours and they all usually get landed. Does that answer your question?

SYG: Yeah, I'm fine with the clarification. I'm just wondering who is actually using PRs and that is not a change through requirement to start using here.

JHD: Everyone's supposed to be using PRs for anything after the deadline. You don't have to use a PR before the deadline for sure, but a lot of people have chosen to do so because it notifies.

USA: Okay, and JHD does that address your topic as well?

JHD: Yes.

JSC: yeah, I'm just asking whether just linking to slides when you say "slides later" earlier, does that need a PR or can it be directly committed?

JHD: I personally think that is okay? Just go ahead and push it up. If you think there's something in the slides that people would pay attention to, it's not obvious, something surprising than maybe use a pull request - otherwise, go ahead and push directly. I don't know if the room feels differently; that's my opinion.

RGN: Yes, as JHD said, PRs are responsible for notifications in a way that pushes to master aren't and just as a personal preference I think anyone who is going to push to master. Would ideally open a PR and then immediately. merge it. Which still results in the notifications and the same final state.

JHD: So, the challenge at that is, I mean we all have a personal preferences of git that are not necessarily universal, and mine are that git history isn't very clean If you use the merge button on the web - I don't have to get into that because I know not everyone agrees that's important, but I usually use a fast-forward merge when I land all the PRs - it’s the same thing with the squash-merge rebase-merge feature on GitHub, I have reservations with so I also usually manually squash and rebase and then fast-forward merge over it. And that's something I don't think other people should have to deal with, which is why I usually just do it when I'm landing the PRs. So it's easier for me, if you make a PR and leave it up if you want the notification rather than if you just make a PR for the purpose of merging.

RPR: Okay, I don't think we need to talk more about the details here. I think we've achieved awareness. MF said he thought it's painfully obvious that a PR was already sufficient. So, we've made sure that this is formally recognized, but of course, with all of this, if anyone has more suggestions will always be welcome to talk about this and in future, I think. So. Thank you for your time today.

## Function Helpers

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-function-helpers)
- [slides](https://docs.google.com/presentation/d/1MShu-uA_gz1LDpmlckQ9Wgsb0ZLylYV0QWZBnsTAOGk/edit?usp=sharing)

JSC: I’m going to go through the slides quickly. Everyone can read the details that they want. There's also an explainer.

JSC: This is a proposal for Stage 1. The concept is that there are a lot of common useful helper functions that are defined a lot, used a lot, downloaded from npm a lot. We should standardize at least some of them. So I'm seeking consensus for Stage 1 that standardizing at least some of the helpers I'm going to list here is at least worth investigating. It is not a proposal seeking to standardize every imaginable helper function, just some selected frequently used ones. Choosing *which* ones out of the bag that I'm going to present, I consider to be bikeshedding for before Stage 2. Stage 1 would be “worth investigating” and we would decide which ones and whether to make them static methods or methods to the Function.prototype.

JSC: Yeah, some people might have philosophical questions. Like: why bother with this at all? You know, like having a lean super minimalist core versus having batteries included whatever. I personally think that at least some of these helper functions deserve to be in the language. They are all really frequently used—maybe not by every single particular programmer—but I think everyone might find use for at least some of these functions sometime. They're all frequently tried and down trodden cowpaths that may deserve to be paved over.

JSC: Everyone needs to manipulate callbacks. This isn't a matter of like, oh, we're trying to make things better for hard core functional programmers. I think that everyone needs to manipulate callbacks and these are pretty simple affordances for doing them.

JSC: Why can't they just define them on their own? It's a matter of ergonomics. When we standardize it, we can readily use it in the context of the developer console or a script instead of pasting a definition, or as a lot of people actually do: download or bring in an external dependency that has this little function.

JSC: I'd also argue that it would improve code clarity. A lot of these functions have all sorts of different names. Standardizing one name would be great. And—even for simple functions like identity/constant, whatever—a lot of people, myself included, think that a standardized name would be simpler than an inline function Definition like having one word versus having three tokens or whatever.

JSC: And unlike new syntax, these are all API. This is all pretty lightweight stuff, lightweight ways to improve the experience of all developers. So like that picture there. I think that all of these are cowpaths and at least some of them deserve being paved. This isn't syntax. It's all API. They are all possibilities. And like I said earlier, choosing which ones to bring forward in this proposal would be, bikeshedding before Stage 2. we could punt some of them to separate proposals, if they are really controversial, whatever I'm asking for Stage 1, whether it's worth considering standardizing a bunch them. I'm going to go through these possibilities really quickly. Remember they’re possibilities.

JSC: For instance, this is a function composition thing. You'd put it as a property on the Function global object. It'd probably be a static method. Lots of people use this. There's plenty of real-world examples on the explainer. All of these have real-world examples that I've looked for and found in the wild. And in this case, this would compose functions. So that you give this function a list of functions and it creates a function that applies, whatever argument it gets to the first function, then the result of that to the second function, X, et cetera. Yes. And there's also, there also could be an async version that would support promises and always return a promise. The reason why this proposal calls it flow is because this composes from left to right, which seems to be the preference of most JavaScript developers rather than the right to left compose operations that you see in like hardcore functional languages that resemble mathematics. We can quibble on the name. TAB floated the idea of having a pipe function too. Yes, there is a pipe operator. This is different. I am one of the champions of the pipe operator proposal. As many of, you know, there's been a lot of community feedback from developers who have desired standardized, unary function application and are unhappy with the topic syntax the placeholder syntax that the operator that move forward to Stage 2 at the text style pipe operator. They seem to be made happier by the presence of a standardized pipe function. I don't really have much of an opinion whether to include both flow and pipe is flow, except that its first argument is the input to the things. So pipe is an application. Well, flow creates a function, but either way, you're also including a list of function callbacks and then sequentially applying them to something. It's just a matter of whether you're doing it now or later.

JSC: There's also other things that people use a lot: constant & identity. Yes, they're really easy to make with arrow functions, but a lot of people, myself included, think that things can be clear if you're trying to emphasize what you're creating, you're creating a function based on a value where your using the identity function as like a default, default callback or whatever. Lots of people do this. You can find plenty of examples of people reaching for identity as a default callback that gets called on every instance, like in Cypress. Whenever you're using a predicate as an optional parameter and the predicate you're using identity as a default predicate card, or whatever.

JSC: The noop function is similar. Same thing. This is actually used quite a lot too. It's a single function that always returns undefined. Twitter uses it, Three.js uses it, WordPress uses it. Lots of things use it. It's in jQuery. It's in Lodash. Lots of people use it.

JSC: Once. This creates a function from a callback that makes sure the callback only gets called once no matter how much the new function gets called. Lots of people use it here. Meteor, Cypress – see examples.

JSC: Debounce/throttle. Very popular too. Lots of lots of end user-facing HTML. Your HTML-manipulating code uses this to manipulate how often a function actually gets called based on some event or something like that. They're both useful. There have been plenty of articles written about why both are useful. I think we should consider adding them to the core language.

JSC: There's something called `aside` or `tap`. It's just something that creates a function from another function, that that makes it like, it runs it as a side effect. And then it returns the original input and that can be useful for debugging or it's like interposing some sort of side effect like printing to the console or something in the middle of the nested statement or a long chain or something like that.

JSC: And there's also unThis. People also call this uncurryThis, callBind, whatever. It's just basically converting a function that uses the `this` binding into a function that doesn't. The first argument of the new function would be plugged into the original callback’s `this` receiver. Again, these are all just possibilities. I'm asking for Stage 1.

JSC: I’d not like to argue over, which one's get included in this proposal before it advances to Stage 2. Yes. I know there can be some philosophical questions like why bother with this at all. It's easy to define in userspace or or bring in from libraries or whatever, but I think that the usefulness, the frequency, and the benefits of not having to implement these yourself are pretty good. They're lightweight, they're easy – which goes both ways – to define a new userspace, but they're also not that big of a deal to add to the language either. I think I would argue that they can improve code clarity. I think we should consider at least some of these in the language. So I'm asking for Stage 1, whether whether it's worth investigating, standardizing at least some of these to put into Function or Function.prototype. And let's look at the queue.

KG: Looking forward to bikeshedding helpers to include.

JHX: I support this, but some functions seem maybe not necessary. But, yeah, I think it's a good proposal which can help developers.

JSC: Okay. Thank you. you. Next up, CZW.

CZW: Yeah, I'm just saying that I found many of them. There are two helpers that can be replaced by arrow functions with less characters to type. I don't find building these into the language would help ergonomics. but that's the type of question about what functions to be included in the proposal right now?

JSC: I'm arguing that including which functions to include that question would be bikeshedding for before Stage 2 and Stage 1 would be that: It's worth investigating like just adding helper functions function. Like some of these are one-liners, some of them aren't for the ones whether to include the ones that are, I would say, I'm arguing right now is a pre-stage-two concern, but as for your observation that it's actually shorter, some of these are actually shorter if you use Arrow functions. While that's true, when it comes to length, I argue in the code Clarity, heading on this on the side N Slide I'm showing right now that that a lot of people, myself included think that it can be clear if, if we Just use one word rather than three words to create it. So yeah, like The Arrow function might be visually shorter, but me, it's actually conceptually longer so to speak. It's more words rather than just one word or or to it. And as for constant, like, for instance, it makes it clear, you're creating a constant function for instance, but we can bikeshed over that in the future.

WH: Everytime you use `x=>x` you get a new function. Whereas there is only one `Function.identity` function.

JSC: Yeah, Yeah, so there would only be one identity function, identity would not create a function. It would be the function. Whereas, like for instance, constant would create a new constant function.

WH: I'm saying that's a reason to use `Function.identity` instead of `x => x`.

JSC: Oh, yes. That is also true. It also avoids allocating our creating a new function every time that is also true.

YSV: I'll be quite direct here. I will block this from Stage 1 because it does not have a problem statement. So the statement that there are lots of libraries that are popular and those functions are common isn't enough on its own to satisfy the problem statement requirement of Stage 1. There are even from what you've presented there are some groups that are worth investigating, for example, flow async and flow and maybe even pipe and pipe async. Those can be seen as sort of belonging to the same category of problem. However, they're very different from constant and identity which are very different from other parts, from other helpers that you've proposed here. The reason why I believe it's very important to tighten the problem statement here is because later on when we're reflecting on this proposal and you know, things can change. To make sure that we don't lose track of which problem statement we are trying to figure out - which has happened with proposals - I think it's very important that we are clear about what we're solving for users. So I'm not against the idea of introducing function helpers, but this should be split up into tighter proposals.

JSC: Okay, that's super fair. I am committing to splitting this proposal up. I'll keep this at Stage 0 like and archive it in the TC39 organization, but I will re-present, probably one at a time several tighter proposals probably in the future. Probably flow and flowAsync will be first. Does that satisfy you YSV?

YSV: Yep, that would be fine and I'm looking forward to looking at those proposals.

JSC: All right. Thank you YSV.

JHX: Yeah, I think the move we should maybe make to be sure, but I guess it's for the program. Anyway, I think maybe we can improve the readability of this part.

JSC: Yeah. Well, I understand what you're saying JHX. I think YSV's concerns are reasonable. I sympathize with her for tighter design spaces and she says that we can examine all of these just separately so that we can make sure that we don't lose focus, focus at each stage. I think that it would be like what RBN is doing. We can have a bunch of proposals with shared theme of functional programming, although I'm also trying to emphasize the universality of the usefulness of all these, not just hardcore functional programming either. But I think that it's okay to split this up. So, I will present all of these sometime hopefully, but I will probably do this one at a time. I think it's okay to have multiple proposals with this, but I do see what you're saying, JHX. All right, next up, CZW

CZW: Yeah. My concern is very similar to YSV's and it's very vague and I would like it to be clear and in separate proposals.

JSC: All right, sounds good. I think that separating them sounds like it would satisfy you too.

JSC: I will remark that once. So, although this is bike-shedding, once, bounce, throttle, and aside are also all prototype methods. It's a pipe, flow, identity constant and noop, which would be static methods and functions. The rest are currently prototype methods though. That's of course bike-shedding. So it's not just on this. Does that satisfy you JHX?

JHX: It's just a simple question about why it's just `uncurryThis` that's a prototype method.

JSC: Are you asking about `unThis`, and `debounce` and `throttle`. Also?

JHX: Yeah, so yeah, I'm not sure. What's the rule behind that is.

JSC: So is whether it's acting on a single callback. I'm just following the precedent set by bind and call. Versus pipe and flow which acts variadically on many callbacks. I don't have a strong opinion either way though.

JHX: Okay, we can discuss that in the issues.

JWK: Debounce and throttle cannot be specified in language, unless we add a host hook for it, but the idea was explicitly rejected by the engine when I tried to propose Promise.delay. Maybe you should remove those time related functions.

JSC: All right. So since those will get separate, those two will get set up separate proposals. We can examine that there when I do that. I really would appreciate it. If you could, I'll check it out too. When you try to propose, promise that delay, if that's a hard block from the engines, then that would be great to know them. Looks like SYG giving a plus one. All right.

SYG: Yeah, I would save you some time.

JWK: I have some more concern about adding time to the language, it might violate SES requirements that allow the program to observe time.

JSC: All right. That's yeah. Okay, good to know. We'll take a look at that. But since SYG was giving pretty good, pretty strong signals that he would block debounce and throttle in the core language. We'll probably prioritize that way low compared to everything else I’m bringing up now. I'll look into this more.

JWK: When I write code in TypeScript, I want to make sure my code exhausts all possibilities of a variable and if every type possibility is exhausted, the variable will become type `never`. I wrote this function in my code base manytimes. If I add a new possibility of this variable, And it will no longer become type `never` and have a compile error.

```ts
let x: 1 | 2 = 2

if (x === 1) return
if (x === 2) return
unreachable(x) // x is type never

declare function unreachable(val: never): never
```

```ts
let x: 1 | 2 | 3 = 2

if (x === 1) return
if (x === 2) return
unreachable(x) // compile error: x is type “3”, not assignable to never
```

JSC: Okay, to be honest, I'm a tad bit confused. Are you talking about all of these functions or which function are you still talking about? Debounce? Throttle?

JWK: No, I'm talking about unreachable.

JSC: [If unreachable is a new function, we can talk about it on a new issue](https://github.com/tc39-transfer/proposal-function-helpers/issues/21).

SYG: Looked at web compat risk?

JSC: The answer is, no, I haven't looked too hard at the names yet. And whether there's web compact risk with the names I chose.

SYG: Given that these are kind of directly motivated by being very popular NPM packages. At least we have a starting point there to see how they install these methods to see if there is a risk.

JSC: As far as I can tell, none of them monkey patch any intrinsic prototypes; they're all on like the jQuery wrapper objects or the jQuery global or they're on like Lodash's `_` or they're imported from a module. I have not found any intrinsic monkey patching in the real world examples that I brought into the explainer. I can tell you that.

SYG: All right, that sounds good.

CM: So one of our meta concerns is always about adding complexity into the language, into the spec, and how hard it is to learn as the body of stuff that is in there gets bigger and bigger. So I think it’s a little weird to me to be having things that are easier to just code, easier than the cognitive overhead of learning that they're even in the language in the first place. Some of the things like the uncurryThis, you know, there are subtleties that actually having somebody make sure you get that right has some value, but something like `identity`, it seems like you're adding complexity for relatively small incremental benefit and I don't think it pays for itself. I think this goes hand in hand with the comments that a number of people have made about unbundling this into separate proposals, because I think some of these things could be quite useful and I think some of them would be a burden.

JSC: All right. Your point is appreciated. Thank you CM. I will just say that there is a meta level philosophical level thing whether developer ergonomics is reversed adversity and the burden of like, adding a function to the core API. Like, how much, how much is this? Or that? How much is the benefit to developer ergonomics like or two or being able to For this thing, easily versus having, having to remember that the name, the standard name, for instance, of this thing versus directly defining an arrow function. Not that including this into language will force everyone to not use the arrow function version, but a lot, a lot of people do think, and myself included, think that a lot of these make the code clearer, like having a single word. So I think it would be great if we could reach for them without defining them ourselves or bringing in external dependencies, but that is a meta level thing. It applies to only some of them and not others and I am committing to splitting up this proposal.

JSC: All right, it looks like CZW gave a +1. Queue is empty. I'm already committing to withdrawing this proposal and bringing it back split up. I plan to bring pipe and flow functions first. Does anyone else have any comments before I end the presentation? [silence] Yeah. All right. Sounds good. Yeah, I'm splitting up the proposals and I will see you all next time. All right. Thank you very much.

### Conclusion/Resolution

- JSC to split into multiple proposals and bring back

## Temporal (overflow)

Presenter: Justin Grant (JGT)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2021-10/)

JGT: So we left off here yesterday and we tacked on a few more slides and PFC should/can chime in if needed. Hopefully he made it awake this morning, but I'll just get going regardless. So of course I've had sequels on my mind. So this is our sequel today and our Overflow and my bad Photoshop skills. And so the first is actually, before we continue what we did yesterday, while we were meeting, FYT found another spec bug. So I figured I'd bring it in here again, like the other bugs that we discovered after the deadline. If folks are interested in delaying this, to take more time to look at it, that's ok. I'll describe it real quickly in that when you convert an input to a ZonedDateTime, one of the steps in that conversion is to compare the offset and the IANA time zone name. And to make sure that they're compatible. And so, a good example is this string in the code sample, here. We'll compare the minus 7. From GMT to Europe/London and realized that that's wrong. Although I wish it weren't wrong so that I wouldn't be so tired, that's the current. And you can also in addition to passing a string, you can pass a property-bag with the same values. And in this case, if they're valid values like plus 1 for the offset then it will work fine. And so the spec as it's written today, will tolerate an invalid not because there's no logic in this back to deal with the offset, but simply because there's a missing line in the spec to read the offset in the first place from the user's input. And so Frank found this and submitted a PR for this yesterday and at the beginning of these slides we're going to ask for consensus on this change.

JGT: Next is a continuation from the discussion yesterday around what should we do when there are no required options submitted to the round method. And just from mining the chats in the delegates channel, it looks like there are three choices here, three options options. One is, call round and return the identity if an empty object is passed, but then have round throw or both of them could return identity or both of them can throw. And so, the current Temporal Stage 3 proposal chose that both of them throw case first. Because it's a no-op. And almost certainly a bug on the programmers part and also to defend against misspelling a required property, like in this case, `smallestUnit`, because this would be interpreted as an empty object by bicycle [?]. So obviously this doesn't catch every bug, right? You can still misname an optional property and we wouldn't catch it. But from our perspective catching some bugs is better than catching no bugs. And so that's how we ended up where we are. So the question for folks is, is there a compelling reason to change the current behavior we have today? And at that all was handed over to feedback. I'm not looking at the queue, so I'm screwed.

WH: Strongly prefer choice 1. To address the case of name typos, most people will just be using the string version of it instead of an option bag so they won't have to spell the property name. Choice 1 lets you reuse the same options bag for multiple kinds of calls and that I see as a compelling reason.

JWK: I agree to change behavior if it’s the right thing to do. We still have a chance to fix the design instead of shipping it to the users..

MAH: Yeah, I mean for the three options I would say two or three if it's needed but in general an empty object or no object for config should be equivalent. In my opinion.

USA: JGT, or WH. Would you like to respond to that? We have nothing else in the queue?

WH: Yes, the issue is that the first argument is overloaded. It's going to be either an object or a string. I might agree with you if it weren't for the overload, but the overload makes a difference here.

USA: JGT, do you want to go ahead?

JGT: Yeah, I don't have a strong opinion either way. My inclination is, if there's a consensus on the Committee to do one of these things then we'll do one of these things, but I don't I don't know enough about the process to understand how we would measure whether that consensus exists,

USA: What you can do is you can propose an option, and you can ask for a consensus on that.

JGT: Certainly from the proposal champions perspective, we would prefer what we already have because it's already been approved, and from our perspective would need a pretty strong consensus to change that. So I would certainly propose consensus for number 3 and see if that goes. But again I sort of want to defer to folks who are more familiar with the process and I am,

USA: OK, would anybody object to option 3 being the choice here?

WH: 3 is sub-optimal.

USA: How do you feel about that option? 1 is not as good.

JGT: PFC, are you on, do you want to respond to that? Hope we didn't miss PFC. Sounds like no,

USA: I don't see PFC.

JGT: And I remember there were on the delegates channel, I think, there were some strong objections to number one. So if we were to change the behavior from number three to number one and number two, does anybody want to speak to either one or two?

WH: What are you asking?

JGT: I would be concerned about— what I want to hear is, WH’s perspective is that number one is the best. and I believe we heard some concerns against number one on the delegates channel yesterday, I wanted to hear folks chime in, if there are concerns there, because if we're going to switch from our current behavior of number three to something else, then I would really want to make sure that that switch has consensus before we do anything.

USA: SYG is on the queue next, but I just wanted to quickly point out that one thing you can do is just propose option 1 and see if anybody objects to that. If they don't then you have your answer. Okay SYG, please go on.

SYG: That's basically what I was going to say. It's kind of weird too because the status quo is 3, it'd be weird to pose the question as, does anyone object to status quo 3? Because that's already what it is. So you would have to do the opposite thing. That inconsistent just have said

JGT: Yeah, I mean, I think I'm channeling PFC, his point he wanted me to emphasize is that the onus is on somebody else to convince the group that something that's not there should be the thing, that it's not our role, at least his understanding. And I think this matches mine as well is that if someone wants to convince the group to get consensus on one of these other two options there, welcome to. But I don't think that's our, I don't think that's our role. But again, I'm new to this so I'll defer.

SYG: So the status quo of it being Stage 3, the number three, semantics, Stage 3, and it sounds like a pretty strong signal that the champion group is not convinced that they're proposing alternative one. I feel like it's then on WH, if you feel strongly, to propose that change explicitly.

WH: Yes, I would like to propose option 1. I consider this a bug fix. The whole presentation was about all kinds of changes to the Temporal proposal in Stage 3. This was part of the presentations. I am a bit unhappy with an argument saying that we shouldn't change things in Stage 3 for this item but it’s ok for everything else in the 45-minute presentation.

JGT: Just to clarify, we're not— I think our goal is, we want something that there is consensus for. We're not saying, oh, number one is awful. But rather, you know, that there is a status quo, if we are going to change it, it should be something that there is consensus on the Committee for and that we're not in a position, we're not pushing for number one, but we will accept it if that's the consensus. We'll accept number two, and we'll accept number three. We just want the Committee to make that choice.

USA: So, we could ask for consensus on option one being the decision right away or we could do a temperature check or something like that if you prefer that.

JGT: I'm fine with whatever makes sense. Okay, then maybe WH, would you like to explicitly ask for consensus, for option one being the choice?

WH: So, I would like to ask for consensus for option one.

USA: Let's see, if somebody objects. It doesn't seem so. So I think, yeah, nobody objects to option one. Justin, you have your choice?

SYG: I still have a clarifying question. I remember yesterday's presentation, the weirdness for round, was with Duration.round(). Is this for Duration.round() or for all round() methods?

WH: This will be for all `round` methods.

JHD: On Duration.round() it seems acceptable for me to have option 1 because what's required is already not simple. So it doesn't seem like option one here doesn't make it that much more complex. It's complex already there anyway, but on the other round() methods it seems strange to me that round() would throw without an object, that providing an empty object, which is the same thing as an object with, you know, like it could be an object with a bunch of stuff, but it doesn't. Yeah, I think option one is weird for all the other round() methods and I don't think I would be comfortable with that.

WH: Would you prefer option 2?

JHD: I think option 2 or 3 are more consistent. I think that for the other round() methods option three is the only one that makes sense because they have one required thing. And if that required thing isn't there, it makes sense to throw. And yeah, I hear the argument that, let's just have return identity when the required thing isn't there, which means it's no longer required. But then, in that case, the function has a length of zero because zero required items and then calling it with no arguments must not throw. But yeah, I just talked myself into thinking that option one doesn't really ever make sense because having a required argument that's an empty object doesn't make any sense to me.

WH: The misconception is that `round` always needs to round to something. I would imagine the code being structured as somebody passing in some options, which gets distributed to a bunch of Temporal functions. If you're writing generic code, it's a real hassle to call `round` or not depending on whether somebody wants rounding behavior or not. It's much easier to just pass around some options bag you get from your caller, and this lets the caller control if you're rounding or not.

JHD: I hear that, but I think that we're weighing the convenience of writing generic code around this method, which I think is going to be very rare. That sort of generic code is already very rare against the likelihood of bugs, but also I think unrelated to the semantics of round(). The function's length, this describes the number of required arguments and in option one, it would have to have a length of 1 because it throws if you give it less than one argument, but for that one required argument to be an empty object, that just makes no sense to me. I think that the intuition that was stated earlier about— I forget by whom— about an empty object and nothing being equivalent, I think that needs to hold. With option 2 the length could be 0, it doesn't require any arguments, and then it makes perfect sense that if you pass an empty options bag, it is the same as nothing and it could be identity.

WH: I don't understand that argument. It's just like saying that the functions which take objects should throw if they get empty objects. An empty object is a valid object.

JHD: Sorry, to be clear, functions that take an options bag, empty object, an object here. It's totally fine. If they take an empty object because typically most or all of those properties are optional and so, if the properties are all optional and empty object is fine, but then so is no object at all, and all of those are equivalent. So I think that if it's an empty object, like options bags are kind of like named arguments conceptually and an empty object is providing no named arguments conceptually. We don't have to keep going in circles around it. I'm happy to keep explaining it, but every time we go in a circle.

USA: Okay, so this seems to be coming close to time JGT, you mentioned at the beginning that you don't necessarily need to come to agreement within plenary. So, do you think it's a good idea to take this offline and WH JHD and the champions could discuss this?

JGT: I'm fine with it. Again, our perspective is, this is sort of a relatively uncommon corner case for the API, it won't destroy anything regardless of which choice is made. We just want there to be a choice that doesn't come around again. So we're fine with taking it offline. If there does turn out to be a consensus for changing it, we're happy to deploy that consensus. And in the meantime, we will stick with the status quo.

WH: I'm not happy with the status quo here. But you don't need to reach consensus here.

USA: You could discuss this in more detail on the issue tracker and come to some sort of agreement and bring—

WH: I'm not sure what there is more to say about this. We’ve been going around in circles.

USA: You need to come to an agreement with JHD in some way, right? I am not exactly sure about what the process says, but in case of disagreement, I think the status quo unfortunately for you is going to remain for now. Let's continue this offline. Thank you JGT.

JGT: One quick thing is I did want to ask for consensus, for FYT's bug fix. Can I get consensus for this bug fix here? Any objections? All right. I'm not hearing any so we're done.

### Conclusion/Resolution

- consensus only on mentioned bugfix

## Evaluator Attributes (continued)

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/lucacasonato/proposal-evaluator-attributes)
- [slides](https://docs.google.com/presentation/d/1YCaUQ72q6TaPLkODr1rSfkr2M8EfGpuK8MHNGaqP9fU/edit?usp=sharing)

GB: Yeah, so just to recap the discussion roof that I want to bring up too much again, but we did say that Schubert up the point of verifying that the question of reinterpretation of evaluator attributes wasn't something that was going to be blocked by those who had concerns about this before. And in, two previous discussions around this when import assertions were being discussed, so I wanted to just verify that, that isn't the case with JHD while we have them here. Given that was one of conditions of Stage 1, so just to to do that verification now and then, furthermore, if there are any other parts of the discussion around these kind of reinterpretations, or additional requirements that are worth discussing. I don't know what the best way to frame it is. SYG do you remember the exact framing of the question? Could you perhaps give some more background on what you recall the issue with that being?

SYG: I don't quite recall what the objections were in the first round, if that's what you're asking. I just want to make sure that the objectors from the first round are okay with the current direction.

GB: Okay, in that case JHD, it's kind of difficult not to go through the slides again, but do have familiarity with the proposal as well. So did you want to just dive into discussion?

JHD: Yeah, I can just talk for a minute. So I am looking at slide 2. So what I was hoping one of the things I was hoping to get out of the presentation was a better understanding of WASM's use case here. I sort of got it from the repo, but, because I don't actually I don't use WASM, I don't actually know. Like when you import a module like normally it pulls in its dependency graph as well. Right? Like so you have a module parent then import the module child as well, right? And you import parent, it's going to import child before it evaluates parent. I assume there is a similar semantic in WASM modules?

GB: Yeah. So this was something Daniel brought up earlier as well and was just really good at getting a clearer idea of that exact use case. I did go through it quite carefully, but with the WebAssembly integration that provides exactly that model. But the argument being that there are multiple conventions that have to kind of line up for that to give you the exact right execution. You often have to assume that the resolve is going to resolve these things correctly, that runtime execution model is going to work correctly and with WebAssembly we also have the fact that you've got to make sure that you're using the right memories and and getting all these things to line up the example just to show the slide. Is this a WASI example, where you have to pipe through a lot of context in order to get that start to end execution. Yeah this does that. Answer the question without trying to dig it up too much.

JHD: I mean, why can't you pass the specifier instead of the foo module here?

GB: You mean into `WebAssembly.instantiate`.

JHD: Like, theoretically, could there be an API that takes the specifier and import.meta URL or something similar? Why does the JavaScript module need to import the foo module in order to do this?

GB: There's a bunch of reasons. I would be doing it an injustice to be able to clarify that too simply. But basically one of the biggest benefits is, in theory, we lay the groundwork for CSP integration because you have this declarative mechanism. It's also better for bundlers, potentially.

JHD: So, I guess. Are you envisioning any? So just a quick side note. I think the name is inaccurate and an open issue. We've been discussing that to rename.

GB: So to be clear, the name isn't final, but you are specifically in this ten-minute slot. I just wanted to verify those previous concerns around the reinterpretation and specifically you mentioned that with import assertions. There were some unexpected results. Of that reinterpretation, question and just just to see that, that isn't related to what we're doing here. Or see if we can make sure that those aren't those concerns aren’t coming up again.

JHD: So let me summarize that real quick. Even if I have to import lines one after another, whether they're static or dynamic, they pull in the same specifier. I should not be just like I cannot use the in assertion to get two different conceptual things. All I can do is get it twice or get an error out of the assertion one. Similarly, I would expect with these attributes that I would get the same conceptual thing. It seems like you're only proposing the value of the WASM module right now.

SYG: Sorry to interrupt but it may help to give MM’s framing of this, which I found helpful. So MM has framed this not as different interpretations, but as letting you choose the representation that you want at which stage of the module processing pipeline. So in this case, importing it as a WASM module, instead of a WASM instance, gives you the representation before linking and instantiation. So the representation is always WASM throughout the whole pipeline. That doesn't change. You cannot opt into a different interpretation, but you can choose where in the pipeline you want the import to happen and then

JHD: That is helpful. How does this interact with module blocks?

MM: That's exactly the issue that I was bringing up, which is I think that the staging issue applies to JavaScript well, as well as it applies to all the things we might want to bring it to you to bring into the module graph and able to import each other the static module records and module blocks are already both the static equivalent for JavaScript. They only contain their own pre-compiled modules of XS. All of these have just the compiled information from a single Source text without any linkage information. And what it's saying: it's not choosing a representation. It's not choosing a different interpretation is just, reifying in early as show us reifying, an earlier stage of the processing pipeline. So, what you have is something that still needs to be linked and initialized. So the remaining stages in the processing pipeline still need to happen before you have a module instance.

JHD: Okay, so too, let's imagine. We're in a world where there is an evaluator attribute that applies to JavaScript modules, like source, once you type it out.

MM: Part of my point is that it needs to be. We did not frame as an evaluator [?] after that.

JHD: I understand. I'm just trying to understand this proposal. Okay. It's something that applies to JavaScript modules. Obviously, in my parent and child example from earlier, if I have a console log statement, both [?] and I import them. Normally, I will get the console logs in child first and then parent. The employee [?] seems obvious here? If I use something that has similar semantics as these waves [?], a module thing that I wouldn't see any console log statements because none of the runtime code is evaluated just jump in and correct me if that's wrong.

MM: Yeah, but then the modules themselves, don't know how to link the modules themselves. Know what their linkage demands are. But it's up to the linkage context in which you're linking them to provide the import namespace.

JHD: So what happens when I get a syntax error in child and then I try to get this as a module style representation of parent, And then I'm importing parent into my program. If there's a syntax error in the child, and I just normally import the parent, it will crap out because of the syntax error. What happens if I import parent as an unlinked module?

MM: What you get is a static module record, you don't, the information that is derived from the source text of the parent. There is no implied linkage to the child. The parent might have in it an import declaration from the child, but that's not that by itself not an association with particular modules, and we have only got it. It's only within a linkage context that it comes to become that, it comes to be associated by the context with some particular child.

JHD: And so then later I can run something that completes the process on parent and I would get a runtime SyntaxError exception. Then we have just added a major capability to the language which is the ability to, without eval put in a parsing error and determine later conditionally if it parses or not – is that something we want to do?

GB: So, just to clarify: in that case, it's about what is specific in this, why the scenario when you import the child as a module, you're still doing the compilation. So you would get compilation errors during the import and those compilation errors would effectively be stored in the module registry in a way that they would retrigger for subsequent importers like other error records, even though these records are sitting almost in a parallel module map. Because you've got these two separate phases, So it's you would get compilation errors on when importing something that's That's that is in form. You're getting it in a compiled module form. You would get your runtime errors only when you perform the execution. So yeah, so syntax error. If we were extending this analogy to JavaScript syntax error would happen at that import time, Whereas your execution errors you would get at runtime, but again, we haven't specified anything here for JavaScript and it's like, it's in wide?/WASM? space so I wouldn't want to assume either you can assume what that would look like. So, I just the thing that I find appealing about, this in the context of it being unified across, WASM

JHD: Is that a synchronous or an asynchronous mechanism?

GB: Asynchronous. Okay, and it would have to be for JavaScript modules as well. Yes, most likely.

JHD: Okay, then in that case, it would be the same as dynamic import, so it's not actually adding a capability - I was just talking that out. Yeah, so I guess I mean it seems fine as Stage 1. It’s pretty weird to block Stage 1 for, you know, for most things. Anyway, I'm on board with that, but I wanted to be very... I think it's very important that before it goes to Stage 2 that it has use cases that applies to JavaScript and also that there's no way for it to change the conceptual representation of the module that it's just as MM has said and SYG's paraphrase of that. It's here's the, there's like multiple modules steps and it's just a, the first chunk of those steps and it just delays but does not change the remainder of the steps you do. That, that seems like a very critical thing to preserve and obviously we can and probably will rename the proposal to match that.

GB: Yeah, that requirement I think is a fundamental part of this framing and kind of the sort of novel aspect that kind of brought it back around from, from being something that seemed like, it could have certain risks associated with it. I would be careful assuming that we can find perfect generalizations to JavaScript and we did discuss this a bit further. I think there are a lot of conversations to have here and I would love to find a great unified approach. My concern is that we maintain the use cases and the best solutions to those use cases and I'm very clear in this proposal that the driving use case is WebAssembly that it could extend to things like JavaScript unlinked imports. I am hesitant to tie the future of the proposal to ensuring those things. work out even though I hope that there could be progress on that front. Yeah

JHD: Just a real be real clear to interject. Real quick. Sorry let's say that both this and module blocks advance. Would it make sense to have something like a module block?

GB: There are still a huge amount of questions. I think we wouldn't if we get into the conversations quickly realize that there are lots of subtle semantics that we probably would have to discuss in quite a bit of detail. I guess the first question is, is it useful, right? So, can you do it? Probably? Do you want to do it? it? Well, that's the important thing to discuss first and foremost, but yeah, it could be expected to do what you want.

JHD: I mean, I would assume it's the same rate, like, you can create a worker with a specifier, but you could also theoretically, you know, maybe you can create one with the module block and it would be the same use case. Here is where you wanted to do the declaratively and help lenders, bundlers and stuff. So, but yeah, it's that just seems like sort of cross-cutting concerns that needs to be worked out with in Stage 1.

USA: great, the you're quite a head time, but SYG is on the queue. Would you like to be really quick?

SYG: This is a response to earlier. These petition texts are the timing thing. I want to say something stronger than that. We already have the capability, which is, I think syntax as [?] timing doesn't actually matter. Some of it is due to the capabilities we have with Dynamic important eval, but I don't think in general, my hunch. Is that changing the timing of syntax errors? To be delayed doesn't really matter. We have some evidence that the opposite direction matters. We're changing something that was Dynamic to an earlier matter, but I don't think we have evidence for static to Dynamic.

USA: Great, so guy, is that it then?

GB: Yes, that's all the clarification we needed. Yeah. Thank you. Great. Thank you.

### Conclusion/Resolution

- Stage 1 holds

## CoC Update

Presenter: Jordan Harband (JHD)

JHD: Yeah, so this is high-level both because JBN isn't here to present whatever she'd prepared and also because I'm tired. Since the last plenary, there was a lot of activity on the pipeline repo, in particular, I think two users have been banned as a result. Per our normal process, both bans are temporary. But some of the actions of one of the users after being banned, may extend that the.

JHD: We've had some light discussions about considering maybe adding the "maintain" GitHub privilege to CZoC Committee members to all proposal repos so that they're able to lock interactions using them on GitHub moderation tools, which is sort of like, you can say, only there's three categories. I think only people who have already contributed to the repo get to talk. You can say, only people who have write access can talk or you can say like nobody can talk for her. Only collaborators can talk for 24 hours, like there's things like that would prevent what happened, one of the things that happened on the pipeline repo which was over a weekend when a lot of people weren't around to moderate. You know, a couple threads became like, you know, centi-threads, like they had hundreds of posts and was, and they needed moderation. So, we're looking into that. And as far as I know, there's been nothing else to discuss. yeah, as if anyone has any questions about any of that stuff, please either ask me now or you can ask later, and I'll probably defer to JBN to answer those questions because she's been kind of dealing with it specifically; I have recused myself dealing with any pipeline moderation because I've been participating in the repo. So I'm just sort of giving a summary but JBN was one of the ones involved in all those decisions.

WH: To clarify, were the banned people Ecma members, or were they outside folks?

JHD: No, as of yet I don't believe we've banned anyone who is an active member or invited expert or a delegate. Like ever, not just recently. I think that's the update.

## Incubator Call Solicitation

Presenter: Shu-yu Guo (SYG)

SYG: As per normal. We call for volunteers proposals were General topics to be added to the list of incubator calls that we try to do between in between plenaries last time there was one about proxy performance that Leo had requested but ended up not really getting any participants on the It also, that was cancelled in case, there are still interested parties who want to discuss Proxy performance, we can bring that back, but I just want to throw that out there before asking for new set of proposals because I think there are several very interesting early stage proposals that could use some -- what's What's the word -- faster feedback loop.

SYG: Any interest in proxy performance? I tried to ping several times last time on Matrix, and I didn't see any. Going once.

SYG: Okay, new topics. So we'll go forward. I'll go for volunteers first. Any champion groups of new proposals who would like to resolve some of the possibly controversial issues over an hour, call in, between this meeting at the next?

JHD: If there's anyone outside the Pattern Matching Champion group who would actually show up. We'd love to have a session. But the last time we did, at the incubator call nobody showed up outside the champion group. So I don't know if there's anyone in the meeting who is not in the champion group and is willing to actually commit and follow through with attending.

SYG: Okay, I'll push pattern matching onto the queue, but given, yeah, JHD what you said last time. We'll see how the doodle gorgos anything else before I start to call out people in Matrix.

JSC: Okay. Yeah. I have a couple of others who want to talk about bikeshedding the topic token in the pipe operator.

SYG: To be clear, incubator calls follow the same IP our stuff as TC39. So it's open to delegates and invited experts. I know pipe has a lot of interest from the community just to be clear that you are interested in discussing within TC39 groups.

JSC: That's right. Although there is one Community member who has been really involved in the proposal, who is not a TC39 delegate, whom we were wondering if we could bring in.

USA: So I think the way you can go about it is to have that person on as an invited expert; that way they would sign all the IPR agreements and everything. So if it would be okay. Them to attend.

JSC: Alright, we’ll look it up.

SYG: Yeah, there's a form that you can have them fill out. I think we try to make the friction there less over time. Let us know how your experience goes.

USA: Great; one response to what JHD asked, is in the queue. So Philip, do you want to speak up?

PFC: I would be interested to attend the pattern matching session and I think I couldn't make the last one. But yeah, it's not that I want to raise anything, but I'm just interested in listening. So if that's sufficient to hold the session, then great, and if not, then, you know, that's also fine. You don't need to hold it only on my account.

JHD: I would say probably not have an incubator call just for that, but I would also be happy to invite you to like, you know, join the champion group call, which is something we will probably have in lieu of an incubator call. If you're interested

PFC: Yeah, sure. I'd be interested to drop in. Once or twice on that. But yeah, don't, I don't feel like I'd speak much.

SYG: Let me see when the next meeting is. Was there more on this topic during.

JHD: Now it just sounds like we probably will not have an incubator topic on it, but I'd love to keep the possibility open for a week or so just to see if anyone chimes in.

SYG: Okay, I think I guess what I can do then is just too. it's actually a fair amount of annoying overhead to make the whole incubator call thing, but I would probably just make a doodle to gauge interest concurrently with the pipeline thing and then depending on what? What gets interest, we can sketch. That sounds fine. And so given that. Let me see. When the next meeting is, does anyone know off the top of their head. Is it like mid-December to the beginning of December?

MLS: It's December, 14th 15th.

SYG: Okay, so that probably gives us maybe two or three slots and I had in mind that the function helper grab bag that is typically to be split up. JSC’s proposal. Seems like there were a lot of opinions flying around. That could be hashed out if we sat in a VC and just talked to each other, so I'm wondering if Folks, be interested to attend the motivation hash out, I guess to see which people, which of the helpers folks feel strongly that should be or should not be included.

JSC: I'm up for that. My current plan is to make repositories devoted first to flow/pipe on one hand, and uncurryThis. But I am also totally up to a general helper-function incubator call to hear opinions from anyone about helper functions in general.

SYG: If there are no objections to that, but I guess I'm looking for something a little stronger than no objections would.

MF: I would attend.

JHD: Okay, I would attend this one.

SYG: Great I will add that on, maybe we'll have time for it, but we'll see by the doodle. I understand the Q4 is usually a quieter time for some folks. Especially European folks, who have better vacation policies than we do.

JSC: I was wondering if it might be worth having that against the BigInt Math incubators call. Since there's been a little contention regarding some things, like sqrt.

SYG: Yeah the sqrt and cbrt thing did stand out to me. I was thinking that I'll queue that up. That's the fourth one if I did might go to overflow, but that seemed scoped enough that maybe you can resolve it async if not.

JSC: Yeah, also happy to keep that up. Yeah. All right. Thank you.

SYG: Cool, so to recap for the notes, the four calls on the docket are pattern matching, but that will be Doodle only to gauge interest first, pipe bikeshedding, Function helpers, and BigInt Math. All right. Thank you very much. Look out for the GitHub notifications.

RRD: I just sent an item in. The queue actually reminded me to remind everyone that we have a monthly call for records and tuples. So if you're interested in discussing this object-wrapping thing, this is an excellent place to have a longer debate on this. Thank you.

## TC39 Chair Nominations

USA: Awesome. Also, now that we're doing reminders. I also wanted to remind people that there is currently an open call for nominations to the chair group. So if you'd like to help people keep running these calls and other things, please volunteer and that's it for our agenda this time. Thank you, everyone.
