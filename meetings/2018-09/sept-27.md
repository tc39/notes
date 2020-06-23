# September 27, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Dave Herman (DH), Pieter Ouwerkerk (POK), Leo Balter (LEO), Aki Rose (AKI), Kevin Smith (KS), Peter Hoddie (PHE), Godfrey Chan (GCN), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Richard Gibson (RGN), Maggie Pint (MPT), Mike Murry (MMY), Mathias Bynens (MB), Keith Miller (KM), Mattijs Hoitink (MHK), Kyle Verrier (KVR), Justin Ridgewell (JRL), Katie Broida (KBA), Randy Luecke (RLE), Daniel Ehrenberg (DE), Sathya Gunasekaran (SGN), Rob Palmer (RPR), Kevin Gibbons (KG), Myles Borins (MBS), Tom Dale (TDE), Daniel Rosenwasser (DRR), Henry Zhu (HZU), Lin Clark (LCK), Matt Johnson (MAJ)

Remote:
Brian Terlson (BT), Rick Waldron (RW), Caridy Patiño (CP), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG)
-----

## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/09.md)


## Normative: Add export * as ns from "mod" (cont'd)

BFS: We have this open PR about adding a syntax for exporting from another module its namespace as a local name. Some people wanted to discuss this a bit but we haven't really heard objections. We had a "needs consensus" and DD seemed OK with this on IRC, so I'm asking now to see if we can move forward and merge this PR.

KS: Looks like the PR needs to be rebased. Didn't we report consensus a couple of meetings ago on this?

DE: Could you summarize the status of implementations and tests?

BFS: I cannot summarize the status of implementations and tests; no one has implemented this as far as I know.

DE: The current status of the process: I previously asked for implementations on all proposals for normative changes. I don't think the implementation requires shipping, but just prerelease implementations require you to look at the spec in a different way. I think we should do this for all needs consensus PRs in the future. I think we should establish consensus on this in a Stage 3 manner and then merge once the implementations are there.

#### Conclusion/Resolution

- consensus established on a Stage 3 manner, which will then be merged once implementations are there.
- JHD may add a label to GitHub for this new state for needs consensus


## Promise.allSettled for Stage 1

MB: Proposal by Jason Williams (BBC).

MB: (Presents examples in slides). Without allSettled, if you have a series of promises, if any of the promises reject, you can't easily guarantee that all (in this case) the REST requests have completed by the time you remove the loading indicator. Every userland promise API has this built in, and this is a common enough use case to warrant making it part of ECMAScript.

YK: I don't have an objection, but I think there is an analogy with a map function throwing an exception, so that could make the example better.

TST: A question on your last example slide—how would that fail?

MB: There's no catch block here.

TST: Would the try block ever do anything different?

DD: It would fail if someone makes promises not iterable, or overrides other built-in objects.

MB: But yeah, I see your point. If we assume an environment with integrity, the try/catch is not needed in this example.

JHD: If all the promises had rejected, then the overarching one could reject too.

TST: That's exactly why I'm asking this question.

LEO: Does sending an already rejected promise would potentially cause a rejection for allSettled?

YK: I think at Stage 2 we could consider that an input rejection should also return an output rejection.

MB: No. The only goal is to get a notification when all promises are settled.

WH: I'd also prefer to keep this simple. Don't want to get into situations where a rejected input promise sometimes causes allSettled to fulfill and sometimes to reject.

WH: Naming: What do other languages call this thing?

MB: I haven't looked into other languages, but there's a lot of userland implementations. In the repository, you can see other userland implementations and there's a link to a document with a naming discussion.

DD: That's a good question though. We should document what other languages do.

KS: Is there any use for getting the "promise result" type for a single promise? I.e., how about standardizing something like the `reflect` function from the examples?

DD: There's a little bit of history here in Q and other libraries. We found that people really only want to use allSettled. I think we should probably wait until someone comes up with a real userland use case before we expose `reflect`/`inspect`.

YK: There's not a huge amount of other language precedent, but Rust just implemented something similar. In this particular case, Rust calls `ready`. I'm not proposing that necessarily, but I think it's worth putting Rust in your survey of other languages.

MB: It sounds like we're good to go for Stage 1.

RJE: Objections?

*crickets*

#### Conclusion/Resolution

- Stage 1 acceptance


## Normative: GetExportedNames adjustments for Dynamic Modules

(Bradley Farias)

