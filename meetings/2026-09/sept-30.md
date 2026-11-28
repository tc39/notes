# 116th TC39 Meeting

Day Two—30 September 2026

**Attendees:**

| Name                | Abbreviation | Organization       |
|---------------------|--------------|--------------------|
| Waldemar Horwat     | WH           | Invited Expert     |
| Richard Gibson      | RGN          | Agoric             |
| Ross Kirsling       | RKG          | Sony               |
| Danilo Tedeschi     | DFT          | Google             |
| Ashley Claymore     | ACE          | Bloomberg          |
| Samina Husain       | SHN          | Ecma               |
| Lea Verou           | LVU          | OpenJS Foundation  |
| Jordan Harband      | JHD          | Socket             |
| Nikolaos Papaspyrou | NPU          | Google             |
| Ruben Bridgewater   | RBR          | Invited Expert     |
| Jesse Alama         | JMN          | Igalia             |
| Jack Works          | JWK          | Sujitech           |
| Chris de Almeida    | CDA          | IBM                |
| Christian Ulbrich   | CHU          | Zalari             |
| Luna Pfeiffer       | LPR          | Yavashark          |
| Yusuke Suzuki       | YSZ          | Apple              |
| Keith Miller        | KM           | Apple              |
| Istvan Sebestyen    | IS           | Ecma               |
| Ron Buckton         | RBN          | F5                 |
| Chip Morningstar    | CM           | Consensys          |
| Daniel Minor        | DLM          | Mozilla Foundation |
| HE Shi-Jun          | JHX          | Invited Expert     |
| Justin Ridgewell    | JRL          | Google             |
| Kevin Gibbons       | KG           | Invited Expert     |
| Matthew Gaudet      | MAG          | Mozilla Foundation |
| Mathieu Hofman      | MAH          | Agoric             |
| Michael Ficarra     | MF           | F5                 |
| Mark S. Miller      | MM           | Agoric             |
| Nicolò Ribaudo      | NRO          | Igalia, S.L.       |
| Olivier Flückiger   | OFR          | Google             |
| Philip Chimento     | PFC          | Igalia, S.L.       |
| Peter Klecha        | PKA          | Bloomberg LP       |
| Rob Palmer          | RPR          | Bloomberg LP       |
| Shane F Carr        | SFC          | Google             |

## Amount Stage 2 Update

Presenter: Jesse Alama (JMN)

