# October 2, 2019 Meeting Notes
-----
Waldemar Horwat (WH), Andrew Paprocki (API), Rob Palmer (RPR), Joe Sepi (JSI), Jordan Gensler (JGR), Jason Williams (JWS), Brian Terlson (BT), Aki Rose (AKI), Mark Cohen (MPC), Pieter Ouwerkerk (POK), Randy Luecke (RCL), Michael Ficarra (MF), Kevin Gibbons (KG), Shane Carr (SFC), Robert Pamely (RPY), Michael Saboff (MLS), Keith Miller (KM), Chip Morningstar (CM), Mattijs Hoitink (MHK), Devin Rousso (DCR), Jordan Harband (JHD), Leo Balter (LEO), Justin Ridgewell (JRL), Robin Ricard (RRI), Jean-Francois Paradis (JFP), Valerie Young (VYG), Erica Pramer (EPR), Richard Gibson (RGN), Philipp Dunkel (PDL), Godfrey Chan (GCN), Joyee Cheung (JCG), Patrick Soquet (PST)

Remote: Daniel Ehrenberg (DE), Ron Buckton (RBT), Caio Lima (CLA), Yulia Startsev (YSV), Jory Burson (JBN), Ben Newman (BNN), Kyle, HE Shi-Jun (HSJ), Pedram Emrouznejad (PED), Dan Ehrenberg (DE), Mathias Bynens (MB), Jonathan Keslin (JKN), Frank Yung-Fong Tang (FYT), Yulia Startsev (YSV), Istvan Sebestyen (IS)

## Promise.any for Stage 3


Presenter: Mathias Bynens (MB)


MB: (presents slides)


MB: The new aggregate error is a little different from the current errors we have the spec at the moment. It lives alongside the current errors we have.
MB: "errors" being an own property happens to match the "message" property. Jordan do you want to make your case for doing it differently?


JHD: During review, I raised the question that most instance properties are implemented as accessors on the prototype. all the regex properties may have even been own properties in es5 but in es6 they are accessors. I assume part of the motivation was subclassing, the prototype generally takes the shape of the instance. The only thing that makes sense would have it be an accessor. I wanted to get the committee's thoughts on should it be consistent with message or the shape of things within the language?


MB: Discussed with Benedikt Meurer - he thought it would be simpler to implement as an own property, and strongly favored that approach.


JHD: Does anyone have any opinions on this?


[no response]


MB: Maybe for now we can continue with the slides.


YK: I think there was an assumption that it’s expensive to be making own instances all the time than to be putting them on the prototype or something. I think it was easier for monkey patching by putting things on the prototype so if you wanted to make changes there's one place to do it. I think those were the 2 reasons for prototype.


JHD: If you’re making a subclass of an error and wanted to override how errors worked, it might be easier.


SFC: We were having a discussion about this with Intl.Segmenter. There’s a method there that we thought would want to be lazily computed, so we decided to make it an accessor, and then we decided to make all the other properties on that object accessors.


MB: The lazy computation doesn't apply in this case. That's not a concern here.


YK: I’m also remembering something about the DOM using accessors.


HSJ: I feel accessor is better. It works better for subclassing, own property make it impossible to override in subclasses. Actually I feel the message property on Error is weird because it doesn’t always own property ( new Error().hasOwnProperty(‘message’) return false ), the shape is not stable.


MB: Someone considered to change the name _and_ API of Promise.any. They preferred for Promise.all and race to accept an options bag. I believe we should close this issue based on our previous committee discussions where we motivated the current name and API.


YK: +1 on closing the GH issue.


MB: I want to point out that the aggregate errors `error` property discussion is something we can still change in stage 3. It’s a detail and not a core aspect to the proposal.


BT: Do you have thoughts on the subclassing issue that HSJ raised?


MB: One thing that has come up from time to time in TC39 meetings, is the question: to what extent do we want to follow the original subclassing design in ES6? The RegExp subclassing design often comes up and being overly complicated and weird. Maybe we don't want to repeat that 100%. I do believe that subclassing is an important use case but I don't know what is the use case for the error properties doing something different.  We should look at subclassing a case-by-case basis. I don't have a strong preference towards own property or something else.


JFP: We have an issue with the Error object that defines a property as an empty string by default.  We can't overwrite that field.


MB: Maybe I understood, but how do you deal with the `message` property then?


JFP: Before freezing the language, we replace the field with an accessor.


YK: I understand generally the problem with override mistake.  Why does override mistake apply in this situation?


JFP: If we freeze the language, then the code runs in strict mode, and if someone wants to reassign the value to an instance, then the code would (??)


YK: I understand the mechanics; I'm trying to understand the consequences.


JFP: Code will stop execution. We have to repair the language before we can freeze it. So we cannot run in a frozen environment without that being fixed.


MB: So it sounds like it would be a matter of extending your current allow- list. It would make a longer list of things you have to patch.


JFP: We already have to do it, so it's just extending our patch for the override mistake. It wouldn’t be too bad, to be honest.


MB: For the current version of the proposal, we followed precedent from Error properties.


LEO: I appreciate the consistency.  The same thing happens with message for native errors.  I've never seen this being a problem before.


JHD: A lot of things in ES6 were changed to be accessors instead of data properties.  Why not the message property?


YK: It probably wasn’t overlooked, but that the risk of changing it was seen to be higher than other things. There was a certain amount of ad-hoc-ness.


BT: For Stage 3, we should decide property vs. accessor.


MB: Or we could go to Stage 3 with the understanding that this is an open issue.


KG: It sounded like there was a weak preference for this being an accessor from at least JHD and HSJ, and nobody else had a strong opinion. So why not do the thing that a few people prefer and nobody else has a strong opinion on?


YK: V8 thought it was vaguely easier to implement the property.


MB: There’s a GH comment by Benedikt Meurer where he expresses a strong preference for it being an own property.


YK: To the extent that I have an opinion, I don't think we should change what we already have.


AP: This is a semantic that we should resolve in advance of Stage 3.


AKI: We’re over the timebox, I think we need to just make a decision.


MB: I'm fine using an accessor if that appeases the committee.  We have spec text written and reviewed by committee members (missed the names).


PD: V8 and LEO expressed preference for messages as an own property, and there is nothing strong that says this should be an accessor for any reason. So i would put it the other way around is there any reason why it shouldn't be an own property?


LEO: I'm not objecting one way or another for this proposal.  I have a strong preference but not an objection.  I prefer consistency.


JHD: To be clear, consistency goes both ways. Consistency with message dictates an own property, consistency with the rest of the spec means an accessor.


LEO: I'm saying that I want consistency with error.  (I like property)


AKI: Let’s table this and discuss in the issue.


