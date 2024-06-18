# 11th April 2024 101st TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

**Attendees:**

| Name               | Abbreviation | Organization        |
|--------------------|--------------|---------------------|
| Jesse Alama        | JMN          | Igalia              |
| Daniel Minor       | DLM          | Mozilla             |
| Waldemar Horwat    | WH           | Invited Expert      |
| Ashley Claymore    | ACE          | Bloomberg           |
| Nicolò Ribaudo     | NRO          | Igalia              |
| Chris de Almeida   | CDA          | IBM                 |
| Duncan MacGregor   | DMM          | ServiceNow          |
| Bradford Smith     | BSH          | Google              |
| Jordan Harband     | JHD          | HeroDevs            |
| Jirka Maršík       | JMK          | Oracle              |
| ZiJian             | ZJL          | Alibaba             |
| Keith Miller       | KM           | Apple               |
| Linus Groh         | LGH          | Bloomberg           |
| Philip Chimento    | PFC          | Igalia              |
| Samina Husain      | SHN          | Ecma                |
| Eemeli Aro         | EAO          | Mozilla             |
| Ron Buckton        | RBN          | Microsoft           |
| Daniel Rosenwasser | DRR          | Microsoft           |
| Aki Rose Braun     | AKI          | Ecma/Invited Expert |
| Mathieu Hofman     | MAH          | Agoric              |
| Mark Miller        | MM           | Agoric              |
| Dominic Gannaway   | DGY          | Vercel              |
| Mikhail Barash     | MBH          | Univ. of Bergen     |
| Istvan Sebestyen   | IS           | Ecma                |

## Decimal for stage 2

Presenter: Jesse Alama (JMN), Liu ZiJian (LIU)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://docs.google.com/presentation/d/1kXurIVl4kjzclwFgfzJqohtPyryeKI7Mn9C_w7aAYp8/)

JMN: Great. Thank you. My name is Jesse. I’m with Igalia. I’m presenting an update today about decimal. I’m working on this with Bloomberg. I’ve got a co-presenter on the call today from Alibaba. You’ll see zi Jan in just a moment. So just as a reminder, decimal, what’s the idea of the decimal proposal? The idea is to add some kind of exact base 10 representation of numbers to JavaScript. We’ve had some nice discussions like yesterday -- or, sorry, I guess the day before. Maybe it was Monday, about exactness and adding things and what not. And I’d like to re-up that topic here with decimal. This is a somewhat more ambitious project than what we were talking about before with the `Math.sumExact` stuff. The goals for today is to present a bit of the ecosystem. There was some discussion last time I presented about products out there that are using decimals. And so one of the things that I would like to present today is to do a bit of a deep dive on some larger products that are using decimal numbers for their day-to-day work. And then I talk a little bit about the state of the open source world usage of decimals. I talk about the way that people use libraries and ways that people might use decimals, but currently don’t. Then I’ll try to give you a breakdown of the state of the proposal as it stands today. I'll propose a solution to a topic that we have talked about a number of times here, the normalization issue. And if things look good, then we’ll ask for consensus to advance to Stage 2.

JMN: So products that need decimal, decimal numbers. Usually when we talk about decimal numbers, we’re talking about human consumable quantities. Usually we’re thinking about money, although that’s not the only use case. Bloomberg is quite active in the TC39 world. You’ve seen that. They’re using decimal in their ecosystem. Ashley, are you there? Would you like to talk about this? I’m also happy to give a bit of a discussion here, if you’d like.

ACE: I can say briefly, yeah, thanks, Jesse. So, yes, at Bloomberg, people that use Bloomberg for any of their financial data would be very pleased to they that many of our systems here do use decimal to make sure we correctly capture the value of things in their financial world. And that’s because a lot of code at Bloomberg is using C++ and Python, and a mixture of different databases, and all of these, due to the way we’re using them, have a built-in decimal type. And we can communicate between these things and we have a schema —you can think of these schemas a little bit like a protobuf schema, but our own flavor of that — where we can say which fields are decimals so we can create wrappers between all these languages and these systems. We also have a lot of JavaScript at Bloomberg, which is why we’re so involved in TC39, and the issue then comes is JavaScript doesn’t have a decimal type. And this then means that JavaScript becomes a kind weak cog in this system, when it wants to communicate with these other things or, wants to be the glue between these other services because it has a much harder time in trying to represent these in a way that’s ergonomic with these other people, and especially as these decimal values can be deeply nested in the messages being pass around, which sometimes means we have to do the deep transformations of the data to find the decimals to then process them in a way we can flow them through JavaScript and process them back out. And so this adds noise to the code, makes the code harder to follow, and adds naturally like a performance overhead. An example of where decimals might appear is — you might think, why do you need more than, like, one cent, and maybe surprising to people that don’t work in finance is that it can be common to talk about things in very, very accurate quantities. So when putting buy and sell request bids in, it might set a limit, and we have use cases where people want to set limits to, like, a 1000th of a dollar. And they may even want to go higher. They don’t want to precision to be locked into the API, and decimal catches that perfectly. It perfectly says in the schema that you can provide a decimal value, so you’re free to kind of go as precise as you want rather than us just fixing the smallest unit or just falling back to string and trying to document what that string must be. Yeah, feel free to add any more, Jesse.

JMN: Yeah, thanks, that also sounds really good. And maybe one thing I might add is this case about very high precision. I’ve also seen cases of six digits of precision for these things, and I’m sure you also see that at Bloomberg as well, or even more. Thanks very much, ACE.

JMN: We have a representative from Alibaba on this call. LIU, would you like to present something with what you’re up to with decimals?

LIU: Yes. And thanks, Jesse. Hi, everyone. I’m ZiJian, a delegate from Alibaba. Here I’m going to show our use case of decimal. In Alibaba we have a software called DingTalk where it’s 20 million monthly users.

LIU: In DingTalk, we have ding talk with 8 million monthly active uses DingTalk is compatible with Microsoft Excel and Google sheets, just like the picture shown right. And in DingTalk sheets, we have many decimal use case. The first is general mathematical calculations. And the second is sheets for formula calculation, which is most important feature about DingTalk sheets. And because DingTalk sheets is a web application, so we are facing many problems while using number calculations. The first is when we do simple calculation just like `0.1 + 0.2` and we expect to get `0.3`, but we get the wrong answer, and if we want to use some formula, just like if(), floor(), we are getting wrong answer too. So in current, we are follow -- for solve this question, we are follow the same thing that Excel does: just preserve 15 digits of precision. We just code JavaScript API of `toPrecision`. But even this still has many problems. Just like we have facing -- we are facing development mental overhead where it’s number to stream and the stream to number transform. Just like the code shown on the right. Even a simple calculation will become complex and hard to understand in real code and especially with nest sheet formulas. And with 15 digits of precision, it's still wrong with the given case. We cannot always get correct answers. And use decimals library will impact performance with many formula calculations. So, if decimal can go to the standard we can have many benefits. The first is we can reduce mental overhead on developers. No more conversation between the string and number and fast page rendering for the server and the client side rendering and reduce our JavaScript bundle size because we are no longer need to load a decimal library.

JMN: Okay. Thank you very much. So now we have heard a couple of larger projects out there that are using decimal. You can see the motivation is quite strong. Any kind of nave treatment of decimal numbers can lead to user visible errors. So, decimal libraries are needed and this decision was made by a number of other products as well, surely. These are just a couple of examples.

