# 17 November, 2020 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Yulia Startsev       | YSV            | Mozilla            |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Michael Ficarra      | MF             | F5 Networks        |
| Jordan Harband       | JHD            | Invited Expert     |
| Michael Saboff       | MLS            | Apple              |
| Devin Rousso         | DRO            | Apple              |
| Shaheer Shabbir      | SSR            | Apple              |
| Chengzhong Wu        | CZW            | Alibaba            |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Istvan Sebestyen     | IS             | Ecma International |
| Chip Morningstar     | CM             | Agoric             |
| Caio Lima            | CLA            | Igalia             |
| Sergey Rubanov       | SRE            | Invited Expert     |
| Marja Hölttä         | MHA            | Google             |
| Zhe Jie Li           | LZJ            | 360                |
| Jack Works           | JWK            | Sujitech           |
| Daniel Rosenwasser   | DRR            | Microsoft          |
| Daniel Ehrenberg     | DE             | Igalia             |
| HE Shi-Jun           | JHX            | 360                |

## Default constructors and spread operations

Presenter: Gus Caplan (GCL)

- [PR](https://github.com/tc39/ecma262/pull/2216)

GCL: This is a needs consensus PR and it replaces the specification's default class constructors with - they are currently written in JavaScript; they are specified here to be the result of parsing source text and it replaces that with built-in spec steps and the reason that this done is to avoid delegating to Array.prototype[Symbol.iterator] in the case of a derived Constructor because that it uses the spread operator which uses array.prototypes of the iterator, which is I mean as you can see here like this code will just throw a type error like you can't even construct the class. It just breaks it completely. So in terms of this PR, as far as I can tell there are two normative changes. The first one is that it will no longer try to access or use Array.prototype[Symbol.iterator], and the second one is that the typeError created by trying to call the class changes from the callee realm of class from the caller realm to the callee realm which matches everything else in the language. Basically, this is kind of unique in that the type error is thrown in caller Realm. So it's not too complex. Aside from that it's only a few steps and there's still some editorial things that need to be taken care of but it's pretty simple. And so yeah, those are the two items worth worrying about. It should technically be possible to specify this so that the typeError still comes from the caller realm if anybody thinks that sort of really important invariant that we have in the language I don't see the reason to match that. I'm happy to hear from people on that though. So I think that's about it. All right, so yeah SYG the implementations all seem to match what the spec text says here, which is to throw in the caller realm. So this would be changing that. If we don't see that as being a worthwhile change to be made then we can do the necessary spec text to avoid that change.

SYG: And to be clear the spread operator delegating to Symbol.iterator for the iterator that is also correctly followed by implementations today.

GCL: I believe so. In my testing it was, yeah.

SYG: Okay. I mean with corners like this, I'm usually a little bit wary that if there's something that we don't like but happens to be widely followed currently. There's always some worry about, is it worth the effort and if there's some compat issue. I guess people don't mess with symbol.iterator. I don't really have too much intuition for that.

GCL: Yeah, I don't know if Bradley is on the call, but he brought this up in the context of certain environmental security constraints or robustness constraints. So within that context I thought it was worth making the change but I can't like speak to the specific invariants that he was working with because

SYG:I think it's fine. Like I don't disagree that it seems better to not delegate this case. I'm just trying to weigh is it worth it for us to change the thing that everybody already does the same way? I'm not really worried about the realm of the typeError itself. That is probably not going to be too much of a worry. That's it for me.

YSV: look at this change. It looks like the change will actually be an improvement for things like iterator helpers and that it will remove some hooks as long as this web compatible. I don't know if It's a huge issue to make this change. And it may be a really good simplification from my perspective.

GCL: It's cool to hear. I'd be interested to know how that affects iterator helpers,. Good to hear.

DE: [unintelligible]

JHD: It's always really frustrating when the use of shiny convenient syntax brings with it a whole new vulnerability to prototypes being modified. Like for example node has (this is node, so it can it could always find other solutions) this pattern internally called "primordials" where it like pulls in a fresh pre-frozen copy of prototype methods, but its use of spread syntax is always vulnerable to user code breaking node itself and it's really painful to try and rewrite things to not use things like spread syntax to avoid this problem. As I said, node has other alternatives because it's an engine, but the same sort of thing happens in user code and like babel output and so on. It's a lot that has to be worked around. So this is a wonderful change.

RPR: Okay. DE has clarified in IRC that this is a very positive simplification. He wants to note that it was discussed that this path in the past. It created extra load for implementation and no one had a particular use for it.so we decided to leave it in engines because then engines thought it might be intuitive. Okay Gus. Would you like to summarize the conclusion?

GCL: Yeah, so it seems we are in agreement on both the normative change which is dropping delegating to symbolize iterator and the change which changes the realm that the type error comes from. Does anybody object?

RPR: Sounds like no objections.

GCL: Thank you very much everyone.

### Conclusion/Resolution

- Consensus for both normative changes.

## .item() rename + revisit inclusion on String

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-item-method)
- [slides](https://docs.google.com/presentation/d/1UQGlq8t1zfAFa6TPvPpO9j6Pyk4EOv62MFQoC2NshKk/edit?usp=sharing)

SYG: So first the easy part, we got to rename item. We found out that item is not web compatible. Since last time Firefox ship these unflagged in nightly and promptly found some incompatibilities. First was this paid library called Magic 360, which is apparently a paid library for displaying things for like e-commerce in 360 degrees. We actually reached out to them because they were the first and only ones at the time that were broken. Hey, please stop using item in this incompatible-in-the-future way and they fixed it and I think told their customers to update. After that, however, we found both yui 2 and yui 3 on Flickr were broken and all of these high-profile broke breakages were broken in the same way, which is they all duck type Dom collections by the presence of a data item property, so so all of these libraries do some stuff with dom collections. In the case of yui I think they wrapped it in their own wrapper libraries and they basically check is this thing is the type of this thing an object and does it have a .item property if it does doesn't matter what that item property is not even like a known property is just I think it's just does it have dot item that is not undefined if it has those things assume that it is a dom collection and wrap it as if it were a dom collection. I guess this is you know, it's hard to really blame them; for like the past decade the presence of .item is this pretty robust indicator that something is a dom collection and it's easier for them to do that than to instance of everything or check constructor.name or something. And yeah, we just we can't use item like the reason we wanted it for item is because does this reason and I guess they also took this reason to duck to duck type stuff. Thanks a lot to Firefox for surfacing these concerns and filing the issues.So I propose that we renamed it to `.at()`. To recap here the original motivations for this proposal were twofold. One, it'd be nice if we had relative indexing. It's a thing that people want as an ergonomic feature. Let's add it at the same time. We wanted it to name `.item` to kill two birds with one stone and try to independently advance this thing we want on the web platform of using things that are just like JS arrays instead of these one off [?]. That second motivation is off the table now because of the incompatibility. So we'll just do something else there. So now the only motivation for this proposal is to provide relative indexing. So we can rename it whatever we want. "at" seems like the best name so far. I think I'll take maybe five minutes to bikeshed this name before moving on to the next topic, which is revisiting strings.

MM: yeah, so when we were getting the uniformity with the DOM this was enough motivation to make it seem worth it without it. I really question whether it's worth doing this at all. What's the payoff that makes it worth adding a new method?

SYG: I think the payoff is still just ergonomics is better [transcription error]. There's evidence that people are reaching for relative indexing via slice because slice lets you express your expressed relative indexing by a negative index and then they're reaching for that by doing the tasks like creating the intermediate array and then getting the first element out. It seems like there's some evidence that people want that. So let's support that directly instead of making them reach for slice, but beyond that I don't have any strong motivation.

MM: Do you have a strong desire to see this happen still?

SYG: on a scale of zero to five maybe a solid 3.

RPR: Okay, so 60% motivation I think JHX has a similar point.

JHX: I have similar thoughts. I think if we do not have the motivation of unifying DOM `item` then things will be very different, and I suggest that we should roll back to stage 2 of this proposal. If the only motivation now is indexing, we may have some other choice, for example introducing new syntax. So I suggest we roll back the stage.

SYG: Okay, I I think syntax is definitely not motivated enough. To do new syntax just for the sake of relative indexing. I would prefer that if there is a general lack of Interest or general anti-interest against doing this that we abandon this at all instead of pursuing a syntax for relatively mixing. There is also Sathya's proposal for slice notation. I suppose that could be like this could general relative indexing use case could be maybe folded into that. Somehow. I'm not sure that's possible though because that seems like it's wholly about delegating to slice. But there's some other topics on the Queue, so I want to drain that you can we open up the temperature taking thing since some delegates have said they don't want this at all. I want to see how people feel if they still want this like just whether we should solve the relative indexing by a new method at all and while that's going on.

JHD: Yes, it's great. I think this is still very independently useful. While I think the goal of compatibility with ObservableArray was fine, it was a nice to have, I always found that to be an annoying restriction that forced the name to be item. So I think that at is a better name anyway.

LEO: Yeah. I also just want to add strong support based on just what I see on my own perceived frequency of usage just as Shu has mentioned, like usage of slice usage of length minus 1 to get the last item. All of them would be compelling enough because I think we're going to get through like some ugly piece of the language just by like accessing the last side and doing the length minus 1 all the time. I think for the ergonomics they're convincing enough for me. Names apart; this is another issue to be solved. And that's it. Thank you. Okay.

MS: My only concern is that we could be just chasing what the API is going to be called, you know, do we know if .at is web compat? If not, what's the next one that we'd try and so on and so forth. Array being so popular probably a lot of code adds to the prototype. I think we may be chasing our tail on this.

SYG: Yeah, it's a worry. I think the main risk is just that it seems too short. So it seems likely that it's such a common word that some libraries might be adding it. I mean DOM collections don't have .at so at least that we're close to the same proposed off to the same kind of thing compat.I don't know what the actual thing here is like. I think a quick survey of the usual suspects like mootools and lodash and whatever don't have at, if I remember correctly, but outside of quick surveys of libraries that we previously had issues with, do you have any suggestions for how we can avoid chasing our tail? Like are you suggesting we deliberately choose a rare name that we think won't have conflicts in the wild?

MS: The only suggestion I have is to come up with it, maybe a set of names and maybe do some investigation on it if any of those set of names and prioritize that set names if any of those have web compat issues.

SYG: Yeah, we could do that. I could open the floor to that as well. But yeah, let's drain the queue for more names.

Kris: As they say I even like the color. I think that rhymes with charCodeAt which has precedent in the language and I think the relative indexing sufficiently motivates proceeding with it and also there is some possibility of still satisfying the goal of normalizing with DOM if they were to add it.

SYG: So yeah, let me give a little more little bit more color on what the current plan is for ObservableArray and the DOM stuff. So to recap the project was - so we have these existing DOM node collections that have `.item()`. We would like to upgrade as many of them as we can to observable arrays which are proxies around arrays which present as api compatible. Not just compatible, but when used they would show up as JS arrays—like `instanceof Array` and the %Array.prototype% methods. They're basically just arrays except with some proxy behavior under the hood that the spec authors can use because `.item()` cannot be added to regular JS arrays. The plan currently is to probably add a new IDL class like LegacyObservableArray that has - since these are these are proxies that Legacy observable array would magically materialize dot item somehow as like an own method or something and I think that's the current plan where the old stuff we want to upgrade will have to get this legacy observable array and the new stuff hopefully would just use observable array. So whatever we do here or whatever we do any time in the future to arrays. Hopefully that will carry forward to new DOM APIs. And I guess old DOM apis if the old could be because the Legacy observable arrays will presumably also have all the array stuff but with some magical additions to make compat work. So yeah, I think we are still going to try to normalize the DOM but you know in the best way we can get away with.

DRR: I think the only thing I have is just if you're not locked into the original semantics anymore. This is something to consider. I'm not necessarily saying it was the right thing but given that in some other languages it also does have throwing semantics on vectors or arrays. This could be an opportunity to give this method those semantics so if you're out of out of bounds you throw. On the other hand, that's not necessarily how things like Maps work on gets. I think the only thing there is typically you know with arrays I typically try to think in terms of staying within the bounds. You always know what they're not you have an element in some position, but I guess it's not always true with sparse arrays.

SYG: First blush it just seems to me the throwing thing is not something any other collection in our small standard library really does. I would like to understand the justification and the motivation better than just maybe it'd be nice. Like it seems more surprising to learn that it would throw than not throw.

DRR: I have to think more about how to formalize my thoughts on this one. But we can move on.

WH: My position of this depends on the details. I’d like to be sure we're all on the same page here. Is the thing that you're proposing exactly the same as the previous meeting except that you changed the name to `at`?

SYG: Correct. There are two questions that are open right now. One is, what is the new name? The spec text stays completely the same as before which is to compute the relative index and just delegate to a get. And the second thing that's open for discussion here is I pushed for a conclusion on inclusion on string dot prototype and this I got feedback that we didn't have enough discussion time. And that was the thing that prompted this great new temperature checking tool from YSV. So I would like to reopen the discussion on inclusion on string as well. So the second thing is whether or not we have it on String.prototype.

WH: We're taking a temperature check here, but I'm not sure what exactly we're taking the temperature check of.

SYG: This temperature check is: should we have relative indexing as a standalone feature via a prototype method on indexables at all. This was raised a few minutes ago by folks like JHX who seem to say that it no longer seems worth it without the DOM unification motivation to have just a relative indexing feature.

WW: My position very much depends on whether strings are included or not. So if we're taking a temperature check we should do it on something specific.

AKI: You know this isn't binding, right?

WH: Yeah. I know it's just getting a feel for the room. But I have a feeling that we’re likely to be talking past each other soon with the direction this discussion is going.

SYG: Fine, so I think Jack has a different question than well. I'll try to wrap up this section then we'll get to string.

Jack: Should we add `at` to DOM collections?

SYG: No, we were never going to add anything to dumb collections. That is beyond our purview at TC39. The whole point of our adding .item() previously was that DOM wanted to stop using their own data structures. They wanted to use just arrays. So I'll try to wrap up here. This room temperature thing seems to be 9 for & 4 unconvinced so we are split in the middle. Maybe I guess we can just continue on to the string question and then I'll try to wrap it up at the end once WH points out we have all the details laid out. All right, so to MLS’s suggestion - if we are to continue with this, it'd be good to have a couple names to try when one of them doesn't work. I think the two obvious top ones are `.at()` and `.itemAt()`. I guess we can go with that. I don't think I have anything better, I don't want to add something like `.get()` to indexables. I think that is too confusing. So let's roll with those two for now and then we'll spend the rest of the time box talking about string inclusion. I'll take a room temperature on inclusion for Strings, or, well let's talk about it first and then we'll get to take a temperature check on that.

SYG: So there is no new information presented here. This is exactly the same set of reasons to have it and to not have it as last time. The only reason I am bringing this up again is that people want more time? And that seems pretty legit to hash it out some more with more time. So yeah, the reasons we remain exactly the same… if you think UTF-16 code unit indexing is bad and you should not do that thing, then you would think that you don't want to have a String.prototype.at. If you think on the other hand that UTF-16 code unit indexing is already a thing that is possible via bracket and slice in such a way that it is pretty ingrained into the language and preventing the addition of `.at()` is not really moving the needle on recommending people to not do to the bad thing of code unit indexing, then you would want to have `.at()` for consistency with all the other indexables and consistency with just how brackets work. You kind of want `.at()` to be available everywhere. You can index things by practice. And my weak preference as champion remains that we should just have it because all the other indexables have it and I see no super compelling reason not to. I don't think this would actually discourage the bad use case that people are really worried about.

JHD: I don't actually agree with one of the things on your slide show. I don't think we have to worry too much about someone making a package that does the bad thing. I think they'll do that anyway if they want to; and they probably won't regardless, but that said, I think it looks like there's more risks than having it that aren't on this slide. As you mentioned, people will reach for `.slice(-1)[0]`, or people will have to manually compute the index that they want. I think that's a risk. That's gross code that's easy to screw up that people do all over the place. Gross is of course subjective, but I hope that that's not a contentious subjective opinion. So I think it's really important to have it. Code points aren't enough to solve what people actually want; which is some form of grapheme clusters. I think that there's a very large amount of strings that aren't human sentences where surrogate pairs matter. There's all sorts of things like code enums, and plenty of ASCII strings in which code unit indexing is exactly what's desired, which is why the “slice” and “length minus 1” patterns are common. So I hope that we can continue including this, just as I said during the original stage 3 promotion.

SYG: Okay. Thank you.

WH: My position on this is that the ship has sailed — we index strings via code units. Code points really don't offer much of an advantage. If you think that the advantage of code points is that you don't get to break up surrogate-like characters into multiple pieces, then you're in for a surprise because lately Unicode has grown to include “characters” which actually take several code points to represent. A good example is flags. There is a Unicode flag for each country. The flag is encoded by two or more Unicode characters, but they really form the equivalent of a “surrogate pair” to define what is essentially one virtual character. Splitting them does really bad things. Not indexing into strings at all I don't see as an alternative either since there are plenty of situations where you need to work with locations within strings.

KG: Yeah, I guess just I'm still mildly against having this for strings. I entirely agree with WH that code points are not significantly better than code units here. It's just that the alternative is that you don't provide this new convenience method at all in the hopes that people who would reach for it will instead learn why it doesn't do the thing that they actually want and find some way of doing whatever it was that they actually wanted. But again, that's weak opposition.

SYG: Okay, I see the queue is empty. I'm trying to think of how to craft a question for the room because now there are kind of three questions... one is assuming that we still want to have a prototype method for doing relative indexing at all. We have a question also on String.prototype... should we add a method there? Should we do this proposal at all? I guess. First I would like to open the temperature check regarding inclusion on string and then I'll take the conclusion of that and ask the “should we do this at all?” question. So a different temperature check for strings. Just to clarify: should we include it on string given that this proposal happens. [pause] Okay. We don't have a formal definition of quorum. Well, this is okay, so we have gone over to the other side now with nine total. I see five that are indifferent.

AKI: It's the people who do care about it broadly speaking don't care about this detail. I think that's probably a good read on it.

SYG: So I think the temperature is - please correct me if I'm misinterpreting this - that there is majority support for this feature though.

MM: The feature being conditional on it being included at all should also be included on strings, but I'm still against the feature being included.

MLS: I voted the same way as Mark did it except for I'm indifferent for the whole proposal.

SYG: Okay. That sounds fine. So, okay. So on the conditional question of if we have it on array and we have it on typed arrays should we also have it on string? I take the temperature of the room to be Yes, so given that let's I guess reset this and now the question is, should we continue with this proposal at stage 3? where "this proposal" means exactly pending finding a compatible name currently, which is .at and .itemAt in that order the proposal is to have string.prototype.at, array.prototype.at, and typedarray.prototype.at, for all the types of arrays. Can I get the board reset for that? for how people feel on that this exact proposal of having it on all indexable prototypes?

YSV: It's possible more than one emoji at the moment, but you can't vote for the same Emoji twice.

AKI: And before somebody makes a snarky joke about how this is taking a bunch of time. It's new, we're getting used to it.

SYG: So okay. I see the numbers have stopped moving. So I'm going to take this as there is enough interest to continue with this current proposal in stage 3 with inclusion of this method on all the indexable prototypes when we find a new name. Thank you very much for this feature, it's pretty good with that. I think it's weird to ask for consensus because we already have stage 3. I guess I would like to ask for the other thing. Does anyone feel strongly enough to not reaffirm stage 3 for this for this proposal. Yes

RPR: So you're asking if anyone wants to abandon stage 3 based on what we've learned, right?

SYG: Because we are significantly changing the motivation due to information we have learned.

RPR: Yeah, so I think the question is are you asking should we withdraw the proposal or are you asking me should we perhaps degrade to stage two?

SYG: I have no interest in going back to Stage 2 because I don't see the design space here being very open. Like I'm not sure what degrading is. I know there was a suggestion to explore syntax. That would be someone else's proposal. That would not be for me to champion. I have no interest in exploring syntax here.

AKI: There was some conversation that naming is something we should be ideally working out in stage 2. (my bringing this up is to make sure all the information is available, and neither endorsement nor criticism of the idea)

SYG: that is not how stage 2 works.I don't think we can figure out a name by not shipping it in this case. Like this is not a thing like - unlike syntax this is not a thing we can grep over some large corpus and try to satisfy ourselves regarding compatibility. I don't know a way to figure out compatibility here other than through ship and see, and the ship and see stage is 3 not 2.

JWK: is it decided what the semantics for strings would be?

SYG: it is decided to be code unit indexing just like brackets currently works on string. So it's exactly the same as brackets except they can deal with negatives.

MLS: So let me weigh in. I raised the web compat issue. I don't think you need to go back to stage two to find something that works. I just hope we're not going to chase our tail and get smooshed.

SYG: Yeah fair enough.so by the silence, I am assuming then I'll wait a little bit more -

JHX I still think maybe we can introduce syntax. I'd like to make a syntax proposal in the next meeting. If not, if so, maybe we can postpone the decision to the next meeting.

SYG: No, I would strongly prefer to not postpone the decision to the next meeting based on possible future interactions. I have strongly opposed syntax for this space. So unless - if your syntax proposal is for a broader problem space than relative indexing.

JHX: I hope to propose syntax for both this and slice notation. This has been suggested in the slice notation proposal.

SYG: I am generally unhappy with how much time we're spending on this thing, which I think is not a very important feature to the language. I would like a solid conclusion here. So maybe five more minutes.

LBR: Yeah, just for the records. It's hard for me to understand how exploring a syntax approach is more interesting to be done before exploration on a builtin API. I think that the approach here, on the built-in API, I the concerns that I see are with the name. I think we have much past the compelling reasons for what already advanced this proposal to stage 3. I think we've only identified ... [disconnected]

LBR: This proposal went through stage 3. So I think people are still trying to discuss here like the compelling reasons for if we should have these are not and we're trying to like discuss things that should be in the past. We have an issue here with the name and how this name applies. I don't find any convincement to actually explore syntax. I don't find myself being convinced by that anytime soon. Yeah, and I agree with what MLS has on the queue.

AKI: Didn’t I hear correctly that part of the motivation of this in the first place is no longer applicable since you can't use `.item()`?

SYG: The DOM part of the motivation is no longer applicable. But that is that motivation. I think it’s completely orthogonal to one's desire for syntax over a method for the use case.

AKI: Thank you

MS: LBR made my point. This is a different proposal to talk about syntax at this point since it's at stage 3.

SYG: Allright, so thank you to all the participants. Queue is empty. Yeah, do I have consensus? Do I still have consensus for stage 3, pending a rename? stage 3 again is needed here because we need stage 3 for the ship and see. The nature of seeing which name can stick. Of having the relative index method on strings and arrays and on typed arrays.

MM: To be explicit. I am not withdrawing my consensus even though I no longer like the feature.

SYG: Thank you for the clarification.

YSV: I want to clarify that I believe in supporting the stage. Well, I support stage 3 our discussion is around the web compatibility naming of this feature and if we pulled it back into stage two, we would effectively just be spending extra time for no potential benefit because we need to test this to see if it's web compatible. We're going to run into that wall regardless of how much workshopping we do on the name and I think to be realistic about that.

SYG: completely agree. Thank you. And I really want to thank Mozilla here; their shipping policy is what's really helping these surfacing these early name conflicts, and I'm trying to see if Chrome can help out better here.

### Conclusion/Resolution

- Consensus on Stage 3 for arrays and typed arrays and strings, pending a rename

## Standardized Debug for Stage 2

Presenter: Gus Caplan (GCL)

- [proposal](https://github.com/tc39/proposal-standardized-debug/)
- slides [TODO: GCL]

GCL: This is standardized debug for stage 2 and just to recap what we discussed at the last meeting around. This is just it's really simple the motivations here are to have one standard debugging facility everywhere. That's not like, you know print versus console DOT log versus there was another one that I can't remember off the top of my head right now, but basically it's going to be just one thing available everywhere and it fulfills a specific API constraint, which is that the values passed into these this API are then returned out of it so it can be composed into existing code. And so the solution I am bringing here to request for stage two is debugger meta properties, which are syntax. And the reason that I have brought syntax here, although it was voiced in the last meeting that syntax was not preferable, was because I wanted to fulfill both the logging and breaking use cases, which you mentioned that there it makes sense to differentiate between those and if these are functions that they can be passed to languages that are not JavaScript, for example, C++ or webassembly whatever is you know, being used in the environment and that is just specifically for the break. That's just not something that I want to deal with and when these are syntax that ties them to a specific source location. It kind of makes it clear that you know, this is this is tied to the like the the expression you're passing into it is it's not just a value but as a piece of code that you're interacting with, so that's basically the approach that I've taken here and if that's totally unpalatable to people I'm happy to come back next time with something that does not introduce new syntax, but I would really like to try for this pathway.

JWK: It's useful for printing multiple items in debugger.log, and if you're only accepting one argument for the debugger break, you should still use the full arguments list. because if it's easier for future extension. It won't make a syntax error in the earlier version just like what we do for the dynamic imports only accept exactly one argument currently and the import assertions proposal is going to add the second one. It's not compatible for the old engine because is a syntax error

GCL: Yes, so this can obviously be changed in the future. But the reason that I specifically did not use argument list syntax is because these functions have a normatively specified return value not functions. The syntax has a normal to be specified returned value, which is the argument you pass to it, and I thought allowing to pass more arguments would be confusing but that's you know, we can discuss that more along the pathway

JWK: about that I have an issue in the repo.

DRO: yeah, do you mind showing the slides again with the syntax? it might be easier for me. So based off of this that sort of means that `debugger.log` is like a regular function, which means that `debugger` now has to be an object. So how does this work with the existing behavior where `debugger` as a statement pauses a program? Like, how do you still preserve that if you have this fact that `debugger` now becomes an object instead of being statement.

GCL: This is not an object. It's a it's like import meta or new DOT Target.

DRO: So then a developer would not be able to say `let foo = debugger.log` and be able to pass that around?

GCL: No, I as I mentioned this earlier, I explicitly do not wish for these apis to be able to be composed because it would allow them to be passed to other languages besides JavaScript and the semantics of what happens when these are called from languages that are not JavaScript is unclear to me and I don't wish to allow that.

DRO: And so just to make sure then effectively the `debugger` statement would be the same behavior as `debugger.break` with the difference being that `debugger.break` returns whatever you pass into it.

GCL: Yeah, and I think the expectation there would also be that the value you pass in is presented to you in some nice way by whatever debugging facility you are using

DRO: sure. Yeah in that case then I would probably agree with what someone mentioned earlier that you might want to accept either an object or a list of items so that you could show multiple things. But yeah it sounds fine. It's a little odd that we're kind of repeating the same existing behavior from `console` and `debugger`, but I can understand the desire for having something that returns and having sort of one unified thing. To bike shed a little bit, I think `pause` would be better than `break`. But you know, I could be overruled on that.

JWK: I have a question on this slide. What do you mean by “can only be invoked from JS”? Are there any other languages?

GCL: so as a simple example here if I did promise dot resolve .then debugger dot break. Right assuming that was valid that it is. It's unclear what that should do. You should instead have to write this `(x => debugger.break(x))` to be clear that you want to break here. Does that help clarify?

JWK: I think if we do this it gets less useful because I thought when maybe we can allow for example array.map(debugger.log) to see what's everything in the map without writing array.map(x => debugger.log(x)).

GCL: yeah, I mean you would just have to write an aarrow function which I think is preferable to forcing hosts to have to figure out how to deal with these being invoked from odd places. But I mean this is stuff we can definitely discuss more I guess.

WH: The specs for `debugger.log` and `debugger.break` are word-for-word identical other than having the expression be optional in one of them. That makes me a little queasy. There should be something different about those functions in the spec. I'd like to see some intent in the spec.

GCL: Well, I'm not entirely sure what you mean by intent.

WH: Okay, to illustrate “intent” with an example: Suppose I'm adding two functions called `tree` and `calistoga` to the language that will do an implementation-specified thing. That alone is not sufficient to tell me much about what these are meant to do. That’s what I mean by expressing some intent of what these things are supposed to do.

GCL: We can't say like log something or positive evaluation because

WH: I know you can't mandate something but you can specify the intent; we've done this in other places of the spec.

GCL: Okay, could you maybe open an issue with some - at least open an issue and if you feel like it you could also include like examples of this intent. And then we can discuss it more. Because I agree that it's not ideal to have these just kind of floating here without any like direction. Yeah.

KG: WH, to be clear, you're just asking for some prose that sounds like an implementation is expected to do such and such?

WH: Yeah, some prose which specifies the intent of those things because all we have is the names and the names don't tell me much.

SYG: Hi, so a couple questions so one. What is the difference between an unadorned debugger statement and debugger.break without any arguments?

GCL: if that's too overlapping I can remove the optionalness.

SYG: a bunch of stuff seems overlapping and I want to - I'm not necessarily against it, but I want to make sure I understand the motivation because I think the design has significantly changed since you presented it last time. Let me make sure I understand. So for both debugger.log and debugger.break, the evaluation of its argument expression is now unconditional, right? Like that always happens regardless of whatever implementation to debugging action is taken?

GCL: Yes, so no matter what these should take a value and return that value and between those two things happening something else may happen.

SYG: okay, so at least it's up to the implementation to - like right now the way I would see this to be mostly due to implemented with not have anything that's like conditional on devtools being open. One of the concerns for the previous iteration was that, I think the general feeling from the from the Chrome devtools team was it would bad to have code that conditionally runs depending on it whether the tab was opened, and this is no longer the case for this current iteration because it says you always have to evaluate your assignment Expressions.

GCL: My big motivation is it taking the expression evaluating it and returning it. So I would if this did something else I would not be motivated to continue championing it.

SYG: Given that, when would I use debugger.log versus console.log?

GCL: I mean wherever console.log isn't available or even where it is available if you just feel like being platform independent.

SYG: It feels a little bit weird to me to have to achieve platform independence by a debugger meta properties in a way that explicitly do not compose. Yeah, I see that long.

[audio glitch]

GCL: I was just acknowledging the non composability being awkward to some degree.

SYG: Let's go to other folks on the Queue. I'm it's like that the general shape of the roposal. also has me feeling somewhat uneasy.

MM: I want to jump in with a clarifying question. Shu asked what's the difference between just debugger versus `debugger.break()`, and the first one is just `debugger` is a statement and `debugger.break()` is an expression that evaluates to `undefined` so that syntactically seems like a clear difference.

GCL: Right.

YSV: So we reviewed this proposal and this is essentially echoing what what SYG said and what a couple of people have said in the chat, but I also want to highlight this in relation to the explainer, which is a non normative document that helps people wrap their mind around what a proposal is supposed to do. So in these meetings, we do have these discussions about what the intent of this is and I think the motivation here has sort of been taken for granted and it hasn't been adequately expressed not only to the committee, but also anybody watching the committee's process and I have some concerns about that and transparency to the outside world about how these proposals move forward. I think that it would be a little bit rushed to move the proposal forward given that we don't have any documentation about the motivation here that is available to the committee and to the outside world and I think I think that that should be in place before we talk about stage 2

GCL: You mean there's information lacking in the repository.

YSV: Yes, okay. Definitely.

GCL: That's fair.

MLS: There is a lack of clarity of whether these are statements or are they expressions and we're talking about them as functions and if the committee's having difficulty making the distinction. I think the developers will also have difficulty making the distinction as to where these can be placed.

GCL: I would just say that I think the same concern could haveI to import calls. I think a lot of people refer to that as the import function and I don't think i it really causes any significant. confusion but others may have different

WH: I'm confused. MLS, you just said these are statements. These are not statements. `debugger` is a statement. `debugger.log(…)` and `debugger.break(…)` are expressions.

MLS: it seems like we have statements. Isn't `debugger` itself a statement? Just about log and break are expressions and we're talking about them as functions.

WH: You said they are statements. They are expressions.

MLS: statements debugger doesn't the debugger dot .whatever is is not a function its expression, but we're calling them functions. So I'm just saying that we're there's confusing here the committee I expect that confusion will continue, you know, and I accept, you know, because the same but yeah.

KG: Yeah, someone mentioned something similar to this, but - I see motivation for debugger.break. That's genuinely a new capability. I don't see a lot of motivation for debugger.log. I appreciate the desire to have something cross-platform here, but like platforms that provide some sort of logging thing generally just call it console.log, and I don't think adding a different way of doing console.log would serve anyone. I would prefer that people who like feel the need to provide that kind of I/O. Just also cal it constant logs. debugger.break.I see a much stronger motivation.

GCL: That's fair. I might see motivation for debugger.log is specifically the value in value out like capability that it has which console.log doesn't.

KG: Just use console.tap.

GCL: I don't think that's a thing anywhere.

KG: Just make it be a thing.

GCL: Yeah, I mean I see what you're saying. But if I'm going to make a standardization effort, I'd rather do it in the language instead of in the browser spect.

KG: Right, I guess my point is I don't think it needs a standardization effort.

MM: Yeah, so the comment was made about the import expression not causing significant confusion. It does, and I think that bears on how we evaluate this the scoping of this. import iis per module and the it creates my need for a new host hook in a system where you're trying to enable JavaScript code to act as host to other JavaScript code means that you have to reify the new host hook with debugger. There's already a need for a host hook for the debugger as a breakpoint. So extending that host hook to deal with the debugger dot break is we would just be elaborating a host hook that we need anyway. but console.log is already lexically bound which is a better way to parameterize evaluatialuation than a host hook and the debugger.log would require a new host hook for something that could be parameterised.

GCL: I would just say I want to keep whatever apis were introducing here consistent with each other. So if there are constraints on the, you know, the break API, I'd want to match the log API even if it doesn't need to strictly fulfill those constraints. But yeah, I I see're coming from.Okay, and with that

YSV: we are at the end of the queue Gus. Do you want to ask for anything fromg from the committee chair did

GCL: were you objecting to stage two earlier because of lack of documents?

YSV: Yes. I am objecting to Stage 2 due to a lack of motivation in the explainer.

GCL: Okay, then. Yeah, I don't have anything to ask. Did anyone else have constraints on this for stage 2?

SYG: For the constraints. I would like to agree with folks like Kevin and with Mark Miller have said I notice arguments I think reinforce. A hunch I had which is that I am now unconvinced of the logging use case and it reminds me of I think what the first time this came up at a quick discussion with the Chrome devtools team who also are kind of unconvinced of the logging use case. Log points are a thing in Chrome devtools at least. I don't know about other browser devtools. Perhaps they're also a thing already. Doing this in the language does like an odd layering Choice. I'm not sure if that's really well motivated for logging.

GCL: Okay. Well one thing I could ask are there people who would aside from Mozilla objections are there people who would object to the logging API because if that's objectionable I would want to Not continue with this proposal.

MM:I might object to it. I haven't decided yet whether I would have jumped to it, but I'm certainly not willing to not object to it today.

WH: I would like to understand why we can't do these with just library functions.

JWK: because Library functions cannot break the debugger.

WH: Okay, let me rephrase that. I'd like to understand why we need new syntax for this.

GCL: The break one has to be new syntax because you the only break in the language right now is a statement and this would be an expression position. The log one does not need new syntax, but I would want it to be the same design as whatever the break one is.

WH: I don't see why `break` needs to be new syntax. If you were to define it as a function which has implementation defined behavior, the implementation defined behavior could be that it breaks in the caller.

GCL: Okay. I am not. I was I mentioned this earlier but it becomes like unclear what that's supposed to do when you you know, pass it directly to a prototype dot then thing, like when when you are involving things that are not JavaScript Source text. That gets weird.

WH: Since you’re leaving it as implementation-defined behavior, I don’t see what gets weird here.

YSV: Please take your concerns to the repository for the proposal and we're going to move on with the next agenda item and Gus if you have further questions, we can revive this if you want to have some more time of the committee.

### Conclusion/Resolution

- No stage advancement

## Import assertions status update

Presenter: Dan Clark (DDC), Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-import-assertions)
- [slides](https://docs.google.com/presentation/d/1FN2ZDS25l5CIQzwG5VeqfQ8_rdMlSXs9MAL0XSHbfwo/edit?usp=sharing)

DDC: Okay, so it's just a stage three update for import assertions. Just a recap. I think probably everyone knows now we split off JSON modules from this proposal that's currently a stage 2 proposal that I think is on the agenda for tomorrow. So this is just speaking about the import desertion syntax and just a recap on this is what syntax looks like and just a reminder that with this proposal does not allow hosts to make assertion to allow us to affect the evaluation of the module. Assertions are just like a go/no-go decision about whether the module is allowed to load or not.

DDC: I think I think the update here was just that if I recall correctly that Babel has implemented this and this then is currently looking into implementing it in webpack as well DE, please correct me if she's know if I have the wrong recollection there but

DE: No, that sounds right. I mean there's one webpack plug-in that did a previous version is semantics and it's being updated to the current version.

DDC: Okay. So one issue discussed today previously we had discussed when or two meetings ago this invariant about whether hosts are allowed to use import assertions as part of the cache key. I'm in ier version of this proposal.He had this restriction where hosts must not use import assertions as part of the cache key specifically like for any given specifier requesting module pair we said that must always result in the same module with or without the presence of assertions like changing which module return for that pair. HTML had requested that they actually want and it to use their module map mechanism keyed with the import assertions just in terms of how they wanted to integrate this integrated since this in the HTML spec to that end. We got consensus one or two meetings ago to loosen this restriction to where import assertions would be allowed to use them as part of the cache key. However, it turns out that after some back and forth with HTML editors they're going to use this module map mechanism. They actually would still need the earlier stronger restriction. Like the details briefly here would be that like they are ignoring unknown assertion and unknown types would unknown type assertions would always be rejected and like module types of mutually exclusive. So you'll never for a given specify or will only return you'll only return module for at least one type. Value so like they actually do meet this earlier stronger research certain. And so I think we're interested in actually just restoring the original the original restriction where hosts are not allowed to use not allowed Imports or as imported solution thanThe cache key and this would basically just be a straight revert of my earlier change to to loosen the Restriction. I think maybe I do we want to go to the queue now and just discuss that like

DE: I wanted to make a quick comment about this before I want to say when we talk about cache key. We don't mean whether HTML can have a bath which is keyed by the imported search that that's kind of like an implementation detail of HTML and the current HTML integration spec the are does that but what we mean specifically is whether there can be multiple successful module loads with different import assertions and what we found is that because of how other layers of of caching work, you know fetch fetch caching the there we just not be this this kind of disagreement is multiple modules in practice. So we're still waiting to hear back from HTML editors about whether this is acceptable, but this is our current best best understanding based on everything.

SYG: Sounds great if it works out, so it's let me see if I understand correctly. The thing that we'll be reverting to will be the prose invariant that still avoids talking about the cache key.but the invariant of this one to one that's of something.

DDC: Yes, it would be. Yeah, so this bullet point I've got highlighted on screen right now would be we would remove this module request dot assertions piece from this restriction. So it would go back to being each time. This is under a host result imported module we go back to beinor each reference descriptor. Jewel module or specifier pair that must always be if it succeeds. It must always resolved to the same module instance without regard to assertion. So like the the assertions are different like it doesn't matter. It's still if it still succeeds, you must get the same thing right? So there cannot be multiple different module records for ddifferent assertions because for HTML the assertions aree mutually exclusive.

SYG So, okay, so it seems like a win-win to me.I would love to see that as part of the HTML spec and not as part of this proposal. But I guess in personal communication or something. I would love to see the reasoning that brings it all together with the cash interactions or whatever that ensures that invariant is met on the HTML side.

DDC: Yeah, yeah, that sounds good. Yeah,, so I'm not hearing objection

MM: I just you just want to really just for a clarification of the history here in thinking about the semantics of the feature. It seems clear to me that I never understood why HTML fought it needed it as the cache key. So could you clarify why?We thought that HTML needed it in the cache key.

DDC: This was like they have this mechanism, this module mechanism and it solves some requirements about the integration like their One requirement. They had was the like if you import say a specifier with the given type and that fails it shouldn't like Poison the Well bore future ports of that same specifier. with other types and like the module map that they had is just kind of like natural way to achieve this and that you could write it another way and I had a version of the integration written another way, but just in terms of how they want it to how they want it to look this just seemed like it solves some of the - it's like this mechanism that they have for solving some problems about problems. Well caching about modules and later. We learned that like they're willing to Like something changed with that they're willing to ignore unknown assertions and that's kind of open to open the door for us to retighten this restriction. They are still using this module met mechanism, but just in practice it turned out that some of these propertiesWith the integration is going to look like means that like in practice we can we can restore the Restriction.

MM: So the poisoning issue if it's real sounds quite serious. Can you verify that that in fact without including it in the cache key that there is no poisoning issue -

DDC: yes.

MM: Okay good. That's it.

GCL: If I'm understanding this correctly, it would allow multiple import declarations in the same module file with the same specifier and different assertions to invalidate which seems undesirable. I'm not saying we like shouldn't do this, but it seems like a thing worth thinking about.

DDC: Yep, I think the key property in HTML is that no type values will ever succeed for the given specifier at most one set of import assertions will succeed in actually giving you a loaded module right?

GCL: I mean not not just necessarily the web like any any random implementation.for whatever myriad of assertions they have young if we saw

DDC: I suppose if we restore this restriction, then it would like have that like it would have that property where you can if you have disparate sets of assertions, like you'll get it most one for each specify your still get at most one module back maybe more than one of those like sets of assertions will like succeed but like you're going to get the same you're going to get the the most one module from all of those.

GCL: Right and as my understanding was that because that's scoped on a per module basis. Not many module that that would be acceptable, but that might be my misunderstanding.

DDC: I'm not sure. Yeah, I guess I'm not following the -

DE: I think we specifically do allow. I mean yes modules in general allow you to import the same as the same about full-time and when you have import assertions, you could apply the assertion to one and not the other the whole module will not load the old module graph won't load if one of the important sections fails. So I don't understand that issue. I think we should go on to the rest of the presentation and come back to more comments on this once it's done.

DDC: That's fine. Okay, so I will move on here. The next thing is. so this was an idea raised by one of the HTML spec editor is annevk and the so HTML is as I mentioned earlier for assertion was that they don't care about which currently is everything but type. They're just going to ignore it. They're just going to know them entirely and we expect that like other implementations are likely going to follow in this behavior andThe suggestion is should we kind of build this into this back to ensure that unknown assertions are handled in the same way. Universally the proposed way to do. This would be the hosts actually States at the a state can statically which assertions they care about which assertions they want to get and only those specifying the keys of which assertions that they're interested in and those are the only assertions that they'll actually guess when they that will actually hand back to the host. So kind of enforcing that way that they must ignore unknown assertions, but this is the only one still even see. I have a PR for those that like achieves this one way, or maybe perhaps it could be achieved other ways, but I think we just like to discuss whether that seems like a good idea or not.

DDC: Just on a quick update, at TPAC we discussed CSS modules web components working group. This was one of those proposals that is like the motive one of the motivations for import assertions in the first place. There's that mime type security issue where I'm like loading a CSS module and I and I get a JavaScript module back from a server by surprise because they sent an unexpected mind type. This import assertion is built into CSS modules now to like resolve that problem and there's just general moments from that audience looking for networking group that like this does kind of solve the problem that it was set up to solve nothing more to say on that. Just give a nice validation that we're actually meeting the original goal of the proposal. There's still a couple remaining things open before CSS module would be landed in HTML, but they're related to specific HTML CSS stuff like about at Imports what exactly to do with those and this some questions around the document that aocument that adopted ted style sheets API, but yeah, it's going to evaluate.

DDC: And then just last thing to mention is evaluator attributes. As I mentioned at the beginning import assertions hosts are not allowed to change how modules are interpreted based on the assertions. It's just like a yes or no decision on whether to load the module we've kind of talked on and off about this idea of an evaluator attribute that actually would be allowed to do transformations on the module has kind of been some ideas kicked around about this, but there's not any super solid use case that I think we have at this point. So like we're not today bringing forward any proposal here, but the point of raising this today I think it's just to say that like if folks have use cases that they want to advocate for this, get in touch with us. We'd be interested in discussing this further, but we're not bringing anything forward today about that. Those are the end of the slides perhaps we could go back to this idea of providing host only with the assertions that they're interested in.

MM: Yeah, that's the issue about unknown assertions is very much like the thief like the issue of unknown options in an options bag, which is ignoring them seems to be the only sensible policy, but that itself creates a hazard which is now code might work because the bad assertion is being ignored and then an upgrade to a platform that now understands the assertion well might cause things that were incorrect but working to stop working and as we all know from the pathology of sort of browser competition game theory that that can cause browsers to not under not upgrade to understand new assertions if it causes old broken things to break. So for the corresponding options bag issue we talked about whether there should be a way to feature test at least as to what options are understood. I don't know that there's anything like that that makes sense here because it's static rather than dynamic and I wanted to point out the analogy.

DE: So I have to say I'm not a fan of the framing about browser game theory for [transcription error]

MM: The scenario I have in mind is we as a committee have some future version standardized a new assertion `foo`. Programs are anticipating that version used the assertion foo some programs use it incorrectly, the browser's have not yet implemented `foo` therefore the incorrect usage is ignored the as programs continue to work so to speak and then when the browser's upgrade to follow the the standard the things which were working for the wrong reasons stop working causing browsers to back off. That's that's kind of browser game theory pathology that I have in mind.

DE: So,I think it's always possible that that could happen, like one reason, then this is not very useful to do this compared to other things that we considered. We were previously considering exposing the assertions to the module that's being important, but we decided against that and so this makes it you know, you can import your you can't Implement your own assertions. I think it's always possible that we could retain conflicts and this occurs and in that case, we would choose a dient name for the assertion. So in this case, it's very similar. I don't think feature testing would be a barrier against this because name clashes still occur in the presence of feature testing. And I do expect that. Some sorry,

MM: the issue I was raising wasn't a name clash. But I think I think at this point we can take this offline.

DE: it doesn't mean that in that case, if that's discovered during the standards development process. We can choose a new name, I don't think it's a big barrier. It's not that the whole space of names is filled up.

MM: Since I don't have an alternative to offer, I think that's an adequate answer.

GCL: Yeah, just to add on to the like unknown attributes point. It seems that there may be assertions which are unsafe to ignore. For example, like a script which in its security constraints must assert that the the loaded module matches some like, you know, hash or something and they would it would be preferable to you -- [disconnected]

GCL: So basically what I was saying is there may be attributes where it would be preferable to the author for the graph to be invalid than for the attribute to be ignored and I'm curi if that would be faced with in the world like sort of like future testing if it would be possible to mark that somehow.

DE: Well, I could see that abstractly what we have in the web platform for some resource integrity is HTML attributes and over time they have been interpreted on more and more elements. We not that many more but When they're when the Integrity attribute, it's not interpreted. It's ignored and I think the feature has been effective. Anyway this in this mode so that if you have an older browser doesn't recognize it you don't get the security benefit if you have a newer brows with it does then you do you do get i think this is a transparent upgrade scenario that works well

GCL: Yeah, I don't think it's specific to sub-resource Integrity specifically. It was just an example.

DE: That's an example that shows the exact intention of this upgrade path working felt. So I think we would need a reason why it doesn't work. Well in that case it's not do that.

DDC: One course of action might be to ask for okay, I yeah, I mean there were concerns about this ignoring unknown assertions about in training at inspect. But I wonder if we should either do an Emoji meter on the room or maybe just ask for consensus on this change.

DE:I want to note that this change does give us more guarantees across environments, which is been a concern that the committee is raised and the their role they were also kind of widespread requests for these semantics among the the JavaScript Community which helped influence us to take these semantics in the HTML batch. So I thinkYeah, maybe we could call for consensus.

SYG: To clarify my understanding that the change you're asking for consensus for is one a new host hook for the host to fill in to give you the set of assertions that is supported and also a bit of spec text that filters the parsed assertions to for the intersection and to ignore the rest. Is that what you're asking for?

DDC: Yes. Yeah. I've got it on this.Here are links in the spec. I've got this written out with like textbook. Sounds yeah

DE: I was a little surprised that it came out so procedurally, but when I tried to think about how to write this out declaratively I could go I couldn't think of how to do it in a more clear way. We have to flee open to suggestions because he had is a little there's a little weird to see a procedurally but yeah, same same boat for me.

JHD: More guarantees sounds great to me. I'm on board.

DDC: ask for any consensus on this new host hook, which supports assertions and not returning assertions to the host that aren't included in e provided in this. specifically the contents of this [transcription error] Okay.

RPR: Okay, you have consensus. Okay, thank you. Okay. Thank you everyone.

DE: Can I confirm for the other point that was raised about reverting that patch about the cache key? It sounds also like we have sort of conditional consensus on confirmation from HTML about this being acceptable. Is that accurate? Should we be doing a formal call for consensus?

MM: I would state my opinion stronger that I would I agree to consensus on not having a key part of the cache key at this point if they come back and say no it needs to be part of the cache key after all I would need to be re convinced of that because it just doesn't look

DE: we've discussed this extensively a different TC39 meetings, you know, she worked hard on this compromise that we felt we needed about them being part of the cache key. So I'd like to maintain that existing consensus resolution and just maintain the option of moving this if it's determined that it's technically feasible.

MM: I'm uncomfortable with maintaining my consensus on having it be in the cache key without coming back to an understanding as to why that made any sense. Or why it makes any sense.

DE: Yeah, okay. I think you can have that noted. I also don't think it should be part be part of the cache key. So I don't think we disagree on substance. It's justI agree. I think that this will, in all likelihood, just go forward without it being in the cache key and then there's no conflict. I think we I think the we do we already did establish consensus on this on this compromise, so we didn't we didn't come to committee to ask for that consensus to o be reaffirmed. if it turns out that HTML does have reasons why this change were proposing is not acceptable. Then we will come back and explain them to the committee, butBut my understanding is that we have this established and we've been moving forward on the assumption that that basis is true.

SYG: To clarify with Mark. I just want to make sure on the same page the current compromise is not that we have spec text that requires it to be part of the cache key, but we have some relaxed invariant that lets HTML have the right to put it in a cache key. Is that all your understanding?

MM: I would not want to see that go forward without my understanding what the rationale is. Apparently, you know, we all Let It Go forward and and and but I can no longer remember whether I ever understood what the rationale allegedly was.

DE: Okay, personally. I don't understand the rationale but if we figure out that it is needed then we will come back to the committee and describe the rationale

MM: good.

### Conclusion/Resolution

- Consensus for new host hook
- Conditional consensus on the “cache key” issue

## Grouped Accessors and Auto-Accessors

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-grouped-and-auto-accessors)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfZuc_nmAt65-JnCyA?e=1zqtoR)

