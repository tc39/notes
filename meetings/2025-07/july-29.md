# 109th TC39 Meeting

Day Two—29 July 2025

**Attendees:**

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Waldemar Horwat        | WH           | Invited Expert     |
| Chris de Almeida       | CDA          | IBM                |
| Jesse Alama            | JMN          | Igalia             |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Michael Saboff         | MLS          | Observer           |
| J. S. Choi             | JSC          | Invited Expert     |
| Daniel Minor           | DLM          | Mozilla            |
| Samina Husain          | SHN          | Ecma International |
| Aki Rose Braun         | AKI          | Ecma International |
| Shane F Carr           | SFC          | Google             |
| Olivier Flückiger      | OFR          | Google             |
| Jordan Harband         | JHD          | HeroDevs           |
| Zbyszek Tenerowicz     | ZTZ          | Consensys          |
| Eemeli Aro             | EAO          | Mozilla            |
| Tab Atkins-Bittner     | TAB          | Google             |
| Istvan Sebestyen       | IS           | Ecma International |
| Sergey Rubanov         | SRV          | Invited Expert     |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |

## How to make thenables safer?

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1_RCnI7dzyA1COgi_Ib7GkmHioV1nVSEMmZvy0bvJ8Kk/edit?slide=id.p#slide=id.p)

MAG: So I’m here to talk about thenables again. So basically, this is not a particularly complicated conversation here. Because I come to the committee for your wisdom. I wish for you to bestow upon me what you think we should pursue. Because I’m not going to be able to decide which is the better option here myself. And I know people have strong opinions. So let’s try to see what is the direction to pursue.

MAG: So, a reminder of what we’re talking about. So this is object with a then property. An object with a "then" property is considered to be a thenables, and treated specially in promise resolution code. The problem is that it’s too easy for security issues to happen. We walk that whole prototype chain to look for then, and there is code (particularly in browsers) that looks to resolve a promise that doesn’t realize it could actually be executing synchronous user code at that time. So I had in my previous presentation a list of security bugs and in the time since I presented that last, at least in Firefox, we have had 1 ½ more since then. So this is a recurring problem. So I would like to make some forward progress in trying to see if there is anything we can do.

MAG: All right. So, originally, you know, I didn’t want to come with any particular concrete proposal, but I also didn’t want to come with nothing. So an idea that I brought was the idea of having a set of answers. So one being, object prototype becomes exotic and excludes "then" properties, this helps for sure with the problems we have. It would be nicer if it would address more prototypes than just object prototypes. You can make some option for promises to not respect thenables, so if you pass thenables it will not act like a Promise, that we can potentially expose that for HTML and put it into the web code.

MAG: The third option I brought was the idea of having a new internal slot, which we call `[[InternalProto]]`. We then change the look up for the then property inside of resolution code to use some sort of new thing which we call, you know, get noninternal specification abstract operation, which walks the protocol change, but stops when it has the prototype. The idea here being anything that’s basically defined by the system would have the internal proto slot, so if you put a then on that it just doesn’t work as a thenables if you have an object that has that as its prototype. In my mind, this is one of the less invasive choices and would probably hit most user expectations. Mostly because nobody, we don’t have a lot of evidence of a lot of people putting "then"s on standard prototypes and I presented a little bit of them entry from last time, and the numbers are relatively low, not zero, although, I have since gotten telemetry for object prototype, and to a first approximation there are zero uses of then on object prototype. So when we do see it, probably someone is playing around with trying to write an exploit.

MAG: So after I presented, MAH opened issue three on the repo and opened up a couple things. His analysis is good, I would encourage you to take the time to read it. I am going to summarize very briefly and badly. Number one he points out I missed a look up. We also lookup the constructor property. So basically while I kept blathering on them as the property. Constructor is actually in a similar boat. We do look up the constructor property. If you were to change constructor to a get, you would be in the same boat. And then he suggests that, you know, what if we could solve a larger scope of problem which is that, you know, there are other consumers of JavaScript who went to be able to resolve promises safely.

MAG: And the end idea here being something along the lines of what if you were resolving a promise it would be synchronous if they had no dangerous thenables lookups, but if does have to look up something, then we delay it by one microtick / microtask turn. And then, that kind of solves a lot of our problems from the browser engineering perspective.

MAG: Because it means that you resolve a promise and, ah-hah, if it could do something dangerous then the promise is just not resolved a new job is entered and it will resolve later. And for the most part this is going to be acceptable. We think. But, well that was the basic thrust, starts the resolve process, and it stops the current process and instead enqueue a new job. This is kind of a familiar thing. So back when they were doing early work on promises, we actually, or I shouldn’t say we, DD actually added a microtask turn to solve a very similar kind of problem, like 11 years ago. However, the faster microtasks proposal from Justin is trying to get rid of this tick in the general case. So we’re kind of walking across purposes here, adding and subtracting ticks.

MAG: After I wrote these slides, apparently they my the rounds on Bluesky, the social network I have not signed up for. And we actually got a feedback early from Rich (Harris), creator of Svelte. This could break the way they have done cleverness. They want to have a reactive framework to handle `await`. They did, hey, what if "then" is a getter. If `then` is a getter they can hook it up to their reactivity system properly. In my case, if we were to add the safe promise clause and use it everywhere, it would break their code. Now, we can still pursue this, and Justin pointed it out in the issue, we can only deploy this for internal algorithms and HTML and put it through web and things like that. It is less general, but given we have a clear consisting consumer of the same look up, we probably can’t do this willy-nilly here. It’s the best we can do without going back to just saying, ah, this only applies to internal prototypes or something like that.

MAG: Now, the actual ask here is basically what does the committee think about the extra ticks approach? And do you prefer it over going to `[[InternalProto]]` story. Myself, I kind of prefer the `[[InternalProto]]` story. But there are polyfill issues there. And then there is the awkward thing in order to make the polyfillable, you probably went to ability to set the intern is slot, that’s very awkward to me. Are don’t know what that really looks like in way that makes any sense to any JavaScript programmer other than the three people who will polyfill this. So that’s the end of my presentation. And now, we can really go to the queue and have a discussion.

USA: All right. Thank you. First in the queue we have Kevin.

KG: Yeah so you mentioned the, that those two observable lookups, there is the dot constructor and then the dot then. I want to mention that I think that the `.constructor` is probably fixable separately so that look up is only performed for things which pass the `IsPromise` check. The point of that part of the spec is to have a fast path when something passes `IsPromise` and its `.constructor` is the intrinsic Promise. I think we can probably change that to, something passes `IsPromise` and its `__proto__` is the intrinsic `Promise`.prototype. But because it can’t be a proxy if it passes the `IsPromise` check, this would mean that there’s no observable steps there. I think that probably is web compat; can’t guarantee it, but it is probably web compat and it gets rid of that particular observable look up. It doesn’t do anything about `.then`, that we still need to address. But yeah.

MAG: Okay. That’s good to hear. That’s a nice simplification of the problem space.

USA: Right. Next to MM. Who says prefer extra tick if possible, end of message.

MAH: Sorry. I want to reply to Kevin’s analysis. So looking at this, I agree constructor is easier to deal with than "then".

USA: All right, going on to the queue then.

MAG: Can you repeat what MM said, I didn’t hear what MM’s message was and I don’t have the queue open right now.

MM: I can say it. You said "do you prefer the extra tick approach". And I just, yeah, since you were asking for reactions, I just stated that I prefer the extra tick approach if it is possible and sounds like there is a lot of complexity around the idea that if, that it is possible. But you sounded very hopeful that it is possible.

MAG: Okay. Thank you. I just hadn’t quite heard the repetition of it from the queue.

USA: The next up, well, we have reply by WH.

WH: I thought I just heard during the presentation that people are deliberately using getters on `then` in existing frameworks. So how is the extra tick approach possible?

MAG: So this is new, new information that they are adding thenables. I get the impression from Svelte this is something they added very, very recently. But we could conceivably do the delay in other cases. So, for example, the specific case that Svelte cares about is when you await a promise. So we could divide the behavior between like doing promise resolve and await. Similarly, we could cut it and say that we have extra ticks when you do a user-defined look up up to the prototype, or sorry, we could do a hybrid approach, where essentially we say we add extra ticks when you hit internal prototypes and define that some way. Like, there, you could conceivably keep chasing the idea of extra ticks, but we would want to try to not break what Svelte has essentially just built their dependency, they do a synchronous look up when they await something. I think that is possible, but it does introduce complexity and challenge. You know, MM’s preference is the extra ticks, but I think it becomes a little bit more of a delicate design thing. And the end result might still be kind of cludgy and ugly. But my general thing is I only really care about standard prototypes because those are the ones that ends up causing problems for us. If you—you know, any random class having a `then` doesn’t really cause any problems on the web platform. What causes problems is where it’s, some specification defined type becomes a thenables and you didn’t expect that. And it becomes a thenables almost always because someone put "then" on object prototype. And that’s where it gets very awkward. And, you know, we have to, right now we have to really sort of capture this thing and sort of review unfortunately, and the web platform has extra tests in order to catch this case, like there is special readable stream tests like hey, if someone does this and you have a readable stream. It could be kind of nice if we could get rid of this whole class of problem and be able to as a web platform engineer, say if you resolve a Promise with a type that is specification provided type, you know it is not going to execute synchronous code, because nobody can add it put a then on it or it has no practical effect.

WH: Okay. So what I’m hearing is that the pure extra ticks approach does not work whereas the pure “not recognize thenables on built-ins” approach might work. Given that, I would rather work on not looking up thenables on built-in prototypes.

MAG: Me too.

USA: There’s a number of replies that have stacked up on the queue. So I do recommend going to it quicker if possible. Next we have Matthew.

MAH: Yeah. Really quick. So the feedback from Svelte makes it seems an implicit extra tick on the resolve operation is not compatible. However, we can still imagine an extra tick for explicit `Promise.resolve` being called. But I don’t consider that a sufficient defensive mechanism, because it would only apply to explicit places where people call from `is.resolve`, which is never, unless people start being defensive. That gets to another point I have later on the queue. So—

USA: All right. Next on the queue we have Kevin.

KG: Yeah. We talked about, Svelte only just started doing this, but I bet other people are doing this. I’m confident we can’t do the extra ticks in generality.

USA: All right. Moving on. Next we have JRL.

JRL: Okay. So to explain the extra ticks solution here fully. The implication here is that every time you `Promise.resolve` with an object or `new Promise` and use that resolve function with an object, or call `.then` and then return an object in the callback, you’re going to incur an extra tick. I do not consider this acceptable, because it essentially undoes all of the work that we did for faster native await. The fact is that promises are mostly single reads. You create one promise and await it a single time in one location. We are making it so creating that promise with all objects is now one tick slower. Which means we’re creating the promise requires one tick and reading the promise requires another tick. That means we have two ticks to native await the value, undoing the work that we did. There is a potential solution we could do here. We actually look at if there is a then property in the prototype chain, or in the prototype chain we have a proxy, and only wait in these cases. But in discussion with MAH and MM, that wasn’t acceptable, because it gives you a way to detect if something is actually wrapped in a proxy. So there is no way to actually tell if anywhere in your prototype chain, safely tell, if there is a dot then property, so we need to defer execution before the access. So the implication here, all objects, every time you create a promise and pass in an object, it all gets slower. That’s an extremely common use case. Not every promise is going to be holding a primitive. I don’t think making all of this code slower is a good solution to any of this. I would much rather us pursue hardening the very few spots in our spec that require actual protection and only make those slower because there are security vulnerabilities.

USA: All right. If you want to respond to that.

RGN: I’d like to object to the characterization of extra ticks as slower. That’s not mandated by the specification. The concept of a tick comes into play immediately after the stack gets drained. And what happens now versus immediately before any asynchronous IO can happen is not fundamentally slower, although implementation choices in some cases can make it so. And when counting ticks, it’s not fundamentally a performance consideration, it is about observable sequencing. And with promises we tend to discourage anything that relies on observable sequencing. So I don’t think this ought to rule anything out. And in particular, I would like to object to the motivation of keeping tick counts as low as possible. I think we, instead, should value more highly that code is as predictable as possible.

JRL: Why did we do all of the work for native promise await? Or trying to combat bluebird library, which was considerably faster for IO ops in node. It's because bluebird doesn’t have all of these extra ticks. Like there are so many promises, millions of promises created in an application. If we make them all slower, the application will be slower. I absolutely disagree. I think the promises performance is as important as the ordering. And the ordering of the promise resolution is still guaranteed.

USA: Next on the queue, a reply by KG.

KG: This is a response to RGN. It is true that a smart engine could make these things just as fast. I think it is easy to underestimate just how much work a sufficiently smart engine would have to undergo to do that. And they’re just not that smart. And I don’t think they are going to be. I don’t think we should reason about, you know, just because it is possible in principle that a sufficiently heroic amount of work could make this just as fast, we don’t have to care about performance. The heroic work has not been done and is not going to be done. Stack switching is always expensive without work that no one shows any signs of undertaking. I don’t think we should punt to sufficiently smart engines here. They're just not.

RGN: To be clear, that’s not what I’m doing. And a lot of the performance implications, the slowdowns that we see now, aren’t due to stack switching. They are due to the creation of new promises and new promise revolvers. And that could totally be eliminated for the scenarios where nothing is actually listening.

KG: I agree that a sufficiently smart engine could make these things equally performant. My thesis they haven’t and aren’t going to. We shouldn’t reason like we’re in the world where they have.

RGN: Sure.

USA: Let’s move on, oh, no, we have another reply to this topic. JSL you are next.

JSL: Yeah, just want to, you know, just—just agree with the comments that adding these additional ticks, yes, the—the predictable behavior is good. But these things do have, it doesn’t matter how much, adding ticks does have a very real performance cost in Ag oh, aggregate and node and run times. We have to be really careful here. The prior work that was done to optimize the ticks out of await yielded major, major performance improvements in ecosystem. And regressing on this a little bit is going to cause a lot of headache.

USA: Thanks for that. Sorry. I didn’t see that in the message. We have three more topics left and under 10 minutes. So this is mostly just discussion, but so—I’d like, I’d like to issue guys to go faster. Next we have Matthew.

MAH: Right. So if you could go back to your proposed solutions. I believe that the number two, if I remember, can be somewhat generalized and merged with my suggestion which is to basically have an operation, an internal operation that says a safe promise resolve or gate safe promise capability that host could use or spec places could use where basically if they encounter an object or place that is potentially unsafe and that would trigger the code, it would delay by an extra tick. That would require all of the places that basically handle user objects in the spec and in the host to start using these instead of the regular promise operations. But that, that would be one possibility. I am. I would be sad about that because that—that basically requires defensive programming on the part of the host and the spec. And that would also not give us something that user would be able to do easily. In which case, I would also like us to consider something like `Promise.is` promise so that a similar difference in programming can be done by user libraries. And `Promise.isPromise` would simply check if the branding of the promise, of the object see if it is a native promise.

USA: Okay.