JMN: Let’s take a look at the open source world. There are a few packages out there for doing exact decimal numbers. What is interesting, they are all dominated by a single person. ['MikeMcl'](https://github.com/MikeMcl) has a bunch of packages out there. `decimal.js`. `decimal-light-js`. And `big.js`. `bignumber.js`. These are a few different variants of exact decimal numbers. For example, decimal JS, that has basically all of math sitting there. And it has kind of arbitrary precision, we also call it big decimal semantics. It is interesting there, that some parameters can be globally modified like precisions and routing we want to set. So calculations going to refer back to this global state. What is interesting there is a decimal light version of this which kicks out any kind of reputation of NaN or Infinity or -0. And it also just decimal, so there’s no support for other kinds of basis there.

JMN: `big.js`, that’s used by quite a lot of packages out there. Very similar. `bignumber.js`, this is something that supports decimal and non-decimal arithmetic. ['MikeMcl'](https://github.com/MikeMcl) is really the hero here, you can see, you know, more than 10k packages that are using some form of decimal numbers there.

JMN: There’s a number of users of these libraries. I tried to find some that stick out, obviously, when you do some kind of analysis of these packages you’re going to discover some kind of false-positives or the things that are one-off, throw away projects. So I tried to filter out many of these things. You can see, for instance, database adapters. This is one use case that We talked about a couple of times. So the idea is if you’re connecting to a database and that already supports decimal numbers natively, then we want to somehow respect that and big number JS is used by – and DB adapters to try to be faithful to the data in the database. There’s some stuff from Apple that is out there. SAP is using that, DataDog is using that. I see that the big query JS client is using big JS. And tensor is using that, there are graphing and charting out there, bar charts. Decimal JS is used by a bunch of things. ORM called Prisma, that is using that, using decimals behind-the-scenes. Keystone, there is a visualization library out there. This is a sample, just the tip of the iceberg of who is using all these libraries.

JMN: What we find from all of this data is that the demand for decimals is widespread. So surely, we know, we can convince ourselves by intuition and our own experience, surely there are a lot of JS developers who just don’t know about decimal and kind of rolling with decimal calculations and either they don’t encounter any issues or they are fine with the issues. Maybe they just don’t know about it. But there is always a class of developers that do know about decimal numbers and are using libraries to get the job done there. Is something like 10k packages. As I said.

JMN: We see this is used in lots of libraries and frameworks that need to integrate with lots of other code. So some examples I found are not particularly deep, but show there is a lot of connection between two system so decimal needs to stand as a faithful representative of values coming between two different systems. There is division between the implementations as you saw. The ones that I mentioned here, all by a single person. They are different. But there’s not that much difference. So there seems to be kind of a core need to have some kind of representation of decimals. But there’s also just a class of details about that, that don’t seem to be all that important.

JMN: Some of these libraries support some kind of customization as I mentioned earlier, there’s support for global state like the precision or some kind of rounding mode. But in our experience, what we have seen so far in the data is that this customization is not used that much. So it is kind of, it is typical use cases that the developer will either roll with the defaults and not even touch the global state or set it once and that’s it for the rest of the application. There is no need to tweak any of those values later on.

JMN: One of the things that I also wanted to point out is typical case that I have encounter which is where developers know about decimals, they are using a decimal library, either one of the ones that I talked about before or maybe they are rolled their own of some sort, because decimals not built in data type, at least there isn't some kind of native support for decimals, they still might be making some kind of mistakes which motivate the need for decimal these begin with. So for instance here, something from the `event-espresso-core` library. This is some kind of function for dealing with money. By the way, these things are links you can click there to go to the code if you want to take a look at that. I highlighted in red here the cases the programmers trying to create some kind of decimal. But the input there is perhaps not necessarily trustworthy. So here, for instance, we see `const share = new Decimal`, and then the input to that, the argument to the constructer is the result of some kind of math floor, there is a product there, something gets converted to a number. Two things get converted to a number, I should say. And so the issue here is that we enter the exact decimal world, that’s the intention of the programmer, but with some kind of calculated, possibly the inexact value, probably a value that the programmer excepts.

JMN: Here is an example from bar chart. Computing axis ticks. So working with some kind of graph. So here, again, exact details don’t really matter, but I highlighted in the red where I see a little bit of pain and feel a little bit of sadness when I see this. The programmer, as in the previous example, is starting from good intentions. Look at that, we got a 1, and a 10. This is great. So we got decimal numbers here. Those inputs are exact. Those are integers. But then we do a little bit of arithmetic here, we do a division. Maybe some exponentiation. And then, at the end, we multiply by some kind of tick increment and convert this whole thing to some kind of native JS number. So this seems mostly clean. We start in the decimal world, but we then end up converting took some number, which is, again, undermining a little bit of the point of using decimals in the first place.

JMN: Here’s an example from Shopify, `buy-button-js`, this some kind of little library that Shopify has kindly made available. Again, this probably doesn’t matter too much in all of its detail. Just look at the red part. Why we’re trying to convert something that is possibly inexact and roll with that. So we see that we’re, the data, we’re giving our JS numbers and strings. So the question is: Could this be improved if we had decimals? And I think the answer is yes.

JMN: So looking at these examples, we see that there’s a lot of cases where JS programmers are aware of decimal numbers. They have the tools to reach for them. But the computation from beginning to end and the representation from beginning to end is perhaps not faithful. So some of the motivation for using decimals is undermined. But, thankfully, at least some decimals, some developers are aware of these libraries. That’s a good thing. There’s a lot of really mission-critical data that needs to be represented as decimals, and thankfully, some programmers are doing that.

JMN: We also see, if we look at those examples and many others not on the slide, basic arithmetic is sufficient for most use cases. We see front end and back end use cases exist. This is not just some side of browser issue, nor it is just kind of a backend issue with say a database adapter. We see that developers are trying to create decimals from JS numbers. Again, the intention is right. It’s good that they’re trying to do that. But in some cases that is just not going to be exactly what they’re looking for. In the end, because there is no built-in support for decimals they usually have to convert these things to numbers at the end. So it's a bit of a sad situation, you might say.

JMN: So that’s it. So that’s the motivating argument for this thing. We looked at some products that use these things. We have taken a look at some of the open source world and how they use these things. We have seen a lot of programmers aware of decimals, use them, but might still not be getting all of the traction that they want out of these things. So with that said, then let’s take a look at the proposal and see what we have to offer in its place.

JMN: What we propose is the IEEE-754 standard, Decimal128. The data model here, we have a fixed bit width so any value is 128 bits. This is something that’s been standardized since 2009, or 2008, something like that. It’s been around for a while. This supports numbers with up to 34 significant digits. Which is really quite a lot. You know, even with applications that are using very high number of digits. That’s quite rare to see something that high. Which is why we think Decimal128 is a reasonable fit for the range of values out there. The exponent, so the power of 10, ranges from minus -6,143 all of the way to 6,144. Again, that is a very high number of exponents. So That's a vast range. That can handle really enormous values and extremely precise ones as well.

JMN: We did consider a bunch of alternatives. Some of these have been presented before in plenary, but just to put this in one place. We did consider something like rational numbers. I think I speak for some of us here in the committee, I, myself is coming from the list and scheme world, these things have been around for quite a long time. There are plenty of valid use cases for these things. But what we find is that this really fast growth of the numerators and denominators given the lack of a common base. So even when we add two things together, the numerators and the denominators can grow, now, that is not necessarily the end of the world, because there is a way to reduce that, you can just use the greater common divisor approach, there are clever strategies for doing these things, but we are concerned about the growth of these things. And in any case, rational numbers are rather awkward match for the intended class of use cases. We really want to get something like a decimal representation, a digit string out of these values. This is going to require long division to get that out of a rational number. It can be done, of course, but it is just a bit of an awkward calculation to do.

JMN: So by contrast, with decimal 128, comparisons are always taking place with a fixed common base. There is a fixed bit width. So there is potentially some kind of need for normalization which like we’re moving to zeros, but shat much more straightforward compared to say commuting the greatest common divisor or reducing a fraction so that there’s no shared factors. That’s, we also see that decimal 128 is just a great match with the intended use cases. Certainly much better than rational numbers.

JMN: Another alternative that we considered is "BigDecimal" or arbitrary-precision arithmetic. So unbounded digits. We decided against this in favor of decimal 128. We are concerned similar to rational numbers there is a rapid growth of the number of digits. Even simple digit calculations can lead to large growth. In this case, think about multiplication and division, those can generate quite a lot of extra digits. And some common operations even require some extra parameter to be specified to even make sense. Division in particular.

So, one divided by three, if we think about that in the BigDecimal world, well, I mean we could, we had to specify how this thing is cut off or provide some kind of, I don’t know, some kind of parameter or ambient default then, the worry there, one divided by three doesn’t have a fixed meaning, but depends on some parameter being set in the background. By contrast, with decimal 128 there is always a maximum number of significant digits So all computations are back stopped. There is a maximum amount of significant digits that get generated regardless how complex the arithmetic gets. So one divided by three, for instance, just always works. That is a value. It has, it’s 0.333 and so on, 34 times. So in the worst-case we know that our competitions are backed up. There’s no ambient parameter there. It is in the data model.

JMN: So, the proposal then is to have some kind of new library object with a constructor. Here are just a couple of examples of this. The idea is that we will accept exact inputs. So for instance, the first one is a simple decimal string. We can permit some kind of exponential notation if you want. We’re even allowing some JS numbers to be given. If they’re exact. BigInts are also continue to, because they are exact. But in the last example, give me `42.3`, this throws because the argument is just not exact. It is not an integer.

So the idea is: You can enter the decimal world from exact inputs. We have a big skinny, lean API for arithmetic. We just have addition, subtraction, multiplication, division, reminder, and absolute value. There is some discussion about what else we could add there. That’s fine. I’ll leave that for some discussion. But that’s what we’re currently looking at. We don’t want to go much beyond this.

JMN: So some of the math didn’t make the cut. If we look at the IEEE754 spec. We can see there is really quite a lot of mathematical operations that are specified there. If you look at the math objects, you can see those things there, too. But we found that basic arithmetic is sufficient for most use cases. There are some cases which are a bit of a gray area for us. For instance, square root. It’s not currently in the present version of this spec. But in earlier versions of this in my own thinking and discussion with the champions, there was a time when we were thinking about adding it, but then we ended up cutting it. I don’t really have a good knockdown argument for including it. So – you know, maybe that could be included. But it is just not there. Things that are a bit more clear cut are sin, cos, tan, the other trigonometric functions: we found low usage of these in the wild. There are some use cases out there, but just not that much. We also did some survey I found that developers often didn’t really mention the needs for these things. Likewise, things like the logarithm function and exponentiation didn’t make the cut. The argument here is that it’s – unclear if there would be some added value given that they’re already available in Math, and a Decimal128 variant would be just as inexact as the one available in math, but possibly with just more significant digits. Another thing that could be added and very simple to implement would be negation. Just change the sign of the argument. Could be done. It’s currently not there.

JMN: Rounding is also one of the things that we need to support. We are following the IEEE754 spec. And saying that the half even rounding mode is going to be the default. Open for discussion there. We follow this in the math object and it’s in the spec. It seems like it is a reasonable choice. Other – we’re open to arguments for something else. That’s fine.

Rounding by the way is something that can be specified in all of the arithmetic operations. So if you start pushing the limits with your significant digits, then you might need to add some kind of rounding parameter. And all of those operations that you saw earlier also accepted a rounding parameter. I just omitted it from the examples just to keep them simple.

JMN: We do support NaN and Infinity here. Again, these are also in the spec. Of course, if you like JS Number, then you also see NaN and infinity there. There’s a bit of discussion happens in the last couple of days about these things, actually in my some slides later you will see I have kind of qualified some of the statements I’m making here, like A equals B. These kind of things. But the main point is that NaN and infinity do exist in the proposal. So, for instance here, you can see that we’re exposing some properties here, like whether decimal is a NaN or is finite. Here we are taking NaN minus infinity and some kind of finite, but extremely precise number. You can see that these are representatives is fine.

JMN: We’re also thinking that the `valueOf` is going to throw. And the intention here is to avoid any kind of intermingling of decimal values with any other arithmetic or JS. Thanks, by to way, to JWK if you are on the call, he made the suggestion to me back in Japan, I really appreciate this, this is very nice insight.

JMN: And we propose also no operator overloading, but not cutting it off from adding it later if that ever reappears. There is really quite a lot of implementation complexities there. And also something going on in that realm, is that the proposal to do operator overloading was withdrawn recently. We’re not trying to propose any literal syntax, that makes it perhaps misleading suggestion to a developer. They might be expecting operator overloading to exist if there are literals, but if doesn’t that is going to be very confusing. And there is no new primitive type. Nonetheless, I think we are not cutting ourselves off, because we could add it later. It would just be that Decimal128 objects would be wrappers for the new primitive if we were to do that.

JMN: There’s one little technical point that I want to talk about. Very important one. There’s an issue that came up many types in plenary about normalization. Think about the main task here is to find some kind of a simpler form of a number. Or the simplest form of a number. So the main point is that in Decimal128, the official one, all digits are preserved, including trailing zeros. How should these be presented and available to a JS programmer? There were a couple of approaches that we’ve considered here. One way is the "always normalize" approach. Where decimal 128 values are always normalized when they are created, compared, serialized, and the mental model here is actually quite nice. We are thinking of the decimal values as mathematical values. So for instance, if I’m given 1.20 as an input, that is just 1.2, so the final zero is just removed and can’t be recovered. Another approach, quite valid, is to keep all input data. So in particular, that input imply that we would not delete the trailing zeros. By the way, I just want to note that this normalization issue also applies to other parts of the number too. So, we had some discussion about the number 300, for instance that can be represented in a couple of different ways. Normalization applies to that as well. But this is the main issue.

JMN: These are two entirely valid approaches to how to deal with the normalization issue. And what do we do? I think I have a solution here. And the proposal is to always… so look at these three decimals here. `1`, `0.3`, and `0.7`. Well, these could be false, perhaps, if you take a very strict view of what equals means, but then – true is numbers. And surely, this is just the tip of the iceberg, there are probably all sorts of ones if we don’t normalize.

The other proposal of never normalizing, unless necessary or at least unless explicitly asked for, would log things like this, so coming from the `Intl` side of things. Think about this, we take, let’s say we want to work in the German language, and our input is a decimal of -42.00. Currently what we do, we would say if we format that thing, we get `-42`, but actually it should be `-42.00`. So information is getting lost and can’t be recovered at least in any direct sense. So the thinking here is that trailing zeros should be part of the number. They belong to the data model.

JMN: The solution that where would like to propose to these two apparently irreconcilable approaches, is to what I call "normalize by default". So when constructing a Decimal128 value, all digits would be preserved. Arithmetic operations respect all digits of all arguments, but normalization does happen in two ways. If you try to serialize a decimal you get a string out of it. That will strip the trailing zeros by default, but they can be preserved if you know what you’re doing and use the right argument. Less than and equals are going to compare decimals by mathematical value. So even if the trailing zeros had been implicitly removed. But optionally, they can be taken into account. So the idea, let me just rephrase that, is that decimals for JS programmers can be like mathematical values out of the box. But if you know what you’re doing, you can get the digit strings. So what would that look like? If we were to take say `0.8` and `0.2` and add them up, say give me the `toString`, well that’s `"1"``1`. Good, that’s right. It is one as a mathematical value. But here if I want to turn off normalization, I can recover that extra piece of information and get `1.0`.

There are a couple more examples here. So for instance, equals and less than should also compare by mathematical value. By the way, there’s some last-minute changes that are being highlighted here in blue. That reflect some discussions happening on GitHub about this issue, but the point is that – even if the underlying data has trailing zeros in it or maybe zeros on the other side of the number, like in the 3E two example, then normalization is just going to apply. We always compare by mathematical value.

This is just an example of say computing a bill. Starting to run a little bit short on time. I would prefer to get to the discussion. So I leave it to you to take a look at this one. This is a very common example.

JMN: Let me just sum up here. The semantic asks the API we’re going to propose working with IEEE-754 Decimal128. There will be a constructor that takes strings and BigInts and integer numbers. There is no syntax, just basic arithmetic. Two string is going to have an option to omit a decimal string or some kind of exponential notation. Object will through, there is integration with number format. And we’re going to normalize by default. That’s the proposal here. That’s the diff from the previous presentation toand this presentation really.

JMN: So the conclusion is that we have a spec text that’s available, number format integration is being worked out, not quite done. There are some other parts that might be touched like plural rules. There’s an NPM library out there for you to take a look at. Test262 tests are missing, but that’s something that we envision doing. It should be fairly straightforward to take the current tests in the NPM library and convert it to the test262 format. Great, that’s all I have and I’m happy to take a look at the queue. I’m not looking at the queue, so I can’t manage anything.

WH: Okay, I have a clarifying question about DingTalk. What number operations on decimals does DingTalk support?

LIU: I’m going on to answer these questions. DingTalk pause basic mathematical operations such asked addition, subtraction, multiplication and division, as well as arbitrary calculations and predefined functions.

WH: Can you round, and do exponentiation?

LIU: Exponentiation? Yes.

WH: Okay, next I have a walk-through of the current state of Decimal. I’ve been doing a lot of work on this and finding lots of issues and having extensive chats about this. And I’d just like to quickly go through the items.

WH: The presentation implied that calculations using Numbers were wrong. In fact, that’s not necessarily the case. Some of the ones that I could see in the presentation were intentionally using Numbers because Decimal did not provide the right features, and had those calculations been done using Decimal, they would have been equally wrong.

WH: There are a few slightly different versions of the IEEE 754 Decimal standard, and the one I have seems to be different from the one that the champions have.

JMN: I was just looking at the 2019 version.

WH: So I’ve been doing extensive reviews on this. The proposal submitted to this meeting differs quite a bit from what was in the presentation. Let’s go through some of these. The proposal does not include any conversions to and from Numbers. There is a conversion to BigInts, but not from BigInts. It’s unspecified what it actually does, and, depending on how it is specified, it may be very hard to use correctly.

WH: The proposal refers to the IEEE spec for a lot of the operations. The problem is that the IEEE spec does not actually specify what those operations do. As a result, nothing defines what common operations like converting to and from strings are doing. I would much prefer the operations to be specified the way that we do in the rest of the spec, such as for Numbers on which we actually provide algorithms for addition, multiplication and such, done on real numbers and then rounded. In fact, the algorithms here would be identical to what we do for Numbers other than the rounding at the last step, which would round to decimals instead of rounding to binary floating-point numbers.

WH: There’s a number of issues with improper operations and mathematical values in the spec where it tries to create indeterminate forms such as subtracting mathematical +∞ from mathematical +∞, which doesn’t work.

WH: There are bugs in NaN handling.

WH: The spec does not include negation of a Decimal number. I hope we include negation because most people will get it wrong. It’s not well-known that, if you don’t have negation, the correct way to negate an IEEE Decimal number is to multiply it by -1. If you instead subtract it from zero, you’ll get the wrong answer and you’ll also mess up your precision.

WH: The remainder operation in the spec uses IEEE 754 remainder semantics, which is not what anybody other than really advanced numeric experts would expect. If you compute the IEEE 754 remainder of 42 divided by 10, you’ll get the expected remainder of 2. However, if you compute the IEEE 754 remainder of 46 divided by 10, you’ll get a very surprising remainder of -4. I doubt most of our users would expect that. We should define remainder the way everybody else does — same as what we do for Number `%` using the same algorithm as for Numbers.

WH: The spec relies on words which are not actually defined in the IEEE 754 such as “exponent” and “significand”, which makes it impossible to understand much of the spec. IEEE 754 has no unique definition of an “exponent” or “significand” of a given IEEE 754 number. You can get the exact same bit pattern and, depending on where in the IEEE spec you look, its “exponent” can mean this or that and its significand can be an integer or a fraction. To avoid confusion we should define those mathematically and not refer to the IEEE spec.

WH: There’s no square root and no exponential, both of which will cause problems. To get those, users will try to convert Decimals to and from Numbers, but we provide no way to do that. There are no conversions in this spec to and from Numbers.

WH: Other things that we’ve discussed on GitHub are that equality and relational comparisons shouldn’t take a rounding mode parameter because it makes no sense for a comparison to round. IEEE 754 comparisons never round.

WH: There is confusion regarding the totalOrder IEEE operation, which is so obscure that we don’t provide it for Numbers, and I don’t know if anybody ever noticed. It’s a very obscure operation which is very difficult to use correctly unless you’re a numeric expert. I think we should cut it from the initial version of the spec.

WH: I also think that we might want to cut operations such as exponent and significand if they’re read-only, so you can get the significand of a Decimal value, but you cannot construct a Decimal value with a given significand.

WH: Okay, so I’ve been helping with a lot of these things. I think all of these things are resolvable, but they will take a lot of extra thought and discussion, and we should have those discussions. I would like to invite anybody interested to participate in those discussions on GitHub.

CDA: Great. We are -- thank you, WH. We are less than 10 minutes left of time. Considerable number of items on the queue. I was on the queue just about the three different versions of IEE754 you were referring to, and we can take that offline and coalesce around what versions we are looking at.

NRO: (from queue) I clearly agree we should define all operations and toString behavior given the requirement for Stage 2 is to have a draft spec, this probably doesn’t need to be a blocker

SYG: I’m not sure if WH already covered this, I’m not sure, but please correct me if I’m wrong, there was a thing in the slides about checking for exactitude into the decimal constructor. How do you implement that?

WH: I’ve looked at the spec, and the current answer you can’t convert Numbers to Decimals. It only allows strings.

SYG: I see, but the slides show something different.

WH: The slides — yeah, the slides don’t match what the spec is doing.

SYG: Okay, if the intention is to allow numeric -- like to allow numbers, the only way I know to implement an exactness double check is tract the literal, track its span in the source text so you reparse the string when you need to check if the double representation is exact. That is a no-go for an implementation technique, so at least narrowly, that particular feature needs to be rethought.

WH: I agree.

DE: No one is positing the complicated thing that SYG mentioned. We’re not going to make numbers represent other things. A basic option is only safe integers.

JMN: Just to confirm, that’s the intention of that.

DMM: I was just curious, we seem to be building a difference in the usefulness of round in decimal, which when accept rounding modes compared to things like to precision, which are -- a number which do not accept a rounding mode, and that is part of the reason you get the problems of doing to precision and getting the wrong answer, because you rounded the wrong way or you can’t specify the way you’re rounding those numbers. I was wondering, clearly it doesn’t belong as part of this proposal, but are we going to try and enhance things like `toPrecision` to have equivalent capabilities?

JMN: Do you mean despite being able to specify the number of fractional digits or being able to specify, say --

DMM: Being able to specify the rounding mode used and that sort of thing. At the moment, I think `toPrecision` doesn’t allow you to say half even or ceiling or floor or any of the options that you might want.

JMN: Yeah, I think that’s correct. But as far as I know, there’s no intention to add that here. I think they’re just using the half even rounding mode by default, if I understand correctly.

DMM: On round, I think that’s not explicitly said. On the decimal side, I’m not sure if -- I can’t remember if `toPrecision` explicitly says what rounding mode it says. I think it’s effectively there in the algorithm it specify.

DE: I don’t think it would be a good idea to add those because numbers just cannot express the result. That’s, like, why we’re introducing decimal. So the answer to developers will be just never use `toFixed` or `toPrecision` or anything.

DMM: Okay. The other queue item I had was a question on do we think that unnormalized numbers are enough to deal with getting the right number of decimal places? It clearly works as long as you have enough precision to have that number of decimal places after the point, but if you deal with large enough numbers, you will hit cases where you cannot denormalize the number -- you cannot get the number into the right state to have the toString do the thing you want. Do we think the number format is enough to handle that in some way, or are we -- is there a plan to enhance it to allow specification of the required number of decimal places or things like that?

JMN: Yeah, can you -- I guess maybe we could take this offline, but I’m curious to hear about the values you have in mind that can’t be represented or where one somehow gets into trouble.

DMM: Obviously you have to get quite large. I’ve dealt with bug reports before on the Ruby side and things like that and also on the Java side when specifying number formats, but what should happen if the amount of precision specified in the number format, for example, is more than the number of significant digits in your number. And this is often that people want to format a number, even a really large one, as an integer plus two digits after the decimal point. But obviously if you get a large enough number or a large enough number of digits before the -- the significant digits before the decimal point, you cannot convert that number into any form that unnormalized has those digits after the decimal point. So it’s edge cases, but it’s one that people do eventually complain about.

JMN: Do you imagine a kind of unsatisfiable constraint problem where I say give me, I don’t know, 10 fractional digits, but then the integer is so huge.

DMM: Exactly. If I’ve got 25 digits before the decimal point, then I can never satisfy that because I haven’t got enough significant digits in my number format.

JMN: I see. I think I’m not sure I have a clever response to this at the moment, but this is well noted. Great issue. Let’s continue with the queue.

EAO: I’m a bit worried how little of the integration with Intl.NumberFormat and Intl.PluralRules seems to be defined so far. And in the presentation in particular, I was left uncertain about what happens when formatting the -42.00 example. Is that going to format as `-42` or `-42,00`?

JMN: Well, the goal is to get the `"-42.00"` of course, but I mean, it sounds like you are unconvinced that the current spec text would do that. Is that right?

EAO: There’s a PR I’ve not really looked thoroughly at, but the current spec text doesn’t seem to very clearly say how to achieve that. We would presumably need to modify how the minimumFractionDigits option works, and so on. And it seems like leaving out the syntax, the integration point of Decimal with the existing JavaScript spec is mostly through what is happening in Intl.NumberFormat. So I would hope that this is well specified, and I’m a bit worried that it isn’t.

CDA: Okay. I see some other items on the queue. Some have disappeared. But we are at time, and we are -- we have quite an overflow for this -- the rest of the day. So if folks could please follow up on whatever you’re interested in, either in Matrix or in GitHub, and continue working that out. And, yes, so, yes, we are past time. Jesse, would you like to ask for Stage 2.

JMN: I would like to ask if there would be consensus for Stage 2. I understand that there are a number of issues here with the spec text, and I really appreciate all of those who have contributed to these discussions on GitHub. In my view, a lot of these things are not fundamental blockers. These represent cases that, I think, could very well be worked out. But I’m happy to hear any counterarguments.

JHD: Just to avoid speaking at length, I’d love to talk more about my topic (primitives), but I do not think that it’s ready for Stage 2.

MM: Given limited time, I think I’ll just let stand that I’m not willing to advance to Stage 2.

DE: When blocking, usually there’s a reason accompanied with it. Can you explain a reason.

MM: Yes. I think that there’s too many open questions and all together, I understand that many of these questions can be resolved during Stage 2, but it should advance to Stage 2 only if -- only if I believe that we should -- that it’s -- that when more likely than not, let’s say, I’m putting my own words on this, to -- that these issues can be worked out to the point where it’s worth advancing, and at this point, I don’t see the advantage of putting it into spec versus leaving it as libraries, and I see a lot of advantage to leaving it as libraries.

DE: Okay, maybe you could elaborate on that advantage offline.

MM: Sure.

CDA: Okay, we are well past time. But WH, did you want to be brief.

WH: The current proposal has not met the criteria for Stage 2, regardless of what we think about its merits: the semantics of the core features do not exist yet.

CDA: Okay. Thank you, JMN

### Speaker's Summary of Key Points

- Decimal’s motivation and concrete API were presented in detail. The current version of decimal is based on objects with methods, rather than primitives and literals, and uses the IEEE 754 decimal128 data model.
- WH raised number of technical concerns about the data model and the quality of the specification, while agreeing with the fundamental approach.

### Conclusion

- Decimal stays at stage 1
- WH will work with proposal champions offline to address concerns.

## Shared Structs Discussion

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-structs)
- [slides](https://docs.google.com/presentation/d/1a53adMbL_Uqb1KxnY-r6Ie6n1PQXvNw3JgUOvRYFido/)

SYG: Great. So this is not asking for stage advancement, this a prelude to asking for stage advancement, where I’d lay out the feature set that we are -- we want to ask for stage advancement for this year’s structs and the un-shared structs proposal. It has been paired down little bit from some previous presentations. So start with -- I’m going to start with the unshared struck. These are just single threaded normal instructs. There was a bit of an open question for a period where we were considering is it useful to include unshared structs as part of the proposal. The current thinking is that it is because it -- the kind of -- the restriction the instructions that come with structs we believe are independently useful for expressing certain programs, and you can get some performance benefits and some layout memory benefits out of them. So unshared structs are objects that are declared to have fixed layout. So they have -- they are closed objects instead of open. You can’t add properties on to them outside of what the -- outside of the properties that are declared. They cannot have own properties. They are basically sealed after construction. They have a transitively immutable prototype slot, so the prototype itself is considered part of the layout, basically, and the -- in prototype chain is immutable and fixed as well. That’s not to say that the prototype object itself is deeply immutable. The prototype object itself need not be immutable. It’s just what the prototype object in that slot is immutable, because that’s considered part of the layout. These thing have one shot initialization, which means that unlike, say, class where if during the initialization of an owned property, the right-hand side, the initializer for that property throws, you can get a half initialized object. These structs are one shot initialized in the beginning, which means that all the declared properties are initialized to undefined before user code even gets access to the receiver. So after all the properties are added, then the instance is sealed. And this restriction basically means that super class must also be structs. If your super classes can break this invariant, then we don’t have this invariant. And because of that, there’s really no construction per se, but really it’s post-construction initialization. So because you get these sealed instances, the constructor call, which we might want to rename something else, but for the sake of being concrete here, the constructor only does post-construction initialization of the fields. One good consequence of that, in my opinion, is that there is no return override trick. You’re not constructing the thing. You’re just given an already initialized instance. If the initializer returns something else, well, that’s just ignored. It’s not a constructor, so you can’t do return override. One new thing that is -- that I’m presenting here that has not been discussed in previous presentations is I’m -- we’re also proposing that struct methods be not generic on the receiver. This is basically you can think of it as an extension of the, in my opinion, correct design chose we made on `Set` methods where the built-in `Set` methods are non-generic on the receiver, but are -- but can take set likes in arguments, so struct methods, if they have methods, those methods would throw on incompatible receivers. You can imagine that they have some check in the beginning that says they’re this value is not actually one of my instances, if it’s a generic object, that would just throw. This has nice benefits downstream in code-gen in that you can assume everywhere in the code that the receiver is always up an expected layout and it omits a lot of checks, basically. So that’s the feature set for unshared structs, which we think is useful in itself. Even without any kind of shared memory sharing

SYG: So as a quick example, you can have this `struct Box {...}`, maybe you should be named in it, but for the sake of the example, I just left it as constructor. You can do things in the constructor on fields that are already defined. So it can do the stat X equals X. Say there’s a method. Oh, sorry, keeping with the -- with the example, you can make a new box, you can assign X to it. It’s declared. You can’t assign a thing that’s not declared. That would throw, because it’s sealed. You can’t change the `__proto__`, because that’s sealed, and if you want to call this ris method on a generic object literal, that is not a rizler, it will not work. It will throw. So that’s shared struct -- sorry, that’s unshared struct.

SYG: Moving on to shared structs, these have the same instructions as unshared structs, plus they can be shared across agents. The data fields are shared. And there’s a pretty deep restriction that shared things could only reference primitives or other shared things. So shared structs cannot point to unshared objects. They can only point to primitive strings, numbers, or other shared objects. This is so that basically the one for implementation ease and also one -- and also, two, for kind of segregating the heap in the program from -- into a shared part and an unshared part. Because everything on the web and on JS today is unshared, there is -- it is not possible to retrofit them to be shared and is also a bad idea to retrofit them to be shared. So anything that is shared has to be opt-in. So this is opt-in at a pretty deep level. You can’t have arbitrary shared to unshared edges in your object graph. That will open all world of hurt. We have to figure out what it means for shared things to point to unshared things and stuff. It’s not a thing that is generally possible or easy do. So the restriction here is that shared things can only point to other shared things. They can either have a null prototype, so they don’t have a prototype at all, or a realm local prototype. I will go into the details of what the realm local here means. This was presented before, so it will be a recap for folks which were here. If there’s an no prototype, obviously there’s no place to put the constructor property, and they don’t have one. And because functions are not shared things, JS functions are deeply unshared things, you can only have function class elements or struct elements like getter setters and methods if you have a realm local prototype. Because in the case of a realm local prototype, the prototype is a realm local object, which is itself an unshared object. So what are realm local prototypes? So the point here is that we want to enable attaching behavior to -- oh, this a typo. This actually means realm local instead of thread local. It was an open question for a while whether we should go with thread local, meaning agent local, or should we go with realm-local. I’ve decided on realm local because that’s the much more natural thing in JavaScript.

The motivation here remains the same, which is that because we can’t share functions, we can’t just put JS functions into shared struct. But that proves to be -- that proved to be a big DX hurdle in early prototyping, the partner feedback has been if I can’t attach functions, that means we have to manipulate these objects with free functions, which really harm the adoption, especially the incremental way. If you reason have an existing code base where you have a corner you think can benefit from multithreading. But if converting that corner to use shared structs means that all sources of one or two classes that you want to convert if all users have to change the use sites to be free functions instead of methods, that is just, like this giant refactoring thing that is pretty difficult to accomplish.

SYG: So how do we enable attaching behaviors that can be called like methods on shared structs. The proposal puts forth realm local prototypes, which is basically what it sounds like, the prototype object is a realm local thing. So I think the easiest way to think about how this works is basically if you squint, this is how primitive prototypes already work, so we have a number, if have a number primitive, that’s not an object, yet has methods on it you can call. How does that work? Every time you treat it like an object and you want to call a method on it, you magically get this realm local prototype. You get the number prototype from the current executing realm. Analogously for shared structs, if you want to call a method, it looks up the prototype for that shared struct definition inside the current realm. You have a per realm copy of these prototypes. But because these are realm local and unshared, they don’t have the restriction of the shared stuff where they cannot point to unshared things. You can put arbitrary objects and arbitrary functions into them.

SYG: So it is still an open question for how do we signal that a shared struct ought to have a realm-local prototype. The choices here are either by default or some kind of hand wavy opt-in syntax to avoid any distractions, this example just leaves it as some hand wavy hand in. There is no concrete syntax proposed. But the choices are either by default, if they think that is the behavior you always want or you have some opt in. And the idea here is that if you have a realm local prototype, you can make this shared struct, you assign stuff into the fields, and you can get the prototype then and you can just add stuff to it. I realize this goes -- this contradicts what I said about earlier, on what I said about the transitive immutability of the prototype chain, that the super classes must all be structs. If we have a hand wavy -- if we have a realm local opt-in mechanism, this may need to be further worked out on does the realm local prototype must have a fixed lay stout and how that is provided. That could be straightforwardly provide by an extends clause here, for example, so you know that right-hand side of the super class is itself a struct that has a fixed layout and memory local and has a fixed playout. Leaving that contradiction aside, apologies, these slides were taken from an earlier presentation. What slide 6 is designed to illustrate is just the realm localness, is that this object prototype of P here does not get a shared object, but gets an unshared object that you can then put functions onto

SYG: This is in the main thread. If I communicate that thing to another thread, another worker in this case, when it’s communicated to the other worker, which has its own realm, the programmer has not yet set up the per realm prototype for this struct, this shared struct -- sorry, this shared point struct definition. So initially, this function doesn’t exist in this other realm. So you have to set it up yourself, after which you call it, you get your own function. That is the per realm prototype mechanism that we intend to use to solve the how to attach behavior issue.

SYG: That points to a second problem, which is also for DX reasons. Of what we’re calling "the correlation problem". So if you look at this example, what this example shows is that you have to have some code in there where you have to set up the functions that -- the methods that you want to have available on the prototype per realm. You set it up here once in the main thread and you set it up again in the worker. Most of the time, it’s -- if not if not basically all the time, you want these methods to be the same across all your threads. If you are programming multithreaded stuff natively, you’re not setting up, like, per thread or per realm specific implementations of your types. You have one implementation that works across all threads. The reason why we’re doing per realm is because functions are deeply unshareable. They close over the global object in which they were created, they have the local function prototype, there’s a lot of just -- a lot of language reasons that they are deeply unshareable. So if we believe the use case almost all the time is that you want to have the exact same methods on all of the prototypes, how do we facilitate that to a make it a little bit easier to work with? The mechanism that we’re proposing here is something we’re causing, like, auto-correlation, and we’ve called this the registry in the past, but that word is kind of overloaded and has some implied meanings. So to work an example, say we have this shared point shared struct declaration. There’s some hand wavy prototype mechanism. And there’s a single -- there is a module that has a single, you know, instance of this, instance is not the right word. There’s a single occurrence of the shared point, shared struct declaration. I import this in worker A, and I import the same thing from worker B. The problem is that because this was declared to have a realm local prototype, it has two different prototypes. And they don’t necessarily play nice in that you have to reset up the prototype in each worker. So, wait, why did I include this next slide? Ignore that slide.

SYG: So the correlation problem is that we want to correlate the multiple imports from the same textual occurrence of the shared struct declaration somehow. Want to correlate them such that we can use the same TLS key for the realm local prototype, the VM can deduplicate shapes, but this is really a transparent optimization. And that we match the intuitive mental model that developers are already have of that types kind of work everywhere the same everywhere across their threads. The design constraints that ideally there’s no new global communication channel. If you want to correlate something across workers, that sound like you need to do some communicating across threads, and there’s been concerns from folks like MM and MAH that this is a global communication channel. I would like to discuss that in this item today. I’m trying to understand is this really a global communication channel.

And hopefully it has better developer experience than manual correlation. Manual correlation meaning that the programmer has to copy/paste some initialization code in each worker that sets up the realm local prototypes for all their shared structs.

SYG: And the performance thing, like I said, is a transparent optimization. It’s a nice to have, but not the thing that we’re solving for here. So the proposal if we have also a not -- if we also have a hand wavy correlation mechanism that says I want this shared struct declaration to be auto correlated across all evaluations of this textual occurrence, meaning that there is some map under the hood that is keyed by the text location of, like, inside struct.JS, of the script location of this piece of syntax, then the idea is that you can have this one file that declares your type, that sets up your realm local prototype. When you import it from -- in one worker, because it’s autocorrelated and the same TLS key is used for the per realm prototype, it sets up the prototype in worker A and then when you import it in worker B, it sets up the prototype in worker B, and then things just kind of work as you expect. Worker B’s foo is still going to be work different worker A’s Foo because it’s two different evaluations, but their shared point declaration are going to evaluate to two different function objects that point to some same thing under the hood. So, again, ignore this next slide

SYG: So the semantics of this autocorrelation mechanism is there needs to be some agent cluster wide registry that does this deduplication. What is the key of this registry, this map? The current proposal is that it’s keyed off of source location and on a registry miss, either first evaluation of a registry shared struct, this is inserted into the registry. On a registry hit, ie subsequent evaluations in different works or of the same source location, shared struct declaration, it checks if the shape matches exactly, and it deduplicates it if it matches, and otherwise, it does something else, whether it silently does nothing, maybe the console can issue a warning or it throws. And the thing I want to understand from the folks who care a lot about communication channels here is this an implicit global communication channel. My inclination is no for these reasons, but I would love to hear from the folks on the other side of this. My inclination is 'no' because the key, which is a source location, is not a forgeable thing. If the registry hits do nothing on layout mismatch instead of throwing, then it is unobservable. If the registry hits throw on a layout mismatch, I suppose you could then use this to leak information across realms and threads, but to exploit it to leak information, it requires modifying and triggering re-evaluations of modules or scripts, because the key is the source location. And where my thinking leads me is if you can trigger re-evaluation, you can also directly observe other things, so widely commits via this mechanism. So that’s where I am with -- my inclination is in is not actually a communication channel, but I might be missing something. It’s worth calling out here that this mechanism requires some bundler opt-in as well, because you can -- because of the key is the source location, this basically means that if you want to use this correlation mechanism, the bundlers cannot copy/paste this shared struct textual occurrence of this shared struct declaration, they cannot duplicate it, because that means they will have different keys and it will be an observation -- it will be an observably -- it will not be an observably equivalent to change to copy/paste the textural declaration. Because of this, the bundler guidance if there are shared structs declarations that use the auto correlation mechanism, they cannot be duplicated. They have to be aware that these things have to remain a single instance of a textually. In my instance, this is not a deal breaker, with you the bundlers have to be aware of this.

SYG: That’s a deep dive into two aspects of the shared structs of the semantics of the shared structs. Outside of shared struct and unshared structings, we are bro proposal shared fixed arace. These are exactly what the sound like. These are arrays that can be shared, but they are fixed lengths, unlike normal arrays, which can grow and shrink as needed. And like shared structs, the elements can only be primitives or other shared objects. They can have a realm local prototype, some other small details there on this slide. We’re not proposing an unshared fixed length array because there doesn’t seem to be any reason to ever use that. It’s just getting more restrictions for no real gain. So quick example, in the interest of time, since it to get to discussion, folks can read it on their own time and I’ll skip going through the example.

SYG: We’re also proposing high level synchronization mechanisms. The argument here on why we’re doing this in the same proposal is that we recognize the difficulty that shared memory comes with to program correctly. And if we give people access to shared things, and we do not give people an easy to reach for way to synchronize those accesses and to have critical sections to provide mutual exclusion to those accesses, that is a big foot gun that is not a good idea. So it would be good to have these in the same proposal. It’s really a package deal. And the Mutex is a Mutex. It’s a pretty simple, non-recursive single user mutual exclusion mechanism. There would be would have a lock, try-lock and unlock methods. Previous iterations of the proposal had a callback taking lock method that calls the callback under lock. But now with the explicit resource management, this was changed to more, I guess, traditional, let’s say, lock and unlock methods so that they can be used as part of using.

SYG: There’s a condition variable that is basically the condition variable that you expect. I don’t think there’s any surprises here. Like atomic stop wait, this condition variable also cannot be used on the main thread. Oh, sorry, this also cannot be used on the main thread. You cannot block the main thread. You can try lock on the main thread, but you cannot lock on the main thread. And you cannot wait and block the main thread with a condition variable either. Async version may be added late, but that is clearly out of scope for this proposal, which is already quite large.

SYG: The memory model here is the default access to shared things are unordered. Atomic -- the atom -- sorry, the atomics methods on the atomics name space object are extended to take these shared structs and shared fixed length arrays, in addition to TypedArrays to give sequential consistency support for folks writing lock free code that need sequential consistency. There a requirement that allocation is publication, meaning that once you allocate a shared struct or a shared -- any shared object, that is considered a publication for the purposes of other threads. While the access to the fields themselves are unordered, we can’t -- the minimum bar here is that the VM can never crash because of data races here. And to guarantee that VMs never crash, the one strategy JVM, for example, has used in the past is "allocation is publication". When you allocate a shared thing, that is considered also a publication with the -- from the perspective of other threads. Synchronization primitives are all sequentially consistent. So mutext condition, variation, they’re all sequentially consistent.

SYG: One thing that is new from last time is that after chatting with the -- with MM and folks, that this is a big power user feature that has a lot of consequences if you opt in. We don’t want you to opt-in accidentally. On the web, you cannot opt in accidentally because there’s this thing called cross origin isolation. This server must send special headers for shared memory to be available on your web page. This is already true today for SharedArrayBuffers. If you do not enable these right headers and have cross origin isolation enabled you can not communicate SharedArrayBuffers or anything else that has shared memory across thread boundaries. So there’s already this, like giant opt-in gate on the web, but that is on the host, and that is not on the JS side. And it may be worth adding some kind of opt-out thing or maybe opt-in, I’m not sure how that would work yet, but some kind of way to disable it or disable by default and enable in non-web contexts. It’s just something like a one-way disablements switch, so you can load some run first code that says, you know, I don’t want to use shared memory, and I don’t want any of my dependencies to accidentally use shared memory. You can do something like that. I think that is fine.

SYG: And this is kind of tied at hip to the WasmGC, the shared WasmGC proposal, which was the focus of my previous presentation at the last meeting. This cannot move any faster than the shared WasmGC proposal. The shared WasmGC level proposal was -- was lower and this will be aligned in semantics to the WasmGC proposal, and that is it for the feature set that we plan to ask for Stage 2 for at some point. Probably in June, but maybe one after. And with that, I will open to the queue.

JHD: Hi. So my queue topics has been discussed a little bit in Matrix and so I might be confused. I originally filed my queue topic on your realm local slide.

SYG: Which -- tell me which slide.

JHD: Keep going back. I think it -- it’s the one where you talk about the hand wavy stuff.

SYG: This one?

JHD: Yeah.

SYG: Okay.

JHD: So in order to have methods be the same across contexts, whatever that is, you need the re-evaluate the method definition code in each context, correct?

SYG: Uh-huh, yeah.

JHD: And you want to do that automatically, but the only way to do that is to have it syntactically associated with the struct, is that right?

SYG: Not necessarily. Okay, syntactically associated with the struct, meaning inside the braces here?

JHD: I mean, there’s other weird things I could come up with off the top of my head where the doesn’t have to be inside the braces. But for the sake of discussion here sure, if you use class syntax method directly inside the brace, that would make sense to me in the way that it is canonically and syntactically associated with the struct, it would be re-evaluated in each context and I get it.

SYG: So the re-evaluation is nothing special. The special thing is where does the re-evaluated function get assigned to. That’s what the auto-correlation does. But the re-evaluation is just a plain re-evaluation. Like, this gets evaluated as a function in, you know, the executing realm, like every other function declaration or expression.

JHD: Right.

SYG: The point is, like, where does it go? Now you have there thing that is not shared, if you want put it on a shared prototype, how do you do that? So the proposal here is that, well, we say the prototype itself is actually not shared, and that’s how that happens.

JHD: Right. So you just make a new prototype object the hold all the methods in each context?

SYG: Yeah, exactly.

JHD: So that part makes sense to me. But I’m looking at this slide. Is this the proposal way you would define the where method?

SYG: No. This is -- I think this is my bad. I had copied these slides without looking -- without reviewing them in depth when I made this slide deck. And I had missed this. I think this is also the same question as Mathieu’s question, are prototypes less strict than shared structs prototypes and it’s not my -- that they’re less shared than unshared struct. Because I said this, that all struct have fixed lay substitute, including transitively mutable prototype slides, this code, this code should not work. So that --

JHD: Did I miss a slide where you showed the version of this code that should work.

SYG No, I didn’t have it. I don’t actually have the. Like, the way that this would work, where this can work is that if I extend some base class B and B, for example.

JHD: Is also –

SYG: Has where field defined, like, as long as you define the layout ahead of time, then this would work. As it is, you are adding a new undeclared property onto the prototype, which violates this invariant I said earlier that all structs must be fixed layout.

JHD: Okay, would it work to, after the why, let’s say, where the shared point is a base class, if you just do where parentheses and curly braces works, as if it were a class? Is there any reason that that wouldn’t work?

SYG: Yes, that should also work, if it’s run local, yeah, that would work.

RBN: That’s part of the proposal, correct.

JHD: Okay, so then the resolution of the hand waviness is that you’ll define methods in syntactic way, not necessarily, this but there would work, and the function themselves as well as the prototype object that houses them will be, you know, different in each context, which may be realm or however you want to describe it. Is that accurate?

SYG: Yeah, it’s realm. Yeah.

JHD: Okay, thank you.

MAH: Yeah, I had asked about the strictness, because some of the examples had dynamically modifying the prototypes, so that seems to be counter to what unshared structs were, but it looks like you want to make sure that isn’t the case, and find a way through that.

SYG: Yeah.

MAH: So moving on to my other question. Before I answer whether source location is -- or before we discuss whether source location is an appropriate this [..] communication channel, I want to understand what you mean by source location. In particular, one example is `eval`. If you eval some string that declares a shared struct, what is the source location for that? And is that somehow -- can it ever be made to match the -- the eval’d or non-eval’d location in another realm?

SYG: No, each invocation of eval would have a distinct location from any other implication of eval. Even if it’s on the same literal.

MAH: Okay. So it sounds like source location is strictly a -- strictly works when the module or script source has been directly loaded by the host somehow?

SYG: Right. Our -- the common use pattern we expect is something like this. You have your shared structs in a structs.js and then everyone imports from that.

MAH: So at first sight, it would seem that your source location is indeed an unforgeable key, and as such, is a valid way to key a global registry without providing a communication channel, ie, that is what I understand. I would double-check with Mark. Which I haven’t had a opportunity to do. However, maybe for future discussion, I am wondering if this source location, like -- I would like at some point the discuss, like, how it may be -- it’s weird departure where now you’re saying some features of a language are only available through source that was evaluated in the very specific way. And makes a difference whether the source was dynamically evaluated or was somehow virtualized. It seems to fully present to -- potentially fully prevent some type of virtualization of source coding.

SYG: That is the -- I think that is a good characterization, and if I understand correctly, the virtualization goal would be at tension with the communication channel goal, is that, like, this basically comes down to can the language not expose something programmatically so that it’s not a communication channel. But if it does not expose something programmatically, then you can’t virtualize it. Like, that seems to be in direct tension to me.

MAH: Yeah. And the thing is there are some intents to use virtualization-type mechanisms for bundlers, for -- for hosts or -- I mean, in general, virtualization as a host virtualizing another host, so that would mean all of a sudden that, for example, you might not be able to simulate a browser in a node environment anymore, if you did something like this.

SYG: But it’s different -- for node, it’s different, though, because they can do whatever they want at the C++ level. I mean, an engine can provide a more expressive API to its embedders that kind of pierced the language guarantees thing, so long as the net result is compliant. That’s a different -- this key could be exposed via C++, and we have to -- and we can say, you know, the node makes a promise that it doesn’t expose that to user code, but it can use it internally. That’s -- I think that’s a different concern than, like, can you ship a piece of JavaScript code that perfectly virtualizes a host.

MAH: Yeah. I mean, in effect you’re saying that you can only symptom late, virtualize another host if you have native hosts in your own engine?

SYG: Right. The complications arise when we expose -- when we make host hooks -- sorry, I don’t want to have too much of a tangent on the virtualization of host hooks, but basically, right, the security -- like, we treat host hooks specially, they’re distinguished things. If we expose them to yourself code, that’s like a whole different can of worms and we need to think through that very carefully.

MAH: Yeah., yeah, to recap, I think if you use source location, it seems for sources that aren’t elevated or resolved really by the host, it would seem to be -- it would seem to be an unforgeable key and thus, prevent a communication channel. However, that seems to be in conflict with JavaScript virtualization of host behavior regarding evaluation of source.

SYG: Yes. And I should -- I would like more collaboration here to resolve the tension, because I think you hold both goals, while I don’t really hold either goal.

MAH: Yes, I mean --

SYG: You as the folks who care about communication channels.

MAH: Yes, I cannot speak much, much more deeply toward virtualization goals. Thanks.

SYG: Cool.

KM: I guess I’m more fused with the virtualization goal. Maybe I’m missing something. Maybe there’s something I’m missing, but wouldn’t be the same problem apply with symbols, that, like, if you tried to execute the symbol in multiple contexts, you wouldn’t get the same symbol again? Or maybe I’m just misunderstanding something.

MAH: I think I do not understand the question. A symbol is the same as a -- is effectively the same as an opaque object that you just create. So it’s a unique identity that you create.

KM: Right. But, like, in this context, like, you eval a symbol in two different contexts, right, like, I guess what your point is that, like, if they weren’t eval -- like, each time you would evaluate this source text, you’re getting a different, like, source location, so, like --

MAH: Right. You’re getting a different –

KM: You’re evaluating the symbol twice. It’s not semantically the same to evaluate it twice?

MAH: There’s a difference teen the -- there’s a difference here that the result of the evaluation, which is creating effectively -- it’s creating a new instance. It’s creating a new type definition, and that’s fine, but if the only mechanism to attach behavior to an, air quote, known type is ours, a location, that means there is no eval or JavaScript controllable way of attaching -- of attaching behavior to a known type.

KM: But wouldn’t you just do something like, if when you’re trying to virtualize, before you execute their code, you, like, run it once in an eval, and then you forward that on to the, like, user, the virtualized code? Not saying it’s nice, I’m just saying it seems possible, right?

MAH: You can’t, because as SYG pointed out, the eval in two different realms are -- or workers would never yield, even if they’re done at the same lifetime of the program, they would never yield the same -- they would never yield the same source location.

KM: Right. This is a -- this is probably different from symbols, because symbols you can’t post message.

MAH: Even if you could post message them, it doesn’t -- I mean, it would depend on the semantics of post message you pose anyway.

SYG: In the interest of time, I would like to get to WH's question.

IID: Just quick clarification, like, if for some reason we do this eval thing and we don’ting in to correlate, are there any user visible distinctions, or is it purely a performance issue because the shapes don’t necessarily align and you get megamorphism and so on?

SYG: There is that, but there is also a user visible distinction in that you -- for -- that you will have two different keys for your -- if you have a realm local prototype, and you do the eval thing, you will have two different keys. You will need to manually set up those realms if you expect them to have the same methods on the prototype. You will have uncorrelated prototype objects.

IID: If you send it to another realm, then it won’t have any methods, okay, understood.

SYG: Yeah. WH?

WH: I’m curious what the consequences of unordered accesses of these fields are. When this arises in shared arrays, you might just get some bad bytes, but here we have typed values, which presumably can contain numbers, strings, and whatnot. You can get a bad string?

SYG: So the core -- the weakest guarantee is that there is no tearing. So that even if they’re unordered, you can get -- so these things are basically all pointers under the hood, modulo stuff that may be NaN boxed. So because the minimum requirement is no tearing, you can not get a bad string. You can get a point or a different string perhaps, due to race, but you will get some string if it was a string. You will get a pointer to some string. You’re not going to get a half written pointer, for instance, so you’re not going to get a thing that will crash on the reference. Basically, this requires the implementation to have all these field accesses be pointer aligned.

WH: Okay. Imagine an implementation which modifies strings in-place as an optimization. Could that implementation no longer do that optimization if anybody sticks strings into shared structs?

SYG: That is correct. This has been a very -- this was one of the most difficult things to prototype in V8, was the string subsystem. Because strings in every -- JS VM is extremely optimized and representationally optimized with things like in-place mutation, even though they are at the language level immutable, optimizations that do in-place mutation of strings are obviously not thread safe and we had to do different strategies to recover some of those optimizations in a thread safe environment. And we have done that but the naive thing where you overwrite the current string, that is not safe.

WH: Yeah. I’d be curious about hearing more about experiences with that at some point.

SYG: Sure.

USA: Before we move on with the queue, there’s three items in the queue and two minutes to -- in this item. But, yeah, moving on next, there is MM.

MM: The -- since time is limited, I’m going to focus on one issue, which is that there’s a -- an inconsistency between two goals here that I think can be resolved by throwing out prototype methods. You acknowledged that this whole thing is, you know, shared memory multithreading, personally cooperative shared memory multithreading where you depend on separate locking operation that may or may not be used correctly, this is all a huge foot gun, and the answer to the huge foot gun is that we’re trying to not provide it by default, but on the web have some kind of opt-in, outside the web, have either on opt-in or opt out. And I appreciate all of that. The -- because this thing is, if it were widely used, would be a disaster for the ecosystem, the -- the desire to keep it narrow in sort of an expert-only feature for the experts to use parallelism to provide thread safe extractions to others that are not subject to the dangers of parallelism, the usability goals that were stated for motivating the prototype methods just conflict with that. If anybody takes code that was written not for shared memory multithreading and thinks that they can correctly port it to shared memory multithreading by just changing a few things, they’re wrong and we should not encourage that illusion. And if we completely omit the whole notion of shared prototype methods, then this proposal really narrows down to essentially exposing just shared structs as structured heap allocated type data or, you know, eventually typed data that is the thing that’s motivated by what’s forcing our hand, which is WasmGC.

SYG: MM, I recognize where you’re coming from. I think this is a difference in line drawing on where we draw the line of how much are we encouraging. The ergonomic feedback that prompted us to add methods -- so the initial proposal did not include methods for these reasons. And because they were hard to do. But this was added after feedback from power users, mind you, right, from folks like Ron Buckton, who is a compiler author, he works on TypeScript compiler, these are power users that found it difficult to adopt otherwise i weigh that more given that if the power users say they can’t adopt this, then that is pretty strong feedback.

MM: I accept that that is feedback that needs to be engaged in. I would like to re-examine that and enter into those conversations, because I certainly have to opposite -- okay.

USA: Great. So there’s two more items in the queue, but we’re on time. SYG, what do you think we should do?

SYG: If folks don’t mind, because this was, like, 50 minutes instead of 60 minutes, if folks don’t mind a five-minute extension for the two items, I would appreciate that.

MM: I’m fine with that.

USA: Okay. All right, then. Let’s do a five-minute extension. Dan, you’re next.

DE: Yeah. I’m very happy with the state of this proposal. I remember arguing a few years ago with SYG about how we have to have methods and we should do it in some way that has to do with modules. My proposal was too complicated and hard to use, but I’m really happy with where this proposal is landing, both in terms of the ergonomics like this, as well as in maintaining correspondence with WasmGC and maintaining capabilities and make sure we have a common memory model. The -- one thing that we might consider is adding possibly in a follow-on proposal a concurrent map, RBN has been saying records and tuples should be changed to provide the basis for this, and I don’t know, I don’t actually understand how that could work, and maybe this will make more sense as a built-in construct. Yeah. Keep up the good work. Looking forward to Stage 2 in the near future.

SYG: Thanks. And concurrent collections is on my mind as future work for sure.

USA: Next up, there’s KM.

KM: All right. So is it -- I guess is it just ergonomics issue where you don’t want to do a handshake on the main thread, you initialize all these shared structs and post message, I don’t know, the constructor prototype or empty one to, like, all your workers and then, like, get the constructor and prototype on each of those workers and initialize it that way?

SYG: Exactly. That was the initial thing we led with, and tried, and then Ron actually has prototyping experience here, that that proved to be not just a giant ergonomic hazard. The thing that convinced me that this was worth it is it means if you don’t have this autocorrelation thing and you require a handshake, that you add another sterilization point on every thread spin up. So you have to do this handshake where you have to, like, basically barrier all the threads. You have all the times -- you receive -- in the beginning we called them exemplar constructors. You receive all your exemplars and set them up. After all their threads go into the bare yes, you’re like, okay, initialization phase done. Means you can’t just spin up threads as you want and have them to a more fine gained handshake, which is what the hand stakeshake does under the hood. It does this on spin up which could hurt loading performance, and that’s what convinced me in the end.

RBN: If I can also add to that, there’s also this issue when it comes to a handshake process of being able to tribute it across multiple threads that just makes it very -- much more complicated problem. It was a problem that we were considering, and it means there’s an opportunity for users or for poorly written code or code that isn’t -- that is intending to do something improper with the runtime try to get in and sneak in ahead of certain things depending on how careful a person has been about constructing their set-up for the -- for shared struct to do this type of handshake process, which means they could introduce a mapping which is not the one you would want, but potentially wreak havoc with the system. The approach we took was basically an evolution of, well, should we do this handshake process, how can we simplify the handshake process to make it more ergonomic and can we remove the process and. Takes away the complexities that someone could mistakenly do the wrong thing and makes it a built-in capability.

KM: Okay. Makes sense.

USA: That was the entire queue.

SYG: Great. Thank you very much. I think this was a helpful discussion. Yeah, thanks a lot.

USA: Yeah. Thank you, everyone. And thanks, SYG. Let’s see each other at the top of the hour. Have a great lunch.

### Speaker's Summary of Key Points

- This is the JS side of shared memory in WasmGC
- Mark Miller reluctantly recognizes that shared memory is coming to WasmGC; wants a opt-in/out mechanism
- Using source locations for shared struct auto-correlation mechanism isn't a communication channel but also hard to virtualize
- Owing to power user feedback, methods were deemed necessary for the adoption of the MVP

### Conclusion

- Champions will engage Mark Miller more to recap how they arrived at adding methods
- Feature set enumerated in the slides
- Stage 2 planned next meeting

## Strict Enforcement of 'using'

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-using-enforcement)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkqpmyWWWHf6TPYt2gg?e=fPIwaL&nav=eyJzSWQiOjI1NiwiY0lkIjoyMTg5ODA3Nzk5fQ)

