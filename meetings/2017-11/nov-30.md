# November 30, 2017 Meeting Notes
-----

Jordan Harband (JHD), Rex Jaeschke (RJE), Michael Saboff (MLS), Caridy Patiño (CP), Peter Jensen (PJ), Sebastian McKenzie (SMK), Fabio Rocha (FRA), Till Schneidereit (TST), Peter Hoddie (PHE), Michael Ficarra (MF), Kat Z. Marchán (KZM), Bradley Farias (BFS), Daniel Ehrenberg (DE), Kevin Gibbons (KG), Chip Morningstar (CM), Dave Herman (DH), Aki Rose (AKI), Godfrey Chan (GCN), Yehuda Katz (YK), Natalie Silvanovich (NSH), Adam Klein (AK), Alan Schmitt (AS), Andrew Paprocki (API), Chris Hyle (CHE), Mattijs Hoitink (MHK), Mark S. Miller (MM), Mathias Bynens (MB), Keith Cirkel (KCL), Justin Ridgewell (JRL), Shu-yu Guo (SYG), Zibi Braniecki (ZB), Mariko Kosaka (MKA), Sam Goto (SGO), Keith Miller (KM), Sebastian Markbåge (SM), Dean Tribble (DT), Jafar Husain (JH)

Remote:
István Sebestyén (IS), Brian Terlson (BT), Leo Balter (LEO), Rick Waldron (RW)

-----

## 10.iv.d Object.freeze + Object.seal syntax proposal for Stage 0

(Keith Cirkel)

