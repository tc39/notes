# December 5, 2019 Meeting Notes
-----

Brian Terlson (BT), Aki Rose (AKI), Daniel Rosenwasser (DRR), Shelley Vohr (SVR), Michael Saboff (MLS), Yulia Startsev (YSV), Ross Kirsling (RKG), Waldemar Horwat (WH), Chip Morningstar (CM), Rob Palmer (RPR), Shane Carr (SFC), Jordan Harband (JHD), Kevin Gibbons (KG), Gonzalo Cordero (GCO), Sebastian Markbage (SM), Tierney Cyren (TCN), Damien Engels (DES), Caio Lima (CLA), Alan Schmitt (AS), Tab Atkins (TAB), Shu-yu Guo (SYG), Justin Ridgewell (JRL), Till Schneidereit (TST), Michael Ficarra (MF), Pieter Ouwerkerk (POK), Zibi Braniecki (ZB), Hemanth HM (HHM), Dan Finlay (DJF), JF Paradis (JFP), Valerie Young (VYG), Myles Borins (MBS), Mark Miller (MM), Patrick Soquet (PST), Justin Fagnani (JFI), Tantek Çelik (TEK)

Remote: István Sebestyén (IS), Bradley Farias (BFS), John Hax (JHX), Caridy Patiño (CP), Daniel Ehrenberg (DE), Erica Pramer (EPR), Mike Samuel (MSL), Richard Gibson (RGN), Ron Buckton (RBN), Mathias Bynens (MB), d2g, Ujjwal Sharma (USA), Sergey Rubanov (SRV), Jonathan Keslin (JKN), Dan Clark (DDC), Sven Sauleau (SSA)


## Update on SES

Presenter: JF Paradis (JFP)