RBN: Okay so in a previous planning session there was a suggestion about using declarations and there was not a strict enforcement of `using` in some cases where you might not have something that produces a disposable but you can’t guarantee that it’s being initialized to a `using` declaration or `DisposableStack` or `AsyncDisposableStack`. So I was asked to look into this a little bit more and I want to present some findings and the potential of where this should be a feature that we want – so, if this should be its own proposal.

RBN: So, just to, again, kind of stress the motivations here. Right now the `using` declarations do not enforce disposal– or are not enforced by disposals. There’s no way to say that the disposal that I returned from a resource is taken or reused. However any type of [ ] has the chance to drastically help with expansion, especially since there are APIs in Node.js or the web platform that can be potentially upgraded to support disposable or `Symbol.dispose()`, but do not need to necessarily have that level of complexity—or, to have that level of complexity, would require bifurcating those APIs into separate APIs that handle those cases. A Node.js promise handle would have to have another way of getting those file handles from `fs/promises` than what currently used to as a mechanism because you don’t want to break existing callers. So, one option to this is an opt-in mechanism strict at the API producer level to limit adoption blockers from existing APIs that would not be able to use that without bifurcation but also give resource users to the ability to require enforcement. So, the solution that we’re discussing is that an API could return an object instead of being the resource or having, an `Symbol.dispose` method instead as a `Symbol.enter` method that is invoked by – sorry, one moment. That is invoked by a `using` declaration and `await using` declaration, async disposable stack to unwrap and get the actual resource. The reason we consider to be this an optional type API is a nonstrict API to support this would have to add a `Symbol.enter` method to support this. We don’t believe this is a require. It that needs to be passed down to everyone so since that is what you do to not be strict so we’re posing this as an optional behavior that would implicitly do this, theport of using the disposable stack there for it’s not intended to be a separate mechanism to do initial acquisition it’s primarily designed to be an indicator that I want this used via `using` and we theoretically created the resource and the application will try to throw because they try to access a property or method on the result that is consistent with the expected API of a resource and instead has to go through an extra step to get to it, if they want – if they want to – need to explicitly access the APIs directly, building blocks for disposable resources. It’s not intended to delay resource acquisition, just resource enforcement.