RBN: a proposal for a change or not change, but some syntactic addition to the JavaScript or ecmascript language. to add grouped and auto accessor properties. This is a proposal that is intended to address a couple issues I've seen. with both accessors and Fields in in general and a number of other concerns that I've raised around the current decorators proposal and some ways that we can address some of those issues So I'm going to jump kind of right into what that syntax looks like just to give everybody an idea of what I mean by grouped accessors a grouped accessors essentially equivalent to a pair of individual get and set accessories except for the fact that they're grouped within a single declaration. There's a couple reasons that I'm looking to introduce this syntax. one is currently Getters and Setters can be spread across a class. It's generally bad practice, but it is perfectly feasible to have a getter at the top of the class etcetera at the bottom and thousands of lines of code in between. Most people. Don't do that. And that's a good thing. but there are some other issues with Getters Getters and Setters in that way one is that if you use Getters and Setters that use computed property names for example symbols that could theoretically require multiple evaluation steps because you have to evaluate the name of the property multiple times. There's also the possibility of side effects that can happen during computer property name access another reason and motivation for the proposal is currently the stage one decorators proposal works using descriptors, and we for stage 1 consensus describe worked on. how we do evaluation for accessors to get both together. the center to provide to The Decorator the updated proposal that was discussed in the last meeting and is still currently being. worked on by the Champions group. uses decorators on Getters and Setters instead of working with the entire descriptor instead now works on a function basis. So a decorator applied to a getter would only be decorating the get function. This can be problematic because there are some scenarios where a decorator would want to be able to get access to both the getter and the setter. And the current proposals don't provide a very easy way to actually correlate those two things. on a class without a lot of additional. access code. So this does provide a convenient place to attach decorators that would decorate both the getter and the setter at once. this Syntax for Getters and Setters. There's multiple languages that use it the example that I've used as prior art. Here comes from the C sharp language. Some of the semantics that this would have is that it would be a syntax error if grouped accessors share the same name of another member with the same placement on the class. So it's already an error if you have a get X and another get X this would also be an error if you had a get X and a grouped accessor that contains just a Setter. We're trying to avoid confusion and complexity when it comes to how these decorations are how decorators could be applied and the evaluation works. A grouped accessor can specify either a get or set or both in any order. A grouped accessor cannot specify more than one get or set, and otherwise they are defined in the class in the same way that the individual declarations would have would have been now now just on its own this might might not seem. is like provide it adds a lot to provide capability for lot to the language. being a better Target for decorators that need to work with both the getter and the setter, but it actually provides a stepping stone to the next feature that I'm looking to propose as part of this. There was a concern that grouped accessors would conflict with the static block proposal that I also have and the case that I wanted to describe is that we would probably want to emulate how Constructor is defined. so in JavaScript if you say a direct Function or use the string Constructor. Those are both the Constructor of the class. If you want to add a property named Constructor, you could use a computed property name. So this wouldn't prevent that. but again, so one of the value adds that is built on top of grouped accessors is the other feature that I'm intending to propose, which is these concept called auto accessors. So you can see a brief example of the syntactic space that I'm investigating for auto accessors. The basic idea. Is that an auto accessor is a getter and Setter pair over a private field that is unnamed. essentially you don't have access to the name of that field. It doesn't really matter what the name is. its implementation is stored on the instance just as with any other private field. It could be initialized and that works with same field initialization semantics we have for private Fields, but allows you to condense the ceremony around Getters and setters to allow you to have the same capabilities of accessors such that they can be subclassed properly without having to have the excess code of writing the private slot for the private field and the return in the the getter and the setter. So the idea is that these evolved naturally from the idea of group accessors. It provides a syntactic opt-in for converting Fields into accessors. One of the changes in the updated decorators proposal which is an improvement for performance in most VMs is that a decorated field would just become an accessor. This has some problems though. The issues that come out of that are subclassing concerns if I were to have a field defined on a superclass and then the same field on the subclass that would allow me to overwrite whatever these super class would have set for that. But if I then add a decorator to that field it turns it into an accessor pair that the superclass overwrites. So there is a subclassing hazard that can happen when a superclass fields shadows a subclass and as soon as we start saying that a decorator turns a field into an accessor pair then we're possibly running into that hazard. There also a class of decorators that only Witness a property or a field existing. these might be used for cases like dependency injection systems. or a decorator for metadata. but not actually need to observe observe the gutter where Setter of a property or observe the ability to mutate how those actions are performed. So if a decorator always always turns a field into an accessor, then you're adding the overhead of this accessor definition in some cases where decorators don't actually need it. So the idea here, is that auto accessors in addition to being able to simplify very common simple accessor patterns allow you to have a syntactic opt-in for the transformation of a field to a accessor pair rather than a implicit change which allows you to be very explicit about how this works. There is prior art for this, this C# again this again has this auto accessor properties capability. some of the semantics that I wanted to look into investigate as proposed for this feature is that it would again create an unnamed. private field for the accessor. Initializers evaluate during construction at the same time as other private Fields, so they don't pass through the set method so they're not - a subclass would not be able to observe the set of a superclass during construction. and you would have the ability to use a hash prefix on the getter or setter to create a private named getter or setter. with the same spelling as the property so you could have a public getter with a private setteror so that you could actually set values in the constructor or set values later on but still only expose a public getter. So there's a couple things that I see on the queue and I wanted to be able to go to that before I move to the last slide, which is just the summary.

