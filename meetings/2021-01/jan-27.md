# 27 January, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ross Kirsling        | RKG            | Sony               |
| Ujjwal Sharma        | USA            | Igalia             |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Shane Carr           | SFC            | Google             |
| Krzysztof Kotowicz   | KOT            | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Ron Buckton          | RBN            | Microsoft          |
| Rob Palmer           | RPR            | Bloomberg          |
| Robin Ricard         | RRD            | Bloomberg          |
| Daniel Ehrenberg     | DE             | Igalia             |
| Jason Williams       | JWS            | Bloomberg          |
| Philip Chimento      | PFC            | Igalia             |
| Chip Morningstar     | CM             | Agoric             |
| Caio Lima            | CLA            | Igalia             |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Michael Ficarra      | MF             | F5 Networks        |
| Jordan Harband       | JHD            | Coinbase           |
| Dan Clark            | DDC            | Microsoft          |
| Leo Balter           | LEO            | Salesforce         |
| Jack Works           | JWK            | Sujitech           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Mary Marchini        | MAR            | Netflix            |
| Guilherme Hermeto    | GH             | Netflix            |
| Kaylie Kwon          | KK             | Netflix            |
| Ben Newman           | BN             | Apollo (fka Meteor)|
| Cam Tenny            | CJT            | Igalia             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Felipe Balbontín     | FBN            | Google             |
| Shu-yu Guo           | SYG            | Google             |
| Justin Ridgewell     | JRL            | Google             |
| Zibi Braniecki       | ZBI            | Mozilla            |
| Istvan Sebestyen     | IS             | Ecma               |
| Rick Button          | RBU            | Bloomberg LP       |
| Yulia Startsev       | YSV            | Mozilla            |
| Chengzhong Wu        | CZW            | Alibaba            |

-----

## Temporal

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://docs.google.com/presentation/d/1HMt7ytn3SOzYk2TUSdXHejkIDpL8Cy5KvZ9Yrz0JdBU)

USA: Hello everyone. I'm Ujjwal and on behalf of the Temporal Champions group, allow me to give you the Temporal update. Temporal is a proposal that is trying to add a modern ergonomic date-time API to JavaScript. We've been working on a load of exciting functionality all the way from a reusable API basically to stuff like that. There's been work from people at Igalia, Bloomberg, Google, and a host of invited experts and more. And then you'd probably ask me what we've been doing for the last two months. Well, not much actually. As we discussed in the previous meeting the proposal has basically been done. We've changed a few things here and there. So, let me get into the details: we iterated on the month representation of in the data structure the data model. This is mostly based on Manish [Goregaokar]'s analysis of non-Gregorian calendars as well as the implementation work that's been going on in the CLDR. If you're using the Gregorian calendar, you're probably not having to do anything. But if you're using any of the calendars that have a rather creative leap month, of like the Hindu calendar (?) We've been doing a bunch of minor changes around type coercion and validation to make the API more stable, and a bunch of editorial changes. Of course, the documentation has been improving and I hope it's been helpful in your review so far. We've also started working on HTML integration. There is a pull request that is linked to in the slide. We can find these files on the GitHub. One of the big things that has been on our mind, and my mind in particular, has been been standardizing this format as we discussed in the last meeting. We've worked hard on adding support for non-Gregorian calendars and we want to have a way to represent that in the string representation across the wire. So, of course we had to come up with a persistent format for ZonedDateTime. But we also didn't want to invent a new non-standard format. As you know, tools like Java and Linux already use a non-standard format that appends a new time zone suffix to the existing standard, and we didn't want to build onto that and make the space even more problematic. So the missing piece here was of course the representation of the time zone and the calendar in this format and also a few other artifacts that were just outdated in our design. We have a draft out right now that extends RFC 3339 that is being discussed by by the IETF CalConnect mailing list and the Calendar working group and the idea is to bring it to IETF in early March and get it in the standard as soon as possible so that it can be normatively referenced from the spec.

USA: the current proposal status is that the proposal is frozen and camera ready. The group has unanimously decided that we have basically covered each corner case that we wanted to and that there will be no remaining open questions on our end. So from here on any changes would be in response to your reviews. Please review this proposal. We wanted to go to Stage 3 this meeting but the amount of reviews that we had so far weren't enough to make us confident. We will be holding champions' meetings, but of course since there's no further bikeshedding on our end, these meetings will now be repurposed to host you well and to answer your questions and help with the review, so please join these meetings if you're interested. We plan to propose for Stage 3 in March, just to clear any ambiguity. What do I mean by 'frozen'? There will be more examples in the cookbook. There will be fixed bugs. The polyfill will be improved, the documentation also. We will take this time to expand the test262 tests we have right now and port some of the existing tests to test262. We will prepare to move the polyfill into a new project where it can be made more production ready. And of course, we'll address comments, delegates' and editors' reviews. What we will not do is that we'll no longer discuss any new ideas or any new additions. We will not do any major API changes anymore unless— any API changes, really— unless it's in response to a delegate review that has a serious problem with the API. We will not make any normative changes in the spec text, except again stuff in response to the reviews.

YSV: You mentioned that you wanted to get reviews. Do you want to ask for new reviewers or are the reviewers you currently have sufficient?

USA: We do have reviewers currently and they've been doing a great job with us, but we would love to have more reviews from the greater committee.

YSV: I'll just give a minute for people to add their questions if they have any. Your Temporal meetings are on the calendar if I remember correctly.

USA: Yes. They are on Thursdays every week.

YSV: Thank you. It looks like we don't have any comments or questions. Thank you so much for the presentation and if people are interested in getting a bit more information about Temporal, if people are maybe implementing it, please go to the Temporal meeting.

### Conclusion/Resolution

Proposal is camera-ready, will go for Stage 3 in March.

## Async do expressions

Presenter: Kevin Gibbons (KG)

- proposal
- slides

KG: This is a follow-up to my earlier presentation on do Expressions, but it is not the same proposal. So there's a repository for this, which is not yet on the tc39 org, but it has very initial spec text and a readme and so on that you can read. So the problem statement, since this is going for stage 1, is that introducing an async context requires defining and invoking a new function - specifically a new async function, either an "async function" function or a async arrow function, and that's conceptually and syntactically quite heavy for what is a relatively common operation. I would like to make it easier. So my proposal for how to do that is an async do expression, which is a variant of the do expressions that we discussed earlier.

KG: They would have a very similar list of restrictions. So the thing that I proposed - and of course we are still iterating on that - was that do expressions couldn't end with a iteration statement or a declaration and that would apply just the same to async two expressions, but crucially rather than inheriting the ability to await or not await and yield or not yield from the surrounding context in an async do expression. You would always be able to await if the surrounding context did not have the plus await flag, so even if you were in a sync function. And the way this would work is that the async do expression would always return a promise. So here you can see I have x.then, because the value of x is a promise because it is the result of an async do expression. One of the things that we discussed a fair bit during the last presentation was this restriction on regular do expressions that I proposed, that regular do expressions would not able to return or break or continue across the boundary of the do and in that case that was largely a matter of whether or not we wanted to allow that; we technically could, with some work, and there were arguments on both sides of that. With async you simply wouldn't be able to because the async do is not synchronously executing. It can't possibly cause the outer function to return or to break an outer loop or anything like that. In fact the outer function may no longer even be executing when control got to the second statement in the async do because the async do can have an await. So those things would be syntax errors in async do, regardless of what conclusion we eventually came to for regular do expressions.

KG: But again, this is just a proposal for a specific way of addressing the problem statement of making an easier way to introduce an async context in a synchronous context. In my readme I have some examples of things that you might want to do with this. In particular, we have top level await for modules, but we don't have something similar for scripts. So in a script if you want to do something async you always end up writing this arcane grawlix for having an async arrow function which you immediately invoke, or something like that. And you have to write that in every such script because otherwise you can't await. And this would be a much easier way of introducing an async context. Or similarly if you want to do two operations in parallel. You can use promise dot all to do that, but the arguments to promise dot all need to be promises. So to get a promise you would have to have an async function for each of your arguments to Promise.all, an immediately invoked async function, which is just syntactically quite heavy for this relatively basic operation of just to do these two things in parallel. So I think this is much nicer than any alternative that we currently have. And the remainder of the details can be worked out at a later stage, but my intent is that they would match the details from do expressions except where it doesn't make sense to do so, like the restriction on return for example, so with that I would like to go through the queue and then ask for a stage one.

MM: So I think I understand the answer, but I want to make sure: if you want to await inside the do expression, but not in the outer function, simply qualifying the outer function with an async and then having the await only in the do expression is a correct thing to do. Thus the two main semantic differences between - a function that's qualified with async that has no awaits in it acts in most ways just like a normal function except that the outcome is lifted to a promise. Both a returned outcome and a thrown outcome. Other than that, a function without await acts like a sync function without any await, it acts like a normal function, the difference here is that if there's await in a do expression it would pause the outer function whereas the intent here is to not pause the outer function, to basically be, if you want to think of it this way, a fork in the flow of control. So the outer function immediately continues with a promise for the result of the do expression. So that's sort of the motivating difference. Is that correct?

KG: I would say that there's a couple of other important differences. One is that you're not always in a function context. I think the ability to introduce an async context at the top level of the script is quite valuable for code that I write. And the other is this example with promise.all where, you're right, I could just write these as do expressions that contain an await. But as you said that would pause the execution of the outer function, so these two things in this example on screen would not be happening in parallel and for something like promise.all the intent is generally to, just as you say, fork execution.

MM: Okay, so none of that was an objection. I just wanted to sure I understood the motivation. Thanks.

KG: Yes, that is the motivation.

WH: I guess mine is a similar question. If you're inside an async function, what's the difference between `do` and `async do`?

KG: inside of an async function? I don't think there would be any differences - actually, no, that's not true. The difference is that an async do the return value of the async do would be a promise rather than a regular value so you have to await to get the value out. I don't think it would be particularly useful to use an async do inside of an async function except in contexts like this where you want to do two things in parallel. The primary thing is that the inside of the async do does not pause the execution of the outer function.

MM: Okay. I'm confused by the qualifier in that answer. It seems to me that it's just as useful in an async function, in that cases come up where you want the outer function to proceed with the promise and you want to fork the flow of control.

KG: Sorry. You're right. It is just as useful in an async function when you want to fork the flow of control. The place that I tend to think about is when I am in a synchronous context and want to introduce an asynchronous context, but it's just as useful -- you're right -- when I'm in an asynchronous context and want to fork control.

SYG: All right, no objections to stage one. I had some questions about some kind of performance expectations. I know you want this to be syntactically and conceptually lighter weight to actually implement this as an asynchronous function. I mean, I imagine if you have multiple awaits in an async do, after the first await point is awaited it does automatically continue on, and then the final promise is resolved when everything all the await points are done. So to implement this I imagine it would actually end up being its own function inside internally. So it will not be lighter weight in that way than regular async functions. So this is purely an ergonomic and control flow refactoring as folks have said. Is that right?

KG: Yes. I am not intending to bring this as a thing that has better performance.

SYG: So I bring this up, not that it'll be significantly slower. I mean function calls are always slower, but I can see a performance concern here from a teachability point of view and that this is a non-function looking boundary that may cause a closure to be generated and environment to be generated in the outer function.

KG: Yeah. I'm not super worried about that because async contexts the performance in my experience is not bound by having to create an additional closure. It's bound by, there's like a network operation or something.

SYG: Indeed. I didn't mean to say that I'm worried about CPU time. I'm worried about the memory implications and keeping things alive via closures because the way closure analysis works, you know, you have this kind of false sharing thing where some other things that aren't closed over get included into the environment and then we - you know the deal, but like now we have a new construct here that's not quite a function boundary, because it doesn't have arrows or the function keyword, that expert programmers now have to learn again to be worried about memory leaks and so on. It looks like a block but it has way more memory implications than a block.

KG: That's true. Yeah.

YSV: I had a similar concern.

JLZ: So I can just read my question there if it's helpful, which is async functions start running synchronously and only become asynchronous when they hit in the await, I wasn't clear if you were saying that the async block was entirely async or if it had the same behavior as an async function.

KG: My intent was that it would have the same immediate start behavior as an async function that -- for example in this example in my readme. Execution would continue until it hit this point, this await, and then proceed here just like if you had an async function that you immediately invoked.

WH: Trying to understand that answer. If you have an `async do` without an `await`, is that the same as a `do`?

KG: It would still result in a promise. It would be as if you had done promise dot resolve of the do expression.

MM: No, it should should also reify thrown exceptions into rejected promises because that's what -

KG: you're quite right. It would be as if you had a do expression with a try catch that had the promise constructor that resolved in the try branch and the reject in the catch branch. You're right.

MM: Good.