RBN: “why opt-in?” - There’s numerous host APIs in the DOMs and other platforms that can be readily made into disposals. Node JS has dispose and they’ve already added this to `fs/promises` may have this to use with Babel or TypeScript. Just to have this type of enforcement, if this were a mandatory thing that was part of the actual disposable protocol, and that’d be problematic because it adds extra overhead, it adds complex additional documentation. And it doesn’t help existing callers that want to do upgrades because you can’t do a simple refactoring to change from a `try`/`finally` to a `using` declaration – you have to know with what is the correlated API that this has been changed to so it’s not helpful for adopters to start adopting because it’s slow to adoption. Some of the reason there’s been interest in having this strict mechanism is native resources that people can potentially drop on the ground instead of use `using` instead.

RBN: And they already use some type of GC finalizers on the API size to clean up native `fs/promise` file handles. If you drop it on the floor, it will be essentially cleaned up GC and the handle will be released. Most user-defined responsibilities will also be holding on to memory managed objects that are not going to require strict enforcement to deal with releasing native resources.

RBN: If we do decide to take this method, the actual spec text is fairly small. in addition to the `Symbol.enter` method, we would have this additional change to create disposable resource that says, get an `enter` method if it exists and it’s callable, then we will call it to get the actual resource and if that resource isn’t an object, we throw – again, just to verify the same check that we did on, step 1.b.1.