WH: The semantics I can see being slightly useful in some cases. However, the syntax clashes with `static` and anything like `static` that we might do in the future.

RBN: Are you talking about this concern here?

WH: Yes the idea of using `"static"` to mean the keyword `static` is just not something I would want in language any more than I would want to use `"if"` to start an `if` statement.

RBN: The only reason that I have this proposed here is that we already do this for Constructor. Constructor is a special case inside of class.

WH: No we don't. A constructor is not special syntax. At the syntactic level a constructor is a method like any other; it’s treated differently later.

RBN: This is fine. I'm looking for stage 1 so this is something that we can work out mean if we don't want to allow string for static, then that would be fine, but I probably would probably disallow a string name and static if that were the case just so that we don't have this confusion because you can do this with Constructor, why can't you do this with static?

WH: My issue is broader than that. Had we done this first, we would not have been able to add static blocks. Adding this will prevent us from adding useful class extensions in the future. So I don't like how big of a syntax space this carves out. I think it would be better if this used a different syntax that’s more specific than what you propose.

RBN: I'd be interested if you have any ideas around if there's a different syntax you'd like to see. I went with the one that seemed the most convenient and similar to how this works and other languages that have grouped accessors.

GCL: I'm on board with grouped accessors. I think they're great. I would just be worried that the auto accessors would - if they were part of the same proposal - they seem like something that could be a lot more in the weeds and contentious and might hold back grouped accessors and I wouldn't want them to do that.

