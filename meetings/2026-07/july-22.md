# 115th TC39 Meeting

Day Three—22 July 2026

**Attendees:**

| Name                | Abbreviation | Organization   |
|---------------------|--------------|----------------|
| Chris de Almeida    | CDA          | IBM            |
| James M Snell       | JSL          | Cloudflare     |
| Waldemar Horwat     | WH           | Invited Expert |
| Richard Gibson      | RGN          | Agoric         |
| Caio Lima           | CLA          | Igalia         |
| Dmitry Makhnev      | DJM          | JetBrains      |
| Olivier Flückiger   | OFR          | Google         |
| Nikolaos Papaspyrou | NPU          | Google         |
| Lea Verou           | LVU          | OpenJS         |
| Linus Groh          | LGH          | Bloomberg      |
| Philip Chimento     | PFC          | Igalia         |
| Devin Rousso        | DRO          | Invited Expert |
| Luna Pfeiffer       | LPR          | Invited Expert |
| Istvan Sebestyen    | IS           | Ecma           |
| Eemeli Aro          | EAO          | Mozilla        |
| Ashley Claymore     | ACE          | Bloomberg      |
| Aurèle Barrière     | AUR          | Invited Expert |
| Clément Pit-Claudel | CPC          | EPFL           |
| Dan Minor           | DLM          | Mozilla        |
| Jordan Harband      | JHD          | HeroDevs       |
| Justin Ridgewell    | JRL          | Google         |
| Kevin Gibbons       | KG           | Invited Expert |
| Keith Miller        | KM           | Apple          |
| Matthew Gaudet      | MAG          | Mozilla        |
| Michael Ficarra     | MF           | F5             |
| Mark S. Miller      | MM           | Agoric         |
| Nicolò Ribaudo      | NRO          | Igalia         |
| Shane Carr          | SFC          | Google         |
| Stephen Hicks       | SHS          | Google         |
| Ujjwal Sharma       | USA          | Igalia         |

## call for stage 2 reviewers for 'error code property'

Presenter: Chris de Almeida (CDA)

