# March 21, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Dave Herman (DH),  Kent C. Dodds (KCD), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Michael Saboff (MLS), Sebastian Markbåge (SM), Bradley Farias (BFS), Maggie Pint (MPT), Jamund Ferguson (JXF), Myles Borins (MBS), Logan Smyth (LSH), Sarah D'Onofrio (SDO), Alan Schmitt (AS), Dean Tribble (DT), Peter Jensen (PJ), Mark S. Miller (MM), Leo Balter (LEO), Zibi Braniecki (ZB), Rafael Xavier (RX), Yehuda Katz (YK), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Brendan Eich (BE), Lyza Gardner (LGR), Mathias Bynens (MB)

-----

## Adopting the agenda

- [agenda](https://github.com/tc39/agendas/blob/master/2017/03.md)

DT: WeakReferences. Please add 2 additional minutes.

AK: Please add items 1 week in advance.

Agenda adopted

## Adopting the minutes

Minutes approved

## 5. Report from the Ecma Secretariat

AWB: István will do this later.

## 6. ECMA-262 Status Updates

(Brian Terlson)

BT: Spec is now frozen to any normative changes.

BT: Most new things will go into ES2018.

BT: Ready to approve the draft. Minor editorial changes are ok.

BT: Printable Style sheets not working, we need to improve this. Asking browser devs to make printing support easier :)

AWB: The patent document is out for review. Members should get it to their lawyers.

## 7. ECMA-402 Status Updates

(Zibi Braniecki)

ZB: I'm not prepared for this discussion. I believe Caridy will be giving this. Will come back in a few minutes.

## 6.ii Vote to accept ECMA-262 2017 final draft and forward it to Ecma GA (approval subject to completion of RF opt-out period with no opt-outs)

AWB: Voting on the standards is one of the few things that needs a vote. In a minute or two, we will go around and people who actually represent Ecma members should determine who from each organization will vote. Each member will vote yes/no/abstain (where abstain is the equivalent of "no"). We're voting on the 2017 version of ECMA-262 and ECMA-402, based on the final drafts that the editors prepared, subject to the assumption that no one raises an objection during the RF opt-out period (in which case we would not be approving the standard in June, but that has never happened). After we approve it, this will go through the Ecma executive committee, onto the GA in June with the final vote.

WH: No one has ever opted out of an opt-out, but we've had patent shenanigans in the General Assembly before.

MM: Have we had any patent shenanigans regarding ECMAScript?

WH: One of the companies decided to say that they might have patents regarding every standard that was up for a vote.

YK: Only once a feature gets to stage 4 does it get in the spec. What we're doing now is technically a formality.

AWB: I suggest we do a single vote covering both docs.

LEO: We also have the Ecma TR104.

AWB: We will handle that separately.

AWB: Let's go around the room and have those who have voting authority make your vote. Note takers please take note of the organization who is voting.

YK: Tilde Yes.

DH: Mozilla Yes.

WH: Google Yes.

DT: Shape security Yes.

SM: FB Yes.

MLS: Apple Yes.

BFS: GoDaddy Yes.

BT: Microsoft Yes.

MPT: JSFoundation Yes.

PJ: Intel Yes.

AS: INRIA Yes.

KCD: PayPal Yes.

DFV: SalesForce Yes.

AWB: Someone will count them. We got "yesses" and no "no"s. It will be referred to General Assembly for approval. Our work is done for last year.

All: _clapping_

#### Conclusion/Resolution

- Resolution to submit the spec to the General Aassembly for approval.

## 8. Test262 Status Updates

(Leo Balter)

LEO: Need help from Ecma for an email for use by Test262 so that private emails don't need to be used.

LEO: In other updates. I was able to do a bug triage on more than 100 issues and pull requests in the last month. There were many many closed issues (around 50) including tests on rest and spread properties. We now have over 100k LOC for async/generator tests. For object rest/spread, we have a new JSC contributor from my country who has been very helpful with the tests. He also implemented it in JSC. We need more support--I'm glad Google is supporting me, but I need more support for Test262 development.

LEO: I'd like to discuss removing the copyright line in Test262 tests in a timebox.

AWB: Let's discuss TR 104.

LEO: There's still a draft.

AWB: People have probably not reviewed it adequately to vote on it yet. Post a link here for TR104.