RBN: Now,I’m somewhat concerned about adding this proposal. I don’t necessarily think it’s a requirement or necessary, as there are potential work-arounds that can be used today and there are somewhat consistent with the other ways software handle this, and the other is to make `Symbol.dispose` into a getter. So, the final registrar case, you could have a final registration that sends a message to the Console if they dropped on the ground and didn’t use a disposable stack or using declaration by registering the finalization call for the resource when it’s allocated and unregistering it from the registry when it’s disposed and then you can be notified after the exact, but it’s something you would catch during testing or development. The other way that we could work around this and not have a `Symbol.enter` method is to make it a symbol get. Many resources will likely follow a pattern where accessing the resource when it’s disposed should throw an exception. You would normally through if the resource is disposed, so what we could do is we can track that, when the resource is produced, it’s in unregistered state because nobody’s tried to access the symbol dot method and accessing the symbol dot get, is an explicit action and you’re calling it yourself or passing it to a using declaration or disposing stack will get the disposed value, um, as soon as its received the resource and then have that fall back to your normal disposal behavior would be, and if you could throw if it’s never registered so you can catch those errors early. And again, one thing that we’re explicitly not proposing is context managers, they have a mechanism that is asynchronous that allows you to do additional work as you access the resource and we combined them, and the or think they have that is very complicated is their exit mechanism, which is similar to dispose, but it also allowed to use to things like intercept exceptions and swallow exceptions that from code that you might not expect. So it might be completely unrelated into the code that you’re using that using a resource with, and we find that to be a spooky action that we don’t think is a good thing to leverage. So we’re not really trying to propose that erroneous behavior to JavaScript we’re looking at `Symbol.enter` or whatever we decide to name it as purely a mechanism of enforcement.

RBN: And finally a, how this might affect the management proposal. I think this should be optional on behalf of the API producer and because this is opt-in and `Symbol.enter` is virtualized, if it doesn’t exist, we acts as if it did and we believe that it’s not necessary for it to be the key part of the initial roll-out for this feature. The path of least resistance is implement disposables to be able to migrate and using and get those semantics and we don’t necessarily believe that opt-in strict enforcement is a blocker for strict – explicit resource management to eventually reach stage 4. I would prefer to pursue this as a add on proposal if we decide to go forward with it.

RBN: I still don’t believe it’s extremely necessary because we have work-arounds to catch those – to catch – misuse of disposable resources. So, I don’t strongly believe that this should necessarily hold back resource management. And if we do, maybe we consider this as an add on proposal as specific to that proposal. I’m not sure we even need this, so I’d like to go through the queue and see what folk’s responses are on this proposal, if we do that.

MM: So you made a point about how this mechanism is not intended to express delayed acquisition, which it the way you put that seems to imply that it was a virtue that it was not, – that one should not use it to express delayed acquisition. Obviously one can. Why should one not do so?

RBN: There exceptions around delayed acquisition that this cannot maintain in resources. Resource acquisition is initialization. That means acquiring the resource is the acquisition, the thing that you’re acquiring is the resource. All of the things you should have done to access it should have happened and if I’m awaiting the operation, the initialization requires the await keyword, if initiation allows you to do delayed initialization, there might be the exception that I can make it async for an async resource and I do not believe that’s a reason we should pursue as it breaks the exceptions for the RAII mechanism. And I also believe that the purpose of this is purely to act as an enforcement mechanism. We could choose another enforcement mechanism that is offer necessary, there’s no run time mechanism that I could consider would not be arbitrarily complex and would not work with disposable dot use or custom building blocks that you want to use so the only mechanism that seemed to fit the requirement of this was something that you interact with the object itself, therefore having something that says, I’m opting into getting this value is, kind of the best approach to that and I don’t think it’s a good idea to extend that to do some type of additional work. It could be that the `Symbol.enter` or whatever we name it is actually a property on the object that you get that you’re not expecting it to run any code at all. I don’t really have a strong position on that, if we implement it that way, but the idea here is we don’t want to delay acquisition because we don’t want to create the wrong idea about what’s happening.

MM: So, zooming out, my overall reaction is I’m very, very positive on the problem you’re solving. I was initially very positive even on the mechanism you’re proposing to solve it, until you got to the slides on getter, and I think it’s great, it’s sufficiently great that I don’t see – I think that’s, that’s a fine way to get the functionality that this is proposing within the existing proposal, to the point that, um, I no longer see the need for a new mechanism.

RBN: That is generally my position as well.

MM: Okay. So, this serves the, this means that the existing proposal, because you have the option to do the get, solves the problem that you’re stating here.

RBN: That is correct. My main reason for bringing this as a proposal was to propose alternative that have been proposed on the issue tracker and they sufficiently cover the use cases but it’s important to discuss the alternatives to discuss if it’s necessary to make a change here. So, even as presenting this as a proposal, my initial reaction is that we don’t need this.

MM: Okay, great. Thank you.

KG: I disagree. I don’t think this is much of a solution at all, in particular, even if the author of the class is maximally disciplined, this only saves you, if the consumer of the instance is in fact using the class instance at some point in the future. So not only do you have to change every field on the class to getter so you can see the field is accessed without the instance being registered for disposal, but you don’t actually get enforcement. You do sometimes. You do perhaps even most of the time, but if you just happen to make one of these things, and don't end up `using` it, you will not get an error. You will just not get disposal. And even in the happy path where you do get the error, it's in the distant future instead of at the place that you actually made the mistake, which is when you’re getting the class. If acquisition of the error happened earlier in the cycle, something like this might be a reasonable solution, but as it is, it is not.

RBN: So to one point that you mentioned, having to make all fields gets, if the field getters are only valid when the resource is not yet disposed, then what do you do with those fields after you dispose? Normally you value them to some invalid value. You start them with invalid values with a private field holding on to what you need and then when you do the getter, that’s when you set it. – usually with the disposable resource you don’t have that many fields that you’re concerned about, it’s generally the performance on the resource.

KG: The point of turning fields into getters it’s to ensure that the user is using the class in a disposable, i.e. `using`it. So, you really do need to make all of the fields into getters to enforce that.

RBN: So, if a field having an invalid value after disposed, is considered a valued state, then a field having an invalid value before you get the dispose method is just as invalid.

KG: The problem isn’t the field having an invalid value, the problem is the user using the class instance despite not `using` it for disposal. The point of the getter pattern is to enforce that it’s using it as a disposable and the way that you’re enforcing that is you’re making operations on that instance through so that you can sort of do a second best check the, is the user using this in the correct way, but if you’re trying to enforce that property you need to enforce it for all of the ways you use that instance, which includes field access.

RBN: Again, I would consider that – not having registered or access `Symbol.dispose` is considered invalid state, then so you would want those to throw anyways.

KG: They’re just unrelated.

RBN: I don’t think that they are. You’re talking about accessing a resource and invalid state.

KG: I agree that accessing the resource and invalid state is a thing that you generally want to discourage, but it’s not generally worth making every field into a getter. That’s a fairly expensive thing to do. However, preventing the class from being used without registering it for disposal is a much more important problem. You’re right that you don’t necessarily need to make them all into getters, but this isn’t solving your problem because now people can use your class instance without registering it for disposal, which is your point.

CDA: Just want to note that we have a few more items in the queue.

RBN: I understand your concern – I – this may not be necessarily the most comprehensive solution, but I do believe that it covers the majority of cases and I don’t necessarily - it’s poor performance maybe to require all of these things to become can getters, but it’s an opt-in mechanism that you’re wanting to employ. Perhaps a `Symbol.enter` is for that case, but this covers the majority of cases that are going to be concerned with this.

KG: I do want emphasize that this doesn’t give you enforcement at all unless had the user happens to use the class instance.

SYG: I think I just don’t understand how `Symbol.enter` enforces. First of all let me clarify to make sure what it is supposed to be enforcing. I thought what it was supposed to be enforcing is at the using site itself, um – sorry, if you call a thing that runs a disposal, it should warn you if it’s not in a using or past two disposable stack or something? Um, how does `Symbol.enter` enforce that? Can you walk me through front to back, like mechanically how that would work?

RBN: So, as I said earlier, um, the way the mechanism would be employed is that an – an API that requires or prefers strict enforcement would return an object that contains only a `Symbol.enter` method runs the actual resource, if you call that using const. You have to call a simple method is not really a thing people like doing. It’s much harder to write. It’s adding an explicit indication that you’re doing a wrong thing.

SYG: The analogy here is that in C++ there’s an annotate called – that’s the use case we’re solving for here, but that’s a compile time, parsing time instantion.

RBN: That requires a compiler.

SYG: Exactly. That can solve the use case and I understand the use case. That `Symbol.enter` thing, you can’t enforce that to locally warn the user they did something wrong at the contest time. It’s still whenever they touch that binding for the first time and realize this is not what I was expecting, then they get an error which could be arbitrarily away from the time, correct?

RBN: The issue here, or what this – supports is something similar in the, a way that doesn’t require a type system in that it makes more complicated the mechanism of actually doing anything useful with the resource. Such that if you tried to just use it, if you don’t have a design-time system and you’re just calling the API, you get the object and you think you can do these certain things with it and dispose of it at the end, and that doesn’t work, so those become early indicators that you’re doing something wrong. If you do want to use the thing and you explicitly call simple dot enter, it’s a manual opt out. It’s the slash slash able – of a strict enforcement mechanism and that’s the case where I might want to build a disposable building block. I might want to directly interact with the API my self and – and that might be somehow a magical part of this system that you have to check in the method and can throw exceptions. There’s no way around it in those cases. And so this thing is the – kind of a best – best case mechanism for doing this in the JavaScript world that kind of achieves the minimal goal of saying, hey, I really want you to use, um, a using statement or a `DisposableStack` to actually work with this resource by making it much easier to use, using statement or `DisposableStack` because those will automatically unwrap it for you. Just like people will more use for of, then symbol dot iterator then call next. People will do at the and we give them escape hatches to use that, but you don’t next over an array, it has to call into those APIs to work with it. I originally changed these slides so it's not "enforce", but "stricter enforcement". We’re trying to guide people using disposables – and have an out for people that need to be able to build on top or call directly those APIs.

DRR: This was a clarification to say, it’s a runtime enforcement. You must go through the method to get the thing that has all of the functionality and most people will want to use it to do so. You can go through the methods, like RBN said.

