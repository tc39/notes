# 30 March, 2022 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ashley Claymore      | ACE            | Bloomberg          |
| Luca Casonato        | LCA            | Deno Land Inc      |
| Waldemar Horwat      | WH             | Google             |
| Michael Saboff       | MLS            | Apple              |
| Robin Ricard         | RRD            | Bloomberg          |
| Josh Blaney          | JPB            | Apple              |
| Eemeli Aro           | EAO            | Mozilla            |
| Chris de Almeida     | CDA            | IBM                |
| Istvan Sebestyen     | IS             | Ecma International |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Jack Works           | JWK            | Sujitech           |

## Units Conversion

Presenter: Younies Mahmoud (YMD)

- [proposal](https://github.com/younies/unit-conversion-proposal)
- [slides](https://bit.ly/presentation-units-conversion)

YMD: Okay. Thank you very much. So I'm YMD. I'm a software engineer at Google and I'm presenting today units conversion proposal. And this is the link for the proposal and also, here is the link for the presentation. So the agenda, I'm going to talk about the overview and users and requirements and proposed API design. So, as an overview, so many applications require measurement units, conversion something like from simple units from Persia until locality awareness conversion. and the simple one is, why just like, it's what we want to convert Celsius to Fahrenheit for 2-inch and till heavily units conversion like food. For example, fitness apps. So it will introduce a lot of quantities and Depends also on the lookup. And then here, the users and requirements we can see from the medical websites and web sites as we see like it has metric and standard. You can give your height your weight. and then calculate BMI. Here is also but in another language and here is also in Google units conversion. You see like in the one box if you want to convert between meter and inch and among other applications There are already units conversio websites and me know that there is already many websites. If you want to ask quite changing the like, converting the units meters to inches. Some of them Actually, for Maurice more complicated. Things like different type of Temperatures. And this is the like one of the complicated one, like fitness app, and this is like a screenshot from my fitness plan. And you see, like, you need most of the time sometimes to enter, like the amount of the food in different scales and you got also the output of the calories or other like units in different scales too. Also like, this is in the shop. Sometimes you want to convert the size based on the locale. And this one is like for car. So sometimes like as we see this is in the fuel website for and we see like sometimes you want to see the fuel consumptions mile per gallon. However, Switzerland, you want to see the full consumption in L / 100 km. So, all of those conversions needs so wind some of the requirements. So, some users we want, like, simple units conversions from meters to feet, or celsius to Fahrenheit. And as we see some of the complex units converter, for example, from meters to feet and inches, or from hours to minutes and seconds, and sometimes from their second units, like our to hours minutes and seconds. So and also to can be like, for example, from seconds to hours minutes and seconds. And other things like units, conversion information. So some of sites as we see like in the Google one sometimes you want to know what is the conversion rate? What the offset? And if it is reciprocal or not like as like gallon per mile, per gallon or L / km, and this is also by the first one is good. like as we see on the fitness app, locale awareness enumeration, for example, if we want to know the units in the United States, if you want to know the units that you for a specific thing. And here is example, if it is a length and for person height in the United States, okay, we use feet and inches. And for example, if for food measurement, maybe we want to use cup or ounces, or maybe like, like, mm and other, and after this, that will (?) units, conversion making the conversion and return a nests for example, converted from each other to in United States for personal use person or for example, km for USA, for India for you, and for English in the United States, food usage, and you need translation already exists by for example, Santa Anita. As we see like some locales, you want to show us in cm, some of them want to show it and [??]. So this is a requirement and the proposed API. I give like three (?). If he asks, for example, this is for symptoms sentence converter. So Was our kind of get the bag, give the perfect light source, units and Target unit and can have the convention and here for complex unit conversions, So considered like you, give Source in simple unit however the target is complex unit and you've got array. this is array of two elements of the two includes 3 feet and three point three seven inches here. Also for local units conversion. So entity units converge on you give like the source unit and then go. Look out. And then the usage and once you convert, it will gives you an array of the correct corresponding units with their values. So this is the end of this and I would like to know any questions from you before I ask for stage 1.

RPR: Okay. Is that anyone would like to ask questions about this proposal? WH is on the queue.

WH: I’m wondering why shoe size conversions should be in the ECMAScript standard and why it would not be better done in some user library.

YMD: so actually your question also when we were talking like in the industry like in the group of dissidents night before I presented here, and the question is d, 1 asking about like simple units, conversion and complex conversion, and we only to the locale unit conversion because it is related to the internationalization. This is your question. Yes?

WH: Well, shoe sizes are just — I'm not sure that's something that we should be in the business of standardizing here in Ecma.

YMD: So, the idea is, there is already like a library for like shoe sizes in ICU and lose information is already specified by see the art, for example, 4 meter, and usage and person height. I mean a new city and the Locale you can get the information. So the information is already in the CLDR and in and it is already mplemented in ICU. The idea is here we want to bring this API to be used by many user in ecmascript? And as you as I showed many users need this Library.

WH: I'm not familiar with that library. Do they have things like shoe sizes?

YMD: Do you mean the library in ICU? Yeah, so in ICU, there is already number four, metal. And if you use number formatter and you say for usage or due to usage, should I (?) give units and usage and locale, it would convert for your the formatting or automatically and give you the correct format. as a formatting update. And we are now working on making - because some people wanted already and a way you are working to bring it on. Also in CLDR, there is something called units, preference. If you check it you are going to see all the information and evidence needed more information. We sequentially adding like, for example, if people asking for altitude, we are now in a stage in working in adding it.

WH: Do they actually have shoe sizes? I don't even know what units those are in.

YMD: So right now they don't have it. however, if the user wants to have this, like, for example, the usage of shoe sizes, we can add it and also like right now, the people can add it to the data patches because everyone, but right now it is not there, but if the people wanted it, we can add it to the CLDR data. And we can get it from there.

WH: I just don't understand the scope of this. Conversions between metric imperial units are fairly straightforward. I don't know why they would need to be in the language. Things like clothing sizes are kind of vague. Those are actually ill-defined, depending on which source you go to you may get different answers and they change over time.

YMD: So first thing you mentioned the measurement actually, there is many measurement system around the world. That's like when you're good. So now we support with the Imperial and the standard. However, there is many and we are now supporting him like, for example, for Chinese, for Indian and also for Japanese. So we're trying to cover all of them. So this is the first one. The second thing for

WH: I don't understand that. In Japan they use which system?

YMD: So, yeah, in Japan they have their own units for example, for food, and also, for length, so there is already - and if someone want to ask for it, it should be supported.

WH: What does Japan use for units of length?

YMD: I have the data but I need to pull it up… so, for example, for Japanese, there is, for example, there is something called the kisatchie (?), they use it. And for length specifically… So for me, I don't see for length. I see for other quantities, for example, for volume or weight, but I can search if there is but needed to use other things for volume.

WH: Anyway, let's let other people speak.

JSC: Hi, I'd like to just make sure to clarify the problem statement and scope of this proposal would explicitly be about units in CLDR, right? Nothing. Nothing outside is CLDR, and it will defer all the every like all its logic and definitions to CLDR, right?

YMD: Yeah.

JSC: okay. Yeah. Unit systems. I mean them being, you know, relatively complex. unstable, political and whatever. I just mean. I'm fine with with differing to CLDR since healed. They are already takes care of that. I'm just wondering and SYG already has an item to that with the end goal what the endgame for the international is, but I'll let you talk about that.

MLS: so I wondering if you have a canonical list of all the units to and from. JSC says it's out of CLDR, yet you also have to shoe size, waist size, shirt size, and they vary quite a bit. And I don't think that they're standardized. I'm just wondering if we're going to add so much surface space is far as the units were going to convert to and from that many will be rarely used.

YMD: Okay, about the clothes size, it is not yet added to CLDR. About if people wanted to be standardized and many life, because there is many already like clothes shops, and, and if many of them like, ask for for it to be, summarized, we are going to work with you in confidence and see if they are added. But for me here, I've added it as example for, for [?] for example, may be like, if it's not like so, so many other shops for example, food shops or other shop that use weights, we want to change the system directly based on the locale or based and user preference.

MLS: So are you planning that the data is going to come out of CLDR? Will the the Locale information? The conversion information come out of CLDR?

YMD: Yes. It's come out of CLDR

MLS: Do you want everything coming out of CLDR to be part of API?

YMD: Sorry, could you have the question again?

MLS: Do you want to be inclusive of everything that's in CLDR to be exposed through this API?

YMD: Everything related to units.

USA: Hi, I just missed part of this, but just to clarify, the units part in itself, doesn't need to come from CLDR. It in itself is quite minimal. The actual locale information is coming from CLDR. So Locale aware unit formatting is a CLDR thing, but converting from one unit to another's. Doesn't need to go via the CLDR.

YMD: You are correct. However, also the unit's information and the conversion conversion rates, all of this Right now Right now, also in CLDR.

USA: Do, you need CLDR to convert from like inches to meters?

YMD: So if you want to convert you need to know what is the conversion rate and also how to write the unit itself is now standardized by Unicode. And it's also written in CLDR. They are so all of this came for you today. However, you didn't need it. Like you can find other sources to bring the conversion rates, but I mean for now, it is already in CLDR and we are using it as the same as we use it in ICU

USA: Maybe MLS could clarify. Are you more concerned about the data cost here or something else?

MLS: My big concern ishow common will this be used? And then the subjectivity of these units. For example shirt sizes. There's multiple shoe size and depends on whether you're talking about boots or shoes, or you know what. And I don't just seems to be too subjective to me for certain you. Other units, you know, link conversion, temperature conversion. I'm not sure you need, you know, locale for that. And we, you know, we know that it's pretty easy,

USA: Yeah. you need to look healthy to specifically for one finding out which, which is the preferred unit for, for finding out locale in a given context into to actually format. The, the result. But not the actual conversion.

SYG: That's not this proposal, right?.

YMD: Also, I want to mention something that sometimes also the units is depending on the value. So for example, if the person height is more than three feet so it should be in foot and inches. However, if it is less than three feet, it's a child by USD, want like standardize. It should only be in inches. So this is also specified in CLDR. And it is good to follow it.

SFC: Since a lot of people have been asking, like, what is the data? How big is it? What's included? I just put a link to the XML file where you can see exactly what the scope is.: <https://github.com/unicode-org/cldr/blob/main/common/supplemental/units.xml#L272>

SYG: So, for the response to WH, question of why is this in the language? I mainly maybe I missed the answer. I mainly heard that because it's in ICU. Is that right? When WH asked why does this meet the bar to be included in the language instead of as a library? One of the answers I heard was because it's already in ICU. Was there another answer?

YMD: Like this is supported by the data this is what answering for, where is the data come? And why is it used right now, but why we need it, it's because of those users that I talked about? And one of them is a user in Google itself. And so, all of those users that I talked about the from my perspective, I believe that they need it and it would be good to have it.

SYG: Right, but that's that's why we should have something. Why does that say we should have it in the language?

YMD: That's a good question actually, and I don't have an answer for now.

SYG: My broader question is, which is kind of unrelated to that one is what the? I'm certainly not an internationalization and localization expert and I am probably not a good judge of, Is this thing useful for localization or not useful for localization, but from an outsider's point of view. I see a lot of new internationalization APIs being proposed that basically seem like, well, IICU stuff is already there. Let's expose me. So what is the the the end goal that International that the Intl API wants to do? Is it basically to expose as much ICU surface as possible?

YMD: So that's a good question. So the idea is like I see you in the people Implement something. I see you because many libraries needed this features. And as I see like here, like also there is many libraries that need this feature. And we because this, we want to expose it. And we have already like like as I said, like in Google, one of the clients and also other clients it would be good to support them with this feature. And it will be standardized and also supported by standardized things.

SYG: The last part is what I want to understand better. What is the the value? Add of standardized Parts here. There probably is a big one. But yeah, I'd be good to dig into that more, but not a stage one blocker for me.

RPR: Okay, we've got seven minutes remaining. So please consider the people in the queue if this is something that might block stage one.

SFC: Yeah, my comment. I think everybody issue and maybe to reply to YSV a little bit later. Is that - so we you know about a year ago ZB and I made a presentation here where we just discussed contributing guidelines into Ecma 402 and, know, the idea is that every proposal is evaluated on own merits and, you know, has to meet, you know, fairly High bar. Of prior art being expensive, to implement and user land and Broad appeal. Those are stage 2 requirements. I think the purpose of asking for stage one is for the committee to say: well, this is a, you know, a good enough proposal that it’s worth spending the time to, to do the full investigations so we can make the case for stage 2. But yeah, the, the ICU for JS, or CLDR for JS is, you know, explicitly, a non-goal. The the scope of those is much larger than what's relevant for applications in JavaScript. We're focused on what those applications need and and the requirement there is going to be a subset of ICU and CLDR and that's been our position for a very long time. So every proposal should be evaluated on its own merits. I'm not making a claim about whether this proposal meets that bar right now, I think we can make that case, but that's not what we're what we're asking about right now.

CM: My reaction is tangentially related to some of the prior commenters, but this is just the most recent, most extreme version of something that has been nagging at me for a while, which is another sort of meta question, which is that this might be a fine addition to the Intl library. I'm not an internationalization expert. Most of us here are not internationalization experts. Internationalisation has nothing to do with the programming language semantics, which is the primary focus of this committee. Why are we taking plenary time on this? I mean, I don't have a particular opinion on the merits or not of this particular proposal concept, but this feels like we're taking the time of the entire committee for a topic that is neither in the scope of the committee’s expertise or interest. And all of the details here are irrelevant to programming language design and this is not to say that having this stuff standardized isn't a good idea. I'm just saying it's not our job and I feel like we've been taking an increasing amount of committee time on details that the committee has no expertise in dealing with.

USA: I think we have essentially the same point. but yes, there is a task group of the committee which discusses these things in more detail - that said, since 402 is under TC39 and the entire committee.

CM: So the question is, what could we do to make TG2 more autonomous?

RPR: That sounds like quite a discussion than than, just for this this proposed, right?

CM: We’re spending a half hour of our time on this particular proposal. This is wasting everybody's time right now,

RPR: and I think SFC and SYG are kind of making the same thing Point here, which is that the task group cannot Advance stages. And so we could choose to grant that but that's a bigger bigger issue.

CM: Yes, there are so many issues there and I think there are questions. For example, might a particular feature expose some security vulnerability, some engineering hole that might mess up with software development? But the particular details of what units you have and how you factor in API and all of that, it's just not our concern.

RPR: I'll take the point. Could we? That discussion offline either to the the chat or the reflection.

CM: That's fine. I just I just wanted to get that issue on the table,

??: I'd like to hear at least what Yulia and JS choice questions are.

RPR: Yeah, I think I think guy for okay. Okay. She will SYG to you.

YSV: Yeah. So as ZB actually, wrote a really informative comment about effectively what SFC mentioned regarding the the bar for proposal, of course, that can be applied to Stage 2. However, for stage 1, we do need a problem statement. And the problem statement that I have heard is that there is some unknown quantity of developers who need this, which makes it very difficult to scope. What this feature should be. And I do agree with ZB’s comment where he states that you know, if you look at what that sealed your data is doing there may be several different proposals contained in this one, that would be greatly benefited from having a more concrete. We focus a more concrete problem statement because I'm not, I'm not really convinced that like an API for shoe sizes, shirt sizes, or anything else, that gets added to CLDR later will necessarily be handled well by like a single API that will have. And what if Unicode decides to make certain arbitrary changes. Are we going to be always referencing them? We've had that discussion in the past. That's a larger discussion. That's a discussion. I think, for a much more concrete core language feature. That we had earlier regarding the tables that were pointing to in Unicode. So I think that for stage 1, we really need to have a concrete “What are we solving” statement?

RPR: We're basically at time. JSC, is your item blocking stage one?

JSC:. I think it might help them. Give me 15 seconds. As point out possibly splitting APIs. I think that there might be, at least two APIs here. What about getting the unit system preferred by Locale and one about doing the actual conversion? conversion. I think that Problem statement might be refined to maybe focus on the former rather than both at the same time. time. That's all for me.

RPR: All right, YMD. Do you still want to ask for stage one for me,

YMD: for me? Yes, because I want actually to have time to investigate more in this proposal. However, if the people oppose the so it depends on that comes right.

RPR: So, YMD you're asking first stage one on the unit conversion conversion. there any objections to stage 1?

WH: What is the problem statement? What are we trying to do here?

YMD: So I think I already said about, like, how many users are needing it and we want to investigate which API and it will be switching the for them and we already discussed this in our like small group before he had like, yes, maybe we need to split like this proposed up to two proposals and those things and we want to be in stage 1 in order to give time in order to investigate those issue here and the problem Like there is many units for each Locale around the world. And as I said in the for, for, for the users, for many users are, do you want to, okay, Do this like know which units for each Locale and also convert to them

WH: It's not a very well-defined thing. So I'm skeptical. I’m not going to block stage one on it but I'm really dubious that shoe sizes should be part of ECMAScript.

RPR: All right, that's yes, right.

CM: I don't want to block work in this area, but I kind of object on the grounds that it’s really out of scope for what we do.

YSV: From from my perspective. I understand that you need stage one in order to have like work time to implement this but I would like to see a sharpened problem statement. Like what are we? Because there is no problem statement at the moment. And think ZB outlined very clearly, especially in his final comment to you. Why we don't want to just everything and that we do want to think about what we're exposing. I would really like to see a concrete….. I feel uncomfortable giving stage 1 because there is effectively no problem statement. Here. It is. Just we have this. We have some unknown application that is going to make use of this. So we are solving something for them. But there is no actual problem statement about what we're solving or what the goal of this is. Which makes it difficult to judge at later points in the proposal process, whether or not, we're achieving those goals that we set out to solve. So that makes me uncomfortable. I understand that for whatever internal politics reasons you may need stage 1 to investigate this. So I'm not going to block, but I would really like to see a clear problem statement in an update soon.

RPR: Okay, so it had a lot of statements that were going to see a very concrete problem statement that this does not block stage 1.

YMD: Okay, therefore, okay.

RPR: Congratulations. You have stage 1.

YMD: Okay. Thank you very much.

### Conclusion/Resolution

- Stage 1 - should have clear problem statement

## Intl.MessageFormat for Stage 1

Presenter: Eemeli Aro (EAO)

- [proposal](https://github.com/dminor/proposal-intl-messageformat/)
- [slides](https://docs.google.com/presentation/d/1oThTeL_n5-HAfmJTri-i8yU2YtHUvj9AakmWiyRGPlw/edit?usp=sharing)

EAO: Okay, so I'm presenting here in `Intl.MessageFormat` for stage 1, championed by me and by Dan Minor. We're really here talking about continuing a conversation that's been going for the better part of a decade, of making it easier to localize the web effectively by bringing in a central, native supported format for localization, for message formatting to JavaScript. What this proposal is doing specifically, it's introducing a native JavaScript message and resource parser and a message formatter for the MessageFormat 2 spec which is currently being developed under the Unicode Consortium, under a subgroup of the CLDR TC. That work has actively been going on for a bit over two years now, and was originally started from discussions in the ECMA-402 group and now it's continuing and a little bit coming back to specifically EcmaScript.

EAO: What we really want to do here is, is to build on and enhance existing workflow and systems for localization that exist, and provide a unifying platform for the various libraries that currently do exist for providing localization, which to a greater or lesser extent rely on their own specifications for message formatting or ones provided by others such as ICU MessageFormat, aka MessageFormat 1, Fluent, and a couple of others that are available and are used by more than one specific library.

EAO: So this presentation is going to go through the couple of the parts of the proposed very tentative API for this and for this and through this, hopefully present the various different aspects for why we consider these to be important. And hopefully also Show. Some of the value of y, this ought to be in the spec, rather than, as a separate library itself. Now, message format itself in pulled Intl.MessageFormat is being proposed so not exactly this. But and in told up message format is he is he being proposed as the only new primordial brought by this library? And now, if we start from how Intl interfaces usually start out with: you have a Constructor that takes in locale then a basket of options and then on the instance, you get some methods such as a formatting method before taking a message and, you know, producing a string. Well, then you get the result of options worker past. So if we start looking at this table apart, I am going to present to you what all goes into this and how we can we can make this whole of message format, which is a rather wide scope really to have minimal impact on JavaScript itself.

EAO: If we start from the message part, if we have just a message, how do we format that? So really, let's identify that we have two different parts. We have the sort of data of the message, a data model that comes from a source syntax. “Hello { $ Place !}” then we have the data that we combining this with saying that the place is the world, so we could know end up with a formatted "hello world" message. So we need to split, or we ought to split that message into two different parts that are coming into this whole Enterprise, the message that. The active values that are being used there. And really, I mean, honestly, the message is independent of runtime stuff. So it ought to go into the constructor.

EAO: Now, going deeper into this, we ought to recognize that the message data is almost always- it's not one message at a time that we ever had in our localization system. We have a bunch or a group or a resource of message. That we are working with. So, to recognize that and to also keep the API surface here minimal, rather than building the interface, the constructor on a single message. Let's build it around a resource of messages and this then does require that in the formatting we identify the message that we're bringing in. And here, this is an aspect that is different from practically all existing Intl APIs because here asking for the user effectively to bring that data rather than relying on data being provided by the environment and that brings in some concerns that we're going to get into a bit later. And here in particular, when we considering. What is this message resource thing? We ought to recognize one reason, but To bring this into JavaScript itself, is that we ought to be able to represent a resource with a string representation of it that is then parsed into a structure. And this is currently being done by various localization libraries so that they need to provide a JavaScript parser for whatever representation of messages that they use into the runtime, and then run that on the on the data and go from there. So it's could be made cheaper both in terms of byte-size as well as execution time. And this means that the the API that we're proposing here allows for the message resource to be provided as a, you know, readily constructed object but also as a string. The constructed form there will then be relying on or enabling existing localization systems to effectively parse their own format and to from that format provide a message resource structure and then the duress of the APIs, a unifying unifying runtime for what were they doing: message formatter. And now, as a detail here, that the message resource structure doesn't necessarily need to be flat, but it might be a hierarchical object,, so we ought to Rather than message-id have a message path parameter in the format to address that.

EAO: Now to consider another really important feature, Is that so far, a lot of the existing structures of That lead to the message. Formatting libraries have this expectation of formatting messages to be strings. And we honestly don't have this expectation in the in the web world where we aren't just taking a string and popping it into content elsewhere, but very, very often. We are plopping it within for example HTML or other structures that require some of the variables coming in to be already complex elements. So, the output to be complex into many of the INTL apis has already provided formatToParts type of method for this, but that doesn't actually map well to this structure, because the formatting is - the parts are not necessarily string content that they would have. So instead of a format method, what we proposing here is, I resolve message method that returns a resolve to message. We're going to get into what that means later. And now also another aspect in which We are differing from how Intl interfaces currently mostly do, is that because message format, doesn't really bring much data by itself to intl, to JavaScript, but rather, it could allows a new way of combining the power of different parts of Intl already, and because we have users that are bringing in their own data, there's way more places where mistakes can be made. And now this is usually handled of course by throwing errors. But in the case of localization, we do want to be able to provide the best possible experience for the user to not throw errors. Unless we really, really need to. And this means that rather than throwing errors. We always return value. Even some sort of a fallback representation of the message and provide an error Handler for this, for catching or doing dealing with the errors as necessary. Now, this is effectively the API that we're proposing for the INTL dot message format object and it's possible, course, to do also provide a format method there. The polyfill for that is effectively in its entirety there on the right. So whether that ought to be included or not, this is a seperate concern.

EAO: Now to dive into a little bit. What is this? resolved message that is mentioned on? What is that really doing? And that's it's a message value or it's extends what we're calling a message value. And it contains an iteration value. That's an iteration of other message values, which then can themselves be stringified and contain data, for example, about the Locale and otherwise. Now the message values themselves would be represented by plain objects, so we would not need to - so the interface is here are just interfaces for plain objects rather than any new primordial. They would include a type o to identify these. of And they would be provided, for example, for the existing values supported by INTL such as numbers, dates, all sorts of things in order to each of those to be able to Incapacitate, the message value. That is the value. The options, as well as providing a two parts sort of, a method for getting the formatted Parts, representation, literal part of our message, other things that I explicitly, In the source message like the hello world example, I showed you, hello comma space. There is a message literal. That would be the presenter is the message literal would represent that in the in the formatted output. And here again, another possible thing that can show up as a message value is a message fallback which there to allow for this sort of partial failure of the message of the of the resolution and formatting of a message. And this allows us to have a way, if a part of a message formatting fails. We can represent that - we can provide the best possible representation of the message otherwise.

EAO: Now to briefly also touch on the message formatter functions, which is one of the things that ought to go into the message options at the start of the thing in the Constructor and these provide a way to handle different sorts of values. Some of these such as number, for instance, would be provided natively by the spec, but others could be defined by users themselves for custom inputs, and these allow for, the example here, You ran some meters for that. ‘Some meters’ be formatted according to the best possible representation for that, that we can provide the syntax examples here, of course are very much temporary and under development as we are finalizing that work in the message format v2 working group.

EAO: Now, wrapping up. When you put all of the preceding together. This is how effectively it would kind look like you would have a resource a strength. So Intl.messageFormat takes no opinion on how do you get the string through to be available under the scope of the Constructor. But it would contain messages such as ‘new_notifications’. That in this case. It's It's a plural value selector base ten, some count of notifications. And then for different cases, would provide different messages and then you would first call the, the instance, there after constructing the message format. This is called a result message method on it providing whatever data that you need and then you get the response, the resolved message that you could then for instance stringify with to stream.

EAO: Now there are couple of constraints, still because this is we're not implementing something that is ready. We're continuing work, that is ongoing in the Unicode Consortium and here hopefully in TC39. So the biggest thing is that we are it is likely that the message format 2.0, the very first specification, which ought to be coming out in some number of months will only define a single message syntax in parallel with this, we're working on getting the message resource syntaxes specified under Unicode. So this will be the Intl.MessageFormat will depend on both of these. And then there's some details of the message specification that are still a little bit uncertain and may affect some of the details of the JavaScript level API. they are in such as message pattern elements such as the literals and variable references and And so on, these might include something like explicitly representing something like display or markup element such as saying that here. This part of the message ought to be a link and the link should point to this URL, for instance, and as a slight extension of this, the exact extensibility extension points for the message from up specification are Completely settled yet. So that much still develop.

EAO: and yeah, the the agenda includes a link to the proposal. the a lot of the this work has been going on the Unicode message. for my working group. There's a polyfill available for effectively almost the this version of the spec but without the syntax parsing because that's not there yet. Yet. And I also collected here, a couple of links to some of the prior discussions within well in 2013 and 14. On the the wiki ecmascript archive you can find information there and from 2016 to 2019, some of the discussion was happening under one of the issues in under the Ecma 402 and from there it was effectively spun off into the Unicode working group but that's my presentation and at the end of this, hopefully looking for stage 1, advancement for this happy to take any questions that you might have.

CM: Without rendering any opinion on the merits of this specific proposal, which generally seems fine, I'm very confused. And this is one of those things that happens when you have a generic term that is used in a bunch of different subject domains, but I'm very confused by the use of the word "message". Because in my world this is not a message. This is a piece of text. In the internationalization world, perhaps these things are called messages, but in the context of the overall programming system that JavaScript is, I'm just very, very confused by that and it really threw me. I don't know that there's necessarily even anything that can be done about it, but I'm at least tossing this out in hopes that some more domain-specific scoping of the terminology might be possible.

EAO: Okay, this is affecting. I mean prior versions of this proposal have been referring to this as Intl.MessageFormat for I think like, like eight or nine years.

CM: That's a conversation that has been going on within the community of folks doing internationalization. But now it's being surfaced into a context which is doing lots and lots of different things of which internationalization is one component and those of us who are not doing internationalization find it a little jarring to discover that you have colonized a particular word that a lot of us use to mean different things.

EAO: Perfect. As I said, point taken very much in if they are alternative or better solutions for the, for the naming of this would be interested to bikeshed. The proposal repository, of course, is open for that one concern to take into account here is that we're not looking just with this proposal with this to, to be formatting strings full text, but possibly other sorts of constructs as well. That would then be included as well, like user interfaces that would include not just texting from professors but graphical interfaces and voice interfaces as well.

CM: That's a very good point. I think the underlying key thing there is that this is something which is being exposed to a human user, as are a lot of the issues you're dealing with, the things that internationalization deals with. But a lot of other domains that talk about “messaging” are really talking about, for example, one computer talking to another computer or one piece of a system talking to another piece of the system and these uses just don't intersect with this at all. And which is why I found the word “message” kind of overbroad in this usage.

RPR: Okay. So what, let's roll. think? EAO has already said they are willing to rename.

USA: Yeah. Thank you, EAO. One notable example that I wanted to mention is Segmenter, which is an API that we ship which, which used to be called break iterator previously, but TC39 decided that segment was a more fitting name. So that's always an option.

RPR: all right, and then so we got some messages of support and they no need to talk from JWK and LCA, and I think as well. Do you want to talk more rational?

USA: Maybe just mention that the it's it's, it might not be obvious just from the presentation or from the name, but this is one of the most important pieces of the puzzle of internationalization. And there's something that the Champions have worked very hard on so I am really happy to see this coming to stage one.

RPR: JSC with another message of support

JSC: Yeah, I totally support this with regards to chips Point real quick. Chips point about message being ambiguous. This could be solved always qualifying message in like messaging to developers about this proposal like always calling it. Make international message or something like that, but that might be a little wordy we could make bike shed this later. Just a thought. I think it was. I think the naming is important because message is very overloaded in our discourse about the language, but I very support this proposal. Encode,

EAO: Of course, in code this is always called Intl.MessageFormat. So that provides at least a little bit of context.

RPR: And Ramallah is also need to talk since it's an important use case, for internationalization, another plus 1. And then Kevin Gibbons.

KG: Yeah, I'm fine with this going to stage 1, but before going to stage two, I would like it to be made more clear why it is important that this be in the language itself and cannot just be like a templating engine library. There are already many other templating engines that many people use for all sorts of things, and you know, it's nice to have standard tools, but it doesn't seem like any of this is fundamentally ‘language-y’ rather than ‘library-y’. Perhaps there is something about it that makes it really need to be in the language, or perhaps it is very common and therefore makes sense to standardize. Although I take it that it's not very common yet seeing it as it's still being designed. So I just like that to be laid out better before stage 2. I’m fine with it going to stage 1.

EAO: We'll do our utmost to improve the communication on this one. We've tried to improve it during the past weeks as we've received similar feedback as this. It's challenging, having been on the inside of working on this for so long to realize that. Will definitely improve on that.

RPR: All right, so we're at the end of the key of this is a RCA, has information.

RCA: Well, I was just sharing some data from npm a little bit to answer the library argument and, and they are trying or people are trying to solve this message format for a long time using libraries. And at this point, we have around five million downloads of the most famous internationalization libraries that try to solve these cases. Meaning that I think that it's proof that this is an important use case. It's really valuable for the language and for internationalization itself.

RPR: All right. Thank you. So the queue is empty, quite a few messages support. Would you like to ask for stage 1?

EAO: Yes, please.

RPR: Alright. Any objections to stage one? … No objections. Congratulations. You have stage 1. Thank you very much.

All right, good. Well, it's always good to hear lots of strong messages of support for a proposal.

### Conclusion/Resolution

- Stage 1

## New integrity level

Presenter: Jack Works (JWK)

- [proposal](https://github.com/tc39/proposal-limited-arraybuffer/issues/15)
- [slides](https://docs.google.com/presentation/d/1H0_eShe6JW0iKwHrG_TjdYRyrlGJF58g8rYt65bWiS0/edit?usp=sharing)

JWK: First of all, let's call this "stabilize" as a temporary term. And let me introduce the background of this, and I also want to mention, it's not a proposal yet. When developing the idea of the _limited array buffer_ proposal, and _read only collections_. We have a discussion about maybe we should add a new Integrity level that's applied to all data structures like Map, Set, Date, and ArrayBuffer. JHD proposed that maybe we can add a new integrity level and I think about that idea. I think it's better to have a discussion with the committee to see if this is the correct way to go.

JWK: There are some possible ways to achieve this. The first one is to have a new symbol based protocol called `Symbol.stabilize` that's appears on all built-in data structures like Map and Regex. If you call Object.stabilize(), it will call that symbol-function and freeze the data structure. As you can see in an example, after I freeze, the map can no longer be changed. And if I stabilize the ArrayBuffer, we cannot modify any contents of the UInt8Array. Also for regex, it prevents the "compile()" method of regex.

JWK: The suggested semantics here is we should freeze the meaningful parts that made up this data structure. For example, all the items in a map, all elements of an array, or the `lastIndex` of the regex objects (when you call `exec`, it will change to push the state machine forward). We have another choice. That's only caring about internal slots. This is only for the built-ins. To make it a symbol-based protocol means that userland objects can also join this protocol. As you can see I can define a new class, oh this code example is not updated Yet. I can define the `Symbol.stabilize` to set a flag in the private field. And if I try to modify this item it will be an error.

JWK: If we choose not to generalize this mechanism, we can also have another way. This means, I think we should review all JavaScript built-in objects case-by-case, like what's _Limited ArrayBuffer_ proposal, and the _read-only collections_ proposal did. But this way, we will not be able to have a unified API for developers to freeze their data structures.
If we choose way 1, this is how we deal with the built-in data structures. First of all, all primitive and boxed primitives are already immutable. So they're good. For array, map and set, if it's stabilized and we will refuse writes to its contents. For example, you cannot change the date value of a Date. For proxy, it just does the symbol lookup by [[Get]].
For a very unfortunate reason, we have to consider the host integration. For example, if an ArrayBuffer is used as the memory of the WebAssembly instance. It's should not be able to be stabilized (well that depends on the host). Otherwise, hosts might forget/bypass the Integrity we've set on the ArrayBuffer and accidentally write into the ArrayBuffer.
After the discussion with MM, we think this mechanism should be able to opt out, which means you can declare your ArrayBuffer can never be stabilized. This is permanent. You cannot opt-in again. If we don’t have this, we need to have a host hook for it.
As you can see in the code example, if you get the WebAssembly buffer, you cannot stabilize it. It's will always be writable. This is just an example of how the host might integrate with this new idea. And you can also manually opt-out.
And about the original proposals, I think there are still useful but it's not directly related to this new Integrity level and I think it's not possible to make a unified protocol for those. I still want to develop those proposals at their own pace.
I want to ask the committee which roads are the better way to go.
Should we have a new symbol-based protocol like this or we just case-by-case review those things? Are there any questions?

WH: What is the relationship between `stabilize` and `freeze`?

JWK: “stabilize” is to make the data structure immutable, which means, let's take the map as an example, if you stabilize a map, you cannot call “set” or “delete” on it, but if you “freeze” a map, you can still change the contents in the map, the map object itself, you cannot define new properties on it. They are two different semantics.

WH: Okay, can you stabilize a Frozen map?

JWK: Yes, you can do both.

WH: But wouldn’t you get an error because stabilize writes to a property which is frozen? In a later slide you have stabilize setting a flag saying that it's stabilized, but wouldn't that not be allowed because it's frozen?

JWK: Let me check the notes. I did not get them.

RPR: It was a private field. So the fact that it's frozen does not prevent stabilize from updating,

WH: So stabilize is kind of freezing the private fields?

JWK: No because that's it will be dangerous. This mechanism must be opt-in. Otherwise you can take an objects and the freeze it private fields. It harm the isolation of the class.

WH: Yeah, I meant conceptually.

SYG: This strikes me as - so Integrity levels right now are kind of involve implementation paths in the runtime. And this smells like the wrong trade-off to me to have another Integrity level for some guarantee that you want that may sometimes call a user code protocol, like this smells like the wrong trade-off to me.

JWK: This is this is different than freeze or seal.. Those are enforced by the engine, but we cannot enforce this integrity level because the interpretation of what is “meaningful” for of the data structure is depend on human.

SYG: and that leads into another point, which that is a counter argument for having this as a new broad Integrity level that applies to all.

JWK: Yeah

SYG: I think that pretty strongly argues against that I have to internalize exactly what still stabilization means on a project basis that yeah, that doesn't seem like there should be one name that seems to say there should be a unified. Semantics for it. Yeah, that's basically my second point is I see the, the desire and the attractiveness of freezing the “contents” here. Whatever that may mean for a particular object and the and how useful it is for read only collections. It seems very much like premature generalization to me to have this apply to all objects in JavaScript.

JWK: It's not magically applied to all objects. You must use the symbol to opt in. So I guss you support the second way?

SYG: Please remind me what the second way is again.

JWK: We review all built-in classes to see if they can be be stabilized.

SYG: You still used the word "stabilize". I'm not sure what that means. You want to still have a language wide protocol that some subset of objects opt into or are you suggesting something ad-hoc?

JWK: Yes, ad-hoc. For example, Date might have a method called freeze and some other objects do not.

SYG: Yes. I support the second way, I think there is probably a sensible thing with the more or less unify semantics for say all collections, but to having to squint and say Date is, in fact, a one-element collection in this technical way, that doesn't seem like something want.

JWK: So the Date has internal slots, you can change the dates of a Date that's why I may need to freeze it.

SYG: That's what I mean by squint. Right? And I want to caution against [interrupted] say again?

JWK: ???

SYG: Why do you need to do that though? But in okay, so before that question, I forgot. There was a piece I wanted to say about internal slots. I want to caution strongly against having a new Integrity level or something like this that operates on internal slots. Internal slots are a spec fiction and if you have a lot of semantics that depend on internal slots now engines and other implementations that are not one-to-one implementations of the spec would have to do a lot of auditing work and review work to figure out. Yeah, like that's not going to that's not going to be good for software quality. So I would strongly argue against just doing a lot of stuff on internal slots.

JWK: The way one is not magically freezing internal slots; we have to specify how to ‘freeze’ this kind of object within the steps of the symbol method. So it's not a dangerous entrance to freeze private fields or internal slots without the opt-in.

SYG: I don't understand that responds to the point of not using internal slots.

JWK: It's just now, that those objects have their status are stored in the internal slots. I'm not trying to materialize the internal slots.

SYG: That's not what I was saying either. I'm saying internal slots despite not being materialized these semantics that are specified using internal slots are what's implemented without a one-to-one correspondence of internal slot. Which means if you put more semantics that are implied by certain operations on internal slots. There's a lot more mental mapping that needs to happen to see why if I freeze this internal slot in this way. What do I have to change in code to guarantee that and that kind of complexity I think can compound with internal slots because the internal representation of say, a map in a JavaScript engine is very different from spec slots

JWK: Yeah, I won't do that. That's not the goal of the way one.

SYG: Okay, I think so. I think I've made myself clear on these points, we can move on.

MAH: Yeah, that means not really a question about it. It doesn't have to be like you can specify it. However want. You might be since simply setting a new stabilized flag in I know in a slot that is checked before any operation that we have before we have been mutating the other slots. It doesn't have to be freezing the content of slots obviously,

SYG: but you want to do something for the built-ins, right?

MAH: I'm talking about the built in a building My add a new slot that saves whether the user code has called stabilized, then checks the value of that slot before doing any operations that we have mutated other slots.

SYG: That's okay. okay. Thank you.

YSV: [from queue] plus one. [not sure to what]

JWK: It seems like this is the requirement of SES. In SES today they have a non-standardized function called ‘harden’. it will recursively call Object.freeze, but as you can see, you cannot freeze a map today, so they need a stronger thing like the read-only collections and the limited ArrayBuffer to make everything immutable and pass them around. If we have a unified protocol, then, SES can handle it much more simpler. They just need to call the Object.stabilized, and not need to be aware of what kind of object it is.

JHX: [second item] Do read only collections really need this? My question is about to do because this probably I remember read-only methods have three methods, The read-only View and diverge. It seems they do not need that. If seems only the snapshot might You start. Am I correct? good question, but not the author of this read-only collection proposal. So, and I cannot answer for them.

MM: I can answer. JHX is correct. The stabilize addresses the needs of snapshot. Diverge and readOnlyView would not be aided by this proposal.

JWK: read-only, [?], the snapshot is just like we used the second way that (add them) case by case.

MM: That's right. That's correct. Read-only collections as a proposal independent of this would just be an example of JWK's second way. And the point that SYG was making about premature generalization, the second way is exactly the option of not generalizing. Of just figuring out on a case-by-case basis. What are the stabilization API meaningful for collection?

JHX: I see, thank you.

PHE: First I just want to apologize. I had this. I thought this was on the agenda for tomorrow, so I didn't have a chance to kind of organize my notes as I had hoped to. So I may be a little more scattered than I wish. In general, Moddable is strongly in support of exploring this direction. As some of you may recall, we effectively implement, an integrity level, that's even stronger than this to be able for out embedded work to be able to put objects into ROM where they truly immutable in ways that the hardware enforces, not just the engine and formalizing that mechanism makes it much easier for developers to talk about and work with as a consequence, We've been working with Agoric on SES and adopting our engine to handle SES as a result of that we have capability now, that is the, the moral equivalent of the stabilized thats proposed here that we've worked through the behavior for all the built-ins. And we can we can share a kind of the notes on those separately on exactly what it affects and what it does affect. Our feeling based on our experience. Is that the two ways that JWK has outlined, the second one is the right way to go that the protocol based approach. I don't think we can understand exactly how How that would be be safely applied either and you do get into some opt-in problems. Like the example that JWK gives actually hardens an internal private field which are the contents of an internal private field, which is not in fact, the definition what stabilizes, it's not supposed to be recursive and deep. So letting objects kind of apply their own definition of stabilized seems dangerous, somewhere between confusing dangerous, so we wouldn't we wouldn't suggest that. In terms of SYG's questions about the content or concerns about the complexity of implementing this in the engine. That's fair. It's real. We in the end, didn't find it to be too bad. I fully acknowledge XS is not quite the same order of magnitude as V8, but, but we've actually found it to be pretty straightforward to do. And clearly if this proposal would move forward, something test262 would help a great deal would help a great deal with that as well. So, we think this is a good direction. There's definitely some challenges to work through. Another point that wasn't directly. by JWK’s notes, was a way that we've come to think about what should be able to be stabilized or not. So for example, promises is an interesting question we think. And, you know, JHD raised written opinion on one of the discussions that promises and everything should be frozen and In fact, we originally thought the same and through discussions with MM have come to change that. And the reason is that that promises really aren't about data they are a control structure. There are other things that are control structures like iterators and generators and those we don't think those should be stabilized. And our words should be stabilized and MM has made a strong case that the same is true of WeakRefs and WeakSets. It's clearly something for, for deeper discussion, but I think there is, we found that the notion of control structures objects versus control structures is a meaningful way to think about what should allowed to be stabilized what shouldnt. So anyway.

RPR: Thank you. Yeah, I think I just point on Peter.

MAH: I think from what I understand the difference between option one and option two is whether there is a language provided synchronization point on how an object should be asked to stabilize itself. So option one wouldn't forcibly stabilize the objects. It would just say that if you want to ask the object to stabilize it, it you use a well-known well-known symbol for that.

PH: right, but would not that - but in the example that was given the object is then - there's two things. I think there's, giving the object, the option to opt out, you know, to refuse to be stabilized. And I think we support that, I think there's there's good reasons for that. think the second part though, is giving the ability to perform the stabilization itself. And by doing that, you give the object the ability to change the semantics of what stabilized means for and that, that means. Then I think to SYG’s point. that means then that it's not predictable. What's going to happen and for something it's supposed to provide guarantees about immutability. T something that could be used, you know, for for to be able to safely pass an object around and know that it won't be modified. That's not useful like that breaks some of the core uses of that.

MAH: Right, you have to trust that object. You asked to stabilize will in fact do that properly.

PH: Correct. And That seems that seems like a weak guarantee.

MAH: But I don't believe there is any other way.

PH: Maybe. It's good for discussion.

JHX: Oh, yeah, my question is about should just stabilize also freeze storage. It seems the stabilized little bit like a real freeze. I know that the for is only deal with the object properties, but I'm not sure but I feel that. From the high level it seems that people may want to freeze all the aspects of an object. So what is it? So this is just an idea that may be stabilized. Should also freeze it’s object.

JWK: Yeah, if we go through the way one, if this, depends on how we interpret the what says the meaningful data parts. But in the previous discussion, it seems like the committee prefers the way 2. So I won't consider the way 1 too much.

JWK: And then I have another question for the committee. As you can see, in the limited ArrayBuffer proposal, when I presented this to the committee, I heard the request that I should try to make this proposal to match the API shape of the read-only collections proposal and I actually did that. For example, there is a `.snapshot()` and there is a `.readOnlyView()` which also appears in the read-only collections proposal. You can see snapshots, diverge, and read-only views. If we are going all the way through the way 2 to review all classes case by case. Should we try to make those APIs look similar?

KKL: I wanted to clarify a motivation coming from a different angle for this proposal or something like it. In working with folks in the community for hardened JavaScript and SES, one of the problems that we ran into was with transferring tamper-proof typed arrays. And the funny thing about typed arrays is that… So to be clear, we have a function called Harden that transitively, freezes, the surface of an object and its properties. And prototypes and the purpose of this is to prepare to prevent all user of that object from tampering with its API. And in the end there by interfere with another user of the same object. And This works great for everything, except for typed arrays, because when you reach a typed array, in that transitive graph anywhere, when you freeze it, it will throw an exception. Because freeze throws an exception on typed arrays and is unfortunate because typed arrays sort of a lightweight, but by of contrast, a map or a set when frozen works fine; its content remains mutable. And we want to be able to do the same thing because Actually, a typed array is a collection. And so what, this, what, this protocol, what a protocol for stabilization would afford us as an ability to instead of freezing typed arrays, to make them superficially tamper-proof and usable in the same way as other collections.

JWK: But a TA isn't a data structure by itself. It's a view to the underlying buffer.

KKL: That's true.

JWK: In the limited ArrayBuffer proposal, I prepared some methods that useful in this case. It's might be might not be included the new Integrity topic, but I think, for example, the read-only view, I think that's useful for the SES usage.

KKL: A read-only view would not be an in-place tamper proofing, it would require you to build a new object graph, if it transitively, reached anything that needed to be transformed into a read-only view.

JWK: Yes. if that's not enough, we it's possible to change the API to make the view read-only in place, instead of returning new typed array.

KKL: That would be desirable for the purposes. I'm speaking of. Thank you.

RPR: All right, the queue is now empty.

JWK: Is there any more questions? [silence] Okay, so I guess we will choose option 2, and I will try to review those classes case by case and try to make them have a similar API.
I don't know, that might be a new proposal. And when we are ready, I will bring that to the committee in future.

### Conclusion/Resolution

- No formal advancement, but committee expresses a preference for doing this in an ad-hoc way

## Minor decorators followups

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators)
- [slides](https://slides.com/pzuraq/decorators-for-stage-3-2022-03)

KHG: So there's just a few issues that have been brought that people are concerned about. So the first one here is the naming of "isPrivate" and "isStatic" on the context object for decorators. These are just two booleans that allow people to understand whether or not the value being decorated, is a private value or is a static value or both. So, as DD notes here, there's precedent for using "is" for functions, and not using “is” prefixed for values. I don't have a strong opinion here. And as far as I understand, just based on all my context. There was not a particular reason to do this. Other than the fact that both static and private are keywords, but that wasn't a conscious design decision when we made this API decision. I think I just didn't realize that there was a naming precedent here. So I don't particularly have a strong opinion here. Does the committee, does anybody on the committee feel it should be one way or the other?

JSC: With t my developer hat on, I would strongly expect all boolean flags to have, no No, "is" prefix. would have been really surprised at properties named with is do not refer to predicate methods when using them from the options argument. I would prefer not to have Structuring like, have developers either. Not used. you know, `options.private`, or just rename the variables and destructuring like a `private: privateFlag`. The destructuring thing I think is way less important than matching developer expectations with regards to predicate naming.

KHG: Yeah, yeah. And for what it's worth, we have also always said that, you know, decorators usage patterns. Is they're authored by very few people and generally you only have a few of them overall and then they're used in many places. That's the whole point of meta programming in general, right? Is to, to be able to reduce amount of code. Anyways, so the point is the authoring experience can be a little bit less ideal, I think because it's just not as common to have to destructure these. And if you do, there are options for renaming them.

JSC: Just real quick. Are you also planning to talk about the parentheses after parenthesized expressions?

KHG: Yes, I have these open. I was just wanting to get through each topic before we moved on to the next ones.

KG: I did want to call out that this isn't just that there's a little bit of precedent; that there's an actual w3c TAG style guideline for the web platform that says don't use ‘is’ as a prefix for booleans. So I strongly support dropping the "is" prefix.

KHG: Okay. So yeah, is there any opposition to dropping the “is” prefix?

[silence]

KHG: Sounds like no.

RPR: Agreed.

KHG: So I'll take that as consensus then so I'll make that change the next issue.

KHG: So the next issue I came up with was kind of a quirk of the previous Babel implementation. I couldn't actually find a fully coherent spec or what the previous iterations agreed upon. But I knew there were when I adopted this proposal. I knew that there were lots of discussions around the syntax that was allowed in decorator expressions. And I also knew that because of a lot of considerations, we, the committee had decided upon having a very restricted set generally with an escape hatch so that the restricted set is you can, is described here. You can chain variables, you can have property access. You can't have basically anything else? No expressions you know with method calls in the chains, you can end that that chain of property accesses with a single function call method call, or you can just put whatever expression you want in parens and that's allowed. I wasn't there for the original discussion. So I'm not exactly sure what the constraints were for this decision. But one thing that the Babel parser currently does allow is calling the results of an expression that is in parentheses and like this example here (`@(foo)() class {}`). And when I was transcribing this back and updating it, I updated it to match Babel because that It was, again, the thing that I could find that was the most concrete from that time period. yeah, this does seem like a little bit - not exactly in line with what was originally described to me and it would be simpler, I think, to not allow it. So just wanted to see if anybody would. I see there's clarifying question So `a(B)` is not allowed `a.b` is allowed to do a Open Bracket, be you. I'd have to do like a The inside parentheses that is allowed.

JHX: If we ban this, how would you write that?

KHG: Yeah, so the way that you would write this is you would do `@((expr)())` because you can put any arbitrary expression inside parens. There are no restrictions inside parens. I have a good example here. To kind of document what is allowed and what is not allowed. And what we're not sure about yet.

JSC: I strongly support banning trailing parentheses after the arbitrary expression syntax. If developers want to call a function and use that as a decorator, they can just put that inside the original parentheses. Allowing trailing parentheses after the arbitrary expression parenthesized syntax would make parsing the topic reference from the pipe operator. Much more complicated if it's ‘@’ sign, like we decided yesterday, so I strongly The explained already use Use already as the topic says, that it says planning. This, it's a good mental model. I strongly support changing the spec to reflect the explainer.

WH: I just want to point out that this will be incompatible with the pipe operator anyway, even if you are going to restrict it this way, because the last allowed form is ambiguous with decorators.

RPR: Okay. Is there anything more you need on this KHG?

KHG: No, if nobody objects I'll take that as consensus to not allow this last form this and I'll update the spec to require this to be parenthesized.

JSC: Sorry, just to clarify. Are you banning the last five expressions in that block?

KHG: It would be banning this expression, and these are already banned.

JSC: Yeah, what about the? What about the very last one?

KHG: So, the last one, where your that's the next topic to talk about? Okay. Last one to talk about today, -

LCA: I've one more question about the this previous one. So WH said that the fourth item of the first allowed block would also interfere with the at as a topic reference for the pipe. If that is the case, and we want the pipe operator to use the apps, we would also need to ban this one, right?

JSC: I'm not sure why Waldemar thinks that the fourth one would be would interfere with the pipe operator insofar that parsing any expression in parentheses after an at sign. Would it only require it only requires checking if there is a class or function declaration following the merely following that for or not.

WH: We're treading on very thin ice here. In that case I don't understand the argument for banning the following parentheses.

JSC: To clarify that it would not make it, it would not make it impossible. It would make it more expensive because we will then have to ahead for any parentheses after the first parenthesized expression, following the at sign rather than only having to check right after only the parenthesized expression following the at sign. Does that make sense? Otherwise, we might have to bring in some cover grammars or something like that. Whereas right now, we don't need any cover grammars or whatever to distinguish between a decorator versus a function call on the topic.

KHG: I guess one other option would also be to disallow this for pipe in general, and require you to parentheses the at, if you want to, it involved with the pipe Champion, group probably would be strongly against that. I know TAB is against special casing that requires parenthization of the topic reference. Really. This isn't, it's not like this allowing. This makes it impossible to distinguish. It just makes it more expensive.

WH: Okay, I'm getting very uncomfortable with the overload of `@` between these two proposals.

KHG: All right, that's fair, but I don't think it matters for this proposal or this change. So I'll take it as consensus like I said before to continue with that path to ban this form.

WH: Yes, that's fine.

KHG: Okay. So the last one is, should we allow private fields in decorators? This is like a very not common use case. I can't think of a single time when anybody would really want to do this. But as JHD pointed out and few other people just seems odd to not allow it given we're allowing we're allowing any static, not dynamic expression like just public property name, so might well as allow private names. Is there any opposition to including this? [silence]

RPR: okay, so here's no response. Then we are including private names.

MM: I just wanted to interject a question. Is there anything non-obvious about the semantics of it? Is there anything about the semantics including private here? That we should be aware of?

KHG: Nope, they would generally work just like public Fields, it would access the value and then attempt to apply it as a decorator function. Just the same as a public value. It just would be accessing it on like if it was a static private field, it would be accessing it on the class, all the same restrictions around private Fields, apply here. You would still only be able to use the private field within the class where the private field was defined etcetera. okay,

KG: and in particular, you can already put a private field there, just by wrapping the whole method chain in parentheses. This just allows you to omit the parentheses.

MM: Okay, I'm satisfied. Thank you. Perfect.

WH: There's still, I believe, a conflict between using `@` for decorators and for pipeline operators for the cases of expressions in which we have infix non-reserved keywords.

KHG: so you're talking about pipelines versus decorators. Okay. So, like an example that I guess would be like just this like `@foo`, there are some places in the where I

WH: I’d need to look more at that, but there are some places in expressions where we have or will have an expression followed by a word. And if the expression is `@` then that starts to look like a decorator.

KHG: Fair enough. I think that's something to consider for the pipeline proposal or do you think that affects decorators?

WH: I think decorators should get the `@` and the pipeline operators should use some other sigil.

KHG: Well, I feel like that's not related to the topic at the moment. So I'm going to if allight. Could we schedule a discussion for that some other time?

WH: Sure.

KHG: The last thing I wanted to bring up here, was this point, which of people brought up of whether or not whitespace should be allowed between the at sign and the decorator itself. Currently we do allow white space. So any amount of white space could exist, there have been arguments for and against and I don't really have a strong opinion here.

WH: We allow white space between any two tokens, and `@` is a token.

KHG: My instinct would be to keep it as is, is there anybody who would like to change it?

SYG: Seems like extra work in the spec and in parsers and scanners to do the work of disallowing. So without a super compelling evidence to the reason to disallow. I would err on the side of allowing.

KG: +1 [allow whitespace]

KHG: All right, then I'm going to continue allowing whitespace. Doesn't seem like anybody really opposes that. Cool seems like everything.

RPR: All right yeah, that's been an excellent use of time KHG. Thank you. So that concludes all decorators for this meeting. Is that right?

KHG: Yep, those are all the open issues at the moment that I can think of.

### Conclusion/Resolution

- "isPrivate" and "isStatic" renamed to "private" and "static"

- @(expr)() will be disallowed
- @a.#b will be allowed
- whitespace after the `@` token will continue to be allowed (no change)

## Resizable buffers

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer)
- [slides](https://docs.google.com/presentation/d/1QBbEnfWn9QAn48J1SAm3l5xJARE5wcKt3MlTlcVKIek/edit?usp=sharing)

SYG: This is some normative updates I am asking consensus for, for the resizable buffers proposal or at least [issues] kind of surfaced by the resizable buffers proposal. There are two things. things. Number is, is the pull request on Ecma 262 number 2646, which is kind of surfaced by the implementation work during resizable buffers. Where we discovered some more weirdness unsurprisingly in typed array methods with the detached array checks. That might be a good opportunity to now take to make directionally consistent with previous changes we have made to detached checks around typed arrays and array buffers. And number two is an actual normative change in the resizable buffers proposal itself, a small one, maybe a short discussion as well, on what should typed array.prototype.subArray do with respect to length tracking this of these automatic length, tracking typed arrays.

SYG: So first, we'll talk about making detached array checks, directionally consistent previous changes to these detached checks. the first method will be talking about is TypedArray.prototype.set. For those unfamiliar. It is a method that has two overloads. Basically, one of them you can pass in an array like and then it assigns to the receiver typed array, element wise, the elements from this array-like. The second form is you can pass in another typed array and then similarly, it assigns element-wise the values of the elements of from the other typed array into the receiver. This will be entirely talking about the first Forum where typed array.prototype does set takes an array like. So, because it's an array-like and array-likes are just objects with a length and maybe elements, it is possible to have shenanigans like this where you have an array index getter, which then detaches the buffer that you are setting into. Currently, what happens is that if you detach the buffer in any elements getter, or in any kind of evil way like this during the iteration of the array-like when you're assigning with the receiver that is a typed array. We throw via a per-iteration detached check, so per iteration of the array-like where we are trying to take an element out and assign it into the receiver type of the array. We check if the buffer is detached and if it is we throw.

SYG: My position here is that this is no longer consistent with a change we made a couple years ago. I don't quite remember when but this is a change from RKG here selling who did a great work in wrangling, the different implementation behaviors finding out real world Behavior. But part of that work in #2208. We changed that. So, if we were to type a normal assignment of, you know, `...[0] = something`, and that typed array's backing buffer is detached, we changed that so that those assignments no longer throw. So my proposal here is to get rid of this per-iteration detached check on TA.prototype.set to be directionally consistent PR #2208. So concretely what this means is to use the ‘set’ abstract operation. And this is a screenshot of the spec text. Basically currently in the spec text of TypedArray.prototype.set, there's like manual inlining of typedarray logic to assign into the receiver typed array. I don't know why this is inline. Like it's that it didn't inline all of the logic, only some of the logic. My archaeology on that is that before #2208 the Set AO calls some internal method on exotic integer-indexed objects. And that implementation of that internal method of .set had a detached check. This was copy pasted and inlined into this method for whatever reason, instead of going through the set a 0, which a normal assignment would do. So when we changed #2208 to get rid of that detached check, of course, we didn't know it was partially inline somewhere else and this detached check remained. So this if you look at, if you look at it through that lens, this is just a bug that we've missed. So a nice outcome from this proposed change is that TypedArray.prototype.set comes pretty simple In the spec text in that. It's just you iterate the array like source. And then you set on the target type directly. So that is the first change that I am asking for consensus on. I would like to take these one at a time before continuing on to the next one. Any concerns about this change that I'm asking for.

[silence]

USA: You have an empty queue so far.

SYG: Okay, I will take that as a no concerns and that we are okay with getting rid of this detached check. This is an implementation change, that all major engines that I have tested - so xs, v8, spidermonkey, JSC would all have to change. There is as in all of these cases, a non zero risk of web compatibility, but I think is vanishingly small in this case. We're changing something that throws to something that doesn't doesn't throw and something that only manifests with code like this, which, I sincerely hope there's no legit stuff around like that. Okay, thank you for that.

SYG: Moving on to the next one. This is something noticed by KG, when I opened the issue for getting rid of the first detached check. KG noticed that typed array.prototype.sort, there is also a per iteration detached check. So every iteration where you call the passed-in user provided comparator, there is a per-iteration detached check. But it doesn't do anything, because the sort methods - TA.prototype.sort and array.prototype.sort, they first buffer the elements. So, they're all specced to read all the From array that they are sorting, put it into a buffered list and then sort that. So checking for detached doesn't do anything. Like you're not reading from the source type array anymore during the calls to the comparator function. And the proposal here is also up to get rid of that because it just doesn't do anything. Any concerns about that? I don't think I actually tested across implantations what they actually do, but I would imagine this is also something that we have to actually change.

[silence]

SYG: Okay, I will take silence as we are also okay with getting rid of this per iteration detached check.

USA: Yep

SYG: Moving on then to the second part, which is a normative change I'm asking for for TA.prototype.subarray for length tracking typed arrays. So a recap of what subarray does. So `subarray()`, unlike the other typed array methods, do not create a copy of the underlying buffer and a new typed array. `subarray()` creates a new typed array that is backed by the same buffer, meaning it creates a sub-window into the same arraybuffer. So, another quick recap for what a length tracking typed array is. A length-tracking typed array is that if you create a typed array with an undefined length and to be backed by a resizable buffer, that typed array, as part of the resizable buffers proposal, automatically tracks the length of the underlying array buffer. So, to combine these two, the question is: if the receiver typedarray is one of these length tracking arrays, should subarray begin where I pass in undefined as the SD end offset where I do not provide an end offset. Should this create a length-tracking typed array or a fixed-length typed array? So my mental model of what `subarray()` does is, you pass in these begin and end offsets? And then this subarray method doesn't do anything with typed arrays or array buffers, all this method does is it computes a new byte offset and a new length from begin and end, and it delegates everything else to a typed array constructor call of the same buffer with the new byte offset and the new length. And with this mental model, I think it makes the most sense that if `end` is undefined, we compute byte offset from past begin, but we don't do anything to - we do not compute a new length because there is no end, meaning we pass on undefined as the new length to the type director instructor and this means that, that form of the type of record structure creates a length, tracking typed array, which means subarray creates a length tracking typed array, if end is not passed. This is different than what the current spec says, the current spec draft says that if `end` is not passed, I think it gets computed to be like the actual length of the buffer at that time. So it creates a new fixed length typed array right now. And I'm proposing that if we were to not passing an end argument to sub-array that it creates length tracking typed arrays instead. Any discussion. I see there is a queue.

MAH: Yeah. So from what I understand you want to say that if n is not classified. it's assumed to be the end and it should track. What happens if end is specified as a negative number, which is suppose as I understand that we want to stop it at enough set from the end and now the end changes?

SYG: if `end` is passed in as a negative number, you compute the new length. from the length of the underlying buffer at the time of calling the subarray.

MAH: Right. So the tracking is really only if it's undefined. It's not because the default value for undefined is a “minus 0”.

SYG: Exactly, exactly. There are competing mental models here, right? Like that could be your mental model, that if end is undefined it actually means take a snapshot of the current and length and make me a new TypedArray with that. And after kind of thinking it through a mulling over it. I think my mental model is actually that you pass through the undefined. And that's the normative question to committee, which one seems to be the right Behavior here if end is undefined.

KM: Yeah, I guess I don't know. I would sort of expect whatever this does to just do the same thing as the Constructor does. When you pass the new byte offset. I may have missed because I was out.

SYG: Do you mean the new length divided offset is always passed.

KM: No, I'm saying the subarray. Yeah, the subarray should act as if you called .buffer, new TypedArray, whatever old type the rate that buffer byte offset.

SYG: Right, That is also my mental model and the only reason the current spec does not do that is because I didn't think that when I wrote it and I thought it, yeah, I just didn't think about it. That's all that,

KM: I guess, I guess. I suppose. I could imagine something where it gives you a different functionality, but I don't know if that's compelling. I would probably find that like weird. like you could imagine that it gives you an easier way to create a fixed window.

SYG: Yeah, right.

KM: I'm not convinced that's super meaningful or useful.

SYG: Right. This change that I am proposing means that if you want to make an actual fixed-length window, fixed to whatever size the current underlying resizable buffer is. You have to manually compute that from the current size and then pass that in explicitly, instead of just doing undefined. And again, that is in keeping with what you are to do, the TypedArray buffer. So yeah, that's also my feeling that we should align with the buffer constructor and we should probably do what we with the Constructor.

KM: Alternatively. We can also just provide that functionality, if somehow it comes up, the people really want that like I would like to pin a buffer. And I don't want to type this much stuff out. You can always like provide a fixed subarray so method or something that just assumes that if you don't pass the end option, it assumes the end is fixed. I guess. I don't know, but I just think it's more important that it's consistent. I think it would be weird for you to have to figure that out.

SYG: Agreed. This is really sloppiness on my part. When I wrote the Spec text.

MLS: So, what's the semantic if I create a sub-array with an undefined end, so it's basically going to track the original array, and then from that subarray I create one so that it's a subarray of the subarray that. What's the semantics for that second subarray?

SYG: So I think the mental model here is `end` is passed, if `end` is not undefined, you read the current byte lengths of the resizable buffer, and do whatever computation you were going to do on it as if it were a non-resizable buffer. So if you pass a negative thing to the second subarray, it'll just read whatever the current length of the buffer is and then compute the relative end from that. Because the first subarray is length tracking.

MLS: Okay, and then if the first subarray grows because the original subarray grows and they do another subarray. I then calculate at that point, the length of the original subarray.

SYG: Exactly.

MLS: Okay.

MAH: My mental model was that subarray captures the length when it's called, but then that wouldn't be consistent with the Constructor. I had to refresh my memory. Like the Constructor is able you provide if you don't provide a length, it automatically tracks.

SYG: That is correct. And only if the buffer you passed it is itself resizable or growable.

MAH: And so if you made it consistent, there would still be a way to create a pinned subview by being explicit on the end. Correct?

SYG: It's a little bit more typing, but it yeah, but it's it's consistent with what do in the constructor.

MAH: Thanks for clarifying.

KM: I mean for what it's worth. I guess it kind of implies to that, you know, you could do that. You could still have the shifting for you by just typing out the number two thing on the screen, right? You could always just do that if you wanted, wanted, you could there's except we subtract something that when you like, but, you know, you just write your new ties to real titrate up, offer by offset the beginning that wanted.

SYG: If we were to take the If we made subarray always return a fixed-length TypedArray, you could still get the shifting-things subarray by manually computing the byte offset. Is that what you're saying?

KM: That is correct. You have to do a bunch of other stuff where you have to, like, compute the byte offset. You have to get the other sub arrays offset and at your new.

SYG: All right, right. And you have to get, you have to pull out the element size of what kind of array it is, like integer.

MK: Exactly. Yeah. It's probably less ergonomic but it's hypothetically possible.

SYG: Right. And with that clarifying stuff answered hopefully, I am asking the consensus on the proposal to make subarray with `end` not passed in create length-tracking subarrays.

[call for support]

KM: And I just think it's more intuitive than the other things because it matches what the constructor does. Sorry, the new behavior is more consistent with the constructor than the other behavior and it generally is a more ergonomic way to get, the the the tracking view that otherwise would be pretty inconvenient where it's getting fixed view, is only just asking for the length, you just explicitly past the end and you're done.

### Conclusion/Resolution

Removing the per-iteration detached checks in the existing .set and .sort In the resizable buffers proposal, changing the behavior of subarray when `end` is undefined so that it creates a length-tracking subarray, for consistency with the constructor

## Change array by copy

Presenter: Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-change-array-by-copy)
- [slides](https://www.dropbox.com/s/5rabrx387snkbfn/change_array_by_copy_at_tc39_march_2022.pdf?dl=0)

ACE: Great to be back here again. I'm presenting Change Array by Copy. The intention today is to hopefully get consensus for entering stage 3, which would be great. It's been almost a year since Robin presented this for stage one.

ACE: So, as usual people may be sick of seeing this slide, but just want to always repeat the initial thing that we were trying to do right back at the beginning. That was taking the work that was happening for records and tuples and seeing that the interface for Tuple isn't going to mirror arrays or TypedArrays due to the fact that it's immutable. Or more to the point, if it did mirror. So, for example, I met at, like, sort or reverse was also there, it would have the same name but a very different semantics of being non-mutating. Some people were okay with that, but we thought that it would probably be confusing in the language to have a sort method in one place be non-mutating, then be mutating somewhere else, and that would make the language harder for people to understand. So, what you want to do is find an interface that would work across tuples, arrays and typed arrays. By growing the kind of existing interface on array and typed array to include more of these immutable methods. So this nicely kind of splits apart that bit of work from the record and tuple proposal because we can explore this API looking at it in the context of arrays and then whatever decisions we take there, that'll just be what the Tuple prototype looks like, is the intention. We don't expect there to be more design work for the record and tuple proposal. Specifically for what methods are on Tuple.prototype. And that also works well for web compatibility because there's more risk - there's a kind of infinitely more risk of there being a web compatibility problem with array.prototype. We kind of could have called the methods on Tuple.prototype, whatever we wanted because it'd be this new space, but then we could have accidentally chosen something that turned out in the future to not work on array. So it's kind of a smoother Journey. Seeing if we can learn things on array, make sure there's no web compact issues, and then Tuple following behind.

ACE: So, reminder of what we talked about back in October, I presented how the proposal was reduced in size from instead of taking all ten mutating methods and having non-mutating versions of them, we reduced that to just the four important ones that we think give you everything you'd actually need in practice. And also, we said that the names are still being decided and a call for any feedback that people had on that.

ACE: Well, the good news is we have decided on names. So we've gone for that last column there, with the `to` prefix with the past tense, so `toReversed`, `toSorted`, and `toSpliced`. So that the past tense, we think has good precedent in other languages. So if you looked at Java, Kotlin, Python, and Swift all have this idea, they all have built-in APIs in their standard library that `sort` is mutating and `sorted` is the non-mutating one, setting a good precedent if people are coming from those languages, this kind of naming should be recognizable to them. The `to` prefix, we think also has good precedent in the language. We've got `toPrimitive` and `toString`. It's not exactly the same thing here, but as they're very similar styles of methods that are non-mutating. You're trying to get a new view on the value and then in the web APIs, you've got `toJSON`. So we think the `to` prefixes is well motivated and it helps solve an issue where if we didn't have the prefix Bradley(?) raise the could be confusing when you're talking about "I sorted an array". If you're talking about the sort method in past tense or you're you're talking about normatively, you know, actual nominal sorted method. So, having the prefix removes any ambiguity there.

ACE: And then there's the `with`, which is its own kind of new method. It's not a non mutating variant of a mutating one. Instead, it can be seen as the non mutating version of the set index access. And we think that's got good precedent with that naming in that it matches Temporal, which uses `with` as saying I want to take this existing value that I have. And now I want to create a copy of it, but there's one part of it that I want to change. So again, that should be hoping that, you know, sits well with in the rest of language.

ACE: as part of requesting stage 3, we do have a complete specification for perusal online. One thing I want to go over, is a few things about the specification, people might not be aware of, they just saw this proposal in a list and they didn't have a chance to review it. I want to make sure I call out some of the more 'surprising' parts of it that you probably wouldn't expect just from reading the title of the proposal. So, the first one, which felt more controversial when we spoke about this a year ago, but after SYG's presentation from a few days ago on a similar topic about @@species, it seems like there's very little controversy around this. Now these methods don't consult `Symbol.species`. You always get back the built-in, original array, or TypedArray, depending on what your original receiver is based on. Or if you're calling an array method, using an array as the receiver, you'll always get back an array.

ACE: The second one, is that holes are not preserved. So what I mean by this is that we don't do anything special as we've kind of copying the array. There's no special Branch for when that index that we've got to is actually a hole, there's no property, we just read that index. So, most of the time that means just seeing undefined though, of course, in the kind of pathological situation where people have written to the Prototype then you know, you would also read through and get the value from the prototype. But most of the time, it just means holes become undefined.

ACE: Third, We have one thing that was discussed is the return type of `toSpliced`. For `sort` and `reverse` the return type is simple. Like if I call `sort`, I would normally get back the original receiver but now sorted. Same for `reverse`. Whereas `splice`, when you call `splice` the array you get back, even though it has the same type, but that array, you're getting back, isn't a mutated receiver. It's the array of deleted items or an empty array of what was deleted. And those semantics don't map across to a non-mutating version of `splice` because the whole reason is you're creating a copy with these two methods, so the thing it kind of needs to return to you is that copy, otherwise there's no way to access that copy. So it would also not make any sense. In terms of you can also insert things with splice. And so if it only returned the deleted things effectively, it would just be another form of slice just with slightly different semantics on whether you're passing through an offset or a an actual end index or an offset. so, we kind of discussed this and we think that it won't be confusing and that likes to talk, mostly true. Just talking to developers about out what their expectations are. We think that people will not be surprised by the behavior of `toSpliced` returning a copy of the receiver with the splice performed, and if they want to instead get the things which are quote deleted, but haven't been deleted because this is not mutated, they can always just call `slice` back on the original non-mutated, array to kind of get what things they "deleted".

ACE: Lastly, `with` indexing. So, there's two kinds of things about it, that we've talked about and decided. One is that it uses the abstract operation `toIntegerOrInfinity` just like all other array methods do. so this does mean, you can do all your loosely dynamically typed, lovely things of passing in strings that are obviously indexes and they'll be no exception, `with` will just coerce that to an integer index. So in my example here, if I have my array, `[1, 99, 3]` if I do `with(1, 2)` then I'm saying index, one, is now replaced with two. `with` with 1.55 is the same as also trying to do with with just the integer 1. The second thing is that, there's no way to grow the array or get a longer array back. So it's not like when you - earlier, I said that with could be seen as a non-mutating version of index assignment. That's not quite true in terms of the fact that index assignment to an array will implicitly grow that array and fill it with holes if needed. this doesn't happen here; if you try and `with` beyond the length of the array, you get a RangeError.

ACE: So yes, we've got a complete specification. It's being reviewed. I got in touch with SYG and KG just to check kind of their editorial side and I didn't have a chance to reach out to MF, sorry. But it seems like they are happy with conditional passing to stage 3, you know, they'll give it kind of their complete review some point in the near future. We do have a JavaScript polyfill implementation that matches the spec. We do also have - and this is not really required for stage 3, but I think it's a great thing to call out - we have some work at Igalia; TJC, did a spidermonkey implementation and I think the thing that's currently merged in the SpiderMonkey isn't completely spec compliant. There are a modifications, but there's a Believer, a PR opened up. Has those necessary changes and ADT at Igalia has been working on a webkit implementation as well. We also have, thanks to NRO, we have test262 tests as well. That's not merged but he's got a fork with the tests there as well.

ACE: So, I haven't kept an eye on the Queue, but we believe that we are a kind of a position where we've done everything we can do and the thing that we're really needing to extend. This is more implementation experience and kind of external usage, to type of things we can and stage 3.

MM: Can you go back to the slide where you showed `toSorted` and the behavior with regard to holes? Yes, that one. So that one surprised me, although I think I prefer the `toSorted` behavior in terms of what a sort should do. It disturbs me that this is seems like a gratuitous deviation from the regularity of a `toVerbed` being like making a copy and then applying the verb to the copy. Given that the original sort has this uncanny, we can think of it as hole preservation property, what justifies the irregularity of not just preserving the original behavior, but just on a copy rather than on the original array?

ACE: Yeah, sure. We did discuss this quite a lot. So yeah, they've certainly been other people that shared that view. But over conversations, the things that have come up either. One, I can maybe let NRO talk about this more in the queue, that for other array methods since 2015, this has been the kind of behavior for reading. So if you do like `.includes` on an array, it treats holes as undefined and I also believe, and it just in rituals(?) on the core, maybe he can confirm or deny. I believe this is also the same behavior for the `groupBy` method as well.

MM: So for new things, I completely agree that I would like to ignore holes and just let them turn into undefined. But the problem is that `toSorted` is explained as the copying form of sort. And therefore I think trying to stay with the original semantics, but applied to a copy rather than the original is the less surprising thing. Obviously, if I could, I'd like to wave a magic wand and fix the original sort as well, but that's not an option.

ACE: Yes, there is the which precedent to follow. Do we follow the precedent, we've had for a while now of this kind of ignoring holes, or the older precedent due to the similarity of the methods.

MM: Yeah, there's another problem with the original sort that, if you're cleaning things up and deviating in ways that break the simple explanation, you might consider. I was very surprised that what sort does is when there is an undefined in the original array, an actual undefined, not a hole, it does not consult the compare function. It just puts all of the `undefined`s at the end. It sorts them all to the end rather than asking the compare function how it compares with the other values. That's completely bizarre to me, and actually breaks some desired use cases. I assume that `sort` and `toSorted` both take a comparison function in generally the same ways.

ACE: Yeah, they both take a Function.

MM: Then does `toSorted` have the same irregularity of not asking the comparison function about undefined? Or in this case, undefineds or holes that turned into undefined?

ACE: So because we do no branching for holes. to Salt, its perspective that it's whatever it gets back from reading the indexes. If it gets back undefined, it's the same as having undefined, as a property of that. It's okay, you know, just sort of, you know, buffers everything up first. then we saw so.

MM: Okay, but when you get back an undefined with `toSorted`, does it ask the comparison function to compare it? Or does it do what `sort` does? Which is just puts all of the undefined at the end without consulting the comparison function.

ACE: That the value will be passed to the comparison function because it makes no distinguishing between an actual property with the value undefined versus no property and getting undefined.

MM: I think the comparison function I think, I think you're missing the, the point of this other irregularity. The original sort function when it sees a genuine undefined in the array, not a hole, just a genuine undefined. It does not ask the comparison function to compare right?

ACE: Sorry. Yes, I had misunderstood. I'm not sure off the top of my head except for the fact that we call the exact same abstract operation for `toSorted`. `toSorted` uses the same kind of machinery for the actual sorting.

MM: So as you explained, how sort would behave then?

ACE: Yes, `toSorted` would also do the same. Sorry, I misunderstood the point you were making.

MM: Yeah, the these are two separate irregularities for sort that that are not orthogonal because but they are two separate irregularities. So toSorted is fixing one of them, but not fixing the other. I think I won't object to that but it's just it's it's certainly worth noting. Thanks.

ACE: thanks for no strongly objecting when we had behalf of others that gave strong feedback about this Behavior.

NRO: I mostly want to say exactly what ACE already said. I also wanted to add that It depends like MM mentioned that for refactoring existing code that copy is an array and then sorts it would have a different behavior from using toSorted. That just depends on how we copy the right. For example, if you use the right spread and then called to sort because spreading an array into a new one is also common way to copy that it behaves as the proposed to sort it replacing holes, with whatever the reason the process. I think the whole so we already have both ways depending on how we copy the array in existing ecmascript. This proposal just chooses one of them.

MM: Okay, that's a good point.

ACE: Yes, thanks - the fact that using the iterator to copy an array has this Behavior, I think is a great Point. Thanks for that.

JHX: Does current semantics mean that holes and undefined are different?

ACE: So the I think the opposite. The behavior of new methods, including toSorted, it makes no difference between whole or undefined. Except for the fact that a hole, you know, will read through to the Prototype. So it's not guaranteed to get undefined. It will be whatever you get If you `Get` that index. Which in the most case is undefined, you know, because people don't tend to write indexes to array.prototype. but there's nothing stopping them from doing that, Unfortunately.

JHX: Okay, is that means if there is no prototype overwritten, `undefined` will be at the in the end of the array?

ACE: Yeah.

JHX: I have a parliament of the part of the splice because the splice method is, I have to say, it has a bad name and it's very hard to use and we have heard many complaints about these methods from developers. It feels like this proposal actually follow the old splice, but modifies some behavior. It seems this makes things worse. So I am very worried about that.

RRD: Just to clarify hax. Is this a about splice or toSpliced?

JHX: I mean, splice itself is already bad. So why are we introducing toSpliced?

ACE: Yeah. I think it's a really good question. So my the reasoning here is two things. One. There are a few times when I've gone to use the existing splice and it. What I've wanted is actually this new method. It, I've got like a chain, like a method chain, or I'm doing Array.map().filter(). So, I've got a whole bunch of things happening in a kind of a fluent chain, and then I actually want to perform a splice operation. I want to splice something into the middle of that array, but I can't use splice because it actually will give me back if I'm just inserting something into the middle. I'm just going to get back an empty array of things. I didn't delete. So as much as I agree, I'm not a big fan of splice. And speaking to a few other developers, they said the same thing: this new version. They actually said fill is more useful than splice. The second thing is that it's a common joke in JavaScript, it can be confusing to remember the difference between slice and splice and an argument could be made that does this then make it harder. You've got to remember the difference between slice, splice, and `toSpliced`. and I think, one advantage of actually having this third one is, if you can't remember, which one is which knowing that this pattern of "to + past tense" is the notion of a non mutating version of a mutating method. One means that if I if I'm in my IDE, with autocomplete, if I do `.splice`, I'll see, in auto complete, `toSpliced` pop up, no tested that. That's a subtle indication that the operation you're going to perform is a mutating one. Surprised if I type in `.slice`, you're not going to see, just `spliced` pop up, which is an indication know maybe subliminally that you know, that's the kind of the one that is going to give you a copy. So I think it would actually help people realize the difference between these two things, because they could potentially forget about splice, and then they can just think about slice and toSpliced, which have more differences in how they sound between the two of them. So it kind of moves them further apart, which I think helps distinguish them a little bit better. And then the two things are both non-mutating, so less risky to use. The third reason Is the some of the other mutating methods that we're not including, you can achieve them by using this method. Like `unshift`, putting something at the front of the queue. You can't do that with any of the other methods. There's no other method lets you kind of push something in at the front in a non mutating way as a fluent method call. The only way to do it would be to use like an array literal. You can't just in the middle of a chain suddenly do that operation. You have to break it up to perform it. So splice kind of gives you that Swiss Army Knife effect of, it can do operations that no other method can and especially for putting something in the middle of an array—

JHX: The functionality I think is useful. But what I mean, the, the current, the current shape follows `spliced`. It uses a bad name and use the bad API design. What I mean, is I hope we could have a new method which have the functionality but not not, not to repeat the bad parts of `splice`.

ACE: Okay, I understand. I guess. Yeah, I guess that's a harder thing to solve for me. Personally. I like the name and I said this with one thing that so my I don't have a like a before, before, as a programmer. I film and one part of studying film that's really fun is you get to, you know, shoot on 16 millimeter film or eight mil film and then edit it on a big machine and that's called splicing, where you cut the film up and you put things in the middle of it, or Things off. So to me, the word splice is a great word, but I appreciate not everyone spends their Youth splicing film reels together. So maybe the word doesn't work so well internationally or across other hobbyists.

USA: We are at time, so please do the rest quickly.

RRD: Yeah, really quickly. We could definitely imagine different APIs than `toSpliced`, but `toSpliced` as explained will be a nice base to basically build up those other APIs. The goal of reducing to not only those methods were was to reduce the amount of methods that we had in this proposal and `toSpliced` covered a lot of them. And so if we want to rebuild some of them on top of `toSpliced`, like, there are no issues, Or, we can do other proposals later on.

USA: Great. Thank you. We have one final item by JHX. Do you need to talk about this in detail before stage advancement?

JHX: The problem here is that I see is, first, removing species. I'm not sure what the status is of that proposal. But even if we removed the species, it seems that it doesn't mean it should always return the array. So I am in doubt about it because it seems many use cases would want the subclass. So this, may related to removing species, it had several options, I remember. So, I'm not sure.

ACE: The further ideas around removing species and the different options. I think a lot of those relate to what to do about the existing APIs that have web compatibility risks around them less. so about what new things can do. again, I'm not sure if Justin's on the call.

JHX:I mean that if we use current semantics, that means if the removing species proposal I has some different final result. It just creates some inconsistency. So this is this is what I'm worried about.

ACE: So, I do think, I think, I think groupBy has the again this, same behavior of, guess it's slightly different because you're returning an object. I think the arrays with if you do groupBy or whatever the new name will be, the arrays in there don't match species, which is, I guess a weak precedent.

JRL: We dropped TypedArray support. So where the original implementation was going to return a Uint16Array just like you are here. But we dropped all of our typed array methods. We only have array methods now and it does return a true array, not the symbol species subtype array.

ACE: Okay, thanks. Yeah, I forgot about the dropping of the typed arrays. Yeah, we I think we got fairly strong voices from engine implementers that, setting this precedent going forwards for things not to use @@species, is the preferred approach, you know, based again on the talk a few days ago, from SYG. It seemed like there was quite a lot of support from— To be fair, I guess that was a place where similar species was consulted, but not used which again isn't exactly the same here, but kind of a general theme of moving away from species.

JHX: Yeah, but what I mean, is that even if we remove the Symbol.species, but there are some discussion will could use some other mechanism which could give you the superclass instances. There are some discussion in removing species.

USA: We're six minutes overtime.

ACE: I mean, I'd still obviously, I'm always the Champions always going to be biased but, you know, I would like to still see if we have consensus for stage 3 in light of the items that could come up, which I really appreciated feedback on.

SYG: I want to clarify in response to JHX, the problem with Symbol.species is not Symbol.species per se. It's having some kind of user hookable mechanism to get the subclass.

ACE: I'd like to ask for consensus for the stage 3.

MM: I strongly support this.

SYG: [via queue] +1

### Conclusion/Resolution

- change-array-by-copy proposal achieved Stage 3

## String.dedent status update

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-string-dedent)
- [slides](https://docs.google.com/presentation/d/1fF4TqU6eLcj74s0wa1VSq5wGORSY1m1naekTNF9JAz4/edit?usp=sharing)

JRL: All right, this is String.dedent status update. I forgot to write spec text, so I'm not going for stage 2, but I'll bring it back next committee meeting to actually go for advancement.

JRL: First up a little bit of notation. It's really, really difficult to talk about white space in slides, if you can't actually see any of the white space. So where appropriate I will be representing space characters with characters with a `.`and And a tab character with a `-`.

JRL: So string dedent is an attempt to make it so that you can have code that looks normal in your source code and outputs normal in your output. In this example here we have code, that looks normal, but the output text leaves a lot to be desired. There's a blank line on line 12, which is the output. Everything after line 11 is the output here. Line 12 is just a blank line because there's an empty new line at the beginning of our console.log line. Line 17 has those four space characters because there are four characters before the closing backtick. This isn't a great experience if you're trying to log something to terminal or to a user or if you're trying to use parsers or something like that. It would be better if the output text was left aligned with the first column. So we can make it so that our output looks correct to a user.

SYG: Can I interject with a clarifying question? After the dots, there's more space characters, but you do not use dots to represent those.

JRL: Yes. I will get to a point where it, that, the reason for that becomes obvious later

JRL: On line 14 and 15. There are two space characters represented by actual spaces and not dots, but the Dots here are representing leading common space characters. Maybe I should make that more clear on this slide, but it will become obvious a little bit later on.

JRL: So we can make our output text appear correct to a user, but then our source code looks hideous. I certainly don't want to write this and I kind of cringe every single time that I have to. The indentation on line four and five and six is just completely incorrect in the source code, the indentation on the closing tick, so things that happen on line 7, it doesn't look like it's the correct anymore. Looks like we should be back to zero column or two or something, but it hurts the readability of source code in order to improve the readability of the output code. `String.dedent` is an attempt to solve this. By doing a dented text block the source code looks correct. It looks correct in our source and the output code presented to the user looks correct as well. We're going to remove all of the indentation from the text block and present it without that to the user.

JRL: A bit of terminology. I'm going to talk about a bunch of things. The proposal itself is simple, but it has a bunch of complicated terms for us to understand the semantics. The terminology we need to discuss here are new lines, white space, and a couple of other things. So whenever I say "new lines", I actually mean the literal `\n` character. I think it's like 10 or something in unicode, a carriage return optionally followed by a new line for Windows support, or paragraph and line separator, which we added in as actual new lines a couple of years ago. Any of those are just new lines when I talk about it. There's also "white space" and white space is all of the Unicode white space except the new lines because those are just “new lines”. It'll become more obvious later. So those are the two main things, but then we need to talk about the actual format of a dedent block. So there is the "opening line", which is everything to the right of an opening tick. It must be empty, meaning it is followed directly by a newline character. So in this case line 6, that highlight block directly to right at the opening tick all the way to the right, all that's there is just a new line so that we start the next line. The closing line is the everything to the left of the closing backtick. The closing line may contain white space, and it could be any white space, and this is just so that you can indent the closing line as if it were real source text. The closing line itself - I should have mentioned this with the opening line, sorry, the opening line is not preserved in the output. The closing line is also not preserved into the output. Everything that's not the opening and closing line, everything in between the two, are "content lines" and content lines are preserved in the output. And we'll talk about how they're manipulated in just a second. There maybe zero content lines. You could just have an opening line and the closing line and 0 actual content lines and that's fine. Or you can have as many as your interpreter will allow you to contain. “Empty lines” are lines that contain no whitespace and no other characters on them. So in this case, the only empty line is line 9. “Whitespace lines” are lines that contain only whitespace. And remember I'm using dots and dashes here. So line 7 and 8 contain only tabs and spaces, and so they're just “whitespace lines”. And "character lines" are any lines that contain a character on them that it's not white space or a new line. So in this case line 10 through 12, they all contain characters. “Character lines” can optionally start with white space, so lines 11 and 12, they start with spaces and tabs. Those are still character lines.

JRL: And finally, "common indentation". “Common indentation” is all of the indentation that exactly matches on each of the character lines. So, in this case, line 8 through 10 are character lines and the common indentation between all of the character lines is 4 space characters. Line 7 and line 11, an empty line and a white space only line, do not factor into the common indentation. The common indentation is just the things that match exactly on the character lines. You could have a character line with no indentation on it. And so in this case, line 11 now has zero leading indentation. That means the common indentation for this text block is zero. If you have any mismatch on the indentation when you're calculating common indentation, then you stop the common indentation calculation. Whitespace itself is not interchangeable when you're calculating the common indentation. So on line eleven here, we have two spaces, followed by two tabs. Only the two spaces are shared by every character line. So the common indentation is just two spaces. That has the same kind of repercussion if you were to start a line with a different indentation character then your common indentation is 0. In this case. We have a tab character in the first column and that means because there's the other characters lines have leading spaces, there's no matching common indentation on all of the character lines. But you can mix and match your indentation. In this case, you can have tabs and spaces on the same line as long as every character line contains those exact tab and space sequences then the common indentation is all of it. In this case again, again remember an empty line doesn't factor in, line 11 a white space line doesn't factor in, but lines 8 through 10 have a space followed by a tab followed by a space followed by a tab. And that's all common indentation.

JRL: You can have empty lines anywhere in your content. So, in this case line for Line 4, 6, and 8. Those are all preserved in your output. So, line, 13, here is the first line in the output, that line is the equivalent of line 4 in the input. Line 15 is the equivalence of line 6 in the input and line 17 is the equivalent of line 8. So if you want to have empty lines in your text, you need to put them in the content lines in your input. Whitespace only lines are a little bit special, if you have a line that only contains white space, The easiest thing that we can do for this is to just empty out the line in the output. The reasoning is a little complicated. Honestly, there are a couple of different options we can have here but this is the easiest one that we can choose. This also follows the python text dedent function. It'll just empty out a whitespace-only lines. This greatly simplifies calculating common indentation because we don't have to worry about what the common indentation of a whitespace only line is, we just empty it out entirely. So in this case line 5, which is all white space turns into an empty line 16 in the output. Again whitespace lines don't doesn't factor into common indentation. So the common indentation is five space characters. Line 6 here, the bar line, has six space characters. So in the output it will still preserve a single space.

JRL: Expressions do factor into common indentation here. There four shared space characters between these three content line and importantly, the evaluation of an interpolation, of a text interpolation, is not used as part of the common indentation. It's only the literal, the syntax indentation in source code that you are dedenting here. Not the evaluation. So even though there are two spaces that I'm going to interpolate into the string, the common indentation is not going to be 6 space characters. It's only going be 4 space characters because that is what's represented in our text block's syntax, so all the lines will have at least two space characters here.

JRL: And finally, there's a form of tagged dedent. So the same way that you can do a template tag invocation. You can do the same thing with a dedent block in this case. I'm showing you what happens with a hypothetical python interpreter template tag. Python is famously a white space sensitive language. So if we were to try and do this tagged template evaluation, normally it would throw an error because there's unnecessary white space and that's invalid in Python. You could dedent your block manually so that it doesn't look correct in your source code and then it would work in print out "hello python world". But with a string.dedent tag, we're creating a brand new template tag wrapper. What will happen here is it takes the invocations template strings array, it'll perform the dedent on the template strings array and then pass it to the underlying template tag, to the python interpreter. So the python interpreter will receive dedented template strings array, that will not contain any leading indentation in this case, so it'll continue to work in print out "hello python world" again.

JRL: so, the first big question we have here is, should there be syntax to represent a dedent block? There's been a couple of attempts here by community members, to propose different syntaxes. It seems like the community wants a syntactic form to do this for them. The original attempt that we had was to use triple backticks. This isn't 100% web compatible but I think it'd be exceedingly rare to have a case where someone is already doing this. But the community has proposed a couple of other potential syntax that we can do. For instance, using triple quote characters so you could have triple double quotes or triple single quotes. They've also proposed using double quote followed by a tick (`), and this could potentially allow expression evaluation into your literal and then if you were to use triple double quotes, you would use a non interpreting expression, be like literal text, like a normal string block. RBN has suggested and the current readme text uses the`@` character to denote a dedent block. So, `@` followed by a backtick is a dedented string block and expressions would be allowed in this case. In the same syntax, if you were wanting to use a tag template literal that would work out perfectly, so can do the same python interpreter and pass it at syntatic dedent, and it'll evaluate correctly.

JRL: And there's also a potential future proposal that we could do that allows you to re-indent text. Essentially we're going to be printing out multiple blocks of dented text. So we have a foo function that's going to be de-dented so it'll be left aligned then we have a console log of a bar function, in the bar function is going to interpolate the original foo function, which remember is de-dented. So the output lines here on line 13 through 18. They don't look correct, particularly like 15 and 16 are not indented at the correct level. So a possible future proposal is an indentable string expression. I won't go to into depth about the actual API for this, it's just something that we could do later on. And if you notice in the code has changed slightly and now we're creating an indentable wrapper around the foo variable. And now when we output on line 15 and 16, it uses the correct, two spaces of our current indentation. Now, the output text looks correct again if I click back and forth. Hopefully you can see it. on 15 and 16 are being adjusted so that they look correct again in the output. This is not currently part of the proposal. It's something that we can do later on.

JRL: Is there anything currently in the queue?

MM:I have two comments. First is I just want to register that I strongly object to go to any proposal to support this by adding new syntax of the language. The reason why all together I find this proposal pleasant includes the fact that it's not adding new syntax and can therefore be understood in terms of existing concepts. It's just a new template tag that could have been written by users in the language. We are just providing which is fine. I also generally want to say that, I think you've done a very good job at stepping around most of the potential land mines. Most of the things I thought to worry about and you ended up anticipating answering already. So that's great. I did not understand your example where you said de-dent, open paren other template tag, close paren than backtick, because a template tag is already a function. It gets invoked by the template literal expression as a function. So how dedent tell whether it's being invoked because it's being used directly as a template tag versus being invoked in order to create a template tag from a template tag.

JRL: So this would have been more clear if I had spec text. There is a type check on the arguments. So if it's an array, then we assume that we are doing a direct dedenting. It's being used directly as dedent then opening backtick. If the argument is a function, then we're doing a wrapping of a tag template function. And so we return a new closure that can be invoked then with the actual template strings array, it then performs the dedenting and passes it to the original tag function argument.

MM: Okay, your dispatching on typeof, and you've got a case for array and you've got a case for function, is that correct?

JRL: Yes, correct.

JRL: Okay. There's a repl so that you can test all this for yourself. I have a reference implementation and in npm. But I haven't merged all the codes to GitHub. It's not super easy to view the code, but you can play around with the repl if you would like to you to figure out what all the cases are there.

MM: Okay. Thank you. And with regard to String.indentable, I think I might have a suggestion of for a more pleasant way around the problem. I don't like having to introduce a new concept of indentable but I do understand the problem you explain so I'll just I'll just leave that as something to come back to.

JRL: Okay, welcome to leave comments on the issue GitHub. I don't have the number on me at the moment, but there is an open issue. It's not currently part of this proposal, but I'd be happy to tackle it as a follow-up.

MM: Okay. Thank you.

BN: Yes, awesome. Okay, I think the idea of using maximum common indentation as the amount of indentation to strip makes sense independently as a heuristic. But while I was looking at your slides, I thought of another heuristic, that might be worth considering, which is just the indentation of that final backtick, right? In some sense, this whole problem stems from the use of multiline tagged template literals. And so, in those situations, you almost always do have that final empty orphan line with the closing backtick, and that's an amount of indentation that could be easily controlled by the end user: this is how much I want to be stripped when I use String.dedent. So, I just wonder if that heuristic might be worth laying alongside the other heuristic (maximum common indent), or if you thought about that—or if it has problems that I'm not seeing and is a bad idea for any reason?

JRL: So we did consider that I believe that is the, if I'm remembering correctly, that's implementation that Java landed on. Java also has text blocks that allow you to dedent and it uses the indentation of the closing white space of the closing line. The problem with that is that it causes that closing line to always be at the incorrect indentation of the source code. So if you see here on line 10, our space, our backtick is that at column 5, whereas the chars in the content lines starts at column 7. Which means in the output, there's going to be two white to space characters that continue to be preserved. In order to get this de-dent correctly you have to put that closing backtick out of alignment at column 7, which means it's now out of place with the rest of your source code.

BN: You, you could do that though, you know, that could just be the way that you indicated that preference to this API. I guess I would have thought if you wanted this to be fully left-aligned, you would just omit those two spaces here and then you would have at least, you know, the common indentation, but everything would be flattened against the, you know, the column of the ‘p’ in the pythonInterpreter.

JRL: Yeah, so you could also remove the two space characters from line 9. So that python interpreter, print, and the closing backtick are all on the same column. However, that looks a little odd me when I read the indentation, that the content lines normally, when I'm opening a block or doing something like this, I add indentation to make it visually distinct from the surrounding code. So if it were not these extra two spaces, it wouldn't quite look right to my eye because the text block itself feels like it should have more indentation than the surrounding code.

BN: I see your preference and it's totally valid, but I felt sort of more on board with the strong negative reaction as you presented it at the beginning of the presentation. That problem is definitely something to solve, right? This could be maybe a more minor preference? I don't know if my idea simplifies anything (and thank you for the explanation), but this might be a smaller question than the whole proposal?

JHX: (from queue) The method that was just proposed should have better perf?

JRL: This is one of the cases where the indentation if we did this in syntax, it could be faster because in the parser could do this for us. If we do choose the API form, then it will be a little bit slower in order to loop over the content lines to see which ones determine the indentation. But I don't imagine this is going to have a real world performance impact. The tagged template literal itself can still be evaluated only once and cached. And so even if you were to do it a million times, you would calculate only one time. And then every time you printed that statement again, it could use the cached result all the time.

KG: Yeah, this is a response to BN’s point. I strongly agree with JRL that the body of a template literal is normally indented and that having the extra two spaces there or however many spaces because the last backtick is not indented would completely defeat the purpose of this method for me. So I really don't want to use the last backtick for exactly the reason JRL just gave.

KG: [new topic] So first off, I think everything presented so far is absolutely great. I do want to propose an additional functionality for this feature, which is passing it a string. So not using it as a tag template, but passing it a string directly because I would expect that to work. I would expect that a method called string.dedent, I can use it to dedent strings, but there's this question of how do you treat the first and last lines? I think JRL gave a convincing explanation of why the first and last lines need to not contain any characters when it is used as a template tag, but I don't think it makes sense to have that behavior for strings. Assuming strings are supported at all. So I was hoping we could get opinions from the committee on both the question of whether we should have it and if so whether we should have a different behavior for the treatment of the first and last lines than we do for when it's used as a template tag.

JRL: So presenting your issue here and hopefully everyone understands the source code that you have written. Essentially, you are passing a string literal itself, and that could be a template string, just not a tag template block. So you're not invoking string.dedent as a tag template, you’re invoking it as a call function, and passing a string value as an argument. So, the question here is one, do we support this? passing a string literal into the API, and what is the behavior? I actually in my reference implementation do support this, because the implementation is an API. The reference implementation is implemented as an API, as a dedent function, and so you're able to call it directly. This isn’t possible to do if we only support this as a syntax, so this is one of the things that means maybe we should do as an API instead of syntax because it opens up this possibility. The second question of do we, what do we do with the opening and closing line of a string that's called in this fashion. My initial thought is that it should use the exact same rules as a regular tag template invocation. So the opening line must be empty. The closing line can optionally contain white space, but it is removed, and then the content lines are everything between. The reason I prefer, this is because it allows you to switch between the tag template form and the call form seamlessly, and it allows you to actually interpolate expressions into your string before you pass it to dedent API. So in this case in the code that I'm highlighting, I'm passing in a first content line which contains the word "first", second content line which has two spaces followed by a two spaces interpolation followed by a final space between it and the word "second". And then on the third line, which contains the word "third". This allows you to interpolate those two space identifier into your string and then dedent the entire evaluation of it. So there's actually a common indentation of four spaces in this example. The code here doesn't need to change between the tag invocation form and the call invocation form. The opening line doesn't need to be removed and the closing line doesn’t need be removed. So, I think that gives us the best API.

KG: I don't agree, but I want to hear if anyone else has an opinion.

MF: Why not a separate method on string.prototype?

JRL: To do the dedent or do a particular semantics that KG and I are discussing?

MF: Instead of overloading the tag. Just having a separate method on string.prototype method.

JRL: I'm sorry, I didn't catch that last part.

MF: Instead of overloading the tag so it takes just a single string. Why not provide a String.prototype method where you can have any semantics you want?

JRL: Okay.

MF: I just want to know, is there a reason why we would overload the tag and have that be called as a function instead of just having a prototype method? I think that a String.prototype method would be idiomatic JavaScript

JRL: okay. I hadn't considered a prototype method. But it that sounds okay, to me.

MF: Also, it doesn't need to be part of this proposal like this, both of these sound like they can be add-ons later.

KG: Okay. Well, it can only do the behavior I'm discussing, it can only be an add on later if it throws when passed a string instead of, I don't know, treating it as an array-like, I guess? so we would need to do a little bit of reserving space for it.

JRL: Yes, I could add in a runtime error, if you invoke the function with a string for now. I doubt that would even evaluate correctly if you were to do it. I don't know if anyone would want to try.

KG: Yeah, that's fair.

MM: You're already dispatching on the type of. So what you what instead of saying that string would be an error that you would say, Is that your array case, which is more than a typeof obviously, and you've got the function case and initially you could roll out saying anything other than an array or a function is an error with a note that says you anticipate possibly accepting other cases in the future, so that nobody counts on it remaining an error. And regard to what we do. Eventually, first of all, let me say I agree that this should be postponed, but of the three positions that have been articulated, JRL, MF’s, and KG’s.. All of them are coherent. I understand all of them. I think I can make Arguments for all of them. I think I prefer JRL’s, the example that's on screen right now for me, is the convincing case, which is that the use of it on the computed string by using the same string, dedent, but with the And you can quote, instead of the just, the open quote. It's sort of visually making an obvious analogy that this is very similar the direct deep to the literal be done, but doing it on the computed string rather than the literal portion of the template.

JRL: Thank you.

EAO:Why you not allowing content of the first and last line since filtering that out is relatively easy and it would make compatibility with, for instance, this dedent as function type of usage, more equivalent and easier.

JRL: because of Any content actually appears on those lines than the question of common indentation becomes much more complicated visually. So imagine on the opening line, if you were to have two spaces and then in a character is the common indentation of that text block 2 spaces, or is it 4 still? And the same with the closing line, If you were to have any kind of content on the closing line and ,sorry, if you would have any kind of character on the closing line, the question of what the common indentation is becomes more complicated. seems much simpler to just have a case where the opening line is always empty in the closing line can only contain white space which we ignore.

EAO: Okay, I get that for the first line, but for the last line, how can that be because the content will have some indentation if it's there and it will still be the same even if it happens to have a new line and then the end markers at the end of it

JRL: I mean, we could argue that case. It just seems a little I mean, it's already a special case because the opening line and closing line, closing line can allow white space but having so that it contains nothing of importance for the actual output seems simpler to me.

KG: so, I have another reason, which is that it is very common to want to put the backtick on its own line, the same way that you would put braces on its own line, but you don't want that - that's just like the formatting of your source code. You don't want that to affect the actual runtime value. So you very reasonably want to drop the last line, but dedent can't do that if there is text on that line, and so now you have this weird - like what happens when there is text and not a newline. Do you preserve that? But then adding a new line is not semantic, and that's weird. So by forbidding this case you don't have the possible divergence in behaviors.

WH: Yeah, I agree with what was just said. I don't want to have ambiguities about how many lines there are.

SYG: So, my takeaway from the discussion of the string use case is that there are two different use cases. Of, I guess the main that the one that you have on screen right now, is that, is that correct to characterize it as the denting post or pre interpolation?

JRL: Yeah. The code currently displayed is post evaluation of the Expressions, So the second line here, would contain five space characters, total.

SYG: It seems pretty reasonable to me that. That's something that's the thing that I want to do that. Sometimes I want to do a pre interpretation, sometimes I want to do post interpolation. And the use case that KG said also seems like something. I might want do where I pass around a string literal from somewhere else. And then I want to dedent that, and I do not want that to have the first and and last line restrictions. So it does seem like two different use cases and that points to MF’s suggestion of maybe just a different method.

JRL: Okay. That's it. That's the queue.

JRL: Okay, so I’m not going for stage advancement at this time. I'll bring this back next time for stage two advanced hopefully. Points that I've heard are - MM’s point, that I can’t remember right now, I'm sorry. I can't remember at the moment. But there's also this topic that KG is talking about about passing a string, the calling function with a string instead of invoking it as a tagged template literal. Oh and indentable expressions. So if we want to support “indentable” as a follow-on proposal so that the output will be re indented correctly, both of those already have open issues on the issue tracker. So, I encourage you to post your comments on the issue trackers. That's everything I have.

USA: Okay, great. Thank you.

## Incubation chartering

SYG: Okay. So update on the incubator cause we had just One between the January meeting and the March meeting. Going to steal my busy schedule. So volunteers, still much, appreciate If anyone wants to run some calls, let's see the next when is the next meeting? Is it into? June, June 6th to 9th. So we have about two months. Hopefully get at least two or three meetings in. This are two or three incubator calls in then. So looking the Overflow from the previous Charter, what we have. What we discussed were function helper functions and still up in the, in the charter are big and math and arrayed that from async specifically the precedents of async functions. functions. So, those two will be forward to this Charter and before I kind of nominate some things, I think would benefit benefit from the incubator calls. Any proposal Champions authors want to volunteer any Topics to be had with an incubation call.

JSC: I would like to request that the array.fromAsync item. also be expanded to include how to handle mapping function.

The default mapping function. Sure from leasing to expand to function.

MM: I'm sorry. What is the default mapping function?

JSC: all right, up from async is currently trying to match a rate up from in that. it lets the developer Supply a mapping function as its second argument, but there are Shenanigans having to do with whether we should double like treat it as an identity function. Whether we should double await by default that sort of thing

MM:. Oh, okay. Thank you. It's very clarifying.

SYG: Barring any. Volunteers. I Will propose The Decorator metadata stuff to be an incubator called topic to get attendance from engine implementers specifically. Firefox, folks, and V8 folks about given that we were the ones who objected to the metadata being included in the current decorator proposal. We have an incubator a call about just metadata at large. guess. I'm moving forward on whether it be. removal, or a simplification or what to do with the metadata separate proposal.

USA: Yeah, I think that's a great idea. The Champions. I don't believe are here, but maybe we can confirm that offline

YSV: during the discussion of decorators. So they probably know already. But yeah, I support chartering and doing it.

That's also my recollection with the decorator champions.

SYG: Let's not be overly optimistic about how many calls we can run between now and June. I propose, then the charter to be the current overflow, which is the array from async, bigint math, and then decorator metadata. Those would be the three topics. If you are interested in any of those three topics, I will put up a new charter as an issue on the incubator, agendas repo and I try to tag your GitHub name from what I recollect of planning discussions under stakeholders heading. so that when we try to schedule them and get a doodle out that you get pinged on GitHub as a stakeholder, so, please look out for that issue. When it gets posted, after the plenary that if you are interested, add yourself a stakeholder.

The chartered proposals are:
BigInt math (carryover)
Array.fromAsync: precedence of async variants of methods and default mapping function (carryover)
Decorator metadata (new)