RBN: Well, the reason that I'm presenting them together is that there I've been thinking about this proposal was for a while even without decorators, but the decorators proposal, its current direction, which I agree with, most of the current direction of the proposal - and I've been working with champions on places where I'm concerned. But one of the areas that I'm concerned about is the issue about the automatic transformation of fields accessors. And one of the reasons for proposing the auto accessories is a way to give you a syntactic opt-in that has more value than just being a syntactic opt-in. it provides more capabilities than just saying oh I want this to be observed to be an auto accessor. In stage one decorators is theoretically possible to write a decorator that does that for you. but it doesn't give you all the same capabilities because initialization still passes through the set; you can't separate public get and private set for example, so there's a lot of flexibility that this provides and grouped accessors kind of provides some of that value and also has some tie-ins to have decorators get applied. I have a couple extra slides in case I need to bring them into play if I need to the show some examples of the differences, but the reason I'm again presenting together is that there's some motivating scenarios from decorators that these are both intended to solve different use cases in those scenarios.

GCL: Yeah. I was just just if they shouldn't be separated that's fine. It just was a concern I had.

DE: I'm a little concerned about the auto accessors just because of the verbosity. In decorators we've identified that many use cases do want to intercept where you decorate a field and you want to create a getter/getter pair that operates on this underlying storage. So if you had to write at each decoration site this several token syntax -It's like six different tokens - to invoke having a getter setter with an underlying field, that would be quite a burden. The current proposal has that fields are auto converted to these auto accessories. I think I could personally I could accept that they should be explicit and that we should go back to the previous [?] where it was explicit, but I think having such a verbose syntax would be a barrier to adoption. So I would prefer to investigate this terser syntax, but I would also be really interested in hearing the feedback for the rest of the committee.

