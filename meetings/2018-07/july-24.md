# July 24, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), James Burke (JRB), Maxim Aleksa (MAA),  Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Patrick Soquet (PST), Sam Goto (SGO), Dave Herman (DH), Brendan Eich (BE), Pieter Ouwerkerk (POK), Leo Balter (LEO), Limin Zhu (LZU), Aki Rose (AKI), Ross Kirsling (RKG), Shane Carr (SFC), Kevin Smith (KS), Ron Buckton (RBN), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Godfrey Chan (GCN), Domenic Denicola (DD), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Gus Caplan (GCL), Felipe Balbontín (FBN), Daniel Rosenwasser (DRR), Jonathan Keslin (JKN), Christopher Blappert (CBT), Dean Tribble (DT), Richard Gibson (RGN), Lin Clark (LCK), Allen Wirfs-Brock (AWB), Maggie Pint (MPT), Timothy Gu (TGU), Sebastian Markbåge (SM), Dustin Savery (DSY), Mike Murry (MMY), Alex Vincent (AVT) John-David Dalton (JDD)

Remote:
Rick Waldron (RW), Daniel Ehrenberg (DE), Caridy Patiño (CP), Justin Ridgewell (JRL), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/07.md)

## Opening, welcome and roll call

RJE: (housekeeping)

RJE: Firstly, we have four new voting members. Agoric Systems (SPC), npm (SME), Stripe (OM), and Igalia (SME). Today we'll break at 5pm, and open it up to new members until we're kicked out of the room. We have a CoC, which we follow for our operations in addition to the general TC39/ECMA rules.

BT: (Talking about logistics) We have a queue app. To talk about a certain agenda item, hit the new tab in the queue app and add a new topic. Rex will prompt you when it's your turn to speak. Join the IRC channels (`#tc39` for public discussions and `#tc39-delegates` for backchannel discussions, message BT for access to this).

DE: A reminder: to contribute to TC39, you must be a member of a delegate company or sign our IP agreement. If you are a non-member and didn't sign this form, you must attend as an observer (and not contribute).


## Adoption of Agenda

RJE: Item 9 deferred to Wednesday morning for Maya to attend. Could someone please ping Maya. For Item 10, I propose 2:00pm today. (Approved). Could Brian or Maggie ping him on that? I propose Yulia presents on Wednesday at 10:00am.

YSV: I have two presentations, one 10-minute long presentation and one 20-minute long presentation?

RJE: That could conflict with Dynamic Modules which needs to be presented at 10:30am on Wednesday. How about 10:45am?

YSV: That works.

RJE: Peter Hoddie—you're flexible? (Yes.) DE, does anytime Wednesday work for Decorators? (Yes.) MLS, does Thursday morning work?

MM: Where did the report on the security review end up (Item 9)?

RJE: This was slightly de-prioritized in favor of proposals.

MM: The reason why I proposed to present for an hour was because there's flexibility in the schedule. I'd much rather present for 30 minutes than not at all, however.

#### Conclusion/Resolution

- Agenda Adopted


## Approval of the minutes from last meeting

RJE: Approval?

#### Conclusion/Resolution

- Minutes Approved


## Dates for next meetings

RJE: September 25-27, 2018 at PayPal in New York

AKI: Next meeting will be hosted at PayPal in Lower Manhattan. Logistics will be posted as soon as I have them. While I'm talking, I also have a quick CoC update: everyone is expected to uphold the code of conduct, which is [on GitHub](https://tc39.es/code-of-conduct/). This explains our expectations as well as how to handle things when they go wrong. Separately, I have stickers for TC39, please let me know if you want one (and didn't already take one at JSConf EU).

## Report from the Ecma Secretariat

(István Sebestyén)


