# 106th TC39 Meeting | 19 February 2025

**Attendees:**

| Name             | Abbreviation | Organization       |
|------------------|--------------|--------------------|
| Kevin Gibbons    | KG           | F5                 |
| Keith Miller     | KM           | Apple Inc          |
| Chris de Almeida | CDA          | IBM                |
| Dmitry Makhnev   | DJM          | JetBrains          |
| Oliver Medhurst  | OMT          | Invited Expert     |
| Waldemar Horwat  | WH           | Invited Expert     |
| Ujjwal Sharma    | USA          | Igalia             |
| Andreu Botella   | ABO          | Igalia             |
| Daniel Ehrenberg | DE           | Bloomberg          |
| Philip Chimento  | PFC          | Igalia             |
| Luis Pardo       | LFP          | Microsoft          |
| Michael Saboff   | MLS          | Apple Inc          |
| Linus Groh       | LGH          | Bloomberg          |
| Erik Marks       | REK          | Consensys          |
| Shane F Carr     | SFC          | Google             |
| Chip Morningstar | CM           | Consensys          |
| Daniel Minor     | DLM          | Mozilla            |
| Sergey Rubanov   | SRV          | Invited Expert     |
| Justin Grant     | JGT          | Invited Expert     |
| Ron Buckton      | RBN          | Microsoft          |
| Nicolò Ribaudo   | NRO          | Igalia             |
| Jesse Alama      | JMN          | Igalia             |
| Samina Husain    | SHN          | Ecma               |
| Istvan Sebestyen | IS           | Ecma               |
| Eemeli Aro       | EAO          | Mozilla            |
| Aki Rose Braun   | AKI          | Ecma International |
| J. S. Choi       | JSC          | Invited Expert      |

## A unified vision for measure and decimal

Presenter: Jesse Alama (JMN) and Eemeli Aro (EAO)

* proposals: [measure](https://github.com/tc39/proposal-measure/), [decimal](https://github.com/tc39/proposal-decimal/)
* [slides](https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity)

JMN: Good morning everyone. This is JMN. And also working with BAN on this. My colleague is working on the measure proposal. The measure side of things. Originally the intention is that we would present this together. But BAN is unfortunately on medical leave. I’m taking the reins of these temporarily. You may know me from the Decimal proposal for a long time now. The intention of this presentation is to give you an update about how we currently think about things with decimal and measure living together. This is not a stage advancement, this is just essentially a Stage 1 update.

JMN: There was a last minute addition to give this presentation a bit more concrete detail. EAO will chip in one or two at the very end. Are you there?

EAO: I’m here.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/1]

JMN: Great. The decimal proposal is all about exact decimal numbers for JavaScript. The purpose of exact decimal numbers is to eliminate, or at least severely reduce, the kind of rounding errors that are frequently seen with our friends binary floats especially when handling human numeric data and especially when calculating these values. Not just representing these things and converting toStrings but making sure when we do calculations with these numbers that we get the results we expect. I know that we really love the topic of numbers. Yesterday’s discussion at the end there actually sort of overlapped a little bit with decimal as you might see here.

JMN: So just to make things very clear, in the decimal world, we imagine that when we write 1.3, when we construct a decimal value from 1.3, those digits, that really will be 1.3 instead of an approximation thereof. To illustrate arithmetic and calculation, 0.1 and 0.2 in this world really would be 0.3. Again, it’s not 'about the same', but they really are exactly the same thing. So that’s the decimal side of things.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/2]

JMN: The Measure proposal which was fairly new. I think the idea has been kind of talked about for a long time and sort of exists in the Intl world. But the measure proposal presented a couple plenaries ago by BAN is about the idea of tagging numbers with a unit. So think about just the kind of units that we use in everyday life, grams, liters and so on. The idea is that we can tag these numbers with the precision as well. Here is just to cut to the meat of it and think about let’s say 30 centimetres there. The idea is we could convert these measurements or measures to other units and perhaps also specify some kind of additional precision there. So think about this 30 centimeters versus 30.00 centimeters and so on. This is another thing to show additional kinds of calculations or at least operations on these kinds of measurements taking for instance—sorry for the non-imperial friends—but using feet and inches is also something that we would like to handle in this kind of proposal. So think about 5.5 feet, that’s actually 5 feet and 6 inches and construct the component of these things. So that’s the idea of Measure in a very simple form.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/3]

JMN: What is interesting is that although the Decimal proposal is really about numbers per se and Measure is about something a bit different they have distinct needs and there are distinct use cases. But they do share an interesting overlap. That’s the purpose of this presentation today to draw our attention to this overlap, because these proposals are helping us to represent numbers the way that humans often use numbers. Usually we talk about handling numbers in some kind of human-consumable way we’re talking about base ten numbers and the kind of arithmetic and rounding involved with that. Decimal is also sort of about precision as well. And there’s some kind of units there. So these are common things that you see when we talk about numbers and human representations of numbers. And these two proposals are sitting at least there’s a part of them that overlaps in our handling of these two things or all of these things.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/4]

JMN: We can think about how Measure can use Decimal. There’s an interesting possibility there. Because Measure needs some way of having some kind of underlying mathematical value, some kind of numeric value there. So Intl actually currently uses mathematical values to avoid some floating-point errors. Measure, for instance, could directly use decimals. So look at this code example where we take say 1.2 and construct a measurement of 1.2 grams with some kind of precision of 10^-1. Decimal objects could be also upgradeable to Measure object as well. There’s the conceptual overlap between the two. That comes up in terms of code samples like this. All of this is still very much in discussion. So what I’m proposing here is not anything that’s final. I’m just trying to get your creative juices flowing thinking about how these two proposals interact and overlap with one another.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/5]

JMN: What’s interesting here is that there are a few different kinds of data that we could be talking about. And one of the proposals that has been presented here many times and I know has a lot of fans is the Temporal proposal. And we propose that Temporal can be a source of inspiration and learning for us. Because we know that Temporal we have a lot of different concepts that are being strictly separated from one another. So in Temporal we have things like PlainTime, PlainDate, PlainDateTime, ZonedDateTime and so on. These are separate. You might say that the API is strongly typed. If there’s any kind of conversion that needs to happen that needs to be explicit. That has a number of benefits for the developer.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/7]

JMN: So the question for us here thinking about Measure and Decimal and the overlap between them is whether there’s some kind of unified system perhaps that can be identified sitting between these two proposals. So we have different information with different types available to the developer. That’s the challenge for us.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/8]

JMN: So there are a couple of different topics here. Let’s be explicit what we’re talking about. We think about base-10 numbers. And two questions. We’re talking about something with a unit like gram or feet, that’s one question. And another dimension could be there’s some kind of precision there. Does the number itself tell you just by reading it off from the digits about how precise this is going to be? We have four possibilities there:

* So, for instance, in the Decimal proposal, we talked many times about this concept of “normalized” [canonicalized] decimals, where we strip any trailing zeros. So, for instance, 1.20 just is 1.2. So that would be something in which we don’t expose precision and just has no unit, because it is just a number.
* In previous discussions about decimal, we also talked about the full IEEE-754 approach that we actually have loaded and discussed many times in plenary. It’s called the full IEEE-754. This is a representation of decimal numbers in which precision really is present on the number. So the number does contain not simply a mathematical value, but also an indication of how precise this value is. Or, in other words, possibly some trailing zeros are present there.
* We also have things like numbers with a unit but with no precision. So some kind of exact measure you might call it. So something like the speed of light would be an example of that kind of thing.
* Another kind of example that comes up in everyday life, every day numbers would be say our weight on a scale or the length of a stick, that the number that we read on the scale of a ruler would indicate some kind of precision. So it has a unit. And it also indicates some kind of degree of precision as well.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/9]

JMN: So if we look at this thing, we might be already looking at four different classes of things, which is already starting to be quite a lot. Actually we can expand the conversation and take a couple steps back and find that there’s even more possibilities here. So think about—I mean, you don’t have to go through this entire thing. You can think about binary64 or float64, the numbers that we know and love already in JS and talk about integers. Those also have analogues in JS with BigInt. And at base-10 and the bottom row of the table has four possibilities and those are the four. And think about integers, we can think we want to have some kind of BigInt with a unit or BigInt with some kind of precision or do we want to have float64 with units precision? You can see that the topic is getting as we take a step back, we see that there are many possibilities here. And the developer might think this is interesting, but it seems like we have a kind of proliferation of possibilities here.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/10]

JMN: So do we really need all of that? I mean, the conversation is leading us down a path which suggests that there are lots of things to think about. But maybe everything could be expressed by a single class. Maybe we could have some kind of, I don’t know, unitless number or dimensionless number which has a unit like 'one', as it's usually called, or u. For instance, 2.34 is 2.34 with unit 1. And reduce the mental complexity here. And why not, say, express exactness by talking about infinity as some kind of valid precision. If we tag a number as being infinitely valid, this data as far as I know is exactly correct.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/11]

JMN: But there’s a bit of a challenge with trying to pack all of that into a single class. We know again learning from Temporal that having separate types which vary that it has a lot of advantages. We don’t need to manually validate which information is present or absent and possibly throw in some kind of incoherent combination of data. We have type checking possibilities. And just generally adding information can limit capabilities. So if we think about doing arithmetic with these numbers, if we have more information, that means we can do fewer operations with it or fewer operations just out of the box and no thinking of checks. If we think about just numbers as numbers, then we can add them. So if 1.23 plus 0.04 is 1.27. End of discussion. That’s fine.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/12]

JMN: When we start to add precision, things start to get a little bit fuzzier. I wouldn’t say incoherent but start to get a little bit trickier and now we have for instance 1.23 that has three significant digits and 0.040 with the zero at the end there, two significant digits, what do we do with that? IEEE does give an answer to the question but there are many possible answers that can be given there. And then we have silly things like adding 1.23 metres and some watts that is presumably some kind of incoherent addition.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/13]

JMN: So the question here is if we add this information to our data, we have this so it suggests to us that we need at least two classes. So I don’t want to say that we have to have all of the data that we had on the table in the previous one. But making the argument to allow you to have two classes here. The thinking at the moment is that decimal at least in the normalized form so no precision tracking is a valid thing to think about. We have arithmetic there. That’s quite well defined. Basically 'just math' for lack of a better word. It would be based on IEEE-754 limits which means that there’s a fixed bit width for the numbers. 128 bits. That’s quite a lot. You can do quite a lot in the space. It is ultimately limited. Just to be clear, we’re not talking about tracking precision here. We’re really talking about values that are supposed to be just numbers.

JMN: And the other class that we would suggest would be necessary is kind of measure with precision backed by a decimal, you might say. There’s no arithmetic going on there, at least not in the initial version of this thing. There could be conversion there and convert from feet to metres and a static notion of precision. That’s another way of saying that the precision of a value just is the one that you supply at construction time and that’s it. There’s no intelligence there.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/14]

JMN: And how might we be able to convert between these things? We might say explicit conversion of measure to decimal. We might have some kind of static method of converting some kind of decimal value to a measure, and we might be able to take a decimal value and tag it with some unit then. All of this is just, again, just to get intuition flowing. This is not any kind of final API.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/15]

JMN: The discussion is pretty much ongoing. I hope that I showed you that the measure and decimal proposal overlap or intersect in an interesting way. That suggests that we might be able to make some progress on both of them simultaneously or maybe even in a staged way. I don’t mean that all of the questions are solved there. There’s some interesting open questions.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/16]

JMN: So here is one question you might ask yourself: do we need some kind of separate classes for different kind of data underlying the measure? Do we need some kind of BigIntMeasure distinct from a DecimalMeasure and distinct from a NumberMeasure? I suppose one way to think about it. Maybe you can have some kind of measure with a `.type` property. You can say this is a BigInt or decimal for the number. I don’t know. This is very much open for discussion.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/17]

JMN: Another interesting question is whether we need something like a decimal with precision. So I made the case earlier that if we were to proceed with decimal, then we should probably have decimal without precision tracking, but that doesn’t mean that decimal with precision is a bad idea per se. That could still exist in this universe. So we could have some kind of decimal, generate some kind of precision there or set the precision there. We would have something like a FullDecimal and that could be converted to a Measure by tagging with a unit and so on. The suggestion would be that if we were to have this kind of decimal, that it wouldn’t support arithmetic, because as we have discussed here in plenary a couple of times, the IEEE-754 rules for propagating the precision or propagating what's also called the quantum of a number is similar to unusual prop. I mean, it is an approach defined and implemented of course. There are other ways of propagating precision and to avoid any particular one, you might say the full decimal if we were to have it at all would support arithmetic because it just doesn’t want to get into those discussions.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/19]

JMN: So for us, the next steps this, this is something I want to hear from you is how to move this forward. I made the case that measure and decimal are distinct proposals but they overlap in an interesting way. And they are inter locked in interesting ways. So I might propose that one option would be to just keep them separate, but they’re somehow designed in a tight collaboration that is not exactly well defined. I think we have a sense of what that means. Another option would be to merge the two proposals, possibly now or at a later stage if they go to the later stage. I've prepared a README to show you what it could look like. That might sound a little bit preposterous but it makes some sense of what we’re thinking about.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/20]

JMN: Just to be a bit clear about the details, EAO volunteered to talk about another approach. One of the things that we launched by the way in matrix you can see there’s a new channel or at least fairly new channel for talking about the measure and decimal thing and the kind of harmony that currently exists between these—you’re welcome to join that if you wish. We just started a biweekly call to talk about these things and biweekly call and recent discussions, we talked about the word for what we should use for measure. Perhaps other words are more suggestive and fit better to what we’re talking about. One of the suggestions I believe coming from EAO was amount. The thinking is that an amount is also a term that could make sense for a number of plus unit and possibly precision. EAO if you would like to take over, you can go ahead.

EAO: I would be happy to. So, yeah, in the conversation around this, my view of how should we split this whole mess of things we have got is maybe a little bit different from Jesse’s, but this is why we’re presenting it and sharing the discussion with you. So we can maybe get all of this advanced a little bit. As I’ve been looking at this, I see a lot of overlap in the use cases presented for the Measure proposal and for Decimal but also a lot of divergences that they go to all sorts of directions. And then there’s also, in the background here, in particular for Measure, there’s the smart unit preferences proposal separately from this. And then in this context, I’ve been looking at what are the actual use cases and goals and so on that we have as in this group accepted for these Stage 1 proposals so far and really coming to a conclusion that is somewhat shared, I think, with JMN, that the split we have currently of these is maybe not the best one. It’s close, but it’s maybe not the best one. And maybe we would like to refactor a little bit how these proposals, and now also possibly the `Number.isSafeNumeric` proposal as well, how all of these interrelate with each other. But when considering all of these, I think we have got three different proposals or maybe four that we ought to have. But they maybe all ultimately could work on a single thing.

EAO: And that single thing has, I think, a possible first step that unblocks, solves a number of the use cases and goals we have set out for these proposals, not everything by any means, but it’s also possible to work from there towards different directions. That would be to have this relatively opaque class replacing Measure, called Amount. That does not finish that would not initially in the first step at least include anything about any operations that you can do with it or any conversions that you could do with it. But it would include, in addition to an opaque value that separate fields for dimension and the precision that this value could have, if you could go to the next slide, please.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/21]

EAO: Sorry for the weird gray background. That’s an artifact I think highlighter. This is the idea of what we could have as a first step building towards being able to do unit conversions and being able to do decimal sort of math later. And the idea is here to have an opaque—an amount with an opaque value that you can really initially get out as something like a toString and then have this work as intended for measure to work with `Intl.NumberFormat` formatting. It would include it’s own `toLocaleString` and feed the Intl instance `Intl.Format` formatting call and get a sensible thing out of it. One to note by the way it specifically has unit and currency as separate fields.

EAO: One of the biggest overlaps that we do have for the measure and the decimal proposals is both of them say that we ought to have a good solution for how to represent money and monetary values in JavaScript and my biggest concern driving towards maybe we only ought to have a single class is that, I find that it would be confusing to a developer if we tell them that if you have got money, what should you be using? Okay, no. I believe that it would be simplest to be able to tell developers that if you have monetary value or something with the possible unit attached to it, then you want to work with an amount, then there might be operations on this later as there are proposed for decimal for addition and subtraction and other operations, but there also could be the kind of conversion factors that you can have here.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/13]

EAO: Effectively what I think is that if you go back to slide 13, please, I think when I look at the issues here, the conclusion I come to is that, first of all, if it is a positive feature, if the result we come up with for doing math with real world numbers would give an error if you try to add meters and watts together and for the significant digits thing, I don’t think there’s any issue in how the operations work if we consider the significant digits math and the actual value math as separate operations. So the one place I think I don’t quite agree with Jesse is that I don’t see that the current setup requires us to end up with at least two classes. I think we would be fine with just one.

