# 110th TC39 Meeting

Day Three—24 September 2025

**Attendees:**

| Name              | Abbreviation | Organization   |
|-------------------|--------------|----------------|
| Waldemar Horwat   | WH           | Invited Expert |
| Michael Saboff    | MLS          | Invited Expert |
| Nicolò Ribaudo    | NRO          | Igalia         |
| Ben Allen         | BAN          | Igalia         |
| Jesse Alama       | JMN          | Igalia         |
| Eemeli Aro        | EAO          | Mozilla        |
| Chris de Almeida  | CDA          | IBM            |
| Samina Husain     | SHN          | Ecma           |
| Dmitry Makhnev    | DJM          | JetBrains      |
| Istvan Sebestyen  | IS           | Ecma           |
| Erik Marks        | REK          | Consensys      |
| Jesse Alama       | JMN          | Igalia         |
| Philip Chimento   | PFC          | Igalia         |
| Devin Rousso      | DRO          | Invited Expert |
| Dan Minor         | DLM          | Mozilla        |
| Guy Bedford       | GB           | Cloudflare     |
| Jordan Harband    | JHD          | Herodevs       |
| Justin Ridgewell  | JRL          | Google         |
| Kevin Gibbons     | KG           | F5             |
| Kris Kowal        | KKL          | Agoric         |
| Keith Miller      | KM           | Apple          |
| Mathieu Hofman    | MAH          | Agoric         |
| Mark S. Miller    | MM           | Agoric         |
| Olivier Flückiger | OFR          | Google         |
| Ryan Cavanaugh    | RCH          | Microsoft      |
| Rob Palmer        | RPR          | Bloomberg      |
| Shane Carr        | SFC          | Google         |
| Ujjwal Sharma     | USA          | Igalia         |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

## Continuation: Amount for Stage 2

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-amount)
* [slides](https://docs.google.com/presentation/d/1cDQBcMzSAht9jZiuaMKAEIDlPmlSmjeBJ-sw23AySWI/edit?slide=id.g37deebb6a10_2_54#slide=id.g37deebb6a10_2_54)

BAN: So let’s see. Since the past two very long days we have been addressing a number of concerns that came up with folks with regards to amount. I believe SFC has some slides from the V8 team. We were talking some on matrix about, do you want to show them first or go ahead with my slides?

SFC: Yeah. Sure. I can go ahead with the—these slides. I think I am sharing my slides. There they are. So thanks for the update that you gave on Monday. I am here to share some feedback that I got from other Googlers on the V8 team on the amount proposal. And some concerns they had and things that we need to think—the champions need to consider here. These are—this slide deck corresponds to the items I put on the queue on Monday, but we didn’t have time to discuss on Monday. So I went ahead and organized them into a slide show for you. So I want to go through this. So I want to say, this deck state concerns not solutions. I trust that Ben will follow with some—with proposed solutions to these concerns. But I want to make sure the concerns are well understood. So the first concern is that were concerns that the amount night introduce a so-called back door decimal. We are concerned about introducing a new numeric type into the language. This is of course because amount represents not only numbers and BigInts but also strings based on the ROI that we saw with BigInts. There’s concerns that adding a decimal might not be the right direction for JavaScript and we acknowledge this is not the decimal proposal, but because of the way it’s currently shaped including with, you know, with numeric methods and so we worry this could in effect be a back door decimal. The second concern is that we feel we should emphasize the formatting forward use case because we are concerned that there may be an expectation that the amount proposed could be used for things other than what it is intended for. And given that the main use case seems to be the interoperability with intl, we feel that the proposal API should lean into that perspective. The third concern is that amount is not a general purpose solution. There is not really such a thing as a general purpose solution for representing measurements or currency. Amount uses a very specific representation of them. Amounts uses to represent with significant digits for precision, but there’s other way, like margin of error, discreet incrementing. The significant digits model is based on what intl currently uses and that’s another reason why that use case should be emphasized with API design. The fourth thing] that was brought up in the July meeting. We would like to avoid reading the internal slot everywhere in the spec to do that in places we accept an amount. We could also accept the amount protocol in order to encapsulate the internal value of the type. And then, the 5th is the HTML amount, early Stage HTML tag proposal, and if JavaScript moves forward with this amount type, we should definitely do so in such a way that it is designed to integrate with the HTML tag. It would be kind of, you know, shortsighted to have an amount type that when the amount—gets added to HTML they interoperability with each other. I went through those fast. I am happy to go back and sort of focus on any of those, if people had any questions about those concerns. The last slide is about Stage 2. The Google position is that the intl use case is motivating and support Stage 2, but operable of the concerns listed in the slides are addressed and there are 5 that we feel need to be addressed. So I went through the slide much faster than I anticipated going through it. But I will go ahead and turn it back over to Ben and then—unless there’s anyone in the queue with clarifying questions about my section of the slides here.

DLM: There is a question from Mark

SFC: Great. Cool.

MM: This is the slide the question is on. So what is the HTML amount proposal? I have never heard of it.

SFC: I think maybe MLA can share more about that. It’s an early stage proposal to annotate amounts which are numbers with units. It’s minimum to how the time tag annotates times and date times and that’s my understanding. It gives these type semantics meaning in HTML

MM: Was this invented independently, this amount proposal?

SFC: This is a—this is a question that also some of us on the Google team had, we are aware of the proposal. We were asking the champions to make sure we coordinate and maybe EAO can share more color.

EAO: Yes. The HTML amount proposal is separate and not sharing in origin with the amount JavaScript proposal. It’s being forwarded not by me and we’ve been relatively close coordination with regard to this proposal.

MM: Okay. So currently, are there any controversies green the proposals with regard to semantic differences?

EAO: Not really

MM: Great. Thank you.

DLM: Next up we have CDA with a request to share the slides link.

BAN: I believe Jesse is put them in matrix right

DLM: Great. And then we have Ryan.

RCH: Yeah. The question is self-contained. Would moving this from the topic of namespace to intl amount kind of address those concerns

SFC: That’s getting into talking about solutions and I think that I would rather let Ben discuss solutions. As far as problems two and three such a solution is one solution that I believe would address concerns. Number 2 and 3. But it’s not the only solution that would address 2 and 3. So I would rather let Ben discuss that part. Go ahead and I think the queue is empty. So I am going to go ahead and press the stop presenting button and I will let Ben take over from here.

BAN: Okay. We are visible. Okay. And throughout most of this proposal, most of the presentation, we will be using the name amount placeholder rather than amount because of the naming concerns.

BAN: All right. So one thing that’s very important to make clear is this is not meant to be a back door to doing math on arbitrary mathematical values. There is no arithmetic present in the proposal. It’s meant to be a container for mathematical values, within limits. Obviously, I think most of the rest of the session aside from the amount is discussing limits. With limited functionality. So storing precision in some form and a unit. And something to add, the—even in the future proposal with unit conversions would not offer a path to doing arbitrary arithmetic on unbounded values. So one of the things that we have been discussing a lot is a name for it that indicates its use. And it indicates it is not something to be used for doing arbitrary math. So one thing that was discussed was moving it under intl. I will let other people talk about that. Some names we have considered are LabelledNumber. To indicate that this is in fact a labelled number. It is valued with a unit and a precision. Another is PlainAmount. This is sort of like by analogy withPlainDateTime in Temporal. Essentially, it’s something to encourage users to go look up what it means, rather than assuming this amount is something we can use to do operations, arbitrary operations with arbitrary mathematical values. Another name is FixedAmount that we have considered. Indicating that this is in product. This is a immutable thing used for formatting or exchange. AnnotatedNumeric that’s another name we have considered. It’s sort of like LabelledNumber. And then Dimension is something else that was brought up in discussion. We are amenable to essentially all these names. Something I would like to say, EAO might be able to talk about this more, but as I understand, the author of the explainer for HTML amount said there’s not conflicts and that he doesn’t see anything wrong with using the word “amount.” Obviously, we have to address these concerns. Throughout the presentation, we will say amount place holders, since we said—

EAO: One of the reasons we ended up with Amount as the current name of the proposal is in order to align with the HTML proposal.

BAN: Correct. All right. We have been going over a lot about precision in the last couple of days. I think most naturally going into detail with that, in a few slides I will be talking about some recent changes related to significant digits and throwing it over to NRO for that. But our design is at this point consistent with a future extension where we support other approaches to represent precision. Where we consider other approaches. So in the future, the placeholder amount whatever we are calling it could get a `.resolution` property. So, for example, a 0.500 kilograms measured with a scale that can detect grams would have resolution 0.001 and `.fractionDigit` 3. Likewise, the same on the scale that detect 5 gram increments could have resolution 0.005, this is useful for thinking of amount as something to represent quantities. This resolution idea (?) was world quantities. One of the motivating things for this was, there is some discussion on one of the issues about well, okay. So say we are using a barometer with the resolution 5 millibars or whatever, this could capture this. Other options considered, percentage-based tolerance. Interval radius, similar properties. And for rendering purposes, all of them would have a fraction digit-based approach.

BAN: With regards to protocol. We are happy with this string protocol. So syntax to be determined. This is sort of a placeholder for the syntax. So in this case, it could be a string with the unit quantity in brackets. Obviously, notation that is future-proofed and extensible with eye towards potentially adding precision. Objects with `.unit` and `.fraction` could also work. So either of those is fine with us. Either of those proposed solutions. As we have mentioned, there is the amount HTML element. There's an in-progress explainer for it. That’s all there is now. So yeah. This would necessarily integrate with that. And the author of the explainer says there are no conflicts.

BAN: Then yeah. Maybe full integration with HTML. All right. Hopefully this provides proposed solutions to all of the V8 concerns. We can discuss more obviously and will be discussing more. The other major set of concerns that we have been working on for the last couple of days is there’s some puzzles involving significant digits. One option is to remove support for that. JMN put up a PR for that. And NRO has put up an extensive PR, proposing changes to how we compute advantages. And with the thing to do right now is to flow a significant digit.

NRO: Just given this other slide continuation of like very long discussion the other day just to make sure everybody is heard, let’s go through the agenda then we come back to this.

CDA: Thank you.

NRO: Sorry. Not the agenda, through the queue.

BAN: Through the queue. Yeah.

DLM: Going to the queue. First up, EAO.

EAO: So this is a clarifying question for SFC: you mentioned that there’s a concern about the name Amount implying arithmetic might happen here. Is this concern specifically about arithmetic possibly happening on Amount in the JavaScript spec, or is this a concern about a user library implementing any arithmetic or other operations on amount?

SFC: So with—we are pessimistic this satisfies the expectations of users in the long run as demand for arithmetic on amount values seems likely. Especially given its envisioned use cases.

OFR: Maybe I can add one thing. For example, one thing that we noticed is that the spec itself had only, like, toString method on it. But then, the slides already had, like, a toNumber method on it. And so this was kind of showing a direction and then if you think about the toNumber method being used in practice, then I can quickly see libraries doing like `amount.toNumber` + `other.toNumber` and create a new amount from that and clearly the next proposal would be well, it should + and so that was part where this came from.

BAN: Yeah. And that’s my bad. I went through the slides quickly. We have in the past couple of days updated the spec to remove those conversion methods, we removed toNumber and ToBigInt