DE: Yeah, so I'm skeptical of focusing too much on this performance aspect that SYG and YSV raised. I think if we're thinking about programmers' mental model or folk wisdom, maybe it is more accurately put that there's the meme that promises are heavy and closures are heavy. These ideas both are sort of out there with people micro optimizing for them a little too much maybe. My suspicions are to agree with KG that in most realistic cases you're going to be using this for an actual reason, and the closure overhead won't be dominating. I think it also would not be so hard to explain that the `async do` is like a little `async function`. I think this is a great proposal. It's very useful to encourage the kinds of async programming patterns will be more optimal for doing things in parallel. So I'm in favor of it.

SYG: I agree with DE that and KG that I'm not too worried about the actual performance issues. I was more worried about the memory implications in terms of debugging leaks.

DE: So if you're asking programmers to have a mental model about leaks related to closing over things and how V8 handles contexts... I think that's going to be a pretty small set of programmers and that set of programmers will be able to learn that this is a little async function.

SYG: Sure. I'm not happy about the situation. But yes, I recognize that that's how it is.

TAB: All right, given the discussion on sync do and how return has various interpretations of what people expect it to do, either returning from the block or returning from the containing function, but in async do the only thing return could possibly do is early return from the async do block, this suggests to me that it is indeed the right move to ban return in synchronous do as well, because there's conflicting things that synchronous do can do with it. And it has to be consistent with async do, I would think so, if we ever do want to pursue an early return operator here, which I think would be a good idea, we can do that separately, but I'm now very supportive of return being banned, at least for now.

KG: I confess that that was part of my motivation for banning it in synchronous do expressions, but I didn't bring it up because I thought it stood on its own merits.

DE: So does this mean that we should be banning yield is well,

KG: Yes, yield would be banned in async do.

DE: if anything would be permitted in sync do expressions, I mean if we wanted to maintain this maximum analogy, it could benefit from both. I don't know if we care about maximum analogies.

KG: My intention is to allow await and yield to be inherited from the outer context in regular do expressions. I think that's a big part of the proposal, is that it's just like any other expression and has the same capabilities as any other expression. Anyway, I don't want -

DE: That seems perfectly consistent to me. Sorry for adding confusion.

TAB: I mean given that the await keyword already has a distinct meaning, but obviously required meaning in async to I also think that's fine to have yield as well. I'm not confused about yield, return would confuse me.

WH: By this argument you should ban `yield` from sync do expressions as well. There’s also similar confusion about what `this` might refer to.

KG: I agree that a generalization of this argument would lead to that conclusion. I don't think the argument generalizes that cleanly, but also, like I said, I didn't intend to make this argument. My intent was to ban return in regular do expressions for reasons that made sense strictly in the context of regular do expressions and to ban return in async do expressions because it's necessary to do so in async do expressions. I don't really want to make this argument about which things are legal by generalizing from which things are legal in async do expressions to which things are legal in regular do expressions.

WH: Good, I don't want to make Tab’s argument. I have no objections to banning `return` in `async do` expressions, but I do have strong objections to banning it in regular `do` expressions. I just find that Tab’s argument doesn't hold water because it's inconsistent with `yield` and other things.

KG: Okay, understood.

YSV: Please Kevin go ahead and ask for stage 1.

KG: I'd like to ask for stage 1 for this general problem of introducing an async context in a syntactically and conceptually lighter way, with the specific proposed solution of async do in mind but open to exploring other solutions if async do proves not to be viable.

YSV: any objections?

WH: Sounds good!

YSV: Sounds good to me too. It looks like you have stage 1, congratulations.

### Conclusion/Resolution

- Stage 1

## Class Brand Checks

Presenter: John Hax (HAX)

- proposal
- slides

JHX:. So this is the class brand check proposal. This proposal actually come from the discussion of another proposal: ergonomic brand checks for private fields. Specially issue number 13. I think the dcleao raised this issue and I think he have a very strong opinion here here. This also inspired me to re-examine the actual use case from the beginning.

JHX: Let's look at the existing ergonomic brand checks for private fields proposal. It introduced `# in` sync syntax here to check the what whether there is a private field brand in the object. Note, this is actually a simplified version. The original example in the readme of The Proposal looks like that. In the original example `isC` tests for private member. This is worth exploring, but before that, perhaps we should first ask, why do we need `isC`. So I give another example, which is which is the very common `equals` method. This is the equals method here, but actually it's not perfect here. If you pass a non-instance we expect it to return false, but actually it's a type error because you do not have the private field. So we need to perform some type checking in the `equals`. For example, we could use the `instanceof` operator. In fact using other programming languages using the `instanceOf` also operates similarly to check types. Just this is what ecos Master the should should be eating. In almost all other OOP languages, but in JavaScript `instanceof` is based on prototype checks, so there is a risk here that you can create fake objects. In addition `instanceof` also has cross realm issues. In practice, there are two main ways to deal with the problem. One is just ignore these problems, one is to still use instance of and the other is to use a type check. Note that if private fields are not involved, and we use other methods of the to ensure that just `start` and `end` are not undefined. Then we even don't need to do a special check because there is no absolute with well return undefined. So if there's noo the private field of but only public field, you don't need you don't need that test because the code just implies the type check. So it's not very structure is not enough for some people. So that's why we need some seeing what we need here. Because we want to guarantee 100% so we need a method for isC to be understood as a true instance of or real instance of. So what does that mean? I think it means the object has all public interface and internal implementation details. Note this is a definition based on high-level intentions, not a definition based on low level mechanisms. This definition applies to all class-based oop language. Most oop languages use instance of operator which directly corresponds to to this concept. Of course we can use the low level mechanism to achieve the high level intention, but the mapping is likely to have some problems. This is the case for `instance of` in JavaScript.

JHX: Actually the `private in` a proposal gives another example of abusing a low-level mechanism that you can use here so you don't need either private in, but it doesn't work for getters because you can't tell if the field was missing or the getter throws a type error. I think this is why private in was proposed. So it seems it seems solve the problem, but it's still a mismatch between the low-level mechanism and the high-level intention. For example, if we do not have private fields, for example if we just use the public fields, how can I write code here? There's no private fields, so you have nothing to test here. So maybe we can refactor the code to use private fields and use accessors. But that means programmers will be tempted to use private fields even they don't need it and if if you change your code from the public field to private fields it actually effects the semantics. for example Object.keys will be affected, and you lose proxies transparency, so it will be a breaking change. You know you already use private fields, ha that also has problems. For example, do I need check all private fields? in the readme of the private in proposal it checks all private fields. But in specific examples, it seems it's not easy to answer. For example, if we add a new private field here, should I update this line? It seems that I should update it. But there are also another question if we have a static method, should I also check here? because I only use start and end particular I didn't use (?). Should I check it here? So there are many similar questions in practice. Basically there may be two answers: one is always check, but it has a maintenance cost. That means if you have 10 fields you have to write 10 `#blah in o`. The other possibility is, it depends. That means you only check the private fields you want to use but it has a big mental model cost. That means you need to check that in every case and it's also a burden of the code reviewers and it's very easy to lose the sync. So personal I feel it may be worse. So this is difficult to say what the developers will eventually use,. But I personally I feel that the final possible best practice will be to always use a special check function here. You create a method to check the fields and always use it. It still has a maintenance cost. But at least it's only in one method you use this method everywhere. another possibility is you can use a dedicated private field only for brand check. So you add a brand here and you add a comment here saying " don't touch it and always keep it in the last" and use it in the brand check everywhere. This may be the possible best practice, but no matter which one is used it is seems the it's still a low level mechaism. It seems that using such low level maximum, checking the existence of a single private field, does not match programmers high-level intentions.

JHX: Well in particular if we use private field to do the check, we may eventually combine the previous two patterns like that. If you use a special brand, you know it's not a getter so you don't need the `in` check. To return to the programmers high-level intentions instead of providing a low level mechanism for detecting the existence of private fields, it is better to directly provide a method that so we can introduce our class dot has instance method syntax to determining whether it's a real instance of the current class, and we can remove the details. So the code would be like this [on slides], and now we don't need to depend on private fields at all. So it's a completely orthogonal the new feature. Although the semantics can be consistent with the private fields. And it would allow programmers to fix the `instance of`.

JHX: This is the idea of that that. Instead of using a single private field existence check we could do a holistic brand check for the class. and it's opt-in, only a class which contains class.has instance would have the class brand. So that's it.

WH: You mentioned a number of times during the presentation replacing the `#x in obj` syntax. Is this meant as a replacement for that syntax?

JHX: Yes, I think at least in most use cases class dot has instance would provide a better solution.

MM: Yeah, I think you touched on this, but it went by very fast. Instead of has instance if it was the symbol has instance then that would make instance of with that class on the as the right hand operator of the instance of reliable. You give instance of integrity and that would support what's already already the idiom programmers usually expect it would certainly make that idiom actually do what people think it does so I don't have a proposal about how to endow the class with a magic has instance method check where the has instance instance is not the symbol has instance, but I think I think that that makes more sense than introducing a has instance method with the name `has instance` because then it creates a conflicting idiom rather than fixing the idiom that's already there.

JHX: I think it's the programmer's choice whether they want to expose the ability. So they can choose to not expose that.

MM: So I think I'm not understanding. I'm seeing a lot of programming patterns assuming a primitive. I think I missed what primitive you're actually proposing such that a class can opt in to this. How is the Primitive opt-in expressed?

JWK: It's expressed by the `class.hasInstance` meta property. If you don't have that in your class you're not opting in.

MM: Is there a slide where you show it?

JHX: Yeah, if your for the class does not have the class dot has instance syntax, then it's a normal class.

MM: Are you saying that you want to magically endow a class with default `has instance` member?

(crosstalk)

MM: Oh, it's a meta property!

WH: What is the opt-in?

JHX: If the class does not have `class.hasInstance`, it does not need to have class brand and it does not need to add the brand to the instance of this class. So for example if it uses a real `instanceof` check, then every class would need the brand and every objects need to have the brand lists. So it will have a very huge memory cost. So that is why it should be opt-in.

MM: So now that I understand. this answers something I was concerned about very well, which is the special power that you're introducing is only available lexically in the class and it's up to the class whether to use the power or not. It's up to the class whether or not to make the power indirectly accessible. It's not something that a client of the class can do to the class and the instance without the class's participation. So that's very nice.

WH: Is it possible to hide a `class.hasInstance` inside of eval and have it take effect?

JHX: No, that will be a syntax error.

JHD: There are many use cases of my `#x in foo` proposal that this does solve. One of which is if you're trying to say, per your example, “is this a Range”. In this case both are lexically only available inside the class; both are up to the class author to expose; and so on. However some of the use cases that I have are where my high-level intention is “I'm using this field, I want to check that field”. In other words, just like I would do a normal duck-typing check in idiomatic JavaScript before I access `a.foo`, I want to see if there is an `a.foo` - so that is something that your proposal does not replace. So the way I kind of see this is my proposal is indeed a lower-level mechanism - and we typically do ship lower-level mechanisms that allow building higher-level ones before we ship the higher-level ones. I see yours as a higher-level mechanism that can already be built with my lower-level mechanism. It supplies many of the use cases of mine, but not all of them. I think that in no way does this replace mine nor can it, but I think that that both can co-exist and that this is in fact useful on its own because when your higher level intention is "is this a Range", your proposal is a more explicit form of that, but I actually wouldn't want my code to say “this is a Range, therefore I'm implicitly assuming that this field exists”. I actually want the code to say "this field exists". You mentioned cross realm stuff, but that really only applies to built-ins - Dan has a presentation later this week about that. Thus, I think this is really focusing on user classes - we could design builtins so their `Symbol.hasInstance` was frozen and worked across realms if we so choose, we just haven't chosen to do that.

JHX: Yeah, I think I agree that if private in has enough use cases then this proposal should not replace that but currently I doubt that, because if you use the private in check. yes, this is the Range. And it means it will have the private part of the fields of range on that. There are some edge cases that in some other cases we can make have incomplete instance, which only has some private fields, but those are edge cases.

JHD: I'm not even using the existence of edge cases here as part of my argument. I'm saying that in the common case it's functionally equivalent that if `class.hasInstance` of range is true, all the fields on Range are present in the common case. I'm saying that in the actual code it is implicit that fact that because it's a range it has all Range fields. I don't want that in my code. I think that's less clean than saying it has this field therefore I can access this field and that is what I want often in my code. I don't want to have my code relying on implicitness, even a reliable form.

JHX: I understand you, but I think they do not have a substantial difference. The difference here is what programming style the programmer chooses.

JHD: That's why I support both proposals, because the programmer should have that choice.

WH: I agree with JHD.

SYG: Agree with JHD that this doesn’t obviate `#x in obj`.

CZW: I'm wondering about the arguments that the private fields are different from duck typing. Private fields are unique to the class So how could private Fields be duck typing typing in the case?