__[link](https://github.com/tc39/test262/blob/master/Draft%20TR%20ECMA-104%202nd%20edition.doc)__

LEO: Yes, I will post a link. We didn't have any updates on it since last year.

AWB: If we can get the link posted, people should have time here before the end of the day Thursday to do a quick review of that. I'm guessing people wont have any concerns. That also requires a GA vote, so we should have that taken care of in the same package. Is that ok everyone?

LEO: Yes.

AWB: So get the link up there.

## Any items for the 2018 edition?

AWB: We talked about the 2017 edition of the standard. Are there any items for the 2018 edition?

BT: One of the big things I've been pushing this year (and plan to push in a big way next year) is machine readability. Specifically reducing the number of terms used in ECMASpeak. Specifically, I'm looking into making ECMAIDL a subset of WebIDL.

YK: We should really be willing to use a subset of WebIDL. There may be something more suitable for webspecs that's more suitable for JS semantics.

BT: That's the path I'm interested in going down. Thinking of calling it JIDL.

WH: What's the context for making the spec machine-readable?

BT: WebIDL is a web interface description language that the web uses to define the shape of APIs. It's a specific language for describing interfaces.

MM: It IS NOT straightforward (laughter)

WH: How much of this is meant to be machine readable? Are you proposing replacing the prose definition of the sort function with a machine-readable algorithm?

BT: Today if you want to see what properties exist on intrinsics (for example) you have to read a bunch of prose. I want something that's easier to be read by spec readers. I'm not talking about the algorithms, but specifically properties and their attributes, and not even coercions. It would be a straightforward small syntax. This way, we could get rid of text like, "and this property has these attributes".

BT: This is not going to replace the prose of the algorithms like the sort function.

MM: A question for Alan Schmitt, who's been working on automating the ECMAScript spec: Is there something that could be extracted from text in this form?

AS: I think so. If there is something you want to extract, you could easily get it out.

BT: Could spec readers easily consume this syntax?

AS: Not sure.

BT: Let's talk, then.

YK: I think that this would significantly improve the spec.

DT: Are you also looking at refactoring parts of the spec. For example `eval` would be good to extract out and parameterize. Are you looking at that sort of thing?

BT: Yes. There is a proposal to add a structured header to clauses that say things like "this defines this method and takes these parameters" That would help with tooling. That's definitely a road I'm going down. I haven't given much thought to any other refactorings.

AWB: In what?

BT: Possibly inline Annex B, although that's controversial.

WH: Yes, that's controversial!

BT: I think it would be pretty nice. But yeah, that's the only refactoring that's on my radar. I'm totally interested in refactorings. But I've been in this document so much that I'm resistant to do any more significant refactorings.

AWB: I can understand what you say about the IDL for properties. But I'm wondering about the other major place where there are prose descriptions for built-ins are on the arguments. It's not clear what you could say about arguments other than "we call the first argument X".

BT: WebIDL has the capability to describe function parameters. It goes further to say that if you define your function as taking in a number that implies that there's a coercion done to number. I'm not going to include this in the MVP. I don't want the syntax to describe the shape of a function. I would leave that to editorial conventions and prose. The automatic coercions... I have two minds of it. There's an issue raised in 402 where it says do all your coercions at the top, and the Ecma standard says do all coercions when you need them.

YK: The ECMAScript way is more natural.

BT: I don't like the WebIDL way of doing all coercions up front. There isn't much value in describing the types of coercions....

YK: The current spec has arguments because function.length matters sometimes.

AWB: The current spec has prose that describes how function length is given.

BT: We do have language in the spec that describes that the function's length is the number of params given.

YK: Given that is a thing in the spec (and it's convention). I think it would be fine to have something that was to solve that particular problem.

BT: I think we'll get there eventually. I'm trying to take babysteps. The structured header for clauses is going to be a [big one?]. I am continuing to push the tooling side of things. I have some features planned.

YK: +1

BT: And then I do plan to continue pushing the tooling side of things. I have some features planned. Before I can do that I need to fix printing. But after that I plan to finally have the ECMarkup tooling to have: "Given any clause..." Wouldn't it be sweet to click on a clause and for any given clause it'll show all dependencies? That is now possible. There's also a VSCode extension one of my colleagues has been working on and I'm working on refactoring to support that as well. And I think that's all I have on my end. There's probably more that I'm glossing over having not prepared anything. Wish list items?

MF: Support for proposals would make everyone's proposal writing lives better.

BT: So I don't need to manually integrate all the proposals?

MF: Yes.

BT: That sounds great.

YK: I would like that as well.

BT: I have not talked to a single implementer that prefers having Annex-B separate.

MM: I would like Annex B to be separate.

BT: If I have the elements for the diff-spec stuff, I think I could add a checkbox to separate them.

YK: I think there are some places you need to monkey-patch things.

BT: And one of the other things I want to solve is this refers to step 6 and step 7.

YK: You want labels.

YK: I would love someone who believes strongly in this to give a presentation on this in the future (not now).

DE: One other thing is color in the spec. In other specs they make a lot of use of color which makes the document more readable and less boring. What if we use more color? And add (to the draft spec) examples. If we have a bug that partains to the draft spec we can have this to cross-reference and have it highlighted red or something.

WH: Color is useful for notes, identifiers, keywords, grammar productions, etc. If we were to use different colors for Annex B and everything, it could require too many colors and get really confusing.

DE: I'm talking about background color.

YK: Take a look at the decorate proposal which does this well. One thing I'd say about color is there's an accessibility issue with color. We should have someone who has an intuition about this (ideally someone who has a11y needs) review our work to make sure that we choose good colors.

AWB: We're getting into document design space. We need to get that as a cohesive whole, not just one step as a time.

BT: I totally agree with Dan's request for more semantic meaning to notes and that side of things. Ecmarkup has some [new tools] that make it easier to notice what's happening. Everyone should check out the decorators spec, because that's kind of where I've been putting my ideas. (Examples: https://tc39.es/proposal-decorators/#sec-runtime-semantics-makefunctionuninitialized, https://littledan.github.io/proposal-integer/)

AWB: I don't see substr() as needing to be in Annex B. I looked back and couldn't figure out why it really was put there. Everyone has added it. I don't see why it needs to fall into that category. It's just a redundant.

BT: How do you see substr() as different from anything else in Annex B.

AWB: Some of the other functions are in there because they have limited applicability or Y2K issues or some other bad aspect to them. I don't see anything that bad about substr(). The concern about creating confusion doesn't apply. It is what it is; implemented in all engines, etc.

BT: What's the concern?

AWB: Because none of the Annex B criteria really apply to it.

YK: What are the criteria.

AWB: Things that have issues with them.

YK: I think that we should merge Annex B into the spec. There's a strong sentiment among people (including implementers) on this point and I think we should have someone come with a prepared presentation on this subject.

BT: Step 1 is inline it.

YK: The answer is not "it is normative".

BT: It is not normative. It is in the clause that...

AWB: I was having a discussion with someone about Node using normal sloppy mode using normal function semantics. And I asked "Why is that?" And it's because that's what V8 does. Because you should never actually see that.

YK: There's a lot of JavaScript in the world and implementers all need to implement Annex B.

WH: That's throwing in the towel. Don't want to make Annex B normative.

AWB: In the web you have lots of code that nobody can maintain. That's not the case on Node.js.

AK: In the interest of moving along, I think it'd be good for us to end this conversation for now and push it on to another time.

YK: Can I say one more thing? I think that if people want to advocate for not throwing in the towel, then we should come up with the goals for this.

AWB: This would require evangelizing implementations to say "you would have to switch".

MM: That's not required for my goals. I wouldn't mind a switch, but none of the main implementations needs to have a switch in order to meet my goals.

AWB: That would be required if you say these things have to switch.

MM: None of this would be required with the goals I have in mind.

BT: I'm coming at it from an implementer's standpoint.

MM: We should just have a face-to-face conversation Brian to talk it out.

BT: Ok.

SYG: I have been told Caridy is on the call now.

#### Conclusion/Resolution

- Further discussion on Annex B


## 7. ECMA-402 status update

(Caridy Patiño)

AWB: We already have the vote to approve the final draft. Hopefully you will tell us that it's ready to be approved. _chuckling_

DFV: Having issues hearing him. He's joining now.

DH: I am pinging him now. Some issues with audio setup. Is that Diego?

DFV: ...

DH: Our sound person says you are showing up as self-muted.

CP: ...

DFV: I'd say you should move on and try again.

AWB:  We'll go ahead and move on to the 15-minute items.

## 10.i.a. Template Literal Updates

(Tim Disney)

- https://github.com/tc39/proposal-template-literal-revision

TD: Lifting the escape sequence revision to tagged template literals. It is in multiple browsers (Chrome behind a flag and Firefox), Test262, no recent changes, asking for stage 4.

YK: TL;DR: It makes things easier to implement overall.

WH: Has anything changed in the proposal lately?

TD: No.

AK: The owner of our scanner didn't love how it was layered between the parser and the scanner. And the real question is do we really have folks that want to do things with this?

TD: I have things I would want to do with it.

MF: The violations of the escape sequences that are not uncommon sequences is justification enough.

YK: For what it's worth, I have hit some variance of this bug repeatedly and I've always been: "Oh, I'm glad we're fixing this."

WH: I like this proposal.

AWB: In particular, going from stage 3 to stage 4, unless we've had problems with it then we should just ask whether it meets the criteria for stage 4. So... Do we have consensus that this should be a stage 4 feature which means it's in the standard in 2018?

AK: Sorry, for my memory, did we expect any compatibility issues with this?

TD: No compatibility issues because you'd have to be relying on a parse error.

AK: For cases where there might be compatibility issues, I'd say maybe hold back, but I don't think we have to worry about it.

AWB: Ok. Consensus? This is our first ECMAScript 2018 feature.

YK: A use case would be putting JS code into a template string for documentation.

#### Conclusion/Resolution

- Stage 4 acceptance
  - our first ES2018 feature

## 10.i.b RegExp Lookbehind Assertions

(Daniel Ehrenberg)

- https://github.com/tc39/proposal-regexp-lookbehind

There's a presentation linked from the agenda.

DE: Just to recap the purpose for the proposal. This is a zero-width assertion that matches a string without consuming anything.There are both positive and negative look behinds now. ... At the last meeting I was asking if we could go to stage 3.

(see slides for more details)

WH: It would be helpful to know what has changed, because I've reviewed this before.

DE: The only thing I changed since the last meeting was updating the explainer to make a correction to the explanation of the numbers in the groups. The spec always said the groups were numbered left to right, now the explainer explains this also. Other than that, nothing has changed since the last meeting.

WH: In that case I'm happy with it.

DE: We have two implementations. One in V8 and one in the Dart VM. It's not a JS implementation, but it does implement this feature.

AWB: 2 implementations are not required for stage 3 anyway.

LEO: Writing a test for this (Test262) would be the best thing to review the proposed syntax.

DE: We would love your help in writing tests!! There are some tests already on github, but we would love and plan to do work on these tests, but having started porting them to Test262. .... Okay, I think we had a few reviewers, trying to find the notes from the last meeting to be sure. So the reviewers were: someone from Microsoft, Kevin Gibbons, WH. Did anyone from the Microsoft team look at this?

BT: Not thoroughly. I couldn't find any regex experts. I love it, but I suppose it should get a proper review.

MF: Kevin Gibbons is not present and was not able to provide his feedback yet at this time.

AWB: We can advance it to stage 3, or keep it at stage 2 to elicit more reviewers. The first question is does anyone object to stage 3?

YK: I would assume Chakra or V8 would have said something by now if they had issues.

BT: This is not at all concerning. This is a well understood feature that exists in other regex implementations.

AWB: In the absence of objections, we should consider advancing this to stage 3.

YK: I think V8 is happy with the ??? I assume V8 is ok with those changes.

MF:  I have gotten feedback from Kevin, he said it looks good. The only issues were typos.

BT: So Dan, do you want to talk more holistically about what you think the state of RegEx will be for 2018?

DE: At the last meeting, Allen said, for ES2018 wouldn't it be nice if we could send a message that shows all the nice features for RegExp. We'd have everyone's work together. We have look behind, ...., and named groups, dotall flag, and match all. So, for match all, that's currently at stage 1. I think maybe we can get it through by ES2018. I was wondering if it'd make sense to go with semantics that are analogous to the current regular expression thing similar to split where it ends up cloning the RegExp. On the other hand, we've previously discussed adding a Symbol.exec method for being the basis for subclassing RegExps. I'm more hesitant about that. But I think we could do matchAll separately from this. So I started talking with Jordan about this and hope we can get all 5 of these things through by 2018 to have a coherent story for RegExp.


AWB: So I noticed there are a number of agenda items related to this. I think it would be a good thing to try to do all of the items for this as a group and then at the end of it all we could review our overall expectations for 2018.

MM: Given we have a RegExp legacy statics proposal, currently at stage 1, would you like to consider that as part of the group as well?

AWB: If you're ready to talk about it.

MM: I can talk about it.

#### Conclusion/Resolution

- Stage 3 acceptance
  - RegExp Lookbehind


## 7. ECMA-402 status update

(Caridy Patiño)

CP: So far no feedback on the 2017 draft that was published in the last month. We haven't done any major updates, though we did small fixes and editorial work. We expect to continue with small work in 2018. Zibi(?) and Daniel will present a few related proposals. Also ??? will be updated. We keep waiting for number format, format to parts from Google.

DT: Your voice went out....please say that again.

CP: We want to give updates on 2 fronts. the formatToParts? on Intl.NumberFormat.prototype.formatToParts, some Google update would be good on that. The other thing is the CLDR. Brian will be giving us some update this week. We will wait for decision until we make some adjustments on 402 spec.

AWB: Well, we actually have the thought. We approved the draft to approve the GA (?).

CP: I can work with Brian on the small details we need to update the draft and get it out.

AWB: Okay, so, thank you! Let's continue specifically with regex items. the next one is actually Dan and Brian which is property escapes.

CP: Excuse me, does this mean we'll get to ECMA-402 segmenter after lunch?

AWB: Let's do it now since you are here.

CP: This is the ECMA-402 Proposals.

#### Conclusion/Resolution

No specific conclusion, let's review the current proposals for ECMA-402.

## 10.i.g ECMA-402 Presentation of the three formatters for stage 2

(Zibi Braniecki)

- https://docs.google.com/presentation/d/1ddnQB8oUYyv7qtsmRFgcsScAI4uHTj8z9z_cPJxlOe4/edit

### Intl.ListFormat

ZB: There are three formatters that we believe now are ironed out enough to request a stage 3. The first one is called Intl.ListFormat. It closes the gap with localized JavaScript data structures.

ZB: (makes presentation). I believe it's mature enough to propose stage 2. Stage 2 requested.

WH: I'm still looking at this.

AWB: What's the use case that this is supporting?

ZB: There are multiple use cases. The most common one is sort of lists. Default is to separate lists from left to write separated by commas. This would support right to left languages as well. Another common example is listing days of the week or names. Another example is a building block for future formatters, which is a listing of numbers or a listing of units. ...

WH: I was looking at the slideshow of the detailed internationalization spec which is quite dense. What I couldn't find is the specification of this from a user's point of view. What kind of things can you put in these things. I'm looking for documentation that someone who would call these things would read to find out what they support.

ZB: Are you talking about options that are supported? Or the values that go in the Array?

WH: If you go back to the Intl.ListFormat slide, what does this last example do?

ZB: We have an Intl formatter which is Intl.NumberFormat. And you can also override `toLocaleString`. This formatter could also be the same for arrays.

WH: What will it do on an empty array?

ZB: Return an empty string (like it does now)

AWB: The fact that is extending `toLocaleString` in places *should* be noted, but ... I guess I'm interested in the background of this feature in terms of its usefulness. Are there other internationalization packages that have this thing.

CP: Yeah, I can speak about that. We do have prior art. Java has an API for it. In terms of the user... You're seeing this in almost every social network when you have a list of people who like your tweet/facebook post, you have to list them based on the locale of the user. But we're saying for all your formatters, we need to have data to reliably list an array, the user would have to do this themselves. This just aligns with the existing formatters.

ZB: It may sound redundant. The reason we want ListFormat is that we want to format lists. And JavaScript doesn't have any support for any other kind of lists. In an effort to close the gap. It's any kind of list.

WH: Why is weather measured in kilobits?

AWB: So there are several formatters here. Potentially we could advance these separately.

ZB: That's what I was thinking.

AWB: They are the list format, unit format, and relative time format. They're all fairly different. They're not connected to each other.

ZB: As I said Unit format, would benefit from list format, because it would allow to format compiled units. And I wanted to suggest stage 2 to Intl.ListFormat.

AWB: As a reminder, stage 1 means it's exploratory. Stage 2 means we've explored it and we think this is a feature we want to see standardized even though the details are still subject to change. So a request to go to stage 2 is a request for us to reach consensus that list formatting, roughly based on this proposal, is something we should work on getting into the standard. Any objections? I don't see any. I think you got stage 2 on the list formatter. Let's go on to the next one.

BT: Should we nominate reviewers now?

AWB: Is there something to review?

ZB: I think that's for stage 3.

DE: We nominate reviewers at stage 3.

JXF: I know the folks at PayPal were working on something similar and would probably like to review this.

ZB: It really depends on ...???? They are separate spec proposals. I don't think the spec is finalized for them. How about we have ListFormat advance to stage 2 and get interest on the others later.

AWB: Yes, let's do that.

ZB: So PayPal said they may be interested in helping review this?

JXF: Yeah, I think we should be able to help out.

### Intl.UnitFormat

AWB: So let's go to UnitFormat.

ZB: It's an interesting formatter. We see a high demand for it. But it's a little tricky to figure out what kind of data should be inside it and what kind should not be. What I can say is that we're looking into a very plain formatter. So we'd expect users of the API to specify the unit. But we think it would be very powerful to turning JavaScript into a powerful platform that can internationalize user interfaces. It can be any unit of measure.

WH: Question. You mentioned that you were intenationalizing celsius and fahrenheit. Do you mean translating the word "Celsius" to their language or do you mean converting celsius to fahrenheit if their locale indicates that temperatures should be shown in fahrenheit?

ZB: Absolutely not doing any conversion from the actual number for the unit. It will mean displaying the word Celsius in their language, depending on their script. Same happens with kilobytes.

CP: We don't want to do any transformation of the value. That should happen in user-land. They provide the value and we format it.

WH: So you're just doing a word-translation service?

CP: Not just a translation. It's more complicated than that.

WH: How is it different?

ZB: Two examples of that. We are translating the whole pattern, which may be different depending on the language. (Think "10 years" vs. YR10 or something appropriate to the language). So the symbol for kb for example, 10kb, may be different depending on the language. The intent of the formatter is to allow users to display to the software user in their language.


MPT: I believe there are calendars other than Gregorian that will have units other than seconds. Are your units strictly Gregorian calendar units?


ZB: No. It's not finalized, but we will not be narrowing it down to any single system. We will want to support duration, we will want to support time & date unit for calendars.

MPT: Ok.

WH: I'm looking at the list and my main issue with what you're providing in the list is very ad hoc. You have terabytes but not petabytes, kilobytes but not kibibytes, meters per second but not kilometers per second, etc. etc.

CP: That's stage 3 right? We need to finalize the list of options.

WH: The problem is very pervasive, I'd like to see these defined more generically instead of the few cases which you have selected.

ZB: Ok, that's good feedback. If you look at the proposal itself, it lists the proposal of units that we'd like to offer in the first draft. I honestly think the list is negotiable. And we can discuss this later. Skipping that part, it has a list of units we'd like to offer as part of UnitFormat. I consider the list of units that we would offer a negotiable thing. I would like to get to the point where implementation can choose what scope of units they can support. I don't know how optional it would be. I think the user can determine what the runtime supports, maybe if the implementation doesn't support petabytes, gigabytes will be the highest level of measure they can use.

WH: The premise of the metric system is that this is you should not need to do this with each one. An ad hoc list of which combinations are supported and which aren't is too hard to use. The metric system allows arbitrary combinations of prefixes and base units, and there aren't that many of them. Find a generic solution that supports that.

AWB: Why are these together? I feel like they should be separate. Can you explain the logic behind this?

ZB: It's the same operation regardless of what unit you're using. Are you suggesting a separate formatter?

AWB: I'm wondering why you don't have a DurationFormatter, a MemoryFormatter, other formatters...

MPT: I'm definitely going to put a proposal for a duration type. And if you propose something for time in units it would be good to have these together. That's hard to deal with itself.

AWB: By it being just an option, and the options object, I just have a gut feel that makes it easier for implementations to vary. Adding a new option type seems like lighter-weight and maybe it shouldn't be. Similar concern to when you saying implementations will be able to choose which they support allows for interoperability issues we don't want to have.

CP: Polyfilling in the future is definitely something we'll have to look at in the future.

ZB: Would you like us to stay on stage 1 and rethink the naming? Or are you ok with us going to stage 2 and rethink the naming?

AWB: I think we need more stage 1 exploration.

CP: I agree, we could probably spend more time thinking about this.

YK: I have a general question. I could be wrong, but it appears that while the metric system itself is orthogonal, it might be dependant... It seems that more complicated cases mean the decision of how to format something may be domain-specific.

AWB: Let's say you're working in some domain and that domain has some types you'd like to introduce. You're going to want to supply formatters that do that, it's unclear how those would plug into this UnitFormat stuff. And people would expect that UnitFormat is how you would do that.

YK: We have some questions here that it's worth looking more.

ZB: Thank you for the feedback. I think we can keep it in stage 1. ..But I will have to say. Every library out there has some kind of unit formatter, which says me that this is something that is useful. .. We have some proposal in the spec, but didn't feel comfortable proposing it yet. There is something else about combining units that we may want to use list formatter for. I'm taking this as a "let's keep this at stage 1" to think more about naming and compound units.

BT: I would like to add Maggie's point on how this changes with the introduction of an actual duration type... Having some exploration of whether this changes or not based on that. What are your thoughts?

ZB: I think it should not change. But we may want to have a `toLocaleString` on that type. I don't know if we'd want to have DurationFormat because it seems to me that would not require any computation. One of the specific things about number format is that there are a number of computations that are being performed internally. ... As I said I'm very happy to keep it at stage 1 and see the duration proposal and see if we evolve our thinking in that time.

MBT: I don't have a duration proposal for this meeting, but the more I look at this Intl stuff, the more I think I need to put a duration proposal in for July.

YK: I would love to work with you on that. I did that Duration proposal for Rust and would love to work with you on that.

MBT: Let's talk. I have a few other things going on today, but I think we'll need a duration type.

DE: Can I say something with regards to the current proposal? Some of the points here are similar to the current state of ECMA-402. For example. NumberFormat lets you format currencies and ordinary numbers. There is a list of currencies there and everything is in the options object. To me, an options object, seems like a pretty consistent design. You could still polyfill new data it by over-writing the Intl object--there's nothing special to these objects; not fundamental like built-in modules. The other thing about which units are included or how ad hoc it is. There is a close connection between what's here and what's in CLDR. If we want metric units to be combinatorial, we could ask for better data in CLDR to be able to add these additional formats and things there, though this is a process that takes time. (see http://www.unicode.org/reports/tr35/tr35-general.html#perUnitPatterns )

WH: I don't know what's in the CLDR, but I know the metric system and it does not have a lot of units. I think it's quite reasonable to include the entire metric system in this.

ZB: We've seen this pain a lot in operating systems. So we can stand on the shoulders of giants with MeasureFormat and learn from them. This is what I'm doing for the proposal. Happy to stay on stage 1. We can continue conversation in the GitHub repo for UnitFormat. I also agree we can wait until the duration proposal comes up as well.

WH: Let's say you're translating things into Greek and you're translating to a shortform. Do you use English letters or Greek letters? It depends. Are you using colloquial or scientific usage?

CP: I believe we'd use Greek letters...

WH: That's not necessarily the correct thing to do.

RX: You can define different numbering systems. You can change the numbering system, but not the language. Is that clear? For example, Chinese using wide numbering system, it could be used the locale zh-u-nu-wide.
(Clarifying this point after the meeting: It's possible to use Intl.UnitFormat to display the unit in one language, but the digits in a different numbering system. For example, `new Intl.UnitFormat("ar-EG", {category: "digital"}).format(100, "kilobyte") =>  "١٠٠ كيلوبت"` (Arabic using Arabic digits), or `new Intl.UnitFormat("ar-EG-u-nu-latn", {category: "digital"}).format(100, "kilobyte") -> "100 كيلوبت")`.

WH: No, this is not a question about the numbering system, this is a question about the translation of prefixes.

CP: Normally what we do is give the tools so they can decide how they want to format something. If we want to allow them to format in the case you decided, we just need to expose the tools. I'm not sure this proposal is not supporting that.

YK: Allen is right, there's an extensibility issue. I think it's plausible for medical apps to render some things differently and I think this should be extensible so the committee doesn't have to answer all the questions.

AWB: Let's move on to relative time format.

### Intl.RelativeTimeFormat

ZB: This is by far the most requested time formatter. It's basically about formatting relative time. It's intended to allow us to present a delta of time in a human-readable way. There are a few ways of doing this. A numeric way, following CLDR and a text type, which for certain values which may return a more human-readable variant (tomorrow, yesterday, now, etc). These are the kind of overlays on top of the system. There's also a short value vs. long.

WH: Are the relative values only relative to now? Are they always "N days before now", or can you ask for a translation of "N days before X" or "N minutes after X"?

CP: You can't do that; it's always in the present.

BT: Can we put a break in our discussion? We're way over our timebox and lunch is ready.

AWB: Why isn't this a category of the UnitFormat?

ZB: Mostly because unit formatter is not a unit of deltas. It doesn't have the ability to format units of time. It also doesn't have the "type overlay".

YK: I assume there are some languages where it's not so simple as adding "ago" to the end of the number.

AWB: What I'm more getting at here is...is this the way we want to define these? Before moving past stage 1, do we need to further resolve the issue of how to address these types of things?

ZB: No we should not hold off. We've spent a lot of time.

MPT: As someone from moment.js. This is starting to catch up to what we have. This is not the common use case. I do have some concerns between the difference between Calendar math and Timeline math. 8 hours ago can be yesterday. As far as different units, twitter is a good example. People want to know how to do things like "1d ago"  or just "3d" for example for saying something is 3 days old.

ZB: In the spec proposal there are issues that we are still working out. Please anyone come and help with the proposal. We've been in stage 1 a year ago.....there is an open issue for relative time for unit formatter.

CP: We think this could be what moment uses under the hood.

DH: I'm so sorry Maggie, lunch is here. We can continue after if that makes sense.

AWB: Let's continue now that lunch is over.

ZB: I added examples to the slides during lunch to present use cases. Continuing on UnitFormat. These formatters (plus one more that's in the ECMA-402 GitHub repository) are the only ones they are currently planning. Every use case they have encountered in the last year can be covered by some one or two of the 4 formatters. It's not that they are trying to port all the ICU formatters to JS, but rather they have the subset that is need for the web. Stage 2 is that TC39 agrees that the problems need to be solved. Is there a reason that we do not want a feature like that in ECMAScript?

WH: Those are not the only choices. We could say "come back when you have improved it".

ZB: Sure, but let's define the API before we move or should we say "this does not belong in ECMAScript" (do we move this forward or do we not)

DH: You will usually know if people think it shouldn't be in ECMAScript. That will be clear.

YK: I think in general, that is a necessary, but not sufficient thing for stage 2. The norms of the committee is that the API is reasonably done as well as semantics.

AWB: I was going to comment earlier. When the consensus is not to advance, it does not mean that it might pass in the future (without changes), it just means that people aren't ready to move along as it currently is. It might simply be a matter of coming back with more complete information.

ZB: We are reviewing the proposal to move RelativeTimeFormat to stage 2.

AWB: The relationship between this and the UnitFormat--I'd like to see more exploration of that. Are we going to do things with time types and duration types, and what might the impact of that be? These questions make me wonder whether this is ready for stage 2.

YK: I think it's not ready for stage 2.

BT: I don't think there's any rush for this for stage 2 either. I'd like these to go into these as a bundle for 2018 for 402, but we have plenty of time for that.

ZB: Can I get clear direction form the committee whether we want to BLOCK the two formatters on duration types, or whether they can proceed without that.

AWB: We're not hearing people say it's a blocking issue, more concern that it's not adequately explored or explained yet.

ZB: What would be the recommendation, should I try to present a refined proposal separately or keep them as a bundle?

WH: Whichever you do, some people will want the other, so do what makes sense.

YK: Work together with the Duration proposal.

CP: Let's keep the proposals separate; it's easy for me to integrate them separately.

ZB: So ListFormat goes to stage 2 and the others stay at stage 1.

ZB: The last proposal I have is a proposal that I'm seeking stage 1 for. I presented it at the last meeting. It's a proposal for simplifying the way of formatting date and times using two formats `dateStyle` and `timeStyle`. Instead of doing them separately, we would actually like to use one of the four lengths of style `"short"`, `"medium"`, `"long"` and `"full"`. I think it's a pretty good representation. It makes it easier to use DateTimeFormat, but it also allows one more thing. It is language independent. For example, the "short date" specifiers are relative to the current locale. By using dateStyle or timeStyle, the user hands of control of the formatting to the language. We expect this will be the most common way people use DateTimeFormat.

CP: The data part is the new thing here, to find the default settings for the locale. It should be useful. All other things that you mentioned are not very relevant because this is low level API, and can be achieved in user-land, except the default settings per locale, which is data.

AWB: This sounds plausible, but most of us are not familiar with all the Intl functions. I would find it useful to see "here's what you have to say today" and "with this proposal, here's what you say instead".

YK: There's something that's been bugging me. I suspect that if the entire library existed, it would be used to get at some underlying primitives that are not exposed. I say this as someone who worked on the rails intl library because it's so hard to make the high level story good for all domains.

CP: Maybe an API that gives you access to all the setting for your locale.

AWB: Part of the requirement is that the surface API needs to accomodate different underlying intl libraries.

BE: This is the extensible web manifesto. We might do OK if we design a high-level library, but we might get it wrong, and putting in low-level primitives.

MPT: We want the CLDR data without having to pack it. What would save our lives would be CLDR data accessible through the browser.

YK: That might be tricky because Edge doesn't have CLDR data.

BT: If you are just talking about exposing the underlying data, Windows does use CLDR extensively so we could potentially expose underlying data. I'm not ready to commit to standardizing on CLDR, though.

RX: I do Intl and localization at PayPal, in globalize.js. It's not just a matter of roping a lower-level API into a higher-level one. For example, when you say Date.short, so let the engine to figure things out in the specifics about the language/locale. So it's more than grouping things together--it has localization smarts under that.

CP: What we're saying is that that information is needed to produce the right date format--it could produce options that would feed back into the Intl constructors.

ZB: What the committee is saying is that it would be great if there was an API that would return the underlying data, and another API that would format using that as the pattern.

CP: Or rather options, as pattern has issues.

ZB: One problem is that CLDR is not frozen. Not just in the data, but in the key paths and the way the data is organized. We could either expose something very unstable, or put a stability layer on top. For that reason, I think we have to expose some abstraction of CLDR.

YK: I totally agree. I actually don't think we're going to design a good API on the fly. Exposing the API that's in the browser is not the goal. A shim-layer is the goal. The thing you said about exposing a pattern and then a formatter is one possible primitive factoring, there may be others. Looking at globalize.js and moment.js, the issue is that they're too big. Why don't we first ask: "What could we do to make moment smaller?"

ZB: Our end goal should be to try to make creating libraries like moment easier.

MPT: Can I get a call with 402 and the moment team and we can work some of this out?

ZB: To wrap up this. Are we not willing to move this to stage 1 and we want to keep it stage 0?

YK: No, let's move it to stage 1.

AWB: I think moving to stage 1 is fine.

YK: Stage 1 is: we want to move this to solutions space.

ZB: One other problem that this solves is that we encountered a problem where a user manually changes their local OS clock. There is some conversation about trying to map OS formats to the JS environment and get access to the OS clock style (for example). CLDR is similar. If we have this kind of option, "short", "medium", etc. We can fine tune it with all of the data from the user's OS.

AWB: I think we've covered this. One take-away, as this library grows, there's interest in the whole TC39 for understanding this problem space. Thank you!

#### Conclusion/Resolution

We will treat the 3 proposals independently.

- `Intl.ListFormat`
  - Stage 2 acceptance
  - Reviewers:
    - PayPal
    - Daniel Ehrenberg
- `Intl.UnitFormat`
  - Stage 1 holds
  - Issues raised
- `Intl.RelativeTimeFormat`
  - Stage 1 holds
  - Pending more understanding of durations.
- `dateStyle/timeStyle`
  - Stage 1 acceptance


## 6. Addendum to Test262 item

LEO: People asked me to mention. We are using an integrated test generation tool. That's why we have so many lines of code. It has documentation on Test262. I would be very happy to show this test generation tool to anyone who is interested. The automated deployment I mentioned earlier uses this tool to confirm that tests are properly generated.


## 10.i.c RegExp Unicode Property Escapes for stage 3

https://github.com/tc39/proposal-regexp-unicode-property-escapes

DE: There's a link from the agenda. These have barely changed. [DE talks through the slides]. The thing that has been narrowed down recently, is that the list of properties that are supported is explicitly enumerated. Previously implementations could expose anything they wanted, which would lead to needless differences between platforms. It is implemented in V8 behind a flag. I asked for reviewers last meeting. The potential reviewers were Waldemar, James Gibbons, and someone from MS.

YK: Are the new properties...???

DE: The preference was to be restrictive with the number of name/value properties but to include every possible random binary property. We could revisit that.

YK: Does this mean that the committee needs to routinely review the list of properties and approve them one at a time?

DE: I think that should be done in some place. I think the browser should be ??? about where property support is. If it's a bad idea to support a property, then we run the risk of browsers supporting bad things.

YK: I agree with enumerating them. But this does have a list management challenge.

DE: It will take actual implementation work also. Practically speaking, if we can write Test262 tests and implementers are running those tests regularly, and a patch going into the spec will motivate them to do it. It's a harder sell to have them watch for a set of properties. There's a challenge with this. It's a little ad hoc. There's one part of the spec where we can reference that say all the properties that are defined. We can't reference one section that has all of them. It's good for us to maintain a list in light of that.

AWB: How long a list are we talking about?

DE: A list of properties that are supported. For named ones, it's just general ??? there are 30 or so.

WH: There's a list in the proposal.

AWB: My sense is our spec should list them and where they're defined. And if there are new ones, it seems like a reasonable thing to adding new ones.

YK: Is there a lot of code? Presumably you're talking about a RegExp engine that has those characters.

DE: For implementations based on using ICU, ICU has support for mapping one of these categories to a list of ranges. So I don't know how Microsoft's Unicode works, i.e., whether they have something similar.

YK: I can believe it's ok doing this on an ad hoc basis. In practice we'll wake up and notice that we didn't actually do it. Maybe now the committee is healthy enough that we'll actually do it.

DE: I don't really understand the theory of change where we wake up and we want these things in browsers and don't have a process to get them in there. Otherwise we are waiting on multiple browser vendors to add this stuff.

YK: I think the bottom line is what Allen said is we should make it part of the process of annual review. If there's no hook like that people will forget to do it.

DE: I don't think propeties get added all the time. Emoji properties are the hot topic now.

YK: Ok I withdraw my concern.

AWB: I think the general principle here is if there is some other normative spec you can  point at and say: do this. If not then we need to have a list for implementers of our spec. It sounds like you're saying it's the latter we need to enumerate.

DE: The current spec doesn't enumerate these properties.

WH: I couldn't find some of them. I could find a few. But I couldn't find `any` for example.

DE: `any` is in Unicode Technical Annex.

WH: I was looking at TR44. It's not in there.

DE: Sorry, UTR-18. I'm not sure it's very useful...

WH: Just searched for all uses of the word 'any' in UTR-18. It's not in that document either.

AWB: I ran around that list a while ago and "any" seemed not clearly defined.

DE: I posted a link in the tc39-delegates channel. I agree with you Allen, each one of these deserves a definition. I'll fix that up by the next meeting. Timebox check. Should this go to stage 3 or should I get more clarity about these properties before going to stage 3?

MB: `Any` is defined here: http://unicode.org/reports/tr18/#General_Category_Property Agreed that the Unicode specs could be clearer — there is not a single/obvious source for a list of all binary properties, for example.

AWB: The property seems like a minor refinement you'd expect to be worked out in stage 3.

WH: I'm fine with stage 3, but I want clarity on some of these things.

BT: I have ideas on what we could do to track these properties.

AWB: Sounds like no objections to stage 3.

MM: Any change to reviewers?

BT: I guess we still need to get this reviewed.

DE: Presumably it has been reviewed.

BT: _Presumably_.

WH: I have reviewed it.

DE: Mathias wrote it, and I read it.

#### Conclusion/Resolution

- Stage 3 acceptance
  - WH reviewed it


## 10.i.d RegExp dotAll Flag for stage 2

(Brian Terlson)

- https://github.com/mathiasbynens/es-regexp-dotall-flag

BT: We want stage 2 for dotAll. There have been no changes since stage 1. It remains an extremely simple feature. For those who haven't heard of it before, it adds a new flag `s` to the expression (like other engines) literal that allows `.` to match _everything_ rather then _most everything_. There's a high-level API in [the proposal](https://github.com/mathiasbynens/es-regexp-dotall-flag).

MM: Why "s"?

WH/BT/BE: It's Perl, c#, Java, VB.

DH:  I know you've presented this before. And I noticed you use the word "character" before and it's not necessarily meaningful. Are you talking about "code points"?

WH: Without "u" it is referring to code units. With "u" it is referring to characters.

BT: I think we're talking depending on the context. Without `u` we're talking about code units.

DH: `s` is orthogonal to `u`.

AWB: In the regexp spec in ECMA-262, the word "character" specifically means "the unit you are matching".

DH: What are the historical things that dot didn't used to match?

WH: Only the line terminators: CR, formfeed, NL, etc.

BT: JS devs have written a RegExp that's a cryptic character class (see the proposal examples). Horrible hacks and we don't want to do them anymore.

YK: Ruby bases this on the `m` flag. If it's a multiline regex, then you want `.` to include multiple lines.

DH: So basically "ms" is the thing that you always want?

BT: Stage 2?

WH: Sure.

DH: Sure.

DT: Reviewers?

WH: I've reviewed this before. Unless it's changed and I missed that, I'm happy to say I've reviewed it.

BT: I would be very surprised if we find changes to this proposal.

AWB: Review really becomes important as we approach final spec text.

WH: This is essentially final spec text.

??: What makes this not stage 3?

WH: There's nothing to do to get it to stage 3...

BT: We actually have final [spec text](https://mathiasbynens.github.io/es-regexp-dotall-flag/). You'll find changes to flags, adding the `dotAll` property and the various other changes that need to happen.

SDO: Does it need to go up with the Unicode changes?

WH: It's orthogonal to Unicode. See above "character" definition.

AWB: Is there a reason this can't be stage 3?

BT: Stage 3? Anyone object? We're basing that on Waldemar's review. Based on the spec text I think we're good.

LEO: I've actually reviewed it as well.

BT: Then we're good process-wise.

#### Conclusion/Resolution

- Stage 3 acceptance
- Reviewers: WH, LB
  - they previously reviewed it.


## 10.ii.b RegExp Named Groups for stage 3

AWB: The next regex item we have is named group.

DE: There's a presentation for this linked in the agenda.

DE: So the named groups proposal also hasn't really changed.

AWB: I think it's a good idea to give a review of what the proposal does... Have at it.

DE: The motivation is that if you want to parse something that has a bunch of pieces and you want to get them out, accessing via index is not as usable as getting them using names. This proposal takes the consensus position of "most" languages that have named groups as syntax. They are permitted in back-references, replace, Unicode and non-Unicode expressions. There was a concern with `\k`, but that's been resolved. The detail slide is missing the new resolution of that issue... The update since last time: worked out the Annex B grammar. I saw no required change. 2 other changes are discussed in the slides.

WH: What function are you talking about?

DE: replace.

AWB: We need examples. [DE adds one]

DE: [describes the example]

```js
"foo".replace(/(?<a>o)/, (a, b, c, d) => { /* ... */ })
```

Should the group object be in the C or B position? [discussion ensues]

BE: I would say D is the place to put it.

DE: I believe you. I'll move it back to there.

DE: The other things at the last meeting. We considered some changes to the `group` object. The `group` property is only created if there are any matches. It was proposed to always create the `group` object or share a frozen empty instance that you get on a match that doesn't use groups.

TF: Dan, can you show us again the difference in the patterns when destructuring the groups?

DE: Sure, I'll write it on the slide...

_writes on the slide_

```js
let {a, b} = /(?<a>x)(?<b>y)/.exec("xy").groups
```

DE: If you have a variable instead of the regex, then you could default like you do with anything else in JavaScript (so it would be overkill to create a groups property regardless of whether there are groups in the RegExp):

```js
let {a, b} = unknownRegExp.exec("xy").groups || {}
```

DE: For existing regexps, there's no detectable change in behavior. This fits into what would have been syntax errors. The other question is whether all the properties should be created, even if they are not matched (e.g., because they were optional). `"y" in /(?<a>x)|(?<b>y)/.exec("xy").groups`
This could be useful in a lexer. ??? You could do this by looking at `Object.keys()`. With the current draft, I've left in place that all the properties are created. This is not a strongly-held opinion.

AWB: And if one isn't matched or processed, its value is `undefined`.

WH: It's created with the value `undefined`.

AWB: I think that's less useful than leaving it out.

WH: I agree with Allen that it's a judgment call. Leaving it out allows one to use `'in'` to test it; on the other hand, the numeric properties are always created and get the value `undefined` if they don't participate in the match. It's easier for users if we're consistent with them.

AWB: You need the numerics because you have to count to get the position.

WH: It (a missing match) could be a hole in the arrays.

DE: Say people learn to do this pattern with `Object.keys()` or `for .. in`. Then they'll be surprised. Instead, if we leave out these features then we avoid confusion for the users.

AWB: My gut feel is that there's a enough difference between the two styles that you won't have a confusion.

WH: Yeah, but if you make a typo... I would rather be consistent with numerics.

MF: It's useful to get a predictable object shape coming out of `exec`.

DE: We would get a predictable object shape if we always created own-properties. That might provide a trivial perf advantage. Things are more optimizable if the shape is consistent.

BE: Yep. Sounds good.

DE: Brian and I have been talking about this issue for a while. I could go either way. I feel weakly this way, others feel weakly the other way.

WH: I like it the way you have it now.

MLS: It isn't created right now?

DE: It is created now.

MLS: Created, but `undefined`? Just like the numbered ones are. Ok, that's the way I like it too.

DE: The only change in the spec I'll be making is moving back the `replace` parameter to the last position. Given that, is this proposal ready for stage 3?

WH: Yes.

BT: Seconded.

BE: Great.

AWB: Hearing no objections.

BE: Nice, thanks Dan!

#### Conclusion/Resolution

- Stage 3 acceptance


## 10.i.e RegExp Legacy Features for stage 3

(Mark Miller)

- https://github.com/tc39/proposal-regexp-legacy-features

AWB: That was the last RegExp item. Anyone have more to say about that?

MM: These are things like `RegExp.leftContext` and a bunch of weird static properties on the RegExp constructor itself that have spooky effects. If I could just get rid of these, but of course I can't. There's an agreement between browsers, so we're better off codifying it than not.

BE: I am so sorry...

MM: The goal here is to strike the best balance between acknowledging reality and keeping things codified and nailed down in Annex B (and all that means). It's already at stage 2, as part of this general attention to moving RegExp stuff forward, I would like to bump this today.

MLS: Was it research that all browsers do it or just some browsers?

DE: These semantics are different from what each browser ships. In terms of configurability and what happens between realms.

MM: In terms of minimizing damage...

DE: This was reviewed by people working on regular expressions in V8 and was thought to be web-compatible.

MM: Dan's right. The properties are the properties that we gathered from browsers. I don't know whether they're union or intersection, but it's small in any case. This proposal also makes some semantic differences that we expect to be backward compatible. Nothing spooky happens in some cases. They're also configurable and delete-able.

AWB: And it's not just that it's structured, I assume that if you evaluate a regexp in one realm, the results are not visible in another realm.

MM: Correct. No browser has any explicit action-at-a-distance. What coupling might there be between realms unless we outlaw it. That's the coupling that could have been ??

AWB: ??

MM: This suppresses the spookiness both between realms and subclasses.

DH: From the description, I can believe the changes are web-compatible. They sound like the kind we would take a chance on. My biggest question that I don't think affects stage 3:  what about Annex B? We need to review the goal and its role and judge what its future is.

MM: I enthusiastically agree.

BT: Motion to append Annex B discussion to the agenda.

YK: +1000

BE: The question is whether it should be there?

DH: Should Annex B be in the standard? Why should it be there? That helps determine whether something should be in Annex B.

BE: Yeah.

DH: Earlier this morning we had a discussion about the mechanics about the spec document itself with regard to Annex B. That discussion bled into the purpose of Annex B. Should Annex B be there?

WH: You just asked "should Annex B be there." The answer is "no" but we _have_ to have it for web-compatibility.

DH: I didn't mean, "should that material disappear from the spec?", I'm saying "should it be differentiated?"

WH: Ok.

BE: Ok, right.

DH: To be clear, I'm not arguing for anything. (We shouldn't do that right now.) I'm just saying that we need to find clarity around this question. There are mismatches in different people's heads here.

BE: I want to frame this question. Part of this seems to hinge on an empirical question: "How much is required for web-compatibility?"

MM: That is orthogonal... Oh, I see what you're saying...

WH: It's not what was implemented, but you need to figure out how much of this Legacy RegExp stuff is required for compatibility. This distinction arose in the very proposal you're presenting now.

MM: Many of the things in Annex B were admitted to Annex B only with the understanding that they normative-optional. Everything in Annex B needs to go through the entire process again to determine if they're normative-optional... ???

BT: We are diverging.

DH: We need to grapple with this question. But I'm happy to leave it at that. But my question is: "Does Legacy RegExp go all the way through stage 4" and then we deal with this Annex B stuff at that point?

MM: The subject doesn't have to do with where (Annex B) stuff appears in the text. It means that a conforming system can omit Annex B stuff.

YK: The point you made about the process is a true fact of the procedure. But if the people in favor of not conforming can be clear about their actual objections, then we can address them directly rather than need to sort out the larger Annex B issues.

DH: You're operating under several constraints with "normative optional." I think it's important that we satisfy these constraints. We should also deal with "forked ecosystem." The normative optional construct is one that says "we're not worried about one JS ecosystem may not support this feature" and that leads to balkanization. Part of our role as a standards body is to solve and prevent problems of balkanization. We should see if there's a better way to deal with this than normative optional. I wonder if Annex B and normative optional allow us to mitigate balkanization issues.

MM: I don't think anything we've discussed affects whether we should proceed to stage 3.

DH: The point of order is that I would like us to have a plan to address this.

MM: I think we're agreed on that.

AWB: I think it's clear that today Annex B is the place we have to put it. There's an orthogonal issue of: what do we want to do with Annex B (whatever's in that bucket). ??

DH: I don't know what the criteria are for Annex B.

BE/WH: Let's have the discussion at the proper time.

BE: We can assume a good outcome and if something goes bad we can discuss.

MM: Dynamically scoped is also spooky action-at-a-distance. Any objections to stage 3?

BE: I'm so sorry.

DE: There's one point I want to make about it. The subclasses restrictions. There are some regex classes in the wild. XRegExp is an example, which is an old-style subclass instance `of RegExp`, so it doesn't really get touched by the detection in this proposal which doesn't modify `new target`, but it seems a little bit odd... The justification for restricting it from subclasses is that it would give bad answers for specific subclasses for example... it might leak implementation details. XRegExp will get past that because it won't get detected.

AWB: Well it doesn't not get detected, it just doesn't meet the definition of what we call a subclass.

DE: Well, but this document mentions certain concerns which XRegExp should qualify for. And it could leak implementation details in these dollar sign things (special variables)... maybe it could cause unexpected behavior.

MM: I think the trade-off is highly in favor of doing with Claude codifying (preventing of sub-classing of spooky...). Are you objecting on this basis?

DE: No, I'm not objecting on this basis.

WH: Who were the reviewers for this?

DE: I was a reviewer.

AK: Then it cannot go to stage 3 until we have another reviewer.

WH: There are things in there that I don't understand. Like why it has anything to do with inheritance.

MM: I'm happy to clarify with you offline.

MF: We also agreed that any proposal planning to advance would be available 1 or 2 weeks (I forget which) ahead of the meeting.

AK: It's nice to have it advance if it could. But what we got out of it is that it needs eyes on it.

MM: Withdrawn from stage 3 for now.

AWB: Are you planning to present it at the next meeting?

MM: Yes.

DH: Add it to the agenda for next meeting right now.

#### Conclusion/Resolution

- No change in stage. Reviewers identified and it will be proposed for stage 3 next meeting.


## 10.i.f SIMD.js status update

(Daniel Ehrenberg)

DE: I'm no longer championing SIMD.js. It was pursued as the best way to provide to users in JS. But at this point, WebAssembly is sufficiently far enough along. It is hard to optimize sufficiently well for the non-asm.js case, so better is to simply specify it for asm.js. The decision could be reversed, but it's currently on hold.

YK: I'm interested in Brendan and DH's response.

BT/AWB: If we have a proposal that's at stage 3, the champions should write up a status report.

YK: Is Mozilla also abandoning it?

PJ: The main reason it's on hold is WebAssembly. They were involved with the SIMD proposal as well. It remains to be seen whether WA will fill the gap, since SIMD is not part of WA yet. Hence maintaining the 'on hold' status. Also, just like in C++, when people want to do SIMD, they can use asm or intrinsics. We'd like to see something simliar for JS, but it's a big burden on browser developers.

BT: Is it appropriate then for V8 to delete their implementation?

PJ: Yes I do think it is, but I don't have control over V8.

SYG: We still have the code available at Mozilla, but the main people working on it have moved to working on WebAssembly, and basically the JS code for SIMD.js is basically dead.

BT: I'm getting a feeling that there's an unstated position of the V8 team that SIMD in JavaScript is untenable and will not go forward.

AK: V8 does not conclude that SIMD.js makes sense at this point.

BT: I don't see a path forward for consensus on this point.

DE: That's a good point. Perhaps I should switch this to withdrawing.

BT: I'm just getting this out there. I do think that stage 3 is not the right thing for this.

AWB: Sounds like it's losing stages here.

YK: It sounds like there was some implementation problems with making SIMD.js performant, like developers who tried to use it would be disappointed.

AK: The roadmap to get to a performance JavaScript implementation looked long and unmaintainable. Were there a huge push from JS community we may have thought it was worth it, but with emphasis moving to WebAssembly it doesn't make sense anymore.

YK: Does the V8 team even believe wasm is a "real thing"?

AK: The V8 team's perspective on asm.js has changed over the last 3 years. The team tracks the performance of asm.js in the wild, etc.

YK: I guess what makes me worried here is that we're prematurely rejecting potential future use cases.

MLS: Apple's point of view is we don't think SIMD.js is appropriate as an addition to JavaScript because of the perf, but also the use cases and how much work it was. We think that wasm is a better way to bring this to the web. I think in the past I made it clear that we didn't want to implement SIMD.js.

BT: I'm personally sympathetic to wasm, though there are some concerns. I have met some people that *did* get really excited about SIMD.js. I can help you find those programmers.

PJ: There are more JS developers than C++ programmers. The places where SIMD improves performance are typically isolated to small hot loops. Forcing developers to bring in the whole wasm toolchain to extract better performance in those cases is a big ask.

DT: Is there a timeframe for whether wasm solves this problem? And if it doesn't should we bring SIMD proposal back?

YK: That could be addressed by moving it to stage 2: "the committee believes that JS should solve this problem". The claim that JavaScript programmers will get enough value out of the existence of wasm is as yet unproven and it's inappropriate to assume it will.

MM: You're saying stage 1 rather than withdrawing it?

YK: Yes.

MM: I think it should be withdrawn if it is championless.

AWB: I think it's either withdrawn or it is stage 1. But before either of those, we need documentation for why we are making the transition.

YK: Yes just writing down that we think it should be addressed by wasm will make it easier to address in a year.

AWB: I'm reluctant to say: "Dan please write up something because there's very little motivation to do the work." What I would say is that: "The attempt to be withdrawn has been postponed".

WORDS...(lol).

AK: Is there any advantage to actually remove this from stage 2?

AWB: It's not withdrawn until we have the write-up that says it's withdrawn. As soon as this disappears, all sorts of people will start asking what's happened, why has this gone away? Part of our job is to document why we make decisions.

MM: The notes from this meeting are made public so people will see why we did this.

AWB: These notes are not a coherent presentation of the reason for the transition.

AK: I think there should be an announcement. When I did something similar it got picked up in es-discuss.

AWB: I'm suggesting to wait because the champions should do the work to write-up something.

DE: I'll write something up whether or not there's procedural pressure.

YK: If someone asks for stage 3 they should do a write-up. I think Dan is doing the right thing.

AWB: I do know that pressure goes away and people have other things to do.

MM: The amount of new information is sufficiently low that we should move onto the next topic.

YK: We should find someone who could champion it at stage 1.

PJ: We would like to see it go to stage 4, but I can be a caretaker champion.

DT: You're owning up to asking the questions in 6 months to know whether we address it again.

DE: If we decide to reintroduce it, it can go straight to stage 3 or stage 4 if appropriate.

AWB: Probably not.

PJ: It has been reviewed. If it is picked up, I don't see why not.

YK: The withdraw claim is quite a strong claim.

BT: If we do withdraw it, the code will be removed from Chakra very quickly.

YK: You can't reuse it in Chakra?

BT: So, I'm still feeling I'm going to have to argue strongly for not deleting this code if we move it back to stage 1.

PJ: Maybe the wasm picture will be clear in a couple months. I'm not sure how far along things are. From that sense it should remain at stage 3.

AK: I don't think Chakra would ship this in Edge and then have the committee withdraw it.

MPT: Nobody in this room right now really wants this. We have an obligation to the development community to signal that this isn't happening.

YK: I don't agree that nobody wants this.

AK: That's why I'm saying we should withdraw it.

MPT: I would tend to agree with that.

YK: That's what V8 decided.

AK: You're guessing that's what happened.

YK: There seems to be diversity among engines. I didn't mean to imply that V8 had a nefarious position.

AWB: It seems clear that this is no longer a stage 3 feature.

BT: That's clear. Stage 3 is not an option.

YK: ??

MPT: If we were to back it up a stage, I could put in a statement that says we want to see what happens with wasm before we keep pushing this.

YK: V8 has made it clear they are betting on wasm.

BT: I think practically speaking, based on what I have heard, it would be extremely difficult to get consensus on this even after wasm has been around for a while.

YK: Imagine a year from now, wasm fails to get traction or adoption. Then would your answer be different?

BT: I think that's an interesting question.

AK: I get the impression from people at Mozilla that they're not excited about SIMD.js either.

BT: You will find people like that on the Chakra team as well.

YK: I think V8 took the plunge.

MLS: Just to be clear, before this meeting, we made it clear that we are not supporting SIMD.js. Essentially: "I don't think this is appropriate for the standard, but if it becomes part of the standard we will implement it".

YK: How did we get consensus at stage 3.

MLS: ?

YK: You're basically saying that we've never had consensus for stage 3.

DE: Michael was very consistent on this the whole time.

MPT: Regardless of the past, I'm looking at two implementers who say they wont do this. We need to decide from here.

MLS: If this does become part of the standard, we will implement it.

BT: Withdrawal is more reflective of the likelihood that we'll get consensus on this feature.

AWB: Do we want to go forward exploring ??? computing hardware.

WH: I have a feeling we will regret withdrawing it in a couple of years.

YK: I think it's a legitimate question that we don't know how wasm will go.

PJ: We have tons of use cases for SIMD.

YK: It seems like engines are withdrawing their interest in it. Engines are making a statement.

DT: I think what we want to do is get a new consensus and the presentation should be "what is the ?? we should get to." ...

YK/BT: We should move this to stage 1.

MPT: Officially this is being moved to stage 1 because browser implementers won't like this as much as they thought they would.

people: No...

AWB: No, Daniel will write up a status report to make this more clear.

DE: I'll write up a status report and we'll talk about it next meeting.

AWB: Put it on the agenda for the next meeting.

AWB:  If you're a person coming back in two years and you say "here's a thing that TC39 is working on and put it on a shelf—why is it being revived?"

DE: Right, so I'll write a document explaining that.

AK: Here's the thing, can we make a change sooner or later? There's no point in holding devs in a state where they think something's happening, but it's not.

MPT: The move to stage 1 removes the community concern.

BE: If the implementers and browsers don't want to implement it then there's no reason to leave it in stage 3.

YK: I think there's broad consensus that it should not remain at stage 3. Even if we don't ship wasm, it's fine that...? doesn't happen. I think it's ok to communicate that we think that this will work out in wasm...versus not shipping it at all.

DE: For some broader context, a lot of the engines have shifted to focusing on other types of performance (not numerical perf) maximizing softer factors like dynamic performance. and SIMD is more in the category of numeric performance. That's why we prefer to focus on wasm rather than SIMD.

WH: Both kinds of performance are important.

DH: I apologize that I missed this...this might be a slightly different perspective: I think that WebAssembly has changed the context in which we talk about this...

WH: I don't understand what you mean by changing the context.

LEO: We are over the timebox.

AWB: We have a conclusion. We want some documentation about why that is. Dan will write it up.

DH: So the point that I wanted to say was that wasm was working towards including SIMD in the spec. I think there is a possible route, where the web gets SIMD via WebAssembly. And then at some point that will help us understand if we need SIMD in the JS side. That gives us new signals about developer interest in this feature. I'm fine with demoting, whatever it is that we say, let's not say that it's not possibly interesting and that it doesn't matter. They may be interested in it in the future and we should leave that door open. Why prematurely tell developers that a thing you might want will never happen?

DE: That's a great point about getting more feedback from devs. I want to mention that the feedback this committee has given has been really valuable to inspiring the implementation.

BE: It's not going away? It's going to stage 1?

AWB: It's probably going to stage 1.

#### Conclusion/Resolution

- Stage will remain at stage 3. DE will write up the reason for deprecation and present it. At that point, it will transition to a lower stage (possibly withdrawn).
It is proposed that Peter and Yehuda will become caretaker champions of the high-level goal at stage 1.


## 10.i.h Intl.Segmenter (requesting stage 3)

DE: Unicode also defines an algorithm for finding breaks between words and sentences, which CLDR tailors per locale. On [slide #4](https://docs.google.com/presentation/d/1BnVToKOybjLh7IPa6k1i1ruLysFDKIVgo5heU1qb7CM) there are new methods that allow you to jump to the next segment. Previously it provided forward or reverse iteration through a string. We decided to wait for users to ask for an improved API. So I changed the API to have preceeding and following. Also to define break type. It's at stage 2 right now, and now that the API is closer to being finalized I want to ask for more reviewers.

CP: I can review.

JXF: I think I can get someone from PayPal to review.

DE: Any thoughts on the change in the design?

AWB: It wasn't clear to me from what's on the current slide what the actual change was.

DE: Oh. There used to be that segment iterators had an internal slot ...forward or reverse segment interators...you could call segmenter...? You can jump to a point, going to either the preceding or the following position. You can access the index and break type getters to figure out what that segment was. That's the new API: It's more expressive. You still have the ergonomic iterator (segment iterators) and you can do for...of. So it doesn't change that simple use case. Glad to have reviewers; thanks.

AWB: OK, so we're not actually advancing to stage 3; we're just preparing by having reviewers?

DE: Yeah, I hadn't previously asked for reviewers because I was unsure about this aspect of the API design. So yeah, still at stage 2.

AWB: Sounds good.

#### Conclusion/Resolution
- Remains at stage 2. Stage 3 reviewers identified:
    - Caridy
    - TBD from PayPal


## 10.i.i Test262: using root license as default for files

LEO: This is mostly to ask to defer to discretion of lawyers. (My company doesn't have any working on this.) I'm trying to make Test262 a nice place for new contributors. It's already too complex for new contributors. We struggle with pull requests. We require every test file to be prefixed with two copyright lines declaring the copyright for who is contributing. But today we already have the CLA. Considering that, for new tests, without these copyright lines, we're deferring to the license that's in the Test262 project. I'm not looking for consensus now, because we need to talk to lawyers.

AWB: What you need to do is refer this to Ecma ?? because there is a specific Ecma policy document that specifies that, for Ecma modules, how the software should express itself...so you have to go through Ecma.

BT: That's what he's asking for, is that policy to change. He's not going to ask for that to change until he talks to lawyers. I know what a lawyer is going to say. They'll say you need the copyright header. It makes things more clear and so people can't say they didn't know it was copyrighted.

AWB: But that's OK. With appropriate pushing, we've done this stuff before.

WH: You need the header where?

BT: At the top of the file.

LEO: Every test file.

AWB: I'm confident that if you go, can we get by with 1 line?

BT: He doesn't want one line, he wants 0 lines. Lawyers would always want that one line.

AWB: One line is the best you can get.

BT: Having it at all is the difficulty. We've had people push back because they don't want their real name on the test.

LEO: We've got a lot of contributions without the copyright lines; some of the contributions say I can agree on a copyright as long as I have a CC ShareAlike...

AWB: Strictly speaking you're not supposed to accept anything that doesn't conform to the license.

MPT: When you sign the CLA, you're literally saying your lines of code belong to Ecma. You can't sign the CLA without giving the code away.

MM: Leo, I think what we're all saying is if the reason people don't want to put the copyright lines on there is because they don't agree with the copyright, then removing the lines is not going to solve the problem.

BT: So I think that there is a reasonable argument that it's really annoying to put that thing in every test, having written thousands of tests myself. I've seen the friction it causes, not from philosophical opposition to BSD licenses. I know what lawyers are going to say, I suspect.

MPT: As far as the real name thing goes, if it's a concern of anonymity on the internet, there are ways around having your real name on something.

BT: That's not the major issue here. The major issue is ease of writing tests. We want people to contribute as many tests as possible, so the fewer roadblocks as possible.

LEO: Yes.

BT: We recognize that the copyright header is potentially useful, but is not a requirement for copyright. We just have to make...if we have consensus, the burden of having to put that in every file. [Risk of] not having it in every file is extremely unlikely...

AWB: If the Microsoft lawyers will represent your opinion on this... If you can..

AK: We had a similar case in our tests. We don't have headers in our test and we're keeping it that way.

MF: Are you distinguishing the test files from the source files?

AK: It's just which directories they're in.

MF: Did your lawyer distinguish them?

AK: We didn't ask the lawyer to change the policy on source files.

MLS: Our tests do not have the headers and the source files do.

BT: No one here has objections to removing the copyright header: is that the case?

AWB: I don't believe we have the authority to say that.

BT: I'm not saying we have the power to change it. I'm saying we're agreeing that asking for a change is a good idea.

LEO: If I have an objection here, I'm not going to move this forward. I want to confirm: I don't have an objection, so I'm going to move forward.

AWB: I can help you explain that to him if you need to.

MB: In node land, we recently had to reinstate headers in our files (including tests) because we removed them before talking to lawyers. Because we did this without talking to lawyers, it's been really painful. So talking to lawyers is a really good idea.

WH: Can you explain why?

MB: When the io.js fork happened, all the headers were removed, and it turns out... there are laws... We just landed this about a week ago. If you go check the Node repo right now...the first round of the headers took us about a year.

AWB: We have to go through a committee of lawyers.

#### Conclusion/Resolution

There was no objection from the committee to removing the headers, and Leo will escalate this with István.


## Weak References status update

DT: I did the first round and started a draft. It was left at most people liking it but concerns about what it would be like in practice. Turns out the requires being in large C++ environments. Not a lot of progress has happened there. I'm looking for someone else to pair with me who can do the C++ side so I can focus on what I intended which is the JS side. That will really help in getting an implementation in V8 and node so people can play with it.

MM: Given what you're asking for there's no reason to limit it to those two.

DT: That's true.

MM: Any open source engine.

DT: If there's an engine that's less production and simpler to add this kind of prototyping.

MM: So you're looking for someone who can volunteer to help with it.

BFS: I can help, but I'm only going to help with V8, because that's what I know.

MM: And thank you, that makes a huge difference.

DT: I'll sync up with you and we'll see where we're at. Not something we can have by May, but we'll see how far we get. There are minor tweaks to the spec. But none of them are substantial.

#### Conclusion/Resolution

Bradley will help out and they will report back in 2+ months.

## Day ending.....

LEO: I have a link for TR104.

MM: What is ECMA-104?

AWB: It's the Test262 PR that fundamentally ........ it points to the github.....

AWB: We don't have any more 15 minute items. So we should call it a day.

AWB: There are hats in a box.