- [slides](https://github.com/tc39/Reflector/files/2215322/tc39-2018-037_R1.pdf)

IS: (Presenting slides)

IS: Still need to improve that quality of the PDF conversion of the ECMAScript spec. It's not good right now.

IS: OSC didn't properly respond to clarification requests for the General Assembly.

IS: Update on ECMA Fellows: this is a category suggested by this committee, and it was approved by the General Assembly. A couple of rules: must be proposed by the Technical Committee and will get this status for life, once approved by the GA.

RJE: We should add to the agenda some time to discuss the status of TC39's chairmanship.

WH: Can you clarify what's the issue with the TC39 chairmanship?

IS: We must elect a chair for 2019. It's July, we have a meeting in September, then in November we must hold our election for the 2019 chair. It can be the same person or a different person.

BFS: Do we need to do anything to proceed with the "Submission of JavaScript (ECMAScript Standardization)" to the 5th World Internet Conference in Wuzhen, China?

IS: No, I will submit it on the committee's behalf.

## Project Editors' Reports

### ECMA-262

(Brian Terlson)

BT: A couple of new additions in ES2019: 1) ECMAScript is now a superset of JSON. 2) The catch binding is now optional. Other than that, a few bugfixes, and a few remaining things will be filed in needs-consensus PRs.

### ECMA-402

(Dan Ehrenberg)

DE: I was elected the Interim Editor, and worked in partnership with Mozilla (thanks for the support!). This is JS' built-in internationalization library. Intl has a separate specification also developed by TC39, we meet monthly in a 2-hour phone call to discuss details, but we'd love to hear more from application developers. Please contact me for an invitation to the call.

DE: In terms of PRs, we have:

1. a request to permit unknown fields, which is useful in the Chinese calendar. When locale data suggests something else should be presented that's unexpected, the PR suggests that we return a type "unknown".
2. `Intl.RelativeTimeFormat`: given a number and a unit, it will format the number and wrap it in something that indicates the unit. If the number ends up breaking into multiple parts, we have `formatToParts` to break apart the number. Please take a look at these, and if you have any concerns, we'll be happy to revisit them.
3. `Intl.Locale`: if you give an empty string for the calendar, we now throw a RangeError. We also now use the modern form of canonicalization.
4. `Intl.ListFormat` implementation is now in V8. Given a list of items, we can automatically insert "and" or "or".
5. `Intl.Segmenter` (Stage 3): Segmenter can segment a sentence into its constituent words. Being developed in conjunction with W3C's internationalization WG. Implementation almost complete in V8.

RJE: Questions for DE? (None). Thank you DE!

### ECMA-404

...

### Test262

(Leo Balter)

LEO: Some updates since the last meeting. (Reads slide about Git diff; quite a few changes to Test262). We refactored several tests for Atomics and reviewed repeatedly these changes. Thanks to Rick Waldron and André Bargull for their efforts on this. We're ready to rename Atomics.wake to Atomics.notify (we will discuss this more). We have coverage for Symbol.prototype.description. We also updated RegExp Unicode property escape tests for Unicode 11. We now have tests for `export *` as namespace from `foo` syntaxDynamic Imports. We've had our first implementation-contributed where bots will check for updates and verify Test262 coverage, starting with JavaScriptCore; initial curation is in progress here, though it requires a lot of manual work. Lastly, we have a new Test262 harness in C++!



## Atomics.notify()

(Leo Balter)

