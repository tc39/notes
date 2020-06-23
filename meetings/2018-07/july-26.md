# July 26, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), James Burke (JRB), Maxim Aleksa (MAA), Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Patrick Soquet (PST), Sam Goto (SGO), Dave Herman (DH), Brendan Eich (BE), Pieter Ouwerkerk (POK), Leo Balter (LEO), Limin Zhu (LZU), Aki Rose (AKI), Ross Kirsling (RKG), Shane Carr (SFC), Kevin Smith (KS), Ron Buckton (RBN), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Godfrey Chan (GCN), Domenic Denicola (DD), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Gus Caplan (GCL), Felipe Balbontín (FBN), Daniel Rosenwasser (DRR), Jonathan Keslin (JKN), Christopher Blappert (CBT), Dean Tribble (DT), Richard Gibson (RGN), Lin Clark (LCK), Allen Wirfs-Brock (AWB), Maggie Pint (MPT), Timothy Gu (TGU), Sebastian Markbåge (SM), Dustin Savery (DSY), Mike Murry (MMY), John-David Dalton (JDD), Alex Vincent (AVT)

Remote:
Rick Waldron (RW), Daniel Ehrenberg (DE), Caridy Patiño (CP), Justin Ridgewell (JRL), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG), Ben Newman (BN), Edd Yerburgh (EYH), Nathan Hammond (NHD)
-----

## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/07.md)


## Temporal Proposal update

(Maggie Pint, MPT)


