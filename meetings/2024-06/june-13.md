# 13th June 2024 102nd TC39 Meeting

**Attendees:**

| Name              | Abbreviation | Organization                                |
|-------------------|--------------|---------------------------------------------|
| Waldemar Horwat   | WH           | Invited Expert                              |
| Chris de Almeida  | CDA          | International Business Machines Corporation |
| Jirka Marsik      | JMK          | Oracle                                      |
| Richard Gibson    | RGN          | Agoric                                      |
| Jonathan Kuperman | JKP          | Bloomberg                                   |
| Daniel Minor      | DLM          | Mozilla                                     |
| Nicolò Ribaudo    | NRO          | Igalia                                      |
| Chengzhong Wu     | CZW          | Bloomberg                                   |
| Keith Miller      | KM           | Apple                                       |
| Michael Saboff    | MLS          | Apple                                       |
| Duncan MacGregor  | DMM          | ServiceNow                                  |
| Ben Allen         | BAN          | Igalia                                      |
| Ron Buckton       | RBN          | Microsoft                                   |
| Christian Ulbrich | CHU          | Zalari                                      |
| Jesse Alama       | JMN          | Igalia                                      |
| Aki Rose Braun    | AKI          | Ecma International                          |
| Samina Husain     | SHN          | Ecma International                          |
| Sergey Rubanov    | SRV          | Invited Expert                              |
| Istvan Sebestyen  | IS           | Ecma International                          |
| Mikhail Barash    | MBH          | Uni. Bergen                                 |
| Romulo Cintra     | RCA          | Igalia                                      |

