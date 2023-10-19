# 14 September, 2022 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Michael Saboff       | MLS            | Apple              |
| Kevin Gibbons        | KG             | F5                 |
| Waldemar Horwat      | WH             | Google             |
| Willian Martins      | WMS            | Netflix            |
| Bradford C. Smith    | BSH            | Google             |
| Istvan Sebestyen     | IS             | Ecma               |
| Anthony Bullard      | ABU            | Servicenow         |
| Daniel Minor         | DLM            | Mozilla            |
| Ashley Claymore      | ACE            | Bloomberg          |
| Rick Button          | RBU            | Bloomberg          |
| Robert Pamely        | RPY            | Bloomberg          |
| Nicolò Ribaudo       | NRO            | Igalia             |
| Justin Ridgewell     | JRL            | Vercel             |
| Philip Chimento      | PFC            | Igalia             |

## Iterable functions instead of iterator helper methods

Presenter: Axel Rauschmayer (ARR)

- [proposal](https://github.com/rauschma/iterable)
- [slides](https://speakerdeck.com/rauschma/iteration-helper-functions)

ARR: It's an honor to present at/for TC39 And my presentation is about switching, iterator helpers to functions, maybe. Let's get started by looking at the status quo. The current iteration API is quite minimalistic and relatively elegant. So you have you start with an iterable, that is a factory for iterators, and then each iterator is a factory for values. And that API is almost functional in how it works. So, relatively small. The other status quo is that current iteration is based on mechanisms that all operate on iterables, not iterators. So examples for these that are built into the language are, are a Array.from for-all, destructuring [??]. The key point or Insight that I had when I look at these mechanisms is that programmers normally see iterators when they work with iterables. Another status quo that is interesting to look at is how current libraries work. So what our current JavaScript developers are used to and popular libraries that operate on these data structures include lodash, immutableJS and Ramda. Lodash is a collection of functions. It also has wrapper API, that's a bit like jQuery in how it wraps, then there's ImmutableJS, that is OOP with a comparatively deep inheritance hierarchy and it uses iterables often and supports iteration, but that's a completely new API. And then that's Ramda, and they're a lot of functions there.

ARR: When it comes to handling various values, it's interesting to compare two Styles. So, one hand, iterative methods and on the other hand functions on iterables. If you work with iterative methods you and you get a value. You first have to figure out. is the new API supported and if it is, you get an iterator. and here are a few examples of what that looks like. If you have an array, you get an iterator by `.values()`. And after that, you can apply the operation. If you have a map, you often want `Map.entries()` to get an iterator`'map.keys()` and `values()` works too. And once you do that, you can apply the operation `.drop()`. With the string, there is no method or let's say no method that has a string key. There's only a method that has a simple key and you have to invoke that one before you can access the API and invoke `.drop()`, which is `keys`, we're already fine. We can immediately invoke the new API. If on the other hand, the new value does not support the new API, We have to use the iterative from and then we get wrapping API like `Iterator.from`. Then we can drop. And if we check the same thing with functions on iterables, then things become simpler because we simply apply function `drop()` to whatever iterable value we have. And so if we have an array we can apply `drop()` directly, or `map(string.keys())` which is an iterable iterator and, and iterator will spit just plain any value as well. We always apply the function and we're fine. So next, let's look at what happens when we have one operand, but there are also a few cases when we have more than one main operand and then if we look at functions on iterables we have more than one of those.. If you have more than one main operand, that's very easy to use with functions because it's just one more argument or one more parameter with iterative methods. It's not completely clear. So we have two options, the additional operant could be like the first option that I'm showing here. Is to use an iterator or to just use the iterable trouble and well, it depends on which of these options you prefer.

ARR: Next, slide, how important is chaining? So that has been, I've heard that as a key requirement or something that people like when it comes to iterator methods. So I wanted to take a comparative look at that. so, on the left-hand side, we have iterator methods that are chained on the right-hand side have functions that are applied to iterables. And what I tend to do is just name the steps. So each each of the steps starting with set and then filtered and then map, and then at the then at the end, the result, I named each of these steps and that's ok with me, I don't mind it but obviously some people do mind. And another pattern that I've seen that I've not used personally the single variable pattern, where single variable is used to get something that's a tiny bit like chaining. And one thing that JavaScript eventually may or may not get, is the pipe operator and should we ever get that one then we'd have a really nice combination with functions and the pipe operator because we get all of the upsides of iterator methods but none of its downsides.

ARR: Next, I'd like to look at the pros and cons of iterator methods. On the con side you have that, it's a significant change of the current protocol.

BT: ARR do you want to take questions on the queue as you go?

JHD: In your code examples you have like `filter()` and `map()` and so forth as variables in scope. Are you assuming that these are destructured from globals?

ARR: I'm getting to that. That's a downside of a functions. I'll be honest about that one.

ARR: Alright, so on the con side of iterator methods is that it's a significant change of the current protocol and I would not expect all of the existing code to be upgraded at least. Well, I don't really know about at least, it would take a while if programmers do use them. Then there's quite a few rules that they have to keep in mind. So on one hand, they have to detect "does a given value support the new API or does not?", and then they also have to know how to get an iterator and that's not always obvious either. So that's something else. It's more rules they have to be aware of, and I suspect that it `Iterator. from` could become a common pattern. But then you can ask the question "Why? Why not do a wrapping API?". So that would also work. It would also be an option. And another con is that libraries can add more members to the API. So, if they contribute new operations for new iterator helpers, you get a mix of API style so you'll have the iterator methods, on one hand, and you'll have whatever the API exports on the other hand and as the built-in API will be. Well, it's, it's relatively small. So, there is room that is going to be filled by libraries. So this kind of makes this something to keep in mind, and on the pro side, they are chainable, they have an implicit namespace. So you don't need an import, as JHD mentioned. That's a nice feature. And another nice feature is that value specific implementations of operations are easy to add and they are used automatically, you just override an iterator method.

ARR: Next are the pros and cons of functions as iteration helpers. On the con side is that while it's relatively easy or why it's easy to provide value-specific implementation of operations, those are not used automatically so you would have, for particular cases, to import or use a different function. So another option is to where I'm not entirely sure if it's worth the trouble is to delegate to simple keep methods. And a, an example where that already or whether that is already happening, is some string methods forward to regular expression methods. Another downside of functions is that there is no chaining and that they are namespaced. So you either have to import them from a module or "import them" via destruction. On the pro side is that you do not need to change the existing protocol. Another pro is that it uses the same style as all current built-in iteration-based mechanisms. Another pro is that it follows precedents such as the popular libraries lodash and Ramda. And there's a few rules to keep in mind. So whenever you have an iterable value, you apply them. You apply the function to the value and that's easy to learn and simple. Another pro is that it has the same style as complementary libraries. So if people decide to add more operations to the iteration helpers, then those additions that come from libraries will have the same style as the built-in operations. And a last pro is that we keep our options open with regard to the pipe operator.

ARR: I like to conclude with a few observations. and I saw someone mention that we could have two iteration APIs, but I don't think that would be a good idea. So I like us to choose between either iterator methods or functions on iterables or a jQuery style wrapping API. And if it's a function based API. I'd be happy to help because I don't want to just demand change. I want to help with the change. All right, these are open questions, but maybe some of these only makes sense if we actually do decide on functions as iteration helpers. So there's overlapping functionality with `Array.fromAsync`, but I'd be fine with dropping from function API for iteration with iteration helpers. Other questions: what do we do with the function signature style, be like? Do we have the main operand first? Which is kind of old and that well that's my taste at least I'd like that better for normal function, calls and hack pipes. But on the other hand, if the main operator comes last, then partial application as implemented by .bindwould be easier to use. And there is the thing that, but again, that's my taste, I've seen that with, you know, jsapi that having built-in modules is nice for core force and library functionality. And I'd love to have that for any iteration helper API, but I do not know if thats on the cards or not, Alright, so that's it from me. Thanks for listening and thanks for caring about iteration.

BT: All right, there's a bunch of stuff in the queue. First up, up, we have Gus.

GCL: Hello. Hi, nice presentation. I appreciate you bringing together all of this. so I have, I guess a few points. So I guess, first of all, I mean I may be more subjective but I think I would kind of disagree with the notion that iterator helpers are a change from how the existing language is used. I think most things behave in ways that you know, expect that to be the pattern. For example, I mean you can use most of the time when we talk about these APIs. We usually talk about arrays because they are an easy example, but when you start to look at other other things like Maps or generators, you come into weird issues like how do you select if you're working with a map? How do you select if you're using the keys or the values? Or you know, the default is keys and values but if you want to select one of those off the gate you need to use one of the two methods, which returns a iterator.

ARR: So it's no. Well, it's why do you say it's? Well, it's both. It's also iterable.

GCL: Yeah, but I think you immediately run into a problem there with regards. I'll touch on this in a second with lots of reusability. so, I think that is problematic, and we see the same problem with generators, which are widely used feature. I think, and they returned a sort of a one-shot value. And so, when you take those two things and you have the fact that this sort of creates a strange re-usability problem in the current sort of ecosystem, you abstract this, we abstract over this with functions. Well, of, like do things and, you know, use and pass iterators within themselves with the iterable approach I think you're sort of opening up to a confused method of approaching that where it's sort of unclear what the ecosystem would settle on, like there's no clear answer. And so there are so many answers that could be found by feel that would result in a lot. It would, it would need some some direction pushing that is difficult to do in an ecosystem of this size.

ARR: Are you arguing in favor of functions are against them?

GCL: in favor I guess. Cuz that's just sort of like what people do already. And then I think a big sticking point here is pipeline for my like, requirements with what we're building out for iterators here, I think these functions are only acceptable if we have pipeline. So I consider that to be a required dependency of any proposal that would be working with this function form, and since pipeline is currently…, I think, I think if pipeline existed I would not be wholly against us, I would just still prefer the iterator helpers proposal. As I mean, that's the one I wrote. I think I kind of have a bias towards that but I think, yes, I think pipeline is sort of a requirement here, all right? And then finally, I think we already sort of discussed this over the last few years in the iterator helper proposal. We started their sort of, you know, biased towards the idea of using prototype methods but we did discuss functional approach because you know, we started at stage one with the problem space and we looked at, know, multiple solutions. And I feel kind of like we should, you know, try to continue building upon that sort previous consensus where possible. That's it.

ARR: All Alright, okay. Alright. That was lot. Yeah, sure.

SYG: I want to make sure I understood the what GCL replied earlier to ARR. I understood GCL to be arguing against the iterable helpers proposal or change the actual proposed. And in favor of the iterator helpers status quo, proposal, am I correct in my understanding?

GCL: Yes, I say. Would say that. It's generally my position.

SYG: Okay, so when ARR asked earlier are you for, or against the functions approached by functions, we mean the iterator helper functions, not iterable helper functions because they're both functiones.

ARR: Well, I've considered I would say iterable functions and iterator methods

GCL: just clarify, I am over all in favor of the current iterator helpers proposal approach. Yeah. Okay. You might have gotten confused in all of the terminology there.

ARR: So when I said that current mechanisms operate on iterables, what I meant is shown here on the slide, is I didn't look at and how generators work because the trick they're using is so that they can be used to implement both iterables and iterators. I looked at whatdo the current built-in mechanisms do and they always consume iterables. So whether is `Array.from` whether it is for-of, whether it is array destructuring, whether it is Promise.all whether it is… all of these consumed iterables. and we, and when it comes to, kind of our functions except iterables without a pipe operator. Again that's definitely a matter of taste. But for me, it would be okay even without that as, you see on this slide where you could either name each step, or have this single variable pattern because when I look at my code and pay a little bit more attention during the recent months, I do not chain very often. So very often it is just one operation, one little helper that I apply, I do not change very often but again, that may be different for other people. So and when It comes to consensus my impression again, which is also biased in during the discussion themselves, There were several people who did not agree. So it was not unanimous. So the opinion was not unanimous and I'm but I am very well aware that what I'm saying is last minute and that the people who are working on iterator methods, that they've already invested a lot of work in that. So I'm very aware of that, but I did at least one to raise that point one last time and then be silent forever. Another thing to keep in mind, is that the work that has already been done for the iterator helpers was also the foundation for my implementation, and that would also be very much the foundation for a function based API for iterables should that ever happen. So the, the work that has already been done would not be lost it would be an important foundation for a function-based API. All right.

JRL: (on tcq) +1 with non pipeline, this is a big step backwards.

JHD: Yeah. So all of the concerns of questions about training. I mean, the single variable pattern I think is, I would be, I think, I would expect that to be much more reliable than the naming, the steps pattern, but I think the chaining is pretty important. And that's one of the big motivations for pipeline. And as has been mentioned, if pipeline exists, then that sort of covers two things. One is, it means that a standalone function approach becomes ergonomic and it can be chaine, but now the concern about mixing styles is now irrelevant. It's totally fine to have a dot chain and then a pipeline. And then another dot chain, and so on. and so I don't think that the argument concerned about style mixing. I don't think that that certain applies as long as pipeline ends up landing at some point. Then, you had a slide that had three choices. One of them was methods. One was Standalone functions. And one was wrapping and if I recall. And so the current proposal is methods and wrapping it's just that all the built-in iterators are already wrapped, like their pre wraps all right, and you call an Iterator.from as the dollar sign function that you've experienced expect from jQuery, like you just Just if you don't want care, you just throw everything into that.

ARR: okay, that makes sense.

KG: Yeah. Hi. This is KG or I'm Bakkot on GitHub or Matrix. I've contributed some to the current proposal. So that's where my bias is going to be. So, first off, thanks to the presentation. I definitely don't think we should be weighing the fact that we've done existing work on the current thing, it is much more important to get this right than that we avoid wasting any work. I'm certainly not worried about that. On the other hand, this proposal seems to me to be a lot worse, which is why the current proposal is in the shape that it's in. So, your initial point about popular libraries using the function style rather than the method style is not really that informative because third-party libraries are not in a position to add methods to built-in prototypes. So, e.g., lodash also has a groupBy method, but that doesn't mean that we should add groupBy as a static method. We should certainly put it as a prototype method on array, as we did.

ARR: so, one option that it would have liked that was discussed that unfortunately not in the cards would have been to to have like a super class for all collection classes that would have been really nice and another precedent of for a function, based API is what python does with. iter tools so they are you have iteration helpers and those are all functions in the in the python standard Library.

KG: yes, it's true that python does use the functional style. On the other hand, Java uses Streams which are method based, Rust the iterator trait which is method based, Scala uses AbstractIterator which is method based. Python kind of stands out for the functional style, but it's true that it does use it. I just wanted to speak to the point about, you said that the functional style is more in line with the ecosystem and I just don't think that's that informative because the ecosystem simply isn't in a position to add the more useful style, which is in my opinion the prototype-based method style. And I also think that the ecosystem is less important than what's already in the language, and in particular right now if you are doing a series of, you know, you .filter, .map, .some at the end or .forEach or whatever, the place that you're doing that overwhelmingly is going to be array. It's not going to be with lodash or whatever, because array is the thing that is literally already in the language and that is prototype-based. So having the iterator helpers work like the thing that is already in the language seems very important to be much more important than keeping consistency with the ecosystem, which just isn't in position to do that style.

ARR: I'm not opposed to having methods, I'm opposed to have methods on iterators.

[transcription failed for a bit]

ARR: If you do indeed have the wrapper-style API, then then the methods are easier to get to than via iterators.

KG: well, if you would like to use this API as if it were a wrapper style, then you can just `Iterator.from` and then it is literally indistinguishable from having a wrapper style. On the other hand, if you already know what iterator you are using or if you are accepting iterables rather than iterators, then use `Iterator.from`. If you are accepting an arbitrary iterator from someone else, then you probably want to do `Iterator.from` in case they haven't set up the prototype. On the other hand, a lot of the time you are working with an iterator that, its provenience is known, you are doing map.keys() or arr.values() or querySelectorAll().values() or whatever. And in those cases you know -

BT: Sorry, I don't mean to interrupt, I just want to make sure that everyone on the Queue gets time and we're down to under 10 minutes and there's nine items on the Queue. So I think we need to move to making sure that we're going breadth-first instead of depth. First let's try and touch on the topics and not dive into them. Otherwise we won’t have time to hear from everyone.

ARR: Yeah. And if you use the iterative methods directly, then you really have to know the language relatively well so that was my point. But with the wrapping style API, you do have an option of doing things differently, things differently. It's true.

KG: Oh, I guess this next queue item is also me. This is a different question. It was not clear from the presentation whether you intended these to be single use or multi-use. Like if you map over a set, can you consume the resulting thing more than once or only once.

ARR: You can consume it multiple times.

KG: Okay, that's crazy.

ARR: Well, that depends on the iterable. It works like for-of. I mean, if you use a generator to filter, it has those mechanisms.

KG: Those are different things. If I for-of over a set, if I have `x = new Set`, I can for-of over that multiple times. Is the proposal that if I did get an Iterable.map and passed it some mapping function and then that Set, the resulting thing - could I for-of over that value more than once and see the same set of things?

ARR: In general. No. Okay, this would be an iterable, it takes a set and a fisa mapping function and gives you a single slot shot, result, these operations I've, I've posted a link to the implementations at the end and most of them use generators. So whatever you implement yourself. Like if you were to implement filter yourself with a generator, then that's how these helpers work.

KG: Okay, it seems very strange to me to have an Iterable.map function that gives you a thing that is only Iterable once but I have nothing further to say about that and I'll cede to the queue.

WH: Agree with KG’s last point — the semantics of reusability would be rather weird if applied to iterables. My question is more about the namespaces. Here you present global functions like `map` and `filter`, and those names are likely to clash with stuff, whereas the iterator helpers are in the Iterator namespace, where presumably they're less likely to clash. How likely is the ecosystem to converge on every iterator inheriting from proper Iterator prototypes so that users don't need to worry in practice about those iterator helpers being missing?

ARR: Are you pointing out an issue with the iterator methods or with function-based helpers?

WH: I'm asking a question about iterator methods.

ARR: Yeah. yeah, I don't know I know that there's a lot of code out there that uses the current API and uses some almost in a functional style and I don't know if all of that code is going to be updated and will extend a class, I don't know. I'm probably the wrong person to ask.

WH: Yeah. I'm trying to weigh the namespace/ecosystem concerns of the two proposals. Methods suffer from possibly missing Iterator prototypes, while functions invite clashes over common names in the global namespace. SYG will say more about this in a moment.

ARR: They can be adapted to whatever is needed, the namespace object.

SYG: Yes, this is just to address a question. You raised earlier ARR, that you would like this to be a built-in module if it were in the cards. I can say that it is currently not in the cards.

ARR: All right.

ARR: can I say one quick thing with the, if you say the semantics of being being weird, it makes sense in the in the broader picture for what the functions return. I mean that can be easily changed. So that's just did. I used generators. It is online, you can check it out. And at the time from what I know, it seemed to be my taste made the most sense to me, but that is easy to change if changing it makes sense.

JRL: hey so big that I can see for this is that eventually users will want to have a custom helper that does whatever they want like we're currently in the process of adding groupBy, they could have always written their own group function and it will feel exactly like all of the other helpers because all we have their helpers are already a function. So, function style, you can just create new functions and everything feels natural. You won't even realize there's any difference. The alternative is if we have an iterator per-type and everything has to be on there for it to be natural, then everyone's going to want to use prototype-based fluent API. And if someone wanted to add their own custom helper, now they have to patch the prototype in order to have a custom helper. So that's the big win that I see with this style, but still the same issue as before without pipeline. This just it's not as good as the fluent API.

ARR: All right.

SYG: Next another lens to look at this is that suppose that you were really into the function style API. Is it that much work to build it on top of the prototype based API? like you can vend your single shot iterable by making your special iterator top of the method based ones

ARR: Sure but I think if we have an iterator helpers API, we should only have one.

SYG: So, okay, so your preference is that… as a counterfactual suppose committee decides that we go with the prototype methods, then you would like folks to not have user land combinator libraries for the functional style at all? I can have one in by default but you want the ecosystem to in fact, to converge on one stop.

ARR: at the very least, I would only want to have one style in the, in the standard Library.

SYG: That's, that's, that's for sure.

ARR: I'm saying that suppose the ecosystem… there won't be a common common opinion in the ecosystem because you have the very functional, very FP people and the OOP people and everyone is going to do different things.

SYG: So, my concrete question is what do you think the downside is if the thing that's in the standard library is the methods the prototype, and then there are user land libraries that do the functional style.

ARR: well, you'd still have a you'd still have a mix of styles

SYG: So what that's that's like unavoidable, right? Like the ecosystem will have some stuff that's more. Functional oriented have some more stuff that's all OOP oriented.

ARR: Okay. Now it comes to my taste and I prefer functions and the built-in stuff is what I'm going to work with much more often. So according to my preference, I prefer to have functions in the, in the standard Library.

SYG: So the downside. Okay, so the downside, please don't read any criticism anything to this, the downside to having the prototype methods in the standard library versus functional style, is that it would be worse for your personal taste. Is that what it comes down to? For you.

ARR: Well, I would argue. It's not just my personal taste. I think these are better for everyone but again, well let's what we arguing about. that's the Crux of what the discussion. Since we are having at the moment. So I think those would be a better choice but obviously a lot of people disagree.

BT: Sorry sorry, we are over time box. If there are no objections, there's ten minutes of extra slack in the schedule today. And if there are no objections, I'd like to use that for this agenda item. Great. We'll take this to the hour then. SYG, was that all from your discussion item?

SYG: Yes, thank you.

ARR: Thank you. Thank you.

Thank you. All right, if that topic is over then we have a hack, some acute mixed.

JHX: Yeah, I want to show my support on this topic and I think that they're always have many arguments on like whether it should be iterator helpers us all it will help us or water style whether it should be a prototype methods or standalone functions. And I think that this we are already have the proposal near stages three. I think the arguments never stopped. So I think, I'm not sure what's the best approach, but I think it just should be revisitsed. So, everyone can be confident that we are doing the right thing before it goes to stage three. Especially liked the Personal I do not very like the exposing iterators too much, like this slide explains. And another: this is I think it's the problem of having the methods on iterator that there are another problem. Because in the ecosystem, many people think the iterable are a class. The interface is not class because it encourages back. It's also it's it's iterative income towards the interface, so many people only know if they manually write iterator that they just return objects, which have next() method. But to go with the sort of helps, then it's not real. It's a routine now. So I'm so this I think it may cause some confusion and I also want to mention that. Actually, we have another stage 1 proposal that use wrapper function style, and that proposal also cover many similar spaces, so I support revising to the whole design space.

ARR: Okay.

BT: All right, given limited time. I think in the spirit of breath, first of all, we'll skip KG's replies for now. But if we have time, we'll come back is that okay?

KG: Sure, I didn't have anything beyond what's in the queue anyway. [I don't think there are new arguments to be made here, so I am against revisiting.]

RBN: So one of the point out I've talked about this a couple of times but rather than rehashing on the iterator versus iterable side of things. One of things I wanted to point out was that having something that exposes these helpers as functions, as ARR, is discussing, compose better with third-party libraries, especially when you're looking at something like your code style. If I'm having to using values.map().filter And then I have to call in to a third party library because the set of available helpers doesn't contain enough of the things that I need to actually be able to do the tasks that I need to complete. So I have to use a third party library and now if I'm using methods and I have to swap over to a function call and then potentially swap back over to using methods. So results in very inconsistent code. Plus, there are a number of packages in the ecosystem between rxjs, IxJS, lodash, Ramda and others that support things. Like, pipelining the functions and the unary function called approach that a functional map could work function based map filter Etc would work or compose better with those cases. So, just being able to write consistent code without having to patch iterator prototype to add things that are missing, which we wouldn't want people to do because we've had issues with array prototype in the past, I think functions are much more consistent. It is unfortunate that for them for them to be as useful would require pipeline, but it does make me wonder if pushing to advance iterator prototype-based helpers to stage 3 as is under discussion in this in this meeting, if it might be maybe not necessarily premature to try to push the stage 3 but I do wonder if we get pipeline soon, and I do think that the limitations of the things that are holding up pipeline are not insurmountable, I think they could be resolved and I don't think there's anything that would really potentially block its advancement once the topic variable issues is resolved, but I do if we have these iterator prototype-based helpers and then we have pipeline, would we also want to have function-based helpers instead? Where have gone down the wrong path because we decided to push too early. So it's just one thing I want to point out. We want to be aware of this as we consider the iterator helpers proposal as well.

BT: Thank you RBN. We have two minutes left for the topics.

ABU: I think the the last speaker covered most of what I was going to say. my point really boils down to I think the language is better with either of these proposals landing, but one one reason that I do really appreciate the function approach as if we go and you look at the proposal for iterator helpers, there's and you The comparison chart at the bottom with other libraries that already exist in other languages. You can see that the current proposal, for good reason, has a lot of gaps that I assume are going to be filled by users in user land. And until a built-in works its way through the system as well. And that's going to come from 3rd party libraries using functions and to the last speaker's point. I think that's just going to lead to some wildly inconsistent and unusual code, so I think that adopting this approach from the jump would help address, before a lot of code is written in that kind of back-and-forth style between method calls and functions.

BT: I think only have 30 seconds or so. For BSH first.

BSH: Yes, I'll be very brief. I just want to say I do have sympathy for what HAX hinted at. Right now if you implement an iterator, there's like a handful of things, you implement to have a valid instance of the interface. It does seem a little problematic that the interface now explodes to be a whole bunch of stuff that you're supposed to implement. I presume that Iterator.from() is supposed to be a way to work around that, because you can pass your custom iterator to that and get a wrapped version. It seems a little excessive to explode the iterator interface so you're supposed to support all these different methods just to implement the interface.

BT: All right. We are at time box. Unfortunately we have to move on to the next item unless I suppose the iterator helpers champions want to continue from this thread I'm so there's a reply from SYG saying: “implementer concerns around access wrappers yada”. And I think that's the end of it. So Axl, if they have any closing remarks, you could make them now, just please be brief.

ARR: Yeah. Thanks for listening. Yeah, that's that's it. Thanks. all right,

## Iterator Helpers update

Presenter: Michael Ficarra

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/14oZanWyqMBFyplX28d3U3Z2mjARqyJwaq1dF4dh2Ckc/edit)

MF: I’d like to thank ARR for that presentation. Let’s discuss more on the issue tracker for iterator helpers.

MF: So this presentation is an update on the iterator helpers proposal that was presented last time. Before we get started, I just want to talk about how I would like to receive feedback. I want to go through the whole presentation, and then I would like to start from the beginning again and address topics in the order I presented them, if possible, because it's most important to get feedback on the earlier items. Later items can get feedback online if needed.

MF: Resolutions to the topics we discussed at the last meeting: First resolution was adding Iterator.prototype.toAsync. This had pretty much unanimous support. So we just went ahead and merged it. So that is merged.

MF: This pull request was made in response to the discussion we had around the methods that have analogues on Array.prototype, adding a second parameter to those functions that takes a counter. We are using the term counters instead of index. We feel it’s more appropriate since it's not necessarily at the start of a collection or anything like that. So this adds counters to most of the helpers that we've added, since they mostly had analogues in Array.prototype. There was not a huge amount of opposition to this, and there were a couple people in favor of it. Mostly, we had neutral feedback though. So I've left this pull request open because I'd like to get a definitive decision from the committee here on which way we go, but it should be in a good state to merge if we decide to do it.

MF: For this second open PR, we have two options. We talked about the web compatibility issue with Symbol.toStringTag on `Iterator.prototype` because a popular library was trying to add a Symbol.toStringTag on GeneratorPrototype which inherits from IteratorPrototype, and it was doing that via assignment which, you know what happens with that. So, there are two options for solving it. Both of these should be workable solutions, but which one is more palatable to the committee? The one on the left here – I don't know what PR number it is, I don't have it on the slide – but the one on the left makes it a weird accessor that we've discussed many times in committee but I don't think we've ever actually added to the language. So it makes it an accessor that will check its `this` value and do the appropriate thing. The one on the right just makes the property writable and then we don't have that problem. So I'd like to come to consensus on which of those two we do. I don't think we have the option of doing neither. I think it is a realistic web compatibility concern if we don't do anything.

MF: This final one addresses the concern raised by an Agoric representative. This makes the new intrinsics that we add reachable through repeated property access from the global. This received a lot of negative feedback on the issue tracker and PR, as you can see a little bit here. I would prefer not to do this. I don't know what the feeling of the rest of the committee is though. So this is an option to resolve that open issue.

MF: Up to a week or two ago that was all of the open issues. So this would be what the proposal would look like if we merged all of those PRs. The things that are underlined here are things that have been updated since last time. So, you see that we've added toAsync, we've updated the toStringTag in some way. It's either an accessor or it’s writable. And then all of these function parameters have counters now. And then the four properties up here that we chose a kind of arbitrary places to put them, but it's probably appropriate, would be added. So that's what it would look like if we choose to merge all three of those PRs.

MF: So other noteworthy changes. There is only one noteworthy change that we made since the last presentation to the committee. It's this one fixing an issue that was noticed when iterator.from is passed something that claims to be iterable, it has Symbol.iterator, but the thing it returns is broken; it has a non-callable `next`. So it actually doesn't return to you an iterator. We now fail fast, we fail in Iterator.from. I was a bit mixed on making this change. It was noted that if we do not fail early, if we don't do this, we could make a `take(0)` operation not fail. If the iterator is just never consumed, so it's thrown away, or if you do a `take(0)` on it or something like that, you wouldn't see an error. But most people felt that it's better to just fail early always. That this is likely an error in programming. And I accept that rationale. So I've merged this change.

MF: So now we come to the section of new open questions. So just recently in the last two weeks we’ve received a large influx of feedback, mostly due to the stage two reviews that came in and there are important and major design considerations I'll go over.

MF: It was asked what the `forEach` return value should be. Currently the `forEach` return value is `undefined`. I believe this matches `Array.prototype.forEach`. There's a possibility that we could make it return the `.value` property of that final iterator result object. So when `.done` is true, it has a `.value`. This is not typically exposed by any consumers of the iteration protocol, but it could be useful. There's times when you would want to have like a summary value, some sort of final value, and this is a way that this could be communicated and it is part of this larger generator superset. So it's reasonable to have it. The arguments against are that we made this decision to not preserve the full generator protocol in all the transformations that the iterator helpers perform. So this is kind of going against that a little bit, but it's kind of a practical way that we'd be doing it. So that's a possibility.

MF: This issue, #229, asks whether flatMap should flatten iterables or iterators. So right now I find it kind of strange, flatMap flattens iterables. So if you return a value that is not iterable it will fail. One option we have is to change it to only support iterators. When we added Array.prototype.flatMap, we discussed design rationale and one thing we talked about was that X.prototype.flatMap should only flatten X's. This is Iterator.prototype.flatMap. It should flatten iterators. And right now, we are flattening iterables. It doesn't even support flattening all iterators: iterators that are not iterable. The argument against only doing iterators or only supporting iterators is that it's really convenient for callbacks to return like an array or something that's iterable, and not have to get an iterator from it. So one consideration we have is maybe as an alternative proposal to this proposal we could accept both. I've explored that route in PR 233 but if anything that raises more questions. Also, if we do support both, that kind of makes it look a whole lot like what we’re doing in Iterator.from: should Iterator.from and AsyncIterator.from be aligned to try to make sure they're as close as possible with this? It seems kind of reasonable to me that we would do that.

MF: An open question which I actually have no idea what the answer should be is “what does async flatmap do when a sync iterator is returned?”. So if the callback returns an iterator, we don't know at that moment by observing the iterator whether it's going to be a sync iterator or an async iterator, and there's a lot of different ways we can handle that. We could try treating like anything async, we could try to make it work but I'm not sure of the constraints there that people might have. So I'd like to see what opinions are. And a final question: are primitives iterable? if they have Symbol.iterator on their prototype, this includes strings, right? So should Symbols and strings and other primitives be rejected outright at the beginning or should they be coerced to objects and checked for iterability? If primitives are rejected, what do we do about Tuples when they land? Do we have an exception for just those? I'm not sure. So we should consider those things before deciding what we do on this issue.

MF: And this final one is a little bit hard to explain. So when you have an async iterator – one that you've implemented manually – when next is waiting on some async operation, you can call return before that async operation finishes. And that's useful for starting a cleanup or cancellation operation. So our map helper uses its own internal queue and it won't let that return start until after the next is completed. So the way that `map` is specified, that use case is not supported. It changes it to really, just be this kind of data pipeline. If that use case is important, we could support it. There's nothing that's stopping us from supporting it. The main reason that this is designed like this actually is just as a consequence of how we've structured the spec text for this. So in the spec, we basically implement everything as generators. We could say, if we find this important, we can go this route. It will make the spec text grosser and harder to follow, but that's not really a concern as far as language design. This isn't just map; this applies to other async iterator helpers. They will have to abandon that generator convenience in the spec text.

MF: And that's all. So because all of these significant new questions were raised very recently, I don't want to ask for stage 3 today as I had originally planned. Hopefully we'll get to that next meeting. I think we're kind of nearing that point where these major design considerations are slowing down. Especially now that we've received our stage 2 reviews. So now I'd like to if you can start going through queue and receiving feedback, and if chairs are able to, I would like to try to prioritize earlier things if we can make that work.

MM: yeah, so first of all, when I understand the toStringTag issue because so the other toStringTags that exist in the spec, are those properties writable?

MF: I do not believe so.

MM: And because they're not writable any attempt to override them with an assignment that will fail for all of those other ones, ones.

MF: That's correct

MM: And why is this a problem?

MF: Because an existing popular library is trying to write to this property on GeneratorPrototype which extends from Iterator.prototype.

MM: What library is that?

JHD: It's regenerator runtime, which is the thing that every transpilation in the ecosystem used for async await at least before typescript became preeminent. So it is pretty major compatibility risk.

MM: So whatever we do here other than - clearly our first mission is don't break the web and regenerator, yeah, I've run into it a bunch of places, I understand. The thing is, whatever we do has to work when the object carrying the property is frozen, and the way we've made that work for other problematic properties, when we freeze them and by making it an accessor. So I would say, I would prefer to make it an accessor. But whatever we do in the, the SES shim initialization is we replace The configurable properties that are problematic with these accessors. So if you did, make this writable out of the starting gate. Let me confirm: it's configurable, correct?

MF: Yes.

MM: Okay so the SES shim would still - since it has to freeze the intrinsics if it needs to preserve assignability, then it would replace the problematic property with the accessor. Nothing you're doing is precluding that and it's just putting the category that other intrinsic properties not to string tag already have. Is that analysis all correct?

MF: It sounds like it. Yeah, it sounds like you'd be able to treat it the same way.

MM: Okay, so we're not insistent on the accessor. We're happy with the writable and we'll just fix it the way we fix other problematic intrinsic properties on initialization if we need to do that.

MM: The other thing was the hidden intrinsics, is one of those places where we need to be careful, not to make a worse language nearly as an artifact of the order in, which proposals have made through the pipeline, if the get. To be very concrete, if you get intrinsic proposal were enhanced as I think it needs to be enhanced and which Jordan doesn't object to to make all of the hidden intrinsics discoverable, then that would provide a discovery mechanism in this one would not need to be discovered by navigation. so, if the way you're making a discoverable by navigation is something which is just on the face of it is ugly and will stand out as we will stand out of the work after we've also solve the problem, by making it discoverable through getting transits, then that that's a problem. Because that is that the sit first of all, all, that situation that were in,

MF: That is the situation we're in.

MM: So clearly, we could allow these particular hidden intrinsics and then SES shim, we just have to be on guard to be upgraded to to add this to a be Discovery code for this. The way it's added the discovery code for other intrinsics that are already in spec. The problem with that is it sets a bad precedent and we don't know how many other proposals are going go through before getIntrinsics goes through. So I want to make a request of you to change the nature of the precedent mildly, which is that you include in the proposal code, which we'll discover these discover and enumerate all of the hidden intrinsics you're producing where the code simply produces nothing if it's run on a system which does not support your proposal yet. i.e. code that something was - that anything that wants to enumerate hidden intrinsics can include these hidden intrinsics if they're there and not break, if they're not there. Are you willing to include such code - obviously not code to go into the spec? So this will just be in the explainer of the proposal or anywhere else, you care to make it official, maybe even a Test262 thing. Okay, so how does all that sound?

MF: Sure, I would be happy. I would be happier to have expressions that produce these intrinsics added to the README than to add these properties.

JHD: So Mark those already all exist in test 262 because that's the only way to test262 tests can test them. And so, in order to test this proposal even without exposing these new hidden intrinsics, that same file would have to additional entries for these new intrinsics. So there's already canonical place for that. And that's what I've looked at. Whenever I do that in my get intrinsic library,

MM: That's very interesting, could you send just offline? Could you send me a pointer to the specific test that does or the specific code that does that in Test262?

JHD: Absolutely. I'll drop in Matrix shortly.

MM: Okay so think that as long as everyone understands and this paid As a precedent that such close such code addition is a necessary thing to provide as part of introducing, any hidden intrinsics until they get until we have get intrinsics in the language. In that case I'm happy to drop the ugly pattern that I forced you to invent to make these things discoverable.

MF: I'm happy with that.

JHD: And then I have a I guess a queue item to confirm that, yes, the get intrinsic proposal is - I'm intending to include the enumeration mechanism and I'm hoping to be able to present it in January, but that said, I'm glad with this conclusion because I don't think that this proposal should have to change or for that constraint or wait for it, but I will be very happy when this never has to come up again.

MM: Thank you. Jordan. I'm very glad to hear that it's being included, and that you're working on advancing it. That's great.

BT: Okay, next up, we have Justin ridgewell.

JRL: So on your, forEach, what should the return value be? Honestly, it should just be a tap return. an iterator that returns every single value, even if you do have to consume it. And then create a new iterator that restores all the values later on.

MF: So forEach and tap are fundamentally different here. forEach consumes the iterator. tap would only create a new iterator where that function would be applied when the iterator was iterated.

JRL: What I'm saying is that forEach should internally have an array? Maintain each value that is returned by the iterator and do the same thing as tap and then continue on so that it can continue. So you get both the consumer behavior and it doesn't break the iterator that I have to change the method in order to be able to chain more things on to it. People are going to reach for forEach because it's the familiar thing that should behave in a way that allows you to continue the chain.

KG: Okay, I strongly disagree. I am fine with adding a separate tap method, but it should not be that method. forEach should consume the thing. And it certainly should not like to stash all of the values that it returned in an array and in an internal list and produce them later, like that's just a fundamentally different operation than for each. Just consume the iterator.

JRL: we should not have for each then. People are going to reach forEach and it's not going to behave the way that they expect. You cannot put it in the middle of a chain because it's going to return undefined.

KG: That's true for arrays already.

MF: I don't think this will surprise people.

BT: Sounds like up next is Jordan.

JHD: Yeah, so I'm not really a big fan of the counter stuff. I mean, the thing that isn't important is like the name of the predicate in the spec, right? Like mappers all come with an index but but I just I'm not I'm not super convinced that It is actually a good idea to enable the use cases that this does. Like I think that it's like, the second argument to one of these, callbacks some people are going to assume that it's the index, and even if we call it a counter, like people are going to use the letter i for it, it's going to be they're going to take their existing code that uses indexes and like it's sort of encourages the wrong mental model about iterators, which don't have indexes. and I would prefer to not have it and you know, since there's the was it entries or index pairs whatever its called now, indexed is the thing that this removes since that exact like, that could exist and I think that provides that case and makes it really explicit in the code that you are that you're trying to add the add in something that doesn't already belong on iterators. You're kind of adding fake indexes for your own uses. And I think that that explicitness is valuable and will avoid some confusion.

MF: Yeah, I pretty much agree with that feedback. I think that there are some negatives and some positives to having the counters. I'm fairly neutral on the topic.

JHD: I guess I have the next item as well. Dealing with iterables automatically assimilating an iterable, I guess, that's awesome. Except for the fact that strings are iterable by default, which is a horrific mistake that we've made. There has been a reasonable suggestion to mitigate that, which is to only allow object iterables, given that strings are the only iterable primitive at the moment. That would work, but it raises the question as you mentioned. And what to do with records and tuples, I could see a world where it made sense that records, tuples and objects were allowed, but not any of the other primitives. It's just, like, I think that if we do make that special case, it's weird and if we don't make that special case and allow iterables, it's the worst possible outcome because of strings. And we ran into this with array.flatMap as I recall a little bit. I think we kind of shunted to the side because of the decision to just use you know isArray. But I think that we need to do whatever possible to ensure that there's not this huge footgun that whenever you put a string somewhere that you can put in a number all of a sudden you get a bunch of characters instead.

WH: Speaking of testing for things which are iterable or iterators, in what circumstances does that case arise? In what circumstance do you do different things depending on whether something is iterable or not?

MF: There are only two places. There's flatMap (the return value from the callback) and there's Iterator.from and AsyncIterator.from, the static from method of each.

WH: Why do you do that in flatMap?

MF: Well, it is not done in the proposals today. This is a place where we are considering doing it in flatMap. Because the iterator.prototype.flatMap does not support returning iterators. Seems strange. It seems like if we could support that we should accept something which is either iterable or an iterator.

WH: This seems strange, and I don’t understand how this answers my question.

MF: flatMap takes a function, and that function is a user provided function that could return anything. We need to do something for any value that can be returned. So there are many ways we can subdivide ecmascript language values. We can say all primitive values cause flatMap to throw as they are unsupported. We could say that those values are first coerced to objects, we look for symbol.iterator, and if it exists and is callable, then we treat it as iterable and we do the right thing there. We can say, if that is not the case, we assume that the object is an iterator and use that. This is not an unreasonable way to subdivide ECMAScript language values. It has a lot of practicality.

WH: Okay. So the intent is *not* that the callback which is supposed to return an iterator returns the number 5 and you insert your 5 into the flatMap results?

MF: We do not want to do this auto lifting which is a thing that Array.prototype.flatMap does. It is not a thing I would like to do with Iterator.prototype.flatMap.

WH: I fully agree. It was mostly a clarifying question. I agree with the direction.

BT: Next is Ashley

ACE: I guess just the opposite of JHD's thing to make this really useful for you Michael.

MF: awesome.

ACE: When we talked about this with Bloomberg delegates earlier today or yesterday and a few of us liked the fact that this PR was raised because it seems natural based on the fact that the alpha few places where we have places like.map and filter it also passes index. It feels consistent to include it. This it's a trivial thing to include. Like, I certainly don't expect the consistency of the third argument of having everything because naturally that doesn't make sense due to being impossible. but being able to produce an index is so trivial.. Yeah, I was surprised when I first saw that it wasn't included for a more pragmatic reason of including it. The most common time I get excited and reminded about this proposal existing is when I see codes that has a long list of a chaining, and I can just, I can just see all these like wasted intermedia array is being created, it's just chain and I'm like, I really can't wait for iterator helpers so I can refactor this into something that's potentially more efficient, memory pressure wise. And having that not having that index argument just makes that refactoring that slight bit more work or risky that I now have to check if anyone's just passing a callback directly rather than inline arrow and I also have to check are they hoping to get the index? I quite like it. I think I can see why others don't like it. I can see how the index thing could solve that though. Personally, I preferred just, including it rather than someone having to add.indexed and now destructure the arrays. They're getting back on to the next one, But yeah, I probably won't help because uh, people think the opposite, no one's know, that does happen.

RBU: That like intentionally needing to wrap them for them, not having wrappers would exclude them. For some reason. So I think that's relatively uncontroversial, I don't have a strong opinion and off the top of my head as to what the Solution is regarding like string and iterator versus adorable. But what I will say maybe in favor of an exception for Tuple is that we already will have exceptions in this back for two people for things like .concat. So that's already. It's okay. Maybe to ease the pain or the burden a little bit. Just want to put that out there as a reference point assuming you probably would make an exceptional case, very clear to people there in the primitives. If we are excluding all primitives and I think that's Great. Yeah,

RBU: like I said, largely uncontroversial, I just wanted to reiterate this point.

MF: Thank you.So, since the queue is empty, I would just like to go through each of the decision points here, and I'll go over how I will address them. For the counter, It seems like we don't have incredibly strong opinions either way and that it would be okay going either way. We can continue the discussion in the Pull Request. I won't be closing that or merging it anytime soon. But I would like to get that closed out before the next meeting. So if you do end up having stronger opinions soon, let us know there. For the toStringTag, we will be taking the right PR to make it writable. For the proposal making intrinsics accessible, I will be closing unmerged and adding additional information to the README. For the new open questions, it sounds like forEach: nobody had feedback on this. So the champions will work together on a decision there. For flatMap, we received some feedback, none of it incredibly decisive. So it sounds like we have some design freedom here. So again, the champions will work to come up with the best design that we can here. If you have any strong constraints you'd like us to be aware of, let us know in that issue. This topic [interleaved next/return in async iterator helpers] we received no feedback on, I was kind of hoping we would. I'm leaning toward supporting this fairly strange but also reasonable use case. Which will make my life a lot harder, but I think it's probably the right thing to do unless we really want to reinforce the mental model that these are all producing generator-likes, and then it's just data transforms. If anybody feels strongly about that, you can let us know on that issue, that's how I'll resolve things.

WH: I think somebody else already commented about `forEach`. I agree with their comments that this should just return undefined.

MF: Okay, so you would not like this additional final iterator result value to be available as the return value.

WH: I would prefer to keep it simple. I’m subject to changing my mind if I see a compelling reason.

MF: Okay, thank you for that.

WH: The other thing is, I'd like to understand the next/return issue. I couldn't figure out the details from either the slide or from the issue that is pointing to, and I'm curious whether this is a more generic problem with generators and if we need to do something in the language about it if it comes up in other places. I simply don't understand it at this point.

KG: Can I try to take this one?

MF: Yeah, go ahead. Yeah.

KG: So this is an issue which was identified at the time the async generators were added to the language. It is not relevant to sync generators because sync generators do not allow you to invoke .next while next is running or .return while next is running, it's just an error to invoke those methods while it's in that state, but that is not true for async. So you can call .next and then the async generator runs, or AsyncIterator runs, until it hits an await. and then you get a promise out and then your code can invoke .return for on the async generator while it's paused on the await. So the specific concern that is raised here is that if you would like to clean up resources held by the async iterator or async generator, the way that is normally done is by implementing the return method. That is what the return method is for. But with async generators that invocation of .return is queued behind any existing calls to.next. So all of the calls to .next that you have made previously will need to run to completion including awaiting everything that they need to await before the .return actually happens, so the finally block would get triggered for an async generators. For async iterators you don't have to implement this queuing behavior. It is possible to write an async iterator, where a call to .return will not wait for all preceding calls to next to finish before performing cleanup and it can choose what happens to the outstanding calls to .next. A normal things to just make them return { done: true } to say that all of the calls that were made previously will observe the iterator having been in a closed state although you could make them throw or whatever other behavior you want. So this is a problem that already exists with async generators, that there is no way that you can clean up a async generator eagerly, because if you have previously made calls to next and then you realize actually I’m done with this, you just don't have a way of doing that. That is a problem that is already present for generators in the ecosystem. People work around this by implementing their own iterators that don't have an internal queue of next and return calls. And so the ask in this issue is for us to also not have an internal queue for next and return. So that's a call to return on an iterator helper would eagerly forward it to the underlying thing. Of course, if the underlying thing is an async generator, that's not going to do anything, it's just going to be added to the queue for the async generator. But if it is one of these manually implemented iterators that implements eager clean up when return is called, that would continue to work when mapped over with iterator helpers. Does that make sense?

WH: I don’t want to spend too much time on this, but one more clarifying question: If an eager iterator helper is hooked to a generator that queues up and waits for .next’s to complete before handling the .return, would anything ever call those .next’s, or would everything just be left hanging?

KG: We would have to decide what happens to the promises returned by proceeding calls to .next. I don't know what the right answer is.

WH: This sounds like a topic for a bigger discussion, which we don't have time for today.

KG: Yeah and some of this is - the exact specifics here are going to require a fair amount of thinking through which Michael and I haven't done because we wanted to get a sense of whether people might be in favor of this.

WH: All right.

BT: Next we have Shu in the queue

SYG: Aside from the on the current topic of this return jumping the queue async for racing iterators. My reading of your opinion, Michael, is that you haven't heard compelling use cases for this, but all other things equal, perhaps you would like to support this is that an accurate characterization,

MF: It's not a lack of compelling use cases, it's just not part of the more limited set of use cases that only treat this as a pipeline of data transformations. If we conceptually want this proposal to only support that limited set of use cases, we don't really need to be concerned about this.

SYG: I see. Okay. Given that we haven't heard strong support, not even strong given that we haven't really heard support in this session. For this use case, I would like to offer that. It might be like it's hard to tell how easy it would be or, how hard it would be to implement this between queue jumping, if other aspects of AsyncIterators behaved, like, if they were implemented on of async generators, except for this, this, if it's Particularly onerous because it adds this weird dimension just for AsyncIterators. I would be weekly against supporting it for implementation simplicity but of course that should not trump. If there are actual compelling use cases that the committee is largely in support of. But if there isn't, I would like to offer implementability as a test for whether we should do this. I will be unlikely to know how implementable it is before stage 3. So if that were the case and you as champion preferred to, to try to support this case, I don't know what we would do. but maybe you know, leave it. Someone will try to implement it if it's, you know, we come back with experience and say actually we don't think it's worth the trouble, then we revisit it.

MF: Yeah, thanks for the feedback I hadn't yet considered that this adds risk to this proposal around implementability. I do fear though that we haven't heard support for this use case today because it is just a rather hard use case to understand. People might need more time in which case I encourage people to ask any questions they have about it on our issue tracker there and you can try to resolve that and see if people care about it. And remember the thing we're trying to decide is: do we want to be as practically generic in our support for these more exotic usages or do we want to conceptually have these helpers limited to things that are implementable as generators?

SYG: Okay, I have no relevant feedback for that question.

MF: Yeah, that's a question for the group. Okay, it seems like we're at the end of the queue this time finally. So, thank you, everyone. Hopefully, we can get these last questions resolved and come back for stage 3 at the next meeting.

BT: All right. Sounds good. Thank you very much. We have four minutes left, so we'll just break for lunch early.

### Conclusion/Resolution

- champions will integrate feedback where given and will use their best judgement to resolve other open issues where feedback was not given
- proposal remains at stage 2

## Array.fromAsync for stage 3

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/tc39/proposal-array-from-async)
- [slides](https://docs.google.com/presentation/d/1DMZaC-4_CrK110hTSFChMfcS0yqLCeUc6aiUj_3rZiU/edit?usp=sharing)

JSC: Hi everyone. My name is J. S. Choi. I'm presenting Array.fromAsync for stage 3, pending editor review. The syntax and semantics have been formally specified. So if we reach consensus for stage 3, then the committee agrees that further refinement of the spec would require feedback from actual implementation.

JSC: Brief review of the rationale, we have Array.from right now. It's super useful to dump iterators, potentially lazy iterators, into a flat array that you can randomly access. We don't have an async version and I think this is a big hole, because we have AsyncIterators but there's- it's so useful to be able to flatten AsyncIterators into a rate at any time to debug or test or whatever, but we just don't have that yet. And I think this would be a big help. There's a clear parallel here.

JSC: It's a fairly common ask. There's some npm packages that do similar, that do this that are somewhat popular. Multiple Stack Overflow questions. The explainer of the proposal has multiple real world examples from stuff like Adobe code, ipfs code. It's usually stuff like I mentioned: testing, debugging and command-line interfaces too.

JSC: a couple of design principles that are useful to keep in mind, and these are ordered. First of all, we want array.fromAsync to be similar to Array.from we want its optional parameters to not care whether we supply actual like, for instance, nullish values versus omitting the argument all together. We also really want it to be similar to the behavior of for-await-of like how array.from matches the behavior of the synchronous for of. And less importantly, but still desirable - this is the current from the current iterator helpers proposal - we wanted to at least roughly match the iterator helpers behavior when it comes to Iterator.from().map().toArray().

JSC: Brief overview of its behavior. Of course, it works on async inputs and the return value is a promise that will resolve to a new array. There are no exceptions to it returning a promise. So if you have a lazy generator here, you can dump it into an array using a for-await Loop and then have Have like push it in to push each item into the result array, or you could just call the function in await with the result and it would be equivalent. Next slide please

JSC:And like for await it also works on synchronous iterables too, and it basically does what you would expect. This includes doing the same thing as for await of in that if that synchronous iterable yields promises those promises get awaited and the result that it resolves to is what gets pushed into the array. Completely the same as for-await of=.

JSC: There's one thing here. These are non-iterable array-like objects. Array.from supports; these are objects that are not iterable, they don't support a Symbol.Iterator method, instead they have a length property and element properties. and so, just like Array.from, we support these array-likes as inputs and we kind of do the same thing as what you would expect for-await to do, We support promises being those elements too. So it's the same thing as if we passed the array.from into a for-await-of loop. This is hopefully fairly intuitive. And we've discussed this at length already. One representative says that Array likes are very much not obsolete, it's good that things aren't forced to implement the iterator protocol to be transformed into an array. So I think the parallelism to Array.from is very important.

JSC: This is another similarity to Array.from it's a generic Factory method, it doesn't require that its receiver be the array Constructor. It can be trapped, it can be called on this receiver that is another Constructor and it will use that Constructor instead so you could transfer it to another to that other Constructor. You can set it on a prototype, whatever. And it will use that Constructor to create the final result. Symbol.species is not involved at all here. This is just like Array.from; it uses the `this` receiver. And if this receiver is not a Constructor, then it creates an array using the intrinsic array. Constructor just like Array.from.

JSC: Array.fromAsync has two optional parameters. This is just like array.from also. A mapping callback and the `this` value to call for the mapping call back. These optional parameters are just like Array.from; you use them to automatically transform each item before you add it to the array

JSC: there are some subtleties to the mapping callback that we've gone back and forth on, and I think we've settled on a good decision. We've decided to make the emission of a mapping call back, or making the mapping callback undefined or null or whatever, that basically means that as the iterator gets consumed, you only have one await for each item at most. But if you supply a mapping call back, then you're going to have two awaits: one for getting the item from the input iterator, as you consume it, and one for each result of the mapping call back. So that means that it's not equivalent to an identity callback to from async that's not equivalent to emitting a call back at all and we think this is okay.This is very similar to for-awaitin that if you omit a mapping call back. It's just like for-await in that everything gets awaited once most. but if you include a mapping callback, its a awaited, it's like calling that callback. And then awaiting the result and And and that's it. That's the only difference. We think that this is a good decision based on our priorities which is to match the semantics of for-await-of most of all. And you can see what we talked about issue 19.

JSC: And this is an async function. It will always synchronously return a promise. Any error that occurs inside of the function will cause that promise to reject, it never causes a synchronously thrown error, simple enough, but like we've been pretty careful to make sure nothing escapes synchronously, no errors escape synchronously. So This includes, like not being able to call Symbol.iterator that throws or if creating the next item of an iterator throws, etcetera.

JSC: there was also an issue with iterator helpers on whether, if we're going with iterator helpers, there was too much overlap with its toArray method. Both the champions of iterator helpers and I agree, I think, that it's okay for there to be overlap here. If we had to choose between having toArray and having fromAsync, I would choose fromAsync. We already have Array.from; that's the precedent, but it's okay to have both. Yeah, and this is pretty settled. It was settled pretty long ago and we're both fine with it.

JSC: There's some editorial changes that if we discussed, when we merge in this proposal, it would be nice to have. Like, if we can make array.from and fromAsync, share more machinery. and if iterator helpers come in or however, it ends up having it the toArray machinery, share it with that. And if it's possible - this might be not possible - but it would be nice to have all of this. Use the Machinery in array.prototype.values, which is a method that creates array iterators. That might not be possible due to prototype mutation Shenanigans, but it's something to look into. But in any case this these are future editorial things to keep mind but it's not anything that should block stage 3.

JSC: Anyways, I'm asking for stage 3, I'll ask for stage 3 after we clear out the queue. Just one more note, I had two reviewers for stage 3 who had already approved a previous version of this spec. But that was before we made a big decision regarding what to do with mapping callbacks, when we emit mapping callbacks. So, One reviewer has given the approval to other one says that he will, he will give its name and other thing

NRO: I reviewed it last week, I just forgot to write it down. Everything looked fine.

JSC: Excellent. Basically I'm going to ask for stage 3 since I have approval from two reviewers conditional on editor review and an approval conditional on that. But first, let's take a look at the queue.

JHX: The fourth. Thank you. My question is about the `null` is the second parameter.

JSC: Oh sorry. Go on and finish. I think I know what you're going to ask. I think I made a mistake and I forgot to update something here on this slide but go ahead and finish.

JHX: I just want to confirm that because the current array.from will throw.

JSC: Yes, get rid of that middle part, it's just undefined. Yes, just like a Array.from it's the same as a Array.from it, only It only looks at whether it's undefined, whether the second print argument is undefined, if it's null, it will throw a TypeError "not a function" just like Array.from. It's the same as Array.from and the current spec is that, I just confirmed.

JHX: Okay, thank you.

JSC: Does anyone else have anything on the queue? [no] Okay, I would like in that case task for stage 3 conditional on editors reviewing it and not having serious pushback.

PFC: I'm wondering about the receiver behavior of the static method of fromAsync where it'll check if the `this` object is a Constructor. I was comparing that with what is called Type II built-in subclassing in the remove built-in subclassing proposal. In that proposal, it's described as sometimes beneficial, but at a cost. And for example, we removed that sort of "use the this object as a constructor" behavior from factory methods in Temporal, because it didn't provide the same benefits that, for example, Array.from does. Are there concrete benefits to having that behavior on fromAsync?

JSC: My answer is that I think that any concrete benefits that apply to array.from and making it a generic factory method, making from a generic factory method also should apply making fromAsync a generic Factory method. I care most about consistency between Array.from and fromAsync. And I think that it's fine for array.fromAsync to be a generic Factoring method. I think that if people are using array.from like a generic Factory method, then they will all the I can't think of a situation where they would not also want to reach for array.fromAsync and apply to their Constructor. Does that address your question or or does that create a new question for you?

PFC: Yeah, that would make sense that the consistency argument is very strong in this case because we also have `from` on the same constructor.

JSC: Yeah. Any time that someone is creating some kind of class and they're stealing array.from, I can't think of a single situation where they wouldn't want fromAsync because they're such a strong pair of each other, that was part of the whole motivation of this proposal. The place we've got sync iterators and we've got async iterators. Why wouldn't you want from async if you were using from, tat would be my the thrust of my argument here.

PFC: Okay, that makes sense to me.

WH: Does the `fromAsync` closure capture *thisArg*? I assume it's just a typo in the spec, because it currently doesn't.

JSC: Okay. Yeah, that's just a small typo in the spec, it's easily fixed. It should capture `thisArg`.You're referring to the abstract closure that is created. Yes, it should. I will fix that in a jiffy.

KG: The latest version of ecmarkup has a built-in lint for that.

JSC: Nice. Okay, I would like to ask for stage 3, conditional on editor review.

WH: I support stage 3.

JSC: Thank you very much, WH. And whoever gave the thumbs up [in jitsi].

[multiple thumbs up in chat]

JHD: +1, should have been a requirement of for-await-of.

USA: So you have plenty of support. Congratulations, you have stage 3.

JSC: Thank you very much everyone.

### Conclusion/Resolution

- Stage 3, conditional on editor review

## Set Methods, part III

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-set-methods)
- [slides](https://docs.google.com/presentation/d/1HCqPMsWiTtsn92gA3b1luVpnVHWVVR0iKaAE0marxkA)

KG: Okay, so set methods. Still trying to make this happen. We talked about it last time but I did not have a large enough time box, and people had some questions and alternatives which we just didn't have time to complete this discussion last time. So I'm coming back for another hour, and I will keep coming back until we get this sorted out.

KG: So previously, several meetings ago now, we decided that instance methods (set prototype union, intersection, whatever) should use Set internal slots on the receiver but they should access the public API on the arguments, so when you pass a Set to intersection or union or whatever as an argument, the methods should use the public API rather than reaching into the internals. So that it works if you have, you know, a proxy for a Set or something that is wrapping a Set and implementing the same interface but imposing additional constraints, or whatever. But we left it unresolved at the time how exactly you should access the public API.

KG: So, let's start with a simple example: Set.prototype.union. I think, in this case there's really not much question. This method only needs to iterate its argument. We have an explicit protocol for iterating through the argument. So I think that is what we should use for union. We should call symbol.iterator and iterate that repeatedly. (NOTE: the text on slides should be interpreted as pseudo code, not literal spec text. There is no literal spec text for this. The repository has a very stale spec text but we need to resolve the issue that I am presenting about it before I can actually write up anything there. So, please interpret this code I'm showing on the screen very loosely). The idea is we are getting the iterator from the argument. We are iterating it repeatedly and adding it to the internal to internal sort of the set that we are constructing. And of course we are iterating the receiver using the internal slots, so that will be consistent for everything; we decided we should consume the receiver using internal slots. So that was union, that was simple.

KG: Intersection is not simple. I'm not going to go over this in detail. The thing that I want to point out here though is that for intersection you need to look at the relative sizes of the two collections and either iterate the receiver and test membership in the argument, or iterate the argument and test membership in the receiver. You really do need to vary which one of these things you are doing depending on the relative sizes of the collections because otherwise it has O(worst) performance. So consider the case that you are intersecting a small, potentially empty set with a large set: if you were iterating the argument every time and checking membership in the receiver, that would be unnecessarily slow. You would be iterating a large thing when you really only needed to look at these members of the smaller thing. Or conversely, of course, if you had a large thing you were intersecting with a small thing, and you were iterating the receiver and testing membership on the argument, that would be unnecessarily slow, you would be performing iteration over a large collection when iterating over a small collection would have sufficed. So you really do need to look at the relative sizes and then choose the way that you will consume the argument (either membership testing or iteration) depending on the relative sizes. It would be nice if we could just convert the argument to a Set and then use the internal slot directly and bypass all of this, but of course converting the argument to a Set requires iterating the entire argument. And if the argument is much larger than the receiver, this has the same negative consequences for performance as just always iterating the argument would have.

KG: So how do we do that? What is the way that we check size and membership of the argument? There are a few options here. So we previously ruled out using internal slots. Not going to revisit this. It has significant downsides. We want to use a public API. So the first thing that you would consider is using Symbol.iterator to iterate and use `has` method to query membership. This works fine as long as the argument is always a Set. But it has, I think, unacceptably bad consequences if you pass something that is not a Set: in particular if you pass it a Map. Now, remember that the algorithm that we are going to use, the way that we are going to consume the argument depends on the relative sizes of the receiver and the argument. If we consume the Map for membership testing, that is, if we use the `has` method, that acts as if the Map is a Set of keys and that Set of keys will be intersected with the receiver. On the other hand, if the Map is smaller than the receiver, we would use symbol.iterator on map, which gives entry objects. And those are created fresh for iteration and therefore cannot possibly exist in the receiver and so you will get the empty intersection instead of the intersection of the receiver with the keys. So you get different Behavior depending on the relative sizes of the collections. So intersection works, in the sense of gives you the intersection of the receiver with the keys, only sometimes; it works only when the argument is larger than the receiver. So this isn't quite duck typing because it is duck typing that works depending on the precise values of the argument in the receiver rather than just the interface implemented by the argument. And I don't think duck typing should depend on the instance itself, only the interface the instance implements.

KG: So what else might we do? Well, for solving the problem with Map, why not just always use the .keys()? That means that you would be iterating for intersection in a different way than for .union which seems surprising but not necessarily terrible. But on the other hand, this has exactly the same problem as symbol.iterator had for at least some potential user-defined types. So I have an example of a class I claim is perfectly reasonable. It's an indexed set, so its keys are indices and there is an `at` method that you can use to access the element at a given index. But if you just iterate it, it gives you the values in the set. And if you do .has it tests set membership like you would expect for a set. I don't think there is anything obviously wrong with this class. But it has exactly the same problem as with the "keys and has" design for set intersection as we had for the "symbol.iterator and .has" design did for Maps, which is to say it only works sometimes. I think it's fine for classes like this to not work as an argument at all, or to always work, but not for them to only work sometimes. I think that is unacceptably bad behavior. And unfortunately this is kind of a fundamental problem with using string named methods: when there is more than one of them, you don't have any way of guaranteeing that the designer of the class intended them to have the consistency property or their relationship to each other that you are expecting them to have for this to work. Because `has` is a totally reasonable method to implement on your class, as are .keys() and Symbol.iterator, and there's nothing that says that `has` must be consistent with `keys` or Symbol.iterator. Indeed has is not consistent with Symbol.iterator for maps and .has is not consistent with .keys for this indexed set that I had on the previous slide.

KG: So, another option, which as you can tell is the one that I favor, is to introduce a new symbol for checking Set membership testing, that is specifically for Set membership testing, and you put this on Set prototype as just an alias for Set.prototype.has and you don't put it on Map at all. And if this method is missing then you throw - or potentially you just only ever iterate - but you check the presence of this method before looking at the sizes so that it doesn't fall into this trap of only working sometimes. And then you can say that if you implement this symbol, it must be consistent with symbol.iterator. Ignore the name, the location for the symbol is something that we would need to discuss later. And you probably also want to have a method for doing the getting the size of the set, because the size getter is again, not particularly required to be consistent with iteration. Although I think that would be significantly more surprising then .has or .keys not being consistent.

KG: And maybe there's something else we could do. We could have a symbol that just declares that the .keys and .has methods are in fact consistent with symbol.iterator. And so it's safe to do the normal way. This adds another observable property access; the .has or .set or whatever is not particularly useful. And the thing you have to do four property accesses, for symbol.iterator, .has, .size and .set instead of three for Symbol.iterator, Symbol.SetHas, and Symbol.SetSize, but it's a possibility. So I wanted to raise it.It doesn't have the problems of non-deterministic behavior that using string properties does. Maybe there's something else but these things seem like the obvious options to me. I would like to go with the Symbol one. But I would like to hear from the rest of the committee about thoughts and alternatives.

WH: I would have come to a different conclusion here and would want to do the simplest thing that works for maps and sets. If I understand the presentation correctly, that would be just using the .keys and .has methods. It's true that people can write byzantine things which violate expectations of this API; this will be true regardless. The issue I have with introducing these extra symbols is that as we develop new algorithms we may find that trying to preserve the "everything works or nothing works" invariant is futile. For example, suppose we first add only .union(), then you'd only need the symbol for iteration. Then let's say that we update the language by adding .intersection(), and at that point we couldn't add intersection without changing requirements for union or breaking the everything-works-or-nothing property.

KG: To be clear for "the everything works or nothing works" property, I am concerned about that holding within a single method and it seems to me that we could - given that scenario, we could still add an intersection such that any given value either can or cannot be used as an argument to intersection. Is that not the case?

WH: I misunderstood — I thought you were applying it across methods.

KG: And I am proposing that the has symbol and size symbol would be used by every method that needs to do membership testing and size testing, I am proposing to use symbol.iterator for iteration and to just say that these things are required to be consistent to give the behavior that you want.

WH: Yeah, I just don't like it not working with maps, which is what you are proposing.

KG: I mean. What is the thing you think it should do for maps?

WH: Just use .keys()?

KG: So treating the map as a set of keys for the purposes of intersection?

WH: Yes.

KG: I mean, I don't feel strongly that this should work with maps. But we could in principle, add a new symbol.setIiterator or whatever, that would, then make it work with maps. But then, yes, this would have the problem you raised about brittleness for adding new things. On the other hand, if we committed to only accessing the argument via symbols introduced for the purpose, that is no problem.

WH: To make it work with maps, we could use option 2, which is just use .keys and .has.

KG: Yes, I agree that makes it work with maps. It just has this unfortunate consequence that there's other perfectly reasonable things that don't just not work, they appear to work if you happen to get the relative sizes in a particular state, which I think is really unfortunate. I don't see this as a problem at all here.

WH: It’s always possible to write classes which behave badly.

KG: I don't think this example behaves badly.

WH: Sure you can write this, but you shouldn't expect it to work when you try to treat it as a set.

KG: I agree that you shouldn't necessarily expect it to work when you try to treat it as a set. But you will try it, and then if it happens to be smaller than the receiver it will work, and you will be going about your merry way. And it will only break later when the sizes happen to differ.

WH: I don't think we can avoid the problem. With either approach you can write classes that misimplement the API. The symbols API does not prevent somebody writing a similar thing which implements the symbols API incorrectly.

KG: It doesn't prevent that, but it is more obviously wrong with this thing that I have on the screen that is not obviously wrong. And if you had a symbol.setHas that is inconsistent with symbol.iterator, it would be obviously wrong.

WH: I disagree about this being “more obviously wrong”.

SYG: I have a few thoughts here. when we discuss some of this, with other folks at Google, and one of the feedback was that since we don't have protocols, having an ad hoc protocol here feels weird. And if I understand the motivation correctly from the presentation, it really is about preventing "using Mmap in intersection" foot gun.

KG: Right. Like it's Map or other classes.

SYG: Yes. but mainly, but map is the is the source of the foot gun. Like, if it's a user written class, then the fact that its iterator and has may be inconsistent, is kind of on the author of that class. Whereas, for map, you might reasonably expect, suppose that it works, but I have doubts there but I see. JRL has a queue item there as well. For like, how do you know you want to .union() the keys? Like I guess it'd be kind of dumb to try to .union() the values because it's not tdeduplicated. But like, it's not clear to me that when you pass a built-in map to intersection or union that you want the keys anyway. So I'm inclined to not want an ad hoc symbol protocol here just to prevent the foot gun. Like, what I feel like what happened is this protocol probably ends up becoming just an incantation that everybody needs to follow and copy paste along if they want their set thing to work for intersection because like people aren't going to be actually calling symbol dot set has, right? Like, you're still going to have a public API method called .has that you expect people to use, except you also now have to alias it to setHas if you wanted it to work for the set methods. That doesn't seem so great to me like, that's an incantation that doesn't seem serve anything if the main motivation is to prevent the map foot gun? and if the main motivation is to prevent the map foot gun, I don't have a great alternative, like I see the problem, but I guess I'm with more with here that I'm not really convinced that how big would problem it is.

KG: The main motivation is to prevent foot guns like Map, yes. And I agree that it doesn't necessarily make sense to be treating Map as an argument to intersection, so I would be totally fine with it not working at all. But I do think it's really quite a bad experience, a foot gun, if it only works sometimes. That's the thing I want to emphasize here because you will try it and it will work if you are unlucky and you will assume it does the thing that it does, and then it will stop working after you add a key to the map, and that's just a really bad experience. Like if it doesn't work, fine, if it works and has some particular behavior, which some people will inuit, and some people won't, well, the people who intuit different behavior will either not to use it or will use it and immediately, discover that it does a different thing than what they expect, and that's fine too. But having it work sometimes, it's just really a bad experience.

SYG: But that is does that does seem like an unavoidable fallout of the previous consensus of reach into the internal slap guts for the receiver, but use the public API for the argument. Like we could have a special carve out here, but if we do that, because we as a committee believed that this foot gun is so bad, I will prefer it to not be as general as this ad-hoc protocol presented here.

KG: This doesn't seem that bad in general to me, I guess.

SYG: well, but like, if you okay, but what do you think about the incantation issue that I raised that this will become something that you have to type and it's not going be clear what to do. Why you have to alias your has function?

KG: I think that very few people are in a position where they're implementing their own Set and having to add a specific symbol-named method for it to work. I think it's really not that weird.

SYG: That's okay, that's true. But this strikes me as more undermining the consensus of "we should use the public API on arguments" because I see your problem and I see the motivation for this problem as being. Well, it turns out, we actually want more consistency constraints on the public API which combined with string-based method names is really to communicate like that says, to me that like well, maybe we shouldn't actually do public API on the argument. Maybe we should always be minting special symbols because we expect the the authors of such classes to have the domain of knowledge and expertise and to look it up and to understand what the consistency requirements are for these symbols. And then install those symbols.

KG: Sorry to be clear when I say accessing public API was the thing we had consensus for, what I mean is only the like meta object protocol as opposed to internal slots. It's not that we got consensus specifically for using the existing string named methods. It's just that we got consensus for not using the internal slots, and exactly how to talk to the set if we are not going to use the internal slot was deliberately not discussed at the time again. I always had in mind symbols as the solution for that.

SYG: I see, thanks for that clarification. Then I read too much into the public before I yield to the rest of the queue. I think I want to reframe this question to committee as like in general, do we feel like using string-based string method names, is enough of a foot gun that we just ought to not do that for as a precedence, going forward. And we should be minting these special symbols as Kevin proposes here, so that they're a little bit more obscure so that they require some reading to understand the consistency requirements, or we should just go with the simpler thing of continuing to use string method names and all the cons that brings.

KG: So specifically, I wouldn't want this to set precedent for never using strings. I think strings are totally reasonable for options bags and things that are only intended to be consumed in a particular way. So Temporal.Calendar objects or whatever. It is specifically when you have things that can be consumed both by users in a particular way, as well as by APIs that expect specific properties to hold. And I think in those cases I would want to use symbols going forward, and we just don't have any of those right now.

SYG: Okay, I am done with my queue item.

MM: I have a lot to say on several sides of this. I want to begin by saying that I strongly agree with WH’s position and I will want to come back to that. But first with, in KG's position, that by the way I have a lot of sympathy for because I generally like to avoid runtime surprises and the principle that something that works at run time sometimes is worse than something that either always or never works I have tremendous sympathy for them. So, within KG's proposal, there was something specific that didn't understand. A small clarification on that. And I want to get back to the bigger issue. You had introduced a symbol.setHad as the thing to test, but the thing you always tell you have to check first is the size before you know whether you're even going to use the symbol.setHas. So I just you didn't mention a symbol.setSize. It just seems to me that the minimal version of your proposal would be that the only some symbol for this set testing purpose would be symbol dot set size because that's the only one that's Because that one is always needed, whichever way it goes.

KG: Yes, I think you are right that if we were only going to have one, symbol.setSize would be the natural one to have. I do think that we will always access all three for exactly the same reason as I've been talking about, which is that if you only access one or the other conditionally, then it might only conditionally work.

MM: But the thing is set size. You're always going to access the old Rest can remain strings and you get all of the features that you're looking.

KG: Yes, yes. That is true. It does mean that the user is required to have consistency properties between the string-named methods that are intended for consumption by users of the class that they don't necessarily want to have in this collection for the collection to work with intersection.

MM: Hold on. What that means. Is that collection doesn't satisfy the contract in the sense associated with the set protocol. And therefore, it simply shouldn't carry a method named by the symbol.setSize.

KG: Yes, it is true that having such a symbol means that a class can opt in to implementing the set protocol. and we could say that that means the class is making promises about its string-named methods. That is a thing we could do. I would be happier to not impose that burden on people implementing the set protocol to allow them to implement the protocol, but also have string named methods that do some other thing.

MM: that makes no sense to me the but since that's with within the, the side issue, let me, let me focus on the main issue which is why despite my sympathy for the integrity argument, I agree with WH which just what the JavaScript language is in general. And what the way people construct, let's forget language definitions for a moment and just talk about how people construct libraries, and what the people expect from libraries and one of the things that and I think this applies to all objects arnica scripting language. Well, I think this applies equally well to python but I I'm not as familiar which is that all the time. The programmer will say, well, this argument to this method should be a "foo" and what he means by should be a "foo" what they mean by should be a "foo" is a behavioral contract the list. And even with structural typing, that gives you no information about whether something is genuinely a "foo" even with something like nominal typing like Java. All, you know, is that it alleges It's a "foo" because it implements the protocol. But but, you know, in a scripting language, the one of threads about this, somebody came up with a very nice phrase for the position that we share, which is pre-emptive duck typing. Now, what? And what I took that at mean, is you just state as part of your API design that the users of your API need to understand that if they provide an object as an argument of a particular method, then a particular behavioral contract that argument should satisfy and if the argument doesn't satisfy that behavioral contract, then the method will misbehave. And, and the idea that it might misbehave in ways that sometimes work and might misbehave other times based on dynamic information. Once you're in the realm of behavioral contracts, that are violated as arguments to other methods that assume that behavioral contract that is inescapable problem. And I think that's really the, if I'm not what I understood, essence of WH criticism here. Is that the problem you're trying to solve a special case of is really a problem that the normal practice of JavaScript programming live? With pervasively and must live with grow basically.

KG: I agree that the normal practice of JavaScript programming does tend to live with this. On the other hand, I do think that it is quite unusual to have a case that is as bad as this, where there is another similar data structure that one might try use, that will fail in this particular "only sometimes" way. And certainly when I am writing programs I really do try to avoid making the interface in such a way that it will sometimes fail. It is, I agree, unavoidable in principle in full generality but I do think it's an annoying enough problem to be worth trying to reduce the scope of, even though it's not possible to avoid in full.

MM: So I agree with that, and I think the proposal that you've mentioned and that WH mentioned is to one I would go with anyway, which is for purposes of operators treat Maps as a set of their keys and their then the behavioral contract that you write down that you require of your arguments in the right down in the documentation that you say "this is the behavioral contract where you require of the arguments that happens by coincidence to be an oral contract that both map and set satisfied because of map keys". And and your index set a perfectly reasonable abstraction. However it's it happens not to satisfy a particular behavioral contract that's required of a particular argument of a particular API and that's also going to a pervasive inevitable, inescapable problem of normal JavaScript programming.

KG: Yes, it's true that this is a problem that comes up a lot, I grant that point.

MM: But if you added this symbol, in my opinion it would only be a justified answer if it were also a precedent about how we deal with this question when it comes up again. And given the pervasive general JavaScript practice, I think that should be the inescapable JavaScript practice should be staying closer to that.It should be the precedent we are trying to follow. And, and, and if you're trying to do a one-off four sets and Maps, I can understand the motivation for doing a one off because it's a unique problem. But then don't do it in a way that looks like a precedent for applying to other problems and well, and in fact, in my opinion here, the, the, the keys solution to set map is adequate.

KG: To be clear. I did intend this to set precedent going forward.

MM: Okay, so right. That's why I think I have to stay exactly in what I take to be the WH position. Is the precedent going forward? should reflect the inevitable fragility of other programmers, not language designers, using the language because that sets the expectations of everybody who's trying to invoke an API providing arguments to that API. If that's the pervasive, practice that all JavaScript programmers have to understand the language itself should have APIs that generally follow that.

KG: I actually have almost exactly the opposite position, which is that this is a thing that is currently painful in JavaScript, that you end up with this problem. You have things that might or might not implement a particular protocol and it's kind of hard to tell. And I think that this is something the language should help with. So, there is a stage 1 or 2 proposal for userland protocols from Michael, and I hope we someday bring it back to the committee. That will help alleviate this problem in user land. And I think this is a serious enough problem that we should try to alleviate it. I know it's impossible to avoid in principle but it's annoying enough, that there's a proposal for it and I think we should try to alleviate that pain when we can. We can't eliminate it but I see very little cost trying to reduce it.

WH: MM explained my position better than I could. I want to keep this feature simple. If we want to implement the size symbol as a marker, as MM suggested, that would be fine. But then the question becomes "should .union() check for the existence of that symbol or not"? So, alternative 3 is just adding additional complexity which is confusing. And the confusion is worse than some of the more esoteric user classes which it might reject.

KG: So, can you say more about why you think this is confusing?

WH: You'd be adding additional symbols like a simple.setHas, and then it becomes kind of like black magic as to what should have that symbol and whether Maps should have the symbol. Let's say that we do want Maps to work. If that’s the case then not only would we need a symbol.setHas, but we’d need a symbol for iteration through a map’s keys. It's just not worth the complexity.

KG: I regard that as a benefit of approach 3

WH: I regard this as a serious flaw.

KG: Okay, it's perhaps worth talking about Union for a second. Would you or Mark like to comment on whether you think keys would be the appropriate thing to use for Union?

WH: Yes, in my opinion. Yes.

KG: So if so if you pass an array to .union() it gets treated as a set of integers.

WH: Yes, because an array is not a set of unique keys.

KG: true. I mean, my hope is that it would fail. but it wouldn't throw if you just use .keys(). It would throw for intersection if you use keys in has, but not for Union.

WH: It will throw for intersection.

KG: My proposal for intersection would be that you get all three things unconditionally and ensure that the two methods are callable and then you only call the one that you actually need.

WH: Well, you then get into the problem which I raised earlier which is that you get a confusing jumble of different requirements for different methods such as union and intersection.

KG: Yes.

WH: That just causes user confusion, because then it becomes hard to remember which one requires what. If we're going to go with that tags API, all the methods should depend on the exactly the same tag — they should be all-or-nothing. Which is just like your previously stated all-or-nothing principle within an individual method. That principle should be the same across methods for the same reasons as stated before. I'm just applying the same argument.

KG: It doesn't feel the same because if you go down the code path at all with any value, you will encounter it working or not working as opposed to needing to pass - like, as long as you hit that line of code, it will either work or not, as opposed to needing it to have a specific value when you hit that line of code. If you write a program and you ensure every line executes, and you see that it works, you should be able to expect it to continue to work as you change the values. But if you don't actually hit every line it's not that surprising if the line that you didn't hit doesn't work. And the latter is what happens if .union and .intersection differ, which is I think meaningfully different from having it depend on giving it a specific method depending on the precise value. But I do take your point.

WH: “Every line executes” exposes the details of how methods are implemented to users. The method for union might call size, it might not, depending on how it’s implemented. Whether it does should not be visible to users.

KG: It's not really an engine optimization, if it has nothing to do, then you iterate and you are done. But yes.

PFC: I agree it's always going to be a problem of checking that a class that adheres a particular protocol actually meets the requirements of that protocol. But I think that there's not just one way to solve it. The way you solve it and the amount of energy that you expend on that solution, for example to make it a good experience for developers versus just saying "well, if your class doesn't meet the requirements, it's going to have weird behaviour", the solution that you pick depends on the values that you find important for what the language should be. And I think there's kind of a w3c-style "priority of constituencies" argument to be made here, where the needs of users go before the needs of website authors go before the needs of browser implementers go before the needs of spec writers, which go before theoretical purity, right? I think there is value in designing this protocol in such a way that the mistakes that website authors, programmers, make, that those mistakes are not nasty and hard to track down, and are not destructive and therefore cause problems for users. I think the latter is probably not so much a problem with this Set methods question, although it could be! I think there's a lot of value in designing the protocol in such a way that the mistakes are not nasty. And I do kind of agree with KG, that a method that works some of the time and then breaks depending on the input you give it, is nasty. And I think it's worth spending energy in language design, and maybe even in complexity that we otherwise wouldn't have, in order to avoid that, and serve the needs of website authors.

KG: I agree with that, well said.

JRL: I want to echo what MM said much better than I could. That this is just a category error. If you were to do a union or an intersection of a set with a map, what are the, what are the things you're trying to get from the map? Is it supposed to be the keys? Or is it supposed to be the values of the map? It might make sense that we choose keys for this particular case. But then we you've also brought up what do we do if you want to pass in union or intersection with an array? And in case, case, it's not keys, it's probably the values that you want. Unfortunately, here we just have an error that we can't reconcile with the language that we currently have. If we want to do something about it, the protocol case would work, but it seems unnecessarily complicated versus just designing this API to work with sets on sets. And that's the only thing that works correctly. If you pass something else, TypeScript tells you you did it wrong. I don't think we need to complicate it beyond that point.

KG: I feel pretty strongly that we should not assume users are using TypeScript. And while I would be quite happy to design this API in such a way that Sets are the only thing that ever worked, making Sets work all of the and Map work half of the time seems bad. Also, to be clear, we would be choosing to treat Maps as sets of keys.

JRL: On that topic, if we want to treat intersection with .keys(), why don't we switch Union to also work on keys?

KG: if we just get keys, then you have this problem where if you are passing an array, it gives you the indices of the array, which I think is quite strange. Although WH/MM points out that we could just possibly find out if we could get all three methods, the .has and .keys and throw if .has and .keys are not both callable and then it would throw for arrays, which I consider an acceptable behavior. So that's a thing we could do at the cost of two additional property access.

KG: And I do think that's the thing I would want to do if we do go with this option, option 2. If we decide that union should be consistent with intersection and that we should use `keys` and `has`, then I would want union and every other method to access all three properties and ensure that the keys and has methods are callable even if union is never actually going to call them.

MM: so, our first of all I want to respond to the array point. Which is we happened to get lucky here. And that's an inbounds argument. Because your argument about Maps is that we happen to be unlucky there. The luck is that the first step of intersection is going to be to ask the size. Anyway, and arrays, don't have a size, so no additional cost with no additional gets: it'll immediately fail on arrays. You don't have to do anything special. Now, the thing I really want to talk about is: in order to understand the nature of the dilemma I wanted to transpose your argument to a discussion of the be the specification of array.prototype.slice.call. Well, and it's a compare() function. So the compare function there is a behavioral contract that's written down in the spec. There's no there's no feasible way for the sort method to check that the compar()e function actually satisfies that behavioral contract. We just proceeds assuming that it does. The the extent of misbehavior, if it doesn't, which is a fine thing to do on the misbehavior, think that's besides the current point. And we also have compare functions that are really very plausible. That work a lot of the time and fail occasionally, and the biggest one that I've actually seen in production code, is compare(a, b) returning a-b. that seems to work, except that one of the requirements is that the function be reflexive and a-b is not reflexive on NaN. So you give it a raise of numbers over and over again, it always works better than the array contains, and it stops working. So one of the things that we could have done when we were first specifying this, if we had, if we were specifying it using the language elements, that we now have available is, we could say what, you must tag the compare function as implementing. Um, whatever the name is for the behavioral contract for the, you know, it's a, it's"foo", it's a full order or rank order, whatever you want to name it. And then if you provided a function that's not tagged, then you get an error and that prevents all sorts of accidents where you provided a function that wasn't meant to be a compare function. It doesn't solve all problems. Then if you if you provide it, the subtract function thinking it implemented, the behavioral contract. you still have the irreducible problem, but if you just pass it what happens to be a subtract function because you that you found elsewhere because you think it should work, it will almost always work and then fail, occasionally. So does that transposition of the argument help?

KG: No, and I have two particular concerns with it. So the first is that I do think that this always needs to be a cost-benefit thing and the cost of making the user tag every compare function for it to work with sort is quite a lot higher because users write new compare functions all the time, whereas it is relatively unusual to write a new thing that is supposed to work when you pass it to set.prototype.intersection. That second thing happens, but rarely. And so this fact that intersection works in this particular way would be a thing that few people would need to learn about, which is why I say that I think this is a very low cost. It seems to me to be a very low cost solution for something that when you encounter is quite painful. So the first point is just about the costs and benefits. The second point is that the more fundamental problem with the compare function, the reason it doesn't work, the reason a-b doesn't work, it's fundamentally that the user just doesn't understand that that is not a consistent comparison function. Whereas if you pass a class that was not designed to be used with intersection, it's not that you don't understand - like you don't need to know whether or not the class was designed to be used with intersection, the class itself needs to know that. Now it's possible you could write your own class and not understand the relationships. but again, I think that's much less likely. So I don't think - while I agree that there is some similarity with the weird undefined behavior in sort, I don't think the case is that similar.

USA: By the way, there's two minutes left.

KG: Do we have something immediately after this or can I go a little longer. I would really like to get through this.

USA: Yeah we can we can extend this a couple a couple minutes.

BSH: Yeah, I just had a slightly different way of looking at what WH and and MM are saying, I really think what they're saying really that it's pretty clear when you look at the design that map and set were intended to have this overlapping API, but the part that overlaps is the three method is size hasn't keys, symbol.iterator always behave differently and that's not I think the original intent was that the Set API is size hasn't keys. And I understand like as a user, I would tend to think that the symbol.iterator was that but I think that's just wasn't part of the intended original contract. And if you think of it that way, then it all kind of makes sense that you would just use those to build. And we just need to document that. Hey, if you're trying to create an a thing that acts like a set, these are the three things that it needs to have. And the iterator is a separate issue. It's up to you if you want that. But that's not part of the official contract exactly. That's what I'm getting.

WH: Sets and Maps were built specifically to have compatible keys, has, and size APIs. That was the intent when adding Maps and Sets to the language. I was part of those discussions.

SYG: Let me try to characterize the disagreement to see if folks agree. I'm reading that the crux of the disagreement as being… That's weird. Okay, it seems somewhat uncontroversial that it would that we should have some way to communicate a behavioral contract. The pervasive status quo way is this duck typing via string-keyed methods. KG's proposal does not avoid the fundamental problem, but it tries to make it a little harder to get wrong by default and thus avoiding some foot guns by using symbols, and the disagreement is that MM and WH do not think that this particular case meets the bar to deviate from the established way to communicate the behavioral contract, which is just a naive duck typing. Is that a fair characterization of the concern?

KG: Sounds right to me.

SYG: Okay. In that case. For WH, KG and MM is there appetite to explore the space of how to communicate stronger behavioral contarct, you have listed some here, you have listed one of something that's analogous to using string-based string name methods except have symbol named methods. That wasn't really feedback that we heard today, we could go to the normal way of just having some special symbol based at that station that I meet some. I say, I meet some behavioral contract. Like, from first principles, I don't really disagree with the desire or even the possible solution here. But the thing that puts me off for this particular proposal is that I just don't see how general the problem is. Like, yes, this particular case is bad, but do we just do what the new thing that you hope is precedent setting for this particular thing and future things that we think meet some bar nd otherwise fall back to the default method of using string named methods. Like I would like a clear bigger picture here.

KG: I mean, my preference would be that we only have behavioral contracts be promised through symbols.

SYG: but that's not the case. That's not that the state of the world today. Like people already assumed contracts are promised by just methods.

KG: There is no state of the world today. There is nothing in the standard library that consumes built-ins except regexes, and those take symbols, and all agree that's a mess.

SYG: MM example about sort you consider not in scope because that's that's a function, not built-in. Yes, it's that's no class. Yeah.

WH: There are plenty of things which test for `then` methods. It's quite common.

KG: I consider that one to be one of the largest mistakes we have ever made.

MM: But sure this this is why the, the pre-emptive duck typing point really, I think the essence of you, my view of this is that it's not about testing, It's about assuming that and that's where in. And once again, the compare function, I think is a good microcosm of that is assumes that it gets a compare function that behaves that satisfies the behavioral contract. it's documented and is not enforced, can't be enforced, and programmers providing one have to understand what the requirements are, and providing something that fits into that argument. I think that with regard to SYG's question: yes, I'm interested in exploring it, but I'm not interested in exploring a solution that not in general add value to the way people express abstractions in creating user land code. I mean, there's there's you know, zillions of times more user land code then there is surface area of the language itself and the problem that KG is trying to solve here is a problem that all of that userland code has been living with. In particular we can argue about how painful it is to live with it with no better tools than they have. But to the degree to, which you think that it is painful proposing better solutions for all of them to use and then exploring also whether they whether they would also help the language or exploring the two at the same time. I'm sure I'm interested in that exploration, but I consider that to be compared to what we're talking about now, long-term research. And one of the things that would have to happen is for it to get really significant uptake as a pattern for expressing intent by JavaScript programmers, or for us to have reason to believe it will get such uptake before consider it to be something we can lean on as the new established practice.

KG: I mean, to be clear lots of userland code does use symbols in exactly this way, because like, they are the obviously correct way of solving this problem. If you would like to solve this problem, you say that the interface for this class is declared in terms of symbols and you can have those symbols and by having them, you are making a promise about the relationship with those symbol-named methods. And that doesn't interfere with the rest of your string-named public API. That's like a normal thing to do. It's not like I'm inventing this.

MM: So I would be interested in how pervasive that is,if that's actually, even if it's a minority, much more common than I think it is, I would consider that to be evidence for your position.

KG: Well, it's not very common but that's mostly because language doesn't provide any particular affordances for it. But like, "it is awkward to write in userland" is not a good reason not to do it in the built-ins.

MM: So there's two open questions here which is how hard is it to express and that which is you can think of that as the supply side and then there's demand side, which is how much pain it ist alleviating, how much pain is actually perceived? What is the demand for something, too aggressive and my sense is that, that perceived pain for this problem in particular was very low.

KG: I think that the problem of wanting people to be able to implement an interface without needing to have a particular set of string named methods is not that rare of a problem, which is why we have an entire proposal about it, but we should move on I suppose.

WH: An assertion was made that symbols would solve this problem in general. They would not. They would introduce additional problems — we've been through this before in the committee a few times. So it's just exchanging one problem for a different set of problems.

KG: Can you refresh my memory? What is the problem?

WH: The problem is that interfaces evolve.

KG: And using string named methods avoids that?

WH: No, you get into various namespace and evolution issues. It opens a Pandora's box that I don't want to digress into the details of right now.

KG: Sure. So I think a lot of our disagreement comes down to how costly you think using Symbols is, and it sounds like you think there is a cost to using Symbols that I was not previously aware of. So if you would be willing to write something up about this and post it on the issue tracker, I would very much like to read it. I don't think I can evaluate these positions without understanding the cost of this.

WH: Here symbols would just add unnecessary complexity and complicate the user experience rather than helping.

KG: I think that's a point that we disagree on.

WH: Yeah, speaking concretely about this API, my previous comment was more about the general desire to use symbols to tag everything or move the language in the direction of using symbols as APIs. There be dragons, but those are two different concerns.

KG: That's fair. I just disagree about the relative costs. So your second concern about the dragons being inherent here, I think could move me towards agreeing with your overall position even while still disagreeing about the first point. So if there's more you can say about it at a later date, I would be very interested. But we're running out of time.

RBN: I can't recall if I brought this up the last time this was discussed in committee, but one alternative I could consider if we're back up for a moment. One of the biggest concerns I have about things like adding a symbol.setHas and symbol.setSize is the fact that you're trying to take two different symbol named methods and assume that they're both implemented intentionally to be this to work in cookie store in concert with each other, which hopefully works, but it does become a bit more fragile. And I wonder if something like a symbol.asSet or something like that, that returns an object that matches the expected interface that can be used with set. One example we have is simple data later today. They call that it returns something that has a specific API shape of { next, return?, throw? }, a symbol that .asSset could return a .size getter and a .has method and keys or simulator or wherever you wanted to use that, something like a set, could potentially just return. This just like a built-in iterator, just returns this and it does kind of require you to have a more broader selection of properties implemented to say that you match this set, or at least the minimum that you need to actually make that work. But it avoids like cluttering symbol with a bunch of very large simple method names, like we have had to deal with or regex.

KG: okay, so let me step back. I agree this would solve the problem. It seems to me to be significantly more complicated than just having a couple of symbol-named methods. The only reason that iterator needs to return a new object is that the iterator needs to maintain state. So the next method does different things when you call it, and you can get a fresh iterator, so it needs to be a new thing every time so you can't just have a next method on the collection itself. The facts that these things need to be related to each other, I don't think it is any easier to get wrong when there is a symbol.setHas an a symbol.setSize than if there is a symbol.asSet that has string-named methods; that seems equivalent difficulty to me. And as to the point about not wanting to put a bunch of new stuff on symbol, I strongly agree, I definitely do not want to ever add any class-specific methods to symbol ever again, and it is ridiculous that we have already done so much, but that particular problem I think is one that I was not going to bring up unless we actually agreed to use Symbols, which we haven't.

RBN: So I think this is in reply to me [from the queue], MM hasn't a chance to reply yet but he's asking about symbol names rather than string names. It doesn't matter. As long as it is unique enough that it's less likely to be stepped on by code that doesn't doesn't intend to mean the same thing you're expecting it to mean. When you say something like symbol. iterator, your expectation. Is that when call this, I'm getting exactly this thing. That's it. If you're implementing that method and not returning a symbol iterator, you're intentionally doing something wrong, whereas, you could just as easily have an as set method on an object that has nothing to do with sets that could return something that Is not a center that worked with this API and not have intended like that.

KG: Yes. And I think that's the benefit of symbols over strings in general, is that because symbols are unique the choice to implement them *is* a choice, as opposed to something that can happen by accident.

KG: Okay, I think we have gone through the queue. I haven't had a chance to read the chat to see if other people have strong opinions about this, but given MM and WH's strongly expressed positions, and the relative lack of support for my position, I guess I am going to go with option two, unfortunately. I'm sad about this, but I would like to have set methods. And to be concrete, the thing that I plan to do is make all of the Set methods in this proposal eagerly access the .size getter, the .has property the .keys property, and then check that the .has property is callable and the .keys property is callable and call ToNumber on the size property, and then having done that to implement the remainder of the algorithm using those particular things. And in the case of union, it will have text that checks .has is callable even though it will never in fact call it, but at least this ensures that Union and intersection require the same interface even if not necessarily the same behavior for that interface. Would that satisfy everyone here and be a way to move on?

MM: that would satisfy me.

WH: Yeah, that would be a solution to the problem.

KG: And then array is rejected, instead of giving you a set of integer keys. And we could never add `.has` to arrays, but I guess we weren't planning to. We have .includes.

MM: It's the size that causes the array to fail.

KG: Or size, yes. Actually, the thing that I said was that it would access the size property and that it would call ToNumber on the result. Are you proposing that I would do something different? Because accessing size on an array and calling ToNumber gives you 0. Or, wait, ToNumber gives you NaN, it's ToInteger that gives you 0.

MM: okay, I admit, I didn't - I guess that seems like a good point to fail, if you get NaN.

KG: Okay. I can additionally check that the size property does not give you NaN after calling ToNumber or I can explicitly guard against undefined or whatever.

JHD: so, it seems pretty useful to be able - I mean, an array conceptually. I mean, it could have duplicates, but an array is pretty much the set conceptually in a lot of ways. And I feel like a lot of users are going to want to be able to do that. And obviously, they could wrap the array in new set and it would work. But like, why would we want to force them to do that?

WH: Yes. An array is not an associative container.

JHD: I believe that the mental model of most JavaScript developers does not match the way you're describing said, and that they would consider the thing that I can pass into new set to be sufficiently set like that, they would expect to pass it in to set comparing methods.

WH: So then you would also want intersection to work with arrays?

JHD: Yes, I would expect all of the set methods to working with an array because I can pass it directly into new set, so it is sufficiently set like that's what's required.

WH: That would be problematic because it would asymptotically slow down intersection.

KG: either deoptimizing intersection, which I am unwilling to do, or having a fallback for when it's not the interface that I have described about these to call those things in this property - you could say, if it fails to meet this interface, then it will coerced to a set by iterating through it.

JHD: that seems highly usable to me.

MM: Yeah I strongly disagree with JHD. I think that having this goes back to KG's earlier criteria. The solution that KG just proposed as number 2 two here with the enhancement that we talked about when given an array will always reliably fail. It doesn't have this dilemma working.

KG: I mean, the fallback that I described, i.e. if the interface is not implemented then iterating and constructing a set, will always reliably succeed. So it also doesn't have that problem. It does have the problem of deoptimization when the receiver is for example empty, but the solution that I find acceptable, here is for, is that we say that intersection takes a behavioral object with this contract arrays, if it doesn't satisfy that contract reliably fail. And if you want to pass an array, then you wrap it with the set.

MM: Yes. Some people will be surprised the first time that happens but it's always surprised. It's not a sometimes works surprise.

JHD: When with that, fallback MM, when would it not work to pass an array? It would just be slow but it would work perfectly in every situation I'm saying.

MM: It's bad API design? That if you want to provide the contents of the array as an argument to the set operations, you should turn it into set yourself.

JHD: So MM, you just presented a strong argument that you liked when you were explaining the WH position that the API design that is prevalent in JavaScript is the one we should be matching and an API design where? Like I just I don't think those things are mesh. Forcing me to do extra boilerplate, that's the same sort of logic of saying well I should coerce my things into the expected types and JavaScript functions shouldn't do ToNumber, ToString and so forth their inputs, but they all do that. Okay, okay, so maybe they shouldn't but your argument MM was that should is irrelevant. They do. Therefore, that is what we should stick with.

MM: Okay, I acknowledge that say that's a sensible all around answer. So, I would be okay with his fall back.

KG:I do kind of agree with JHD, but I am leaning towards not having the fallback for a very specific reason, namely that passing an array has weirdly different performance characteristics than passing a Set. If you pass a Set and if you do emptySet.intersection(argument), that right now is guaranteed to exit effectively instantly, no matter how large the Set that you pass as an argument is, whereas if you passed an array and then coerced the array into a Set by iterating it, it could potentially take a very long time, however long it takes to iterate the array, and I would prefer to make that particular performance difference explicit by requiring the user to explicitly do the expensive step, which is iterating the array.

JHD: I assume your concern is the same if it's a one item receiver because zero is easy to special case.

KG: yes. One or two or any small number.

JHD: I hear that concern and it's valid, but I also don't care much about performance characteristics given that if you pass array and you have to fall back, you get identical performance characteristics, if you wrap it, In a set and then pass that in, which is what everyone's going to do. So, like in that use case, the performance characteristics are never going to be better without the fall back.

WH: That's not accurate if you do more than one set operation.

KG: I'm gonna do the thing that said I'm probably not going to have a fallback, although I see JHD's point. I think that having to wrap with `new Set` is not so bad, even though it's mildly annoying; the cost of that is a mild annoyance worth surfacing the meaningful difference in performance. And string-named properties, while I really don't like it, I'm willing to do so that this can go forward and everyone will be able to live with that.

### Conclusion

- Going with option 2
- In a future meeting will present spec text and strings stuff.
