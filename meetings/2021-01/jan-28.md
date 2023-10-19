# 28 January, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Mathias Bynens       | MB             | Google             |
| Ross Kirsling        | RKG            | Sony               |
| Ujjwal Sharma        | USA            | Igalia             |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Shane Carr           | SFC            | Google             |
| Krzysztof Kotowicz   | KOT            | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Ron Buckton          | RBN            | Microsoft          |
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
| Tantek Çelik         | TEK            | Mozilla            |
| Chengzhong Wu        | CZW            | Alibaba            |

-----

## RegExp set notation for stage 1

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/mathiasbynens/proposal-regexp-set-notation)
- [slides](https://docs.google.com/presentation/d/1vXlLpf3mEa_8Y-GDiRKLCqSzNXPOKWCF7tPb0H2M9hk/edit)

MB: All right, so I want to revisit the regular expression set notation. We already had a very detailed presentation back in November. So I tried my best to really summarize that so we can revisit the high-level proposal and today officially ask for stage 1 which we didn't do last time. Just as a reminder, this is a proposal by Markus Scherer and myself. Let's just recap what it's about real quick.

MB: Concretely what we propose is to add regular expression pattern syntax and semantics for these set operations: difference and subtraction, which means you want to match something that's in A but not in B. Also something that is in both A and B, so intersection. And we also want nested character classes which seems like a separate thing, but it's really necessary to enable the above. One thing to note is that union - so that you want to match the stuff that is in A or in B - that is already supported in a limited form in JavaScript regular expressions within a single character class.

MB: So to make this easier to understand let's look at examples and again, we looked at many more examples last time all of this information is also in the repository for the proposal. So if you want any more details or refresher of the presentation just look at the slides from last time or in the repository. By the way, we're only asking for stage one. So I'm using example syntax here. We don't consider this syntax to be set in stone just yet. We're definitely still open to change it. These are just illustrative examples to help explain the functionality. So yeah, let's not fight bikeshed on syntax just yet, maybe.

MB: Okay. So going over the first example, let's say you want to match non-ascii digits to them later converting to ascii digits in your code. With this proposal you could do something like this where you have a character class, you look for decimal numbers and then you subtract a hard coded character class in this case ranging from 0 to 9.

MB: The second example we're using intersection do match spans of word or identifier letters of specific scripts. And yeah, this is using nested character classes as well.

MB: the final example on this slide, we're matching non-script specific combining marks. So it's easy to match all combining marks, it's just a single property escape, but if you want those that are not specific to any scripts, with this proposal that would become an easy task, once again using intersection. So again, for more examples, feel free to look at the slides from last time or the repository which contains all of the examples as well.

MB: And there is one new bit of information and I wanted to share because if I read the room correctly there was a lot of positive sentiment when we presented this, but there were also two concerns that I want to address. The first one was about backwards compatibility and I wanted to make it very clear that it's explicitly a goal of this proposal to not break backwards compatibility. So concretely we don't want to change behavior of any regular expression pattern that's currently not an exception. And we think we can actually get there by doing the following two things. So first we're going to limit this functionality to just regular expressions with the Unicode flag, the `u` flag, enabled. And second we can also limit this new syntax to a new escape sequence such as for example, \UnicodeSet{...} and then the new syntax would only work the way we just suggested within those braces again. This is just an example we could use another identifier instead of `UnicodeSet` here, but the main idea is that this addresses all the backwards compatibility concerns because \U throws an exception in Unicode regular Expressions. it does not throw an exception in non Unicode mode, which is why we cannot support non-Unicode mode, but I think that's fine because we just require both the flag and we have this new syntax to kind of gate keep the new functionality which works out nicely because it also addresses another concern that was raised last time which is we were pondering the idea of maybe introducing a new regular expression flag for this functionality to avoid the backwards compatibility issue. With this approach we don't really need a new flag. We can just hide it behind this specific syntax, so that the new syntax only takes effect in that specific case and nowhere else.

MB: So that's what happened since the last presentation and everything else is still the same. I also want to reiterate that there is a lot of precedent for this kind of functionality in other languages and regular expression flavors. We have this table in the repository and readme. Yeah, I couldn't even fit the whole thing on this slide. So if you're interested in more you can check it out there. Note that the last column there, symmetric difference, that is not something we're pursuing for this proposal. We just included it in the table for completeness's sake. And so that's a high-level overview of what this proposal is about. I believe we meet all the stage one entrance criteria. All the information is in the repository itself — that's the source of truth. There's also of course this slide deck which summarized it and the last slide deck, but it contains the same information. With that we would like to ask for stage 1 so that we can move the repository to the TC39 organization on GitHub. And that's it. Any concerns with stage one?

MS: Mathias, can you go back to the other languages slide? Do you know about the other languages whether they're using the same combining characters, ignoring that you would wrap this with some other kind Escape, but whether these other languages are using the same kind of combining characters for Union subtraction intersection and such?

MB: At a high level, it's very common to use either `-` or `--` for difference and `&` or `&&` for intersection. Some use just one minus sign, others use two consecutive markers. Markus, if you're on the call, do you have a good overview of which is more common?

MWS: I don't actually remember quite which is more common. The double punctuation has been used in other languages because they didn't use a trick like `\UnicodeSet{…}` as a prefix. So they use the double `-` and double `&`, to minimize but not eliminate completely compatibility problems with people using regular expressions copied and pasted from other things. So they basically say that if there is a `--` they assume that the intention is a subtraction. The other thing that people do for minimizing compatibility issues is that some of these syntaxes require that the right hand side of an operator is itself a character class so you couldn't just say subtract, single or double minus, with just a literal character on the right side. They would require the square bracket on the right side in order to make the operators work. We have more freedom for ecmascript if we use the prefix like `\UnicodeSet` or something like that because we essentially introduce a different parser for that. We could choose to go back to single-character operators and we could choose to relax the right hand side of the operators if you wanted to.

MS: okay, I'd actually think that it would be good if we if most other languages are using double "-" and "&" that we would use similar syntax. Okay. Thank you. I have another question - it's not really a question. I just want to confirm that we're talking about these set operations are on character classes and not on strings, or sets of strings.

MWS: the intention is that eventually we will support both together. So just like you could have the expressions that Mathias showed on the slide. You could also have something like all of the Emoji recommended for interchange. There is a unicode property for that and you could subtract for example, all of the basic emoji and you're just left with the other sequences. That's not a part of this proposal proper, but the intention is to tackle both at the same time eventually.

MS: I'm supportive of this as character classes, but if we were to talk about sets of strings in set operations, I would like to see different syntax than a character classes, but you and I have - you and I and Mathias have already talked about this in the past.

MB: Right. Thank you. This is something that came up in the previous meeting as well, and [we've included it in the readme](https://github.com/tc39/proposal-regexp-set-notation#how-does-this-interact-with-properties-of-strings-aka-the-sequence-properties-proposal). We stated there that when the committee decides to advance to stage one, then we will definitely look into how this interplays with other proposals explicitly, like the sequence properties proposal, and we will come up with a concrete proposal before asking for any further stages if it's going past stage one.

MS: Okay. Thank you.

SFC: I just wanted to voice support for this proposal, definitely for stage 1. I think it's already shaping up to look quite nice and I think the work that Mathias and Mark have done on this front is really useful and this proposal is really important for the ecmascript ecosystem.

RGN: I agree. I think this functionality is important and we look forward to seeing progress made on it.

WH: I wasn't here earlier because the storm was messing with our internet, so I'm not sure if it was covered before. I like the idea of unicode sets, but there are significant issues with syntax. And I'm a bit unhappy that the proposal keeps showing syntax which is not feasible due to compatibility issues.

MB: Could you elaborate a little bit on that? Are you saying the "\UnicodeSet{}" escape sequence would not address the compatibility issues?

WH: I couldn't see your presentation because my internet was out, so I'm responding to the proposal as I saw it before the meeting.

MB: One part of the presentation I want to reiterate that maybe you missed is, we definitely want to find a solution that's fully backwards compatible. So the syntax we are presenting today is not set in stone, these are just examples. We're happy to discuss changes to it. We're asking for stage 1 so that we can continue the investigation at these discussions and we explicitly made it a goal of this proposal, it's [captured in the readme](https://github.com/tc39/proposal-regexp-set-notation#is-the-new-syntax-backwards-compatible-do-we-need-another-regular-expression-flag) as well, that we do not want to break backwards compatibility. So we don't want to change behavior of any regular expression pattern that currently does not throw an exception.

WH: I'm definitely not opposed to stage 1, but I don't like the concept that we can't express concerns about syntax in stage 1.

MB: Well, I think it certainly can be done and it's good feedback (both yours and Michael’s). I just think it should not necessarily block stage one, but it sounds like we agree on that.

WH: Yes.

BT: All right, the queue is now empty. Are you ready to decide on stage one? Any more feedback or any objections to advancing this to stage one? [no]

MB: All right. Thank you.

### Conclusion/Resolution

Stage 1

## Revisiting RegExp escape

Presenter: Jordan Harband (JHD)

- proposal
- slides

JHD:I don't have a presentation here, and this isn't a concrete proposal. About 5 or 6 years ago, a proposal for `RegExp.escape` was brought to the committee. Essentially it's a function that takes a string and escapes common regex characters and it's heavily used in userland. There are a number of modules that do this and they have hundreds of millions of downloads, or tens of millions of downloads or something like that, some absurdly high number. The response from the committee was that there was concern was that if you did not know the context in which the input string was intended to be used, meaning inside a character class or you know, a pattern and things like that, that you could not accurately escape things. So the committee said instead of this, let's look into a template tag function that takes an entire string that represents the entirety of a regex and escapes the interpolated parts, and the tag function can know the context, and do the correct interpolation or error checking or whatever. However, in the intervening time no proposal has been brought forth. An npm package was created but user feedback on that was that it's very confusing and nobody actually wanted that as a solution and everybody continues to use the exact same solution that was originally presented and the npm packages that represent that to fully solve their problem with none of the concerns that the committee has brought forth, so as a result, userland and developers have paid a cost for 5 years now because the committee thought that we had a better solution that they don't in fact think is better. Interest has been renewed in the proposal but we are now facing the possibility that node and/or browsers will possibly ship something like this if we fail to do so. Not a template tag function, but basically the exact same thing presented in the proposal. It was also pointed out to me that there's a function called CSS.escape, which is basically identical semantics, or an identical concept but different semantics for CSS, obviously, and this also works really well for folks that need that functionality. So I wanted to have the conversation and see if there is in fact committee interest in revisiting this proposal at which point, I suppose we could give it stage 1 today and I could bring it back in the future, but I wasn't explicitly asking for that; I can bring it back in a future meeting and seek stage 1 at that time. But a number of the folks who had concerns the first time around are still in this room, and so I was hoping that any concerns about this proposal could be brought forth.

MM: Is the package you referred to that has not gotten good uptake. Is that https://github.com/mikesamuel/regexp-make-js ?

JHD: I'm not a hundred percent certain. I will have to back to you on that answer. So I'm here representing the original author of the proposal, and the users who have requested that it be revisited. So then it looks like - actually no, that is not the package the is in the repo.

MM: To answer your question I am unwilling to go to stage 1 specifically regex escape. I am willing to go to Stage 1 with an investigation of the area where a template literal tag, that does this safely is a first-class topic to be investigated in the investigation of the stage one topic. What I am not interested in doing is introducing another injection vulnerability into the web platform. The previous things which have introduced injection vulnerabilities were very popular when they were adopted which is why the injection vulnerabilities were so bad. I think that the one thing that trumps "many people use it and it is popular" is it creates a vulnerability in this one does

JHD: I think we all of us, myself included, made a mistake the first time around and we should have - I think something we're doing better nowadays than we did back then is focusing on the meaning of stage 1, which is “exploring a problem space”. It seems clear to me that this is a problem space that needs exploring, as you've pointed out, to find the exact shape of the solution. Whether it is a tag function or a `RegExp.escape` is something to solve within stage 1 and I think that that should continue for sure, but I think that if we so it would be probably better to phrase this as if if I were to bring a concrete proposal of let's solve the problem of escaping input for regular expressions where `RegExp.escape` is one possible solution, then would that be something that would be appropriate for stage 1 and based on what you said, please confirm?

MM: I confirm enthusiastically I've been wanting to see the Mike Samuel template tag move forward for a long time. However, it takes some energy to move it forward. Somebody has to pick up the mantle and decide to put that energy in but I think that Mike Samuel did an extraordinary job of making this really robust and well tested and well and pleasant to use.

DE: What injection vulnerability?

MM: So the core idea behind injection vulnerabilities typically is a quoting confusion where for example somebody is accepting data, splicing the data into a surrounding context that's supposed to represent, typically a program. The term injection vulnerabilities is almost exclusively used for when the surrounding language is a Turing Universal programming language, but it's not necessarily, and the end the intent of the splicing was that the data be considered within the larger program to be date but the escaping with screwed up such that the source and then the provider of the untrusted data, let's say realizes that the quoting was screwed up in some manner such that they can inject logic into the language that's being spliced into that's exactly the case with the regex literal. You might be a if you use Google the reg ex badly splicing it into a larger string to make a regex out of then you can create an opportunity for the attacker providing the data to cause the Itself to be matching something other than what you intended it to match.

??: So Dan is also asking like what is the specific injection vulnerability in this case, but I think you answered that as well.

KG: I still do not understand Mark's point. So this specific proposal is to escape these sets of characters that have a special meaning in regular expressions, and there's perhaps some debate to be had about exactly which characters. I understand the injection vulnerability, and in fact, that is why I'm in favor of this proposal because this proposal makes it easier to sanitize user data for use in a regular expression and Mark seems to be opposed on the basis of this vulnerability and I don't understand what vulnerability he is pointing at.

MM: If you take the resulting escaped string and you splice it into a larger string supposed to represent that supposed to represent a regex in the wrong place, in a context other than the one it was escaped for, then it will be interpreted by the regex in other than the way you intended.

KG: Can you give a concrete example?

MM: I would have to go back and read old stuff to give you a concrete example, but just I'll just make up a straw and adequate concrete example. It might not be the most compelling. If you take the resulting string and put it between square brackets where it's interpreted as a character class, rather than interpreted as data. It's going to mean the wrong thing.

KG: It is not clear to me that that's true.

DE: OK, so there's no concrete example, but we'll try to get in touch about that.

MB: Yeah, I just wanted to also voice support for revisiting this and restarting this investigation. I think the `RegExp.escape` solution should not be dismissed, and we need to dig deeper into this injection attack. I was actually the one who brought up the `CSS.escape` method which exists on the web platform already and indeed, the original proposal for `RegExp.escape` matches that method in that it expects the author to use it correctly. Like if you escape something and then we put the resulting string in a place that doesn't make sense, then sure, you can still shoot yourself in the foot. But that doesn't seem to be a property that the users of such APIs or such npm packages seem to be expecting. I think [the cowpaths have been paved](https://www.w3.org/TR/html-design-principles/#pave-the-cowpaths) by people using npm libraries or copy paste a function from stack overflow to escape regular expressions. And yeah, I think we should consider those solutions in this investigation.

JHD: I wanted to reply as well, it may have been glossed over earlier, but I gave a presentation to TC39 a couple years ago about the risks of inaction. Essentially things that don't meet the goals of our committee might end up getting shipped anyway. This is one of those things that if we don't at the very least provide a signal that we are interested in moving forward forward in exploring this, that node and browsers may ship something exactly like what Mark is concerned with anyways, which means that the injection vulnerability you're concerned with would just be there and there's nothing we can do about it. So I think that it is very critical that we explicitly explore this problem space and that we commit to timely action. If in fact `RegExp.escape` is a bad choice, the only way we can prevent that is if we are looking into it.

BFS: I just want to be clear that whatever we investigate if users start needing to match flags I'm kind of scared about actually being able to use this properly across the board. I don't know of anything that would require flags to be sent in to escape but I prefer whatever solution not separate the creation of a regex from the escaped if flags are required. That's all.

RGN: I wanted to express enthusiastic support for this. I think that the current gaps are doing a big disservice to practitioners of the language and whatever shape - whatever the ultimate solution to this problem looks like it will be a big improvement over where we are now.

MF: So I'll start this with, I am supportive of stage 1. I think there should be an exploration here. I think it was kind of unfortunate that our initial discussions of this topic way back when didn't result in that additional continuation of this exploration. So I do think that should happen. What I want to see is a detailed look into how safety can be achieved in a completely context-insensitive way for injection, I think that that is possible given the syntax of regexes. What I'm more skeptical about, though, and that I would also like to see an investigation into, is the compatibility risks as we expand regex syntax. There's kind of two directions to this compatibility risk: there's one possible limitation on how we expand regex syntax and one being required to maintain compatibility with the exact escaping that is being done by RegExp.escape over time and not and then limiting our ability to expand this syntax. So I'm worried about that and I'd like to see those investigated.

JHD: It seems like that would be a risk with a tag function also, correct? So we need to explore that regardless.

MF: I think that a tag is more likely to be relied on for its behavior alone and not the exact regex that's output, whereas with RegExp.escape I can see cases where the exact text that it outputs is relied on, not just the behavior of that in a regex context. Thank you.

BSH: I'll start by just saying that I also think that we should have this in fact, it's of immediate interest to me because it's come up in my own work. I just want to point out that like just it does. We do have a GitHub repo according to the instructions. So it would have to be a provisional Stage one. That's all.

JHD: The yeah, the repo, I linked in the IRC channel is the same one that was presented 5-6 years ago. We would just repurpose and transfer that.

BSH: OK thanks.

JRL: My topic specifically the complexity of the `RegExp.escape` function versus the `tag`. The tag is a considerably more complex function in order for users to understand what it's doing. They have to be familiar with complex syntax of tag functions. They have to be aware of the difference between the static content inside of the tag, and the dynamic data we're passing to the tag. So the the complexity for users to actually understand what is happening with `RegExp.tag` is considerably higher than the string input and string output of `RegExp.escape` and I think the reason so many people are reaching for `escape` is because it's simple to understand and it's simple to use,. So I don't think `tag` is the perfect answer here just because of the complexity for use versus `escape`. I think we can make `escape` safe no matter where it's used inside of a regex, the same idea that Michael just expressed. So it's just whether or not we can find that out and make it easy enough for users to actually use.

JHX: I'm not sure why tag solution is too complex. In my opinion the tag solution which just to give you the regex. It's much easier to use for the average programmers and I agree with Mark that if you use escape, it's easier for average programmers to make mistakes and have security issues.

JHD: So the original author of the proposal talked to a lot of users about the tag function and the responses he got were that they do in fact it confusing. So like I agree that it may not be confusing for some but it seems objectively that it is confusing for some others. So that is something that I think we should look into during stage 1. If in fact we move forward in that direction.

MM: So I first want to agree that this is something we should look into. I think we're all agreed that phrased as an area of investigation and showing that we're actively interested in solving the problem, that I'm happy for it to go to stage one on that basis. I think that Mike Samuel's repository is at least as good a starting repository to repurpose for this purpose as the one that you mentioned. I would say it's better. I And if you take a look at the first page of Mike Samuel’s readme on makes it very very clear that to write the equivalent of regex dot escape using the tag function is trivially straightforward. So it might be that the other tag function that JHD is referring to which I'm not familiar with was confusing for weird reasons, but Mike Samuel's is not. I completely reiterate what Hax just said - the tag is straightforward to use. It's complex to build and that's why it's important that it's built by experts. But once it's built its really trivially straightforward to use.

JHD: So we can talk about the repo stuff later. I mean, that one is a published among the like the package so it's not really a proposal, But certainly that is a very useful reference implementation and investigative tool that we should process.

MM: I will want anything that gets labeled as the thing that went to stage one to not be biased in favor of regex escape over the tag.

JHD:Yeah, if let's say that we decide today that this concept should be stage 1 today before transferring the repo in all the way to TC39. I would update the contents to to frame it correctly as a problem investigation and then possible solutions of which the tag function.

MM: okay good. good. Thank you.

DE: Yeah, I'm happy this is coming back to committee because it seems like a really important problem. My intuition having heard about it before was that the template tag might be higher level and easier to use, but if from talking to developers we find that the escape method is easier to use, and we figure out a form of escaping is not subject to injection attacks - and I'm still I'm so curious to learn what injection attacks people are concerned about - then that seems like it could be a good option. This seems like it could be a subjective trade-off that we can use all kinds of evidence to get at. Thanks for pushing this forward.

BFS:Let me see if I correctly understand what Mark Miller was suggesting about the injection attack. Let me see if I can express it as an example. If you have this Escape method and you pass a string to it what you get out of it if you take what you get out of it and immediately make it a regular expression with that then that's guaranteed to be safe because you've escaped everything. The problem is what if you take that and then you concatenate it with a bunch of other strings and pass that into - or you put it inside of a tag to a template literal and expand it in there and it fits there. And I think what Mark was trying to suggest is what if you expanded in the context where you have an open square bracket, and then you expand this context of this variable contents of this variable that's been escaped and then a closed square bracket. That clearly isn't doing what it was supposed to do, because in the larger regular expression you've stuck it into it's now trying to interpret this string is a set of a set of characters. I think that what Mark was saying is it would be good if we could somehow push users down the directions of you're less likely to make that mistake. Is that fair to say that's what you were going for Mark?

MM: Yeah. Let me let me confirm exactly that's that's that's that's the kind of That I'm talking about is what Kevin's asking for is very concrete example where we show how the data gets misinterpreted when spliced into the larger string, which I don't think will be hard to construct, but I don't not prepared to try to construct it on the fly, but I think it's exactly what you're talking about is the form that I'm concerned about. And, I want to point out, this is why we invented tag template literals. The primary use case was to introduce what used to be called quasi parsers is for the literal part that could then do context-sensitive escaping for the data that was in the substitution holes so that we could be, across languages, safe against injection attacks and then to have the first language that we're trying to introduce an escaping solution in avoid the general-purpose framework that we created for the purpose seems ludicrous.

BT: The queue is empty, JHD. Are there any final words that you want to say here?

JHD: I did not present a repo and that I was seeking stage 1 on the agenda. So for that reason alone anyone is free to decline that request but I think that based on the discussion it seems like we should grant this problem area or investigation stage one and we agree to update the repo as discussed and to not make sure it's not biasing a particular solution. So if everyone agrees, it would be great if we could get stage 1 for that.

MM: I'm in favor.

BT: Okay, so JHD is asking for a stage one approval for investigating this problem space. So are there objections? We've heard some support.

MS: No objections, but JHD, are you willing to be the champion?

JHD: Yes, I will be championing and anyone else who's willing to help is more than welcome to do so.

BT All right. Sounds like we have stage one for this investigation. Thank you everybody. Thank you.

### Conclusion/Resolution

Stage 1

## Index From End Syntax

Presenter: John Hax (JHX)

- proposal
- slides

JHX: Okay, this proposal is proposed to add a syntax carats of I it's a character one is which just means the last element of an array. The syntax is borrowed from C sharp 8, but keep the minimal. C#, ^1 will return a.indexof object,bBut this proposal try to keep it minimal. So it's only valid syntax in the square bracket. So it's roughly same as length minus i. The precise to manage his the length minus the number. You can use 1n in the bracket..

JHX: the motivation - so I actually have two motivations. Indexing and to revive slice notation. This paragraph is copied from the original section of The Proposal asking for the ability to write negative 1 one instead of a rebuttal. Because the people from the ruby or python they really like the syntax like that, but we can't have it in JavaScript because we already have the negative I already have the semantics here it will access the string property of -i.

JHX: So basically there are two solutions one is syntax solution C# chose the syntax solution and the other one is method solution, the "at" method choice. We can compare these two solutions. It looks similar. The syntax solution just replace the minus with a carat, and the method it keep the negative index. But if you want to mutate it elements "at" is not not available here because methods only read. of course we can add like a "setAt" method, but even if we have setAt will find this code even worse than the existing code. and the syntax actually work for both are array like and the method would work for array, typed array, and string. so that means we can use the syntax here. Of course, we can add at method to the dom, but I'm not sure whether (?) have such a plan.

JHX: The key difference of the syntax and the at that massive is to argument range. That if we have a simple array of one two three, it have different argument to reach all the empty cell means should return undefined. So the syntax solution we can see here it's only have a definition on the non-negative integers, and you can you can find it here. It is symmetry here. The "at" method is a little different here. I think the problem here is if if you write the negative i, normally we think it should be non-negative. But if it's a non-negative if we look the known actor part, it's actually lose the symmetry and the especially here. This is what we can see here, is negative 0 case. Negative zero is the same as it, but what's the intentional of it if I is 0. I think in many cases actually people may want the length minus i, that means they do want - it's out of range, but but use the after you get you got to the first one. If currently is very likely you will have cde like that. So you used undefined to test whether it's out of range, but if you refactor your code to "a.at(-i)" then there is a risk that in the negative zero case the particular is different.

JHX: Let's talk about the cost. Basically we think the syntax has a higher cost, but in this case it's not a brand new syntax, which is an extension of the well-known bracket access, and it's easy to infer semantics. It looks just like syntax sugar. So I believe every JavaScript programmer can learn to in one minute. The method is also simple, but actually it's hard to explain it in one sentence. The best I can do is just like a[i] but support negative index like in slice, but actually there many cases where it's not easy to infer the semantics. For example, if the programmer will really use that there will be many questions like can you use that on my current objects. Does string have it, does class list have it, etc. Another problem is the inconsistency, a special on some out of range special cases. If you refactor code from the brackets to the method, and the behavior are different here and okay this this there are (?) maybe some confusion here.

JHX: About adoption costs, with syntax you need to transpile but no polyfill, with the method you don't need to transpile but you do need a runtime polyfill. So they're similar. And the web compatibility, the syntax to do not have the compatibility issue the as massive as the the real me of proposal the might have some room yes or no, but I have a report out yesterday.Here's the code. You can try to yourself. The first one is about sugar JS and sugar JS have is have Loop here. And it supports the multiple elements you can get the array here and from the the first version to 1.3.9 version. They all have the problems. That means this the same code if you run it in the Chrome Canary, which has the at method, it will give you different results and the Core JS is similar as sugar in that it have the older string prototype at proposal and in Chrome Canary it give you two question marks.

JHX: Oh. I think we maybe we're lucky to not get impact reports about these two cases, but there is no risk here. And so we already know there are at risk [for the at method], and especially the string case is subtle because the content of the string can come from the server or from the user inputs so maybe only some of your users will see the broken pages, maybe only the international users. Will have stuff that.

JHX: so this is the summary of the first part. I think the syntax has better ergonomic, it's much more general or and have a much simpler arguments arrange. I think this is a very important because if the if the value is calculated, if you have a much complex argument range it is very easy to make a mistake when you cross the negative line here and do not have the negative zero edge case to infer the Semantics. basically, it follows the well known "[i]". And basically if the motivation is to let people write - to solve just this problem, I think the syntax solution we were best subject.

JHX: The next part is about slice notation. This is current proposal which just the same as slice method but has syntax here. In the last meeting this proposal did not get stage one, there are many concerns here like whether is was to add a simple syntax here. Well, but think that the most important block is 2 is raised by Shu that they are inconsistent here, that the negative one actually mean differencing in these contexts. I agree this is a problem because actually it means the I here if he's an actively intervenes differencing. So if we replace the negative index with the character I the problem is gone. And it's actually a better solution, a better version of their current slice method because the negative 0 case in much worse in the slice method.

JHX: This is a simple example. we expanded empty array here because it's lost in items. But actually you got two one, two, three. It doesn't mean you write code like (?) and item. In most cases people just to write code but they want the last "n" items.

BT: The queue is really long, I don't know if you wan to prioritize the discussion of the slides, but we only have 15 minutes left in this item.

JHX: I'll finish quickly. So yes, there are many discussions here and you can read them yourself. And so basically if you really want to express drop n front you you should write like that and this is the best way you can do is to write a method like that, but actually in practice people just simple ignore part of it and cause many potential bugs. So if we upgrade to the syntax then many common patterns can be expressed very easily. This syntax actually have the prior art of the C#, note here C# actually do not have a compatibility issue. That means they can add the negative index exactly, but do not, they introduced syntax for the reasons described in here. (?) so I think this conclusion here is that the method is problematic and also in JavaScript the index(?). So this is the final summary and yeah, that's all.

BT: Okay, so we have a couple of clarifying questions. Let's address the first two. Can you just clarify why you think this is mutually exclusive with in some sense the stage 3 .at() proposal? There will be no discussion of this. That's just to clarify why you made that statement.

JHX: I'm not sure what the question is.

BT: I think there is some concern that this is being presented as an alternative to tht"e "a proposal.

JHX: I think the problem here, Is that the original program at proposal before was renamed from item to at. At that time it had another motivation the "at" method on the DOM API, so in that time - you can't compare it to because we have another motivation.

BT: so okay, so I think like we can say that this is not a proposal that includes not pursuing the stage three proposal, hopefully that satisfies those clarifying questions.

LEO: I'm sorry just as a quick suggestion Hax. I really like this proposal, but I think it's really a bad take if you tried to compare it exclusively with other proposals here. I think it's a very interesting problem that we can discuss in this queue, but like trying to compare with slice notation and this is a bad take for this proposal itself. Like you already have a very nice argument for this proposal alone, and I think I'm supportive of it.

BT: Okay, so we have Gus first.

GCL: yeah, I just wanted to say I think the problem space being presented here is definitely worth pursuing, but I think I and a lot of other people are nervous about sort of the depth into which the specific solution was presented, which is to say that in terms of stage 1 this seems reasonable, but you know the specific syntax and semantics and stuff would not be agreed to at this point. That's all.

JHX: Thank you.

BFS: Early on in the presentation there was - I had some concerns about treating negative zero different from positive zero when performing a lookup. When you index into an object with negative zero, it gets conferred converted to the string zero, no positive or negative sign in front. Just want to be sure that we don't change that behavior in the future.

BFS: I think I'm next on the queue as well, so the key takeaway for me, I used to code a lot in D and the length operator the dollar sign in D, is super convenient. I really like that this proposal lets me do something similar to that, especially the ability to push something on the end of arrays. We have the dot push method, but for a variety of reasons I don't usually want the return value of the .push method, so being able to actually use this for being able to append to the end of an array and get the right hand side back is absolutely wonderful to me. This would actually save me quite a bit of time in a variety of scenarios. I think on its own the ability to get length itself might face some discussion if you try to have the operator perform some math and not just expose the length somehow within the brackets. But yeah, this looks lovely to me. Thanks. That's all.

LEO: I just said that I really like this proposal by itself. We can probably discuss syntax. I don't mind, the syntax looks okay because we have other languages using something very similar and I think the strength is not only - like Bradley has mentioned the zero for the end but like even with indexes that we are counting negative like adding elements is something that we cannot do with like the other proposals that we've discussed here. And I think it's a interesting strength of what is being proposed here. I really like it. It doesn't have any magic. Those are things that are standing out, and I'm in support.

JHD: Yeah, so I got a partial answer in IRC, but I want to hear your take on it Hax. Given that `.at` exists and this proposal is only operating in a world in which that already exists, what exact problem is this solving? I'd love to hear that elaborated on.

JHX: Yeah, it's a similar problem but in a better form because it did not have the negative zero edge case, and it do not use the negative index - actually do not use the concept of negative index because for example if you use the index syntax tax and and put in two and positive two apps, it doesn't return what you think. I would argue that negative zero, normally people will expect it. It should be length and it should return undefined, Not the first element.

JHD: okay, so just to be clear you're saying that normal people will normally have an expectation at all about what `-0` would do, and then you're also saying that you want to be able to use the output of `indexOf` directly and have it do the expected thing?

JHX: Yeah. I mean, I mean the negative index is works in most cases, but have a bad case of a darkest and the is course made potential bugs. This proposal not only not only try to solve this, but also what I already present that they are another big motivation to revive the slices notation. And the problem that I described actually is much worse in the slice. For example, the negative zero problem is much worse in the slice case.

JHD: Okay, I guess I'll add a new queue topic about `-0`.

RBN: C#'s negative index notation is slightly different they actually introduced an index type that has special handling for indexing into an object, So that actually becomes a value on its own, and while I'm not necessarily proposing that that this proposal introduces that because there's a whole mess of other complexity that gets involved there, it is useful for things like slice notation proposal. Asa matter of fact, I proposed this actually on the slice notation proposal, there is an issue where I've discussed the C# hat syntax for negative offsets. and Waldemar, yes C# does have `^` as an operator, but it's just like in ecmascript. It's an infix operator and C# allows it as a prefix operator for introducing a range type on its own.

WH: Can you use prefix `^` anywhere in C#?

RBN: Yes, anywhere you could have an expression. Prefix `^` creates an index type. this is this proposal isn't recommending that and I'm not necessarily recommending that either but in C# have hat variable or hat number it actually introduces a value of type index which when used as an index on an array or anything with the numerical index that has a collection interface it It can get the length of that value and give you the offset to that index. They also have a range type that is introduced by using value:value, I believe it's ":". I posted a link in the IRC discussion to the C# implementation for the index and range types if that's helpful as well.

BT: We have four minutes on this topic, and we really can't extend because we're already running up against time for this meeting. So let's try to be super concise and if you don't have stage 1 concerns consider maybe dropping your topic. We may have to skip some.

BFS: So whatever we go forward with length or whatever we want to call this. We need to be sure that it properly interoperates with the rest of how the object model Works, particularly Getters and Setters are my concern, you know returning on normal values for those we can't really do what does and return undefined if The goal is to kind of make this a special kind of property access I'm totally not comfortable with it. That's all.

JHX: Yeah, I think as my first little slide sad if you use the glance of the real life, they use this abstract operation. So it's it work harder getter of the Nets.

SYG: The first one is. We already touched upon the clarification. The presentation was set up to make it seem like this is a mutually exclusive alternatives to the at proposal and I want to reiterate that really can't be the case. So on so that's it. I interest of time we don't need to go more into that. On the technical parts, my main concern for this kind of syntax and I'll expand this item to also include. what I consider stage one concern - so the syntax has presented right now is non composable in the way that Waldemar highlighted. In C# it's a unary operator that produces a new type of thing, that captures the - it produces a new type of value that says I am an index from the end. Whereas here we're introducing this thing that looks like a unary operator but in fact, it's kind of fused with the brackets which then also suggested some kind of property key, but it is not. So there's a lot of kind of difficulties and designing this syntax to be more composable and I would - for stage 1 if the scope of this proposal remains just this kind of non composable syntax for from-the-end indexing. I would have serious concerns with stage one, but given the utility of something like this for array accesses and array-like accesses and the desire that users want slice notation as well and this proposal calling out slice notation. I would really like to see this proposal expanded to include slice notation so that there could be one proposal with a unified syntax for both slice and this syntactic approach to index from the end. And I would urge Hax to work with Sathya, the current champion of the slice notation proposal, which is not abandoned. He said revive, but I don't think that the slice proposal has been abandoned, it just hasn't been updated since when it was presented.

BT: So to go directly to the stage 1 discussion, it sounds like Shu you would be against advancing system to stage one unless scope is expanded to include slice notation, which I think practically would mean merging this proposal effectively or championing some sliced like Proposal with Sasha's that you're thinking true.

SYG: Yes that captures it accurately. I think if we are to meet the syntax bar of adding a new kind of indexing syntax. We should get ahead of known use cases, which slice is point packs.

JHX: I think I plan to co-champion the slice notation proposal.

BT: So essentially we don't need to advance this proposal separately to stage one and we can try to address this syntactic index from end problem in the context of the existing stage one proposal for slice notation.

BT: Should I do that?

BT: I would say, Hax, work with Sathya on that. This like a useful exploration and documentation of yet another facet of this problem space. So it seems like it would be a good document to store and that repo. but I think the takeaway from the committee is, you know, talk with Sathya and figure out you know what to do with this document where to check it in and then how to address. This is the takeaway from a committee.

WH: Brian, you haven't gone through all the comments. Your summary of the “takeaway from the committee” is inaccurate because not everyone has gotten a chance to speak [there are still something like five people left to go on the queue].

BT: Okay. Do you have other stage one blocking concerns?

WH: Yes. I'm also saying you should not present what you said as the “takeaway from the committee”. That’s inappropriate.

BT: Yes, there are other interesting viewpoints that should be gathered as part of the slice proposal. Okay, so that I think we have to move on unless there are other really important points here. Hax I would recommend taking us a screenshot of the queue, some of that you might want to follow up offline.

JHX: Okay, if there are any concerns, please raise an issue in the repo. Thank you.

### Conclusion/Resolution

Not advancing on its own, Hax to talk to Sathya about advancing this as part of the slice syntax proposal.

## Array find from last for stage 1

Presenter: Wenlu Wang (KWL)

- proposal
- slides

KWL: Hello everyone. I'm Wenlu Wang from Microsoft. I have some experience of implement proposals in typescript. I will talk about the draft proposal: array find from the last. The Proposal will add two methods into the Prototype both of array and typed array to allow us find some us find some elements or its index. Whether reverse the order by customized call back. This proposal tries to address two major concerns: semantics and performance. For semantics we want it to be simple and clear. Now, we have index all end in last index of but they can only compare by value. We also have find and findIndex but they iterate through. on the first to the last we need something to iterate from the last to the First with the ability to compare using our own customized callback for the performance already and we want to find an element from the last. We can reverse the array before find before we find the index but reverse method is not a musical. So which means we have to close the array before that might be an overhead one the array contains a lot of elements and it's a bit complicated to find index because the array reversed and special attention to handle the negative 1 that will need some conclusion as a result.

KWL: I propose two new methods. For the runtime behavior. We can follow array.prototype.find and array.prototype.findIndex but with reverse order. As you can see, it's more simple and readable with a new proposal.

KWL: There are also some similar ways to do that. Why don't we use reverse? We have talked before. And why don't we use the reduceRight? Well, it's not semantical and it's always iterates over all the elements, which means lower performance in many cases. And why don't we use double ended iterator or a reverse iterator. It seems we are far away from landing that proposal. And it's not conflict with a iterator as the first concern. In my opinion we need the two methods even we have with iterators. Overall, There are many things like the two methods in other languages. For example, list.findLast and list.findLastIndex in C#. And there are many libraries which do the same things in JavaScript; for example, findLast and findLastIndex in Lodash. and another issue that has not been finalized is the naming. Should we call them from last or from right or something else, but I think it will not block stage one. Thanks. That's all.

BT: Great. We've got a couple questions on the queue.

TAB: Well, yeah, but one is just the naming comment that just came up when referring to the direction - the string functions use "end", not last. I know that there is a precedent with like lastIndexOf using last but that's talking about like the index layer but this function the way it's used at least refers to the direction and we should be consistent.

KG: Yeah, I disagree. I think that last is the obvious president. I don't think that the string precedents make it clear that they're talking about a direction. padEnd is not talking about a direction. It's talking about the end of the string. I think lastIndexOf is the obvious precedent. Also like five different people have come up with this proposal over the past like two decades and every time someone has come up with this proposal they have used "last". So I think that is the obvious name and we should go with that.

SYG: I just wanted to agree with Kevin that I think the lastIndexOf thing is the obvious precedent. I find the proposal reasonable and I like it. The symmetry point was compelling with indexOf. But unfortunately, I think the obvious names we might have an uphill battle there with web compatibility, so I hope you are for rounds of possible renaming.

BT: That is the queue, so it sounds like we're happy with this proposal.

MS: Who the champion?

KWL: Can I be?

SYG: You are an employee of Microsoft, so that sounds perfectly fine.

KWL: Great.

DRR: I'm happy to help you champion.

BT: Any objections to stage one? [no] Thank you and good luck with naming.

KWL: Thank you.

### Conclusion/Resolution

Stage 1

## Defer module import eval

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/codehag/proposal-defer-import-eval)
- [slides](https://docs.google.com/presentation/d/17NsxHzAC2RlP5rB3wrns9O2Z-NduSpcm2_GOVo2TnKE/edit#slide=id.p)

YSV: Hi. My name is Yulia Startsev, I work at Mozilla and I want to open this presentation with a bit of a joke. It's the most famous Canadian aphorism. An aphorism is a saying. If you're not from North America, you might not be familiar, but there's one that's really famous American one: "as American as American Pie", which is roughly “as American as can be”. The Canadian version of this saying "as Canadian is possible given the circumstances". That is the starting point of this proposal. So I'm going to change that aphorism a little bit to be "as performant as possible given the circumstances". That is sort of a one-sentence sum up of what I'm hoping to do or what I'm hoping to investigate with this.

YSV: So what are the circumstances? We're talking about large mature code bases where a large part of the code large part of the cost is already module evaluation. We're talking about something that's been implemented, it's working correctly, but we have a problem with performance. And this is a common case where you've built an application and now you're trying to fine-tune its performance. Alternatively there is a significant reason why they want to retain their behavior and they want to prevent any kind of even minor changes to the semantics of that code base. So another way to look at this is that there's a need to make things more performant without necessarily loading modules asynchronously, which you can do with dynamic import we have that functionality another requirement here is that users who want to use this are okay with sacrificing some of the performance that they would get from using something like dynamic import for the benefit of ergonomics and this synchronous Behavior.

YSV: Now here's a really contrived example of what this might look like. We've got an import `someMethod` from `my-module` and we're using it in some rarely used code, but it's definitely called at some point and it's nested. So we've got this nested set up of multiple methods, and eventually we're calling some method. Okay, this is our small application. We are a young startup and it's all working great, but our codebase grows and performance becomes an issue. So now we want to take a look at this and it's like, oh, we're not really using some method very often, so let's dynamically import that. So we create ourselves a way to lazify `someMethod` and there are different ways that you can do this and now we've got what we want - I should take a step back and say we're explicitly looking at startup performance here. So we want the application to start faster. We create this lazy method, we use dynamic import, but this has some implications for the code that uses this method. That means that every function that is relying on something from SomeMethod, this lazified SomeMethod now becomes a sync and requires awaits in order to retain the same behavior and the behavior isn't isn't quite exactly the same. as it was before we're now working with everything being promisified which may or may not be an issue when it comes to data races or something. Similarly when we look at this, and let's say we're a new programmer coming to the project. It's been a few years since this performance work was done and we're looking at this and we're trying to do some other kind of fine tuning or were trying to fix a bug and we're investigating all the way up the code base, one thing that might be asked is: is this a meaningful await? because when we're awake, And stuff it's usually because there's been some kind of fork where we want to we have different blocks of execution that are happening in an async function. But this the purpose of this change that we made, to make everything async, was actually a performance fine-tuning. It wasn't a change to the basic semantics of the program though it may have had such effects.

YSV: The question that I'm posing is, is there an alternative can we do something for this case that might work better here than what we currently Have? And I think maybe there is. That's what I want to propose. So a high level way to look at this is our goal is to improve startup performance without sacrificing readability. Now startup performance, I think is pretty clear. We're doing the same amount of work, but we're spreading it out in into different places where that work can be done without necessarily undermining the user's experience for the user's expectations. Readability is a little more subtle. I'm using readability here in a much more general sense. We're talking about readability where you read the code and understand it. Of course, this is one aspect here where we are taking code that was initially sync and we're making it async for this specific performance tuning, but also we're talking about maintainability. We're talking about the cost for doing such a refactoring and other related issues to work around applying such a performance tuning to a code base.

YSV: Okay, so to take a look at what might be possible in terms of this work. We're talking about delaying the work of the module. And the question naturally will be, when? Whe do we start deferring the work? How do we start differing that work? The first place which would be the most obvious place to look is going to be before load. We have that functionality. We have it in the form of dynamic import now one might ask. Well. Why can't we make Dynamic Imports sync the answer there is we would break run to completion semantics. We would break a lot of stuff on the web - basically it's a terrible idea and we're never going to do that. What do we do at a parse? Well, actually the reason we don't want to do it before parse is the same reason why we don't want to do it before load because parsing builds the module graph and we need to load all of the modules in order to know what that module load graph is in fact on the system that I've been looking at. One of the problems is that we don't do the load and parse step. We don't have the full module graph and we're doing this asynchronous work and it hasn't been a very fun time.

YSV: So that leaves us with before evaluate and this is what we are going to focus on in the context of this proposal. So the proposed API, I tried two different forms of it. We've got one using import attributes which were discussed with the import assertions, but haven't been formally proposed yet, and the other one you'll see below with adding a new keyword. I want to ignore the new keyword for now because I think import attributes together with import assertions helps tell the story better, but I'm not actually very opinionated about what the syntax here will be.

YSV: So the proposed semantics we're going to load and parse all the modules, the children of a deferred module are treated as part of this deferred graph. So we're going to have our regular module graph and we're introducing a new concept of a deferred graph. The interaction, I'll go into that in a little bit more depth in the next couple of slides, but if a child is eagerly loaded it's treated the same way as it is currently treated within our module loading semantics. The thing that's deferred is evaluation. We only evaluate on first use and you see an example here where a method is being evaluated at first use.

YSV: Okay. So let's quickly go through what this looks like in terms of the module graph. Here's our simplified module graph. We're not looking at any Cycles or anything like this and nothing is lazy. This is your regular standard module graph. So let's turn one of those edges lazy. What happens to the rest of the graph? Now, please note that the edge that is pointing to a module that has an eager edge like a regular eager edge to its child. What happens is we end up with a lazy sub graph and that lazy sub graph has these eagerly loaded modules. What will happen here is, we've got an invariant right now in how module loading works. So the invariant is that a given child of a parent will finish evaluating before the parent finishes evaluating. This is maintained with Top level await and it's something that is so far true Always. How does this interact? Well what this is introducing is its introducing a new concept. What happens here is that the lazy sub graph will parse and it will load before the parent module completes, but it will not evaluate until the parent module calls it for the first time. However, all of its children, which are eager, will follow the same rules that are set up with our current module loading scheme. so, the children of the lazy parent will - the eager Children of the The Lazy parent will still evaluate before the lazy parent finishes. So yeah, basically this slide. And if we have two interacting graphs where we have a shared module, which is used by an eager graph and also used by a lazy graph, even if the edge is lazy that eager edge will still be loaded eagerly. And finally if we have a lazy subgraph of a lazy graph, it all works recursively. The lazy subgraph will not be run until it's called by its parent. So it all - that's basically my thinking of how this will be shaped.

YSV: Okay, so there are a couple of known issues here and I want to go through them and discuss them a bit. The very first is top-level await. You'll notice that we have this data module dot JS, and we've got main dot JS. Data module.JS is doing a top-level await to fetch some data, some JSON somewhere but inside of the main JS are used data function is sync. Think this is this would have worked before if we had done the work upfront and evaluated data-module.js eagerly, but now it's lazy. So what's going to happen? Well, we can do a couple of different things. We can choose to say that you are not allowed to have async modules and can do that with an assertion. We can say during parsing that this is a synchronous edge that leads to a synchronous graph and all modules in that subgraph are synchronous. Using this method, this case of an async module executing in the context of a sync function will be made impossible.

YSV: Alternatively we can do something else, and I've spoken with a few people already and this is where this idea comes from. Another company has, in their custom loader, implemented a solution. The way that they solve this problem is that they simply treat async modules as eager. So if you have a lazy graph that pulls in an async module lazily, it's just treated as eager. We ignore any “lazy” or lazily eager edge for an async module - it's just initialized eagerly.

YSV: Okay, so there's another problem. The top level await is a subset of a larger class of problem, which are side-effectful gets. Let’s look at the previous example again. Before when you were loading this module as an eager module, you would have this console.log happen in a predictable way: you would have it run when the module graph is being loaded. But now, with this module becoming lazy, what's going to happen is it's only going to be run when we access the variable “data”, in other words, when we first access that data name. This may be surprising, we're just accessing a variable. So there's a couple of ways to think about this. Kevin opened an issue about this. Right now what I'm going to do is I'm going to argue that data is a global getter. And the reason that I'm arguing this is twofold. I think it's more flexible and secondly, I think that this is a useful enough concept to make this trade off. As messy as this is, I think it might be worthwhile making this decision, but I'm open to discussing other options or other ways that we can do this or issues with this.

YSV: Another known issue is IO costs. Is this really going to be beneficial because we're looking at a really wide range of potential savings or losses that could happen here. So if someone has an SSD or HDD. SSDs are going to be three times as fast as HDDs, that's significantly faster on one machine for a user of a given machine then on another machine and since we're talking about startup performance, that might be a problem – we may have vastly different experiences for different users. Also another issue is if this proposal was used on the client-side then we have network speeds versus local disk speeds and those are going to vary a great deal as well. So we can't be certain that we're going to be as fast as we think we are. This is a bit of an issue with performance, but this is something that was still an issue also with our current implementation of this. The argument can be made here, however, that we have the same problem already with any lazy loading solution, for example other lazy loading proposals that exist that read from local disk.

YSV: From this topic of disk and network speed, I want to take us to talking about the problem of using this on client side code. How useful is actually going to be for client-side code? What we see as an existing practice in front-end frameworks looks a little bit like this. This example is taken from Vue. We've got a simple JavaScript object, a plain old JavaScript object that has a field component and inside it's got a Plain field lazy component and that is doing that's returning from a dynamic import. But this pattern makes it look super synchronous, alleviating the ergonomic issue that is at the heart of this proposal. It's actually loading this template looking like an HTML tag looking thing that says lazy component if false. Now if you want to look into the details of how this works (I have a link in the slide), effectively what it's doing is utilizing the lifecycle of rendering the content in order to sort of hide this async behavior. It does the async import and when the import resolves, it updates the rendering of the page that you're looking at. It's a very elegant solution to this problem and it works really well in the front end.

YSV: On the frontend, this is referred to as code-splitting, and I want to contextualize this by saying that code splitting is an important, but complementary tool. What I'm proposing here doesn't replace this instead, nor vice versa. It lives to fill a separate purpose, which is the statement that I made at the very beginning: “as performant as possible given the circumstances”. Those circumstances can vary from application kind to application kind. The ergonomics is well handled by frameworks, but not all issues that arise from performance tuning are addressed by this approach.

YSV: To illustrate this, I want to raise some interesting work that's been happening in react which is the suspense component. This example illustrates that these two technologies have a place side by side both in for example cli based application code and client side code. React has a concept of hooks, which works very similar to what I showed you before in vue. It also has this concept of “suspense” and “lazy”. This is an experimental piece of technology that's in React, I think since 2018, they've been working on it for a long time. While it looks a lot like what we saw before, it works fundamentally differently. One of the things that it achieves is an assurance that race conditions do not occur. It forces synchronous async.

YSV: On the next slide, we have a simplification of the technique. If you look into the react code base they do something similar, but takes much more time to show since it is spread over the oebase. So here's the same code that was on the slide. we have this getUserName and we're doing a JSON.parse here. Now. This should raise lots of eyebrows in the committee. "fetchTextSync". What's this doing? It relies actually on this Promise down here at the end of the program and it's calling this function fetchTextSync, which is doing a couple of things.

YSV: We have a couple of checks. We've got a couple of maps that are keeping some data for us if a cache has a given URL we just return the cache and then it gets really fun if we have a pending URL. We Throw it. What are we throwing? So then we create a promise and when the promise resolves we delete the pending entry and we set the cached entry. We fire that off, we fire and forget it and then we've got pending.set. We set an entry in the pending map and then we'll throw the promise. Okay, this is absolutely creative. I think it's very interesting. Here we have an infinite Loop of trying to run this infinite loop. That's where your looked at earlier and we are repeatedly throwing the task which is this code we, are running it multiple times until we get the promise that we wanted. So we it's very interesting. I really like this. This is super creative. I didn't know JavaScript had co-routines! (sort of) Rather this is termed algebraic effects but that’s a detail.

YSV: It's still experimental, but I think it shows something that is worth pointing out. First of all is space for a technique that would allow this kind of work earlier or that would allow this kind of this kind of work in a more structured manner in a way that doesn't require throwing all the time. But also,I think it shows that there is a need for it.. Okay, so usability and client-side code, one thing that you might ask is it seems a little bit like it'll be slow on the client side. There are solutions for this. One of them is resource bundles which Dan brought to the committee last time, and then also http/2 has some adoption. Although Chrome did recently say that they're going to unship it but then there's there's other solutions for Network latency. So what I'm requesting for in stage one is partners in investigating whether or not deferred module evaluation is a good strategy here. The API I'm proposing to be the one that I suggested at the beginning pending further investigation. Not really strong opinions there, and to investigate in stage 1. I would like to verify the performance benefits. I have done some benchmarks, which we can take a look at and also verify the Syntactic approach there are some Alternatives and also any constraints that are raised by this committee. I am done.

MM: Yeah, so when you were explaining this you included instantiation and linking as part of the parse phase but the syntax of JavaScript is such that each module can be parsed in a context-free manner and it's very interesting to let take a look at the static module record approach, which is way to think about what moddable pre compiles into, and also the first class module record syntax, the object that it evaluates to already has the parse behind it and the loading behind it, but still has the instantiation and linking as well as evaluation ahead of it. The approach for being able to multiply instantiate the same static module record with different import graphs. I think we'll assume a lot of (?) trying to achieve here as well as give other benefits and fit into these proposals.

YSV: That's very interesting. Thank you for you for bringing that up.

MM: I think I would like to work with you on this investigation because of those times.

YSV: Yeah, fantastic. That would be superb.

BFS: Somewhat in a similar vein to Mark. If you were to import star it doesn't seem like you actually need to perform parsing and linkage at the time. The reason why linkage is being done is because of a choice to have these effectful bindings. I think being able to completely avoid parsing is useful on its own and so if we go forward, I think you could achieve that.

YSV: That's fantastic. Thank you.

GCL: This proposal, the problem space seems legitimate. But I don't think it would be appropriate to move forward with anything that discourages the use of top-level await like it's a first-class language feature and I think any solution that comes from this should be 100% compatible with that. As the proposal is written currently I don't think it would work, but I'm sure there is something clever that could happen in the future.

YSV: So I'm just going to go back to this slide here. Which I think would be the right solution here. So I did I did start off by saying that we could throw if there's async we could enforce the things are sync, but I think this is the right solution that we treat async modules as eager, so they'll still follow the rule, they'll still fulfill the invariant that children are executed ahead of their parents. And I think that this is actually a very elegant solution to exactly that problem.

GCL: Yeah. That's definitely one approach. I just wanted to make sure that this was a very explicit concern.

YSV: Okay, very good. I completely agree with that. Happy to do that.

BFS: So the way the proposal is written it has these kind of effectful bindings, which, we do have effectful bindings on the Global actually in various environments, but it also entangles the bindings which I'm kind of uncomfortable with, so accessing one binding does populate a different binding. That's - I don't have a solution. I'm just uncomfortable, I'm not going to block or anything.

YSV: I acknowledge that this is an issue that I don't have a good solution for. I mostly just have a stubborn position on that. I think that we might want to still do this in spite of it, but if we can come up with a solution here then I'm very very open to exploring that.

SYG: One thing that Chrome engineering has explored internally without changing any language semantics is putting the point of laziness at linking instead of evaluation with the explicit understanding that you have to evaluate everything out of the way currently. So if we put the point of evaluation at linking that lets us pipeline work of evaluation. I think that kind of optimization should still be useful in general, but if a lot of esm use becomes lazy, then that might defeat that. I wonder if you thoughts on putting the point of laziness elsewhere and I think that has tie in as well to the I/O point you have made and I think other folks are about to make.

YSV: I'm happy to consider other locations. This is sort of a first stab about where we can where we can put the defer point. If you have suggestions - so we don't have this optimization. We do have a lazy mechanism within the browser, but it's quite old. It's attached to our old module system and it's not something that we want to replicate on the web.

SYG: Yes. I remember that mechanism, but the lazy linking stuff is not productionized. It is an optimization people were thinking about, so I'll connect you and the folks were thinking about optimizing ESMs on the Chrome side, in particular about laziness, and see if there's anything interesting there.

YSV: That would be great. That would be awesome.

SYG: For my second point which was decided fetch problem, which I let me sure I understand exactly the prompted the side effect problem. Is that because you are causing evaluation of the module top level on the first touch of one of these live bindings from a lazy module you have less predictability, is that the core problem?

YSV: as I understand the problem of doing this lazy evaluate you could do things that are unexpected, you could have unexpected Behavior happen as a result of like, you know, you're just accessing data here. You don't expect to send a fetch request as a result of something like this. I would argue that actually this, with "lazy" init. There's an argument for this syntax in particular because it Flags this data as something that's not just a data access, not just a variable access, and this is a signal to the user. There is an alternative syntax, which we can go into maybe in an incubator call that doesn't have this benefit. So I would actually this is another strong use case for having something that makes something lazy at the edge rather than at the node because this basically says data isn't just data, it isn't just a variable access.

SYG: Cool. Okay, so that matches my understanding of the problem. That problem seems pretty fundamental to any kind of deferred evaluation, unless we do something extremely heavy weight like, you know purity annotations or something, which I don't see as realistic. So I just want to get your take on - right, so it sounds like I got my answer and your take on the this problems is, since it is fundamental we need to the those kind of Bindings that have these knock on evaluation side effects very explicit. And that's your solution. Not any. Not something like Purity annotations.

YSV: Yes, so I actually considered Purity annotations and I discussed it with a few colleagues the problem with Purity annotations is that they'd become like they limit what the module would be able to do and that becomes very unwieldy and will encourage certain kinds of patterns that we may not actually want to see I think that so the there has been research done on this such as parallel JS, which colleague brought up to me, and I need to look into that in depth, but I don't think that that's the right solution here because it would make lazy modules fundamentally different from eager modules, and I don't think we should do that.

RPR: Solving this problem is critical for seeing real use of ES modules in production. As a reminder to everyone, even though ES modules are used widely as an authoring format it is still quite rare to see them used as a runtime format in production. I think that lack of this feature, or this being an unsolved problem is a reason. In the Bloomberg Terminal we heavily rely on a similar technique for doing synchronous just-in-time loading of modules and it's because we've seen the exact problem that Yulia described at the start, where you build a large code base with lots of eager static dependencies and then you discover "Oh, no, we need to speed it up" and you need to get rid of that evaluation time. The evaluation time is the key thing to eliminate. So I support this proposal.

JHD: I support stage 1 solving the problem, but I wanted to be quite clear. I am horrified by the prospect of side-effecting variable references. So I can't imagine how I could be convinced to support stage 2 if that was part of the proposal.

BT: Yulia would like to get stage 1 for this proposal. Are there any objections here? [no]

MM: I want to emphasize a qualifier that's like JHD’s qualifier, which is stage 1 for the investigation. The particulars of how it's brought about I also have some discomfort with, and I'm very interested to see how it ties in with these other proposals, but the idea of investigating this area and seeking this goal on I'm completely on board with.

BT: All right. Thank you Mark.

### Conclusion/Resolution

Stage 1

## Intl LocaleMatcher for Stage 1

Presenter: Shane Carr(SFC)

- proposal
- slides

SFC: I'll be filling in for Long here on this presentation button to Locale matcher long as a delegate who is a member of the task group 2 and is unable today because of personal reasons to give this presentation. So I'll fill in for them to present LocaleMatcher.

SFC: This is a this is a very popularly requested feature in the in the insole specification as a way to resolve give given a set of languages that they that the user understands which is typically the accepts language header and a list of languages that the application supports resolving those two match to a Locale that you should actually display to the user. user. You can see some of the some of this written here and as motivation, we currently support local matching in ICU in Intl as but it's a lower level feature. That is sort of transparently part of number format and date-time format and the other formatters and the desire of Long's proposal here is to surface that so it can also be used for selecting from translation resources and Things like that. So this is a very early proposal of what this API could look like. We could for example have an array of requested locales and available locales and then it would return a new string with some options. And then there's several options for what the algorithm could be. long has cited several prior Arts here including in particular the one I'm most familiar with which is UTS35 language matching. and this is an example call site. So I do want to highlight a couple potential issues with this there. I believe ZB also on the call, he can attest to this a little bit but there's not a universally accepted algorithm for how to do language matching. There are some popular ones that are down here, but the exact algorithm I think is sort of up for debate and there's some other issues with that.

SFC: I believe this proposal is good for stage one though, because these are questions that - I think the fact that we get so many requests for Locale match. I think it means we should at least investigate these problems and I think that there's a lot of room here in this proposal to investigate these problems. This proposal could morph into exposing some of the lower-level building blocks like region containment and things like And I think that's that's a great direction for this proposal to go. So the purpose of asking for stage one is, we have pretty clear motivation. We know that there's a need for this on the web platform and then the purpose of asking for stage one is to investigate this space and arrive at a solution that everyone can agree on.

SFC: ZB have anything you want to add? Are you on the call?

ZB: Yes, I am. I don't think I have that much to add. My personal hope is that a lot of that is solvable by user land libraries and the real question is going to be more tied to what we talked about yesterday, which is whether the commonality of the use case justifies addition of an API, that could be done by a library, especially in the light of having multiple different potential algorithms to solve it, but I think that it's absolutely a good space for us to explore stage one.

RPR: Okay, so we've had some support. Is there anyone wanting to go on the queue?

SFC: Just for informational purposes are their delegates here who have worked a lot with the Accept-Language header because this proposal as well as some other related feature requests and Ecma 402 sort of involve different ways to apply or evolve this header and it would be great if we could engage in those conversations while we're in stage 1 with I think that's that's going to be one of the big focuses. Are people familiar with what the Accept-Language header is?

RPR: How about you explain it for us?

SFC: I'll go ahead and pop up my web inspector. So if I go into the network tab of the web inspector, I'll reload the page every request here. Just click in here. -

[technical difficulties]

SFC: Okay, so I just made this request to the GitHub page and if I go into the header pain I can go ahead and scroll down to the request headers and the pretty much every request that I send in addition to carrying your cookies and Aries and all those kinds of things. accepts language header, which is right here. This tells you the languages that the page should respond to. I'm not very interesting: in my accept language header I just have “en-US,en” but there's a lot of people, especially multilingual users, who are going to have a longer, more complex list here. One of the purposes of this proposal is to Say, okay. Well given this accept language list. Let me resolve this to resources for the app. So if you have say French Spanish and English all in here in a certain order and your app supports Spanish English and Portuguese then maybe you'll select Spanish if Spanish is ranked higher than English even though you don't don't support French. And that's the kind of thing - ZB has a lot more experience in this area than I do so, so I'm not going to pretend to give an authoritative discussion on this, but think that it would be great if we can engage other people who have worked with these types of headers because I think there's a lot of interesting area to explore here.

ZB: If we have a couple more minutes I can also try to mention some of the open questions. That are going beyond accepted languages that are related to language negotiation, but that's also listed in the issues of the proposal. So interested parties can also go there.

RBR: We do have still another 11 minutes on the time box. Would you like to share anymore?

ZB: Yeah, so I'll try to give people some insight into what the considerations we are thinking about is in some scenarios. You want to negotiate down to one language or one Locale because you want to display your website in some language right, like you need one but in some other cases you may want to negotiate down a list of locals. that you have in some fall back because you may have some resources in the first preferred local to the user ones, but some resources only in the second or third so you're negotiating down not to a single local but to a fallback chain of locals? Another interesting consideration, is that there are some open ended questions that are not arbitrarily resolvable about whether a person prefers an imperfect match. Let's say that someone says, I speak Canadian French and Canadian English - so is South African English better or Swiss French, right. So there are some imperfect matches and how far those two are from each other. Some people will say I'm bilingual and I basically speak English and German and both languages are fine for me. Whichever you have, show it to me. Some people will say I do speak English and German, but my English is perfect and my German is, you know, very bad, or the reverse, and the distance between them is really important. So when you're designing those algorithms there is there's a lot of questions around that and then like what you are going to do with the resulting list has a huge impact on how you want to design this algorithm. If the result is that you're gonna display a date, then regional differences are much more important even than linguistic differences. Because your date format is more uniform between English and French in Canada, than between Great Britain and the United States. If you're going to display texts, my language is more important and the script is more important. In some cases the distance between my first and second language is not as important. In some cases it's crucial and it's prohibitive for a person to understand some complex nuanced information about whether their payment should be cancelled or whether they should accept the transfer request in their second language. So there are a lot of new ones decisions to be made and one of my personal concerns, so - we're diving away from experts' conversations to like ZB's thoughts - is that presenting an API in Ecma 402 that makes it easy to negotiate in, one of those ways is going to kind of hide this complexity and make it very tempting for people to just plaster this solution because it provided by JavaScript even if this is not the right solution for the problem they're trying to solve. So, I am of an opinion that since there is a breath of potential algorithms and solution to how to sort and order and filter I prefer to - we should be more guiding people into, or ensuring that we expose building blocks for people to design their own algorithms for their own purposes, but I can strongly agree with the sentiment that having a language matcher negotiation in Ecma 402 seems like a very tempting Generic solution and I don't know exactly what the odds are beat will be. I hope that stage one is exactly what we're going to be discussing, but this is the space that we're going to be working on around this proposal.

RBR: Okay, thank you. And so there's still no questions on the key. So it seems like you're in a position to ask if you wish.

SFC: Okay, do we have an agreement for stage 1 for intl.LocaleMatcher? For exploring the space of language negotiation

RBR: or conversely any objections to stage one? No objections means consensus. Congratulations. You have stage 1.

SFC: Thank you.

### Conclusion/Resolution

Stage 1

## Inclusion working group updates

Presenter: Mark Cohen (MPC)

- proposal
- slides

MPC: This is a status update on the work of the TC39 inclusion group as of today. So first off, I'm going to give a brief overview of what the inclusion group is. So we're an ad hoc informal group of TC39 delegates. We are not a chartered working group or TG. So we don't have any official role, but we have been meeting in this sort of improvised capacity fairly regularly for the last few months. There are meetings on the TC39 events calendar which you can check out if you like. I'll have more details on that in the end and our goal is to work on proposals with the aim to proactively improve inclusion in TC39 for the sake of ensuring that all delegates are able to participate to the best of their ability and that new delegates as well can participate to the best of their ability.

MPC: So we have two status updates to provide today. The first one is on nonviolent communication training. This is something that was raised a long time ago within the committee and the inclusion group has kind of taken it up to get it past the Finish Line a brief note before I jump into this. This was entirely done by Dave Poole. I am presenting on his behalf, but he did all of the work with reaching out to trainers. Gathering proposals, all that sort of stuff. So big thank you to Dave. He was not able to be here to present during this time slot. And if you would like to check out the thread with the full details of all the proposals the link is in the slides here. I'll copy it to the notes afterwards.

MPC: Nonviolent communication training – the work that we've done so far is first of all research ways that we can bring NVC Things into TC39 meetings. We have a pretty unique format here within this Committee in terms of how we conduct plenaries and how we communicate outside of plenaries as well. So Dave has met with five different trainers from all across the world and and talked with each of them about what TC39 is and given them the details on how we conduct our plenaries how we work as well as the content of that work, and asked for their input on how we might be able to conduct NVC trainings within the committee. And then after those sort of initial meetings, he asked each trainer to provide a quote and a proposal for how precisely to deliver this training to this committee for, you know, approximately 60 to 80 people seems to be our average attendance.

MPC: So the current status: we have four proposals that have been submitted and you can view the details on that GitHub thread and there's one that's still pending that we've asked to be submitted by February 12th. The proposals run a pretty wide gamut of the exact format. So each different trainer had a fairly unique proposal for the format of the training. So there are lots of different styles of workshops, different lengths, different amounts of workshops. Several of the trainers offered optional additional sessions for smaller groups, so we were mostly thinking like the chair group, the Code of Conduct group, there could also be one for just interested delegates who want to get additional training. So there's a lot of flexibility in terms of the format among the different trainers and it'll provide us with, you know, different experiences coming out of the workshop depending on which one we go with. There is also one trainer who is equipped to provide anti-racism training, which is something that the inclusion group intends to bring to this committee after nonviolent communication training. So we're basically intending to use this as like the first step and then proposed anti-racism training once the committee has gone through this.

MPC: The next step is, we are going to compare the proposals from among the various trainers. eventually once we've kind of narrowed down and decided on which one we would like to proceed with we will secure funding, scheduling it, coordinate with the chairs to figure out the exact form to eventually bring the training to the committee. We were aiming we don't have any sort of definitive timeline, but certainly within the year and I believe Dave was saying that we should be able to deliver the training sometime in the summer accounting for all of the various logistical pieces that need to fall into place.

MPC: So yeah that about sums up the NVC training update. If you would like to join us to help out in these efforts with evaluating the different proposals and securing all of the different logistical things that we need, feel free to join our Matrix room. We've been coordinating on a room on the matrix.org Home Server called TC39 inclusion. So feel free to jump in there and there's been plenty of discussion on this and other matters, which is a lovely segue into the second topic. I guess I'll pause here and ask if there's anything there's anything on the queue.

RPR: There's nothing on the queue.

MPC: Okay, lovely. So yes segue into the second topic, which is prototyping Matrix for more accessible real-time committee chat. So currently we're using IRC. There have been a number of issues raised in the past about the continued use of IRC and whether we should and how we might move off of IRC. Most notably was this very large reflector thread which I have linked here in the slides, I will also copy that over to the notes, that provides a lot of context for the kind of foundation of this prototype.

MPC: So the motivation here is removing barriers to participation for TC39 delegates and the so I'll go into depth on the exact barriers in just a moment, but the but the kind of origin of these barriers is that IRC in this day and age has become somewhat Arcane for people who are used to using IRC all the time. It's totally intuitive, it works just fine. There's you know, no problems with using it. But you know, we're at a point in the history of technology now, where not everyone grew up with IRC. And for those who didn't grow up IRC either just by virtue of being younger or perhaps not having been involved. I lived in communities that use IRC widely for people who don't have that experience. It is a really unintuitive tool to use and presents a barrier to participation. So now let's talk about exactly what the barriers are. The biggest ones that we've identified. First of all the structure of IRC. So the various different networks how to join them, how to register on them as a kind of sub point of how nickname management is done. So, you know, unless you most servers use NickServe which is what our server uses freenode, but but you know, you have to know about that if you just kind of naively sign up your user name isn't yours. anybody who wants to claim it? There's also no offline message delivery, which is or at least by default no offline message delivery, which can be really unintuitive. as you know, if you again if you didn't grow up with that experience every other messaging system that you're used to at this point. You can just send a message to somebody and if they're offline, they'll see it when they sign in similarly. There's no message history by default. So if you are offline you miss everything that was said in a channel so the kind of commonly accepted solutions to these things are either use a bouncer which is a fairly time-consuming process. So if you don't already know how to do it, if you're starting from zero, you'd have to acquire some sort of cloud compute server. Learn what a bouncer is and how to administer it, install it and then probably debug a bunch of like Network rules. You could, if you don't want to go that route you could pay for a hosted service, which does provide a relatively decent experience. I know a lot of people on this committee myself. IRC cloud and that provides an okay experience, but I think and this is detailed more in the reflector thread. I think we should agree that kind of expecting people to lay out an expense and get it reimbursed by their employer is not necessarily a great idea. You know, it's certainly possible for a lot of people but we should consider that, you know a not everybody has the kind of financial Freedom or trust to do that and be not everybody on this committee is sponsored by like a large corporation who will just no question reimbursed that sort of thing and then the third solution in very heavy air quotes is to just use IRC as is and accept all of these barriers or well, I guess not really the first one but except that, you know, you won't be able to deliver a message to a fellow offline delegate and you won't be able to receive any if you yourself offline. Except that you're just going to miss the entire message history of a channel if you're offline. Now, this is possible. I you know, there are many people on this committee who use IRC this way, but it's you know while that is certainly a totally viable choice that somebody can it doesn't really match the like expected defaults today for what a messaging system should do and it also presents its own barrier of you know, So if you are somebody who's new on this committee, and your maybe trying to learn more about about the committee process or you're trying to reach a delegate to ask them about a proposal of theirs or something like that. Then you have to fight the platform basically to get the knowledge that you need. so after evaluating several different chat platforms, including slack Discord and a whole slew of others. You can look on our repository. There's a big spreadsheet of different platforms.

MPC: We identified Matrix as the best Target for a potential migration, you know, should we decide to move off of IRC? What we identified is that Matrix is probably the best destination. destination. So Matrix solves all of these barriers, it just gives an out-of-the-box experience that doesn't present any of these barriers that IRC does and on top of that it gives us much better moderation tools. So that's both kind of at the structural level in terms of permissions and you know, assigning different roles to users and at the individual level where it gives a there's a there's a better ability for delegates to kind of protect themselves and moderate their own experience, which was something that was identified again way back in that big reflector thread as kind of an important property for a modern chat platform. It also gives us built in logging. This is a pretty big one. The legal policies TC39 has to abide by all of our technical discussion has to be logged. Doing that on IRC is a pretty big pain. And in fact, there are several channels. That probably should be logged. that aren't or that you know, it's very difficult to access the logs or perhaps their gaps in the logs Etc. The overall point. Is that doing logging on IRC is always kind of a third-party taped together ad hoc solution whereas Matrix if you create a public room on a Home Server that supports it which The Matrix dot-org Home Server does then you can just click a link and see the entire history of the room and it gives us It gives us that completely for free like IRC. It's an open source protocol. There are many open-source clients including many high-quality graphical ones. that kind of match, you know other modern chat Platforms in onboarding experience and interface expectations Etc, but then there are also plenty of you know command line clients or other more advanced things for those who like to configure their clients lot. There's also a federation which is a really nice property. Ernie's I know there are several companies who are Ecma members and participate in this committee who use Matrix internally Mozilla Galia and I think beaucoup, but correct me if I'm wrong on that all use Matrix, and so, you know the TC39 channels can just federates seamlessly with those delegates existing accounts. So that's a nice property and lastly there is an IRC bridge for those who really like their IRC client. We have not prototyped that yet. So we definitely are looking for feedback on that, but it does exist and it is kind of used in the Wild by other Matrix users.

MPC: So what we've got going on right now is basically a pilot program. We've set up an analogous set of channels to what already exists on IRC. So we have kind of the general TC39 channel, the TC39 delegates Channel and Temporal Dead Zone, and then we also have our inclusion group Channel. I have also set up a channel specifically for feedback and kind of notes on this pilot or prototype program and anybody is welcome to just create a new channel if they you know, if you want to kind of bring a topic over from IRC and see how it works on Matrix. You can just create a new channel through pretty much every Matrix clients.

MPC: Okay. Well, this is the last slide. How can I participate if you want to join us there's that Matrix room right there. I'll copy that link over. We also have an inactive channel on freenode. We have a GitHub repository TC39 / inclusion working group and we have calls every other Friday which are on the TC39 events calendar. Please reach out to me if you would like a direct invite to those calls sent to your inbox so you can add it to your personal or work calendars and I believe that'll do it. Apologies for running over time here.

RPR: That was an excellent summary. Thank you Mark.

MPC: Glad to do it.

## Incubation Chartering

Presenter: Shu Yu-Guo (SYG)

- proposal
- slides

SYG: So first of all, there are two overflow items from last year, those two are the error cost proposal at stage 2 and the module block proposal, which is now at stage 2. It was at stage one and now stage two.

SYG: I would like to call out and ask for the defer module import evaluation to be included in the next Charter. I would love to discuss it personally, and I think it's a good fit.

YSV: Yeah, I would be happy to do that, I'm very excited about an incubator all for this.

SYG: That sounds good to me. So I won't have that and the only other one I had in mind was async do Expressions given that it is earlier than the do. Kevin, do you think there are feedback items that you would like to ask at the incubator call? And would you benefit from an incubator call them?

KG: I actually think the design space for async do is fairly constrained, at least assuming that it carries over the decisions from do expressions.

SYG: So, okay, then I am happy to omit that from the next Charter. So currently we have three carry overs which are error cause, module blocks, and then the Deferred module import eval proposal from Yulia. We probably have a time for one or two more depending on how many we can run but three is certainly fine. If no other volunteers speak up.

DE: Yeah, there's time then well if we don't get through the topic today, then I really want to draw a conclusion on this protocol design issue that is next on the agenda. agenda. So that's sort of conditional on it being left unsolved in the brand kicking topic might be interesting for a group, but I would want to leave that to the volunteer Champions to decide the brand check

SYG: That sounds good. We currently have three confirmed and one possible. Are there any Champions or any delegates who would like to volunteer to have a topic be discussed? [no]

SYG: So we will be going with three with a possibility of a fourth look out for the email for the new Charter. As a quick recap for folks who are not familiar, these calls are an hour long. I tried to schedule them with a doodle about a week ahead of time and they happen every other week and minutes are published just like meeting notes are published and look for an issue on the reflector for the next coming up topic meeting details times and so on. All right. Thank you very much.

RBR: Thank you, Shu.

## Protocols in JavaScript

Presenter: Dan Ehrenberg (DE)

- [slides](https://docs.google.com/presentation/d/1G8g0MSpMeJJeRNbiC89y2q-nxJ8371JczMaxN8ksjPk/edit)

DE: Okay. Thanks. So I wanted to talk about protocols in JavaScript. And the reason I want to talk about protocols is because it came up in some design discussions about Temporal. Temporal lets you design custom calendars and time zones. These are based on methods that get called for this custom behavior. It's important because calendars and time zones are culturally defined and can change over time. JavaScript engines especially with internationalisation included will have pretty good information, but the application may have more appropriate information. So in designing these custom time zones and calendars I've been working with the Temporal champions group to align to my understanding of TC39 convention on how protocols are used. In issues, JHD has raised a different idea of how this should work and I wanted to discuss this more broadly with the committee because I'd like - the proposal should be hopefully concluded on.

DE: So two big questions to answer are, should calendars and time zones be required to be subclasses of the built-in Calendar and TimeZone or should it just be anything that conforms to the protocol. The other question is should these methods that custom calendars and time zones can override be named by symbols or strings. So this second one, we already discussed in committee, but there were some claims that the first answer might affect it. You can see the Temporal documentation, with custom calendars the recommended way to subclass Calendar, but really you just need to fill in a few methods. And time zones are similar. There is a recommendation that you set up a class that extends Temporal.TimeZone and then you can override certain methods, but you could also just implement those methods and use the protocol. Just for context, as we discussed earlier, the Temporal proposal is frozen. So the draft is complete. The polyfill is out there and released and it's all ready for review. Please try it out and file bugs. The champion group is not working on new changes, just responding to the review from the committee. So this issue that I want to discuss is very much not core to the Temporal proposal. It's not something that the Temporal champion group has expressed interest in blocking the proposal over. This is something that we should just understand what our conventions are and follow them. So I'm personally especially interested in maintaining consistent conventions. And so any changes that we make from here would be very small and localized.

DE: What is a protocol? I think of a protocol as a set of methods with a contract of how to call them. So we have many different protocols in JavaScript. The iteration and iterable protocol is a big one. But some smaller ones are things like in the Set constructor, the add() method of the newly created object is called for each element of the iterable that's passed as an argument. And similarly, Calendar and TimeZone are protocols, they also have concrete classes just like iterator.prototype, like Set or RegExp have concrete classes, but they also work as protocols with these methods that you can subclass that existing thing and override those methods and the methods will be called in a certain way with certain expectations of their return values.

DE: There was the question raised of subclassing or brand checking. So when you make a custom calendar or time zone should you be required to subclass the existing Temporal.Calendar or Temporal.TimeZone? Well if you think about any of these proposals, any of these protocols, none of them have such a subclass check. No protocol does brand checks. Protocols are always about the name of the method, how it's called and how it handles return values. So for an example, we have iterator.prototype, and you should extend iterator.prototype if you make your own iterator, this is what iterator helpers will be based on, but there's no iterator superclass that sets the brand and there are no checks for this brand. Temporal documentation outlines that it's probably easiest to subclass existing calendars, but that's not how the protocol itself works.

DE: So personally, I think we should stick with this pattern for the calendar and time zone protocols and that's what the temporal proposal does. Okay. So here's a funny example with RegExp where you can extend RegExp or you can make some crazy thing yourself that meets the RegExp protocol and call the RegExp methods on it. So, you know, we've been discussing how actually this whole RegExp subclassing thing is kind of weird. One of my first TC39 meetings argued that we should remove this RegExp subclassing, and recently SYG and YSV have been pushing for this in a more concrete way. And I think that's a great effort. So it's important not to overuse these protocols. Some subclassing is one thing, getting the new.target plumbing, but another thing is calling all of these user defined functions in a way that might not be useful. So Calendar and TimeZone are different from RegExp in that for RegExp we don't have any meaningful use cases for subclassing it, but for Calendar and TimeZone It's really important — we've identified concrete calendars where there's there's real usage of things that aren't yet encoded in all of the standards and it's important to be able to support these these different cultures in code.

DE: The solution if you have a protocol that's not useful is to remove the calls to the methods adding brand checks, but still calling methods would not create a simplification for any of these protocols that are removed by the subclassing built-ins removal proposal. So I think that might be a source of confusion.

DE: On kind a lighter topic, whether symbols or strings are used. You can see that in the existing protocols. There's just a variety. Sometimes symbols are used, sometimes strings are used, you know, like the iterator next() method. I think it's fine for symbols or strings to both be used in protocols. I don't think it has to be one or the other.

DE: So protocols and explicit language features. There are different language features that try to encode protocols. One is TypeScript interfaces, which you could say. It's not a TC39 language feature. It's not one that's has runtime semantics, but it's still a construct that people align their protocols around and then we could also have first-class protocols. So you could take as a design requirement using the language to be expressible according to these other concepts of protocols, but they don't provide strong guidance on symbols versus strings or fore brand checking. They don't tend to come with these brands. I wanted to leave these questions to answer when we've gone through the queue, so I'm happy to go through the clarifying questions.

JHD: You said no protocol does a brand check. This is false; Promise.then() does have the special behavior if it has the brand?

DE: In what sense is Promise a protocol? Oh, Promise.prototype.then()? So this seems like a confusion of two things: one thing is the protocol which is like the pattern of having thenables. And then another thing is like an instance of the protocol like concrete promises. So it's normal for an instance of the protocol to do brand checks against itself.

JHD: A protocol is typically one method like a thenable. An array-like is something that has a length, or thenable, something that can be stringified to something with a toString, etc. And then some of the things that accept a protocol, meaning one something that has one method; like promises, they coerce it to a branded object as part of the process. A multi-method protocol is basically— there's only a couple patterns. The big one, RegExp, where it definitely does a brand check at times, but it also calls like different methods, and the other one that was pointed out is Set and Map. The Set constructor calls add() which is a protocol but Set.size for example, checks the brand and throws if it lacks the brand so we have a mix of those things and I agree that a mix of those things is problematic. That is why the Set method didn't go forward, but I think that the committee does not actually have a clear consensus on what subclassability means. Meaning it's not simply everything observably calls methods. And so you just override the individual methods you want and you can use all the others. It's not simply like everything uses the brand and all the behavior is controlled through branding or through or passing arguments to the original constructor. It's some hybrid in the middle that continues to cause problems and I see the pattern that is set up with the Calendar and TimeZone as furthering that confusion and that's where I'm coming from here.

DE: So I think the guiding principle really comes back to this protocol versus instance of a protocol thing or instance implementation of a protocol. The examples you gave, when they use internal slots, they're doing so to do a— they're not just checking the slot and then going on, they're using the— they're doing something based on knowing that it is an instance of that, whereas for Calendar and TimeZone, it would be purely cosmetic.

KG: I wanted to push back a little on the definition of protocol that you offered. I would say that protocols are only when you are talking about objects that might do something other than this. So like iterable is a protocol because there are lots of different kinds of things that can be iterable, but for other things for things like this, it's not — the thing that you would be passing through these methods from my understanding isn't ever intended to serve any other function. it's not like you were having some generic collection that in addition has these methods for some reason. So I would not consider the calendar and time zone things that you're discussing to be protocols in the same way that iterable is a protocol or like disposable is a protocol, and for that reason my preference is that Calendar and TimeZone act like grab bags of arguments. Because that's effectively what they're doing. They're providing specific arguments to a function and the most convenient way to do that is to have string named arguments and I think that's perfectly reasonable to do for the specific use case of providing specific values to some function when it's not a generic protocol that you might attach to an arbitrary object.

DE: It's really interesting that you raised that because this whole grab bag of arguments is exactly what the Temporal champions were leaning towards before I went in and said hey, we should use a class for this and the reason is because exactly like you say, it's completely intuitive. That's what you do in JavaScript. You would have an option for an object with a bunch of functions in it. But at that point it makes sense to have a shared prototype. So this was part of the design feedback that I gave to Temporal.

KG: I forget whether Temporal has the brand checks or not. I am opposed to brand checks.

DE: It doesn't have brand checks.

KG: That sounds great to me. Having classes that provide a convenient way of creating these objects when you want default functionality, but allowing users to create objects of their own that conform to that shape and just serve as a bag of arguments, seems great. I'm in favor of that design. I just don't want to call it a protocol and I don't want it to inform how we think about protocols like disposable.

DE: I agree that disposable should be a symbol and - I think I overstated my case in these slides. This is something that we talked about previously, about Calendar and TimeZone primarily serving as a thing that has this calling convention (if we want to avoid the word protocol) whereas disposable, when it's on a shared object then you have this higher chance of namespace collisions. So it's a very practical thing that its Symbol gives you. I also want to acknowledge the point that JHD made earlier, which is that the JavaScript standard library is just very small right now. We don't have very much precedent and we don't need to be just coasting off of precedent. We can do active design here. We should be doing that and I think having these patterns can help us expand the library further and help enable future proposals.

MM: Let me contrast two polar opposite patterns, and I don't know where Calendar falls on— you know, if it's one of them or on a spectrum between them, but there's protocols like iterator as you mentioned where the exposed surface is for the clients to invoke and the built-in mechanisms are not are there. You're not parameterizing some built-in mechanism with behavior. Whereas the RegExp thing that we all don't like anymore, that is one where you're parameterizing the behavior of some methods by providing the behavior of other methods and it's going through a self-send. In the self-send is the means by which the other methods are looked up to parameterize the first set of methods for the parameter on parameterizing with behavior. I have come to really dislike more and more doing it with something that looks like subclassing. For that I'm more and more inclined to use what I'll call the Handler pattern familiar from proxies with handlers where you parameterize the proxy creation with a bag of methods with promises. We probably went through effort to make promises subclassable although the original design did not have that and had instead a Handler-like extension point. We tried to use the subclassing then to do what we could do with the Handler-like extension point and found we could not, and we're now proposing a Handler-like extension point anyway. So the nice thing about the Handler-like extension point is it only exposes the parameterisation to the behavior that needs to be parameterized, and it separates that from exposing that to direct invocations by the clients of the abstraction. So I think that's all I want.

DE: It's pretty unclear to me how that could be applied here, because there just isn't much there. A trivial Handler wrapper is the identity function and it makes what you're saying kind of potentially line up with what KG said. We don't necessarily need encapsulation here, but this bag of methods or bag of handlers is the operative pattern. Well, the bag's a different way of explaining it to people.

MM: The key thing is that the bag of handlers is provided as a construction argument and is not exposed on the object.

DE: Well, the normal way of using calendars and time zones is just to use the built-in ones. You pass in a string that looks up in the JavaScript engine's list of calendars and time zones, and you just go from there. Passing your own handlers is the superpower feature.

MM: The key question is, is the behavior of any of the existing built-in methods to look up and invoke another method on `this` to do a self-send in order to delegate part of their behavior to something that's overridable?

DE: Oh. I think that is true for calendars, but it's not a very core part of the protocol, but it is needed in case we have a calendar that adds new field types.

MM: So sometimes that's the appropriate thing. This is not a categorical statement I'm making. But often when you're parameterizing the behavior of some things with user-provided additional behavior, the Handler pattern is better. So I just want to put that on the table as a first-class thing to examine as a possibly better pattern.

DE: Okay, noted. I do like that pattern.

PFC: Yes, it is the case that Calendar and TimeZone methods call other Calendar and TimeZone methods which are overridable.

MF: A lot of what I wanted to say here was covered by KG and I'll just say I agree with KG's positions there and what was talked about with DE. What I would add on to it is is that we had this discussion previously both in the issue tracker on issue 310 and last year in February with the conclusion that these calendars and the time zone objects do not have multiple responsibilities, and multiple responsibilities are the defining factor for why we would choose to use a symbol-based protocol. So I think we should stick with the conclusion that we arrived at then, and what's currently in the proposal, to answer this specific question for Calendar and TimeZone objects.

WH: As object-oriented programming has evolved, plenty of folks have come to the conclusion that subclassing using self-sends is a code smell and I’m in that group as well. I don't care if people do that in their internal projects, but I do not want to promulgate APIs in the language which require subclassing with self-sends.

SYG: What is the word that you said?

WH: “Self-sends”, it was the same term MM was using.

DE: What does it mean?

WH: The issue is that in subclassing you have API surfaces both for calling your class from the outside and for which of your methods internally call which of your other methods. Those can then be intercepted by overriding and that is a tremendously difficult thing to get right. It's almost always a code smell if you use this for APIs which you might want to change later. It’s fine if you're doing this internally in your own projects, but it's a really bad idea for public APIs for interfacing with other projects.

DE: Okay. So overall based on what was in this presentation, and what we discussed, how do you feel about the current state of the Temporal proposal?

WH: I don't recall enough of the details of the Temporal proposal. My point is that we should not require subclassing of anything in language APIs.

DE: Okay. Thanks.

JHD: So yeah, if that's the opinion, that we don't want to encourage subclassing, then why is it a class? We can achieve the same goal of providing default behavior with just a function that spits out an object with the methods, the functions on that object can be `===` every time you call it, you know, there's like lots of ways to handle that. So providing a class means encouraging subclassing. That's the point of the class, so you can extend it.

WH: No, a class is a means of encapsulation. You can use classes for years without ever subclassing anything.

DE: I agree with WH here; classes can be any of these things.

WH: What I was objecting to is issues that we ran into with RegExp for instance. RegExp is a fine class on its own. It's a bad idea to subclass from it.

DE: So the pattern here in the current Temporal proposal doesn’t encourage subclassing. but the observable semantics don't. It's just a protocol there as exactly as WH says. A class is simply a way of bringing together that bag of state and behavior. This is like the other side of the coin for object-oriented, ad hoc polymorphism to dispatch methods. If we made it a bag just like an object that had these functions then the product would not have a shared prototype only take more memory and have worse performance in inline caches, things like that in practice. JavaScript engines know how to optimize for the prototype case in a way that's more difficult to optimize for the exploded-out object with functions case.

JHD: So I can't speak to the performance or memory profile of an object with free used functions versus a shared prototype, etc. But I agree that a class is one method of encapsulating an interface, as is an object, as would be a function that spits out an object, but the thing that you also get with a class is implicit encouragement of subclassing. That's what the `extends` keyword is, therefore people do it, and it seems strange to me if we don't want people to subclass these things that we would choose one of the multiple methods of encapsulating the interface that encourages subclassing. And to be clear I'm using the word interface not protocol because it's a set of multiple methods. And to me, that's the difference.

DE: Well, I mean if we were to try to avoid using constructors whenever we wanted to discourage people from subclassing that would mean a pretty radical change to the proposal. For example, we have Temporal.PlainDate, which is a constructor, and we're not especially encouraging subclassing of that. It's not really useful to subclass that, there's no particular user-defined methods that get called on it. Comprehensively avoiding constructors for these cases is kind of a big ask.

WH: I have no issues with classes. I just don’t want to require users to subclass something from a built-in to do what they want.

BFS: So I think one of the key takeaways that's being said is we don't actually want to necessarily discourage subclassing as a whole category of programming behavior here. The things that we've discussed in the past meetings about what problems are with subclassing are specific like WH and MM said. The use case here for Temporal is not actually having any sort of crosstalk or specialized behavior where a shared prototype would act differently than having an object. But, ergonomics-wise, it would be much simpler to use a class and if we do ban the ability to use a class it would behoove us to figure out what are we actually getting out of it. The problem was set out and stuff like that. Are that the class used the class the subclass is actually being called out to buy a base class and that causes some real world kind of questions about things that just don't seem to be present here. Yeah, that's it.

WH: I don't think anybody's asking for a ban on subclassing. I just don't want to require it.

DE: Yeah, thanks for your comment BFS. I agree.

MM: I will also want to avoid ever communicating the message that packaging up something as a class encourages subclassing. I think we should be actively opposed to that message.

SYG: Yeah, that's basically what I was also going to say, I think it is. There is quite a bit of nuance between— there is quite a big difference between something being a class and implying that you are supposed to subclass it. I think that that is a dangerous position to accept and to take that as a design direction for built-ins and in particular I think my understanding of the unsavoriness of the “self-sends” thing is in particular not that— Let me try to articulate this better. So when you subclass something in languages where there is a distinction between virtual and non-virtual methods like C++ where you have to say if something is virtual and overridable or not when you subclass something, you are still getting some value out of the act of subclassing even if not everything is virtual. The virtual thing is that you as a class designer can explicitly say, these are overridable hookable behaviors in JavaScript. We don't have that direct equivalent, we can factor out methods to be free functions that then never get exposed on the on the object as properties, that you can call in a way to not make every method virtual, but if you have it as a property on an object as a method it's by default virtual. So in JavaScript it so happens that it is conflated that when your subclass something everything is virtual and hookable and we don't have a good way to prevent that with a redesigned. which, so that is unfortunately a non-starter, but it should look like in terms of Good Ol' OO design. I agree with WH. I think we should be careful here. That's just because the language itself has completed everything to be virtual with subclassing doesn't mean that we are encouraging for you to override every single override of the whole thing just because something is subclassable. Does that make sense JHD?

JHD: Yeah, I mean, I understand that. There's some strong push back to my implication that saying that making it a class is telling people to subclass it. I hear that.

DE: It would be really important for us to redesign if we could JavaScript to have C++ namespace scoping resolution of symbols. Okay, keep going. It was a joke.

[next topic]

JHD: My topic is essentially sort of a twofold one. It's how do I validate, is this thing a calendar? Is this thing a time zone? Meaning, somebody gives me a Calendar-like object or a TimeZone-like object with the current spec design, what you expect, and I wanted then take that thing and pass it into Temporal APIs. How do I check it first and tell them that they gave me a reasonable thing or not, like I would with a bunch of— like if I want to see if they give me a thenable, I check the type of that method, does it have or not have a property, and so on. So that's the first part of the question.

DE: So that was kind of a curious part to me of your description of protocols, when you characterize them as having one method. I don't know, I don't think they're— I think TypeScript is how you should validate whether things conform to a protocol, or the first class protocols proposal. I don't think we have a way to validate this.

JHD: I hope it's not surprising that "use not-JavaScript" is not an acceptable answer in the JavaScript specification committee.

DE: Sure, but I don't know why you need to validate whether something conforms to the protocol, because something could have functions in those properties, but they might not conform to the protocol because it may not fulfill the contract that those functions have, which is in the documentation, right?

JHD: My question is not how do I ensure my users gave me an object that conforms to the contract. That I agree is a different question. My question is how do I give them a meaningful error message if they gave me wildly the wrong type of thing? They just give me an empty object, that is very different than if they gave me an ill-formed calendar. How do I do that? That's the question and I think it's reasonable that there be a JavaScript answer for that.

AKI: We have a lot of replies to this on the queue.

WH: If it walks like a duck and quacks like a duck, pretend it's a duck.

JHD: So then I'm checking how many calendar or time zone methods? That's the advice now?

WH: Why are you bothering to check that?

JHD: So I can give my users meaningful error messages when they give me the wrong category of thing.

WH: A user should get an error message if you try to call one of the methods which doesn't exist. So I don't see why you're checking all of them ahead of time.

JHD: So that's true, they would, but because if I'm showing the date later or something, they might not get an error at the time. They give me the object. So it's helpful to eagerly and rapidly provide errors to users at the boundaries of my API, which is why I try and engineer all my APIs to do that.

WH: That's not something which fits well with ECMAScript. [Let's move to the next person in the interest of time.]

AKI: Next up is BFS.

BFS: Yeah, just to be clear. We don't provide this kind of stuff on any of the other things and ECMA-402 or ECMA-262 like Proxy. We historically with precedent tell people to check the types of all the components of any value. So it may be considered unacceptable currently, but that is the precedent, that we have said we don't really have a way to duck type provided for all the things that we do actually check Built-in. If the request is we need duck typing for all these values that ECMAScript can consume, I think that's a very different conversation than this.

AKI: We now have SYG up.

SYG: Yeah, JHD, maybe I'm missing some nuance here. This seems directly analogous to your rationale for the ergonomic private brand-check proposal in that, like what WH was saying, if it quacks like a duck and walks like a duck I'm using something and then I'll check it right before I use it. And I throw the appropriate error. Of course, could do better with errors and indeed statically typed languages and any kind of static analysis can possibly emit earlier errors at a different boundary than right before immediate use, but the runtime JavaScript way, as far as I understand it, is kind of check for narrowly for the thing that you are about to use and then error if it's not there, so I'm wondering why this is different somehow in your mind.

JHD: Because in this case, I'm not using the calendar methods. I'm holding onto the calendar object and passing that around to other APIs to use and I want to validate it as soon as I get the object. I want to provide a useful error message. I don't want to wait for those things to do it.

SYG: But presumably that generalizes to other kind of data than count right and and usually why is this special here?

JHD: I am eagerly checking all those. I see which is a different proposal the anything that isn't brand checkable. I do indeed have to duck type a long list of properties and/or methods. And I do that, so I'm sort of hoping for a better solution than just hard coding a list of N methods and checking that they're all there and functions, which certainly is an option. It's just a very unergonomic one.

DE: I want to say if we add something like this Map.isMap, Type.isType convention, then Temporal.Calendar.isCalendar would check not whether something conforms to the calendar protocol, but whether it's a built-in calendar instance. I think that that's the natural semantics because protocols just don't have a brand. That's that's how I see protocols and how it seems like many of the participants in the discussion do. You've seen them or maybe further protocols the wrong word like the bag of behavior.

JHD: So I believe the current design stores the calendar object or time object in an internal slot and then observably looks at methods on it every time it needs to do that. It seems to me if this is an object bag that we would be eagerly extracting functions and storing those and calling them later. Well, because, except for the proxy Handler pattern where we do this, we don't do this. I believe the options objects are not stored, I believe, anywhere else in 262 or 402. The closest thing is the proxy Handler object, but in Temporal—

BFS: There are some other ones.

DE: For built-in Calendar and TimeZone, presumably we're not going to make a separate function identity for each of the thousands of time zones or hundreds. I can't remember how many there are. We would reuse the same function identity and that means that there has to be some internal state stored somewhere, by having an object that gives it a container for that state. So if we pulled the methods off it wouldn't work.

AKI: All right. I think we got some healthy conversation out of this. There we went way over the time box.

DE: So we've heard a bunch of interesting feedback and I think the next step for the Temporal proposal will probably be to leave it as-is given the balance of the committee’s feedback. Not drawing or asking for consensus on any strong conclusion about how protocols are done in general, but it sounds like Temporal probably shouldn't change at the moment. So please be in touch on the issues if you have any more thoughts or join the weekly Temporal calls that continue to happen.

AKI: Thank you for your time, Daniel. Thank you for the conversation everyone.

### Conclusion/Resolution

Temporal remains with current semantics; future cases to be discussed as they arise.