#### Conclusion/Resolution
- This will be tabled and discussed in the GH issue, re-raised [tomorrow](https://github.com/tc39/notes/blob/master/meetings/2019-10/october-3.md#promiseany-reprise) for 3 minutes.


## Reduce the amount of implementation-defined behavior in Array.prototype.sort


Presenter: Mathias Bynens (MB)


[PR](https://github.com/tc39/ecma262/pull/1585)


MB: (describes the PR)


WH: There are a couple things here. One is whether implementations are willing to do this, which I can’t comment on. The other thing is whether the PR is correct.  I can comment on that.  It contains several self-contradictions. You made some refactorings that break things. The new spec you say that unless the sort order is specified to be implementation-defined, “There must be some mathematical permutation π of the nonnegative integers less than len, such that for every nonnegative integer j less than len, if property old[j] existed, then new[π(j)] is exactly the same value as old[j]. But if property old[j] did not exist, then new[π(j)] does not exist”; that invariant is no longer true. Then you have another invariant, “Then for all nonnegative integers j and k, each less than len, if `SortCompare(old[j], old[k]) < 0`, then `new[π(j)] < new[π(k)]”;` that’s no longer true either. And there are also some other notes that weren’t updated. This will need some work to get it to be correct. It's a fine idea, assuming that implementations are on board.


MB: We definitely want to get the spec correct and would really appreciate your help there, please comment on the PR. We’d love to work with you. The main question is, can we separate the intent of this PR from getting it correct, which we obviously want to do before merging it. I wanted to ask for consensus on this PR today - can we do this assuming we get the spec correct after WH approves it?


WH: Why did you refactor the treatment of `undefined` out of SortCompare and into the _undefinedCount_ counter?


MB: I would have to ask Simon at this point. I currently don’t have the details mapped in. We went over the details in the last meeting.


WH: Any comments from implementations about the feasibility of conforming with this?

MB: Would be really good to hear from JSC.


KM: I think we’re okay with this unless there’s some underlying performance issue. I know that sort does matter for some benchmarks but there shouldn’t be a problem here.


MB: Yeah that makes a lot of sense. V8 cares about performance too :)


KM: Does Moddable have an opinion?


(Moddable is not here?)


MB: So it sounds like implementers are OK with the PR. So it sounds like the other question is: can we get consensus on the PR now, and flesh Waldemar’s concerns offline? WH, would you be OK working with us on the spec details?


WH: Sure


MB: OK, can we get consensus from the committee today modulo spec-correctness?


KM: I would like to wait until we’ve looked into the potential JSC perf issues.


SFC: I think that sounds good and consistent with how we do a lot of these PRs in Ecma402 - we get consensus on intent and then work on spec correctness after.


KM: I'll make an issue in JSC and link it from the PR.


(Moddable person): Where are these tests?


MB: They’re all in the GitHub thread.  There’s a comment by me with the first batch of tests, and a more recent comment by Simon with the additional tests that were requested.


#### Conclusion/Resolution


- Consensus on PR intent, pending editorial details with WH


## String.prototype.replaceAll for Stage 3


Presenter: Mathias Bynens (MB)


[Slides](https://docs.google.com/presentation/d/1OGmV6uVTOEeSYO1nMeLjzflkbRJZ4p9QXlGV8IvDMmU/edit)


MB: (presents slides)


MB: Here is my proposal.  (See list in slides)


YK: Thank you for doing the use counter.


WH: The sticky behavior is an example of, "oh doctor, it hurts when I do this." If you don’t like it, don’t do it.


JHD: I believe that when I looked into this, the sticky behavior is what motivated me to stick with the String.prototype.matchAll behavior.  It seems like we should treat sticky the same as non-global.  Why are they different?


KG: Because one is the default!


WH: To add a sticky flag you affirmatively have to stick the `y` flag there; OTOH it’s easy to think that “all” in `matchAll` implies global, so you don’t have to also stick the `g` flag on the RegExp.


YK: +1


DRR: I generally feel that maybe we shouldn't let you do this if it's a "doctor it hurts" issue.  Maybe the issue should know.  This doesn't lead to useful behavior.


WH: The use case for `y` is on the screen right now. It's sometimes useful. It’s the third line, if you want to replace consecutive uppercase characters until you hit one that isn’t uppercase.


MB: OK, let's call it a feature then!


[laughs/cheers]


MB: I'm OK with this and it is consistent with `String.prototype.replace`, which was an important design goal. So to recap, are we good for Stage 3, with exceptions for non-global regexps?


[thumbs-ups]


#### Conclusion/Resolution


- We have consensus on stage 3 as proposed, including the exception in String.prototype.matchAll


## Update on sequence property escapes in Unicode regular expressions


[Slides](https://docs.google.com/presentation/d/1kQ3nlq238pMPY35oIauZWO2YUrH7NGHjNerTlYBY-cM/edit)


MB: (presents slides)


MPC: I think this is cool.  I'm curious on the use case behind this.  how do people use it?


MB: The readme for the proposal has the best answer to this, we've also covered this previously in the committee. Basically there's lots of libraries devs are using (we've looked at NPM download numbers) that export a regular expression that matches.There are NPM packages that matches hashtags according to unicode. And then you have to solve the subproblem of matching emoji sequences.  And 99% of the file size is a big dynamically generated regex. Tens of kilobytes of JS code on the critical path, slowing down app load times. We can significantly reduce file size on the web by implementing this.


YK: I guess my intuition is that there is a clear answer that seems right which is that if you negate a character class for an emoji, and you put an emoji in there, it doesn’t work. I remember last time we discussed an alternative intuition and I don’t remember what it is.


MB: We've discussed this previously.  The simpler example is something WH brought up: imagine that there is a character property that expands to match any keyword.  Now say you negate that.  What does it match?  If you have a string with ABC, does it match A, AB, ABC?  Does it work as a negative lookahead?


YK: That makes sense; it's just that this sees not generalizable.  You might be saying 2 things that can't both be true at the same time.  I'll talk to you offline.


JRL: On the slide with the multi-code-point emoji (man doctor with dark skin).  Is it the whole emoji or part of it being matched?


MB: It's the whole thing.


WH: What will it do if you don't put a `u` flag?


MB: In non-`u` regular expressions, `\p` is just a needless character escape for `p`. (This is not new in this proposal.)


MB: (returns to slides)


MB: I just want to clear up this roadblock of unified or disunified syntax (\p only or \p and \q).


MLS: I'm an advocate for a separate character.  You cannot parse the `\p` without recognizing what you have in the curly braces to know you have to throw an early error.  But you can immediately know with `\q`; you don't have to look inside the curly braces.  The UTC gave us the choice to choose `\p` or `\q` so it's up to us to choose.


MB: We have an experimental implementation in V8.  In our opinion there is no complication to parsing, because you have to check that what is inside the curly braces is valid anyway.  I would not expect these exceptions to be in critical path anyway because it's broken JS source code.


WH: I agree with MB on the unified syntax.  The primary reason is, in the simple case, you have `\p` followed by Emoji or RGI_Emoji_ZWJ_Sequence.  You don't care if it's a property or a sequence property.


KG: I feel pretty strongly that we should not overload \p to mean two different kinds of things. It makes it difficult as a reader of a regex to understand what it’s going to do. And if I can't tell if this thing is going to match one character or multiple characters, it makes it hard for me to reason how it's going to behave. I won’t have memorized the complete list of things which are sequence properties and which are non-sequence properties. I would rather have the syntax distinguish these cases. I feel strongly it’s much easier to reason about if it’s disunified.


MB: Do you have the full list of currently supported properties, values, and all their aliases memorized?


KG: No, of course not, but if I'm reading a regex, it's clear to me which type they are.


MB: Right, but you already have to know as a developer what you’re doing if you’re writing a regular expression. If what’s between the braces is not a valid property or alias, it already throws today — and that’s not always obvious when reading the code.


KG: I'm talking about readers of code.  "1 character or throws exception" is much different than "1 character, multiple characters, or throws exception". Probably when I’m reading code I can assume that it’s syntactically valid because it’s been run through the linter. I’m confused by this objection.


YK: I’m going to try to be very careful to not say anything is “obvious”. But knowing what a character is in unicode is a pandora’s box. It is already very hard for a person to understand what a unicode character is, and it’s not important for a person to look at a grapheme cluster and think very hard about it. OTOH, telling people there’s a thing that they have to understand to be able to use emoji will cause a lot of confusion, and very few people would reach that understanding.


HSJ: Similar feeling - as a Chinese programmer we always have to deal with unicode characters, not just emoji, for example if you want to match a CJK character, you need to use the u flag. The problem is that if you really want to deal with some edge cases, you need to be a unicode professional anyway. So I don’t think that adding a separate `\q` can help the average programmers, it just makes the common use cases a little bit harder.


VYG: When I first saw this slide, I initially felt overloading was the wrong way to go. My feeling is that eventually this will have to be known and it will be much more annoying to see this error as a newcomer to the feature.


KG: The arguments for overloading seem to mostly assume that we can do that because people won’t have to know the distinction between the two and that this distinction will seem kind of opaque to them because people have a hard time reasoning about unicode anyways. I agree, but you can’t ignore this distinction even when you’re just working with javascript, because some \p things can be negated / put into character classes, and some can’t. There is this distinction at the level of the language. You can’t avoid encountering the fact that these are different kinds of things. So I just don’t see the benefit of merging them, because the language is not the same.


YK: VSJ had a version of that that was more convincing to me, which is that the fact that it will become an error when it’s a negated character class will surface this to you anyways. And this isn’t convincing to me because as a developer, I’ll just google it and find an MDN or StackOverflow page which will clear it up. That’s familiar and okay. And on the flipside, if you don’t negate it and start searching for why the distinction exists and they find out that the answer is a problem they haven’t encountered yet, they’ll get confused.


MLS: Character properties and sequence properties are very different in both their makeup and their processing. In a character property, they can have a boolean or sequence, etc.  With sequence, either you have it or you don't.  A sequence is a bunch of alterations.  The way the regexp engine handles it is very different.  There are very few sequence properties in the space that are exported by this proposal.  There are quite a few that can be exported, and most of them don't have to deal with emoji.  I think it is very important that with a sequence property, the matching they are doing is quite different from a character property.  As both writers and readers, it's important.  At the end of the day, the programmer needs to know what they are putting in their regex.  Overloading syntax doesn't help, because they have to refer to documentation anyway.  `\p` or `\q` is a small burden.  That's why I'm in favor of different syntax.


MB: For me, the additional burden with \q is that, as a developer you’ve already figured out which Unicode property you want to refer to between the braces, but now you also have to change the syntax as you’re writing your regexp.


MLS: You don’t have to change anything since they’re new, the programmer has to know what to add.


MB: Property escapes currently support various kinds of Unicode properties: Binary properties, Enumeration properties, Catalog properties, and even some things that technically aren’t Unicode properties (like `ASCII`). We’re already overloading `\p{}` and we could choose to re-use `\p` for sequence properties as well.


YK: I think the important question is not whether there is a distinction, it’s that given there are so many such distinctions in unicode, is this one important for us to introduce a bifurcation. We chose to conflate scripts and whitespace, but you could’ve imagined an argument for making them distinct. Also, a long time ago, RegExp engines were only talking about bytes, but we decided that the actual mental model is character based. I think you have to show that there’s a lot of damage to treating a sequence as one character in your mental model.


SFC: I can see arguments both ways. I can see arguments that we should abstract multi-code-point emoji so that programmers don't have to think about it. But is also a common programming error that people don’t know about code points and how it can break things, so making programmers think about that distinction might be a good thing. One of the downsides of `\q` is that the syntax is already specified to be a literal sequence of characters not character properties in [Unicode TR 18](http://unicode.org/reports/tr18/#RL2.2). However, I don’t think the syntax is used anywhere else. I want to see this feature added, and I’d be ok with either way, but I have a slight preference for `\q`.


VYG: Are we treating the \q properties differently? I do think the distinction and how you use it is what comes down to how you make it easier. And also its frustrating because the only answer to this Q is what makes the most sense to developers using this unicode and maybe we should just ask them. We don’t have a way to do that yet and i wish we did, is there anything we can do?


MB: How do we do that in an unbiased manner? I could do a Twitter poll, but my bias would creep in to the way I phrase the question.


YSV: With regards to getting information for how users use things, this is a great candidate for an experiment. We have precedent for this and universities willing to work with us. Also, we can use the outreach groups we have established as a way of working with specific groups such as educators and framework/tool authors.


TCN: If we’re trying to do a twitter poll, we should use the @TC39 twitter account as a way to avoid this going through any of our individual communities.


JBN: We can also talk to MDN and have them support us in identifying how developers approach it. Same question as YSV (...)


WH: How easy is it to identify which one is which from the name? Note that `{Emoji}` is a single character property, but `{Basic_Emoji}` is a sequence property. The question arises that if I want to use one of these things in a regular expression, why do I have to remember which is `\p` and which is `\q`? If I’m not using it in a character class, why can’t I use `\q` with all of them? A single character property should by default also be a sequence property. So why should `\q{Emoji}` throw an exception? It's hard for me to remember which ones are single characters and which ones are sequences, and in contexts where the difference doesn’t matter users shouldn't have to care.


MB: We discussed making a `_Sequence` suffix mandatory for such properties at the UTC level, but that was a no-go.


API: The feature overall is very important.  The minor difference is not worth blocking the proposal.


MB: I think that the discussion today was mostly rehashing previous discussions.


#### Conclusion/Resolution


- [Discussion will continue in the proposal repository]( https://github.com/tc39/proposal-regexp-unicode-sequence-properties/issues/10)
- [Issue will be started regarding developer outreach](https://github.com/tc39/proposal-regexp-unicode-sequence-properties/issues/19)
- Remaining discussion pushed to overflow queue


## Proposal disclosure policy


Presenter: Michael Saboff (MLS)


[Slides](https://github.com/msaboff/tc39/blob/master/TC39%20Disclosure%20Policy.pdf)


MLS: (presents slides)


JBN: There are cases where we cannot disclose because of an agreement with our customers that we are working with a given company. A lot of times the contractual language excludes us from doing that.
We can’t document, we can’t say that publicly without risking the terms here


MLS: Is that always the case?


JBN: It depends on who the client is


MLS: Where its appropriate I hope whoever you’re contracting you can disclose it, but if you can’t then you can’t there’s nothing we can do about that.


JBN: We’re +1 to it but I see this one particular problem.


MF: We have the same thing in our situation. If the idea is that anyone who has a services company, someone in their tech org would just say it’s fine.


Some companies would take a lot of pride that they’re contracting with a security?? Company but we have to draw clear lines related to what proposal we’re doing. Also are there penalties for non-disclosure?


MLS: Well I hope we don’t have penalties for non-disclosure. If you have signed a non-disclosure agreement, and you have signed it then I see it as fine to not disclose. However if you do have your client in the room, it would be good to have that disclosed.


MF: So the line you are drawing is for when the customer is a member of TC39?


MLS: I didn’t think of the client relationship and contractual relationships. It seems fine to me if that is not disclosed


??: Is it worth requiring disclosure to parties who cannot be disclosed


MLS: If there is a non disclosure agreement, then it is fine to not disclose.


??: Then it seems like there is no transparency.


MLS: I'm not sure how we could stop that, but i think that's outside of the process that we have here. I hope that companies don’t do that just to hide the relationships, and i don’t think hiding relationships provides much advantage to those companies.


FYT: Does exposing contractual relationships affect how people would react to proposals?


MLS: I think it’s helpful to understand how you address the issues during discussion and who discussions could be had with, for example Apple has a contractual relation with a company someone to do something, then I think it’s beneficial ??? (didn’t catch this).


YK: It sounds like this is saying I am legally required to report to the committee who I am working with or championing a proposal with.


MLS: Before I had brought this up, would you have problems exposing contractual relationships?


YK: I have a contract with a bank, and the bank has a separate contract with Igalia.  I think my lawyer would want to know the answer to this problem and it sounds complicated.


YK: What makes me nervous is this is introducing a legal requirement, for people this is targeted at people would be trying hard not to comply. I’m going to have to tell my lawyer, whenever we have a contract please talk to me.


MLS: But you've been an advocate for decorators.


YK: I have had NDAs with previous clients.


MLS: We can't force you to break NDAs.  As a standards organization, we have very little discourse to force people to do anything.


YK: I just want to be clear that I really don't want a proposal like this to make my life harder on the contracting side.


JHD: People could stick clauses in their agreements saying, no, you can't tell TC39.  I'm not surprised that there are many of these types of partnerships historically.  The delegates tell each other who they are representing.  The purpose is not so we can fill out a spreadsheet, but so we can understand people's biases, keeping in mind where they're coming from.  If you're working on behalf of some other company on a proposal, that could be something we could require transparency.  But YK says that is complicated.


YK: I don't want that.  When we operate with open-source, we have to ask for an open-source carve-out.  It required a lot of lawyers to get involved.  This sounds like basically the same kind of situation.  It's an annoying and expensive thing to do.  But maybe you think that's worth it, but it feels unfair on a small company.


JHD: Is there any reason why those relationships should remain secret?


MLS: Is this something we want to codify in TC39?


YSV: Is the underlying issue that we don't always know who is working on what?


WH: Point of order: Proposals likely to involve lawyers must be done at the ECMA General Assembly level. We’ve had a number of comments about needing to get lawyers involved here. We cannot decide this by ourselves.


MLS: Let's talk about this at lunch.  I don't need this resolved at this meeting.


Istvan SEBESTYEN (IS): I have read this outside the meeting. I fully understand the issue. We need to think about it how best to solve. Generally in an SDO all NDAs (e.g. between a member and an outside / inside TC39 client) are outside the area of standardization. If it is an outside client then we just see the TC39 member. He takes all the responsibility also for the contributing part from the outside client e.g. should be a patent or so, plus the content). If the client inside TC39 then I think we are fine. Certainly it could be encouraged to disclose such connections but I think this can only be a “should” and not a “must”. I am sure that in many cases we also have not disclosed alliances among TC39 members when discussing topics. No disclosure on that either, of course very often you just see. So, I agree the discussion must continue how to handle this. Maybe just via a “CoC Recommendation”.


#### Conclusion
- Discussion will continue in person and online
- No conclusion reached.




## Revisit ECMA-402 casing conventions


Presenter: Shane F. Carr (SFC)


SFC: (presents [PR](https://github.com/tc39/ecma402/pull/377))


LEO: As the editor, …. We discussed this at the last meeting but somehow did not have much engagement from outside Intl. I’m really happy with this work and as the editor I would like to sign on as a +1.


YK: I’m really happy that the thing I asked for last meeting happened. Very excited, happy, no objections.


PD: For Temporal, we’ve intuitively chosen to do exactly this independently, so this is great.


AKI: Just wanted to say thank you, this was great, thank you for pinging me on the PR. Exactly what I was hoping to see, really clear - even though it’s not my dream solution it’s perfectly serviceable and more importantly agreed upon and concrete. So thank you.


WH: So what’s the decision in the document?


SFC: The decision is that the style guide will be checked in and the recommendations are specifically called out by stars.


WH: I’m confused by the wording of the decision sections in the document. So what’s the decision here?


SFC: The decision is what’s written here. The W3C convention that I’m referencing is linked in the document. The recommendation I’m proposing checking in is that we’re going to use CamelCase for both keys and string values because of the reasons discussed here despite the W3C recommendation.


WH: I understand your intent but it’s written in a confusing way. I’d like to see the decisions a bit clearer.


SFC: If you can comment on the PR and leave inline comments that would be great.


#### Conclusion/Resolution


- The document is approved


## Map.upsert , previously Map.insertOrUpdate


Presenter: Erica Pramer (EPR)


EPR: (presents slides)


RGN: It looks like the method uses privileged access to internal slots, which means existing subclasses can break.


YK: Isn’t this the point? This introduces new functionality that doesn’t require 2 roundtrips through the API.


RGN: It’s not clear to me that the API is actually more efficient.


YK: It is - you’re able to lookup and update all in one shot.


JHD: (clarifying) for example, a subclass might have an async “has” and “get”, and combining these into a single semantic would allow a single async operation.


MF: This is not a stage 2 concern. This should be figured out but later.


<!-- ^ the above notes were not real-time, could people jump in and fill in? -->


JRL: Can you pass arguments?  Right now we only have the old value in the update function. If we passed the key and possibly the map instance to the insert/update function, we might be able to hoist the functions out.


BFS: We could add stuff to our arguments for our user callbacks, that's fine.


SYG: I want to stress that it’s V8’s point of view that the performance motivations here are not important. I like the feature and ergonomically it stands on its own. But I don’t want to overstress the performance benefit’s here. The lack of an updateOrInsert function is not the reason things are not as fast as they could be.


BFS: I believe that’s true for any of the big engines, I’m unsure if that's true for other VMs i believe they are asking if code can be optimised in other patterns? I don't think we should focus on VMs saying they can optimize out stuff. Like you said, performance is only 1 characteristic of this.


YK: I agree with the ergonomic point and would like the feature either way, but I think that if we think performance doesn't matter, then the original argument of ??? seems true.


SYG: I’d have to think about that. The subclassing thing in particular?


YK: The original argument was, this is a subclassing hazard.  Therefore you have to also add upsert.  But now you're saying you have to do round-tripping and that's expensive.


SYG: The performance issue is not so much the roundtrip through the API.... well yes, I suppose that tilts it in favor of it being implemented as existing methods.


YK: This is not a stage 2 concern by the way. It should be resolved during Stage 2.


JRL: Can we have a separate insert method that performs like getOrInsert. Use case is when using tagged template literals, we're constantly calling get to see if a value exists, returning it, or else inserting the expensive value into the map. It would be super useful if I can call getOrInsert.


BFS: It's not part of this proposal but it seems fine.  I strongly feel that we should not bundle proposals because that leads to things not being discussed in isolation.  I understand people who want to have big bundle proposals, but we generally don’t have a lot of reuse of spec text or abstract methods. This might be problematic if we make this getOrInsert. I think it's a perfectly fine thing to add, we could, but we probably wouldn't be able to re-use the spec text, which I feel is one of the goals of the bigger proposals.


JRL: We’re introducing the concept of the insert function here, and whatever we’re using for it we’d have to use the spec text for upsert.


BFS: Correct, but with getOrInsert we don't have access to the original entries. I don’t know how they can be combined.


DCR: Why is it we need an update function AND an insert function, it seems you can get the functionality of both with just one.


BFS: If your map is storing a primitive, you don't want to do an insert there.  You need to replace the actual value at the entry.  If you do some method call on a Record or Tuple, it wouldn't be useful, because if you're trying to update the value you have to update what's actually stored at the entry.


DCR: Can you give an example?


BFS: Let’s say I’ve got a map and it’s got one key-value pair in it of the string foo to the string bar, and I want to update it to bar2 as a string. But with getOrInsert I don’t really have that capability.


KM: There's two callbacks; why not have 1 callback?


EPR: What if you are just getting or just inserting?  Like, what if you want to update a value if it exists, or else insert?


DCR: You could pass it as another argument.


EPR: That is something we can consider.


JRL: Where is WeakMap?


EPR: We can support it with the same API but with necessary restrictions.


JRL: Meaning?


EPR: Meaning that you have to have Objects as keys.


JRL: Sure, but as a developer, people don’t see Map and WeakMap as different except for the key issue, so having it only on Map feels weird.


BFS: There's an open issue where we state we add WeakMap after this meeting.  I don't want to have a big discussion on this because it is the same semantics essentially.


YK: I think I agree 100% with the champions' desire to not entangle WeakMap with this.  I hope we can advance.


WH: This seems like a fine proposal.  I do like having the two callbacks because they're usually quite different and you usually only want to specify one of them.  Some claims about being more performant were made, but the callbacks can mutate the map also, so you can get reentrancy issues, and you need to specify the semantics for that, so you have to do multiple lookups anyway in the spec.


BFS: Could you clarify?


WH: The callbacks can mutate or delete the entry you inquired about.


JHD: It just gets overwritten in the current spec.


BFS: That's just like any operation in the callbacks.


DE: About subclassing and performance, some history that may be an interesting analogy.  Regarding RegExp.  In ES6, RegExps were changed such that String.prototype.replace, .search, etc., were boiled down to RegExp.prototype.exec.  When Adam Klein, Yang Guo and I implemented this in V8, there was a really significant performance regression due to all these function calls.  We had to check somehow, is the RegExp prototype similar enough to vanilla, in which case use fast code path.  Later Jakob Gruber rewrote this code to be faster and cleaner.  But as these changes were happening, the checks for what made the RegExp prototype were dirty changed. In general, It's really easy to get the RegExp.prototype in a bad state. We call RegExp.prototype.exec in theory, but in practice we have optimized code paths that trigger if RegExp.prototype seems "clean".  This ended up being a common pattern across implementations.  It ended up being too costly and impractical to let things optimize themselves.  This case seems like it will be called a lot less than RegExp methods, but I want us to keep that analogy in mind.


BFS: One difference is this is a new capability.  We've talked about comparison functions, etc. I am hesitant to jump on any bandwagon because those (semantics?) could increase over time. Because even if we call things (get, set, etc), we may also call things like comparison or normalization functions as well. It’s one thing to state that there are only three user calls potentially happening within this, but once this gets to 5, I would worry, especially as that would get to (??) over time.


DE: I'm not sure what was done with RegExps was best.  This was a TC39 presentation of mine back in 2015.  I'm not sure what this means for new proposals going forward.


YK: I feel generally confused by, on the one hand, implementers saying, this is fine, and others giving horror stories.  I'd like SYG to clarify that.


SYG: If you assume it’s the double lookup that’s slow, there are better things we can do. The compiler can also do something about method calls with inlining, etc (... more - missed)


YK: You're agreeing with DE on the cautionary tale?


SYG: For Dan's example, like, at some point I can see the lookup overpowering the function call.  In the general call I don't know if functions overpower.


KM: I agree with basically everything Shu said. I think part of the thing with the regex case that was difficult was that regex had existed for a long time and had optimised code paths and a lot of those had to be reworked in various ways and that changed a lot of things. From my understanding a lot of implementers felt that subclassing regex was a lot less common that implementers feel subclassing maps was. But this is an opinion rather than a technical concern.


BT: Any objections in advancing to stage 2?


[no objections]


EPR: Stage 2 reviewers?


[MF, RGN volunteer]


#### Conclusion/Resolution
- The proposal advances to stage 2!
- MF, RGN to review


## An update on Temporal


Presenter: Philipp Dunkel (PDL)


PDL: (presents [slides](https://pipobscure.github.io/slides/temporal-2019-10/))


WH: As an example of DateTime, you had an example of a TC39 meeting, but no time zone.  So now when you combine a date with a time zone you have a DateTime?


PDL: (explains)


WH: Thanks.


PDL: (continues presenting slides)


PDL: Should there be a combination type?


YK: The thing about dates is the actual choice points are business decisions. For example, if you’re using a date library to decide when to bill a client. Having this opinionated option will force the user to think about what they want to do.


RBN: I've looked a little bit at the proposal and at one point built my own implementation, what i found was having a combination type for DateTime and Zone is fairly useful for a number of scenarios including date math based on the timeZone based on the information you have. If you don't have a combination type for this then that adds a lot of additional complexity to a lot of the code you have to write.


PDL: The example you gave is the reason im scared of having these combination types, the chances that you are using it in the right way are low especially for DateMap. Let’s imagine you have the situation in this timezone, "let’s add a day" you can say "that is 24 hours from now" and I’m basing that off the absolute time. And you get a different result if you do that from "let’s just flip the calendar day 1 forward"  so which one would we pick? Both would have different results and we need to pick which one to choose.
We actually explicitly pick the wrong, the one which most often gives the result which you don't expect. Where as if you say "I’m choosing to do what I want" then it’s obvious what you're doing its explicit and you're making that choice.


RBN: Even if it was a reduced API set. if I'm running a calendar application, and I have to say you have an appointment at this time in the future, a lot of those use the ISO formats and include this timezone format as well. I now have to have 2 fields to represent the dateTime and the Timezone or a single one and even if I need to do some math off this (...) it still would be useful to have I think.


PDL: The bit that fills that gap is, we've modified the absolute you can pass in a timeZone which will then render in that timeZone, so if you're interested in the absolute version of that you can toString it with that timeZone then you can fromString it in 2 ways: 1 is by getting the dateTime from [] or you get the absolute from string. [went to fast].


RBN: I know a lot of libraries support (named timezone offset?)


PDL: There are also a number who don't have it an example would be google's absail dateTime and they said "we don't have it and we've not missed it so far". Having said that i think the problems you have that are motivating us to say "lets not do that" are the same problems you would encounter in java.


RBN: (...) I’ve built an application that uses this kind of information.


DE: You could have other types, you could have just a year (we have MonthYear, DayYear) but it's good to just start out this way.


SFC: there's toString() method that allows you to  pass a timezone but how does that work with Absolute?


PDL: You can do datetime or absolute .toString() but you can also give a base to absolute to print in a specified timezone. So you can follow Intl semantics.


SFC: We’ll sync later, I’m not convinced it completely works


PDL: Any comments on the Global namespace? Otherwise i'll take it as acceptance…


LEO: I don't have comments on global but one feedback ive been giving, i wish we could have better examples of the API in general, there's a lot of use cases here and I need to do some ??,I like to read the repo itself, maybe it's a good exercise to go into MDN and create documentation for this API (which i believe is really rich and really powerful).


PDL: I think that's excellent feedback. Actually the polyfill gives a good idea of what the repo is. Plans to seek help to write MDN docs


SFC: one comment, Global NS better since it gets rid  of the Civil prefix. One of the most contentious issues we had from the previous feedback was a lot of people didn't like the Civil keyword CivilDate CivilTime and moving it to the Global namespaces removes that, so that's a pro for using global. I'm really happy with the state of this and im looking forward to stage 3.


DE: Concrete examples on the repo. Any strong concerns with this?


[no response]

BT: We have to move on now


PDL: Please open issues, I love them


## Declarations in conditionals


Presenter: Devin Rousso (DCR)


DCR: (presents [proposal](https://github.com/dcrousso/JS-Declarations-in-Conditionals))


DCR: Stage 1?


YK: I think the arguments from efficiency are real, but it’s really about ergonomics and idiomatic-ness


WH: I disagree with the choice of not including the else clause in the scope; I think it will bite us in the future. What C++ has done is further allow you to separate the initializer from the condition: https://en.cppreference.com/w/cpp/language/if. In that situation it’s essential to be able to access the declared variables in both the then and else clauses.


DCR: I thought that was a proposal.


??: It’s in the language since C++17.


DCR: What he was describing is what’s inside Future Work in the proposal - extend to allow multiple names to be initialized


WH: I would be concerned if we didn’t make the declared variable available in the else clause because that would shut a door that I don’t want to shut. Generally I like this.  It's unclear from what you're proposing, but I assume that  `if (let x)` is allowed and evaluates to undefined?


(exchange between WH and DCR about whether the above matters)


YK: It seems like the proposal that Waldemar was objecting to was that the else clause would see the same named variable from the parent scope.


DCR: My original proposal was that the named variable would only be visible in the if clause.


YK: I think you don’t have to answer what should happen in the else clause to make it an error to access it.


LEO: I don’t think this issue should block anything for stage 1. I think this is a very reasonable thing for investigation during stage 1. If I have to answer immediately I’d say I agree with WH and YK but I think this should be investigated during stage 1.


SYG: More scope tricks are a lot scarier to me than consistency with C++.


MM: When people look at code there’s a set of syntactic markers that give them some regularity w.r.t. Reasoning about scope. In either case with this `else` there’s a plausible case for it being consistent with the rest of the language (...) there’s no other construct in the language with multiple curly bracketed block with (...)


YK: Function parameters?


MM: You don’t have multiple curlies with function parameters. (...) I also wanted to check presumably you’re also going to include the while loop, but hopefully not do-while?


DCR: Good question.


MM: Omitting do-while is surprising, but I don’t think there’s any way to include it that’s not worse.  And I see SYG later on brought up the syntax layering proposal.  So whatever the regularity is, that applies to all the function forms.


JRL: Try-catch… we'd have to decide if you have a variable in the try, is that available to the catch and finally block.


??: Is the variable in scope in subsequent patterns -- try-catch.


CM: What about else-if?


DCR: That’s one of the things I’ve gone back-and-forth on.


MF: When I program, I am constantly focused on reducing scope, including variable lifetime and try-catch coverage. So I theoretically would consider myself the target audience for this proposal. But if it’s not just limiting scope to the consequent, I don’t see how this buys us anything at all over putting a block around the if with the binding in there. And others have already pointed out the issues with the variable only being available within the consequent (such as YK's TDZ/shadowing concerns, and familiarity for C++ devs).


DCR: The reducing of scope is not the only part of this. Avoiding the expensive operation is another. FWIW, it’s potentially valid to say devs don’t like to add indentation, so this could be nice. I understand that maybe it would just be syntactic sugar at that point, but I think there’s still value there from a readability perspective there.


MF: I can see how there is non-zero value but syntax is expensive to me and I have a higher bar for syntax than “non-zero value”.


SYG: MM said my point on resource management.  For scope, the current destructuring shows it is the same block scope as the subsequent block.  If I have `if (let x) { let x }` is that an error?


DCR: Yes. Assuming that the second x is inside the if, not outside.


SYG: Correct, inside the if.


GCN: Related to future work “if  (let x=1, y=2; x|| y) {...};”. This syntax is related to whether to binding should be available in else. This should be considered with the rest of the proposal because there are implications.


RBN: When it comes to resource scoping, I agree with Mark that we need to have a broader discussion about scoping across these proposals. A rationale  for (...) was that outside of the try statement the object is effectively unusable because it’s been disposed, so attempting to access it will probably result in bugs and user errors. But that doesn’t quite apply to the if else case. There might be a valid reason for those to differ but (...)


YK: Since I use this feature a lot in Ruby, it feels good, and it feels bad I can't use it in JavaScript, and I can just wrap another block around it, what do other people think?


CM: I’ve worked in a couple of C/C++ jobs that had linting rules forbidding its use.


YK: What's the rationale?


CM: The rationale is code readability - something that looks like a conditional expression should not have side effects.


JHD: as an example, the Airbnb style guide forbids conflating assignment with expression positions/conditionals ([1](https://github.com/airbnb/javascript/blob/282ef9ea9051dce725f382ac83cb5c3f2d4da0c2/packages/eslint-config-airbnb-base/rules/errors.js#L23-L24))


DE: The stage 2 resource management proposal also has a construct that’s kind of like this where you can add a binding that’s inside the parentheses (...) so I’m wondering if the solutions for that, how would they relate to the solutions for this. I’m wondering if we’re worried about complexity for programmers how much of this crosses over.


DCR: I think we need to discuss that more. I’m not super familiar with the resource management proposal, I think we will figure out the more technical details during stage 1.


SFC: Regarding the question about style guide - the [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html#Local_Variables) says that variables needed for if, while, and for statements should be declared within those statements, so it encourages this pattern.


#### Conclusion/Resolution
- Consensus on Declarations in Conditionals for stage 1! Congrats to DCR on his first!
## Intl.DisplayNames


Frank Tang (FYT)


- [proposal](https://github.com/tc39/proposal-intl-displaynames)
- [slides](http://shorturl.at/yPSZ1)


FYT: (presents slides). Let’s discuss the new things on slide 14 and the changes we have made since stage 2.


SFC: We have discussed a lot of the details of this in intl-402 meetings. Originally we wanted to put up for advancement in July, but pushed back to handle these issues. The subcommittee supports this proposal and has carefully reviewed it. In my opinion, this proposal is definitely stage 3 material.


DE: As the only stage 3 reviewer, this proposal looks good to me. Here, I can see some tiny typographical errors, but I think these are post-stage-3 things (unobservable). This proposal has been really good because we’ve been able to iterate over a lot of these design decisions, worked a lot with Apple. For disclosure, I’ve been working on this in partnership with Google.


SFC: For the record I’ve spent a lot of time here and I’m very comfortable with the current spec text.


#### Conclusion/Resolution
- BFS to review
- Consensus for stage 3 pending above review


## RegExp Match Indices


- [Proposal](https://github.com/tc39/proposal-regexp-match-indices)


Presenter: Ron Buckton (RBN)


RBN: (presents proposal)
Current status: https://github.com/tc39/proposal-regexp-match-indices


RBN: We need another implementer who is willing to work on this feature to prepare for Stage 4.


BT: JSC, SM folks?


MLS: Yeah, there are thoughts to implement this. RBN, what's your timeframe besides tomorrow?


RBN: If possible, if we have enough implementation experience between two implementations, I’d like to revisit this at the next meeting if possible.


#### Conclusion/Resolution
- MS & RBN will follow up to implement this before December so that the proposal can go to Stage 4 in December


## Proposal Disclosure Policy 2: Electric Lawyeroo


Presenter: Michael Saboff (MLS)


WH: If what we’re doing is asking people to make commitments or consult with their lawyers, that’s something that should be done at the GA or ECMA ExeCom level. We’re supposed to be doing technical work in TC39.


MLS: Sure, I’m not proposing we change the way people make business arrangements.


WH: That’s not clear - there’s a difference in opinion around the room about what this proposal would entail.


FYT: I think this contracting relationship mandate adds a lot of burden to the proposal champion to find out something they don’t know, for no benefit besides a philosophical point about transparency.


MM: Everything you're saying about transparency has a set of suggestions for best practice behavior, of informal norms.  I'm onboard with things should be more transparent.  It's just thinking about it as an issue of etiquette.  The thing that I think is causing all the friction here is when you go beyond suggested norms into something that would be described as a rule or a code of conduct. It shouldn't be made into something with the force of rule.  It should be, if you violate this behavior, you're being rude, but not disobeying a strict rule.  There shouldn’t be anything hard and with a strict sanction for violation.


MLS: Hopefully this is a set of best practices.  That's an intent.


MM: The objections I heard in the room were suggestions that this was a hard rule.  Everything anybody said about talking to lawyers - this is just a suggested best practice, nobody has to talk to lawyers.


MLS: I don't want YK and others to have to talk to lawyers.


AKI: Are we overthinking this? I was quite startled by everyone’s response to this. I think it was all reasonable if you perceived it as a new legal requirement; I had perceived it as “let’s talk about making this part of our norms”, not “let’s amend our bylaws and require attorneys for all proposals”. I don't think it needs to have teeth to be something we aim for.


MLS: If we make this a practice or expected norm, is someone asking “who are the other champions on this” out of line?


MM: I’m hoping it wouldn’t be.


MLS: MM and AKI, is this something we write down someplace, if so where, is it unspoken, how do we do this in such a way that it’s non-binding but it’s a normative practice?


MM: We have precedent: Alan's document on how to participate in a standards committee.  Every delegate of TC39 is supposed to be exposed to it. It doesn’t have any teeth - it’s not rules, but it’s tremendously useful as a source of information. People coordinate on it and it's helped.  Just follow the same precedent as Alan and put it in the same place.


JHD: I think the intention is that [it] is supposed to codify our consensus and give us some behavioral norms, like the CoC.


MLS: Code of Conduct is too strong, I think.


JHD: I didn't mean to suggest putting this in the Code of Conduct; I'm just using that as an example of precedent.


MM: I’m definitely thinking of something that is more informal than the CoC or the rules of stage advancement.


MLS: I might contact Alan to ask if we can include this in his existing document.


LEO: I believe it should be everyone's goals here to improve transparency.  We can always find improvements.  For this reason I’m +1 to work through what is being discussed here. I think we should refine what we want for this transparency. There’s an issue, and I think it’s valid, which is that there are some companies here who feel like they might be affected. We are not trying to jeopardize business models for anyone.  Our goal is to increase transparency.  I'd like to have more discussions about this.  For example, I really like the idea of following the document from Allen, or maybe we can even consider a technical report at ECMA with best practice.  Also, if we have anything that we want to discuss that might be a GA thing, TC39 should make a request for the GA.  We shouldn't just go one way here and have GA decide for us in the future.  We should be more proactive with GA.


MLS: If we make this like Alan's doc, do we think this alleviates the need of going to GA?  That it's just a normative practice; there's nothing binding here, and we just want everyone to participate with the same level of transparency?  WH, do you think we still need to go to GA?


WH: I cannot answer that question. I’ll have to go and have a long conversation with our lawyers about this. What made me very uncomfortable was that you and several others stated there’s no need to involve lawyers, we’ll just make it a normative policy without enforcement; I don’t want to play lawyer here but I will ask them and I suspect they’ll have something to say about this.


MBS: I’m doing work on ExeCom. I know WH has been doing work on the GA, so I think my conservative approach would be to float this as an FYI and make sure there are no concerns. For example with the CoC, there were no problems and then Ecma decided to adopt this document for other TCs. So going to the GA could be a good thing.


DE: Maybe "venue-shopping" is a bad term.  But for example, for JSON Modules, there are different ways we could layer things.  I think it makes sense to do what Apple said and make sure that if there's something going on in a different standards venue that relates to TC39, then talk about it here.  That should lead to a better technical result and inclusion, even if things are done outside of TC39.  I think we should get feedback from stakeholders.  There's also a tendency for people in other standards venues appearing to represent TC39, which is not my intention, so there's conscious work we need to put in, in terms of interacting between different standards bodies and making sure we're really deliberate about these tricky things.  I don't know exactly how to formalize this proposal, but it's in a good spirit.


DE: We could put this in the How We Work repository, which is where we put a lot of the good practices.  It's lighter-weight than putting something in the process document.


MF: This is a thing that I believe Andrew (API) recommended in IRC earlier. For the case of contractor relationships between two members, if we change the responsible party for that disclosure to the one paying the other party, then I certainly would prefer that. I think that would make it a little less risky to enact something like this for the members who are in the services industry. I recommend the onus be on them.


GFC: Does the word “norm” have a well defined meaning I’m missing? Are we talking about the same type of thing as “please help taking notes”, “please share meeting burdens”, “please don’t block stage 1 for minor things”?


MLS: Yeah


GFC: In that case, can it just be, we put it in the process document or proposal template?  So for example, you have a champion field, author field, and new collaborator field.  And then you have to just keep it all up-to-date.  Is that sufficient


MLS: That’s sufficient, but when you create a new proposal, I don’t think we even have all the fields you’re describing.


GFC: I think we should add these fields going forward.  If this is just affecting the lifecycle of a proposal, it seems like wherever we talk about proposals, either the template or the process document, seems like a good place.


MLS: Do you do it when you first introduce it in the repository? Do you do it every time you present? I don’t know. But a non-binding disclosure - if we create a template and put it there, I think that’s fine.


MLS: In general I want to know, is this supported by the committee? I understand WH thinks we have to talk to lawyers and the GA, but is it agreed that we should have a normative practice to disclose these things?


[no objections]


MLS: Ok, I need to work with the chairs to figure out how to do this.

BT: It sounds like we’re okay with adding to Alan’s document. We’re not okay with the process document or CoC the code of conduct as a good place for this. We should give a heads up to ???.


WH: I’m not willing to go on the record and say I’m okay with those things.


BT: Ok so you’re thumbs down on-


WH: I’m not thumbs anything until I talk to our lawyers.


GFC: I guess with the thing I was talking about, having a “please list the champions as accurately as you can”, sometimes you’re not able due to legal reasons, and I think that’s okay. As long as that’s accepted and we don’t think that’s bad faith, then it seems like the same category of things as “please host meetings if you are able”.


BT: I thought that’s what we were discussing but it sounds like WH has reservations about even that level of advice, is that accurate?


WH: Yeah, I think it’s premature to try to reach consensus here.


BT: I think we need to work on where we want to put this wording and what it will be, and in parallel WH should have those conversations with his lawyers.


WH: Sure, but I suspect they will want to see the details.

BT: Okay, maybe let’s have this resolved by the next few weeks.


MLS: MF, does this address the concerns you have earlier?


MF: Yes, fine so far, would also like to see the details.


MLS: YK isn’t in the room but I’d also like to hear from him.


## Unifying private field errors


(Shu-yu Guo (SYG))


- [proposal](https://github.com/tc39/proposal-class-fields)
- [slides](https://docs.google.com/presentation/d/1XCme7X5Zgu82QlafE6jT0WOxpsUryndFCVwvexMwNWY/edit)
- [issue](https://github.com/tc39/proposal-class-fields/issues/263)


SYG: (presenting slides)


SYG: This is an implementation driven design. Private fields have TDZ, so it is an error to reference them lexically too soon (and a separate error to reference them at construction before they are installed on a new object). Think of #-names as being hoisted: there is no tdz for #-names but there is still a lexical scope. Goal is to reduce the cognitive overhead even if they are undistinguishable runtime error cases. When you access a #name in scope


YK: This is talking about methods only or also fields?


SYG: also fields


YK: What about forward references?

```
#f = #g;
#g = something;
```

SYG: If it’s installed, if it is on this, it would work, if not on this it wouldn’t


KG: If I have an outer class that has a #f and an inner class that also has a #f, let’s say the inner class here on the screen on the left, is the current behavior that you get a ReferenceError, or that it looks up (...)?


SYG: the current behavior is that it gets the reference here. It’s not going to look up the outer class behavior


KG: I agree that’s the right behavior, but that implies that the thing is already hoisted, it’s just in TDZ.


SYG: The contention is TDZ here.


KG: Agreed, in favor of this change.


JCG: To answer the question from Yehuda, this only happens in computed property keys.


YK: If you say #f = #g; #g = something; then what happens?


SYG: (...)


YK: So you get a TDZ.


SYG: At that point you’re out of TDZ but the private fields haven’t been installed on the receiver, so you get a TypeError about trying to access a private name on an object that doesn’t have it.


YK: OK


WH: I’m very uncomfortable with trying to use two very obscure examples to set a policy. We should instead look at the places where the errors are generated and see what the natural errors would be. From this slide deck and proposal I cannot tell if this is a good change or a bad change or what. So you have not presented sufficient information for me to give consensus on this.


SYG: I’m kind of confused on that because I’m not asking for us to change the meaning of TypeError or RuntimeError. We are saying the meaning of those errors stay the same but we are removing semantics that generate that error.


DE: I think this was a drafting issue... I wasn’t thinking how these are different error types it doesn’t make logical sense, it makes sense for these to be hoisted, they’re just like methods, they’re all defined at once. It makes sense for the private names to have the name assigned before any of this code executes. There’s only 1 value they ever have and its across the execution of the class. The way I like to describe private is you can only access the #private names inside the braces {}. So it makes sense that the private names are described at the beginning of those braces, so that it's available inside that whole block.W


WH: There was no PR attached to this proposal, it just linked to an issue.


SYG: There is - there’s this PR linked to from the slides, and if you go to this issue when GH does it’s linking thing, it shows up.


WH: So is this the only PR?


SYG: That’s correct.


WH: It would’ve been much better to explain this. The PR is titled “Define private names at the beginning of the class” - it didn’t seem like it had anything to do with what you were talking about. So I will look at it but right now but I would have liked for the proposal to describe what was proposed ahead of the meeting.


LEO: I think it’s respectful to take a closer look at the issues and I think this is a question that could’ve been addressed before this meeting. Saying it’s random is very harsh.


WH: I did look at the issue; neither the slides nor the issue clearly described what was the actual proposal.


JRL: (slide 2) This should both be an error, bc you try to do #foo on  a class.


#foo is a reference error because there’s no class to define a #foo. What you’ve done here is try to equate the #f with the #f that will be installed in the class later on. You can’t have an instance of the class before you have a class


DE: Just to clarify it is a TypeError not a ReferenceError to get  (....)


JRL: If you have a script and inside the script you say this.#f, that’s a reference error. That’s what you’ve done here because (...)


DE: That’s a syntax error. What we’ve done here is that the private names are a (...) valid inside the class. There are ways you can use the private name - it’s weird - but you’d have a private (...) name that escapes, and then access this on an instance of the class that’s created later. I think scopes are simpler if we just say there’s one scope that covers the class body than if we had multiple scopes to cover all the methods.


JRL: So I confused reference and syntax error.


DE: We would have to do something much more complicated to make these syntax errors.


JRL: If you look at the key though, Why are we trying to evaluate with a #foo inside the {}s? (...)


SYG: Lexical scoping - the mental model as I understand - is textual dominance. It’s that the #f is inside these curly braces. It’s not about entering blocks, it’s about the source text and the source text alone. That’s how lexical binding work


JRL: I don’t feel like I’m explaining myself well then.


SYG: What you’re saying is that the timing of the evaluation of this cannot come at a time after (any/all?) of C’s private names have been instantiated-


JRL: Yes that is what I mean to say.


SYG: my disagreement with that is how I understand how lex scoping work: (missed). To break that property would be more confusing


JRL: Alright.


YK: Increasingly convinced that I don’t care what this error is, and if the implementers are saying it would be easier with TypeError, then I’m fine with that


SYG: Thank you.


PST: Feedback from another implementation. I concur completely with you. It’s extra code, extra runtime, so I completely support.


BT: Any objections?


[No objections]


#### Conclusion/Resolution
- Hash names will be hoisted so they don’t have TDZ, and no reference errors.
