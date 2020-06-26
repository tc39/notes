# July 25, 2019 Meeting Notes
-----

Daniel Rosenwasser (DRR), Andrew Paprocki (API), Adam Klein (AK), Shu-yu Guo (SYG), Michael Ficarra (MF), Jordan Harband (JHD), Alex Rattray (ARY), Pieter Ouwerkerk (POK), Michael Saboff (MLS), Keith Miller (KM), Aki Braun (AKI), Brian Terlson (BT), Ron Buckton (RBN), Till Schneidereit (TST), Yehuda Katz (YK), Aaron Davis (ADS), Sebastian Markbåge (SM), Andrew Burgess (ABS), Jonathan Keslin (JKN), Ashley Hauck (AEH), Peter Hoddie (PHE), Patrick Soquet (PST), Ben Coe (BCE), Waldemar Horwat (WH), Mark Miller (MM), Chip Morningstar (CM), Erica Pramer (EPR), Kevin Smith (KS), Adrian Hall (AHL), Caio Lima (CLA), Ben Lichtman (BLN), Tierney Cyren (TCN), Shelley Vohr (SVR), Michal Hollman (MHN), Bill Ticehurst (BTT), Dean Tribble (DT), Godfrey Chan (GCN), Guilherme Hermeto (GHO), Jordan Gensler (JGR), Leo Balter (LEO), Dale Bustad (DBD), Joffrey Richten (JRN), Shane Carr (SFC)

Remote:
Bradley Farias (BFS), Gus Caplan (GCL), Kevin Gibbons (KG), Pedram Emrouznejad (PED), Yulia Startsev (YSV), Mattijs Hoitink (MHK), Ross Kirsling (RKG), Justin Ridgewell (JRL), Caridy Patiño (CP), John-David Dalton (JDD), Paolo Severini (PSI), Benjamin Georges (BGS), Paul Leather (PLR), Mathias Bynens (MB), Aliaksander Palpko (APO), Shi-jun He (JHX), Ravi Jayaramappan (RJN), Sanket Joshi (SJI), Jose David Rodrigues Veloso (JVO), Mike Samuel (MSL), Frank Yung-Fong Tang (FYT), Rob Palmer (RPR), Diego Ferreiro Val (DFV), István Sebestyén (IS), Jason Williams (JWS), Richard Gibson (RGN), Seth Brenith (SBH), Suraj Sharma (SUS), Steve Faulkner (SFR), Chris Anderson (CAN), Michael Fig (MFG), Valerie Young (VYG)
-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/07.md)

-------------------------------------------------------------------------------------------------------------------------------------------------------------
This is a template for all topic discussions.
-------------------------------------------------------------------------------------------------------------------------------------------------------------
## Optional Chaining for Stage 3

Daniel Rosenwasser, DRR