GB: I’ll keep it brief, but just to say this solving a very real problem for resource acquisition where you want to ensure that resources are explicitly dropped if you want to make the assumption and – then we need this proposal. Under the guarantee that the symbol dot enter is being called synchronously immediately after the resource has been acquired to be able to give you a valid resource that we then know is going to be explicitly dropped. The get on Symbol.dispose` feels as though it’s not as concrete and for example if other methods want to check if the dispose exists, they could inadvertently trigger it. This strong guarantee in the protocol level feels like it should have been in the original and if it’s still able to up stream, we should do that, I would support that or go to stage 2.

RBN: The majority of APIs that would start using this when resource management gets to stage 4 won’t be using this functionality. All of the existing APIs would not be able to do this without breaking code or bifurcating, which I don’t think is a valid option or a valid forward and this comes on later as a mechanism for people to have that stricter level of enforcement. If they want it. So I don’t want to negate resource management because there’s a long tail of building APIs and getting those if into user hands if we’re not necessarily waiting for this to advance. Now if reaches the point that this is in stage 3, we could implement it.

CDA: We are at time. Apologies to the other folks in the queue. We just don’t have enough time. RBN, did you want to ask for stage advancement?

RBN: Yeah, let me get to that. So, first the initial question I had whether the existing work-arounds would be considered a viable alternative to this. It sounds like there are some concerns from KG that is the case so I’m not certain that’s an option going forward. I’m not sure if KG can respond if his concern is a concern that requires this proposal to exist.

KG: I can’t require a proposal to exist, but I can say that, despite the alternatives you presented, I’m still very interested in exploring something better in this space.

RBN: Should I say, rather than requiring, would you like to block stage 3 or 4, or request it be demoted to stage –

KG: No – resource management is already at stage 3.

CDA: We need to move on.

RBN: All right, so the last thing that I would is I’m looking for – if this is necessary, and maybe we can talk about whether this can be abandoned after the fact if it’s not – is to advance this to stage 1 or stage 2, considering I have all spec text as well.

MM: Stage 1 is problem statement, and further examination of the is fine, and I’m fine with the getter so I would definitely object to stage 2.

RBN: Fine with me.

CDA: Support there from Mark for stage 1. JRL, in the notes, Justin supports stage 1. Keith Miller stage 1 is okay, not stage 2. Um.

RBN: That works for me.

CDA: It sounds like you have stage 1.

RBN: Are there any – anyone opposed to advance.?

WH: I also support stage 1.

CDN: Okay. Not hearing or seeing any objections to stage 1. RBN you have stage 1.

### Speaker's Summary of Key Points

- Introduces an opt-in stricter enforcement of `using` and `DisposableStack.prototype.use`.
- When present, `using` (and `use`) invokes a `[Symbol.enter]()` method whose result becomes the actual resource to guide users to `using` to avoid the “stumbling block” of manually calling `[Symbol.enter]()`.
- Opt-in as mandatory enforcement would complicate adoption in DOM/NodeJS/Electron/etc.
- Enforcement alternatives exist incl. `FinalizationRegistry` and turning `[Symbol.dispose]()` into a getter.
  - Some considered alternatives not strong enough.
- Some committee members concerned the suggested “stumbling block” approach does not provide enough guarantees.
- If adopted, pursuing as a follow-on proposal to Explicit Resource Management due to opt-in nature.

### Conclusion

- Adopted for Stage 1.

## Stop Coercing Things pt 4

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1aumShXqYgQV38Bg_L3FfJvGKIupJVCxs_C-Iz3r_tRE/edit)

KG: Alright. I am coming back with part 4 of this proposal. Or, I shouldn’t say proposal because it’s not a proposal in the traditional sense that we mean in the committee, but this suggestion for a guideline for future work. So, in case you haven’t been paying attention to the previous proposals, a brief recap. My thesis of passing things of the wrong type is almost always a bug and bugs shouldn’t be allowed. That’s all I’m trying to get us to codify, and to codify the details of what that means for our various APIs. The demonstrative example that I have here is `['a', 'b', 'c'].at(true)` I’m sure at least some people on the committee know, this will get you `b`. That’s not a thing that people should have to know. If you like accidentally end up with true instead of a number in your variable that you’re passing as the argument to `at`, you’re going to be very confused when you get B out of this. Especially if you're expecting only zero or -1, let’s say. And I don’t think we have to keep doing this. Precedent is good, but as they say it’s not a suicide pact. So for sufficiently bad things it’s worth looking at breaking with precedent.

KG: So, we’ve talked about a few things already and gotten consensus for the things on this slide. `NaN` is not treated as zero, which I think is particularly deranged. Not treating undefined as anything else. Not rounding numbers. Not coercing objects to primitives other than booleans. And concretely when I say, stop doing these things, that means in future APIs when you receive one of these things and you’re expecting the other, so let’s say you’re expecting an integral number, then you throw a type error if you got a nonintegral number. And I have a draft document to make this concrete.

KG: As a reminder, these are not intended to be absolute rules. If you have a case where you think it makes sense to do something different for a proposal, it’s fine to make the case for this. I’m just trying to set the defaults for proposals going forward.

KG: So what’s left to talk about? I think mostly just these two things. We started discussion of the first one [on the slides] during the last talk, but we went back and forth on exactly what it should look like to not coerce between primitives. I originally presented complex rules and in committee there was support for being more restrictive than I thought there would be, and support from not coercing between primitive types at all, except boolean which is a simple case and it never invokes user code. And the second thing is don’t coerce primitives to objects, or at least for options bags. That’s not so much a change from what we’re already doing, but I do want to make sure that we codify that. We’ll start with the primitives other points. I’ll have some examples of cases that I think are silly, but because the full matrix of each primitive type to each primitive is quite large I’m not going to have an example of every case, just cases that I think are representative. For example: parsing null `parseInt` gives you pretty silly results: you parse the string "null". Or you can index an array with ".at(null)" and get the first element of the array.

KG: Similarly with boolean: parseInt(false, 36) parses the string "false". This is not reasonable behavior. I’m not going to go through other examples, I think you get the idea. But there are some cases that are more sensible. There are numeric strings that you might consider reasonable pass to a numeric taking API. I’m suggesting that even in the sensible cases we reject these so the rule will be simpler. It’s not hard for the coder to do it themselves if they want.

KG: I’m going to go through the second suggestion before getting to the queue, but that’s the end of the first suggestion. So, the second suggestion, not coercing primitives to objects, I hope will be simpler, especially because there’s already some precedent for doing the thing that I want us to do, which is saying if you have a position which takes an object, especially an options bag, primitives should be reject. You shouldn’t look up the "alphabet" property on a string, let’s say, and potentially get that property from Number.prototype. ECMA 402 has already codified this rule a while ago; previously this wasn’t the case and there were various APIs that didn’t do this enforcement for options bags and 402 switched to doing this enforcement on new APIs and I think that’s the right call. I want to codify it for 262 as well.

KG: for non-options bag taking positions where you take an object, for example, you take a `Set` as the argument for `set.union`, I think also rejecting things that which are not already objects is correct. There’s one last questions about, what do you do with iterable taking positions that I don’t want to get into unless we have more time to kill. Yea, what do people think? There’s nothing in the queue

CDA: SYG has entered the queue

SYG: Sounds good.

MM: agree.

PFC: Also, + 1. Especially the no primitive to object portion. We did this in Temporal. I cannot think of a possible use case where you would want to put options properties on Number.prototype or String.prototype and get them off there by passing a number or string as an options bag.

CDA: There’s a plus 1 from DE. You have plus 1 from DMM. Looks good to me from MF. You have a plus 1 from JHX and a plus 1 from Tom ??.

KG: All right, well, I was definitely expecting more discussion here. I’m glad we have been so efficient. I suppose that leaves the option for my bonus slide, which is, should iterable taking positions accept strings? We are currently not 100% consistent about this. In iterator prototype flatMap in the iterator helpers proposal we made the decision to say that flatMap has to return an iterator or an iterable, and strings don’t count. The behavior of wanting the characters of a string spread is so unusual that we decided that that’s something that users should have to opt into explicitly by calling the string iterator if they really want that. And for the coercion method for `Interator.from`, the static method we decided it should take string because it’s a coercion method and you can for-of over a string. So the question that I have for the committee is how do we feel about the thing on the slide? Do we want to take strings in iterable taking positions going forward? Strings being the only primitive which is an iterable right now. We could instead say that iterable positions accept objects and be done with it.

CDA: Jordan?

JHD: Yea, I’m in agreement. I think iterable strings was a huge mistake. If passing it to iterator dot from and it’s annoying then we should do what should have been done in the first place and at a dot points method to strings and I’m very loud support of this.

CDA: Nothing else in the queue. WH?

WH: I’m fine with the iterable direction. I have a different concern, which is that I’m starting to see resistance to *explicit* coercions where the user explicitly wants a coercion and we don’t want to provide that. So I want to make sure there’s nothing in this discussion that prevents us from defining explicit coercions.

KG: I’m not sure exactly what resistance you have been seeing, but certainly I think that explicit coercion is fine and having methods like an Iterator.from and getting an iterator out it is fine.

WH: An example from earlier today is, there was some opposition to providing explicit coercion between Numbers and Decimals.

KG: Ah. Yes. Well, I don’t have an opinion on that one. But I think that we should certainly not have a policy of opposing explicit coercion in general. I think that if in specific cases someone has a reason to not want explicit coercion in that specific case, it is reasonable for them to make the case for that, but the default should certainly be to provide explicit coercions when sensible.

WH: Okay, thank you.

JHD: I think I was going to Echo everything KG just said, the best way to limit explicit coercions is when they exist, and banning explicit is counterintuitive to banning implicit conversion.

MF: So, I didn’t have time to review this change beforehand. I think I agree with the change. I would like to be able to survey existing uses of iterator APIs, most of which I’ve probably added, just to make sure that all of these places certainly wouldn’t want strings passed. Additionally it’s kind of on JHD’s point, it might be easier to agree to this design principle if we had a `codePoints` API on String.prototype so that we could fully pretend strings are not iterable. Right now if we agree to this and you wanted to iterate a string, you would have to pass it to `Iterator.from` or spread it or something, and you’re admitting at that point that strings are iterable, whereas a `codePoints` method can fully pretend it didn’t exist and I think that might make it fit better. But I think I would be okay with this, even without that, I just think that it gives more motivation to pursue that. I just want a little bit more time to review the APIs first.

KG: Yeah, that sounds good. I would be in support of such a method either way. And, perhaps we can revisit this precise question the next time that there is an iterable taking API up for discussion.

CDA: JHD.

JHD: Oh, I’d be happy to write a quick proposal for that if this is a blocker, but this is not a blocker for this. We can talk about that later.

PFC: I don’t think I have anything to add to what Michael said. I think he said what I was going to say.

DMM: Well, I don’t have a lot to add. I think a way to – you know, something like code points on string would be excellent. We might also want to consider that code points may not be enough, you might want, um, oh – glyph or whatever it is, the term for the actual visible components of the string. That seems to be a common thing that people actually need and would be worth considering.

KG: Okay, so, I am going to ask for explicit consensus for a guideline, a nonbinding guideline for just these two things on the slides, with the caveat in the first one that we should in future APIs (except for close cousins of existing APIs) we should show type errors if given a primitive of a type that is different from what we are expecting, if we’re expecting another primitive or if we’re expecting an object. And I'm not at this time asking to codify the iterable change, but we have some support for it and – we’ll probably revisit the topic next time there’s an API taking up for discussion. So, just these two changes. We heard lots of support, so I’m not going to ask you to support again, I’m giving people a chance to object if they don’t like this direction.

CDA: We have a plus 1 from MM. Nothing else in the queue.

KG: All right, hearing no objections, I will take that as consensus and I will get the document for how-we-work updated.

### Speaker's Summary of Key Points

- KG proposed stopping coercion (for new APIs, as a nonbinding guideline) from:
  - null -> anything
  - boolean -> string
  - boolean -> number
  - primitive -> object in the case of options bags [already the case in 402]
- There was discussion about not treating primitives as iterables, but this will be revisited in the future, and no decision was made.

### Conclusion

- Consensus on the non-binding guidelines proposed in the slides

## (continuation) joint iteration: confirm our stance on #1

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-joint-iteration)
- [issue](https://github.com/tc39/proposal-joint-iteration)
- no slides

MF: I hope everybody’s ready to jump right in. So, just a reminder, we are considering whether array needs to be part of joint iteration and arrays are currently supported by Iterator.zip through the iteration protocol, and this would be a way to shortcut about the iteration protocol and zip arrays through indexing. If we decide that it is fully motivated, it doesn’t make sense for it to have to go through its own separate proposal process. If we’re unsure about that and we want to argue for its motivation separately, we can argue in a separate proposal. I also have the saved queue from last time, if we want to seed the discussion with that, or if you want to add yourself to the queue, go ahead.

CDA: MM is okay either way

JHD: Yea, I mean if it’s not included in this one, I would love to just start out the gate with a stage 1 proposal for arrays, but that feels like process overhead to me and I’m just going to be like copy and pasting and everything and then tweaking some spec text, but, yea, I mean, either way is fine, as long as the outcome is that both approaches end up in the language.

CDA: All right. Nothing else in the queue.

KG: What were the queue items from last time?

MF: Let me open up the saved queue. One second. Okay, we had NRO saying that the symmetry between arrays and iterators is already broken because take and drop are not technically slices. JHD said that it can go on Array, not Array.prototype. That’s fine. KG says – same as NRO. SYG wants to tease apart the performance – so it seems like SYG may not be convinced about motivation here and KG said mental model of readers versus writers.

KG: Yea. I vaguely remember my point there. Unless SYG wants to go first.

SYG: You go first, I’m not sure I remember what I was thinking.

KG: Okay, so, yeah, this is a, um – JHD I believe was making a point about wanting this method to exist because it fits with the mental model better rather than having to do an iterator dot zip followed by toArray. And like it being large conceptual overhead to do stuff with iterators. And I am not convinced that this is necessarily a concern for people who have reading the code. I think if you are reading the code that says, iterator.zip.toArray it’s quite clear what’s going on. There’s not really much mental overhead to that. So I’m not convinced that the mental overhead argument is sufficient in its own to justify adding the array methods.

JHD: Yea, I mean, I – I don’t think I was trying to make the argument that people wouldn’t understand that it’s happening, it’s unnecessary boilerplate and if they could just do .zip or Array.zip or something, that it, I think that would be clear. The other thing that I think would be a nice property would be, as much as possible, if fine if not every case, but to switch code back and forth between arrays and iterators when you need the laziness. I’ve definitely refactored stuff to use iterator helpers because it looks cleaner than what I was doing before, but I’ve had to reverse some of them because the performance was not good in some of them and it’s nice to do that smoothly and not completely rethink the way I’m – you know, the way I’m writing the code, but yea, I agree the iterator form is understandable.

KG: I do want to also emphasize that, you know, the symmetry is already a little bit broken but I’m expecting it to be broken a little bit more because there’s a few other things - takeWhile, dropWhile, chunks, windows - that we’re never going to be able to add to arrays. So, my hope is that we’re going to be able to add to iterator, but that means they’re going to be more and more utility that is not present on arrays. This one we can probably add to arrays, but I don’t want to count on them having the same functionality going forward.

JHD: Yea, I think it would be unreasonable for me or anyone to insist on every iterator method to be an array method, but I think many of them will be appropriate.

SYG: I remember somewhat the queue item I had previously. I wanted to be explicit for the array methods, um, as a general thing, like not specifically for zip, but I don’t think it is true that, um – like it’s not a goal to have array things mirror iterator things because array things are faster. Like the performance characteristics are just different. I think we’ll be doing a disservice with performance if we have a catch all. We should have a version of zip on array because it’s more performance. That’s not true. It’s more performance in different cases, you’re making certain trade-offs and I want to be explicit that whatever proposal comes out of this, it’s called out, it’s not a general thing. The performance between iterators and arrays are really that comparable.

CDA: We have 3 minutes left. Reply from JHD.

JHD: Yea, um, so yea, I mentioned performance every now and then, but it’s just not really a primary motivator for me, but arrays and iterators are conceptually both lists of things and a lot of the operations that apply to one apply to the other for me.

SYG: Like I think it behooves people to think about the difference. Like if you want to zip giant things you probably don’t want an array, right

JHD: Yea, I mean there are some use cases where you might want one over the other, of course, but that doesn’t change the conceptual operations you might want to perform.

SYG: Um, okay, I think – I don’t entirely for a nuanced reason but I don’t want to take up the time here.

MF: I’d like to reclaim the last minute to do a summary. What I’m hearing here is it wouldn’t be a blocker in either direction whether array zip was included or excluded to joint iteration in an upcoming meeting. JHD, please sync up with SYG on the tracker to figure out your differences. If there’s no concerns about motivation for array zip, because I haven’t heard any other concerns for array zip, I’ll go ahead and include it and if there’s still questions remaining, I’ll go ahead without it. Sounds fair?

JHD: Thanks. That sounds fine with me, and I’m happy to do the work.

MF: I’m happy to do the work. I’m super neutral on this topic. I just don’t want it to jeopardize the iterator methods going forward. That’s my concern here.

JHD: Understood.

MF: Okay, thank you.

### Conclusion

- It wouldn’t be a blocker in either direction whether array zip was included or excluded to joint iteration in an upcoming meeting.
- Discussion to continue on GitHub from https://github.com/tc39/proposal-joint-iteration/issues/1#issuecomment-2077815265, including among the opinionated parties, JHD (who has been arguing for array zip) and SYG (arguing against). MF is OK with either outcome.

## (continuation) Make eval-introduced global vars redeclarable

Presenter: Shu-yu Guo (SYG)

SYG: Oh yes, I would like to do this. Real quick. Shouldn’t take more than a minute. I will test the 262 PR. This is the, um, proposal for allowing global vars that were introduced via sloppy direct eval to be able to declare lexicals, or the other way around. It reached Test262 PR opened and was approved by Phillip C, and with that requirement satisfied I would like to now ask for stage 3.

WH: Sounds good.

CDA: Um, so you have a plus 1 from MM for stage three.

CDA: So you have support from WH, DE, DLM and LGH.

SYG: All right, sounds good. Thanks.

CDA: And any objections? … No.

### Conclusion

- Stage 3

## (continuation) Extractors

- [proposal](https://github.com/tc39/proposal-extractors)

RBN: We might be able to get through some of the remaining queue on that. I do have a question though. We also had talked earlier, um, when I presented on the deterministic collapse of a weight that required some review by, or that NRO wanted to look at the changes to the PR based on the discussion before determining whether that reached consensus and I don’t know if we can address that because I think that’s fairly short?

CDA: Noting that NRO is not present.

RBN: Oh, is he not? I believe he signed off on that, but if that’s not something we can move forward, then we can talk about extractors.

CDA: Um, it’s your call, but it seems like – if he’s not here, then you probably want to favor extractors.

RBN: All right. I think that’s fine. All right, um, let me check. Do we need to post the queue somewhere for discussion to continue that?

CDA: Yea, um,?

RBN: there were two replies, one from WH and one about throwing matches, which was more for pattern matching than this, but I don’t know if we want to meet with that. WH do you have context?

WH: I was +1 to whoever was speaking at the time. And I now don’t remember who that was.

RBN: All right. Um, and then the other – the second one was reply that talked about throwing for failed matches. It seemed like a nonstarter for KM.

KM: Yea. Um, I think I was understanding the context of the situation, um, so I don’t – don’t worry about that for now.

RBN: This might be something to discuss in the pattern action group because we were talking about the, um, refutability of match expressions and any case that didn’t match on the match expression or if you have no cases in the match expression it would throw, and I think that’s more for pattern matching this proposal.

MM: The proposal that I was hinting is the that in the argument that is part of this proposal, most of the values come from pattern matching that it also, it also states whether the match is happening in the context where a failure would cause a throw, the matcher is able to fail rather than throw, but it could throw – More diagnostic.

RBN: I think we did discuss that and I think that’s something we can consider.

MM: Yes.

RBN: Okay. And then, let’s see. The next topic that we had was, um, concern about precedent for design choices that we know are inefficient from Dan minor.

DLM: Thank you. And I wanted to thank you for the slides you put together for this. I was a little bit uncertain about this proposal when you first visited on the last plenary and I thought you did a very good job of explaining the feature and kind of demonstrating the symmetries with the ways of destructuring and you’ve also been responsive to our concerns about, um, using iterator protocol for return, just because, we know this is something that’s currently slow. In this case it seems like we probably have some ways of optimizing it, I just wanted to register a general concern about establishing something that we know to be slow and hoping that the engines will be able to optimize those in the future because it could be a way of backing yourselves into a corner in the future. In this case I don’t have a specific concern about how this is being handle because you have a fall back if the there problems, I just wanted to raise this for the future.

RBN: So, I believe next topic is: WH - line breaks in function calls?

WH: Yes, this is a rather thorny topic. The proposal, as it stands now, changes the behavior of existing code in incompatible ways. To fix it, we’d need to prohibit line breaks in function call expressions, which has its own adverse consequences. And I don’t like either of those options.

RBN: I think you would have to provide some additional context as to what the specific error is.

WH: Okay, the issue is, if you have:

```js
let x
 (a) = b
