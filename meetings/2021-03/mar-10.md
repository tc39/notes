# 10 March, 2021 Meeting Notes

-----
Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Istvan Sebestyen     | IS             | Ecma International |
| Chengzhong Wu        | CZW            | Alibaba            |
| Yulia Startsev       | YSV            | Mozilla            |
| Markus Scherer       | MWS            | Google             |
| Bradford C Smith     | BSH            | Google             |
| Jordan Harband       | JHD            | Coinbase           |
| Waldemar Horwat      | WH             | Google             |
| Philip Chimento      | PFC            | Igalia             |
| Caio Lima            | CLA            | Igalia             |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Mark Miller          | MM             | Agoric             |
| Chip Morningstar     | CM             | Agoric             |
| Rick Button          | RBU            | Bloomberg          |
| Dave Poole           | DMP            | Apple              |
| Mathias Bynens       | MB             | Google             |
| Rob Palmer           | RPR            | Bloomberg          |
| Michael Saboff       | MLS            | Apple              |
| Philipp Dunkel       | PDL            | Bloomberg          |
| Brian Terlson        | BT             | Microsoft          |
| John Hax             | JHX            | 360                |
| Tab Atkins           | TAB            | Google             |
| Daniel Rosenwasser   | DRR            | Microsoft          |

## RegExp set notation: Update

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-regexp-set-notation)
- [slides](https://docs.google.com/presentation/d/1dWEHdfSsWPwoln5RD2dwnBomIIytX20UFzYSnmRsIPY/edit)

MB: Here's an update on the regular expression set notation from Marcus and myself. We will do the presentation together. I'll just start it off with the first two. This is just a status update. We're not asking for stage advancements. We're actually trying to solicit people's feedback on the GitHub issues and maybe there will be a bit of discussion today as well.

MB: So just to recap what this proposal is about. We want to add pattern syntax and semantics for set operations. So subtraction, intersection, and nested character classes. The things we've been discussing amongst ourselves so far are - there's a couple of items there. The first is the syntax marker. I'll go into individual slides for each of these in a second. So we'll talk about the syntax marker and we've been having lots of separate discussions that we're now starting to pull together into a complete proposal that covers the syntax marker, operator syntax, whether or not we use single or (?) situation for the operators and also operator precedence.

MB: So let's go over each of these and look at some examples. I'll start just the syntax marker. Last time what we discussed was that we were thinking of doing something along the lines of `\UnicodeSet{}` and then between the braces the new syntax would be available and it would only be available there. and that's how that's one way we could make this work backwards compatible with also only do this with in regular expressions with the Unicode flag enabled. But then we realized that `UnicodeSet` is a thing that already exists in ICU. It has very specific behavior that we probably don't want to directly duplicate here what we're talking about here might behave differently and it might be nice to update in the future so it might be confusing to use the same name or something that developers might already be familiar with for something that has different behaviors. maybe it's not the greatest thing. Maybe we instead go with something like UniSet or UClass for Unicode character class or UCC or you set or just backslash capital letter U, we can really pick any kind of name there. So I personally really like backslash UniSet, if people have opinions Ins or ideas that we haven't thought of three dimension at an issue that were too I do want to point out the second example here, which is something we've discussed for a bit we could if we really wanted to we could go with a set of braces we could use square brackets as well. I personally feel like the precedent in the language is to use backslash something braces. It is (?) Unicode code Point escapes. We do this for property escapes, using braces for this and so I personally don't consider that to be a very nice option, but it's something we talked about.

MB: and now I want to talk about what you see there on the right hand side, which is something new that work Mark Davis suggested other languages, other regular expression languages or flavors have: inline modifiers support, where you could say OK this part of the pattern is now case insensitive or (?) that the remainder of the pattern is that entirely case insensitive. So it's like an inline way of setting flags kind of in the pattern itself. And so we could choose to do it this way instead. So instead of using a backslash something braces construct, we could rely on an inline modifier like this to opt into the new syntax. This would also be backwards compatible because the parentheses question mark and then a single letter closing the parentheses, that currently throws an exception even in non Unicode mode. So this would also be entirely backwards compatible. It's just a different approach that we can talk about. And this so this discussion is happening in issue #2, if people have thoughts or opinions that aren't heard today, please chime in and to do in your discussion there.

MWS: We really want to invite people to give us feedback just on the square brackets that make it's just a prefix really that looks new rather than making the whole thing with the curly braces new, but we understand that all the other backslash something has curly braces to modify are attractive probably because it really just then looks like character classes and if you have two or more in the regular expression than you don't have to prefix each one with something special and make it longer that way. So we would really like some feedback on where to go with that. We could pretty much go anywhere.

MWS: Okay, and then we had a lot of discussions, we tried to sort of have discussion separately about what to do about various things with the syntax and they ended up being interconnected. That's why eventually we sort of ended up writing a sort of complete proposal that covers multiple issues. One of the things is whether to use single or double punctuation. And in general I want to say that a good number of regular expression engines and related implementation support one or more of these operators, but they do it very differently. So there is not really a standard to follow and so we tried to look at existing practice, but also tried to look at whether we think that the expressions are readable, understandable, make sense, are sort of visually distinct and stuff like that.

MWS: We think that, for the operator said we proposed, the intersection and subtraction operators, we think that it's best to have double punctuation. It's visually distinct. It also helps with the dashes because the dash already has two other meanings as a literal and as a range syntax character. And we also think that we want to keep the door open for future syntax extensions and we are proposing to reserve double punctuation from the ASCII range for that and if then future syntax uses one of those combinations then it would look odd if the initial batch of operators was using single symbols. So that's kind of the with one what that looks like all of the choices for the the prefix the compatibility marker, namely the backslash UniSet. So there is Issue Number Four.

MWS: We also have an issue 12 that has a link to a temporary document for now with the complete proposal. The next thing is the dashes as already mentioned, what's called the ASCII hyphen-minus. So we propose to use a double dash for the subtraction and continue, of course to use this double dash for a range they could just live next to each other, but we felt that it looks confusing to have a subtraction where the left or the right side or you can both sides have a range. Of course, a parser could tease that out, but for the developer, for a human, that would be confusing. So we are proposing to require brackets, which means making a nested class when you do something like the second example [on the slide], which would match all of the decimal digits in Unicode, which is I don't know 70 sets of ten decimal digits each or something except for the ones in the ASCII range, which is the simple range here. We have seen this kind of expression in real life code where people try to to look for non- ascii digits and then replace them with the ascii counter parts. Of course, we do want to support the literal dash as itself in some form and we're proposing to allow it only at the beginning of the end of a character class as a literal character. Otherwise we're proposing to require that it be escaped. So currently you could write a character class with `$--` and the first dash would be the range dash and the second dash would be the literal one in the new syntax the second one will require the <??> Escape so that it is a [transcription failure].

MWS: Next, we had a lot of discussion also about operator precedence just among five people was surprisingly contentious. What we ended up with is sort of the the Safest option I think so basically when you have multiple or operators just like an arithmetic you have to define in what order the operations get performed and it's again, there is no standard for how to do this, there appears to not even be a real standard for how to do this in math set notation or in Boolean algebra as far as I could find. So we basically punt on the issue and require brackets when different types of operators like union versus intersection versus subtraction get intermixed, so that you have to be explicit about the groupings and not have them implied by operator precedence. So it would be a syntax error if you have things that - basically in the second part of the slide here are missing the orange marked up Square brackets. That's issue #6 in the GitHub issue list. We have a number of options listed there; if you disagree with our choices, please chime in, but we think that this is a good starting point and if later people agreed on a hunch of what's a better practice than we could loosen that up even after the fact because this is sort of the strictest option.

MWS: Moving on, we had also a goal or task to talk about how the set operations would work with properties of strings. They do make sense for that too. For example, you might want to look at just the basic emoji that are also regular symbols. And in that case the symbol properties are only Single Character. So the intersection also ends up being only single characters. The second is a bit different. It's basically all of the Emoji recommended for General interchange. That's what the `RGI` stands for in the prefix of that property, except maybe you don't want the country flags. And so the second example would match most of the Emoji, but it wouldn't match the flag of France or the flag of German or whatever. Of course, you can't reasonably ask (?). We think it doesn't make sense to have a complement of a set that contains strings and we came up with a validation mechanism to check for that just based on metadata, which means that the validator for a regular expression already has to know how to basically have a dictionary of which names of properties are valid, so it would need one extra bit of information for each of the valid property names and that is whether the property can contain strings. So in the third example here, that would be a union of emoji keycap<??> sequence which has something like a dozen multi character strings, and the Union of that with a symbol and then putting a compliment on the whole thing and that would be a syntax error straight in the parsing. On the other hand if you intersect the two, and in this case it's kind of boring because the intersection is actually empty. But because we can prove from an intersection that if we intersect the property that can have strings with the properties that cannot have strings only have characters the whole result must at most contain single characters and so a complement is valid in this case. This is simply all Unicode code points.

MWS: on the proposal page on GitHub. We also have a nice example for making a regular expression that recognizes hashtags and the goal is to recognize not just ones that are sort syntactically valid but also ones that contain real characters including real and recommended emoji. And for that you have to have these properties basically because there are thousands of characters and strings that are RGI emoji and you would want to do a union with id_continue, which is the identifier character set, but then have exceptions specifically for hashtags. So you really would want to have properties and make additions and exceptions to that. And this is an example of what this would look like. In this case I chose to have two versions of the example where one is using the backslash in is set in the other one is using the modifier type syntax.

MWS: This slide is covered by issue 3. We have a couple more issues that are a little less interesting and this is the last slide also that we have but he has do you want to add something?

MB: Yeah at this point I think we can look at the queue if there is any feedback already. Yeah, let's start it there.

MM: Yeah, so I don't have any feedback on the specifics of this proposal, just in general on my reaction to adding more syntax to the regex syntax. The whole regex thing is sort of this little language within JavaScript that just keeps expanding and keeps getting more syntax over time and doesn't seem to be converging. And some of the things that I'm especially worried about with regard to the regex syntax just growing and increasing complexity over time is, it's already very difficult to tokenize, to lex, JavaScript. I would really like to see if there's some guidance on a way to tokenize a regex as a whole within the context of JavaScript that's stable such that all of these enhancements to the regex syntax don't need changes in the issue of how to tell when a regex as a whole is over so that you can tokenize regex with a stable pattern without having to constantly upgrade that. The other related issue is, there is this proposal which I put a link to in my question the regex make a template literal tag from Mike Samuel for doing safe interpolation. Each of these syntactic enhancements, many of them also create new syntactic contexts that - would they need to do context dependent escaping differently from existing syntactic contexts. So like I said, all of these are just issues in general with any proposal that adds more syntax to regex, but this is a fine one in which to raise those questions.

LEO: Mark, there are some constraints here but I just wanted to mention that I understand your concerns if we keep adding things to regular expressions, but at the same time as the proposal says there is some other precedent of these features in other regular expressions and mostly from Perl and python regular Expressions. I don't think this exists but like I could say I'm some sort of enthusiast of exploring regular expressions and what can be done there. It's kind of like yes, it's sometimes it looks wild but I like for regular Expressions to have features that are available in for python regular expressions for the closest that we can that can be achieved there. That should be achieved here as well. So I appreciate this proposal for doing That in not creating something that is entirely new in the regular expression work.

MM: So I appreciate that point especially the exploration but to get Beyond exploration into actually proposing something the complexity has to pay for itself and certainly being familiar to people using regular expressions elsewhere is a point in its favor. It does lower the cognitive complexity for people coming from those other languages, but there's just the the complexity of the processing of the thing itself as a syntactic element within the overall JavaScript and there's more and more people whose first encounter with regular Expressions as JavaScript. Anyway, the familiarity of this thing from other languages is not a complexity savings for them. It's still a complexity still the same. [transcription fail].

LEO: Just for clarification. [crosstalk] Do you mean implementation or usage?

MM: I was not making a hard distinction and I should. I'm concerned about both. I'm concerned that for tooling if the effort to tokenize JavaScript, if old tokenizer are now broken because there's new regex grammar the causes them to tokenize old regex incorrectly because that causes old tokenizing code to incorrectly tokenize new regex that breaks a lot of old tooling, and there's the issue of the safe interpolators are already a really difficult piece of engineering: take at the regex make source code and the case has enumerated in the test there. But I'm also concerned about the complexity of the tooling and implementation, but I'm also concerned about the cognitive overhead. I appreciate biasing the introduction of the new syntax based on what we think is more intuitively readable. But it's still the case that the regular grammar before all of these additions was already overwhelming as a little language to learn the rules of and I'm really very suspicious of any addition to it that doesn't at least have a story about how this is finally going to converge so that we stop continuing to extend this grammar.

WH: I have a better answer for Mark. One of Mark's concerns is changes to lexing of regular expressions leading to various tokenization and security problems. I'm making sure lexing of regular expressions stays identical to what it is today. If I do my job right, your first concern is a non-issue.

MM: Excellent news! Thank you.

KG: Yes, just make I wanted to remind you that the things can be added to the regex grammar without making lexing JavaScript more complicated because there's two grammars for regular expressions. There's the one that is used when lexing JavaScript and then there is a second one that is used to refine the regular expressions. It's not necessarily the case that all changes can be made without changes to that first grammar, but certainly many changes can be made and I feel like that obviates much of your concern.

MM: Yes, and it sounds like together with Waldemar’s answer that this proposal in particular does not change the first grammar, which is great. That was my concern

WH: The thing that you need to make sure is that the two grammars are consistent; they weren't in the case of slashes inside character classes, and I raised that issue.

WH: Anyway, moving on. I don't like the exception of allowing literal `-` only at the beginning and end of a sequence, I think `-` should be escaped everywhere. It's just confusing to have a rule that a dash is allowed at the end of the character class but not if it's preceded by another dash. I’d prefer to say that a dash is a reserved character, if you want one then escape it with a backslash.

WH: Next point I have on the queue: Go back to the slide taking a difference, subtracting RGI emoji sequences from a larger set. Depending on what the larger set is, this will not do what you want, especially if you allow repetition by following the whole thing by a star. It will not match complete RGI emoji sequences, but it will match parts of them. So if you follow it by a star you can see the difference will contain bits of them and the star will reassemble complete ones.

MWS: I don't think that's true.

WH: So this pattern will not do what you want.

MWS: I can check that in a minute, but I don't believe that is true.

WH: As I said, you'd have to modify the example a little bit to pick a slightly different larger set. If you take a large set of characters which includes all possible emoji and subtract only the complete sequences then you'll end up with incomplete sequences in the set.

MWS: I'm sorry to jump in but that is not true. The symbols are Emoji components and Emoji components are not a subset of RGI Emoji.

MB: I think WH is talking about the general case, not this particular example per se.

WH: I'm talking about the general case. You have to subtract the RGI emoji sequence from something a bit different there. I'm also noting that emoji flag sequences are not self-synchronizing, which is that if you have two flags in a row then RGI emoji flag sequence might match their characters at offset zero and two, but it also might match a misaligned one at offset one, so you'll get a lot of nonsense behaviors. Like if you have two US flags in a row then you might also match the Soviet Union flag because the US flag repeated twice is encoded as emoji flag characters USUS, but the Soviet Union flag is SU so it will match it in the middle. It's a mess.

RPR: Okay, and also how this can be cleared our offline because we're at the end of the time box name. I think this Just a an update, right? There's no request for stage advancement.

MB: That's right. We're hoping to get feedback on the issues on GitHub people can post there. Yeah, let us know what you think. Please participate on GitHub and about these specific issues that came up, it would be great if we could maybe we can continue that on GitHub that sounds like that might be easier.

### Conclusion/Resolution

No changes, was not seeking any

## Error.prototype.cause for stage 3

Presenter: Chengzhong Wu

- [proposal](https://github.com/tc39/proposal-error-cause)
- [slides](https://docs.google.com/presentation/d/14jChOoeAuC2V7nVkfoRS_SqsOSgjazUi6uX_vO02yLk/edit#slide=id.gc6f90357f_0_0)

CZW: The motivation of the Proposal is to accumulate errors with additional contextual information. and the proposal enables the dev tools to do proper formatting. The spec text has been published online. And we are seeking for reviews.

CZW: Let's begin with a quick review of the changes from the stage 2. we have introduced the option bag, so error constructors accept an optional second parameter of options and entire way that the exceptions can construct can be overloaded to DOM exception with message and the options so that these errors can be adapted to the pattern of Error constructors in ecmascript. And in this way, we will no longer breaking the existing Firefox error constructor. Although it's not a part of the spec, we are not expecting to break anything in the web. So this is a part of the spec.

So the cause property will be extracted from the optional second parameter "options" and the operation will be performed based on the presence of the cause property on options. And this is an overview of possible implementation of the (?) and runtime formatters. Notice that the formatting and UI is not part of the spec. There's a playground for playing around with the new future. And besides questions, there are some of the discussions that with option back pattern the current behavior of this pack is ignoring unknown option keys, and there is no type checking on the cause property since any JavaScript value can be thrown legitimately. (?) and you can Implement implementations by the hoping facilitating the option bags to implementing their own practice, and there are no limitations in the spec on the extension of the of the option bags for now. And we are seeking for feedback on implementers extension if there are any concerns on these possible extensions.

CZW: so we have received positive feedback from chrome devtools team representatives in the last call and the spec has been reviewed by designated reviewers and spec editors and that's for us for all for requesting for stage 3. Are there questions?

KG: I support.

MM: Quick clarifying questions I want to verify the only option that's recognized in this proposal at this point is "cause".

CZW: Yes.

MM: Okay. I do not object to stage 3.

RPR: We've had some support and no objections.

YSV: I can just say as a reviewer. It looks good to me.

RPR: Excellent. Okay. Thank you. And on the queue Phillup has a plus one.

KM: Is there also a potential proposal for any kind of HTML error objects as well? Are we going to add this to those? Obviously that wouldn't happen here I'm just curious.

CZW: There's been discussion on the repo that DOM exception is able to adopt the pattern we introduced in the proposal.

KM: Gotcha. Does that mean there is a does that mean there is an existing PR or there that still has to happen?

CZW: There hasn't been any action towards the change, but since we reached stage 3 we can push forward the DOM exception with the HTML working group.

### Conclusion/Resolution

Stage 3

## Promise.anySettled

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/tc39/ecma262/pull/2226)
- [slides](https://docs.google.com/presentation/d/1oZbRMtnZW78wFUjSY8HXxgsEqeUiXC-2IB2NA_fMV9I/edit)

MB: Yeah, this is a PR which is kind of a mini proposal. It's something that we've already discussed in committee, but never explicitly asked for consensus on because it was mentioned in passing as part of the other promise proposals.

MB: Let's go into this PR which by the way was contributed by Sergei R, who also wrote the test 262 tests for this. Just to recap, there's four main combinators in the promise landscape. Back in es2015 when promises were introduced there were only two, those were promise.all and promise.race, and since then we've added .allSettled and .any as well. So now that we know the for like the full set of four combinators in hindsight, you could make the argument that promise.anySettled is actually a better name for promise.race or at least It's more coherent if you look at the four combinator's so by making this small change the API naming and the meaning of these static methods becomes more coherent and clear.

MB: So here's concretely what the proposal is about. We would like to introduce promise anySettled and then make the existing promise.race an alias for it, pointing to the exact same function object. This follows the precedent of trim left and trim right, where basically the old thing points through the new thing. There's still a minor web combat risk here because promise.race.name would become "anySettled" instead of "race". It does seem a little unlikely that any code relies on this but you know, it's the web you never really know until you try so there is a chance. If we were to hit any web compat issues then we do have a back-up plan if we do decide we want to make the change recommended here we can still proceed with this change. by making the name the string race, but I think we should try going with name anySettled first. So the property we’re trying to preserve here. Is that both of these should point do exactly the same function object. So that's they're strictly equal to each other and the only way to do that is by having, the same name as well.

MB: So yeah, this is the patch. It's a very small change in terms of spec, at least on GitHub. It's an easy change to make. So yeah, that's my presentation. I would like to get the committee's input on whether this is something that we want to do. It sounded like we wanted to do this back when the different combinators were being proposed and we look at this table together. But yeah now that there's an actual PR to do this. There's test262 tests for this. We have an opportunity to actually go ahead and try this. So the question is do we want to do this?

JHD: so the first item: there's a comment on the PR saying that the name “settled” implies that like it has an object with a value and a reason on it the same way that the allSettled does for example, what are your thoughts on that?

MB: Well, I don't think that is the case. settled refers to - so let's go to the PR. This is the discussion here. So what I wrote there is that I think what "settled" means in both the pre-existing allSettled and in this new proposal anySettled is just you know, the well-known definition for settled in the context of promises, which is, it refers to both the fulfilled and rejected state and that's it, that's what it refers to. I think the meaning that is being ascribed to settled here is making it mean more than it means. I think Domenic used to have this states and fates document. But yeah. This is not terminology that we're making up as part of this PR. It was the main motivation behind the name for all settled as well. Is this what settled means it is a very clear definition and these are this is a very old definition that predates es2015 as well. So we're just sticking to the existing promise terminology and applying it consistently here.

JRL: So I actually feel the same, that anySettled or any kind of "settled" promise helper should be something that always resolves and it resolves to a settlement object.

MB: interesting, so if I'm trying to read the room here, it sounds like we may not get consensus on this simple rename change just due to the fact that there's -

JHD: Just to clarify. I don't share this opinion, but Axel had commented that on the pull request and I thought it was worth discussing in plenary. I share the same situation as you have that "settled" talks about the state of the promise and not the resulting value. But I thought it was worth discussing.

KG: I do share this concern. I thought the comment on GitHub was pretty compelling, that the fact that allSettled gives this like settlement wrapper really to me implies that anySettled would as well, and I realize that allSettled needs a wrapper in a way that anySettled does not but like just the fact that allSettled has the wrapper and is named so similarly to anySettled really does imply to me that you would get a settlement object, not a promise.

BSH: I'm just also saying yes. I also think that there's a strong implication that return value would be the same. And it's not.

JHD: Around web compat, core-js confirmed and I know that none of the es-shims actually care about the name of `race`. So those libraries are often the only ones that check the name of built-in functions so that they do not check it.

JRL: About the rename and making anySettled be the standard name, which means Promise.race’s name would be anySettled. AMP definitely depends on the function name being race because we export it as part of an object and we use the function name for bad reasons. I don't agree that the web compat risk is minimal. I think there's actually a big risk with renaming functions to be something different.

MM: Okay, so I am against this on several grounds. First of all programs are read much more than they are written and we should always be first sensitive to the complexity imposed on readers and having an alias means that there's now two different names that readers can encounter for the same operation and it's not like the new one being better means we don't need to learn the old one it now means that you need to learn both if you don't read people's code. I chose the name race originally when this operation is original appeared in the E language I did it specifically because most promise operations, most asynchronous operations have a property called success confluence, which means that in the absence of thrown errors or rejected promises in case that all things succeed that most promise operations are insensitive to the order in which they succeed. There's this nice order insensitivity of most operations. Race specifically, its inherent in its nature that it's introducing a race condition that it violates success confluence and the name was chosen to emphasize that to readers. The name anySettled hides that. So on all of these grounds I think this just just does not pay for itself and makes things harder for code readers in an unnecessary way.

KG: What was that name of the property you were describing?

MM: “success confluence” meaning that [?]. Confluence is often used in programming language for the property that the outcome of a computation is insensitive to the order in which the internal operations happen. So and so what I mean by success confluence is that the most asynchronous operations, Promise.resolve versus then for is a sort of the first example, does not introduce an order dependence - that if the then happens after the promise is resolved or the then happens before the promise is resolved in either case the then gets triggered with the settlement of the promise. And that applies also to the original pair, promise all versus Promise race, all has success confluence and the purpose of race inherently relies on it not having success confluence.

JHD: Just to confirm Mark, you're saying that that confluence doesn't apply to `Promise.all` is because only the error is order dependent only in the non-success cases?

MM: No take the same success confirmed that promise that all does satisfy success can close because the success result is not order dependent even though the error result is order dependent.

JHD: I don't think the word race actually tells anyone that it's a hazard. Like I don't think people are inferring that from it. That doesn't invalidate your concern in any way, of course. I'm just saying that the name `race` doesn't necesarsily convey that to anyone.

MM: No, but I think that what it conveys clearly violates success confluence. So it's not that they necessarily understand that success confluence is a nice property. They should be thinking about explicitly generally these things are not articulate understandings, but the understanding conveyed by the name race, certainly suggest a semantics that one would not read success confluency into, whereas the name anySettled I think does not suggest that.

MB: I think it's clear there’s no consensus on this. Thanks everyone. I learned a new term today, "success Confluence". So I still call this a success. Thanks for all of your input.

### Conclusion/Resolution

- Does not advance.

## Array find from last

Presenter: Wenlu Wang (KWL)

- [proposal](https://github.com/tc39/proposal-array-find-from-last)
- [slides](https://drive.google.com/file/d/1rhER8TZ5GsHDzl8nLvo8qSIQCUXPw3AQ/view)

KWL: After the last meeting we drafted a specification and did some compatibility investigation and found no issue yet. So we try to push it into stage 2. We can look at a simple polyfill. It's basically the same as find and findIndex but in reversed order. And I did some shallow compatibility check with well-known libraries, web APIs and well-known repos on GitHub. seems nothing conflict with a proposal. And existing implementations such as lodash and ramda basically compatible with this proposal. they takes a callback with item, index arguments and return an item or its index.

KWL: We can see the specification of findLast which is basically the same as find. And this is the specification or findLastIndex, which is also the same as findIndex. And there are some minor changes that were not included in the slides and we can see them in the specification on GitHub. Thanks.

RPR: Queue is empty.

KWL: Stage 2?

KG: I actively support this.

DE: I support as well, it seems useful.

YSV: I can also give this a thumbs up.

JHD: I'm happy to be a reviewer.

YSV: I can review.

### Conclusion/Resolution

- Stage advancement to stage 2
- Reviewers: JHD, YSV, LEO

## ResizableArrayBuffer for Stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer)
- [slides](https://docs.google.com/presentation/d/1bpXftITzcZQpqBqtVGFiwgWL7WAqEo4ru4GwZaWYzcM/edit)

SYG: So this is the resizable array buffer and growable shared array buffer proposal. I would like to ask for stage 3 at the end of this presentation, but there are some changes and there and there might be concerns.

SYG: So the high level changes that have been made since I presented last time are on this slide. Number one is the simple rename the spec draft had the global shared write buffer resize method named resize I changed it to growable because unlike resizable array buffers the global shared array buffers cannot shrink because we don't know how to make concurrency work if the buffer can shrink so it can only grow to reflect that. I have renamed it to just grow.

SYG: Number two, last time I presented this we talked about two ideas to allow implementation defined rounding up of the max byteLength and the requested byteLength during resizes and during the initial construction and the decision has been - or the champion's preference rather, I should say, is to allow implementation defined rounding up of the max byte length, but not allow any rounding of the requested byte length. I've talked to a few folks about this and I think there's some discussion to be had there as well on how implementation-defined do we want this rounding of the max byteLength to be? number three, is that one of the earlier action items identified when I presented this was that delegates wanted to hear about some user and implementation guidance, I think along the same lines as what we did for shared array buffers and shared memory to, in a non normative way, try to cut down on the interoperability risk because there's so much - being a low-level proposal there's a lot of latitude here given to implementations which could make interoperability worse and to that end instead of normatively requiring that all implementations have the same behavior. We're going to provide some guidance or suggestions for what implementations ought to do and I'll highlight that in the presentation as well.

SYG: and finally one of the last pieces of semantics that was not nailed down but is now nailed down in a PR is how the memory ordering constraints should work for growth events of the global shared array buffer. That is nailed down now and it's largely aligned with what webassembly does because webassembly already has shared linear memory that can grow and they've already had to tackle this question and I'll present what that means for JavaScript.

SYG: so first up a recap for the round up of the max byte size. The idea is that when you make a new resizable array buffer or a global shared array buffer you provide the initial length and the maximum length that it can grow up to, this is to allow an implementation technique for you to reserve virtual memory ahead of time so the data pointer underneath doesn't move. The suggestion was brought up internally at V8 during prototyping that - for some of these buffers you probably want align on page boundary anyway, and if you are aligning on a page boundary, if the spec says that observably you must never allow resize of requested size greater than the provided max size if the underlying storage is in fact page aligned you now have to track 3 lengths: the actual size of the array, the user observable length, and the actual capacity that you reserve that's rounded up. Why not save on some implementation complexity and allow implementations to round the round the max size up and make that observable. I asked for feedback last time and I think this is a good change that doesn't really affect anything beyond interoperability risk. Implementations might certainly want to round in different ways and on top of that operating have different page sizes you might want to round to a different multiple, and then there's some feedback from Firefox that perhaps we want to hardcode a page size likewise and does if the implementation chooses to round up. We can discuss that later after the presentation. I'm certainly open to to hard-coding a page size. (?). So you might What is not allowed is to allowed make the same argument that well, maybe the implementation knows what's best when you requested resize maybe it wants to round up to a page multiple or something as well.

SYG: But this is too surprising and Bradley last time gave some very compelling examples that is captured on that GitHub thread on why this is a bad idea and would be a very bad surprise for programmers. So this is not going to be allowed. So that was the change about the rounding.

SYG: next up. I have written a draft of user guidance for how we expect users to use this successfully, to not run into interop issues. One bit of non-normative guidance would say to please test in your deployment environment; notably mobile differs very much from desktop. The number of bits that you have on your architecture matters very much because it's really it means a very big difference in your virtual address space a 32-bit max is, you know, 4GB, and 64 bit depending on how many bits your architecture uses for virtual memory could be least hundreds of terabytes to petabytes. But OSes may differ here as well. But in general we're going to say something like don't test on 64 bit and just assuming it will work on 32-bit. For the max size always use as small a max size as you can get away with preferably less than 1 Gigabyte even on 64-bit memories. And to specifically call out the fact that resizes can fail even if the requested size is less than the max. The fact that you successfully constructed a buffer with a max size does not guarantee that future resizes will always succeed and indeed if that is the behavior you're looking for you should just allocate the entire buffer up front. The implementation guidance is to call out that the specification that the design of this feature allows for implementation both as copying or reserving memory virtual memory upfront or as a combination of both. So by combination of both I mean that for example for very small buffers, maybe you don't want to round up to a page and reserve that page you just want to directly malloc to memory and then upon resizing you would copy it and for larger max sizes you might choose the reservation technique, but the API allows the virtual memory reservation technique to always be used in case the security property of having a non moving data pointer is important, for instance. The recommendation is that for multi-tenant hosts, by which I really just mean I think web browsers, but you can also imagine if you were hosting by web browsers and node where you are running possibly multiple applications at the same time, if you are a multi-tenanted host and you have a virtual memory subsystem it is recommended that those hosts implement as reserve instead of copy And on top of that it is recommended to limit the max size to be allowed to 1 to 1.5 gigabytes, even on 64 bit, to kind of cut down on the risk of virtual memory being exhausted. On hosts without virtual memory, so this will be systems like moddable and embedded systems, if they don't have virtual memory at all, they can just ignore the max but should still throw a range error if the max size can never be allocated. So that was for resizable array buffers, the non-shared buffers. For growable shared array buffers hosts that have virtual memory are recommended to implement the growing of the global shared buffers find reserving virtual memory. I think it is possible to copy, but that basically implies you have to stop the world of all your threads and to kind of Make them pause and make the copy then resume all the threads. This is extremely slow serialization and I cannot recommend anybody do that. So just don't do that. And hosts that again do not have virtual memory, but do have shared memory. I actually don't know what those systems are. But suppose you were such a system you can ignore the max always throw and grow and communicate this clearly to developers. So if people have feedback on that, please do so on the GitHub thread.

SYG: The final change is the nailing down of the memory ordering constraints for growing these growable shared array buffers. So the high level is basically this this is a pretty arcane corner of the spec so certainly understandable if you don't fully grok all the details here. The idea is that when you do a grow that does it sequentially consistent access on the byteLengths it when it mutates it at the sequentially consistent access explicit length accesses via things like the byteLength accessor and the length getter from typed arrays. Those accesses are also sequentially consistent on the byte length- sorry I should preface all of this by saying the byte length itself is now shared because of course, threads have access to the same shared array buffer and they can observe the byte length of the underlying block. So the byte length itself is a shared thing which is why the memory order here matters at all. The higher level methods like shared array buffer.prototype do slice and they are also sequentially consistent on the byte length and notably what are not sequentially consistent are the implicit bounds checks in any index accesses. So whether you're using computed properties like [foo] or you're using atomics dot store, all those accesses on the byte lengths are unordered. And this is important for two reasons. One it gives much more latitude to compilers to optimize those bounds checks if we said that all bounds checks were sequentially consistent access has the byte length. That means that possibly all indexed accesses synchronize with other indexed accesses on the byte length in other threads and this means things like we cannot hoist the bounds checks, which would be bad for performance. The second reason is that I don't think the JS side does this but some wasm implementations do tricks to do the bounds check where they don't actually do a comparison. They guard pages on either side of like a four gig cage and then they use signal handlers to detect when out of bounds access happens. That implementation technique would not be possible if we said that the byte length accesses had to be sequentially consistent. So for performance implementation reasons bounds check aren't ordered. and this aligns with webassembly and it gives compilers more leeway. It does have some surprises, the surprise being mainly that if you do not explicitly synchronize by reading the length, for example, if one thread grows, the other thread does not explicitly make sure that it sees the grown buffer by first observing that the byte length has grown. It is possible that the second thread would not see the grown buffer with just the indexed access. This is deemed acceptable because it's good practice for you to explicitly synchronize on the grow anyway, like you really should do that by explicitly reading the length or by having another explicit event, so you establish a happens-before order between your thread and the thread that grows. That's basically what we have nailed down for the memory of ordering constraints shared array buffers.

SYG: So finally there are some open questions that I would explicitly like to call out and state a preference for but I'm open to discussion. It has been brought up a few times that, why should we have the constructor resizable array buffer and growable shared array buffer instead of this namespaced kind of arraybuffer.resizable. The analogy has been made to proxy.revocable. My preference is to stay with the global names because array buffer is not a namespace. SharedArrayBuffer is already a thing as another global constructor. If we started with array buffer namespace, and we had a array buffer shared then of course makes sense to have array buffer dot resizable dot shared or something like that, but it would just be strange organization to me if we did arraybuffer dot resizable and shared array buffer dot growable because it didn't feel like a namespace thing to me. But that's my preference. Happy to hear others.

SYG: And there's an ongoing discussion with the webassembly folks to integrate this into the webassembly JS layer. Because they expose their linear memory currently by array buffers that are fixed length and one of the motivations for this proposal was to allow them to expose resizable and growable buffers for emscripten to generate better code, to make things basically easier for any kind of JS embedding of webassembly, and there is ongoing work to discuss how to do that there.

SYG: All right, so I would like to ask for stage 3, but I'm sure there are many discussion items and concerns. So let's get to the que.

JMJ: So we are wondering about the first comments implying we can only transfer memory up to the byte lengths and then the next sentence is saying any new memory is (?)out. So what is the new memory? You can only transfer by text.

SYG: someone else asked this I forget who but I think that the way I worded it was was I think confusing. So the intention of transfer is basically realloc: all the part that saying for the existing length, is transferred guarantees that anything up to the old length is the byte contents are the same. and if you transfer to a larger array the difference between the larger size and the old size, that's zeroed. Does that make sense?

JMJ: Yeah. Thank you.

JRL: So when you were explaining the round up for max byte length, it's a bit confusing to me why the Constructor is allowed to round up but the resize function is not allowed to round up.

SYG: Sorry. This was perhaps unclear from the slides. It's not a question of which method is allowed to resize, it's about which size is allowed to be resized. It's the only the max size is allowed to be resized and the max size is only a parameter to the constructor when you create the method. So in the second slide here, neither the 3000 in the Constructor, which is the initial size that's being requested, nor the resize requested size of 5000, neither of those are about to be resized.

JRL: So is this concerning max byte lengths at all? The previous slide is about max byte length. That's saying that you're allowed to round up. This slide is just using byte length. So maybe that's my confusion. We're not talking about max byte length here at all.

SYG: That's right. That's right. Max byte length allowed to be rounded while is length not allowed to do that with you. Okay. So what is Max byte length to do a proper clinging after this? resize here [transcription failure]

SYG: the max byte length never changes after you construct the buffer.

JHD: Yeah, so I was the one who asked about nesting it under ArrayBuffer. I agree that there would be a stronger case if it was `ArrayBuffer.Shared` in the first place and although I'm not suggesting that we could already do that. We could put SharedArrayBuffer in two places if we really wanted to have that be consistent. But general it's kind of it feels to me like an intuitive way to group related APIs. As for the namespace concern, “namespace” isn't a JavaScript concept, it's just a conceptual way you can use an object.

SYG: By "namespace": I mean like object.

JHD: Yeah, it's not like Math or Temporal, and that's a fair point. But like the built-in example, of course as you mentioned was Proxy`.revocable`, but I think there's a lot of userland APIs that do things like this, so it feels intuitive and idiomatic to me. Obviously I'm the one that suggested it so it's going to feel that way, I just kind of wanted to make sure we had some discussion queue time about it.

BFS: Sure. They're just a few other things. It's not just proxy. We've got things like Promise.resolve and promise dot reject. So we do have some stuff over there. I have no strong opinion on this. That's all right

SYG: if I can respond to the Proxy.revocable and and Promise.resolve thing, one difference here is that these are they have distinct prototypes with a different set of methods. whereas proxy dot revocable, because proxies are these exotic things to begin with like prototypes now they can trap so that question to that analogy kind falls down there. For Promise.resolve that just creates like a regular promise that happens to have a different state, right, it's not like you create a different thing.

BFS: Yes, but we can go into more details subclassing built-ins gets really weird here. I have no strong opinion here. I'm fine with globals. Just going to state I don't think it's an argument about namespaces.

PHE: Before jumping into the naming and global thing. I did want to say that I thought the resolution where we are now on the max bytelength behavior is really good. I'm happy with that where that landed. On the global on adding new global's. I think it's helpful maybe to recall how we even got separate constructors. I think there was agreement, if I recall Shu's original proposal, that in a perfect world we wouldn't even have new constructors, that we would just add resizability to array buffer for example. The primary motivation for having separate constructors was for web compatibility, because the web browsers didn't want to go through the potential security risks of making changes to the array buffer implementation if I remember that correctly. I mean that's understandable. There's a real cost for us in the moddable implementation, a small cost but a real cost, for adding new globals. Globals land in RAM for us, always, whereas properties can be stored in ROM. So we are we take an incremental RAM hit, small but existing, for every new global that gets added and these globals really almost don't need to exist except for effectively the convenience of browser implementations. So taking all that into account and given that you know, I think there's strong arguments on either side. I think it's appropriate that these Constructors - which are fairly obscure, fairly low level, as Shu acknowledged - really don't need to go into the global namespace. And there's some precedent I would note that read-only collections proposal that Mark Miller and I co-championed specifically has a point in that proposal that for example, we wouldn't introduce the FixedMap type as a new global, that constructor would be a property of the map object for the for the express reason of not wanting to overload the global. So I mean, I think there's a fair discussion to be had here, but I feel pretty strongly that we shouldn't add these to the global here.

SYG: Cool. Thanks for your feedback.

DE: Yeah, I don't have a strong position on whether these are separate globals or not. I definitely see that there's cost in multiple environments to adding globals but on this specific point that Peter made about this separate constructor really being motivated by the web specific security things. I really disagree with that analysis. I think it's it's meaningful and a good design to not be increasing the expressiveness of array buffer and shared array buffer with this proposal. There's this core predictability property that you have right now that the size doesn't change and it makes sense to explicitly opt into that when you want to have an unpredictable, or a less stable size. And it's not it's not Web specific, but it definitely the web has more precedent for adding globals in other environments to that is a thing that differs.

PHE: Sorry if I got that wrong, I was just stating my recollection of how we got there. If I got that wrong. I apologize. Your point is fair again. I was just trying to kind of recap what I recall the process we had at the time.

DE: Sorry for nitpicking. I guess I just want to say that I think that the design makes sense across environments.

SYG: I'm not going to die on the hill of where to put these.

[TCQ emoji time! - mostly indifferent, a few positive and a few negative]

SYG: OK, that's not enough signal to make a change. I don't really care which way we end up. I'll be happy to change the change to reusing the globals if there is a stronger signal.

YSV: Just give it a little bit of a signal from the from our side. We were discussing it a bit and we are not entirely convinced about reusing array buffer with the resizable static method. We prefer the global method right now.

SYG: Could you expand on some reasoning?

YSV: Not immediately, but how about we take this offline and discuss it.

SYG: Sounds good.

DE: [next queue item] Yeah, so I'm really happy about this proposal overall like all the changes that Shu presented today seem very important in well motivated, and I'm also happy that the discussion was brought to the webassembly CG about integration with the webassembly API. I think that discussion is quite important. I mean the motivating use cases for this proposal was presented initially were webassembly and web GPU. I'm not I'm not really following web GPU effort, but for webassembly, for this to actually be usable there has to be a change to the webassembly JS API that lets you get the resizable array buffer instead of a normal array buffer from the web assembly memory. It's not like you can pass in your own memory and to a resizable array buffer and have that just work. So I'm concerned because I haven't seen attention from multiple browsers. I've only seen comments from chrome on that thread and I really think that there's stuff to work out about this interaction. I think it'll work out well, but I'd really like to see more progress. I'd prefer that this be worked out more before stage 3, but I don't think I would sort of block by myself on that on that basis. But in general, there's some chance that will find that this model of having this resizable array buffer have a different identity from the other array buffer, but probably there are questions about whether memory could alias on that thread, probably wouldn't make it alias, so don't worry about that, but I'd like to see more progress there.

SYG: Okay. So one Norm for integration PRs for HTML is that HTML integration PRs kind of should be open around the stage 3, but we don't really some out and merge them until later. For the web assembly integration, what are you looking for for more progress?

DE: so I think if this were presented to the webassembly CG call, or even in the asynchronous GitHub thread and we got positive support for a particular version from people, which is often what we're looking for with the HTML integration where we do tend to get engagement from multiple browsers in the HTML PR before stage 3. It doesn't have to be completely agreeing to it, or doesn't have to be written, or maybe even the spec text written, but we should have a design worked out in some way. I'm pretty concerned about the state of webassembly and JS integration in general. It seems like people largely stay on one side or the other and I think there would be benefit if more of TC39 participated in the webassembly CG to develop more of this integration. So that's why I'm a little concerned about proposals that are mostly motivated by webassembly moving forward without that part being worked out.

SYG: that was part of my original motivation to be sure, though since then I think there's support from from folks that are interested in JS-only use cases as well. Though I take your point that the discussion with webassembly is in an earlier stage than perhaps it should be for stage 3, I think I missed adding it to the immediate upcoming CG meeting, but the second one in March I plan to present this to this CG at the second meeting in March. The issue is that should they ask for this to go through the normal phases - so the wasm CG has a phase model like our stage model, but with one more phase I forget what exactly they match up, but should they ask for more phases? I am pretty wary to kind of sequence us behind them.

DE: I don't know if we have to be sequenced behind them, but the discussion just really hasn't engaged in multiple browsers yet. I do think the web assembly phase process makes sense for webassembly jsapi changes. I mean we used it for the webassembly BigInt integration, notably. We didn't sequence bigint behind that, so I'm not claiming that everything has to be sequenced. But okay, but the discussion just hasn't hasn't gotten for you.

SYG: So specifically you would like other browsers to have input here. The other browsers were asking folks to have input here.

DE: Yeah.

YSV: Before I get to my point I want to super quickly talk about what Dan said. I think he brings up an important point and I forwarded this to our wasm folks so we'll hopefully have some feedback soon.

YSV: On the topic that I have on the queue I want to echo the request that I had made to Shu on Friday about the max byte lengths rounding to hard-coded to 64k if the implementation rounds. I think it's an important point for others. I want to say that this is a really important change for us. I didn't get to it before the issue was closed, but this would be a requirement for us. And if it was done then I think that we would be more comfortable with this moving forward.

SYG: Let's talk about that now. The pros of hard-coding a page size like wasm does are better interop, much more predictable, less fingerprinting. So you know that if rounds you're not going to get some arbitrary size, you're not going to get a variety of page sizes that you're going to get a single page size. The cons of hard-coding a page size is that it's one size doesn't necessarily fit all for best memory consumption, especially for these arbitrary use buffers is a little bit different from Wasm. Wasm linear memory is probably fine to always be aligned to such a large page in how wasm is designed to be used of, you know, running things that are compiled to it. Whereas I don't know it seems like buffers these buffers are more flexible. But what kind of binary data you want to put in them and maybe you don't always want to have such a big page size like 64k. That is pretty big, right, like most OS’s there are like 4K so some kind of wary to stipulate that the implementations don't make the choice that makes the most sense, don't get the leeway to choose a page size for them and the con of being able to choose your page size is that there's slightly more fingerprinting. I don't know how many bits there are there's more interop and there's more fingerprint, right? So, yeah, definitely a trade-off. so I would like to hear from the JSC folks certainly on how they feel about hard coding the page size.

KM: I mean, I don't have any particularly strong opinions one way or the other. I do agree that it's possible that taking a page size of 64k is potentially too large for this. I mean I could see picking up smaller page size, but then you have the problem that you're different than wasm could cause other weirdness. If you geta buffer from out of wasm somehow and all the sudden you it's like different rounding if you put it into Wasm or something, so that's a bit weird. I don't know what we would do in terms of in our implementation, so I'd have to think about this more I guess.

MLS: I also share the kind of concern KM shares. I think the 64k is too big, but you got to put some number. On our smaller devices like a watch, 64k is probably just to prohibitive to round up to, especially in the cases where you only want like 4K or whatever.

YSV: so echoing back on Keith's point, the suggestion for 64k was for wasm interop. That was our position. I think we can discuss this further and maybe come to an agreement on this size, but for us, it is important that the language is changed from being implementation defined to being something hard coded in the spec. Ideally would be something that also facilitates interop with wasm, but we can discuss that. For it to be fully implementation defined opens up some interop hazards that we would like to avoid.

SYG: Understood. Before we continue on the queue. I want to anticipate Phillip Dunkel's question here with this choosing a page size kind of being undecided needing more discussion and I want to run some more polls for where to put these Constructors and the work though the webassembly pushback that then gave and the and that I plan to talk to the webassembly CG before the next TC39 meeting. It is clear that there's more issues to work through here that I would not be asking for stage 3 at this meeting. I will do it again at the next meeting and I will work on these issues.

MM: Prefer a fixed standard page to page size.

YSV: And I guess the next topic is mine as well. So this isn't as much of an issue as having a fixed standard page size, but I want to raise another potential area of compatibility namely when implementations do the rounding. Right now it is also implementation defined, but this could be a place where differences between implementations could become clear. It's not a deal breaker for us, but I would like to hear from JSC what their thoughts are about this.

KM: Right now. We don't do rounding because everything is in wasm page sizes for growing. So in our shared array buffer implementation, we don't have a growable there. So, I don't know. That would probably be something I would have to think deep thoughts about.

SYG: I can add some more color to Yulia's concern. I think one of the things that V8 has talked about internally for implementation strategy. Is that for a small buffer as you might not want to round if you have something that's less than a page or less than n Pages. Maybe you want to just malloc that, and when you resize, you just copy instead of reserving the virtual memory size upfront. That kind of heuristic would become very user observable if that’s implementation defined. For example: when to round up. In that case you can check the max byte length, and if you didn't round, you know, you're in one mode and then if it did round up in another mode and that would have different performance characteristics. To push back on that, I guess is like that was already observable via when you OOM, kind of? And through timing, of course, if the implementation can do that here internally except that if the rounding is not observable the implementation just needs to keep three lengths instead of two.

KM: One option. I don't know if this is reasonable or not. So if we end up picking a fixed page size, we just say like you don't do rounding if it's less than a page and then once you go over a page you do rounding to page sizes. I don't know if that's the right trade-off.

SYG: Between the implementers here let's try to follow up between this meeting and next to come up with the right rounding strategy and page size strategy so that we can you know, maybe say try to make it as deterministic as possible, but still having the trade-offs that we can all live with.

YSV: Yeah, that's fine with me. That sounds good. I was going to suggest that we do a conversation between us as well.

SYG: And I'd certainly want Moddable's input as well.

KM: I'm happy to review the spec for future stages as well.

WH: I'm really impressed by all the changes Shu has made here.

### Conclusion/Resolution

- not stage 3 yet
- to resolve:
  - page size rounding thing
  - wasm
  - where to put constructors

## Incubation call chartering

Presenter: Shu-yu Guo (SYG)

SYG: Due to the new tick-tock cadence we only had time to run to incubator calls since the last meeting which were error cause and module blocks, which leaves one overflow from last Charter for lazy Imports. I assume Yulia you would still like to have that call.

YSV: Yes very much.

SYG: great. So that is so we'll start with one. And then the three proposals I have identified at this meeting that would benefit from an incubation call is, in chronological order, one: collection normalization. There was considerable contention over the name and the mental model of keys versus values. I think this would be good to talk at length, but I also kind of think it would not be good to talk at length because it seems like you all already talked a lot at length and there are just some deep disagreements about the name. So Bradley, are you interested in having an incubator call for this? And do you think you can scope it in such a way that the discussion and the request for feedback would be productive.

BFS: I'm fine with any incubator call that is desired of me. Yes.

SYG: And the other stakeholders here like JHD and Waldemar you up for having a call on this. [silence] I assume yes then.

SYG: The second one was the regex set notation. I know that during the presentation Matthias repeatedly asked for folks to give feedback on the GitHub. It might be good to also have high bandwidth one hour call to directly gather feedback from delegates that way. Is Mattias still on the call?

RPR: I think he was schedule locked so maybe not.

SYG: I see. Okay, since the champion is not here I will ask him offline to see if he is interested. So tentatively regex set notation is as well.

SYG: And then the third one is my own proposal for the resizable array buffer stuff. namely to discuss where to put the constructors and the page size and rounding issue we just talked about. Since we're going to have a call anyway we might as well reuse the frameworks we already have.

SYG: So those are the three I would like to have included in this next Charger. Are there any others that people would like to discuss?

MF: Before we move on to the others, on the collection normalization topic I think that we might run into the same like functionality extension topic that we were talking about with temporal and that might actually be a large blocker to making progress on that so maybe we shouldn't have an incubator on that until we resolve that issue a bit more.

SYG: I see, that's a fair push back, especially since that extension topic I feel like we have already broached in plenary and we need to have a full plenary discussion rather than an incubation call for that.

MF: Yeah, it's not that we couldn't make any progress on this proposal. I just don't think that we could make progress to the point where that proposal could advance without this other big topic being addressed.

SYG: Fair enough. Yeah, and in the interest of time given that we have less time now between meetings and the current charter with that would have been four proposals removing that would mean we have three which gives a better chance of getting through it all. So, okay. So with that feedback, I propose the next charter to be lazy imports. I will contact Matias to see if he's up for doing regex set notation. And then the resizable and growable shared array buffer stuff.

DE: I don't know if we want to consider these incubator calls or not, but I might organize it sort of kickoff call for both module fragments and pipeline. I think all the things about the incubator process would be good, in terms of having a doodle and notes and things like that. I don't want to establish a regular call at this point. So would we consider this part of the incubator chartering or a separate thing?

SYG: I would prefer that if for those proposals where you want to have a call, but you don't want to establish a regular call, that you do use the incubator call framework. The whole point is to get to have a regular time set aside for those who don't want a regular call for just themselves. They don't want the extra overhead of setting that up.

DE: Yeah, great. Great. I'm happy to do that and I could be the one to make the doodles for those so that it's not all on Shu if that is so that helps.

SYG: So we have five then, we have lazy Imports, possibly regex set notation, resizable write buffer, module fragments, and pipeline. It's unlikely that we'll get through that entire time that entire charter before the next meeting. So we're probably going to try to shoot for three or four. Thank you.

### Conclusion/Resolution

chartered:

- lazy imports
- regex set notation, maybe
- resizable / growable shared array buffer
- module fragments
- pipeline

## Intl.Segmenter for Stage 4

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-intl-segmenter)
- [slides](https://docs.google.com/presentation/d/1tkyQVE3o5qpbbJ39RidyZiy-r179RXraOKDeWLB5RB8)

RGN: Okay, so I'm Richard Gibson. You might remember me from such hits as segment for two, segmenter for stage three, back to stage two, segments for stage 3 and segmenter to stage 3 again. We are here now with what was going to be a segment for stage 4 but is actually an update for reasons that I will get into later.

RGN: So first, I'll go into my normal spiel about what it is and why it matters. We've got this concept of string at a high level and at a low level it's a sequence at the lowest level. We're talking about code units and we don't actually do UTF-16. Although we're close. ECMAScript has what's sometimes been called WTF-16 because it can be potentially ill-formed where you have unpaired surrogates. Those compose into code points which are the big Unicode 21 bit values representing distinct representable entities. Visually, from a human perspective, those compose graphemes and graphene clusters, which is what humans perceive as the characters. This is where composition matters so you can have things like accents and other diacritical marks and also the combining sequences that we talked about before where the regional indicators two of them form a single grapheme cluster that is a flag representing a country. And those string into higher-level concepts as well. You can have words and separations of words and then ultimately you have sentences as a really high level textual concept.

RGN: So segmenter deals with the bottom three of those, the ones that are abstracted beyond the raw bits that make up a string and into the pieces that humans care about. So in ecmascript, we already have ways to deal with code units and code points, but we don't have graphemes and words and sentences and that’s Segmenter and because it is locale dependent we're dealing with it in Intl rather than in 262. So there's a Unicode Annex that describes the concepts and the general approaches for how it all works. Segmenter adopts that and comes up with JavaScript-compatible interface for how it's all represented so you can get a segmenter based on a locale and a granularity of grapheme, word or sentence and then segment a string to get an iterable that exposes the different pieces of it subject to that locale and that granularity.

RGN: Since last time we met there have been some minor revisions throughout Intl itself where we change the way that options processing would work and decided that the new way should apply to everything going forward including Segmenter going forward, so where were previously the old API is would coerce into an object the new ones including segmenter now require that options either be undefined or already an object so we don't get weird prototype pollution kind of behaviors.

RGN: We also have a few open issues which are notionally open but not really from my perspective. One of them is the representation of the iterable reuse It was proposed that it aligned with Number.range, but that one is itself less mature and so it doesn't seem to be worth disrupting the already implemented status of segmenter. The others were coming from the community where someone is observing weirdness around - [audio issues] - the other pair of issues are around how do you do with custom dictionaries if you're you're not happy with what the implementation has shipped and and with this one also, we're not intending to act on it, at least not right now; any issue that someone has is basically going to be - there's no way to deal with and we don't want to provide hooks inside of Segmenter you can just apply your own strategy for dealing with it, you know ship whatever you were going to ship. The algorithms in segmenter wouldn't help you anyway, if you're not happy with the implementation of the data.

RGN: So that brings us around to the stage advancement topic. We've had 262 tests for a while. They are passing by unflagged implementations in V8 and JavaScriptCore. We've gotten feedback from them, and we've got the conforming spec text with all the conventions of 402 ready to go in a pull request. Last I checked we didn't have complete sign off because I was a little bit late in putting up that but I don't think it's controversial; it matches what's been in the Segmenter proposal for a while.

RGN: What we do have is some feedback from Mozilla. Unlike V8 and JavaScriptcore they're They're planning use ICU4X as the backing implementation and that requires a bit more development work because ICU4X is itself still under a bit of development. So it's a solid plan. It's going to provide, we think, really good validation of ICU4X. So people can step into a whole bunch of different languages and the new ways to provide internationalization and localization, but it takes more time. They have not shipped it yet. They're still working on the internal overhaul to make it happen and have specifically requested that because they're using Segmenter ras something of a test bed that we hold off on actually incorporating it into 402 while they do that and see if there's any relevant feedback that comes from it. Since we have already missed the 2021 cutoff date, there's not much difference from our perspective or from theirs if it lands today versus landing later this year. And it makes sense to me that we would have the extra time to validate the implementation and the use of ICU4X and providing it. And for that reason I am withdrawing the request for stage advancement, but keeping everyone in the loop and still wanting to solicit whatever feedback is available in the interim. So with that we're pretty much ready to go.

JHX: I have a small question about the API. Is there any way to get segments using extended grapheme clusters? It seems it is now forces you to give the locale.

RGN: Yes, this is a good question. All segmentation is locale dependent because the non-locale dependent segmentation is already provided by the language. So where we see in this API `{granularity: grapheme}`, conceptually, that actually is referring to extended grapheme cluster, but we are not prescriptive about the rules that an implementation must use. So it is entirely valid for you to put in a particular locale in one implementation, segment by grapheme, and get the breaks identified at different locations in the string than another independent implementation would provide. There's always room for innovation here. UAX 29 provides default guidance, which is functionally like a fall back on how segmentation should go and it'll give reasonably good results across a reasonably wide variety of locales, but certainly there are locale-sensitive tailorings that can and should be applied by implementations. So what Segmenter defines is the interface by which that is accessed but it does not define how it will actually behave when presented with any given piece of data and combination of options.

JHX: Thank you.

YSV: So I just wanted to say thank you to Richard and everyone who's worked on this. We're really excited about seeing this go to Stage 4 later this year. And also thank you much for incorporating a lot of our constraints while working on this proposal. We're looking forward to giving you feedback as soon as we can. It's been a journey.

RGN: Thank you, too. I picked this one up mid-stream as I think most of the people know and really I've appreciated working with the implementers on it. And also carrying on the torch of the original authors.

AKI: Queue is empty.

RGN: Well, thanks everyone and look forward to a follow up later this year when we actually proposed it for real.

AKI: Well thank you so much for an update.

### Conclusion/Resolution

was not seeking advancement, awaiting future feedback from Mozilla re: implementing this using ICU4X

## Top-level await

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-top-level-await/pull/159)
- [slides](https://docs.google.com/presentation/d/1G3CM8SopKqQeME1uN8GHLVsE9QbUUq3fwa6n13LHYl0/edit#slide=id.gc6a96db844_0_8)

GB: Okay, so just to follow up on yesterday and to try and get into the specifics of the examples to hopefully help people make informed decisions based on understanding here. Again this was brought up by Tobias from webpack, this case, and he actually merged the behavior into webpack for his implementation of couple of (?) already. And to just describe the case again, you've got one async module at the very bottom and then you've got a and b the both depend on it. The ordering is from left to right so index Imports a b and x which means that it should execute the a first and then b and then x in a normal sync graph. Async graphs are different in that they behave like promise dot all. But this is why this is about the sync ordering above an async part of the graph. Does that make sense? And we've got two orderings written over this graph. The one is the execution ordering based on post order, which is the current specification and that's the box on the left you execute a sync first followed by async at the bottom executes followed by a and then once a is cmpleted we execute be and only when b has completed do we execute [missed]. And then finally index so that's the post ordering of the graph and under the current spec them-- What we're doing is we're executing async. We're going up through the parents of async and we see the first parent is A and we're saying, okay, let's execute A and then we're going up through the parents of A and we're looking at index and then index so we look at X and we see X is ready to execute and so and so we execute X, so it's a kind of a callback ordering that applies to these async completions.

GB: To just illustrate the algorithm again, we start on the completion of async at the bottom. It checks its parents. The first parent is A. It checks if A is ready for execution, it checks index, it then checks X and then it goes ahead and executes X. And that's the kind of recursive algorithm that's running up the tree and that's what gets us the TLA execution order, which is perhaps unintuitive. It's certainly not the post execution order. And then to explain the PR which is fixing this behavior, which is on the next slide, basically we run the same kind of recursive algorithm, but instead we just gather an execution list over the modules that are synchronously ready to execute on completion of an async module. So we do the same thing. When async finishes completing the parents of a long it took we then run this this gather a single parent completion method on the parents. So first on A then we look up at its current, index isn't ready to execute, X is ready to go. So we add it to the list and I've got an exec list of X. then fall back to the algorithm rerun the same check, again, and is index ready at that point. Then we add B, and then we've got indexed and so exact list is ax be indexed and And then finally we sort that exec list into the post ordering and then execute it. And these are just the modules that were ready to execute so we determined already succeeded. So that's the gist of the algorithms. Hopefully that wasn't too much to digest in a short space of time, but hopefully that kind of illustrates it more visually.Any questions are very welcome.

MM: So the different orders, are they differently hard to shim. I know that none of the remaining candidate orders can be shimmed within easy local rewrite. So get so given that that's off the table. What's the difference in difficulty to difficulty to shim the others?

GB: Well, I guess the one data point we do have there is that webpack has shimmed that and shipped that. system js, I mean I haven't worked on an implementation yet personally, but I think with top-level awaits you do generally end up wrapping modules anyway, and then triggering their executions and having some kind of management of that. So I think for the most part It shouldn't affect that too much, but I'm not a hundred percent sure.

MM: Okay, thanks and the webpack data point is definitely significant.

DE: So the broader context of how this was discovered might also be interesting. There was a top-level await fuzzer that the the author of es-build wrote and that was used to compare several different limitations and uncover this difference versus the V8 behavior. So I think this is excellent feedback to be getting this excellent kind of analysis and I hope we can get this kind of engagement in future proposals. Also, I'm very grateful for the help and this presentation was excellent. Thank you for explaining so clearly this issue. I've reviewed the specification text again now and was able to understand it and I support consensus on this change.

JHD: Yeah, so first of all, I trust the judgment of all of the folks who provided input here. So if everyone in that list says it’s a good change then let's do it! But for my understanding, one of my biggest concerns about top level await as it progressed through the stages was indeed the ordering changes - that if I use top level await in a module in the graph then other modules will then execute in a different order. Is that - does this change you're talking about make that no longer the case? That they're now in the same order whether I have an `await` or not?

GB: So that's I think one of the invariants that we've been trying to make sure is maintained in that sets of the postorder the over will post order execution is inspected by async nodes as much as possible. It's only between async modules that you get this sort of promises parallel behavior of between async siblings. So if you have a - this case is that if you have a graph and you add an async module beneath it, that it doesn't change the ordering above, but conversely if you have an async module and you're importing a synchronous module the rough ordering will be the same ordering under the current spec. So the on both sides I should remain you're saying without that.

YSV: That's not that's only true with this change. This should be true without it as well.

DE: So part to summarize. I think that this change improves the way to the amount that top level await satisfies this property that JHD has talked about that many others have shared interest in. Previously It was true for sync subgraphs, but not true for async sort of super graphs over an async module. Now, it's true for both.

YSV: Yeah, that's a good summary of the change. Thank you.

SYG: Yeah, so wait. So how do I implement this? I basically have a serial instead of a boolean in the async evaluating slot?

YSV: It can still be a boolean, at least how I implemented it in the sketch. It requires metadata about the post order. But, the sketch implementation was just for verification, an we won’t use that. You can implement it in different ways. It's up to the implementations. The spec text is intentionally vague. That was a feedback that Jason Orendorf had while spec text was being developed.

SYG: For the sorting thing, how is post order established?

YSV: So my sketch implementation does it with a global variable. I haven't thought too much about how we're going to treat this, I see it as, essentially we're introducing a concept of a “touched” module which we didn't didn't have before, and we're using that to order the modules. Yeah, thinking aloud now, you could implement it with a serial and falsy values encoded in the serial.

SYG: I guess that's fine. I'm not too concerned if it's implementable with a serial. It does make the module instance a little bigger, but yeah, I think this is fine. I'm just bringing this up in that it's not completely clear to me that this is like a free fix.

YSV: It's not.

KM: Yeah, if anything this seems harder than the other one, but it's not dramatically, just slightly.

YSV: Yeah, and it is like it depending on how you implemented it, it may indeed result in a larger memory footprint for modules, which may become an issue if modules become really popular on the web. So that might be something that we want to think about and be careful about

SYG: yeah in the same vein as like if we want a future where we were we are scaling up to on the order of tens of thousands of modules, adding a sorting step isn't great for loading performance.

YSV: That's true.

KM: I don't think the memory issue is too much of a concern because you only need this while you're actually executing the module. So like once you get your steady state of like resolved for app people kind of throw all that. You don't need it anymore.

SYG: I agree, I don't think the memory issue is as an issue depending on how you sort it.

YSV: yeah, I think I think the biggest impact of this is going to be what happens to initialization if we have a really large module graph, how much does it cost to do the initialization step if we also have to sort like thousand, ten thousand modules? The space thing probably isn't going to be too much of an issue.

KM: My guess it's probably that it will be dwarfed by the actual execution of the module - like initializing the module to get ready to run, sorting a thousand things with almost any sorting algorithm is probably have a lot faster than that.

YSV: So that's that that's interesting because I've been looking into this for lazy module initialization and in that investigation, we found that the initialization step, at least on modern machines such as MacBook Pros, is about half the time. We spend about half our time in the initialization step. Bloating that would cut into the savings that we might get from lazy execution.

KM: I mean for us we were probably a lot of time in linking because linking it's like when we do our parsing stuff, right, so that's gonna be really expensive. But that seems like it's unrelated to - I'm surprised the exactly the execution of, like iterating the graph dominating anything. That would be somewhat surprising to me. But this is a performance question, the devil's in the details. But yeah, I don't think I don't think it's like the deciding factor.

YSV: I think it's just like what we're weighing here is this is a subtle potential bug for users and it is a slightly more complicated implementation for applications and a couple of implementations are already shipping. It's unknown about how this will behave. You have a really large module graph, but that may not be so much of an issue. Maybe we can think of other ways around that. Is that a risk we're willing to take? I mean, I'm not against this. I've been sort of open to this and thinking about these things for a little while. So just something we should be aware of as we make the decision.

KM: When I'm not personally overly worried about it. I could imagine there's a world where this adds like 1 or 2 percent to your overall module loading time. Once everyone is like super optimized it and people will come back and Grumble. But on the other hand, it could be that the developer time spent trying to fix bugs because you added this async you've converted the async module from sync to async and now your execution orders different and that causes all kinds of weird bugs, that would also be [probably overall more costly to the ecosystem, I would imagine.

YSV: I would agree with that.

KM: My takeaway is that I'm also in favor of this change.

YSV: I guess we can go ahead and just ask for people to give their consensus on this change.

MM: I have no objection.

SYG: I am willing to try it. The caveat I said before still stands. If an incompat arises we will come back and will object to it then, but yeah happy to go with consensus for now. I agree that the simplification to user expectations and having the refactoring to be less of a hazard is important and I am also optimistic that this will be compatible so yeah, it's fine with me.

YSV: Cool, Can we call that consensus? This is the "speak now or forever hold your peace" moment. [silence] All right. Thank you everyone for taking the time to listen to this very detailed issue. I think this is consensus.

### Conclusion/Resolution

Consensus for post-ordering change

## Temporal Pt 2

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.github.io/temporal-slides-in-progress/)

PFC: Just to start off, after the plenary ended yesterday we spent another hour and half or so discussing the items that had remained on the queue. I think we got all of them. So I've made a couple of extra slides to present some of the things that this smaller group proposed so that the rest of the plenary can be aware and possibly discuss them.

AKI: Real quick question, as we do have a screenshot of the queue from beforehand. Do you want to come back to that? Do you want to disregard it and start over? Should we just post the image somewhere so people can be reminded what they were going to talk about?

PFC: I think posting the image somewhere is a great idea. Maybe what's easiest is if I run through these slides and we go over the things that were discussed after hours and then if there's anything left on the queue that we didn't discuss we can then start from there.

AKI: Great.

PFC: Some things were proposed to change in this after-hours meeting yesterday. We think that we can ask to go to stage 3 conditional on the proposal being changed in these ways.

PFC: One thing that we discussed both in the plenary and after it is subclassing. Here's what we'd like to do: remove the support for `Symbol.species` from all of the Temporal classes. Instead, instance methods that construct another instance always construct an instance of the built-in, not of a derived class; and in static methods that construct an instance we don't use the `this` value as the constructor. This is an example of what would change: if you extend `Temporal.PlainDateTime`, create a new instance of it, and call the `add()` method, which adds a duration to the PlainDateTime and then returns a new instance of it, it would return a `Temporal.PlainDateTime` instance and not a `MyPlainDateTime` instance. Same goes for the `MyPlainDateTime.from()` static method, it would also return a `Temporal.PlainDateTime` instance and not a `MyPlainDateTime` instance. I hope that this accurately reflects what we discussed after the plenary yesterday.

JHD: There's a note on most all of the constructors in the spec that says it's designed to be subclassable. I think the technical reason that this is true and would still be true for the Temporal ones is that if you extend them and then call `super()`, the correct internal slots get created, but generally speaking, because of species and because of the language in the static methods and stuff throughout the spec, it works intuitively with subclassing in some ways. So in this case, it's mostly useless to subclass the temporal classes unless you also shadow or overwrite all of the methods that construct instances. The reason for this change is that we actually don't really want people to subclass the Temporal classes, even though we're not actively stopping them. Is it worth removing that note, either not putting that note that it's designed to be subclassable in the spec or wording it in such a way as to convey that one should not subclass these things?

PFC: I can respond to that. I think somebody mentioned yesterday, I can't remember who, that this note exists on all of the other classes in ECMA-262. I buy the argument that I don't think it implies a value judgment on whether you should subclass or not. And I don't think we need to supply that judgment with Temporal. It's still the case that subclassing `Temporal.TimeZone` and `Temporal.Calendar` is useful without any of this stuff that we're proposing to remove. And I think it's debatable whether subclassing `Temporal.PlainDateTime` would have been useful even with this stuff.

DE: This is an editorial question, not a normative question, I think, and these editorial points are really important. It's important that the specification not mislead people. I think this specification is currently quite misleading when it says things like Boolean is designed to be subclassable. So I'd be in favor of removing this more broadly and that could be a constructive way we could work on that kind of editorial change between stage 3 and stage 4 for Temporal as a way to resolve JHD's concern.

JHD: And I'll say if that is the direction we want to go in, to more generally refine this text so it's not misleading, then that's great. The reason I'm bringing it up now is because I think that if the editorial parts are going to mislead people into thinking it's okay to subclass these Temporal types, then I am more interested in a normative change that I had hinted about yesterday: the idea that if `new.target` isn't the appropriate intrinsic, it throws. In other words, it actively blocks you from subclassing. Some folks expressed a preference to not do that, and I am not suggesting I would block stage 3 on that, but I don't feel as much of a need for even asking for that normative behavior if the editorial parts of the spec convey the right intent, if that makes sense.

DE: I think this would be a positive editorial change. I also think we could express this in the Temporal documentation which may have even more impact than the specification but both are really important.

PFC: My take away from this is that from our perspective the only reason for this note to exist is because it exists everywhere in the specification, and our mantra is to do what everything else in the specification does. That's a larger editorial discussion, and I'm wondering whether this is the right venue. We’re good either way.

JHD: The reason I think this is a useful venue for it is because this is the first collection of classes that are designed to interoperate between each other that we're adding. So Temporal is in many ways uniquely different from the other things in the spec, but I agree with everyone that said that it can be an editorial thing that we refine later.

KG: As editor, I'm happy to revisit this and I don't think it's something that we need consensus on. I regard revisiting these notes as within what editors can do without asking for consensus.

SYG: I agree with that. I think where this differs, where Temporal differs in addition to being the first collection of classes, is that if you take a broad understanding of what “this class is designed to be subclassable" means, you might think that it includes species and here is where a note, an editorial refinement, would be good for Temporal to call out that difference. If you have the narrower understanding of what the phrase "this class is designed to be subclassable" means, the only thing that the spec currently says in the note after that basically, is that it won't throw if you extend the built-in, which is still true of the Temporal classes. Where it differs is that the built-ins don't create this species constructor stuff. So yes, we should refine that part editorially.

PFC: Another thing that we discussed yesterday after the plenary is the point that KG raised about the `compare()` static methods in Temporal not taking the calendar or time zone into account, whereas in the current state of the proposal they do. What we're proposing is that they don't, so `Temporal.ZonedDateTime.compare()` will work exactly like `Temporal.Instant.compare()`. They'll only compare the exact number of nanoseconds since the Unix epoch. `Temporal.PlainDateTime.compare()` and PlainDate/PlainYearMonth will compare the dates in the ISO calendar, and they'll note that the method will return 0 for dates that are the same date, or the same date and time, or the same month, but have different calendars. And there will be no change to the `equals()` method. So here's an example of what that would look like. Here, `g` contains today's date in the Gregorian calendar, and `h` contains today's date in the Hebrew calendar. Previously comparing them would sort them as -1, and we propose to make that 0, meaning same-day equality. Any comments about this one?

JHD: I just want to clarify. Same-date equality from zero was the intuition I'd originally had when I asked for the behavior you're trying to change. So my understanding of the current behavior and the new behavior you're proposing is that zero does not imply any form of equality, it implies simply a lack of comparability or equality such that the sorting order is not altered, right?

PFC: Sorry, maybe I should say that they sort at equal precedence.

JHD: Thank you.

WH: Sounds good. I like this change. This is essentially making all the different ways of representing the same date be an equivalence class with respect to compare. This is good.

PFC: Thanks. I'll move on to the next one: mutability due to calendars and time zones. So we spent quite a while discussing this. It was an item that KG brought up, and I believe it was on the queue yesterday. Temporal objects are immutable but because some of the methods delegate to whatever the associated calendar or time zone object says, there's no guarantee that those methods are pure if you supply your own calendar or time zone object. I'm not entirely confident I'm summarizing the conclusion correctly. I think we could say that this is not ideal but possibly not avoidable or at least not without making some other trade-offs, and this is one of the things that we think is useful to investigate during stage 3 while implementations are taking place. Obviously it's going to be easier to optimize implementations the more immutable things are, and so this is something that we can examine within that context. But the idea is not to make a change to the proposal right now. We believe that what's in the proposal right now is the best solution to these trade-offs that we could determine right now. So let's have at it for this item.

MM: I missed the beginning of this. Can you explain what the mutability is that you're referring to?

PDL: I will explain it a little bit to be more wide-reaching. We delegate to the calendar to get the actual year. So if you add the Hebrew calendar, what we have in the internal slots is the ISO year, month, and day. We ask the calendar object, what is the year for that ISO year/month/day in your Hebrew calendar? Now because the Hebrew calendar is an object, it is theoretically possible that I modified the instance of the calendar that was passed in, and therefore that the answer to "what is the year?" changes for every time that I request that piece of information. The only way to avoid that would be to make that Hebrew calendar itself frozen.

MM: I just want to verify the instance is the only thing that's mutable and there is no such instance among the primordial objects. Well, that is the truth. They're dead.

DE: That's true. There are no primordial calendars or time zones. We were very careful to do that. We were very careful to be assured that whenever you make a new one of these things, it's a different fresh instance.

MM: Okay. I have no objection to this mutability.

KG: To be clear, it does inherit from a primordial thing. Maybe I'm wrong about that.

MM: Inheriting from a primordial is fine as long as the primordial itself does not have any hidden state and once frozen it has no remaining mutability.

PDL: That is accurate. If it's not frozen it could be mutated though.

MM: The `Array.prototype` also starts out mutable. The invariant is that there's no hidden state and that the only mutable state in the primordial is on properties that can be frozen and on the extensibility of the object so once the primordials are frozen there is no remaining mutable state.

PDL: That invariant holds true.

MM: Okay, great. Then I'm fine with this.

BT: There's no one else on the queue. So I think we're good with this slide.

PFC: Okay. I'll move on to this one. This is a point JHD raised about the conceptual consistency of time zones. For an implementation that doesn't have 402 capabilities, what is the correct way to ensure that the minimal set of time zones that Temporal supports is conceptually equal to the minimal set of time zones that you can get using legacy Date? The data model of Date itself doesn't contain a time zone, but you can get a UTC date and time from a Date object and you can get a date and time in the system's current time zone using a Date object. And so you need to be able to do those in Temporal as well. We had a discussion on how to ensure that in the spec, and whether the spec text should even ensure that. One question that came up is implementations that don't internally think in terms of time zones, that use libc functions to get the current UTC offset, and how that changes if you pick up your computer and move to a different time zone, changing the system time zone. So we do have language in the proposal that says that once a particular value has been returned from a particular named time zone object, then during the lifetime of the surrounding agent, a different value may not be returned. So we expect that in implementations where the current time zone is just whatever libc says it is, that they'll implement Temporal by only supporting the UTC time zone. I'm not sure if I'm making this very clear.

PDL: The short answer to this is that we require support for UTC and for whatever the system thinks the time zone is, and that equates to supporting the same things as Date. The issue that JHD was worried about, or the concern he raised, was: is there any situation where there is something that you can do with Date that you could not do with Temporal so as to be a hindrance to the upgrade path. And the answer to that is, we are ensuring that there isn't. In addition we have other methods to actually make sure in user code that you can still do the same thing, so that if we have deviated (?) basically without them change required.

PFC: Thanks. That was a better explanation. I was kind of rushing to make these slides yesterday. Any questions about this item?

JHD: I was just going to summarize where I'm at. PDL’s expression of my root desire is correct. I'm interested in ensuring that whatever you can do with Date can be done with Temporal, ideally jumping through minimal hoops so that people can easily migrate. Through our discussion yesterday it seemed like, although it's nicer when we can specify things in the language, that it is not always possible and in this case because of wide variance in implementations of Date there isn't really a viable way to mandate that an implementation makes Temporal as useful as Date and we would leave it to perhaps the HTML spec or individual implementations to decide to do a useful thing or not, and we could leave it to bug reports essentially to try and smooth that over when I was not matched. Obviously I hope everyone, every implementer in this room, is ensuring that these things are operating off of similar data, but yeah. If there was a way to specify it in 262. I would like to do that, but there does not appear to be a way to specify what I'm asking for. And so I will be content with having the intention communicated in various places, which is that they're roughly similar in the common case.

DE: One part that I remain confused about in JHD's summary is where he says that Temporal wouldn't be as useful as Date in all implementations. I think Temporal is the one that's more likely to have the correctly meaningful semantics. So in some in some JavaScript engines, there's a different implementation of Intl time zones compared to Date's time zones. The Intl one generally I think is the reference that you can trust more. Temporal goes through those kinds of paths as well. So I think it's the safer bet. If you really want to emulate `Date` behavior, it's possible to do so with a custom time zone. I think we could say that implementations should make Date and Temporal align, but I think we all agreed that it's important to to preserve the ability for engines to make simple Date implementations using libc which will not end up going through the same kind of mechanism as would be useful to implement Temporal. So overall I think all the things we're saying lined up.

JHD: And I totally agree with your assessment of the likelihood. My PTSD at this point is about relying on likelihood when it's possible to mandate things, which it isn't in this case.

PFC: Was there anything on the screen-captured queue from yesterday that we didn't cover?

BT: I just want to make sure that everyone who had a queue entry from yesterday got their item in, so SFC, WH, JHD, KG, anything from any of you?

KG: I'm happy.

WH: Can you bring up the screenshot of the saved queue?

PFC: Here's the screenshot.

WH: [Looks at screenshot] Okay; I already said what I wanted to say.

PFC: Okay, I'll go back to the slides. I'd like to invite any other queue items that may come up now.

BT: There's nothing on the queue right now. Does anyone have any more discussion items for Temporal?

RGN: I'm extremely enthusiastic about it after having seen the presentation yesterday and participated in the follow-up discussion. This is looking really good and ready for some implementation feedback provided it's behind a flag per the discussion from yesterday.

PFC: Thank you.

YSV: We've also reviewed it twice now and it looks good from our perspective. So, yep.

PFC: Thanks. If there are no other items, then we can move on. I've listed the stage 3 criteria here. Several people have mentioned implementation experience, which we think will be really useful. The spec text is complete conditionally on resolution of the pending issues that I previously listed. We need sign-off from the designated reviewers and the ECMAScript editors. I think DE has already signed off, the other two designated reviewers are RGN and BFS. I'm not sure if I need to ask explicitly for the sign off here, or if I can just ask for consensus to move Temporal to stage 3.

BT: I think it would be nice if RGN or BFS could confirm that they have reviewed and are approving.

RGN: I haven't been able to go into the level that I want, but I don't consider that blocking at this point through the conversations that I have had and through seeing the other tickets and reviews. I feel good about it. So if you need a formal sign off, I will grant that although I'd still like to do the deeper dive.

BT: I think we only need two reviewers as my recollection, but this is also a very big spec.

DE: I'm excited to hear from BFS, but if he's not here, that's fine.

BT: Okay, what about the editors?

KG: Yeah, the spec text is not great yet. I'm not really concerned about that blocking stage 3, but like I've filed an issue with the 30 or so things that I found in the first two sections, there's more I'm sure, but it's going to take forever to finish that review just because it's massive.

SYG: There are incorrect things, but they're not incorrect to the extent that there are risks for implementers; it's more like they are pedantically incorrect. So I'm also not worried about stage 3, but yeah.

BT: Okay, and I heard from BFS through the grapevine that stage 3 Temporal was reviewed but was waiting on the brand check tissue to finalize. My understanding was that was resolved.

JHD: I took a look at it. I'm sort of in an odd state where I reviewed it as an editor, but I'm not one right now, but overall I think there's a lot of coherence and correctness issues in the spec, and because it's so large, it's very difficult to have confidence that it's all correct. That said, nothing major seems to be there, and given the intention which hopefully is broadly telegraphed to implement Temporal behind the flag, that seems like it would mitigate those concerns and buy time for further review. So if the Temporal champions and the implementers in the room are intending to stick with making sure it's always flagged for now that that seems like it's great for stage 3.

YSV: That works for us.

PFC: Yeah, I think if it was not only an intention, but it was also a requirement from yesterday's plenary that it's behind a flag until at least the IETF standardization process is completed. Is that correct?

RGN: That's my understanding. Yes.

JHD: That seems like it should be sufficient time to wrinkle out some of those spec issues and do further review.

PFC: Okay.

JHX: I noticed that we now have a prefix again. Now we use "plain", and in the early stage it used "civil", and then it was removed, and now we are changing again. I think it's acceptable at least for me, but the decision process of this bikeshed naming issue, I'm very worried about that, because it seems it was based on a Twitter poll which only had a small sample and only collected the feedback for two days. That's something I'm very worried about. Do we have any formal process for such bikeshed issues?

YSV: I can sort of answer that regarding process and feedback sourcing. We're working on one, it hasn't been formally adopted yet. But that is what the research call is trying to answer partially. If you would like to help us work towards that please join us in the research call. It is in the calendar on the third Thursday of every month and we try to make it in a time zone that accommodates everyone. If it doesn't work, let us know and we can move the time.

PDL: I'd like to give a quick reply to that as well if you don't mind. The Twitter poll was only the last instance of asking for feedback. That discussion actually went on for around two and a half years on GitHub itself, and that's why the changes were made along that timeline. So to say it's decided based on a Twitter poll I think is factually incorrect.

PFC: I'd also like to reiterate to reassure everybody that in no way is a Twitter poll binding, right? The purpose of that was for the champions group to get a sense of what people might think of certain names when hearing them for the first time. So for example, there were other popular options on the Twitter poll that we did not take because they didn't meet all of our requirements. I would generally agree that it's not good to name things by popular vote, but that is also not the way that things were done in Temporal.

JHX: I have a comment about that. Yes, there was a GitHub issue for two and a half years, discussing this issue. But the decision was made in a new issue. There's no update in the original issue. So this is why I missed that. Because I only watched the old issue. And actually I think a Twitter poll can help to collect the data, but what I argue here is that this poll was only two days, and only a very small sample, and actually it ruled out many people - for example, the people who do not use Twitter. So I'm [?] for that. So even it was just used for the last instance I think it is still very problematic.

YSV: I just want to chime in on Twitter -- it is not without value. As Hax mentioned, the Twitter poll isn't necessarily an issue. I think we have a convention in TC39 of sometimes using Twitter to get a sense of things but ultimately the decision is made differently, by weighing many factors. I think this is a discussion that belongs in a different venue, unrelated to temporal.

BT: Yeah. I was going to propose that also. I think this is great to discuss, we've certainly had this conversation before. We know we need to get better in terms of collecting user data and having a process that champions can follow to make sure that we're following best practices there. I think is a great idea that Hax raises, but I don't think this is when we're talking about stage 3 advancement since this isn't a blocking issue. I don't think we should get into it right now. So if there are no objections, I'd like to return to the call for stage 3.

USA: I was just going to say that there was a lot of data and the Twitter poll was just one of the many data points.

BT: All right. So are there any other concerns for stage 3?

SYG: No objections, I enthusiastically support stage 3 and I want to really thank all the folks who did the long hour and a half after hours to iron out the issues. I have some requests to move to stage 3 to facilitate a smooth implementation between now given that there are several contingencies in place and one is that I would request the subclassing removal be prioritized first and be merged as soon as possible since that affects the largest surface area for an implementer who might not have full context on our discussions in committee. We would need to get that thing kind of merged first before we start implementation. and my second request is that for the places where things are going to change, that you can just get other PRs out very quickly and then there can be a clean point where you can say we have resolved the contingencies. You can throw it over to implementers. I believe in you guys. Okay, then I think don't then I think my only request is let's try to get that done within one to two weeks. And then please let the various browsers know and the other implementers know and know and we'll start that.

PFC: That's reasonable.

YSV: Yeah, I also agree with Shu that getting the species PR merged in first might be a really good idea.

JHD: It seems like it'd be nice if test262 tests were also somewhat prioritized to help implementers do the same thing. That's not a requirement.

PFC: Yeah, that is something that I do personally plan to be working on.

BT: Okay. I'm not hearing any objections. So this sounds like we have approval for stage 3 for Temporal.

[cheering]

### Conclusion/Resolution

stage 3, pending:

- removing affordances for subclassing:
  - just use intrinsics instead of SpeciesConstructor
  - static methods will use intrinsic rather than `this`
  - `extends` will still work though, as it does currently
  - 262 editors to maybe clean up the "designed for subclassing" phrasing in the spec
- `compare` method will not use calendar or timezone, such that two otherwise-identical dates which have different calendars or timezones will compare as 0 (but the `equals` method will still return false)
- no changes to the mutability of the calendar property, pending feedback about optimizability from implementations
- spec still needs cleanup
- implementations should not ship unflagged before IETF resolution on syntax

## Pipeline Operator

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-pipeline-operator/)
- [slides](https://docs.google.com/presentation/d/1for4EIeuVpYUxnmwIwUuAmHhZAYOOVwlcKXAnZxhh4Q/edit)

DE: I just want to start by thanking the JavaScript Community because this is very much a Community Driven proposal and especially thanks to Gilbert James and JS Choi who helped work through many details a number of these four bones and even wrote A lot of these slides. So what is the pipeline operator? The pipeline operator lets you chain function calls together. So instead of having them be deeply nested you could write one right after the other so it's more like logical or and this is really important because function method chaining is important. It's a very ergonomic pattern the developers like to use. Has a lot to do with jquery's ergonomics and it's good to be able to do chaining together with lexical scope. That's a value judgment that I'm asserting that I think some other people share that you know, lexical scope helps keep things well factored and these ergonomic benefits that are nice to use together with it.

DE: The detailed semantics they're not very detailed are well, you know if you chain if you if you type X to Y dot f then of called y.f of x, of course it evaluates X first so if this is at stage 1. There are some alternatives possible. We could have a pipe function where you pass in pipe the pipe, you know a value and then a list of functions. It's possible, but all those all these function calls and commas in parentheses. It doesn't end up being as readable. You could also just use variables like name a variable dollar sign equals and then the function call repeatedly and with do expressions, you could even make that dollar sign variable local. It's a subjective point of view, but I think pipeline is more ergonomic than those Alternatives and it's worth it to add to the language.

DE: So I want to outline the points of debate that we've had in the past about pipeline and mention my opinions for whatever they're worth. I'm not going to be able to Champion this proposal going forward. So the real purpose of the talk is to recruit a new champion group for this proposal. We have community support, but we also need committee Support driving it driving it forward. So let's start by talking about controversies because we like controversies in TC39.

DE: So one is if you have Arrow functions in a pipeline. These can be useful to give these named values to the intermediaries. If we allow one parenthesized arrow functions, then we would have to parse the tighter precedent. There's a grammar designed it has this kind of foot gun. It's kind of a trade-off. trade-off. So I think pipeline is nicer without having these parentheses and I think it's reasonable to trade off. We also talked about placeholders and partial application. A pipeline is one way to handle a case where it's just more complicated than a unary function, but The problem is that if we make a pipeline based on either a functions then it promotes to some extent the use of currying or helper functions. So if you want to add a number two thing that's previous in the pipeline. You might be tempted to make this kind of a function which returns another function makes another argument and then as pipeline looks nice, so it's debatable whether we want to encourage such patterns in the language. Some people are already doing this in JavaScript and some people say it's a bad idea and we shouldn’t encourage it. I think there are reasonable arguments on both sides.

DE: One way that we can make pipeline more expressive without encouraging currying or the use of Arrow functions is to it's called hack style. We have these nicknames for the different variants of the pipeline operator in our own pipeline discourse. There's Hack style, smart mix, the F-sharp style. So the Hack style is on the right hand side of the pipe line rather than it being a unary function. You have use a question mark placeholder in one in one particular place. You could use it anywhere in the expression you can use it in an object literal you You can use it any argument position or the receiver position We could bikeshed what the placeholder is, but the idea is that you have to use the placeholder that the thing on the right hand side is not a matter of function. So in some ways simpler and more and more expressive so it does force you to write this in the simple cases that do that would work so TAB from you know, CSS standards World wrote an essay recently that I linked to from the slides. Showing, you know arguing for hex tile and JS Choi shortly before the speeding wrote up a whole new proposal for hack style, you know articulating the design very very clearly. There was also previously discussion of the smart mix alternative. This would have these placeholders, but it also had the short style, but there were the bare style in my opinion. This just became too complicated. I think a lot of people felt the same way. So hack style provides a simpler subset without much to learn.

DE: RBN has also proposed partial application. So when we look this question mark we could make that part of a First-Class construct. It could be used outside pipelines that would restrict a bid in which cases it could be used many of these examples would not really fit in partial application. Like how would the await work or how would it work with the receiver? We would probably need two different syntax in an object. It probably wouldn't work. But maybe it's better to omit those cases and get the benefit of being able to use it outside of a pipeline context. So we discussed pipeline in committee a number of times before it's at stage one. And there were some serious concerns raised about this kind of garden path problem when you're looking at an expression, you don't quite know it's a partial application case until you get to the question mark later. Hack style pipelines don't have this because you see the pipeline first and then you see something with a question mark. So once you see the pipeline, you're always anticipating that a question mark will come later. And there and these expressiveness limitations.

DE: The final thing is async/await integration. So imagine you have some code that has these nested function calls and you want to use a pipeline with it. You're evolving that code and you make it so that one of these functions is an async function. So you want to do this nested function calls still but the problem is, you know, it's an async function. You didn't wait it's argument. So you gotta promise returned from capitalize then you appended an exclamation mark to it and JavaScript helpfully converted it to string, but you actually wanted to await the promise. So we want to put in await here if it's a function call and if we're using pipeline we could use.then for this. Or we can use two pipelines, but this kind of breaks the flow. I think logically what you want is to be able to put await as a as an item in the pipeline as previously concerned about an ASI Hazard here, but I think await would naturally have a no line Terminator following it and or at least we could use one here and that will remove any ASI hazards.

DE: On the other hand if we use a Hack style pipeline, then await is always supported. You can just include await and the question mark inside of any kind of pipeline. So there's no particular special feature need to. JS Choi wrote up this is table comparing them then you can reference later. Table comparing alternatives. But aside from these kind of smaller countries the details link important thing to note about this proposal because there's overwhelming Community Support. So lots of people are saying like, let's stop arguing and just settle on this minimal proposal which basically is the F sharp proposal, but without the await in the parentheses free error functions because it seems important to a lot of people. People in the community thinking that this proposal was blocked due to the smart pipe line so that you know the discussion got a bit ugly in some places. I think that when I was trying to frame that we can be open to multiple possibilities.

DE: I tried to be open to these multiple alternatives, but a lot of people got upset about thinking that the smart pipe line was holding this back which isn't the case. Anyway there was a lot of interest in the state of JS survey and of course there are lots of methodological problems here, but it's interesting that people really saw pipeline is important. Yulia Startsev did some research and blind testing the F sharp and smart variants and this was really good so that we can learn a lot about how to do research in the future and I really liked you lie as paper about the qualitative analysis of the argument schemes that were used in people's pipeline responses. Overall, my my understanding is that this research was not conclusive enough to make a particular decision about one or the other or some other proposal, but maybe if YSV has something more to say

YSV: What we were comparing back then the smart pipeline and the F-sharp still pipeline. They performed very similarly like not differently enough that we could say something concrete about user understanding. In some ways F-sharp performed better in terms of people not making as many mistakes while people mostly preferred the ease of use of the smart pipeline operator though. I have to say looking at the Hack proposal that also looks really interesting that looks like it might resolve a lot of those issues. We didn't get anything conclusive. We ran it last time and nothing that we could say. We should absolutely do one or the other.

MM: How does doing nothing compare to doing any of these?

YSV: We didn't test that but several survey responders said that it would be preferable to do nothing. We would have to actually test that and that is something we could test. It wasn't in this specific survey.

MM: I think that's the most important question.

DE: Well, you know figuring out these things by surveys. I think it's a great advance in the committee and it's also not something that we expected for things in the past? So I think when it's possible, it's a good ergonomics win. My take is we should go ahead and do this feature. I think it's a good ergonomics win. It would be nice to include the await and unfriendly sized Arrow functions features, but it would also be nice to admit them and use a minimal feature. I think placeholders or the Hack style or the smart mix I think these create some additional complexity, you know at a high level in other programming languages that I've worked with, you know, I used to work on factor a stack-based language. It developed its own very complex idioms for avoiding the use of named variables and these were harmful to developer understanding. So I don't want to go overboard here. Maybe the Hack proposal is is a good way through.. I like the F sharp proposal, it’s a subjective thing. I think we should take a decision here.

DE: And move forward so I think it's okay if we don't support all idioms in pipelines. The learning that we have from other programming languages is if we try to solve all the cases without forcing people to make variables that could be harmful to developer understanding. So that's why I want to stay with something relatively simple one way or the other. I think in general we've been doing more things in JavaScript, which you could think of as functional programming, you know records and tuples, and temporal being immutable data structures it all kind of fits together in some high-level way and it's a trend that I think JavaScript programmers could hopefully be happy about for TC39. So overall I would prefer something on the spectrum between minimal and F sharp. I think it would be okay to look at Hack as well. So I think we understand roughly the whole design space. We have Babel prototypes of F sharp and smart pipeline. There's ongoing work to implement hack in Babel and we have a supportive community that's willing to work on This. I think we need to make a decision and I'm not going to be able to champion this proposal. So I want to ask people. Do you want to Champion this proposal and how do you feel about these responsibilities?

[audio issues.]

TAB: [robot meow.]

TAB: All Alright, so I've got two bits will start here and then we'll go back to slide for it real quick note the third bullet point first. Good point functional spec based in Vector languages show you can go overboard on .3 programming and it's harmful to people learning the language. I completely agree with this as somebody who loves Haskell and functional languages and really likes the challenge of writing fun point free stuff. You can absolutely do unreadable things. and that's why hex tile is the correct solution here because it's literally not Point free. F sharp style requires that the right-hand side of your pipeline be an expression that resolves to a function which is then called. a unary function in practice because we're just going to call it with the left hand side as its sole argument. This encourages you to write either arrow functions, or fancy point free Shenanigans to generate a function that will eventually take one argument. On the other hand pack style with the placeholders is the exact opposite of that you just write ordinary code exactly as you would see anywhere else in your code base and the Left hand side gets subbed in wherever the placeholder is. I can show this off a little bit better if we jump back to slide 25.Because that’s the comparison between a couple of the options.

TAB: Here we go. Yeah. So in either of the first two proposals 0 proposal one, there is one case the first one and the F sharp one every single other variant requires you to write an arrow function. Or if you're using higher order point free stuff great point free thing to handle this sort of thing like the second example where you're calling a two argument function. Passing is the second thing that could be a partial application.

on the other hand looking over at the hack pipes proposal. Literally none of this requires any extra functions put in it's the exact code from the original expression column on the left side just with a placeholder the spot where you extracted a chunk of code and moved it into the left hand side. So I tried to have this argument little Dan an hour ago in the chat room, and I don't understand what's confusing between the two of us, but he didn't end up changing. The slide. Because the point he's making about it being avoiding heavy point free stuff meaning we should go with F-sharp style is literally exactly backwards. There is sense in which hack style encourages point free at all. It's exactly as pointful as normal JavaScript, but F sharp does encourage point free. So I just fundamentally do not understand what DE is trying to say about that. He tried to make it clear that something about complexity but his examples of complexity are all point free stuff that would be encouraged by preferred proposal.

WH: Can you explain what you mean by “point three” and “point four”?

TAB: I was saying “point free” and “pointful”, which sound like “point three” and “point four”. That is also called tacit programming is where you create new functions out of existing functions without ever explicitly naming the arguments to the new functions. And point full of

DE: To just step back point free refers to a variable. it's kind of like your medical Jargon so arguably in the Hack style the variable is question mark. That's a name. I think the high level goal of this chaining you know of pipeline is so that you don't have to put in this mental work to name these intermediate values when they're quite trivial and I think even though The question mark is technically pointful. It's achieving this high level goal. So, you know in some way at a high level Hack is simple, but there's a lot of pieces to it. I think, you know at least from certain kinds of perspectives the F sharp pipeline is simpler.

TAB: can you give an example from this page or anywhere else where you think the tech pipeline is more complex than what you see in the F sharp example.

DE: I mean if you're talking about how this would be specified

TAB: Users are the ones that we care about.

DE: so, you know the reason that I want to pass this proposal off to others is because I became quite tired of arguing about it. I think we have plenty of evidence that this feature will be useful. I think we have multiple legitimate possibilities and I want to find a champion group who can come to a decision. I think we can come to a decision pretty swiftly. I don't think it's useful to spend a few more years arguing about it and then propose it for stage 2. I have my personal preference that I've articulated and I'm happy to talk through the reasons, but I tried to already. You know, F sharp is a lot simpler. I just doesn't do as many things it's less expressive and he just calls the function. We have a pretty big queue at this point. So I think also we should try to be maybe a little bit more high level and our feedback here, but I don't think we need to really get into much debate right now, but it is good to explore the problem space.

BT: Have did you have more to say on your essay.

TAB: I guess one quick high level thing then this is just a general talk about either proposal my big point of my essay. Is that regardless of Which choice we make, Each one is slightly optimized for different things showing up on the right hand side. F sharp is optimized for unary function calls. Hack is optimized for everything but unary function calls. but in the case where it's non optimal in either case, you're paying a tax of three characters either a three-character prefix to introduce an arrow function in the F-sharp style or a three-character post fix to actually Invoke the function with parenthesis placeholder close parenthesis in the Hack style, and that's it. So long as the proposal handles await and ideally yield but way to the important part the two are 100% equivalent in expressivity and it's just a matter of which cases. burdening with a minor additional syntax tax. All in all the choice is going to be a fairly minor thing. I think there is a clearly better option. But as I said in a quote that then you had one of the slides I think the F sharp is better than no pipeline is all because of how popular method chaining is as a method. It's the one of the big reasons why jQuery is so popular is because it lets you chain everything and people like that style of programming. pipeline makes it accessible to all code types. Not just methods. so it would be very good to have anything in there. It's just a matter of which one we burden with the tiny bit of syntax. That's it. Okay. Thank you of all the Maria

WH: Slide 29 has a list of things which are missing from JavaScript according to the user survey. I would note that functions are high on there — the community desire for functions is almost as high as the pipeline operator. So maybe we should add functions to the language ☺.

DE: Maybe it was an error to include this because I was also confused by that function thing and but I think we have other circumstantial evidence that you know, a lot of people are excited about it. Like the number of Emoji reacts.

WH: Yes, I am pretty worried about the schism of the ecosystem caused by anything which encourages the currying form — what you are calling the F-sharp form. The biggest learning curve will be from some of the syntactically simplest versions of this proposal. If you only have a pipeline operator, it will cause a rift where half of the libraries will adopt the currying form with functions returning functions, and half will not. It's just going to cause an enormous cognitive burden on folks learning the language trying to figure out which is which and getting them confused with each other. So I'm really worried about the complexity behind the simpler variants.

DE: What do you think about the hack form WH?

WH: This one is much nicer.

YSV: All right, so this is one argument to consider for a minimal set. It came out of the research done in pipeline. We've talked about it before but people when asked to figure out where a bug was in the code, they were given several examples of this they most frequently struggled find the bug in pipeline code that included await. People would quit out of the survey because they couldn't find the bug and this was where we had a lot of drop-off points. So that's something to consider if we do something minimal first, but again things have changed since then.

SYG: So I chatted with some folks about the value add of any kind of pipeline. To be clear: I'm of the camp that I would rather you name all your intermediates. and one example that I found very compelling as a value add is it's not just, I mean there is a group of people who are as people and as FP people they want to type what they want to type in what they want to type is composition and and yeah function stuff, but then I think I mean, I don't really take that as a super strong signal. What I do take as a stronger signal are these link like subset of dsls where many Frameworks come up with to handle usually database stuff and yes parts are combinators are kind of in that same camp of feel like you're composing queries like this thing where these conditions are true. Then you do these other things and it's possible to do this with method chaining if you Always return like the database object from the method and that you just chain the methods, but if you would like to stop doing that and you want to structure your data in another way and you want to thread the database handle through right now. This is very painful to name all the intermediate queries. There's usually no good names for them for some particular part of the query. So I do see a lot of value for something like pipeline for this set of uses though. I remain pretty concerned about uses proliferation of uses elsewhere. So I think what I'm saying is I am weakly for some kind of pipeline whereas I was against pipeline before.

JHD: Yeah, so I want to go back to the comparison table if Dan that’s something you can do, but essentially the I think it makes it very compelling argument for hack actually being simplest. I don't care how its implemented, specified in terms of priority of constituencies. I'm thinking about simple in terms of users and the code in these columns. The one on the right is just normal code. So to me that seems like the simplest option of it is I think the first time I've been like strongly convinced to prefer one the pipeline variants.

DE: Thanks, JHD. Does anybody dislike hack and want to speak against it specifically?

JHX: Yeah, I don’t dislike hack style, but the problem here's I I feel they are two groups of people. One group is what which used the library like ramda but they use the curry and use many Cube?? functions, and so these people I feel they would strongly disagree with hack style. I wanted to give that one observation.

DE: Yeah,that seems possible. I guess I kind of shared SYG analysis of that for that. So it's good.

DRR: I think our team has some light interest in potentially championing this proposal. I have some wariness to some that I think are true and Waldemar have both echoed, you know echoed right community rift maybe certain styles of programming that are not as efficient also where you were made end up at creating a lot of garbage incidentally. It's something that we've heard quite a bit of and while it's something that maybe the committee was already aware of like the think the reason that people sort of often asked for this is because you know lack of static tooling that can trip down prototypes on classes and things like that and tree shake away method. So people sort of look to these these functions that are defined in other modules loosely and compose that way there There are also some other tool in trade-offs that wanted to just bring up like if you have a thousand different helper functions now all of these things have to sort of pollute your completion list when you're when you're using some analysis on that, so I think we're interested in being involved in this. just to understand like some of the some of the potential paper cuts that will you know, incidentally come with the features as well, but seems like a nice ergonomic Improvement that would come with the language as well.

JHX: One group of people use like rambda or low - FP they are a group of people. They just want to chain the method. They don't use curry or things like that. These people may like the hacks style. So the problem here is I find these two groups have two different requirements. And actually they have very different developer experience. As I explained in a previous meeting where I present to the extension proposal that if you mix the Old-style and the pipeline operator you get many problems. But the guys I mentioned that only used points free style they do not use any mix of that. So they are okay about the F-sharp style. So I think we should consider that there are substantial conflicts between the two groups, and it's I think it's hard to satisfy both in one syntax. And so I really hope we can consider that the other past that for example in some FP language like closure there are two or three different pipeline operator or we could have both the short style so the two groups of people can use it and satisfy both.

DE: Yeah, that's exactly what is proposed to few years ago with smart mix where we would support placeholders and support their bare form. I think this is where many people reviewing the proposal felt that it fell off the complexity cliff. For that reason JS Choi decided to withdraw this proposal and I support that.

TAB: I previously had said that I don't have time to champion. But if nobody if it needs to be championed, I'm willing to spend the time on it because I feel more strongly about the value of this every time I think about it more so I'm happy to champion as well.

DE: Yeah, imagine we could have a champion group with a whole bunch of different people including that, you know, because you're not the first to volunteer today.

JGT: This is the first time that I've taken a close look at this proposal. I think about the majority of developers who may not have deep experience in functional programming, javascript internals, or spec details. I think the Hack style (channeling those everyday developers) was the only one that would make immediate sense to them and would be really clear what it does, because it looks like regular ecmascript code. As far as the learning curve, it seems like it would be far better for those developers. So anyway, sample size of one, but that's my take.

???: Can I chime in on under Hack style? So when I look at it, then the comparison table is don't like it is trying to procure the others now. Because the Hack style doesn't seem to support ternary operator easily because it will be confusing to have a question mark followed by another question right and then two values for example for what may be due to the symbol being picked for representing the offer and singular.

DE: Well, that's a good point. The comparison tables were certainly written an advocate of the Hack style proposal. I suggested that this slide deck be written with a question mark because that seemed to be the most intuitive Placeholder for most people it would also be confusing to use this in conjunction with optional chaining. Actually, maybe that would even cause a parsing ambiguity. So, you know we could also use that sign or hash for the hack placeholder. I already had a different choice.

We were using the hash symbol for the proposal consistently and we just switched over to the question mark literally days ago, but with the understanding that yes, there might be parsing issues. They just might be easier to read for people in this initial proposal the The exact signing of the sigil is unimportant.

Yeah, I it feels good to have the Hack style. Not That explicit a little bit interested. Although that that placeholders them to be there. but I think it's time people get used to it, But we I think we need more examples on that table to sway someone's opinion if you guys need I mean, this is an interesting problem. I would like to be this is also the first time I've exposed to because I am interested in this but it is surprising that it so many Indians to Earth is kind of implicit about this example.

BT: Okay. Thank you for volunteering to help out. It looks like Ron also is interested in Champion as well.

RBN: I do have more to add too.

BT: okay, we don't have time. Unfortunately we are out of time. So hopefully you can post on GitHub or get in touch with Dan.

## Opt-Out Period

WH: Yesterday we said that today we’d return to the topic of officially beginning the opt-out period after publishing the standard candidate draft as an ECMA document. Have we done so?

IS: The document went out as an ECMA document this morning, so we can begin the opt-out period today.

WH: Thank you.