- [proposal](https://github.com/tc39/proposal-optional-chaining/)
- [slides](https://onedrive.live.com/view.aspx?resid=5D3264BDC1CB4F5B!5281&ithint=file%2cpptx&authkey=!AH-MOCJRlVtK_QE)

JRL: (Presents slides in DRR’s absence)

DRR: (Presents slides where JRL left off)

GHO: Both proposals are fine.  I'm not sold on optional call, but why must these be one single proposal?

WH: I’m the reason. To summarize the argument: The issue is syntax.  If we separate out all calls, then we can’t add them later because of backwards compatibility:
 `a?.b.c.d[x].e
(foo)`
will get a semicolon auto-inserted, so we can’t turn it into a call in a separate proposal. If we separate out only `?.(` calls, this leads to confusion and gratuitous incompatibility.

GHO: I expect a property, and now surprise, it's a call.  On the syntax, it's `?.(` for the call.  I expect that after the `.` comes a property name, not a parenthesis.

WH: The same argument applies to `?.[`, also in this proposal.

DRR: The element access has the same issue.  It's not a property access syntactically.  We did a lot of work to get the most ideal syntax. There was no perfect syntax that everyone agreed on that would be uncontroversial. We went through a lot of iteration here.  If we made the language all over again, we could get something better, but this is the best option going forward.

LEO: There was one question whether you have fn and then an optional call. `fn?.();` The result of this is undefined. I feel like it’s a bad contract to not know if fn was undefined or if the result of the function is undefined. No one wants to create an objection over optional call, but people tend to feel uncomfortable with optional call.

YK: I saw the slides…

DRR: When you do an optional call, you cannot necessarily assert if the result is undefined or the original value is undefined.

LEO: I'm not creating an objection for advancement.  I'm just trying to express that I'd prefer if we could advance the two proposals separately.

WH: If you’re going to worry about distinguishing between whether the `x` is undefined or whether the result is undefined in `x.?()`, then you should disallow `x?.foo` and `x?.[y++]`, which have the same issue. If you disallow all of those, then the proposal is empty.

LEO: Ideally, accessing properties would have less side effects than calling the function.

WH: No, because in the square brackets there can be side effects too: `x?.[y++]`.

DRR: I think there are 2 use cases you can imagine.  There's the, function that returns a specific value case, and function that needs to be called for side effect case.  For the second case, you don't care about the return value.  In the case when you care about the return value, it's discernable in cases where the function isn't expected to return undefined.  So there's sort-of the same problem when it comes to property access.  I hear what you mean about side effects, but I think those two cases put clarity between the scenarios.

LEO: I don’t want to extend this too much. Also interested in what YK has to say.

YK: I'm on the fence about the utility of (optional call).  I'm more persuaded after the examples.  If you say `?.()` and the thing is not callable, you get an error.

YK: This is not some weird edge case, this is about being more sloppy.

DRR: So, specifically, we've called this out on the repo itself.  It's not about being sloppy.  It's a propagation of emptiness check.

YK: That's a circular point.

DRR: I get that people will use it for sloppy purposes, but it’s not the primary use case. It's more likely the case that you didn't want to call a number, for instance.  We wanted to give a couple examples of why that might not be the case.  If you look at how the values are propagated; for example, you have a function `foo` that returns either a string or undefined.  At the end, you either get out the value that you wanted, or undefined.  It gets harder when you return either a string or false. Another way to look at this is, you can imagine a getter property (accessor) that throws when you try to access it.  You can still use optional property access on it.

YK: My position in the first place before these slides was that I understand the use case for optional member access and am in favor. Before the examples I was unconvinced, after the examples I see use cases. There are questions. I really, really wish that we could separate out optional call from this proposal.

DRR: I don't necessarily know what specific questions you have in mind.  The "make it work if you call a null or undefined value" is one we brought up.  I don't think we should make the operator work on null or undefined values that are not functions.

YK: I feel really uncomfortable that I have to object to the whole proposal, including the really useful part, because I don't like this one specific feature. I could also imagine being able to be convinced on the other thing, but am not comfortable being forced to decide on these together.

WH: Plenty of arguments have been expressed that these features can't be separated.  You say there are questions that haven’t been addressed, but I haven't seen any new questions about this for months.

YK: I think I have now emotionally gotten to the place that LEO was at when I walked in. A lot of the meta of this is the desire to see it in.

DRR: I think there is a general desire to break the two features into their own proposals, because we could more piecewise evaluate their utility and semantics.  I think that is a thing that has been expressed a couple of times.  I don't know if there's a way we can get consensus on that point.  WH has said earlier that it's him why the proposals are combined, but that’s not the only reason.  I've heard from other parties that it's important to keep the features together for other reasons.  The feeling I have right now is that we cannot think about them separately.  My intent is to deliver this feature is because it is a highly demanded feature by both TypeScript and JavaScript developers.  To the one specific item you brought up: I believe we are picking the correct semantics, and I’m willing to work with you on them.

GHO: You said you’ve heard from other parties about other reasons – I’d like to know what other reasons.

DRR: With the inclusion of optional property access, there's a mental parallel with optional call.  Users might be surprised by the lack of optional call. I think that is a valid thing to try to raise as a concern for users also.

JRL: My reply is to YK, who raised the point we should check for callability in optional calls. If you were to pass a string or number or something those aren’t actually callable, that’s not the type interface that we were expecting. If you do that, you’re causing a user error—”you’re handling it wrong”. For null or undefined, you’re saying “I _don’t want_ this thing to be called.” If you pass something that’s not nullish and not callable, you’re invalidating the explicit type signature I gave you.

DRR: I work on TypeScript.  I think of this as, you have a string or undefined, and that's probably not what you meant to do.  You probably want to treat them separately.

MLS: This is a tool, and it can be properly used by developers.  You have a function, you don't know if it exists, and call it if it exists.  If the programmer wants to know the return value or whether the function was called, they can go back to the old pattern.

WH: I concur with the previous two answers. YK made an argument about testing for callability instead of testing for null/undefined, but that argument would apply to situations other than just `?.(`. For example, you could have `a?.b.c(z)`. What happens then if `c` is not a function?

LEO: You still expect `c` to be callable?

WH: YK’s point was that maybe optional chaining should protect you against calling uncallable things. I’m just saying that that situation arises even without `?.(`, and you just can’t protect against that.

DT: Partly agreeing, but noting in everything from SmallTalk to a wide variety of other languages. Nil check is well documented here, so following what they do is a good pattern.

DRR: Right.  Just to echo that, thinking about these features, I really think about these features being about optionality: the lack of presence in this thing.  We had the nullish coalescing operator two days ago.

MM: The maybe case is so common.

DRR: I think as a user, you really don’t want to ignore these present values. If I have a string, I don’t want to accidentally call it; I want to know what that string is.

YK: I maintain a library and my main languages are TypeScript and Rust.  I can see the perspective of developers who would think this is useful.  But I've also written code where the input type is unknown, like "any".  There's a lot of ad-hoc overloading that happens. You don’t have to like it, but people do use dynamic overloading using checks. Do you think that’s true too?

DRR: I think that's a generally true statement.  In this specific case, me as a user would not want this sloppy behavior.

YK: The kind of situation is that you're allowed to pass a string, but do some work. I think your argument, which I think is probably the correct thing to do, is to not use the `?.` operator in that case. There’s another style of programming where you try to call the function and run some code and do things if it’s not a function. There's a lot of type checks in people's code.  Right?

DRR: Yes.

YK: That's the code I care about.  You're trying to get through your chain of operations.

DRR: I see what you’re saying but does it make sense to developers. If there are these two branches to go down—if you try to do the call, and you can’t you can just run the separate kind of code.

YK: My question is why are there `typeof` function checks in people's code?

DRR: To do polymorphic behavior on different types.

YK: Right, but if it were string, undefined, or function, you would check for all three.  Yet, there are still people, including myself, who still write `typeof` function checks.

DRR: As a user, you end up writing more code to do it that way. You’d need to do an optional call on the string, then see if the value is present and do all the dispatching then. I see the same code, so I can relate, but at the end of the day, that’s far less ergonomic.

YK: Here's an example in my code base.  I have a check, `typeof require === "function"`.  The reason people write code like this is because it's not a value in your control.  Basically, my feeling is that I'm not persuaded, but I want to be persuaded.

JRL: `typeof require === ‘function’` is checking the binding (won’t throw if there’s no binding).

DT: The characterization of Maybe rather than Any is important.  Do we need to think that the Maybe scenario is more common than the Any scenario such that it's worth owning the syntax?

DRR: I see what you’re saying. That’s a good thing to follow up on.

RKG: I used to be in support of callability and I was converted over—I have conveyed the reasoning in a FAQ item in the README of the proposal: why does `foo?.()` throw when `foo` is neither nullish nor callable? If a library is going to call an `onChange` handler, say, just when the user has provided it, then they surely want to throw if the user provides something ridiculous like a `3`, in order to inform them of their mistake. I fully understand that `typeof function` is a thing that exists, but I really do find it compelling to view this library author case as a central example.

DRR: I do find, you don't want to ignore this value and you don't want to handle it, the most compelling.  If you're in the mode where you're probing these objects, you probably want to do a better approach to checking these objects.

YK: I couldn't find examples of local function checks (?). There  is a design space here, my personal view is that we haven’t looked at  enough physical cases where we’re doing the right thing here. I think that would be a useful project, and want to do that.

DRR: Eventually, if it ends up being a 50/50 split, you have to pick one.

YK: You don’t have to, actually.

DRR: Our intent is to, if we can.

YK: It is too confusing. The user would have trouble predicting. So we should not add the feature.

DRR: Yes, but we can also be prescriptive in how the feature should be used as well.

YK: I feel persuadable on that topic.

DRR: Ok!

LEO: One thing we've been talking about is, we've been looking at desirable examples.  I would like to make sure.  I want people to make sure what we're making with optional chaining.  You can start from any expression, including chaining from a regex literal, which is weird.  I wonder if there's a possibility to start optional chaining from actual names.  Because a reasonable developer would never use it, but you could start optional chaining from false, regex.  It's a nice feature to create very confusing code, just for fun.  But I wonder if it's possible that we could do a better tailoring of the syntax to start in more reasonable places.

DRR: You can write a lot of nonsense code, ben actually has been writing tests and asking these questions as we've gone along. One of the examples was a class that extends from the optional chain. Should you disallow this from the grammar? Well you can but we have historically not allowed this

I don't understand why you would do an optional ??

Disambiguation is one thing, we weren't totally sold on doing that 2 days ago, but im open to the idea but I don't really feel like i'm strongly convinced. I think it would add complexity to the grammar as well.

LEO: I understand this feature is highly desired by a lot of people. But at the same time, there's a high cost to complexity to the final code.  And in the end, this is just sugar.  I consider, as a developer, I am very skeptical if the tradeoffs we are offering here really compensate for the complexity we are adding to the language.  It seems that we are getting so many different syntaxes, and we are just celebrating everything.  I'm afraid in the future that we get problems with languages that added so much sugar, like Perl.  It's the value but also the doom at the same time. I think we should be more, and i feel at the same time, because of the complexity I am aggressively challenged from my objections. I think this is an important flag for one, I am not going to be able to object this log? Once this goes to Stage 3, I don't think there will be web compatibility issues with this, and this will ship as soon as this gets to Step 3.

DRR: I don't entirely disagree.  MM said, we should think about not adding features to the language as progress as well. The overwhelming feedback that I get from users is extremely positive towards these features. AKI has said to me "Since I joined TC39 people have asked me about optional chaining"

AKI: Every time!

DRR: The number one feature I’ve seen on TypeScript since moving to GitHub is optional chaining as well.

LEO: I think we should avoid being just like an echo chamber for whatever is in the hype. We are a technical committee to prevent things being implemented just because of public cheering. I celebrate a lot of the work but there is a lot of very precise work that's being done here. We should not implement things because people cheer about it. Otherwise we could be speaking about static-types in the language, and we are pragmatically not doing this.

JRL: Chaining any part of this proposal to `typeof`... if you were to do `foo.?bar`, the behavior changes if foo is not a local.  That's supposed to throw a TypeError.  If `foo.?()` didn't throw an error because we start using `typeof` instead, that becomes a very different behavior.  That kind of thing requires different syntax and semantics.  This is not related to the optional chaining proposal that we're trying to get through.

YK: I think these `typeof` arguments are misleading.  I think the argument for call checking is that `?.` corresponds to something specific in javascript… `?.` is checking to see if that operation could possibly succeed. Null and undefined do not have a mechanism for accessing properties. I don't want to focus on spec esotera.  People think of `(` as an operator.  `typeof` function looks more flexible than it is. First check to see if the operation I’m trying to do as a user is possible, if not then don't try.

DRR: Do you imagine being able to call a constructor?  `typeof function`...

BT: Time check, can we verify if we have Stage 3?

YK: I’m bringing this up to try to persuade at least one other person that my idea shouldn’t be dismissed.

AK: YK is saying, please split this apart because I don't want to object to this.  But WH wants to keep them together.  So this is blocked on a procedural thing.

WH: YK, nothing you’ve said in the last hour about the `typeof` semantics would be fixed by splitting the proposals.  The same `typeof` issues arise without optional call. If you're advancing that argument, you're fighting against the entire proposal.

YK: AK you’re right that there’s a frustration on that side. If your position is that you should separate them then there’s no foundation for proposing that.

AK: Your proposal is not that you should separate them, it's that you should do something different for call.

YK: `?.` has the semantics we want, and I don't know if that’s true about `?.()`

MM: The safety case for not using the `typeof` semantics has been made.  I understand YK's method about the internal call method.  I don't think it matches programmers' intuition. The `typeof` semantics that will skip a 3 without error is more surprising and does not correspond to how people will expect this operator to function.

DRR: Closing remark: I am extremely sympathetic to where YK is coming from.  It is hard to voice a negative opinion. This is a very high value feature that most people want the bulk of. I really want to respect that.  I also feel like we've had very good momentum in how we've moved.  So my feeling is that by and large, I would like to move to Stage 3.

YK: I am not going to object.

DRR: I would be open to working with you in some capacity to evaluate whether or not there is some direction we can take during that time.  I don't know if that's doable; I don't know if that's something we can do in that time.

BT: It seems like collecting data in this problem and coming back with potential changes and developer feedback at this stage is totally appropriate

DRR: Are you YK willing to help with that?

YK: Yeah, I can help.

DRR: I really don't want this to feel like a bad thing that we're doing, I feel like this is a good thing.

YK: That's why this is frustrating.

DRR: But im committed to making everyone feel good in the room about this, im committed to working with you on this if there's a lot of discomfort.

BT: Are there any objections to moving this proposal to Stage 3?

(Silence)

BT: Congratulations Daniel!

(applause)

#### Conclusion/Resolution

- Approved for stage 3

## Dynamic Import Host Adjustment for Stage 1 or 2

Mike Samuel (MSL)

- [proposal](https://github.com/mikesamuel/dynamic-import-host-adjustment)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vT42wrii3gX0dZ3ordT5QgVes0Y2WLEhsvFl4Q7svdSyve4kl3bMtqvkEauQd1uPC2JNOm3anw-1IGn/pub?start=false&loop=false&delayms=60000)

(shares slides)

I would like to ask for Stage 1 or 2. I've got draft spec text, there's some tests in the explainer but a lot of the extensive testing would be done via web platform tests.

DD: Are you saying this would be possible if the host delays stringifying or is this necessary for the proposal?

Claiming that there’s an observable semantics switch is just not correct.

MSL: The promise capability does not escape until step 8 (referring to slides). We could put a requirement to stringify first.

DD: Thanks.

MSL: Sorry for that confusion.

DD: I wanted to get some clarity, to allow the code to send non-strings to import and have the host see the non-strings. YOu have drafted the spec text in such a way as to give the host the original objects.

MSL: The isTrusted predicate is one way to craft that, the fact that something is a trusted module specifier value is how we know it should be allowed.

DD: My feedback would be to put that goal more front-and-center in the repository.

MSL: Will do

MM: There are some issues we should examine for any proposal that would add or modify host hooks. I want to test this proposal against those issues. There is lots and lots of host hooks and not all of them are clearly hosts hooks. To reason about program equivalence, we must consider host hooks points of observation. This only works when host hooks are explicit and it is clear what they can observe and affect. As we have refined the Realms proposal, we realized that the best way to think about it is that Realms enable some javascript code to act as a host to other javascript code. Javascript code that creates a realm should be able to control the javascript code that executes within the realm, in precisely the way hosts could control that code. Were we to add these host hooks to the Realm API, I want to check that what I’m seeing here satisfies all of those constraints.


MSL: It should be easy for someone who is reading the spec to figure out what all of the host connection points are, and it should be possible for a user code that is using the realms API to implement what's effectively a host hook when 1 realm creates another realm

MM: The word “trusted” stands in the way of reasoning about this well. “Trusted” seems binary and from an objective stance. It is always better to talk about reliance and vulnerability. The controlling code which creates a realm is “trusted” by the controlled code within the realm, i.e., the controlled code is necessary vulnerable to its controlling code. This is the case whether the controlling code is a genuine host or JavaScript code using the Realm API. But other code outside of that realm must not be vulnerable to that controlling code, i.e., that code is not “trusted” by the outside code. The semantics of new host hooks must not introduce any such vulnerability of outside code.

MSL: Trusted means if X trusts Y then a failure in X could be due to a failure in Y, does that align with your interpretation?

MM: That's exactly right. Great, I’m very much in favour of this, I think it's great.

BFS: I’d like to note this has an effect on AssetReferences. They’d also require a similar change for non-string types, since they encode information on where the asset reference is formed, they're not something which can be forged or done with a string identity.

MSL: That's the assets reference proposal?

BFS: Yes

WH: I’m just curious what other places in the language you are looking at adding hooks into, there's `eval` and the Function constructor. Anything else?

MSL: Includes a list of 70 some syncs, mostly in browser-specific APIs? THe next proposal that i want to present goes over eval and function. Dynamic import, create dynamic function and eval are the 3 coordination points.

WH: Would they all use the same mechanism like a hidden property to do this? Or would they be diverse in how they mark things that are trusted?

MSL: When trusted types specifies how one of the hosts calls out into the browser? What mechanism they use?

WH: I’m trying to understand the greater context of this proposal.

MSL: So I can point you to that proposal and I’d be happy to talk about it with you. I think the short answer is yes they all use similar mechanism for vetting values.

WH: OK.

JHD: Can you go back to the slide with the data-uri module?

(slide 9)

JHD: Is the purpose to ensure a specific variable `x` is trusted or is it to ensure that that specific example is trusted. If that data-uri is good, it shouldn’t matter whether it’s good, this is an enclosed thing.

MSL: Yeah this is probably a bit silly because it requires that an application does bad things to nice people. I was just using this data uri as a placeholder for that stuff.

JHD: Sure, but I’m asking if the bad stuff it does is not so bad and you can trust it and you mark it then why do you care if anyone uses that string in dynamic import after? And if the bad stuff is bad then why can you mark it trusted? What is the reason why dynamic import needs to differentiate between two identical strings?

DD: I believe they would both stringify to `[Object object]`, i think that's right let me know if that's wrong.

MSL: `isTrusted` of a raw string value is probably going to be false, but for a TrustedModule specifier would pass.

MSL: if X is a trusted module specifier then trusted module passes, if it is a string then that would fail. So we would fall over to coerce

JHD: If you have a given specifier, and you import it once, the module cache makes sure you import it once.  Why do you need that same specifier to be trusted the second time you import it? What’s the attack you’re trying to defeat here?

MSL: Is this a module-specifier before import map happens or after?

JHD: Maybe that's the question im asking, is this feature something that will still apply in the presence of import maps?

MSL: I’m not familiar with the details of import maps im afraid, but a module specifier may be safe in 1 context but not in another

BT: We need to move on

MSL: Do we have enough for stage 1 or 2?

BT: No objections. Any objections to Stage 2?

JHD: I’d like to understand what the threat model is before we proceed to Stage 2.

WH: I’d like to echo DD’s question left on the queue ("we should pick one of the two alternatives before moving to stage 2. After this presentation I am leaning toward the new-hook version.") regarding prerequisites to Stage 2.

AKI: We have to move on.

WH: I was answering the question about prerequisites to Stage 2.

#### Conclusion/Resolution

- Approved for stage 1
- Needs more discussion before stage 2

## Dynamic Code Brand Checks for Stage 2
(Mike Samuels, MSL)
- [proposal](https://github.com/tc39/proposal-dynamic-code-brand-checks)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vS9iXY1nSKu2UkpqNIVmzgs5oPdgPYz8aShH4y07m7JUTR51IyOfz8KcFZ0Pf_NUnlcaf4qpgLnNOwi/pub?start=false&loop=false&delayms=60000&slide=id.p)

MSL: (Presents slides)

YK: I have a general positive sentiment. I like the direction for the platform. I've been trying to persuade security people that this is a thing. I think this is the right direction. I think it's a good MVP design. I was wondering if you've considered approaches like exposing things on the import meta or import object so they can be exposed directly?

MSL: What kinds of things?

YK: The current approach requires that you make a policy and communicate the policy into the lexical scopes that have it.  Abstractly, you can make that do what you need.  I build a library that needs to get the capability communicated to me and the users of the framework.  I think the current approach is "good enough", but an approach that I imagine is, somehow basically saying that the information is passed to other modules through an existing capability like import data.

MSL: I had a proposal a while back about something called Module Keys that I did a poor job explaining. would love to run that by you offline.

MM: IsCodeLike is wrong. Using an internal slot is wrong. The symbol would be worse. I volunteer to be a reviewer and explain how to rescue it there.

WH: I'm uncomfortable going to Stage 2 with the current choice of _IsCodeLike_.  I'd like to see that nailed down a little more.  I like the proposal, but I don't like the attack surface _IsCodeLike_ exposes.

MSL: Sounds like no for stage 2 and I’ve got MM and WH who would be interested in being reviewers should this ever make it to stage 2.

WH: I like this proposal. I just want to make sure it’s safe.

MM: Same for me.

KG: I had been talking to you about this proposal on GitHub. Sorry for not following this up. I'm not comfortable going for Stage 2 without finishing that follow up. I'm really uncomfortable with this proposal introducing a new verb. I don't like adding new ways of using `eval` (?) The host callout seems fine.

#### Conclusion/Resolution

- no for stage 2
- MM and WH would potentially review in the future

## Loosening idempotency requirements for HostImportModuleDynamically to enable retrying failed fetches

Domenic Denicola, DD

- [issue](https://github.com/tc39/proposal-dynamic-import/issues/80)

DD: Basically, the requirements on dynamic import are stricter than on static import, which was my fault (my bad!). In particular, whenever you fail a dynamic import, you must forever fail that dynamic import (given those same inputs). But with static imports, if it completes normally on a second try, the import will succeed. This pull request makes that change to enable less strict retry rules in Dynamic Import.

DD: Can I get a thumbs-up?

(a few thumbs up)

LEO: I want some clarification.  For what is being proposed there, it looks like it does not evaluate the subsequent calls.

DD: Wording these things is tricky.  The intent is to retain the behavior in the success case.  We're rewording it so that in the failure case, you (don't?) have to give back the same error.

LEO: What is the test impact?

DD: Yeah, that's important.  Thanks for bringing that up.

MM: It's good that you brought this to committee.

#### Conclusion/Resolution

- Approved to merge the change
- DD will follow up with LEO about Test 262

## MetaMask, safe modules, and Sesify

Aaron Davis (ADS), invited presenter

- [slides](no link)

AKI: First a note about recording, we spoke in Berlin about recording presentations. There’s no recording of the room, or the stream itself.

MM: To clarify the speaker’s voice and just their screen (slides) will be recorded. Questions may be recorded but we’re happy to remove them at anyone’s request.

ADS: (Presents attack examples, slides)

(Presentation is also recorded, so notes will only be taken for questions)

MM: For context, how much value is controlled by this?  At one point or another, how much value has gotten exposed through an attack?  How much have you had to fix?

ADS: Our primary product is a browser extension.  We haven't had security issues other than bugs that could cause loss.  I don't know how much money people use this for.  We don't do tracking on that sort of thing.  I've seen individuals holding irresponsible amounts of money in their accounts, like $300K.  We need easy solutions for making this software secure, and I'm looking for knowledge bites on how to do that.

JHD: How can I currently generate the sesify-config file for my projects?

ADS: You need to use Browserify or something compatible with Browserify.

JHD: I would like to play with it and see how much info I can pull out of my dependency paths.

ADS: I'm having trouble protecting module exports in a way that doesn't break things.  DOM access and stuff is very broken.  The repo itself is github.com/metamask/sesify.  Early project, poor documentation.  For generating the config, I'm running browserify on my entrypoint, (shows example on screen)

MM: I first saw this at a hackathon where ADS showed this at a conference applying this to a library that everyone was using for money.  But, the thing here is, you can lock everything down right now.  It means that you can roll this out with order-one effort once this is supported in packagers.

ADS: (discusses static analysis)

WH: Why can't green nodes do harm? They might not be able to access globals, but data passes through them and they can mess with it.

ADS: They absolutely can mutate data.  That can cause problems.  That is worthy of audit and making sure that is the case.  My primary concern is private keys being stolen.

MM: (long comment)

DT: (response to MM)

ADS: In general, I think building a security dashboard for your project is a good thing.


## Status of Secure EcmaScript
(Mark Miller, MM)

- [slides](no link)

MM: (presents slides)

(discussion between YK and MM about how to support shims if primordials are read only)

YK: What we do today for server side rendering is you take the exact same map… ???

MM: We did take this into account. It’s important but I didn't touch on it in my talk. ???

YK: what you’re describing works for us (ember), are you considering prototyping a global flag?

MM: PST’s proposal references a remapping table on per compartment basis, provided as runtime data structure (???)

YK: Ember addon that are runtime browser modules, we want expose those without having to make them node modules

MM: The module import graph has to be within the package dependency graph.

AK: salesforce in interesting as they’re using the DOM, previous version of ses had to wrap the whole thing

MM: The issue of securing the dom is interesting. Before proxies, Caja did a full ad-hoc dom membrane built of objects that specific to the semantics of specific DOM APIs individually.

Salesforce was doing the same thing - but with proxies you can have an easier job with it. (explains iframe technique using SES via CSP trick to expose dom nodes directly)

AK: Given that DOM APIs can provide access to things like timers fairly trivially, and not only by appendings scripts it worries me as a browser vendor about the practicality of this.

MM: Caja, the original SES, did not attempt to suppress source of timing. We are now able to set up an environment where nothing that provides timing or I/O is available.

(discussion between AK and MM about 2 sets of objects that can only talk to each other through Proxies [membranes])

AK: I want to loop back to the beginning, where we were discussing denying the ability to get keys from something in your system.

MM: The ability to get info via timing channels is something that SES only help with in the restrictive case of transformational modules, which do not need anything that would let them sense duration. This is a narrow special case, but actually covers a significant amount of code.

MM: Side channels are hard. What I've public requested from the JS community a crypto library proposal, where all secret cypto bits, and all the crypto algorithms operating on those bits, can be kept outside of the address space. Notice that all blockchain code operates under similar constraints: all on-chain state and computation is visible. All crypto secrets are kept off-chain. Would that address your concern about side channels?

AK: Maybe. I'm not an expert in this.

DT: Keys in mem vs keys file, SES protects the ability to access the keys file not which is easier than trying to provide guarantees about accessing things in memory.

MM: The event-stream incident did not use any side-channels, it was just a direct attack through the insecurity of JavaScript.

#### Conclusion/Resolution

- Status update.

## Infix Bang
- [proposal](https://github.com/Agoric/proposal-infix-bang)

MM: (presents slides)

Gus: I opened an issue on the repo. My question was if you replace the `!` with `.` and put an await in front of it, you can build up synchronously a chain of things and by awaiting it, it calls `then` and you can commit the entire thing and… (further explanation) why is the whole new promise api needed if we can already do it that way?

MM: we started that way at Agoric by intercepting method name by proxy. There was confusion in trying to differentiate property access and method invocation. It’s worth exploring. I think the desire to explore is not a stage 1 blocker. We would still need the makeHandled hook in order to intercept operations on unresolved promises.

Jordan: It seems like a subset of a pipeline, the only thing you’re supporting here is fluent objects, you can await the result of a pipeline and achieve this.

MM: Are you talking about the pipeline syntax proposal? That issue is not a stage 1 blocker.

Jordan: Pipeline is a more general version of this, as long as it supports await of some kind

DT: The syntax might be fine. You need the hook to be able to see a message before …?

MM: The only thing fundament is the new extension point, I’m always in favor of making things simpler and smaller when we can.

WH: As you already noted this syntax collides with Typescript. Other syntax issue: what happens if you combine this with regular property accesses and function calls?

WH: The more important issue is we haven’t had enough time to evaluate this. Even aside from the syntax, I don’t understand the core of what is being proposed here. It seems like a good idea, but I don’t understand the proposal yet. I have lots of questions about the presentation but we’re already in negative time on the timebox, so there isn’t time to answer them.

MM: All we’re asking for stage 1 is the hook that enables the computational module. I’m willing to spend as much time as you’d like afterwards.

YK: stage 1 issue not blocker: I could imagine wanting `?.!` At some point we have to figure out how many features we want.

MM: Being able to put bang and optional chaining in the same place is something that you should be able to do

YK: Yes

??: I would need these addressed before going further than stage 1: First is …(??)

MM: trying again harder with proxies is definitely worth doing.

#### Conclusion/Resolution

- Revisit during overflow

## `Map#updateOrInsert`

Bradley Farias (BFS)

- [proposal](https://github.com/tc39/???)
- [slides](https://docs.google.com/presentation/d/1_xtrGSoN1-l2Q74eCXPHBbbrBHsVyqArWN0ebnW-pVQ/edit#slide=id.p)

BFS: (presents slides)

WH: I’m unclear on whether you’re proposing all 3 functions or just `updateOrInsert`?

BFS: I am only proposing `updateOrInsert` this subsumes the other two entirely

WH: You’re passing closures to `updateOrInsert`. Those closures would run in between the first lookup and the map mutation. What happens if those closures modify the map?

BFS: I don’t think that’s a stage 1 concern, i’m not preferential to any mechanics.

WH: It’s unclear what the goal is. Is the goal to simplify the API or to optimize it? If you’re optimizing it then you need to worry about the reentrancy case anyway. Furthermore, implementations can optimize by coalescing the lookup and mutation today, without this API.

BFS: are there engines that optimize this?

WH: We’ll find out later in the queue

SYG: I like this proposal. To WH’s question: it’s not that this API can’t guarantee that you can never do a single lookup. It would only be a performance issue in a hot loop or something. It’s worthwhile having this API for the average case to cut down on lookups.

KM: In JSC we have abstract operations for finding the bucket — it already optimizes so you only do the lookup once.

BFS: Will that remain true if we add normalization or custom equality? Normalization modifies a value before storing it. It would modify a key before storing it in the backing store.

KM: we’d probably inline the normalization op. If it’s inlinable and not too crazy, you’d get the same thing, although that would only apply to the highest tier. Without normalization there’s probably a simple optimization. (describes simple optimization)

BFS: A code search on GitHub wouldn’t work. A variety of people are doing it in series and then doing the get statements afterwards

I did an AST search on npm for this code pattern which resulted in only about 600 occurrences for this exact pattern. People were doing a lot of extra junk.

JHD: You said people were writing extra junk in the `if`. Do you know how much of that stuff wouldn’t be able to move into a function?

BFS: I could do a search for that I was marking if they did anything besides this exact pattern

YK: I think the entries API in Rust is nice, it’s maybe an extra object and may be worth exploring at this stage.

BFS: I’m not interested in the direction (??)

DD: I’m generally supportive of this. I think it matters for asynchronous analogs. Even if it’s fast, then having an atomic operation on the cache is nice.

AKI: What is our desired outcome?

BFS: This is just an introduction.

JHD: I think it’s appropriate to ask for stage 1. Personally I care a lot more about clarity of intention than I do for performance. While I don’t want to make things slower, I think there are a ton of examples where this would improve the intention of what developers are trying to do with their code. I think it would be good to ask for stage 1.

BFS: You can ask for stage 1!

YK: Who’s the champion of this proposal?

BFS: We can try for stage 1, I can champion it.

MF: I am also in support of this proposal. One thing we’re going to need to figure out during this process is whether we implement this by deferring to one of the operations that are the core subset in maps or if we directly touch internal slots. We’ve had to wrestle with this a lot in the Set methods proposal and we still haven’t reached consensus. You might want to start thinking about what’s best to do here.

BFS: Ok.

Dean: I also advocate this. The fancy JITs can get this perf anyway, but the simple JITs can’t. Collections are crucial to things people do. Having a more direct representation can add quality across the board. I hope you go for stage 1 and beyond, yes.

YK: Im agreeing with everything that people said about doing this for the developer intent even if it’s not more efficient.

#### Conclusion/Resolution

- Advance to stage 1

## Explicit Resource Management for Stage 2 (continuation from [Tuesday](https://github.com/tc39/tc39-notes/blob/master/meetings/2019-07/july-23.md#explicit-resource-management))

Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-using-statement)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkdZAmxoB7HKzm78gCw)

RBN: (presents slides amended to Tuesday’s slides)

WH: Are you advocating for the new semantics on this slide now? (see slide ‘Amended semantics #2’ re: binding disposal)

RBN: yes, I am

DT: I would propose it shouldn’t catch the exception you mentioned there.

RBN: If you have a second declaration that would be caught if you throw an exception I am thinking in that case the initialization should be part of what gets caught.

RBN: (continues presenting slides)

MF: I believe you’re looking for stage 2? I would appreciate if we don’t spend much time talking about syntax. We don’t need to nail that down before stage 2.

JHD: Stage 2 requires precise syntax laid down.

RBN: But it can have todos

BFS: PoO stage 2 requires syntax.

PDL: I agree that we shoulndt spend time on syntax, is this blocked from stage 2 LEO and others, are your concerns addressed?

LEO: What was presented right now is not blocked for stage 2.

AK: Java introduced this. If you search Google for this, you’ll find the Java syntax. So clearly, there’s a developer way to discover this. If Java was able to do this, why do we need a different syntax for Javascript?

RBN: my preference is that we don’t have the `using` keyword. I’m wary about ceremony around syntax that’s unnecessary. You want concise and clear syntax. I don’t want the feature to be postponed for a minor compromise

LEO: So I had concerns about intuition for the proposed syntax, as I was strongly convinced it would be confusing. But it comes from other languages, not just ones that use the `try` syntax. I had the chance to talk to potentially at least 20 developers from different perspectives to see what they see in the new syntax and all of them got confused by the new syntax.

AK: right now on Google, you can’t search this for js, but you would be able to

LEO: To be very honest, I am much more comfortable with a distinct keyword like is being presented right now.

AK: Why would JS devs have more trouble than Java devs?

LEO: I could not tell you that. Just having a different keyword for this helps it be more discoverable. It’s my intuition and how I got confused, and how I expect this to be the same for other web practitioners

RBN: A similar investigation was done for the pipeline operator recently I think. Not sure where that went.

YK: I agree in principal with what AK said. I think it’s worth investigating further.

RBN: If the review topic is not an issue for advancement It can be taken up offline on the issue tracker

WH: I _was_ happy with this under the first proposal. The changes you made for `try using` etc. are perfectly fine. However, the changes around destructuring and what gets disposed are something I’ve first seen ten minutes ago and I’m not as comfortable with proposing the modified variant for stage 2. I’d need time to ponder these changes.

RBN: The changes are considered spec bugs and todos, this could be a post stage 2 concern

WH: I would prefer that you go to stage 2 with the original semantics.

RBN: I will go to stage 2 with the original semantics and these would be considered spec bugs to resolve later in the process.

CM: `try using await` - I like this

JHD: In casual hallway conversations, someone told me about Go’s `defer` statement. Something like that sounds better to me. It sounds like a simpler change as it doesn’t add a new protocol. The semantics I imagine is let’s say in a block you do something like `file.open`, then right below it you say `defer file.close` and at the end of the block, it would run that statement/run that expression. I’m not necessarily saying that’s what this proposal should be, but it seems like something that would be worth exploring further. And if we went down that path, it would be a fairly large change to make during stage 2, so I’d prefer that we explore further before advancement.

RBN: I’ve discussed with you Kevin and others. That syntax suffers the same thing as using `const` directive, it makes it complicated to say “how do I close this one thing”. Having something that gives a consistent mechanism For cleanup is more interesting. Its not “I want to clean this up”, but “I want to do this at the end of the block”.

JHD: It’s for a wider set of use cases.

RBN: Yes, a wider set of use-cases.

YK: I still have concerns -- it requires you to say `file.close`. You could imagine someone wanting that. I do not want that.

YK: What happens if you have an async destructor, but you didnt say async?

RBN: If you have an  object that has an `asyncDispose`, it would fail because you don’t have an `@@dispose` function.

YK: What if you are inside of an async function?

RBN: It would throw.

BT: Do we have concerns with advancing this proposal?

AK: What did we decide about the syntax? Should we investigate further and maybe do user studying?

RBN: We have had syntax change discussion on other proposals in the past at stage 2

LEO: I want to continue investigating it. I know I’m responsible for this change we’re discussing now.

JHD: It is worth noting when we’ve done stage 2 syntax changes before, we were initially confident in the syntax at stage 2 time. I’m not going to put a foot down, though.

LEO: One thing that I missed from the slides is more examples showing the part where we dispose. The examples show the initial syntax but not really showing the part where this feature is really useful.

RBN: Yes, I had more of that in the motivations section

LEO: My only request is that next time we discuss this feature we emphasize the part where disposal is happening.

RBN: alright, that’s fine.

#### Conclusion/Resolution

- investigate syntax
- approved for stage 2
- YK & WH will be stage 3 reviewers