JHD: That's a fair question. I think that the phrase “duck typing” is probably not the most accurate term here. I'm more thinking that the reason that I check a public property on a thing before I access it is because I want to know that it's there before I access it, and that this is the same motivation: the reason that I would want to do that on a private field. The meaning of duck typing is, “does it quack like a duck, therefore it's a duck”, right? I'm not trying to do that with private fields. I'm just trying to be explicit in my code where I reference the thing I've already checked is there.

SYG: Along the same lines of what JHD was saying there, we have talked recently about the idea of extending private fields to object literals and checking narrowly the thing that you want to use, it's going to be there. It feels very JS-y. What I mean by narrow by duck typing I think like JHD.

CZW: So the return value from the super constructor trick, that's being returned by the class itself. It doesn't really match the duck typing concept.

KG: This is just a very brief point. You mentioned proxy transparency as being a problem with private fields - is the intent of this that class dot hasInstance of a proxy for an instance would return true or false?

JHX: I don't think class.hasInstance should change that. I don't mean the proxy transparency is the issue of private fields. What I mean is, if you are you're tempted to use the private field it will have result that it's a breaking change.

CZW: Sorry. I don't understand - does class dot has instance return true for a proxy of the range class?

JHX: It should not pass the test to the target.

DE: Are you saying it should return false?

CZW: Yeah.

MM: Yeah, just just to point out proxies have never been transparent membranes are transparent. So the transparency questions about membranes and that's all.

JHX: Oh, yeah, so I use this word to explain what normally programmers expect.

SYG: If I understand your presentation correctly, it seems like the high-level intention of has instance that you're trying to capture is, in some ways is this like a "true" instance of the class. I don't quite know what that means mechanically. Because of return overrides in JavaScript since you can return any arbitrary object from the super constructor and then have the have your class's constructor install all the private fields on it. Are you proposing class dot has instance this special implicit brand that, would it install or not install the brand on the returned object from from the super Constructor?

JHX: I think it should keep the same semantics as private fields, so it should not if you use the return override all over it. And personally I think the return override trick is a legacy feature from the ES5 era. ES6 classes support that because it want to make the code refactoring easy, but I have to say, most - at least 1/2 of JavaScript programmers never know the return override trick in class.

SYG: That characterization of it being Legacy and discouraged may be true. But if the intention of the proposal is to give some foolproof unspoofable way to get a true instance if it aligns with private fields there is still this corner where it would return true for what some may not consider a true instance right? Because it can be just an arbitrary object returned by the super Constructor.

DE: To clarify, it sounds to me like you're saying that this is a brand that's added at the beginning of the constructor when super returns, similar to methods before any of the fields. The edge cases are in terms of when a field initializer throws an exception. So presumably this would be before that and the check would pass even if certain private fields are missing on the instance and well that this doesn't forward to proxy targets. Is that that is that accurate?

JHX: Yeah, I think this should be like that. The only details may be whether the brand t is installed before all the private fields or after or the private fields. It's a semantic detail which we could discuss in the next stage.

BFS: To my knowledge, last I checked web components do use the effects of return override when upgrading so it would be good to know if this is going to work with them. It's just something to audit and check. Because if it doesn't work with how they're using return override, that's potentially a big concern.

RBN: My first concern is that if we choose to go forward with a meta property syntax off of the class keyword, that essentially blocks the class access expressions proposal, which I know has had some - the sentiment on it has been fairly low as of the last time I presented it, but I haven't abandoned it just yet. I am curious if it's feasible to consider something like this using an infix key word. We could theoretically introduce a new keyword, although it would have to parse with the NLTH condition to make sure that we don't have X, new line, What would have been previously been a valid identifier, new line, another valid identifier. But this could be something as simple as an is keyword with some with the NLT restriction. So wonder if it's possible to consider a different syntactic approach than a meta property Syntax for this.

JHX: I'm open to new syntax. I chose the new syntax because it must be be an opt-in feature. So I'm not sure how infix operator could work because the right side of that it can't be value. So I think it's a syntax problem.

RBN: I see the downside of this being that it's only usable inside of the lexical class. I wouldn't be able to do the same type of brand check outside of range and less I made it a method on Range that gave it - so I add a range has instance method which returns class dot has instance of range and then emulate how we do something like array.isArray. but if this were if this is just just doing a brand check we can see radically use the value and an infix operation that it has it would be much more flexible and more typesafe than instance of because you can bypass instanceof using symbol hasinstance. So I wonder if that would just be a better alternative in the long run in the long run anyways.

WH: Replying to Ron, infix operators using a non-reserved word suffer from the `async of` problem. Sometimes you have a first keyword such as `async` which works with identifiers in the second position, and that conflict is not resolved by “no line terminator here”.

YSV: So I'll also raise what JHD said in the chat - this discussion around syntax may be a stage 2 concern. So we might be able to continue this discussion after we've discussed moving this to stage one, which I believe is Hax's intention, right?

JHD: I support stage 1, but with the explicit qualifier that it's not as a replacement for the ergonomic private fields check proposal.

SYG/WH: Agreed with JHD.

RBN: I support stage 1 for this as long as we're willing to investigate the alternatives and we can talk about the cross-cutting concerns between this and class access whether it goes before it or not.

YSV: Stage 1?

[yes]

### Conclusion/Resolution

- Stage 1, with the explicit understanding that it will not be a replacement for Ergonomic Brand Checks

## Ergonomic Brand Checks

Presenter: Jordan Harband (JHD)

- proposal
- slides

JHD: The proposal is the same as it was back in June when I first asked for stage 3. There have been a series of objections that have been explored between meetings, and in 1 or 2 different incubator calls, and on GitHub. I believe all of the objections have been addressed and that the last point was, would the previous presentation of the class brand checks proposal be a replacement? I continue to believe it would not be a replacement; that it would be a great addition; they would complement each other. So essentially that's where I'm at. The proposal is fully reviewed still because it hasn't changed since all the editors and reviewers last reviewed it; there continues to be a need for it; and I would like to ask for stage 3.

MM: I support stage 3.

WH: I support stage 3.

YSV: I support stage 3.

JHX: I think there is one problem here. If we have the `class.hasInstance` then I think the more in the most important use case could be covered by `class.hasInstance`? So I really doubt - what is the real use case of checking a single private field, one by one? It seems very strange to provide two features to do the very same thing.

JRL: I think this question is coming from the point of view of just classes having privates, but that's not going to be the case. There are currently proposals where objects would also get private fields if you have them in an appropriate scope and that obviously would not be covered by `class.hasInstance` because they're not a class instance. They're just a regular objects. Having a generic key check for private inside of an object is still useful.

JHX: If the main use case is private fields, like private declarations proposal -but that that proposal only stage one.

JHD: That is an additional use case; the main use case is that I want to check a specific field before I access a specific field for my code to have maximum clarity.

JHX: If we only think about the current case, why you should test the one by one?

JHD: I'm not trying to test them all. I'm trying to test the one field that I'm about to access.

JHX: If we don't have private Declarations then then they are the same thing if you know -

BFS: THey're not, I'll get to that later.

YSV: I will jump in here to make sure we keep moving with the discussion, we are in a bit of a loop. JHD has repeated the same clarifying point which is that this is not about a generic test that a given instance is of a given class. It is about checking a specific private field within their class to ensure that when it is accessed, it has that field. The argument is that this is a common pattern in JavaScript similar to checking for a non private field in a non-class context. The counter argument is that checking that the instance belongs to a class would subsume this use, and this is the primary disagreement. I will now advance the queue.

CZW: I'm very concerned. (?) static object privates the syntax or other private declarations those proposals that have a far more advanced stages than those proposals since the most a private field. If private fields exist Jack can be covered by hasInstance.

JHD: My reply is that Brendan has often said TIMTOWTDI - _“there's more than one way to do it”_ - as a response for this type of complaint in the past. I think that it's not actually a bad thing to provide more than one way to do a thing. Certainly part of the use case of private-in is covered by the class brand check proposal, but not all of it. I think that in the event where we have both of them, that it is fine that there's a choice between those two mechanisms, and it's fine if people want to choose to refactor between one and the other. The semantics of class brand checks would be a superset of - or I don't know if it would be a superset or a subset, but you could build them from the semantics of private-in and so there's not actually a mismatch - it works just fine together.

CZW: I'm not thinking that it has no use case. I'm just concerned that this case might be arising from later proposed yet to part of the in proposal has much more advanced stages than those proposals.

BFS: So I want to dispel any notion that these are equivalent. In particular if we have something similar to class.hasInstance. It can't deal with partially initialized objects, which is a real thing. You can have an object that fails to completely add all private fields from the class. Generally this is going to be caused by errors occurring. With this private ergonomic brand check you can actually test and see how far it got along. These aren't the same feature. They don't have the same semantics. They're not seeking to have the same semantics here. We are doing piecemeal checks. So what JHD was describing was exactly that - we can use a partially initialized object still with this, and we can see how far it got in initializing. This is very important if we're to roll back side effects of constructing a class. So if by instantiated in a single private field, it produces a side effect like adding an event listener somewhere, in order to remove a memory leak we need to check for that and we need to remove it. So that is not something that you're really going to do with has instance because if it returns true you're going to go back and still have to deal with accessing all those fields and see errors to roll back those side effects. So that was one of my points. Yeah.

JWK: I'm curious. Does it generally mean if a class is partially initialized, for example, it doesn't install off private fields that are defined as being in abnormal state?

BFS: There's nothing abnormal about it.

CZW: I'm still concerned in the partial initialization case that how could probably in the partial instance? Private in can only detect the partial instance but not - there is no way to recover from it. So it has to be a fatal error in the case.

BFS: Sure, so, let's go back to the example with addEventListener. So one thing you can do is if you're concerned that your class may be partially initialized for some reason, inside of your side effects. You can perform a check to see how far initialization occurred and remove things such as the own event listener that exists on it. So we can't make partial initialization impossible, nor can we make it recoverable - the key is we want to make it detectable. So that's what this is allowing us to do without causing errors by trying to access things that don't exist.

BFS: [new topic] I've got a gist that I use and I've seen this pattern in the wild as well where people are actually attaching class fields ad hoc to objects that already exist. They do this basically to get some semantics somewhere in between WeakMaps and private fields. So we're actually at a case where we are attaching data to an existing value, so we're not changing necessarily the class of the value, we're not changing how it was constructed, but we are actually adding private fields to it after allocation. And so simply put, the hasInstance check is just not going to work with these kinds of use cases. You have to go and do something else to check for the existence of those fields.

???: All right, if I understand you correctly, the has instance check has the semantics - it behaves like adding a hash brand at the end of the class. Private installation checks can also still be a valid case in the has intense check, right?

BFS: We don't actually have those semantics ironed out so I'm going to say no.

SYG: I think one of my got deleted; I had two. so I'll go through the first one which was I think on technical merits I am strongly in favor of designing building block features, which I see as a sign of composability, to express higher level intentions. That there may be opinions that it's not tailor fit for a higher level intention. I want to strongly disagree that that is a sign of a feature that is not that is a negative sign of the future. I don't think that it's a negative sign with a feature that it is low level. So that's the first point and I think Bradley cover covered very well the difference in use case. and how both are useful. And my second point is that I thought we had just agreed several delegates had just agreed to stage one kind of contingent on, that the class dot has instance of proposal is not a replacement for this one. And now it seems like there are blocking concerns on this one because the other one exists, something seems off to me here with the process.

BFS: Yes, I'd agree. It feels like you get more capabilities from this proposal than has instance. So I would prefer it if it comes down to one or the other.

JHX: it's just one thought I want to say it becomes a political issue. Can we focus on the technical?

YSV: Can you be more specific about what you mean by this is a political issue? I believe we've been talking primarily about technical technical issues so far.

JHX: I mean the process, that because - if I understand correctly that is means some delegates only support the `class.hasInstance` to State 1 if we must have also have the private-in to stage 3. I'm not sure whether I understand that correctly.

WH: We asked you whether you would support class brand checks as a replacement of `in` syntax or in-addition-to, and you said you were okay with doing it in-addition-to.

JHX: What I mean is I think the `class.hasInstance` solves most use cases. And I have said that if there are good use case for private-in, that would be OK. Currently I feel that use case are only the use cases which come from another stage 1 proposals, not for itself.

SYG: Bradley did just directly address that point. I'm kind of confused.

JHX: I had questions about that. I don't fully understand that, why we can't use the a WeakMap to achieve the same thing.

BFS: WeakMaps have different garbage collection semantics in particular.

JHX: Okay. So the so the GC Behavior here, I'd like to ask whether it's a spec issue or implementation issue.

BFS: With WeakRefs it's observable.

JHX: Okay, I'm not sure about that.