[Slide: https://notes.igalia.com/p/tc39-2025-02-plenary-decimal-measure-unity#/21]

EAO: But furthermore, I think the initial step—now you can go back to this slide—will provide support for going in all of the directions we can imagine for the Measure proposal and for the Decimal proposal and it would also solve the use cases put forward for measure with a note by the way that as I was reviewing this, I realized that I don’t think we have actually presented really well a use case for why unit conversions ought to be on Measure. The smart unit preferences does that relatively well, but the measure proposal for that I think we have kind of just asserted that unit conversions ought to be there, but we ought to do a better job of explaining why those are important to be available in ECMA-262 rather than just 402. But that’s it for my part of this.

JMN: Thank you EAO and that’s about all we have today. I hope that we have sparked your interest in thinking about these proposals as being part of the shared space. The question is, what to do for next steps in terms of keeping them together or not? EAO mentioned by the way there’s yet another proposal, the smart unit preferences (https://github.com/tc39/proposal-smart-unit-preferences) that is also I would say part of this overall harmony discussion as it were. And that’s it. We are happy to open for discussion. If I might suggest, we do have a TC39 chat channel for these topics and there’s a regular call. I already know that there’s kind of super fans about this topic. We kind of already chat about these things. So if there are any comments from outside of the super fan club, we would love to hear them.

KG: Thanks for the presentation. Just a quick note that part of this feels pretty weird to have decimal measures for imperial units. You might encounter a third of a cup, you don’t encounter 0.33 cups. That perhaps suggests this is not sufficient to represent common units. We might further need a rational type which maybe is a good idea. It does add a little bit of space here. Something to think about for the future. That’s all.

EAO: Question to KG and anyone actually not necessarily for right now, it would be really interesting to hear of an actual place where the data for something like imperial units like this would be stored as something like fractions, rather than being stored as something like decimal or number that is then converted to fractions for display purposes.

KG: I’m not aware of any. But certainly like if I was building a recipe website, I would reach for rational representation for cups because if you quadruple a recipe that has a third of a cup, you shouldn’t get 1.334 cups as the output. That’s just weird. So if you want to actually manipulate imperial units, and preserve them in the way that humans are going to expect to encounter them, you do actually need to use a rational representation.

EAO: I agree. This is why I’m asking if actual shown real world use case of here, we have the data in actual fractions somehow, somewhere that is now clumsy and would be better to have an actual representation, because my suspicion is that the actual data for stuff like this is still going to be in numeric decimal, but let’s go on.

JMN: Just as a quick response, I think one source that I’m familiar with that is coming from this imperial world is cookbooks. They often use fractions to represent. But surely there are others as well.

JHD: Often I would say always at least in the U.S. without exception.

SFC: It's a really good question. It’s also something that’s I think we should investigate more about does it fit in the table layer in terms of is it—given the correct choices for the precision of the number, like, you would take the number and display it with fractions even if it’s represented as a decimal inside of the computer is an interesting question to investigate. I agree that Rationals would be a nice representation in this specific case.

DE: Just agreeing with SFC here, CLDR currently lacks data and algorithms for number of formatting with fractions. This is a contribution that Unicode folks would be happy to have upstream. If we want to work on this cookbook problem, the natural place would be to start there. You kind of need it to work end to end. Until then it’s reasonable for us to start with decimals that have been prioritized for data collection because they come up in a lot of different cases. So we could consider making something like measure future proof by being generic over units. But overall the shape of what that will look like is pretty far from the present. Do you agree with that Shane?

GCL: I think this topic about measures is well motivated enough that it could be a thing that advances separately from decimals and I think it would be useful for it to not be tied to decimals specifically because there are reasons you might want to use other numeric types any way. I wanted to put out here I think this is a pretty useful thing especially for durations and sizes of bytesthat would like, I think, would be very valuable in the language.

JSL: I also think this is what MF has raised but however with the units defined is a clarified question and a fix set coming from bar or extensible in some way and how to get into: conversions. How the conversion ratios is fixed.

JMN: That’s also something that is up for discussion. Initially CLDR is something that we would like to support. They also define as convergence as different thing with the data that they provide. Currency is something that is a strong motivating use case for us. Even more generally might say otherly arbitrary units is also something that could be conceivable. So pick anything you want and say what it means. You could say what it means to convert from one thing to the other or block or I don’t know. I would say this is still an evolving topic.

EAO: Just noting that currently for `Intl.NumberFormat` with unit formatting, there’s an explicit list of supported units. This is a subset of the units in CLDR which is also the source for any transforms between these units and convertibility effectively. But this does not necessarily need to limit what goes into a Measure or an Amount that supports conversions, but I would say that I don’t think for the very initial part of Measure or Amount we’ve actually presented the use case for why that ought to be in 262 and it might make sense for that part of the whole work to be considered as a part of an evolution of the smart unit preferences proposal rather than the Measure proposal.

SFC: This https://github.com/tc39/proposal-measure/issues/10 is one link to initiate the topic of discussion here if you have any background or thoughts of this, you’re more than welcome to chime in. Issue 10 on the measure proposal repository.

MLS: I think this has been somewhat discussed. CLDR does have units but I don’t know whether it does conversions between imperial and metric and so on and so forth. And since I have some time here, there’s also—if you’re going to do fractions, I think you need to keep both the numerator and denominator as values to be actually aggregate converting between decimals and fractions is troublesome given loss of precision and things like that. So it seems like this is going to require some dependency on some other database and a database that may not exist in standards form.

SFC: CLDR does have a specification and a whole table of conversion factors. And presumably those are the ones we would use, although there are other databases as well with different roles handling things like rational is part of the operation and the CLDR rules are basically retain the rational throughout the whole conversion process and then flatten it after all conversion is applied and things like this. This is the space that the CLDR people have thought about. But your input is very much welcome I think again on that same issue, issue 10.

DE: This was a very great presentation that laid out the public space cleanly, but overall it seems like having two classes, one for measure with precision and a unit and one for decimal without precision. It seems like the cleanest. We have seen in previous presentations by Jesse clearly use cases for arithmetic. But arithmetic would be quite difficult and fought when precision and units are included even when it’s useful in some cases. We can go either way on whether measure is specific to decimal or numeric. I think this makes sense as already proposed as two proposals. Maybe we want them to go to Stage 2 together, but as long as we’re developing them both with the other in mind, I think it makes sense to keep them that way. Whether we put something in 262 or 402, that’s an interesting thing to consider. But ultimately it’s practically editorial. And shouldn’t really affect much about the way that the APIs look. So I’m happy with the diligent work done here on all three proposals. I hope we can advance them.

WH: I agree with Daniel here. The presentation here today mostly neglected arithmetic, and arithmetic on measures would be very complicated. There are plenty of use cases where we just want decimal numbers and you want to do clean IEEE arithmetic on them. It’s hard to define how square root works on measures so you can do basic geometry.

SYG: I guess somewhat covered and just one of the questions is what we have for the units. The physical units is front-end JS web apps. Not sure about the service side than things like CSS units or you know computer storage sizes and stuff like that. What are your thoughts on how we decide the set of units that ought to be included in the language?

DE: I think one of the first things you want to do with CSS unit values is calculations on them, which involve mixed units and fractions. I don’t think that’s something that we can cover in scope here. Lots of front end code involves communication with people about human intelligible quantities that is decimal and unit quantities. Although CSS is an important thing to consider, I think it would be really difficult to do a good job with these. The way that the measure proposal is framed right now is in terms of arbitrary strings for the unit. So people could use it to represent CSS units. But I’m not sure if it would solve most of the problems that people want it to solve.

KG: I mean, isn’t it also that the first thing you want to do with most measurements is calculations?

DE: So I don’t know if that’s true the same way. To do CSS calculations, it’s relative to the window or the context where it is and calculations on like converting feet to meters is not relative to something. CSS calculations you’re doing symbolic manipulation rather than being actual calculation.

KG: I misunderstood your point, then.

DE: When I said calc the particular CSS operator.

KG: A lot of CSS units are not particularly relative. Like, vh is but pixel is not.

DE: Pixel is kind of complicated also.

KG: Yes. It’s complicated. A lot of units are complicated.

EAO: So I think we have like multiple overlapping discussions here spanning how do we do arithmetic in general? How do we do—what units are supported and what unit conversions are supported between them and I think this is all to me pointing out that we ought to be handling this whole stack as at least three different proposals with an initial proposal that introduces something like an measure or amount that solves the use cases that we presented for measure so far a second proposal decimal allowing for operations on the real world values and other values that we want to allow for and a third proposal that introduces possibly new units and unit conversions between them. The smart unit preferences doesn’t quite do this at the moment, because nominally all that it is doing is introducing a usage parameter for Intl NumberFormat. But its effects are what is leading to us wanting to have unit conversions happening in a different way than just as a hack that you can get out of Intl NumberFormat. But I do think we do need to refactor these proposals and consider which of these kind of, for example, get a count of all of the use cases and goals that we have for all of these proposals and then decide which sets of those use cases can be solved in one clump and a second and a third clump possibly rather than requiring us to have all of this in this one inter mingled conversation as we have had on the topic and previous cases and this one as well.

DE: The proposals are factored. What do you see as the goals needed for refactoring? What do you see is wrong with the existing factoring?

EAO: The unit conversion stuff. We have not actually—if you actually look at what was discussed for measure, I think the October meeting, we did not actually agree then I think that unit conversions ought to be a thing that is supported. It was just asserted there that, given these other needs, therefore unit conversions must be included. And separately from this for the smart unit preferences that was introduced some years ago, they are also—there was no discussion about whether unit conversions ought to be supported at all. So we ought to have a proposal that actually proposes that we have unit conversion support rather than us just asserting that that ought to be the case. And I’m particularly calling this out because unit conversions on top of measure bring in the question of, if you do a conversion of a Measure value to a different unit, then what is the value expressed in that result? For that, we need some answer. Without unit conversions we can say the value is opaque. With conversions we need to have some representation thereof. That brings in the possible dependency on decimal and that brings all of this into one complicated stack which is why I’m saying we ought to have three proposals here, one for an opaque measure or amount, a second one for decimal operations, and a third one for unit conversions.

DE: Okay. That sounds consistent with the Decimal class and Measure class as proposed. Ensuring that we design units conversion as part of 402 that we do a good job of that design and make sure it aligns with the other two. Is that an accurate understanding of what you’re saying?

EAO: Somewhat yes. There’s a strong desire that this overlaps with the next presentation I will be given on stable formatting in that the unit conversion work ought not to be only a 402 thing so that we do not make it so that JavaScript developers who will use any tool they’re given will want to use the 402 tooling for doing the unit conversions that they want to do otherwise.

DE: Okay. I look forward to that, understanding that argument.

SYG: Are there applications that want something like the measured class today, and if so, what are they doing today? Is the question for the champions.

SFC: EAO can address that.

DE: You’re funding the Measure proposal development. What made you fund it?

SFC: I'll prepare an answer, but in the meantime, EAO can shed some light.

EAO: So my most direct and somewhat possibly selfish interest here is that something like measure or amount unblocks a lot of the issues for Intl messageformat. It does this by kind of fixing a bug in Intl NumberFormat where right now where we do have a need to format a currency value or a unit value, we’re in this situation where we need to give the unit identifier or the currency identifier in the Intl NumberFormat constructor and then give the numerical value that we’re formatting completely separate from this in the `.format` method on the object. This is leading to the situation where it becomes particularly for localization relatively easy if you’re allowing for representation of NumberFormating options like for example message from to but not just limited to message from to to the situation where it is possibly far too easy to introduce the localization bug into an existing implementation. I presented on this somewhat at the December plenary, but I could go into more detail if desired. I would be also interested to hear more from Shane and others who are interested in this work.

EAO: But overall, the gist of what we’re looking for is that we provide a way of representing as a single thing a unit or a currency together with the value and the identifier for what this thing is rather than requiring these things to live separate lives.

CDA: We have about five minutes left.

GCL: Just a reply to SYG, I think probably most JavaScript programmers on earth have dealt with durations or timers and such, and probably a significant fraction deal with things like bytes and sizes of memory. Currency also seems pretty motivating but probably has slightly different usage patterns. But I think all of these are very, very common things that existing programs use just by, you know, bringing their own conversions, and it would be useful to have that in the language.

SYG: Isn’t duration solved by Temporal?

NRO: Yes. Probably not have time units in measure proposal given the Temporal array does a very good job of it.

SFC: I didn’t expect this to be iterated with the use cases with the measured proposal but I think that BAN had an excellent presentation in the Tokyo plenary in October when he set out all of the use cases and I can reiterate those, if you like.

SYG: Just to be clear, I’m not asking for distillation of how you would like to use it. I’m asking to be pointed to an example if possible of what applications do today, in the way that Temporal was very strongly motivated and it was very motivating, I think, to replace things like—what is the library called? Moment? Like, there was very clear demand in a bunch of userland solutions to solve this hard problem; therefore, it was a good idea to do Temporal. I would like to get a better grasp of what the ecosystem does today for its uses of other kinds of measures.

CDA: We have a couple minutes left.

NRO: I already spoke to this by saying how we would like the proposals to be structured. We didn’t hear other opinions, but actually among the champions of the proposals, there is significant disagreement on the direction to proceed, with some people preferring a single proposal and other divisions and other splitting in some other ways. We had in the past different levels of success on merging and splitting proposals and think of class fields or modules sometimes worked well and sometimes not the best idea. I wonder if people that were that involved in the championing proposals have opinions on how they would prefer this extended champions group to proceed: whether as a single proposal or by keeping the various pieces separate.

DLM: I would like to say that we had some significant internal discussions about these proposals, and we’re definitely skeptical about having the decimal measure proposals merged. I think that there is, as SYG was alluding to, various amounts of evidence as to the utility and demand for the different proposals in the ecosystem. And in particular, I would say I’m personally and I think I have to confirm with my team and I think we would be very skeptical about unit conversions and as EAO saying as their proposal would be a good idea. In general, yes, I think I would recommend for the champions not to merge these proposals. Thanks.

MF: I think that the proposals are covering different enough space that they need to be individually justified and I don’t want a potentially strong part of that proposal to carry the weaker part. I want it to stand on its own. I would rather have them separate.

CDA: Okay. We have less than a minute left. Shane, can you be brief, please.

SFC: Yeah, I would like to have more time to discuss this. I think it’s a very important point. But a point that I—I’ve definitely one of the strongest advocates for, you know, keeping these proposals together, and I think that the reason is because the whole is greater than the parts. I think the vision of having a unified solution to how you deal with numerics in JavaScript including things like decimal values of arbitrary precision, units of measurement, and so forth is very strong as a whole. It gives a very easy on-ramp to localization of values and a very easy on-ramp to be able to represent and store and transmit units of currency and measurement similar to how Temporal allowed us to have a string format to do this and talk to each other easily. I think that separating these proposals puts these into boxes that do not deliver the same opportunity of value that we could get by having a single proposal around them. The champions before this presentation agreed that what we wanted to hear feedback from committee, but given that no one has said this yet, I thought it was important to bring this point up: that some might feel that measure by itself might not be motivated, decimal by itself might not be motivated. But if you put them together, I think the union of the proposals is quite strongly motivated.

CDA: We are past time.

WH: I don’t see a single unified proposal working for this. If you want to do arithmetic on decimal numbers, you shouldn’t have to worry about unit conversions. The proposals are distinct enough that they should stay separate proposals. Now, it is very useful for the proposals to coordinate with each other. But they should not be one unified proposal, because arithmetic is so different from some of the other things we are talking about here.

### Speaker's Summary of Key Points

* We broached the possibility of merging the two proposals, given their conceptual overlap.
* We also argued that at least two classes (decimal and measure) are needed, and possibly a third.
* We asked for guidance from the committee about how to deal with these proposals, procedurally, given that they are, on the one hand, clearly distinct, while also having a strong overlap.
* EAO presented a concrete suggestion for a next step, arguing for an opaque “amount” (to be understood as a synonym of “measure”).

### Conclusion

There is little to no support for outright merging of the proposals from outside of the champion group. There was some uncertainty about use cases for Measure. Adding conversion between units (measures) is regarded as a secondary/separate concern. Apparent support for having at least two proposals, possibly three. There was concern that keeping the proposals separate might cause us to fail to see the value of the sum of the proposals.

## Stable Formatting update

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-stable-formatting)
* [slides](https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit?usp=sharing)

EAO: Stable formatting is a Stage 1 proposal that was introduced to that stage in 2023, and a particular thing—so the motivation here to start with is that we have places in particular where we have capabilities that we are offering under Intl, under the APIs available there that are useful for non-localization use cases for non-locale-independent things and also for testing to some extent or that could be useful for testing, because right now as it is defined, the outputs of all of the Intl formatters, for instance, are anything, any string or formatted parts and array. We have no way of validating that any of these things work as they are. This led us to have the situation where we have capabilities that we are offering for developers that they do make abuse of, and this means that they are kind of living dangerously because we might change the formatting at any time. But on the other hand, because developers are doing this, it becomes very difficult to change any of the details about how in particular en-US formatting happens because it is used—the parsed output there is used for things.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_101]

EAO: So the sorts of things we’re talking about here, for example, for now at the moment before Temporal is available everywhere if you want to format the date using year-month-day, you used to be able to do it in JavaScript directly and doing something silly using a local in Swedish that happens to use year-month-day as the date format. Right now it’s also possible to use the u-ca tag, e.g., `en-u-ca-iso8601` to get the formatting. It’s not clear whether that stays stable as well or whether that ends up with different separators being used. Another example is, for example, if you want to do format a compact number using SI metric prefixes you can almost get it to work using English that happens to give you a capital K for a thousand and for a billion, it uses the capital B rather than the SI capital G for that. And then also not just the formatters but the other places—the collator/segmenter on Intl have capabilities that are only available on the root locale and right now you can get the capability if you happen to use a locale like English which does not override the collation with any customization and it will not be the case forever. We have the locale things being used for locale-independent reasons. This is not really that great.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_106]

EAO: The Segmenter is another example that there is a note defining the general default algorithm but still recommended that tailorings of these is used. I think the ICU4X implementation also uses this locale independent algorithm when segmenting. So how do we fix this? How do we make the situation better?

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_111]

EAO: And when this was accepted for Stage 1, I presented two different solutions that we could approach. The first solution would be to identify all of the things that ECMA-402 Intl stuff can be and is being abused and we are providing capabilities there that were not available in 262 and then finding ways to make those be available directly in 262. For date and date formatting we have Temporal of course. But then for most of the other cases that we can think of, there is no clear way of, how do you work with durations? How do you get number formatting to be customized? How do you do segmentation and collation? What if you need formatting to parts, for instance? Formatted parts is something that is only on Intl stuff. So this is a direction we could go in to look into these solutions and kind of fine tune things for each of these. And the benefit of doing this would be that it would not introduce any known localized use cases into ECMA-402 that currently ECMA-402 does not have.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_116]

EAO: But the second possibility that we could go into is to add a null locale to ECMA-402 and this would not add any new APIs, but it would allow for the use of the value null specifically as a locale identifier. That’s currently an error. And it would be canonized to the code ‘zxx’ that is used for "no linguistic content", not applicable. It would be nice if we could use ‘und’ but that is an overloaded term effectively. But the CLDR has a clear behavior for ‘und’ and the behavior is relatively well defined in a number of different environments but specifically ‘zxx’ is not defined pretty much anywhere but it is a valid locale code. But defining behavior for ‘zxx’ would not conflict with any definition of what would be happening there. Then what we need to do is define explicitly what happens when you use a null locale in the Intl APIs in order to make those APIs provide utility and to solve the abuses of those APIs.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_166]

EAO: That’s what I’m kind of here to ask you to accept, the second solution of adding a null locale to 402. And to explicitly define what does it mean when you use a null locale? And for this to be the direction in which to kind of start working on what the Stage 2 of this proposal would look like. Now the rest of this presentation I’m going to run through a kind of draft of what the Intl APIs would look like with null locale. This has been worked through with TG2 and this is bare bones of ideas, but at least a starting point for what would be useful for users, what would not add data size requirements and what would be implementable or should be implementable relatively easily.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_171]

EAO: So as I just said. This is what follows. So the Collator with a null locale, it would use the CLDR root collation. There’s a little bit of variance here because of exactly how the browsers that are currently running on this work. So this is another thing I should note is that, yes, this is called stable formatting as a proposal. But when talking about APIs that consume localized content like the Collator, Segmenter and Upper and LowerCasing, these APIs are not like completely necessarily stable. But what is presented here is the stablest possible thing effectively for them that is also useful to allow for at least for now the same sort of behavior to happen on different environments where this code is run.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_179]

EAO: These are in alphabetical order. For DateTimeFormat the idea is to match as closely as possible whatever Temporal does. Because `Intl.DateTimeFormat` goes a little bit beyond the formatting you can get out of Temporal, we do need to define exactly the sorts of cases for how that works and what is the output of each. Details details details.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_201]

EAO: For DisplayNames, which as a refresher is giving you the display name, a localized display name of, for example, languages and regions. It already has a behavior for falling back to the requested code or `undefined` depending on whether the `fallback` option is set in its constructor. For `Intl.DisplayNames` we always do fall back for locale.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_207]

EAO: For DurationFormat it would be ISO 8601-2 duration. This is a string that also starts with the capital letter P, and then there’s a specific format for how you get the output out of that. This, for instance, is used in the HTML time element and possibly elsewhere as well.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_220]

EAO: For lists, we would be ignoring the type option. That one is defining whether the list is formatted as an “and” or an “or” type of list. And the list items would either be separated by a comma followed by a space or just a space.

EAO: For `Intl.Locale`, this is giving information about the locale, I haven’t sketched out what that would look like. That would need to be done better.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_233]

EAO: For NumberFormat. NumberFormat does a whole lot because we kind of overloaded it. The whole idea would be that the numeric part of the output would satisfy the StrNumericLiteral grammar also. But then because you can do, for example, currency or percent formatting, these need definitions. For example, currency, the output would have a numeric value followed by a space followed by the ISO currency code. Note that this is different from what English usually does because most locales put the currency code after the value, and all of the proposed other things here are putting the code or other identifier after the value. So to match that, that’s the proposed solution here. Without percent, it would put the percent sign after.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_240]

EAO: For unit formatting, this needs a little bit more definition for exactly for the short form of unit formatting. We can define that table of what the identifiers that would be printed would be. We can derive it from the SI units and units close to those—using, for example, l for liters and capital TB for terabytes. The short unit identifiers, that will need a separate table for them. And also noting that compound units, that’s, for example, meters per second or otherwise, would work with a slash between them.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_246]

EAO: We also have `notation: ‘compact’` as a thing. These would use the SI metric prefixes that we have defined for the values that this affects.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_261]

EAO: And for PluralRules, this would also return the other category, no matter what other options you give it and what input for select or select range you give it.