RBN: I find it interesting that you say that this is a verbose syntax and I think compared to a single keyword like trap being an option for the decorator use case It does seem more verbose, but if you then compare it to the number of accessors written in the ecosystem, that's a getter over a single field or a getter and a setter targeting a single field this is actually a much less verbose syntax. And as a matter of fact, that's why it was introduced in the C# language was to reduce this in the burden of writing boilerplate for private field access and providing public properties and providing again the ability to have public gets and private sets and doing the initialization. There's a lot of additional value here beyond just the fact that it provides syntactic opt-in

DE: Yeah. I'm thinking a lot about the upgrade from existing decorators. decorators are largely motivated by providing a standard path to miss ecosystem thing. That's in wide use so would be asking a lot of people to write at their decorator use sites this new syntax we're proposing. So that's I think that was the thing for the public get and private set. That's a very separate in complicated case because it uses the hash token for something very different behaviors for so far in the language where right now the hash is always preceding the exact private identifier and here it's being used for the sake in order to you know. reconstruct some other private identifier. That's not literally lexically there that's a little bit confusing.

RNB: if we're trying to build the intuition that hash is perfectly that's something that I wanted to investigate. I didn't want to use a keyword. just because we don't use a keyword for private state in JavaScript for numerous reasons and that the hash character is essentially becoming synonymous with private states. So I felt that this was a good compromise. rather than other so one of the other options that I looked at was whether for like [?] z would you reserve [?] automatically as being the private State field rather than it being an unnamed field and those are some things I'd like to investigate if this does move to Stage 1 is there a slightly different approach that we want to take is there? is this the right way to go. I mean those are things that I think we could look at before we reach stage 2 if this is an area we want to inivestigate.

DE: Okay, so my next comment is you are talking about this subclassing hazard where you make decorative fields and then have a subclass of it that interacts and I think we spent a lot of time talking about these subclassing hazards around 2016, 2017 when we when we ended up setting on the define semantics for fields in the presence of accessors and decorators the ecosystem. and we came to consensus on that and it's been it's been shipping in now in all Evergreen browsers, I think. The interaction really exists independently of what we decide for decorators or grouped accessors and it's the kind of thing that I think would be in to begin to work on with type systems. but also the kind of thing that because we've discussed it. I think we came to this conclusion that we're sort of willing to pay this cost for a potential case and so I think I'm not not really convinced that this should be a point in the design I think. it would still be reasonable for decorated elements to by default become accessories. I can see the case for making it explicit, but I'm not convinced that this hazard is so fatal.

RBN: yet in the decorators proposal that you brought last meeting you discussed the fact that in typescript we have the declare field keyword. So you say declare and then field name as a way to attach decorators to a field because otherwise you would possibly be redefining that field. So it is an issue that we are constantly thinking about even if we we know what the cases are. So what we've essentially done is we said we know what these concerns are and we know where we're willing to draw the line, but there are still foot guns for users and the case you described is not the case that I described. The case that I described is that I have a super class that has a field and a sub class where I want to apply a decorator to that field the if I do that in my subclass field gets turned into an accessors the super class will override it because it will be defined on the instance. This is a thing that we know exists and we know is a problem and we are essentially saying that users will have to deal it, but we have also have to make sure that users are aware which is why we've discussed whether or not we should have something like the trap keyword or an opt-in syntax because otherwise applying a decorator just magically makes the field turn into an accessor and possibly causes problems. So you end up in a situation where I either can't decorate it or I have to rewrite my superclass hierarchy so that I can change it so that it can be decorated properly.

DE: The case of declared decorators is very different from the case that you described as not really results of defining accessors or anything. It's a result of the semantics that we decided on which is that if you have a field declaration, but no initializer it initializes the fields to undefined. If you have a super class and subclass that overrides that you don't want you don't want that field to be set to undefined by the subclass so you're already just deviating from from the JavaScript standard your field semantics and I think what you want is a typescript declare field.

RBN: You're describing a different issue that I'm describing though. I'm not describing the issue of a field of a field with no initializer being undefined. I'm describing turning a field into an accessor makes it weaker than a field on the superclass. AA field of the same name on the super class will override it because the super class will Define it which will shadow the getter and setter on the subclass. It's an issue that brought up multiple and these class hierarchies where you have a field defined in the superclass in the field of the same name to find that a subclass

DE: It's not a tenable pattern given the undefined issue that I was describing.

RBN: So either way we know that it is an issue and it is an issue that we have discussed in both the decorators meetings. and in plenary multiple times, so I don't really don' believe that it's overblown.

DE: It's a known mismatch with typescript but I don't believe that we can accommodate it within the semantics that we agreed on for class fields. I agree that we've been discussing it.

MBS: so next up we have some some data from C# usage.

CLA: I am wondering if you have data about the grouped accessors from C#. I personally I never used languages that have grouped accessors. so I was wondering like if it's widely used and which kind of use cases they're actually used a lot.

RBN: short primer on C# has grouped accessors. You can define a getter only in c-sharp, but you can't have a separate declaration for the cetera. They're all part of the same declaration. So every accessor like property in C# is a grouped version. It is the case in JavaScript where we have get name or set name as separate declarations.

CLA: Oh. right. Yeah. Yeah because JavaScript is most of all one of my main languages. I'm actually pretty comfortable with the get and set stuff. But yeah, like looking syntax of the automatic initialization it way less verbose to use those. I like this a lot. So I was wondering if C# was having any kind of similar work as Javascript has.

RBN: I don't have any specific numbers on auto accessors. I do know that when the feature was added in C# several years back that more and more code moved to it. I don't have numbers on that specifically. I do know that it was a convenience feature for many users that has improved quality of life for development because it reduced a lot of the boilerplate for accessors that I think would still be valuable in the JavaScript ecosystem.

DRR: I think it's just worth bringing up - accessors are really popular in C# ecosystem in general but for maybe it's slightly different reason than you might expect. Basically because of the way that C# has to be compiled and the way that these things get resolved you need to sort of future proof yourself in case you ever might want a field l to become an accessor, so what people will typically do is have these things declared as accessors ahead of the fact. and then if you ever need to implement some behavior in the accessor, you'll add that behavior. In JavaScript it's slightly different, there is no difference in resolving to an accessor versus a field, right? It's mostly opaque to a user unless you start to use some of the APIs to dig in and find out. And so some of the cases like get set for the auto accessor. I think are maybe not as valuable as just a get or a get and a private set or something like that. but I will say that it is pretty popular in the C# community it is very prevalently used. I don't have exact numbers though.

DE: Okay. I I wanted to ask. We've been talking about this in the context of decorators. if what like what advice the committee has for The Decorator Champion we've discussed three alternatives for how decorators could allow fields to turn into accessors. one. Is that all decorated Fields become accessors Another is this trap keyword? and a third is this Auto accessor? My personal opinion is that the latter one would be too verbose to be ergonomic for the use cases that we've examined. but I would really like to hear the opinion of the committee. Should we be waiting for this proposal to work through the process? Should we wait for this auto accessors proposal to proceed on decorators in case it provides the kind of infrastructure we should be using.