## Decimal for Stage 2

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal)
- [slides](https://notes.igalia.com/p/june-2024-tc39-decimal)

JMN: Good morning, everyone. This is Jesse with Igalia. I am working decimal in partnership with Bloomberg and would like to give you an overview of the status of the proposal. I’ll focus on some of the changes since last time. My intention is that this presentation is a kind of “diff” rather than a full presentation of decimal, since, as wel know, decimal has been presented here a number of times in the last year or so. So I assume that a large majority of people in this room are familiar with it.

JMN: But just to give you a very brief high-level overview of what we are talking about here. Decimal proposal is adding exact numbers to JS. With trying to eliminate, or at least significantly reduce, rounding errors which are frequently seen in JS’s binary floating-point numbers, especially when handling human numeric data. Money is the main example of the kind of data we are talking about. To phrase this just in terms of a kind of a punchline: “For the love of (fill in the blank), can we pretty please make 0.1 + 0.2 equal 0.3?” We are supposed to get things right there.

JMN: I also want to tell you about the data model. Again, not in too much detail, because I have presented this before. As a reminder, we have explored various options for modeling decimals. It’s an interesting space because there’s not a unique solution, but rather different ways to validly think about these numbers and define operations. We considered rational numbers and arbitrary-precision numbers (under the moniker “BigDecimal”). We considered fixed-point decimals. A fourth option has been around for some time now: IEEE 754. Which is the basis, of course, for JS’s binary floats. They have a part of the standard called Decimal128, in addition to Binary64, which is what we’re using for JS numbers. Decimal128 uses fixed bit-width (128-bit) decimal numbers. It gives you a huge range of possibilities here. We can accurately represent decimal numbers with up to 34 significant digits. And we can handle an exponent, part of the floating point of about -6,000 to +6,000. (Actually, somewhat more than that.) If you think about the numbers that come up in your life, or in the life of your JS applications, my guess is that the numbers that have anything to do with human-readability or human-consumability will be in that range.

JMN: The main thing since the last time I presented decimal is that I have been working with WH on getting the spec text right. The main thing that was missing last time, when we asked to go to Stage 2 and didn’t advance, was that the specification wasn’t adequately fleshed out. And so working with WH since that last presentation, we have done a lot of work. By the way, thanks in advance, WH, for defining the space values here. It’s fussy to get this right. On the one hand, we don’t want to specify some kind of exact bit pattern for these things. But on the other hand, we don’t want to be too fluffy about these things.

JMN: So we need to have some kind of robust data model here. And thanks to WH, we have a solution to this. The idea is similar to how we think about mathematical values in the spec. Which are just real numbers. We have a new class of entities in the language: we have NaN and the infinities. The point is, I am using a subscript D (𝔻) here to indicate these are the decimal versions of these things. NaN of course as it stands today is something that we know and love for numbers that are not a number. But that’s in the binary64 world. And what we are proposing is a new NaN. These are not our inventions. These are the decimal versions of NaN, different from the NaN that JS has today. Likewise, these are not exactly the same as positive and negative infinity, but new decimal variants of those.

JMN: What we do is, we consider some kind of representation here of these numbers. Basically, you can think about this as some kind of mathematical value plus some kind of precision, you might say (or quanta, the technical term for these things). Idea is that we will have pairs here, lists of two elements. We have some integer there, Q. That’s the quanta. Integer with that range there. And then to represent our good old friend zero, +0 and -0, and some mathematical value which represents this kind of notion of significant digits within range so you can see, for instance, we have a couple of inequalities there. The absolute value of some independent integer is between 0 and 10**34. And the idea is that if you take this mathematical value and scale it by a certain power of 10, you get an integer. That is the kind of significant ant or BigInt. It represents all digits. This is the new class of what we call Decimal128 values. These are spec values, not JS language values. In the same way mathematical values are not JS language values.

JMN: Another thing that I want to draw your attention to is some diffs in the API. One thing that hasn’t changed is we propose having a new library object called Decimal128. The name as posed is subject to bike-shedding. We can open that, but internally have been using Decimal128 for a while now. Just to be clear this is not a new primitive type and there are no new numeric literals here. There’s support for decimal NaN and the decimal variants of positive and negative infinity. The API contains basic arithmetic. Just the basics you expected like addition, subtraction, multiplication, division, and to be clear again, we don’t propose overloading of `+`/`*`/etc. These will be methods.

JMN: The constructor is going to take strings. Here is something new: BigInts are okay. That’s intuitively fine. BigInts represent exact data. Right? Within certain ranges, that’s fine. Numbers are fine but work needs to be done there.

JMN: Rounding is something we need to do with a lot of human consumable decimal qualities and of course that’s present. But what’s new is that we went from the 7 or 8 rounding modes of Intl.NumberFormat down to the five official IEEE 754 rounding modes. For various reasons. The idea being that implementor may not have the ones that are not official. Imagine some C library that provides decimal128, but it doesn’t just have the ones that Intl have which are outside of IEEE 754. We settled on just focussing on those 5 modes.

JMN: The API will also have useful methods like toFixed and toPrecision and toExponential, similar to Number. We also like conversions ToNumber and BigInt. In the case of Number, that a lot of programmers might want to enter the decimal world from, say, numeric inputs and exit the decimal world with numeric outputs. The idea is, this is a chance for us to take the opportunity to define that in the spec rather than leaving the poor programmers to do something like I’ve described, which is common and possibly get the wrong answer. That would be a tragedy if we put in all the work to decimal, try to get things right, programmers are trying to do that again, and again they get things wrong or a rounding errors, even though they are trying to get things right. That would be a tragedy. In previous versions of this presentation, we have talked about having unequal and less than method. Intuitive, that’s fine. We talked about having some kind of compare method, which works not by mathematical value but considers the underlying exponent. Which would allow us to distinguish mathematically equal decimal values like 1.2 and 1.20.

JMN: But instead, we have settled on having a simple compare method to compare by mathematical value. This returns -1, 0, 1 or, thanks to our good old friend, NaN, it might return NaN. Don’t worry, it will be possible to recover the functionality that was provided by this previous version of compare. You will see why in the next slide.

JMN: Because we would like to expose the exponent and mantissa, for these decimal numbers. This was previously just completely missing. We will have a scale by a power of ten method. Because this is probably something that many programmers might want to do, for instance, converting from, let’s say, Euros and cents to all cents or something like that. The average programmer might not get this right. This is reasonable to add to the API. We make sure valueOf is throwing to prevent any unintentional mixing with plus and minus and multiplication and so on.

JMN: Just to remind you about our proposed solution to one of the conundrums of, the issue of, you know, 1.20, do we expose that to programmers? We don’t do that with binary floats. We need to make a decision. Solve a problem. In the proposal here is to do a string by installment. IEEE 754 decimal128, the standard, doesn’t contain numbers. These are distinct values in the universe. There are also sorts of examples like that.

JMN: And so if we want to naively push this forward with decimal 128, you are going to see this kind of thing and the question is, is this some kind of foot gun or source of confusion for programmers? The idea is to expose—to say that if we try to serialize a decimal value to a string, then what we will do is canonicalize by default and the option to turn that off. If the value is `1.20`, what you will see when you get—ask for a string is `"1.2"`.

JMN: One thing that I would like to point out here is that in IEEE 754, working with these values is not a scary thing at all as we compare by mathematical value. So, for instance, 1.2 and 1.20 are, in the spec, mathematically equal and we get that result.

JMN: And the comparisons are also going to compare by mathematical values. So 1.2 is not less than 1.20 in this setting. Even though there’s an extra 0 there, because we will work with mathematical values.

JMN: So again, it might feel like we are entering murky water, it feels a bit fuzzy. But don’t worry about it. The point is, also, just to hammer this home even more, the mathematical operations, additions, subtraction are not sensitive to the distinctions. Adding 0.1 and 0.9 is supposed to give you 1.0. You might say why isn’t it 1? The answer is, well, it is 1. There’s just—don’t worry about that. If there’s some kind of need to add extra 0s or digits, it will be mathematically equal. It might sound scary or unintuitive, it isn’t. It’s something to embrace.

JMN: There are a couple of outstanding questions for the committee. I would love to hear some feedback about these. I think these are not blockers for Stage 2. Or even a conditional Stage 2. But while we’re all here, we all love this stuff. I would love to hear some input from some of you. Here is one of the issues. Because of the good friend NaN, it’s a polluter. It makes things annoying to deal with. Less than, again, working with mathematical values, is not just the negation of greater than or equal to. Because of some extra checking whether this isNaN and so on.

JMN: And what is interesting is that the IEEE 754 spec provides a full suite of comparisons. So it has—as a basic operation, less than and greater than and equals and less than or to and greater than or equal to. It even has the negations of these things, but I omitted those from the list. The question is, would you be satisfied by having just a compare method? That works with mathematical value? And then—which would mean that you would write your own less than. You will write your own greater than and equal to and so on and so totter or should they be available in the API. I don’t know what the right answer to that is. I am leaving it open. Not including that because in some sense these are a bit redundant. We were just helping the programmer with a one-liner there. I also see the reason why one might want to add these.

JMN: We have settled on a fairly simple API. As I mentioned, we have basic arithmetic by design. But a couple other things we might want to think about and I have waffled on is square root. Square root is an interesting one because even though the output can be—have lots and lots of digits, it’s different from things like, say, exponentiation or the trig functions. The algorithm is straightforward. And we can get exact answers in some cases.

JMN: So I am a bit on the fence about this one. I am happy to hear arguments one way or the other. I want to find out what you think. If you think about use cases, I can think of, for instance, square root computing distances in a plane or in a 3D space. So it’s possible we may need these things in our investigation of what API programmers say they want and what they in fact use, out there in the wild, we didn’t find square root. Except for some more exotic applications.

JMN: Just a quick summary of where we are. We looked at quite a lot of use cases for these things. We explored a space of data models. All are viable and reasonable on their own right but we settled on one. API that meets a wide array of use cases. Not all. But most. We have spec text, perhaps we can take a look at that here. Just a sec.

JMN: Here you can see in—making this a bit bigger. In the introduction we have a representation of that space, values that Waldemar provided for us here, then we also have some definitions about what it takes to be finite and 0 and the rounding modes. This table is stolen from Intl. They have a similar table there. Some technical mathematical definitions here to extract things like mantissa and so on. We have our constructor here. Where we parse strings and using a certain production. We have properties like whether a value isNaN or finite. Here is the simple API. We have absolute value. Negation. Just change the sign. Add. Subtract and so on. It goes down here. We have toString, toExponential, toFixed, so on. We also have some intl spec text here. We have NumberFormat integration. It remains to be done to work with PluralRules. As a—as I have on the previous slide here. Let me go back here.

JMN: So Intl integration is mostly done. The main thing was to do NumberFormat. But that is done, although subject to revision, of course. PluralRules is next on board. We got a polyfill for all this. If you want to give this a try and kick the tires, give that a try. We still have feedback we are working on. There’s a PR there. But as far as we can see, this isn’t critical blocker for Stage 2 or conditional Stage 2. Although that’s the decision to make. And that’s it. Let’s have a discussion.

WH: I gave a lot of feedback on this proposal. https://github.com/tc39/proposal-decimal/issues/155

JMN: Yeah, just a moment. Here we go.

WH: [scrolling through GitHub issue] I would like to quickly present some of this. There are a lot of category errors in the spec, where it calls functions passing the wrong kind of argument. A lot of that needs to be fixed. Currently, 0s don’t work in any math functions. Also, operations producing 0s will just throw. None of the rounding is implemented at the moment. The spec currently throws wherever you get inexact results. I was confused by that a bit. I thought that it might have been intentional. But I think it’s missing functionality in the spec right now.

JMN: Exactly. Yeah.

WH: Okay. A lot of errors in the quantum handling where the spec doesn’t conform to IEEE 754. I provided suggestions for how to do these things. I provided suggestions for how to get the canonicalization right.

WH: I suggested new semantics for the `compare` method, which were what was just presented rather than what’s in the spec.

WH: I am strongly in the camp that mathematical ==, <, >, ≤, ≥ should be methods. If you don’t provide them, everybody is going to make their own versions anyway. And I see no advantage to omitting them.

WH: I made some comments about conversions. In the spec as it is right now, toString of 1<sup>1000</sup> produces a string of 1 followed by 1000 zeros. I’d prefer to switch to scientific notation for sufficiently large and small values. I see from the GitHub issue that you agree.

WH: There are issues where passing the “no canonicalization” option to `toString` actually does “maybe canonicalization” depending on the value. No should mean no.

WH: There are issues when converting numbers with how to determine the quantum of the resulting Decimal128 values. I think we agree on the solution.

WH: Object identity is currently inconsistent. Sometimes methods return reused Decimal128 values. Sometimes they create new ones. Sometimes they get the quantum wrong.

WH: The grammar for conversions is wrong.

WH: I suggested that we provide a few methods to work with exponents and mantissas. These are not quantum extraction methods. These return the mathematical exponent and mantissa. These are not the way to get the quantum.

WH: The rest are readability improvements which I suggested for the spec. Overall, we keep going back and forth and I am really happy with the collaboration. But the spec as it is now requires significant work for it to be self-consistent. I will support Stage 2 once it’s fixed.

JMN: Okay. Thanks for your feedback. I appreciate the help.

WH: Given how extensive the needed changes are, I think we need another round or two of me carefully going through this and fixing more things that come up. I will help with this.

JMN: I put a check if there’s a fix available on a branch. I think I have a comment here about… a PR and you also have a sketch here how to fix things. Looking to diving into this more and getting these nailed down.

CDA: Shane?

SFC: I also had a few looks at the intl spec. I think I posted on the issues there. I didn’t receive any replies. But I posted some more thoughts, issues on the PR for the intl spec. It also needs some work. Yeah. I think I know what you are trying to do and also I can’t verify what you are trying to do because I can’t read the spec because it doesn’t work. It has the wrong types being passed into functions and things like that. Once the issues get resolved, this—the shape of this is taking, you know, I think is very positive.

JMN: Okay. Thanks. I will take a look.

CDA: Nicolo?

NRO: Yeah. This is a question not for Jesse or any of the people, just offer the comment in general. What do we expect of spec for Stage 2? Like thanks for sharing the text. What does that mean? He asked other people and gave him conflicting points of view on what an acceptable stage 2 spec text is. I wonder if we have any opinion on what exactly this “major semantics included” means? In this case, I told Jesse, they are defined even if they are bugs. It turns out maybe it’s still not enough.

CDA: Does anybody have any thoughts on that?

DE: CDA, you put yourself on the queue with thoughts on that. Do you want to say something?

CDA: I just copy-pasting from the process document. I don’t have—

DE: Can you say what you meant by that? Is that—I thought that was an interesting comment and I wanted to hear your take.

CDA: So it’s pretty superficial. NRO’s asked about the expected spec level for stage 2 and I simply copy and pasted the all major editorial issues that are acceptable to Nicolo’s point, that does leave some room for interpretation. So for the entrance criteria for Stage 2, the question being asked, does this current state of decimal the initial spec text meet that bar or not? Obviously, it’s not final. There are, perhaps, arguably placeholders, to-dos, and issues. I don’t know if these issues are—they are not limited to just being editorial issues that are still up in the air. I cannot speak to whether it includes all major semantics, syntax and APIs. Probably does. Based on the checklists we are looking at here. Although I don’t know. You could argue Intl integration, but this is for the community to determine collectively.

NRO: I guess then I would like to re-frame the question. Does fixing the current spec bugs change the API shape or the actual semantics or do we agree on the semantics and fix the spec too much, what we expected them to do?

DE: So I think—

CDA: Sorry. Michael is—moving Michael up a little bit. He’s got some relevant comments.

MF: I hope so. I just wanted to try to make a clarification of something that Chris said. It may have just been a small mistake, but we don't look to get to the point where it's just editorial issues remaining for Stage 2. This has major semantics defined. It is totally fine and very common for us at Stage 2 to have things that don't really make sense, but we have a good idea of what we're trying to do. Stage 2.7 is the stage where we need to make sure there's only editorial issues remaining.

CDA: Waldemar?

WH: This is not just editorial issues. The Stage 2 criteria are that the major semantics are implemented and presumably work. They don’t currently work. None of the arithmetic operations work. String conversion doesn’t work. There is no rounding. So this is not editorial changes. And as we fix these things, the semantics of user-visible behavior changes. So we keep going back and forth as to what the user-visible behavior should be. Also, I don’t think it’s particularly productive to have a meta-discussion about entrance criteria for Stage 2. I suggest a more productive use of time would be to see if anybody has blocking objections on the merits or if there are other technical things that might be relevant and we haven’t discussed yet.

CDA: Ashley?

ACE: So from my perspective, one data point we have solved the semantics and I agree with what Waldemar said, there are still some things in flux. And maybe this is what Waldemar just said or slightly different. I apologize either way. It’s great to know with a few things remaining, whether we are close enough that that is it. We’re—maybe some discussion around the… the—so I think—if some of the spec operations just need a little bit more discussion, and whether or not included a method or not, if that’s set of things, or if that’s a conditional Stage 2 or just like a—I think it’s important for us to kind of agree that this is, if this is Stage 2 or not because the human element of the amount of work Jesse has put into this for many years keeping something at Stage 1 for a really long time when things are so close, it’s great to know. This is actually—there’s a few things to discuss. And when we do that, we as a committee will be really happy to see this in Stage 2. I think that would be a really great point to approach and we shouldn’t get too distracted by things that aren’t major compared to if this is like a primitive or not, it is Decimal128 or BigDecimal. They are clearly major semantics.

CDA: Shane?

SFC: Yeah. So I like the way that this is presented in the slideshow. If we approve slide shows, I support Stage 2 for this personally because this resolves the issues I’ve been talking to with Jesse about the Intl integration in general. I can take on faith this is what the proposal will do and behave. We can discuss this further in Stage 2.7. We don’t approve slide shows, but spec. What do other delegates feel about that? I can’t verify that this is actually what it’s doing. When I look at the spec it’s not intelligible right now.

CDA: Dan?

DE: I think for Stage 2, the important thing is that we have major semantics points worked out and that is conceptual agreement rather than about the document. I wanted to note in this case, we have a—we have this very extensive PR fixing many of the issues. If you look in the repo. We don’t have conceptual disagreements about what the semantics should be. There are these open questions about, you know, I think pretty scoped open questions that are appropriate to discuss during Stage 2, about like whether we have square root or less than things. And so I think this kind of clearly meets the criteria. Nevertheless, maybe to avoid getting stuck on this meta discussion, because you know they are making such fast progress to actually getting the spec ready, what if we conditionally advance to Stage 2. It’s still Stage 1. Offline, Shane and Waldemar keep iterating with Jesse and it advances once they give it the, you know, a positive review because we have done this many times before, this conditional advancement. It’s part of the process. I am not sure if it needs to come back to committee to Stage 2, because of the conceptual agreements. Unless there’s other things people have

RBN: Yeah. In—just following up to what Dan was just saying and I will keep this short because I agree this is a meta process discussion, but everything we have listed in the process document around Stage 2, this seems to fit. I mean, the real goal of Stage 1 is to examine solutions space and come up with the solution and Stage 2 is choosing and drafting out the spec text that is put together. We expect there’s going to be huge chunks missing. We have advanced to Stage 2 in the past with less stability what is in the proposal and a lot of the things that Waldemar is concerned about are listed in the purpose column of refining a solution, handling invalid inputs, changing some of the effects. And this feels like we are—it felt putting more rigor on what gets into Stage 2 than we have ever done in the past. I don’t know if that’s a product of introducing Stage 2.7 or anything else we might be taking up from previous discussions over the years. But it feels like we are—this is stricter than we have been in the past.

CDA: Noting we have about 15 minutes left, Rob?

Prepared statement from SYG:

> V8 has the following questions and non-blocking concerns:
>
> 1. Remains unconvinced by use case but can live with API-only solution.
> 2. What's the deal with decimal NaN and infinities?
> 3. Prefers choosing round to nearest, ties to even and that's it. What's the use case for supporting all five? We don't for floating point.

JMN: The reason why we support a couple different rounding modes, not just the single one that number supports, there are different ways of doing rounding. In finance, think about, for instance, this rounding ties to even. That’s fine. It has its use cases. But then there are other cases of rounding. Like, for instance, just kind of a truncation that’s also fine. It’s considered rounding. For instance, when I do my taxes and get a result, I owe $1.30, just $1. They don’t care about the cents. Things likes that. There’s no ties to even in that setting. The other rounding modes, presumably also have their use cases. They’re part of the official spec for a reason. That’s it. There was another question about the motivation. Right. I guess we have presented the data on this many times. I am not sure how to address that really. Maybe this is just a product of being in different JS communities, subcommittees and areas. There was another question about—about rounding. Can you repeat

RPR: “What is the deal with decimal NaN and infinities?”

JMN: Well, essentially, for spec compliance, to be able to handle cases when such values need to enter the system from elsewhere, that was the main motivation for that. I mean, to be honest, I myself am not a fan of having these in the language. Earlier iterations, we considered dropping them completely and just throwing when an operation would produce a NaN or infinity. In my view, that’s valid. I appreciate the considerations as well which is why they are there.

DE: I believe that the rounding modes have applications in money and in finance. Which is the primary use case for this. I think we should review those use cases at a future TC39 meeting. It seems like we don’t—we don’t have those on hand and that goes to come back with. This make sense during Stage 2.

JMN: Sounds great. Thanks.

DMM: So my specific comment on the queue was, that you mention in the slides to compare, can return NaN, but I didn’t see a path that did that. And I was wondering which path in the spec was meant to, but I also see the spec returns true, false, +0, -1 and +1. I think it needs a little bit of editing.

JMN: The idea with the NaN is in the new work in progress PR. I’m sorry. Still if the spec as you see it right now. That’s not there. That’s an older version of compare, which allows NaN and handles NaN correctly. The reason why NaN shows up in this newer version of the spec, in this work in progress, PR, is that NaN essentially pollutes things. When one of the inputs is NaN, you have to check and return NaN. You say, undefined is a valid response in that case, but yeah.

DMM: I would caution against having different sets of compare results to normal floats. Are there any situations, I think it’s always -1, +0, +1. I think NaN and NaN is equal? On compare.

JMN: Yeah. Good point. The spec, I mean, I can appeal to the spec. There is an answer given to that. And just to, again, say that NaN is ugly and pollutes things and complicates our thinking about that’s things, the function signatures are complicated, and…

CDA: Waldemar?

WH: To answer DMM’s question, the thing in the spec is an old version which was quantum-sensitive. I suggested we change that. The new version that returns the -1, 0, +1, or NaN is not in the spec yet.

CDA: Shane?

SFC: Is this mic working? It’s working now. Yeah. So I had another—this is not really a Stage 2 blocking concern, but other people have stage 2-related things in the queue. They can go first. [This is a comment](https://github.com/tc39/proposal-decimal/issues/12#issuecomment-2052482964) I raised a couple of months ago. I never received a response and it might be worth discussing, which is, you know, I have definitely made clear previously, on multiple cases, Intl.NumberFormat.toLocaleString returns decimals. If toString returns the decimal, the trailing zeros, that creates this inconsistency with toString and toLocaleString, which seems strange or unpredictable. And this is a topic that maybe we can discuss to see which direction. I posted possible directions in the issue. I never received a response or acknowledgement about the comments. So I don’t know if we want to discuss that now. We can do that later, but yeah.

JMN: That’s an oversight on my part. Sorry. We can discuss that today and off-line.

CDA: Shane, you’re next on the queue as well.

SFC: Great. My next topic is I counted 19 functions, which based on what we did with Temporal is, you know, not that big. But also, not too little. So when we talk about things like less than and so forth, like that’s—the definition of API float. You can only do with compare. Compare is clean semantics. I am happy with what is in the slide show today. And like, you know, we have already pointed out how less than and so forth can be error prone because how they handle NaN and things like that. So it seems like it would be a much cleaner solution.

CDA: Waldemar

WH: Adding `lessThan` or `equals` operations, I don’t think is API bloat. And users will get it wrong. If you ask users to implement ≠ by using `compare`, most will get it wrong.

CDA: Eemeli?

EAO: So now that we’re not doing decimal as primitive, when I look at what does decimal actually do beyond adding decimal itself as a class in the methods and so on, on it, the thing that it does, that I see at least, that goes beyond what a library can do, is the integration, but mostly number format. And this to me seems like it is a key motivation for having decimal in the spec as opposed to have decimal as a library. So with respect to advancing to Stage 2, may concern is that my sense is that this has not been considered directly. It’s more like indirectly given that we’re doing decimal and it needs to interact with Intl.NumberFormat, this is roughly how it should work. And when reviewing now, again, the proposal repository and the issues and pull request there, I don’t see as much discussion and convincing happen that what is the benefit of decimal being more than a library with respect to in particular to how it interoperates with Int.NumberFormat and then furthermore more directly, addressing the questions that given there is an interest to have this operation with Intl.NumberFormat, what are the questions being answered there? What are the problems that are being solved by the interoperation with Intl.NumberFormat and whether doing it via having sting like decimal as a thing in the spec is the rating approach or whether it’s more appropriate to consider thing with smart unit and considering there, whether it makes sense for something like Intl.NumberFormat to be able to process some richer entity than just the number, a values formatting and whether some solution around smart units, for instance, could also be a solution for the parts of the decimal proposal that are integrating with Intl.NumberFormat. And whether overall, this is the right approach for solving the issues that decimal is approaching. And my request here is that it would be really nice for this discussion to be more direct, rather than indirect, about what are the linkages with the NumberFormat.

JMN: Yes. Thanks. I have to say this is a part of the proposal where my thinking has evolved. Initially, I was thinking on the side, but more and more I see it how you describe. Something that really motivates the case here. But then there’s an obligation to make that clear to anyone who will [tcif] by this thing. The discussions have been not so great with the Intl thing and in fact there’s work to be done for PluralRules. I look forward to working with Shane and the integration here.

DE: I want to disagree that Intl is the primary motivation for decimal. I don’t think that’s what you meant to agree with. So in particular, it is similar to other libraries that we’re adding to JavaScript. Temporal doesn’t—Temporal has Intl integration, but iterator helpers don’t, set methods don’t, but are motivated for standard library features because there are things that are generally useful for JavaScript developers. And the particular sort of internal interchange point is a big deal. Jesse has presented in committee that several different JavaScript ecosystem libraries need to present decimal to the users, and kind of choose randomly between the decimal libraries out there. It works together better if we have a built-in decimal library. As far as intl integration, we don’t need additional features for this. We have support for NumberFormat and I believe, PluralRules if you pass in a string for the number, and that can have a decimal and it doesn’t get rounded to a number. If you want something minimal, that is already in place. It’s true that the only place that it actually intersects with another thing is intl. But that does not detract from the benefits of having standard libraries that solves user’s problems.

SFC: I guess I’m next on the queue, yeah, so, I agree with a lot of things that Eemeli just said, and the plural reactions and I think that’s a motivator for me, and that’s one good thing about the committee, we don’t have to be motivated for the same reasons. If this proposal is motivated for different reasons by different delegates, that’s fine. I do like Eemeli sort of following this out.

EAO: Responding somewhat to what Dan said there and the other discussions we’ve had on going, um, I would find it very interesting for us to be able implementation-defined the right solution to the problem & right solution that I would find very interesting to try and work on is finding a way to, um, be able to add libraries to JavaScript, as I—I might be paraphrasing Dan what you just said, but still find a way to have the general solution be available rather than needing to address it specifically repeatedly.

DE: Right, I think we see a cross programming languages that they do have standard libraries and I think that’s a pattern that we should follow. Um, we’ve discussed having built in modules as one potential path to this and that’s rejected by mozilla and chrome, it’s not clear to me what the next steps are, but also there’s a version problem which is that ecosystem libraries tend to have major versions and standards don’t and that version list probability from the standards rigor review like this is a thing that provides real value and real stability overtime and something that this committee should continue to be responsible for. If somebody comes up with a way to do this, blessing libraries, we should do it, but I’m not convinced we should hold about a standard library for this, unless a feature is motivated, which Jesse motivated.

EAO: I just wanted to note that I am interested in us having blessed or built in libraries and I would be interested in working towards that, of course I’m not speaking for Mozilla, but I would be interested in advancing this so that we can have more appropriate discussions and solve the right problems, rather than specific smaller ones.

SFC: And I’ll just chime in to say that, you know, built in modules, um, are something that like, you know, we discussed extensively, um in this committee. A couple of years ago and I was pretty compelled by the arguments and position that we held and I don’t think it’s a good time to revisit that unless somebody wants to make a compelling argument reviewing the discussion of this topic, but I think in absence of that we should take the path that Temporal is taking and is taking and introducing new globals, new standard library features.

DE: Okay. I think, I think it would be good to reopen the discussion, but also not sure what we should do in the interim. Since this is lurking in the background, I don’t think we should stop standard library while continuing to be conservative what we add to the standard library and only adding the things that are broadly useful like this.

CDA: JHD?

JHD: I wanted to echo Shane’s point, but I don’t think a single thing would be different if it was built-in modules versus globals for almost any proposal. I think things still need to be justified and independently motivated and so on, so I agree that’s just a not good use of our time, because I don’t think it will change the calculus of what we’re discussing today.

CDA: JHD?

JDH: So, yea my next item. So, Jesse has done a lot of really good work on this proposal. Waldemar is a very thorough reviewer and I’ve witnessed a lot of back and forth, and commend them both for doing that work. This—my position is no surprise to Jesse, and I’ve communicated with him multiple times and discussed in plenary, the last one or the one before that, the—the current position, or the current reality about adding a new primitive, I’m going to paraphrase from, um, Matrix, is that a primitive only makes sense if it’s actually going to be widely used. Unless someone can come up with that proof, that means no new primitives are possible, so that leaves decimal as well as a few other proposals in a place where they have to either pursue an object form or give up entirely, and that’s a crappy situation for a champion to be in, because they want the thing. When the ideal solution is a primitive and that’s not available, you have to find/come up with some alternative approaches. I still think that number systems are such a conceptually primitive thing that it doesn’t make any sense to me to not have them in JavaScript at least. I’m sure there are languages that people will throw at me that have non-syntactic number systems, but in JavaScript that is how they work, they’re number literals and BigInt with number suffix, potentially. The arguments I have heard for decimal as objects (and to be clear, I very much want decimal as a primitive): one, it’s a coordination point. Fair, that’s true of almost anything we add to the language, and that’s a good benefit. Two, is `Intl` integration which Eemeli brought up, which I had not thought about, but as Dan brought up, it’s an enhancement, but it’s not a brand-new capability. You can still do it with strings and that’s all I have heard. I haven’t heard a performance example, I don’t think I’ve heard a correctness argument either because there are correct big number libraries that are out there. The proposal as written could exist, I mean, there are npm polyfills available, so it could exist as an npm library just matching it and in theory, if it is in fact the best design, it would gain adoption and dominate the space amongst the future users of Decimal. All of them are using a solution already, and they would flock to this better solution if that is in fact the case (that it is better).

So, I’m not trying to argue for primitive specifically here, I’m just saying it doesn’t feel to me like this carries its weight because if it’s not primitives, I don’t see how it will get adoption among people that are already using one of the alternatives—one of the libraries for this purpose. To me, stage 2—we’ve talked about the meta aspects of it, which fair, I actually agree that it meets it requirements for stage 2 -, but stage 2 indicates that we expect the feature to be in the language. Effectively, it means if somebody is not sure it should be in the language, then they should object to stage 2, and that’s the position I find myself in now. So—those are my thoughts.

CDA: Dan.

DE: So, um, I definitely see that it would be nicer if this were a primitive, but Why—why do these arguments apply differently to decimal compared to Temporal? For Temporal it would have been nice to have triple equals and plus or minus to add Iterations to `Temporal`. It also could have been just, you know, in the ecosystem Instead of, um, libraries, so how do those cases relate to each other?

JHD: Yeah, that’s a good point. So, to me, um, almost any value could theoretically benefit from operator overloading. As somebody joked in TDZ the other day, C++ has never seen an operator overload it didn’t like. There’s ergonomic appeal to that, but that’s not what I’m talking about. Dates and Times have always been objects in JavaScript and even if they have operator overloads, they’re generally not a primitive immutable value, and it’s hard to compare to other languages because JavaScript has this distinct primitive and object concept that isn’t exactly the same in many other languages. I don’t know how to word my response in a way that’s convincing, but to me like a number system needs to be a primitive and dates and times don’t, and Temporal very much carries its weight, both because Date is horrific and also because of the alternative libraries out there solving things in very different ways with very different trade-offs—I have been long been convinced that Temporal in some API form is indeed the best solution to the problem. So, yes, I think Temporal carries its weight.

JMN: I appreciate the argument. I think that's certainly worth thinking about. One thing that I might add, and I’m sure you know this just as well, is the fact that we have thousands of users as Dan says of random choice of decimal libraries, shows that there’s considerable demand for this kind of thing. Um, but I also really like the JS world in that there’s, you know—everyday someone is born who is going to start web development doesn’t know about decimal numbers, find some kind of rounding issue, and reaches out for one of these libraries. If we were to add this into the language, even in its current form, which to be clear is also not my ideal form, this is a compromised position, this is not my ideal position is something valuable for the programmers. We would be helping out countless people, presumably, every day if this was in the language. So, I guess, just to, to recap, um, the idea is—we know that there’s a demand for this kind of thing, we also know that, um, people are going to run into these issues. That’s all by itself a kind of a kind of argument for having this available, even in a less than ideal form. Another thing I might add is that we know about the tendency of, um, say, um, of developers to add lots and lots of dependencies and there’s a concern and reducing dependencies is a thing and going through this very robust review process, I think that carries a lot of weight for developers.

CDA: Yea, just to. Sorry, JHD, hang on one second. I want to note that we have about 15 Minutes left. JHD I’ll let you reply and then Jesse. And then I’m going to let the queue continue. And Jesse, take a look at the queue and see if you want to proceed chronologically, or anything to move up in the interest of time. Go ahead, JHD.

JHD: Regarding the no dependency crowd, I agree that people _think_ that they want that, but the main response was, you said it’s clear there’s demand. I actually looked at the proposal and I only see one specific npm library linked, but that one has 30 downloads a week, so I think it would be helpful if you can maybe in Matrix, or somebody could throw me a list of the alternative libraries because what I recall from review presentations, there’s very short list of ones that have usage and their usage is not exceedingly high. Meaning it’s probably critical for the people who need it but that doesn’t mean a lot of people need it.

JMN: Fair point. That’s an oversight. There are indeed these libraries, I’ll add the links. Thank you.

CDA: Okay, Jesse, are we going through the queue in order?

JMN: Yea, why not. I don’t have any good principle why not to.

NRO: So, oh, I was in the champion and like we were the group that was struggling with this primitive constraint, and like they said, primitives are not a trend. Like, we have to actually prove that they’re going to be widely used. And I—as others said, if we add the decimal language and that gets like actual wide adoption in browsers and used in many websites, that’s proof for that. Like, we know—well, like, JHD for example just said well we can get this proof but like, in this committee, pulling out a number from NPM and saying look this library has one million downloads/week and so clearly it’s been used is not received very well in the past so I don’t think that’s a valid proof for that. And also something like Jesse hinted to having something in the language it will improve, the cusp for that for developers can be the discoverability problem. You need to find out that you have to use this specific thing for the language rather than Google it for it and looking for it in NPM.

KM: Yea, so, I guess—you know, as I—I think has been discussed many times, primitives need a lot of justification to add to the language just because of how much they impact every engine, they touch everything, millions of lines of code and so—I think that makes them very burdensome, so you need a very high bar and we talked about that many times. I think this discussion keeps coming up and I think adding operator overloading to JavaScript could—like, feels like it will resolve a lot of these things, JavaScript is probably one of the few dynamic that doesn’t have operator overloading, like—I’m sure plenty of other ones do too. There’s plenty of limitations on how you can do it in those languages, but they exist. And so like, I—I think it’s potentially a design space that we could explore. I think a lot of engines because of the way they handle—they already have to handle the integers of things versus downslope double adding and strings and handle dereferencing the point into the object to figure out if they’re equal or not. So, I think it’s possible, I don’t know if it’s like a guaranteed doable thing, but it doesn’t seem outside the realm. I know there’s push back for various reasons of just like ergonomics and developers understanding operators, but I don’t know, I feel like we have this discussion a lot and this could just be resolved if we had operator overloading.

CDA: Ashley.

ACE: Yea, so, the point about decimal, you know, where is it going to be used, of course the language, so there’s the Intl things, but there’s also the integration vertically with the web, like, a node, so like node APIs that return BigInt and there are web APIs that return BigInt, I can put decimal in and structure decimal across my work, and my work can pick up that decimal, even though it doesn’t have a decimal library off NPM, so I think that, um, again is where having this in the language can add so much value compared to user land and building on that interchangeable, like it’s really, really so valuable, even being an object.

SFC: Um—yea, maybe, um, it looks like Dan can address my question. I would have—I would have liked to have seen to slide, and I feel like there were slides in previous versions talking about operator overload and content that would be relevant for the slide show, maybe if you can address that briefly.

DE: Yea, for operator overloading. We have discussed this in the committee and I brought up the proposal. There’s two ways we could consider this. One is certain objects can have operators overloaded on them, or another one is ways to define primitives. So, we’ve heard from engines that wouldn’t like to do the latter. The former, maybe the Achilles heel of it is developers would like to overload triple equals, but that’s an operator that is quite difficult because it’s a blender for objects and you kind of want that have a comprehensive thing. There was another concern about injecting behavior into unsuspecting programs, which I proposed a solution for with operators from syntax junk that you have to put, which some people found interesting, but also would probably have its run time overhead, but overall if we add operator overloading for objects or decide we’re okay with one-off primitive either one of those—we could go back and add that to decimal in particular, if it’s operator overloading and added to decimal in place and object, the operator is already throw because value overflows, if it’s okay that we’re okay adding a primitive, that’s also okay because decimal 128 are wrappers over the primitive, and again, because value of throws, we make value return that new underlying primitive type and it would be completely coherent and analogous with what we have already, and we have methods for addition, but I don’t think that’s a very costly form of legacy from the transition. So, yeah, I think, I think there is that extension path, um, completely, completely coherent and completely aligned, um, if—we wanted to go that way. But it’s not necessary because the feature is useful in its current form.

ACE: Um, if I may make a suggestion. Oh, there’s a point of order.

CDA: You go.

JMN: I think the idea is that we just don’t have that much time. I see—at least one question in the queue about overloading. Um, if I have permission to do so, I’d like to table that. I think we’ve discussed that many, many times. I don’t think that’s anything we’re going to resolve today. Um.

CDA: All right. I’ll take a look at the topics. Do you want to go to Shane or to—

JMN: Yep, sure, go ahead, Shane.

SFC: This is the performance one, yea, not, I mean, it’s not, if the committee thinks this is motivated, as far as I’m concerned, I think it’s fine. It would make it more compelling for a lot of people on the fence if you could show these performance numbers, even for the transparency, even if they’re not the numbers that you would like to see, like it would still be good for transparency to see what these are. If you have a web assembly 128 versus a Decimal 128, what are the numbers going to be? I don’t know what they are and I’ve never seen what they are. I’ve had that issue open for a year and I haven’t seen any progress on it. But again, not—if it seems like there’s a number of committee numbers, including myself that think this is stage 2 material even without those numbers, but it might help with those on the fence if we had them.

JMN: Yep, I agree. Sorry about that. That’s an open issue on my end. I know about it.

CDA: We have just a few minutes left and we cannot go over because we have—we are burning time. Dan, please.

DE: So, it’s been discussed that we do have overflow slots, in the afternoon, so performance is not the main motivation for this feature. I’m not really aware of applications that are super my performance requirements for this and if we did care about performance we would focus on embedding into arrays. So you mentioned issues that don’t get addressed, please reach out to the champion if you don’t hear anything. It can be hard to get GitHub notifications. So, I don’t think that should be a requirement for stage 2.

JMN: Um, we’re running out of time, although than agenda item to volunteer your time, with your permission I would like to stick with the time as it is. Um, so just to wrap up, we had this discussion, kind of meta discussion, um, but I would then, like to propose conditional stage 2, which means, it stays at stage 1 with the understanding that, um, there will be considerable, um, iterating on the issues, um, we have a long task list from Waldemar and Shane has also, um, there’s also some work to be on the Intl side so that’s on me, and the champions generally to take care of these. So do I have conditional stage 2 in that sense?

CDA: Eemeli is asking if you can, um, explicitly iterate outstanding topics? Um—

JMN: There is the PR with a very long list. It’s coming from a list of issues from Waldemar. I don’t think going through that would be that productive.

EAO: You also mentioned any outstanding topics raised today and this I think needs definition for this to proceed.

JMN: Right. Okay. Uh-huh.

DE: So, maybe you meant the ones that were in your slide deck. Is that what you meant? Because there were other outstanding questions that were not there, but the plan was to stick with the changes in your slide deck. Is that accurate?

JMN: Yes. Does that clarify, Eemeli?

JHD: My point remains, I still don’t think it carries its own weight without primitives. I still want to be convinced. I’m certainly happy to continue discussing it with you or with anyone, but I’m not convinced that it’s worth having this in the language as an object. For the record, I think that it has met the stage 2 qualifications, perhaps conditionally. I agree with Dan that with the description of the coherent path towards adding primitives in the future, but if we don’t end up getting the primitives, I feel like this will not be a beneficial addition to the language.

CDA: DE.

DE: Sorry, is this, are you blocking consensus or is this a nonblocking concern?

JHD: Yes, I’m not providing consensus for this. You could call that a block.

WH: I’d be happy with conditional stage 2 pending spec fixes. I’d sign off on the spec once the spec is working. And that’s something I could do out-of-band between me and the other people working on the proposal.

JMN: Yep, sounds good. Let’s have another video call. That was very helpful last time you and I chatted.

SFC: Yea, my comment basically says what it needs to say. I support stage 2 with these two conditions met: Intl.NumberFormat and Intl.PluralRules having behavior that retains trailing zeros. As I’ve said earlier, I do find this proposal motivated because of the Intl NumberFormat and PluralRules integrations. I think it solves one of the most common foot guns with regard to internationalization of numbers on the web, this parallel that you can pass the same numeric value and you get it correct behavior both ways. To me, I think that’s pretty solid motivation so I hope that the champions can resolve JHD's concerns and we can move this forward.

JMN: So, just to summarize, this stays at stage 1, given the block, that’s my understanding of our discussion, right?

CDA: Yea, JHD, um—sorry, JHD can you just, for brevity and for the notes can you state briefly your—position?

JHD: Sure. I think that for this proposal, a proposal for a number system that does not include primitives does not currently carry its weight to be stage 2. For me since stage 2 represents a pretty clear signal that we’re attempting to move It forward and put it in the language. I’m open to being convinced and I’m happy to work with the champion in the future to resolve the concerns.

RPR: And just to be clear, JHD, you’re saying that the incremental approach is not acceptable. Does it need to go straight to the primitive in the first version?

JHD: I’m not making that statement necessarily that it must go straight to the primitive in the first version. I’m saying that it if the primitive in the first version, I would be convinced it carries its weight, but that’s not the only way I can be convinced and I agree that it’s technically feasible to do the integrative approach, but if we didn’t end up getting all the way there, then I would very much regret it getting stage 2. So I’m going to hold back on it for now.

DE: So, what do you mean that it’s not the only way that, um—or I think LCA stated it well, the only way that you won’t block this proposal to include primitives?

JHD: No, I’m trying to clearly, as clearly as possible state that I’m—I have an open mind here. I’m not, like, affirmatively stating the only path forward is primitives right out of the gate. I’m saying that the only thing I see that at the moment that would make the proposal carry its weight is primitives right out of the gate, but I’m hoping that I can be provided with arguments that convince me of alternatives.

LCA: JHD, what are arguments other than primitives that would, you would consider as valid reason to not block this proposal?

JHD: I don’t know, I haven’t read them yet.

LCA: So if you say that you will not, you will block this proposal—you will not block this proposal if it includes primitives. You will not block if there are other solutions, but you don’t know what these solutions or nobody knows what the solutions are. I feel like you’re still saying that you will block this because of primitives.

JHD: Effectively it means, yes, but the difference is that I’m trying to be very clear that I’m convincible. I’m not being intractable here.

CDA: Yea, I’m going to jump in because I—I think it’s useful discussion, but I don’t think that we’re, that outcome of discussion is going to convince JHD today to, um, not withhold his consensus for stage 2 at this point. You can jump in if I’m wrong at any point, so on the basis of that, um, Jesse, um, would you like to spend a moment to dictate summary and conclusion for the notes?

JMN: Yea, the conclusion is that decimal stays at stage 1, ie, not even conditional stage 2. We discussed some, um, changes in the API, and um, iterations on spec text, and it’s on the champion to keep working with Waldemar and Shane and others as well to improve the spec text and Intl integration and this may come back in the future. Thank you.

CDA: Just note that it’s removed from the queue, but RGN also was not prepared to proceed given the contention on multiple fronts and then, Shane—I can read it off, but Shane did you want to speak to your—note there?

CDA: Yep. SFC says I think it’s clear that the proposal just needs more explicit motivation. I’m convinced but lots of delegates remain unconvinced by motivation.

DE: Can we hear more about RGN’s comment? You said rGN wasn’t convinced?

RGN: Yeah, given the discussion in this room and the substantial contention associated with it, we’re not willing to allow this to advance today.

DE: Can you be more specific? What parts of the contention and what do you mean by, we?

RGN: We being Agoric, and contention being issues around the shape of the spec, the nature of object versus primitive, and the tangent about operator overloading. There seems to be lots of material that needs further refinement and I’m expecting this to come back in a later meeting, but for today it didn’t pass the bar.

DE: Can you—so, the champion presented a plan for, um, you know, a proposal about what would happen with operator overloading. Is this something that Agoric has specific concerns with?

RGN: No.

DE: Okay, great.

CDA: Okay, thank you, Jesse. Thanks everyone. The saga continues. Um, GB. Are you there?

GB: Yes. Just give me one second.

CDA: Sure.

GB: So, I’d just like to request, just a clarification on the timebox are for this. It was originally a 30-minute timebox, and now we’re looking at 23 minutes until lunchtime. Would it be possible to go 7 minutes into lunch?

RPR: In the room, we can take 7 minutes off lunch, yes.

### Speaker's Summary of Key Points

The spec text has been considerably fleshed out, though still not 100% complete after discussion, we asked to advance to stage 2.

However, critical feedback keeps decimal at stage 1: The champion will work with WH, SFC, JHD, and others who expressed critical feedback, which included ensuring that rounding and selection of decimal quanta is properly defined finding evidence that decimal libraries are robustly used in the JS ecosystem, thereby justifying adding decimal to JS

### Conclusion

- Another round of iteration on the spec text is needed.
- Deeper integration with Intl is needed, in particular, with Intl.PluralRules.

## ESM Phase Imports

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-esm-phase-imports)
- [slides](https://docs.google.com/presentation/d/17uYZ9-pm2Aa2yw1iP8OsOvRwZBWjgjn6Xid5jxEV7ZE/edit?usp=sharing)

GB: I really appreciate it for everyone in the room. In that case, I will share my screen and begin the presentation. Okay, so, this is the proposal for ESM Phase imports. So, it’s following on from the source imports proposal that provides a source phase syntax, and provides an object for that for JavaScript modules. The motivating use case that we’re using for this proposal is worker instantiation. This is the ability to create a new worker from a source. Right now with the existing worker instantiation, you have to resolve the path relative to the current module and you have to create the worker and there’s certain issues with this. It’s not ergonomic. It’s not a static capability so that the ability to for builds to be able to analyze this is limited. The string passed to new worker is not a module specifier, it’s a path so you have to do normalization of the module specifier. There’s limited tooling support for these, um, patterns. In terms of, bundlers and builders to be able to pick up on these relations and handle them in for example, library patterns and things like that which discourages libraries from using workers more widely in JavaScript. And so the idea is similarly that phase imports were able to provide a solution to the ergonomics for Wasm instantiation by using the JavaScript as a representation of that source to be able to instantiate a new worker from the source. And if we have that, we get a more ergonomic worker about instantiation, and it’s part of the static module system and all tool chains can kind of align with that, and at the point where tooling can handle these cases we get something that is also portable and it can be used across different kind of library patterns and things like that potentially. So, that’s the motivating use case for this proposal. There is also a secondary objective around layering and that is the fact that while this is the motivation in reality this is implementing a new primitive for a JavaScript source phase. Sort of these higher order modules in JavaScript that lead to the other things like module expressions, module declarations and loaders that allow virtualization and allow bundling workflows and things like that. It’s very difficult to create a proposal that’s just layering, so that’s why the chosen use case is the workers that allow us, um, that has a direct benefit that we can provide for the proposal itself, but in reality, we’re really, we’re building a primitive that can fulfill these layering, this layering solution. And so just to dig into where this can lead and the real Omni of it, and the other proposals that it leads on to, module expressions was originally motivated by worker use cases to allow inline modules that you can dynamically import and, um, then, um, module declarations extended to this to become a bundling primitive and these are object values that can be passed directly into dynamic import and also support transfer via structure. Here’s an example where a worker is created and that inline module is posted through structured clone into the worker and later on inside of the worker that module is imported.

GB: And so, for this as an ESM source phase proposal that can be imported and be the same object that we can have for the object expression, it would be able to—starting off with this worker use case and then saying that we can do dynamic imported, structured clone, in theory the module expression should be inline module text and should get the features out of the same primitive. So this primitive should be designed from the beginning to support dynamic import and structured clone, I guess is the argument I’m trying to make here. So here’s the dynamic import.

GB: So you should be able to import a module in its source phase and then dynamically – [ Audio Breaking Up ] – and then we have the specs for it. It does not support importing a module source—I just got a message that my connection isn’t stable, if I do cut out or if there’s lack of clarity, please let me know.

CDA: You’re okay for now.

GB: Thanks. So, um, it, this is specified but not for the case of a module source value coming from a separate realm and I’ll go into more detail in a second but I want to discuss the design in the phasing model. The resolver module and you get the module key and the module map, and originally it was just a URL and now days it’s the URL and the attributes and I added one other thing here as well to the module key as a placeholder when we have module expressions which is that if you have an inline module you probably want some extra unique ID associated with that module expression, especially universal because you want to pass that module expression around between different realms and if we had all of those things that forms part of the key as well. Imagine this key, right now it’s not specified anywhere, it’s not really an explicit thing, but implicitly in the model you can think about it as existing here. The fetch compile stage is fetching the source text and passing the module and having a sort of module record that points to its original key still. It’s got the source text and the module source text, as soon as it’s a value, it has a realm associated with it, but you could have more general thing that is not associated with it and then you have the link evaluate phase, and the module instance, and the module instance is also associated with the module key, so you’ve got the source and instance in the module key, but this instance is more of a canonical instance, where it’s the default instance on the default host key and when we allow virtualization, our module key could have multiple instances, but it’s also keyed into the instance as a standard canonical host, host linking module, single instance, and it gets evaluated and has evaluation state.

GB: So, with that in mind, when we dynamically import a module source, as the layering primitive, module declarations, what we can do is think about this conChip steal, when I statically import that and pass the dynamic import, it says, what is the key for that module source, let’s go into the key and see if there’s a canonical instance in the key, and if there’s not a canonical instance in the key, and recurrently link that key with the host linker and if we’re looking for the instance phase, which we’re looking for—drive its execution to completion. And so this is, this is currently fully specified in the spec text or the proposal.

GB: And then, we also get the ability to defer these, if you want. So, this would statically, this would import the module source, but none of its dependencies in the first line so you just get that compiled source record and then the defer acts—if the module source is acting as a capability for its key and that you could then defer it and get both the linked version of the instance without the execution. And this kind of degenerate case works out as a consequence, which is if you do a source input of the source, you’ll get the same source back. Obviously, only within the same realm. And this is implemented in the spec text because right now if you import a source and create an iframe and you pass the source through the iframe to a dynamic import and it sees that the source value that you provided to the import doesn’t come from the same realm, it will throw an error right now in the spec text. We could make this a—realm error with the compartment level boundaries, it would be at the compartment level. We could even disable this case entirely if we wanted to, but I’m not sure that we even need to, but you’ll get a little bit, um more into the realm question shortly.

GB: But I also just wanted to mention this other Wasm module imports being supported so that now talk as well, about using the WASM source object as a capability for its key in the module register, so you can get the canonical instance. And then what about a user created module object? So, if it’s not, so, if we got the WASM source through the source import, certainly we know the key, but if I just create an arbitrary `WebAssembly.Module` object, how do we know what the key is for it? The easiest solution there, if it was just created in line, it has no key and we just throw it, and that’s the default behavior right now, but we could also fully support this and basically saying that it has the same semantics in JavaScript so when you create a new instance it gets some kind of unique ID—sorry, when you create a new module to compile streaming it associates some unique ID with it in the same when we had the unique ID for the inline module key. These are across specifications and we can’t define it in ECMA262.

GB: First it’s the across realm situations and if you pass it across an iframe boundary, you get a source imported it will throw an error, but we could potentially relax this case, um, allowing modules to still—basically, treating keys as shared between realms and so if you pass a module source, you can treat it as a key in any realm. And this is something we’d like to explore in stage 2, as a requirement of stage 2.7. To determine if that’s something that’s worth considering.

GB: Furthermore, there might be some spec refactoring and to factor out at the moment in the specification there’s no concept of the key and there’s no concept of a source independent of its instance and there may even be some—so, right now we’ve replicated the semantics fully, but without the cross realm, and there might be a semantics that allows us to form the compile record without the instance or even without a key, and this is something as well that we would like to explore as part of a stage 2 process, and even an editorial PR for ECMA262, but to explore the cross specification and refactoring, it would help to say that what we have right now is correct according to the current specifications and we can explore the larger amount of work to the spec refactoring and the cross specification work under stage 2.

GB: There’s one other use case that is also associated with this proposal and that’s the—the two use cases here is analysis tooling with analyzes and iterates module graphs and bundler all right, and module dependencies and recursively fetch them and then the other use case is wrapper module construction. So, the ability to create a module which has the same exports as a module, but with instrumentation around the exports for common use for mocking and performance analysis or something like that and both of these use cases can be solved with some very basic analysis functions on the module source.

GB: This is not part of the motivating use case, but we have specified these functions as well as part of our proposal and so this is an imports function on the abstract module source, as well as a named exports and a star exports function. Import – [ Audio Breaking Up ] –

USA: It seems like GB dropped out. Let’s give it a few minutes. I can see the mouse moving. Ah, is that on our side.

CDA: It looks like GB dropped.

USA: Yea. He mentioned that might happen. I assume that—he’s going to rejoin. Maybe ping GB.

CDA: Let’s give it a minute. We only have 5 minutes—well we were going to go over by 5-7 minutes to allow for the topic, but failing that—let’s give it a couple of minutes.

USA: By any chance does anybody have a better reason to reach GB than Matrix? Better as in—more reliable?

NRO: I looked in the queue, I can’t speak for the motivations proposal, but if anybody has questions about the semantics, I would be very happy to answer them.

MF: I was wondering how wasm compile time imports works with this proposal. Is there a plan for how those might be passed? Import attributes or something?

GB: Hi, I’m sorry about that. I’m going to join from Italy and we’re currently on vacation and apparently the Wi-Fi is not very stable. Are we still on the topic or—was the decision made to defer for lunch? Chris?

CDA: So, on the topic—still on the topic as far as I’m aware.

GB: I can pull up my slides again. Just a second.

USA: I could see your screen, and then it’s gone. Now. Okay. Perfect.

GB: Great. So, we’ve got these functions which can be used for the dependency analysis. And with named exports and star exports, the union of the local name and star exports and which returns the same type as an import, you can union all of those as local exports and you get the total list of exports and you can use that to construct a wrapper module. There was discussion about the star exports, naming of this function. I’ve got a PR up to rename this to wildcard exports. And I didn’t want to land a PR in the last week, before the meeting but my time is to land that after this presentation so if there’s any further thoughts on that, it would be very welcome. The term star is used internally in the spec text, but there’s no way that it’s used in the public APIs. I haven’t seen star used anywhere else to reference these exports. The term barrel file is used, and on MDN, there is the term, wildcard, but I haven’t actually seen it as a strict name for these export star statements. starReExports kind of conflates with export name from the—sorry, it’s star reexports was the original name. But wildcard exports is the final proposal. If there’s any feedback, that’s welcome.

GB: Then there’s two other module metadatas that we can go, top level and—which provide extra bits about the module. Top level await is important for check for modules, are async required for 1, specifically, would check this bit for other modules and throw if it is set. We did specify dynamic import, but there’s a PR to remove this. Again, I didn’t want to land it the week before the meeting. The reason being that you can, the dynamic import inside an eval expression and that will work correctly and contextually, therefore dynamic import is not conclusive as part of the module static analysis.

GB: Okay. So, the summary is, we’re looking to get stage 2 for the complete proposal for the text covering the JS module and the support and dynamic import and analysis. The cross specifications of the interactive specifications for HTML has been not been defined and the cross realm case currently throws. We would like to explore this further within the Stage 2 process, including investigating if there’s a possible editorial spec refactoring that we can do for the proposal. And those would all be things that we would clarify and confirm for stage 2.7 and then the two PRs that are currently unmerged is dynamic import and renaming star exports to wildcard exports.

GB: That’s it. We have 6 minutes for discussion. So, if someone can run the queue because I can’t currently see it.

USA: Yea, I can do it for you. First we have Richard.

RGN: So, meta commentary that I really appreciate the specific identification of issues to resolve before stage 2.7, and I think that would be a good pattern to carry forward. I’m assuming that there is going to be explicit documentation of them in the explainer? Or you know, somewhere recoverable outside of meeting notes?

GB: I can do a follow-up to add some specific dig into these and read them further, as part of the stage 2.

RGN: Great. Thanks.

USA: Okay. Well, that was it for the queue, Guy.

GB: I can speak very briefly to Luka’s point that web assembly, there’s the concept of compile time imports, so that the moment the strings built in specification is defining imports which are, um, you can think—maybe because web assembly doesn’t have a concept of a global, it can’t just access global.whatever the value is, um, and so compile time imports can satisfy that in a sense, you can think of JavaScript modules as having access to these things, it’s like a hard linkage irrespective of the actual graph so it provides special names to know what these features are and string built ins so that they’re sort of, they’re not part of the normal imports, they’re kind of special contextual imports for the host specifically and they’re not built in imports in the sense that they’re like, more like global access. You can make them more like accessing the window object. Those would be, um, supported for the source phase. JavaScript doesn’t have any sense of that so it doesn’t apply to JavaScript.

USA: Next in the queue is Dan.

DE: So, I think this proposal is great in the way that it’s framed or layered will help with module declarations and module expressions because they can be the same kind of object. I was initially not expecting there to be these particular introspection methods, but I think they’re well needed for source module tools for wrappers. I have trouble understanding how they can be applied in ESM, but I can understand how they’re valuable for wrapper, if you have a loader, but otherwise given to that you can’t reexport the thing stately, I’m not sure how you’re supposed to use that in a pure ESM context, but the other contexts are important enough to justify this.

GB: The real world use cases are in the bundlers themselves and tooling that is part of, you know, some kind of host level loader system, sort of bundlers, etc., and sort of, anywhere es module lexer is used, which is a library, which is fairly well-used in the ecosystem, it would replace a lot of those, so the benefit is there for tooling and it’s a really nice helper, but yea, it is very much a secondary things that we can provide as a nice to have here. We could remove it, as well, if anyone has any concerns.

DE: Yea, these things seem quite simple and also quite useful for the use cases so I’m fine with them landing, but I also wouldn’t be opposed if somebody wanted to break them out into a separate proposal.

USA: Okay, that went away. We’re low on time so please make it 10-15 seconds, luca.

LCA: I want to explicitly support going to stage 2 for this. I’m very excited for this proposal. I think making easier to use workers have a great improvement overall, and there’s a lot of libraries that don’t do this because tooling doesn’t support it well so I’m very excited to see this, and hope we can use it soon.

USA: Next we have RGN.

RGN: Reification of import phases is broadly useful; I like the overall picture for module harmony and the narrow scope for proposals that constitute it. This is great for the kind of tooling that already exists and will support new varieties as well. Enthusiastic support for stage 2.

USA: Dan minor expresses support for stage 2. Next is NRO.

NRO: I have support for this proposal and I’m pleased that you are given to motivate this independent piece. This will help a lot with [ Indiscernible ] and declarations and expressions because they become syntax for existing new thing.

USA: Next we have support from Dan and next we have CM. Support from CM as well. So, it sounds like you have overwhelming explicit support, GB. And, do you want to give comments? Congratulations.

GB: Thank you very much. I’ll let you get to lunch and I’ll do a follow-up PR to the readme on stage 2.7 process going forward.

USA: Yea, and would you like to do a conclusion while we break for lunch?

GB: That was my conclusion.

USA: Okay.

USA: NRO?

NRO: Yea, given that there have been some changes with the module proposals is the committee interested in hearing another presentation of them, what’s the overall pictures that we have in the modules group? I see people nodding in the room, so we will try to schedule something for one of the next meetings.

All right, thank you, Guy, and thank you everyone for putting up with this minor delay. Let’s break for lunch. See you at the top of the hour.

### Conclusion

- Proposal advanced to Stage 2.
- Stage 2 behaviors specified include dynamic import of a source and the module source object and its source analysis.
- Importing a module source from another realm currently throws, relaxing this behavior is being explored further as part of Stage 2, including a possible upstream spec refactoring for compiled module records and/or module keying. Cross-specification work is also being explored as part of Stage 2.
- GB will do a follow-up PR to the readme on the Stage 2.7 process and progress going forward.

## Intl.DurationFormat Stage 3 update and normative PRs

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)
- [slides](https://notes.igalia.com/p/pj5uX_5nC#/)
- [PR](https://github.com/tc39/proposal-intl-duration-format/pull/198/files)

BAN: Okay, so, this is the update and one normative PR. As I stated, while I was fumbling to put my slides up, this is very much not a 30-minute update, it’s closer to 5 minutes. We have one normative PR, but it’s very, very small. Our current status, we’re tantalizingly close to asking for Stage 4, but we have one small normative PR and we’re adding testing for recent normative PRs. We have some editorial work in progress, basically the most straightforward, readable way to have part of the spec shouldn’t be implemented the way it is, and although spec is more concerned with readability than implementation, we have a refactor to make it less annoying for implementers to handle a part of the spec where the most straightforward way to implement it would be extremely inefficient, and implementing a different way from the spec makes it hard to keep the implementation and spec synced.

We do have one small normative PR to handle an edge case. It improves the formatting of very, very long components durations in the digit clock styles that are meant to represent the numeric durations as if they were on digit clock, so “numeric” and “2-digit”. In `DurationFormat`, people can use large values for minute and seconds, and these were formatted in grouping separators. The change in the PR, which has been approved by TG 2, Here’s an example: if we were formatting a duration that included a number of seconds in the millions, that would be represented in our digital clock form with grouping separators, which badly breaks the “digital clock” metaphor. I’ll just go to the PR. There we go. That is visible. Its fairly small and has approved from TG2 and if we’re dealing with one of the clock styles we turn off grouping so instead if we’re formatting one of our digital clock styles we turn off grouping so that, um, a number of seconds, like 1 million seconds would be represented as 1000000 seconds instead of using grouping separators, as something like 1,000,000. That’s the one normative change that we have. What is the process here? Do I formally ask for consensus for this change?

USA: Yes.

BAN: I would like to formally ask for a consensus for this normative change.

USA: We have DLM on the queue in support for the normative change. I think—but, okay. But we had DLM. Also with—um, support. And SFC. If any of you would like to speak to that, feel free.

SFC: Thanks as usual to Anba for finding these issues and reporting them.

### Conclusion

USA: All right, you have consensus. Fantastic.

## Continuation from previous meeting: Explicit Resource Management Normative Updates and Needs Consensus PRs

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkqpkI6V9_w6ykvsG1w?e=ehAC64)

RBN: This is a brief continuation from the April plenary. We were discussing deterministic collapse of Await, specifically PR #219 on the Explicit Resource Management repository. There was a question that NRO had, wanted to review the PR before, making a determination whether or not he was comfortable taking the change and after some discussion and some minor tweaks to the algorithm, he approved, but I wanted to make sure that he had a chance to chime in if he has questions and wanted to revisit if we can get consensus on this specific change. I can go into more details on it as well.

NRO: Yea, I don’t remember if I had a request, but I took a look again and it looked good to me, so thank you for this.

RBN: All right so I’ll briefly discuss what this was again. Basically, when an `await using` declaration contains a declaration whose value is initialized to `null` or `undefined`, it is a mechanism of both the `using` and `await using` declarations that `null` and `undefined` values are ignored rather than trying to get a `Symbol.disposed` property off of them and then throwing if it doesn’t exist, to better support conditional resource allocation. In the specific case of `await using` declarations, when you take an `await using` that is initialized to `null`, we still want to have at least one Await that occurs to meet the specific requirements that had been set forth by MM. As you can see in the example here, in the current specification text this would result in an Await occurring three times, even for cases where it’s really not necessary. So, for the X and the Y values, there is no real reason to Await. The important bit was that an Await occurred before the block exits so that the code executes after the block exits runs in a separate turn. These extra awaits are somewhat unnecessary so with this change we collapse all `null` and `undefined` initialized values to a single Await and if there are any non-null/non-undefined values that are also being monitored by an `await using`, then no extra Await is added. This collapse occurs regardless whether X, Y, and Z are initialized in individual statements or a single combined statement. Either way, they’re treated the same and all this really does is reduce the number of unnecessary empty Awaits added to the task queue. My question is, do we have consensus on this specific change?

USA: Let’s wait a little bit for the queue. MF. Do you want to speak to that? Okay, mF expresses support. Also RGN and CM. And LCA. So, yeah, all supportive. Um, pax also would support.

RBN: Is there anyone opposed to this?

USA: Not in the queue. Not so far.

RBN: All right. Then I’ll take that as consensus?

USA: Yea.

RBN: And that’s it for this specific topic.

USA: Okay, thank you, Ron. And I don’t know if it’s the post lunch, um, laziness or if we’re making really good progress, um, but either way, we’re blazing through, so let’s keep going.

### Speaker's Summary of Key Points

- Existing requirement is that an ‘await using’ declaration must Await at least once during disposal when execution exits the block.
- Both ‘using’ and ‘await using’ allow null/undefined values.
- Every ‘await using’ for a null/undefined value introduces an independent Await
- Proposes collapsing extraneous Awaits for null/undefined resources to a single Await, or to avoid the Await entirely if there is also a non-null/undefined async resource.
- PR #219 was awaiting review from NRO, who has since approved.

### Conclusion

- Consensus on PR #219

## Discard Bindings update or stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://tc39.es/proposal-discard-binding/)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkrFz0j1_3aLYU4vABg?e=YMk3IB)

RBN: In case there’s anyone who hasn’t met me, my name is Ron Buckton, with Microsoft, specifically with the TypeScript team. I’m briefly going to discuss the discard bindings proposal which was last discussed in the April plenary. This was a very late addition to the agenda, though I’ve discussed beforehand that I wanted to bring this back for discussion as we had a simple blocking concern when we requested Stage 2 advancement at the last meeting. I was waiting on adding this to the agenda until the review was completed for that specific change so I wanted to go back through this now that that specific concern has been addressed.

RBN: If anyone is not familiar, the idea with discard bindings is that they are a way to have an unnamed placeholder for a variable binding that allows you to elide variable names or binding names in certain contexts such as `using` declarations. This was originally a feature of that proposal, but was pulled as it has a larger cross-cutting set of concerns including pattern matching, which also needs discards. There are some other very useful places it could be used, such as using the `void` keyword in place of a binding identifier in function method parameters. C++ can have unnamed parameters and both C# and Java also use underscore to act as a discard in pattern matching and in other cases of bindings as well. We so far have decided not to use underscore for historical reasons. We generally avoided giving an identifier a different meaning in expression contexts. The motivations for this proposal were a need to have a declaration that produces side effects without introducing variable bindings to avoid the need for “disable-line” comments for ESLint. Existing solutions aren’t really consistent. We have single purpose things like Elision or bind-less catch, but there’s no general-purpose solution. Empty object a patterns are not viable, especially in `using` declarations because they can be initialized to null/undefined and would throw. Simple elision is not sufficient because `using =` is already valid JavaScript so we have to have something that indicates the binding. So, this proposal was to use the `void` keyword in the place where you would otherwise expect an identifier in an expression pattern, in a binding element. In a parameter you could specify `void` to skip over a parameter you don’t intend to satisfy to avoid having to give something a name that you’re not going to use and avoid needing an underscore prefix or mark with a comment to avoid linter warnings. It’s also extremely useful in pattern matching where you want to match that an object has the properties X and Y without necessarily needing to determine what the values are.

RBN: When this was brought up for Stage 2 advancement at the previous plenary there was a conflict with the cover grammar for the `await using` declaration. This was brought to our attention by wH and was, as far as I know, the sole blocking concern for advancement at the time. The issue was the cover for the `void` expression in UnaryExpression conflicted with the cover for `await using` declarations because they both required a cover in the unary expression case. The resulting covers overlapped in a way that would make parsing ambiguous. The solution that I proposed and was approved by Waldemar on Tuesday, was to take the `void` cover out of UnaryExpression and move it to more specific cases where it’s used, which are in ElementList for ArrayLiteral, and PropertyDefinition for ObjectLiterals. The change that’s proposed in PR #9 is aligned with things like the cover grammar that we use in CoverInitializedName in object literals. In addition, we already have this mechanism in object literals where we use the object literal syntax as a cover grammar for object assignment patterns and have notes explaining that when it’s used as an expression that certain parts of the cover grammar are not legal. This extends that mechanism to array literals so we can use them as a cover grammar, and by using this we avoid the ambiguity with how the `await using` is parsed.

RBN: As we discussed in the last plenary, Java has now also adopted the underscore character as a discard, joining most other languages that have this feature. I had asked at the time if we should consider underscore instead. The way that I proposed us looking into doing this was to extend cases that we already support, or that are currently errors. You can already repeat underscore in variable declarations, and you can also repeat underscore in parameter lists in a function in non-strict mode.

RBN: Repeating underscore in lexical declarations today is an error. What we could do is relax that error, but still error if you try to reference the duplicate in an expression. As I recall from the last meeting, there was some push back from this. It’s still an area I would like to explore as an alternative, but `void` is something I know will work, we already have done some validation of that syntax and what I’m looking to do is today, if possible, potentially advance this proposal to Stage 2 and consider further consider the implications of using underscore and potentially doing a large switch over to using underscore, if that’s something that we find is viable long-term.

RBN: I’m seeking advancement to Stage 2. This was a late addition to the agenda, so, anyone is welcome to block purely based on the fact that there was potentially insufficient time to review. My hope is that’s not going to be a major concern because this was brought up for Stage 2 at the previous meeting and again there was at the time only one blocking concern, which was around the grammar so at this point I would like to go to the queue and potentially ask for advancement.

USA: Yea, so before we go to the queue, there are 6 items in the queue at the moment in 5 minutes, although we are running ahead so you can ask for an extension later, maybe, but let’s hope it doesn’t come to that. First we have DLM.

DLM: Um, yea, so I guess, I have a question. Um, for me, the real motivating use case for this is pattern matching so my question is—let me take a step back, yes in general, I think we should be trying to solve problems in general, but in this case, especially consistency for other patterns, I think having underscore would be very, very nice so would I like to ask if we gave up on trying to solve this in general case would be able to use underscore specifically in pattern matching.

RBN: My intuition for that is “no”, and the reason that it’s “no” is the reason that we have had push back in the past against using an identifier for something other than a regular identifier in a place where an identifier would otherwise be an identifier reference. If we could use it in pattern matching, we could use it anywhere. The fact that we can’t use it in most places also applies to why we wouldn’t be able to use it in pattern matching.

USA: We have a reply by LCA.

LCA: I also just want to push back on your idea, DLM, that is useful in pattern matching. I think there’s useful cases outed is of pattern matching, using and await using– await using, the clear resources that exist to have AI, and mutex guards and in that case, having a discard binding is also very interesting. So, yeah.

DLM: Yea, I wasn’t saying that pattern matching was the only relevant use case, I just think that it is, I think it’s the one where it would be really nice to have for consistency, and I would like to point out that explicit resourcing and we could put it in there, although I’m happy with Ron’s answer to my question.

RBN: If I add on to that, for the same reason we thought about using underscore for pipeline, and there was push back in using that in those cases even though it’s syntactically scoped to pipeline, and it’s only in a unique syntax and the same pushback occurred there as well. Even though it’s unique in pattern matching isn’t a specific concern.

USA: Okay, next we have NRO.

NRO: Yea, so, I’m—I’m happy to see that the discussion to use underscore is still in discussion for Stage 2. While I think the proposal has value, even if we just go with void, um, I think it’s a mistake to go with void instead of underscore. Yea, so thanks for keeping it in scope.

RBN: Yea, I’d like to still pursue the potential of using underscore, but regardless whether we use void or underscore, the rest of the proposal I think is going to be unchanged so it’s something we can still, um, kind of workshop a little bit and talk with different folks and see if we can address concerns, and maybe make a syntax switch in Stage 2, but I think it’s the right direction now because void works as a fallback so it’s a good way to keep the proposal moving, stay relevant and having progress underneath it.

USA: Let’s extend the timebox by 5 minutes and then next in the queue we have RGN.

RGN: I still like this proposal. I think it fills a very real need and I’m happy to see progress being made. I also still like void specifically. I think that it’s playing with the hand that we’ve been dealt in terms of what already exists within the language. But even if it ends up being underscore, I would still support this.

USA: Next is LCA.

LCA: Yea, um, I want to echo all of that. I think it’s—well, not all of it, but I want to echo the + 1 for Stage 2, I would very much prefer the underscore. I think there’s a lot await in the precedence in other languages, especially considering that even a language like java that has been around for a very long time, that uses underscore, and also the fact that many developers also use underscore as Java as a prefix for other identifiers to mean this is already used so there’s precedence in the community for this. So, I would very much like to see the further investigation on the underscore and I’m happy you’re continuing with that.

USA: We have a reply by Duncan.

DMM: Um, so—so, in Java, underscore could be adopted, but it could be adopted because of a well defined route to do so. So, it has been a legal identifier. It was made illegal as an identifier in Java with source versions greater than a certain value, but then it could be reintroduced to be the drop binding later. Since JavaScript doesn’t have that sort of source, um, version at different—I’m able to say—keep binary compatibility while highlighting source problems on the recalculation, I don’t think you can use Java on how that adoption can happen in JavaScript—in ECMAScript, sorry.

RBN: I can concur. In this example I’m not using Java in that how Java can do it, but more that it’s one more, um, one more example of underscore being used for this purpose in other languages. In the underscore is especially tricky in JavaScript because there’s literally a package that is heavily used in the ecosystem called, underscore that often uses the underscore character as the import or as the global script reference that people use, therefore it’s really hard to do anything with underscore because the JavaScript community gave if meaning, although it’s funny that in underscore and lodash and also in, FP libraries like, um,—excuse me, like, ram daw (?) and others, the underscore character can actually be used as, um, in some of these ways to ignore things or it’s used as placeholders in other cases. So, it’s—it has a little bit of a messy history, but unfortunately very heavily used .

That’s why if we could make it work, the only way that I could see it really working is if it’s only legal when it’s used in the declaration that cases where it would have been illegal to use it as an expression because it would already have been illegal in the declaration, we would only weaken it a little bit, and allow the underscore to be declared, but allow it to reference because the code is illegal anyway. So that’s kind of a way to make it work in the future. If we want to discuss this more in Stage 2, we don’t have to necessarily discuss it and spend a lot of time on it today, but there’s more that we can investigate here as well.

USA: So, next we have a reply by LCA.

LCA: I don’t want to take up more time on this, but I wanted to reply saying that I didn’t mean that Java is exactly the path we can follow, but Java had some complexities in doing this. They had to deprecate it syntax first and reintroduce it later and they still went with underscore, and I think that shows that there’s value in using underscore. The precedence in other languages means that we should probably consider doing this, even if it’s more complicated than using void.

RBN: Essentially it’s worth the cost to find a way to make it work, at least has been for the languages that have paid the cost to make it work.

LCA: That’s right.

USA: Ron, just FYI, we can do maybe one more extension for 5 minutes, but—

RBN: Okay. I’d like if we could extend this for five more minutes because I would like to see if I can get to the first if not second topic.

USA: Okay, WH.

WH: Thank you for fixing the grammar. Before the fix lexing was impossible after `void`. I support this for Stage 2, but I also have a preference for `_`, and I would not want both `void` and `_` to be discards. I think we should pick one or the other.

RBN: That’s mostly my perspective as well. I saw MF had a comment that void is specifically better—or strictly more reliable because there are some weird cases such as the example that I have in current where bar underscore equals something and underscore equals something else and it’s not exactly working—not exactly doing what you expect. The other issue is that if we did underscore we wouldn’t be able to use it in assignment patterns. There’s a caveat that I don’t have listed in here, you would be overriding it. So, there are some limitations if we want to use underscore, but there’s a lot more that we have to dig into that, so which is why I’m postponing that to Stage 2 as we dig further into it.

USA: Then we have SFC.

SFC: Um, yea. So, void, um, when I look at the examples on the slides and in the repository earlier, the void means something very specific, and other programming languages like C++, where void means the none type or the absence of value type, like, it means the unit type. Like it actually has, it actually is a type for things and like when I read, you know, void, I read it as X is type void, it’s a unit variable. So, I think that like, you know, this is a problem that a lot of other programming languages have solved and I think that the educational benefit of using the syntax that every other language has figured out how to use in some way is extremely important, and void is just simply not—it’s complete—carries baggage that I think would be harmful, um, to use and readability of the code. MF had a topic that he deleted, which seems like it could be interesting which is like, if underscore cannot be used in every context, maybe there’s opportunities to like in context where it really can’t be used, you know, you can choose the other keyword. You can use void or underscore in certain contexts. Like if you need to, but overall, um, yea, I don’t seem convinced.

RBN: Well, I’ll say a couple of things to that. I’m aware of that baggage, void specific meaning in other languages. The takeaway that I have is that there’s basically two ways that void is used in JavaScript today. You have the void expression, which is generally has the concept of “execute the expression and then discard the result”. So, there’s a rough correlation between discarding the value and discarding the binding that I’m trying to carry on through this. The other is the void type in TypeScript, really is the only other place it’s used in JavaScript, and that’s not exactly JavaScript, but close of for this case, and it’s not a unit type, it’s more of a discard type. In many cases, it means undefined, at least when you’re defining a function that has—can’t have a return, you return void, but it also has meanings in how, um, what things can be passed to a call back that runs void. You can pass things that return `number` to a callback parameter that only expects to return `void`, because the expectation is that you won’t do anything with the result. It’s not the same as the unit type. There is a break in other languages, but it might be a cost that we have to pay. Underscore has some complexity around getting to use it, and it has some limitations that might not make is viable. Most other things that we don’t have another keyword that makes sense to use here, so we can’t use an identifier and most symbols and tokens that we might use have meanings that don’t match or wouldn’t work with using, because it would turn using into a compound assignment or function call or something else complicated. So, we have a limited set of things we can put in this case. So we have underscore with its limitations or void. So, it’s kind of having to compromise and do the best with what we have in my opinion.

USA: In the queue first we have DLM with support to what SFC said and then we have mF.

MF: I want to respect precedent from other languages because many programmers have context in other languages, but I think when we already have precedent in JavaScript, we should respect that more, and we do have this precedent in JavaScript. RBN mentioned how TypeScript uses void, but we have the void operator in JavaScript, which literally means discard this thing. We take an expression and then we don’t use it anymore. And JavaScript programmers with familiarity with that will see the similarity between these features. They seem to work nicely with each other. I don’t think that the precedent from C++ is more important than that.

RBN: Essentially we’ve already broken precedent with those languages with how we already use `void`. To paraphrase. I hope that makes sense.

USA: SFC is on the queue next.

SFC: Yea, on that particular topic, I’m trying to recall—I’m, um, it will be interesting how widely, like, how widely used the current void keyword is. I don’t recall reading code at any point recent that uses that keyword, that’s why void might work in this spot, but I would venture to guess that the majority of JavaScript developers are probably not familiar with that syntax already, even though it exists in a certain way. I’m also thinking like, you know, I to feel like the choice of syntax is fundamental to this proposal. The underscore versus void. There’s a lot of big open questions here. This proposal was first brought up in the last plenary and was going for advancement here to Stage 2, it seems very rushed.

RBN: It was not brought up in the last plenary. It was Stage 1 in more than one plenary, so it’s part of the declarations proposal, and it’s been around for two years before it became its own independent proposal. I apologize for the interruption, I just wanted to clarify.

SFC: It just feels rushed to like, um—I certainly had not seen these slides before this morning so like it feels rushed. If you want to go—like, I would feel much more warm and fuzzy if we went to Stage 2 having already established, is it void or underscore and here’s the pros and cons and here’s why we’re going to use void. I feel like having that question answered later is sort of fundamental to the proposal. It seems like ideally something that we would be agreeing on right now, but basically I’m asking for Stage 2 with this question unresolved. Is it going to be void or underscore. I guess, what you’re asking for is the problem motivated, but it seems like a weak Stage 2. I won’t block Stage 2, but it seems like a weak Stage 2.

RBN: I wanted to point out, that the slides today are the same from the April plenary, the only addition is the slide about the cover grammar. We had been discussing this prior to today and the main reason why I rushed this in today was an attempt to show that the one blocking concern that we had in the April plenary was the cover grammar so I was hoping that by showing that we resolved the cover grammar that we might be able to advance. We had already, in the April plenary discussed void versus underscore, that there’s some more discussion that we need to do there, but it didn’t seem that was a blocking concern for Stage 2, which is why I presented it today as something we can keep discussing in Stage 2 as an alternative or a change we might want to make, but the general outline of the feature and what we want to do is fairly consistent, regardless of which one we choose.

SFC: Yea, I regret not being more active in earlier conversations here, but—that’s by, like if you want to go to Stage 2, I’m not in a position to say because I haven’t been an active participant in these conversations to this point. It still seems premature, but I’m not going to block Stage 2 because of that.

RBN: I did point out, and I wanted to clarify in the beginning, if you didn’t have enough time to review because this was added late, you’re welcome to object purely on this basis and it will wait for the next meeting. This was more in the interest of expediency, to keep the ball rolling, but if you have concerns and want to block on that basis, that’s perfectly fine.

USA: All right, we have gone over time, but we’ve gone through the queue. Um, would you—

RBN: I’ll at this point and if we, if we have consensus for advancement to Stage 2? So, is there anyone in support?

USA: There’s support from RGN in the queue. Just to clarify, um, SFC would you withhold consensus?

SFC: I said I’m not going to withhold consensus. I just made a comment that it feels premature.

USA: Okay, thank you. Also in the queue we see a lot of support (RGN, NRO, DE, CM, LCA, MF). A lot of expressed support.

RBN: Thank you, and just in case there’s anyone aside from SFC that would like to express concern, is there anyone opposed to advancement?

USA: Okay. Congratulations on stage 2 and let’s move on. Would you like to, um, record a conclusion and summary of key points in the notes?

### Speaker's Summary of Key Points

- Proposed for Stage 2 Advancement in April. WH raised a blocking concern related to the cover grammar (issue #5 in proposal repo).
- Cover grammar issue resolved in PR #9, approved by WH.
- Underscore is still under consideration as an alternative to ‘void’, but has complications.
- Postponing resolution of underscore vs. void until Stage 2.
- Seeking advancement to Stage 2.

### Conclusion

- Consensus on advancement to Stage 2.
- Many delegates expressed a preference for underscore.
- Some delegates maintain strong preference for ‘void’.
- Concern raised that utilizing ‘void’ for discards breaks with other languages' use of ‘void’ as a unit type.
- JS’s existing ‘void’ operator already breaks that parallel.

## Algorithms for Signals

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-signals)
- [slides](https://docs.google.com/presentation/d/1-_4KHsG6a3ZLuWlV2zz3dwGk2O9R7keEqkerb97NDYQ/)

DE: I wanted to talk about signals a little bit more, and in particular, going over the algorithms and the APIs that signals are based on, and focusing on some kind of core ones. We have an updated signals logo simplified, thanks to Anne-Greeth from the Ember community.

DE: The goal: We want to understand the most important parts of the signal API and the motivation for the design. We will focus today on just the more core parts of the API; we may have to change other parts, partly due to concerns raised last time.

DE: The outline: Signals are at Stage 1. We have polyfill with tests, people have been developing primitives and Matrix channel and a lot of interesting experience already with integrating signals into various frameworks. People are excited, but again this is going to be a slow project. I don’t expect it to be proposed for Stage 2 within the next 12 months, because there’s just a lot of work to do to prove this out.

DE: This is the API. We have the Signal.State class with a constructor with the initial value. You can get it or set it. These are kind of combined capabilities-wise, and it would be nice to separate them, but focusing initially on something that then various wrappers could use and those wrappers naturally would already implement that separation.

DE: Computed signals, you construct it and pass a callback, which is the thing used to calculate the value of the signal. It just has one thing to get because it doesn’t make sense because it’s set by the call back.

DE: There’s one extra API called, untrack, which runs a call back while disabling auto-tracking. Now, this is a subtle API to use correctly, but experience with reactive frameworks shows that it’s necessary when you have sort of broader reasons for understanding that the tracking of other things is enough.

DE: And finally we have the Watcher. Now, Watcher is a thing which can receive callbacks based on signals becoming, you might call it, “pending”: we don’t necessarily know that the signal changed, but one of the things it depends on has changed, so it creates a synchronous notification to the Watcher so that later updates can be scheduled.

DE: Signals are based on fine-grained pull-based reactivity with auto-tracking. I want to go into what that means and why it’s an important design decision. In fact, maybe it seems like these things with signals, they’re just sort of a trend and we’re making up things, but I think this is fundamentally a problem that has existed for a long time and continues to exist and everyone is converging on the correct answer and this answer makes sense for kind of inherent logical reasons that I want to explain.

DE: The goal is, we want to be able to construct UIs such that the view is a function of the model, such that the UI–the DOM–is based on the state and it’s as if we’re recalculating the DOM based on that. So, in practice, frameworks have their templating systems and they have holes in the templates, and the holes are based on the model. The example that we were discussing last time, where you have a counter model and the model is not shown here, but it has a way to get the count and parity and also a way to increment it. In this template we have a couple of holes that are filled in with different syntaxes and ways to interact with the model, but either way, it’s pretty declarative, and people have all kind of converged on this.

DE: So, how does a model change lead to the correct view change? Two strategies: Immediate mode is where on every frame you render the whole screen and blit it out to the monitor. And that does work for some domains, but it doesn’t end up working for web-based UIs in practice. And the alternative is fine grain incremental updates. You figure out which parts need to be updated and you just update the relevant things.

DE: All frameworks these days have their way of figuring out how to do fine grain incremental updates, but when people try to not use a framework they end up kind of tearing more things down and rebuilding more things, immediate-mode-style.

DE: auto-tracking, which I’ll get into in a little bit, is the idea that to figure out what dependencies exist. To figure out, in this template, what references ‘count’ and ‘parity’, so you can figure out where to go in the template and update. You could have a compiler get a conservative set of what might be referenced if they’re all statically known. Or, you could just watch which things are read at runtime. This (runtime) is the idea behind auto-tracking. There are a number of different dynamic scenarios where it’s useful for that to be at runtime. An effect is when we have a particular function which does auto-tracked reads, and when it becomes pending, it’s scheduled to be reevaluated.

DE: To implement fine-grained incremental updates, the signal-based frameworks tend to break down the template into several different little effects that can be run separately when a particular part of the model changes. When the model changes, we can consider reevaluating it eagerly–when you set the state, you would go and find the computed signals that depend on it and recalculate those, and if that’s displayed on the screen, based on an effect, you would rerun that immediately. Alternatively, when we set the state signal, then its descendants come to be understood as dirty or pending, but you don’t evaluate them, but if somebody looks at them later, they can tell it’s outdated for a newer version.

DE: Another way of talking about these two algorithms is, there are two options:

- eager is push based, a.k.a. observables. It’s kind of driven by set, that’s what triggers evaluation,
- with pull base you’re lazy and you’re driven by getting the value of the signal. So, something sets it becomes valued, and then actually running the computed.

```js
const seconds = new Signal.State(0);
const t = new Signal.Computed(() => seconds.get() + 1)
const g = new Signal.Computed(() => t.get() > seconds.get())
effect(() => g.get());
// log true
seconds.set(1);
// with glitch may log false
```

DE: To be more concrete about what the problem is with push-based reactivity, here’s a diagram from Wikipedia, they have a nice article about reactivity, and they have a diamond dependency problem. You could get into states where the graph is simply behaving in an incoherent way. Imagine you have a ‘seconds’ variable and there’s another computed t that’s ‘seconds plus one’, and then you want to see seconds plus one is greater than seconds. That should always be true, but if you update seconds and you’re pushing the update, and you go about it in this naive depth first, left to right order, you’re going to evaluate the comparison before you evaluate seconds plus one, so it’s going to see them both as the value one, and may return false, but that’s just incoherent.

DE: So, the solution is, instead, when the get comes to the comparison, you get the whole set of dependencies, you topologically sort them, and seconds comes first and t = ‘seconds plus one’ comes second. Fundamentally, we ensure that ‘seconds plus one’ is evaluated before the comparison, so that it can be performed on the correct values. Because t ‘seconds plus one’ is evaluated before g ‘comparison’, because you’ve taken this global view of the dependencies, it’s going to come to a coherent answer.

DE: When auto-tracking, the principle is that each time a computed signal is run, it collects its set of dependencies. So there’s a goal value tracking what’s the current computed and when you call get, whether it’s state or computed, it will add that thing to the current computed’s dependency set. So, logically when the computed signal is rerun it gets a different set of dependencies. You may have, here’s a simple example, depending on what A is, either B or C will be the dependency.

```js
Signal.Computed(() => a.get() ? b.get() : c.get())
```

DE: If the dependencies are A and B, and C changes, it won’t invalidate it. You can also have dynamically allocated data structures of a bunch of signals, so static analysis is entirely impossible. I want to mention that the dependency set in practice is often stable so this ends up being not as expensive as you might expect.

DE: Overall we’re seeing a lot of convergence between reactive UI frameworks. I have a picture of a crab here, this is several different crustaceans have evolved to have a body shape that is similar to crabs. This is a very beautiful image of a crab from Wikipedia carrying her eggs. Several different crustaceans have all converged on a crab-like body plan because it’s very effective for certain lifestyles Frameworks are like this, where they independently evolved to be similar.

DE: Though Solid was among the first to call them signals, many other frameworks were also looking at what sorts of glitches or what sorts of errors they have, and all coming towards the same design principles. We’re all looking at this problem space, and arriving at different parts of the sort of correct algorithm at different times. This includes

- being pull based, so, when you write to a state signal, it invalidated the subsequent things without reevaluating
- auto-tracking because it’s the most accurate way to get the dependencies leading to the most minimal set of updates.
- For this the validation, if you’re trying to get the value, you look at all of your dependencies and see if they’re invalid and if they’re all valid, you can skip yourself, and most cache their value, and that
 could be on the way in with edge version. Caching is “on the way out”, where each computed signal evaluates to the value, and if it evaluates to the same value it did last time, then it doesn’t have to invalidate it things that depend on it, it can go back and revalidate those values. This is why the equals option is on the computed signal, just comparing an old vs new value, because it’s comparing on the way out.

DE: So, I wanted to stop here. I know we have a shorter timebox and I wanted to do a Q & A on the core signals API and semantics, if people have questions or thoughts about this model.

MF: So I want to just ask a question about the thing you just mentioned about the computed signals based on the same values as it was previously, it won't have to be recomputed. That makes sense for simple, primitive values, but what if the value is complex? It's like an object that has properties that can be mutated, and then you could technically have that computed signal be a function of those properties, and even though its identity is the same as before, it represents something different.

DE: Right. So that’s why computed signals have this .equals thing in the options that you can set. You can set that to whatever comparison function you want, including always returning false. Good question. Any more questions?

DMM: Does this require that, well, you say you can find the .equals, but presumably you can define that the objects are immutable.

DE: So part of this is based on trust. You can write whatever you want in the body of a Signal.Computed. It doesn’t have to be a pure function. We can’t validate that it is a pure function. But you’ll only be hurting yourself if it is not a stable kind of comparison.

NRO: Regarding the case of objects with multiple properties. So kind of like a star. Is the expectation that I should use a signal for the object or put a signal in each property to only wrap the actual primitive contents?

DE: It depends on what you’re trying to do. Signals are atomic and can replace one value for another value. And if you want to do finer grained diffing in that, if you want to do a calculation based on just part of the object, you might want to have a Signal that represents just part of that. Both so if that thing changes and someone’s using something else, they don’t get invalidated and vice-versa. Other invalidations that aren’t relevant to you don’t affect your subsequent calculation. In practice, the set of cases where you end up using a custom equals method is somewhat rare.

DE: It’s a conservative safe to always return false, to not equal these things with each other. And some frameworks like Ember don’t do that caching on the way that, they evaluate things down stream, and that works out, things should behave coherently, it just might be more evaluation than you like.

TKP: I just tried to wrap me head around this—you introduced this auto-tracking, this solution of this glitch problem, where you update the proper dependencies before you try to resolve it. But—you only arrive at this problem if you update your view before you are finishing updating your model.

DE: Yeah. That’s the time that it’s most visible. This does occur sometimes in applications. Especially because you end up wanting to sort of stagger your updates and return to the event loop so other things can run. Sometimes you have a glitch and it is overridden before you get back to the event loop, so it’s not user-visible.

TKP: If you have an incomplete model?

DE: Yeah, you can. Because each one of these nodes could have its own view of the world. They could independently go to the DOM and write stuff there. These have real bugs that have been shipped in production websites. That’s why people put in effort to fix it.

TKP: Yeah, but you introduced in the first slides that you want to have the view as a projection, of the model?

DE: That’s right.

TKP: You immediately break this concept.

DE: Right, this is what we’re trying to avoid. So this comes back to the idea of fine-grained incremental updates, because we’re not doing immediate mode, it’s not going to be a function of the model. So we want it to be equivalent to the function of the model. We want to find an algorithm that reaches the same result as immediate mode, and incrementally calculating it with fine-grained updates, that’s the goal. Some algorithms are incorrect. “Glitches” illustrate the incorrectness.

TKP: So, do you track these changes to the model correctly?

DE: Yes, the signal proposal has a correct algorithm for calculating the updates to the view. And the correctness is based on being pull based.

SYL: Yeah, I think this is just a rephrasing of DE’s answer, but to some degree, the reason this is strictly, full evaluate the model before beginning the view isn’t totally satisfying, it forces you to eagerly evaluate everything in the model whether or not the view currently may depend on it. If you want to be lazier, you don’t know that yet, you have to sort of at full-time sort of get the correct final answer to what the model’s version of this computed is in one pass. And get the right answer the first time, every time. Which is what this sort of invalidation propagation phase is about.

CM: So, I have a question about the dynamic nature of the dependency list. If you go back, you have the example with a question mark. If I look at this, indeed the dependency set can change depending on the value of A. But if, if we’re in a situation where say A is true the first time, and so the dependency set is A and B, then if B changes, then it will get updated. Because it will be in the dependency list. If B changes it gets updated. And if C changes, it got missed, in this case, it doesn’t matter, if C changes A is true. The fact that the dependency set doesn’t matter in this particular case. So just in terms of refining one’s intuition about how this works. I’m curious how much that sort of reasoning about, well, yes the dependency set varies, but it doesn’t matter. How much that intuition generalized to more complex examples?

DE: So, this intuition only holds when we’re in the land of pure functions. If there’s any nondeterminism, for example, if we had, you know, if `Math.random() > .5 ? b.get() : c.get()`, it is inaccurate dependency set.

CM: Let’s take it as a given these are all pure functions.

DE: Right. I think it is a sound algorithm in the case, I was surprised by this initially, also when I learned about it. I thought, aren’t you missing something? But I think it just works.

CM: That is counterintuitive, but it still works.

DE: I agree.

DE: For algorithms, there are two core algorithms possible. One is where each node has a generation/global version number. When you want to check whether another node is valid, you check whether anything depends on recursively is from, is newer than it–if you see anything going in the wrong direction.

DE: The other algorithm is to push dirtiness and pull values. So, say, we have this dependency graph where F and all other nodes except for A are computed signals and A is a state signal. So, someone sets A. This isn’t the initial time they are being gotten, coming has done F.get. The dependency graph was set up. Now, we set A and want to figure out how to invalidate it and reevaluate it. When we set A, C and B will be eagerly colored dirty. D, E, and F will be colored as pending, maybe they are dirty.

And then, once we start pulling F, once we do F.get, then it will, you know, start in this kind of tom logically sorted way, evaluating things and remarking their dirtiness as appropriateness, until all of the dependencies are there and it can get F. But critically it depends on the first step before this. It was able to push, the graph start out like it looks at the end, it was able to use forward-facing edges to get from A through F to other things as invalid.

DE: So, that algorithm requires bidirectional edges. And that’s a problem that I would get back to if I had time to go through the whole deck. But importantly, there’s an isomorphism between the two algorithms. They always get the same answer. Not even just the same final results for F. They actually can run the same computeds in the same order. Even if you observed the side effects. There’s bookkeeping, they both have bookkeeping. And one important thing is about the garbage-collect-ability of signals.

If you have a graph with bidirectional edges and a computed signal that you’re no longer using, even if nobody’s pointing to it as a usage to the definition, something that was previously there has kind of this forward edge to it from the definition to the usage. And so, somehow, that has to get unlinked to allow it to be cleaned up, if you have the forward edges. On the other hand, having forward edges makes it easier to implement reactions with watchers.

DE: So let’s talk about the watcher API. The goal is to expose when a computed is dirty. So that then you can trigger reevaluation. So the typical pattern is, you put a watcher on a set of signals and when they become dirty, you schedule to run later a call to `.get()`. We don’t allow you to call `.get()` immediately in a watcher callback. The watcher callback is called synchronously when a signal becomes dirty. If you .get() it right there, it breaks this atomicity property, which right now, you can actually do multiple sets on different signals, and there is no way that any code that can access those signals can intervene between those. Because all it can do is schedule things for later. So the API looks like you have this notify callback that you can pass into the constructor. You can add signals to the watcher set and remove them from the set.

DE: Now, removing from the set, we might consider cancellation as the way to remove it or disposal. That’s kind of a TBD. So, to implement effects with a watcher, this is kind of a lot of code. So I don’t think we have time to go through it. But the idea is that you schedule a task, like, a microtask that will .get() them all. So that lets you make a computed that will put something in the watcher and then it will run when it becomes different.

DE: GC-able computed signals are important, because you may have signals coming in and out of existence as your program executes. They may be, for example, related to a particular component. So you may have sort of a list of things and then each thing in that list has some interactive element. And these elements of the list get created and deleted over time.And so we have to figure out a way that both state and computed signals can have lifetimes. One way is for the lifetime to be based on ownership. There’s something around it. Probably a component. That owns the signals that are created inside of it. And you know, it somehow knows they are related to each other. Then you can use that for disposal because when that outer component is disposed and there’s some outer mechanism to control its lifetime. It can dispose the signals inside of it that are related.

DE: We can do a better job of model view separation by enabling computed signals to be GCd, but this runs into this bidirectional edge issue. And more, and more frameworks are adopting this GCable computed signal approach, which the champion group would prefer to adopt if we can manage to prove it is really fast enough, whereas our current polyfill is not quite there.

DE: A computed is alive if either there is a reference to it from JavaScript, or an indirect reference, for example, in the closure in some other computed or included in a watcher. Unwatched, unreferenced computed should be GCable, bidirectional can hold them alive longer. One is to use WeakRefs for the forward edges. That is not great. WeakRefs have a lot of costs. And the other is to switch between the two algorithms I mentioned earlier depending on if something is being catch'ed. That’s how its owning complexity, but sort of the algorithm in the polyfill and the spec.

DE: So next steps are to continue developing the polyfills, test, benchmarks, integration into libraries, frameworks, and applications and to collect feedback based on this. We have some known things that should be changed about the current APIs, and people should expect more than 12 months during stage one for this proposal.

WH: How does this deal with graphs which reconfigure themselves? A simple example is this. You have a state signal A and two computed signals B and C. B, when you query it, queries A; if A is false it then queries C. And C, when you query it, queries A. And if A is true, it then queries B. So everything is fine as long as A stays false. That is somebody changes it to true. What happens?

DE: So I don’t, I’m not quite following the example. But an important property of this system is that signal graphs are acyclic.

WH: Yes. This is acyclic.

DE: Maybe

WH: This is acyclic once it settles down. But it gets tricky during transitions.

NRO: You can repeat the examples, we will write it in the queue with the right dependencies that you mentioned.

WH: Okay, A is a Boolean state. B queries A. And if it is false, then it queries C. C queries A, if it is true, then it queries B.

```javascript
a = state(false);
b = computed(!a ? c : 5);
c = computed(a ? b : 7);
```

DE: Okay. So, what’s the problem? I mean, doesn’t this settle immediately?

WH: It settles immediately, but then A changes. What happens when A changes?

DE: When A changes, B and C both get eagerly invalidated. The invalidation is based on the previously seen dependency set. So, the invalidation it might end up doing too many things if on the subsequent evaluation it doesn’t do, but I’m not aware of scenarios with pure functions where it will do few evaluations. Can you explain why you think it might do too few invalidations?

WH: The issue is during invalidation it might get a temporary cycle in the graph.

DE: Okay. Let’s follow-up offline. I would really like to understand the cycle scenario that you’re talking about.

SYL: Yeah. I think we can probably take this offline. But the intuition, should basically be, because we get lazily, there is a stack of things being gotten. And the only sort of cycles that might matter after we’re done are the ones that are being instantiated by the current stack. So I think this example goes through, we may be—we may have to think harder about which sort of not quite cycles we make sure to allow if that’s actually helpful.

DE: Right. So just to clarify. The cycle detection, because of the lazy get, can be completely online. Just each computed signal has a state of whether it is currently computing. And if you get back to, you know, if after the topological sorting you are accessing something that is also currently computing you kind of know there’s a cycle.

### Summary / Conclusion

- The goal of signal algorithms, which many frameworks have gradually reinvented, is to accurately recalculate parts of the function from the model to the view, as if the whole thing were run from scratch, but only re-running that part.
- The pull-based, topological sorting algorithm, with auto-tracking, provides a correct, coherent way to do this incremental re-evaluation. Push-based models suffer from glitches.
- It is useful for computed signals to be GC’able when not watched, but simultaneously to have Watcher callbacks which are eager. There are data structures that support this combination, but it’s a little tricky.
- Discussion with the committee was mostly clarifying questions. WH raised a graph scenario to investigate offline for correctness.
- Signals are at stage one. They have been integrated experimentally into a number of frameworks and libraries, but there is still significantly more experimentation and iteration to do.
- We encourage involvement at the various levels. Please join our Matrix channel or unofficial Discord. There are a lot of opportunities for getting involved especially around coding both in the polyfill and tests and example use cases.

## Atomics.pause

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/syg/proposal-atomics-microwait)
- no slides presented

SYG: Excuse me. Okay. So first topic is atomics.pause. There is nothing new basically since last time it was presented. I don’t remember when this was renamed. This was previously called microwait.

USA: Sorry for the interruption, SYG. Just a second, I forgot to ask for note-takers. Would somebody like to help out with notes for this final session? Thank you, BAN and JKP. Please continue, SYG.

SYG: Right. So this was previously called atomic’s microwait. After feedback that the microwait is kind of unhelpful and that pause, this is renamed pause, which is also perfectly good name and also happens to be what some of this equipancy CPU instructions are already called. But otherwise, this is the spec text I’m showing on the screen here. There’s no changes in the proposed behavior, which is to say there’s basically no behavior. It is purely about timing. So there is no observable behavior.

It does some, it takes an iteration number, which is a hint, if you would like to implement exponential backoff in your waiting algorithm. In your spin loop waiting algorithm, it doesn’t really do anything with the hint, other has it validates it is a non-negative integer, if you pass one in. Otherwise it doesn’t do anything with it and it just returns. So hopefully, this is quick, before I ask for stage, I’ll try to ask for stage 2.7 first. But before that, let’s open it to queue.

WH: There is something really bizarre here with this API distinguishing +0 from -0. We should never do that unless there is a really compelling reason. So what’s the reason for that?

SYG: So there are two—so—the intention is basically to make this—okay. So, why does it do any checks at all? Is to kind of the precedent we set with the let’s stop caressing things. It distinguishes negative zero from plus zero. One there was feedback from JHD that would be a nice thing to do. Because the intention was non-negative integers. For V8 at least, it has the nice implementation simplicity benefit that you can just check if the input is what we call a small integer, which are SMIZ, the untagged things not allocated in the heap that live in the value representation of like a pointer, basically. And negative zero is a thing that is not considered a small integer because it needs to be distinguished. So if negative zero and positive zero were accepted, were both accepted, you either have to do them, to do normalization or you have to, like, there’s a few more branches. It’s not a big deal. This is totally open for change. But that’s basically the reason.

WH: So, if somebody gives you 10<sup>40</sup>, it’s fine, right? That’s an integer.

SYG: Yep.

WH: Yeah. But that’s not a small integer.

SYG: That’s also true.

WH: One of the invariants of the spec currently is that we do not distinguish plus and minus zero for counting things. This violates an invariant. So—

SYG: I’m happy to take step B out, that’s concretely what the concern is, right?

WH: Yes, this will come up in places, like if we use our shiny new function to add a series of numbers. If you provide no numbers to it, it produces -0. That’s the additive identity element.

SYG: Right, of course. I hope you’re not using that in a spin wait loop. But yeah, sure, that’s valid feedback.

WH: I’m fine with this if step 1b is deleted.

USA: Okay. MF is on queue next?

MF: I was going to say the same thing as WH, we should not distinguish minus zero. You can arrive at minus zero in various ways. We try not to distinguish them elsewhere. It would be surprising to distinguish them here.

USA: Okay. Next we have KM.

KM: I guess, in your implementation, but for NaN boxing implementation, checking for negative zeros just like more work. So I guess it is sort of like a… it’s not really a win for them. It seems like given the constraints on, or given the inconsistency with the rest of the language seems unfortunate to check for that. It sounds like you’re not going to anyway. So yeah.

USA: Next we have NRO.

SYG: Sorry, before we move onto the next topic, which seems to be a change of topic, yeah, it is not closed, of this one, it seems like there is plenty of good reasons to remove step 1 point B here, so I will be removing that. Okay, please continue with the queue.

NRO: Okay. Yeah. It is, I’m going to turn now to recommendation for the type spent waiting—increasing together with the parameter. Should that be a normative requirement that plus one waits for more than close end? Or would it be okay if just, like implementation to have pause and plus one to be faster than pause and—

SYG: I don’t know what it would mean to make it a normative node. Like, timing is not an observable thing. What would that even mean?

NRO: I think we do have some, like normative text with regard to maps and set, they should not do things in linear time. As in—

SYG: Yeah. Okay.

KM: Okay. I guess on that same note, like, I mean, even if you normatively say the implementation has to take longer, you cannot rely on that, the OS or CPU could not restart you on the smaller number, the bigger number, anyway, it is not like there is control over that. So it is kind of like a meaningless normative, I mean, it would be impossible to actually verify, to like ensure that.

USA: Should I move on with the queue, SYG?

SYG: Yeah. Seems like the responses or the topics are similar.

USA: Yeah. So WH you are next.

WH: Is the intent of the iteration number scale to be linear or exponential?

SYG: The argument itself is intended to be linear. Let me bring up another example if I have it.

SYG: But yeah, the argument itself is intended to be, to be linear. I will switch sharing tabs for a second. This is just the example—this bit of pseudocode is how spin loop usually looks in a new text. And there is some spin count. And the idea is that this spin count would be passed to `atomic.pause`. And `atomic.pause` would choose to interpret that input which is linear. And the intention it can interpret that input as exponential back off.

WH: Well, this example actually makes sense with either interpretation, but it does very different things. If you increment _spins_ by one, it could mean to spin for one more constant time, or it could mean double the wait.

SYG: Right. And I’m leaving that choice to be the implementation’s choice. Whether that is exactly one more pause. So the usual way you would write this like with the line assembly or an intrinsic that is actually causing a pause, you can choose ST implementer writing C++ or C or whatever do linear back off or exponential back off. The reason I didn’t do that for the JS proposal is because the call overhead is pretty high. If you’re not in jet code. But if you’re in jet code, the call over head could be completely inlined away. So for when you’re in the interpreter, I expect the implementation of atomics . wait to wait a different amount of time depending on input iteration number then for the inlined version in the optimizing jit. Does that motivation make sense?

WH: Possibly. My main point here is that we should make it clear in the spec text whether, if one wants to wait twice as long, one should add a constant to the value or whether one should double the value.

SYG: Okay, understood, I would document that, that the input number is intended to increase linearly.

WH: Okay. Thank you.

USA: We will move on with the queue. I implore all of the remaining speakers to be quick. Around 40 seconds. But yeah, next we have DE.

DE: Those, those three notes look good. I think it would make sense for them to be normative text basically in their current form. We’re not restricted as a specification to only do stuff in terms of some JS abstract machine. Most specifications do not restrict themselves in that kind of way. But it’s okay if it ends like this for me.

NRO: Sorry, what I meant before that this, like, usually we put green notes the mean this is just clarifying what is otherwise being enforced in some other part of the spec. That’s what I mean by not normative note.

DE: Please, everyone should stop saying normative notes. Notes are informative and the other text is normative. So if—I know it’s been said a lot of times in this committee, but it is confusing and not a thing we have ever done, I don’t think we should do. This text, I think, should just be normative. It should just be in white.

NRO: I agree with you. That’s what I was suggesting.

USA: Okay. Perfect.

USA: All right. Unless you want to respond to that, SYG. We have RGN next.

RGN: Unexpectedly in the same vein, and speaking as a reader of specification text, I’d like an explicit note step that identifies the point where an implementation waits (if it is going to do so).

SYG: That sounds fine to me, but can I ask why you would find that helpful as a reader?

RGN: Because the emphasis when looking at the behavior of an operation is on the algorithm rather than on the editorial notes coupled to it.

KM: I guess, I guess I still question, as notes can really be normative. Saying you have to do, normatively you are required to do the best practice of the underlying architecture for a spin loop. It seems almost impossible, because that can change based on CPU version, and you might not distribute different binaries on a new CPU. And a new CPU comes out and you have not updated the binary, you are not normatively correct on the CPU. I don’t know what that means.

SYG: There is no observable behavior. Like we can say, I don’t understand, we can say whatever we want, sure, but I don’t know, for implementers to read the notes at non-normative, I don’t know what that means, this is implementation guidance in the past is non-normative.

KM: Yeah, so I’m confused on—

USA: There’s a reply by Michael.

MF: Yeah, just responding to that one point by KM. We have implementation-approximated. This is similar to that, at least.

SYG: It is not at all similar. Implementation approximated. It is about approximating an observable result.

MF: It is; do your best given the platform restrictions you may have.

SYG: If you can observe the degree to which you have like trig functions, that is implementation approximated.

MF: Nobody brought observability into this.

SYG: I’m bringing observability into this. Like that is what normative means. Right? For a piece of spec text. Implementation approximated is, like I call sine of X. I know what the mathematical answer for that is, I can check how close it is to how close the result I got to the mathematical answer. Here there is like nothing to check. I’m not sure what it even means to normatively approximate the ideal there. There is no single or ideal here. I just don’t see the analogy.

DE: I don’t want to completely say a stricter requirement, for example the cases that Keith said, we can’t say that it has to be, one thing has to be longer than the other. I think SYG is probably pretty good wording for this—anyway, the ask for implementers is nothing. Absolutely nothing should change in implementations, but the purpose of the specification is to coordinate expectations. The purpose of adding this feature is to get on the same page about what we’re doing. We are doing that. Implementers will all, you know, implement this exponential back off or something approximating that, so let’s just make that part of the normative text.

USA: So we are pastime. And looking at the stuff that MF’s put on the queue, I think maybe we could go for—consensus and then this could be discussed. What do you think, MF?

MF: Consensus on what?

USA: That’s a good point. SYG, what would you like to ask for?

SYG: So it is MF’s queue was—so, MF had two queue items.

SYG: I will ask for an extension to drain the queue.

SYG: But I still would like to ask for 2.7. If the holdup is exploring editorial conference here, I don’t want to held up two meetings because people are debating on how we should write must notes. Like, that seems like not a productive use of holding up this proposal.

MF: Okay. If we're doing the queue, I would like to start my topic

MF: Yeah. I would be more comfortable with 2 than 2.7. Technically, I think we are fine going to 2.7 because there’s editorial discretion and we can resolve that. The reason why I prefer 2.7 is it’s possible because of the possible editorial space here, how we try to represent this, that depending on the direction we go editorially, we may feel it’s necessary to just run it by committee again to make sure their understanding is the same as what our understanding was with what we are trying editorial. But I am not opposed to Stage 2.7. Remember, though, if we stay at Stage 2, there’s nothing wrong with going directly to Stage 3 if you have the proper testing and experience, which is my next topic.

SYG: Sure. Let’s go into the next topic then. I will respond to it that real quick. I would like—okay. My actual goal is, I would like to get Stage 3 next meeting. I am—I don’t care to much about which stage 2 or 2.7 we end at this meeting, so long there’s an understanding that I'm not asked to wait another round of plenary due to exploring the editorial space come next meeting. If we can work out this stuff between this meeting and the next meeting, I have no concerns what the exact stage we end up. Because the bar here is that nothing we—it seems like the concern will have no impact on the actual like technical parts of the proposal. Right?

MF: Yes, I agree. And I think it’s perfectly fine to go from 2 to 3 at the next meeting, assuming we have resolved anything we need to resolve.

SYG: okay. Then let’s please take care of the next item.

MF: We have a reply before that.

USA: There is point of order. SYG, the rest of yours as well. Did you want to continue draining the queue, or… ? Effectively transferring time?

DE: Okay. I think the remaining questions here, although they’re normative, because about what normative text are, they are editorial questions. I think it’s not going to change the shape of the API. So I think the most appropriate thing for us to do would go to Stage 2.7. Now, about testing, if these are being put in notes because it’s impossible to write a Test262 test for it, I think we should be able to lend normative spec text which is impossible to write tests for sometimes. We can’t test all the SharedArrayBuffer memory model stuff. So anyway, I think we can work out this question, whether it’s in notes or not, you know, any time between now and Stage 4. And I would encourage us to go with 2.7 rather 2, to send the strongest positive—we don’t want to put up extra barriers at the same time as we are going to figure out the best wording possible for this before it’s merged into the spec.

USA: Next, there’s MF?

MF: Okay. Well, yeah my next topic was on testing. I just wanted to know what your plans were, if you thought about what we should have as the Stage 3 entrance criteria given the impossibility to write most of the tests for this. You could really only test for its presence and callability or something.

SYG: That’s pretty much my plan.

MF: That was the plan?

SYG: Test for API surface. That, like, you know, function length is correct.

MF: Given that, I just wanted to make sure, preparing you for advancement to stage 3, is there anything else the committee would like to look for other than those simple presence and callability tests?

DE: I am curious whether browsers will have their own downstream tests for this.

SYG: I don’t think it’s testable. It’s not observable even to the OS. Much less to the VM on top of the OS.

USA: So that was the queue, SYG

SYG: Great. Thanks. I will come back with the formal consensus request for 2.7 with 1.B removed. The highlighted line, this is removed.

USA: Anyone? Also feel free to give any explicit votes of support. Here they come. WH. DE and ACE all express support.

SYG: This is 2.7. The action items for next meeting is that MF and I and probably KG will try to first I propose we as the editor group come up with our preference, then we present what to do about these normative/informative notes to the community at the next plenary, as a prior to probably Stage—technically for Stage 4, but I would like it to be settled before then. Sounds good to you, MF?

### Speaker's Summary of Key Points

- Core semantics unchanged (there is no core semantics, it's an unobservable wait)
- Will remove -0 checking (step 1.b) for optional iteration number argument
- Ongoing editorial discussion for how to best present implementation guidance notes
- Asking for Stage 2.7

### Conclusion

- Consensus for Stage 2.7
- Editor group to come up with recommendation for implementation guidance notes and come back next meeting

## Shared Structs discussion around methods

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-structs)
- [slides](https://docs.google.com/presentation/d/1aeXqO6uR_HVuWyciudHGRCd8J12UGhqwygYHl3FOmVc/)

SYG: All right, thanks. Next topic, let me… share. Are people seeing the new screen? I can’t see what my screen is. Okay.

SYG: So this topic is—this is not asking for a stage advancement, it is not even an update. It is a recap of what is currently proposed for what to do about methods on shared structs and concerning the concerns that MM have brought up with the broader audience. The first part of this slide deck will be decree capping the motivation and the actual mechanisms being proposed here and why they are proposed. And then there will be some discussion topics.

SYG: So the motivation for having methods on shared structs is basically that programming is defining data structures and then having procedures and behaviors on those data structs that has been defining these between threads. But the second part of that is, while you would like to also be able to do things with those shared structures, how to define functions on those. There’s some assumptions before we go on to explain how we end up or have currently. As you know, JS functions as we have them today are deeply shareable. They’re tied to the creation realm. That kind of thing.

SYG: So they’re just very staunchly not thread-safe. It is possible to propose new exotic callables that are more restricted in some way, that could be shared. But the design space is large and adding a new kind of function to the language is actually a—has a lot of downsides and I am not interested in exploring that space currently.

SYG: So if we're proposing new exotic call backs and use the functions we have today, recall that it’s fine for unshared things to access shared things, the problem is unshared things—the problem is if shared things can access unshared things. It’s fine for JS functions to access shared data. So the upshot of all of this is, let’s see how far we can get without introducing new exotic callables, because that’s a whole separate design space, and last time, I checked with folks, grant the years ago, everybody was extremely allergic to adding a new kind of callable with very different behavior.

SYG: So those are the assumptions.

SYG: Most of this talk will have running examples of this simple 2D point structure. I got to 2D point structure. Y and Y. And I want to calculate distances between two points.

SYG: We have a sucky option, which is we use free functions. Imagine you were doing object-oriented programming in C, before the old languages came along. Am I still on the thing? My video feed froze.

CDA: You’re on sucky option free functions.

SYG: Okay. All right. We can do free functions. So if you want a distance method on point, you can make a free function called distance that takes arguments as points and then computes the distance. We try this first in the prototyping efforts. We led with this because it’s strictly less work. It seems fine on paper. You can tell people, it's bad you don’t have methods, but use functions. You have functions. That’s fine. The problem with that, we got unanimous feedback to incrementally adopt into the codebase. Unless there's a reason, this doesn’t encapsulate anything. We could program everything like in C, but obviously we moved on from that because there's a better organizational tool for the codebases.

So why does this make incremental adoption really hard for the future? Say you have existing code you want to parallelize a corner of. This is the most common case that people want to use this feature for in existing JS codebase sincerely. You have a big codebase that already has something. Game engine, something. Most programs are not embarrassingly parallel, but kernels. They look at the giant applications that have performance pressure and identify the subsystems to be parallelized. So say the corner you want to parallelize is this distance thing, with points. You’re probably adopting—trying not a feature in the codebase that has a point class because everything is single threaded today. That has a method. Like chances are, that your code is not organized with free functions today.

SYG: On the left side is what is the point class with a method looks like. This is how you would write it in JS today. If you were to use it, use dot negotiation to call a method. That’s what you would do today. If you want to make this shared and use free functions, you have to make now—you have to make a global change. You can’t just locally change the definition of point and the distance method. You now have to change all of your call sites to use free functions instead of method notation. And you say, okay. Sure. But like you can do a code mod. You can do global search and replace. Yes, you can. It’s a pain in the ass. But the bigger challenge of requiring the global code mod to adopt the feature, it becomes very difficult to A/B test. Like it’s a global change, but a conceptually [inaudible] change. The only thing to parallelize is the point class. If you change the entire codebase and every use case, to A/B test the benefit of paralyzing that particular corner, you have it ship two binaries.

SYG: Now, imagine that you have multiple subsystems, you want to run experiments on. This gets out of hand quickly. For like real world software, you don't want to require a global code mod to adopt these features. And it’s generally unergonomic. You have folks who want to use this, check if the input data is a shared thing, then you can’t use dot to the methods and use free functions. So the feedback from the early adopters from both Microsoft and within Google was it’s really difficult to incrementally adopt, if you don’t have method support. So if the sucky option is free functions, I think the better option is methods. You want to type this. Which is where you already can type in class. But if this is what you want to type, we have to answer some hard questions here. Where do the shared struct methods live? JS functions are not shared and shared data cannot point to unshared data because that is not thread safe. If functions are not shared, but the instances are shared, where do we put these unshared JS functions that are supposed prototype methods?

SYG: So the first mechanism we are proposing to bridge the gap here is that the prototype, the bracket, bracket prototype of shared objects we make them realm local, meaning the prototype objects would be unshared objects. Here, I have like the included is supposed to be a heap. This is a heap of shared things. They would point to a realm-specific prototype in some realm, and because it’s realm-specific, and it’s realm local, there is a different copy of it per realm. So if I access my point inside realm A, I get that. Realm B, I get realm B’s prototype. It is thread-safe. Because it’s a thread-local thing, you can then put whatever values you want in it because there’s no restrictions.

SYG: So the magic happens when you access the bracket, bracket prototype. It does a realm local look up instead. These things are themselves unshared. The prototype objects are unshared so they can point to anything. Conceptually, how this works is that implementation of course can defer. Conceptually, when you evaluate a shared struct declaration, you can conceptually create a storage key, when you have done multi-threaded programming in other languages, thread-local storage, they are keyed by a TOS key. This is basically the same, except instead of thread, I think the most sensible unit of organization for us is a realm not a thread.

SYG: So you get a realm local storage key. The keys themselves are shared for the sake of ease of thinking about it, you can think of them as primitives, like a number or string or something. Each realm has its own table of realm local variables that are keyed by these storage keys and the initial value of this prototype will be whatever the shared struct declaration evaluates to. So going back to this example, if this were a class, right, you would evaluate this to a point constructor, creating a `point.prototype`, and that function—the point dot object would have a distance function on it.

SYG: For the shared struct, point constructor which is thread local. That would have a point—realm local. The prototype object is realm local. And that local object would have a distance method on it.

SYG: The analogy that might help you think about this is primitive boxing. If I type something like this. Draw.true string. How does it work this primitive. It doesn’t have a prototype slot or anything. How it works is that when you need to box a primitive to kind of do a prototype look up to call method, you look up the primitive prototype in this case bool in the current realm and use that as the prototype. Analogy to the mechanism is that the key for primitive boxing, the key is fixed. A boolean always looks up `Boolean.prototype`, and a number primitive always looks up `Number.prototype` and so on. For a shared struct case, the per shared struct declaration. Instead of always being fixed.

SYG: So yeah. Realm—I think a realm local prototype are like primitive boxing, but the key is per shared struct evaluation. So that’s mechanism 1 for how—where do these unshared functions live. They live in these realm local prototypes.

SYG: Okay. That means we have a place to put them. That, but we still have usability problems. And we’re calling this usability problem the correlation problem.

SYG: The question; we have these realm local prototypes and what is the initial valueOf these realm local prototype objects? If I evaluate this shared struct declaration inside realm A, it’s pretty reasonable, we get to inside this realm where the shared struct declaration was evaluated. Like if I evaluated this, I would expect the prototype to have the distance method on it. Inside realm A. Because I evaluated the declaration in realm A.

SYG: But the whole point of this proposal is to share data with other threads. If I postMessage my point instance to another realm in another thread, what should that realm's local prototype object be? In realm B, I have not evaluated any shared struct. Point declaration. All I got in realm B was an instance of the point shared struct.

SYG: So realm B can have a realm local prototype for point, but what should its initial valueOf this pretty type be? Does it have a distance? Does it have anything?

SYG: So if you don’t do anything, basically, realm B doesn’t have anything on its realm local prototype. How does it know what should go into it? All it knows is that my point share struct has a realm local proposal tight and it was looked up according to the key in the realm local table. But it doesn’t know what the initial valueOf that should be. So really, there’s a choice to say there’s—nothing should be in there initially. But that’s pretty unergonomic that way. The expectation obviously is that you have a distance method that can be called. That is basically, behaviourally the same as the distance method. As evaluated in realm A, except a different JS function object.

SYG: So the correlation problem is how do you correlate the prototype objects of a shared struct between different realms? And broadly, there’s two ways. Manually do it. You have a manual initialization handshake phase where you kind of communicate all the shared struct types that you need for your application to all the threads. And then all the threads know how to programmatically set up that, once the application once it runs as a communicates the structs back and forth, it can call methods as you would expect. There’s downsides to the manual approach. It’s more code. It’s more startup. But the main problem from the performance point of view, this means your application must have a serialization point at startup time. This is bad for loading performance. You can’t just load all your threads. You have to load them. Now get ready for the correlation phrase, I send you the struct and you set up the prototype and after you can start the application.

SYG: And that’s ideally lake to avoid that serialization point. So that leads us to think, can we solve the correlation problem automatically? Somehow? How do we do it without the initialization handshake phase. That’s the second mechanism we are proposing which can called auto correlation. So or for the sake of being concrete, I have not presented any strawperson syntax at all. Imagine in the shared struct declaration, there is some incantation you put there, this is a shared struct I want to be auto-correlated. And what this does, is that if you saw, a shared struct is auto correlated, the definition here is inside some module point.mjs. I import from multiple realms, I want things to work before explaining how we think this can be implemented, this is the goal. If I say this shared struct is auto correlated and import it, I should be able to indicate instances of that struct to different realms and have the prototypes and observed prototypes set up without any manual correlation.

SYG: So how we are proposing to make that work is that if you declare a shared struct as auto correlated, remember this realm-local prototype key, we then say that this key is its source location. So in this case, the source location is point.mjs and whatever the cursor offset is when the declaration starts. If multiple realms evaluate the same SourceText containing an auto correlated shared struct declaration things behave intuitively and just work.

SYG: So the idea is that I have my declaration in its own file, which means that every time I evaluate it, no matter how many times I evaluate from which realm, because it’s in the same file, in the same source position that determine its key, realm locally prototype key. So this point and this point in realm A and B have the same key. And when I evaluate point from point JMS in point A, I set up my realm and assign distance to it. And the same thing for B. And these can correspond because they have the same key, which is the source location of the shared struct point declaration.

SYG: So these are the two mechanisms we are proposing to make methods on shared struct just work. Method 1, the prototype themselves are realm-local. And mechanism 2 is this opt-in auto correlation mechanism.

SYG: And I want to make a point here that the two mechanisms are distinct. Before moving on to the next portion of the discussion, the concerns are with the auto correlation mechanism. I want to drain the queue if there’s any clarifying questions first and after the clarifying questions, any concerns with the first mechanic E, the realm local prototype.

SYG: So let’s go to the queue.

CM: So in my experience, it’s not uncommonly the case that the relationship between parties that are sharing a piece of shared data is asymmetric. And it could be that one of them is more producer-like and one is consumer-like or, but there are lots of possibilities. And in that case, it is nice to have some sort of single place where you can define the behavior, but the behavior that makes sense in realm A, you know, the set of methods and the set of methods that make sense in realm B might be different because they are doing different jobs. And if you do something like this, you are going to end up with the same behavior, which exposes a bunch of inappropriate functionality. On each side of the shared relationship. So I am wondering if you have taken into account the idea that, you might not actually want to have the same shared behavior, have the same behavior on either side of the shared relationship, but nevertheless, you would like to be able to have a declarative form, that lets you associate the behavior with the data in a more traditional object programming way.

SYG: I haven’t thought about that particular use case. It’s expressible in the current proposal, but non-declaratively, but manually. Imagine, if you don’t choose to auto correlate, you just remove this incantation. Then, when you communicate a shared struct to another realm, the other realm will have no behavior attached to it and if it wants to expose a different set of behavior, it can just set it up itself. Imagine, you have a point for producers.JMS and a point for—a point for consumers.JMS. The difference is, it can’t declare the type, but it can give a `point.prototype` being communicated to, choose to put behavior on that is only appropriate for its realm. You can programmatically do this. I don’t know how you declaratively do this. The asymmetry is a runtime programmatic symmetry. We can’t say, these realms are—have different views of the same type of other [rm]s

CM: This seems like a common case. One of the reasons why you would have something shared is if you are trying to do some kind of scaling thing. But very often, in my experience, it’s really because there is a division of labor between the different realms.

SYG: But so like yes, I agree with that use case. But I usually do not—I don’t think I have seen that reflected in like the type system—the type level layout of a class whereby dynamically from different threads you are unable to access certain methods. Like, I haven’t ever seen that. But you could set that up programmatically.

CM: Well, more—yeah. Part of it is introducing a new mode of communication between threads, aside from just messaging. This sort of asymmetry is much more common when the relationship is strictly based on messaging. But in my experience, it is by far the predominant case and how does it generalize to the shared struct case. But I think this is something that would bear further thought.

SYG: Do you have concerns with the—with expressing that asymmetry programmatically?

CM: Other than the fact—well, you know, there is the ergonomics consideration. If you have to set up this—you have to have a mechanic for setting up the binding of behavior at one end to the other of the relationship, and rather than having it sort of automatically taken care of you as it is in what you are probing for the symmetric case

SYG: There are extensions to this. During [str*ibz] evaluation, you are query sting about the evaluator realm. And then do something different, depending on what the realm tells you to do. But that seems like more complexity and interested in exploring that space, we can think about it. But it’s—it seems just—yeah. There will be more machinery needed to have this kind of asymmetric conditional evaluation

CM: We may have inhabited different points in the application space in terms of the things we do. That asymmetric thing has been almost universal among a lot of stuff I have worked on historically

SYG: I would have to see examples in any other programming environment with that asymmetry and district attorney clarified at the type level.

CDA: RBN?

RBN: Yeah. I wanted to reply to this because there are a couple important points here. One is, one way to look at this asymmetry, are you look at this as just message passing? Where you have functionality within one side and send it to some other service that accepts and does it work? Which is what we get with postMessage.

RBN: The other is, something we did discuss, in the champion’s group and with the stakeholders which is early on, we discussed how would you handle a case where you wanted to bundle for a client—bundle for a main thread and have a separate bundle for a worker? And how would you then want to say [strip] out the functionality you don’t need so you have a slate linear portion of the point class in the worker versus the main thread based on tree-shaking, et cetera.

RBN: And one mechanism we discussed or considered was the ability to just as we say, we have some type auto correlated incantation and other incantation we do within the definition that says that instead of correlating based on source location and offset instead correlate based on a predefined value like a UUID or URN or something like that. That you’re manually correlating. We discussed that and found that there were security concerns raised around it then becoming a mutable global registry that could be used to provide communication between two independent objects that should have otherwise no other means of communicating, or security environments. So one of the references we have even been looking at is this magical auto correlation mechanism, it takes all of these things out of the hands of the users so they can’t be used [many license?] for these types of capabilities.

And as a result, that imposes some limitations on what you can actually do with the declarations in those cases. You can’t split them and have a deferring version of them if you burn them, the bundler needs to be able to split out the functionality and many bundlers can do that today, split out shared functionality between multiple different entry points. And that is something you would have to do to have this auto-correlation mechanism work. Again, it gives you the benefit of not only the good developer experience and ease of use, but also avoiding mutable global communications channels that are security vulnerabilities.

CM: Yeah. The one example that comes to mind is I have been thinking about is a thing called proxy IO, a major piece of the infrastructure that glued yahoo together. This is outside the JavaScript realm, this is C code. But the thing, the function as a correlation ID was in fact a specialized device that was added to the operating system which is not an approach that generalizes very well.

MAH: I just want to quickly answer that there are ways to manually correlate types without having the security concerns at a global mutable registry and on. It does require defining a type that you can pass around. And so I don’t want to discuss it much more here. There is a lot of other questions on why—I want to note, this is not the only approach. Not all approaches have security concerns. That’s all I wanted to say.

CDA: LCA?

LCA: Yeah. I am going to skip over this. I think it was already answered in the matrix.

CDA: Sure.

LCA: I will move on to the next topic. How do you propose these auto correlation tokens or the source locations are compared across realm?

SYG: I was thinking of the first option by position.

LCA: Okay. I feel like this would…

SYG: A vector for attack, someone would need to control the server to kind of serve you a different thing, but with the same specifier, the same byte position.

LCA: Maybe. I feel like it would be—yeah. I have to think about this more, but my initial instinct on that I feel like it’s better to do something where you can guarantee that this shared struct is identical. It has the same SourceText in some sense

SYG: Yeah. We can have—we can have an additional check of the source text is literally the same. Keep it around for to source anyway. Sorry. toString. Not to source.

LCA: Sure.

NRO: Would the proposal that I presented earlier today, would you get the—once, and use this model to create multiple workers? Or like pass it on to multiple workers. The module would have a global ID and this ID is what makes sure the source location is actually the same. It’s actually the same module loaded once and not loaded multiple times.

SYG: That sounds fine. My only concern there is how we should warn people if they want to use this, they have to instantiate the workers in only one way. It might or might be okay.

DE: I think it would make more sense for auto correlation to be based on one of the module specifier + the location within the file. Rather than tying it to anything to do with import source. If we’re okay with the dependency on ESM, but…

LCA: Just to reply to that again, I don’t think—I think that means the same thing, Dan. I think import source ties to an import source that is keyed by the module specifier.

DE: Right. So it would work to use import source, but there’s no dependency there. It would work just as well if you are just importing a module from—without import source. I had suggested a long time ago we use module expressions for this in somehow a similar way, you would send the module expression, it would track the identity. I think it’s easier to maintain identity by the path, by the module specifier, then to maintain it by the identity of the particular source object.

LCA: Sure.

DE: So I think—

LCA: In GB’s proposal, the source object does not have cross-realm identity, which is the specifier.

DE: Right. That’s where we landed on module expressions as well.

DE: So yeah. I think it is more expense to conceptualize this—sure. It’s the same thing. Sorry.

CDA: Waldemar?

WH: Let me see if I understand this correctly. What happens if your shared struct definition is not at the top level scope and you evaluate it many times?

SYG: Right. This would be—okay. What happens there is that you would get—one thing I glossed over when you evaluate this, you also get a constructor in your realm. Because that’s a function as well. So what would happen if you evaluate this shared struct in a loop, for each evaluation, you would get a distinct constructor, but if it is auto-correlated, you get the same dot prototype.

SYG: This is different than if you don’t have an auto correlated incantation, and different from if were evaluating a class declaration, where you get a fresh constructor and a fresh prototype object, each evaluation.

WH: Okay. So if a shared struct is nested inside a function, it could capture variables and have a different set of captures for each time it’s evaluated.

SYG: That’s right

WH: And I guess the last one would win for auto-correlation — or what would happen?

SYG: A broader point you bring up is auto-correlation doesn’t compose well with not-top level evaluation. You shouldn’t do that to be evaluated multiple times.

WH: Yeah. I understand that. I just wanted to understand what happens if somebody actually does that.

SYG: Yeah. We could in fact just prohibit it. I think syntactically you could prohibit that incantation to be composable for nested things.

CDA: RBN?

RBN: This is something that we’re going back and forth about in the champion’s group as well. One way to look at this, you might be able to say that shared struct declarations are only allowed at the top level. They can’t be nested in loops and must be declared once. Essentially statically declared unlike how classes are evaluated dissipate the differences between how [inaudible] cannot be handled in that case F you said shared struct declarations could only be top level, you don’t have to worry about those concerns. But it has other caveats, it definitely limits where you could actually declare these struct declarations, but…

CDA: LCA?

LCA: I feel like this would severely limit where you use them. You would not use them anywhere with JS because that’s wrapped in a function and not top level anymore.

RBN: This is conjecture at this point. We are working out whether or not that needs to be done. It’s not entirely settled yet.

CDA: MM?

MM: Yeah. The—so I will start with the first—SYG divided this into two questions—yes. Thank you. I have concerns with the realm local prototype mechanism. I have concerns with anything that associates behavior in this way with the shared struct type. The point example is a perfect example of what is, to my mind, really a contradiction in nature of the proposal and the rationale for it. The point—the x and y there are public properties, correct? That the methods—the distance method you wrote does not encapsulate the X and Y and others that have access to a point instance can invoke the methods. You can go directly to the [inaudible], correct?

SYG: That’s correct.

MM: Okay. In that case, this is a non-thread safe abstraction. You’re not—the surface of this API necessarily does not encapsulate the concurrency concerns. But they—important fact about shared state multithreading, the reason why BE used to take the stance with that multiple threading was going to enter the language over his dead body, is because it is extremely hard to program correctly and the experience languages like Java and C# is that programmers really underestimate the difficulty, overestimate their ability to incrementally adopt this to just take the programming patterns from sequential programming that they’re used to and add concurrency and assume things work, which they don’t. It’s really—it’s a horrible train wreck. One way to understand the train wreck, of trying to make this incrementally adoptable, is that the in general the JavaScript ecosystem is able to have extraordinary composability because with regard to the kinds of accidents, not malice, but the kind of accidents, that fallible programmers make generally abstractions that are provided by libraries are defensive against the expected form of accidentally fallibility. And the abstraction mechanism of the language are supportive of that defensiveness. Shared state multiple threading is a co-operative concurrency pair times. In Java, it’s for all of its problems, at least has two things that this one does not have: which is when exposing these things, the natural way to do is that anything that is going to be an object that is accessed by multiple threads beings all of its fields would be private fields, and therefore, not directly accessible from outside the object. And the methods would generally be what they call synchronized methods, meaning that each method would be a—have its own mutual exclusion lock. That doesn’t work. That’s part of what programmers misunderstand and underestimate, is thinking they can scatter synchronized methods and have things—that have that be adequate ways to do and the result is a mess. But your distance method here doesn’t even have a lock on it. The distance method that you wrote in your example promoting the proposal is itself a non-thread safe racy method.

MM: So the—when you say that you need the behavior on the—on the object, accessible from the objects, in order to get incremental adoption, well, the shared state multithreading to use it correctly, and robustly in a way compatible with the ecosystem is not incrementally adoptable, even if it appears to be incrementally adoptable, you are going to create a harp. So the thing—so let’s return to the function that is—that is the main argument for allowing shared state multiple threading into the language at all, which is the coexistence with WasmGC C has the [db] has structs. Structs in Wasm GCs are fixed plain data objects. They don’t have methods or behaviors associated with them. The coexistence of Wasm in JavaScript and the—and the constraints that the spec does and does not place on host behavior clearly allows hosts to expose the Wasm GC structs to JavaScript as plain data, fixed shape objects because the fact that they’re racing concurrent under the hood is not something that violates any the host object. That’s that function.

MM: Given that those things are going to be exposed to JavaScript anyway, why not also have JavaScript programmers be able to create, you know, to be JavaScript to be the origin of such structs and pass them around starting from a creator in JavaScript? And I think that’s a reasonable enough argument if we stop there.

MM: And that goes back to SYG’s original proposal, you only operate on things from function from the outside. You don’t have behavior from the inside. The—given that the first function is coexistence with WasmGC, and its shared structs, none of these auto correlation or prototype inheritance mechanisms extend to Wasm. The behavior of these objects as exposed to Wasm is not going to be that the Wasm code invokes through the JavaScript methods and therefore the methods can’t encapsulate the concurrency concerns—I mean, it’s—it’s exactly the rationale of using Wasm as the forcing function that also makes this—providing these things with JavaScript behavior incoherent. It contradicts the initial rationale.

MM: So I will stop there for now.

CDA: All right.

SYG: I understand your general position. I just don’t understand this specific concern. Like, the—as a very concrete counterfactual, if your preferred is functions unencapsulated I don’t understand how that addresses your concern that you can have thread unsafe code. Like, if the alternative is unencapsulated free functions, all the data on the structs have to be publicly accessible on all threads. I agree it is just difficult to get thread safe code correct.

SYG: And like I don’t understand how free functions address that at all. Except to be more unergonomic for the same amount of bugs.

MM: What it forces the programmer into is that if they want to expose an encapsulating object API, between the code—between where among the things encapsulated are threading concerns in general. In other words, expose a thread-safe API, the natural way to do that is to hide the—you know, hide the structs and hide the free functions that manipulate them behind a—and you know, another layer of code.

SYG: You don’t want to do that. That means you are creating wrappers per thread. And that is going to—that will spin your memory use as you scale with the number of threads, which hurts salability

CDA: We have maybe 2 minutes remaining.

MM: Okay.

SYG So okay. If we have 2 minutes, we are going to finish this mark in 2 minutes.

MM: I will yield to the rest of the queue. But clearly, just to comment on that last thing, with X and Y public, it’s not possible in this propose as it stands for your API surface to encapsulate the threading concerns.

SYG: It—there’s more of a chance for it in the future if we were to… if we’re to extend private names as they are today, we knead to work in a multithreaded way, but to a multi-state would require you to have you know this sets on it. In the long term, I think restricting to free functions is not going to be helping your goal. Relatedly for the state of WASMGC—yeah. Shared WasmGC today and how Wasm is exposed to JS today is up in the air. That is not a high priority thing to be worked on. Certainly, it’s a lower priority thing to work on than the core part of the Wasm proposal for getting the structs to be shared. But once we get that part spec down and prototyped. We're [ unclear ] it to what they want out of the JS Wasm API and when you need to get these out of Wasm and into JS and how to access them. I would imagine some of that feedback to be similar to what the early adopters of the JS prototype have given us which would then put us down similar roads. Except then, we do the Wasm. We will do that if the partner feedback says that.

SYG: I have on here a list of bullet points I was hoping you could answer that. The concern I heard, you have a well founded wariness that people will get this wrong. But as I think more about it, I just don’t really understand what the—I think I just don’t understand. That’s not a design principle that I can work with this, if you don’t think it’s safe enough. There’s no way to—to only make bug free programs accessible. If we agree that that is not possible—

MM: We agreed that it is not possible.

SYG: Right. I would like to understand what you think is possible because I hear things like there’s not enough friction to discourage from getting things wrong. I don’t why cross-relation is not enough friction. I don’t understand—yeah. All this stuff. We tried to set up calls offline and we haven’t really been super productive there due to scheduling snafus.

MM: I have lots of answers, but given limited time I will yield to the rest of the queue

CDA: We are on time. Maybe we could, if folks could be very, very brief, I don’t know if that’s possible. Given the nature of these questions, SYG do you—can you see the queue

SYG: I will try to answer Keith’s question. Can I answer that question directly?

KM: Go ahead, then the point is, at that point, like, you just have—like, a forcing function in that event eye Wasm will have this, and the—what ends up happening, user friction in the form they will release, they will expose a function from Wasm that you will call to set your properties on the shared struct. And it will be the same as the JavaScript API. And probably generated by whatever the build tool is. I am not sure that reduces any of the bugs. It moves them into a different section. But yeah, that’s all I was thinking. \

SYG: Yeah. I don’t think we have time to go through the rest of the queue. MAH.

MAH: I wanted to say this not only about sharing behavior in the future. We will most likely want to introduce something akin to private fields or private data on those shared structs. And so any correlation mechanism that we introduce is not just for behavior. It’s to have access to the private data. Also, we keep thinking about that—that—those shared data will—the shared struct will also include working with Wasm code potentially. And I do not see how a correlation/auto-correlation based on module specifiers would work if you want to give access to Wasm code to private data on those shared structs.

SYG: Yeah. I think private data is going to be a thing that is going to survive any FFI boundary. And the consider laying mechanism is for prototypes only, which is a JS concept rather than a Wasm one.

MAH: I don’t see why you want to have private data accessible from different languages. That seems like a—

SYG: Our sense of privacy is lexical. How do you private that across languages.

MAH: Yeah. That’s one thing I wanted to us to think about

CDA: okay. Sorry. DE, can you be very brief with your two items in the queue

DE: I think we can make did so if something is syntactically auto-correlated we will choose the private names. That’s not simple. But it would be nice to have data presented for the cost of the handshake in the cat, NRO’s suggesting various mechanisms that could be handshake inclusive of handshakes, that might be—soundness issues. This proposal is great. I really hope it can advance in this form. And I don’t yet understand MM’s concerns either.

SYG: I really—I’m sorry, MM. I remain—I don’t know how to make progress here. And unless you can commit to please showing up to more regular calls to really work this through, the only fix for this is time. And so for, we haven’t been that productive. That’s not true. We have been very productive. This point about the methods is a sticking point and I’ve been—I don’t understand the nature of the objection because it sounds like, to me, it’s unsafe. And I think it enables lack of safety and that’s not a thing—like a design principle. I can’t say, I will convey that you feel it is safe. I don’t know how to do that.

MM: Okay. Yes. I will show up at more of those things. My intention was to show up for more of these things. I missed the last one purely by accident.

SYG: Okay. And again, not a threat, but the alternative is that we do this in the JS Wasm API if this becomes too un-productive. That’s the real thing we are weighing against. Helpfully that is clear. The slides are there. So this list of questions, not just MM, anybody who has such concerns, I would like to hear your thoughts on these questions, on the slides. We have a matrix channel. Feel free to open issues on GitHub.

CDA: There was a question briefly in the queue that I answered, but it’s worth confirming. If the meetings were on the TC39 calendar, which I answered yes. My understanding is you referring to the regularly scheduled structs meeting that appears in the calendar

SYG: It’s like a working session or something.

CDA: Structs working session.

MM: Let me also suggest at some point, we should also bring all of this to the TG3 meetings.

CDA: Yeah. The meeting is “JS Structs working session” on the calendar. Yes, we are also welcome—our agenda is sometimes sparse for TG3, which meets every week. We are happy to host discussions as well, if we don’t have another agenda topic on that day.

CDA: Okay. We are past time. And on day 3. SYG, would you like to dictate the summary for the notes?

SYG: Summary is, I recapped the mechanisms that we are proposing to approach behavior to shared structs. And there remains an impasse, in particular, with MM, in that I don’t understand the constraints on their side and we will try to work it out more in our regularly scheduled calls. But at the same time, that the Wasm thing is moving, and if we run out of time on this side, there’s a very real likelihood that things will happen in the JS Wasm API layer instead of TC39, which I think would be a worse result. But that’s a real possibility.

CDA: Okay. That brings us to the end of plenary.

RPR: Good. So I think we should thank our hosts. Mozilla and Aalto University.

(applause)

RPR: This has been an excellent venue and DJ sorting out the audio levels. Eemeli. As well as obviously, sorting out our social on Tuesday night, which was a lot of fun. And also, assisting with the conference to—actually on today and tomorrow, further front end. Hopefully lots of you can make it to that. We have the panel, where there will be 4 people USA, DE, SFC, and Michael, will be a panelist. I will be asking questions. So if you have any questions I should I ask or jokes to tell, let me know

RPR: The next meeting is on the 29th of July. It’s 6 or 7 weeks away. Yes. That's remote. But for people who like in person meetings it’s at the start of October in Tokyo. All right. Chris, am I missing anything or are we all wrapped up?

CDA: I don’t know. I am so tired I have no idea.

RPR: We should thank you for calling and you have been awake a lot at the weird hours. Yes, of course. To our captioner, the transcriptionist, thank you so much for all of your work. And the note-takers as well. Some people have been very, very dedicated at this meeting and previous. I am not going to go through all the names, but always appreciated.

### Speaker's Summary of Key Points

- An update, no consensus seeking
- Presented 2 mechanisms to allow shared structs to have methods: per-Realm [[Prototype]] and auto-correlated struct definitions
- Mark Miller & co want it to be harder to write thread unsafe code, and would prefer shared structs to only have free functions, without methods
- Champion group doesn't understand Mark's argument

### Conclusion

- Stakeholders to continue methods discussion in the already regularly scheduled shared structs working session call