[Slide: https://docs.google.com/presentation/d/14KQA1Gyy0reIyouHtzp5ofYRrcwRjkY6GajeknLWhg0/edit#slide=id.g32d75ca01ae_0_268]

EAO: For `Intl.RelativeTimeFormat`, the result would also be ISO 8601-2 duration, but the prefix would have a plus sign or a minus sign to indicate the relative direction of the formatted time. This is valid in ISO 8601-2 specifically.

EAO: And `Intl.Segmenter` would use the UAX #29 segmentation with extended grapheme clusters. Some details of segmenter collator, there’s an issue open on the repo for that for defining that more exactly how that goes.

EAO: Then also we have a couple of places where we need to define the behavior in the `Array.prototype`.toLocaleString. That we need to have the definition as we use the comma as a separator.

EAO: And toLocaleLowerCase and…upperCase string methods we use the Unicode Default Case Conversion for that.

EAO: And that’s it. So a whole lot of somewhat Intl-specific implementation details here that we would need to polish up and put together into a Stage 2 proposal. But the key thing that I’m here to ask is that would it be okay to start proceeded with this proposal in the direction that I’ve here sketched out, or is there a need to either not proceed or to try and proceed in this other direction that the whole proposal has for it. When I discussed and raised this in TG2, it was like last week or two weeks ago, that group gave I think quite good support overall for “please let us proceed with the null locale direction on this one”. But that’s it for me.

DE: So this is really interesting. This is a lot of stuff for us to define. I was imagining that such definitions would come from CLDR? Have you discussed it with CLDR upstream, are they interested in defining data for this?

EAO: Not directly. The intent would be to explicitly define this behavior in 402 in order to ensure that upstream change in CLDR would not affect a change for our behavior. But it ought to be possible indeed to have the CLDR data for ‘zxx’ be providing the behavior as described here, so that the same pathways that we use for code right now could also be used for ‘zxx’, for the null locale as otherwise.

DE: As you know, Unicode has many kinds of stability guarantees. I would prefer this be defined as something at the Unicode Consortium level with stability guarantees, and we are using that downstream. If we have notes or normative text in the ECMA-402 specification that indicates or repeats this information, that doesn’t seem bad, but I would prefer that the data be driven from the Unicode Consortium, unless they tell us that they don’t want to be responsible for that and they prefer that we’re responsible for it.

SYG: I have a clarifying question. Possibility Number 2 does not require CLDR currently. Yet to use the null locale stuff mostly is still accessed via Intl. For an implementation that does not ship Intl, it would still not have access to the null locale?

EAO: That I think depends on the implementation and how it decides to handle the requirements that we put on supporting 402. I believe it is currently technically valid for the implementation to support 402, but to support it only for a very, very limited subset of locales. For example, technically an implementation supporting 402 but only supporting the null locale would support 402 technically.

SYG: I see. Okay, thanks.

RGN: That was a great lead in because the kind of environments that Agoric care about would basically patch in only support for stability when it comes to formatting. This would allow an introduction of Intl specifically for deterministic behavior that we’re talking about here. I also appreciate that you drew a distinction between locale-independent versus stable. And I have a strong preference for the latter. It’s not clear to me that we get a lot of the benefits from this proposal if the behavior is locale-independent but can change over time, because then we’re right back at not having reliable consumption of the output. So strong support for it. I appreciate the distinction, and I specifically want stable, not just locale-independent, behavior.

KG: So this seems like a good thing in general. And thank you for giving the presentation about what the behavior would be for each of these things, or for most of these things. It seems like for perhaps half of them there is some obvious canonical traits. For `array.toLocaleString` can do the same thing as array toString, that’s fine. For some of these putting the currency symbol after a space after the quantity of currency, like, to what extent is that the canonical answer how to do the local stable for currency. I would feel uncomfortable making arbitrary choices for any of these and assigning them to the sole canonical locale. If we’re going to be making arbitrary choices, I would be happier to have some other way of specifying things to ask for the particular behavior that isn’t locale-sensitive but also just ascribe canonical status to a particular region-dependent choice. And my question is, are all of these in fact canonical already or are they arbitrary choices that we’re making?

EAO: Many of these are effectively arbitrary. Some are canonical, for instance, the duration formatting using ISO 8601 duration strings is effectively canonical. But the specific thing for example that you mentioned, the currency formatting, there are common practices for that. And when you look at the common practices across all locales, the common thing is to have the value followed by a space, followed by the indicator. Noting specifically, though, that because these APIs do support formatted parts output, it would be relatively easy to consume that output, in particular if it is in a known and well-defined order in which the parts come, and rearrange them for presentation if that is requested.

KG: Thanks. I guess I’m fine with that. I do feel a little weird about declaring particular things to be canonical, but I see the value in it as well.

SFC: There we go. I want to talk a little bit about the use cases here and how the use cases have overlap but also diverge. Three reasons why I think this type of proposal is motivated is, you know, because of course with this behavior that’s the title of the proposal, a lot of the issues we have seen previously about developers expecting that Intl APIs behave a certain way and then when that behavior changes because of language and locale changes, then their code breaks. So obviously that’s a use case. But then a second use case here is, you know, this idea of that we always discourage programmers from doing… a certain anti-pattern that I see people do all the time is like I have an application and I’m going to take screenshots of that application and check that the screenshots are consistent and then you upgrade Chrome and upgrade and they break. I call it the testing use case with the screen shot and using it as an example. That’s the second use case here. If you have an application that is fully plugged in with Intl and then you just switch the locale to the null locale, you can then have a certain variance that you can rely on for testing purposes. And then a third use case that has been raised in the TG2 meetings is this idea that, well, you wanted to have access to root collation and root segmentation that use rules that come directly from the Unicode standard that are not locale dependent and not possible to access because to use these must specify locale and any locale is support to tailings. The ability to access root collation and segmentation is not currently available and this proposal could make it available.

SFC: Now, one issue is that all three of these use cases are all somewhat solved in this proposal. But all three use cases could also be solved in other ways. I personally think this proposal, given that it addresses all three, is a fairly narrow solution, and the fact that it’s a narrow solution is why it’s a decent solution. But it also means we have interesting questions about which of these use cases do we prioritize? For example, to discuss the previous point about number space unit, right. Also for durations, something about do we use the ISO 8601-2 DurationFormat? Like, this is really useful and it serves really well for the stable behavior, you know, value proposition that we have. Does it serve well for the testing use case? Maybe not, because I don’t know of any locale that would display durations in quite this form. It certainly wouldn’t be appropriate for—you know, especially in a long form testing things like do you have enough space to display your duration and things like this? Pseudo-localization is a better solution for the more problem. If you have this in the language, people will use it for testing even if it’s not the right solution. We can make it closer to the right one for the use case and doing number space unit, for example. I think that this is more—I guess my conclusion to this comment is that I think this is a proposal that solves a lot of different problems, and it might be good to sort of have a guiding principle about which problems do you consider to be the main problem that you’re trying to solve? And then use that to guide the specific behavior that we implement for each of these cases since we do have to look at each specific case.

RGN: Speaking to your final question, I support approach Number 2 of the null locale/pseudo-locale type representation, and it makes a lot of sense, and it’s something I can see using. Thanks.

JGT: So first of all, I think this proposal is great. I’m really happy to see it. I think to follow up with what SFC was saying, it addresses a lot of challenging cases today. The only concern I would have is it is pretty common to use undefined as a locale today when creating like an `Intl.DateTimeFormat` or other cases and only putting undefined because you have parameters like options need to be laid in there. For me at least, it is a little weird that undefined and null have very different behavior, and maybe that makes sense to the folks in this room, because we’re really familiar with those differences. But I would worry that less experienced engineers get tripped up with that. I was wondering if you considered alternate names that are strings, an actual locale name instead of null. That’s it.

EAO: So specifically the string that is proposed to also work as an alternative to null is ‘zxx’. The reason why I’m proposing to also support null here is that ‘zxx’ is really hard to remember, and it is completely opaque to kind of “what does this mean”. And to a reader seeing an explicit null would probably more clearly indicate that no locale is the message being sent, rather than ‘zxx’. But in a situation where there is a potential or a perception that confusion could occur, ‘zxx’ could be used to explicitly differentiate this from undefined.

JGT: Are we prohibited by the sort of syntax rules of that to use like a string like ‘stable’ or ‘unknown’. or something that doesn’t look like a locale and is more discoverable for people who have never seen it before?

EAO: There are possibly some issues, in particular, I heard from the ICU4X team of introducing something other than what looks like a locale here, because that would end up impacting a lot of what they can do in terms of optimizations around locales.

JGT: Makes sense. Thanks.

NRO: We talked about this internally at Igalia and we have different positions. We did not share position. Personally I find it weird to have null for different behaviors and they are same with nullish coalescing and different with parameters. We should really try to avoid more cases for the difference. But on the other hand, we understand EAO’s point that ‘zxx’ is a similar random string, you are only going to know that the string exists if you know that the various ISO 629 codes work.

LCA: (via queue) +1

SFC: Just to note we discussed this definitely on the TG2 meetings how currently the undefined value has behavior that is basically equivalent to the string ‘und’, that is definitely I don’t think something that anyone had actually intended, but that’s currently the web reality in all major browsers.

KG: Does that string do anything? Is there a locale corresponding to the string?

SFC: Well, there is but no browser ships it. So the `und` locale falls back to the host which is also what the value undefined does, fall back to the host locale. There’s correspondence there. And then the null locale corresponds to the other special string. So I don’t know if that changes anyone’s—I’m just making an observation to add to the puzzle. And the reason undefined is special because it maps to a specific value that also starts with the same three letters, whereas null does not map to that because it doesn’t. I don’t know if that changes anyone’s position. But throw it out there.

NRO: This is a random idea, but if we don’t want to do null because of the confusion with undefined and we worry about the string, can we use something else and have a well known Intl single value and well known symbol like `Intl.StableFormat` if we pass this first argument? An example worth considering.

SFC: My comment here is the proposal is to add the ‘zxx’ locale, right? And then null is basically an alias to the ‘zxx’ locale. If you look at it from that perspective, I don’t see there necessarily being a problem that we just add an alias to it.

KG: I didn’t understand the answer about why we wouldn’t use longer strings. Something about optimization in ICU4X or whatever, but that seems like it’s lower down the stack. Like, surely in the JS part of this before calling it to the library, you can template that string to whatever other string you want. It seems like we should consider that space still open. Like, if we think that the string stable is more clear and discoverable than anything previously discussed and like just requires the translation at the boundary to some other thing that the underlying Intl library understands, that seems like that might be the best solution. I would like to consider that space open. I don’t think we are necessarily deciding on the exact way of getting the stable formatting right now. But I would like one of the possibilities to include particular non-locale-looking strings, unless there’s some other reason not to do it or I misunderstood what the reason not to do it was.

EAO: So on that one, right now we are in a world where locale identifiers are becoming more and more regularized, and this means that the language for locale identifiers almost universally uses a two or three character primary tag and then subtags after that, that fit very well defined mold by now. And this overall does, yes, support grandfathering in tags where the language identifier is either two or three characters or five to eight characters like, for example, stable would happen to fit in there, but it would be really great if we were not to introduce effectively a requirement for supporting that sort of locale identifier into the world. Also noting that there is a need, for example, as noted here for the Intl collator at the bottom, which is why I moved to this slide, for adding subtags even possibly on the ‘zxx’ or null locale, and having a string identifier for that in addition to ‘zxx’ would certainly create an expectation for the subtags to work on the longer-form string. If we do not want to go with something like null as an alias, something much more discoverable would be like a well-known symbol like, was it `Intl.Stable` that was previously recommended? But I would want to push back against a longer string identifier here as an alias for ‘zxx’.

KG: I’m not suggesting that you would introduce a new tag. I’m suggesting that one of the valid inputs for this would be a string which is not a locale tag, which at the precise boundary of the API is treated specially, if you say the Intl is treated differently as any other string and perhaps translated to a particular central understood by the other library or something and translated to ‘zxx’, I don’t know. But I’m not suggesting the introduction of a new language tag ‘stable’, I’m suggesting that one of the inputs to this be the string ‘stable’. It’s a different thing.

RGN: Responding to a point that SFC made earlier, I disagree that the ‘und’ locale is equivalent to the undefined input for locale, because ECMA-402 privileges and looks for the value undefined and it’s what you get for instance if you provide an empty list of locales. Whereas ‘und’, at any point in time an implementation could start shipping and supporting it with behavior that as of that point would be different from undefined. What undefined does in ECMA-402 is defer to the current default locale. ‘und’ is not guaranteed to have the behavior.

PFC: I’d like to build on what DE said a while back about recommending that this null or ‘zxx’ locale be defined by CLDR as part of that dataset. I think there’s a really good reason to require that it is defined as part of the locale dataset. The reason is, in Test262 we have been very interested in how to write locale-sensitive tests for functions like toLocaleString and the classes that live on the Intl object. And locale data can be updated as understanding of best practices changes. So it’s difficult to find a balance between writing your tests to compare to a certain output, but also anticipating that the desired output might change over time as the data gets updated. So this null locale would be very helpful for writing tests like that. And if we defined it in the spec so that it was a special case, so that the formatting was defined outside of the CLDR data tables or whatever, then there wouldn’t be much point in using that for testing because it would be testing a separate codepath in implementations. So I personally think it would be better to require that the data source is defined elsewhere outside of the spec.

EAO: As I reply to that, just noting that I do believe that the current sketch of a proposal for these APIs, that the formatting behavior presented there, should all of it be representable and implementable in CLDR. The intent with the presentation of the direction here would be for possibly us to define what makes sense for JavaScript. How should JavaScript work in each of these cases, and for the implementation side of that, either to, yes, go to CLDR and get agreement from them about those behaviors, or then ensure that it’s possible to overlay custom data on top of CLDR that ensures that this exact behavior comes out of it. If it’s not possible to get that already directly within CLDR and to have sufficient guarantees about stability from CLDR… I do not believe that the CLDR currently, for example, guarantees that specifically the patterns and the formatting and so on for any locale are as stable as we want to have for ‘zxx’. Therefore, my initial desire to have the behavior be defined in 402, but to have the implementation, yes, coming through the same pathways that other formatting uses.

SFC: This is my comment about a stable Collator. A comment that I think RGN made that I just wanted to be clear about is that `Intl.Collator` and `Intl.Segmenter` one of the cases is get at the root collations and root segmentations, and it is worth noting that these are not necessarily hundred percent stable, and when Unicode adds new code points or emojis or scripts, the behavior here will change. Because previously if you had text with a certain script, it will sort differently. Because previously those were undefined code points. It can also be the case that Unicode—this is not CLDR, but Unicode—will discover something new about a script that previously existed, and I know there’s been a lot of changes going on with the Mongolian script and so forth and the collation rules and segmentation rules might also change. I just wanted to clarify if that’s a concern. You know, one path you can take for collation, if you’re using the ‘zxx’ locale `Intl.Collator` left the graphic sorting on the UTF 16 bytes. That is stable. But it’s also not the root collation that we would like people to be able to access. So I just wanted to probe if that’s a thing that we should be considering.

RGN: I think yes, and yes it is a concern. What is valuable here I think is not access to the root locale, but access to deterministic stability. Access to the root locale is itself valuable, but shouldn’t be mixed together with the concept of stability. So for collation, for instance, I would expect it to be strictly based on codepoint value and therefore not change when a codepoint shifts from undefined to being associated with a character.

SFC: Follow up with that, you feel the same about segmentation?

RGN: Yes.

SFC: UAX#29 segmentation will change, and the grapheme clusters will change.

RGN: So there are two different kinds of change there. One is because UAX#29 segmentation is dependent upon classification of characters, you know, what category they fall into, that a new version of Unicode can change. And therefore that would have an impact on segmentation. That to me is just part of the progression of Unicode as a simple collection of characters and is not concerning, because there’s a whole lot of other things that come along with that, and you already have a dependence in the form of regular expression property escapes. The second kind of change would be of the rules themselves, a revision of UAX#29. And for that, I would hope that, no, we would stick with stability. We would actually snapshot a particular revision of UAX#29 and commit to that for all time in this stable behavior.

SFC: It would be difficult to implement a forever stable UAX#29 segmentation rule, but I think this is something that we can discuss later. We had time on the time box and we can continue to probe this on the TG2 meeting.

EAO: So noting, yes, what SFC said and was discussed, another way of putting that is that this proposal specifically provides for slightly different behavior. It provides for stable behavior for everything except for `Intl.Collator`, `Intl.Segmenter` and the toLocale{Lower,Upper}case functions because those are consuming localized data, and for these, there is very useful sort of root locale behavior that is currently not accessible and it would in general be very useful to have it become accessible, but that yes, relatively stable but not completely stable behavior is not, well, stable. One thing that could be explored here possibly is introducing a way specifically for these Collator, Segmenter and toLocale{Lower,Upper}case would be the way for these to access the root locale explicitly using either the string und and what CLDR and Unicode use for it or some other method that we probably ought to discuss in TG2 further.

RGN: Agreed. I strongly support that. And in particular support it in a way that is distinct from requesting stability.

EAO: And if implementing something like that, in particular for something like `Intl.Segmenter` it is—there is utility I think, high utility in being able to access UAX#29 segmentation, but introducing a requirement at the spec level of always supporting a very specific version thereof, seems like it’s introducing a cost that is maybe not worthwhile. So for something like that, the `Intl.Segmenter` with a ‘zxx’ locale should be doing something different, which is a topic we ought to be discussing later in more detail. But none of the proposed things for the Intl APIs here is meant to be the final word, just the best guess so far at what ought to work and what would be useful for developers and users.

RGN: To be clear, if it is not fully stable but partitioned in this way, then what you’ll see is that an environment which needs determinism would just exclude support for the unstable APIs. You would have for instance `Intl.NumberFormat` but not `Intl.Segmenter`. In a strict technical sense that is not actually supporting ECMA-402, but in practice that’s just what you get.

USA: If that was it, then I think EAO you could dictate a summary.

### Speaker's Summary of Key Points

The alternatives were presented, and support was given for introducing a ‘zxx’ locale for stable formatting. The proposed alias null for ‘zxx’ was discussed, and some concerns were raised about its closeness to undefined, which has different behavior in this API. Alternatives to null as an alias that were proposed included a well-known symbol (`Intl.Stable` I believe it was), or a longer string identifier. The non-stable root locale behaviors on `Intl.Collator`, `Intl.Segmenter` and string toLocale{Upper,Lower}case were discussed as distinct from having stable behavior, and further discussion will be required for determining how to make those APIs be able to access the root locale rather than exhibit stable behavior.

### Conclusion

* Stable Formatting [PR #18](https://github.com/tc39/proposal-stable-formatting/pull/18) can be merged.
* The alias for ‘zxx’ will need further consideration
* If ‘zxx’ explicitly means “stable”, we may need another special locale identifier for the root locale.

## `Error.captureStackTrace()` for Stage 1

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/mgaudet/proposal-error-capturestacktrace)
* [slides](https://docs.google.com/presentation/d/1SFdS9n5JR7Jqz29s7ApvkqDOqOfPW-IaBR2orK828As/edit?usp=sharing)

MAG: As the title says this is the proposal stage 0 to 1. `Error.captureStackTrace()`. So Chrome shipped `Error.captureStackTrace()` a long time ago. I don’t actually have an original date. But can I find reference of it as early as 2015. It’s been around for a long time. It was a Chrome only API and didn’t pose much in the way of web capability issue because if somebody tested in Safari let’s say, they would catch this problem. However, in August of 2023, JSC/WebKit shipped the method. Now in order to avoid web interoperability issues, we will ship it. I have an implementation and just need to have the time to unflag it. Maybe we should spec it with three engines ship it. That’s why I’m here. The documentation what this thing is and what does it do is largely contained in the V8 stack trace documentation.

MAG: You give `Error.captureStackTrace()` some object. This can be any object and it will apply a stack property to this in some manner that will give you the current stack. So you can just give it an empty object and pass and call error capture stack trace with the error property on it with the current stack. There’s an optional object called constructor that allows to elide frames that came before this. If you see a stack, you will not give any frames until you see this constructor. If you give it to something that hasn’t been called you get an empty stack. There is some divergence in the implementations. So, for example, V8 applies and installs a getter property. JSC defines a string-valued property. We are following JSC right now but this is a point of discussion.

MAG: Should we treat objects which have existing `[[ErrorData]]` slot any differently? Right now the answer is no. So if you, for example, have an object and you delete the—you have an error object and delete the stack property, if it’s on the object, it’s on the prototype, you hide it. And then you apply error capture stack trace and now you have an own property that is stack and then you use the maybe captured stack getter to check what the original stack trace is, is it been censored? This is an implementation decision that could decide we could spec if we decide to spec it. That’s really it. I mean, this is a Stage 1, 0 to 1 proposal. There is this thing. There’s not a lot of design space here. There exists implementation that’s been around the web Chrome only passed for a decade. Probably don’t want to change too much. How we should spec it, we have two different choices. Really right now the ask is should we do Stage 1? With that, I open it to discussion and questions.

JHD: I mean, I’m not sure if it was common knowledge in this room that JSC shipped it that long ago, but is there a reason that they need it? I can’t click on the link from the slide I’m looking at with my eyes. Why was it shipped in the first place in JSC?

MAG: So the stated reason and if KM or MLS is on the call can maybe weigh in on this but KM weighed in by doing this it made a benchmark called web tooling benchmark four and a half percent faster. We did also see a small improvement on this same benchmark. We are shipping it because we get a slow trickle of bugs that the website didn’t test in Firefox and now is broken.

JHD: Right. So I understand if it exists in two browsers why the third browser must ship it. I’m questioning that the precondition there or the condition there, like, if the only reason to ship a not even fully compatible implementation for JSC was to make a benchmark a little faster, can they just unship it? That implies that the web didn’t depend on it.

MLS: So why we want to unship it now at this point if we had it out there for coming upon two years and we are web incompat issue and Chrome uses it and we ship it in Safari and more people use it. We basically break ourselves. I don’t see much motivation doing that.

JHD: It’s already different and some aspects that won’t work the same any way.

MLS: The stack traces are different and we have the API.

JHD: The contents. The getter versus the string property. I mean –

MAG: Don’t really know the difference.

JHD: If that’s the case, that also should mean we’re free to specify either choice and V8 and JSC should be able to match it. If people can’t tell the difference, it’s not a web reality issue.

MLS: Depends on what level of difference developers are willing to tolerate. But now he wants to do some standardization of this and then we have some discussion of what implementations that are already shipping it would be willing to –

JHD: I guess as a reasonable reply of why JSC would choose not to ship it because it’s just creating bugs, right? I get that. But that still tells me that there is some design space in fact for what it does and exactly how it works in the sense that there are three different sets of behavior in the three browsers right now and separately the fact that JSC shipped it for no reason except to motivate a benchmark is what it seems and it means it wasn’t users asking for it and then I don’t know if it was—how it was announced it was shipped or if anyone even noticed because it was news to all of us in this room.

MLS: We announced it on our preview version all the things that we add. But we didn’t broadly announce it. It wasn’t a standard, right?

JHD: That’s what I mean. I wonder if anybody even noticed. And so –

MLS: I think they would notice—we would notice now because we get bugs because now you don’t have this anymore.

JHD: Okay.

DE: For this conversation between JHD and Michael there are multiple ways of defining and analyzing web compatibility. There’s the theoretical way used a lot in EA-6 and talk about intersection semantics and something is not supported by all the browsers or most of the browsers, it doesn’t really count for web compatibility. That was used to have Annex B 3.3 for sloppy mode function hoisting and something that was web incompatible and the browsers had to fix it. The way that browsers analyze web compatibility is more empirical and more what might actually be going on than this abstract intersection between all the browsers. One empirical thing that happens is a lot of websites target the mobile web that is WebKit plus Chromium, unfortunately. And if a function is there for a couple years in the mobile web and people can depend on it, it’s quite likely. So, sure, that’s theoretically unmotivated that the mobile web should be a thing to maintain compatibility around but it’s practical.

DE: Overall the burden of proof when thinking about the web compatibility things is kind of I’m the one that wants to change something that is already shipping. Because it ends up being a lot of work for browsers to either investigate further whether something would be compatible or to ship it and see if something goes wrong. So our standard—I mean, our default position should be just not actually changing those kinds of things rather than the default position being you haven’t prove it’s really necessary or something like that. So I think it’s a little bit round about. That’s all.

JHD: Regardless of the outcome of this proposal and this item, it would—I’d like to request that all the browser implementers in the room, if they’re going to ship something that’s not in like HTML, 262 or 402, the sets of standards that we would consider to be standards, please bring it to this body first just so we’re aware of it.

MAG: That’s why I’m here.

JHD: That would give us—thank you MAG. That would give us the chance before two browsers have shipped it, we can figure out if there’s a thing we need to standardize and specify in a way that avoids compatibility problem and make sure all the browsers ship at the same time and make sure all the other ones if it’s already in one. I guess I’m just asking that if you’re going to ship something that is on-standard that you kind of give us a heads up. Not asking for permission. That’s not the dynamic. But just letting us know.

SYG: Which item is—I just entered that one. I meant to go after MLS and the what.

CDA: It was abrupt. I thought it might have been a response to what was being said at the time. So so if you want to talk about the benchmarks.

SYG: I hope to impress on the room there that JHD I think it’s important to realize that benchmarks is not some flimsy reason things get done. It is one of the deepest fundamental reasons that anything gets done in JS VMs and if you frame it it was just for a benchmark and you can undo it, that is almost never the case.

MLS: I’m next. What drives our development is benchmarks and features and security mitigations or security features. Then the question that somewhat rhetorical but we’re going to ship something and anything this there was a defacto standard and we’re going to ship something that we come up with and something that we come up with is not standardized. Who do we communicate to? And if it’s JSC only or Safari only, you know, which we do, and then we think we standardize it and be able to access pay on the web page, I think we’re champions of that. So are you saying that we should at every plenary say, okay, in the last two months we shipped these features that are not part of 262 or 402 or anything else and we shipped these in JSC, we want to know.

JHD: Yes, if it is a JS feature. If it is CSS then the CSS group may be a better place to bring it. Yeah, if you being any one browser think it’s worth shipping a thing that’s not part of a standard, there’s a motivating use case behind it. It may not matter to the rest of the group and it may not be—maybe you’re trying things out and not standardization, that’s still fine. But the whole point of this sort of collaboration is that we can get input from perspectives that we may not have considered.

MLS: Should access and battle done the same thing?

JHD: Ideally, yeah.

JHD: I mean, I’m not asking for a requirement. I’m not saying everyone must do this. I’m requesting in the spirit of collaboration, that there be maximum notification especially when it’s early enough in the process that things can be caught or changes could be made. The deviation on the previous – or one of two slides ago could have been –

MLS: In this case, you have Chrome shipped it for like ten years.

JHD: Right. So the existence of it in Chrome is not a surprise. And everyone knows that.

MLS: And in this case, it seems like unwarranted we would need to, you know, by the way, we shipped something eight years after Chrome shipped it –

JHD: I mean, there’s three browsers. When two ship a thing, that’s a meaningful ship and it would be hopeful we all have the opportunity to be aware of the possibility before it is too late?

CDA: I’m just going to interject real quick. I think that’s a great topic, the conversation about keeping folks in the loop. I see DE’s comment on there. It does strike me as a little bit orthogonal to this topic. So maybe it might be best to move on.

DE: Do you want to decide who is the next speaker, then?

CDA: I don’t want to completely stifle the discussion. But SYG please go ahead.

SYG: I think if you think this whole discussion is not productive for now, I would rather we go on to the actual—the next new topic.

CDA: Just be clear, I think it’s a really interesting topic. I just feel like it’s maybe deserves its own—we’re here talking about error capture stack trace and not the meta problem of, you know, browsers shipping things that might be of interest to the committee.

MM: I just want to make the distinction, I think JHD and I are aligned on, which is the thing that distinguishes whether it’s so to speak on JavaScript versus a host thing is. “Is it a property or behavior on a JavaScript intrinsic”. In this case it’s obviously a method on the error constructor and on the JavaScript intrinsic and agree with JHD, there’s no requirement here, but it would be very helpful and I just want to point out that if the thing that’s been in V8 forever that’s supposedly is no surprise and therefore nobody would have particularly benefited by being informed or hurt by not being informed, that case turned out V8 recently changed the data property from their created by their prepared stack trace from their own data property to their own accessor and that caused us and companies that collaborate with us to have to do a mad scramble around an introduced insecurity that took us by surprise because nobody thought it was interesting enough news to inform people about. And turning it into an own accessor was a real disaster and still a security problem for us that we cannot fix pleasantly outside of the language. Yes, please if it’s on an intrinsic, then it potentially is interesting to many people here.

DE: We can skip. This is an interesting meta topic for later.

MM: So just sort of closing the loop on the same point in another way, with regard to capture stack trace, I like the direction that this thing is going with regard to it making an own data property, I just want to say that our position is we would not accept this proposal if it were creating an own accessor property. We like it as an own data property.

SYG: One of my greatest regrets is having to deal with `Error.prepareStackTrace()` is that do you want to standardize that as well or just `Error.captureStackTrace()` that magically makes a stack trace property?

MAG: Yup, I have zero interest in trying to pursue `Error.prepareStackTrace()`. In the absence of it become web compat problem, I don’t plan to look at it.

SYG: Sounds good. Okay.

CDA: That’s it for the queue.

MAG: Implicit ask being for Stage 1. I would be willing to push this forward on the data property direction. Any objections of support?

JHD: Sorry. I wanted to talk and didn’t put it on the queue. But can you go one slide more.

MAG: I will attempt to.

JHD: So the error prototype stack getter is the next topic on the agenda. So I can talk more about that during that item. But I would say, yes, is the correct answer here, the capture stack trace isn’t monkeying with internal slots, it’s just installing a data property.

MAG: That’s what our implementation does today and it makes perfect sense. And it is a design that people may have different opinions, but I agree.

JHD: Yeah, with that on the record, better to ship it than—Stage 1 is fine. Web compat is a problem.

DE: I think this is a really good proposal. There’s a lot going on with errors that is hard to unify between browsers and the things that JavaScript engines in general and the things that we can, we really should specify. It’s great to get capturing the stack trace faster. We have use cases inside of Bloomberg where we want to capture the stack trace and turn errors lower. So I support Stage 1.

MM: So, yes, support Stage 1 with data property.

MAG: With that, I can cede my time and I can jump ahead if we want.

CDA: Any objections to Stage 1 for captured stack trace? You have Stage 1. All right.

### Speaker's Summary of Key Points

It sounds like most people would strongly prefer that 1) this produces a data property 2) That this does not interfere with or touch the `[[ErrorData]]` internal slot should it exist. I will pursue those choices.

