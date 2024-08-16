# 103rd TC39 Meeting | 30th July 2024

**Attendees:**

| Name             | Abbreviation | Organization    |
|------------------|--------------|-----------------|
| Waldemar Horwat  | WH           | Invited Expert  |
| Dmitry Makhnev   | DJM          | JetBrains       |
| Ben Allen        | BAN          | Igalia          |
| Chris de Almeida | CDA          | IBM             |
| Jesse Alama      | JMN          | Igalia          |
| Nicolò Ribaudo   | NRO          | Igalia          |
| Eemeli Aro       | EAO          | Mozilla         |
| Michael Saboff   | MLS          | Apple           |
| Philip Chimento  | PFC          | Igalia          |
| Jordan Harband   | JHD          | HeroDevs        |
| Justin Ridgewell | JRL          | Google          |
| Keith Miller     | KM           | Apple           |
| Istvan Sebestyen | IS           | Ecma            |
| Samina Husain    | SHN          | Ecma            |
| Mikhail Barash   | MBH          | Univ. of Bergen |
| Aki Braun        | AKI          | Ecma            |

USA: Yeah it is time, hello everyone. And well, good morning, good afternoon, good evening. Um that is probably not good afternoon anywhere anyhow. Um, welcome to the third day of the meeting. Before we start with the topic that you already probably see on your screen let’s start by concurrency for help in note-taking? There is 18 of us which means that I hope people can do this over time but let’s start asking for help with notes. So who would like to help out today? As you may offer from yesterday’s to start? Anyone I hear it is really nice. And fun and team work, I don’t know. Like please help us. All right there is 25 of us now. So, we might be able to begin as soon as we can get somebody to help out the notes? If any of you amazing people would like to help us for this session? Just two hours. Or maybe part of the session.

BAN: I can do the first hour but I will step out after then.

USA: Thank you Ben for always doing notes. Although I would say it would be quite nice to see somebody who has never taken notes before, help out with that. I think it’s fair for all of us to share that responsibility, and I promise fun. But, um, yeah. Oh while we try to convince somebody to take notes now—I hear someone? Well I am sorry for the delay but let’s just wait a bit until somebody agrees to help out Ben for the first hour.

USA: Thank you. Perfect. Thank you Chengzhong you should begin.

## Propagate active ScriptOrModule with JobCallback Record

Presenter: Chengzhong Wu (CZW)

