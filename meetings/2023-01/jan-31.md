# 31 January, 2023 Meeting Notes

-----

**Remote attendees:**

```text
| Name                 | Abbreviation   | Organization       |
|--------------------  | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Santiago Diaz        | SDZ            | Google             |
| Ashley Claymore      | ACE            | Bloomberg          |
| Daniel Ehrenberg     | DE             | Bloomberg          |
| Rob Palmer           | RPR            | Bloomberg          |
| Peter Klecha         | PKA            | Bloomberg          |
| Michael Saboff       | MLS            | Apple              |
| Dave Poole           | DMP            | Apple              |
| Josh Blaney          | JPB            | Apple              |
| Ujjwal Sharma        | USA            | Igalia             |
| Ben Allen            | BAN            | Igalia             |
| Nicolò Ribaudo       | NRO            | Igalia             |
| Philip Chimento      | PFC            | Igalia             |
| Aditi Singh          | ADT            | Igalia             |
| Romulo Cintra        | RCA            | Igalia             |
| Luca Casonato        | LCA            | Deno               |
| Kevin Gibbons        | KG             | F5                 |
| Michael Ficarra      | MF             | F5                 |
| Richard Gibson       | RGN            | Agoric             |
| Chip Morningstar     | CM             | Agoric             |
| Yulia Startsev       | YSV            | Mozilla            |
| Eemeli Aro           | EAO            | Mozilla            |
| Daniel Minor         | DLM            | Mozilla            |
| Jordan Harband       | JHD            | Invited Expert     |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Duncan MacGregor     | DMM            | ServiceNow         |
| Chengzhong Wu        | CZW            | Alibaba            |
| Tom Kopp             | TKP            | Zalari             |
| Linus Groh           | LGH            | SerenityOS         |
| Istvan Sebestyen     | IS             | Ecma International |
| Ben Newman           | BN             | Apollo Graph, Inc  |
| Ron Buckton          | RBN            | Microsoft          |
| Chris de Almeida     | CDA            | IBM                |
| Justin Ridgewell     | JRL            | Vercel             |
| Willian Martins      | WMS            | Netflix            |
```

## Intl.NumberFormat V3 for Stage 4

Presenter: Shane F. Carr (SFC)