### Conclusion

Stage 1 advanced

## Discussion about shipping non-standard features

CDA: We have like eight minutes left and now I realize I sort of stifled a little bit of the discussion on the topic of vendors and JavaScript implementers shipping things and notifying the committee; if that’s a topic folks would like to return to, we do have a few minutes.

JHD: I will say I’m not proposing a process change. It’s just a polite request. There are people here who care and would like to hear about stuff—non-standard stuff before it gets shipped. It’s fine if there are people who are here who don’t care and don’t think it’s valuable. If you don’t want to take up plenary time and throw the issue over the wall on Reflector or drop something in Matrix or finding a way to get heads up would be a courtesy highly appreciated. I don’t know if there’s more to discuss beyond that.

DE: I think DRR has had a good model in TypeScript in explaining what kinds of features are coming sometimes to the committee. This is useful so that for various different, you know, JavaScript super sets and JavaScript with the extra APIs or extra syntax, it’s useful for us to know what’s going on whether it’s before or after shipping, you know, obviously earlier is kind of nicer, but sometimes it feels too early. Of course that’s up for whoever is doing the presentation. It’s really important that this is not understood to be time to object. Otherwise, we’ll just scare away presenters. But I think even though traditional feels a little bit off topic because we’re always discussing proposals advancing stages, just having presentations about what’s going on will be really helpful for the committee.

CDA: Any other comments before we move to the next topic?

MAG: I am curious for JSC and V8, are there non-standard things that you’re shipping or planning to ship? Like, at least for us for JavaScript, the only non-standard stuff we got is very internal facing, so it’s not exposed to the web and exposed only to developers within ma zilla and what is the plan for shipping or plans to ship non-standard stuff or behind nonstandard trials and other boundaries to stop it from escaping containment?

MLS: We typically don’t ship non-standard features. We tend not to do that. Most of the work we do is features and security mitigations and performance tuning. It’s rare that we ship something that is not standard. SYG had a comment that if you want to see what is going on, there’s email lists for both Chrome and for Mozilla and the STP release notes, be sure you put this change, that change in the release notes and every two weeks we get to add things to our—I understand what this is, is this okay? Yes. Okay, you describe this in a way that makes sense?

SYG: There’s nothing new on the pure JS side that we’re planning to ship that is nonstandard. At this point I think anything new that has observable behavior poses too great an interop risk and, that said, V8 shipped stuff in the distant past that we continue to live with like capture stack trace and there’s also, I think, what is it called `v8.BreakIterator` or something that was superseded by `Intl.Collator` that we would love to remove but unfortunately people still use it. So there are examples of things in the distant past. But we’re not planning to ship anything new that may have any observable behavior that would pose any interop risk. An interesting thing that we may ship and that is in OT right now is this compile hints thing that is purely for hinting when to parse something to improve startup speed. And there is nothing observable going on there. And this is a thing if you were in Tokyo that my colleague Marja (MHA) presented back then.

RGN: `Intl.v8BreakIterator` was superseded by `Intl.Segmenter`, but still exists.

SYG: We would love to unship it but have to wait for the use counters to go down.

DE: So I’m glad you presented on parse hints. Even when something is expected not to have interop risk by parse hints can still be interesting and hopeful for everyone to present it to committee. I hope that as this or other features of all, you can bring back to committee for future discussion, I also note that parse hints are very important to have tooling adopt for their effectiveness and TC39 is a great way to be in touch with tools to get visibility.

JHD: Yeah, so to completely echo everything DE just said and I think that if a thing—the whole point of open source is that the more eyes see a thing, the higher the chance the problems will be caught and things will get to a better direction. There’s obviously too many cooks check and balance there, but, yeah, I would love to see more early collaboration even about things that have no interop risk or not expected to be used in other engines.

### Summary

The committee discussed preferences for notification when implementers are shipping features that don't currently exist in the language.

## Error Stack Accessor

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/ljharb/proposal-error-stack-accessor)
* no slides

JHD: So error stack accessor. I have had the larger error stack proposal going for nearly a decade now. Some of the feedback I got the last time I brought it, I discussed that was the last in-person plenary or perhaps the previous one, was to try and split it up so that each piece the standardized existing stuff piece and the add new capability piece were able to be discussed and implemented and advanced separately. I’ve done that. This proposal is attempting to only standardize effectively the stuff that’s already there. The spec here is hopefully pretty straight forward. Basically it’s an accessor property on the prototype. It doesn’t belong on individual errors. The getter throws if it’s called on a non-object. For web compatibility it is not called on the error object, it returns undefined, and implementation-defined being the magic spell of browsers can keep doing exactly the same thing they’re already doing and not trying to step into that minefield. The setter, for the same web compat reason, throws on a non-object and throws the argument and will always get one and if not an error object and sets own data property on the error instance with whatever you pass into it. So it shadows the getter. The getter will continue to work if you borrow it and dot call it on the error object you still get the original stack. That is how all accessor properties on prototypes that reveal internal slot information work in the language when there’s a shadowing owned property on the instance, the accessor when borrowed still has the factor and that is important for the language and that is the capture stack trace and if you use capture stack trace and provide alternative stack by eliding frames that is still just the shadowing on the getter property and the getter can pierce through that and return the slot value or you know it’s not actually a slot value because it’s not stored in the error data slot. But that’s also a bit of a hand wavy thing because it’s very complicated to try and figure out how one would store that thing in the slot without also having to describe how one constructs it and what its contents are, and that is something that separate and future proposals should be focusing on. So I’m keeping that out of this one to try and meet the feedback I got about splitting up the proposals.

JHD: There are still some open questions that will need resolution before advancing beyond Stage 2. The answer to them will be some combination of “do the research” and “what is the union of what browsers already do”? What would be the ideal behavior? Is it possible—like, web compatible to change to the ideal behavior if it’s different and are browsers willing to make that change in that case? Those are a lot of ifs that will likely result in it just more or less matching what the majority of browsers already do. But these are perfectly acceptable and expected open questions that can be resolved within Stage 2.

JHD: So I am hoping to advance to either Stage 1 or 2. And I would love to hear any thoughts on the queue before I ask for that.

DLM: So we started collecting some telemetry on what was proposed a few weeks ago and the initial results are positive and everything that JHD mentioned would be web compatible. These are results of nightly builds that aren’t typical of the user base. But I think this is a good idea and definitely support it for Stage 1 or 2.

SYG: I have a question for DLM. I thought SpiderMonkey already had a getter-setter pair on `Error.prototype`. What is the telemetry data for?

DLM: Specifically checking for the `[[ErrorData]]` internal slot as well as making the setter require a string, and those changes seem web compatible with the data I have so far.

SYG: What was the second one.

DLM: The setter I believe is specified to do nothing unless the argument is a string. It seems like that would be web compatible as well. That is not what JHD was sure about.

JHD: The current specification on the screen does not check the type of the setting, the set argument. But there’s an open issue discussing that. What the current spec does with the setter is it requires that the receiver be an error object. Personally I would love to restrict as much as possible and so I’m glad to hear that checking that being a no-op when the assigned value is non-string would be web compatible and I can update the spec text in that event.

OMT: I just wondered if the steps there include not having stack traces, because I don’t think the spec explicitly requires –

JHD: Yes, that’s correct. It says that represents it stack trace of E, that is hopefully walking a distance of saying if you have stacks, put them here, and if you don’t have stacks or have security reasons why you don’t want to give one, it’s cool. Implementation defined means an empty string qualifies.

OMT: I support that for stage 2.

JHD: At return it would be great to be in a world where stack traces are fully defined in the spec. But that is lots of work and many proposals away, I suspect.

OMT: I agree that for define.

JHD: I see the queue is empty. I guess first can I have consensus for Stage 1? The problem statement being specifying the currently non-standard stack accessor and mutator on error prototype?

CDA: +1 for Stage 1 and 2 for OMT and SYG has a question.

SYG: I have a question about this error data internal slot check. So given that V8 is nonstandard implementation is able to manifest stacks on non-error instances, on non-native error instances, if you standardize this—if we standardize this, it is still the case that V8 will have those stack accessors or own properties or whatever they are—I think they’re own accessors right now—that don’t live on error instances.

JHD: That’s correct. Setting aside that there are folks that really want to see the own accessors go away, that accessor is a completely distinct function from this one. And capture accessor stamps on the object is unaffected by this essentially.

SYG: That ties into MAG’s proposal, I guess there needs to be enough leeway built in then to capture stack trace that doesn’t prohibit it from stamping a stack onto non-error instances.

JHD: I’m trying to think about that. If `Error.captureStackTrace()`, I assume for web compatibility reasons and V8 compatibility reasons, must be able to put a stack string on to any arbitrary object. And that must not be prohibited. And that otherwise sort of defeats the point of that proposal. Does that align?

SYG: I’m just confirming that it basically needs to have that allowance for web compat. But if the thing you’re putting the stack on to with the error instance with the error data, then this getter then kicks in and then it has the semantics. I want to confirm that that is the intention.

JHD: I think that would be an open question for `Error.captureStackTrace()`: if you do `Error.captureStackTrace()` on the error object and alter the stack trace, should that alter the internal value on the stack trace on the error object such that the accessor reads it, or should it be completely unrelated? The one slide in the `Error.captureStackTrace()` proposal that I commented on should say it’s completely unrelated and that you cannot use captureStackTrace to censor the actual stack as long as you have this getter available. It would be an alternative implementation of `Error.captureStackTrace()` that inserts into the slot on error such that the getter reveals the censored stack but I don’t think—like, that’s a cross-cutting concern. But I don’t think that’s a specific item in this proposal. It’s something that a choice within captureStackTrace will determine without any change required in this proposal.

SYG: Right, okay. Thanks.

MAH: I have a clarification question for SYG. You mentioned that there may be own accessor properties left by some implementations, what cases do you have in mind?

SYG: Nothing concrete. I think if this gets standardized likely one way to go here is that the own accessors disappear, because we standardize on error instance that they be a prototype accessor, but that’s only for error. For the non-error cases, then we would have a choice to manifest those stacks as own accessors or own data properties that are magical somehow. And it would be like since I know that you, Agoric, really wants to get away from own accessors, that would be a time to try to present those as own data properties instead. There’s no concrete use case that we have for them to be own data or own accessors. But that would be a natural place to try to get away from it.

MAH: For captureStackTrace were in favor of just defining a data property as we mentioned. There may be ways of having it an accessor if you’re really interested in a lazy evaluation of the stacks for when it gets accessed, not when it gets defined, but that’s a topic for discussion on the captureStackTrace proposal.

SYG: We would prefer it not be—to give it more context to the behavior change for stack accessor that caused the bug for Agoric the reason it was changed is we had a bug, V8 had a bug prior to the change being an actual getter-setter pair it looked like own data property. Because it was lazy under the hood, and because we have the hateful thing of calling prepareStackTrace that is user code you have the case where you have the own data property with arbitrary side effects because it ended up calling to a possibly a user-set captureStackTrace. So to recover the invariant that data properties ought not to cause arbitrary side effects we made a smallest Delta change which was to make it into an own accessor pair. That’s how we got to an own accessor pair. I would not be in favor of having a magical data property that is lazy. That is something that we need to discuss going forward for like, what is the compatible way to do that. And if we don’t want to go back to that world and you really want a data property and that precludes some kind of laziness, does that matter for the non-error instances? Probably not. But we should talk it through.

MAH: That was going to be my question. Does it leave this matter in that case? That is another for–

CDA: WH is asking what the Agoric bug is.

MM: I can clarify that. The Agoric bug is because syntax can cause the virtual machine to throw an error and because the accessors were own accessors, it was not possible to virtualize the environment, to prepare the environment, to virtualize stack access by replacing, for example, what would have otherwise been inherent accessors on the prototype that we can replace in the prelude. Now, what is worse, that by itself was not fatal. What was fatal is that all of the own accessors have the same getter-setter, which obviously means on error objects, since they’re the same getter-setter they have to reach for the internal data any way, so they would have had the same behavior had they been on the prototype. But because they were the same getter-setter, that getter-setter pair was undeniable because it could be reached by syntax. And you could then had a global communication channel through objects that had the internal `[[ErrorData]]` slot, where one compartment could get the getter and in another compartment could get the setter. If they had the common access to the object that otherwise should not have enabled them to communicate, they could communicate.