GCL: I guess I'm on the Queue. I would say that the needs of the decorator proposal requires the accessor pair, it shouldn't have to ask for permission. That's an implementation detail leak. so I would say we should go with whatever. Oh. Allows us to work around that without having to like lightless The Decorator to do things.

DE: The implementation leak is a little bit - This is what we were discussing earlier with static decorators, if we want to allow different decorators to make different code transformations we could do so with static decorators, but that would add lots of other kinds of complexity that were trying to avoid it. Do other people have thoughts on this topic?

BSH: Okay, I'm partially addressing Waldemar's concerns. I was wondering if it's been considered to just have a keyword before the name so you can just say accessors name {} instead of just the bare name because that would resolve the problem.

WH: That would resolve the problem.

RBN: It's possible that we could investigate that. I don't know that - it wouldn't be just open close curly because we'll still have to define what accessors are allowed.

BSH: I didn't mean maybe empty. I just meant that we have the keyword in front.

RBN: That's if we need to if it comes down to needing a keyword. That's something that we can consider that, definitely, but I still feel that there is room. especially if you do consider the possibility of prefix keywords. There is still room in the design space, even if we use. root accessors without a key word, but I think again that's something we can continue to discuss.

WH: If you do it that way then I would not want the static blocks proposal to advance. because I don't want to make a syntactic exception for some names and not others.

RBN: we already make an exception for Constructor. and static is kind of like constructor except during static initialization. So I am willing to investigate changes to the syntax or the addition of a keyword at that becomes necessary to but the idea was to reduce boilerplates rather than add additional boilerplate if possible. I want to continue investigating if I can.

SYG: this is also about auto accessories. So I think with the ease of having these default. Getters and setters. I think I would be remiss as an engine of complimentary to point out that accessors are not free. They will be slower than data properties and I think the presence of the auto accessories syntax will nudge folks or will perhaps sweep some of the performance implications under the rug by making it seem like it is more free than it actually. Like this is in direct opposition to the case in c-sharp. In C#I should hope because it is ahead of time compiled that making things getter Setter prepared for this future proofing as Daniel said comes more or less for free from the runtime performance perspective.

RBN: That is not going to be true for C# either.This allows me to reduce the syntax burden. on the developer for writing an accessor for very common cases. Getter only for example, or get in private set. or something that you want to be treated as a getter and a setter so they can be subclassed because Fields can't really see it Fields do have this subclassing hazard? It allows you to have a very simple syntax to get into the place where I can do things the way I need them to be with accessors without all the excess ceremony, but that doesn't change the fact that they are still accessors. They're going to have the same runtime burden that they would if you wrote them out manually.

SYG: Right. I think the point is that by making it so much terser that we might be encouraging performance patterns that are in fact undesirable. And I think that's that's a trade-off like any other trade-off, if the actual problem that we would like to solve here calls for trading off the ergonomics over the performance implications of course the performance implications usually take a back seat unless it is Central to the proposal. But given that a lot of the ergonomic stuff seems to be born out of experience with C# and given the differences in how accessories are used between the two languages, I just want to call out that we should be more careful in the trade-off way.

MBS: Next up we have is the idea to make. gets/set create public grouped by accsuccessor.

CLA: Yeah. Oh, sorry if I missed this but is there a way to allow a group that's for private field as well, and if so if I have a #x grouped accessors would this create a public x accessor?

RBN: Let me specify the idea is that you would be able to have private accessors if you wanted them. There's very little reason to do that because they can't be subclassed. The main reason to leverage auto accessor is because you want either the hiding semantics of a public get with a private set or you want the subclassing semantics of accessors rather than the subclassing semantics of field definitions. You don't get either of those with private field grouped accessors, but if we have private accessors there no reason not to allow them. The design goal for having the prefix hash for a get or a set in a public accessor is to say that the hash basically tightens the privileged access. So if you say #x, the get is going to be private the set is going to be private. You don't make it public in that way. You wouldn't be able to turn a private accessor into a public one by just adding a get to it. The idea would only be to go from a public one and having one of the members become private. Or rather having one of the get or set become private.

LEO: Yeah, I was just saying this is causing the confusion. I'm pretty on board with the proposed future. I know there are a lot of concerns before raising. but for ergonomics, I don't feel comfortable with the confusion for setting up public or private functionality of a fieldin the get/set keywords. I would stick with what is in the field name, so mixing them up inside of the group part just seems like it's leading to more confusion. I don't like it.

RBN: Yeah. So the one thing that I was there was a semantic that C# does have that I was trying to consider which is that C# does allow you to have Auto accessors that have - there's two ways you can have Auto accessors in C# that have differing. visibility modifiers. so you can have a public get and private set but you also have the ability to do initialization in the Constructor. So the case that I have on the screen here is the example of Z with just a get semicolon. in C#, you can say this.Z in the Constructor to do it to initialize it as well. But anywhere else in the class you have it becomes read-only, which is weird. It essentially has a private setter, but it's syntactically illegal to reference it. So the goal was to provide some similar semantics, but we don't have the ability to use keywords and we can't just magically make an accessor that has only a getter for example that has a private backing field. If you needed to set it for any reason how would you do that if you needed to? so the idea is to provide some mechanism for defining. How do I update the state so that I can have my class can update state but external callers can only read the state but cannot write to it.

LEO: I still have trouble. I still to expand and probably maybe give more time. I don't know to understand what it means like when you have the example on W get and then the private set what it means for for the end result.

RBN: I think it would be clear if I had an example for what that would look like, but essentially the semantics for w are that you have an unnamed or unnameable private field. There is a getter for w that returns the value of that field then a setter for has W that can set that field. it's still a getter. It's still still a Setter. If a decorator were replied to this the decorator would have access to both the get and the set functions for wrapping purposes, but the setter would not be exposed on the public side of the class. It would only be accessible in lexically within the the class.

LEO: That's the part that still feels a little bit confusing but I like to give more time to understand how this will blend. if that actually happens. I'm not fully convinced about this part. I'm totally on board with the general idea of grouped accessors. But I think that's fine for the current - that's fine for me for the current proposal. I know there's other concerns we have here.

RBN: a lot of people seem indifferent a cup at least one person's interest in it. So I'd like to seek stage one.

GCL: I am okay with stage one, but I would want to have it only be stage one, which is we are accepting the problem space and not the solution space.

RBN: Yeah, I'm still interested in, if there are issues with specific parts of the proposal looking at ways of addressing those whether it's changes to syntax if necessary, but I do think it's interesting, I do think that if targets in a class to decorate that you give us different capabilities. I'm not the happiest with how. the changes for Getters and Setters in the current decorators proposal because I think that that breaks some. scenarios and I think this would open those back up. even if there are other alternatives that we look at and investigate for decorators such as the trap keyword and whatnot. I still think there's some value.

DE: I'd like guidance for how to proceed with the decorators proposal because this as ron notes there's overlap. Like I'm all fine with watching how this investigation goes but I'm wondering whether we should be blocking on it or whether we should be proceeding with other ideas. I see a lot of indifferent reactions. So I don't know if we should do another temperature check or if people have comments, comments might be better.

MBS: I've just just reset the temperature check. Dan. Can you be a little bit more specific about what you're trying to measure the temperature on?

DE: Sure. so let's say heart is like this is really the way to go for decorators and decorators should should really not proceed until we have this worked out. And unconvinced means that I'm not convinced at these relate to each other at all. And then there can be middle reactions along that scale. Is this a fair kind of thing to to ask for the committee Okay.

YSV: feel like maybe a better way to do this would be to take some time. We're going to have some extra time in this meeting. Maybe we can just have a discussion about this directly rather than using the temperature temperature check for this as I'm not sure it'll work that well for this question.

DE: I mean, we've been discussing it for an hour like we've made in different points. I repeatedly asked the committee to comment on it and we didn't get comments. So maybe you is time to do a a temperature check.

WH: I don't understand what you're taking the temperature of.

DE: okay, we can leave this for later. I tried to explain but if people don't don't like this idea then never mind. Oh Bradford asks could Daniel explain why this blocks decorators? Well as Ron noted a lot of what decorators need to do sometimes is decorate the behavior of fields to make it so that when you access a field it calls a getter. and the decorators what installs that? that accessor

BSH:. I realize how that works, but I don't understand why. like, well, we don't think these are -

DE: we need aside on the syntax in the decorators proposal for how to make a decorator that that adds this excess or behavior? So the current decorator proposal is basically implicitly an auto accessor. And Ron seems to be proposing that we don't go with those with that choice part of his explicit Auto accessor proposal.

BSH That's not how I understood it. I thought the idea was now, but it ordered but if you wear it automatically turns the field into a getter Setter pair, but as a sort of way to deal with that to make things work more smoothly in some cases you could just go ahead and Define things as a pair up front and then it's less of an issue.

RBN: Part of the reason that that I'm proposing this we've been discussing various this and some other ideas within the decorators Champions meetings. And part of the reason I'm proposing this is I'm not comfortable with how decorators currently in the proposal always make fields into accessors as you said there is a performance cost that comes with that, there is the cognitive burden of this subclassing hazard that I've mentioned and we say that it's not an issue, but it's not an issue because you can't get yourself really into this situation right now without writing a lot of code, but decorators are going to do this magically and that's going to cause issues. It's going to be a foot gun. So part of the reason that I'm proposing this as we were discussing in the Champions group was, if this is more than just adding a keyword, and it's syntax that I've been considering for a while, I felt that it would be valuable to get the committee's feedback on whether this is the the direction that we want to go because that will help frame the discussion for decorators when it comes to Fields. Because even if some think it's somewhat verbose, I still feel that it's very terse Syntax for defining a getter and a Setter back with the field which is what we would be doing automatically with the decorator. providing a terse syntax so that we know what is going to happen. I'm explicitly stating that this it is a field that's actually a getter and Setter. So I'm not having this implicit thing happen underneath me that can cause problems and therefore if this is a direction that we go then my suggestion would be that decorating a field does not turn it into an accessor because then you don't have that cost. Decorating a field wouold only be able to witness the field or add additional metadata but not intercept getting set. because that because that is it doesn't it's that's the least least surprising to the user if I have a syntactic opt-in whether it's a keyword or a block with a get set shorthand that says that this is automatically populated. Some syntactic opt-in allows the user to make the decision as to whether or not they want to eat that performance cost or lets them know that they are aware that this change is happening because that will affect how subclassing works.

DE: right Right. So what I what I wanted from this presentation from this discussion was guidance on what we should do with decorators. Does stage one mean that decorators should block until we have this worked out much more or does it mean it's doesn't have a particular endorsement, but it's something that the committe is interested in looking at and decorators should proceed independently. What does the committee - what does the committee think about this?

BSH: Okay, I guess what I'm thinking is I think you could move forward with this proposal and that doesn't necessarily mean that that means decorators can't do what they are saying they do now, I feel like that's a that's a separate discussion. I'm mean that may be one one of the goals that Ron had in mind when he wrote this proposal but this proposal stands on its own without having to change the decorators proposal as it is now, I would think

RBN: I'm bringing it up now because of decorators, but this is something that I have been investigating, spending some time on for over a year or more just because I'm interested in the syntax space. not just because of decorators, but it came up in the decorators Champions group prior to this meeting. So I felt it was worth bringing up for discussions. We can determine at this is direction that we want to go

BSH: I guess what I'm saying, is that suppose they both move forward exactly they are. and they get all all the way through then the state that you end up in is that yeah decorator's will automatically turn something into a field. But if you have a problem with that, then you don't tend to bend and you know, you're going to be using decorators. Then you use this syntax to always Define things with the getter Setter pair and that negates it. And then there's the question of like, oh should we just not even allow the It's a whole. the automatic conversion? separate issue. I don't don't feel like it - it could be acceptable to have both things true in the end. Yes.

DE: Yeah, so if we need more time to think through the interaction than I can accept that as an outcome, but I feel like stage 1 itself is a little bit ambiguous. I think for the conclusion for this we should say both stage 1 and something a little bit more explicit about what we think the relationship is with decorators. Is it, do we need more time to understand whether this relates to decorators? If we do need more time, if we could time box that like to two more meetings, that would be that would be really useful because it's a little unusual to have a stage twoo proposal blocking on a stage one proposal.

WH: I could see how this interacts with decorators and I could see how this could solve some of the problems with decorators, but these are just assumptions that I'm making about a particular solution that we might go with, and I suspect some other members of the committee might look at the problem and make different assumptions. I'm not sure we're talking about the same thing. So what I would like to see is a coherent presentation of how this would solve the issues with decorating fields.

RBN: Are you looking for that now? Are you looking for that looking prior to stage two if I do if it progresses that far?

WH: The presence or absence of such a thing would affect how much in favor or unconvinced I would be about this particular proposal. This is tied into decorators, and I'm not sure I understand the entire solution space here well enough.