- [proposal](https://github.com/tc39/ecma262/pull/1306)

BFS: We came to a conclusion earlier that maybe we should change the module record such that we could implement it outside the JS spec. This PR is the result of that. We've created a guide, which is this PR, that states that in order for abstract module records to get some data for the host. Why we're doing this change—and what it allows us to do—is it track what the exports are, is so that we can evaluate the module in an abstract module, which is what the dynamic module proposal was seeking to do originally. There's the whole idea that we're going to change when the list of exported names can occur—like A depends upon B depends upon A—where we add extra cycles. We're adding to the spec in this PR that this could be a case to throw. We're planning on going forward with this approach to see if we can go through all the dynamic modules with this approach. Lin has another PR which also has an approach where they are introducing the things WASM is doing for modules, and we're looking on working together with them.

DD: I'm generally very happy with the way this has gone. I also support minimal features like this to support advanced subtypes. When you export a module you may not have considered all the things you want to export, so going back seems like a normal use case.

BFS: Yes, and we will need a fair bit of feedback to make sure that we are going about this the right way.

WH: What's the response to [Allen's concern](https://github.com/tc39/ecma262/pull/1306#issuecomment-420719937)?

BFS: The fact that you get this error for some modules a bit later, is a real concern, but without cycles it's not as big of a concern. Source text modules and WASM modules would not be affected by this.

LCK: I wanted to give some clarification. The PR I opened recently was just the PR I introduced in the May TC39 meeting. The only difference was that we removed the Sub-phase—it doesn't introduce anything new. Guy and I had a conversation about this a couple of weeks ago.

BFS: Since I'm not trying to merge this right now. Does this direction seem OK right now? I know Allan has some concerns, but I feel like hosts can make that choice.

KS: Personally, I think this really does need validation. You'll have to work with the engines to validate the use case. I'm not objecting, but suggesting we get implementations.

BFS: Exactly, we're not trying to get this in right now but to encourage an implementation.

KS: (Laughs) We need to get that validation from engines an implementers.

#### Conclusion/Resolution

- Waiting on implementations and to address Allen's comment


## Temporal for Stage 2

(Maggie Pint)

- [proposal](https://github.com/tc39/proposal-temporal)

MPT: This API is quite large, but we won't need to spend all 60 minutes on it. There are a few concerns—and a lot of places where we can go way deep on these APIs—but I am arguing for getting this proposal to Stage 2 and going into a lot more depth when this is up for Stage 3. (Reads slides). One of the major things we discussed at the last meeting was variability and valueOf. We discussed that we want to cut valueOf, so effectively they are not comparable without APIs. Calls to Now were cut from this proposal. Leap Seconds were also discussed in July, after talking to the Windows team—the only thing I can say is to do what they did is not web compatible. The table of leap second data may or may not be available at the OS level; it would require round-tripping. It is our intent to allow parsing, so if you get the 60th second in a string is to allow it to be parseable, and go to 59. There's many non-stage 2 topics which are outlined on the slides, but to keep this small we will discuss those later. I think we make Stage 2 requirements, and I'm happy to take questions.

RGN: How do you feel about leap seconds in instant vs. "civil" processing?

MPT: You're talking about leap seconds in the civil types? (Yes). I don't understand what meaningful data you would have . If you have a leap second you almost certainly have a instant type, so I don't think there would be meaningful data there, but let's put it in the issue tracker.

MF: I'm not an expert in date-time stuff, and I expect most users of this API also will not be experts. How do we think these concepts will be teachable? Are there canonical examples of each construct that can be used for comparison?

MPT: CivilDate are canonically used for birthdates. CivilTimes are for TC39 meetings are at 10am. CivilDateTime are more for historical times—like the moment when the Declaration of Independence was signed.

MF: Then we do expect that the users of the library will be able to choose the appropriate construct for their use case?

MPT: This API favors correctness in programming. You can just put anything in and it will work, as in Moment.js, but this API is all designed to help you think more about your data when choosing your type. I think it's not an easy problem, but Developers' code will be more correct if they think about it more.

YK: In response to MF, I think it's possible that this API would be confusing, but I think it's good for developers to build more intuitive APIs on top of correct concepts like those in Temporal. In Rails, I found that I wanted a lot of the APIs were too intuitive and I didn't think about business concerns in building a billing API, which would have forced me to make these questions earlier.

API: Having separate types forces programmers to think about their data, and in my experience it helps direct people to using UTC when they otherwise might by default use local time and in most cases using UTC results in a better system design.

DE: Intuitively, more correctness-focused design is a very good thing. I think for people working on and looking at this proposal, I think this is immensely valuable for other time-related proposals. We sort of have a standard date library in the ecosystem, and to upgrade to an API that focuses more on correctness, that is declared as the long term standard will be very nice in paying for itself. The big motivations—being standard for example—are huge. There are good questions in the queue about Duration, for example, but we can talk about those in Stage 2.

DD: Ability to get current time seems important to add during stage 2. I'd like to tell developers never use Date again, an I realize that people don't want to do non determinism. But the cat's already out of the bag. I definitely want to see this go to Stage 2.

MF: It would be hard to convince me to allow another source of nondeterminism into the language.

TST: I also want to see this go to stage 2, though I would like to see a solid comparison to other languages. Python, for example has two versions for Date, Time, and DateTime which are time-zone aware and not.

MPT: That's really just the naming convention of that case.

TST: Yes, I'm really not an expert.

MAJ: I'm working with MPT on this proposal, and studied Python, Java, C#, Elixir, etc.'s implementations. I absolutely agree with you that there should be guidance—JS is one of those languages that developers who primarily use other languages also use, so I think it's very important.

TST: That's great, I'd love to see that and also the comparisons to other languages and why you made these decisions.

MAJ: Absolutely, and we definitely don't want to pander to other language design just because that's what has already be done.

WH: For leap seconds, I agree that the POSIX behavior should be the default, but can we provide advanced users the option to upgrade to full leap second support if the OS supports it? Yes, they're unpredictable until they happen and nondeterminism is annoying, but we already have to deal with such nondeterminism when supporting time zones, for which rules change all the time. I actually cannot tell you what the time zone of Los Angeles will be 2 years from now.

MPT: I can illustrate that the fundamental issue with leap second support is that ultimately when you go to the file system time, the computer's lowest level time, then all your calls to system-level can be extremely tricky to correlate with the engine's time.

WH: It's a solved problem. I know how GPS does it. A simple alternative is to use TAI and a UTC offset from TAI. For those who do care about this, we should provide an option to support them if the OS does.

RGN: I want to emphasize that there are two global timelines—there's TAI/GPS/UTC/etc., which count seconds since an epoch (UTC having discontinuities in the form of leap seconds), and then there's POSIX, which counts 86400-second days. To talk about leap second support means either using e.g. TAI instead of POSIX, or defining new API surface area.

MAJ: First is is possible to have an API that works with leap seconds? Yes. Where does the information about leap seconds come from?

WH: The same place where time zone change information comes from.

MAJ: Right, but IANA creates a table but it's not authoritative about leap seconds. It would be possible for a leap second library author to build on top of Temporal, using IANA, but it is not possible.

WH: The windows API does that, according to Microsoft's blog.

MAJ: It does not. I work with those people and it does not. I believe the one thing we should be able to do is to round-trip the leap second. If someone gives us a leap second, we should give it back to them.

MPT: This round-trip solution is the right way, I believe. Developers should get it back if they give it to Temporal.

YK: As a programmer, it would be nice to access a leap second, if one exists in the OS. That's what Rust does.I'm not sure what the leap seconds programming model is—how does a user use these in a meaningful way.

BFS: If we're opting-in to this change, can we decide at a later date to use an options bag?

WH: Absolutely. I would not want the default to use leap seconds, since it's hard to use and would confuse programmers who assume that a UTC day is exactly 86400 seconds. However, correct leap second support without smearing is mandatory for some applications due to regulations. If the OS supports it, users should be able to explicitly opt-in to a leap-second-supporting API, namely:

Obtain the current unsmeared UTC time to accuracy of a few milliseconds.
Do accurate duration calculations on past UTC times.

API: Would this be for both the Date and Temporal APIs?

WH: Just the Temporal leap second API.

KG: It would be useful to expose a table if one exists.

MPT: It doesn't exist on the OS.

KG: Just because it doesn't exist on the OS doesn't mean it doesn't exist.

MPT: Fair point, anyone want to make a proposal?

MAJ: I also support this, and I have an issue on the Temporal proposal to do this work when the OS supports it, but it's not in scope for Temporal now.

API: If you know your point in the GPS timeline, then you can add in leap seconds after the fact to compute your exact UTC time. I have a question for WH about what you were looking for.

WH: There's no way to use Date.now to get the current UTC time to millisecond accuracy. It would have to be a new API.

YK: Some people are forced to care about leap seconds, so we should make sure people trying to comply with regulations should be able to use our APIs. Separately, a long time ago MH asked about the way to talk about this in an education, but I think the term "global timeline" was used, and I think that's a very useful term to talk about Temporal.

MF: I recall a very early version of this that talked about Durations. I don't see it here. I am concerned that there's high demand for this, and without this in the spec people will create libraries that do use it, and do it incorrectly.

MPT: The API is there for arithmetic, so it shouldn't be difficult to do.

MF: That's OK, I think people want to do this, and I just want to make sure they do it in a very easy way without making mistakes.

DE: I agree with the point about ergonomics of the current proposal. I think these are good design principles and it looks like it will be easy to use.

DD: I want to second DE's point and say there's a real temptation to create too many classes (Durations, TimeZones and so on). I think to use our dynamic language to make these as expressive as possible.

MPT: I want to point out that it was a life journey for me to use 5 types. I wanted to do just 1 type.

YK: I think the nondeterminism response was too glib. DD's request was to fully replace the Date API. That's a very broad spectrum of spaces. I think we should not use the nondeterminism issue to cut off exploration.

MM: There are ways of dealing with the nondeterminism issue.

MAJ: There's two points of nondeterminism in this space. One is in dealing with the Date.now, the other is the current system timezone is one of them. It cannot be returned as a string, so we cannot avoid this.

MM: If you carry your computer from one timezone to another, and are running a process, are there any runtimes that get the new timezone?

KM: Yes. I use it.

MM: This is indeed dynamic mutable access to the outside world within the primordials. However, it is a much milder violation; it is unlikely to enable computation to read side channels.

CM: This is an API for representing date/time values, not an API for access to a clock

API: I agree with CM on that. It may not be avoidable to add a system clock.

DE: I generally like the architectural concept of separation of concerns, but it can be in contrast with typical mental models/ergonomics. We could have a separate clock class for Now, but that has a mental association with Instant. I think it's sensible to group them.

MPT: Clock classes are very useful for testing purposes. In that sense, I don't have any problems with that.

DE: My next point was, I'm wondering about does nondeterminism in TC39 APIs relate to nondeterminism in embedder APIs? This is a great place to get concerns from different stakeholders from different environments who don't want nondeterminism. I wonder if there's a way to define it in TC39 but make it optional—knowingly introduce nondeterminism but only if you want to expose certain features. We could do something similar for the realm API, for example.

DD: I think that may be an interesting way out of this constraint. If we don't feel comfortable to add a nondeterminism, we can let embedders not do that.

DE: It would be unfortunate that embedders would define the Now spec, since they would have to coordinate with each other. Ideally, we can set the concerns here in a unified way and they can follow the spec we create.

WH: It doesn't make sense from users' point of view for us to punt `Now` to someplace like Annex B. We should just define `Now` where it belongs.

DD: (applauds)

TST: At the last time, we talked about Intl date format. I was concerned with that and the lack of integration. There's been no update on that. While I'm fine with this going to Stage 2 without this.

MPT: I'm not either, it needs to be done.

DE: We discussed this in the Intl meeting. There's some spec editing, but I'm pretty confident that this will work out.

MAJ: While it's great that we're talking about leap seconds and nondeterminism, I think it's more important to focus on the serious errors developers are making all the time for example, HTML Input Type=Date alignment.

JHD: Plus 1. We had the same bug when I was at Twitter and now Airbnb because on one day of the year midnight doesn't exist. In Brazil, they use midnight instead of 2am for time-zone cutovers (for daylight savings time, for example).

MPT: A PSA: always, always pick `noon`.

MM: TC39 needs a way to add nondeterministic APIs in a controlled manner. I am co-author of two proposals that introduce powers that must not be available on the normal primordials: WeakRefs and getStack/getStackString. WeakRefs introduce genuine non-determinism and enable quite severe reading of side channels. getStack/getStackString may not introduce dynamic non-determinism per se, but they directly provide a violation of object privacy. That's why they would both be on the System object. Old code that confines sources of non-determinism must continue to work after new sources of non-determinism are introduced into the platform. Thus, all sources of non-determinism, present and future, must be introduced gathered together in such a way that old code can protect against new sources of non-determinism or other rule breakage.

DE: Temporal's proposal is a built-in module. How do you imagine that would work with the System object?

MM: The issue with standard built-in modules is a big issue unto itself, and maybe too broad for this discussion.

DE: Maybe we can talk about it offline then.

MM: We don't yet have a concrete design for how builtin modules would be introduced into JavaScript. In the absence of builtin modules, the System object is the answer.

MPT: In this specific scenario, I would be for an injectable clock for nothing to do with security. There are a lot of benefits to this.

MM: I would also be in favor of this. So you could ask it for a representation of the current time. Such an injectable clock could be placed on the System object.

DD: This dream of a System object, where we put all the sources of nondeterminism that we don't like is extremely unlikely. Hosts won't use System. We shouldn't be constrained in that way. This just doesn't scale.

WH: I have roughly the same point, vendors and implementations will add nondeterministic things in all sorts of places. MM, if you want old sandboxes to work with new implementations, you'll need to whitelist only the things you know about.

DD: Don't forget clause 15. JavaScript implementers will also do what they want.

WH: Exactly, much of Temporal is nondeterministic because of time zone changing. I don't want that to be a reason to have to stick it onto System.

JHD: Lack of System object has come up in a lot of proposals. What if we had some sort of object that gave you a whitelist of nondeterministic APIs.

MM: A list of global names would be useful, a list of property names would not. You want to be able to have different compartments in realms.

JHD: We can talk about this offline.

#### Conclusion/Resolution

- Stage 2 acceptance
- BFS, RGN, DE have volunteered to be reviewers for Stage 3


## IDL for JavaScript

(Daniel Ehrenberg)

- [proposal](https://github.com/littledan/proposal-idl/blob/master/README.md)
- [slides](https://docs.google.com/presentation/d/17JnVfV8claiW1u8rFgvzg7itzNBVC9ahgK0RcyXOc70/edit)

DE: We've been gradually adding to our Standard Library to JS. This would be helped by an IDL. This is basically a header file, which is used to describe coercions of arguments, overloading, class structure, etc. There's a lot of commonality in our ecosystem to languages that use IDLs that JS could benefit from. The current algorithms are currently pretty free form. There are several edge cases that have to be considered not in the problem domain, but with how we're writing this freeform algorithm. It's not currently trivial to follow conventions in new specifications. IDLs also enable auto-generations. In Chrome and V8 these files are effectively copy+pasted into Chrome's source code, where C++ code automatically generates from this IDL. It's my understanding that all major browsers have a concept like this. I think if we could use for JS an IDL, this would help with the native bindings. From manual code-writing to manual code-generation

DD: Beyond generation of bindings, there's an added benefit of auto-generated code from Spec text. There's a lot of places that an IDL concretizes that in an algorithmic way.

DE: There's a third thing, also auto-generation of tests. That's a very helpful point, DD. So JS is still dynamically typed, and this doesn't aim to change that obviously. In the WASM project, they had two ways of binding WebIDL things to Rust. The JS one was the long tail, however, because it was so difficult to implement.

TST: Yesterday we published something (??) that would have been much easier if we had these IDLs we could even better generate these.

DE: Some possible requirements: some things are missing from WebIDL and complexity. There's some JS conventions that just differ. Some methods are innumerable in WebIDL that aren't in JS. Maybe we're fine with going with this WebIDL-syntax or maybe we want something different. I think we would want a way in WebIDL to define this, which we could call JSIDL. I'd like to have a technical investigation here and draft up the requirements of how we would want things to look. We could call it the up-streaming story. The plan for the stage process is is for Stage 1 to agree as a committee, are we up for discussing this? By Stage 2, I want to come to the conclusion about whether we want to use WebIDL or go about this as JSIDL. For Stage 3, we should have complete Spec text. At that point the IDL definition should be fully rigorous. By Stage 4, there's a question of what it means to have implementation and to have tests. We should have at least one native implementation which uses code generated from IDL. We may make some small normative changes. It would be very nice at that point to have Test262 use IDL to exhaustively test coercions.

DE: So, questions. Do we want to look into an IDL? Does anyone have any technical requirements? Stage 1?

WH: This is a bit of a déja vu. I was writing the spec for ES4 which used an IDL for both the interfaces and algorithms. I see you're proposing existing IDLs, which are quite large and complex. Are you planning on defining the IDL within the ECMAScript spec or referring to an existing IDL spec?

DE: This is one of the questions I am asking here. Thank you for your work on IDLs in ES4.

DE: The choice of how to spec the IDL should be for Stage 2.

WH: I think we shouldn't wait until Stage 2 to have this discussion.

DE: I agree.

WH: My concerns are that I like the idea of an IDL, but I am afraid of a large and complicated one. The IDL specifications themselves are complicated. Also, if the IDL itself is defined by an external standard, then we run the risk of evolution leading to circularities. IDL specs' behaviors are defined in terms of the ECMAScript spec, and the ECMAScript spec's behavior would be defined in terms of the IDL specs.

DE: We should have some conventions which are more restrictive—or different—than the web conventions. This could be  a way to manage the complexity of these technical details.

WH: This is not just a technical detail if we entrust the definition of the IDL to an external standard. The other alternative is to fork an IDL and define it ourselves. According to the presentation, there are already places where the behaviors we need differ from the IDL's current definition. If we fork an IDL, then we get into issues about confusion in areas where they differ.

DE: That's part of the benefit of having a single ecosystem-unifying language.

WH: I'm not sure that my questions have been heard, but let's continue.

TST: I think this is obviously not a Stage 0 concern.

SYG: We have different, multiple embedded engines, it's harder to keep our platform more consistent with JS as it evolves. I think for newcomers who want to embed JS, we need to keep this barrier to entry low.

YK: I'm a big fan of this. I think this is a big driving concern. I think developers actually do use Specs, so I think we probably want our IDL to generate something that is predictable or consistent with JS. WebIDL as a historical evolution came out of the spec. I think WASM changes some of the calculus, but we should still treat JS as the driving concern. We should try to figure out a subset that is good for our means.

DE: This is somewhat complicated.

YK: That was an overly strong statement. There's a subset of WebIDL that we want, but not everything. There's some things to upstream that the web would use; another good option is to use our own. Whatever solution we pick, we should work fast to get a small subset of WebIDL.

DE: Yes, I read through your comments, I think a potential collaboration with WebIDL makes sense.

YK: I agree that most of my original critiques have been addressed since.

DH: Along the lines of what SYG was saying—about the long tail use cases of WebIDL. I work on something called Neon which allows you to bind Node.js to Rust. I think this kind of gives us a long-tail list of applications to create bindings, and I bet a lot of good projects would come out of the woodwork.

DE: That's great and that reminds me about a scope limitation I want to emphasize. This is completely intended to bind to JavaScript.

DH: Yes, I understand, I'm just saying this would help bring out some of the projects like Neon.

JHD: People may see snippets from the spec as their first introduction to the language. I have not spent a lot of time looking at WebIDL, but the times I have spent, I have found very unintuitive. Separately, I definitely am concerned with making many normative changes to the spec just to match IDL. These changes can be enormously difficult to review and accidentally change the meaning of the spec text.

DE: Are you saying there's no room for normative changes because of this spec?

JHD: Yes.

DE: That's a very strong statement.

JHD: Let me clarify, there are many things we would like to fix. I am not objecting to changes made due to issues discovered by this process.

DD: We'll probably find many inconsistencies we wouldn't know about if it weren't for this project.

JHD: Yes, and that's great.

DE: We may make normative changes throughout the course of this investigation. To go back to your original point about the readability. There's a bug filed about this, but we went through all the tools that convert WebIDL.

JHD: Yes, definitely, we need to just do this gradually. My concern is 30,000 lines of changes that we have to review.

DE: That sounds good. I would be amenable to that. In Stage 2, we could talk more about that process to take upstream changes discovered.

YK: Maybe there's a middle ground? I don't think we should take the

JHD: I've seen this happen where people use types on your untyped code, and this seems very similar to that. These little changes shouldn't be made just to satisfy the syntax of IDL.

YK: Yes, that makes sense.

DE: We should think about the conventions we want and make sure we follow the right conventions. Separately, we should also have escape hatches.

WH: Concretely, the places where normative changes from IDLsation of the spec are likely to show up are in the order in which arguments are coerced. There might be web compatibility consequences from such spec changes.

DE: We're not going to break the web in this process.

WH: I fully agree about the readability point. We want the spec to be accessible to non-experts. If we use an IDL that's quite similar to ECMAScript, we would confuse folks casually reading the standard about what is ECMAScript syntax and what is IDL syntax.

DD: I just want to clarify, they're not really "types", just "coercions".

YK: This is the hard thing about this design.

DE: I agree that we have to communicate to people reading these definitions that they are in fact coercions. This is a problem with having similar languages that are different.

DD: I want to say two opposite things: I would still consider this a success (in stage 4) even if native implementations don't code-generate. On the other hand AK (I am reading his comments since he's not here) said the opposite. What does the committee think about this?

TST: I agree with that. There's a lot of value without code generation. WebIDL was used without code generation, and it was still quite useful for specifications. I agree that we shouldn't guard on specifications.

DD: For people who are unfamiliar to WebIDL and have allergic reactions to it, I personally came to this in a way similar to YK, I will write my specs in EcmaScript style. But over time, this is getting tighter and tighter. Be careful when thinking that we can do it better.

KS: Looking at the way web specs look, (describes various sections) do you imagine the same thing?

DE: There's a huge amount of diversity in how these specs are written. A lot of them share small things like CSS, but they're less consistent than they appear. I think we have a lot to work out here. I don't want to make things less clear—the goal is to make things more clear.

KS: Do you imagine updating 402 and 262 at the same time?

DE: I imagine upgrading 402 as the first test.

DD: To reply to KS, I think there are better and worse ways of doing this change. We probably want to emulate the best way, where it's very clear what the definitions of the getters and setters are.

DE: There's also room for improvement—for extra notes, for example, in the IDL itself. I don't know that HTML is an example of a specification that is easy to read.

JHD: I would expect to see 262 partially converted before 402. If we agree that they should be consistent eventually, this seems like an easier way to do it.

DE: I think this is a little getting into the weeds, in terms of ordering. I believe we should not attempt to start converting specs to IDL until we have ways of converting nearly all of the spec.

WH: I am wondering about the chances it will stay as an implementation device. If it's just a spec device, then it is not enormously important that it is rigorous and comprehensive. If there's a chance that it will be reified and exposed as an API somewhere, there's a lot more risk.

DE: Examples?

WH: Host objects doing strange things, using IDLs to specify abstractions implemented as proxies, ....

DE: I think this proposal has been clear that the goal is for this to be used for broader uses.

DE: There's spec internal ways of describing things like proxies, that don't need to be upgraded to IDL.

WH: If we expose the IDL as an API that hosts are supposed to use, then we might need to have good support in that IDL for abstractions defined via proxies, host objects, etc. If we just use the IDL for specification of ECMAScript, then we wouldn't need to do that work since built-ins don't do that much.

DE: I don't think hosts should be expected to rely on IDL entirely.

WH: This is an interesting question to research. I would like more info on this.

#### Conclusion/Resolution

- Stage 1 acceptance




## JSON.parse source text access

(Richard Gibson)

- [proposal](https://github.com/gibson042/ecma262-proposal-JSON-parse-with-source)
- [slides](https://docs.google.com/presentation/d/1PB0HCOxWZikFmTAqR5U2ZZjEiDV7NjhPN_-SK5NNG0w/edit?usp=sharing)

RGN: JSON parse is lossy. If you feed in a large sequence of digits, you will get out a number. They are subject to IEEE 754 precision limits. But ECMAScript has `BigInt`s now, and we want appropriate numbers to be parsed as `BigInt`s. We can't currently do this because, even though there's a reviver function to `JSON.parse`, it receives the _already parsed_ value, not the original source text. We also suffer from a lack of context in the reviver functions—they are processed bottom-up. There's no good way to parse a string that happens to be in the ISO Date format to a value that is a Date. (Shows example). It's very hard to do this because of the lack of context, we don't know what the parent symbol key is that we're trying to process. If instead we get the source text, we can parse directly as a `BigInt` using the text and avoid the lossiness. What I don't consider necessary but would like to have is some awareness of the parent keys as well—so we can understand the difference of `metadata.date` and `value.date` in this example. It's very unergonomic as we have it right now. How do we specify this? We can tackle in later stages how to specify it. JSON.parse is currently specified as a two-step operation. After confirming that the scriptText is JSON, then we recursively traverse that reviver function depth-first (starting at the leaf nodes, then working our way back up). I'm not sure how to update this, and that will be a concern moving forward. Another concern that was raised was to introduce an argument to the callback invocation. I'm looking for Stage 1.

CM: What is actually in the source parameter? You give two examples, one was parsing a number which you want to yield a `BigInt`—that's straightforward. The second example, which was a Date, you had a more complicated structure—what is that source parameter? What substring did the JSON parser receive?

RGN: On any invocation, it's the JSON value which does not include ignored whitespace, but does include everything else. It would include the literal quote chars, too.

CM: In the case of an object, it would be the whole bracket.

RGN: Correct, object would be opening curly to closing curly, array would be opening bracket to closing.

CM: That in itself could be passed in another call to JSON.parse?

RGN: Yes.

GCN: For other JSON values you stripped the whitespace? What about interior whitespace inside a curly or a bracket?

RGN: It's preserved.

MB: You can use `Date.parse` with extra quotes around the string, so the code example would still work.

GCN: It's actually using val and not src, so it should be ok.

MB: I'm saying it would be fine with `src` too.

GCN: I don't think that's true, I don't think it will accept a leading quote...

(Narrator: It does.)

BFS: I have questions about perf. I guess the VM tricks would be necessary, but I'm concerned about the extra arguments being passed into reviver. It seems like we can do everything in one pass in reviver, and if you use src instead of the val, then we've wasted time generating the val. I feel like a separate function would be better here.

GCN: Keys actually is an array, not a string. I'm using implicit string conversion. There's actually precedent for now re-allocating an array, it always reuses. As for performance, it's gonna be terribly slow though, as reviver is always a slow path. There's no source strings necessary, it's all literal substrings of the JSON input. I'm just trying to get away with as much as possible without implementing a whole new JSON parser.

WH: On the performance point, the problem is the running time is exponential based on the input size. This happens if you use re-parsing in your callback, for example.

GCN: I don't want re-parsing.

WH: If you have a reviver for a compound object which ignores the default value and instead calls JSON.parse on the source string, we've made it exponential.

GCN: Yeah, a user could do that.

MB: I just want to get back to the point about adding a new argument to the existing method (as opposed to a new API). I don't think this is a problem just because there's no precedent in JSON.parse. There is precedent on the Web Platform for doing this. I would strongly prefer changing JSON.parse over adding something new.

RBN: What if we decide that we want to add something to give any more context to JSON, behind the keys. Do we want to pass a lazy source object or something else that avoids the VM tricks and allows us to add those more properties. Either we have to add more arguments to reviver, or we can pass a single context object.

RGN: I'm open to that.

WH: For keys extension, it's ambiguous. On the slide you use commas inside a string to separate keys. What happens if a property name has a comma in it?

JRL: It's an array.

RGN: It's an array, not a string.

RBN: Reviver is a plural? API. It doesn't provide you with various things that you can get in other languages that support JSON parsing, to prevent DOS attacks. If we felt the need to investigate a better API. I'd like to investigate a better API than multiple arguments.

RGN: I strongly suggest that if we introduce a new function that it has a better API. There are existing libraries that do the things you're talking about, and that's something I want to get a pulse on. Are we looking to better support for JSON parsing? Or are we looking to just leave things as they are and be OK with that?

CM: What's the problem you're trying to solve? Are you interested in additional flexibility to have JSON parsing, or just this one feature.

MF: This whole proposal is based on a problematic area. JSON, if you're trying to represent non-JSON compatible values, you should serialize them into something that JSON can support, then you run over the output of a normal JSON.parse. It feels like you're forcing a reserialization library into JSON.

RGN: But there's a difference between an ECMAScript number and a JSON number. And that hurts even more now that we have `BigInt`.

MF: But legacy parsing is just something that we have to live with.

RGN: What I'm saying is that you don't support the serialize side of the JSON. It could be coming from another language.

JHD: I agree, it's common for i64s to be serialized directly to JSON numbers and JSON.parse can't handle it.

MF: Would we only add passing of src text for numeric values?

RGN: I would add it for all values, yes it will slow things down, but only when a reviver arg is passed. And that's already a slow path.

API: We were going to do this right now with `BigInt`, and we couldn't control all the serializer sides and it was like herding cats trying to update them all to not write these large values as JSON numbers.

BE: I agree with MF. This was asked several times for `BigInt`, and I feel bad for not fixing it in the `BigInt` proposal. I really like how you're present multiple ways to solve this. I was hoping to ship these values as strings in JSON, but I understand that we can't always control the serializer side of JSON. Hopefully the substrings won't need to be creating the slices, it'll just be in the calls to reviver.

RGN: Yah. It'll be called exactly as the reviver is currently. I'm not changing it.

DE: I guess it'll allocate `n` Rope slices for the source text. I like the options bag, but I'm ok with it.

WH: The argument I've heard here is that it's ok to slow down existing uses of reviver because revivers aren't used much. Can anyone quantify how often revivers are used?

RGN: I'm ok with slowing down reviver only because it's already slow.

MB: I discussed this with Toon Verwaest, who owns `JSON.parse` optimizations in V8, and he said the exact same thing. It'll only impact the slow path, not the fast path. V8 is good with this change.

RGN: I'm asking for stage 1. I didn't make the cutoff, so anyone can object for time. But I'll still ask.

MF: Can you state what you're looking for exactly?

RGN: The problem I'm trying to solve is the ability to retrieve the pre-parsed value of the JSON source text string, so you can parse it into the value type you'd prefer.

#### Conclusion/Resolution

- Stage 1 acceptance


## Editor in Chief

DE: BT is leaving the editor group, so we need an Editor in Chief. I'm wondering if we can decide on this at the next meeting?

JHD: BT is stepping down at the end of ES2019, so we have until May.

BT: My plan is to finish ES2019. So I'll still be around till May. But we should have someone in place so we can transition well before that. So I would expect by Jan that we should know who the next editor it.

DE: So Nov or Jan?

BT: Sooner is better...

AK: I'd encourage everyone that wants to volunteer. If we do have everyone on the thread, then we can do it in Nov.

DE: Does anyone have concerns with doing it in Nov? .... It sounds like we're good with doing it in Nov.


## RegExp.prototype.matchAll

JHD: I don't think we need to readdress it in the committee; I thought we'd decided to go with one of the two options, based on what those interested decided offline.

AK: I disagree. I think we need to confirmed by the committee.

DE: I think JHD and MB will follow up and bring it back to the committee.

JHD: I think it's fine to ask the committee instead of notifying the committee; we're just not ready to do either right now.

## BFS has too many proposals.

BFS: Anyone want to help my proposals? I've got too many. Come talk to me. Something like REPL, I have that proposal that I'd like someone to take over.


## Future syntax space for other languages

MF: We discussed the problem of extension languages (languages which expect to always accept ECMAScript programs as programs of that language) impairing the growth of ECMAScript. We saw this not long ago with TypeScript's interfaces and ECMAScript's interfaces (now protocols) proposal. We also saw this with TypeScript's and ECMAScript's private class fields. The group explored ways in which ECMAScript could reserve more syntax spaces (see 16.2 Forbidden Extensions) that would both be flexible enough for all envisioned extension language needs and also not so cumbersome that an extension language would feel the need to operate outside of those spaces. We also realised there would be additional benefits of this feature:

- consumers of extension languages would easily be able to tell whether the language intends to remain an extension language (as it operates entirely within this reserved syntax space) or whether it intends to fork/break on conflict with ECMAScript
- most ECMAScript tooling could work on programs of all extension languages, past, present, and future, with no additional development


## Export Decorator Ordering

BFS: We explored a variety of arguments with SYG and a number of others. We did have people who argued for both sides, but the reasons were good to learn about. Someone objected to my objection on the technicality in the mental model, I clarified that it's because there are follow-on proposals that will need to be proposed due to the mental model it proposes. If we have statements and they take some value operand, why are we not putting the decorator before the statement for things like `return` and `throw`. `export let` has some interesting cases. We also explored the merits of various options of how `toString` should behave.


## Same-realm internal slots for specs

DD: Mismatch between private fields and Web Platform does private state. The Web Platform has to work cross-realm, private fields doesn't. Maybe we could stop doing this in WP? There were some interesting points that this wouldn't work well, eg Temporal would break cross realm or Date. The upside of doing it is being able to self host the host language in JS, right now they can't really do it. I was discouraged, I didn't win. :sad:

MM: I'm enthusiastic, it's making the builtin and host abstractions more similar to what code written in JS can express. Then the shims can emulate. Cross realm access to internal slots in membranes is the only painfully non-transparent part of membranes.

DD: (Makes point that it isn't only rare code like Foo.prototype.bar.call(farFoo). It is also code like nearFoo.binaryOp(farFoo) if the binaryOp method access the internal slots of the farFoo argument.)

MM: You should generally define your APIs that you can use internal access only on yourself, and use public access on other instances. This was object best practice for dynamic object languages going back to smalltalk, which only had instance encapsulation not class encapsulation. By structuring APIs to only use the public APIs of arguments, you enable these arguments to be virtualized in other ways --- substituting other implementations of the same interface --- resulting in more flexible APIs. We should keep this best practice in mind in general as we proceed to define new APIs.

##  Matchall issue

DE: Still no consensus. I'm opposed to adding new behavior when analogous cases throw exceptions.

JHD: I feel my approach is easier for the user.

## Modules

MBS: Talking about package name map proposal, how it can affect node and web. We dug into loaders, and what kind of loaders we could implement, and how we could expose hooks to the loader to extend things. What defaults should we have for specifier loading, etc?

## Temporal

RGN: Covered working model of internal state of two of the core classes. ZoneInstance and CivilDateTime. Also some naming.