KG: Okay. I think that that probably does solve the problem in our sense. But we mostly care about built in objects which are not expected to have then properties. These are spec algorithms that create an object themselves and then resolve a Promise with that object. It seems like it would be a shame to make that operation slower for all of the spec stuff just because we have to be defensive against the possibility that someone has put `.then` on `Object.prototype`. We are not handling a user object. We are handling a spec object, but the spec object inherits from something to user could have touched. I don’t love that solution.

MAH: Yeah. So my understanding is that there is three different, at least two different cases. One is the spec or the host creates an object and uses it internally through the promise machinery and is not expecting to have any interference through the bit in prototypes and the other one is that the spec is handling some user provided object, but you’re saying in those cases it would be rare for, for the spec to expect not reentrance in the first place.

KG: My understanding is that the main concern of this proposal is the first case, not the second case.

MAH: Yeah. I’m—I am—encountered a lot of cases in the second case. So that’s, yeah. In userland.

MAG: Yeah. That’s a little bit of a divergence, you and I, we’re not solving 100% the same problem, I’m more focused on the first case, which are newborn objects that happen to inherit from object prototype.

USA: Next we have a new topic by KG.

KG: Yeah. So I’m coming around to your `[[InternalProto]]` suggestion. There are definitely details that need to be worked out. But before we go down this route, this would be adding an extra bit to every object. How do we feel about that, or how do engines feel about that, I should say? That seems naively like it would be kind of expensive.

MAG: I think. I can’t be sure right now, because it is not that costly to store. And even if we wanted it to be like extremely low cost lookup, I think we could accomplish it with relative ease. And I, of course, say this knowing full well that I could be bitten when I come to implement this. But I do think it is implementable at a sufficiently low cost that I would be willing to go ahead and try to build it.

KG: Okay. I guess, given all of the foregoing discussion, that would be my preferred resolution. I think we talked about how to go about making this opt-in for objects, my preference would be to have a way of creating an object that is of this kind. Not a way of changing an arbitrary object to have this slot. Like just an `Object.createNonThennable` or something. And then, not have to worry about someone setting this bit on an existing object that I handed them, that sort of thing. Also, there’s the question of does this pierce proxies; I think probably it would. Which means that, you know, you could proxy one of these things in the prototype chain, and because you would be checking this bit before you did any operation on the proxy, you would still avoid user code. But—yeah. Details would still need to be worked out.

USA: We’re almost on time. But let’s try to get through the rest of the—or, well, no, I don’t think we can get to the queue, unfortunately, would you like a continuation? Or do you think this is sufficient?

MAG: I think if we could have a continuation, I would try to make it—yeah, we should try to have a continuation if possible.

USA: For like how long? Do you think?

CDA: I’ll work it out with them as well.

USA: Okay. Great. Let’s continue with the queue then. Next we have Keith.

KM: Sorry, are we continuing now or are we just—

USA: Good question. Yeah. Let’s schedule it for later then because we the fourth day. And today we have a full day planned. Great. I’ll capture the queue then unless somebody already has. And all right.

MAG: Thanks, everyone.

### Speaker's Summary of Key Points

* While some delegates are in favour of extra ticks, some delegates object strenuously particularly for performance reasons. We have multiple delegates indicating performance of extra ticks may be unacceptable.
* There’s some discussion about the “constructor property”—it is claimed that a spec refactoring can likely remove the constructor check.
* In a sense, there are two different problems being put under one putative solution banner: The ability to safely resolve promises coming from arbitrary user code, and protecting code operating on newborn objects that are unexpectedly thenables due to prototypes.
  * MAG is more interested in the latter, MAH the former.
* Conversation didn’t conclude in this section, but we’ll continue in overflow.

### Conclusion

(conversation continues)

## Error.captureStackTrace

Presenter: Dan Minor (DLM)