MM: It’s worse than just that they could communicate. If the setter had restricted things to strings as one might have expected, then it would be an information leak. The getter-setter pair did not restrict it to strings at all. You could pass arbitrary values through the undeniable getter-setter pair. The whole thing is a mess. What we’re doing to be relatively safe in the face of it is unpleasant and does not restore our safety guarantees. We have the burden of explaining the lowered safety for breaching capability leaks between compartments. It’s just a mess. Does that answer your question?

WH: Kind of. How is this a global communication channel?

MAH: It effectively connects single global weak map instance that can use getter and setter to access the information for any objects.

MM: So remember that the presumption is that objects that are obviously stateless and frozen—if the object obviously has no hidden state, then sharing that object should not enable communication.

WH: Okay. So this thing lets you attach an arbitrary field to any object whether it’s frozen or not?

MAH: Yeah. It’s the same kind of issue as private fields stamping for return override. You get to add information to an object that otherwise looks like it doesn’t carry any information.

WH: Okay, thank you.

MM: Thanks for prompting us to be explicit about that, because it took us a good long time to understand. It is kind of subtle.

MM: SYG, I wanted to find cases to understand what kind of compatibility burden it might be for V8 to switch to the pair of behaviors we’re proposing to standardize here with this presentation and the previous one? First of all, for everyone interested in captureStackTrace including JSC and the proposal we just saw, I wanted to understand what the use case is that motivated compare stack trace and if we believe that the vast majority of actual usage stays within that motivating use case? So the particular motivating use case I have in mind is object that actually do inherit from `Error.prototype` but are not primitive errors, they’re just plain objects, and this basically dates from before ES6 classes, when if you wanted to create what is effectively a new category of error type, a new error type, you would emulate that by having a plain object inherit from `Error.prototype` and capture stamp the error on it. Everyone interested in `Error.captureStackTrace()`, is that everyone’s understanding of the motivating use case is? Anyone have data that actual usage deviates from that pattern? I’ll take the lack of response to mean that nobody knows, unless somebody wants to say they know something. Okay, thank you.

MM: So the other thing is that the—for Error objects because the own accessors do have the same getter-setter and therefore must behave by accessing what is effectively an internal property for the Error object specifically, leaving aside the non-errors, I would think that moving the accessors up to error prototype should not affect the getting behavior. The setting behavior is more subtle, of course, because now rather than modifying the internal property, it would be overriding it on the instance with the data property. But it’s hard to imagine that much actual even V8 specific code would break from that. I’m wondering if you have any intuition about that and specifically SYG or V8 people, if you have any intuition about that or even better, any data pattern?

SYG: Sorry. I think I lost the question. The question is, is there a compat worry with the setter behavior described here?

MM: Yes. The question is both. But I’m separating it into two questions. The first question is, just moving the getter up to the prototype since it’s the same getter on all of the accessors any way, if you just inherited rather than having it be own for the error object specifically and for getting specifically, do you expect there to be any compat problems?

SYG: We both expect and hope there to be no compat problems for the getter.

MM: Right, okay. So now for the setter, moving it up to the prototype. The natural behavior for the setter which is what JHD is proposing is that it create an own data property on the instance that is clearly different than what V8 currently does for error objects. Do you have an expectation about what kind of incompatibility that would be for V8 users?

SYG: Unfortunately not at this time I just don’t know. I agree there is more risk there. But I just don’t know who is doing this.

MM: Okay. And then finally, for non-error objects, if there might be an incompatibility caused by one aspect of JHD’s spec that I would propose to relax if it actually causes pain for V8 to adopt the proposal, which is the setter if given a non-error object, even though the setter only creates an own data property, which is it could have done on any object, it checks the existence of the internal slot and rejects, I would want to keep the rejection on the getter but the setter could waive the type check and add the data property to any object and then once of course the data properties is on the object, then the normal get on the object would get the data property so the fact that the error check remains on the getter would not affect what I would expect to be normal usage.

JHD: You’re talking about removing step 5 from the setter?

MM: That’s correct. And since `Error.captureStackTrace` also adds the data property to any arbitrary object, there is kind of a thematic fit there, I would prefer to keep line 5. But I just wanted to offer explicitly if we can have all of the compatibility pain to V8 for the presence or absence of line 5, I would be perfectly happy to toss line 5.

SYG: Sure. That sounds—I think if we find that the thing is not compatible, then we can’t do it. I don’t think V8 has any—to the current spec text as written, we have no objections on the intent or what is trying to do. If it turns out something is not compatible, we have to go from there. Maybe it’s simple as removing step 5, maybe it’s something else. Unfortunately I’m not sure how to figure it out without trying it and see.

MM: That’s wonderful. I’m very happy. Thank you.

CDA: We’re almost out of time. I’d like to get to KG’s topic, if possible.

KG: Yeah. This is just pointing out that DOMExceptions only sometimes have stacks in some browsers, and because DOMExceptions are errors and they have the `[[ErrorData]]` internal slot and this would be a change such that if you do new DOMException in Chrome, it would have a stack. So I’m sure that’s fine. It already has a stack in Firefox and who is manually constructing DOM exceptions anyway? But pointing out this change would take place and would need tests and such.

JHD: And we discussed this in Matrix. I’m happy to write the web platform tests during Stage 2.7 and ensure it returns the string and not checking its contents at all. If a browser that is currently returning undefined wants to return an empty string, go nuts.

SYG: The way stacks are attached to DOMExceptions in Chrome it’s kind of done at creation time of the DOMException in C++ and depending how it’s created. I have even less of a handle on how DOMExceptions interact with this. Like, does it always then—all DOMExceptions get this, get a stack trace or does it sometimes return an empty string to begin with and then—yeah, I don’t know. We should work that out.

JHD: And that sounds like something clearly as part of 2.7 that I need to make an HTML PR and that’s where I think we would work this stuff out; yes?

SYG: I would, yeah, for 2.7 because I think that is a big part of this—because DOM exceptions are real errors now, yeah, it is important to figure out what the other browsers do in this case as well, and then on the HTML side, yeah, get reviews and get agreement on what we do for DOMExceptions.

JHD: Okay. So I’ll note that as a requirement before advancing to 2.7.

???: All right.

JHD: And repeat my request for Stage 1. Seeing no objections, I will now request Stage 2.

CDA: You had an earlier support for Stage 1 and 2 and +1 from Michael for Stage 2 as well as chip for 1 or 2. That’s a good amount of support. Are there any objections to Stage 2? Sounds like you have Stage 2. Reviewers. Looking for two TC39 heroes.

JHD: I see Nicolo and anyone else want to review the stack accessor proposal?

MM: I’m a champion and thus not a candidate.

JHD: Michael, okay. I hear MF and NRO.

### Conclusion

* Consensus for Stage 2
* MF and NRO are spec reviewers
* HTML integration PR must be directionally approved, and possibly merged, prior to stage 2.7 (and certainly prior to stage 3)

