# September 26, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Dave Herman (DH), Pieter Ouwerkerk (POK), Leo Balter (LEO), Aki Rose (AKI), Kevin Smith (KS), Peter Hoddie (PHE), Godfrey Chan (GCN), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Richard Gibson (RGN), Maggie Pint (MPT), Mike Murry (MMY), Mathias Bynens (MB), Keith Miller (KM), Mattijs Hoitink (MHK), Kyle Verrier (KVR), Justin Ridgewell (JRL), Katie Broida (KBA), Randy Luecke (RLE), Daniel Ehrenberg (DE), Sathya Gunasekaran (SGN), Rob Palmer (RPR), Kevin Gibbons (KG), Myles Borins (MBS), Tom Dale (TDE), Daniel Rosenwasser (DRR), Henry Zhu (HZU), Matt Johnson (MAJ), Robert Pamely (RPY)

Remote:
Brian Terlson (BT), Rick Waldron (RW), Caridy Patiño (CP), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG)
-----

## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/09.md)

## Normative: Use array indices instead of integer indices in OrdinaryOwnPropertyKeys

(Mathias Bynens)

MB: Waldemar had an objection to this proposal previously. We discussed it offline and he withdrew his objection, so both PRs can be merged, and the specification can be consistent with implementations

DE: What was the reason?

MB: We clarified that there was no proposal to limit the length of strings, and we were just talking about the enumeration order. There needs to be an arbitrary cutoff somewhere, and this ordering is as good as the one in the specification. It has the advantage that it matches implementations. I'll update yesterday's notes to reflect this.

#### Conclusion/Resolution

- Consensus on the two PRs, #1243 and #1242


## Well-formed JSON.stringify for Stage 3

(Mathias Bynens, MB)