* [proposal](https://github.com/tc39/proposal-error-code-property)

CDA: We missed, as we often do, one of the items that we must address once a proposal reaches stage two which is the committee needs to assign reviewers. Who would like to be a reviewer for error code property? I hear he's muted, I think. I remember JHD saying he would.

JHD: Yeah, I'd like to be one.

CDA: Okay. Anyone else would like to be a reviewer for error code property?

RGN: I can review it also.

CDA: Thank you, RGN. Very well.

### Conclusion

* JHD and RGN will be Stage 2 reviewers

## Decimal stage 1 update

Presenter: Caio Lima (CLA)

* [proposal](https://github.com/tc39/proposal-decimal/)
* [slides](https://notes.igalia.com/p/tc39-2026-07-decimal/)

CLA: Yeah, so I'm here presenting for JMN. JMN is one of the official champions of the proposal. I'm not a champion of the proposal, but I work with JMN at Igalia. And the decimal is a work between Igalia and Bloomberg as well. For a little bit of context and why I'm involved on this as well, I used to champion I don't know if it was official or not. I work on a decimal back in the stage zero. Like five years ago. So I have a little bit of context of the reasoning. But of course, throughout the five years, a lot of things changed since I came back. And Jesse was not able to attend today because of personal reasons. But yeah, let's talk a little bit about decimal.

CLA: It's a nice time to talk about decimal because there is a lot of other proposals that are moving forward in things that used to be use cases for decimal, and it's important to clarify things. And we also would like to bring back the topic again to ask Plenary's opinion in some parts as well.

CLA: Okay, so it's been a while that we talked about decimal. And I think it's important and from the discussions that I had some time, it's important to kind of understand which kind of problem statement we are trying to solve with the proposal. This is not like the problem statement that is in the repository officially, but I think it's like it's a good shape to try to explain what's the problem we are trying to pursue here. And so at some point. So the thing is that humans and mostly programmers, they used to think arithmetics on base 10 usually, which is essentially decimal. And never like they are doing in writing code, mainly in JavaScript, but in other languages as well. They carry this assumption of that the arithmetic of base 10 numbers will just work as expected. However, if you look for every single famous and mostly used programming language, actually the way to represent decimals actually don't represent decimals, but float point numbers in general is through float 64, which is a binary float point number format. And the thing is that the expectations and how those numbers work mainly on arithmetics breaks the expectation of most people until of course you get you dive deep into the ins and outs of binary float point number, you kind of try to grasp and understand what's going on in general. But what we would like to provide here and that is not really a way to do this in JavaScript so far, is that we would like to have an easy way to actually do those manipulations with decimals in arithmetics in a way that the models the reasoning and the thinking of most programmers in general. So right now, if you would like to do this in JavaScript, you basically need to get a user library and start doing things. In addition to that, if you look to the languages that are as high level as JavaScript, and even some that is lower level than JavaScript at some point, they do have they do provide this easy way throughout either like into the ESTL or other ways in general. But since that is not really a way to do this in JavaScript in plain JavaScript, you just don't have like interoperability in general. So the whole point of the problem here is that like it's not simple enough to do manipulations on decimal arithmetic.

CLA: Try to ground a little bit this statement. I granted some cases of real-world evidence here. On how the expectation of people on binary float point numbers are broken in general. So this is one question that used to be the title of the question used to be like is JavaScript float point number best broken. But like after the 17 years that this question was actually opened, it changed to be a more generic one since the reason is not really JavaScript, but like the binary float point number in general. But this is one of the most viewed and pivoted questions regarding the float point binary float point math broken in general. So this is like this canonical case that I think in a lot of presentations before were used where you have the 0.1 plus 0.2 doesn't equal to 0.3. But yeah, I mean, the thing is that even though it's 17 years question, you can see that the last modification of the question was five months ago. And it's how familiar views for this question. So it's pretty popular. But going a little bit further here, there is this post if you'd like to see like the concrete examples in general you can see like clicking through the link. But there is this blog post from Ricky Reagan where from 2013 where Rick made a study to observe throughout 40 days how many questions for binary float point number and like misinterpretation and misunderstandings of binary float point numbers would arrive in this type of a flow. Which is kind of a question similar to 0.1 plus 0.2. And the thing is that throughout 40 days, there were he was able to map 14 questions. So if you look like it's 18 questions actually. So it's almost like every other day you have someone asking on this. I don't think we would get as much as questions right now on the second flow because the access of the second flow nowadays is not as big. But the thing is that like it tries to bring more evidence to this that the binary float point number actually breaks the expectation for most programmers in general. And of course, like this is not only for JavaScript. There is a couple of questions for JavaScript, but at any language that use binary float point number, Java, C#, and other languages as well, they have those questions coming up all the time. And I think here is a more concrete example of Nicholas one of the delegates here. Accounting software where there was this error probably like the programmer was doing some operations on numbers here. Thinking it was okay to represent basically money in general. And you have those rounding errors just filling up and flowing until the user experience. It's pretty common to see such kind of things in the wild whenever you are like using daily software. But yeah, the thing is that like it's there. And a lot of people don't know. They might be newbies. They might not be newbies, but the thing is that like software and bugs are appearing all the time because of like the misuse of the binary float point numbers. Thinking they are representing decimals at some level. Yeah, I mentioned like briefly that other languages that do have that, but I would like to reinforce this. So if you think language like Java, Python, C#, Swift, Ready, all language that you have some kind of you can do applications as you can do in JavaScript in general. They do provide a way in their standard library to manipulate decimals at some point. And even like languages like C and C++, there's like some proposal going to add decimal into the language as well. So what I want to say here is that like not having decimal in JavaScript, essentially make us have this lack of features compared to those languages in general. And you need to solve this in the user space.

CLA: Okay, so given I gave some introduction of the problem, statement here, and recap, of course, like this is a stage one proposal and there's already a lot of if I five years of work basically of designing and try to pursue the solution at some point. And so far what we have for the decimal proposal is that we have this decimal 128, which follows the IEEE 754 standard. And the idea here is that like for the applications that we think having a 34 significant digits is probably more than enough to think in the use cases. I think the most strong use cases here is the financial one. But yeah, the thing is that like we have this representation of 34 significant digits of decimals. Of course, it's a float point representation. And the API so far is trying to provide a constructor of decimal. An object and you create an object decimal and this object has some methods to do operations like arithmetic and comparison as well. Trying to accommodate the requirements for performance. The idea is here is that like implementers don't need to keep normalizing every single operation. And we have this philosophy of trying normalizing the way out. We essentially means that whenever the decimal is going to reach the programmer's understanding at some point, we will normalize. So whenever you do a dot two string or also do comparisons, you would normalize those values and by normalization here we mean that 1.2 and 1.20, they would essentially like be treated as the same number whenever we have this dot two string or comparisons happening as well. And just to remember like this design came mostly from a lot of iterations that we have in Planetary and even outside Planetary as well trying to accommodate the discussions open into the repository. Of the proposal. And so on and so off.

CLA: Okay, so one new thing I think that most of people involved on those numeric topics, they know. But like it's important to state is that since last time we talked in the Planetary, there were some advancements and some changes on proposals. That I think they relate to with decimal kind of deeply at some point. And to be fair, I think some of them are actually even better than what we had before. So if we take into consideration, for example, now amount and Intl keep to really zero, they essentially solve the issue of canonicalization and keeping information on trailing zeros and precisions and such kind of things. And like it basically makes the life of decimal easier. Takes out this use case but like takes the idea of like transporting and representing numbers with keeping your precision and doing some conversion, etc. much better. Also, in terms of trying to reduce the amount of rounding errors that happen in the binary point numbers, which of course is one of the major use cases for decimal, is the rounding errors that happens in binary float point numbers. We do have `Math.fma` and also some precise both of them are proposals that allow do float point numbers operations without a lot of errors in general. Which would solve part of the problems that we also have for having mining decimals as well. But the thing is that we believe that those proposals, they don't really solve the problem statement of doing arbitrary operations that arithmetic operations and manipulate decimals the way people were expecting general programmers expect in general.

CLA: Okay, so the idea of the presentation was to be brief and actually focus more on discussions happening on the queue and etc. And the whole point of the presentation that I had so far is to ask these questions of do we want decimal on JavaScript? We as plenary as a committee, do we think that it's worth to implement such kind of solution here? And I think those were questions are key points here. So are the cases, the use cases that I presented here compelling enough to justify a new type to manipulate decimal? Is the data model that we have so far okay? And if it's not, what we need to change to accommodate things? Also, the way we are pursuing the design, is this okay to optimize? Or is it hard to optimize or okay to optimize? And I think one of the most important questions here is that like does the object-based API that we have so far solve the problem statement that I mentioned in the beginning of the presentation? And I think that's pretty much it. I would like to go over the Q and like spend the rest of the time discussing if we had like any discussions in general.

NRO: Yeah, in the early days of amount, I know that decimal was kind of on hold also waiting to figure out the data model and amount. Now this amount is stage two. How does decimal fit into that?

CLA: So I'm not sure if I will be like the best person to say that. But the best of my knowledge here, on amount. Amount is taking over one of the use cases of representing some numbers and the precision of those numbers and doing like some manipulations. And transportation at some point. But you really don't amount is not really enabling doing arithmetic operations. Which was like the major case for decimal in the beginning. So I think most of the reasoning of holding decimal on amount is regarding are the case use cases that amount is taking right now enough so we don't need decimal at all? Or do we think like decimal is still valuable to be working on in general? So that's essentially like what I think it is so far. I think the situation also is that and it's mostly like a personal opinion here, but we are having discussions on amount regarding how to do proper arithmetic operations in the decimal space, which we call mathematical value as well. So I'm seeing like a relationship with that if we had like decimal into the language. We could potentially in some cases build stuff from amount on top of decimal. But I don't think like amount is actually being designed to depend directly on decimal so far. It's open in the design to add decimal if decimal becomes a real thing in the language. But like so far, I'm seeing those things more related like that.

EAO: The way we currently have amount, as it was accepted for stage two, is that it is capable of representing amounts wrapping any of the otherwise existing numerical representations in the language, which means that as currently conceived, if decimal were accepted, then the amount would be extended in such a way that it would accept decimal values next to number and BigInt and decimal string values.

Decimal has been presented and conceived—thus far at least—with a specific upper limit on its precision of what it's capable of doing, while amount does not have a specified upper limit on the precision and does support or is intended to support also BigInt values. This means that accepting decimal into the language as currently conceived and proceeding with amount as currently conceived we could not use decimal internally as the only representation of numerical values, because a decimal 128 is not able to represent all BigInt values, for example. But if both of these proposals do advance it does seem sensible for us to continue having conversations and aligning these and this may of course mutate both of these or neither of these proposals as our conversations progress.

WH: Amount solves a somewhat different problem. In Amount, what happens if you convert 0.1 yards to feet? This involves computing the product of the Number 0.1 and the mathematical value 3. The answer you get is 0.30000000000000004 feet because that is the closest Number to the product of the mathematical values of the inputs you actually passed into Amount. So Amount solves a different problem than Decimal. It solves it as best as we can but you will get surprising roundoff in cases where the values you want to pass in can’t be represented exactly as Numbers.

NRO: Okay so right now the amount accepts any type of number but it does operations include 64 space. And so I guess if amount could use decimal to this internal operations, right? Even though EAO said it supports that amount supports a larger space of numbers, it seems like it still costs them to like the weird math one in some cases.

EAO: Yes, if decimal is introduced then for conversions, it would make sense for amount conversions to be based around decimal, which would be in its context quite a bit more straightforward. While amount does not require decimal to proceed, it would be very good before the amount proposal reaches its final stages, for us to have an understanding of whether we expect decimal to be a thing or not. Not a requirement but it would be just very good.

CLA: Does this address your question, Nico?

NRO: Oh yes, it does.

CLA: Okay. So I don't see anything in the queue. But I would like to raise one thing that is kind of important here. So we got some informal feedback in general of decimal as the way we are designing so far. And I'm wondering mainly like for implementers but also like from committee members if we try to pursue in the next scenario, for example, the current design that we have for decimal for stage two, would we have like any conditions from people in general? So I would like to ask like are we satisfied with the decimal that we have so far? Does anybody has any concern of the decimal that we have so far?

JHD: Okay. Yeah, just wanted to continue to restate that I find the use cases very compelling but I don't think that the object-based API solves it and I think it needs to be a primitive in order to solve it. Like I like amount. I'm glad that's coming in. I'm happy with FMA and with sumPrecise and all that. And finding ways to make number stuff better is good but I like the ultimate solution in my mind is still not even decimal 128 just like full on number primitives that are actually just math. Just restating that for the record.

NRO: Yeah, question here. I remember maybe two years ago I was happy with making sure that this decimal object is like forward compatible with potential primitives. We heard many times from browsers that they do not want to do more primitives right now because they're not convinced any of the ones have been ever presented that are like worth it. And so this proposal now was like going towards the direction where we can like retro explain it as just an object wrapper. Was that an acceptable path?

JHD: I mean, I agree that that leaves a technical path open for primitives eventually. But given that the pushback about not wanting to implement primitives isn't a technical one, it's a like resourcing one, or a like prioritization one, I don't I think that will likely not even providing the technical path will still not increase the perceived prioritization from browsers or like in other words, I don't think that it will make the path easier. I think it will make it less likely to happen. Even though it's still a technical possibility. So I don't think that and I don't and if we never end up with the decimal primitives, and we ship the object form, I don't think we've done a good thing.

EAO: This is a question for JHD; could you clarify if your concerns regarding the decimal as an object versus decimal as a primitive are such that your sense is that it is a blocking concern for entering stage two for decimal not as a primitive?

JHD: Yeah. That's how I've expressed it in gentler terms. But yeah, roughly like that every time I think.

JHD: Well, just to elaborate a little bit. What I mean is stage two means it's something we definitely want in the language. And I don't want the object form in the language if the primitive form isn't guaranteed to also be there eventually.

CLA: Yeah, I think the only way to guarantee that is actually placing the same proposals as this one because if we do move forward with just the object, we want guarantee anything on the primitive form as well. Go ahead, please.

JHD: No, I was just agreeing with you. Continue.

CLA: Yeah, I agree with you. Like the primitive one would solve the part of the problem statement where like easy to use is one of the parts that we have. I mean, I do have some feeling the thing you like technically speaking, I also agree with you since I was involved on being implementation. Quite some time ago, I think like it's possible to do as well. I'm just wondering like if this conflicts with the feedback that we have from implementers, for example. So if you ever try to pursue the primitive path here, if what do we need to prove to browsers in general to allow this to be introduced to the language?

JHD: I mean my understanding of the pushback is that BigInt was either some combination of too much work to implement and/or caused slowdowns that required more work to ameliorate or that were not mitigated. And the only way I know of that I can think of to address those concerns is to just implement it, implement decimal primitives in all the browsers and demonstrate that that's not the case, or that that's already resolved. That's a ton of work for a proposal that would need to be that would be still in stage one in that world. So I'm not suggesting that I'm not trying to voluntell anyone for that. And I certainly am not capable of doing that. But I believe that that is a that that would be a path to get to altering those objections.

CDA: Okay. We are right about at time. I want to see if we can get through the queue very quickly. KM, can you be brief, please?

KM: Sure. I mean, I think to clarify on the Bigint one, Bigint's cross-cut the entire engine. So every line of code basically in the engine you need to read and make sure like this thing is appropriate with a new primitive. Like every like anything that checks types, you need to make sure it fits in your like anything yeah, just so much code that you need to go through in order to make those work to like anything that as a new primitive needs to be clamored by like a huge percentage of developers to make it worthwhile, I think, in our opinion. But like as I mean, double-digit percentages of developers need to use it on a daily basis kind of thing. Which so far it does not that we don't believe that's the case for decimal. So I think that's our concern with having it as a primitive.

DLM: Agree with KM.

ACE: So I don't think blocking this proposal just because under saying I won't block it if we can Promise some other thing happens, I just don't think is a great way for the committee to run. So I don't necessarily get it if that wouldn't that. But I will say so we use decimal inside Bloomberg. Yes, it would be kind of cool if it was a primitive, but really it's fine being an API. Like the place is because we only use it in select places, the fact that they can't use operators and they have to use methods to add and do the things is honestly fine. Like it's I don't think it's important enough that it's a primitive. I think the object API will work absolutely like perfectly for the things and that also works for the engine's use case. It works for the yeah, I really would like to try and move past this blocking concern because I don't think it holds up its weight.

CDA: All right. I know people have entered the queue, but we are past time already. Maybe we could do a continuation. But it's not looking great. Please do continue the conversation async in the repo or in the delegates chat. And we will be moving on to the next topic, which is Shane's topic.

### Speaker's Summary of Key Points

* Restating the problem statement of the proposal and presenting current Design and prior art for what would be the solution for Decimal.
* The presenter asks if with current design, what are the concerns from other delegates.

### Conclusion

* There are major concerns with the current Object API and not being primitive. There are also major concerns from browsers to introduce the proposal as a Primitive. Since there was not enough time to discuss everything on plenary, the conversation will continue through GitHub and other means.

## Duration units in Amount and Intl Sequence Units

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/proposal-intl-sequence-units/issues/8)
* [slides](https://tc39.es/proposal-intl-sequence-units/slides/time-units.html)

SFC: Okay, let's go ahead and get started here. So this is sort of a hybrid proposal presentation. It's about Intl sequence units, but it also has questions that are relevant for Amounts. So the title of the presentation has both amount and Intl sequence units in it. And there's an issue on both repositories. So it's a little bit of a hybrid presentation about that impacts both proposals.

SFC: So first, a little bit of a background. What are sequence units? So the Intl sequence units proposal that I presented at the last plenary goes over these. But you can but just to give everyone a reminder, when I say sequence units, what I mean is a unit that has multiple single units inside of it. So a very common so these are some very common ones. So for example, foot and inch. Someone might have a height of four feet and six inches. So that is it's measuring a single quantity, but it's split into two different units. So we call that a sequence unit, meter and centimeter, pound and ounce, kilogram and gram, just to emphasize that these are not just imperial, they're also commonly used in the metric system as well. So and this also can happen with time and duration units. So for example, hour and minute, minute and seconds, day and hour, those are also time or duration units. And there's maybe some subtle differences between when I between the word time unit and duration unit. I'm going to use them interchangeably for the purpose of this presentation because any distinction there is not relevant for the questions I'm going to be asking. But yeah, duration units, time units, one and the same for what I'm going to be talking about today. So let's talk about the status quo for time units in amount and Temporal.

SFC: So time so duration units are already available on the web platform in duration to Intl duration format as well as Temporal duration and what's shown on the top of this slide is code that already works. Where you can go ahead and represent duration units using Temporal duration as well as format the duration units using Intl. And this already works on the top. So the question is more, what happened what happens on the bottom? So the bottom is since we have sequence units now, what should happen if you try to use one with Intl number format? What should happen when we try to use one with amount? So this is a little example of a code for that.

SFC: So we discussed this in TG2. And in the numerics call, but we didn't what ended up happening with that there were two different perspectives that got surfaced with some delegates holding one perspective and some delegates holding the other. And I wanted to bring this to plenary to like discuss like the to discuss this because it wasn't normally when we come to TG1, we like to have like a recommendation. Like the TG2 has a certain recommendation that we discuss. But in this case, there were two perspectives that got surfaced. So I wanted to discuss both of those with the plenary. One of them is leaning toward not including the time units. And focus on guiding developers to the Temporal and duration. And the other is that we should include them to focus on alignment with CLDR and ease of use of amount. So I'm going to go through some of the arguments in favor of both of those positions.

SFC: So first, I'm going to start with exclude time units. So position one, exclude the time units. So the arguments here, one is that duration units have a lot of footgun. So for example, day and hour crosses time zones or daylight savings boundaries. So and month and day, depends on calendar month length. So if you have those specific time units, then you start to run into issues because the two units are not always convertible from one to the other. Two is that durations are complicated to format. So for example, there's the digital formatting style. So if you just pass your duration sequence units into your Intl then like there's a lot of different settings that need to take effect also zero-valued fields. In order to get the correct behavior and we already figured this all out in Intl so argument three is that the web platforms to promote the right way to do things. We just spent nine years designing Temporal so we shouldn't add a worse way to do time units because no matter what we do in amount, it's not going to be as good as the way that we just did them in Temporal. And we spent a lot of time making sure that both Temporal observation as well as Intl observation format like do their jobs well and that they integrate well with each other. So we shouldn't reinvent the wheel. Option four, and this is one of the ones I'm most worried about, is that we explicitly decided to make a separate Intl duration format in the Intl duration format proposal. Instead of overloading Intl number format with the duration formatting options. And if we add duration unit formatting now to Intl number format, then like those lack of duration-specific features will be a pain point for years to come, meaning like people will be asking, well, I have an amount that has a time sequence unit that has minutes and seconds and I try to format it using Intl number format, but it's not giving me the digital form. It's not giving me five colon three zero. Like please fix. Right? And then our answer is always going to be, well, you shouldn't be using amounts and Intl number format. You should be using Temporal duration and duration format. Right? That's going to be our answer. And that's not a really great situation to be in. So I'd be having to keep triaging that for years to come. Problem five is amount is already more general than Intl number format. I bring this up because let's see. Amount support will already support units that are not in Intl. Because amount is not opinionated about the specific unit that's being used. The reason I bring up this argument is because it's counters one of the arguments later in the presentation in favor of including them. This idea that amount and Intl number format need to support the same list is just not the case at all. Amount is going to support arbitrary units that Intl does not have. Intl already throws and formatting non-sanctioned units. So even if amount supports time units, there's no expectation that Intl needs to do the same. And then six, Intl itself even is already a subset of CLDR. It's already narrowing a narrow subset of the sequence units. Therefore, excluding time units is not creating a new class of errors. So if you remember from the Intl sequence units proposal, there's a specific table of sanctioned sequence units that we allow. So for example, we allow meter and centimeter, but we don't allow meter and inch. Because there's not an integer or multiple between them. That's the decision that we made for sequence units. So it's already the set that we don't support arbitrary sequence units. So we're not creating a new class of errors like it's not like we're special casing time units. Because we're already it's already the case that we're only supporting a very clear specific subset of new units. All right. So that was the arguments in favor of position ones.

SFC: Now let's go over the arguments in favor of position two, which is that we should include the time units in Temporal sorry, in amounts and in Intl number format. So I should be include them. Argument one is that we want to align with the CLDR. So sequence units, I mean, unit conversions are defined in terms of CLDR. CLDR ships a file called units.xml. And unit.xml contains definitions and conversions for over 200 units. And the plan with amount is to be defined based on units.xml. And units.xml includes time units. So it's weird that since we're trying to align with CLDR, like we should just use what's in units.xml. Also, there are usage preferences that use the time units. So for example, if you create an amount and you try to use a usage context in order to do a unit conversion, a usage context, for example, is person, height, or road length. And those let you it automatically picks the correct localized unit for you. There's unit context in CLDR like duration media. Which is like the length of a YouTube video, for example. And those usage preferences use time units as well. So it would be weird to not have those be in amount. The second is ergonomics. So if amount prototype convert to can produce these mixed time unit objects, then it seems like arbitrary friction if those valid amount objects can't be formatted with Intl number format. And third one is flexibility. So developers supporting arbitrary unit conversion should not need a separate code for handling time units. Of the arguments in favor of position two, this is the one I find most compelling. Like if I'm writing code, and I'm writing code that does general purpose unit conversion, and then like I can handle all the units, but not time units, then I need to do like if unit is time unit use duration, else use amount. That's a little bit weird. And that reduces some friction. And then while duration format is ideal for dedicated duration handling, it should not be the only permitted approach enforced by our artificial restrictions. And then number four is not a formatting hazard. So what does this mean? So this means that if you do try to format a duration sequence unit with Intl even though it's not as powerful, the formatting is not as powerful. It's still works. It's still fine. It's still like correct I18N. And like if you want more if you want more knobs, then you can go to duration format. But like the default behavior in Intl is not wrong. It'll just format, for example, five minutes, comma, 30 seconds. And like you can't configure that further. And if you want to have more knobs, you just use the existing duration format.

SFC: All right. So these are some of the questions that I had for discussion today. So basically, how do we deal with time units in both Intl sequence and amount? And these are some of the questions, for example, of call sites and like what the behavior should be for each one. And I wanted to sort of hear some from other delegates because we already discussed this in TG2. I wanted to seek if there's any other perspectives that we were missing and hope guide us to a direction on this. Let's see. Got a couple topics in the queue. Why don't EAO, why don't you go ahead and go ahead and do your topic first?

EAO: One new question that came to my mind as you were talking about this. Is the consideration of how, if we end up in a world where amount supports time sequence units, but Intl number format does not, and if I do have then an amount with time sequence units, is your expectation then that `Intl.DurationFormat` would be the tool that I could use to format that?

SFC: I think that's an interesting—so your question is could you format an amount with a Intl duration format? And my answer to that would be I don't see why not.

EAO: Okay. Because this then leads to asking if I have such an amount and I call its `.toLocaleString` method. Is your expectation then in this scenario that the options bag there would be a duration format options bag when it is a time-based amount and a number format options bag when it is something else?

SFC: It's an interesting question. I think that it's one that we would need to discuss further. I'd expect that there would be some of the friction about this point three, which is that like if I'm doing like if I'm writing a generic amount code for unit conversion, I still need to have like a if time unit is sorry, if unit is time, then do this shape of options bag because the options bag shapes are definitely not the same at all. So there's still a little bit of friction if the two locale string has different shapes depending on the shape of the options. So that's a discussion that's a question we would need to discuss. But like I don't see anything philosophically wrong with that. It's just a question we need to discuss in terms of developer ergonomics and expectations.

EAO: So the reason I'm asking this is to lead to pointing that I believe that you are presenting that there needs to be some level of a link in the discussions on what we end up supporting an `Intl.NumberFormat` and what we end up supporting in amount because these relate to each other. And I mean, on that topic, my overall position is that `Intl.NumberFormat` and amount should both be completely fine with the time units that we already support formatting in `Intl.NumberFormat`. In particular, as I'm relatively certain that the envisioned `Intl.NumberFormat` sequence unit formatting is for time units a strict subset of the functionality provided by `Intl.DurationFormat`. And therefore, should pose no conflict if we just supported them.

SFC: All right. I don't see any other topics on that one. So let's go ahead to PFC's topic.

PFC: I'd like to point out that the design of the `Temporal.Duration` type involves many choices about how to convert duration units into other duration units. APIs could make different choices about that and those choices would also be valid depending on the use case that you want. We made certain choices in JavaScript based on what we think the use cases are for users of JavaScript. But for example, we saw in looking at analogous APIs in like CalConnect, that they made different choices. I don't know if the Unicode stuff involves different choices about duration units, but I would really like to avoid that we have two facilities for handling duration units in JavaScript that make different choices. So the kind of choices I'm talking about are like, are you allowed to convert between seconds and minutes or not because there might be a leap second, or are you allowed to convert between hours and days or not because it might be a DST day. I don't really have a strong position on whether Amount should support the duration units. I do have a strong position on not ending up with two things that make different choices about duration units.

SFC: Thank you, PFC. You have a reply, EAO.

EAO: One thing to note that the envisioned spec for `Intl.NumberFormat` in particular does not include any conversions of any sort in that it is structured in a way that we are just formatting what the user is directly asking for. And seconds never become minutes.

SFC: All right. I think the next topic on the queue would be WH.

WH: I find the arguments for position 2 (include time in Intl number formats) to be convincing. I don't want the arbitrary friction of the use of Amount with time units being different from the use of Amount with a mixture of time and distance units. That's just arbitrary friction for users that doesn't accomplish anything. A lot of things that Temporal solves are non-issues in Amount: In Amount you never add a duration to a time to get another time which is where leap hours and such come in—those just do not appear in Amount at all.

SFC: All right. The next if the chair is going to advance the queue, it looks like next on the queue would be RGN's topic.

RGN: Yeah. If you could go back to your questions slide. Regarding question one here. You know, position 2 I believe was put forth by me but just to get it on the record here. Amount should definitely support single time units. It would be utterly bizarre for them to have a special exception in a protocol and API that is otherwise completely unopinionated. You can use arbitrary well-formed strings as units with the current design of the proposal. So there's no reason that there would be a special rejection of time units. Similarly, and extending that, it should support conversion per CLDR like we just talked about with WH… hours between hours, minutes, seconds, etc. CLDR also supports conversions that don't exist even in Temporal, like years to quarters and vice versa. These conversions are well understood and are not really taking place in a Temporal domain. They're taking place in a generic Amount domain. These are conversions that can happen just by virtue of our understanding of what the units are, without having applied any special cases to them. And it's useful. You would want to be able to have a generic program operate on units generically. I'll pause now to see if SFC has a reply before moving on to my next topic.

SFC: Yeah. I put a reply. Yeah. I'm yeah. I put a reply to this topic so it kind of also tying in a little bit with what PFC is saying. So I think that Temporal made some decisions about which duration units are convertible without needing a reference point so that there's a relative to that you can use in Temporal duration to do like conversion between any of the units and then if you don't have that if you don't have relative to then you can only convert within a subset of the units. And Temporal made the choice to allow for example data hour without a relative to which is a little bit you know uncertain because of the whole you know 24 hour like there's not necessarily 24 hours in a day. But that's a decision that Temporal made but it does definitely does not allow days to months and months to years. So we'd need to evaluate that against what's against the decision CLDR made. The decision currently in units.xml is that you can do hours to days is okay and you can do months to years which is I didn't really agree with that when they did it but they decided to allow months to years but they don't allow days to months. So like if we wanted to align with Temporal and also support the conversions of the time unit in amount then like we would be differing a little bit from CLDR in the sense that months and years should be not convertible. So that's the main comment there. Like I think that in my opinion that's the furthest we should go is like you know supporting these in amounts but under the constraints of Temporal. That's sort of the like furthest that I think we should go in the direction of support. So that was my comment.

RGN: I think that's plausible. Unlike the acceptance of any well-formed unit, conversion is something where you have a sanctioned list. We don't have the ability to convert arbitrary units because we don't even understand arbitrary units. So to take CLDR as a starting point and constrain it down to what Temporal supports without a reference point is reasonable. To remove conversion completely is not reasonable.

SFC: EAO is next on the queue.

EAO: Question SFC. Do I understand correctly that your position then is that if amount conversions are restricted by Temporal decisions, then because Temporal does not include “quarter” as a thing, that conversions between years and quarters should not be supported?

SFC: I mean I think CLDR defines more time units it supports for example centuries and decades. Right. And fortnight and those have well-defined conversions to their base unit the way that I would define quarters is that like we'd need to have some interesting discussions on whether quarters are convertible to months or convertible to years. And once we make that choice then like quarters should just be in either the year bucket or the month bucket. You know something like decade and century is obviously in the year bucket. Fortnight is obviously in the day bucket. Is quarter in is a quarter defined as three months or is it defined as one fourth of a year? Interesting question. Right. That's a decision that would have to be made so I don't think that we wouldn't support quarters but we'd need to define what the semantics are.

RGN: Well the semantics are already defined by units.xml in CLDR. Either we support them or not, but we wouldn't redefine them.

SFC: Well we can't use units.xml for this case because units.xml has month defined as one twelfth of a year which is not the semantic that Temporal has defined. And I agree with Philip that we shouldn't define that semantic that's different than the Temporal defined semantic.

RGN: I'm willing to negotiate on that later. I think this is a fine point inside of a bigger discussion. My position would definitely be that if it is supported it does not deviate from what is defined by CLDR.

SFC: EAO's next.

EAO: Could I ask SFC you and or PFC or you both to take the lead in looking into the CLDR units.xml to identify these specific conversions that you believe should not work the way that they are defined in units.xml? My suspicion here is that it may turn out that the only one that is between months and other units that ends up being problematic, but it would be great to get you guys to basically take the lead on identifying the problematic ones.

SFC: Yeah. I did look into that a little bit before this presentation and posted a comment on GitHub and I agree that I believe months is the months and as an extension quarters are the main like deltas.

PFC: Sure. I can take a look as well.

EAO: Thank you.

SFC: All right. I think we've finished that thread of RGN. So RGN do you have a new topic?

RGN: Okay. Yep. Next one relates to Amount question number 2 here. Where again, just like I mentioned for the previous point, because Amount is currently on a track where it's constraining units only on well-formedness and it doesn't need to understand any associate semantics, lack of support for sequence time units as expressible in Amount instances would just be perverse. That you could have bushel-and-peck but not hour-and-minute, for instance. This does not imply conversion support. It doesn't imply any special semantics, just that because arbitrary units are supported, that should include time unit sequences. If it goes in a different direction, if special restrictions apply to sequence units that don't apply to non-sequence units, then we end up with a sanctioned list like exists in Intl and that's fine. But as long as constituent units of a sequence are allowed to be arbitrary, which is my understanding of the current state, then arbitrary-with-exceptions is a terrible spot to end up in and one that I would reject.

SFC: All right. I've got a reply to that one. So a related topic in the amount proposal one that we haven't completely resolved at this point is like the degree to which amount should be opinionated about sequence units. So we agreed that amounts supports arbitrary units but does it support arbitrary sequence units? And there was some interesting questions especially involving how like the dot value field behaves and a lot of these questions go away if we say that amounts supports only those sequence units where the units are at least convertible from between each other. Like at the very least like if you have a new amount of a meter and a second. Meter and second are not convertible so amount should at least like there's many ways to. Restrictions but it should at least not allow that one meter and second. And if it does not allow meter and second then naturally it would not allow month and day. If month and day are not convertible but it would allow or it could allow for example day and hour. So long as day and hour are convertible. So that would be one self-consistent mental model.

RGN: It's self-consistent only to a limited degree, like if it allows “smoot” as a single unit it has no idea whether that’s length or time or mass or whatever. And if “smoot” can participate in a sequence then this is what I'm talking about. If units whose dimension is not known can participate in sequences but units whose dimension is known might or might not be able to, then that’s a bad API. It's better to say that “meter-and-second” is a fine unit string. It's a sequence of well-formed single units that Amount doesn’t know how to do anything special with. Just like it doesn’t know how to do anything special with “bushel-and-peck”.

EAO: Just wanted to check SFC, my understanding of your position here would be that it should not be possible for example to have a year-and-day Amount and for this to be formattable, even if we end up with a model where this the formatting of this would go through DurationFormat which does currently support for example year and day as a thing that can be formatted.

SFC: So in the position that I just articulated before which is the one where Amount is opinionated about which sequence units that it allows then year and day would not be a valid amount. If we go with the RGN's sort of hybrid version where year and day is allowed as a string but does not have meaning outside of that, and in the world where we use Intl DurationFormat to format these then let's leave that as an open question. Let's leave EAO's question as an open question . If both of those decisions overlap then that's an interesting question to answer.

SFC: I'm next on the queue. So I wanted to look a little bit to one of the comments Waldemar made about the output of Amount conversion. It's one of the I guess number two here position two number two which is I just wanted to sort of go a little bit more into the how people feel about the conflict between this here position number two and position number five which is that it's already established that Amount is more general than Intl number format like amount will be able to likely support bushel and Intl number format does not contain bushel until someone comes to us with a compelling argument that we need to support bushels. Intl NumberFormat is unlikely to support bushels. So it's already the case that Amount is not formattable with Intl NumberFormat. That's already the case. And given that that's already the case how does that tie in with this ergonomics thing where it's already the case if you call convertTo and you get out a bushel that's not going to work with Intl. If you call convertTo and you get out a minute and second is it really a different expectation that that would work even though the things you get out of convertTo do not necessarily all work. Like is this concern a valid concern? EAO you have a reply in the queue.

EAO: Are you proposing that we end up in a situation where you could have an amount that is formattable but that if you apply some conversion to it and you end up with something like for example a sequence unit of whatever that this would then not necessarily be formattable.

SFC: I'm saying I think that I think that's already the case. I mean bushel is a unit of what? Volume? A weight or volume? I forgot which. And like it's already the case that if you that like if there's some CLDR units that there's already a unit preference or you can just directly ask for that if you start with what would we say? It's a unit of volume I think. Yeah. So if you already start with like.

EAO: I think bushel is supported as a CLDR units.xml unit but I take your point that there may indeed be pairs where we support the formatting of a subset of the units in a single category that is internally convertible.

SFC: It's definitely the case. Yeah. One example is even in like distance there's a lot of distance units that are not in Intl. There's a lot of for example like area units for example. Waldemar go ahead.

WH: I don't understand this hypothetical. Are we talking about a hypothetical situation in which Intl does not understand what an hour or a second or a year or a month is?

SFC: So Intl knows what those are and it like it can format a single unit hour and minute already. This is just only about the time sequence units. Sequence units of time. Is what's on the table.

WH: Okay. I'm not that interested in the case in which Intl doesn't understand how to use a month in that time sequence. I just don't see what the point of that hypothetical is. Intl does understand what an hour and a month is. So what are we talking about here?

SFC: We have just a few minutes left in the time box. It's only been five people who've been talking. And one of the points of having this on the TG1 agenda was to get see how if there's any other delegates that have input. So if there's anyone besides me, WH, EAO, RGN, and PFC who have thoughts on this I'd really appreciate if you could enter the queue.

JRL: Or they could speak directly. They don't want to enter the queue.

SFC: Yeah.

JRL: We do only have a little over a minute left though.

SFC: I'll also go ahead and if you don't feel comfortable speaking now and you're still formulating your thoughts on this topic you can always contribute on GitHub and these are two of the links you can use. This is the one for Intl sequence units and this is the one for proposal amounts.

SFC: I'll go ahead and start dictating a conclusion.

### Speaker's Summary of Key Points

* We heard input from PFC as well as from WH. That adds to the input that we had already received from SFC, RGN, and EAO.
* Constraints of Temporal could come into conflict with the constraints from CLDR.
* Overall the question feels largely unresolved but I feel that there is room for having a compromised hybrid type of solution that could address some of the concerns from both position one and position two.
* The other large direction that needs to be investigated is the degree to which amounts should automatically pick between an Intl duration format and an Intl NumberFormat when formatting an Amount. And that's a new suggestion that arose from this discussion that the champion should also go and investigate further.

### Conclusion

Continue iterating on the proposal, taking the new perspectives into consideration.

## Linear Matching

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/michaelficarra/proposal-linear-matching)
* [slides](https://docs.google.com/presentation/d/19Y18Lt165cSwqLI7K7aeA6IbSp9FOC1psrC2_MfaLs4/edit)

MF: Linear Matching for stage one. We presented much of this content at the previous meeting. I'm presenting this on behalf of our champion group that also includes AUR and CPC, who are both here and will be able to participate in our discussion. So the motivation for this proposal—this is going for stage one. The motivation for this proposal is that the regular expression denial of service is a vulnerability that is incredibly common today. CVEs are issued for it constantly. It's very, very easy to accidentally use regular expressions in a way that causes them to be evaluated in greater than linear time. It's also tricky to detect these because they may not be triggered until you receive a specific kind of input which may come from end users, whether that is a benign end user or a malicious one. This is a particularly bad kind of issue because the program does not just throw or something. It enters an unrecoverable error state. It just hangs for effectively forever. This is a really, really bad kind of issue. There are linting plugins that can somewhat detect this. They're not exactly reliable because the spec doesn't actually make any performance guarantees. There are different engines that may do things differently. So they're not really an actual solution to this. They should be used in the absence of this but still aren't an alternative. And if we ask users to do this via a library or something, this library would both be very large to ship for anyone who wants to use regular expressions, a very common feature, and also much, much slower than a native implementation.

MF: So I just want to talk about some use cases. These are effectively user stories. So we often have programmers that want to take some kind of input and produce a regular expression from it. This happens both in that programmer's code where they explicitly just create a regex from some kind of generated string or in libraries where there's globbing libraries or something where they pass in something that changes in different executions of the program and can produce regexes that sometimes have this behavior.

MF: It's not just creating the pattern from unexpected inputs but also passing unexpected inputs to an existing pattern which can lead to surprising behavior. I said that testing these regular expressions leads to an unrecoverable error. Well, it would be nice if the programmer could specify a way to recover from this state, whether it be from timeout or resource exhaustion or something. There's plenty of times when you can give a reasonable fallback and there's just no way to write that today. Also often the person that is writing the pattern is not the person that's testing the pattern. So we should be able to communicate the safety of this operation, right? Right now you just pass a regex to somebody and they don't know whether it's safe to test, or on what kinds of inputs it'd be safe to test. So we need to consider that case as well.

MF: And I've been thinking about and talking about this. We've come up with a couple of different components of what could be the solution here. This is not going for stage two. So we're not looking for agreement that we are going to go with any of these, but we're demonstrating that this is not a dead end. There are ways to solve this. And we want to just run through a couple of options we have here.

MF: So one thing we could do is that we could have some indicator that—you could ask a regex whether the engine can match this regex in linear time. And this would be a way to expose those engine differences that I was referring to before that linters wouldn't be able to statically differentiate.

MF: Another thing we can do is have an `exec` variant, or variants of the various regex methods that have guaranteed linear time evaluation. And if the regex is unable to be evaluated in linear time, again allows you to specify fallback behavior, maybe via throwing. We can also say that when constructing a regex, we want to say that all uses of the regex test methods will be expected to be evaluated linearly, and if you're not able to do that, fail to even construct the regex. And we can do that via something like a flag on the regex literal. And I refer to this as well as a possible solution.

MF: We can pass second parameters to these fundamental regex methods that indicate some kind of timeout or resource limit after which the backtracking implementation could fall back to a linear implementation. Because often it's not always better to just use the linear implementation. You still want to use the backtracking implementation sometimes because they will commonly be faster. But when the engine realizes as it's evaluating it that it's not making progress or not making progress as efficiently as the programmer wanted, it can be asked to fall back to the linear implementation instead which will, in practice for that regex and that input, possibly be faster.

MF: I also want to think about certain regex features that we know should be very easy for an engine to implement in linear time. So maybe we can make perf guarantees and then the things that the static checks are doing could be stronger so that they can actually tell you when you're using something that's outside of the guaranteed linearity set. Unfortunately, I think we would have to be very conservative here because this is still a field that is actively being researched. As we talked about last time there are certain features that until recently weren't even known how you could implement them linearly. We wouldn't want to require that kind of thing because that is just pushing everybody up against this bleeding edge and really quite a burden. But for many features I think it would be reasonable to be able to provide those guarantees. And spec perf guarantees are not a new thing. We do similar things with sets and maps and stuff.

MF: I want to briefly cover prior art. A lot of other languages have the ability to do linear matches. There's different strategies that languages take. So this is like a selection of them based on the different ways they do this. So some of them just don't include features that they don't know how to implement linearly. Some of them, like Ruby, use this memoization strategy. There is a library called RE2 that can effectively I think generate implementations of a regex engine in different other languages. .NET passes a flag that disables backtracking and also disables features that would use it. Yeah, and Golang has a regex that just omits the features. There are also JavaScript libraries—as I said RE2 generates an implementation for Node. And then there's incomplete implementations that I was mentioning before that are kind of a burden to ship and won't ever be anywhere near as performant as a native implementation.

MF: There's also been some experimentation on this in engines. V8 has an experimental engine that is not complete, it's not fully up to date with the language, and I don't think it is actively maintained, but there is a flag where you can enable a regex flag which is like one of the solution spaces that I had covered earlier. They have an `l` flag. I don't remember the exact semantics of it, and I'm not going to guess.

MF: So here's my problem statement for stage one. The problem is that there is currently no built-in way for programmers to match regular expressions without the risk of catastrophic, unrecoverable failure. We should do something about that. And I would like stage one. So we can go to the queue.

Okay. First up we have KG who's still typing.

KG: Yes. I am in support of this. I do feel kind of weird about proposals which would expose engine differences. Like I'm uncomfortable just saying ask the engine if it can do this. If that's a thing which would be different across engines. But certainly that's not something we need to nail down right now. That's just like I wanted to mention that since you brought that option up. But I support this for stage one.

OFR: I think that's a good point and it's also something that I struggle with the current version at least all the possible solutions. And so I'm not sure it might actually be something that we should think about first before advancing because if we don't see any way of making it predictable then that's kind of yeah that is actually a big problem I think. So I think it would be quite problematic if—it's not even an engine difference in that sense because it might even change between versions and it's not like it's not like basically any update could change this the response whether a regex can be matched in linear time or not. And I think that would be a pretty bad situation. So if we don't see a way of designing around that problem then I think the proposal really has a problem.

MF: And you say that would be a pretty bad situation. Why is that? If what they're doing is a test whether they can execute linearly and then either running the regex or having fallback wouldn't they just go into the fallback case, which is a normal expected behavior on other browsers or different versions of your browser?

OFR: I guess the question is a bit: would it be useful then if you can never rely on getting the linear case and also like a completely compliant engine could just always return false, right? So.

KG: Yes. Although I want to respond to MF first. I don't think you can reasonably assume they will have a fallback. I like to put asserts in my code. I was doing this literally this morning. I added an assertion to some SQL code that it didn't do a full database scan because I want to find out with an error if it does a full database scan for that statement. But it's not like I have a fallback. It's just an `assert`. And I would absolutely expect people to start doing this as well. And the thing that would then happen if the engine updated and this became non-linear is that their page would stop working. Which, maybe that's the thing that the page wants, but that doesn't mean that the engine is going to be okay shipping that change and breaking the page. So I don't think that's a reasonable assumption.

KG: Also, OFR was saying this is maybe a problem for the proposal because if we can't find a way to do this deterministically but I think several of the things MF proposed wouldn't rely on exposing engine details. There's definitely ways that we could do something in this space that would have the same behavior for any implementation.

KM: I agree. I think developers are going to expect that once something worked and it deployed it's never going to like to unship that or change in any way. I've seen that with so many other features that I just highly doubt I would ever not see that. But that's possible here. Once it becomes linear it can never be not linear. Would be the answer. Or you just have to lie and actually ship something that's not linear and pretend that it is linear.

CPC: Just reacting to this question across browsers. I agree that it would be odd to have something that exposes perhaps an internal detail of the browser as will you do this linearly and maybe other browsers and will you do it now but maybe you'll change your mind in a week or something. But we could imagine once we start focusing on actual solutions at a later stage to say we will specify a subset of the regex language that must be supported linearly. So that you would not be having a guess at what the browser supports currently and will support in the future but instead the standard could say: for that subset linear support must be provided. And at that point you have uniformity across the browsers once they implement that part of the standard.

OFR: I just reread the prompt statement and I think it's totally fine with this problem statement. So I think we're good.

RGN: One of the things I'm wondering about is whether linear time is actually the right cutoff as opposed to similar adjacent time complexities. Such as quasi-linear maybe even just subquadratic. Like there's a very rich space here looking at the prior art slides. Are all of those literally linear or are some of them just faster than quadratic or faster than exponential?

MF: Off the top of my head I'm not 100% sure but I believe they are literally linear. My co-champions might be able to answer more detail.

AUR: Most of these completely linear in the size of the string but most of these are typically not linear in the size of the regex. And also many of these say they are linear engine but are not but are quadratic in the size of the string in case you are doing natural rather than match. So you're right that there is a diverse ways to interpret linear term.

RGN: Okay. Yeah. Once we advance into actual proposed solutions I wouldn't want to mislead in that way. But if they are literally linear then that's fantastic.

MF: Yeah. And given our problem statement I think we would consider it a success even if we do not achieve exactly linearity. If we just make subquadratic guarantees or something like that it would still satisfy the problem statement.

RGN: Yeah. Actually I guess just jump ahead and delete my future topic. I absolutely approve of stage one with this problem statement. It's very well crafted and works for me.

WH: We should be careful what we're quantifying over in the discussion. I've been assuming that we're talking about time linear in the length of the input string. However, you can have a regular expression engine that is linear in the length of the input string but, for example, exponential in the length of the regex. And so linear does not always mean fast if the regex is user-specified.

SFC: Yeah. Just to note that the Rust regex crate which is linear has several paragraphs in the top level documentation page explaining what it means when it says linear. And whenever it says linear time it puts it in quotation marks and it defines it as being the linear in the product of the length of the expanded regex and the length of the string. And it also is very clear that when we say linear we don't necessarily mean fast. We just mean linear. And like it could be linear with a large constant factor but as long as it's not exponential. Right. And I feel like that is the same vibe that MF is going for here. Like you don't want to have a regex that can cause your program to get into an essentially infinite unrecoverable loop. And that's the guarantee that at least the Rust regex crate which serves over 90% of use cases in the Rust ecosystem that's the constraint that they've been using.

AUR (on queue): in reply to Shane: yes but that statement from Rust does not apply to counted quantifiers r{n,m}. Also does not apply to match_all.

OFR: Since you mentioned our linear engine and there was a bit of a question regarding the status I just wanted to expand a bit on that. So we do have this linear engine and it was added to the code base some time ago. And the thing is I don't so there is no plan to ship it I would say. And the reason for that is that there is a distinction between the worst case matching time and that's what we're talking about here. And there is also the average case time to match a regex and that's actually what's important for how fast the web feels. And so for us it definitely going to be like basically the more important the more important property in almost all of the cases is going to be the average time. And that's always going to be faster, to the best of our understanding with our two implementations, that's always going to be better with the backtracking implementation. And so effectively this kind of limits the design space of this proposal a bit and in two ways. Like one way where it limits the design space is that we cannot just use linear by default or add any kind of mechanism that would push users towards using linear by default. It always has to be an opt-in feature because it's only reasonable when you're actually worried about this exponential time blowup. And the other limit is basically that at least for us I think the only way to implement this proposal would be to effectively ship two completely separate regex engines in V8. And I'm not saying that's off the table but I'm also saying that this might be something that we say that is just too much given the use case of it. But I mean it really like I don't have a finished opinion on it but I just want to make this caveat here. Like the implementation burden for supporting this L flag for example would be quite high I think.

MF: Yeah. I agree with you and I wanted to make sure everyone does understand that we do still expect the backtracking implementation to be faster most of the time. That's why, in our explored solutions, I personally lean toward the ones that use the backtracking implementation until some resource exhaustion and then fall back to the linear implementation.

KM: I agree with OFR about having a second implementation. I think also one problem though with the bail out and then going back to the linear thing is that like we know for example that like the tier up counters for deciding when to go to the next optimization tier impose pretty large overhead on code. I think upwards of sometimes up to 5 to 10% performance overhead of just counting to figure out should I try to optimize this further. So that count might lower the average for the regular expressions which in and of itself might be unacceptable. In the average case because it's probably very rare for regexes to actually care about that. It's possible you could pass some flag that says to do this and then bail out to the regex engine. Which I guess leads to the second part, which is, what's the adoption story here which I think you kind of covered a little bit. But I guess I want to double-check. I'm assuming we're not going to—I think a lot of developers when they reach for a regular expression they don't necessarily understand the nuances of how regular expressions work; like all of the memes online are like about some crazy regex that nobody understands but does something, they just kind of grab it and use it with understanding it. Is the story we're going to try to tell that you should always try this one first? I would assume not based on our discussion but then we probably need some other description of how we're going to recommend on MDN or somewhere else, when to use this, why it's useful. I think there's a risk that people use tools that are not appropriate and we create more confusion by adding more of them. And is that worse than the cases that need a linear time regex today but you get the backtracking ones and have problems because of it.

CPC: So I agree that we don't have an entirely complete story on what the adoption path will look like. Personally I think there's something slightly scary if we say most of the user base does not understand the nuances and we have been providing them a default that isn't safe. And it does go faster on average but it is quite unsafe. And so I think at least we should have the safe version available. Then there would indeed be a valuable discussion around how do we push people perhaps towards the safer option. It's a bit unfortunate to be in a world where the default option is the unsafe one. I think one thing that's encouraging on that front is the fact that in the Rust ecosystem, despite the fact that there exists backtracking implementations that are on average faster I have seen very few large Rust libraries reach out for those as opposed to the de facto default one in the community which is Rust Regex and is linear.

AUR: Yeah. I was just saying that I wanted to reply to OFR that of course shipping two engines is a lot of work and that makes a lot of sense. There are some algorithms that you can just slightly modify a backtracking engine in order to get linear time complexity. It has bad memory usage but it would still satisfy this requirement. So that could be one way forward. I'm not saying of course that it is a way forward but maybe that's something to consider.

MF: I believe that was the strategy that Ruby uses.

OFR: Clarifying question. So is it basically like—could you just rewrite the regex basically in the front end or what are you referring to?

AUR: Not really in the front end. It's more like you're going to save which parts of the regex you have already explored for each input position. And so if you end up in a configuration that you have seen before you can already say to the engine okay please terminate. So this means you have to write a bit more to memory of all of these configurations. You have already explored but it could be turned on or off depending on whether or not you are looking for this linearity or not. And you have to do it in a bit different way specifically for ECMAScript semantics rather than in other languages but it is still possible. Does that answer the question?

OFR: Okay. Yeah. I guess sort of. I mean just maybe as a bit of a background like basically the regex engine in all of the engines are basically JIT compilers themselves that optimizations that have heuristics that so I cannot immediately know if this intuition maps to it and if we would even have anywhere to store some kind of side data there. But yeah. Okay. Makes sense.

KG: Oh. Okay. Yes. Just a question. Is a match with timeout in scope? Like that does solve a number of these problems if you can just call `.match` but be guaranteed it never takes more than you know one second. Would that be something you would consider in scope for this proposal?

MF: Yeah. That's what's on the screen right now. That's what I presented as part four.

KG: I guess I was distracted by taking the notes. Okay. Thank you.

CPC: Just a quick reaction to that. So yes it's in scope. There's a subtlety as to whether the fallback behavior once you run out is to fall back to a linear engine or whether the fallback behavior is just to throw an exception and say "out of resources". Of course throwing and being out of resources is safer but it still doesn't give you quite as much flexibility right because you are now having to recover from the exception. Your regex didn't work. What do you do next?

KM: This kind of goes back to something I was saying before—you're doing back edge counting, that incurs a pretty large overhead and so that might not even be possible for the generic case. It's possible you could like you wouldn't have to have a second engine but like you're everything will run slower in that mode. Whether that's that I'm not saying that's necessarily a dealbreaker. I'm just saying that the if it ran all then I think a timeout runs into all sorts of weird problems like anything measuring time gets nebulous because like what does that mean and like what happens? There's no like guaranteed time like if like you know the operating system doesn't schedule your process then like what is are you counting wall time or are you counting CPU time? What are you counting? And then specifying that seems really hard. So I'm not sure that that necessarily works either.

MF: I just want to say that if we went with an API that's like what's on screen, these would be people who have asked for it. I wouldn't say you're making everyone slower. You're making everyone who's asked to use it slower. Which seems reasonable.

OFR: I think some engines do that by default, not? /eom

CPC: Yeah. There was just a separate answer to do we want to have these fuzzy timeouts that are based on time? Saying there's precedent in the ecosystem. For having timeouts based on wall clock time. In many of the APIs of the web.

KG: Yeah. Just seconding that and also like for the case that I care about this for it's just I'm basically protecting against attackers and I don't really need to have a fallback and I don't really care if the timeout is precise, I just need it to not blow up. Like that's the only guarantee I want.

KM: Yeah. It's understood that first of all I guess setTimeout is not part of JavaScript spec itself. That's part of WHATWG or W3C so it's not part of the core specification. I mean basically every runtime implements it but it does not mean it's part of our thing. We don't have any concept of time elapsing in the JavaScript spec. So right now as far as I know it's also setTimeout is a lower bound on the time. It does not have an upper bound. It doesn't say this must happen within this time frame, it says something will happen after some time frame which is a bit different. But I agree that yes the goal here is to prevent total exhaustion which is probably fine. It just might mean that like it is a "please do this" specification without any real normative effect because there is no way to actually affect the outcome that we are mandating.

MF: `Atomics.waitAsync` exists. Which also takes a timeout that we have now specced.

JRL: We have a bunch of plus ones on the queue. Then LVU.

LVU: Okay. I was wondering if it might since we're throwing ideas out I was wondering if it might make sense to have like a generator version of exec that would yield once it's done "enough work" and what enough work would be would largely be implementation dependent. Then it's up to the author to decide what that means for their use case whether they want to use a time measurement or some other criteria, whether they want to take the regex size into account or the input size into account but the API doesn't have to encode anything. It just needs to yield. And that is also to the point that was just mentioned around. I just don't want it to blow up, I don't care about the precise time, and I think that most use cases don't care about the precise time. They just don't want it to be too long. But also as I've as I was also in the queue to say I would support stage one because at this point it's not about the particular solution.

MF: Yeah. I think that's a good idea and we'll include it in the solution space that we look into during stage one.

WH: I'd like to reiterate that linear time does not mean that it doesn't blow up. We're talking about linear time in the input string. It might be exponential time in the regular expression. If you are letting users pass in arbitrary regular expressions to a “linear time engine” that’s only linear in the length of the input string, it might still blow up. So you might still want the timeout.

CPC: Or we could specify linearity in the regex as well right?

WH: That's impossible.

CPC: Why?

WH: It's impossible to have something which is linear in both and supports commonly used features such as counted quantifiers.

CPC: I think that's what Rust regex implements right?

WH: No.

CPC: I believe the v8 engine also does.

WH: There are interesting corner cases and caveats there. If you read the caveats, you’ll find that Rust’s engine is not actually linear in the number of characters in the regex.

CPC: Okay. Maybe something worth thinking about as we approach stage two then.

LVU: For the generator version at least that depends on when it yields. Which is TBD. I think it could maybe cover both cases.

JRL: Okay. So up next we have a bunch of plus ones. But before we get to that I'm assuming that MF you're going to ask for stage one. \[MF shows "Stage 1?" slide] Excellent. So for the affirms: we have JHD plus one plus one for stage one would love to see stage two with a flag and an exec timeout. DJM saying plus one for stage one. Chip saying plus one to stage one, the problem statement is persuasive. PFC with plus one. SFC with plus one, thanks for the well phrased problem statement. LVU supports stage one, unsure about the right solution. CDA supports +1. MM supports +1. WH supports +1. So a lot of agreement here.

MM: I want to take a moment for the but on my supportive stage one. I do support stage one because all of my objections are not stage one blockers. But the whole direction that we spent a lot of time on things like timeouts, I object to any solution to this that introduces dynamic non-determinism. Having a subset that is guaranteed linear and having the thing differ statically among engines or even among versions of the same engine is static non-determinism. It's not dynamic non-determinism. Timeouts or anything like timeouts is dynamic non-determinism. And dynamic non-determinism whenever we introduce that we introduce a whole set of other problems that enable side channels and we've done a lot of work in Hardened JavaScript to quarantine sources of dynamic non-determinism so that you can create constrained execution environments in which you cannot measure duration. And therefore you cannot read timing-based side channels.

MF: Is it not possible for you to do similar things with overriding this API to have no timeout or something?

MM: I don't think timeout improves this API in any case. If there is a compelling reason to have timeout be the solution to these problems then it would be worth having an extended conversation. But I just don't find the timeout idea (a) compelling and (b) introducing it does create all these other problems. And it's only worth negotiating complex solutions for the others to those problems if timeout is a substantial added benefit to this API which it is not.

CPC: MM, can I ask a brief clarification question? Prefacing this with, I'm not a fan of timeouts either. But would you consider it dynamic non-determinism if you had an engine that attempts to run a backtracking algorithm for some time and then falls back, maybe not even user configurable time, but if you pass the "I want this to be safe" flag then it might decide to run the backtracking engine just in case it gets lucky for a little while and then falls back to a known safe implementation that is linear. Would you consider that to be dynamic non-determinism?

MM: What is observable in the absence of measuring duration?

CPC: Only matches or does not match. So it would not differ from calling the linear from the start in this context. Without time.

MM: I'm sorry. So for the same inputs would and the same version of the same engine would it sometimes match and sometimes not match?

CPC: It would not. And so I think I understand your objection better now. So it would not. What it would do is, it's essentially an optimization that says let me try for a little bit to see if my backtracking engine is fast enough for this and if it's not it falls back to the linear engine and gives you a deterministic answer every time.

MM: It gives you the same deterministic answer?

CPC: That's right.

MM: Okay. Yes. That's perfect.

JRL: Okay. WH.

WH: Supporting stage one.

JRL: All right. So that gives us I think nine people who are supporting plus one. Are there any objections to stage one? Okay. I don't hear anything. So congratulations.

MF: Thank you.

### Speaker's Summary of Key Points

* the failure scenario of regular expressions today is unacceptably bad
* it's really common to run into this and there's no good existing solution
* we should give programmers a way to use regular expressions while avoiding this failure scenario

### Conclusion

* Stage 1

## `Intl.DateTimeFormat` Alignment With Other Standards

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/eemeli/proposal-intl-datetime-alignment)
* [slides](https://docs.google.com/presentation/d/1JAb9AFDNdgrcDMS24iTZPTqi5p3uzHLr8JDZOI-5CYM/edit)

EAO: Excellent. `Intl.DateTimeFormat` alignment with other standards is a new proposal looking to advance to stage one here. This is something that came up during the TG2 call we had immediately before the deadline so this has TG2 support for proceeding, and it's something coming out of some discussions we already having with folks at W3C and at Unicode.

The motivation or the problem statement I'm going to read this out that we'd like to be solving for here is that active work is happening beyond TC39 in the web space for designing API shapes for datetime formatting. Users of the web would benefit from the same formatting options being available in HTML, JavaScript, and Unicode MessageFormat, as this would make it easier for developers to make use of them. If the JavaScript datetime formatting API can be extended to provide a solution that also works for other parts of the web stack, the same API can be available for all users.

What we have then right now in `Intl.DateTimeFormat` in the constructor, we have effectively three categories of options that are available to be used. We have the locale and matching options, which are available whenever you are calling this. And then we have two separate sorts of buckets. We have the style shortcuts and the datetime component options. And these buckets are not compatible with each other. So if you use something from one of these categories, you can't use anything from the other category. When you're formatting, this is an existing state of affairs that we have now. And this has been the case for a while now.

Now, the thing that has happened recently is that during the web engines hackfest, LCA presented and is championing a proposal for HTML to introduce localized time formatting without JavaScript. The idea that that proposal is working towards is that HTML already has a `<time>` element that doesn't really do much at the moment. And the intent is to add a `format` attribute to that one, which would end up making the contents of this `<time>` element be a localized formatted representation of the datetime.

In addition to the format attribute, this proposal includes a whole bunch of other options for how you do datetime formatting. And this is setting the stage effectively for, hey, we need to have a discussion about how this works because some of these are options or option values that just simply do not exist in ECMA 402, in particular datefields and timeprecision. And then the calendar and timezone options also have an explicit “input” option value referring to take the value from the thing that is being formatted.

A couple of the options that are being introduced in the HTML proposal have effectively a different spelling of the option name compared to what we have in ECMA 402. And you might be asking why. And the reason is that what we have in 402 is not necessarily what is the best current state-of-the-art possible thing for datetime formatting. We've ended up needing to do a whole bunch of design work as a part of the Unicode MessageFormat work for datetime formatting. Because like with the HTML `<time>` element, it’s a situation where we need to define in a new context how we do datetime formatting. And one of the dimensions that we need to consider here is that the current shape of the API we have in 402 allows for nonsensical things. Like the example here, which is formatting a time as just a month and just a minute, leaving everything in between out. And you end up with something like "July at 36", which doesn't make sense and should effectively be prevented from becoming a thing because this is a mistake. And so what we've ended up designing in Unicode MessageFormat is an API that draws quite a bit on other current work that's been done on datetime formatting APIs, particularly for the ICU4X library, which introduces what it calls a semantic skeleton structure, which is driving the new proposed options structures.

And so the short form of the ask here is that we should figure out a set of options that work everywhere and this is the proposal to, hey, let's do something in the JavaScript space about this.

The starting point here that could work for this is that we introduce two new options to `Intl.DateTimeFormat`, which would be extending or clarifying exactly what happens when you're using some of the style shortcut options. `dateFields` would take one of the values presented here, and is about what part of the date that is being formatted is included. `timePrecision` is defining what time fields are included in the output. One important note here is that we're only here talking about adding new options, not about adding actually new capabilities, in that the new options—there's an example code in the HTML PR showing how you can map from all of these new option values into the datetime component values that we are already supporting. So this is not a proposal that is proposing to add any new data that needs to be carried in implementations. It does not preclude the possibility that an implementation might want to do some customization that would require new data, but no requirements for such are intended with the work here.

Another part of this is we think that there's maybe one or some work with the slightly different spellings of names that we need to resolve somehow. `dateLength` is the proposed option that is to be added to HTML and Unicode MessageFormat. And that could be introduced as an alias for the `dateStyle` option that we already have. Alternatively, we can and should be discussing with the MessageFormat working group and with WHATWG regarding, hey, could we consider actually changing the spelling of the proposed options there. Note here that changes to both HTML and to the Unicode MessageFormat are possible for this in particular because the HTML PR is still a PR. It's at stage one at the WHATWG process. And for Unicode MessageFormat, the date time formatting functions are well-defined, but there's a bit of a chicken-and-egg problem for that spec in particular with respect to the semantic skeleton definition at ICU4X becoming finalized before it's introduced as final to the Unicode MessageFormat standard.

Another alias that I do believe we ought to be introducing as a part of this work is what we call the timeZoneName option. What this option is doing is defining in what way the time zone part of the formatted date time is represented. And I would argue and we've ended up also the MessageFormat working group saying that `timeZoneStyle` is a better name for this option.

EAO: And so that's it. I'm here asking for stage one, happy to take and answer any questions or discussions we have. About exploring this space on making working towards having one set of formatting options for date times in particular be available pretty much everywhere in the web stack. Happy to go to the queue now if there's anything in the queue, which looks empty at the moment.

USA: Yeah. Let's give it a minute. Maybe folks could register active support for stage one.

JSL: Support for stage 1.

SFC: +1 for Stage 1 given the slide \[with the stated motivation]. I think the slide is currently being shown is a good problem statement. I think the solutions need to be explored, but I agree that it's a problem.

EAO: Absolutely.

LVU: Support for stage one.

USA: Barring further support, I think you have stage one.

EAO: Thank you. That's all.

USA: Congratulations. Well, that was quick. Would you like to dictate a summary of points or conclusion?

EAO: I'll write it in the doc.

### Speaker's Summary of Key Points

* Active work is happening beyond TC39 in the web space for designing API shapes for datetime formatting. Users of the web would benefit from the same formatting options being available in HTML, JavaScript, and Unicode MessageFormat, as this would make it easier for developers to make use of them.
* If the JavaScript datetime formatting API can be extended to provide a solution that also works for other parts of the web stack, the same API can be available for all users.

### Conclusion

* The proposal was accepted for Stage 1 with no discussion.

## Private declarations

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-private-declarations)
* [slides](https://docs.google.com/presentation/d/1Cmk_vpi6yID9dJjZqqSfKMhvYmO2xXGRakAxcXvHq4s/edit?usp=sharing)

KG: All right. Thanks very much. So private declarations. This proposal is not going for advancement because surprise, it is in fact already at stage one and has been for the last like seven years. But I expect many people have forgotten about it in that time. Justin was previously championing it, but has not had time to work on this. But I'm hoping to bring it back. So what is this? Basically, private fields as you are hopefully aware are currently a class-only feature. But they are not like this is not intrinsic to how private fields work. It's just sort of an artifact of like the syntactic limitations of how they can be declared right now. Private fields are really a kind of thing which is associated with a scope. And can be attached to an object. It just so happens that right now the only scope in which you can declare a private field is a class body. And doing so will automatically attach said private fields to any objects created by the class. But this is like not an intrinsic part of them. It's that's just a description of how they currently work. The proposal is to allow you to declare private fields in any scope. So for example, here I am declaring the private field hello. At the top level of this. It is. And then we would need some additional syntax for adding these fields to objects because now the scope that we are declaring it is not also a scope which is creating an object in the way that a class body is. And this syntax isn't necessarily final, but would I suggest is that we would use basically computed member syntax for declaring private fields in object literals or class bodies where this isn't technically putting an expression inside of the computed inside of the brackets. But it is in the same way that you can write `#hello in object` that's a special syntactic form that kind of looks like you are using a private field in a expression position, but actually it's secretly not. It's just like making a new kind of expression. Working proposal is.

USA: We lost your screen.

USA: It's back.

KG: Okay. Sorry. I blame Teams. Fortunately, I hadn't moved the slide. So yes, the proposal is this basically. Allow private fields to be declared in any scope and have some syntax for attaching them to object literals or classes. The motivation for this is basically friend classes or similar things. I have an example here of what you have to do today if you want a linked list class that is capable of introspecting on the private fields of its nodes and like you can do this. It's just awful. Like I don't think a lot of people are doing this and I don't think they should be doing this. So the proposal would instead let you do a more normal thing where both classes just naturally have visibility of this field. So it also lets you use private fields in non-class object factories, which is a thing that a lot of people like to have and is currently not really practical to do. The reason I'm bringing this back at the moment is just because there was a discussion that I saw where people basically invented this again this keeps coming up in conversations that I see or have with people where people are like, "It sure is weird that I can't put a private field on something that's not a class. I wish there was a way to give out private fields to other classes or something or scope a private field to a module or whatever." And that's this. We have that proposal. We just haven't picked it up in a long time. Concretely, total contents of this proposal, we add this new kind of declaration that just makes a new private name in the current scope. We add syntax for putting that private field on in object literals. Only works when that private name is in scope. We add a new syntax for putting that private name in class. Again, only works when that field is in scope. Obviously, we would have the method forms for both of these and static fields for classes. And that's it. That's the whole proposal. I'm not proposing any way to stick private fields onto existing objects, although that is technically a thing that you can do with classes right now. We should continue to pretend that it is not. And it is not this proposal doesn't and I think shouldn't have any kind of reification for these private fields. You can't actually refer to this name in arbitrary expression positions, just these two special syntactic forms that kind of look like expressions. There's a bunch of bike sheds, the biggest of course being the syntax. We wouldn't necessarily need to use this computed member syntax. We could have some keyword outer and width have been proposed. I don't necessarily hate `with #x`, but I don't like it very much. We could have some other way of doing something like this. But I think given that private we could introduce a notion of private Symbols or like a new way of using weak maps which is more convenient or something. And I don't think we should do any of these given that private fields already exist. I think we should just like do this very slight generalization of the thing we already have. I do also want to note a thing that will not be in the first version of the proposal, but is I think a relatively natural extension, which is a way to export access to a private name for a specific other module. This is a little bit weird. Right now, the references to modules only go one way. You only import from a module. You don't export for a module. But like it seems like you could. This is a useful thing to do to let you structure your application in a particular way. But I don't think it's vital I think the proposal doesn't need this. And so it's not going to be in the first version of the proposal, but I did want to mention it as a very reasonable follow-on. Okay. So my question is basically, do we like this? I am not asking for consensus, but I do want to hear if this is worth spending time on. I think it's a very useful, but if people hate it, then we shouldn't spend more time on it. If people do like it, the spec should be pretty trivial. So I'll probably come back for stage 2.7, not just stage two next time it's presented. So I might ask for reviewers that I can ping when that comes up. But before we get there, let's go to the queue.

USA: We have quite a queue. And with 12 minutes, MM is first.

MM: So I'll answer your big question first. Do we like this? In the abstract, yes. If it had a clean spec that fit well with the rest of the language, concretely, I don't know that there is a clean spec that fits well with the rest of the language and does what is attractive about this. In particular, what you just presented is more different than class private fields than I was expecting.

KG: Oh, how?

MM: So the square bracket property name… explain the square bracket property name?

KG: This is a special syntactic form which is a way to refer to a private field in an object literal. Like a way to say this object literal has this private field.

MM: So in the classes, when a class has a private field, there's no I mean, it's declared like declaring a property name, except for the additional pound. But there's no square brackets.

KG: Yes. The problem with this is that that is declaring the field as well as saying that instances should have the field. And here these are separated. So we need some different syntax which says I am referring to an external field, but instances should have it.

MM: Okay. The square bracket does not make sense to me. It doesn't fit with my intuitions about what square bracket means.

KG: Okay. Well, there's a syntax bike shed. We could instead of saying square brackets X, we should we could in principle say with X or something. We need some way of referring to fields from the outer scope. But that's all it is.

MM: Okay. All right. Can you explain the semantics of it using the same kind of weak map explanation that we use to precisely explain the semantics of private fields in classes?

KG: Yes. It is literally exactly like private fields in classes. The declaration is equivalent to creating a weak map. And object literals, which have whatever the syntax is, are equivalently being put on put in the weak map with the value being the thing like the value on the right-hand side of the property being the value which is associated with that object in the weak map. And property lookups like dot pound data are lookups of the thing that is to the left of the dot in the weak map. It is 100% the same.

MM: Okay. So that addresses my main discomfort point. It looked like it was deviating not just syntactically, but semantically. So I'm glad to hear that it's not.

KG: There will be a very small spec.

MM: Yeah. The other wrinkle on the class private field semantics is non-extensible applies to private. That but it sounds like you're not allowing dynamic addition of this to objects anyway.

KG: There's no new way to stick private fields on existing objects.

MM: Okay. So I'll probably end up in favor of it once I get over the syntax.

KG: Okay.

USA: All right. Next on the queue, we have JHD.

JHD: There we go. Yeah. So I was just curious why not use the brackets for access as well. Right? Like I do understand the usage of brackets here and that it's you put a variable name in it. Right? It's how you use Symbols and stuff. So like and I understand that in classes we use dot to access it. But I guess I'm just wondering why we wouldn't access it with brackets also.

KG: Because these are just normal private name like private fields we already have those.

MM: JHD, I think the question highlights why I'm uncomfortable with square brackets for the declaration, which is there's nothing there's no computed lookup.

JHD: Well, MM, it's a variable in scope when you're referencing a Symbol. It's just like that.

MM: You're not referencing a Symbol.

??: And you can't bind anything to private data in the outer scope, I think, is what makes it work.

JHD: All right. Yeah. Either way, this is a stage two syntax bikeshedding question. I was just curious.

KG: There’s a bigger topic later in the queue. It's good to get to those questions now.

JHD: Yeah. And I will just say as well, I like this a lot. If this advances, I think that first-class protocols will become much simpler, actually. And I'm sure there's other proposals that could benefit from it. So I really do like the concept. And I'm anxious as a committee to get over that so we can get into the bike shed part.

KG: Let me put up just very briefly. This can you still see my slides? Hopefully a new slide. So this `with #x: value` is a different way that we could write the same thing. It doesn't use square brackets and just hopefully I don't know.

JHD: Sure. And in theory, it could be any keyword. Right?

KG: Yes. Yes.

JHD: And it doesn't need to be a keyword.

KG: That's correct.

KG: I kind of like `with` just because it's already a reserved word and that I don't know makes parsing easier in certain situations. But yes, yes.

USA: Actually, WH has a clarifying question.

WH: What is the `with` doing here?

KG: So perhaps actually, let me do a different example with a class body. Sorry about updating my slides as we go. I should have had more illustrative examples, but. So the `#y = 1` in this class body is already legal. So we need some new syntax that says I am not declaring a new field. I am merely referring to one.

WH: Okay.

KG: There are a variety of syntaxes that we could use for that. The one I have in my slides right now is using basically the special computed member access thing. But we could instead have a keyword like this. We just need some syntax that says I am merely referring to an existing private field, not additionally declaring one.

WH: Okay.

USA: The also reply by SHS.

SHS: Oh, I guess I really like the square brackets because I think I mean, maybe we're not treating `#x` as an actual identifier necessarily, but it makes a consistent access across. And I think if you're actually do happen to shadow it and in my example have the same private name both outside and inside the class, there's no way to refer to one or the other if you're using a dot access inside the class.

KG: I think there's just never going to be a way to refer to the outer one.

SHS: Well, if you never if you're only using dot for the own basically the own private, the class private, then you can use the bracket to refer to the outer private just fine.

KG: No. No. No. So the core of this proposal is that private names declared outside of classes are the same kind of thing as private names declared inside of classes. And in both cases, this is a declaration which create like puts the name `#x` in scope. So inside of a class body, if you have `#x = 1`, that is now what that refers to in this scope.

SHS: Okay. I got to process that.

KG: That's not like a way to pierce into a different scope.

KM: I'll go to my question then. If you say this Y wasn't X, how would you ever use the with X? We can call it X1 and X2, but they're actually the same Xs. There's like the inner X and the outer X. How would you refer to the outer X? I guess you couldn't do it within class Foo. You'd have to do it outside of Foo, which is a bit awkward. But.

KG: Sorry. I don't understand the question. We're talking about the example in my class.

KM: In this example here, if you replace Y with X, yeah, on your slide, replace Y with X, inside a function of a member function of foo, how do I refer to the outer X?

KG: So if you replace this Y with X, then it's an error when you try to create the class because you are trying to put the same name on the field twice. Sorry, the same field on an object twice.

KM: Even though they're different fields.

KG: They are not different.

KM: I'm not saying the second `with X`. I'm saying there's—

KG: Sorry. Yes. What I am saying is that if you write sorry again. Slides as we go. If you write this thing, the with X necessarily like on line 12, necessarily refers to the name on line 11, then like line 11 has introduced hash X into the scope. And so with hash X refers to that name. It doesn't refer to an outer thing.

KM: What if you flip line 11 and 12? I wouldn't have to cover this entirely now. Maybe this is too much.

KG: Yeah. Same thing because declarations are hoisted.

KM: I see. At that point then, it's okay. Okay. Anyway, we should talk about this later. But I wonder if we should just even bother with that or just say that you can't shadow the same variable name.

KG: So unfortunately, you already can. I kind of I'm kind of with you, but like you can have an inner class that has the same name.

KM: But maybe not if it's a public like whatever this version of private a private declaration. Anyway.

USA: Sorry, but we're at time. And there's still quite a bit of the queue remaining.

KG: Okay. We do not have extra time today. I think my inclination is can I give up my async iterators topic because we were never going to get through very much of that in the hopes of getting through this?

USA: That would give you 15 minutes.

KG: Great. That sounds good.

CDA: I extended the time box by 15 minutes.

KM: I’m up next, I guess, also. So is there is private work at the top of like a global script, a normal script, not a module? Or is that disallowed? Or what does semantics there? Seems (it would be?)

KG: Not thought about that question.

KM: Okay. That's my question. I mean, it sounded like it might work in modules or something, but I'm not sure if there's some can you export these? It sounded like maybe Kevin wanted to export this. I suppose that's also another thing we can solve at stage two.

KG: Top level of modules, it should definitely work. I don't see any reason it couldn't work at the top level of modules. Exporting, I think would have to be a separate proposal. I think they're reasonable proposal, but like is just a separate thing. I have this slide where I think that it could possibly look like.

KM: Okay. And I think at the top of a module, it just sort of works because it is its own lexical scope, if I remember correctly.

KG: Exactly. Yes, they are.

KM: So that's not we don't have to do anything fancy there. Exporting different discussion. Yeah.

KG: Yeah. And I see the problem you're pointing out with scripts and probably the easiest thing is simply not allowing them at the top level of scripts.

OFR: Yeah. I guess. I mean, this is just like one detail that would pop up here. Like we have similar issues with const that you can have in multiple scripts and but yeah, if it's just forbidden in scripts, then I think that would be best.

KM: It also doesn't seem super unergonomic because you just make a block around this and then.

KG: Yeah. There's no reason not to do that for scripts, so.

USA: Next then is EAO.

EAO: I do not understand what the user problem is that we are looking to solve here.

KG?: I don't want to write this.

EAO: Specifically, so specifically, I don't understand what is the user problem that is not solved, for example, with Symbol keyed fields that are non-enumerable where the Symbol can be shared between privately effectively between all the parties that need to have access to these. And yes, they have—

KG: They're not private

EAO: I understand that they're not private, but I don't understand the user problem that making them making something like that, but also private is actually solving.

KG: Right. If the thing that you are describing is like what if we have had a different thing that is exactly like private fields except reified, I agree that that would solve the problem, but like we already have private fields. The user problem that we are solving is I have a case where I want to use actually private fields but I want multiple classes to have access to that field or like functions outside of the class to have access to the field. This is the user problem. I agree there are in principle other ways to solve it. But like we already have private fields. So having a completely different mechanism for solving it seems bad.

EAO: And this really a big enough thing that we need to solve this particular case of we absolutely need to have this field be private rather than semi-private effectively?

KG: Yes, it is very, very important for lots and lots of code that they be able to maintain invariance about their code that is like the most normal thing to want and that is only achieved with actual privacy.

JHD: I just want to add semi-private doesn't exist. It's either reachable or it's not. And it's very, very critically important that things that aren't supposed to be reachable are impossible to reach.

EAO: Sure. It would be good if this was more directly presented in the proposal documents because this was not clear when I was reading.

KG: I was assuming that we all understood the motivation for private fields in general,.

OFR: Yeah. I think he just want to second that. I think it's a reasonable question. I don't understand why not the same thing. I don't understand why it would not be a reasonable question. I mean, it's quite incremental over installing a over creating a Symbol and then using that as a key. I see it's actually private. So you like you could get to it if even if you declare it as non-enumerable. But yeah.

KG: I mean, that just makes it completely fatal. Like you can get to it means I cannot use this to maintain invariance about my code. Like the point is that I want to have invariance in my code. Like anytime you use a private field, the reason you are using a private field is because like instead of a Symbol is because you want to have some invariance about your code. Using a Symbol doesn't give you those invariants. Like this is the motivation for private fields in general. They are already part of the language I don't think we can like say that they weren't well motivated. I think they were very well motivated. And all this is a like quite minor tweak to allow you to also have like friend classes or whatever without violating the guarantees that you get.

OFR: Right. I mean, it's a continuum on the one hand you have like properties which are just like completely accessible and on the other hand you have completely private fields. And now you want something that is a bit more shared where basically state can be or where basically private state can be shared between multiple classes and now on that spectrum we can go like to the place where this proposal is or we can go to the place where using a custom Symbol and sharing that Symbol between the two classes is. So I—

KG: I don't—

OFR: I think it's a completely reasonable question and it should be motivated.

KG: I do not think that this is any different from the thing we already have. The it is exactly as private as existing private fields. The like author of the file that put this private field is the only person who can access it and that is like a complete invariant. The only way you can get access to it is by editing the same file this is exactly the same guarantee we currently have.

OFR: I do understand, but we're already at the point where we're talking about sharing state between multiple classes. So but yeah, I see the difference, but I think it I just want to say it's a valid question to ask whether this difference is worth it.

PFC: So it's not actually possible as far as I'm aware to build this using Symbol properties, because other code can always do `Object.getOwnPropertySymbols` on the object that you pass them and then they get access to all of your private Symbol properties despite not having access to the Symbol.

MM: I think I'm just repeating what was said, but I want to emphasize it. Is that thinking of being visible across a larger scope as more shared is I think not a productive way to think about larger scope. It's a larger lexical scope. And the key thing is that it's not available outside the lexical scope. And when we make things available in a lexical scope, you know we the friend okay, the friend class thing that's on this that's on the screen right now, that already works. What already works is that you can have nested classes inside the nested.

KG: Yes. This is the code I want to not write, but can today. This is what I have to write if I want to do this.

MM: Right. And the thing is the #next and #value is something that is shared in the sense of being in scope across all of the nested code, which can be a lot of nested code, but it's still in its still lexical scope, so it's completely serves the inside versus outside being a hard distinction that enables you to defend invariants.

KG: We only have a couple of minutes and there's a bunch of different topics on the queue. I don't want to keep talking about the this thing ideally. I take it as I do need to show more motivation. I will come back and show more motivation, although I fully agree with everything MM said. Can we go to the next topic ideally?

EAO: Yes. The other major concern here is that it the proposed syntax like seems to be introducing some into the language which is not a first class thing, but in the lexical scope it is used like a first class thing. And I think the cost of introducing a thing which is not a first class thing is really high. And I would very much prefer solutions to be explored which don't go in that direction of needing to define a new conceptual thing to make this work. The first idea I had for that would be to do add another way of making private fields Symbol keyed fields be even more private so that they don't show up when you enumerate them, which I think would effectively do most of if not all of what's asked for here.

KG: Okay. I would like to rule out any possibility of like making something reified that is like we already have private fields they are already not reified things. I am not interested in reifying them. I take your point that the syntax that I had in the slides kind of suggests that it is so I will take that as a motivation to change the syntax. Although I want to point out that the code on the screen is currently legal and like is exactly the same thing from my point of view. Like I thought we had already said that this was fine. But I can do some different syntax.

EAO: Yeah. I mean, this syntax doesn't look bad. The specific nominal syntax of this proposal, which is `private #foo`, that creates a `#foo`, which is not a first class thing. That is the problematic thing that I would very much prefer we don't do.

KG: I'm confused by how that is any different from what's on the slides.

EAO: So what's on the slides there is that `#foo` is effectively internally available as an identifier in a very limited scope and it is, as you mentioned already, a thing we have.

KG: That is exactly the proposal.

EAO: So the declarate private declaration part, well, we have private pound foo somewhere, is not part of the proposal?

USA: I'm sorry. But we're at time and this is deeply technical. I'm not sure if we can get to the bottom of this. Today.

KG: Okay. Thanks for your time. I guess I will not come back for stage 2.7 and I will put a larger time box and we'll hash this all out next time.

USA: Thank you. Now moving on with the agenda.

JHD: Can someone save the queue so that Kevin has it for feedback?

CDA: Yeah. I have the queue captured.

JHD: Great.

USA: Thank you. Great. Now KG, please remember to edit the conclusion. And summary.

### Speaker's Summary of Key Points

* Private fields exist currently, but can only be declared in class scopes and can only be attached by class bodies
* The proposal would lift both restrictions, so that you could have a field scoped to (e.g.) a module, allowing "friend" classes or non-class object factories with private fields
* Some delegates want to introduce a different privacy mechanism

### Conclusion

* We will need to discuss this at greater length.

## Fused Multiply-Add for Stage 1 or 2

Presenter: Waldemar Horwat (WH)

* [proposal](https://github.com/tc39/proposal-fma)
* [spec](https://tc39.es/proposal-fma/)
* [slides](https://docs.google.com/presentation/d/e/2PACX-1vQ5JHSa97CYNyS42bllFQ0CX-ctDlDSPTMG7kKAEflEwqrl3K-dqOlvdFyIq1eDp2k-BoNG2yfueHpQ/pub?start=false\&loop=false\&delayms=3000)

WH: This proposal is to add Fused Multiply-Add, also known as Fused Multiply-Accumulate, which is an operation that's been specified by IEEE 754 since 2008. This operation takes three Number arguments and computes _x_ × _y_ + _z_, doing the computation as a mathematical value with just one rounding and overflow check step at the end. There's no intermediate rounding or overflow on the product. This is a standard hardware operation which is pretty ubiquitous nowadays.

WH: The history is: The original IEEE 754 had the arithmetic operation +, -, ×, /, √. FMA was added in 2008. And it's a mandatory arithmetic operation. It's the only “arithmetic” operation that was added. Other operations were added which belong more in the bit-banging category but this is the only real arithmetic one.

WH: The question is, should we update ECMAScript to conform to the IEEE standard from 18 years ago? All the other languages I looked at already have this. I have links to the implementations in C/C++, C#, Python, Rust, Swift, Java.

WH: FMA is actually quite difficult to implement in userland. It is possible to do it in userland in JavaScript but it's very tricky. It's hundreds of lines of slow and brittle code. The easiest thing to do is to either use hardware where this is supported widely nowadays or, if you lack hardware support, to fall back on a professionally written low-level C++ numerics library or such.

WH: Applications: Where does this come up? There's a bunch of places: dot products, polynomial evaluation, neural networks. I'll cover exact multiplication shortly.

WH: The thing that prompted me to propose FMA now is the Amount proposal presented at the last meeting. I was working on fixing rounding errors that kept coming up in the Amount spec. In order to do unit conversion correctly when I was writing the spec algorithms, I needed to use Fused Multiply-Add. Without it, the spec became really difficult, having to emulate unlimited precision arithmetic. With FMA it's quite easy.

WH: To give you a concrete example of how FMA can be used, let's say you have two (IEEE 754 double) Numbers _a_ and _b_ and you want to compute the exact product _a_ × _b_ with no rounding. You can get the high bits just by multiplying them normally `high = a * b`. This gives you the high 53 bits, but what are the lower bits? With FMA you can get the lower bits in one step via the expression `low = Math.fma(a, b, -high)` which effectively computes the mathematical value of a product of a and b and subtracts what the high bits were. This gives you the low bits of a product. Unless you have an overflow or underflow of the exponent range, this will give you the exact product of `a` and `b` as a sum of `high` and `low`. You can do things like combine this with `sumPrecise` to produce the dot product of two vectors exactly and correctly rounded.

WH: So this has a number of useful applications. The application in Amount I use it for is to compute _x_ × _p_ / _q_ with only one rounding step where _x_ is an arbitrary Number and _p_ and _q_ are integers. You can look at [Amount issue 115](https://github.com/tc39/proposal-amount/issues/115) to see how that can be done. This is exact as long as the exponent range doesn't overflow or underflow but we're less worried about that for practical applications.

WH: The Stage 1 problem area scope is to conform ECMAScript to include the one new required arithmetic operation in IEEE 754-2008. I checked there are no other arithmetic operations that are required. I'm specifically not including bit-banging operations such as `nextUp`, `nextDown`, `scaleB`, etc. in the scope. Let's take a look at the queue.

MM: So just from your slide where you say `Math.fma` whether it's actually called `fma` or not, I don't much care. But I wanted to clarify that you are proposing that it be a `Math.something` static function.

WH: That seems to be the logical place to put it. I don't know any language which defines this as an operator. I can't really think of any other good place for it. That's where we have `Math.sqrt` which is also required by IEEE.

MM: Okay. Good. Good. And does this satisfy the nice invariant that the normal plus/minus/multiply/divide does which is, if the exact mathematical result is representable then the result of the operation is the representable number that corresponds to the exact mathematical result, and otherwise it's between those two?

WH: This just like the other basic operations +, -, ×, /. _FMA_(_a_, _b_, _c_) computes the exact mathematical value of _a_ × _b_ + _c_ and then gives you the closest double to it, rounding ties to even. NaNs, infinities, and signed zeroes are handled as one would expect.

MM: Good. Good. That's really what I was asking. Thanks.

WH: IEEE 754 defines FMA exactly. There is no latitude for approximate results. IEEE 754 does give implementations an option of which NaN to produce in the case where FMA combines a signaling NaN with a quiet NaN, but since we do not have signaling NaNs in ECMASscript that's a moot point. So this is bit-by-bit specified by IEEE 754.

MM: Yeah. And we also don't have the ability to set rounding modes which is good. We only have round-to-even.

WH: Yes.

MM: Okay. I'm in favor. I think this is great.

DLM: So I also think this is great and I support stage one. I just wanted to pass along some comments that I received and discuss this internally. So from my understanding is that this has been discussed in the past for WASM as well and that it was controversial there, in that hardware support is uneven and the software fallbacks are either if they want to be fully in accordance with the IEEE standard are slow. And if not then sometimes you end up with platform dependent differences in the rounding. I'm not sure if that's a relevant concern here or not but since it was something that had been discussed in WASM I wanted to raise it.

WH: By now I expect this is in hardware on the major platforms. I haven't checked all of them but this has been around for 18 years. There may be some obscure platforms which don't do this in hardware but I don't expect having to emulate this in software on such platforms to be a major problem. But I could be mistaken.

PFC: I looked into the hardware support for C++ std::fma when I was submitting a patch to JavaScriptCore. There's hardware support on ARMv8. There's hardware support on x86-64 if you're compiling with SSE instructions. If you're not compiling with SSE instructions then it defers to the software implementation in libm. Those are the only two platforms I looked at. So this isn't an exhaustive answer, but I looked at this using Godbolt compiler explorer. So if there's a compiler for the platform you're interested in on there you can probably just easily find it out there.

DLM: I mean that's the point for me. I just wanted to raise it as a potential concern since it had been raised for WASM.

WH: If you are compiling for an x86 using the old x87 coprocessor instructions then you have much bigger problems than this—arithmetic will just be broken in subtle ways.

SFC: I just wanted to add that I feel that the motivation on the screen here is good motivation but I just wanted to add that I also see this motivated because I believe that having the capability in the language to do the multiply-add operation without the double rounding is motivated on its own. And the fact that it's in the IEEE standard and has a decent amount of hardware support adds to that motivation. So I just wanted to add that I see the use case that it serves as also being motivated, not just the fact that it's in IEEE.

KM: I believe RMV7 has support but I mean I'm not 100% sure. I also just looked at Godbolt and it does seem to lower to a single instruction. It's not like a library call or something. It also seems like RISC-V has a single instruction for it. So it doesn't seem particularly common it might be the case that yeah an older x86 CPUs you have to implement it in software. I don't know how prevalent those CPUs are though these days.

JHD: I fully support it for stage 1 and if the question comes up for stage 2 and 2.7, I reviewed the text already. The only comment I'd filed as an issue is that the current spec test text coerces its arguments to Numbers and we've resolved to stop doing that. But that's a trivial conversion to a validation and a throw step. So otherwise it's perfect.

WH: We might want to discuss that if we have time. `Math.sqrt` and the other `Math` operations all do this coercion. And I don't want this to be the different one. I don't want to break the precedent that `Math.sin`, `Math.cos`, or whatever coerce to Numbers.

JHD: We can totally have that discussion. I think that's appropriate to have within stage 2. I don't have it pulled up but I believe that we decided to break that precedent in the future and that was our consensus but either way it's a totally fine stage two discussion.

USA: CDA from the queue who says +1 support for stage 1. And PFC who says I support this for stage 1 and 2 and a message from KM also says support for stage 1 and 2 and DLM says support for stage 1 and 2.

WH: Okay. It sounds like we have stage 1, possibly stage 2. For stage 2 we need the spec text. Here is the full spec text. `Math.fma` does multiplication to produce a mathematical value and then adds it and there's just one rounding step in the end. The one point of contention is whether steps 1, 2, and 3 in the algorithm should coerce to a Number like the other `Math` functions or whether we should throw on things which aren't Numbers. There are two possible spec text options, one of which is on the screen, and we just pick one in stage two.

SFC: I feel like a decent question for stage 2—I guess it could be a stage 2.7 question—is whether we follow the C++ like precedent of using `fma` versus the Rust precedent of using `mulAdd`. I don't personally have a strong opinion except that in `sumPrecise` we decided to use, like, the English name `sumPrecise`, and given that we decided to use the English name `Math.sumPrecise` maybe we should use the English name multiplyAdd or mulAdd instead of `math.fma` although I'm I don't personally have a strong opinion I'm fine with `math.fma` but it seems like something we should be considering.

WH: Yes, we could also discuss the name. My slight worry with `mulAdd` is that people will think it's a direct replacement for multiply and then add which it is not—it’s its own operation.

WH: \[switching to last slide] Let me give you an example of why so FMA is not interchangeable with doing a multiplication followed by an addition and why I don't want compilers or folks to global-replace `x*y + z` with `Math.fma(x, y, z)` or vice versa. That can cause issues. Here's an example where if you just use the naive multiplication and subtraction you'll get the correct answer 0 if `x` and `y` are both `1.2` but if you try to optimize this with FMA you'll get NaN.

USA: JHD on the queue says in his opinion it's also a fine stage 2 topic

SFC: I think that if like if I was looking at the Math docs, and I saw `Math.fma`, I would have no idea what it is, but if I saw `Math.multiplyAdd`, then I would be intrigued and read more about it. I think it helps with discoverability, and, like, if you read the docs on `multiplyAdd`, then like it's very easy to figure out what it does and that it's slightly different than if you just do the raw operations. So, I think it's a thing we should consider, so I'm okay with Stage 2, but I think that we should keep the name of the function as an open question. And I would like to see this get to Stage 2 because then we can more easily use it in the Amount proposal.

USA: RGN says “I support this for stage 2, end of message”.

MM: So there's this other thing we have in the language now called `Math.sumPrecise` that, given a bunch of numbers to be summed, sums them in an order to minimize roundoff error. Is there any situation where you might have a bunch of multiply-adds and you want the add parts to be done in a sumPrecise order and what does that say about how these two operations interact with each other?

WH: I alluded to this earlier. I can write a simple algorithm where if you want to compute, let's say _a_<sub>0</sub> × _b_<sub>0</sub> + _a_<sub>1</sub> × _b_<sub>1</sub> + _a_<sub>2</sub> × _b_<sub>2</sub> + …, you can use the combination of FMA and sumPrecise to get the correctly rounded mathematical value of the result with only one rounding for the whole computation, under the caveat that it’s exact as long as you don't overflow or underflow the exponent range. I can describe how to do that offline if you're interested. So these work very nicely with each other.

MM: Okay. Good. Good. Yeah. I support going to 2 and if we can settle the two open questions the name and whether we do a toNumber on the input of error I'd support going to stage 2.7.

WH: Are there any objections to stage 2?

WH: Sounds like we have stage 2. I'm curious about opinions on coercing—whether we should maintain the precedent of the other `Math` functions or whether we should throw on non-numeric inputs.

MM: I'm kind of on the fence but I think I'm in favor of in this case the precedent even though I generally believe in Kevin's recommendation that new operations should not coerce. I think this is one where the precedent is the more important issue.

USA: There is a queue now. Also I wanted to remind ourselves that we should ask for reviewers before the end of this topic. So please volunteer in the queue—we already have Jordan who says he's happy to review. And then we have RGN.

RGN: Yeah. I think consistency wins out here. There are so many math functions I believe all of them coerce their arguments to numbers and there's no reason for this one to diverge.

JHD: Just to clarify `Math.sumPrecise` which is the only math function we've added in a while does not coerce. It throws.

KM: Yeah. It's about to say that in the thing but yeah. `Math.sumPrecise` does not coerce.

RGN: But sumPrecise is taking an iterable, not—

KM: But each of the elements from the iterable are not Numbers. It throws.

??: Right.

JHD: Like that's the point where it would either coerce when it got the item or it would throw and it chose to throw.

RGN: sumPrecise is oriented specifically around IEEE 754 binary64 precision… I could go either way, but I think on this one I do prefer the internal consistency with the other `Math` functions.

SFC: It seems like `Math.sqrt` is the closest equivalent that we have to this. So it seems like we should try to stay consistent with that. But the precedent that got set with `Math.sumPrecise` is also compelling. So… end of queue item.

PFC: My opinion on this is we've built a consensus during the Stop Coercing Things topics in previous meetings, precisely to avoid having this kind of discussion. I mean I obviously always if there's an overriding reason to break from the convention that we've established, then we can have that discussion. But the default should be to not break from the current consensus which is that new APIs should not coerce. If someone thinks that the consistency argument wins out on this point, then the burden should be on them to make the case for coercing and not the other way around.

MF: Hi. Also I think that we should not coerce in this API. I am not convinced by the consistency argument. The API will only be used in new code. New code should not be passing things to any of these functions expecting coercion. Which includes the existing ones but also this one. So because of that it shouldn't coerce.

KG: Yeah. I’m just agreeing that this shouldn't do coercion. I did specifically leave the door open for APIs which are close cousins of existing APIs. But that's mostly to avoid user confusion and I don't actually anticipate any user confusion here. I cannot imagine anyone who is using this operation would like intentionally be passing something which is not already a number. So I think that suggests not coercing.

RGN: I withdraw my previous point. I don't have a preference for coercion here.

MF: I'll sign up as a reviewer.

USA: The second reviewer is JHD.

### Speaker's Summary of Key Points

* FMA computes a mathematical value result and does only one rounding/overflow/underflow check at the end. It’s useful for Amount and for computing exact products. It composes nicely with `Math.sumPrecise`.
* Discussed extent of hardware support.
* We're split on whether this should coerce or not. I’m hearing more voices in favor of not coercing. My personal preference was to match other `Math` functions but I’m fine either way.
* We also should explore the name of this—whether it should be `Math.fma`, `Math.mulAdd`, or something else that’s recognizable.
* Will come back with proposals for this and seek stage 2.7 in the future.

### Conclusion

* Approved for stage 2
* Reviewers: JHD, MF

## Needs-consensus PR: Normative: Take language subtag into account in locale hour cycle lookup

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/ecma402/pull/1086)
* no slides

SFC: So I've got these four normative pull requests to go over. These are all pull requests that involve the Intl locale info proposal which we approved at stage four a few meetings ago. After we've had more implementations of the proposal implementers have found some minor spec issues with the proposal spec. So these four pull requests are fairly minor tweaks around the semantics of some of those functions. We've looked at all of these in the TG2 call. And these four are the ones that we wanted to bring to TG1 for consensus. There's also one or two others that we didn't bring to TG1 because we still needed to discuss them. But these four are the ones that we decided to bring forth.

SFC: So first up is 1086. This proposal or this pull request adds the ability for the getHourCycles function on `Intl.Locale` to read not only the region but also the rest of the locale including the language. This allows for example fr-CA Canadian French to use H23 where en-CA Canadian English uses H12. And this is conformant with for example CLDR data. And previously the spec did not allow for this but with this change it allows for this. One change that we did make after the initial proposal was we also allow the calendar to do the same type of—to also read the language field. So both the region and the language can now affect both the hour cycle as well as the calendar. This pull request has been reviewed and approved in the TG2 and you can read the notes here. So I'd like to ask for consensus on 1086.

DLM: Support.

USA: That's it for now. Let's give it a minute. I think there's silent consensus.

### Speaker's Summary of Key Points

* Support from DLM. No other points of contention were raised.

### Conclusion

* ECMA-402 PR 1086 is approved.

## Needs-consensus PR: Normative: Allow `Locale.p.getNumberingSystems` to return >1 item

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/ecma402/pull/1074)
* no slides

SFC: All right. My next agenda item is 1074. So this one involves the getNumberingSystems function. There it's permissible for locales to have multiple numbering systems. For example, a traditional numbering system and maybe a formal numbering system. So they should be able to return a list. However the spec as landed was only returning the first element of the numbering system's list that was loaded from data. So this change allows a list of multiple numbering systems to be returned. So this allows—for example Arabic and Hindi and Bangla and many other languages from that part of the world use multiple numbering systems and this allows them to return the full list of those numbering systems which was the intent of this function. This getNumberingSystems function exists so that you can query what those numbering systems are and it was a regression that went unnoticed as part of this bigger refactor [number 92](https://github.com/tc39/proposal-intl-locale-info/pull/92). So this is fixing that to allow for a bigger list. I'd like to ask for consensus on this pull request 1074.

DLM: Support.

USA: Maybe wait a bit to see if somebody else has an opinion. I think we have consensus.

SFC: All right. There were a couple I just did want to note there is an open question from Anba on this pull request which I assume we can resolve editorially. Cool.

### Speaker's Summary of Key Points

* Support from DLM. No other points of contention were raised.

### Conclusion

* ECMA-402 PR 1074 is approved.

## Needs-consensus PR: Normative: Don't fall back to default locale in Locale.p.getCollations()

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/ecma402/pull/1072)
* no slides

SFC: So I'm going to go ahead and move on to 1072. This one is about getCollations. So the issue here with getCollations is that as specified when you call getCollations on a locale and the locale is not a locale that is in data, that we don't have data for. Then it would return the collations for the browser's default locale which makes Intl locale sensitive. Which is not a behavior that is what we want because if you're using Intl locale it should read the data directly from the input locale it should not fall back to the default locale which is like the browser locale. This post here illustrates the difference in behavior. For example if your default locale is Chinese then you shouldn't return Chinese collations if you're trying to get the collations for an unknown locale. Or an invalid locale. And this change fixes it so that we return the root collations instead of the default locale collations. This has been approved by me and RGN. And we also approved it in the TG2 call. You can see the notes right here. So I'd like to ask for consensus on 1072.

DLM: Support.

USA: And I believe that's it. All right. We have consensus.

### Speaker's Summary of Key Points

* Support from DLM. No other points of contention were raised.

### Conclusion

* ECMA-402 PR 1072 is approved.

## Needs-consensus PR: Normative: Call RegionPreference in WeekInfoOfLocale

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/ecma402/pull/1051)
* no slides

SFC: Thank you all. And now I'd like to look at 1051. Okay. So the issue with 1051 is that we want to be able to read from additional subtags. So let me go ahead and open up the description here. So locales are allowed to have for example a region override subtag as well as a region subtag. And we would like to be able to, if a locale has such a subtag or such an extension key, we should be able to use it to infer the week info which includes first day of week. And I believe that is basically the extent of this change. And this only changes it for week info of locale. It also makes it more consistent with how calendar of locale and hour cycle of locale already work. They're also able to read from the RG field. RGN describes it as a glaring mistake that that weekInfo didn't use those other subtags. So we looked at this in June in the TG2 call and approved it. It's gotten multiple check marks. So I'd like to ask for consensus on 1051.

DLM: Support.

CDA: Support.

USA: So we have two votes of support and let's wait a bit for any dissenters. Just in case. I think we have consensus.

SFC: Okay. Great. So my conclusion for all four of the pull requests is that we have consensus and can proceed with merging those into ECMA 402. Thank you very much for the time.

### Speaker's Summary of Key Points

* Support from DLM. No other points of contention were raised.

### Conclusion

* ECMA-402 PR 1051 is approved.

## Continuation: Thenable Curtailment for 2.7

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1kHq_UqMHGGT8ena8yMlJKgHmohDVqxJvV4hiCB12HtU/view)

MAG: All right. So last time we talked about this and the question was how do you deal with objects that could override internal methods. And what we did was we added a host hook. So host hook here is host object has impure lookup internal methods. It goes inside of here and we will return true if the host hook returns true. Because this is the host hook saying "hey my internal methods could run code". \[briefly dropped transcription] here, it takes an object and returns a Boolean, indicates if a host object overrides the methods getOwnProperty or getPrototypeOf in such a way that user code could run. It will return true if that is the case. A default method implementation would just be to return false. And so this covers some of the concerns there. There were a few editorial fixes that happened in this branch just about how we were naming things. But with that, I believe it's been reviewed and NRO gave a thumbs up but is not here, I believe. With that, let's go for consensus for stage 2.7 with this current spec text.

MM: Yeah, so the host talk is supposed to guarantee something. It's possible for a host, of course, to provide a hostful behavior that misbehaves and violates the spec. I just want to check that the nature of specifying the hostful behavior is such that a misbehaving host hook would cause that to be a non-conforming language implementation.

MAG: I so I don't know how much stronger we could phrase that in the sense that it.

MM: I'm not sure that it needs to be that.

MM: I want to clarify your sense of what it means to have phrased it this way.

MAG: I don't think there is so if a host lies to us, a host lies to us, and the whole spec falls apart.

MM: But I mean, if a host object violates the object invariance, for example, certainly the case of an implementation can do that. An implementation can also just implement JavaScript badly and not conform to the spec in many, many ways. But the obligation that the spec imposes includes obligation on host behavior, specifically host object satisfying the object invariance. It's consistent with that to say that if a host the behavior of a host hook violates this specification, then that JavaScript implementation does not conform to the spec.

JHD: So I hopped on the queue. I think we could add a sentence to this host operation such as, like, a host must always return the same Boolean for the same object.

MM: No, but it's more than that. It's a guarantee of non-reentrance.

MAG: So there is one guarantee of non-reentrancy that we did cover, which is it says an implementation cannot run user code. So the host hook itself cannot run user code. So that is actually an important thing to highlight. And it is an important part of the guarantees that this host hook has to provide is that it's able to answer the questions about the object provided to it without running user code. I don't have anything which says something along the lines of, this host hook must be faithful to the host. I could add it, but there is no current text which says one must do a good job of implementing this host hook. And like the outcomes if someone were to get this wrong potentially are bad in the sense that, the whole point of this is, you want to say that this is a surefire thing that you will not run user code. And so it might deserve an extra sentence here. But I don't know what the tradition is for qualifying host hooks because I do think that this is a general statement of host hooks that they can be as you said, they can be badly implemented. And what does that actually mean from a spec perspective? And, how much do we have to beg and pray that they're going to do a good job? Hosts, that is.

MM: I mean, a place where the rule meets the road on this kind of question is whether a test 262 test could fail indicating that that platform was out of conference if it's a violation of a normative term in the spec, then test 262 can validly test for it and rule the non-conformance to be rule the violation to be non-conformance.

MAG: Can we test host hooks, though? Like, I in specifics, I can imagine testing host hooks, but, in general, can I test a host hook?

MM: I mean, it's on a case-by-case basis. It just it just in theory, if you could test that something violated the spec, if the spec is normative, then violating the spec makes the implementation out of conformance. I just wanted to make sure that we are.

KG: Yes, the answer is yes. Sorry, to jump the queue.

MAG: You could write a test that would do this, but you do need support. The thing about it is you need support from a you would need another test 262 hook, which is, create host object with overridden get own property of that runs user code. And then you can write the test 262 test. I just don't know that I would want to, is maybe my concern here.

MM: Yeah, I'm fine with never actually adding such a thing.

MAG: But you could. You could write such a thing is if that answers your question. I agree with KG that you could test this.

MM: Yeah. And that the test failure would indicate a non-conformance. I mean, that's the only that's the only issue I'm zeroing in on is this. Even though this is specifying a host hook, the specification is normative, as in a platform that doesn't obey the specification is a platform that does not conform.

MAG: Yes. I think that that is correct. And I think that that is the intent of the text. And I think you could conceivably with some mechanical working in test 262 and, what host objects you can get out of it, make a test that would fail on this specific point. It would require some collaboration between the host and test 262, but it is feasible.

MM: Okay, thank you.

MF:. This is my understanding yes, to MM's original question.

KG: Yes, failing to implement a host hook as specified makes an implementation non-conformant.

PFC: You could do that whole dance where you add a new host integration point with test262 to hand you a host object for which this host hook returns true. But, you can't prove a negative in that way. You could ask for an object from the host, and it could hand you an object for which this host hook is correctly implemented, but there could still be other host objects for which the hook is not correctly implemented. And, generally, we just don't test that sort of thing in test262.

MM: Yeah. So I'm happy with where we ended up. I'm not asking that we actually be able to test it. The testing was a gedankenexperiment, and it is the case that testing never proves negative. The test is an attempt to falsify and the negative is supported by failure to falsify.

MAG: I have no further comments about the host hook thing because I think I'm comfortable with where we are. Does that sound okay?

MM: Okay with me.

MAG: All right. So at this point, can I get some explicit support for stage 2.7?

USA: We have plus one for stage 2.7 by both MM and JHD. Given that we haven't—

CDA: Sorry, I just stepped away for a bit. So this might have been covered, but, I mean, I just wanted to double-check the entrance criteria for 2.7 are good. The editors have signed off. The reviewers have signed off.

MAG: I believe so. Ran it past the editors. Got review from MF. MF says editorial LGTM.

### Speaker's Summary of Key Points

* Changed definition of PropertyAccessCouldRunUserCode to have a host hook which will indicate if we have an override of important internal methods which could otherwise run user code.
* Discussion mostly surrounded the wording of the host hook and whether an implementation that did a bad job on the host hook would be nonconforming.

### Conclusion

* Consensus for Stage 2.7

## temperature checks relating to https://github.com/tc39/proposal-bigint-from-exponential

Presenter: Richard Gibson (RGN)

* [proposal](https://github.com/tc39/proposal-bigint-from-exponential)

RGN Okay. So this topic is super brief. I don't want an extended discussion. I just want to get a sense of the room on a couple of open questions to hopefully shave off one iteration of this proposal.

RGN: A refresher, we're talking about getting bigints from exponential notation and the first question on the table is whether or not it should include expanding bigint literal syntax. So should I be able to type something like 1e6n as a syntactic value to give me a bigint with an integer value of 1 million? As was raised in the earlier discussion, without this, it's a guarantee that developers will instead use dynamic expressions to make up for the lack of syntax. Which was deemed problematic by at least one delegate.

CDA: On the queue, we have Jordan who says yes. EAO who says no need for literal. And then WH.

CDA: I'm just going to jump in here. RGN, did you want to use the temperature check feature?

RGN: Yes. Positive means we should expand BigInt literal syntax.

MAG: Sorry, you mean exponential syntax in the BigInt constructor or that you can write it out?

RGN: As a literal, be able to have something like `1e6n`.

MAG: Okay. Just making sure I'm on the same page.

CDA: All right. It has been a minute. Shall we stop the poll? I'm not seeing the numbers change at this point. So poll is stopped. Polls are in the log of TCQ.

\[temperature check time]

![Temperature Check | Strong Positive ❤️: 5, Positive 👍: 4, Following 👀: 3, Confused ❓: 2, Indifferent 🤷: 2, Unconvinced 😕: 0][image2]

RGN: Great. Okay. Next one, I think we're going to take it the same way. This one is about existing coercions. So there's a number of places where strings are implicitly made into bigints. Some of those are data-oriented. There's a specific `BigInt.asIntN` and `BigInt.asUintN` functions. TypedArrays and DataViews. `Atomics.store`. Basically a number of places where we're interacting with TypedArrays or other views over an ArrayBuffer. And two cases for binary operators: loose equality, and less-than/greater-than in their strict and loose versions. Currently, coercion fails and so you get a false result for something like `1n == "1e0"` or `1n <= "1e0"`. With numbers, that is not the case. If we do the implicit conversion here, to align with numbers, then we'll actually get a behavior change to `==`, `<`, `>`, `<=`, and `>=`. But other than that, all the other ones are dealing with TypedArrays and such. They currently SyntaxError and if we decide to expand the implicit conversion then they no longer would. So aligning with number on all accounts has bearing on whether BigInt(string) is the chosen dynamic way to do it or if instead we want to have a new method. Because the implicit coercion kind of goes hand in hand with BigInt(string). So with that in mind—I see WH is asking about web compatibility. I am not considering that at the moment. Obviously, it will matter once we get further along, but this is just about preference. So, same as before, we'll do a temperature check. Do people want BigInt(string) to take the new syntax and also all of these various other places in the language that use the underlying machinery? Or instead, should we seek a static method, leave BigInt(string) alone, leave the conversion alone, and this is a new opt-in functionality? Positive support indicates a preference to expand existing coercions, negative means don't. And anything else, please populate a queue item.

CDA: I think it's settled down.

RGN: Okay. Close the poll whenever you feel like. And I will incorporate everyone's opinions when I come back with this.

![Temperature Check | Strong Positive ❤️: 4, Positive 👍: 3, Following 👀: 2, Confused ❓: 2, Indifferent 🤷: 1, Unconvinced 😕: 0][image3]

CDA: Thank you, RGN. And with that, let's move on with our agenda. Next up, we have Kevin with a continuation?

### Speaker's Summary of Key Points

* We ran a temperature check for expansion of bigint literal syntax and a temperature check for expansion of implicit string-to-bigint coercion.
* Both were mixed.

### Conclusion

* Results will be considered in future development of proposal-bigint-from-exponential.

## Continuation: Async iterator helpers open questions

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
* [slides](https://docs.google.com/presentation/d/17_mL3guxupbKWKr1EbDdML9K9kPTqElbf9xgoZZDBh0/edit)

KG: Great. We got five minutes for this. I don't think we can reasonably find another note-taker unless someone wants to jump in. And I have a bunch of things to talk about which are not going to get to all of. So I'm going to try to get to one very quickly, and then I will go back and fix up my own notes. I hope that's okay.

KG: So we were talking about open questions for concurrent async iterators. We got to like two of them. There are a bunch more. We are not going to get into these right now because they are extremely complicated, and I will probably ask for two hours next time I bring this back. But one specific question I am really hoping we can get an answer to because it is simple is this. Consider the case of flatMap. When we call `.return` on the thing returned by flatMap, there may be as many as two underlying iterators which are open. There is the thing that we called `.flatMap` on, and then there is the thing that was returned by the mapper function passed to flatMap. So if we call `.return` on the outer thing, we need to call `.return` on both of those inner things. And the question is, in what order do we do this? And do we do it concurrently or sequentially? Does anyone have an opinion? I think I prefer sequentially and doing the inner one first in a sort of stack sense. But strictly speaking, any answer here is viable.

EAO: I support this.

MF: There's no reason that you could find to actually prefer any of these options?

KG: I think that the preferring to close the inner one first follows just from treating these like a stack. Like if you had two nested loops and you broke out of the inner loop, this would close the inner loop first and then the outer loop. And that is in some sense what flatMap is. So closing the inner one first, I think, is pretty well motivated. The question of concurrently or sequentially, well, sequentially is what you would do if you had two nested loops like that. But is potentially slower as well.

MF: Yeah. I think the stack order of inner then outer matches my intuition. And I also agree if you're matching doing this in loops, it would be sequentially, and we shouldn't do that. We should do it concurrently because it would be faster.

KG: Well, I don't see much reason to care about stack order if we're not waiting. But I guess we have to pick one order.

WH: Innermost-first seems fine. I don't have a particularly strong opinion here, but that seems like the most motivated choice for the reasons you stated.

KG: Great. Okay. So I've heard MF wants concurrently. And I mildly prefer sequentially. Does anyone else have an opinion on that topic? \[silence]

KG: Alas. Okay. Well, I'll hash it out with MF, and since no one else has an opinion, you will presumably not make me revisit this. Okay. Thanks. I hope everyone is looking forward to our much more complicated cases to talk about it next time.

### Speaker's Summary of Key Points

* For `.flatMap` we can have two open iterators, the inner and the underlying. Both may need closing when `result.return()` is called. In what order and concurrently or sequentially? Analogy to loops would be inner-first, sequentially.

### Conclusion

* Committee prefers inner-first, does not resolve the question of concurrently or sequentially

## Adjournment

USA: Thank you, KG. And thanks for finishing well under time to give us, well, the time to end the meeting on time as well. We don't have anything scheduled for tomorrow. So I think this is it for 115th meeting of TC39. Any final words? Anyone?

CDA: Thank you to our note-takers.

USA: Oh, yeah. We can thank them by naming all of them maybe. But yeah, thanks to the note-takers.

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>