## Intl Locale Info API Update in Stage 3

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/proposal-intl-locale-info)
* [slides](https://docs.google.com/presentation/d/14ColNEWDFlAnPGW6GSPSk6gbcdTmSy4pYuYXOwDlZX8)

SFC: I’m presenting this on behalf of my colleague FYT who is out, who is feeling under the weather this week and asked me if I could present these slides on his behalf, so I’m happy to do that. So I’ll go ahead and walk through.

SFC: I’m first going to give you a refresh of what is this proposal and then we’re going to seek consensus on normative PR number 83. First of all, this -- what is the expose locale information proposal. It’s a proposal to add additional information to the locale object based purely on CLDR to present information that’s derived from CLDR regarding locale specific preferences. This is not the same as the user preferences proposal that I know had has been, you know, raised concerns previously. This is just purely deriving information from CLDR based on a locale that had been offered into the API. It includes week data, which is one of the main motivators for this, which allows users and developers to do things like create a calendar widget, creating correct -- including appropriate information for the first day of the week and the weekend days.

SFC: So here is the history of the proposal. It’s been coming for a while. It started at Stage 1 in 2020 and advanced to Stage 2 and then Stage 3 in 2021 fairly quickly. It’s been at Stage 3 for a while. Unfortunately, it’s gotten held up a couple of times with some of these fundamental issues that ideally we could have found earlier in the process, but we found them. The biggest change was getters to functions. I think previously we had, like, a getter on the locale that was, like, dot first day of week and that would actually run code, and then a decision that was made by the -- in Temporal, we adopted in this proposal was, no, we would actually have getters that start with the word “get” and have them be functions. That was a pretty big change we made to the proposal at Stage 3. And then we had questions about, well, how with does it interact with numbers and strings and things like that. So it’s not necessarily a great example of what should be happening at Stage 3, but it is what it is.

SFC: And here the latest change we want to make at Stage 3 to this proposal. So I’ve been doing some research about week numbers. I think some people in this room have been subjects of this research. I’ve also done research amongst other researchers trying to my best to get non-techy users to give numbers about week numbers, and pace. Basically what I found pretty consistently is I have yet to find any regular person who has a specific expectation for how week numbering should happen in any system other than the ISO week numbering system. So currently, the proposal forwards data from CLDR about an outer an used to determine week numbers based on the first day of the week, and that would result in different week numbers in America versus Europe versus Asia versus Middle East. The only thing I have found evidence for is that there have been users -- people in Europe, including in this room, talk about week numbers, what is week 15 or something, of the year, and that number is derived from a formula that ISO-861 specifies, and when that user switches their locale, if they switch it from, like, Europe locale to in US, all of a sudden the week numbers are off by one, and that is quite confusing and sometimes misleading to users and actually causes real bugs. And that seems more compelling than, you know, the lack of any user that I’ve been able to find who has a different expectation for what the week numbering should be.

SFC: So the proposal that is -- that has been adapted by CLDR which we’d like to forward the ECMA 402 proposal is that the week numbers will be always derived using the ISO 8601 algorithm, which is you look at the first week of the year that has a Thursday in it, and that is week 1 of the year. And that will be the same algorithm regardless of the first day of the week, regardless of your -- yeah. Regardless of the week, it would always be Thursday, and it determines the first day of the year, and as a result that involves removing the minimalDays getter, because that was the thing used to differentiate week numbering from locale by locale. So we no longer need minimal days, and that’s what issue 86 is for. And FYT listed some remaining open issues and there are some things that ABL filed. Anba is the champion that implements things in Firefox and those are totally resolved. This is not ready for Stage 4 yet, but this is the last major, like, actual shape change that I expect the see. There will probably be more. And I say that now and I’ll probably come back next meeting request yet another one. We’re getting closer and closer each time we do this, each time reredouse scope to finish this proposal.

SFC: Implementation status is it’s shipped, which means that as part of adopting this change, browsers who already flipped this minimal days getter will have to stop shipping the minimal days getter. I guess they could keep shipping it, but it’s no longer part of the standard, and probably they should not be shipping it anymore. And there’s also polyfill. So the request is for consensus on the PR99, I’m also having to open it up. We discussed this at TG2 twice, both at the January meeting and the February meeting. And there was pretty strong consensus amongst the members of the TG2 that we wanted to move forward with this. You can see the change here. It’s all of the leading things. You’re deleting a bunch of lines and text. Everything is deletions. So that’s the pull request. And happy to entertain anyone who is in the queue.

DLM: First of all, support the normative change here. I just wanted to reiterate the importance of the lack of fallback behavior, which is issue 76 you mentioned. This is blocking our implementation. We see it as pretty important for interoperability and between implementations and we’d really like to see this issue resolved as well as the other issues before this comes back for stage advancement.

SFC: Definitely noted.

CDA: There is nothing else on the queue.

SFC: Is there no one here who wants to nitpick about week numbers, or can I just ask for consensus to move forward with PR 99? I have a hand. Can I go ahead and put MM on the queue?

MM: Would the relevant part of the CLDR tables be called “WeekMap”?

SFC: I love it. I love it. I love it. I think it’s called week data, but I love WeekMap. That’s a much better name. Thank you very much for that.

CDA: Still nothing on the queue.

SFC: Okay. I’ll ask more consensus one more time for PR 99. I’m going to say that we have consensus for PR 99.

CDA: Okay. Do we have any objections? Sounds like you’re good.

SFC: Thank you. I think that’s all I had for today, so we get some time back for the timebox.

### Conclusion

* Reached consensus on PR 99
* Need to resolve remaining open issues such as issue 76 before the proposal can advance

## Stabilize integrity traits status update

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-stabilize)
* [slides](https://github.com/tc39/proposal-stabilize/blob/main/stabilize-talks/stabilize-stage1-status-update.pdf)

MM: So this is a status update for stabilize, and I added the subtitle “hopes and dreams” because the nature of the status update is where we hope we can take this proposal, this set of issues with this -- what this is about, but we don’t know yet if it’s possible. So I just wanted to explain where we’d like to go and hopefully get feedback from people, both here, both about whether it is possible and if it is, whether this direction is attractive, and how people feel about this direction.

MM: So integrity traits are not something that everyone knows well, so a little bit of recap. We’ve got right now three integrity traits in the language, usually referred to as integrity levels because they’re, you know, linear hierarchy, frozen, sealed and non-ex-extensible, on the left we have the verbs, in the middle of we have the states, and on the right we have the predicates. And the thing that I’m taking as the defining characteristics of something being an integrity trait is that it’s a monotonic one-way switch, once frozen, always frozen. It’s stronger object in variance. When an object is frozen, you have more guarantees that enable you to do higher integrity programming with less effort. It implicitly punches through proxies, or rather the integrity trait status is transparent through proxies. If the target has integrity trait X, then the proxy does and vice versa. If the target is frozen, the proxy is frozen. If you try to freeze a proxy and the proxy allows the operation, then both proxy and the target become frozen.

MM: Okay, in addition, there’s the crucial distinction between explicit versus emergent. There has to be two proxy traps per explicit integrity trait, so there’s a prevent extensions and an is extensible proxy trap. There is no freezer seal proxy trap, because those are simply a pattern of other guarantees that either hold or do not. They’re implied.

MM: So without going through all the detail I went through last time, I went through this taxonomy of all of the separate atomic, unbundled integrity traits, each of which address some particular problem that can be addressed by integrity traits and that we believe are motivated. And the important thing about this taxonomy in terms of the parity of the bundled thing is it allows to us go through them and see what we’re talking about, what each of these useful guarantees each of these provide.

MM: So fixed mitigates the return override mistake, the use of the mechanism and classes to stamp objects with private properties. If the object has been made fixed, if it has the integrity of a fix, then the idea would be that the use of the subclass constructor stamp the private property on it would instead be rejected with an error. And this is, in particular, motivated at Agoric for virtualization purposes, and there’s a lot I can about that if people are interested, and it’s in the shared structs working group, because they want a fixed shape implementation of structs and that conflicts with the way V8 implements the stamping of private property, private fields, so fixed would address -- they would make all structs fixed to -- so they could all benefit from a fixed shape implementation.

MM: So after the last presentation, we got this issue filed by Shu, which is V8 prefers normatively changing non-extensible to imply fixed, and we are owe -- all the champions are overjoyed with this idea. This would separate it out from this proposal from new integrity traits that would simply bundle it into non-extensible. V8, to my understanding, is already doing measurements to find out if it’s feasible and already getting some small number of negative results. I don’t -- we’re hoping that the judgment is that we can still do that. Shu, let me just break process and ask you. Do you have any information updates from the V8 measurements about whether you still hold out hope that we can do that?

SYG: I pasted the link in Matrix to the use counter. I can’t believe it is not zero. It is a `e-7` or something. So it is still more than I would like, but we don’t really have a hard rule for, like, how small something has to be. I think this is few enough axes that it would be worth trying still. Pending, you know, further data. Unfortunately if you look at the slope of the graph, it is not flattened out yet. But this might be an artifact of just how the visualization is and how we’re getting data, because it’s been, like, a little bit more than -- a little bit less than a month since this hit stable, so we’re still getting more data as it hits a bigger population.

MM: Okay, thank you. That’s very clarifying, and it means that there’s still hope, which is the most I was hoping for at this stage.

MM: Okay. Next is overridable to mitigate the return override mistake, which is well illustrated -- I’m sorry, to mitigate the assignment override mistake, which is well illustrated by this sample code if some prior piece of code freezes object prototype, then there are many, many old libraries, specially those written before classes, that do things like use a function to create what is effectively a class point and then assign to the toString property a prototype in order to override the string method if the prototype has been naively frozen, then this will throw. This has turned out to be the biggest deterrent for high integrity programming in JavaScript. The biggest deterrent for freezing all of the intrinsics. If there were an overridable integrity trait, then by making the prototype objects in particular, but all of the primordial intrinsics and others overridable, then the deterrent would go away and these assignments would work. And there’s been controversy about whether to call this the override -- the -- a mistake, and I just want to point out that in all of the years that we’ve been going around this, we have found code that breaks if this is fixed globally for the language, which I’ll get into in a moment. But that is for an accidental reason. We have never encountered code that makes use of this aspect of the language on purpose. Let that sink in.

MM: So after the last presentation, we got this issue filed by Justin Ridgewell clarifying what the history was on the prior attempt. And there was only one breakage observed, and it I was very narrow. It was an in old version of the lodash library, and even though it’s already fixed in modern lodash, we can never erase old versions from the web. And it had to do with the toString and toStringTag I fixed specifically on TypedArrays, even though it could apply in theory to other two strings that depend on the two string tag behavior, among the primitives. And, JRL, if you’re within earshot, please correct anything I’m getting wrong here. But what JRL is proposal is it’s still feasible to fix this globally for the language by having the global fix make a cutout specifically for the two string and two string tag properties that cause the old version of lodash to go astray. And the cutouts that JRL is proposal and the similar, but somewhat different cutout that RGN has proposed, both of which have all the safety properties we need. It’s just a little bit of ugliness, but it would let us fix this globally in the language. We would love that. We would be overjoyed if that could happen rather than addressing it through an integrity trait.

MM: Then there’s the non-traffic, which is another re-entrancy hazard problem. This is re-entrancy through proxies. When you do -- when you have a proxy that looks like a plain data object and survives all the tests that you might think to apply to it, as to whether is a plain data object, it might still be a proxy, but does things synchronously during the handler traps, so you would like to be able to write code like this. And I want to recall our records and tuples, which is a presentation that is coming up later this meeting. Records -- something that you could test whether something was a record or a tuple. If it is a record or a tuple, you knew it -- it had no behavior, it was a plain data object, it could not be a proxy, so it would be very nice to, you know, sort of -- so that we could have tested that in an early validation check, such that once you’ve passed the input validation check, you can use the validated to be plain data objects inside your function while invariants are suspended, knowing that you’re not going to be turning over control synchronously to any foreign code. We don’t have records and tuples, so we’d like to be able to create a predicate that we call record like. But because you can’t write a predicate today that will verify something is not a proxy, you can’t actually write a predicate that protects us from re-entrancy.

MM: The idea is that by applying the new integrity trait, stabilize or non-trapping, and then having the record-like predicate check that something is stable, then that verifies that even if it is a proxy, that proxy will never trap to its handler. And, there by, even if it’s a proxy, you are safe against re-entrance had arts, and we’ve done that safe by making observable whether it’s a proxy or not, so this approach to the reentrancy hazard of handler traps does not violate proxy transparency. It just makes the existence of proxies that claim to be stable harmless because we now have a guarantee that they cannot re-enter.

MM: At Agoric, we actually have a shim, I believe it’s a fairly complete shim, for non-integrity trapping trait for itself. It was kind of a surprise once we thought about it that was possible to shim this faithfully and safely within the language, but it has one of these big have-to-run first burdens, which is it does it by replacing the global proxy constructor, and the only -- it only has the safety properties it claims, if it has replaced it globally and the adversary cannot recover a normal proxy constructor by other means, such as by creating another realm. So it’s quite burdensome to maintain the safety. But it is possible to shim it, and not only have we shimmed it, we now have a bunch of code that makes use of the shim as it was intended, you know, for the safety that we intend, and it’s been an interesting learning experience to see how to use it for safety we intend and how much disruption there is to other code that’s concerned with these properties. For code that is not concerned with this safety property, there should be no burden at all, because nothing otherwise is no compatibility break.

MM: Okay. Finally, there’s the unbundling of non-extensible into permanent inheritance, which both the browser window proxy has without being non-extensible, and object prototype has without being non-extensible is through magic, they refuse to have their prototype be changed. And then with that taking care of by one side of the unbundling, the remaining side from the extensible would be no new property, so you can imagine the separate -- two separate explicit integrity traits such that prevent extensions or non extensible becomes emergent from those new explicit ones.

MM: Okay, so having recapped all of that, what we’re hoping for is, first, all of the champions of stabilize and SYG—and SYG, I know you’re on the call, so please correct me if I’m mischaracterizing anything—we all are of the opinion that even though there is a nice orthogonality from a purist point of view in unbundling non-extensible and it allows us to retroactively rationalize this behavior of window proxy and object prototype, it’s just not worth it practically. So we hope not to unbundle non-extensible, leave those two properties bundled into non-extensible, non-extensible goes back into being explicit, and the result is that we cannot faithfully emulate the browser global object or the object prototype object, and we’re willing to sacrifice that faithful emulation even though it’s a compromise of virtualization, because practically, nobody will care.

MM: So first of all, Shu, did I characterize what we agree on there correctly?

SYG: Yes. We also prefer that non-extensibility remain bundled.

MM: Right. Thank you. And the next one is the one that we’ve already mentioned that SYG expresses in that filed issue and that we talked about that -- with the current usage counters we still hope to do, which is also to bundle fixed into non-extensible, so there no separate fixed integrity trait. Then overridable, we’re hoping that JRL‘s strategy with either JRL’s carve out or RGN’s alternate carveout, we’re hoping that will enable us to go back and fix it globally for the language without breaking the one case question we know about in lodash, so that goes away. Now, all we’re left with is non-trapping, so non-trapping would end up just getting bundled into stable, and now stable becomes explicit. So this is the picture we’re hoping for, having taken care of the others by either choosing not to unbundle or by dealing with them by other means.

MM: And I want to acknowledge a political reality that is just there, which is somewhat unpleasant for us to realize as the champions of the proposal, if our hoped-for resolution happens, then stable addressing the re-entrancy is addressing something much narrower than the original overall stabilize proposal. And, therefore, there’s less wind in its sails. We understand that and we understand it’s more than an uphill climb to advance and get consensus through the stages, but it’s the right thing to do, so we’re taking that hit and hoping the others can move forward by themselves.

MM: I want to take a moment for a little bit of historic context. In 2010, 15 years ago, BE did this presentation with input from myself and Paul, and proxies are awesome, in which he presented what were our plans for the time for a non-trapping behavior of proxies. So just flipping through the slides for a final transition, so this final transition going from trapping to fix, notice that in the fixed state, the handler in the blue circle above, gets dropped because the proxy will no longer trap to the handler, so there’s not even any reason to continue to hold on to it. So the current non-trapping is very much in line with our original intention here, although certainly many, many of the details have changed over the 15 years since we first talked about non-trapping. And then one reason I brought that up is that if we get our hoped for picture, then we could also go back to the original name and call the non-trapping integrity trait fix, because it’s nice and short and something that’s fixed is not broken.

MM: And at this point, I will take questions. And I’m sorry, at this point I will stop recording, and RPR, please stop recording as well.

CDA: Okay, Justin.

JRL: Can you go back to the slide that has my comments about integrity state, the override mistake.

MM: Yes.

JRL: Yes, this one. So to clarify something you said during your presentation, you mentioned both toStringTag and toString.

MM: Yeah.

JRL: So this carveout I’m trying to highlight here doesn’t require any changes to toStringTag. It only requires a change to two string, and it requires the change to create new data properties if we’re overriding. The change to toString here is specifically to support an old version of lodash that checks for these explicit fields -- classes, and if the toString method returns the appropriate result, then it will not use a bad implementation of toString that it has directly written into this old code base. If we patch `toString`, that means it will continue to use a good version of `toStringTag`, and that will hopefully fix everything. So the two changes we need here are, one, if you do the override misfact, it creates a brand new data property with configurable true on your own object, and then it also -- when lodash specifically tries to do this, it will then check to see if it should use the good `toStringTag` and/or the bad `toStringTag` and does this by checking `Object.prototype.toString`. And if we can trick lodash into doing the good thing, hopefully everything is fixed.

MM: Great, thank you very, very much for that clarification. I’m very glad you were present for all this and that we’re able to clarify. Is the -- are the classes in question that lodash actually trips over, all of the questions -- the classes mentioned on this slide are only the TypedArrays?

JRL: Sorry, the -- what about TypedArrays?

MM: So my impression was that lodash was only tripping actually on this -- the -- on this issue with regard to TypedArrays, and even though it applies in theory to an observed behavioral change for any class for which, you know, any intrinsic class for which the two string behavior is sensitive to `toStringTag`.

JRL: Yes, this is the other fun part. There are lots of methods that use the implementation of broken toStringTag, but there’s only two that are broken, is TypedArray and is ArrayBuffer. The thing here that if we trick lodash into using the correct toStringTag implementation, then it will fix TypedArray, is TypedArray and is ArrayBuffer. But it’s not actually anything to do with the typed -- the data values that are returned by toString when it’s called against a TypedArray or actually is an ArrayBuffer. But the classes that I highlight here, it checks each one of these to make sure that it returns the correct data view ArrayBuffer when called against a data view class or the ArrayBuffer class instance that.

MM: Great. And, all right, let me just get your opinion. Are you in favor of us doing this exactly as you lay out, globally for the language?

JRL: Yes. I think the second carve out here is totally appropriate as a back come pat thing we can just do, and the first change here is implementing for override mistake, and I think those are both appropriate.

CDA: All right. I just want to note we have less than one minute technically on this topic, and there’s a big queue. First up, DE.

DE: Do we to extend the timebox by 20 minutes.

MM: I’d appreciate extending the timebox, on the other hand, I’m not asking for stage advancement, and I don’t want to crowd out things that are asking for stage advancement. We could continue this late for that’s more appropriate.

DE: How is scheduling going?

CDA: So the issue is, it’s not really an issue, so we have time on paper. The issue is that we are now full through the end of today. And we were full -- actually, no, we have 45 minutes available tomorrow before lunch. So, yes, never mind. 20 minutes?

MM: That would be great.

CDA: Okay, let’s just go to the top of the hour and then we’ll do the mid-afternoon break. Does that sound good?

MM: Sounds good to me.

CDA: All right, DE.

DE: Okay. How do we want to, you know, check if this is web compatible and roll it out in browsers? I think we’ve had enough kind of failed experiments where we ask browsers to just ship something that I don’t know if we have that kind of interest in this one. But I would also be interested in hearing from browsers. I’m not really sure how to phrase this as a use counter or something.

MM: Yeah, that’s a great question, because if the browser pays the cost, and I want to acknowledge, the costs are substantial to do one of these use counter exercises. If no browser is willing to pay that cost and try and experiment, the rest of us are helpless to advance this, because we simply can’t advance it without that data.

DE: Do browsers have any thoughts here?

SYG: I’m staring at the thing. I’m not sure how to write a use counter to test whether the change will be compat or not. What would you test?

NRO: The counter in object protector string that checks for this these type of classes listed here. You have a custom symbol to string installed.

JRL: Sorry, I’m going to butt in here because I remember the details from the lodash thing. If we -- oh, my God, now I don’t even remember. The error -- I think Mozilla implemented an error tracker that tried to see if there was a change.

DE: Oh, Mozilla did some work in this area?

JRL: Yeah, for the original issue, but this was six years ago. Someone implemented a use case tracker. We found the pages because of this, what triggered it. This Oberle throws an error in the page that was broken, and I don’t know how Mozilla did that.

SYG: If we can counter it to a telemetry, if it’s not in a counter, if it’s an `Object.prototype.toString`, that’s probably fine.

MM: SYG, I want to express my deep appreciation for your willingness to do that. Thank you.

KG: I just wanted to express support for fixing the override mistake if we can possibly can. That would make a lot of things much better. And I wanted to hear from browsers if they had any interest in this, because it sounds like they’re at least willing to explore some of these changes. I don’t know, so the toString change would be a separate change from, like, outright fixing the overhead mistake.

SYG: Like, wait, so my understanding is -- number 2 there, the only reason that exists is to work around the biggest known user of the override, the biggest known, like, dependency on the override mistake so we could do number 1, which is fixing the override mistake, which should be compatible because it changes a throwing behavior to a non-throwing behavior.

KG: That’s right.

SYG: That correct? Okay?

KG: Yeah. So if we have some appetite for that, I would be very excited. There’s lots of things that would be better if we can do that.

NRO: Yes, I’m really pleased to see how the proposal is becoming smaller and smaller, so excellent, Mark and --

MM: I’m sorry, I couldn’t quite hear.

NRO: I’m really happy with how the proposal is becoming simple and simpler. And the first time you presented it, it was difficult to keep track of the parts, so this is a very welcome change.

MM: You’re welcome. I appreciate it.

KG: This is with regards to your point about the sort of political reality of it being less motivated. We’re doing less stuff. I think the non-trapping check is sufficiently motivated on its own. Lots of code needs to care about is there any possibility of this triggering user code. That’s one of the main things you need to care about. And being able to actually assure that I think is a sufficient goal on its own for our proposal.

MM: Thank you.

WH: “Fixed” prevents you from attaching extra properties to objects, but if an object is constructible, then you can subclass it and do it that way. Have you looked at anything which makes objects non-subclassable?

MM: The existing precedent for this is that the browser windowProxy is effectively fixed as a special case, and it does not do it by preventing subclassing. It does it by rejecting the addition of private fields. So our inclination, even though we can’t retroactively rationalize the browser windowProxy because of the unbundling of prevent extensions, our inclination is still to follow the precedent of windowProxy just for uniformity and the fact that it’s adequate for what we need. The first thing I thought of was actually along those lines, to prevent the return override from returning a fixed object. But I think the precedent is actually better place to put the error check anyway.

WH: I’m not talking about the return override. I’m talking about just defining regular subclasses.

MM: Oh. No, this is -- that’s not something I’ve ever thought about. That’s a new -- please talk that through, how this --

WH: I’m just curious if you’ve explored ways of creating objects with a fixed shape, which cannot be subclassed.

MM: No, I have not.

SYG: If I can interject here, Waldemar, the two kind of -- so the way the structs proposal deal with that is something that’s the -- that we’re calling “one shot initialization”, where you can declare a struct to be a subclass of another struct, and when the instance is created, it immediately gets all the declared fields before it ever escapes back to user code. There is no way to observe, yeah, the intermediate state. So it’s unclear, like, that is an integrity trait or level that can be on an object. Like, that feels more like of the class or the struct declaration than on instances.

WH: Yeah, clearly subclassing is less harmful than the return override because, when you construct it, you know that you’re constructing the derived class. But I’m just wondering if there was any exploration of making constructible objects final so that they cannot be subclassed at all.

MM: Yeah, I’ve never thought about that.

WH: Okay.

DE: I’m just trying to understand what this feature is concretely. You’re saying this is stronger than frozen, and in particular, a frozen object might be a proxy that although everything is there in its target, it still has some side effecting code when traps are hit.

MM: That’s right.

DE: And this fixed something is just like a plain old data object and you have an API of taking an object and getting out a version of it or modifying it in place such that it is in this fixed mode, or what is the a actual API?

MM: So fixed would imply frozen, so it has to be at least frozen for it to be fixed. The addition of it being fixed is that essentially a proxy on a fixed object is itself fixed, and the behavior of the proxy is identical to its target in all ways except for -- that it has a distinct object identity.

DE: Okay, so when you have a frozen plain old object, it just -- it already is fixed or it isn’t?

MM: No, it’s too late to change the behavior of frozen.

DE: How do you create a fixed object?

MM: It would be by adding new -- just like we have the existing verbs, object and reflect -- object freeze seal and prevent extensions, there would be an object fix or whatever the word is, stabilize, that would be a new verb. Because it’s a new explicit integrity trait, there would also be a `Reflect.fix`, just like there is currently a `Reflect.preventExtensions`, and the result would be that it would cause the object to be frozen. In other words, because it implies freezing, it would first try to do all the freezing. If that succeeds, then it would additionally tag the object as being fixed. And then the proxy implementation, when it sees that its target is fixed, it bypasses the handler and simply does the default behavior as if that handler trap had been omitted, directly applied to the target.

DE: Okay, so `Object.fix` on a proxy will then just forward to the target and there will be no proxy trap?

MM: If you do the verb on a proxy, to -- that has a target that is not yet fixed, then the way to understand it is by analogy to what happens if you do a `Reflect.preventExtension` onto a proxy whose target is not yet non-extensible. It will trap to the -- in the case of prevent extensions, it will trap to the handlers prevent extensions file, and the -- that prevent extensions trap can throw refusing to make the object non-extensible.

MM: Likewise, the fixed -- if you do a fix operation on a proxy whose target is not yet fixed, then it traps to the fix trap on the handler, which would be a new trap, and there’s a subtlety there. I forget to mention the subtlety. The subtlety is that if you omit the prevent extensions trap from a handler, then the default behavior is to do the prevent extensions, not to refuse to do it. Because we’re introducing this to a language that has a lot of install base prior to this feature, the way to do this, which was anticipated in discussion and then turned out to be a big deal in actual use that we found, is that if you omit the trap from the handler option, the default behavior is to refuse rather than to proceed.

DE: Sorry, you’re talking about the fixed trap or the prevent extension?

MM: I’m talking about the fixed trap, so the fixed trap would have the opposite sense in terms of how it defaults to prevent extension, but by providing the trap explicitly, you can get it to either accept or refuse explicitly.

DE: Do you have a use case in mind where a proxy would want to refuse to be fixed?

MM: Yes, yes. So the -- the big one is the legacy, which like I said is something we immediately encountered when we started to use this in practice even on our own code in places we didn’t anticipate. There turned out to be a lot of use of proxies for which the proxy was simply implementing trap behavior for purposes of doing essentially a little behavioral DSL, and it didn’t actually care what the target is at all. And if you -- and for those proxies, the target was just an empty plain object. It could be frozen or not, doesn’t matter. So if somebody freezes the proxy or freezes the object because the handler doesn’t care, the handler only has specialized traps, usually for property lookup or method indication, like I said, for a little behavioral DSL, but if you expose that proxy and then somebody fixes it, if the default behavior for old code is that the proxy gets fixed when you try to fix it, then the handler behavior that implements the DSL is turned off, so you cannot share among mutually suspicious parties a proxy that implements that DSL behavior without doing something weird to protect -- basically without adding an explicit trap handler to refuse to be fixed. And old code doesn’t know to refuse.

DE: So I’m wondering, what if instead of a trap, it were just like a Boolean? Like, if you put in the options bag fixable true, then it becomes existing -- it adopts fixable behavior where it fix it recursively. If you don’t, it will refuse. Do we need more behavior aside from refusing and not refusing?

MM: So it’s -- I mean, with regard to what we actually need, I don’t know. We certainly have not done -- have not coupled -- we have not written traps to do anything other than proceed or refuse. So I don’t know what we need. But the asymmetry, the asymmetry and non-uniformity, if you do provide an explicit trap with regard to the prevent extensions trap, I’d rather follow as much of the precedence as we can, but still acknowledge that having the opposite defaulting behavior to deal with legacy is just -- I think that’s sort of the minimal non-uniformity that takes care of the issue.

DE: Okay, so, yeah, overall, this proposal makes sense. It seems reasonable. I like the idea that separating out the, you know -- override the state fix part and separating out the frozen objects always refusing private fields part, those are -- if we find a way to do those, that’s great. And then this can service the very small kind of it’s really a plain old data fixed frozen object permitted, which is -- yeah.

SYG: I want to recap my understanding of next steps here. So my understanding is that the kind of the linchpin is partially this slide is the web compat question of can we fix the override mistake globally in the language. But I want to recount the three open compat questions and please correct me if there are more. Number one, can we change non-extensible to include no private field sampling? This is in progress, we have a counter point to yes. Number 2, can we change toString to work around that old lodash version? This is unclear. I hope somebody takes an action item to try to craft a use counter and communicate that to me and we can maybe check. That’s number 2 here on this slide. Number 3 is something we’ve been discussing in the Matrix, to actually change the behavior of the over ride mistake, it’s changing from a throwing to a non-throwing behavior in strict mode only in sloppy mode, it will be changing a silent no-op to a different behavior. That is much more risky and I’m not sure how to craft a use counter for it at all. Assignment to a property that has a non-writable same-named thing up its prototype chain, it doesn’t tell me whether the application is broken or not. It’s a silent no op today. I have no idea if you change to respect that assignment, if the tpage changes. That seems just extremely hard, if not impossible to figure out without shipping. Even if number 2 pans out, how do we hope to change the sloppy mode behavior and if that is a deal breaker for the current taxonomy that MM has—that is nice is simple?

SYG: Is it a deal breaker?

DE: I have a clarification first. You were saying number 3, you would be able to figure it, but my expectation would be that you’re going to get hits on it.

SYG: That's what I am saying. I will get hits, but whether the hits and the page breaks. That’s what you want

DE: Is there a way of—or which kind—the name of the property that is—and in this case, whether we trigger this case on symbol toString type, or on some other cases?

SYG: They would have to be hard coded. And even then, I am not sure. Because that’s like an assignment path, that is usually hot. But to—the short answer, the easy answer is basically no. Like, you can imagine use counters to be a single bit. We don’t track any other information the the URL information you see on the public site are cross-referenced with archive to see the have the use counter. It does not include any additional information about anything. Like you can’t attach any other information. It’s just a bit.

MM: So with regard to your question about is it a deal breaker? The—for everyone invested in HardenedJS, Agoric making it all the other companies using it, one of the restrictions of the HardenedJS is only strict code. One of the things we do in the shim on initialization, and that excess does by other means is simply completely throw out sloppy mode. For doing something very bad and weird for sloppy mode is not, it’s extremely weird. It would—it’s hard to imagine what the corresponding reflect of that set behavior would be to—because `Reflect.set` wonders whether it’s called by strict or sloppy code. The—I would find it very, very bizarre, but if that’s the price of fixing the assignment overwrite mistake globally for the language, for strict code, I would pay the price. I can’t speak for everybody else.

SYG: Yeah. You’re not asking for stage advancement but this is something to get consensus on, because I think it’s—it’s pretty hard—the taller task. It’s a bigger ask for the browsers to check if it’s compatible for sloppy mode because I don’t know a way to build assurances ahead of time. Perhaps one of the other folks from the other browsers can have an idea. That’s my biggest worry right now

MM: Justin, if you are still on the call, do you have any thoughts with regard to Shu’s question?

JRL: I do not know how to craft this so we can automatically detect it

MM: Okay.

JHD: Yeah. So the answer to these questions should probably be given off-line but things that has occurred to me, if you stabilize a promise, that is pending can it ever resolve? If not, when it finally attempts to resolve and reject, where does the error go

MM: Fixed does not mean by itself that it is safe from re-entrancy. Or that it does not have mutable internal slots. The key thing on the code that protected from re-entrancy, the object was stabilized or fixed, and then you apply an isRecordLike predicate to it where the is record, and make is exit. Is record-like predicate us at anytime rates the properties and make sure all of them are data properties. And checks that the object inherits from `Object.prototype`. And checks of course that the object is fixed, which implies frozen. So if all of those are true, at that point, the object seems to be a plain data object that is safe from—[bau] those additional checks are needed.

JHD: Okay. And then the last thing I had on there, regular expressions, which I believe will throw if you try to do anything because everything tries to set last index. And possibly a lot of link—array operations which try to set links. This may already be a problem for freezing. But it’s probably a nice thing to do to audit all the built-ins and confirm that the results of stabilizing or fisting them or whatever are expected.

MM: Okay. I will take that under advisement. I don’t have an immediate reaction.

JHD: Thank you.

### Speaker's Summary of Key Points

* We agree that unbundling non-extensible into more primitive integrity traits is not worth the cost.
* We hope that the “fixed” integrity trait can be bundled into non-extensible. Google has usage counters going which should help us decide if we can.
* We hope that the “overridable” integrity trait is not needed and we can still fix the override mistake globally for the language, with safe narrow carve-outs for the legacy lowdash case. Would need a major browser to measure to decide. Google may do so (yay!)
* These usage counters may only be able to measure strict mode behavior. If so, we agree we could make this fix only to strict mode, leaving sloppy unrepaired.
* If all this turns out as we hope, we’d only have the “non-trapping” integrity trait left, to be bundled into the root trait, currently called “stabilize”.
* With “fixed” no longer taken, we could rename “stabilize” to “fixed”, which was its original name circa 2010. Though we should not spend energy bikeshedding until we know if this is even possible.

### Conclusion

* We do not unbundle non-extensible, even though that means a loss of virtualizable (in a corner case no one will care about).
* Only a major browser can measure whether we can bundle “fixed” into “non-extensible”. Google already has usage counters going to help us decide (yay!).
* Only a major browser can measure whether we can fix the override mistake globally for the language with carve-outs for the narrow exceptions we find (only legacy lowdash so far). Google may do so (yay!).
* If all this works out, we only have “non-trapping”, which becomes the root trait whose name is TBD (“stabilize”? “fixed”?).
* “non-trapping” would address a major source of reentrancy hazards via proxies, without threatening proxy transparency!

## Records and Tuples future directions

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-record-tuple)
* [slides](https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/)