- [proposal](https://github.com/tc39/proposal-well-formed-stringify)
- [slides](https://docs.google.com/presentation/d/1oTkthPjlRg8FOsyvD9XdA-rPkfLcMrTDCIiHNltIxpw/edit#slide=id.g32d60b44aa_0_2)


MB: Are there any objections to Stage 3 for this proposal? (No objections). OK, so stage 3 it is!

#### Conclusion/Resolution

- Stage 3 acceptance


## Sequence properties in Unicode property escapes for Stage 2

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-unicode-sequence-properties)
- [slides](https://docs.google.com/presentation/d/19GskXitY8EC5L2Xo4NRk0pNvJB6w2_rJKIIua2xWQE8/edit)


MB: This explanation is from the perspective of the implementer, (shows examples in slides). For JS developers, the mental model has always been that `\p` always refers to the Unicode *p*roperty. One of the features of this is that you can refer to some property using `\p` and as Unicode updates their specs, the property can include new Unicode characters.

MB: For property forms that we already support, the negated form `\P` is clear, but for sequence properties, it's not so clear. What is the inverse of a sequence, for example? I think there are no reasonable semantics for this. You can use negative look-aheads, to achieve this anyway, so I don't think we should support these forms. I'm hoping we can move forward with this discussion.

MB: MLS suggested `\q` for se*q*uence, but my personal preference is to stick to `\p` to not introduce new syntax. I don't think it's a good idea for our syntax to depend on an upstream spec. What does the committee think we should use?

MLS: There's a couple issues with using `\p`. What if Unicode changes that property to map that property to a sequence anyway. (i.e. property `foo` becomes changed by Unicode to a sequence). If a user uses this in a character class, then all of a sudden this throws a syntax error. Secondly, let's suppose Unicode changes something from a property to a sequence, the programmer should have to know that to use it. Unicode will often prefix these with underscores anyway, so a programmer wouldn't probably even be able to use it without

MB: Perhaps Unicode would have to introduce a new property and then there's no collision?

MLS: That would help, but you would still have to make changes to your regular expression.

BFS: Do we have a plan if Unicode is not consistent with how they identify Sequences?

MB: It hasn't happened in the past, except for this `Basic_Emoji` property. We should go to the Unicode consortium and give this feedback to them.

WH: If Unicode changes non-sequence properties to include sequences, that would create many problems. If somebody had used the property inside a negation, for example, there is no good solution. You could update the property and break them. You could not update the property, and now you have both `\p` and `\q` with the same property name but doing different things. People will invariably confuse them and get subtly wrong results.

RGN: We already have this problem where Unicode can convert any existing non-sequence property into a sequence. It's not new with this proposal.

YK: I agree that properties are sequences. Historically, people agreed that a property corresponded to a single character, and could be treated as such.

MB: How would you negate that?

YK: The most expressive version of a sequence, like ECMAScript keywords, or emojis, for these have relatively straightforward negation. Like negating a flag emoji? If you have a USA flag, if you say not USA flag, you would match everything that's not that flag.

MB: But there are multiple characters, so how do you negate that?

BFS: Are you stating that it would match one character?

MB: Emoji sequence component characters often have meaning on their own.

YK: So I guess that's the difference between Unicode and UTF-8, in UTF-8 you have modifying characters that have no meaning on their own.

WH: The UTF-8 analogy doesn't work here. Every UTF-8 character is a well-defined single character; some happen to be represented by multiple bytes. With sequences, there's no notion of single-character/thing that this would match. Every `\p` might match a grapheme, but the notion of what that is is fuzzy.

YK: Because emoji sequences are composed of units that sometimes also have meaning on their own, I agree that the grapheme analogy doesn't work.

DE: I think some of this discussion is a bit besides the point. Both the options `p` and `q` are OK. If there's a mismatch, I'm not sure what it is. I think we should decide this based on what mental model we want to go with.

MLS: The concern I have is the mental model with the programmer. A programmer needs to understand the difference between `p` and `q`—that you can't use one in a character class. The other things is that as the Unicode consortium makes changes (though they haven't moved from a property to a sequence in the past)

MB: I do think we can work with Unicode to let them know that changing from a property to a sequence would be a breaking change for us.

DE: I think we don't need anything in writing from Unicode; the simple explanation that changing properties to sequences would be a breaking change for JavaScript would be a sufficient deterrent.

YK: I think this is a great feature. I prefer `\q`, but it's a weak preference. I could easily imagine writing a class for all the flags, for example...

MB: This proposal lets you do that without a character class.

YK: I mean, a character class, with each flag sequence copy and pasted in to it.

MB: That already doesn't work... Regular expressions operate on a code point level (with the `u` flag). That's not a problem introduced by this proposal.

WH: If we go with `\q` in order to solve the problem of Unicode changing a non-sequence property into a sequence property then we'd end up in a situation where `\p` and `\q` do different things with the same property name. In addition, if we worry about such Unicode evolution then we should make a `\q` alias of every `\p` property to make one-character-long sequences.

DE: I think this feature is very valuable, because a lot of sites want to check for valid emoji sequences and I think it will be good for the web to have this built in.

MB: There was data on usage of existing emoji-regex packages in the Stage 1 presentation.

YK: I agree and I think this feature is important enough that I wouldn't object at the risk of preventing this spec from advancing.

DE: It seems like the feelings on both sides of this argument are moderated and want to move this forward. I would suggest that in the next 2 months, we arrive at a conclusion.

WH: We should decide between the three choices then: `\p`, `\q` where a one-character property is not a one-character sequence, or `\q` where every one-character property can also be used as a one-character-long sequence property.

MLS: Unicode is very clear about properties and sequences being disjoint. We should not conflate them, and follow the very specific rules the Unicode consortium makes.

MB: They can both be thought of as "properties" though.

WH: [points to bullet point on the presenter's slide] Not all of us are convinced that Unicode won't conflate these.

MLS: They never have.

MB: Yeah, this is a hypothetical issue.

DE: I think that when we talk to them, we should make sure they don't ever conflate properties and sequences.

MB: WH's making a counter-argument to the point that was made earlier, about what happens if the Unicode consortium makes a change like this; how do we prevent them from doing this in a way that breaks ECMAScript.

DE: This appears to be ready for Stage 2, we can solve these kinds of design issues before Stage 3.

WH: Concur on stage 2.

MB: I'll reach out to the Unicode consortium for clarification w.r.t. our use of the term "sequence properties", as the decision to use `\p{Seq}` vs. something else seems to hinge on that. I have been in touch with them about the proposal, and at the very least they didn't object to my use of this term.

#### Conclusion/Resolution

- Stage 2 acceptance
- MB to work with the Unicode Consortium
- Stage 3 reviewers:
  - Waldemar Horwat
  - Michael Saboff


## Hashbang for Stage 2

- [proposal](https://tc39.es/proposal-hashbang/out.html)
(Bradley Farias, BFS)

BFS: This already was approved for Stage 2, but we have made many changes so we're doing this again. Due to feedback from WH, I introduce this now as a lexical grammar. The main change text is this: "Hashbang Comments are location sensitive and like other types of comments are discarded from the stream of input elements for the syntactic grammar." That's about it. I'm asking for Stage 2.

WH: The revised grammar is good now.

TST: Why can't we move this to Stage 3?

WH: 24 hours ago the document was completely different. BFS rewrote it based on my comments.

#### Conclusion/Resolution

- Stage 2 acceptance


## September 2019 Location

JRL: Bloomberg has offered to host in September 2019, so at this point we'd like to lock it in as the meeting location. Any objections?

#### Conclusion/Resolution

- September 2019 meeting location confirmed to be New York at Bloomberg
more discussion [continued online](https://github.com/tc39/Reflector/issues/130#issuecomment-426007344)

## Array.prototype.flat{,Map} for Stage 4 🎉

(Michael Ficarra)

- [proposal](https://github.com/tc39/proposal-flatMap)


MF: I was hoping to propose this for Stage 4, but unfortunately Chrome pointed out this morning that HighCharts, which is a popular library suggests that there's a possibly web compatibility issue. https://bugs.chromium.org/p/chromium/issues/detail?id=888128

JRL: Can we separate flat from flatMap? Do we have to expose flat?

MF: In a previous issue, DD suggested that he would choose `smooshMap` if we had `smoosh`, so I wouldn't want to move forward with flatMap until we figure out the name for flatten.

YK: I strongly object to using the literal name `smoosh` and believe that the developer community has clearly stated its objection to this name. Among other things, the word is not universally known even among English speakers.

JHD: Could we have an optional depth arg to flatMap, instead of flat? I'm not sure about the performance of that though.

MF: Yeah, I'm quite concerned about the performance there. Also the expression of developer intent.

KG: Just reading the comments in the issues from the last couple of hours, I think it's worth listening to whatever the Chrome team has here.

SGN: Chrome isn't planning on unshipping this just yet. There's no point in discussing this now.

MF: I think it's worth discussing this now. As the champion of this proposal, I'd like to at least hear where the strong opposition is.

SGN: I think it's important to inform the committee that there is a breakage and that we need to address that, but there's no point discussing the options now.

MF: Are there strong oppositions to any possible solutions here?

BFS: `smoosh` will probably have webcompat issues too. There's been a lot of community feedback that there hasn't been a lot of TC39 listening to community feedback but a lot of listening to the web breaking.

#### Conclusion/Resolution

- Not advancing due to potential webcompat issue brought up by Chrome team
- Committee would prefer to explore naming options (not `smoosh`) over web compat hacks, if necessary




## Ecma policy discussion next steps

(Dan Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1s4NMqKIqzpnASvWkNVD_ql_TPnZLohSsC6WrqSHnp78/edit#slide=id.p)

DE: There's been discussion in the past for groups like Babel, who happen to have contributors that work at Ecma members. We have thought about adding a new membership category for this kind of member. Before bringing this to the ExeCom, I was wondering if people had specific thoughts on this proposal.

WH: Are invited experts individuals or can companies be invited experts?

DE: Individuals, but unlike Ecma Fellows, this is not an indefinite honor.

WH: It's fine for individuals, but I would want to make sure that invited experts aren't used as a workaround for companies avoiding joining ECMA. I don't want this to become a habit.

DE: I would suggest we think about this on a case-by-case status, so that individuals do not abuse this.

DE: The next question is how do we think about these Groups? We cannot technically establish task groups that are royalty free because TC39 technically. Actually, TC39 has, and in fact this meeting today is part of, a task group which is royalty-free because TC39 is not royalty-free itself. I propose we upgrade TC39 itself to be royalty-free so we can more appropriately have temporary ad hoc groups to attack specific tasks. Consensus?

WH: It's unclear what kind of consensus you are asking for?

DE: I'm not asking for consensus today, but we will need to discuss this further, and I'd like consensus from this committee before addressing it at the GA.

BFS: I think this is a great idea.

DE: I think the next meeting would actually be with the ExeCom?  Does anyone want to come with me?

BFS: Yes, I am interested.

YSV: I am interested to attend remotely as well.

#### Conclusion/Resolution

- No opposition at this point to making this committee itself royalty free
- BFS, DE, and YSV will be talking to the Ecma ExeCom to discuss what's required in the process of making TC39 royalty-free and an Ecma fellows-like group policy


## Groups Update

(Yulia Startsev, YSV)

- [slides](https://docs.google.com/presentation/d/1evbnsGmYVM1zvI6FZd8hkcECRC2Gz3geL7ZaJJlRlMU/edit#slide=id.p)

YSV: (Presenting slides). To the person in IRC who asked for a link to the Google Calendar, I will post it shortly.

DE: 8 of us met to discuss how TC39 might work with educators. There was a lot of talk about producing educational materials produced as part of the process of adding new features to EcmaScript. Overall, the goal with this group is not to bring more people in who we have to always be in consensus with, but more to listen to them and make an informed decision based on that. This group is really ad hoc and not to be part of an official TC39 group at all. Please let me know if you know anyone who we should invite to this meeting.

YSV: Does anyone have any questions or comments about the meeting with educators? Let's move on. (Presents slides about website updates).

WH: What'd the difference between the outreach group and the educators outreach group?

DE: The outreach group does general outreach, the educators group discusses proposals.

WH: I see that the educators group is working on deciding features of proposals. Is it becoming a second copy of TC39?

DE: This is the decision-making body.

WH: How does the IP work? If some random person in the audience requests to implement a feature and one of the TC39 folks forwards it to here, who has to sign the IP form?

DE: This discussion was informal.

WH: So what you're saying is that the educators group is not a TC39 function.

DE: Correct. When we discussed, AWB asked what the purpose of the groups was. For now, they're individual initiatives.

WH: That's fine.

YSV: This is an experimental thing that we're trying.

IS: They would produce educational materials for the outside world.

DE: That's one purpose, but the other it to give feedback on proposals. Like github, they're expected to sign the IP form. I thought WH was objecting to them signing? If not, I can have everyone sign.

YK: There seems to be some third-rail here about the exact formalism of this structure. I think treating this as a completely informal thing, is also probably not correct. Obviously GitHub is one formal channel, but that's probably not enough.

DE: I agree. We're in the trial period. I'll agree to whatever IP policy we decide.

CM: Why is this called educators outreach group?

DE: Because we are specifically reaching out to educators. Eventually there will be outreach groups that reach out to everybody.

CM: So it's characterizing the audience, as opposed to characterizing the content.

DE: Exactly. We may decide to collaborate on educational materials, and the other may decide to work on polyfills.

DH: I like how you are incorporating more voices into the conversation. I like this. I just want to thank you for this really great work and express my support for this.

DE: To wrap up, I think the only thing we need to decide is whether they sign the IP form.

WH: I feel misled. I thought the edu group was actually educational, but it's not.

DE: Do you think that we should not be discussing things that go on in TC39 with individuals who are not in the committee?

WH: Yes, it's fine to discuss. But it looks like you're also making decisions.

DE: We don't have any capacity in these informal discussions to make decisions.

WH: You are though. Just reading through the notes, you are making decisions.

DE: Maybe we can go into more detail in GitHub.

WH: I'm worried about subgroup lock-in.

DE: You're worried that the group will come to an understanding that TC39 won't agree to? Is it OK that we have a decorators working group.

WH: Yes, of course it's OK that we have champion groups.

AK: I think they're all kinds of way that people make decisions—Twitter or lunch time conversations happen. Usually it's a good thing that people make these decisions outside of the committee.

WH: I agree. Discussing things outside the committee is a good thing.

YK: I agree with AK, but to put it a little differently. There's a consensus process for making decisions, for example. There are a huge amount of individuals people on the committee need to consult (colleagues, community, etc.). Part of the point of these meetings is to represent what those people are thinking about or requesting in proposals. In my opinion, the more ways we can make those conversations happen, the better.

RJE: Any feedback you need?

YSV: If you have any concerns or thoughts, please reach out to me.

#### Conclusion/Resolution

- No conclusions necessary


## 2019 Chair Group Nominations

(Yulia Startsev)

- [slides](https://docs.google.com/presentation/d/1P5DdJBQrr5hj_x-SqQxk8HOTaipJUaxbH0icp1g9iMk/edit?usp=drivesdk)

YSV: (Presents slides). YSV, AKI, and BT have volunteered for high-time investment roles, MBN, TST, and LEO for low-time investment roles. LEO is specifically interested in being a notes facilitator. (Presents slides). That concludes this presentation. Any there questions?

WH: This seems like a fairly radical change and I'm not sure how it fits into the ECMA rules. ECMA requires each committee to have a chair and one or more vice-chairs. A chair is a person; it's not a committee. How does this proposal fit in with ECMA's rules?

IS: I agree. In ECMA, one person is the chair. I fully understand that we're in a transition period, but when this becomes normal... It would be a good idea to get Patrick (Something) to help. We would be glad to assist to take over anything that is a routine job. As soon as something becomes routine, Patrick can take over it.

DE: Is it acceptable to have a 3 co-chairs instead of a single chair?

IS: Yes, that's acceptable. We are very flexible for these kinds of things.

WH: The rules say it is just a chair.

IS: From a practical point of view, co-chairs should be fine. We can be flexible here. But the bylaws, it definitely says a Chair. But this group is big for ECMA purposes, you could use a bigger management group if you want.

DE: Since we're already trying to change the bylaws from earlier, is it ok to change this too?

IS: I'm not sure. I've tried to keep the bylaws and rules short, so we can decide things on a case-by-case basis, keep things flexible. I'd rather not micromanage this in the bylaws. Others have a 200 page bylaws, we only have 6 pages. Let's be flexible. The bylaws have been around for almost 60 years, of course things will change to keep up with times.

YK: ECMA says we need a chair and a vice, but doesn't really say what the responsibilities of those are. We could just have a figurehead and keep things how we need.

DE: We have just heard from the Secretary General of Ecma that it's acceptable. I don't think we need more formal approval than that. I'm really happy with this chair group.

AKI: Does anyone want to volunteer to do more work?

YSV: We would love to have more contributions.

#### Conclusion/Resolution

No objections and will likely hold an uncontested election in November
No additional volunteers for the committee chairs


## Include static in `static` method `toString`

(Jordan Harband)

- [proposal](https://github.com/tc39/Function-prototype-toString-revision/issues/34)

JHD: I know the committee doesn't universally agree that the toString should include the static keyword when stringifying methods, so this is a discussion about that.

MB: I'd like to hear from MF.

MF: I don't have a strong opinion on this. It probably shouldn't be included since we're not `toString`ing a ClassElement, we're `toString`ing a method. I realise that some users prefer to not maintain that distinction, and that is fair.

MM: This overlaps with issues in decorator placement with ordering. If we want to add `static class` (a nested static class) that would bring up the same decorator order ambiguity.

JHD: I think we'll re-discuss this in the next topic.

MM: I think these have to be solved together, they're too entangled. A decorator on the static placement is clearly not part of the nested class, and must be unambiguously distinct from a decorator on that nested class.

JHD: So the toString on the nested class would not include decorators or the static?

JRL: We've already made a distinction that method is different from function, it's not just the value we're toStringing. So the nested static class isn't just the value at that position, it can be different.

MM: If we didn't include the static modifier on a static nested class, I don't think we should include it on static methods.

MM: We want the toString to be a substring of the source. Either way, for methods, the string is not an expression that parses to the original.

WH: I find the purposes of `toString` kind of confounded. If we look at it as something for documentation, that's one thing. If we expect it to work with `eval`, there are various known troublesome cases that don't work well. For documentation purposes, I have a weak preference for treating `static` the same way as `async`.

BFS: I wanted to bring up a point. Currently, `static function f` is not valid within a function body. I think the ability to preserve a slice of text is important to several people on this committee. If we were to reproduce this method, could we put it in the same place within another source text and have it properly parse. It may not work because of closures, but I don't think we normally consider that.

WH: I don't understand your point. Who is proposing `toString` producing `static function f() {}` for a static method `f`?

BFS: It's not valid now, it function expressions are different than method expressions.

JHD: Maybe it would help to clarify something first. We have two competing mental models—which keywords modify which things. They both relate to ordering and also toString, because we all roughly agree that if a keyword is modifying a function, it probably belongs in the stringified version. You can tweak these mental models because static is modifying a class, and not the function. Either of those conclusions about static would make sense. These distinctions are important because each of them must be well-understood before proceeding with the decorators discussion.

WH: The mental model is that if `static` is part of the class and not the method, then decorators would go after `static`.

JHD: Yes, if we decide that `static` modifies the class as opposed to the method. If we decide that static modifies the value, then I would expect it to be serialized with it. We should come up with simple rules that explain what goes in to string.

TDE: Given the preponderance of tools that cause the code that you use different from the code in your editor (transpilers, etc.), what are the use cases that we care about for including or not including the static keyword?

MM: The use case that has a hard requirement, isn't affected by this choice for methods, since their source string would not be a usefully evaluable expression anyway. But for normal functions and classes (including exported functions and classes, and the hypothetical nested class) they must generate a string that evaluates to produce a similar function or class. (Specifically, for functions, one with a similar [[Call]] behavior.)

YK: When we made that decision, we were going for a more interoperable spec. I don't remember totally agreeing to make that the requirement.

AK: I propose we move on to decorators since we're running out of time—and these aren't separable; we're really talking about the same thing. To answer JHD's earlier question, though, about rules: `static` modifies the class and the value—it's impossible to think about them as separate.

JHD: Having the discussion, this discussion creates a framework for the decorators talk.

YK: We hope that we can keep the decorators conversation separate from this. If they're inseparable, OK, but I think the committee should try.

#### Conclusion/Resolution

- We'll have to talk about it in decorators


## Decorators Stage 2 update

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-decorators/)
- [slides](https://docs.google.com/presentation/d/1s9bu_Z0vWR9eR4TL_8LEOmIFZvPth9Z8BLcHVqYWf_0/edit#slide=id.p)

DE: We can't go to Stage 3 because of one unresolved issue, but we have resolutions on two issues. The two issues we discussed previously about the use of private in decorators, the "Integrity Investigation". We get strong encapsulation boundaries with frozen realms, so the goal is to make PrivateName (in example slide) a defensible class. (Demonstrates examples in slides). As we've discussed previously, it's important to decorate private fields in methods. There's plenty of APIs that use this, in JS there's a get function to access a private variable, and it's good to have this as terse as possible. It's pretty syntactically clear that the getter is getting access to the variable. You're passing the private field to the decorator directly. If you do want a convenient way to get that access, you could imagine decorating the entire class. What we concluded was, though ugly and unfortunate, we would remove the private fields from decorators. If there's a mismatch, it's better to go more conservatively, partly because we have this workaround. We cannot think of a use case where this doesn't work out. There's a PR out for this restriction. Before we get to export/toString, I want to at least get consensus on these two PRs—not for stage advancement.

(Cheering at progress)

DE: Now, `export @dec` ordering.

JHD: The mental model I have is that export modifies the module, not the value that you are exporting. Function.p.toString contains info about the value itself, so it's not changed by exporting it. Decorators can't modify anything about export; the decoration applies to the value, not to the export. I think decorators should appear before things they can modify, and after things they can't modify. This leads me to use `export @dec class X {}`.

RBN: Our position that `@dec export` ordering is because other languages also do follow this ordering. This is valuable for people coming from other languages to JS that those will have a better understanding of where these things take place. If we choose to go with decorators including the export keyword, there are definitely symantic changes between Stage 1 and Stage 2 today—TypeScript and Babel have had three years of experience of this. ~2800 classes in public repositories use export in this way. If we choose to put decorators before export, it becomes very confusing as to where a modifier will go for a class. By keeping these modifiers logically grouped within the same space, it will align better with other languages. One of the other points is that it keeps export close to the thing it exports. While that makes sense, aside from simplistic ordering rules, it doesn't have any specific meaning other than what we give it and it wouldn't necessarily affect the behavior. If you look at the examples of Angular decorators, they have a significant number of options, so the export keyword can be very far from the thing you're exporting. (Talking about slides). There are problems with having the export keyword arbitrarily far from the things that it exports—it becomes very hard to determine at a glance what is actually exported. Our preferred approach is to align with other languages like Java and C#, be consistent with TypeScript and Babel, and keep `export` close to the name of the declaration it exports.

DRR: In the example you show, the decorator output may not be captured in the toString output. You can return whatever you want as the value, which won't include the decorators.

MM: To answer DW, the two alternatives that RBN listed—to omit the decorators or to include the export keyword---would both break the web. This pattern of evaling the string of a class or function is out there already. Taking the decorators out of the toString breaks that use??? It would be a bizarre consequence if the decorations don't make it into the toString.

RBN: If we do include decorators in toString, then an `@log` decorator would have to replace the constructor, which would break the toString anyways because it replaces the return value. Decorators can replace values at runtime, they're already depending on a complicated mechanism. The only way the toString of decorators would work is if decorators were annotations only, not able to replace the value.

MM: I completely overlooked that. You're right. If it replaces the constructor, it will hit this edge case.

MM: For completeness, I'll mention a third option: include decorators, exclude export, and the toString would not be a strict substring of the source text. But I hate that.

TDE: Prior art makes a strong argument. Are there problems with this particular ordering that have come up in Java or C#.

BM: They have a different export mechanism, so it's hard to compare.

RBN: To my knowledge, there's been no negative comments on the ordering in C#. In typescript, we've had this for 3 years without issues. We've gotten no feedback that it should have been any other ordering.

BM: We're modifying the binding with export, not the value. You can export a class with `export {F}` followed later by `class F ...`. If you decorate the class and allow treat `export` as a modifier, then that would imply `@deco export {F}` decorates F. This doesn't make sense, especially since someone could assign something else to F.

RBN: If we add `abstract`, it's specific to the value that is being exported, you wouldn't necessarily be able to change the abstractness in the decorator.

WH: I second BM's point. Export is a directive. It's a statement, it's not a modifier of the class. If you export an abstract class, the `abstract` should go before the class, not before the export. If we were to put decorators before `export class ...`, they should go before `return class ...`, etc. They're both statements that work on a variety of things that can be defined locally or obtained from variables.

RBN: I disagree. `export` and `return` are different.

WH: Of course, but the differences are not relevant here.

YK: Just because no one complained, doesn't mean it might be good. I want the committee to make a decision, and I'll live with either. My preference is to trust the prior art, though.

BM: My concern is that we're treating export as something it's not. The export is not modifying the class, it's modifying the binding. The data is associated to the binding.

RBN: But the decorator can't change the class heritage, etc. It seems nonsensical what goes inside and outside the decorators.

BM: Modifiers could have different placements if they modify different things. Treating this as modifying the operand to export is problematic.

DRR: The never gotten any request to change the export ordering. In some sense the ordering could be immaterial, but the be some clarifying semantics between the two options.

TDE: There doesn't seem to be any semantic ambiguity. What is the problematic aspect then?

BM: I don't have a strong opinion on the ordering, but I do have a problem with the reasoning for "export is a modifier". It's not.

DE: It's really common to have coalitions but with different mental models.

JRL: You export a class, and decorate it later. Let's separate the two statements, forbid decorating an exported class.

MM: A decorator on the static in a decorated, nested class, would be on the field not the class. In the code "@foo static @bar class C ..." the @foo is decorating the static placement, and would be activated as a member decorator of the enclosing class. The @bar is decorating the class C and would be activated as a class decorator.

JRL: This is the same as decorated-static-decorated-function expression; it follows the same logic.

DE: JRL gave an interesting suggestion to get around the decorator export issue. We should get the temperature of the room of banning decorated exported classes. If you decorate a class that you export, you should do it in a different line.

WH: (gestures thumbs down) (some others, including DH, also express disapproval)

YK: I would like to find a decision, some decision. Or we'll go back into a cycle of not being able to resolve it.


DE: We have an implementation of the new decorators proposal in Babel 7.1. Thanks to the Babel core team for implementing this.

LEO: We wouldn't need babel for Test262.

DE: It would just be helpful as our first implementation.

YK: I think the consensus process is breaking down for this issue.

DRR: Can we get away with decorated classes that are not exported?

JHD: If we make a decision that doesn't match what's already in use, it would require two codemods to fix.

KM: You could just run the automated codemod.

JHD: It includes all the documentation. It's not a simple codemod.

DH: I think this is so zerosum that we can't progress. I'd rather ship the worst outcome than not ship. There's so much strong objection to one of the two, and it's getting closer to shipping the worse syntax. I think that's a shame, but it's something we can live with.

RGN: One of the comments was just that it was keywords. But export is special. It's not modifying the value. It definitely can't follow the abstract, even if we do argue that it can follow decorators.

RBN: I agree with that. Keywords must have an ordering, but where the decorators go in that is up to decisions.

KS: ???

HZU: Nicolo (on Babel) has published [a codemod to upgrade from old decorators to Stage 2](https://github.com/nicolo-ribaudo/legacy-decorators-migration-utility), would be simple to add before/after

#### Conclusion/Resolution

- DE will merge two PRs
- Not advancing to Stage 3 (not actually going for advancement)
- Will talk about ordering again next meeting


## Revisiting Private Symbols

(Kevin Smith)

- [proposal](https://github.com/zenparsing/proposal-private-symbols)
- [slides](https://docs.google.com/presentation/d/1kkRnIurCtQEJhGyeDS0f_s7-gaS3iWHKh-N_YoWKpKY/edit?usp=sharing)

KS: I've got a bad feeling about #private. The issue is it's sugar over weakmaps, which is good for privacy. But it's acting like property? A private access seems more like a property descriptor. Then the methods are usually shared, but private methods are owned? Maybe they're owned. It bugs me, why is it different? Then there's the private static subclass "hazard". Then destructuring has to be solved for #privates. Then decorators have to invent this PrivateName  map-like instance, and I have to deal with this novel object type in the key placement. And why should this only be on classes? None of these are fatal, but it's a lot of little complications. So private symbols are ajust symbols that have a private field on them. They're not returned by OwnPropertyKeys. They're not exposed to Proxies. The current private fields proposal solves both encapsulation and branding. Private symbols only solves encapsulation. With Private symbols, it's all just properties. It's all the same as the syntax we've already carved out for methods and fields. There's no subclassing hazard. They can walk up the prototype chain. And destructuring is already solved. And it's just a private symbol given to decorators, kinda like a normal symbol. And it makes it so that classes aren't really special, you can still use objects with private symbols. They syntax is a bit ugly, but we'll get used to it, or we can investigate sugar syntax later to handle symbol property access. And as for brand checking, isn't that really a separate concern? The bigger concern is membranes. Membranes can't directly trap the private symbol, and that breaks a core design in membranes. Let's open it up to questions. Are we OK with these tradeoffs?

WH: My concern is is about encapsulation/privacy, and you claim that you can separate it from branding. That kinda works if you only ever have one private field per class, but this is what happens if you have multiple private fields in a class that you want to keep consistent:

(Presents a screenshot of Minesweeper)

The problems arise when you have more than one private field in a class and, as is typical, the class's logic expects them to stay consistent. You get a multitude of "confused deputy" problems. Suppose your class C has a method M that writes some value to a private field. How might I attack it? I could pass in C's prototype to M and get it to write a default value that then shows through to other instances of C that don't have that private field set. With multiple prototypes I could play all sorts of games like that to get C's private fields out of sync with each other by either mutating prototypes, mutating the prototype chain, or stitching together new instances with unexpected prototype chains.

While a sufficiently diligent programmer might defend against such confused deputy attacks, it is error-prone enough to do so that it's not going to work well in practice. This model of encapsulation is just too brittle.

On the other hand, if you really do want to have single private fields you can attach to arbitrary objects, we already have a good language mechanism to do so — weak maps. We don't need a second mechanism.

KS:

JRL: Can we just use WeakMaps? Even if you trick me to install the private symbol onto a foreign object, it would still be encapsulated to my code. You're foreign object still can't directly modify the property where I put my private symbol.

YK: This is about the mental model issue. How should people who want to understand the core model understand things? I think using the WeakMap mental model is pretty nice for that.

MF: I just wanted to make a quick point that I think this will solve one of the issues I've been trying to solve on the first-class protocols proposal. DD raised an issue with Protocols earlier wanting support for privates, and this should provide a way to addresses that problem. To that aspect, I'm very much in support of this.

MM: If I take a regular visibly frozen object, where all of its property's values are primitive values, or simple data that cannot hide state (e.g., not functions), then I know I can share it between two object graphs that are otherwise isolated without enabling them to communicate. Likewise, I know I can share primitive values. But private symbols would be primitive values, and so considered "obviously" stateless. Now, sharing the pair of apparently stateless objects between two otherwise isolated subgraphs would enable them to communicate. Where's the mutable state?

KS: That's true.

JRL: That's also true for private fields. If there's a method that has access to the private field, it can modify the field in two different object graphs even if the object is frozen.

MM: I disagree on several grounds:
An instance of a class inherits from its class.prototype, and so is not obviously stateless. Freezing it can serve the normal purpose of freezing --- making its API surface tamper-proof, but not making anything immutable. Only for simple objects from which only other simple objects are reachable, i.e., not functions, does transitive isFrozen imply immutability.
In the private symbol proposal, the private symbol serves as the reification of the "name". As a primitive value, it would pass through membranes unmodified. In the existing private state proposal combined with the existing decorator's proposal, the "name" is reified as an instance of a PrivateName class, which is a WeakMap-like non-enumerable mapping from identities to values. As an instance, it would get wrapped and unwrapped when passed through a membrane. For a wet instance foo of a wet class Foo defining private state #bar, the reification of the private name #bar would be a wet instance of a wet PrivateName class, with wet PrivateName get and set methods. A dry attempt to use the reification of the #bar name on the foo instance, to access it's #bar field, would look like: "dryBarNameProxy.get(dryFooProxy)". Crucially, this faults on the proxy for the name, not the proxy for the instance. The invocation passes through the membrane and the access works, without the membrane ever being aware that anything special was going on.

[MM Notes: The original notes did not capture my point. My revision above is likely more articulate than what I likely said in real time.]

KG: Private symbols are different than symbols though. It's like introducing the reified PrivateName in a field.

TDE: I like the syntax scope in current proposal. The private symbol doesn't have to be so close to the lexical use area. It's important for me to have private state near the use.

YK: The `#private` symbol has to mean private, which makes it easier.

KS: That's a good point—there's a larger collection of proxy use-cases that may be affected by this.

DE: I see this contrasting

CM: I think the interesting thing is how complicated this has become.

KS: I was thinking this morning, "do I really want to get up here and try to turn the battleship around..." But I think it's good to talk about the complexities of this and consider a different approach.

YK: I agree with CM. I don't think we'll change the proposal, but I like that you're thinking about it.

RPY: I interact with people that are new to JS, and it'll be difficult for them to learn.

Joyee: During code review, we tend chose symbols when we need to add private things. We used to use "_private", but they were impossible to deprecate. New contributors still use _private even years after symbols became available. We need linters to fix some of these, but we still need humans to catch it. But we still can't tell people to just use symbols because they're not used to them. If symbols are available now, and people still don't use it, then private symbols aren't going to improve this situation.

JRL: To summarize, The proposal tackles 4 different things: encapsulation, branding, private symbols, private fields. These are also the same issues as with private fields, private fields decided to tackle all 4 problems at the same time, but we don't have to deal with all four of these issues at the same time.

WH: This doesn't achieve encapsulation, which is kind of the whole point of this feature.

JRL: I disagree.

WH: It doesn't achieve encapsulation when the class has more than one private field.

AK: To respond to JRL, we have figured out the current propsal after 6 years.

KS: I agree.

SGN: That's fair, but the requirements have changed since. Did we consider PrivateNames originally?

DE: We have been considering them over several years already.

YK: I do want to defend what DE is saying. It's easy to look at the proces from the outside and distill down their interests. We've incorporated a lot of constraints and I think it's possible to drop some of those constraints, but I don't think it's fair to say each constraint added a full layer. The reason we're asking the question is to figure out what the default syntax should be—we want a smaller syntax.

DE: The proposal was really by KS. I just inherited it from him, and I've only made minimal changes. JRL says we can solve some things later, but I see this as making 4 different choices to same 4 questions. Eg, branding wasn't really a necessary concern, but this proposal just makes the different choice here. The syntax decision is valuable, too, because it makes it easier to learn.

MM: There's nothing we can do to solve this with membranes. We tried, and it was a horrible mess. I'm not at all confident that this is possible. (explains the problem)

JRL: (something I couldn't hear before he was interrupted by MM)

MM: No it is not; when you use the membrane, you reify the private name and they would thus be both on the same side of the membrane.

JRL: We can talk about this later.

SYG: The syntax is really private. Allowing an escape hatch makes thing much harder to reason about.

#### Conclusion/Resolution

- ?


## Class fields and private methods Stage 3 update

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1Q9upYkWnPjJaVc8k9q3U6NekDch8tsz7CgV-Xm55-5Y/edit#slide=id.p)

DE: My goal is to combine these documents into a single list. We have full test coverage (thanks to Bocoup, Bloomberg, Igalia and Google). We have implementations in V8 (thanks to SGN), and in JSC (thanks to Igalia and Bloomberg). For Babel, you have been able to use public fields since Babel 6, instance private fields from Babel 7, static private fields since Babel 7.1. TypeScript private

KG: You said these PRs were out for review, do you have links anywhere?

DE: They're in the slides.

WH: Can we get Stage 4 yet? ☺

DE: My plan was to ask for Stage 4 when we have two implementations.

WH: I was jesting, but I wouldn't mind Stage 4 soon. It's been a long journey.

TST: We're about to start in SpiderMonkey.

DE: There was a big thread on the issue thread about not forwarding to Proxy targets. We decided it wasn't a big issue after discussing with several proxy using-frameworks.

#### Conclusion/Resolution

- Waiting for additional implementations before requesting Stage 4


## Uniform parsing of quasi-standard Date.parse input

(Richard Gibson)

- [proposal](https://github.com/gibson042/ECMA-262-proposal-uniform-interchange-date-parsing)
- [slides](https://docs.google.com/presentation/d/1E4f7hMmJLj09FWq8YEIaATAzIShHpFY37OyWZMf3I5c/edit)

RG: This covers relative dates, local time, offset, time intervals, recurring time intervals, approximate time, etc. (Presents slides). A point about unrecognizable strings—we don't know how to define whether a string is unrecognizable. We're not very precise on things like how many non-millisecond fractional seconds we allow, lowercase designators, etc.

API: I like this proposal, I ask to spec to allow parsing of ":60" seconds for interoperability with other systems generating strings that are consumed by JS. The cases of invalid extended years will already be resolved by the recent PR and Test262 for it that adopt the FF behavior.

WH: Please allow leap seconds for interoperability with other systems that generate time strings.

KG: Will we update if one engine finds an input they must accept?

RG: I'm open to that. We can still improve our position even if we don't achieve this level of consistency.

MAJ: Please do not allow implementations to reject 'Z' in ISO Format. I think that would create a lot of confusion in that space. It's needed because the lack of a `Z` indicates local time format in ISO, so the `Z` is needed to force the date to start at the beginning of the UTC day. Another thing, the Z comes from the historical military codes, but they've never been part of ISO.

MPT: A quick thought on one other format. The timezone bracket format—does that have an offset in it?

MAJ: What MPT's  referring to—something we're proposing in Temporal also—is the extension of the timezone offset followed by the timezone name in square brackets. (`-04:00 [America/New York]`)

RG: It seems a bit too far to implement now.

MPT: The crux of it is that we should implement it so it exists. So I think we should add it into the spec.

WH: Are we ok with having parsing of the same date string change which date it produces over time as DST laws change?

DE: I am hesitant to extend it to Date.parse. We all say it's terrible, and we're trying to get people to use Temporal, and adding new features may make it more likely to be used more.

RG: I'm not convinced that standardizing parsing is the same thing as adding new features.

DE: Well, the data model for Date doesn't have a concept of time zone.

MAJ: It's extraneous information. In my experience, Date.parse is often used for Locale specific parsing. And sometimes because the weirdness that's occurred over the years, people will hack: attempting to put in things like "UTC" to attempt to resemble standards.

MPT: I don't think we can reasonably increase the number of formats that we're rejecting for the most part. For users of Node, for example, people in Node will not be very happy when they get more rejections because V8 was upgraded for cross-browser compatibility.

YK: I wouldn't be surprised if people use February 30th in their apps, and that disallowing that wouldn't break sites.

RJE: Any objections to advancing?

DE: I really support advancing this.

#### Conclusion/Resolution

- Stage 1 acceptance
