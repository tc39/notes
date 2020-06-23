# March 27, 2019 Meeting Notes
-----
István Sebestyén (IS), Kevin Smith (KS), Adam Klein (AK), Leo Balter (LEO), Richard Gibson (RGN), Yehuda Katz (YK), Godfrey Chan (GCN), Philipp Dunkel (PDL), Brian Terlson (BT), Aki Rose (AKI), Michael Ficarra (MF), Chip Morningstar (CM), Waldemar Horwat (WH), Kat Marchán (KZM), Tierney Cyren (TCN), Shelley Vohr (SVR), Myles Borins (MBS), Jordan Harband (JHD), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Randy Luecke (RCL), Daniel Ehrenberg (DE), Mike Samuel (MSL), Joyee Cheung (JCG), Till Schneidereit (TST), Shane Carr (SFC), Patrick Soquet (PST), Peter Hoddie (PHE), Kyle Verrier (KVR), Mattijs Hoitink (MHK), Keith Miller (KM), Michael Saboff (MLS), Jordan Gensler (JGR), Mark Miller (MM), Joshua Peek (JPK), Mu-an Chiou (MCU), Guilherme Hermeto (GHO), Sathya Gunasekaran (SGN), Felipe Balbontín (FBN), Jory Burson (JBN), Shu-yu Guo (SYG), Joe Sepi (JSI), Chris Hyle (CHE), Justin Ridgewell (JRL), Rob Palmer (RPR), Keith Cirkel (KCL), Robert Pamely (RPY), Henry Zhu (HZU), Daniel Rosenwasser (DRR), Caridy Patiño (CP), Diego Ferreiro (DF), Domenic Denicola (DD)

Remote:
Ron Buckton (RBN), Kevin Gibbons (KG), Gus Caplan (GCL), Valerie Young (VYG), John-David Dalton (JDD), Gabriel McAdams (GMS), Ben Newman (BN), Ross Kirsling (RKG), Frank Tang (FYT), Igor Minar (IMR), Miško Hevery (MHY)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/03.md)


## Function implementation hiding (Stage 2 update)

(Domenic Denicola (DD))