* [proposal](https://github.com/tc39/proposal-amount/)
* [slides](https://notes.igalia.com/p/tc39-2026-09-amount/)

JMN: Good morning. This is Jesse. I'm at Igalia. Working on this with Google Internationalization. I'm also presenting this on behalf of my co-champion, EAO, who unfortunately could not be here. I just wanted to give a bit of an update about what we've been doing with the amount proposal at stage 2. We have a fairly active community of champions and fellow number nerds who want to talk about Amount and similar issues that all kind of come together here. So I have a couple of smaller items, and somewhat larger item to report. And at the end of the presentation, I'm going to ask for a bit of feedback from plenary. Because there's a bit of discussion among the champions about directions we could take. Having to do with the spec. And we would appreciate any insight that you might have.

JMN: So first, I just want to present a couple of changes since last time. And then focus in on what is most interesting. For those of you who may not know, just in very briefly, the amount proposal is all about having some notion of a number and a unit together, and supporting unit conversion. So things like feet to meters. Kilometers to whatever. Note that currency conversion is not included there. Because we all know that that's not really a stable data.

JMN: So just briefly, since last time here, we've introduced a couple of conveniences or maybe bug fixes, you might say. And as Shane was talking about yesterday, we've started to work on the notion of sequence units, which is something that we've talked about and wanted to add to the proposal for a while now. But we are now tackling that in earnest here. Since last time, we've added a somewhat of a shorthand here. Because we expect that most people will simply have some kind of numeric value and a unit. So why not just give them the option of writing exactly that in order with two parameters here, rather than the more official notion, which is to have a kind of option back there where we say, if we want to have 1.23, we would give some kind of option bag with a unit meter there. But clearly, for the main use case here, we have some kind of shorthand there. That was an example with a constructor. The same goes for the convert to, which is the main method here that we have.

JMN: The biggest thing that we've been working on since last time we presented is adding sequence units. As Shane was talking about yesterday, sequence units, at least for Americans, have a very common use case, but it's not just a US thing. We expect this to be applied elsewhere too. So here, for example, let's talk about 5 feet and 11 inches. You can see that I'm creating an amount here with an array, with two numbers there, two integers. And you can see that we store an array. That wasn't present last time we talked about amount. We can also talk about the precision of sequence units. So precision is one of the main features that amount is supposed to support. The examples I've given you so far just have to do with saying, this is a value, and here's the unit. And that's fine. But we also want to support the notion of precision. Two kinds. Fraction digits. And significant digits. So here, as we were talking about maybe yesterday or hinted at yesterday, we have the notion of fraction digits applying to a sequence unit. So think about specifying 5 feet and 11 inches. With one fraction digit. Just impute that or just say that it has to have one fraction digit of precision. The value that we end up storing there is a bit of a hybrid. So it is an array. That's understandable. But the types of the items of the array are mixed. We store an integer there, a number, that is. And then a string, which carries that precision that was indicated there. And so the precision is going to apply to the final part only. So the idea that precision would somehow apply equally to multiple components we exclude that. It's applying only to the final part.

JMN: We've also made a decision in the among the champions group to say that every non-final part of a sequence unit is supposed to be an integer. So maybe it might make sense just as a statement to say things like 5.3 feet and 2.6 inches. But that's not what we support. We just support integers for the non-final parts. Just to warm you up and give some examples of converting to something like a sequence unit. So imagine we start with something like meters, and we want to convert to feet and inch. Then we would have the value B, and that's what it would look like there. Notice that when we apply convertTo, we didn't specify any precision there. And so the entire operation there is working entirely in number space. You just get numbers back. Well, I should say you get an array, containing numbers back. In the second example with C, here we're starting with meters and converting to foot and inch. And we're specifying a precision there. And notice what happened to the second component of the array. It turned into a string. Just to make sure that nothing gets lost. So we store the 10.9 there as a string. And the reason why it's a string is to also capture any kinds of trailing zeros and stuff like that, which of course gets lost in numbers. Going the other way around, you can convert from a sequence unit so if we have, for instance, 5 feet and 11 inches, we can convert that to inch. We can convert that to meter. These are just simple units. That's pretty straightforward.

JMN: We had to make a decision about what kinds of sequence units we'd support. And we made a decision that the units have to be listed in decreasing magnitude. And there has to be integer conversion multipliers between sequential units. So things like foot and inch are okay. I've been using that so far in my examples. But things like inch-and-foot, might make sense in some world. But we've decided that that's not supported. TypeError. We can have a discussion about whether that's the right thing to do. We're open to feedback about that. Please let me roll with that example for now. But foot-and-centimeter kind of makes sense. But we've decided that doesn't make sense. Or at least we reject that. Because there's no integer multiple from which you go from foot to centimeters or from centimeters, rather, to feet.

JMN: Another discussion that we had is about supporting currency. So the amount proposal does not have a native notion of currency here. But when we try to convert this to a locale string or try to use it in some kind of Intl setting, then we need to be a bit more careful. Because then the notion of currency versus some other unit does actually make sense. And we've agreed on the convention here that in Intl settings, we can use three-letter currency codes, uppercase, and that's it. So for instance, here, look at 12.5 or 12 euros and 50 cents. That gets nicely converted. You can see there, imagine you're working in, let's say, in a German locale. But. The word day, the lowercase D-A-Y, that gets converted in a different way. The German word is Tag. And that's why you see this TG here. So lowercase three-letter units are no longer formatted as currencies. So there are things like that in the CLDR, day, ton, and so forth. Those have to be understood as non-currency.

JMN: Okay. So that was part one, showing you some of the updates that we've been working on. Here's a request for feedback from the committee. So this is where I know it's a bit early, but I ask anyone who's interested in numbers and calculation and stuff like that to wake up and pay attention to this part. The issue is that unit conversion involving sequence units or compound units, so things like anything like X-per-Y, like meters-per-second-squared or miles-per-gallon, these kinds of things, if we're converting to and from these kinds of amounts, we need roughly speaking more math than converting between simple units. So there's more multiplication potentially more division going on when you convert with these kinds of units. It's bad enough going from, let's say, feet to meters. But it's even worse when you're converting from, let's say, feet to some kind of sequence unit here. So converting to and from sequence units requires multiple mathematical operations. And that's just inherently so. That's unavoidable. If we convert from a sequence unit, then we have to convert each part and then add this up. If we're converting to a sequence unit, well, then we have to kind of convert to the smallest unit and partition and then have a kind of operation that kind of bubbles up potentially. And the issue here, as you might guess, is that more operations means more rounding and more chance for some kind of user-visible error. Where some kind of conversion that might work out very cleanly on paper ends up getting looking pretty ugly when you run it through our convert to function here. We get things like compound units. So things like simple example, let's do meter-per-second. And convert that to miles-per-hour. Now look at that. We have to convert meters to miles, seconds to hours. So there's not one multiply here. The issue is that by supporting these kinds of units, we're just opening the door for more kind of precision loss and user-visible errors. Here's another one as an American living in Europe. I have to frequently do these kinds of mental gymnastics when talking about things like the efficiency of a car or things like how much fuel is used for a certain distance. Because in the US, the typical thing is miles per gallon. For the efficiency of a car. But there are other ways of measuring that. Of course, it doesn't use gallons. It uses liters. And it might not use miles, of course, things like kilometers are used. But even groupings like hundreds of kilometers are used frequently. So this example involves multiple multiplications and divisions just to get the right answer. And so the question for us in the Champions group is, how much precision should the spec promise? When we're doing more than just one simple multiplication, which already has a bit of complexity going on, you may recall the recently proposed FMA, `Math.FMA` proposal from Waldemar (WH). Which makes sense on its own, but it also is directly tied into the kinds of questions that amount is raising. Even before we get to sequence units.

MM: What does FMA stand for?

JMN: FMA stands for Fused Multiply and Add. That's a yeah. Yeah. So FMA is an operation that allows us to do multiply and add of three numbers as one single operation rather than the naive combination of two, which allows for more precision.

JMN: So I'll give you a few options. And I will mention a preferred solution to this. But we're open to discussion about that. So again, we would like to stick to option one. This is the proposal. Is to stick with number-based math and leaning on this new proposal, `Math.FMA`. Fused Multiply and Add. Wherever that applies. Currently, the spec is using mathematical values for conversion factors. So we look in the CLDR table, which specifies the exact or it specifies constants. For converting between to and from all sorts of units. And we just import those into the spec. As mathematical values. And which is already a little bit of complexity for us. But when we add sequence units into the mix, then it becomes even more complex. And so the proposal here is, let's just use number math and `Math.FMA` wherever it applies. And that's as good as it gets. And if someone says, well, there's some rounding errors here or you could have done this differently, we just say, we have to bite that bullet. That's the best we can do. Option two is a bit of a luxury option for the Champions. Which is just to say, we just use mathematical values. Without giving any kind of guidance to implementations. So we, as the spec writers, give ourselves the luxury of just writing down the exact operations in among real numbers. And it's up to engines to figure it out. Test262 will say what's true. And implementers are on their own. They can do whatever it takes to get the right answer. A more drastic option is to say that we don't do conversion for things like sequence units. If someone is worried that a loss of precision or user-visible rounding errors is too bad, they might say, let's just rule this out. We think that's a drastic approach. But it certainly simplifies this discussion.

JMN: So our preference is option one. So we're really excited about `Math.FMA`. We think that this is a powerful tool to add to our toolbox. That proposal is at stage two, I believe. Or is it two seven? Two? We're happy with that. We think that that's a reasonable choice. It's kind of the best that we can hope for. It allows us to have conversion between sequence units. But with our eyes open, we know that there might be some user-visible rounding errors. But they're at the same level, essentially, as the user-visible rounding errors that you already see in JS.

JMN: There's a follow-up question to this about rounding. Because even if you were to say, okay, we stick with option one, we trust you, Jesse, and the Champions group to do this. There's another question about rounding, which is something we also support. The question is, how much rounding should we actually support for things like convert to? Currently, our intention is to support the rounding modes that are in ECMA-402. And there are several of them. Another option is to keep some of them. For instance, just the ones that are in IEEE. So a subset. A third option, more drastic, is to just drop rounding entirely. Just like when you do multiplication of two numbers. You can't specify the rounding there. We just do the arithmetic with numbers. Possibly with `Math.FMA`. And that's it. So that's also a kind of sub-question for committee consideration.

JMN: And then a second question, that I would also like to propose, or invite discussion about, is you might have seen that what's going on with the values in amounts. It's a bit of a hybrid because we have you could have a number in there. It could be a string. It could be a BigInt. Or now, if we support sequence units, now you have an array of these things. So it gets there's another dimension of polymorphism or multi-type values here. And one suggestion is just to use some kind of frozen array. Regardless of whether that's a sequence unit or a simple unit. The thinking being that this just cuts down. Complexity. And there's just one data model for all use cases. We would still accept things like simple values as inputs, but then we would always store these as an array, even for even a one-item array. We think that that's a nice conceptual cleanup of the data model. We're leaning towards adopting this, but we haven't merged that into the spec yet. So that's all I have for you today. The discussion now goes to the floor. So the conversion is what kind of option do we want to do for sequence units and any precision guarantee that they might have or not have? And what about rounding? Do we want to support rounding? How much rounding? Should we drop rounding? And then now, in light of sequence units and the possibility that we have an array, as a value of an amount, do we want to just kind of simplify our lives and use an array there always for the value, even for a simple units? That's all. We can now go to the queue.

CM: So just to satisfy my curiosity, you specified these rules for what's a valid sequence unit. Are those rules applied at spec time or at runtime? Meaning, for example, you said you could have `foot-and-inch`, but you couldn't have `inch-and-foot`. Is that only `foot-and-inch` makes it into the spec, or could I say, for example, `mile-and-inch`, which would be silly, and expect it to work?

JMN: Good question. I think we haven't thought about that. Both options are available to us. Because we do rely on static data, essentially, the CLDR database and all the data contains there. We could bake that into the spec, not necessarily by literally importing that data into the spec, but normatively referring to that data. And then make it a kind of compile time, so to speak, error, construction time. Or we could do some kind of runtime checks. I'm not sure. We could do either one. Both doors are open.

CDA: WH?

WH: What happens with sequence units when the last unit or the last few units are zero?

JMN: So do you mean things like 6 feet 0 inches?

WH: Yes.

JMN: Yeah. So that gets we keep that as a sequence unit. The zero is retained. Or do you maybe I misunderstand the question.

WH: Yeah, that is my question. So for somebody's height, you'll get 5 feet 0 inches and not just 5 feet?

JMN: Well, in the convert to function, you have to specify the target unit. So if you say feet-and-inch, then you will get a zero. There. You'll get an array that has a zero. For the final element.

CDA: Okay. Mark.

MM: Yes. First of all, can you hear me?

CDA: Oh, I'm sorry. Hang on. We just had a late reply come in from Shane.

SFC: I wanted to post it sooner, but the queue was slow. The question that Waldemar asked about in terms of formatting, that's a question for the Intl sequence units proposal. The actual amounts type supports zero-valued fields as zero-valued fields in the amounts, but then whether or not those get rendered when you call toTocale string is a question for the Intl sequence units proposal. Currently, they do get rendered, but there is some open questions about whether we should add options to make it easier to configure that behaviour. It could also be the case that options in, for example, in the conversion functions, when you call convert to, could optionally include or drop the zero-valued fields. So these are things that can happen via options in APIs, but the actual representation of zero-valued fields is, I think, it is in the Amount proposal. And it is also supported in Intl sequence units proposal.

CDA: Mark.

MM: Okay. So first of all, can you hear me?

CDA: Yes.

MM: Okay. So just some other examples of where the answer is not obvious to me is what about 5 feet 13 inches or 5 feet negative 7 inches?

JMN: At the moment, I think you're opening up an interesting other kind of forms. Because at the moment, we don't do any kind of normalization there. Or kind of rounding up. So we would store something that is perhaps a bit nonsensical, 5 feet 13 inches. As is. There is some discussion in another issue about supporting some kind of a normalization or rounding up. Which does tie into this, I suppose. But we haven't yet found a solution for that. We would just store what the user is giving us.

MM: Okay. And the arrays, whether you make everything an array or you just do the arrays for the sequence units, in both cases, I assume the arrays are frozen. And that the contents of the arrays are only primitive. There are no nested arrays.

JMN: Yes, that is correct.

MM: Okay. Thank you.

CDA: WH.

WH: I'd like to speak on the precision questions. First I'd like to separate compound units, which are things like meters-per-second, miles-per-hour, from sequence units.

WH: For compound units, in most cases you can give exact answers by doing the multiplication of unit factors in mathematical rational integer value land, and then using FMA to do the actual conversion.

WH: For sequence units, you get problems which I can illustrate using an example of 1001 millimeters. If you convert that to meters, you get 1.001m, which is good. If you convert it to centimeters, you get 100.1cm, which is also good. If we convert 1001 millimeters to meters-and-centimeters, then the correct answer would be 1m 0.1cm. That would argue for doing the mathematically correct answer.

WH: However, if you start with 100.1cm as a Number value, and convert that to meters-and-centimeters, then the mathematically exact answer is 1m 0.09999999999999432cm. So I'm not convinced it's worth it to try to make the millimeter conversion to meters-and-centimeters work exactly while the centimeter conversion to meters-and-centimeters would still appear broken. Thus that would argue for just doing the straightforward approach of using the FMA mathematical value calculations to compute the base unit (100.1cm in my example), and then when you split the base unit value into the various sequence components just use normal Number math for that.

JMN: Okay. Yeah, that sounds… sorry. Please go ahead.

WH: Okay. And for the other question, I have a weak preference for not using arrays for simple units. I think that the sequence units are cases rare enough that it would be a hassle to have to deal with arrays for conversions which don't include sequence units. That is a weak preference.

JMN: Yep. Okay. Thank you. As for the first question about using math FMA, I guess if I understand your suggestion correctly, there would be just one application of FMA to convert to the base unit and then the rest is downstream number.

WH: Yes. For sequence units, yes. And for compound units, you would cross-multiply the rationals you get from CLDR for all the parts of a compound unit and feed that into the FMA.

JMN: Okay. Yep. That sounds like a nice hybrid approach. Maybe a bit similar to what we're doing right now with simple units where we do give ourselves the luxury of having mathematical values in the spec. Coming from CLDR. But then computations are done in number space downstream of that.

CDA: All right. We are past time. We have a large queue. I will copy the queue, and we can do a continuation if we have time later in the meeting.

JMN: Okay. Thank you.

### Speaker's Summary of Key Points

* We presented API updates, focusing mainly on the use of sequence units and consequences for supporting them.

### Conclusion

* We will continue to discuss whether to use arrays by default, and how such a property should be called, in the TC39 Numerics champions call.
* We will continue to discuss what to do about the issue of reduced precision of computed results thanks to accepting sequence units as well as normalization.

## Pulling in AbortController for Stage 1 or something

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/bakkot/structured-concurrency-for-js)
* [slides](https://docs.google.com/presentation/d/1iRpJ3ADc50ZRUsmwYi9Yp3qjixBq3wMWWx_jw7cFleU/edit?usp=sharing)

KG: Okay. Hello everyone. I would like to talk to you about pulling in AbortController. I've talked about this briefly in the past, but I want to lay out a more concrete path and talk about how we might actually go about doing this. I've linked the repository for the structured concurrency work that was the occasion for my last presentation on this topic, although that repository is exploring much further in this direction or sort of in a direction that I would like to go, than this talk today, which is only about a core part of it. Okay.

KG: A reminder of what I'm talking about. AbortController is a thing in the web platform and on many runtimes that is used to cancel work. It's threading the capability to be canceled to asynchronous work, such that the work can then be signaled to be canceled by the controller at a later time. So this \[slide] is sort of the representative use case. You construct in a AbortController, and then when you're doing some work, for example, a fetch, you pass it the signal, which comes along with the AbortController, and the person who created the controller can at any time before or while the work is executing, they can call `controller.abort()`, which will mark the signal as aborted, and if fetch is currently doing something, doing network operations or whatever, those will be canceled when the signal is aborted. And it will throw an abort error, which is not its own error type. It is a DOMException whose `.name` property is AbortError, but we'll talk about that more in a little while. There's a bunch of APIs which deal with these things. This is just a sort of representative sample from the web platform and from Node. But basically, any time you're doing async work, you can very reasonably take an AbortSignal. Also if you are doing some operation which you might later want to undo or uncommit to, with this example with AddEventListener. AddEventListener isn't doing any work. It's just registering something which you might later want to unregister. And you can just as well use an AbortSignal for those cases to say, "I've signed up to be notified of events. I no longer wish to be notified of events." So the main thing I want to establish here is just that this is widespread on the web and on many JS runtimes. Also, the W3C requires using AbortSignal for any asynchronous operations. So certainly on the web it is going to be common and while, of course, the W3C guidelines don't bind us, when we are trying to create a coherent language and many of our users will be using the language in the context of the web or Node.js or similar JavaScript runtimes, I think it behooves us to at least look at the guidelines and try to stick to them when we can. Oh, Mark had a topic. Do you want to get to that before we move on?

MM: No, we can. So you said uncommit, which sounded very scary, but then the example was an unregister, which sounds not scary at all.

KG: Right.

MM: Is there some—

KG: I should have said unregister.

MM: Okay. Fine. Good. Thanks.

KG: Yes. I apologize. Okay. So these are examples of native APIs that consume an AbortSignal, but also user code can consume an AbortSignal. There's a few different ways of doing that, and I think I've highlighted all or at least all of the important ones on this slide. So you can throw if the signal is already aborted, you can use this add event listener machinery which we'll talk about more later to sign up to have a function be invoked when the signal is aborted. You can check if the signal is aborted by reading the aborted property. And if the signal has been aborted, there is an error associated with that, which is in the `.reason` property, and you can read that property so that you can throw the appropriate error. But the main things that you would be doing are throwIfAborted, checking if it's aborted, and signing up to have a function be called when it is aborted and potentially un-signing up for that function.

KG: Great. Okay. So my position, my thesis, is that consistency requires us to adopt AbortController. Many JavaScript programmers will already be familiar with it. I don't think it's reasonable to ask developers to learn some other cancellation primitive, given that this already exists and is widespread and is certainly not going away. And I think that we are going to want to add cancellable APIs. The link here goes to the concurrency control proposal, which needs cancellation for its own reasons. Although I did also just add this aside here, which is that the `Atomics.waitAsync`, which is already part of the language, is logically a cancellable operation. It takes a timeout, so you can give up on waiting for your atomics operation while waiting for your read to happen. But I think it is reasonable to be able to say, "I no longer care about this," and stop listening to it. And right now, there's no mechanism for that because that would be cancellation, and we don't have cancellation in the language. So I think we are going to inevitably need to have a mechanism for cancellation in the language and I don't think it's reasonable for it to be anything other than AbortController. Therefore, I think we need to be able to use AbortController from our specification. However, it's in WHATWG, and it has a bunch of assumptions baked in with it being in WHATWG. Things like the event target machinery. Which I don't think we could reasonably try to specify all of that, and I don't think we could reasonably normatively reference because we don't actually need almost all of the things that it does. It's just sort of incidentally how it works on the web platform.

KG: So what can we do? I think the approach that we ought to take is to identify a partial subset of AbortController, probably a fairly large subset of AbortController, that provides the functionality that we need and define host hooks for the parts that we don't want to define. So I mentioned, for example, the abort error is not its own type. It is a DOMException. I don't think we should be trying to specify DOMException in JavaScript, but I also don't think we should be asking the web platform to change the type of error that is thrown. And the way that we would accomplish this, then, is to have a host hook that says, "Construct a new error whose name is 'AbortError' in a host defined fashion," or whatever. And then on the web platform, that would be defined to be a DOMException. On a platform that doesn't have DOM exceptions, it could just be its own error type. We leave it up to hosts. So I think that with a couple of host hooks, we could do this in a way that doesn't actually require changes from anyone who has shipped AbortController. With one caveat, which we'll get to in a second. So my hope here is that, other than this caveat, this can be just something that happens sort of behind the scenes in the specification land and doesn't actually affect users, except eventually users of runtimes that don't currently have AbortController would be able to start using it. And of course, they would be affected insofar as we would be using it within our specification eventually.

KG: So what's the subset I'm talking about? Well, we definitely need AbortController. We definitely need the signal property. We definitely need the ability to abort on AbortController. We also need the AbortSignals. They need the boolean to check if they're aborted. They need the reason. They need throwIf Aborted. They need some way to sign up to be notified when they are aborted. This does have to be synchronously, unfortunately, it really does. And AbortSignal in particular needs a host defined superclass because on the web that's event target, and I certainly don't want to pull event target into JavaScript. I think that's basically it.

KG: There's a couple of other things that exist. There's `AbortSignal.any` which is basically like `Promise.any`, except with AbortSignals. Which it turns out to be not implementable in user land with the memory guarantees that you want. I can go into this in more detail at a later time, but basically, neither a weak nor strong reference to the signals that a signal is depending on is appropriate. You really need to be able to reach into the internals of AbortSignal. So we might need to pull in `AbortSignal.any`. `AbortSignal.timeout` is just a convenience thing, and you can implement it on or at least I believe you can implement it on any platform that provides a timeout mechanism. So there's some of these other things we might or might not need to pull in. Which are sort of less core. I think it might be confusing if we don't pull in literally all of AbortSignal if you're on a platform that doesn't currently provide it. On the other hand, there's platforms that don't provide setTimeout, and that's a decision those platforms are making. And I don't think we actually need to enforce anything about that. We can say, "Here's the subset that is part of JavaScript, and people who want to implement more can of course implement parts of other specifications."

KG: So how do we actually go about doing this? This would be the first time we are pulling in something from the web platform. We've adopted TypedArrays, but those weren't really the web platform—well, they were the web platform, but they were the Khronos spec, which was its own slightly different thing than everything else. Also, it would be kind of weird that we would only be pulling in part of this specification. When we pulled in TypedArrays, we got all of TypedArrays. We didn't have these weird host hooks where we needed to have carve-outs for other specifications to do other things. Actually, that's quite not true, the detaching functionality was a carve-out for hosts to use, but anyway. Obviously, this would need to be coordinated with WHATWG. I've raised the topic on the WHATWG matrix channel, and people Anne at least seemed to think that this was a reasonable thing to do. Kind of an open question of where development would happen after this. Would WHATWG continue adding new things, new utilities like `AbortSignal.any`? Would we add new things? Open question. I think in practice, it would probably be both, which is a little bit awkward, but not the end of the world. I think anything that's more core, like `AbortSignal.any`, would probably make sense to do in JavaScript and things that are more platform capabilities like `AbortSignal.timeout` would probably happen in WHATWG. I know people here aren't always involved in the broader web platform stuff, but especially for browser representatives and anyone who works with people who participate in the rest of the web platform standards world, I would love to hear from those people. So if browsers are able—if the representatives from browsers are able to talk to your counterparts in the web platform parts of your organizations, confirm that this is reasonable and that they would be okay with some development moving over to TC39, that would be great. And then I want to get to the caveat. But before we do, let's go to the queue.

CDA: RGN.

KG: Let's see. Let's see.

RGN: Yeah. So obviously, one of the concerns as soon as the idea was floated of pulling in AbortController is the problem with things like DOMException. A host hook for constructing errors is definitely ugly, but it seems like the right way to resolve that particular issue. I think it is appropriate, and I wanted to commend you for identifying it.

KG: Thanks very much.

CDA: MM.

MM: Yeah. Yeah. So you mentioned a synchronous action, but it was not clear to me if the synchronous action is simply setting the aborted flag, which can be synchronously tested; I have no problem with that at all. If it's a synchronous callback—

KG: It is.

MM: Oh, okay.

MM: Yeah. That might be a blocker, not certainly it's not a blocker for stage one. For stage one, I can already say I approve this. You're investigating this whole area, that is certainly worthy. I also agree with you about the nature of the terrible trade-off we face, which is that there is an abort API that is standard in much of the JavaScript world, i.e., in browsers. And to do a separate one and have them coexist and figuring out how they could even possibly compose seems like a nightmare for users. And I agree with the normal ranking of constituencies. So I suspect that the case for trying to do exactly what you're trying to do here is compelling. I don't see an alternative. But the synchronous callback, I'm wondering if something like the host hook could approach, could also be used to avoid providing a synchronous callback universally. I don't need a detailed answer on that now.

MM: I was wondering, I'll just take my next question since it's next. Is for existing APIs that are just at the Promise level of distraction, like `Promise.all`, that effectively registers a then callback with all the things being all, one can imagine adding an options bag to it that if the option is signal, aborts the I mean, unregisters the continuation on those dependent Promises. Is that consistent with your view of how to spread the cancellation API, whatever that is, so that it's useful in more places?

KG: Excellent question. So there's sort of two things there. I do think that something like that would be appropriate, but I actually think that the place that we would want to put it is on Promise prototype then. I think the missing thing here is some way to say, "I no longer care about the result of this Promise." We don't have that. And I think we should.

MM: Okay. But if you do it so I agree with you about then. If you do it on then, then you also need to do it about all because it's all that does the then registration.

KG: Sort of, actually. So all is this interesting case because if one of the Promises errors, then you no longer care about all of the other ones.

MM: Oh, that's true too.

KG: For `Promise.all` specifically, you actually kind of want the ability to unregister even if the consumer of `Promise.all` didn't pass a signal. But that said, you do also kind of want to be able to forward it. There is this question of, what APIs should pass a signal to their callees? And my instinct is that you probably don't want to do forwarding. You mostly want to say the only things which are doing work themselves should be taking a signal. But `Promise.all` kind of is doing this work itself because of this case where it can get an exception from one and stop listening to the other. Anyway, this is a much deeper topic. The broader answer to your question is yes, I do think that that is the direction we should go.

MM: Okay. Yeah. And I don't think any more depth on that now. And I'll just go ahead and say I approve of this for stage one.

KG: Great. Thanks very much. If we have more time at the end of the time box, I'll come back and talk about the synchronous question. But let's keep going through the queue and the rest of the presentation first.

CDA: Okay. And we have a few minutes. ACE?

ACE: Yeah. Also, big plus one to everything you're doing here. I'm wondering if you have thoughts about how we would encourage detection. It's very I think it's very common. If you end up with a Promise chain that rejects with an abort error, it's common to handle that separately from other types of errors. So we already have error, obviously an instanceof check is not particularly safe. Yeah.

KG: An `instanceof` check straight up does not work.

ACE: Right.

KG: The only thing they are is DOMException. I think it would have to be the `.name`.

ACE: We wouldn't want to say there should be an is abort error built in? We would just…

KG: I don't see a reason to.

ACE: Okay.

KG: Yeah.

CDA: I think I'm next on the queue. I have vague hand wavy concerns about interop. Specifically, how working with AbortController and AbortSignal in strictly in web context and versus the language level. These are obviously not stage one concerns. And I don't have a lot of time in the time box. But I'm sure we can dig into that more later.

KG: All right. I would love to hear more. But if you want to open an issue or just on matrix or something. Because my intention was that this basically doesn't change anything for anyone. So I was hoping that it was therefore compatible.

CDA: Yeah. RGN and I were talking about it in the OpenJS standards working group meeting the other week. I'm trying to recall some of the points that we were thinking about. But yeah, I will follow up. RBN.

KG: Okay.

RBN: I will say that I do see that this is very or at least somewhat addressed in the slides. So perhaps I can wait until you get to that point. But I do want to point out that there is an existing cancellation proposal. I won't go into too much depth into the history of that proposal. I haven't had the time or inclination to work on it in quite a while due to issues trying to find a path forward for it with WHATWG over the years. But the basic premise was to have something of this nature. So I do think it's valuable to approach this to look at advancing this should it come up in the slides or otherwise. If you were interested in taking over as the champion for the cancellation proposal to bring it up to match this, that would be acceptable to me as well. But I'm sure we can talk more about that offline.

KG: Great. Yeah. I think that probably this would not be able to go forward together with a separate cancellation proposal. So I think it would make sense to regard this as just a narrowing of focus of the existing cancellation proposal.

RBN: Yeah. And I would agree with that. I've been fairly critical in the past about the API design for AbortController. I do appreciate that you've made some headway into rectifying that over the years. And they've also made some progress on that API. There are things that I would like to eventually see in AbortController in the standard that still aren't present within the DOM API specification. But all those things could happen later, which is fine with me.

CDA: Okay. All right. We have only a couple of minutes left in the time box. It is important that we finish on time. So everyone in the queue, please be extremely brief. Mark. Oh, Mark has removed his reply. All right. CHU. Oh, CHU is plus one for stage one. "Makes sense having the same abort building block in language plus web from dev view". And JHD says "the web has many things that should have never been anywhere but TC39. And we should pull all of them in eventually." KM.

KG: Certainly not committing to anything other than this one.

KM: I have a +1 from us. So I think I can speak for JSC and I can't speak necessarily for the rest of our web platform people I haven't spoken to about it. But they're probably on board with it, I would assume. But I think for stage one is fine.

CDA: Okay. Leah says enthusiastic plus one for stage one. And plus one to Jordan's comment. Ron is plus one stage one or repurpose cancellation proposal. JRL is plus one. SFC is plus one.

KG: I will briefly interrupt and say I asked for this proposal for stage one, but I do agree with Ron that I think that probably we should just regard this as a continuation of the existing cancellation proposal. And so it sounds like everyone's on board with this going forward and agrees that this is the way we would like to proceed with cancellation. So just as a process thing, I think what I would like to do is proceed with this as the cancellation proposal since RBN has graciously agreed to have me take over championing it.

CDA: Yeah. I agree with you. Mark.

MM: Yeah. Since both Kevin and Ron are here right now discussing this, what. A salient difference between what we just saw from Kevin and Ron's cancellation proposal?

KG: So the really big thing is the caveat that I didn't get to, which is why I don't think we can actually pull in AbortController as is, because of this issue about how you register a thing to get a callback invoked. And this was I think the biggest thing that made the biggest difference originally with the cancellation proposal, is that it had a mechanism that was good, instead of the one that AbortController currently has, which is bad. And so my proposal is basically we add the good thing that we need to AbortController, at which point—there are still some differences if Ron wants to talk to them, but I think the most important one would basically be addressed.

MM: Does this enable JavaScript to avoid the synchronous callback?

KG: No.

CDA: All right. We are past time. I'm afraid to ask, but are there any objections to stage one?

CDA: Okay. Yeah. So the folks who were participating in the conversation, please take a look at the notes and make sure that the attributions are accurate. Are there any objections to stage one? 3, 2, 1. Okay. You have stage one.

KG: Great. Thanks very much. Mark, I will open an issue on the existing cancellation proposal that talks about why we need the synchronous callback. And I will @ you on GitHub.

CDA: Good. Thank you.

### Speaker's Summary of Key Points

* AbortController is a thing in the web platform and elsewhere, we should pull it into the core language so we can use it, with host hooks to avoid requiring changes.
* RBN agrees this should take the place of the existing cancellation proposal

### Conclusion

* AbortController will advance to Stage 1, as a narrowing of focus of the existing cancellation proposal, which KG will champion

## BigInt from exponential for Stage 2

Presenter: Richard Gibson (RGN)

* [repo](https://github.com/tc39/proposal-bigint-from-exponential)
* [slides](https://docs.google.com/presentation/d/1iHNosyAVvh7Ir8KqGgZ_BTfthEo0W51NcLDVeEHwoYM/edit?usp=sharing)

CDA: RGN.

RGN: Thanks very much. I'm going to talk today about BigInt from exponential notation. A recap: this is currently at stage one with the problem statement that exponential notation is useful for dealing with big integers but unavailable for direct use in defining an instance of the BigInt type. Manual conversion is cumbersome and tedious. You can use the BigInt constructor where the number is less than or equal to `Number.MAX_SAFE_INTEGER + 1`. But other than that, in the general case, you have to break things down with a not particularly comprehensible regular expression or some similar approach. This comes up with numeric canonicalization as has been proposed at various points in Amount. Also for parsing JSON source text, because JSON supports exponential notation for any numeric value, integer or otherwise. Also for dealing with financial values, it is particularly commonplace in cryptocurrencies, which have very small atomic units and therefore deal with very large integers. And in working with high-resolution dates and times, there was a need for this observed in the Temporal polyfill and I found a few different libraries that also have similar functionality. A search on GitHub for BigInt then open parenthesis then something other than close parenthesis then digit E digit (`/BigInt[(][^)a-z]*[0-9]e[0-9]/`) gives about 20,000 hits—some of them appearing in the links above, some of them not. We've also got in our own ecosystem a handful of libraries that support exponential notation for producing big integer values, again demonstrating that the need does exist. And actually, not just for big integers, but also for arbitrary precision decimals. Which I bring up, but I'm not pursuing as part of this proposal.

RGN: In the last meeting, we discussed static versus dynamic use cases. Dynamic ones, such as invocation of the BigInt constructor as a function, are more general but also something of an anti-pattern in the sense that it's requiring dynamic execution for what is statically known at the time of writing. So in contemplating that and in consuming the discussion from last time, we've included in the proposal literal syntax so that you can write out things like 1e6n without involving the BigInt constructor at all. And you still get the expected results.

RGN: A few questions that are still open, that I would like feedback on in this meeting from anyone who's willing to provide it. First off, what to do about negative exponents? So if you have as shown here, 1230e-1, that represents the integer 123. And if you want to specify the BigInt 123 in literal notation similarly as 1230e-1n, should that be supported? The current specification text allows it, but it seems visually misleading, if nothing else. At least to my eyes, that looks like a subtraction rather than a literal. The value of it is questionable. None of the identified use cases call for this. And we've already had one delegate in the previous meeting raise it as a particular concern. So I'm inclined to drop support for it.

RGN: The other issue that's still open is about changing the IsLooselyEqual and IsLessThan operations. So right now, you could write something like a million as a BigInt (`1_000_000n`) and double equals or less than equals, etc. to the string “1e6”. Right now, because that string does not parse successfully as a big integer, you end up in string comparison. But the current specification text of this proposal would change that so that it's interpreted as a BigInt and we actually end up with all of these example comparisons being true. That is technically backwards incompatible, I suspect it's not going to break any code. I don't remember ever having seen anything like this in the wild. If it turns out not to be web compatible, we can do a carve-out to preserve the existing behaviour for this, despite accepting exponential notation strings for all other places where a string can be coerced into a BigInt. That's not my preference. I think it would be a little bit surprising. If we can update the operator behaviour, I would like to do it. But again, that will remain to be seen.

RGN: So with that, I'm formally asking for stage two, sharing the entrance criteria briefly. We need a proposal document to describe the high-level APIs and syntax, we need illustrative examples of usage, and we need some spec text… all of which we have. Should this reach stage two, obviously, we need to identify reviewers. And with that, I'm ready for the queue.

CDA: Okay. I'm just going to interject real quickly. Thank you for putting this slide up. I think all stage advancement presentations need this slide and also thank you for remembering that we need to ask for reviewers because we serially forget to do that. Jordan, says anything that results in a valid BigInt number should be supported. MM is on the queue.

MM: Yeah. So the example with the comparisons of the less than and the loose equal, what is the current behaviour on the for those expressions?

RGN: Current behaviour is that the BigInt is converted to a string as part of evaluation.

MM: I see. I see. So then it becomes a string comparison.

RGN: Right. And if we go ahead with this, then instead the string is converted to a BigInt and we do BigInt comparison.

MM: I see. I see. Okay. Thank you.

CDA: MF.

MF: I gave similar feedback during the stage one presentation. I just don't see any—convincing, at least—reason to support a non-integral significand or a negative exponent. The problem, as I understand it, that we're trying to solve here is that you want to be able to conveniently write large bigints. I think it's a very minor problem, but it was enough to convince me that, okay, we can go to stage one to look into that space. I don't think that all this additional stuff, especially changing how the less-than-or-equal-to operator works and stuff, is at all necessary to cover that scope. I think that's well beyond what I would think is necessary.

RGN: Okay. Responding to the non-integer significand part, that's actually necessary to support the first use case here. When you canonicalize arbitrary integers into standard form, it is very convenient. If you have a single-digit left-hand side followed by the fractional precision, so 1.234000e7, for instance, and although when a human is writing the input, they probably won't be thinking in those terms, when we're producing output that ought to be able to round trip, it really is important to be able to consume them.

MF: Okay. I guess I'm not understanding that first use case enough. And I'd like to understand more about that.

RGN: Okay. Yeah. So generally speaking, the purpose of it in the context of Amount is to have something that is basically as simple as possible to parse. That everything is going to have this standard format. Which is, in Amount is not necessarily an integer, although for something that's a BigInt, it is actually an integer. It also is manifest in JSON canonicalization as well, not strictly speaking, just this, where it is the form that allows for trivial consumption, trivial comparison, and doesn't suffer from blow-up. So if you insist that the integers are represented always as whole numbers, then I can provide an input of something like, 1e1000, and or 1.2e1000. You definitely don't want to go out to the full expansion because then that's a denial of service hazard. And if you instead went, 12e999, then you've made the parsing and the comparison, if you need to do it, more difficult. And just generally speaking, the simplest form that it can count on having only and exactly one digit to the left of the decimal point is a very useful property.

MF: For?

RGN: For consumption, for comparison, for protecting yourself against that kind of exponential blow-up of space as well.

MF: Okay. I'm still—I'm going to think about it for a little bit, but you can continue on with the queue.

RGN: Okay. You also raised another point, which I'm sorry I forget what it was.

MF: Sorry. Yeah. I think it is possibly an ambitious portion of your proposal here, but the changing of the comparison operators.

RGN: Right. Yeah. So basically, this kind of falls out unless we do something about it, where what is being changed here is that anywhere that you can currently specify a string in place of a BigInt, that it goes through this StringToBigInt internal operation. That is also true inside of IsLessThan and IsLooselyEqual. So I don't feel particularly strongly. If we were to say, for instance, that when you're doing a DataView setBigInt64, that it applies, but when you're doing a double equals, that it doesn't apply, I think it's probably slightly confusing. But again, I don't think people actually write this code, so I don't feel strongly about it either.

MF: Yeah. I was going to—okay, so I think this goes back to the point I raised in the previous presentation then that this really feels like a parsing function, rather than a BigInt constructing function. Especially when you say things like that, right? I think those are possibly two different APIs. And maybe we should explore that space of separating them.

RGN: I mean, they could be. And that's how this started out. But as soon as you bring in literals, then it changes the game. And bringing in literals actually will be better in terms of how things operate. I think it's a valid concern to identify `BigInt($stringLiteral)` and `BigInt($numberLiteral)` and `BigInt(Number($stringLiteral))` as anti-patterns. People are doing it right now, and if they can instead just write the bigint literals, then I think the ecosystem is probably better off. And if we're covering literals, then it just doesn't make much sense to exclude where this started with StringToBigInt.

CDA: Quick point of order. I just want to test to make sure that the transcription is continuing. And it is. Okay. We're trying to identify the people on dialed in remotely are hearing some sort of clicking. Please, remote participants, make sure you are muted when you're not talking. We don't know if it's you and if we haven't identified the cause, but hopefully we can nail it down.

RGN: Looks like WH is up next.

WH: My position is that negative exponents should be allowed. This should accept anything in exponential notation which produces an integer. You might get those as inputs. If you disallow them, you'll get some surprises if you try to use == on them.

RGN: Would you include that for the literal form as well, what we're looking at here on the top line?

WH: Yes. It's just simpler to have the same syntax for anything in exponential notation throughout the language.

CDA: MM?

MM: Could you go back to your use cases slide? Yes, that one. Second bullet, I just have no idea what you're trying to say there.

RGN: The JSON grammar for numbers includes exponential notation.

MM: Yes.

RGN: And when you are parsing JSON with source text access, for instance because you know that a particular value ought to be represented as a BigInt, then if it comes in this form, it would be better to use the BigInt function rather than converting it yourself.

MM: My apologies. I had a reading typo. In my head, I saw with and heard it as without.

RGN: All right. The queue is currently empty. I did want to point out that in my mind, these open questions ought not block the proposal from stage advancement. In stage two, these are the kinds of questions that I would hope to resolve with implementer feedback. And with reviewer feedback as well for that matter. There might be other reasons to object, but these questions as far as I can tell would be appropriate as stage two concerns. So I'm interested in support for advancement. I'm also interested in reasons not to advance.

CDA: MM, supports stage two.

CDA: MF. Typing furiously.

MF: I mean, and this has nothing to do with my opinion on this proposal, but I do kind of feel that both of these are stage two concerns. I think that they're fairly major design forks here. Whether we are considering changes to comparison operators is really significant, I think, to me. I'm having—can you make an argument why you think that they are not significant?

RGN: Yeah, because resolution in one direction or another I think is still valid under the scope of this proposal. The major semantics really are being able to use exponential notation to define a BigInt. And if there are some places where for compatibility reasons, that doesn't work out, the proposal can be adjusted to exclude them. Again, I don't think anyone's actually writing that code. I think the major semantics are the BigInt constructor handling an exponential notation string, and also in light of the recent changes, expanding BigInt literal syntax for cases that we expect. Any tweaks that come up as a result of this, I think are just part of normal proposal development. They're not changing major semantics. They're just shifting a boundary.

CDA: Can you reply from PFC?

PFC: Yeah. I think there is precedent for solving questions like this in stage two. I think we did it in Temporal, figuring out what should the comparison operators do when you have a Temporal operator or Temporal object on one side of the operator and stage two was when we worked out the value of throws mechanism. And I think that's fine for this proposal as well. It's part of the scope and the API design. So I mean, that works for me.

CDA: All right. On the queue, we have support from PFC, WH, YSZ. Jordan. And Peter. And PFC is entering the queue again. With support. SFC. I have no way of knowing if it's going to be an end-of-message thing. Yes, it is. Plus one. SFC says plus one. Stage two means we want it. Questions are okay. I assume he means open questions. MF is next.

MF: Okay. It sounds like this has a lot of support. And I don't want to be the only person in the way here. I just do want to call out that we've seen that we are a first mover here. There are no other languages that do this. This is not a small decision. I know that going from stage 2 to 2.7 is really the big jump. That's where we really nailed things down. And that often is most of the work of doing these proposals. But I feel like we are pretty much setting the course here and it's a completely uncharted course. And maybe others have thought more deeply about it than I have and have gotten more comfortable with it. But I still feel like this is kind of really still up in the air. But if I'm the only one that feels like that, if others do have more conviction in the positive direction than I do in the uneasy direction, then I'm okay with it going forward.

RGN: Maybe ironically, I actually do share that position in large part. This is a simple change, but a significant one. And a novel one as far as I can tell. So I don't want to take it lightly. That is specifically the reason why I'm here asking for stage 2 and not 2.7, because I don't think that we are currently in a position to have definitive answers to those narrow questions for it. And I do expect that there's going to be possibly quite a bit of back and forth in stage two while we figure things out. Maybe someone discovers that, in fact, there is precedent in a more obscure language. Again, looking at the literals in particular, WH wants `10e-1n` to be valid. My inclination, as I said, is to be more conservative. We can always introduce it over time, but we can't back it out. So I do think that, yes, there's a lot of significance here. And I'd like to explore that in stage two. I haven't even contemplated writing tests for this yet because of this kind of concern. Many will be simple, but these edge cases really do matter.

CDA: OFR.

OFR: Okay. Just since I just want to voice support for that opinion. I think because we only heard the plus ones so far. Yeah, for example, one thing that we were not convinced by is the use cases that we've seen so far. It's not entirely clear that they're that important. It's not a blocking concern, but some concerns might become blocking from us, for example. We certainly would not want truncation. I'm not sure how we would feel about the minus one and things like that. Especially if any kind of parse-up parse complexity blows up if it turns out to be really complicated to parse and to get the right answer. Yeah. So I want to support this statement.

CDA: All right. That is it for the queue. So lots of support for stage two, but do we have does the descent amount to objecting to stage two advancement? That is not clear to me. I hate to put people on the spot, but we kind of have to decide.

MF: Are you asking for me to give consent?

CDA: I'm kind of looking at you and OFR.

OFR: As I said, not currently, but I wanted to put it on the record that there is concern here, and it's not just like everybody loves it.

MF: Okay. And as I said, from what it seems like, it seems like people are—there's a lot of positive support, and some of that support is strongly positive. And in that case, maybe I am fine with it going forward. I'm not going to oppose advancement to stage 2.

CDA: Okay. So it sounds like you have stage two. Are there any objections? To stage two. Just triple-checking.

RGN: I do need reviewers.

CDA: Yes. All right. Congrats. We'll do this in two steps. Congratulations. You have stage two with some dissent.

(applause in room)

CDA: And who would like to volunteer as a reviewer?

(MF raises hand)

CDA: MF? Fantastic. I feel like it has to be OFR.

(RBR raises hand)

CDA: RBR? All right. Thank you. All right.

### Speaker's Summary of Key Points

* There are significant concerns from MF and OFR.
* Questions about negative exponents, non-integer significands, and operator behaviour remain open.

### Conclusion

* The “BigInt from exponential” proposal is at Stage 2, with reviewers MF and RBR.

## Continuation: `JSON.parse` Options for Stage 2.7

Presenter: Peter Klecha (PKA)

* [proposal](https://github.com/tc39/proposal-json-parseimmutable)
* [slides](https://docs.google.com/presentation/d/1xNMjd3p8wo4NqtuBCOu-We_lFWX0SWI36721xmjlSHQ)

CDA: So we have about 30 minutes left. … PKA, JSON parse options continuation?

PKA: Sure.

CDA: Was there a queue for that? Let me check. No. PKA.

PKA: Yes, sorry. It's going to take me a second to bring the slides up, but we now have editorial approval for `JSON.parse` Options. Sorry about not getting our ducks in a row before we came yesterday. So the question was, can we have a consensus for stage 2.7?

CDA: Yep. So again, yesterday, we could not advance because we did not have editor sign-off or we weren't sure if we had editor sign-off. We do have editor sign-off. So do we have support for 2.7 for JSON parse options? You have a plus one from JHD. MM also supports. LVU supports. RBR supports. Do we have any objections to advancing to stage 2.7? All right. Congratulations.

PKA: Thank you.

ACE: Yeah. I'm wondering if, people having had a night to sleep on it, if anyone has had inspiration for the options bag name, because there was not a huge amount of love understandably for `preferNullPrototype`. So maybe with a night of Japanese food and sleep, have any ideas emerged? I would love to hear them because I agree it's not a great name, but I do think it's the best I've heard so far.

JHD: I mean, in the absence of a better idea, I think just `nullPrototype` would be fine. It's the word “prefer” that I think is the issue because that suggests that it's not a certainty.

PKA: The question is, how do you signal—unless you think it really doesn't need to be signaled—that it's just for the plain objects and not for the Arrays?

CDA: MM?

MM: So just popped into mind just now, `bareObject`. I'm not actually quite suggesting it. Because “bare” is a strange thing to introduce. But if `[some short adjective]object`, works like `bareObject`, that sounds better by being an adjective on “object”, it more clearly doesn't more clearly does not apply to arrays even though technically arrays are objects.

CDA: LVU is on the queue with “`ObjectPrototype: null`? Could even later be expanded”. RKG is entering the queue.

PKA: Oh, I like that.

ACE: I thought a similar thing, LVU. Because I thought that it's kind of a it gives you a lot of expressive ability. Like if you know you’re parsing something where actually the objects should be hydrated with a custom prototype. The only thing I didn't like about it is that it doesn't map as cleanly to import attributes. There where we can't have a dynamic expression. Like we could special case like the null literal to say that just that is supported. But you wouldn't be able to reference any of that's the only thing I don't like about that idea. Otherwise, I actually think it's great.

PKA: It expands the scope of the proposal that you could do interesting prototypes and not just null. We could maybe only permit null for now and then leave it as a follow-on to think about other prototypes.

LVU: That's the idea.

CDA: There's a reply from MM.

MM: Just what was just said, I support that. I support `ObjectPrototype: null` over `bareObject`. Permitting only null for now. Perhaps permitting only null forever.

CDA: RKG?

RKG: I don't have any objection to what was just said, but if we were concerned with not liking “prefer” to the point that we were suggesting just `nullPrototype`, we could consider `nullPrototypeObjects`. Just kind of saying the obvious thing out loud; might have its own imperfections.

KM: I don't know if this was discussed before. And maybe it has and we've decided to reject it for other reasons. Also, a little late in where we are, but have we considered letting users provide the prototypes specifically as a parameter for objects and arrays individually and then all the ones that are created get that prototype and null is perfectly valid value and they can just have whatever they want?

PKA: Right. I think that's what LVU’s suggestion I mean, that was just for objects. I guess we could think about it also for arrays. I’ll think about that.

LVU: (indecipherable)

JHD: That does have the same problem that it doesn't work with import attributes. So it's fine if it only allows null or undefined slash nothing, but that's not fine for custom objects.

CDA: Chip.

CM: Yeah. I'm not fond of object prototype null just because it carries the implied promise that you could put something else there besides null, even if you don't support it initially. And that opens up a whole can of worms and it feels like feature creep to me. If the intention was just to nail down, yeah, we want the prototype to be null, then I suggested yesterday `nullObjectPrototype` instead of “prefer”, and you pointed out correctly to that in fact, that didn't quite apply to array. But all of these other suggestions are also glossing over the fact that it doesn't apply to array. And if we're going to gloss over that one, we just go with the straightforward simple…

PKA: Something about Object prototype makes it clear to me that it's talking about because the prototype for arrays is called array—I don't know. Yes. Yes, you're right. Arrays are objects. And so `ObjectPrototype: null` has the same problem as `nullObjectPrototype`.

CM: Yeah. And if you're as I say, if you're going to just accept that, yeah, we know arrays are technically object, but what we're really talking about here is object objects. Then I think not being pedantic admittedly a simplification, but I think it's a pragmatic simplification.

CDA: KM.

KM: Maybe I just missed what happened here because I was attempting to get back into the queue and then had problems with my computer. But yeah, is the import attributes problem still a problem if it only accepts the literal null?

PKA: It's only a problem if you think that the import assertion should behave exactly the same as the dynamic API.

KM: Okay. Is that a concern of this committee?

PKA: It's certainly not a concern from Bloomberg. Our interest is in the null thing.

KM: Do you it is? That it has to be functionally identical.

JHD: It's not necessarily that it has to be functionally identical. It's that it's a weird inconsistency if it can't be.

KM: I mean, how would you even—how would it even make sense?

JHD: No, that's what I mean. It wouldn't. But then you can use it to the extent that it makes sense but you can't use it beyond the point that it makes sense. But like if you typed your import attribute and you put something that in code would reference an object like `Array.prototype` or something, and then you get a SyntaxError. That's just weird and confusing, I think. And that doesn't come into play if it's a boolean.

CDA: So we have a point of order. Please use the queue. RBR.

RBR: I do like and just the simplicity of prototype colon null. Because it's also aligning very well with freeze very similar. However, from ship, I also see that point with the API like seemingly supporting many more while it's not. Now, if we would go that path, I would definitely strongly recommend to prohibit any other value to throw an error because even then it's confusing a prompt. Is that important in the future when we don't write code anymore? I don't know. But it's definitely something that would hit people initially, but as soon as they have been hit once, it's probably not important anymore and it's more about like, okay, you're only allowed to use that one value, right?

CDA: RGN.

RGN: Having had a night of Japanese food and sleep, I think “objectPrototype” as the name or as part of the name really does accurately communicate behaviour. Yes, arrays are objects, but also arrays have their own prototype. And “objectPrototype” exists in contrast with a hypothetical “arrayPrototype” option. So in that context, it really does clarify it, I think. And that has me agreeing with CM as well; object prototype is the right level of specificity.

CDA: LVU. Just sorry, real quick. We only have a couple of minutes left, so try to be brief.

LVU: I wanted to reply to CM. I do agree that object prototype null does imply that it supports mode cases. So you do have a small hit in ergonomics right now. That's the trade-off in these cases where you implement a partial syntax first. That can later be extended. The idea is you end up with a more coherent design if you need to extend it later. At a small cost right now. So the question is usually how likely is that extension in the future. Given the response, in the room, it seems to me that the use cases for hydration using custom classes are likely. It seems that they're prominent. So I think in this case, the trade-off is worth it, but your mileage may vary. And I do agree with the point that many people made around arrays being objects is not something that is likely to confuse actual users, even though it is technically correct.

CDA: ACE.

ACE: Yeah. I personally am kind of excited by your idea LVU in the future, maybe allowing it. Though in my arrogance, I feel like a lot of people won't use it correctly—grabbing a prototype and adding it onto an object parsed is only going to work for classes that don't use any kind of private fields or anything but a very simple constructor. It's so it's I think it would be like a power user feature and so my feeling is actually the likelihood of us ever agreeing on adding that and feeling that it could be used well versus just saying to people, no, in that case, you need to use a ride either because you're using a prototype which implies you're using some sort of class which implies you really should be going by the constructor for the instances. Makes me feel like we leaving the door open is a door that will always remain open and doesn't pay the cost. Is my gut feeling overall.

CDA: All right. There is a reply from JHD, but we are out of time. So I will quickly read the items in the queue. We might be able to do another continuation later, but we'll see. JHD says, plus one to ACE. LVU says, `JSON.parse` object somebody can copy that into the notes:

LVU: (from queue) e.g. `JSON.parse(obj, { objectProtoype: Reactive })` /eom

CDA: Object prototype reactive. JRL says, would also be happy with always being null prototype. MM says, Gemini says the primary term for a JavaScript object with a null prototype is a null prototype object. JHD says the term I've used and seen the most frequently is null object. RBR says, I also like the future use case possibilities. All right. For our next topic.

PKA: So just to be clear, so we have stage 2.7 with what’s on the screen (namely: `preferNullPrototype` as the key name). If we want to make a change, we'll come back to committee for the change.

### Speaker's Summary of Key Points

* Editor signoff was received.
* Alternatives to `prefereNullPrototype` were discussed.

### Conclusion

* The “JSON.parse options” proposal advanced to Stage 2.7 with `preferNullPrototype`.
* Champions are likely to revisit that name; unofficial consensus in the room was achieved that we should not care about the “arrays are technically objects” issue when determining a name.

## Continuation: Disallow Adding New Private Fields to Non-extensible Objects

Presenter: Olivier Flückiger (OFR)

* [proposal](https://github.com/tc39/proposal-nonextensible-applies-to-private), [PR](https://github.com/tc39/proposal-nonextensible-applies-to-private/pull/12)
* [slides]([https://docs.google.com/presentation/d/1AZYPsiU0LEwI-Hh4zRrW23DvwCMUF5wHjPS4pFh4j6E/edit?usp=sharing](https://docs.google.com/presentation/d/1AZYPsiU0LEwI-Hh4zRrW23DvwCMUF5wHjPS4pFh4j6E/edit?usp=sharing))

MM: I'm sorry, what's the topic?

CDA: It is now on TCQ.

MM: Okay, thank you.

CDA: Give me one second to rehydrate the queue.

MM: Okay.

CDA: Unfortunately, MAH is on the queue, and I don't think Matthew is here.

MM: I can represent MAH adequately enough for this. I believe.

CDA: Okay. So the first one there is always extensible recreates the weak map virtualizability issue.

MM: The OFR, you were going to you showed me a slide that you wanted to present in this topic came up again. Can you show that slide?

OFR: Yeah, I'm trying to find them. One second.

MM: Okay. Because the simple answer with regard to MAH's follow-ups here, let me take a moment. Yeah. For both of MAH's follow-ups, if we can agree on the slide that OFR is about to show, which basically suggests that the resolution be PR 12, then I think that takes care of Matthew's concerns as well as mine.

CDA: All right. MAH was also the next topic, which is always or never extensible create a partial predicate for testing Proxy nature of an object.

MM: Likewise. The if we agree on PR 12, that concern is settled.

CDA: Okay. That's it for the queue.

OFR: I tried to all right. Yeah, here's the slides. I tried to summarize what we did in the first session. So basically, well, we tried this unbiased temperature check, and it failed it seems like it's hard to rely on intuition here. Then we found out that excluding proxies from this proposal doesn't have consensus. And the reason was that if you treat proxies specially in this case, then they cannot faithfully emulate a normal object. And that would be unacceptable to some delegates. Because it would mean that you could use this property to test whether something is a Proxy or the normal object that it proxies. Then we also found out that probing only the target object with basically bypassing the Proxy does not have consensus. And again, here there is a very specific use case. Where basically the Proxy tries to stay basically tries to keep its target object in sync with some other object that is not accessible. So only the Proxy can mediate between the two. And so if we bypass the trap, then the target object and the object that the Proxy tries to emulate can get out of sync without the Proxy being able to intervene. So that also didn't have consensus. I also found out that basically calling the trap multiple times for each non-method property is okay for the implementers I talked to. And we also found out if we did this combo proposal that I put on the slides where we would sometimes ask the Proxy trap and sometimes go to the target object, sorry, that this would give us yet another way of differentiating between proxies and normal objects in a way. So it would again basically expose the Proxy. So given all these facts, it seems like the initial pull request 12 is essentially the only option that we are left with. So in summary, I would now propose to just go back to that pull request and have a decision on the pull request.

CDA: WH is on the queue.

WH: We've been discussing proxies quite a bit, but I'm interested in the other invariant, which is that you don't see partially constructed objects. Which of the options maintain that invariant?

OFR: So combo tried to maintain that invariant a bit more than pull request 12. However, it's an invariant that is already not present at the moment. So wait, maybe I can let me share the original slides. So basically, already currently, you can observe partially constructed objects when it comes to fields. To non-methods.

WH: How do you do that?

OFR: (pulls up a slide entitled "BG: Installing private properties is not atomic") Like this? You just have an initializer that doesn't for example, throws or freezes the object or whatnot.

WH: Okay. Let's see. This class fails partway through initialization.

OFR: Essentially, yes.

WH: I'm interested in the hostile scenario where the class is well-behaved, but can you make the class misbehave from the outside.?

OFR: Right. This is the new hostile scenario where basically the Proxy blocks the construction midway. And on the one hand, it is opening up basically more ways of blocking the construction midway, but on the other hand, this can only happen if you do this return override thing. So it can only happen if basically your superclass returns you something which is a Proxy.

WH: Okay.

OFR: So in a way, it's opening up more ways to block construction, but on the other hand, it's only in the specific case where you're superclass is a Proxy.

WH: Okay. So this cannot arise if the superclass is not a Proxy?

OFR: No. As long as all your fields right-hand side expressions are pure.

CDA: Okay. All right. That's it for the queue. So do we want to talk about PR 12? No, because ACE is entering the queue.

ACE?: I'm faster.

CDA: No need. Is that no need to speak? Okay. Right at the beginning. So I can, yeah. ACE says very supportive of PR 12. Do we have any other support for the changes in PR 12? I feel like there definitely was yesterday. If I'm not mistaken. YSZ.

YSZ: Yeah. I talked to yesterday and I think that pretty much from the engine's implemented point, we are only stamping for private method once and for private field, we are stamping for each field right now in V8 and JavaScript at least. And in terms of implementations, efficacy, I think even if we remove these kind of steps of traps for field, we probably end up just allocating inferred properties size from the code and pretty much we can just make it efficient as is. So then I'm pretty much supportive to PR 12's change features keeping the current engine's efficacy and basically solving this problem.

CDA: All right. RGN supports the PR as does DLM. And that is it for the queue. Do we have any objections? All right. Congratulations. Do we clap for this one? Maybe a small golf clap. Snaps. All right. We only have a couple of minutes left. So we will just break early for lunch. We'll see everyone back. Oh,

MM: Chris, is there a resolution on moving the one that Matthew needs to be moved?

CDA: That is going to be our first topic you're referring to thenable curtailment?

MM: I'm referring to that one specifically.

CDA: Yeah, that one is our first topic after lunch.

MM: Well, Matthew, be able to make that?

CDA: But that falls within his constraints. So hopefully.

MM: Oh, it does fall within his constraints. Okay, great.

CDA: Yeah, his constraint was that he can't be here for this session, these two hours that just are almost finished passing.

MM: Okay.

CDA: Yep. Okay. Just a quick thing about your badges. This is just for the people in the room. Please guard your Sony building badge with your life. I see some out on the table just scattered around. That's probably not a good idea. Maybe put it around your neck or keep it in your bag or otherwise belongings. There is a more eloquent comment about this in the Tokyo chat room. Please review that and let us not lose any additional badges. Also, it may jeopardize your ability to go on the tour of Sony HQ. All right.

### Speaker's Summary of Key Points

* Special-casing proxies is rejected.
* Any different handling between proxy and normal objects is rejected.

### Conclusion

* Consensus for PR12, only checking once for private methods

## Thenable Curtailment for Stage 3

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1Gs5s56q0znHMX5mfup4PslGUrnM3_ngeaUqXy3STt2A/edit?usp=sharing)

MAG: We're going to do thenable curtailment, and I'm attempting to get it to stage three today. To remind people, this is a new abstract operation safe Promise resolve. The basic thing is that it does is it will defer by one tick Promise resolution if and only--

MAG: So abstract operation defers by one tick if and only if the thing that you're going to resolve could run user code which boils down to the thing is an object that has something on its prototype chain which could be a Proxy, has a then property which is a getter. The spec text is available at the link there for detail-oriented people. Because I'm aware that I'm flubbing things as I'm saying it aloud. Since last we spoke, and I know it was only one meeting ago, we've had more thenable security bugs. In fact, as a result of one of these thenable security bugs, we've actually decided to deploy this as our chosen solution for trying to stop these bugs from happening in our streams implementation. So I supported our streams module owner in deciding this. But it was their decision. So we are going to be as Firefox evolves, I think it's not this next release, but it is the release that is currently in beta will have safe Promise resolve powering streams. So in the streams code, whenever it resolves a Promise, it will use the safe Promise resolve steps by itself.

MAG: We have the test262 PR. It was written, reviewed, thank you very much to KG for reviewing. Especially reviewing in time for this meeting. I very much appreciate it, especially considering the review queue for test 262. Again, we do have a prototype in Firefox that people could turn on if they felt so inclined. This is the name of the preference in order to turn it on. I have been using this in my main browser since I landed it months ago. I have noticed zero bugs. Which is good. That's the hope. But we will, as we are headed into stage three, we might discover things. But I'm hoping not. At this point, I'd like to ask for consensus for stage three. And I'm wondering if MM has anything that he wanted to try to communicate for MAH because I was surprised by the scheduled request.

MM: Well, if there are no changes in the proposal from what we saw last time, then no concern. The concern was that if there's an issue, whether it was in what you were coming to the committee with, which you're clearly not, or if something came up in discussion that caused things to change, I would need MAH’s opinion before I could approve it.

MAG: No, no changes. We resolved everything last time that I need to change. But the spec itself is the same as last time. We discussed.

MM: Okay. Excellent. We support.

MAG: Okay.

RPR: On the queue, you also have explicit support from MAH.

MAG: Great. Glad to see you. You know what I mean.

RPR: You also have strong support from KM. Plus one support from Chris. Can I just ask also, obviously, the tests? What's the status of test 262?

MAG: The PR is approved, but not merged. I believe it's the status.

RPR: Is there a reason it's not merged?

KG: Not particularly. As far as I'm aware, I'm the only maintainer who's looked at it, and I just wanted to wait and see if other maintainers had anything to say about it. But I'll bring it up at our next call, and if no one else wants to review, we'll land it then.

RPR: And CDA points out, please use the queue. ACE.

ACE: I thought yesterday we asserted that tests being merged wasn't a condition for stage three.

CDA: I didn't mean to imply that it was. I was just curious if they're approved, why weren't they merged?

RPR: We've only heard support. Are there any objections to stage three? There are not. So congratulations, MAG. You have stage three. Thank you very much. I definitely oversized the time box.

MM: Thank you for your flexibility on the schedule.

MAG: You're welcome. I've got to go to bed after this.

RPR: That is also the message from CDA. For you to go to bed.

MAG: I'll put the summary in the notes, but then I will go by.

### Speaker's Summary of Key Points

* Security bugs continue to show the need, tests are written and approved, request for stage 3

### Conclusion

* Thenable Curtailment acheived consensus to advance to Stage 3.

## Private declarations for Stage 2

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-private-declarations)
* [slides](https://docs.google.com/presentation/d/1uM_nsM0eVc7G0_Pse2JsC5Xn1uBhgfRAgYYOlBY8v8s/)

KG: Excellent. Okay. Private declarations. Same repository as last time. So before I get into this, I want to start with a disclaimer in the sense of—I wish to disclaim my previous presentation. I presented this at the last plenary with a different syntax and also I did not do a good job of motivating it and talking about what it was and wasn't doing. If you were present for that presentation, please put it entirely out of your mind and come to this with fresh eyes. Do not think about the things I talked about last time. Do not think about the syntax I showed last time. I was, well, A, I was presenting a syntax that I no longer stand behind, and B, I did not do a good job of putting this in context. I had been staring at it too much myself, and didn't present the correct context for the committee at all. So if you were here last time, please forget about everything I said. Just come to this fresh. Okay.

KG: So where we are with private fields today is, we have private fields in classes. They're great. They have lots of properties that you want. They're unforgeable. They're actually private. They have a privacy model based on lexical scope. So it's a similar privacy model to how closures work. And it's statically analyzable. And minifiable. And they are not reified in any way. You can't introspect on them. Which is necessary for both performance and also keeping them private. Well, not strictly necessary, but useful to that end. So they are an existing thing in the language, a well-used part of the language.

KG: But there's this oddity, which is that they are restricted to class syntax. The purpose of this proposal is to explore lifting that restriction. And that is the only purpose of this proposal. I explicitly do not want to talk about adding different kinds of private state or changing how private fields work on objects or adding new kinds of property descriptors or reifying private fields or exploring fancy new ways of using WeakMaps or any of that. If you want to do those things, you are welcome to do so. But the thing that I am interested in is taking the thing that we have and removing this weird syntactic restriction that we have for it. I don't think there's any reason that the private fields that we currently have need to be tied to classes. And I want to look into taking the private fields that we currently have and not making them be tied to classes. So that is what this proposal is about.

KG: So what do I mean by "private fields are coupled with class syntax"? If we're not doing any of the things we were talking about on the last slide, what are we actually doing? What are we actually interested in? What restriction are we interested in lifting? So in a class body, if you have `#x = 1`, this does two things. It makes the name available in the lexical scope so that you can read it and write it and perform membership queries. And it also installs a field with that name on instances of the class. There's no way to introduce a name without also installing it on either the class itself for a static private field or instances of the class. And there's no syntax for creating something that is neither a class instance nor a class itself that has a private field. And so these restrictions are to me completely arbitrary. There's no reason to say that you can only introduce a name if you also are installing it in a class. And there is no reason to say only class instances get to use private fields.

KG: So okay. What if we lift these restrictions. In particular, what if we add a way to declare a field outside of classes? I think the natural way to do this is with the `private` keyword, although there are other keywords that we could explore. But this is pretty natural. You have, in a similar way to declaring a variable with `const x`, you have to declare a private name with `private #x`. This can't take a value. You can't put an initializer after the X because it's just a name. And to actually use it, you have to put it on an object. So you could continue to put it in a class the way you can today. And in this case, I want you to imagine that the class body would now see that there is a name already in scope and use that rather than introducing a new one. So here you have a scope in which you can refer to the private name. That is not a class scope. But you can use it in nested scopes, including nested class scopes. And just like today, if you try to refer to the name outside of the scope in which the name was declared, it's an early SyntaxError. It's a parse error for the whole program. So I think this is a pretty obvious thing to do.

KG: Another pretty obvious thing to do is to just let you put private fields in object literals. So you introduce a name in the scope. And then you are able to declare an object literal that has the field.

KG: And that's it. That is the entire proposal. This is not a new kind of field. They continue to work exactly how they already work. The only differences are that now we have a new syntax for declaring fields in scopes that are not classes, which doesn't automatically install it on anything. And we have a new syntax for putting fields on objects. And in object literals. Not just on class instances. Everything else is exactly the same. In particular, there's no reification. There's no changes to the privacy model. There's no new way to add fields to an existing object as we have been talking about. You can stamp private fields on an existing object using the return override trick. This isn't adding any new way of doing that. And in fact, it would continue to be the case that the only way to add a field to an existing object is using class syntax and the return override trick. And it would continue to be the case that reading a field from an object that lacks it is an error. There is one difference, which is why there's an asterisk in the title of this slide. But we'll get to that in a second.

KG: So why do we want this? Well, one reason is that some code simply doesn't want to use classes. For example, if your function is returning objects of different shapes, using classes is kind of weird because classes really only have one declarative shape. So you might want to return two different object literals. But you can't do this if you want to have a private field. There's lots of code in the world that for one reason or another simply doesn't want to use classes. But you still might reasonably want to have the things that private fields give you.

KG: Another reason might be something that people in other languages are familiar with as friend classes. These are two classes where the classes have a close relationship such that it makes sense for one class to be able to introspect on another class's private state. For example, you might have a graph and nodes in the graph such that the graph class is able to connect two nodes. And this would entail modifying the private neighbors sets of each of those nodes. You can't easily write this code today. It's possible to do by nesting these classes and doing some horrible things. But the code that you have to write today for this is quite ugly. Sometimes the natural thing that you want is to just have two top-level classes that have access to each other's private state. And these really do need to be private if you want to maintain the invariants. So the thing you would like to do is to allow these classes to work with each other.

KG: Similarly, you might want to have friend functions. So for example, just because you are vending class doesn't necessarily mean you want to vend all of the capabilities associated with that class. You might want to have some capability for working with instances of a class, which is separated from the class itself. And again, this is possible to accomplish today, using static blocks for example. But it's pretty ugly. And I think it is much more natural if you can just write the code such that a function outside of the class has access to its field by having a private field which is accessible to both the class and another function.

KG: Also, you might want to have something like `protected`. This is in quotes because protected in a language like Java means that all subclasses have access. And here, it would just be that you have some fixed class hierarchy. But I certainly encounter this case fairly often where I'm defining multiple classes in a hierarchy and I want one of the classes to work with private state that is defined in the superclass. And again, you can do this by nesting the classes syntactically. But it's pretty ugly. And you would really prefer to be able to write the classes at both at the top level, but this only works if both classes are able to access the same private field.

KG: Okay. So I had that caveat earlier about, there is one way in which this would change the semantics of existing code. Which is that I said this would make it so that if you see in a class body a name which is already present, then it would reuse that name. This would technically change the semantics of existing code because you can today have an inner class that uses the same name as an outer class. So there is some slight web compat risk to this.

KG: But as far as I can tell, literally no one has ever written this code outside of tests. I was unable to find any instances of this. And I looked a lot in—addition to the slide, I also did quite a lot of crawling of GitHub. But I also checked the top 17,000 npm packages. And I found almost 700 that have a private field. But it is extremely unusual to have syntactically nested classes at all. And especially in classes that have private fields. And I was unable to find any instance anywhere where there was a shadowed private field. So I don't think this would actually be a problem.

KG: Yeah. So I think it would be compatible to change the semantics of existing code. And other than that, everything stays the same. I think that the syntax is pretty natural. And much better than the syntax I presented last time. Okay. That's my whole presentation. Let's get to the queue.

OFR: All right. Yeah. I have one comment to this question. To this initial because you kind of glossed over it when you presented how private fields work. And when you said this is the only proposal that I can pull out Symbols. I think that's a bit simplistic because basically the difference is if where Symbols are created, right? It's very uncommon for people to instantiate the same class literal multiple times. It's very common for people to instantiate the same function activation multiple times by calling that function, right? So we're basically creating Symbols in scopes that are common to be re-executed whereas currently we're only creating Symbols in scopes which are very uncommon to be re-executed. So for example, if you wrap this is a good example. If you wrap this example into a function then you will get back the natural place where I would put private ID without thinking much. I would put it inside the function. But that means I get every time I get back an object literal which has a different Symbol on it. And it's not compatible with all the other object literals.

RPR: Mark has a request. OFR, can you explain using spec language rather than saying private Symbols?

OFR: Okay. I don't know. So hash ID. I don't know. I don't get the reply.

KG: MM, I can probably explain. You can think of each private name as being associated with a Weak Map, right? The point here is that now you need a WeakMap per—in this example \[on slide], you now need a WeakMap per instantiation of `makeWrapper`. And if you remove everything except the class, if you remove the private declaration and the function consume from the slide, then you could write that code today. But the claim was that it's pretty unusual to have this case where you are evaluating a class literal multiple times. Does that answer your question?

MM: It answers my question. If OFR agrees that what you said means what he was trying to say.

OFR: Okay. Sorry. I'm confused. So how is `#value` called? That is a Symbol or not? How is that called in the spec? Sorry.

KG: Private name.

OFR: Okay. So we're creating a private name here. And what I'm pointing out is that every time you call this function, we create a new name. And the names are not compatible with each other. And it's a detail of this whole system that many people are not aware of because we rarely if ever create the same class twice. And that's why this problem never occurs. However, here now, because now you can stick this creation of this private name almost in any scope, now it's very common that we will have the same it's even that shows how annoying it is to talk about it because we will have twice the same private name but it's not the same. Underlying, right?

RPR: Okay. There's a very deep queue. So we need to be brief.

MM: Okay. That answers the question I was asking. I now understand.

RPR: MF.

MF: Does this proposal actually need those declarations to be separate private names or could we do a template-object-style interning to have them be a single private name?

KG: I really don't want to consider any modifications to the privacy model.

RPR: JHD.

JHD: So my reply is to OFR. The language already works like that in a ton of ways. That's how identity works. That's how new Symbol works. That's how if you create that class wrapper the instances of from the first call aren't going to be instance of the constructor from the second call, right? So I think in fact I disagree with you. This is something that's widely known. And certainly frequently misunderstood but also widely understood. It's just the way JavaScript works. And I think that's okay. And I also agree with Kevin. I would very much not want to do a template object-like thing. I think that would also be more confusing because it would deviate from the way the language otherwise works in almost every other respect.

RPR: Okay. KM.

KM: Is this less confusing if it's disallowed for object literals? Because it'd be the same problem that you have with class literals today. So is the concern mostly just that because we've added the extension to object literals which people use in functions today, that this behaves differently than object literals kind of would today? Or is it just a general statement independent of that?

OFR: No. It's more the concern that it is it's more a concern about where you're now allowed to put this private keyword, in which kind of scopes. It's more a concern about scopes. So currently you're only allowed to create a private name in a class scope, which most of the time is only instantiated once. And now you're also allowed to put this into a function scope, which is instantiated multiple times.

KM: So you can only consume the private with a class.

OFR: No. You can consume it everywhere. No.

KM: How do you consume it outside of a class? Assuming that you don't allow object literals to have this.

OFR: That was on the slide here, right? So here you create the private name at the top level and you consume it in an object literal, in a.

KM: Right. That's what I'm saying. I'm saying if we didn't allow the object literal case, would your concern be less in.

OFR: Ah. No. I don't think so. My concern is about where you are allowed to write private, not about where you're allowed to consume it.

KM: But by limiting where you consume it would be the same as using a class body today with private literals and therefore when you have a class inside of a function, each of those classes gets distinct private names. So you would effectively have the same behaviour. You just moved where that name is declared.

OFR: Okay. I see what you mean. Yeah. Yeah. It would reduce yeah. I agree. I agree. The other way okay. Now I agree. The other way of thinking about limiting the problem is we could also say you're only allowed to write private at the top level. That would be the other way to reduce the problem. And just to state it, I'm not trying to say that this is a problem in how it works. I agree. This is the most consistent with the rest of the language. It's more a problem of how it is explained, I think. I think when we write down this proposal and explain it to people, we need to make sure that they understand that it works and it's not just like, oh, it's like in classes. There is more nuance to it.

RPR: Okay. PKA says if private was inside the function, you wouldn't be able to consume it in getId.

KG: In this slide, yes. But in this slide, no. So yes, it's true that if you put it in certain function scopes, you run into this problem.

RPR: Okay. Let's go to RBN. About friend classes. RBN, are you dialed in?

RBN: Yeah. Can you go to the slide before this about friend classes?

KG: Yes.

RBN: I just wanted to point out that during the class static blocks proposal, this was the one of the specific motivations for that proposal as well with a very similar slide. The difference was that to make the scope of or make the private state that's within node available to graph, it would have used a let variable in the outer scope and used a static block to write an arrow function or something to it so that it could be accessed from graph. So we introduced static blocks as a way to solve this aside from having a private name declaration syntax. So I'm a little bit less convinced by this motivation specifically, but not all of them in general.

RPR: Jordan.

JHD: This is certainly a bike shitty question or comment, but so I love the proposal overall. I think this is amazing and we need it. I really dislike using the keyword “private”, I think there's already enough confusion around the fact that JavaScript classes do not have access levels and people think they do and want them to even though they can't. And I would much prefer an alternative keyword. Just so I don't have any suggestions, is there a reason we can't just make “const” and “let” work with these? Since they are basically variables?

KG: They are not basically variables, oh God. They don't hold values.

JHD: Okay. That's a fair point. All right. Well, at any rate, so I don't have a suggestion then, but I really don't like the word private. But I love every other aspect of the proposal.

KG: So yeah. We can definitely bikeshed the name in stage two. I think everyone refers to these as private fields. So I don't think using the word private in the language will make that problem worse. You also had in your question, would this keyword be disallowed in a class body? And I'm not proposing to allow the use of the keyword in the class body so you wouldn't see that.

JHD: Okay. Given that restriction. Yeah. So given that restriction, I would definitely not block on keeping it to say private. Because the real concern is about the word private appearing inside a class. I still would prefer a different name even though I completely agree that these are universally called private fields. But again, that's like you said, that's very much a stage two discussion.

RPR: OFR.

OFR: Can you go to the inner example? Yeah. Exactly this one. So there is a sister problem here. So basically, if you write a subclass that uses the same name, then nowadays it just works because those are two different names again, same problem. But now if you write private on top, you will get a TypeError, I guess. Because you're reusing the same name twice. Do you know what I mean?

KG: You mean if on line three, I had said `class extends outer`?

OFR: Yeah. Exactly. If you have “Inner extends Outer”, then it just works. There are two completely separate fields. But then if you write private on top, now you get an error when you try to instantiate inner.

KG: Yes. That is correct. Again, as far as I can tell, this code has literally never been written.

OFR: But I thought you were looking for nested classes. And this doesn't require nested classes.

KG: This does require nested classes.

OFR: No, it doesn't. So if you have—

KG: So if you don't currently have a class, which is syntactically inside of the same class as another, then you cannot currently refer to the same name ever.

OFR: Right. Yeah. Exactly. So if you have a child class that uses the same like the same source name, it will get a different name. So both of these will have two different private fields with two different names effectively. And as soon as you write.

KG: So you're not talking about quite the example on the slides.

JHD: Can I—I have a sort of follow-up question. So to rephrase what you're saying, the current example you're correct. Whether it's class extends outer or not, both outer and inner have two different hash x private fields. If you were to write private hash x above line one, KG, the example went away. And you were to then in the same circumstance, I don't even see why that would be an error. I think that that would be my expectation, whether it's class extends outer or not, is that both the inner and outer classes would then have the same hash x private field installed on them.

OFR: Yeah. Exactly. And that's an error.

JHD: And that's exactly what I would want and expect by writing private hash x because that you only write that if you're intending to reuse the private field elsewhere.

OFR: Right. And that's an error. Because if you install the same name twice on the same object, then that's an error.

JHD: Well, why would it have to be an error in this case.

OFR: Because that's the current spec.

KG: So I yeah. JHD, I really don't want to change how private fields currently work. And that is how private fields currently work. You cannot install the same field on an object twice. But I don't have any problem with the code on this slide being an error. I just don't see a problem with that.

OFR: Well, you can't install the same field twice I hear you.

KG?: That's what this says.

JHD: But the syntax hash x equals something is doing two things in a class body. It's installing the field and it's assigning it. Assigning to it. Right?

KG: So if you just want to assign to it and not install it, then you don't use the declaration form. If you just want the assignment, you write the assignment and not also the declaration. In the class body, you're declaring it.

JHD: I understand that is currently a requirement if you've set up a scenario where you can refer to the syntax of the same field in both classes. That it will error. I'm saying that in the scenario where you've used this new feature of private hash x at the top, why couldn't we make the hash x equals to in the class B not be an error if it's because the field is already installed? That's not changing how anything works because this is a new scenario.

KG: It is changing how something works. It is changing how private fields work.

RPR: I think we should move on. We've got a long queue. And we've already extended the time box. So we've only got five minutes remaining.

RPR: So LVU has said huge plus one. This solves existing prominent pain points while simultaneously fleshing out private declarations into a first class language concept instead of an ad hoc class syntax. Love it.

RPR: And then the follow on is also from LVU: is private compatible with TypeScript parsing? I guess so since it's not used inside class declarations, but just making sure.

KG: Yes. It's totally possible to parse this.

RPR: WH, please be brief.

WH: I like the functionality that this is doing; however, I have severe concerns about how this violates lexical scoping. In lexical scoping, when you refer to a variable nested within a bunch of scopes, you look for the innermost scope that defines this variable. This violates that by instead of looking for the outermost scope that defines that variable. And that is a very dangerous thing to do.

KG: But that is not what I am proposing to do. You would still shadow. The change to how classes would work, in this example, we'd say, it's not that it's looking for the outermost scope. It's saying that the field syntax in a class only declares the variable if it is not already declared. But it's not changing how lexical scoping works. It's not that you're looking to the outermost scope that declares the field. It's that on this slide (4), there is only one declaration of the field, which is on line one. On line four is a reference, not a declaration. It is only installing the field on nodes. It is not simultaneously declaring it.

WH: Okay. But if you didn't have that line one, then line four would be declaring it, right?

KG: Yes. That's right.

WH: Okay. The presentation did not state these semantics. So this is not quite as bad as I thought, but it's still a very significant refactoring danger. To give an illustrative example, people sometimes like to concatenate code. Let's say that both pieces of code have a class which defines `#x`. The front half of the code has some class that has a `#x`, the back half of the code that came from somewhere else also has a class that has a `#x`. The front half also has a top-level `private #x` declaration. If you concatenate those two pieces of code, then the meaning of `#x` silently changes in the back half of the concatenated code even though it was supposed to be lexically scoped. I have issues with that. That's going to bite people.

KG: Well, I don't think people actually concatenate code anymore. They just use bundlers. And bundlers are aware of this. But you're right that that is a hazard. All previous versions of this proposal have used a keyword like `outer` or something to avoid this problem. And we could go back to that. I just really don't like having a keyword. But we could have a keyword that means I am explicitly only intending to refer to the outer one. The big problem with a keyword is that you end up with these abominations when you have anything other than a bare declaration. You have these `async outer #x` or `get outer #x` or something. This is why I'm hoping to avoid a keyword. But yes, that was the reason we had keywords.

RPR: So KG, given that we've already extended the time box and we're about to run out of time with a long queue, do you want to ask for consensus now in the remaining time?

KG: No.

OFR: Can I maybe? I had something for this exact thing on the queue.

RPR: The linear? Okay. Let's use the remaining minute to go over OFR's point.

OFR: Oh, just because now we have it in context. So basically, I want to propose a solution for this problem. So what we could say is that you're only allowed to consume the name once. So you're not allowed to stamp it into two classes, for example. And I think that would remove or not allow to stamp it into two object literals. And I think that would solve most of these problems.

KG: Object literals is the whole point. That's why I want this.

OFR: Okay. But you could rewrite this in a way that you only need to stamp it once. If you put the condition inside the value of your object literal, then you only need one literal. And now you're good.

RPR: So it seems like there's still lots more discussion that's needed on this one. So I think let's wrap this up now. KG, we'll capture the queue. To give more conversation offline. Kevin, are you okay with writing up a summary of what has been discussed?

KG: Yep.

RPR: Okay. You've CDA, you've captured the queue.

CDA: Neo TCQ, if you just go next agenda item, it captures it in the log.

RPR Amazing. TCQ does the capture by default. All right. Okay. Lots of good discussion there. So yeah, thank you, KG. We will move on to the next item.

### Speaker's Summary of Key Points

* Private declarations are restricted to classes; presentation suggests lifting them.
* OFR is concerned this will lead people to getting confused about how class names work.
* WH doesn't like the proposed change to make `#x = 1` in class bodies use an outer name if present.

### Conclusion

* Discussion will continue.

## Composites for Stage 2

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-composites)
* [slides](https://docs.google.com/presentation/d/1lN-LdmUQ9Nh6bF-5uuuuAQhHtDBTmI9xfYyj6TH_8F4/)

ACE: Okay. Composites. For stage two. So first, a recap to page everything back in. Because the last time we spoke about this was in July. We also previously presented this November and April last year. And it very much follows on from the very many, many presentations we did about Records and Tuples. So lots of context to page back in.

ACE: So the core problem space that I present every time so hopefully, this is all very familiar is whenever you're trying to put a richer—you have multiple values that would represent a single key in a map. But I'm just going to use sets for examples because it's easier. Because the keys are all that matter semantically here. If you do something like this with regular objects, it just doesn't work. These two values are objects even though they're frozen and they contain the same thing. Two different objects aren't equal. So we have two items in our set. The most common thing you see code do because it's just right there built into the language is you JSON stringify. So I now have two strings that are the same, and so are considered equal. And I have one thing in my set.

ACE: But I'm not super happy because JSON stringify is just not great for this. It is impacted by key order. That's the most subtle thing that burns people. It will throw on certain value types like bigints. It will subtly change some things: like NaN comes null, dates become strings, etc. And taking some particular a number with lots of digits and turning it into a string consumes more memory. There's lots of examples here where flattening everything to a JSON string especially if you then put that JSON string into a map engines like V8 will then flatten that string. So it's a lot larger memory footprint. And at the end of the day, you now have a bunch of strings as your keys. So if you want to iterate over those keys and reflect on them and use them, you then need to go back the other way by JSON parsing it.

ACE: So what this proposal offers instead is a type that gives you what you wanted originally with objects. So when I create these two things, that contain these values X, my X and my Y are the same, then we say they are equal. And as presented last time, the reason they are equal is because the constructor factory function will intern such that these are literally the exact same object in memory. There's no special path we're hitting there with the triple equals. That is the same pointer. It has no idea we're comparing composites. It just says you're comparing something to itself. Therefore, it's true. So naturally, that's just going to considering it's impossible to tell these two things apart because it's the same thing, it will just flow through the rest of the language. So the set will say you've just added the same object twice. I have one thing in my set.

ACE: So again, core semantics. Again, recapping stuff I've already said before. So this is not a new primitive. You are creating an object here. These things aren't opaque. Like I said, if you have a map or a set, it's very common to then want to iterate on that and not just have a whole bunch of opaque values. So you'll have the keys. And four. They're frozen. Kind of that have to be. They don't have a prototype. So the only values will be accessed on them are the ones that contributed to the kind of its uniqueness. And also as presented last time, the kind of special thing about these that does make them different from other objects is that you can't hold on to them weekly. So that applies to all the weak things. And that language like weak ref, weak map, finalization registry, tokens.

ACE: So how can you tell if something is a composite? You could pass it into a composite. And if you get the same thing back out, it would the proposal provides a nice way to say if something is a composite. Because it's possibly a common thing you'll want to do. So there's just a built-in predicate for that. What the object you pass in, so you're not converting the object you pass in into a composite. It's just kind of a description of what the keys should be. And it's just the own properties of that. So I passed in a bunch of things here. So the things to pull out of this example be inherited property from the prototype didn't make it in. It's never consulted. And then the order we get back. So it's not the order I pass things here doesn't matter. But what matters is all of the just like a regular object, any of the integer index keys, there'll be ordered numerically. And then all the remaining keys are ordered lexicographically. Lexicographically. Alphabetically.

ACE: So the emergent kind of equality that's hopefully obvious. So if I say a composite with X1 and Y4 and then have another composite where I've changed the order of the keys, that doesn't matter. So these are equal. And there's no subtyping equality. If even though these two things both have X equal to one, the fact that something has additional keys that's not going to intern to the same thing. So these aren't equal. So it's not like a partial equality.

ACE: So you can't—I showed what kind of what happens with regular string keys. What happens with a Symbol key? You can't have a Symbol key. And this is this came up with Records and Tuples. There's no way to sort Symbols. So we can't produce a canonical sorting. Therefore, we can't reliably consistently intern. So we just say no Symbol keys. We theoretically could allow some Symbols like registered Symbols or have a string representation. So we could sort those. And you can imagine other various interesting carve outs like if all the Symbols you use have a unique description, then they are sortable. I feel like that I've not been shown a use case where someone wants a Symbol key to kind of name part of their map composite map key. So I think the simplest thing to say to people is no Symbol keys.

ACE: So that's the keys briefly. What can use for values? You can use anything. For the values. So this is like one of the very big differences from reference and tuples where you could only use primitives. Here, all values are allowed. One change since I presented last time is that the existence of a property being `undefined` is carried through. That's not treated like a missing property. So the fact that you had a U key set to undefined carries through to the composite such that it also still has a U key set to undefined. But the equality of this is not like a—you'll just inherit the equality. So if I create two composites with two dates and they are the same point in time, but two different objects, then they're not magically equal. The equality here is just the kind of equality of those values.

ACE: So everyone's favourite topic is minus zero and NaN. We know this is everyone's favourite topic because when we did records and tuples, it was the second most commented on issue. The top most commented issue being bike shedding the syntax. The second most commented issue by a high margin. And it's already the most commented issue on the composites proposal.

ACE: Why do we love talking about negative zero and NaN so much? Well, it's because it's the only two values where we have interesting equality semantics. So we have four types of equality in the language because we love equality so much. So there's loose equality, but loose equality is really just a two-stage strict equality where we try and coerce things to be the same type before checking if they're strictly equal.

ACE: So if we put loose equality to one side, and we have the three, for every single other value in the language, we agree it doesn't make a difference which of these equality operations you use. You'll get the same result, false or true. It's only for NaN and negative zero where we change our minds and we change our minds differently depending on if it's NaN or negative zero. So that's why they're so very interesting to us. And again, this is all just paging stuff in. What do we do with these values currently in the language? We say that you can't fill up a set with infinite NaNs. There's only one NaN you can put into your set. You also can't put two different types of zero in a set you can only put regular positively signed zero into a set. We normalize it. So if you ask if a set contains negative zero, but it contains positive zero, we still just say that's true because we normalize it.

ACE: So for composites for NaN, I feel like because we're interning, NaN has to kind of be equal to NaN. Otherwise, if we wanted to say if you create two composites and you say you have a NaN in there and we want to say that's not equal to something else, then we're effectively saying every single time you create a composite with a NaN aspect component, you'd have to allocate a new composite. So if you just looped creating composites with a NaN value, it would just be like a memory leak. So I think it's just especially again, this is all the primary use cases are all about multi-component map keys. If we say NaN is equal to NaN in a map key, then I feel like we should say NaN is equal to NaN in a composite.

ACE: So for negative zero, I've done the design by committee approach of saying there's an options bag. By default, we again just have the semantics of map keys where we normalize. So negative zero and zero, we say are equal to each other because it's normalized. But if you don't want that behaviour, then you can opt out of that and into saying, no, I it's important to me that the sign is preserved and I want to create a composite that has negative zero. So that's then going to in turn to a unique key that won't be equal to positive zero.

ACE: Just for again, why this is such a kind of interesting topic, even if we look at other languages, on just how do they handle putting negative zero as a key in a collection, then lots of them say that negative zero is equal to zero. But Java and things that kind of run on the JVM, negative zero, the double value of negative zero has a different hash to zero. So they're not equal. Actually, maybe they have the same hash, but the equality function will say they're not equal. And languages like Rust and Zig, just like statically won't compile. They'll say the floating values don't implement the kind of hash equality interface. So they just say this is banned territory to even go into. But in general, lots of languages say they are equal.

ACE: So there are remaining to-dos, in my opinion. Of course, maybe there are more things. So I still think I imagine we're going to keep talking about negative zero for the rest of my life. We need to come up with some names for this. And I think realms is an aspect that I've kind of kept shunting that I can't do that forever. So naming things, these are some of the ideas that have come up so far, composites, calling them records, or not creating a new type because these things aren't types you can't inherit from them. They don't have a prototype. So maybe it should just be a utility function. Right now, I kind of like the idea of `Object.for` because there's a lot of relationship between the semantics of this and `Symbol.for`. So that's where I'm currently kind of leaning. But very happy to hear ideas here and get some feelings.

ACE: And then realms. So in Node, if you use the Node VM to create another context or if you use Cross same origin iframes what happens if you get two different composite factory functions? Did the A share an internal registry or not? The current draft spec says they do share a registry in the same way that `Symbol.for` does. So if I get two different Symbol constructors then if I ask that give me the Symbol for the string 42, they share a registry and I get back the same value. So I think there is precedent for this there being a shared registry. However, I very much aware that this would really not be great at least for SpiderMonkey, maybe other engines because SpiderMonkey has a per realm heap for objects. They have a shared heap for strings, a specialized heap for strings, but saying that composites allocated into a shared heap across realms would be really annoying. So in that case, what they would probably have to do is have a per realm registry that is then made unobservable by saying when you pass things from realm to realm and cross their Think in practice it's going to be very uncommon for people to parse things from realm to realm, so you could then take that either way. You could either say it doesn't matter, we shouldn't have a cross-realm registry because most people won't be doing that comparison anyway, or you could say that the fact that there's a performance penalty of parsing them from realm to realm for engines where they would need to do that doesn't matter because that wouldn't happen. So I think at the end of the day, I think the people that will pay the cost on this the most are the engine implementers, so I kind of will follow kind of their lead. My personal preference is that it is a cross-realm registry, but yeah, very much happy to hear feedback on that.

ACE: So I know there are lots of things in the queue, but I would kind of like to see, are we at a stage where we've got enough for stage 2 and because we think they're kind of enough of the solution space is there, so here I've kind of paraphrased our requirements for stage 2. We say that we've got a solution space, but they're may still be significant change and I think this is the more important thing is we expect the feature to eventually be included in the standard. Though obviously that's no Promise, especially because the main thing I don't want to happen is I don't want a repeat of records and tuples where it's sat in stage 2 for years and years and years, and then eventually was rejected like I would kind of refer to staying stage 1 if we have apprehension rather than kind of like nervously going to stage 2. Like I'd only like us to go into stage 2 if we're actually like yes, we're confident on this and yes, there are remaining things, but those remaining things we think are very much within our like capability to resolve and they're not things that we think are going to be like impossible. So I think it's important to signal to the wider community if we actually think this is going to move forward. So even though there are things on the queue, I'd still like to at least ask for stage 2 now and people can very happily say no, I want to go through the queue first.

CDA: I have a quick clarifying question. I think you chose the word significant changes. Could happen after stage 2. How?

ACE: I didn't choose this—this is straight from our process document, may still change significantly. It's in our process document. I mean, I'm hoping there won't be significant change and the only changes are like the names, the negative zero, the realms.

CDA: Okay. But you so okay, that's the first box of the process document.

ACE: Yeah, I think we could change the process document.

CDA: You would suggest that all major semantics syntax and everything is good and the refining or minor details. Okay. So I guess does anyone it's a weird question to ask, but does anyone object to calling for consensus before further. Discussion?

KM: I guess I'm probably going to say no on it anyway without I mean, certainly without discussion of my stuff on it.

ACE: That'd be fine.

KM: Yeah.

ACE: And basically I want to avoid like us discussing and then saying we have 60 seconds left and trying to ask for stage 2. I'd rather ask for stage 2 now if we're happy and then just use the discussion. But if there's any apprehension about stage 2, then yeah, let's not ask. Let's discuss.

KM: Yeah, I think there's apprehension on our end for stage 2.

ACE: Absolutely fine. Yeah, let's go through the queue then. Yeah.

CDA: All right. We have a clarifying question from MF.

MF: You had a slide, I don't know what slide number it was—9—where you had like `Composite(c) === c`, does that mean like you can pass a composite into that position and then it would just return the same composite? Is that what you're saying?

ACE: So here, I was trying even if we didn't provide a predicate, you can still kind of detect if something is a composite. By parsing it into the function again so letting it be read and then seeing if it interns back to the thing you just passed in. If it is, then you know the thing you passed in must have been a composite.

MF: I see. So this is like `Object(x) === x`.

ACE: Yeah. So it's like considering there will be ways you can do it anyway, that's why I'm saying we might as well have a predicate because it's kind of weird to tell people this is the magic trick to detect it.

MF: Okay, that explains this slide a lot better to me. Thank you.

ACE: Yeah. Sorry, I explained poorly.

ACE: MM?

MM: Yeah, can you return to the one where you're doing the interlanguage comparison? Yes, that one. So for the ones that say true, there's two conceivable reasons why they might say true, and this slide doesn't distinguish them. When you're talking through your JavaScript examples, you also were very careful to then extract the zero back out and see that even if it started as a even if you put in a minus zero, you get a positive zero out. The other explanation of why these things might be true is that they just take whichever zero they saw first and then they just use a SameValueZero comparison.

ACE: So I did side step the fact that we are the only languages that normalize. And that all other languages you all observe the fact that you've stored a negative zero, but it won't necessarily be—it'll be the last right wins so if I like put a positive zero as a key and then I try to set a negative zero as a key like it would replace the positive zero, and then I would now have a negative zero as the key. So they like personally I think JavaScript choosing to not have that race and to normalize actually. We’re the better language than all the rest and just we're the only ones that really thought about this. And I absolutely assert that we are the committee that have spent the most time talking about negative zero than all the other languages combined. Whenever I try to look through their notes and their discussions, like there was some discussion about negative zero in Go, but like very brief, very, very brief. But we are the weird ones to normalize. You're correct to pull that out, Mark.

MM: So I have the same preference you do. However, I am not a numerical analyst. So WH, if I can ask Waldemar why do you find it acceptable that minus zero gets stored normalized to positive zero? Isn't that inconsistent with the numerical analyst's need to preserve the difference?

WH: I do because there's an option to store a minus zero, which was covered in the presentation.

MM: Not in maps and sets. I'm asking the historical question.

WH: It's rare to use a set of floating point numbers like that, but for composites where you're passing data structures around, it's important to support the use case of preserving negative zeros. For sets it's less of a concern.

MM: Okay, good. Thank you. With that clarified, I support your handling of NaN and minus zero. The other thing that I want to bring up, and I'm so glad that you related this to the registered Symbol as precedent. I think that's exactly the right precedent that we should follow in as many respects as possible. And in particular, when you mentioned `Object.for` as the alternate name, my enthusiasm for the proposal tripled, but then you got to figure out, well, what's the equivalent that is composite? But in any case, the important thing about registered Symbols is that the registry is not a communications channel. And we're very, very careful it was, so I want to be as so first of all, I could not spot any violations of that in your proposal. Clearly you intend that to be the case for your proposal. Do you believe that during stage two, you can arrive at similar confidence that there is no communications channel through the registry?

ACE: Yeah, no, I'm very confident. Yeah, as I said before, like putting a timing attack aside there's no way to observe the registry. And this is so Go has a built-in interning thing. They don't normalize negative zero, but do treat it equal. So there is a like a registry communication channel in Go for their interning that you can kind of if you create something with positive zero, you might get a negative zero back because somewhere else, somewhere in the process, someone interned that value before you. So the fact that we don't do that means that, yeah, there isn't that cross-process communication channel.

MM: Good.

ACE: And the fact that the sorting is canonicalized.

MM: Okay, and finally, I would insist that it were cross-realm. If cross-realm these were not equal I would likely object.

CDA: KM.

KM: Wait, sorry, I missed that last part, Mark. What's your comment that if it was not cross-realm, you would object? Or if it was cross-realm, you would object? Okay. Well, I guess that conflicts. With my later point.

MM: Yeah, if it's not cross-realm, I object. And again, the registered Symbol is the perfect precedent there.

KM: Yeah, okay, I guess I'll start with the second part, my second point then. But here's the one that's at the top. But I think having a shared registry is like an extreme hazard for huge memory leaks. In our implementation, and I imagine other implementations, every object knows exactly what realm it came from. So like this would therefore know about its realm. And so if you kept one of these around, you leak your iframe—

ACE: So, sorry to cut you off, KM, just because I know that. So as I presented you semantically, we can say that it's cross-realm, but it can be implemented. So we've got a an example, a Spider-Monkey patch where the actual object allocation is per realm. Actually, then maybe this only works for Spider-Monkey because Spider-Monkey always only allocate objects per realm. So they have a membrane between the realms. So whenever they can they have a one point in the code where you can say anytime a reference from an object goes to another realm, it has to go through this function. And that function can then kind of say, okay, when you're taking composite from this realm to that realm, it gets re-interned so that there are always separate graphs. But maybe for the JSC case, you don't have that work for equality? Does the equality do some deep function call to do equality? No, no, it just you can't observe the equality being different because you can never have a handle to the value that would be unequal to you.

KM: Yeah, I think that would not work for us because we just have the raw object. So you would just have the raw object and then it's pointer equality. And then you'd end up with the same problem of like, I gave you back an object, you put it somewhere. And now you keep the other realm around.

ACE: Right.

CDA: Is there a reply from OFR?

KM: OFR says plus one to my point. So I guess then I'll move on to the other topic. Of the which I guess got lost. But we don't really want a new enumeration order.

ACE: There's no new enumeration order.

KM: There is a new enumeration order because the keys of the object that you pass have to go alphabetically, which means that you need to figure out which keys how to re-enumerate in the order of the alphabetical order. And based on the shape of the API, because it interns, you're incentivized to actually call the constructor repeatedly, which then means engines will be incentivized to optimize for like how to look up enumerate an object alphabetically. On the keys, rather than like what they do today, which is insertion order. To require new caching and all kinds of other things because you're probably going to do this over and over again. You're not going to cache your composite. You're just going to have a factory moreover, I think there's concern that even if you have the alphabetical ordering doesn't solve all your problems because if you have more than one line of code that creates the composite, you need to make sure if you add a new key there, right, that you find all of the other places that could feed in anyway and make sure they also have that key. Right? So if you don't find that place, then your composites don't line up anymore and you still have the same bug of like—your composites don't match when they're supposed to match. So I don't have a particular solution in mind for it.

ACE: So the way I implemented it in V8 was that there is a cache for when an object there's a cache from the shape of an object to the like alphabetized. So the first time you create a composite from an object, it will then compute the sorted order of the keys. And then put into a cache saying anytime you see that shape, this is then the sorted order of those keys from the indexes.

KM: I understand that you can do that.

ACE: Yeah.

KM: I'm saying that we don't want to start doing other types of enumeration order in a language and have any flavor of enumeration order. I mean, that users would want.

ACE: Because you think it's can you explain what you mean by enumeration order exactly? Because I was like.

KM: Because I mean, the order that you look up the keys, right? That's enumeration order, right? Like the order that you look up the keys when you do a for-in today is the order that they were added to the object sorry, for string keys is the order they were added to the object. I was specifically talking about string keys. Sorry. To qualify this whole discussion.

ACE: So I mean, you the way this spec is written, you read the object in its in its order. Then you sort them. And then you turn the composite to the object is always read in its enumeration order.

KM: That also feels like a poor performance thing for something that we expect people to call constructors repeatedly.

ACE: So in my previous presentation, I showed the benchmarks of this and saying if you add that caching layer, this the performance is achievable. This is why I implemented it in V8 to show that what like to prove that I'm not just hand-waving and saying you guys make this fast. Like I think this if I'm not I haven't written C++ for a long time. I feel like if I was able to make it perform well, I think you will also be able to make this perform well.

KM: It's more of a maintenance order, right? It's not that it's not.

CDA: Let's not talk over each other. Please use the queue. I appreciate the enthusiastic discourse, but try to give each other a little bit of little bit of room. Thank you. I did not mean to completely stifle the discourse.

ACE: The reason I've worked on making this be based on interning was based on a lot of engine feedback on you didn't want any customization to equality. So the interning makes equality like the like no changes to maps, no changes to sets, no changing to triple equals. Like the complexity, which I completely agree is there, is contained to just that factory function. And I so it's this is in direct feedback to the previous complaint about complexity. So we could not intern, but then we'll go back to the previous problem of now the complexity is spread across the.

OFR: I feel like I feel like the discussion is going off in the wrong direction. Because I think like the discussion here like what like basically the question is, should we sort the key in the resulting composites that is the question that we're discussing. We're not discussing should we intern, should we not, should we whatnot. And what you were saying is like it's not a problem to sort them because we can cache it. And you showed it in V8. And let me quickly address that because we do already have as Keith said, and I guess all engines have that. We have an enum cache, which is basically if you do a for-in of an object, then we have to produce a certain order of these things. And we cache that order, right? And it's already a trade-off as it is right now. There are other places where objects are enumerated in different ways. And there are even some kinds of objects where we don't have an enum cache and enumeration is painfully slow. And that's already the case right now. And it's already a trade-off that we make where we say like, OK, this is not important enough to warrant an enum cache because because it's actually something I mean, for one, it's tricky to get right. And second, it's also like it uses lots of memory. So is this one of the use cases where we would say like this warrants a new cache? I don't know. But I I'm not convinced. And so now the question is, what do we gain by sorting the keys? And do we even need it? So why does the composite need sorted keys? Why can't we preserve the enumeration order or as KG suggests in sorry for going skipping ahead, but throw if the keys are not ordered. I feel like there's a whole range of possible solutions to this problem.

CDA: KG.

KG: Yeah. So I'm next on the queue. I absolutely insist that they must be sorted, to respond to OFR. I don't think—the problem is that you can construct these in two different places. And from the user's perspective, the same object, but if the enumeration order is different, they're not the same object. They're observably not the same object. And if it just uses whichever one happens to be first, then you have this weird global race where, if anyone on the page ever constructed a composite with a particular order, anything else that happens to use those keys now gets that order. And I would consider either of those to be completely unacceptable. However, kind of a weird suggestion, but we could say that if the objects that you're passing to composite doesn't have its keys like its string keys in sorted order, then we throw. This would be like a really weird thing to do everywhere else. And it would be a really weird limitation of Composite, but it would solve this problem. And since I expect almost all uses of this function to be passing an object literal, it's not that hard to arrange that the keys of the object literal be in sorted order. So like… eh? It's a thought.

ACE: I kind of love it in that I think in practice, obviously there are cases where that would be really annoying if someone's spreading something. But I think the most common case for this is that I think people will be constructing these things statically with a literal because they want to be very clear about what the key components are. And a linter can see that they're not ordered. And moving all the work to like authoring time I think does solve a lot of the problems. And it's obviously we could relax in the future. So it's like actually kind of like that.

KM: OK. I guess this is a reply back to what OFR said before, but the queue makes this difficult to do because I can't move at any point I want. But the I can't reply to a reply. The yeah, interning isn't the problem. I don't have a problem necessarily with interning. The realm issue aside, yeah, so that's yeah.

ACE: Yes. I assumed like the reason we saw is because we're interning, which is so I assumed yeah, I conflated your complaint more than I should have.

KM: I might have poorly phrased it as well. I'm happy to also take fault.

CDA: All right. Mark's on the queue with "becomes a communication channel".

MM: Is that clear?

CDA: yep. I folks are nodding in the room. So I think yes.

KM: I guess one option instead of this is I think it's possible. I haven't I forgot that you could actually list the named keys yourself. But certainly if you didn't want the keys you didn't care about the named keys being on the composite, you could create the keyed version of this trivially by just with whatever a small like thin wrapper around an indexed list of the arguments, right? And the upside of having the indexed list is also then you don't have to like do any of the optimizations of like trying to align this object allocation if you're trying to look these up in a hot loop, which is totally possible if you're trying to look up a hash set. And so that in theory is a bit more performant. I'm not necessarily tied to that. I think that also because you can create this wrapper yourself, it may not be so bad. The I suppose one downside of that though is I think it would break the like composite of composite of x is equal to composite of x, right? Because you have an the you'd have to have something special that says a composite maps to itself. Like the underlying values or something because you could have multiple parameters and so you could have because they're indexed, I think I think that might break. I'm not 100% sure. So yeah, but yeah. I agree that's less ergonomic but I think that it would solve many of the concerns that we have and certainly if people really want the ergonomics, they can add it themselves. I guess to restate the point.

ACE: There's a few reasons why I've gone for named rather than ordered parts. And this one is I really don't want people to think of these like vectors because I think people will think they're optimized like a functional like in functional programming. I think they'll think of these as like a linked list and they'll do things where they loop appending something as a head. And if we're interning every time, it will have this like quadratic cost. So I want people more to think of these things as named rather than things that they can scale up to long lists. And if you have to give them names, it very much discourages these things being long because they very much scale on the number of components. In an exponential way. So the other is that it doesn't scale very ergonomically when you like if you have the x and y case, like a 2D or 3D vector, then it's like obvious that x, y, and z is 0, 1, 2. But in other cases, remembering which one and having to like write helper functions for it and passing them around like starts to become yeah, the ergonomics isn't so much there. I have thought about you could we do like a Python style thing where we do just split the case so it's like a two phase where you first say these are the names of the keys and that again gives you back the factory. So you say I want x, y, and z and then that gives you back a thing that you just pass in. So we basically like we move that kind of like caching step into the language. There's a way of maybe a balancing act of the ergonomics of the names but the performance optimization of not needing to like sort.

CDA: All right. Just a quick time check. We have under 15 minutes remaining in the time box. The queue looks longer than it really is because there's a lot of like end of message and support for advancement. But let's try to still be mindful because we need to save room for the delicious call for consensus. Oli.

OFR: Yeah. I think my proposal was misunderstood by preserving the insertion order I would also mean by that that you would get a different composite if you have a differently ordered object. And I don't know. I feel like that would be way less bad than all the other options.

ACE: One of the points to this proposal is to avoid that issue. I have seen that come up, like it's not a theoretical case with `JSON.stringify` cases that have that issue of the key order. Like it's such a subtle thing. I think that I would really like that to not be how this because I think it I really want that to be a problem we solve rather than carry on. Yeah. As I have a strong personal preference there but it's I appreciate there's a lot of things we're trying to balance here.

RPR: WH.

WH: I also have a strong aversion to making the key order significant. It appears to make sense for literals but as soon as you generate objects programmatically where you have several different ways of generating some kind of an object which might add properties in different orders then you'll just get subtle breakage. I don't want to go there.

WH: My question is whether the sorting order is strictly alphabetical or are numeric properties in any way special?

ACE: Yeah. So because even if you create like a regular object, you know the fact that we treat the index numeric keys differently and the fact that that is very much reflected in implementations that those keys are stored separately that that is what you'll get back especially if we don't do that it's impossible to implement this in a polyfill because you can't unless you you would have to use a Proxy for all of these to be able to your customize that key order. So the fact that if you try to implement this just using regular ordinary objects this like matches the internal method of an ordinary object's key order.

CDA: OK. Keith.

KM: Yeah. I guess on somewhat similar to this point I guess the case where I can imagine where you wouldn't just have an object literal is like suppose you have I guess maybe this is a bad example now that I think about it like a point class and you have a 2D point and a 3D point your 3D point you want to add the third coordinate I mean it is z so I guess that's awkward and that actually it's sorted but imagine a different world where they're not actually that way. But like you'd end up with was it something out of order? Yeah. RGB or something and then you want to add alpha and now all of a sudden your keys are out of order. And you can't use the same constructor and then you need to duplicate constructors and then you have all the hazards of duplicating the constructors which so I would make me uncomfortable with that.

CDA: All right. Let's go through. SFC says plus one on `Object.intern` makes it super clear what is happening. Intern is a word used in other ecosystems for this.

CDA: Next. MF says I actually love the name composite for this. Let's not call it object.something and imply it's just a weird kind of object. DLM is on the queue.

DLM: Yeah. Sure. I'm just wanting to say thank you for the presentation. Yeah. We're happy to support stage two for this. I guess all of our earlier concerns have already been addressed. The only thing I wanted to bring up is I'm not sure to what extent the per agent versus per realm thing registry has been fully decided but as alluded to earlier a per realm registry would definitely simplify our implementation and make our garbage collection people a bit happier.

CDA: All right. Next. LVU says regarding Symbol keys are rejected there is no canonical sort order across all Symbols sorting is in implementation detail not part of the core use case so that's not a user facing reason it seems that all you need is a stable order which seems doable also plus one on the name composite.

ACE: To just reply, they get this came up time and time again with records and tuples like we could come up with a stable ordering for Symbols but it just it just gets rejected and every single time we tried because you could say like the orders in which the Symbols were constructed is their order but now that creates this communication channel or you could just say the very first time you put Symbols into a composite there's this hidden cache of that's the order and every single idea people have just gets rejected like I think there's no way we can say we could also just hand wave it and say it's an implementation detail which is again something that's been like said is unacceptable. So I think for Symbols that have no like string part there is no way we could define a sorting order for them.

CDA: MM says "exactly stable ordering for Symbols leak info". JHD.

JHD: I really don't like the name intern. I don't know what interning is; I don't want or need to know; and I think most JavaScript developers are in that same bucket. I think it'd be really confusing to name it that and the C++ experience in this room I think is not representative of the wider ecosystem. That's an easy bikeshed during stage two though. OK. Now I feel really I have a lot of feelings about negative zero—I'm very unhappy that maps and sets chose same value zero by default I think that the rarity of negative zeros appearing at all it means that people just aren't going to get bugs with them unless they're trying to use them and then the current behaviour gives them bugs. I believe the current proposal—I was out of the room for a minute—has an option that lets you switch between SameValue and SameValueZero. The existence of that option is very good. I still kind of prefer the default to be same value but yeah just wanted to make sure it's on the record that like I effectively insist that there be a way to preserve negative zero and I strongly prefer it to be the default.

KG: I feel even more strongly that we must normalize. Negative zero comes up all the time, you just don't ever think about it because you never have to because it's triple equals and because Maps and Sets normalize, but it comes up all the time. If you're rounding, like round(-0.1), or you're multiplying by a negative number, you will end up with negative zeros in your code. You just don't have to think about it because Maps and Sets normalize and because -0 is === 0. So the default absolutely must be to normalize. That said I'm fine with there being an option.

MF (on queue): as someone who regrets SameValueZero in Maps/Sets, default should unfortunately probably match those; having an option is great though

WH (on queue): +1 Kevin's comments

CDA: All right. That is pretty much it. The rest of the queue items are about stage advancement.

ACE: I love all the support on the queue. What makes me very nervous is that I think we've heard from all of the engines they would prefer per realm registry and Mark has said he'll block unless it's cross realm and what I really don't want to go into stage two in a place where it seems like we have opposing blocking concerns because I think it sends it I can't see a way part like unless we think there's any wiggle room on either side we'll just never going to get past it so I'm very hesitant to I don't want to move into stage two if we don't think there's any wiggle room on either side. I'm obviously not asking people to like promise, but.

MM: When you say wiggle room I don't see any incremental steps away from the position. Two opposite positions and there's nothing in the middle.

ACE: Yes certainly from like there's certainly no wiggle room in design like either it's cross realm or it's not but yeah.

JHD: I have a thought. Let's say we introduce the composite constructor as the way to make these what if instead of having a null prototype they have a prototype of composite dot prototype which itself has a null prototype and composite dot prototype can even even be frozen if you want and that way there is an easy observable difference between composites from different realms they can naturally be per realm like every other object is and we don't even like need to think of it as a registry although of course would be. Is that at all viable?

MM: I think not. To me, one of the requirements of this proposal which the proposal was satisfying is that the actual composite object does not have anything observable that ties it to the realm of origin.

CDA: What we need to make a decision here on whether you're going to ask for consensus now or not. We might have time if we make up time from other topics to do a continuation?

ACE: Yeah I just don't feel comfortable asking for stage two. I think it's the wrong reading of the temperature and the.

CDA: We have a couple minutes remaining. I know OFR has replied but KM was on there. I don't know which one is more timely. I will defer to Ashley.

ACE: Sorry. Just KM—

KM: So yeah I thought this because you mentioned the Python thing of like constructing it. Would it be possible—I haven't thought about this really at all but just as an idea of having the interning cache be explicit as like a registry in the same way kind of like finalization is a registry and then when in your factory you say I actually want it to go into this interning registry and then that would hopefully you wouldn't be able to share hopefully I wouldn't create a communications channel because you have to actually have the object to put it in that interning I don't know if that's all everybody's problems and makes everybody happy.

ACE: I do think that is a it leaves the door open for there being like an option to say I want to access the cross realm registry like but we initially the initial proposal is a you know composite dot create registry is the only thing so you could do like composite dot create registry and then yeah the only things that can use that have a handle to it and then but in the future we could have composite dot global registry as the so I think that is a way we could potentially meet both sides.

MM: I'm very confused about this. Does that mean you have to have the registry in order to intern something in the registry?

ACE: Correct.

CDA: We are pretty much out of time. OFR do you want to be brief in your—

OFR: I mean I just don't understand the problem, like why would you block a cross realm? I'm not sure there is actually a problem—like why does it have to be cross realm? So I don't know. I kind of question that absolute point.

MM: OK. Because a composite is in most ways value like you know you've removed the identity and you've only allowed in you know things that are well it's shallowly value-like.

OFR: But that's more philosophical. Like I'm trying to find the actual thing that really blocks it.

CDA: Sorry to speak over you. We are out of time. We can continue maybe asynchronously via GitHub issue or something. And maybe if we think we can have a productive conversation at this meeting and we have time we could maybe discuss this if time allows. But we must move on.

### Speaker's Summary of Key Points

* Started with a reminder of the proposal
* It is now based on an interning strategy, based on the conversation from the previous plenary
* We still need to decide on: naming and if the registry is cross realm
* There was discussion on the implementation implications caused by the need to sort the keys

### Conclusion

* The Composites proposal did not call for consensus on Stage 2 advancement as there are still opposing views on interaction with realms

## Continuation: Establish normative conventions for invalid input strings: RangeError vs. TypeError

Presenter: Richard Gibson (RGN)

* [proposal](https://github.com/tc39/how-we-work/pull/176), [narrower proposal](https://github.com/tc39/how-we-work/pull/177)

RGN: The previous session was sufficiently productive that I am able to come back with something concrete. Brief recap for it. The the temperature check that we ran produced 18 votes in favour of RangeError for the specific case that we were looking at, which was a string enumeration and input being a string not in the enumeration. 18 for RangeError, 4 for TypeError, and 2 indifferent, which is a pretty strong signal in support of RangeError. But we weren't really able to move forward decisively because there was nothing concrete to look at. So given that poll result, I've just now opened a pull request to update the normative conventions with what I believe is the result corresponding to that temperature check. And we can now take a look at it. What I have done here is define appropriate use of RangeError, and also SyntaxError as well for completeness. Hopefully this is not controversial.

RPR: And has this link been publicized?

RGN: I don't think it has yet. I will add it to the notes shortly.

RPR: Thank you.

RGN: It is the latest pull request on how on TC39 how-we-work.

RGN: So yeah, picking back up. If SyntaxError is controversial, hopefully we can figure something out over the course of this discussion. But briefly, the appropriate use of SyntaxError is I think for well-formedness violations. Where valid input is a set that is so large that we describe it practically as a grammar or a pattern or something along those lines. Where a string is to be evaluated against that (in the sense of we either received a string directly, or input was coerced to a string). And when the result of that does not conform with the constraints, then that's a scenario where our convention would be to throw a SyntaxError. So some examples, all of which are already the case given the current specification, would be the BigInt constructor, `JSON.parse`, and `Uint8Array.fromBase64`. These are I think in every case described grammatically, and obviously the set of valid inputs for all of them is logically unbounded. Technically strings have a maximum size, but it's so large that we would never describe any of these by enumeration. And when the input is a string but does not conform with that syntax, we throw a SyntaxError.

RGN: Moving on now to RangeError. It seems like the predominant opinion, which I happen to share, is that RangeError is appropriate for other validity violations where the language type matches. So where valid inputs are a strict subset of all values of a particular language type or a union of language types, and the input is of an acceptable type but not in that valid subset, that's when we're looking at RangeError (except where SyntaxError has already covered the scenario). The cases that I found which were worth describing are **bounded numeric intervals** like 0 to 100, **half-bounded numeric intervals** where you've got a minimum or a maximum but not both, for example “non-negative”, **sparse subsets of numeric intervals** like “integral numbers” or “integral multiples of 0.5”, and finally **string enumerations**. And I've also provided examples here of current code that would encounter this convention. Number toFixed requires that the input be positive, so `(1).toFixed(-1)` gets you a RangeError. BigInt exponentiation requires non-negative also, so `1n ** -1n` gets you a RangeError. BigInt with a number input must be integral, so `BigInt(3.14)` gets you a RangeError. And as we discussed in the previous session, String normalize has just the four Unicode normalization forms, so `"ü".normalize("custom")` gets you a RangeError. I've maintained the pattern of documenting when guidance was established so that people don't complain if they find an existing part of the language that doesn't conform with it. I'm not interested at this time in strong enforcement, just documentation of the convention for going forward. And if there's anything recent that we want to revisit, that's out of scope for a pull request against how-we-work. With that I'm ready for the queue.

RBR: I remember when I implemented the error types in Node. And I believe RangeError pretty much represents this already well. But for example the types I'm not sure and like TypeError was often used for let's say you would not have custom for normalize but you would have five. What would that be?

RGN: According to these conventions that would still be a TypeError.

RBR: All right. But then it's actually representing that as as far as I can tell. That was pretty much my question also if it but did you check how the ecosystem as a whole normally handles it mostly? Because I believe that is pretty much also that as such.

RGN: How would you scope the term “ecosystem” in that context? WebIDL definitely collapses a whole lot of stuff into TypeError that ECMA-262 does not, for instance, which motivated `Iterator.zip` handling. ECMA-262 is not even itself fully consistent, even in the old stuff. But this is attempting to match our intuitions in the room, plus what's already documented, plus a little bit of subjective analysis. I think Node.js is at least comparably consistent with this. And then on the web they've got a large collection of paradigms and errors reflected in what they consider legacy and what they don't. So it would be difficult to derive principles from that or or really measure any particular specification against it, given how much they carry around. And even there, a lot of them are a DOMException with a particular name rather than an instance of one of our native types.

RPR: So we've got five minutes remaining and seven people on the queue. So let's try to be quick. Shane says 402 is self-consistent using RangeError for string enumerations I wouldn't support deviating from that convention for 402. Over to you WH.

WH: Scroll back to the SyntaxError definition. I don't like this definition because it's gated on the cardinality of the set of valid input strings, which is the wrong thing to base this on. To give an example, the set of valid dates is far smaller than the set of non-negative BigInts, but a malformatted date should be a SyntaxError, whereas a negative BigInt should be a RangeError. So it's not the set cardinality—it's not how big the valid set is that matters. What matters is the syntactic complexity of the set.

RGN: Okay. So you're just suggesting an alteration of this specific word from “large” to “complex”?

WH: Yes.

RGN: Okay. I'm fine with that.

CDA: Jordan.

JHD: Yeah. So first I want to preface by saying that when we're define when we're creating words that JavaScript developers are going to interact with we should make them match the definitions that JavaScript developers are most likely to assume. So if you're parsing a string that means the string has an expected format and if you do the wrong format that's a SyntaxError. That's how that's what syntax is. If you have an enumeration of options since we don't have an enum error and it's out of that range of enumerations then it's a RangeError just like 402 does. And if it's not the right type using the definition that JavaScript developers will use which is typeof modulo null then it's a type error and it seems pretty straightforward to me. So I haven't reviewed the PR of course in the specific wording but I'm I haven't heard any convincing arguments for not necessarily phrasing it the way I'm phrasing it but for of wildly different approach. So I think I generally like your PR but I have to look at it first.

RGN: Okay. Great.

RPR: Michael says what does valid inputs mean?

RGN: Okay. This is something that we could clarify if need be, or we could use alternate wording. As I have it here it is precise in a way that is encountered elsewhere, in particular I think Unicode do a good job of defining well-formedness and validity, where the former is a syntactic match and the latter means it is fit for purpose.

RPR: One minute remaining. Please be really quick Michael.

MF: I just want to acknowledge that this PR was opened very recently. I don't personally have a problem with the first of these two on such short notice but I think the second of the two I'm going to need a little bit more time to consider. Not that I'm opposed or anything, just that—even tomorrow I could reconsider that but I had no notice of this.

RGN: What I'm looking for here is agreement in principle. I'm not asking anyone to push the merge button right now. I just want to know if it is directionally correct or if people have relevant tweaks. WH’s feedback was exactly the kind of thing that I was hoping to receive.

RPR: We are at time. And I think we should proceed to the break. RGN are you okay writing the summary of what we've got to?

RGN: Yeah.

RPR: And the queue is also captured as part of TCQ so that can get copied into the notes.

### Speaker's Summary of Key Points

* Per the temperature check onh 29 September, [tc39/how-we-work#176](https://github.com/tc39/how-we-work/pull/176) specifies when to use SyntaxError, and a general pattern along with four specific cases for when to use RangeError except where already covered by SyntaxError (bounded numeric intervals, half-bounded numeric intervals, non-contiguous subsets of numeric intervals, and string enumerations).

### Conclusion

* [tc39/how-we-work#176](https://github.com/tc39/how-we-work/pull/176) remains open, along with a narrower [tc39/how-we-work#177](https://github.com/tc39/how-we-work/pull/177) that only specifies RangeError for numeric intervals

## Normative: Change KeptAlive semantics to strongify particular WeakRefs

Presenter: Keith Miller (KM)

* [proposal](https://github.com/tc39/ecma262/pull/3974)
* No slides presented

CDA: All right. People in the room? Please be seated. Please disperse. People in the room. We are getting started. Please take your seats. Michael, Leah, Shane, Andrew, Ashley, Ross, please be seated or at least be quiet. We begin, of course, with the call for note-takers. Who is willing to help take notes for the final one hour and 40 minutes of today's meeting? Thank you, CHU. Can we get one more individual? To help with the notes. Once we have a volunteer. We can get started. Our first topic will be KM with: [Normative: Change KeptAlive semantics to strongify particular WeakRefs](https://github.com/tc39/ecma262/pull/3974).

CDA: Okay.

CDA: But we no.

CDA: That is eligible on the room screen.

CDA: Oh, yeah. That is the problem. We do need we still need somebody to volunteer to help with the notes.

CDA: One individual. To help with maybe somebody that hasn't helped at this meeting yet. Could be JHD. I don't know. But we do need somebody. So the notes can be accurate. You will be making small corrections. And doing attributions. Sorry. What? Oh, thank you so much. The screen looks somewhat clearer.

CDA: It's still kind of blurry.

KM: I guess this is the biggest downside of not making slides. Apparently, that I was not actually prepared for.

CDA: Oh, clear. Clear.

KM: Oh, okay. That seems fine. Okay. Great. I'll start then. Okay. So as a summary, WeakRefs are a feature that we had during the WeakRefs discussion, there was a lot of talk about keeping a lot keep alive semantics. The goal of the keep alive semantics is that within a synchronous execution, when you look at a WeakRef, you will forever be and you see an object come out, you will still continue to see the object as repeated anytime you ask again, you deref that same weak the WeakRef. There was during the many parts of this discussion, there was it was I guess we never really discussed how multiple WeakRefs should interact during the period. I looked through the notes. I couldn't find anything. As a result, the current specification says that if you deref a WeakRef, any other WeakRef that points to that same target must forever and always return back that object to you. This makes it very hard for engines to ever actually collect any objects in the same turn. As a result, engines other than JSC who implements a slightly more who already implements this proposal. We already implemented this proposal. If you keep creating WeakRefs in a loop in the same turn, you will eventually oom and your page will die.

KM: This is good example. Describing this. Down here. Keep scrolling. Keep scrolling. Keep scrolling. It's a lot harder to find this now. And I don't have a thing. So I think there's like a relatively straightforward explanation for why this happens. Of the three properties on the screen, you can only have two of them basically. You either cannot oom you can have you don't you can choose to not have WeakRefs inherently guarantee derefing one WeakRef inherently guarantee another WeakRef returns you the value. Or the garbage collector cannot make like local decisions in the in its garbage collection process. And what I mean by local decisions is that it cannot depend on what other objects did other objects that are no longer live in that same cycle. I think to see this, you can look at this example here. So you have this turn. You make these WeakRefs. You then turn you do do a turn of the event loop. You do a WeakRef deref and then discard that WeakRef and you deref another WeakRef without run A. When you collect the you don't have line one. Then you the target is dead before you do the WeakRef. And so you can you can return undefined. In run B, if you do have the WeakRef, at the GC point right here, the reachable heap is identical to the run A. But the semantics are different. So the only way you can know is through some other data outside of what the local heap is telling you. So in order to rule out also, I guess there's going to be specific about the three parts.

KM: So if there are questions in here and this is unclear, please ask me. Now, I guess I'd like to be interrupted. Also, because I expect that I'll have to come back anyway.

KM: So there needs to be some external state that the GC is aware of when it's doing things. And that GC state to rule out B, you have to leave a keyed target around somewhere and then find it. Yeah. The there is an alternative in theory, which is that every object that the GC allocates has some state in it to observe that it has been a target of a WeakRef deref. And when the GC sees a WeakRef, it looks at the target of that WeakRef and sees that it's been derefed and then marks it strongly. That would be we no engine would do this because there's no space to actually record that information on the actual object as the target of a WeakRef itself. And we certainly would not want to that would be very unpay as you go for the WeakRefs proposal as a whole. So we don't want to do that. So this proposal changes the semantics of WeakRef so that when you deref a WeakRef, as long as there's some hypothetical execution, where you could deref that same WeakRef, you will you will you will get as long as there's some hypothetical execution where you could deref the WeakRef you already deref derefed, you will keep the object alive otherwise you will not. The in the spec language here, basically how what this change does is you there's this keep alive list instead of holding the keep alive list instead of holding the targets of the objects. It holds the WeakRefs themselves. And this is effectively a weak list. A weak hash set of the weak refs you derefed. And then when deciding if it's possible, we do a hypothetical execution. We see that when doing when trying to this object is the set of objects you're attempting to collect. If you if the set of objects that you want to collect if the if this weak ref targets that object, then it returns the object. This solves the constraint of the fact that you don't have to look outside of your local heap anymore. To determine if an object is live. Are there questions at this point? It's definitely want to answer those before going on to other

KM: I mean, maybe I misunderstood, but the three things that are like mutually exclusive. They're not mutually exclusive. You can have two of them. Oh, yeah. Where you can have two of them. I mean, I I think there are strategies where you basically but I think you need two GCs. I think that's the other tradeoff that you can do. You can say like first I collect the first I collect the weak references and then that allows me to mark the the targets which are now no longer reachable by these weak references and then in the second GC I will collect these objects. That might violate one of your three things. That's probably true, but I think that also then it is still sort of unimplementable. I have to think about the exact semantics of how that would work. In detail.

CDA: MAH.

MAH: Sorry. I was muted. Regarding the two GC step, that sounds risky. I think there's probably a way to create cycles that would no longer be collectible in that case. But at least if it was derefed; I guess that's not worse than the leap that you have right now anyway. So it would be weird to just enshrine well, I don't know. Yeah. Sorry. I was just reacting to the two-step comments that Oli made because whenever I hear two-step with GC, that means there's a cycle somewhere that's not going to get collected.

KM: Yeah. That might be. That's probably true. That sounds suspicious. Yeah. So I think before going on to any more details of it, oh, is there sorry, do you have a question?

MAH: Yeah. I had another topic. Which was that the original example at the very beginning and and I think you got to it after with your two out of three, that it it doesn't require to not be collectible because to be clear, the fact that WeakRef puts the targets in in the keep alive does not mean that the the target cannot be collected. It just means that it needs to remain observable through WeakRefs that have that target. So in this case, V8 does not have to have a noom???. It just means it needs to remain observable through the weak ref. But if the WeakRef gets collected or in this case, all WeakRef targeting that object gets collected, then they can all be collected together.

KM: Correct. But yeah, as I said, that leads to the third point of the complexity and the garbage collector. Yeah. So I think we're in agreement there. I think to make it maybe an example of how this changes behaviour, maybe helpful. So this program here you have a target. You have two different WeakRefs. When the second WeakRef derefs in in the original code, you must always return target. In this case, like let me scroll. Now you can also return undefined because and essentially the way to think about what this change is doing is it's turning when you deref a WeakRef, you are turning that WeakRef into just basically an ordinary property on any other object in the implementation.

\[looking up the right parts]

KM: Essentially, in these programs, you can replace, here's a different example. The you can replace essentially this WeakRef deref with the target the underlying tar a reference to the target in your scope and the programs behaviour is identical. You have all the same nondeterminism that you would have with an ordinary property within a single turn of a WeakRef deref. And so yeah, does that make sense? So I have questions there.

CDA: Sorry. There's been a request from the note helpers to please leave a little bit of a pause in between responding to each other so they can properly attribute. Thank you. MAH.

MAH: You can mention this would not be acceptable, but I actually do not understand why when you make an object the target of a weak ref, why cannot there be a flag or whatever an expando or whatever you want to call it added to that object to be able to do it as bookkeeping. Okay, I have been derefed or not. And even backlinks into all the weak ref instances that have it as target so that internally you can actually track which ones are collected or not.

KM: The answer is basically the same.

MAH: Basically make it local. Sorry.

KM: I'm sorry. I'll wait for the note takers to. The answer is like it at least in JSC, and I imagine in other engines, there are no free bits to be used for this. So you would have to have something on the you'd have to have some other global table to find what the state of this bit is, and then at that point, you might as well look at the keep alive table.

MAH: My understanding is that okay, that's something I don't understand, I guess, about engines is that you already have mechanisms to be able to extend existing objects you need to be able to have properties or stem private fields or or anything like that. Why is that system any different here?

KM: You would have so you're saying basically anytime you do a WeakRef deref internally in the engine, you stamp an invisible private field into the object.

MAH: No.

KM: And then?

MAH: I did not say that. I said whenever an object becomes the first time the target of a weak ref.

KM: Sure. But then you'd have to remove that field whenever you clear the keep alive list.

MAH: No. Yeah. You're right. ThatThat becomes part of the keep alive list. You just don't clear the field. You just yeah, you clear the field. You leave the field installed. You just clear it. ThatThat is actually what the keep alive would do.

CDA: There's a reply from Mark.

MM: Yeah. I think there are a zillion ways to approach the implementation that's not substantially complicated. Preserves the current spec and collects kept alive objects where the collection is not observable observable collection. And just the current spec, the spec only traffics an observable differences. So it was always the case that implementations were free to collect it if the collection could not be observed. So for example, just take MAH's suggestion instead of putting a flag on the target object, have a keep alive table that's a hidden WeakMap in the implementation that just marks that a target is kept alive and then the garbage collector when it sees a WeakRef pointing at a target that's in that table treats the weak ref as strongly pointing at the target. And you know, that's not that complicated. And it might not fit particular implementations, but you know, tell me the implementation and we'll come up with a fairly simple way to do this.

KM: If the keep alive list is a weak set, you get the behaviour of this proposal.

MAH: Yeah.

No, no.

MAH: Mark, the difference there is that they all.

MM: You get the behaviour of this proposal. Go ahead.

CDA: Let's please use the queue.

MAH: Yeah. Sorry. So I'll answer Mark. The thing is that all weak ref have to keep derefing. So effectively, if it's like all weak ref are pointing to a single weak.

MAH: Let me okay.

MM: Okay. So I think you didn't understand my suggestion. Everytime when the garbage collector traces a WeakRef, it checks if the target is in the WeakSet, the kept alive WeakSet. So it's it's it can be put into that weak set weak set because of a deref through a different weak ref. But once it's in that set, then all weak refs to it are treated by the garbage collector as strong for the rest of the term.

KM: That's not legal.

?? Right.

?? All weak refs.

KM: That violates the locality constraint because you have to look in a shared global table during your GC, which is not local to the live objects. Like, the locality is that your GC is able to, the reason why garbage collection works relatively well is that when you garbage collect, you only have to care about the particular object that you're looking at. You don't have to care about the state of other random objects in the heap to know how to scan the object that you're you're you're you're marking. And in your proposal, while you're marking, you have to then go look at some global table.

MM: No, you're yes. But only when you're marking through a weak ref. But I I but yes, it's non-local for when the garbage. Traces through a WeakRef, but the is the time for the garbage collector to trace through a weak ref a significant concern where this additional where this particular non-locality would be a speed concern?

KM: To be clear, the—yes, I don't think we would have I when I discussed with the champions of weak refs, basically, I asked if the optimization I was doing is correct. And at that time, the belief was that they were actually identical.

MM: Hold on. Hold on. Hold on.

KM: So I don't think we want—

MM: Hold on. One of the champions of weak refs were myself and DT.

KM: I spoke with a different champion at some point. Or certainly, yeah, I think I definitely remember distinctly asking someone if this optimization was valid.

MM: Okay. So I will say, as a champion who constructed the spec with the particular controversial semantics that we're discussing, that yes, this optimization is not valid.

KM: I don't want to say because I asked about this, and the whole reason I implemented it this way was because I was under a belief this was a bug. And so I think this behaviour is also inconsistent with the decision that we made for the finalization registry. Finalization registry does not require that you run the finalizers after the finalization registry itself is dead.

MM: That is correct. What's the inconsistency there?

KM: The inconsistency is that.

MM: The finalizing is only the kept alive thing is only about the turn that you're in. The kept alive thing goes completely away once the turn is over.

KM: That's what I'm saying, that, the requirement that the GC be aware of, engines opposed to having FinalizationRegistry is before to call callback on finalization registries that were dead for the exact same argument of it requires the GC to make non-local decisions.

CDA: There's a clarifying question from MAH.

MAH: Yeah. No, it was clarifying what Mark was saying earlier. I don't mind getting to it earlier. Let me just answer this one first. I actually believe I brought up the question of whether it's okay. I mean, I don't want to say that strongly. I do remember that discussion. I don't remember the justification being a local concern. But yeah. Okay. Yeah. So I just wanted to clarify to Mark the WeakMap issue. If a WeakRef. If it is deferred, all WeakRef must be collected before the target must be collectible for the target to be eligible for collection. That means effectively, when you deref one WeakRef, you need to go and add all the WeakRef instances that point to that target to that hidden WeakMap.

MM: Right. And without backward pointers, the idea is instead you just mark the target. You can do it with some kind of hidden field on the object if that's acceptable to the implementation, like you suggested, or we and and the only reason I suggested a WeakSet is it's the way to mark an object without changing the representation of the object itself. But then you have to treat all WeakRefs that point to a marked target. And that gives you the collective the unobservable collectibility, and it maintains conformance to the existing spec. Keith, I got to say, process-wise, I'm very concerned that you thought you had talked to the champions. I believe there was a third champion. But they confirmed it. But you didn't talk to the champion who was responsible for putting the semantics in.

KM: I maybe I'm misremembering, but anyway, I think also, another point to make clear here, right, is that you can still totally observe a collection mid-cycle. Right?

MM: Yes. You can. And we are just.

KM: So this does not give you a new capability that you couldn't do before. It also doesn't give you unlimited chances at detecting that collection, right, because the only way you could do so is through multiple.

MM: Okay.

KM: Are there many WeakRefs, and you can't make them in the same turn because they will then pin the object? So you'd have to preemptively create all of the chances that you want to detect this.

MM: Right. So the way I got to this semantics was I you know, I knew that ideally, what I would like is that garbage collection cannot be observed to happen within a turn and I quickly convinced myself that there was no practical way to do that. So I gave up on that as a goal. So with that being given up on, it was—how much can I mitigate the hazard that I cannot get rid of? And the hazard is essentially the multi-threading hazard. We all know that if you have two threads that are synchronously accessing common mutable state, you have a nightmare. You have a Java-sized nightmare. And that if we introduce WeakRefs without some protection, then the interleaving, the observable interleaving of garbage collection with what is happening within a turn means that a turn is no longer an atomic unit of computation. It means that you've got interleaving within a turn rather than just interleaving of turns. So like I said, I can't get all the way to atomicity, can't remove the interleaving hazard. But the practical cases we were able to I mean, the as we imagine cases and try to imagine what could users run into, and it's very much a what could users run into without thinking about it. This is the kind of hazard where you're just innocently coding with WeakRefs, and something surprises you. And seeing that it's dereferencing it from a WeakRef and then observably having it go away later spontaneously and non-deterministically inside the same turn seemed like the greater hazard. There's a bigger issue now, though, which Keith, you specifically, should have some sympathy with, which is the spec has been promising this strong constraint. There might very well be programs out there that are currently correct because they are assuming the strong constraint that the spec promised. If you weaken the spec in this way, you potentially turn existing correct programs into incorrect programs that might misbehave even though when they were written, they were correct. And in this case, I don't think there's any plausible instrumentation that browsers can do to detect whether or not there are such programs out there. So once TC39 commits to there being an invariant that programmers can count on for correctness, woe is us if we ever try to withdraw that guarantee. That's a breaking the web kind of problem.

KM: To be clear, the behaviour that is in this proposal is what Safari has implemented since day one.

MM: Yes. And therefore, you can say anything that works correctly on Safari does not count on this behaviour. I'm sympathetic to that with regard to browsers, however, there is node and node is part of the web. It's not part of the browser side of the web, but it's part of the web. Breaking correct node programs I would still say is breaking the web.

KM: I don't know. I think there's—I mean, I was also an equal chance that, I don't think RM we would ever implement we we would go back to basically the same position that, in Spider-Monkey are in, where they basically just oom. And that might break users of our applications. So I don't know. Like, there's an equal compatibility risk in the other direction.

MM: Okay.

KM: Like, for synchronous code.

MM: Okay. Given that you know, given my belief that it's easy to do an implementation that doesn't oom (out-of-memory) and doesn't weaken the current guarantees, I would hope to talk you into that. But if I'm given a choice, between oom or weakening invariants that protect you from fine-grained interleaving, I would prefer to oom.

CDA: There's a reply from MAH.

MAH: Mari Kurodi (???) made my point that there is something you cannot re-measure, and this is where I believe you're going to have most of the problems, actually, if you change this behaviour is with applications on node. I highly doubt that a lot of web applications are actually reliant on on WeakRef finalization registry like that. But I would expect server code to be a lot more.

KM: I mean, I think as a practical point, it seems incredibly dubious and hard to reason about code that has multiple WeakRefs pointing at the same target, generally, just from, a large application perspective. Like, it would be relatively straightforward to end up with a different like, if I were if I expected them to point to the same target, I would just reuse the same target. If I would sorry, I would reuse the same WeakRef.

MM: I'm sorry. I should correct myself.

CDA: Go ahead, Mark.

MM: Okay. That's the whole point of the existing semantics with the strong guarantee, is you don't have to reason about multiple WeakRefs to the same target because they do they they they act identically to a single WeakRef to the target with regard to this issue. Under your weakening of the invariants, now suddenly application programmers do need to reason about multiple WeakRefs to the same target because they don't they don't act equivalently to a single one.

KM: Well, I mean, is the actual in your program, assuming you're using WeakRefs widely, actually being confident that two independent WeakRefs point to the same target, is probably fraught with error to begin with.

MM: When does the programmer need to be confident that they do? The point here is that there's all sorts of ways in which programs come to be dependent on invariants that enable them to avoid thinking about something. And I think this is one. And under your weakening, suddenly things they didn't need to think about before, they now do need to think about in order to stay correct.

KM: But those are the same things they have to think about just with regular references and the WeakRef.

MM: How?

KM: I mean, you could drop your target before you deref the WeakRef the first time and expect it to be not empty, and then you would observe that it got collected.

MM: That is correct. And that's the thing I started with, which is we were not able to fully protect against interleaving hazards, but we did what we could. And we did guarantee this. And I think it is helpful. And but none of us can actually tell by any test we know how to write how many programs out there count on this guarantee. So without being able to measure that at all and having the consequence be that correct programs start failing in ways that they can't figure out why they're failing, and it's we just induced you know, random failures that that we might not even not might not even ever understand were caused by us, this is just an unacceptable weakening of a guarantee that we made.

CDA: Just a quick note. There's about 10 minutes left. There's nothing else on the queue. Keith?

KM: I'm trying to think of an answer that would be compelling. I mean, I think we change things all the time that our theoretically semantics breaking. So I don't mean, I'm not. Totally convinced that this isn't different.

MM: Okay. When we do.

KM: I think also.

MM: I think that's semantics breaking. We generally do it either with instrumentation or with counting on the fact that if things get broken, it'll be obvious enough that we end up hearing about it and can deal with the fallout. That happened, for example, when the issue about invoking two-value on a null this for uniformity used to throw, and that throw broke something and breaking something that used to not break is visible enough that we heard about it and were able to take corrective actions. There's been a number of those. Tell me some things where we introduce something that was breaking in theory for which the breakage might not be detected or reported to us, and it's not something we can instrument for.

KM: I mean, I've definitely seen bug reports. I don't have them on hand where we have made a change and it happened on a small enough site that no one noticed it until after the version had shipped. And we just decided to not fix it.

MM: I'm sorry. Say that again?

KM: We have made changes where in the process of releasing some version of the browser, the breakage happened on a small enough site that no one happened to notice prior to shipping, and then we got a bug report, three months, six months later, after shipping, saying we broke some page, and then just decided that that was the new web reality and it wasn't significant enough and it was a breaking change.

MM: Are you so what are you suggesting for TC39 practices with regard to making breaking changes to the spec when the when the the when it very well might cause breakage of programs in the world that that are that whose whose root cause is sufficiently non-obvious that we never hear back and can never cope with the problem?

KM: I mean, I think like I'm saying that already happens.

MM: In in from, it happens in the TC 39 spec?

KM: Yeah. I'm saying we make changes and then okay.

MM: You're not, I thought you were talking about a just a change that was just made in your browser. As a peculiar.

KM: I'm saying we tried to adopt some new TC that are in behaviour. Or consistency with other browsers. And then we find out that broke some page later, but we don't consider that a web incompatible change.

MM: Okay.

??: There's a.

?? No, what it was.

KM: I don't know offhand.

CDA: JRL?

JRL: Okay.

JRL: I mean, to help Keith out, specifically here, we do make changes occasionally that are almost impossible to figure out the root cause of. An example is here of, we just discussed the intervals, which could have a change that breaks something. Unlikely, hopefully, because we're only exposing it to WebIDL. But we've made changes to Promise timing. And if you are independent on Promise timing at all, then it's going to be almost impossible to figure out why everything has changed. But we've still made that change. We also made a change to tag template literal caching semantics. So, I think we do occasionally make breaking changes. With the assumption that probably no one is depending on the semantic.

MM: Okay. Those are—I agree with you. Those are valid examples.

CDA: Nothing else on the queue.

KM: I think so—I guess my question for you, MM, is given that other that information, is your concern that this is fundamentally the wrong behaviour still, or should we have a discussion offline or somewhere else to talk about it?

MM: My concern is that it's fundamentally the wrong behaviour. The spec is as strong as it is on purpose with a lot of thought having been given to it by me in particular, but by several of us, and that's why the spec is as strong as it is. I think this weakening creates multi-threading concurrency style hazards that are not currently there. So, yes, I would object to any such weakening.

KM: And I guess I would make a slightly other point, which is that even if this committee decides not to make this change, it does not mean that JavaScript programs will in effect be exposed to this behaviour. There's a discussion with WASM members, if there's ever a weakened WASM, I would expect it to basically have this behaviour.

MM: WASM and JavaScript departed on many, many design issues from the beginning. In some sense, that was why WASM exists.

CDA: There's a reply from Matthew.

MAH: Just to comment, the example of Promise timing and so on is relevant of a technically Promise timing is deterministic here where here we're talking about making a change to expose a source of non-determinism more directly. I don't know. It's still relevant. I want to make sure we don't fully conflate like this is GC is really non-deterministic for all intents and purposes. So yeah, that is my main worry.

MM: Yeah. And that's one of the reasons why concurrency bugs are so hard. Somebody experiences a problem, their program breaks, so they just test it rigorously and it never breaks under testing, and then it breaks in the field again, and they have no idea why.

KM: I guess to be clear, I think a lot of those Promise concurrency ones, still would be incredibly hard to debug and understand why your program failed. And I do think that this class of bugs you already have to deal with when dealing with weak refs I agree.

MM: We may.

KM: I think you deal with it in the 99th percentile case all the time. Because it's through ordinary references. I I this class of the class of bugs that would be introduced by change relaxing this WeakRef behaviour here is is the class of bugs that you deal with in, the 99th percentile, which is through, I would assume in my expectation is that 99 percent of people using WeakRefs do not have multiple WeakRefs to the same target. And they have to deal with the fact that the more common problem is that you have a strong reference you have an ordinary reference to your WeakRef, and that you and and you have to make sure that that ordinary reference stays around in order to expect that you're your WeakRef deref still gives you back the object. Maybe 99th percentile is too strong, but the most common case is that you have an ordinary reference and a WeakRef, which has this exact behaviour.

MM: So the question is, not percentile by how much the cases occur, but by how much it causes a counterintuitive consequence to the programmer. And it's a tricky one. And I'm not confident about the answer either. But I think we're in the kind of, you know, programmers writing programs naively in the sense of genuine multi-threaded concurrency hazards. And if we can't protect them from it completely, how much can we protect them from it? And does it make a difference? And does it make a difference is the thing where I'm just going you know, on intuition, you're just going on intuition. We have different intuitions. And I have no idea how to test either one.

CDA: All right. We are pretty much at time. Doesn't sound like we will be reconciling this today.

KM: Does not sound like it, indeed. I’ll have to come back.

CDA: We can continue.

KM: TBD.

### Speaker's Summary of Key Points

* The current spec requirements for WeakRefs make it difficult for engines to not leak WeakRef targets in a turn
* JSC always implemented a more relaxed requirement than the spec, relaxing should be web compatible
* Mark Miller stated this design was intentional, Keith needs to verify this from the notes on WeakRefs

### Conclusion

* No consensus today, will have to come back.

## Include default in export * for stage 2 & 2.7

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-export-star-default)
* [slides](https://docs.google.com/presentation/d/1jHiOZQCgz626zVcrIPqYjp_PtmGfPXqMkyVZMHZA4HU/)

CDA: All right. Thank you. NRO, are you on the call?

NRO: Yes. Hello.

CDA: Hello. Can you speak again, which is so we can make sure we can hear you clearly?

NRO: Yes. Is the audio good enough?

CDA: Yes. It's great.

NRO: Oh, okay. Perfect. Screenshot. So can you remind me which one of the two presentations is oh, yeah. This one. Okay. Can you see my screen?

CDA: Yes.

NRO: And okay. Just pull up the slides. Okay. So I'm presenting now this proposal that we first discussed in May. Well, it was first discussed ten years ago, and then again discussed in May. Which is to include the default export of a module in the bindings that are exposed through exports star from. So recap of why this proposal exists. Today, exports star from means that we are exporting everything from in this example, sudo.js except for the thing that is named default. That was designed together with the first iteration of ESM, and now we know how people actually use these declaration.

NRO: There are two main use cases. One is aggregation of modules. So you have a library with multiple helpers to find in, groups grouped to different files. And you want to have an entry point that just re-exports everything from there. And then the other use case is a kind of a Proxy module, where you are just re-exporting everything from a module, potentially augmenting it. A common augmentations are, adding, for example, a version to it. Or when using ESM CDNs, you want to Proxy a module so that you can, change its URL without affecting web caches because the web integration of ESM does not follow redirects. And so there is this Proxy JS module needed in the middle. This is an example of a library having files that contain a bunch of things. It's an example for the code base. And as I mentioned, Proxy modules it's very widely used by ESM CDNs. So this clearly works.

NRO: It has been used since when ESM was restricted. But it has some friction. Especially in the Proxy module use case, which is that the way you need to write a Proxy module depends on the module you're proxying. Because of this default restriction. So if in our case, the module that we are exporting from does have a default export, then we must have a separate export default declaration on it. However, that does not work if the module does not have a default export because then we're trying to export an existing binding, and so we get a SyntaxError. So you cannot just have a static plain Proxy module type of file. You need to always parse the module you're exporting to figure out what exports actually are. And this kind of removes the benefits of using exports because at that point, well, you could just manually list all the bindings. So what this proposal does is to change this current behaviour of exports star from to not have the exception for default. So exports would mean just re-export everything from [sudo.js](http://sudo.js).

NRO: The main problem or main risk with this proposal is that there is a chance of compatibility problems. In most cases where you just get a default import from a module, it's fine. Because it just turns a syntax error of the missing export into a non-error if the default value actually gets propagated. The potentially risky one is when you import a namespace of your Proxy module. This Proxy module currently does not have a default. You might just record my check if there is a default in there. But then due to this change, your Proxy module starts actually having the default, and then maybe your code takes a different path. In practice, on the NPM ecosystem, it's never a problem to add exports to a module, but here. To be more careful because it's the web. We don't have server stuff. It is very common on NPM to check if a namespace has a default property. But it happens when integrating common JS and ESM due to how not JS does the documentation where it's slightly different from bundlers. So that does not happen on the web where we have no CommonJS.

NRO: We started doing some web compact research. There is a Firefox implementation flagged that is actually pretty simple to do. It was done by Cornelius and internally earlier. Some of us at Igalia use Firefox, but Firefox nightly and have just been running with the flag on to see if anything would break. Only a small set of people, but we didn't find problems yet in the past months. There is also Chrome use counter that counts all web pages that access default on a module namespace that has no default export and that re-exports other modules through exports star from. This is overcounting. Because first of all, it does not check if the module re-exported through exports star from actually has a default. Because that would require it would have been a much much more complex counter to implement because it would have required, traverse in the module graph rather than just looking at one module. And also, it doesn't really tell us whether pages will break or not. It just tells us whether pages could potentially observe it. At the time I took that screenshot, the data we had was that usage was very low. But also, the flag had just been shipped for a month.

NRO: The Chrome use counters have this very nice feature that they show samples of websites that use a given feature. So one can manually inspect them. Unfortunately, the usage of this feature is, I believe, too low. And so there are no actual websites to check. Like, to manually inspect. So that's for web compact. So we believe we are starting to have some evidence that this would probably be web compatible. Obviously, as the proposal evolves, it will need, like, a long time for it to actually collect more data, more evidence before then advancing maybe all the way to stage 4. Since last time, we now have fully rewritten spec text based on the latest edition of the spec. It's a very small spec text. It's basically what you see here on screen on screen. So removing the exceptions for default. There is a tiny other bit of editorial changes, renames. If you actually go look at the diff, but this is the only normative part. So I well, I would like to see if we have consensus for stage 2. With stage 2, in this case, I believe it means agreeing that our preferred solution is to extend existing syntax rather than what we consider during stage 1 presentation just simply go with something else. Obviously, we might discover later that, well, there is no way for us to actually reuse the same syntax. And so at that point, we can take that implementation / web reality feedback and go back to the drawing board. So let's go to the queue now. I see that RGN has submitted this RGN?

RGN: Yeah. So in practical terms, backwards incompatibility is just uncomfortable aesthetically. The discrepancy between import and export is also a bit awkward. Have you looked at new syntax rather than changing the behaviour of existing syntax?

NRO: Yes. One, for example, one of consider was to just export star star from. To, like, have well, new but similar looking syntax. And then the idea would be that, this old syntax would basically kind of be not deprecated, but would fall out of use and people would move to the new syntax. However, we expect the actual web compact risk to be so low that it doesn't feel like it's worth to introduce separate syntax just for this case. Because, remember, the only case that breaks is when somebody imports a namespace and checks properties of namespace, which is, like, and then branches depending on what property on what properties are there. Which is far from being the common ways that ESM is used.

RGN: Right. I don't have firm articulation of why, but touching functionality that has already shipped is uncomfortable even when it's safe. I don't know that I want to block this; it just leaves a bad taste in my mouth. I think there's a later item about it as well. Just wanted to give that feedback.

JRL: Yeah. So before we go on. There is a message directly from LVU in the message that directly relevant to the same topic. Her words: "This would be great if we were designing export star now, but in my opinion, it's too much of a breaking change to deploy today." I'd also suggest new syntax, possibly even something for a conditional re-exports in general export star default question mark. From `Foo`. So I think that is directly the same thing as what RGN is saying here. To reply to that, though, is actually me.

JRL: Do we really expect anyone to break because of this? I think in the web ecosystem, I personally don't use export star frequently. And in general, most people avoid default exports. It's been really honed in that to everyone that you should really use named exports because they were more compatible back in the ES5 transition days. And they work better for renaming nowadays, just doing refactorings. I expect personally this web compact risk to be just absolutely minuscule. And I don't really expect anyone to break because of it.

NRO: Yeah. Also, I want to add, if we stumble upon a web compact problem, then regardless of whether this is our preferred solution or not, we would probably need to, not do this. So, this proposal advancing is entirely based on the assumption that there will be no web compact problem. But then we will actually know before finalizing the proposal. And it happened multiple times that web compact problems were only discovered when one implementation actually tried to ship in nightly or canary. And I think this is one of those cases where it's very likely to be web compatible. But we will only actually know at that point. So the question is more, is it something where we as a committee are willing to take the risk?

JRL: Okay. Up next, we have a new topic from hacks.

JHX: Yeah. I still worry about that. I checked some old notes. Which discuss this and and I AWB and YK talk about and mention some refactor hazard of that. Unfortunately, there were not many details in the older notes. But I think we can explore the—can we ask them because I feel it's risky if we don't fully understand the older discussion. Thank you.

NRO: Yeah. So I also did some research about the history of this proposal, given it was already presented a long time ago. And the refactoring that if you have a module that has a default export, and you have a separate module that does export star from that module and export star from from some other module, that module would do export star from will expose the default export. But then if the second module that you are doing that you are exporting everything from also adds a default export, that default export will not be exported by the module that proxying both of those. Because the way export star from works is that when you have multiple export star from declarations in the same file, and there is a conflict, it solves the conflict by, not picking either of the two possible things to re-export. This is not specific to default. This is something that happens in general with all also, with all other import names. It's just in for the timer. Actually, you have replied to this?

JRL: Yeah. So we can skip mine. Four minutes. I think we'll get to the Q. As long as we don't dive too deeply. Ashley, you're up next.

ACE: Yeah. Just for kind of repeating what NRO said. Like, the refactoring hazard here is no different the refactoring hazard with named exports. So it's I don't think I think we fully understand what was being raised and all the semantics here. And I don't think this is any if any new thing to be concerned about.

JRL: Okay. And then we have a couple of go ahead.

NRO: Yeah. The things we have are some support in the queue. EOMs. So just to, like, restate it, I think it's clear like, the risks are clear to the committee. And so now the question with advancement is whether we are comfortable with those risks or not. So do we have consensus here for stage two?

JRL: Okay. So you have a couple of strong supports, one from ACE, one from CHU, CDA, MF, I don't know about RBR yet. He's still typing. You have some from myself as well. Is there anyone that blocks stage two advancement? Okay. I think we can call it for stage two.

CDA: I just want to interrupt real quick. Did we read ACEs comment for the notes?

JRL: I did not. Sorry. I just read the strong support. So Ashley says NNTS, which I have no idea what that acronym means.

CDA: No need to speak.

JRL: Okay. EOM. Yes. Strong support. The chances of this breaking something are so small that I think the new syntax is far too cautious. New syntax should be reserved for only when we must have it.

CDA: Okay. Now let us clap for stage two.

Yeah.

NRO: I can hear people clapping today. This is new. So I actually. And also interesting to see if we have consensus for stage 2.7. The reason so there is no reason for this proposal to advance fast. Because before being shipped, it needs to marinate. We need to have canary implementations to see if we can actually do it. We already selected reviewers for this during stage one because they've already actually reviewed the spec text. And from a process point of view, all of these stage 2.7 requirements as at this point are met. Because we have complete spec text, and the design space once we settle, trying to reuse the same syntax is basically nonexistent. The stage two reviewers were CLA Manga Bedford. And.

JRL: Okay. So I think we qualify for stage two then as long as we have the full spec texts nailed down. We have stage two approval. I'm sorry. We have reviewer approval. Have the two reviewers approved the spec?

NRO: Yes. I don't know if I have editors. I know of let me just check. Well, I checked if we have enough editors. Two people have comments about two things.

JRL: Okay.

JRL: Can we quickly get any support for stage 2.7? If not, we are running over the time box now.

NRO: And yes, we have enough editors.

JRL: Okay. NRO, change your hats and sorry. You got deleted. I can't read it now. No concerns. If entrance criteria met from CDA, MF says I support this to stage 2.7. So we have two supports, explicit supports. Does anyone object to stage 2.7? Okay. One clarifying question from CDA. Sorry.

CDA: Sorry if I missed this. Do we have 262 tests?

NRO: We don't have them, but that's for stage 3.

CDA: Sorry.

JRL: Yeah. So we just need reviewer approval and editor approval and concrete spec text. And then I think those are the only entrance criteria. And I think we've met all of that. So hearing no objections, I think you have stage 2.7. Congratulations.

NRO: Thank you. And to be clear here, now I plan to slow down and let this marinate as we make sure it's compatible.

JRL: All right. I'm going to pop this off the queue. And go on to the next agenda item. So Nicolo, get ready for export defer.

NRO: Just give me just a second because people are complaining about my echo. So I'm going to try to, I don't know, move some curtains around and see if that helps. Okay. Okay. Can you see my screen?

JRL: Yes.

JRL: I cannot hear you speaking now.

### Speaker's Summary of Key Points

* The proposal changes `export * from` to also propagate the default export, to simplify modules aggregation and proxy modules.
* Use counter in V8 and flagged impl in Firefox, no obvious web compat problems
* Discussed about the potential refactoring hazard of propagating default: adding a default export to a module re-exported through `export * from` will be a breaking change if a sibling `export * from` already exposes a default export.
* The proposal already has spec text written
* Stage 2.7 reviewers were selected during Stage 1 and already reviewed it

### Conclusion

* The committee considers the refactoring hazard and the web compat risk low enough that the proposal is overall worth it
* “Include default in export *” has Consensus for both Stage 2 and Stage 2.7

## export defer for stage 2.7

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-deferred-reexports/)
* [slides](https://docs.google.com/presentation/d/1M_5zKVnyzCrPdxFnMSQrOwiyRX-p9t0Nt8S4Osx55a0/)

NRO: Oh, okay. Okay. So another modus operandi proposal. Deferred exports for stage 2.7.

NRO: So recap, I assume you all remember what the proposal is. But just in case, recap of the motivation. That had this proposal get approved for stage two. Consents for stage two. Which is that a common practice in ESM libraries is to have an entry point that has a bunch of re-exports. Especially for things like component libraries, utility libraries, where they have many different things. And libraries prefer from a DX perspective this approach compared to having many entrypoints, one for utility asking people to just start to import from the right entry point. And the way they do this is they probably still have set multiple files internally within the library. It just makes more sense from a code organization and maintenance perspective. But then they all have an entry point that re-exports all of those things from all of these files. It has, however, a big problem which is that it causes a lot of unnecessary code loading and execution.

NRO: So because, from the slide before, maybe you just need, like, the add function. You import the add function from that file. And it's coming together with all of the other utilities exported by that library. Different tools, bundlers, have occurrence for this. They all implement re-shaking. They try to remove code that can prove isn't used and set effort free. But it still has its limitations, which is why it's frequently recommended to actually not use libraries like that. Because it is just not possible to know whether something is fully safe to remove or not. However, DX benefits are so large. Frequently, even ignore this recommendation. Or, not everybody agrees with this recommendation because not everybody agrees with the trade-off between DX and the problem of the X code. So the goal of this proposal is to allow developers to keep choosing this good DX pattern where you import your utilities from your one library entry point. But without forcing them to pay for this extra unnecessary code cost.

NRO: So what the proposal does is that it takes this example of a library entry point and it allows marking export statements as deferred. Where deferred means in this case, well, let the importer choose whether this re-export they have is actually something needs to be to be, fetched and processed or not. So in this case, if I import only add from this library, I will completely skip loading execution of all of these other utilities.

NRO: The proposal integrates with import defer. It was actually born as part of import defer, but then it was split off because of the extra complexity and extra power of also having, like, big loading implications other than just execution implications. So import defer just lets you defer the execution of part of your module three while preloading it. It is used for things that you need you will know.

NRO: But maybe not right away. And where there is too high friction to adopt dynamic import in your code base. For reasons. And so you tend to prefer eager loading just because you cannot migrate and import defer gives you a middle ground solution here. That's, like, matches if adopt even though it's not as powerful as dynamic import. Export defer gives you granular control over that. So instead of the importer just saying it has to have this whole chunk of modules, export defer lets libraries further separate their own subgraphs. And as I mentioned before, it allows when a module is not imported in any way, so when it's not imported through a namespace or through plain, a plain import where you list the bindings, it will completely skip loading, which is something that import defer cannot support.

NRO: The proposals are meant to both be used; neither is a replacement for the other. Library authors should use export defer when re-exporting something that the consumer might not need. To not force their consumer to load that potentially useless code. And consumers should use import defer when they're detecting that they're loading something that they do need, but who is execution as part of the initial ESM evaluation time is causing some performance problems. There have been some changes since the last update. We discussed in many presentations already filter namespaces. That was solving an incompatibility between namespace imports, which are required by import defer, and export defer.

NRO: Following the various discussions we had, this is now merged in the proposal. We ended up picking a property name for how we call those filter namespaces in dynamic import. We need to choose the word that sounds like here, exports on screen, which is the list of names you're actually interested in. Thanks to all of those that participated in the polls, you can see here the results on screen. The reason we ended up picking exports was not necessarily because it was the most loved option. But because of the options that people liked, it was the least disliked one. For example, you can see that, select had actually more excellent votes. But there were more people finding it bad. Some people suggested only after the poll was opened. So thank you for that. Maybe leave the votes that only would have gotten if it was slightly higher if it was introduced in the beginning would have been slightly higher. But also looking at, GitHub issue and trying to talk with people that I knew had filled the poll we ended up picking exports. And you can think of this as this is the list of exports of the module that I'm interested in.

NRO: There are also some bug fixes when it comes to, like, that were found thanks to an engine XS implementation. Where we can, already try the proposal, try some draft tests we have, and make sure it works as we're expecting it to work. And finally, one large change done to the proposal in the past couple of months is to make sure it does not regress the goal of allowing exports from the abuse for Proxy modules. You might have noticed that a schedule constraint to have the export star from change before this presentation because I wanted to get confirmation from the committee that there's a good goal to follow.

NRO: So before this change to export to the export defer proposal, an export star from declaration would cause all of the deferred re-exports of the module that it's proxying to be loaded. Because it was kind of equivalent to replacing the asterisk with a list of all the names exported from the module. So this is bad because the export star from basically makes the defer keyword in the proxyed module useless. So the proposal was changed to actually so that export star from checks whether they've exported bindings are eager or or deferred. And re-exports them appropriately. If you have followed the repository in the last week and a half, you might have seen that even though we're after the agenda deadline, there were a lot of PRs merged to mark as normative. There were all bug fixes that did not impact in any way the semantics that were ever discussed. For bugs found during this stage 2.7 reviews.

NRO: Thank you a lot, especially GB and ACE for, making sure the proposal was in a very good state. And, these bug fixes were things like, oh, we have an infinite loop in one case. Or maybe somewhere we have an assertion where actually it should have been a, a thrown error. And things of that type. There have also been some editorial cleanups if you'd read the spec text. You might have seen it was introducing the concept of a binding that is initialized on access. It was there, kind of safe because it was side effect-free. But it was a little bit ugly. There were some concerns with that opening the door to in the future maybe binding access triggering side effects in places where it does not already do that. So we were a factor that away by using, like, existing spec concepts instead of modifying how bindings work. So yeah, that's it for my presentation. I would like to ask if there is consent for stage 2.7. I also have a statement from GB who unfortunately cannot be here.

NRO: For context, GB blocked this proposal for stage 2.7 one year ago. Due to the incompatibility between export defer and namespace imports. So I'm just going to read it exactly the way he sent it to me. Which is the filter namespace design of the proposal integrates well with import defer, which was one of my main concerns with this specification before. I'm satisfied from my stage 2.7 review over the last weeks that the specification and design of the semantics is fully complete at this point. And all issues I raised during the process have now been resolved in the spec. I'm also excited to see it integrate with model declarations where I can naturally add a lot of value. Plus one for stage 2.7 progression for me. And yeah, that's it for me. Let's get to the queue.

CDA: Yeah, I'm on the queue. So yeah, I know the goal of this proposal as stated is about DX. But I just wanted to point out we haven't really talked about the security benefits that we get from landing this. So I just think that's particularly understated. And I am looking forward to this proposal advancing further. Reason. And the DX reason as well. I'm also next on the queue. I guess I cannot say no need to speak while I am chairing. So plus one support. We desperately need this. And then Ashley is on the queue with plus one support. I wish ESM had worked this way from the start. Do we have any other feedback and/or support for stage 2.7? NRO, can you confirm the entrance criteria have been met? Reviewers signed off? Editors signed off?

NRO: Okay, just reviewers signed off, and let's check again if the editor stayed. Which is fine. Same editor. I actually don't have him allowed to review my own proposals.

CDA: While you were double-checking, CHU, supports as well as LEK, RPR, and RG.

NRO: Yeah, editor signed off. So I guess this will be conditional on editor sign-off. I can say I obviously since I became an editor and learned all of those things, reviewed the proposal, also from an editor perspective. But I think we need also a second editor.

CDA: Yeah, I don't think the editor can just rubber-stamp their own specs.

NRO: Yeah. So this will be 2.7 conditional on editor review.

CDA: Are we comfortable with that, committee folks? I see one thumbs up from MF, thumbs up from PKA, thumbs up from RG. Okay. We'll call it conditional 2.7 unless there are any objections. All right. Do you have 2.7?

NRO: I think so.

CDA: There was there was quiet.

NRO: I cannot hear it.

CDA: Okay. Well, I muted the microphone. Hang on. Let's try it again.

NRO: I can see but I can still not hear it. Nice cancellation is still good.

### Speaker's Summary of Key Points

* The proposal now integrated the `{ a, b } as ns` “filtered namespace” syntax, discussed in previous plenaries
* We had a poll among delegates to express opinions on option names for the dynamic import variant of `{ a, b } as ns`, to be used as `import(…, { <option name>: ["a", "b"] })`. The one with a better like-to-dislike ratio was `exports`
* `export * from` now properly propagates which of its re-exports are deferred and which one are not
* GB, stage 2.7 reviewer who previously blocked the proposal advancement, found many bugs (all fixed now) and is now happy with the proposal
* There are no editor reviews yet

### Conclusion

* The dynamic import form of filtered namespaces will use “exports”: `import(url, { exports: ["a", "b"] })`
* Stage 2.7 conditional on editor approval

## Continuation: [Composites](https://github.com/tc39/proposal-composites) for Stage 2

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-composites)
* [slides](https://docs.google.com/presentation/d/1lN-LdmUQ9Nh6bF-5uuuuAQhHtDBTmI9xfYyj6TH_8F4/)

ACE: If the replies on matrix or anything to be believed, it sounds like for composites, there will be a way forwards with relation to the cross realm. It sounds like Mark Matthew said that Mark would be happy if we changed the specification to make it clear that the registry is linked to the constructor. It's not you don't knew it, but the thing that lets you create a composite. So and that was the thing that gave me the most concern with going into stage 2 with such a seemingly insurmountable thing to pass. But while we still certainly have things to discuss, I'm now confident things we have to discuss do more naturally sit in stage 2. And that I feel happy with a state personally, I feel happy that a stage 2 would represent the stage we are actually in. So continuing I guess we can go through the queue, but then I will this time actually ask for stage 2. So Matthew?

CDA: Sorry. Hang on. Quick point of order. Did we have a queue from before?

ACE: I don't think so. I just yeah, I think it was just all the plus ones. It was like there was like 100 plus ones.

CDA: Yeah. About that.

CDA: Let me just let me just import a real quick. I can scroll. We have time. You had only a 9 minute time box. So just give me a second. Okay. What are we doing here? All right. Yep. I'm not going to reorder. MAH.

MAH: Yeah. MM is offline, but yes, he expressed directly to me that after thinking about it from the—basically, the characterization that Keith and Ashley gave about, the registry being attached to the to the composites constructor, is actually fine. And his preference would be if that can be if we end up in a pair realm registry that it would be specified that way effectively a registry attached to the global constructor. And yeah, so I it seems like there wouldn't be any fundamental conflict for pair realm versus cross realm in stage 2. So I supports and I mean, and Mark supports as well.

CDA: Keith

KM: Is it the fact that the registry is attached to the realm or the constructor, isn't that an implementation detail? Aren't they one-to-one? I just want to verify this.

MAH: It is. It is an implementation detail, yes. It is just, clarity being able to think about, what it really means. So if it's possible to specify it such that you can think of it as a registry attached to the constructor, then it's better. But of course, if it's it it is strictly equivalent at that point.

JHD: So I'm going to put myself on the queue. I'm going to hazard a guess that currently it is one-to-one, but if compartments advances, it wouldn't be. And tying it to the constructor would be critical for that use case.

MAH: Yeah. I think at that point, we would need a way of creating a new constructor somehow. Which maybe something we should think about in the future. I don't know.

NRO: Yeah. I think whether it's that right now to do realm or constructor, it's like entirely under your direction. It does not have semantic implications because we do not have compartments.

???: Yeah. What's the quote that you meant?

NRO: Okay. Thank you. Do you want me to repeat.

CDA: No. No. We're good. The note people say we're good. Keith.

KM: I guess so. To clarify, I talked about this in delegates channel, but I don't think where the registry lives is actually necessarily blocking anymore after some thought. Essentially, all the components already exist that are needed to make it work globally, without leaking realms, without like, implicitly tying realms to stuff. I'm sympathetic to possible other other implementations having complexity there, though. So I would definitely want to make sure with them if we ever wanted to go globally. Sorry. If we wanted to make it global, yeah. I'm also happy to share why I think it's fine if there are other implementations that are curious.

CDA: OFR?

OFR: I guess it's mostly answered, but just to be double sure so that I would not like, that would mean you could not create a new registry or, for example, get hold of the registry itself or something like that in the language. Okay.

KM: Yeah.

OFR: Sounds good.

KM: Can I just go.

CDA: Keith.

KM: I think well, I guess it depends on the web, you could because you can make new iframes, which would then give you new realms, and then you can make new registries. But yes, it's not first class.

OFR: Yeah. And you couldn't, iterate the registry or anything. Yeah.

CDA: Keith, you're also next on the queue.

KM: I don't. Saying before, I just want to state, though, that I think the registry part actually might be one that would be easier to solve in stage 2. It's like less overall the shape of the API. The ordering of the parameters the object ordering part, I think, is something we should decide before stage 2. So I guess, you know, we can spend some time talking about that now, or we can yeah.

??: Yeah.

ACE: I guess I personally it the sorting thing, while was a obviously, a thing that had strong opinions, it felt like there was a sufficient design space that while we don't know exactly what it is now, feels like the thing we could resolve in stage 2. But again, I'm very happy to stay in stage 1 if there are concerns that there isn't enough of a design space that we think we can if the design design space is still too large or there's still, possibly too strong opinions that we think that yeah. Maybe maybe say some more, Keith, so I can understand.

KM: To clarify, I think you're talking about the two-phase thing where you declare or you're saying something.

ACE: Or or other other things that were suggested by.

KM: I guess I worry that's kind of the core shape of the API in some respects. Like, I saw the core use of the API, but it's the core shape of how you use the API. Sorry. Like, the core use case doesn't change, but how you use the API is decided by that. I don't know whether that I don't know if there's a shape that everyone's going to be happy with. I'm not. I guess I'm following your advice of don't go to stage 2 unless we're confident we're going to be able to do it. I am not convinced personally yet, but I see that there could be light at the end of the tunnel. So I take that how you will.

ACE: I yeah. I'm still going to continue to ask for stage 2, but I will have no negative resentment against you if you want to block.

OFR: Yeah. Since we last time talked about it, I think there are various workarounds that seem kind of workable. Maybe so, for example, you could have a fast case if the object that you get in happens to be sorted. Then at least if users use it correctly, it would be fast. Or you might not even need sorting for small objects. So it might not be a non-issue. So I see it as less of a problem as in the previous session.

CDA: NRO.

NRO: Just that, it seems like restricting this, like, having figuring this out is a problem for stage 2 is a bit immature. Like, stage 2 means, we broadly agree on what the design is. But, of how the design actually, what are the details of that is still very much to be defined. Like, I feel like here stage 2 means, oh, yes, we're happy with the object-based approach. We are like, happy with whether we are how a quality works, which are, core aspects of the proposal. And, we roughly expect to have a constructor. But then, how exactly you pass the parameters to the constructor is very much feels like something that's to be settled for stage 2.7.

CDA: OFR says, "Just saying I see possible implementations given the design constraints." That is it for the queue. Discussion topics anyway. The rest is support for advancements. So do we support composites for stage 2? We have support from MM, RB, WM, RBR, LVU, RKG, MF, RPR, MF again. Must really like it. Plus 2 supports from MF. MAH, LEK, DLM, that is a lot of support. And we have the entrance criteria met. Do we have any objections? All right. I believe you have stage 2. Congratulations. Yeah. We need reviewers. Who will be a reviewer for composites? Jordan will. Michael will. Ross will. Did I see another hand—that's plenty. All right. That is it.

### Speaker's Summary of Key Points

* The restriction on the registry being cross realm was relaxed.
* Remaining design questions feel appropriate for exploration in stage 2

### Conclusion

* The Composites proposal has consensus for stage 2