* [proposal](https://github.com/tc39/proposal-error-capturestacktrace)
* [slides](https://docs.google.com/presentation/d/1RGNDcJee_6N2II0SeGyMVglvjhJbuqDX02LLzBqyCWI/)

DLM: I would like to talk about tape `Error.captureStackTrace`. This has existed in chrome for a long time and it is shifted by the other browsers watch it is doing is capturing StackTrace information on provided objects. Here is an grab from MDN. This is a capture StackTrace and putting it on a custom error object. Brief bit of history. So, in depths of time, chrome shipped error capture StackTrace, there are evidence that goes back to 2015. More recently, Safari also chipped this message, we did as well, we because we started to encounter web problems, and Matthew presented this for stage one in February. So, works, in stage one, well, because any one has shipped the design space is very small.

DLM: Some of the feedback we got from last time this was presented is that there is a preference to install property rather than using accessor and we should try to queue any special behavior for objects that are errors like we have an error data slot. One little chunk of work I did was to investigate which whether or not we could make this the instructor callable. And 1% of calls are broken, given the fact this existed for such a long time, doesn’t seem to be worth the risk.

DLM: So some proposed specification text here, which is more or less based upon what we have in SpiderMonkey, but I believe this is what Safari has mounted. An object, zero type error, the the instructor is callable, we create an implementation with the StackTrace, and remove the StackTrace with the top calls from the instructor. This is to hide implementation detail that is not useful to the user. If the constructor is not there or callable, we create to new string that represents the current StackTrace and installs it as a property.

DLM: Recently, the V8 team opened this issue. [Number eight (tc39/proposal-error-capturestacktrace#8)](https://github.com/tc39/proposal-error-capturestacktrace/issues/8). So there is interact with another API, that is prepare StackTrace that involves custom of the stem. So basically right now they are using a getter and able to complete the stack and don’t have to do the work involved in preparing the StackTrace unless someone is actually going to look at. As currently specified with the property, we start computing the stuff eagerly, which is potentially expensive and would change the ordering, depending, of course, on the implementation of prepareStackTrace. If you look at that issue, it is interesting because the, kind of, delved into the history a little bit and add one point it actually was a property in V8 as well and they made change to be a getter first because of the cost, of StackTrace, and second, they didn’t want the property read to have side effects. So, what my hope was for today is basically to discuss issue eight and get feedback from the committee. From our perspective, SpiderMonkey’s perspective, what we want to do is see this get standardized, since all three browsers are shipping and I believe our implementation aligns with what Safari has. But still doing two different things. I believe design space, whether proxy or getter, they are web compatible. Because people are shipping different things. So basically, I would like to see, get advice from the committee as to what we think the best approach here is and to see if all of the browsers can agree so that we can standardize this. From that point, yeah, I would like to see if there is any feedback on the queue.

MM: Yeah. This is more of a question than feedback. The `Error.stack` proposal would move the, would place stack, stack access or property on `Error.prototype` V8 seemed, since the V8 own access or property per error instance all of those have the same actual getter and setter and therefore, clearly, they must be accessing an internal slot per instance. And there wouldn’t, so Google seemed receptive to the idea of moving that accessor up to the prototype. The, because you’re using setter that has prototype properties, this makes a difference because if it’s an own accessor, then setter that ignores prototype properties would invoke the setter. Whereas if it is an inherited accessor, then setter that ignores prototype properties would ignore the accessor and create a new data property.

DLM: Okay.

USA: All right. If you’d like to move on with the queue. Next we have OFR.

OFR: Yeah. So thanks for bringing this proposal forward and thanks for already including our comments. So that makes it easy to talk about them. Just wanted to give a bit of a background. So indeed, it is a concern that we have, when these effects from prepareStackTrace are actually happening. Unfortunately, I don’t have data how often this would happen. I have found interesting instances where this does happen. For example, there’s a node package that downloads source maps to kind of format the StackTrace in the source language. That's one thing that I found. So for us there is a concern that if I did this eagerly, it could potentially cause issues. The other thing is, I looked into the history of this accessor in V8, and actually it turned eager at some point, as you mentioned, and then we changed it back to lazy. And the reason was not performance issues with prepareStackTrace, but really performance issue with captureStackTrace itself. Even just computing the default string representation of the stack is something that is expensive. And so, if a library decides to just augment all of it’s custom error objects with this API and some client program uses that library, and never ever looks at the stack property, then you would still have to pay the cost for that. So in, I believe, this was sometime in 2017, where we actually changed this back to be lazy. And decided to go with this accessor solution. So, yeah. Overall, we would have a preference to be able somehow to keep this lazy. To avoid having to do this round again where we find out, actually, we will get complaints if we make it eager. I saw on the notes from last time there was opposition against the accessors. But I didn’t actually figure out what the opposition was. So I guess my goal here is to also try to figure out what would be the things that people are concerned with.

USA: All right then. Moving on with the queue. We have a reply by MAH.

MAH: Yeah. So I’m not a fan of the complication of specifying accessors for this case. But I described the way—in the GitHub repo how it could be done in a way we consider safe. We have problems with V8 current implementation of accessors for error stack. But we have a description on how we can avoid that problem there. I’m actually going to stem a little bit on KM's point here that because I wanted to bring it up. Similarly, like you can still have lazy, lazy behavior by specifying data property and keep it as an implementation detail. The only reason this is observable right now, V8 as a prepared StackTrace hook user hook so that becomes observable. However, that is not part of the spec. If we were to ever specify a mechanism similar in principle to prepareStackTrace for userland to be able to personalize or do some filtering on how the stack contents, string properties created, then this would become observable and if we ever want to do that in the future, that means we cannot specify this as a data property today. We would have to specify it as an accessor so we don’t have caustic, we don’t is to specify exotic behavior on data property access.

OFR: So maybe a direct reply to that. This is actually the first in implementation we ever had. This caused a security issue where we exactly didn’t handle the case where user behavior was involved when accessing this data property. So we would also like to avoid doing this mistake again.

USA: Sorry. Next on the queue, we have a reply

KM: Yes, this was covered already. Basically same point here, I do agree if you were going to prepare a StackTrace, having the value getter is like, as an implication detail is bizarre, because you’re having a callback, something that is supposed to be just like a nonreentrant operation. So I mean, I’m open to either, I don’t have too much concern one way or the other if we have to change our implementation to be a getter, it doesn’t really matter. I do wonder if we were to add prepareStackTrace, I expect we would not use the same API for reasons, like this prepare StackTrace API would add something new, I guess. Because it is like a global property that gets looked up, I think that is generally frowned upon for these type of things these days. So I don’t know if we should necessarily be like—planning around prepare StackTrace, but obviously we have to support V8’s existing implementation of it. Right? So, just sort of a trade-off there, I think.

USA: All right. OFR, I assume this was your topic? That was on the queue. So in that case, let’s move on to Jordan.

JHD: Yeah, I mean, so in a previous presentation for captureStackTrace, it was explained that this proposal is needed for web compatibility and interoperable and make sure no one makes it even worse. We talked about all of that. So fine, we need to specify captureStackTrace, but we shouldn’t, it shouldn’t exist. It exists because some, one browser implemented it and then a benchmark made another browser do it. So given that it shouldn’t exist, I think we should be really careful not to do bad or weird or inconsistent things to make it exist. Including prepare StackTrace related stuff that we should opt for whatever we kind of most straightforward and like—consistent approach we can is. And assuming that it is web compatible to make that happen. I don’t have a concrete opinion what that path should be. But let’s not bend over backwards so that something that shouldn’t have existed in the first place can land.

USA: And finally, we have MM on the queue.

MM: Yeah. Since this involves interaction with two proposals, let’s consider this a question. Both for DLM and for JHD. The error stack proposal, as I mentioned, just puts an accessor on `Error.prototype`. Which thereby gets inherited by anything inheriting from `Error.prototype`. What the accessor does is for error objects it accesses the internal slot. If this, if capture StackTrace was specified in terms of changing that internal slot, that would be, it would be not surprising for the consequence of that to be lazy, because nothing’s observable until the getter is invoked. The cost of that is that captureStackTrace would only be usable on error objects. Whereas the existing StackTrace is something you can do to other objects. I don’t know if that’s accidental or intentional and how important, and the intentional, how important it is to be able to capture StackTrace on non-Error objects.

DLM: Yeah. I guess I will start, that is very valid. It is not obvious to me whether it would be web compat or not to restrict this to things which are error objects. If we were to pursue that path, we would have to do research first. And they just, looking at the—when I looked at telemetry to see if we required a constructor to be capable or not, there were enough people doing weird things with that, that makes we think it would be difficult to restrict things to just being error instances, I’m not sure the history, if that was an intentional design decision or not. It is quite possible it was.

MAH: My understanding is that this is used extensively on non-Error objects. So capture StackTrace would have to install an internal slot. In this case.

MM: I would not, I would not be? Favor of having captureStackTrace install an internal slot on non-Error objects so it would be adding an internal slot. On the other hand, I will point out given inexpensive applies to private, the proposal I will be speaking to next, on non-extensibility would present a property, a data property, any owned property being added whether it is a data property or, you know, or an internal, well, actually, that’s not correct. I would present the private field from being added, the proposal was silent on adding internal slots. But generally we don’t add internal slots to objects that are already created. I would like to continue to not do that.

MAH: Yeah, that would be, to be clear, that’s the only way an accessor-based approach would work if we want to support arbitrary object is to add an internal slots because there is effectively no other way to add internal private information to the an object instance, that’s the information the spec has. It would be better if it behaved as a private field that would be stinted and subject to the—( indiscernible ) proposal. Maybe we can make the private slot stamping similar in this case. But an accessor would have to, be definition access something internal to the object that gets added to it.

USA: And that was the queue.

DLM: So can I take it then, MM, you would be opposed to an accessor?

MM: I think it is complicated. There are certainly ways to do an accessor that I would be opposed to. But I’m not ruling out that there are ways to do an accessor that would fit all my constraints. I’ll make my standard suggestion for proposal touching on these issues. We can continue this discussion TG3 between plenaries, the TG3 audience would be very interested in this.

DLM: Yes, I think—I think that would probably be the end result of this. Got to—I get the feeling that the V8 team would be opposed to using a property, which means we would have to figure out the details of an accessor. I guess my other question, before we do the work, is anyone completely opposed to an accessor? It would be nice to hear that now, rather than come up with a design that meets most people’s concerns, but then come back to plenary and find out that other people are just not comfortable with that. There’s more queue. KM, would you like to speak?

KM: Yeah, I guess just as an implementation detail. Having it be a private field would be awkward, because our objects are sort of stamped if they have private fields when they are created. It is probably possible to change that, but it would be possibly nontrivial. So like the—the, an internal slot in the spec is probably easier for us to do. Simply because that’s easy, we can just, we put a slot somewhere and just—make it invisible.

ZTZ (on queue): Doing `let a = {}; Error.captureStackTrace(a); a.stack.split('\n').forEach( …)` in Node.js is not unheard of.

USA: Next on the queue—oh, well, that’s code. But it is not unheard of, this thing, we can put it in the—oh! And Mathieu replied, but anyhow it is not unheard of it in no GS passages. End of message. And you need to support private fields due to write error. End of message. Next we have OFR.

OFR: Yeah. I guess this is more of a question, I’m actually not entirely sure how we would actually deal with this extra prepareStackTrace behavior that is out of scope of this proposal. It is kind of weird, because the captureStackTrace proposal is very Literal about when the string property is being constructed. So given that wording, I kind of would see no wiggle room for us to stay like, we’re just going to compute that string at some other point. But in the end prepareStackTrace is not spec’d at all. So it is kind of hard to even know what would be the most spec compliant way of implementing it.

USA: Right. And then, on the queue—ZTZ?

ZTZ: I wanted to double check whether it is worth considering because I know it would work. Although, it is a bit weird, to have a getter exist on the error prototype for captureStackTrace and for purposes of reading the stack. So if you do `Error.stack` it would reach to the prototype and invoke a getter and then the getter, other than returning the stack would put an own property in the error. So it is a one time getter that over shadows itself. And that would eliminate at least the trouble of having an own property getter, which I think it is, the biggest issue. Maybe not the only one. But is this an improvement? Is this acceptable?

MAH: ZTZ are I think that is somewhat the behavior I’m proposing. This is adding a to the prototype, capture StackTrace is not adding to the prototype. The behavior you’re describing is the `Error.prototype.stack`. Which is a different proposal.

ZTZ: I mean, it would work transparently for the case when you’re triggering the accessor. You could run the same exact implementation in the background when you call captureStackTrace. And it would be the one implementation that exists on the `Error` prototype. And then you bind it to whatever object captureStackTrace is being invoked on.

MAH: My suggestion earlier was actually that if we go the route of an accessor, we could actually, and an internal slot, we could actually have the exact same accessor functions being shared with `Error.prototype.stack` and those be added to the objects as a known property. They not just share the same information, they can share the same access functionality.

ZTZ: Yeah, but then the conversation went into discussing necessity of having the internal slot on regular objects which are also being passed to captureStackTrace. And if we used captureStackTrace by invoking `Error.prototype.stack` getter, but bound to whatever object is being considered through an argument of captureStackTrace, it would behave the same way and seamlessly work for regular objects, too.

MAH: As long as you add the private field. Yes. There’s no way around letting a private field or, or a private slot or a slot to regular objects. If they’re used as a target of `captureStackTrace`.

KG: Yes there is.

MAH: Okay. I’m interested.

KG: You don’t use the same function value for the objects. You just install a fresh closure on the object.

MAH: Okay. I see what you mean. Okay. You have to create a closure for every getter then. The setter could be shared by just, yeah, anyway. Okay. Got it.

USA: Then there’s around 5 minutes remaining.

DLM: I’m happy to follow MM’s suggestion and take this to TG3. Assuming we can get the right people involved in this discussion there and have more today. I do have one broader question if I could ask that before I end, does the committee think this is actually worth pursuing or leave this as a regrettable thing that everyone shipped and agreed upon? Like I don’t know, I just like to hear, do people see value in actually standardizing this? Or is this taking time that could be used for other proposals that have a better impact? And I—silence—

MM: I think I will just go on the audio track rather than trying to write something in TCQ. The, I would—I would prefer to capture StackTrace also not exist, but I don’t have a hard objection to it. The, if it can solve, if we can solve all of these messy problems. If it’s going to be part of the de facto standard of JavaScript in the sense that over time all implementations feel obligated to implement it, then I would feel strongly that we should standardize it. The same reason why once dunder proto started becoming universal, even though I hate it tremendously, I advocated that we standardize it. Because everything that is universal is better off having a well-thought out and agreed semantics, which is the job of the standards committee.

DLM: Okay. Yeah, there’s a few agreements on the queue that I can see from ZTZ and MS(?). I will take that as pursuing this. And yeah. I think I’m happy to bring this to TG3 and hammer out details.

USA: And also support by KKL. All right. WH, would you like to speak to that. There is no more than two minutes left.

WH: I have a question for MM: What should we do if we have existing practice in which some implementations choose to do it as an accessor and some as a property?

MM: So the mandate of don’t break the web is only the multi-browser web. So if existing browser implementations disagree, then we are, and we’ve done this in the past, then we can—you know, that gives us some freedom. We can’t break that functionality that works across browsers. But in order to standardize, and with the veto of the browser members as a possibility at TC39, anything that we can get agreement on that doesn’t break the cross browser web is something that we have gone forward with. And I would, I think, that’s the right stance.

WH: Okay. If it is anything, it is also okay to let an implementation choose to do it one way or the other?

MM: So, I—we can, we, we occasionally leave things to the implementation, but that is always, I think, a terrible last resort. The purpose of meeting as a standards committee is to reduce gratuitous differences between browsers. So if the browsers continuing to diverge is based on anything other than inertia, then I would hope we could get to agreement. But inertia’s powerful. And the browsers are represented on the committee. So they can say that they object of coming to an agreement.

WH: Okay. I also had another item on the queue for quite a while which got deleted: If it is an accessor, if you call it multiple times is it guaranteed to produce the same result?

MM: So for the spec mandated accessor, we’re free to specify that. And yes. I would, I would certainly hope that we would specify that the answer is yes.

WH: Okay.

### Speaker's Summary of Key Points

* Discussed various options for using an accessor (shipped by V8) or a property (shipped by JSC and SpiderMonkey, and the constraints on the behaviour of an accessor if that was the option chosen.
* Did not come to a decision about accessor vs. property.

### Conclusion

* Will bring this discussion to TG3.

USA: All right. That is all we have for this time. Thank you, Dan.

DLM: Thanks.

## Non-extensible Applies to Private

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-nonextensible-applies-to-private)
* [slides](https://github.com/tc39/proposal-nonextensible-applies-to-private/blob/main/no-stamping-talks/non-extensible-applies-to-private-update.pdf)

MM: So previously, we had brought non-extensible Applies to Private to the committee and we rapidly got from no stage at all to stage 2.7 which all of us really appreciate having been able to do that. Today I was going to ask for stage three, but reality interfered. So this is just a 2.7 status update to bring up some issues that I hope we can discuss so that in a future meeting I can bring this back and ask for stage three. So to recap, the green, the two green highlighted lines are the entirety of the proposal itself. Which is to ensure that if an object is non-extensible, then in the same way that you cannot add public properties to a non-extensible object, we are here proposing that you cannot add private fields to a non-extensible object.

MM: And to recap motivation, here is a little abstraction called tagger that used return override in order to add a little private tag to any arbitrary object. And SYG's motivation, SYG and I are cosponsors of this, SYG's motivation primarily has to do with wanting high-speed implementations of structs, with optimization depending on structs having a fixed shape. And within the current spec, it’s not possible to implement structs with fixed shape because there’s nothing to prevent one from using the tagger abstraction to add a tag to a struct instance. That would in realistic high-speed implementations cause its internal shape to change. So with this proposal, because struct instances are born sealed, the attempt to add a private field to it, which happens right over here. Would throw a type error. And you get the same safety that you would have gotten if you were adding a public property.

MM: By the way, I should say, I’m still hopeful that structs, not shared structs, but just normal structs, normal unshared structs, I’m very hopeful that does go forward, so I do share this motivation. But for me, this is the primary motivation. It’s the exact same tagger abstraction. We, Agoric, implement a virtual object memory system in JavaScript where there are a particular class of objects, we’ll call them virtual objects, that where you can, for example, have more—have a virtual collection that is larger than your JavaScript heap where the virtual collection is keyed by virtual objects and it spills out to disk. That when the virtual objects are referenced, they get so to speak, pained back into disk, from disk, creating a representative which is a JavaScript object. So weakness aside, representative each time it gets faulted back in, it is represented by a different JavaScript.rep, because no two representatives of the same virtual object are in the same heap at the same time, aside from weakness it is undetectable that it has a different JavaScript object identity. To deal with weakness, what we do is we replace the global WeakMap and WeakSet constructor and we hide, we could also replace the global weak ref and finalization registry. And by replacing them with things that aware of our virtual object system, we’re able to ensure that, that the change of identity of the representative at the JavaScript level is not observable. The hole in that story is demonstrated using the exact same tagging thing. That is because return override with the current behavior, means that there’s a primitive weak map effectively, weak by syntax in the language, which is the only way to account for private fields with return override. So over here, if you tag representative one with A and you get it while it is still in memory, while you are still holding onto to representative one, you get back to A. That is fine so far. But then if representative one is garbage collected and the virtual object is trying to transparently revive it, creating new object representative two, then because it has a different JavaScript object identity, this is the one place where that difference of identity remains observable which breaks the virtual object memory illusion.

MM: So with this proposal, and given that our representatives, one of the constraints we already have in our eventual object system for other reasons is that, the representatives are always frozen, then the tagger immediately fails to tag a representative closing the one hole that we could not fix in the virtual object memory illusion.

MM: Okay. Recap plus-plus, last time we brought this to the committee, we were showing this graph as of April 1st. So I redid the slide going to the current stats on the Google web page where Google is accumulating these stats. And as we see, for this graphic, it seems to go down, which isn’t necessarily good news. But at least it is not bad news. I say it is not necessarily good news, because it's probably within the error tolerance, but obviously the linear best fit continuing to go up, up is noise we can ignore on, with regard to this piece of statistics. The other piece of statistics on Google website is more alarming and I would like to work with somebody at Google to understand what this means. But it’s showing an increase in June over where we were in April and May. And then a decrease from June to July. But still a notable increase in July over May or April. But all of these numbers are, are still very, tiny small. And I don’t know of anybody who has reported any source of these anomalies aside from the one that SYG reported as of our last meeting. So SYG reported two anomalies. One of which was that there was exactly, whoops, sorry. I clicked. Exactly this pattern being seen on one website and it was mysterious to us at the time why anybody would write code like that.

MM: And then on the issue number one thread, on this proposal, James pointed out that the anomaly we were seeing was exactly that, that would be generated from Babel. So now, on taking that same observation, but throwing at it a slightly more challenging test case, which is the code on the left. From which Babel today generates the code on the right. So, this led to a—and the code on the right is code that does break—if, you know, once our proposal becomes standard. Our proposal would break this code on the right. We call the code in the middle, because after a lot of back and forth, especially with thanks to NRO and RGN, as of this morning, just shortly before my talk, NRO proposed the code on the right as an alternate translation that seems to be fully spec compliant on, with the current spec and would remain spec compliant following this PR becoming part of the language. So thanks again to NRO and RGN for that.

MM: And that is it! So, so I will now stop recording. And take questions. I have now stopped recording.

USA: Great, first on the queue we have JHD.

JHD: Yeah, I just wanted to confirm, it just occurred to me while looking at that slide that was just showing that this won’t actually explain why you can’t add private fields the window. Right? It’s just whole new class of objects that you can’t add private fields to.

MM: That’s right. That’s right.

JHD: Thank you.

MM: Window was a—it is a called out exception or specifically the browser global object is a called out exception only for browsers. And where this proposal started was new integrity levels where a new integrity level that was not non-extensible, but purely independent of extensibility, could have retroactively rationalized the browsers have a new integrity level. But SYG and I extracting the proposal, so it depends on the existing level of integrity level, gives us intentionally rationalizing the browser Behavior.

NRO: Yeah, I checked out tools. This looks like SWC has the same output as babel. So I submitted an issue to them. I don’t think another tool has the same problem, because the other tool supports cross blocks without also transpiling static fields. So this is the tools and the tools are where. And fixing will be done hopefully soon. Finished.

MM: Okay.

USA: Right next. WH.

WH: The Babel translation seems really nasty.

MM: You wouldn’t believe the Babel translations before that one. We get through compatible, but much nastier translations.

WH: It creates extra private fields which you didn’t have before. And—

MM: No it does not, let me show it again. Hold on. Sorry, I—I—

NRO: The old one does create extra fields which was observable, the new one does not.

MM: Yeah. The new one, the one on the right here. The one, the current translation creates the private field. NRO’s proposed translation gets rid of the extra private fields. So were currently living this. I don’t find this significantly nastier then this. It certainly is a little bit harder to read if you’re manually looking at the code. And it kind of reminds me of the Peja (?) conservation thing, this is the wide short water, and this is the tall thin the water. But yeah. I think, in fact, you know, NRO’s the Babel guy, and he’s happy with the translation he’s proposing. Do you find the translation on the right significantly less acceptable than the translation in the middle?

WH: No, it’s the other way around. I don’t like the middle one.

MM: Oh, in that case, great! About that case, you would be happy for us to go forward with this proposal and in coordination with that, or in anticipation of that, Babel switching from the middle translation to the right translation.

WH: Yes.

MM: Great! Okay.

USA: Awesome, next on the queue, oh—NRO?

NRO: Yeah, there is still one case where Babel injects a new private field which is when there are no other static or private fields. So we inject one just to be in the correct code. We know we can do it because it transfers the code in the class body. But like, it might be ugly, but it is not observable. So it is fine.

USA: All right. Finally, we have OFR.

OFR: Yeah, just a quick question. If I understood this correctly. Basically your plan forward is looking into why the numbers increase and also looking into help for figuring this out.

MM: Yeah, I’m looking in particular for help from Google. Oh, I should have mentioned this note over here. This note mentions an increase in July and December, 2018, which is before any of this was sampling. So my interpretation is, this note is not relevant to this graph, but because it mentioned July, I just wanted to double check that. That this note has no bearing on interpreting this graph?

OFR: Yeah, I don’t know. That would be my interpretation of that.

MM: Okay. So in particular, because these stats are coming from Google, I would like any help I can from Google understanding what the stats mean.

OFR: Okay. Sounds good.

MAH: The note at the bottom is static for any stat. They are not relevant in this case.

MM: Okay. Great.

USA: All right. That was it for the queue.

MM: Okay. Okay! Great! So, I think it doesn’t sound like anybody’s objecting to this, you know, to Babel making the change in anticipation of this proposal. So as far as I know, the only thing that we need to do to ask—to ask for stage three next meeting is to have the test 62 tests. Since the entirety of the proposal is this, this shouldn’t be too burdensome. Does anyone know of—we took a look at the checklist, does anybody have any other thing they would want us to examine besides clarifying with Google the stats before we ask for stage three?

USA: Nothing on the queue still.

MM: Okay! Oh, go ahead.

MAH (on queue):, go forward, I want to see this happen. End of message.

MM: Okay. Great! I am done.

### Speaker's Summary of Key Points

* Recapped previous explanations (somewhat improved)
* New Google stats might indicate new concerns, but numbers still tiny
* Turns out, Google’s first (of two) reported breakages was due to Babel translation
  * Showed Nicolo’s new future-proof Babel translation.
  * Works full fidelity both before and after this proposal in std.
  * Waldemar is happier with it over the status quo, even apart from this proposal.
  * No one said they were less happy with it.

### Conclusion

To ask for Stage 3 next plenary, we need to

* work with Google to understand what their new stats mean, hopefully not seeing new alarms
* write and submit new test262 test plan and tests
* get those approved and merged

We asked, and no one raised any other things we need to do before asking for stage 3

## Immutable `ArrayBuffer` for stage 3

Presenter: Richard Gibson (RGN)

* [proposal](https://github.com/tc39/proposal-immutable-arraybuffer)
* [slides](https://docs.google.com/presentation/d/18JnyoJsovfw7Y_HGa0cZOOUCHY2MTO4_M72zKj7PUWo/edit?usp=sharing)

RGN: It looks like I will be able to give some time back in this presentation. The current status is that we’ve got test262 pretty much ready to go. The testing plan I went over in the previous meeting has been flushed out rather well. I opened a number of pull requests over the past couple of weeks to implement it, although the test262 reviewers haven’t yet approved them. I’m still very satisfied with the thorough scope of coverage and have uncovered nonconformances in every implementation tested so far. Which is primarily just XS. Although, SpiderMonkey just recently shared that it is in their nightly builds as well.

RGN: So looking at our stage three progress, we’re down to just needing approvals on the tests. The testing plan itself, as I went over last time, is quite thorough. This slide is basically an overview of the full surface area represented by the proposal… existing `ArrayBuffer` prototype properties, and new ones, a lot of interaction with TypedArray, both static properties and prototype properties, including the new setFromBase64 and setFromHex methods that are specifically on Uint8Array. And also, interaction with the TypedArray internal methods because TypedArray backed by an immutable buffer has nonconfigurable and nonwritable index properties, so that needs to be represented with property descriptors, getting them and also setting them or defining them. DataView has a number of typed set methods, so that also applies as a TypeError when backed by an immutable `ArrayBuffer`. And finally, Atomics has some interaction, due to its mutating operations. All of that is covered in our testing plan, and in the new test262 pull requests.

RGN: And basically, it looks to me like we’re ready for stage three! So, I am officially asking for consensus to advance.

USA: First now is DLM.

DLM: Yeah. Sure, SpiderMonkey team supports this for stage three. And other people inside of Mozilla that are quite excited to see this advance.

USA: Great. Next we have NRO. Oh, sorry, NRO, I’m sorry. We had OFR first.

OFR: Yes. So this is a bit late. But just an implementer’s note on the proposal that we noticed. I was wondering how it was with other engines, but we noticed that the proposal would probably lead to more detached `ArrayBuffer`s overall. And actually, detaching an array buffer is something that basically slows down `ArrayBuffer` access in V8, because there is a global flag whether anywhere ever there was an array buffer detached, as soon as you do that the first time, then access to `ArrayBuffer`s get slower because we have to check every time if the buffer is actually detached at this point. So this is something we noticed when reading the proposal this time.

RGN: That is interesting. Do you have plans to address it or just are you just going to deal with the slowdown?

OFR: So we actually don’t have a plan to address it. Because the problem is that the `ArrayBuffer` that you detach it from, like it is not changing shape. Nothing in itself changes. So, we don’t have a good way of tracking which `ArrayBuffer` would not be affected. So currently it is like one global property. We don’t have plans to change it.

RGN: Okay. Sure. Just in terms of speculation, we anticipate that the most common pattern is going to be detaching an `ArrayBuffer` that is then never accessed again. And in fact, might not even have a binding associated with it, as with inline creation and transferToImmutable.

USA: A reply by MM.

MM: Yeah, I just want to make sure that I understand, right now an `ArrayBuffer` is sent over postMessage, it’s, with, you know, with the appropriate properties, say, please transfer this, it detaches the original. Does that set the same flag that causes all `ArrayBuffer` access to be slower from then on?

OFR: I would assume so in that case, yeah. It is fairly uncommon for `ArrayBuffer`s to detach currently.

MM: Is it uncommon to send an `ArrayBuffer` through postMessage?

KG: Yes, it is just uncommon to have a worker at all.

KM: Yeah, workers are pretty rare.

MM: Yeah. That’s a good point. So I’ll just point out that in a later talk during this plenary is import type buffer and for those it magically creates an immutable `ArrayBuffer` without having to first create a mutable one and then detach it. So I don’t know how much, I mean, you know, the performance, the issue you’re talking about all has to do with what the typical case is. And I’m wondering if how well that would address the typical cases of concern if mostly these things are coming from—from, you know, resource data so to speak.

USA: We have a reply by KG.

KG: Yeah, I think we’re just going to see more buffers getting detached in the future. It is my hope, and the hope of some other people to make the easier to have workers in general. Right now, as I just observed, they are quite rare, but I think that is a lot to do with the ergonomics being awful. Like really truly awful. And there is a bunch of stuff in the works for making that better, including module sources and maybe shared structs. If we start making it easier for people to have workers, then inevitably they will transfer stuff to a worker more often and things are going to get detached more. So I think we should just prepare for the world where detaching buffers getting more common, and having accepted that, I don’t see any reason to worry about it for this proposal in particular.

USA: We have a replay by KM.

KM: Yeah. I don’t have any objection, but yeah, we have the same global watch point that OFR was mentioning. So just figured I would mention it, yeah, but I don’t think it is necessary blocking for us at this point.

USA: Okay. Next we have ABO.

ABO: I wanted to answer MM’s point. You can do two things when sending an `ArrayBuffer` over postMessage. You can send it—that copies the entirety of the buffer—and transfer it. It only gets detached when you transfer it.

MM: Yeah, I was trying to being clear on that, I didn’t have the right terminology. Yes, thank you.

USA: All right.

JSL (on queue): Readable stream or writable stream implementations will detach `ArrayBuffer`s

OFR (on queue): Google is nonblocking, that is just a comment for your consideration, end of message as well.

NRO: Yeah. I—I—based on what we discussed. I’m happy to say all of the requests, enter them they look good. I think this is conditional on margined requests. But I think it is going to happen soon. We will make a come back to plenary for that.

RGN: Yeah, I would be happy with that outcome.

USA: Okay.

JDH (on queue):, plus one for stage three conditional for test approval.

KM: Yeah, I don’t think we have a problem with stage three, the feedback I got from our DOM folks is that we probably won’t ship until any kinks and everything else, and everything is worked out on the DOM integration side of this. I don’t know fully know what that means in hindsight I should have asked clarification before, but if there is something there from shipping, but we will probably implement the feature before then.

RGN: I’m glad you brought that up. There is an HTML pull request with positive reviews and basically waiting for stage advancement on our side. That dovetails nicely with the web integration that you just alluded to, KM.

KM: Great. Thanks.

KG: There's the WebIDL issue as well. Which maybe this is a thing that we should bring to the committee’s attention more generally. The WebIDL for things which accept `ArrayBuffer`s or things backed by `ArrayBuffer`s, by default, if you just say that you accept an `ArrayBuffer` then it will reject any `ArrayBuffer` that has any unusual attribute. So for example, it will reject resizable `ArrayBuffer`s and you cannot use resizable `ArrayBuffer`s anywhere in the web platform pretty much because the default is that you don’t accept resizable `ArrayBuffer`s. That default would happen here as well. I would guess 95% of ArrayBuffer-taking APIs on the web are only reading it from the buffer and so could totally operate on an immutable `ArrayBuffer`, but the default in WebIDL is you don’t accept immutable `ArrayBuffer`s and no one will go through and update all of the web specs. That doesn’t happen by default, so the web default is that you cannot use immutable `ArrayBuffer`s with APIs. That will be the case for any new `ArrayBuffer`s that we introduce.

KM: In that case it sounds like the people on our DOM side would not want us to ship that until that work happens. But I’m not 100% sure on that, I can say that now, but obviously, that doesn’t affect going to stage three.

RGN: KG is there an existing issue for that in any of the linked repositories? Because if not, I will just add it to the repository for this proposal.

KG: Yeah, there is one on WebIDL: [whatwg/WebIDL#1487](https://github.com/whatwg/WebIDL/issues/1487) From Anba.

RGN: Great, we will take it on for the stage three work of this proposal.

USA: MM, would you like to still speak to your point?

MM: Yeah, I don’t understand KG’s point it would require change to all of the specs written, that are written in WebIDL rather than just a change to the WebIDL spec. So that immutable `ArrayBuffer`s all into the, if you accept an `ArrayBuffer`, then by default you accept an immutable `ArrayBuffer`. Why would that not be a blanket fix.

KG: That is possible in principle, although, that would lead to the subset of APIs that do mutate the buffer being incoherent, they reach in and mutate it directly currently. The default from WebIDL is always been be conservative about these things precisely for that reason. They prefer the reject things that the spec has not been updated to handle rather than to accept those things and potentially between the coherent or insecurity.

MM: So in the current spec language if someone says, they accept an array buffer and you either pass through a detached `ArrayBuffer` or pass it and then somehow immediately detach it. They would have the same incoherence, yes?

KG: Detached buffers are a concept which WebIDL handles and has for a long time. If you say you take an `ArrayBuffer` and someone hands you a detached one, I’m pretty sure it just gets rejected at the WebIDL level. Or something. WebIDL specifically handles detached `ArrayBuffer`s somehow, that’s my main point.

MM: Yeah. Thanks for raising this. RGN, do you have more thoughts on this?

RGN: No, it looks like the existing discussions are capturing it pretty well. Actually, KG suggested a couple of weeks ago that a ForbidImmutable attribute would make the most sense and that corresponds with the blanket fix you were describing.

MM: Okay.

KG: Well, it is not a blanket fix. If you want introduce that attribute, you have to go through every single spec which uses an `ArrayBuffer` and finds the ones that mutate and update those, because they will be incoherent otherwise.

RGN: Uh-huh.

USA: All right. If you think that’s all, that’s all in the queue at the very least. Would you like to ask for stage three?

RGN: I would.

USA: All right. In that case, to be sure we are formally requesting consensus. So let’s give people a minute or two to add themselves to the queue for either support or—oh, okay. So, first of all, CDA is supporting stage three. And of comment, yeah, next up we have NRO.

NRO: I said before, I, before—approving stage three, we need implementation to actually run the test to implement things. I’m happy to give consensus for this now, but conditional on the tests being leveraged.

RGN: Yes. To amend my request. I’m asking for consensus on-stage three conditional upon the test262 PR’s merging.

JHD: We already had myself, I think DLM, and NRO support that.

USA: To clarify CDA, plus 262 for stage three. That is new, and adds to our graph with four and 1,000. All right. I hear consensus including conditional approval in the absence of any complaints or any blocks, concerns, you have stage three. Congratulations.

RGN: Thank you.

### Speaker's Summary of Key Points

* The very thorough Immutable `ArrayBuffer` Testing plan has been translated into test262 PRs, which are pending approval and merge.
* There was implementer support, and also an observation that detaching any `ArrayBuffer` is currently rare and slows down all `ArrayBuffer` access in some implementations.
* There is also a need for WebIDL changes, without which web platform APIs will be unable to interact with immutable `ArrayBuffer`s (just like they are unable to interact with resizable `ArrayBuffer`s unless they specifically opt in).

### Conclusion

Immutable `ArrayBuffer` has Stage 3, conditional upon test262 PRs merging

## Iterator Chunking for Stage 2.7

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-chunking)
* [slides](https://docs.google.com/presentation/d/17qDtY-2Qawt7SeKoY7Rezea-A_hAuwhx2QHJ9MCZ7as)

MF: I’m back with another iterator proposal, again one presented in the last meeting. So reminder for anyone that missed the last meeting. The problem that this proposal is trying to solve is consuming an iterator in two different ways, either as overlapping subsequences or as non-overlapping subsequences, and the size is passed into the APIs. So the solution that we’re working with for consuming non-overlapping subsequences is called chunks. It is `Iterator.prototype.chunks`, it is passed a chunk size, you can see an example. If we apply it to an iterator of these nine elements, with a size of three, it breaks it into three chunks of size three, and yields three different arrays.

MF: The solution we have for consuming overlapping subsequences is called windows. It is passed a window size, kind of like a chunk size, but instead of yielding the non-overlapping subsequences, it yields, the subsequences are only offset by one. So on this similar iterator of eight digits it will yield five arrays of size four.

MF: And context for the rest of this discussion, consider a case where instead of nine digits yielded by the underlying iterator, we yield 10, and still pass `chunks` a parameter of three. We will yield four arrays. We will yield the first these of size three like we requested and then the one remaining element will be yielded with a length of one. That’s how chunks works when the number of elements yielded by the underlying iterator is not evenly divisible by the chunk size.

MF: Okay. So, last time we talked about two possible behaviors for `windows` that we were considering and this is the behavior when the window size is larger than the total number of elements yielded by the underlying iterator, and when the underlying iterator yields at least one element. And we concluded that there were significant use cases that we cared about for at least two of the possible, I think, four provided options. So we decided to go with those two. And as of last meeting, we decided to add a new method that has that similar behavior to `windows`, but with the difference in how it handles an iterator not filling a single window. We did not decide on a name for it at that point, but I did request that if anyone had feedback, they put it on the issue tracker.

MF: So, what I went with is this method called `sliding`, which has that difference in the iterator. The name comes from Scala, which has this same method, with the same behavior. You can see they have, they have a method called `grouped`, which is our `chunks`, and they have this other `sliding` with a parameterizable step size that we decided not to do early on in this proposal. So they have this method called `sliding`. So that’s where I took the name from.

MF: And remember, this difference is only when the underlying iterator yields at least one thing. When the underlying iterator does not yield anything, we do not yield an undersized window of zero length.

MF: So I have written up the spec text. It is available in the repo. It has been available for over a month, a month and a half or so. I did it like right after the last meeting. You can see that all three of these methods are very similar. They are very easy to review. They only differ here in the parts I’ve highlighted in yellow. So if you haven’t reviewed it yet, well, I guess, it is too late :)

MF: I’ve also gotten reviews from the assigned reviewers. So, I have, I have reviews from ACE, JHD, and JMN, thank you for that. But I did also receive some very recent feedback I want to go over from NRO and KG. KG provided feedback a couple days ago, asking that instead of providing two methods for `windows` and `sliding`, we combine them as one windows method and take a parameter, like a string parameter that switches between the two behaviors we agreed that we wanted to include in the proposal. And NRO opened up this other issue just to bikeshed names.

MF: So I am personally open to continue to work on this proposal. I think that it’s fine to go forward with the two methods as I have presented today. And I think it is also fine to consider different names or a combined method. I just want committee agreement on any of those directions; I think they all solve the problem just as well.

MF: I have my summary here, I don’t know if this is just be for the notes or if you also wanted me to go over it. But these are basically the things I said already.

MF: I would be fine with considering different names, I would be fine with combining the methods. I would just need a definite direction from the committee that I can go and kind of have confidence that, you know, when I come back with the solution as we agreed upon, that we can continue moving this proposal forward. That’s my presentation. I would love to hear any feedback on the queue.

JRL: First up we have KG.

KG: So, sorry I didn’t give this feedback in a more timely fashion. I blame not being awake during the presentation. But I should have given feedback sooner. Sorry about that. But I really do think having two methods here isn’t the right approach. These methods are really, genuinely, almost identical. For almost all users, there will be literally no distinction. I think it will be quite unusual to be providing a nonempty iterator that is smaller than the window size. That’s just like a pretty unusual case. So for almost all users, there’s literally no difference between the methods, but you still have to choose between them. And there’s not really anything to tell you how to choose between them. If one code base ends up choosing to use one and another uses another, no one to say one of those is right and the other one is wrong. They both work exactly the same. I think that is a really bad situation to find ourselves in.

KG: So I strongly prefer to have a default behavior and to specify the other behavior with the string parameter. I’m not super bothered what that behavior is, but I think an extra parameter here is just a much better experience for developers than two methods. Especially two methods with such similar names, but I think even with other names, they are just like the fact that almost all use cases don’t care which one they use, means that we shouldn’t have both.

JRL: Steve has a reply.

SHS: Yeah, strong plus one to what KG is saying. It reminds me a lot of how `substring` and `substr` have a relevant difference, but I couldn’t figure out which is which. There is nothing about window or sliding that will cue in anybody as a mnemonic to know what it is. I’m definitely in favor of one method with a parameter.

JRL: And NRO?

NRO: Yeah, same what SHS just said. Both do something that is code, having a sliding window of the iterator and just pick the two words. Yes, there is sliding in scala, but Scala only has `sliding` and not `windows`. In the issue I had suggestions. So I don’t care whether we do one method with a string option or two methods. But if we do two methods at least one of them should have a name that tells me how it is different from the other. I give some suggestions in the issue, but like, for example, something that maybe skewed for me to have `windows` and `windowsOrShorter` and stuff like that. Where we say, okay. `windows` is the one that gives me all of the chance of picking a size, and then `windowsOrShorter` in this use case, are shorter. I get a bunch of suggestions, but I think this one was the best. It is fine if it is a long name. Because people will start adding `windows` and complete so they can think, okay. Do I need the ones that is allowed to give me the shorter thing or not?

JRL: We had another reply. I’m sorry, not reply, a new topic from WH, but you deleted yourself.

WH: Yeah, I already figured out the answer. I had wondered why you’d want to emit nothing if you have some input, but not enough input to fill a window. I convinced myself a use case for that is if you want to do adjacent differences.

JRL: Okay. So, next we have SHS again.

SHS: Yeah, you can make one out of the other, but not a direction. The natural thing to pick a default is the one that omits something, at that point, maybe you don’t need to have it built-in, you can have a separate userland perspective to build around and undersized element. Just throwing that out there.

NRO: Yeah, sorry, we talked about this last time already. But there is already a built-in, which is that, I think one behavior and the built-in does the wrong thing, I’m unlikely not to notice it because it is very much an edge case and then just fail in production because I forgot to think about the case. It is good to have it built-in so I actually have to think about which one we use. And again, the issue, it is good to have both of them starting with the same words so when I start typing I see both of them and I can start to think about it.

MF: Yeah, that’s a good point.

JRL: Okay. Now, actually, JHD.

JHD: Yeah. I mean, NRO’s points are solid. I still do prefer a parameter here. I don’t think that either of these methods is so intuitive that people are going to be trying to use it without looking up some documentation. So that documentation will either talk about both methods or talk about both parameter values. And autocomplete will show two methods or it will show the parameter. And so I don’t think it makes a difference really which form it is. And given that I prefer it being one method with a parameter, if we do that, I would like to see it in an options bag. I would like to see us use options bag more generally so we don’t have to keep taking on arguments and worrying about, you know, web compat and things like that.

JRL: NRO has a reply.

NRO: Yeah. I agree autocomplete is good if it was a single method, since usually editors will show the list of expected parameters.

ZTZ (on queue): says people are going to get them from copilot, two methods will make an alternative harder to find (EOM).

JRL: MF?

MF: Yeah. I, so I was saying earlier that I’m pretty neutral on either of the solutions, as long as we make the things we wanted to do possible and we’re solving the problems, except for the fact I don’t think that we should have an options bag for one option. At least not when there’s one option and there’s no plans to add more options in the future. And the reason JHD gave for the options bag is future proofing, but as long as we’re not doing coercion, because it is a string and we don’t coerce to string anymore, we can still future-proof it and still in the future accept an options bag or string in this position.

JHD: As a reply to that, we certainly can. That is a typical approach in userland to try to correct the mistake of putting a non-options-bag parameter and then realizing, oops, we should have put an options bag in the first place. That is meant for backwards compatible, that is not a good API design or preferred outcome. You’re correct that path would remain open to us, I don’t think that would be a good outcome. In a world where we have two options, I don’t think that would actually be a better API then having an options bag with one options, even if we never add a second option.

JRL: SFC has a reply on the same lines.

SFC: In Temporal we have examples of a function with a single-option options bag. I’m pretty sure I can find more if I look through 402. I don’t see anything necessarily wrong with that. The options bag is basically named arguments that are not like the core argument that’s required. So I don’t see anything wrong with that design.

JRL: And NRO?

NRO: Yeah. I think there’s a difference API that are similar to other APIs that already take a large options bag, and for the similarity we have an option, a single option. And APIs where there is nothing similar to this method with this type of option. It’s, like the trade-off, like—how like—well, okay. Exactly what SHS is going to say, so SHS, you can say it. But maybe you can have a temperature check here.

SHS: Yeah, the fact that we have a reasonable way out, even if we made the wrong choice here. Really means the trade-off and consideration, how bad is it and out likely is it. I think it is unlikely, not impossible, we will add a second option. If we do, we have a way out. It is not pretty, but the trade-offs to me, says we should probably stick with a string parameter for now.

JRL: And Kevin?

KG: Yeah. I agree that I prefer not to have an options bag unless we actually think there is going to be more than one option here.

JRL: Okay. NRO called for a temperature check. But given the responses here, do we still think that is necessary?

MF: There is a bit of a meta discussion that I don’t think we need to resolve right here. Especially if we are not even decided down the multiple methods, choose different names route or the single method route. I think that it's more important during this time-boxed agenda item to figure that out first.

JRL: Okay. Yep, then NRO, you beat me to it. Let’s get consensus on changing to one method or sticking with two methods first. Is there any opposition to using a single method with some form of parameter?

KG: I support.

NRO: Would anybody here other than me voicing for having the two methods. I personally would be happy with just a single method.

WH: I prefer two methods. But it is a very weak preference. I’m fine with either way.

JRL: Okay. Are there any other opinions?

SFC: Yeah, I put myself in the queue. I think if you did have the two methods with the same prefix. If the problem we’re trying to solve is autocomplete and such, having two methods where you might have like `windows` and then like `windowsSliding` camel case, would seem to be more descriptive of what’s actually going on there without actually introduce a new name space. But overall, I don’t have that strong of an opinion.

JRL: Okay. So we have weak support, I think, in both favors, with a single method with parameter and keeping two options. Sorry. I know, I’m doing the moderating right now, I actually prefer having a single method. One because naming things is really difficult, if we have two methods we have to decide which one is going to do what. I would like a single parameter.

KG: Sounds like support for a single parameter was a lot stronger to me. I feel pretty strongly there should not be two methods. We had some weak support for two methods, but several people strongly prefer one. We could do a temperature check, I suppose, but unless someone strongly prefers two methods, it sounded to me like one was the preference.

JRL: Shane?

SFC: A point, I think it was NRO that raised it, I didn’t really hear anyone else talk about that, but it seemed like a reasonable point, which was the idea that making developers think about how to handle the edge case of an array that is too short. It seems like that is something that is useful to raise. I think one way to solve that problem would be like looking at the use cases for one versus the other, which it sounds like MF did some research on that—researching for the use cases of one versus the other, what would happen if the developer chose the wrong option. How bad would the outcome be?

MF: We could go back through the use cases that we covered—I don’t have them handy right now—and do that evaluation.

JRL: So we have just under 10 minutes left. We can continue trying to pick a name, which might not be successful. So we can decide to stick with two methods, in which case we need to bikeshed the naming of the two methods. Or decide on a single method and bikeshed if we are going to use an options bag or a string parameter. Which one do we want to go with here?

MF: I think the responsibility lies on me now as champion. I heard the feedback from the committee. It sounds like nobody is very strongly opposed in either direction. And it sounds like a slight majority of voices have spoken for the single parameter with an option, I would ask for the committee to approve that path.

JRL: Okay. Are there any objections to doing a single method with a parameter?

MF: We do have an item from NRO that might be relevant. Do we want to cover that first?

NRO: If we cannot bikeshed between the options bag versus the string, well the two methods solution doesn’t require that bikeshedding.

JRL: Yeah.

(?): Then we’re going to bikeshed the names.

JHD: I have a reply about that. Two things, one is, we probably shouldn’t be designing APIs based on how little discussion we want to have. But separately, it was suggested in matrix by JRL, actually, that if we make the parameter required, that forces developer to think about what they want. That forces it to be a string.. And not in an options bag in my opinion, for ergonomics and usually options bags work better for optional arguments and then that sort of, there really isn’t any bikeshedding yes, there is just two enum values or something. Two string values, what are people’s thoughts about that, the ergonomics of that versus having to be optioning and picking one default. The ergonomics are better if you want that default behavior, but it could be more confusing if you don’t. What are people’s thoughts there?

JRL: WH has a reply.

WH: This creates more bikeshedding about what the values of the parameter are. My preference is for it to remain true or false—make it a Boolean.

JHD: Sure, it seems like we are going to bikeshed regardless. It is more of a question, can we address everyone else’s concerns, so “oh, no, we have to bikeshed” is the only thing left.

WH: I think we should just come up with two or three complete proposals and not try to do it one step at a time.

JRL: Okay.

WH: If we do two methods, one viable proposal might be to call them `windows` and `windowsWithRemainder`.

JRL: Okay. MF, do you still want to continue?

MF: Yeah. I think I’m still asking for the approval from the committee to go forward with a single method with an option. And if we have time, I would like to figure out what, I guess I would like to see if there’s opposition to doing a string parameter. Basically exactly what KG has in pull request #24.

JRL: Okay. So, is there objection to using a single method with a string parameter.

WH: Depends on what the string parameter values are.

MF: Exactly what Kevin has in #24. So “discard” or “truncate” for the two behaviors.

MM: Optional or required parameter?

MF: In the pull request it’s optional. KG can you speak to the default?

KG: I semi-arbitrarily made the default `”discard”`, but actually having heard, whoever it was, SHS’s point about you can build, you can build discard out of truncate, but not truncate out of discard, my inclination would be to make `”truncate”` the default I guess. I don’t have a strong opinion there.

WH: “truncate” implies that it returns nothing if you give it a partial window. “discard” implies that it returns nothing if you give it a partial window. They seem to mean the same thing.

KG: Okay. Truncates the window.

WH: This is too confusing. Because I would think that `”truncate”` truncates the input.

KG: Neither of them truncate the input.

WH: I meant output. Yeah, this is too confusing.

JRL: Okay. So we have a point of order. Actually, there are three minutes remaining now. So, we do need to move on at some point. There is replies now for, I’m sorry, next speaker. MAH.

MAH: Yeah, if it is a required string parameter, I would rather have two methods. it is basically write it in one place or another, I would rather write it in method then a string.

JRL: Okay. And Jordan.

JHD: Yeah, so looking at that PR, there are three choices. Right there is `”discard”`, what was it? `”discard”`, `”truncate”` or `”throw”`. So why don’t we make the default `”throw”`? And then it is optional unless you have too small of a window.

MF: That was not included in the pull request. It was mentioned in the pull request as something we can add in the future. We discussed `”throw”` at the previous meeting.

JHD: Oh, I’m looking at 25, you’re talking about 24. My mistake.

MF: Yeah, we decided not to include `”throw”`. I made the argument that it is an antipattern and we should not include it.

JHD: Okay.

JRL: Okay. So now we have two minutes remaining. I think MF is still leaning towards a single method with a parameter name, string parameter that will be bikeshedded because we’re a committee. Is that still the preference?

MF: Yeah, given that we’re at the end of time box, I will—I will do the proposal with—I guess, with exactly like what KG’s pull request is right now. I know there are some that had issues with that exact state of things. Please participate in discussion in the issue tracker. Hopefully, we can resolve all of the issues before the next meeting and I can come back with something somewhat like what KG is proposing.

KG: WH, my original suggestion for names were `”empty”` or `”short”`. The output that you get, you don’t get one or you get a short one. I'm open to suggestions for names. I’m not strongly attached to any particular names. But if you have names that you like, I would take suggestions. I did want to say, I really don’t like the `remainder` name that you suggested, because that sounds to me like it is talking about the end of the input, even in the cases where the input is larger than the window size. Here we are really only dealing with inputs that are shorter than the window size and what we get in that case. So I don’t think of it as a reminder at all.

WH: We should be able to pick a good name pair. Given what you said, I’m partial to `”discard”` and `”short”`.

JRL: Okay. MF, did you want to quickly, I think you already recapped, but do you mind doing that one more time?

### Speaker's Summary of Key Points

MF: Yeah. We discussed our options for providing the two similar, but different, behaviors for how to handle large window sizes and small underlying iterators.

* recapped problem space
* as discussed last plenary, added new windows-like method that:
  * yields an undersized window when underlying iterator cannot fill first window
    * except yields nothing on empty underlying iterator
  * is named "sliding" after Scala's equivalent method
  * is otherwise the same as Iterator.prototype.windows
* spec text approved by 3 assigned reviewers
* recent feedback from KG and NRO with alternative API designs
  * open to alternative designs but would have appreciated earlier feedback
  * also fine with going to 2.7 as-is

### Conclusion

MF: It sounds like we are leaning as a committee towards a single method with an option of some sort. Undecided yet on what that option is. Hopefully, we can resolve this via the issue tracker in the next two months. I expect to see lots and lots of activity on the issue tracker in the near future with everybody’s concerns. And then, I can update the proposal to include our resolutions and bring it back for stage 2.7 at the next meeting.

## [Keep trailing zeros in `Intl.NumberFormat` and Intl.PluralRules](https://github.com/tc39/proposal-intl-keep-trailing-zeros) for Stage 2 or 2.7

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-intl-keep-trailing-zeros)
* [slides](https://docs.google.com/presentation/d/1hKJFrDfiGeqPWm51fQFQb4M4CeYm3ultB7Opef1BVuE/edit?usp=sharing)

EAO: Presenting this hopefully for stage two, possibly 2.7 if we reach that far. But yeah. As, so first to recap what we’re talking about. It is really a bug fix in how `Intl.NumberFormat` and `Intl.PluralRules` treat digit string values when given. So right now, when we construct a `NumberFormat` and ask it to format the string `”1.0”` it outputs by default just the number one. And similarly, when we are asking a plural rules instance to select on 1.0, the string outcome is category `”one”`. So we are discarding the, the trailing zeros here. And the whole idea here is to instead of discarding those, we retain that information and to do so, we change some of the internals of `Intl.NumberFormat` and `Intl.Plural` rules so that this happens.

EAO: It is important to note this is very limited in scope in what this would affect. So when you’re trying to format or select on a number or when you’re trying to format a Bigint, everything would stay the same, and also when you’re using options that affect the display of fraction digits or significant digits all of that would just work just as it does right now. So an example of what we’re hoping to achieve with this proposal is, if you construct a `NumberFormat` and you ask it to give it a minimum fraction digits of `’1’`, and then if you were to format the digit string one with that, you would get `”1.0”`. But if you were to ask it to format a digit string with more digits, even if those are trailing zeros, like `”1.00”`, you would have those be included up to the maximum fraction digit which by default is three.

EAO: So this was at the last meeting presented and accepted for stage one. And now, I’m going to continue here to present the work done since then, which is to effectively write the spec text and hopefully get acceptance for having this be approved.

EAO: So as you see here, from effectively the diff, there is no change to the external interfaces here in any way. All of these are Intls effectively. And the change starts from when we are parsing and understanding the meaning of a string numeric literal. This is how in the spec in 262 we define what a numeric literal looks like when we’re parsing input—sorry, parsing syntax even. And we change that definition to keep a count of the number of decimal digits in the source text that were there. This is then used in the construction of, we have this Intl mathematical value, which currently is an extension of a mathematical value as defined in 262. And Intl mathematical value currently can either have this finite mathematical value, or it can be one of these specific identifiers for positive or negative infinity, not a number, or negative zero. But going forward, what we would be doing here is changing that definition that’s internal to `Intl.NumberFormat` effectively to be a record that holds this mathematical value or one of these specific flag values or, and then, a—a count of the number of significant digits in the value. But only if it is parsed from a string. Otherwise, it would be zero.

EAO: And in the this ends up being passed through a number of functions, and it ends up having an impact in, when we are actually generating the string based on which the number gets formatted or selected on. This happens in `ToRawPrecision` is what we use when we are effectively working with significant digits and `ToRawFixed` is what we use when we are dealing with fraction digits and the change here, so—both of these work in the same sort of way. First we format a number with, with the maximum fraction digits or maximum significant digits number of digits in the, in the whole string.

EAO: And then if the last digit is zero, we start removing that until we hit a digit that is not zero, or we hit the minimum precision or the minimum fraction digits length of that. And here we would effectively stop the cutting earlier in case the input value has more precision that we identified. This does what we want.

EAO: So in addition to the spec text, I’ve also implemented a effectively a polyfill, but I have not published it in npm. But a format of JS, informal polyfill just to validate that work, that this spec change works as intended. And the only really open question here is that it’s plausible that someone could come up with a reason why we would want to keep the current behavior where, when we’re formatting a string digit value, that we want to forget the trailing zeros there. And then, if somebody comes up with a reason why we would want to make it possible to keep the current behavior, then the obvious place to make that change would be to add a third option to the existing trailing zero display option, where `”auto”` is effectively the current behavior which this proposal would be changing. And then, if somebody wants the current auto behavior there would be a new option `“stripFromString”` to do that.

EAO: This would also be the option that in the case that it turns out that the change over all here is not web compatible, which would be very, very surprising. If that’s the case then `trailingZeroDisplay` would also be the place where we would want to add a third different option to trigger this behavior that we presented here. But my expectation and hope is that we don’t need to touch `trailingZeroDisplay` at all. But this is what we would touch in case we can’t apply the bug fix here pretty much directly.

EAO: So with that as effectively, the state of where we are, I’m coming to you here to ask, can I have stage two. or are there any questions or concerns around this that ought to be addressed? I’m happy to go on the queue. I don’t see anything there at the moment.

WH: I see this has the same issue in *ToIntlMathematicalValue* as the next proposal does. So I just want to flag it and we can discuss it in the next presentation.

EAO: You want to flag it, but discuss it only in the Amount presentation?

WH: Yes.

EAO: Okay. RGN?

RGN: I finished my review earlier today of the proposal as it stands. I think it is going to be good to keep the precision. I support stage 2. And I’m not particularly concerned about maintaining the current behavior for rounding. But if it does prove necessary for compatibility, then I think the plan you outlined is a good one.

EAO: Cool. Shane?

SFC: Yeah. Just bringing another plus one for advancing this proposal. I think it’s an important bug fix. And I think that it builds on the foundation that we laid with the accepting strings in `NumberFormat.prototype.format` to retain extra precision. So I support.

EAO: Cool.

JRL: We also have support from DLM for stage two. And NRO, I think, also for stage two.

NRO: Yep, actually, I would support 2.7. But, yes.

EAO: I have to get two first. So—

JRL: Yeah. So let’s call for consensus on stage two. We have gotten explicit support from SFC, NRO, RGN and DLM. Does anyone object to stage two? Nope. Perfect. All right. Do you want to go for 2.7?

EAO: Before that I need reviewers for 2.7.

JRL: Okay. Perfect, yes. RGN, you said you had already reviewed?

RGN: Yeah. So I’m willing to continue in that role.

SFC: I’m also willing to continue in that role. I’ve been giving feedback since (unintelligible)

JRL: So we have RGN, SFC, and NRO on the queue.

NRO: If RGN and SFC already reviewed, I don’t need to review. But maybe I can review this tomorrow morning, like if we have enough reviewers I’m happy to not do it given I have not looked at the spec text yet.

JRL: I should clarify then, RGN and SFC have you already reviewed the current spec text.

RGN: I have, yes.

SFC: I reviewed earlier drafts of it. But I haven’t reviewed the current draft completely.

JRL: Okay. If do we want to add a time box item for tomorrow so we can give time for the official reviewers to stamp it?

EAO: If the ask is on me, yes, I would like that. But—yeah. There is a queue item from CDA that might be relevant here.

CDA: So to advance to 2.7, you need the assigned reviewers to sign-off on the current spec text and the editors’ review to sign-off on the current spec text. So do you want to allow some time for that and come back for 2.7?

EAO: I’m happy to go with whatever makes this work. If that means I get 2.7 at the next meeting, that’s not horrible. But if this gets 2.7 at this meeting, cool.

CDA: It is not unprecedented. But we would need those completed, you know, and then you would have to come back. To do it this plenary, those reviews would need to be completed before the end of plenary and then you’d need to come back and formally request 2.7. I see SFC’s reply: RGN is an editor. Yes, absolutely. But the requirement is that the editor group has signed off. So, or am I mistaken, is someone from the editor group not missing? So we have RGN, USA—

SFC: I believe RGN and USA is the extent of the editor group, because BAN is on leave.

RGN: That is correct.

CDA: Has USA reviewed this?

SFC: Typically with 402 proposals we have been okay with a single editor review in the past. But if that’s wrong then like—

CDA: I’m certainly not trying to challenge the precedent if that is what you folks have been doing. That’s fine.

RGN: We can consider this as approved by the ECMA-402 editor group.

JRL: Okay. Perfect. So all we’re missing here is a second reviewer, a non-editor reviewer to approve. SFC, who has volunteered, and possibly NRO. So, as the earliest if SFC is willing to do it tonight or tomorrow, we can set a time box later in the meeting and ask for a formal 2.7 later at a time point.

NRO: WH has a concrete blocker here.

JRL: Stage three next meeting is a potential. And WH.

SFC: I had a question about stage three next meeting. If we do stage two now and we write the tests then can we get process-wise stage three next meeting, even if we don’t get stage 2.7 today? Like process-wise, can we skip 2.7 if we have the tests written.

JRL: As long as test are written satisfactory for test262 authors, I think we can go from two to three.

CDA: Right, as long as you met all of the entrance criteria and no blocking from folks there is nothing to prevent you from doing that.

JRL: WH has a concern here.

WH: Yes I have a concern here with *ToIntlMathematicalValue*, which has undesirable consequences, I’m fine with this proposal going to stage 2, but not stage 2.7 in its current form.

JRL: Okay. Given that we can’t go for 2.7 right now anyway, and we’re going to discuss the next proposal as soon as this is done, we might be able to clear that up and still come back at the end of this meeting.

EAO: WH, can you clarify what your concern with *ToIntlMathematicalValue* is with respect to the changes done by this proposal?

WH: We’ll discuss this in the next presentation. I don’t want to do this twice.

EAO: Okay.

JRL: Shane has a reply.

SFC: I mean, I feel like now is a perfectly fine time to discuss it. I read WH’s feedback on the other proposal I think I know what he is suggesting. I think that my read is that there’s not a problem. But I think maybe we should clarify that. So we can talk about that now or later. But now seems like a perfectly good time to do it.

WH: There is a problem, but right now we’re missing the context which is needed to discuss it.

JRL: Okay. Then I think WH is objecting to 2.7. We need to move on. We got formal support for stage 2, and then go into the next proposal, the amounts proposal and discuss WH’s concern in that.

EAO: Okay. So, one thing for the key zeros thing, I would like to ask for, I don’t know, a five or 10 minute continuation for tomorrow or whenever for the potential advancement to 2.7, if presumably we can resolve the issues that are identified with *ToIntlMathematicalValue* here.

JRL: Okay. I think we have 15 minute overflow tomorrow morning and day four which is basically wide open.

EAO: Cool. Let’s see.

### Speaker's Summary of Key Points

The proposal is a bugfix for `Intl.NumberFormat` and `Intl.PluralRules`, which allows trailing zeros in digit strings to be retained. It does not change any public APIs, only the internal behaviour of the number formatter for that specific case. If the current buggy behaviour is shown to have some utility, or if the change proves to be web-incompatible, an option value will be added to the existing trailingZeroDisplay option to address the issue.

WH raised an issue within the *ToIntlMathematicalValue* abstract method, which was identified as being outside the scope of this proposal, and will be addressed separately.

### Conclusion

The proposal and its specification was presented, and was accepted for Stage 2. RGN and SFC volunteered to act as its Stage 2.7 reviewers, and completed their reviews during the meeting. In the continuation on Day Three, the proposal was accepted for Stage 2.7

## [~~Measure~~Amount](https://github.com/tc39/proposal-measure) for Stage 2

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-measure)
* [slides](https://docs.google.com/presentation/d/1my6X1ODDckzJmtcWcFI9hRF_I06Z4RQwrq81lbo8wPM/edit?usp=sharing)

EAO: So, yeah. Hi, again, still. I continue to be EAO. JMN from Igalia might be jumping in at some point here, as we put this together together. The idea with what we are presenting here is to hopefully propose for stage two advancement a reduced set of what was previously accepted for stage one as the “Measure” proposal. And as a part of this, we would explicitly like to rename this proposal as the “Amount” proposal, given that is the name of the thing we are looking to add. It would be very confusing to keep the Measure name but the Amount object given that so much is what do we call this thing and what do we call the related aspects? So, yes.

EAO: Originally when this got stage one in October last year, in addition to what we are still including here, the motivation included and the use cases included compound units such as introducing support explicitly for foot-and-inch and other similar formatted units that are formed from more than one thing that is being indicated. And then, also, it included unit conversion between, within measurement systems like for meters to kilometers, but also across where that is supported governing from, for example, kilometers to miles and so on. And rather than advancing then part of amount, we would prefer to leave these to be part of the smart units proposal that has been around for a while. And potentially an upcoming TG2 or Intl proposal for the expanded unit support in particular.

EAO: Then at the last TC meeting we discussed this topic quite a bit. And how to kind of formulate amount on, and the value that it is representing. The conversation from there has continued in the recurring TC JavaScript numerics calls as long as the matrix channel we’re using, and throughout those conversations, we’ve ended up with what we are proposal here as the way to go forward. Where effectively we have an amount which is holding a mathematical value that can be timed with a unit identifier, as well as a precision indicator in terms of fractional significance. And this we believe is an important thing to include in the language as it brings in a new capabilities of representing first of all a number with a precision which is currently not really possible, but in particular, when you have trailing zeros. And it is also bringing in the possibility of representing numerical values that go beyond the precision capabilities of Number or potentially even Decimal. And Bigint as well, because Bigint is restricted to integer values.

EAO: This is important in particular to be defined within the spec. So that we can make sure that it works really well with the existing `Intl.NumberFormat` and `Intl.PluralRules` capabilities that we have. Because we, it becomes really useful and important to be able to pass an amount the thing we are formatting or the thing that we are selecting the plural case of. And that requires the precision and the unit to be known.

EAO: But then, the use cases here do extend beyond the Intl spec, in that we enable from this the representation of mathematical values, numerical values that are coming from integers with other systems and within JavaScript libraries that are interested in precision beyond what Number, for instance, supports.

EAO: And there’s a bunch of examples of this existing in other languages or systems or standard libraries of other languages. And there’s a whole bunch of other libraries that end up bringing in support for amounts or quantities or units or measures or so on. There is also [a proposal](https://github.com/mozilla/explainers/blob/main/amount.md) for adding an `<amount>` element into HTML. And then, one of the most relevant prior arts that is currently available actually in browsers is `CSSNumericValue`s. Where you can even write out (this doesn’t work in Firefox, but it does work in Safari and Chrome), where you can run all of this code that you see on the screen. Where `CSSNumericValue.parse()` will parse a string like it was a CSS length or other unit indicator. There’s a couple of ways of constructing these, including these CSS `khz`, for kilohertz, or `px` for pixels or `cm` for centimeters. All of the units supported throughout providing these CSS numeric values and they also support multiplication, addiction, subtraction, division. Also, conversion in fact. So you can go like on the last line from pixels to inches and get the value out of here. This does differ in quite a few ways from what we are proposing for Amount. For instance, the value here is always a Number. And the units are the CSS supported units, it’s an explicit set.

EAO: So what we are proposing here is an amount that can be, an instance of which can be constructed out of a Number or a BigInt or a string and possibly given a bag of options in that constructor. Then in order to, because the Amount is immutable, to create a new value there is a new utility method `.with` that takes in the same options bag and can, with that you can create a new amount. And it provides the accessors for the unit identifier, if any is given.

EAO: And then because the inner value in an amount is a mathematical value that doesn’t exist as a JavaScript type, to get at that value we have `toBigInt()`, `toNumber()`, `toString()`, as the ways of getting that value out of there. And then `.toLocaleString()` works the same way as the `.toLocaleString()` as number of JavaScript. And then the `Symbol.toPrimitive`, I will show later some of the details of how we envision that to be working. And then going back to the constructor and its bag of options, it allows you to define the unit optionally one of fractional digits or significant digits. If you get both it is an error. But with one of those you can define the—not just what precision the value has as given, but externally impose a precision effectively. Because this can require rounding to half, we also allow for a rounding mode option here.

EAO: The values, option values for rounding mode, those are taken from the Ecma 402 spec, which already supports effectively rounding mode like this in `NumberFormat`. Also, notice that when stringifying this, there’s a question of what do you do, how do you stringify an Amount that does have a unit? When we are not using `toLocaleString` to produce something for human consumption, but for potentially machine consumption. And here `displayUnit` which defaults to `'auto'` triggers that. I’ll show you effectively how that works.

EAO: So when calling the code here, we have an example, `a` is an Amount constructed, it is a number value that internally becomes—we do the same thing with numbers here as is done with, in—in `Intl.NumberFormat` effectively. So the value `123.456` We first serialize that to a string and then we parse the decimal numerical value out of that. So, we end up with the value internally being 123.456 exactly. With for fraction digits which is why it shows up there on this line where we use `a.toString()` and the kilogram unit here is included. But if you want to get just the numerical value out of it with `{unitDisplay: 'never'}`, that is then left out.

EAO: And with the, with the width method, you can kind of take an existing amount A in this case and create a new Amount with an updated options bag effectively. Here we are reducing the fraction digits count from four to two. And therefore, it is `toString` and `toNumberValues`. Match that precision. And for internationalization, these end up relying on the capabilities of `Intl.NumberFormat` and `Intl.PluralRules` where `.toLocaleString()` ends up just kind of working. But then also we are in this proposal looking to change how `Intl.NumberFormat` in particular behaves when its constructed with `{style: 'currency'}` or `{style: 'unit'}`.

EAO: Right now, that line constructing a new `NumberFormat` would throw because we require the, with style currency, we require a currency value to be set in the constructor options. And for `{style: “unit”}` we, of course, require the unit option to be given. But with this proposal we would be not throwing at that point, but throwing when formatting, if the thing to be formatted with the style currency formatter doesn’t get a currency indicator for instance, at some point.

EAO: And as mentioned, the—the limits of Amount are currently envisioned to be the same kind of way as being arbitrarily large as Bigint is, where you could construct an `Amount`, the example here is `1.0E999`. Where we can tell that the stringified form of this, we can represent that pretty much directly in the canonical form there. But when converting this to a number, we get infinity, and similarly, when we go to `toLocaleString` we end up with the infinity symbol because we go beyond `Number.MAX_VALUE`.

EAO: And yeah. This is about the hinting. So effectively, if you have an amount constructed without a unit, then the stringifying it and casting it to a number really just works effectively as you would expect. This does have the effect that you can add two `Amount`s together, and these add up as numbers and give you a number result. There is a detail, I think we need to be careful with the `BigInt` constructor because that one currently is casting its input to a Number before it reads it as a BigInt, we would need to do a little bit of work there.

EAO: But note that when the Amount does have a unit, then well stringifying it works exactly as `.toString` does, calling `Number(d)` there, would end up with a `RangeError`. Just to be sure that you don’t actually do, accidentally things that are effectively mistakes. So you don’t add one meter to two kilograms, for instance. This does, yes, prevent the ability to add one meter to two meters, which might be nice, but because that requires operator overloading, this is not envisioned as being supported at all.

EAO: So effectively, an Amount represents finite mathematical values, and it provides no arithmetic. And we have a few questions that we are primarily here to pose to you as part of asking whether you agree that this is ready for stage two advancement. We are, of course, open to other questions as well as previously identified. Particularly if they pertain to advancing this to stage two. Yeah, I’ll go through the questions and then there’s three of them that we’ve identified. And then I think, we would be happy to go to the queue and see where the conversation takes us.

EAO: So the first question here is that, with the code here, so when we, for example, construct an Amount from a value that has a higher precision than what we say the Amount ought to have. So here we have one, we have six significant digits of precision in the value that we’re constructing from the amount, but we’re saying that this amount ought to have two significant digits. Then calling `toString` on it, `toNumber` on it, all of these would end up resulting in `'1.2'`. But with the `.width()` method if we then go and define a higher count of significant digits, the question then is: Do we build that out of the 1.2 value? Or do we build it out of the 1.23456 value that we were originally given? Effectively the question is, the last one here do we end up with 1.200 or 1.235? Our preference would be to go with the former, but we’re very interested in discussing things to go with the reasons to choose otherwise here.

EAO: The next question we have is we want to ensure whether there would be any reason to consider currency to be special. So effectively, the unit identifiers that we use in 402 are all lowercase, whereas the currency identifiers we use are all uppercase and three letters. So it’s entirely plausible for us to differentiate when formatting with `Intl.NumberFormat` whether an amount with a unit is an amount with a currency that we support or whether it is something else. And if it is something else, then we would be using the unit formatter and then make that work. And also, there's the option names and the accessors about how to work with this. So the, does the spec text on this was—JMN, did we merge that PR or is that open? I can’t remember.

JMN: I believe that’s still open. But I think the consensus among us is that it should be merged.

EAO: So there is an open PR applying this change. Previously we considered currency to be special. But in our later discussions we now identified that currency ought to count like a unit like everything else. So we’re looking to drop that. But if there is a particular need to choose differently, we would be interested to hear about that.

EAO: And then the third question that we’ve identified is that, as currently envisioned, an `Amount` would have arbitrary precision the same way effectively a BigInt has arbitrary provision, but this requires that an implementation says where the limit effectively is. We could also impose a limit explicitly in the spec for what is the upper limit of the mathematical value being supported. If we do that, we’ll need to define how that works and go from there.

EAO: But yeah. That’s about it. It looks like there is quite a bit of a queue. Happy to start going through that.

JRL: Okay. We have quite a queue. And I’m not sure where they quite go in the proposal. First up is KG.

KG: Yeah. So this seems like a well thought through proposal. I appreciated the presentation. I’m still not totally clear on why it is a proposal for a language feature and not like a library on NPM. It seems like something that is useful for a small fraction of applications. But there are a lot of libraries that are useful for a small fraction of applications. You mentioned integration with `Intl`, like passing it as an argument to `NumberFormat` and so forth. But you could just pass a plain object to a `NumberFormat` that has an amount and precision and unit strings. So I don’t really see the motivation for like how that explains why something should be in the language. And I didn’t pick up much on what the other justification was. So yeah, I’d like to hear more about why you think this is important this is specified and not like a userland library.

EAO: SFC, do you want to take this one?

SFC: Sure, I can take that one. So let’s first just look at the slide that, that EAO has here. The internationalization solution. So there is a few different approaches we can take to solve this particular problem. One of them is to rely on strings and the previous proposal we just accepted would give strings more power than they currently have. A second is to rely on what I call the protocol approach, I think the one that KG just described, with an object with getters that obey a certain shape. And the third one is the amount. We can go through the different angles. So if we look at the string approach, strings are obviously not type safe. It is not great to have strings as your intermediate form that you’re going to be formatting with. How do we add units to strings? Do we have to parse the units out of the strings? What does this look like and mean? I think strings are not a great solution for the amount problem. We can look at a protocol. So a protocol does have some merits to it. I think one of the main issues of the protocol it is not, it doesn’t bring immutability. It is not a solution that, that—gives, that gives authors the ability to have this immutable object that they are working with and passing around. It also, you know, has—other times we have attempted this protocol question in the JavaScript language, there have been other security issues with protocols. You know, we said how we wanted to avoid having getters the call code and things like this. So like there’s fewer opportunities to go wrong with having an immutable object. A problem with both strings and protocols is we don’t have methods for setting and querying things like the precision. So, for example, being able to interact with both significant and fraction digits. These are two very common ways that users have for interacting with the precision of a value. And having an Amount constructor allows us to interact with both of those values, being able to query both of the values, convert one from the other. It also allows us to do similar types of operations with units. And also allows us to do serialization—serializing into a string and back as, you can see an EAO’s slide here. Yeah, so definitely the champion group feels that the immutable object approach is the best solution to the internationalization use case. Now, I think a good follow-up question there is like, well if it is just a 402 use case, why isn’t this specified in 402, why isn’t it just a 402 feature? Intl is already a library, why can’t it be part of the 402 library. The biggest reason is there is library interrupt. I think EAO mentioned on an earlier slide about how, you don’t need to go there, but if you want you could. About how, for example, you know, like we’re making this object to empower libraries, we’re not currently proposing a unit conversion library, we’re deferring that to a future proposal. We can introduce an amount object and have a JSX widget that uses that same amount object and to be able to, you know, format that on a screen or be able to have a unit selector. It is valuable and it is our job as language designers to introduce that interoperable layer. That’s one.

SFC: The second one is the `<amount>` HTML element, which I think is curious there. We would like, similar with Temporal, how, we’re working on having HTML elements that correspond with the temporal types and having JavaScript that corresponds to an HTML element. I think there is a lot of really exciting design space interacting with the HTML element. And the third is the prior art, like EAO has here on the screen. Like in JavaScript we’re not the first language to introduce this type of concept. My favorite here is F#, which has like, there’s no such thing as just a number. A number always has an annotation to it. Right? So basically we’re adding in annotated numbers. So, like, having an Intl-only Amount, you know, definitely begs the question, well, why don’t we make that a 262 amount? Now, that said, I’m also happy to explore things like namespacing. So like if you think that it is better to be in some namespace, like an `Numeric.Amount` or `Intl.Amount`, if that is the discussion we need to have, that is a discussion we can have in stage two. I don’t think the exact namespace for the object is a stage two blocker. I hope that somewhat answer your question.

KG: I appreciate the response. I have a response in turn. So you mentioned a couple of things. One of them, I guess, I just want to start by clarifying. You have the slide where you passed one of these objects into `Intl.NumberFormat`. My assumption is the way that was going to work is `Intl.NumberFormat` would read properties of the amount object. Not that it would reach into internal slots. I was assuming it would work like basically everything else in language where if you pass an object it will read properties from it. We normally reserve direct manipulation of internal slots for the receiver, not for arguments. So if it is just going to read properties from the argument, then that’s sort of—that already works without having a built in Amount in the language. Because you can just pass an object with those properties. Before I go further I want to clarify what the proposal is for how amount values would be handled, those arguments.

EAO: I don’t think we have an exact answer to whether the spec as envisioned here for Amount in `Intl.NumberFormat` would be looking specifically for whether the value is an Amount then doing special things based on that.

KG: Okay. Well, if we do go forward, I will express my preference for that. I think you should just be reading properties. Not internal slots. We had a long conversation about this, particularly but not exclusively focusing on membrane transparency, in the context of the set methods proposal. And the outcome of that discussion was basically things that are operating on arguments should be using the public interface of the arguments, which is to say, reading properties. So even if this does go forward, my hope is that, the way this will work is by reading properties. But if that is the case, then you can do this just as well without an Amount-like type existing in the language. You just pass what SFC was referring to as a protocol. So—that’s the first thing I wanted to say.

KG: SFC mentioned several other reasons to care about having this in the language, such as having immutable data. I didn’t understand that point, since user code can freeze objects just fine. If you want an immutable value, you can have an immutable value. And then there was the point about interoperability, which I think is the strongest justification. Certainly it is generally the case that interoperability is an important part of language design. But things can be interoperable by convention rather than by the existence of something being standardized in the language. In particular, I think if `Intl.NumberFormat` expects an object with a certain shape, and if the proposed amount picker or `<amount>` element in HTML provided an object of that certain shape, then that would be the de facto standard shape for amount objects, whether or not there is an Amount class in the language. And from my point of view, that would be a perfectly fine state of affairs. I think that would result in code that could interoperate with other code just fine and still get NumberFormat and all of that. Assuming we lived in that world—which I acknowledge we don’t currently, but it seems like a fairly straightforward world to reach—I don’t see that much additional value in putting the rest of this library in the language opposed to in userland.

EAO: One big reason is discoverability. If it is just a protocol supported by `Intl.NumberFormat`, then the usage that would get would be significantly lower than if an Amount actually existed as a thing that developers could find and use and benefit from.

SFC: Yeah. On the other questions about, do we read slots or public API. We should discuss this further, but I’m pretty sure what we landed on with Temporal is that we checked the statements in Temporal object and the state of the Temporal object does determine what format we take. And guess I had in mind we would do something similar here, I think that is a discussion we can have.

EAO: Yes, definitely a discussion we ought to have no matter what.

KG: Yeah, and that doesn’t need to happen for stage two. Anyway, we have a very long queue so I'll stop.

EAO: MM.

MM: First of all, I want to agree with KG about reaching into an internal slot on a non-`this` argument, everyone here knows about now. That is a trip wire for me. We have made special exceptions detailed reasons why those exceptions are justified and not harmful. You were at TG3 and this issue did not come up. So if you’re stuck on an internal slot being examined in the position of a non-`this` argument, please bring that back to TG3. Okay. So I've got several things on the queue and I'll take them one-by-one, in order.

MM: So please return to the slide where you’re showing the full API. Yes. That one. So I think the answer is trivial and as expected. But to make sure we all have common knowledge, can you walk through how you would expect this API would be adjusted once Decimal is moving forward?

EAO: We would, in the constructor, accept a Decimal as a value, and we would add a `toDecimal` method on the instance.

MM: Okay. That was it for that question.

EAO: WH, I think.

WH: I have gone through the spec and done a review of it and have a number of observations. The main ones are that this is incompatible with the future addition of Decimal and it is also incompatible with itself. There are a number of bugs which can be readily fixed, but there are also places where it does things inconsistently and doesn't adhere to some of the design principles that we have. One of those is that, if you’re working with arbitrary numbers, you should be able to print an arbitrary number. It’s not okay to throw when printing some numbers and produce a string when printing others. The handling of infinities and NaN is very inconsistent. Depending on where the infinity arises, it might throw or it might print `”Infinity”`, which is really weird. Fraction digits and significant digits are used inconsistently. The use of exponential notation, or when it would switch over to exponential notation, if ever, is unclear in the spec right now. And the *ToIntlMathematicalValue* problem which I mentioned earlier, has the consequence of limiting strings, BigInts and Decimals to the range of IEEE doubles, and extending that range would be a breaking change in the future.

EAO: So just to clarify. The spec in its current state we agree is absolutely not ready, for example, for stage 2.7. We’re asking whether the spec as we are presenting it is sufficiently indicative of advancing to stage two, which doesn’t, I think, require all of the things to be fixed that you’re asking about.

WH: Okay. Bugs I’m not concerned about. But it’s unclear on what the direction or what the intent is in a lot of the places. How are we treating infinities? Are we going to limit everything to the Number range? Those are key questions.

EAO: The intent is that if you were to try to construct an amount from a nonfinite Number—a NaN, or a positive or a negative infinity—the constructor for the Amount will throw.

WH: I don’t think that’s the correct behavior there. Because that violates the principle of how things that work with arbitrary mathematical values work. And it’s hard to prevent intermediate overflows. Like—for example, if you give it the value 1.797E308 and ask it to display to three significant digits, you have given it a finite value. But *ToIntlMathematicalValue* will produce infinity on it.

EAO: Yes.

WH: So it extremely hard for users to protect against that kind of intermediate overflow behavior. There are a lot of problems of having this throw on infinities—I would have very strong reservations about proceeding if that’s the behavior.

EAO: The thing we are trying to build as an Amount is explicitly a thing that is, as I mentioned here, that it represents a finite mathematical value. And therefore, this leaves out infinities.

WH: I would not be comfortable with advancing if we violate the norms on how floating-point mathematical values work in the language.

EAO: But “mathematical value” as defined in the spec doesn’t support infinities.

WH: Sorry, I meant how Numbers work in the spec.

EAO: Numbers, absolutely. But mathematical values and numbers are different in the spec.

WH: A user should be able to just take any existing Number and print it without worrying about that throwing. They should be able to take any existing BigInt and print it without worrying about it throwing. We’re violating that expectation right now.

EAO: A BigInt?

WH: A BigInt or a number.

JHD: Sorry to interrupt, but if the BigInt is too long for the implementation, wouldn’t it throw anyway?

WH: I’m not worried about that.

JHD: Okay.

WH: Yeah, I’m not talking about memory limits and stuff like that.

EAO: So do I understand correctly that you’re—that in this aspect, your concern is that you think if an Amount were to exist in the language that Amount should be able to represent infinite values?

WH: Yes. You already have such cases because rounding like *ToIntlMathematicalValue* can turn finite values into infinite values—there is no easy way for our user to prevent that.

EAO: Okay. Do you also hold that an amount should be able to hold a NaN value?

WH: Yes.

EAO: We should have a discussion offline about what would be the user-beneficial ways of dealing with amounts that represent nonfinite mathematical values. You would be alright for us to have that discussion and advance with the queue?

WH: Sure. I also want to emphasize, the proposal as it is right now is incompatible with the future addition of Decimal because of the *ToIntlMathematicalValue* range limit.

EAO: The current range limit value in ToIntlMathematicalValue is, I think, not changed by either the previous proposal or this one. But if Decimal were to be introduced, the expectation would be for the decimal proposal to increment the *ToIntlMathematicalValue* maximum range.

WH: We need to do that as soon as possible in that case, if that is in the spec already. Because that is a breaking change.

EAO: But it is not a breaking change within this proposal.

WH: It is a breaking change, because you can always feed strings or BigInts in there, which have the same issue.

EAO: So wait, wait. You’re saying that the issue that in *ToIntlMathematicalValue*—

WH: That arises actually for, for strings, it arises for BigInts, it arises for Decimals. It even arises for finite numbers which are close to the maximum of the range.

EAO: But you’re saying that this bug already now exists in the Intl spec or it is something that is introduced by—

WH: It is something we need to fix as soon as possible.

JRL: So, I think he is asking is this in the current `Intl.Number` or currently in amount. If we introduce amount does that create the bug or right now is it in Intl?

EAO: That’s a question to you, WH.

WH: I don’t know where this came from. A question to you?

NRO: The answer to the question, it is not in Intl. Today in Intl, you can pass a string that is in decimal limits but it is rounded to infinity. So the answer is it like this right now.

WH: That’s a serious problem. We need to fix that.

JMN: Just to reiterate what EAO was saying, part of the decimal work will be also to adjust the limits. The intention is everything that we introduce should fit into the Intl space. That would be pretty bad if things start overflowing or you get infinity from a finite value or things like that.

WH: If you can pass a string with a finite value now which is within the Decimal range and have Intl silently turn it into an infinity, then we designed ourselves into a corner and we need to get out of that corner as quickly as possible.

JMN: I think we can get out of that corner. I think we can discuss this and find a way forward. I think everyone agrees we should find a way forward.

WH: I have not been paying as much attention to the Intl spec. We need to fix this.

SFC: Just very briefly. In 2022 we already extended the range of supported strings to be greater than it was before. And that’s when we set this fairly arbitrary limit we currently have. And EAO’s proposal that we approved earlier, also extends the capability of string `Intl.NumberFormat`, prototype format. So I don’t expect that increasing the range further would be a web in compatible change, and browsers don’t the implement this consistently, Firefox implements the spec. Chrome doesn’t implement the spec. I don’t think there will be any problem here.

WH: I hope you’re right. I just don’t know.

EAO: WH can you clarify if this is the issue that you also had with the previous proposal’s advancement to 2.7?

WH: Yes.

EAO: We identified this is a preexisting problem we have in the spec. Do you still consider it a blocker for the 2.7 advancement of keeping trailing zeros.

WH: I haven’t noticed this before. I didn’t know whether it was in the existing spec. I first saw it in the text of the proposal. And it is a problem which we need to fix.

EAO: Okay. But.

WH: I’m really not picky about, you know, the process here. But we need to fix this.

EAO: Okay, but can we consider that fix to be separate from the keeping trailing zeros proposal and from the amount proposal? Or do you think it needs to be interlinked with these proposals?

WH: I’m not picky about the process of how we do it, but we need to fix this.

SFC: I can come back with a normative pull request next meeting that fixes this, if that helps.

EAO: Cool.

JRL: Okay. Up next a different topic from MM.

MM: Yeah, can you return to the slide with 1.235? Yes. Exactly this one. So this is a perfect example for asking the question that you’re asking here. I chose the term “strongly prefer” in my topic. Strongly preferring 1.235 for reasons I’m about to explain. But first I want to clarify my language. "Strongly prefer" means I do care about it, but it is not a blocking concern. I would support this going forward to stage two, even if we ended up with the other. Okay.

MM: That said, the way I think about, okay. Now, please go back to the API. Yes. Thank you. So, there’s two ways to think about amounts. And there’s one way that I find much, much more intuitive. That the Amount object represents, at its core, a mathematical value with units. And that the fractions or significant digits and rounding mode all has to do with the rendering of the mathematical value into a string. And therefore the values of fractional digits or significant digits and the value of rounding mode should not affect what mathematical value the amount holds on it and it should not affect any of the observable behavior of API other than the API is the traffic of string renderings. I can talk through how I would think about it if the decision went the other way. But I just find that less natural and, I expect, less useful.

EAO: So, MM, just to clarify, do you mean that in, for example, here on the last line, that `.with({ fractionDigits 2 }).toNumber()`, that number value should still be 123.456?

MM: Yes. That the rounding is not rounding the mathematical value. It is only affecting how it gets rendered into a string. Exactly.

EAO: Okay.

MM: Once again. I’m not blocking if we decide on the other.

EAO: WH?

WH: I’m taking the opposite position quite strongly here. There’s more in the issue I filed, but the accessors to read significant digits and such are not even in the spec. I view this as rounding on the way in. What you get is a mathematical value with some precision and the methods you can call will affect how it is formatted. You can round it again if you want, but the original value is lost. And that’s a cleaner design, because the original value can take a number of different forms. It can be a BigInt, a string, maybe a Number or Decimal, and you don’t want to hang onto those.

MM: Okay. So, that’s a good argument. I’m somewhat persuaded by the argument. Let me make a further argument on the other side which is go back to the API please. So until you bring in precision and rounding, and rendering to string, that the rest of this is, and the notion of mathematical value certainly is not in any way biased towards base 10. You know, math doesn’t recognize a base as fundamental to a mathematical value. The idea that, certainly once you bring in rounding and precision, the precision is explicitly in terms of the base 10 rendering, and it seems a shame to make base 10 privileged at a deeper level.

JHD: So I think I’m next on the queue as a reply. There is a point of order that 10 minutes are left, so I’ll try to be brief. So I think that with the current design it must round on the way in specifically because it is holding state. In other words, the number of significant digits, fraction digits, etc. If it is meant to represent a precisionless mathematical value then it would only take, then it wouldn’t be call an amount, or it would be called mathematical value or something, it would only take the value already, it would not take any options, you prow vide all of the options you needed at rendering time each time. It really doesn’t make sense, to me, to look at these as statefully held rendering defaults. Yet, in other words, if you imagine you’re starting with a BigInt. And you pass it into an amount. You already have a BigInt. Like, okay. Maybe BigInt is a bad example. Imagine you have Decimal and pass it into the constructor, the Decimal is the closest we have to mathematical value in numerical form. If you are choosing, like if you’re trying to hold onto that conceptual value and then only truncate it on rendering. You would have Decimal prototype method said in this hypothetical to do that. The point of passing it into the Amount, to the truncation and have a thing to pass around that is the pre-truncated thing, and the method options do further truncation on render. So conceptually, if we are looking for an untruncated mathematical value, we need a different thing like Decimal or BigInt or Number, we need a fourth thing to represent that.

MM: Okay. I think between all of these arguments, I think I’m persuaded. I retract my strong preference otherwise.

EAO: Cool.

JRL: We do have a few more replies that I think are going to argue against your old position, MM. NRO.

NRO: I'm going to skip discussion in the interest of time.

JRL: Okay. Sorry, I’m going to take my spot, though, it seems, can you go to question two slide?

EAO: Say, again.

JRL: Can you go to question two slide? Yes. This it exactly. Not currency, the one before this, how should we round. I think this is question two in your list of open questions. So we have a value here that is conceptually six digits going in, we’re saying significant digits are actually two, I can only copy the 1.2 value. If I later say that my significant digits that I want to print with are four, that seems like an error case. That’s value is not computable to four significant digits because the value that was represented there was not calculated with that in mind. Whatever, like if I’m doing division and that division only had two significant digits and that rounded my sig figs down. Trying to later print that with more sig figs implies considerably more precision then what the value was calculated with. This seems like an error case that should throw instead of printing normally. Like you can reduce your sig figs, but you can’t increase them.

EAO: That is a good point that I at least have not considered. Would you be willing to file an issue on the proposal repo so we can continue discussion on that one?

JRL: Certainly.

EAO: I don’t think I have a decent response on what is the right thing to do there.

JRL: Okay. Shane.

SFC: JRL's suggestion, I did suggest that, I will consider that more. Mine is about 1.235. But I’m going to skip that for sake of time.

JRL: Sorry, WH, you are up next.

WH: It is very common to display things with more significant digits than you’re given. If you give it the value 1 and ask it to print it with two decimal places it should print “1.00”—it should not throw.

EAO: I agree with that when talking about presenting, about when formatting a number. But as envisioned for an amount, we are envisioning it to represent a value that is then being formatted. And here we have two kind of different meanings of significant digits and what it is actually inherently describing the value that would be an amount and then separately the significant digits that are used for presentation. But I think, because this is a novel idea for me, this is why I was asking, let’s take this discussion offline to an issue in the, in the proposal repo. Because we need to sort that one out. Whether we do actually maintain some semblance of difference of whether the "amount" significant digits and "formatting" significant digits are treated the same or different.

WH: Okay. You will run into a lot of landmines if—

EAO: If—if we can show that that would cause us landmines then it becomes relatively easy to have that discussion to support one way or another. But it is important to have the explicit discussion than not.

WH: Yeah, I prefer to keep it simple.

JRL: So we have four minutes left.

MM: One remaining item, which is currency. We might make this quick. If nobody feels strongly that currency should be included, we already had a discussion in TG3 where I thought we all agreed to omit currency and just use units to cover the currency case. So if currency is dead, then I don’t need to ask my question.

EAO: That is effectively the current state of affairs.

MM: Okay. I’m done.

EAO: Cool. Jesse’s reply is about this as well. So, one thing that I would like to note that I don’t think has really been raised directly is our third question here about whether we ought to in the spec impose limits on the numerical, the mathematical value in amount or whether we should leave it out of the spec and effectively follow the example of BigInt where it is an implementation defined—yeah. But as, NRO points out on the queue, that is something to discuss at stage two. That we’re at time. Regarding stage 2, WH, do you have blocking concerns? Or are those concerns that you have, can they be discussed in stage two?

WH: It depends on what the position is on dealing with infinities. If we’re willing to have this pass infinities and NaN through without throwing then I’m fine it with being in stage 2. If it seems unlikely we will allow that, if we’re throwing on infinities then I don’t think we should do this.

EAO: Then I think we should have an explicit discussion separately from this about infinities in amount.

WH: Okay.

EAO: Because this is literally one of the cornerstones of what we have been building and if we break that, we need to make sure that this makes sense and we’re not causing other issues elsewhere.

WH: Okay.

JRL: Sorry, we have one minute left. I’m going to control just a little bit here. It looks like we have two replies saying that rounding to infinity isn't intentional and they are going to discuss this. Let’s move this to the issue tracker as well.

EAO: Yes, WH, please file an issue adding support for infinite values.

WH: Already did.

JRL: Okay. We have one last reply, I’m sorry one last topic from MM saying +1 if no implied access to internal slots of non-this arg EOM. There is a little bit of discussion in the matrix channel. MM if you can also add an issue on the tracker. That way we can wrap up for today.

MM: Okay. Great.

JRL: Okay. Perfect. EAO, you had already promised to write a summary for the trailing zeros. I can also get you to write a summary for the amount proposal.

EAO: You mean this one?

JRL: Perfect. That will wrap us up for today. Let me—

KG: I’m not clear on whether this got stage two.

EAO: This did not get stage two.

KG: Okay.

SFC: It didn’t get stage 2, why? Because of the WH’s concern with infinities?

EAO: Yes.

SFC: That seems like a problem we can answer like after we get to stage two, though. Like—

WH: Okay. Well the criteria for stage 2 is whether we think we’re going to include something in the language. Now, if this thing mishandles infinities I don’t think we should include it in the language.

SFC: Can we—can we have a stage two on the condition that it handles infinities? The same way that Intl mathematical values handles infinities. So Intl mathematical values and in addition .. customize infinity and snap, which is what intl mathematical value does

WH: As long as it doesn’t throw I’m cool.

EAO: I’m not necessarily okay with that. I want to consider this question with time and not have that be rushed. Let’s discuss it offline and come back at the next meeting.

JRL: Okay. So we’re not going to stage two today. There is an objection to stage two at the moment. But the champion is not asking for stage two regardless. Let’s take this into it issue tracker and wrap up for today. And I don’t believe—

MM: Issue tracker, you’re talking about issues on the proposal PR.

JRL: Sorry, yeah, on GitHub.

CDA: On the measure proposal repo. Are we using number 48 with WH’s July review issue.

EAO: No, please file individual issues for the topics raised. Despite not reaching stage two, I think we do have implicit approval for renaming this as the Amount proposal. But that can be sorted out later.

JRL: Okay. I, that wraps us up for today. Unless someone else from the chair group has something to discuss. I think we are done. See you tomorrow.

### Speaker's Summary of Key Points

The scope of the Measure proposal is reduced to leave out compound units and unit conversion. The proposal is renamed as the Amount proposal, to match the name of the new class it introduces. It holds a mathematical value, an indicator of its precision, and optionally a unit identifier. The value is made available via toBigInt(), toNumber(), and toString() methods, and is formattable with its toLocaleString() method.

The initial spec text is ready, and the committee was consulted on their views on some open questions:

* Rounding should happen during construction, not allowing the original value’s precision beyond what it’s limited to by the constructor options to be accessed later.
* Currency should not be treated as special, and currency identifiers should be considered valid units.
* The min/max limits on Amount values continue to be a discussion topic. The currently proposed spec text does not impose any limits.

Beyond the above, WH raised a blocking concern regarding the support of non-finite values in Amount, which currently throw during construction. KG expressed some hesitation about the proposal being sufficiently motivated for inclusion in the spec. KG and MM expressed a strong preference to avoiding any Amount internal slot access from `Intl.NumberFormat` during formatting.

### Conclusion

The proposal was renamed, but did not advance to Stage 2. Discussions continue on the open topics.