- [slides](https://docs.google.com/presentation/d/1iiGJyVwy6YM3p8T0hfaDuj4fQ4tT0b4Oz24OzzCetAg/)

LEO: Some engines have already renamed Atomics.wake to Atomics.notify. ChakraCore, V8, Moddable XS among others. Node.js has introduced an experimental worker API that has cautious aliasing. Unfortunately, UnrealEngine repository requires a developer account, which we don't have.

LEO: So, can we have consensus for this to land?

AK: Didn't this already have consensus?

DE: I support this landing.

AK: It's weird that we have to reaffirm consensus. V8 was under the impression this already had consensus.

RW: (follow up) This was not to "reaffirm". We did not have consensus at first presentation. We were told to complete a set of tasks and then we'd have consensus. This was supposed to be a status report.

#### Conclusion/Resolution

- Consensus



## ArrayBuffer.prototype.transfer()

(Domenic Denicola, DD)

- [proposal](https://github.com/domenic/proposal-arraybuffer-transfer)

DD: Long history of sitting at Stage 0. Reintroducing. Binary data has potential for race conditions. (See example in proposal.) Not obvious for debugging. Node.js in particular directly reads the buffer from another thread w/o locking. The defensive way to write this code is to write a copy, and this is what many APIs do on the web. The idiomatic way to do this in JS is to slice it. However, this adds time and space consumption to every time you use an array buffer, and that's very sad. Detaching and transferring ("neutering") is a built-in solution. Already used widely in the web platform. Detaching means it is no longer a usable handle for that memory. So no one who had original access to the array buffer can use it. Concretely, if we added this to JS, we would add a new method `transfer()` you would get a new ArrayBuffer object where the backing memory is the same as the old one, but the old one is now detached, so any attempts to access the memory at the old one will throw an exception (or return undefined, in implementations). The transferred one (lexically scoped and private to the current function) has a reference to the memory area but is fully functional. (Points to example using transfer()). This doesn't have to copy or detach, and makes the operation fast. You can transfer without having to save the result anywhere. Any thoughts?

BFS: There's a visible cost in Node.js with copying all the time, so this is great for us with module loaders!

JKN: Similar to move semantics. Syntax that the data is taken from them? Non-obvious to the caller.

DD: Not sure if we can have those guarantees for callers in JavaScript. Since they're mutable, there's no idiomatic way I can conceive of.

WH: What did you mean by "protecting data from other threads"? `transfer` is (rightfully) not done for SharedArrayBuffer, so what does "threads" refer to here?

DD: Basically, this is a particular bad pattern where people compromise safety for performance. `fs.writeFile()` in Node will write concurrently from memory. But this isn't thread safe, because they don't want to take that cost.

WH: Isn't such lack of thread safety an issue anyway?

DD: This is unsafe if you don't know this happens.

WH: What happens if the other thread is using the data, but the original thread transfers it?

DD: Transferring has no effect on the data itself; the other thread will continue to refer to the now transferred buffer.

MM: I dispute that Node.js is allowed by the JS spec to mutate this memory in another thread. There is a computational model that the spec is very clear on. This is not mutable state shared across agents! If this is the same agent, then there cannot be concurrent modifications.

DD: You're right, but Node.js doesn't write to the ArrayBuffer.

MM: If it's reading from another thread, then it's the same problem. The notion of an ownership transfer can still be useful (separate from the concurrency issue). I was surprised when WH pointed out the difference with SharedArrayBuffer, as ownership transfer is useful there as well.

DD: I have an FAQ that says for SharedArrayBuffer, this is not applicable. For SharedArrayBuffer, there's no concept of detaching, for example.

MM: I think it's natural if this proposal is to be promoted to think about this as a missing feature for SharedArrayBuffer.

DD: For example, you could have a transfer method on SharedArrayBuffer that returns a normal ArrayBuffer? That's very cool.

MM: You have insisted in the past that object-granularity security is impossible. The points you are making here assume object-granularity is meaningful, and that proposals (such as this) should indeed proceed assuming that it is possible, practical, and attractive.

DD: We can take that offline.

SYG: I like the proposal, but this can happen for any JavaScript object. Why only ArrayBuffer?

DD: This is an 80-20% tradeoff. The idea of detached already exists.

SYG: I think people don't actually try to serialize large object graphs and transfer them.

DD: People might. This is exposing a primitive that all engines already have. Let's scope this proposal to that.

DH: This talks about concurrency. This method alone doesn't give capability to do concurrency, right?

DD: No.

DH: What you're doing here is exposing the pure primitive of transfer itself. This is not going to solve concurrency problems.

DD: I shouldn't have put anything about threads in the proposal.

JHD: You can already do transfer ArrayBuffers using post message?

DD: Already possible in the web platform (structured cloning). Only indirectly, by posting to yourself or by storing in the History API (but this doesn't allow transferring, so nevermind). No way to do this synchronously, however. Existing methods are merely work-arounds. I would like to add this as a primitive.

BFS: In Node.js, we don't have these APIs, and I would like them.

DD: I've wrote a Spec for this and I would like to go for Stage 2.

DE: I want to point out a related proposal in HTML that exposes structured serialization/deserialization for the Web, that has the capability to transfer ArrayBuffer. You can just call this structuredClone method and it can do most of the same things (and more). If we advance this to Stage 2, we just should know that there's multiple ways to do this, and that we're proceeding with this because it's a simpler/more memorable way.

DD: High-level vs. low-level distinction. Structured cloning is high-level and opinionated: Maps and Sets serialization, for example. Transfer is low-level.

DE: My second point: transferring ownership of Array buffers is something we should be making more idiomatic. WASM is doing this. It seems good to establish a pattern of transferring ownership, but it's admittedly a complicated topic. In Rust, this is a core thing in the language, so tacking it on to JavaScript is difficult, but it would be very useful.

BFS: Do we need a way to prevent transferring? Can't use frozen, maybe as an add-on proposal for later.

DD: I agree, I think it is an interesting area to explore. There are a lot more primitives we can add in this space about transferring and ownership.

YK: First of all, I've used this idiom in the web platform, and I think it's great to add better workarounds. As a person who writes a lot of Rust code, I think the ownership transfer idiom is a good one, and I'm not concerned that the style would leak into your other code that doesn't use this idiom. Rust has something very similar – I would be happy to see it in JavaScript.

LEO: I like the proposal, from Test262, it's great to have the observable points of ArrayBuffers from ECMAScript tools. Is the second part of the proposal (realloc) also going for Stage 2?

DD: More realistically, that will probably spin out into a separate proposal.

WH: I like this, but I'm a bit confused about the thread question from earlier. Also, I just wanted to find out if anyone out there is upset that SharedArrayBuffers will not have `transfer`. If we add `transfer` to ArrayBuffer, it's likely that we'll face pressure in the future to add this method to SharedArrayBuffer as well, and I'm wondering what we'll do about that.

DD: MM gave an idea: spin ArrayBuffer from a SharedArrayBuffer. We can explore that in the future.

WH: For the record, my position is not to add `transfer` to SharedArrayBuffer for obvious reasons.

#### Conclusion/Resolution

- Stage 2 acceptance


### Secondary Proposal for ArrayBuffer.prototype.transfer()

(Domenic Denicola, DD)

- [proposal](https://github.com/domenic/proposal-arraybuffer-transfer)

DD: Secondary proposal, trimming while avoiding copies. If we introduce a new function `realloc` where we transfer a subset of bytes. Think of this as an alternative to Slice. I call it realloc in honor of the C/POSIX standard library method with the same name.

TST: Can you speak more about how the internal feedback made you split this out from the transfer proposal?

DD: For transfer, it's meant to be a guarantee—we'll definitely reuse this memory. For `realloc`, it's not as clear. Do we want to transfer ownership or are we concerned with saving memory?

TST: If you know about transfer, the discovery of that method is much easier, than realloc. This is much harder to reason about needing/use cases.

DD: Original version was more ambitious, could trim start as well as end. Feedback: will probably have to copy for an implementation. Realloc is more explicit about its connection to the lower-level primitive.

BFS: You say the main use case is trimming, but are you also allowing realloc to get a larger size?

DD: I believe so? But it contradicts a lot of my arguments for it...

??: In Moddable XS, For the memory allocation in ArrayBuffers, we can create larger allocations pretty trivially.

GCL: Wondering how this parallels with TypedArray's subarray().

DD: subarray is different. Will add to FAQ.

MM: WASM has a concept similar to ArrayBuffer, but it is growable while maintaining the same identity. If realloc is "change in place" and maintains identity, then this would fix the mismatch between JavaScript and WASM.

DD: Will look into that, and split realloc into a separate proposal.

#### Conclusion/Resolution

- Split into a separate proposal


## Report on Realms shim Security Review

(Mark Miller, MM)
slides in pdf, slides in keynote with light animations

(The following notes omit almost everything said in the actual presentation)

MM: First some terminology: the mandated objects that must exist before code starts running are called primordials. Of those primordials, most are replaceable with initialization code. Some object are reachable by syntax. We call everything that's reachable by syntax "undeniables." Today, platforms already support multiple realms (in the browser, iframes; in Node, vm.createContext). (Points to examples in slides).

BE: Does Carol's compartment (example in slides) get frozen?

MM: Carol's compartment does not get frozen in deepFreeze.

MM: How do we implement this in browsers today? The shim must intercept all attempts to access a free variable (generally looked up in the global lexical scope or on the global object), and we want without parsing or rewriting, to evaluate the code as is.

WH: Early on in the talk you said you wanted to avoid parsing. How does this avoid parsing when you use `eval`?

MM: We wanted to avoid a parser written in JavaScript (parsing at the user level).

#### Conclusion/Resolution

- ?


## Intl.DateTimeFormat.prototype.formatRange

(Felipe Balbontín, FB)

- [slides](https://docs.google.com/presentation/d/e/2PACX-1vQXuKpkf-kHF4Ue-35PAez79EL2bTU-s3dGbQvj0zwOzbqnF1zJJif_RT8wV9v8VkI4agEzvBPbKOoi/pub)

FBN: It's common for websites to show date ranges or intervals—for example for travel dates or a graph range. How do we display this in a friendly way? We can format the two date strings and concatenate them. But we can do this more concisely, if for example the two dates have repeated aspects, like months and years. Another issue is that different locales have different rules for the way they write date ranges. We propose two additional methods: `formatRange` and `formatRangeToParts`. `formatRange` returns a string, and `formatRangeToParts` returns an array of objects, where each object is a different part of the date interval. To give you an example of how to use this API, we instantiate the range with a locale and several options. Why add this to the platform as opposed to loading a library? Formatting date ranges requires a non-trivial amount of raw compiled data.

WH: How much flexibility do you have in deciding where the dash goes? Do you always share the parts of the dates that don't change, or can you duplicate them? Seeing a date range such as `1/2-3/4/2014` would be confusing, whereas `1/2/2014-3/4/2014` would be clearer.

FBN: Everything is based on that locale, and how that locale formats ranges by default.

#### Conclusion/Resolution

- Stage 2 acceptance


## Explicit Resource Management

(Ron Buckton, RBN)

- [proposal](https://github.com/rbuckton/proposal-using-statement#readme)
- [slides](https://docs.google.com/presentation/d/1OmkXFMizf5iYME9ClERZ3C1dwUAhh7-r2YMD-rTzY-Y/)


RBN: (Reading slides). The proposal that we are presenting today is this `using` keyword, which requires a cover grammar to work correctly. There are two basic mechanisms to manage these resources. The first example has an expression that is guaranteed to be cleaned up at the end of the block. The second example lets you use variables declared in `using` head within the block. The resources in the head of the block are disposed at the end of the block. If the declaration in the head of the using block is null or undefined, we just ignore it for simplicity. Some challenges with `using`, we must use a cover grammar to disambiguate with CallExpression, though we could use `try () {}` (without a catch or finally).
. We'll need to have some follow-up implementations here. We have an initial implementation for testing

MM: When you're reading code, including code inside generators, async functions, and async generator functions, it's easy to find by visual inspection the possible interleaving points. So you could reason about what happens before the executing code vs. after the code resumes from an interleaving point. Wouldn't the end of the dispose block would be a hidden interleaving point?

RBN: It's possible, but the transparency of the interleaving point is effectively the same as an async generator.

MM: The issue you're raising with regard to "yield" in an async generator, was controversial. The resolution recognized that "yield" in a generator was already an interleaving point, in that control could resume after the yield point at an arbitrary later time. It remains the case in JavaScript that *all* interleaving points are marked with either the keywords "await" or "yield" in all contexts. It must remain the case that a trivial visual inspection is able to reliably find all interleaving points in control flow.

TST: This is consistent with Python, and I think it makes sense to support this. On slide 5, you say this solves the footgun of releaseLock. How?

RBN: It doesn't especially avoid the footgun, but if somewhere within the code to getReader and releaseLock, you have an exception, if there's a common syntax/pattern here, it's easier to drum into users these good habits.

TST: If releaseLock throws, how do you get an exception from that? Do you swallow the exception and then throw it?

RBN: (Shows slide 18). When the end of the block hits, you effectively have two try/finally blocks. You have effectively a stack of resources allocated, then you need to clean up these resources in reverse order.

TST: But I don't understand how you would handle exceptions.

RBN: You should use a try/catch in that case.

DH: I think there's a missed opportunity to make sure to do all the disposals and offer a composite exception. I'm happy to take this to GitHub.

WH: I'm OK with this feature. I'm not OK with the `using` syntax, because it creates cover grammars on top of cover grammars. The `try` syntax, on the other hand, is fine. It also matches with what Java's try-with-resources statement does.

WH: Note, however, that Java made a conscious decision to reverse which exception gets thrown if both the block and the finalizer throw. Unlike regular `try` blocks, try-with-resources blocks will ignore the finalizer's exception and throw the original exception instead.

RBN: We should use the regular `try` block semantics to be consistent with `try` blocks if we use the `try` syntax.

WH: There are no existing expectations for this feature. On the other hand, using identical syntax to Java's but with reversed semantics would be very confusing to anyone who knows both languages, making it hard to remember which one is which.

BFS: I'm not super comfortable with the cover grammar. I'd like to see a contextual grammar.

SYG: Given that we already have an iterator protocol, I'm concerned we'll have multiple protocols that are all in play.

RBN: `for...of` in ECMAScript is a combination of two different patterns, an iteration pattern and a disposal pattern. I would not want to find a way to wrap every resource I create in a for...of—this is an over-complication.

MF: We'll still have two disposal protocols and the difference between them is very questionable. Could you list the concrete benefits to this?

RBN: I would not want to have to wrap every stream I have in a for...of. This is a single pattern for dealing with resource disposal, and it makes a lot of sense.

DH: I would really like to see us not add new statement forms. New statement bodies are OK, expression forms too, but statement forms are not. We don't have to have that conversation now, but I'd like to add to the record that we should avoid unless absolutely necessary adding statement forms.

?: I am uneasy about advancing this to stage 1 because this functionality may already be in the language.

JLH: Just want to clarify that any hesitations to add this to the language should be discussed before proceeding to Stage 2. Moving to Stage 1 just means we will spend more time as a committee exploring this feature.

#### Conclusion/Resolution

- Stage 1 acceptance


## Management/infrastructure tasks; invited expert policy; meeting planning

(Daniel Ehrenberg, DE)
- [slides](https://docs.google.com/presentation/d/1eTBTMZzylhZR4v7Hgfd3UJYwLBgQZgX8q8fGvsvcNDE/edit#slide=id.p)

DE: Each PR should be from someone who is either part of a member organization or a signatory of the contributor IP agreement. This is a great task for a bot! We would love it if someone would help build a bot to enforce this. Archival of materials is also very important. We need an archive of GitHub, our Wiki, various old bug-trackers. We need more collaborators. Please get in touch with me, Thomas, or Keith. Next, we need to improve our delegate database and our Doodles. It's important to get this right—for keeping in touch, for following up with proposals, and for planning reasons. I think we could use a database of all the delegates and help is much needed to get this done.

DH: For archival things, this is a tricky topic. I've tried and failed to do this before. David Scott's mission in life is to archive things, maybe we could contract him?

DE: Currently, we're relying on internet archive. The servers that hosted this information have gone missing. It would be very useful to get in touch with whomever ran these servers, because the Internet Archive wiki is incomplete.

DE: Management: Rex is the interim chair. Neither Leo nor I wants to be chair. We need candidates by September so we can vote in November. I would encourage you all to think about management. If you'd be interested in participating in the facilitation group, that would be great. One of the other roles in management is the Editor group.

JHD: We meet once a week, we go over open PRs and issues and decide whether something is ready to merge or not, and comment our decision publically. Anyone in this room should also feel totally welcome to comment and review.

BT: If anyone wants to attend our meetings, please let us know and we will forward the invite.

DE: Then there's the code of conduct committee.

AKI: CoC committee gets together every other week on Thursdays at 1:30 EST. We review any comments or complaints we receive and decide how to respond as a group. There hasn't been a lot; we're pretty good as a group. When something does come up though, we're very thoughtful about how to proceed. If you want to help in any way, please let us know.

DE: Website and How we work group, we're trying to improve explaining to the public what TC39 is. As you can see there's a lot of ways to get involved and to help out. This is a cry for help. Please help!

DE: Moving on, let's talk about the invited expert policy. In TC39, members can invite guests, and there haven't been too many issues here. Babel has been an interesting case study. For the past several meetings, Babel's presence has been very helpful. I've gone to the ECMA Executive Committee to discuss this, and they are aware that Babel has been attending. For some organizations like Babel, which are critical stakeholders but wouldn't be able to join Ecma traditionally, we want to propose something to Ecma ExeCom to discuss policy considerations to enable stakeholders like Babel to attend TC39.


## TC53 introduction for TC39

(Peter Hoddie, PHE)

- [slides](https://www.icloud.com/keynote/0gW-7doOkHuxIMDRi0P9XpDng#tc53_to_tc39)

PHE: This is a brief intro to TC53, which was just formed this year. The charter has three components 1) building JS applications on wearable devices, 2) interchange formats for sensor data and 3) communication from device-to-device and to cloud. The goal is not to create a new version of the JavaScript language, to create a new platform, a new IOT protocol. So why then? Wearables are becoming more independent from other devices. An open standard we believe will enable silicon manufacturers a platform to rally behind, but the whole web runtime is a bit too heavy so we need something smaller in scope for them to use. Outside members are definitely welcome to attend meetings at this point. TC53 builds off the work of TC39 and therefore welcomes participation from TC39 members, particularly to ensure consistent JS APIs.

DH: Why wearables as opposed to small IoT devices?

PHE: I suspect that maybe eventually TC53 will extend to all small devices. One of the more important things that this committee is concerned about is energy, about which wearables have particular concerns.

LEO: Bocoup is excited to host. It will not be at the cave, but our nice office. (Laughs)


## Update on `do`-expressions

(Dave Herman, DH)

DH: This is a status update, no advancement. I've been working with Chris Krycho on this proposal. We want to bring the current state up to you and see if you have strong opinions. The goal of do-expressions is a syntactic form for statements but then to get a value out from the other side. The killer feature of this is the local scoping that doesn't pollute the larger context. (Shows example). Do-expressions respect the Tennent's Correspondence Principle (TCP) -- you're trying to have as few new special cases introduced by the new feature as possible. This means we aren't changing the meaning of this, or return. So in this example, we can return from the outer function, you can! Static Semantics: if you observe that do-expressions are allowing statements to appear in new syntactic positions are there positions where do { $stmt } can have unexpected results? Most cases are uninteresting, but `return`, `var`, `break` and `continue`.

MM: Feedback: I'm split between the two options for return. The argument for disallow, is that anytime it is not clear what semantics user will assume, no matter what we choose, some users will be surprised. The least damaging form of surprise is a static error. Even if you don't know why you got the error, you do something else until your code is both accepted and seems to work. All other forms of surprise may result in the program at runtime doing something different from what the programmer intended, in ways that the programmer did not catch during development.

DH: The difference is that throw is not scoped.

MM: #2 is perfectly defensible, but how much of a surprise is it?

DH: I just want to get feedback as we go along, instead of batching it up at the end. I really just want to get feedback and bring up the edge cases people care the most about. (Shows examples of `var` and `break`/`continue`). I think we should not allow breaking in loop header.

WH: What does `do {continue}` do in the first expression of a for-loop header, for which the loop hasn't started yet?

```js
lab: for (let x = do {continue lab;}, y = 17; x; ++x} ...
```

BFS: What do you mean when you say disallow? ARe you disallowing do-expressions in this context or the grammar constructs within the do-expression?

DH: We're changing the scoping. Break to a label that's not in scope is disallowed. Returning could be disallowed.

MM: You didn't mention sloppy/strict. I beg you to allow do-expressions only in strict mode. In sloppy mode, you would have to support all sorts of difficult semantics of nested function declarations, which seems difficult and pointless.

DH: I wouldn't feel that it would be necessary to only do this in strict mode.

MLS: If we're talking footguns, this has a lot of bullets in it. These questionable constructs must be early errors not dynamic errors.

DH: I knew if I went through these difficult edge cases, I would get trolled, but if we over-focus on these ridiculous edge cases, the feature seems more complicated than it is, but I think a lot of these cases are ambiguous enough that people tend to shy away from them. I think this is a lot of very strong indication that people want this, so I wouldn't want some hard cases prevent us from seeing those powerful use cases.

YK: I want to agree with Mark for a couple of reasons. In general, this feature isn't as scary as other features; you're writing code in your own scope, so I don't think syntax errors make this worse. They would help users avoid footguns.

WH: I agree that option 1 is off the table for default values in function headers. Initially I was leaning towards option 2, but because of how we treat variable references in function headers — they do not see the braced scope of the function — I'm now much more persuaded to go with option 3 (disallow). I would not want to allow `var` there either.

DH: I agree.

MM: One further point in favor of the disallow option: Of these choices, disallow is the only early choice that we can change our mind about later.

#### Conclusion/Resolution

- ?


## New name for global

(Jordan Harband, JHD)

- [slides](https://github.com/tc39/proposal-global/issues/20)

JHD: A new name for global, since `global` is not web-compatible. Instead of burning bridges, I reached out to a couple of browser vendors to get a list of what names would be possible. I got some data back from Edge, global itself is used quite a lot. `globals` is also quite used, **redacted** is used pretty infrequently, so it's also my next favorite option.

?? How did you determine what names to search?

JHD: We took a long list and narrowed it down to satisfy Edge's requests.

SYG: Do you want the name to be stricken from the notes too, until browsers try it?

JHD: I fully expect people to troll us.

Kevin: Do you think standard modules have some bearing on this?

JHD: I do not.

JHD: The average use-case I imagine is not a casual developer using it. So I think if the name is long and ugly, that's OK.

YK: I agree with Domenic's "this" perspective. I also don't like a camelCase name.

BE: Has anyone thought of `function.global` or  `eval.this` or something else?

MM: No! (Laughs). The global object must NEVER be accessible from syntax. We MUST be able to intercept it.

BE: Or `yagni`(\*) to indicate people shouldn't use it.

(\*) "You Ain't Gonna Need It"

JHD: I think **redacted** is good for it being pretty obvious, but obscure enough that you won't accidentally using it without knowing what you're doing.

MM: I will be objecting.

JHD: To the choice of the name or the concept of a global identifier?

MM: Both.

Diego: Has there been any debate about adding some non-alpha numeric names? Like `__global__`?

JHD: That seems much uglier, and we'd have to pull metrics about it all over again. Plus, we use `__` for proto, so there's a high chance it's being used in webcode already.

BE: Are you looking for an identifier or a deniable special form?

JHD: It has to be deniable.

#### Conclusion/Resolution

- No name picked yet


## Object.fromEntries to stage 3

(Jordan Harband, JHD)

- [slides](https://github.com/tc39/proposal-object-from-entries/issues/19)

JHD: Very small changes here, I am hoping I can still achieve stage 3 today. Are there any questions or comments?

#### Conclusion/Resolution

- Stage 3 acceptance


## User testing (e.g. usability or learnability): call for resources

(Shu-yu Guo, SYG)

SYG: We've talked in the past about doing some user-testing for language ergonomics. I can offer resources at Bloomberg London and New York for user testing. What we don't have is people qualified to design user tests (especially programming tasks) and would need very specific studies.
BT: I think what you're saying, that usability studies would be great. But I'd also encourage us to challenge what rigorous scientific approaches we can take without having to go into a lab. We can develop a bunch of hypotheses about how users will appreciate a particular feature. We don't need to necessarily go into a lab to test those. Any of us in this room could choose to be very data-driven, but you may not need to do that.

SYG: I'm saying let's not do anecdotal studies, and pushing for more scientific approaches. Though I'm not equipped to do that, necessarily.

BT: There's a wide spectrum between no data collection, throwing up a poll on Twitter, and doing a usability lab. I think there's plenty of opportunity for our committee to do informal interviews with users. With a light discussion guide, we could get some very valuable data from users.

DH: I think I've seen people confuse science for design. I.e. do you prefer A or B, we sampled 50% and choose the more popular one. But that could be a poorly sampled or designed study, so I would want to caution us away from invalidating the kinds of reasons that aren't "data-driven" but are backed with a tremendous amount of expertise.

SYG: We do design, but sometimes things get stuck without a leading opinion. I think user-testing could help for this.

TST: I think we aren't equipped as a group to design studies like this.

SYG: I agree, which is why I'm asking if companies could be willing to lend resources for such studies.

BT: There are definitely techniques you can do to validate program design (including APIs), so potentially the same could be done with language design. There's a huge space between doing nothing and some research, to try to be more rigorous in getting user input.

TST: My only concern is that in language design, we could find a suboptimal outcome because of how complicated and subtle language design is. I imagine there is scientific literature about this, and I would encourage us to consult the literature first.

WH: I'm a bit leery about this because of what happened to a similar area. There's been scientific research on what kinds of headlines people click on. Using science to optimize them produced rather unpleasant results.

YK: I think it's a great idea to survey users and see what kinds of findings we can get. In an environment where everyone agrees that we're not doing rigorous things, there's nothing about our environment that forces people to do this carefully or correctly.

SYG: My premise is that we are not experts in designing experiments like this.

YK: There's an anecdotal structure where using these results can get you useful answers. I think if we treat experiments like this, that would be very helpful.

DRR: So at Microsoft we speak to a lot of customers and try to find their pain-points. I was very skeptical of process, but I've found that occasionally, you do find answers to something else entirely, and you may find trends which are very helpful. So, I think that's one of the key values, there's a lot of anecdotal evidence where you can say definitively, but you can use it for motivation and put it into concrete terms to help people determine users' pain-points.

SYG: I think this was a good discussion.