- [proposal](https://github.com/domenic/proposal-function-implementation-hiding)

DD: The scope of this proposal has slightly expanded.

DD: There is a question from the audience about `Function.prototype.length`. This will be discussed more in the presentation.

DD: One major clarification is that this is an encapsulation primitive only. After discussion with major implementers, this is not a memory saving (something?).

WH: Can you clarify memory saving? Is this application-level?

DD: Yes, this is application-level memory saving. Memory saving should be on the application level, about how they communicate with the VM.

(presents [Why a directive prologue](https://github.com/tc39/proposal-function-implementation-hiding#why-a-directive-prologue))

DD: This proposal is good to be lexically scoped. You should be able to just add this and not have to transpile your code. You should be able to add this and get the benefit in browsers that (implement?) it.

DD: Developer tools are not in our scope as a committee. This proposal impacts only two things – `function.prototype.toString()` and function values produced by parts of the error stacks proposal.

DD: I don't think this will be used everywhere, as `use strict` is. We think this will be used in cases where encapsulation guarantees and backwards-compat guarantees are most important.

JHD: In the absence of stacks in the spec, how would you propose wording a normative requirement to hide stack frames?

DD: What I've done is added it to prohibitive extensions. Runtime mechanisms may not (?).

AK: I'm not sure this matches what builtins do today.

DD: Michael have you thought about this further?

DD: We definitely don't want to expose line numbers, that's basically exposing source code.

DD: This may be a stage three blocker if we've not done our research here.

YK: I would find this feature useful. Ember has been trending in the direction of using more WeakMaps. I think there's a pretty good chance we (Ember) would want to adopt this in some sense.

YK: I totally agree this doesn't have anything to do with debugging tools. Frameworks like ember have our own debugging tools. I agree it's annoying to scope these problems. In the same way that DevTools has access to the source of truth, Ember's debugger also needs access to the source of truth.

DD: Does Ember use DevTools?

YK: There are some problems that can be solved by using DevTools. You'd need handles to objects to make that work. Test frameworks might want to have stack traces that have extra information.

DD: DevTools could get some feature that can punch through this.

YK: That's fine, as long as it's exposed.

DD: I'm fairly confident that this could be built, it just depends on if they expose it as a public API. We can lean on them to expose it as a public API.

DD: I would like to clarify that this is an encapsulation proposal and not intended to save memory. Memory saving should be done through application level meta info.

JHD: In the absence of stacks in the spec, how do you propose restricting stack access?

DD: Added via prohibited extensions. Runtime mechanisms for example a stack property must not include function code.

JHD: I'm asking because I'm doing the stacks proposal and want to understand the interaction. If this proposal goes in first, this proposal could become normative.

DD: I don't know if there's been discussions on the stacks proposal yet, but as of yet, I think the discussion has been on the content, not on the formatting.

MM: But this would become a normative requirement.

JHD: I just want to make sure it will work together regardless of ordering.

DD: Yes, it would.

WH: I thought this was about hiding the source text. What are you doing in stack frames?

DD: The stack property of errors should not allow introspecting. We determined there are 2 sides of the same coin.

WH: I'm confused what you're proposing here. In your call stack, will frames of functions annotated with this directive not be present in the stack at all?

DD: Yes, that's right. This is how it works for built-in functions. If you call for Array.prototype.map now, it doesn't show up in the stack.

WH: This is very different from what I thought you were proposing.

AK: I'm not sure this matches what implementations do with built-ins; I just tried `Array.prototype.forEach` in Chrome, and it shows up in the stack.

MF: People have said there are line numbers given for built-ins...

DD: We definitely don't want to expose line numbers. But maybe we don't also want to expose the full stack.

YK: Most of my feedback here is about framework usage. Built-ins work by the first time it's called it's in the stack frame, and this proposal may not support that.

DD: I would love those semantics at all. I need to think if they are coherent. I want to make sure they are consistent with MF's requirements to limit access.

YK: This is great in the direction of being a native feature instead of a V8 feature. I like the direction of using WeakMaps. It would be easier for me to adopt if I didn't have to adopt builds to use this. I think there's a pretty good chance that we'd want to adopt this in some sense.

YK: I agree that this doesn't have anything to do with debugging tools, but frameworks like Ember have our own debugging tools, and it seems scope-expanding to solve this problem, but in the same sense that the browser needs access to the truth, Ember needs access to the truth.

DD: Does the Ember debugger use the DevTools API?

YK: There are 2 ways this can go down. The first part is that you could use devtools APIs. You have to have code on both sides and you want to force a reflection. You'd need handles to objects to make that work. I don't know the prioritization of the DevTools team, but it seems like something that could get lost. The second thing is test frameworks might want stack traces that contain extra info.

DD: I would prefer a solution that involves, these are hidden from runtime introspection except for devtools.

YK: I'm 100% fine with that if devtools actually adds the feature.

DD: They will probably add it, since they will need it for their own purposes, so I suspect they will add it as a public API.

MM: There is a use case for the opposite side of  `hide implementation`. One of the decisions we made with `use strict`, you cannot turn it off at an innerpoint. It's a one way switch. On the other hand, negating makes sense with `hide implementation`. It turns out there's very few functions written for the purpose of transmitting source code and evaluating it elsewhere. XS does this and they do it for memory saving reasons. In an environment where all function implementations are hidden, it would be nice to mark implementations that we want preserved. I'm not necessarily suggesting that, but I'm putting it on the table.

MM: The new thing today about bundling this with stack censorship is, I very much agree that more knobs on information hiding on stack introspection is good. Error.prototype.stack was moved to Annex B for that. Having more knobs would be a good thing. The historical lesson is, often new things are introduced having a smaller number of knobs controlling a larger number of things seems good because it's less to think about. But, for example, having non-extensibility both prevent adding new properties and prevent changing prototype inheritance was unfortunate. By bundling these into one knob in ES5, it reduced cognitive burden at the time, but seems confusing and inflexible today.

MM: I find the stack hiding part of this proposal extremely valuable. When you're looking at a stack that goes through a membrane, for almost all purposes you don't want to see that noise from the membrane in the stack.

DD: Okay cool, thank you all. I find your case about the opposite directive really interesting. If anyone has any replies about yes we should do that or no we should not, I'd love to hear that. Like, today.

YK: At first glance, my sense is, I can imagine in Ember that we are forced to do runtime introspection of our code. We sometimes need to check the version of Ember we are running. Like, targeted unhiding seems like it could be a thing when you start looking into the codebase.

CPO: Bundling is a problem, obviously. We show the implementation, if we're forced to revert that we can possibly do that via .toString().

YK: I didn't understand that.

CPO: You have this show string method. Can there be a unshow string method?

MM: To clarify, the membrane use-case was slightly different. I don't think a membrane should introduce a distortion of the showing of code from one side of the membrane to another. Rather, it is about hiding the membrane mechanism, so the two sides seem to have called each other directly.

MSL: For the proxies stuff, you can always (?).

DD: I think we should proceed as is, instead of adding these considerations for the membrane use-case. We can then address the membrane use-case later.

WH: It's not clear to me that hiding the source code should be tied with deleting stack frames. It makes sense for hiding source code to also delete source line locations from stack frames, but not the frames themselves.

WH: I also have questions about the ergonomics of adding directive strings in various places. If you misspell a directive, is the tooling going to tell you that you're not actually doing a directive?

DD: There _is_ tooling, but that's a good point. I want to present and work with MM, exactly what should be hidden. There are some questions about built-ins and membranes that need to be figured out.

WH: I also wanted to emphasize the comment about negating the directive. It really does make sense to have everything hidden except for a few things in your code, so we should have both polarities of this directive rather than deferring the negative to the future.

YK: This is a clarifying question: Bundling tools would have to make functions in order to ... Have you considered allowing you to put it in blocks?

DD: I guess so, yeah.

YK: Have you considered putting it in (?) blocks?

DD: Yeah, but it definitely complicates the pragma.

YK: Bundlers like Rollup force you to clear out the craft.

DE: I don't think that the membrane discussion should block the proposal. Looking at the Decorators proposal, I think we would meet a lot of the goals of this, in terms of static analysis. In this case, we would make a decorator label, like `hide:`. String pragmas make me a little uneasy because if you type something wrong it sort of ignores it. I don't think we should serialize pragmas in this way.

DD: Thank you.

MLS: I have two points. First, this is like a paper tiger in terms of source hiding. If you wanted to do it programatically, you can just fetch the source by string. So it only helps straight JavaScript programming, but you can still do fetch. The second thing is, we have one string pragma now, but this proposal and others, we could have two or three soon. I'm a little concerned that this may be the wrong way of doing this. Bundlers may also have to deal with resetting in some way in the next process or something.

DD: There's a few things. Disabling runtime introspections through toString and error stacks is useful because there are other things like ESP, module system, etc., and that the source code delivered by your server might be different the second time. I think there's value in saying, I'm a library, run me, but don't look at my source code. In terms of pragmas, I tried to express that this is a special-case tool. I do agree there is some tension, and as DE brought up there's a lot of ways to decorate things. The decision between these pragmas/decorators is backwards compatibility and whether you want to block on Decorators proceeding. My intuition is to use pragmas and YK encouraged me to use pragmas, but I am open to using decorators instead.

YK: It's always the case when you talk about hiding things from runtime JS that curl would work. The browser has a massive amount of functionality with that objection. It's necessary in the security model. But in the browser already, you can use curl, but you can't use curl that includes a user's credential. The thing I would be interested in is people casually looking at the source code as a version detection mechanism or generally trying to make a choice at runtime based on the implementation. I would prefer to avoid that if there were a way to do that in another way.

MM: I want to remind everyone that DD was clear about the purpose of the proposal (and what its purpose is not)—this is not intended to hide source code from human developers. Purely intended as a runtime matter: to hide source code from other code in the same runtime.

MF: The directive prologue is called that b/c it's intended to support multiple types of directives. It's supposed to be extended by host directives, and it's intended to allow us to add more directives. `use strict` was not intended to be the only directive. I wanted to mention that we intended to, as part of this proposal, add a directed prologue to class bodies. I think most people won't care but some people might feel strongly about that.

DD: Does anyone feel strongly about that?

WH: As long as the syntax works, I'm fine with that. I'll check whether a proposed syntax works.

KS: So you can have class name currently, and then string, so can method names within a class body be strings? So string name and square bracket?

DD: (grumbles) I think they can, so this falls under WH will make sure the syntax works. We will work together and make sure it works.

DE: Class field names can be strings. It's just completely ambiguous.

DD: We could look ahead to field names, etc.

DE: No, unfortunately it already is that way. It already declares a field named that, so it would not be possible, unfortunately.

MM: The directed prologue has to be a string literal expression statement syntax. Just quote-directive-unqoute-semicolon.

MF: It makes it more convenient to hide all members of the class, but we can do the proposal without it.

WH: `"hide implementation"` inside a class body could both hide the class's implementation and declare a field with that name ☺.

(laughter throughout the room)

SYG: Will there be normative language that application-level switches align with "hide implementation" semantics?

DD: Good question. Application-wide switches work through the host-wide hasFeatureAvailable switch. That makes the hidden implementation...

SYG: Given that we've talked about source hiding... I think that's a good argument for separating the knobs.

DD: If we were to add an application-level switch, maybe it should only hide toString. Wrapping up, we have a few things to address. (1) Name of the directive: if you care about that, let's talk about that here or on GitHub. (2) Censoring name and length of functions. Those are the big ones.

YK: When you're hiding stacks you probably don't want to hide the entry point but you want to hide everything inside the function.

DD: Yes, we do want to look into that, and I think we both have a good intuition about how to go about that.

MF: This proposal was never assigned reviewers for Stage 3. Do we have volunteers?

DD: We need Stage 3 reviewers.

(YK, WH, MSL raise hands)

#### Conclusion/Resolution

- Not looking for stage advancement yet (remains at stage 2)
- Stage 3 reviewers: YK, WH, MSL


## BigInt function parameter overloading and Intl.NumberFormat.prototype.format

(Daniel Ehrenberg (DE))

[PR](https://github.com/tc39/ecma402/pull/236)
- [slides](https://docs.google.com/presentation/d/1L19IEMWwfGyKFbaA1FAKIl2PEuSoQXtSOvVQLHJV5g0/edit#slide=id.p)

DE: (presents slides)

MB: I think you showed the hazards nicely. Earlier you said we are talking about only these specific two questions right now, and that you're *not* asking us to _never do overloading ever_. But it seems that `.format` is the archetypical example of where you might want overloading, if ever. Do you have an example where you might want overloading, even if you don't want it here?

DE: Maybe you could ask WH who originally objected to that statement. I don't personally have a case for it.

WH: I have some questions for you first. You're proposing a number format for BigInt, which allows for things like `Number.format(true)`, which returns `1`. What should `NumberFormat.prototype.formatBigInt` do with `true`?

DE: It would call ToBigInt. Just like Intl.format() calls ToNumber, Intl.NumberFormat should call ToBigInt.

DE: ToBigInt on a boolean will make it into 1n or 0n. On a Number it will throw, etc., on a String it will try to convert it. I think it's good to use the same conversion semantics here that we use to convert to a BigInt64 array.
This is in the BigInt proposal.

WH: I am okay with this. On the other hand I think one method accepting both Numbers and BigInts would not be that bad of an idea either. In terms of scenarios about which MB asked [previous comment, apparently not recorded in the notes], there are examples like the key of a Map. It makes no sense to have a Map and a MapBigInt. Another example is a print function that prints whatever it gets passed — if it gets a string, it prints the string; if it gets a Number, it prints the Number; if it gets a BigInt, it prints the BigInt.

DE: This is just for the cases when you want to use a BigInt.

WH: In WebIDL, there's no reason you'd want to have separate BigInt and Number printing functions. So it comes down to whether you implicitly coerce strings to a Number. If you don't, then don't make separate methods.

DE: Intl.NumberFormat.format is a case where we want to coerce to a number type. console.log would be an example where we don't have to coerce types; they get printed "as they are."

DE: About WebIDL, WebIDL can still look at the argument passed into it if the argument was type any, we just don't want to make it easy.

WH: I think there's too much ambiguity about how different people would interpret your proposed WebIDL recommendation. I wouldn't make that recommendation here.

DE: What I meant by "recommendation" was not a recommendation in the webidl text but a recommendation in the (?) text where this was raised.

DE: We could say TC39 declines to recommend anything, or we could say we do or don't enable overloading.

YK: I agree with DE that we shouldn't allow numeric overloading. It applies to TypeScript situations. There are cases where you might want to accept BigInt or Number but not any.

DE: I think I explained how this works in WebIDL poorly. It's about finding a use case that we want to recommend as a pattern. If Intl.NumberFormat has a separate method, but if we want WebIDL to support overloading, that is inconsistent.

KM: What's the recommendation to developers?

DE: I do want to encourage users not to carelessly overload between BigInt and Number. If you're supporting more than BigInt and Number anyway, it's not hard to dispatch.

KM: I don't know enough about this, because I don't write enough web code, but it seems concerning that it appears to be used as polymorphic with Number.

DE: Yeah, that's the goal of this. BigInt is not intended to be polymorphic with number. Developers are supposed to learn that, or else they need to paper over it.

DD: One thing people miss is that the coercion behavior is key. The reason we want to avoid overloading... it makes it accepts number in the way every WebIDL accepts number, which is toNumber, and also accepts BigInt. ...

DE: Thanks for explaining, DD.

JHD: I want to talk about the usability sacrifices about throwing all over the place about using BigInt. It makes sense to throw in cases where you lose precision. But in WebIDL, you could have a special case to prevent losing precision. In the format method, there is usability harm.

DE: The exact expectation about how strings are handled. There are a lot of strings that are not represented as either a Number or as a BigInt. But just this expectation that you articulated seems difficult to implement technically.

JHD: What I don't understand is why I have to make a choice in my code to add "formatBigInt" instead of "format" when I have a BigInt. I should just pass my BigInt.

AK: If it's a string, how do you know which to coerce it to? If you get a String or an Object, how do you know which to coerce it to?

JHD: So when I'm not passing a BigInt or a Number, it makes sense to have the method name express the user's intent. But if I already have a BigInt, I shouldn't have to do that.

#### Conclusion/Resolution

- No conclusion reached. Topic added to overflow.


## Promise.result (no longer for Stage 1)

(Shu-yu Guo (SYG))

- [proposal](https://github.com/pemrouz/proposal-promise-result)
- [slides](https://docs.google.com/presentation/d/1O5wEWNdmNQqa6CKu60sBdK7Vv2oWtQy6vJQ5U25gsD0/edit)

SYG: (presents slides)

DD: It's not just a standard wrapper. It's a standard wrapper with auto-unwrapping syntax.

SYG: That is what we were originally thinking but that has changed. Is there anyone who thinks promise unwrapping should remain to be included?

MM: I understand the proposal is more general than a module exporting "then". But the problem that invoked the investigation, used as the motivating example, Allen Wirfs-Brock reminded me that, in the May 2018 meeting, I proposed that we statically prohibit the exporting of "then" from a module. And DD responded that people are doing this, it's almost a feature, people are doing it in lieu of top-level await, and when I found that, I withdrew the proposal. People are exporting "then" to express a top-level await. If we're not committed to preserving that use case, we should reconsider whether we should statically prohibit export of "then".

SYG: Are you proposing that after we have top-level await then there's no longer a need to export then?

MM: Similar line of reasoning. I think, if we're going to statically prohibit export of "then", we should do it sooner rather than later.

SYG: That is a path we could go down. That seems more risky than what's proposed here, but I'd love to get your input. We could set up a discussion.

MM: Implicit unwrapping sounds very dangerous to me. You're providing a standard convenience around userland code, which is probably a good idea, but the export of `then` should be expressly prohibited in that case.

SYG: I see. I want to table the static prohibitions talk currently because I'm not prepared to discuss that – it seems risky to me. People have raised in private communication that it may not be reasonable to statically wrap everything. People in the community decided to wrap everything as a way to prevent the foot-gun.

MM: OK, so here's an empirical question. In *ignoring* the export of "then", how much do people find the wrapping of something so that a Promise can pass through an asynchronous pathway?

YK: How often are you talking? 0%?

MM: Does it come up more than ~3%?

YK: It's come up but not a lot.

DD: `valueOf`, `toString`, and `then` are the only three string based interfaces in the language.

JHD: In Airbnb's codebase, we might automatically add a "then" to the codebase, for example, to automatically allow `import(specifier).then` instead of `import(specifier).then(x => x.default).then`.

MM: My overall feedback is, export of "then" is the only urgent issue, and that's easily solved by just prohibiting it. And once that's off the table, there's no longer enough need to add unwrapping.

CM: It seems there's ambiguity about what you're `await`ing for on an import. It seems that if I await an import, I am waiting for the module to be loaded. So there's an ambiguity about intention being manifested here. Providing a wrapper will catch this particular case, now when you do a synchronous import, now you get a wrapped promise. Even though you give it an await later and let it go through the chain of promises, it feels like a semantic mistake that we're trying to dig our way out of—it just doesn't feel like a clean solution.

YK: I really have doubts that the static restriction on `then` can be done without big risks.

SYG: I feel it's a risky thing too.

YK: I can't predict native modules, but existing compiled modules that would need to comply, I'm sure is not compatible. You could try to migrate it but would be a huge project.

WH: I agree with MM about the ergonomic part where if we provide a wrapper then people will feel compelled to use the wrapper everywhere despite it being provided for a very rare use case.

SYG: To the practitioners in the room, would you feel compelled to use this wrapper?

YK: It's impossible to keep people from doing it. It's a community project on par with __ everywhere. You'd have to spend a lot of time convincing everyone to do it.

DD: I think if we create a wrapper, it should protect you against toString, length, etc.

JHD: Like array length?

DD: Yeah, it should protect you against everything!

LEO: Yeah, I agree with CM here. I think it's wacky that we can return something that's not that thing. If I'm importing some external library, I could do brand checking at some point. It seems there's no happy solution to any of these. None of these are the best.

SYG: Focussing on a wrapper-like solution, how do you feel about a wrapper being a known solution? Do you think it's on the level of the current state of things?

LEO: For a wrapper solution. I'm not sure if this matches the current proposed thing. Then only think I proposed was moving the proposed to somewhere else.

SYG: The module thing is a motivating example here, but it's not intended to be solving a particular module problem.

LEO: I strongly oppose to statically prohibit exporting `then`.

SYG: That ship has sailed already.

LEO: Yeah, that shipped with modules.

SYG: To be clear, we are in no way saying we are trying to statically prohibit exporting then.

LEO: I with I could say that we could not wrap the module namespace ever, but I also don't want to see myself doing `await await` in a module expression. So seeing people eventually wrap their module namespace, it seems the status quo based on how we are today, it seems the solution is the status quo.

SYG: So you like the ad-hoc solution?

LEO: Yes, I like the status quo. I don't like any of the solutions but I think it's the less problematic one.

YK: I think in general I'm worried about overfitting on modules. I think overfitting is overfitting. I think lints are at a minimum an incremental improvement here. ESLint rejected the lint, which suggests we have a big problem. It seems we don't have consensus in the community about what "then" means.

SYG: I'd like thinking more about DD's idea about a protocol for wrapping anything.

#### Conclusion/Recommendation

- If you are interested, follow up with SYG.


## BigInt follow up conversation

(Daniel Ehrenberg (DE))

DE: There was a question from JHD about if you put a string into Number.format(), do we lose accuracy? This is not the intention. We cannot satisfy the intuitions that people generate. People think it should just work out, but this is impossible.

JHD: My question was actually If I pass a number and I pass a BigInt, both of those should work sensibly.

DE: How would you answer that question?

JHD: If I am passing a string into format, and I want that string to have different rounding behavior, I should know to do an explicit cast first. Why do you think it is clearer to have 2 methods that I have to choose from instead of 1 with an explicit cast? I'm suggesting that they just coerce to number.

DE: If this is intuitive to people, that when you pass a string that you get this rounding behavior, that would be the rationale for that other path.

JHD: In general, I'm assuming that having fewer methods is easier for people to understand than more.

SFC: The strange rounding behavior for strings is already a problem in Intl.relativeFormat. In my mind, it's sort of a difference of the overload method and a user passes a wrong type, it should throw a type error. Is that pain worth adding a second method to work around behavior that is already strange? The argument about what we want to encourage the community to do is a much stronger argument.

DE: What would you recommend we do here?

SFC: I am not sold by the argument to add a new method because passing a string to the method causes weird rounding behavior.

DE: We do a lot of designing on this committee around JavaScript being weird.

WH: The issue I see is that if we introduce different method names for formatting Numbers or BigInts, it causes problems for intermediate libraries that simply pass through numeric types to formatting. The argument for separating the methods is that strings would always coerce to Numbers, but that's not a big deal — unary minus does this and I don't see a lot of people screaming that they used unary minus on a string and it converted the string's digits to a Number instead of a BigInt. I think we should simply use the same method for both.

KS: Have we already conceded the strategic territory on the operators? If the behavior of the language is that strings by default coerce to numbers, then we should be consistent with that.

DE: I'm hearing arguments for consistency with operators. Would we have agreement with ToNumeric? Where Strings convert to Numbers and BigInts stay BigInts?

WH: Yes, that's what I would support.

MM: I support keeping it separate.

DE: What conclusion should we draw here? Coercing strings to Numbers? Throwing an exception when a string is passed in? I don't particularly like that solution. Any recommendations?

MBS: I think you should make a direct statement about which options you want to move forward with and then we can choose to continue to debate it. BigInt is stage 4?

DE: Stage 3. It's not integrated to the main spec...

MBS: Let's discuss what the two options are and reach a conclusion on the committee.

DE: The two options are: (1) encourage in these two cases we're considering that a new method be added. (2) Or using toNumeric as on BigInt to Number. I would be happy with using this overloading with toNumeric, personally, but MM seems to be opposed to that.

MBS: Does anyone else have blocking concerns that they would like to express here?

DE: I wouldn't think of them in terms of blocking Stage 4. Chrome has this implemented behind a flag, and it's been waiting for a conclusion from this committee before removing that flag. WebIDL has also had this implemented for a year. I'm not necessarily saying this is a blocker for stage advancement. But there's a concern about what we should be telling implementers to do—we need to make a decision in this room.

MBS: I would suggest to show that PR to this room and reach a conclusion then.

SFC: I need to look at the 402 notes to confirm that they're waiting on TC39 to rule on this first.

WH: More generally, things that consume numbers and convert them to strings should overload via ToNumeric. Things which combine or do computations on numbers are a different story, and my recommendation would be different for those use cases.

CM: We have advocates for each about the aesthetic concerns and what or would not cause more difficulty in practice. The question is, do we have any read on the ergonomics of these—what's more likely to trip up developers using these APIs.

DE: It's very hard to collect this feedback now, since BigInt isn't widely available. Developers expect BigInts to just work, when you're parsing JSON for example, which will just not work.

CM: To take a step back from the BigInt question, are there other APIs that faced similar dilemmas that may be illustrative?

DE: This is the only case I've heard of that makes sense logically to overload. DD do you have an example?

DD: Taking a step back. On the web, we've tried to increasingly avoid using overloading. We try to have distinctly named generators and constructors to avoid this.

YK: I agree with Dan's point about us already having made this call—if we give people some cases where that works and other cases where there's a problem, that doesn't help a lot. That just increases the surface area for people to get confused. I don't know if that means I agree with you or not.

LEO: AFAIK, WebIDL can follow from the decision from TC39. I would like to advocate for ToNumeric. For this very specific case, I would be happier to have ToNumeric overloading.

JHD: I'd asked on GitHub with Math.max if you give it an array of BigInts and Numbers, it throws. If we go with overloading as an example, eventually there may be a day where we want to mix those. There's no technical reason why I couldn't use .max or .min on those. I feel like we're going to run into a lot of cases where we're not going to run into those.

DE: We made an explicit decision not to create this expectation that things are interoperable in this way.

JHD: That's a good case for consistency. But, I'm worried there will be a number of cases where people have legitimate use cases where people are working with numbers even where we haven't thought of them yet.

DE: I think people have legitimate use cases for many legitimate things we're not adding to the standard, like parsing BigInts in JSON. So I don't really see the issue.

JHD: I think it makes sense if we say we don't want to satisfy that now, and maybe we'll look at satisfying it later.

DE: I don't see how if we made that second method now, that that precludes us from overloading later.

WH: This is an example of consume vs combine. Overloading seems like the right thing to do — it's the expectation. That is different than operations that perform arithmetic on numbers, where we need to keep Numbers and BigInts distinct. Max is sort-of in the gray area, where you're doing comparisons on numeric values. If you do general arithmetic, it makes less sense to do overloading because you don't want to combine a Number with a BigInt.

MBS: Let's review the 402 PR—DE, can you go over it now.

DE: I have to admit, I'm not comfortable with simply asking the committee if there are any objections to this PR.

AK: You can't have it both ways. Either you want to solve this now or not.

DE: Are there any strong reservations about this ECMA-402#236 solution?

WH: (raises hand). I would prefer the ToNumeric solution.

DE: There's a PR to do this. Would there be any concerns to the ToNumeric proposal?

(no hands)

MBS: So it appears that the room is happy with ToNumeric?

AK: I believe Jakob Kummerow who implemented this in V8 had some reservations. But it sounds like you are on the same page with him.

YK: It doesn't look like anyone has objections, but it sounds like you said this will let WebIDL use overload.

DE: A goal of mine is looking at Intl and how complicated the binding is from Intl to JavaScript. I think a lot of what we have is incidental complexity due to the lack of a standard binding solution. If we use this overloading, it creates a precedent to do this as a safer option more broadly in the ecosystem.

RGN: Specific behavior here, if it's passed a string that cannot be losslessly represented as a number? Is it converted to a number?

WH: It's the same as if you pass a string to a unary minus.

DE: Yes, the same; it's lossy.

(Discussion of advising WebIDL)

WH: Advising WebIDL doesn't need to be a part of this proposal. What I think WebIDL should do depends on the situation: whether numbers are consumed or put to some other use. I am a bit uneasy with signing a blank check on providing WebIDL advice (and we're out of timebox to discuss it).

#### Conclusion/Resolution

- Consensus to move forward on [Intl.NumberFormat.prototype.format overloading with ToNumeric](https://github.com/tc39/ecma402/pull/236).
- DE can advise WebIDL to adopt this behavior in a personal capacity; there is no committee consensus yet on providing such advice.


## Yet Another Decorators Stage 2 update

(Daniel Ehrenberg (DE))

- [slides](https://docs.google.com/presentation/d/1mGqWHfs1EkBneG9CGJZj5mefzMrXQnt2FjqRp9geGxI/)
- [proposal](https://github.com/tc39/proposal-decorators/)

YK: Basically, you have to understand proxies to be able to write a decorator.

DE: We see in the ecosystem abstractions on top of the decorators proposal to make them easier to write. Separately, it might be difficult to add features to decorators and add to them over time. Lots of people have expectations that we can extend decorators.

DE: (continues presenting slides)

DE: I think YK had something to add here.

YK: Ember held back on adopting decorators as long as we possibly could. We originally didn't think we could make Stage 1 decorators work for various reasons, so we were excited about additions in Stage 2 decorators. But we are stuck between a rock and a hard place here; we want the features from Stage 2 decorators, but we have adopted Stage 1 decorators. So we accept what happened here and that more effort is needed to get broad consensus, but we were really conservative...

DE: (continues presenting slides)

MM: The thing about them being knowable, because they're lexically visible or in scope. Does this bottom-out in the lexical scope?

DE: No. These are details that we can further explore.

MM: This tension in JS, about static knowability and just-in-time knowability.

DE: There are some details in scopes that we have to work out, but I share that goal.

DE: (continues presenting slides)

YK: I always get the emotion from this room that this seems like a very abstract question (refers to slide entitled "Recommendations for authors of decorators today"). I wanted to explain that since fields are not actually a feature of JavaScript in the target language, what ends up happening if you want to decorate a field... the original approach in the Stage 1 timeframe... (too fast)... The biggest difficulty is targeting a decorator in a quickly changing ecosystem.


DE: A lot of things need to intercept the initializer. You can't use set anymore.

YK: For all these reasons, I don't want the committee to keep waiting on standardizing because the longer we wait the longer more people will keep using Stage 1 decorators.

JHD: How to consume shared decorators in Scripts?

DE: We discussed this on GitHub. I think we should explore this in tooling since people who write big scripts usually use tooling to put it together.

JHD: How will things work in a world where half my dep graph uses native decorators, and the other half uses transpiled decorators?

DE: This seems like the kind of things we should work with transpilers to resolve offline. We should have an answer before Stage 3.

WH: In practice, we expect the more popular decorators to become built-in at some point. How do you write your code to directly use a decorator if it's built-in and provide a user-defined polyfilled decorator it if it's not?

DE: The pattern of checking the global object and mutating the global object to polyfill is not there. The import maps proposal from Google gives a fallback list of different options for modules to load. So you could import a module and in your import map have an expression to load a different module if the built-in decorator is not there.

MM: I thought these were defined in lexical scope.

CPO: At first glance, this seems to solve our use cases. My question is sort of a follow-up on WH's question: It feels to me the fact that decorators are not JS values that this has a fallout on the whole JS ecosystem. The way I see it, at the end of the day, at the evaluation time of the class, you have all the right references. I want to challenge the assumption that it must be something else—why not a value?

DE: I don't see how to meet the goals of this proposal while make decorators JS values.

CPO: Maybe you can explain the details of why you couldn't use values?

DE: Since they're not values, they can only be constructed in these fixed ways. So this enables static analysis. This makes the code decorations visible earlier. You could also say those are non-goals.

RBN: In the stage 2 proposal, we'd run these decorators in the class declaration. I understand why this is an issue in the static analysis of the class. In the current proposal, it kinda rolls back the clock to stage 1, but it also emulates what transpilers are doing today. That's basically what this proposal is doing with the added complexity of @wrap decorators, or having to define new properties with hidden class transitions.

DE: I was trying to meet the goals of the transpiler output.

RBN: So there are a couple things that make me feel that stack decorators are not necessary if the actual runtime semantics is that these are not evaluated until the end of the runtime definition. The decorators that are registered...

DE: I agree that these original decorators don't do too much. The idea was that we have a space to build on these primitive operations.

RBN: (refers to slide entitled "@register") If I set something as not writeable or not configurable, ... (too fast)

DE: The idea is that wrap would handle accessors. It would just wrap the accessor, not coalescing. That's in the README. We should hopefully be able to use the mechanisms that JS engines have to conditionally execute the class definition and create a template out of that. So if we were to go back to a Stage 1...

RBN: Since the semantics to evaluate these at the end, the semantic of static is not necessary... this adds more complexity than necessary. Of all the built-in decorators, the only one that adds a use case not present in Stage 1 is the @register(?) decorator.

DE: I think I've stated, the whole point is this extension mechanism.

RBN: lexically scoped decorators cannot be "namespaced". You can't logically group decorators based on some kind of common theme.

DE: I think that's fixable. There's an issue thread where the proposed syntax is listed.

IMR: We want to make a quick support statement on behalf of Angular. We've been using them for the longest in the JS. Stage 1 and Stage 2 proposals are in a stalemate and this proposal represents a way out of that stalemate. There's some risk to this proposal, but the Stage 2 proposal didn't add enough value for the overhead, whereas this one adds much more value.

DE: Thanks.

AK: Happy to see the focus on performance concerns. Thanks for taking that feedback seriously.

DRR: There is this cross resolution problem. When we need to generate code at parse time, that seems like one of the biggest things we'll need to tackle.

IMR: Locality is very important, and losing that should not be taken lightly.

DE: Does this seem to the committee to be a promising direction? Or do you see reasons not to pursue it?

MM: I'd like to see it pursued, but I'd like to see some course-corrections.

DRR: The cross-resolution is probably the biggest concern for tooling—babel included.

TST: I personally like this direction personally, and I think this has a better chance to actually be implemented in a performant way.

DE: If anyone wants to get involved, please submit feedback on GitHub issues, but also let me know if you want to help spell out some of the more complex things.

#### Conclusion/Resolution

- No record made


## Temporal stage 2 update

(Philipp Dunkel (PDL))

- [proposal](https://github.com/tc39/proposal-temporal)

PDL: (presents slides)

PDL: We resolved several issues. (1) we are using BigInt always now. ToNumeric will be used for input types. In terms of polyfills, we'll have a number of factories that make it very clear what is happening. Instant will show nanoseconds since the epoch (?). (2) Zoned: Zoned toInstance (or ZonedInstance?) was renamed to ZonedDateTime... (PDL continues discussing other issues in the slides).

PDL: We would like the committee to move forward with standard modules. That has now turned into a blocking issue.

AK: Regarding standard modules blocking this, it seems there are still active changes on the API. Can you clarify?

PDL: The APIs for the five existing objects are pretty much frozen. The polyfill has been out for awhile. So I think we're fairly close to that point. Also, TC39 is not particularly fast and I fully expect that built-in modules will not get done today or in June. And I think by that time I think we'll have the rest ready as well.

DE: On the topic of "block", I think the important thing is that this raises the importance of standard modules in TC39. I would like to see TC39 make more progress on that subject.

SFC: On the last slide, you had a list of next steps. I would like to suggest that we prioritize discussions of toLocaleString and interoperability with Intl.DateTimeFormat.

PDL: For Instant, that is transparently convertible into Date and therefore can work with Intl.DateTimeFormat.

DE: Yeah, there are still other issues to deal with.

RGN: The concept of renaming/subsuming ZonedDateTime. Going with Instant allows 4 types instead of 5.

RGN: There are three distinct concept represented by two models. Instant is a point in abstract time. One level up, there is fixed offset (zoned datetime) that is a union of an instant with a non-chaining UTC offset. One level up from that is (?), which is defined by time zone (string? name?).

PDL: I don't see where you have the three models. Because you basically upt ZonedDateTime as two of them. Since these objects are all read-only, ...

RGN: Let's say you have the time at the start of this meeting, March 26, 1400 UTC. But more accurately, it was 10:00 with a UTC offset of -4. So if you subtract 180 days, you end up still with UTC offset -4. But if the timezone were set to America/New York, then I would end up with a UTC offset of -5. So the same operation depends on the timezone. If we are okay with the same type of object having different results, why not merge Instant and ZonedDateTime into one type with an optional timezone?

DE: We have a monthly call to discuss Temporal. Please sign up for that monthly call. Contact me (littledan@chromium.org) for the link. It is especially useful to get use cases people have. Once we get broader feedback based on this, it is easier to make those decisions.

WH: I'd like to present a counter-argument to merging ZonedDateTime and Instant. It's useful to have a data-type on which you can do calculations on time values and intervals knowing exactly what you'll get. Just for API design, it's useful to distinguish Instant from things with wacky timezone behavior such as occasional missing hours or changing rules.

DE: I agree. Is the committee comfortable with moving in the direction PDL suggested of advertising the polyfill?

(no objections; small applause)

#### Conclusion/Resolution

- PDL will move forward with the next steps listed on the final slide.
- Details of toLocaleString will continue to be discussed.


## Let's ship it: replace es-discuss with moderateable forum

(Aki Rose Braun (AKI))

AKI: We don't have a lot of control over the mailing list. There's not a lot we can do with it.

WH: You can't unsubscribe people if they're spamming or causing problems and block mail from people who aren't subscribed to the list? That's basic mailing list functionality.

TST: Or you could prevent external people from posting.

AKI: TST, would you like to be the moderator and handle these issues?

TST: No, I agree with moving off es-discuss, just not for this reason.

AKI: (discusses more problems with the mailing list and introduces Discourse)

TST: The Rust community went through this transition several years ago. I feel it was very successful and led to structured discussions. It led to a higher signal-to-noise ratio. I think those are good reasons for moving off a mailing list. Another thing I want to mention is, what I said earlier is, I work for Mozilla and I can manage this list, block people from it, etc. I have done very light moderating in the last 2 years or so. But I am not interested in that job and neither is anyone else at Mozilla. In general I don't think there is any interest in the long term to host mailing lists. I would not be surprised if I were told in the not-so-distant future that we would just not be able to host a mailing list anymore.

WH: I find Discourse demeaning. It is too much gamification, with tracking how much time you spend on the site. I am active on es-discuss but I would not want to move to Discourse. It's yet another thing to check, and it's not very usable if you use an email client to read your email.

AKI: I appreciate your feedback, however, as a generality, I think Discourse encourages people to get involved. And I really don't want you to be bothered by that. At the same time we really need an opportunity for people to interact with us, and es-discuss is not working anymore.

WH: I disagree with that. I find this non-inclusive.

YK: The risk that someone will game the system to gain trust to gain permissions just to ultimately take advantage of TC39 moderation is there.

AKI: The trust levels are microcopy. They're not extremely prominent levels and many people won't even notice.

AK: Who will moderate this?

AKI: The CoC committee and volunteers from TC39. Once someone's been involved for a very long time, very active members may gain moderation abilities.

TST: You make this sound very objectively non-inclusive.

WH: I merely said that I feel that it is non-inclusive.

TST: OK, that's a good clarification. But ....

WH: I said inclusivity is important. You're saying I'm wrong to say that I find it non-inclusive for the reasons I stated earlier.

TST: We have an honest disagreement between saying this is not inclusive or not. This is not me saying inclusivity is not important. It is absolutely important.

AKI: I'd be happy to discuss this more in the future.

YK: I don't think a definition of inclusivity that is effectively zero-sum is accurate. If WH believes there are aspects of this setup that are problematic, like perhaps he prefers interacting with the community via email, you can find a way to use this particular tool in a way that mitigates their individual concerns enough so that they can be included.

AKI: We'll manage these settings—we have that power.

AK: It's not obvious to me that shutting down esdiscuss. The signal to noise ratio is low enough—without intending to sound demeaning—proposals that are largely out of left field, that don't really consider the history. My strawperson proposal would be to encourage the committee to use Discourse today before shutting down esdiscuss in some months.

AKI: One thing I really like about Discourse is that it attempts to surface the most active threads. It tries to help you find the things that are going to be interesting to you. If we seed it with our own conversations, and for want of a better word, _force_ a better format. I'd be interested in that strawperson proposal, but I'd still very like a timeline for when esdiscuss is shutting down.

JRL: If we do migrate away from the current esdiscuss, please create a read-only archive of it. When working on proposals, I found it enormously helpful to use the esdiscuss archive.

AK: I don't know who's responsible for that, but I would be hugely supportive of this

TST: You're probably talking about esdiscuss.org? That's not hosted by Mozilla. We will keep the esdiscuss live forever, since it's basically a static website.

KM: Why are we closing esdiscuss first?

AKI: I would like to have a timeline.

KM: I don't think we need to close it.

AKI: I am convinced that we don't need to close it immediately. I think a time period of 3-6 months is a good goal (maybe even shorter). If we determine that Discourse isn't working, than that gives us time to course correct.

WH: Rather than a fixed timeline, I'd propose something along the lines of 5000 useful Discourse messages before shutting down esdiscuss.

AKI: I'm opposed to a number that high, but not opposed to the concept

TCN: If you define it as something useful, that's impossible. But I do think a number of any kind of messages seems pretty reasonable. Additionally you can also set a timeline to sunset or revisit these metrics.

IS: For us, we already keep the archive. I would like to get a copy of the archive. Wiki archival was a year long effort, and until now the wiki archival has not been successful to date. It is very important, but also in the past we've had bad experiences archiving.

AKI: Discourse already has export and archiving tools available. It takes a couple clicks.

YK: there is a simple way to archive directly in the admin portal. Additionally, there are additional insight metrics like "what is most referred to topic?" that the Discourse team put a lot of effort in. It is not obvious that the consensus process that we use to agree on features is necessary/correct for agreeing on this kind of decision.


CM: I've interacted a lot with Discourse sites and found that they vary quite a bit. The gamification features themselves are not consistent across them—you can turn most of that crap off.

CM: You can turn most of that stuff off. I want to be wary in terms of engagement. A lot of the mechanisms are there to get people to continue to engage. We are not interested in engagement, we're interested in quality. If we get 100 very good bits of feedback from the community, I think that's far more valuable than 10,000 useless bits from the community.

AKI: 100% agreed. It's not about getting the bit of dopamine. We are looking for quality conversations with our community.

MM: I agree about the "demeaning" characterization, I also agree with the customization point. When setting up Discourse myself, I turned off as much of these features as we could, and I'd recommend we do the same.

AKI: I suggest we maintain the trust levels at least.

MM: Based on my experience, I don't think I've been affected by that. The in-your-face features with badges and gold stars.

TCN: What do people mean by demeaning here? I guess I don't understand. Could you clarify?

MM: Condescending is generally the word I use to describe it.

AKI: I could see how people would feel that way.

YK: Ember has been using Discourse for however long Discourse has been around. 1 person on level 3, 3 people on level 4 and 5000 posts. The trust features are in the background, not in the forefront.


You can really remove the gamification elements.

AKI: That's really strong evidence.

MF: I just signed up, I see there's a topic I especially want to avoid. Specifically "off-topic".

AKI: We just set this up with these categories, they are flexible.

MF: I used to participate in es-discuss for many years, but stopped because conversations were often off-topic. I want to funnel everybody into the way we'd like to participate – like giving feedback on proposals and not off-topic.

DE: I'm excited about this work. This can be good for early ideas. We have a lot of early discussions that are lengthy and can be quite difficult to moderate. I would like to work with you to help find solutions to these. We have basic draft guidelines, but there's more that we could do to help mentor proposals/champions.

JHD: In response to shutting down es-discuss, I think it's important to encourage people to move to Discourse, using a carrot not a stick. Second point: People often talk about es-discuss and the talk is often much worse than it actually is. I interact on the list often, and it doesn't actually require a lot of moderation; it's not like es-discuss is actively on fire. Responding to threads by saying this is a great thing to post on Discourse, may be a great way to encourage users to move to Discourse in that transition.

KS: In the old days you didn't have to subscribe to 10,000 GitHub repos. Today, it's hard to keep track of it all, and perhaps Discourse can help organize some of those topics. Maybe useful for announcements.

AKI: I would like to suggest requiring a blog post somewhere between stage 2 and stage 3 to educate people about features. It could be a central hub for people.

TST: Someone I reached out to was surprised to learn that we are still using this system for es-discuss. We do need to have a plan for moving off it.

#### Conclusion/Resolution

- Aki will email es-discuss to solicit a transition to Discourse. We will discuss in June whether to shut down es-discuss.


## Promise.any

(Mathias Bynens (MB))

- [proposal](https://github.com/tc39/proposal-promise-any)
- [slides](https://docs.google.com/presentation/d/1ARVDj_FcQViRCG8pPOOc1h-95sUU8s6gzBcXnln29Ys/edit)

MB: (Presents slides)

MM: We called it "race" and why "any" makes me nervous because of this concept called success confluence. If the outcome is successful, the outcome is insensitive to the order in which successful inputs contributes to the outcome. "Race" was named as it is to emphasise that the outcome in the success case can depend in the order which successful imputs happen. All the other ones, the additional non-determinism shows through only in regard to the way the rejections happen. I'm not taking a stand that the name "any" must be revised, I'm just voicing the concern.

MM: With regard to AggregateError, we have so far avoided introducing new error subclasses as opposed to Java or the web. JavaScript programmers write code that doesn't care what kind of error happens, they just treat it as an error. The message points to serves as diagnostic information to human developers. Given that history, I'd recommend that you choose one of the existing error classes here.

MB: Are you saying you wouldn't need access to the rejection reasons?

MM: I'm saying that I stupidly missed the entire point of introducing a new error type. My apologies. I retract my point.

MB: We chose the name any because there is strong precedent in userland libraries. This seems to be the userland choice. This doesn't mean I'm not open to further discussion, this is just what the community has landed on.

MB: (asks to progress to Stage 1)

MM: I support and am not objecting to the name.

#### Conclusion/Resolution

- Stage 1 acceptance


## `Date.parse` follow-up

(Richard Gibson (RGN))

RGN: I am interested in input if the digits were different as feedback for this. Accepting to stage 2 signifies that the committee expects this will eventually make it into the standard.

Put together interesting cases that were shared yesterday and added some additional cases that had been found along the way.

Every single test case by a strict reading of ECMAScript is not valid.

WH: The top one is a leap second. You're saying that should be valid too?

RGN: The top one is by someone from working on temporal. Not sure if this will be valid.

This is the kind of data that I'm going to consume, going to compose. What we're talking about now is not that we're going to ship it, but that we should deal with full standardization of that input that looks like the union of these two interesting subsets.

WH: What are the subsets?

RGN: RFC 3339 and the ECMAScript format.

WH: If you're saying it's the union, you must accept leap seconds, then, because RFC 3339 allows them.

RGN: They must have a uniform behavior across implementations, not that we must accept them.

DD: I think this proposal's narrow focus on a narrow subset based on other standards is not within scope for this body. What is interesting in standards is interoperability—we should get total interoperability. We should either accept the status quo as it is today, or we should focus on coming up with a rigorous interoperable algorithm. I don't think we should do any work if we're going to be doing it twice.

RGN: What would that look like?

DD: You write an algorithm that parses dates. Then you would come up with test cases, (that's the fun part). We've done this with things like URLs, Base64 encoding, MIME-type parsing, HTML parsing, also line type parsing.

RGN: HTML parsing wasn't finished in 2004.

DD: HTML parsing has not changed since 2004. The creation of the WhatWG was to standardize HTML parsing.

RGN: HTML and URL started from existing base specifications. There's a lot of specifications. If they're all accepted, are we going to implement all of them?

DD: Yes. That's the hard part of what we do, but that is our responsibility as a committee.

DE: I want to second what DD said. `Date.parse` is a world of sadness, and we have a responsibility to improve it. We have a different working mode than WHATWG, but that's not the point here. I think it's worth having a format that's compatible with different standards. We should be encouraging people to use the Temporal standard, which is moving ahead. I am happy that you stated these goals, and I think we can now discuss them as a committee and evaluate them.

YK: I think your history on HTML is pretty wrong, as a person who implements a not 100%, but tries to be 100%, compliant HTML parser. Approximately around 2004 there was a goal to find some new spec that was able to minimize the breaking changes from the existing implementations and it was able to achieve that, and basically hasn't changed since 2004. It was very important that we did a one-time big step, got everyone on the same page and stayed there. If we hadn't had this work in HTML, I don't think we'd have been able to write Glimmer.

RGN: This is the current text for `Date.parse` (points to ECMA-262 spec), there's not even an algorithm. If this cannot change unless that goes away, I don't believe this will ever go away and I will probably stop working on it. The current Temporal contains very strict parsing on what it can produce.

DD: Great.

RGN: There are parts of RFC 3339 that `Date.parse` cannot produce.

We have one standard of what dates and times look like. You would then have a choice between the mess of `Date.parse` and something (Temporal) that will not accept many types of strings.

MLS: I want to reply with a comment that one of us made. I don't think some browser's acceptance of a malformed date should not become canonically correct. We want to be very deliberate of what we include in the standard. I want to make that clear. That includes if Safari does something stupid, we should not include that in the standard.

TST: As another implementer, if we're the only outlier who accepts something, we will do our best not to accept it anymore.

WH: On the interoperability, I'd find it disturbing if we defined RFC 3339 leap seconds as being rejected. Because that leads to bugs that happen only 1 second every few years. We've been bitten by those in the past.

RGN: That's currently the case. Rejecting leap seconds is the consensus. It may even be uniform. Maybe one or two browsers support that, but for the most part, today, it's rejected.

WH: Yeah, we should fix that. It leads to interoperability concerns because RFC 3339 producers can generate those. We should accept them to avoid such obscure bugs.

JHD: One thing we often do here is basically specify web reality—specify to everyone that's how it should be so it's consistent for everyone. The intersection, even though it may be a very gargantuan task, and possibly something you don't want to do RGN, it still seems useful to have that implemented. Then the stuff that already works somewhere can't break in the future. That seems like a useful direction just because Temporal might show up in the future might show up doesn't seem responsible to me. I still want `Date.parse` to be somewhat reliable to me.

RGN: That's the essence of what I'm trying to do. I've presented it from a standards perspective or a engines perspective. The majority of the two subsets I'm talking about _are_ accepted everywhere.

JHD: To be clear, I'm not saying it would be not be useful to look at the standards and make sure browsers comply. Look at what the browsers do and continue to do that forever—even if that means maintaining non-compliance with RFC 3339.

DD: The problem with that is that two steps complicates the step in two ways. First, it causes the risk that browsers will not perform the interop. Second, it causes the risk that we would get stuck at step 1. Getting complete interop on a parsing problem is not an impossible task. It's doable, we've done it, we can do it again.

RGN: What you described as undesirable is what we did with classes. They were specced in a minimal form that would be expanded later.

DD: There's a difference between specifying the features and saying implementation to be defined.

YK: In addition to the risks DD identified, even if you make a change that in theory increases interoperability, there is risk of breaking things. An example is function in block in Annex B.

RGN: But if I remember correctly, it did change multiple times.

BT: Only tightening and aligning.

DE: We did explicitly leave things up to implementations.

BT: I would say it was an incomplete serialization of badness.

DE: We can all agree everything in the past was bad. (laughter) I think we should pursue this in the temporal proposal. If the temporal proposal doesn't support this, we should open an issue there.

Looking at a lot of cases and saying "we'll include this, we'll exclude this", is very useful. In V8, we implemented a use counter to determine how many times `Date.parse` came up at all.

SGN: A patch is welcome. I'm not signing up to do this.

DE: I think there's a real potential here and we're not talking about the union.

RGN: I need to make the decision about whether to pursue this longer or not. I will not bring this before the committee again if there's not interest in this work.

BT: There is a lack of consensus for this *approach*.

YK: I think there was a lot of constructive advice given here about directions you can take to achieve your goals.

RGN: THat would achieve my goals in a way that I am not interested in pursuing. I would walk away not with hard feelings but also not with an appetite to pursue this further.

DE: I think this is very important work and I hope we can work on it as a committee.

#### Conclusion/Resolution

- The committee did not have consensus to accept a change to the `Date.parse` algorithm that still allows implementation-specific behavior.
