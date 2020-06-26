# March 28, 2019 Meeting Notes
-----
István Sebestyén (IS), Kevin Smith (KS), Adam Klein (AK), Leo Balter (LEO), Richard Gibson (RGN), Yehuda Katz (YK), Godfrey Chan (GCN), Philipp Dunkel (PDL), Brian Terlson (BT), Aki Rose (AKI), Michael Ficarra (MF), Chip Morningstar (CM), Waldemar Horwat (WH), Kat Marchán (KZM), Tierney Cyren (TCN), Shelley Vohr (SVR), Myles Borins (MBS), Jordan Harband (JHD), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Randy Luecke (RLE), Daniel Ehrenberg (DE), Mike Samuel (MSL), Joyee Cheung (JCG), Till Schneidereit (TST), Shane Carr (SFC), Patrick Soquet (PST), Peter Hoddie (PHE), Kyle Verrier (KVR), Mattijs Hoitink (MHK), Keith Miller (KM), Michael Saboff (MLS), Jordan Gensler (JGR), Mark Miller (MM), Joshua Peek (JPK), Mu-an Chiou (MCU), Guilherme Hermeto (GHO), Sathya Gunasekaran (SGN), Felipe Balbontín (FBN), Jory Burson (JBN), Shu-yu Guo (SYG), Joe Sepi (JSI), Chris Hyle (CHE), Justin Ridgewell (JRL), Rob Palmer (RPR), Keith Cirkel (KCL), Robert Pamely (RPY), Henry Zhu (HZU), Daniel Rosenwasser (DRR), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Domenic Denicola (DD)

Remote:
Ron Buckton (RBN), Kevin Gibbons (KG), Gus Caplan (GCL), Valerie Young (VYG), John-David Dalton (JDD), Gabriel McAdams (GMS), Ben Newman (BN), Ross Kirsling (RKG), Frank Tang (FYT), Igor Minar (IMR), Miško Hevery (MHY), Brendan Eich (BE), Rick Waldron (RW)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/03.md)


## Decorator-based extended numeric literals status update, and numeric separators for Stage 3

(Dan Ehrenberg (DE))