- [proposal](https://github.com/tc39/proposal-ses)
- [slides](https://docs.google.com/presentation/d/1DOphwT3SF9nmyxJcRGL6eLdNeLnUQYWtt2MICOLEU-c/edit?usp=sharing)

JFP: (presenting slides)

JFP: No time for questions, but come to me if you have questions.
## Update on OOM Must Fail Fast

Presenter: Mark Miller (MM) (Google)

- [proposal](https://github.com/tc39/proposal-oom-fails-fast)
- [slides](https://drive.google.com/file/d/18mSBoFSE3khK-3kHe6805hXh2VakwyOh/view)

WH: Please post presentations before presenting them. It makes it easier to follow them — we can go back to slides that went by too fast without interrupting the speaker.

MM: (presents slides)

WH: You made a claim that we need both `deathBeforeConfusion` and `terminate`. Why isn’t just `terminate` sufficient?

MM: It’s an open question. It may be that just `terminate` is sufficient, but I’d like to start with a position that I’m more confident is defensible, having both mechanisms just in case.

PST: (presents OOM on embedded slides)

WH: [referring to last slide] What are you calling an agent in this context?

MM: [long answer]

SFC: Clarifying question. No throw block and exception block are equivalent? What are the semantics of a nothrow block? Is it like a transaction?

MM: Sort of like a transaction. A transaction also has the notion that if you abort, there is a previous consistent state that you fall back to. I wasn’t proposing to bundle that into either the semantics of nothrow or terminate. The bookkeeping to preserve the previous state is not acceptable.
In the Agoric use of this, we do exactly that. We have  a transaction boundary that has multiple turns that execute consecutively that become a transaction. We have the ability to return to a previous state...

SFC: how is that equiv to a try catch? The try catch will not undo the first operation.

MM: Right, so the first operating was on a local data structure, abandons the data structure that would be updated. The entire linked list is inaccessible.The aspect of transactions that we are proposing is the concept of aborting.There is no consistent state to fall back to.  In Erlang, the process itself doesn’t have a fallback. It’s up to the other processes that have keepers registered on that process, that it’s the supervisors, the other Erlang processes, that react to the death of that one. The Erlang philosophy is similar to the way we implement weak ref. The reaction to the GC of data structures, the finalizer does not have access to the memory of that GC,  as opposed to other clean up system that have access to the data structures that have been condemned. We want to abandon all suspect state immediately…

SFC: I thought nothrow would go back to state, but if terminating, that makes sense

MM: That’s what I assumed; I was interpreting from a discussion with WH. WH, is that right?

WH: Yes. Also the idea of `nothrow` is similar to C++ if you throw an exception from a destructor or a C++ `noexcept` function.

WH: Regarding the equivalence of `nothrow` and the `catch`-`terminate` approach: If you have `nothrow`in the language, you can set up linter or language rules that warn you if you’re trying to do I/O from within a `nothrow` section. Those can’t be unwound cleanly by killing the agent, so that’s kind of a bad thing to do.

MM: That’s a really good point. The reason I was excited when I saw the `try`/`catch`/`terminate` pattern was that it avoids new syntax. How would you do a `nothrow` but avoiding adding new syntax?

WH: A `try`-`catch` might work as long as you get some assurance from the language that you will not throw anything between catching the exception and executing the `terminate`. You need to be careful there, maybe evaluating the `terminate` identifier/expression or the process of calling the `terminate` function can themselves throw, in which case you’d have a problem — you’d throw a second exception instead of terminating.

MM: I want to make sure that that point is captured, good point.



## Update on Promise Pipelining

Presenter: Mark Miller (MM) (Google)

- [proposal](https://github.com/tc39/proposal-eventual-send)
- [slides](https://drive.google.com/file/d/1L_Kk7Y-ipb82mfm3BW0L7kwJRIMFLQp0/view)

MM: (presents slides, recorded)

WH: Why did you delete `has` in addition to assignment and delete?

MM: It’s not problematic like the other two because it’s query-only, but it doesn’t appear particularly useful either. And it doesn’t have syntax.

WH: [referring to the last content slide] Is the `.` in `E.G` significant? Can you have just `E` and `F` and `G` for the top three lines?

MM: Yes, you could. We did it this way so you’re only importing one thing, occupying one short name in the namespace. But the dot between `E` and `G` isn’t doing anything for you.

MF: Earlier in the presentation you had assignment to a member. You dropped that, but I think that is unfounded, I’ll follow up with you.

MM: I’d appreciate that. I expect there’s a pleasant way to fix the chained assignment anomaly. I’m still inclined to omit it, because we’d have to recommend to users not to use it, which isn’t a great story.

HHM: How would an await operator work with this?

MM: Await is …. Dangerous because of interleaving. The “~.” can be used anywhere, doesn’t have to be in an async function. It really just has the semantics of the expansion. All of these results in promises, so you can mix it with await. But I’ve gotten to the point where I’m recommending people just to not use async/await. It looks pleasant, but it leads to important bugs.
## Array ~select~/reject for stage 1

Presenter: Justin Ridgewell (JRL) (Google)

- [proposal](https://github.com/jridgewell/proposal-array-select-reject)

JRL: I’ve done GitHub and big query, _.filter has 427k files using it and _.reject has 64k usages, so ~15% of every filter, people are choosing to use reject. I think the downloads indicates there’s a desire for the inverse of filter, so I’m seeking stage 1 for only the inverse part, not the filter alias.

YSV: Stage 1?

MF: I think that the raised issues are issues to discuss before  stage 2.

MS: He wants something to help him remember what the other one is.

JRL: Personally I’d like the inverse to be named filterOut, but...

CM: Michael’s formulation overrides my objections, now that I see they are stage 2 rejections.

MF: That goes against my reformulation of it.

YK: The friction here is that your reformulation is not clear about what the next steps would be.

MF: Next steps are exploring the design space…

JRL: Michael brought up `partition` yesterday...

MF: This is not me advocating for partition, this is just me saying additional alternatives along the lines of partition may exist.

YSV: I think we’re in agreement on that. That we want to explore solutions to this problem.

WH: What is “this problem” though?

YK: The problem is that there are more ergonomic ways to interact with filtering arrays.
Stage 1, if you want to encompass all the possible solutions, the problem space is going to be big. A thing that was persuasive to me yesterday is there’s `some` and `all` that are popular. Daniel said the TS utils only have `some` for a while and they eventually wanted to add `all`, so there’s an indication that there’s desire for that.

RBN: I think you meant `some` and `every`? Anyway, I put an issue on the issue tracker about the naming discussion. Trying to scope this to is filter name wrong..
An inverse of filter that is a filter-not or filter-out is a valid direction for a stage 1 proposal even on its own. We’ve had similar proposals for other small features like Promise.allSettled. I think that would be fine.

SFC: Stage 1 doesn’t mean we agree on a new method as the solution to YK's problem statement, but that we agree we can explore the space. It doesn’t mean everyone in the room is on board with adding a new method.

### Conclusion

- stage 1 for exploring more ergonomic ways to filter arrays




## Dynamic Code Brand Checks for Stage 2

Presenter: Mike Samuel (MSL) (Google)


- [proposal](https://tc39.es/proposal-dynamic-code-brand-checks/)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vT-kLQQ_sStVKLsQkN3XCURkcu40DAWQNkR0afVk-TzkMsgrEk9vwMyNQM5viET5T16Tpd9gwUo2z_g/pub)

MSL: (presents slides)

MM: I saw the direct param added, which might answer the objection about arrays

MM:  (about slide with `eval(‘require’)`) Clarifying question: you’re showing the direct eval syntax. So this is a direct eval, and the variable you’re accessing is… did you mean an indirect eval?

MSL: This is a direct eval because webpack is re-writing all uses of “require”, so replacing this with the word “require” is not a direct equivalent.

YK: This is a common pattern for bypassing webpack’s post processing.

WH: (slide: Runtime Semantics: PerformEval) If _IsCodeLike_, you do nothing?

MSL: I think there should be a “not” in there. I updated it on the repo, but not on the slide. Good catch.

YK: I support this proposal and I agree with the spirit of the first two slides pushing aside the “eval is evil so why are we bothering?” Eval is essentially the same as lazy evaluation. If eval is evil it means lazy evaluation is impossible. I don’t think when people say eval is evil they mean all lazy evaluation is bad.

KG: Stage two seems good, but because it depends on trusted types. Stage 3 should depend on knowing what Trusted Types looks like/what the integration is like.

MSL: It is out of the incubator group and now hashed out in w3c.
I believe Firefox has been asking questions, Chrome put out an intent to ship, Firefox hasn’t yet but it looks like—I don’t want to jump the cart and say there’s enough certainty around Trusted Types because I haven’t been involved in the W3 stuff, but it looks like it’s going in that direction.

MM: There are more outstanding issues that need to be addressed. You did not show the host hooks with all the explicit handlers. That’s important going forward that all hooks be designed to be virtualizable so one can provide handlers at the appropriate level of abstraction.
In particular, the thing that I want to ensure, is that we stop confusing direct and indirect eval -- the host hook should not encourage the confusion to go forward.
The spec language should stop encouraging that confusion as well.
With those added to the understood outstanding issue, I need to know:
What is the entrance criteria for stage 2? I need to know before I can agree with this for stage 2.

JHD: [reads criteria]

MM: I need to see the host hooks before the important API semantics have been covered.

MSL: You want to have a mechanism for realms to virtualize relm hooks
And the host hook should have enough info to distinguish between direct and indirect eval and the various flavors of create dynamic function,
And presumably any new mechanism that came to be in the future.I’ll file that as a tracking issue.

BFS: One of my concerns is we’re talking about—if someone can give a bad string to a host API, you must guard the ability to get access to the API. I’d feel more comfortable if we had more info on how that’s going to occur. We have different ways of generating dynamic code. People like you showed earlier can do property lookup and suddenly they get access to a constructor that can do evaluation. I’m not convinced about the practicality of this without getting more info on how it’s going to be protected or if we can align some sort of mechanism to ensure something doesn’t become a CodeLike.

MSL: That is a fair point and not something I have addressed. I have talked about that in other fora, how about I can explain it to you offline or if there’s enough interest, I can do an informational presentation in the new year. I can give you links and discussion here. There’s a lot of best practices, a lot of it is in internal documentation that is slowly filtering out.
This approach is built on the way we have been doing server side ses over the last few years.
You’ve identified the right question and we have this set of practices that have worked to allow security eng and auditing to provide for a large [...] application development,
But I agree it is not immediately obvious how the trusted types.

BFS: I work on node policy recommendations, and I’m not sure what we would gain from this. But we can discuss it offline.

BFS: Import has a variety of means of being used as an evaluator. You probably need extra hooks into that. This also applies to things like URL.createObjectURL when talking about CodeLikes, we might need to separate the ability to load things through a module loader, and we need to account for poisoning a module map.

MSL: My next presentation addressed dynamic import as a vector.

WH: Same comment as Bradley, I’d like to see how you’re ensuring that you don’t get fake code generated and marked with brand. Also I have a clarifying question: you mentioned during the presentation that _IsCodeLike_ has to be realm-gnostic and also that it is not gating security. Why then does it need to be realm-gnostic?

MSL: It does not have to be realm-gnostic brand check, because realm gnosticism is in fact checked in the host … realm gnostic is sufficient in this case. I was confusing the host callout
The host call out is the one that has to check whether or not the value passes muster for both the callee realm and the caller realm.

WH: I have nothing against it being realm-gnostic, I just wanted to understand.

KG: If you are asking for stage two, you should ask for reviewers.

MSL: I thought I had reviewers from last time, but… are you a reviewer?

MF: We normally don’t assign reviewers before stage 2.

MM: I would be a reviewer if we go to stage 2 because I am uncomfortable with it. Host hooks are substantial symantic API.

WH: I’m ok with exploring this space but whether we should do this depends on the specifics of the brand checks, because there are some dragons there.

YSV: Sounds like there are a few concerns that need to be addressed before stage 2 specifically the semantics around host hooks.

SYG: Where’s this list for the criteria for host hooks?

YSV: We’re talking about the entrance criteria for stage 2.

SYG: Oh I misunderstood, I thought you were saying there’s criteria for host hooks?

MM: There is a set of criteria that will provide a list of things that need to be satisfied.

MSL: It seems like getting host hooks to agree with those criteria could be done post-facto. Host hooks are details with a small number of clients (the browsers).

MM: Host hooks I consider, even without the extensions, substantial API since they are observation points. Any semantics of JavaScript has to consider what the host does through host hooks to be an observation. I'm interpreting the stage entrance language to include host hooks as API.

MSL: Insisting that proposals rely upon criteria that havent been decided on...

CM: He's saying he wants to be able to look at them before he expresses an opinion.

MM: For normal JS APIs, I can react to the API based on criteria in my head, if it results in an objection I need to explain what they are, but we certainly don’t have a requirement that all possible rationales to object to an API have to be stated ahead of time.

MSL: Fair enough.  They've been up there on the GitHub.  So I agree that I haven't made the case to you that as written, it meets your criteria, but the actual changes to the host contract have been up there for some time.  And I would like to have you as a reviewer.

MM: If the host hooks that you believe—you know what my criteria are—if they would pass those criteria are in the proposal and I just need to read them, I can do that during lunch. If I’m the only objector I can maybe approve it after lunch.

MSL: Sounds like you can look at it.  It hasn't been designed with API bedst practices in mind, because I went into this with the idea that host hooks have a small number and haven’t…

WH: I’m concerned about the branding mechanism being vague. Depending on what choice is made, there are likely to be dragons there. I don’t consider it to be a blocker for stage 2, but it needs to be resolved before stage 3.

YSV: So you would like to defer to after lunch?  We will do a quick revisit after MM has had a chance to review this.

(after lunch)

MM: I am in favor seeing the proposal go to stage 2 EVENTUALLY, after reviewing, I feel like there are problems. The current host hooks cannot distinguish direct from indirect and strict from sloppy.

YK: I'm not convinced this is a Stage 2 entrance blocker.  You could enter Stage 2 with the understanding that you fix this issue before Stage 3.  This should be on a to-do list for future process conversation.

MSL: The entrance criteria state (reads the criteria).  I'm not sure this is a blocker but I defer to people who know more about what staging means.

MM: With a commitment for the host hooks to carry this information, and I am confident MSL understands what I think needs to be done, I would let this go to stage 2.

JHD: It's a concern of whether this is considered a major semantic.

MM: I consider it a major semantic.  From offline conversations, I am convinced that MSL understands my requirements.  But I'm not prepared to make a judgement on whether this is a Stage 2 blocker.

JHD: I don't think such a major change should be allowed before 10 days in advance of the meeting.

### Conclusion

- NOT approved for Stage 2.  MSL will work with MM and other relevant parties for next meeting.


## Dynamic Import Host Adjustment for Stage 2

Presenter: Mike Samuel (MSL) (Google)


- [proposal](https://github.com/tc39/dynamic-import-host-adjustment)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vQHJ-7kiplN7pzQD-GXv9icz-ySJnoMVVfGbI74oDKaeSAMdgZ3aySOR-80JGMt4Lb5oCgJ-e-BeEet/pub?start=false&loop=false&delayms=3000)


MSL: (presents slides) The tests are actually web platform tests, not test262 tests.

KG: Stage 2 seems great. For stage three I would want trusted types to be a good state where everyone is happy with it.

BFS: I really like this idea.  I have some fairly strong feelings. I have done some work on node's module loaders where we are trying to virtualize things, that's also affected by this. It would be useful to be able to create references and lazily that would be able to use this change. That being said, I have some concerns with the ability to populate the shared global module map.  If you do something that coerces to a string, there's some interesting stuff at play where you could have 2 references referring to the same module.  Don't know if that's intentional, it seems fine to be, but it might not be ok if you are trying to allow referencing script or module to be a reference besides a string. A concern about the ability to poison a global module map also exists. In the past MicroSoft had a 'once:' field on URL.createObjectURL that allowed a URL only to be loaded once.  I don't think it's required for this proposal, but if we put these things in the module map; all modules currently use have a shared string namespace and altering the key of the module map would be a significant change. If we change referencing a module to something that isn't a string, that's nontrivial for the host to do. Next: there is a language layering concern with asset references, if asset references are not just available by static code but can be created at runtime this may pose a problem with the model. Finally, there is a garbage collector problem that I'm not going into detail now, but sync with me offline; if you create/reference things cross-realm, they're really hard to garbage collect.

### Conclusion

- Approved for Stage 2
- Stage 3 Reviewers: MM, KG, BFS


## Module attributes for Stage 1

Presenters: Myles Borins (MBS), Sven Sauleau (SSA), and Daniel Ehrenberg (DE), Dan Clark (DDC)

- [proposal](https://github.com/littledan/proposal-module-attributes/)
- [slides] (https://docs.google.com/presentation/d/1pyRtuOjnaTV_wr3a7sOZEt3PVxrbhgy_JCXovm0Dklk/edit#slide=id.p)

MBS: (presents slides)

DDC: (presents slides starting at "deep dive into a use case")

SSA: (presents slides starting at "privilege escalation concern")

DE: (presents slides starting at "alternative: pesudo-scheme within module specifier")

MBS: (presents "layering" slide)

JHD: This seems like it is adding a tax to web developers. In the web, you worry about the domain of the URL.  Anything you consume from your own domain, that's cool and won't go bad on you.  I don’t understand why there is any risk from loading something that is not js from your server. Separately, in Node, if you are importing a file on disk with a .json extension, it will never be JS unless you've done something weird on your filesystem.  There is not a world where not imports urls. Too me this is really constricted to the current state, where when you import something in a module, you give it full trust of the environment, and the thing you're importing shouldn't be relevant.  I don't want to create a world where you have to add all this boilerplate just because web browser needs it for cross domain import. Would prefer something like CSP, which is not out of band, and so only people developing on platforms for which this is a problem would need to deal with this.

JFI: I want to respond to the same domain issue. The first time we have a single import construct that imports different types. The only way to import stylesheet is with a tag that will not execute javascript. Seems dangerous.

JHD: Sounds like a hazard of importing CSS and such.

JFI: Yeah, but another big tax is that the current way JS modules are able to import these things is to jump out of the module system.  So allowing the performance benefit of parallel fetch, putting this into the JS module system, is really strong in my opinion.

CM: If you're importing something, don't you have an intention?  If I'm importing CSS, I expect this to be CSS.

MBS: I think the way the js modules are initial specified.. If you import javascript will immediately execute.

CM: It's like, 'doctor, it hurts when I do this' ‘then don’t do that’. You have a type annotation there, that seems like it solves all of those problems.

BFS: I think the idea of module attributes is good.  If we don't have better assurances about cross-environment interoperability, I think this proposal won't proceed to a late stage.

WH: What about the other security concerns? For example, script sourcing bypasses same-origin checks, so what happens when you allow importing html/javascript from anywhere around the web?

MBS: Specific imports are not part of this proposal.  It's the syntax to specify the type.

WH: Whose responsibility is it to ensure you don’t introduce security vulns with this?

MBS: If it's OK, I'd like to punt on that explicitly right now, unless your point is that you don't want to import anything.

DE: We’ve been working across tc39, and.. [inaudible]

YSV: Returning to this topic later. I’ll screen shot the queue so we can get all the questions.

## Operator Overloading for Stage 1

Presenter: Daniel Ehrenberg (DE) (Igalia)

- [proposal](https://github.com/littledan/proposal-operator-overloading)
- [slides](https://docs.google.com/presentation/d/1FV_wOYUgmoYpxb6yCjuQDH50ne0lFqhH52Mfwdh5Lio/edit#slide=id.p)

DE: (presents slides)

BE: Reminds me of a post from ~15 years ago when Java …??.. so people fell back on +, even though it resulted in a loss of value precision. I would be concerned if we added a new numeric type and hard-coded it. I’d rather we …  and push operators into a place where modules could maintain them.

WH: I like the proposal. However, I’d note that you can’t use this to implement more numeric types such as IEEE decimal because, for example, you can’t override `===`. You can’t have a NaN.

WH: Problems regarding invariants. I’ve tried to get operator overloading into the language since 2001 and invariants have always caused problems. In this proposal you cannot have incomparable values x and y such that none of x < y, x == y, x > y is true. Also, implementations for efficiency assume certain invariants such as `+x` or `x|0` always produce Numbers. This is why we didn’t provide unary `+` for BigInt. Can we ignore those invariants now?

DE: That's a great question.  I'd like to talk 1:1 about these invariants some more.
We have very strong invariants for “===”. I think the record and tuples proposal is the right direction here.

WH: I like this proposal but I’m trying to point out issues that have killed similar proposals for years.

DE: About NaN we can say we won’t make new “NaN” like things. For big decimal, we wouldn’t have NaN, it would always be normalized, and it would have other invariants.

SFC: I think we should try to make operators do what users expect them to do for things that we add to the language. Things that are user land, because javascript does not have strict types, it seems more dangerous because of the invariants and readability of code. But if we define operators only to types that we define here in tc39, that could be more acceptable. I like the second option on Dan's slide "Possible end states for operator overloading in JavaScript". I’m more skeptical about making it a general feature for any user-land types.

YK: I managed to have the exact opposite experience. C++ did a bad thing. Ruby and rust, lots of operating overloading, did very tasteful things .lots of mappy things, lots of colleciton things. We have experienced bad overloading, but there is a way to do it in the way a user would expect. Even Rust, which doesn’t have strong invariants about the algebraic properties, and it is basically fine. Other people who are negative because of c++ or scala, to talk to people who worked in languages with good overloading.

MM: In Smalltalk and E, we never had a bad experience with operator overloading.

YK: If it is the only way to make a bad ergonomic thing reasonable you would do it a lot (operator overloading).

DR: Before moving forward with this proposal, you really want to have value types. I can’t give the whole discussion justice, because it doesn’t come from my experience, but it’s worth exploring more, as a first step before operator overloading.

RB: I have an issue on the issue tracker for this proposal where the current approach checks an internal slot in order to not add any syntax.  Coming from the perspective of a system that does type checking on top of JavaScript, like TS and Flow: If there isn’t syntax for this, it’s difficult for (TS or Flow) to provide predictable behavior for users, basically having to evaluate the code. I def think, even though now syntactic form for operators is out of scope, I have a hard time seeing how we would use this without a syntactic form.

DE: I want to speak to the syntax and value type. I was initially expecting…..
For value types, you know, Brendan has emphasized there are many use cases, such as the adding matrix case. Would be hard to represent with value types. You’d need value array buffers. For the syntax, I was thinking we’d do it with decorators. I’d think that would be plenty statically analyzable with a type system. But I’m open to discussing that further, during stage 1. Thanks!

DRR: It appears these ops work in a single-dispatch way, where you pick the operator based on the left side. That’s not the case?

WH: No. When you define a type in this proposal, for binary operators you can override either left or right dispatch; at least one of the operands must be your type. I don’t know what happens if you have two types, each of which references the other.

DE: The operator types have access to both operands. You have to pass in the actual type object, so in the case Waldemar is talking about, there has to be some ordering in those, or one will be a TDZ.

WH: How do you define the type of a value?

DE: The type is based on the operator’s internal slot, which is immutable, which is why it has to be part of the base class.

SYG: Some japanese webdevs who saw the initial operating overloading and had negative emotional reactions. But I like the lexical scoping overloading. It seems like an uphill battle to get the this feature out to javascript devs, for the same reason as Yehuda said, that they have experience from other languages that did it poorly.

DF: Would this allow adding new operators, or just overloading existing ones?

DE: No, this is only for overloading existing ones. Other ideas have been discussed for ... I’m not convinced that

HHM: Can we overload unary operators like `await`? How would we define it?

DE: Overloading await would not be supported by this proposal, although you could use this with thennables.

DE: My takeaways are to follow up on the type system issue raised, and the invariance issue that Waldemaar raised. Can I get consensus for stage 1?

YSV: We have thumbs up for stage 1 for operator overloading!

### conclusion

Stage 1 for operator overloading.



## Module Attributes (continuation of earlier discussion)

Presenter: Myles Borins (MBS) (Google)

WH: I wanted an answer to who is responsible for ensuring we don’t introduce web security vulnerabilities?

MBS: We want a better answer for this before going to a later stage. We’re working with … looking at standardizing other module types. If you look at how Node … CommonJS module types … we’re compliant to the ECMAScript specification… will make sure these are secure.

BFS: there are a few things around security/framing being the same as being the JSONP problem. I expect people to load these off a CDN and things like WASM require JS glue to initialize fully; If you do not have the ability to initialize the modules however we need JS glue to hold them together. It’s possible to do that, I’m just not convinced that it’s covering a very wide use case. It could be used for specific use cases. I think it needs to be explained why it’s not problematic for code to load JS but it is to load JSON.

BFS: The ability to no-op a module is problematic as well. Modules expected to run side effects is useful for things like hardening your environment.

MBS: My understanding is that we're not being explicit about what types are being supported, and that’s up to the host to define. There's no reason a host could not define a JS or module or common type so people can be ... define the types ... run and loaded. Does that speak to your primary concern?

BFS: If there isn’t a type story about environment interoperability, this will be a problem.

DE: We’ve been working on interop, so we agree with your goal here.

JFI: First party vs. third party—with CDNs like unpkg that serve modules, it will be common to load like a React component. Hopefully in the future there will be a standard way to load a CSS file...
I think with cdn’s that load modules, it may be common to...will be loaded from cdn’s and JS modules that depend on it.

BFS: Yes, that is my concern here, your model claims that we shouldn’t import something because it can have side effects. It is about loading those with initialization side effects.

JFI: It’s interesting to recognize the different stakeholders in this area. It’s not the proposers of module attributes that … we’ve proposed these module types that don’t inherently have side effects
And the browsers vendors have said you don’t want to implement module types without annotating them.

It might turn out that in most cases, … I don’t see the browser vendors budging on “an import that doesn’t expect side effects …”

BFS: This affects other vendors other than node. My understanding is that we need to understand this otherwise there will be an interoperability problem.

BFS: If we have inline module attributes I have a suspicion that there will be bad things due to synchronizing source texts. E.G. you don’t use module attrs within your cache, you may get script concatenation sometimes where the first is HTML and the other is not. If that’s true and the first module is evicted from the cache and it loads the second one, you’ve essentially loaded HTML instead of JavaScript. This also works in the other direction by excluding it having one module load something as JS could introduce things like proxies even if a second location loads it as JSON.

BFS: The problem is that you must sync all module attributes across your source path. Not just statically, but possibly dynamically as well. I have doubts w/ the current direction that we cannot reasonable enforce that all modules have synchronized attributes. I have doubts with the current direction if you can’t control that in some way. I have doubts in moving forward with Stage 3 in particular.

MF: This might be slightly misinformed... I did not read the proposal before and only attended this presentation. It seems like there are two things you’re trying to do—load a resource through the module loading system with the guarantee that it won’t run JS, and you’re also looking at associating additional meta-info to be used during the loading. I’m not sure they’re entangled, they seem unnecessarily coupled here.

MLS: I don’t disagree with you. The question is “is type … attributes” or ...
There was the single string syntax, the object syntax, etc. Do we want single string? Do we want it extensible?

MF: The difference between loading JS, executing it, and providing a module, and loading a resource is significant and might not want that controlled by attributes that may be secondary to the module loading.  Like the type attribute completely changes what I’m doing. I’m pretty sure this could be split into two proposals, and I’d be behind both of them.

MLS: I guess the question would be (I’d like to punt on being a stage 1 concern), if we only have a single key “type”, do we want a syntax that is extensible to other attributes in the future?
Or do we not care about other attributes? We don’t have the answer to that yet.

MF: I’m behind having attributes being useful, but if one of them is type and it would change significantly, I wouldn’t want that to be part of that proposal.
I want the attributes to be secondary things. If they weren’t present, it’d be …

DJF: To the question of whether a single key is all we’d need—we just saw `with operators from`, so it seems like there are already other use cases for import options, and so a multi-key, extensible approach would be useful.

YK: This is really more of hunch than anything. I get the feeling that people who use bundlers
All the arguments about side band gets solved some other way in bundlers. I have no objection to this feature, but we should be worried about the possibility that there’s one style for writing platform code and something else when people use bundlers.

MLS: we've already seen interest from bundlers for taking on the syntax

YK: The side channel argument… it’s just more ergonomic, of what happens in bundlers. It’s normal for people to expect that anything with “html” to be html. Just because htmls believe they can look at that, and say “we can implement that”—does a user want to switch from that …? My hunch is that people would not want that. This is not an objection to the feature. The point is the “side channels are out of the question” point is probably not right

MLS: we didn't get into it, but a concern with out of band is visibility(?)

If these side channels are out of band, if they’re not also composable—

YK: I guess one answer to my question is that the bundle can target it.
If we expect bundlers to take the .html config and emit html,
We should get feedback about whether people think that's possible.

DE: The operator overloading idea was a lexical declaration that you could put anywhere. These are overloading the same syntactic space so we’d have to make a decision.

JFI:  Just to respond, I’ve talked to some bundler maintainers about this, who are excited both about standardizing, and adding configuration to the bundler. We have modules that declare how to include css with the js, and now people say “oh I have to use webpack with this”

YK: that’s the kind of thing we should try to make sure it...
Whether or not that thing gets standardized is a good target for this thing …

DE: I’ve been hearing from tools is interest in aligning with standards and minimizing config. Of course this is modulo a lot of things they know a lot about, the details about what needs to be done to make this work. As high level goals, these are widely shared. So that’s what this proposal works towards.

BFS: With that we’d like to go to Stage 1

JHD: The problem that led to this solution is smaller than the scope that led to this solution. There are some problems attempting to be solved by this proposal that are worth our time, but I don’t think all of the problems should be. Metadata for modules seems like something worth spending time on. Things specific to cross-domain web problems are not.

DE: Stage 1 … inline metadata. We’ve made a case for that.  If you don't think we shouldn't discuss that in TC39, I'd like to hear why.

JHD: Metadata is different from something that can prevent the module from loading if you type it wrong is something I don’t think we should be discussing. Metadata giving bundler extra information is OK. Just because the module type is different from the module type I’m pulling in absent notation seems like a problem.

MLS: We’re also talking about making it possible to load types of code that can’t be loaded without this.

JHD: The reason it's not possible are the motivating security concerns.  Browsers choose not to do it.

MLS: Everything is technically possible.

JHD: If there’s a way TC39 can solve that motivating problem without imposing a cost on the rest of the JS community, I think we should talk about that. But if it’s platform-specific, that platform should solve it.

DE: I think this is not web-specific.  This is about any remote module system.  I think it's universal that there are some modules that have data and some that have code. It’s interesting to have remote-loaded JS.

MLS: Other JS environment do allow loading over the wire cloudflare etc. I don’t think characterizing at as solely a browser concern is fair.

JHD: Then I don’t object to Stage 1 but I'm skeptical that in-band syntax is something that will ever make it to Stage 2.

DE: The more you can say about the reasons the more yeah.

YK: I’m uncomfortable with that being on the record as a restriction because I think it wasn’t a correct characterization.

MF: I want to state the stage-one entrance as the problems we want to solve. Jordan made a good point about the two. I think you agree there are two problems: (1) metadata on imports, and (2) guarantees for imports to not execute code.  Is that a correct characterization of the Stage 1 problem space?

DE:  think the idea here is to discuss inline syntax. We’ve examined the problem space but the proposal is to investigate...within TC39

MLS: Inline metadata, yes.

MLS: Inline syntax for module imports is one of the spaces we are exploring. And *maybe* guarantees for not executing code that you’ve imported?

BFS: I don’t agree with the non-execution part.

### Conclusions

- To explore inline metadata for module imports, and separately guarantees for not executing modules that you’ve imported
Stage 1 status achieved.


## Preserve Host Virtualizability for Stage 1

Mark S Miller (MM)

- [proposal](https://github.com/Agoric/proposal-preserve-virtualizability)
Keynote https://drive.google.com/file/d/1eglBbbF7qGutdY2hTXifBw4iwXcPsexu/view?usp=sharing
pdf https://drive.google.com/open?id=13q0AH6borjM_C-Z_cojsssxBM6tqqs7N