JHD: Yeah. I guess, people—the wrong thing from the name all the names because names are hard. `Proxy` doesn’t have to do with network forwarding. That was my cheeky thing in the queue. A word can mean a number of things because it’s a word. So what if a few people think they could do arbitrary math and then 3 seconds later play around with this and realize they can’t. What is the danger there? And as far as if they—if the thing they want is arbitrary math, well, then a proposal can seek to provide that, but, like, I guess I am curious what is the problem? Maybe I missed the initial slide of it. None of these alternative names seem better to me. Dimension would actually imply nothing about significant digits to me. Although it could certainly work and all the rest are like JavaBean factory non-sense. Amount is the right name and I am confused. I would love to understand what the risk is of some amount of people intuiting the wrong then and discovering they are wrong.

EAO: So just reiterating, OFR, what I understood from what you said earlier, that the concern you have is that this opens up a little bit too much of a door for a later proposal to add arithmetic to the spec on amount. And that is what you’re concerned about. The concern is not about generally speaking some completely outside the spec library, implementing the sort of operations that apply on amount instances. Also, you mentioned there being a difference, for example, in the presentations previously on what is actually in the written spec and what is being proposed. I would urge you to consider that to be actually sort of—the direction of the development of this proposal has I think been the other way than that implies. In that, when this got to Stage 1, it included a lot of, like, currency—sorry. Unit conversion and other features possibly including arithmetic that had been stripped out of this as we have been going on. The spec as written has not included all the things we have been considering and proposing for an amount, but it’s definitely not in a direction where we want to expand what it does. More like contract it to be the minimal thing that still makes sense while not being any smaller or bigger.

KM: Sorry. Maybe more of a question, maybe a reply. Do we not expect since there’s going to be a string output like, if you want to add these amounts to do toString or like, extract the numeric value to, like, do my addition to reinsert back into an amount? I am not sure that—people are resourceful at finding ways to glue the legos together and ways you don’t necessarily intend. I am not sure that—if that’s a real concern, I am not convinced even removing the, like, toNumber is going to solve your problem.

NRO: Can I answer this? Can my next topic be in the queue. Yes, like it’s impossible to prevent people from doing math here. As long as there’s a way to get digits of this, people can construct a number. For example, the string orientation contains the unit. Which means that unit check, check if unit, strip out before the convert the number from the string. We can also make things like, the value of null does. Value of converts ToNumber if there is no unit, but we could also make the thing to make people don’t start doing, like, less thing to get the number out of it. Even just, if you pass to intl, and not true toString you can get that out without stripping the comments or the dots or whatever to convert this. It’s actually possible to fully prevent doing that. Even like with any possible type, if you put digits in there

(?): So like a regex or whatever—

NRO: Right. The more you make it, the more likely the people will look for different solution. Right?

KM: Yeah. I mean, I agree. I just—I don’t think it necessarily precludes someone from doing that now. Let’s have a proposal to add amounts straight like that. If you're worried about stop someone from ever coming with that proposal, I think there’s a realistic way to stop is I guess is what I am saying without making the proposal completely useless. It could be stringified to something where you can never see the string again. Which I don’t even know you can do that on the web as you get straight back to the text on the HTML

DLM: Let's continue the queue.

OFR: Yeah. I wrongly assumed that the presentation was ahead of the spec. But if his the other way around, I am actually happy to hear that. And maybe also reply to KM. I think so, yeah, here is if we think about Amount as sort of a partial evaluation of a NumberFormatting, then I think this is, like, the use case that we agree with. And then, the use case that we are worried about is going into the direction of an arbitrary precision number being useful for normal JavaScript code. In that sense, removing an API that encourages such a use is—or actually not providing an API that would encourage use, but providing an API that allows us to render toString is going into the right direction, I think. And it is also tied to this idea of having a protocol, where basically you say, this is going to be the way, how you talk to this amount, object and you ask it for string representation and not for a numeric representation. And then you also saying, yes, people can do the other thing, yes, of course. But I still think there would be less of an expectation that it can be used for this use case.

JHD: Yeah. So I guess I am still not—I don’t understand why it matters. People have an expectation of that. I understand why implementations don’t want to commit to arbitrary math and unbounded number values. Fine. Cool. People can come ask for and still say no. Like engines have done for, you know, primitives and records and tuples. Like, the existence of the expectation doesn’t bind anyone’s hands. If enough really want unbounded math, blah, blah, blah, then, like, you are not going to shut down something people really want by, like, making it annoying and painful and easy to screw up. And separately, if you are looking at it as just a, like, partially formatted thing that’s not a valuable container to me. I don’t see any motivation to do anything in the language if that’s all it’s providing. If it’s storing precision and a unit and a number, I should be able to extract those three things without having to do string parsing. Which, like, that is a far worse thing to encourage people to do than to do some math and occasionally get the wrong result because they are not guaranteed to do arbitrary math. We already have Number. And people are largely “fine” with the fact that, like, 0.1 +.2 doesn’t =.3. That’s not a bar to aim for. But, like, I think it’s—I don’t think people are going to be, like, pulling out pitchforks if they think they can do a thing that nobody told them they could do and the engine doesn’t let them do. I guess I don’t understand. And I think removing toNumber and toBigInt. Or removing the convenience methods to me doesn’t reduce—will not reduce anyone's desire for the use case if they have it at all. And it will just make it more annoying and easier to screw up. We shouldn’t go to extreme lengths. We doesn’t call BigInt like—we talked about the name for BigInt and talked about how we didn’t want people to believe that it was just a generic integer. And lo and behold people don't adopt and engines are complaining people didn’t adopt it. We need to work on things that are broadly useful and aren’t pigeon hold into unique use cases thus ensuring they won’t be adopted because no one will have the same idea

DLM: Clarifying question from OFR

OFR: So adding a numeric type to the language is a very, very extensive decision. And making ergonomic to use will be—either it's ergonomic to use which will make it very expensive or it will be unusable. And so I feel like if we were adding a numeric type to JavaScript, then we would have completely different discussions than we would need to—then opens up a whole area of discussions we would need to think about use cases for where to use numerical values. We here are talking about internationalization and it’s important to this will not evolve into a numerical value that we end up having in a language that is not designed to fulfill that purpose

JHD: I don’t see this proposal at all as just for internationalization. For some people that is the primary motivation. But, like, I have amounts all over the—my career, you know, that have nothing to do with internationalization and have to do with currency or displaying qualities and so on. And it wouldn’t be of any use for me on Intl.

DLM: Okay up is WH.

WH: I have the same position as Jordan. I am not in favour of annoying users because of some vague fears. If an object is storing a number, you should be able to get the number value. It’s as simple as that. I am also not in favour of pigeonholing this to just supporting internationalization use cases. This is useful outside of internationalization and shouldn’t be bound up with internationalization.

SFC: Yeah. I just wanted to note that, like, this—being able to—having the discussions ToNumber and BigInt I don’t use as foundational here. We have been shaping this as a—like a zero to pull that contains the three things, the precision, the unit and the mathematical value. And, like, these extra methods are supplementary. I think that they could be implemented in user-land. I think that, like, we—I think there’s a certain sort of tricky balance we need to strike between not encouraging people to use it in this way, but also—but also not making it too much of a barrier for people who insist on using it in that way and there’s a certain balance that we need to find. My comment down below that is one possible approach to that, but I will sit with the order I am in on the queue.

DLM: Thank you. Next up EAO.

EAO: So first of first of all, a reply to OFR. We don’t want Amount to be a numeric type that we are adding to JS; this is not the intent here. Amount is instead supposed to be able to wrap a numeric value and assign precision and unit information to it. So this can be used in the language. One of the places in which we are absolutely looking and needing to able to make use of this is `Intl.NumberFormat`. So you can wrap something like a currency value or a measurement value in an Amount and be able to format that. That’s where the story of this starts from. And I would say that there’s a big danger if we place Amount under Intl that JavaScript devs, who are known for their creativity in many ways, will recognize and use an `Intl.Amount` even if it’s made less usable to be a decent wrapper around numeric values and use it as such for interchange and other needs that exist in the language. So specifically, I do think that interchange is an important use case here. And in a way, I think we kind of need something very much like Amount in JavaScript, even in order to be able to parse arbitrary JSON without losing precision. Right now, JSON can contain numerical non-integer values that we don’t have in JavaScript without an amount as a way to directly represent them, except by a custom user object. I think there’s strong use cases for an amount that will be found by JavaScript developers even if we only add it to Intl. The question is, are we still okay including interchange as a proposed use case for Amount? And if not, then many of the concerns raised here of course follow and then it becomes questionable whether we ought to be doing this thing at all because. If we make it possible to figure out that a string is representing a numerical value, that is doing the non-formatting and non-internationalization parts of the Amount proposal, for the most part. Which I think are valuable, but if we think that is actively a thing we should not allow to happen in the language, we should recognize that and I would be very interested to hear why we should not allow a digit string to be recognized as representing a valid numerical value.

NRO: This was a reply to some topics ago when somebody mentioned forcing people to use to get the number out of Amount risks getting the wrong results. Just be careful, even ToNumber can lead to wrong results because an Amount is not float based. It can represent the strings, maybe there’s rounding like, the number you do the math on is not the number that is included in the object.

SFC: Yeah. I just wanted to suggest that one way to, like, allow creative users, I like that word creative users, to, like, do what they want to do without really sanctioning it would be to have the ToStringOptions, two options which is already that we have is there, if it’s not, we could do so. For example, suppress the unit and the unit and the output and so forth. If someone wants to convert to a number, call toString without the unit and call the Number constructor or parseFloat or whatever. And that’s very explicit about what they are doing. If it’s more explicit because of the point that NRO just raced, ToNumber rounds the amount, so having it explicitly go through string makes it more clear that is the operation you are doing. And, like, it allows creative users to get what they want without having to do string parsing. So yeah. That might be a way to sort of maybe achieve that balance I was talking about earlier.

NRO: Yeah. Concrete example of interchange, in postgres, which is a commonly used DB in JS you can have the type which is a number with some length of digits and some length of fraction digits and the adapter doesn’t know how to represent is, like, it could—with Amount, it will just give an Amount to user code and then the user code actually decides what had to do with information stored in the database.

SFC: Yeah. I just—since we’re talking about topic of interchange, I was casually talking with a developer in school, and sort of—early career, and I was talking to them about numbers and JSON and they were—then they were complaining to me about how they had a number 1 and 1.0 and 1.0 which the stringification of the one and not round tripping and they were—they found that very annoying because their JSON was being changed on the input and output. And I note that amount retains precision and that representation, it also, like, sort of addresses that annoyance of interchange. This whole thing about interchange with some—the fact that many languages have the concept of numbers with precision and JavaScript doesn’t have that right now, it does raise issues with this. This is an anecdote that I encountered that is a problem that developers do encounter and are annoyed by and this is, you know, a way to address that type of issue.

KG: Sorry to raise this again, I raised this the previous time this was discussed, but the discussion got cut off because we had a long queue. I was hoping we could address it in the meantime or in this presentation, but I don’t think we did. I am concerned about the motivation for this proposal. I am—it is not clear to me that it makes sense for this to be a new constructor in the language. As opposed to just to convention that intl NumberFormat accepts objects with value, significantDigits, and unit properties. I think that if the concern is merely having these things that can be passed around, just establishing a convention that `Intl.NumberFormat` or whatever takes objects this particular shape and perhaps the HTML element produces objects of that shape is sufficient and I don’t really see what the point of having it as a first-class constructor in the language is. The topics mentioned last time that I recall anyway are: having it be immutable, which I don’t see as something to warrant inclusion in the language because you can just freeze objects if you want; and having conventional names, but having intl format accept objects with particular names is a perfectly valid way of establishing a convention. Yeah. This the single most important thing for any proposal going for Stage 2, it needs to justify its inclusion in the language. The details of other things are important to work out but this is like the front and centre thing for the proposal to get to Stage 2. And I have not yet understood why this is worth doing. Like, concretely, why it is worth having a type in the language. I understand why it’s worth being able to represent these values. And to be able to format these values. But the way I would do that is by having a convention of having an object with three specific names for keys. And, I want to understand why that approach is not sufficient, if we are going to be doing something else.

