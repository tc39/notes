# June 03, 2020 Meeting Notes

-----

**In-person attendees:** (none)

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Sven Sauleau         | SSA            |                    |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Keith Miller         | KM             | Apple              |
| Sergey Rubanov       | SRV            |                    |
| Rick Button          | RBU            | Bloomberg          |
| Dan Clark            | DDC            | Microsoft          |
| Marja Hölttä         | MHA            | Google             |
| Myles Borins         | MBS            | Google             |
| Waldemar Horwat      | WH             | Google             |
| Yulia Startsev       | YSV            | Mozilla            |
| Rick Waldron         | RW             | Bocoup             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Bradford C. Smith    | BSH            | Google             |
| Jack Works           | JWK            | Sujitech           |
| Istvan Sebestyen     | IS             | Ecma International |
| Ukyo Pu              | PSY            | Alibaba            |
| Mark Cohen           | MPC            | PayPal             |
| Kris Kowal           | KKL            | Agoric             |
| Justin Ridgewell     | JRL            | Google             |
| Caio Lima            | CLA            | Igalia             |
| Chengzhong Wu        | CZW            | Alibaba            |
| Ron Buckton          | RBN            | Microsoft          |
| Ilias Tsangaris      | IT             | Evernote           |
| Philip Chimento      | PFC            | Igalia             |
| Chip Morningstar     | CM             | Agoric             |
| Ross Kirsling        | RKG            | Sony               |
| Shane F. Carr        | SFC            | Google             |
| Robert Pamely        | RPY            | Bloomberg          |
| Robert Palmer        | RPR            | Bloomberg          |
| Thomas Levy          | TLY            | Evernote           |
| Michael Ficarra      | MF             | F5 Networks        |
| Kevin Gibbons        | KG             | F5 Networks        |
| Jason Orendorff      | JTO            | Mozilla            |
| Frank Yung-Fong Tang | FYT            | Google             |
| Mattijs Hoitink      | MHK            | Apple              |
| Shu-yu Guo           | SYG            | Google             |
| Jordan Harband       | JHD            | Invited Expert     |
| Daniel Ehrenberg     | DE             | Igalia             |

## Module Attributes for Stage 2

Presenters: Sven Sauleau (SSA), Daniel Ehrenberg (DE), Myles Borins (MBS), Dan Clark (DDC)

