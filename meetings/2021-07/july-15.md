# 15 July, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Chengzhong Wu        | CZW            | Alibaba            |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Devin Rousso         | DRO            | Apple              |
| Jack Works           | JWK            | Sujitech           |
| Istvan Sebestyen     | IS             | Ecma International |
| Josh Blaney          | JPB            | Apple              |
| Philip Chimento      | PFC            | Igalia             |

## Intl.NumberFormat v3 for stage 3

Presenter: Shane Carr (SFC)

- [proposal](https://github.com/tc39/proposal-intl-numberformat-v3#readme)
- [slides](https://docs.google.com/presentation/d/1ubtY4v7ETfutQIxgtayxPVVS1hQx8zg7yFOlOtEYomc/edit)

SFC: Hello everyone. I'm here to present my proposal: Intl.NumberFormat v3 for Stage 3. So first, let me go ahead and just for people who haven't seen this proposal yet just tell you what this is all about. This first came up for Stage 1 last year. So this has been baking for about almost a year and a half. Now for this proposal, the way that we came up with this was by going through all of the feature requests that get filed against the ecma-402 repository and evaluating each one of them based on its merits based and in particular, based on whether it has a lot of stakeholders, whether it has prior art, and whether it's expensive to implement in user land. Just as an example, these are two features that we considered: additional scientific notation styles, but we decided not to implement that particular feature because it doesn't have a lot of stakeholders, and it doesn't have a lot of prior art. Whereas Number Ranges had a lot of stakeholders and a lot of prior art, so that's how we came up with this proposal.

SFC: So, I'll go ahead now and show you what got into the proposal, what we're hoping to advance, and I will highlight updates. The last time I gave a presentation on this was at the April meeting, and I'll highlight any changes that have been made since April.

SFC: Okay, so first we have the format range function in Intl number format. This supports all of the features that are otherwise supported in Intl.NumberFormat. It allows ranges of currencies, numbers, and measurement units. As you can see here, here are some details about how it works. The formatToParts will follow a model much like datetimeformat range. We use a localized approximately symbol. We also support this in Intl plural rules and we support ranges to Infinity but not NaN.

SFC: The next is the grouping enum. So, for the grouping enum, this has been one of the biggest pain points, one of the top two issues that gets filed against 402 is that people want more control over how to display grouping separators. And we're now going to be following the CLDR and ICU convention for how we do this by adding additional options: instead of just `true` and `false`, we have three different types of true, which are represented as strings, and then `false`. So we're reusing the existing useGrouping feature and retrofitting it to split the value true into three different types of true as previously discussed.

SFC: The third is new rounding/precision options, which I have discussed in previous meetings. This is the first one where I have an update since April. We've made some changes to roundingIncrement. Rounding increment now accepts one of a fixed set of numbers. These numbers are, there's more numbers accepted now that work than there were before. And these support common use cases, in particular, they support quarter rounding, rounding to the nearest 25, so 25 cents is now supported as a rounding increment, as well as rounding to the nearest 20 or 200. It's also updated that rounding increment cannot be mixed with significant digits so it can only be used when fraction digits is used alone. Rounding priority is described in the next slide. trailingZeroDisplay, is another feature that's been requested a lot where we have a lot of evidence that it's very important for the ecosystem.

SFC: Here's details on how rounding priority works. I won't go into too much detail here because I spent a bunch of time on this last meeting but basically the rounding priority is important to support compact notation, as well as several other use cases. But compact notation is definitely the main one that we are able to support here. We are now allowing users to customize the rounding of numbers with compact notation.

SFC: So Next one is "interpret strings as decimals" and I have a small update here. So, previously when I presented on this, I sort of waved my hands in the air and said we're going to support strings. We're going to support strings as decimals. But I didn't actually go into detail about how this is actually done. So in my spec, which has been sent out for review, it's been open for review for over a month now, in this spec, I specified exactly how this works. I'm introducing a new type called "Intl mathematical value". Previously, numbers accepted into Intl number format had to be either a number, a capital N number, or a BigInt. And now introducing new type called Intl mathematical value, which is a mathematical value, which is a keyword in ECMA 262 together with these four additional values that mathematical value does not support. So, basically an Intl mathematical value is an enumeration with five choices of either a mathematical value or one of these other four specific, enumerated types of things. And this supports everything in Number and BigInt as well as String. So that's what's new.

SFC: That's the update on rounding modes, we discussed this previously. I've had many meetings with Dan Ehrenberg. Thank you for the feedback as well as many others to arrive at this list. So hopefully this isn't controversial anymore because we've already discussed this one. Sign display negative is also fairly non-controversial. It just adds another option to the sign display option in the options bag.

SFC: So stage 3 review, I sent this out for Stage 3 reviewers. Thanks so much to Yulia, Anba, Sergei, Frank and others who helped review this. I've resolved most of the issues in this pull request. If I go back to issues, we can see that all the ones that are fixed by that pull request have links, and then there's still five issues that are not resolved, and these are the explanations for those five. Number 41 and number 51 are editorial issues that need to be resolved upstream first, because I sort of have that they're in a part of the spec, that's in limbo in an additional editorial pull request upstream. So I intend to resolve those in the upstream pull request. And then those will be integrated into the spec here. Number 52 is an ICU bug that needs to be investigated and could possibly have some small tweaks to the spec language on the handling of the rounding priority option. #54 is an interesting discussion question that I'd like to discuss here. Number 60 is a purely editorial question that I'm just waiting for a response from the editors.

SFC: So let's see. I hear a couple people pinging me on Matrix. I'll look at that though after my presentation. So let me just open up real quick issue #54. This is an interesting side effect for how I implemented Intl mathematical value. In this case, it turns out that the string values that are accepted now actually also accept hex values because I accept any string that's accepted by toNumber, including hex values. So hex value strings are accepted, which is interesting. And yeah, so I was just wondering if this is acceptable to people. I think it's actually okay. I think it's nice to have the strings that are accepted by Intl number format be exactly the same as the ones that are supported in 262 which includes hex strings, which means that you would be able to call format with a hex string and have it work properly. So that's the open question here. So, what I would like to do is close this issue as working as intended.

SFC: So that's my last question. So then let's see I'll check if there's anyone on the queue. I don't see anyone on the queue. Oh, that's too bad. I like people joining the queue. Jordan asked a question about the difference between extended mathematical values, So yeah, I did read about extended mathematical values except that it only supports positive and negative infinity. And you know, I wanted to also include NaN and -0. So, I just made an arbitrary choice to define Intl mathematical values as including all four of those. I could have made it as an extension to extended mathematical values. If you think that's better, then just open an issue on the repository, and we can talk about that.

JHD: I think my comment is the limit of my interests.

BT: You've got a couple of folks on the queue as requested. Ask and you shall receive, Ujjwal’s first with explicit support. Would you like to make that more explicit? [silence] Don't hear you if you're trying to talk. So let's go to Kevin Gibbons.

KG: Yeah, for the hex question, I suspect that I am neutral on it, but can you give an example of an API that will now accept a hex string?

SFC: It looks like actually we already accept a hex string. So this is a moot point, isn't it? Because I actually just tested this and we actually already support hex strings. So we continue to support hex strings.

KG: All right, then my opinion is that we should continue to support hex strings. Can you reassure me that you don't accept octal?

SFC: It supports whatever is in the StringNumericLiteral grammar.

KG: There are two numeric literal grammars. There is the one in the main spec and there is the annex B one, I believe. They differ in their handling of octal.

SFC: I intend to use the one that's in section 7.1.4.1, not the one in Annex B

KG: cool. Okay. Good to know.

SFC: I believe, if I check the spec, that should be correctly cross-referenced. We had this interesting part of the spec that you know, if you're interested in this, I would hope that I would like to have one more set of eyes on like, how I did the Intl mathematical value. Because basically like, you know, it's a little interesting what I did here because I basically said like, parse the number using the StringNumericLiteral grammar. But extract out the mathematical value before returning it as a number. So if I could get one more set of eyes on that, that be useful.

KG: Yeah, I'd be happy to give that a review. I've been - well, the 262 editors have all been messing with this stuff lately so it's all paged in.

SFC: That's great. Thank you. I'll tag you on this issue. Thanks. Is Ujjwal still there?

USA: Yeah. I just wanted to explicitly support this. Thank you for working so hard on making sure there’s strong support behind all the requested features. I went through the entire proposal with Yulia and I think it's a great addition.

SFC: Thank you. I don't see anyone else joining the queue. There's someone, Waldemar?

WH: Regarding KG’s question: There are actually three numeric grammars in the spec. There is (1) the grammar for numeric literals that appear in source code, there is (2) the Annex B grammar that modifies grammar (1), and there is (3) the *StrNumericLiteral* grammar that’s used for numeric literals parsed from strings. I don’t believe Annex B modifies grammar (3). Note that *StrNumericLiteral* does allow octals using the `0o` prefix.

KG: That's right. Yes, so presumably that is accepted here, which is okay. I don't have a problem with accepting octals with the `0o` prefix.

SFC: My follow up here is I just tagged Kevin, Jordan and Waldemar on the issue 54 and if you can just take another look at that and that'll be the last remaining possibly open question. But yeah, thanks again to all the people who did their Stage 3 reviews, Yulia, Anba, Sergei, Frank and Ujjwal. I really appreciate that. So if there's no one else in the queue, then I would like to ask for Stage 3 for the Intl number format, V3 proposal.

BT: All right. Any objections out there for stage 3, any worries? [silence] Sounds like none. I think that's stage 3, congrats.

SFC: Thank you. It's been a great experience, working on this proposal.

### Conclusion/Resolution

- Stage 3, KG to review the specification of the string grammar (and WH if interested).

## Module fragments (continuation)

BT: Any more discussion then, now is the time for that.

CZW: I'm very supportive of the proposal. When previously, we use the string identifiers which are that we can directly import the nested module fragments by referencing the string specifier. Yet with the variable pattern we have to import the parent modules first, and then the nested one. So I'm wondering if this pattern can create implicit state dependency on your parent module since it can alter the global state, However the module variable can be used as worker entries. So if my nested module might require the global state of the parent the module. So I would wonder if that will be a footgun or if it will be considered as problem.

DE: Thanks for the question. So I MAH raised this question yesterday, that is, how should it work if you have a module that imports some other module fragment and then you send that to a worker, how should that work? I guess this would be one case of that and honestly, we just haven't - I haven't worked through the details of that yet, and I have think about it more. I don't think this problem - I could see how this comes up with the nested Imports, but I'm not sure if it's unique to that. But yeah, it's related to the switch from strings, to variables. About nested. there was a suggestion from Gus that we could have special syntax for this. It could look maybe like nested destructuring. I guess my intuition right now is that it would be better to stick with a simpler proposal with these separate import statements. But it's true that we have to do more thinking about how imports from one module fragment to another could work with the module fragments shared across workers. And I just don't have an answer to that yet. Does that answer your question?

CZW: Yeah, we can maybe discuss this offline.

MM: So I just want to note that since Dan's presentation, we've tried to figure out how these concepts relate. And we do not understand how module fragments can be module blocks. We very much like the idea of ending up with fewer concepts and of unifying module blocks with static module records. So I just to note that we are looking forward to working on this with Dan and trying to work through these issues because we are very interested in seeing how simple a system can be that satisfies all of the nees.

DE: I'm looking forward to working with you here too. So when we were discussing yesterday, I was trying to give this explanation about how they relate in terms of - so could you elaborate on the unsure-ed-ness?

MM: Yeah. So your explanation included the phrase "closing over" which is not a something that a purely static reflection of - that's semantically equivalent to something reusable source text could do. So, as soon as you have the thing closing access to other modules, then it's something quite beyond a module block or a static module record. I see Chris is on the queue. I'll defer to Chris for a more in-depth explanation of our puzzlement. But like I said, we really want to work through this and solve problems. We would like to see something go forward.

KKL: So the so when some one of the principles of module blocks as we originally discussed was that they do not capture the lexical scope of the surrounding module, which eliminates a whole bunch of concerns about, for example, as was mentioned before, the possibility of shared state or side effects, and eliminates a point of coupling, that makes it possible to transfer a static module record. The idea behind module first class module objects, which in the compartments proposal we call static module objects, is that they're transferable as the text of the module and only the text of the module and therefore only need one mime type, and things like that. When a module block has the ability to, as you say, close over names from the containing module that entrains those bits, it couples the concept of the child module to the parent module and it's no longer merely transferable text. And we have, I have a couple of thoughts and I responded to MAH's issue about possible design directions for that. But both of them basically force the issue of having fragment specifiers again, as far as the possibility of implementing this feature with a module loader API, it would be necessary for the module blocks within a module to be nameable and that imposes restrictions on the domain and range of module specifiers. And the point I wanted to add onto the queue was not so much that I'd like to resolve any of these issues, but we're very happy to have a conversation about this at the SES meeting at some point in the near future.

DE: Okay. Yeah, not having read the comment I feel like I shouldn't speculate on it. This kind of relates to the question that was previously asked about how you could make import maps intercept what module fragments point to, like, whether that's a goal or not. You know, whether a loader or compartments can, can you direct that seems like a similar question. I thought the closing over might be okay if you're closing over these things that are kind of relocatable and stateless. But yeah, let's discuss this further in the SES meeting.

BT: All right. Is the link to participate in that obvious for any folks who are listening and curious?

DE: All right, so you can find the security strategy meeting on the TC39 calendar. So it's a weekly call and there's an agenda that the calendar invite points to. That should make it clear when this is on the meeting agenda. Christ do you have anything to add about scheduling?

KKL: Also linked on the calendar invitation is the list if you'd like to participate in the conversation about scheduling.

MM: who has the power to edit the TC39 calendar item?

AKI: Funny you should ask. I was just looking that up for a completely different reason. I don't have an answer to her yet

JDH: a number of us do. I'm pretty sure I can make those changes, Mark. Message me.

BT: So for those who want to continue this discussion, check the TC39 calendar for more info there, okay? So next up, then we have Guy with Topic.

GB: Unfortunately, I didn't make the discussion yesterday but from what Dan was just saying, it sounds like there was discussion around representation of these in import maps. The topic specifically is one that I've brought up previously. I just wanted to check if that's been discussed about the principle of how sharing code between different builds can work under the constraints of this type of an optimization or using this as a form of optimization.

DE: I had a slide about a way that it might work, but I think it would be useful for you to describe the motivation from your end of having this support.

GB: Okay, I guess the appeal here is that it opens the door for a kind of an optimization of combining modules together into a single file where they would have been separate module files and that's a very appealing aspect of the specification and one of the natural things that you end up Doing with with a large application is you have your sort of core application build that has a bunch of core modules and then you have your sort of apps or components that build on top of that core application that you might want to build separately, that again need to link against modules in the core build. And what happens if there's a module that's been inlined into the core build that you now want to reference from outside the core build and in one of the subsequent builds. And so you end up needing some kind of Registry manifest that maps them and tells you how you can reference that module. The current way that this specification is written, is you've needed - sorry, I'll just post the issue that explains the motivation for them. If you need it as sort of an import and you need to know the identifier and it would also need to be a public export of the core build it. So just thinking of that, If you've got react in this build and you only want to then link your components also against that same version of react. So it's kind of a portability code-sharing use case question.

DE: So I think part of the context here is the idea that the application code which is linking against something rather than using a bundler to emulate modules, like people do today, would instead be importing a module with kind of a logical specifier would be using import maps to map to kind import the physical specifier where to actually find it and you defining it based on being of these exports of the, you know, of the file containing, module fragments. So, we would need a way to address these module fragments as exports. In the initial module fragments proposal, they were string specifiers. This worked out very easily with no extensions needed. Without strings specifiers, we need to extend the import Maps language to have direct support for it, which I think could be done in a pretty simple way, but it depends on the appetite of others maintaining import Maps, whether we would have that kind of extension. I don't know if you have thoughts on my proposed extension.

GB: Do you have a link or reference to that, Dan?

DE: I posted it in the same thread that you were talking about.

GB: Yeah, I see that. I guess my only concern with that kind of approach is creating a dependency between the specifications that has ramifications. For example, we shouldn't assume specification outcomes for import maps and assume that they're going to work out the way that we need to put this kind of an interop. And there's a slight sort of timing question there around, how such a thing could be coordinated with.

DE: I think this is pretty common for TC39 proposals that they only really work if there's something that's done in hosts to make them work. For example, we're discussing Realms at this meeting also. And to make module fragments work at all it definitely needs host integration. so, the way that we work this out procedurally in TC39 is typically to have a proposed host integration laid out, maybe not all the details, but at least the broad strokes, before stage 3 and get some kind of buy-in from the host or at least some of the hosts - maybe rough buy-in - befor stage 3. So I think that would be a reasonable thing to ask for here, given the really tight Connections. I agree that there's this timing issue that we wouldn't want to get ourselves into a sticky situation where we kind of commit ourselves to do this, but then don't manage to solve some of the important problems.

GB: Yeah, I agree that starting those conversations early and sketching out those Integrations and getting feedback on that is a great direction and I'd like to see progress on that as well.

DE: Yeah, I guess I want to suggest that we order this by first working out these kind of foundational issues that other people have raised and then if we end up feeling confident about non-string module fragment specifiers, then we would try to build this stronger consensus about the import Maps extension.

GB: I mean, I'm not sure what would work best for the process. I just think it's important to maintain a strong eye to these use cases.

DE: Yeah, I agree. Thanks for maintaining that eye and let's keep working on this particular thing.

JRL: on the same topic we were discussing import maps. These module blocks and the named module blocks that you're proposing. We don't require import maps, correct? It's just a nice to have that would make it easier use.

DE: So TC39 doesn't require that host support, import maps. I think they're not supported in all browsers, yet. They're not technically, on a standards track yet, but hopefully they will be soon, like, maybe they'll be part of the WHATWG HTML spec, I'm not sure but that's going to take multiple browser support. So, definitely not something that TC39 requires.

JRL: But the proposal that you're talking about now does not require it and we can still use all the features without import maps.

DE: So you know I'm pretty convinced that Guy's usage pattern is important and we should work out a solution to it.

GB: To try and clarify, for the non-import-maps scenario. You would still need tohave the same double-import pattern to access one of the imports from within the module fragment package. Like that same example. It's a level of indirection that requires a side manifest or bundlers to maintain, if that makes sense.

JRL: Okay.

DE: Yeah, so there's like more of the code transformation to implement this as kind of an output format because you have to split it up into two different import statements, because we're not just using strings. That's what you're saying, right?

GB: So for example, if you had a module that imported React and you wanted to link against an existing bundle that contained React, then you would need your build system to take two inputs: that previous bundle and the manifest for that bundle representing the exported fragments of that bundle file and what packages they correspond to, and you would then be able to get the correct output. And that is a very different style of linking model in contrast to the import Maps linking model, which would not necessarily be compatible with that style as easily.

DE: So, can you elaborate about why this would be difficult for tools?

GB: Well, firstly, it requires all build tools to share a common sort of manifest format for declaring these modules in bundles, or, you know, you would stick with a single build system. At the moment, effectively, I guess we are treating all public modules as separate module files and so I guess it is a consequence of effectively inlining everything into a single bundle that you get that indirection between private and public specifiers or modules. I guess just thinking of the consequences for tooling and build processes etc, it's something that is worth engaging further with current build tools on and and prototyping some of these ideas further, to make sure they're working out smoothly.

DE: yeah, definitely, I'd like to encourage prototyping of this stuff before stage 3. So yeah, that's a good set of things that could kind of go wrong. You mentioned public and private module fragments, and I did want to mention again that, you know, being able to declare a private module fragment was a pretty widespread feature request from my initial version which used string-based specifiers and had them only be public. It's really unclear to me how private module fragments could work if we have entirely string-based specifiers because you kind of want those to be meaningful in a general way, right? Right now when you have a string based specifier, not necessarily in all environments, but on the web and in web-like environments, you can normalize that or you can make sure that it's an absolute path or a relative path. And then It has the same meaning, it's a common key and so I don't see how that would fit together with private module fragments, though that's been a pretty common feature requests. And I think lexical scoping or choosing not to export something is a natural way to express privacy. So if we do decide to go back to strings, then I would appreciate more help with how to think through these concepts in a way that could support private module fragments or maybe we would come to an understanding we don’t need them.

GB: Yeah, there's definitely pros and cons. I guess it's important to flesh out the use cases and the prototyping. And see the end to end workflows and make sure that the portability as a feature can work out smoothly.

DE: Yeah, totally agree. Great.

BT: The queue is empty. Any closing words you want to give Dan?

DE: Thank you so much for all the deep thought that all of you are engaging in and looking forward to working with you further here. So please check the SES calendar for when we'll have the next meeting or I can make a little reflector reminder about it for when we will discuss this in more detail.

KG: For the notes, there's no particular conclusion from this item, right?

DE: So, the proposal is at stage one. I suggested this change to variables, which it seemed like people liked the idea of, or at least how the syntax looked, but there's real conceptual questions about whether it's viable. And so we're going to be looking into more about whether it's viable, whether we can work out the details, and there are lots of different details to work out and people have raised really good questions.

### Conclusion/Resolution

Did not seek stage advancement, interest in variable style but more thinking to be done

## Incubator call chartering

Presenter: Shu-yu Guo (SYG)

SYG: So the current Charter is now empty, so there's no overflow from last time. I want to call out that partially due to scheduling snafu and partially due to general lack of interest there ended up being no incubator call f for pattern matching. There was one for pipeline but there was none for pattern matching and my recollection from the previous plenary was that we had added pattern matching as an item on the charter because there was interest from non-champion delegates, but nobody actually signed up. So I'm considering it not overflow for now, but I would like to call out again: Is there interest from non-champions to discuss pattern matching?

JHD: It would be really unfortunate if, when pattern matching comes back to plenary seeking advancement, whenever that is, if there were concerns that could have been addressed earlier by incubator call. So if you suspect you might have opinions at the time that we seek advancement, it would be really great if you made the time to join an incubator call.

DE: I would be interested in a call. I'm sorry I haven't been taking the reflector offered enough to like register interest in time and I think others in Igalia are interested in the proposal. Just in following it along.

SYG: Okay, I'm certainly fine with having it on the charter again this time provided. We get enough general interest. It's my understanding that the champion group for pattern matching already has their own call so the only reason we have an incubator call for this is to get the broader feedback. So with at least Dan and possibly some other Igalians, we can have that and I was going to propose that we add the base64 proposal to the Charter for this time, given the surprising amount of contention around padding and just how complex this entire space is. Would folks be interested?

KG: Yeah, as champion, I would certainly be interested, especially if Peter thinks he might have time to attend I think that would be especially helpful. Or anyone else who was interested.

PH: Schedule permitting I would be happy to join a call on that.

SYG: Perfect. So those are the two, the current charter is for base64 and pattern matching again, that is probably all we have time for given the faster cadence, but I'm happy to take any other volunteers who would like to be added. Looking at the agenda though, I'm not sure - are there other early-stage proposals right now?

SFC: I think it would be useful if more people could attend the regular expression set notation meetings, we have those scheduled on the TC39 events calendar, We could make them incubation calls if that would garner larger interest, but at this point progress on that proposal is largely blocked on getting input from the stage three reviewers. We've already scheduled one incubation call but we do have a slot reserved for it on the TC39 events calendar. So I just wanted to use this opportunity to advocate for more people to attend this so we can make progress on the open issues.

SYG: Thanks, I think part of the reason to do an incubator call versus what you're doing with just booking your own calls is to kind of outsource the scheduling and time stuff to me. If you are already doing the legwork to schedule your own call, publicizing it should be enough.

SYG: Alright, I think that's it. Without any additional volunteers, just to recap, the next two are pattern matching and base64.

WH: When are they scheduled?

SYG: They are scheduled ad hoc. What happens is I usually wait a week after a plenary to schedule one, I make a new issue ,I pin it, I ping the stakeholders on GitHub. I put up a doodle for times. Usually, in the morning to account for overlap withEurope and it's more difficult for Asian time zones, but usually in the morning Pacific time. And then following the outcome of the doodle. I make a calendar item on the TC39 calendar and finalize the time and send out another notice on the thread. So they're kind of scheduled as they come.

WH: I'd be interested in the pattern matching call.

DE: Okay, I just want to say I really appreciate the incubator calls. It's been a huge help recently for module fragments and pipeline and you know, it's a lot of work on your part Shu. So I just really appreciate the effort.

SYG: Thanks. And Waldemar, I will add you, or better yet if you remember to add yourself to the to the list of stakeholders that - for each charter on the incubator agendas repo, which I will link the chat here a little bit after I stop talking. There's an issue that's made anew each time we recharter and under each proposal that is in the charter is a list of stakeholders and their GitHub IDs and that is the list that I copy paste into the reflector issue when I make the doodle and people are free to add themselves, but I tried to pre-populate with at least the Champions and folks I remember having interest.

KG: Would it maybe make sense to ask for people who are interested in being pinged now?

SYG: Yeah, especially if they can issue visitors captured as part of what I can just write it down, I guess it can. It can also be captured as part of the notes, that would be easier. If you are interested in either pattern matching or base64, please indicate in the 8x8 chat and then I will record it and ping you when we schedule.

### Conclusion/Resolution

- chartered pattern matching
  - interest: RGN, BSH, WH
- chartered base64 array buffers
  - interest: KG, PH, RGN

## Capitalization of nested namespace objects (continuation)

Presenter: Philip Chimento (PFC)

- [slides](https://ptomato.github.io/talks/tc39-2021-07/index.html)

PFC: This is a continuation of the discussion from yesterday. It seems like we need some overflow time to figure out the capitalization of nested namespace objects and set a precedent for future proposals. So I made couple of additions to this slide relative to yesterday. People agreed about the value I proposed for @@toStringTag for namespaces, and we were still talking about capitalization. There was some talk about the definition of a namespace object. So I wondered, maybe to get the discussion going again, is it strictly necessary to have an unambiguous definition of a namespace object? Could we say 'I know it when I see it,' but when I do see it it has to be capitalized or has to be not capitalized? And then I thought I'd put on there what I found the most convincing point from yesterday's discussion: the convention for how a namespace is capitalized, or spelled, usually is derived from the kind of thing it is, not from where it's put, from SYG yesterday. Let's discuss.

WH: The discussion is too abstract for me. I'd like to see a list of which names we’re talking about and which are the controversial and interesting cases.

PFC: I said yesterday that `Temporal.now` is the only existing one that we know about. So this is mainly a guidance for proposals within the future so that we don't make one ad hoc decision now, and then another one later.

WH: Okay, so we're talking only about `Temporal.now` in terms of practical consequences at the moment?

PFC: At the moment, yes.

MM: So we have this thing in the language that's already called namespace object. That doesn't mean that we necessarily consider it the same category but since we're searching for what the criteria is, those who think that they have a category in mind that is crisp even if you can't state the definition: do you consider module namespace objects to be namespace objects?

SYG: I do not, MM, and I'll quickly explain why. It's because they are module namespace objects make sense (?) in JavaScript. And they are always kind of reified actual objects. The crisp intuition I have, but lacking a rigorous definition is that, if there was a concept of the namespace that does not require reifying an actual object and I could do that, then that's a namespace object. Like, I could do that with Math, I could do that with Atomics. I cannot do that with module namespace objects,

MM: Oh, Atomics. That's our other precedent, right?

KG: And JSON, right? And Reflect, and Intl.

MM: Yeah, I guess Reflect. Wow, that's a lot. I'm not opposed to having the naming convention, the initial cap, to distinguish these, if we can find a criteria and that's all I wanted. So, I want to encourage you to find a criteria. To go forward with this as a precedent without having a criteria we can state I think is going to lead to the same kind of confusion that having two bottom values `null` and `undefined` does, which is in that case there's a stated criteria that's essentially useless in practice and people just don't have guidance about when to use one versus the other. So they do it based on an unstated intuition and they end up writing code that disagrees with other code for no good reason. I would like to avoid introducing a naming convention based on a similarly vague in practice criteria.

SYG: Fair enough. I kind of like what matches the queue item from MAH, but before that, KG, did you have anything to add about yours?

KG: Oh, this was just answering MM's question. I would agree with SYG that module namespace objects are not namespace objects in this sense, I think it's kind of a category error to ask that question. I would regard namespace objects as being a property of code itself, not a property of particular values in the language. So module namespace objects are particular values in the language but a namespace object in the sense that we are using it here is about how your code is structured, and what role this code serves in the rest of your program.

MM: And I'm perfectly fine with the module namespace to be understood as just a completely separate category. I wanted to probe the advocates, so thank you.

PFC: Is it fair to say, this is not a language concern but a standard library concern? KG, is that what you're saying?

KG: No, saying something is a namespace object is about the structure of your code, not about the value itself. So `Temporal.now` is a namespace object because it is a singleton collection of values. It exists only to provide access to other values. I think those are perhaps the defining criteria actually. That is about how my program is structured. Not about what kind of value it is, on the whole.

BT: Just a reminder that we just had 15 minutes for this item.

SYG: And how much do we have left? How much time?

BT: 7 minutes by my count.

SYG: I'm up next in the queue. I want to give some additional data points here. WebIDL apparently has a namespace keyword in the definition and it basically does two things. In JavaScript, at least, it creates these POJOs whose prototypes are `Object.prototype`, that are not constructors, that hold a bunch of data properties, like methods of them and whatever that you put in the ideal definition, and crucially, it exposes the namespace object. After it creates this object, it exposes that object on the global which I think segues into this thing that MAH has on the queue.

MAH: I was trying to reflect on how this convention came to be and feels it comes from the fact that libraries, before we had these modules, needed to add things to the global so that they were usable without polluting too much the global with new names. So, same problem as we have with `Temporal.now`, and so creating a POJO and adding it to the global, sometimes nested, was the way to do that for scripts when you're outside of ES modules. I'm not sure where the convention of capitalizing came from, but I have seen capitalization like that in different frameworks. I think Mootools or YUI had that convention. There were probably others. So, in mind, the namespace object is a POJO, usually, with a bunch of methods, that is reachable from the global because that's how you would make something available to other code executing as a library.

MM: So, I want to drill down into what reachable means here. The idea that it's reachable by a path only of capitalized names. At each step of reachability starting at the global, each step is either a namespace with a capitalized name or it's a constructor with a capitalized name. So that you would never — for normal addressing, obviously because it's an object, you can do what you want with it — but for the normal use that we're expecting, (I'm probing MAH's intuition here) that these would only normally be reachable by paths all of whose names were capitalized.

MAH: It seems to me that that has been the convention, maybe unwritten. I don't know if it was ever written down somewhere by anyone.

MM: Okay, that's sufficiently distinct that I think that's crisp enough to go forward with this. I think it's a nice distinct thing that quite separates it from dynamically created objects.

SYG: Yeah, and I like this condition, this criteria in that it also in the virtualization use case that you're interested in, MM, they remain namespace objects. Even if you know the actual object itself changes. The important thing is that even though it's a different identity it's not like you keep both around and the reachability is the same without having to, for example, create instances first to reach it, it's always reachable from the global.

MM: Right. The code that does the replacement would be handling it as a data object, but I think that that's irrelevant with regard to the naming question here. The question is, on the other side of the replacement how do we regard the replaced value? And it satisfies MAH's criteria perfectly.

JHD: I think we need to separate the criteria and the consequences here. So the @@toStringTag and capitalization, those are the consequence of being a namespace object. That's what we're trying to figure out. Because if we decide that the capitalization decides whether it's a namespace object or not, then we haven't actually answered the question. Because I would say that regardless of the capitalization, the `Temporal.now` object needs to be a namespace object by whatever definition we come up with. That it should have capitalization or not, that it should have a @@toStringTag. It's not that it's only reachable by capitalized names that makes it a namespace object. We should maybe say it's only reachable from the global, but I just wanted to clarify, it's not that it's capitalized, and so on.

MM: Yeah, it's more of a disqualifying criteria. If it's not reachable that way then it's not a namespace object.

JHD: Right. But that's what I'm saying, at the moment we haven't decided anything yet. At the moment, not being available under a capitalized name does not disqualify it from being a namespace object. I think that the purpose of coming up with a precedent is to answer this question in the future. And so we need to have a way separate from the capitalization to know if it's a namespace object or not. Because then if it's a namespace object, then therefore it has this capitalization - the one implies the other, not the reverse. Does that make sense?

SYG: That makes sense to me. I agree with that and I have a concrete definition that I would like to propose at the end that we can flesh out.

JHD: I just think whatever definition we come up with, capitalization should not be part of it.

MM: It's not circular. It's means that in order for `a.b.c` to be a namespace object, it would require `a.b` to be a namespace object. So it's a constraint on a set of decisions. In addition, the reachability from global by a path is a strong concern.

JHD: MM, what you're describing though is a suggested consensus here because at the moment it is, that something is a namespace object whether it's capitalized or not, and we're trying to decide if it being a namespace object must mean, it is capitalized or lowercase?

WH: Given the concrete discussion is about `Temporal.now`, I'm in the camp that believes the “N” should be capitalized because it clearly falls into the namespace category. It behaves like a namespace. I don't know what other weird cases might arise in other situations, but this one seems clear. A rule that a namespace should be reachable from the global object via namespaces seems okay, but are things like `Array` or `String` considered namespaces as well?

PFC: I think we said yesterday that they weren't, because they are constructors.

MM: In terms of the way I phrased my question about capitalized paths, the names of those constructors would count as qualifying. So you could have a path of alternating constructors and namespace objects, all of which are named with capitals, would qualify by the suggested criteria that I was asking.

WH: I would prefer that. To give a ridiculous example, if we made an `Array.Now` with the same contents as in `Temporal.Now`, the `Now` should be capitalized.

JHD: I think, regardless of what we come up with, something being a constructor defines its capitalization, or a constant defines its capitalization, in a way that precludes it being a namespace object, having anything to do with its capitalization. It doesn't matter if it's used as a namespace object or not. If it's a constructor it's capitalized, it's a title case, and if it's a constant, it's all caps or something, right?

WH: We are talking about namespaces nested in constructors, right?

JHD: But that's what I'm saying, is the capitalization of the constructor—

WH: I'm not talking about capitalization of constructors. I'm saying that namespaces nested inside constructors should be capitalized just like other namespaces.

JHD: I agree.

SYG: It looks like you and I have the same idea so I'll state my piece first and then if my to agrees or lost qualify (??), we can go from there. It's my concrete suggestion for what a namespace object is, is that it is an object, that is not a constructor, that contains data properties, that is reachable from the global via a series of property accesses, that is: without new-expressions, without having to instantiate anything, without programmatic calls, it's always just `A.B.C` etcetera. If it meets that criteria, then I'd say we call those objects, "namespaces." By that criteria, namespaces can be unnested, like the name spaces that we have now; they can be nested inside of other namespaces, like `Temporal.now` is, and they can be nested inside constructors so long as those constructors are globally available or nested inside other namespaces or are static properties on other constructors. I think you get the idea.

KG: Yes, when you say data properties that include methods, right? You just said, it's an object that contains data properties and I wanted to be clear that methods are data properties. It's data versus accessor, that is the distinction you are drawing, not data versus function.

JHD: I would qualify that if they're functions, they shouldn't be sensitive to their receiver.

SYG: Yes. I was mainly trying to distinguish from getters and setters. It should be the case that getting something out of a series of nested namespaces should not have side effects. I mean, I guess they could be accessors. That's fine, as long as it is pure.

KG: This definition sounds good to me.

MM: The thing that I was reaching for that is omitted by what SYG said and what MAH wrote in his upcoming question is, that the thing that I want to disqualify is, e.g. `Array.prototype.Now`. I think that would be a bad place to put a namespace object. I don't want this precedent to lead to thinking that that would be a good place for a namespace object or likewise hung off an `Array.prototype` method like `push()`. The intuition here, I think I can justify. It's not just a typographic thing, it's that right now, the lowercase names are about instances, and the uppercase names are about the static world. I understand that's not crisp either, but the disqualifying criteria that I'm suggesting is at least a crisp criteria, that's motivated by a non-crisp intuition.

SYG: I completely agree that prototypes should most definitely not be considered to be able to contain namespaces.

MM: Good. In which case, would you agree that the capitalization constraint seems like a good constraint?

SYG: I also agree with that, but I think that gets back to what KG was saying. It sounded like to me, part of JHD's pushback was that he's looking for an intensional, with an S, definition of the necessary and sufficient conditions of what is the namespace object. Whereas what Kevin's point was that they are in, an intentional with a T, in that we intend this object in the broader space of the code base, or in this case, the language, the standard library, to be a namespace object. And if we intended to do that thing, then it should have to meet the criteria that I listed and it should also meet the capitalization constraint that you list. Does that makes sense?

MM: Okay.

(??): He maintained here is capture probably in like separate structures that it it shouldn't have any other use in the language but just a great namespace except I guess for when namespace subject is used as a Constructor is a Constructor. (??)

SYG: Yeah. My mental model here is basically — imagine a language where namespaces are not reified. They don't have identity. You can only type `A::B::C`. If that is what our namespace objects do, then I want to call those things namespace objects. Prototype is not that thing, so that doesn't fit.

MM: Good.

MAH: Basically SYG's suggestion is the same as mine. As I said, something reachable from `globalThis` transitively that only contains but doesn't have any use but to contain methods, if it's a POJO or a constructor that just has a bunch of static methods on it, but I think the important point is if it's a method it shouldn't be sensitive to the receiver. As JHD mentioned, you should be able to detach it and call it, and for the thing not to behave any differently. As SYG mentioned, the namespace is just there for being able to reach that data property. It shouldn't modify any of the behavior. And, I would say we have been capitalizing things like that before, and that's probably what I would do, but I don't know what everybody else thinks.

KG: It sounds like we have a working definition of namespace. Perhaps not a hundred percent precise one, but this thing SYG and MAH said about being globally reachable, and containing only data properties, and not `this`-sensitive, and so on. The question in front of us was, should we therefore capitalize namespaces? Sorry, there were two questions. One is what is a namespace? It sounds like we have an answer to that question. The other is should we capitalize our namespace objects? I think we should.

SYG: I also think we should, given that before we made progress on nailing down what a namespace object was, we had the colloquial understanding of the namespace objects in the language, and they are all capitalized right now.

MM: Agree. I think we're close enough to agreement on writing down something precise that can serve as an interpretation of the precedent we're setting, that this makes me very happy on the immediate question to go with `Temporal.Now` with a capital N. We don't need to arrive at consensus on the crisp definition in order to give consensus to the capital N spelling of `Temporal.Now`.

WH: I very much agree.

JHD: I personally still prefer the lower case one, I think it looks better and I think that the purpose of the capitalization for me is to communicate that it's a namespace object and since as we've just exhaustively gone through [crosstalk] — you're always going to be reaching it through the global through some chain, so you're always going to be starting with `Temporal` and then going to `now` and then going to whatever function on it you're grabbing. So the initial capitalization for me is sufficient to tell me it's a namespace object. Precisely because nested namespace objects are so rare, if I saw `Temporal.Now` with the capital N, I would definitely think it's a constructor. So I heard similar confusion to say, well I think it's like `Date.now()`, and try and call it if it's lower case. I think both of those arguments are very weak, including my own, because you'll try it once and you'll figure it out and you'll move on. But either way, I think the convention will be to dot-chain or destructure out either the whole `Now` object or the individual pieces of it. I think that the capital T is more than sufficient. I think that the existing precedent is all about top level and that's what's really useful for me.

JHX: Objects are normally not capitalized in userland.

SYG: What are userland name space objects? in your example, you have a module.

JHX: When you import a module you get a module namespace, and normally it is not capitalized. And I think the system case, like if you use lodash or, lodash is actually very like a namespace.

MAH: I think the reply on that one, as I said earlier, this is a vestige from when we didn't have ES modules. And we added things to `globalThis` here that wouldn't be available from `globalThis`. It just creates a binding, the user does. (?) And the community has not been capitalizing those. So I think that still qualifies because those are not reachable from `globalThis`, whereas what we're talking about is. I would love to, if anyone has an example, however, of namespace by a library with lower case, I would actually love to see those. I'm sure there are some.

PFC: I think JHD had examples of both.

JHD: There's examples of both, but I think that the the challenge is that what there is not many examples of is a namespace object that contains another namespace object, because in the case of userland things, the top level namespace object is often an npm package which for like eight of the last 11 years have not allowed capital letters in the name. So you can't get any signal from that, and you'd need really the nested namespace object in multiple levels to be able to tell. And that is a very rare pattern. I've expressed my preference. If I thought I had a convincing case for it, I would offer it, but I don't think there's a lot of convincing evidence either way really, for the nested ones.

MAH: I know one module pattern that followed this namespace somewhat globally accessible pattern is the Closure Compiler, but I don't remember if it was capitalized by convention or not.

MM: We agree that the thing that we're calling the module namespace object is simply a different concept than the thing that in this conversation we're calling a namespace object. I think we should be concerned about creating confusion if we use the term namespace for both concepts. Can we rename one of them?

KG: I don't think this comes up enough to be that necessary. How often do we introduce a new "namespace object" (in this sense)? Once every two years?

MM: I don't have a suggestion. In the absence of a suggestion, there's nothing to rename it to.

SYG: Yeah, I think I agree with KG here that sorting this out is for our benefit as delegates in be precise in our meaning for future proposals. I think the broader community will probably say stuff like `Math` and `Atomics` and `Temporal.Now`, and continue to call module namespace objects, module namespace objects.

MM: I don't have a better suggestion.

SYG: My concrete suggestion is, so long as the phrase 'module namespace object' remains like an idiom for us, I don't see the need yet to rename it.

MM: I'm neutral on which one is which one. I actually agree that module namespace object is probably the harder one to rename than the category that describes things like `Math` and `Atomics` and `Temporal` and `Temporal.Now`. Maybe we can come up with another term for that category that I also still don't have a suggestion for.

SYG: Yeah, I don't really either. Comparisons to other languages don't really help. We've already saw the module versus namespace kind of conflation with TypeScript in the previous day's discussion. The queue is empty now. So I would like to ask for consensus for capitalization to the two action items, 1) to get agreement here that we will rename `Temporal.now` to capitalized N, and 2) we will try to write down what we have discussed for what we think a namespace object is somewhere. I guess it should go into the spec, or should it go in how-we-work?

PFC: I had this on my next slide, that we had already actually discussed last meeting on adding some other information about namespaces to how-we-work. And that action was still open because we didn't have anybody volunteering to do that. So this is my next slide that we need a volunteer to write this up in how-we-work.

MM: Just to make sure I understand the coupling, or the lack of coupling here, the fact that all of us are agreed on capital now is adequate for Temporal to proceed independent of resolving. The rest of this question—

SYG: Yes.

MM: Okay. With regard to the rest of the question, I don't think it needs to be in the spec. Somebody does feel like it should be in the spec? I certainly would not be unhappy for it to be in the spec, but I think writing it up in how-we-work is perfectly adequate.

SYG: I'll volunteer to write that up and I would appreciate your review, MM.

MM: Yeah. And MAH.

WH: Yes, I agree on all counts.

PFC: Great. It sounds like we're done then.

### Conclusion/Resolution

- Namespace objects will be capitalized, including when nested.
  - This means `Temporal.now` is renamed to `Temporal.Now`
- SYG to write up a definition of "namespace object"

## Realms for Stage 3 (continued)

CP: We added a couple of slides to try to shape the conversation based on the discussion that we had two days ago and kind of with, with this topic about the scope of the current proposal and specifically the direct access to objects, and the two slides are very simple. The first one is an example trying to demonstrate how much hazard you have to deal with when you try to use an object from another realm directly, this is a simple example. Assuming that you’re a library author and this one of the use cases that I know Jordan has talked about multiple times, being able to create a library that is resilient to changes that are happening in the current realm, specifically, polyfills and other things that developers do today to modify the intrinsics. This is a good example of the kind of things that Jordan has in mind for realms with direct access to objects. In this particular example, we're accessing the global object from a newly created realm. Let's call it “the other realm” and accessing a couple of intrinsics from the global object of the new realm. In this case, the slice and indexOf intrinsics, which are very common operations that you would do when you're doing any kind of array manipulation. I’m assuming that we have, somehow, access to a function that returns a fibonacci sequence, a simple function that when you call it with a number, it returns an array, or an array-like. Something that looks like an array that has the Fibonacci sequence for the number that you passed into it. It’s a very simple example, it's just a hypothetical Library. Don't go too much into the details there when the sequence comes back, which is an array-like, then you're going to use the indexOf intrinsic operation to try to find the index of the min number passed as the first argument. Let's assume that the minimum is always present. Let's not get into too much of the potential things that can go wrong here in this algorithm. Assuming that the index is there, then you're slicing that array in order to get the segment that you care about. This library is supposed to be called the Fibonacci Segment, so it's giving you a segment of the Fibonacci sequence, and you are just trying to create code that is resilient to any environment modification, so that this function can be called without being affected by the current environment. Is this safe? The answer to that question is, “no”, this is not safe. And when I say safe, I'm not talking about security, I’m simply talking about the fact that this is very hazardous for the library author and whoever uses this library and we can explain why. I will give you a minute to think about it and let’s try to highlight the problem exhibited here.

WH: I'm trying to understand your slide. The `fibonacciSequence` function returns an array from which Realm?

CP: It is an array-like, and let us assume that it is from the realm that is executing this code on, which is not the other realm. Let's assume that for the sake of simplicity.

JHD: I mean, the specific potential issue here is that this will return an array whose `.constructor` is `otherRealmGlobalThis.Array`. That's not `Array`. But this is only an issue If somebody's using `instanceof` on arrays, which we've all been trained not to do for 10 years.

CP: right, but there is a list of other problems here. I did a little bit of research on these, I think, about a year ago, when I was doing a research around the type of intrinsics that we have in the language. At that point, we were talking about what we call the undeniable intrinsics and some other kind of intrinsic. So I did some research on slicing and dicing the intrinsics, and at the time I identified two types of intrinsics when it comes to leaking realm information. I have one slide for that. At the time, I used these two terms: “computational intrinsics” and “realm bound intinsics”. Computational intrinsics are any intrinsics that when you call it with whatever arguments, they return a primitive value, so they don't leak any realm's specific data or specific identity. While realm-bound intrinsics do leak because the values returned are objects that are somehow bound to the realm associated to the function that you're calling, which is an intrinsic. Additional they both leak, and this is the biggest challenge, they both leak if an error occurs when you call that intrinsic, the error itself is going to be leaking information about the realm, it will be an error object with `__proto__` set to an intrinsic from the realm. And this problem is, in my opinion, fatal in many cases, fatal for library authors and consumers, because people are going to bang their heads against the wall to try to figure out what's going on. Why is this thing important? Let's assume that instead of you actually using an array you're dealing with a Date objects. If you’re doing any kind of date operation, you’re doing any creation of new dates objects of any kind, you're going to run into these kinds of problems. Any intrinsic, and we don't have a survey of how many of them fall into these two categories, but I can tell you that many of them will be leaking information on the return value, and the majority of them could potentially leak information through an error, and this is the kind of things that we believe having the callable boundary eliminate entirely. I would say that for you particular use cases of using realms to be able to get brand-new intrinsics, I would say it's probably not economically viable because you have to defend against all these problems and then the people that are using your library, the returning values that are not from the same realm that you are on, it will be a deal breaker for many of them as well. That's my opinion on the matter but it is a reality that we have faced multiple times when dealing with multiple realms with the iframes and the research that we have done around it. So I hope that this information also helps others to understand that there is a real problem when it comes to using anything coming from another realm with direct access to it.

JHD: I had a quick clarifying question, CP. If this is using callable realms, how would it work?

CP: If you are using a callable realm, You have to do some gymnastics, because you're trying to do something with a data structure. In this case, if the array contains multiple primitive values, in order for you to pass that information to the outer realm, you have to do certain gymnastics, I would call it like that, if the array that you're going to leak is an array of primitive values. And this is a trick that we use in the membrane implementation that we create just to kind of provide a proof of concept. If what you're leaking is an array of primitive values. In that case, what you could do if the array is never going to exceed the maximum amount of argument that a function allows, you can use a wrapped function from the outer realm to call it with an array as arguments, so you do `Reflect.apply` on it and you basically provide all these arguments on the other end, you destruct the arguments, and you get an array from the outer realm. That's a trick that we use sometimes. If the array has more items, you have to do other kinds of tricks. Again, it's part of what we call the boilerplate that you have to do when you're sharing data and that data has some identity and so on. It's obviously complicated, but it doesn't have these footgun.

JHD: Arrays are kind of a unique example here, obviously, because we've all been using `Array.isArray` for a long time and Array.isArray tunnels through proxies. So it's like one example but we're...

CP: sorry. I'm interrupting you here because I want to make sure that we all understand that it's not really about `Array.isArray`. Rick Waldron raised this yesterday when we were talking about this. Assume that the user of your library is using a polyfill for `Array.prototype.foo`, let’s assume that for a second. They have a polyfill for it so they can use it in any Array instance that they get, they can do `x.foo` and that does something. If that's the case, you're returning an array that they assume will have `.foo` on it, but it's not true because the `__proto__` is from the other realm. So they lose the ability to call `foo()` on that one, and they will be banging their heads against the wall saying, why don't we have `foo()` here? What's going on with you? Array.isArray and it will say, it's an array. Why I don't have `.foo()` if I loaded the polyfill, what's going on? That's the kind of thing that Rick was saying yesterday. Well, you have to dig into the code. And if you don't have a trained eye for this, you'll never find that out.

CP: So yes, it's not only about recognizing that it is an array. It's also about losing the ability to have polyfills and any patches for anything on their array from the main window because you're not going to figure out what's going on. You have to be a trained eye to look at these cases and figure out that those arrays are actually coming from another realm. Those are the kind of things that you will see. It's not only about detecting types, and with all the types of objects that you know, how we brand check, or any kind of check to know what the problems are, the problem is even bigger. Date is another good example of this.

JHD: Date has a brand check.

### Conclusion/Resolution

No resolution

## Realms for Stage 3 (Continued)

Presenter: Caridy Patiño (CP)

- [proposal](https://github.com/tc39/proposal-realms)
- [slides](https://docs.google.com/presentation/d/1MgrUnQH25gDVosKnH10n9n9msvrLkdaHI0taQgOWRcs/edit#slide=id.ge435a9058a_0_0)

CP: All right. So, that was the example that we wanted to show. You don't have any new information. The slides we use have the depending questions at the time that we break up two days ago. But I hope that the example that we show is also adding good information to why we believe what we were saying here in slide. Number six, we were saying that we believe that the call boundaries the right approach at the moment. And and because eliminates all these movies hassle, that we mentioned we mentioned, the example

MM: yeah, I just want to add a qualification to make sure to clarify the example. Everything they said about the example, the points that they're making with the example, I completely endorse all of points that are made in the example. The thing that might be misleading about this particular example, is that all of the array methods are generic. They work on anything. I like and that includes a proxy to array. Not because it punches through proxy. is nothing to do with that. It just has to do with the fact that element access and asking for the length all work fine, through proxies and all of the array methods, only assume that date is an example that does not work through membranes but but there's you to date does not - there's nothing on Date that produces as colorful an example, so just sort of understand this example as if the array methods were builtins that assumed array instances.

CP: Well Mark, I think disagree on this one because really all these intrinsics, they all- obviously Array is special, but all the intrinsic that mostly using internal slots and accessing internet has lots to do operations the objects that are given to them and so on and they work just fine across Realms. So even if the thing is a date, you will still be able to use intrinsics for the other realms to access and do operations on them. The problem is when the intrinsic is actually creating a new object and returning that object to the caller or throwing an error in the process

MM: So it is the case that those would work with direct realm to realm object access but they would not work through a membrane. This is misleading because it - say this Example, if the separation was that all the Realms were only reachable through callable boundaries and were further insulated membranes. This example would still work through a membrane.

CP: I think I see what you mean.

MM: If it was, for example, Promises is a good example where the abstractions both use internal slots and create new Promises and that would have exactly the hazard you're talking about here, that would have a different semantics through a membrane. It's a little bit of a complex example because it doesn't have - because a proxy for a Promise is still a thenable, it actually practically has a very similar semantics that, but it would still be in fact different. In any case, like I said, the important point is that I completely endorse all the points you are using this slide to make

GCL: I’m curious if There's a way to allocate an array buffer on one side of the realm boundary and then access the data from that array buffer, On the other data, I'm sorry on the other side without going through the whole membrane proxy thing for each individual byte access.

JWK: I think the answer is no in the current spec but since hosts can provide their own additional global functions on the realm's global objects, I think the host can provide some mechanism to directly share array buffers between two realms.

LEO: Okay, sorry. go ahead. Yeah, I'm not assuming what will be done in host but yes it's it's true that there is no functionality today in this Epi to cooperate with any any sort of shared buffers crossrealms the day Outside

GCL: the data doesn't need to be accessible on both sides at once, but it should be possible. But that the question I'm asking is if it can be moved from one side to the other without byte by moving it through the membrane because that would be very swell.

CP: so, we talk about something similar with records on tuples when we were saying, well one, we get those. Obviously those are shared between the two realms because they don't carry any identity. So that's one thing to consider. The other thing is that, nothing prevents us from in the future adding more wrapping mechanisms. We have only the function wrapper right now, and if you try to pass something else, that is an update with throwing errors because the current spec, but it opens the door for in the future allows certain objects to be passed, if we can Define the semantics of what it means to ensure between the two Realms and the corresponding identities that cannot be really easily used in those structures, so we have to figure something about that. If we can, if we want to share the same byte basically because it is in the same process, anyways.

GCL: It is providing this functionality, a large enough change. That it would not want to be pursued as part of this proposal?

CP: We haven't explored that. We've focused on the basics knowing that with the basic Foundation of pieces here with the callables, you will able to somehow create more advanced mechanism to Shared bits between the two Realms that could be a membrane could be some other mechanism that you use. You could do it, a Boilerplate to try to share that data without copying the device. But I don't know. I haven't, I don't don't think about that much.

GCL: Okay, that's interesting. I guess - yeah, I guess it'll just have to be thought about separately.

CP: Again, you will go from throwing an error to allowing that object to be passed around, but you have to explore that at some point.

USA: That's it. Surprisingly, there is nothing else on the queue.

LEO: We've had the topics from Daniel from the last meeting that I still want to give space for them to present. But I at this that we were discussing these constraints I wonder if it's time again that we can ask for For the stage advancement,

USA: I guess you could ask, I guess you could ask again And in after that we could see if anyone would like to talk about it

LEO: So JHD, are you feeling about it? I know you bring the main objection so far.

JHD: I have a few classes of concerns. So one is that this feels like a really weird and magic API for me. It's a very clever solution to the problem and I hear that it achieves the goals that people who want membranes have because it lets them use a membrane library still, but then it gives you better results with it and you know, takes more of the complexity and puts it in the platform. I get that. And I hear that AMP has a use case for which membranes work, but are overkill and that this all works in a more granular way. But this does not solve all of the use cases that this proposal went into Stage 2 with a solution for, regardless of what the original stated motivation was. That was the assumption at least that I was under, and I'm assuming that everyone else was under, when it went into stage 2. Then the other class of concern is separate from the strangeness of this new mechanism: the other concern is what then happens with those use cases. And I've certainly seen some examples like you've shown and heard some arguments that it's easy - if you have direct object access it is easy to get things wrong and that is certainly true. And it is certainly likely that there are alternative approaches than direct object access to another realm that would achieve the goals that I'm concerned about in ways that are harder to get wrong. I'm concerned that if this advances to stage 3 with this new form that has a restricted - like a subset of use cases met, that the sort of implied consensus that we also want to solve those other problems. Even if everyone may not have agreed with that like it would I would say implied is kind of gone. And that means that if I want to try and solve that use case, not only do I have to start from scratch with a new proposal, but I also have to come up with a mechanism that a lot of very experienced and intelligent people have not come up with, and admittedly weren't specifically trying to come up with, but it just kind of it's very strange to me that within stage 2 the shape of a solution would change so drastically such that it's almost a completely different proposal.

CP: Can you be more specific about what those use cases you feel that this is not solving? assuming that obviously the one that we just discussed, we're saying doesn't solve that because that's problematic?

JHD: Your example addresses certainly a big class of the use cases they have which is wanting to reduce the footprint of what I have to cache as first run code, such that I can then write robust code to write code that will run robustly later despite future modification of globalThis and the associated things. I hear the feedback that it's difficult to write that example correctly, but it's entirely possible to write it correctly. And the wrapper that I would write would construct a realm for myself, it would lock it down, maybe even with ses, but it would lock it down in some ways, and then it would I could even find functions and wrap them and like switch the prototypes and so on, there's there's lots of ways that it can be. Be constructed to be so that for my purposes, it will be correct. I'm not claiming that's easy.

CP: but I'm a journey probably not economically viable but let your it's yeah I mean you're gonna.

MM: Yeah. Yeah. Thanks I want to address exactly the issue you're raising. There is an existing pattern that one cannot you does not solve the problem, but I think the same as which I'll explain in a moment what that existing pattern But my question to you is the current the circumstances under which that pattern does not solve the problem. I believe your scenario equally does not solve the problem. Okay. The pattern that many projects use including the SES shim itself is that it is assumes that it's running first in its realm that the realm has not yet been corrupted at the time that it is running its module initialization. So during module initialization, it grabs the things that needs to remain. That it's going to then apply later and and the SES shim actually doesn't need to be as aggressive on that for security reasons, but it's aggressive about it anyway. In order for shim fidelity with spec, the spec specifies blah blah uses an internal method. It doesn't use the current binding, and the only way shim can emulate that is to grab the original binding before or anything gets corrupted, so it can continue to use the original binary. So that's a common practice, many systems of use that for years. The counter argument. Is that well, what if it doesn't run first and if that and I don't see another counter argument to it...

JHD: that's that's not the problem I'm trying to solve, okay. So I think it is impossible to avoid having that problem. Once once you don't run first, all bets off.

MM: Good.

CP: Even the Realms can...

JHD: My concern is about reducing the footprint and scope of what I have to cache or hold onto in that first-run code so that it's all available later, and the original Realms gives me one thing I have to grab. Currently, I have a library that has 15 million downloads a week that I use for all my shims, that grabs everything and I have to explicitly, add each thing I need, and then all of the shims have to load them all. It's a convenience and kind of scalability issue whereas, with the realm approach, I can do it "one and done" to some degree.

CP: Well, one thing that we want to mention about this particular thing, Jordan is have done some it serves around these as well, in terms of birth, for four months. And if you grab that global object and you use all these do notations to access the things that you want when you eat it, you're going to pay the penalty as well. So that's another thing that at least another reason, why we catch everything because...

JHD: I am 100% unconcerned with performance until I have 100% ensured correctness. I will be happy to cross that bridge when I come to it.

MM: So so inside the SES shim we have module called Commons. Commons, that grabs a whole of stuff and then re-exports it. So that under re-exports it, under the expected name. So, then you get the original by importing it from Commons rather than just using it as a global. Our Commons does not have full coverage of everything. You might need it just covers the stuff we do need, but wouldn't one module that covers everything you might need that all of your other shims could then import from satisfy your desire just as well.

JHD: I'd have to - I'm not a hundred percent clear like I the only thing that works is some sort of object that other people can't mess with so that can reach the built-ins, which are usually all built-in functions that And I need to be able to invoke and the specific thing that would that makes this especially difficult is function.Prototype. call,apply, and bind - like I have to jump through a bunch of Hoops to call by and everything in advance because can't rely on those available, whereas I could rely on them to be in the other realm as long as I protected access to function prototypes.

MM: So I know exactly the call bind problem you're talking about. Back in the es5 days, I showed a really complex pattern for doing it safely in ES5. Thankfully with starting with es6 with reflect.apply and with a triple dot, we've got a the un-curry, this abstraction is very, very straightforward. So, what what our Commons thing does is for everything, where the the original functionality is in a `this` sensitive method, The thing that we grab and re-export is un-curry `this` of Method.

CP: We have talked about these multiple time to obviously, many people are doing, we do these, as well as software is extensible, sometimes we talk about having the ability to your simply at any given time in a realm, you can access all the intrinsics. You don't need to create a realm to get the intrinsics of the realm that you're running on. That's better than creating a realm to get and all the other realm transects that are new, you get your own intrinsic in the previous iteration of the realm proposal. We have a getter called intrinsics that returns these object that contains all the intrinsics specified in 262. And those intrinsic could be accessed by the percentage interested in the same name, which wasn't Nice. But we cool explore some of that, but not related to Rome because you wanted to get it from the room that you are on. You don't care about creating a new realm. I believe that's a very elegant solution that we can introduce as that means that anyone can use it.

JHD: You basically just described my `get-intrinsics` implementation. So yeah, I mean, you're right, I don't need all of Realms for that use case. I need something for that use case, and Realms would have solved it - all be it in a way that requires careful work to do correctly.

MM: So would you would you agree that something that gave you all of the original intrinsics from your own realm? When I say original, I don't mean unfortunately Which not I mean of course.

JHD: I mean only what is available at the moment that I've first run my code.

MM: Good. Thank you. Absolutely. So would you agree that a get Originals in that sense? Because that gave you the originals from your own realm, does not gives you everything that you're asking for without the hazards that Caridy pointed out with his examples. So it's actually a much more robust form of those intrinsics to proceed to use.

JHD: Yes.

MM: great!

CP: And that could be also if you - if you don't know where to put it, I believe we should put it in the realm constructor.

USA: We have some things on the queue just to give some status. There's been some chat the DC 39, delegates channel, one of the things that I caffeine has mentioned And that I think it's important if Kevin wants to bring it here but, also met you has some that, I think it's interesting for these days.

MAH: Yeah, I think similar idea, it seems that what Jordan is trying to do is get to the original intrinsics. And there are multiple options. One is a imperative API that you can call that's existing right now. Another one could be to re-explore the standard modules where you would be able to access those original intinsics things by importing them.

JHD: that has the same problem as built-in modules themselves, which is unless I can synchronously access them in scripts, it is not sufficient.

MAH: so, you You want them not only in

JHD: just like globals, I'd want to be able to synchronously get them everywhere in JavaScript.

MAH: Then I suppose our Global intrinsic a global imperative call is the only only way

CP: For me, it's just a matter of finding where to put that function and then we can probably dig out some of the -- well, you already have a proposal, I think somehow raise so we can explore that. that. But again, it's might be some in, might have some intersection semantics with the realms proposal if he happens to be placed into the map Constructor. But other than that, it's just a feature that can be explored as a separate proposal.

MAH: as I just posted in the queue, there has actually been other use cases for this, which is also accessing hidden intrinsics to be able to go and lock them down and in lockdown API.

CP: Right. I absolutely feel that are very, very difficult to get your hands on and very hazardous. And I think Mark has some documents around how to get some of those. But yeah, this is definitely a feature that we have been talking about for quite some time.

MM: Yeah, The shim grabs all of them and has to grab all of them because it's security depends, on freezing all of them. And that means that there's always the that if TC39 introduces what's a new syntax from which a new intrinsic is somehow reachable. There's no way that old says asks can stay secure in the face of those additions. But if there was a get intrinsics query, that would give you all of the intrinsics, all of the primordials whether they're reachable by name, navigation, or syntax or whatever, then we could reliably freeze them. Also there's a lot of good reason to provide this query anyway.

JHD: So, yeah, I think the other challenge, related to what we just talked about. That's been talked about in Matrix Is that like, as you said, some of the intrinsics are not reachable off the global. So it's actually not trivial to just Loop over the global and grab everything. So, yeah, I think I agree that that what has been lightly sketched out some sort of function that I can cache and then call that will get you know the previous code could have replaced. But that will get All the originals at that time is, would solve my use case without direct realm object access?

MM: For sure, I would solve it better.

JHD: Yeah, I would agree with that, the Yes. If so then what are, what is the suggestion based on that?

MM: We've identified a need with some concrete ideas of possible API approaches for satisfying the need, I think we've got something that qualifies very well for a new stage one proposal. I think we should address that need there and we should realize that since the need can be addressed and that there's nothing about the realm proposal in its current state that impedes that in any way that we should allow the Realms proposal in its current state to proceed to stage 3.

JHD: so, the queue is empty. I think that seems a reasonable path forward under one - "condition" is the wrong word because that implies leverage but under one circumstance, which is that the "direct object access for Realms" path does not appear to me that there will ever that will ever be allowed unless the current membership of TC39 completely turns over. It would be kind of weird to ask for consensus on for stage 1 on a proposal or a problem that nothing was written up and put on the agenda before right now. So it'd be nice if that could be granted, but that alone isn't sufficient because the real piece is, I would need to know - in the same way as when realms went to stage 2, it was clearly telegraphed that there were these potential blocking concerns for the direct object access approach, right? Is there anyone in the room who has any reason to believe that such a proposal modulo, you know, dealing with various sorts of concerns that proposals run across, but that such a proposal would, would not have a path toward stage 4. Does that make sense? What I'm asking, I'm trying to figure out if it's worth me investing my time.

MM: Write the proposal, you're referring to is get in transits proposal. We Sure, yes. Okay, Good question.

USA: Is it something that you'd like a temperature check on.

JHD: I mean, a temperature check seems nice, I think specifically if it would, even though everyone is always allowed at any time to say, "I have an objection" or "I have a constraint, even though I never mentioned it before", it would feel really bad if I put in time on a proposal like this and then came back in six months, a year, two months, whatever, and was surprised with a sudden constraint. It's happened to me once before, and it is not a fun thing to do and it's very demotivating. So I really just want to make sure that if there's any possibility that any one, could guess that, that might happen that I could get some hints about it now so that I know whether it's worth putting in my time, this is not really a technical or procedural question, I'm sort of asking you a personal question to try to make sure that I'm not about to waste my time.

CP: I don't honestly, I don't see any problem with that moving forward, we have plenty of experience on that, and the only thing that I can offer, there is collaboration. So we can put some effort as well to try to push for it, because this is the reality that we are on when you write libraries right? You have to cache all these things. Otherwise you're just going to be trouble and SES of as well, does that? So I think it's sufficient manpower to work toward. These are such as it's a proposal.

LEO: From my reading as well. I think you re very welcomed at the size of the group to continue a lot of discussion for this and making sure like, we provide feedback and all the work that we need to, to move this forward because I think Mark would be interested. I am assuming Mark who can confirm that right now.

MM: Yeah. So, absolutely definitely interested in collaborating on this proposal and seeing it move forward. We cannot write a session that stays secure into the future without something like this.

USA: one question from Greg, from the chat is Jordan are you looking for implementer concern?

JHD: Yeah, I mean in particular, since the of the friction that Realms at that has been implemented concerned. So I want to I, particularly for that. Thank you Greg.

LEO: Yeah, yeah, Jordan. I just think one of the understanding for some people here I think there is an interest and if I had to tell you like there is interesting but the Silence from many Who doesn't mean like everyone is on board with these all the way to two stage four, of course, because for me to go through the stage process, you have our support. but we cannot offer a guarantee.

CP: Yeah, I want to mention a couple of things because there are some prior art on these from Dave Herman's days when he was working on realms with me, the name doesn't seems like a problem we went from A string value with the percentage to string simple name, in camel case, at the time, I believe I don't see the same problem that implementers are scene where they Global names that needs to be stopped the end, the global object. Because in this particular case, where reference to 262 API that we are exposing via a different name space object. It will become calling. A mysterious object I believe from the previous discussion will be probably kind of a name is space object kind of thing. So, in the sense that you have access to all these other things there, we need to discuss if we need to do the `.call` on, then we can use them somehow with reflect our callers or light or are we going to eliminate or a hassle with a `.call`? Those are things that but I don't see any potential issues are not implemented and implemented obviously but I don't see for another discussion that we have about realm that would be problematic because you already have access to all of that. Anyways, you today you have access to all of that, the only potential things that I believe we could discuss with implementers. is is the concern that Shu and Domenic and some other folks mentioned about putting in the developer's mind that there is a separation between 262 and HTML and the web platform in general. Because in that API, you probably won't be have things that are in 262 but doesn't seems like a problem to me on the global object itself. But in this case, I don't think it's a problem.

SYG: we've been talking about this in Matrix and make sure it's and I keep getting confused. I want to say it. Try to be confuse myself and get clear on what the getOriginals thing that Jordan is talking about. Here is the concrete example, I Do not modify the object.prototype. I don't give it a different value. I don't think I can. Anyway, I add a new property - or rather, I override one of the methods with my own. In this getOriginals API, when I say, getOriginal object dot prototype.%% does that. me the not only the original object, but the original object pre-modification.

JHD: No, in that like in that if somebody has simply mutated the object and I'm asking for the object, I want the object by identity, and so, it wouldn't any sense to me to have like a snapshot of it. It's more akin to like, if someone, if I cache getIntrinsic and then later, somebody says math.pi equals 3. And I get the math.Pi intrinsic. It will give me the value of pi.

SYG: Yes, I think that is unproblematic. What is problematic for memory constraints especially is if we not have to give you back the identity they argue original object with the same identity but the old original actual original object in which case, you know that directly contradicts the need for identity.

JHD: If change the object, let's say the `Object.prototype` object to something else that's empty, and then I asked for `Object.prototype.toString`, I need to get the "original" `toString` function.

SYG: Yeah, I think that's unproblematic.

MM: I think we need to be very Clear here. Jordan's way of stating it using dot invites confusion.

SYG: let me restate how I understand it to see if it makes sense. Supposed that getOriginals for the sake of just for the sake of discussion takes a string. string is in the format of how we format intrinsics in the spec, which is % and then what looks like dot access. But really, that's just a convention, and then close by a percent sign. Okay, what I understand Jordan getting saying is that if you type getOriginals("%object.prototype.keys"), that will give you the function and I think Is unproblematic. I was confirming. That what is problematic is that if you want the type `getOriginals("%object.prototype.keys").slice` where the `.slice`is an actual property access but that would be the original slice. If that was the guarantee that you want that is problem, but it sounds like that is not the guarantee you want.

JHD: awesome.

CP: Yeah, I can confirm. Yeah and and they there is only one detailed Shu that maybe is important which is the fact that we have what we call undeniable intrinsics. Those are can be created from or from syntax. you modified, you modify the value of our array.prototype and you try to access the arena rate of prototype, you still the One, the intrinsic one. So it's very similar to what you just playing but even what I'm trying to say is that even for undeniable the same applies, you will get the reference that is defined in 262 to the object. That is an undeniable object intrinsic object

USA: So now that that's out of the way you can Greg’s question, which is from stage 3. I guess I really do want to ask for that. Yes, sure. That's why we are here. Can we get a stage three on the realms proposal?

JHD: That's fine with me.

USA: Does anyone want to explicitly support? actually wanted to express support. Thank you.

AKI: Looks like JWK is on the queue to say so.

USA: Jack, do you want to see that load?

JWK: Yeah, I'm supporting stage 3. We have been waiting for this for too long.

CP:Tell me about it.

### Conclusion/Resolution

- Stage 3
- Bikeshed the name "Realm" for one more meeting.
  - Engines (at least V8, Node, FF) agree **not** to ship unflagged until after bikeshedding

## `getOriginals` for stage 1

Presenter: Jordan Harband (JHD)

USA: Yeah. And next up we have Jordan couldn't do you want to ask for stage 1? Yeah.

JHD: So even though I don't yet have a repository, we sort of sketched it out here. I would be happy to make one tomorrow after I get some sleep. is there any reason that could not be stage 1 already?

SYG: So, I don't want to slow down your word, I don't want them walking, so let me hear from you. Do you think that if we wait for an official explain it, I'm proposing everything through grants X3 would that slow down velocity for you?

JHD: No, it's just a nice signal. I think stage one is a problem statement, right? So the specifics of the solution don't need to be explained or understood just yet but - like I'm happy to write up that explainer, it's more like, if the problem is unclear to someone such that they are not willing to or not comfortable, making it stage 1 without that explainer, then obviously it would need to wait. But there's a possibility we don't meet tomorrow, otherwise I would just say let's revisit it tomorrow.

GC: I say given the confusion surrounding at least the discussion on this API in Matrix over the last ten minutes. think it would be good to have some. Some some things written down concretely that we can understand before discussing this more,

CP: yeah, you're on a weekend weekend, trailblaze these and get it next meeting for stage 1 and 2 maybe. I can't even get all the pieces in.

WH: I'm also a bit unclear as to what is going into stage one and I would note that there is a deadline to post documents a number of days in advance of a meeting so we can review them.

JHD: Sure. And I mean that and the lack of materials are both valid reasons to procedurally reject stage 1 - but that doesn't mean you have to reject it. It sounds like there's at least a few people that aren't comfortable with stage 1 yet.

WH: Yeah, but I also want to mention that I do like where you're going with this.

JWK: So I didn't catch up with the conversation before. What is the use case? Why do we need an API for it?

JHD: So that people can write code, that can't be trivially broken by someone later messing with the environment like node core uses this, because if I do `delete Function.prototype.call` node core just craps itself and dies immediately. All over node core, they're trying to slowly patch this problem so that its robust against user modification of the platform and all of my npm packages are written in ways where as long as they run first, before user code messes with anything, then they are robust against user code messing with things later. getIntrinsic would be a much more convenient and potentially more performant (although that's less of a concern for me) way to to write this robust code.

JWK:I guess that must be able to mock otherwise it might break visualization.

KG: Right. So the assumption is that you are running first so that you can save off a copy of getOriginals that no one else will thereafter be in a position to modify.

JWK: if they are running with why need you can just grab those by yourself

JHD: I might define a function first, but by the time that function runs, a bunch of ad code might have run or user extensions in their browser, and messed with stuff, and in order for the the body of the function to be robust, I have to have cached everything that it's going to use, and in to protect methods, I have to call-bind them in a way that they don't rely on `.call` being present at runtime. I can already do this - I have a `get-intrinsic` library that does this, but having it built into the platform, just like the Realms proposal, would make things a lot simpler and harder to get wrong.

JWK: The realms use case seems much larger than getIntrinsics. It seems like a very limited use case. I don't know if it's worth it to do that.

JHD: Yes, it's a fair point that there is a small number of people that may utilize that API, but I mean the that is a significant percentage of npm's download traffic already uses my `get-intrinsic` library so the end users will benefit from that. A lot of end users will benefit from the code even if they don't use it directly. I think this may also be true of Realms.

JWK: One of the use cases I can imagine is that I can get the async function prototype without actually using an async function literal or that might not be able to ship to some old browsers.

JHD: Could you rephrase that question? I'm not sure. I understood

JWK: some intrinsics require some newer syntax reach, for example, async function. AsyncGeneratorPrototype requires an async generator literal to get. And if we ship it, it breaks on the old browser.

JHD: True, and my `get-intrinsic` library currently handles that by using `eval` to evaluate. The syntax is such that it won't fail to parse an older browsers, but it will still work with `eval` inside a try catch. It's gross. I would love to not have to ship that and, you know, be able to work in CSP environments, for example, but like the yeah, I mean so so then one day it is getting the native get intrinsic function is at this point already has all of the current syntax. So like that was alright, for a get intrinsic polyfill to solve which way.

JWK: That's the only reason why I think getting intrinsics might be useful.

JHD: Thank you.

MM: I want to give a piece of history as a very concrete and Vivid answer to Jack-works and to the current discussion there are hidden intrinsics that you can only reach inderect syntax. And by indirect means starting syntax more than the, the iterator prototypes you have to actually create an iterator and walk the Prototype chain. It's really quite messy. but the the history that I want to give is that the old SES, the one that we did at Google and we're using for to secure properties at Google. We got a responsible disclosure vulnerability report that in which the which was due to some browsers starting to ship async generators. and the there is no way for the old code to discover that there are new intrinsics that it needed to freeze. So without something like this, I think genuinely impossible for a security system like the session to protect itself from the introduction of new hidden intrinsics. So I think that makes a very compelling case for something like this

CZW: Yep. So I may just miss some of the contexts. I'm just wondering no proposal text to check at just wondering that does that implies a direct object access across realms or just grabbed the intrinsics from the current realm.

JHD: Yeah, my assumption is it would be available within each realm and it would refer to the realm.

JWK: If avoiding pollution is the main use case why not we introduced the SES lockdown directly?

CP: It's not only locking down is being used extensively…

JHD: to explicitly to not lock down intrinsic, to leave them like breakable. So how do I could be robust?

MM: Well, let me answer for SES since the, that was directly. The question SES does plan to propose a lockdown primitive, the lockdown primitive would do this. So, the SES example here is more of an the fact that anything that needs to enumerate, all the intrinsics, whether it knows about them statically or not would benefit from something like this or would suffer from not having it. The session is an example of that but session, as proposal would no longer being examples.

CZW: does that mean calling the intrinsic get a copy of the get the same intrinsic, chat function.

JWK: Each room has its different solutions X. So X So, X must be the current realms

CZW: I mean I mean the article get coloring, the Gathering tricks and made some modifications on it like that adding some property on or either. My not change either in intrinsic. how it works. But it but it can be adding some next say, observable properties only.

JHD: Yeah. I mean if someone sticks like a foo property, an object that prototype and I the object, a prototype intrinsic, the object, I get will have a foo property. that is totally fine. I'm not trying to get an original snapshot. I'm just trying to be able to get the original functions primarily

CZW: So people can change the intrinsics when they getting run first and the later on the code cannot get the original intrinsics of a function. They will be seeing the modified one. If they are not...

JHD: It is impossible and should remain so to protect against code that runs before you - but it is possible and should be much easier to do, to protect against code that runs after you.

USA: Do we have any consensus in this? No, Jordan. Do you think you'd like to come back to this next meeting?

JHD: Yeah, I think there's no consensus for stage 1 for it, but I haven't heard any obvious blockers for stage 1 except I need to have materials prepared before the deadline. So with that understanding, I will prepare it and consider it "not a waste of my time" and I will plan to come back at the next meeting with that request. So thank you, everyone. I'm sorry to hijack the realms discussion as much as I did.

## Realms (Continuation)

LEO: I'm sorry too to change the directions. just think what you say it is. maybe 30 seconds, we have a little chat here. It's more informative and homework that I that to get interest from other delegates here. Shu you want to speak?

SYG: something that has come up kind of as a lower priority item given all the conversations over the years, is the name of the realm itself as a user expose thing. The there's in Chrome at least there is some hesitancy to expose this. Using the realm for a somewhat, I admit weakness in which is that the concept of a realm has existed for a while. I suspect spec is important technical 262 who and has this used by HTML to mean a bunch of things like this. State as a that is in HTML at least in the state that is available with the page and notably user Realms are not going to be kind of realm. so, over the years, it's one of the topics has been like maybe we should rename go. Escape with the user expose think would be a different name. But as far as I know, nobody has seriously proposed any alternatives. So we've kind of just worked on the higher priority things and just stuck with: results. This is not a blocking consent to stage three. I would like for the vendors who have you know who like to start implementing. takes this stage 3. If we get stage 3, 2 Min, that is ready What I would like buy-in from the other vendors that before any of us ships this thing that we actually have an honest bikeshedding discussion of what to name the thing. and, Yeah, I guess that's it.

CP: Yeah, we yeah, we talked about that briefly in the past there. Uh, we're hoping to find a better name in the past. There have been some suggestion for our, I think there is an issue for it. may be open, we can definitely reopen the discussion and, and if you have any suggestion, anyone in the, in the call, or anyone reading the nodes, that will be great.

SYG: so concretely, I'm asking if representatives from Firefox, Safari and node are present that suppose, and I'd say node because so suppose V8 implements it behind a flag that I requested, no do not off like that under the name Rome until we've had this buyout of discussion.

GCL:Yeah, that's I can guarantee that we will not unflag it.

DE: I want to propose that we time box this bikeshedding to one more meeting. There's only so much byte shooting we can do. Let's try to focus her energy and come up with a final Name by the meeting.

SYG: yeah, and it's difficult to get async participation. Ideally, I would like this to all just happen ond thread or something. But next meeting also cause because it sounds fine to me.

KG: Shu, presumably you would need to come back to committee and say here is the name that we have chosen, we are affirming that name.

SYG: That's correct. What I want to happen async is the bikeshedding discussion and back and forth itself. Once that has happened with people who participated on the async discussion, ideally I would like to then come back to committee since this is a new name then we discussed further. I don't want to have to be like a long-form bikeshedding the discussion in committee. Are representatives of Safari and Firefox here?

DE: I really don't think there's risk that this will just ship in like irreversibly in a month and a half. I don't agree. No food. I don't know if we need to do this. Listen you know hold up because we're going to this really soon.

AKI: Either way, Ian says, SpiderMonkey can commit this.

USA: Okay, then, So this is already 4 minutes above the time box. And so in the interest of time, would anybody mind if the put off the HTML discussion for until later and started with the Ecma proposal?

DE: there's one thing that I wanted to say explicitly, which was that, you know, we try to be upfront when possible about sources of sponsorship. And so the work that I did towards the Realms proposal and HTML integration was - I mean the work that's happened over the last couple of months has been sponsored by Salesforce with their contract with Igalia and we're working on both the realm specification and proxy performance and detached iframe debugging and hopefully in the future realm implementation. So just wanting to be explicit about that disclosure, so thanks.

CP: Awesome. So yeah, we're trying to fund that much as possible. All this work.

### Conclusion/Resolution

See earlier Realms item