RBN: I have a couple slides that I was looking into talking about if necessary, that could be also helpful for grouped accessors. For example in stage 1 we coalesced getting set for decorators in the updated one were only decorating the getter were only decorating the setter function itself. but the idea with grouped accessors is that that would allow us to continue to do that to use the updated approach, but if you have a decorator that decorator that needs access both getting set because I need need to observe both when you read it and when you write it, maybe I'm auto initializing and type checking or something. They're doing some type of run time insertion. Or I'm developing something that I am essentially proxying the getter and the setter to point to something else. You might want to have access to both in which case being able to decorate the grouped declaration would give you these semantics as opposed to this semantics. In the auto accessors case we've talked about how the decorate the updated proposal changes the field into an accessor param decorated, which is good for VMs because they can optimize class declarations. It can be confusing for users because it changes the runtime semantics and we have additional overhead that's incurred because accessors aren't free. The auto accessors provide an alternative syntactic opt in to automatically converting a field. Again, I bring this up because I am interested in possibly, if this is some direction we want to go, using this as a means of getting decorators, but not having the confusing semantics of the auto-field conversion. And even if we want to move forward with this and also move forward with decorators in some other way, whether it's a shorthand keyword that that just says that this is synonymous with [?] something like that, which is the other thing that we've been considering. I don't have an issue with that either. but I have brought up and I am concerned about the automatic conversion. And that's one of the reasons that I brought this forward.

WH: Okay, so within the decorators group is auto accessors or something like that just a possibility, or would we pretty much definitely switch field decorators to use that instead of accessor pairs if it were available?

RBN: that's been been my direction within the group discussion but that's one of the decisions that we're trying to make, which is what we're waiting on before we can feel comfortable bringing the decorative proposal before committee committee again.

WH: Okay.

SYG: Let me try to reframe Dan's question and kind of say my piece. Where I'm seeing why it's difficult to get consensus for stage one right now. So stage one is supposed to be about motivating a problem space and us wanting to solve a particular problem staying in that space. Here Ron put forward the interaction with decorators specifically this implicit conversion problem and kind of orthogonally the same general ergonomics thing around getters and setters. And that disagreement comes to I think some of the decorator folks do not agree that the implicit conversion problem is a problem to be solved. Namely if you look at the problem from the framing of decorators the current decorators project in tc39 as a standard upgrade path for something that the ecosystem is already heavily using introducing additional syntax. like in this case is contra to that goal. So like the technical merits of that is they're just moot because the problem is not a problem that you want to solve. On the other hand the ergonomics for getters and setters thing I guess seems less controversial. so my question for Ron is one. Is that an accurate assessment and two it sounds like the two goals are not separable for you. It seems like the problem statement that you want us to advance to stage one on is explicitly like we should solve the implicit field to accessoor conversion issue in the current decorators

RBN: The implicit conversion is something I've argued against for quite a while and I felt that and I feel that this is a possible solution to that issue that I think would be worthwhile. I'm not necessarily hinging the proposal on whether that is the solution for decorators. I do think that there's value in this capability one way or the other. I'm not trying to hinge this on just that specific feature of decorators, but the reason I brought it forward was we've been discussing how do we best handle this case? Is it a keyword? is it some type of syntax? if it is this syntax, then it's more than something than just the decorators proposal itself can just introduce and say here. Here's how you do it. We need more. rationale behind that and more benefit than just having a bunch of extra characters to indicate this transformation. And I brought this to the decorators champions group because I felt that this was not only a valuable feature in its own right but also it helps solve that specific issue and it's an issue that I've been passionate about. So that's kind of why these became intermingled.

RBN: I'm still interested in stage 1 unless anyone is against it.

DE: I don't feel like we have an answer to the question that I raised which is that would like guidance for understanding what stage 1 means in terms of how it interacts with decorators and the committee's temperature on that question.

MBS: So then Dan because we've already run over by many minutes. Are you blocking stage one?

DE: I'm not happy with this style of asking. I feel like if we get to stage one the only thing to note in the minutes is that it's ambiguous what this implies with respect to decorators.

MBS: I'm sorry, but we've already gone eight minutes into the next agenda item so we don't have time to dig in. Ron would you be okay with revisiting this with another 15 minutes on Thursday because because we have some extra time so we can work through some of that ambiguity?

RBN: I was going to say if we wanted to come back to this later. That's fine.

MBS: Okay, so then Dan just so you don't feel like things are being rushed when we give a proper time. I'd like to revisit this later in the meeting before coming to a conclusion on the item is everyone okay with with that?

RBN: I'm fine with that.

### Conclusion/Resolution

- Revisit before the end of the meeting

## Realms for Stage 3

Presenter: Leo Balter (LEO)