- [proposal](https://github.com/tc39/proposal-module-attributes)
- [slides](https://docs.google.com/presentation/d/1MOVBh0gw7-tqEx-maEvS2HsgwXd5X5pcwL80V67xCIg)

DE: (presents slides)

DE: Asking for Stage 2

JHD: the name of the proposal is “module attributes”. regardless of the name, to me the current proposal is not defining attributes of a module, it’s defining attributes of an import, because it’s being used at the import site. It's like an assertion, checking the module. It's up to the provider of the module to decide what kind of module it is. So I don’t have any mismatch around that, but around a lot of the possible attributes that can be added, they seem like they’re defining attributes about the module or they're affecting its evaluation as opposed to merely checking or halting it. I'm concerned about that conceptual mismatch. I feel it’s a mismatch to me.

DE: there are many proposals people have raised on the issue tracker that I don’t personally like either. [That doesn't invalidate the whole proposal; I'm not championing their attributes.]
I want to have this basic concept validated. If there’s no way we can have inline module attributes at all, that’s a useful signal to have from the committee. We're only proposing one attribute, "type", in a way that makes it possible to add new attributes in the future.

JHD: Right, and that’s totally fair - leaving syntactic extensibility is wise in most proposals. What concerns me about that though is because of the current lack of host invariance or the current situation around them, there won't be anything preventing individual hosts adding semantics that won’t be creating the mismatch that I’m talking about. That also concerns me.

DE: I want to refine and consider additional restrictions on hosts in Stage 2. I want us to do as good a job as possible of making hosts compatible with each other. At the same time the spec has given hosts a lot of freedom. There are some hosts that are interested in being aligned with the Web. And there are other hosts that specifically don’t have that as a goal. And I think whatever we do has to take both into account as possibilities.

JHD: Right and I think specifiers are under the control of hosts meaning they can do whatever they want under that string and there are some places where we’ve deferred some control to hosts for semantics. And technically they can do whatever they want with syntax, though I hope the spirit of that is not to allow them to do that. I think that last part is where my concern is. This is syntax. Things that can be decided in stage 2 should be things that whatever is decided the proposal can proceed. And to me it feels like if there is a knowable outcome where the proposal will not move forward, then it’s not ready for stage 2, and I don’t feel comfortable with hosts having carte blanche to add whatever they want in this "with" section.

DE: So you know, going back to this I think it would be a bad thing if we had hosts adding more syntax within their module specifiers. Generally they are complex things, urls & paths already have complex grammars. So that’s why I think it would be cleaner for us to have separate syntax for module attributes that really separates out these other things, we can see in the history of security issues that different syntax for strings is a frequent source of security bugs.

RBN: I wanted to comment on JHD's statement that it must check but not define but For a module to be able to inform the host on how to handle an import absent an adequate extension or MIME type. I’m curious if you’re restricting this ??? - if I wanted to be able to have the module attribute be of type JSON and have it treat the module differently and modify the Accepts header so there is multiple types of a resource so that I receive the JSON vs the HTML version of the resource, that seems like that is part of the point of this.

DE: Yes, that’s what I presented on in this slide.

RBN: This has to be making assertions that would affect the module itself such that if I make the import from another script this could end up being a different module? That being the motivating use case means we are actually defining attributes of the module itself.

DE: I’m not sure exactly - with ‘type: json’ in the web, you wouldn’t be able to omit it in a separate import statement, because that would imply ‘type: javascript’, and that would be rejected. On the web. In some other environments they could choose to make that optional. I don’t know how to respond to the broader aspect of this.

RBN: I was just responding to JHD’s comment that it does need to have some impact on ??? about the module itself because you want to be able to do something like modify the HTTP accepts header when you're making a request for a remote resource as an import. Based on that header meaning they could be two separate modules

DDC: I think this is maybe an argument against just doing something like changing the headers. I think what you’re getting is that type doesn’t change anything except possibly failing the module load.

RBN: I think I thought the goal was that you wanted a module to be able to inform the host as to how to request an import, in lieu of an accurate extension or mime/type, possibly affecting the HTTP “Accepts” header in a request.

DDC: That's not a core goal of the proposal as I've been considering it.

SYG: In reply to JHD, about hosts having carte blanche: I want to point out, to back up what DE was saying earlier, the problem space that this proposal is trying to solve is something that the web is very motivated to solve today, recall when JSON and CSS modules were shipped already, and then folks at TPAC(?) brought up a security concern, having syntax in js itself would be the least bad solution and the alternatives, including a mini-language inside the specifier would be worse for many reasons. So I just wanted to reiterate that if we as a committee want to say that hosts should not have this extra freedom around module attributes, it does not follow from that that a host wouldn’t invent something worse out of necessity. That should be kept in mind. If we say that hosts don’t have this over module attributes, it doesn’t mean that hosts won't invent something worse out of necessity. Keep that in mind.

BSH: It seems to me that the reason we’re wanting to add all this flexibility to define attributes on imports is that we’re trying to make `import` the primary way of loading resources. Is that something we really want to do? and why, since there are already userland ways such as fetch to do it? I know to some extent, de-facto, people have already done this, but is that something we want to push? Do we want to be in that business?

DDC: From the perspective of the web, there's a desire for solutions for loading HTML and CSS in a first-class way. Solutions have been explored in the past such as HTML imports, in a declarative way, where I can load HTML as a resource, and that was widely liked, but the fatal flaw was that it didn’t play well with ES modules, which was an emerging standard at the time, so that was the point that we decided to start exploring a version of HTML modules that played well with the module system. So we tried to explore something that would allow you to build a dependency graph with CSS modules. It’s a useful tool for the web to pull a module graph and something that we wanna have.

BSH: So just to be clear, the real benefit of using `import` as a way of doing this is that you’d then get to benefit from the module graph, which you don’t get in userland.

DE: So you have back and forth imports between HTML & JavaScript so it’s one big shared thing.

MBS: One thing I’d like to add is that yes, we could use `fetch`, and I could write you the code for that, but then you’re gonna end up awaiting fetch url, etc… dot then and basically introduces a TLA, It’s very verbose, it’s not great. It introduces a top-level await, and it introduces a new block in the graph during the execution phase. MY understanding is that the JSON ends up getting parsed during the fetch & link phase. So it’s actually able to get done asynchronous and not block other things in the graph. So this would to me introduce a novel way of adding json to the graph, looking at commonjs adding json is common and very much used. It’s an equivalence that a lot of people are expecting to be able to do with the ES module system, and the ways of doing it right now in userland are insufficient, in my opinion.

DE: I’m not sure of whether parsing would really happen in parallel, but fetching would be important as opposed to fetching it waterfall-style after getting it.

We do have to be careful about recommending this because the JSON that you import will stay alive for the lifetime of the page [because it's held in the module cache], so it only makes sense for certain cases, so we’ll have to document that.

BFS: callout to node that made added a feature so module authors could whitelist what people could load from there packages. It turns out that a bunch of people were loading JSON - their package.json was the most common - so people are really expecting to be able to load JSON through the same mechanism as they load JS. We can kind of debate if we call it a generic resource or anything else. The fact remains that people are both expecting it & we saw blog posts about it when module authors accidentally didn’t whitelist stuff in their ??? package.

So I think there is something to be said for JSON being a generic resource, but I don’t think it lines up with [unintelligible]

BSH: If it’s just JSON that’s the motivating example, then we need a less generic solution probably. Just wanted to make sure we really need this generality because we want to encourage expansion to all kinds of resources.

DE: At the February 2020 plenary we proposed a specific solution with `as`, and we got clear feedback from the committee that a more general solution would be preferable.

YSV: Yeah I just wanted to echo dan, there is reason for generality.

BFS: my recommendation for stage 3 and it is to split evaluator attributes and check attributes. I’m increasingly uncomfortable with evaluator style attributes, so I think it would be quicker to go forward with check attributes.

DE: We’re only proposing a check attribute for now. What are you proposing?

BFS: I would be more comfortable if we had a carve-out saying you should not do evaluator attrs currently.

DE: I’d be comfortable with that, and that would solve this particular thing about making a separate copy. You’d never have to make a separate copy if you only had check attributes. However, many people have proposed evaluator attributes, so it's worth investigating them before rejecting them.

BFS: I have no intent to reject them, I’m just saying it may be valuable to split them.

DE: Do you mean a separate syntax?

BFS: I am unclear on the exact nature of it. But I think moving forward with check attributes is doable, but I am increasingly uncomfortable with evaluator attributes.

MBS: One solution could be to have a restriction to start & a follow-up proposal to remove that restriction discussed on its own merit.

JHD: So that overlaps heavily with my topic, essentially it’s totally fine to leave syntactic room for more attributes, but by leaving it a wildcard for the host, it creates a situation where we have no input into whether people are adding evaluator attributes. Conceptually one could argue it belongs to modules and not import sites. And so I think it’s very important that this be restricted to only allow “type”, or only allow assertions, essentially, for now, and then future proposals can & should explore future possibilities.

But then the corollary to that is that the motivating use case for that, as I understood it, is around JSON and CSS modules, which do not execute or evaluate, they don’t have code, and that grants them additional privileges and abilities that they didn’t have before, so this `type` was an attempt to lock it down. Seems like it’s not matching.

Assuming that my understanding of the motivation is correct, then all you need is some privilege that says 'this thing can execute,' or to fit well with the default of everything can execute, to say “
“this thing can’t execute”. And it seems like it’s adding a lot of complexity to add type because the potential module types are very large. But if they will all fall into full perms or cannot execute; or if we envision additional privileges then it seems like it would be better to talk about that category, to have this proposal deal with ways to designate the privileges of the module, and not the type of the module.

DE: SYG proposed that last year and proposed to use `noexecute` but people in thread found that type or as was more like what they expected. The earlier form of this proposal left all the attributes up to the host, which allows them to go with the no execute option. I think we’ve heard a similar concern already that just restricting this proposal to being one single bit would not fit with the extensibility goals that other people had.

JHD: We can preserve the syntactic / object like nature & put a boolean in there...

DE: Is this something that we could discuss within Stage 2? The possibility to switch from `type` to a `noexecute` boolean?

JHD: If additional attributes would require future proposals then yes, the nature of the thing that determines whether to execute or not seems fine to iterate on within stage 2.

BFS: I just want to state that implementing a `noexecute` is actually pretty nontrivial. I don’t think we should try to block progress on trying to get that completely figured out.

MLS: So DE, if you could go back, in [slide link], I think attributes are inline with the import? About compatibility, how do you introduce the new 'with' syntax to an old browser? Or how do we do this in a compat way since this introduces new syntax?

DE: I think that’s just similar to async await in a new browser, you transpile it. Initial adoption of this feature would be in bundlers/transpilers. Eventually would be adopted when ppl are using more native modules.

MLS: My concern is that being declarative, it makes it harder for scripts to do that.

DE: Module loading is usually declarative. Do you have an idea for how we can make it more imperative?

MLS: Well I mean you could do an import - you had syntax for doing an import function, the API - but my concern is that you’re changing something that’s declarative, it’s tooling friendly but I’m not sure it’s developer friendly.

DE: If you import a JSON module in an old browser it won’t work even if we don’t introduce new syntax here.

MLS: OK.

KKL: Something to think about going forward, I’m helping out with the compartments proposal, so I’m enthusiastic about having a general way of loading resources. One of the complications that this introduces is distinguishing assertions from evaluation transforms. One of the things that the compartment API will likely reveal, or one of the things this will complicate about proposing compartments, is it possible to define in a way that it’s possible to enforce the distinction between “evaluate” and “assert”.

DE: that’s an interesting point, maybe between Stage 2 and Stage 3 I could learn more about the compartment API and we could work out a solution?

KKL: That sounds good to me.

JWK: If we developers specify if the attributes they provide are safe to ignore, if the host does not understand those attributes or they want the host to fail to import if it doesn’t understand the attributes, if we don't give this ability to the developer, this will split the ecosystem and make it difficult to write module files that work across JS hosts. And today the module specifier is already an ecosystem-splitting point, but there is a minimum set of common features that hosts are likely to support. That is most hosts are supporting the relative path with extension name importing.
But for module attributes I don’t think it will be as lucky as module specifiers.

DE: So right now the spec lets hosts ignore or reject unknown attributes, we could before stage 3 to lock this down. Though there are on the other hand these security risks for ignoring check attrs.

JWK: I think the point is to let the developer decide if the attributes can be ignored or rejected.

DE: I guess the compartment API would be the path to letting developers decide on module semantics. I'm not sure how else we could let the developer decide.

JWK: Does that mean we want to use modules attrs safely then we must use them in a compartment?

DE: I don’t think so because I imagine hosts will align enough such that you can use module attributes safely, or that you know which host you're working in and how it treats module attributes. it’s hard for me to picture the problem completely.

JWK: For example, webpack can have their own extensions in the loader syntax.

RPR: We have reached the end of the timebox and there are still queue items. We will have a 5 minute extension.

SYG: I am slightly more optimistic than JWK outside of any standard direction we provide the core value proposition of the web is interop among implementations, and I think there will be sufficient market pressure such that folks’ tooling won’t do wildly different things for the user, in the same way that tooling currently is free to do wildly different things but they don’t. I feel like things will work out more than not.

DE: But we also don’t have to wait for market pressure because we’re in contact with the authors of these tools.

JWK: But today there are already some private specifier extensions in webpack. There is only one dimension for module specifier (to split the ecosystem) but infinity dimensions for module attributes, so everyone can design their own attributes (especially in tools like webpack loaders). it will be easier to break cooperation.

DE: We’ve already been trying to cooperate with tools authors, maybe we should work more on that before stage 3. I just feel like getting away from putting subsyntaxes in the specifier will be helpful in reducing the ecosystem chaos you’re talking about.

MBS: JWK I empathize where you’re coming from. Important to remember that the ecosystem is fractured now. And with the security concerns that were raised about JSON modules in the past, at the moment there is not a clear alternative right now, setting aside the other attributes. Setting aside the other attributes which I think have their own value. I think that while this is an opportunity for the ecosystem to fracture, it’s also an opportunity for the ecosystem to align. Introducing this functionality as a baseline - transpilation tools can extend on this. Webpack is already going to do a bunch of interesting things, even if its extensions can’t be used in browsers, it is at least a consistent syntax. I’m personally confident that various runtimes will want to align as people want to share code across environments. And without these baseline tools, I’m worried that we won’t have the foundation to build on. So while there is a risk of splitting, it’s a risk we need to take to make things better aligned.

DE: Asking for Stage 2 advancement

JHD: I think that iterating on what the keyword is spelled is a thing that can happen within stage 2.

But I don't feel comfortable with this going to Stage 2 if it allows hosts carte blanche to do whatever they want. Part of that is BFS' concern about evaluators vs. checkers. I would want it restricted to checkers.

I think it’s also appropriate for now for future needs-consensus PRs to relax those restrictions for now as opposed to raising the floodgates.

DE: Restriction being the checker vs evaluator thing?

JHD: I would just like to have one attribute for now. And I don’t think it’s appropriate to go to stage 2 without resolving that because I don’t think I would not let it go to stage 3 ever if it didn’t preserve those restrictions.

RPR: Is this a conditional block or is this blocked?

JHD: I doubt we'll come up with a resolution in the next few minutes.

DE: I’m comfortable adopting this checker restriction. Concretely we did come to the committee last meeting with this single-attribute version, and that was met with the exact opposite concern that it should be extensible. So I would be comfortable going to Stage 2 conditionally requiring that the module attributes be this check attribute. Could we do that? I’d be uncomfortable going to stage 2 with a repudiation of the feedback from last meeting.

JHD: In spirit what you're saying is OK, but I don’t think it’s reasonable to apply pressure on me or on folks that want extensibility to resolve this in a few minutes.

DE: We’ve been discussing this for months, in committee and offline, so I don’t think this is unreasonable pressure. You’re raising this blocker, I’m saying let’s go with much of what you're saying.

JHD: if we do not restrict the name of the keys, I don’t know what it would look like to restrict the semantics of them.

DE: So concretely we would say it’s not part of the cache key and we would put a requirement that it would return the same thing or an error.

The text is already there for `type`, we would just raise it to all module attributes.

RPR: Our timebox has been exceeded, since there is no immediate consensus, please talk offline today so we can bring that back tomorrow.

### Conclusion/Resolution

- No consensus on stage 2, but people will talk offline to potentially revisit tomorrow.

## Built in modules Update Towards Stage 2

Presenter: Michael Saboff (MLS)

- [proposal](https://github.com/tc39/proposal-built-in-modules)
- [slides](https://github.com/msaboff/tc39/blob/master/Built%20In%20Modules%20TC39%20June%202020.pdf)

MLS: (presents slides)

WH: You’re proposing adding a `BuiltInModule` object that lets you shim and then import built-in modules via `BuiltInModule.import`. I couldn’t tell from the presentation: Is that the only way to import a built-in module?

MLS: I should have stated that. Both the import declaration and import() function work with built-in modules. What is described here is a Built In Module specific API.

The `BuiltInModule.import` would not allow you to import anything else, it would throw on a module specifier that doesn’t match a built-in module, and it would probably throw on anything else.

WH: How would shimming work if you used an import declaration?

MLS: If you don't have the module in the module map you do a different kind of shimming.
If you do have the module, then you’re not going to provide an initial implementation. I expect that shimming code will do something like:
if (!BuiltInModule.hasModule(“js:Foo”)) {
… // provide shim for js:Foo BuiltInModule.export(“js:Foo”, myFooExports);
}

// Any shimming to be applied to the base js:Foo

WH: Would the import declaration take effect first?

MLS: Yes, the import keyword would take effect first but if the module keyword does exist you’re not going to have it.

WH: I don’t understand how you would use shimming if you can’t execute before the import declaration.

?: I think MLS is saying you’d run this in a script, not in a module.

MLS: Yes, that’s when you’re likely to use these apis as they’re explicitly designed for the shimming case.

WH: I understand how this works with shimming scripts, but how would you shim the more modern module-based code that does a plain import of built-in modules?

MLS: you could shim the same way and I expect you would do that and use the BuiltInModule object in an initial shimming script / module.

WH: But the import directives would be evaluated before your shim runs.

MLS: That’s not necessarily true. If your first script tag loads all the shimming code, and then the application uses the import keyword, then the import keyword would see the updated modules.

WH: So you’d need to load a non-module script before loading module-based JS.

MLS: That is usually typically how shimming is done

BFS: I just want to clarify that a script tag is not the only work-around, you can actually do a top-level wrapper ES module.

KG: MLS, first thanks for moving this forward. I especially like this design, it seems like it does a good job of making things shimmable in ways the web relies on. Can you go into what you see the advantages of this design are over sticking more stuff on the global object?

MLS: There has been lots of discussion on why we’d grow a global object To me it seems like there are a couple advantages, people may contend with this, but I believe that an implementation, if it provides an implementation of a builtin module on the fs instead of in memory It makes it a bit easier, someone would say you would use something on the global object, you can do that in the global object if you intercept the first reference. I think yes you can do that, but having built in modules in the file system is a little easier on implementations. So you would save startup memory and things like that.
If you think about it, a built-in module map would map moduleSpecifier keys to some notion of a location in a file system, that’s going to use a lot less memory than having code that will bring in the module’s implementation.

It’s also a good way to organize things, that you have modules that are self contained, that can be implemented as contained modules. It’s standard software practice to build things on libraries or other modules, and this is more in line with that from that perspective.

KG: thanks

BFS: I had a question about the lifecycle of builtinmodule and import. If we import something before we export something with `BuiltInModule.export`. Could we get two module namespaces back for the same module specifier?

MLS: The export is going to change the built in module map. Any subsequent import will get the updated map. I’m not sure I understand the question.

BFS: So say we have the primordial form of a module and a shim form.
If we import the primordial form and then we shim it, when we import the same specifier, we would see the shimmed module namespace and not the primordial form, correct?
When we import the same specifier we’d see the shimmed module namespace, not the original one?

MLS: Yes, now I understand the question. If I import A, and I have the built-in module, A, and then some code shims A, then I import it again. Then yes I have 2 different versions of A imported.

BFS: OK that’s all I wanted to know.

TLY: It seems one of the advantages that built-in modules was going to have is that you can trust them to be more intact than random keys on the global.

Once the application runs, one thing that we would always want is to make sure that the other things they import dont shim it It would make more sense to have a separate phase for shimming rather than a workaround with a script tag that does it.

MLS: We’ve discussed this, yes the design is that you have to call freezeModules(). It was discussed that shimming was only possible in the first script tag, but that isn’t how all shimming code works, so that isn’t acceptable. If you don’t call `freezeModules` the application code would change things itself.

Given that we need to allow shimming that builds upon other shimming, we need to allow modules to generally not be frozen and leave it up to the application's discretion of if / when the modules get frozen.

JHD: To answer TLY’s question. Currently if you want to lock things down you need to call a freeze or do an SES.lockdown or something like that And most apps just don’t do that, like there’s even a technique from MetaMask that will freeze things like that but only in tests, so that you can verify that you’re not modifying things later on but then you don’t actually freeze them in production. So while if everybody needs to lock things down, it becomes an ergonomics cost. It’s already the case that most apps don’t do that. In other words I’m not worried about that ergonomics cost.

RGN: I noticed that for module specifiers you have ASCII letters and then a colon, and I’m curious what the relationship between those and URI schemes (which are registered) will be.

MLS: Originally we wanted the specifier of built-in modules to have an IANA registered prefix.
There was pushback, we want them in the form of a URI to match other module specifiers, but there currently isn’t an intent to register one. We are open to registering “js:”.

RGN: Does that mean you can never use http: inside of them?

MLS: I don’t think I would ever want to use http:, given that the module specifiers you use here would be the same ones you use for declarative import or the import function. No, we don’t want to do that. As TC39 we would only use “js:”.

So yeah we don’t want it to look like an HTTP remote resource.

RGN: I think you’ve got a pretty big risk there then, because you’re saying we’ve got schemes that are not registered that can show up in the same place where registered schemes are. So like if someone uses `js:`, and then someone registers `js:` - or if someone uses `device:` and then later on that becomes an IANA-registered scheme, then the host has a decision point that really shouldn’t.

MLS: The only prefix that we would register as TC39 would be “js:”, the other bodies would be responsible for the namespaces the use.

RGN: What’s to prevent someone from registering `js:`?

MLS: If the committee wants us to IANA-register `js:`, I’d be fine with that.

AKI: we skipped ahead and missed BSH

BSH: I just wanted to point out that with regard to freezing modules all the time, currently it can happen that you need to load foreign code on a page. You want to load google analytics for example. You have to load js from somewhere else and the people that wrote that JavaScript, they need guarantees, they have to make sure things work on the page, they have to make sure certain things are there, and they need shimming, I don’t know what the solution is but I just want to make sure that use case is considered.

MLS: That use case is considered, the application developer knows that the case, and they wouldn’t freeze a module that a 3rd party module needs to shim.
And like I said there is some discussion that this freeze modules, there might be another freeze(moduleSpecifier) API that would freeze only that module.

MLS: was there another reply jumped over?

RKG: JHD had said that SES lockdown was non-prod only and I wanted to clarify why that would be (to the extent that that would apply here)—I would have assumed that your whole point of freezing would be to avoid nefarious influences in prod or something.

JHD: I would say there are a few reasons why people don’t freeze. One is they just aren’t aware of or don’t think to do it.
I would say another thing is that freezing things can have performance implications, at least historically. I haven’t done any benchmarks in a while. As far as all the shims I author, they would be wrong to freeze anything themselves, because the spec requires they not be. It would be up to the app to do it. Generally I’ve found that when decisions are down to the end user, there is an incentive calculus done, whereas the moodule author doesn’t do it.

I could make a package that brings in all the shims for builtin modules and freezes them, and that could happen. Currently none of the big shimming packages do this.

TLY: That is why I originally brought up the question, if you leave it up to the applications they probably won’t do it.

KKL: Speaking to that point, perhaps freeze modules could be rephrased as commit, so as to make sure that [changes via .export() are not visible until committed]??? or anybody importing thereafter….
I think that it is a reasonable contingency that we register “js:” as an IANA.

Also some questions I hope will be answered before the next stage: builtin modules are already available in the wild in some ways, like the node “fs” module. I’d like to see how a shim for the fs module would look and also would a shim for modules be able to use modules? Not being able to do that would be excessively limiting.

MLS: KKL, the meta-module question is can you shim the `fs` module - it kind of blows my mind I’m not sure. It seems to me the host use of the filesystem is probably internal, and wouldn’t involve shimming itself. Which would change how the host brought in the code that is the `fs` module, so I think that’s how you would do it. You have to have a starting point, a chicken-egg. The host has certain built-ins that are not shimmable themselves among them file system primitives.

KKL: I don't really require an answer at the moment. Just want an answer before advancement.

MLS: Ok, well, we talked before, we can talk again.

SYG: MLS, you were very careful to not use the word import map or module map. When we talked about this there was talk of using import maps. In particular this freeze thing came from an invariant that the import maps proposal has. Import maps are loaded by synchronous import that must happen before all modules. Any attempt to modify the import map throws after any module loading has occurred. So this programmatic API seems like it would fit in that invariant. My question is: can shims of builtin modules import their own modules?
If they cause imports, that breaks the hard invariant that the import maps proposal has.

MLS: So, I expect it would be the case that some built in modules would import other built in modules, however I do not expect a built in module to import a module only available over the network. As a matter of practice, a built in module should only import other builtin modules.

SYG: I see, ok ok.

MLS: With an operating system’s onion model, you don’t have a lower level depending on a higher level.

SYG: In the module map story, if it needs to run code to decide whether to shim or not, Or are you saying that the shim can only import built in modules that are not shimmed, i.e. it’s just 1 layer deep.

MLS: No shimming can import whatever it wants, including things off the net, and can use the code it loads as part of its shim when it exports that shim as a built in module. but that export is not to the import map. it is to the builtin module map. specifically to the part of the host that manages builtin modules.

SYG: So you are actually proposing not integration with modules maps but to a separate map that is purely for built in modules.

Then I will modify my comment. This is not stage 2 blocker, but you probably need buy-in from import maps folks. I'll try to build bridges there. If you’re not using them, then you’re proposing something else that could be complementary. I think we need some conciliation there.

MLS: I'll give you a little background. When we last discussed, we talked about building a JS version in import maps. When we started thinking about it, we determined that the built in module shimming feature is actually a self-contained problem and didn’t require integration with import maps. if you bound the problem to just builtin modules then you can do it synchronously and eliminate the problem. Import maps operate above the built in module map and the API’s we are proposing.

So that’s why we want this to be a self-contained solution.

SYG: That clarifies for me. I am looking forward to reading the full semantics there.

JWK: if we have a BuiltinModules object, why do we need to have a “builtin module” when we could just use the BuiltinModules global object to get them?

MLS: Yes, but in a module centric world where every script is also a module you would probably want to use the declarative form as a statement because that is more familiar with a module developer. So that’s why that method would be available as well.

JWK: I have another question. Now the proposal is proposing a special prefix “js:”. Today the module specifier has no meaning and the meaning is left to the host. If we make this change, the specifier will have a meaning. If we could move it to the module attributes Like “with “std”: “js””…

MLS: The ES6 specification does not specify the format of ModuleSpecifiers, but it’s suggested that they will follow a URI format and go through the host. It’s hand-wavy but the host will take that specification and get the module. It is generally accepted that it will be some form of URI. I don't think this is outside of what we currently have specified. I'm fine with registering "js:" with IANA just in case.

Adding it as a module attribute, I don’t want to make it dependent upon another proposal and also I don’t think it is needed as it intersects with the notion of the URI that generally used for ModuleSpecifiers.

TLY: I think you can avoid all of this ambiguity by making it not a URI. Have something that is not valid syntactic URI syntax.

MLS: We've done lots of bikeshedding on this. In other module loading schemes, they use a @ or other characters We thought it would make sense to be a URI. Using “js:” is compatible with the mostly de-facto URI scheme of ModuleSpecifiers.

TLY: If you want it to look like a URI, it should be a valid registered IANA URI, I believe.

MLS: I would like to work with the committee, if it wants us to register “js:” with IANA the we would do it. We would also want it to be apparent when you’re loading a built-in module because of the “js:”.

JHD: Just wanted to confirm BuiltInModule object will be globally available everywhere?

MLS: yes

SFC: Being involved with existing global object standard libraries like Intl and Temporal, I’m a bit worried about the dichotomy that this proposal introduces with regard to how to access standard library features. Some older features would be on globals but newer things would be on imported modules. That’s a very odd dichotomy that creates a bunch of inconsistencies where developers wonder when should they use built in modules and when shouldn’t they use built in modules. I would like to see a cohesive explanation for why the dichotomy is justified. I posted an issue to follow up offline ([#58](https://github.com/tc39/proposal-built-in-modules/issues/58)).

MLS: I’m also troubled by that, but the language should have had a built-in module or library scheme many years ago.

I don't think we will take new features and make them both new globals and new builtins. New built in module features should be contained and not impact the engine internals. Proposals typically implementable completely as JS would be builtin modules. Other things like new language syntax and language features their API’s would appear as part of the global object. That’s my opinion of how the committee would move forward.

## Deep path properties

Presenter: Rick Button (RBU)

- [proposal](https://github.com/rickbutton/proposal-deep-path-properties-for-record)
- [slides](https://button.dev/talks/deep-path-properties-tc39-june-2020.pdf)

RBU: (presents slides)

RBN: syntax overlap with proposal-shorthand-improvements: I like the idea of the proposal. Not stage 1 blocking concern, there was a proposal I brought to committee before now with very similar syntax able to reference a deeply nested property.

An existing language feature of C#, often used when working with C# enumerables (JS iterables). As a result there is some syntactic overlap, even though I don’t think it would be a blocking issue, when I intend to bring this back before committee again

same issues with syntax concerns that prevented shorthand syntax proposal from reaching stage 1. So I would like to at least discuss how these two work together because of ambiguities between these proposals.

RBU: 100% agree, I am a big fan of shorthand improvements that I like from C#

We started brainstorming alternative syntaxes. We didn’t come up with one. The ones we came up with were worse than the syntax proposed. I would be interested in using stage 1 to discover that I would like to solve the open questions with objects *and* reconcile the proposals.

RBN: There is no conflict. The same syntax works for both. Mine would not have the colon and so it’s similar to ??? shorthand left hand assignment.

RBN: there is a possibility there would be confusions

RBU: I agree.

WH: Are you proposing applying all mutations at once or one at a time?

RBU: I would imagine one at a time like spread.
So that would mean that if you specify `counters[0].value: 2` and then `counters[0].value: 1` the next property definition has the ability to override the change made by a prior. The second overrides the first. Just like with object literals the second key overrides the first one that was defined.

WH: This has performance implications. You’d create a whole tree of changes for each mutation you do, so you’d need to create lots of intermediate records/tuples when applying several mutations.

?: The places you don't change will naturally be the same, but those you do will have to be dealt with.
But then the places that we do change, yeah.

WH: How does this work with computed property names?

RBU: It just works. The zero in `counters[0].value: 2` is a computed property. You could just as well put a computed string literal or expression there and it would just work.

WH: If the first item (`counters` in the example) is a computed prop name, how would you do that?

RBU: Instead of the counter's identifier you would use the computer property’s identifier name?
It would work the same way in that you would have the computed property—if the computed property evaluated to counter, the If you change it further it would update inside of counters.

WH: One last question: How do you delete a property this way?

RBU: Good question, came up in calls, we don’t know—this is a missing part of this proposal and a missing part of shallow spread. I’m interested in investigating how that would be possible.

WH: OK. Thank you.

DE: To respond to those questions, you were saying it would be inefficient to do the repeated updates. There’s no way to observe the intermediate values of the record. So even though logically one thing happens after the other. Although there’s no structural sharing in the record and tuple proposal, the record and tuple proposal is made so engines can do structural sharing that could mitigate that impact.

For deleting a property, I think this would logically be a part of destructuring [which we explained is omitted, but could be added later].

…

I don’t know if I’m convinced we need a delete syntax, You could also do that by calling Object.entries, manipulating it procedurally, and I don’t know if we need a syntax for every single thing you could do.

WH: DE, your first point is not true, it is possible to observe intermediate mutations. If you have the mutations `[foo]: bar, counters[0].value: 2`, then the first mutation is observable when making the second one. The second one will do different things depending on whether `foo` is "counters" or not.

DE: That’s true [that although structural sharing is not blocked, it's not always possible to statically analyze the paths to minimize the number of intermediate structures, e.g., if indexed access is used].

AKI: stage 1 concern?

DE: Good to go to the next question but I don’t agree we should limit to stage 1 concerns.

AKI: limited timebox and I don’t disagree.

KM: main concern it is a somewhat vague concern, that would lead to very inefficient code, I don’t know about other dynamic languages that does this?
Not blocking stage 1 on this. This could lead to an inefficient coding style.
I don’t know of other dynamic languages that have this.

Normally the way you optimise this is that you observe that you are the only person looking at this tuple and you can just mutate the underlying object. This is very hard for us to do in JS core, we only do that analysis in the most optimizing compiler, so you’d have very bad interpreter performance. Hard to get right.

RBU: I sympathize. My argument is not against but I believe this is already a used pattern with nested spreads

I believe that this pattern, I mentioned, people are already doing this but still doing nested spreads. This is still a thing because of nested spreads with worse performance because you can do it already.

RRD: Yeah I can quickly concur, by adding that for example redux reducers use that technique a lot and this is one of the motivations for the proposal. A lot of objects are being spread/copied over & over.

A lot of objects are already being spread and copied over already.

KM: It becomes the expectation that it is fast. We’re adding things that we know wont be fast while the other things won’t have performance consequences like libraries might.

TLY: It’s an idiom, not a library feature.

KM: Sure, it’s an idiom but you’re not getting it from the language itself.

KG: I like exploring the problem space, but given that it’s focused on records and tuples, I don't want to advance past stage 1 until records and tuples advance.

RBU: I would 100% agree with that if this proposal only applied to records, which I don’t imagine it would.

JHD: Not as a stage 1 blocker just as feedback for stage 2, I think it’s pretty critical that this work with objects. With the nature of immutability I think it’s important that they work the same. That would be my feedback for a future meeting. I am personally in support of stage 1

RBN: One of thing that was mentioned earlier…Monocle-mustache (`.{`) operator would be interesting to bring back to life

RBU: Not familiar with the syntax, please open an issue on the repo.

MF: I appreciate early stage proposals bringing examples that explain what a solution could look like. But I want to make sure we’re not committing to a solution like this. I have other ideas for what a solution would look like. I want to ask the champions to look into an API based solution, something like lenses, because I think that it might not be worth the syntactic space.

RBU: 100% agree, The overall goal of the proposal is to solve the problem of providing an ergonomic way of providing this computation, and ideally not breaking the performance ideals of record/tuple, i.e. not block optimizing compilers from doing good work. So as long as we stay as close to that as possible. If this results in a library, I think it’s perfectly valid.

MF: I think that would be exactly what we should have as the conclusion in the notes. (notetaker: spooky meta)

AKI: do we have stage 1? (silence) Sounds like consensus to me?

RBU: thank you very much!

### Conclusion/Resolution

Consensus on Stage 1

## Restrict subclassing support for built-in methods Stage 1

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/syg/proposal-rm-builtin-subclassing)
- [slides](https://docs.google.com/presentation/d/1vJeJFueDwrj8ebXFdGsEO1J_Q-DzfU01dLEGVd26A9o)

YSV: (presents slides)

YSV: asking for stage 1, staging process to track research

KG: I wanted to say that I am in support of this. I wanted to mention an additional type of complexity that this brings that YSV kind of mentioned, and I wanted to emphasize it - it’s not just new builtins but proposals to add methods to Set.prototype and Map.prototype Stalled in part because I brought up what we would need to do about Symbol.species.
If I were designing a language with no concern for runtime performance, then the purist in me is like “well, it’s nice to make things pluggable and subclassable”, but that’s not what we’re doing. The decisions that we make on performance affects billions of people. So I’m strongly in support of removing this despite the language purist in me being slightly sad.

JHD: I think I might know the answer but I wanted to hear your explanation for why we would need to remove the static methods, because they can just look up the receiver? If the receiver is MyArray then Array.from makes MyArray.

YSV: I believe that the reason for this was consistency. I had a conversation with SYG about this, but maybe SYG you can cover this one?

SYG: It’s because mainly it’ll be kind of weird, not really a technical reason.
There’s a slight technical reason in that maybe Array.from - like you can look at the constructor methods on array & promise have extra logic around subclasses that could be removed.
In terms of incurring the very real maintenance cost, constructor methods are better than instance methods. But I think it would be pretty weird to remove them from instance methods but keep them for static methods. It’s possible but not preferable for the mental model.

It’s possible but I think it would be not preferable for me to add that complexity to the mental model. That is something we could discuss, though I think it would be nice for people who are doing subclasses that they remember one rule, which is if you want your methods, whether they be instance methods or constructor methods, that they return an instance of your class, and then you just overwrite it, Instead of having to remember for some constructor methods they have this built-in behavior so I don’t need to do it.

JRL: If we can't remove Type 2 or Type 3 complexity, you said this proposal would be retracted. What happens if we can remove it from some objects but not others? Like maybe Promise doesn’t need it but UInt8Array needs it, because of the some library. Removing `@@species` from some of the classes just so that we can reduce overall complexity.

YSV: I’ll just restate your question, I guess what you meant so if we can’t remove Type 3 & Type 4 then that is the exit criteria that would need to be fulfilled.
More specifically it’s a question about the benefit we would get from for example just removing Type 4 and not the other types? Would that be beneficial enough, or would we need to remove Type 3 and Type 4?
I think that’s a question we need to answer, whether or not we can break consistency across built in methods, I’m not sure that will be supported by everyone. ??? We want that consistency so I expect that won’t be an option.

JRL: The way I heard it was that if we couldn’t remove it from everything, then we wouldn’t do anything. But my question is like can we just remove it from Promise, or UInt8Array, or something else.

SYG: I think that kind of piecemeal removal is not worth it, along the same lines of complicating the mental model. We'd be asking programmers to be aware that some types have species and other types don't, for weird legacy reasons. For what reason do they have them e.g. why do they have them? We’d say, “Well because of weird legacy reasons.” I think one outcome of this investigation comes back to what KG said earlier, which is that we as language designers are designing new features in JS, so long as we have the subclassing machinery, we have to keep contending with them for future features. Removing them piecemeal now would be confusing & worse for complexity. We might be able to make a clean break at least, but even that sounds pretty bad to me - clean break meaning that new collections do not opt-in, even then doesn’t sound great for the user as they have to arbitrary know some have it & some don’t/
So I think that’s a big reason why we’re looking at just removing it wholesale.

YSV: Ultimately this should be an overall win for the user. more robust engines running their code without cost to them.

CM: I just wanted to throw my voice in in support of this. There’s sort of a meta point which is that I’m always happy when people are stepping up to take out the trash. This simplifies the world & gets rid of weird stuff that’s hard to explain to people which they trip over, completely aside from the performance justificiations. I’m just very happy with this.

KM: I’m just trying to clarify - Type 3, if I understand right, you’re just removing species in your Type 3?
YSV: Yes, it’s not a significant departure from Type 2 and the amount you save from removing this one is not(?) significant. But basically we would disallow this behavior.

KM: So you could just look at the constructor property of map, and I believe that would behave identically today. [slide link](https://docs.google.com/presentation/d/1vJeJFueDwrj8ebXFdGsEO1J_Q-DzfU01dLEGVd26A9o/edit#slide=id.g85a8e1c232_0_275). Returning A in from vs returning A in map, assuming you called new on whatever the constructor gave back is that type 2 or type 3?

YSV: Type 2. In this presentation we are going for the extreme version, I suspect we won’t go with type 2.

KM: I would find removing Type 2 weird. It probably doesn’t.

SFC: I’ll open up a thread to follow up offline, but we’ve been talking about subclassing a lot in the Temporal proposal and how best to support it, and right now a lot of the Temporal types, instead of creating a `new Temporal.Date` for example, they’ll create a `new this`. There’s a lot of passing around constructors between pieces of Temporal. It would be useful to have an extra review of that mechanism to make sure that it is consistent for this vision of how subclassing will work for ECMAScript going forward.

YSV: That would be really interesting & would be a good case to see how much it simplifies or does not simplify new proposals going forward.

RBN: From my perspective, the only thing that I’ve only ever felt species was ever really valuable for was if you subclass but have a different set of constructor arguments than the superclass. And we saw this discussed earlier with AggregateError, where we want to add an argument before the message argument. So if for any reason we had a case similar to AggregateError for an object that needed to create a new instance of the object using a superclass method, there’s no way to ensure you can get a consistent constructor with the arguments you expect. There’s no type safety or guarantees that I know that if I do this.get constructor, species is kind of a way to work around that for subclasses that want to inherit superclass methods but leverage existing constructor capabilities.
That’s the only thing that I think is really valuable for the existence of symbol species. Because if I wanted to go the route of simple species completely and Type 1.

If I really wanted to have map return an A but I dont have the instance creation happening for built in methods then I would have to override map call map get the normal array back create my copy of the array… It makes it much more difficult to subclass because there’s no place I can inject and say “use this mechanism” that might be able to adapt those constructor arguments. And that’s really the value that I see species provides, but then we don’t tend to use it on static methods like we use it on this. So we run afoul of it today. That is the only thing I see as a value add for species, to add additional arguments to the expected arguments for a constructor in a super class.

YSV: Thank you for that comment, that’s a very interesting thing that you bring up. One thing we’ve been looking at a lot, in a bit of disbelief, is that with symbol species, one thing that’s kind of amazing is that we haven't really seen it being used in user code that we've examined. We haven’t looked at the entire web of course so we don’t really know if it is being used. If you know of a case where this is being done ,and would love to take a look at what they are doing in the code base. Maybe we can take a look at that, that’d be interesting too.

DE: Question for RBN, would you be okay with type 1? Where you’re saying you construct this subclass and inject logic to determine the class bieng constructed in the middle, is that essential functionality to you?

RBN: What i was trying to point out (using the type 2 slides), but the issue with Type 1 -

YSV: Maybe this [slide link]

RBN: So if we don’t use Symbol.species and instead use `this.constructor`, I have to override the `map` method and patch `this.constructor` with something that `map` can create. If we don’t use `this.constructor` at all and always return the array then I only have to subclass `map` and adapted the resulting `Array` into an instance of my subclass. If we don’t have `Symbol.species` we shouldn't use `this.constructor`.

DE: I agree [that there is this implication and difficulty with Type II]. I was just asking are you okay with that option where you have to override the map thing [Type I]?

BFS: We have a crawler at work that we’ve been rewriting to do audits of what the actual usage type of species is in the browser. It would be good if anyone with specific hooks or traps they want to see usage amounts for or if they have lists of sites they’re concerned with I think we need to be very careful there. I think a lot of what we’ve seen from the crawler is false positives. It is absolutely stunning how many false positives there are. Also things are never using @@species properly, when they do use it. Which is interesting, ANother topic which we can discuss elsewhere. The problem is that people are assigning values to @@species, and not delegating it like ???, which ??? the `this` value, and then that kills subclassing, and people are subclassing their subclass & it’s broken. So, this is not just about performance. There is nobody using species correctly except for that one library by Feross & he removed support for it. It would be good to know what statistics people want to see, because there are so many noisy statistics going on.

RW: So you were asking for examples of Type III. In Test262, we use Type III extensively for testing the behavior of built-ins across realms. We are heavily reliant on setting the species with a cross realm copy of the constructor to make sure the lookup chain of the constructor is preserved correctly. To make sure that the lookup chain is preserved correctly. If you look at it, I don’t want to rathole into that, we can look at it together offline. But that’s a pretty substantial example of where it’s being used in the wild. And I don’t know how else we would test cross realm behavior which is important to the language cause we have access to multiple realms in any given runtime. So I just wanted to put that on the board and say let’s chat about it offline.

YSV: Sounds great.

WH: I also have concerns about how you would remove type 3 without also removing type 2. If you remove both of them, when you subclass Array to make MyArray, then .map will create Array instances. If you just remove type 3 without type 2, then there is no way to make it return Array instances instead of MyArray [slide link needed] — that’s currently done by setting a null species. I don’t consider replacing all of the array methods a good solution.

SYG: I think that is correct, I think it is not realistic. I don’t think we are proposing removing 3 without removing 2. I want to add more data points, I wasn’t around for this, but when this was discussed in ES6 era, the species machinery wasn’t around, and they used ??? And microsoft actually shipped that and found it to be incompatible, and had to un-ship it, and the species machinery kind of came out of that data point.
I don’t think it is realistic to remove 3 without 2. Also from the original motivation of decreasing complexity Removing 3 without removing 2 is not worth the tradeoff anyway. Like if you just remove 3, you remove maybe 1 branch. But the complexity comes from that you'd look up a property at all in this case ?? and then you’d look up species. And because you look up a dynamic property by constructor, that adds all of the complexity and maintenance headaches. 4 can be split out, but 3 and 2 are a package deal. But I thought it was useful to highlight the slight difference in expressivity.

WH: I agree with what you said but what you said contradicts what’s on the final slides of the presentation.

YSV: I agree with everything that SYG just said, and in fact - I wasn’t entirely clear. Removing type 3 just by itself, if for example we could say disallow this behavior from users, but keep all the species machinery that allows subclassing to take place for type 2. It would be a very minimal change in terms of complexity & probably not worth it by itself unless we find a reason why we would need to do this (ie, somehow helping users).

WH: If you just remove species, then the scenario that I pointed out arises, in that there’s no way to not delegate to a subclass, which you can currently do by setting species to null.

KM: KM: I’m just curious, how did symbol.species, IE just shipped ??
How did species fix that problem? Because species is just a getter that returns whatever you called it with.

WH: Species can be used to turn off the getting of the constructor.

KM: I understand that, my understanding was that IE, before species shipped, they changed all the Array prototypes to use this.constructor.

SYG: I think it was something like, I’m speculating here, I looked at some code, I think there is ES5 era code, due to mixin pattern override the constructor with their own constructor.
And that constructor function doesn’t have a species.

KM: Oh and because when a species doesn’t get found, you default to [crosstalk]

SYG: Right it defaults to ES5 behavior which is a plain array.

KG: Want to reply to WH, I agree with WH from a purist perspective, ending up where the subclass has to duplicate all of the methods. On the other hand, making every invocation of `.map` or `.finally` or `.exec` (on an Array or a Promise or Regex or whatever) slower even if it’s just by a single branch on page load for every page load on every website is a huge cost.

Weighed against the extent to which we are making people’s lives easier by making the language more coherent by allowing them to not duplicate a few extra methods...

Especially for Array, Promise, Regex, I think weighing those two things, I think language purity, the language purity has to lose to websites being a little bit faster.

WH: I don’t know why you mentioned me specifically, you’re responding to an argument I did not make.

KG: Your argument was removing 3 without 2 leaves you in a condition where subclass methods can’t create the subclass.

WH: I’m arguing to remove both 2 and 3. If you just remove 3 you do not get the implementation speed benefits either.

SYG: Yes, the implementation benefits come from removing both 2 and 3.

KG: If that’s true that’s fine. I’m arguing that removing 3 without 2 is viable if implementors think it's valuable. If implementers say it's not then fine.

RPR: We’re at the timebox. There are three items on the queue. Would you like to ask for stage 1?

YSV: Yes, asking for stage 1.

(silence)

RPR: Congratulations, you have stage 1.

### Conclusion/Resolution

Stage 1

Remaining queue items + elaboration:
I believe that core-js and other shims contribute a significant amount of false positives to measuring web compat data - specifically, I’m convinced that all use of Symbol.match on a non-regex object is core-js doing a feature detection. If browser telemetry can account for these false positives, that would be very helpful for lots of other potential spec cleanups in the future.
RW: https://github.com/tc39/notes/blob/master/meetings/2014-11/nov-18.md#46-zepto-broken-by-new-thisconstruct-usage-in-some-arrayprototype-methods RW: use of Symbol.species when testing cross realm behavior of built-ins (will follow up)

## Async Context

Presenter: Chengzhong Wu (CZW)

- [proposal](https://github.com/legendecas/proposal-async-context)
- [slides](https://docs.google.com/presentation/d/1c9gZv0e_3kITQI7Wwo2Cap3WviudORclE2dWsX4SIJ8/edit#slide=id.p)

CZW: (presents slides)

RBN: I'm excited about this proposal, and have been wanting something like this for a while. There’s a couple things that I wanted to discuss and SYG has a topic for one of them. This is very similar to logical call contexts and AsyncLocal in .NET, which is very useful because it allows you to keep track of variables globally but in an async execution flow.
especially useful in an app that may have multiple concurrent users and you want to track user authentication (e.g.) along with their requests. With the flow that might need to be available deeply in your call stack and you can’t just pass your request object around. There’s a lot of very useful and valuable features in this.
However, there will be issues that need to be addressed, similar to issues that had to be addressed in .NET when they added asynchronous flow capabilities.
that also had to be addressed in .Net when they added async flow.
One example is the configureAwait method in .NET, which is used to determine “when I return from the async call, should I return to the original context or not care?” often libraries won't want to care about the context you were in. It’s not until you get into your user code that you want to get back into the async flow you were in before.
There is also a lot of similarity with zones proposal introduced to do this same thing. Very excited about this, looking forward to where this goes.

CZW: Yes, we have been told to ??? with the zone proposal. The zone proposal ??? and there’s no champion to push it, so ??? we have been discussing in the NodeJS community. Based on current checks we can continue to evolve the APIs, and what we can provide.

KKL: From security, I don’t see a way for this proposal to make any progress. like the zones proposal before and anything that smells like dynamic scope this makes things observable things that should not be observable in user space. This makes observable things that should not be observable in user space & complicates things like user mode queuing problems. As RBN mentioned, there are a lot of issues that would have to be worked through. But it’s not just that there are a lot of issues, it adds another layer of pervasive concerns for any libraries that are working with asynchrony. Queue(?) had to take this into account with node domains. And the implication of this is that you have an entering context and an exiting context hook, and in those you’re presumably manipulating a stack of dynamic scope. I have many concerns, in summary.

GCL: On how this will interact with real code, the async context thing is something we already use in node. The async context thing is something already used in Node.js. APMs use this to do their APM magic. It seems to work pretty well already so I don’t think that the concern of how it will integrate is that much of a problem.

SYG: That’s a good segue, I can start with the history of zones, specifically with user-land wrapping. Zones, before my time, I got brought up to date by previous champion Domenic. Google and Angular looked very hard at zones, like local storage and userland wrapping. So I can offer some history here, we have been here before, and last time it did die in committee. Anything in the same problem space must contend with the same issues. User-land wrapping, especially with schedulers that take schedulers and do some asynchrony with them have to know how to ?? to do any sort of wrapping. The difficulty according to retrospectives according to internal folks I heard from there is a decision point to make up front on whether to wrap contexts to deal with errors or not. Not batch them and immediately report any errors, or you can wrap them and say defer my errors and process them error, instead of eagerly calling some on error handler. This decision as a userland library must do up front from the beginning. So any platform level API would have to provide at least these two kinds of wrapping functions. There is a lot of complexity & it seems pretty hard to educate folks what exactly the difference is. So this was a thorn last time with zones that this must also contend with.
not sure how to respond to "it just works" in userland. I’m not sure that it “just works” in userland. Other stuff with zones was that there were performance concerns from the browser team. If zones were a standard thing in the platform, anytime any async task is posted you have to check whether zones were in use and that is not desirable support because of the performance hit. how do we not penalize people not using zones? People bristled at that apparently, they were not excited to support that everywhere. Supporting it is a perf issue. We don’t know how to not penalise people who are not using zones. I think these are the largest ones, I did get some context on objections from Node at the time on what functionality they would like to see on that proposal, NOde reps can surface those concerns.

There are a lot of existing concerns and we have been here before. I haven’t seen anything in this presentation that we can overcome them this time.

CZW: In the zone proposal each run/wrap starts a new async flow and coexistence of zones doesn’t seems cooperates well. In this proposal and Nodejs AsyncTask only links async context without starting new async flows. So I believe this can be much easier for library owners to implement.

MAR: On nodejs blocking zones the last time, the main blocker was because zones was including the error handling in the proposal. And in this proposal the error handling was left out explicitly to leave out the problems with zones. And at least one of the people blocking zones for error handling already gave a positive signal that this proposal at least looks better than the previous one so I don’t believe that error handling here is blocker in the same way as it was on zones.

SYG: That’s good context to know, thank you very much.

CM: Not to pile on, but this feels like dynamic scoping which is just terrible in all kinds of ways. I think another piece of relevant background is some of the discussion about cancellation often mislabeled “promise cancellation”,

This proposal surfaces most of the same issues with keeping track of what are the irrelevant and relevant things in the causality graph -- in terms of which operations lead to which others -- apply here.

I agree that the problem that motivates this proposal — in particular nested example of causality illustrated in slide #8 -- that problem is real and some mechanism to address it would be helpful.

I don’t think this proposal gets us there. I think this just looks like a bug farm to me. Taking a step back and tracking causality (say, along the promise graph), there may be real value to be had in that.

CZW: regarding cancelation discussion, as far as I can tell there is already an in-progress discussion in the NodeJS community. So if the cancelation design is going to be designed in the async context model are there major issues regarding cancelation?

CM: I'm not talking about there being an issue relative to cancellation, I'm talking about they’re having most of the same problems. This requires the same machinery as cancellation. If it’s done right they should share about 90% of their underlying machinery.

RBN: Just wanted to say that I’m not entirely sure that I agree with that notion about cancellation, mostly because I’m still coming from the perspective that cancellation comes from a token that gets passed along, so what actually happens when you cancel is very explicit. Though there have been suggestions. There have been requests to implicitly pass along a cancellation token along the stack. An async local store could provide some capabilities for level of complexity that async tasks & locals do.

CM: RBN was talking about where you’re explicitly passing a token - I think that’s exactly the sort of thing that’s called for here, which is why I say it shares a lot of mechanism in common with cancellation.

JRL: Last proposal was about the dangers of adding `Symbol.species` in the language as it allows users code to execute when host only code is executing. In this case constructing the array and pushing into the array. There are some security risks with this. The async_hooks example that you demoed seems like it’s exposing more host machinery in this case the task scheduler and the task boundaries to user land code that happens while we are scheduling tasks. That seems especially dangerous.
We might find solutions to other parts of this proposal but I don’t imagine this is something that’s going to be acceptable.

CZW: In current NodeJS implementations regarding the async hooks, we are exposing the only things that are exposed to the public api is the top user facing object so there are no underlying implementation detailed resources that the userland code can get hands on. So that’s my idea on the issue.

SYG: I think my topic is basically the same as JRL’s, slightly more concrete, I’m concerned about more arbitrary user code that runs, but I don’t even think exposing task lifetime seems like a great idea. This space is - the continuation localstorage - is one use case of this whole proposal. This proposal also has a bunch of other APIs that I understand that come directly or largely inspired by existing APIs in node.

One of those is something that exposes the lifetimes of tasks. I am not sure if that is desirable. So there are a bunch of different use cases like async local storage, but also being able to hook into async tasks. That just seems like a different use case to me & I’m concerned about a subset of those much more than others.

BFS: I just want clarification - SYG, do you still have those concerns with async local storage if we allow WeakRefs on async local storage? You were concerned about exposing the lifetime of tasks, but if we can expose a finalizer on the duration of the task (?), do you have the same concerns?

SYG: I hadn't thought of that, I'll have to think it through. I was talking about the hooks like async tasks like before it runs pre/post async hooks

CZW: Regarding SYG’s concern, we expose the lifetime status through pre hooks, and there are no collecting let’s say weak refs regarding the object garbage collection state. That's what weak refs do. So the task lifetime provided in the hooks is just pre hooks there are no gc hooks in the async hooks API.

RPR: CZW, would you like to ask for stage 1?

CZW: Yes.

RPR: Any objections to stage 1?

CM, KKL: Yes.

RPR: Would someone like to summarize the objection?

CM: I would say from my perspective that the problem domain is compelling but this solution is sufficiently tangled up that it’s not ready. If CZW does further exploration of the problem space I’d be open to new solutions, but anything that has the whiff of dynamic scope is a non-starter for me.

### Conclusion/Resolution

Stage 1 not achieved.

## Intl Enumeration API for Stage 1

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/proposal-intl-enumeration)
- [slides](https://docs.google.com/presentation/d/17bkiVWuYxhMc24If72d6oENK3G6G-irO2EB4EEQCgxU/edit?usp=sharing)

FYT: Open for discussion.

RPR: The queue is empty. Does anyone have any questions?

(silence)

FYT: Looks like not an exciting API. (chuckles)

RW: The usual quality for stage 1 Intl proposals. Great job.

KG: Yeah, it’s exciting, it’s just not controversial.

RPR: SFC wanted to say hi?

SFC: Yeah, well it looks like WH has the next topic, so let’s go to him, I was going to talk about fingerprinting as well.

WH: Fingerprinting is a side effect of a lot of things we do. I’m wondering if there’s anyone here who is tasked with the job of reducing privacy concerns by pushing back against things which facilitate fingerprinting.

RW: By choice or by requirement? I ask that because when I was doing the initial authorship of the W3C generic sensors API with Toby Lenjel(?) we were politely guided towards reducing potential for fingerprinting for the generic sensors API.

WH: Who is “us”?

RW: Us was Toby Lenjel(?) and myself, and the editors that came and went afterwards as well. You can think about how there can be potential for figuring out ambient light patterns in a room in a browser. Comes down to slipping permission door-hangers on everything.

WH: In the context of things that we do in TC39, whose job is it to limit the fingerprinting surface?

DE: I guess it’s a matter for TC39 consensus, where we can all raise concerns. Are you worried that not enough TC39 members are looking at this and asking questions? It’s true that fingerprinting doesn't come up a lot in other proposals.

RW: I'm sort-of curious if this is a trick question or something, WH.

WH: It's not a trick question. I've just never heard of a feature in TC39 being rejected because of fingerprinting concerns. That makes me wonder whether anyone is watching for that.

RW: I haven’t heard of a feature being rejected because of fingerprinting concerns either. I do recall when we had a meeting in the Bay Area with a Google expert on that subject where we sort of went, “thanks for your presentation” and then carried on with business.

DE: Fingerprinting is just an active topic of discussion in ECMA-402. A lot of APIs that are added have potential fingerprinting implications, not just Intl APIs but also things that are incubated in ECMA-402, like navigator.locales. MCM of Webkit and ZB of Mozilla have been discussing these things with us, so there's no particular lack of attention being given to this.

JRL: So I’m not sure if WH is asking specifically, should the standards body be concerned with fingerprinting? I’m asking because Chrome has a [fingerprinting budget proposal](https://github.com/bslassey/privacy-budget) that they’re trying to do an intent to prototype, that would limit you from accessing every single thing that could give a fingerprint about the user. Like after you’ve accessed a certain number of things that are considered fingerprinting vectors It just refuses to do anything anymore - you get an error or some other sort of behavior that prevents you from fingerprinting this sort of data.

WH: I’m not sure how that would do anything since you can have more than one swing at the ball.

JRL: I will link that into the IRC or the notes.

WH: My question about fingerprinting is more of a general question than being directed at this specific proposal. I’m just curious and worried that because I haven’t seen anything be rejected due to its potential for fingerprinting, so I’m wondering who’s watching that and do we have the right people on the committee to watch for that?

RPR: Who’s that question to WH?

FYT: You mentioned the fingerprinting budget - is that part of a standard or part of a feature in Chrome?

JRL: It’s intended to be implemented as a part of the DOM or HTML, something in WHATWG As an actual specification for multiple browsers to implement. So it’s not something that JavaScript specifically needs to concern itself with, but something that browser implementations of JavaScript need to concern themselves with.

FYT: So is that in… what committee is talking about that?

JRL: WHATWG I think. https://www.chromium.org/Home/chromium-privacy/privacy-sandbox

SFC: About fingerprinting, I just wanted to say that there’s a couple types of fingerprinting we’re thinking about there. User preferences, such as navigator.locales, are more serious than the enumeration API, which is very much tied to the browser version. You can look up in the browser repositories which version of CLDR is shipped in a certain version number, so we aren't really exposing a fingerprinting vector any bigger than what you can already get from the user agent string. Also, as others have pointed out, much of this information can already be gotten through much more compute-intensive operations. ZB has volunteered to get some of the Tor people to look at this, and MCM has agreed to get some Apple people to look, so I think it’s very in-scope for Stage 1.

RPR: Queue is empty. FYT, would you like to ask for stage 1?

FYT: I would like to ask for stage 1 advancement. And we can resolve the issue discussed for when we go for stage 2.

(silence)

RPR: Congratulations on achieving stage 1.

### Conclusion/Resolution

Stage 1 achieved.