ACE: Hi, everyone. It’s been a while since we talked about Records and Tuples. Almost a year. I thought it would be a good one first to chat about it again. So it’s technically a Stage 2 proposal, but let’s not worry about that too much. NRO noticed that whenever a TC39 proposal makes it on to hacker news, it’s almost inevitable that someone in the comments will be asking about the status of records and tuples. And also, just on the actual repo itself, people keep asking "what is the status of this?". And I am not sure what that status is exactly. So I am going to present some ideas today, I am not proposing this for Stage 3 today. I am more trying to just encourage discussion. Especially from people—from every one of course, but I would love to encourage new voices in this area as well. Because we have been talking about this for four or five years now. And new voices are always very, very welcome.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g334e668a325_0_0]

ACE: So to catch people up, that haven’t been following kind of all the things over the years, for many years, the proposal was all around adding new primitives. And they had === semantics and typeof that included comparisons here where there is special handing for negative zero. And then we thought we were kind getting ready for Stage 3, we were kind of only changing little bits of the proposal. These fundamentals things had not changed for a long time. And these fundamentals actually turned out, there was not appetite to do them. It’s just—for various reasons. Since then we have been back to the drawing board on "what can we do here?". Because I am convinced we can do something. I think this is something that is lacking in the language. And I am sure there is something, that we can do. I just don’t know what it is yet.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g2af82517ce6_0_26]

ACE: So a thing I like, so I went off out in the British desert and meditated, if was up to me, like a special birthday present, ACE you get one freeway design and put it to Stage 4.7, what would I choose?

ACE: I would choose that there is syntax. I will comment in more detail. I like the syntax. Maybe it doesn’t have to be this sign. I really think we are running out of ASCII characters to be many other things. Initially, it was a bit of a blow, when we were told we can’t have new primitives, but I am come around to that. PHE said putting the implementation complexity aside, as a JavaScript user to would be confusing to have values that look like objects and arrays but are not, I have come around to that, yes, these things should be objects. I think they should be general containers that can contain anything. And I think it’s a great opportunity that they also work as a composite key.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g2af82517ce6_0_39]

ACE: So syntax. So yeah. There could be no syntax. To say if there is syntax was just about freezing objects, which is there is like set proposal for syntax that is just about freezing and sealing. Then I think there are—the advantages for lots of different actors here, I think reading it, at least, I don’t know how people’s brains work. But when I am looking at this, just the view of parentheses, the noise around the data makes it much more readable. It’s fairly less characters to type. But I think it’s beneficial for the reader, there’s more weight on the reader and the writer. And a tooling team, I like this from a tooling perspective. It’s much easier to just analyze this code and see this is a frozen object. It’s not going to change. As opposed to tracking. If `Object.freeze` is being used, tools, I think Rollup, special cases, calls to `Object.freeze`. If there’s enough indirection, that breaks down, creating a `deepFreeze` utility static analysis tools can’t pierce through that to realize what is happening. Syntax gives you the guarantee that no monkey patching can happen. There’s another advantage, which kind of only makes sense later on. I think there is potentially some kind after runtime advantage. But that only makes sense once I get to the later slides.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_0]

ACE: An example of what I was just saying, say you are going to be using this syntax for certain global configures, exported from a module. What we can do, as a human and as from a tooling perspective, is I know what those values are without having to see other modules in the universe and check every module that imports this value doesn’t mutate it. That’s a really nice property that I can be sure immediately that this thing is frozen. Again, I think that’s good for both of us in reading this code. I am going to comment on the PR, you are exporting this config. It could be weird if someone somewhere else, someone mutates it. It’s nice to freeze it. The convenience of this encourages these types of patterns. It gives humans like convenience.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g337bd48536b_3_0]

ACE: But syntax isn’t crucial for this. Like, if there’s really no appetite for syntax, then we don’t have to have it. It could be APIs.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g2af82517ce6_0_21]

ACE: So I also, as I said, I have really come around to these being objects because again the point that PHE made was, if you are going to adopt these things, there’s already a lot of code out there that is kind of sniffing, you’re going to reflect the properties of values in the language. You might have some utility that is overloaded. You can maybe pass it a number or array of numbers and the way it works out the overload is using `Array.isArray`. And now, if we have these tuple things, like arrays but they don’t pass `Array.isArray`, then that utility no longer works. So you would have to update or not use this thing. So if these things are objects and they are arrays and they inherent from the prototypes that others might expect, there’s a larger chance that you could just adopt these. I think there’s also a benefit to people learning the language, the typeof is something tends to be something that immediately, like, Chapter 1, when you open the book, these are the core parts of the language. More like, think, immutable data structures are really, really, really useful and something you want to learn about sooner than later. I don’t it’s necessarily Chapter 1, page 1 concepts. But overall, I think I will like them being objects. The reason they weren’t objects in the proposal is because it helps explain from a kind of modelling aspect of how the language collects some other behaviors. But I think the weighting is actually crucial in the matrix.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g2c6eebea946_0_5]

ACE: So the other part about the proposal is that it was kind of always about we found the original commits. 2019, and back then, it was—these things are deeply immutable. The only thing you could put in them were other Records and Tuples and primitives. And again the feedback we got on that was that’s great. But it really cuts off a lot of language. Like, maybe for designing the language from scratch, we could do that. But the ship has already sailed. Pretty much everything in the language is mutable unless you do work to stop it being that way. And I just felt really sorry for the people that are going to use the new things we are building, like Temporal, which is fantastic, and has an immutable data model. So if someone thinks "I am using immutable data", these aren’t like old school dates, where they are internal mutable and you can change what type they point to. Everything in Temporal, data model is these things are immutable, but still actually mutable objects. You can add new properties to them. From like a perspective of records and tuples, the thing has to be frozen or stabled or fixed, like from MM, then it would cutoff large parts of the language, even things from a user’s perspective, do follow the roll of being I am mutable. And I think maybe they’re still ways that, you know, linting tool might be spot little mistakes where people have immutability. We talked about having a box like object that lets you opt out, you have to code into the data model and makes it much harder to adopt.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g337bd48536b_3_6]

ACE: So my preference is actually to weaken this. I was trying too think. We could maybe say these things are deeply mutable and like what else in the language would that kind of correspond to? In some ways, that could maybe correspond to, like, the shared structs models, shared structs can contain structs and shared arrays and most primitives. If we go in that direction, we model things on shared structs, so there’s cohesive ideas. I don’t want to do that if—the committee felt like that, and I am the only one thinking we shouldn’t do this.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g3315cd10b42_0_0]

ACE: So yeah. There’s a tradeoff. And I am on the—I think overall the flexibility is worth them only being shallows.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_19]

ACE: So part of me was wondering how much that fills up TCQ and I was going to stop here and drain it down. So moving on to the something that is more—the next bit, I think adding—doubles are great from giving developers really ergonomic access to immutable data structures. But they seem—Waldemar in the queue. I would like to hear about his point right now.

WH: Regarding the previous Venn diagram you had, as far as I can tell, the records and tuples are ad hoc. It would be useful to be able to create immutable structs. How would that work?

ACE: Could you say—I think yes, it would—like, I think I agree. It would be immutable—rephrase the question

WH: The syntaxes you have shown all create objects with arbitrary shapes. The thing about a struct is, if you know the type of a struct, you know its shape.

ACE: Yeah. So I think –

WH: How would you create immutable ones which are actually structs?

ACE: One option, you think about these things as anonymous structs. You could create structs like evalling, creating structs on the fly. And that I think already works in the shared structs proposal. You could imagine it’s similar to that, when you create the record, that is defining a struct that has those builds and it’s fixed. Or other syntax

WH: As a user I have a dilemma. Let’s say I want to create immutable Points. I could either write, #{x:4, y:-17}, which gives me immutability but doesn’t provide a shaped type. Or I could define a struct Point and create instances of it, which gives me a consistent shape of all Points but does not give me immutability. Some people will choose the first one. Some people will choose the second one. We’ll end up creating a stylistic schism with religious wars on the boundary between them.

DE: I put myself on the queue. ACE’s thoughts that all records and tuples are structs already. Whether it’s a shared structs, you know, at the time of creation of one of these records and tuples, it will be already stable, whether or not each of the things inside of it is a shared structs compatible are or not. It is shared—your record and itemize is shared if all of the things inside of it are shared. It becomes shared structs or non-shared structs. Then the—we still at that point, do have the false coupling between whether it’s nominal or things inside are immutable. You need initializer lists and stuff like that. But at least in terms of being immutable and shareable, I think that could be handled transparently

WH: I wasn’t talking about shared structs. Simple structs.

DE: Okay. Yeah. I don’t have a solution to that yet. This is falsely coupling mutability. And nominal and having methods. But I think that’s okay because similar to how we coupled privacy with classes, when you have something immutable it’s often data. False coupling.

WH: Okay.

SYG: Yeah. DE mentioned initializer lists. The biggest—I agree. That it’s pretty cool to have immutable structs, shared structs notwithstanding for now. The problem is basically, if you want user constructors, like the way it works today in the proposal is that you get this one shot initialization by the time any of this value is escaped to user code it has the own properties that are declared already on it. And then, you know, you can mutate it. But if you want something to be born immutable, that won’t work. So then you have the problem of, well, how do you limit the access to this thing while it’s in this initialization phase, after that is over, it is then immutable.

ACE: Yeah

SYG: I don’t know the solution to that. If we do, that would be nice.

ACE: Yeah. But a similar thing in Java's Valhalla, for them it’s easier because the syntax isn't `this.field =`. You can say `field =` and it understands that. Like, I have ideas in mind. I can share in Matrix later. I'm pleased the possibility of an immutable struct is around.

SYG: And to finish the thought, if we bring shared into the picture, there, it’s actually a harder requirement that the shared struct instance *must* not escape until it is basically fully done. If you want that shared structs to be immutable, you basically can’t run user code until it’s like fully baked and can escape to user code which means it can escape the local thread because if you kind of let it escape when it’s half done, you could get into badness basically.

DE: SYG, does my story about records and tuples, if they contain all sharable things being shared themselves, does that seem plausible to you? From WH’s question.

SYG: I think so. I am not sure—like, it’s possible. I will say it seems possible to me. I need to think through. I imagine it’s something like that if all the—if it’s immutable and all the things that are used to—in the literal sine syntax, I am privileges or shared structs that automatically marks the—the record or itemize that comes out of it as a shared thing. It’s a derived property from how you construct it. Is that how you had it in mind?

DE: Yeah.

SYG: That seems possible. But I don’t know if that is—I don’t want to say if that’s desirable yet because it’s—because one maybe the user—there is some cost in allocating a thing in shared space, if you don’t ever intend it to be shared. Right? So maybe you want to let the programmer control that intent need instead of sharable and therefore we put it in the shared space.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_19]

ACE: Thanks. I am going to move on. So a kind of problem case that centres around, we have maps, we have had maps language for a while now. They are great and I’m pleased we have them. But really, it does just feel like the only thing I can really use as a key is strings or numbers.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_40]

ACE: Like, in terms of generally programming, yes, I could put true and false as a key. Objects as keys and it happens. But generally when I am using Maps, use Maps, it seems like the majority of cases is, the key is a string or a number. Because that’s the thing that kind of works best. If you have `Map.groupBy` it works fantastic, when I am grouping by a single numeric or string value. But then I very quickly get complexity when I am now grouping by two values. If I thought I could return like a pair, that’s fundamentally wrong. I am creating a new object every time. So I am not grouping by anything really. So the thing I—I have no data on this, but anecdotally, people use strings because they are in the language. This works. You can construct a string that kind of represents the multiple bits of data. And now, that will groupBy those values. But this has a bunch of flaws. Or like annoyances, now I have a map filled with string keys. When I iterate over the map, it’s a nuisance to extract those values back out. And I also see people typically use things like `JSON.stringify` here. Which may work until when the key order changes between different objects and then it breaks and they don’t notice. So I don’t really feel like we have a great answer for what people should do here. Today.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g33754a471b1_0_0]

ACE: The thing you technically can do, and I don’t see this happening a lot is, construct composite keys using objects. If you use the object identity with maps so you can get the keying behavior you need, but it’s still a descriptive object with separate bits of data inside and rather than it being compressed down into a string.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_76]

ACE: And that—you can do that today, in user-land that need any any proposals to build that and there’s a build of npm libraries that do this. The way they fundamentally work, they kind of tak the vector of things you create, and then use a series of maps to kind of walk-through that vector to refine, in the infinite space of all possible JavaScript values, like the point where that value lives, and then they create an object there and it becomes the object that represents this. And then if you just used Maps for that, this would just leak like crazy. So reduce this leaking, you use WeakMaps for the object part, and then you can also use a FinalizationRegistry to clean things up as well. Most things I use, they use the WeakMap part of it and he they went use the FinalizationRegistry trick so they leak a bit. This is doable in user-land today.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g3315cd10b42_0_10]

ACE: The pros, you can do this today. You can write JavaScript. And it just works because it’s using === equality. Everywhere in the language you have equality, it works. All the different equality iterations we have, they agree on, what happens with two objects. The con here, that is evident from this, is a lot of overhead here. You create like a key of n things. You are creating n maps, potentially for every key, even if it only varies a little bit, you create all new maps. When you go into one direction, after that is all new maps. You are creating a lot of objects. Another thing I think happens here, I don’t have like data on this, and I am not like a browser implementor, but I think the garbage collector hates this a little bit. I think what ends up happening, you get a lot of references from old space to new space. You don’t get something like the generational benefits with using this pattern if you really, really stressed it. I would be kind of interested in maybe that’s not the case or maybe there’s some interesting papers on how to mitigate that. I do think that there’s a lot of overhead to this approach. I think an approach built into the language that will use the similar technique, I think they could maybe do slightly better than userland, but I don’t think they would be magically super fast to the userland. They would have similar overheads and it does sound like there are complexities with GC.

WH: WeakMaps work for keys which are objects. But look at the last two key parts on the slide, which are primitives and can’t be put into a WeakMap. Don’t these leak?

ACE: Yes, so the trick here is, this is like lots of like NPM libraries, they leak if you create like you keep creating keys, they all share the same object, but have a different BigInt and keep leak because they rely on the objects going away. But the way to mitigate that, which I have done in my implementation is, you have a FinalizationRegistry on the composite key and if that is finalized, you clean up in the reverse direction. You move the entry from this where the map is zero, you tell the map above you to remove the entry. It cleans up in the reverse direction. So that kind of helps these things not leak. It’s very easy to make them leak. If you hold them wrong.

ACE: The other kind of downside of keys—let’s say records and tuples, similar to what SYG was saying, if these were shared structs there’s a cost to allocating shared structs. If you were creating the immutable data structs, just to get the immutableness of them, and not because they are planning on doing `===`, they will pay a cost creation time that they will never claim. You have to do this work eagerly to do this at all. That’s a bit after shame. People might say “please don’t use this here because they’re too slow to create”.

ACE: I’m pretty sure this causes GC complexity that we could see as an opportunity for some really good GC research or say that’s the reason we wouldn’t go in this direction. And you have to—I think there are people in committee that want negative zero and in turn means you don’t get negative zero. It’s another thing that the NPM library always get wrong. They always forget about negative zero.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_47]

ACE: So going back to my meditating in the desert image, I was thinking you don’t necessarily have to intern these thing. What we have is an opportunity. If we added these to the language, we kind of get this one time or this one opportunity to decide what the semantics are. And we could say that these new things added to the language have new behavior, like, they introduce a new capability to steal a word from DE’s slides that haven’t been presented yet, we can say in particular APIs in the language even if the things are not triple equal to each other, they could still be treated equal in certain APIs.

ACE: So maybe we could actually say when you use these things in a map, the map kind of checks them, sees they’re records and tuples and applies the notation and this line here would work.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g2af82517ce6_0_31]

ACE: Why could we possibly do that? I think we could do that if we wanted to because they wouldn’t kind of violate any of the kind of requirements we would put on maps and sets today. Like, these things would be stable, fixed in MM’s kind of world. The equality that they could offer would meet all of the existing kind of equality rules that we need for the map and a set. So they wouldn’t violate kind of any of the things that we would want a map and a set key to do today. And it would be backwards compatible because these things don’t exist.

KG: It has not been clear to me throughout this presentation whether these were triple equals or not.

ACE: It’s not clear to me either. I think they can’t be, because I don’t think we’ll be able to – I’m putting words in implementer’s mouth. I think implementers will say, yes, that will be too slow because maybe there’s a way that interning costs could be reduced. From everything I’ve been told and everything I kind of understand about the engines, I feel like the same view that we adopt from these being primitives applies here and that them being triple equal would be nice from a semantic point of view but I think the fact that these things are actually going to run and be performative means they wouldn’t be.

DE: I’ve been assuming they’re not triple equals as well. And this is because the previous time that records and tuples were proposed for Stage 3, we got extremely explicit feedback from implementers that neither strategy would work, not interning because the cost is too high and doing the deep comparison in place because it’s too important that triple equals on objects is just a pointer comparison. So the proposal that Ashley is talking about tries to work within that

JGT: When I hear about records and tuples I think about react and the way react deal with its property updates. For folks who aren’t familiar, react will rebrand the component if any of the properties that you pass it are different. And different is `Object.is`. And so what is interesting about this case that might be possible is there something that could work with react that would be backwards compatible enough to make it into React that would solve that problem? What is nice about it is it’s not the user doing triple equals or calling `Object.is`, it’s the framework. This problem is actually a huge problem for react development where if it’s a string, you just pass in the prop. If it’s not a string, you have to bend over backwards and do all this crazy stuff to make it work. There’s many libraries whose job it is to make it easier. You still screw it up all the time. I wonder if the way to approach this problem might be to look at various use cases, not unlike the previous discussion we had earlier today and that even if you can’t solve all of them, can you find particular use cases like maps, like react or like whatever that might have some at least partial solutions that could add value. So I think my main recommendation would be to try to carve out the use case space and to say, okay, you know, here is some—I’m imagining some grid of here is six use cases for this kind of problem, here is the various approaches and here is which one is better and might be a good way to visualize this.

DE: We’ve done that exercise very extensively in the past six years about this question in particular. We have gotten feedback from the react team they don’t want deep equality done in these cases in particular. If you have the tree of state passed down through props and that sort of AsyncIterator and stepped down and if we did a comparison that would be much work. This suits requirements by providing identity comparison that they would continue to use by default. In certain cases, maybe you want to opt into structural comparison but the good thing about this proposal that we got negative feedback from the react team about the previous version of the proposal that only offers structural comparison. They said we want the fast where we just do identity comparison. So in that sense, this meets the –

JGT: Can you clarify if you don’t have triple equal support, how do you get identity comparison?

DE: Let’s go through the rest of the slides. Because it answers this question. And then we can do the queue afterwards.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_23]

ACE: The way I was imagining this would work is when you create these things, they’re tagged with the internal slot and that could be a brand check from that. The equality would still be recursive even if these things are only shallow immutable. If the values inside them are still other things with this tag, then the equality would still be deep as far as you stay within records and tuples. So as soon as you hit a mutable object, you are falling back to referential of equality of that point. These things like implementation details would be part of the spec, but they would spec the same way to Maps and Sets. They can still use hash codes to help when you’re putting these in Maps and Sets and not necessarily able to compute this every single time. You can cache the hashcode much like you can do it with strings. This works like crucially a big thing about why this would work in Maps and Sets to—without changing them is that these things have this tag from birth. You can’t put an object in a map and a set whereas compared by reference and then later install this slot changing its equality. When you put it into the Map and into the Set, its equality semantic never change. And then going back to the earlier why I think syntax is nice here, because these things have to have the slot from birth, it means if the API is give me an object and then I will turn it into a record, it means that you have to kind of create like double allocate everything as opposed to syntax thing which means you can immediately jump to creating the kind of final result.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g3350f6676e7_0_14]