- [proposal](https://github.com/tc39/proposal-realms)
- [slides](https://docs.google.com/presentation/d/1mKdez8FMbJ4QQ2KsOCMXOKVW6QoUnrNQf2cwsLy0MyI/edit?ouid=109846357552457289915&usp=slides_home&ths=true)

LEO: Alright, so this is a shared presentation. Caridy will take over at some point. Hello everyone. I am Leo, I work at Salesforce. And here I am presenting. a status update on the Realms proposal. This is a stage 2 proposal, but we have plenty of updates today. We would like to request Station 3, but unfortunately this is not going to be possible. You might see some of the reasons here. So the API remains the same, the external API Remains the Same ,as you might have seen in the past. So we have the realm we have its own structure. and direct access to the realm's object global this in the import method that operates similarly to the equally to the dynamic import. It's not a surprise. the API is quite simple in the external side of it, and it does. enables like control the execution of the program was a new global object It provides a new set of Entry 6. there is no default access to the incubator realm - for clarification the incubator realm would be the top the top realm or the place where you are instantiating a new realm. The new realm gets a separate module graph And yes. it does have sync communication with the incubator realm. Motivations for the is mostly for componentized applications from using programs with multiple sources or multiple. programs within a single web application or an application in general. That's actually seen easily with the advent of package managers, different teams, etc. Most of those programs they contend for Global shared resources. and what we're trying to provide here is integrity of this execution within a web application while still not facing race conditions about the current state of the application. This is also enables like virtualization and portability. And yeah, we currently we are not fully able to virtualize environments where the program should be executed, the least in the web platform, but this solves that problem in general that should work seamlessly for any JS environment. We have some prior art here. here. You might know we have iframes. Yeah, and most of the time they are bundled with unforgeables. We're trying to show today how iframes are unwelcoming to do a full virtualization set up. We're going to go through some use cases for these and some examples. Or you might be familiar with node.js api, the VM module. and the VM module basically provides a new realm creation, and it's pretty similar to what we have here. Maybe the VM module may offer more application settings then we are doing in our API. We also found some interesting Parts like in iOS you can use javascriptcore JS context group create, but also new in Android you have exposure of the V8 context new which basically provides a new realm. For the HTML behavior, synthetic Realms, which are those Realms we're creating here, they behave like a parent realm. So we have like the synthetic Realms that are realm are created through this new API, but also we have the main realms or principal rounds as you already use: the window, a worker or worklet Global Scopes that are created by HTML. and HTML Keys some some State and behavior of principal realms. and they all the synthetic programs have a parent which is a principal Rome. We also might call it the incubator realm here. and we have a look up State and behavior on parent realm, not synthetic Realm. so "current realm" is the current principal realm when we use this these wording. The synthetic realm also have their own module graph. This is a pretty important thing for what we want to to get with these API to fully support the realm import since module close over global object. So we actually don't want to leak the global objects by different modules and modules evaluation and observing execution from all the different modules in different different realms. Yeah. so so we've had some previous key concerns What problems this is trying to solve and if this is a net win over the school of using iframes. those are some these are summarized. question list from Shu which I really appreciate like trying to synthesize this. We've tried to overcome those questions, we'll will bring it up like some use cases. I also know we also going to present those here. and we try to land in a lot of differences this actually present from my frames one of them like being naturally. that naturally lightweight solution, an intentionally lightweight solution compared to what we actually need to roll out today with iframes. And yes, we believe it's a net win. Let's try to go over some of the questions, but before that we also have an ongoing TAG review and guess what we have a lot of we've had a lot of feedback coming in monday or yesterday.

CP: we have been getting some feedback from the TAG review from mostly coming from Google. we have feedback in the past coming in from Domenic mostly right now. He's also providing a consolidated list of feedback, some of these feedbacks we have here in the past. The majority of the issues are related to the web and and how the web sees this proposal. we haven't gotten much pushback from anyone else. Obviously in the other platforms this feature exist in some degree and is is very similar to what we are proposing. In the case of node in of IOS and Android and similar they exist today. We were using in the apps. even in some of those platforms. But those are severely penalized by having a hidden web view just to have an iframe inside it and that's problematic for applications in those environments so people don't use those. they use the realm creation, the context creation, via the existing apis in native code in order to create a new JavaScript environment. For the web the biggest challenge has been been getting Doomenic and some other falks company conveyed this is useful. This is orthogonal to all the efforts the web is trying to adopt and the path of the web as they call it. we at this point and we could continue waiting for more feedback their shoes leading therefore and I've been great in terms of communication. communication. I would like to go very quickly over over these five major bullet points that Domenic mentioned a couple of days ago, I think. The first one is obviously the saying that in the past we have here. community talking about three years now four years. some of the and the fact that the Realms are not a security boundary and the proposal is not claiming that obviously but it seems that there is some concerns from Domenic and some other parts about whether or not the the this proposal. would influence developers in terms of using these as a security boundary rather than just a way to create a new context of evaluation and control the evaluation in that context. in this case, it is what it it is. So we have been very clear for a long time now this is about integrity. It's not about security you want security you want to protect against spectre and so on you have -- [interrupted]

CP: So this first bullet is just about that. It's trying to disseminate information, try to see if this is a real concern. Our position has been involved. You can create these things today to know all these environment people are using it today. It is very hard to do the same. you all environments you have to to do very differently in some environment. You have to do Native code in the web. You have the same domain. I frame it exists today. We're just trying to normalize that across all the different environments and Domenic believe that this is in fact, problematic because it give the false sense of security security boundary, which it's not.

LEO: In addition to this, Domenic makes a reference to an article here from figma where they found out like. issues. The issues are raised from an implementation of a round brush in there was just an approximation of what we want for the round and the issues were well the in purse Percy, they would not be present or existing. in the D. Actual Realms API. and they were dressed in the industry and the shame. but it's not really a problem with in Realms API per si. So there are some subjective assumptions here, but I don't feel them like they are judgmental in terms of being subjective, but I don't see them nice technical. It's hard for us to give a technical aspect of this we can say many times. This is basically a layer of integrity. Not really a security sandbox. You might have heard this word because as Mark Miller has mentioned many times, there are many perspectives, many ways to define and perceive what security means and does. This is not the same for the implementation perspective?

CP: By the way, if anyone has questions or comments about these just jumping we don't have to wait until the end. That's more like a conversation at this point. so this is is the first bullet is it's just that I think his sentiment about that earlier about this particular. block pass from figma. not necessarily about the problems they encounter when trying to do a polyfill. by more about the intent. but they were trying to do do kind of a security secur boundary on top of an iframe or something. Don't poke around from the same domain and so on.

CP: The second bullet is more on the on the direction of the web rather than a technical concern. This is mostly saying the web is moving into a direction where you want to do code execution in isolation or so, you should go a sink rather than than sink or not. And this proposal is is basically going in a different direction in the past. We have say that it's the Realms are complementary to having a worker or having something running a different process, in a different agent and such. We cannot speak for the web in general but it seems complementary in our opinion.

CP: The third bullet is more concrete. The third bullet is really about the developer experience and how to teach this to people on how to get developers to understand when you create a Realm. There will be things that you will not be able to access them out-of-the-box. There is a clear separation now between the APIs that are provided by the language versus APIs that are provided by the browser in this case. and this separation. up to today's date is now present in a web application in the web. Our position has been like this feature exists today. We know that and you know the platform distribution model that is more common today for developers is npm. So somehow they are already tuned in to factoring the case of different apis available to you for each individual program. when they use node for distribution and when they use the web or distribution of those of the bundle of those programs that are used by the app and so on. So this already exists today today in the industry. As a developer, you're facing these on the daily basic class. There are tons of tools that we have created in order to mitigate this problem in the first place. like things like linter were. you could specify what environment you're targeting and there are many settings for that where you already know up front? What are the things that are available for you programs? Ooh. use and and the linter will do the rest for you until 1 plus bundlers which or compilers were? They actually do work in terms of accommodating the source and the target. that you want for the program that you're writing. So yes, this is new to the web, but it's not new for developers. I'm not sure what can we say about it, because this is the reality that most people that live in today.

CP: the fourth one, we disagree on this one because the realm has to APIs basically the creation and the into words. and obviously give you access to the global object and you could use eval you want to the proposal does not introduce a new evaluation mechanism. there on the web. There are three main channels for evaluation. You can create a script you could do Eval. you have eval available depending on the settings of the realm, and you could do import Dynamic import to kick up the program and get some code. [transcription error] We're not introducing a new evaluation mechanism. Just what you have already at disposal and if you have a CSP rules that disables eval in the dark. You will not be able to create a Realm and called eval, you will only have available the input for you. And so it seems that this is not a problem.

LEO: Just to add to this the feedback yours is like introducing a major new code evaluation Vector is that primary entry point into an API sound great. We are not really introducing any major new evaluation. Vector you could probably have access to evolve from the realm through the realm of object dot Global did a study all but there is no like direct or three entry point that if we we do have a primary entry point, we do have through our import method.I think there's some misinformation here even like the example with REamthat evolve does not not exist.

CP: So the last bullet bullet is Abby obviously out of our some of expertise at this point and I think Daniel is around to maybe provide more details if anyone has questions about these one of the concerns are being how we're going to integrate these into the the web in general like a from the specification point of view. We have been get Getting some great help from Daniel and some other folks who have been looking at how to solve this problem. In their opinion This integration is not that complex. But again, it's outside of our Lives outside of my expertise. I cannot really say much about it, but one thing is important I believe to to notice here that the pull request open from Daniel that has all the pieces of the integration and we like to continue. exploring more and more on that. but in general. it doesn't seem like like an impossible task [transcription error]

CP: the complexity of that implementation as you said. we have overcome this one so far.

LEO: There are two different cases here for the complexity. One of them is integration into HTML, which I believe Daniel is doing an amazing job with the HTML integration. There is a pull request trying to solve and asking for feedback. I'm not sure if then is getting like all the answers probably. but it's in the works. but also the same for time the complexity relies on. the technical complexity of usage for Realms, I think this is pretty subjective as well to those who are using it institute the Realms just add is to those who are opting to implement Realms, not for those writing code That will be run in the realm. and for what it's worth of of as well, we've been doing a lot of Investigations and finding out the relationships that we have with the web platform and JavaScript. They had the engine integration that are mentioned here. We find they exist today. So we are not like reinventing the wheel, but just reusing what we have today as described in this text in what is implemented.

CP: So one thing that I want to point out as part of their learning process we choose to use the term realm for the API. And if in fact the API provides a realm Constructor called Realm and because of the way the web is the web has been using the concept or the the word realm in the specification and the way that they have implemented the web platform It has been very controversial in terms of the concepts that are predefined in our heads. Maybe that was a mistake. Maybe we should have chosen context maybe or something similar. which is more likely to match the current implementation. We didn't foresee these but there’s still the possibility to make a change in the name of it people think that this is important but in reality, which is using composite that were well defined 262 and we went with with that kind of naming an API where it has some conflicts with the concept in order platform. So it's still possible to change it if needed.

LEO: So those were some of the last Domenic's feedback that we would appreciate it if he would be willing to re-engage into the discussion promptly. Unfortunately, that's not totally possible right now, but we would be open to discuss this and try to address this as we actively been trying. There is some other feedback from and questions actually on the tag, [?] some of them we just try to keep address in here. Many of those questions are like regarding it the Realms only have the built-in JS apis available. available. Yeah. Realms are just require to be bundled with the frame modules and or the built-in JS. and if could whole side properties if they want to there's an ongoing discussion that we are probably said in the proposal to not expect any additional properties and to make that a like a full restriction. Our preference is to have a clean slate of the realm object and we just try to make it flexible for the integration with HTML so we are going like if it works if that's preferable. But for the HTML integration, we are definitely up to it.

CP: that one is also related to Domenic's third Point like the difference between understanding that there is a web API and there is a language API, and how much of that can be smoothed out by allowing the web to add things to the realm. We believe that will be a little bit more confusing for developers because it's not going to be the same that they will get in other platforms. We try to go with the portability aspect of these where when you create a realm you get the same across all these different platforms.

LEO: Yeah. and and there's the other question on how many libraries won't work unless they had [transcription error]. Yes as a nation like the clean slate of the Realms is one of the goals. So if you expect your you won't have many big things in the realm like we expect a clean slate and that's how it's mostly used today for those using sandbox or virtualization virtualization approaches and the current realm cannot be accessed from the incubator Realm. So the new created realm cannot have direct access to their incubator Realms or to the top level realms. security code doesn't need to know, It's an inner realm the code executed just like we just want this code to run seamlessly without observations, to the mess up in the global. So what we want is integrity. integrity. and Realm API has only important Global [?] as we mentioned. This is like how clear we want to go with this API. We might want to work with extensions in the future, but definitely not for this current proposal. We just want to make it like our MVP just going through Max Min and we may explore extensions in the future, but that's not like any compromise that I am expecting from anyone here. The current API works real well right now and yes, it does have known for further explanation. Yeah. so there is just one that I like to show here which is a Google and a Google and is issue today when I say like componentization. apps componentized. applications where they really need some immediate access to State and synchronize to avoid racing conditions. This is one of the examples with and worker Dom where the like it bounding and claims direct doesn't work over a sync communication channels. This is a real problem. They of to today does he just liked one use case you have. over days but most of them like you have a central DoM any. poor any. important to avoid Racing condition conditions at realms want introduced.

CP: AMP is the one of the more complete examples that we have been seeing out there and this is this app from Google. The fact that they will be able to use the Realm as a complement to The main iframes and or in general they will be using the Realms inside a secure boundary that they already created by creating a cross domain - inside back inside the main app. And by doing so they don't have to worry about security. They only want to worry about the Integrity of the different code that they want to evaluate inside the AMP app. This separation allows them to virtualize the DOM so they can provide their own implementation of the DOM inside a realm to the creating your own created. a thumbs up Dom apis available for the program to use and they have synchron's access to the actual. DOM structure. that is in the app so they can manipulate it by using the exact same apis that are a model. So I believe then this complete example sort of highlight how these features are complementary and we could just use them in ways that allows to to be able to continue using the apis that exist today. Those apis are mostly synchronous apis that you call and get it result back or you call and they have a side effect right away. That's the kind of thing that you would not be to do if you go through an async boundary like a worker, so where you don't have immediate feedback you have to do a lot of other things in order to accommodate the fact that something like computing the size of an element in the in the screen asynchronous today and you have to go async. I think that's just an an example.

LEO: Okay. And just to wrap wrap up. Yes, we may not going to be able to have stage 3 here. SYG is really being helpful and doing communication like working as a communication between us and Google's team, to make this work. I think that the most pushback is from there today. I believe we have some more like neutral position. from other implementations. Not really official but like I seen 10 temperature seems to be neutral. Yeah, but I still want to request stage 3 in the next meeting and I like to check up. like if we can add anything to the next steps in January. And I also just want to make sure official eyes for [?] I've had three interesting revealed from Richard Gibson, it's not not not sure if I can can actually consider this as like a totally plus 1 but it's very positive and his opinion is positive about it is I have more reviewers, but I just want to make sure I officialize that the editors also want to follow up on the HTML integration so it's to I'm not saying it's a complete +1 but they are there is ongoing progress towards this. anything you you everyone for

RGN: I'll make an official +1

DE: So there was a lot lot of discussion about technical issues in the HTML integration PR and I'm not not aware of problems with the with the current one The main thing is each realm has its own module map. Although that's something to find in the host. I think it's something that we kind of expect to be the case across environments for the for the fundamental reason that modules close over global objects And our realm is a global object. So if you want to be able to run module code in the context of a realm, you need a separate module map. I think the the inline module block proposal that that Shu sort of previewed would fit in very well with this. That's all.

AKI: Thank you, Daniel. Do you have a response? or CP?

CP: No.

AKI: Okay. okey-dokey, Shu

SYG: so I do think there is utility here, but I don't think that all of the counter-arguments to Domenic's arguments are that straightforward as you played out in out in The Proposal? so to to kind of give the overview of the Chrome position, we don't yet have an official position. We're still working at that. So thank you for for taking that and delaying asking for stage 3 in a further meeting while we try to get that worked out. I think the complexity stuff aside which you know in Domenic's feedback he ranked last because of the the priority of constituencies. so we can get kind of ignore that for now, but I do think that the separation of GS and web web platform. is not a good thing like like it is a failure of along the same lines as Conway's law where because this is how the standards bodies happen to be set up and as a consequence of that it happens to be how JS engine teams versus web engine teams are set up that the Clean Slate to you to to the champion team seems to be everything the tc39 touches that I do believe that is not a useful distinction to the web platform or to Node programmers at large. I mean there are no efforts to align on a lot of stuff with the website and in repeated empty in surveys. I have just it's really jumped out at me. That's that devs do not know nor care nor should he care about the separation between JS features and web features? Some of that we can separate like we can cut the separation along some other lines like maybe it's like I owe maybe it's a lot of kind of capabilities but the line line to cut the line and according to standards boundaries is not the right one. And I think we should have a better answer to that then to push for prohibiting hosts from adding extensions from adding things to the global to the global object.

LEO: There is a distinction there in something that I brought up to that issue that I mentioned for the discussion. so this discussion here [issue #284] we mentioned there are two parts one of them. We have the host initialized synthetic Realm that is almost a clone of hos initializeuserrealm which allows some extensions to the properties of the object. we also do have the settee for Global Bindings that we haven't decided anything yet. in the center for Global [?] is an ecmascript abstraction that actually allows the addition of a Global Properties or global names and that's still still untouched and still like a new discussion that we are having and we probably can improve that for integration.

DE: I don't believe so. I renamed initialize user realm to host initialize synthetic realm anyway, so they're not similar. It's just the same thing, but the main thing is I think we could Define something like how workers Define a certain set of web IDL interfaces that they Implement and they have interface Interfaces Exposed on them. I think we could do that with Realms as well if we decide to do so when I got involved in this proposal it was left completely kind of ambiguous up to hosts what to do, I think it's the job of this Champions group in the committee and this committee to actively propose a solution. So I proposed an initial one, which was nothing is exposed. But I do think that we could also expose things we would pass to consider making significant changes to web IDL to maybe not that significant but some changes to web IDL to accommodate this but I believe it would be possible. We would just have to think through which interfaces are exposed on Realms. This is an exercise that the web has done before in the context of workers and worklets. And I think it would be totally completely completely possible.

SYG: Hi. agree. It would be completely completely possible. I would like to go on the record to say that pushing for instead that the realm API what is available in a room Global is the exactly the same across all JS runtimes that seems like a started to

DE: this seems like something that we could definitely iterate on before the next meeting because I really want to push for a definition of this that we're thinking through completely more than sure.

CP: this is outside of my expertise or who need some help, from Shu, Daniel and some water parks and parks and defining that we're trying to accommodate the warden and 262 because obviously 262 now less that 262 probably would just have a normative node or something somewhere that finds it if the host will be able to add other things and then we have to work with the web spec to the fine. they will define what they are adding to it.

SYG: Okay. right, cool. cool. Yeah, I won't rehash the other points. that I think there are strong counter arguments to your counter arguments as well. I think the point is that there is utility here, but it is not a slam-dunk in my opinion that realm is not like a slam dunk net good for all JS ecosystems. I would like to urge the other browsers to really think through on the complexity point, which arguably you know should be last in the priority of constituencies, that if this really has value add to web developers to large-scale Partners to the health of the web, you know, we should not consider how hard it is for us to be that high on the priority list that said said most of the work for implementing implementing Realms once it reaches stage 3 is not going to be in a JS engine. I think most js engine teams have no qualms about this because it is pretty trivial the things that are already exposed. like you showed on iPhones on IOS and Android. I mean those are exposed because I imagine like like there is no predefined runtime JS runtime except raw access to the JS engine that those are exposed. I wouldn't take that as evidence that people are reaching for that functionality as they need a starting point to run JS code and you do that by by me trying to create some kind of new context with the engine binding that you have available. available the web and node and existing JS run times that are built on top of the JS engines are just completely different. well So most of the work is going to be on the for Chrome on the blink side for JSC on the webkit side and for Firefox in the gecko side and part of why I cannot really give stage 3 or no stage 3 right now is I need to talk more with the web side to get their take on it if I say let's go ahead and do stage 3 V8 has not much work, but I cannot speak for the rest of the team and I would urge the other browsers to do so as well. Yes. this this is kind of of unique this proposal in that a stage three here, really should be coming from the entire browser engine team not jus the JS side. Yeah. those were my two my two topics

LEO: For the records. I'm not in in disagreement with shu. I agree their topics from the feedback there like interesting. And yes, there are some of them are challenges, although I mentioned some of them, I believe they are just subjective assumptions. and I appreciate your feedback. Thank you.

Yulia: So I can speak a little bit to what SYG just described also about our investigations within Mozilla on this topic. We've been watching the tag review and we've been following Domenic's comments. We have a certain amount of hesitation about this proposal namely whether or not it should be exposed wholesale Because there might be some concern from a web architecture perspective. I'm not going to bring up the same points that Domenic has made but there have been a couple that have been directly echoed -- not by our HTML programmers -- But by people writing JavaScript in the browser. There were certain points like what Domenic raised about security being, because this confusion around the proposal of security has been around for so long, there has been some misconception around this and it was raised as a potential danger. At the same time there are people who are saying something like this would be useful, specifically if it had access to DOM apis, especially in the tooling space. But without access to DOM apis and only having access to JS apis, it wouldn't have the same effect. But again, these are things that are sort of in a very specific realm of JS development tooling and web extensions. We're not talking about regular websites and the feedback that we had from regular website developed type development within the company didn't have direct feedback on this beyond the “oh, I would use this in the wrong way” piece of feedback that sort of lines up with Domenic. We don't have a position where we would say that we would block stage 3 or necessarily support stage 3. We're watching this carefully and we will be following up on this discussion before January for sure.

LEO: I would would be very happy to sync with. anyone interested about about this. as time is less than short, can we just have someone else to apply as a reviewer to them? if any anyone is interested, I would be very happy to sink. So if anyone wants to reveal days, I would be more than happy to go through the proposal and shoulder also the HTML integration. integration.

RGN: I'm willing to be official on this too if that wasn't already captured.

LEO: Yeah, so we have Richard Gibson and we do have anyone else. Otherwise, I'm going to try to find people offline. I believe Rick Waldron also started a review on this. If there any other next steps please? I urge everyone to let me know anything else that I can do from my side.

MBS: Okay. Thank you. you. I think that that is it for today's agenda. Thank you, everyone for joining us and we'll be back tomorrow.