- [slides](http://htmlpreview.github.io/?https://github.com/tc39/proposal-temporal/blob/master/July2018Updates.html)
- [proposal](https://github.com/tc39/proposal-temporal)


MPT: JavaScript only supports two time formats, local and UTC, and this is not very ergonomic; this was part of the motivation for "civil" datetimes. Technically, the spec text and submission falls under the requirements of Stage 2 advancement, so I am requesting that. (Reads slides describing differences between civil datetimes and instants). For parsing timezones, the ISO standard does not specify the timezone (just offsets), but there is a big need for this in JavaScript. For the `plus` method, we take an object with desired units and apply them in descending order of size. This is open to discussion, since you could have scenarios like (2/29/2016 plus 1 year and 2 months could give you either 4/28/2017 or 4/29/2017). You can also imagine these situations happening for days that aren't precisely 24 hours (consider shifts for Daylight Savings Time).

JHD: For this plus issue, if you pick one of the two behaviors, can you build one off the the other? In other words, building the rounding down behavior over two operations, but if you do the rounding at the beginning you may not be able to ever achieve that same result (so I would prefer the rounding behavior at the end).

MPT: I have to check, but I think there's a workaround if you do carry it, but I think it's hard to get the same workaround if you don't carry it.

JHD: If that's true, I would lean towards the option that allows you to achieve both behaviors (even if it requires multiple operations).

MPT: To achieve comparisons, for CivilDate/Time/DateTime/Instant we can convert to integer value that unit since Unix epoch, just as we do for Dates today. How should we compare ZonedInstant `valueOf`s? Do we also convert these to? Should two ZonedInstants with different timezones equivalent (`===`)?

JKN: Why nanoseconds instead of milliseconds as we do for Date?

MPT: There's a lot of demand for increased precision. Since BigInt is now available, it's not difficult for us to achieve this precision.

If we were to depart from InstantTypes and

MM: Clarity and avoiding misunderstanding is the best way to go. And I think ZonedInstant is the best one.

MPT: Thanks, and I would love more feedback on this. And there's more controversies, like the strong camp to call these types `local`, to match Java, to mean zoneless.

MM: I agree that local is a disaster.

AW: Maybe "Simple"?

MPT: Elixir uses "Naive", but that's a bit controversial too. I like Simple, but again we're really not sure yet. Another controversy is whether this should be a new global called `Temporal`, or a built-in module.

SFC:I was wondering how this interops with Intl.DateTimeFormat, etc. I would like to see any APIs that generate DateStrings to be Intl first. Where is toLocaleString?

MPT: Sort of by definition this would have to be a separate proposal.

WH: Currently you ignore leap seconds, requiring smearing them away. How will you work with operating systems, like upcoming Windows for example, which support leap seconds and in fact forbid smearing leap seconds?

MPT: Unfortunately, leap seconds are not included in Unix time and never will be. The problem with leap seconds is we actually have to store a table with all the leap seconds.

WH: I understand that you can't really predict them until they happen. But unfortunately, upcoming regulations require leap second support and forbid smearing to achieve it, so we should be compliant. I've read Microsoft's paper on why and how they will implement them in Windows.

MPT: If we go with the ValueOf implementation, this will break with leapseconds.

MPT: Leap seconds are my least-favorite part of working with time.

WH: Mine too. I'm curious how everyone else will deal with them. Microsoft's paper on leap second support doesn't include the API they'll provide.

API: Someone brought up this issue in the tracker. Unfortunately, there is no way in ECMA-262 to distribute data about dates.

MPT: Has anyone at CLDR looked at it?

API: Yeah, they have, but unfortunately this process requires a lot of time. Browsers need to ship updates, etc. It could be long enough of a delay that it's too late before the leap second actually happens.

API: I had a question on valueOf. For time, seconds since midnight makes sense. Instead of days since epoch, milliseconds might be better, so that you can compare a CivilDate to DateTime.

MPT: Now you're implying that there's a correlary between Dates and DateTimes

API: I'm in the camp that ZonedInstance should not compare. The programmer should say what they mean. If they want to compare two ZonedInstance, they should convert to UTC, for example.

AWB: You mentioned conversion to and from strings. I want to understand the format you're using to toISOString (formatting and parsing).

MPT: So, I think you're talking about the subset that we currently support.

AWB: I think you need to be explicit.

MPT: Yeah, there's a few things that aren't ISO compliant, like toString on time only...

AWB: It does have a time-only format.

MPT: Yeah, I'm just munging the standards in my head...

AWB: I don't like introducing this as a global. I would rather see it as a module.

JHB: How would you use it in scripts? So you can't do anything synchronously in scripts?

AWB: Yeah

JHB: I imagine that's not satisfactory for many people.

AWB: I oppose seeing this in any form other than a module. We need to stop polluting the global namespace.

JHB: Once that's supported, that sounds like a valid concern.

AWB: I have to put a stake in the ground somewhere, and this is it.

BFS: Did you just say import from a script?

AWB: If the problem is that we cannot import in a script, maybe we could allow synchronous import in scripts.

YK: I wanted to say, in the jQuery era, every program was written in asynchronous style. The idea that everyone has to wrap to get common idioms was the jQuery model.

TST: Maybe doing it as a module would be a solution to this, but I'm a bit concerned that there's not a lighter-weight way to do this.

MPT: There's a library that is basically does this—strips out the heavy aspects. But unfortunately just the computations themselves come out to be about 56kb gzipped, and we've even checked that all the code-paths are used, so it may not be possible to get more lightweight than that.

TST: Moment.js and Moment Locale is 66kb, so they've made it quite small. I think it's worth doing this in a very light-weight way.

MPT: So, what's the concern here?  Sure, we could expose CLDR data in Intl. What's the concern in going in this way?  The proposal is large?

TST: This is already a complex proposal, so would do ECMA-402 follow-up in a separate proposal. That sounds like too much complexity if you can't do it in an atomic proposal.

MPT: OK. I think that's a valid concern.

MM: So, I want to confirm, there is nothing in this proposal that gives you direct access to the current time or current date, right?

MPT: We did add some current time support. It's definitely something I'm willing to discuss, though.

MM: Okay, so that's a non-starter for me. It's really important that you keep arithmetic separate from access to anything in the outside world. It's the difference between system-mode and user-mode. It's very important to keep any hidden mutable state outside the primordials, with the grandfathered exceptions of Math.random, Date.now, and access to *current* timezone.

WH: It's kind of inevitable that you will get access to the current time at a very coarse granularity within any library that allows you to convert between UTC and local time; the rules of conversion change over time, so you can determine that just from the conversions themselves.

MPT: I mean, it's possible to move this off to a separate proposal, but I would like a more concrete suggestion on what to do.

MM: I think you need to separate those, though. If we want to consider that as a separate proposal, that's fine.

MPT: I would say, raise a GitHub issue, and we can start to hash it out. I would like to you propose what is the "ergonomic way" to handle this.

NHD: Java has all these separate partitions of their Date objects, e.g. YearMonth, let's call them significant figures. Is tackling significant figures something we want to do within this proposal? For example, given the string `"2018"`, a valid ISOString, but does it refer to January 1st, 2018 or merely the year?

MPT: So if someone made a object with 2018 and no other values, should it print out 2018? `new CivilDate(2018)`

NHD: My question is whether or not this is a goal to account for significant figures given a certain input.

MPT: My instinct is no, simply because if we really want a year-month type or similar, my feeling is that if it's that useful, then introduce it in a follow-up proposal. At the end of the day, the no-surprises model is super important for a proposal like this. The developer should be explicit about what they want.ˆ

NHD: Thank you for your thoughts.

MAA: The point of we shouldn't add dates together (separate from the plus method), but have we considered the TimeSpan/TimeInterval type?

MPT: Isn't it YK who really likes the idea of a datetime span type?  A lot of libraries have an interval types. I'm trying to keep this reasonable in scope. A lot of these questions come down to, "can we have another type?"  and the answer is yes, but I'm just trying to get these current ones done.

TST: Coming from the experience of having these types in other languages, those types are super expressive. Two dates separated from each other give you an interval type, which is expressive and ergonomic for the user.

YK: The rust time library is very small. The thing I want to say here—people aren't asking for more things, but a smaller set of things may work better plus this extra thing. Can we find a smaller kernel we can use here, instead of a 1000 types. It would both be very useful and I would like it.

RGN: I wanted to ask about valueOf, going back a little bit. Is there a reason we're returning numeric as opposed to string?

MPT: It could return a string!

RGN: It changes the meaning of plus from add to concatenate.

AWB: I think you need to look closely at the difference between toString() and valueOf(). You should maybe define them so you almost get strings.

RGN: I think greaterThan and lessThan use valueOf, and those work better on numbers than strings.

AWB: You need to look carefully at those operators.

MPT: There's merit in having an internal number representing the date since the computations become linear, when otherwise they would not be. (Though the leap seconds point, throws a wrench in this). The valueOf result doesn't need to be that number, however, it could be some other representation.

SFC:Could you return a Date from valueOf?

MPT: A lot of the reason for this API is that there is no mapping between a CivilDate and a Date; it's lossy.

WH: For the question of valueOf being numeric, I don't think leap seconds will preclude that since you could have two variants of valueOf with a default less accurate one representing the Unix computation and a more accurate one supporting leap seconds.

SFC:If we do separate these concerns into multiple proposals (including the concerns regarding Intl compatibility), I would like to at least see the two proposals land at the same time.

MPT: Unfortunately, there's not a lot structure into this process to guarantee for these proposals to land at the same time.

LEO: I think what Maggie is doing is to follow the philosophy of this committee. It would be nice to have someone working at the same time on 402, but I think what Maggie's doing is excellent and we have a huge group of people that could volunteer to work on the 402 component Shane is talking about.

SFC:I will open an issue to discuss.

SYG: Are daylight saving times automatically not in this proposal? When you make a ZoneInstant with an explicit timezone,

MPT: Don't understand the question. If you pass the word "local" to a ZoneInstant, it will take the browser's timezone.

WH: [Clarifying SYG's question] Do you have a notion of a `US/Los_Angeles` time zone whose UTC offset changes over the course of a year?

MPT: Yes it supports that.

DE: I think JS should support a better built-in date library as other languages do. I think a standards venue to design the good Date library makes sense. But 16kb isn't absolutely nothing. We've seen a lot of proposals over the years, and some of them have gotten a lot of pushback. I think TC39 is a great place to develop different standard library features, because we have a lot of different viewpoints here (industry, academia, etc.). I would like to see this proposal continue because I think it's a great precedent for other standard libraries. For the 402 point, I think we should work with ECMA-402 so that the proposals can leverage eachother, but I don't think Maggie needs to be the person doing it. BigInt has 402 integration as well, and in V8 BigInt shipped without 402 together, but Mozilla did. We can encourage them to be viewed as a single proposal if we think that's important. We also should think about TST's approach of just shipping the data without the built-in library.

MPT: I think we will not advance at this time, partly because some of the spec text fell after the deadline.

AK: Can you clarify what you mean by not ready before the deadline for the proposal?

MPT: Some of the spec text landed about two days ago.

WH: As an aside, if anyone is hoping to advance proposal levels at a meeting, I'd appreciate marking the proposal as going for advancement 10 days before the meeting. I look at those much more carefully than ones marked as status updates.

#### Conclusion/Resolution

- Not advancing yet due to deadline

## Abstractions for membranes
(Alex Vincent (expert invited by Mark Miller, MM))

- [slides](https://docs.google.com/presentation/d/1r0e_jPnGqPyT_q07p7jtHnD-dMV2ONN68Jc9FVze-XY/edit#slide=id.p)
- [repo](https://github.com/ajvincent/es-membrane)


MM: The purpose of this is a lot of useful lessons for what Alex did here for the committee. First of all, a membrane is a boundary in the object graph between two subgraphs. Proxy and WeakMap in ES6 were introduced to enable these membranes. You can think of these as "wet" and "dry" components separating each side of the membrane. As needed, the membrane grows dynamically to encompass more wet components. Some of the goals for membranes are to create these defensive security boundaries for impenetrability.

WH: Do you mean unidirectionally or bidirectionally impenetrable?

MM: Bi-directionally impenetrable.

MM: (Reads slides). For the TC39 committee, this is a very great way to express security policies that we think the committee should be familiar with.

AVT: (Reads slides).

DH: May I suggest a slightly different metaphor? Perhaps Inside/Outside.

AVT: Inside/Outside may make a ton of sense in this context, but you're about to see that this happens in a three-dimensional context as well.

DH: So I need to understand biology to understand this presentation?

MM: No, we'll explain shortly, and I think it will be clear to you.

AVT: (Reads slides).

MM: A membrane boundary acts a lot like a realm boundary, but you don't get magical access to class state, which holds better for this security model.


### Questions

BFS: I had a question with your coordinator with your proxy-mapping. It seems like there's no desire to get Membranes into a proposal before TC39. Are there any data-types needed though?

AVT: There's nothing special about Proxy mapping that we would need a new data-type for.

MM: None of the membrane work have identified anything that's wrong or lacking in the foundations. Even just to build the higher levels, it's just that the higher-levels need to be packaged together and better explained to users. But nothing in the immediate future needs to be brought forward to this committee.

BFS: Can you talk about weak references in the three-way membrane example you showed?

MM: Dean do you have thoughts on WeakRefs and multi-way membranes?

DT: No, I haven't thought about n-way membranes, but it's interesting. [In follow-up discussion with BFS and MM, we determined that the current behavior of the membrane code seemed correct: if any proxy or target is retained, so should any related proxies and target. The reason is that clients could use WeakMaps for softfield on any of those underlying objects.]

SYG: On IRC, Don't browser debuggers all have blackboxing of scripts already?

AVT: No debug means, by default, I want to blackbox.

TST: Minified code is blackboxed by default. This is usually about tooling, not about language.

MM: I also see this as a tooling issue, but we need some conventional signal from the developer to tell the debugger/tooling what should/should not be blackboxed.


## Reviewing the future JS syntax throughout the current proposals (overflow)
(Leo Balter, LEO)

- [slides](https://docs.google.com/presentation/d/179v41LMaEXDxaD-piSgYVi6btFJoNoeYVncXe0172GM/edit)

LEO: We had a PR proposing to redefined the Catch parameter to a formal parameter. Doing this in Test262 was deceptively difficult: while the spec change was extremely small, but expanding the grammar is actually quite long. So sometimes it's easy to talk about proposals, but very difficult to implement them. Why? Yearly releases are great for long-term goals, but hard to plan for specific releases. People have very specific areas of expertise, and topics are very complex that it's hard for all delegates to comprehend everything. These aren't all bad things, but we do need to improve how we collaborate with each other. How do we talk to each other more, combine efforts, promote guided decision-making? To summarize proposals involving syntax, we already have (before the start of this meeting) a very long list of Stage 3 proposals involving syntax, a pretty long list for Stage 2, but few syntax proposals for Stage 1. There's a lot of syntax changes. (Shows examples of many new syntax features in a single program). So there are several potential actions for our committee, we can identify fields of interest and form groups to create collective recommendations—reaching out beyond your local teams. I do this with RW a lot to bounce ideas off of. My recommendation is to help delegates to identify more fields of interest from other delegates, and perhaps we should experiment with drafting syntax proposals within other proposals to see how they work together. If they will be connected together in an eventual future, we should design them together as well. Finally, we should experiment using Babel more and more.

YK: I appreciate the slide that shows all the features together, but it matters a lot in a language that combines a lot of different syntaxes, and we should think about whether realistically you will use these syntaxes together. For example, you don't have to worry as much about the syntax for defining a method to collide with syntax that defines grouping. (Pointing to [slide](https://docs.google.com/presentation/d/179v41LMaEXDxaD-piSgYVi6btFJoNoeYVncXe0172GM/edit#slide=id.g3e4f3b9278_9_6)). This can be hard to lex for humans, and this slide with the class does a better job at illustrating than the [previous one](https://docs.google.com/presentation/d/179v41LMaEXDxaD-piSgYVi6btFJoNoeYVncXe0172GM/edit#slide=id.g3e4f3b9278_0_3) which is unrealistic. Maybe a good heuristic is how many covergrammars are needed?

MM: So, I very much like what you're getting at. I think the complexity budget needs more emphasis and needs more teeth. We talk about complexity budget, and it's a useful metaphor. In real life, there are many things that I want that are genuinely good, that I don't buy because they are too expensive. I can know this because I have a budget.

MM: Allen reminded me that when we were building up to ES6. We put up all the features on the whiteboard, and we spent all 3 days on triage. When we put them all up on the board together, we crossed off many things that were wonderful because they fell below threshold, a threshold we could only see when we saw the overall cost of everything. That was before the proposal process. The proposal process is a good thing, but it creates a situation where it seems like advancing a proposal is tangible progress, and it doesn't seem like rejecting proposals is tangible progress. But it doesn't show us how removing features is progress. We did once use a subtractive process, "use strict". We should be more sensitive to when we have subtractive opportunities and take those seriously. Like not having automatic semicolon insertion inside classes or modules. We squandered those opportunities to simplify.

LEO: I really like this perspective. I tried to cover this from a high-level point of view, I appreciate this perspective because it is from a different point of view.

BT: The proposal process gives us an opportunity to think about costs and tradeoffs, but we don't have the ability to grant something Stage 2, for example while considering all the other stuff that comes along with it. And that's a problem, we should aim to do that better.

SFC:These are new features when you're writing JavaScript natively, but I've noticed there's increasingly a movement of languages that compile to JavaScript. With CoffeeScript and TypeScript now, these languages clearly offer something that the industry wants. JavaScript needs to be extremely efficient, since that's what these languages ultimately compile to. JavaScript should have almost a bigger emphasis on performance than expressiveness for this reason. There's no single one-size-fits-all solution for this, people may want different syntax features, however one thing that everyone wants is performance.

LEO: That's a great point and kind of what I'm trying to talk about when I use the term "sandboxes".

WH: A few things are going on here. Focusing on just syntax, I've been keeper of the syntax for a while and made sure that syntaxes of various proposals don't conflict; that hasn't been a major issue with conflicting syntax that I have noticed. The opportunity cost of syntaxes precluding desirable future evolution of the language, I would say is a bigger issue. I would be more-or-less opposed to creating a standing syntax group; instead, if issues arise, we should deal with them ad hoc.

WH: Another issue more general than the syntax is multiple proposals with overlapping use-cases. I would consider this a big problem as well, leading to jockeying for one of them to get priority by advancing through the stages first. I'd like to see more discussions on this.

LEO: I am not suggesting a group for syntaxes, but rather collaboration to create guided decisions. For example, as an individual, a group of champions could recommend something and present it to the greater committee.

WH: To be clear, ad hoc groups are great. I just don't want a standing syntax group with periodic meetings.

DD: How many meetings are you allowed to have before it's considered a standing group?

YK: I don't understand what the objection is to that group interest?

WH: With a standing group, everyone who has an interest will be forced to attend a lot of unproductive meetings. The alternative is to create an ad hoc meeting, where you send an announcement and then you know what the agenda is. Standing groups tend to acquire a life of their own, and if there are overlapping groups, it can create a huge waste of effort and time.

BT: It's worth knowing as a deliberative body, we can create sub-committees. Some groups have been excellent at creating minutes and being accessible to people, especially to this room. Groups in general are things that standards bodies do often and work well.

LEO: I think there is something with groups. If we can fetch the best highlights. It's already being done with some groups. But like we have the Intl work that comes into TC39 and gives a summary presentation. The same thing happened with the numerics/literal separator that was a conflicting proposal, and we sat together, then came to TC39. We had the champions of both proposal to match your thoughts.

AKI: To respond to something WH said, the rigidity against any sort of collaboration outside the realm of the meetings is problematic. Nothing is going to get done if there are no external groups...

WH: That's not what I'm saying.

RJE: He does not want a *syntax* group that meets regularly. But rather only when needed.

DE: I wanted to support the idea that LEO brought up. Asking for an early prototype before stage 2. I don't think we need to ask for a full implementation, and I don't think we need Babel, but in the Temporal proposal, which has nothing to do with Babel because it's not a syntax proposal, the polyfill helped a lot because it helped flesh out some of the details. Some things are hard to prototype, like BigInt and symbol, but I think we should encourage champions to make these prototypes whenever possible. I'd like it to become a more regular thing. I agree with a lot of you about groups: I think it will be useful to have an open structure to discuss things. It only helps to openly discuss proposals outside of meetings. Group meetings should have agendas, and in fact some of the groups I am in have agendas. When we didn't have things on an agenda, we cancelled the meeting.

BFS: We have some people wanting to encourage use in Babel in Stage 2 as a testing ground, and I want to be weary of that. We can get situations where we get conflicts, where ecosystem adoption outpaces our research into the grammar, and we still have discussions doing on on Decorators, where ecosystem adopers have opinions different than this committee. I think it's worked out really well where we let TypeScript use the colon operator in more places. But I'm weary of always using Babel.

LEO: I understand that and admit there are some tradeoffs that we always need to consider but Babel is evolving to a system where some features are not really encouraged. We can't really ever say "hey, don't use this," so I think it's OK for that community to be able to do that. Consider Object Rest/Spread, since it was adopted so widely we had early feedback, and it helped develop the syntax and encouraged browser implementation.

YK: I think we shouldn't focus too much on what has historically happened with Babel. More importantly, you have two choices: discourage people from using features in early form (no Babel), in which case you lose feedback; or put it in Babel in which case you get feedback. I think the thing we should try to do is encourage people to understand the risks and benefits of being early-adopters. My opinion is that we should minimize the cost of both of those goals and not do so by having a global policy by saying people shouldn't use those features. I think everyone should use caution, and that early features are notoriously unstable. But the valuable feedback from early stage users in Babel makes is a good thing.

LEO: Among users of babel, creating a sandbox for ourselves could be a possibility. For ourselves it proves that it works.

DE: Just about babel, the messaging about not using early-stage proposals is getting stronger. Babel 7 makes stage presets removed. I'm glad that the Babel team is communicating and now being especially forceful on the stage process. Babel does implement early features; they won't stop getting PRs, and there is a lot of community interest.

JRL: I want to be clear, we're talking about Babel implementations or syntax?

BFS: I'm not talking about semantics, I'm talking about the ecosystem about something occurring in TC39—widespread adoption, or a grammar that we effectively must work around.

JRL: So we are trying to make it more explicit to end users that they are using early proposals. Like DE said, we are removing presets, but if they want to enable specific proposal features, they can enable it with a plugin, and there is no easy way for them to enable all features, only the specific features that they want. We kind of learned from the decorators issue, where people used these features way too early, and make it very clear to people that these are not real JavaScript features.

KS: My interpretation, thinking about the features and looking at the screen, is that we are running up against diminishing returns. We got a lot of bang for the buck in ES6 features: async functions, async generators. But at this point we are running into diminishing returns, and we need to make sure we are overestimating the utility that each of our proposals brings. There is a bias to believing that our syntax is going to make their lives better. But JS developers have a lot of problems and pain points, and I'm not convinced that syntax is high up there on the list. On the other hand, Temporal and proposals like that seem to really address pain points, and I'm excited about development in that direction. Waldemar brought up something about a standalone syntax group creating work for itself, as groups sometimes do. As part of our participating in this group, we should look in the mirror and figure out whether we are adding work for ourselves or whether we are making things easier for our users.

TST: I would push back on this. I do think that the adoption of more syntax features by the community through Babel is a strong signal that there is a lot of value in this. I don't think that we are in an area of diminishing returns for more statically analyzable programming styles. I want to push back against the diminishing returns argument. We will eventually get there, but seeing these slides, I'm not convinced we are there uet.

API: I just have a comment about how a polyfill helped Temporal and other proposals. If you are a champion and you don't have time to write a polyfill, just post in the reflector, and plenty of people at our companies would be more than happy to help get those polyfills created.

## Package name maps

(Domenic Denicola, DD)

- [proposal](https://github.com/domenic/package-name-maps)


DD: Okay, so there are 3 proposals I am working on that DE thought would be interesting for TC39. We have 15 minutes, so 5 minutes each. Um, so the first one is something called "Package Name Maps". As you know, Node does module name specifier resolutions using a complicated algorithm with file extensions and crawling the filesystem, etc.

DD: We don't have the option to crawl the web URL space, but people want very similar experiences, like importing from lodash and have that map to a URL; i.e. use these simple string names. On the web now, this is just not allowed. Anything on the web that doesn't start with / or ../ or ./ just isn't allowed.

DD: The proposal, which is not a TC39 proposal, but if it were would be in like "stage -1", is this package name map that you would set up before you do any imports. It tells how to construct a URL for lodash or moment, etc. If you are directly writing all the code, you could write these yourselves, but if you're coordinating libraries, and you want them all to agree the version of `moment` for example, this lets you do that. That's the basic idea...

DD: Another interesting feature about Package Name Maps: like people who are familiar with Node.js would know, in different places in your app, you want different versions of the same package. We have that built in. You can scope versions to different part of your app.

DD: Progress-wise, we're not close to a spec. We've started writing some tests, and they're passing.

DD: One FAQ: why not an imperative API for module resolution? It turns out, jumping back and forth from JS for every module specifier is not very efficient at all. It's not completely ruled out, but I like package name maps better.

DD: Okay, so that is Package Name Maps. 5 minutes. I think we will not have questions because we do not have time. I'm just here to make the committee aware of these issues.

AK: I don't think it's a good use of time if you're not willing to discuss these questions.

DE: I think it's good to discuss because of the cross-cutting concerns, and since it relates to other proposals involving layering, etc.

BT: Yeah, the ability for us to give feedback is important.

DD: These all have issue trackers. Given time constraints, and the audience for these proposals, GitHub is probably the right place for feedback, instead of plenary.


## Layered APIs

(Domenic Denicola, DD)

- [proposal](https://github.com/drufball/layered-apis)

DD: Layered APIs are an effort to work on high-level features. We talked in the extensive web manifesto, we wanted to start working on low-level features, but now that we've done that we should work on high-level features. We want these to be loaded lazily since not everyone will use these features.

DD: The other constraint is on the standards process. The layered API, as a feature, is a high-level feature and we have to accept the high-level web manifesto. This is a good in a lot of ways. There is a high-level HTML widget called details. We went through inventing shadow DOM to allow for details, but that still didn't completely work. So future features will not suffer from the problems of details. But there are still some things that are fundamental.

DD: One of the features I brought up previously is the ability to censor source code, which would be very useful to web developers.

## Get Originals
(Domenic Denicola, DD)
- [proposal](http://github.com/domenic/get-originals)

DD: Another feature that builtins have that web developer created APIs do not is the ability to use the original versions of things. In particular, if you look at a DOM API, like, for example, querySelector, if you were trying to implement that in JavaScript, it turns out the brower's querySelector is not affected by users messing with prototypes. It just runs native code. This is important for robustness for multiple websites. What if we change how it's used slightly? Would it break? Possibly, but because it is implemented in C++, it does not break. How do we bring that same ability to the web?

DD: It turns out that we can do this on the web. But it only works if you're loaded first, not loaded in a module. To solve this for things not loaded first, I have a proposal called get-originals. Note that the API is undergoing a lot of churn; don't take the shape as very essential. The basic example is that you have this function that calls a lot of built-ins. It calls a getter, calls a method, etc. How can we do that in a way that is not susceptible to tampering? In this version of the API, it's broken into a bunch of global functions—so that's how you would get access to it.

DD: An FAQ. If you're approaching this from the TC39 perspective, one approach i: Why don't we just give unique identifiers to all the built-ins?  Instead of my version up here, where you just call the original object?  It turns out this is really brittle, because we move things across the prototype chain quite often. That wouldn't be great.

DD: Another interesting thing is the idea of not reify-ing the properties of built-in objects. But now if you can call the original method directly, you don't have to reify the accessor or method. That's good for efficiency.

DD: We think tooling is a key part of this. In my version, it's not realistically usable by itself. It needs tooling. We have other ideas in the tooling space, like if we get 100% test coverage, then we can create a super-poisoned environment where we fail the test if you somehow access the poisoned elements.


## September 2019 Meeting Location

(Rex Jaeschke, RJE)

RJE: Do we have opposition to going to Europe a second time next year?

AK: I believe JHD was pushing strongly against 2 Europe trips.

YK: I am also against two Europe trips.

SFC:I've never been to Barcelona and it seems like a cool place to go. With slides, it's not terribly difficult to attend remotely.

JHD: I think that's aspirational. It's difficult to attend these meetings remotely.

DE: I am an unusual European delegate since I have a lot of family in New York. In the past we've gotten a lot of complaints about the scheduling happening too late, so I would like to determine this today.

RJE: I would like to propose New York City then.

JHD: That means we have zero in the Bay Area. We could host one there.

DE: Google has offered to host once a year, and they're already hosting one in New York.

SGO: Google is happy to host multiple times if necessary, and we can host in the Bay Area.

??: We should have two in the bay area.

YK: Two in the Bay Area means three on the West Coast?

DE: Three if you include Arizona.

TST: Flying here isn't too much the issue, even dialing in is quite difficult for people on other continents.

#### Conclusion/Resolution

- no conclusion


## Intl.NumberFormat Unified Feature Proposal for Stage 2

(Shane Carr)

- [proposal](https://github.com/sffc/proposal-unified-intl-numberformat)
- [slides](https://docs.google.com/presentation/d/1_1D15PWniTlbLu1BOU9aDf5H87Ecq85i0CuLl5KA4DE/edit#slide=id.g3db4b37152_0_0)

SFC:This proposal essentially adds new features within the options object to add features that have been requested by many users. First, spec updates: we add the option narrowSymbol to the currencyDisplay property (i.e. $ instead of $US). Next, Units. The Intl API has a concept called Style, and we add this style entry called `unit`, which has narrow, short or long options: (i.e. Narrow `"º"`, Short `"º F"`, Long `"º Fahrenheit`"). Next, Scientific and Compact Notation will now be represented using the new option `notation`, with options "compact", "compactDisplay", "scientific". Another feature that's been requested is Sign display, and this is a good things for Intl to govern best practices for locales. Sign Display uses various options like `auto`, `always`, `never`, `except-zero`.

WH: If you provide -0 and always show sign, does it return "-0" or "+0"?

SFC:There was a question about this on the GitHub issue. I would refer to that.

SFC:There's also the option of `currencySign` which enables an accounting format. Now, let's talk about combining options. Most options are orthogonal, and can be used together. Thanks to DE and the ECMA-402 subcommittee for helping me with this proposal.

JHD: WHat happens if I pass in an invalid option?

SFC:If your option is not in that set, the spec says throw a RangeError. The one exception is `unit`, not all browsers will support all units, but we will list a minimum set of units. Browsers can

JHD: If I pass a non-option name, what happens? i.e. `uni` (missing the `t`)

SFC:The options bag is handled internally by ignoring invalid option names.

JHD: Are the options using get (does it use the prototype)?

SFC:The way the properties are accessed is the same way the Intl spec already processes properties, for consistency.

WH: What about rounding behavior?

SFC:That's out of scope.

WH: What do you mean out-of-scope?

SFC:Designing a good rounding API is not an easy thing to do.

WH: It's kind of inherent for the compact notation you're proposing here. How can it not be in scope? In your rounding behavior issue you mention that 1230 in compact notation would be "1.2K". Multiply it by 10, you get "12K". Multiply it by 10 again, you get three significant digits: "123K". Multiplying by 10 again gets back to two significant digits: "1.2M".

SFC:It's a very good question and if you have ideas for how we should implement this in the spec, please let us know.

DE: This is great work in the proposal, although the spec text isn't complete on insertions, it's definitely sufficient for Stage 2.

SFC:Thank you, and I really appreciate all the great discussions in GitHub. So to WH, if you add more questions like that on GitHub, please do.

#### Conclusion/Resolution

- Stage 2 acceptance


## JavaScript Standard Library

(Michael Saboff, MLS)

- [proposal](https://github.com/msaboff/JavaScript-Standard-Library)
- [slides](https://github.com/msaboff/JavaScript-Standard-Library/blob/master/slides-JS-std-lib-July-2018.pdf)

MLS: The amount of functionality part of the JavaScript standard library would likely grow over time and less module code would need to be downloaded. The standard library wouldn't be enabled by default—a programmer would just import this functionality and be able to use it. Hypothetically, suppose someone comes to TC39 asking for a new method to be added to the JS Core. Everything looks useful and we decide to move forward. They propose `Array.smooshed`. Because we've polluted the namespace, we've made it very difficult to determine whether it's going to be a problem. Is there a way we can add extensibility safely? Imported objects are frozen and users extend via inheritance and wrapping. This is what I propose so we don't get "smooshed" again. (Reads slide about extending Statistics library). This raises a bunch of questions that are out of scope for this proposal, like what features go into standard library vs. core library, how do we stage new features, and how do we collaborate with Node.js and web standards bodies? Next steps are to describe polyfill fallback support.

JHD: I specifically want on my website to say this polyfill replaces any browser implementation of the Standard Library. This is useful to fix bugs in browsers. There's plenty of examples where code that's doing some built-in thing and the fact that the browser's supplying it, but doesn't work, and I should be able to deny access to the original versions.

MLS: So how you do this today with some other module wanting to do some functionality is...

JHD: Yeah

MLS: Can't that module/polyfill do something on the global object?

JHD: Yes, and I appreciate the danger that that code can change the world, but I'd like to create a function that nails down the implementations of the functions I care about then issues a callback when it's safe to use.

MLS: That's a bigger problem than what this spec is trying to solve.

JHD: Most people don't bother to lock down, so I propose we do something that makes that more ergonomic.

DE: I think we can get this kind of polyfilling and tweaking with something based on Domenic's proposal. For fallbacks, use mixins. You could have a fallback listed in the Package Name Map. If you want to have a polyfill that fixes a bug in another implementation, rather than redirecting std:something to something else, and that something else is per-directory, it would open the original one and wrap the original one, or something like that. I'm glossing over a bunch of details, but I think we can work through that.

DD: Just to clarify, I know michael referenced the fallback syntax. The proposal as it's written right now lets you give a URL as a fallback. But if browsers don't implement the fallback syntax, then the fallback won't work, so it's on the chopping block. The most backwards-compatible way is different: https://github.com/domenic/package-name-maps/#referencing-host-supplied-packages-by-their-fallback-url .

YK: I see how that works, but you need a way to point back to the original one.

DD: I just wanted to clarify why this doesn't work.

YK: I said already, and I don't think soft fallback really solves the problem.

NHD: One of the things that we were exploring in this was `import Date from __bikeshed__`, which would get you the original Date object; not necessarily the prototype equivalent, but something without tamperability. We're fully aware that this is a problem that needs to be fixed, and has a corollary with the getOriginals work.

JHD: My next topic was synchronous usage in scripts. I think it's a very different discussion that has come up on other proposals: should this feature work in scripts, or should it work in modules. At the moment, I believe import and export are the only things required for modules to work. I think the problem you're trying to solve exists in scripts and will exist in scripts for the foreseeable future.

WH: You're looking to advance but I don't know what the proposal is. You gave a slideshow, but there was no proposal.

MLS: The proposal is that we add a standard library capability to JS.

WH: So what would the desired outcome be?  Because it's very vague right now. The idea is vague, like saying we should add standard syntax. Is the goal when it reaches Stage 4 that you have specific libraries available in the standard library? Are you proposing a process to add such things? Are you proposing some specific language machinery here? It's just very vague; I see this as a good match for an effort to launch a group, but I don't know what the proposal here is.

MLS: The proposal is to provide the mechanism for a standard library to be available. It's that simple. There are some examples of components that could be included, like Temporal, but that's not this particular proposal. I'm proposing the mechanism for putting standard functionality that is not available in your standard object to get the object into your namespace.

MLS: Mechanism meaning standard functionality. When you import that functionality, you get it in your namespace and it's frozen.

WH: "Mechanism" is still very vague. It sounds like you're proposing modules. I'm confused because modules are already in the language.

MLS: It's different from modules, since these are part of the standard itself.

BT: The module specifier in MS is something we need to decide on, as well as the capability to polyfill.

AK: I wanted to first address the procedural question for what this is. I wanted to point out that for stage 1, you don't have to have a lot of concrete stuff.

MLS: And I purposely don't.

AK: Now, the freezing thing. It seems like if there's a version of Statistics, and they wanted to add another method to Statistics, that's tricky; they can't monkeypatch it, etc.

MLS: They can import it under a different name.

AK: So if I'm writing a polyfill... there are some reasons the language has benefited... some of the experiences I've had working with Dart and working with a language that's very locked down is hard. It's hard to make all the implementations look the same. I'm not a fan of the freezing and I don't think it fixes the problem you're trying to solve.

YK: The polyfill problem comes up a lot, and fundamentally the problem seems to have a privileged way of running (i.e. first). We don't actually really have a privileged position to do that, however. But we'd like to allow that. Realms tries to allow that, with an initialization callback, but if we keep trying to solve this problem in an ad hoc fashion, we're not going to be satisfied. Any lockdown feature will come into conflict with that other problem. We need to decide what the mechanism for that is.

MLS: I agree with what you're saying. I can see how the app wants to lock things down, but so do libraries and dependencies, and you run into the problem of orders and priorities and things like that. It's a difficult problem to solve, and I don't want to lock it to this.

YK: All I'm saying is the only person in the position to say that is the whole app.

KS: I think the reality is that (1) JS has an underdeveloped standard library. (2) People want to ship less code. (3) The fact we have the underdeveloped standard library is an opportunity. We can build on the experience of other standard libraries that are out there. It can be like Intl, where we come in and there's an awesome standard library feature being presented.

MLS: I think adding functionality without incurring a syntax cost is a great other feature of this proposal.

DT: In response to YK, one of the things we did in response to the realms shim was that we need to provide direct support for shimming since this is a thing part of the JavaScript paradigm. Some direct mechanism to support shims and let them run first, and provide a realm.

BT: What does Stage 1 mean if the layered APIs proposal doesn't go through the stage process.

MLS: They're not wedded together, but they're closely related.

DD: There's years of history with Node.js to support standard libraries, and now with Layered APIs, we very much support this work and intend to work together on this.

MLS: We need to work with the web bodies to make sure we are in alignment.

BT: My concern is just that we're voting on Stage 1 for this thing but a lot of this is part of another proposal that doesn't intend to go through the stage process. We can help of course.

MLS: I suspect that we should work in lockstep with Layered APIs.

DD: Concretely, I would view this as TC39 has no process for suggesting to Node.js things for standard libraries. But we are interested in putting things into standard libraries, and this proposal enables us to do this.

MLS: So to be clear, I'm not saying that we conclude what's in the standard library. I'm not saying we can't do that, but it needs to happen and it needs to be in cooperation with Node.js.

DE: I'm a big fan of having this discussion and collaborating with the web and Node.js. But some open questions like, will TC39 export anonymous module records that hosting environments map to?

DD: Yeah. I generally agree. I think we've seen a lot of good convergence between Node and the browser, like in the global space: setTimeout, new URL, TextEncoder/TextDecoder. If TC39 wants to try to be a broker in those discussions, that makes sense. I think it would be a shame if we divide the namespace by standards body. If you make it "tc39:encodeURIComponent" but "whatwg:URL", that would be bad.

DH: I agree, but to add some nuance. There are APIs that are universal in value, but may be driven by people who are more accustomed to working in one body or another. There are certainly APIs that make some context on the web and not on Node.js, and the namespace may not make sense for all contexts.

DD: Well, C++ will put `web_view` in `std::`. (Laughs)

MLS: I agree, you want some functionality, not some broad capability. We want something that's easy for people to remember.

SFC: In Android, for example the standard library will get implemented but then it will take years to make it into the actual platform and widespread enough to use. You end up with messy ways that you implement fallbacks and polyfills; for example, you need to pull in polyfill code for everyone, even browsers that support said feature, unless you have sophisticated fallback mechanisms. I think that a really important part of this discussion is how do we deal with this and make a transparent and standard way for dealing with these fallbacks/polyfills rather than dumping the fallback/polyfill problem into user land.

AK: This seems like a good segue to the TAG meetup.

WH: I object because we only have a slideshow at this point. I very much want a standard library, but it's not yet clear to me what we're signing up for for stage 1 here. If you can clarify what is and what isn't in scope, I will support it. Is the goal just to specify the mechanics of how people implement modules and how people use them? Is the goal to specify the modules themselves? Is the goal to set up liaisons with other organizations to define the modules?

MLS: It's clear we're talking about the mechanics, right? Of how people use them and define them?

WH: Correct. Are we also trying to define the actual standard library modules?

MLS: No, I am not saying definitively whether future proposals for standard library require the staging process. But to be clear the `Temporal` module of the Standard Library is not part of this proposal. This is just concerned with the mechanics.

TST: Is it fair to say that you don't want to include any functionality here, but you also don't want to develop this in a vacuum, so it should go in tandem.

WH: Yes, it's fine to collaborate. Thank you for the clarifications. I withdraw my objection.

MLS: It's something that we've needed for a long time; we need a way to offer a way to introduce a standard library.

TB: MPT said that we would need guidance. Temporal is a global feature, but if std were available, it would help that proposal.

#### Conclusion/Resolution

- Stage 1 acceptance
- JHD feedback for stage 2: address polyfill question, and sync usage in Scripts