BFS: If you install a value inside of a private field on an object. It will not fire a weakref finalization as long as that object continues to exist with. With WeakMaps, if the map is collected you can actually see it finalized. That's not true for a private field. Either way, I think that's a little bit in the weeds. My point wasn't necessarily about the garbage collection semantics, but it was that these do have different behaviors between WeakMaps and private fields and people are using those differences, are intentionally going and installing private fields on things not using WeakMaps, myself included. And we're not just doing that. That was one use case. The other was, we are installing private fields, and we aren't guaranteed to finish construction of a class. And so sometimes we install things in private fields that need to be removed for various reasons. Otherwise, we might do things such as leak memory. And so we have to go piecemeal, you know, basically field by field and remove things.

MM: Bradley, I disagree with your characterization of the garbage collection semantics. We very purposely adopted a very loosely specified WeakRef semantics that allows a lot of implementation freedom, and that implementation freedom allows tremendous overlap between what happens in the two cases. In fact I don't see anything in the way we specify WeakRefs that narrows the observability of either one with regard to the other.

KG: Can we move on from the GC conversation? [yes]

CWZ: To reply to Shu, I'm not blocking this one in replacement with class instance just concerned the use cases are still valid. So if there are use cases that are still considered valid I'm not blocking this one, but I'm also concern is that - if there have been any discussions about interop with future proposals like private declarations.

JHD: That's in the readme - there's no conceptual reason why there would be any conflict. If there's any way to add private fields to objects, assuming that we used similar syntax then let's say `#x in object` will work whether the object is an object or class instance. It would still check for the presence of that private field. So there continues to be no conflict, whether we never add private fields outside of classes or whether we eventually add them, this feature will work as expected in both scenarios.

YSV: The queue is currently empty.

JHD: OK, I'm going to ask again for stage 3, or alternatively for objections to stage 3.

YSV: I'm going to give this a little more time because it was a contentious topic.

[still none]

WH: I haven't changed my mind, I still support stage 3 ☺.

YSV: All right, then congratulations. I believe this is silence indicating stage 3. Thank you very much.

DE: Sorry, can I ask that we get a sound check on? The previous time that we asked for this for stage 3 someone had dropped off a VC.

CZW: Yes, I'm not blocking.

JWK: I think Shu’s building block idea and the error recovery case are good to me.

JHX: I think I can't block that.

LZJ: First, the goal of private fields is encapsulation. Unless it is to write test cases. The outside should know the status of a specific private fields if you have such demand public fields should be used or in extreme cases you should use try catch. Second, a more realistic (?) is to determine whether an object is an instance of a class. In view of the inaccurate result of instance of we need a method to obtain accurate results such has instance.

JHD: That's a good point, but the reason it does not apply is that this feature as well as the `class.hasInstance` proposal do not by default provide any access to code outside the class, unless the class author explicitly exposes it. So this feature does not break encapsulation. In fact, it helps provide encapsulation because rather than throwing an exception or needing a try-catch I can test if an argument has a private field and then I can have some fallback behavior that can continue preserving that encapsulation. The problem you're describing, that we need a better sort of `instanceof`, I agree with that! I think this is a different proposal - this actually has an agenda item later this week - and isn't addressed by default by either of these two proposals we were discussing.

YSV: Do you have objections?

LZJ: Yes, I block.

YSV: And what is the reason?

LZJ: Encapsulating?

JHD: This feature does not break encapsulation. In order to use this feature you have to have the ability to use `#x` in your code and that ability is lexically protected and encapsulated. So this feature does not alter the encapsulation whatsoever of private fields.

WH: Do you understand how static scoping works here? `#x` can only be used within the scope of a class.

LZJ: Okay.

JHD: so given that understanding do you have an objection to stage 3? LZJ, it would be great if we could get an explicit confirmation.

LZJ: Okay.

YSV: Okay, so I'm just going to make a final check. To be super clear, we have consensus for stage 3 on this proposal. It has been contentious. To summarize: this does not preclude the previous proposal which would introduce a general check if a given instance belongs to a class. This is a specific goal that is complementary, but separate from the goal this proposal tries to achieve – which is checking the existence of a private field of a given object or class within the context of that class. This is where we are right now. Are there any objections to this status? And are there any objections to ergonomic brand checks moving to stage 3?

[none]

YSV: Final Call.

[silence]

YSV: Okay. Now I will say that we have stage 3. Thank you everybody. Thank you everyone for your patience with that.

### Conclusion/Resolution

- Stage 3

