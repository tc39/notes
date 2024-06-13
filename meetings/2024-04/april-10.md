# 10th April 2024 101st TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**

| Name             | Abbreviation | Organization    |
|------------------|--------------|-----------------|
| Jesse Alama      | JMN          | Igalia          |
| Ujjwal Sharma    | USA          | Igalia          |
| Waldemar Horwat  | WH           | Invited Expert  |
| Daniel Minor     | DLM          | Mozilla         |
| Ron Buckton      | RBN          | Microsoft       |
| Eemeli Aro       | EAO          | Mozilla         |
| Duncan MacGregor | DMM          | ServiceNow      |
| Linus Groh       | LGH          | Bloomberg       |
| Jason Williams   | JWS          | Bloomberg       |
| Ashley Claymore  | ACE          | Bloomberg       |
| Chris de Almeida | CDA          | IBM             |
| Keith Miller     | KM           | Apple           |
| Samina Husain    | SHN          | Ecma            |
| Bradford Smith   | BSH          | Google          |
| ZiJianLiu        | LZJ          | Alibaba         |
| Ross Kirsling    | RKG          | Sony            |
| Ben Allen        | BAN          | Igalia          |
| Jordan Harband   | JHD          | HeroDevs        |
| Nicolò Ribaudo   | NRO          | Igalia          |
| Anthony Bullard  | ABU          | ServiceNow      |
| Samina  Husain   | SHN          | Ecma            |
| Mikhail Barash   | MBH          | Univ. of Bergen |
| Istvan Sebestyen | IS           | Ecma            |

## Reality and spec differ on property key resolution timing for o[p] = f()

Presenter: Ross Kirsling (RKG)