- [proposal](https://github.com/tc39/proposal-intl-numberformat-v3)
- [slides](https://docs.google.com/presentation/d/1b627TYDVDDcdae9D80CP5DLnSYX8GU97nmritxVN5Wo/edit#slide=id.g82ae0c50ed_0_111)

SFC: I’m going to be presenting Intl number format v3 for stage 4. So I’m going to go ahead and walk through the -- all the slides, including the ones that are -- in order to remind the audience what this is, what the proposal is all about. I first presented this proposal for stage 1 in 2020. It got to stage 2 in 2021, stage 3 later that year, and has been in stage 3 for about a year and a half now. And I’m excited to present it now for stage 4. So what is the proposal? We get a lot of feature requests and things each year. We look at which ones to prioritize. It’s very important that features have multiple stakeholders, already have prior art and Unicode CLDR and not easily implemented in user land. We previously took these three bullet points and have turned them now and codified them into the ECMA 402 contributors guide. As an example, these are how we process some of the feature requests. There’s various features that were requested here. Number ranges was one that was very popular amongst stakeholders. Many stakeholders and secured ELD support. Scientific notation styles. The issue is still open for that. It does not yet have very many stakeholders and the CLDR support is only partial, and therefore, that one is not being included in the proposal. So I’m going to go ahead and walk through all the content of the proposal. If there’s any changes since the stage 3 update in November 2022, the last time I presented on this, those will be highlighted. There’s not very many changes anymore. So as referenced in the first slide, this proposal is bringing number range formatting and includes currency into measurement units. This a screenshot showing an example of a number range. The way that we do this is by adding new prototype methods, range and format range to parts, as well as the plural rules analogue select range. The rest of this slide talks about how the format to parts works, how approximately sign works when the range collapses down to the same number. It talks about range to infinity as well as you we do support when the range numbers are not in order. So all these semantics are things that we definitely ironed out in great detail with this group, and these are the semantics that we landed. Another highly requested feature is the grouping enum. We have is used grouping which takes true or false and it’s not expressive based on what we know people want. This is another thing we reiterated on the different ways that we could have implemented this feature. And shown in the table here is what we’ve landed on. We have the min2 strategies, we have the auto strategy, which for backwards compatibility reasons supports the strings true and false. We have the always strategy and hen the false, which is basically turn off a grouping separators strategy. New rounding and precision options. Rounding priority, rounding increment and trailing zero display, all things that have a lot of motivation behind them. Rounding increments, I’m quite happy with the design that we came up with with rounding increment. I think it’s quite clean. Trailing zero display is something that -- another feature that is very commonly requested and actually, you know, ECMAscript is largely going to be setting precedent for good ways to go about implementing trailing zero display. Rounding priority is on the next slide. I’m happy with how we landed here. There are several different ways we could have gone about rounding priority, and yeah, the algorithm that’s currently in the spec is quite clean and I’m quite happy with how that ended up. In interpret strings as decimals, this is one thing I’m highlighting a change that happened since November 2022 at the end of the last meeting. I asked for some feedback on ways to go about this problem of how the set the range of the allowed Intl math mat value. I took that feedback and merged it with feedback from implementers, and this is the statement that we ended up with. So Intl mathematical values have range equal to a number, meaning that the magnitude of numbers represented are as equal to the range supported by a number type. But greater precision is allowed. So you can have more significant digits. The maximum number of significant digits is enforced by the fact that Intl number format always rounds numbers to a certain -- to a limited precision or number of fractional digits.

SFC: Rounding modes, we are now accepting these nine rounding modes as described here. One of the controversial things that we landed on was how to do the capitalization as well as how to name these things, this is what we ended up with. This is now implemented. Sign display negative, a small feature that came in from a use that are was very small and easy to implement. We went ahead and implemented this one. It makes total sense. It changes the semantics slightly around how to Delia with negative zero when displaying the minus sign. Okay, and that’s the -- that’s the extent of the features that are included in this number format V3 proposal. So now let’s look at stage 4. So the entrance criteria for stage 4 are “do we have test262 tests”. If you go to the speaker notes on these slides, I listed all of the test 262 for all of the features that are shown in the slide show. Thanks so much for our partners at Igalia for helping implement all of the test262 tests. Two compatible implementations with past tests, the -- this is implemented in all three of the browsers. You can click these links to see the details. Chrome is already shipping the proposal. Firefox is available in Nightly. I believe Safari is shifting in version 15.4, according to the issue. Next, significant in the field experience with shipping implementations as seen above. A pull request has been sent. The pull request is shown here. I’ll go ahead and switch over to the pull request. So this here is the pull request. It’s all green. It’s passing. This is what the pull request looks like. https://github.com/tc39/ecma402/pull/753. The whole proposal is integrated in here. And this corresponds to the, of course, proposal diff that has been, you know, very deeply reviewed. Thanks so much to RGN for his help in getting this all ready and getting the pull request ready for review. There’s a lot of other changes that also went in before it was finalized, putting up the final pull request. The Stage 4 criteria also say all ECMAScript editors have signed off on the pull request. That hasn’t happened yet because of the timing. But all of the issues have been resolved and I appreciate, again, RGN’s assistance in getting all those things together. So, you know, I presume that the editors will complete their review once they’ve had a little bit more time to finish the pull request and finish reviewing the pull request. So, yeah. I guess that’s all. So let me pull up the queue. Let me see if there’s anyone on the queue, and then I’d like to ask for stage 4.

BT: The queue is currently empty, but I encourage folks to jump in, either to comment aloud or to just give explicit support or anything like that.

RGN: Yeah, as noted, the pull request went up yesterday. I have not yet reviewed it, but am anticipating that there won’t be any major issues because Shane and I have gone over it in detail throughout the past week. There was a normative change in the spec itself, and there’s an updated pull request corresponding to that in test262. I have no objections, pending the final review and a little bit of cleanup. But substantially, it looks good.

BT: Awesome. Thank you, Richard. Daniel, do you want to speak on this topic, or we can note that have explicit support.

DE: Yeah, I don’t know, I’ll speak briefly. This proposal is well motivated in what it adds, as Shane explained. It’s been following the process kind of impeccably with,
you know, the completeness and implementations. And it’s -- I’m very happy with the incremental model that these number format or Intl features in general have been taking. And I hope we can apply that to more parts of the javaScript standard library, as we already have been. Thanks. Stage 4 support.

BT:Thank you, DE. USA, do you want to talk?

USA: Thanks for all the work and +1 for stage 4 from me.

BT: All right, thank you. And, DLM says plus 1 for stage 4 and no need to speak. Thank you for that. All right, we’ve heard some explicit support. We haven’t heard any concerns raised in the last couple minutes here. So I think that sounds like stage consensus to me. Congratulations.

SC: Thank you, everyone.

BT: Michael has his hand up in the actual meeting. Oh,
that was a clap. I see. Yeah, I make that mistake too.

### Conclusion/Resolution

Proposal reached Stage 4 consensus, with explicit support from DE, RGN, DLM

## Intl DurationFormat Stage 3 update

Presenter: Ujjwal Sharma (USA)

- [Proposal](https://github.com/tc39/proposal-intl-duration-format)
- [slides](https://notes.ryzokuken.dev/p/srVHQlzNO)

USA: This is a stage 3 update for DurationFormat. Another internationalization proposal that should hopefully get to stage 4 soon. But let’s talk about what we changed over the course of the last few months. There is basically just one big thing that needed the committee’s attention, but there’s been a major change in the proposal. It changes in many ways our format 2 parts, output work and it is motivated for many reasons. First of all, there were some bugs that existed in part 2 parts but that didn’t really come up until Mozilla started to implement it, so, you know, I guess it I could go a bit and show. But, yeah, thank you, Frank, for mentioning this. But there was this bug where, you know, the list formatting was all right for most of the parts, but for digital sections, the list formatting would break and it would create this complicated -- well, incorrect, basically, result. Then we also had a number of implemented as well as user feedback around what the output should be. The general understanding, also this had always existed as sort of a suggestion by DE. RB also suggested this early on, but basically to expose all the individual numeric parts. While this was pretty early on, this was raised again later on. The idea was that the granularity of the result was too low to be as useful to the users, and there were a number of use cases around styling differently certain parts of the result, which made us want to do more granular formatting when it came to format two parts. So that was incorporated in this change as well. And also, it settled a rather complicated API bikeshed. So if you remember from temporal durations, you might know that there has been, like, some sort of back and forth between different people in the committee around the units, should the units be singular or plural. The idea is that durations primarily use plural units, at least for input, because it’s all about the number of hours, and therefore, it makes sense to say hours instead of hour, which might refer to a specific hour. But it wasn’t completely clear how this would have applied to the formatToParts function. Here we settled this by agreeing that the name of a unit has to be singular, whereas when dealing with quantities like duration, the units can be singular. This took a lot of back and forth and discussion within the tG2 meeting, but at the recent TG2 meeting, this was approved by the whole internationalization group, as well as i have heard positive comments from the implementers. But, you know, we could hear from them again. The question is, if I’ve explained everything properly, what changed with this, is can we have consensus for this? Any questions on the queue? Any support for this change?

BT: DLM says plus 1. Changes look good to me.

PFC: (via queue) I support this.

BT: Shane, plus 1. Reviewed the PR, no need to speak.

USA: Perfect. Thanks, everyone. Especially, before I finish, I wanted to thanks all the implementers, but especially Frank Tang and Andre Bargul and Daniel Minor for being quite proactive in these things. It really helped a lot. All right, that’s all I needed. So a bit of time back to the committee, and thank you all. BT: All right, thank you.

### Conclusion/Resolution

- TC39 consensus for normative PR https://github.com/tc39/proposal-intl-duration-format/pull/126. This pull request alters the output of `formatToParts` in many ways: fixes bugs, makes the output more granular as well as makes it more consistent with `NumberFormat` and the rest of `Intl`.

## Problems with import assertions for module types and a possible general solution + downgrade to Stage 2

Presenter: Nicolò Ribaudo (NRO)

- [Proposal](https://github.com/tc39/proposal-import-assertions/)
- [HTML Issue](https://github.com/whatwg/html/issues/7233)
- [slides](https://docs.google.com/presentation/d/1HbWhyo4tSnpv4vMZqCa2YQvi_mKdpDi4JWWBtSUQqQY/edit)

NRO: Okay, so hello, everyone. We’ve been experimenting with web platform, different integration, how the current import assertions proposal fits their needs. And we found that there are some problems. So just to look at the first line, I first got you the current semantics of the assertion proposal, what we would need, a possible solution, and then maybe a request to downgrade to stage 2. So just recap, for import assertions, they’ve been presented, I think, more than the goal. They allow us some, well, assertions to the host when importing modules. So the host can validate that the imported module respects some conditions, and to prevent the validation of the module. They are used, for example, to allow importing JSON files or css modules, making sure they’re not files with a different extension that would -- allow executing code unexpectedly. And there are some invariants on what the host can do with these assertions. They can only influence if a model is awaited and not how. So, for example, you cannot define different resolution strategies if there is an assertion. They can just be assertion about properties that the host can detect using other mechanisms. And import assertions should not be used as part of the cache key models. This model case is import cache the used by host to make sure that import the same module multiple times actually gives you back the same module, the same space and doesn’t validate the module every time. And hosts should not use assertions in the same key, which means if import the same module, like the same specifier multiple times with different assertions, you should always get the same module back. And due to integration problems with some host specs, namely HTML, the proposal doesn’t disallow use this part of the cache key, but just recommends not doing so. So I was saying these host invariants guarantee that if multiple imports even with different assertions have the same specifiers, they should all give back the same result. A bit of history. So the proposal was originally for generic import attributes. Where you could pass any type of data to the host. Even if the only use case was JSON, CSS, and HTML modules, but there was already some desire to potentially make this more powerful than just specifying the model type. However, it has been the restricted to only specifying the type of the import module with a single sing since it was the only practical use case we had at the time. And then it was diverted back to the original extensive syntax with the restriction that these attributes were not part of the cache key, and the keyword has been replaced multiple times. First from `with` to `if` and then `if` to `assert`, meaning the proposal as it is now can, and it was finally approved for stage 3 in September two years ago. We relaxed restriction that HTML could use -- that hosts could use the assertions as part of the cache key. Okay, so let’s now see what the web needs. On the web, there are resources with different types, such as images or JavaScript, CSS files and for every type, the web has different loading strategies, depending on how that resource is going to be used. For example, it has different CSP policies between scripts and cSS files because they have scripts are more powerful, so the makes sense to script them this different ways. And also it sends to the server different information to tell the server how the file is going to be used. Such as the Sec-Fetch-Dest and the Accept HTTP headers. For example, if you’re loading a stylesheet, the request will tell the server that the browser is expecting a text that is just my type and this file is going to be used as a stylesheet, and similarly for the script, the script tag, the accept header is different and the destination is going to be script. Can we do something similar with import assertions because ideally, importing a CSS module should work similarly with importing a style sheet that works. So the HTML would like to send to the server this text header or to send the style fetch destination. And we can only do this if the browser knows how this model is going to be used. And also, we have, like, talking with developers, with tooling out, it came up that assertions are not always fully interpreted as just assertions. It’s hard for developers to understand what is causing a module to interpret in a certain way. If it’s a type assertion that is causing this data which consistent able to load to JSON or if it is MIME type or the file extension. And right now, the assertion matches one to one the MIME type for extension of the import model, so it’s not really wrong to say that the type assertion is guiding the way the module is interpreted, or at least you cannot observe that it’s false. And there have been also some attempts by even popular tools to use import assertions to guide how modules are interpreted. For example, TypeScript was considering using this resolution header while assertion in their type imports to tell the types of compiler how to resolve or model, or Bun was considering using assertions to load macro files. And even if this is not what assertions are meant to be used for according to the proposal, since they should only assert certain properties of the import model. So we’ve seen that -- for the following assertions that do not solve what HTML will need, what the web will need, and also that they don’t really match the mental model of developers. So we start to think about a possible solution. And what we have found -- and, again, this is just a possible solution. It’s not something we’re proposing right now. Is to explicitly load the type to affect how a module is loaded or evaluated. For example, HTML could use the proper type to send it to the server. And also update can syntax to clarify they’re not just assertions anymore. For example, we could go back to the origin with keyword. And there are also other possible benefits to this solution. Such as being able to use the syntax space also for other proposals that are currently trying to extend how models, how import statements work, such as the import reflection and the deferred module evaluation. I’m modifying the import behavior in they could maybe’ reuse the options bag as the new import assertions model. In previous discussion about the proposal, before the restriction of what hosts can and cannot do, there were some concerns about that if the import assertions were too flexible, it would be hard to write portable code, because every host, every engine, every tool would come up with their own custom import attributes. So a possible compromise would be to specify within ECMA-262 which is the least valuable attributes and how do they behave. We could start with just the type import attribute or import assertion whose behavior is to be tasked to the host, and such a proposal could introduce new valid attributes, such as deferred or reflect, as shown in the slide before. Another alternative that was considered was to only allow a string to modify import the type. And that was considered too much restrictive, because developers would have needed to, like, invent their own DSL inside this restricted syntax space to be able to express more info. And even if this possible solution right now only allows a type attribute whose value is a string and has the same expressive problems, it could be expanded in future to allow new attributes or to allow complex values. So instead of just being a string to the host, we could, for example, add array values or, like, Boolean, anything that we might need as part of this extended options bag. We have some possible solution, but are the is a big problem. Import assertions have been a stage 3 for a while, and they’ve already been shipped in some engines. So how can we think about different solution if there are already shipping implementation of this feature? Right now existing tools and run times shouldn’t do anything. It’s fine to ship the unship the current up. Ation because there are possible users relying on that, and we can start collecting some -- in the ground some statistics, some information about how frequently import assertions are used to see if it’s possible to maybe one day unship them. In parallel, we can work on using new import assertions and semantics that we can agree on and implementations can start shipping them while maybe trying to align the assertion behavior, to this new behavior while keeping the original syntax so that users would likely not notice that there is any difference, and websites -- or server side scripts already using the assert syntax would continue working, even if it’s likely different semantics in some cases. And in long term, hopefully we could remove assert from the language. If we see it’s not compatible, maybe assert could go in normal options or deprecated and we could still give users the keyword that would represent what the feature actually does. While still keeping the compatibility with the current Stage 3 proposal. So, again, the next steps, please let’s stop shipping import assertions, so we have more time to think -- to design proper solution that would fit the needs of HTML. The syntax I’ve shown is still a strawperson. We still need to find a solution that satisfies anything, anyone, as you might remember, finding consistently has not -- we’ve already discussed a lot of this, and we already have many desires, many constraints we need to take care of, hopefully we’ll find a solution that satisfies everyone. But don’t consider the syntax as shown as final, please. If you want to work with us on finding some, like, possible final syntax, we plan to do that -- we have some goals where we talk about modules every two weeks, and you can join us in the calls and we will propose something hopefully in a future meeting, hopefully March or May. If you want to check it, I have a draft PR for the syntax and semantics shown in the slides, but, again, consider that as a very early draft since anything could still change. And lastly, since we’re considering all these changes, potentially changing some of the major semantic points of proposal or maybe the syntax, I would like to ask for a downgrade to stage 2, because right now the proposal doesn’t meet implementations to test the semantics that we need to step back in the design phase. And stage 2 might be the right step to do so. Okay. Let me see if there’s anything on the queue.

BT: We have quite a long queue. So if you’re ready to discuss, we can start with JHD.

JHD: This was on one of your earlier slides where you talked about developers don’t necessarily have the mental model about import assertions. At the time that this proposal went to stage 3, the understanding and plan as far as anyone was aware of was that node was planning on shipping importing of JSON modules both with and without the assertion, and I think that had that happened, developers would be, I think, pretty clear that that’s what this does. But node decided through the actions of one contributor to only ship it with the assertion, and so there isn’t a currently any way, in any part of the ecosystem to get a module both with and without an assertion. I just wanted to comment on that.

NRO: And note that the web -- the HTML does the same as node, so HTML you can only import a JSON module with the mod.

JHD: the motivation for node to do that was to match the browser.

LCA: Point regarding your comment that this syntax base may possibly also be used for import modifiers or for devaluation. You could go back to that slide. I think that that may be confusing to users because these input reflections and import defer is both -- like, both do modify the cache key. Whereas I think we’re sort of proposing here that all of the attributes in the attribute bag would be part of the cache key. And sort of conflating these into the same syntax space may be very surprising to users that you can import two of the same specifier with different, like, with attributes and they may result in the same output. Yeah. But I think that’s something we can discuss during the module harmony meeting. I wanted to bring that up here now.

NRO: Happy to discuss this out of band.

JHD: So you mentioned about Annex B etc. How many browsers has this been shipped in?

NRO: It’s in Chrome Stable and it’s not been shipped yet, at least in simple version of Safari.

JHD: If it’s only shipped in one browser, it seems like it’s web compatible to remove it immediately. Is there a reason not to do that?

NRO: It’s also used in node and deno the unflagged and not unflagged.

JHD: Sure, but we’re worried about maintaining web compatibility with regards to removal, not maintaining compatibility outside the web. Is there a reason not to recommend it be unshipped now?

JRL: The tooling system has extensively adopted this, it exists everywhere because we kind of figured this would be adopted as syntax, even if not everyone is making use of the syntax currently. Certain bundlers are. The wait, if we were trying to unship this feature and get it out of the ecosystem, it’s just not going to happen. Like, no one is going to unship the feature from the parser, from their transformer to let us figure out what’s going to happen, because there’s already code that’s been written with this assumption that we need assertions. The wait, if we move to a new keyword, I’ll talk about this later, we’ll save this for later. Sorry.

SYG: I mean, sure, the flippant answer is TC39 cannot force anything to be unshipped. The less flippant answer, Chrome folks, we have discussed internally the possibility of unshipping this and given how long it’s been out and — I’ll go into this later in my later item, and given the -- what seems like anecdotal evidence right now, we haven’t done the measurements of extensive adoption in other betters of V8 and the tooling ecosystem, and the original reason why we did this import assertions in the first place, I think there’s a lot of risk in not shipping and we have decided to not unship. So while, you know, committee can recommend something to be unshipped, I suppose.

JHD: Right.

SYG: Saying right now that we decided to not unship. So the practical upshot is we’re not unshipping, so I’m not sure what good would discussing that recommendation be.

JHD: I mean, that’s fair, but I think it’s a clearer signal,
like do not ship and please unship and then, you know, fine,
you’re right, TC39 can’t force anyone to unship.

SYG: Would that not be more confusing if they see one that, like, so there’s two separate things. There’s unship and for the folks that have not shipped, do not ship more. And I think there is no disagreement, please correct me if i’m wrong, for other browsers, that it seems fine to Chrome at least, that given the flux and the discussion of syntax and semantics here that Safari and Firefox should not ship with the current semantics. But given that we have already shipped, we’re not going to unship. To me, the two separate questions are we hope to still converge in the future of course, but there’s both a lot of risk there in Chrome unshipping and a lot of risk in further codifying the current semantics. I think the path we’d like to walk is, for now, don’t ship, if you haven’t slipped, but we’re not going to rock the boat for the folks who have shipped either.

JHD: Okay, so just to make sure I’m understanding, it would be web compatible to remove by that definition, but chrome is not going to remove it, and since that’s the only implementation, there was no purpose in recommending Chrome do something that they already said they won’t do?

SYG: I will clarify a bit more. I do not want to say it is web compatible to remove. Web compatibility is a -- my reading of the two implementation -- two browsers shipping web compatibility thing is it’s basically a non-starter if more than one has shipped. It’s not without our time to dry to figure out the possibility of non-shipping. But the conversion is not true, if only one has shipped it’s not clearly web compatible to remove that. Like, that opens the door to it. We need to actually do some, like, you know, one of the recommendations from Nocolo was to gather use counters. We need do some work given how long it shipped to assist that.

JHD: Thanks, I think that answers my question.

MLS: So can’t V8 just add the feature to embedded implementations only and not to Chrome? If it’s not being used in the web, but being used by Node and other things?

SYG: I just don’t know if it’s not widely used. Like, we can add counters, but there’s also a delay there. It has to reach stable for it to hit the max population. But, like, yes, I agree with you if it didn’t go out in what version was this, M90 something? Let me see. It’s been a while ago. It’s been like a year and a half, I think. Like, on paper, I agree with you. But given the timeline here, I just don’t know.

MLS: Okay.

SYG: Yeah, it was M91. So when was that? I think that’s May -- I think it’s May 2021.

BT: All right. Let’s move on in the discussion here. Luka, looks like your item got deleted. Okay, DE is up next.

DE: Yeah, maybe my queue item was badly phrased, but I want to disagree with the idea that it has to be two browsers for that to count as web compatibility. This is a notion that was used widely in the ES6 cycle. There was a lot of search for kind of intersection semantics and the committee just sort of threw out things that weren’t supported in multiple browsers. I think it’s safe to say that this logic was a failure in practice because when I was formerly in chrome working on shipping ES6 and I think other browsers had similar experiences, that using principled reasoning for something to be compatible just didn’t hold water. It wasn’t actually compatible to ship.

DE: I think sometimes web compatibility means if you have one browser that has a high market share breaking the sites that only work in that browser can be breaking enough, that that browser won’t ship it, and, therefore, it can be web incompatible as unfortunate and unprincipled as that is.

DE: So I’d like to say that I agree with NRO and SYG that not unshipping is right immediate course of action, and that we can’t do this kind of simple reasoning about count-numbers of browsers to decide what’s possible to do.

YSV: I want to voice what SYG said. I think there’s a lot of ambiguity in what the situation is around the broader reality and JavaScript reality in what we need to sort out in the question of unshipping. In terms of the action that we as Firefox would take, and I think it’s a reasonable recommendation for other implementers who are currently not shipping the feature, but have it in progress, or behind a flag, that we don’t ship it right now to give a little more flexibility for these issues to be better resolved so we can converge on hopefully a better solution in the future.

BT: MM says “disagree about ES6 history interpretation”, but that’s the end of the message. I suppose you can take that on offline with DE.

MM Yeah, the -- I’m not disagreeing with the moral of the story with regard to what we should be doing now, but I do think that -- I don’t want -- I do think the ES6 history is much more nuanced than that. And all together, it -- it was very good that we adopted the policy that we did, even though it caused pain and the alternative would have been worse.

DE: Yeah, I guess what the alternative course of action should have been is pretty subtle. But some -- some logic at the time was, oh, this is fine. There could have been more investigation also.

MM: I think that’s too -- I think even that’s too simple. We can take this offline. It does not affect the current debate.

MLS: So first of all, I support downgrading to stage 2.

MLS: SYG, you said that the committee can’t force a browse unship. The committee also force somebody to ship. If a browser were a large market share is shipping, this we just turned it off, but we’re debating whether or not we turn it back on. Our implementation is all done, but do we turn it on so that we don’t break websites that happen to use it? And, you know, it’s a syntax error. So I think we have to be -- I think the committee as a whole needs to be clear of the message they’re sending not just to implementers, but also to developers.

SYG: Yeah, so I’ll respond to that. Absolutely agree. The committee definitely cannot force folks to ship. And chrome is -- Chrome remains, you know, very invested in having interop, which in this case, as I think all web feature cases and JS cases is eventual convergence of the same syntax and semantics. We have a bounded time here to kind of figure this out. Like, we’re okay with other folks not shipping because as with new features, there’s always a lag up to maybe a year, even two years of folks implementing and shipping at different rates. But the agreement is always that we will eventually converge. If the promise of eventual convergence is like a definite no, we will then do the hard work of figuring out how extensive it is used on the web and the ecosystem, what happens if we break, what happens if we unship to the web, what happens to other embedders if we unship. We don’t think we want to do that work at this juncture. We think that it’s still only reasonable to expect that we will have eventual convergence of something, whether that’s the same syntax or syntax with a different keyword and we have a assert and maybe a new keyword, or just assert and just a new keyword, the if we just have a new assert and updated semantics, we think that’s still possible. That’s why I’m also okay with downgrading to stage 2, because that’s year statement we’re figuring there out. But mistakes happen. The committee didn’t foresee the integration pain point with cSP, for one. So the process and the ecosystem will just have to understand that there are exceptional cases and there is one of those where we have a stage 2 thing for a while we figure it out. That’s already some, like, these are already out in the wild. But I do quantity to stress, MLS point, it’s important that eventually, yes, the expectation is all implements need too ship to them. It’s not like today all implementations need to ship them. But if for whatever reason we don’t think that is reasonable anymore, then we need to -- then Chrome will -- we need to have another internal discussion on the realities and likelihood of unshipping.

MLS: Given the proposal is to change the syntax, doesn’t it make sense to send out a message of deprecation of the current syntax?

SYG: We have not agreed to completely change the syntax. That was one of the proposed solutions. One of my items is asking folks to just live with assert syntax. But it’s also possible that we end up having two syntaxes in the beginning and then we slowly deprecate and remove assert. But like right now, I don’t get the sense that we should deprecate the assert syntax. Why do you get that sense?

MLS: This presentation and the discussion that we had online before the meeting offered several alternatives. Also isn’t the term “assert” now contradictory with CSP?

SYG: Not to me. Like, what do you mean by contradictory?

MLS: What we’re trying to assert is now, couldn’t it be contradictory? If so, it’s not an assert anymore.

SYG: I thought the problem was that we need to change the request at request time, and we want that –

MLS: Yes.

SYG: And that information is best guided by the syntax and that some folks didn’t like that syntax saying assert while it’s not assert -- like asserting -- I guess some people have the intuition that asserting is a response. And I’m not sure why that means it’s contradictory. syntax is different because the assert is not really the right thing that we want to say.

SYG: That’s not a contradiction to me. That’s like a narrow reading -- okay, we’re just going into my next item here if you want the assert to guide the request, we should use a different word. I’m not sure why that means it’s contradictory.

MLS: The suggested syntax is different because “assert” is not what we want to say.

SYG: That’s not contradictory. That’s a narrow reading.

YSV: I want to respond to that. Given that Chrome has the significant market share and, for example, at Firefox we have the smaller market share, we are at a greater risk of being at variance what is seen as being web compatibility. I think this is a risky situation and this is something that needs to be discussed. But in terms of like the action that we take today, I think it’s tricky to on the spot make the decision to remove assertions from Chrome. This may cause breakages even though the breakages will also impact Firefox and Safari if the websites are using import assertions for loading for example JSON files and more significant impact that extends outside of the web that goes to the tooling ecosystem and also to Node. But I think that downgrading to stage 2 is a very strong message from TC39 that we lost confidence in the proposal and want to take another look. In addition I did contact the folks doing Interop 2023. https://github.com/web-platform-tests/interop. So interop 2023 is a project that a number of companies, six of them, work together in order to determine which specific topics will be worked on by all major implementations on the web. One of those was import assertions. We’re going to remove that in order to not send the wrong signal. Finally those who have adopted the import assertions syntax are early adopters. The case we’re most concerned about when it comes to breaking the web and web compatibility that is for example lower income and small schools somewhere rely relying on the web working in a specific way, they get a website spun up for them, they don’t have the funds to update it or don’t have the technical expertise to recognize why the website might break. So they end up with a broken website if we make this kind of inaction. This isn’t the case here. Because that category doesn’t tend to do early adoption. So if we need to do a roll back of a syntax like this might be painful. We don’t know how feasible it is. That is stuff we have to figure out. It is more likely in the case of stage 3 than it might be in the case of something that is at stage 4 for several years. I think that’s a much more challenging case and much more at risk going to Annex B and being deprecated. Here we have the risk of having to do the dual syntax side by side and one of them deprecated. I don’t think it is as great from this perspective.

DE: I think I agree with what Yulia said and I think we can say explicitly in the notes alongside downgrade to stage 3 TC39 discourages developer use of this feature. I would say that’s kind of implicit in the down downgrade but we can say so explicitly because I agree with michael we should send explicit signals to developers.

SYG: Yeah, I want to reiterate I think in practice we’re quote just extending the status quo in that it’s available in Chrome even better today and not elsewhere elsewhere. So the risk of that prolonging is the real risk to me and thus we should, you know, put some urgency on ourselves as committee to figure out the next steps instead of prolonging the status quo. But I think the status quo is the least risky thing to do.

BT: YSV’s queue item agrees with that. No need to speak. Thank you YSV. All right, so I think that drains this topic, if you want to move on to the next topic, SYG.

SYG: Sure, thanks. The next topic is maybe we can just live with the assert syntax. I think JRL will go into it as well. I paste it in the matrix chat the response that I had written previously on the thinking of why we as Chrome prefer the proposed relaxation of the rules, of the no-reinterpretation and allow CSB to work. The main thinking there is that it’s unchanged from the original motivation which was because the ecosystem demand seems to be so strong and we take the tool disregard of this interpretation rule as backing up our original hunch that the ecosystem demand is strong, that’s actually evidence that we see, that like the use case is really there, and given that, the original thinking was frame this harm reduction kind of framing which was if we don’t do this, there were – there was a real chance that people were just going to come up with micro DSLs in the specified string to do what they want. And that is a world with much, much smaller chances of interop and higher chances of proliferation of tools doing what they want. And we believe that world is still the case, like, there’s still a real risk of ecosystem doing stuff in the micro DSLs and if – and given it seems to be playing out with that way in the ecosystem, we still think that, you know, unshipping here especially is pretty risky. The second part of the responses, there’s some disagreement on that assert must be used in the – like like, the C function name way, which is something that aborts execution when the condition you give it doesn’t pass. But if you kind of squint, and this is kind of a flippant like in the Webster’s dictionary kind of answer for the English word of assert is not in a scoped of a definition. You could squint and think the HTML semantics of accept accepting the headers and integration for that is with the English word meaning of assert. It’s not ideal. But like it’s not obviously wrong to me that assert is like completely the wrong word. But, yeah, I think that’s all I wanted to say about that.

JHD: I hear you that it’s not obviously wrong to you, but to me an assert only is something that noops or errors, and node has an assert module - not just from C, although it might have originated there. I think we should expect that even if the only change is to remove the restriction, we should then change the syntax keyword. The word “assert” was explicitly chosen to pair with the restriction.

SYG: I have a question in response real quick on that. How do you feel about the possibility – this is not an option I’m endorsement to be perfectly clear. How do you feel about the possibility of having to live with both assert and a new key word that we choose until we can gradually fade out assert?

JHD: How I feel about it is sort of irrelevant if it’s necessary. I would think that we would ensure that both keywords can’t actually be used at the same time; that you can only use the assert keyword by itself. We wouldn’t add new ways that we can use it and we would just kind of have to live with it and the ecosystem can invent linter rules and engines could log warnings. So I think it would be unfortunate but it would be workable.

SYG: Okay. After your next response, maybe after JRL’s, I would like one of the temperature check things on committee on – we’ll craft it then. I want a temperature check on how strongly folks think about keyless assert keyword.

JHD: My other item is through the progression of the import assertion proposals weren’t just two options - not just “syntax” or “inside the specifier”. I’m not worried about microsyntaxes inside the specifier. It was rejected by the ecosystem when Webpack tried it, and it is widely considered to be a bad practice. I don’t think it would take off even if various tools tried to do it again. The third option that was discussed was out of band: like CSP or import maps, a separate header or file or something. I think that that is totally workable and doesn’t have the dangers of specifiers, so I think it’s worth – I think it would be worth reconsidering all of the originally discussed options when we discovered that the one we went with doesn’t work.

JRL: So I have two comments here. One is actually my comment and response to JHD and one is my actual topic that I want to discuss. For JHD, I don’t think `assert` actually matters in the end. If you – we go this route where we remove the restriction and your loader or your bundler or host cannot understand what you meant, it’s still going to assert because it’s going to fail. It’s still an assertion in the end. For a developer looking at this, I don’t think they care at all. If I say assert type CSS and transforms to CSS module that I import, that’s fine. If I say assert whatever and it doesn’t succeed, then it assert in the end because the browser couldn’t handle it. Like, it’s still the same thing. The developer perspective where what they can observably see happens honestly isn’t going to change. Because we have to differentiate at request time and cache time right now. The way it currently behaves is the way it continues to behave because that’s the practical end result of our requirements. Specifically why do we need to change the keyword at all? This is my main topic. All it’s going to do is cause churn in the tooling ecosystem that is unnecessary. The end result we get to is a ‘with’ keyword with otherwise same syntax and same behavior as what we currently have. But we’re telling everything that’s already been written with the assert they need to update to the new keyword and it’s causing turn to get to the same result result. It seems unnecessary and painful. Like, in order for me to have adopted the assert key keyword originally that we did in the old project, I had to maintain my own parser so it could actually finish parsing and I had to set up the tooling so it could use my parser rather than the official acorn parser. It’s pain for developers to adopt the syntax because they know where it’s going. It will again take a couple of months to a year for all the tooling to update to a new with keyword just for it to do the exact same thing it’s currently doing. It’s just so painful and it’s unneeded.

JHD: Whether it’s unneeded - you’re pre presupposing that changing it to the `with` keyword and removing restrictions is something that will have consensus, and it’s too early to know that with confidence.

JRL: What other result is there?

JRL: This is what is necessary for HTML to do import assertions and do –

JHD: To do them inline in the file which is not a given. So to the other point you brought up.

JRL: Out of band configuration is not ergonomic solution. That’s what we currently have in the bundler ecosystem and there’s still desire to put in band.

JHD: There’s desire for a lot of things. That doesn’t translate to the same thing as “it’s the only option” or what will get consensus or what is actually the best design. This is not the place to debate that. I’m just pointing out there’s other options.

SYG: I want to interject, if folks are agreed to stage 2, that’s a more banded in my mind of what is in scope for re-discussion.

JHD: Changing in-band to out-of-band.

JHD: We have not exhausted the current queue. I haven’t put an item on the queue yet. I will. I would like to respond to the current items before we get debating about potential alternative syntax.

BT: And also point out that we are nearing ten minutes remaining in this agenda item. So we should resolve I think procedural things in front of us right now before moving on to what the future shape of the proposal should look like.

JHD: So to JRL’s other point, I agree in the common case where the thing you are importing is only importable as a specific kind of module, whether it is an assertion after the fact or whether it is informing the request, it is basically unobservable and ends up being the same thing. The fact that you can look at the network request and see headers or something, doesn’t really matter. I agree with you there. However, part of language design is acknowledging that the common case is not the only thing you have to be concerned about. It would be very problematic for me if you import something without an assertion and you get one thing, and you import something with an assertion (or import something with two different assertions) and you get different things. I think that would be very confusing if it was called “assert” and that was even remotely possible.

JRL: So as a bundler that is something that I explicitly want to allow to happen.

BT: I just want to interject. I think we should table this discussion for now. Sorry for British friends for using that verb. Because we really need closure on the procedural issues here with small amount of time remaining. I think YSV’s reply is on that note.

YSV: Yeah, I will be quick. I don’t think that a downgrade to stage 2 reopens all past discussion to being relitigated. And I would actually have a problem with downgrading with the intent to move this to being out of band because I feel like that’s been settled. The issue that brought us to this point today is specifically around the keyword and I believe we should scope our discussion to that.

JHD: That doesn’t match my understanding. Moving to stage 2 for this proposal and to stage 3 was predicated on the on the assumption we would be able to have some kind of restriction. If it’s guiding the request, then I don’t believe that that is actually settled. So procedurally speaking I think it would be irresponsible of us to leave this proposal at stage 3. So I don’t intend to block any movement to stage 2 and I hope nobody else does. But once we have agreed on that I would like to discuss whether it should be even at stage 2. But I think that regardless, it shouldn’t be at stage 3.

YSV: The discussion to move down a stage rests with the champions. And I do disagree with the idea that we would complete completely deviate from the discussion that they’ve brought up here in order to continue to downgrade it down to further stages. I think that would be inappropriate.

JHD: “rests with the champions” is incorrect; anyone can propose it. Obviously anyone including the champions can object to it - that’s why I was waiting until after their item had completed to even suggest it. I don’t think moving it down to stage 2 means that previous discussions are settled that are now invalidated.

YSV: This does go against what we agreed to in the process document but I believe we can have this discussion elsewhere.

BT: All right. Again, let’s try to keep the discussion on the procedural issues at this point.

DE: So historically we just didn’t invent the idea of re restricting this to assertions until after stage 2. We did like waffle a bit about whether thing is in the cache key and that is partly due to me not understanding the problem space fully.

DE: I believe in stage 2 we were agreeing this being in band and we didn’t have any agreement on restricting to assertions. So because downgrades are consensus driven as JHD says they’re not something that champion does unilaterally and not something that either committee member does unilaterally I think we could attach kind of conditions to the down grade so that we’re on the same page. It would be unfortunate if we did something procedurally and then like in two months we discovered that we had different interpretations of what the plan for the future was.

DE: So if we can adopt the shared plans along what Nicolo presented we iterate on the proposal and try to readvance later trying to call in-band versus out-of-band meta meta data back in question. I would be in favor of a consensus of a conditional downgrade.

SYG: Yes, I agree with that. The in band versus out of band design point seems unrelated to the restriction thing. To the extent that I think a problem – to explore out of band configuration for the space is different than stage 1 problem statement and I guess the practical upshot I would also block the downgrade to stage 2 if the consensus of the understanding of the consensus was in-band versus out-of-band was reopened to discussion. That is not my understanding of what a downgrade here would entail. If it is, I would block the downgrade.

BT: So it sounds like there’s a discussion that needs to be had here about whether we can communicate that the proposal is stage 2 but limit the scope of the stage 2 debate. There objections if we keep the discussion on that topic until the end about six minutes from now? I think that means JRL that we’ll skip your reply and go to your new topic, if that’s okay.

JRL: I think my two topics are the same unfortunately. If we want to downgrade to stage 2 that’s fine. If the champions are looking for that because they want to change the keyword, that’s fine. Going back to stage 2 absolutely cannot mean we’re considering out of band configuration. The proposal whatever we call it, whatever the keyword is, is in-band configuration of the module.

JHD: I think that for all the reasons that have been discussed it seems clear to me that this proposal shouldn’t be currently be stage 3 until we figured out the things that are in flux and as such, I don’t think that it makes sense to attach arbitrary restrictions to what can be discussed. I think it’s clear there wouldn’t be consensus to demote it beyond stage 2, fair enough. It’s clear there are strong opinions about what the proposal should or shouldn’t be able to do in many directions. That also means that consensus may be difficult to obtain. I think that the point of the process is to encourage discussion, not to restrict it. So I hope that we simply can agree that it belongs in stage 2 while we figure these things out and we’re able to have good-faith discussions while we do so.

BT: That drains the queue. I think process-wise because we don’t have a rigorous, I guess, downgrade process, the downgrade I think is more of a, you know, being clear about setting expectations kind of situation and so I think it would be reasonable for us as a deliberative body to say here is the scope of the discussion we expect to have during stage 2. And I think the champions could probably stay at stage 3 as an alternative so those are the kind of options that we’re weighing here.

NRO: Maybe we can schedule this item on this exact wording of what you’re proposing if you want to include these find the condition for stage 2 downgrade so it is clear what we’re asking for consensus on.

BT: I think that is a great idea, if you can come back with a very clear statement that we can discuss concretely, I think that would help a lot. I also know that SYG had mentioned wanted to do a temperature check on the usage of the word assert in this proposal. So I think also coming back with a very concrete question there that maps to our temperature check emojis would be also welcome. So we do have a little bit of flex time at the end of this meeting so we should be able to fit in a redux on this topic.

NRO: Okay, thank you.

BT: Shu, can you come up with the temperature check question.

SYG: I would like to defer that until we come back to this if possible. I think there’s higher things to figure out than that temperature check.

BT: That seems fine. As long as you thought about it before the agenda item comes up, I don’t –

SYG: I will draft an exact question. Is there a legend of what emojis are. I forget what the –

– gets screenshot of emoi -

SYG: So I think with that we will move on to the next item. Unless there’s any closing statements of the champions at this point.

NRO: No, just come back.

BT: We will return to this topic, then.

### Conclusion/Resolution

- The committee came to understand the [web integration issues](https://github.com/whatwg/html/issues/7233) with import assertions, and considered multiple alternatives which enable fetches for non-JS module types to be driven by the declared imported type. Changes to both syntax and semantics were under discussion; one possibility is to change only semantics and leave syntax the same.

- The champions requested demoting the proposal to Stage 2, but there was disagreement about the scope of the investigation during Stage 2. For now, there is no change in stage, but it is noted that the champions have requested that no additional implementations ship the proposal (while also *not* requesting that existing implementations unship).

- There will be an overflow topic to attempt to draw a conclusion. For now, the proposal remains at Stage 3, but there is a shared understanding that changes need to be made.

## Explicit Resource Management Stage 3 update

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management/)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkoUt-2xyNGEquFj6fQ?e=yaUIxb)

RBN: Today I will be kind of discussing the current state of the explicit resource management proposal which is currently at stage 3. Before doing so I would like to give a little bit of a brief history on the proposal where we started and how we got to where we are. It’s been about a five year process. Started back in July of 2018, proposal advanced to stage 1. It had a wildly different syntax than what’s proposed now. It’s evolved quite a bit as we’ve gone through the various discussions. The original proposal had the ability to both create declarations that were scoped to a block as well as non-bound – as well as track resources without introducing a binding and we explored both a using statement and something like Java try with resources statement. It again went through some variation as we – as I work worked on this. Took about a year before bringing it back to committee in July 2019 we advanced to stage 2. And at that time we added async syntax for handling a asynchronous disposables. There were some concerns at the time about repurposes try keyword around confusion. We again modified the syntax to try to make it a little bit less ambiguous in those cases. And by the time we reached the February 2020 update, we had been investigating use of RAII resource acquisition initialization style declarations. These were `using const` for declaring the values and `using value` for binding use and `using await` forms for both and also band destructuring and obviously over that period of time that was a lot of syntax churn and changes trying to find compromises and meet the requirements brought to us by committee. So in the next – over the next two years I focused mostly on syntax simplification. Most of the semantics remained the same, though. In October 2021, we dropped the try using forms to favor the RAII style only which significantly simplified the syntax budget that we were allocating. We changed the bindingless form to try to more closely match the bound form using a void keyword in place of an identifier but now we’re ending up `with <expression>` or `with statements` like using the way CONT void equals expression and that becomes a bit of a mouthful. Came to the stage 2 update in September of 2022, we had dropped contes from the declarations and found the cons const wasn’t necessary and only been a necessary qualifier if we were going to support binding patterns to disambiguate a using array destructuring from a using identifier with an array access and by dropping c c const and binding patterns we have a simpler and clean cleaning design and also dropped the bindingless form and we still think it’s valid capability but plan to investigate that as a separate, unrelated feature in the future. At the time we also added the DisposableStack and asyncDisposableStack and global constructors for disposable resource containers. These had existed in some form in prior proposals but the implementation that we ended up with at the september meeting was more in line with our goals and avoided a number that we determined around working with async interables or working with interables that produced disposables and this design matched what we were trying to accomplish. We reached stage 3 of the synchronous version of proposal in November 2022. We had finalized API for disposable stack and async disposable stack and added the suppressed error built in error type and async functional to separate proposal that I will discuss later this evening. That leads us to where we are right now. Right now, we have `using` declarations which are block scope declarations that are constant similar to const and the initialized value is bound to the scope such that when the scope exits for any reason, the resources then disposed. We support using declarations as a statement, they’re also supported as the declaration in a for statement as the for binding of a for of statement and also in a for wait statement. We also added the disposable stack class with the API you see above and the symbol dispose method for re resource clean up. There are a couple things that have changed slightly since the or that we’re intending to change rather somewhat since the stage 3 advancements based on discussions that we had in the async proposal and some feedback that we have received from the editors. One concern was banning `await` as identifier and seems like minor concern given that most code is running in modules and strict mode. Most code these days running in modules and strict mode so these are strict words and can be used in a script in nonstriker mode and await is still valid identifier and wouldn’t be possible to disambiguate of using await statement and using of await identifier it’s potential potentially ambiguous and confusing and just seemed much cleaner to avoid this similar to a change we made to avoid allowing you to ban `of` in `for of`. That was more specific syntax ambiguity. This here we’re concerned about user ambiguity. There’s open PR for this. Hasn’t been merged yet. Not sure if we need to get consensus for these types of pRs if we do I will ask for consensus at the end. Another one we found that we’re missing `isUsingDeclaration` SDO and present in early version of the spec. But during the – possibly during the async clean up might have been removed and reintroduced. It’s in a PR that I plan to merge as well. One thing we found was that the – we had some code that – or some logic within the for body evaluation and create per iteration environment AOs that handled disposable resources that actually didn’t because for body evaluation and create environment only care about the mutable variables, constant variables aren’t const in the for statement are not created per iteration and just reuse the outer scope. There was a lot of changes in the spec diff because of the create environment that aren’t needed because it will never be triggered. We have a PR up that removes that. We also have a simplification for the content of disposable stack use method. Most of this method body is actually also performed by the `AddDisposableResource` AO so it wasn’t really necessary to duplicate it here. And one other thing that came up in a discussion with the editors there is a PR up against ECMA 262 for this as part of progress towards stage 4 and some of the editor feedback was around the fact that the `DisposeResources` and `AddDisposableResources` AOs could potentially take both an environment record and an object and we really don’t do that elsewhere within the specification. They both had disposable resource stack slot and decided instead to abstract this into a separate dis dispose capability record that holds this information that both of the objects own. And that basically leads to the major open issue that we have that was – this is something I discussed I believe with KG. Currently the using declaration is not allowed at the top level of an `eval` body and this is specifically because the fact that `eval` uses the script goal for its parsing and the early errors for using do not allow it to be used at the top level of script when not enclosed in a block. So it’s currently forbidden at the top level of `eval` and specify it inside of a block in `eval` however the scoping semantics that we generally use for using are based on block scope semantics and those – `eval` provides block scope for let in CONST and the question is whether or not we should relax the restriction for using purely when it’s being used in the `eval` body. So I think at this point I kind of want to get an idea from committee if there’s any concerns about or questions about whether we should permit using an `eval` and if we would be okay with a change to this.

BT: We’ll take it to the queue

MM: So I think we should not permit using in an `eval` for one thing it is an outcome as you say of the way the rest of the spec is currently constructed because of the top level script goal and the complexity to add it is really not serving any practical purpose. If you wanted to get the effect of using it at the top of the eval you just put curlies around the eval springeve eval string and just no reason to use complexities here.

KG: There's not meaningful complex complexity involved in adding it. It’s like a six word change tops. I suspect that in engines it’s more work to prohibit it it. I don’t think – like, if you have some other reason for not wanting it, I don’t feel strongly about it. I don’t think the complexity is much reason.

MM: The reason why without the scope it is not obviously a block scope and value the letter or const have to understand it is a block scope to not be surprised. There is that surprise hazard if you’re eval doing that and not using the curlies, if you need to put the curly curlies in in order to get the eval accepted than the reader reading the code is simply clearer to the reader what the meaning is of what they’re looking at. If I could – if we could retroactively have had it be the case that for the let and const also force the inclusion of the curlies so somebody reading the code would see the curlies that would have made mis misunderstanding the meaning of the code that would have reduced the misunderstanding hazard. So I just think it’s not adding value to allow it without the curlies so I would continue to require the curlies.

RBN: As champion I don’t have a strong preference. I’m fine without it supported but see that the case that let and const are supported in `eval` and block scope to be rational why it should be considered. It is a const binding with special semantics occurred with the block scope contained. It seems odd not to be supported.

MM: I will agree that is a valid rational and it would be okay with that. Just not my preference.

BRN: Yeah. Also to KG’s point, it would be somewhat more than just a six word change. I would need to actually change EvalDeclarationInstantiation and algorithm steps to ensure that re resources are disposed. Right now it does neither of those things because it’s not currently permitted in EVAL. It’s not a burden but it is slightly more complex than that.

KG: Yeah, I was only thinking of the error. But you’re right. The semantics would need an update as well.

SYG: I can also go either way. I even agree with MM that if we could turn back the clock requiring curlies would result in better readability but being what it is we already have `let` and `const` usable within `eval` and `eval` is implicit block scope so if we choose to go the other way and require curlies now for using that may – like, that’s surprising for folks who have already internalized all the places where there are lexical scopes implicit or explicit except for `eval` for using only. I can see that having downsize as well but it’s kind of like, I don’t know people would do that. I see no – I’m leaning towards just having it. I see no strong reason to disallow.

RBN: I think that’s fair. I think KG is asking if everyone has weakly held opinion, take a temperature check on this and if it seems like we want to take it, then we’ll – we can ask for consensus. So could the chairs add a temperature check, the specific question is whether or not we should enable using an eval like let and const.

Poll: How strongly do you feel that 'using' should be allowed at the top level of an 'eval' body?

??: Indifferent is different.

- poll results:
  - 0: strong positive
  - 4: positive
  - 0: following
  - 0: confused
  - 7: indifferent
  - 3: unconvinced

DE: I voted indifferent and we should have a positive or negative scale.

DE: Convinced to me like you don’t believe the change and indifferent doesn’t care and positive believe make the change and strongly positive means to absolutely make the change absolutely.

YSV: Speaking for myself, my indifferent definitely means I’m just indifferent.

DE: Should we flip a coin? It’s very tied.

RBN: The only case I can think of allowing at the top level might make sense is if there is a bundler that exists that might potentially use eval in some mechanism that couldn’t otherwise be accomplished via injecting a script tag or like this wouldn’t be an issue in node because when node does come JS evaluation would be wrapped so it would be block scoped in those cases. I can see the potential for this being problematic for the bundler and in most cases wrap the code so provide other wiring mechanisms. I don’t really have a strong opinion myself. I also don’t know how long we want to keep this up. But it seems like there really isn’t – there’s some positive support for it. Some folks are unconvinced and most don’t have a preference.

BT: My interpretation of this is you could go either way.

RBN: The other thing is we can – one way to address this is leave it as is and if we find that there is – the community raises concerns they would like to be able to support this, we could propose it as either a needs consensus type PR or even a separate fully staged advanced proposal if necessary. So I don’t really have a strong preference towards supporting this as it stands.

SYG: That sounds good to me if I can interject. There were some alluded to possible implementation complexity. I doubt there’s actually any implementation complexity. As we start to implement this, we might come back, implementations might come back with might make more sense to allow or fine to keep the ban, et cetera.

KG: As the person who raised this initially, given that everyone is pretty neutral and their opinions are widely split, I’m fine with whatever you (RBN) want to do here.

RBN: I don’t know if we want to give any more time for reactions. But I think at this point, it’s kind of balanced and since kind of failing closed and potentially opening this up later on is an option. I would be more inclined to leave it as not supported for now. We can reopen it later. I think I will stick with that. I did have a process question. I had mentioned early on there was a – I had I think one pull request. I don’t know if this, as a proposal in stage 3 would this need consensus for advancement or should this just be considered an oversight that should be taken as expected behavior for the spec text?

MM: I think it does need consensus. I think we can arrive at consensus on this quickly. I would guess. I’m in favor of banning it.

RBN: In that case, I would like to get consensus on this. I don’t know if we have changed that process based on the discussion we were having with advancement but I suppose I can ask if anyone is opposed to taking this P pR.

KG: I support having this PR.

BT: Any objections to taking this PR? I hear no objections. So I think you can merge.

RBN: Okay. And, again, all the other ones were mostly editorial concerns. There’s this one which again I don’t know if we require consensus, there was – again has no specific actual observable behaviors. Nothing can be introduced here that would actually be disposed. So I think – and the rest are essentially just editorial changes since the behavior is identical. Just then jump to the end of this. Again, proposal is currently spec is at the explicit re resource management repo. There is a spec text available there and also a PR against ECMA 262. I will be working on the test 262 test changes in the near future. I will also be trying to reach out to implementers to determine if anyone is looking into implementations of this. We have been discussing or I have been discussing this with Shu and others on the shared struct call as potentially being supported for things like mutex and condition variables as part of the work that we’re look looking at there. So I’m looking – I’m interested in whether other implementations are looking at this as well. And that’s all I have for this now.

BT: Thank you RBN. RBN: Thank you.

BT: With that, I think we cannot cram another item in the nine minutes remaining before lunch. So if there are no objections we will break early. See you back at 1:00.

### Conclusion/Resolution

- Ban ‘await’ as Identifier in ‘using’ (PR #138): Approved
- Support ‘using’ at top level of ‘eval’ (Issue #136): Rejected
- May consider a needs-consensus PR in the future based on implementer/community feedback.

## Discuss SuppressedError argument overlap: error and cause

Presenter: Jordan Harband (JHD)

- [proposal](https://tc39.es/proposal-async-explicit-resource-management/#sec-suppressederror)
- [issue](https://github.com/tc39/proposal-explicit-resource-management/pull/117#issuecomment-1360473420)

JHD: Here we have `SuppressedError` Like all error types, every argument is optional – if you provide no arguments, it works fine. The only way that trying to create the error can throw is I think if you provide a message that has a `toString` that throws or there’s something in `InstallErrorCause`, not even sure what that can be. It’s highly unlikely anyone will get an exception out of creating the constructor. You’ll notice here that there are four arguments listed. The message argument is obvious - that’s present on every error. The options argument is also present on every error as of the “error cause” proposal. The `suppressed` argument is the thing that the `SuppressedError` is suppressing, which makes perfect sense. What I’m talking about today is the `error` argument, which I believe is described in the readme of the proposal as the cause of the suppression, and that semantically that’s how I understand it to be. While implementing a polyfill for this, I realized that you could have a `SuppressedError` with an error as the cause, and also a cause as the cause, and that seemed bizarre to me. So what I’m proposing is a normative change - one of the following options, unless someone suggests an option I have not considered.

JHD: One option is just remove the error argument entirely so that you construct it with a cause when you want it to indicate that argument. Another option is to remove the spec line on line number 4 - `InstallErrorCause`. It could still in the future optionally take an options argument if there were additional options added.

JHD: The third is to throw an exception if both `cause` and `error` are provided.

JHD: The fourth option is to do nothing, but I’m not proposing that.

JHD: Of the three options the one that I prefer is the first one: just remove the error argument. The second seems weird to me that this would be the only error type that doesn’t follow the cause options bag pattern. The third one is fine, I guess, but it’s weird to try to make an exception and get another exception; even though that’s already possible in some obscure cases it seems strange to add that. But that would be fine for me because then you can’t have an error that has two different causes and which one is it? It’s confusing and so on.

JHD: RBN and I discussed it on the original PR that added it - either on the PR or issue on the proposal Ron has the next queue item, so I will let him discuss his thoughts. That’s my presentation. I would love to see us reduce the number of causes on `SuppressedError` to one.

RBN: So JHD and I were discussing this. If I recall correctly JHD wasn’t able to be present during the meeting the November plenary or during this discussion.

JHD: That’s right.

RBN: I did have a slide on this. I want to kind of reiterate my thoughts there. When we added error cause to the language, it has this kind of I would say special nature in that we added this ability to install this optional cause object on every built-in error object as a way to say that perhaps this type error was caused by something else you want to follow back. Kind of indicating a direct relationship between the error that you’re creating and the error that produced it. But it has this kind of privileged perception because it has a special way of installing it, it has specific spec text around installing it and not just attached by users as they need. And it gives it that kind of perspective that this is a kind of a special set of initial meta information to attach to any error. The suppressed error property on the other hand is not optional. It is optionality that it doesn’t error or that you can pass undefined in the constructor is – you can call the constructor without providing the argument for it is just by the nature of the JavaScript language allow allowing you to do that in any case. But undefined is a valid error because you can throw un undefined in the JavaScript. The error property itself is not optional. It’s not optionally installed and always exists. That’s because the SuppressedError, its intent is to model the specific relationship between the error that was an error that was thrown that suppresses another error that was already being thrown specifically by using declarations. This could potentially be used for other things in the future. And kind of circumvents what we do today with `try...finally` where throwing an exception and finally suppresses the error potential error thrown in the body and you lose that information. It exists to model this relationship between there is no other way to model this relationship in the javaScript language and language like Java their exceptions have method that you can use to get to the suppressed error because every error that is thrown should be an exception. That is not the case in JavaScript. This has a specific purpose to model this relationship of thing that is suppressing and thing that is suppress suppressed which is why cause doesn’t really quite fit into that. It does in the sense that yes you could say it is the cause but it doesn’t have the same level of optionality optionality. And so I brought that up in the proposal. I wanted to leave the cause capability that you can add to errors as a separate thing so it’s not confused, so users aren’t confused in the end. And that was my main goal for this direction. Also that suppressedError kind of represents a linked-list like representation of the error hierarchy and aggregate error is a flat list of errors and chose to use the error identifier for the property as the singular of errors and aggregate error for that purpose purpose. So that was most of the motivations behind that when we introduced this. If I were to have an opinion on those three options you provided I am certainly not in favor of removing the error property because again I think depending on cause could be confusing to users. I don’t think it makes sense for a suppressedError whose intent is to model this relationship between error that suppresses and error that was suppressed to optionally have the error that is suppressing. I think that would again be confusing to users. On the option of throwing if you provide both, I don’t think there is any way to conceivably do that because `undefined` is a valid throwable exception in JavaScript. Therefore I don’t see a way to really prevent that from being the case. If I were to do anything, I would likely say that suppressedError should not have the error cause.

JHD: Just to echo my original point, like, despite my preferred outcome, as long as there’s only one – I think there’s a lot more user confusion from having potentially both `error` and `cause` on a `SuppressedError` instance. So what you just said of essentially removing line 4 from the spec sounds fine to me.

RBN: I will say, though, that cause exists for mostly for user cases that I’m aware of. Users can provide a cause. Is there anything in the language today that actually installs cause other than if the user provides it in the constructor? Because I would say we are ascribing meaning to cause as also being an exception that was thrown whereas cause could be something else. User could create a suppressedError from one error to another error that is thrown and then the cause could be whatever they wanted to be. The causing from the using declaration or causes from my own try… finally. Yes, you could put whatever you want in errors suppress suppressed as well. We don’t do error checking on those either. But I just strongly opposed to trying to leverage cause and have this thing be optional. I just think it will be confusing.

KG: To answer your question, Ron, no nothing in the language installs cause right now. Only if you put something in the constructor.

RPR: RBN you are next on the queue.

RBN: I think I covered that as well. That cause basically because of that somewhat privileged meaning within how it’s intended to be used by users means I don’t really want to overload that meaning by having a cause mean something else on suppressedError.

KG: Yeah, I strongly agree with Ron about not using cause to mean this is the thing that was suppressed. That is not what cause means. Like, the expected use for cause, and the use that is built into languages like Java, is that you have an error and because you have an error, you at some point later were unable to do some other thing, and you need to add context to the original error to say the file opening failed so you weren’t able to instantiate the class so you have an error "couldn't instantiate class". And that is not what suppressed errors are, not at all. Definitely not in favor of overloading cause to mean a different thing here. I don’t have much of an opinion on whether suppressedErrors should be allowed to have causes. I would be fine with reading from the options bag and throwing if the cause key is present or something like that. I think it is unlikely that one is going to want to make a SuppressedError with a cause. It is kind of different from most other error types but i’m basically neutral on that question. But the particular question of overloading cause I really would not like to use cause to mean this other thing.

MM: I’m of the opposite opinion and a weak opinion. I’m okay with any of the options on the table. I don’t feel strongly about any of them. But all together I think that if we used the cause for this, the mismatch in the meaning of the name cause versus what it means here is actually not going to be a cause – sorry, not going to result in much surprise and I think that the distinguish that makes us want to use a different name does not pay for the additional variation in API surface. If we do make the distinction, I would prefer not to make the additional cause an error, I would say that right now any error including aggregate error can also have a cause. I think that we should not make an exception and say that suppressedErrors cannot have a cause whether or not we make the error that is suppressed be the cause or not.

RBN: I wanted to comment. You said not surprising to us. I have been having a discussion with JHD about this in the comment that this is reporting. In that I would be if the expectation to the user they receive a suppressedError it’s relating a thing that is being suppressed to a thing that is causing is suppression and yes I’m using the word cause there, but regardless. If the expectation that these two things are related, yet somehow this error is optional and there are this cause is optional and can potentially be created by user code missing the cause then you’re having to possibly write more complicated conditional error conditions in your catch clause to determine does the suppressedError have the error property. The existence of the error can affect things like the in-line line caches uses in engines causing inline cache and i think this will add confusion in the places that you check errors if suppressedError can be potentially used for other things than the meaning with which it was intended.

MM: I’m not sure if it’s important. But I will just – I don’t understand the point about in-line caches in engines at all. So if it’s important, please expand that it’s not important we can drop it.

RBN: It’s likely not as big of an issue unless running into a lot of code that would end up with suppressedErrors but I’ve been spending a significant amount of time of TypeScript trying to fine tune performance around monomorphism and inline caches as a result of missing properties and this is front and centre in my mind as we’ve been taking performance adjustments in the TypeScript compiler.

MM: Let me just say that the performance of the error handling path, the conventional wisdom that I agree with is that the performance of the error handling path path, the performance of what happens when an error is thrown doesn’t matter and is often deoptimized any way.

RBN: It is specifically the case where I’m catching the exception and then having to make decisions about it. Essentially every – if suppressedErrors could have optional cause and suppressedError could mean something else other than its intent – roughly what it’s intend intended that means that cold would have to by forKate whether the cause property is in the error that is thrown to determine if I need to handle this in one way versus the other.

MM: You’re talking about code and not JavaScript code but code in engine.

RN: It doesn’t exist that can cause deoptimization and cache misses.

JHD: I have a queue reply. Another alternative is we could unconditionally create `cause` when it’s not present in the options bag, and then it would always be present under the name `cause` - it would still have the same semantics as the other errors except that an absent cause would be treated as a `cause` of `undefined`.

RBN: I’m not sure that I like that only because it again, subverts the meaning of cause as it applies to every other error. Every other error doesn’t always install a cause property even if it’s not provided. So differ in that case in the way that’s potentially confusing to users and I just don’t think that we should be trying to align on a property name here because there is some over lap, there is just a mis mismatch that I don’t think really I think will be confusing to users if we try to reuse cause for something slightly different here.

RPR: Nine minutes left.

WH: I agree with KG here. The `suppressedError` is not a cause. A cause of an error is something that causes the error to happen. Here we have two unrelated errors where the second one happens while unwinding from the first one. They might have nothing to do with each other. Conflating `suppressedError` with the cause is a logic error. My preferred option is to do nothing; i.e. to do the status quo.

RBN: Yeah, I wanted to comment here. Also something that WH and KG said is that the suppressedError is not the cause. I want to make sure that we’re talking about the suppressing error. Because the thing that JHD is talking about changing is the error that caused – I keep using the word ‘cause’ , though this is still a misnomer here. Is the error that is – that causes the suppression, but the thing here is that in the using declaration case, if an exception is thrown from dispose, I don’t create a suppressedError for it if there was no exception from the body. If an exception is thrown from the body I don’t create a suppressedError for it if no exception from disposed. I only create the suppressedError if there’s the exemption in both places and in which case both exemptions are essentially the cause. You wouldn’t have the suppressedError thrown by the run time if we only had one or the other case. It’s only when both are here. Cause doesn’t even make sense to be used at all in this case because you really can’t have two causes in the system.

WH: What goes in the message field of this thing?

RBN: We don’t generally define the message for exceptions within the specification text, it would be implementation dependent, I suppose.

EAO: I’m with JHD here. Fundamentally I think the difference between error and cause here is from an end user point of view pretty much insignificant. I mean, conceptually we’re introducing the idea in total one error could be caused or suppressing another error. And why does it – I don’t think from the end using point of view it really matters if internally the semantics of really that means for a suppressedError in particular is also significant compared to the mental load that we would be putting on people to understand that in this particular case, even if it, you know, could consider this suppressedError being caused by another error, we’re still causing it error rather than cause in the structure of it. That difference is just extra mental load which I don’t think we need.

SYG: I just want to agree with WH and KG here. I don’t think it is extra mental load. When you’re suppressing the error, both the suppressing and suppressedError are kind of equal on equal footing in the causality chain. I think that’s the important part in how developers understand cause. I think the core disagreement is that the current use of the cause property is this lineal causality chain and the idea is that conceptually what is the conceptual reason of an error being created and thrown. There’s a different kind of cause which JHD has been arguing for that is just the mechanics of what has caused an error to be created and thrown. Mechanically you can say the suppressed – sorry, the suppressing error is the thing that causes – even that actually now that I say that I take back that line of think, like, I think it just comes down to I’m convinced of what Ron said suppressed error and suppressing error having equal footing. How do you – what do you think what is the error that whether mechanically or conceptually caused the suppressedError itself, the suppressedError wrapper that contains the suppressed and the suppressing and suppressed to be created and thrown. There is no no linearity here that we normally have with the cause chain. With that reason I agree with KG and WH mother and Ron.

KG: JHD said the primary concern is not having the error property and the cause property, a possible path forward is to simply prohibit the cause property here. This of course wouldn’t affect anything for errors generated by the language, the language does not in install the cause property. It would only be a problem if the user is trying to construct a suppressedError and giving it both the `error` and `suppressed` properties and then in addition passing a cause to the options bag and I think JHD makes a reasonable case that that would be confusing or indeed Ron as well that the error and suppressed properties do sort of logically represent what the suppressedError is. There’s no like additional cause that is relevant to the suppressedError itself that isn’t like inherently part of either the error property or the suppressed property. A possible path forward is prohibit the cause property and look it up in the constructor bag and do a has check for the cause property in the constructor bag and i guess throw away different error in that case, I don’t know. Or just not look it up in the first place. But just not have the cause at all. Because it seems like it’s not a great fit for this kind of error.

SYG: Real quick, I agree with that. I think it’s fundamentally – I think RBN convincingly argued it is basically a branch point and cause makes sense not as – not on the wrapper but on both the suppressee and the suppressed. If you want to attach a cause, you should follow one of the branches. Both it’s like a branch point. Or I guess it’s like a merge point, not a branch point.

RBN: My comment was more the state if we – there’s basically two things we have to decide. One is do we believe that we must make a change or is the status quo acceptable and the second is if we make a change, which change should we make? I am weakly opposed to making a change because it makes suppressedError somewhat inconsistent. But one thing that was discussed in the matrix chat was that suppressedError currently has two conceptual causes. Those being error in suppressed therefore adding a third cause could even be more potentially confusing. Therefore if we must make a change, I would be strongly in favor of removing install error cause and the option options property from suppressedError because again we could potentially reintroduce it later.

EAO: Mentioning that if there is basically a mismatch in that, you’re not allowed to have a cause and an error at the same time, the kind of distance between one of them being an option given to the second argument and the other one being a third argument is kind of far. So if that were the case, I would support rather including the error with that name as one of the option options requiring that to be present.

RBN: Given that the predominant – or the primary motivating use case for this is to link – provide a link between the suppressing error and the suppressedError and that often people will create exemptions without messages, I strongly believe that both error and suppressed need to be leading arguments in the SuppressedError constructor. As a result really would be no way to differentiate whether or not an error is passed versus just being undefined because `undefined` is valid. I don’t think it makes sense to require users to create an options bag to provide an error for the primary use case of the suppressedError constructor. So I don’t know that I would support that. And without doing something like that, I don’t think it’s feasible to error on both. So I still would strongly be in favor of dropping options and install error case instead.

RPR: We are running out of time. Doesn’t sound like we are going to get to a conclusion now.

JHD: Can I ask my question and we can see?

RPR: Go ahead JHD.

JHD: So it sounds like there’s possible consensus for either banning `cause` in options but as Ron just indicated, perhaps not. So can I ask for consensus for removing the `InstallErrorCause` line and thus the options argument from `SuppressedError` and then the `error` and `suppressed` arguments remain conceptually required (even though that you can omit them) and there’s just not a possibility to have a `.cause` on the SuppressedError unless you install it yourself. Is there any explicit support or objection to that?

MM: I weakly object. I think it’s introducing a change in error semantics that is otherwise universal across the error types is just not worth it. I prefer uniformity. But it’s weak so I’m – if there’s otherwise consensus to do that, I’m not resisting.

WH: With this one I would be okay with either status quo or not having a cause in `SuppressedError`.

RPR: So what we’re being asked for consensus on is re removing install error cause.

??: Yes.

??: So you said you would be okay with that.

WH: Yes.

RPR: Are you providing explicit support for that?

WH: I’m not providing explicit support for that change. I would be okay with it.

EAO: I explicitly support that.

KG: I explicitly support that.

RPR: We have heard from Kevin and Eemeli explicit support for removing error cause.

??: With the logic at least for me that required parameters should come before option ones.

JHD: To MM’s point I think this is a fundamentally different kind of error in that it’s a branch point and it doesn’t have a linear relationship in the way that others do. I would still prefer to go with this option.

RPR: RBN, you’re champion of this. Are you going to express a view on the removing of in installErrorCause?

RBN: I would say that I have a very weak preference on this. I am perfectly fine with the behavior as is. If there is strong support for removing cause, then I’m agreeable to that. I don’t have a strong – I’m not strongly in favor but i don’t have –

RPR: At the moment I’m hearing three people who explicit explicitly support this. JHD, Kevin, and EAO and nothing but maybe one weak and neutral response. So we are heading towards consensus for this change unless anyone would like to speak up and object to this this. just leaving time for anyone to object. I think we can call that removing install error cause has consensus.

JHD: Thank you everybody.

### Conclusion/Resolution

- Previously, the `SuppressedError` constructor had an optional `options` argument which could be used to install a `cause` property. The committee reached consensus to remove the logic which reads the options bag and installs the `cause`, so the options bag will simply be ignored. In terms of the spec algorithms, this is done by removing `InstallErrorCause` in the `SuppressedError` constructor.

## Intl Locale Info API Stage 3 update

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-locale-info)
- [slides](https://docs.google.com/presentation/d/1L_-IRdBeLaOrnj-EFmUWxB_ALe9T_Mvzy4IajuWTg1E)

FYT: I work for Google and have Stage 3 update. I want to make clear for the current status we don’t think this should be promote to Stage 4 until later. And now probably not for ECMA 2023 and possibly 2024. This is update only on Stage 3. The topic is INTL locale for API and everyone have high level understanding this is the proposal that try to ex expose locale information such as week data. When is the first day in a week, weekend start day, weekend end day, how do you count the minimum day in the first week of a year, our cycle and so forth using the locale. The history of the proposal is it was advanced to Stage 1 in 2020 September and Stage 2 in January 2021 in april. And then I have come here to give several updates. What we propose to Stage 3 in those about almost two years ago, one and a half years ago, shipped with chrome for a while but recently I have – I was up to two months ago thinking should promote to Stage 4 but then there’s a new issue come in and we discussed last meeting which we probably need to make a big change. And what happened was when proposed here it was pro proposing at 7 getters in INTL schedules and they are return object. Last time we come here, because we got issue file say saying well, return the object then do we need to cache that object? Is that object mutable or not so on and so forth. So getting the feedback from this meeting, we decided and this is already resolved to change it to function. This is kind of basically where we decided it will have to change from getter to a function to avoid some other problem. So taking that feedback and crafting the PR and to try to change it to a function but then I think another member or some member mentioned we change the function, then the naming probably should be reconsidered. So should we use the get prefix for those functions? And just be aware that because we’re changing from a getter to a function, so whatever the task code or whatever calling this thing already will need to be changed and will not work and have to change any way regardless we change the function without changing the name with the function it will not work any way, right? So the cause for changing to either one is – I mean, from the compatibility point of view are exactly the same. There is no one better than the other in turn of that. So in December at TG2 discussion meeting we had some discussion and some people favor one way and some people favor the other way. The only conclusion we reach is we should bring this to the plenary to ask for guidance. So here is the – and that time try to make them easier easier, what I decide to do is I create two competing PRs. PR 65 and PR 67. Only one of them should be landed. And one is not changing the – adding the prefix get and one is adding the prefix get and of course capital capitalize the next character after that. And both of them changing to a function and which one should do. I didn’t include all the screenshot. This is basically after the change. Remember, currently without the neither of the PR and this is getter. Have to change either right hand or left hand version. Seven of the function are very similar. That’s all we need to change. And because of that, I think even if we can change today it will not be appropriate to ask for Stage 4 any way because we need to adjust that and ship it with V8 and then I think we also need Mozilla or Safari to ship it. Since we are not going to get it in before the reasonable time for ECMA for 2023 edition. Just take the time, right? We don’t need to rush. But we need some guidance which one we should pick or if there’s a better one even better than these two, this would be the right time to bring up. I think these two should cover either one of the case. What we really need from you guys is really Firefox commitment and we plan to delay Stage 4 post 2023 edition. And here requesting the committee, how to solve the issue? 65 or 67 or is there anything else? I’m open to questions.

RPR: There’s no one on the queue. Any questions?

FYT: Any opinion which one we should go?

RPR: A naming question. No one has an opinion. We do. There is two mentions of support for the get prefix. Would anyone like to explain.

FYT: Could you clarify who say that. I cannot see the queue.

RPR: SYG and RGN.

SYG: I will quickly explain. I would prefer get because that sounds more like a function name. Correlation and property names and if functions could be strange. I think that’s about it really.

FYT: Okay.

RGN: Largely similar reason. I think I commented on one of the pull requests also to kind of elaborate. But generally speaking, you know, get is somewhat common in the language and in the broader ecosystem to indicate a function that returns a value as opposed to the unprefixed ones which are a little more confusing.

RPR: Sounds like names versus verbs. JHD has the +1 for the get prefix as well. Same reasoning as other people. We heard three explicit support for the get.

FYT: So I would like to ask for consensus for me to merge in PR 67.

RPR: Asking for consensus. I think we can count the three voices so far as message messages of support. So are there any objections to merging this?
Someone else has created – CDA has thumbs up in the chat. We have consensus. Congratulations.

FYT: Thank you. That’s all for this. I think I scheduled more than I needed. Sorry.

CDA：👍

MF:：👍

### Conclusion/Resolution

- Reached consensus to Merge PR 67 https://github.com/tc39/proposal-intl-locale-info/pull/67

## Parallel async iterators via a tweak to iterator helpers

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1Gjeg069s1g7vvDUZhJ2Rtb-cBXwQX9WtbHuGLEfbtdw/edit?usp=sharing)

KG: You may recall that iterator helpers, both sync and async iterator helpers, got Stage 3 at the previous meeting. Iterator helpers are a collection of methods on iterator prototype and async iterator prototype that do map and so on. And as they advanced I was thinking on follow ons and in particular I was thinking about the possibility of concurrency. And we thought about it in a few different ways. I thought it would be possible to graft on top of the existing proposal and I no longer think it will be possible or at least as ergonomic. So I think that a tweak which is quite small from the point of view of users, although somewhat larger from the point of view of specification and implementation, that a tweak to the semantics of AsyncIterator helpers would leave the door open for concurrency/parallelism in AsyncIterator helpers. And that since that requires a change to an existing stage 3 proposal, it needs to be talked about urgently without working on the full details of what parallelism might look like. I have an issue on the issue tracker if you would like to join the discussion there. But in brief I would like us to contemplate the follow following bit of code. You have an AsyncIterator which is producing URLs - don’t worry about why you have such an iterator - and imagine you have it and you are fetching each URL in turn, or creating an iterator which when pulled from will pull from the underlying AsyncIterator and perform a fetch, and once those both complete your promise that you got by calling .next will settle. So with this there’s I think a couple of things you might reasonably want from this. You might reasonably want to do multiple fetches. Fetches take a long time. It’s nice to do more than one of them at once. Similarly if your underlying iterator is not instant, so, for example, if your URLs from coming from a network request or reading from the file system or something, you might want to do a fetch while you are pulling the next item from the underlying asyncIterator. Now, the thing that you might expect to work is just calling .next multiple times. The .next method on AsyncIterators, unlike synchronous iterators, can be called before the previous call completes - or I should say more precisely with synchronous iterators you get a value immediately from the call to next and with AsyncIterators you get a promise. With sync iterators there is not really an opportunity to call next twice in a row with the previous one not yet having finished. The only way to do that is sort of do it recursively, which the language forbids. With AsyncIterators it makes perfect sense, you call `.next` and get a promise and you continue about your day. And so you can call .next again right away. Looking at the code, you might expect it would perform two fetches at the same time. It doesn’t. And specifically the reason it doesn’t is because when we wrote down the semantics for AsyncIterator helpers we wrote them as essentially async generators, that is to say they reuse the same machinery that syntactic async generators use. With async generators a call to next before the previous call has finished doesn’t and indeed can’t do anything because you are executing an async generator and you've hit an await or something while attempting to process the first call to .next. And then another call to .next is made, well, there’s nothing you can do. You still have to wait for the first await to finish and then proceed to the point where you are yielding that value so that the first .next settles before you can even start thinking about the second .next. So with async generators, calls to .next are sort of buffered. If you call .next before a previous call settles, it just gets stored and only looked at after once the first call to .next settles. But that doesn’t need to be the case for iterator helpers. They don’t have to be implemented as essentially async generators. You could in principle make the call to .next do something before the previous call settles. So just as an example - I want to emphasize, the code on the screen is not intended to be what the actual implementation of AsyncIterator prototype map would be. It is merely demonstrating it is possible to have an implementation where calling .next a second time before the first one finishes does something useful. And this is sort of the simplest possible case, which is `.map` on AsyncIterator. The way I have written this code - and again I want to emphasize this is not necessarily what it would actually do. But the way I have written this code, as soon as you call .next, it will, regardless of whether you have called .next previously, invoke .next on the underlying iterator and await the result of that and apply the map function and await the result of that. Doesn’t matter if a previous call to .next was busy awaiting the result of the asyncIterator or the mapper function. You can just do those things in parallel. And if you don’t call .next twice without waiting for the previous call to settle, there’s no observable differences, right? The fact that multiple calls to .next get buffered is only relevant if you’re making multiple calls. Of course we might add a helper that does multiple calls and I’ll get to that in a second. I guess it is also possible that in .drop we might make – if you .drop(5) we might call .next five times right away instead of doing one and waiting for that to settle and then doing the second one. No particular reason to bother doing those in sequence. But again that’s something we would work out later. And apart from drop, nothing would change unless you are calling .next multiple times. I want to emphasize again this isn’t relevant to sync iterator helpers. They don’t have the notion of multiple calls to .next being outstanding at once. It’s just mechanically impossible. Anyway, with that change, with only this change where .map is able to do multiple things at the same time, the code that I had on the screen earlier just instantly is parallel - the underlying iterator will be hit twice right away without waiting for the first fetch to finish, and both fetches can be happening at the same time. And you just get the thing that you want with no additional work. And I am imagining at some point in the future, not as part of this proposal but at some point in the future, having a helper that sort of does this for you - that eagerly pulls from the underlying iterator and stores the results in an internal buffer so that when you it read the result of this, you get things from the buffer. And by specifying how far ahead you want to buffer you are in effect specifying a degree of concurrency. Code like this would be doing two fetches at once, that sort of thing. Again, the helper is very speculative. The only thing I’m talking about right now is making the change to AsyncIterator helpers that would be necessary for such a helper to even be possible because if AsyncIterators continue to be specified the way they currently are, it is just fundamentally impossible to make multiple calls to .next and have subsequent calls do anything at all. But like I say, this requires changing the semantics of asyncIterator helpers that are at Stage 3. I wanted to ask for consensus to pull AsyncIterator helpers out of the iterator helper proposal and split them off to a separate proposal and put just the asyncIterator helpers back to Stage 2 while we work out details of this possible non-buffering .next behavior. For sync iterator helpers, none of this is relevant. Sync iterator helpers I would like to remain at Stage 3. Yeah, I think that’s everything.

MM: I love this proposal. I feel more enthusiastic about this than anything I have seen in a long time. It’s just such a simple change. It’s invisible by default by normal operation. You have to go out of your way to make use of it. If you do go out of your way to make use of it, it’s incredibly powerful and the whole thing is elegant. I love the way it holds together and I love how clever it fits into the language. I would support just making this change and leaving it stage 3 if we can get consensus on this. If we can’t, I support bumping it back to Stage 2. I really do want to see this happen. If it does get bumped to Stage 2 I would also want to consider the particular additional helper method that kevin showed be added to the Stage 2 proposal. I think it’s clearly too late to add that to the Stage 3 proposal but if it does get bumped down to Stage 2, I think that’s a reasonable enhancement. So bravo on this, really love it.

MF: I share MM’s enthusiasm but there is a lot there, a lot of details to work out. The changes that we need to happen here. While I would love to stay at Stage 3, I think we need to go to Stage 2 while we work through those. I think they affect pretty much every method.

SYG: How much worse is sync iterators for promise of parallelism. I’m convinced there’s worse and we shouldn’t do it. Is that a viable – I guess.

KG: So two things. The first thing is that in some situations it simply won’t work. When you have an AsyncIterator already, you simply cannot turn that into a synchronous iterator or you can but then the language doesn’t help you with it at all. You can’t use `for await`, or you can but it gets very weird. The second is that I think it doesn’t provide you the help that you want with stuff like flatMap or with filter. Wiring up a filter or flatMap to have this kind of parallelism when using sync iterators just a huge amount of work to be trying to do, even in the case it’s possible, when you’re starting with something synchronous. A lot worse.

SYG: I don’t think I have an opinion on Stage 2 or 3, but even if it’s Stage 3 with a -- I guess I don’t know what -- I guess that’s MF’s point, I don’t know the exact semantic changes yet with the open questions, but, yeah, support.

MF: I wanted to bring up how we had a lot of difficulty during the design proposal trying to figure out how we should think about the async iterator helpers, and we eventually settled on that it is very nice if somebody is able to conceptualize the iterator helper as the thing that they would have written anyway. And we decided that what they would have written anyway is an async generator and we wanted to map as close to that as possible. But that was like -- only mildly motivated. That was the only motivation we really had there is that it’s nice. I think that what we’re trying to accomplish here is an even stronger motivation, and it’s worth giving up that nice model that a developer can have. For the most part, they can ignore that this change has happened, so it’s really not a big deal, so I’m in support of this.

WH: I support going back to Stage 2. I really like this proposal, but I think there are some things that we’ll need to think about. What are the consequences on `drop` that you mentioned?

RPR: Just to clarify, WH, you support the async part going back to stage 2

WH: Yes, splitting off the async part and moving that back to stage 2.

KG: Yeah, so to comment on the Stage 2 versus 3 question, I think that it definitely does need to go back to Stage 2. In particular, because there are some design questions, and one of the design questions is what happens with `drop`. So right now, the way drop is specified is essentially you have a `for await` loop -- or well, well, no, I shouldn’t say you have a `for await` loop. The way that drop is specified is the first time you call `.next` on the helper that is produced by .drop, it will call .next once and then await that, and then again and then await that and then again and then await that, up to the number of -- the parameter that you passed to drop. So if you .drop(3), it will await, you know, underlying iterator dot next, check if it’s done, if it’s not, it will away underlying iterator again, and check if it’s done and so on. That is still a possible design. But another possible design is to call .next on the underlying iterator three times immediately -- or not necessarily immediately, but perhaps the first time that you call .next on the helper produced by .drop. And in particular, not await the results of the dropped calls to .next, so that in the case that you have something like .map(fetch).drop(3), you can trigger the dropped fetches in parallel. But, again, I’m not saying this is necessarily the correct design. I’m just saying that it is a possible design that was not relevant before making this change, but if we are living in a world in which pulling from async iterators without waiting for the previous promises to settle is something that is supported, then it is something that drop in particular might want to do.

WH: I am curious, given that we’re starting to get async resource management, does anything rely on things eventually being awaited to do cleanup?

KG: Ah, the values that you get out of async iterators are produced by the language. They are these wrapper things that that have just a done property and a value property, and I think nothing in the language would rely on those things getting awaited. And they can’t have a dispose property or anything, because the language is producing them.

WH: Okay. Thank you.

RPR: WMS says no need to talk. But supports the idea of splitting and sending the async part to Stage 2. Likewise, JHD has explicit support for change and sync remaining at Stage 3 while the async would become Stage 2. And JRL has the same support for -- it should be split with the -- I think we can assume the async part, that’s stage 2, because the other methods need to be updated. And then a question from --

KG: Yeah, sorry, I should emphasize, the only thing that I put on here was AsyncIterator.prototype.map, which is a clean case where allowing you eagerly to call next, the behavior makes sense. But the idea is that we would revisit all of the methods and try to give them the sensible behavior for a calling next multiple times, when there is such a behavior. It’s not just `map` that I am proposing to change. So, yes, all of them would need updating.

RPR: All right. DLM has a question about whether this is a late agenda item.

KG: Sorry, I failed to add this before the deadline. I thought i had and then didn’t, and then couldn’t reasonably defer it to the next meeting because it’s -- it affects a currently stage 3 proposal. Yes, it was a late addition.

DLM: Yeah, in case -- I understand it’s a -- it was added both after the deadline and when we had our internal meeting for spider monkey to review the proposals which limit my ability to give you feedback. But in this case what you’re proposing to move this to stage 2, I don’t think it matters because you’re opening for further discussion, but I would be opposed to making any design decisions in this meeting right now and keeping there as Stage 3.

KG: Yeah, sounds good. And again, I apologize for not getting it on here.

DE: As long as we’re criticizing KG on form, when you make your agenda addition, if you can put inside that you are considering demoting or recruiting as for discussing in temporal bids on the proposal back to Stage 2, that would make it easier to highlight it and make it easier for people to review.

KG: That is a great call-out. I will try to do that in the future. Okay, so I guess the queue is empty. We’ve heard multiple expressions of support for moving async iterators back to Stage 2, and exploring this design space. And no objections to that. I may or may not be able to come up with something by next meeting. There are a lot of tricky corner cases and questions about, like, should promises be allowed to settle out of order, like they do on this code on the page, or should you keep a count or of the previous ones and ensure that they always settle in order and that sort of thing. I may or may not have something for the committee at the next meeting but it sounds like, unless there are objections raised, we can move async iterators out of the proposal and back to Stage 2.

RPR: Last chance for any objections. No, I didn’t think there were going to be any. Yes, congratulations, you have consensus.

KG: Yes, and JHD is asking about putting it in a separate repository. Yes, that sounds good. I will do that.

JHD: Please DM when you’ve done that and I’ll update the proposal statement.

### Conclusion/Resolution

- In order to reconsider how to enable better parallelism, the committee reached consensus that async iterator helpers to be split out from iterator helpers proposal and demoted to stage 2; sync helpers remain stage 3

## Temporal Stage 3 update and normative PRs

Presenter: Phillip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2023-01/)

RPR: I realize just for awareness, this is a Bloomberg related proposal. Normally we arrange for cover to try and avoid potential conflicts of interest here. I think BT has probably gone to bed. Yes, or has gone for the day. BT, are you here. Okay, I think just based on cover, we’ll have to go ahead. Yeah, PFC, please continue.

PFC: All right. Great.

PFC: **(Slide 1)** Just for introductions, my name is Philip Chimento and I’m presenting the Temporal proposal, as you’ve probably become used to by now. I work for Igalia and this work is done in partnership with Bloomberg.

PFC: **(Slide 2)** This is essentially another progress update. the proposal is at Stage 3. Implementation in engines continues. One of the things I’m going to talk about is a final push from the champions group to resolve issues that were raised either by implementers or by users during Stage 3, and as part of that, I have, as usual, a few normative PRs to present for consensus in this plenary.

PFC: **(Slide 3)** I mentioned a final push. What does that mean?
I’ll talk a little bit about that. Our goals among the champions of this proposal are that we resolve all of the open discussions on existing issues. We are aiming for having no remaining normative changes to make after the March plenary, and after that point, only consider issues that are really instances of the spec not working.

PFC: **(Slide 4)** And then while we continue to resolve minor editorial points and get things into the shape that would be required for a PR into ECMA 262, this is a long-running proposal, so the spec text has some updated conventions in it, which we’d use that time to sort of quietly work on. So in the point leading up to this meeting, we had a number of very long champions meetings trying to resolve all of the known discussions on normative issues. I’m going to present the results -- most of those results today. We expect another two to three pull requests to present in the March plenary, and then after March, you know, barring the case where implementers report more issues, we plan to pause our work until the -- or pause our work on, like, making decisions for the proposal until we get to a point where it becomes feasible to ask for advancing the proposal to Stage 4.

PFC: **(Slide 5)** So all that means that the finish line is in sight. Here some nifty clip art. And given that, I’ll have a short overview of things that you can expect after this meeting.

PFC: **(Slide 6)** The progress on standardizing the string annotations format in IETF continues. Last time I mentioned, it was in review by the iETF's Internet Engineering Steering Group. I believe IESG stands for that. The review came back and asked for a section on security concerns. This section has been written thanks to Ujjwal and his co-authors on the draft. Now we are once again waiting for the IESG to complete their review. As a reminder, having an IETF standardized document on this was a stage advancement condition for Stage 3, at which time we made the decision not to ship unflagged until that was the case. So this blocker is still in place. We expect that no engines should be shipping Temporal until there is an official number for this document, at which point it would be official and the IETF would not be making any more changes. As far as we can tell, the document is basically on a glide path towards that, and we don’t think it’s unrealistic that they might have this by the time of our plenary meeting in March.

PFC: **(Slide 7)** Unnecessary calls to user code is one of the few issues that we are going to turn our attention to between the end of this plenary and the one in March. This is from implementation feedback that so far turned up several cases of redundant calls into user code. We’ve been fixing these case-by-case until now, but in order to solve this once and for all, we think it’s best to audit the whole proposal for these redundant calls. This work is in progress, but it’s taken a back seat to the other things that I’m presenting today, so we intend to present a normative PR for this work in March.

PFC: **(Slide 8)** The other thing that we intend to look at for March is possible out of ranges when using the MakeDate, MakeTime, and TimeFromYear operations in ECMA 262. This problem is not unique to Temporal, but since we use those operations, we inherit that problem. There’s already an issue open ([#1087](https://github.com/tc39/ecma262/issues/1087)) in ECMA 262 pointing out that it’s not always clear when these operations can overflow to infinity. So what we plan to do is not reuse those operations from ECMA 262 and instead do calculations in the mathematical domain. This work is also in progress and we intend to present a normative PR for this in March.

PFC: **(Slide 9)** Yesterday we had the discussion about when a proposal is ready to ship. I did not amend these slides since then, but the question is now not “ready to ship”, but “shipping requires coordination”. In this case, with Temporal, we have coordinated not to ship the proposal until the IETF published the RFC in any case.

PFC: **(Slide 10)** That was a quick overview of what we expect to happen between now and the March plenary. Before I go on further with the normative PRs that I want to ask for consensus on, are there any questions about this section?

FYT: It’s not a question, but more a suggestion. You mentioned about the pause after March. I would like to make a suggestion, instead of having that, because if you do that, what will happen is will accumulate a lot of pressure and people will come to you and say we have to change this, right? And there will be -- you say, oh, what happens is better. It will come, right? That’s realistic. And it’s not avoidable. So I would suggest you to consider and champion to create a new repo for a new proposal, stage 0 or Stage for the next version. So you can say, hey, let’s not abandon those great ideas, let’s just move it here. We are going to solve it, but not this version. Right? We need to wait. We’re not going to ignore you, but instead, we are going to ask you to wait for the train, the train is leaving. Which gives you more, you know -- I personally believe that will give you more relief on the pressure to -- instead of say, oh, we’re not going to take more. Just my suggestion.

PFC: I love that suggestion. And we have this. There is a "proposal-temporal-v2" repo. It’s not part of the tc39 namespace yet because it is just a collection of issues. There’s no champion for this proposal. But that is a place where we have been moving some suggestions to. As with many things, there’s some nuance here. I mean, if there’s something that,for example, implementers consider broken and is also not something that we could solve in a follow-up proposal because that wouldn’t be web compatible, there’s always nuance about whether we move something there or actually have to solve it now, or have to decide not to solve it. But in general, things that are out of scope, but could be added later in a web-compatible way should go in a temporal proposal version 2.

DE: I’m glad you had that set up. But I just want to say I don’t think there’s any particular responsibility of the current Temporal champions to champion that proposal. That logically goes to people who wants to advocate for those inclusions, which may or may not be the same people. And with BigInt, this came up as well. I think it’s fair.

PFC: That’s right. Like I said, there’s no champion for such a proposal yet. The role that I’m informally taking is to curate the issue tracker, but that’s all.

RPR: Yeah, this makes a lot of sense. The proposal has been at Stage 3 for a long time, so new ideas, new features coming to a new repo makes sense.

SYG: As one of the open things, we’ve chatted about this offline already, PFC, about changing temporal.Instant from nanoseconds to microseconds. I apologize that I didn’t really have time to fully prepare a discussion item about that this meeting, but given that I guess we can still do it in March, that seems fine. But as a heads up, since you’re already talking about the things to be closed up that you hope to resolve by the March meeting, V8 after discussing now that Temporal is getting closer to being shipped, we still really do not want nanosecond precision in Temporal.Instant, because of the implementation complexity and performance concerns. In particular, for V8, we would end up using bigInts if you need nanosecond precision. I understand that, PFC, you did the JSC implementation using int128, int128 is not portable enough for our needs. So we would really prefer going down to microseconds. For basically the same reason in this very long GitHub thread, which I think boils down to the use cases for nanosecond precision seems pretty speculative, and we’re not convinced by that. Anyway, that’s a heads up that we plan to push for microsecond precision, and we can discuss more to get consensus on that in March.

PFC: Okay, yeah, I will ask that let’s try to come up with a recommendation before March so that we don’t open this discussion during the March plenary.

SYG: So recommendation from committee?

PFC: Well, we try to arrive jointly at a recommendation.

SYG: Oh, yes, yes. Agreed.

PDL: Sorry, SYG, just a question. Would it be enough to not specify the precision of Instant to be nanosecond in terms of the data but only in terms of the interface, such that at some point in the future, think 20 years down the line, when int28 is just the standard in computing in general, we could adopt nanosecond precision without an interface change? Would that be something?

SYG: I would need to see the exact semantics. The concern -- I’m not sure what you mean by behind the scenes.

PDL: What I’m saying is we basically say, yes, go ahead and store it in Int64. We’re going with microsecond precision. In terms of the storage and the API, for the a toy remain entirely unchanged and remain -- allowing for nanosecond precision, except for everything right now cuts off due the precision or truncates due the precision.

SYG: We have an interop semantics question here. If I create a nanosecond precision Instant, and I add one nanosecond to it, are you saying that you would -- like, what would your proposal say that should be observed as?

PDL: That should be entirely truncated for now. So that would be the same thing. For now. But in terms of the API itself, it would remain unchanged, such that you sort of have pseudo nanosecond precision until then.

SYG: Yeah, that may work. We can discuss offline.

PDL: My thought is literally five years from now, this stuff will be so common place that making that change in V2 to actually to nanosecond precision is something that we want to keep easily available.

SYG: Let’s discuss offline, but that may work, yes.

PDL: Okay, just pointing you that way, and we’ll talk off line.

DE: I’m really not a fan of anything that’s getting introduced in a compatibility matrix like that this you can’t really future test for in a clear way. But, yeah, let’s discuss offline. But microseconds might be okay.

FYT: I just want to provide information, one thing is currently in ECMA 42, the daytime format only support the millisecond, not even nanosecond or micro second, nor the temporal specification current spec in the section of chapter 16 require anything below millisecond for the daytime string format. Interim internally, we using API and the engine can only support to millisecond precision. We cannot even format to micro second precision. But that’s only limited to `toLocaleString()`. If you try to do `toString()`, I think -- the BigInt we can do that. So in the Stage 3 Temporal didn’t require less than milliseconds for the `toLocaleString()`. I want to make sure we understand that part.

USA: Yeah, I believe that’s mostly because of the difference between the internationalization and the scientific use cases. And less about sort of, you know, the champions not liking the idea of increasing the precision.

PFC: Would it be okay to take further discussion about nanoseconds offline and return with a proposal to change, if any, in March?

SYG: Yes, that would be perfect.

PFC: Okay. I’m going to continue with the normative changes that I’d like to present.

PFC: **(Slide 11)** The majority of these are, as usual, edge cases that probably no one cares about, so I’ll be running through the slides fairly quickly. But as you may know, if you took a look at the slides, there’s a substantial one at the end, so i want to make sure that we do have time to cover that.

PFC: **(Slide 12)** All right, the first one [#2472](https://github.com/tc39/proposal-temporal/pull/2472) is fixing discrepancies in an abstract operation called PrepareTemporalFields. We had two versions of this, one for implementations with Intl, one without. FYT pointed out we don’t need two versions of this, and in fact, accidental discrepancies had arisen between the two. So we would like to put them together, and also avoid a kind of contrived situation illustrated in the code sample here where the following code would work in an implementation without Intl and break in an implementation with.

PFC: **(Slide 13)** Next thing [#2479](https://github.com/tc39/proposal-temporal/pull/2479) was an unintentional bug in the locale-aware formatting for ZonedDateTime, we accidentally left the value in the [[TimeZone]] slot unconsidered, so if you had a zonedDateTime, the `toLocaleString()` would always format it in your current time zone and not in the time zone associated with the object. That is obviously wrong and we’d like to fix it.

PFC: **(Slide 14)** We’d like to fix a regression [#2477](https://github.com/tc39/proposal-temporal/pull/2477) in Instant and ZonedDateTime arithmetic. This was an unintentional side effect of a previous change where we converted a mathematical value to a JS Number too early, which caused an inexact result. Now the result is exact as much as possible before being converted into a number in order to return to javaScript.

PFC: **(Slide 15)** We want to make a change [#2456](https://github.com/tc39/proposal-temporal/pull/2456) that enacts stricter validation of the return values from Calendar and TimeZone methods. This was inconsistent were where sometimes sometimes we would throw, if the method returned the wrong type -- this is user code -- if the user code returned a wrong type, and sometimes tried to convert it, the choice we’d like to settle on is to consistently throw, if the wrong type is returned. So, for example, here is a contrived calendar that returns the string `"7"` for its days and week method instead of the number `7`. We would like that to be no longer accepted because returning a string from that method is incorrect no matter if it could be converted to a number.

PFC: **(Slide 16)** There is another of what I’m calling normative typos, where we just used the wrong variable in an algorithm step, but that has normative consequences, meaning that a calendar calculation was incorrect. That should also be fixed.

PFC: **(Slide 17)** And then a couple of adjustments based on feedback.

PFC: **(Slide 18)** One piece of feedback we got from ABL [#2480](https://github.com/tc39/proposal-temporal/pull/2480), from the Firefox implementation, is that there’s a storage concern with rounding increments that don’t have an upper limit other than not being infinite. So previously, you were allowed to round years, months,
weeks and days of durations to any positive finite number. The limit is now a billion, which we think should probably be enough, and it’s also small enough to fit in a 32 bit integer, so this code snippet here where you supply a rounding increment of of 10 to the 10th is going to throw a RangeError after this change.

PFC: **(Slide 19)** The next thing we want to do is clarify the meaning of `daysInMonth`. You can understand the number of days in a month to mean two things, it could be the count of days in the month. This is the meaning that we’ve chosen. Or it could be the one-based index of the last day of the month. So the `daysInMonth` of October is 31. These two interpretations are normally the same. And they are in fact the same in all of the calendars that CLDR, and therefore Intl, currently support. However, in the transition from the Julian to Gregorian calendar, in October 1582 or one of the other transitions, some calendar days were skipped. This is not currently a calendar that is supported by Intl, but CLDR is considering adding it in the future. And so it seems prudent to make sure that the definition of `daysInMonth` is unambiguous. So we’ve chosen it to be the count of days in the month. So if you are asking for the number of days in the month of october 1582 for the calendar where that was the Julian to gregorian changeover date, the number of days in the month would be 21. And making this distinction requires a change to plainYearMonth arithmetic to make it work in that month if we had that calendar. Don’t you love calendar lore?

PFC: **(Slide 20)** All right. We want to address some questions raised [#2474](https://github.com/tc39/proposal-temporal/pull/2474), [#2475](https://github.com/tc39/proposal-temporal/pull/2475), during implementation about some of the non-ISO calendar methods where the definitions were ambiguous or missing a step. There’s more details in the PR. But essentially nothing changes about the intention of what these methods are supposed to do, but we have tightened the language and it’s possible that somebody could have interpreted the previous language differently, and in fact from the day-month fields and month-day field, there was a step missing. It’s a normative change.

PFC: **(Slide 21)** We’d like to remove fallbacks for plain objects that implement the calendar protocol for the fields and merge fields methods [#2467](https://github.com/tc39/proposal-temporal/pull/2467). This was a leftover from an earlier design that had fallbacks for more methods. This is a bit in anticipation of the last more substantial change that I’m going to present, but if we change things so that built-in calendars always call the intrinsic methods, which i’m going present in an upcoming slide, for example, it won’t be a concern for people to delete these methods off the prototype because they won’t be looked up and called anyway. Our guidance so far, for custom calendars that don’t extend the Temporal.Calendar type, but instead use plain objects, has been to always implement all the methods. And implementing all the methods is going to be required anyway in the 'built-ins always call intrinsics' world, and this won’t affect the vast majority of code.

PFC: **(Slide 22)** There was a separate item from the Temporal update in the previous plenary discussing how ECMA-402 may add properties to acts that were defined in ECMA-262. We would like to do this for the `era` and the `eraYear` fields on the temporal types. So this shouldn’t affect implementations. But it does mean that implementations that only implement the ISO 8601 calendar are still allowed not to have those properties.

PFC: **(Slide 23)** This one is sort of a forerunner for the audit that I mentioned earlier of user observable calls. We want our specification to conform to the general principles that we perform user observable validation operations on the receiver of a method before any of the arguments, and there were a few places where this wasn’t the case. This is a normative PR that slightly shuffles around the order of observable operation. It’s unlikely to make any difference to anyone unless they are specifically looking for it with a Proxy like test262 would. All right, so that was the list of ones that probably nobody cares about. I’m going to present a larger change now. This one is going to span several slides.

RPR: Before we begin – JHD has a question.

JHD: Yeah, it was a couple slides back, on `era`/`eraYear`. I want to make sure I’m understanding this one correctly. I don’t think I was present in the previous plenary where that decision was made. So this means that the objects will be defined in 262 and 402 can add properties to it that 262 knows nothing about?

PFC: Right.

JHD: And then none of the methods in 262 know about those properties either? Only the 402 versions of those methods do?

PFC: If you’re asking what I think you’re asking, then that’s right.

JHD: Okay, so like another way to say it is the `era` and `eraYear` are simply not mentioned in 262 at all and the 402 patches what it needs to so those things are respective.

PFC: That’s right.

JHD: Okay, thank you.

PFC: **(Slide 24)** All right. A request that’s been long-standing ever since implementation started of this proposal, is to allow better optimizability of built-in calendars and time zones. Just as a recap, we have built-in calendars and time zones that implementations will have, and you can also supply custom calendars and time zones. These custom calendars and time zones work because there’s a protocol defined and the operations that we do in Temporal, they call the methods of this protocol. So if you have built-in behavior and you’re an implementation, you generally want to be able to optimize away the lookups and calls to these methods. And that is generally good for developers as well, because if you use built-in calendars and time zones, it also means that you want your code to be robust to people deleting properties off the prototype. We’ve been discussing about this one for a long time. Tried several different ideas. We have a coherent solution now. PR [#2482](https://github.com/tc39/proposal-temporal/pull/2482). This is the largest remaining change that we expect to do to the proposal. There were a couple of situations in which we had requests to be able to optimize this, one that I mentioned about, built-in time zones and calendars, and the other one was about constructing PlainTime objects. Since we don’t have the concept of time calendars, we made it so that PlainTime only supports the ISO 8601 calendar, but it’s kind of wasteful for a PlainTime object to carry about an ISO 8601 calendar object just to do nothing with it. So that was another consideration here.

PFC: **(Slide 25)** Here are some code snippets that express the problem statement. If you have a PlainDate, and you want to construct it with the Gregorian calendar, you give a string here. And then you consult the `calendar` property of that PlainDate. It’s an instance of Temporal.Calendar and you create an object that you have to carry around with the plainDate object. Many operations such as adding a month to that date, they require looking up a method on that Calendar instance and calling it, even though here we just want the behaviour of the built-in calendar, there’s no reason to actually call into user code. And it could actually be surprising if you call into user code. But if you create the date object with a custom calendar, and then you add a month to it, you do actually want the calendar logic to be implemented by looking up the method from the protocol and calling it. So that’s kind of an illustration here.

PFC: **(Slide 26)** Here is the solution we propose. For types with calendars, they have a [[Calendar]] internal slot. Previously this slot always stored an object. It could be an instance of the type or it could be a plain object implementing the protocol. We’d like to change it to be able to store either a string or an object. The string would be for the built-in behavior, and in this case, there would be nothing to look up methods on, so we wouldn’t look up methods. We would always call the intrinsics. If the slot stored an object, that would be for the custom behavior. Methods would be observably looked up and they would be called, which would potentially call user code. We want to replace the `calendar` getter with a `calendarId` getter which would return a string if the slot stores a string, or return the result of getting the `id` property on the object, if the slot stored an object. This is what you use if you want to get the string calendar out. There would also be a `getCalendar()` method, which would return the value -- the object stored in the slot if it was an object, or if it was a string, it would always create a new temporal.Calendar instance. We didn’t do that before because it was a property. But since it’s now a method, it’s okay for that to return a new object every time, which means that implementations don’t have to carry around a pointer to the object if the behavior is built in.

PFC: **(Slide 27)** Part 2 of the solution we’d like to do the same thing for time zones. This is a bit smaller in scope because zonedDateTime is the only type that has a [[TimeZone]] internal slot. No other types store time zones, but it’s the same thing. We replace the `timeZone` getter with a `timeZoneId` getter and add the `getTimeZone()` method for if you want the object.

PFC: **(Slide 28)** This has a couple of changes that occur as a consequence of the things I mentioned in the previous two slides. The way that you get the current time zone `Temporal.Now.timeZone()`, that’s always going to be a built-in time zone, so we’d like that to be a string to encourage people to create their objects with the built-in behavior unless they actually want the custom behavior. So this `timeZone()` method is going to be renamed `timeZoneId()`. We’d like to remove the calendar altogether from PlainTime. PlainTime doesn’t get a `calendarId` property and it doesn’t get a `getCalendar()` method. It just always uses the iSO calendar, always the built-in behavior. It requires a bit of a change to the comparison semantics between time zones and calendars. Previously, I believe it was that their ToString results needed to be the same. That doesn’t really make sense anymore, so the new behavior is SameValue, which if they’re strings, then the calendars are the same if the strings are identical. These are always canonicalized strings and we do not have to worry about alternate capitalization or spelling or aliases. And then if they’re objects, and they’re the same object, then they’re also the same. If they are not the same object, then we compare their `id` properties. And then an incidental change is that we remove these unnecessary extra reads of the `timeZone` property in `ZonedDateTime.prototype.with()`, which didn’t actually do anything.

PFC: **(Slide 29)** Another bit of fallout from this change is what values do we accept in the `from()` methods of Calendar and TimeZone. So previously, you could pass a property bag that, say, represented a PlainDate. And this was distinguished from a custom calendar object that implemented the calendar protocol by the presence of the `calendar` property. We feel that this now breaks the principle of a string being a fast built-in calendar and an object being a slow custom calendar, and so we’d like to change the behavior to accept an object in `Calendar.from()` only if it completely implements the protocol, and the same thing for time zone. So all the methods of the protocol must be there. And I guess, for reasons we have a separate pull request [#2485](https://github.com/tc39/proposal-temporal/pull/2485) stacked on top of the pull request implementing the strings-in-internal-slots change.

PFC: **(Slide 30)** Finally, the values accepted by other `from()` methods, for example, `ZonedDateTime.from()`. If you’re specifying a property bag there, you want to be able to give a calendar and a time zone in that property bag. We are proposing not to make a change from the status quo for this. If you give a calendar and time zone in a zonedDateTime property bag, it can be a string or an object as it always could. We considered splitting these into separate `calendarId` and `calendar` properties, but that seems unnecessary at this time, and this is also the least change for implementers and users.

PFC: **(Slide 31)** This is a large change. It wouldn’t be unheard of that new things popped up, so this is is one of the limited areas where we will consider further adjustments between now and the next plenary, and we’d like these adjustments to be based on implementation concerns or experience from yourself of polyfills or just consequences that we didn’t think of, but become apparent later on.

PFC: **(Slide 32)** Then there’s a point about the spelling of `calendarId` and `timeZoneId`. We received an objection in GitHub that this capitalization of ID is not okay. I guess it depends on whether you consider iD an abbreviation or initialism. We’d like to stick with capital I, lower case D in order to have a synergy with the W3C casing rules, such that underlie things like `getElementById()`. It’s important to note that TC39 isn’t bound by those rules, but it seemed to the champions that we’d like to stick to that unless there was an overriding reason not to. We considered `calendarCode` and `timeZoneCode`. Which would be okay, but would cause a lot more churn than necessary, because it also means that we’d have to change the `id` properties on Temporal.TimeZone and Calendar to `code` for consistency. Another idea would be to have a single property -- so, not have any `timeZoneId` or `calendarId` property at all, but go back to having the original `timeZone` and `calendar` property on Temporal types, but have it be allowed to be a string or an object. We weren’t sure if this was going to be able to get consensus at the plenary. So, yeah, if it’s possible, we would still like to include capital I, lower case d in the consensus.

PFC: **(Slide 33)** So, yeah, the only slide left in my slide deck is to request consensus. Does anybody want to discuss -- t last exchange.

RPR: There’s a bunch of things on the queue to start with, starting with PDL with a clarifying question.

PDL: Sorry, I was just going to mention that `Calendar.from()` and `TimeZone.from()` according to our pR, don’t just accept objects when they implement the full set of calendar protocol properties, but also when they are actual built-in temporal objects. So you can pass in a ZonedDateTime, and it would take the calendar and or time zone out of the internal slot, but only if it’s a Temporal object. So because I think that slide was slightly unclear.

PFC: Sorry, yes. That’s correct. And it’s not a change from the status quo. I guess the slide should say, "Objects *implementing the protocol* are only accepted if they *fully* implement the protocol."

PDL: And no property bags or anything of that nature.

PFC: It’s debatable whether an object implementing the protocol is a property bag. But that’s right, no property bags, if you don’t count that.

DE: And presumably you’re still permitting strings there as well?

PFC: Yeah.

DE: Great. I was just confused about that from the slide.

FYT: Yeah, just two things. One is I think previously, there’s a question about the -- whether the `era` and `eraYear` would be in the 262 part. In the current spec actually mentioned in the 262 part, in one of the tables. I just want to make it clear that chapter 3 has that. I’m not sure if you plan to remove that or you just forgot about that part. Chapter 13.42, I think. There’s a table.

PFC: That’s a good question. I am not actually sure if that --

PDL: The answer was that we wanted -- The answer was that we had to reference what 402 would do and point at 402. So we will remove it if it’s -- but other -- and just point to 402. Saying 402 will deal with these additional fields at this point.

PFC: I don’t know if it makes a difference, because the only fields that are looked up in that table are ones that are passed in as field names in that operation, and if you don’t have `era` and `eraYear`, then nothing’s going to pass them in -- if you don’t have calendars that have eras and era years, then they will never be passed in as field names. So I’m not sure if it makes a difference.

FYT: Okay, you just want to make it clear that that is there. Sorry. There’s someone above me.

RPR: Yes, RGN. Richard, we cannot hear you. Richard says he is working on a PR to move that. There’s the mention of `era` and `eraYear` in 262.

FYT: So a different topic. So there’s a PR [#2479](https://github.com/tc39/proposal-temporal/pull/2479) that touched the DateTimeFormat. I need to have more time to look into that before I support it. I don’t oppose it, but I don’t have enough detail. Things like -- it seems like it touches very deep inside the thing, and I think all the TG2 members should also make sure they go through it and feel comfortable about that.

PFC: Okay. So what’s your recommendation for this pR exactly?

FYT: I just don’t have enough time to support this. I’m not opposed to it, I just need more time to look into that. Can we not merge it?
I don’t think it’s this one. Oh, yes, this one, sorry.

PFC: Okay, so specifically, you would ask that we not merge this one. Does that mean, could we ask for a consensus on this one after --

FYT: Could we exclude -- can we not ask consensus on this one, because I just don’t have enough time to look into the detail. That’s all I say. I’m not opposed to it, I’m just not sure there’s no issue there.

PFC: Is it possible that we could come to a decision as a plenary that this is something that we want to fix, since it is obviously wrong now, and then maybe --

FYT: I’m not sure.

PFC: Have it conditional on you being able to review it?

FYT: I’m not sure this is something we should fix. I’m not even sure about that. I just don’t have -- I’m kind of surprised to see this.

DE: It seems okay to revisit in March, right?

FYT: Yeah, that’s all I ask. That’s all I ask. I’m not opposed. I just don’t feel I have enough time and enough detail to say anything.

PFC: Would it be acceptable to ask for consensus pending a tG2 review, so we could discuss it in the TG2 meeting and not have to present it again?

DE: So I -- what’s the problem with just having this in march?

PFC: I think it’s good to fix things that we know are broken as soon as possible without procedural delays.

RPR: In which case could you not work offline, and assuming that it looks good, you know, proceed to implement so that nothing really gets slowed down, and then we can officially ratify this in March?

PFC: Okay, to be clear, we will leave this PR 2479 out of the request for consensus.

CM: Yeah, I apologize, I wasn’t paying 100% attention when it went by, but you said something about calendars storing a string in an internal slot. Can you go back over that. I think we might have an issue with that.

PFC: What we had previously was the Plain date types have a [[Calendar]] internal slot and this slot currently stores an object, and we’d like to change it to store either a string or an object. And then the same for the [[TimeZone]] internal slot of zonedDateTime.

JHD: I have a question, actually, that just occurred to me. Is there a reason that we have to be explicit about it storing the string ID versus just not having -- like, if a temporal object is passed in, then a fresh temporal object is always returned? So you don’t have to preserve the identity or hold on to it?

PFC: I’m not sure I get what you’re asking.

JHD: The string ID could still be stored in the internal slot, but it would be retrieved from an internal slot on the Temporal object, so from the perspective of users of the API, they would all be still giving Temporal objects and retrieving them. It’s just that the underlying implementation wouldn’t need to store them once it knew they were real temporal objects.

PFC: Well, the thing is you could implement your custom calendar by extending Temporal.Calendar.

JHD: Okay, so you actually need users to be able to pass in a string as a way to say this is a regular Temporal object instead of a custom one.

PFC: Yes.

JHD: Thank you.

RPR: We’ve got three minutes left, so hopefully we can get to the point of asking for consensus. Next up is mM.

MM: Yeah, I also have not been following this in detail,
but obviously I want to ensure that the invariants needed for security are not violated, which I know has been the intent. The internal slot issue, that CM raised, to clarify it,
the two invariants are that primordial state should not have any hidden mutable state, meaning that if all of the primordial objects are frozen, there’s no longer any mutable state left in the primordials. And then the other constraint is that internal slots, whether they’re mutable or not, are only accessed as `this` arguments of built-in methods, they’re not accessed as --
from arguments to -- you know, non-arguments to built-in methods. Are both of those constraints still respected with regard to the internal slots we’re talking about?

PFC: So the concern is around objects. Right?

MM: Well, the concern is around objects and around assignable internal slots. So just to give a very concrete example, in ECMAScript 5, the `Date.prototype`
was itself a Date instance and therefore, had a hidden internal date slot which would be manipulated by the date built-in methods. It’s only manipulated by `this` arguments, so it’s not a `this` versus other argument issue. But the fact that they could -- and the slot could only hold a string or date -- primitive date of some sort. They could not hold an object, but the fact that slot was assignable using those built-in methods violated the no primordial mutable state. Likewise, a non-assignable internal slot that held on to a mutable object that were -- where all of that was primordial would also violate the no hidden primordial mutable state.

PFC: I see. So as with all the internal slots in the whole proposal, they can only be assigned when constructing the object. So it’s not possible to mutate the value stored in them through other methods. They are immutable.

MM: So when you say creating, the mutable -- the mutability issues only with regard to primordials. Primordials are only the objects that exist before code starts running. So if the slots we’re talking about are only in instances, going back to the date example is a perfect one, date instances having a mutable internal slot violated no principle. So are there any -- any of these slots in the primordials in, the objects that exist before code starts running?

PFC: Right, the primordials are the constructor objects, the prototype objects, and the `Temporal` object and the `Temporal.Now` object, and all of the built-in functions and getters and things, and those all don’t have any internal slots other than what objects already have. So that is the case.

MM: Excellent. Then -- and so that satisfies the mutability requirement, and is it also the case that even for the instances, the internal slots are only accessed as this arguments, not as other arguments of built-in methods?

PFC: I don’t understand what you mean by that. I’m sorry.

DE: I’m on the queue. In general, Temporal has plenty of places where it accesses internal slots on parameters. But this has been the case, like, through the whole lifetime of the proposal.

MM: I see.

DE: But I’ve been reviewing the proposal the whole time and really trying to make sure that whatever we choose for -- for example, for this optimizability issue -- matches the constraints that you raised. I think it would be quite hard to do the kinds of things that Temporal is doing without using internal slots of parameters. For example, in `with()` methods, and things like that.

RPR: All right, it’s sounding like this is --

PDC: Two seconds. To second what Daniel is saying, there’s only ever access to read-in. They’re never mutable. Even --

MM: So that’s still a concern. It’s not the mutability concerns it’s the other concern, it’s the virtualizability concern. If you recall the discussion with sets in the set methods, can one provide an argument that’s like the expected built-in argument that, for example, might be a proxy emulating the built-in argument where the proxy downtown have the mutable spot? Does the built-in method have a fallback behavior effectively does what it would have done had it found the mutable slot?

PFC: Yeah, this has always been the case. Let’s say, you are passing a Temporal.Duration to an `add()` method, right, if the internal slot exists marking that the object passed in is a Temporal.Duration instance, then it reads the internal slots. If not, it’s treated as a property bag.

MM: Okay. Excellent. I think that -- that completely satisfies the concern.

PFC: All right. Thank you.

RPR: We’re four minutes over time now. I’m wondering if we can get through to the request for consensus. CDA, how -- sorry, are you willing to be quick?

CDA: I might have jumped the gun anyway because it sounds like it’s going to split the talk about the rest of the proposal versus this issue on naming. So that’s fine.

RPR: Sorry, you’re -- if you want to go into it, you can, but i’m just saying that we really need to finish in the next minute or two.

CDA: Yeah, no, that’s fine.

RPR: So are you happy that it does not affect the request for consensus now?

PFC: Is that a question for me or CDA?

RPR: That was a question for CDA. I was trying to find out if it affects consensus, but I guess we shall find out.

CDA: I would deflect that one over to PFC.

RPR: Okay. All right, let’s try.

PFC: All right, queue's empty, so i’d like to request consensus on the PRs in the slides that I just presented with the exception of the one that fYT mentioned, 2479, I believe.

CDA: But this does include the `calendarId`/`timeZoneId`
instead of `timeZoneCode` and `calendarCode`?

PFC: As far as I’m concerned, yes. If you have an objection about that one, then I’d like to split the naming concern out of the request for consensus on the rest of the change, since the actual change is much more than that.

RPR: Okay, to be clear to everyone, this request for consensus is the PRs including the proposed name for the `calendarId`. MM says no objection to consensus is based on objections. And no need to speak. DE Happy about the optimization. No need to speak. CDA is positive - IBM supports, and SYG was on the queue, but is no longer. Yeah. SYG is back. Plus support, and including the naming. And the other stuff. JHD says I do not agree with the ID naming, but everything else sounds good. Okay, JHD, just clarifying here, you are blocking that part?

JHD: Yes, I am. All the changes that don’t involve that naming sound great to me. I appreciate the explanations, and that one I think needs further discussion.

RPR: Okay. I guess you haven’t gone on the queue so far, so you could you just briefly what he recollects the one-sentence reason for disagreeing with that name?

JHD: I find the capitalization of ID with a capital I and lower case D to be confusing. That echoes sentiments that have been given by folks in IRC and Slack over many, many years. And I think the W3 design guidelines here are wrong, and I would prefer a name that doesn’t require that bikeshed. `identifier` and `code`, for example, either of those seem fine.

RPR: Okay. We are out of time, so that part at the moment does not go ahead. SYG does not want to spend time on the ID thing. And DE is requesting an overflow topic for bikeshedding on the name.

SYG: I don’t think it needs bikeshedding. I think we need to do with ID capital I, lower case D. The arguments I’m hearing has been going on for a long time on GitHub, and matrix for the past 30 minutes or so, is that basically jHD doesn’t like it. There’s some citations of people have explained on Slack and so forth. But the other side have actual arguments. It’s true we’re not bound by W3 guidelines and we’re not bound by jHD's opinions and I do not hear an argument from JHD and I do think it’s a good use of committee time for everyone to bikeshed. What I feel like is I’m hearing jHD does not like capital I, lower case D. I don’t think it’s a good use of time.

JHD: I don’t think it’s a good use of time in plenary either, but I think that the discussion needs to be had.

SYG: It really does not.

JHD: I’m not willing to provide consensus.

DE: We’ve been having the discussion, what do you think are next steps?

JHD: I would hope we can continue to have the discussion offline and come up with a --

SYG: But we have been having those discussion offline. There’s no new information. This is not like we haven’t talked about this.

JHD: Sure, decisions that we make in the language are reasonably permanent, to I think it’s reasonable to take time to discuss it.

SYG: Does anyone think it’s reasonable to take more time to talk about this? Does anyone --

PDL: The only objection I have is we have taken the time to discuss it and try to suss out arguments one way or the other. That’s what issue 1808 was largely about. And so I wonder whether -- so unless I hear some sort of statement of what does it specifically take -- need to take more time, then I wonder whether we haven’t already taken that time. So I have no problem taking as much time as we need. But I would like to hear what that means, but in my view, 1808 has been open for quite a while. It’s attracted a lot of discussion. Back and forth. We have tried to have a reasonable argument, and so I don’t know what would be gained from taking more time.

JHD: The gain would be to look for consensus since that’s the process that we follow in order to make changes.

SYG: But, JHD, you’re the one holding up consensus and your criteria, as far as I can understand what consensus means is to not use ID.

JHD: We have often had lone objectors who have criteria that the rest of the committee do not believe in or agree with, and that has held up in the past. I don’t see why this is any different.

PDL: And that’s totally fine. If you tell me the criteria, that’s fine. What the problem is that I -- at least I -- maybe that’s just me being thick, okay? But I just fail to understand what the criteria even is.

DE: Given we are 17 minutes over the end of the meeting --

JHD: I’d be happy to discuss this in another call later.

DE: Okay, I was going to say an overflow topic. There have been several non-plenary discussions about this. And at least about this issue. I don’t think we have to agree on whether this is blocked or not, but we have to resolve this beta issue somehow.

RPR: So, yeah, we do have time in this meeting, and it feels like this is important to resolve. I would like to do that while other chairs are present as well. And we’re missing that at the moment. So let’s do an overflow for this meeting. SYG, I appreciate your desire to keep this short. So I’ll make sure it’s short.

RPR: All right. We are at the end of the meeting. I apologize that we have overrun by 18 minutes. We shall do better time keeping tomorrow. Based on this we have +1 on these changes and we’re deferring the naming and will resolve that later in this week, and FYT’s number that PFC will be able to quote is excluded from this consensus.

PFC: That’s 2479.

RPR: 2479. Okay, thank you.

PFC: All right, thanks, everyone.

### Conclusion/Resolution

- Temporal is advancing towards a goal of being able to say that it no longer “requires implementer coordination”, with a goal from the champion group of March 2023.
- Consensus reached on the following changes:
- https://github.com/tc39/proposal-temporal/pull/2442
- https://github.com/tc39/proposal-temporal/pull/2456
- https://github.com/tc39/proposal-temporal/pull/2460
- https://github.com/tc39/proposal-temporal/pull/2467
- https://github.com/tc39/proposal-temporal/pull/2472
- https://github.com/tc39/proposal-temporal/pull/2474
- https://github.com/tc39/proposal-temporal/pull/2475
- https://github.com/tc39/proposal-temporal/pull/2477
- https://github.com/tc39/proposal-temporal/pull/2478
- https://github.com/tc39/proposal-temporal/pull/2480
- https://github.com/tc39/proposal-temporal/pull/2484
- https://github.com/tc39/proposal-temporal/pull/2485
- Consensus on https://github.com/tc39/proposal-temporal/pull/2482 except for the names of the `timeZoneId` and `calendarId` properties, which is to be discussed in an overflow item later this meeting. [Note: Consensus on the Id spelling was reached the next day.]
- TC39-TG2 will continue to investigate https://github.com/tc39/proposal-temporal/pull/2479; no concrete objections but not enough time to decide.
