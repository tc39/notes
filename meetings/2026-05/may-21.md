# 114th TC39 Meeting

Day Three—2026-05-21

**Attendees:**

| Name                | Abbreviation | Organization       |
|---------------------|--------------|--------------------|
| Dmitry Makhnev      | DJM          | JetBrains          |
| Christian Ulbrich   | CHU          | Zalari             |
| Zbigniew Tenerowicz | ZTZ          | Consensys          |
| Ron Buckton         | RBN          | F5                 |
| Linus Groh          | LGH          | Bloomberg          |
| Waldemar Horwat     | WH           | Invited Expert     |
| Tom Kopp            | TKP          | Zalari             |
| Istvan Sebestyen    | IS           | Ecma               |
| Richard Gibson      | RGN          | Agoric             |
| Luna Pfeiffer       | LPR          | Yavashark          |
| Eemeli Aro          | EAO          | Mozilla            |
| Samina Husain       | SHN          | Ecma               |
| Oliver Medhurst     | OMT          | IE (Porffor)       |
| Yusuke Suzuki       | YSZ          | Apple              |
| Keith Miller        | KM           | Apple              |
| Mathieu Hofman      | MAH          | Agoric             |
| Aurèle Barrière     | AUR          | CNRS               |
| Olivier Flückiger   | OFR          | Google             |
| Chris de Almeida    | CDA          | IBM                |
| Mikhail Barash      | MBH          | Univ. of Bergen    |
| Andreu Botella      | ABO          | Igalia             |
| Aki Braun           | AKI          | Ecma International |
| Alberto Tontoni     | ATI          | Univ. of Bergen    |
| Caio Lima           | CLA          | Igalia             |
| Clément Pit-Claudel | CPC          | EPFL               |
| Dan Minor           | DLM          | Mozilla            |
| Duncan MacGregor    | DMM          | ServiceNow         |
| Guy Bedford         | GB           | Cloudflare         |
| Gus Caplan          | GCL          | Deno Land Inc      |
| Jordan Harband      | JHD          | Socket Inc         |
| Justin Ridgewell    | JRL          | Google             |
| Jacob Smith         | JSH          | OpenJS             |
| Luca Casonato       | LCA          | Invited Expert     |
| Michael Ficarra     | MF           | F5                 |
| Mark S. Miller      | MM           | Agoric             |
| Nicolò Ribaudo      | NRO          | Igalia             |
| Patrick Soquet      | PST          | Moddable           |
| Shane Carr          | SFC          | Google             |
| Ujjwal Sharma       | USA          | Igalia             |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

JRL: All right. While everyone's filing in, can we get note-takers to start with? We need two note-takers. Anyone willing to help with notes?

JRL: Christian?

JRL: I hope. Perfect. Thank you. And we need one more note-taker before we can begin. I did not. Bradford, I see you. Can you please speak? I do not hear you. It might be us. Can you just keep talking to confirm?

JRL: Yeah.

JRL: We don't hear you.

JRL: Mikhail? Thank you. We still need one more note-taker, please. We will awkwardly wait. Bradford, could you try one more time?

JRL: Yes.

JRL: Nope. Still nothing.

JRL: Nothing? Okay. Well.

JRL: Marker is fun. Would you mind speaking?

JRL: Can you hear me? This is Samina.

JRL: Oh, Samina's talking. Thank you. But we do not hear you either.

JRL: You don't hear me?

JRL: I hear you, Samina.

JRL: Thank you. Well, I guess we're hearing each other online, but the room is not hearing us.

JRL: Nope. We still don't hear you.

JRL: Yeah. So yeah, I'm remote too, and I hear you.

JRL: Hey, Mark. Thanks.

JRL: Hold on. We're going through technical problems. While they're trying to fix this, we still need a second note-taker. Christian is generously offered to help. We need one more. Samina, could you try again?

JRL: Yep. Testing.

JRL: We hear you now.

JRL: Perfect.

JRL: Okay. Technical issues resolved, but we still need a note-taker. We have all these fancy name tags that help you out. All you have to do is essentially sign the acronyms. Anyone? Thank you. Perfect. So CHU and ZTZ. So up first, I believe, is Peter? JSH, sorry. JSH with comparisons. Are you ready to go?

JSH: Where do I get the link? I don't see yet.

JRL: Go to TC39 Reflector. It should be one of the pinned top issues. You'll have to fill out the sign-in form.

JRL: Search for form.

JRL: Up at the very top, it says sign-in. There's five links at the very top. It says sign-in to get to the meeting link. Or you could go to we can see the meeting link ID at the on the screens.

SHN: And while you're signing in, how is your last night?

JRL: The dinner was excellent, I think.

JRL: Good.

SHN: Anyone else have opinions?

JRL: We missed you, SHN.

SHN: Ah, thank you. I missed you all too. I'm glad you enjoyed the social. Was there music and dance?

SHN: Afterwards.

JRL: Oh.

CHU: Shane brought you some sweets, Samina, but we stepped in for you.

SHN: Oh, that's so good. You're all so good. Enjoy. Next time, Shane, Japan. There you go.

## Comparisons for Stage 1

Presenter: Jacob Smith (JSH)