```

The proposal as it stands would change the behavior of that code into an extractor call where there’s no extractor before.

RBN: One of the reasons – so you’re talking about assignment expressions?

WH: The scenario is this:

```js
let x
 (a) = b
```

RBN: I don’t think that would be valid syntax. Maybe it would be, but I think – we would want to preserve existing syntax regardless so if there’s changes that need to be made to grammar for an inconsistency, I woulded appreciate if you could file things to adjust those so we don’t run into those that – something that is working. I definitely think we should look into that.

WH: I was anticipating that you would add a no-line-break restriction.

RBN: Yes, we can – I think we could add no line break. There’s only specific cases where it’s necessary, but I think that’s something we can investigate. Yes, thank you.

WH: And that’s where the problem arises because now we’d have a no-line-break restriction inside some function calls, which makes function calls inconsistent depending on where they appear. That’s a usability issue —

RBN: I understand that if you could again file an issue on the issue tracker with more context, I’d like to look at that and if that’s something that’s considered a stage 2 blocker, that’s fine. I would like to make sure we have that resolved.

WH: Okay. I also have a question about the elisions where you allow elisions inside the parameter lists assignment extractor function calls but the cover function call grammar doesn’t allow those, so I don’t know what the intent there is.

RBN: I’d like to not allow elisions. That’s what the discard bindings proposal would do.

WH: Okay. So the spec is in error there at the moment?

RBN: Yea, it’s more of a, need to mix both of these positions together to make sure we have something that works.

WH: Okay, I’ll file an issue to get the spec fixed in that case, thank you.

RBN: I appreciate that. Thank you. The last topic that I have saved was from SYG "remains concerned about runtime performance, thanks for being open, now also concerned about complexities from cover grammars."

SYG: Yea, the first part was just about the iterator proposition call, and you’re open that so I don’t need to speak much to that. The cover grammars thing is this – any cover grammar adds a bunch of complexity to parsers because you either have to do backtracking or if you don’t want to do backtracking you have to, um, keep all of your state so that you can make a decision for eventually when you can make the disambiguation choice. So, along the lines of what Dan Minor was saying this is general concerns that the – like we talked about syntax budget as, um, a readability budget for the reader. There’s also the complexity budget for parser implementations that arises from having a bunch of cover grammars and activity some pattern matching adds more and we’re pretty concerned by the combination of both. Cover grammar is probably not much as itself, but this is the use case of pattern matching the cover grammar explosion worries us.

RBN: So, the – the thing that I think of for the cover grammar in the call it expression case is that we – for the most part already parse out what would have been legal any ways in the assignment expressions. For variable declarations and binding patterns, Waldemar mentioned, with – a few exceptions, on the leading for constant let, the leading declaration, once you encounter, option dot sum, once you see option dot, you’re out of the case where it could be anything other than what is expected. It’s that continent space being identified is the issue there. We already have a – a cover grammar for call expressions for handling async functions.

SYG: Yes.

WH: It’s more a matter of making those things work together. I do plan — because there’s a couple of these cover grammars that need to come together — on taking a longer look at that.

CDA: Okay, we're at time, RBN.

RBN: I’d like to potentially advance to stage 2. I know there’s most likely blocking concerns. Advancement for stage 2 and then we can discuss if there’s any blockers for stage 2.

CDA: You have a plus 1 from stage 2 from MM and EAO. Do we have any other support for stage 2, or do we have any objections to stage 2 for extractors.

WH: I would like to resolve concerns before we advance to stage 2.

RBN: I appreciate that. That’s fair. Thank you.

DE: Sorry, could we briefly enumerate which concerns, just for the conclusion are especially important for stage 2?

RBN: I think the biggest concern was stage 2 blocker that WH raised was the issue around no line terminator in a function call being problematic or the need for NLT to make things work and what problems that entails. We need to work out that syntactic issue first.

DE: Great. Are there any other concerns that people feel need to be resolved before stage 2? Asking the whole committee. Because if it’s limited to that, that’s great progress.

WH: The other concern was the cover grammars which was raised by Shu, which I share about the new cover grammars.

SYG: I was thinking of them as more resolved during stage 2. Like it’s not – like stage 2 is not a free pass. So, like I think at this point – it’s a thing I would like to resolve. I don’t see this as a stage 2 blocker.

WH: Yea, I would agree with that, but I just wanted to note this is a concern.

RBN: Yea

DE: Good. And we also have the performance concern noted. So, good.

### Speaker's Summary of Key Points

- WH noted the cover grammar does not support ellisions, but they are included in the refined grammar.
- WH noted an NLT issue that must be addressed before Stage 2.

### Conclusion

- General consensus on proposal direction.
- Did not advance due issues in grammar that must be resolved before Stage 2.

## Signals for Stage 1

Presenter: Daniel Ehrenberg (DE), Yehuda Katz (YK) and Jatin Ramanathan (JRA)

- [proposal](https://github.com/proposal-signals/proposal-signals)
- [slides](https://docs.google.com/presentation/d/1MJqndTS5RmTEwTbtLTPsEloc-a_MWR8daQINgDim2RA/edit#slide=id.g1f570b058be_0_573)

DE: So, um now we have, um, I think, CDA you were saying the signals proposals. I think JRA is going to put up the slides and start presenting. We’re also joined today by, um, a number of newer delegates and observers who have been developing this proposal together.

JRA: All right, excellent. Um, so yea, thanks for having us. DE, me and YK are presenting signals and we are here to request stage 1. So, this is roughly the topics that we want to go through. Just an introduction for folks who might be unfamiliar and with them and how signals can help organize UIs and Daniel will talk about the standards for utilization and some efficacy. So, let’s get into it. What are signals? Signals are a reaction primitive that we are proposing we ad to the language. They’re variables with tracking and the thing they’re tracking is every place where the variable is used. Typically we refer to them as computations and so computations use variables and a computation at the end knows all of the variables that it accessed during the computations. And finally you have side effects which are arbitrary pieces of code that can depend on signals or computations and these side effects will execute only if the signals are computations that they depend on are invalidated. So, this is simple. I want to go through a simple example before we dive into more API details. So, here’s some code which demonstrates like, you know, a variable counter, some simple computations like computing if it’s even and turning that into text and finally rendering that text. So, I’ll give people a few seconds to go through this and read this.

JRA: Okay. So, there’s some problems with this, right. The first problem is the highlight render call is probably the worst problem at all. When you update the variable, you need to know which parts of the API need to be updated and the data code needs to be updated and incomplete like parody will read them, even if their down stream has not changed. Every time you call renderer, parody is going be called on, and then you have issues around composability, like if the UI depends on multiple signals or no longer depends on a signal. So you have to do a lot of manual bookkeeping to make this work and this is not a great way to write this code. So you have essentially, the text node, which depends on the computation parody and which depends on [ Indiscernible ] and depends on – so the terminology that we’ll use is we’ll call those variables like counter state and we’ll call those intermediate states as call you tents and the node that actually depends on the computations and the state is the effect. So, we have three kinds of nodes and we’re trying to build up this graph of computations that allows us to keep our data in sync with whatever side effects, the most popular side effect being updating UI. So the point of signals is if you have a slightly more complex node like this – a graph like this one, like two computations, C1 with C2 and let’s assume that the C1 computation is really expensive and all that the user did was they updated, for some reason by some way the S3 signal. So when S3 changes the E1, effect needs to run, both effects need to run because they depend on S3, however when the E1 runs, you don’t need to read on the expensive C1ic and this is where autotracking helps because autotracking is building up this cache key because we know it needs to be validated when something in the key changes. The system can take advantage of this. So, with that, we’ll just look at the API. The API for signal is essentially we call this class called state which has a getter and setter and when you use the getter, the autotracking kicks in. The next one is computed. Computed doesn’t have a setter since computers are pieces of logic that are represented by the call back that read on any time their down stream dependencies change. We have an options bag that contains, among other things, a way to customize the eels or the comparison function

JRA: And finally, we have a bunch of `subtle` APIs, we call the `subtle` namespace where we’re trying to collect a few things that are required to make the system useful and useable across various – various libraries that need to depend on it. Possibly the most interesting `subtle` API is Watcher. Watcher is a foundation over which you can build effects. So, effects is not being proposed right now as part of the proposal for a pretty important reason and I’m – I’ll try to get into that here. So, let’s visualize APIs. Our developer is interested in using signals and they look at the proposed APIs so the first thing it does is to try to make their data model and so they start using the state API to declare the different rainbows and they have derivations in the data model where you want certain slightly complicated more pieces of information that depend on other states and then they lastly they start using a library and the library provides the effect API and the effect API presents like something that knows how to use call backs that are given to it using an appropriate scheduling strategy. So, depending on the problem space, right, depending on whether you’re updating a UI, these callbacks that need to be re-executed can be optimized in various ways. We don’t believe that the language can actually make that decision in a generic enough way so that it’s applicable to all use cases. In stead, different use cases might want to bring their own scheduling or execution strategy to finally decide when and how the effects should be executed. So, watcher really provides the foundation to that. In this diagram, the blue boxes are the languages that will provide and the green box is that either the library could write or they could pick off the library to use and state computed. With that, I will hand over to [ Indiscernible ] to talk about how signals can help us manage UIs.

YK: Hello. Hello, everybody I haven’t been here in a while, but I’m excited to be back. Can you go back one slide? So, next I’m going to bring the abstract data concepts that they just described by how users would – and signal reactive data from frameworks, but still integrate deeply with the frame work’s rendering. Next slide. So, first I’m going to start by defining a reactive data structure. The signals are used under the hood and the user interacts with them under a normal JavaScript interface and allows them to develop libraries that are not coupled into frame works but, can be rendered into framework scheduled. I’m going to talk through the? Validation and rendering flow for both preactive and review and both are going to use the same shared library to facilitate sharing and under the hood the integration currently uses a watcher API that is a subtle name space and if you’re interested in the full details check out – I’m going to focus first on [ Indiscernible ] which is a – the show counter function is a normal – the return JX S describes what to enter – sorry, to explain what’s going on, if you’re not familiar with pre-op, return JSX explains what to – and exposed by counter. Once I’ve talked through preact, I’m going to talk about how – how it works with view, text based frameworks which also interact with the – PS, a reviewer just put it out a few minutes ago that there’s a subtle mistake in the [ Indiscernible ] after the incremental on click. If you notice it, you get a Goldstar.

YK: So, overall, this is what makes signals so exciting to us framework developers. We started out in earnest last year with the development and we’re giving this presentation now because the frameworks feel pretty aligned on the details. Speaking as a framework author, it’s a hugely positive sign that Open Source frameworks feel that we’re aligned enough to invest resources into exploring and integration. I’m going to use the hypothetical Preact integration to explain markets. This helped to flush out standard signals as a way of possibly – ultimately migrating to standard signals, should they become a standard. We created an instance of the counter – and get the same object back later. The component describes its unit – and interacts – the count property is a getter which gets the card value of the – it doesn’t interact and this is important. It can extract signals and it will still work properly with frameworks that work with signals. I’m worried about my audio. I will – I will put it out of my mind. Um, okay. Next slide. So, the priority property is also exposed as a get but it’s also involved under the hood. Is it so bad that it’s impossible to understand me?

YK: So the parity property is also exposed to a getter, but it’s also under the hood, it’s an even compute signal and – these computes add additional cache into the computation a – and you could use the function directly and this simplified example is a stand in for extensive computations that we would benefit from. After the first time the component was rendered, it’s initialized to zero and reflects that state and this is idle waiting to change. The on the right side state, and this basically, when people talk about autotracking, they are, the arrow visualize what people see. Next slide

YK: When the user clicks on the increment button, the calculator button is called and changes the value from 0 to 1. Next slide. When the state, um, the validated, watchers will fire. This does not immediately update, and this is important, instead it gives the framework an opportunity to integrate with its normal process and this is when developers that are built on signals and not? – web frameworks. Now, next slide. Eventually preact will schedule a rerender, which will recompute, and because we have a re – schedule we don’t have to think about revalidation and we don’t have to worry about handling additional state changes that happen in between and whenever the [ Indiscernible ] counter dot count and counter dot parody and it will render accordingly. It’s going to update and wait to be notified. So, um, that just about covers the basics of the integration but I wanted to emphasize one more thing which is the granular nature of signal and I’m going to add another button that adds by 2 instead of 1. If we update by 2, we should avoid updating the parody label. Next slide.

YK: So, I’m going avoid boring everybody by skipping forward through the same state. We already implemented the counter by 1 and we’re now idling in a steady state. What happens if we click the + 2 button? Next slide. The step by step validation process basically behaves like before, we notify both of the outputs, but because the parody hasn’t changed, it [ Indiscernible ], it has to run the entire function, but other frameworks have syntax that allow them to take advantage of the change and we’ll see that when we circle back around. Next slide. As before, preact updates the output and we’re back to idling. And we’re starting to see the pattern. User results in state signal changes and preact takes it from there and segues into its normal rendering process. And when I say, user interaction, that also can include – other events that happen in the browser like async and [Indiscernible]. Next slide.

YK: So, we showed how signals interact with preact in a way that reacts signals and that’s kind of what he was talking about before when he was describing ship effects, basically this is the glue into effects. Now, I teased an example earlier, and now we’re ready to it, and we’re going to jump to the example, and it will be pretty quick since most of it is the same. The data slide is completely identical, which is the data site could be an empty library. That would work fine. There’s one piece of state and it’s set back to where we before, before we incremented by 2, so we’re at the same spot. At the surface level, the view syntax is pretty different, but it represents the same, there’s a couple of labels that reflect the current state of the counter and buttons that represent the state. And I think this is part of an intuitive level why this works if we can find the right way to put these together. Next slide. So, clicking the plus 2 button increments the counter by 2, which is the same signal behavior that we saw before. So, we’ll skip through the propagation that we saw before. As before the change to the counter state notified watchers to the output nodes and hands that to view, and view would treat that as a signal, no pun intended, to schedule it for rerendering and then scheduled as normal.

YK: And view status templates make it interesting instead of running the whole component from top to bottom, it has to ability to decide and take advantage of the validation cut off that happens and in general this is true of other syntax, in addition to Vue this contains Svelte, Ember, Solid, and others. Next slide. All right. So, finally, like as before, view updates, account label and we’re back to the races and I just want to take a moment before I hand it back to emphasize that what we described earlier, it allows us to fully share data code while full [ Indiscernible ] over the rendering process and universal libraries that are reactive without thinking about specific framework, and on the other hand this allows them to add frame works into their design models and lets them focus on what they’re experts in and excites them and in general it’s a good decoupling. Working together to refine that compilation, is why they’re excited about our current status and why I am, actually. That’s it for walking slow this speculative/hypothetic formulation and now I’ll hand it back.

DE: So, I’ll take it from here. I want to go through the motivations for standardization. Um, so what do we mean by standardizing signals? Obviously we’re not, we’re not just asking that this signal library be included in browsers right now. This is the beginning of what will be a, um, an investigation that will take time. And we’re trying to model this snot off of the way that promises were standardized in N TC39. There was a standardize project to bring together the various libraries under a common interface and mostly common semantics and that had a very large influence on the promise standard of ES 6. We want to do something that is partly similar and partly different. Similarly we want this common approach, but differently we’re not focusing on finding common ergonomics or interface to be used on top. Ultimately the auto-tracking mechanism, the fact that when we within a computed you reference another signal, that reference itself puts it on the dependency list so that the dependency graph can be constructed. That core autotracking system and the way that signal graphs calculated this core semantics is the main part and ergonomics, there are many different components that people put on top of it and they can layer on top well. A big piece of motivation, maybe the biggest is, um, interreliable. Having one-way that this autotracking takes place. Autotracking is all about when you run a computed, you track, ultimately there’s sort of a global variable that whenever you read another signal it gets on the list that’s pointed to by the global variable and then when the compute ends, those are competed dependencies and this gets run every time, and this autotracking exists in multiple frameworks independently and the reason it exists is to drive the model where the view is a function of the model, or another way, the stuff that’s in the DOM should be, um, based on the state in a way that observes from the scratch consistency. So, it should work the same in the initial render as it would in a subsequent render, but at the same time we’re trying to make incremental changes so that it goes faster. So, ultimately, having a common data model and a common set of semantics enables us to separate the model from the view and allows the encounter be in a separate model or package than the way they were integrated or view. One possibility is you could have multiple islands on a page and use different rendering frame works. You could have, hopefully, eventually you could have widgets embedded, but that adds another complexity that this proposal doesn’t solve by itself. The standards give a common reference point and standards for building this convergence. So, one practical issue why something built in would work better than something in JavaScript is because with npm libraries and packages, data version, duplications happen so the global variable maintenance is impractical. Next slide.

DE: So, there are various strategies for implementation. Um, we hope that a native implementation might be faster. This is something that we want to experiment with. This isn’t the only motivation. This interoperability part is also important. Right now we’re collaborating on a polyfill of this proposal for exploration in JavaScript frameworks. So, I just want to note, native implementations are not magic. I don’t expect that they’ll have significantly different algorithms that we can use, but there’s nothing that I would expect GC or, you know, static analysis within the browser to do, um, it will just do the same sorts of things that we would do in JavaScript but there could be improvements and improved data structures. Next slide.

DE: They could also play a part in HTML in the DOM. So, there’s work needed. I think it’s generally – useful to have very commonly used libraries be included. You know, that – it’s possible to disagree with that. Signals have also been useful outside of UIs, and this dependability notion comes up. Overall the hope is that this will empower developers to focus on the really important parts, for example, frame works can focus on not this reactivity, and library authors can make these retargetable reactivity mechanisms and um, overall I think the structure of standards has been a great way to bring the community together, um, get everybody to work towards a common goal. Next slide. One possible place for collaboration could be in dev tools. So, different frame works have different tools that people can use to understand the state of their reactivity craft. So, maybe we could work together on a tool or maybe there’s something in – that we could do in native dev tools? That’s a topic of investigation. Next slide.

DE: Development plan. We have been just beginning to prototype things and our goal during stage 1 is to get significantly further in this. So, before asking for stage 2, we want to have significant real evidence that any of this makes sense. So, in addition to having correct fully functioning polyfills, which we can do because signals don’t require anything special in the engine and especially improves tests and documentation and currently we’re working into integration signals into frame works so that we can work out all of the problems with the API with expressiveness and performance problems and overhead that’s created by the API itself and integrating it to various applications is great. So, the plan is to continue iterating based on experience, developing based on this API. Next slide.

DE: I’m going to emphasize the polyfill that we have the in the proposal repo is unstable and it’s not encouraged for production use. It’s been useful to develop a polyfill, otherwise we – um, I mean we’ve already found certain mistakes based off of it, there’s really no way we could figure out if this proposal works without trying it. Um, next slide. So, this proposal is based on collaboration with the community. The first of draft included work from, um, engineers working on many different frameworks and that’s led to, that’s enabled this high level of review that we’re optimistic that it could work – previous slide, for the underlying usage. Since releasing we’ve seen a lot of community interest. We’ve a discord. People can file issues. And we’re planning on opening community calls to discuss this as a well. Next slide

DE: Yeah, I want to emphasize that even though we have this first draft published, it’s very, very early and everything’s up for discussion and change, just like any stage 1 proposal. Next slide

DE: So, what do you think? Should this be stage1? Should we have it on the table for TC39 to consider for the future?

JHD: Um, yea, I just wanted to clarify. You said this is impossible in NPM, and the way this is done in NPM is peer deps and you put everything in a packet that peer depends on and coordination is insured and. It’s not – it’s not convenient, but it’s quite possible.

DE: Oh, thanks. That’s a good idea. I’ll try to have that be part of our prototypes because we’ll want the deduplication in that case. Thanks.

WH: There’s some discussion about this on chat, but I’d like to ask a clarifying question about how the thing knows what signals a computed signal might access. Does it just remember what it accessed last time and pretend those are the ones it depends on, or does it take the union over time?

DE: Yea, that’s a good question and I think in a future presentation we could go into the algorithms, which this is just the entry point and the algorithms for validating the graph for this, but for these signals and autotracking, they just record what was read last time. They don’t record the things that maybe were read previous times. It’s something like a pure function – anyway, it’s only going to be invalidated if one of the things that was read in its previous execution changes. So, one of the paths that isn’t taken hasn’t changed in one of the signals that it reads, it won’t invalidate. That’s on purpose. That causes less invalidation.

WH: Where are those states stored?

DE: There’s a global variable. The agent, I think, would have some slot that holds, which is the “current computed”. That computed would be in this recomputing state, and it would append things to its list whenever a signal gets read and if there’s a nested computed, it works stack-wise. If there’s a nested computed, it will go to the one that is current and then go back to the outer one, once that ends.

WH: Okay.

DE: Does that algorithm make sense?

WH: Yes. It was just a clarifying question. There are a lot more questions I could ask but I’ll defer to the rest of the queue.

JHD: There we go. Yea, so, I have a few things. I have two topics on the queue and I wanted to add something to the discussion with Waldemar. This sounds a lot to me with react hooks they basically made a rule that’s enforced by linter that all hooks have to be unconditionally called in a component’s rendering and this was so that they can do this kind of global state wrapping trick to figure out what hooks were called. Um, and I feel like in practice it’s, it allows things to be ergonomic in the seb that you don’t have to repeat yourself with what the dependencies are, but it also like causes a lot of confusion and problems and the like, ES lint roll for rules of looks that deals with specifying dependencies, for example, there’s a lot of ecosystem complaints about it. It’s not a blocker for stage 1, but I’m generally concerned about trying to infer the dependence.

YK: I think JHD, without getting too far into the weeds about it, those are very good concerns and I think we have strategies that avoid those problems, but I would really love any feedback about that concretely playing out those problems because it’s definitely on our radar.

DE: Yeah, it would be good to dig into the comparison. I think it’s a different situation.

JHD: And I definitely think that’s during stage 2 discussion, I just wanted to bring it up. My first queue item I see that all of these produce class instances and there’s a few reasons why I want to avoid that. Um, and I – completely setting aside my personal, um, esthetic around, um, programming styles. I think it’s really important to be able to separate capabilities here. So, for example, a signal has get and set, and I don’t want to – like I’d have to bind methods if I’m going to – like I think that was the error that they were references in the slide because without the binding it doesn’t work.

YK: It wasn’t that, it was I didn’t pass the event.

JHD: So, yeah but the error was – the method wasn’t bound and that would provide another error.

DE: In this case [of the Vue code sample], the method was bound and the error would happen because you don’t but the parenthesis and Vue is going to send the event as the parameter and that’s going to trip it up because increment took a default –

DE: Your actual question, um, I think it’s – um–

JHD: I didn’t finish my actual question.

DE: Oh, sorry. Keep going.

JHD: So, it seems to me that it would be much simpler if the API call that produces a signal, let’s say, or that state, it’s just an object with a get and set function on it as opposed to being a class, that allows me to hand-off both capabilities or one capability to somebody else, and allows me to build a freeze mechanic where I wrap the set function and use a closure to deny them access to it, or reblase it with an op or something, when I want to deny them access. I feel that sort of design would be safer by default. Harder to mess up.

DE: Yeah.

JHD: And again, that’s during stage 2 thing, I just wanted to –

DE: I’m very sympathetic to the capability separation argument and I think we might want to have a built in thing that has the capabilities preseparated, but at the same time, as you noted, it can be wrapped. We wanted to minimize the number of allocations to make sure it was practical. Do you have thoughts?

JRA: I think you covered that. I just wanted to figure out that we are working with frame works where the separation of capabilities is incredibly important, so we’re going to verify that our design actually makes sense for them without placing like an undue burden.

YK: I want to say, [ Indiscernible ] design, and then the design do the things you’re saying, JHD and I – I think it’s, the stage 2 things, but it’s definitely thing a lot of people into it.

DE: The thing is particular is if we separated the capabilities, they would still have to wrap each one [causing additional allocations even though capabilities were already separated in practice] so that’s the kind of the thing we’re trying to work through.

CDA: Sorry, I’m going to jump in here. We have less than 5 minutes. There’s a sizable queue and I believe you still want to ask for stage 1, so – do you want to – do you want to take a look at the queue and pick anything out there that you want to talk about?

DE: Um, okay, let’s see if anything in the queue is a potential, um – I mean, can I ask the people on the queue or people not on the queue if they want to raise any of these concerns, especially high priorities before we consider stage 1?

JHD: Mine isn’t applying to stage 1, but it might block stage 2 and I wanted to deliver that feedback in plenary.

RBN: I was going to say that I also have something that may not block stage 1, but it may give others pause and cause them to be a potential block that I would like to discuss.

MAH: Same, we’re supportive of stage 1, but we have concerns with the global mutable state that is observable currently and that’s definitely a stage 2 blocker and we would like to invite the champions to discuss this in the minutes remaining.

DE: Okay. Can we like, call for consensus on stage 1 and then continue going through the queue? Would that be okay with people?

DE: I want to understand if there’s any objections.

RBN: I do want to bring up – I can briefly describe my concern before we talk about stage 1 advancement. I already posted an issue on the issue tracker, it’s issue 111. I have a concern that we’re putting the cart before the horse and looking at signals and watcher before we look at events and observers. We have the DOM has events. It has edit listen and raise events. No JS has event and emitter and we have already things that are event-like. Most of these things tie into watcher more than signal, but we have these mechanisms for registering call backs and possibly canceling the call backs and signal watcher and all of this is adding yet another mechanism of doing something without this core mechanism that I think we need. Even if it’s not a built in feature of the language but more of a protocol that we can widen out to the DOM and node JS to consistently handle the events and I feel like we’re pushing for a feature that is much more higher level than a building block that we don’t have in the language but obviously is needed because it’s used literally in every host environment but in a different way. So, I want to make sure we’re thinking about that and I think we need a solution for this before it gets to stage 2 because it might have a dramatic impact – at least before it gets to stage 2 because it might have an impact on design for stage 2 API tracker.

DE: Great. I agree that this is about Signal.subtle.Watcher and not Signal.Computed, which is pull-based. And I agree that we can keep iterating on this API. It would be great to enhance Watcher with those mechanisms and we’ll see how the standards environment proceeds during that time. As you mentioned, several other things were not held back because of the lack of unification, I don’t see why this one should be. I responded to your issue with a number of requirements that are slightly unique about Watcher for an API; we’ll see whether a unified Observable/Event API meets those requirements.

RBN: Just to add that, why it doesn’t need to be held back why we have this discontinuity is keep building different ways of doing the same thing, and this discontinuity needs to converge somewhere and I think that’s why this should be held from stage 2 because we need a consistent way of addressing this, especially if we’re talking about a core feature that any of the these systems could use for any reason.

YK: I think this makes sense and I replied to you on the comment thread and I would love to continue there.

RBN: Thank you.

CDA: All right, do we have support for stage 1? I’m leaving the queue intact deliberately.

SYG: Can I do my item real quick? I have a question for the champions. I’m not going to block stage 1, but I want to double check something.

SYG: So, standardizing something, even stage 1 for folks unfamiliar with TC39 they may see it as a signal, what platform and JS, we ought to remain somewhat impartial to things built on top of us. I wanted to double check that you talked with people, that they would not take stage 1 that the platform that something that react is not going to do and try to make them less competitive or something.

DE: It’s definitely not about making anyone less competitive. We’ve been talking with the React team, you would have to ask them their thoughts. I don’t want to misrepresent them. There are various possible integration points with React’s current model and it’s not necessarily competition in this case.

YK: They seem interested to help us work through, right?

DE: Yeah, they’ve been open to communication and they will be able to state their own position.

JRA: And we got some engagement from the React community, like recently I saw an implementation of a use signal by the author of Jotai that is a Signals-based React library. We would definitely benefit more from engaging more with the core team and we remain open to doing that.

CDA: Okay, we’re past time. Once again, looking for, um, support for stage 1.

DE: Does anybody think stage 1 is a good idea?

CDA: We have a plus 1 for stage 1 from DRR.

MM: Yea, we support stage 1 and a although we’re, we’ve got a lot of issues to be worked out.

CDA: Plus 1 for support from MM. Plus 1 as well from MF. Plus 1 from EAO. Plus 1 from SRV. Do we have any objections to stage 1?

CDA: Seeing nothing, hearing nothing, signals has stage 1.

CDA: We are past time. If some folks would like to continue discussion, I think we can stay on for a little bit longer or maybe go through the items that are in the queue.

> no transcriptionist below

LJH: We should take note of the lessons from fetch(), intended to be a low-level primitive, and so many users used it directly to the point that WinterGC had to spec `fetch()` differently due to impossibility of implementing fetch() on the server

DE: Yes, it would be great if we can improve the ergonomics of direct use; I think Signal.State and Signal.Computed aren’t so bad, but still, it’s challenging and complex to use the Signal.subtle features. We want this signals to be usable in reality, and that means hooking into some relatively complicated/custom framework code.

YK: .... There is a plausible answer for DOM to provided a renderer, but we sliced things because there was not a good single answer. If we shipped something minimal, that might have the same problem in a different form that LJH mentioned, but where people end up using the primitive directly instead of what people want anyway.

JRA: Angular is experimenting with Signals over the next few months, and we will be able to report back with details.

YK: Same with Ember

MAH: We have concerns with global mutable state. No problems with global mutable state as long as it's not observable by a user's code. Async context took great efforts to ensure that while there was global state, there was (mostly?) no way to observe this state. This proposal does provide capabilities to witness these mechanisms. We basically have concerns with global mutable state that's observable, and encourage exploring if the mechanisms are necessary and why.

DE: `currentComputed` is a lot; you’re right. We’ll look into making that more limited. Regarding the `notify` state, we should follow up on why that is a problem–it seems like that shouldn’t leak too much information. I’ll follow up in SES calls..

YK: The version of Signals I implemented before this effort considered these concerns. We're confident in the high-level APIs where we have enthusiasm. Low-level APIs we expect to change more.

MAH: Looking forward to these discussions.

DE: Sounds like there are some concerns around lower-level APIs and mutability.

WH: RBN had concerns around events

DE: Events/Observables might be a way of modeling Signal.subtle.Watcher, which does have a callback, but there are some specific performance-related requirements which might not be met by other APIs. Ultimately not sure that this proposal should be held back by that; your application code should generally not be trying to take subscriptions to signals; this Watcher API is more for frameworks to use. Note that Signal.Computed is not an example of something that makes sense to model with events or observables, as it is lazy/pull-based, whereas events and observables are eager and push-based.

JRA: Not including an effects API was one concern in the community, but this was a deliberate decision

DE: We'll be having calls to discuss all of these issues externally. Please, if you're interested join the Discord, comment on issues [on GitHub], whatever works for you!

### Speaker's Summary of Key Points

- Signals are a possible addition to the JavaScript standard library to efficiently and consistently handle reactivity/state management. They form a mutable, automatically tracked data dependency graph.
- A minimal signal API Is proposed based around State and Computed signals, with some advanced “subtle” features (the latter in a more questionable state).
- The effort here has been based on the collaboration of several frameworks, who are working to validate that this is a possible common model to place underneath their existing systems (in branches), based on a polyfill which is not suitable for production.
- Some concerns raised by the committee:
  - RBN asked about the relationship with the Events/Observer pattern. Computed signals are not correctly modelled by events/observers (which are push-based, whereas computeds are pull-based), but Signal.subtle.Watcher might be a candidate. Discussion continues at https://github.com/tc39/proposal-signals/issues/111
  - JHD asked about the relationship to the React “rules of hooks”. Signal APIs don’t have quite the same constraints, but the champions will follow up with JHD offline to understand concerns better. JHD also asked about capability separation for reading and writing, which is being discussed in https://github.com/tc39/proposal-signals/issues/94 and https://github.com/tc39/proposal-signals/issues/124
  - MAH asked whether certain powerful APIs such as Signal.subtle.currentComputed (which may represent an unintended communication channel) are needed. The signal champions will follow up on this concern during regular SES calls; it is likely that the subtle APIs can be modified.

### Conclusion

- Signals reach Stage 1
- Development of the polyfill and integrations into new and existing frameworks will continue, coordinated through an official public Matrix channel and regular public meetings on the TC39 calendar.