SFC: Yeah. A few more things to cover here. For why this carries its weight as a level language feature in my view: the first is that this idea of NumberFormat protocol, which I agree should be included as part of this proposal, we have plenty of precedent of how protocols have primordials associated with them and I think this is no different than that. Like, adding a protocol effectively defines the shape of an object and then giving that object a name just corresponds to what the protocol is called. You can duck-type things like amounts. But introducing just a stand-alone protocol by itself for a thing that is actually a datatype that actually represents a real quantity is not something we have typically done. Second is integration with MessageFormat including third party implementations. There’s a lot of better ways of having a lingua franca for agreeing on the shapes of these objects. And a primordial is, you know, hands down the right way to do that. It’s, for example, you might have a case where you have like a React template that takes an amount and displays it to the user and that’s the result of some other library that gave you an Amount. And having simply an `Intl.NumberFormat` protocol does not move the needle at all on establishing that Linga Franca. So it integrates with MessageFormat including third party implementations. The motivation for 402 is strong. I would argue this is a type that should have been in intl 1.0. I think this design where the precision and unit are specified in the constructor of NumberFormat and then can’t be changed until you create another NumberFormat is sort of a flawed design because it doesn’t have a clear—it doesn’t establish a separation between developer options and display and user preferences which are three different places to obtain data for the purpose of internationalization. So like if this had been included in as part of Intl 1.0, it would have had a name. And I think basically we are establishing that now. You know, 13 years after intl 1.0 is sort of how I see this. And the other big thing which is something that as language designers we should not discount is the discoverability. We can have an Amount protocol as much as we want. Unless you can actually, like, point to a docs page at MDN which says what is the amount protocol? It’s the protocol that Amount. If viewers want to create their own objects like objects, that's totally fine. But having a—having a type in the language that implements that is just much better for the discoverability and the interoperability. It’s also a very small object. And as you point out, like if we were to, for example, add a method on Number or future Decimal type that returns one of these, then we should be returning a named object. It’s kind of silly to be returning an object bag that has no methods on it, especially since, you know, this type also defines other—it defines constructors, you know, and having a single type it gives the ability to construct it and interchange it and I see WH is next on the queue to will talk about interchange. I will go ahead and let him cover that for me

WH: To answer KG’s case, the main use case is interchange of numbers with trailing zeroes. There are a number of situations where you want to preserve precision of a number by making the number of trailing zeroes significant. This serves as an interchange for such things. Now, I am a bit concerned about some of the shifts in direction which I have seen here—if we succeed in removing conversions to number types from this, then this will frustrate the interchange use case and then I agree with KG that this will become unmotivated. So this only works for its use case if we allow conversions to and from number types.

KG: I am mostly responding to SFC. I am concerned with the idea that any conventional shape of object deserves its own constructor in the language. There are key/value pairs all over the place in libraries. And like, you can—they don’t need a type. There are lots of objects that are passed around that just have conventional shapes and they don’t need a type. If the motivation for the proposal is to cause an MDN page to be created, we can do that without adding something to the language. Like, it’s an open project and they are reasonable people, if we think that would be something important to do, they take PRs. I just don’t think that, like, "this is a shape that shows up a lot" is on its own a reason to add something to the language.

DLM: Okay. I want to say, you asked for a 10-minute warning. This is the last 10 minutes in the timebox but I think this is an important conversation to finish.

SFC: I just wanted to note I am not saying this is for any shape, but it is for objects that represent nouns that represent actual things. Because nouns, actual things can be passed across libraries, can be used for interchange or JSON formatting. And they have the methods to construct them to get the pieces of them. And so it’s not just any shape. For example, option bags are not actual nouns. They are basically a way to have a variety of arguments. This is an actual noun. And I see that that is a different class. It is a different class.

OFR: Yeah. This is a reply to this question of whether it should have ToNumber, and it was already mentioned ToNumber will not be precise here. So it will truncate or round. The domain of the amount is way bigger than number and BigInt. There’s not a representative numbers in here. The main motivation is to interchange these amounts and do thing with them, do something new, then I think it absolutely needs a plus on it. Otherwise, you can’t do anything with it. And if we say, no, this doesn’t need arithmetic, then I don’t see the value of having ToNumber method or alternatively, say, like, okay. The value of this is just a number. That’s T if we say that’s enough for interchange, which is make the values not the number and numeric type.

SFC: If the if numerics are just a number, like, this is—then we should basically be—you know `Number.Amount` that contains a Number and a `BigInt.Amount` that contains a Bigint, and then more like primordials adding that have a similar shape. As opposed to a single primordial that covers all the use cases inside one. I don’t know if that’s a direction that anyone would prefer that we explore. But yeah. That’s sort of how I see it. Like, if it contains a number, it should say so.

BAN: WH, would you like us to spend a few minutes talking about the changes to significant digits we have been making?

WH: I couldn't understand you.

BAN: Given we are close to the end of the timebox, would you like us to spend the last 5 minutes talking about the changes to significant digits that we have been making based on your feedback from Tuesday?

WH: Yes.

BAN: Okay. Probably NRO is the person who can address this most directly. Over to you.

NRO: So there was some discussion on Monday about how the resolving to significant digits, not working. There are requests out, one to suggest removing the accessor and say amount and only use construction digits and the other to change significant digits to work. Compute the significant digit from fraction digits. This is easy to do for numbers that are not zero. There’s just a form(?) for that, which is what Intl does. It’s more difficult for zero because technically talking about the number of significant digits of zero is just like not a well-defined statement. We need to pick an answer there. The request is the answer that you are speaking of, if you have a bunch of zeros and a fractional zeros, then the number is that digits is 1 + the number of fractional zeros and that matches how Intl behaves. That is consistency within the language. Applying this formal to zeros that have no fractional digits can yield negative numbers with no significant digits which is something that makes even less sense. So the formula is capped to give at least one, which means something like zero will be—it’s like 0 and E3. Zero times a thousand. The other thing one significant digit, the zero of the order of the thousandth. When you have small things like 0.000, so we could say the thing also only has one significant digit, with 0, for alignment within intl, we count from the units and go to the right. Sort of like 4 or 5 significant digits.

NRO: Yeah. I guess we would like to go ahead with this. We get a potential approach being seen 0 has one significant digit, even though it doesn’t align with what intl already does. Are there opinions here? Thank you, WH for reviewing this request this quickly, by the way.

WH: Yes. Either approach sounds good to me. So either we can entirely remove the *significantDigits* getter, or, if we do provide the getter, then computing them in the way that you described is the way to do it and aligns with Intl.

DLM: MM has a topic. There’s time this afternoon, later today, if you want to request another continuation. Go to the queue for MM.

MM: I want to make a quick remark. We do have duck-typing of other things in the language. And in particular, iterable, iterator and, iterator result are duck-typed. Iterator also has an iterator prototype that has helper method, but iterators are still recognized based on their duck typing. And iterable and iteration result are only duck typed. Those provide some interesting precedents for recognizing something based just on the duck type and maybe also providing helpers and even prototype which are optional. That’s it.

NRO: There is an issue for that, If you want to comment there, if you have a preference.

RCH: All right. Let’s see. `Object.entry` and `Object.fromEntires` is a case where we didn’t create a KeyValuePair primitive, it's just a two element array. It’s highly precedented.

### Speaker's Summary of Key Points

* Discussed and proposed solutions for V8 concerns and WH concerns re: sig digits

### Conclusion

* Continuation requested

## Increase limits on Intl MV

Presenter: Shane F Carr (SFC)