* [proposal](https://github.com/JakobJingleheimer/proposal-comparisons)
* [slides](https://docs.google.com/presentation/d/1unIAgQLLUdsWnTPh0KRMDnhr2n2s0jtVTV1NpRzWQj0/view)

JSH: Okay. Take it away. All right. So comparisons. Third time's the charm. This was originally presented in A Coruña about this time last year, and then very briefly in November. So just a quick recap on what it is. So when you're trying to compare A and B to see if and how they are different.

JSH: To cover a few different use cases of the problem that this tries to solve, for instance, if you are building a patch to send or a delta to send for an HTTP `patch` in the client side, very useful if you have a bunch of user data that is going to be mutated and then sent back. You potentially want to send only the bits that have changed.

JSH: State management in React. Quite frequently, users will create a new object that derives data that goes into the result of that may be no actual difference, but because it is using `Object.is()` to determine whether it's a new thing, and in this example, it's always a "new" thing. So that creates some de-op; if they had something like comparisons that would facilitate them determining whether there are actual changes. They have—there is historic precedent for them asking for this: a shallow equal proposal that they had weighed in on quite heavily (that didn't end up going though). It would also help with reconciling changes in a virtual DOM, in a very similar way.

JSH: Logging. Let's say you have two different states and you need to figure out what "bad" happened; you don't necessarily want to flood your log with a whole bunch of stuff, only good to bad.

JSH: AI, everything needs to support AI now. So you could probably use it for something like that.

\[laughter\]

JSH: And of course, for testing. Under the hood, a `assert.equal` could leverage `compare` and find out that these two things contain different stuff. *(presentation)* The second one contains `bar`. The first one doesn't.

JSH: So why not user land? There are a lot of things that you could leave in user land, but we didn't. The differences in user land implementations—they mostly exist because of performance reasons. So they're like knowingly do it wrong because doing it right is too expensive. Or the differences *happened* to be created that way, not for a particular reason. From the user perspective, they don't really care. From the library author perspective, they also don't care.

JSH: So on the flip side, why native? Literally, every project uses it in some way or another. There's a performance potential in two different ways. Determining whether something is deeply equal I understand is quite optimizable. And then building out and consuming the deviations also has some potential there. Down the road, there is a sibling proposal called *modes*. I don't want to get too deep into that one because last time it really confused people. But that *modes* proposal would open the door for special access under good and bad situations. Without something like `compare`, leveraging that in determining deviations is not possible—at least not without doing it in Node, where it \[Node.js\] can facilitate that special access in a *modes*-like way.

JSH: Also why? It would encourage good behavior from engineers. It's much much more likely to be leveraged when it is readily available and exists. Oops. So basically, what this could look like down the road is a simple situation of `compare` A and B. It's `false`. There's no deviation. In a "full" mode where you want to find out *specifically* how it is, it would give you something like `expected`, `actual`, and then whatever the reason is. There are a few different ones that we've laid out, but I think determining which specific reasons there are is a "tomorrow problem". If you have multiple differences, then you get multiple deviations for it. That you can iterate through.

JSH: One question that has been raised previously is "Do we need the deviations? Can we just stick to the deep-equal?" Yes. If we don't have deviations, then the immediate question that someone will have is, "Okay, but how? So like, okay, they deviate, but *how* did they deviate?"

JSH: Some alternatives that we have considered and are open to is splitting it into two different things: `deepEqual` and `compare`. This is an alternative to the two different modes that are in the current proposal where `compare` would have its "fast" mode and return `true` or `false` versus its "full" mode and return the iterator of deviations. Why do that? Separation of concerns. Smaller implementation performance benefits. Why not? More things for people to remember exist.

JSH: Some things to keep in mind that are explicitly out of scope for this: It is not a testing utility. It might be leveraged by those things, but that's not what this is itself. A reminder of things that we would consider later. What specifically does the comparison include? How the algorithm works for deeply comparing it and the output. And if you can customize it, what that would look like.

JSH: Some other considerations that are not part of this are if there's some kind of matcher and also the name "comparisons" vs "differences", stuff like that. All right. That's it.

JRL: We currently have an empty queue. OFR

OFR: All right. I'll start. So what's kind of missing from the presentation, I think, is your definition of equality because that is my biggest question mark here, whether we will be able to come up with an equality that will actually agree on or whether this will be only possible if there are tons of configuration options that allow you to pick different equalities. Which I think would complicate the proposal quite a lot. So I don't know. I'm thinking about proxies. I'm thinking about `NaN`. I'm thinking about floating point in general. There's probably I'm thinking about hole-y arrays. There's probably a bunch of things which were people totally not agree what equality means.

JSH: So the TL;DR is "same zero": `NaN` is `NaN`. But signed zeros are not equal. A hole-y array, if it has holes in the same places and the rest of the values are otherwise the same, then it would be considered equal. There are some oh, it's not in there. There are some customization options for much more niche things. Like do they have the same prototype? Are different types of arrays the same or different? So for instance, if you have an int what is it? Int12, int24, whatever. Whatever the flavors are. By default, if their values are the same, then it would be considered the same. So those sorts of things. And we're thinking we start with the baseline that is pretty straightforward. And then as those things are needed, we can subsequently add them.

OFR: Okay. I guess that was the main question, is not exactly how is the equality defined currently, which is also interesting. But more like how many use cases are supportable? And will we end in an endless adding this other feature and adding I don't know. Will we specify floating point precision for comparisons and stuff like that, right? So basically, how do you intend to cover all the use cases that you mentioned with one equality, I guess that's the core of the question.

JSH: So the customization I believe would not be intended to cover all of the different cases. The consumer can iterate through the deviations and determine whether they care. So it would be inclusive. And then basically, you filter on consumption.

JRL: Before we go on, WH has a clarifying question.

WH: How deep does the equality go?

JSH: To the leaves.

WH: What if you have a cycle?

JSH: It probably stops.

JRL: JHD?

JHD: Yeah. I was just to echo what Jacob was saying, is that the best way to provide for all use cases is to use everything that the language that a language user could detect. As a possible difference. And within reason. And then let users filter down from that. We have iterator helpers so they can just filter off an iterator and yeah. And then the user won't have to figure out the yeah. Anyway, I'll wait till the next question for that.

MAH: So tacking on to that, how is having the user having to filter the differences like that? Any different than basically having the user having to implement the walk of the object themselves? If you're. I want this type of comparison. I don't want to compare prototypes, but I want to invoke getters or whatever. How is that any different at the end of the day than really if you're not going to provide these options from the get-go, how is it different than letting the user walk the object properties and themselves do the comparison?

JSH: I think the important thing missed here is that this contains only the deviations. So it has filtered out anything where they do not deviate. So if you were to walk this yourself, you would have to go through things that are irrelevant.

MAH: Right. But okay. So let's assume I have a use case that doesn't care about something being a data property or a getter. I actually want to work against the getter. If I have a deviation, the deviation is going to stop right there. It's going to stop, saying, "Hey, this is data property. This is a getter." I would need to then somehow recurse or tell the algorithm to recurse in the result. Is there?

JSH: So it doesn't stop. It tells you that this is different. And then you can either say, "Okay. Next." You deal with it or you say you "call next". And then you get the next bit.

MAH: But can you tell it like, "Okay. You gave me a getter. I actually want you to continue with this value, which is basically me invoking the getter because I'm interested in getting the getter"? Okay. So the iterator for differences is like a two-way street where you can return the next value to dig in?

JHD: So just to clarify, because I've spoken to Jacob about this a bunch, there are some options for configuration. It's not just my comment was not to say we do not provide configuration options. It was to say that we don't *have to* provide for all of them. Because users can filter if they need something more granular than what's provided. But there are absolutely some options here because you need to be able to say you're talking about "do you evaluate getters or not?" "Do you look at the values or not?" Maybe you only look at the keys and so on.

MAH: Okay.

JRL: MM?

MM: First of all, I just want to echo some of the discomfort that I'm hearing the issues raised by OFR and MAH in particular. The thing that the patterns book, the object-oriented patterns book, explained why it is that they're bothering with patterns when one common wisdom in programming language is don't repeat yourself any time you're repeating a pattern, you should in fact—you should, rather—have a reusable abstraction that's parameterized so that the same part is reused and the parameter is expressed all the things that are different. And the problem is that different languages have different—if you want to think of it—powers of abstraction. And on the one hand (and the tension of having lots and lots of parameterization when the shared part), the part that would be repeated, is fairly simple, small, and easy to understand. When you've got that set of trade-offs, it pushes you towards a pattern rather than a reusable abstraction. So I've written recursive comparison operations over and over and over again including for different purposes within the same system. And each one is deviating from a literal deep equality in different ways. And it was just more straightforward to write and to read to just have them be different variations on the same basic pattern of traversal and deep equality.

MM: I want to bring up WH’s issue as a great example which is that if there are cycles, there are multiple, depending on what/how you want a cycle to be interpreted, there are multiple things you might want to do. In my major use in the current system, if I see a cycle, I error. Now, reporting the difference or reporting the detection of a cycle and allowing the handler to error, covers that. But another thing I've done in another system is to interpret the cycle as what's called an "infinite rational tree" and then to say two different cycles, they might be wound with different tightnesses, but if they unwind to the same infinite rational tree, then they're equal. It turns out that only adds less than 10% overhead to a deep comparison. It's tricky to think of that, but once you understand what to do, it's actually very simple. But it's often not what you want to do. Sometimes it is. So for all of these reasons, I'm just skeptical of the proposal and would probably usually elect to just manually write a deep comparison any time I'm writing something that doesn't fit the simplest case.

JSH: Okay. Sorry. I think there were a few different things in there. Okay. So talking about the "cycles" thing, I don't know if that is a problem that we need to solve at stage one. Isn't stage one whether to explore the problem?

MM: I agree that you certainly don't need to solve it or come to a position on stage 1. Exploring it, having to be part of the conversation, as it is now, is certainly appropriate for stage one. The issue is when you ask for advancement to stage 2, stage 2 signifies that the committee wants something of this general shape. And so of the shape you would be proposing for stage 2, which has to be concrete. And whether this turns into something that the committee wants, I think hinges on this issue of pattern versus reusable abstraction. And the "cycles" was really intended just to be yet another example of why a reusable abstraction might fail in the face of supporting and all the parameters and having a reader reading a usage needing to understand that parameterization rather than just understanding the variation on the algorithm.

JSH: Okay. Sorry. I'm not really getting what you're suggesting or…

KM: I think maybe this is what MM is saying, and feel free to interrupt me if I'm stealing your topic, MM, and reclaim your time. But I think the level of difference, handling all of the ways the filter has to handle differences it's not clear to me that that is any the walk and the filter are probably about as difficult to implement. And so we haven't reduced the total complexity by adding this the walking for them, right? The problem is still really hard because there's so many different ways that things can differ. And so even if we remove some part of that problem, it's still kind of how you do the walk is sort of intricately tied to what things you were trying to look for differences in between these two objects. These two trees or graphs, I guess, technically, because they can have cycles. And so when you're at the state of having to deeply understand all of the complexity in order to understand what differences you care about anyway, it's not obvious that implementing the walk and that filtering together is not that much more difficult than just doing a filter part. Because you still have to understand the whole problem space just to understand how to do the filter anyway.

MM: Yeah. I endorse Keith as what Keith just said as being perfectly aligned with what I'm trying to say.

JSH: Okay. Okay. So can you give me an example of how walking and filtering would be problematic if you don't know what you're doing?

KM: I mean, I think you have to understand all the ways that things can deviate in JavaScript, right? So for example, use case just mentioned in the next one is do you want order that properties are added to the object? That's observable in JavaScript. Do you care about that as a difference? Do you not care about that as a difference? You may or may not. Most people probably don't care, but some people might care a lot. So you need to understand those intricacies. You need to talk about, okay, well, do I want how do I want to handle I don't know, all these different reasons for these partial deviations that you list, right? You have to know about all of those in order to implement this filtering which and once you're at the level of deeply thinking about the problem space, at that level, it's unclear to me that the walk implementing the walk two is also that much more complicated than understanding everything enough to add the filter. I don't know if that makes sense. I'm trying to explain it well. I'm also very tired.

MM: Yeah. Let me just take the basic recursive walk for the simple case is actually very, very easy to read, but it's a switch statement where at the top you switch on a type of or whatever it is you the simple distinction that breaks it into separate cases. And then if you do your deviation from simple comparison, for some purpose, it actually reads very well if you just manually write out the algorithm because what would have been each case of the simple algorithm is now where you go to find how your alternate comparison deals with that case. So it's just a breakdown by cases. It's extremely readable.

JSH: Sorry. Are you saying that this would work fine then?

MM: I'm saying that, yeah, that the reusable abstraction, that this proposal provides is not solving a real problem because the readability of a call to the reusable abstraction with a bunch of parameters to express all of the deviations from simple equality is not more readable. In fact, I would say is probably less readable than just reading and expression of the recursive comparison algorithm with the deviations broken down naturally inside the cases of the switch statement.

JSH: Why couldn't you do that?

MM: I'm saying you can. I mean, in the absence of your proposal, that's the way you would do it. And I'm saying that the proposal doesn't make that world better.

JSH: So as you're iterating through, the thing that is handling the deviation could certainly do exactly that.

MM: I'm not understanding you, and I'm worried that maybe you're not understanding me. Since I'm not understanding you, I don't know what where we're missing each other.

JSH: So you've run your `compare`. You get your iterator of deviations. You loop through it.

MM: Oh, no, no, no. I'm saying the iterator of deviations is exactly what I would not code in doing the comparison. I would just have the thing I want to do with the deviations in line inside the comparison algorithm. It's not from an iterator.

JRL: So we don't get too sidetracked to this. I think MM’s point is the iterator itself that this is going to be providing is not useful without the filter method, which KM and use case are saying is something that is very customizable. I want to speak directly sorry, mine is next. If we consider use case done, MM, I think implementing recursion comparison is an awful thing to do. Personally, I never want to do that. It hurts my brain thinking about recursion. If the iterator itself could handle the recursion aspect for me and just give me the key path to the things that are even if it was everything, not even the differences, but literally every key, give me key A and key B and value A and value B and handle the recursion for me, that is so much nicer than me implementing recursion.

MM: I'm very surprised that I mean, I know you, you can't be someone who has difficulty with recursion. I mean, I just that's.

JHD: So MM, I'm in the same bucket as JRL, which is why I have a queue item as well. The reason people use deep equal libraries is because it sucks to write these recursion algorithms, and it's easy to get wrong. You end up having to handle cycle detection. There's CVEs around this stuff. There's prototype pollution bugs around this stuff. It is a nightmare, and it is a massive, massive footgun. And even just abstracting that piece away from everyone's codebase is a huge win for security and complexity and simplicity.

MM: Okay. So I'm glad we're arriving at a difference that can be investigated empirically. I remain skeptical of that claim. The issue isn't whether recursion is a footgun. The issue is whether using this proposal instead is less of a footgun.

JHD: Yeah. So to be clear, I reserve the claim that recursion is a footgun for drinks discussion. But walking through a JavaScript object is gnarly and a footgun. That's the part I'm talking about. Regardless of whether you use recursion or any other form to do that.

MM: So like I said, the issue is the complex parameterization of the reusable abstraction that we're talking about here is the use of that in practice going to be less of a footgun. And that's an empirical question.

So is that a question?

JHD: I mean, I don't know how we would evaluate that to your satisfaction, but from my experience, absolutely, yes, because all the parts that people screw up don't exist if this proposal exists as currently written.

JSH: Yeah. Like, this is one of the main reasons that I created the proposal. I didn't create a proposal because I wanted something to talk about.

\[laughter\]

JHD: And it's an iterator, which means that you have the filter iterator helper. So that's how you do your filtering. And you don't have to do anything except say, "Give me a problem, and I'll tell you if I care about it or not." And keep moving.

So we are through half the time box now, and I imagine as we go through the growing queue, we will have more replies and more replies. Let's move on to the next one.

So yeah, I know.

JRL: Thank you. ZTZ says, "Tastes differ." For equality or iterators, recursion maybe? \[a nod follows\] End of message

CPC: Just reacting quickly to the last thing you said, JHD. You were saying it gives you the differences, and you say whether you care about them. I'm used when diffing two trees to get a tree of differences, not a sequence of differences. That tells me, "Oh, this thing was inserted down there, and that thing was lifted up here." And I can say whether I care or not about that. But I don't know how you handle this in a proposal like that.

JHD: There's a path. I don't know—maybe it's not in the slides—but there's something that there's an open PR on the repo. That's been trying to work through. Where essentially provides an object path. So you have all the ability and all the information you need to construct that tree. If that's a use case that is common enough, then.

CPC: I don't think that's what I'm saying. I don't mean that deep inside you had something that changed. I mean, you have something the difference between the two things you're comparing, is that something has moved.

JHD: I mean, whether it's moved or it's been a separate, disparate addition and removal is a contextual thing that you're going to have that's a semantic that you have to add. That we can't assume. Either way.

CPC: But the library will not provide that is what you're saying.

JHD: Correct. Yeah. I don't see how it could.

JSH: Yeah, it can't know. You would be really the only one that would know that.

CPC: Yeah. Yeah. And you could parameterize for that, I presume. But.

JHD: Yeah. I mean, if you put an ID on the object or something, then you could in your filter function, you could then go find that object and say, "Yep, the one that changed was removed here and added here is the same ID," or whatever. But that's a concept you have to supply.

CPC: But I don't think the filter API would let you do that, would it?

JHD: You would have to probably build up a different data structure. And then at the end of filtering, make your inferences about the result.

CPC: Okay.

CPC: Makes sense.

MAH: Sorry. I think it goes exactly into the point I was making earlier. If you have a getter or a data property, ultimately, I need the recursing algorithm to go into those and so how do. Do you do that with an iterator where basically I need to be able to tell you like, "Yes, this is the one to use," but maybe it has moved as CPC was saying. If you don't, the algorithm is going to find a difference there. So by default, I assume it's not going to recurse into those. So how do you not now say.

JSH: Why would it not?

MAH: If I have a getter and a data property, it's finding a difference. So how does it know to recurse into the value the getter returns?

JHD: It can still; you can use options to configure that, but it could still do that. Just because if once a getter and once a data property, but they both produce objects, you would still presumably want to recurse through those objects or not. And that's a configuration option. Or should be. Or could be.

MAH: So you're saying anything impacting the "where" you find the value to recurse into needs to be a configuration object. It cannot be handled through the default.

JHD: Yeah. The iterator protocol doesn't have a communication mechanism like that.

MAH: Right. So now if basically one cares about order of properties or not, that needs to be a configuration option.

JHD: Yeah. You have to know what you care about upfront.

MAH: Yeah.

JRL: Okay. Next topic from DLM.

DLM: Depend a little bit on how we eventually end up defining deep equality. But I could easily see that there would be enough edge cases in this that we wouldn't actually be able to do any better in the engine than in userland.

JRL: And KM?

KM: Yeah. I'm actually want to echo that same point—I think given the number of configurations that are even on this slide, I think you will probably end up with a more efficient implementation to just write the version that you want with the configurations that you want separately or have an exponential number of all possible different functions that you can call. And each of those is implemented separately in the engine or something. The only way you would get better performance is to do something like that where dispatches to a prebuilt exponential number for all possible interleavings of those things and call that, which is going to be enormous because you probably have way more options than this. By the time we're done because this doesn't include property order. It doesn't include getters—maybe it doesn't because it has descriptors—but there's probably going to be many, many other things in there. It doesn't have Proxy things, which I will imagine also be something that people will care about.

JSH: That's "modes". Well, it could, but it would require "modes".

KM: Yeah. And so then the exponential grows pretty fast. And at that point, then it's probably just better to know upfront which one you wanted and then ship your own copy of it or something or have some sort of library that has this and will build this for you in JavaScript, which probably about the same performance as the engine anyway. And just ship that version or something.

JSH: You're talking about determining the performance for determining equality. Not the subsequent handling of that, right?

KM: I mean, both finding the values and then, I think because of iterators themselves being the protocol is not outstandingly fast. So if you wanted something fast, you probably wouldn't even use an iterator at all because it's just going to be faster to not have an iterator. And you were talking about—we're really getting in the weeds of performance—then yeah, you probably don't want an iterator at all. And then at that point, then we're talking about a totally different API, which maybe is stage one. So think about that. But it's probably going to be a lot less ergonomic if you want it to be very fast. And then, of course, that then has conflicts and so then users will still ship their own thing anyway. And we'll have to standardize this thing that maybe users don't end up using because they want something faster. Or they want some other configurations that we don't support. So I don't know. I think the argument on performance, I'm somewhat dubious. It feels somewhat dubious, I guess.

JSH: To be clear, the performance was on the equality itself, not the subsequent handling.

KM: I think they feed into each other, right? Because if the subsequent handling is a filter, you call `iterator.filter()` on something in order to get good performance, you have to backwards-propagate the information of what that filter does into how you search, right? In order to get good performance. And so that's a non-trivial optimization requiring a bunch of inlining and a bunch of other things that the engine may or may not do for this particular thing. So you could probably construct iterators where the engine is faster, but there'd be many other iterators where it would be much slower. Or chains of iterators that will end up being much slower.

JSH: Yeah. So yeah, we were thinking that the initial is there a difference. That would be quite optimizable. But then the subsequent part, that's not where you would get the performance benefit. This is where you would get standardized convenience.

KM: Still somewhat dubious that it's going to be much faster than the engine, but we can talk about that in a future stage if you guys are there. But.

JRL: Okay. So continuing the same performance discussion. OFR is saying from a performance perspective, options bags being needed for fast mode is not great in the message. And OFR will speak next.

OFR: Yeah. Just a comment on that distinction: I do think that there is a part of the proposal that potentially could be implemented efficiently, which is basically the `compare` to objects and tell me `true` or `false`. Depending on the equality, that part can be implemented efficiently, I would say. But then if you do in the same comparison already want to be able to surface where exactly it failed, that already would be I think there I completely agree with Keith. That would not be faster than implementing it in JavaScript. In particular, if you think about if you write this in JavaScript™, then you will do something like "oh, if this is true, then continue if this is false, then do this other thing". Whereas your iterator basically needs to surface the whole information even if not nothing of that is ever used, right? If I only care about some detail here, I still need to remember the path where I am in the object. I need to, basically for every walk, I mean, the engine basically needs to do all the state tracking that the most complicated object walk in user space would do. So yeah, this is potentially slower than implementing it yourself. And what I'm not sure about is if this split can be effectively made. With the current shape of the proposal, if it's really just one API and everything is just configuration modes I'm not sure we'll be able to actually draw that line and yeah.

JSH: Okay. So for instance, this is just the first thing that came to mind. So let's say that `assert.equal` is using this. And let's say that it's using a reporter that is only telling you "success" or "failure", not any information about it. In that instance, it would be leveraging only "fast mode". So for instance, there you would be able to get the performance benefit from it being in the engine. And then if you subsequently needed to run it again, by let's say your assertion error has `reasons` (that would be lazy). It calls `compare` again and then it gets the information. But only if it's actually accessed.

OFR: Right. That's the part that I'm skeptical about. Are you proposing that you would run it once and then it would be fast as long as you don't look at the reasons? Because I think that will not be possible. What I think would be possible if the user actually manually calls it twice, like first calls it without deviations and then if it fails, calls it again with deviations. But that is probably quite a bit less ergonomic than to use.

JSH: Well, that's why it would be built into something like `assert`. Everyday-users would not probably want to handle that. And then something with `assert` would do that for them. So I agree that is not the most ergonomic. But I think yeah, if it is covered by a pretty standard library, then that's good enough. And it's already way better than what we have now.

JRL: Okay. Moving on from this, SFC.

SFC: Oh, yeah. My first queue item is about the collators. So if some people have been asking about all the different ways that you could go about walking an object or comparing a float or so forth. We already have you don't have to look beyond into a collator to see comparing strings is not easy. It's quite difficult. It's quite challenging to compare strings. Strings that contain text content. And the Unicode algorithm for comparing strings does give you this idea of a primary, a secondary, a tertiary difference. We don't currently expose that—that would be what you would call a deviation. We don't currently expose a deviation, but we do expose flags that you can set to make basically the true/false be tailored so that I think the principle here is that most people just want are the strings equal or not? Are they less than or not? And if they really, really care about what level of deviation, then they can just run the comparison a second time and check with different options. But yeah, basically that general model of making a comparison operation that is really good at doing one specific job, which is comparing strings, is something that's the model that we could follow.

SFC: Which leads into my next queue item, which is: can we start by building the smaller pieces? Because we have Intl Collator, which is really good at comparing strings. I think that we could make something that's really good at comparing numbers because numbers are also non-trivial to compare for reasons that have been discussed at length in this committee in the past. Objects are not trivial to compare for reasons that have been discussed at length just today. Right? And if we were to make comparison functions for each one of those with the correct flags to configure it—how to do it correctly—maybe that's a win for the language.

SFC: I definitely do agree with comments from JHD and others that there's so many footguns in here. It's so hard to do wrong. And I think that that's really one of the main motivations is sort of emphasize that it really is easy to do this wrong. And I think there is room here just from the correctness point of view more than anything else. And the people who are in the best position to actually think about how do you do comparison correctly are the people in this room. It's not the people writing the code. It's the people in this room because we understand the language in principle, hopefully, better than most people who are using the language. So we're the people who can think about all these weird edge cases and have the correct options to handle them. So yeah, that's my thinking.

JRL: Awesome. Thank you.

JRL: It's me up next. Taking off my chair hat—just delegate hat now. I agree with SFC. This might be really difficult to get through the committee. If as a large package of behavior, if we split this into `compare` or split this into the walker part of this, that might be easier to get through committee. But I personally would like the walker myself because I really do dislike recursion. And I've implemented this part of the recursion and found it awful at trying to do the keypad walking—it's just awful. That's my take.

JRL: Up next is also me. So if we were to have the iterator part and we were to have differences, the deviations, I am curious how we can implement filtering because we don't have a peekable iterator helper—Michael \[wink]If I were to call into "full mode" and get the deviations back, but I actually don't care about the first one, how do I check what the first deviation is? And if it could be filtered out? Without implementing my own peekable. And I would like it if we could maybe pass the filtering function into the comparison so that it can determine whether or not this is a difference before it emits the deviation. And then I can just pull I don't know. If compare returns null or something instead of an iterator, if there are no differences or something like that. Maybe that could help me determine that there is no difference.

JSH: I think JHD and I had discussed this before. Do you recall the reason that we opted not to go for that?

JHD: I don't. I mean, the things that just pop in my head as Justin is talking are configuration options at least allow the possibility that engines could optimize something even if it doesn't seem likely or it doesn't happen right away. Whereas if it's just a generic function, they can never really know what the intention is. And so there's no opportunity there. Maybe that's not important if the implementers don't think that there's a performance gain to be had, but.

JRL: With what we've discussed so far is that we would be implementing filter as a second step in the iterator. You would return to me a bunch of deviations, and I would have to do the manual filtering myself.

JSH: Yes.

??: But he's saying passing it in.

JHD: Right, right. You're saying you want a pre-filtered iterator.

JRL: Exactly.

JHD: Right. And so that's what I'm saying is that I think I guess we could still do that. But it would just be sugar for.

JRL Yeah. But I'm going to be doing post-filtering because that's the only way that I can guarantee whatever the extra behavior that I need. That's what we were discussing before. If we can do it pre-filtering, then maybe the iterator doesn't even need to be allocated.

JHD: You mean like passing in a filter callback and then give me an array instead of an iterator?

JRL: Or not an array, but if there are no differences, no deviations at all, and the iterator the comparison can determine that, it can just return null or not an iterator, whatever it is.

JSH: Oh, I see what you're saying.

JRL: But if it returns to me an iterator, now I need to implement the filtering post-step and also implement a peekable because I still have to return that if I actually care about that deviation.

JSH: I like the idea.

MAH: So I heard multiple times now that it's difficult to implement walking and in a world where I think people are going to be actually writing that code less and less themselves. Does it actually matter? As long as there's a way to implement it today and I think MM made the point that it's usually often easier to replicate a pattern than it is easy to read. If that is the output of an LLM, doing the walking according to your parameters, for your use case, do we really need it?

JHD: Yeah. LLM output is so horrifically unreliable that I think that the advent of LLM assistance dramatically increases the reason *why* we need to take away their need to use an LLM to write it so that it can be done correctly.

JRL: SFC has the same point. LLM-authored walking code scares me. End of message.

JSH: Yes.

JRL: OFR?

JSH: Oh, actually, sorry. Before we move on, I think it's also important to point out that as humans, we find it quite difficult. So if an LLM is going to do this and is going to do it wrong, then the human who's going to check it later is just going to cry.

\[many nodding around the room] JRL: And as a quick reminder, we have 10 minutes left in the time box. OFR?

OFR: Yeah. Let me look at what I had in the queue. Oh, yeah. So I guess there's a question with private state. That we haven't touched on yet. I don't know. How do you compare private Symbols? How do you surface it? Yeah. Will this leak? Will this leak private Symbols that would normally not be accessible outside the class? Things like that.

JSH: So anything that would require special access would need "modes" to do that.

JHD: Yeah. There's no such thing as private Symbols. So there are private fields, and there are innumerable and non-innumerable public Symbols. But nothing can be this isn't a new capability, basically. You wouldn't be able to get to anything that you can't already get to. I know V8 has the concept of private Symbols, but in JavaScript, there is no such thing. Currently.

JRL: Are you going to respond?

OFR: I'm not sure. For example, if you instantiate a class multiple times, that has a private method, then basically these are going to be separate things. And so you would have to somehow, for example, surface that difference.

JHD: No, that private methods are a form of private fields, which are / could be implemented as private Symbols inside the engine. Could also be implemented as completely distinct weak maps of receiver to field value. And it's not a property of the object. You cannot observe the existence of those things and therefore there is no difference to report. That is by design. In the same way, you cannot look at two functions and know how many variables they close over—or define.

OFR: So what you're saying is in your equality if you evaluate the same class literal twice and then create two instances, from these two classes, that difference would not be observable in your equality?

JHD: Yeah, I think so.

OFR: Yeah.

JHD: I mean, I guess the constructors would have different object identities, so that would be visible. But that's the only way they are observably different.

OFR: I would have to think more about it. But it seems like there is potential for exposing encapsulated state in general. I don't see how.

JSH: I don't see how either.

JRL: I'll respond to that one. God, though. Please, though. That was actually mine. Hard private, please. Outside from the outside, things private state cannot be inspected. From the inside, it could. If the class were to itself expose a comparison method or something like that, that is up to the class. Maybe not part of this proposal. But from the outside, for me, just doing object keys, please do not give me access to the private state. That'll break so many things.

JSH: Yes, yes. It is not the intention to change how you access things in this proposal.

JHD: Yeah. I mean, I can certainly see the possibility, if an engine implements private fields and methods, using a form of private Symbols, I can certainly see the possibility of bugs that accidentally leak that state. But that would be a very bad bug and not an intentional outcome.

JRL: EAO?

EAO: It is not clear to me what is the problem that this is ultimately trying to solve or what is the simple, clear short explanation of the motivation for the proposal. When I look at the explainer or when I look at the slides, I get a very strong implication, at least, that this is about performance. And I am a little bit confused by the for example, the use cases that are presented here for production. On the slides, where my sense is that, wait, if we accept this thing, none of these none of the code I'm looking at on any of these slides would actually change. Some of the maybe internal implementation details for these things might change. So it is not clear to me what it is that we are seeking to decide on when we are deciding on whether to accept this for stage one. I understand very well the considerations for what we're discussing regarding stage two and specific implementations, but it's not clear to me what the fundamental problems are that we're looking to solve with this.

JSH: Okay. So I think there are a few. One is "this is hard, and getting it right is difficult".

EAO: What is hard? What is “this” that is hard?

JSH: Like the deep comparison. The determining whether something is equal. The walking.

JHD: Cycle detection, knowing that descriptors are a thing and all of the aspects of JavaScript objects, it is for people outside of this room, it is very difficult to do that correctly. And for people in this room, it is sometimes difficult.

EAO: Do you have this somewhere written down?

JHD: If not, then we should.

JSH: Yes.

JHD: Sorry. You mean what we've just said? Is that written into the proposal?

EAO: What you're describing is the motivation for the proposal, which is the fundamental thing we're looking to decide on for stage one. And this is not well presented at the moment, which is, I think, a concern.

JSH: Okay. I can update that and put it in explicitly.

EAO: So is the motivation that this is hard?

JHD: That's one of the main motivations. It's quite difficult. It requires a lot of knowledge that the vast majority of people don't have. We do. And to standardize how that happens.

JRL: Okay. So we have roughly three minutes left, and we are already a little bit late because it took time to find note takers. If possible, can we move quickly through this queue? But I imagine you are going to ask for stage one. So please decide if you need to do your queue items. Up first is Mateo.

MAH: I just want to point out I'd like to see ultimately an example of how comparing a set, for example, would work. Walking into a set where elements in a set are supposed to be unordered. So I have actually a hard time wondering how you can customize that.

JSH: Sorry. Items in a set are insertion order, no?

MAH: I mean, some people would consider a set as being unordered. Yes, there is an insertion order, sure. But some people might want to consider the set as being unordered. Unlike an array, for example.

JSH: Okay. I don't know if that's real because, for instance, if you call array from on a set, you will always get a deterministic result.

MAH: I understand. But semantically, people would consider a set as different than an array because if you add an element to a set, if the object identity already exists, it will not add it again. Unlike an array where you push it. So that's why I'm saying semantically, users might consider a set as being unordered and I don't know what the semantics for comparing them in that case would be.

JRL: So we have two minutes left. Is this something that can be discussed on GitHub?

MAH: Hopefully.

JRL: Okay. Perfect. WH?

WH: I'd like to point out that unordered set comparison with object cycles is the same as the graph isomorphism problem, which, as far as we know, is NP.

Okay.

JRL: DMM?

MM: I'm sorry. Waldemar, can you state that again?

WH: Comparing unordered sets whose elements are themselves objects containing sets that form object graph cycles is the same as the graph isomorphism problem, which is NP.

MM: Okay. Got it. Thank you.

JRL: DMM?

DMM: So I think this proposal is trying to bite off an awful lot in one go. And I think you're essentially building a concept of equality for objects as part of doing the comparisons. And I don't think that's possible with things like classes that allow for encapsulation and encourage it unless the classes themselves participate. And I think if you're allowing—if you're telling people what the differences are, then classes do have differences that affect their equality in their private fields. And in their private methods. And you're either going to end up leaking that stuff or you've got to say, "I just need a thing that says these are different." And the class has to participate in that. But I wonder if it would be easier to build up an idea of what equality means in JavaScript in this sort of framework and then build wherever we can wherever we're allowed to see differences on top of that.

JRL: Okay. So Duncan's point is maybe the classes will have their own comparison method. We are now over time box, Michael. Has an end of message motivation has been muddied; would prefer to see a written problem statement on screen before agreeing to stage one. Do you happen to have that in these slides?

JSH: No, I can do it and come back.

JRL: Okay. We do have time at the end of today. We have plenty of free time. Maybe we can schedule a continuation but right now we are eating into AKI’s time.

JRL: So we are not asking for stage advancement at this time. Maybe we'll present it again as a continuation later this meeting.

### Speaker's Summary of Key Points

* Reviewed past proposal presentations
* Highlighted changes since last presentation
* Reviewed several production use-cases (as well as the obvious testing use-case)
* Extensive discussion on nuances and difficulties faced by users
* Discussed relevance with the advent of AI (and AI slop)

### Conclusion

* Motivation was generally accepted
  * Many delegates were moved by the need for this problem to be solved natively rather than leaving to an AI-generated solution (to a problem almost nobody understands).
* Several delegates wanted to see a written statement to vote on. A continuation for later the same day was scheduled to review and vote.

## An introduction to the EU CRA & how it matters to all of you

Presenter: Aki Rose Braun (AKI)

* [slides](https://hosted.akiro.se/2026/Ecma/TC39/Cyber%20Resilience%20Act%20primer.pdf)

AKI: Hello, everyone. Good morning. I am here to tell you all a little bit about the EU Cyber Resilience Act because I'm pretty sure you all need to know about it. It is product safety regulation in the EU that is going to impact all of you. It covers software and products that contain software, with stated goals of improving transparency around security breaches and ensuring security for the entire product lifecycle. Whether or not you are based in Europe, the only way that you can have access to the European single market is if you conform to the Cyber Resilience Act. So if you want to be able to sell things in Europe, you have to conform to this regulation. In order for this information to be helpful to you all, there's some quick assumptions to go through:

* You produce a product,
* it is not one of the important or critical products, and
* your product contains something that's delivered to your users.

So either it's software that they install or it's a hardware device; it's not pure SaaS—that's regulated by different regulations. And also, that your product *is a product* and that involves economic activity.

AKI: You all are probably already accomplishing many, if not all, of the CRA's “essential cybersecurity requirements”. If so, your biggest lift is going to be documenting them. And if you're not, it’s probably already in your backlog and your biggest lift is going to be convincing executives that they need to care about this.

AKI: The most important takeaway for this—and definitely for those of you who already work in cybersecurity and are predisposed to over-index on high security controls—the CRA focuses on a risk-based approach. Not everyone needs lockdown mode. Manufacturers need to focus on making sure that you are treating risks that are relevant to the users that you have.

AKI: The CRA lists 14 product-specific requirements that products need to conform to, along with having a documented vulnerability handling policy. If you've had these things on your roadmap, but you've just not been able to get them prioritized, this is where we come back to that business case to shore up security. All the things that you have on your roadmap that you're like, "This is a thing that we really should improve, but nobody who makes the final decisions on how we spend our time thinks it's important enough." Now it is.

AKI: With the exception of vulnerability handling, the CRA has no input on your internal processes. It is not about how you go about accomplishing your goals, just that you just that the end result fulfills the requirements. Regulators want to be able to run tests on your product with very little interest in how you got there. I'm not reading these all to you, but these are the 14 essential cybersecurity requirements I mentioned. The short version is: a product needs to be secure by default. It needs to have automatic security updates. It needs to have some sort of identity/access management, minimize the data that it processes, protect the data that it processes, minimize the impact on other things on the network if it is compromised, and provide secure deletion functionality.

AKI: It's time to beef up your CI/CD processes. I think for the people in this room, you likely already have robust CI/CD systems; this is not going to be foreign to you. What you need to keep in your technical documentation, which is like internal documentation that you don't have to give to anybody unless regulators ask. It'll include generic product info like the intended purpose, the versions that this documentation covers, if it's hardware: photos and illustrations of the hardware, and a copy of the user instructions that you give to users. You need diagrams that explain component relationships, which means you need to know what is in your software, which apparently is revolutionary. I find this deeply disturbing, but it's the reality we live in. Also, SBOMs are now a legal requirement, which is great because guess what? Ecma standardizes CycloneDX, the SBOM most commonly used for cybersecurity. So if any of you feel like you should be getting involved in TC54 (Software Supply Chain Transparency), you can have input on that.

AKI: So you need to have the basic info about your product. You need to have diagrams explaining component relationships, and the SBOM. You need to have a copy of the risk assessment that you did and showing how you treated all your risks. You need to document how you came to the conclusion of what the support period is for your product. This is on its face the part of the regulation that is trying to reduce e-waste. And regulating that you can't just say everybody needs to replace their thing every two years. Everything needs to last at least five years. And depending on how people use the product, maybe much, much longer. So you need to document how you came to the decision of how long you're going to support your product. And then you need to keep evidence of your conformity, which is really just goes back to how you treated the risks and your risk assessment.

AKI: The overall CRA mostly goes into force at the end of December 2027, so you have time to make sure that you have all your documentation together. You have all your risks treated. But vulnerability handling and reporting needs to be ready by September. There will be a single reporting platform in the EU, which is where you report any known exploitable vulnerabilities. Surely it'll be done in time. If it's not, I'm sure the Commission will come up with some creative way to make sure that as of September 11th, when everyone is responsible for reporting their vulnerabilities to the EC, maybe will have like a form or something.

AKI: So the vulnerability handling, you have to provide an early warning to ENISA within 24 hours of a "severe incident," or discovering actively exploited vulnerabilities. Within 72 hours, you need to produce a vulnerability notification. Which includes the general nature of the exploit and mitigation measures that you are taking and mitigation measures that your customers can be taking. And depending on the sort of the category of vulnerability, within 14 or 30 days, you need to put together an RCA. And you need to tell your users or ENISA will. Which is <laughs> such a great threat. Another fun thing that I think the open source crew are going to really appreciate is if you fix something upstream, you have to share your fix in a machine-readable fashion. So for example, opening pull requests on the open source project that you incorporate into your product. That is going to be a legal requirement. Now, the open source project will not be obligated to accept that PR. There's no obligation to integrate somebody else's code into your project. But at least you'll have companies with the budget to fix things. Fixing things and then sharing those fixes with you. I'm really excited about that.

AKI: I've spoken to TG3 about this a couple of times. And asked some questions. And there's been a lot of anxiety, I think, about what the regulators will or will not do. I can't tell you. What the regulators are going to do. I can tell you that the CRA is not about gotchas. It's not about generating revenue from fines. Regulators aren't interested in punishing organizations that are trying. And they're also not interested in going after small businesses. But that's actually the very last thing I'll say with confidence about what the regulators plan to do. I know show of good faith isn't the binary test that you all want. Life is grey areas. I put this together so that I could blow through it as quickly as possible because every time I end up talking about this, I end up taking questions for an hour. So 10 minutes down. And I am ready to take your questions. Who has questions about the CRA?

JRL: SHN.

SHN: Hello. Thank you. I was about to type, but you called my name and I just want to, one, thank you, Aki, for doing the presentation and bringing the information to everybody's attention. Two: TC54 has been deeply working on SBOM, CycloneDX. It's on edition two. It is very relevant for the CRA. And three, my actual question. Aki, you talked about vulnerability. So conformity is expected to be shown by December of 2027. And you said vulnerability by September. Is that September of this (2026) year?

AKI: Yes.

SHN: Okay. Good. Thanks. These are important to know. And also, just for everybody on the call, please join in to TC54 if these topics are relevant for your organization. Thank you, Aki. Thank you for my question.

AKI: Oh, I said I would come back to the browser's thing. Everything I said does apply to browsers. And also, you'll have to show conformity in a more thorough manner. One of the ways to do that will be following the standard that's being developed right now. And one of the ways will be hiring consultants to assess your product. And I imagine the bigger companies will just do that. But the standard should be good. And it'll give you a chance to prove your conformity. And that's like the biggest difference between important critical products and what's called the general product is just how you show your conformity. WH?

WH: I have a couple of questions. What about exploits which are reported to you but which you don't know whether they're being actively exploited? Is there a time limit on when you must fix those?

AKI: Yeah. So there's two terms that are kind of used. It's known exploitable vulnerabilities and known exploited vulnerabilities. For the known exploitable vulnerabilities, you do your risk assessment and you assess whether or not that will actually be an exploit on your own product. If it's a component where you don't actually use that code path that is exploitable, then it's not actually an exploitable vulnerability for you. If it is an **exploited** vulnerability, that's when that 24-hour time window comes up and where you have to respond as quickly as possible. And that's the 24 hours is just the early warning to ENISA. It's not like you need to magically have everything fixed in 24 hours because that's literally impossible. And we all know that. So that's kind of the distinction there is known exploitable vulnerability. You do your risk assessment. You see if it actually impacts your product. And known exploited vulnerability is you scramble.

WH: Are you allowed to sit on vulnerabilities you've known about since 2022?

AKI: I can't say for certain. If you have a known exploitable vulnerability that's been hanging around for a long time, you're going to have to be able to prove that that isn't causing a risk to your customers in order to have your in order to have your declaration of conformity.

WH: Okay. My other question was, what about things which do not connect to the internet? Are those subject to this as well?

AKI: Probably not. The terminology is product with digital elements. But generally, the requirements relate to well, I should say there is no legal definition of the internet. But if you're talking about "a public network", such as the internet, then things that don't connect to a public network but do connect to a network are covered. There's an entire other set of standards for operational technology that I know nothing about because they haven't been shared with me.

WH: Okay. Thank you.

AKI: Yes.

JRL: SFC?

SFC: Does this apply to a website?

AKI: A website may be SaaS, but for the purpose of the CRA a website is not a product. That is covered by NIS2. If you have an iOS app, that's a product. If you encourage people to install your website as a PWA that's not a product—progressive web apps exist inside the context of the browser and don't stand alone. If you have an actual installed application, that's a product.

AKI: Native apps have more requirements. Yes.

JRL: There’s a side discussion about web apps not speaking to a microphone. Sorry. So what was the answer? Just clarifying, web apps are not products.

AKI: That's right. Web apps are not products. Even if you tell your customers to install it on their home screen by pressing and holding the bookmark button or whatever, it's still a website.

JRL: Okay.

JRL: Up next is me. Can you share the slides so that I can?

AKI: I will absolutely share the slides. I only finished them last night, because I was trying to cut out some stuff that you all wouldn't care about.

JRL: Perfect. Thank you. ABO.

ABO: Yeah. So what if you first think that a vulnerability is exploitable and then you notice that there's maybe some lock pattern, whatever, you find out it's exploited. Do you change that? What would that look like?

AKI: Yeah. So assuming that you realize that you realize that it is an active threat to your users, that's when that clock starts ticking of 24 hours to alert ENISA that something is being exploited.

JRL: EAO?

EAO: So if we were to theoretically or if somebody were to theoretically discover a vulnerability in the JavaScript™ specification or another Ecma specification, would that be actually your responsibility to deal with it?

AKI: Delightfully, no. Because the standard is not a product.

EAO: So if a specification is discovered to have a vulnerability there is no requirement on any reporting even if the specification is implemented by multiple products?

AKI: Right. So if any of those products find out that they have implemented a bug, then they have the responsibility to fix it. And that process will follow the vulnerability handling process that you have already as an organization put together. And you'll be responsible for reporting it to where it needs to be reported to. So if it's on open source component, you report it to the open source project. If it's the standard, then you would be reporting it to the committee.

JHD: And to add on to everything correct, which is correct that AKI said, as the convener of TG3, I would say, yes, ethically, we have that responsibility even if the CRA doesn't impose it. And I included a link there on the queue for a CVE that we filed on the spec two years ago. There were additional separate CVEs filed on the implementations that had implemented that thing. And so if that were to come up again, then yeah, we would report it. Whether we're required to or not.

JRL: LCA?

LCA: Yeah. Just clarifying, WH's clarifying question on non-internet connected devices. I think given you have for example, you have a smart door lock and a smart door lock is not connected to your network and you just tap it with a key and it turns out that now you can tap it with, I don't know, your credit card and the door unlocks. That is still covered.

AKI: That is covered. Yes. And anything that is connecting to anything else. So like I said, there's no legal definition of the internet. We actually wrote in the standards by the way, I am the rappoteur for the VPN standard and I've worked on several network-related standards. We have written many times the phrase a "public network such as the internet". But it is not strictly the internet. It is anything that connects to anything else via any connectivity method.

JRL: Okay. We have an empty queue and 30 minutes remaining.

AKI: Wow.

JRL: Does anyone else have questions?

SFC: It should be OSS, but if I maintain an open source library like many of us do and then someone files a security issue or something, then and says "because of the CRA, please fix" what's my duty as a library maintainer not being paid to work on a thing and doing it in best effort versus some person who comes and is because of my LLM discovered a security vulnerability in your thing that is a potential vulnerability, please fix immediately. What's the duty and responsibility in that type of interaction?

AKI: Yes. Since we have the time, I will absolutely talk to you all about the open source stuff. Nothing. You have zero legal responsibility. Do what you want. Should you do something about it? Yeah. Probably. But the CRA is really clear. If you're project is not involved in your own economic activity, and that's not GitHub donations. That's actually selling something or selling ads or otherwise engaging in economic activities. If your product is not that, then you have zero obligations. And in fact, quite a few protections because the EC wants to encourage open source to flourish. Now, some of you may have heard the term open source steward, which is a new thing invented by the CRA. And open source steward is a category of "legal person," which is company. It's a company—usually a nonprofit—who handles, for example, vulnerability handling and making sure that those processes are in place and supports open source projects. They have no legal obligations in the sense that they can't be fined for not doing something laid out in the CRA. But open source stewards exist to sort of provide a little bit of extra protection for big, big, big open source projects that are incorporated into lots of applications and lots of commercial products. So for example, the Linux Foundation will be an open source steward. The Eclipse Foundation will be an open source steward. OpenJS, yes. So those organizations, those nonprofits that tend to provide structural support to open source projects, they have some lowercase r responsibilities to make sure that vulnerability handling is done so in a responsible manner. But there's no sort of damages if something goes sideways.

SHN: So to follow up what you just said.

AKI: Yes.

SHN: Sorry. Thank you for letting me interrupt. You just listed a list of different nonprofit organizations that are considered to be open source stewards. And they have some responsibility. And you noted their Linux Foundation, OpenJS, and a few others. Where do you see Ecma's obligation?

AKI: Ecma will have no obligation as it's structured right now. Because I do not believe that ECMA-262 would be considered an open source project in that context. I think it is even outside of that. If Ecma decided to start providing infrastructure support for open source projects, including anything sort of related to the committee that we end up wanting to provide in a broader sense, then Ecma would become an open source steward. TC39 does have open source projects. I don't think any of them are included in products at a level that would rise to a need for an open source steward. And it's all quite voluntary. So if TC39 ends up, I don't know, shipping a lot of separate modules and needs a structural support, then perhaps Ecma would choose to step in and do that. But there's no obligation for Ecma at this time.

SHN: Thank you.

EAO: So beyond my work at Mozilla, I maintain a bunch of open source libraries and so on. And on GitHub sponsors, for example, I do have a level where I accept money and if you give me money at some certain level per month, I put your company name and ad in the README of one of these projects and separately from this. And then there’s TideLift that offer agreements getting some money from them per month for doing very much the same sort of thing as directed here by the CRA. Does participation in these activities and getting some monetary benefit and being a signatory to agreements relating to the maintenance of open source projects make a person more liable in any way for behaving as the CRA wants them to behave?

AKI: The short version is no. You have no additional obligations one can take donations or contributions like enough to live, have a good salary, whatever. It's pretty much fine. The sort of the only grey area there is for companies that have say they have an open source product and they give that away for free and then they sell service contracts. That becomes economic activity. So if that sort of the structure of a company then that is a lot closer to requiring the cybersecurity conformity and stuff.

EAO: So does the legal personhood part here matter, where I am an individual, but do I become a company as, for example, at some point I have been registered for VAT or other purposes for Finland. So I do have a company identifier that is not separate from my personal identity for Finnish taxation purposes, for instance.

AKI: That's a bit of a grey area that I don't know well enough to confidently answer.

EAO: Great.

JHD: So I also have Tide Lift and GitHub sponsors. And I wrote this on the queue originally as a statement, but it's going to turn into a question for Aki. In a shocking reversal. But Tide Lift is a contract. So that has tax implications. And is work for hire. As opposed to GitHub sponsors, open collective, everything else, which is literally just patronage and you can thank them by putting their logo up that's not they're not buying an ad. You've just let it be known how you'll thank them for their gift, right? It's a gray area, but my understanding is that you can get away with that.

EAO: For me, it is the reverse of that because of Finnish legal requirements.

JHD: Really? Fair enough. So I guess it depends on your jurisdiction. But my question then is because I have a contract with Tide Lift, and I am receiving money, in exchange for maintaining projects to a certain level of standard, does that now create obligations for me that wouldn't otherwise exist under the CRA?

AKI: I don't believe so. However, I think I will need to sit down and reread the definition of manufacturer, which is like eight paragraphs long. To be a little bit more confident. Also, Finnish law is giving me some headaches right now. In particular.

EAO: Sorry. And please fix.

AKI: In particular, Finnish law and how Finland is implementing the CRA is a little bit weird. We'll have to see how it shakes out. It's not done yet. Nothing's done yet. I think the example that's being given in the past when I'm speaking to the European Commission about this in particular is when they are referring to a company with a product such as oh, for example, I use Invoice Ninja for my invoicing. It's self-hosted. They also offer a hosted version. And they do support contracts if you want to self-host, but have them on speed dial, whatever. They absolutely are required to conform to the CRA. That's a company. It's a going concern. That's what they do. The Tide Lift and whatnot is a little bit squishier. So I'm not as confident with that. DMM.

DMM: Yeah. So the definition you gave of economic activity seems very different from the sort of definitions of transaction that I've seen regarding sanctions legislation. And I understand that difference in a sanctions legislation is meant to be discouraging a thing, whereas this is meant to be trying to be inclusive and encouraging and not too limiting. But it does make me what is if I'm doing some open source work, but I am accepting contracting from that, and I am interacting with the person making a request, does that start to count as economic activity? Because I am now getting my livelihood, and I am talking to them and making sure that they are happy with the result.

AKI: Unlikely. In this context, think about scale. The EC is not interested in going after individual open source developers. They're just not. So I think scale is an important way to look at it. If you're just one person who's just chugging along and doing the best, and sometimes somebody pays you to add a feature to your project, it is unlikely that that would be covered. Now, your customer, who is then integrating that component into their own software, is responsible for the cybersecurity of the component that they are integrating. So everyone is responsible for the product that they are placing on the market. All the components, all of it. So if you are a manufacturer, for example, and there is really bad vulnerability in a module that you're using, and you don't respond to it quickly and in good faith because you say, well, it's not my problem. I'll wait for somebody else to fix this. That's not going to fly anymore. You have to make that effort. So manufacturers are taking on that risk by including open source modules. And the whole point of having open source steward is being able to do security attestations. So you have big open source projects that will have a steward who makes the effort to put to do a risk assessment and to do all these things and put together a security attestation that they can then pass on to the manufacturers who now they've done their due diligence because they have a security attestation or they have some organized manner of which the security is assessed. So I think whether or not you have any obligation also the whoever is paying you and is then integrating that component, they also have an obligation. They have the primary obligation.

PST: Just to verify that what I understood at first, then is correct. So if we are using open source software providing some service for a manufacturer, that is releasing a product in the EU, the CRA will apply to the manufacturer.

AKI: Yes. The CRA applies to the manufacturer.

PST: Thank you.

AKI: Yes. I don't know if you saw my lightning talk at FOSDEM, but my lightning talk at FOSDEM was "Falsehoods, FOSDEM attendees believe about the CRA". So I spent the first day of FOSDEM just going around to every talk that was CRA adjacent and listening to people confidently say incredibly incorrect things. And writing down the inaccuracies but not citing them, not saying who said them or anything like that. Just like making a note of the concepts that they were saying. And then I spent the first night of FOSDEM writing that talk. And then I gave a lightning talk at FOSDEM. It was just like a whole bunch of stuff that I'd heard that wasn't accurate. Because it's a lot. It's a lot to know. And even for that talk, I grabbed the people from the European Commission and made them review all my slide so I could be 100% confident that I was right. If you're going to come at people, you got to come correct, right? So that was mostly open source related, which I'm happy to keep going into if you all want.

JRL: Yeah. We don't have anything else on the queue. We could move on to continuations, but getting legal advice from AKI is kind of useful.

AKI: This is not legal advice. I am not your lawyer. I'm not a lawyer. I'm not your lawyer.

JRL: If anyone else has questions, please why not raise your hand or something? And then we'll get to it.

AKI: All right. So the browser standard is still being wrapped up this month. And it needs all of the standards need more eyes on them. And if any of you manufacture VPNs for the love of God, come find me because I need contributions. But the browser standard is still wrapping up. And that means that one can go find it on its available labs.etsi.org. I can drop that in matrix. The standards need to be reviewed by experts so that they are implementable. So the rapporteur, our job is to do a *technical* interpretation of the legal text, not a *legal* interpretation of the legal text, a technical interpretation. So we know the CRA reasonably well. And all of the rappoteurs have some concept of the technology they're working in. But we need manufacturers to show up. So there's still time to have your voice heard on that too. Yeah.

JRL: SHN, you have your hand raised?

SHN: I just wanted to make a last comment. I think this presentation and this discussion was extremely interesting. Not only from the CRA perspective and the implications on products, but also the implication on a lot of the work that many individuals in the room do. It could be interesting at the next plenary that maybe there's a follow-up. Maybe you don't have an hour on the agenda, but 30 minutes. Where some of the questions that were not answered and couldn't be answered because AKI can't know everything, all the time. That maybe it can continue because the topic of the CRA and how it's going to grow and the new elements that are going to come in will continue. And I think this is something that this committee should also have. Some visibility into at least from a conversation perspective. So I hope you can always keep maybe a 30-minute slot on the agenda for the next two plenaries to give AKI some time to also answer some questions. Thank you.

AKI: I think that's a great idea. Thank you, SHN. And also, so if you all have specific questions that you want to send my way, I will do my research and get back to you. But then I can sort of collect those questions as well and present them. Next plenary.

### Speaker's Summary of Key Points

* The EU Cyber Resilience Act is going to impact basically any product-based tech company
* Open source projects will be protected from the fines, but may have some practical desire to align with the cybersecurity requirements

## Error stack accessor for stage 3

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-error-stack-accessor)

JRL: Okay. Nothing else on the queue? So we have 10 minutes before lunch. We do have a 10-minute slot, a continuation from JHD. Error Stack Accessor.

JHD: Yeah. So all of the HTML PRs have been approved by editors. And they are waiting to merge them until it has stage three. The test 262 PR is still in one of the maintainers' review queue. I'm told it's second in line. So it would be fine if I have to wait until the next meeting to ask for stage three. But it would be awesome if people were comfortable with me getting conditional stage three on the test 262 tests being approved and/or merged. So I would like to ask for that conditional stage three.

JRL: Anyone in support? RGN on the queue, I'll let you keep typing.

RGN: I'm actively reviewing now. I still expect it to be done today. I support stage three.

JRL: Okay. Support from RGN, DLM?

DLM: Yep. Yeah. I would note the last time we granted conditional stage approval based upon test 262 reviews. I think it took over a year. But in this case, I'm pretty confident it'll actually happen. So I'm fine with stage three.

JHD: If it doesn't happen by the next meeting, I'm happy to demote it to 2.7. I'll just commit to that.

JRL: Okay. We're also getting support from Mark and Olivier. Both plus one stage three in the message. So we've gotten explicit support. Does anyone object to conditional stage three pending merging the tests? Okay. Congratulations.

### Speaker's Summary of Key Points

* Tests approved

### Conclusion

* Error stack accessor reaches stage 3
* if tests aren’t merged by the next meeting, will seek demotion to stage 2.7

## agreeing to consider impact of RegExp proposals to linear implementations

Presenter: Aurèle Barrière (AUR)

* [slides](https://aurele-barriere.github.io/ecma_amsterdam_handout.pdf)

AUR: Okay. Hi. So I'm AUR. I will be discussing regexes, linear time matching, and also a bit of, formal verification. Most of this is the result of, joint, research work with CPC, but also today we team up with, both Michael and Mikhail, to ask that we consider the impact of regex proposals, to linear time implementations. So you must know MF and MBH quite well now, but for a bit of context, CPC and I, come from, formal methods and formal verification. So we like to prove things about programs and in the last three years we've been working, especially with modern regexes, and of course that includes, ECMAScript, regexes.

AUR: And so in this talk, I will divide it in two parts. I will first discuss a bit, linear time regex matching, how it can solve, concrete issues, and we will see that ECMAScript spec is actually surprisingly adapted for linear time matching and in fact it is the only language that we know so far in which we can support all lookarounds in linear time, yeah, that's only for ECMAScript regexes that we know how to do that so far. And so of course we will conclude that this nice property, could be important and it would be nice to consider keeping it when evolving, the language. In a second smaller part I will also discuss a bit, formal verification, what it can bring to those modern regexes, how the ECMAScript spec again is quite suitable for those proofs, and, I will give you a quick tour of some of the things we have been, verifying about those regexes.

AUR: To set the stage up a bit, let's talk about, complexity and why we would want linear time matching. Probably this is not new to many of you. But most regex engines that we use today not, not even, just ECMAScript engines, I mean JavaScript engines, but any regex engines that we use, most of them, have an exponential time complexity, meaning that, whenever we increase, for instance, the size of the string, the time the matching time might sometimes increase exponentially. Just as an example, if you try this, on some engines, I'm trying to match here /(a*)*b/ on a string of 15 A's, it took me a millisecond to get, a negative answer. If I increase this to 35 As and suddenly it takes 12 minutes, and of course with a lot of extrapolation, with 100 A's it would take, quite some time.

AUR: Now this is not new, but sometimes this, potential that they have to explode and, and have this catastrophic backtracking behavior, can be dangerous and in fact, it is, the source of a vulnerability that we call redos for regular expression denial of service. Again, this is quite known. We know that a lot of applications are vulnerable and can stay stuck. Executing a bad regex on a bad string, we've seen like services like Cloudflare and Stack Overflow, having issues because of that. And you might think, that, you would never write this example, before the /(a*)*b/, that makes no sense. You would not write such a regex. But it's actually surprisingly easy to run into complexity issues.

AUR: This other regex that I have here, just looking for a sequence of characters and A and then a sequence of characters and then a B, looks completely innocent, but it does have quadratic complexity, which is often enough to break down, some applications. And also at times we don't even write regexes by hand, right?

AUR: So when we were looking recently at recent vulnerabilities, we found quite a few of them, when translating GLOB patterns into regexes. As soon as you have multiple wildcards then suddenly you run into those complexity issues. And this is just one example of vulnerability. In fact, I looked at all of the vulnerabilities I could find for ReDoS in 2026 and there is quite a lot and I probably missed, some of them, but roughly every three days in 2026 somebody somewhere finds, a ReDoS.

AUR: So why do we have this exponential time complexity? Well, it can be explained by, by mostly two reasons. We use backtracking algorithms most of the time and this is because most of these languages, including ECMAScript, use backtracking semantics, right? We should return the first match that would be found by a backtracking algorithm and in fact the spec, describes a backtracking algorithm. So on that example, for instance, (/ab*|abc/), I'm not going to return the longest match like some languages do, but most languages return “ab” because that would be the first thing that a backtracking algorithm would find.

AUR: But also which one reason why we have those, complex algorithms with big complexity is because of all of the features we have. Of course we have many ways to match characters and disjunction and quantifiers like the stars, the plus, the lazy ones, the counted ones, and so on. But we also, for instance, have, capture groups, and if you don't know, they ask an engine not only to return what would what the whole regex is matching, but also to return the substring that would that is last matched by each sub-expression inside parentheses.

AUR: So on that example I just added a capture group around b* and suddenly an engine has to return that the whole regex matched “ab” and that the part inside parentheses only matched, the substring “b”. Next we have ways to add conditions. One of them that we will talk about later is lookarounds. For instance, “a” lookahead “b” is going to be matching only the “a”'s that are followed by a “b”, we have the negative and positive versions of those things and we even have the look behinds that match, the string backward. And I will conclude on these features with one that you might know, quite well. It is back references. It allows you to match the content of a capture group again and we know that theoretically it makes things difficult because we know that it makes, matching problem NP-hard. So right from the start with this result we know that we can't have linear time matching for all regexes. But does that mean that we need to give up on linearity? Well, not necessarily.

AUR: If we look at other languages, some other regex languages they omit some features like the complex ones, lookarounds, and back references. But in exchange they guarantee linear time execution. So they don't have any ReDoS issues. And in other languages, you can have sometimes both an exponential time engine to support the whole, regex catalog, but also on the side a linear time engine that supports a, a subset of features that you can match in linear time. It's been done in .NET, but also it's been done for JavaScript because there is, also this big interest for linear time matching in JavaScript.

AUR: For instance, in V8 there is this experimental engine that was done a couple of years ago, it is hidden behind the flag but then you get to, do actual linear time matching. That same example from before now it takes only a fraction of a millisecond. There are a few unsupported features, but like for a substantial subset it does work in linear time.

AUR: There is also this recent proposal from, a couple of months back that suggested adding this linear time flag. Into the spec and we'll talk about that later also. And if we look at like libraries we can see also, some interest, for linear time matching because there are lots of bindings for using other linear time engines such as redo or the one from Rust. There is also like an entire port of redo inside of, JavaScript. And many other tools.

AUR: But I want to insist on something here. All of these nice libraries, they do provide linear time matching, but it's not for native regexes. Because they reuse algorithms and, they reuse engines from other regex languages. And those are not the same one as a native regexes. And so some features might be missing, but also even when we have the same features they might behave differently. And so the question that we asked ourselves was: is it possible to match actually native ECMAScript regexes in linear time? And the answer is yes. And even more so than in other languages.

AUR: Let's take a brief look at quantifiers to see how they are different, than other languages. And, probably you know or maybe not, but quantifiers in ECMAScript are quite different than in any other regex language. And there are, subtle differences. They change the kind of algorithms that you are allowed to use. And they also change their matching complexity.

AUR: What we are seeing is, of course, the spec text from the ECMAScript quantifiers. And today I just want to focus on two lines of this paragraph. The first one and I'm going to refer it as invalid iterations, it says that if you have an iteration of a quantifier that did not consume anything in the string, it did not match any character, then this iteration is invalid. You should sort of backtrack and try some other way to match the regex. And then there is this other one which is also specific to ECMAScript, which I will refer to as capture reset. That says that every time you do a new iteration of your quantifier, you sort of reset back to undefined the values of all the capture groups inside that quantifier. And this also is not present in other languages as far as I know.

AUR: So how is it different? Let's look at a quick example. Let's say that we want to match this regex /((a|ε)(ε|b))*/ on “ab”. Of course I write “ε” here, but typically you would not even, you would write nothing at all. And so according to the spec, we should do a first iteration of the star in which we match A because that's the left branch of the disjunction. So that's what we should prioritize. And then we match “ε” for the same reason. It's on the left. And that's a valid iteration. We did not match nothing. We matched “a”. So that's fine. And then we try to do a second iteration, we match “ε”, again. And then because there is no “a” anymore, and then we match “ε” again. But this is incorrect. This is an invalid, iteration. And so we backtrack a little bit and we match “b” and this time this is valid. And so that is the final result. We do two iterations and we match “ab”.

AUR: But if we look at many other languages, for instance, if you look at the doc of .NET, you would find that empty iterations are allowed, but they are final. We are no longer allowed to iterate the “*”. So we would do the same first iteration. It is correct. And then we do a second iteration in which we match “ε” and then we match “ε” again. But this time it's fine. It's just final, but it's fine. And so the final result is to match only “a” with that regex and to do two iterations. And then we could look at yet another category of languages, the languages that are designed to be matched in linear time. And I'm thinking of Rust and Go for instance. And in those cases we're going to avoid doing what we call an epsilon loop, meaning coming back in the same point in the regex at the same position in the string. And so on that same example we would do the same first iteration, but as we match epsilon here we realize that we've done an “ε” loop. We came back to the same point. And so that would be discarded. And so the final result would be to do a single iteration and match “a”.

AUR: So obviously we cannot just take an algorithm from another language and apply it to ECMAScript semantics. It's just not going to work. And the question is, can we still do it in linear time? Because clearly all of the standard linear time algorithms that we've been using for decades in other engines, they support the Rust and Go semantics. They don't support ECMAScript semantics. But they do so with linear time complexity in both the size of the regex and the string.

AUR Now the good news is that we found a way to adapt all of these traditional, linear time algorithms specifically to support the ECMAScript star, we also fixed this in V8 experimental because it was using this, other, kind of semantics. And so now we have a way to support this, ECMAScript “*” in linear time. And one of the good news is that, if ECMAScript went the same way as like PCRE or Python and Java, the best algorithms that we have found so far is quadratic in the size of the regex. Sometimes this can be of some issue. So that's a win, for now.

AUR: Now of course, there are still a few open questions that we are not too sure about. For instance, about regex size complexity. It's still an open question to know if we can do the lazy nullable plus, in linear time with regards to the regex size. It's a very rare construct, but it's still an open question to know if we can do that. We know we can do it in other languages. For ECMAScript, I'm just not sure, today. So we know at least we can do quantifiers quite well with this ECMAScript semantics, but I also want to talk to you about doing more than in other languages in linear time. And I told you about this capture reset property that every time we do a new iteration we reset the value of capture groups.

AUR: So on that example I'm matching (/(?:(a)|b)*/). I do a first iteration that matches “a” and defines a capture group. But because we do a second iteration we forget the value of that capture group. And so in the final result, we have undefined for the value of the capture group. And in one way, one consequence of this property is that only the last iteration of a quantifier can define capture groups. And somehow this is good for us because the difficult part about matching lookarounds in linear time is if you have capture groups inside lookarounds inside quantifiers. And what this thing tells us is that each capture group inside a lookaround can only be defined by the last time the lookaround was used.

AUR: So somehow we have to do less work than if we were looking at another semantics. And so, we leveraged this property to design a new linear time algorithms for lookarounds where basically we first match lookarounds as if they were no capture groups inside. And then we reconstruct the groups inside those lookarounds and we are allowed to do this in linear time thanks to this capture reset property. We would not be able to do so otherwise.

AUR: I have backup slides if you want more details about the algorithms, but for now I will just move on. So now this has been added also inside V8 experimental and, compared to other languages and other engines you can see it supports really all lookarounds, even the unbounded ones and the ones with captures.

AUR: And so currently, our intuition on the current state of linearity, in the spec, it looks like with the exclusion of back references everything can be matched in string size linear time, which is quite a lot. It also seems to us that if you exclude, counted quantifiers, but these are known to be difficult for regex size complexity. And if you also exclude this lazy nullable plus, then everything can be matched also in regex size, linear time, which is nice if the regex is also part of the attack surface.

AUR: But of course, one of the other questions that we asked ourselves recently was what about the current proposals, for regex? And it seems to us that, all of these, proposals should not affect linearity in any way. So that's, that's great. There is one, however, for which we are not sure at all. It's about atomic operators. We don't know yet if it can be done in linear time. There is recent work that, suggested algorithms for atomic groups in linear time, but we also realized it does not work if the inner regex is nullable. So I wish I had a clear answer, but for now it's not entirely clear for us.

AUR: And so I will soon move on to, a second part, of this small presentation. But maybe it's a good time to just, stop and ask you a quick question. It's not the full discussion we will have, just, in a few moments. But I was wondering if at this point we know that, you know, there is this interest in linear time matching. We know that there are those vulnerabilities and we also know that we can actually match ECMAScript regexes in linear time quite well. Would you generally agree that it would be valuable to provide users with a way to ensure linearity?

DLM: We already have a large queue, MM, would you like to go first?

MM: Yeah, I'll answer the question you asked first before I ask my question. Yes, yes, I desperately want this. We have a substantial pattern matching system that naturally would have had a regex matcher in it, and we have, kept it out. Because of, of the inability to guarantee linear time. Now the guarantee would have to not just be that it can be run in linear time on some engine, it would have to be, the guarantee of linear, of linear time would have to be provided by the spec and con and such that, implementations were obligated to conform to it. And that gets into the spec, bounding execution costs, which is, kind of unfamiliar territory for the spec. my concrete question was, was just, I probably just missed it as you were going through things, but what is “lazy nullable plus”?

AUR: Yes, it's. When you have a plus that is lazy.

AUR: So this, I think, makes sense. Just a plus question mark. And by nullable, I mean that what's inside the plus can match the empty string. Like if you have like /(a|)+?/.

MM: Got it. Okay. Thank you. And why is that, why is that particular construct, interesting?

AUR: So there's this one thing about ECMAScript, the invalid iteration stuff. It talks only about optional iterations. And so in a plus, the first iteration is different from the other ones. And so if you think about it in terms of automata, you have to sort of duplicate what's inside your plus, because you have one version that will be executed differently for the first time and one version that will be executed, for all of the remaining iterations. And this duplication, if you have nested pluses, can sort of increase. Now it just so happens that if you are greedy, we found like a nice property that makes it work in linear time, with another construction. And if you are also non-nullable. There is a standard construction that works. But there is still this case, where we don't know a construction that does not duplicate the inner inner sub regex and that corresponds to the ECMAScript spec.

MM: Okay. What's the space complexity to turn a regex into a machine that can recognize in linear time?

AUR: So again, if you remove counted quantifiers, it would be linear in the size of the regex, which is nice. But with counted quantifiers, this can really blow up because you could have like iterations, inside counted iterations. And for this, we can expect an exponential, size. But if you look at non-deterministic automatons, it can be linear without this counted, thing.

MM: Well, the, I mean, non-linear, I'm sorry, NDAs, not non-deterministic automata. Would not ha no longer have linear time matched, correct?

AUR: For counted quantifiers, yes.

CPC: Not correct. The simulation algorithms that, that you use, you can use them on NFAs. They keep a bit more state. That's why they have state R, not state 1. But then they still are linear. And that's the key trick that makes it work is you do not need to fully determinize your automaton, which would have exponential space cost. You can have the NFA and run a simulation algorithm on it. That still has a time complexity linear in RxS. So the size of the regex and the string.

MM: Wow. Wow. Yeah, I want that.

AUR: And yeah, I see a lot of, nice things on the queue. Maybe it's best for me to just keep going with the second part and then we can discuss this, linear, how to approach linearity after. Yeah?

AUR: Oh, yeah. If you have things you want to voice right now, go ahead. But of course there will be this, discussion at the end, if needed.

DLM: So go ahead, MF.

MF: Yeah, just really quick correction for Mark. We do actually have precedent for complexity guarantees, like maps and sets have to be sublinear in their lookups, that kind of thing. So I don't think this would be entirely unexplored space for us.

MM: Okay. Thank you. That's nice.

AUR: Okay. Nice. So, time for me to move on to this other part about, formal verification and proof, proofs for those regexes. I think one of the things that really came out of our work on linear time algorithms and that surprised us initially was how difficult modern regexes were. And it's not, specifically ECMAScript ones.

AUR: It's in general, once you have some of the modern features, it just becomes too hard. Designing correct algorithms was difficult. We found bugs in engines. Even when we designed our own and when we presented them at a conference, the first peer review that we got was that all of our algorithms were broken. Now luckily the reviewer was wrong, but still it's, quite difficult to convince yourself that it is correct. It's also very counterintuitive in many ways.

AUR: We found bugs, in, in some papers, like /a?/ is not equivalent to /a|/. Same for /??/. Optimizing regexes is super hard. There is this, example that we like. From an optimizing library, regexp-tree, which merged quantifiers two quantifiers of the same sub regex into one to optimize it away. It looked completely correct to us initially. It's only when we started, reasoning about it and trying to show why it is correct that we found out that actually this is not true. And it's also very hard to come up with the right tests, right? The the first one that I have on the slide is maybe the smallest one I could find for the lazy question mark. So it's not easy to come up with those.

AUR: And so we wanted to prove those algorithms, those properties and those optimizations. And of course the first thing we needed is a version of the spec inside a proof assistant so we could do those proofs. So this is the first thing that we did. We copy and pasted all of chapter 22.2 inside a proof assistant rocq. We turned all of the lines into comments. And then we filled in the blanks with equivalent rocq lines, giving us something we can actually reason about. To also audit our stuff and make sure that everything looks good. We could also execute this code, we ran Test262, back when we did this. We passed all of the tests with a few timeouts because at times this mechanization is very, very slow when dealing with some Unicode stuff. And there are a few limitations, but it allowed us to reason about those regexes. Of course it's a few years back, a few Unicode functions are missing and passing.

AUR: But there was also one, a fundamental issue that we could not solve, right away. The style that the spec uses for regexes, it's great. It's a great, nice reference, for backtracking engines because it's directly a backtracking algorithm. But it's also not, quite ideal, to reason about. And so the more we thought about it, the more we came to the conclusion that the best way for us to reason about backtracking semantics was not with a backtracking algorithm, but with a different style of the spec.

AUR: And so next, we sort of rephrased this entire chapter with another style of semantics. In which we relate regexes and string to a tree. So this tree is sort of like an execution trace of a backtracking algorithm. So it's not that different. Here you can see the tree of the regex /ab|(c)|a/ on the string “a”, “b”. And you can see that on the left we try to match “a” and “b” and we find a match. In the middle we try to match “c”, but we fail and so we find a mismatch. And so on.

AUR: So how is this, fundamentally different? It has one very nice property that, this represents a bit more behaviors than a backtracking algorithm because a backtracking algorithm would never even consider the middle branch and the right branch as soon as it finds the top priority match. It should stop, right? But actually having those extra behaviors is really nice if you want to reason about some linear time algorithms and also if you want to reason about, regex equivalence locally like if you want to prove optimizations.

AUR: So now we have those two, different phrasing of the spec. We have proved of course that they are equivalent. The leftmost match leaf is always equal to the previous, mechanizations that we got. And if you're curious, it looks something like this on paper. So it might be scary, but there is also something very nice to say about the ECMAScript spec because this is sort of elegant. In only about 20 rules, we can represent the control flow of all features of the spec. It does not tell you how to match a character, but like where to go and what to try can be entirely encoded with this.

AUR: Now that we have those two styles, I don't think we should change, of course, the ECMAScript style that is used currently in the spec. But maybe there is a question that we could find a way to derive both of them at the same time so they stay synchronized. That's an open question for now.

AUR: Now that we have all of this, we proved quite a few things. For instance, we could prove that all of the assertions in the spec, they all hold, right? There's not one that goes wrong. We could prove that all of the arrays that are accessed are being accessed in range. So that's also quite nice. We could prove that matching always terminates. We could prove some theoretical results about, the complexity class, which is not NP-complete, as many people assume, but PSPACE-complete. And of course for all of these things, it's tens of thousands of lines of proof. But you don't need to read any of the proofs, right? It's all machine checked by a proof assistant so you can just read the theorem statements, see that it corresponds to what you expect and then trust the proof assistant to verify the proof.

AUR: We also verified like optimizations of regexes. I told you about this example from an optimizer, but did you know that actually when you are inside a lookbehind and min two is equal to max two, then this becomes correct? So we proved this kind of thing and we have a big table that tells you when exactly you can do the optimization and when it is incorrect and we have a counter example.

AUR: We are also looking into other languages, for instance there is this RFC for interoperability in different regex languages. And so we started verifying this translation and we found a couple of small mistakes, but so far we are making progress in that regard. And of course we have also been verifying algorithms. So we verified the base algorithm that is inside this V8 experimental engine. And we are also looking into different optimizations and we even found sometimes a way to make them a bit better. Like this prefix acceleration one.

AUR: And so why, where am I going with this? What's next for our proofs? I'm presenting this because I also want to say that we are currently trying to develop a formally verified linear time and efficient engine for JavaScript regexes. Which means not only verifying like an abstract model of the algorithms, but also actual code that executes it. And of course, having linear algorithms is not enough to be efficient in the average case. So we are also in the process of verifying and implementing other optimizations and alternate algorithms.

AUR: But also this sort of formal tools could be used for many things. We've talked about comparing different regex languages. This is also something we are working on. Or maybe at some point you want to refactor some parts of the spec, but you know, you could be concerned that it would break the semantics. It's something where we could write the two versions and then just prove them equivalent if that would be reassuring, for the spec editors.

AUR: We also talked, previously, in those meetings about encoding features with some others. There is this note when discussing atomic groups that actually they can be encoded with lookaheads and capture groups and back references. Maybe this is a property that you would like to see verified to be sure that we understand exactly what's going on with those atomic groups. And in general, we would be very interested to know what you would like to see verified about, those regexes.

AUR: It's time for me to conclude before the discussion and the queue. But yes, we are working on this formally verified linear time efficient engine. We want to implement and, and prove that. For CPC and I's work, we have a few papers, if you're interested in the details, but also just, ask us if you have questions.

AUR: And so in summary, really what we wanted to say is that ECMAScript regexes are in a unique position for linear time matching. It is the only language in which we can support really all lookarounds in linear time. And we have those formal tools that could help us do proofs. We can prove properties equivalences or algorithms that you might be interested in. And we are developing this formally, verified linear time engine.

AUR: And now for the discussion, of course, we're going to look at the queue, but also we are quite curious about, if we can reach a consensus about thinking about complexity when we add new proposals. Not that it should be blocking because there are already back references, but maybe we've seen that, subtle differences in the way we phrase the spec can have huge consequences on matching complexity. So maybe this is something to keep in mind.

AUR: And also there is this whole question of like how should linearity actually be exposed to users? As, MF said, there are already complexity constraints. So should it be something like this \\l flag, proposal? Should it be entirely heuristics based? There was also this nice suggestion by RBN that maybe we should have a getters that exposes for each engine and each regex if they can actually perform a linear match for this particular regex. We would be really interested, about, all of your opinions. And thank you.

DLM: Great. Thank you. That's a great presentation. Next up we have WH.

WH: I'm really glad you like this! I am a source of the invalid iteration and capture reset behaviors and a few other tweaks you might have noticed in how lookarounds and subtle details differ from other languages. I developed the regex spec back in the 1990s and wrote a custom little formal engine to try to figure these things out. Even back then I wanted something that would allow linear execution as much as possible—it's not always possible with things like back references. The regular expressions in ECMAScript were loosely based on Perl, but I made some tweaks, like the ones you've discovered in this presentation, to try to make it better for linear execution. Now, at that time we never mandated linear execution, but I wanted to preserve that as an option and I'm glad you were able to formally verify that that succeeded.

AUR: Great. Thank you. I'm impressed by knowing that it was from the start, a consideration.

WH: Yes. This was in the 1990s, looking at what it would take to find not just the first match, but all matches in parallel. I created a custom little formal system, which is long gone, but that's where the formalism of how regular expressions work came from. Some things came later—we did not have lazy matching back then, and we did not have unicode mode, but most of the rest of the core of regular expressions was there from the beginning.

AUR: That's, yeah, really nice. I'm really happy to hear about that. Yeah.

DLM: GCL?

GCL: Hello. So just wanted to say, first of all, I absolutely love this work and I think this is stuff we should preserve going forward in the language. I think we should have the linear flag and regex, all that fun stuff. So big plus one. I also wanted to add that, back when the V8 experimental implementation was first made, we spent some time trying to evangelize it to developers. And we found it was actually very tricky to get them to, understand what the point of it was, or like, what the, like, they, they were, they were not even used to the concept of thinking of regular expressions as things that, are evaluated in the way you write them has implications on, you know. I see. Things like that. And so I, hopefully in the time since then, maybe with more read-offs, vulnerabilities happening, people are thinking about this more, but I think it would be great to, especially with the stage zero proposal that has been mentioned a couple times now, trying to think about how we can not just enable this functionality, but also get, developers out there actually, on the happy path here. That's also something I would be, very interested in helping with as well.

AUR: Thanks. Yeah. I, yeah, I'm not too sure about how to get developers to use it. Maybe this could be an argument for heuristics based, but, there are also other considerations where sometimes you trade, I mean, you get linearity, but you lose on average performance. So I'm not sure how, how great that is for all users, I don't know.

DLM: Next up we have MAG with, yes, it would be valuable. And OMT says definitely valuable plus one. And then JHD's on the queue.

JHD: Yeah. So I know that certainly historically, but in general, we don't like to mandate, implementation approach. We put our algorithm in the spec and then, we may hope the engine implements it in a certain way, but, they have their choices. Given the, like, really large cost of, like, read-offs and not just in terms of actual, the times when it's an actual vulnerability, but the much, much larger frequency of times when it's a false positive that bothers your open source maintainers and consumers, would it be worth it, assuming you, your engine can prove out, to mandate linearity? Like, I mean, I'm asking like, like it seems like what you're asking is, can we make sure that we don't, unintentionally, break the possibility of linearity? Great. That seems like something I doubt will be too controversial, but, I'm, I guess I'm asking is, does, is, does it seem worth trying to go a step beyond that and just make everyone do it linearly?

AUR: That would seem fine to me, but maybe it, I don't know if MBH or MF also want to intervene as more experts of the spec than I am.

MF: I am on the queue actually. So, yeah, yeah, I think that we, in order to actually make use of linearity, we have to make this guarantee to programmers because it's part of the interface they're programming against. You know, we typically only think of the interface as like, the, like types of inputs and outputs or whatever, but, in other contexts, they really do care about what guarantees that interface is making about the performance characteristics. And, without making that guarantee, people can't meaningfully use it. They'll write regexes that, as we saw, look reasonable. And expect them to have certain performance characteristics, and then it'll be very different. And then it's actually just not obeying the—it's not respecting their expectations. So I do think we actually have to say something about it to actually see any benefit for users.

JHD: I want to understand that a little more. So, in general, I do understand the principle you're describing. But in a case where, like, if, are you saying that like if that we don't want to surprise people, if they suddenly add a backreference, then their thing becomes non-linear? Or are you saying that it would be surprising for a regex to suddenly become linear?

MF: What I'm saying is kind of closer to the first one. It's that they should be able to predict what the performance of evaluating that regex is going to be at the time that they're writing it. Okay.

JHD: So if, I mean, there's a question later on the queue about, like, maybe it could be linear with backgrounds, back references. So let's imagine a world where all regular expressions in ECMAScript can be linear. In that world, we could just mandate they always be linear and then they would always have that expectation. In that world, would we need an explicit callout?

CPC: In that world, P equals NP, right?

JHD: Well, what was that?

CPC: In that world, P equals NP.

JHD: Ah, okay. Well, fair enough then.

MF: That, that would be the callout, but also, there are potential downsides to this as well.

JHD: Oh, okay.

JHD: So you're saying that there are also reasons people may want non-linear time?

MF: Assuming the backtracking implementation is better or different in some way that they prefer.

CPC: Yes.

JHD: Okay. Thank you.

DLM: OFR's on the queue.

OFR: Yeah, I guess I wanted to basically add that, well, I think, look, I think like keeping like not breaking the linearity in the spec is actually an excellent idea. I fully support that. Mandating the linearity, I think this is kind of an open question whether it's implementable as efficient as the non-linear engines. So I guess that just needs further validation before we could do something like that.

CPC: Can I react briefly to that? I think, mandating it, saying for any regex that has an algorithm that can run in linear time, we should do linear time, would be a very, very strong ask. Of implementations because indeed we don't know if they can be made as optimized in certain cases, like native compilation and so on. However, having a flag that says, I want to opt in.

CPC: All right. So I guess my point was there's essentially three tiers to this, right? One of them is it would be nice if the spec considered linearity in future evolutions of regexes. The second one is it could be nice to allow users to opt into linearity, for their own regexes. And the third one would be—

CPC: Maybe the mic doesn't like what I'm saying. And the, the strongest possible thing would be to say if we have a way to match a regex in linear time, we will automatically switch to do that. And I think, OFR, your comment was pertaining to that last one. Is that right? Yeah. Okay, perfect. That was just a clarification.

DLM: Okay, JRL, you're next.

JRL: Oh, first one. So you wrote that you hadn't verified if atomic operators could be implemented in a way that is perfectly linear. I think with linear implementations, we no longer need atomic operators. Like, that was the reason I proposed it years ago, and I think that's the reason Ron is still proposing it, is because we have a backtracking reference right now. Our backtracking algorithm right now, and this is the only way that we can guarantee anything.

AUR: I agree with you because that's what it is, used for. There is one recent paper that says that it can also be used for something other than performance. CPC, I don't know if you remember. I don't have the exact example in mind.

CPC: So briefly, I don't have the exact example in mind. So, so the thing that's weird about these possessive groups and atomic, atomics and possessive is on the one hand, they make backtracking implementations better. On the other hand, they change the semantics slightly because, well, you're removing some path, right? So you can change the results that your regex gets, which means that then if you say, "Ooh, I'd like to switch to a linear engine," well, you ask, "Okay, I can't just remove those, those atomics that I did before. Because removing the atomics changes the results of the matching."

CPC: So then naturally the question that we get asked is, "Well, for now, I'm using another languages, right? For now, I'm using possessive groups, and they kind of fix part of the problem. Can I just switch to a linear engine?" And well, the answer is, unless we support these atomics in linear engine as well, no, you can't switch because removing them changes the semantics. So you have this very weird aspect that they make backtracking better at the cost of making linear harder.

JRL: Okay.

CPC: The last thing is there's technically in what you asked, you can use them in conjunction with back references. And since we don't know how to do back references in linear time, they can still be useful in that case.

JRL: Okay.

CPC: Independently of performance.

JRL: And then I'm also next. So imagine we rewrote the spec. So it's actually a linear implementation instead of a backtracking implementation. Can we still support, backtracking in this even if it becomes non-linear in this one explicit case? Like, is it even possible to write backtracking support at all?

AUR: I believe so because I believe you could, have like, like we do automata-based algorithms typically for these linear time implementations. If you disable one thing in the automata traverse rules that ensures linearity, then probably you could get back references working, of course it would not be linear anymore, but, it should work. I also don't know if this is what the style that we want for the spec because, it's also nice that for now it is a backtracking algorithm and people can just, follow that, quite strictly to get an implementation going. So I think it would be possible. I just don't know if it's a good idea.

JRL: Okay.

DLM: Next up is RGN.

RGN: Yeah. Just to echo everyone else's sentiments, I think this is fantastic work. I absolutely want us to preserve the linear possibility and was excited to hear that WH intended it from the start. And as for this point, you mentioned that there were some errors in the RFC translation of portable regular expressions into ECMAScript dialect. I'm wondering if you're planning or to or already have submitted errata for it.

AUR: We're planning to. We're just finishing up the proof with the students and when it looks good, I think it, would be great. It's very small. It's like if you have a counted quantifiers that, to be repeated between like four and three times, that's invalid in ECMAScript, but that's valid in the RFC and matches nothing. And so it's small changes like this that we would like to submit.

RGN: All right. Fantastic. Thanks.

DLM: Next, we have DMM who says, "Very happy to see this work. We have to limit regex use in various contexts due to concerns in this area." And then MF is next. Thank you.

MF: Yeah. I wanted to draw attention to, like that last point on the slides here, a little bit. This group of us has been talking a bit about what we can do in the standard space to expose linearity to end users. And the, this /l flag was the typical thing that had been discussed for a while, probably because it was already existing in the V8 experimental implementation. But when we actually worked through examples of how people would end up using it, if you're asking for a guarantee that you're only using features that can be implemented linearly in that implementation, like what are you going to do if it can't, right? You're always going to have to have this fallback, right? So you're going to like try-catch, and then do something else as an alternative. And, all of these use cases we were thinking of, it really actually, led us toward this—you actually want to just write whatever pattern you're trying to express and then ask like, "Is this going to be able to be matched linearly?" And then like, have branching paths for that. And that's why we're considering, maybe a proposal for a getter that can query that information anyway. I think at this point, having worked through those, that is my preference for a route for us. And I would just like to hear if people think that that's a good proposal we should bring forward.

DLM: NRO?

NRO: Yeah. If we're just asking the engine, "Hey, can you use the linear algorithm for this?" I guess string and regex pair. Even if the browser says yes, I can use the linear algorithm, like does that mean that we will use the linear algorithm? Because like we heard that in some cases it's actually better even if it can use the linear one to use the backtracking one. So just knowing like just knowing the browser can do something is not useful. You need to know whether the browser will use one or the other. But can the browser like somehow say, "Oh, it looks like this regex will be faster in this mode than this other mode," and then choose accordingly.

AUR: I think in general it's a theoretically very difficult problem. I know that there are some works on static analysis of regexes to try to find out if they will get catastrophically backtrack, right? Which would be nice. But, I don't know how feasible it is to like analyze all of these regexes that we might get the dynamically before starting what to execute. probably some heuristics could get it right often, but I don't know how much really.

CPC: Can I, can I react briefly to that as well? I just want to give a quick intuition for this fact that we've mentioned a few times that sometimes backtracking is faster than linear. If you consider the regex that is “JavaScript” or “JavaBeans” or “JavaIDE”. A backtracking engine will try “JavaScript” first. And if that doesn't work, it will go back, reread “Java”, and then find “Beans”. And if that doesn't with, it will reread Java and so it'll read Java three times. And if there are back references, then it can blow up.

CPC: But if you're in the happy path of, well, JavaScript was actually the word you were looking at, it's insanely fast. It reads JavaScript once and it returns. A linear engine will try all the branches in parallel and guarantee that it only ever looks at anything just once, which means that in the “JavaScript”, “JavaBeans”, or “JavaIDE” case, it will be walking over these three things in parallel. Now it has this guarantee that it will only ever look at them once. So it's efficient. But the average case, it might have wasted a bit of work looking at these other possibilities that were irrelevant. And so without having the string and actually simulating the algorithm, it's very hard to know whether you're paying for security by increasing a bit your average cost. Or not. And we see in the wild that, well, some developers know that, right? So if they have something or something else, they will put the more common thing first because that's also the thing that the vector engine will try first.

AUR: So yeah, people have been optimizing for backtracking implementations for a while also, which sort of taints the sort of, analysis we could do, right now.

DLM: Okay. Olivier's on the queue. First word and then the message. Would it be implementation defined when it returns? And then with an actual comment, I think.

OFR: So that question was, regarding the getter. Yeah.

MF: Yeah, yeah. I think we would expect that it would be implementation defined. It would be what that implementation is able to provide you, because some—as we're seeing, it was not even known until recently that we could implement some things in linear time. So we obviously wouldn't expect all engines to always have the latest known capabilities, it would just need to tell you what it can do.

CPC: I want to can I briefly bounce on that just as a reply?

MF: Sure.

CPC: And I think this is something that's obvious to you, Michael, but I just want to clarify for the rest. If we had a way to query “will you be able to execute this regex in linear time?” we would still want to have another thing that says, "Okay, well, now do that and guarantee me the linear time." For the same reason that we were discussing just now. So you would need this pair of capabilities.

OFR: Okay. And I, I feel like it matches the current topic, sorry if it doesn't, but just as a bit of a background, I mean, like the way engines actually execute regexes is, it's a JIT. It is like there is a bytecode interpreter there is a native code being created for it. There are even heuristics in there. For example, lookup tables will be based on what we actually predict will be fastest, fastest for a particular regex and so on and so forth. And that may also blends into this intuition that it's actually kind of hard to do upfront analysis on like like expensive analysis on the regex because they're just so many regex. So on like floating around. So there's not enough there, there's not a lot of time that we can spend on like figuring out what it does before actually starting to run it. And yeah. And it's also like there's a lot of optimization magic going on. Currently no, no like ha like, like for example, I think no engine has a regex engine that can deopt, I think. But it's not inconceivable that we will have that in the future. So it's really kind of hard to predict how fast it will execute in practice.

DLM: NRO?

NRO: Can you do also the like JIT compiler for a linear algorithm?

AUR: This is an excellent question because we have worked on this a bit. Not on the verified side at all, but we had a student work with a prototype that would do JITing, for linear time algorithms. Yeah. I think it's in a state that it is, not quite ready to share, but it seems like conceptually it could be done and it has been maybe underexplored by other linear implementations maybe. So it's worth looking into.

NRO: And related, were your performance comparisons done with like JIT, backtracking implementations, or we just interpreted backtrack implementations?

AUR: Sorry, can you say that again?

NRO: You, you, you did some performance comparison between linear and backtracking? Was it like we w I don't know, with like the V8 backtrack implementation use a JIT, or was it something like just interpreted linear compared to interpreted backtracking?

AUR: We tried a few things, but some of these are not like actual benchmarks that you can extract valuable information from. We know at some point we were much faster than experimental, but still quite slower on the average case than the backtrack implementation, for instance. So we were somewhere in the middle. But also there are some linear time implementations that can get a lot of efficiency. But by reusing a lot of techniques and optimizations and stuff that we had not put inside that, prototype JIT. So it's hard to have a clear picture really at the moment.

DLM: Okay. On the queue, there's MF, saying “Reserving time to call for consensus”. We have just a little bit over five minutes left in the time box. People have been generally pretty positive so far, but.

MF: So we have an actual concrete ask here. It sounds like we heard positive things about possibly exploring a proposal related to developers communicating about their desires for linearity. But the ask that we have today is that, you know, it sounds like we value this very unique property that we have with JavaScript regexes where we can evaluate them, in linear time, relative to the regex and string size. Except for back references. And that we would like to maintain this property. So the concrete ask here is that for all current and upcoming regular expression related proposals, we ask those champions to provide an analysis of how it impacts our ability to do linear evaluation of regexes. That way, TG1 can be sufficiently informed about how we evolve regexes and how that impacts linearity.

DLM: Okay. I'm on the queue with support. Next up, we have a plus one from LCA. And then we have NRO.

NRO: Yeah. I mean, I really like all of this. I think we should indeed try to preserve this property. Generally, we don't have consensus on like maintaining existing language invariance. It's something that people just maintained.

MF: I'm basically asking for a process modification for something that is not yet a written-down process where proposals specifically relating to regex—we could possibly write this down into the process document if we really wanted to, but as part of them advancing through the stage process, they would present this analysis about the linearity impact. Would you prefer that we bring a change to the process document for that?

NRO: No, not needed. So you're not asking to preserve the invariant, just asking let's really think if we want to not respect it.

MF: Yes. That we're putting a bit of an additional onus on any champions of regex proposals to do this additional analysis.

NRO: Okay. I'm slightly worried that it's something that just very few members of the committee are able to do. Which means we are blocking all regex proposals on a very small number of people, that might or might not be there. But we can see if it becomes a problem.

DLM Okay. Next on the queue is WH.

LCA: Actually, I've replied to the previous.

DLM: Oh, sorry about that.

LCA: I think maybe like maybe it is worth writing it down somewhere just so we can phrase this correctly. Like maybe the onus is not necessarily on the proposal author, but we like to just ensure that as part of the stage process, it gets done by someone. And I think that sort of resolves your problem, NRO, where it is not necessarily the proposal author's responsibility to do, but it is at least the proposal author's responsibility to find someone else to do it if they are themselves not able to do it. I think like the invariant that we want, like what we want is we want it to happen and like the same way that TC that, that Test262 tests are not necessarily written by the proposal author, but are often written by the proposal author. And we still require that Test262 tests are written.

NRO: It doesn't really solve my concern because we're still saying there is this small group of people that you need to go to. Test262 is maybe a good example where there is a group of maintainers that's like can block everything, but the difference is that most of us probably have the knowledge to become Test262 maintainers if needed, while you don't like you don't just like study a little bit and get the knowledge to do this type of verification. But again, like I'm not blocking this. I'm worried it might become a problem, but I'm happy to revisit it when it actually becomes a problem.

DLM: JHD?

JHD: Yeah. I mean, I think we already have this scenario for a number of things, right? Like, Unicode stuff, localization stuff, atomic stuff. Like there is a very finite list of people who are experts in these things. And anyone who wants to make changes to them, either has to be one of those people or has to involve one of those people. And I think it's fine that that's the case here. Obviously, with any of those things, including linearity, if we find ourselves unable to get a hold of an expert so that we can be confident about our change, then that's something we need to work on. But I think in that event, the correct failure mode is then we don't make changes like it's better to block the proposal forever than it is to do the wrong thing absent the right input. And so that I think that's more of a feature, not a bug of the eventuality that there's no experts.

DLM: JRL?

JRL: I'm going to agree with NRO here. I, yes, this is something I very much want to maintain. I can't maintain it. I don't know how to do the proofs for it. And I'm worried that if you two are not here in this committee every single meeting, we are no longer going to have regex proposals. I may be Mikhail can help here, but this is not a skill I have. Whereas with everything else, with test 262, with Promises, with everything else, I could learn how to do it. This is not something I can do.

CPC: So I think there's a whole range from, from considering to proving. I think the key idea here is that there is very often prior art in other languages, for linearity of certain features, or literature. But very often Wikipedia will tell you, "Hey, this feature is good. This feature is bad." For some features, we will conclude current state of the art is “we don't know how to do it in linear time”. It doesn't mean it can't be done, right? So for atomic operators, the state of the art and “do we know how to do this?” is currently shifting. And so it might be that by the next time the committee meets, someone will show up and say, "It turns out we have an algorithm for that." So I think it should be totally fine in the process if, if it's a little, “bill of regex proposal” that says, "Do we know how to do this in the near time? Yes or no?" Well, if it's “no”, maybe it's a tiny bit more worrisome. That doesn't mean it blocks it, right?

AUR: And in some cases, like the ones on the slides in the second paragraph, I would expect an analysis to take like two lines and say, "Yeah, clearly it should not affect linearity because for buffer boundary, you just, you do, a constant time lookup around your position and that's it." So this is a, but I don't know, maybe that's, that's a lot, but, I, I don't expect that the argument is much stronger than this.

CPC: But actually, I think there is a beautiful example because, RBN made a proof in his buffer boundaries proposal by reducing it to an existing feature that worked in linear time. So there was a proof. In that one. He was like, "Yeah, you can encode it in this thing that is linear, hence it must be feasible in linear time." So there's that.

DLM: Okay. We're slightly over in time, but we have a little bit of extra time in this time slot anyways, so we can go ahead. Waldemar?

WH: Yes, if it's not obvious already, I support maintaining linearity as much as possible.

DLM: Okay. Thank you. And then on the queue, we had MAH with support. OMT with a very plus one, plus one from RBN. And a plus one from GCL. So there's lots of support. We're unable to concern to raise blocking or nope. Okay. Well then I think we have the consensus. Okay. And I know I will call on the next speaker while one-handedly typing in a conclusion.

### Speaker's Summary of Key Points

* AUR and CPC have shown that JavaScript regexes without backreferences can be matched in linear time
* The presenters have developed formal tools to prove properties, algorithms and optimizations for ECMAScript regexes.
* The ECMAScript spec is particularly adapted for linear-time matching: although quantifiers require some ad-hoc adaptations of traditional algorithms, ECMASCript is the only regex language in which we know how to support all lookarounds in linear time.
* This is a property that is unique to JS among popular programming languages.
* This is a valuable property that should be preserved.
* The extremely high rate of ReDoS vulnerabilities motivates a proposal to allow a user to control or reason about linearity when using regexes.

### Conclusion

* There was broad support for considering the impact of new proposals on linearity, and excitement for addressing ReDoS in a predictable way.
* Multiple delegates reported restricting their own use of regex due to the lack of complexity guarantees and the risk of catastrophic backtracking, and there was support for exploring a user-facing facility to opt into linear matching.
* One non-blocking concern was raised that "analyzing complexity" is something difficult for many members, and could be detrimental for new proposals. It was pointed out that the analysis is often simple, e.g. for syntactic sugar or for constructs already supported in linear time by other languages, and that non-linearity would not be a reason for automatic rejection.
* There was consensus to require regex proposals to include an impact assessment for regex-matching complexity.
* AUR/CPC/MF will come back with a linearity-related proposal, likely including some combination of:
  * a way to mark a RegExp as preferring linear matching
  * a way to exec a RegExp linearly if possible, regardless of whether it was marked specially
  * a way to test whether it is possible for the engine to provide linear matching for a given RegExp
  * a way to prevent a match operation from running indefinitely via time limits or other resource exhaustion

## Tooling for navigating the ECMA-262 specification and reviewing API proposals

Presenters: Alberto Tontoni (ATI), Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/19iIbMpnV1mxhBcKZAdxd8KlNNpimgpcDefwssylQfuU/edit?usp=sharing)

MBH: We'll be talking about a tool for navigating the ECMA-262 specification document. The main motivation is to implement a tool that would try to facilitate the work of the committee. This is one of the items in the scope, and program of work for TG5. And we start here with an assumption that ESMeta has, namely, that the pseudocode formalism of the spec is precise enough to be treated as code. Our contribution is an integrated development environment, an IDE, that supports reading, navigating, exploring, the specification document.

MBH: This is an experimental tool. It is based on JetBrains MPS, Meta Programming System, which is a platform that allows creating, custom integrated development environments for languages. The focus of our tool is on reading the existing specification, not on authoring it. And we only support abstract operations and built-ins, which we in common call algorithms. We support 1,100 algorithms. We use ESMeta to parse the pseudocode of these algorithms to construct the abstract syntax trees. And then we essentially pretty print the abstract syntax trees in our IDE, with all the usual IDE features, like go to definition, diff, and so on. We try to mimic the look and feel of the normative specification document in our IDE. And now ATI will give a short demo of the tool and then we will talk about the usage scenarios that we identified for various user groups.

ATI: All right. So let's get started with the small demo. Now I've opened our tool for navigating the spec and we can see that to the left, I have already imported three versions of the spec, the 2023, 2024, and 2025 versions. Let's now expand the 2025 version. And, by expanding the folder structure, we can see that these resemble the table of contents of the actual, normative document. So, now let's expand some other sections. And let's go until we find an algorithm and then we can just open it on the side.

ATI: And here we can see that, at the top of each algorithm, we display the section ID as in the ECMA-262 document. And by clicking on it, we will navigate directly to the algorithm definition inside the web page. Within the body of each algorithm, by ctrl-clicking on each function call, we will directly navigate to the corresponding algorithm definition inside our tool.

ATI: Let's now navigate to another algorithm by just entering its name. Let's say that now I want to go to `Math.log`. Here we can see that the tool, as MBH said, precisely resembles the look and feel of the spec in terms of syntax coloring, literals, highlighting and mathematical notation.

ATI: Now, say, I want to expand and inspect the series of function calls, in a single place. I can just inline the calls at the, inline the definitions of the algorithms at the call site. Here I will just toggle the inlining of an algorithm and I can apply this, of course, recursively for all of the other algorithms. Each time I want to rename a variable or an algorithm, the changes will be propagated automatically to all of the references in the document. And this will also be applied to the actual algorithm definition.

ATI: Let's now navigate to another algorithm. Say, `CreateDynamicFunction`. And here we see again that the tool supports the notation used in the document such as the enumeration values, literals, and grammar symbols, and so on. And this information is both displayed in this editor, but as well as in this editor panel at the bottom of the page.

ATI: It is also possible to add annotations to both algorithms and algorithmic steps, in terms of tags and comments. The tags for an algorithm will be displayed in its heading section. So let's add just ”point of interest”. And it is possible to add a “second” one, of course. And in a similar way, it is possible to add comments in the Inspector tab. And it is possible to do the same for algorithmic steps and both tags and comments will be displayed in the inspector. So let's just add a bookmark.

ATI: Now, if we want to focus on the relevant parts of an algorithm, it is possible to both highlight some steps in different colors, and hide some of them. It is also possible to hide the complete blocks. And we can see that the information, if the step is seen, then will be displayed in the Inspector tab.

ATI: Now, these annotations and manipulations can be applied either manually, one by one, or I can apply it as a whole to the entire specification document. To do so, I will define a new navigation task, which takes a name, in this case just “example”. And, as an input, it will take the 2025 version of the spec. And this navigation task, or, rather, this script will generate a copy of the document. Let’s name it “filtered”.

ATI: Now, I want to keep only for this example the algorithms that contain a specific code pattern. Such as, if anything is not a number, then I want to return NaN. And also I want that the algorithms will not match this regular expression. Just their title will not match the “Date”. And for the resulting algorithms, I want to annotate them with different bookmarks. So I want to add a bookmark “if-return-nan” to the algorithm and another one to all of the resulting steps. All the steps that match with the given code pattern. I also want to highlight them in a different color, let's say green.

ATI: Lastly, I will generate a tabular report, sorted by section number. Once I run this navigation, I will obtain the table and first I will obtain an aggregate information about how many algorithms I found. And some stats. And then interactive table for which, to the left, like if we click on the section id, we'll be redirected to the actual definition of the algorithm in the specification web page. And if we click on the function name, we'll be opening the copy of the algorithm definition inside our tool.

ATI: I can also export all of this data, like the annotation that I generate with the tool, back and forth from the tool and to the tool. And, for example, here I will show just a small script, written in a Java-like syntax, that allows you to just, serialize all the information about the tags, in JSON format. And here, we can see the result that I've already generated. And, this is another example of some code that can be generated by the tool. It's just a piece of JS snippet that just adds the pins to the spec web page according to the tags that we have just defined.

ATI: Lastly, I want to perform diffing between different versions of an algorithm in the tool. So in this case, I want to take as an example, `Math.sqrt` in the version 2024 and 2025. I will just locate both of them, by selecting them and clicking on “compare two nodes”. And here we can see that, among other things, the version in 2024 used the implementation of proximate and number value. And, the version to the left, it converts the square root to a number.

ATI: Okay, let's now discuss some potential usage scenarios that we have identified. And to do that, I will pass the word to MBH again.

MBH: Okay. So, we have identified five usage scenarios for this. I'll talk about some of them now, and the rest are covered in the slides that are linked in the agenda document. The first one is proposal review. The target group here would be the delegates. And a particular example that is shown on this slide is, say you want to, see whether a particular step in a proposal that you are currently reviewing appears elsewhere in the spec. For this, you would perform a structural search of that pseudocode pattern in question. And you will get an interactive table with the results. So basically, our tool can be used to compare a proposal with other spec algorithms, to ensure consistency of wording or, for example, to decorate points of interest. You can add tags, comments, highlight steps, and so on.

MBH: Another scenario is implementers performing a diff. Across two versions of the spec to identify modifications that will be needed to be made to their current implementation, after a new spec version has been released. So an example we see on the slide is that, there is a tag which is added to the old spec to designate that the implementation of a particular implementer is outdated.

MBH: One more usage scenario is spec auditing. Basically finding inconsistencies. This is perhaps more aimed at editors. An example here is issue #3677 that suggested using “set” instead of “let” after checking for parameter presence. So for this, you would perform a structural search for “if-let” and then you would decorate all the steps in all algorithms that match the search criteria.

MBH: Yet another usage scenario is spec exploration, where you would use various features of the tool to try to better comprehend what is going on with a particular, abstract operation or a built-in. For example, you could highlight steps, add comments, add remarks inline algorithms to keep the context when you are reading an algorithm. You can do rename refactoring, which is anyway only local for you to improve your understanding of the spec, and so on.

MBH: And with the scripting mechanism, which is built-in in the MPS platform itself, the users are able to extend the tool with the functionality that they need. For example, exporting tags that you added to algorithms into a JSON file. This is not a built-in feature of our tool, but you could implement it, in sort of 15 lines of code.

MBH: So even though this is an experimental tool, we do support all of the abstract operations and built-ins that are defined using the pseudocode notation. So we would be looking for early adopters. And we would appreciate the feedback on the idea itself, and on our implementation. If you are interested in trying it out, please do reach out to us. Thank you. I think we're ready for the queue.

DLM: Thank you. WH is first off.

WH: A couple items. I found it interesting that this found the NaN handling in hyperbolic cosine, but not hyperbolic sine. And the reason for that is hyperbolic sine is an odd function while hyperbolic cosine is an even function so they are written slightly differently, which makes the pattern matching search a bit brittle.

WH: The second item I have is something I frequently run across when trying to read parts of a spec, which is: I can follow most calls quite easily, but that breaks as soon as something calls a value that it obtains from some slot indirectly. And I'd be very interested in knowing where such slot values come from.

ATI: So the, in terms of, the field properties and slots, everything is passed from ESMeta. And we use the disperser and in terms of, what ESMeta does in that case, it flattens a bit everything. In terms of like, internal slots and attributes and so on.

WH: I'm just trying to explain a difficulty which I run into when trying to understand code. If code calls a function directly, then it's usually fairly easy to follow; you can just click on a link or expand it and see what it's calling. But, if code calls something which it obtains from a variable, then it's often hard to trace where whatever is in that variable came from.

MBH: Yeah, this is true. This is future work.

WH: Yes, I'm offering this as a suggestion for a common pain point. Thank you.

DLM: Okay, my next up we have MM.

MM: So first of all, apologies if you've already covered this. I missed a bit of the presentation. But, it seems like you've got all the elements needed to, get the coverage of the spec against, Test262, basically, to, to run Test262, and then at the meta level, see what is what of the spec is covered and to likewise do that for individual tests and for, proposals, for changes to the spec accompanied by Test262 tests that are supposed to cover the proposal.

MBH: Right, so, our tool is based on ESMeta, and, the difference is that ESMeta actually cares about executing the spec, while we only focus on visualizing the algorithms. But in principle, it is possible to incorporate the execution of the spec from ESMeta, and also integrate running Test262 tests and visualize directly in the tool which of them have passed and which of them haven't, and sort of highlight the uncovered steps. Yeah. Thank you.

DLM: Okay, next up, come up for the Prague room to speak.

DJM: A question from the JetBrains MPS team regarding the implementation. How generic is it? Everything around the editor looks quite agnostic from the JavaScript specification document.

ATI: Well, yeah, in principle, it is possible. It's a bit of a kind of a work to, like in do the, language definitions in the in the in the tool, but, other than that, it's in principle applicable to other specs that have, that make use of, pseudocode notation.

DJM: Another short question from the MPS team: which version of MPS did you use?

ATI: It was 2024.3.1. Thanks.

DLM: Okay, the queue is currently empty. Anyone else want to comment? Okay, thank you. I guess we can move on to the next agenda item then. Okay, the next step is the continuation for comparisons. JSH, are you ready?

### Speaker's Summary of Key Points

* Presented an IDE-like tool for navigating abstract operations and built-ins of the ECMA-262 specification document.

### Conclusion

* None.

## Continuation: Comparisons for Stage 1

Presenter: Jacob Smith (JSH)

* [proposal](https://github.com/JakobJingleheimer/proposal-comparisons)
* [slides](https://docs.google.com/presentation/d/1unIAgQLLUdsWnTPh0KRMDnhr2n2s0jtVTV1NpRzWQj0/view)

JSH: Okay, so, at the end of, the, the last presentation, some people had asked to see a written out, more concrete, statement of motivation—voilà: “Facilitate making decisions about deep equality that users are often unaware of. Walking an object is difficult and not fun; determining equality can be difficult, requiring an enormous amount of specific knowledge that the vast majority of users don’t have. These complexities create significant barriers and risks to users.” Does this suffice?

DLM: I guess we can ask people to join the queue. To express support or objections to this motivation statement. And also stage 1.

EAO: Yeah. So, having explicitly asked for this, maybe it's fair for me to say that, especially as I was part of helping to draft this, I think this motivation statement is reasonable. Thank you.

DLM: MF.

MF: I do think that this is a reasonable problem statement that is sufficient for stage 1. I think it's true and I support it. I also feel that it will have a very difficult path to stage 2, given some of things we've talked about earlier in this session, but that does not mean that I would want to prevent it from reaching stage one. I say that, but also, you know, I do somewhat worry about the messaging. Like, if the community—if it is a majority position that we think that it'd be very difficult to move forward because we don't yet know of a workable design, then it may be communicating the wrong thing to the community. But it does meet all of our technical requirements for stage one.

JSH: Thanks.

DLM: MAH?

MAH: I have a similar sentiment. The problem statement here is fine. I really doubt this will look anything like a deep equal, once or if we manage to reach stage 2. Because I doubt we will actually be able to find consensus on what deep equal semantics would be. Or the set of options and whatnot. So I think we might end up with something else here, which is fine, maybe as a building block for a deep equal, but I, I strongly doubt you'll get a deep equal, just so you're aware.

JSH: Okay.

DLM: SFC?

SFC: Yeah, I think this is a good motivation for stage 1 and as others have said, it's a very big design space with a lot of different ways to solve this problem. I'm glad you articulated the problem and now you can go back and investigate the space of solutions, which is much, much bigger than a lot of the space that you've so far been presenting. So there's, there's a lot of things, a lot of different directions you can take with this problem statement.

JSH: Thank you.

DLM: And ZBZ with plus one for stage one. And that's the end of the queue, so we've heard a good amount of support for stage one. Does anyone object to stage 1? Okay, congratulations. You have stage one.

EAO: Please do update the motivation statement to be clearly in the README for the explainer for the proposal.

JSH: There is a pull request just for this—actually, it's already merged.

DLM: Cool. Okay, next agenda item is a request for stage two reviewers for expert all from NRO.

### Speaker's Summary of Key Points

* The problem was agreed to be well motivated
  * The main motivation was agreed to be the significant breadth *and* depth of knowledge necessary to effectively achieve anything for users (who are least likely to have that knowledge).
* Several items of forewarning for reaching stage 2 were raised:
  * The surface area is extremely large
  * Achieving consensus on certain definitions of equality will likely be very difficult (cycles, Sets, etc)
* `Deviation`s filtering should be moved "inside" rather than `Iterator.filter` (this could completely avoid the cost of constructing deviations)

### Conclusion

* Consensus was reached for stage 1

## export all from Stage 2 reviewers

Presenter: Nicolò Ribaudo (NRO)

NRO: Yeah, so it is for the expert all from proposal, expert star of, like, also exposing default. The design space between stage two and stage two points seven is none, basically. Like, either we decide that we want to change expert * from or they want to do something else, that's a decision for going to stage two, I believe. So next time I present, I'm going to present for stage two with just exposing default from the current syntax, and at that point, I will also want to try to go to stage 2.7 at the same time. So does anybody already want to volunteer as a reviewer?

DLM: CLA on the queue. Oh, he volunteered as a reviewer.

CLA: So yeah, if there are no restrictions, like, people from the same company review, I can review it, even though, like, it's a Saturday work day from NRO, it's not related with Igalia. But, like, I can review it.

NRO: I also messaged GB, and he's happy to review, but he, I believe, he's not here.

DLM: Okay, does that mean you have your two reviewers? We're okay to.

NRO: Unless somebody wants to be a third reviewer.

DLM: Oh, yeah, it's always room for more, I guess, if anyone's really feeling enthusiastic.

NRO: And okay, well, I have enough anyway, so.

DLM: Okay.

NRO: One thing, GB technically, was the author of the proposal, but that was 10 years ago, so I think he can review whatever the new spec text would be.

DLM: Okay, well, I believe that is the end of the agenda for this part of the day, and the only thing that we could really move up would require GB, and I think he's not available until after the break, so I think with that, we might just end up taking a longer break unless GB happens to be on the call, but I think NRO just said he's not, so.

DLM: Yeah, I guess with that, let's move on to the break, and we'll just have to be a longer break than usual.

JRL: So we're going to 15:20? s

CDA: I think that what might make sense is GB’s constraint is starting I believe, yeah, at, at 3:00 PM. So the break was going to start at 3:00 and go till 3:20. So I think in this case, let's try to be back here at 3:00 and so that gives you all a 25-minute break. Does that sound okay?

DLM: I'm not sure GB is aware of that change, though, but we can bring him at 3 o'clock and see if he's available then.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

* List
* of
* things

## Continuation: ESM Phase Imports normative PRs

Presenter: Guy Bedford (GB)

* [proposal](https://github.com/tc39/proposal-esm-phase-imports)
* [slides](https://docs.google.com/presentation/d/1RHIYufBtt6LuAIqsbaOpkr2gZckC7NROzm_Zl9yTFYY)

GB: Sure. So this is a continuation of the item yesterday, the normative PR follow-ons for resident phase imports. During discussion, well, I'll just go to the relevant slide. When discussing the module equality, keying question, how modules are keyed, the current specification is based on source Identity relations required by the struct proposal but no real semantics were found here, thus it is a meaningless construct. That was my March wording. Ron has since raised, well, yesterday during the discussion, that there is interest in the concept of equivalence relations between modules across agents. For the struct proposal, which, violates one of the premises here of this change, so I'd like to use the majority of the time to revisit the identity discussion briefly and think about how we want to think about that going forward. But before I do that, I'd like to first focus on the other normative PR, which I think has clear support, is unrelated, and we can at least get that through committee now and then focus the rest of the time on the discussion around the identity model. So, the slide I'm going to switch to next is the discussion on that.

GB: So cross-realm imports, as mentioned yesterday, this is largely an artificial constraint, because we didn't really have the spec machinery to think about it now that we do. It's removing, what is very much an artificial constraint. The PR is [#61](https://github.com/tc39/proposal-esm-phase-imports/pull/61) on the SM phase import spec. That relaxes this, this artificial restriction. And, so what I would like to do now is, first check the queue on this topic in particular, and then ask, for consensus.

JRL: I'm not sure Nicole is yours. Okay. LCA, maybe if you oh, yeah, go straight to LCA. He says “+1”.

LCA: I think it seems reasonable to lift this constraint.

JRL: Any other supporters? NRO says yes. Any objectors? Okay. Consensus for change 61.

GB: Great. Thank you. So I in terms of the other normative change, I will not be asking for that change today. I will either bring it back to next meeting or we will figure out figure out a step, a path forward there. But for the rest of the discussion, it would be useful to then, gather opinions on the identity model changes and how it relates to structs and, the viability of the two paths here. So I'm trying to think of the best way to introduce this discussion RBN, would you like to say anything on this topic about the structs rebel relevance or any of the discussions we had yesterday?

RBN: Yeah. So this is something we've been discussing a bit on the in the shared structs proposal. Is that, one of the things that we want to be able to do to preserve some of the, to preserve private state and allow for proper encapsulation, so that, shared private state can exist and can, allow public APIs to, wrap that private state, with whatever necessary, thread coordination and synchronization primitives they might need, need to use to ensure proper access. That we need to be able to ensure that a declaration of the behavior of a shared struct in multiple agents or compartments, is correlated in some fashion to be the same declaration.

RBN: That essentially requires both URL, the original source location as well as possibly even the, source text for comparison to ensure that the module parsed in both compartments or both agents, is the same thing. And that allows us to then be, reasonably certain that the, encapsulation boundaries will be maintained. You can't use the same code same-looking code from a different source location to, forge imports and forge access to, internal state that you shouldn't have access to, and, to accomplish this, the discussion that we've had for a number of prior meetings has been to leverage some type of correlation that happens in the agent layer based on URL.

RBN: The problem then becomes if this isn't bound information also isn't bound into the, module source, if the module source is intended to be instantiated in multiple compartments or multiple agents, and, refer to the same module information, then, it would have issues interacting with, the shared structs proposal if such a module included a shared struct declaration. Therefore, we have concerns about, discarding the URL information from the module module source equality. As it would possibly prevent that behavior from working, so we wanted to make sure that we have time to adequately adequately discuss the, the concerns and, further explain the rationale for the various approaches that we've looked at for shared structs to make sure that, that this doesn't cut off a future avenue for us.

GB: And NRO is, next on the queue. NRO, did you want to bring up the start account?

NRO: Yeah. So if we use object identity as the module source identity for the module registry, which is what was presented yesterday, that seems to me to be just like a stricter definition of like, smaller equivalence classes across small sources than what would be needed for shared structs. Completely incompatible definition. Could we when shared structs happen, keep both equivalence definitions when it's used by the module registry and then another one to superset of that used by shared structs?

JRL: Okay. RBN, I'm going to reorder you first.

RBN: Yeah. This was something that GB and I were discussing yesterday. My concern is that, well, I had asked GB specifically if not having it is something that we could add in later or, deal with this comparison separately. But I think the issue is that if you are writing code that is expecting a module source that you import from one module, or agents and then from another module or agent, and they compare as being the same thing. But then you try to pass a shared struct into that, that might be unique. Because of that, because it's missing this information, then that could be a problem. And I think it's possible that we could support identity if we're creating a module source instance for every single module that's loaded and we are in that information is shared or correlated in some fashion. I just think there's a lot of complexities we haven't had a chance to really dig into to make that determination yet.

NRO: Okay. Yeah. If module equality for the module loader was the final identity, the shared structs equality would be a loser. Type of equality. So like, if two modules are equal for the module loader, that would also be equal for shared structs. That would be if we have two different modules for the loader because like, we structured Klama, for example, they would still be equal for shared structs. So it would probably need another, maybe shared structs would also need another predicate to say, "Are these two modules equal according to shared structs?" But I don't think we would have the problem of, oh, the identity of this thing is the same, but actually these shared structs are disconnected.

JRL: And LCA, you'd like to respond?

LCA: Sure. I think last time we talked about this, which was a long time ago, but, maybe I'm just remembering wrong. I think this would open up the door like, I'm actually concerned about the opposite problem that RBN just mentioned. Where if the identity for structs is looser than the identity for instances, then I think you introduced a side channel across instances. That are otherwise completely unrelated other than their source text. Being equal or having come from the same load. And I think that side channel is something that TG3 would be very interested in avoiding. But this might need some more.

MAH: Yeah. Possibly. I think I need to clarifying here because I think I got lost on what exactly we're suggesting. I wasn't really the impression that what NRO was suggesting was, having the module source object having a difference identity, but still internally having a, instance identifier. That allows shared structs to end up correlating. Are those module source as coming from the same place and thus being able to match a shared struct instances?

NRO: Yes.

MAH: My understanding of that is that because that instance ID internal cannot be forged, there is no problem there. It's only the communication, channel is really only a, I think it's only a problem if you can forge, the value.

JRL: Okay. Matteo, does this cover your reply here?

MAH: Yeah. I think so.

JRL: Okay.

?: I want to respond to that, that I'm not entirely sure about that. I think we need to.

?: But it's.

MAH: Yeah. I, it's also been a while for me.

?: Yeah.

?: So I and I haven't caught up on all the discussions that RBN and GB had. So.

JRL: Okay. LCA, you have a separate topic?

LCA: So I think maybe it's useful, GB, if you mentioned a little bit about what the background is for why the canonical module instance or, well, canonical module instance for a given source even existed in the first place. And like, what the GC implications are for why you're deciding to do something else than we'd initially decided to. 'Cause I think that's some useful background as to why this is even happening at all. Or why we've been talking about this.

JRL: Guy, are you there?

GB: Yeah. Sorry. Was the question directed at me?

JRL: Yes.

LCA: Yeah. I mean, I can also get his background, but I feel like you have more background.

GB: I mean, the original semantics of the model are based on the concept if you dynamically import a source, you, you expect the instance for that source. And not for any other source. So this is why the URL is not used as the primary key. It is used as a relational key. With, with the URL registry. And so you effectively have two maps, a rooted map that is the string URL module map that maps a string URL to its module. And then we have the source weak map, which is GC-able because it is not hard rooted in the sense that if the source goes away, you can in theory GC it.

GB: Although that does get into the injection semantic discussion as well, which is, a, a separate discussion. I would rather not get too deep into today, LCA, if you don't mind.

LCA: Okay.

GB: Yeah. So I think what we're looking at here is two major pods for it. Object identity for the source in this kind of weak map versus the full source text equality model, which is a more complex model. It is what is specified today. We do have cross-cutting concerns across specifications. This affects HTML and web assembly specification work that would need to maintain the host environment invariance defined by the keying models that we decide on. So that's why there is, various spec **pot**\[?]dependence here. That is quite fundamental. It's worth taking the time with this decision to make sure that we are making sure that we're finding the right identity model. The limitations that I've discussed with respect to source text equality can be worked around. There are a few limitations. I don't know if I have a slide that goes through them directly. I'm trying to see if there's any example. I don't.

GB: But the one of the simple cases is if you basically evaluate a module declaration, through eval, you can forge any module, if you evaluate it, within the same URL that you want the URL key aspect of the source to have. And so we do need some kind of global atomic counter to be associated with evaluations. And I think URL checking plus source text equality plus a global atomic counter can get us to a well-defined identity model. It is more complex than object identity. And we would need to talk through if that model can really work for structs, which has not been a conversation that has been fully fleshed out to date.

GB: I'm happy to do that work with RBN. If we can arrange the follow-ons, I think we just need to be very clear about how we're going about that and how we ensure that it does not lead to a stall in this discussion and fall back to object identity if that direction does not work out. RBN, does that sort of a direction make sense to you?

RBN: It is. Excuse me. It is. And there's some things that I was thinking about, with this in our discussion yesterday. It's not that object identity for comparison for module source isn't feasible. If the things that are necessary to ensure that the identity of the object or the, the actual module source object instance, uniqueness is maintained at a slightly higher level, as you were discussing that the module source would be stored in a module record associated with the unique URL, that as a result, you only need to compare when you're looking at a module source the that specific identity. The problem only then becomes when instantiating the module. If you don't the module source, if you don't have a tie back to that information, but if that information does exist and the correlation, and is reachable in the correlation happens, for shared structs such that it can get to the information it needs to, do that correlation, then object identity is still fine.

RBN: The problem around, the complexity of equality, with needing like a global counter, that isn't necessarily a problem for the equality of the module source. It's a problem for, what you consider the uniqueness of the record to which you will associate a new module source instance. And most engines that I've seen in my experience, when you do an eval on their side, you'll get a unique environment that that's evaluated in regardless of if the source text is the same. So there's still some correlation to the current source location, which is necessary for things like, direct eval, but also unique, some additional unique source information that can be used for things like source mapping and debugging and whatnot. So a lot of the engines already have some of that information already within the system.

GB: Yeah. The serialized el serializability constraint, which is the tough one here, if we want to be able to allow you know, round-trip ability and.

RBN: Yeah. And that's the second thing I wanted that I was briefly discussing yesterday. I think we need to spend some more time talking about that there's been this discussion about, about structured clone of a module source and sending it over post message and what that looks like. And I and this is a case where, the, the memory model around share re looking at for shared memory and, specifically when you look at things like, the mutex and condition variable are shared objects that are, JavaScript objects that can be passed over, to another thread or another worker, as a transferable object, for example. And used on that other side, just like you could with a shared struct. And then that object instance itself is shared.

RBN: The only caveat that you would have before we get to that point is that you just basically need to say that that object is frozen that you can't attach properties to it or mutate it in any way and then we can essentially treat it as if it's shared because when we add that sharing capability, you'll never be in a state where in the same envi in the same agent, you would be looking at two different instances pointing the same thing. It's only between two agents where you there's no way for those two, two things to be compared, currently today. That this would come up. So we could add sharing shareability to that at that time. In which case, if it's shared, then post message and, isn't an issue and structured copy or structured, structured clone isn't an issue.

GB: Right. So you're saying if we did actually have an object identity across agents, then source object identity would be the model in a sense, correct?

JRL: Yeah. So we have a couple of questions that I think are going to be directly about this. MAH?

MAH: Yeah. When you're saying object identity versus like, j again, clarifying actually, are you saying the imported module source you might have two different module source objects? So if you compare them, they're different. But if you import them, they end up having the same, the namespaces end up being the same or I'm confused about where we're at now on this.

GB: We are mixing that discussion here today. The model of source text equality is based on the idea that you can have different sources with different object identities that when imported through dynamic import are understood as an import to the same underlying identity. And give you the same instance, versus the concept of there being something so low level at the transfer process that can enforce a shared identity. Yeah. We're discussing both concepts right now.

MAH: Gotcha. And right. And so the question is whether the module source object maybe shows up as the same object identity if you send it multiple times in those cases? Or are we not saying we never want that?

GB: I was just trying to read in from RBN's comment, maybe RBN can comment on that, if that's what he was suggesting.

?: I can repeat what the concern was?

MAH: If module source represents the same source and instance key, do you expect you want to see the same module source object identity in the same agent? Or is there a reason to ever want that? Or can that remain an internal, internal keying effectively?

RBN: I don't think I'm parsing your question correctly.

MAH: Does the object identity need to be equal at the module source object or only after it is imported?

RBN: I think the import is going to definitely matter since that's the declaration that's, that's the identity say that something like a shared struct declaration would be tied to. The problem is it so my concern is if someone can take a thing that looks like a module source or maybe have been a module source that's gone through structured clone and they can in some way use this to forge a new declaration that as far as the runtime is concerned thinks that it's the right declaration, but it's somehow bound to a different URL location for imports or it's or the somehow the contents have changed, such that they could forge access to private state. So those are my concerns.

MAH: Yeah. I mean, obviously, yeah, same concern. And I would expect that to not be possible. I agree. The user should not be able to forge, access to a module identifier doesn't, it didn't process in the first time in the first place. What I'm more asking is like, how can the user observe that? Should they be able to observe that two module source, are the same by their object identity that they share, this property by their object identity? Or should they only be able to observe that after they try to import those module source objects?

GB: Well, from a pure as if they imports perspective, we have effectively had the model (up until now) that the import are distinct object identities of, module sources would result in the same instance because of this extra equivalence relation being defined on source text equality. That, I think, is something that we have been okay with.

JRL: I'm going to interrupt. We have one minute remaining.

GB: Sure. If we can wrap up the queue, we can basically continue these discussions. And make sure that we have a focused way to determine if this can work with structs. If we determine in those conversations that this complexity is not justified, then I think we should try to, converge on an identity model as opposed to having hypothetical discussions. That is my main takeaway, for today, if possible. Thanks, RBN.

JRL: Yeah. We are I do not think we're going to be able to get through the queue. LCA and, MAH, are you able to do this online on GitHub?

MAH/LCA?: Yes. I think so. Or in module harmony or TG3.

JRL: Perfect. So I think, GB, we got consistency for your change and there's a deferred change that'll happen hopefully next meeting. Perfect. So up next, we have a late continuation from Ron on, regex buffer boundaries.

### Speaker's Summary of Key Points

* Consensus was obtained for PR #61—supporting cross-realm imports of module sources
* Further discussion on structs proposal identity will be undertaken further before making changes to the module source identity model to ensure alignment

### Conclusion

* List
* of
* things

## Continuation: RegExp Buffer Boundaries

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQBpJAD8CJutTpZ3x70Mr8C6AQ6Z26p2_nowaDED0_XQfRY?e=FLSMPe)

RBN: Yep. Let me just pull this back up. I mentioned earlier. One that we would try to bring this back if we can get the reviews for the, slash uppercase Z, in and, so the PR spec text, the PR for the change to spec text wa is up. It was, PR 21 on the regex buffer boundaries proposal. That's been reviewed by CDA, RGN, and NRO, and also so that's ready. That's been merged. So that should theoretically resolve the stage 2.7, conditional advancement. Also, the test 262 tests, for \\a and \\Z had already been approved prior to the meeting. And, RGN was kind enough to review the updated tests for \\Z. Those are in and now approved. With that, I would like to seek consensus for advancement to stage 3 if possible.

JRL: Hmm. Chris, support stage 3. LCA “+ 1”. So we have two explicit supports. Does anyone object?

JRL: Okay. I think you have it.

RBN: All right. Much appreciated. Thank you very much.

JRL: Awesome.

RBN: And thanks, everyone, for the short turnaround on those reviews.

JRL: Yeah. All right. So the last items we have are just administrative. Chris, I believe you're going to lead the next one.

### Speaker's Summary of Key Points

* `\\Z` amendment to spec text approved by reviewers
* Conditional Stage 2.7 conditions met
* Test262 tests, including `\\Z`, approved
* Proposed advancement to Stage 3

### Conclusion

* Advanced to Stage 3

## Call for hosts for 2027 (AMER and APAC)

Presenter: Chris de Almeida (CDA)

CDA: Yeah. TCQ feature desired to be able to add the conclusion after we advance the topic.

CDA: We are reiterating our call for hosts for 2027. We have received four or five offers for a meeting in Europe. So I'm pretty sure we're good for the European meeting. We have yet to receive host offers for the Americas. Or the Asia Pacific region. So it would be super cool if we could have some volunteers for hosts in those areas. And yeah, that's it for well, I see Aki's on the queue. About something. Aki says, "Do them all in Europe." Nicolo, plus 1. I think people really like the Asia Pacific meetings. And we had a really great turnout for New York City. It would be really cool to get something elsewhere in the Americas. We, the elusive Canadian or Mexican or South American meeting continues to evade.

JHD: For APAC, even though we haven't received a r a volunteer, has anybody reached out to Ross and asked about Sony?

CDA: Sony's hosting this year.

JHD: Oh, then okay. So it would be Bloomberg if we were going back and forth.

CDA: Probably.

JHD: Okay. Well, then I will ask Aaron and I will ask Andrew myself. Thank you.

CDA: All right. And, that is it for this topic.

EAO: So wait. I put a thing there because, like, for reals? Why can't we have more European meetings? At the moment, we're 1 out of 6 for European timezone meetings.

JHD: We could have more timezone meetings, but as far as in-person, it's very intentional that we have that they're all in different places, parts of the world. But, like, asking for more remote meetings to be on European timezones is a fair question.

MAH: I actually would like to say that if we want to have more European timezone meetings as North American timezone living people, I would really prefer them to be in-person. O-optional because remote is very difficult.

EAO: I mean, given JHD’s point, which is fair, I think it is also fair for me to therefore point out that Reykjavík is on the North American continental plate.

CDA: So we, in the chair group, we've discussed this before. And basically, when it comes down to remote meetings, the vast majority of participants in the committee for better or for worse are either in the Americas or in the Europe and Middle East region. And so that means that the most maximizing participation at regular waking hours for the most amount of delegates from a purely utilitarian perspective makes it such that basically, the US timezone for starting at 10:00 AM local time, US timezones are the best for that. Particularly, you know, unfortunately, for our West Coast friends, unfortunately, the best timezones for that are, are going to be the Eastern, US timezone. And so that's just the most from a pure utilitarian egalitarian perspective, maximizing participation and not having people be up in the middle of the night. And so that's why the remote meetings are you know, on Western Hemisphere timezones. And, barring a compelling reason for that to change, you know, we'll just have worse outcomes by making the remote meetings in Europe timezones or in Asia Pacific timezones.

EAO: Are we, like, actually using the queue here because we have a queue?

CDA: I am not the current chair. This is just.

JRL: All right. I thought you were taking this one. Yeah. I can just go through all of them. A lot of support for Europe from everyone. Sorry. Summarization “+1”, “+1”, “+1”. Everyone wants Europe. I'm sorry, East Coast virtual.

EAO: Specifically saying, "Thank you CDA for pointing out that, yes, there are reasons to prefer North American timezones for virtual meetings." I believe all of the points you made, specifically only apply to US or North American East Coast timezones. And do not apply to Pacific timezones. So this is a specific request. Could we, like, not have virtual meetings on Pacific time or any time zones further west than the US East Coast time?

CDA: I think yeah. I think we took that feedback previously, and it's good feedback. And I believe that's exactly what we did. So this year, I believe all the virtual meetings are in Eastern or Eastern-ish. And we also made a point that all the timezones are also IANA identifiers that are outside of the United States. So that was very deliberate.

CDA: So double check my you know, fact check that you know, the agenda repo for the virtual meeting schedule. But they should be Eastern or but, give or take an hour. Obviously, there's, like, daylight savings and all that with different regions.

JRL: Our November meeting is Pacific. East Paci yeah. Easter time. Is that Pacific? Negative six.

CDA: That is not.

JRL: Yeah. So that is not actual Pacific timezone. That is something strange.

JRL: That's, like, Central timezone in the US.

CDA: Should depending on daylight savings, yes. So.

JRL: Yes. Sorry. USA, would you like to speak?

USA: Yeah. Really briefly, like, I think one other factor to note here is that as they are, the meetings are already quite you know, difficult for a lot of people to attend. I, I think it's something worth like, I do really appreciate some of the more you know, recent things that we've tried but let's not pretend that there's no bias in the committee that regard. Like, there's already people who are attending this meeting. In midnight in their timezone. So it's like the makeup of the meeting is also in a way the end result of, like, for whom is it? Like, quite convenient to attend the meetings.

JRL: Okay. Thank you. I'm going to skip the “+1”s. There's more support for Europe. We are over time or we're about to hit time. I think CDA, would you like to summarize, please?

CDA: The summary is that we are still looking for hosts for the Americas and APAC region. Please volunteer your companies if they're able to host in those locations. In the absence of hosts, then you know, we're then we don't have an in-person meeting.

JRL: Okay. To, cap this the agenda or so the queue real quick. SFC says, "Geographically distributed meetings are important to balance travel costs," which I absolutely agree with. MAH? is also saying, "Maybe two persons in a meeting, but. Costs. It's going to be expensive." Ruben is putting something on, but we are at time. I can ask Datadog for New York. You are a lifesaver, RBR. Thank you. That is it for the queue. And I think we need to wrap up and go to the final administrative items.

CDA: Yes. Please.

JRL: Yes. Okay. Advance to the next one. "Summaries, conclusions from AKI."

AKI: Hello. I know you think I'm just going to talk about summaries and conclusions, but I'm just going to talk about more than that, which is remember to review the notes. Review everything you said. Make sure that your points got across and that your that the transcription was accurate. So in addition to please, please, please, please, write your summaries and conclusions. Also, make sure that what is transcribed is what you want to have like, what, how, how you meant to come across.

JRL: All right. Thank you. And so finally, we need to thank JetBrains because this has been a fantastic facility. Really well set up. Presentations. The meeting set up. The cafeteria was delicious. This is on par with all of our Tokyo meetings and considerably better than the one I just hosted in Google. So absolutely thank you. Please round of applause. Yeah. Dimitri, go ahead.

DJM: One? And Gilbert, can you please go inside the room? Our technical person, Mikhail, if you help here. And thank you so much. Gilbert and Samet Evans for help for all the setup and for all these days. Thank you so much.

JRL: It's gotta be rough listening to us for three days. All right. I think that is everything. I hope it is. End of day three. Excellent. Thank you all for being here. We actually need to leave the room so that they can set up for the meeting that's not the meeting. The social event that is happening tonight. Dimitri, would you like to tell us about that?

DJM: One too. I already posted a link about this meetup in our Amsterdam meeting chat but we have two talks, one from NRO, one from BHA and ATI. And also the panel. You can find full information in our chat. So you're very welcome to participate. And I know that many people will be happy to see TC39 folks. So see you at meetup, I hope.

JRL: All right. And that ends everything for us. We will see you all again two months in July.

CDA: Thanks, everyone.