- [issue](https://github.com/tc39/ecma262/issues/3295)
- [PR](https://github.com/tc39/ecma262/pull/3307)

RKG: Hello, everyone. It has been some time since I have presented a web reality bug, but I found another, and I will share it with all of you here.

RKG: So this one’s a fun one. It does not involve any recent features of any kind. It is a difference between reality and spec on the property key resolution timing for o[p] = f(). So specifically we have this test -- it’s actually a bit misleading. We have this test262 test, and it claims to check that the assignment operator evaluates its operands from left to right. Indeed, we would want that to be the case, but this test is not passed by any browser hosted engines. In specific, we see this. So arbitrary object o, p is an object with a `toString` method, it’s going to print out P, and f is just some arbitrary function that’s going to print F, and we see from JavaScriptCore, SpiderMonkey, and V8 that F is printed before P.

RKG: And it would not seem very good if we have jeopardized, you know, evaluation of subexpressions from left to right. In fact, this isn’t jeopardized because the issue isn’t order in which subexpressions are evaluated, the issue is the timing of the property key resolution. If we complicate this ever so slightly and make it so that the subscript is itself a function here, so we’ll print “eval LHS (left-hand-side) subscript” when we actually evaluate the subexpression there, and we’ll now print “eval RHS” from our function f and toString will say “resolve property key”. Now we get things in an order that kind of makes some sense. We see eval LHS subscript is the very first thing. Eval RHS and then finally resolve property key, and the reason for this is from the engine perspective, ToPropertyKey basically belongs to GetValue and PutValue.

RKG: But the spec expects that it will be performed as part of LHS evaluation, as part of actually looking at that o[p]. For comparison, if we turn this into compound assignment, not just plain old equals, but plus equals, we will see – actually, if we look at V8, we’ll see a very naive evaluation of this, where we first do LHS evaluation, then we have our get and we’ll resolve property key once, then we’ll evaluate the RHS, then we have the put, and if we’re naive about how we’re doing things, we’ll actually double resolve the property key. This is an engine bug—JSC just had this bug which I just fixed, SpiderMonkey had already addressed this, V8 will deal with it at some point—but the point of the matter is from an engine perspective, well, what we would do here is just perform ToPropertyKey up front so we can hand over a pre-resolved property key to our get value and put value operations. We actually also have to front RequireObjectCoercible, but basically, for compound assignment, reality and spec are in alignment because, thankfully, in that case, GetValue actually precedes RHS evaluation. This is not the case for basic assignment where there is no GetValue whatsoever.

RKG: So to summarize the issue, when we encounter o[p] = f(), effectively the spec sees put as a two-place operation where we first want to take our o and p and resolve them to the exact place that we’re going to put the thing, and then we’re going to also determine the value, and having fully resolved both of those pieces, we’ll hand it off to put. And that is not what browser-hosted engines do. They view put as a three place operation: we have our object, we have the subscript, and we have the resolved value to set—so we’ve resolved the RHS value, and then we’ll worry about putting o and p together later.

Neither of these are what I would call unintuitive.

RKG: I wanted to first check in this GitHub issue thread (https://github.com/tc39/ecma262/issues/3295), whether or not wanted to sort of “poke the web”, if you will, to see whether the web actually might be compatible with changing this, whether we would want to test whether this edge case would be hit. And so overall consensus from V8 and SpiderMonkey and I guess myself as a person who works on JSC was that we weren’t super keen on doing this, so I have a normative PR here, which I have conferred with the editor group on, to make sure that we’re doing things in a, you know, acceptable manner. It’s not a huge PR, but it was not necessarily as trivial as you’d want it to be in the sense that it requires that we change a bit of the definition of what a ReferenceRecord is in order to loosen this [[ReferencedName]]. [[ReferencedName]] would now be allowed to temporarily be an ECMAScript language value other than a string or symbol, in the case of a property reference for which ToPropertyKey has yet to be performed. So specifically, If we go to EvaluatePropertyAccessWithExpressionKey, we will no longer perform ToPropertyKey at that moment. We have replaced it with a note saying “in most cases, we’ll do it immediately after”. But instead, in places like get value and put value (there’s one or two other places too) we will basically resolve the property key just when it’s necessary, which will basically serve to align spec with reality.

RKG: So, yes, to summarize, I think we have alignment from implementers, as well as the editor group on this. I think the only possibility for pushback would be to demand that we actually confirm whether our not doing this would be web compatible, but I would like to request that we do this. So we’ll go to the queue.

USA: Yeah, first on the queue we have KG.

KG: Yeah, I’m in favor of making this change. I think that having the spec in alignment with reality is a good property, and we are not going to bring them into alignment by making a change in the other action. So this is a good change. Also thank you, RKG, for doing this work, because this an issue people have known about this for a long time, or, well, in some sense of known at any rate. It’s rediscovered at various times. So thanks for doing the work to actually make this change.

RKG: My pleasure.

USA: Next we have SYG on the queue.

SYG: The change looks good to me. Thanks for doing the work. Just to reiterate for other implementers in the room, the compound assignment in V8 is a specific V8 bug. There is no proposal to align the spec with what V8 currently does. At some point, we will fix it.

USA: Next we have DLM, who says that they support this, and then we have MM.

MM: Yeah, I support -- you did keep qualifying everything with browser-based engines. If Moddable is in the room, I don’t know if you are, I would like to hear if this change works with your engine or if you’re already compatible with it.

USA: Doesn’t sound like it.

MM: Okay, so in any case, I’ll let my +1 stand. I’m in favor of this.

USA: Thank you, MM. And that was it for the queue. With that,RKG, you had a number of statements of explicit support and nothing opposing this, so, yeah, you have consensus.

### Speaker's Summary of Key Points

- Timing of property key resolution for bracketed assignment will be updated to match V8/SM/JSC.
- Specifically, the type of [[ReferencedName]] in Referenced Records will be loosened so as to allow ToPropertyKey to happen late.

### Conclusion

- Normative PR has consensus to merge.

## Intl.MessageFormat status update

Presenter: Eemeli Aro (EAO)

- [proposal](https://github.com/tc39/proposal-intl-messageformat)
- [issue](https://github.com/tc39/proposal-intl-messageformat/issues/49)
- no slides

EAO: A lot of the context here is expressed in issue 49 in the Intl.MessageFormat proposal repo. This proposal is stuck. The brief version of this update is that at the last meeting, there was discussion of what we ended up with is a resolution for me to go to TG2 and get approval for removing the syntax parser, about which some concern was raised here. Then, without the syntax parser, I would be propose the proposal here, again, for Stage 2.

EAO: However, the feedback I got in TG2 ended up effectively indicating that some members of that group, in particular the Google internationalization group, had concerns about removing the syntax parser. There is some discussion of the details in the issue, though I’m not sure if they’re that relevant to discuss here, as they’re specifically internationalization concerns and concerns about what might happen if we were to go forward with the data model.

EAO: The overall result of the concerns raised earlier here and the concerns raised in TG2 is that this proposal needs syntax parsing in order to proceed at all, and syntax parsing, on that, the conclusion that we reached is the indented bit here: “To standardize the syntax of a DSL, it would be meaningful/persuasive to see around a dozen organizations of various sizes, including ones which were not involved in MF2 development, make significant use in production of MF2 syntax across their stack (engaging application developers, translators, infrastructure developers, …). This will likely be required for Stage 2.7. It remains to be defined whether an intermediate, lower amount of experience would be sufficient for Stage 2.”

EAO: So, yeah, overall, this means that the whole of this is currently stuck, and it might proceed at some point. The general sense of the localization push that TG2 has been doing with this is that now all of a sudden the expected next action is not inside the JavaScript standardization bodies, but across the wider industry of localization and JavaScript localization in particular. And that in this weird way, TC39 or the TG2 part of it, kind of outsourced the development to the Unicode CLDR where it’s producing a result that’s now entering tech preview, and now us as TG2 in particular, but TC39 widely, we’re not going to actually comment in any way whether MessageFormat 2.0 is any good, instead we’re going to wait to see if it gets industry adoption, and if it gets industry adoption, then it’s good and then we might consider it for further progress.

EAO: Some of the discussion in this issue in particular happening earlier today is potentially interesting where SFC mentioned that he at least has interest to work together with others in TC39 to craft a statement of what we would support advancing and things that need to happen to get there, and that developing this verbiage would be fruitful. That could be useful for us to do here. I don’t know where else that could be done. My own presumption had been that the statement of support for this would be a stage advancement to Stage 2, but that’s clearly not happening. So I’m just saying this thing is stuck. I’m interested in web localization, and clearly I need to go elsewhere than TC39 in order to do that. And once the web reality has adjusted itself to work around MessageFormat 2 or something else, because apparently we’re not sure about that one, then we might be able to standardize that in TC39. So that’s what I had. It would be very happy if there’s a queue. I’m going to need to stop the share in order to see TCQ, but that’s it for me.

CDA: We have a few items in the queue.

USA: Hi. EAO, thank you for all the work that you have done so far on this. Obviously you know, all the context that you gave explains exactly the situation. In my opinion, it was a great idea to do this in Unicode. What you mentioned it regarding entering tech preview, is if anything a great sort of result. It’s MessageFormat 2, which we have to realize came out this core idea for this proposal, will end up improving localization all over, including in native software. That’s just great. However, the proposal, which kind of predates MessageFormat 2 in itself is also important. I think the fact that we have Stage 1 means that the core motivation of this, which is that message formatting as a utility in the JavaScript in devel tools is needed. There’s a lot of applications for this. So I think that’s still very well motivated. It’s a shame that the, you know, exact proposal that you designed couldn’t sort of proceed the same way. But I think there are a few ways we can go about it, including sort of breaking up the parsing as well as the formatting into two different parts. But, yeah, there’s definitely directions that can be explored, and I think we should continue pursuing this Proposal.

EAO: Thought I’d mention that also related to this, one interesting fact is that roughly something like a third of web localization ends up ultimately depending on the intl-messageformat package, a polyfill for the 2013 version of this proposal. So there’s a lot of past precedent of effectively this API or something very, very much like this API being actively used. But that’s unfortunately besides the point here.

DE: Yeah, EAO, you’ve -- I agree with USA. You’ve done great work on this proposal over the years, along with many other people in this area and going and will Igalia and other companies. I also don’t share your sort of pessimism about the timeline. I don’t think several years is a reasonable requirement. We’re working towards a certain level of experience, so within Bloomberg, we’re working on end-to-end prototypes of using MessageFormat now that the syntax is stabilized. I’d encourage other companies to do the same, and I’m trying to get in touch with other companies to attempt these prototype deployments. Also within the ICU tech preview process, like, maybe in six months or if it takes longer, in 12 or 18 months, this could be stabilized in the within ICU4C or ICU4J., which I think would give a strong signal to TC39 that this syntax is stable. I can understand the concerns about removing the syntax, that it would make JSON the kind of de facto syntax, which would be somewhat unfortunate. Maybe not fatal. And I think from here, we should continue to develop ecosystem experience and continue this in committee. Remember, this -- this proposal has been, as EAO noted, been a goal of this committee for a very long time. From before we had Intl. You know, just before Intl was active in the language, before most of us were here. And it is a common application need. And the lack of a common syntax for this is a major kind of divergence and friction for translators, so it’s -- and for application developers. But especially translators. Because they all have to learn how to do the particular translations. But the lack of good linguistic knowledge being included in that template string, because everyone invents their own little template formats that aren’t so great, is a real problem, and we can contribute to the solution by bringing this into JavaScript, as we’ve long been working on doing. So, yeah, let’s continue developing this, and I do think even it would make sent to -- for the committee at some point to recognize, yeah, we want to eventually do this. We have a first draft that looks stable. That’s kind of the definition of Stage 2. Even before we’re 100% confident in the current syntax, Stage 2.7 of course needs to wait until we have that very, very strong confidence. But for Stage 2, I think we’re more counting on do we really expect this to eventually be part of the language? Do we have a good first draft. Which I think we already go, but with more ecosystem experience, we’ll continue to reinforce.

CDA: DLM

DLM: Thank you. Yeah, I agree with sentiments that USA and DE have expressed. I’m also optimistic about this proposal. I think there’s general agreement in the committee that this is solving a real problem and a problem that needs to be solved. To me, I don’t really see it as stuck. To be stuck means that there’s sort of irreconcilable differences in committee that would prevent it from advancing. I think this just needs some more time. And I would encourage people who are interested in this to continue to work on it. And, yes, I see no reason for this to be withdrawn or something like that. I think it remains a valid problem statement, and I’d like to express recognition for all of the work that EAO has put into this so far. Thank you.

SFC: Yeah, first, thanks, EAO, for the work that you have been putting into this. I’m -- I think that this proposal is really important for the web platform. And you know, to clarify the position that you alluded to earlier, you know, what my team feels is just that the -- that the full scope of the work that the Unicode working group has been doing is really important to include in the proposal. And, you know, that’s -- you can see the details on the issue of course, but, you know, we feel that the syntax is really a core part of the motivation of the Intl MessageFormat proposal. And I think that there’s going to be room in ways for us to look at avenues for advancing this. I think, you know, even in TC39, there’s still room. And I think there is room for us to figure out what would be the parameters for Stage 2 advancement of the proposal if it includes syntax. And I think that can be done within 2024. And, you know, I’m definitely optimistic that that is a possible avenue. You know, as I also alluded to in the other -- in the TG2 call, like, you know, there could be avenues elsewhere within the web platform that might be also appropriate. I think that those could also be pursued. So, like I definitely think that there’s room here. I think, you know, with time and, you know, time on the scale of quarters, not years, I think there’s definitely room for us to take it to a meaningful stage. And, you know, I’m -- I certainly hopeful that, you know, that your energy and the energy of others will continue to be invested in this proposal, because I share the optimism that DLM, USA and DE just expressed as well.

USA: Just a side note. I completely agree with what you said. There’s certainly ways to address both the concerns that have been raised while also keeping the syntax. I think within the internationalization groups, we have this strong understanding of, you know, the syntax being something that was developed out of the, you know, all the stakeholders coming together and working hard on figuring out what is the best for this space. So, yeah, I think in the next few months, we should spend some time to figure out a solution that works for everyone and can achieve, you know, the goal of adding MessageFormat with the syntax, but done in a way that agrees with the rest of the delegates.

JHD: I wanted to echo all of the optimisms that have been expressed, and I mean, I completely empathize with the frustration of having a proposal that feels stuck. But I think this happens to most proposals, especially at Stage 1, and this is just the normal way proposals work, you run into problems, and you have to resolve them, and sometimes it’s not clear-cut or unambiguous, how to do that. And you know, proposals sit at Stage 1 for a very long time. Promise.try got 2.7 this meeting and 2 last meeting and got 1 nine years earlier, and not all proposals at Stage 1 will advance either. So I hope that you feel motivated to continue to do it, and I want to see this advance, and I -- you know, I just wanted to empathize that this sucks for all of us and this is normal.

EAO: Yeah. So thank you for everything that everyone said here. A meta question I’ve been struggling with respect to this is from how I look at this stacking of MessageFormat stuff, there’s the MessageFormat 2 message syntax has been defined in Unicode, and then there’s the JavaScript API that we are defining here only in TC39. And, well, the JavaScript API of this has been effectively the same since 2013, and about, as I mentioned, one-third of web localization currently ends up using an API that looks really an awful lot like the one that’s being still currently processed except that is working with ICU MessageFormat 1 instead of MessageFormat 2 as being proposed here. So this is confusing to me as a delegate to get this sort of mixed messaging of us needing to have all parts of this vertical stack -- including the MessageFormat 2 syntax -- being effectively finalized before any advancement can be considered. Especially as even during this meeting, we are considering -- we had the Records & Tuples discussion yesterday where clearly we have a Stage 2 proposal where we’re kind of reimagining what that could be. And we’ve got extractors and pattern matching coming up, and there, if I look at the progress and discussions ongoing this week in those repositories, there’s a lot going on and could still change with these syntaxes that we are proposing. But specifically, then, those we can maybe consider for Stage 2? But then Intl.MessageFormat is somehow completely out of the picture. So the weird thing here to me is that I don’t think in this whole equation we as TC39 are expressing any opinion on MessageFormat 2, the syntax. We’re saying that it needs to be adopted by the industry, and if the industry adopts it, then we’re good with that. Whereas, this work was originally started because we asked for it, effectively. So I guess we’re okay with that, but it does mean that as my interest going forward is to take this discussion to various actors in the industry, localization library developers, others, I don’t know how those discussions are going to go. And whether those parties are going to be following exactly the Unicode MessageFormat 2 syntax or whether these very wide range of actors are going to feel like actually we could, you know, do a slightly different thing here, and that might be better for us. This is going to be interesting to see, and I very much welcome hearing next from USA as I really would like some help with this, because I’m not going to be doing much with this proposal for a while, because I don’t think there’s much to be done here. The work needs to be done elsewhere.

USA: Yeah. I completely understand what you just said, EAO. I mean, it’s a shame that all of that happened. I do feel like Stage 2 is probably the wrong milestone as well, to sort of being fixated on this particular issue, because you know, it kind of doesn’t go around the understanding of Stage 2, at least for me. In the case that there’s actually very little -- sorry, at the specification level that -- yeah, anyway, however, I do feel, as I said, that there is ways out, that we can diplomatically resolve this, and I think that, you know, I’d be happy to take on this responsibility if you are okay with it. So, yeah, I’d like to take on this proposal if you step down as champion.

EAO: Would you also be willing to join me as a fellow champion, if I don’t step down?

USA: Absolutely. That would be my preferred choice.

EAO: Let’s talk about this offline.

USA: Yes.

DE: So I’m glad that USA is volunteering, and if EAO stays involved in this, then that’s great. But also, we have to consider kind of the psychic effects that the committee dynamics have on TC39 members. We’re all working hard together to make technical progress on this project that we share, and we all care a lot about. And it can be really difficult within that to kind of bring that together with coordination with other concerns and signals that feel somewhat negative. I’ve definitely felt a similar way to EAO in the past, sort of burnt out about these very contradictory signals from different committee members, where I’m supposed to somehow navigate all of that as the proposal champion. Of course, none of this means that we should reduce the rigor that we’re applying when figure out what should go into JavaScript. But this a repeated pattern in committee, and we have to figure out what we can do about our dynamics to reduce this negative effects on our -- on our colleagues.

SFC: Yeah, I’ll just also put on record that we discussed this a little bit, too, and, like, some -- either myself or someone else from my team may also be happy to join as a co-champion later in the year. Right now we’re putting our efforts into the Unicode side of the development. But once that wraps up, putting the energy into the -- you know, JavaScript/web platform side is definitely something we think is going to be important to do.

CDA: There is nothing further on the queue. Okay, would you like to dictate a summary for the notes at this time or you can also do that asynchronously, but it would be appreciated either way.

EAO: The Intl.message format proposal has reached a bit of an impasse, and next steps here will need to include industry signals of adoption of MessageFormat 2. This may take a while. USA is willing to step up as a champion or co-champion of the proposal.

DE: Yeah, I disagree with the conclusion saying that the proposal reached an impasse. I think we heard basically all the commenters saying that this proposal is good to continue developing, that we have concrete steps to continue developing it. It’s okay if Eemeli wants to take a break from championing it, but I think it’s kind a disservice to the work that went into this proposal to say that it’s at an impasse, when we have actually a ton of work ahead of us that we are doing now already and be continuing to do. It’s just not a statement of fact to say that it’s at an impasse.

EAO: Sure.

DE: So the conclusion should be something that we’re adopting as a committee. It’s not only the thing that the champion says.

CDA: Right.

SFC: Yeah, I agree with what Dan said, and as well as the other half of that statement. I feel that there’s room to advance this proposal at least to Stage 2. You know, even given everything that’s already been said at the committee. You know, and then in terms of, you know, Stage 2.7, like, I think, you know, that’s definitely something we have to figure out exactly the parameters, but, you know, I think the proposal still has room to advance, even within TC39, without I think your statement of, you know, large, widespread industry adoption. I think that that’s -- the statement that you presented earlier said that there were some delegates who said that’s a requirement for Stage 2.7, which is likely the case. But I think for Stage 2, there’s even room within this committee.

CDA: DLM

DLM: I agree with SFC and DE. I don’t think we should say there’s an impasse. I think we should recognize that this going to take more time.

CDA: DE, we have like two minutes.

DE: Okay, I’ll just -- just about the statement. Widespread industry adoption, that was not the requirement that we agreed on last time. We agreed on, you know, widespread, some experience, but not that any -- not that every major enterprise already adopted it for all of its internationalization. We went through some iteration last meeting on making it not a time-based thing and not an it’s completely used by everyone in the world already. And we shouldn’t, you know, enforce a stronger requirement in our conclusion for today.

SFC: Yeah, I agree with that, and I think it’s important that we choose the right words. I don’t know exactly what those correct words are. I’ve heard a few different versions of them stated today regarding the industry validation, adoption, however we like to say it, so I think it would be a good use -- a good thing to do at some point to get exactly what the right words are and exactly what those words mean.

CDA: Okay. I put myself next on the queue, which is just I think that this particular part of the conversation underscores the need for making sure there’s clarity of understanding from everyone involved, everyone’s on the same page about the current state of affairs, as well as next steps. So maybe Eemeli along with the co-champions and others interested can maybe get the conclusion for the notes as a first step to be something we can all agree on.

DE: One last note. I’d like the conclusion to include encouragement to get in touch with the proposal champions with people working on message format, to do prototyping at -- in your application and your organization, because we’re really looking for people who can do this work with us, that could help work out any last kinks. Thanks.

EAO: Just thought I’d mention that if you want to play around with this, the package messageformat@next on npm is a fully functioning polyfill for this, and it also includes a whole bunch of utilities for doing stuff with the format.

### Speaker's Summary of Key Points

- The speaker listed out the different roadblocks in terms of realizing the initial goals of the proposal. While there was some hesitation for the inclusion of the newly designed syntax, there were concerns against shipping the proposal without a standard syntax.
- Many committee members expressed support for the goals of the proposal again, reasserting that they are in favor of it.
- Additional helpful context was shared and the presented ended with enthusiasm regarding the future of this proposal.

### Conclusion

- The proposal has hit some blockers during its development.
- There is, however, still a great deal of positive sentiment in the committee regarding the proposal’s stated goals (adding a message formatting mechanism to ECMAScript).
- USA joined the proposal as co-champion in order to assist EAO.
- There will be explorations by the champions regarding the possibility of exposing MF2 elsewhere on the web.
- The champions will also work on improving adoption and gain experience for the syntax.

## Discard Bindings for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-discard-binding)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkqpoWw0poDW3dawBQg?e=O3UP1c)

RBN: So good morning. For the next few minutes, I’ll be talking about discard bindings proposal based on where we stand with the proposal right now and the potential for where this is going to go in the future. So to start, just a brief overview. The concept of a “discard”: it’s a “non-named placeholder for a variable binding”. It allows you to align unnecessary variable names in various contexts such as `using` and `await using` declarations, function/method parameters, array structure patterns, extractor patterns and pattern matching. We currently are proposing the use of the void keyword in place of a binding identifier, and the idea of discards in general has prior art across numerous languages, C C++, C#, Python, rust, and Go, C and C++ allow you to align parameter names, for example, C#, Python, rust and go all use the underscore and now added to that list is java is adopting underscore with the mechanism which it uses for establishing discards.

RBN: So, the motivations of the proposal where things stand, one of the reasons we want to have discards is that there are often a need for side effects from declarations without the actual variable binding. So, again, parameters that you might not want to necessarily name, that you’re not going to use when you’re overloading a method or sort of overriding a method or passing a function as callback. Variable bindings that you need for their effect, reading a property or skipping a value in an array structuring or in the case of using declarations, a binding that establishes a resource that exists within this lifetime a bound to a block scope, but you don’t intend to use the resource value after the fact. This is the case for things like locks in a shared memory environment. But also could be used for things like log and tracing patterns in a function, et cetera.

RBN: There are some existing single-purpose solutions that already exist within JavaScript, so elision, in array structuring and array patterns, bindingless catch, but there’s no general-purpose solution that can work in other location. Empty object patterns just like currently curly (?) for the declaration pattern are insufficient because they throw null and undefined, where you might want to have null and undefined value and specifically in `using` that is a specific capability you can have a null or undefined resource to indicate a resource that is conditionally bound. In addition, `using` declarations do not allow binding patterns for various reasons that we’ve discussed in prior plenary sessions. So curly curly is not a viable option. And simple vision not efficient for many cases. Using declarations, that’s already valid syntax. Maybe it’s a potential option for object literal or object destructuring peat earns, but it can look confusing and possibly be conflated with shorthand assignments or shorthand binding patterns, so perhaps it’s not the best solution the consider.

RBN: So this is why we’re look for something that’s an explicit syntax to indicate a discard. So there’s some updates to this proposal that we've been discussing. I think most of these represented in the February plenary as well, but we’ve been further discussing this. So discards would be allowed in var and not at the top level. So it is particularly useful to be able to use discards in, say, an object destructuring pattern because you can skip over properties you don’t want and, sorry, this doesn’t show this, but then spread the rest into another object, so you can actually pick out properties that you do not want to carry forward in that object, which is very valuable. But on in the case of something like constant void equals object, it’s not really all that useful to do this. You could have just executed whether the operation occurred beforehand. One place where that is again useful is something using declarations that has some type of tied behavior it to. So discards in array literal and, like, expressions are not supported. We’ve decided to leave it as -- leave it alone so you would still use illusion for those cases and there’s a clarifying question from SYG. Yes, top level in this case means outside of a pattern. So you would not be able to use it in place of a binding identifier that’s at the top level of var letter const and used as a bind more an array pattern. It’s not allowed at the top level, but only with -- somewhere within a binding or assignment pattern

RBN: We’ve also discarded other less-motivated locations for discard such as catch bindings, we already have bindingless catch. Import and export, because you can just ally those imports and exports. There’s generally no semantic meaning behavior behind not using the imports if you’re not referencing them. There’s no getters that trigger, no side effects you need to care about there. Class and function names aren’t necessary because you can align those names with their expressions or default exports. There’s no real need to insert anything there, and field names don’t make sense because you have constructors and static blocks, so you have places to evaluate things that do not need a binding in those cases.

RBN: So brief summary of the current state. For `using` and `await using`, we want to be able to say using void equals or await using void equals as a way to register the resource that is being initialized without actually introducing a binding. This was a capability that was introduced and was part of the proposal in various forms since its inception and was removed to reach more of an MVP version of the proposal and always been considered a high priority capability to add back in. We postpone that buzz we want to look at the broader capability of discards across the Lang. In addition to that, we talked about binding patterns, being able to exclude properties you don’t want in a spread or rest assignment to another object as a use case.

Another use case is explicitly labelling things that illusions as trailing illusions especially you have the issue where you could be possibly confusing the number of commas you might see, just also currently supports them as well many assignment patterns. Parameters, so void, A to ignore a parameter in the leading parameters in a callback, in extractors to be able to skip over leading destructuring elements in the pattern, and in general, pattern matching also needs a mechanism to have an irrefutable discard, so you can say things like “X must exist, but I don’t care about its value”. And, again, in pattern matching, most languages that have pattern matching have some mechanism of discards that does this as well.

RBN: So this is also that we’ve talked about before, one thing that we’ve been recently talking about in Matrix over the past two months or so since the February plenary has been the potential for kind of aligning with pretty much every other language that uses -- that has some mechanism of discards to use underscore, and we’ve been dis(k) a way that that could possibly work that isn’t -- that in most cases would not be a conflict with the concerns around repurposing and identify more of these cases. So for one, again, as I mentioned before, java recently added discards that use underscore, the number of languages that use this is growing, and having a consistency with this helps when translating from one language to another certain capability that are equivalent, therefore, we can -- if someone is writing C# and writing Java in JavaScript, or skulls (?) in JavaScript, etc, that they can take some of that knowledge with them as they go from language to language. And there is consistency when it comes to documentation. Some places that we can already use underscore repeatedly include in variable declarations, variables have no requirement that a declaration of that name doesn’t already exist, unless it’s also a lexical declaration. We’ll get to those in a moment. And also function argument lists or function parameters in non-strict mode are allowed to be duplicated. Where it is not currently legal is when you introduce lexical declarations or strict mode parameters. Currently today, if you were to write a function f3() and had a very and (?) some block scoped or lexical declaration that both has underscore, that would be a syntactic error. That we would be proposing if we wanted to move to underscore would be using an underscore in multiple block level declarations in the same lexical scope would result in a reference to that in the -- in that scope or any nested scope to be a syntax error. Now, if you had another block that contained its own swing declaration for underscore as a lexical declaration or a variable declaration, so a function declaration scope for variables or any block scope centre the lex cam declaration, could potentially redeclare underscore as having a specific meaning and get out of that syntax error case. But this basically would take something that is already a syntax error today and make it legal in the case where you don’t reference the underscore. And then it would still be a syntax error if you do reference the underscore, because we don’t want you to reference this value. It’s not intended to be used. We wouldn’t break the case of the var underscore A, comma B like the example on the left, but we could support cases that currently have a syntax error today.

RBN: The same could be for function F34, for example, where I could have multiple declaration are lexical declaration using underscore and using underscore would be a syntax error. As well, repeating underscore in strict functions would have the same mechanism where within that scope, unless redeclared there a nested scope, underscore would then be considered illegal. There still is the potential this is considered to be a problem if someone is importing, say, underscore lodash as the name space underscore. The case that we’re -- that we’re presenting here is that were you to use underscore as a discard, that would already be a syntax error in these cases. So you would not be able to use underscore as a discard anyways. You can continue to use _foo, et cetera, to -- for discards when you need to use the underscore variable without breaking in those case. There would be no code that runs today, that is Lyle today that would have a change to that effect were we to add these capabilities. It would only be if you introduced a new underscore variable or a second underscore declaration inside of that block that would affect how underscore works elsewhere. And, again, that is -- would be an intentional use of a discard, so you’re essentially opting into the discard behavior when you do that. So that has some benefits.

RBN: One thing is that is not -- would not be viable if we are to go with this is you would not be able to use underscore in an assignment pattern. That already has meaningful semantics as it’s an assignment. We would not have discard in assignment patterns, with you that is actually something I consider to be a possibly acceptable concern, that the most important case is declaration bindings, since those can’t be repeated, so that’s what we’re mostly trying to focus on. Not having them in assignment patterns is unfortunate, but not terrible. You can declare any variable you want to be the -- to be the discard in those cases, and write an assignment that overwrites that value repeatedly if that’s something you needed.

I’d like to open the queue to discuss. I will also say that there is some concern about using void as a keyword or pretty much any keyword in some of the grammars. This was brought up by WH on the discards issue tracker over the past 24 hours or so. That using void introduce some complexities with cover grammars that underscore would not have because it’s just an identifier. So all all the places you would want to use it syntactically are valid cases and there’s very little spec text that needs to be written for the gram for this work. All of this would be how we handle the AOs for how bindings are established and initialized.

USA: We can go to the queue.

JHD: I've mentioned this for other proposals. For this proposal, Tennent's Correspondence Principle used to come up in committee a lot during ES6’s design, so frequently that it appeared on TC39 Bingo. Essentially, my understanding is that when you wrap code in a structure, it shouldn’t change its meaning. I think, strictly interpreted, JavaScript violates it in a number of places, but that doesn’t mean it’s still not a good language design principle to follow. The fact that no current code will change its semantic meaning is good, but that’s sort of a precondition, because if existing code will change, we can’t make the change. But if you refactor code, or if you have code in a function and then you suddenly alter its signature to use this functionality, your code could break. And that to me is just not going to be worth it for any identifier. I think it’s unfortunate so many languages for which it is an identifier are choosing to use an identifier. But just because other people are making a mistake doesn’t mean we have to follow the lemmings over the cliff.

RBN: There is also the possibility that we could expand it to be any identifier repeated in a lexical declaration. If there’s a conflict with the identifier to use double underscore 2 or 3 times in lexical declarations to have the same effect it doesn’t have to be underscore. It has the valueOf being simple. It aligns with many places in the ecosystem. So it’s – it’s fairly well established that that is what most languages are used for this. So it’s fairly recognizable in those cases. Yes. It’s been said that it doesn’t really – break legal code. So –

JHD: Sure. We wouldn't be discussing if it did

RBN: Yes. It does have the caveat that if you were using underscore as reference to something and you declared underscore as something else, it would break. I am using underscore as a block. In that block. So I am not – it’s not breaking referring to something on the outside. If I do that just once, I am breaking something on the outside. So you’re already making an intentional change to use underscore as a discard when you do this. And it suffers the same issue that using any variable name in any declaration would have with shadowing and scoping that you have with any variable. It doesn’t break any of the semantic and variance we already have to use as a discard and it’s especially more valuable when you expand to any identifiers, that’s duplicated in a lexical declaration

JHD: The idea of allowing flexibility with the selection of the discarded identifier is interesting. But like I would expect a leading underscore even if there’s something after it. TypeScripts treats if you put an underscore end, I believe?

RBN: If you have the appropriate flag TypeScript to error object unused declaration it error on anything that does not have a leading underscore, I declare this, but not using it is the de facto standard. But that's TypeScript spec. You have to plaster ES lint, onto –

JHD: Right

RBN: Declare the unused variables unless you can – override the default for that say underscore is allowed or have the rule set to allow underscore things only. So there’s a general practice to use underscore named things in most languages. But it introduces unnecessary bindings. It requires like the cognitive overhead to use to make sure it won’t conflict with something else. Using underscore or void just kind of takes most of that complexity out of the equation and makes it easier to keep writing code, as often said, 3 things – hard things to do in programming and one of them is naming things.

MM: Okay. I’m sorry. If you’re still talking, sorry. I didn’t mean to interrupt

MM: So I am strongly in favor of void. I am strongly against underbar, although the cover grammar issue you said WH said is new to me. I am glad to see WH on the queue. Please explain that. And the significance of it. But, these underbar rules are sufficiently complicated with enough edges that I just think that – even if we decide to – for whatever reason that we can’t have void, I would still say no to underbar even though I want the feature because these scoping rules around underbar are too complicated and it’s easy enough to use the existing linting support for underbar prefix parameters. So that’s it.

RBN: So I will say it again. The linting support for underbar prefix parameters doesn’t mean to I – I am not concerned about the reference and saying underscore equal A, using underscore equal B that is syntax error. That raises an error. Because I can’t have duplications. You can’t – it’s already illegal to do that. We are doing the same complicated things that we would be doing that makes this illegal.

MM: I understand. I still am strongly against underscore. I think it’s too complicated.

JRL: I am the opposite of MM, I guess. I am absolutely against any sort of ASCII keyword. Anything not underbar, underscore. The point about discard binding is to mark that I know I am not using this value. It’s purposeful, but it doesn’t have any sort of weight when you are scanning this. It should look slightly different, but disappear. Underscore is the only thing that does it well. Maybe another ASCII punctuator could do this, but nothing that has the same precedent as underscore. The complexity around scoping is just because we have chosen arbitrary rules here in this presentation. We can make it just so you can redeclare underscore and nothing else changes about anything else in the syntax. It seems such a better solution to me.

RBN: Yeah. I will say that using an ASCII punctuator is problematic. For one, we are short on ASCII punctuators we can use. When possible to use keywords be they existing reserve keywords to reserve the limited set of ASCII punctuators we have for this case. And the other problem is that most of the ASCII punctuators consider using other uses that make this not viable. You could not use a plus or - or asterisk because it turns into a compound assignment and that doesn’t work. You are left with a small subset of symbols that have other potential uses that are more idiomatic (?) of what a discard – other operations versus a discard. In my opinion, the two things that mean discard are either underscore because that’s the accepted way of representing a discard in most of the languages. Or void because that has the same semantic meaning of discarding something, discard a value that is a result. Such as in void expression. Void and underscore work. It doesn't, it indicates something more like decorators might be employed. Hash, that’s generally used for things like private names. So it really doesn’t feel like those are valuable use cases. So it becomes more complicated to pick those. I think having some ASCII word is the best approach, whether that is underscore allowing any variable that is [dup]ly (?) indicated more than ones to be legal rather than illegal. Or using something like void.

USA: Moving on, there is a clarifying question with DRR, but before we do, I would like to remind you that we have a huge queue. And like 6 minutes.

DRR: I wanted to say the last point, because MM what are the complexity concerns you have? Are they just because of some of the rules that have been mentioned here? Could they be fixed in some way or addressed?

MM: It’s the rules that are mentioned here and the fact that ASCII is already a legal variable name, it means that I don’t think that there’s any way forward with underbar that doesn’t create complexities in the wrong place. `void`, I wish that we would have been able – adopted underbar early in the days of JavaScript for this purpose in which case there’s no conflict. But we didn’t. And I think starting from where we are, it’s not worth the complexity. The – I share some of JRL’s aesthetics, which looks like an ASCII identifier void, as a key word it’s often seen, people who aren’t familiar with the language might look at it and not know it’s a keyword. When reading code. But even then, if it looks like a – if they mistake it for a variable, it certainly will be the case but could never appear in the position of a use occurrence of a variable. So it does guarantee that even if you thought it was a variable, there will be no use occurrence. So that’s not terribly strong for the confusion issue. But I find void just very pleasing.

DRR: Okay. I am good at speaking now.

WH: So agree with JRL for the same reasons that he stated. I would also like to present a more serious issue, in that the currently proposed grammar breaks existing programs by introducing a version of `void` which doesn’t take a parameter as a cover grammar. I found some consequences of that. The first one I found was `await void x`, which has an existing behavior which was broken. That was fixed. But there are more serious ones like `void` followed by a `\` which now can get interpreted as either a division or as a regular expression. `void + x` gets interpreted as an addition of `void` and `x`. So there are significant problems with the way that the syntax using `void` is structured. There may be solutions to this but they would require rethinking how the whole thing is done. And I would rather use something like underscore instead.

RBN: So also, speak to that point, there are two things that I am considered here: one is that I think there is definitely a – I believe it’s feasible to have void in the way that it’s been defined with differences in cover grammar, to make sure that the spec and behavior matching the intentions. Things restricted can be restricted for the optional case. Things we can look at this. The other thing too, as I was saying with underscore, we lose assignment patterns. All of the complexities come from the assignment pattern case as far as I am aware. So if we end up dropping assignment patterns, all of those concerns I think disappear. You can correct me if I am wrong. I don’t think the concerns come up anywhere in binding patterns or parameter names.

WH: Okay. That’s a bit too abstract for me to give you an informed answer. My point is, I think we agree that the current grammar breaks existing things. We agree that it is unintentional and I think that should be fixed before we go to Stage 2.

RBN: You say we should address this before we go to Stage 2. Looking at the Stage 2 requirements, does this not seem like it might be an editorial issue to address or more like a complete inability for this proposal to ever result that needs changing?

WH: That’s for issues in which it’s clear where the bug is and what the fix might be. Fixing this requires significant grammar restructuring. These are not simple editorial changes.

WH: I am uncomfortable with skipping the review before going to Stage 2 without knowing what the solution the editors come up with will be. The whole point of advancing to a stage is that people other than editors can review the spec.

MM: So I am glad to have heard that from Waldemar. I now understand what the problem is for void, and let me say, I am not going to – I am not going to close off in realtime the underbar. This was actually the first I have heard of underbar being raised as a realistic proposal. I am open to continuing discussing this and probably a set of underbar rules I would accept. I don’t know.

USA: All right. There are a couple of other topics, Ron. On the queue, but you’re on time. What would you like to do?

RBN: Okay. This underscore question is something we need to continue discussing. I appreciate it if folks can file feedback and continue discussion on GitHub. I plan to ask for Stage 2, but the one thing I would consider to be a Stage 2 blocker would have been if we needed the void to underscore which requires heavy spec writing. We have done something like that in stage 2 before, but it’s viable to consider. I was looking for Stage 2. There was heavy feedback that went to Stage 2 in the last meeting. So it was an indicator it’s worth the possible pursuit of this. But I definitely can hold off on Stage 2 as we continue having this discussion.

USA: Would you like us to capture the queue?

RBN: Probably useful. I don’t know if we have a chance to discuss this, but posted somewhere to refer to, in other discussions, I think that would be valuable.

USA: Sure. Let’s capture the queue and we can come back to this later. Maybe, if we have time in this plenary, or later, if you so prefer.

RBN: I will point out this slide (last slide) if you need reference. This is the link for the proposal repository and the current spec text as part of those discussions.

USA: Okay. Great. Thank you, RBN.

### Speaker's Summary of Key Points

- Proposal specification text written for `void` syntax
- Some interest in pursuing `_` over `void`
- WH noted an issue with the cover grammars for `void` and `await using` that must be addressed

### Conclusion

- Did not advance due to cover grammar concerns.
- Further discussion necessary regarding `_` vs `void`.

## Extractors for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-extractors)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkqpinLRBZZwud0rM9w?e=s7hKoI)

RBN: So again, good morning, talking about extractors. Potential for Stage 2

So the motivation for extractors is that currently, I have had some questions and comments about changing the motivating statement here. It says there’s no mechanism for executing user handler logic. You can execute some if you have a getter, for example. That will run user code or if you have a computer property name, evaluate user code there. Those don’t affect the structuring process. It’s a mechanism to have user-defined code have an effect on the process itself. Rather than side effects that occur in the structuring.

RBN: The pattern-matching process, user-defined logic while matching. This exists both in the pattern matching world and in the destructuring world. There are similarities with this proposal to other languages. Scala has extractor objects which is when I proposed this, I started with, we had a tour of Scala’s support for this capability. (?) has some syntax and maybe not all the same mechanisms, which in a potential future enum proposal, the idea is to align some of the design aligns with the Rust-style syntax but using justifies it depends on something like extractors to have the same type of behavior. F# has something similar. C# has type testing and deconstruction. As one – (?) and destructuring user-defined logic. OCaml and Swift.

RBN: This is designed to look as the opposite to function application or construction. So where function application construction takes a series of arguments to produce a single result, extractor a single subject, and produces a series of results. Dual or opposite behavior in these cases.

RBN: One of the capabilities of extractors is that they allow you to have dotted references starting with some reference to an identifier that is in scope, identifier reference. That is then evaluated, converted or checked to that is an object that has a symbol method. And that is what is evaluated to produce a result that is either in the case of a destructuring extractor, either array or iterator. Or it is a false eval indicating something failed or an incapable matching case (?) there’s additional opposites considered – that are discussed in the pattern matching proposal. Things like nested destructuring. So you can use an extractor who has maybe a single argument or multiple arguments to further deconstructed in other values. And it can itself be nested within another pattern so that you can pull things apart and do data transformations and validations within the destructuring pattern, which is the key bit that is not really feasible to do for binding patterns and parameters today in a consistent way.

So again this also shows examples of using these within parameters.

RBN: So: brief history. September 2022, this was proposed for option at Stage 1 and included array extractors and object extractors. Array extractors used the parenthesized syntax, because the bracket wouldn’t work in the assignment pattern type case. So we used parentheses to ? big wait. (?) This used a curly brace, and is more of an object pattern approach within it. We only saw advancement at that time for extractors in bind patterns. The reason for that is the other side is being pursued as part of the pattern matching. These proposals are linked as far as cross-cutting concerns. All the design considerations for pattern matching apply for extractors but since pattern matching doesn’t talk about the deconstructing, binding assignment patterns, it’s not a good fit for that proposal itself.

RBN: It was felt better to have this as a separate or on its own proposal. In 2023 there were a number of discussions with the champions, we agreed to incorporate array extractors to pattern matching proposal. Object extractors were removed. To the possibility of them eating up too much syntax space. No line break curly type things that we might need to extend the language in other places, and in February 2024 we provided an update on the proposal that showed the extractors, object extractors portion was officially dropped. And we discussed the – that further consideration needs to be made with iterator extractor performance. The history… We want this part of the restructuring process. Transformation and normalization during restructuring which isn’t possible in JavaScript without very opaque, complex syntax that only works inside an assignment pattern. Or requires moving things into or breaking things like into multiple statements within a FunctionBody which kind of defeats the purpose of something that is concise and clean. The idea being to make these things very small and easy to use both in pattern matching case and have the same capability also in the destructuring case.

RBN: As a result, we chose to leverage the design that is employed by the extractor and rest variable patterns as prior art and guiding direction for how to build its implementation. So this is again based on this and has a cross-cutting concern on how those features are handled.

RBN: This is designed to provide parity. One of the key requirements in the pattern matching side was that for extractors to be a value addition, they must exist on the destructuring side. It’s essentially required that they exist. I don’t know how flexible it is, but there’s value in them existing in both places. That the destructuring side is more the irrefutable match. It must be this thing, versus pattern matching, where there’s a branching condition, whether something matches or doesn’t. In the destructuring case, they must exist, have a value. Like a regular just point to something with the symbol iterator. These must exist when those things run.

RBN: Another capability or benefit of extractors is they provide the bases for potential future with enums. We discussed an enum proposal that was not adopted. I plan to bring this back because I have additional discussions and deeper into the benefits that can be gained over how engines normally interpret regular JSON objects or regular JS objects. More expressions happening before they bring it back to committee. It’s an interesting direction that we could take. Enums and possibly a future proposal. Some are looking at this and a future what to do if we had that capability. Even without this, it’s possible to indicate some of the semantics without the benefits of using regular classes.

RBN: So those benefits exist even without that. As far as the proposal, it’s two parts. Extractor member members have a dotted name. This is now more aligned with how custom matchers work. You can reference some use element access as part of it. Reference MetaProperties like new.target or import.meta. The idea is the left side of the extractor is someIdentifier reference or MemberExpression that evaluates to a thing that we can then use to indicate this is the – how the customizations will be applied to the process.

The extractor MemberExpression is again used to reference the matcher based on whatever the scoping rules are, if you are using, this referencing this, super, et cetera.

RBN: In binding patterns extractor performs an array on a successful match and denoted by parentheses. This is more the – it’s better explained in the assignment pattern discussion which comes next. But some examples include being able to have a parser that can parse input and three outputs. This is the example that would come out of, say, Scala. The Scala tour that shows how extractors works essentially has this example in it. It’s designed to parallel destructuring patterns where they are placed, how they can be nested, and they’re designed to mirror the application side of things. So array destructuring pattern = array has a similar look and feel. As a result, the syntax for extractors has a similar feel to the application side of things. You can say, list AB and a list of 12 or a new list of 12, `option.sum` is an extractor of value from `option.sum` of 1, would pull valueOf 1 out and put it into the variable value. The dual syntax, so it’s recognizable. It’s not some arbitrary different syntax you have to learn. And the feel as a result is idiomatic within the JavaScript syntactically.

RBN: In assignment patterns, we have discussed how a – if to use a bracket, instead of parentheses in the `option.sum` on the bottom here that would actually be legal JavaScript and considered an access expression. An assignment is not what we want. We have to get rid of the syntax using parentheses. And that matches the duality versus the extraction side. As far as custom matchers, the actual example culled from Scala’s code tour. It shows how in Scala this is an unapplied method in the case of the pattern matching proposal this is a single custom matcher. It’s doing the same thing. Here I am executing this result and pulling the value which matches the first element in the result. Null is a value. If it doesn’t match it will fail. The array itself can be used to pick apart the elements that would be part of this. So you can pull out a custom ID. To extract the value.

RBN: A custom matcher receives 3 arguments. The first argument is consistent across both pattern matching and extractors. It’s a single input value. They are essentially a unary function, but have additional functions passed in. The second argument is hint. Pattern matching can say, for example, X is point. And that use the custom matcher. In this case, syntax is not doing further destruct, I don’t need a result. I can use the hint in that case, Boolean that says, I don’t need an array result. I can skip the extra work that can’t be used in the binding assignment patterns. You can’t const ID = whatever because that’s legal JavaScript

RBN: There is the possibility for the match to be refutable. If it doesn’t work, it moves on to the next item in the list. In the case of a list pattern, the restructuring can only happen if it succeeds. This case, I must destructure. Since I must always do this, it's a list.

RBN: The third option, receiver, is one that is still kind of up for debate in the champions group. I don’t particularly agree with its conclusion, but included for the sake of completeness. With the receiver is that if – I have a separate slide for that.

RBN: The rationale for the receiver argument is that how JavaScript normally works is that once I have something like – an example of the use of this. I don’t. If you were to say something like, I will go to ID extractor. You said it’s a foo.ID (?) extractor. When we get to the point of calling custom matcher this value is whatever foo.ID extractor was. This valueOf foo that you might have seen if you consider this to be a function or considered it as a function, would be lost. Instead, the receiver is something that gets passed by taking the receiver it would have had, foot.ID extractor says, in case you need to reference something as part of the state, this is an example here where you might have a family of things that you want to validate. Such validation is dependent on the state in the family. I need to reference it. This uses the instance. Again as it shows at the top, it preserves the X about as this in X.Y is Z. Generally that’s not necessary for most custom matchers, because they are designed to operate on a class, but there might be corner cases where it’s necessary. So we have considered it as part of the proposal as it stands. I do think there’s other options that can be pursued if we don’t have this, such as having string like the custom matcher V8 getter that binds through the instance that you care about. And the receiver isn’t necessary. There’s overhead with that. This is something we are debating, but including for consistency, but something we may decide is something we may not need and cutting that capability.

RBN: To continue. One thing that came up in the February plenary was the performance of extractors. There is a concern that since extractors also use a structuring, they have the performance concerns that currently, and array destructuring the prototype. It’s fast in all assignment implementations I have seen. Things like escape analysis, in general accessing non-named properties is faster than the numerous steps that are part of the prototype. One option that we might want to pursue is having implementations look at the speed. It’s something that would benefit the entire ecosystem and everyone using – extractors, but benefit using react used state. We did some very rudimentary benchmarking, where the left side is array destructures versus saying `{ 0: value, 1: setValue } = useState()`. And found that it tends to be 30% faster than array destructuring. If we can improve the performance for those cases when we know it’s an array and can skip over using the iterator, when it would not be observable to the user, that benefits the entire ecosystem. Otherwise, return array returns an array as if an object under the hood. If implementations don’t make those optimization on arrays themselves, one way we considered moving this proposal forward is to continue using iterators as part of the proposal until such time as we can determine whether that optimization is feasible. If it’s not, we use array return values alternately, we chose to only array return values for now and then in the future, maybe that can be updated to support iterators, various thinking on there. I am choosing a route that raises the – that raises the tide for everyone, rather than extractors, but if we move forward with extractors there’s the potential faster and pulling out the properties. This is more of a Stage 2 concern. I think the way we have is the right solution. And I think that the array iterator capabilities or improving array performance is something that engines will hopefully want to do and I am working on like putting together, convincing rationale to talk to engines about improving the performance here. So that this doesn’t become a blocking concern or doesn’t require a change to that behavior.

RBN: So there were some other alternatives considered and we discussed, even in the plenary. C# destructure, have out parameters. It doesn’t allow for the underscoring argument. You have to use discards. In the context of destructuring, it’s a better fit for a typed language, Python’s pattern matching, use a match argument. Property names. It can get away with this. Python doesn’t evaluate user code but Python’s properties are not private. There’s no hard privacy in Python. As a result, you can access those things. One of the values of extractors is that you can have a private state that you only want to make available through extractors because you might not want that mutable or observer without them and forces people into a certain pattern development. Like a `option.sum`. It doesn’t have the type of type checks you want to ensure, therefore you might want to say, you must use `const option.sum` or use it in pattern matching to push people towards the way it’s supposed to be used.

F# active patterns use tuples similar to array objects. It doesn’t permit undersplaying arguments and requires discards which is not a – convenient in the destructuring case, where it doesn’t require exhausting the array in destructuring.

RBN: So I will show some examples of this. I have shown the point example before. One – I have shared this where the get X and get Y are not part of the class. So that the extractor becomes the only way to access this data. Or maybe this is the way to access the data raw, where the public form (?) some type of manipulation on the data. You might not want to have or observe. Therefore extractors give the benefit of having a mechanism that gives you privileged access to this in a read-only fashion. Access that private data, but only if the type matches and leverage the benefits of the extractor mechanisms for the consistent exception that throws when something doesn’t match the provided site.

RBN: Another example I have seen here is implementing algebraic data types without enums. You could have that. It won’t have performance benefits, but shows the syntax, the mechanisms we employ are valid and applicable without having the syntax in the language yet. This does the destructuring and pattern matching and the customization around pattern matching and destructuring here that do that type of validation are important, if I was matching on a 0.1 and 0.2, being able to do validation of type is important to it can distinguish between these two things.

RBN: Some other examples are common examples we have seen in places like having a pattern that matches against text. I forgot the let. Let’s assume you might be writing a specific string that is defined elsewhere. That are examples – this is how a pattern matching uses variable pattern to indicate a binding declaration. These are examples of some of the uses in that syntax.

RBN: Regular expressions can be used in this as well. And pull it out and use it to more easily reference things rather than having to do dot groups, deeper within a destructuring pattern, et cetera.

RBN: So I will go to the queue at this point and see if there’s potential for advancing to Stage 2

EAO: Thank you for the discussions over the weekend on this. They helped me see the valueOf extractors, even if the value I see in extractors is maybe not the value that is intended, I really see this as a really possibly some closest or best approximation to runtime types in JavaScript. And I am not really that interested in the destructuring part of the proposal. But what happens if you just get one value out of the custom matcher and the way that this effectively (?) we have runtime type checking. + 1 for Stage 2 for exploring what that looks like. I thought about the syntax, but I think those can be addressed later

RBN: I will say and I said this on the posted issue tracker as well, I don’t think necessarily that extractors are the right fit for runtime typing. Generally two things you want out of runtime typing. Assertions that a value is of a type. It’s hard to do in JavaScript, consistently. You want to generally be able to at least validate the inputs and outputs are correct. There is no mechanism for validating something is the right type when creating a variable. For example. So there is some potential with extractors, but you can’t say, extractors are a runtime type mechanism, the benefit for most other scenarios is the pulling things apart. It’s not a general purpose solution for runtime types. The other thing you want out of a runtime type solution or many scenarios, is reflection and introspection. This is important around dependency injection, OEM for databases. Runtime type validation for passing a callback. How do I know it’s the right to be applied without evaluating it. A better thing for that done parameter decorates, it use to validate return types. That’s a better approach for runtime type validation. You would definitely be able to say, X is point to check the type. So you can say instanceof, the custom matcher syntax is designed to work around or improve the state around instanceof which don’t work well across realms. And primitives, take array from another frame or realm and say an instanceof array in your context that doesn’t work. So you don’t have to have the complexity in pattern matching and deals (?) something that is considered more of a work in the language for a while. I definitely think that there’s some potential avenues for extractors, I don’t want to turn the focus to runtime because I don’t think this is the best proposal for that case.

So the next –

USA: Yeah. EAO, is there anymore? Next we have DE.

DE: Yeah. I am very excited about this proposal. I think the use cases you presented are very good and I like the semantics. I support this going to Stage 2. There are obviously these interactions with other proposals like pattern matching and so I think we can make sure to maintain alignment during Stage 2 with the right sort of, you all have already been explicitly collaborating. So that’s a strong mechanism with the alignment. Yeah. Great work.

GKZ: Hi. In general, I am excited and supportive of this proposal and pattern matching as well. My comment is more about the tradeoff between the flexibility of the design and understandability and looking at the use cases in the proposal. A bunch of use cases around I have some kind of datatype, for example `Point` and I am matching to see that this is a point, and then getting values out of it, and this seems well motivated in how this works in other languages. But some other use cases are running arbitrary code, and doing something, for example, on page 10, ID extractor, parsing a string. Getting the output out of that, so on one hand the first set of use cases, extractors is the dual of creating a data type. And then this is sort of a dual of just function call. And there’s a tradeoff between this being more powerful and more flexible but also can make it more difficult to understand per the – and programmer. So looking at a piece of code when using a bunch of these extractors, you are not going to be able to tell, for example, your geometry example on page 16. When I am looking at the different lines, I don’t know necessarily is this – you know, I can assume this is checking, this is – this is of this specific datatype and extractors values of it, but I can’t necessarily make that assumption without looking at the runtime code because this could also be doing something completely different. For example, OCaml, I use that every day, it doesn’t have this increased flexibility and I am not necessarily ever missing the fact that this increased power is missing. You have some use cases around regular expressions and mostly around parsing strings. These can be solved in other ways. For example, calling the function and matching on the output of that function. You can imagine, here rather than matching directly with the regular expressions, you call a function, which calls the regular expressions and outputs a datatype. Maybe when we the outputting ADT or a union of object types and matching on that instead. I am just concerned about the understandability when you have the full power to do something fully arbitrary (?)

RBN: In practice, in most examples that I have seen of actual real world code that uses similar syntax, you tend not to get very deep layers of extraction just like any that is more complicated, you want to break it down. In general, I usually say, I see 2 layers like an extractor being used. It’s the – let me see if I can find the example here. It’s this case where you have `option.sum` of geometry.point. Where you are something that might be an option.none or it could be `Option.Some` of one of those two things. And you want to break that down. It’s more generally more efficient to collapse this down especially since there’s the pattern matching proposal using for caching it increase performance and allow iterators to be re-used across matches – but the potential the `Option.sum` is the extracted – reused since we have validated that in the first branch. The other thing that is really interesting is, if I go back to the regular expressions example, let me see. That was… this one. Is that if you have a piece – a function that says I am going to validate these inputs and do the destructors, the first has to match ISO DATE-TIME. If that succeeds, I can do the return zone thing undefined because that doesn’t work, what throws? You will end up with a error indicating that undefined can’t be further destructured – I can’t remember the exact spec text in the engines. But I have seen false can’t be iterated. And that's bad user behavior. So now you have to write your API that even in the failing case I have to return to something that is useful or on the customer side, I have to handle it, having a failed return value. So it adds more work on either the side of the implementing function or the side of the person who is consuming it. That extractors help alleviate because the process of doing the extraction, doing the validation and the extraction happens step-by-step. When the error is thrown, it says, this doesn’t match. It’s more readable and usable then just `undefined` is not a valid – not an object or whatever you end up with in those cases.

GKZ: Regarding what you first mentioned, I definitely clarify, I am suggesting that this should always be applied to I have some kind of datatype. And it should always be the case where I am saying, this is of that datatype versus whatever we’re taking a string and destructuring that.

RBN: I think the majority of the cases will be that. But I have seen more than enough. The cases I have had around things like – I don’t think it’s currently in the slides, but an example of a book example that takes into multiple arguments and does coercion to an instant. That’s based on an actual code that I had written. It is one of the motivating reasons why I started looking into the proposal in the first place. I want to do the validation and save the complexity to handle defaults and all of the cases and one of the validate is a string. I want to be able to do data manipulation to make them consistent and case and that’s not the 95%. Since it’s based on Scala extractors, work is flexible enough to handle both cases even if the majority of cases are data types.

GKZ: We can move on to the next point of queue. Having the 5% use case supporting, it means that understanding code that is using this feature will be more difficult for the programmer to understand what it’s doing because they can’t make the assumption that this is always matching, this is of the datatype, but it could also be doing some kind of completely arbitrary thing as well. So somehow, having more power makes it also harder to understand what it’s doing. Especially in the match use-case, you can imagine someone will want to know they exhaustively checked the input value, if the programmer is looking at the code or a static analysis tool. And this could either – each extractor case could look at we have matching this value. Now moving to the next datatype and we have matched this or just doing something – I agree that is more powerful and there’s definitely use cases for it. There’s a cost and tradeoff to allowing that in terms of understandability.

RBN: Yeah. I would like to get to Mark Miller’s topic. I have thought about that. If you can ping me after, I would appreciate it.

MM: Hi. First of all, my compliments plus a thousand of these. I want to see this in the language. When you refer to extractor in a destructuring, and you still use it refutable, I want to clarify: first of all, allowing extractors in destructuring makes destructuring refutable in the sense it can fail. My question is, when it fails in a destructuring, it always ends up causing an exception to be thrown. Correct?

RBN: Correct. And I also think I said refutable when I meant irrefutable.

MM: Okay.

RBN: Extracts are always – destructuring some binding assignment patterns are always refutable matches. They throw. There’s no alternative solution. – the only refutable thing that introduces a pattern in that case is since the person has had a successful or failed match. But refutability is an extreme part with lines for how it works in other cases.

MM: Great. So my question is, if we extend the hint which I would prefer to have been able to get hid (?) it, so the extractor can tell that it’s used in a context where failure would cause a throw, then it could itself decide instead to do a throw with a better diagnostic, which my only experience with pattern matching library, which including one I wrote, having the individual matchers throw individual diagnostic is value. It also raises the diagnostic issues.

RBN: That is a fair point and worth discussing. The hint of the Boolean list, if the thing is further destructured. I think that’s valuable for discussion.

MM: Okay. Good.

USA: Ron, that is like the end of time. Unfortunately. There are a couple more items. Also, there was a reply by WH who said that he agrees with the concern that was raised earlier by GKZ. But how would you like to proceed with this?

RBN: At this point, we are short on time, but I would like to potentially ask for consensus on Stage 2. I think a lot of these things are – most are relatively minor things to discuss whether they apply to non-datatype is something I am in favor for (?). This is based on how – we have all the semantics described we are willing for. There are a couple of things to clean up in the specific syntax as we go. We have met the bar for Stage 2. Is there support for Stage 2

WH: I have concerns which we didn’t get to in the queue.

USA: Waldemar, to clarify, do you think your concerns would block Stage 2?

WH: They should be addressed before Stage 2. I like the proposal, but I have some concerns. I think we should go through the queue before asking for Stage 2.

RBN: If that’s the point, if there’s any additional time on the agenda over the next few days, you would like to consider an extension to discuss that in the future. I think we are probably breaking for lunch soon or now.

USA: Yes. So, RBN, thank you. We will capture the queue and put an extension on the books. I cannot promise you we will get to it by the end, but if you manage to preserve enough time then we will. Thank you.

RBN: And if the folks on queue would ping me off-line, we could have an off-line discussion and speed up the discussion when it comes to it. Thank you.

USA: Thank you all. Okay. Then we are on time, slightly. 3 minutes behind for lunch. See you all at the top of the hour.

### Speaker's Summary of Key Points

- Aligns with Extractors in Pattern Matching
- Proposal specification text written
- Destructuring performance investigation: may switch to array-as-object destructuring in Stage 2, preference to push for array/iterator destructuring performance improvements in engines as there are more benefits.
- Continued on Day 4.

### Conclusion

- Continued on Day 4.

## eval/new Function changes for Trusted Types as Normative PR or Stage 3

Presenter: Nicolò Ribaudo (NRO)

- [PR](https://github.com/tc39/ecma262/pull/3294)
- [slides](https://docs.google.com/presentation/d/14AjvbW2-aNvlirB-7pPhIAeM7oWKtjqONRcyp9ID7gg/edit?usp=sharing))

NRO: So hello, everybody, again. This presentation is for a new proposed change to how we handle eval and `new` function. To accommodate the trusted types proposal. For what is trustedTypes? It traces back that allows using language features that normally would enable access syntax. So you can decide who you like or do not. Some are HTML elements or set in the script. And done through two different ways. One to capability object. You can have an object that represents the capability to inject arbitrary code and through a global sanitizer hook. When you use one of the features, HTML like without using the proper capability object, these global is called sanitize HTML code to prepare it to be injected. Or it can three an error to prevent it from being rejected.

NRO: Yeah. So an example of how this works is that we have this trustedTypes global. And we can create a policy. Not everybody can create policies. The policies we can create are controlled through the header. And only code that has access to the trusted policy can create strings that can be injected. From this for example, the trustedHTML object is created by somebody that had access to the policy set works. While trying to just inject from the string. And the other way that trusted types work is mechanized through global hook. You can define the default policy, only when the header allows it you can sanitize the code like in this example. In a way you consider safe.

NRO: Trusted types will also send violation reports to predefine the point for when e somebody to trying to violate the policy. So if you have a trusted policy that says you just use trustedTypes, but then some code is trying to not use those, it’s trying for example to some set HTML to an untrusted system, it will do a violation report to the end point containing a sample of the code that tried to violate the policy.

And I am showing here the HTML endpoint version, but it’s possible to register a global event listener to receive the same data.

NRO: Trusted Types is already implemented in Chrome. It’s implemented a few years ago. And Igalia and Salesforce and Google are currently working for other browsers.

NRO: So how does this – I must talk about HTML now. How does this interact with ECMAScript? Like, why do we care? Well, we provide two very powerful functions that collect eval arbitrary code eval and new function. And trustedTypes proposal is like looking to – it’s like trying to hook into those. But we don’t provide the necessary host hooks for this. The Trusted Types spec actually already provides this info and based on another version of the proposal. Can we actually expose the info that trustedTypes needed so they can do their thing in eval new function?

NRO: So what does it need exactly? Two main parts. First of all, they need a way to tell where the strings that were passing the HostEnsureCanCompileStrings can come from. For example, passing an object in the fire trucks, like a trust the type object, new function will stringify and the host only receives the string and have no way to check whether the string was like – first of all, whether the string comes from a Trusted Type object. And whether the string was like matches the confidence of that object. And second, we need a way to tell `eval` that it should not be immediately return for some specific object, but instead should consider dynamic strings. `new` function already stringifies all its parameters, while eval will return or leave whenever this is a num parameter. Trusted objects are what objects. And lastly, trusted types have the sanitizer hook that lets you transform HTML on the fly. They are not currently looking at this to `eval` function. It was in the old proposal, but we don’t do it now. Because you cannot really easily sanitize the code. If we want the capability, we can talk about it. But it’s not something we are proposing right now.

NRO: So what changes do we need to do in ECMA262 to expose this? There are – so the way to change the HostEnsureCanCompileStrings hook again, currently the hook is receiving the realm. The strings of the parameter strings and value and whether it’s a direct or indirect call. For trustedTypes, you need it to expose the original objects. So we can comment here parameter args and body args. The values we pass to the ???er before stringifying them.

And then for the violation reports, we need to pass the `compilationSync`, `compilationType`, constructed for using to try to validate some code. So whether it’s directly valued with the validate company to info this function and the full code string that we are trying to compile. So they can take samples of it and send it to the server and report to make it easier to figure out where the violation is coming from.

NRO: And we need to change how the host hook is being called. This is the original function of the function. The current version we are stringifying the arguments body, code = hook. Be able to source, parse it and create the function. We need to like – I will just add the new parameters to the host hook and we need to be able to source the hook to pass to it.

NRO: And we also need to change how `eval` works. So we need to have a way for objects to be marked as – hey I want to be stringified. The current request is doing that through a host defined code, like an internal slot that hosts can attach to arbitrary objects. And so eval needs to check if we have one of the special objects if we do `stringify`. Otherwise, do the existing behavior that is return, if the parameter is notAString.

Following instructions from Monday about import source, we discuss how we want to set a precedent that arbitrary host objects should not communicate what they have with 262 with custom internal slots, but use a host hook. I am proposing we should have these hooks that hosts can use to mark objects to be stringified.

How does this integrate with the ShadowRealm proposal, Stage 3. First, it’s not currently exposed in ShadowRealm. If you call eval in ShadowRealm it follows existing rules. It might be exposed in the future. Like there is – I don’t think there is a technical reason for doing it, but not currently exposed. There is a case in which new changes would apply when you call the shadowrealm.evaluate method. It should come from the outer policy. But it just means that we need it properly wire the objects in a ShadowRealm.object

NRO: It’s currently in a pull request and ECMA262 repository. It was based on that dynamic code branch proposal. But has been done a lot in the past few months and just presented by a colleague as a pull request. And you can have this specification.

NRO: So what are the tests for this? This is difficult to test in 262, because the only behavior change we have is that sometimes code that might throw now might not throw. Whether the code throws or not, there is a potential that there could be an object when passed through eval is not returning as exist.

NRO: I tried asking test262 maintainers what is better about this? They think it’s better to test it in WPT where you have access to the objects and so you can actually test the behavior when using the function.

And that proposal is already tested. You can find the tests.

NRO: Yeah. So summary for them asking here, I am asking for consensus on advancing the proposal, the version of the proposal that was at Stage 1, with this changes – updated host hook, to receive the original objects, the compilation and the source and update eval to allow to stringify some objects.

NRO: I am looking for consensus for Stage 3. As I think all the requirements including tests are already met. Editors starting with the request but we don’t have a full review yet. If we cannot get the consensus on Stage 3 because we think it should have tests in Test262, even if we cannot fully test because it’s mostly host defined, then I would ask for Stage 2.7. Let’s go to the queue

CDA: MF?

MF: I raised some of this on the pull request originally thinking it was an editorial thing, but realizing it’s actually a normative question. So right now, there's just a Boolean-returning host hook that determines whether to `ToString` the object. And two related questions here. Could we have a precomputed string associated with each of the objects, instead of computing the string each time eval is called, that way we get a consistent string produced for each object that applies here? And second, if we can’t do that, can this operation throw? We are using it with a question mark there. Are we allowed to use an exclamation mark?

NRO: Yes, we could and first not go toString and instead have the host hook on the object. The reason the pull request is used to string right now is just because the `new` function already stringifies arguments and so it was like – did the same in `eval` for symmetry. But there is no technical reason for which we could not just more statically get the string rather than calling string on object. This could return – it still checks that the string that you’re passing to HostEnsureCanCompileStrings matches the string that was contained in the object. So this is not a security problem. Yes if there is a preference for just not calling the string we can do that.

MF: Yeah. Even if it just went down to like editorial preference, I would prefer to not have to call ToString there. But on the normative question, I prefer not having to do a `ToString`.

NRO: Okay. And do you propose we only do that for `eval` or that also function for this special objects we not calling `toString`

MF: I would prefer to do the same way, that they both do not call `ToString`

CDA: KG?

KG: I agree with MF. The point that I was going to make was that calling `toString` would be bad for security because you could override. You say it checks that the resulting string is the one they expect, but given that we are doing that, given that maintaining the security property requires CSP to have a notion of what the correct string is, it seems silly to call `toString` and then confirm that the results are the same.

Especially given the calling toString is observable, you could override to have side effects and then return the string. And that’s just weird. So I also strongly prefer to just pull the string out of the slot and not call user code here. For both `eval` and `new` functions in the case of these branded objects.

NRO: Okay. Yeah. We can update the proposed spec change to that. MF, you’re gone in the queue?

MF: This next one is a little bit more hairy, I think. This PR exposes a synthesized source text for functions via this host hook. For use, I believe, correct me if I'm wrong, for confirming against hashes for CSP. When we defined Function.prototype.toString, well, sorry, when I revised Function.prototype.toString many years ago now, we were very careful not to fully define it so that it could match the web reality at the time for all of the web browsers. But my understanding is that this will make a canonical synthesized toString representation of a function that doesn't necessarily match Function.prototype.toString in some browsers.

MF: That makes me uncomfortable and also then because of that question it also makes me a bit uncomfortable with how quickly we're looking to move this through the stage process. We're looking to go immediately to stage 3 here.

NRO: Yeah. I was not aware that the `toString` – that the string would build a new function is necessarily not the original string. And from what I discussed with this before, with the trusted folks, I don’t think they were aware either.

NRO: One of the options that they were thinking of was to – like, instead of us, us in the string, from like to the host hook, it would just like on their side show the various parameters so build this –

MF: Yeah. That’s what I was thinking would be a solution here. Because all of the components that are necessary for that are passed out, it doesn’t force us to make the decision for what that canonical `toString` representation is and allows the upstream to maybe base the hash on ust the body, or just the body and the parameters, but in a way that's not like a syntactically valid function construct, or whatever they want to do, that would be out of our hands. I don't want us to be the responsible party there.

NRO: For additional context, this proposal is right now only implemented in Chrome and Chrome doesn’t use the string as it is. But it strips the function part at the beginning. Because building these reports, they only get the first 40 characters. And so you won't do this – it contains something significant and not like the function prefix. So they are already not using the string as is. So I believe we can just ask them to take responsibility for building the string that they need.

MF: Yeah. That sounds great. Thank you.

NRO So to clarify, this would be removing the code string parameter here. The spec passes the individual pieces and the host can join the pieces by themselves. MM?

MM: Yeah. I have written down on the TCQ something that I am concerned about in this `toString` discussion. I thought I understood this and now I am much less confident that I understand this and its implications. If you pass – if you just call – under this proposal, if you just call `eval` and pass it object as argument, what happens?

NRO: In eval will call, the host will then propose trying to reduce these host `eval` – the host using for any object hook. This hook can return either true or false. If the hook returns false, then nothing changes. And we still have the pre proposal behavior, where eval just returns the object as it is. If this hook returns through, where given the first discussion with Michael and Kevin, the hook would intern the string, a Boolean.

MM: The string comes from the host hook called during `eval`?

NRO: Yes.

MM: I see. I see. Okay. I am comfortable with that. The – then it’s completely a host policy, where it gets the string from.

NRO: Yes

MM: Also I wanted to – so I think that this is – I think I would still like to see this only go to Stage 2.7 at this meeting. But I support it for 2.7. I do have one for question, though. You mentioned that realms don't deal with this yet in the realm evaluate. Compartments also have a compartment evaluate. And compartments obviously even earlier than – much earlier [shan] ShadowRealm, I want to make sure that it – since you know compartments well, that compartment evaluate this like compartment would.

NRO: Yes. I am not super confident right now the exact behavior in the compartments proposal.

MM: Okay.

NRO: So I would expect that if you call eval inside the compartment, it would call the hooks inside the apartment. While if you call eval method in the compartment from the outside, it would check for permission from the outer compartment rather than the inner one.

MM: That sounds very plausible. And I like the question. I think the question is definitely a – the right way to approach it. The other thing with regard to the hook, which compartment the hook is with respect to, is one of the long-term goals of the compartment is host virtualization, virtualization of host hooks, so the JavaScript can act as – JavaScript code in the position of creating the compartment can act as host to JavaScript code within the compartment. Do you see any conflict with that regard to this proposal?

NRO: No. I think we just have to expose this new hook. I am on the list of hooks that compartments with override

MM: I see MF thinks I might be confused.

MF: Yeah. I wanted to clarify something. When you were asking about the string, there’s kind of two strings and two host hooks involved here. And we were showing you one here. Yes, this returns a string for eval. The other one talking about was in function constructor, where –

NRO: MF? That one is also here on line 5. There is a hook to get the string and a hook to verify whether we can perform completion or not in eval we are using both

MF: The interesting case in the function constructor where we synthesize a string, not just use what is returned by this host hook.

MM: Okay. But the host hook, the string that it returns is then used in order to construct the string that’s then passed by back. Is that correct?

NRO: It is used as a portion of it.

MM: Right. Okay. Good. Good. That makes sense to me. So I still support 2.7.

MF: Okay.

NRO: Okay. Just a question, MM, technically, relating to 2.7 and 3 is just regarding tests. Can you like –

MM: Yeah. Maybe I am hanging more on the distinction between 2.7 and 3 that is intended. But once it’s a 3, it becomes very, very expensive to make even minor adjustments. Whereas, sort of understood that the gap between 2.7 and 3 means that if we find – and obviously even if 3, we find a problem that is bad we find a problem and fix it before it goes to 4. But I am okay with 3, if there’s no – if everyone else is. I think I prefer the extra little room there.

NRO: Okay. Thanks. SYG? DE maybe first since he’s replying to this.

DE: I think for the 2.7 versus 3 thing, we were kind of explicit in setting that up, that we are not adding extra stages of incremental consensus-gathering. So I think –

MM: Okay

DE: I would be hesitant to start in that direction.

MM: Okay.

DE: If we are holding back Stage 3, I want to know exactly what we were looking for

MM I agree. I am fine with 3 and I am fine with 2.7, if there’s – if other people would like 2.7.

NRO: Okay. Thanks. SYG?

SYG: This is a clarifying question. I didn’t quite understand, if you could go back to a previous slide. Let me try to find this slide number. I think slide 14. Yeah. Number 1 there, how is the change to host ensure compile string address number 1?

NRO: Because we are passing the original object to the hook, so like the – by telling – wait. By where does it come from and then giving waive to the hook to check whether the string was originally the trusted object.

SYG: How does it – know that?

NRO: It says the object is – it's a TrustedScript object, I seem to have a mark as such. Some host level lock

SYG: What is the difference – okay. It’s not – so maybe I am misunderstanding. Is the use that you are trying to evaluate a string and you want to know ultimately the providence of string or evaluate something is an object that needs to become a string and you pass the object in addition to the string

NRO: Yes, the second thing. The example is first. But it’s the same. Trusted HTML is an object that has the internal slot marking distrusted. And so we call `eval` or `new` function passing this object to the hook so the hook can verify the string, but one of the marked objects.

SYG: Okay. So making sure that it’s not like about building some kind of tank tracking into strings, which is not possible

MM: There is no internal slot being brought into the proposal. It’s a hypothesized one to bring the host, if they want it?

NRO: Yes.

MM: Okay. Great.

CDA: Okay. Time

NRO: So I would ask for consensus for Stage 3. Mark, I will follow up with you with a compartments question to make sure I didn’t understand wrong

MM: Great. I am fine with Staged 3 even with the follow-up happening later.

NRO: Okay.

CDA: Okay. MM. supports Stage 3. Do we have any other support?

MF: Can you clarify Stage 3?

NRO: Yes, with the changes. So Stage 3 with this host hook in 2, boolean return I guess either null or a string. And if it turns a string, we use the string instead of calling `toString` on the object. And second change, we are – we are not passing this last built string to the host. Instead we just tell trusted folks to build the string themselves because we cannot guarantee a stable format.

CDA: Okay. We have + 1 from MM. The + 1 [#23R] DE. + 1 from MF with those changes. Do we have any opposition to Stage 3?

JHD: I was just curious, what is the reason why this is a Stage 3, instead of Needs Consensus PR?

NRO: Yeah. I would be fine with either. I actually –

MM: I would object to a needed consensus PR.

NRO: Yeah. Like, these are Stage 1 proposals and immediately get to Stage 4, it fails…

JHD: A Needs Consensus PR would still need some of the requirements of a proposal. So I guess that’s fine if there’s an objection it being one, it can be a Stage 3 proposal. MM, I would love to hear more on Matrix why it’s one or the other just for future rubrics.

CDA: Do we need reviewers?

NRO: Yes. Does anybody want to review? It’s a maybe 20 lines long pull request.

MF: I mean, I am going to be reviewing it anyway, so you can add me to the list.

CDA: Already. Thank you, MF. Anyone else while we are here? You can always volunteer later as well. Okay. Let’s move on. Thank you, NRO

NRO: Thanks.

### Speaker's Summary of Key Points

- To support integration of Trusted Types with `eval` and `new Function`, it is proposed to expose to the host:
  - The original parameters passed to `new Function`/`eval`
  - For `new Function`, the final string built by concatenating the various parts
- We also need to expose a hook to let the host marks some objects as "should be stringified in `eval()`", given that it currently returns all objects as-is
- It's very hard to test this in test262 given that it's about host hooks, but it has tests in WPT
- Exposing the full string in `new Function` is problematic because it's currently spec-internal, and instead host specs should rebuilt it by themselves
- The general approach from the committee is that we should expose to Trusted Types whatever info it needs, and let them decide how to handle questions such as cross-realm behavior

### Conclusion

- This change has been approved as a Stage 3 proposal
  - Without exposing the full string for `new Function`

## Array.isTemplateObject next steps

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-array-is-template-object)
- [slides](https://docs.google.com/presentation/d/1LTlzpboYwKxRwigATcFYEh06CIbZvOvmFdPzkNn7vJI/edit#slide=id.p)

DE: Hello. I am going to build off of Nicolo’s presentation.

DE: Thanks for waiting, everybody. Array.isTemplateObject. This is a proposal for a simple predicate, which we stash on Array because template objects are arrays. And it just lets you know what is passed into it was a template created by the system. If you make an object that looks like a template, you won’t trick the system. It will have an internal slot that denotes whether it was originally a template..

DE: So this comes back to the trusted types discussion that NRO had. It’s almost like the other side of the coin. When we’re in `eval` and have these objects that we want to pass to `eva`l that are especially marked how do you create the objects that are trusted strings?

DE: So trustedTypes is all about avoiding injection attacks. And injection sort of it’s about when you are running code that you don’t want to be running. Kind of presumably because you have to presume something, the actual JavaScript code that you ship over, you know, of course you can imagine ways that you could do injection in the server, into the JavaScript code, but hopefully someone’s looking for those. Once you have something in the JavaScript code and it’s a constant maybe you should be able to trust this.

DE: This is what the Google team found that in their experience it was common to have constant values, HTML snippets, stripped URLs and sometimes JavaScript. So one strategy in your type trusted type policy you could check for membership in a big set of expected literals. But it’s easier to manage if you don’t need to build a process if the literals can be distributed through code. And because you trust the code that you are running, which is another assumption, but we have to build on something. Then it’s – it is kind of easier to manage, if those literals can be distributed throughout the code. This is what Array.isTemplateObject enabled. This is the block in the previous discussion. The initial spec text used an internal slot for the brand check. But this is cross-realm. We have many TC39 delegates interested in enabling proxy transparency.

DE: And especially I think practical proxy transparency, which I will get into more later, it’s – I think it's a slightly more slippery concept because we’re thinking about what is used in practice.

So imagine you have a template tag that is doing this check that’s going to brand your JavaScript string or HTML snippet as literal so that later can be accepted by the system in one of the syncs.

DE: So what if we put that tag through a membrane? Well, it wouldn’t really work. Because it’s not checking the brand on the receiver, but on the argument. But there are two ways through.. One of them is the realm-specific way, where we’re just looking within the local realm, where that template object function exists. And looking at its TemplateMap and seeing whether the object is a member of that. Another option was to be like array.is array and go through the kind of target of the proxy. So the TemplateMap version, Igalia tried to implement it, but had some trouble to get it to work well. And so the feature got delayed. The initial version as things stand may go ahead without the literal thing. It makes it harder to deploy. So it’s in general a more insecure world where injection attacks were more exploitable. Serious secure issue to consider.

DE: However I don’t think we should worry about this so much. Because the realm dependent brand checks fail safe. We were previously thinking, maybe we should do the realm dependent realm check where you look at the TemplateMap and check for membership of that. Is this object passing in a literal and from my realm? The realm-dependent check, checks these loose concepts. Is it a literal? For our use case here we really need to know whether it’s a literal and array in the realm so to conserve the consistency whether the tag works across membranes. If we do it early the tag would not work across membranes. And with this check being done kind of more flexible, well, okay. It will break across its – sorry. With the realm dependent check would never work across realms. And the realm dependent check would break in the cross-membrane case when put across the membrane, but not locally.

DE: So anyway, we are failing safe because we are ensuring either way the literalness. It’s all about kind of telling the user kind of more eagerly that you can’t do this thing that’s cross-realm. So if you run into an issue, you can use the template tag that was created with your realm. Been your realm. What is the independent version forces you to do. The realm independent version, you would discover that requirement when you tried to use a membrane. I don’t think it’s that bad.

DE: If we want to have a realm dependent brand, then I think we should do it with a less confusing spec. Like, authors who tried to implement this previously, they thought, okay. I will physically look up the template map and iterate through it to see whether it has the membership, which is why the implementation was impractical. Instead, a more practical implementation strategy that Nicolo pointed out to me, well, just make the internal slot and have it point to the realm. So previously, I guess our templates tried pretty hard to not point to the realm. Now you have to go back and do that again.

DE: So and then in Array.isTemplateObject, we compare that to the realm of the `isTemplate` function. So in conclusion, I think it’s important that we think globally about these security matters. There are many different threat models we are juggling. Defending against injection and defending against different untrusted pieces of code affecting each other. Those are both threat models and we shouldn’t kind of put one above the other. We definitely shouldn’t rank the web security model too low.

DE: So anyway this proposal is at Stage 2, but it was blocked up for this issue. I would like recommendations from the committee. We should think globally [?] same-realm versus cross-realm brand checks. Any other concerns? I would like to propose this for Stage 2.7 at the next meeting

CDA: KG?

KG: Yeah. Thanks for the presentation, DE. I support the semantics you have proposed with the cross-realm brand checks. For some reason, I thought that the concern about that was somewhat different though, which is that I trust code that is on my page, maybe more than I trust code that is on other pages. So it – I thought that the concern was a security thing. You know, if I have evaluated all of the code that is on my page, and checked all of the literals that are on my page and confirmed that they do what they want in the context of my page, that doesn’t necessarily mean that I have checked literals on other pages that happen to share the process with me.

DE: I see.

KG: We could say we don’t care about that. I think on balance, the simplicity argument wins out over that. But I wanted to make sure it’s something we considered.

DE: Okay. Thank you. Any more on the queue?

SYG: I want to reply to Kevin’s point. The realm – the JS realm notion is a finer notion than origins. Do I trust literals on my page, do I trust literals on my page more from other pages? The thing that maps onto it is origins instead of realms. Does that match your intuition, DE?

DE: Well, other pages can only communicate by like `postMessage`. And so they won’t – this will be protected against that because this won’t be template literals.

SYG: Origins.

DE: Even other workers will face that

SYG: Maybe the realm – Communicate with other pages having an iframe on the page.

DE: Yeah. So this sense of literalness doesn’t – it’s not the next flexible thing, but it allowances literalling to be communicated to and from iframes

SYG: Okay.

KG: I agree that concerns about cross-realm literals are much less serious than concerns about cross-origin literals. I mean, those are fatal, if you could do a cross-origin. Cross-realm I agree is a much smaller concern which is why I am happy with the brand check that does work across realms. But it is still a different boundary. We sometimes see CSP policies that are different for different pages on the same origin.

DE: I see.

KG: Just because you are in the same process, and the same realm, it doesn’t necessarily mean that you have the same assumptions about what you trust.

DE: Right. Fair enough. Thanks.

DE: What’s the next point?

MM: First of all, I want to answer both KG and SYG, which is that the discussion of the utility of this has so far been completely browser centric. There is no “JavaScript origins”, it’s not part of the language. But everything outlined here is useful for security outside the browser. All the rationale for why you want to do this. Including, supporting trustedTypes, which are a useful set of concepts outside the browser and the concept of origin.

MM: And that, therefore, the notion that different realms can be trusted is relevant. Now, the first question I have that will help resolve what we need to do in the spec is, if you do the – if the test was for a cross-realm internal slot like you have in the current proposal, and you also tested as part of the spec operation, what you do at current, in many of the examples, which is also that inherits from this realm’s Array.**prototype**. Since templates are born immutable, which they inherit from is locked in, it seems that conjoined tests safely emulates exactly the look in the TemplateMap.

MM: So the spec only has to traffic in observable differences. So if conjoining the slot with the prototype check is not observably different, then the TemplateMap lookup, then we have implemented the TemplateMap lookup by bundling that into the test

DE: Is this done at the build in definition of this or also be done at the user level pretty easily as you outlined.

MM: I am suggesting it be bundled in so there’s no operation that is not conjoined with the prototype check. And I am not suggesting that be specced that way. If it’s specced as TemplateMap lookup and implementation that does the conjoined task with the unspecified internal slot, is equivalent, then that implementation – that cheap implementation succeeds at meets the spec

DE: We poured over this and couldn’t come up with your algorithm. It failed as a communication device.

MM: That’s taken care of easily with a normative note.

DE: What is a normative note?

MM: Sorry. Non-normative.

KG: We should focus on the semantics and let the editors decide how to write it down.

MM: the observable semantics should be its realm-specific. And if it’s realm-specific, then having the exposed API be Array.isTemplateObject,, testing the argument, it does not violate the general design role that we have for good reasons of not having operations that test internal slots on arguments other than `this` argument.

DE: Okay. I want to encourage the SES group to document and, you know, provide a written justification for these design patterns because you say we… YSV presented this idea that we would document invariants and work towards consensus on them. I think that would be useful here.

MM: Yeah. Absolutely.

DE: Great.

MM: The – I shouldn’t promise about when we will do any kind of exhaustive documentation of any variance, because it’s just – it’s a hard thing that we keep not getting to. But absolutely, this thing about arguments versus this, that’s been gone over many times and we can certainly write that down

DE: Mark, can you clarify the thread model that you are concerned with here?

MM: So, first of all, there’s the issue that Kevin brought up, which is that the utility of this thing really is better served by having a realm-local check because the – we know that if eval is enabled the check doesn’t mean anything. If it’s a realm local check, loonize at `eva`l is disabled in your realm, it be enabled in your realm. I am not bringing origin into the conversation. And `eval` being enabled in your realm does not invalidate the utility of this as a security mechanism in my realm, even when our realms are in direct communication. That’s the utility

DE: I am a little unsure of the prospect of defending yourself when there’s injected code into the other realm. You can often construct a kind of gadget where you will kind of get the other realm to do something, even if it’s supposed to be defended.

MM: Okay. We should go over that. Because I am convinced that that is useful, to communicate between the realms. In that context, I will also say, we specifically created the callable boundary in the ShadowRealm proposals so that the standard way to create multiple realms in the language would have a callable way. With the callable boundary, if the operable communication is over the callable boundary the problem is solved with the existing proposal, because the existing proposal would fail on a proxy. Which in this case, since the only way to get across a callable realm boundary is with a proxy or equivalent, that would basically enforce in that scenario that the test is always realm local. So therefore for uniformity, I would still recommend that it be realm local, even when there’s not a ShadowRealm callable boundary in the way.

DE: for uniformity, between… ? Okay. I don’t quite understand the not motivation from the uniformity

MM: Because the scenarios we want to use realm as a trust boundary, are ones that align with using ShadowRealms rather than direct realms, I won’t block all this API as currently specified. Because I am willing to ignore the direct realm to realm contact case as being one that’s relevant for security programming.

DE: Interesting. Okay. To summarize, it sounds like we heard a weakly held argument from KG in favor of the cross-realm version. And now, it sounds like your same realm argument is more weakly held. Given that ShadowRealm does this defense.

MM: I am saying it’s not a blocking consideration.

DE: Okay. Moderately strength held.

MM: Thank you. Yes.

DE: Great. Any further comments?

CDA: NRO?

NRO: Yeah. I wanted to say, if we are going with the same realm check, then whether this is locked or it remains as a map in the realm, it’s like an internal question. So we should do whatever is easier to integrate. That decision should not affect whether the design is good for not

DE: Why would host specs care one way or the other?

NRO: Well, it’s – like, if you need to check whether something is – it’s easier to just check and having to do – I don’t know. But it’s like an internal request.

DE: Yeah. I think this goes back to making sure that our spec is intelligible. implementers are one of many audiences who are communicating with the spec. If we don’t communicate with them, we are kind of sunk.

DE: Okay. Any more comments on in the queue

SYG: Yeah. I have a question about the – so we discussed a lot about realm dependent or realm independent. What would Trusted Types if we specced one or the other? I imagine for realm independent they use it as it is. Realm dependent, would they enumerate all realms?

DE: You are normally going to use the literal constructor from your realm and throw at the point you are applying the tag, if it’s the wrong one. Normal code that is like whatever namespace object it was dot, you know? To get HTML from a template, it will throw eagerly. It wouldn’t bother with the cross-realm thing. Ultimately, it’s not useful to share those template tags across realms

SYG: I can believe that. If the trustedTypes folks think that by providing a realm dependent verse they would use that as is, and there is this corner, things would fail and that’s a big deal, then that’s fine with me.

DE: Also, to be clear, one possible usage mode would be actually using this directly in your own tag, but then you have a separate policy thing which sort of grants the branding capability to that, you know, template tag, you know, variable. And it goes from there. It doesn’t necessarily have to be all built in and decided in one kind of way. But I think it would be nice if there was a built in policy that just worked well.

SYG: Right. I think my – I don’t have an opinion on the – okay. I weakly prefer realm independent. But you shouldn’t consider my opinion on that matter. I don’t want to advance anything in the being used by trustedTypes if the point is to be used by trusted type. Get confirmation from what we decide is fine

DE: Yeah. It sounds good.

CDA: Mark?

MM: Yeah. Agree with all that, including not blocking all – whatever trusted types insist on doing. However, I do prefer that – I do think the right semantics should only trust from one’s own realm and the default in trusted realms would be the wrong default.

DE: Okay. Any more comments?

CDA: Nothing in the queue.

DE: Okay. So to dictate a conclusion: I think the committee universally understood the relevance and significance of this feature. And seems interested in working through the problems. We discussed realm dependence versus realm independence. My understanding of the motivation for realm depends was inaccurate. The goal was really about making the level of trust even higher because you’re seeing that something came from your realm. That said, because ShadowRealm callable boundaries won’t really let any of this stuff through, it’s not hard constraints. We heard very weakly held preferences from KG and SYG towards cross-realm just for simplicity. A moderate strength for the same realm. Everybody agreed either semantic is okay if needed, and the main determining factor, if they do have a strong opinion, is to meet the needs of the trustedTypes proposals. The next steps, I will go to talk to these people and see if they have a strong opinion, see whether this decision affects them and then come back and propose something for Stage 2.7 next meeting.

DE: And also, there will be a lot of attention paid to the editorial question of how this serves as a communication device for implementers to help people not get tripped up

DE: Do people agree with that conclusion?

MM: Yes.

DE: Great. Thank you.

### Speaker's Summary of Key Points

- Array.isTemplateObject is a proposal which permits the detection of original template literals in source code.
- This feature is useful in the context of Trusted Types, where in some contexts (CSP) it may make sense to trust HTML or JavaScript source more if it exists in a template literal, compared to something which is constructed later at runtime.
- Some delegates weakly hold that they would prefer Realm-indepence (for simplicity), and MM holds moderately strongly (but not enough for a block) that Realm-dependent is better

### Conclusion

- TC39 continues to understand the importance of this feature and is working to resolve the remaining small issue, which is about whether this test only returns true on same-realm template objects.
- DE will work with TT folks to learn whether one or the other alternative about Realm independence would be more useful.
- Array.isTemplateObject remains at Stage 2.

## Module sync assert for stage 2

Presenter: Jack Works (JWK)

- [proposal](https://github.com/tc39/proposal-module-sync-assert)
- (no slides)

JWK: Let me recap this proposal. The problem to solve is some code must be synchronously loaded. And if the graph accidentally becomes async, by having a new top-level await in the subgraph that was not here before, the code might break. For example, service workers. An event listener must be run at the first time and if the developer uses a native module it’s fine because top-level await is disallowed in service workers. If they are using Webpack to bundle the service worker, then they might not find this problem because now the module is not an ES module and the main code might be deferred.

JWK: And the second part is polyfill. Polyfill must be run synchronously otherwise the application might be broken. The third part for libraries authors, they may want to declare that their library as synchronous. So they won’t actually introduce a breaking change.

JWK: And the solution is simple: introduce a new directive at the module source. And if this directive appears and the subgraph of this module includes TLA, this is a linking error.

JWK: So that’s it. And there isn’t much design space for it. That’s it. Do we have a queue? Yes.

CDA: NRO?

NRO: Yes. So you mentioned that service workers already got the top-level await. This would only be useful for… compile to the passing? I think there is still value in having a way within the language to explain what service workers do. The way the current the top-level await is to – doesn’t it give a way to just like – define some point in the Modules where they can say, this is actually async? So let’s not evaluate it. But this is entirely outside of language and our language doesn’t give a way to express that. So it – I think it’s good for the language to have await to describe what the host is already doing.

JWK: Thank you.

CDA: DR?

DR: So one of the things that – when we were trying to explore this on our team and understand the value, there was this sort of problem that came up whereas a library author, you may decide to say something like I want to use a sync assertion. Right?

JWK: yes

DR: and one of your dependencies may violate that. But a downstream consumer, someone depending on the intermediate dependency, may not actually care about that synchronous assertion. They may not have an issue with asynchronous with any downstream. There is one of the reasons I am a little bit against the idea of this proposal, that someone misusing this can actually cause problems for someone depending on some library. Where they actually don’t care about synchronicity versus asynchronous. I think there’s a real problem with this kind of effecting any other dependent code.

JWK: Maybe we can remove this example so this is no longer be a main motivation. But the proposal still have the value, I think.

DRR: NRO has a response

NRO: I disagree with you on this DR. I think it’s like if the library is using assertion, this will not impact the consumers that don’t care just because the library is not using the dependency with the top-level await. So the consumers don’t actually notice. They just happen to run code that is being written in a synchronous way.

JWK: It will break the downstream users because this directive is applied on every module. So if your module is in the intermediate, and your upstream has TLA, this will break your downstream users.

DR: Right. Yeah. And I mean, I am not talking – NRO, I don’t know if this is what you meant, but I am not talking about two independent dependencies, like package A and B that have nothing too good with each. It depends on package A depends on package B and that is asynchronous. The library was trying to enforce this characteristic and downstream consumers may not care. That was – my general stance is for something like this, the end developers and user developer is one who has to make the call. Which ties into the other point that I am going to make is, you will get an error one way or the other.

So anyway, we can get back to that.

NRO: SYG go first.

SYG: Okay. I think we can get back there right now. Is the worry, DE, that a library would a – if a library only works if it is sync for whatever reason, and they put this assert, the upstream or the downstream consumers have no choice to care because the library breaks. Asynchronous including back asynchronous via a dependency.

SYG: So for that case, it does only move the timing of the error up and I guess the argument is, it’s – better DX to fail earlier. But is there a worry that a library is, I want to be synchronous. Is that the actual worry?

DR: I think, I mean, people will misuse it in some cases. Or, in the sense, there’s sort of this rift between dev time and ship time and cut consumption time where you want this as a time tool and say, yes, none of the third party dependencies actually are asynchronous. And then when you ship, you probably don’t want this assertion at all. You probably want this as purely a dev time thing which is really something that you could catch with tests.

JWK: Library authors can write this assertion in their tests?

DR: If this exists, they should probably write it in a test rather than in their code. But that said, they can just write tests, do a synchronous assertion if that fails, you know that your library is not fit to be synchronously imported.

JWK: Yes. I think that’s a teaching problem.

DR: NRO has a reply.

NRO: How do you write a test for this?

DR: I assume you would have to have some tooling that runs through it basic and asserts – there is no top-level await to builder has to run the [T*E]s. If there was an import sync or something, the runtime provided you might be table to do that.

DR: Something along those lines. Or, for example, in no JS, it’s been spored you can require in a module. So you could require it in the module itself and if that fails, then it will be because there’s a top-level await.

DE: Thank you. Yeah. I support this. I think that every use case that is reasonable that I have reason for top-level await applies to entry points and anything that is not an entry point, I don’t understand why you use it. Top-level await is a breaking change with or without this proposal so I want to – I would want to ensure that like as Jack has said, my API doesn’t change on my, from underneath me without my test failing.

CDA: SYG?

JWK: yes. It’s only for the module body. there is no meaning for ScriptBody to do anything with this assert.

SYG: Sounds good. Thanks.

CDA: Daniel?

DE: because it ties back to the point a consumer will get an error one way or the other, whether the runtime or trying to do something with a synchronously importing mechanism, or because at some point, like SYG said this earlier. Some runtime capabilities won’t be available when you first do it. Such as a service worker. So it’s – it’s really just more for explicit UX, I think. Which does make me kind of – you know, I feel very soft on the – likes, I am not sold on the utility. And then there is the hazard. So I think those are two things to keep in mind.

CDA: NRO?

NRO: So top-level await is considered to be a major change, discussions we were having around dependencies randomly at top-level await, I am not sure my position reflects that. So does anybody have any thoughts or experience on what the system actually does?

JWK: Many delegates believe that adding TLA is a breaking change. For example, in those cases, if a TLA comes in, the code will break.

NRO Okay. Thank you. Then I can – dependency, starting to use top-level await without the dependency knowing are like a bit – they are not going to happen in practice. But yeah, I also find the point this can be done at test time to be somewhat compelling.

JWK: Actually, I made this proposal because I have been hit by TLA that causes bugs. Initially, my example is for Chrome extensions. onInstall events must be called before the first event loop ends, and if you add it later, that event wouldn’t fire. After having TLA, because I already installed an extension, I don’t know that my onInstall event is already broken anymore.

NRO: There are cases where TLA should have been allowed, but it’s not. Like, not service worker in any way, but non-service worker cases.

JWK: Yes. There are non service worker use cases.

CDA: SYG?

SYG: MF brought up in Matrix and said I could bring in the queue. Given what DE said earlier about this feeling more like a dev time aid than a ship time thing, to the extent that you probably shouldn’t ship this at all, DE brought up the point in Matrix, is this something that the tools can just do? If it’s to aid in writing tests and catching bugs earlier, they could conceivably just do this check already, without there being a standardized directive.

JWK: You mean a non-standardized directive?

SYG: Yeah.

JWK: Then, for example, how should we implement it, for example, in Node.JS? Do we need to touch the V8 to implement this?

SYG: No. I think the – by tooling, I think usually when we talk about tooling, we mean the ahead of time tools that does transpilation, that does packing, bundling, that kind of thing.

JWK: Okay. Here I wrote, a possible solution is to let the community develop their own linter and the bundler level bans. but each tool needs it’s own convention to do this. Adding it can be a portable way, also for the environments that does not have a bundle step.

JWK: For example, let’s say we’re writing native ES Modules on browsers. You have some dependencies from CDN that usually cannot be linted by linters. If CDN sourced modules adding TLA, linter may not catch it.

SYG: Yes. I am not saying that – I’m sorry. I am not asking if doing it in tools ahead-of-time tools covers 100% of the use cases, but that is the main value add still there, if you do it via tools? If folks believe that the dev time thing rather than a ship time thing: yes, it’s true, if you are in a mode where you are like writing things and then loading them directly in the browser and you’re just like loading Modules from elsewhere, and you also want your dev time tools to be available at that time, then no. Then the other – the proposal of doing this via tools would not cover that case. But it is my impression that people do not develop that way.

CDA: Okay. KM?

KM: I guess on that same point, right, like if you’re – if someone changing the top-level await and you’re loading from a CDN breaks your site, wouldn’t that break your site for your customers independently of this feature? So like the feature not – making you I guess always break? Which maybe is good?

KM: It might be fine to add a top-level await. But maybe not. And now they just sort of all break which feels almost worse.

JWK: Hmmm yes, so my conterexample doesn't sound so impressive. And to Daniel’s question, no, there is no specification at current time – oh. Is it a requirement for Stage 2? Sorry I forgot that.

CDA: Yes. Initial spec text is – a requirement for Stage 2. I am just…

CDA: Yes. Initial spec text. Place holders and to do are – but initial spec text –

JWK: I want to ask if I write spec text, can I get Stage 2 today? Because if people thinking it’s not, I don’t want to spend time on writing spec.

CDA: NRO?

NRO I like this proposal, but given the opinions, it’s hard today. Like, even if nobody would express block this is not ready for Stage 2

CDA: MF

MF: The combination of you will get an error anyway, and this can be done in tooling for better DX, is a compelling argument against doing this proposal. I wouldn’t want to discourage you from pursuing this and you may not need to change the proposal, but make a better argument in favor of it.

JWK: I think the current one is the best I can think of. If this is not enough, maybe I should just try to open a PR on Webpack or other tools.

CDA: Dan?

DE: Well, I am kind of on the fence about the proposal. Mostly for the first of the reasons that Daniel Rosenwasser gave about how it sort of becomes a composability issue. It really re-enforces inserting TLA is in for a major change and for everybody depends on you, I am not sure if that has to be the case. Though, I understand that a lot of people believe it is.

DE: What I wanted to disagree with is the view that if something is kind of a tooling concern, and it’s out of scope for what we’re doing here in committee, I think a huge amount of what TC39 has accomplished over the last ten years has been to provide standards that unify the tooling ecosystem. And I think it’s been very helpful that we have browsers and tooling aligned going towards the same API.

DE: So I wouldn’t – I would like to continue the conversation that SYG started, how we want this relationship to work. But I wouldn’t want to just have an established thing of, oh, that’s tooling concern. We’re going to consider it not a TC39 thing. Because I think it would be harmful to our design process.

CDA: SYG?

SYG: Yeah. To clarify, the thing I started is not the conclusion for something that can be done in tools. The conclusion I don’t want people to draw from that, is that it shouldn't be done as part of the language as or part of TC39, specifically the conversation I started earlier is about things that ought to have direct execution support. That is an organized question in value to standardizing something, so there is that central coordination among tools and browsers.

JWK: Okay. So I will write a spec and and come back next time.

### Speaker's Summary of Key Points

- Try to advance

### Conclusion

- Engines don’t believe it is useful enough to implement it in the browser, looks like it will be better in the toolings
- No spec so not qualified for stage 2. May come back after there is a spec.

## bringing back Error.isError, for stage 1 or 2 (or even 2.7)

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/ljharb/proposal-is-error)
- (no slides)

JHD: All right. So I originally presented this isError proposal looks like nine, eight years ago. Something like that. Essentially before ES6, 2015, I raised the issue that there's a lot of code on the web this depends on it at the time and still depends on object prototype `toString` being robust, this gives you the internal class slot of the object. That’s what it was called at the time. And the addition of `Symbol.toStringTag` breaks that. The committee was smaller and that group of folks' reaction to brand checking was that it was “icky”; that nobody should do that; we don’t like it.

JHD: As a result, the creative alternative suggested was that, well, all the builtins have prototype methods or static methods that do brand checking in various ways - you can use one of those and get your brand check.

JHD: And so I did. And I made a ton of predicates that I published that do the brand check and so I don’t have to reimplement that logic in a bunch of places, and that added lots of weight to the internet - but that was the path to getting that check.

JHD: We have continued for all new things added, to include a way to do brand checking in that spirit. However, Error was overlooked. It turns out that that was the only builtin that didn’t have a way to brand check the instances. It has a slot, but nothing checks it.

JHD: And so I made this `Error.isError` proposal. It’s very simple - just like `Array.isArray` as you’d think, and it checks the argument. Just like Array.isArray, it pierces Proxies - I am not attached to that and prefer not to do that, but I was brand new to the committee and I was just swapping Array with Error.

JHD: So the compromise I went with when this proposal was effectively rejected. I was going to pursue Error stacks. And it provides me the mechanism while providing a lot of value in standardizing `.stack`.

JHD: However, that proposal stalled because I had focussed on standardizing the structure and schema, but not the contents themselves, and I got unexpected feedback that the proposal would not advance without also specifying the contents, and I had not had the time to boil the ocean and do that.

JHD: And it was recently suggested by a number of folks, in the TG3 calls, that perhaps I should bring back this proposal because the committee may be less allergic to brand checking than nine years ago. What didn’t exist at the time was `structuredClone` - something that exists in the web and node, and we’re hoping to eventually pull the spec into TC39 - serializes error types and uses – I don’t believe the actual check uses brand checks. But I need to know if I have one of the real error types if I want to get the right behavior. And I can’t do that in a cross-realm way. The additional motivation still exists, which includes debugging and also RunKit, which is on every npm package page. You can click a link and try out the package in a repl. That serializes across realms and they at the time, and still, want to know for sure if this thing is a built in error or not, So they can serialize things in the right way and replicate the error object on the other side in the right way and so on.

JHD: So I wanted to hopefully get, you know, the committee’s thoughts on this, if you are amenable, given that I have already initial spec text my hope is (and that the proxy stuff would likely be the controversial part; I will just defer to whatever the committee wants on that) - my hope is I could get Stage 2 and bring this proposal back and move forward.

CDA: NRO?

NRO: So I know this is like not – is there a way to do this brand check? can you clone an object and then you once it’s cloned to have the error from the current trial so you clone it and do the prototype?

JHD: So I haven’t explored it deeply enough to answer that question right now. My suspicion is that it doesn’t do that. And that on the incoming side, it takes something and it seems like an error, it treats it like one. But on the receiving side, I believe – this includes transferring to a worker and stuff like that. I believe that the clone will be a real error object, similar to the one on the other side, whether the input was real or not.

KG: It does actually – `structuredClone` is a weird algorithm. But it checks the slot. And `structuredClone` doesn’t generally preserve prototypes. It preserves a specific list of brands that it knows about. And it checks for each of the brands in turn, and if this brand is present, then it serializes as "this is an Error" or "a Map" or whatever. And then on the other side it constructs that realm’s Map. Otherwise, there’s no preservation of prototypes, only with these internal slots.

JHD: Thank you.

NRO: It gives you an object with an error prototype? Even though it has an internal slot?

KG: I believe that is true.

NRO: I am not against this proposal. But the only reason for this is to have a way to check if something is an error and it doesn’t matter how easy or difficult it is, like if we don’t care about ergonomics, we might have similar code, and given there were discussion on the clone, I don’t know what is the status of that. But we might consider just going to that.

JHD: So if structuredCloning had no side effects, and if it was in the spec and normatively required, then I would agree, that would be an unergonomic and annoying, but sufficient, alternative. But it does have side effects. You can’t just throw something into it. And like it will – I believe it transfers buffers and things like that as well and it reads properties. And even if we move the spec into TC39 I believe the intention is to have it be normative optional, but I am not 100% sure.

NRO: Okay. I retract my rejection.

CDA: MM?

MM: So the – first of all, I support this at Stage 1 because Stage 1 is sufficiently asmr amore us in solving the problem. I think you should solve the problem I don’t support at Stage 2 in the current form because of the specifics of the API, it violates the rule, it’s checking an internal slot with a non-`this` argument.

MM: The stack – the stack test, from our proposal, which by the way I do want to see advance, I am interested to advance and find ways not to boil the ocean on it, but the important thing about that is that the inherent stack excess property is inherited from error.prototype. If this was an isError that was also inherited from error.prototype, and tested its this rather than its argument, obviously you could still turn that into a reliable brand check if you wanted by getting the inherited thing and replying it directly.

MM: But the thing about doing it this way, doing it as inherited is the normal use case where you want to see is this – you know, where you are – you’re not – unlike is template object, the relevant question is no is with one of my errors, but is this an error? And if it’s just – so if you have a proxy for an error from another realm, whether it’s a direct recommendation realm or ShadowRealm, the dot stack works because the fetching of the property also goes through the membrane. Likewise, if it’s inherited, a .isError open () would work because the lookup again goes through the membrane.

CDA: Do we lose – mark, I think you cut out.

MM: No. I am done

JHD: Yeah. I think it’s fine if it’s a prototype method. It could even be an accessor if we want, although I prefer to be a regular function. But mirroring array.array there is a precedent that starts with is, makes an argument which it beforehand checks.

KG: I don’t see how this could work as a prototype method. Because the point is that someone has handed you an object you want to check if it’s an error. Calling the isError property from that object is not a way to do that.

MM: So let’s think about this in terms of how it would have been built on stack. If we had stack in the language, the normal use of the stack is just if it seemed like an error and look up the stack and you get a stack, you’re happy.

MM: We have already made a policy decision that we discussed , especially in the context of the set Intrinsics, that initial code can be replaced anyway. There’s insecurity against initial code. So the question; what is the purpose of asking the question? If the question is being asked casually, does this claim to be an error? Well, instanceof doesn’t work cross-realm. If you’re asking casually in a multi realm situation, the instance question is the right way to ask it. If you are trying to ask the question in such a way that you’re secure against being spoofed, then you’re all – then is a membrane between you and another realm a spoofing attack such that it should fail the test?

MM: In which case we have a discussion on where we drew the line of membrane transparency. Which we have drawn the line, and KG respected it with regard to sets, is that you check internal slots on this, and you use behavior of arguments.

KG: Right. But that only works because you expect that the way people are using the method is by calling the new method on the object. If this was always called with `error.prototype.isError.call`, that doesn't help.

MM: It depends on what your threat model is for what the purpose for which you are asking the question. In the normal threat model that Google works with, that Chrome works with, you’re assuming that there’s – you know, Chrome generally makes arguments from assuming that there’s no untrusted neutral suspicion within a realm. And they often assume no evaluation in realms when you’re doing security checks –

KG: You have misunderstood. I am not talking about a threat model. I am talking about practical membrane transparency. And what I have understood practical membrane transparency to mean is if someone is using an object in the normal way, then they will not notice if you put the proxy there. And what that means is that the language can’t look up slots on arguments because you are not in a position to put a membrane there. But the proposal adds error.prototype.isError and probably no one ever does `randomObject.isError()` because you can only call that method in a situation where you already know that the thing you have is probably an error.

MM: I’m sorry. Remember that we very? Mark in the language. There might not even is error method if you don’t know the object, you solve that by doing a question mark dot is error?

CDA: I want to note we have limited time left and quite a long queue.

MM: I will just yield saying, I am happy with this at Stage 1, but we need to settle this issuing before with Stage 2

JHD: That’s fine. The policy will checking slots on the arguments, that’s not for static methods and I called that out during set methods this plenary

MM: Well, that certainly not – that certainly does not satisfy my reasons for the policy.

JHD: Yeah. That’s fine. We can discuss that before going for Stage 2.

CDA: NRO?

NRO: mark already said about casually asking. The second one is, if worried about true, you cannot call a random object because it might not exist…

CDA: MF?

MF: I will try to make this fast since we’re running out of time. First, I would like to reaffirm my position from earlier that I do think brand checking is icky and you shouldn't do it. With that being said, I don't think it should be impossible to do. I just think that we should try to avoid encouraging it as much as possible, which means I support stage one for this proposal, but I do want to explore other ways that we can avoid having something so appealing as `isError` that people might want to reach for. I do hope that we move forward with the error stacks proposals in the future, and if that could be used as an alternative way to solve this problem, we could solve two problems at once, that would be great. I'll end it there because we're low on time.

CDA: DE?

DE: Could we go over use cases again? Because that could kind of help us understand this threat model question that MM asked

JHD: My use cases are debugging. I want to know exactly what I have to I can figure out what the figure is. I have wasted many hours over my career discerning between things passing to API that are the [REL] thing I suspect versus thing that looks like it.

JHD: So that’s a big thing of mine. And then I mentioned the run kit use case. They are serializing a errors across realms for the the sandbox in the browser and they want – they are trying to display accurate information to the user so they can make a real error on the other side

DE: Function overloading, use and react or something, you have a function that does different things based on the arguments, but for all 3 of these, how much do they need like really, really to have integrity?

JHD: I mean, the – it’s a fair question that if something can pretend in all the observable ways it’s different than a thing, why treat it as a thing. The platforms treat them differently in terms of stack praise traces. If you throw a real error it has different – call type – call site display behavior in node than if you throw something that is not an error.

JHD: If you throw an object that is pretending to be an error, it wouldn’t look as helpful and point to the line of code the way it will if you throw an actual error. There are ways to observe it for the human even if they are practical for the human. For the human, it does need to have integrity to have the right answer or figure out what needs to be fixed.

DE: thanks. That’s helpful.

CDA: SYG?.

SYG: But that sounds like you care about a different thing whether thing is a refreshed error? Can you get stack traces

JHD: I want to know what it is really. errors are just the one item that is built into the language that I can’t answer that question for.

SYG: Why do you care about that?

JHD: Because in order to understand the state of my promise and the purchase dense of runtime values and what mistakes programmers could have made me or anyone else who has touched the stack, the better –

SYG: I’m trying to chase this chain of whys into – until it bottoms out to something. You would have written one – taken one pass in your code versus another path. Chase to the end of where you would use the real erroneous to distinguish what to do

JHD: If I know it’s a real range error [..] but if I don’t know what it is, looking at a stack trace and I have just described it, it could be something else. There are libraries that produce things that aren’t real errors but lack real errors. It happens in practice. There’s Chrome extensions that people use in the random browsers that do that. The output ends up in the logs and being able to check stuff helps.

SYG: I don’t understand how the log thing would help if it’s a predicate that you have to evaluate comedy you would have to have a runtime – runtime get handle on this error thing to check if it is a real error. If it’s a tack trace, any user error that is then can be print – made to print just like RangeError.

JHD: All of the JavaScript runtime tooling that intercepts for logging has the ability to introspect the value. It can check whether it’s a real error. Node has `util.inspect` - they use C++ to get this because it’s not possible in JavaScript.

CDA: EAO?

EAO: the concerns about potentially overlapping implementation with custom matchers, should proceed on the channel. I am not worried about the specific date, I don’t think stage 2 is appropriate, but Stage 1 would be fine.

CDA: SYG?

SYG: This is a separate thing. I am somewhat worried about my next two items. I am somewhat worried about the ease of misuse possibilities on the web in that if you look at how DOMException is – for those not familiar, DOMException is not currently not a real error. In the sense that it is not like created with all the internal slots of a ECMA262 error. Instead, there’s some things – the HTML spec that says, DOMException and other things subclassing from DOMException must have 262 error.prototype on its prototype chain and if there are additional facilities granted to errors like stack traces, that DOMExceptions should get them as well. So the way this is hooked up currently is that it’s via prototype chains. From the user perspective, this seems fine. By adding a brand check, I am worried about the possibility of how easy it is to misuse if you are a JavaScript programmer on the web and you want to care if something is a real error, should that return true or if you also or the DOMException? Depending on what you want that answer to be, that may have implications on then does it mean the DOMExceptions must be like layout representationally literal subclasses of errors or done by host hooks and have implications that I want to think through as well? Like I I think we can’t just basically focus on is it a real error in the 262 sense.

JHD: So I think the rubric I would try to think about to answer that question for myself would be, do DOMExceptions – for all the places where errors have special behavior, do DOMExceptions have any special behavior, whether that is structuredClone or sticking stuff into the DOM or sync or whatever, things like that. And if they do have similar special behavior, I might expect to return the – the predicate return true. If they don’t, if I can just make my own object that successfully pretends to be a DOMException they are touch, it doesn’t matter. But like I don’t think that is a requirement. If those other things I mentioned…

SYG: In the sense that a mental module that users have, I want to care about exceptions that are thrown by host API – or platform APIs, whether that is 262 or HTML if we ship the predicate, that the host provides, then that adds a hazard misuse. I also want to call out that the way in which structuredClone cares about errors and gives special errors is immaterial, it cares because it must create the right thing on the other side. It doesn’t care about it for any behavior other than recreating the thing this it was given. So I think it is not that important, that the structuredClone itself has brand checks on errors.

JHD: Okay. I don’t have a strong opinion about whether structuredClones should be brand checking or not. Kevin says, it is. But like I – that’s fine either way. Yeah.

CDA: There is a clarifying question from Mark. I will note we are less than 1 minutes left in today. Today’s meeting.

MM: All right. Yeah. Probably for Shu. Do DOMExceptions have stacks?

SYG: I haven’t personally checked. On the dev tools console, the spec says they ought to. There’s a line that says additional in an implementation gives special power, you should expose those.

JHD: That special power, I think is the same rubric that would apply. It sounds like I am going to ask for consensus for Stage 1. And I will unarchive and transfer the repo and have further discussions with SYG and MM and whoever has expressed concern before I come back for Stage 2. Is there consensus for Stage 1?

WH: I support Stage 1.

JHD: Thank you. WH. And MM is on the queue as well. Anyone else? Any objections? Okay. Thank you.

CDA: All right. We are ending right on time, more or less. We will see everyone tomorrow. Thank you.

### Speaker's Summary of Key Points

Strong support for stage 1; before stage 2, champion needs to resolve concerns particularly about DOM exceptions categorization (SYG), as well as internal slot access (MM).

### Conclusion

Proposal has stage 1.