* [PR](https://github.com/tc39/ecma402/pull/1022)
* [slides](https://docs.google.com/presentation/d/1V1BC6PtJ7-q6zVvsgKt9dcaLmIeeLnE3s8DwP4KOl7Q/edit?slide=id.p#slide=id.p)

SFC: All right, so I want to present this pull request that is linked from the agenda. I want to first give a little bit of background of what this pull request and explain the current shape and alternatives to it. Intl mathematical value, what is it? It’s used in Intl NumberFormat as a way to represent the different types that Intl NumberFormat is capable of formatting. It’s a mathematical value plus four special values, negative zero, NaN, positive infinity and negative infinity. Create it from the number or BigInt or the string. Do it from the string it’s string numeric literal grammar. We had in the spec of Intl format V 3 that has been around for a couple of years now. That is what Intl mathematical value is. You may have also seen the concept referenced in the amount proposal but this pull request that I have to discuss today applies to Intl mathematical value as it currently stands in the ECMA402 specification and although this discussion could have implications for amount, that’s not what I’m currently presenting. I’m currently presenting this in the context of ECMA402. Let’s talk about Intl mathematical values that are created from strings. So prior to Intl NumberFormat V 3 strings were parsed as numbers and effectively a limit in terms of the numbers and significant digits and the exponent, because we didn’t support this ability to basically do formatting of string numbers. Currently Intl mathematical values created from strings only represent values that are also representable as numbers without rounding them.

SFC: So this is the current line. Basically what we do is take the string and convert it to the number. If the number is infinity or zero, then we retain it as infinity or zero. If it doesn’t parse through infinity or zero, we retain the string including the additional digits that the string has beyond the capacity of number. So this in effect limits the exponent and then the formatting of Intl NumberFormat limits the number of significant digits. Just want to be clear that this limit applies to Intl mathematical values parse and strings. Doesn’t apply to BigInt. With BigInt we support formatting of BigInt that are much larger than the capacity of the string. So just to get some examples, these are all strings. Just want to emphasize that again. If you have the string of 1e, 308 that parses to mathematical value 1e308. This is close to `Number.maxValue`. `Number.maxValue` is not exactly 1e308, it’s 1.7 something. As a string, as the string value for Intl mathematical value, we retain the value, the mathematical value as in the string. However, 2e308 exceeds the capacity of the Intl mathematical value—sorry, exceeds the limit of what a number can contain, and therefore rounds to positive infinity. The same thing happens at the bottom if you go to the lower range of exponents. And the longest value that we can represent would be you can represent as many significant digits as you want as long as the numeric value is less than 2 to the power of 308 accept that of course the least significant digits are not able to be formats of mathematical value that in effect gives the limit to the number of significant digits. Problems with the status quo that WH mentioned is the limits are not enough to handle a future Decimal128 proposal and there’s a concern that increasing the limits could be considered a breaking change. The other problem that I added is that the string limits are easy to check if you have the number parsing library, but not trivial to check if you’re just looking at the number as a string, as a list of digits. You have to first see if you can project it into Number space. So checking the limit is not as trivial as it could be. So the currently proposed solution in the pull request is to change the limit on the exponents to be between negative 10,000 and positive 10,000. Why did I pick 10,000? Indicates this is an arbitrary choice. I could have picked some other number. I picked 10,000 because it looks very arbitrary. It looks very arbitrary and the significant digits, this is a little bit tricky to understand but reflects Hoi it is implemented in ICU and IC freak and limit is significant to map to the power of 10, that’s also within the range. What this means is that there’s a discrete fixed set of Intl mathematical numbers that are representable that are derived from the strings. Basically in increments of 1 to the minus 10,000, you can add 1 to the minus 10,000 and then get the next discrete Intl MV and you add again 1 to the minus 10,000 and next discrete of MV and do it to the largest mathematical value that is 20,000 nines with the decimal separator in the middle of the 20,000 nines. That’s the largest Intl mathematical value. So we have them in this discrete space. This is easy to enforce the—just checking the number of digits when parsing the string into the mathematical value and it covers the domain of decimal.

SFC: Alternatives: This is arbitrary limits we came up with in the pull request. I’m still largely seeking feedback on those. One alternative is we align to the decimal 128 range. This doesn’t mean that we’re committing to adding decimal 128 to the language. I know that that’s not something that we have consensus on, but we can still use the decimal 128 range as a way to enforce the limits on IntlMV. That’s one option. The second option is use the exponent limit of 10,000 but enforce a smaller significant digit limit that reduces the implementation requirements. Note the current effect of limit is 408 because you can have 308 digits left with the decimal separator and one hundred after the decimal separator. Effective is 408 and make it encoded in the spec as 500. Alternative is no spec-defined limit. I want to point out we discussed this previously during the Intl number 3 proposal we want the limit here. One alternative you could be not to have the spec defined limit and allow arbitrary length strings to be processed that is not an alternative that I prefer. So I’m currently leaning towards an alternative to that is not exactly in the pull request. That’s why on the next slide—actually not the next slide but talk about web compatibility first. Intl NumberFormat V 3 changed this bound and changing it again is likely web-compatible. I want to point out why changing Intl NumberFormat V 3 increase the number of significant digits but didn’t increase the exponent. It is not exactly comparing apples to apples. I do still feel this is likely – that we still feel in ECMA402 this is likely web compatible based on the knowledge of the usage of the API; however, it means I agree with WH it’s better to do it sooner better than later in order to be future proof. I also wanted to discuss on the agenda, I had discussed this idea of spec-defined limits in general. But I will go ahead and spin that off into the separate discussion we can do in Tokyo. I will have this presentation be narrowly focused on the problem that’s before us now, which is this Intl mathematical limits thing.

SFC: I’m sort of seeking two parts of the consensus, one is the limit of Intl MV should be increased in order to future proof for decimal128 and the other is which of the limits should we apply? I also received feedback on the pull request of WH that came in a couple of days ago about some of the language that we could do to make sure that the pull request actually does what it says it does. So I appreciate those reviews and I would like to continue getting feedback in that area. So before we actually merge this, we’ll make sure that the spec is bullet proof and WH will sign off on that. But I want to agree on like what it does. So I’m sort of seeking these two separate points here. That’s the end of my presentation. To the queue.

WH: Clarifying question, the examples you have in the linked description of this are wrong; is that correct? I posted a question about it a few days ago.

SFC: Yeah, I saw your question and, yeah, I’ll go back to my slides. These examples are—

WH: I don’t mean these examples.

SFC: And these examples.

WH: I meant on the page that was linked from the agenda.

SFC: In the pull request description, it’s possible that there is a typo in the description. I haven’t had a chance to verify that or not. But what I’m showing on the slide right here is the intent and I believe is accurate and I’ve double checked these, what’s on the slides right now.

WH: Okay. So that’s good. Now, this slide conflicts with the slide in which you have option 2. So I’m not sure which one takes precedence.

SFC: Yeah, that’s why I’m asking for the two-part consensus. The pull request implements this. It doesn’t implement alternative two. That’s why I’m sort of looking for consensus on one that we want to land a pull request that increases the limits in order to future proof decimal128 and secondarily which is the preferred approach of that? Procedure-wise I feel like we should come back again to this committee with the pull request that implements that we agree with here before we actually approve it. That’s fine. Or we can procedure-wise say that, you know, ECMA402 merge the pull request if the editors agree that it implements the consensus that we agree here sort of in principle.

WH: I don’t understand the motivation for this because this is a mathematical value. Mathematical values can include uncountably large sets of values. A mathematical value can be any real number. So there’s an uncountable infinity of them. So I don’t understand motivation of limiting mathematical values to some number of significant digits. If you do, it’s no longer a mathematical value. Now, this is not to say that I’m advocating for having arbitrarily long digit strings in the implementation, but the thing that’s actually doing display of rounding should be doing that, rather than us limiting the set of the mathematical value.

SFC: Maybe we can go to the queue.

DLM: MM has a clarifying question.

MM: Yes. So I’ve been referring to mathematical values, and I think the rest of us have as denoting real numbers. They do denote real values why they’re mathematical value. The only numbers that are denoted by the mathematical values that any of us have considered for any of these proposals are rationals. So just want to make sure that we’re not implying that any real number can be represented. And that’s it.

EAO: Clarifying question also here. In the presentation here, you’re talking of limits of up to 10,000 significant digits, but the current PR for the spec is actually a limit on fraction digits. Can you clarify which is the intended limit?

SFC: Yeah, the current specification says that the largest magnitude that’s allowed is positive 10,000 or positive 9,999 and the limit on the number of significant digits is effectively enforced by 10,000 fraction digits which means there’s in effect a limit of 20,000 significant digits. So, yes, you’re right, that the spec basically enforces it by capping the number of fraction digits. That is a correct statement.

EAO: So the slides should have all places where you refer to significant digits be replaced with fraction digits, right?

SFC: No, I think an alternative way of stating this would be to say that we truncate the mathematical value to having up to 10,000 fraction digits. That’s probably actually a more clear way of stating this. I’m stating it in terms of significant digits, but you’re correct that stating it in terms of fraction digits would maybe make the slide more clear.

DLM: You had another topic EAO, unless you covered it.

EAO: Yes, one alternative came to me while you were presenting is that given that Intl mathematical values can also be constructed from BigInt that do not have a spec mandated upper limit for which current implementations are fine for formatting, many values that are much higher than I think even proposed here, would it therefore possibly make sense to apply a limit only to the number of fraction digits that are accepted for formatting because then we would have effectively the same limit apply to all Intl mathematical values and not have different limits depending on from what type the value was constructed?

SFC: So maybe we can go back, and I think I would like to discuss this—WH, I’m not entirely sure if the statement you made was an issue with the pull request. I will just note that we’re using the concept of the mathematical value to represent the numeric call of the string, but it is an effect a string number that is being formatted through Intl NumberFormat and I don’t see anything like—I don’t see why it would be contrary to the design of, why it doesn’t work in order that we use mathematical value and then just say, well, it’s a mathematical value, but it is only defined, we’re only using mathematical values within this certain domain. Basically what we’re doing. I don’t understand why that’s a problem.

WH: It’s a nomenclature problem. You can do that but it’d no longer be a mathematical value. Having said that, I’m fine with the pull request as it is once you fix the crash-on-zeroes bug. I would not be in favor of limiting the significant digits to 500 but I’m okay with limiting decimal places to be between exponents of +10,000 and -10,000 which is what you had on the previous slide. This one looks good.

EAO: Just noting that clearly a part of the conflict here is the naming of the value that only exists in processing. Maybe as was discussed yesterday or Monday, we should consider renaming this maybe in this context of something `Intl.FormattableNumericalValue` or something else that is more clearly identified that we are not intending for this to be a general practice representation for possible numbers in the usage that we could for Intl.NumberFormat.

DLM: EAO in the queue for support for consensus for item Number 1.

SFC: I will go ahead and no one else in the queue and go back here. I would like consensus on point 1.

WH: I support that. I initiated this.

DLM: Okay. So I don’t if you want to speak mark. There’s a response from mark.

MM: No need to speak.

DLM: See if there’s any dissenting voices and then we can move on to Number 2.

SFC: Sure.

DLM: Any dissenting voices to Part 1?

DLM: Number 2 we should be clear on exactly what you’re proposing.

SFC: So I mean, the space of what the actual limits are is infinite. I pulled a few things out of the infinite space to put on the slide. I was wondering WH if you can sort of—if you can elaborate on what your concern is with the significant digit limit of 500.

WH: This goes outside of the scope of this proposal. We’re discussing just what mathematical value means here. It seems to me like you’re conflating a mathematical value with how it’s used downstream. So we’d need to understand how it’s used—you haven’t provided enough information as of now to usefully discuss that topic.

MM: So I didn’t catch what the motivation was for the smaller range of the exponent. The previous slide that WH likes also makes more sense to me or I don’t see, it certainly covers more and if there’s no disadvantage to it, why even consider a small range? I’m sorry. Smaller significant digit. I got it backwards. But in either case, I don’t understand what the motivation is for limiting.

SFC: Yeah, I mean, the motivation is simply that implementations can do something more efficient, for example, with the limit of 500, this can be represented in 250 bytes if you use a byte-encoded decimal representation that is small enough that implementations could choose to not use heap memory in order to represent this. They could represent it all in stack memory. So that would be one reason why a limit of significant digit of 500 is effective and if we go with 20,000 used heap memory in order to represent one of these.

MM: So we got many implementers in a room, do any of the implementers care about the implementability of the larger units, or, Shane, are you basing this on feedback from actual implementation?

SFC: Well, I’m also an implementer here and I’ve implemented this. And so I’m just saying that it opens up doors to like reduce the requirements used of heap memory here. And I can say that because the rule of thumb that most of the Intl libraries have used is that anything that is—we don’t want to exceed a certain number of bytes of space on the stack and that number usually hovers around a kilobyte of space, something less than a kilobyte of space on the stack is something that we’re okay with. More than that is something that we want to have the on the allocated. There’s various reasons to find that limit to be appropriate. There starts to be performance issues if you have too big of a stack size of an object because you have to copy it from function scope to function scope than have a pointer. If the object is small enough, the call stack for the object if you had to copy it around is negligible.

MM: So let me just say I agree with that with regard to representing on the stack. What I didn’t know that you just clarified is that implementations are actually using the stack and not just hypothetical.

SFC: As of right now, there’s like an overflow to heap thing that’s going on. I don’t believe that the implementations are currently using stack for all values of the current – because currently there’s an effective limit of 408 and I believe somewhere around 64 digits before the implementation is used to overflow. But that’s not necessarily a decision that is set in stone. Having the limit of 500 keeps the door open for implementation if they want to use this optimization and having the 20 K limit kind of closes the door.

MM: I’m not an implementer of this obviously. The spilling to the heap especially since it’s already implemented seems like a small cost to maintain in order to avoid observable limits. You know, strings are obviously on the heap and have limits that are so large that people essentially don’t run into them without running out of heap. Since you’ve already got the spilling to the heap for larger sizes, those seem like the better Solution.

SFC: Yeah, I mean, I think the spilling to the heap is already implemented. It’s more of a concern of future privy making it implementable without having to overflow to the heap. For example, this is over flowing to the heap is the only thing in all of IC FRIC and formatting that uses heap. Everything else is implemented without the library, without CC1 the all Kay Tory as long as you have the interface for writing to the string where interface can accept bytes and write them to the string. Besides that, this is the only other place where we use heap memory and, yeah, I don’t see much other alternative other than using heap memory here. So it basically locks in implementation to having the allocator be required. Maybe JS engines already require the allocator. In the narrow JS context, maybe this is not actually a problem, because it’s hard to implement JS without using an allocator. Is there anyone else on the queue?

WH: Okay. Just to make it clear, BigInt can be converted to this type, right?

SFC: To Intl mathematical value, yes. But the limits don’t apply to BigInt. You’re making an absolutely correct observation because BigInts are also formattable, it means that implementation that supports BigInts does need to overflow to the heap in order to format them.

WH: Well, it’s worse than that. If you accept alternative 2, then you would round BigInts when you format?

SFC: Only provides strings. Everything in this presentation applies to strings. And this is also a comment that EAO gave earlier and I added four strings to almost every slide. I didn’t add it to this slide. But it’s limit exponent of strings, of strings, of strings 10 K exponent limit and smaller significant digit for strings. Nothing here applies to BigInts.

WH: It’s still not okay because if you were to provide a BigInt and round it through here, it should behave the same and it wouldn’t.

SFC: It definitely does currently do that. If you take the BigInt and pass it to the string and pass to the Intl format never behave the same if you pass it to BigInt directly.

WH: What changes?

SFC: It gets processed as a string. It’s never been the case that the string valueOf the BigInt behaves the same as the BigInt itself when you pass it to NumberFormat. It’s never been the case.

WH: What visibly changes?

SFC: It gets interpreted as the string. Prior to Intl number format 3 you would choose the closest number value to the BigInt string after NumberFormat 3 and you retain significant digits and rounds to infinity and zero. If it exceeds the capacity of a number.

WH: Okay. How does the value change, or does it change?

SFC: The least significant digits could be truncated and if the value is too big, it would get rounded to infinity. It’s been this way for a long time.

WH: I’m not okay with alternative 2. I am okay with the alternative on the previous slide.

SFC: All right. I’m happy to say that we have consensus on this alternative and I may continue to consult with WH outside if there’s another limit that we agree with, I will come back at the next meeting. Otherwise, we’ll assume that we proceed with this currently proposed solution which is the pull request. So I’d like consensus on that.

MM: I’ll just express support for what’s on this slide.

SFC: Okay. Cool. I would like people to pick an alternative and support it. Let’s say the alternative on the slide is the one that we achieve consensus for.

DLM: We only asked for consensus for part 1. We should probably explicitly ask for—

SFC: That’s what I’m asking for now. On Part 2, I’m asking for consensus on the currently proposed solution which is the one in the pull request on this slide, which is the one on this slide. Let’s say the one on this slide since the pull request might have bugs. The one on this slide that is the intent of the pull request. That’s what I’m seeking consensus on now.

DLM: We have support of MM and WH.

CDA: Just for the notes there’s a few references to this slide and what’s on this slide. Can you just very quickly describe—

SFC: The slide entitled currently proposed solution is the what we’re seeking consensus in terms of the concrete implementation, the concrete limits that is Part 2 of the consensus that we’re seeking. Part 1 of the consensus is do we want to increase the limits? That was agreed to. Part 2 is which limits we want to apply. Consensus slide currently proposed solution are the limits we’re seeking to apply.

DLM: Support from WH and great to hear support from one other person.

CDA: Support from MM as well.

DLM: EAO on the queue for support is three. The absence of any opposition, I think you have consensus. Would you like to do a summary and conclusion for the notes at this time or do it later?

### Speaker's Summary of Key Points

I was seeking a two-part consensus. The first part is that we should increase the limit of Intl mathematical value and the other is applying specifically the limit that is presented on the slide titled currently proposed solution.

### Conclusion

Both of those parts achieved consensus.

## Continuation: Amount for Stage 2 (again)

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-amount)
* [slides](https://docs.google.com/presentation/d/1cDQBcMzSAht9jZiuaMKAEIDlPmlSmjeBJ-sw23AySWI/edit?slide=id.g37deebb6a10_2_54#slide=id.g37deebb6a10_2_54)

BAN: I wanted to start with a quick example that Jesse whipped up. It is possible to do arithmetic on amounts. And this is the including the two numeric methods. It is possible to do arithmetic on amounts but it is rather bulky. The main thing is it seems like the two open questions that are active on matrix and elsewhere are naming and whether or not we should include the numeric conversion methods so naming amount versus something other than amount or some sort of qualified amount. And then the question of whether or not the numerical conversion methods are something we want to include or not include. And I think maybe the most useful thing is—let me load up the queue, if folks want to get on the queue for the questions.

NRO: For the Google team, the suggestion of maybe change the name does it actually move the needle when it talks to how the API may be used or just misinterpret that? It seems like the preference for the amount, calling this amount from other delegates. If changing the name is not the rest of the problem, we should stick with this name.

SFC: I don’t know if OFR has a more authoritative answer to that question. I’m champion of the amount proposal and from wearing the hat as like representative from Google internationalization team I’m happy with the name Amount, but I’m not really confident saying one way or another whether other delegates from Google feel the same way if we address the other concerns of API design.

DLM: For my side, I think amount is a better name than the options that were presented in the slides.

OFR: I think I don’t have an answer at this point and we will just have to—I don’t have a better answer than SFC.

MM: Can you go to the duck-typing slide. So I understand what is on the slide, both unit and fraction digits could be non-configurable and non-data-writing properties and as KG said the duck-typing approach would be silly to prior the testing for that as part of the duck type. But you’re not proposing that these be a method value such that on recognition you would invoke them rather than just reading them; is that correct?

BAN: Yes.

MM: Okay. Now, could you go back to the protocol slide, the full API slide.

BAN: Can I show the full API slide from the previous presentation, but that is the one that’s still containing the numeric conversion.

MM: That’s the one that I want to see, the full API slide.

BAN: Give me a second to get that loaded up.

BAN: This is the version from Monday.

MM: So if we went for the duck-typing approach, let’s say the mixed duck-typing approach which is what we do for iterators such that we did provide a prototype that had helpers on it, which of these helpers would still be motivated enough in your opinion, the opinion of the advocates to include in the language?

BAN: All right. This question to make sure that I don’t say things that are not correct, I’d like to punt to NRO on this one since he’s been working with it most recently.

NRO: Sorry for mistyping, I have opinions on the queue. Personal opinion here. What will be helpful is the conversion between fractions and significant digits just to make sure if this is a plain object that has fractions and significant digits you could write where you started where it makes sense together and format it, you are working with one or the other. It’s helpful if the object defines one, there is an easy way to get the other. For all the rest, probably nothing.

MM: Okay. And for that functionality, having it be functions that took a thing recognized by duck-typing to be the amount as an argument rather than inheriting method should be perfectly fine for that functionality; is that correct?

NRO: Yeah, we need to figure out where to put it, though.

MM: Okay. And that can come later just like iterator helper came after iterators had been duck-typed and standard to be duck-typed for a long time, and then various kinds of helpers were explored by libraries and established to be useful before they were moved into the language. The same process could apply to the ones here that if you are motivated enough to include in the language; is that correct?

NRO: My answer is probably yes but I see other people on the queue disagree.

WH: My answer to MM's query is that this wouldn’t work because an `Amount` is not like a tuple where you can combine arbitrary pairs of objects and that generally works. An essential part of an `Amount` is the invariants that it maintains and duck-typing it would violate those invariants.

MM: Good answer. Thanks.

KG: It’s true that we did later retrofit iterator to be a proper prototype with its own values and that worked out okay. But I think the situation there is kind of not great, because in the intervening years, users could make manual iterators that did not inherit from IteratorPrototype and that leads to confusion where if you get an iterator from somewhere you can’t trust it will be from the iterator prototype. We have the convenience method for fixing that and made the constructor available and easy to derive from it going forward to minimize the problem. But that situation isn’t good. If we intend to provide an Amount with various helper methods on the prototype in the future, it would be best to do that right away.

MM: So Kevin, I understand that, good, good point. If the functionality that we expect helpers to provide could as easily be provided by helper functions with amounts as arguments or the helper functions recognize the amounts by the same duck-typing rules, that counter example would not apply, correct?

KG: Yes, yes, definitely agreed. We can provide static methods that manipulate values and not run into this problem.

MM: Okay. So the remaining objection to duck-typing would be WH’s?

KG: Well, and—I think that static methods that manipulate values are sometimes suitable. But depending on what those methods are and where these instances are likely to be used, that can be more awkward than prototype methods. So I think we should consider what functionality we expect to provide in the future and if we really do expect to provide a bunch of helper methods that aren’t just like reading properties or whatever, then those things would probably best be done on a class. That is the reason to have a class, if we’re doing something that is more than just having a bag of values.

MM: But for the functionality from this slide that the advocates said would still be considered useful if we were doing duck-typing, with that functionality doing them as functions rather than methods seems perfectly fine, do you agree?

KG: Yes. In fact, e.g. toLocaleString is a function that basically already exists as a static function and just happens to also be a prototype method here.

MM: Okay, thank you.

DLM: On the queue we have JHD.

JHD: I will state a much stronger position than KG and I don’t agree to the thing he just agreed to. There’s the few problems. Iterator was the failure case and huge failure we didn’t put iterator as the global in the first place and we got lucky we were able to do it because there’s a lot of web compat risk with something with the common name and trying to add it later. We squeaked by just barely with iterator. So I would say stronger than KG and ever add the helpers must be added right away as a global, not as a global but must be put somewhere immediately so we kind of stake a claim on the place that we want to put those helpers in the future. And then additionally, prototype methods versus static methods, we need these things to look at internal slots and if you want them to be arguments to functions that will be a need for more static methods that look at internal slots on the argument. That creates a bunch of complexity.

KG: We already committed to not doing that. We have said things that consume these won’t look at internal slots.

JHD: Something else that consumes it perhaps. But if we’re trying to add helpers for it, like, like the iterator helpers, for example, I think they should be looking at the internal slots and if they’re on the prototype, we don’t have to do anything weird there. But if they’re not, because they can look at the receiver and the practical memory and transparency concerns are satisfied there.

KG: If they’re not on the prototype, they consume it the same way anything else would assume it. They can use the public interface. There's no reason to use internal slots.

JHD: I don’t agree with that.

MM: If there’s not a compelling reason to look at internal slots which it sounds just now that there is not, I certainly prefer solutions that do not introduce new internal slots for all the—

JHD: I wasn’t aware, I guess, of what you’re describing as a decision. But I think that they should be using internal slots. The whole point is like of having an amount, having a reaffirmed thing is it can’t be made to not be the reified thing, and other things can’t pretend to be the reified thing and that’s what internal slots are for.

MM: The equivalent of the class instance—I see, okay. I retract what I was about to say.

DLM: We should go to the queue. I should say we have four minutes left. So topic was warning from Kris about time and then there’s the clarifying question from WH.

WH: As far as I can tell, we haven't reached consensus on not using internal slots.

JHD: Certainly hadn’t heard any.

KG: We had consensus on, or I understood we had consensus on, not using the internal slots when consuming an amount as an argument to another function. I don’t think we have discussed what to do for the prototype methods.

WH: I don’t think we reached consensus on that either, because that also creates the duck-typing problem of broken invariants.

KG: Well, we talked about that in the past, and no one had objected and then when it was presented today, we said that’s what we were doing. If you want to revisit that, we can revisit that. This is still not Stage 2. But generally I want things consumed by the public interface.

MM: I would insist on that because of the practical membrane transparency issues. Practical membrane transparency issues doesn’t argue against internal slot access by inherited built-in methods but strongly argue against it for amounts as arguments for things.

JHD: But if those things are helper functions that are just for working with amount and those things thus belong attached to amount or `amount.prototype`, then that becomes a very different discussion.

NRO: So I don’t remember the first time this was presented, it had a bunch other things and had conversion and kilometre and how many metres or miles is that to present to the user basically? And then a big proposals and extracted the system. I think that part is now pushed to part units. Argument on proposal but if you have an amount plus, it would be great to have on the prototype here even if they’re not currently part of this. So if we still want to do that for the position purposes to provide your conversion to it, we need to figure out where to put them if we don’t have an amount prototype.

SFC: There’s definitely been—I don’t think it’s in the current proposal, but I would definitely like to see prototype functions on other types like number and potential feature decimal to create an amount to basically associate them with the precision or unit. If they return something, they should ideally return a named object and not just like a bag of options, because then you you can call the chain number dot with significant digits or with unit and dot to locale string. That’s the highly ergonomic. Not clear what is happening there. I don’t think that we should have a method that just returns an unnamed—an object without a prototype.

JRL: Sorry, I have been doing other P0 work and haven’t fully followed the conversation. The topic that was just discussed between KG and MM and JHD, I think the precedent that was being referred here if you take the argument and the argument is amount, we expect to get the values off the argument via the public interface. If you have the amount class and you are invoking the method on the amount class, then it’s fine for your methods on the amount to access the this context internal slots. So if you’re operating on this, you can get the slots. If you’re operating on the argument of the amount passed through the method, you operate through the public APIs. Is there anything else to discuss with that? We decided all that with the set methods.

MM: I’m happy with that position. If the internal slots don’t serve the purpose, in other words, if it there’s no cost to just doing everything with the public API, it can still be branded so—well, sorry, that was the—if it can all be done with the public API, it can still be effectively instance of the class and inheriting from prototype, that would be preferable, but, yeah, if the internal slots are only accessed by built-ins on this, I’m fine with that.

KG: WH’s point is that the class maintains invariants and the only way for consumers to know, if the consumers need to know those invariants hold, is for there to be branding and internal slots.

DLM: I have to interrupt, we’re at time. Three points of order. Basically the question is whether we want to have another continuation for this topic or if we’re happy with—

BAN: I think maybe the thing to do is just to right now really quickly list the points that might be potential blockers.

SFC: We don’t have time for that. I think we should have the continuation this afternoon to do that.

BAN: Okay.

CDA: I did mention in the point of order but I captured the queue from Monday, and then completely forgot to paste them in here. Some of them may have been covered as NRO pointed out, but I will add them in. Please remind me in case I forget again. I will add them in later this afternoon and if we skip over them because we covered it sufficiently, it’s fine. They’re all from SFC. Shall we break for lunch?

## Continuation: Update on proposal-module-global

Presenter: Kris Kowal (KKL)

* [proposal](https://github.com/endojs/proposal-module-global)
* [slides](https://github.com/endojs/proposal-module-global/blob/main/slides/2025-09-stage1-update.pdf)

KKL: All right. This is a continuation of the Q & A for proposal module global wherein we proposed to add a mechanism nominally for the moment the design we are entertaining is compartment as has been seen before with the additions from the new global proposal like the keys property that allows the constructor or the compartment to decide what properties of the host global to copy into the new compartment. And then the surrounding mechanisms for importing modules into the compartment. Does anybody have questions they wish to add to the queue or portions of the queue from carryover?

CDA: I’m repopulating the queue. We were on when we stopped KM’s topic for national line security boundary and reply in the queue that I’m putting in now from Matthew. Is he Here?

MAH: I’m here. I’m trying to page back to what—block analogy. KM, do you mind restating what your magic line concern was.

KM: We had a lot of experience internally on it. This is source code not necessarily in JS, but I don’t imagine the problems substantially different once you get to the scale of things, you know, we’re talking about, for large applications where we try to create a boundary, but the boundary is known at creation time to be somewhat porous and in the end, it ends up not really being—it ends up being enormously expensive to maintain and not super effective anyway. People trying to get around it are perfectly able to. In this case, the example case would be hard is you have the page with, I don’t know, tens or hundreds of thousands of dependencies, each independent code, each in their own compartment and each talking to each other. You don’t know how they transfer data through each other to other dependencies. They may not directly be able to do it but might be code paths and slip data from not the direct dependency through to themselves. If you look hard enough. So if that isn’t effective, this is a lot of work for the engine, and I’m unconvinced, I guess, at this point that it would actually serve—how do we validate for ourselves that this is serving a large enough pool of people to be worthwhile without defining what large enough is, but how do we even prove to ourselves that that’s the case?

MAH: Right. So what I wanted to say there is this feels like saying we shouldn’t try security because security is hard. What compartment is doing and when coupled with lock down is providing the foundation for being able to write defensive code. Today basically if you have the package, it’s almost impossible to write your code—if you have a library, it’s almost impossible to write it defensively because you can’t really rely on the environment not changing from under you through some weird pollution. Whether that’s the pollution of the globalThis or whether that’s the pollution of the intrinsics. Pollution of the globalThis is handled by compartments. Pollution by the intrinsics is handled by lockdown. So really what these two together do is provide a solid foundation so that now you can start writing code as you really intended saying that when you do my array instance .push, it is the push that is executed. When I refer to fetch, it’s fetch from the system and not whatever thing polluted the global environments. So, of course, alone it doesn’t prevent a malicious extension from abusing the access it already has to—malicious package from the access it will have from existing API or abusing the access it has to another package and try to coerce that package that is potentially badly written into doing something that it shouldn’t be doing. But it enables those package to be written in the future defensively so that those things don’t happen. What I wanted to say here is it seems we want to say that let’s not do this and keep all the doors open because some people might not lock their doors or so on. Right now it’s basically unable to install the lock on the package and write it defensively.

KKL: Thank you. The phrase I keep coming back to, it is not the aim to solve all security problems, it is our aim to create a foundation where it becomes possible to solve this Problem.

MAH: And I want to be clear here. Compartment on its own even without lockdown does reduce the blast radius already. Lockdown then you have malicious package that can try to escape the compartments fairly easily if they’re aware of compartments. Lockdown and with the repairs we talk about so that, for example, you can’t use `function.prototype.constructor` to escape your compartments provides you next level of reducing the blast radius so that you cannot willy-nilly modify the global execution environment and now you have to actually mount attacks if you managed to get a hold of a malicious—manage to make the package malicious.

KKL: And to answer the point how do we vet this, we’ve had this in production for four years so far. It’s our intention to solicit feedback from as many people as possible and get this into production in advance of getting this into the standard. But not having compartments in the virtual underlying virtual machine creates friction that makes it somewhat difficult to adopt. It is our hope to make progress on that here.

MM: Just like to add that in advancing proposals in front of a committee and a constraint that we are trying to satisfy that I think the committee would insist on even if we weren’t is each individual proposal should be minimal necessary to enable the rest of the solution to being in user code or in other proposals but where the proposal itself does enable the problem to be solved versus the imaginal line constraint is we have got to solve the entire problem all together in one proposal. And if that proposal is too complicated, then it simply cannot advance and solving the entire security problem in one proposal is just kind of a crazy requirement. So as KKL said, we have demonstrated by our own production use and metamask demonstrated by their own production use, moddable granted with a much more constrained system but also using this in production is that this is a foundation that can be used to write defensive code that holds up in very heavy security reviews which we will point at and to in some cases to formal analysis which we’ll also point out, so it is an enabler. I also wanted to expand on the topic which is the enabler only starts to defend against malice when combined with harden and lockdown, but that doesn’t mean the harden and lockdown again should be part of this proposal or even necessarily that they should be proposals in front of the committee. I still prefer them to be proposals that go in front of the committee but not part of this proposal, and if they don’t advance, they can be done fairly well in user code like our shim does whereas compartments cannot be done well in user code for all the reasons that KKL has mentioned. So the only critical enabler to solve the rest of the security problem in user code is compartments themselves.

USA: Next we have an older topic from JFL that is new global and ShadowRealm better reconciled and one solution not two. End of message.

KKL: This is an interesting one. There’s an issue on GitHub where we talk about comparing and contrast of ShadowRealm and compartment. And I am not satisfied with our answers, but the shape of them up to this point is that while they do address some of the same cases, they do not address them in the same way with and not all of them—essentially depending on how you’re using this, depending on how you’re using ShadowRealm and compartment, a lot of the cases where ShadowRealm is useful can be subsumed by compartment. It is only at the point where you are capturing something that requires the ability to own its intrinsics at which you need to retreat to the ShadowRealm. You do so unwillingly in the face of the decrease in performance that comes with having a full callable boundary membrane. And to that end, most of the problem that can be solved for supply chain attack resistance is exclusively the purview of compartments but doesn’t of ShadowRealm for plug ins where third party Mr. ins need to own their realm. Neither of these are—

USA: Did we lose KKL?

MAH: I had an answer that was—I will continue until KKL comes back. So as KKL was mentioning, the use cases are different. They operate at different levels. And I was contrasting that the other time by we have containers and we have VMs. Sure you can use a VM for doing some of the use cases that containers are, by why would you? It’s a lot more heavy machinery to do that. In this case, I would argue that ShadowRealm is not suitable for isolating your package dependencies. It is way too heavy weight for that. The same way that I saw a topic that is now removed like whether iframes and post message could be used, definitely not. That’s even worse. That’s asynchronous boundary. You cannot use those heavy complicated isolation mechanisms to do—to isolate lightweight dependencies like your packages that your application relies on. So simply different use cases. There are use cases for ShadowRealm, like, as KKL was mentioning, plug ins and things like that where you want to run more full application in its own environment and that application is a little bit more freedom to do what it wants such as mutating the global environment if it so desires.

USA: All right. Do we have KKL back?

KKL: Yeah. I have reauthenticated.

USA: Would you like to add further, or should we move along the queue?

KKL: I think Matthew addressed it. I said everything.

USA: Let’s move on to mark.

MM: So I also wanted to add that the question of efficiency across the callable boundary came up and some people were I think not taking it seriously enough. Callable boundary is only even a candidate for doing linkage of existing packages with a near membrane on both sides of the callable boundary. The near membrane necessarily involves proxies. Every implementation, every JITed implementation especially deoptimizes when it hits proxies. I have own one academic paper for a hypothetical language having a JITed implementation that JITs through proxies. I would be astonished if any of the JITed implementation would consider across JITed across proxies and JITed across the callable boundary is just not going to happen. I think that the efficiency argument for linking across the callable boundary is just fatal. The other thing is that if we could only pick one, I think as we have established, compartments solve a lot that ShadowRealms don’t. ShadowRealms solve one isolated problem that compartments don’t, but they’re an isolated problem at the heart of what Kevin presented which is avoiding global coordination mechanisms, but if we had compartments without ShadowRealms for the browser, the cases that Kevin is concerned about, we still have multiple same origin realms through same origin iframes. And that plus compartments within each of those is not a bad starting point for addressing the remaining problems if we had to give up on ShadowRealms.

KKL: KM, your feedback had two prongs to it, and it was essentially that the value versus the cost. And I think we have spoken entirely about the value and inadequately against the cost. The olive branch I’m hoping to extend is that we wish to design the compartment going forward in order to minimize the cost to implementers on the web in particular where the entanglement with the global are precarious. It is possible that we might be able to – in any case, I would like to invite you to specifically come and educate us on all of the edge cases so we can address them on the case-by-case basis provided that we have convinced folks here that it’s worth the value—that the endeavour is worth the value, which I take as given personally.

USA: So we have a reply that says we do some JITed but it’s hard because of the validation requirements. And next on the queue we have Matthew.

MAH: Highlighting the cost of proxies is one of them, but there is bunch of other costs in the membrane that you need to put on top of the callable boundary and you need WeakMaps and a bunch allocated and every time you go across the membrane and that means a lot when you have basically a bunch of packages sharing data with each other. So is it possible, technically possible? I’m sure. It would be probably memory prohibitive and most likely potentially primitive as well.

MM: And you would have to JIT across the callable boundary in addition to both sides of the membrane. Now, I just can’t imagine serious implementations actually doing that. Always deopt this stuff to some degree.

USA: All right. Moving on.

DLM: Yes. So we have heard a bit from KM and OLI about implementation concerns about complexity and performance. I should say that SpiderMonkey shares the concerns. It is difficult to get into specifics. There wasn’t slides beforehand. I’m not familiar with the compartment’s proposal. These are things we will look into more detail once it has been updated. I think the idea for us having multiple globals in the same realm is scary from the correctness point of view. And I guess that’s my point, I just don’t want KM and OLI to speak alone. We share the same concerns.

KKL: Thank you DLM. We come to this conversation with that understanding.

MAH: It’s actually something I would like to understand a little bit more. I mean, really what compartment and global does is introducing a new global scope not—sure, there are global objects there, but I suspect those global objects don’t really need any of the or much of the special treatment that the global object of the realm has. So I’d like to understand a little bit more why all the engine implementers seem to think that there is this complexity associated to this, because it’s mostly introducing a new global scope.

KKL: I think I can actually for the purposes of making sure that the vendors—that the delegates representing the browser vendors have been heard. One detail that I know has been mentioned is that although in principle the global object and the base of the execution context are different things and that the end principle a lot of algorithms should be looking to the execution context for certain things, it’s as an expedient they sometimes look to the global object instead. Just because it’s the nature of having maintained the browser over decades long development of the web, the incidental reliability of the global context in global is reliable enough there are unknown corners of the code base where accidental dependence on the invariant works. I’m sensitive to this having failed to compiled the browser many times in the past just to be clear.

MAH: That’s the correct concern at least at this point.

USA: All right. If you like to speak further. A reply by KM.

KM: Some ways maybe the example I’m to talk about with the window proxy is similar, like, might have solved some of the problems already, but there were also huge pains with the window proxy in trying to like adopt that when that became a thing, I guess, at some point. It sort of predates me. My understanding is that there were all kinds of problems with the window proxy and like it caused breakages all over the place trying to adopt it. May not be an issue here but dealing with the scopes and resolving it and having the correct one to resolve in any particular case is somewhat difficult and I believe has had all kinds of performance characteristic drop off in ways we didn’t expect and have problems. So, you know, I would expect—I would not be surprised, I guess I should say, if in the—if this proposal moves forward, you know, there will be some feedback that comes along of like just around in this area of like these things make it hard to maintain existing code’s performance. So I mean, it’s like the forewarning, I guess. It doesn’t necessarily block it but I expect there will be issues there because I have seen them.

KKL: Yeah, for what it is worth, we expect as much and in for the long haul as well. Thank you.

USA: We have a response by mark.

MM: So first of all, no disagreement that we don’t know how hard it will be for the high speed JIT engines to implement this. You know, we have some intuition but we’re only going to find that out when the JIT implementers—from the JIT implementers themselves. I want to point out specifically this is one of the differences between compartments and ShadowRealms that the ShadowRealm of global was much more entangled with web concerns than the compartment global is. In fact, if you just take the same proposal and you just use terminology for the compartment global other than global such as scope terminator, it kind of makes it clear that most of what’s associated with the global over realm can stay associated with the global of the realm even when the realm contains multiple compartments. The exception to that which is an artifact of the shape of the proposal to get it through the committee is that we are proposing by default to copy the entire contents of the realm global on to the initial compartment global. And therefore to also copy the internal slots or at least the internal slots that are needed by the built ins on the realm global. And that does acknowledge, that does create additional complexity. However, we would be perfectly happy to omit the problematic elements of the realm global in the copy if we can get an agreement on that at which point it’s hard to imagine what the remaining bad entanglement constraints are with the compartment global.

KKL: And if I can add on to that, it is the case for the compartment shim that we do not replace the true global. We have a scope that is rooted in the true global that is overshadowed by scope terminator, and then the compartment’s global. There are inaccuracies in our emulation of a non-compartment environment that flow from that which is one of the reasons for being here. So, again, what we want to do is create a proposal that is the most attractive to specifically browser vendors in the case of minimizing the complexity of implementation. We have a hypothesis, I have a hypothesis that making compartment globals resemble the realm global and makes it easier if it turns out that that deceit makes it more difficult, that is a dimension of the design we are very happy to change.

USA: All right. With that, we have our next topic which is by OFR, are you there to speak for it?

OFR: That was a very minor point yesterday, but just one of the motivations was that this current sand box that it is very scary to write or scary looking code and it kind of reminded me of linux containers and it is kind of similar, there is no “make a container” Linux syscall and there is scary syscalls that you have to string together to make the container. It’s not considered a problem because there’s one implementation or one or two implementations that do it and so even though it’s not nice to—this doesn’t have to be nice JavaScript, you write it once and everyone can use the bullet proof implementation.

KKL: Yeah. And we agree, which is why we’re getting so much traction from this particular design in practice. I suppose that the slide mischaracterized the need. It is not the scariness of the implementation that we want to make progress on, so much as it is the fidelity of the emulation that we want to improve. Our scary mechanism has edge cases that are difficult to emulate properly or impossible to emulate properly at this point. It’s safe to say. And also this model because we do not have native support for module source in particular, because module source leads into compartments and makes it possible to—gives us the place to stand to eventually propose the mechanism for lifting text to plain module text from, for example, a zip file or some other kind of container and then load them or even appeal to the host module loader to parse and create a module source for us and inject that into a compartment. And what that would enable us to do is make it so that the conveyance of sources from the developer’s system to the production system would require no transforms, which means an improvement to the debugging experience which means an improvement to the transparency of the artifacts that need to be reviewed for security reasons as well. For example, if you look among the dark corners of our current implementation, you will note that our mechanism again only operates on eval-able strings which is to say we can’t eval a module source which means that we have to transform a module source—the source of a module into adjacent representation of a module that has all of the bindings preanalyzed and the body transformed via Babel into the form that can be linked through the combination of evals. All of this is yucky and scary. That’s an oversimplification of the concern. There are benefits that we see when we’re using a native implementation of compartment as it exists in Moddable XS where we can eliminate a lot of layers of complexity and make the resulting artifacts far more debuggable and auditable.

MAH: Yeah, same thing, right now once it’s the correctness for the cases but really requires to transform module code ahead of time so that you can actually end up evaluating it inside of a compartment. So it’s just requires a lot of tooling around and you cannot just dynamic import something or anything like that. Actually dynamic import is one of the things that is prevented especially for that reason.. In the shim obviously. That’s what we want to fix with the native implementation.

USA: Next we have a reply to OLI from Eric. Performance of the implementation of the—sorry. The performance of the implementation is a major concern for those of us using it. However, end of message. Just I phrased it weirdly. All right. Next we have the reply by MM.

MM: One of the many impossible problems of getting good fidelity with the shim for module code is that the version of the syntax that you’re pre-compiling or compiling with a user parser to ensure that is the same as the syntax accepted by the target platform when the committee changes syntax over time is another just simply impossible problem. And when those disagree with each other, there’s all sorts of—there’s a whole wide space of potential hazards that come from that disagreement. And the compartment proposal is really the minimal thing that allows us to avoid having to precompile module code in order to get the benefits of the separation. When I say it’s minimal, I should say if we are perfectly happy would be overjoyed to entertain proposed simplifications that actually solve the problem and, you know—and that’s perfectly fine and part of what Stage 1 and Stage 2 are all about. So any one who has a way to simplify or further unbundle the proposal in such a way that it actually enables the problem to be solved, specifically enables the malicious supply chain problems to be solved, we would love to have this stuff be simpler.

USA: Next we have a reply by KG.

KG: I guess on that front, I didn’t fully understand what the necessity of the syntax transform you were talking about was. There was something about HTML comment.

MM: Comments as an additional cost, additional fidelity problem that’s annoying but by itself is not insurmountable. The problem is simply we need separation of packages. We’re achieving that by separation of modules including of course ESM, ECMA script modules. The shim mechanism by which we’re doing that can only separate eval-able scripts. We have no way in the language to even shim separation of modules without compiling them to eval-able scripts. We simply don’t know of any way to do it other than by compiling them. If anyone does know of a way to do it or has more minimal proposal that would enable us to do it, we would love to hear about it.

KG: Yes, all right. If the reason you need to do for the parsing is full transpilation maybe that’s not feasible. I was going to suggest that the problem is you need a parser that like matches what the browser has, it’s at least conceivable this could be exposed to user land. This is something that, you know, SpiderMonkey historically did. There's problems with that if you’re exposing the full power of the parser but literally just like, you know, "give me the string locations of the import declarations" or something like that, you know, that sort of thing is maybe feasible. But it sounds like the things that you’re doing might need more than that. So perhaps that wouldn't apply.

KKL: Yeah, we need to fully emulate export name space objects among other things.

KG: I mean, emulating export namespace objects doesn’t involve that much in the way of parsing.

MM: All together when we take a look at the things that we feel like we need to do in the transpilation I’m glad to hear that but obviously offline we would welcome the attention of what the actually requirements of the transpilation are and seeing if there’s a lighter way to do that. But say I doubt it.

MAH: Again, my problem is that it still requires transpilation ahead of time. I don’t see the world in which we can allow, for example, the dynamic import statement to survive and make sure whatever is dynamically imported ends up evaluated in the compartments. That’s why we need the engine to implement this.

KG: So this is something of a digression, but I mean it's definitely imaginable that you could do that if there were built in utilities that allowed you to transform module text in the way that was required and if we had a constructible module source and you could find the dynamic imports, which is relatively easy to do, you could slice those out of the source and replace them with the wrapper which does the transpilation at run time. It’s technically possible. I’m not suggesting the right approach. This is kind of a digression.

MAH: Just to be clear, all the transpilations, we are not doing them at run time, we do them ahead of time because all these transpilations are complex and don’t want to review the code whether it is safe and correct and include at run time. So let me rephrase that. The compartment shim is reviewed and sufficient to enforce all the security properties that we want off isolation. And it doesn’t rely on the correctness of the transformation of the module. The correctness of the transformation for the module is just there for keeping the correctness of the program being transformed, the code being transformed. We would prefer not to have to include all the codes of the transpiler in there. Any way…

KKL: More to the point I think if we proposed it, this group would bulk for sure.

MAH: Yeah.

USA: Then we’re at the end of MM topic. Oh, GB, did you want to reply to this ongoing topic?

GB: Yeah, just an extension of this topic just in regards to KG’s comment about the transpilation primitives and the module scrub (?) and I was aware in the meeting the module cross-examine (?) was inappropriate and introduce a new valuation primitive. When we were having that discussion is that in the context of that constraint not existing or is that still considered a constraint in the committee?

KKL: I think to answer GB’s question from previous Q & A sessions that KG made clear that his previous objection to the motion in this proposal in the direction of introducing new paths to eval that is to say the existence of the eval function on new compartment globals was founded on the desire for the proposal not to frame that as the primary purpose of the proposal and that he does not object to them being there if it is natural and appropriate as long as you do not have to rely upon them to exist and usable in order for the feature to be usable. KG, does that sound correct to you?

KG: Yes, that’s about right. I would maybe say slightly stronger, I am happiest if the normal way of using the proposal doesn’t rely on these things even if there are cases where some code doing something fancier would—your example with reading from a zip file, for example. That’s not something that most code is going to do but it's fine that cases which need it are able to do so.

KKL: Right. As a baseline because we can import source using import source and dynamic import source instead of lifting from text, having that Avenue relaxes your constraints.

KG: Yes, that’s right.

KKL: Does that answer your question, GB?

GB: Yeah, thank you for summarizing.

USA: Sorry MM for holding off on your topic. Now we’re ready to go.

MM: With LLMs, we’re in the eye of the supply-chain apocalypse. I get the sense that many people do not feel the same urgency about supply chain risk that we do. This is understandable, first, because we’re doing systems that if attacked through the supply chain, the result could be extremely damaging. Second, many of the supply chain attacks we see are against the kinds of systems we are building. In particular supply chain attacks against wallets explains why MetaMask feels this urgency. In order to communicate the urgency better, ZTZ’s talk emphasized how lucky the ecosystem has been at catching the supply chain attacks that we know about. So that leaves two things to consider. One is the old survivorship bias red dots on airplanes: What are all the supply chain attacks out there doing damage that we haven’t yet detected? We have no idea. Two is that LLMs are going to change the economics of writing code, writing attacks, and securing code against attacks. LLMs will amplify all sides of these arms races. Which things are amplified first, what the degree of amplification is, and how the timing works out are all largely unknown. Attacks don’t have to be reliable. If they usually work, that’s good enough to be a successful attack. Because of that, the unreliability of LLM-written code will not inhibit automating the creation of massive numbers of attacks, including supply-chain attacks. Across the software world, we should expect a flood of automatically written attacks. Because LLMs are currently not very good at writing code that can’t be attacked, we have a problem! Everything that we have talked about here only mitigates that problem, but cannot solve it by itself. These mechanisms taken together do set us on a path to continue to mitigate. But if we don’t do it now, we’re going to run into this apocalypse with no defenses.

WH: I would like to second MM's position on this issue.

MM: Thank you.

WH: Things are about to get quite interesting.

### Speaker's Summary of Key Points

(summary of original topic covers all continuations)

### Conclusion

(conclusion of original topic covers all continuations)

## Amount continuation

Presenter: Ben Allen (BAN)

* [Amount](https://github.com/tc39/proposal-amount)
* [slides](https://notes.igalia.com/p/2025-09-tc39-plenary-amount-continuation#/ )

CDA: SFC, I’m just going to quickly read off the items that I captured in the queue. I think some of them were covered earlier. I don’t want to dismiss them all in case they did need or want further discussion. So we had the topic at the time was from Kevin still would like to understand motivation for language level feature and there was a reply from Shane for protocol primordial and language format and Linga franka and 402 discoverability and we covered that and next items are—sorry, go ahead.

SFC: I believe we covered all the items on the queue.

CDA: The last one is w3c amount tags. Somebody was asking where that was. There was some reference for that.

(?) I think there’s a link posted in matrix: https://github.com/mozilla/explainers/blob/main/amount.md

CDA: Okay.: Then I have nothing to add to the queue from before.

BAN: I will put up the short continuation of the continuation of the continuation slides sort of summarizing what we have accomplished with this one in this meeting and what are the things that we’re going to be working on or working towards for the next meeting. My sense is that the couple of things I will be listing is open questions aren’t things that are necessarily resolved in the next 45 minutes or whatever. And that we will be working with folks on them offline. Without further ado, let me do some sharing. Okay. So we have made a lot of progress on a lot of things. One thing, though, it seems like we have resolved the concerns about how significant digits are calculated. We are going to be going with that PR that Nic put up. We might be iterating on that on GitHub but seems like that resolves the problems. The things that we are working towards and I think we have made tremendous amount of progress this time, but probably won’t be able to resolve in the next hour is the diabolical naming question, IE, amount versus something other than amount. There’s a lot of active discussion going on the matrix channel right now that I’m picking up cords. which again we will work with the V8 team and others on that. The other major thing that we have discussed and are making progress on, it seems, is the question of whether or not to include the numeric conversion methods. And something that came up is if we don’t have them, users can just use `Number.parseFloat` instead. That might require toString. Parse code implicitly calls toString. Users have the way to make Amounts into Numbers. It’s the way that clearly indicates that this is going to a float and similar for BigInt. Those are the things, those two questions are the things we would be working on between now and the next plenary.

WH: There have been questions about what this is useful for and why have this other than just an API. The main thing that this seems to be used for is for inoperability. If we’re using this for interoperability, frustrating users who want to interoperate this with Numbers is moving in the wrong direction. So removing the conversions from Amount to Number would defeat the whole purpose of having this.

BAN: I think we have a reply from Shane on the queue.

SFC: I think that the interop is more than just converting to and from numbers. The interop is about having a bag that contains a numeric thing which at the point at which it reaches amount is intended to have been already processed, right, into a numeric string annotated with the unit and precision that are useful for turning it into the human readable representation and having that interop be able to be used with, for example, passing between the library and the templating engine is I think a use case that is still covered even if we make a conversion back to the number have an extra step.

NRO: So just that `Number.parseFloat` amount, I was expecting the conversion if we remove the toNumber to be much more complex. This actually works because `Number.parseFloat` has the unknown characters under the known implementation of the number which means even if there’s the unit `Number.parseFloat` will ignore it. This is actually not more annoying for users to use. It’s just that they need to grab the meta from a different place. So this is actually alleviate V8 concerns, but I think just a little bit of friction but not very much at all.

CDA: There was a clarifying question from WH.

WH: Are you sure about that? I’m thinking about cases where units might look like a continuation of a number.

NRO: The units are the square bracket.

WH: Always in square brackets?

NRO: They’re wrapped in the square bracket. The stringified version wraps the unit in the bracket.

WH: Okay.

KG: You mentioned your open questions that you were planning on working on which is great. Please also spend some time laying out the case for why this should exist. And by this existing, I mean like the first class class and not just a protocol. I’m open to it existing. We’ve talked about some reasons to want a class today. WH had a point about representing trailing zeros that I didn’t fully understand and maybe that’s the sufficient reason for it to exist, or maybe it’s because you want to be able to trust certain invariants for the things, although if we're consuming with the protocol and not brands, maybe that’s not the case. Maybe the plan is to have helper methods, I don’t know. There’s lots of reasons to make a class. I have not understood what the reasons for making this class are thus far that aren’t satisfied by having the protocol and then having a page on MDN. Please write those down. Don’t just come with the next presentation with the answer for me. Please write it down.

BAN: I will add it to the slide right now.

EAO (via queue): Amount makes the rounding modes of Intl NumberFormat generally available.

SFC: KG, do you agree that the protocol part should exist? In a hypothetical if we were to have a proposal proposing just the protocol in the Intl NumberFormat method, do you feel that that part is motivated? Are you convinced by that side of the argument?

KG: Honestly I haven’t bothered to understand that side of the argument. I generally trust when people are asking things for Intl it's because those things need to exist. I’m happy to defer to you on the topic whether it is necessary for formatters which take both a value and a unit to exist. If you say they are, I take your word for it.

SFC: Okay. That’s a valid answer. And my next queue item is I just want to flag that if for other delegates that share KG, I don’t know about the word to use, skepticism of the primordial, I want to make sure we know who those are so we continue to communicate and make sure that the argument that we put forth is compelling. I think that, yeah, we can talk with—we can make sure that we can put together an argument that maybe gets to help bridge the gap with KG and if there’s anyone else, I want to make sure that we do that.

KG: I think a couple of people said something in matrix. I’m not sure if those people are in the meeting. You might want to review the logs as well.

SFC: And to be clear, I’m not trying to single out KG, but I’m trying to make sure that all the perspectives are considered. Every delegate brings a certain angle of stakeholders and I think that KG represents obviously a certain perspective. And I just want to make sure that all other perspectives are covered.

CDA: Message from JMN that there’s a biweekly JavaScript numeric call that is on the TC39 calendar.

NRO: I guess this is a question KG mentioned there are future plans of things to this amount class to avoid making the like in quotes mistake where it was just the protocol and then working okay but could mean that class from the beginning. If there was a metric and something represented in the past and we left behind and we have to maybe present again and saying there’s the plan of a different proposal and motivation enough? In general, proposal trying to justify amount by itself without having the next proposal because a motivation of doing something.

KG: Just saying that there’s another proposal I think would not be sufficient, but establishing that there is consensus that additional methods would be useful without necessarily nailing down what those specific methods are would be sufficient.

NRO: Okay.

CDA: That’s all for the queue.

BAN: I want to thank everyone involved in the conversation for your time and feedback. This has been from our perspective at least tremendously useful. The plan is to respond to these open questions offline and then come back with this in the next plenary.

CDA: All right.

SFC: I will just add my feeling of my best attempt to try to sense the temperature of the room is that my read of the temperature of the room and if you disagree with this, this is maybe a good time to say that is that largely the delegates—is that largely the use case motivated by Intl by `messageformat` seems to be something that has at least some amount of consent or understanding amongst the delegates. And the idea for whether this type called amount has use cases beyond Intl is a point for which multiple delegates have strong opinions on one side or another and I think one of the focuses over the next cycle before we get to the next plenary is going to be to attempt to find common ground on the balance between what is the intended use case versus what developers might assume the use case might be and doing our best to bridge that as well as working out some of the nitpicks around significant digits. Don’t mean to call nitpicks, the sort of significant details around significant digits handling of infinities, what happens with significant digits that are less than integer digits and so on as well as possibly some of the concerns about the handling of polymorphic numbers, the handling of numeric types as numerical values as opposed to retaining the input number as part of the data model. So that’s my understanding of where we currently stand. And I think that the champions have their work cut out for them. I do feel that this is—the time we spent during plenary this week, I really appreciate that the chair is giving us multiple extensions. I feel like every time we had an extension, it has been productive to help us sort of narrow in on what the core conflicts are and my hope is that next time we come back, we’ll be at the state where those core contentions have been resolved. So thank you all for your time during this plenary to iterate on this proposal. And thank you for BAN and everyone else for keeping on top of everything that’s been going on.

CDA: Awesome. Thank you SFC, thank you BAN. Thanks everyone.

### Speaker's Summary of Key Points

* Resolved significant digits issue via [compute significant digits from fraction digits](https://github.com/tc39/proposal-amount/pull/66)
* Open questions:
  * Name: Amount or something more qualified
  * Include numeric conversion methods?
  * Reasons for more than just a protocol

### Conclusion

* Continue to iterate offline and return in Tokyo

CDA: That is the last topic that we have unless anybody has… so unless somebody has any last-minute topic they want to discuss, that would be the end of plenary. I will remind everybody to please review the notes particularly for comments attributed to you, check them for correctness, accuracy, as well as presenters, please make sure there is a coherent summary and conclusion for your topics. Also helpful if there’s missing links to your slides or to the proposal links and PR links and the like, great to get those fixed up and reminder we have the upcoming plenary from Tokyo. Please remember that if you are wanting to attend in person, you must complete the in-person registration form which is linked in the reflector issue. That is separate that the original survey that is the interest survey. That is not enough to register your attendance. You have to complete the actual in-person registration form. NRO is asking is there a way to check if you completed the form? Yes, by asking us.

NRO: Okay. After every single plenary and every time I struggle to remember.

RPR: Google form option emails you after wards and future people that register, the answer will be check your email. And then your question specifically Nicolo is that, yes, you are on there.

CDA: Okay. Anyone else wants to double check, you can do that now.
