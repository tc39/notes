# 26 October, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Bradford C. Smith    | BSH            | Google             |
| Jordan Harband       | JHD            | Coinbase           |
| Frank Yung-Fong Tang | FYT            | Google             |
| Waldemar Horwat      | WH             | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Michael Saboff       | MLS            | Apple              |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Ashley Claymore      | ACE            | Bloomberg          |
| Istvan Sebestyen     | IS             | Ecma Int.          |
| Jack Works           | JWK            | Sujitech           |
| Yulia Startsev       | YSV            | Mozilla            |

## Intl Locale Info update

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-locale-info)
- [slides](https://docs.google.com/presentation/d/1-Jhck0M2zhkiWsSxTX_bTik7e5072Xw87f_KOVSbfs0)

FYT: My name is Frank Tang. My Chinese name is (Chinese name). I work for Google and is currently on the V8's Ecma 402 implementation. Also ICU, which I think is a foundation that is used for Mozilla and V8's using for ecma 402 implementation. And today, we're going to talk about a update about a Intl local info API, which is already in stage 3 and I will just give some update. So, there are no request for stage events, One. So, obviously Pi, this is is a motivation of these APIs, a proposal to expose Locale information such as the week date first day in week, weekend information which actually changes not just a star in and we'll show you the issue a face recently and our cycle used in the Locale and we used to deal with measuring system. We latter removed it before we're reached stage 3. So that was history. And this year in January it advanced to stage 2 and April to stage 3, and we have some experimental implementation in V8 and Mozilla but nobody has turned it on for general user yet.

FYT: So, so I don't give you some update after we be in stage 3. There are some implementation and we receive some feedback and there are some discussion in TG2 about the required changes. There are a couple of discussions in TG2 we believe that it shouldn't change although their requires coming in but also three of them, we think it should be changed. Did you Remember supporting the change that. And today, I'm going to talk about and hopefully we can get you a consensus to retrofit agree with that. That there are also issue we need a general input which is issue. Bring up this request. It's not only impacting this particular API. I think there's a general issue about ecma-402 about ordering returned from a list. SFC I think is going to talk about one hour from now about that issue. So we will leave that you have to be addressed in general first before we decide how to deal that, whether we continue with this current spec or have to change it to reflect that decision.

FYT: So, let's go through this red area that the three of the PR that proposed and the change and talk about that. So, the first one is this. So we originally have a spec that we after we get the localel, but stay there a line say we've got, it went to Hebrew Cal, and we ask for week info, and it will show us the first day of week and minimum days half a week. I also had a weekend start and weekend days and there's numbers indicating which day. One of the issue Mozilla Andrea from Mozilla figured out. is that in Burnai their weekends interesting because I think a lot of country when they have mostly Christian background and the coach old days, tend to have weekend from Saturday to Sunday and a lot of Muslim country they have prayer then Friday, so they allow pain, they have Friday and the Saturday is off. I burn. I actually have one third of Christian Community and one third Muslim Community. So then they actually have this weekend. We're not sure whether that weekends, really appropriate name for that, but it's basically the government off on Friday and Sunday, but they work from Monday to Thursday and also Saturday, so it's not continuous. Therefore it is a little bit hard to represent that with a start and end. So after we carefully look at that, somehow the CLDR data currently do not have time formation. But this issue is widely understood in there and also some particular province in Malaysia, I believe and also India have something like that. It's only local to a particular state in the country or a province in the country beside Burnai. so they have that issue. So maybe one day we need to reflect that of all that. Therefore we thing seems to this is still just in stage three of those who prelate. And can we each want to have a better way to represent it. The proposal is a change from weekend start and end with two number in that particular object one field called "weekend" which is an array and that array will just show that which particular day is off. Right? So, for example, if some country have one day, weekend, when I was a kid in Taiwan only Sundays off then you only have seven there, maybe Sunday, you know, some European country will have three days. We can't they have put three number there. We can't evolve with that in this way that (?). Weekend could be five and seven to indicate a is Friday off and Sunday off, off, but not Saturday.

FYT: So that's one of the change we discussed in order to reflect the change. So this is a new spec. The red area is the one who chose, which would that change used to be too thin and there too. each one of those are integer now become an array of integer, which actually this stage is return a list of integer and next page we'll show we changed this to an array? So here is the change. We get this from the weekend and we change it to create an array from the list and then we return. So this is the first change, PR 44 to responds to Andrea's finding of the need of supporting non-continuous weekend and TG2 discuss that we think this is a right thing to do. That was reported and we hope TC39 members can also support or reach consensus of adopting this.

FYT: The second part, which is pretty trivial. we saw how in the before stage 3, we didn't adding to appendix A - 402 has an appendix about implementation dependent behavior - the new objects. We somehow missed out who we didn't add it there for now which has been amended it is part to have the whatever the item. That should be implementation-dependent. So this is attacked by adding in the green area. Of course it is. There's appendix is have a larger party, which it doesn't show anything that we didn't change. This is the car. We change the Locale. So that's the second PR we change in PR 38.

FYT: So the other thing is a trivial one. We just didn't show the text here, is that a juror requires us with it? Would you know that the identifier we return our canonicalized? Basically, we just in a spectacular we just added canonical that works before the identifier to make sure when we returned the identifier, I think we assumed that it was canonical and I think Andrea wanted to try to want to make sure is more explicit somehow if some implementation internally have a some uncommon identifier it should be converted to a canonical identifier. So we make it clear. That is the case. But I didn't show the spec text here. Here is basically adding a word canonical in several places.

FYT: so, one of the issue that we talked about, we cannot reach consensus. And is that is if somehow the Unicode extension - sorry, we reach the consensus that would not going to change it. If a calendar, whether that should impact the week info to exclusive and a decision. We're in the You to discuss that all the Unicode extension that Locale will have the effect that we don't want to make it explicit A which kind of part of making impacting the week info in the all possible. Sometimes they may be the same but all possible extension may change that. So that will be have leave us some freedom in the future. Maybe, in some cases, we do need to adding that right now is also only ISO 8601, calendar have such an impact.

FYT: There are other issues that we somehow have not been able to address which still under discussion and work on that one is someone bring out about Direction and textInfo. What will happen if they are vertical writing system, right? So we know Mongolia which script even written. so, let's create, you know, currently Mungo is using Mongolia written Surly script, but inner Mongolia in China, actually, they have Mongolia script. Sorry, Mongolia written, Mongolian script, and then they have to direction which are vertical or if Chinese or Japanese Korean and Tibetan. If they are written in vertical how to deal with the tax directionality. thing we Is kind of additional feature requires, I originally, where we put the text over there where you only eat and to support our vertical. sorry, horizontal line layout thing issue, but they are some discussion about that whether we should address it or not is still under discussion. The other is whether we do need to define the behavior where no time zone is used within a region. And should we do with that? That is tried to bulletproof the spec and we haven't resolved that issue yet is kind of edge cases, but we I think we probably need to do with it before the event stage four what we have and be able to address it yet.

FYT: So here is activity in different implemtation. As I mentioned V8 have some prototype or should have a little flag submission. We haven't shared the week info thing, but it shouldn't be an issue because I see you API support that, although the CLDR data may not that for provide Mozilla and Safari, both have some issue and I think they have patches under the flag. I don't think they anyone turned it on yet. Test 262 has some tests, but currently I don't think we see any polyfill for this feature. So if someone willing to work on polyfill, this will be a great help to let us know about this.

FYT: So, a particular, thank Shane and ZB to enrich our for the review and many other member to supporting us, but to get Andrea and he always does a very careful review at the invitation of Missoula. So my request for TC39, I have is basically two part. one is retrospectively, approve of the 3 PR which one is changing the weekend info structure from a weekend start weekend and to integer field to a weekend, which will turn a array of integer and also add an appendix a and also just add the word canonical to some of the identifiers to denote. It's just you know that the first request.

FYT: the second is that if you can join us on our discussion one hour from now, is a 45 minutes from now and discuss the guideline about order of return collation arrays. Any question, comments?

RPR: There is no one on the queue at the moment. Would anyone like to go on the queue? Okay, so no questions or comments so far.

FYT: so, if there are no comment or question. My request is that can we have consensus of the retrospectively approve of those 3 PRs to make them official?

USA: Thank you for your work and It's really cool to hear about all these things.

RPR: Okay, so it looks like we're on track to have the retrospective approval that you are asking for. TCN is also supporting, "+1 thanks for all this work". Okay, so you're happy, you have approval Frank.

FYT: Yep. Thank you. Yeah, I don't have probably scheduled too much time original. I think, 20 minutes probably shouldn't have changed it to 30.

RPR: Anything more you'd like to - ?

FYT: Thank you for your time, Frank.

### Conclusion/Resolution

Consensus on all three PRs:

- changing `weekend` to a list
- adding new items to 402 Annex A
- canonicalizing identifiers

## JSON.parse source text access update

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-json-parse-with-source)
- [slides](https://docs.google.com/presentation/d/1Bz2OwJxvlqSgKK3cCRnAhgn3nhF15SS6iDtNOIPwun4/edit?usp=sharing)

RGN: So this was first presented in I think 2019. It advanced about a year ago, and we're back for an update. So what we're doing here is addressing a couple of different issues. Number one and primarily that parsing JSON is lossy, we can see, particularly when it comes to digits, that JSON has arbitrary-precision while JavaScript most certainly does not. And there's no indication in code of that lossiness, when you have a particularly long big integer string it gets rounded and when you have escape sequences in the text, whether expected or unexpected, they just come into the input already interpreted, even with a reviver function. And therefore, there's no way to know what the relationship is between the source text and the input that is received.

RGN: As a secondary concern, we also have this absence of context where the object that comes into the reviver is not provided with location in the source text. So in some cases, You might receive something that represents typed data, or it might just coincidentally look like it represents typed data. And if the reviver function is going to operate on it, it has no way of knowing whether or not that is appropriate, because it doesn't know where in the object structure the value appeared.

RGN: And then as a tertiary concern, the output for round-tripping does not provide a mechanism to emit the full set of JSON. So when you want to output for instance, a big integer you have no way of doing it as a numeric sequence of digits, you have to do an object or a string. And there's no way to just operate numerically with digits.

RGN: So this proposal which is currently at stage two aims to address that by means of additional arguments to the reviver function and the replacer function. For the reviver, having access to the raw Source allows for lossless parsing and a little bit more intelligent reviving where you can actually take in a sequence of digits, for instance, and return into the operating program, a bigint or anything else that seems appropriate. On the replacer side similarly, we need to provide some value that allows for outputting valid but raw text that can enter the JSON similar to what came out of it in order to facilitate interchange.

RGN: So this is not ready for advancement yet. I'm hoping that at the next meeting, it will be. and this meeting we have an opportunity to discuss a few of the open issues.

RGN: Just to run through them really quickly. We had one, the biggest one for advancement is just figuring out exactly what the spec text machinery is going to look like for how to reference parse nodes that have already been kind of consumed. We had an open question about exposing ancestor keys that the incubator meeting rejected unless a use case presents itself. This would be for the second slide that I presented where we wanted to know where in the object structure are we? So, for the meantime, that's off the table, but it could come back. And then the two that are relevant today, most relevant for this meeting is exposing position and including serialization. So exposing position, this is similar to what is available in regular expression processing. We've got an index and an input that could be provided to say, for instance, that if there is an issue with the value that is being consumed. Can we provide meaningful output such as this type error where we say there's precision loss at a particular index in the input. And that's straightforward to do. There's a question of whether or not the use cases are sufficient enough. This is another one where the incubator came down against it. And it was after that point, that I think someone from the community said, no, I actually have a use case, I can use this. So it's unclear whether or not it'll make it in. I'm actually going to pause right here just to check the queue for input.

RPR: There is no one on the queue.

RGN: Okay, leaving this for now then and moving on. Serialization was deemed as an important use case. It was actually originally absent, but round-tripping was so compelling that it got added to the proposal. And it was since that time actually, just in the past few days that we have a bikeshed issue number, 18 opened up for how to do it. We've got a couple possibilities that have already been identified. The lower one was actually just put in as a placeholder where the replacer function could be provided with, for instance, a one time use symbol and then if the output value is an object and includes that symbol as a property key then the corresponding string becomes the raw text. Another possibility that you see above here is providing it essentially a one time use function. Where if the return value is the output of that function. Then that is serialized to a string. It becomes the raw text. And I think there, if we go with this, with this top point, of course, the question is, what does that output value look like? Is it a special symbol? Is it an object with an internal slot that indicates the particular JSON.stringify invocation, it corresponds with? Or it something else altogether. And I'm going to pause here again because this is the bulk of the conversation that I'm looking for in this meeting. There is a topic of the queue. So take it away in Mathieu.

MAH: Yeah, so one issue I raised on GitHub with outputting raw JSON like this. We should make sure that the value returned parses as valid JSON, so that the produced output cannot be changed unexpectedly, e.g. you cannot insert new keys or something like that this way. You cannot have a new, For example, close curly, start a new property, then open curly to inject a new property.

RGN: Yes. Yes. I completely agree. This is not a mechanism for putting arbitrary content into the output, to the output sequence. It is specifically a single value and the internal function that receives the output of the replacer must absolutely validate that it is in fact a single JSON value with valid formatting. No matter which solution we go with when it comes to the bikeshedding. That is definitely going to be a requirement. I don't have spec text for the serialization site yet. But yeah, I don't think that's even negotiable. It's just absolutely required that a single value in becomes a single value out.

SYG: (regarding the output of the raw function) Yeah, so it's an exotic thing? Is that what it is?

RGN: I think that if we go with the function approach, the return value is going to have to be exotic in some way, yes. It can't return just a string because the replacer function returning just a string is already subject to functional Behavior, which is you know, that string that it outputs becomes a JSON string, which is not what we're looking for here. And likewise for every other language value that can already be returned. There's already defined behavior. So we need to introduce something in the spec in order to make this work, where the value returned by this function would have to be distinguishable from everything that is currently returnable, from every current language value, which I suspect is going to work out as internal slots that we would probably just mark it in that way. Not just that it is special, but also that it is special to this particular invocation of JSON.stringify so that the function can't be held on to and reused in a later invocation, which would be - if that were possible. I think it would have some undesirable security properties.

SYG: What is the issue if you held on to it?

RGN: that if you held on to it then a later independent invocation of JSON stringify could replace content in a way that seems inappropriate to me. I guess that's worth discussing, whether or not it would be appropriate to have this raw function, for instance, or the symbol or you know, whatever, shared across uses of JSON.stringify, such that any time you got your hands on it you could always then use it to produce raw output.

SYG: but you said earlier that regardless of whichever route we take here that there is additional validation for the validity of the output JSON string.

RGN: Yes. Yeah, no matter what it's valid.

SYG: So it's like a feels weird kind of thing to you. Or is there an actual security issue?

RGN: It's more like a feels weird thing and I guess I'm interested if that feeling is shared by others or not, because it certainly would be simpler by a little bit if this mechanism were not one time use. But especially if you're handing code between libraries, this capability might be relevant, might be a thing that is appropriate to protect. So it's possible to do so, but it may not be important to do so

SYG: And in comparison with the with special simple symbol alternative, you were thinking you would mint a new symbol for each invocation of stringify?

RGN: I'm going to open an issue to actually make that question explicit. But yes, like the whether - is this a readily available capability or is this one time use?

SYG: Okay, let me think on this and we can move on with the queue.

MF: So I'm not really in favor of having raw produce kind of special objects. Like if we introduced a new internal slot or something. I just think that's unnecessary language complexity that we're adding. I think that the symbol approach gets us everything we need here. We can have a function helper that just constructs an object with a symbol that kind of has the body looking like here at your lower example, I think. I would like to hear from -- because I prefer the symbol based approach, I would like to hear from implementers if there's any implementation burden there for constructing fresh symbols with each invocation. I prefer fresh symbols with each invocation, especially when considering nested JSON.stringify calls. Since we just don't want them to be related at all. It seems like the most straightforward way to do that. So if any implementers have opinions about that, I'd like to get one on the queue.

RGN: It sounds like you probably have a similar position to me. You can't articulate - well, can you articulate exactly why the one-time use approach seems better? Or is it just kind of a gut feeling?

MF: Like symbols being fresh for every invocation of this callback? Yeah. It's kind of just a gut feeling. I'm trying to avoid patterns where somebody where the symbol escapes the callback, and then people use and construct objects and pass those around and don't realize it has the symbol on it. That doesn't have to be fresh for every invocation of the callback, but it would have to be fresh for every invocation of stringify at least. So at the very least, I would like to go that far. And if there's no extra cost to every invocation, I think that would be even less risk of things like that.

RGN: Right. Yeah, so and those are the three options. It's every invocation of stringify, every invocation of the callback, or it's just a global capability. That is, you know, shared across everything.

MF: Yeah, and I'd really rather not like the last one.

SYG: Michael, could you expand on why? You said you rather not but I don't really quite understand what the issue is.

MF: of the three options. I have identified an issue with that final option. That issue was the way the symbol being used on not during an invocation of this callback and being put on objects and without people realizing that it's on those objects. They participate in JSON stringify and unexpected behavior happens for these developers. It's just a pattern we don't want to see. I don't think there's any --

SYG: What is the expected Behavior? You're envisioning because it only applies to report as it only applies in the context of stringify, to begin with right on. How did they misuse it?

MF: So, instead of getting a behavior where the normal JSON stringify algorithm is applied to that object, it bypasses, it uses the field. The field where the symbol is installed.

RGN: it's the pattern there would be you know, objects could be constructed which will serialize as an entirely different object and If that's passed between code, that was authored by different parties than is not clear from intra-property enumeration that this Behavior will be the case. And that seems concerning. I don't, I don't know if I can put anything stronger on it than “concerning”.

SYG: Yeah, I see the argument. I don't find it compelling, but I think I see the argument, I guess you want the author to always, for each invocation of stringify, you want the author to type out intent by having to use the new raw tag?

MF: Yes. Yes. I want the intent expressed in this callback.

SYG: I don't. Okay, so where is not compelling to me as I don't see why it's important to really Express intent for each invocation of stringify. Like I don't the possible (?) that's very compelling. Interesting to hear other thoughts because I seem to be the odd one out so far.

MF: How would you express the intent? How would you force that the intent is expressed without having some sort of freshness to the symbol?

SYG: I mean, if it's not fresh you would use it as if it were fresh but you can just keep a function around. Or maybe we even expose the symbol directly, so that you write these replacers that could be used across multiple invocations of stringify.

MF: Im not concerned about somebody keeping the function around,

SYG: aving a function that returns an object with that symbol, This Global special symbol, seems intent enough for me. I don't know why you need to type it in new each time. He's that mean, invite me.

MF: Authors intent that maybe somebody else's else's intention and

SYG: so but you have to call this function, right the author, put like you stop to pass this function that that creates this object with the tag into stringify like Like that seems intent enough for me. fact that someone was unable to didn't know for example, that transitively, the function of the passing of stringify ultimately create some objects with this tag. Like that seems not a problem to me. They should have known that I guess if they thought this was an issue. Like it happened to calling and if you don't know, that doesn't seem right for the language to restricted in that sense.

MF: It also doesn't seem right for the language to burden you with having to ensure that every function that you call where the value is going to be used in this context doesn't have this symbol. It seems like it should always be the author of the JSON stringify call that should be responsible for adding that symbol and not for ensuring other things don't have it.

SYG: I did not propose the language ensure any of that. I don't understand.

MF: I feel like we're getting on a tangent.

RGN: Yeah, maybe a little bit. So as I said, I will open an issue for this. And I think the biggest question is going to be, is there. Is there a problem with minting new symbols, for instance, on every invocation of stringify? Because if there is not, if that is acceptable it is going to be less surprising because code like they've got in the bottom here would never serialize this object in a different fashion than expected. Because this new capability isn't used and so the behavior here would always match current behavior. As opposed to if it is used it is valid across invocations than this object could have somewhere in its graph, a use of that symbol which would have surprising results because raw output intent has not been expressed in this stringify. But we'll discuss it more in GitHub I think.

SYG: Okay, as for I also want to respond to Michael's question earlier about The implementer question I suppose, there's the object case, with this symbol puts more strain on the GC, and that is creating many, many small objects. You have a generational GC which everybody does? Probably fine. I imagine these things are very short-lived. So they were just get scavenged pretty quickly. But it is, it does seem like more allocations, whereas, if you have a special exotic thing, you maybe you can tag a bit or something. Like it probably still is another allocation, but maybe slightly smaller. Seems like you and

MF: you lose somebody like a getter or something for the rawTag field of this object so that you don't pay that cost unless we're using the feature.

SYG: Pay the cost of how would they get her? Get, get around the cost of the allocation. You still need to create the object. It would still need to have something. That's like there's a getter.

MF: Well, you already have to pay that. Or for this whole proposal like this proposal requires you to pay that and prepare instructing, object. What I'm saying is to avoid the construction of the fresh symbols the whole time. Would it be like getter this symbol? Help with that.

SYG: I don't know what the getter would do. What's the get?

MF: If you look at this second example, across the broad tag would so he worried about a lot of new small objects that they getter for had would be a getter for a fresh symbol. So you wouldn't have to create the fresh symbol to construct this object that's passed to the callback. You just have a getter which can be used in addition to the callback.

SYG: No, I think you misunderstood my concern. It was the small objects of the many small like actual objects with a symbol slot in it, like, with a property of the real tag that holds the strength that small object, the okay.

MF: So with the first, the first solution where it's at from a real function and you don't, you don't have to construct the symbol to get that object. Would that be preferable?

SYG: It's possible. I don't actually know. It's possible because it's more of like an opaque exotic object. Whereas a regular whereas the second one is necessarily a regular object with you know, all the regular property things that are regular JS object we have. So it seems like there's less room for implementations to choose a very compact representation there if performance were important.

RPR: Could we move on with the queue? We have four minutes remaining and three people on Queue.

MAH: To come back to the discussion on whether it is a well-known symbol. Is it actually or a problem if it was a well-known symbol? Couldn’t this also be delegated to toJSON and the feature open to be used there. Not just in the serializer. Is there actually any issue with making it more open?

RGN: so, the answer to the first question is yes. If it were well known then it would be available in toJSON and would allow that kind of output to work. Whether or not that’s appropriate isn't clear to me. I'd certainly like... I still have this suspicious feeling about it, but I don't know in particular. Whether or not that's actually a problem.

MAH: I don't have an opinion right now. I was just saying this might actually be something we want to support.

RGN: If it is then that I think a well-known symbol is a clear front runner in how it would be made available.

KG: [Serialisation] Yeah, just briefly. I'm the one who opened this issue 18. And in terms of, without getting into what the representation of the sort of raw thing is, this function-based approach seems like it is much nicer for users. So, I would much prefer for it to work like the first approach regardless of whether it's just an object with a particular symbol keyed value or an opaque object. I also think it should create an opaque object rather than an object with a symbol keyed value because the opaque objects don't require an additional look up. Internal slots are not things I think we should be scared of adding more of I think and in this particular case, it could even be a completely frozen, null prototype object that basically behaves like a primitive in the sense that you can't be adding new fields to it, but just has an internal slot with the string in it.

NRO: So we could avoid this question of how should the special object work look like that. By making the function store the value in the JSON.stringify closure.

CZW: I just would like to know, that you mentioned `raw` should mapping a single value to a single value with valid JSON notation. So I'd like to know what a value meanings in this context. Can `raw` accepts complex structure results, like mapping a bigint to an object with bigint property with descriptive keys?

RGN: Yes, so value would be anything that is valid input for JSON.parse. So it's not necessarily A Primitive value. It would just be a singular language value or the representation of a singular language value.

RPR: okay, so at the end of the time box, in the end of the queue, Richard, is there any final wrap-up you want to just State?

RGN: look for something at the next meeting. That is hopefully going to be ready for advancement. And check GitHub for conversation on this issue or any other.

RPR: Thank you. Thanks. Thank you very much Richard.

### Conclusion/Resolution

- Discussion to continue on github

## Specifying order of lists returned from Intl APIs

Presenter: Shane Carr (SFC)

- [slides](https://docs.google.com/presentation/d/1tDvpl99axNaZQWm1VItYhztMMj3avV8jc8uvvXQLRI4/edit#slide=id.p)

SFC: So hello. My name is Shane F car and I'm going to be presenting this question. This is a question that has come up in the context of multiple INTL proposals in Ecma 402. We've discussed it multiple times in our task group, in TC39 TG2, we failed to reach consensus and decided to bubble it up to this group to hopefully, give some guidance and help us form a style guide to answer this question so that we can proceed and unblock. These proposals that are blocked on this question. So here's the problem space.

SFC: The problem spaces that we have various INTL, APIs that return lists things. and we're trying to establish the order in which these things should be returned right now. These items are returned in an implementation dependent or these are three examples on the right of where this is currently coming up. and INTL Plural rules. We have a getter that returns a list of plural categories. And you can see what it's currently returning there. The second example is, in the INTL enumeration proposal. We return a list of for example, calendars, or it could be any other things. The third is in the Intl Locale info proposal. That's my colleague. Frank Tang. just presented at the beginning of the hour and it returns a list of coal. since as you can see here, so these are three examples of where places where we return lists of things. So there's two questions. need to answer, which I want to decouple so that we can discuss them separately.

SFC: The first question is, should we specify what the order is or should we leave the order up to be implementation dependent? If we specify the order, there's pros and cons to To this. The pros are sort of, they're sort of two types of advantages. One is a philosophical Advantage. The idea that we should constrain all behaviors. Unless there is a reason not to constrain it. But in general, like if there's behavior in that and implementation could have, then that should be a well, specified behavior. It's not good to have undefined behavior in the spec in general. And then the practical advantage is that developers can depend. Do write code. That depends on any behavior that they can get from the JS standard library. And it's our duty to make sure that browser engines are consistent. Because if to browser engine to return the same data in a different order than that, could break assumptions that developers right into their code

SFC: the disadvantages of specifying the order, order, is that Helpers should not emphasize should not because they can but they should not depend on the order because the order in all of these cases is a set. It's not, the order isn't is not supposed to matter because it's supposed to be a set and they should treat it as a set, not as an ordered list. The second is that we shouldn't, implementation should not need to waste CPU Cycles. To sort things into a particular order, if that order is not really important or meaningful. It just contributes to global warming. And the third is that, there are unclear use cases, sometimes around the ordering and since we don't know exactly why we're doing the ordering, you know, it's better to have those clear is better, Have those these cases more clear. So these pros and cons are all things that came out of when we had this discussion in TC39 task group 2, these are all pros and cons of various people on the team brought up and I translated them here into the slide.

SFC: Okay. I want to go ahead and finish the rest of my presentation before going to the queue. The second question is what order should be specified. So if we decide not to specify an order, then we don't need to answer question 2. So we need to answer. in one before we answer question 2, but if we were to answer, yes, on question one. Yes, we should specify an order. Then question 2 is what order should be specified. And I want to lay out three options here.

SFC: One is to specify web reality's order of plural rules because plural rules is currently the only API that is web reality, that is stable that has this problem, The other two are Whistles in stage 3. So those will be shipping very soon. But as of right now from the examples on the first slide, what our plural rules is the only one that's currently shipped. So the advantage that if we were to do this, it's web. web. It's a web compatible change. The disadvantage. that the current order does not make much sense. It's not human friendly. friendly. It's not computer friendly. It's just a bit. A fairly arbitrary order.

SFC: Option two is to specify that we always return things in lexicographic sort order also known as alphabetical order. Alphabetical according to the less than / greater than operator In ecmascript, that is. So the advantages of specifying that we should return things always in lexicographic order that it's simple. Clear and easy to specify. It’s future proof to new entries and the set as well as two new sets that we have to return lexicographic order machine friendly in the general case. It enables things like binary search in the general case. It's been pointed out that this is not relevant for short lists, but it's you know, it's relevant for longer lists and the fourth, is it it avoids future debates in which sort order is better? If we were just return set if you to specify that we When we return sets, we always return them in lexicalographics order. Then we can kind of say, Okay, case closed, and then just always do this from now on without having to like revisit this question. Every time we have a list to return, the disadvantages are that in general non lexicographic. Sort orders are more human friendly and locking Us in to the lexicographic. President removes, our ability to choose a better sort. Her in cases where there is a better sort order.

SFC: Option three is to just use a human friendly, sort order. instead of lexicographic. So in this case, the advantage is that we can use the sort order as a mechanism to drive use cases or to drive education, one potential use case that was brought up was well, maybe we want to have a drop down menu of the different fields in correlations or plural rules. Or whatever. And the order that we choose to put them in the drop down, menu. Maybe we want to maybe as specifiers. We actually want to control over that, maybe we actually want to say, well, there's one sort order. It's actually better than the others for educational reasons. Or for use case reasons, because we expect that our users are expecting to have these values in a particular order and we should use this. You should use this opportunity to put them in that order. The second is that we can still use lexicographic order when it does, make the most sense. I think there's General consensus that and intl enumeration. For example, lexicographic order is the best option to use here, so we can still do that. The disadvantage is that it gives inconsistent with During again, in different parts, the specification, when you do receive a list as a return value, the order that list it is specified by, you need to go and open up the specification PDF in order to go and see what the order is. The other disadvantage is that for every time we do return a list, We need to have a philosophical debate about what is the best order. And we need to make that decision. In contrast with lexicographic order where that decision is always, always made for us for Better or For Worse.

SFC: So that's my presentation. I'm hoping that we can have a discussion on both points on both question. One. Should we Define an order and then if we agree that we should Define an order, what order should we use And my hope is that, if we can, that we can get a clearer guidance from this group, on both of these points, so that we can bring this back to task group 2, and hopefully right up the answer in style guide.

MM: So I feel strongly that an order should be specified. The spec should be more deterministic rather than less deterministic. The argument that programmers should not depend on an order, is a misleading, is a bad heuristic for the Language design, we're doing here. If implementers are free to, if the spec does not pin down an order, and there's any apparent consistency in the order that implementations accidentally happened to obey and webpages happen to depend on that accident. Then browser Game Theory leads you into a very bad game. We've seen this over and over. Over again, in JavaScript early history and as a result of that, we had agreement to try to make the for-in iteration as deterministic as we could, even though we didn't particularly care about what the order is and we haven't been able to get that fully deterministic. But We made progress. We had a huge debate, historically about the iteration order of Maps and Sets. And we ultimately decided that that was going to be a deterministic function of the history of insertions and deletions. And once again, it didn't matter what deterministic function it is. It just mattered that it be deterministic when you got a deterministic spec then programs are portable, even if they did not carefully distinguish between what seemed to happen to work versus what we specified and testing benefits tremendously from determinism and determinism across platforms lets testing have that benefit also across platforms. Now, as to, what order it should be. I feel much less strongly about that, but I think lexicographic sorted order is the best choice there. It's simple to specify. It's simple to know what it is. And the complex policy issues about what order things should appear in the menu to be human friendly. Those can be a separate matter that libraries decide separately in deciding how to render a menu. And that's going to be the kind of never ending policy debate. That shouldn't be in the foundational mechanisms. That's all I had to say.

MF: Michael. so, before I go into this topic, I just wanted to ask Shane to clarify the goals of this ordering. And in particular, if compatibility plays any part in those goals.

SFC: So, the goal, the goals in specifying the order, I think the question was raised because, you know, because there are potential concerns over. Programmers, writing code that assumes certain orders and you know, we are also concerned about the non determinism that Mark just described. So basically we want to establish a best practice. You know, right now in the spec as well as in these two proposals, I think Ansel enumeration might specify in order to but in at least, in, the preferable rules, as well as into local info, this is currently an unspecified behavior. And basically we want to establish a best practice. So this is more driven by us wanting to do the right things. And Is like a specific, you know, problem that we have right now. that makes sense.

MF: Okay so the topic I wanted to get into is, if you're looking for this deterministic behavior, as programmers are expecting certain consistency in this data over time. And remember that the data is changing, evolving data. They were possibly the options. Added two options With whether will be like, new locales added to it. This will cause ordering, by ordering them talking about the relative positioning of like two elements is not the important part for stability there. The important part is that the indexes of a particular value are stable. So if we have something in lexicographic order today, like we have like, say 26 elements, a through z, and we want to add another ‘b’. We should not add it in the third position and push everything out. We should add it at the end. And I guess it's a very unpalatable solution there, but that is the solution that can actually get us the kind of stability you want. As an example. If somebody is like choosing some sort of locale information and they store in a cookie or like session data an index to that Locale, the browser gets updated and next week somebody's locale info changes. Website breaks. We can no longer use it because it has different behavior. I think that's like that would violate the goals here, especially for the kinds of things that MM was talking about. So lexicographic ordering something like that is if as the data evolve and keep returning it in lexicographic ordering doesn't actually solve the stability issue. I think it all boils down to using an ordered data structure to represent unordered data. So you have to impose some order on it.

YSV: Can you go to the first option of how we could do this? Okay. So am I reading this right? That currently all implementations implement the same order, but that it isn’t the ideal, right?

SFC: That's that's my understanding And if the sort order is you can see it from the Slide. It's basically sort it appears to be sort first by length, and then alphabetically within a particular length, which is

YSV: And we also want to add sorts to these other two.

SFC: The other two are in currently stage three proposals.

YSV: Oh, those are stage three. We don't have implementations for those, right?

SFC: I think they're flagged implementations.

YSV: Okay, I would be really curious to know if we've got alignment there already. Because if all of the implementations are aligned then effectively we don't have a web compatibility issue. I consider web compatibility breakage to be of higher urgency. So, that basically means that we've got time to think about this. I don’t have a personal preference. I do think that determinism is good and we’ve made changes like this before. I think Michael made an excellent point about web compatibility and lexicographic ordering. I do think that that will end up being a web reality issue and we will have to make a really ugly fix or something like that. But I believe this issue will apply to any ordering that we choose. So I think it's good if we think about it now. And beyond that. I don't really have any comments. I just think we've got time right now to discuss this, because it looks like we also don't have enough information to make a decision right now.

WH: Like YSV, I also believe that we do not have enough information presented to make an informed decision on this. The thing that's missing is descriptions of what things we’re ordering. Lexicographic ordering sounds tempting as a general rule, but I have no idea if this means that a list of days of the week will be presented alphabetically instead of in calendar order. Right now I don't know what we're trying to decide here.

SFC: I'll take those two comments, and we also require those two comments.

SFC: So, first from Yulia, the urgency I see that we do have these two stage three proposals and you know, if we don't specify what the order should be, before we ship these proposals, then basically whatever ordering that ICU, currently has is going to become the web compatible, web reality order and basically, they're letting ICU make the decision for us, which is not necessarily a decision that we, once to defer to. It's ideally a decision that we should make proactively rather than doing what we currently have with Interpol. No rules where we have an order, that no one really likes because it just happens to be what I see returns and it's all the implementations use. ICU, they won't be using ICU necessarily in the future. For example, they might be using IC 4 x. And in that case, you know, this this order of is not necessarily going to automatically be consistent anymore. So that's what I see as the urgency. so that is the response to Yulia .

YSV: So we don't yet know if all the implementations align on the other two APIs, which are in stage 3. I think that the step there would be to determine whether or not they do and there's a good chance that they do. So that means that there's no web compatibility risk with the current implementations. For something to be a web compatibility risk or something to already be a broken web compatibility issue. That first off makes the design space smaller and their freedom to choose what to do much more difficult, but it also means that we are risking breaking websites for various people, which has a bigger knock-on effect than deciding to take our time. I don't think that if a stage three proposal gets pushed back from being released is as much of a risk or as costly as something like web compatibility might be.

SFC: Yes, So basically Yes, I see. option one is if we were to basically take the current web reality sort order and then specify for rules only then we can defer the decision on the sort order for the other two stage. three proposals that's sort of the idea with option one. sort of kicks, the can down the road bit. The road that we're kicking the can down is not a very long road and we will have to answer this question for the other two proposals. Yeah, but it, you know, sort of decouples, these two questions, it can take plural rules out of the top. The it takes web compatibility out of the it eliminates it as a factor. If we were to just establish the plural rules, how it currently is. Yeah. It's the WH’s question, These three things that we're looking at. Here is the three concrete examples, where this is currently mattering. So these are the only three example for looking at. These are the only three examples currently have. And we're looking for a solution for these three examples that, you know, could guide us when future, such examples appear but These are the three we know we currently have.

WH: For plural rules at least looking at the example you have on the slide, it seems to go from the fewest to the most.

SFC: Except it did not actually because traditionally the CLD are ordering, it will be one too. Few, other few is bigger than 2 is smaller than other. So the this ordering that we currently have is not as good graphic and it's not the semantic ordering either because huge should be ashamed. After two and before other.

WH: Ah, so ordering by size should be `one`, `two`, `few`, `other`. In that case `few`, `one`, `two`, `other` is what you’re proposing or is it web reality?

SFC: This is the web reality order that the first is currently on browsers.

WH: Ordering in terms of size, smallest to largest, seems to be the best, if we can do it.

SFC: That’s correct. And for plural rules, the debate basically comes down to do. We stick with this ordering, that no one really likes, because it's web compatible, or do we do ordering and move on? Or do we apply a human friendly? Ordering in which case, we would most likely adopt that Unicode technical standard, 35 ordering, which is ["one" "two" "few" "other"].

WH: Yeah, for this one, I would prefer ordering them by size. Lexicographical order would be the worst. It's like trying to alphabetize numbers spelled out as words. The preferred one would be ordering by size “one” to “other”. Or web reality if we can’t do it by size.

MLS: So it seems to me which I think you guys have somewhat made cases. There's a semantic order. That makes the most sense and that should be used. Well, unfortunately, for this plural categories, I guess there's a web reality that may have more precedence than changing to some kind of semantic order for other list values. If there no like order of it's it's it's obvious more appropriate. Then think there should be some kind of default order. Maybe that's lexical. I do disagree with MF. That index I don't think is preservable as items are added in their order makes sense to put them earlier in a semantic list or if they're it'll default lexical. It also doesn't make sense to put things in a fixed index as it were for two reasons, one, they may not be valid for a particular return from a call and two if lexical or something like that as default, it's also hard, you know, it's impossible to maintain an index and when new values are added.

FYT: Yeah. So SFC say the only did three, but I just want to make sure there are actual additional one. Week info. We can't thing in the week info since we're the approved like couple minutes ago, will be an array of integer indicating the weekday that also have a request of our order. For example, in US, Seven represents Sunday, which is the first day of the week. Should that be seven-six or six-seven to indicate the weekend? That's a question. So as so and I think that it just want to point out that we can info which link also have an array. Okay.

RPR: And SFC, you've got about a minute left. Do you want to wrap up? There's nothing on the queue? Yeah.

SFC: Okay. So thanks for the feedback. So basically what I heard is that, you know, in general we like the idea of specifying the order in terms of what order to specify that this questions still seems to be, you know. Then, it doesn't necessarily seem to be consensus here. I heard, Mark, Miller say well, we should just do looks good graphics. So we can always know what the order is going to be and just move on that. That's, you know, I think I think there are sort of camps ends. That's one camp. And then the other Camp is what we should choose the semantic order when there is a semantic order. Like, in the of pluralrules. There may be a semantic order, and we should go ahead and choose that one. And that's the sort of should use and if there is no semantic order then maybe we could do lexicographic or something else and that's sort of the other Camp. So basically, favor the human readability versus versus just favor, you know, something that's algorithmically pure. So those are if I had to categorize the two camps that those are also the two camps that came up when we discuss this in TG2. It seems like those are also the two camps here. It does seem that there is definitely consensus on the first question. that yes, we should absolutely specify the order then I'll go ahead and take this feedback back to TG2 and thank you for the discussion here. And yeah, I hope to continue this discussion further. so, No one else in the queue. Thank you. I'll turn it back over to Rob.

### Conclusion/Resolution

-

## Tightening host restrictions to improve testing

Presenter: Jordan Harband (JHD)

- [example](https://github.com/tc39/test262/pull/3054#issuecomment-882741949)

JHD: [intro lost] you know, and there's probably a lot that I'm unaware of and the, the first category new globals is fine. The second category, new like prototype things is quote, fine. In other words. It's not a real issue. Neither of these categories really is a problem for users or for us until we go to add new things. That conflicted have the same name, and that's just part of the process, right? We that's that is acceptable the category is the I'm gonna give a concrete example, there's more than one, but this is the only one I've preserved in my brain, the error caused the place on which this meeting I believe, is going for stage for the specification for it says that `cause` is an own property on Error instances. It's not supposed to be present on `Error.prototype`. This was an intentional part of the design (the reasons for that aren't worth debating here). However, test262 has a completely reasonable policy to only include tests for things that the specification describes - things that it requires, prohibits, or permits explicitly. So test262 has a test that Error instances have an own `cause` property when expected - great! It does not, however, have a test that there let’s say `Object.prototype` does not have a `cause` property or `Error.prototype` does not have a `cause` property. This is unfortunate in this particular engine-specific case, but in the general case, that's a reasonable position for test262 to have, which is that it cannot test for the infinity of things that aren't in the spec - that's just not sustainable. As a result, every engine that I'm aware of that has shipped `.cause`, `cause` is an own property on instances as it’s supposed to, whether because the specification says it or test262 enforces it who knows, but some combination of those has created the correct behavior. That's great! However, Chrome 93 and node 16.9 and 16.10 shipped with `cause` property on `Error.prototype` as well, which is not supposed to be there. It's technically allowed by the spec, but that was not the design of the feature or the intention and it's not what the other engines have chosen to do. And so, of course, that obvious bug was fixed in Chrome 94 and node 16.11. Test262 however, based on their reasonable policy, cannot add a regression test for this obvious, actual bug that happened. This has happened, many times in the past with similar cases around the exact placement of properties. Before I continue to mitigations, I wanted to make sure that everyone's on the same page about understanding the problem. I don't see any questions on the queue - now would be a great time to stick yourself on it, if there's anything to clarify, or if I haven't made the problem clear.

LEO: JHD, just won't think to appreciate you, explain that. I don't consider that is actually a policy, but I consider that like following ecmascript rules. Like the policy is just ECMAScript norms. And where the norm say the language is extensible - not as an object, but as the language as the API and syntax, so we cannot test 262 cannot create anything that is crossing that boundary. so we try our best to avoid. This is this has been like starkly setting test 262. otherwise like, everything seems very reasonable and you be, I talked about this with Rick Waldron and as like we have been involved with Test262 for a long while we support we support, this support changing.

JHD: Thank you. I haven't discussed the change just yet, but I do appreciate that. We've all spoken and test262’s maintainers are on board with it. Thank you, Leo. I see MM on the queue as well.

MM: Just wanted to mention that this relates closely to a concern that SES has, which is, which is that additional property that are not in the spec. I think we should tighten up the spec to say that if there are any such additional properties. They must deletable, not just configurable, but if you if if you delete them that they actually get deleted. because then a white listing mechanism such as the SES initialisation when seeing a property it doesn't recognize can remove it if it SES sees a property it doesn't recognize and it cannot remove it, and the property does something dangerous that says doesn't account for then SES simply cannot enter a secure State and and that's that's true for several of the places where the spec is. Just too loose with implemented with implementation freedom. and I think that a way to approach this from a compatibility perspective, is to say, is to is via the invariants that you only. And I have talked about. What is the implementation Freedom that in fact, zero implementations make use of then the absence of making use of it becomes observed in variant that we can now discuss whether we want to enforce it.

JHD: So I completely happen to agree with you, in this case, MM and you're right. It's the exact same category, deleteability, the exact same category as what I'm talking about, which is a host freedom that hosts don't actually need. That we would like to explicitly call out. I want to make sure that I don't kind of attach the two things together.

MM: Yeah, I agree. I agree. I understand this distinct. I just wanted to mention it because there's overlap.

JHD: Absolutely. Yeah, so what you're talking about: unless everyone's, like super, on board with it, it would be a different kind of topic. But that said, it has like 90 percent overlap, and I completely agree and support that as well.

LEO: Yeah, mark. About this. I think like if we have something that is just for as like configurability, if we have, if we have this on anything, there is that be ordinary as ordinary objects. It should be like fine as a generic approach. I am afraid if we try to address everything like deletability. We might get like two specific to in the we weeds in order like Like we have two steps here. I think like talking about extensions and everything. I like how we actually restrict that. There is a generic approach. I think what JHD was/is proposing and then like going to this specific Parts where deletability is going to be. another case. I fully understand and comprehend that I just want to, to make sure I like this, find some light in the end. At least like, step by step.

JHD: Thank you, MM and LEO. Okay, so it sounds like everyone understands the problem I've laid out. So now I want to go to my suggested mitigation. There's a number of options here. One would simply be like, let's make some exceptions to, you know, and have some Test262 tests, but that's sort of just “allow these test262 tests, even though they're technically something that the implementations are allowed to deviate from” but another alternative, which both permits tests and also matchesweb reality, and what implementations philosophically and spiritually already do - the way I phrased it is: "Any property on a given object mentioned in the specification, must ONLY appear in the locations specified on that object or its prototype chain"

JHD: So `cause` - that would only be allowed on Error instances as own properties and not anywhere else on its prototype chain, but, because `cause` is not specified on anything but Errors, then someone could stick a cause property on an Array - that's not governed by this. Similarly, the `message` property must an own property on Error instances and also on `Error.prototype`, but nowhere else in that prototype chain - but it could still be on any other random object.. Another consequence of this is that `call`, `apply`, and `bind` must only be on one location on any function, `Function.prototype`. So this is something that's trivial to test. There's an npm library that I have in mind when I'm thinking about this, but essentially you just kind of recurse up the prototype chain and grab for a given property name, all the locations. And then you assert what those locations are, and I believe it matches what implementations already do. If an actually implementation violates it and that violation isn't an obvious bug that they're willing to fix, then we should definitely come back and reevaluate and discuss it, but I'm relatively confident that that won't happen. So the intention here is that that will reduce implementation deviation/differentiation, and will carve out a kind of a safe place where, which doesn't impinge in particular, the web, but other implementations’ ability to innovate, but it does prevent correctness bugs that nobody wants to happen anyway.

MM: So I support this proposal. You just want to mention some interesting cases to be aware of as this goes forward our error stack proposal. We're proposing that stack property exists on Error.prototype that combined with this proposal, would have it be only on Error.prototype which I which is I think the correct. [function??].. that currently implementations many implementations do have stack as a known property on error instances in particular V8, so that would so this topic definitely focuses that as issue to come to agreement on moving Stacks forward. The other one is Function.prototype.(callee?) and Function.prototype.caller. I don't remember, Even if both of those are still around, but they were around 2.2. make sure that sloppy functions are poisoned and neither sloppy functions nor built-ins door. Strict function should have their own properties that and I don't know what the current implementation status is on that either. I think when I last looked some Implementations had sloppy functions with their own arguments and caller Properties.

SYG: So I agree with the motivation that we make test 262 more useful here and I propose we do that directly with test 262, rather than changing the spec to Limit host from adding additional properties of the same name in this way.

JHD: That is, certainly an alternative. I mean, what it wouldn't affect. Adding the test 262 tests do tests is a good way to make sure people aren't accidentally doing things. But I mean, we also don't want anyone violating my suggested restriction, and I'm not aware of any implementations that generally intended to and it seems strange to me to go partially and put in these tests, but not add the restriction when it doesn't actually encumber hosts in practice because, you know, the hosts already want to comply with it. Are there downsides you see to adding the restriction?

SYG: The downside is, it's a right that the hosts Reserve today, that would be removed for the purposes of this as I understand of really expanding the use of the utility of the tests suite. Which could be done by MF was suggesting a way in Matrix could be done by adding an assumed, no extensions mode or something that's even stricter than what you propose strictly speaking for the defect change. I don't see any reason for hosts who walk Chrome does. Not really want to waive that right now and if it were to come pass, I don't think the result would be that. I think the result would be possibly more willful violations in particular from HTML

JHD: I mean. If there is no, if there's nothing concrete in mind… would you have a concrete example where Chrome wants to willfully violate what I'm suggesting and thus needs to/wants to reserve that right, but that couldn't be addressed by amending the spec to allow for whatever Chrome wants to do?

SYG: Not in the short term. Currently. That's not a compelling argument to need to waive that right now

JHD: I guess to me, the right that hosts have here is not a right that they should have right? Like, that then we did obviously the ability to like add new globals is important.

SYG: But like, no just add globals, but also properties to other objects. I think I agree that it's probably rarer. That should that that we want to add a property to an object. That is the same name as right also,

JHD: I suppose but that's the subset that I'm really focused on because like if you know you want to add a like `yogurt` property to all instances. Like okay, fine, go nuts, right? But like I mean, I personally don't think that's a good idea anyway, but I think like the spec. defines what describes, “what instances are” and it's weird when, it would be weird if there were instances that had more stuff than that. It's fine to allow that possibility because it's good to account for unknowns. But I just can't conceive of any case where shadowing or a name used in the specification is something anybody would want at any point, so it seems strange to me for hosts to try to reserve a right that nobody can think of a reason they want to exercise.

SYG: Mark raised the the concrete case of Stack, right?

JHD: And I think that if they'd in the stack proposal case (which I wasn't thinking about for this topic) - it's already been stated by the Chrome team that the Error stacks proposal has to describe what already happens. So, any change that Chrome is unwilling to make specifically, this stack proposal has to allow for already. If that means, let’s say the Chrome wants `stack` to be an own property on instances then I don't see how we would be able to get it to a point where the proposal conflicts with that in the first place.

SYG: I can see that forward where we keep writing like web browser, specific language, where it's like for web browsers. It must remain an own property for everything else. Do this other than the Prototype. I'm not usually a fan of that. I understand that sometimes it's necessary, but I also don't see a need to like have this carve out here like you want to have this carve out. Because it feels weird to you - that I disagree with as a compelling reason. What I agree with is compelling reason is expanding the test case and that's why would like to solve for that problem directly, right?

JHD: You're correct that the presented motivation is something that your alternative solves and the reason I presented that motivation is because that's the objective one, that this has caused actual bugs, and we need a way to mitigate that problem. The subjective thing that I was not headlining the topic with is “I think it's weird”, and I think it's a bad thing to create this sort of deviation and that I haven't actually seen anyone use it to good effect. I then separately think that if an implementation has a persuasive use case, then the spec should of course should explicitly allow it, and if the implementation’s use case is something that the rest of the committee does not want to allow than like for some reason then like that's a discussion we should be having - it shouldn't just be happening in the isolation of a single browser teams’ engineering department.

MM: I have a quick clarifying question for Shu. I don't understand what it means to test for it, if it's not a normative thing in the spec, if the test fails, how is the test failure indicated? Given that it doesn't indicate non conformance to the Spectrum,

SYG: A concrete suggestion that floated was something like assume no extensions. It would be something the test render option to assuming the host does not add any extensions at all with these tests fail. It was, is that strictly speaking still conformant, but the outcome is. I mean, the, the signal you get from tests is not just conformant non-conforming, but How likely is this to be a bug? And you could have something that is technically conformant but still points to the likelihood of a bug. Ugh, and these are test in that category.

MM: are there tests 262 tests that are in that, that that have such signals right now?

SYG: Weak ref stuff [??].

MM: Ah, okay. Good point. Okay, that's all I had.

LEO: nice to have my grains of salt pork [??]. We Crepes happens there. So. II think the, the way we consider these tests to be useful. I have a okay. I don't have any. I'm not in position to give technical rejection to just create a policy test 262. I am personally against it because I really am reading favor. I've have been actual Norm. Saying that what we can extend it in making test follow what actually are written as Norms in the spec text. That helps a lot indicating like a back door and what you do. When the test fails, I think we WeakRefs are like a very specific scenario. We're like, things are optional such as Annex B is also optional but planning test with Test 262 in the middle of the sweet 16 [??]. I kind of like you can separate with refs s. you can separate any speed, you can separate until they are kind of like optional but if you if we do have these tests I see them as Blended in I think one thing to try to mitigate what Shu say. we could try to actually have some tasks, like they're a of a massive for the size of Ecmascript, but they are not hard to write it and we can do have some of these tests and try to connect to see if anything is actually extending what we are saying like well the objects in JavaScript, maybe we can try to do some effort and Get some tests ready? Just to see what happened. what would happened, but I'm still in favor of having some normative Direction, but what to do with these tests, tests, I really I would not say it's a good thing to have test Blended in test 262, the mirror of test-262 you that you cannot bring a separate maybe like by the file name that is just like following the test 262 policy, exclusive policy. And this would be like a new thing for test262. you because like, for nxp, have optional so it's still like The spec seeing this is optional for Intl same thing for each of the same things for WeakRefs. Where you have like plenty of implementation-dependent, but this daily tasks, you will be a policy, like, we're just going to verify something for you. This is all to Latino. Not a test. This is a verification. If something happens, it does just excuse so far. Just say just can say, They like this fails or this passed. I really want to help mitigating these concerns because I really prefer have normative text.

LEO: Okay, so I'm trying to pursue to give a quick feedback. I think, what do you say here also represents a lot of struggle like, historically from test 262, like, definitely, you're not the first one. I also got feedback from any other delegates like went where actually restrict these. This is very often feedback like for test 262, very fine. Or objects is often seen when we also rename something or remove something like clean up some atomic weight in weight in a week. Things like that. Also like generate this kind of feedback, like people wanted to like, can we verify this thing doesn't exist in ecmascript, in the implementation anymore and we cannot because 262 allows this extension, but we can map all the objects that we have in ecmascript and we can just do some test to see. Like these are the Some things we expect to see in the subject and see what trails or not and we can have method and shoulders last year. Maybe this is just like something that we can overcome and work it out.

JHD: Okay, so I guess I could ask for a temperature check on the queue or something, but I think that before that, Shu is this something that Chrome is essentially blocking consensus on for having it be a normative requirement? Or could you be swayed by the feeling of the room?

SYG: Unlikely. I think I am swayed by your utility argument very much, nicely played. by the subjective part if If you know, it's your subjective versus my subjective part. I think how I feels really strongly that we should keep with the status quo. What is afforded to hosts.

JHD: Okay, I guess it's worth asking real quick. Before we go to the next queue item. Is there any other implementations that have a strong opinion here in either direction? It would be great to get that on the record in case because if Chrome is the only one with this opinion and they change their mind, that would be useful to know. Feel free to stick yourself on the queue if you represent an implementation.

YSV: I can just speak on Mozilla. Yes, we reviewed this and I don't see any immediate harm for making the change, but I also didn't feel like it was a critical change and that there may be a lot of extra work for implementers that, you know, we might not have it immediately in front of us. So it's a little difficult to judge. Just how much work. It would sort of like change all these APIs and then suddenly we'd have all of these failing tests. Which may, I think the worst case would be like implementers ignoring failing tests. So that's why I, you know, Shu's suggestion of making it an advisory thing. Maybe just as a first step may be better for that reason because then it can be sort of correctly backlogged and we can discuss those APIs and sort of understand what they're doing. And so that's, I don't have a strong opinion here at all.

JHD: So Shu, then if we started in this, this is up to test262 Maintainers to some degree. I think, I don't know who, I don't know who makes that decision. But let's say we add the tests and some special “allowed to fail” category. And it turns out that no implementations violate this modulo bugs. Is that still a freedom the Chrome team is likely to want to hold on to even though no one's using it and has no idea of why they want to?

SYG: I don't think it's fair to say that. There's no idea.

JHD: There's so it will if there some idea I'd like is that something that you could share if not now like in at some point in the future?

SYG: It’s the General Freedom of adding things to objects to have a carve-out Prohibition? Like for same name, things may make sense today, but I don't think We could say that this is something where we that we can give up without issue in the future. Probably for JS. Probably. It's mostly around error. That seems to be the most problematic object, but I don't think it's that value further to add this particular provision while still allowing the rest of the rest of the additions. Like this would increase the likelihood perhaps, fairly small of more willful violations. And so why we would want that world, if like, if the Norms, that, that delay are talking about. Like, I agree that it is a norm that we don't just willy-nilly extend stuff. We don't want another Shadow stuff and I am happy to help, you know, keep that Norm but to build a normative prohibition into it is something I’m not comfortable with.

JHD: so, I guess the way I can understand the distinction in this case the current set of things that would be normatively covered by. This is already known to the spec and as YSV has pointed out maybe we would need to do some research with tests first, but assuming that it is known new proposals that add new things would be evaluated with that normative requirement in mind as they hopefully are already evaluated with that Norm in mind. so if I mean, I guess I'm I'm still trying to understand what would a compelling reason that a browser would want to violate this Norm? That would not be palatable to the committee to allow for somehow in the spec.

SYG: I'm uncomfortable with this line of argumentation though. I mean, the status quo is that we have this, right? And you're asking for the onus to be on us to provide a concrete use case today that if we don't have one perhaps it makes more but the actual sense to waive the right. problem is likes the actual problem is not whether it feels weird to have or not have the normative proficient. And I think it feels weird. I think probation, you think it feels weird, not have to Prohibition.

JHD: Well, the lack of prohibition and thus the lack of tests is the reason that there's bugs.

SYG: It wasn't like, we looked the Implement that we'd look to the spec text and was like, oh, it allows us to have it on the Prototype. Let's Put it on the Prototype. Know. Somebody coded is wrong. and I assure you if that line is not going to be get picked up and like to get double checked by implementers in implementing the new method, right? Like the that the yeah, that's going to catch bugs is test 262.

JHD: OK, just to make sure I understand you correctly: regardless of whether it's a normative requirement or not, it's the tests that prevent the bugs? Of course, nobody's suggesting that implementation will intentionally violate this norm without good reason, right? And I agree that the absence of a good reason today does not mean that there could never be any. I'm just skeptical that that a single implementation would consider something a good reason, but that the rest of the committee wouldn't agree with that.

SYG: I don't have any concrete. Use cases, Beyond errors and probably around Stacks like,

JHD: right when the stacks questions get resolved, right?

SYG: right. I understand. But that question is resolved for the things and under the purview of 262. I don't see any other objects where we may want to naturally extend for like product. Things like air is and stack traces. Its is what I'm mostly aware of and uncomfortable agreeing to this fairly scoped prohibition. Because I don't think that will solve any actual problems and to kind of hammer home what I was saying earlier about test 262 being the one that catch bugs. This is why I also have somewhat of an issue with Statistics test 262, being more the pedantic side of what a test ought to test for, at the end of the day, the target consumers of test262 are mostly implementers. We use them. Not only for interop, which Is by far the greatest value, but also to suss out bugs that we do ourselves through our own fuzzy, more our own test writing and I feel strongly that test statistics should remain like maximally useful in that regard for sussing out sussing out, bugs. So yeah.

YSV: I think there are a couple of reasons. Why host might want to preserve this like and they go back to error and some other related objects largely to be able to compete with each other. Now we have had issues with the are objects. And now we do want to standardize it, but historically that has been area where we've been able to differentiate from one another in our invitations and give users give users more developer-friendly tooling. Through extending the built-ins in a way that makes them better for programmers, as they're trying to figure out the code. So that's been a historical reason why we had that. I don't know.

JHD: Just to clarify. I'm sorry. Do you have any examples beyond the stack property itself and its contents that like, I've where you yeah, that's what, come on.

YSV: I think you also brought it up. Also the function to Source the historical thing. I don't know if it's still there, but we had a couple of things.

JHD: To be clear the prohibition, I suggested would not have forbidden `toSource` and would not in the future. The infinite set of names we haven't used would still always remain free for hosts to innovate with.

YSV: Okay, consider my comment retracted. Thank you.

BSH: Okay, so what I wanted to point out, is it so far. I've seen basically one data point where we had it actual bugs happened because accidentally, they put the property the wrong place. They put this cause property on the Prototype and because of the way errors objects working that caused actual bugs in practice because we've been look like a thing that didn't have a cause did actually have a cause property because the one On the Prototype, right? That's basically what happened. This is kind of a weird situation. It's one time that this happened. In general, if you happen to have Shadow things on the Prototype, it probably wouldn't matter, because there's always going to be the one that's on the instance. That always Shadows it. So you've never even see it. So, I guess what I'm getting at is, I think in this isn't really a very likely source of bugs. We've only seen it one time. So kind of then trying to say, oh, we just want a blanket say that you never ever allow these shadowing. Things happen to happen. And as part of the spec, it's I think just sort of an early optimization problem. I understand the motivation, but if you think about it, you're actually calling in a lot of requirements in because if that's the requirement then then you end up adding tests for this test262 for all of the properties that are defined on everything in the spec and it might be easy do that. But it also has a lot of execution time, if you're going to do it correctly. Why not just say, oh, know that for this one case for errors, this is a problem. Explicitly saying the spec you're not allowed to have cause property on the Prototype because it goes to this problem and then just leave it at that until we see that there's a general pattern of this is Constable health problems.

JHD: This is so before we go to the queue replies. It has happened, many more than one times, that things were put in the wrong place, whether it's caused actual bugs for day-to-day practitioners. practitioners. I agree causes Well, this specific case of it's supposed to be absent on the Prototype and it's supposed to be a known property and the bug of it. Is that it being a prototype property. Like, I don't think, I don't know if that's specific case has happened before with anything. However, when things are placed in the wrong locations that causes bugs for polyfill authors, which affects a vast number of users. Even if they don't directly know it. So these bugs like, these are active actually cause the bugs in the past. and as far as the comment about execution time and stuff, I mean the, I think the way that those tests are authored is an implementation detail of test 262. And if any tests for correctness are slow then the test uses features feature is used for implementations to like only run the the one, the subsets that they want. I'm I'm not sure if like for Shu's alternative proposal, as well, I think that the tests should be there for correctness, even if they're slow. And in either situation.

BSH:I think Gus is on there but I guess he felt get covered what he had to say is he's not up because was basically saying this happened at least three times, right? All right, but we'll so glad the one thing that I what I said that didn't for you completely understood what I was getting at. Was that the time spent executing Tas that compute time spent executing tests that are really testing something that could never cause a real bug, which would be the vast. Already of properties on on objects. Seems like a really bad waste of resources. If, you know, in the long term, that's all I'm saying. It's a sort of contributing to global warming sort of thing. Uh, that's that's the sort of thing I'm talking about.

JHD: I mean, the number of the total number of properties is probably covered by. This is probably in the double digits and not triple. So I don't think we're we're talking about two too many. Any this we're not talking about having these tests for everything on the web, you know, which is a much larger set of data, but I take the point.

LEO: I think there are like this many things here. is a this is probably like an umbrella of multiple Solutions. I think, the first thing that I thought was actually restricting like extension at ecmascript, build teams, but there is also, What at some point JHD or Mark, I say on the configurability of extensions to do these Beauty. I think this is a nice path to explore if there is an extension we could set for extensions. So that helps in a controlled, in some sort of control environment. This is used for the web. It's not Directly for Native browser implementation, but like for web development. This is very useful like knowing that all the builtins seems we'll have like some contract on any extensions or that shape. Natively. We beasts to have like some control to be effective. To to pull over these objects. Okay, and this is, this is one of the interesting facts to explore. I think this would be useful and can be accessed. Yeah, deserve more investigation. The other parts is just like I think we are talking mostly about builtin APIs is here, but there is also a lot of historical feedback in test 262 about syntax extensions. And when I talk about syntax extensions, I also talked about like restriction that the syntax like people try to create tests for Test262. This is totally Like the feeling is if I have a new syntax feature to the language, I try to test it out and I create variations of it, There is just not conform to the new spec and try to release something like, like, let's see if this Code works or not, if it's like total garbage, of like letters garbage that you write down and this is like, yeah, we cannot say that actually is invalid test many so often because each can be at some point like some syntactic extension. think this is also a like another field that we can explore what we with syntatic. Restrictions, I don't think there is a, for any of these like even for the builtins, there is there isn't any easy solution. But for all of these like, there is a historical feedback from people who contribute to test 262, expressing the desire to create these restrictions. I wanted to express that part too because I think we're just too focused in builtins so far. Maybe that's the intention JHD and I'm just assuming You also saying any extension,

JHD: Yeah, I mean, so the intention here is not to prohibit any extensions, except when they conflict with things we've already specified. What my, you know, my personal philosophy on extensions is sort of a separate item/topic.

MM: Just a quick note since people were looking for what other examples, are there bug? That's that's, we're aware of but have not had not bothered to report, that would be detected by JHD’s suggested test. Is that on V8 only for each of the sub classes of error border of the, they each override error.prototype toString() method. Own tostring method and if you remove, the override it makes no, it makes no difference. So the override is completely purposeless. Probably an accident.

GCL: I want to say, I actually removed that in 2019. So and no one noticed. So I guess that goes to show how useless it was.

MM: Okay, we noticed when it was there. I'm glad I did not notice that, It was removed. Okay, good. Thank you.

JHD: Okay, so there's no one else. I looked at the queue. It sounds like from Shu in the Chrome team that they're and partially from Yulia and Firefox that we will not be able to add a normative prohibition - certainly at this time, potentially ever. It seems like the direction desired here is for test262 tests just like it has for WeakRef - to have some allowed-to-fail tests to cover these specific regressions.

YSV: Just want to jump in and say Firefox doesn't have a position on this.

JHD: Thank you. That's good to know. Okay, so, I guess then there's really nothing to do here since we're not making a normative change will be, you know, I'll discuss with the test uses to maintainers separately and try to have path forward here. If can, you know, if in the future we have evidence that either the violations of my suggested prohibition are more severe than believed or evidence that nobody's actually violating them. Then we will you know, that I may come to try to come with then present that evidence, but

SYG: Can I respond to that real quick. Our objection is not. Based on the extent of the current violations. It doesn't it's about future Direction and would lacking a concrete. Use case. Now is that it is true that there is no concrete case now, but also uncomfortable times, closing that door. All right. Yeah, I mean I think you keep because because I think what would end up happening is if we close that door say that it is an allowed thing. Normatively, it's not going to change product decision. Should we like should something happen with error? And then we're like, okay. We actually want a per instance, dot stack, or stack trace or something to make the errors in V8 better in this way. Like, it's not going to change that product decision. So what do I end up happening is there's violations. For a norm that we have had and for a right that we have had that would not have been a normative vibration or willful violation. Otherwise,

JHD: right. I mean, prepare stack traces, like the existence of it is not would not be in violation of my proposed prohibition either.

SYG: But like, what if we want to do something with it, if it is TC39 and then the devtools product team disagrees, like it's about preserving the future, right? It's not about just freezing what it is today, right?.

JHD: It is theoretically not possible for TC39 to do something that you all disagree with - that's the proposal process. So, that's sort of why I'm still confused about this position because if the current set of delegates is fine with that prohibition, then for any future thing to come up, it would have to be like either an unanticipated use case for an existing property or it would have to be by a new proposal where Chrome, like everyone else, has the ability to participate. And that includes the stack proposal, which has significant hurdles in front of it before advancing.

SYG: That's a much longer discussion. I think. That I'm not comfortable going into right now. It goes into whether we want the failure mode, if we disagree with something to be, we keep debating in TC39 untill we drop it or nothing happens. Or we come to an agreement for the failure mode to be. Here, is something that is status quo allows for hosts to Diversion on and just move on have that happen. Be close now by this prohibition supposing the the rare case that we want to actually shadow something. So like from a procedural point of view. I'm thinking of failure modes should discussion in TC39 dragged on. For example, I see no reason to close this Avenue of permitted Post diversions.

JHD: Okay. All right. Well, I guess we'll wrap it up after Leo’s comment.

LEO: Yeah, like, I don't want to block anything. I'm trying to be positive of any directions. People want to take here. I'm also not trying to take any past tense of as a maintainer of tests to secure more like starkly, I use the project a lot contributing to contributing to to it. I think it's nice to just set up like some, maybe a one-time call with people who has an interest in test262 people who are maintaining and people are going to be attached be attached to it. See what what? What what can be done. There is much. I know. There are so many plans so many things that like I could think and it could say like how to in how we improve, test262 and I think we can probably find a way to tackle this up.

JHD: Thank you, everybody.

### Conclusion/Resolution

-

## Extending Null

Presenter: Gus Caplan (GCL)

- [proposal](https://github.com/tc39/ecma262/pull/1321)
- [slides](https://docs.google.com/presentation/d/1WPB6bPIoCYnD1YPlhcvcuxiGev8aMLCq-bLN2qWadFk/edit?usp=sharing)

GCL: Okay. So basically this is an old topic about basically extending null in classes. This was a behavior that was supposed to be introduced in es2015, to be a class that behaves somewhat normally, except that it does not inherit from object dot prototype or function dot prototype or you know, all the various prototypes. And so it's kind clean in that regard. And basically, the way that it was implemented in ES2015 was not correct. And so when you try to construct one of these classes, they just throw an error. And so there's been you know, a lot of discussion on this topic over the years and there have been a few attempted fixes. That didn't really work. but overall, the, the decision of the committee in es2015, that extends null should be a thing that behaves correctly is still unchanged. And since then, we've started to see new things in classes that are just, you know, further sort of drifting out of alignment here, for example, class fields, which are not Instantiated correctly. When you use extends null because of how it's currently specified. And so, I think moving forward from here. There is interest in this, this feature behaving correctly. Because you know, it you make a null prototype class, which is you know, useful for sort of locking things down and making sure you're not exposed to prototype pollution whatnot. But on the other hand, you know, it hasn't worked for a very long time and it's pretty Niche So I could see, you know, a possible Avenue of discussion here being You know, maybe we should just leave this broken, personally. I think we should fix it. And so I have proposed this change, which is pretty simple, But basically, it just, you know, it allows you to construct these classes and it does this by Basically, allowing for.. it basically changes the class into it base class instead of a derived class. And this has the side effect of not requiring, a super call. And there some, well, there was some contention around the semantics of how super should behave in these classes and previous opinions I've seen that sort of Acted were like, super should always be a valid thing in a class that has Heritage which means it has like the extends clause and then another one was super should throw in classes when they extend null specifically. so I don't know of anybody today who says the it should throw thing, which is why I have brought this presentation here because I believe I have something that is somewhat passable. At this point, but basically, yeah, it's just once the, the class gets past the super call, it works properly. So that's basically what I've done is just patched that to work and you can read the pull request to see how that works. I have some sort of examples here of what the The various weird things you might to mutate a class Look like, which we discuss in detail if anybody wants to, but Yeah, that's basically it. So, I can go to the queue now.

YSV: We took a look at this proposal as a team and one of our Engineers implemented it. One of our worries Was that the way that super works is we need to do the lookup and the determination that it’s still special casing that behavior. Etc. dynamically. And from our experimentation. This turns out to be true, which means we're going to have to admit two completely separate sets of byte code to implement. Correctly, and it has cascading effects on the entire engine. We're not super happy about this, but we see why we want something like object extends null. So the use case is definitely there. We talked about a couple of different potential Solutions like instead of null to extend void, which also people weren't super happy about because you know void 0 evaluates to undefined so that Feels a little bit strange, but with something like void we can do the special casing at parse time rather than and like in at the correct bytecode immediately rather than having to it at runtime. I think that the super case hasn't been fully finished yet. And I don't know if others are going to agree with me here.

GCL: yeah, that's a very reasonable. Constraint, I think personally, I don't really have an opinion on like, what the, those kind of the requirements on a super call here should be, I just kind of want to make the overall Feature work. So like I don't know if you know, Firefox wants this to grow and other people are not against that, you know, maybe we can move forward with that.

YSV: I'm not 100% sure if throwing will fully address our case. I think so, the thing that would address our issue is, if we could do this at parse time rather than dynamically like it goes statically analyzable, but you could assign a variable to null and then do class extends. And then that is null. So we would still need to do a dynamically Also, if classes had been specified differently. This would be easier in this would be a no-brainer. So we're kind of stuck with the class implementation that we have. Yeah. I don't know if there's a special syntax that we would be comfortable with introducing here, like, rather than class having something like base class and then it doesn't have the possibility to extend. There was the void suggestion, but this is sort of the constraint that we're working with.

MAH: I basically wanted to echo Julia’s point. I think, from what I understand, the intent of extend null is to be able to create a class that doesn't inherit from object prototype. In this case, it really means creating a base class (should read root class) that you don't want to inherit from anything. When you write extend with an identifier, and that evaluates to null, a base (root) class is probably not what you meant, which is why I would support extends void instead because that is pure syntax. It's not an evaluation. void 0 does evaluate to undefined but that is no longer the syntax form expressing a base (root) class that doesn't inherit from object. And as you mention, we're starting from a weird situation because the implicitness of no extend clause means that we actually inherit from object prototype. If all classes never did we wouldn't reveal the situation and we would have had to require extends object for everything. I think we're supportive of extend void to support this use case.

JHD: I just wanted to mention my mental model here. is that I'm, this topic has had a lot of things thrown around. The current thing is but any class that has extends in order to use this in it, I have to call Super like, in the Constructor is called super first any class without extends. I can't go super a class has extends that can't call Super is really weird. And the thing I didn't keep squishing into the queue topic, is that? I think it's also weird if there's a special syntactic form for null if I can do class extends X for any expression and null was a valid value, and it seemed really weird to me to not allowed. Null in there. And so like, there's some comments in matrix about null being special. It always going to be a special case, where the why can't can't `super` special case in?

YSV: Because of the impact on the run time, this is a serious concern. Like, this isn't something that is Trivial or like easy to do. This is this is something that I don't think we really want to go down that road. We wouldn't be comfortable it.

JHD: So, like optional calls. This doesn't have a concern because that's not every class or something. But this would?

YSV: This would impact I think that this impacts private fields and we would need to introduce a new Field on all objects, which is like we're already running it like low on memory for how we describe objects. So, I mean like things are solvable. solvable. Yes, I think that there's a better way to solve this. Than forcing this to be dynamically determined.

JHD: yeah, I can't speak to the implementation difficulties, but it'll be weird I think if it if we do something static.

JHX: Yeah, I really hope we can fix that about. I remember this a service that as some were asking me about the disk extending now Promenade. Inside time. I tell them, I think the committee. What? Well, fix doctor in, maybe two or three years, but now the serious, have our pasta and with we're still in the same place, place, so I really hope can find a way to somehow because programs need that. They need a way to create an object or world without the link. Objects. and I think, I think this is just a super problem. Maybe we could relax the rule to allow silver and in this case and and actually I think for the most programmers that they don't care the this super problem that because you allows you for the two super it just in these cases if they just do nothing. and so I allows super for that doesn't cause any problem. I mean in the, in the, in the map review, I anyway, I really hope we can we can fix that.

BSH: So, it just occurred to me that it, first of all, if you want to just extend the value null then you have to deal with then you probably don't want to have to, you probably need to go with the you always require a super because if you write a class where you do a class A extends, some expression that might result in the null, then, then, well, when you write the body, Function, you can't sometimes have called super as sometimes not that easily. So I would think that you would, if you're gonna do it that way. You probably have to have a call to super but maybe that's just the wrong way of going about it. This is a weird and unusual situation. Do you really want to trigger this sudden Behavior? Because the dynamic expression gave you a different Dynamic like happened to Null. Maybe you really should have to have a syntax difference. If you're going to get this significant difference in. so that would make me lean more to the class A extends void, which is an actual different syntax in order to specify Disturbing Behavior. That way you could tell when reading it that you're getting, this different behavior and know that oh, well, you shouldn't have a goal to Super because you're not extended.

MAH: Yeah, in my opinion extends, extends, null something that every is to know is just wrong and you know, they like it doesn't really mean anything if the intent was to create a base class that didn't inherit from object using something that evaluate to null at runtime is the cause of the the problems. So, I agree. I'll move to my next one. The so I also want to say that extends void can actually be polyfilled. So the transpiler can emit a nil class and the only observable difference would be if you look at the Prototype chain. Of your generated class Constructor, but besides that, it would behave for all intended purposesas extending from null. we're not, adding the object prototype in the book that changed. So, there is a way to actually implement this in transpilers as well.

GCL: Yes, I was just reading something in the, in the, in the chat. Yulia I don't remember if this was intentional or not, but extending function.prototype when you say extends, null, Maybe. Something that's not supposed to happen.

YSV: So, you mean modify the spec in order to not need to do this, what you're suggesting? Because it's important like that suspect recording.

GCL: Yeah, I don't remember remember the original. Like, I've basically rebased this PR like 300 times over the last two years and I feel like it's not supposed to extend function.prototype on the Constructor, but I don't remember specifically.

??: There are some test cases like can go over what you about my it you think it would be okay to have liked it to have two Constructor be an Call or something.

GCL: We call levels have to extend function, like you can set the Prototype of function object to null. You just wouldn't be able to use like.com and stuff on it. All right.

SYG: Okay, so just clarifying that that that is on the your proposal.

GCL: Yes, that's a available option. I believe, but I'm not a hundred percent sure certain.

YSV: I do have one item on the queue that I just want to really quickly get to. That's all right. So I think that the proposal like the intention of The Proposal, what it tries to enable, which is the object outside prototype of null pattern, that we in non class object creation, or class creation, make that something that's accessible within the class. Syntax would be really great. That's fantastic. And making that something that is clearly communicated to the user would be even better. So, I think that the, the idea of the This great, very much on point. We should fix this. We just need to figure out how to communicate this in the clearest way to the user. And I think MAH gave a really great sum up that basically, you know, this setPrototypeOf null, people do that because they know to do it because they've been working with JavaScript for a long time, but maybe we can make the class syntax somehow better. Just just as a thought like, you know, we talked about extends void, we talked about extends null and the expectation of how super works when there was extends, maybe like in C++. We have virtual classes, which must be extended in order to be used. You can't use them there and this feels like something similar we want to do here. I don't think virtual is a good name, but I would be open to seeing new syntax for this feature because I do think it's useful.

GCL: Okay, so I guess at this point, I'd just be curious, like, especially like I said in the first slide, slide, do we want basically like I can probably go and look into the function.prototype thing for next time or we could just say let's come up with a new thing, and I'll come back with an actual like proposal for a new syntax or something.

RBN: I brought this up in the chat as in Matrix, and I was wondering if there's a possibility and what Yulia and other implementers might think of changing the specification to introduce a built-in Constructor function, that specifically handles the mill case and have these spec change the default prototype for extends, null to use this built-in Constructor, it have, that be the differentiator between whether it's a class extends. Or a class with no extends, Claus versus a class that extends null with this

YSV: Would this be used for all class declarations.

RBN: Just class extends null. So basically, it would insert something in the Prototype prototype chain between the Constructor and function dot prototype that essentially it's a marks the class as having extended null, which is I think when the comments you mentioned is was a concern is that you use the Prototype the Constructor. so differentiate between function prototype and whether the class extended no required more information, So possibly inserting it sits between that only is essentially used as a marker, but it could also, theoretically be a function that does the thing that extends null class might do producing the correct type from Super that you'd expect from extends null using your target cetera.

YSV: So My worry is that we might actually end up with the same implementation concern having that as what we currently have. But maybe there is a way to solve it. I need to think I look better a little more into go get our sketch of this implementation. One of the one thing that I do think like, came out of this conversation that I think was a really good thing to think about is just how do we communicate this to users? Is extends null the best way to do that? Because like this is a super useful feature. It's a base class. Nothing on it. That's fantastic. It has to be it has to be extended by their stuff. You can't use it bear. That's also a really great concept to give to users. How do we communicate that properly? so we can investigate it, but don't have a clear answer for you and I'm a little worried that we're gonna run into similar problems as what. We just discussed also with a solution.

MM: Yeah, two things. First of all, does the need for this actually come up in practice? Because if it doesn't then or if it doesn't come up in practice enough and it's not worth. It's not compelling enough, then I would not support extends void as a syntax if it does or you or any. Taken or static syntax. So we just leave this unsolved. If there is a compelling need for it. Then I want to respond to the why extends void actually does read well is extends void shouldn't be thought of as it extends something. It should be thought as saying it extends nothing i.e. It does not extend anything and which Is the normal way to that English thinks about, you know, predicate, nothing is that it's empty. So so it does express the intent is that you're expressing another kind of base class. Basically, there's two kinds of Base classes, so, so that's it, that they really the main question here is, are there actually compelling needs for this?

GCL: I have seen use cases demonstrated, but I think the concept is useful. I mean, I can think of code where I would use it. I've seen other delegates present. Code bases, where they do similar patterns,

MM: so, in general, the, the standard of syntax, new syntax requires a very high bar. You have extended --

YSV: Yeah, okay. So the from my view, the being able to have something that's a non directly invocable base class. Is that this allows you to, to describe an interface or certain set of behaviors that you want to have disparate classes inherit from, this is how I've seen it used. I think there are probably other ways to use it, but as a concept this thing, which you can't use directly But it's actually super useful anyway for describing shared Behavior help organize code bases in a really nice way. That's what I see as. And also the fact that it doesn't have any relationship to any other prototype. That is really lightweight. We actually use such classes within spider monkey for some of the lightweight constructs that we have. So that's on our JavaScript side of the little spider monkey code base. So, I think there really are a couple of niche use cases, but right now the Syntax for doing that you can't can't use class. You to use objects.set prototype of, and it's a little clunky. It is sort of an expert feature. You have to know what you're doing, but I think that the code pattern is something that can be beginner friendly, and can also really benefit programmers in organizing their thoughts. Okay. Well if that's worth it, then I think extends void does read well. It is the reading that has extends. Nothing is cos is consistent with taking that class to be a base class?

SYG: so, your thought about Yulia, your thought about how we communicate. This got me thinking with the structs today. Structs tries to solve several different problems, but their theme is restricting is taking things away from General class declarations to make it more restrictive. So that it's better for some use cases, like concurrency or sealed objects or better memory layout or something like that. This extends null having a root class thing that doesn't derive from anything. is to be looked at it such a restriction. Would it make sense to explore this with structs? And if that and that would be a long ways off. So this is really just more of a thought. And if that were possible via structs with their do much demand for it by a regular class syntax, I guess the, the actual question here is, do you see the kind of restriction where we don't want to inherit from anything. Do you see that? As a, a Restriction. That's The desirable of itself or or would be fine to be as a package deal with other restrictions like a sealed instance. That, that was more of a question to Yulias, is use cases.

YSV: What was the question was about using struts?

SYG: So structs have additional restrictions like sealed instances, and I was wondering if the no Base Class restriction with the extents, null is a desirable in and of itself or does it also make sense in conjunction with other restrictions. Like could we This use case purely - drums.

YSV: That's a good question. I was thinking that it's useful independently. Like you may just want describe an interface and just have it be very similar to the class that inherits from it. I'm not sure how exploring this purely for structs would play with classes. I'm blanking right now on the Class structs proposal. So I can't answer this question very well. Yeah, if we can follow up and because I think that that might also be an Avenue of exploration, but to be completely honest, I think that It may have the same communication problems to users. If we do this with struts because people will expect this to be related to classes as they have for some time. So I think there might be some issues with that, but maybe can discuss it more in committee and watch this out a bit more.

GCL: I think this is a good productive discussion. I think moving forward here I'm going to pursue some details about more of these runtime requirements and maybe how other syntaxes or proposals might cover this and maybe come back with something else in the future, or maybe not depending on where that ends up. Thank you, everyone.

### Conclusion/Resolution

- GCL to explore more details of runtime requirements and explore alternatives

## Error Cause for Stage 4

Presenter: Chengzhong Wu (CZW)

- [proposal](https://github.com/tc39/proposal-error-cause)
- [slides](https://docs.google.com/presentation/d/1bwS6QRmF5o6bDSn4OQPTv4GpiQ5o0nzcvqiED9Sii44/edit?usp=sharing)

CZW: I'm CZW from Ali Baba, and I'm co-champion with HHM. And the topic today is about it. course and the let's have a quick recap the motivation for the properties tab to accumulate errors with the additional, contextual We're going to have a tools from accessing the chance of errors and formatting it with the tax properly. And this is the section is very simple. We are adding a new Option bagger meters to the Error Constructor., the Native Error constructor and Aggregate Error contributor and then restore the property cause on the pejorative error object. If the prop presents on the options, Bag. The current status for the proposal, is that we have editor approvals for the normative pr and we have tests coverage in test 262. It have been shipped in their implementations, Chrome 93, spider monkeys, and Firefox, 91 and (?). So the requirement of two significant implementations should be met, and that's great. Thanks. People have feelings and apparently, we (?) developer tools to utilize the new teachers. So currently Firefox developer tools already picked it up and they displayed a nice preview for the error cause change. and we have several voices spoke out in the article that they would like to adopt error cause for their use case like explicit resource management. And that's all we have for today. So I'm asking for stage four for error cause. Let's see if there's anything on the queue.

BT: Queue is empty at present.

MM: I support this.

SYG: Ship it.

JHD: +1

CZW: Thank you.

BT: All right, so I guess Hax is also a plus one. Yeah, there doesn't appear to be any discussion. So unless there are any objections right now, I think we're at stage 4. Congratulations.

### Conclusion/Resolution

- stage 4

## Array.fromAsync update

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-array-from-async)
- [slides](https://docs.google.com/presentation/d/1OHfB6rMrv27A2SGOZ-hw0U0t6f5OP1beLVsKKp48-Dw/edit?usp=sharing)

JSC: This is a lightning update. 10 minutes long, very fast. Not much time for plenary questions. Please create our comments in an issue on the repository.

JSC: A rapid review. This is currently a Stage-1 proposal presented in August: Array.fromAsync. It's like Array.from, which creates a new array from an iterable and dumps the iterable into an array. So array.fromAsync is just like that except it also works on async iterables, and it returns a promise. So, lots of people, including myself, do this manually right now with for await. We want to dump streams or async iterables into some synchronous data structure so we can inspect it, examine it, or print it or whatever. Unit tests, command-line interfaces.

JSC: Just a couple of quick updates. Because `for await` supports sync iterables with promises, Array.fromAsync has been changed to support that. So any sync iterables yielding promises can be flattened into an array.

JSC: So there's that just a couple three controversies to touch on real quick. One: There was a question of whether this was redundant with iterator helpers. I think this is resolved, we talked it out with at least one co-champion of iterator helpers. This is about a method in iterator helpers called toArray. I think we should have both or at the very least, we should have Array.fromAsync. We already have a readout from, I think that the champion of the, at least one co-champion agrees. I don't think there's much contention around here anymore.

JSC: There are two other areas of more contention. Maybe not super strong, but it's something that I wanted to float and to invite people to leave comments on their issues. #7: Non-iterable array-like inputs. Array.from supports non-iterable array-like objects as inputs. These are objects that do not use the iterable interface. They instead have a length property and they also support index properties. So one representative said yes, fromAsync should accept them. Another representative is iffy about it, because the use cases are murky or less clear. Basically, though, the question is: Should the inputs of the Array.fromAsync be a superset of Array.from? Because if Array.fromAsync doesn’t accept non-iterable array-like inputs, then it would start being a Venn diagram with an intersection between, rather than being a superset of what Array.from accepts. My current inclination is yes: that it may be surprising when someone switches from Array.from to Array.fromAsync, and they're relying on this behavior. The spec currently reflects that, but since there's a little bit of contention on this, please feel free to leave comments and hash it out in the issue before I present this in the next plenary meeting or whatever.

JSC: There's also a debate with whether TypedArray.fromAsync should exist too. It's very similar. I don't really have an opinion on this: whether to punt it or whether it's within scope of this proposal. Please feel free to leave comments on issue #8.

JSC: I'm not asking for Stage advancement or anything, but I would love to hear opinions, especially about non-iterable array-like inputs, but, if not, feel free to leave comments. I'll give it, I guess, 30 more seconds for people to leave stuff on the agenda and then I'll close this presentation. Okay. Well my grotesque pick was a legs and typed array thoughts.

SYG: So, if fromAsync were to take array-likes, are you thinking it would have a microtask tick? Like it would `await` the thing. Or it would check if it is a sync iterator and then only then do await.

JSC: So I think this the answer comes with how `for await` works with arrays of promises. The answer I think is, yes, I think it would act like `for await`, whether on regular sync iterables with promises, or non-promises, or whatever, it would `await` on each item from the array-like, like a sync iterable. Does that answer your question?

SYG: Yeah, it was an opinion thing. I was just wondering, are you again expecting that to make sense?

JSC: Thank you. Yeah, I believe that's how the spec is right now on. If it doesn't, that would be a bug. And, as for your TypedArray thoughts for the type of the right thing.

SYG: I'm wondering what the use cases are for TypedArray. The use cases abound [for Array] and they make sense and, you know, maybe some expensive async thing that produces an object which we then want to collect into an array. For TypedArrays, I'm thinking about the async operations whose output is just a number that you want to collect into a TypedArray. I suppose for floating-point stuff. That might make sense. Like, I'm not opposed to adding it either. I just don't know what use it would see.

JWK: Maybe converting a Stream into TypedArray.

SYG: But per-element async for the TypedArray, like you're doing here? I don't know.

JWK: Yeah, that's strange.

JSC: Yeah, so, I don't know of any specific use cases. I can envision streams that you would want to dump into a TypedArray, but when the precise elements yielded that are going to be inputted into the TypedArray are homogeneous numbers, rather than for being per-element, rather than being chunks…I'm not sure.

SYG: Yeah, we're streaming. You probably want to chunk then.

JSC: Yeah. So, I don't know. So I haven’t decided whether we should keep it separated or within scope of this proposal? I don't have an opinion. Please feel free to leave a comment on it. My inclination is why I put yes here, but it's very weak. I could easily swap to no. For next, plenary to keep it small, Small, if since I'm getting at least weak signals of negative signals Happy to switch it from you to no.

SYG: Yeah, I think my I'm weak no, because I don't know. how it would be used, and Since the end, there's no reason to add it. Now. We can always add it later. At least, the comment from the core-JS. Maintainer is like, they're going to add it to core-JS. Don't add it to the know.

JSC: Okay. I will switch it to "no" for next plenary. That's about it. So right now again my for everyone, my inclination is not adorable array, like inputs. S, each item would be awaited, just like async iterable would be non a sing curable, sync adorable and that's what I will climb to present and explain Airy. Please feel free to leave comments on your stuff on the issues if you have any opinions. Thank you much again. That's it.

### Conclusion/Resolution

- Update given; no TypedArray.fromAsync in this proposal

## BigInt Math update

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/tc39/proposal-bigint-math)
- [slides](https://docs.google.com/presentation/d/1qCd-eB3LrzBPsHqXkNt_V5zBq4EpCFipbZVf_mJkQ8Q/edit?usp=sharing)

JSC: This is the same thing. It's a very fast lightning update on BigInt Math. This one is a wee bit more complicated, but it's the same. Not much time for plenary questions, but please feel free to leave comments on the stuff.

JSC: Rapid review: BigInt Math seeks to extend a couple of Math functions to accept and return BigInts. I work with BigInt sometimes. I'm glad they're in the language. I think it's weird that Math stuff doesn't work on them while operators do. You know? Basic stuff. abs, sign, pow, max.

JSC: Not proposing any new functions yet. Instead, laying the groundwork for new functions, like bit length, pop count, that would be polymorphic. Just like how this proposal would make them polymorphic.

JSC: The philosophy is trying to stay consistent with precedent already set by the language. Although what precedent means can be a little murky. I know from my perspective I think of “operations” as including both operators and functions. And operators are polymorphic, and so we want to match that precedent.

JSC: The big change is that most proposed functions were removed. It's because they didn't think there was either too much computational complexity or that there’s just no use case for them. Now, only these five functions would remain. And it reached Stage 1, just to make sure everyone remembers: Stage 1, “worth investigating”, back in August. So I'm planning to present this again sometime but there are a couple of controversies to work out.

JSC: Number one: Whether to make a couple of Math functions polymorphic – versus making a new global like BigMath or whatever while keeping stuff monomorphic. I think I have a weakly strong opinion that I would rather keep stuff polymorphic. I think it would be weird to add a new namespace object. I think that we already have polymorphic operators, and I don't really see much of a distinction between syntax operators and Math functions. But a representative has floated this and so please feel free to leave comments on Issue #14 about this.

JSC: I think the trade-offs are similar for user burden, mental burden perspective. Either the user has to remember which Math functions are polymorphic, or they need to remember which Math functions are also in BigMath. I think that's about even. SHO has a good point that they would also have to be a Decimal or DecMath too. We would have to add BigMath and DecMath versus making a couple of Math functions polymorphic. Either way, there's going to be a table, and it's just whether the columns are going to be global objects versus a polymorphic impotence.

JSC: Another controversy, about sqrt and cbrt. Two representatives have battled in an issue. I spun this out into a new issue. One representative’s perspective is that sqrt and cbrt are useful, and that they are difficult to get right in userspace, and it is weird for them to not be valid while we have exponentiation. They would truncate towards zero, and that representative considers that unsurprising, since it matches BigInt division. Another representative has pushed back on this. And so, they've gone back and forth about userland versus not. I don't have a strong opinion about this. I see both sides. Please feel free to hash it out in the comments and we'll see if there's also time in the plenary.

JSC: There's also a smaller less serious one: min/max with mixed-type equivalent values. Now. I strongly believe that we should have min/max with mixed numeric types. This is because we already have comparison operators that are well-defined over mixed numeric types. And I view min and max as variadic versions of < and >. I feel somewhat strongly about this, but then there's the question of what we do when we have two minima or two maxima that are equivalent but have different types. Because loose equals would say they're equivalent. So there are three possible mental models that I can see – four, technically, since with the first one you can go two ways. I personally prefer the sort model here, but I can see points with all models there. Hopefully that will be hashed out before the next plenary meeting, because this would probably also block Stage 2 if it's still up in the air. That's it. That's the update. I think I have four minutes left. SHO of Igalia. Please feel free to give your opinion.

SHO: Yeah, since I'm the only person on the queue right now, it looks like. Yeah, just the polymorphism. I think it really would help working with Decimal, which we will be having an update for in December and just to say, thank you for doing all of this work. I'm really excited and I think it is going to make adding the new number types even smoother.

JSC: All right. Thanks SHO.

SYG: I don't quite get the Decimal argument. Is it that using a BigInt or Decimal namespace object is bad for discovery – or bad because you really want polymorphic things?

SHO: Yes, I think it is better and I don't have a more refined way to say this at the moment. I would have to think about it, but I think it is better for users for the Math functions to be polymorphic rather than looking up different objects. As JSC points out, chances are, at some point, there's going to be a table that tells you which ones are polymorphic and which ones aren't. I would prefer they actually [all] be polymorphic and return no-ops. If it doesn't make sense, rather than throwing. But that's a whole different philosophy discussion there. In this case, I think it is better to have a table where you're looking at which Math functions are polymorphic versus having different global objects for each numeric type.

JSC: The point is that: Either way we're going to have a table. It's just whether the columns are going to be “in this global object or not” versus “accepted by this polymorphic function or not”. Either way, we're going to have a table.

SYG: Okay. Thanks.

JSC: All right, BSH. “BigInt Math, mixed types allowed?” Answer is no, it wouldn't. It would match the semantic precedent set by the math operators. The only mixed types allowed are in comparison operators, so min and max allow them. Everything else, you know, no.

BSH: All right. I just wanted to confirm that we wouldn't have this weird conflict. Thanks.

JSC: Thank you. I'll give another half a minute for any more tcq questions. Actually, is WH here? I would love to hear your opinions about sqrt versus cbrt. If not, that's fine.

WH: Sqrt is definitely useful.

JSC: Yeah. I know that another representative has asked: Do we have any specific use cases? I know that you've given estimations of stuff [as a use case], but if I guess if you have any ideas for specific use cases, that might be might be able to try to persuade others about this, then please feel free to contribute to issue #2 with those specific examples too. But again, thank you for participating

WH: Are you saying that you are not going to include it?

JSC. So like I think that from it. What other represent, what I've seen other Representatives have The, I think they think that the examples you've given so far have on issue 16 have been a little abstract, or something. I'm not, I basically, I would, I would love to invite further engagement the on the issue with regards to like when people would want to take a square root of the BigInt.

WH: This seems like a very abstract way of saying no.

JSC: I don't know. Do you have an opinion on whether it would be weird to include sqrt but not cbrt? Because I think that would be kind of weird, to not consider them as a bundle.

WH: Yes, it would be weird to get one and not the other. I don't understand the reason for resisting including them. It's very little code.

JSC: So the pushback that I've gotten from representatives has been usually from both, from both V8 and SpiderMonkey has been like they've wanted in general specific use cases for anything included in this stuff. Now, we could say that it's hard to come up with specific use cases for even subtraction for BigInts or for division of BigInts. I don't know the last time that I needed to divide two BigInts. But that objection has been there. So I guess trying to come up with ways to make that versus trying to make an argument from induction, “Well, we have exponentiation already. We should have square roots and cube root.” That might be more compelling for them [than that], at least for when I present again for stage 2. If anyone else has any ideas about that, please feel free to let me know. I've also thought of engaging the research interest group to see if they could research and find any specific cases in the literature where people have found them useful. In any case though, my inclination is that I would rather include them. But I don't want to include it if I'm going to encounter strong implementer resistance.

WH: If you get pushback, we'll deal with it then. I don’t want to omit it just due to fear of potential pushback.

JSC: All right. Thanks WH. All right, I think I'm about out of time. Does anyone else want to say anything before the hour? If not, then thank you very much.

### Conclusion/Resolution

- Update given