## Extend TimeZoneName Option Proposal for stage 1

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/proposal-intl-extend-timezonename/)
- [slides](https://docs.google.com/presentation/d/1CABEQP_U-vCUxGKXbJmaZKvJZHEdFZZtAHGAOnRbrCY/edit?usp=sharing)

FYT: Okay. Hi everyone. My name is Frank Town Walk by Google on the be a internationalisation team and today we'll talk talk about a proposal extend the Ecma for to to this plane and sorry. Until I can afford to save time format so sorry. Could someone mute? Yeah. Thank you the motivation of proposed. So is that we tried to extend the option in the Intl data format for better better support of time option. Sorry. There's someone still have a lot of noise that was typing to give me a little down. Could you you meet please? Thank you. So currently and until data format format. We have different style for time zone name: long or short. This proposal Basically just adding four other new options - short GMT, long GMT, short wall, and long wall. But what does that mean? so if I run a very simple script that the show is so just for looped into this six different option and either the Intl data format, or you can actually called the dates to Locale time string with that. You will see currently the English Locale the short will show PST the long will show Pacific Time send client, but they are time people. You may want to see a GMT offset or something we call wall time. the PT is an abbreviation for specific time (?). So real use case on the web right now, I think this is probably server-side rendering for example, this example show you the NPR news. They were using ET instead of EST, right or EDT because they simply just want to say this is eastern time or MT, mountain time. Sometimes whenever for example the right hand side we have this financial result release. They just want to say eastern time. This is what we call a long wall. So instead of the Eastern Standard Time it was Eastern. This is another example of what will happen if this display in Chinese, this this is a traditional Chinese. So the current the first two is whatever currently already offer in a coma for two and the lower floor was showing you the what my look like in the traditional Chinese Locale. So for example GMT in some other locale maybe will be localized or have a wrapping pattern around that, but it will show the reference related to GMT.

FYT: so during the stage 0 remember, this is - we're asking to advance to stage one. Okay, so it's not to stage two, but during ecma 402 discussion working group discussion. They are actually originally couple other additional options that were proposed but Mozilla had some concern about payload size. If we have options. We may need to increase more data to be included. The browser so we do some study therefore after that. We actually remove some of the original possible values that cldr data actually provides, but we think that could be a little bit too much. But for what we currently have proposed, for options for the short GMT and long GMT for each Locale.

FYT: So basically the size concern for all the 476 Locale in the cldr - remember when we talked about even those 476, some of those have a fallback, for example simplified Chinese using China they're falling back just simplified Chinese or Chinese, right? So they don't really need to have a duplicate pattern there. So we list a number of items here and it will just look at the raw packs of those patterns only like 1.8 K and compress it, you can gzip is only 392 bytes; it's really small. The long wall is a bigger one, even compressed it is 69k. for the browser to support this show was pretty small to write just 311 bytes mainly because a lot of things were actually already generally in the standard - sorry, the short format. So in the January 14 meeting we discussed that and after some discussion, we decided to bring to tc39 for stage 1 advancement. Remembered acceptance for the stage 1 is to show the committee's wiling to spend people's time to examine the problems space and solution that cross-cutting concerns. As mentioned we have a champion identified. Some details need to be filled out. So that's basically this proposal, it's a pretty simple one.

FYT: So we're kept requesting for the committee's approval for advanced to Stage 1; before there is any any question I can answer for you?

RPR: Okay, there's nothing on the queue. Would anyone like to go on the queue? (pause) Okay, so no questions then.

FYT: No questions. any support or objection?

SFC: I support stage 1.

RPR: Thank you, Shane. Okay, so we've had one message of support. So we just do a final check - any objections to stage one? [pause] No objections. Congratulations Frank you have stage 1. Thank you.

### Conclusion/Resolution

- Stage 1

## Brand checking

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://es.discourse.group/t/strong-brand-checking-in-javascript/557)
- [slides](https://docs.google.com/presentation/d/1-zhONcg-vHS2klj9O9r7JWzeip-OqSIXnzDnXB7iGXE/edit)

DE: Okay. So brand checking in JavaScript, this is a short presentation for an informal discussion. I don't have a big concrete proposal to make. So what is brand checking? We were using this term in earlier presentations this meeting. Brand checking is just a piece of TC39 jargon to be checking whether an object has an internal slot, which is the same thing really as a built-in private field. So internal slots are used to store the state of JavaScript objects that are built into the language or platform. So when do brand checks occur? They mostly occur right before using that internal slot. So before reading or writing one of these pieces of internal state, if you have an arbitrary object, you need to check that that exists and throw the appropriate exception if it doesn't exist. So why do brand checks exist? Most of the time that brand checks are used to check that this internal state can be used safely. So this is in contrast to a fully object-oriented design. These are the equivalent of private fields not public fields, so that means that the class or the language standard in this case is able maintain invariants about them making them safer to use. So there's many many different functions and methods in the JavaScript standard that do these brand checks. It's not at all rare, so lots of functions that are on prototypes so like Date.prototype.getFullYear() or Map.prototype.get(), these all at their first step check that they're working on what they what they think they are, that this value is has a particular brand or a particular Internal slot. It's also used on arguments to functions. For example, the TypedArray constructors, if you call it on a TypedArray or an ArrayBuffer then it will have a certain behavior. And that's done by checking the internal Slots of the argument. If you do JSON.stringify on a Number wrapper or a String wrapper those will be unwrapped due to this particular slot. Promise.resolve does so in a kind of an optimization way; if you pass in a real promise, then it won't create an extra layer of indirection. Array.isArray is a brand check but a special kind of brand check that I'll talk about later. And one example from web platform is postMessage: when you postMessage or do anything that uses the HTML serialization algorithm, such as write into IndexedDB, then there are certain classes that are built into the platform that are brand checked for, and serialized in a predictable way, such as Maps.

DE: So there's a question about how brand checking should work with object-oriented programming. It's been claimed by some past TC39 members who no longer regularly attend committee meetings, that in object-oriented programming - and this isn't a quote from them, this is my understanding of their argument, but - in object-oriented programming you should work with things by their interface and not be doing this this brand checking. So one one instance of brand checking that was es5 and earlier was that Object.prototype.toString looks at this internal brand and uses that to create a string representation of the opening square bracket object and then the brand and then a closing square bracket. The spec used the term "class" actually to refer to this. In es6 this instead became extensible using Symbol.toStringTag with the theory that we should make these things kind of spoofable. And it was a little bit of a funny change because the ecosystem the main use case for this was actually to detect the brand so it's been a bit of an awkward situation, but it hasn't been unfixable because there are other ways to check the brand for every built-in object.

DE: So aside from object-oriented programming, proxy transparency is also a big issue that's brought up when discussing brand checking. So proxies don't in general forward internal slots. Private Fields work the same way as built-in classes and they both - you could think about them almost like a weakmap, in that they both associate the identity of the object to a particular hidden thing. So when you make a proxy around it, that proxy has its own set of internal slots. Internal slot does not go to the proxy Target. So for example, if I make a new Map and I wrap a proxy around it and I call the get method that just gives me a type error. The lookup of the method will work fine. We'll be able to get that function because the [[Get]] operation will forward to the target. But then in the first step in the get method it will check if `this` has a map data internal slot and that will fail leading to a type error. By contrast Array.isArray was decided that this would forward through proxies in kind of a one-off way. Array.isArray looks at the Proxy target, recursively if needed. So the claimed impact of this is membranes. So membranes have to unwrap the Proxy to be able to do the brand check on the underlying thing. Certain kinds of membranes would unwrap both the receiver and parameters, other other kinds of membranes apparently would only unwrap the receiver. This is basically what it means - that the Proxy would bring you back a different function instead of get, that would be bound to the underlying thing but then have the result be wrapped up again. So you can sometimes unwrap the parameters. I'm not a membrane expert but -

MM: The issue is not that there's a special case for `this` in the mechanics of membranes. The issue is that when you're invoking the method - let's take the Top Line example you have. If instead of doing to get through through a single proxy, if you're doing it through a membrane then you would be fetching the get method through the membrane. On your side of the membrane you'd have a proxy for the get method, and you'd be invoking the proxy for the get method with the `this` argument being a proxy for the map, and the entire thing goes back through the membrane which turns into invoking the original get method on the original map. so there's no special case proxy -

DE: Yes, so you can have two different kinds of ways - that the Proxy can wrap that method it can wrap. It unwraps that through the membrane or you can have it that it doesn't if it does unwrap it through the arguments in addition to this value through the membrane (?).

MM: This is getting long so I'll take it to the questions (?)

DE: So another thing that we've been talking about is single realm versus cross realm brands. So in general internal slots are shared across all realms: you can take an object created in one realm and share it to another global object and the methods on it still work. So for example we can take a copy of Array.isArray from one realm and call that on an array from another realm and it will return true. This is true in all of those other cases that I mentioned before, they work the same way, whereas with private fields the private name exists separately for each evaluation of the class. So if we had different Realms, we had a module that we imported at different times in different Realms, they will have a different private name and such a check will return false. There was earlier discussion about having cross realm brand checks. Domenic was suggesting that this be part of built-in modules to make sure that built-in modules can be accurately polyfilled, and the discussion about changing conventions to support building modules didn't seem to proceed. It seemed like instead there was a lot of interest in continuing generally with cross realm brand checks. So I think that model makes sense.

DE: To get a little bit more practical, for use cases for these rand checking functions, we have array dot isarray, but we don't have similar functions for other classes, but this would be very useful. There are certain users like esm and node core that have very high fidelity APIs that need to check the arguments in order to respond properly to them. And buggy checks, at least in node core, have caused real problems in the past. It would be great to have built-in checks that everyone can agree on the meaning of for some of these core use cases. You don't necessarily need an ergonomic API, but something reliable. For the broader JavaScript ecosystem, packages like is map which I think JHD might have written which has many downloads, many dependencies, make it easy to use brand checking even though we didn't provide an ergonomic way to do so in the language. So these are more broadly useful whenever you want to validate arguments at API boundaries. Sometimes APIs want to expose a protocol that can be treated however you want, but sometimes they don't and sometimes it's better to be concrete. So this is my personal - not repudiation but asterisks, that I would put on that object oriented programming. I think it is a reasonable way to design programs to validate arguments and not take everything to be a generic protocol because it just leads you down these paths in the program that you don't expect and creates bugs if everything is suddenly to be completely duck-typed.

WH: Dan, the “Use Cases” slide is referring to use cases of what exactly?

DE: Sorry, why don't I just keep going and then it'll be more clear what it is I'm talking about.

WH: Which kind of brand, realm-specific or realm-independent?

DE: Sorry, Realm-independent brands, that's what this presentation is about. Sorry for not not scoping it clearly at the beginning. I'm talking about making more things like Array.isArray for more different classes.

DE: So we in TC39 do support brand checking in an ad hoc way on each class that we add. So the reason that I got interested in bringing this to committee now is because in the module blocks proposal development, there was a thread here about how do you brand check a module block and you know, we happen to have a method that does: ModuleBlock.prototype.toString. If you call it on something else then it'll throw a type error, but it's a little bit weird to me that we have this this this invariant not adopted by the committee, but just enforced by one single TC39 delegate - I'm not criticizing the delegate, It's just we haven't even evaluated it as the committee, but we do take it as a requirement with our with our consensus based process in effect - that that there should be this way to to brand check, but at the same time we don't have a naming convention for that brand check. Each one is different. Each one has to be through a different API. So I think our brand checking pattern has been ad hoc.

JHD: To clarify, just before ES6 was approved, I brought up the question of `Symbol.toStringTag` and was trying to get it essentially removed from ES6 and deferred till later so we could deal with the fact that it was breaking the brand checking ability of `Object.prototype.toString`, and the general response for the majority of folks in the room at the time - admittedly a much smaller room than now - was “brand checking is icky; we don't want to make it easy, but there is a prototype method on every built-in thing that will check the brand, and so we will just make sure that from now on everything has a way to do this and you can try/catch and do your icky thing”. And so I proceeded to make some packages like `is-map` that now have millions and millions of downloads at the committee's direction. So even though we may not have approved it, the previous committee did say that the ad-hoc method of sticking on a brand check was the way that it would be done.

DE: Thanks. Thanks for this historical context JHD because I didn't I didn't even know that this is this just goes to show that you this proposal that we explicitly and adopt in This is a committee is very important so even - maybe some people think that I'm an old-timer but really a much newer as a community member then people like MM or WH or JHD and I just I just didn't know that history.

MM: Yes. I just wanted to clarify the argument, the historic argument having been one of the people in the room. It was contentious. JHD is accurately representing the pro side that won the argument. I was against doing this, but I decided not to block consensus. I believe that was true for a number of people.

DE: Sorry you were against doing what?

MM: weakening the brand check of `Object.prototype.toString`.

DE: Oh, were you were against adopting the new semantics that ES6 adopted?

MM: I was against it, but I didn't block consensus because overall JHD’s account of what the rationale the pushing forward is is accurate. It's just want to make very clear that it was not the whole room that agreed on that. Some of us just reluctantly didn't block.

JHD: One thing that I regret is that I didn't come up until much later with us an alternative suggestion of making `Symbol.toStringTag` properties be brand-checking accessors, which would have resolved those concerns, but now we’re in a different place.

DE: I have my opinion, I guess I made it clear earlier in this presentation, but I don't know. I mean that's that's water under the bridge now. I guess people probably depend on the extensibility of `Symbol.toStringTag` at this point. I'm not happy about that. But yeah, so I think because brand checking is useful and because we've been consistently providing it for new classes that were added. And I think we should just make a direct API for it. and is the idea for this proposals long been called _Type_.is*Type*. and I have the _type_ in italics to make it clear that that's not part of the name. So for example Map.isMap would be a static method that takes an object and tells you whether it has a map data internal slot. Actually this obviously isn't the final spec text because it doesn't handle the non object case. But the idea would be that rather than having ad hoc ways to test the brand, we have a built-in way that is easy to use.

DE: That's it. Discussion? Should we make a stage one proposal? Does anyone want to champion this?

AKI: To clarify, you're not asking for stage 1; you're asking is this whether this is a question worth exploring right?

DE: Right.

JHD: The lack of easy built-in brand checking does impose costs on the ecosystem. I have 20 to 40 packages that are largely in the same GitHub/npm org like `is-map` that are all for robust brand-checking of things. You're welcome to check them out. They have a lot of usage usually as transitive dependencies of other things that care about robustness. I want those to become obsolete; they shouldn't have to exist. I think that the fact that they have such high usage suggest that people are willing to even incur the costs of having try/catches at run time, and extra code weight, rather than doing the simple but brittle `instanceof Map`, and if people are willing to incur those costs, than I think it is incumbent on us to provide a solution that obviates those costs for them. Type.isType is one solution, some sort of protocol with a single checking method like James' previous proposal is totally valid. I would love to see a stage 1 proposal for this, and especially if there's folks who are willing to co-champion, I'd be happy to champion such a proposal if the committee's amenable.

DE: I want to make a note about Type.isType. At some point when James Snell brought this to committee the response from some of the people arguing this object oriented programming point view was this must not do brand checking, this instead must be extensible like Symbol.toStringTag is spoofable. And I think that's mistaken. I think that defeats the purpose of this API and that it should instead not be spoofable, it should just use the internal slot.

JHD: I agree but I also would be happy to have that discussion within stage 1 on github.

MM: I think that Dan's discussion of membranes really created a lot of confusion that I would like to clear up. When you say map dot isMap of M, and M is a proxy or a membrane and Map is your own local Map constructor - in your proposal, the membrane has no opportunity to intervene and any intervention it did would fail the job. So going back, the thing about this is not that the membrane mechanism makes a special case for `this`, it's that there's nothing it can do with regard to the other parameters that helps because map.isMap is not invoking isMap on the membrane. I'm invoking it on a proxy from the member and invoking it on your own local static.

DE: Sorry for my error here. I think this could be addressed by the membrane system overwriting your local Map.isMap to unwrap the membrane. We do a lot to maintain this patchability, and support for membranes specifically.

MM: so the patch you're talking about would be one that introduces a behavior that's exactly contradicting the behavior we're proposing to make standard.

DE: Well, it would be the relevant kind of brand check within the context of the membrane based system. Like the standard says you can mutate and patch things and then people run code to freeze the global object. The standard saying this checks the brand. Well, within your patched environment, it would be checking whether it meets the brand or whether it's a Proxy of something that meets the brand but like you specific kind of Proxy not just a Proxy.

MM: I'll give you this, that's the start on a longer discussion that might lead somewhere, but there's a lot - that's a much longer discussion. Let me say all together with the proposal as presented being this hostile to membrane transparency. I would be reluctant to see the proposal as presented even go to stage one. I don't think that's essential to what you're saying. I think that this could be made more neutral, and make it first class that examination of membrane transparency issues would be a priority to understand better and to accommodate if it can be accommodated. I don't think that contradicts anything about the intention of what you're asking, if somebody's interested in moving to stage one.

DE: Yeah, I definitely think discussion in the readme for example of how membrane systems could and would be sort of morally authorized to patch these methods to allow this your so I'm not assuming an answer to the question.

MM: [missed this]

DE: Mark and I will follow up in the SES call about this.

SYG: This is more of a clarifying question. the `Type.isType` strawperson - currently you are saying it does not behave like `Array.isArray` with proxy forwarding, right?

DE: Exactly.

BFS: This seems to have some kind of public/private relation with `class.hasInstance`. Maybe these should be combined in some way as my initial thoughts. If we don't think it can be combined this does seem like a useful feature that we could try to move forward with. I could help if needed.

DE: I'd be happy to have your help on this proposal. I don't think it makes sense to combine this with class.hasInstance, because class.hasInstance or the class ergonomic brand checks are ways to implement this protocol or pattern probably.

BFS: (?)

DE: Okay, looking forward to hearing your thoughts offline.

WH: I'm unsure as to the desirability of having cross-realm brand checks. Intra-realm ones seem more useful and are covered by the class brand check proposals. My other question is which types this applies to — would you have `isMath`, `isProxy`, `isJSON`, etc.?

DE: so I want to ask for clarification on your first question. Why? Why do you think it's more desirable to have in-realm brand checks than cross Realm?

WH: I don't want to digress into that discussion given that we're short on time.

DE: Okay, I expect to hear more from you offline then. And then the set of types that would be included: I think it would be most things that have internal slots. Probably we would exempt Proxy from that because of the design goal that you can't detect a Proxy, but include other things, like Maps

WH: I asked about things like `Math` and `JSON`.

DE: I don't see a need for namespace objects to have brand checks. They don't have internal slots.

WH: Okay.

MF: In your presentation you made a few claims about brand checking being appropriate leading to better or more robust APIs and I would say that while I'm supportive of this proposal it's not for those reasons. I support this proposal because people can already create types of their own (classes) and do brand checking of those and I don't see why built-ins should be any different from that. So I think we should allow brand checking but I do not want to encourage brand checking over the kinds of APIs that you showed Allen and Domenic supported in the earlier slides.

DE: Sorry, I don't understand. What do you think about adding like Map.isMap? Are you in favor or opposed to that?

MF: I support this API for brand checking existing because I don't think built-in should be special in this regard.

DE: Okay, Thanks. Yeah, I'll be happy to talk to you more so we could figure out how to formulate the motivation in the explainer.

DE: I want to repeat the call for champions or collaborators. I think JHD expressed interest offline, but anybody else who wants to work together on this, it would be great.

### Conclusion/Resolution

- Did not seek advancement; JHD/BFS and others will bring a proposal in the future seeking stage 1.

## Relative indexing method

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-relative-indexing-method)
- [slides](https://docs.google.com/presentation/d/1UQGlq8t1zfAFa6TPvPpO9j6Pyk4EOv62MFQoC2NshKk/edit?usp=sharing)

SYG: This is not going for stage 4, despite the agenda item title, because when I added it I was not yet aware of the web compat issue.

SYG: So what happened was that we at Chrome had shipped the "at" method in 89, Firefox in 85. So I am not sure if Firefox unshipped it. Both Chrome and Safari found incompatibility in the same site, and then we subsequently unshipped. So Canary in Chrome has unshipped at, and then the on shipping patch will merge into 89 so stable should not have "at".

SYG: so the the compat issue we found in question is with a site called bricklink.com, which is some kind of marketplace for Legos, I think. And specifically there is a utility function on this website, not in a library, there's a utility function in the application code of this website, which uses array instances as hash tables. And one of the existing keys of this application code uses the string "at" as a key in array instances as hash tables. So now that "at" is no longer initially undefined on array instances because it is a method on the Prototype their code was breaking. I have filed a bug with brick link, I'm awaiting follow-up from their tech department; the current trajectory I think is that we will follow up with them and try to get them fixed. I haven't seen other compact bugs reported yet other than this one website, so I remain optimistic especially because the bug is an application code. It is not in a widely distributed library. So I'm hopeful that we can re-ship if bricklink fixes it. I believe this is the only one that I saw, that Safari reported as well, of course if more come up, especially if Library could come up, we will have to reassess the situation. But right now, given that is just an application code in this one website, I remain optimistic that we can still ship with the current name. I'm not asking for any stage advancement, just providing an update to the committee.

MM: This case that you bring up of using an array instance as a hash map. That's really unfortunate. And isn't usage one that would actually block all new method names on array dot prototype.

SYG: Yes. It is a surprise to that they don't use like "from" or something - Well, I guess from is a static method - that they don't use like "map" or something, one of the existing method names as an existing key. I'm not sure how that code works at all but given that it is an application specific code and not a library, my position here is that Chrome will do Reach Out evangelism to brinklink to try to get them fix it. I have confirmation from GitHub issue that Safari is doing the same. So we're just trying to get them to update the site.

MM: Okay, and it let me make sure it's a site and not a library distributed by making copies.

SYG: That is correct. And that's my understanding. I'm fairly confident that I didn't get confirmation from the brick link Engineers, but the specific code in question, the object like the utility name space object where they call this function, is named BL. "BL" I believe stands for Brick, it's not a library.

JHK: Yeah, I want to mention that to the sugar library have an "at" method on the array prototype and from the first version and to to 1.3 0.9. they will have an issue. If any websites use sugar JS at method, and use the feature like the provide like the loop mood or get multiple items because their "at" method supported, so it will be break on the if we land like that. Kevin has has a reply.

Yeah, sorry. It's not enough for them to just have the method to cause breakage because if they're installing the method the way one would normally install a method by doing array.prototype.a equals function that code will continue to work fine for no break. If so, what are they doing in the Chrome Canary which already have the at the code well have different Behavior.

KG: So do you know how they're setting the method such that it's breaking?

JHK: They test whether the method is on the prototype. They fixed this problem in the new versions, but the older versions have it. The problem is not only sugar JS but also core JS has the older string prototype at method, which has semantically differences, and from the 0.2 version until I forgot which version, they just fixed this two or three months ago. So also if any website uses core JS directly, they will have the same problem. If they use it it will break.

SYG: Thanks for speaking about the sugar JS thing. I don't know that Library. I was aware of the core JS as older version issue with the older string.prototype.at proposal. Given that we haven't seen breakage during the time that that was shipped gives me some optimism that perhaps it will be ok. Just because it's in the library doesn't itself mean that there will be breakage. It significantly ups the risks but we are waiting on actual site breakage. If one manifests and we will of course reassess, but one hasn't yet for either Safari or Chrome as far as I can tell.

SYG: I will report back next meeting to see if there's any updates on the fixes and what we should do if there's more compat issues.

### Conclusion/Resolution

- Not advancing, waiting on outreach to bricklink.

## EraDisplay for Stage 1

Presenter: Shane Carr (SFC)

- proposal
- slides

SFC: So I'll be giving this presentation about eraDisplay for stage 1. I want to give special thanks to Louis-Aime for helping me with this presentation. He's an invited expert who's been contributing to our Ecma 402 discussions. Much of the content is from him. So thank you very much for that.

SFC: Okay. So the problem that this proposal is trying to solve involves when you're going to display the era field when rendering a date. Era in the Gregorian calendar for example, is either AD/BC or CE/BCE or depending on your preference. And right now there's a long-standing bug in intl date-time format, which is currently shown on the screen. What happens is when you try to display a year before year one, we don't currently say that this is in BC or BCE. We just display the year number because that's what we do for all the other dates. This can lead to ambiguity and confusion. You might think that's okay: well, maybe this is a weird edge case. But eras in other calendar systems are actually changed quite frequently. For example, just a couple of years ago the emperor of Japan stepped down and handed over the mantle to a new emperor, and when a new emperor takes power in Japan, there's a new era that starts. So in this case the era heisei changed to reiwa. Here in the Japanese calendar the current era does not always need to have the era indicator on it because it's implied, and I'll explain exactly what that means when I get further down.

WH: If you go back a day from January 1st of year 1, which year are you in?

SFC: If you go back from January first of year 1 AD you are in December 31st of year 1 BC. But the ISO calendar defines year 1 BC as year 0. The string representation on this slide is the ISO date, but the rendered date is a Gregorian date, and this is kind of the one big place where the Gregorian and ISO calendars differ — in how they deal with BC. For the Gregorian it is 1 BC. But in the ISO calendar you have year 0 and before that year -1. Good question!

SFC: Okay, so let me go to this next slide. So I think a good way to express this problem in a relatable way is to think about how we express this in life in other situations. So for example when I say meet me at 2 p.m. I mean today at 2:00 p.m. Even though I didn't explicitly say today at 2:00 p.m. that's implied because it's the current day. When I say meet me Friday. I mean meet me on the Friday of this week. When I say meet me on the 12th, it means the 12th of this month, and so on. When I say 1752 it means 1752 of this era. So that's the more general problem that we have here.

SFC: So a few more examples of how era is used. Different calendars deal with eras differently. Calendars that use positive numbers for negative years counting backwards are Gregorian, Coptic, and the ROC calendar in Taiwan. There's some calendars that group in cycles of several years. Chinese and the Dangi calendar from Korea do that i, e.g., 60-year cycles. The third category of eras are those that change the origin arbitrarily like Japanese For example, I was just discussing that. As well as ethiopic. And then a fourth type are those without any additional information that don't really have well-defined behavior for old dates. Hebrew and Islamic and others are in that category.

SFC: So just a few more examples of why this is important, use cases for era in real life. We talk about dates before the origin for example in Gregorian. You might say Caesar promulgated the Julian calendar on January 1st. in 45 BC. This is a case where you would display the era, and there are various other examples here. See the slide for more examples, and I'm willing to go back to the slide if people have questions about this.

SFC: So the author's expectation is that display rules should be consistent over calendars and over languages and the key thing here is that we should always display the expected result, not ugly results. For example, CLDR has various things that says era which is a bit unintuitive and because if you're in the current era, you shouldn't have to display the era field, and that's kind of key takeaway from this for the slides. The other key requirement when we're talking about this era display is that you should display the era if it is required for disambiguating because for example in the Gregorian calendar the current behavior, which is not good, when you can output dates that are ambiguous with each other, and that's really not good. We want to avoid that.

SFC: So here's the proposed solution again. This is only stage one. So the solution is likely to evolve a bit. In intl date time format we propose a new option called eraDisplay that takes three possible values: always, never and auto. Right now we basically only support always and auto if you use the era width field, but it's just sort of a different use case, so era display will have "always", "never", and "auto". auto has the behavior that we've been describing throughout this presentation as basically checking and displaying the era if it's required to disambiguate the year and hiding it if it's not, and always will always show the era, and never never shows the era. So this language, always never auto, is used other places in 402, and I believe temporal is also taking up that same style. So these keywords are consistent with other parts of the ecmascript standard. The other area of exploration that we may take up in stage one is the is to generalize this not only to eras, but also to other fields: hiding the era if you're in if you're in the current era, but maybe also hiding the year if you're in the current year. A common request we get sometimes from clients is like I want to display the month and the day, but I want to hide the year because it's too long or too much information. And right now you basically have to do that manually. Where you can have an if statement to say, okay, if you're in the current year use this format, otherwise use that format, and that's a pretty common use case that you know is basically a similar problem. So we may explore this in these opportunities for generalization.

SFC: We're going for stage one. Okay, so stage one entrance criteria, we've identified a champion. I'll be the TC39 champion for this. The previous slides have outlined the problem and given illustrative examples. We've given some ideas for the high level API, discussed cross cutting cutting concerns and the repository is available right there on GitHub. So I believe this is my last slide and I'm happy to answer questions.

AKI: Shane, you're always thorough.

SFC: Okay, do I have consensus for stage one?

WH: I would say this is an interesting area to explore.

FYT: I support stage 1, I think it's a wonderful area to explore.

RPR: Any objections?

[no]

RPR: There are none. Congratulations. You have stage 1. Thank you.

### Conclusion/Resolution

- Stage 1

## Alleviating the cost of spec complexity

Presenter: SFC and ZB

- proposal
- [slides](https://docs.google.com/presentation/d/142N-BWVV4zWkNogciRMsJk3LAs_EZjnKJDH6CIjD6fg/edit#slide=id.p)

SFC: So alleviating the cost of growth. This is an open-ended discussion topic, but the structure of this presentation is we're going to first lay out a problem that we're trying to solve in ecma 402 in TC39 task group two and ZB will lay out the problem and then we're going to go over our proposed solution to that problem and discuss how it might relate to other standards bodies including this standards body, how it might affect task group one of TC39. But the first part of this presentation is going to be focused on ecma 402 and then we can discuss the implications of this elsewhere. So that’s my little introduction and now I'll turn it over to ZB to go over the problem statement.

ZB: Thank you, Shane. Okay, so just as a reminder and to get you all in our universe: Ecma 402 is a specific subgroup of TC39 with the specific goal of lowering the cost of making JavaScript-based apps work worldwide—so lowering the cost of internationalization. This is another interesting area for our group: we are trying to build APIs in a way that empowers non internationalization experts to write well internationalizable code without much hassle. So without having to learn to be internationalization experts. So those two goals are the core of what we're doing and also the strategy of what we use most of the time is that we are trying to provide lower level building blocks for user user lab components rather. And Building end-to-end Solutions, like how some libraries may approach their API design. So those are the three objectives for 402 proposals.

ZB: So, what's the problem? (next slide please) The problem is that we feel like there is an increased tug of war right now between community-driven feature proposals that expand the scope and the long-term costs of growth of the standard. We see it more and more as one of the things that happen is that over last year ECMA-402 was very successful. So we provided all the foundational building blocks, which means that a lot of users who previously would just use client-side libraries for older internationalisation needs now rely on ECMA-402 to for the foundational pieces, and then come to us and say, you know, if you only add this one or two things then I basically will have all my needs fulfilled–and those one or two two additional things. There’s a long tail, of course.

ZB: We spent some time trying to analyze like what is the coast of growth? Like what is the reason why we wouldn't want to just add all the possible features that anyone ever requests and this is I think shared this is General shared with the whole TC39, but we identify the API surface anything we add to ecmascript has to be maintained forever API quality as we make mistakes, they accumulate over time and lower the the quality of the specification and in particular one variant of this API quality deterioration is that we can make an optimal decision and time T1 but it will come in a conflict with the optimal decision at time T2 leading to an inconsistency in the spec. A good example is trying to standardize something around errors or calendars and then you know two years from now when Temporal is stabilized, maybe this there's going to be a better API design to be done. So If we don't extend APIs cook now we will be in a better position to extend it better later. But of course that's unpredictable at all that. That may never happen. So it's really hard to evaluate then there is a cost of deployment as we increase this spec size. We are increasing the amount of data and algorithms that have to be carried by all implementers and potentially. We also raised the barrier to entry the larger the API surface is the lower the likelihood of someone coming up with a new implementation or adding a new implementation (developing a new implementation) costs more, not just maintenance.

ZB: So the payload thing is an interesting consideration for ECMA 402 in particular because compared to most of the TC39 specification API proposals, most of our proposals come with the payload because one of the values we are bringing is lowering the payload for a website. So the amount of data is a number of data tables that we're going to ship. So do we have a table for number formatting for date formatting, or plurals or something, multiplied by the number of locales. So facing a trade-off between JS engine size and the Ecma for to compatibility implementers may cut the number of locals which would hurt the internationalisation or selectively pick pieces of ECMA 402 and say “we are not going to implement some timezone formatting” or some relative time format because we want to keep our implementation small and that leads to fragmentation of the ecosystem. Both approaches may also increase fingerprint-ability because they make it easier to detect that you're on a mobile Chrome versus desktop Chrome because they ship a different number of locales on mobile versus desktop.

ZB: We also categorized like two types of growth that we see one is a classic API extension, which is usually just a new Option argument toggle something like error display that changes presented. This is sure between TG1 and TG2 because those extensions carry the cost and risk of a new API, but usually if there is motivation to add it, we are in an unambiguous, fairly good, position to make a decision whether we want to add this feature. What is more interesting are the new APIs that usually bring weight and this is fairly unique to ECMA-402, that the API increases the size of the implementation that every implementer has to to carry.

ZB: So this is this is basically the problem scope as we see it right now, and we started looking into how we can solve it in within ECMA-402 so that our decisions are not, you know, don't differ depending on who is vocal at a given meeting and who is there the person making the final decision we were trying to make it a little bit more objective. So here's the framework that we thought about it. Shane, the microphone is yours.

SFC: Okay, thank you. So I'll talk about what I mean when I say high barrier to stage two and three with new entrance criteria. I'll go over the additional criteria that we have started to apply to ECMA 402 proposals within the Ecma 402 task groups. So this applies only to TC39 task group two, but the hope is that we can apply these when we have new proposals come through. Through a test group two we can shape the discussion around these requirements. So the First new requirement is for prior art. In Ecma 402 we see our job as bringing features i18n experts have already solved to JavaScript developers, not to invent new solutions to those problems. We often referenced CLDR and ICU and unicode as prior art the data and algorithms specified sealed your and unicode are of Variable quality and in order to be adopted by ECMA 402 the prior art must be considered best i18n practice by consensus of the ECMA 402 standards committee. So what this means is I think it is pretty straightforward. I think that this is a concern that is probably more ECMA 402 specific. There may be certain aspects of this that are also relevant to TC39 but in terms of ECMA-402 we see ourselves less as inventing new solutions and more as curating them for users on the web.

SFC: The second entrance criterion is that the functionality is difficult to implement in user land. And what the criterion says is that features in Intl must bring something to the table that a third party library wouldn't be able to do with the same level of efficiency and performance. So the champion can cite a heavy Locale data dependency and complex algorithms satisfy this criterion. What this means here is we don't see our job as providing a very large surface of APIs that do something that clients can do. We already see ourselves as providing–this goes into the providing building blocks that ZB was talking about earlier–We want to empower third-party libraries and applications to use ECMA-402 to perform the internationalisation of their components, but we don't want to be heavily opinionated on how they do that.

SFC: So that's the second criterion. The third criterion is probably the most important and I think is also the one that's maybe most transferable to other standards bodies like maybe task group one. The new criterion on stage 2 advancement is “broad appeal,” and this says the champion must demonstrate that their feature request is needed by a large number of smaller web apps or a smaller number of high profile web apps; as a rule of thumb the champion should demonstrate that their new feature is at least as useful as an existing feature in ECMA 402. The champion can provide npm module statistics or a list of user requests. Alternatively the champion can make the case that their future is critical for a multilingual web, even it lacks broad appeal.

SFC: So what this means is for example, if someone is trying to propose to add a intl API they need to be able to demonstrate that this new Intl API is a very highly useful and applicable across the web and there's some examples in there about how they can do that. I think the key sentence from this slide is the second sentence: “as a rule of thumb the champion should demonstrate that it’s at least as useful as an existing feature in ECMA-402”. So you have very high profile features like Intl number format or date time format and then some slightly less high-profile features that are still, you know, useful like relative time format or duration format coming up and so on. I think that new proposals need to prove they're at at least as useful as that second-tier. What we don't want to get into is starting to add like this third tier of internationalization features that you know, maybe have very specific or narrow use cases, but don't have this broad appeal. We don't want to open that can of worms because that would really increase the growth and then we may start running into some of the issues that a ZB outlined earlier. So that's the third criterion.

SFC: The fourth which is ECMA 402 specific is Payload mitigation. So not all proposals are equal; some may require large amounts of Locale data that proposal Champion must verify with browser vendors that the proposal meets their standards for payload size increase and the proposal needs to be modified. May need to be modified to reduce payload size if requested by browser vendors. So this is basically quantifying a little bit more what ZB was discussing earlier, using browser vendors who attend the meetings as sort of this benchmark for “is it too big or not?,” and I think the browser vendors who attend… it’s sort of up to them to make that call.

SFC: Okay, so let's jump into discussion now, so just to review what we did. We discussed the tug-of-war in ECMA 402 between the desire to add new features and the desire to keep down growth of the specification and we discussed a framework for a solution involving stricter entrance criteria for stage 2 and stage 3. So what we want now is we want to hear from the TC39 delegates feedback about what you think about our approach in general and if anyone has experience from other standards bodies who are trying to solve related problems. We would also like to hear that and hopefully what we offer here is something along these lines could be used as a framework for others or evaluation on the TC39 level if this group decided to go in that direction to sort of quantify or codify this tug of war into clearer advancement. And one other little footnote I’ll add here is that the effort of champions to try to promote proposals tends to be very strong and it requires a lot of discipline from the committee in order to enforce these requirements. The consensus driven approach that TC39 TG1 and TG2 both take means that it's easy to block proposals, but it's also easy to promote proposals even if those proposals are not widely useful. So, you know, all of these bullet points require a lot of discipline on the parts of the chairs and the other delegates to make sure that all of these are enforced. Okay, so I'm finished with my section of the presentation.

WH: I'm trying to figure out which way the presumptions go as far as including things which are in ICU, CLDR, or Unicode. On your stage two prior art slide, you say that things should be “considered best practices”. You can interpret that as making the presumption that if something is already included in the CLDR or Unicode, then it is, by virtue of being there, a “best practice.” So therefore we should include all of them? Another possible interpretation is that we do not include that presumption — folks have to argue for these things on their own merits and couldn't use the argument that so we should add them just because they are in ICU, CLDR, or Unicode. I can't tell which one of these two alternatives you're proposing.

ZB: I'm happy to respond to this, SFC. That's a great question and it probably runs through one of the core dynamics that we are trying to document which is that we do not think that the fact that something is in ICU or CLDR is sufficient to justify edition of it. My personal take, I think share it with SFC, is that ECMA-402 should remain a fairly narrow subset of ICU. What we are trying to communicate with through this is that we are not interested in adding APIs that have not been explored by ICU. If there was no need for that in ICU (to the point where ICU contains any given API) then we are very very reluctant to introduce it in ECMA-402 so that is guarding against someone coming to us and saying, know, “here is a proposal for a very cool API”. ICU doesn't have it. But, I don't know, there is a user library that we would like to summarize and we clearly would then reject it and suggest that they first go through ICU and other libraries and ones that have been validated and time and battle-tested. We can evaluate it for example so this is the motivation behind this constraint. The other constraint I would like to fly like in a context of which what you asked about is the constraint of can it be done in the user land, which means that if there is not a lot of data required to provide an API in form of the library then even if ICU does have it, we would rather not add it into the specification in order to prevent the increase in the specification size.

WH: Okay, I like your answer, but I want to make sure we're all on the same page. This was kind of ambiguous. So to make it clear, merely being in CLDR or ICU is not sufficient to demonstrate that something is a best practice?

SFC: Yes, and that's what the second paragraph here is. So this is the second revision of this requirement. At first we only had the first paragraph, but then we had another revision of this to add the second paragraph to emphasize that merely the existence of the feature in ICU, CLDR, or Unicode is not necessarily sufficient for prior art. For a number of reasons, but one of the reasons is because CLDR, ICU, or Unicode are largely built around server-side applications and don't necessarily have the same needs as client-side or JavaScript applications. So that that's one of the things where we sort of rely on the less quantifiable expertise of the members sitting on the ECMA 402 committee to judge. So if the experts on the committee feel that the existence of the feature is not sufficient to call it prior art then that's what the second paragraph intended for.

WH: Yeah. I just want to make sure that the presumption is clear. You don't presume something to be best practice just because it is in ICU/CLDR/Unicode.

ZB: Yes, and definitely in particular with ICU, which is a really really heavily battle-tested ibrary, we sometimes take lesson from ICU is to not do this the way ICU did. But I take it as an action item on us to clarify a little bit further the answer that I gave to your question, and it should be in our contribution guide.

WH: Yes. I think we agree that it's just that, but I could see other people reading the text and interpreting it in other ways.

ZB: right, and I want to point out that as far as I understand no matter how hard we tried this is going to be a bit vague and a little bit up to the human interpretation at the end of the road. There always is a possibility for two people to disagree whether something is sufficiently justified to become part of the standard.

WH: Yeah, I know.

FYT: Yeah. I do want to mention that - I would like to mention that 402 is not only client side, Javascript is server side too.

SFC: Yeah, I'll clarify what I meant by that. I think the spirit of what I meant when I said client side is, we do need to think about client side as an important use case of Ecma 402 in the sense that for example, we're probably not going to be including the ICU charset conversion library anytime soon. Not only because the conversion is not as relevant for web applications, but also because that library has a very large payload, a very heavy payload, that we don't necessarily want to bring into browsers. And I think that we do need to consider browsers as a very important user. Not the only user but it is definitely one that we think about a lot when we talk about ECMA 402. So yeah, thanks for calling me out on that.

ZB: I actually wanted to respond to Frank Frank. I believe that technically this is true, but in terms of constraints and costs server-side can wrap ICU for speed if they want to. That is an opposite of a situation for a client-side apps. So I think that as a standardization if we don't cater to the most constrained environments, then we are going to end up with fragmentation of the standard implementations because what is desired as a good trade-off for Node environment in terms of payload cost is likely likely going to be prohibitive for more constrained environments and they will have to have tough choices about what to include well denoted environment environment. As I said at beginning can wrap ICU for (?) if they want to and (?) if they want to, and anything else that they want to, because on server side. They have “infinite” amount of resources available.

YSV: Hi, so actually this is a great segue into what I wanted to talk about. I think it'll be difficult to translate some of the ideas that were presented here that apply well to ECMA 402 because of the scope that Ecma 402 has to something like TC39 and I want to highlight that, and also highlight something that ZB said that I think might be an interesting way to do it instead. Namely I want to point out the “broad appeal” idea, because sometimes we have things coming through TC39 that may not have a broad appeal but they have a significant niche appeal in that if it isn't enabled by the language it won't be possible to do, or if an invariant is broken then a given property of the language will no longer fit a certain use case. But I really liked what ZB said About this most constrained use case, or maybe we can look at that in another way: if we apply something like this to TC39 as could we define a set of use cases that we are actively working with and understand how proposals are fitting those use cases or maybe not fitting those. This is just something that came up while they were talking and I thought that that might be something other people would be interested in thinking about.

SFC: Yeah, thanks for bringing that up Yulia, and I want to I agree - I think this broad appeal slide is the criterion that's most applicable in general. When you say that there's you know proposals that are required because they have a high impact on a very small number of users and are critical for invariants, that's the that's sort of what's reflected in the second paragraph of this of this criterion, which is in our case we say “critical for a multilingual web” and in TC39's case if they wanted to adopt a similar set of criteria would be - you know, you can figure out how you want to phrase that, "critical to enforce invariants on the web platform" or something like that, right? So that's sort of this spirit here. I also want to talk about broad appeal as - I think this is kind of maybe one area where our goals and ECMA 402 are differing a bit from the goals in test group one because for example, I what I think of, you know, some of the the new features that are proposed for putting on the array prototype or other like convenience functions and even to a lesser extent Temporal do not necessarily satisfy this criterion. I guess it’s more like number two, difficult to implement in user land, like Temporal I think would qualify by these criteria, because temporal is a large enough surface that it is difficult to implement in user land. But we also have moment.js for example, but it has a large payload people don't like including it because it increases their application size. I think that's a really good justification that Temporal would qualify under these requirements, but I do feel that we sometimes discuss proposals in task group one that don't necessarily satisfy these two bullet points: “difficult to implement in user land” and “broad appeal.” One thing I want to clarify from this group is, if this group thinks that these are good requirements. Maybe these are not good criteria. And you know, I think they are, ZB thinks they are but I think it's important for us to be clear that we are applying these to proposals within our task group.

SFC: Do you have anything to add to that ZB?

ZB: Nope, I am looking forward to hearing positions from TC39 on what we're trying to do and how does this sound from the parent group?

SYG: Some of these are as you said, vague—they require some judgment on behalf of the committee. Stuff like broad appeal, whether it’s the weight - whether it's in the binary size or the API complexity side - these are constraints that we do talk about in an ad hoc fashion certainly in TG1. I've never really worked with 402. So I don't know to what extent it already happens. So my question is, is this an attempt by you all to codify some of what is already happening, but on an ad hoc basis to document them all or are you trying to actively shift the Norms of how proposals are motivated in TG1?

SFC: I'd say the first. We're trying to codify and actually write down some of these implicit assumptions that often go into these discussions about new proposals. We're trying to make it so that when—one of my goals in particular, as chair—is to make it so that when new delegates come and want to explore a problem space to allow them to explore that problem space but to have very clear stakes in the ground about “this is is what you know your proposal eventually needs to do in order to be considered.” That's why I think that it's good and healthy for us to have stage 1 proposals and so that we can explore that space, but I want to be clear to all the delegates that if we don't accept your proposal for stage 2, it's not because we don't like you, it's not because we don't like your proposal, it is because we think that the proposal doesn't satisfy these criteria, and that makes it more clear for everyone involved.

SYG: Okay, that sounds good to me. I agree with what YSV was saying before. Some of these are less relevant for TG1. If nothing else some of the metrics are very difficult to apply to just the general base language design. There's you know, there's no locale data to include, and the binary/code size increases from new features are like unnecessary tax that there is really no way to get around it. So I feel like stuff like broad appeal, those are criteria that we already do apply in judging proposals in TG1, though I guess more ad hoc. I think what I would like to see here is - I don't know, more thoughts on the actual metrics that you want to propose because other than that, it's just like we discuss some more and then you say how you feel. How else would you apply this?

SFC: Yeah, I think that this is a step in the right direction. It's hard to get a very exact quantitative measurement on broad appeal, because if you do come up with some concrete set of metrics to measure broad appeal, there's going to be some proposals where the spirit of them should actually satisfy, but they don't. For example If you look at number of npm module downloads or something, you're going to get some features that maybe have a lot of downloads, but don't have the broad appeal the way that we mean, in the spirit of that requirement, and you're going to have some features that maybe don't have the npm downloads, but do have broad appeal in the spirit we mean. So I see this as as evolving and we may iterate, I expect that we will iterate on these bullet points to quantify them in every way we can, but I think that saying that it has to be completely quantifiable is just going to be really hard to enforce and might be counter to the spirit of what we're trying to achieve.

SYG: Oh, yes. I was saying the opposite of “it should be quantified”. I was very worried that it would be Quantified for the same will be hard Quantified and be like the this hard entrance Criterion for the same same reason that you said, where some of these proxy metrics are in fact, they could be misleading and could be used to tell a different story than what actually the proposal is about. So I was saying in the beginning of this presentation, you said something about coming up with metrics as well, and I was wondering - it seems like the most practical way to apply this is as a checklist of like topics that we made sure to discuss in the context of the proposal in question before we we could go to stage advancement, less than like, “please produce some numbers and see if you pass the bar.”

ZB: I share this sentiment; I don't have a good answer to how to remove the personal motivation out of it. In my ideal world I would like us to establish a framework almost like a scientists conducting an experiment, you know be unbiased, assume you're wrong, everything is unproven until proven. And in our case it will be like unless you cannot be successful without extending the API, then you have to extend the API. I would like all the champions to take a side of let's try not to, and the goal of exploration is to find a way to that avoids extending an API, but it seems to me like the culture of the community right now is the opposite, and I don't know how to to approach that.

SYG: I have a response to that I think but it could result in quite a lengthy discussion. I want to do a check on time if I'm safe to raise it or if I should just go on.

RPR: We do have time. We've got another nine minutes.

SYG: So I want to preface this by timeboxing what I'm about to bring up for discussion to maybe just like no more than 10 or 15 minutes. One of the interesting things in the web standard space, if you look at how TC39 operates versus how other web standards bodies operate, some people of course have different opinions on how well we work versus how well other web standards bodies work, something that's very unique to TC39 is we do all our design design up front. That we get together in a room. We don't really prototype unless the champion is motivated enough to do some very early stage prototyping ahead of time during stage 1 or stage 2. We don't really produce any artifacts ahead of stage 3. There's some notable exceptions like the playground stuff with records and tuples. That seems pretty awesome. But that certainly is the exception not the rule. And I think one fallout of how we work, by designing everything up front and then going to stage three and then everybody implementing it, it's really difficult to take a scientific approach as ZB wants for any number of these metrics because our time horizon is like two years. We ship it and then we have to instrument the browser or whatever, and see the uptake, see the how they're used and abused and so on. Other web standards bodies sometimes do things a little bit differently where they don't design everything up front. They incubate and they rapidly iterate in The Upfront stages by doing these origin trial things, for example what Chrome does. We might have different opinions about that that maybe that is not a good way to do things, but that is a way to get more feedback. From your stakeholders and your partners that might care about your a feature rather than just kind of debate things in the room and cite examples of “here some use cases” and “here's the maps of who might use it” and then like six months later implement it and see what happens right like we could significantly change are working more. I'm not suggesting we do that, just presenting a data point. Any thoughts on that?

YSV: I have thoughts on that. I agree with how you characterized how we do our design that we do a lot of the work up front. I think I disagree with the idea that we can't get a better sense of how a feature might do ahead of time without shipping, and I think that's really what the research group is about. So Maybe that's something that can fit in with this, actually utilizing the research group as a part of the suggestions made here. We do have a scientist working with us who's helping us design surveys. I think there is room for that.

SYG: Yes, I think there is room for improvement without the full “Let's get an implementation and put in the metrics” kind of burden, and then certainly I wouldn't want to impose that extra burden. for stage two or three. There's a serious reason we work this way, which is it takes in the beginning staffing and resources to implement all the new features.

YSV: Yeah, I agree. I think that also with the research group, we're still trying to figure out a way to make the research actually useful within the context of TC39 because, as ZB said, part of what we're doing is we're trying to apply what you would find in a scientific study or something similar, to language design. There is evidence for this kind of work, but at the same time it has only been done really in the context of academia and it hasn't really been applied broadly in an industry level programming language that needs to be designed for the needs of the industry. There's a lot to learn there. I don't think that I need to say any more about that. I think everyone is familiar with the work that we're doing there, but I'm very happy to also see how that could be used to help our process. I don't have a clear idea of what that will look like yet.

SFC: Yeah, thank you for raising that Yulia. I'll definitely make sure that all of the task group two delegates are aware of the research group. I know that we talked about a lot here, but make sure we also are aware of that in TG2.

DE:The presentation that Shane and ZB gave was great, and I'm happy to be talking explicitly about these things. At the risk of kind of continuing with it, I want to defend our current development process a little bit. I don't think it's accurate to say that we don't tend to implement during development. For a lot of features that we design in TC39, a polyfill or transpiler implementation is the best, most accessible way to prototype and get real developer feedback, for something like optional chaining and its Babel implementation. You can get all the feedback you need from that, and the native browser implementation doesn't make a big change. With this rapid iteration and prototyping, with origin trials, there remains a risk, especially if it happens in an opaque way with the feedback all controlled by a single vendor and without any standards committee work before shipping that feedback of just certain groups, which you could call partners is emphasized over the feedback of the other stakeholders. I'm happy that we have high-level discussion here and that we include different different people even if they're not they're not enfranchised according to kind of opaque processes of just one company and I think that's how we should continue doing things. Gathering feedback is difficult any way you cut it. Let's do more prototyping of things as well!

ZB: So I want to add to this, the thing that Yulia said. I often find myself on the side right now on ecma 402 where I am more pushing against additions of new APIs and extension of APIs. It's not a role I ever want to serve. It doesn't make me happy, but two criterias that I'm always trying to evaluate against is, how core is it to the domain of internationalization? How core is this proposal versus how edge case it is, like how like if this is something that you know one problem I love apps is going to use then maybe doesn't belong in the core spec and not every browser and engine should carry it. And it is a hard evaluation to make, I don't think we can apply really hard numbers to that. But this is something that that I'm doing and especially the if the API is bringing data, then I'm trying to imagine like where the data should be located in a perfect world from the logistical perspective, should it be part of the app that you're loading over the wire, or should it be part of the environment and every browser every user should have it on their computer all the time? So this is one consideration that I think is Ecma 402 specific. The other that I am doing and Shane mentioned that it's also maybe not so user specific is this concept of, is it possible to implement it in the userland. Will this Library be somehow inferior? Because it's a library rather than part of the standard API. I'm trying to apply that, and I can give you an example (just food for thought, because I think we're running out of time) but something I think a lot about in the context of the second criteria that I mentioned is there is a request right now to add language negotiation. And it's a hairy domain there are some open interesting questions about whether there is one algorithm for language negotiation, or there are multiple depending on the need, but the question also is can you have a user library in npm that is providing language negotiation. Is it hard? No it's not, it's a fairly small algorithm. It's a couple loops. So should it be in the standard library now? The appeal can be broad, you can claim that language negotiation is something that is often done wrong. So if we expose as we kind of help people use the right algorithm rather than being experts. But if we pointed out a good library that does it we would achieve the same goal. So does it belong in the standard or should we push it away because it can be implemented in the standard Library without any data? And we can expose the data that is needed and like low level building blocks and I can see the response being, “well, language negotiation is one of the core internationalisation operations, so a good standard Library should have it.” I don't know how to resolve that. But I think that this is a good example of considerations that I'm trying to use as a litmus test against the criteria that we are setting like what are the criteria are actually helping us make a decision here or is it still like, you know, opinion versus opinion?

RPR: Is there any closing statement or summary of where you're at?

SFC: Yeah, I think we had an effective discussion on these bullet points. I appreciate that. Thank you for bringing up other standards bodies. Thank you for the feedback from all the delegates. Now I'll leave it up to this body. The chairs, the editors, or whoever wants to, if there's anyone from this body who wants to take up the mantle on adding these requirements to task group one stage advancement criteria. I think this is more of a public service announcement that we're doing this in TG2 and I'm happy to continue this discussion offline if there's interest in codifying this elsewhere. So thank you everyone very much.

RPR: Okay, thank you, Shane and ZB. Okay, good. So we'll move to DE, who has a small announcement. Just following on on from the JSON modules yesterday, I think.

### Conclusion/Resolution

- Topic remains open for discussion.

## JSON Modules Revisit

Presenter: Dan Ehrenberg

- [proposal](https://github.com/tc39/proposal-json-modules)

DE: I'm not sure if we had editor reviews or appointed reviewers for JSON modules. I think we should consider it conditionally advance to stage three pending those reviews and I want to call for reviewers. So, any reviewers? Non-editor reviewers? Or do we want to say the editor review is sufficient? I think we can come to consensus on anything, but it would be kind of unusual to not have not have delegate reviews.

JHD: I can do delegate review, as by the time it's going for stage 4 I'll no longer be an editor.

DE: that would that seems a little weird if you are already part of like the editor review process.

BFS: I can do that Dan, at least one.

SYG: Sorry. I completely zoned out. What are what are are we reviewing?

DE: JSON modules. I don't know if they got delegate or editor reviews.

KG: I'm sorry. We didn't have an issue where we track that, but I certainly reviewed it and I'm pretty sure the other editors did as well.

BSH: I was one of the main dissenters which is why I think I should do it at one point. Yeah, so I think it's still good, but we can review it from last I didn't do it officially. I think for a small proposals, one reviewer I think we've done that in the past. I've some memory of doing it in the past. past. So I think so. So do we have consensus on considering this conditionally Advanced to stage three pending Bradley's review

YSV: I could also volunteer as a second reviewer. I've been looking at this. You can put me down.

AKI: You had consensus without having this conversation. Is that correct? The earlier the earlier conversation we concluded consensus.

DE: Yeah, apparently all of us forgot about delegate reviews. Thanks for being flexible about considering this conditional advancement anyway.

RPR: Okay, good. So we have consensus and thank you to Brad and Yulia for volunteering to be the delegate reviewers for JSON modules.

### Conclusion/Resolution

- JSON modules is conditionally stage 3 pending reviews from BFS and YSV.

## PSA about Blink's new "developer signals" requirement

SYG: more than 3 minutes as part of the blink shipping process one of the recent changes. Is that with every new feature jet that ships in the intent to ship for those that may not not know when we ship a new We send out an intent to ship a new feature and this is done for both JS features and web features and other browser vendors do this as well for their engines one of the new requirements in the blink side is that each content including for JS features be accompanied by some of evidence for developer signal. This could be a practitioner saying “I like this,” this could be a practitioner saying “I don't like this,” or “I wouldn't use this” and so on. Selfishly, it would be easier for me if we kind of of remember to discuss these signals during the proposals themselves as an entrance criteria to stage three. I'm not proposing a change. I think we already talked about how developers would feel about these things, but this is a PSA that you will be good for us as a group to remember to touch on the developer signal part of a proposal at some point before stage 3.

YSV: Just to clarify. Is a proposal that for example, we all send intents to prototype when something reaches stage 3 and let developers comment? Because effectively that is what we're agreeing to when something reaches stage 3. And not that for example, the Mozilla standards position ie - what mozilla thinks explicitly.

SYG: Sorry, I am not proposing any changes to any particular vendor's shipping process and intent process. I am just asking proposal champions and other delegates to keep in mind that developer signal is a category that Blink now cares about and we should remember to touch on that subject during discussion. Because if something goes to stage 3 and there is zero mention of how developers are interested or not interested in it could be met with some pushback from the blink shipping process.

YSK: That sounds like a great suggestion. Let's talk about it offline. I'll explain how we've been doing so far and I think we can; it's something I've been thinking about anyway.

SYG: Sounds good.

DE: One thing we could do in committee is we can note in our stage three conclusions, because we have many developers here, some quotes from developers in the committee how they feel about the feature and then you could link to that from your intent.

SYG: That would be awesome. That would be you doing my work for me and I would deeply deeply appreciate that.

DE: Would people have concerns about making the conclusions more detailed like that?

AKI: I think if we wanted to legitimately update the process document or something that it would it would be a handful. Not that I'm saying that we shouldn't, just that it would be a handful, but I think it's just good for us to be forced to be thinking about - when we're about to ship it implementation as a committee. We should be thinking about like, why does anybody care?

YSV: Can we start using the Twitter account?

SYG: Yeah, that would be that would be totally fine.

YSV: like–please.

JHD: The point of getting stage 3 is to get to stage 4, and in the language; we can't get to stage 4 unless it’s implemented; we can't implement it unless we meet whatever engines’ criteria happen to be. So if there's new criteria, I don't think we even need to update the process document - if we're interested in actually getting it shipped then it seems like that's a criteria we should be bending over backwards to try to satisfy, and adding the stuff we've already thought about, hopefully, which is “developer interest” to the notes - it seems like a simple solution.

SYG: I don't want to suggest that this is a hard line, that if there's no positive developer sentiment we will not ship something. It is another input to the shipping process. These will always be traded off in a holistic way for the entire proposal. All right, that was it for me.

### Conclusion/Resolution

- No official conclusion.