- [PR](https://github.com/tc39/ecma262/pull/3195)
- [slides](https://docs.google.com/presentation/d/1FQNSpCdzkvcRg-yFBjUOqjrNAVHezfoVLjgK4cfEjIc/edit#slide=id.p)

CZW: Thank you, this is CZW from Bloomberg and I will share the change in ECMA-262, and the pull request number is 3195, and let’s begin with it. And the problem here is that the host defined hook has a comments for host to present this quick manager and the abstract module when the host invokes the HostMakeJobCallback when the promise is fulfilled. However, the HTML depends full hee implement this comment we start which now defines that the host make JobCallback so the callback module and instead of the hostEnqueuePromiseJob. And the difference here is quite trivial, but it is observable. So the HostEnqueuePromiseJob hook may depend on the internal promise state which means the timing of the HostEnqueuePromiseJob depends on whether or not the promise is already fulfilled.

CZW: So when `promise.then` is called before the promise is fulfilled, then the HostEnqueuePromiseJob will not be invoked immediately, and instead it will be invoked when the promise is actually resolved. So in this case, we can see that in the example, in the module A, we called `promise.then` promise before it was resolved, and the HostEnqueuePromiseJob is not called immediately, and in module B, the resolve function for the promise is invoked and now the HostEnqueuePromiseJob is called for HostEnquePromiseJob and then we have the hash joiner and so 2, and host enqueue promise job is invoked immediately. So we can see the difference here is that the ActiveScriptOrModule for the site 1 and site 2 can be different for the timing when the HostEnqueuePromiseJob is invoked. And the proposed change is that making the enqueued promise job’s ActiveScriptOrModule can be the one in which one consistently which one is when `promise.then` is called. So, this matches what is defined at the moment. HTML spec, and for example, the two examples here will behave identically. And the left example is a bind in the frame location server and the right is a JavaScript user code with equivalent behavior. So the ECMA262 those two code—um, sorry. Yeah, this is another relative problem that is not related to ECMA262 or HTML spec, but we expect the two examples here to behave identically. And what’s reality is that we have a matrix of different behaviors on the HTML spec and the ECMA262 and Chrome, Firefox, Safari all behave differently in all of these cases.

CZW: So ECMA262 and Safari behave identically, reveals the promise state. And which means Safari is compliant with ECMA262. But Chrome and FireFox don’t respect either HTML spec or Ecma 262 and it behaves differently for the bound function and an arrow function. And with the HTML spec, it doesn’t reveal the internal HTML promise state that all two examples that will behave identically, so HTML spec has these problems. So the proposed change would be that we want the bound function and the arrow function to behave identically, to not reveal the internal slot [[PromiseState]], and that is all of the proposed change. And we can go to the queue for consensus of the change.

USA: Yeah, so first on the queue we have JRL?

JRL: Yeah, perfect can you hear me?

JRL: Yeah a little mic icon was not changing based on my voice, perfect, so on the slide, so to reveal the internal promise state spot?

CZW: The first it will be a zalgo issue because it depends on the timing of when the callback will be invoked but in actually it will be like this example like when—well with pure promise I guess the promise state will not be observable—all the promise handlers are invoked in the microtask queue, but if the host captures the ActiveScriptOrModule, it will be observable through the ActiveScriptOrModule.

JRL: So you are able to tell whether the promise was resolved or pending based on the behaviors if the function get called?

CZW: Yeah.

JRL: Okay.

USA: Next on the queue we have KKL?

KKL: Yeah, I wanted to and for clarification. What are all of the observable from the language point of view? The observable effects of ActiveScriptOrModule? Do they include the referrer specifier for dynamic import for function constructed with the Function constructor or is this directed out? And I ask this out because this touches upon an aspect of dynamic scoping in the language that maybe there are better solutions to. So yeah, can I ask for clarification on that point?

CZW: Um, the short answer is this will be in the next discussion, and in this change we want to focus on the HTML spec, because in HTML spec there is functionality that depends indirectly on the ActiveScriptOrModule, because HTML like the location depend on the script have execution context so I like the dynamic import discussion to the next eval discussion and we will focus on that tomorrow on that spec.

KKL: Are the solutions orthogonal?

CZW: Yeah. I can defer to NRO?

NRO: So assuming that the next eval discussion does not have consensus, then this change has several behaviors for dynamic import, and specifically you can do— you can have a promise that results with a string that performs dynamic import and the promise you can dot then eval. And then if the promise is in resolved and the dynamic specifier would be resulted to the promise is then and if the promise is not yet and the dynamic import will be directed to the file that results in promise that is where the descriptor module the referrer comes from.

CZW: I know that depends if the promise is there or not.

NRO: And if the next discussion on eval will have get consensus, then this proposal change now does not have any effect that that is observable with ECMA-262, it is only observable with HTML features and HTML—

CZW: I think if the discussion was not concluded, the change here will make it more compatible state but when `promise.then` is invoked than when the resolve is invoked.

NRO: Chris does that answer your question?

KKL: I am still pretty muddled. My first impression is that it is difficult to answer consensus on this issue without first understanding the Implications on the issue next on the agenda. And that my intuition is that the behavior of eval with the ActiveScriptOrModule for an indirect eval should depend on the instance of the eval function and the realm it is created and not depend upon any dynamic scope in general.

USA: We already did the reply by NRO so that is it on the queue.

NRO: I wonder if maybe it makes sense to come back to this after the other discussion, and then after the discussion we can come back to this and see if we can reach consensus here.

KKL: Yes that sounds good.

USA: Um, next we have a topic by MM?

MM: Yes, we should come back to this after covering the eval because this cannot be disentangled.

USA: and next we have KKL a second consensus after the next topic. And yup, that is that.

NRO: So we will have time to come back to this.

USA: Well how long of this presentation is left? Or do you want to just move the rest?

MM: Certainly a decision on consensus needs to wait until we cover the next topic.

USA: Yeah, well I mean for instance, this particular topic in total has 15 minutes left, so if we just defer the rest to later we can—yeah we have 15 minutes at least. Do you think that would be sufficient for that discussion CZW?

CZW: Yeah I think so, and I can have a further discussion until we have the eval discussion.

USA: Okay great, so let’s this end and we can come back to it after the eval topic.

CZW: Thank you.

### Conclusion

This topic is revisited later in the day.

## Decimal for Stage 2

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://notes.igalia.com/p/proposal-decimal-tc39-july-2024)

JMN: Great. Um, yeah, this is Jesse alama coming from Igalia working on this with Bloomberg and looking forward to decimal in the future. Just as a quick reminder and I know many of have seen this a number of types and I have been a bunch of times before and surely there is someone new here, decimal is about adding exact decimal numbers to JS. And the purpose of doing that is to eliminate, or at a minimum significantly reduce rounding errors of numbers, that is encountered with binary floats and human and data and that is fuzzy but the main example is money and another example is that you can see items on a graph tick label or coins with numeric labels and this kind of things.

JMN: Here is a simple example. Just to give you a sense of space that we are operating in and calculating a bill. This is something where depending on the complexity of the case, and the numbers involved, we may see rounding errors if we do it in straightforward way in binary floats and JS. And here we have a new decimal128 class here that is being proposed and we have a calculate bill function here that is just it rates simple list of items with count and price, you can see that below as an example. And some kind of tax where it will get applied to the int and we do our calculation and we round to two decimal places possibly with forward to see if we do rounding and get some kind of result there. And the idea is that this are not binary floats, but decimal numbers. So you might think of this intuitively of a calculator type semantics and this comes in decimal numbers like we know and love from elementary school.

JMN: Main reason for this presentation to give you a dif of what was going on since last time. And I am happy to report that WH and I have been working intensely, and WH is a co-author of this proposal. And working with WH the spec text has been considerably flushed out if you want to see some the details you can look at some of those issues and we can also look at the spec text here, and we have a definition of the space of decimal numbers that we are working with here. And we propose some rounding here, and we have some definition of what counts and definition of value and the space of possibilities here is limited and there is a limit to significant digits that can be used and a limit to the exponents that can be used. And we have some additional definitions here, and you see that there is some NaN here and you can see 0 and negative 0. And those I can make bigger. And we have some errors here and some simple arithmetic like addition and subtraction and so on. There have been some discussions about the API of this thing. And not too much to say on that front, although a couple of items are worth mentioning. We have our toString, and we are trying to get that to like `Number.toString` which switches notation from decimal to exponential notation if the number is too fine or too many decimal digits involved. And we have decided on adding a rich array of comparisons here. And the difficulty that we anticipate is that many developers will have some trouble with existence of NaN here and just less than might actually be correct. And in previously presentations we had a single cmp or compare or a method that we decided to up it up and have some comparisons developers are more likely to expect. And there is a notion of a quantum of a decimal and the representation of decimal the represent you might say digits after the decimal point involved, and so the scale precision . And I am going in circles trying to explain this but I hope you can see where I am getting at. And we are working with JSON here and for the moment we decided to throw when decimal are encountered, and this is open for discussion and we are making this parallel to big and it shows up in JSON string file. And we have been working a bit on the Intl side of things and there is some bugs detected and incompleteness of the NumberFormat and pluralRules and those have been set but the discussion remains open and the bugs and nor Matt was identified and there has been some notes on the PR’s later on if you like to look at the details of that.

JMN: But the main purpose of this presentation is to get at a point that was made explicit last time in Helsinki, about whether decimals are kind of an exotic concept that is generally not used out there. And the question is, is there any new uptake for decimals that we see out there in the JS ecosystem? And this might be a reasonable claim, you can say decimal is a fringe concept that might have uptake a while ago but has low uptake today, and there is not much momentum so-to-speak or very little demand for these kinds of things. And I will go through a bit of an argument for why this is not quite right. And what we can see that decimals do exist. They are out there. And issues with them keep coming up. Of course, decimals as they exist today take the form of libraries, and so what we see mainly is difficulties with decimals as a library that we hope would be smoothed over if decimals were to exist in the language.

JMN: So just some basic usage stats. In early presentations we have discussed there are only a handful of decimal libraries out there, by one person and say small community of people assisting little bit here and there. There is decimal.js and big.js and bignumber.js, and decimal.js-light. And there is a fair amount of use of NPM, and this will reflect and these are still being used, and obviously, a lot of these numbers will be indirect usages and developers are not knowing to cool these things down but they show that they do show up some ways and so they are sitting in a fairly thick middle, you might say, of the JS ecosystem at the bottom and underlying a lot of tools and libraries.

JMN: There are some issues with the current decimal libraries out there. As you might imagine, the slight details of how these decimals are implemented in those libraries that I just talked about in the previous slide, can lead to some compatibility issues for users and library developers. So, I just want to give out a highlight of some of those issues that can happen and some of the friction that exist between these different libraries.

JMN: One difficulty is that decimal conversion can be hard. Here is a nice issue that I found here, about working with JS numbers, and decimals. So difficulty is that there is the Mongoose decimal database the is using a decimal type internally, and there is a JS interface to this. But usually developers will work with numbers at the end of the day. So they need support from both and so there can be some issues there here. And the developers complaining about indirect cast or unexpected cast to number. And this is bad because the whole point of decimal numbers is that we are supposed to have a kind of a rich data structure that expresses all of the decimal digits, and if you convert that to numbers most of the point of using decimals is gone, so we need to make sure that is in our control.

JMN: There could be multidecimal set-ups, and by the way notice the dates on some of these issues are still fairly recent. Here is one developer complaining about too many BigNumber libraries being used. And that the text goes on, and there is a link if you want to see it for further discussion. But the idea is that there are these handful of options out there, and BigNumber, and decimal.js and so on, but in some applications many of them can get combined and so we have multiple operations of decimal in a single app or library. Um, and in some parts of the JS world there is an increasing appreciation for reducing dependencies and some part that is not that much of an issue but some communities there is demand for this. And reducing package size and dependency count can matter and some developers are using decimal indirectly, but when they look for libraries, they can show up. And some of these libraries are not tiny. And so the decimal.js download is 283K unpacked. One idea that showed up in one place which was the idea of dropping decimals. And the idea is to plug in your own library. And this is a bit of a radical suggestion but you can appreciate the developer pain this is coming from. And the developer pain is something like you know, we are basically just using decimals as strings, and they are present and don’t throw them away but this is something thin here and this is something that a library is probably not going to provide. And going in the single line of thinking is something about barely used decimals. And so you see a number of issues on GitHub like remove decimal, or minimize decimals, or a lightweight version of decimals, and here a developer is complaining that the bundle is too big and you do a tight check and do a couple of methods where JS will create a lot of support there and a lot of mathematical functions and so on. So that one is going far beyond what we propose for our decimal proposal which is just basic decimal arithmetic.

JMN: So just to recap here, we have had this discussion before, that having decimals today as a primitive is too much of a heavy ask for the JS engine implementers, and that is an understandable position. But nonetheless we have seen that there is a documented need for decimals out there. Many developers need decimal numbers for things like money or measurements, and they do have alternatives out there in the form of libraries but there could be some friction out there. And they add weight to these things. And I would say that having some kind of well-specified version of decimal, which is something that a library cannot really add unless the author were to take considerable trouble to say, verify this or ask someone for review. And the point of having a well-specified lightweight decimal library would create a coordination point. And I would assume many developers would drop decimal stuff there, and basically use our stuff out the box, and if they need to go beyond, we expect that would be appreciated a lot by the community. And nonetheless, and I want to say we emphasize again that we are keeping the door open to a world where decimals do exist as primitives, and we are doing what we can there. And there might be some kind of funny edges there of that world but that might be a nice world and turn to include them in the future. Um, and I think there is an interesting task for awareness of decimal in numbers and if this does exist we can increase this for decimals and the need for them and how they exist out of the box.

JMN: So that is it and I did not want to make that too much of a heavy weight argument, and I hope the argument is straightforward and relatively small, and recap where we are with the decimal proposal, we have seen that there is a number of use cases out there, and documented a number of these. Both in our own developer experience, as well as a survey that we have presented here in plenary once before. And there is a bunch of ways to represent decimals, but we have chosen one that is fast and not too complex. And we have API that meets a wide array of new cases and the spec text is there, and ready for inspection, and ready to take a look at, and there is a polyfill available, and we have some Intl integration and we have that PluralRules and NumberFormat, and thank you by the way SFC for all of your help and getting those details ready

JMN: A couple of next step and there is a couple of missing things. For instance, add toLocaleStrings discussed recently and there is an issue of BigInt and JSON.stringify, and there is AO spec that needs to be fixed and thanks for picking that out SFC, and there is recent feedback from WH and thank you for that, and that is basically done. And there is an issue in the issue tracker, and admittedly that thing is a bit—we need effort there and temporal we will use an example of using labels and these GitHub features that have so far been largely ignored. And then there is also discussion about trailing zeros in toString and JSON, and that is open discussion, but in our view that is not necessarily a blocker for going forward. And that is basically it, I will look in the queue for discussion. How are we doing on time?

CDA: We have plenty of time, JHD please go?

JHD: This one is clarifying question, so you use the term quantum and I I have tried to look at some issues in PR. I understanding it is meaning in an English or physics context but can you tell me what it means in decimal context?

JMN: Yeah I believe that is bit of a curious terminology and I myself am not a big fan of that term and that is in the IEEE spec. But quantum for us this in context means essentially the exponent to which you need to raise the number by itself to get an integer. Think of something like 1.2, and you would need to multiply that by 10 to get 12, and the quantum there would be -1. So you want to have an extra 0, that quantum would be -2.

JHD: That is a number of places to move the decimal to get to an integer?

JMN: Yeah.

JHD: Okay that is relatively simple explanation but I am concerned about the guaranteed confusion from the term, but that does answer my question, thank you.

JMN: Yes good question, thank you.

CDA: WH you had a reply?

WH: I might be able to provide a better answer. In IEEE binary floating-point numbers there is one only representation of 1,000. So 1,000 has a unique binary representation. In IEEE decimal floating-point there are several representations of the number of 1,000. They are all equal but can be distinguished via obscure operations. They differ in the internal exponent vs the internal mantissa (not user-visible except via obscure operations), so you can have 1,000 with a precision of 1, 1,000 with a precision of 2, with a precision of 3, and 4 so on, up to 1,000 with a precision of 34.

CDA: All right, and thank you WH. I am next on the queue, I am happy to see this increased collaboration with WH, and that he has joined the champions group.

JMN: It is really great to work with WH and this is in good shape.

CDA: WH is next on the queue.

WH: One of the things that came up which I would like to get a feel from others of the committee on, is whether *equals*, *lessThan*, *lessThanOrEqual*, etc. should return booleans or tri-state values of true, false, or undefined? The current design returns tri-state values, but I’m not sure how I feel about that.

JMN: I think the thinking or justification there, it is not a very good strong justification, is that the NaNs would not be comparable. And so undefined is at least a possible value but then of course another approach is just to bail out and return false at any time.

WH: Yeah, returning tri-state values works for 5 out the 6 but will give you incorrect results for *notEquals*.

JMN: Yup. And so—

MM: So, since these things are not the symbols, because they are only named methods and therefore, it is up to us to—it says we just don’t have just a single cmp method, so why not a single cmp method with a four value output, and so less than 0 equals would ambiguously deal with this in a straightforward way.

WH: We do have a *compare* method that does exactly that. The reason I also want *equals* and *lessThan*, etc. methods is that those are very common operations, and making everybody compare decimals for equality by calling *compare* and comparing the result with a Number is just a recipe for typos and bugs.

JMN: The presentation might have been misleading. *compare* is there but these things are also there.

MM: Okay.

CDA: Mark?

MM: That is it for me.

CDA: DE?

DE: I like the idea from WH of having comparison functions return only true or false, given that we have `compare` for the tristate. We can iterate on this detail during Stage 2 though.

JMN: Okay sounds good, this is something that I don’t have a strongly held position.

WH: I was surprised when I saw this — I thought these were just returning booleans. I’d prefer for these to just return booleans.

CDA: SYG?

SYG: I have a clarifying question about the earlier slides and the first issue that you screenshot with something with the word mongoose in it, and not supporting a particular JS library. And how would having a built-in decimal help this kind of issue, where a library is not supporting decimal correctly?

JMN: I think this might be able to be a solution by simply passing the data around instead of converting somewhere in the middle of a pipeline somewhere.

SYG: It is converting because it is aware that thing should not be converted, so why would the existence or presence of decimal library do that?

JMN: The library would have to work with the decimals as far as possible and not cast them or convert them.

SYG: Right but that does not seem to be an argument for or against built in decimals. That is is a bug with this library.

JMN: Um yeah, you may correct with that. But then the question might be then, what other kinds of bugs like that are out there with this kind of libraries, where some conversion is happening unintentionally where something is no longer a decimal, Even though originally it was.

CDA: We have somebody in the queue.

NRO: When we added new built-in types to the language, and so libraries that work with engineers and this is all adopted to supporting the types, and so like libraries would start supporting this type and they can choose decimal JS but when if someone is different in the library and having one in the language and I don’t understand each other and libraries can just using a type without support of this because it does not work with the those decimals.

DE: I am in the queue next. I agree with NRO that this is about solving underlying problem, which is they want to deal with decimals and this decimal.js is an implementation detail of the solution. So I think there would be less cases of people saying “okay I will convert this to a number as the intermediate between two things” which is completely broken if we have this decimal that is a language that everyone can speak.

SYG: To be honest, I understand the thought process, I find it fairly weak in that it depends on a bunch of actors all seeing a built-in decimal coming into existence and doing the right thing to do in each use case.

DE: Coordinating many actors is the point of standards. So I understand the pessimism, but that is where would get value.

CDA: All right, we are almost at the time allotted for this topic. We do have some time available this afternoon, so I think we can continue to discuss. Next is JHD.

JHD: You show the download display and count and you made a comment that they are all the same author? Like it is the same person who has made all four of these, these different flavors of ways to make decimals?

JMN: Yes.

JHD: That is fine but it does make coordinating with multiple actors simpler but with decimal in the language or without. And my question is why can’t this one person just add a simple protocol or a string protocol even to all four of these libraries so they can trivially losslessly—or ideally losslessly converted between each other and all of those. Then you can pass any of the four objects to any of the four library and capital J and capital W can work and this can be done unrelated to this proposal, and probably they we would wants to do this any ways unless this proposal advance and all four of would make a change and all API’s—this guy can make a 5th library and have all these be thin wrappers around that object. There is a lot of current solutions that would address the paper problems and the bugs you described. In a world where there is like 50 different authors creating libraries, that is much harder and in userland. And DE is right and that is primary point of standards is to appoint actors but that is not only mechanism to do that and given this is one actor and coordination can happen inside their own brain, why are standards necessary here to do that when this person has not even seen the value of doing that themselves?

JMN: Um, I wonder if to what extent they follow the author of these things is following that, whether there is any pressure for that. And it is possible that there’s enough in the community that don’t know the possibilities of what they are saying and maybe he has tried it. I don’t know if it comes to that. And the author here—he has probably thought of things like that and I actually how far he can go with it because the underlying details of these things I would say are different enough that simply switching out one for another and expecting a robust API to work out, I would have to think about that. My gut reaction is that might be a bit implausible.

JHD: You are right, your explanation is plausible that it might be implausible, and very might be and but in this case how does standard decimal help other than killing these four libraries and having everyone to switch all four of these to the standard one?

DE: I am on the queue, I think the idea is yeah that this switch those libraries and switch to the standard one and I think the difference between these when JMN was looking at this, we would not find any kind of correlation of what the application needed and what library they chose, and the differences in customizability was not useful for peel that you might have thought. And the idea is standardize on one thing and I I don’t know how we would use a protocol and what that would accomplish. Because we do not want to bundle in multiple decimal libraries was that you are talking about a runtime thing that would happen later. And then the same point as JMN made earlier that they have different semantics and different aPI’s so they are not replaced within each other.

JHD: Then how is the built in decimal a replacement for these libraries and API’s.

DE: They would do a transition and you need to invest in transition in standards and you know they are long lived and well maintained this is just a super common thing at TC39 and some things we add things to the standard library because they are useful broadly. It is just so similar to temporal.

JHD: So with decimal in the standard, all users of these four—well, the bulk of them would migrate to the standard and drop the library entirely.

DE: I am not claiming that directly but that is way software goes this and there is a lot of software uses these and I don’t think most of them would use the standard to update their code.

JHD: And what was the rationale of the author to create four different approaches? Like how does this proposal address all of the differing needs or constraints or whatever that drove the creation of these four different APIs that are incompatible in terms of semantics.

JMN: I cannot speak for the author, and so the different semantics and I do not wanted to put words in his mouth.

CDA: I posted an answer in the delegates chat and describes big number JS and decimal JS, and does that include decimal JS—hopefully that will answer that. https://github.com/MikeMcl/big.js/issues/45#issuecomment-104211175

JHD: Is Mike involved in this proposal, given that he is the preeminent expert on decimals?

JMN: We have had chats with him but not formally involved in the proposal.

CDA: NRO?

NRO: So I am saying based on the numbers of how big they are and how many things they support. Like there is no JS light but if you don’t have time to comments but there is different subset and given that you would have a small risk library for the int that are different and subsupporting that.

CDA: MM?

MM: So the point that you made about the door open and can you go to that slide? and seems the opposite. If it was conceivable with any reasonable probability that we would eventually have decimal primitives, I would strongly object to doing anything else. And as I understand the reason this is on the table is because the browser implementers have definitely vetoed the decimal primitive. And say we accepted this and for whatever reason the primitive is no longer off the table and these have been answered and I think first this takes the winds out of doing anything else with decimal as it should. But if we additionally later had decimal primitive in the language, we would curse the day that we accepted this one into the language because then they would coexist and would coexist uneasily. And one example we are allowing these things to be denormal, the primitive representation of a thousand and never allow that for primitive and another example is that primitive landscape and there is a number of primitives in the wrapper and the with wrapper of the primitive objects and neither answer is good. And I think we should only consider this if A, we think primitives really are permanently off the table, and B we accept going forward with this one precludes a world where we ever admit decimals as primitives even if we are otherwise able to.

DE: Can I jump in and answer that? I am on the queue. So, from mechanical sense, the idea of keeping the door open is something we have discussed before on committee. Decimal objects could be reconceived as the primitive wrappers for a future primitive. First, we do believe that this is 100% off the table and we have heard that from implementers. And from that discussion and explanations and we have asked if they change their mind, could we still do it? I think the answer is yes from that kind of primitive wrapper perspective. Then there is a semantic point, if it is a primitive do we need to distinguish different quantums? If it is a primitive should it just be the cohort set? And I don’t know. That is kind of a big question. But ultimately, because we are deciding that we do want to include this in the data model, to include quantum in the data model, and that is a blocker to be a primitive and that will remain an argument forever that we should not have this as a primitive. And I think this is all consistent and we have heard strong argument in committee why it is important to keep the quantum in the data model, and those apply even if browsers change their mind about whether they would admit new primitives.

MM: I suppose we can do this offline, if it’s conceivable that the browser makers could eventually change their mind on this.

DE: I think it’s not particularly conceivable but I mean, of course it’s conceivable. Everything is conceivable. We’re going based on the evidence that we have.

MM: Okay. I will just say my overall take is I’m not going to block this but I am reluctant. I would prefer not to see this added to the language. But I’m not going to block it.

DE: So, sorry, can you clarify what you thought of my point that we had reasons for why we wanted to include quantum in the data model and if those are valid, and if that blocks it from being a primitive and this explained as a wrapper, then that would apply either way. Do you see the logical chain I’m making?

MM: I think there’s a step that I’m missing in there. If it’s a primitive, I would only accept it as a primitive if it were canonical—normalized, rather. If we thought we wanted to leave the door open, then I would object to the non-normalized representations here and insist that everything be normalized here as well. And if the door open is completely not an issue, then I would still actually prefer, as you know, normalization, but I won’t insist on it if we believe this is just object state forever.

DE: So I think the proposal is just object state. And I think the assumption with this kind of slide has always been in the, you know, in this counter-reality, would this work? And we have the reasons for including the quantum for not just—for not canonicalize and not normalize. And so, yeah, I think in the interpretation that you’re taking it, I would characterize it as the door is closed.

MM: Okay. So I’m not blocking. I will yield.

WH: A bigger concern with making this into a primitive later is object identity where identical primitives are distinguishable. The current Decimal arithmetic etc. methods, always produce new objects.

DE: But the idea is these would be primitive wrappers, not that the object would be represented as the primitives and there would be a separate way to get at the decimal primitives and if you get two objects you get one of these as identity.

WH: Okay.

DE: Does that address your thought?

WH: I don’t want to digress on this. Let’s go through the queue.

SYG: I have a question about one of the motivations that I have heard many times is about kind of interchange with other parts of a complex software system that already supports decimals. Database usually seems to be the one that is usually brought up. Given the relative lack of built-in decimal types in other languages, I’m trying to understand why that motivation would be helped by our choosing Decimal128 with whatever set of things that we chose. Like, why would it solve coordination for interchange?

JMN: I wonder if the premise is true. I mean, many languages do have decimals out there. I think especially just focusing on the database example–

SYG: I didn’t say no languages had decimal. I said many languages do not have decimals. That is true.

JMN: That’s quite right. I mean, thinking about databases in particular, we know that interacting with SQL databases there is going to be in many cases heavy decimal usage certainly.

SYG: Sorry, but SQL—maybe WH has an answer that would explain because he’s on the queue as a reply.

WH: If we’re going to do decimals in interchange, IEEE decimal is the thing to use, and that’s what everything that’s not older than the IEEE 754 spec seems to be converging on.

SYG: But like SQL would or does use something that is basically compatible with decimal 128 today? I’m asking. I don’t know.

WH: SQL is far older than the IEEE standard.

SYG: Okay. So decimal128 in JS, how does it help bridge like SQL drivers for database that are widely used?

WH: Decimal128 can represent pretty much anything you can do in SQL.

SYG: It subsumes the format and the older more ad hoc formats, let’s say?

WH: Yeah.

SYG: Okay, I see. Thank you.

DE: So SQL itself doesn’t include the limit to the length of the decimal, different databases do have different lengths. But some actually do have slightly longer than 34 but when we have gotten in touch like the Oracle database authors who had this issue, they somehow in practice had shorter limits. This was considered not a problem, that 34 digits was enough. So this was sort of a thing that we spent some time looking into on this decimal128 versus BigDecimal question. Separately, I don’t think that the lack of a feature being in another language is this really strong piece of evidence in general for us in TC39. I mean, we could apply it to a lot of things. We’re kind of about identifying what would be useful. If we restricted ourselves to the intersection of what is in all languages, that would be quite limiting.

SYG: Right. I think you’re taking a more general version of my argument and I tried to be more careful in phrasing it to be about not over languages of being sufficient counter argument against decimal but that coordination of complex systems that are complex software systems that are written in different languages was one of the motivations for this. And primarily I’m thinking of C++ that does not yet have a builtin decimal type, given that many pieces of software in deploy systems are written in C++ given that the C++ software have to choose a userland library to do its decimal computation, does our choice have that problem as the primary motivation? And WH’s answer is good enough for me now in that Decimal128 seems to subsume the other choices and if that is the case then decimal128 would solve that.

DE: Okay. If it’s about subsuming possible choices I want to know about C++ in particular, it has been under consideration for a long time in WG21 to add decimal and C++ to decimal somehow. If anyone wants to work on that, it’s probably a relatively good starter project for someone in WG21 because most of the questions are straightforward and people aren’t working on it. Anyway, in Bloomberg we have the standard library called BDE that is open source, you can just download it. And it includes a decimal. It’s important for us internally to standardize on decimal usage. It might be that some of the kinds of code that are open source and in C++ don’t end up using decimal. So that might be one source of the coordination thing. But anyway, this need is identified across languages, including in the C++ community.

SYG: What is your take away that the C++ body has not yet added a decimal after being in consideration for many years?

DE: It’s kind of like how we haven’t adopted AsyncContext despite it being useful, it just takes time and takes people being dedicated to going through the process. It just happens that language features are missing and they get added over time. And, you know, the particular person has certain other priorities and it’s hard to transfer this, you know, kind of normal project stuff.

KKL: Provided that we get through the existential issues with decimal and into the bikeshed, I wanted to point out that decimal will establish a precedent in the language standard for the naming of comparison operators or method names for comparison operators. And I have a strong preference for spelling out all of compared over shortening to cmp. And based off the fact that JavaScript is already a PERL(?) dialect we could borrow the short names from pearl along with regular expressions in the deck methods.

JMN: Just to chip in. I agree. The cmp thing is actually more like a hint for the reader. The real name as it stands today in the spec is `compare`.

KKL: Thank you.

JMN: Everything else is spelled out even if it’s a long thing.

EAO: Looking at the string formatting methods that are proposed for decimal, the readme mentions that toExponential, toFixed, and toPrecision are similar to the corresponding Number methods. But at least in the current spec text, in particular with respect to the arguments that are passed to these methods, the Number methods currently each take a single number integer as its argument. But the spec text for the proposal has each of these apparently accepting an object argument, and requiring very strictly that it must contain a specific property there. And then also, for example, toExponential doesn’t seem to even support the number of fraction digits input that `Number.toExponential` has. When considering what is being proposed here for these methods, should one be looking at the statement in the readme that says they should look like what is for Number or the text that’s in the spec which is saying something quite different and which probably ought to get fixed at least in some ways?

JMN: Yeah, it sounds like you found a bug with toExponential, but the potential is saying they are similar and decimals are like numbers and have the numbers that are available and give you the result that has different formats. The idea was to have some kind of options bug there as the argument but I think this is something that we could hash out in later stages. I think I myself waffled back and forth as to whether we have enumerated parameters or an options bag. TBD. Either way is fine with me I would say. Any suggestions are welcome.

EAO: What I would suggest at the very least is, what works for Number should also work for Decimal. And it might also accept other options instead of numbers as the argument. But at least what works for Number should work for Decimal, otherwise it would be very surprising.

JMN: That’s a great suggestion. Thank you.

WH: I hope this is a bug because the spec is currently incoherent, where the signatures of some of the methods were changed to take an options bag but the algorithms still take numeric parameters. So I fully agree with EAO that this should take a Number as the first parameter. I think the API should be the same as what it is for *Decimal128.round* where the first parameter is a Number and the second parameter would be an optional rounding mode.

JMN: Sounds good.

WH: I will note that the presentation slides will not work if these take an options bag.

JMN: That reflects my own going back and forth on this topic.

DE: So on the queue, thanks for pointing out bugs. I’m happy to see that we’re getting to smaller and smaller bugs, though, I think each of your rounds of review, WH, has been really helpful and seems like we all are thinking in similar directions here. So I think this kind of fix in iteration can happen in Stage 2, before Stage 2.7.

JMN: Anything else?

CDA: There is JHD.

JHD: I was going to go after you. But, yeah, I mean, so the objections I stated in the last plenary have not been resolved. There was no conversations between now and then. I reached out to JMN when I saw this on the agenda and we chatted. I’ve been mildly reassured that the specifics of the API aren’t as important, meaning we don’t actually need the exact proposal’s aPI to be vetted in userland first. And some of the comments today as well about the four different libraries with different APIs, it seems like it largely doesn’t matter which one it is to most of the consumers. They just kind of grab one and it works. So that suggests that they would grab this one and it would work. But it still doesn’t feel like me without primitives it carries its weight as it’s important as numbering system. I have all of MM’s concerns that if it’s going to close the door on doing it as primitives we absolutely should not put in the language. It’s not clear to me if the browsers will change their minds ever about adding new primitives, I don’t think that—if that were to happen, it would be an immeasurable tragedy to just basically be unable to have a numbering system be a primitive in the future. And we just heard some reasons why without the canonicalization it wouldn’t be possible to have primitives without constraints. That sounds like a cross concern. I don’t think it’s appropriate to advance this to Stage 2 yet. That remains the case.

DE: So you said it doesn’t carry its weight. But the presentation gave a lot of reasons for why it would be useful. So can you go into some more detail on what you’re looking for?

JHD: Yeah, I mean, obviously this is a subjective concern that can never be completely quantified. But I have a little bit of experience in languages where decimals are a class and not a primitive, like Java and Ruby, and it is very awkward and unergonomic to remember to do that. Bugs abound when people just think you can type a number and it will do the right thing and you have to employ lots of tooling to tell people to do the uglier ickier thing in order to get the right math. It seems very important to me in JavaScript that it be very easy to convince people to use the better thing. So, for example, with BigInts if there’s a use case where integers matter and there are big integers that matter, it’s not difficult to convince people to slap the N on the end of the numbers. That’s a very low friction change to get like correct math with integers. And that is what I envision JavaScript having at some point in the future, that you slap an N on it or whatever it is and all of a sudden the numbers are intuitive and match what you learned in school instead of the floating point nonsense that many languages have and we all know and love. I know there’s reasons for that, I’m not saying we shouldn’t have floating point. But the majority of the complaints about numbers are due to the floating point stuff. So I want to ensure that we are still heading towards a world potentially where that’s the case, where intuitive math is easy to code in JavaScript. And it’s like obviously you can use linting to force people to use decimals whether they’re primitives or not. There’s tools. But it’s a harder ask when there’s a lot more boilerplate involved. And then, you know, things like syntax highlighting and stuff, right, MAP(?) and regexp and date are all syntax highlighted the same because they’re just objects, it’s primitives and keywords and stuff that get distinct highlighting. There’s just a lot of aspects and facets that I will not exhaustively enumerate that are impacted by it not being a primitive and something as core essential, I don’t know what the right synonym is, as a numbering system really needs to be a primitive. And the arguments that I heard to try to override that are effectively coordination point which, you know, I’m not super convinced about, considering there’s one author in the ecosystem solving this problem and that is the coordination point. And the other one is, you know, there was one today about the incentive of changing your code for a standard built-in thing. While that’s totally true, tons of people have migrated away from moment even with Temporal on the horizon and they have to change again when Temporal ships. I also seen it doesn’t have to be in the standard to incentivize things to change especially when the majority of some thing’s dependencies are transitive. In other words, a lot of people select eSLint / Babel / React / whatever, but it sounds like for these decimal libraries, most people are selecting something else that in turn selected one of the decimal libraries. In that case, the bar for incentive to change your code is much, much, much lower. So that’s what I expect here whether decimals in the language or not. Yeah, like I said, this is subjective. I don’t know if I will be able to quantify it and give you a rubric where it can be like check the right number of boxes and I’m satisfied. I’m trying to in good faith explain some of my thinking on it.

PFC: So when it became clear that this proposal was not going to include a primitive, I found that pretty disappointing as well. But I think JMN and DE have explained and shown how the current state of decimal objects doesn’t close the door on decimal primitives any more than that door is already closed by other factors not having to do with the decimal In other words, I don’t think it makes the situation worse. And, I think if we want to move the needle on those other concerns that are preventing engines from adding new primitives, I think having a decimal object that then sees uptake is probably the most likely way forward that’s ever going to budge those concerns. So I kind of think, if the goal is to have decimal as a primitive eventually, it’s counterproductive to not entertain the thought of an object first, because I think that’s the only way we’ll get there.

CDA: We’re right about out of time. And I do want to read—I was waiting to read the statement from SFC until and unless JMN was calling for Stage 2. But I will read it now. SFC says I am happy with the champion's support for retaining trailing zeroes in the data model, which solves the long-standing i18n bug involving inconsistency between `Intl.PluralRules` and Intl.NumberFormat. I look forward to continuing conversations on exactly where we draw the line between full precision and normalization in the various operations. I explicitly support this advancing to Stage 2 from an Intl point of view.” Okay, with that, we are out of time. JMN, how would you like to proceed? We do technically have 15 minutes that would be available after lunch. But we need to move on to the next topic, now or in the next minute or so.

JMN: I understand it. It sounds like there was a block. So I don’t want to challenge that block. Did I get that right? Is that correct?

JHD: That is correct.

DE: Can we continue discussing this in the 15 minutes after lunch? I think that would be useful. I don’t understand some of the points of the block. And that’s important for us to get the reason for the block on the record.

CDA: So I think that’s fair. I’ll note that I don’t know that JHD’s position has changed since last time. His objection back in June.

DE: Sure. But we didn’t really hear the reason in much detail then either. I would really like to continue the discussion after lunch if we have those 15 minutes.

JHD: I also remain available between plenaries for the champions to reach out and hear more of those reasons, which hadn’t happened yet.

JMN: That’s my mistake. Sorry about that. I was focused mainly on working with WH and SFC to get some of the other spec details correct.

CDA: Okay. Would you like to dictate a summary at this point for the notes or prefer to wait until continuation?

JMN: I think I prefer to wait until continuation. I think we might get some more material there.

CDA: Okay. I have captured the queue.

## Avoid capturing lexical context in indirect eval

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/ecma262/pull/3374)
- [slides](https://docs.google.com/presentation/d/1Xko1Md81wXpUFvgH_nQVl0-DW9hyqlOTkZX3y7pImvg/edit)

CDA: NRO, are you there and ready for capturing—

NRO: Yes, screen share.

NRO: You can see my screen? Good. So this discussion about avoiding capturing lexical context in indirect eval it is about normative request in the repository. Before I actually get into the topic, let me make it clear that we’re only talking about indirect eval. We have these two types in the language. One is the direct one that can capture local scope, local variables, that’s only when you explicitly use with the eval() syntax right there. If you do anything else and if you use optional call or assign eval variable or eval through any expression that’s not just directly put eval there, then we have indirect eval. That doesn’t capture any lexical scope, it just a normal function. You can implement this in JavaScript by loading a parser, parsing the code and interpreting the AST in the context of the global scope. These examples on screen here are all examples of indirect eval. Also new Function is one of them and all the new function constructors. So if indirect eval is a normal function, how do functions behave? You can have a call from other realm and that is the same as the function and we can import from other file and still works the same. (inaudible) it works the same and call in the same function with the same parameter. The behavior of the function is not affected by this when it comes to normal functions. This is only true for things defined in Ecma-262, if we look at stack traces we can see the call function is traced, or we have things like `location.href` and object are affected by their caller to know what URL to use to resolve the URL you’re setting it to. So moving the call somewhere else might have—this is defined in HTML and not in 262.

NRO: And HTML has some wiring through eval and new Function in indirect eval to make sure that the special cases keep working. So, for example, HTML here if we have some iframe and we set `location.href` for the iframe but the other document where this is appearing. And this is also for example for tracking promise rejections and in this case because of this promise rejection in the second line will be the frame itself but the document in this code. This has to work through indirect eval. There is wiring there to keep track of who is the cause of this. And this was originally was just in HTML but since 2015 we have the wiring written down in 262 since technically it was not possible for HTML to get the context with promises. So since then, indirect eval or new Function will capture the script to run to pass it forward. That was in 2015. After a while, we added import to the language where dynamic import is the same text itself function. And it will resolve the specific that is important to the module of the script and it is starting from module A and starting from module B. This is like module A, module B are called from the referrer of the import. So when import was active and wait to check in which module does this dynamic import appear? We had machine for that back? It was get in the current module and what we introduced for HTML. However, this pierces through indirect eval, which means even when we have indirect eval that does minimal function should not capture any scope, it is capturing something for the dynamic parts. In this example here, we have like some folders some other file. If we have dynamic file (inaudible) it result in the current file. If we have indirect eval in this case I’m doing direct eval by sounding to variable F and then calling it, the first call would resolve to the current file because that’s where the call is happening. But then this is the case where eval stops being just a normal function. So instead of F we use (inaudible) from some other module and function to the call or arguments to it. The actual code is happening inside other folders/F and the dynamic folder for that. And this is to be clear for direct eval, these would be expected because direct eval should capture it to where it happens. Indirect eval was meant to be the function. It is a normal function except for the very specific case of having import pass through it. So the change proposed by the request is these two calls should have the same behavior. Indirect eval is the normal function and two different ways of calling the function should result in the same outcome. And the way to get to these is dynamic imports calls them inside indirect eval or new function would have no script. This is not new. This already happens. In some cases, for example, when HTML is running JavaScript code not from inside of the script and do dynamic import inside HTML in line with the handler will go back to having the referrer because there is no script or module. We have a constraint here that is we cannot break HTML. There are programs out there that rely on eval trading this behavior too. Like, treating the same eval codes which means that we can only change it for the specific dynamic import and not what HTML is doing. And is this all? Is this really the only case? There are multiple cases where get active script or module and get what the current module is called. One of them is import.meta. That’s not a problem because it is syntax error in eval/function. And other is host enqueue promise job or host make job callback and this is the module. And we have eval function that have to forward this for HTML. So the change here would just be to stop using this get active script or module for dynamic and instead just doing something else that doesn’t go to eval. So I would like to ask if there is consensus for the change. I didn’t include the slide on web reality. But the web reality here is that as far as I could tell, I have a repository I can share, Chrome and Firefox implement the ECMA 262 behavior and Safari does something different. I believe Safari fall back to the realm in some cases but not in all the cases and I could not figure out what fall back in some other cases. But it is not the script, active script on module. So there is like no consensus between implementations on what is happening here. The hope is this change is easily web compatible. Also because passing dynamic import is probably not that common. And so I will go cC1 through the queue now. I couldn’t figure out how to share.

USA: There’s nothing on the queue at the moment either way. Let’s give it a bit maybe. First, we have SYG on the queue.

SYG: I’m just kind of confused. This is probably just some clarifying questions first. What is the motivation for doing this? Did you run into bugs with the surprising behavior with different relative module path?

NRO: The motivation here is that lexical scope, dynamic scoping can—it’s not the bug that I run to myself. Dynamic scoping can cause confusion because refactoring and break and moving code around is safe except for the things that are like lexically captured like viables and the breaks were refactoring properties and real world case and the only dynamic scoping we say we have is in direct eval but then we found this case in which we have dynamic scoping in something else.

SYG: So I think maybe it’s a matter of perspective. The thing that you’re asking for consensus on is one slide where you pass indirect eval to a call UTL.

NRO: This or earlier?

SYG: That one is good. So the current behavior is that the foo.JS relative path would be different absolute paths because the call comes from a different iframe?

NRO: This is just all within the same iframe. The code just happens from different modules.

SYG: The code happens from different—

NRO: So what is happening here—let me go back to the other example. This example here, the last two lines in this example (slide 8). So this is all happening within the same realm, within the iframe or document. But the two codes F are happening in different modules. Specifically the one on the second last slide is happening in this module on the screen and the code in the last line is actually happening in other foo.js.

SYG: And in the indirect eval example—

NRO: This is all indirect eval.

SYG: What is the two different paths that get resolved in the indirect eval example and pass eval to the call utility?

NRO: So in this last two lines, the resolved paths are the two shown in the comment.

SYG: Not this example. The proposed change slide where you do let F equal eval and F of import.

NRO: This example. One at the top?

SYG: My Webex is not updating the slides. It’s still saying and showing your slide is this all? I don’t know if it’s me.

CDA: It’s on your end, SYG.

SYG: I’m on slide 9, that’s the intended slide?

NRO: Yes, slide 9. Did you see the slides 7 one second ago?

SYG: Yes, I saw slide 7.

NRO: Here in this example (slide 9), this is actually the same code I had there. I’ve just extracted the only two lines where behavior would change. So right now in this example screen at the top, like, without the proposed change, these just this example is not enough to tell what will happen because from this example we don’t know where the function is defined. But today the second dynamic import is resolved relative to wherever the call function is defined.

SYG: Okay. Today this will be relative to where ever the call function—the call utility function is defined?

NRO: Yes.

SYG: Why is that not dynamic scoping?

NRO: That is dynamic scoping. And the proposal is to get rid of it.

SYG: But indirect eval is like dynamic scoping all the way down. Why do we want to get rid of it cC1 for indirect eval?

NRO: Because indirect eval does not have dynamic scoping at all except for this case. It’s direct eval that does the dynamic scoping things.

SYG: Indirect eval is dynamic scoping in the sense that it’s at the global scope and you can have whatever on the global scope. You don’t know what global scope is running in. It’s the same as direct eval except there’s no scopes in between it and the global scope?

NRO: Like, each function has a pointer to whatever realm it’s running in. We use indirect eval is reading the pointer and not reading the pointer from—it’s not reading from where it’s scoped. If you grab eval from the different time frame and you call that eval in your own iframe, it will still use the global from its original iframe and not where the iframe where you’re calling it.

SYG: That clears it up for me. Thank you. In this case, I think I support this change but remind me again on what needs to change in implementations.

NRO: In implementations, there will probably be some bug in the execution context stuck saying these stuck frame has been introduced by eval and ignore it. Stop here when trying to look for the active script module.

SYG: Okay. I am unfamiliar with that part of the code. So I don’t want to promise ease of implementability or anything. I would to hear if other browser vendors have thought about this.

USA: All right. We have a clarifying question by MM.

MM: I just want to clarify, first of all, agree with NRO. indirect is completely lexical. Direct eval should not be thought of as diem in aic scoping but should be thought of special form same way as if then else is a special form and evaluates in the scope of the code it appears in that is a static thing. It’s not something being called. That’s it.

USA: Moving on with the queue, we have support from MM and next

KKL: and this change anticipates module constructor and behaviors in that context. My hope is that an eval can be confined to a particular realm and with this particular leak of dynamic scope, it allows code that is being run with the eval from a particular realm to sense information specifically the active script to records module referrer specifier base HTM is sensed to be outside of its sand box. So this is important for a native implementation of confinement in the same realm.

USA: All right, thank you. Next we have KM

KM: I guess SYG asked for feedback. I’m saying I don’t know. I haven’t looked at any of this in a while. I’m not sure. I guess my proposal if it was valid if we have consensus to do it, then do something what we do for Stage 2 and wait for two implementations to do it before merging it into the spec.

USA: Next we have DLM.

DLM: I’m responding to SYG’s question as well and not sure if this is difficult to implement or not and unsure whether—it would be a case or could see web compat problems with this. I don’t think we would be the first to implement this. I guess I would be more comfortable if I heard one of the other browsers say they were interested in running this as like a little experiment or something to see if we can actually encounter problems.

NRO: Regarding web compat is different behavior for browsers and hopefully that can work out. Given that the browser express implementability concerns, maybe I would change my consensus call to what KM suggested that was let’s consider these as a Stage 3 proposal. I guess Stage 2.7 proposal given that—and then come back next time. And then as soon as implemented with implementations we know it’s actually implementable, I will come back.

SYG: To clarify, 2.7 in this case would probably mean not just Test262 but also WPT?

NRO: Probably. I would have to check with the test with these or not.

SYG: My primary concern given this part of what I asked the motivation earlier is that this is—I agree with DLM was saying. This seems corner casey to me that means it’s likely to be deprioritized. After all the years we don’t have interop on the incumbent settings object that really weird thing and there’s a lot of corner cases there. As far as I can tell the demand for the interop for that part to have interop is not high and likely to remain interoperable and it feels like that and I don’t want to give false promises if we give consensus that will get done sooner than later.

NRO: Yeah, I don’t have an expectation here. I will answer your original question with the WPT tests given how it is the edge—very much depends on what the embedder is doing.

USA: Then that was it for the queue Nicolo. Would you like to ask for—

NRO: I guess now I’m asking for consensus for making this into a Stage 2.7 proposal.

USA: Let’s give it a minute. On the queue, we can see support by DLM for Stage 2.7 proposal. Also support by—you have it on your screen right there. By MM and SYG. And perhaps let’s wait a bit to make sure nobody is typing out a really long objection. That’s it, then. Congratulations.

NRO: Thanks. Just to clarify what this means for the discussion with the third, it means that that other discussion—like, that other normative change is not actually observable from just within 262.

USA: Okay.

NRO: That’s it.

USA: Also could you dictate a summary of key points and a conclusion.

### Speaker's Summary of Key Points

NRO: Yes. So summary: We have gone through a corner case for indirect eval containing dynamic import in which it captures the module resolution referrer from the module that is calling the indirect eval. We discussed ant how that is dynamic scoping that is like a refactoring hazard and how we can change that and instead use the same resolution referrer regardless of where the call is happening. There have been some concerns about implementation complexity and about how these are not a high priority for browsers given that we already have divergent behavior and there has not been any ask for converging. So this change has been converted from the normative pull request to the Stage 2.7 proposal.

### Conclusion

NRO: And the conclusion is that we got consensus for having it as a Stage 2.7 proposal. I just have a question. Do I have to create a repository or is it fine to just keep the request and nothing else? With its now proposal?

USA: That’s a great question. I guess that—

NRO: Let me rephrase. Would anybody be opposed to me just keeping this as a request?

MF: I would prefer a proposal repo for this. If it’s important enough to be made into a proposal, we should have a dedicated place for organizing discussion on it. We expect more than a linear pull request discussion.

NRO: I see SYG under the queue. I will make a proper repository.

SYG: When I was asked to do something that was normative PR, I made a proposal but didn’t, for example, set up a new draft spec thing and just linked to the already made PR as the canonical proposed spec change.

NRO: Thank you. I will do the same.

USA: Thank you for everyone. To everyone for the discussion. There’s nothing we can still squeeze in. So let’s take two more minutes for lunch and see you all in an hour and two minutes.

## Continuation: Propagate active ScriptOrModule with JobCallback Record

Presenter: Chengzhong Wu (CZW)

- [proposal](https://github.com/tc39/ecma262/pull/3195)
- [slides](https://docs.google.com/presentation/d/1FQNSpCdzkvcRg-yFBjUOqjrNAVHezfoVLjgK4cfEjIc/edit#slide=id.p)

CZW: Since we already got a consensus with encoder proposal and this change would not be observable with ECMA 262 since it was captured the module and so this is purely about the requirement that put host and HTML already didn’t match with this requirement and since they captured the active script or module HostMakeJobCallback. And that’s the change of the proposed change and you can see that browsers are not aligning in behavior in the reality and I would like to ask for consensus to change the host requirement to match what HTML spec says to not review the promise state by move this HostMakeJobCallback instead. We can go to the queue.

SYG: Clarifying row 1 that says HTML is the proposed behavior of this normative change.

CZW: Yeah, exactly.

CDA: Nothing else on the queue.

DLM: I’m just wondering if we should consider this as a Stage 2.7 proposal like we did for the eval topic? Just in that I’m speaking for myself, I’m not entirely sure about the implementation of this one. I don’t know. If other implementers are more confident about this, i’m okay this is normative change. If there is some uncertainty, I’m wondering if it is okay to take the same route we took with the eval.

SYG: Yeah, I agree with that for the same reasons basically. I just don’t know this corner well enough to really give a confident—on paper, the semantics seem more reasonable. But all things considered, yeah, for the same reasons and practically speaking, likely the only way that I or my team will remember to implement this fix is once we get some new test failures. So having tests as part of the pipeline here will be good.

CZW: Yeah, change that and ask for consensus for Stage 2.7?

MM: I have a clarifying question with regard to the discussion that we just had. You say the same approach we took to eval, are we talking about the semantics or are we talking about the process?

SYG: The procedural one where we convert this into a proposal, grant consensus for 2.7, do not merge it and then wait for Test262 and WPT tests.

MM: Okay. And the thing we’re thinking of going to 2.7 with is the first row on this table?

CZW: Yeah.

MM: Okay. So I don’t feel oriented enough to have a strong opinion. But 2.7 seems okay enough to me in the sense that we can revisit this if there’s a semantic problem as well as if there’s an implementation problem.

SYG: Well, MM, 2.7 I don’t think we should—we should not give 2.7 if we think there may be open semantics issues. 2.7 is we have discussed and agreed on the design but it is not yet ready for implementation until tests are in and once tests are in it's a pro forma kind of thing to then advance to 3.

MM: Okay. I would like to hold back on 2.7. I’ve discussed this also internally at Agoric and none of us feel really well implemented in the implications of this. I would like to postpone 2.7 probably until next meeting when we can better understand this. It certainly conceptually interacts with the semantics of eval that we just resolved well. So we also want to think about in that context. And I’m sorry that I did not approach the meeting with a good enough understanding to make a decision.

NRO: Yes, regarding type of tests, like I don’t know if there are tests in this but this is already behavior described HTML so adding tests in WPT is probably related—we should do it regardless of this proposal given those are tests sample that are already specified. When it comes to 262, there’s just not possible to test in Test262.

SYG: If it’s not possible to—sorry to interrupt.

CZW: This is a host requirement so it’s purely tests.

NRO: So this is host requirement so the main host is already violating.

CZW: Yeah.

NRO: To answer SYG, it’s technically possible to test in 262 but we have to require like the test’s hardness or to expose some method to check some function to check what the active script for module is because we cannot just rely on those provided by HTML because HTML does not respect our requirements in a way. So that’s what I mean by not possible to test in test262.

CDA: I think JRL had a similar comment.

JRL: NRO just answered it. It’s not possible to test in 262. This is like a W3C test or ECG test and not something that we would do.

DE: So seems like we all agree on the kind of testing that is needed. Those seem like good things to ask for before Stage 3 for the new 2.7 split. I wanted to suggest splitting this into separate proposal we don’t go through the extra editorial work of making a new repo and kind of formatting it differently. What if we just mark the PR as stages? So sometimes a PR is ready to go immediately, but I think at this point if we took PRs through the stage process and just when we get consensus on the PR, we’re getting consensus on like it being at stage 2.7 or it is at Stage 4. That could be useful. Of course, we can always jump ahead and just put something at Stage 4 and merge it when appropriate.

DLM: The burden of having to make new repo is not actually that high that we should worry about making the change to process here?

CDA: Yeah, so I know that’s more addressed to DE. But given that we have five minutes here, I’m not sure we’re going to necessarily come to an—

DLM: I don’t need an answer to that editorial.

CDA: Sure. And, yeah, not my intent to, you know, prevent the discussion on it, just we’re short on time.

KKL: Apologies for the question I would probably answer myself with sufficient research, but does this have potential intersection semantics with AsyncContext for us to prepare our reasoning?

CZW: This change is not—it has some overlapping with host hooks for AsyncContext. AsyncContext doesn’t depend on this change and the change put in by this PR can allow—well, the two proposals can rely on the same host hooks but they are not necessarily entangled.

KKL: I take that—I interpret that to mean they are potentially entangled under certain host conditions.

JRL: They modify the same host hook. The proposed changes here match exactly what AsyncContext current spec text would do. It would behave the same. Whatever is currently happening with chrome and Safari right now with these semantics is different than what asyncContext would do.

KKL: Okay. So AsyncContext would behave consistent with HTML as proposed in row 1?

JRL: Yes.

KKL: All right, thank you.

SYG: Clarifying if we can’t test this in Test262, row 2 means the behavior if you could observe get current script or context, is that what that is showing?

CZW: Row 2 means if the host implements ECMA 262 requirements correctly, it should be observed as row 2.

SYG: Oh, I see. If the normative requirements on the host hook was actually followed by some hypothetical host, that’s what it was showing?

CZW: Yeah, exactly.

SYG: Gotcha, thanks.

CDA: That’s it for the queue. You have two minutes left.

CZW: So seems like—still asking for consensus for 2.7.

MM: I’m not prepared to agree to 2.7 for this meeting.

CZW: Then can I ask for Stage 2?

MM: Yes.

CZW: Thank you.

CDA: Nicolo can you be brief?

NRO: We will be sure to bring this to TG3 to discuss—

MM: I couldn’t quite hear that.

CDA: Nicolo said they will bring this up at TG3.

MM: Excellent, thank you.

CDA: That’s great. The ask is for committee to approve this for Stage 2 and you had support from dLM for Stage 2, from MM for Stage 2. Anyone else with explicit support? I think from SYG, if i recall correctly.

SYG: Support is a strong word.

CDA: Fair enough. On that note, are there any objections for this for Stage 2? Not seeing anything new in the queue. Not hearing any voices. All right. So we’ll say it is Stage 2. CZW, can you dictate a summary and key points for the notes.

### Speaker's Summary of Key Points

CZW: Yeah, the change has consensus to Stage 2 with the first row as defined by current HTML specification defined and we will bring this topic to TG3 for further discussion. And tests will be added to WPT before we advance to Stage 3.

## Array.isTemplateObject for Stage 2.7

Presenter: Daniel Ehrenberg (DE) and Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-array-is-template-object)
- [slides](https://docs.google.com/presentation/d/1PtAFnHj7OxGMVekvChntoOJ6RzAly9iTGjUThrHQD9o/edit#slide=id.p)

CDA: Next up, DE and JHD.

DE: This is something that I’m working with JHD on as part of I think our shared interest in brand checking operations. So this feature marks a template object as a special kind of object. Just to review, when you have a tagged template like this, with the backtick, but then you have a T before, that’s a function that gets the funny frozen object passed as a parameter. But sometimes you might want to know if the thing that was passed was really one of those template objects. This can be useful for trusted types. So if you want to have a way to programmatically create certain kinds of templates or literal code or HTML but be able to verify it was literally in the JavaScript code, that can be useful for certain possible policies that are used to prevent code injection because if you also make sure that all the code you run comes from the server, then this string was passed down. So this makes it possible to have certain trusted type policies that might be a little bit easier to deploy. A little bit more composable.

DE: Previously we discussed whether this should have a realm-independent or realm-dependent brand check. The spec text is using an internal slot. MM has raised the possibility that we do this, instead it will return false if you get a cross realm template. So we considered this kind of proxy piercing. The template map version was kind of hard to understand the spec even if it might be possible to deploy it. So the current status of trusted types is it's going ahead without literals which I think is a little unfortunate because it won’t initially be as easy to deploy. But we can help them by adding this capability back.

DE: So the question is, should we care about distinguishing realms? I think for security—for implementations cross realm brand checks are slightly simpler to implement. Basically we would store a reference to the realm inside of the template tag so you do this check. Because the template map is not a real thing in implementations. As far as security, it depends a bit on the security model. So with the kind of trusted types security model, this is not really a factor when you have different windows and you pass things through postMessage, literalness won’t be propagated. There’s no risk of like a cross origin window injecting some literal thing into you. For ShadowRealms, with callable boundaries, that will prevent you from passing anything that shows as literal. When you have a compartment-based membrane, you will reuse realms. So the realm check won’t actually be that useful. If you do have a compartment system that does use a realm for compartment, it might be a little convenient to have this check be more strict if your security model depended on something not coming from the other realm. But first that logic can be inserted into the membrane and second among these other four use cases, it doesn’t really come up. I’m not sure if someone is especially promoting that deployment model right now. Out of simplicity, I would say—weakly prefer to stick with cross realm and we as a champion group prefer that. That’s the current proposal for consensus.

DE: For naming, the `array.isTemplateObject` is a slightly confusing name for people. It doesn’t really resonate with people. Even though it only returns true on arrays because it is template on arrays it does not ring for people because not an array operation. We want to call it Reflect.isTemplateObject. The other thing is maybe more serious making something on the ray if you’re going to build kind of a compartment SES environment, it’s kind of annoying to hang it off of array, because then you have to fork it for each individual thing. So that’s kind of assuming if the environment wants to patch the world to make it a realm specific check. So our options are to keep Array.isTemplateObject, to rename to `Reflect.isTemplateObject` or maybe it could be a global function. So global function might be easier to fork, but Reflect is nicely out of the way. In is kind of an advanced feature. I think it makes sense to think of reflection. That’s why we’re proposing Reflect.isTemplateObject. So Stage 2.7, you know, the naming outcome, I hope we can draw a conclusion today. If not, maybe could be 2.7 conditional on the later naming outcome. But is there a queue?

MM: So just since I raised the awkwardness issue with regard to Array.isTemplateObject, I just want to point out that `Reflect.isTemplateObject` is exactly the same problem. You have a different exportment that differs only in the member. The things, the only options that solve the compartment awkwardness issue is something that is per compartment, `globalThis.isTemplateObject` would be ideal. Another option that I don’t think anybody particularly likes to make a global just to show the principle `eval.isTemplateObject` is final because there’s an eval function per compartment as well.

DE: I’m aware that Reflect requires forking the Reflect object. But what we had discussed previously it’s much easier to fork a namespace object than the array constructor that is pointed to by the undeniable intrinsic array prototype.

MM: That’s true. Okay. I accept that.

DE: That was the rational for why this makes it less bad.

MM: I agree. It’s less.

DE: I think Reflect makes sense in a semantic way. That’s why I prefer putting it on Reflect than putting it on eval.

MM: I prefer the global.

DE: The global, okay.

MM: globalThis.isTemplateObject.

DE: Is that a strong preference?

MM: Compared to reflect? Certainly have a strong dispreference for array. But it sounds like we’re agreed on that.

DE: Yeah.

MM: I don’t know that it’s a strong preference.

DE: The reason that I disprefer a global more than I disprefer the eval dot thing is because I think that just kind of points people at it too much, it makes it look too much in people’s faces when they’re searching for APIs and reflect kind of illustrates this is a reflection API that you don’t usually use.

MM: I’m not able to form an opinion about Reflect in real time. I need to chill on it.

DE: Okay. Is anybody else on the queue?

CDA: Yeah, SYG.

SYG: This is more of a question directed at MM, I’ll first try to recap what I remember from when we discussed `Error.isError` and I’m trying to wrap my head around is there a design principle for when a brand check ought to be in your opinion realmful or realm independent? And if I recall correctly, what you said yesterday for `Error.isError` is in practical membrane implementations, errors are copied across the membrane. Is that why—

MM: No. Thank you for the question. This is a good thing to take a moment to clarify. The objection here, I mean, all of the issues around brand checking and all that would be relevant here if there wasn’t something bigger that’s overriding relevance here, which is whether this is a brand checking issue at all. The purpose of this is to make a trust decision. The trust decision as I think Matthew is going to be expanding on is really about the provenance of the template. Did this come from code that is code reviewed with the code doing the check? And if the template comes from outside that scope, then you want the test to fail because if the test succeeds, then it’s misleading the purpose of your security check. So that’s the overriding issue here. If that was not an issue, then all of the normal issues with regard to practical membrane transparency, et cetera, would still need to be examined.

SYG: Okay. That helps a lot. Thank you very much. I have some questions about that. But I would prefer to hear the rest of the queue first.

DLM: Thank you. So we discussed this internally and also reached out to some security folks as well. So we’re not fully comfortable with this at least in terms of its presented use case. It feels complicated and kind of easy to mess up in terms of getting trusted types set up properly and I believe having to freeze the object and then also get this test going. So this sort of complexity is a bit concerning to us and I think this might be error prone for developers. The other side of that then it makes it feel like a bit of a niche use case for the difficulty to get right and not used by the set of people. I guess moving to my question, I’m just wondering is this actually useful outside of trusted types or is this solely for trusted types and sort of motivation behind that question is if this is a niche use case we’re basically going to be adding a slot to every array instance as far as I can tell to be able to track this so everyone is going to be paying a cost to support something that relatively few people end up using.

DE: When you say a slot, what do you mean?

DLM: I’m assuming the going example of the JHD’s error work where we’re adding something to test the error instance itself whether or not it is actually an error. In this case I assume any array would then to have some memory usage attached to it to make sure it came from a template object or not.

DE: So, yeah, I want to talk about this implementation part, but then talk about the earlier parts also.

DLM: Sure.

DE: Because this implementation strategy is different from what I expected. For Error.isError, I thought you already knew whether something was an error based on however you’re representing its stack or whatever there. For this, I thought it could be kind of a different map, a different hidden class. It would be bad if every array took an extra word. I agree.

DLM: Yeah, fair enough. I will leave it there. So that is true. We didn’t fully look into implementation strategies. We just had concerns about implementation costs in general. I would also like to hear your answer to the first part of the question. Is this just trusted types or do you have use cases in mind?

DE: So your question had a few different parts to it.

DLM: Sure.

DE: So just to close out the implementation part, if we conclude this takes an extra slot per array in practice, that would be fatal in my opinion and we shouldn’t go ahead with the proposal. Now, I want to address what you were saying about difficulty using the API. Part of how this came up in trusted types was trusted types was going to expose a built-in policy option where it has a template tag and it can be used automatically to wrap HTML or script. So that addresses the ease of use. Then we have a design question about whether we want to expose this as a primitive in JavaScript or whether we just want to set the internal slot only for use in trusted types itself? I think setting—I would kind of be okay with either. But it feels more compositional to expose the primitives. That’s kind of the direction we’ve been going in with JavaScript and the web platform in general. Even if certain APIs are difficult to use and provide an important capability we provide that and accompany that by a wrapper that does make it easy to use. Do we have use cases that aren’t related to trusted types? So I think knowing whether something is literal is kind of related to CSP. I can’t really think of when you care about this that isn’t linked to trying to understand what’s in the original JavaScript source code. That’s kind of what the feature is for. There are many possible things in that space besides trusted types. Generally, for example, if you wanted to build a SQL library, so you want to prevent SQL injection and there’s an issue with string concatenation, you could make a SQL and verify that somebody called the library to instruct it as a template tag rather than faking it. That would only kind of make sense if you had a user of your API that you really don’t trust that you think is going to hack around you. I’m not sure how realistic that is. But that is an example when you might want it. That’s just off the top of my head.

DLM: That’s fine. Can I just—I think you answered this, but I just—I blanked for a moment. What was your response to the concern about this being complicated to write in terms of making sure that you have trusted types set up and another step in there that I’m blanking on, I’m sorry, and then using this new API?

DE: So I thought Mozilla was in favor of trusted types. It’s true that trusted types being hard to set up is a concern with it that one might have. If you think trusted types is a good thing to do, then I think this fits in with that. I don’t know all the details of Mozilla’s position.

DLM: No. Neither do I. I’m doing my best to express it as good as I can. But obviously I don’t know very much about trusted types and something that I need to educate myself on. I don’t want to take too much time on this. Thank you for your answers.

DE: So we don’t have to go to Stage 2.7 today. How would you like to follow up here?

DLM: So I think based upon my internal discussion, I would like to get a more thorough review from security people and then follow up. I think I can get that done in time for Tokyo. But I don’t think I’m comfortable with 2.7 today.

DE: Okay. That sounds great. Previously I thought Mozilla had been in favor of—I could be wrong about this — of trusted types containing from HTML or whatever built-in tag that it would have had. The reason that it was removed wasn’t any of those concerns, it was because there was an attempted implementation of the per-realm brand check and it didn’t work out. Not that that is not implementable but that that particular one didn’t work. It was kind of too high overhead.

DLM: This is really outside of my area of expertise. What I can say is that, yes, we are in favor of trusted types but we have some concerns about this particular JavaScript API and I will do my best to get those resolved before the next plenary.

DE: Okay, great. I’m happy to be in touch if that’s useful.

DLM: Sure, thank you.

CDA: All right. Noting we have less than ten minutes left. SYG, did you want to—

SYG: Please skip me.

CDA: Mathieu.

MAH: Yeah, I would like clarification on the use case. I mean, I got a little bit more detail here. But from what I understand, this is a case where we expect authors of trusted types to use a type of the object, a template tag, and make a decision based on the type to assume its provenance. Is that correct?

DE: Yeah.

MAH: That really seems contrary to what trusted types is trying to accomplish, which is that if you have a capability of executing something, you get to execute. Here we are back to—oh, I recognize that this seems like a recognition problem. And I don’t understand how—

DE: So the constructor, the particular template tag is the thing that conveys the capability to make a literal string that’s treated as code that can execute. It still is kind of capability-based because in addition to checking that it’s one of these literals, then it will create some other object that has the brand that’s conferred by the tag.

MAH: So if you need to have the tag itself, why can’t the tag itself convey—

DE: Because we don’t have the primitive in the language to check literalness. So as I was saying to DLM, we don’t actually need to have this primitive in the language. We can just say template tags have this extra internal slot tagging them as this. And that would be enough. Previously, the trusted types effort failed here because they tried to follow our advice about this check being realm specific which they didn’t manage to implement in an acceptable way.

MAH: I still don’t understand that. I think what you’re saying is that the tag itself would be checking for the type.

DE: The tag checks for literalness and returns something that has a type. Later when you try to eval something, that will check that it has the type. So we’re not going for Stage 2.7 this meeting. We discussed this at a previous TG3 meeting and I will bring it back for another TG3 meeting.

MAH: Sorry, I might have not been there that meeting.

DE: Yeah, I don’t think we went over all the context. I think we focused on the realm check and acceptability of that and that was maybe more focused on the membrane security model than the CC1 web security model.

MAH: Thanks.

CDA: All right. KM is up with slight preference for Reflect as well. LEO?

LEO: Hi. Yeah, I think JHD was just answering my question here. I was looking for any precedent as reflection like should we actually have it—if it goes on Reflect, should it be captured by proxies as well?

DE: It should not be captured by proxies.

JHD: I replied in Matrix that in a previous plenary in the getIntrinsic discussions we got consensus from the group that Reflect would no longer be limited to proxy traps. Nothing yet has landed that isn’t one. But there is no longer that barrier.

LEO: Yeah, if that’s the case, my pet peeve is no longer sustainable and nothing that I can complain here. I had a slight preference for the global name for this case but I don’t think it’s a blocker. Thank you for capturing that on the notes.

EAO: Thinking about this from the sort of attacking point of view, as I understand it, we want to be sure that whatever we think is a tag template, that the array of strings is indeed coming from a tagged template, this means that in order to kind of preventing an attack where somebody is providing an array of strings that they generated otherwise and would like to have that be treated as whatever we are trying to trust. So what I’m wondering is that does this check really do anything? Because if I’m an attacker and I can provide an array of strings, wouldn’t it be likely that I would also be able to provide an array coming from another tagged template literal that I’m providing and that this would kind of pass through this check without any issue?

DE: So imagine that you’re a software developer on a platform that has, you know, eval blocked and you’re trying to ship some code. And you figure out something that you could do if only you had access to eval. So you could then construct some code that does this thing of making this array and freezing this object just to get your thing out the door and you say I will fix up the security thing later, that’s the kind of thing that this would defend against. I see where you’re coming from that this is maybe a little too advanced and there was actually like “isTemplateObject polyfill” in quotes that some people at Google had made that does just check is this a frozen array that looks like a template tag? JHD took that out of the repo. I think we’re both offended by the inaccuracy, or at least speaking for myself, of that polyfill. But in practice, it might work. It doesn’t work against that threat model, but to get the code out the door and not worry about the security policy right now. But we’re not defending against this arbitrary attacker because you’re already running code. But this is like the point of trusted types anyway. I mean, trusted types at the most basic level, it makes it so you can’t just throw strings around everywhere. So maybe just making it more annoying is enough. But the thing is that in practice, people make these policies today where they compile their whole program, they put all the strings together into one place and then they have this function that checks is this one of the set of like all the strings? And that is unfortunate. So that policy is sort of completely correct. But it requires this weird compile step.

CDA: We are at time. I’m noting MAH's comment sounds related to the question of provenance and maybe discuss that in TG3?

DE: What questions on the queue?

CDA: One last thing from KG.

KG: I’ll ask in Matrix.

DE: If you could both state your questions even if you think it is redundant, I’m curious what it is.

KG: You just said people are compiling the whole programs and putting all the strings in array. Who is people?

DE: That’s something that I read on an issue tracker. I don’t know if anybody is actually shipping a site that way. I may be wrong there.

KG: Okay.

DE: What was your question Chris?

MAH: It was mine. I was just clarifying that EAO’s question is related to mine regarding provenance and we should have a question in TG3 for the trusted type use case there.

CDA: Could you dictate a summary and conclusion for the notes?

### Speaker's Summary of Key Points

DE: We discussed this proposal and one thing that the committee agreed on was the name `reflect.trusted` types—sorry, Reflect.isTemplateObject. On the cross brand check we didn’t hear any particular concerns. The two things to follow up on are for SES folks is figuring out—talking through what it’s trying to do and with Mozilla folks also understanding how this relates to their goals with trusted types, as well as implementation costs and complexity for users. Are those the two things that I should follow up on or is there anything more that I should follow up on? Is it accurate to say that we’re sticking with cross realm and we agree on the `reflect.isTemplateObject` name?

MM: I’m not going to—so I’ll go ahead and say I’m agreeing to the naming. I still think the cross realm thing for the reasons you stated, it’s not fatal to do cross realm but I still think it’s misconceived. And as I thought I pointed out in the last TG3 meeting, given an implementation of the cross realm check, there’s a trick that turns that into a per-realm check that’s essentially free. So I don’t believe the implementation impediment either.

DE: Okay. So we will leave that open as well. So we have concluded on the name change and we need to—I mean, given that trick that you said, the cross realm check implements a per-realm check so it—

MM: It requires the trick to be moved into the built-in so it doesn’t expose a cross realm check.

JHD: So we can discuss this more another time MM. It was also sort of ergonomics and consistency thing given that almost everything else in the language is—

MM: This serves a different purpose. The purpose that it serves is broken if you let it say true for code that’s not co-reviewed with the code doing the check.

DE: Okay. I listed here what I thought were the four kinds of use cases. Let’s discuss in TG3 if there’s a fifth usage mode where that does end up being useful. As well as MAH’s kind of broader question.

MM: I think it’s related to MAH's broader question.

DE: Good. Thank you. We’re still at Stage 2.

## Continuation: Atomics.pause for Stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-atomics-microwait)

SYG: Thank you. So my plan for this continuation is to kind of zoom back out and to give the motivation for why there was an iteration number parameter to the pause method to begin with to try to clear up some of that confusion and hopefully to reiterate the broader goal that I was trying to achieve. And then go into a PR that hopefully addresses the confusion around that parameter and then finally MLS from JavaScriptCore also raised some concerns I would like to discuss in committee.

SYG: Okay. So zooming out for why this `Atomics.pause` method has a parameter at all instead of just a no parameter null function that does a quick CPU pause, so if you look at a CPU or look at lower level language like C++ that allows in line assembly you would use intrinsic that doesn’t have arguments that executes a pause or a yield instruction. So why don’t we just also do that in JavaScript? My motivation for why to not do that is because JavaScript has highly variable performance, meaning that when you are running code in the interpreter, it takes a very different amount of time than running the exact same code in an optimizing JIT if the code is hot in the case of a loop arguably is hot and then optimized and then once optimized it runs faster than the interpreter. If you’re writing the look and writing something with the spin loop, you want the amount of time that you pause the CPU to try to get a contended lock to be mostly the same. You want that amount of time to be mostly the same between the interpreter regardless of whether your code is executing in the interpreter or executing in the JITS and if we had a single method with a single pause, that would make that more difficult. So you might think, well, okay, you still don’t need a parameter to do that. You could, for example, just say once it is optimized in the optimizing JIT `Atomics.pause` in the optimizing JIT emits ten pauses. But that makes it difficult to implement backoff algorithms which are often present in spinwait loops. Those issues basically motivated the design of taking a parameter that shows—that signals to the implementation how many times have this particular spin wait loop paused. And then engines can use that parameter to scale the number of pauses in the amount of time to wait if it thinks it’s a good idea for the particular CPU depending on both the value of the parameter itself and what tier it’s in. So that’s why this thing exists. And after chatting with folks, I am happy with the semantics that WH thought I was presenting which is that the larger the number here, the longer the time paused.

SYG: So I have a PR that spells this out. This is Number 11. Hopefully this sentence is less confusing than the one I previously had. So larger N means longer time paused. This PR also adds some more informative notes about things like, you don’t want a user to wait an arbitrarily long time obviously. So it is recommended that implementations have a static internal upper bound on the maximum time paused on the order of hundreds of nanoseconds, this is designed to be very, very short. And if the user wanted to implement back off strategies, they could do so by manipulating this n parameter. If they want linear back off they can pass linearly increasing N and if they want reverse back off which is my intended original semantics where later iterations would wait shorter, they would simply count down instead of count up. So this one parameter is pretty versatile and I think does cover all the use cases I had intended for it to cover and hopefully is less confusing if we directly make it control the amount of time waited. But I do have to caution again, since the only thing that it controls is timing, and timing is not technically observable behavior. There’s really no way to test for compliance but we will of course have a sentence that says what the expectation is. Before we move on to the rest of the discussion about the concerns from JavaScriptCore, I would like to go to the queue to see if there’s any questions about this clarification.

KM: So I guess I have a question whether the timing thing, are you also—you know, timing can also change if your code is instruction cache or heterogeneous SOG and high performance cores or low performance cores you can have slow execution on the loop on the one high efficiency core. Are you just worried that the interpreter would still have a more significant variation than even the slow core? I assume the answer is yes but I just wanted to clarify.

SYG: My intuition is yes. I don’t have a lot of experience with heterogeneous cores. I don’t know how heterogeneous we’re talking about with the efficiency cores. Yes, you’re correct there’s certainly a lot more clauses of variance in JavaScript performance than just the tiering.

KM: I didn’t mean just in the tiering. I went for a C++ developer even if you’re not writing in javaScript, you still have to consider at least today on specific platforms that you might be—your system might have a heterogeneous core and you could be running on a low—a very high efficiency, low performance core?

SYG: I don’t have personal experience with that. I mean, I don’t think you deploy different binaries depending on the core because it’s automatic. The code could migrate to the efficiency core or stay on the high power core. I don’t know what the best practice for that is. I don’t quite know what the question is.

KM: I guess it was a question of whether—my original question is whether you think that’s more significant than that, but it seems like the answer is it’s not clear.

SYG: Yeah, I think that depends on the chip, right? But the tiering is kind of like a known quantity for developers of VMs.

KM: Yeah, totally. I just mean like do we think this would be more significant than—being in the interpreter would be more significant than migrating some C++ code to an efficiency core?

SYG: Right.

KM: Because I agree there’s—I don’t think any platform provides a way to know which core you’re on. I don’t think you ship a different binary or anything any way. I don’t know anybody doing that. I wonder if it’s even necessary.

SYG: So I think the general form of the question is if you’re running somewhere where this doesn’t do anything for you, then you literally would implement this to do nothing. And speaking for V8, what I would end up doing is like in the implementation of this method, there would be a bunch of IFDEFs being on architecture and if there’s X 86 that are heterogeneous and it has something. On the M chips I won’t do anything until I see evidence to the contrary that is helpful or something.

KM: Okay, cool. That’s fine. I was trying to understand your thoughts there. Thanks.

CDA: WH.

WH: This looks good to me. You have some minor typos in here. The one question everybody will have is what the constant of proportionality is. If you’re scaling up either linearly or exponentially it doesn’t matter. If you’re scaling down, then it’s not clear whether a value of 10 means 10 nanoseconds or 10 microseconds or what.

SYG: That’s a great question. I think there will be—as I said, I think all implementations will have an internal static cap basically. You can’t emit 2 to the 53 pauses, that will be bad. So I think to be safe given that the full range here is integer number, you would start counting at like 2 to the 53 and like count down and then let the internal cap kind of somehow do that. Like, I don’t know what other reasonable upper range to start at is if you want to count down? I’m hesitant to say something like implementations can give specific guidance. But that is not something we want to commit to either.

WH: Yeah, well, users will—anybody who wants to count down will face this problem. I’m not one of the ones who want to count down so I don’t care as much. But folks will reverse engineer what implementations do with this. And then there will be the issues if you have two different implementations with radically different constants of proportionality.

SYG: I recognize the risk. I’m not sure how bad divergence is given the amount of variance in the system otherwise. I recognize that. And I take the point. It could be that it is just unrealistic to expect counting down to work, and then we further restrict this with guidance that says you count up.

WH: I’m glad you got rid of the sentence that says that the user is expected to do something. Users will do what users do. We can’t write a spec that says that the user shall do this.

SYG: Fair.

WH: Thank you.

KM: I guess in my experience with most of these kind of spin waits, especially for like a spin lock, like spin lock into park, they tend to have a pretty small count any way. So if you had a cap that was like a thousand, that’s going to be bigger than anyone is ever going to count from which I think is the most common use case for a spin lock it’s not clear that you want to continually get slower and slower any way. So I don’t know. It seems like you only ever want to count up if you’re just doing the completely idle spin wait. You wouldn’t want the time to get smaller and smaller the longer you spin forever. I agree with the overall point, I guess. I see your point.

MF: So you said earlier that you expect the user to be able to implement varying backoff strategies using this parameter, but my understanding would be that that would require a constraint on the parameter to be linearly proportional to the number of waits. So if it was non-linearly proportional, the parameter would have a non-linear effect. From the text I only see a monotonicity guarantee and not a linear guarantee. Is that an oversight or am I misunderstanding?

SYG: There is no linearity guarantee.

MF: How as a user would I implement and do linear backoff?

SYG: You signal the intent of increasing values of N. If the interpretation wants to increase N in the nonlinear matter you’re out of luck for the implementation because it decided the best internal thing is never to give you linear backoff. But your code communicates the intent that you want linear backoff. You cannot guarantee linear back off. You can guarantee this code will always have linear backoff because the performance variance of JavaScript is just too high.

MF: How would implementation distinguish between me trying to communicate polynomial back off to n back off.

SYG: N is linearly.

MF: Over at least three invocations.

SYG: You have to see enough to notice the pattern.

MF: That doesn’t seem great if we’re just trying to—if there is a loose connection between what the programmer is providing and what the implementation is actually doing, maybe the backoff strategies should be communicated more directly alongside this number.

SYG: I do not want to expand scope of this to do research of backoff strategies and then pass like an options bag or something describing that. Like, the cycles to check for that would vastly dwarf the number of cycles to wait.

MF: That’s fair.

SYG: I think that would defeat the purpose of this API.

MF: I don’t think that the number alone is effective at communicating that.

SYG: Yeah, that’s totally fair. But it’s just like even if you take a time stamp, for example, the number of cycles to get the time already dwarfs the amount of time you want to wait. There’s very little to work with.

MF: Okay.

EAO: Right now, the range of values for N dot are conceivable are large 1 or 2 to the power of 53 and my sense is it would make this much more predictable from the developer point of view if you want to count down? The maximum N is much less like a thousand or so and a thousand and 24 would also make sense.

SYG: It is just going to be capped anyway. It is up to the implementation to make it predictable or not predictable. If it’s capped at a thousand doesn’t serve an advantage.

EAO: What I mean if you want to count down and you start from 2 to the power of 53 and then minus 1 and minus 2 and minus 3, the whole range there, is kind of huge. So the step size is really difficult to imagine how do you implement that ever and what does this mean?

SYG: So now that you say this, it occurs to me when I wrote this new PR, it did not occur to me then but it occurs to me now the reason this is nonnegative because the original intention is you pass the iteration count that would also be increasing positive. There’s nothing preventing us from giving it the full signed integer format and you simply count down by giving negative integers. How does that sound?

EAO: I like that.

GCL: I’m happy with this overall. I just wanted to put that out there first before asking the question. So it sounds like there’s a lot of complexity over how this parameter is interpreted. And if I were writing something that spins in this way in like C++, it would represent this with like how I—like you said, there would be inline assembly and I would use the instruction i want. And I would just—like, the instruction itself is not parameterized with the iteration count. You just invoke it the number of times you want to invoke it or in the places you want to invoke it. Why does this function not behave in that way?

SYG: For the reason that I led with this session with. That there’s too much variance in javaScript performance because of interpreters and JITs. It is reasonable to have that performance mental model that you say for C++ if this thing were in the optimizing tier. We would inline calls to `Atomics.pause` to a literal single pause. In the interpreter the call overhead is huge.

GCL: Thank you.

SYG: Because of that built in variance it’s very hard to predict and impossible to predict basically I think we can recoup the predictability with this. Going back to this, in C++ this wouldn’t be the single call to pause, this would be an inner loop that backsoff how many times to emit pause.

LCA: So I had the same question as some other people with the counting down. I think that’s mostly answered now. I like the idea of starting at zero. Alternatively I also like starting at thousand and counting to zero. I do wonder if you think that an engine is generally not going to have the value that you give it as truth or rather me use multiple of these after each other to infer you want to do exponential backoff or whatever, why do we need the parameter at all? Can’t the engine determine that you called this instruction for the third time and instead of giving you control over what backoff you want, it just has one of the backoffs internally? Because it feels to me like what you’re saying is actually the engine is not going to generally care about what you tell it and instead it’s going to do its own thing any way, but maybe I’m misinterpreting that.

SYG: I think the engines would appreciate an intent even if it chooses to not follow it. But it’s a fair question why doesn’t this track some internal thing by itself? And indeed some VMs that this CRL does track this internally count internally but that is more complication and I think I would like fewer heuristics for things like this in the engine. Like, it seems reasonable to me that something like script in would want to communicate whether it wants linear backoff or exponential backoff and if you only infer it doesn’t has to choose and doesn’t know the spin wait loop the user is intending. It’s not like a categorical distinction because the engine has to do heuristics and I think this feels a better chance to let the engine try to do what the user intends to do.

LCA: Okay. So I guess what you’re saying is the heuristics will be there anyway. But rather than specifying all of the possible backoff strategies beforehand, the engine decides whether it can match the pattern that you’re giving it to a backoff strategy that it implements and then it uses the backoff strategy.

SYG: I mean, this I just tells you how many times it’s waited basically in this loop. If it wants to—sorry, that will just muddle things. But more or less, yes.

LCA: Okay.

CDA: WH.

WH: In response to this: The implementation just gets a call to `pause`, it doesn’t know whether the user is pausing in the same loop or whether they went on to do something different and then are starting another backoff loop or if they’re ping-ponging between two backoff loops and interweaving them.

LCA: With the thing that SYG said where the engine could determine with some heuristics based on the parameters you’re giving it whether it’s linear or exponential backoff would have to make the determination. You’re saying that’s not possible, then.

SYG: There’s more. I think WH is saying I didn’t really want to take too much of a tangent here, but if you don’t pass in I directly, if you don’t pass in any kind of number directly, I think the heuristics to be fully robust would need to be somehow—needs to know the cord sign and needs to know the context switches and needs to know did it switch threads? Did it pass I directly even if two threads were hammering in the spin lock and their Is are already thread local and separate Is and you get different Is it does a heuristic and the last call is on this thread and looked like this number of cycles is a go and there was no context switch and therefore we should change this backoff strategy. It’s just more complicated heuristics. Does that make sense?

WH: My point was simpler than that. You call `pause` until you actually get the resource you want, and later you start waiting for another resource. So you start calling `pause` again but now you’re waiting for something else. Without a parameter the implementation wouldn’t know that unless it’s trying to dig into your program to see what is on the stack and who is calling `pause`.

CDA: We are past time.

SYG: That was 30 minutes, really? Okay. Unfortunately if we’re out of time we didn’t get a chance to go into MLS’s concerns. So let’s see. To capture for the notes, my plan is to make a change to this PR to allow the full signed range of integers to allow a more natural way of counting down. I will come back at the next meeting and have discussion with Michael’s concerns but to anticipate one of his questions on the queue, I will also add a thing here that makes it basically contingent on the rest of—sorry, that it’s not a side channel. There’s a question about is this a side channel? It’s only a side channel if you can observe the timing. You can only observe the timing if you have multithreading and for the web at least that is cross organization thing and this is no different from that. But I will come back in Tokyo. Thank you for the discussion.

MF: I don’t know if I should make a point of order about this or not. Should we be demoting this proposal?

SYG: Why should we be demoting this proposal?

MF: It’s currently 2.7 and going through major design reconsiderations.

SYG: Yeah, okay. I think these are things that—I mean, I feel a little uneasy because the point of confusion is cleared.

CDA: In any case, we need to move. So I don’t know if we have time.

DE: I think we have to decide whether or not we’re demoting this. I oppose demotion because I think this is a very minor editorial point and we should continue to affirm that this is a good proposal.

MLS: I somewhat disagree. Stage 2 affirms it’s good in the language. I don’t think 2.7 conveys that.

MF: Strongly disagree with DE that is editorial considering significant—

SYG: Strictly speaking again this is editorial that it is not observable behavior. We’re talking about expectations here of—

MF: We’re considering changing the API.

SYG: We in fact did not change the API after clarification, it still takes the number parameter.

???: That’s correct. It has not changed.

MLS: It changes semantics of the API.

SYG: But the semantics are not observable.

WH: Negative numbers are observable.

SYG: That’s fair. I’m happy if the core reason to demote this is I want to expand this to count negative numbers for counting down, then I accept that as a reasonable API change thing to demote to stage 2 but like I don’t know. Like, these are fairly—like, we change stuff all the time. Like, the spirit of this proposal has not really changed. The scope has not really changed.

DE: I wouldn’t block demotion. But I think it’s important that we figure out how to deliver on this proposal.

CDA: Let me ask this question: What happens in October? Like, if this goes—if we say we want to move this to 2, is it coming back in October for 2.7/3? Because if that’s the case—

SYG: Regardless of the stage it ends this meeting at, I plan to ask for Stage 3 in October. I will update the existing Test262 tests that have already landed to accept negative numbers.

CDA: Okay. So that makes sense. What I’m getting at is what substantive difference will it make whether we move this to 2 or not at this point for this specific proposal?

SYG: I think that depends on how delegates interpret how much signal a particular stage sends?

MM: I favor demotion. I don’t think it needs to slow down our progress. It sounds like we’re all agreed on that. You know, the overall progress towards landing this. And with regard to the signal, you know, signals—on this one, signal will get misunderstood in either direction. If we don’t feel like we entered this with settled semantics, then to stay with 2.7, sYG corrected me earlier when I was thinking of allowing 2.7 on something before I was confident of the semantics. SYG was right to stop me from agreeing to that. I think that’s the case here. We should not dilute the meaning of 2.7.

SYG: There’s a narrow legalese point that I keep making that people are not responding to. This is not observable semantics. What is the argument that this is a semantics agreement?

LCA(?): The negative number thing?

SYG: Okay. Right. The negative number thing is fair. But the actual disagreement is not the negative number. It’s the timing which is not observable semantics. It’s weird if the goal you want is to demote because the subtantive disagreement is on timing but that is not a semantics disagreement.

LCA: If absolutely no semantics attached to the argument, there would be no argument. I don’t agree with you. There is definitely semantics.

CDA: We are going to need to move on. We’re well past time.

SYG: I’m not asking for demotion. Some people would like demotion. If we move on, I don’t know what it means.

### Conclusion

CDA: We neither have consensus for Stage 3 nor Stage 2. So I say we just call it and let’s move on to the next topic.

## Updates from TypeScript: deferred and immediate

Presenter: Daniel Rosenwasser (DRR)

- [slides](https://onedrive.live.com/?authkey=%21ANzaoMgiLDZwOCw&id=5D3264BDC1CB4F5B%216170&cid=5D3264BDC1CB4F5B&parId=root&parQt=sharedby&o=OneUp)

DRR: Great, all right. Let’s get things kicked off. Hi everyone. I am Daniel and work at microsoft on the TypeScript team. Today I’m here to talk potential TypeScript syntax and not a proposal for anything related to, you know, adding features to ECMA script or JavaScript but this is more of an update here to raise awareness within the committee of some work we’re doing on our side. Understanding any possible concerns. And if this is something that you all find useful, then we can do more sorts of things like this in the future too. So for some background, TypeScript has what is called control flow analysis for types. So I am assuming a little bit of TypeScript familiarity here. But the concept is that if you say that a variable has a type, for example, let’s look at padding in this example, padding is declared to have type string or number and when we reference it it is going to be string or number. However, that also means whenever we’re expecting something like a string, we should get an error, right?

DRR: Now, we can add some checks that actually affect the type, the observed type in different locations by performing certain code checks. So, for example, what I have here is I have an if block. The if block performs the type check and says if the thing is the number and then within the block padding is observed to have the typed string after the assignment and then after the entire if block, when we join all the different cases together, when the thing is a number, we basically over in the type to be a string and when it was a string, it was already a string and we join it together and padding is observed to be a string. There’s no TypeError anymore, right? So this allows TypeScript to model existing JavaScript behavior without having to sort of contort yourself into writing very, you know, other sorts of polymorphic checks and stuff like that. As long as you’re writing canonical JavaScript to keep up in places and follow the type checks in run time and model that in the static analysis that we do. So our control flow analysis is good, but it doesn’t catch all errors. That is because our tech analysis is limited by constraints around, you know, performance, right? Being able to do these checks in a pretty speedy way. Obviously, you can’t model all sorts of errors, because there is all sorts of limitations around—around basically being correct and complete. So if you were truly striving to say, like this thing is always accurate, but never gives you access errors you have to solve the halting problem. So what we do is take an optimistic approach. We assume that every, that most variable reads within closures are actually just reads. And writes typically never invalidate the assumptions of the control flow analysis. That usually matches what people are expecting when they write their code.

DRR: So concretely, what that means is if you have an assignment and a function, and the function actually tries to change the type of a variable underneath the cover, like basically pull out the rug from underneath you, we don’t assume that, that invalidates the control flow analysis that we perform. Right? So basically the way you can think of this is as is all control flow analysis is single order or top level where the function is declared. So for example, here we have X of time string or number. We are assigned a string. And TypeScript is actually okay with his code. It will stay upper case is going to succeed. It doesn’t have any issues with this, it doesn’t think it is actually a number. But runtime, when you actually run this thing it is going to cause an issue. Because what is happening you call sabotage, that over writes the value of X with a number and this thing doesn’t work. In practice that is rare. Other type systems use the opposite approach. Flow takes the approach saying any side of enclosure is going to invalidate all narrowing once the thing is called. And people don’t, and the feedback that we heard from a lot of people who use is that, it tends to be very, very frustrating as well.

DRR: So again, this is what most people have found usually checks the boxes for what they’re looking for. And it’s because most of the time that optimistic analysis is, it does model like the real world. You typically don’t try to remove capabilities. But there are some common exceptions. Right? One is where you try to say, all right, I’m done with the variable, unset the state and say it is undefined or null or whatever. Or when we would try to stack other analysis on top of this sort of thing. So the specific example, maybe a motivating example is: Let’s say that you’re trying to calculate the type of an array, the underlying element type, right? This is sort of a simplification of what a lot of JavaScript engines will do further As, they will do like heterogeneous or object version of this thing, and one that models int32 or an integer or something like that.

DRR: So let’s say we have an element type and it is modeled by four different string intervals that are possible. These are all valid types in TypeScript. So maybe you have an initial variable that is of type unknown or has the value unknown, the string value unknown. And then, let me get the laser pointer, unknown. Then you loop through a bunch of elements of the array and try to basically say like given the current type recompute what the type is and reassign it over time. And then later on, you check, you try to make a decision based on the type of the underlying elements. So, what TypeScript, this works fine. You basically have this, we’re able to analyze this, we are able to basically say, all right. There’s basically no issue with this code so to speak. But what happens if we try to switch this for loop into a for each? So, what happens is this, when you do that, we now start to error here. Because we say that we have this other analysis saying, hey, we don’t ever see the type of, or the value of type ever change so that we think that the value is always the string literal unknown. And that’s because even though there’s this assignment in this closure, we sort of just view it as, like I don’t know, we basically don’t perform analysis within closures, we don’t factor that in today, right? And so that’s, that’s one of the places where the so to speak optimistic view of the world kind of falls over.

DRR: So we had this idea of what if it were possible to expand this a little bit and do better, at least in the certain class of constructs? And specifically, the idea was if you ever observe a function expression as the argument of a call, you could consider that as a possible branch of execution and say that body is a possible branch proceeding post-call. So basically, if you’re trying to figure out what post-call is dominated by, it is dominated by precall, this is always the case, now it is also dominated by now body. I guess, dominated is not the right word, but basically it is a possible antecedent. So what that means, you basically in the previous example, now say: Type is actually, type actually has a possible assignment in that for each so everything would just work. Now, the idea is that this would only be syntactic. Right? Syntactic. Right? That is one sort of limitation. But it sort of does capture quite a bit in terms of what people typically write here. It also sort of reflects on what other languages do in this space, too, where you see other languages that have the concept of the trailing block as the first class concept of adding that to control flow. But it also does mean that if you refactor this thing to be, you know, to a constant, take the function expression and move it to a constant or variable of any sort or just turn it into to function declaration, this thing just couldn’t kick in at all. So I guess quickly, WH, you had a clarifying question, can you—if you want to ask?

WH: Yes. On these slides are you sketching an analysis that an implementation would do or is this intended to be user code?

DRR: This is intended to be user code. This is some user code a person wrote. The idea is that we want TypeScript to not provide, not to issue an error here. Because if a user wrote something like this for loop, they don’t get an error because the type system can see an analysis at the same scope as the declaration of the variable. Whereas if you capture it and then perform the assignment, currently our type analysis does not dive into the function itself.

WH: And in this case, TypeScript wouldn’t see the mutation of `type` and think that `type` is the constant “unknown” and that `if` statement is unconditionally false — that’s what would happen?

DRR: Exactly. That’s exactly what happens here.

WH: Okay.

DDR: And so, it issues this error, even though that’s not correct. It is trying to be helpful, but unfortunately, this analysis doesn’t factor in for the case. You will actually potentially assign here. I also—I also see sort of a, it seems like a clarifying question from SYG, too.

SYG: I’m told to wait, I will wait for the rest of the presentation.

DRR: Okay. Yeah. So—so we’re exploring a version of this where we actually do analyze all function calls that have a function expression and try to factor that into the control flow of the, of the, of the, of a variable. Right? The problem with just taking that sort of naive approach is that’s also somewhat annoying. Right? It is a conservative thing to do, because you are assuming a branch of code might run. But in reality, in this example, if we have a variable X, we assign X, the string, and then we try to run setTimeout and assign it to 42. You would really hope that this doesn’t error. Because setTimeout, the—the function that we’re passing to setTimeout—setTimeout will happen after the next tick. It will be scheduled after the subsequent code runs. So, that can be quite annoying. So you need some way of opting out of this behavior. And so this should not be an error. But if you take the approach, of hey, this always runs, this always potentially runs it can be annoying.

DRR: So what we have—and so there’s a class of situations where this might happen. Right? `setTimeout` does asynchronous scheduling for events. You typically don’t expect them to be fired immediately. And then some cases, there is deferred execution, so you want to have something happen and pull a lever and kachunk, whatever that work is gets run. So what you could do here, what you need is some way of saying this callback doesn’t immediately run. So that’s what we’ve been playing around with as, as a keyword is—sorry, we have been playing around with the keyword called deferred. This is specifically, what? Yeah, sorry. Basically, the way that this works is—I really should have done this differently with these—basically, this is a potential TypeScript specific keyword, it is not a JavaScript specific keyword. I just wanted to clarify that. But the idea is, whenever you have a thing that takes a callback that you don’t intend to possibly run immediately, you would have to say that this thing is a deferred callback. Right? And then some APIs don’t necessarily take a deferred yet. But what you can do, you can use an escape hatch declaring a function called deferred, it takes a deferred and then that sort of coalesces into whatever your API would have, you know, taken. So basically, there’s a way of saying, hey, these functions don’t potentially run. Don’t factor that into the control flow analysis within scope. That would be, you know, one possible direction.

DRR: Now, there’s some challenges with this approach. With—with deferred, we actually tried this approach in TypeScript 5.6 before we released our beta. We decided not the ship it yet, because it seemed like so much needed to be annotated. If you say that every function that doesn’t immediately schedule some work to be done has to be marked deferred, then you have to go through every event handler, every async I/O function, and every special utility function that defers work. That can be quite annoying. And it’s really subtle. Even people who work on the team have to kind of pause and decide, hey, is this a place where you have to mark something as deferred? So, that requires often looking at the docs and the docs don’t always special file like when a function gets run. In theory, this is just a one-time cost where you can annotate all of the standard library. All of like, you know, the node declarations that are shipped in, shipped to users. Sometimes there are broader platforms that do something like this, but in practice there is always some library that indirectly uses those deferred scheduling functions and it can be kind of frustrating. And it’s sort of unclear if—needing to do all of that is really necessary when most people actually like the current behavior for the most part. Deferred is really just to suppress false-positives and we don’t really get a ton of real world bugs, just a lot of people complaining that for each, and math, and whatever, don’t run the same way as a for loop do.

DRR: So one thing that we considered as going the other way, because people actually do like the current behavior quite a bit, or generally people find the current behavior to be, you know, acceptable. So instead of annotating things like set timeout and all of these other functions, what if we had a different keyword, again, only specific to TypeScript. But something that would indicate when you call this function, this parameter is a possible branch of execution for a control flow analysis. So things like array with, with for each and map and filter and all of these other things, I mean, even if you don’t necessarily intend for them to have side effects, if they do, they can indicate, yes, this function gets potentially run synchronously so you need to factor that into your flow of execution.

DRR: WH has a clarifying question I want to address now: Possible or mandatory branch of execution? So immediate means possible, but a possible—branch of execution. Right? It does not mean it always gets called. But if it does get called, it will, it will be part of the current flow of things. So yeah. I mean, the next slide actually says this. If it is called, it is called immediately. But for each doesn’t necessarily guarantee that something is called. If you remember the earlier diagram that I showed a way back—it still kind of looks like this the idea. Right? There are two different branches, you know, there’s possibly the body of the call and then the thing before the entire call itself. Or possibly the function before the body of execution. Sorry, i’m trying to run through this quickly, I might have to leave a little earlier. The pros of this is, built in synchronous functions can just adopt this. Right? And you can sort of sprinkle it across an API and if you, if you don’t, it’s kind of fun. Because you basically have what you have toed. Right? So that means it is easier for libraries to sort of gradually adopt it. It is sort of compatible how TypeScript existed for the last 10 years, 12 years, it depends how stable we consider it.

DRR: It also gives us, you know, potential to grow. Right? So maybe if we see something like immediate it could provide an opportunity to say, hey, perform more than just analysis on someone else’s mic is pretty loud right now. I think that is Gus. Can you mute? But yeah. Can you, can someone mute Gus. I’m hearing like the background. Okay. Maybe—yeah. Possibly gives other opportunities to do more than analysis then just on function expressions. Maybe we can do it on function declarations, too, if we experiment there. And then generalized beyond, you know, possibly called and go to always called kind of like WH had pointed out. And also array methods are actually like most of the cases of what people complain about when they come to our issue tracker and say that our control flow analysis is not kicking in. So a quick win. So if we go with just, I think, a lot of people would be happy. The cons are, for one, it has to be sprinkled everywhere if you want to do it consistently. Or by everywhere, I mean like on so many of the methods of functions that you have, for each, map, and math on like that. It looks clunky over time, and it is less common than deferred, maybe because you would only start adopting it as soon as you hit your first bug, and say, ah, this should be marked as deferred or as immediate. It would make things a little bit easier. And also, if it is not really required it is easy to forget. It is not clear if users would adopt it proactively. It is kind of like a double-edged sword: it is adoptable on a case-by-case basis, but if there is no carrot for you to do it, it is unknown if anyone does it beyond the core container of fungi(?) and running the node JS and so on. So the current direction, we’re leaning away from deferred. It is kind of hard to reason about for most people. It comes up quite a bit. You really need to—annotate everything in. We are experimenting with immediate, because it is more incrementally adaptable. But we also might just do nothing. It’s, it’s—you know, these things don’t catch as many bugs, as we would like to find. But it does provide more ergonomics in terms of what you’re able to express in the language. Right? Because what people will typically, what might be happening for a lot of people, they try to write a forEach, map, or filter and TypeScript doesn’t capture the specific semantics that they intend. So what they either do is rewrite that into a for loop or they just cast the result and get rid of any errors to basically say ‘I know what i’m doing, leave me alone, type system.’

DRR: So yeah, this, this is mostly just a kind of heads up and a discussion. I would be interested to hear feedback, any major concerns, any questions I can answer. And also, are these sort of updates useful. We can do more in the future, I know I had to kind of rush through things today. But—yeah.

CDA: All right. I got some comments on the queue. WH?

WH: I like this. I agree with the choice of immediate over deferred. It is more immediately useful. This will just move the frontier to the refactoring hazard: people who name their functions will be annoyed that this analysis doesn’t work if the function is not inlined into the call site.

DRR: Yeah. I also appreciate the immediate pun. If that is what you intended. [ Laughter ] Yeah. Yeah. Thank you.

WH: Yeah. What do you do on immediately involved function expressions?

DRR: For immediately invoked function expressions we actually do control as control flow analysis today. They are a special case where we, we do actually factor them in as a definite, a definite control flow node in a sense. So—so the outer, the outer flow, will actually factor in all of the assignments and things like that into the current scope. I—if I had a—buffer I could show that.

WH: I understand the answer, thank you.

DRR: Thanks.

CDA: PFC?

PFC: Okay. I first want to say I do find this very useful. Thank you very much for presenting it. My question was: What were your thoughts on putting the keyword after the colon so that it is clear it is part of the type or at least part of TypeScript?

DRR: Yeah. It’s, it’s—it’s something that we actually considered. And we actually moved away from doing something like that because there was a different confusion. I think it is actually tied to the next, next question as well from Luca. But basically, it is actually not part of the type so to speak. It is TypeScript specific, but the issue is that it is, it is really more in order of how typeScript resolves a function when it reforms control flow analysis and other checking and then says are any of the parameters marked as deferred? So the problem with trying to come up with this idea it is part of the type is that it really doesn’t flow through the type system when you declare a function. Right? Within the function, the fact that it is deferred has no bearing on it. It doesn’t kind of flow in other places. So we didn’t really want to give this—this, this notion, we didn’t want people to have this notion, that hey, maybe this is reforming some sort of effect analysis or something like that in other places. It’s really, it’s really only something that is like on the order of, of call sites. Right? It’s not in the declaration site at all that we do any analysis. So we really wanted to move away from that. We actually even thought of other ways that didn’t require a new keyword. We tried to do things that kind of looked like a specific marker type. Like deferred of, and then in triangle brackets or less than or greater than, whatever time—type you had. That confused people on the team as well. So we moved away from that.

CDA: Jordan?

JHD: Yeah. I mean, I have lots of praise coming in my queue item. But it really seems like it is a property of the things that calls the callback, not the function itself. Because the function is not of charge of what is called. So the sort of annotation that doesn’t belong on map or for each, not on the Cronbach I pass into it. If I pass the function that calls it immediate and the place that calls it later that would have potentially different semantics then something that I only pass into one or the other.

DRR: Yeah. I think, I think—it is hard to visualize. But I think you’re saying something similar to what I stated. Right?

JHD: Well, I mean, I’m saying that I shouldn’t be annotating the callback. I should be annotating the aPI that receives the callback, this is indeed part of the type that accepts the callback, it has nothing to do with the function.

DRR: So you really don’t want to have to annotate this on any use site as well. Because it is so, it would be really annoying. Right? The function—

JHD: I’m not saying annotating it at any call, but at the boundary where it is passed in. Would that be still really annoying.

DRR: You’re saying at the call expression you would rather it be—

JHD: No, sorry, let me clarify. I’m saying if I make a function that accepts a callback, my, so that’s FOO. FOO and the thing that decides when the callback is called whether it is immediate or not.

DRR: Yes. Exactly.

JHD: The type of FOO and only that should describe how that function is used and so at the call site, you should be able to infer from the type of the API whether the function being passed in is being immediately called or not.

DRR: Um—

JHD: No?

DRR: Yeah. Yeah. So we, we, we, we resolve the function and figure out how the function declared its parameter.

JHD: Right. So you’re saying it is a property of the parameter, not the callback itself. Awesome.

DRR: Exactly.

JHD: Okay. We may be saying the same thing.

DRR: Exactly. Sorry about that.

LCA: So I have a—so first of all I want to say this is very interesting. I’m very glad you are undertaking this work. Yeah, very much a pain point. I’m also leaning towards immediate. I think maybe for some other reasons then you outlined. Namely I think there is maybe possibilities for further type checking if you, if you explicitly annotate things with immediate. I would like to know if you considered any of this. Mainly if you have a callback that is agitated with immediate,, do you think TypeScript would raise an error if you were to try to call this function inside of a deferred callback? So like could it do—sort of escape analysis and know that the immediate function has escaped the immediate body? And you are trying to call it from some where it wouldn’t be immediately, like, it wouldn’t be immediate anymore. If that made any sense. So like maybe to give it more concrete example, you have a callback and you pass this callback—and sorry, in the function body you have a promise, you call dot on this promise and in the callback to dot then, you call the function that you annotated with immediate. Like this seems like it would violate the immediate sort of thing that you’re saying that you’re going to immediately call it. Because you’re not immediately calling it, you’re calling it in the deferred function.

DRR: Right. So I think we did consider some sort of analysis around if you’ve declared something as deferred or immediate can you guarantee that the person declaring that thing, right? The function declaring that parameter is being used correctly? And so for—if you’re taking the stance of immediate, it is actually always fine to say something is immediate, like immediately called because all that means it is possibly called and it might be called now. So consider that a possible flow of execution. And so you’re basically, kind of just taking more conservative analysis there. It’s, and it’s also, it’s also, you know, immediate is also made for a world where you’re assuming that not everything is really annotated perfectly. Right? So we, we really didn’t push on that exactly. Like we did have some ideas of oh, well, what if you, what if you had this in another callback and that is passed another thing, can you at least guarantee somewhere in your function it is called at some point or passes a parameter somewhere else? But you don’t really have a lot of guarantees, there are also sort of patterns. It gets worse if you go the other way and marking things as deferred, because deferred could happen for all sorts of different reasons. Right? It could be stashed away in an array, it could be stashed away in some sort of the event loop to be run later. Things like that. So we really didn’t feel confident we could get that analysis right. And it wasn’t clear if it was going to have a ton of value in, for the cost that it would requires as well.

LCA: Sure. I think that makes sense. I would love to, like I would be happy to also help investigating this. For example, if it makes sense to pass immediate functions, two functions as an argument to your function that takes a deferred callback, well, not explicitly immediate. I feel like in cases like this, maybe the argument it is part of the type—

DRR: You cut out. You’re cutting out. I’m sorry.

LCA: Oh, I’m so sorry. I’m—I think—if you pass an immediate—okay. Then I will—

CDA: Yeah. You’re breaking up. Sorry. Daniel, you were breaking up. But if you want to finish your thought. I will note we are pastime, though, so we should wrap this up.

DRR: Yeah. So I guess, I’m happy to try to answer some questions either via matrix or if you want to provide, GitHub as well. That’s a possibility, too. We should have, I don’t have, I don’t have places to link to from here right now. And I also have to kind of run in the next minute or two as well. But I’m happy to continue talking either through matrix or other means if you would prefer.

CDA: Great. Appreciate that.