- [slides](https://docs.google.com/presentation/d/15ACTfTRcyZ4kKLwKCIvZ9gCWuJGqO3eU_s_v83O4zGo/edit#slide=id.p)
[Proposal Numeric Literals](https://github.com/tc39/proposal-extended-numeric-literals)
[Proposal Numeric Separators](https://github.com/tc39/proposal-numeric-separator/)

DE: (Presents slides)

WH: You mentioned you'd allow decorator arguments. How would the syntax for that work?

DE: Yeah, so I can see how this is a potential grammar issue, but I haven't thought about it thoroughly. Maybe it will help if we have spec text. I think this proposal makes sense even if we don't have arguments.

WH: I agree, decorator arguments would be ambiguous with a call expression.

WH: Next syntax question; why do you forbid whitespace between the number and @ suffix? Why not allow whitespace there, as long as it's not newlines?

DE: We'd have to disallow newlines. My intuition is when you're writing a numeric literal, you don't put whitespace. I think whitespace would make it ugly.

WH: But I don't see the `@` sign to be part of the numeric literal. When you write a number and a unit in general prose (for example "3 kg"), you usually put a space in between.

DE: Another syntax I've considered is the unit preceding the quantity, which matches the decorators proposal.

WH: That would be technically consistent but turn people's brains upside down.

DE: I'd be open to both those changes.

WH: How would the caching here work when you see a numeric literal in the program? When does it get evaluated?

DE: This is something we revisited—there was PR a year ago, originally based on template tags, then it was based on the source position or the parse node. I'd like to follow what we do for template tags. Not all decorated template literals in the future will...

WH: I'm unclear as to what the difference is between the two things you're talking about.

DE: Here's the syntax you can apply to template literals, and in potential future proposals, what we'd do is make a built-in module that exports BigInt and the suffix @n. So you'd do `1 @n` if we made it built-in it would probably not be the same here. It's only related to the general decorator—not a general thing as the decorated template literals.

WH: Okay, so this expansion is cached? I thought  "`1234@i` → `impl(Object.freeze({string: "1234", number: 1234}))`" on the slide was an exact equivalence, but what you're saying is that it also has a hidden step that caches the frozen object.

DE: Yes, it's cached.

WH: Looks good.

DE: Thank you.

JHD: It seems like this depends on decorators, which is a Stage 2 feature. And it lacks spec text, which is a Stage 3 requirement.

DE: I'm not proposing Stage 3 for this feature.

JHD: I misunderstood, it seems this is a generic alternative which can unblock the `_` for separators.

DD: I'm curious to get a sense of this advancing before decorators do. If decorators never advance, would we be able to have literals in this form.

DE: We could say that if decorators never happen, we could use the `@` sign for numeric literals. There is less demand objectively for extended numeric literals than decorators.

DD: That didn't answer my question. Could this advance without decorators? Do you see this ever advancing without decorators?

DE: As a member of the champion group of both proposals, I do not see advancing this before advancing decorators.

DD: That's good to know. And sad.

DE: When I started looking into this space several years ago, it was clear there were scoping issues

DD: Trying to gauge my comfort level of going this direction if it's related to decorators, vs. going with underscores.

DE: We don't need quite this level of confidence. There are still several directions we could go in that do/don't require the underscore.

DD: I'd like to see that explored more, if we're deciding whether we should be blocking this on stage advancement.

YK: I think numeric separators are pretty important—they're a feature I'd really like to have in JS. We don't need a crystal ball to predict the future about whether we can make progress on these now that we have at least one plausible direction.

DE: I share your opinion of priorities.

YK: There's a lot of precedent in Web Platform for the numeric separator being connected to the unit, i.e. in CSS 1 pixel is written as `1px`.

DE: So I think, `1px` would be a lot of people's first choice for the syntax

YK: About space, in CSS, I think it's part of the syntax there for not allowing whitespace in the middle.

DE: CSS syntax is its own thing. I'd think there's not a lot of precedent for it being adjoined in other languages.

KCL: What happens with very large numbers?

DE: The number and its original string representations are both passed in as properties of the frozen object. This is intended to handle both cases.

KCL: So there's a potential for string and number to have two different values?

DE: Yeah, that's the point

KCL: Great

RGN: I'd like to second YK's comment and praise the new sigil and alignment with decorators, because they share the same scoping concerns. Even if this proposal is not actually implemented as a decorator, I think it would still benefit from alignment. I'm very much in favor of this change.

WH: What do you see this being used for? In particular, what will a decorated numeric literal typically evaluate to?

DE: One use case is CSS units—to make more ergonomic syntax for them. At some point we'll also want operator overloading so you can do arithmetic on those, but this proposal makes sense without operator overloading as well.

DE: What you see in code samples are the units bloating the code. The caching also makes sense for that use case. Additional numeric types would also benefit from this.

WH: Let me get to my question. You say this proposal makes sense independently of operator overloading. But you can't have negative numbers without operator overloading.

DE: Oh you make a very good point. We should probably resolve that at Stage 1.

WH: Operator overloading is a fine answer for how to generate negative numbers. You may also want to apply this to Infinity, etc. I'm not sure what the answer is to that.

DE: I guess negative infinity is the only problem. Positive infinity would work.

WH: `Infinity` is an identifier, not a numeric literal. So the question is whether we want to be able to decorate identifiers.

DE: Hmm. These are interesting things to think about. Not a reason to block it from Stage 1.

WH: I agree. I just wanted to raise issues for us to think about.

DE: Any objections for blocking numeric separators for Stage 3?

WH: I approve of it; you have some minor omissions in the grammar which I filed an issue for.

#### Conclusion/Resolution

- Numeric Separators: Stage 3 acceptance


## Error stacks for Stage 2

(Jordan Harband (JHD))

- [proposal](https://github.com/tc39/proposal-error-stacks/)

JHD: (presents update)

MM: Did the proposal originally have it (span information?) required?

JHD: Yes, as currently presented, the proposal has it optional.

MM: The display name property?

JHD: Of the function from which the exception is thrown from. So there are things about that, but a fresh survey needs to be taken for all the browsers.

JHD: (continues presentation)

JHD: Does anyone have thoughts on an alternative of how stacks can be specified and meet the constraints I specified?

AK: There's definitely some confusion about scope in this proposal—there's a lot of machinery about stacks, but it doesn't say what's in the stack.

JHD: That's intentional. The scope is supposed to be the existence of stack frames and stack strings, the machinery to access them, and the structure they have. I have yet to write in the spec that has hand-wavy implementation-dependent prose.

AK: Can you say what the useful part of this spec is? What does this proposal make better?

JHD: You will be able to get a structured format for the stack without parsing a string.

AK: But if that immediately is going to be very implementation-defined, then I wonder if that will allow for even more interoperability issues. V8 recently started exposing async stack traces in some places. I would rather see a proposal that puts these two together.

JHD: OK.

DD: Seconding AK, I think the split into let's make a bunch of non-interoperable stuff to the user and expose a new way for non-interoperable to be accessed. This is a very concerning way about going about this.

JHD: For DD and AK, are you suggesting that if I added constraints on the contents, that required the intersection and allowed the union of web reality, that you would consider it more complete for Stage 2?

AK: Then it would be something I could look at and determine the merits of it. The really interesting parts of it are interop.

DD: I wouldn't phrase it as constraints, I'd phrase it as a difference between new functionality and existing functionality.

JHD: So you're proposing that the getStack method be separated? So would you be happy with the spec accessor, currently in Annex B?

DD: New functionality introduces all these new concerns around interoperability.

JHD: So you'd like Error.prototype.stack accessor in Annex B that also restricts the content?

DD: Yes, that specifies what browsers do.

YK: This has shades of the conversations from yesterday. The things that this addresses are not in the top 10 of the difficulties of looking at the stack.

YK: So yesterday, the implementers said they would be happy if there was not interoperable behavior in date parsing, they would be happy to migrate. Maybe I'm overstating that, but I'm wondering if it's also the case if someone were to make the stack more interoperable here, if that would be interesting to implementers.

JHD: That depends on what changes they'd be willing to make, which requires research.

YK: If the answer's yes, I think there's a lot of value in doing a spec that accomplishes the interoperable aspects. As someone who works with stacks in tooling, I would find that immensely valuable.

JHD: I see the value of the current proposal as value not on its own but the foundation it creates for future proposal like hiding stack frames, adding information to the stack frame, and so on.

YK: Right, and I agree with what DD said yesterday, if we add a bunch of new operators that are not interoperable.

TST: I agreeing with fully specifying interoperability is the high-order bit here.

DD: (topic: Not willing to advance to stage 2 with a System object as a "major semantic")

JHD: I would have liked to have heard this feedback earlier and I don't want to put in the effort to do this if I'm going to be blocked again when I come back.

DD: I think this feedback was given earlier, but in terms of Stage 1 concerns. Introducing a new system object and all this talk about Realms is not trivial, so I think we should not take it lightly. This is a major semantic decision, and absolutely a Stage 2 blocker, as far as I'm concerned.

MB: I wanted to respond to what JHD said. I don't think this is new feedback at all. I said the same thing after MF's presentation [at the January 2019 meeting](https://tc39.es/tc39-notes/2019-01_jan-29.html#security-implications-of-errorprototypestack). There are ways to resolve the problems he outlined in the current landscape, using non-standard but de facto standard methods. We should focus on specifying those before we add anything new.

JHD: Maybe I misunderstood, but I got the impression from Stage 1 that everyone would be super happy if the contents of interop were specified, not that it was a blocker for Stage 2.

MM: With respect to the 2 issues that came up. When I started the proposal with JHD, we purposefully underspecified. I did not imagine we could get engines to actually agree with each other on the precise contents of the stack trace, or agree with wiggle room, because there are so many tuned implementation tradeoffs. The actual stack traces from the different engines—from my own probing—differs wildly. If the engines represented here would like to see a (mostly) deterministic, I would prefer that to what we wrote. I would prefer to have a more precise spec, so I would love to facilitate feedback from the various browsers. That includes things like nested evals, how source maps affect things—lots of things that influence stack frames. How to phrase the wiggle room to deal with the possibility of tail calls. With regard to the systemy-object—DD expressed his opinion clearly, he's not willing to advance with the systemy thing in it, but I'm not willing to allow my own proposal to advance without it. However, the means of quarantine that satisfy the constraint are a design issue. We started with one, the system object. JHD came up with one, the unsafe-globals whitelist. During the presentation, I remember another one I haven't written down yet. As we move forward toward built-in modules. We can bifurcate them to separate user and system modules. getStack and getStackString can come from system modules. But some means of quarantine is a hard requirement.

JHD: So, unless the engines are willing to expose their stacks to save me research time....

DD: They're all open source!

JHD: "It's open source" is hardly the same as "it's easy to understand a large foreign codebase". That's still a lot of research to do.

YK: There are mercenaries for hire.

JHD: There's still a tremendous cost for that.

TST: We can help with that.

JHD: I'm not willing to invest my time and money just to find MM and DD's constraints in a deadlock. I'd like to have confirmation from people willing to hash this out so it's not as risky to waste my time, or the committee's time in the future.

MLS: How do the stacks wildly diverge? Can you describe your study?

MM: I'm not sure what counts as a study, but I wrote code to probe it and ran code on various browsers. It's clear that there is very different information being given.

MLS: Is that available publicly?

MM: It's not available public now, but I'll make what I have available public.

AK: It's not that, if this fully specified, that I would say this advance. It's if we did work on error stacks, I want it to say what is required, what is implementation-specific.

JHD: You're not necessarily saying that you want to this concretely defined, you want to see research?

AK: What does it allow engines to do, what does it forbid them to do? That's what I want to see in the spec.

JHD: This proposal isn't interested in adding constraints to engines—it wants to enable them to continue to do the things they already do.

YK: So I carefully avoided asking the question MM asked harder, which is if there's a commitment to do it.

MM: I said "are you willing?"

YK: I really suspect that if someone really wanted to do a project to work on this spec, either you'd find there is no interest from implementers or indeed a lot of interest from implementers. I'd really like to see you pursue that though.

JHD: I thought creating this proposal was doing that, and my impression from that was that there wasn't much help to be had, but it sounds like as I get deeper into this, I think there is interest from implementers.

YK: I don't think you should read that much into Stage 1 presentations. When you push toward Stage 2, you get more feedback. That's normal and I think that's what's happening here.

JHD: OK.

MM: The intersection right now is tiny, therefore the goal of codifying the intersection should be really different from the goal of specifying interoperability.

JHD: I assume it will definitely require more work from engines.

SGN: V8 recently added async stack traces. If we specified the contents as others have been asking, would it mean we wouldn't've been able to add that?

JHD: Having not delved into what V8 does with Async stack traces, I'm not sure, but that is definitely a risk when implementers add changes in general. But I'd certainly not like to make it harder for implementers to make changes.

SGN: Do you think it's possible to have a stricter specification and still have that be possible?

JHD: At the moment the takeaway is to figure out what would be an interoperable specification and what changes you'd have to make to enable that. It sounds like I'd be pairing down the user-visible aspects to do that.

SGN: What you said applies to the existing algorithms, right?

JHD: Whether I can use what's in the spec text is irrelevant—what I need to do is define what the various engines do here.

SGN: Right, and it would not preclude future additions.

JHD: Yeah, so I would have to get a good sense of what changes V8 made to add async traces and what room they'd need to have to expand in the future.

SGN: That's good to know.

JHD: By specifying the contents, to make changes to the stack-frame we'd have to then review future changes to stack-frame on this committee.

YK: People can do a lot of experimentation behind flags on the one hand, but on the other hand, it's also important for standardization to continue. I am very interested in this proposal continuing and just seeing this as something that's going to slow the world down is not quite right.

TST: We tried a few years ago to align the format of our stack trace with V8's, and it was not possible. We broke internal code, extension code, but I'm 95% sure we also broke code out in the wild.

JHD: Were those examples also done in Chrome?

TST: No, the code does engine detection. It's impossible to fully align what the stack-getter returns in all engines.

JHD: So the implication is that you may not be willing to make changes that cause that breakage with the purpose of specification?

TST: Correct. We tried and the costs were too high.

JHD: So we would have to leave wiggle room?

YK: Or we could put it in a new place

TST: The format of the stack-getter cannot be trivially changed. And yes, as YK said, you can put it elsewhere.

JHD: So you would be okay with an accessor but not modify the string.

TST: For what it's worth, for other engines, we can change the format if we put it in another place trivially. I would be shocked if other engines could change their format in place easily.

MM: Are you TST talking about the textual format in which the stack is rendered, or also what information is actually being captured independent of how it's rendered?

TST: Back then it was purely about the representation, since there weren't meaningful differences (this predates async-await). Since Chrome added async stack traces, I believe the format is fairly similar.

DD: MM said earlier maybe we can specify with some well-defined wiggle room, but My intuition is that there is value in things we could lock down, like string name vs. name, source maps, eval, etc. I think there would be some flexibility for adding async stacks. I think the value there is huge.

MF: All these topics are related—after hearing TST's comment, are we specifying just the structure of the stack frames, or a textual representation of the frames?

JHD: No, the textual representation was tightly defined. The string would be tightly constrained. The individual string contents, the difference between end line, etc., would be implementation-defined. The idea was to give flexibility to implementations to sometimes have or not have stack frames, just that if they were there, that they follow a format.

MF: Then I share TST's opinion, that a sharing a textual representation of the frame is unlikely to be possible on the web.

JHD: My idea would be that we would give a choice of several formats, based on web reality. That's the only way I could invision hardcoding in the spec something that allows for these several formats.

MLS: Wouldn't you want a standard format for the stack frame?

JHD: We could make an ideal format, and hope browsers would migrate to that, or we could put the alternative formats in Annex B.

YK: I think the conversation yesterday about Temporal and Date was useful. Although it would be nice to do patchwork on broken API, it may be better to make a new thing. You should check offline if the implementations would be interested in doing something like that.

JHD: The thing you're suggesting is the possibility of exploring something that isn't `.stack`.

YK: Something like that. Maybe there's something I haven't thought about.

JHD: Make a new good thing instead of improving the existing thing.

DD: (groans)

WH: It's hard for me to parse what the proposal is saying. It's built around and reads ErrorData which is not defined anywhere in the spec.

JHD: It's Stage 1, so it's not required at this point, but there's an open issue for that. My idea is to formalize that in Stage 2.

WH: It's kind-of key to the proposal.

JHD: My hope is that since all algorithms have a stack already, they already have an algorithm for it, and we defer to that, but sounds like from today that this is not viable.

MM: There's been several mentions of async and I'd like to clarify that there's a number of ways async can come up in stack traces, such as async/await. Can someone verify that?

TST: Verified.

MM: The other form async should be remembered as a feature concern, but something that should be kept out of this proposal is the causal structure that one turn causes another. In FF nightly, there's deep stacks that are many turns deep, and FF has wisely chosen to keep them out of mainstream FF.

JHD: V8 I think has something about long stack traces. Or maybe that's a library I'm thinking of.

MB: V8 has [async stack traces](https://v8.dev/blog/fast-async#improved-developer-experience).

TST: I have to retract my verification, I misunderstood your question. When we talk about async stacks, we have to keep track of the stack frame where the await happened. And record whether a promise is pending. In Nightly, we've been doing that unconditionally, and we should change that because of the impacts it has on benchmarks.

JHD: Does that also apply to setTimeout?

MM: Clearly I'm going to add to our burden. We need to really think about how async concerns should show up in this proposal, and to what degree they should be cleanly separated into a later proposal.

JHD: Given that the variations in the browsers implementations, I think we need to account for it and do so cleanly.

JHD: To restate for the benefit of the notes, I plan to: 1) do the legwork to figure out what browsers do in terms of the contents of the stack. 2) explicitly enumerate the similarities and the differences. 3) to attempt to write a spec algorithm that can allow them all and mandate one of them. 4) potentially Create a brand new structure including a preferred output. 5) ask browsers and engines that would need to make changes, what changes they may need to make.

Given the feedback from TST, I may have to write the stack frame in a way such that there are no changes. YK's suggestion is to also explore an alternative that is not burdened with the baggage of `.stack` assuming browsers are onboard. Additionally, that I would be forced to address the same concerns with the system object. I'm getting the impression, that I'd be well-advised to avoid that in this proposal.

MM: You're also getting advised the opposite.

JHD: Yes, I'm getting conflicting advice.

I'm looking for anyone who wants to co-champion. I think we can come up with a good proposal. But it requires a time commitment that one or two people may not be able to meet.

#### Conclusion/Resolution

- See list from JHD above.


## Dynamic import() for Stage 4 (in June?)

(Daniel Ehrenberg (DE))

- [proposal](https://github.com/tc39/proposal-dynamic-import)
- [slides](https://docs.google.com/presentation/d/1suZ5vfthSnB8mneogiR7Y-5FcXqbQiR9MKEvJUlIRsc/edit#slide=id.p)

DE: (presents slides). I'd like to hear if there are any concerns for approaching Stage 4 in June.

MLS: What Stage 4 criteria does Dynamic Import not meet yet?

DE: MM raised the concerns, so maybe it's best to ask him?

MM: Stage 3 is the time to give feedback of implementation conflicts. The thing was originally allowed to advance to Stage 3 with the understanding that the virtualization issue would eventually be solved through hooks in the realm API. DE and I talked and the realms group was planning of having a discussion before June to determine whether there was a conflict. I did read the proposal carefully. I think there's an 80% chance that the proposal as written will go to Stage 4. But I want the realm committee to look more carefully.

MLS: It seems to me that this could still advance to Stage 4 and if there are any changes we need to make, we can make them later. Everyone has implemented this already.

MM: There have been many things in the past where everybody's implemented it but there were still things that needed to be changed. Because everything was implemented we knew that we still had an opportunity to fix the edge cases.

DE: There have been many changes to standards that were already standard and edge cases that were already successful. I'd like to avoid focusing on the standards train. I'm encouraging people to look at the editor's draft, and that has worked well so far.

KM: Given that this has been shipping in browsers for so long, if there is a problem, there's probably not going to be a way to fix it. If we do find that there's a problem, is the answer going to be that we change this spec?

MM: Until we actually find a problem, I can't know what we would need to change, but hypothetically yes. These things can happen after Stage 4.

KM: It's a silly discussion to have now since we don't know what happens in the next two months.

DE: The original plan was to go to Stage 4, but it seems like it won't be a problem to wait 2 months.

KM: I'd feel very differently about that vs. making a decision now.

BE: I don't see a problem waiting two months, if there were an indefinite delay, that would be a problem, however. I also want to make an appeal for some design thinking where, if dynamic import has the right user interface, then the realm API will have to cope. I don't believe there's much chance of a hard conflict where's security's at stake. Whatever happens, if dynamic import is winning for user interface, then we should make whatever changes we make to the realms API that we need to make. I think that everyone else covered what I want to say here—no need to rehash it—MM's 80% confidence now is great and we bought some time to figure out the remaining 20%.

YK: From the perspective of trying to track the ecosystem in the framework, we tried to not include anything by default in Ember that wasn't stage 4. So we really wanted to only accept stage 4 features, but it's becoming harder and harder to stick to our guns on stage 4 because, people keep asking us more for Stage 3 features and it's becoming frustrating to determine how risky supporting some of the long-awaited Stage 3 features are.

DE: To summarize, to the extent that we have more leverage to change things at stage 3 than stage 4, we lose that if we wait too long.

TST: MM said earlier that Stage 3 is the time for addressing these concerns. That is explicitly not the case, Stage 2 is for that. This difference is extremely important because otherwise speculatively the V8 team would have the opportunity to choose not to implement things unless features are very late Stage 3. If we don't have feedback until that point, however, it's very dangerous for us to review proposals that haven't collected such feedback. So I think it would be dangerous precedent to say that we change Stage 3 proposals for any other reasons.

DE: Given the feedback from the committee, would it make sense to promote to Stage 4 at this meeting?

KM: I think we should strongly consider it. I agree with what TST was saying. It sounds like MM is not happy with that. But I agree we really should not have that precedent.

DE: Another way to look at this is, we've heard a signal from many people that we need to spend more time reviewing features at Stage 2.

MM: I agree with that positive sentiment whole-heartedly.

YK: MM earlier said "engines already implemented this, it's on the web". That seems true, but it's not clear to me why you should care about the differences between Stage 3 and Stage 4.

DE: There's a big difference—something can get to Stage 3 without any implementations.

YK: Sure, what's the reason why you're OK with that though?

MM: The more the feature is used between now and Stage 4, the more that usage gets entrenched.

YK: The opposite is also true, we have been waiting so long that the features are eagerly trying to move ahead.

WH: Should the agreement MM mentioned earlier to advance to stage 3 pending resolution of the concerns not have been made?

DD: That doesn't match my recollection.

AKI: I wish we took very thorough notes in the meetings.

YK: We do.

WH: It's very unfortunate if we keep getting into such misconnects. It makes me very uneasy.

DE: MM was saying it wasn't clear at the time dynamic import came out that the Realms proposal trailed so much behind. That's sort of how I see the disconnect here.

TST: I meant to say that if this agreement had been made, that was a mistake. I also want to say there's a bit of an odd precedent with separators where they were demoted from Stage 3 to Stage 2, where implementers said we're not going to fix this until we figure it out.

LEO: Just as TST has said, we should be consistent in our communication how stable something is. I possibly missed that there was any blocker, but the work I did was in very good faith and I'm sure the implementers are very good at following this too. It's difficult to follow just by details in the notes and we should be very clear in our communication about stage advancement and demotion. That communication can vastly be improved and should affect any other proposal.

DE: Thank you for the consensus for the numeric separators and I'm sorry for the delay that caused.

#### Conclusion/Resolution

- Committee agrees to the next steps shown on the final slide.

Reviewer Note:
This conclusion recorded by "All Anonymous Users" is completely useless—the "final slide" in the presentation doesn't offer any "next steps". (RW)


## Top-level await with a vengeance

(Myles Borins (MBS))

- [proposal](https://github.com/tc39/proposal-top-level-await)
- [slides](https://docs.google.com/presentation/d/1Jz86ztxFnNVwch50GEjmTPt1IrA0ZVBqkpzMsiSLF20/edit#slide=id.p)

MBS: (presents slides)

MM: What are the existing semantics of an async-await import cycle?

MBS: I believe, if you have two dynamic imports after the dynamic export, then you're fine. The problem is when you have a dynamic export that depends on a dynamic import.

KM: If async module doesn't block does event loop turn?

DE: The semantics are that if you have a top-level await, that might put things on the microtask queue, which runs before the event loop. If you await setTimeout, that goes on the normal event loop, which can continue from there with module loading.

KM: If you have a module that goes to the event loop, and then I include more things, does that happen during a microtask turn?

DE: When I say "microtask" and "event loop", I mean things like promises and HTML.

KM: I just want to make sure we don't go to the event loop because I happen to be importing someone who goes to the event loop.

DE: I did some local benchmarks about the promise resolution impacts this could have. It looked like it would show impacts somewhere around 50,000 modules (on that order). Frankly, if you have that many modules, you'd also likely have other performance issues.

MBS: (continues presenting)

YK: I strongly agree that this is a problem worth solving, Node already has the sync vs. async split and is painful. I've always been excited about this syntax change, because if you're in the top level you can just use await now which is awesome instead of mkdirp.sync.

MBS: As Node goes and recreates a lot of our APIs to be promise-based, it alleviates the burden on us. With top-level await, Node could design all of our APIs with promise first-class. I also want to make sure that it's clear that this runs in modules but not scripts.

YK: There's not a semantic reason script async doesn't work?

DE: There's a grammar reason.

MBS: There's nothing in what we're doing that would limit that work.

MM: Where are implicit interleaving points? Meaning, in the existing language, we have a very nice invariant which are all interleaving points marked with "await" or "yield" (a point with straigh-tline code, but at the interleaving point where code may run stuff above or below the interleaving point; a zalgo issue). When Module A does an import of Module B, and Module B has a top-level await, and then Module A has side effects, do the side effects in A happen before the side effects in B?

DE: Imports are always hoisted, so this is always happening at the beginning. Synchronous graphs are held synchronous, then once you hit async, everything happens on the next tick following up the graph. I think it's in a very regular and predictable way.

MM: I'm satisfied.

DD: This is a question for MM, there are more interleaving points other than the ones you mention: layers between script tags, for example. Do you consider import statements to be an interleaving point?

MM: When you say "between import statements", you mean, module A imports B, does side effects, imports C, does side effects. I think DE's question satisfied me with side effects that are in one module text. B and C are both not async modules,  the initialization work that B does and that C does, and I also want to stipulate that this is the first import of them, the need for that qualifier makes me much more sanguine about this.

DD: Let's follow up offline.

YK: Generally, there is some need to make the execution order comprehensible for some variants. We believe A should happen before B, for example. There's some way in a big module graph some things run before they're encountered. Did Module A really run before Module B, is really a question you shouldn't have to ask yourself a lot.

MBS: I think one of the things to keep in mind is, when we're talking about execution, it's about the instantiation of the symbols being exported. This happens a lot in post order traversal. People think a lot about Node's module, which is synchronous execution of the whole graph. The execution we're talking about is really just instantiating the symbols. Node won't even run the modules until the symbols have been exported. The mental model many people have, it's hard to hold a mental model of the order and know what happens. You may have some idea of instantiation, and the side effects of cross-module imports, but with the things we've done to allow async graphs to run synchronously, we've enabled that behavior to exist.

YK: Basically you  have the data that I need because I need it.

MBS: We need to be pragmatic that people writing the code expect that, and we now need to maintain the expectation without people needing to change their mental module.

JHD: Can you conceive of any way, that doesn't defer to tooling, to *prevent* my module from suddenly becoming async because a leaf in my graph added TLA?

MBS: I've thought about this. I haven't come up with a solution that doesn't become a refactoring hazard.

JHD: How so?

MBS: For example, database initialization. (gives example.) So it basically requires that the root be present.

JHD: In most cases you wouldn't put this; it's only when it's important. The subgraph has to all be in sync. The tooling add could be adding a linter rule, for example. Ideally, there would be some warning in the runtime.

YK: Would it block you if the module had previously been processed and had a top-level await?

JHD: If we defer decisions on this, we defer to the ecosystem. I would rather not force the ecosystem to parse the entire dependency graph.

YK: I don't know what it means for a module graph to become asynchronous.

MBS: Once you add a top-level await, that flips a bit that says that this module is now async. That module and all the module's parents up to the root would be synchronous.

YK: What does it mean for the module to not be synchronous in the first place?

JHD: At the moment, if I had a dependency graph, that does not alter the behavior with the addition of top-level await added. What alters it is if something below it in the graph becomes async, I become subject to this alternate state of timings and deferrals.

JHD: I would like if you could put a token to enforce timing strategy in HTML modules.

YK: I would like to be involved in this conversation as well. It seems good to discuss offline, but want to be clear as well. I think it's already quite hard to reason about to begin with.

JHD: To be clear, the specific thing I'm responding to is that when we say, "tooling can fix this," sometimes that's satisfactory, but I think in this case it's insufficient. We have a responsibility of specifying some behavior in the runtime.

DD: I think some of the discussion started hinting at that controlling the execution of your module graph. There's discussions with HTML modules, etc., and you can also have script type = module async. The ways to execute scripts in module-scripts is very specific and I think any way of controlling their execution doesn't make sense at the level we're talking here.

DE: What hosts do, like HTML, is documented in the spec. WE can see what asynchronicity it can insert. The asynchronicity can be addressed well by tools. This isn't to exclusion of a language-level construct, but the current tip of the tree of the ... when you parse the module graph, whether it's async or not. People have been ensuring guarantees with type-systems which are popular and do sort of non-local analysis that works, and I think that all makes sense to apply here. Given that we're talking about something that's only a check, and it's a check upon static of loading the program, it's hard for me to understand why this needs to be in the language to start. We can introduce things into the language from early on that makes sure we don't introduce invariants into the language.

RPR:  We've said that if we have a long module chain, and the base of that uses top-level await, we are not going to synchronously execute all the parents but have the microtasks at each level. What message are we saying to bundlers (bundles that do function inlining) in this scenario. Because in the optimum case, you may want to inline everything except for the async child, so that you collapse everything into a single module. It seems like the only thing that you can tell them is to not do that anymore because they'd have to replicate those async/promise ticks.

MBS: I have some thoughts on this, but I think a lot of the techniques used by bundlers exist for the script goal, so as we introduce web assembly modules and HTML modules, we're faced with the exact same problems. I am not just trying to say "hey, put a tool on it" but when we look at web packages, we need to signal this to the bundler. I think that is the real solution. What we really need are new bundling solutions at a platform level that allow bundlers to give us the actual execution order that's expected.

DE: I want to push back on this phrasing a bit—we have made in this proposal something that _is_ implementable by bundlers.

DE: We've discussed with people on webpack. We've incorporated their feedback. I don't think this proposal should wait on webpackage. If we had something with synchronous reactions, like RPR suggested, there might be graphs where module modules import the same module. It's not as simple as straight inlining. Modules is how we deal with that. We've talked with rollup and webpack on this proposal. The feedback we've gotten—while some people prefer the import await proposal for semantic reasons—they're all still implementable according to them. I think we might want to diverge from what tools do today if we hit an impasse. We have not yet hit any such edge case that suggests it is not possible for bundlers.

YK: What RPR was talking was static linking. I care about static linking. As DE said, that's also something the champions of this proposal care about. What I think is not going to be possible is telling bundlers that they don't have to think about async at all. I personally hit this problem when trying to integrate WASM into a bundler: I basically had no way of blocking the module graph on getting the module loaded and executed. It was literally another module and I couldn't block on it. Bundlers just have to, and are, updating themselves to allow for asynchronicity in the graph. Being really explicit about where that's happening will actually reduce the number of places where the bundlers have to deal with it.

DE: About what static linking is, and what promise ticks are, these are all consistent. It's very important to be able to bundle things in one file, and this proposal allows for that. We don't need to add new primitives to make it work, such as for a job queue checkpoint, which isn't accessible to JavaScript. It doesn't mean that there are some Promise.then or Promise.all calls that are emitted (?). I don't think given current engines that this will be a significant amount of performance overhead. I've been thinking a lot about this.

MBS: I think about my mental model. Thanks DE for clarifying that we don't need such a hard fork to deal with this problem. I think YK also clarified that as well. It's something people need to be aware of and work on, but I apologize for making it seem like it was more discordant with the proposal.

WH: You just described a way of doing parent-grandparent bundles which preserves semantics while not including the possibly async children. But then the parent-grandparent bundle has to decide if it will include a top-level await or not without necessarily knowing whether the child included a top-level await or not. It can conservatively include await, but that would make such bundlers always virally async. Is there a way to avoid that?

RBR: Bundlers can sort this out, but the consequence is by not inlining (doing this internal wrapping), and then to WH's point the consequence is that today, people do this kind of bundling before they have the whole app together. For example, React condenses its graph of modules before it releases. If you're doing this local bundling and you don't know what your children fully are, because after it gets condensed it gets recomposed, I think this causes all bundlers to have to assume the worst in case.

DE: This proposal doesn't permit that either. I'd like to know more about this use case because it hasn't come up yet. The assumption was that you know the bundle graph all the way to the children.

RBR: Basically this is the case where you have a long module chain and you're working on just the middle of the graph, which is sort of complex and a consequence of the choices.

MBS: Stories would be helpful. If we go through user journeys, we can discover more about this. It didn't come up in discussions with webpack and rollup.

WH: On another topic, what is a "top-level await", exactly?

MBS: A top-level await is the ability to call await outside an async function at the top level of a module.

WH: Can you have an await in a non-async function?

MBS: No.

WH: I think the proposal says yes, although it contradicts itself. It states that `await` is allowed when Module is the goal symbol.

MBS: It can only be at the top level of the module itself. Not in any functions, arrow functions.

WH: How about a decorator definition?

TST: Can you just say if this is allowed it's a bug in the grammar?

MBS: Yes, It is not allowed.

DE: Inside a decorator parameter, yes, definition, no. Do you see errors in the draft specification?

WH: Yes.

DE: OK, let's work to fix the errors offline.

MBS: Would you like to help review?

WH: I'm not signing up to be a reviewer of the async turn logic, but I would be willing to help review the spec text of the grammar.

MBS: We have the intention of doing a stage advancement in June, we'd like clarity on 1) JHD wanted to know if there's a flag to disallow top-level await within subgraphs (or describe why we will not allow that). 2) WH had questions about partial bundles where you don't know your children. 3) WH also had questions about the grammar and forbidding certain pieces of grammar that are ambiguous.

#### Conclusion/Resolution

- No further issues other than the three above.
- Stage 3 reviewers: KS, JSI, WH (for the grammar only), Georg Neis from the V8 team


## WeakRef update (currently a Stage 2 proposal)

- [proposal](https://github.com/tc39/proposal-weakrefs/)
- [slides](https://docs.google.com/presentation/d/1qoCPWdCCysjt3IzqKm_I8qcF3jxP6-n2Yk4nYU27IL0/edit#slide=id.p)

(Sathya Gunasekaran (SGN))

SGN: (Presents slides)

WH: (Asks several questions about the API)

WH: I couldn't figure out the API from the presentation. There is no explanation of the function parameters or behavior.

TST: Maybe it helps to give an example.

WH: The example had all parameters being `{}`, which wasn't informative.

SGN: I'd like to point out that this isn't new functionality.

WH: The API is new and core to this proposal.

TST: (describes API and how we got to it)

SGN: (continues presenting)

AK: There seems like there's a problem with exposing WeakRefs outside of SES realms. It doesn't make sense to me whether TC39 thinks SES needs to be fully compliant. There's already a lot of places where SES deviates from EcmaScript.

MM: What AK is saying about "SES is not ES-compliant" is correct. We're going to add a proposal to create a way to write SES-compliant JS. The issue is that it's an explicit goal that SES be compatible with JS written to recognized best practices, including not modifying primordials. That's been a goal since ES5. None of that gives a hard-and-fast answer to your question. The issue here about the covert channels—it's not a SES-specific issue. We don't consider meltdown/spectre to be SES-specific issues. You can have simply separated realms not using SES.

TST: I think it's a valid discussion to be had whether SES concerns (or other security concerns that not all committee members think are important to address) are blocking issues. We have a consensus model.

YK: I feel this is derailing into a zero-sum situation. There are a lot of reasons you care about these situations. MM likes making arguments about security. In this case, I often have to write universal JS (having no understanding about the environment in which it runs) and maybe there are theoretical arguments, but in reality, ECMA-262 is the right thing to target if you're writing compatible JS. That is how the community works, and I think for universal JS, there's a question on how much you can rely on when you're reading out of a WeakRef. This model feels better from a programming model perspective. Knowing that the weakref won't change from under you is something you should be able to rely on. I think trying to ask ourself if we care about SES is not the right question. I think the questions are (1) does it make sense for the language (?) and (2) does it make sense for the programmer? The answer to those question is yes.

DE: Making this an optional feature from Intls perspective is good. From the HTML specification, it states Intl compliance is required. In general, I think alignment across multiple environments is important, because when there's no clear definition, it becomes fuzzy for environments to decide what to include. Many people creating these environments look to us for creating environment advice. If that's what this committee wants to do, then maybe that's a decision we can make explicitly and we can create some other committee to make recommendations of where WeakRefs make sense. I think it would be unfortunate if we started doing this for many features—it just makes more friction in this alignment path.

AK: We'd like to explain what people should use. In my opinion, saying this is optional in the ES spec is not very clear. DE explained other ways we could make that clear—requiring it in HTML or requiring it in Node, for example.

YK: Is there any implementer in the room who does *not* want to implement this?

MM: If WeakRefs were optional, would XS avoid implementing them?

PST: No. Any mechanism that allows us to clean up something is valuable to us. I'm not sure if I understand everything in this phase. There are a lot of things in this interface that I'm not sure I fully understand, but in theory, no. It's an interesting direction.

TST: As the Champions group for this proposal, our recommended solution is to keep this proposal in this committee, instead of having it standardized elsewhere, because it is a language feature and therefore should be specified on this committee. That is the recommendation for addressing all the different constraints, and as far as I understand that this proposal does.

SGN: It appears we do have support from all implementers, so does this new information from Moddable change your mind, MM, about making this non-optional?

MM: The information from Moddable is interesting and important. Moddable has only one root realm, so the issue about whether inter-root-realms-references would be weak or strong does not arise right now. Just to reply a private conversation for the group: if we made it non-optional, a platform could still implement the safety property that we wish all platform implemented, which is all inter-root-realm-refs be non-weak. ... There is an interesting set of tradeoffs here. It was only at lunch that I found out that we're hitting a hard constraint from V8 and JSC that the engines can't have the bookkeeping needed to satisfy the original safety property. I want more time to stew on this.

WH: Getting back to the substance of the proposal, in the presentation you posed several questions about registering and unregistering things with a token. The current behavior from earlier discussion is that you can register multiple things with the same token, and unregistering that token unregisters them all. Thus registering the same thing with two tokens and two holdings should have the obvious behavior that both cleanups would be called when the object dies. Same even if the two holdings happen to be the same.

TST: There was a slide about this as an open question.

WH: Yes, and I'm stating my position on that question.

WH: On another subject, what happens if you have a large amount of garbage created in one turn and happen to get weak references to it. Is that ever a problem that you can't collect it?

SGN: Cleanup is not affected by turns. Only weak references are.

WH: OK, it wasn't clear that finalization is not affected by turns. That's good. What about weak references?

TST: It is still possible. We've discussed ways to handle it. One way is to virtualize the event loop, I don't think we should block the proposal on this, since we don't even know if this will be a problem.

WH: You're saying this could be addressed in Stage 3?

TST: No, I'm saying this could be addressed in follow-on proposals.

MM: In the case of WASM, where we tried to collect acyclic garbage. You only need finalization groups, and as long as you don't observe garbage through weak references it's OK.

WH: Do finalization groups have the same cross-realm information leakage issue that weak references do?

MM: Yes.

YK: I do want this feature. AWB made me think of specific cases I would use WeakRefs for—not for clearing associated references but for clearing memory. Someone who's an educator can hopefully help with this mental model. I found it interesting that I didn't end up needing WeakRefs as often as I expected, over time.

KM: My thinking on Test262 is in order to account for determinism in GC, is to support for the possibility of effectively no GC.

TST: Indeed, the tests basically cannot test for GC determinism. That seems like a deeply unsatisfactory solution for me. I think we would want to be able to test such a core piece of functionality that this proposal gives.

KM: It seems like the test just has to allow testing whether it follows the specification in terms of finalization.

DE: This testing may be not so bad in practice. You can have metadata in tests that say, "look we're testing GC," and caveat that.

KM: We could have this test run 100,000 times and pass once, and pass the test in that case.

DE: I could see how Test262 could include something that's like, "I work most of the time but not always"

LEO: There's no space for flaky tests on Test262. Maybe implementers could expose the GC call for the purposes of Test262.

KM: The problem is that even if we do a GC, ... (lots of grumbling)

#### Conclusion/Resolution

- Stage 3 reviewers: DE, SYG (SGN offered to review but was denied on the basis of conflict of interest reviewing his own proposal.)


## Intl.Segmenter Stage 3 to Stage 2

(Shane Carr (SFC))

AK: Earlier DE said there was experience moving things up and down stages. Can you say why you'd like to demote it rather than remaining at Stage 3 and addressing these concerns now.

SFC: It's incorrect to implement it in its current form, so being at Stage 3 sends the wrong signal. Also, we don't have spec text for the new form.

YK: Seems like browsers really like to know when it's safe to implement a feature so something being promoted to Stage 3 when it's not ready seems like a concern.

#### Conclusion/Resolution

- Demoting to Stage 2 from Stage 3.


## Update: PR: Normative: CreateDynamicFunction early concatenates bodyText

(Leo Balter (LEO))

LEO: (presents examples demonstrating grammar issues around interpretation of `-->` as a comment head and `Function(...).toString()` implementation behavior)

LEO: Can we get consensus on `Function(...)` source text including a prepended line feed?

MB: Please forget everything Leo said about HTML comments. I want to clarify that this is unrelated to the behavior of `-->`. The proposed change here is to align the spec with implementation reality w.r.t. Function#toString.

WH: Fixing `-->` needs a coherent proposal.

LEO: Is there a champion for that? There are a lot of issues.

WH: I'm not OK dribbling in fixes one by one.

WH: This is a grammar problem. The fix is a patch of one case out of many (see LEO's updated slide deck for numerous others). I'm not ok with fixing these things one by one by incremental patching. In fact, the real fix for this one would be different from what you propose.

LEO: I guess the issue will remain open until we decide to either close it or replace it with a larger fix.

MBS: before we wrap this up there are two more items in the queue, we will take 5 more minutes to clear the queue

MB: Waldemar, this PR is unrelated to the grammar mess that you are talking about. It only changes the result of Function.prototype.toString, and the HTML comment thing is an orthogonal side-track. The PR only aims to touch Function.prototype.toString, and not to change any grammar.

WH: This PR has no effect on `Function.prototype.toString`. It only affects parsing. What other observable change is there for this PR?

MB: The output of Function#toString would have the function body surrounded by newlines.

DD: There were fun and interesting examples involving `-->` but they were distracting.

LEO: I reviewed on Tuesday and I found issues with HTML close comments. I was trying to show my observations today here as requested by other delegates in this room.

WH: We're talking past each other.

MB: That is the thing, this has nothing to with parsing, it only changes Function#toString to match implementation reality. That's all.

WH: That's factually incorrect. This PR has no effect on `Function.prototype.toString`. It only affects parsing of Functions.

MF: It doesn't affect the parser, it wouldn't affect what is sent into the parser.

JHD: The spec already adds the new line before it's parsed, chakra does not parse it. It doesn't affect the parsing at all, it does not affect what is output.

AK(?): If you move it earlier, my understanding is that it doesn't affect parsing, it just changes Function.prototype.toString to reflect what was parsed. (?)

MF: That will match the current output of Function toString. We can't have a mismatch without confusing developers.

WH: I don't want to rabbit-hole.

DE: I'm really happy LEO is working on aligning the spec with web reality. We want to drive consensus between JS implementations and make sure everything is well-defined and matching. We should encourage more of this work and rapidly come to conclusions on it. This is one piece, but there are several pieces that would be nice to get through so that the ES spec matches web reality.

LEO: I want to be pragmatic and update the spec to match reality w.r.t. Function#toString.

MBS: So with all of that conversation, Leo are you looking for consensus?

(there is an objection)

MBS: Do we need to come back to plenary next time we want to merge this PR?

MM ... Speaking for myself, if we agree in the meeting that this is the interlock of what happens in the meeting ... The PR should be able to land between the meetings.

MBS: So does anyone object to this landing between meetings if LEO and WH resolve this offline?

MM: that is right, the situation in which we are going into the ...(too fast) If LEO convinces WH to the current PR, we don't have to bring it back.

WH: I feel like I'm being steamrolled. I want the language to match web reality here, but that requires finding a consistent solution. What I see happening in today's discussions is that the objective of getting a PR committed or proposal advanced acquired more importance than getting ECMAScript right and consistent with web reality, which should be our primary objective. I am upset about this.

WH: This is a complex enough set of problems that we may want to go through stages and find a consistent approach to fixing the places where `-->` causes problems. I'm uncomfortable pushing changes through one by one for special cases.

MBS: OK, I apologize.

LEO: We would need a champion for that.

KS: I'd like to thank WH for being conservative.

WH: I'm happy with specifying this observable behavior, I just don't want to do it via incremental patches.

MBS: That is very reasonable. Apologies for putting you in a position of being steamrolled.

#### Conclusion/Resolution

- The PR does not have consensus. It needs a champion and must go through the stages.

Further discussions happened immediately after the meeting. WH is happy with the behavior specified by this fix but wants to make sure that the `-->` problem is addressed consistently in the language and offered to help with the specification to make it so.)


## Private declarations for Stage 1

(Justin Ridgewell (JRL))

JRL: (summarizes state from Tuesday)

KCL: I feel as though there are problems with both, but I would like to see Alternative 2 as it more closely matches the semantics of let/const declarations, rather than Alternative 1 which does not.

JRL: You would have to block class fields and not this, which I don't want to do.

DE: As a champion of the class fields proposal, I am not promoting it for advancement. It is at Stage 3. We've had long discussions in the past about alternatives like this. A convincing argument from Date Herman in 2016 is that once you learn the private syntax, you don't really want to repeat the keyword "private". It's a matter of conciseness. When people talk about using the private keyword, it makes people think there is a protected. Another issue is that you might have a reader decorator. If you do `@reader private #x` is weird, but then you could also do `@reader #x` which looks up the outer scope `#x`. I have some reservations about how learnable this proposal will be, which I think we can figure out in Stage 1. More of less, first we look up the WeakMap, then we ... `this.that` references the thing in the WeakMap. The whole proposal put together is intuitive because you can work with the intuition `#` means private, but then you get into semantics where there is this name thing. This is more subtle. I'm weary or on the fence on whether we want to do this feature. I'm pretty sure we don't want to go with this syntax. The idea of referring to external names is confusing. It takes a lot of different mental steps that I haven't seen people think through very easily. I prefer an explicit keyword like you have in Alternative 1. Given we retain Stage 3 consensus with the current syntax without the `private` keyword, we shouldn't change those semantics.

SYG: I just want to respond directly to its easy to reason about. I think that analogy ... if you look deeper. The name thing is different from a bind. There are additional semantics for example you cannot assign to these bindings where you can for let and const ... I think the analogy, by not doing enough will end up harming understanding ability

KCL: That doesn't entirely hold true. There are specific rules around assignment for example const must have an assignment; `const foo;` is a Syntax Error. The point being assignment and initialisation have different semantics which I think are well established. This runs counter to initialisation semantics, and I think we may run into issues that are difficult to learn by changing these semantics. If `private` is to match lexical scope and then having an inverse flow for lexical binding - by declaratively punching out of that lexical scope - that's the reverse of what let and const do. Assignment is a separate rule around let and const that is learnable. I think this is a backwards step because it changes the mental model around lexical binding.

KS: Would prefer to see a first class value generalization of private state. I know there could be ergonomic issues. You're trying to get ergonomic benefits of `#` fields while generalizing it. I would prefer seeing us taking the full step of a first-class value that can be passed around. For the reasons mentioned by DE and KCL, I'm weary of generalizing it with a syntax in this way.

JRL: If we create a first-class value for private name, it creates interesting privacy leaks. Because then we either have to harden it, like decorators tried, or we make it a null prototype. We could make this a first-class value, but that gets to something more difficult than just syntax.

DE: There is a history of people proposing this idea. KS suggested basing this on names orthogonal of classes. You can see ES Wiki entries. Historically this is why we have the `@@` symbol notation. This would be a declarative way to declare a symbol lexically scoped that you can use. When private symbols was determined to be not a viable path around 2013-2014 and the focus shifted to WeakMaps, the decision moved to couple it with the class in this way. The idea was floating around with having these kinds of declarations. There were questions on whether `#x` would be just using the declarations. I wonder if this leads to the path of object literals with private elements. These are interesting things for the future. But the decision of coupling private with classes is deliberate. When I spoke with JS developers who advocated classes and object literals, most people said, eh, encapsulation is fine for those with classes, and it's not something we need. So when using classes, that's when you're thinking about encapsulation, and when working with object literals, it is more in an open way. So that is what led up to where we're at now and I think it is a more intuitive model. There were attempts to ask if it would be okay to use the `private` keyword there, and there wasn't much enthusiasm for that.

KCL: There is nothing here that I would want to carry forward, anything like the shape of syntax you've provided. But I do think we should explore the problem space so don't object to Stage 1

(DE, MBS, and JHD explain what Stage 1 means)

#### Conclusion/Resolution

- Stage 1 acceptance
- KCL has major objections to the syntax of Alternative 1 and would not be comfortable with moving forward to Stage 2 in the future with the proposed syntax.
- JRL will not pursue Alternative 2.