ACE: So the advantages of this approach would be we don’t pay the complexity of interning. We have the choice if we wanted to to get these things to work with the APIs we already have in the language. Not all APIs wouldn’t work with ===, but they could work with Maps and Sets and other upcoming proposals like uniqBy is replaced by composite keys could be useful.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g3350f6676e7_0_9]

ACE: The down sides of why we might not want to do this is that JavaScript already has four different forms of equality. Adding five, you know, is a hard pill to swallow. Interning wouldn’t cause us to do that. We could completely replace SameValueZero everywhere we use it we do this. That’s probably a terrifying prospect. Modifying maps and sets to have new semantics, you know, that’s really annoying for polyfills to do more. Maybe that’s why we wouldn’t want to do this. I think purely coming at this from the end JavaScript user, I think they are really the ones that would benefit if we did do this, because if we had new APIs and created a new type of Map, CompositeMap and then a JavaScript said when would I choose a regular Map and CompositeMap? The answer 99% of the time would be you can use a CompositeMap that goes if you’re putting strings and numbers in it, it would keep working the same. If you are putting the records and tuples in these things, you always want the record and tuple value. It would feel like a shame to have a map and then a second time of map and really we’re almost presenting like there’s a choice. But there’s kind of really isn’t a choice. The reason we’re doing it is that these things layer that is similar to kind of polyfill, maybe similar to implement the engines as well at this point. Purely from the JavaScript perspective, I think it makes sense that these don’t introduce new things. I can see the argument of why we wouldn’t go that route? Let’s discuss. You can only back to the react thing. I can see there’s stuff on the queue.

DE: Just a clarifying question about the last slide, what are you suggesting that it be? Should it be replacing SameValueZero or suggesting something else?

ACE: So if it was up to me, I would replace SameValueZero. But I can just sense from meeting people that that won’t be palatable. I would love to be able to convince the committee that it was. I just can see that being an uphill struggle to convince people. I’m prepared to fight for it.

ACE: With the React thing, we can’t really in a backwards compatible way, these things wouldn’t be object the same if they’re not literally the same object. If react wanted to switch, they would need to switch to the equality predicate. When we talked with the React team years ago about whether they would recommend records and tuples, they said probably not with the old semantics because they actually prefer the React compare approach and more granular local updates. The thing with the React compiler thing is you’re always—you’re kind of creating a very unique comparisons and unique for call site and say you’re creating a record with ten properties, only one of them changes. The compiler can say I only need to check that one property but one property is changed. And then I know if the rest—I don’t have to check the rest because I can see at the React compiler stage, they don’t change. So that’s the way that React is are now solving the problem. Where Records and Tuples don’t help if it’s the local thing and multiple data sources creating data all flowing into one React component. And then that React component still wanting to normalize. That’s the case that I’m still hearing from React developers. They’re saying even with React compiler, we still want === for that case. But I think it’s really reduced the react to use case now that you have the React compiler.

JRL: Specifically between DE and JGT, JGT suggested use records and tuples for props and DE responded with trees and different point of view. If we had it for props, the discussion we just had with React compiler making it less necessary but we still need it for the individual sub-props inside of it. It could be used there. But for the React VDOM tree is absolutely horrible. It turns what is currently linear algorithm is quadratic and that was Daniel’s point and two different discussions discussed.

DE: I was talking about the state tree and it’s horrible for –

ACE: A lot of people said records and tuples would be great for the VDOM but it’s exact opposite and conduct for the VDOM.

WH: Maybe I missed it, but what does equalRecords do when it gets to a nonrecord? Is it sameValueZero or something else?

ACE: Yeah, sameValueZero. We would have to do a modified version of same value zero. It would be the new SameValueZero that takes Records and Tuples into account.

KG: Since this is a temperature check, I am positive. That’s the main thing out of Records and Tuples and composite keys that work with automatic APIs like groupBy and uniqBy and Map and Set would be great. There’s a handful of details. Also doesn’t necessarily require syntax to work. That was an old proposal for doing this just as a composite key built in.

ACE: Yeah absolutely.

KG: And anyway, this is the main thing that I personally want out of records and tuples. I would be happy with this direction.

MF [via queue]: +1 to everything that KG said

LCA: I phrase this as unfortunate we cannot make this work. So it would be very, very cool if it was still possible for the built-ins that are sort of deeply immutable like, for example, all the new Temporal types if they could work inside of composite type—sorry, composite key. I don’t know exactly how that could work. If this is Tuple or is Record internal slot, like, would it be possible for us to down the line once this ships or if this ever ships to add that to the Temporal types, for example? I mean, there’s obviously the backwards compatibility concern if you have a set that consists of multiple different like Temporal type objects, whether that would work and there’s the other question of like if there’s no way of doing this in user land like you can never polyfill Temporal correctly, which would suck. But it would be really cool if we could investigate this as part of that.

ACE: The way I think you—if we can go back in time and maybe many years ago, we purposely chose that we wouldn’t tie Temporal to Records and Tuples, that I think was the right choice because Temporal would be even further away from Stage 4 and it’s so great that Temporal is close. I think the way we could do it is developers—we could have toImmutable or toRecord or toFixed something that you could upgrade it to the point where it’s—I don’t think we would be able to be compatible and just automatically frozen in this way. I think it’s too late for that. I don’t think we’re completely cut off from it being nothing in this space. Did you want to add to that?

DE: Yeah. I don’t see that path that you’re describing as particularly reasonable. It would be kind of annoying to write that all over your code using Temporal. But in general for Temporal objects because you could put them as Map or Set keys, this is something that we would have to decide now. You don’t need records and tuples to make the structural comparison of them relevant. Previously with Temporal, we had custom calendars and TimeZones that offered their own extra identity issues. Now the only thing in play is sort of the prototype itself which I imagine we wouldn’t really want to participate in comparison. Any way, I think it makes sense to ship Temporal as is without the structural comparison. So I guess I agree with the way you originally phrased your statement.

LCA: If I could respond to that, like, I agree with you that we should absolutely not hold Temporal back for this. I’ll let the rest of the queue go on.

MAH: I was wondering if it would be solved not just for this but in general if you one able to sold the solution of creating custom objects that are immutable that you can put with the semantics in a record if you could just set the prototype when you sign the record.

[Slide: https://docs.google.com/presentation/d/1uONn7T91lfZDV4frCsxpwd1QB_pU3P7F6V2j9jEPnA8/edit#slide=id.g336fbd25823_0_52]

ACE: So I had a hidden slide. I think we could say this was valid syntax and we could create things with the custom prototype so you can still create things that they are themselves immutable but they have this inheritable methods and you can create something that still has the benefits of operating it in that domain rather than being just plain data with no methods. I think, yes.

LCA: Importantly the prototype would not participate in equality.

ACE: I think they would participate in—the two things have to have the same prototype. But that would be it. It would be effectively the same as the other things.

KG: I think this would be pretty tricky. I think that the questions around this get kind of funny, and I think especially if you are thinking of this primarily as composite keys, the answer would be clearly no, because it’s just a key, it doesn’t make sense to think of it as something other than a prototype. Whereas if you’re thinking of these as more general purpose objects you have to think of prototypes. In other languages you want equality to hold for subtypes sometimes and not other time and it’s a much bigger world of questions to explore once you allow prototypes other than null.

ACE: I do feel like there is space for custom equality. But that would be a symbol protocol and that definitely wouldn’t work out of the box for Maps and Sets. Because I think kind of violates the thing of once in a Map and a Set, its equality can’t change. For those cases where you want subclasses and then maybe the weighted equality works varies, do you care about the case instinctive string and things? To me all of that side seems like do reverse symbol protocol. The thing is there’s no symbol protocol. It’s kind of set and fixed.

LCA: Just to respond to this one more time, I think—I agree this is complicated. But as we have seen with shared structs not having prototypes is unergonomic in many cases and a lot of complexity that shared structs is now adding to enable prototypes. It depends on the use cases. It would be nice if you could have a 2d point that you can add to the map and it works correctly. You could still have methods on it. I agree it’s complicated.

KG: Depends what the use cases are. If it’s just a composite key you don’t care about those things. If it’s more general, you care about those things. It really depends on how we’re phrasing this or what we think the main value is. For me the main value is just composite keys. But I think people have other things that they care about. Not the only user.

MAH: I like direction obviously a lot of discussion with the Matrix and the question if we have these as objects and they work transparently with Maps and Set and so on, the question is how does new code then introduce these objects and old code that uses Map, Sets, WeakMap and so on behave when they encounter these objects? Like, right now, if you have two things that are not equal, except for NaN they will end up separate entries as Maps or Sets. If you have something that is an object, you are expected to be able to hold it weekly. So there’s a lot of details here that are—that will need to be figured out. And I hope we can figure something out, but I’m worried that there’s going to be more difficulties down the road.

ACE: I’m looking forward to seeing the conversation in matrix.

DE: How do you think we should investigate that?

MAH: I don’t know. I usually feel that libraries are allowed to have these expectations and I don’t know if we can break them that easily.

ACE: My hypothesis is if this model that we are worried about in the committee wouldn’t hold up in practice and people—libraries taking in third party objects and putting them in Maps and Sets aren’t relying on this kind of the way we think they could theoretically do. I’m biased. That’s what I’m hoping for.

SYG: This slide, what is no interning overhead mean? Might have missed it.

ACE: Sure. So creating these things would be roughly—putting the shared struct aside would be roughly as expensive as creating a regular object plus perhaps just a few additional checks. Wouldn’t actually have to then go to a global table, see if an identical one already exists and then actually use that existing object. So you’re not actually having to do structural sharing.

SYG: I see.

ACE: These are regular objects and maybe one internal extra filled and maybe precompute like a hash value. Not saying zero cost, but I think less cost than a structural sharing approach.

SYG: I see, okay.

JGT: I will just clarify I think JRL was accurate there’s two very different issues around react. I think the biggest developer experience would be for props that nobody really manipulates the VDOM unless they’re really advanced. React developers can do the hard stuff. Anything like Luca’s example like 2D point and have the graphing component of 2D point is easier than crack out the XYZ every time you use it.

ACE: This is exactly what I was hoping it would do. The feedback was very welcome. So thank you.

### Speaker's Summary of Key Points

* Recapped some of the history of the R&T proposal, specifically that the design would need to not add new primitives and that there is no appetite to overload `===`.
* Stated a potential new design that works within the previously stated constraints. The design includes syntax, though this could be optional, shallow immutability, and providing compositeKey equality for existing APIs but does not provide new `===` equality semantics
* There was also discussion on how the proposal might interact with the structs proposal

### Conclusion

* Feedback was generally positive to continue exploring this direction.
* Some feedback on potential for complexity when getting into the details, such as if existing code is expecting objects in map to only use same reference equality

## Use cases for ShadowRealm

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-shadowrealm)

PFC: Yesterday in my segment on ShadowRealms, we talked a bit about use cases. And I thought I would do a short addendum on how I see this request for use cases, because I think in general if we’re talking about proposals that intersect TC39 and the wider web platform world, I think often we’re talking about different things when we talk about use cases. So I want to say upfront I’ve been involved with TC39 for five years, I have a fairly good idea of what we want in this committee. That is not the case for the wider web platform world. I could be wrong. I invite you to tell me how I’m wrong at the end of the presentation. So as part of my work on ShadowRealms, I ran across this document writing effective explainers for W3C TAG review. If you haven’t seen it, I haven’t published these slides anywhere yet. I will put the link in the chat afterwards. And it is a very nice document that explains what the W3C TAG wants when you ask them for a review of a proposal. So, again, don’t take what I say as an official pronouncement but this is my interpretation. These are quotes from that document that I just mentioned. They ask you to describe the problem that your proposed feature aims to solve from an end user’s perspective. That is not emphasis that I added; it is in bold in the document. They seem to find it important. There is another paragraph down below: Start with a clear description of the end user problem you’re trying to solve even if the connection is complex or you discovered the problem by talking to web developers who emphasized their own needs. That’s an interesting phrasing that says to me that you may conceive of a feature because it fulfills developer’s needs but you need to describe it in a way that fulfills end user’s needs if you want them to pay attention to it.

PFC: So again this is my interpretation. I take this to mean that cultural norms in that community dictate that "this feature will allow developers do such and such a cool thing" is not going to be taken seriously as a use case. I think that’s what I mean when I say that sometimes we are talking at cross purposes about use cases when we have proposals that intersect these two worlds.

PFC: So that doesn’t happen very often. I think it does happen in the ShadowRealm case because one of the things we want before advancing ShadowRealm to stage 3 in this committee is integration with web platform APIs and need web platform buy in. It happens for a few other proposals like AsyncContext. But for most of the proposals we talk about this is our house and our rules and we decide the use cases that we like. ShadowRealm lives in two houses and has to abide by two sets of rules.

PFC: So this is not verbatim any particular phrasing of use case that we have thought up, provided, but this is my paraphrasing. This is the kind of use case for ShadowRealm we’ve been talking about so far. ShadowRealm lets you run third party scripts quickly and synchronously with integrity preservation and allows accommodating building blocks from different authors that might conflict with each other. I think this is a perfect valid use case from our perspective. This makes me think that ShadowRealm is a valuable addition to the language. But it doesn’t mention anything about the end user. I think when we hear from web platform “give us use cases” and we give them this, that’s not what we’re asking for.

PFC: So this in my opinion might be a way to rewrite the thing that I have in the previous slide from an end user perspective. Large platforms like web applications often allow customization via plug-ins. In JavaScript most built in stuff is overwritable and so badly behaved plug-ins are always a concern. When application writers have a way of segments off and isolating code they don’t control, they can deliver a more stable experience to users. This is short for the slide but I would say something about how maybe for a customer of that platform, you would install 19 plugins and 10 of them are written by the customer itself and have stability in that case because you can’t count on the code quality of the plug-ins, whatever. I think focusing on rather than "this allows developers to do such and such", focusing on what can the developers build that they couldn’t build before is the kind of thing that we need to provide when we’re giving use cases to web platform folks.

PFC: So that’s my interpretation. I’ve discussed this with a few people and heard reactions ranging from 'sure, that makes sense' to 'I don’t think you’re right about this.' So I’d like to invite discussion here. What do you think about this? What has been your experience with proposals that intersect those two communities?

MM: So I want to be explicit about supply chain use as a use case. It’s kind of implicit in a lot of what you said. I think it’s worth making explicit and it has a more vivid case for the end user than is obvious from the way you put supply chain risk in your presentation. There have been attack after attack after attack where some third party component was revised to attack the users of programs that use that component. Several of these are very famous cases. Now, JavaScript and LavaMoat by MetaMask, and XS are all trying to provide good mechanisms for supply chain risk when the elements can live within their restrictions of hardened JavaScript. If we fix the overriding mistake, then a tremendous larger number of existing npm packages will in fact be compatible in JavaScript that we can apply all of the supply chain risk in the restriction. A lot can’t live in the restrictions of hardened JavaScript, in which case you cannot protect from each other in a single realm.

MM: What the ShadowRealm give us especially with the boundary that the committee put on us which we ended up being overjoyed to have accepted is that you can take programs that cannot be run under HardenedJS because, for example, they modify the primordials and run time in ways that HardenedJS must prevent. The ShadowRealms enables a much heavier protection domain which is the realm but enables the same protections between the protection domains without constraining them—you know, the code within the protection, each protection domain within its own that are still protected within others. I think with the JavaScript system, I just want to reiterate the figure that I heard many years ago that I believe is still correct which is the technical JavaScript application according to NPM statistics as of years ago is 3% code specific to the application and 97% code linked in from third party libraries often through third party that many are unaware of. Many supply chain attacks come from dependencies deep down the dependency chain.

PFC: Okay. I think supply chain risk is a good thing—it’s very easy to explain that in terms of benefits to the user. Thanks.

DE: I’m wondering if we could get more feedback from browsers on what they think of Phillip’s explained use case. What kinds of evidence would be interesting for you in evaluating whether this is a good use case? It’s okay if you don’t have the answer now. Maybe you could get back to us between—or the champions between now and, you know, some time in the future.

SYG: I’m not the one doing the evaluation. I think the two houses metaphor is apt here. This is kind of stuck right now because the bar in WHATWG is active from the browser to implement this on the non-JS engine side. That’s the bar that you need to clear. And asking this room what the browser representatives from the JS engines think of your use case doesn’t progress towards that goal as far as I can tell.

PFC: Yeah, that’s my understanding as well. It's also why in my presentation yesterday I didn't spend very much time talking about use cases. Because my impression was that we talked about those already and this room is pretty much convinced and it’s elsewhere that we need to do the convincing. But if you do have any remarks or meta discussion about the way that we present our use cases, or whether you think my interpretation of what is going to be convincing is correct or incorrect, I would love to hear that.

SYG: I think that makes it sound like you are asking the JS—the browser JS engine representatives if we would like to help champion this proposal along with you. Is that what you’re asking?

PFC: No. I’m not asking anybody to do anything. I put up an understanding that I have of the way that things need to be communicated. I’m asking you or anybody in general if that rings true to you.

SYG: I see.

MS: So basically SYG said we talked about this yesterday. You know, this is more on the DOM side and the W3C APIs at this point.

JHD: So ideally our process is set up so that the stage advancements which are intended to be signals are those signals. What I’m hearing is that the browser TC39 reps aren’t the ones—like, it’s a different group or team not making those decisions for everything at least in the browser. We certainly don’t have the capability of fixing bureaucracy ever. So I guess more I would love to understand if somebody understands it and I just missed it, I will be quiet. But what should we have checked before 2.7 or 3 or whatever? Who should we have checked with and so on? To avoid Stage 3 things not being prioritized. And obviously that’s a long-term question. I don’t expect the answer right now. But whatever the answers are, it would great if we found a way to incorporate that into the process so it’s not a problem in the future. That’s all.

KG: I guess I’m on the queue. I think we have. And we said for things which require integration with the greater web platform, that needs to happen as part of this Stage 2.7 to 3 advancement. We demoted ShadowRealm to 2.7 partly for this reason so we could then have the integration happen. So at least my understanding is that that’s what we have done, we have been saying that you can get 2.7 but 3 requires if your proposal requires integration with host APIs, you have to get sign off from the people that you need to integrate with before you can get Stage 3.

JHD: Did we not get that from ShadowRealm?

PFC: No. That’s what I was asking.

NRO: Kevin said, we’re learning the lessons even if it’s painful. It was in cases with ShadowRealm but then for separate proposals like AsyncContext before 2.7.

MAH: There’s still something that I’m confused about this specific proposal, this is a JavaScript API and the browser asked that we should have the host being able to add their own API to the global aspect of ShadowRealms so this was considered and accepted. And now from what I understand, we’re hearing that the part of the browser that decided which API go on the global are getting to relitigate whether the feature at all should exist, not just which API—agreeing which API or not are valid to be on there but more whether the JavaScript API that went through the staging process here, whether this is an a valid use case for the web at all. Why is it that this feature requires approval from W3C or WHATWG I’m not sure which one to be added to the listening at all in this case?

PFC: My understanding is the signal in this committee is stronger than what you were saying. The signal in this committee was we don’t want this feature to exist if it doesn’t integrate the host APIs. The signal was not that we want this feature regardless and the host can add APIs if they want to. That is my understanding. Somebody can correct me if I’m wrong about that.

KG: I’m on the queue saying that almost word for word. I don’t want this feature to exist if it doesn’t have TextEncoder and stuff. People shouldn’t have to know about the split where TextEncoder is in a different specification than urlencode or whatever. This is completely irrelevant to almost all users of JavaScript. I don’t want to add any features that makes that distinction relevant to them. I don’t know in general which proposals need sign off from WHATWG, but for this specific proposal I don’t want this to exist until it has the handful of APIs that have been carefully outlined that make sense is purely computational. So the requirement is coming from inside the committee.

MAH: So we brought this on ourselves?

PFC: Yeah.

JSL: In my experience, another key part of the process that tends to get missed is just agreement on the problem statement up front, right, and WHATWG, a lot of times what they want to see is give them a chance to agree that the problem is a problem that they’re interested in solving. Before the use cases gets presented. You know, is it something that all of the various browsers and various implementers are all on the same page? I think a lot of times it ends up getting skipped. "We agree and we think it’s the problem to be solved. What do you think of this solution?" It’s like, no, no, "we think it’s a problem. Do you agree?" Does that make sense?

PFC: That does.

MAH: So is this going to be a problem with WinterTC APIs?

JSL: Yes, hundred percent.

### Speaker's Summary of Key Points

* We discussed the presenter's interpretation of the differences between what it means when we say "use cases" in TC39 and what it means when someone from the W3C community says "use cases". In the web platform world there is a strong emphasis on the benefits to the end-user.

### Conclusion

* None