- [proposal](https://github.com/keithamus/object-freeze-seal-syntax/)
- [slides](https://www.keithcirkel.co.uk/object-freeze-seal-syntax/)

KCL: Lots of programs use Object.freeze/Object.seal, but there are two perceived problems:

- Too slow (but maybe not really)
- Too verbose when used on literals

KCL: Proposal: Add syntax for Object.freeze/Object.seal, to signal that this is a key feature, address verbosity, and explain that it is not slow.

KCL: Object.freeze {# #} (close at the end makes it more clear); Object.seal {| |} (an existing precedent in Flow code).

KCL: We can allow this in more places, for example in destructuring, sealed syntax fixes the list of allowed properties. Frozen literals can create const bindings, and use on function arguments directly. Also works with pattern matching.

JHD: How should this work with class syntax? Could we make frozen instances? Or, freeze the prototype of the class and constructor? Sealed and frozen both help.

KCL: Sure, let's follow up offline

JHD: Would the destructuring fail if something is undefined, or missing?

KCL: It matches your description - if the object you're destructuring over has the property, but it is undefined, then this would work. The only failure would be if the object you're destructuring does not have the property.

CM: The syntax applies in a definitional mode, for literals or where you're declaring something. Not applying to Objects

KCL: Right, we already have the functional form. This is addressing the ergonomics for object creation.

CM: Have you thought about inheriting the constness of an object when creating another one?

KCL: Programmers tend to understand that freeze works at just one level.

CM: To clarify, I'm wondering about a syntax for freezing existing objects.

BFS: There are other things which have literals and are mutable, like RegExps, functions, etc. Should we do something for those, like Chip's proposal?

KCL: Good point

AK: This uses a lot of syntactic space, in a limited area. I would've allowed things like the decoration of objects for that, given that we already have a way to do this.

KCL: This finds utility in a variety of places, including arguments; this makes it significantly useful to make sense to use this space.

AK: I disagree with the intuition that these are similar. I think sealing arguments are better done by type systems, and maybe if statements at runtime. I'm sort of opposed to using up this syntactic space when we could be using it for something new.

DH: The comparison to rest/spread is interesting. Unlike rest/spread, this creates a sort of combinatorial explosion. This increases the decision space--will we have the hash wars next, among people who are debating whether you should use hash everywhere? This comes at a big cost for the jobs of programmers and the ecosystem to figure out what the preferred style. We end up not resolving them, just getting factions. I agree on the motivations, but I'm stuck on the cost.

KCL: Do you see a lower-cost path?

DH: I don't know of one. You have to go with the grain of the language; I've become more conservative about additions over time. Doubling the number of ways that you can express the same concept is not an approach I feel good about. I know this is at an early stage; I am not saying I object.

KCL: Maybe we can discuss offline more. My motivations come more from invariants than convenience. It's difficult to write correct, efficient code that picks these things up.

DH: I've also realized over the years that the offline (tool) world is a legitimate piece of the puzzle. You can use TypeScript and Flow, and linters, to catch many of these errors without runtime costs.

KCL: I agree; GitHub uses flow, and I'd like to tell you why I'm presenting this: There's a huge sunk cost in Flow. We get a lot of application engineers developing features; they don't necesarily understand the intricacies of Flow, but are expected to use it. The problem here is that while their JavaScript knowledge is applicable, more esoteric tools like Flow are perhaps not common in a developer's repertoire. Obscure error messages are confusing. I'd like to push these common features into the language.

DH: I think type systems will become a strong fixture in the overall ecosystem.

CP: I'm not sure if this would help immutable.js. It'd be good to look at who's calling Object.freze, whether it tends to be called on an object that they create, or an object that they get from someone else. I'd bet that it's typically called on an object that you get from someone else.

CP: I will also suggest to split this proposal into two: a) how to protect your code from mistakes and b) how to protect objects that you will hand over to others.

KCL: Interesting, I will look into this more.

MM: This proposal does not address deep immutability, just single-level frozen-ness. However, it would be useful to make a proposal which would provide capabilities for that. For example, deeply immutable factories cannot create object subgraphs on subsequent calls which reference each other; this has been useful in some security reviews.

KCL: I was thinking that maybe we'd just put one set of # # to freeze everything inside, but went for this out of conservatism.

MM: You could also do this for function literals which are contained inside of here, including making sure that everything that is closed over is d

YK: This is a bit much, when it's basically a type system feature. A new feature has to be significantly worth it.

KCL: I feel this isn't making it a slightly more convenient API. There are plenty of things that are difficult to do, and this helps.

YK: A lot of times an API would work, and other times tools would work. I'm uneasy about using syntax for this when it could be handled otherwise.

MLS: I'd like to separate object literals and arguments as two separate things because of the runtime overhead of the arguments checks. I'm not sure we need to solve that argument when linters could take care of it.

KCL: You need a type checker for many of these things, and programmers I work with hate dealing with type system errors.

MLS: I'm not sure freezing argument bindings is worth it, with how they become const bindings; it seems odd.

DE: I like this proposal a lot; it matches other programming language concepts and decomposes to existing JavaScript concepts. Just like with classes, new syntax does not need to be used for new semantics.

JHD: Type systems can do a lot more. This for me holds its weight for syntactic space

KCL: Anything Babel can transpile is sort of not a new capability. I am not stuck on object literals.

SMB: You mentioned at the beginning that you think almost everything should be sealed or frozen. This is my concern with value types--it's really about shifting the whole world into a different mode. I'm not sure this will happen, with the shifting conventions in the language. What kind of value do you think this will have if we don't have this sort of ecosystem shift? I'm not sure if VMs will optimize for these things until they get enough usage, even if it has the potential to be faster. Currently, runtime overhead is a big reason not to freeze or seal many objects. Maybe there's some other way of addressing the performance issues.

Patrick: We already put closures, etc in ROM; any way that programmers can express immutability would be a huge benefit.

MM: To gain the implementation benefit, is the valuable concept the freeze/seal or the deep immutability.

Patrick: Currently, we use freeze/seal to get at it somewhat, but it's not all.

YK: Would you get incremental benefit from using it somewhat?

Patrick: Yes, we use freeze/seal in the built-in modules, but it's harder to convince application programmers to do this because of the complexity of freezing each little thing. At the same time, I'm not going to comment on syntax.

YK: It'd be nice to understand what would be ergonomic enough for people. I'm not sure this is ergonomic enough.

SG: I'm also not sure if it carries its own weight, but if we get transpiler experience, it would be very helpful. This has more velocity and we can see how programmers like using this feature. If we do have precedent from other languages, it would be helpful in making this decision.

KCL: Flow does have this pipe syntax, it's used with a pipe. We use it quite a bit in GitHub's codebase, where we use objects.

LHD: We use this all the time to catch bugs in AirBnB.

DT: Have you looked at annotations to handle this?

KCL: I'll look into decorators to see if it could cover all use cases.

YK: Decorators are especially great when they come with new capabilities, e.g., decorators on private state that let you implement ways of sharing things. I'd be interested in using decorators if it wasn't just exactly identical to Object.freeze.

KCL: Stage 0? Stage 1?

DE: I like this a lot, and it expresses a programmer area of interest. I'd support Stage 1

YK: I'm up for Stage 1, though

#### Conclusion/Resolution

- Stage 1 acceptance


## 9.iii.a Block Params to Stage 1

(Sam Goto)

- [proposal](https://github.com/samuelgoto/proposal-block-params)
- [slides](https://gitpitch.com/samuelgoto/proposal-block-params)

SGO: (Presenting)

JHD: With regard to colliding with match - the syntax assures that there is a guarantee that it wont be overridable. This is different to Promise, which is an Object I have to trust has not been overridden - which is different to match because of the syntactic changes which are currently errors right now.

DE: But because of that syntax, it would be impossible for us to cleanly override match or not. We'd have to come up with an entirely different syntax for match compared with Brian's proposal, should this proposal go forward and users write their own match.

SGO: My intuition is that this can be fixed.

YK: The way ruby works is that break and continue are block scoped. A break will break around the block.

SYG: I have concerns around scoping, and your extension on nested blocks. I feel it breaks my model, and I assume others about how hoisting and closures work. I imagine it breaks the performance model too. Maybe this is solved by choosing something other than brace? I'm not advocating that but I feel at this stage this is confusing.

SGO: It does not match my intuition. One of the ways to handle this is not allowing the block param to be used outside of the scope.

MM: The point of Shu's question: var as opposed to let or const, hoists. The issue is around Tenants Correspondance Principle.

SGO: Yes and other things that are function scoped currently. A function statement inside a block - is this a top level function statement or a es6 block level function.

YK: Ruby has one Tenants Correspondance Principle exception in blocks to make variable scoping block local and not as if in an if statement.

MM: I believe for JS the design principle for TCP is that you allow it, or statically disallow it. Is this correct?

SGO: Its an aspriation, not an explicit design choice

YK: Ruby doesn't have the same zooology of variable bindings. It basically has let. The equivalent thing to do here is to disallow var.

SGO: This makes sense do we have other examples?

MM: Function declarations in sloppy mode - but if you only make this available in strict code then TCP rules apply

SGO: It seems reasonable to disallow sloppy then

YK: So for the benefit of everyone: TCP is useful because if you have a for-loop, and want to switch to a block-style equivalent, you'd like to mirror the semantics and not have to signficantly change code.

SGO: So Shu how are your objections?

SYG: If var were disallowed this sounds reasonable. I still have concerns on performance, and closures being closures.

RBN: Looking at option 6, there was a similar push for this in generators. Exceptions could be raised for yielding. We moved to the iterator protocol. We could perhaps create a similar protocol for blocks here. We could convert these keywords into iterator style results around. The function calling the block could handle these explicitly or return them out of the function. The runtime parsing could look at the return results to determine if it needs to break continue return or yield and flow that out. This is similar to how we handle block scoped variables in a loop for TypeScript - believe it or not.

SGO: Yes absolutely. This is a reasonable exploration, I had considered it but its not in the slides. The same argument for break and continue applies to returning an object - the person providing the foreach might forget about corner cases. There aren't that many things you can do with the result, so maybe a declarative option - like the inline keyword - deals with the complexities of break and continue. It might lead to fewer errors. Its declarative vs imperative. The imperative allows for more flexibility but allows more errors. Its a trade-off.

BFS: I have a concern about yield in particular. It seems odd to be concerned with so many different completion values. A protocol might alleviate you banning yield in the examples, but I still have major concerns as you could roughly pause the block. I would not want to see any run to completion changes for this - which is a lot of what this discussion is for.

YK: Does anyone want run to completion changes?

BFS: To clarify the example of return in foreach, could return cause the foreach to return - rather than the block?

SGO: Yes - pretend this was an unless you could see the return.

DH: You mean the return block could return the caller? The answer is no.

MM: The only thing the block could do to prevent returning is a try/finally. Finally has to run.

DH: I think Bradley's issue is not a problem. It's not possible.

MM: What can happen with try finally is the `unless` can intercept the `return true` and do something.

DH: This is confusing the issue, its something you can do this always in JavaScript.

MM: Well its subtly different, I think its fine but it changes what you can derive from the static analysis of the program.

DT: Almost all of your examples are to do with new control flow. This is a hack for syntax extensions. My concern is that is has a cliff that you fall off. We can solve this with hygienic macros which could be a substantially better approach for having what is effectively random people adding control flow statements.

SGO: I buy this, for what its worth in Kotlin the most useful examples are builders not control flow. As I exposed this to people a lot were excited about control structures, but I'm coming from a Kotlin perspective. DOM construction application is important to me.

KCL: I'll add: test suites could use this and its not control flow.

SGO: I am looking to advance this to stage 1. Are there any deal breakers?

SGO: We should defer this until after lunch or later.

#### Conclusion/Resolution

- Delay conclusion on Stage 1 until later in the meeting


## 8.i.a ArrayBuffer error reporting tweak by Andre Bargull

(Brian Terlson)

- [PR](https://github.com/tc39/ecma262/pull/1009)

BT: (Presenting)

BT: There's a follow-on issue to fix, which will be addressed later.

#### Conclusion/Resolution

- Consensus

## 8.i.b Avoid detached DataView in edge case by Jeff Walden

(Brian Terlson)

- [PR](https://github.com/tc39/ecma262/pull/1025)

BT: (Presenting)

MB: This seems like the kind of change Natalie would be interested in and wanted to see more of. +1; hardening seems good.

TST: Can confirm.

#### Conclusion/Resolution

- Consensus

## 10.iv.a (Continued) Inheriting private static class elements discussion and resolution

(Daniel Ehrenberg)

- [issue](https://github.com/tc39/proposal-class-fields/issues/43)
- [presentation](https://docs.google.com/presentation/d/1wKktzSOKnVIUAnfDHgTVOlQp-O3OBtHN4dKX8--DQvc/edit#slide=id.g2a0c41676b_0_49)

DE: (Presenting)

AK: This meets my criteria - we seem to be happy with instance fields but static fields are the ones causing problems.

YK: Likewise.

MLS: Are these already split?

DE: Yes but along different lines.

MLS: Are you happy if static fields are unable to progress and an end state is that we only have instance fields?

DE: I would be okay with that, happy is the wrong word.

JRL: If we leave them both exactly as they are today that would be acceptable, but I would like to consider other options.

DE: I want to split them so we can use this as an opportunity to clarify and problems with statics. Any objections?

#### Conclusion/Resolution

- Split the proposals into public&private instance fields and private methods at stage 3, and public&private static fields and private static methods at stage 2

## 10.iv.f Class fields ASI discussion and resolution

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-class-fields/issues/7)
- [slides](https://docs.google.com/presentation/d/1bPzE6i_Bpm6FXgzfx9XFJNHGkVcM42lux-6bUNhxpl4/edit#slide=id.p)

MB: would enabling ASI here make the spec more complex?

DE: There's no algorithmic complexity, adding ASI here doesn't complicate the spec nor implementations. Actually, there is no spec text needed at all--the existing description of ASI is sufficient.

BFS: I'm not a fan of ASI in general, but I don't want to disallow ASI *only* inside class bodies.

YK: I do want to disallow ASI in class bodies.

JHD: As far as I'm aware, there were no ASI linters available until the last few years; many developers who rely on ASI use a blog post that hasn't been updated since 2011, or the documentation from a specific linting tool (standardjs). Even when a new ASI hazard came into existence, i.e. tagged templates, the 2011 article was not updated, and as of the last time I checked, standardjs was still incorrect about the finite list of ASI hazards. ASI hazards that cause errors are fine, but I want the committee to consider that ASI hazards that cause silent incorrect runtime behavior *will not be caught* by the majority of ASI users, because they are not approaching it with sufficient rigor to understand the hazards. I am weakly (but not strongly) in favor of disallowing ASI in class bodies.

YK: (something about reframing the discussion)

KCL: A quick run through GitHub's codebase, which uses standardjs and omits semicolons, found only four places that required semicolons, related to Array destructuring assignment.

YK: Are you sure the rest of the code is correct?

MKA: Want to add a user perspective: I recently worked at a small company that used the "standard" (no semicolons) linter, and we used it because we never had to argue about the code style. I've seen similar issues in small companies, and have seen people choose the "standard" linter to avoid having to think about semicolons. Point is: many people use "Standard" but it doesn't mean they all feel strongly about avoiding semicolons.

DE: So does that mean that many programmers who omit semicolons don't care particularly about semicolons, just about following the linter rules?

MKA: I think for a big group of programmers, yes.

AK: Named infix operators worry me. But it seems this problem isn't specific to class bodies; new infix operators are problematic due to ASI in general, correct?

DE: That's right; the myIn example on the slides was a mistake, and we already would've needed some no-newline markers regardless of what we choose for ASI in class bodies.

DT: Is there the option of disabling ASI in a strict mode?

DE: Part of the takeaway from the 1JS presentation is that such a switch has a cost for everyone. We've been using a policy of not having a bunch of grammar switches, making an easier upgrade path and more unified mental model.

CM: If there are already ASI hazards sprinkled throughout the language, if we introduce new ASI hazards them someone could not get into trouble with this without making use of the language feature.

DE: Sure but we want the language feature to be usable.

CM: Sure but we can evangalise saying "using these new features with ASI - beware"

DE: We could also say use these new features requires semicolons

YK: If we can't arrive at a consensus what is the default?

DE: Either could be a default, depending on how you look at it; the current spec was intended to have ASI, but I communicated this poorly.

KCL: The initial argument for having ASI is that without it, this would set a new precedent to require semicolons, and that was my main grievance last time. I'm not sure I'm willing to die on that hill, but I think this is the first time that they'd be required by the language.

RW: I object to that. Semicolons are defined in the grammar of the language. They are required for separating grammar productions.

DE: That's a somewhat technical definition of "required"

KCL: Actually, for loops actually need semicolons, so my original statement is strictly not correct, though that's a different kind of usage of semicolons.

RW: So I concede you can write parseable code without semicolons but I'm saying its part of a spec.

YK: When Brendan tried to coerce people away from this is that ASI is a form of error correction - so writing semi-colon free code is making a lot of errors.

DE: That's a good case for taking a stance as a committee and saying, we'll require semicolons here.

YK: I think we could set a point of saying that we should avoid introducing new ASI hazards as a reasonable compromise

AK: Avoiding ASI hazards does not seem reasonable

JRL: A hair brained idea: could we add NLTs to infix operators in class bodies.

DE: I think it'd be pretty strange if the grammar of expressions differed based on where they were used.

DE: Does anyone have any strong concerns about having ASI hazards in class bodies

KZM: My opinion is that ASI is there for beginners who make mistakes. We just catch them when they fall and accidentally omit a semicolon. The aggressive ASI proponents are experienced programmers who intentionally do this. By the community requiring semicolons here we are sending a signal saying we're no longer bothering with ASI. There may be a community backlash for this. Its not that we cant do it its just extra work

DE: Well, I mean it's not extra work now as we have Babel and V8 implementing these with the ASI hazards in place. What we're concerned about though is providing a set of footguns for users. What do you think about this?

KZM: Well people will still hit errors.

DH: The two things fighting in my head is: on the one hand to a person whos used to not using semicolons it will be a hostile move to require them. Putting a semiclon at the end of a "line" (vs a semicolon in a for loop) is telling developers who are used to not using semicolons that their style is wrong. The problem on the other side is the list of new gotchas that will trip these people up - throwing a bunch of new hazards at them. Either approach has a downside for the no-semicolon camp.

AK: Yes thats imporant, we are hurting programmers either way

ZB: A company I have just spoken to who are ASI users have just said that they expect us a committee to tell them what to do. If we tell them that semicolons are important then they will follow that.

MM: I would love to tell them that. I hereby tell them that. Does it make sense process wise for a group to make the statement like that though?

DE: We don't have to state anything though

AK: The reason it has to be more than that is we can't require semicolons in statement lists, or modules, or strict mode. We're not going to require it in function blocks by the looks.

ZB: If we can make a statement saying that ASI wont be consistent with the evolution of the language we should make that statement

MM: A good suggestion

DE: I'm not sure we can make a statement like that.

MB: Yehuda pointed out that Brendan always said ASI was error correction. Kat repeated that point. That fact won't change, we're just saying there are new rules that apply to new things. It sounds like we already have a statement.

DE: It seems like the conclusion is we don't have strong arguments to either.

JHD: I think there is one objective point on how it prevents the future additions to the language. Adding things like `const` keywords or `+` or `*` - any new prefix sigil for methods or functions is now restricted. We always say we don't want to take up syntactic space - partly because of user cognitive load but also because we dont want to limit future evolution of the language.

AK: Well we add NLTs to every keyword which goes inside class bodies. For extra tokens which work like `*`, probably better to just not do that since it's difficult to understand.

DE: There are some ugly failure modes for ASI though. `protected function` as a potential new feature is a new ASI hazard.

JHD: Well I guess my argument stops being strong if we have a requirement for NLTs for all prefix keywords.

DE: Anyone remember why we have the NLT for async method declarations? Is this because async method declarations inherently need the NLT?

RBN: One reason we had async functions in TypeScript is we had ASI and the same issues so we had the NLT lookahead restriction from the outset.

DE: Ron have you heard any issues with ASI issues with field declarations in TypeScript?

RBN: Not yet, it's the same hazards as ASI already. The async function NLT is a good example but people can go back and add semicolons where they need it. But TypeScript has the added benefit of being typed so we can catch early errors that JS doesn't in these cases.

RBN: We also treat get with a new line as a field named get. So the same ASI hazards as in your slides.

DE: Interesting that TypeScript deviates from the specification here. So, this seems like circumstantial evidence of ASI being okay. Where do we go from here? I'm thinking we stick with ASI in light of all this info.

YK: It continues to feel weird to me that there is on balance more support in the committee to prevent ASI but we can't seem to arrive on consensus on it.

AK: How is this an issue? Sounds like an issue of voting majority.

DE: On the bug thread many JS devs wrote in to tell us they'd be disappointed with not having ASI.

ZB: We seem to operating on extremes - either banning or encouraging it. We can still keep ASI for the original error correction for newbies but send signals to strong ASI proponents that relying on ASI as a stylistic choice is not sustainable.

DE: It seems a clear way forward to say we can support ASI here but we're not sure how many more features will continue to work out like this.

AKI: I was going to say the same thing - we should think about a long term path in general, around making decisions of including ASI in future features.

CM: It sounds like what we're coming to is "we'll continue supporting ASI while it's not too much trouble". If it gets in our way we'll stop using it but otherwise keep using it.

DH: Its hard for us to predict to what we can do down the line. Its also hard to make a declaration about semicolons. Voicing an opinion seems something we don't want to do. Telling someone to rewrite their codebase is not something they'll be happy with.

KCL: I would counterpoint that, part of the problem we have is that TC39 doesn't communicate enough to the community - and so no guidance is still guidance. My interpretation of ES6 - where in class bodies methods being very not required - this to me is a signal that the committee was moving away from strong semicolon usage - contrary to what the committee seems to be saying here.

DH: There are a couple of realistic pieces of feedback we can give people: there are more hazards for ASI now; and this one was exceptionally hard - we're not giving up but it may become more and more challenging to continue enabling ASI.

JHD: Real quick - about making a statement: I care about people who use JS in the future not the past. Making the statement matters for people - providing guidance is important, as Keith says no guidance is also guidance.

KM: ??

ZB: It'll be more painful in the future if your whole stylistic choice is invalid.

MB: I just want to say this is only about new features and new code they write. It doesnt mean people need to rewrite all of their old code.

DE: So it sounds like we're reaching consensus on making a statement to the community. Perhaps we can use the reflector to work on a statement on this. For now; I propose allowing ASI. Any objections?

MM: I wasn't expecting to but Jordan's case on how it can affect future evolutions was higher than I was expecting.

DE: Are there other things that aren't on the slides? Or is it just these 2 cases?

MM: No its introducing new features like keywords, get, set, async.

DE: In particular async _is_ consistent because of NLT.

AK: Yes the slides are confusing. We can do more like async - just not needing NLT.

MM: So if get/set/static had NLT then this wouldn't be an issue?

DE: Correct

MM: Okay, I return to not objecting.

DE: So I continue to propose we have ASI for class bodies. Keep the specification as is.

JHD: You said we want a statement. Let's reflect that in conclusions.

(Joke: Let's form a committee to form a committee to make a statement about making statements.)

#### Conclusion/Resolution

 - Look at making a statement about ASI, the hazards, and the use of semicolons in developer's codebases.
 - ASI continues in class bodies

## 10.iv.e Block Params to Stage 1

(Sam Goto)

- [proposal](https://github.com/samuelgoto/proposal-block-params)
- [slides](https://gitpitch.com/samuelgoto/proposal-block-params)

SGO: I gathered technical concerns, and I have stuff to go back with. Putting aside procedural advancement to any stage I want to know if I should come back with this specification in a later meeting.

BFS: I would like to see either a complete solution like macros, or a smaller solution focussed, coupled, around the common use cases.

AK: I think you should ask a more direct question. Asking for stage 1 is often a way of gauging what you're asking. So you should ask for that.

SGO: The stage criteria is: identifying the problem, shape of the solution, and the comittee expects to spend more time on this?

AK: Correct

MM: I would like to see this go to stage 1. I'm more enthusiastic about this proposal than macros. Hygiene is well short of sufficient for static analysis. This proposal enables tremendously more reliable reasoning statically than any macro proposal I've seen.

KM: I'm concerned of the viability of the solution. Its better than a C-style macro, but I'm concerned heavily with the proposal lacking a lot. I'm not necessarily opposed to stage 1, just very concerned.

AK: Concretely that means some would like stage 1 and some have implementation concerns.

JHD: Yes, it might not progress to stage 2 but this is the point of stage 1. But take away that you have many things to establish before people will be comfortable with it.

DH: It does feel like there are pieces you can factor out - and layer this. You might find it easier to satisfy conerns by taking it 1 stage at a time. I know for you the `::` stuff is what you're most interested in but that is a big feature - personally I want to see this proposal without that for now. I think it'll get consensus faster.

#### Conclusion/Resolution

- Stage 1 acceptance


## TC39 Community Engagement Discussion

- [presentation](https://docs.google.com/presentation/d/1vmnxDDZnbUjkfM0J9LDOtzOW1VL0efYA8uBCbGb1UZ8/edit#slide=id.p)

### Positive culture

AKI: I've noticed examples of people coming to disagreements in issues in bad faith. Shutting debates down often by making it person because they don't agree with the premise or don't want to give time or air to the pepole they disagree with. It makes the targets of  those bad-faith arguments feel bad and sends a message to new people that it's not worth contributing when that's how we treat each other. One thing keeping women and marginalised folks out of open source is brashness around the responses to issues on the repos. It can make a massive difference.

ZB: We had a very similar issue on our bug tracking. We had developers who were very brash and shut down issues without - perhaps empathy is the word? One thing that fixed that is we started adding tags indicating new users. For the first time users this is important.

KCL: GitHub does this for you!

AKI: I've fallen down this trap before. Especially for ESLs, it makes a massive difference. Additionally I think the GitHub canned replies feature can be useful here - for starting an issue

KCL: (Presenting canned replies and GitHub contributor labels)

### Encouraging more presenters

AKI: I think it would be great to have some documentation around these processes, but also to be able to provide short TL;DRs to see if people are actually interested. The existing documentation has _so many words_ and its very difficult just to read this.

JHD: Having rationale - explaining some things we care about that aren't in process documents or specs - would be useful. I understand we've had concerns about bringing discussions from es-discuss into here - but only because the proposals aren't of a quality _because_ we have no documents explaining how to make quality contributions.

YK: When I joined the committee it took me a while to get past the "read the entire es-discuss before you say anything" which thankfully we don't do anymore. I think we can help people who want to peek in - right now they're bouncing hard out. We need to do more to support those people.

MM: Many people on do have relevant expertise and know the language well, we do ourselves a service bringing those people in. Some of the outside experts I've invited in the past are now in this comittee today. There's lots we can do to bring outside people in and include them in our deliberations.

### Conversation participation

DE: I also want to talk about conversation participation. Everyone here has great knowledge and different perspectives - but they don't always participate in the conversation. I dont want to say people who are just here to observe is bad, but I want to help people feel welcome to participate freely. We have a lot of jargon that people need to get to. If any of you have ideas about these

CM: Its also shared culture that forms a point of reference for conversations. If you come to 3 or 4 meeting you're no longer a neophyte - but we could do more to capture the misunderstandings and confusions for the first time people comes to meetings.

DT: Jargon is essential to any technical community - but actually theres some value in capturing it. We should have a page which enumerates the jargon, like what does TCP mean to this group.

AKI: This is a great opportunity to have an FAQ repo, higher level less dense documentation, a dictionary, a glossary. Footgun could go in there.

DH: A simple practice of a jargon definition is fun, its shared culture. This is one of the easy things we can do.

DE: I wonder if just more than documentation - explaining words as we speak them in the meetings would be good.

CM: Jargon like TCP, but also jargon like catch-phrases that you don't even realise is jargon like "im not going to die on that hill" which is just as important to communicate on that thing. Having a jargon file is a great way to capture this too.

GCN: For me the jargon is not so much a barrier as much as when I have a question I worry that I might be asking obvious questions and wasting the committee's time. I wonder if there is a way to help with that problem? I usually run by Yehuda or Dave as a quick sanity check before asking that question, so I might not be saying as much as I like. I'm fortunate enough to have access to Dave & Yehuda but that kind of resource might be useful to newcomers.

DE: So do you mean more documentation on what questions have been asked or...?

GCN: I'm mainly saying why I don't participate as much as others. I check with other comittee members but if that resouce is made available to everyone - or better ways to crawl the previous discussion would be useful.

DH: Having the public backchannel conversation in IRC is helpful and high speed and you don't need to tell every newcommer to read the old docs. However not everyone uses IRC. I wonder if some people have a problem with that.

DE: If you look at TC39's internal IRC channel, maybe not even half the people in the room are in it despite almost everyone having their laptop open. Maybe switching to Slack or Gitter is worth investigating?

KM: Maybe it'd be useful to have people on their own - having a buddy system where people can quietly ask questions can be useful.

AKI: How do we feel about a tc39/how-we-work repo?

Everyone: thumbs up

DT: Why a separate repo?

JHD: Permissions granularity, and not polluting the spec.

SGO: I have a small comment on IRC. The IRC channel requires you have to have an invite, and you need Brian to invite you. I only just learned how to use twitter to ask him. It's a high bar but its also an achievable one. The problem is there are no logs, it's hard to find old discussions. Maybe there is a way to do that on GitHub? The other thing is GitHub works well for proposals, but I find I'm not comfortable asking questions on the reflector. I don't feel the same posting to es-discuss or IRC, but again they're not crawlable.

BT: Few IRC points: I did a poll on twitter asking people what their preferences were on slack, gitter or irc. Predominantly the answer was not irc, evenly split between slack and gitter. But after talking to tc39 people, I didnt talk to anyone who wanted another slack. The prospect of another one is difficult. I made the compromise of IRC between tc39 delegates and the community. I may have done this wrong, happy to use whatever we want to use. But I wanted to call out that slack fatigue is a thing that people suffer. On the topic of the private channel we need to make this easier - at minimum to document the existence of it. It does need to be invite only as we can say whatever we need to and not have to worry, but we can do more to get it easier for people to get in. I'm going to make Leo and Dan mods to help invite others.

DE: This has been a great conversation and I think we've covered most of what I wanted to talk about. Another thing - should we bring in an external diversity and conclusion consultant? Would member companies be willing to chip in for that? Also, should we have a logo? To communicate better externally?

MB: For context on this logo - its based on the open source JS community logo. I think the nice thing about this logo is it is a nod to the community.

SYG: I made a logo for the committee hats; what do you think? It uses the font of the JS community logo and is black on orange.

DE: One final point - Brian announced he will no longer be editor after 2018. We're currently looking for a new editor for ES2019. He says it takes around 20 hours a week every week.

AKI: I had a question on Tuesday night: how much unpaid time do you put into this and how much do you expect to? Fingers crossed this was 0.

YK: For me that is definitely not true.

#### Conclusion/Resolution

- Starting tc39/how-we-work
  - Creating a jargon.md
  - Documenting rationale
  - Document about how to get a proposal in the spec
  - Everyone should be involved in documenting procedure & culture
